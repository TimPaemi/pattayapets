"use strict";

/*
 * Runtime adapter for the checked-in, publication-safe airline snapshot.
 *
 * The private research dossier is deliberately gitignored. The JSON snapshot
 * beside this adapter contains only the eight fields approved for publication,
 * so clean CI and Cloudflare checkouts never depend on private operator files.
 * The airline audit compares this snapshot with the private dossier whenever
 * that dossier is available during an operator release.
 *
 * Keep the adapter as a strict allowlist and freeze every record. A page must
 * not be able to consume extra dossier fields accidentally.
 */

const SNAPSHOT_RECORDS = require("./airline-policy-snapshot.json");

const EXPECTED_POLICY_COUNT = 17;
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

function nonEmptyString(value, label) {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new TypeError(label + " must be a nonempty string");
  }
  return value.trim();
}

function validDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(value || ""))) return false;
  const parsed = new Date(value + "T00:00:00Z");
  return !Number.isNaN(parsed.valueOf()) && parsed.toISOString().slice(0, 10) === value;
}

function sanitizePolicy(record, index) {
  const label = "airlinePolicies[" + index + "]";
  if (!record || typeof record !== "object" || Array.isArray(record)) {
    throw new TypeError(label + " must be an object");
  }

  const keys = Object.keys(record).sort();
  const expectedKeys = SNAPSHOT_FIELDS.slice().sort();
  if (keys.join(",") !== expectedKeys.join(",")) {
    throw new TypeError(label + " contains unsupported or missing fields");
  }

  const airline = nonEmptyString(record.airline, label + ".airline");
  const iata = nonEmptyString(record.iata, label + ".iata");
  if (!/^[A-Z0-9]{2}$/.test(iata)) {
    throw new TypeError(label + ".iata must be a two-character IATA code");
  }

  if (!Array.isArray(record.ordinaryPetModes) || !record.ordinaryPetModes.length) {
    throw new TypeError(label + ".ordinaryPetModes must be a nonempty array");
  }
  const modes = record.ordinaryPetModes.map(function (mode) {
    const clean = nonEmptyString(mode, label + ".ordinaryPetModes");
    if (!ALLOWED_MODES.has(clean)) throw new TypeError(label + " has an unsupported mode");
    return clean;
  });
  if (new Set(modes).size !== modes.length) {
    throw new TypeError(label + ".ordinaryPetModes contains a duplicate");
  }
  if (modes.includes("Manifest cargo only") && modes.length !== 1) {
    throw new TypeError(label + " cannot combine manifest-cargo-only with passenger carriage");
  }

  const policyUrl = nonEmptyString(record.policyUrl, label + ".policyUrl");
  let parsedUrl;
  try { parsedUrl = new URL(policyUrl); }
  catch (_) { throw new TypeError(label + ".policyUrl must be a valid URL"); }
  if (parsedUrl.protocol !== "https:" || parsedUrl.username || parsedUrl.password ||
      (parsedUrl.port && parsedUrl.port !== "443")) {
    throw new TypeError(label + ".policyUrl must be credential-free HTTPS");
  }

  const asOf = nonEmptyString(record.asOf, label + ".asOf");
  if (!validDate(asOf)) throw new TypeError(label + ".asOf must be a real YYYY-MM-DD date");
  const confidence = nonEmptyString(record.confidence, label + ".confidence");
  if (!ALLOWED_CONFIDENCE.has(confidence)) {
    throw new TypeError(label + ".confidence has an unsupported value");
  }

  return Object.freeze({
    airline: airline,
    iata: iata,
    ordinaryPetModes: Object.freeze(modes),
    bookingTiming: nonEmptyString(record.bookingTiming, label + ".bookingTiming"),
    bookingMethod: nonEmptyString(record.bookingMethod, label + ".bookingMethod"),
    policyUrl: policyUrl,
    asOf: asOf,
    confidence: confidence
  });
}

if (!Array.isArray(SNAPSHOT_RECORDS) || SNAPSHOT_RECORDS.length !== EXPECTED_POLICY_COUNT) {
  throw new Error("Expected exactly " + EXPECTED_POLICY_COUNT + " reviewed airline policies");
}

const AIRLINE_POLICY_SNAPSHOT = Object.freeze(SNAPSHOT_RECORDS.map(sanitizePolicy));

const seenAirlines = new Set();
const seenIata = new Set();
AIRLINE_POLICY_SNAPSHOT.forEach(function (policy) {
  if (seenAirlines.has(policy.airline)) throw new Error("Duplicate airline: " + policy.airline);
  if (seenIata.has(policy.iata)) throw new Error("Duplicate IATA code: " + policy.iata);
  seenAirlines.add(policy.airline);
  seenIata.add(policy.iata);
});

module.exports = { AIRLINE_POLICY_SNAPSHOT };
