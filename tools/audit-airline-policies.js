#!/usr/bin/env node
"use strict";

/*
 * Hard publication gate for the airline comparison snapshot.
 *
 * Usage:
 *   node tools/audit-airline-policies.js
 *   node tools/audit-airline-policies.js --max-age-days 90 --as-of 2026-08-01
 *
 * Airline policies change frequently, so the default freshness ceiling is 90
 * calendar days. --as-of exists for deterministic CI and fixture testing.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SOURCE_FILE = path.join(ROOT, "research", "findings", "airline-pet-policies.json");
const ADAPTER_FILE = path.join(ROOT, "src", "data", "airline-policy-snapshot.js");
const EXPECTED_COUNT = 17;
const DEFAULT_MAX_AGE_DAYS = 90;
const DAY_MS = 24 * 60 * 60 * 1000;
const SNAPSHOT_FIELDS = Object.freeze([
  "airline",
  "iata",
  "ordinaryPetModes",
  "bookingTiming",
  "bookingMethod",
  "policyUrl",
  "asOf",
  "confidence"
]);
const ALLOWED_MODES = new Set(["Cabin", "Checked baggage", "Manifest cargo only"]);
const ALLOWED_CONFIDENCE = new Set(["high", "medium", "low"]);
const NO_PUBLIC_MINIMUM_BOOKING_TIMING =
  "No public minimum booking or request lead time is stated in the reviewed policy; " +
  "request shipment-specific timing from the airline.";

/* A policy URL may use any subdomain of the airline's own registered domain. */
const OFFICIAL_DOMAINS = Object.freeze({
  TG: ["thaiairways.com"],
  BR: ["evaair.com"],
  SQ: ["singaporeair.com"],
  EK: ["emirates.com"],
  QR: ["qatarairways.com"],
  EY: ["etihad.com"],
  LH: ["lufthansa.com"],
  KL: ["klm.com"],
  TK: ["turkishairlines.com"],
  AY: ["finnair.com"],
  CX: ["cathaypacific.com", "cathaycargo.com"],
  CI: ["china-airlines.com"],
  KE: ["koreanair.com"],
  NH: ["ana.co.jp"],
  JL: ["jal.co.jp"],
  QF: ["qantas.com"],
  AC: ["aircanada.com"]
});

function usage() {
  console.log("Usage: node tools/audit-airline-policies.js " +
    "[--max-age-days N] [--as-of YYYY-MM-DD]");
  console.log("Default --max-age-days: " + DEFAULT_MAX_AGE_DAYS);
}

function parseArgs(argv) {
  const options = {
    maxAgeDays: DEFAULT_MAX_AGE_DAYS,
    asOf: new Date().toISOString().slice(0, 10)
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--help" || arg === "-h") {
      usage();
      process.exit(0);
    }
    if (arg === "--max-age-days" || arg === "--as-of") {
      if (index + 1 >= argv.length) throw new Error(arg + " requires a value");
      const value = argv[index + 1];
      index += 1;
      if (arg === "--max-age-days") options.maxAgeDays = Number(value);
      else options.asOf = value;
      continue;
    }
    if (arg.startsWith("--max-age-days=")) {
      options.maxAgeDays = Number(arg.slice("--max-age-days=".length));
      continue;
    }
    if (arg.startsWith("--as-of=")) {
      options.asOf = arg.slice("--as-of=".length);
      continue;
    }
    throw new Error("Unknown argument: " + arg);
  }

  if (!Number.isInteger(options.maxAgeDays) || options.maxAgeDays < 1 ||
      options.maxAgeDays > 3650) {
    throw new Error("--max-age-days must be an integer from 1 through 3650");
  }
  if (!validDate(options.asOf)) throw new Error("--as-of must be a real YYYY-MM-DD date");
  return options;
}

function validDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(value || ""))) return false;
  const parsed = new Date(value + "T00:00:00Z");
  return !Number.isNaN(parsed.valueOf()) && parsed.toISOString().slice(0, 10) === value;
}

function nonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function hostnameIsOfficial(hostname, domains) {
  const host = hostname.toLowerCase().replace(/\.$/, "");
  return domains.some(function (domain) {
    return host === domain || host.endsWith("." + domain);
  });
}

function expectedModes(record) {
  const policy = record.petPolicy || {};
  const modes = [];
  if (policy.cabinAllowed === true) modes.push("Cabin");
  if (policy.holdAllowed === true) modes.push("Checked baggage");
  if (policy.manifestCargoOnly === true) modes.push("Manifest cargo only");
  return modes;
}

function equalArray(left, right) {
  return Array.isArray(left) && Array.isArray(right) && left.length === right.length &&
    left.every(function (value, index) { return value === right[index]; });
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  const failures = [];
  const fail = function (code, message) {
    failures.push({ code: code, message: message });
  };

  let source = null;
  try {
    source = JSON.parse(fs.readFileSync(SOURCE_FILE, "utf8"));
  } catch (error) {
    fail("SOURCE_LOAD", path.relative(ROOT, SOURCE_FILE) + ": " + error.message);
  }

  let adapter = null;
  try {
    delete require.cache[require.resolve(ADAPTER_FILE)];
    adapter = require(ADAPTER_FILE);
  } catch (error) {
    fail("ADAPTER_LOAD", path.relative(ROOT, ADAPTER_FILE) + ": " + error.message);
  }

  const exportedKeys = adapter && typeof adapter === "object"
    ? Object.keys(adapter).sort() : [];
  if (exportedKeys.join(",") !== "AIRLINE_POLICY_SNAPSHOT") {
    fail("ADAPTER_EXPORTS", "Adapter may export only AIRLINE_POLICY_SNAPSHOT; found " +
      (exportedKeys.join(", ") || "none"));
  }

  const snapshot = adapter && adapter.AIRLINE_POLICY_SNAPSHOT;
  if (!Array.isArray(source)) {
    if (source !== null) fail("SOURCE_SHAPE", "Research source must be an array");
    source = [];
  }
  if (!Array.isArray(snapshot)) {
    fail("SNAPSHOT_SHAPE", "AIRLINE_POLICY_SNAPSHOT must be an array");
  }

  if (source.length !== EXPECTED_COUNT) {
    fail("SOURCE_COUNT", "Expected " + EXPECTED_COUNT + " source policies, found " + source.length);
  }
  if (Array.isArray(snapshot) && snapshot.length !== EXPECTED_COUNT) {
    fail("SNAPSHOT_COUNT", "Expected " + EXPECTED_COUNT + " snapshot policies, found " +
      snapshot.length);
  }
  if (Object.keys(OFFICIAL_DOMAINS).length !== EXPECTED_COUNT) {
    fail("DOMAIN_MAP_COUNT", "Official-domain map must cover exactly " + EXPECTED_COUNT + " IATA codes");
  }

  const sourceByIata = new Map();
  const sourceAirlines = new Set();
  source.forEach(function (record, index) {
    const where = "source[" + index + "]";
    if (!record || typeof record !== "object" || Array.isArray(record)) {
      fail("SOURCE_RECORD", where + " must be an object");
      return;
    }
    if (!nonEmptyString(record.airline)) fail("SOURCE_AIRLINE", where + " has no airline");
    if (!/^[A-Z0-9]{2}$/.test(String(record.iata || ""))) {
      fail("SOURCE_IATA", where + " has invalid IATA code " + JSON.stringify(record.iata));
      return;
    }
    if (sourceByIata.has(record.iata)) fail("DUPLICATE_IATA", record.iata + " is duplicated");
    sourceByIata.set(record.iata, record);
    if (sourceAirlines.has(record.airline)) fail("DUPLICATE_AIRLINE", record.airline + " is duplicated");
    sourceAirlines.add(record.airline);

    const policy = record.petPolicy;
    if (!policy || typeof policy !== "object" || Array.isArray(policy)) {
      fail("SOURCE_POLICY", where + ".petPolicy must be an object");
      return;
    }
    ["cabinAllowed", "holdAllowed", "manifestCargoOnly"].forEach(function (field) {
      if (typeof policy[field] !== "boolean") {
        fail("SOURCE_MODE", where + ".petPolicy." + field + " must be boolean");
      }
    });
    if (policy.manifestCargoOnly && (policy.cabinAllowed || policy.holdAllowed)) {
      fail("SOURCE_MODE_CONFLICT", record.iata + " mixes cargo-only and passenger modes");
    }
    if (!expectedModes(record).length) fail("SOURCE_MODE_EMPTY", record.iata + " has no ordinary-pet mode");
    if (policy.bookingLeadTime != null && !nonEmptyString(policy.bookingLeadTime)) {
      fail("SOURCE_TIMING", record.iata + " has an invalid bookingLeadTime");
    }
    if (!nonEmptyString(policy.bookingMethod)) {
      fail("SOURCE_METHOD", record.iata + " has no booking method");
    }

    const restrictions = record.breedRestrictions;
    const policyUrl = restrictions && restrictions.policyUrl;
    const reviewedAt = restrictions && restrictions.asOf;
    if (!validDate(reviewedAt)) {
      fail("SOURCE_DATE", record.iata + " has invalid policy as-of date " + JSON.stringify(reviewedAt));
    } else {
      const ageDays = Math.floor((Date.parse(options.asOf + "T00:00:00Z") -
        Date.parse(reviewedAt + "T00:00:00Z")) / DAY_MS);
      if (ageDays < 0) fail("FUTURE_DATE", record.iata + " is dated " + (-ageDays) + " days in the future");
      else if (ageDays > options.maxAgeDays) {
        fail("STALE_POLICY", record.iata + " is " + ageDays + " days old (maximum " +
          options.maxAgeDays + ")");
      }
    }

    let parsedUrl = null;
    try { parsedUrl = new URL(policyUrl); }
    catch (_) { fail("POLICY_URL", record.iata + " has an invalid policy URL"); }
    const domains = OFFICIAL_DOMAINS[record.iata];
    if (!domains) {
      fail("OFFICIAL_DOMAIN", "No official-domain allowlist for " + record.iata);
    } else if (parsedUrl) {
      if (parsedUrl.protocol !== "https:" || parsedUrl.username || parsedUrl.password ||
          (parsedUrl.port && parsedUrl.port !== "443")) {
        fail("POLICY_URL_HTTPS", record.iata + " policy URL must be credential-free HTTPS");
      }
      if (!hostnameIsOfficial(parsedUrl.hostname, domains)) {
        fail("POLICY_URL_DOMAIN", record.iata + " policy URL host " + parsedUrl.hostname +
          " is not on its official-domain allowlist");
      }
    }

    if (!Array.isArray(record.sources)) {
      fail("SOURCE_CITATIONS", record.iata + " has no sources array");
    } else {
      const policySource = record.sources.find(function (item) {
        return item && item.url === policyUrl;
      });
      if (!policySource) {
        fail("POLICY_URL_SUPPORT", record.iata + " policy URL is absent from its reviewed sources");
      } else {
        if (!nonEmptyString(policySource.publisher) || !nonEmptyString(policySource.title) ||
            !nonEmptyString(policySource.supports)) {
          fail("POLICY_SOURCE_FIELDS", record.iata + " policy source lacks publisher, title, or support scope");
        }
        if (policySource.accessed !== reviewedAt) {
          fail("POLICY_SOURCE_DATE", record.iata + " policy URL access date does not equal policy as-of date");
        }
      }
    }
    if (!ALLOWED_CONFIDENCE.has(record.confidence)) {
      fail("SOURCE_CONFIDENCE", record.iata + " has unsupported confidence " +
        JSON.stringify(record.confidence));
    }
  });

  const snapshotIata = new Set();
  const snapshotAirlines = new Set();
  (Array.isArray(snapshot) ? snapshot : []).forEach(function (policy, index) {
    const where = "snapshot[" + index + "]";
    if (!policy || typeof policy !== "object" || Array.isArray(policy)) {
      fail("SNAPSHOT_RECORD", where + " must be an object");
      return;
    }
    const keys = Object.keys(policy).sort();
    const expectedKeys = SNAPSHOT_FIELDS.slice().sort();
    if (!equalArray(keys, expectedKeys)) {
      fail("UNSUPPORTED_FIELDS", where + " fields are [" + keys.join(", ") +
        "]; only [" + expectedKeys.join(", ") + "] may be published");
    }
    if (!Object.isFrozen(policy) || !Object.isFrozen(policy.ordinaryPetModes)) {
      fail("SNAPSHOT_MUTABLE", where + " and its modes must be frozen");
    }
    ["airline", "iata", "bookingTiming", "bookingMethod", "policyUrl", "asOf", "confidence"]
      .forEach(function (field) {
        if (!nonEmptyString(policy[field])) fail("SNAPSHOT_FIELD", where + "." + field + " is empty");
      });
    if (!Array.isArray(policy.ordinaryPetModes) || !policy.ordinaryPetModes.length ||
        policy.ordinaryPetModes.some(function (mode) { return !ALLOWED_MODES.has(mode); }) ||
        new Set(policy.ordinaryPetModes).size !== policy.ordinaryPetModes.length) {
      fail("SNAPSHOT_MODES", where + " has invalid ordinaryPetModes");
    }
    if (snapshotIata.has(policy.iata)) fail("SNAPSHOT_DUPLICATE_IATA", policy.iata + " is duplicated");
    snapshotIata.add(policy.iata);
    if (snapshotAirlines.has(policy.airline)) {
      fail("SNAPSHOT_DUPLICATE_AIRLINE", policy.airline + " is duplicated");
    }
    snapshotAirlines.add(policy.airline);
    if (!validDate(policy.asOf)) fail("SNAPSHOT_DATE", policy.iata + " has an invalid asOf date");
    if (!ALLOWED_CONFIDENCE.has(policy.confidence)) {
      fail("SNAPSHOT_CONFIDENCE", policy.iata + " has unsupported confidence");
    }

    const raw = sourceByIata.get(policy.iata);
    if (!raw) {
      fail("SNAPSHOT_SOURCE_PARITY", policy.iata + " has no matching source record");
      return;
    }
    const expectedTiming = raw.petPolicy.bookingLeadTime == null
      ? NO_PUBLIC_MINIMUM_BOOKING_TIMING : raw.petPolicy.bookingLeadTime.trim();
    const parity = policy.airline === raw.airline &&
      equalArray(policy.ordinaryPetModes, expectedModes(raw)) &&
      policy.bookingTiming === expectedTiming &&
      policy.bookingMethod === raw.petPolicy.bookingMethod.trim() &&
      policy.policyUrl === raw.breedRestrictions.policyUrl.trim() &&
      policy.asOf === raw.breedRestrictions.asOf.trim() &&
      policy.confidence === raw.confidence.trim();
    if (!parity) fail("SNAPSHOT_SOURCE_PARITY", policy.iata + " differs from its reviewed source fields");
  });

  if (Array.isArray(snapshot) && !Object.isFrozen(snapshot)) {
    fail("SNAPSHOT_MUTABLE", "AIRLINE_POLICY_SNAPSHOT must be frozen");
  }

  const expectedSpecialModes = {
    CX: ["Manifest cargo only"],
    QF: ["Manifest cargo only"],
    EY: ["Cabin"]
  };
  Object.entries(expectedSpecialModes).forEach(function (entry) {
    const policy = Array.isArray(snapshot)
      ? snapshot.find(function (item) { return item.iata === entry[0]; }) : null;
    if (!policy || !equalArray(policy.ordinaryPetModes, entry[1])) {
      fail("SPECIAL_MODE", entry[0] + " must publish exactly: " + entry[1].join(", "));
    }
  });

  console.log("AIRLINE POLICY SNAPSHOT AUDIT");
  console.log("=".repeat(54));
  console.log("Research source:  research/findings/airline-pet-policies.json");
  console.log("Source records:   " + source.length + " (required " + EXPECTED_COUNT + ")");
  console.log("Snapshot records: " + (Array.isArray(snapshot) ? snapshot.length : 0));
  console.log("Published fields: " + SNAPSHOT_FIELDS.length + " allowlisted fields per record");
  console.log("Freshness:        maximum " + options.maxAgeDays + " days as of " + options.asOf +
    " (default " + DEFAULT_MAX_AGE_DAYS + ")");
  console.log("Special modes:    CX cargo-only; QF cargo-only; EY cabin-only");
  console.log("HARD:             " + failures.length);
  failures.forEach(function (finding) {
    console.error("  HARD [" + finding.code + "] " + finding.message);
  });

  if (failures.length) {
    console.error("FAIL - airline-policy snapshot is not safe to publish.");
    process.exitCode = 1;
  } else {
    console.log("PASS - 17 reviewed policies are complete, current, source-matched, and publication-safe.");
  }
}

try { main(); }
catch (error) {
  console.error("Airline policy snapshot audit: FAIL\n- " + error.message);
  process.exit(1);
}
