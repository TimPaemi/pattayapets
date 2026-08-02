#!/usr/bin/env node
"use strict";

/*
 * Blocking provenance gate for high-consequence regulatory and clinical claims.
 * It validates the dated claim registry, the links actually emitted by page
 * modules, a small set of reviewed safety invariants, and deliberately broken
 * fixtures proving that the gate fails closed.
 */

const fs = require("fs");
const path = require("path");
const { manifestEntryForPath, hasAuditScope } = require("../src/page-manifest.js");

const ROOT = path.resolve(__dirname, "..");
const MONTHS = Object.freeze({
  january: 1, february: 2, march: 3, april: 4, may: 5, june: 6,
  july: 7, august: 8, september: 9, october: 10, november: 11, december: 12
});
const REQUIRED_FIELDS = Object.freeze([
  "jurisdiction", "scope", "checkedAt", "editorialReviewer", "editorialReviewerRole",
  "qualifiedReviewStatus", "recheckBy", "sourceUrl", "sourceExcerpt",
  "sourceExcerptLanguage", "support", "exampleConsumers"
]);
const OPTIONAL_FIELDS = new Set(["doesNotSupport", "sourceEvidenceNote"]);

class AuditError extends Error {
  constructor(code, message) {
    super(message);
    this.name = "AuditError";
    this.code = code;
  }
}

function fail(code, message) { throw new AuditError(code, message); }

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const raw = argv[i];
    if (!raw.startsWith("--")) fail("CLI_ARGUMENT", "Unexpected argument: " + raw);
    const eq = raw.indexOf("=");
    const key = raw.slice(2, eq === -1 ? undefined : eq);
    const value = eq === -1 ? argv[++i] : raw.slice(eq + 1);
    if (!value || value.startsWith("--")) fail("CLI_ARGUMENT", "Missing value for --" + key);
    if (!["registry", "page-dir", "fixtures", "max-age-days", "today"].includes(key)) {
      fail("CLI_ARGUMENT", "Unknown option: --" + key);
    }
    if (Object.hasOwn(out, key)) fail("CLI_ARGUMENT", "Duplicate option: --" + key);
    out[key] = value;
  }
  for (const key of ["registry", "page-dir", "fixtures", "max-age-days"]) {
    if (!out[key]) fail("CLI_ARGUMENT", "Required option is missing: --" + key);
  }
  const maxAgeDays = Number(out["max-age-days"]);
  if (!Number.isSafeInteger(maxAgeDays) || maxAgeDays < 1 || maxAgeDays > 3650) {
    fail("CLI_ARGUMENT", "--max-age-days must be an integer from 1 to 3650");
  }
  return {
    registry: out.registry,
    pageDir: out["page-dir"],
    fixtures: out.fixtures,
    maxAgeDays,
    today: out.today || new Date().toISOString().slice(0, 10),
    todayOverridden: !!out.today
  };
}

function isoDay(value, code, label) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(value || ""))) {
    fail(code, label + " must use YYYY-MM-DD");
  }
  const parts = value.split("-").map(Number);
  const ms = Date.UTC(parts[0], parts[1] - 1, parts[2]);
  if (new Date(ms).toISOString().slice(0, 10) !== value) fail(code, label + " is not a real date: " + value);
  return ms;
}

function resolveInsideRoot(value, kind) {
  const target = path.resolve(ROOT, value);
  const rel = path.relative(ROOT, target);
  if (!rel || rel === ".." || rel.startsWith(".." + path.sep) || path.isAbsolute(rel)) {
    fail("PATH_CONTAINMENT", kind + " must be a path inside the repository: " + value);
  }
  if (!fs.existsSync(target)) fail("PATH_MISSING", kind + " does not exist: " + value);
  const real = fs.realpathSync(target);
  const realRel = path.relative(ROOT, real);
  if (realRel === ".." || realRel.startsWith(".." + path.sep) || path.isAbsolute(realRel)) {
    fail("PATH_CONTAINMENT", kind + " resolves outside the repository: " + value);
  }
  return target;
}

function nonempty(value, code, label) {
  if (typeof value !== "string" || !value.trim()) fail(code, label + " must be a nonempty string");
}

function decodeHtml(value) {
  return String(value || "")
    .replace(/&#(\d+);/g, function (_, n) { return String.fromCodePoint(Number(n)); })
    .replace(/&#x([0-9a-f]+);/gi, function (_, n) { return String.fromCodePoint(parseInt(n, 16)); })
    .replace(/&amp;/gi, "&").replace(/&quot;/gi, '"').replace(/&apos;|&#39;/gi, "'")
    .replace(/&nbsp;/gi, " ").replace(/&(?:ndash|mdash);/gi, "-")
    .replace(/&(?:lsquo|rsquo);/gi, "'").replace(/&(?:ldquo|rdquo);/gi, '"')
    .replace(/&ge;/gi, ">=").replace(/&le;/gi, "<=");
}

function textOf(html) {
  return decodeHtml(String(html || "").replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ").trim();
}

function normalizedRoute(value, code, label) {
  if (typeof value !== "string" || !/^\/(?:$|[a-z0-9][a-z0-9/-]*(?:\.html|\/))$/.test(value) ||
      value.includes("//") || value.includes("..") || /[?#%\\]/.test(value)) {
    fail(code, label + " is not a canonical site route: " + JSON.stringify(value));
  }
  if (value === "/") return "/";
  return value.toLowerCase().replace(/\/index\.html$/, "/").replace(/\.html$/, "").replace(/\/$/, "");
}

function validHttps(value, code, label) {
  let url;
  try { url = new URL(value); } catch (_) { fail(code, label + " is not a valid URL: " + value); }
  if (url.protocol !== "https:" || !url.hostname || url.username || url.password) {
    fail(code, label + " must be an unauthenticated HTTPS URL: " + value);
  }
}

function attrsOf(tag) {
  const attrs = {};
  const re = /([^\s=/>]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/g;
  let match;
  while ((match = re.exec(tag))) attrs[match[1].toLowerCase()] = decodeHtml(match[2] ?? match[3] ?? match[4]);
  return attrs;
}

function claimLinks(body, pagePath) {
  const rawCount = (String(body || "").match(/\bdata-claim-id\s*=/gi) || []).length;
  const links = [];
  for (const match of String(body || "").matchAll(/<[^>]*\bdata-claim-id\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)[^>]*>/gi)) {
    const tag = match[0];
    const attrs = attrsOf(tag);
    if (!/^<a\b/i.test(tag) || !attrs["data-claim-id"] || !attrs.href) {
      fail("LINK_MALFORMED", pagePath + " has data-claim-id on a non-link or without href");
    }
    links.push({ id: attrs["data-claim-id"], href: attrs.href });
  }
  if (links.length !== rawCount) fail("LINK_MALFORMED", pagePath + " has an unparseable data-claim-id attribute");
  return links;
}

function englishReviewDates(body, pagePath) {
  const text = textOf(body);
  if (!/\blast reviewed\b/i.test(text)) return [];
  const found = [];
  const re = /\blast reviewed(?:\s+on)?\s+(\d{4}-\d{2}-\d{2}|\d{1,2}\s+[A-Za-z]+\s+\d{4})/gi;
  let match;
  while ((match = re.exec(text))) {
    if (/^\d{4}/.test(match[1])) {
      isoDay(match[1], "PAGE_REVIEW_DATE_PARSE", pagePath + " visible last-reviewed date");
      found.push(match[1]);
      continue;
    }
    const p = match[1].toLowerCase().split(/\s+/);
    const month = MONTHS[p[1]];
    if (!month) fail("PAGE_REVIEW_DATE_PARSE", pagePath + " has an unknown month in " + match[1]);
    const iso = p[2] + "-" + String(month).padStart(2, "0") + "-" + String(Number(p[0])).padStart(2, "0");
    isoDay(iso, "PAGE_REVIEW_DATE_PARSE", pagePath + " visible last-reviewed date");
    found.push(iso);
  }
  if (!found.length) fail("PAGE_REVIEW_DATE_PARSE", pagePath + " says 'last reviewed' without a parseable date");
  return found;
}

function validateRegistry(registry, pages, today, maxAgeDays) {
  if (!registry || typeof registry !== "object" || Array.isArray(registry) || !Object.keys(registry).length) {
    fail("REGISTRY_EXPORT", "REGULATED_CLAIMS must be a nonempty object");
  }
  const todayMs = isoDay(today, "TODAY_DATE", "audit date");
  const pageAliases = new Set(pages.map(function (page) {
    return normalizedRoute(page.path, "PAGE_ROUTE", "page path");
  }));
  for (const [id, claim] of Object.entries(registry)) {
    if (!/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/.test(id)) fail("CLAIM_ID", "Invalid claim ID: " + id);
    if (!claim || typeof claim !== "object" || Array.isArray(claim)) fail("CLAIM_SCHEMA", id + " must be an object");
    for (const field of REQUIRED_FIELDS) {
      if (!Object.hasOwn(claim, field)) fail("CLAIM_SCHEMA_REQUIRED", id + " is missing required field " + field);
    }
    for (const field of Object.keys(claim)) {
      if (!REQUIRED_FIELDS.includes(field) && !OPTIONAL_FIELDS.has(field)) {
        fail("CLAIM_SCHEMA_UNKNOWN", id + " has unknown field " + field);
      }
    }
    for (const field of ["jurisdiction", "scope", "editorialReviewer", "editorialReviewerRole",
      "qualifiedReviewStatus", "sourceExcerptLanguage", "support"]) {
      nonempty(claim[field], "CLAIM_SCHEMA_VALUE", id + "." + field);
    }
    for (const field of OPTIONAL_FIELDS) {
      if (Object.hasOwn(claim, field)) nonempty(claim[field], "CLAIM_SCHEMA_VALUE", id + "." + field);
    }
    if (!/^[A-Za-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$/.test(claim.sourceExcerptLanguage)) {
      fail("CLAIM_SCHEMA_VALUE", id + ".sourceExcerptLanguage must be a language tag");
    }
    if (!Array.isArray(claim.sourceExcerpt) || !claim.sourceExcerpt.length) {
      fail("CLAIM_SCHEMA_VALUE", id + ".sourceExcerpt must be a nonempty array of exact source fragments");
    }
    claim.sourceExcerpt.forEach(function (excerpt, index) {
      nonempty(excerpt, "CLAIM_SCHEMA_VALUE", id + ".sourceExcerpt[" + index + "]");
    });
    validHttps(claim.sourceUrl, "CLAIM_SOURCE_HTTPS", id + ".sourceUrl");
    const checked = isoDay(claim.checkedAt, "CLAIM_DATE", id + ".checkedAt");
    const recheck = isoDay(claim.recheckBy, "CLAIM_DATE", id + ".recheckBy");
    if (checked > todayMs) fail("CLAIM_CHECKED_FUTURE", id + ".checkedAt is in the future: " + claim.checkedAt);
    if (recheck < checked) fail("CLAIM_RECHECK_ORDER", id + ".recheckBy predates checkedAt");
    if (recheck < todayMs) fail("CLAIM_RECHECK_EXPIRED", id + " passed its recheckBy date " + claim.recheckBy);
    const ageDays = Math.floor((todayMs - checked) / 86400000);
    if (ageDays > maxAgeDays) fail("CLAIM_CHECK_STALE", id + " was checked " + ageDays + " days ago (limit " + maxAgeDays + ")");
    if (!Array.isArray(claim.exampleConsumers) || !claim.exampleConsumers.length) {
      fail("CLAIM_EXAMPLES", id + ".exampleConsumers must be a nonempty representative list");
    }
    const seen = new Set();
    claim.exampleConsumers.forEach(function (consumer, index) {
      const normalized = normalizedRoute(consumer, "CLAIM_EXAMPLE_PATH", id + ".exampleConsumers[" + index + "]");
      if (seen.has(normalized)) fail("CLAIM_EXAMPLE_DUPLICATE", id + " repeats normalized example route " + normalized);
      seen.add(normalized);
      if (!pageAliases.has(normalized)) fail("CLAIM_EXAMPLE_UNKNOWN", id + " names a missing example page: " + consumer);
    });
  }
}

function validatePages(registry, pages, requireCoverage) {
  const seenPaths = new Set();
  let linkCount = 0;
  let regulatedPageCount = 0;
  const used = new Set();
  for (const page of pages) {
    if (!page || typeof page !== "object") fail("PAGE_SCHEMA", "Page module returned a non-object value");
    const normalized = normalizedRoute(page.path, "PAGE_ROUTE", "page path");
    if (seenPaths.has(normalized)) fail("PAGE_ROUTE_DUPLICATE", "Duplicate normalized page route: " + page.path);
    seenPaths.add(normalized);
    const links = claimLinks(page.body || "", page.path);
    const manifestEntry = manifestEntryForPath(page.path);
    if (requireCoverage && hasAuditScope(manifestEntry, "regulated")) {
      regulatedPageCount++;
      if (!links.length) {
        fail("REGULATED_PAGE_UNCITED", page.path + " is in the regulated audit scope but renders no claim-ledger citation");
      }
    }
    for (const link of links) {
      const claim = registry[link.id];
      if (!claim) fail("LINK_UNKNOWN_CLAIM", page.path + " renders unknown claim ID " + link.id);
      if (link.href !== claim.sourceUrl) {
        fail("LINK_SOURCE_MISMATCH", page.path + " links " + link.id + " to " + link.href + " instead of " + claim.sourceUrl);
      }
      used.add(link.id);
      linkCount++;
    }
    const visibleDates = englishReviewDates(page.body || "", page.path);
    if (visibleDates.length) {
      isoDay(page.updated, "PAGE_UPDATED", page.path + ".updated");
      for (const visible of visibleDates) {
        if (visible !== page.updated) {
          fail("PAGE_REVIEW_DATE_MISMATCH", page.path + " says last reviewed " + visible + " but page.updated is " + page.updated);
        }
      }
    }
  }
  for (const id of Object.keys(registry)) {
    if (!used.has(id)) fail("CLAIM_UNUSED", id + " is registered but is not rendered by any page");
  }
  return { linkCount, usedClaims: used.size, regulatedPageCount };
}

function hasClaim(page, id) {
  return claimLinks(page.body || "", page.path).some(function (link) { return link.id === id; });
}

function validClinicalReview(value, today) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  for (const field of ["reviewer", "credential", "reviewedAt"]) {
    if (typeof value[field] !== "string" || !value[field].trim()) return false;
  }
  try {
    if (isoDay(value.reviewedAt, "CLINICAL_REVIEW", "clinicalReview.reviewedAt") > isoDay(today, "TODAY_DATE", "audit date")) return false;
  } catch (_) { return false; }
  if (!Array.isArray(value.sources) || !value.sources.length) return false;
  try { value.sources.forEach(function (source) { validHttps(source, "CLINICAL_REVIEW", "clinicalReview source"); }); }
  catch (_) { return false; }
  return true;
}

function validateInvariants(pages, today, requireFlagships) {
  const byPath = new Map(pages.map(function (page) { return [page.path, page]; }));
  const importText = pages.filter(function (page) { return page.path.startsWith("/bring-pet-to-thailand/"); })
    .map(function (page) { return textOf(page.body); }).join("\n");
  const exportText = pages.filter(function (page) { return page.path.startsWith("/take-pet-out-of-thailand/"); })
    .map(function (page) { return textOf(page.body); }).join("\n");

  const thaiIdBad = [
    /\bThailand requires (?:an? )?ISO(?: 11784\/11785)? microchip\b/i,
    /\b(?:the )?microchip (?:must|has to) be implanted before (?:the )?rabies\b/i,
    /\b(?:must|need to|has to) revaccinate\b.{0,80}\b(?:microchip|chip)\b/i
  ];
  if (thaiIdBad.some(function (re) { return re.test(importText); })) {
    fail("INV_THAI_ID", "Thai import copy regressed to a universal ISO/chip-first/revaccination rule");
  }
  if (/\b(?:only|just) rabies (?:vaccination|vaccine) (?:is )?required\b/i.test(importText) ||
      /\b(?:apply for|obtain|file) (?:the )?(?:DLD )?import permit before (?:the )?(?:21[- ]day|vaccination|primary vaccine)/i.test(importText)) {
    fail("INV_THAI_IMPORT_SEQUENCE", "Thai import copy regressed to rabies-only or permit-before-vaccine-wait sequencing");
  }
  if (/\b(?:must|required to|always)\s+(?:email|submit)\b.{0,100}\b15[- ]day/i.test(exportText) ||
      /\b(?:must|required to|always)\s+(?:confirm|email)\b.{0,100}\b(?:three|3)[- ]day/i.test(exportText) ||
      /\b(?:final |DLD |health )?(?:examination|exam) (?:is )?(?:optional|not required)\b/i.test(exportText)) {
    fail("INV_THAI_EXPORT_SEQUENCE", "Thai export copy regressed to a universal intake/confirmation deadline or optional final examination");
  }

  const australia = byPath.get("/take-pet-out-of-thailand/to-australia.html");
  if (australia) {
    const text = textOf(australia.body);
    if (/\b(?:can|may|must|should)\s+(?:complete|do|perform|finish)\b.{0,100}\b(?:vaccination|testing|test|treatment|preparation)s?\b.{0,60}\bin Thailand\b/i.test(text) ||
        /\b(?:tests?|testing|vaccinations?) (?:done|performed|completed) in Thailand (?:qualif(?:y|ies)|count|are accepted)\b/i.test(text)) {
      fail("INV_AU_NONAPPROVED", "Australia copy says qualifying work can be completed in non-approved Thailand");
    }
    if (requireFlagships && !hasClaim(australia, "AU-NONAPPROVED-PATH-2026-08")) {
      fail("INV_AU_NONAPPROVED", "Australia flagship is missing its approved-country claim citation");
    }
  } else if (requireFlagships) fail("INV_AU_NONAPPROVED", "Australia flagship page is missing");

  for (const route of ["/take-pet-out-of-thailand/to-south-korea.html", "/bring-pet-to-thailand/from-south-korea.html"]) {
    const page = byPath.get(route);
    if (!page) { if (requireFlagships) fail("INV_KOREA", "Korea flagship is missing: " + route); continue; }
    const text = textOf(page.body);
    const complete = /0\.5\s*IU\/ml/i.test(text) && /24 months/i.test(text) &&
      /(?:under|less than) 90 days/i.test(text) && /rabies-free/i.test(text) &&
      /exactly ten/i.test(text) && /more than (?:10|ten)/i.test(text) && /ten or more/i.test(text);
    if (!complete || (requireFlagships && (!hasClaim(page, "KR-PET-ENTRY-AIP-2024-10") ||
        !hasClaim(page, "KR-PET-ENTRY-MOFA-2023-12")))) {
      fail("INV_KOREA", route + " must preserve the exact-ten conflict, 24-month limit, exemptions and both sources");
    }
  }

  const malaysia = byPath.get("/take-pet-out-of-thailand/to-malaysia.html");
  if (malaysia) {
    const text = textOf(malaysia.body);
    const collapsed = /\bcargo (?:protocol|rules?|conditions?) (?:also )?(?:apply|applies) to (?:an )?accompanied/i.test(text) ||
      /\baccompanied (?:cabin|checked-baggage|pet) (?:must|is required to)\b.{0,80}\b(?:seven days|quarantine|ISO)/i.test(text);
    const scoped = /cargo consignment/i.test(text) && /accompanied/i.test(text) &&
      /does not establish|cannot extend|verification gap|must not be presented|confirm.{0,50}mode/i.test(text);
    if (collapsed || !scoped || (requireFlagships && (!hasClaim(malaysia, "MY-CARGO-CONSIGNMENT-2026-08") ||
        !hasClaim(malaysia, "MY-NONSCHEDULED-CONTROLS-2026-03")))) {
      fail("INV_MALAYSIA_MODE", "Malaysia flagship must not infer accompanied-pet rules from its cargo-only protocol");
    }
  } else if (requireFlagships) fail("INV_MALAYSIA_MODE", "Malaysia flagship page is missing");

  const allText = pages.map(function (page) { return textOf(page.body); }).join("\n");
  if (/\bU-Tapao (?:has|have) no (?:AQS|Animal Quarantine Station)\b/i.test(allText) ||
      /\b(?:pet )?(?:import|export)(?:ing)? (?:through|at|via) U-Tapao (?:is|are) impossible\b/i.test(allText) ||
      /\bU-Tapao cannot (?:accept|clear|process)\b.{0,30}\bpets?\b/i.test(allText)) {
    fail("INV_UTAPAO_ABSENCE", "U-Tapao source-list absence is stated as proof of impossibility");
  }

  const iata = byPath.get("/bring-pet-to-thailand/airline-pet-policies.html");
  if (iata) {
    const text = textOf(iata.body);
    if (!/Edition 52/i.test(text) || !/10% larger/i.test(text) || !/does not (?:approve|certify)/i.test(text) ||
        /Edition (?:50|51)\b/i.test(text) || /\bIATA approves?\b.{0,50}\b(?:crate|brand|container)/i.test(text) ||
        (requireFlagships && !hasClaim(iata, "IATA-CR1-ED52-2026-01"))) {
      fail("INV_IATA_CR1", "IATA flagship must preserve Edition 52, no brand approval and the snub-nosed 10% rule");
    }
  } else if (requireFlagships) fail("INV_IATA_CR1", "IATA/airline flagship page is missing");

  const treatment = /(?:^|[.!?]\s+)(?:start cooling while you travel|use lukewarm water|never use cold water|immerse (?:the )?(?:dog|cat|pet)|induce vomiting|give (?:the )?(?:dog|cat|pet) (?:water|milk|medicine|hydrogen peroxide)|apply a tourniquet)\b/i;
  for (const page of pages.filter(function (item) { return item.path.startsWith("/pet-emergency/"); })) {
    if (treatment.test(textOf(page.body)) && !validClinicalReview(page.clinicalReview, today)) {
      fail("INV_CLINICAL_REVIEW", page.path + " contains a treatment algorithm without reviewer, credential, date and HTTPS sources");
    }
  }
}

function loadProduction(registryFile, pageDir) {
  if (!fs.lstatSync(registryFile).isFile()) fail("PATH_TYPE", "--registry must name a file");
  if (!fs.lstatSync(pageDir).isDirectory()) fail("PATH_TYPE", "--page-dir must name a directory");
  delete require.cache[require.resolve(registryFile)];
  const mod = require(registryFile);
  const pages = [];
  for (const entry of fs.readdirSync(pageDir, { withFileTypes: true }).sort(function (a, b) { return a.name.localeCompare(b.name); })) {
    if (entry.isSymbolicLink()) fail("PATH_SYMLINK", "Page module symlink is not allowed: " + entry.name);
    if (!entry.isFile() || !entry.name.endsWith(".js")) continue;
    const file = path.join(pageDir, entry.name);
    delete require.cache[require.resolve(file)];
    const pageMod = require(file);
    const exported = Array.isArray(pageMod) ? pageMod : (pageMod.pages || []);
    if (!Array.isArray(exported)) fail("PAGE_EXPORT", entry.name + " does not export a page array");
    pages.push(...exported);
  }
  return { registry: mod.REGULATED_CLAIMS, pages };
}

function fixtureBase() {
  const id = "TEST-CLAIM-2026-07";
  const sourceUrl = "https://authority.example.test/pet-rule";
  return {
    registry: {
      [id]: {
        jurisdiction: "Fixture jurisdiction", scope: "Fixture dogs on one route",
        checkedAt: "2026-07-15", editorialReviewer: "Fixture editor",
        editorialReviewerRole: "Source transcription", qualifiedReviewStatus: "No specialist review",
        recheckBy: "2026-10-01", sourceUrl,
        sourceExcerpt: ["Exact fixture source fragment"], sourceExcerptLanguage: "en",
        support: "Fixture-supported fact.", exampleConsumers: ["/fixture.html"]
      }
    },
    pages: [{
      path: "/fixture.html", updated: "2026-08-01",
      body: '<p><a href="' + sourceUrl + '" data-claim-id="' + id + '">Source</a></p>'
    }]
  };
}

function setAt(target, parts, value, remove) {
  let cursor = target;
  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    if (cursor[part] === undefined) cursor[part] = typeof parts[i + 1] === "number" ? [] : {};
    cursor = cursor[part];
  }
  if (remove) delete cursor[parts[parts.length - 1]];
  else cursor[parts[parts.length - 1]] = value;
}

function runFixtures(fixturesDir) {
  if (!fs.lstatSync(fixturesDir).isDirectory()) fail("PATH_TYPE", "--fixtures must name a directory");
  const files = fs.readdirSync(fixturesDir, { withFileTypes: true });
  if (!files.length) fail("FIXTURE_MISSING", "No regulated-claim fixtures were found");
  let count = 0;
  for (const entry of files.sort(function (a, b) { return a.name.localeCompare(b.name); })) {
    if (entry.isSymbolicLink()) fail("PATH_SYMLINK", "Fixture symlink is not allowed: " + entry.name);
    if (!entry.isFile() || !entry.name.endsWith(".json")) continue;
    const fixture = JSON.parse(fs.readFileSync(path.join(fixturesDir, entry.name), "utf8"));
    nonempty(fixture.expectedCode, "FIXTURE_SCHEMA", entry.name + ".expectedCode");
    if (!Array.isArray(fixture.operations) || !fixture.operations.length) fail("FIXTURE_SCHEMA", entry.name + " has no operations");
    const model = fixtureBase();
    for (const operation of fixture.operations) {
      if (!operation || !["set", "delete"].includes(operation.op) || !Array.isArray(operation.path) || !operation.path.length) {
        fail("FIXTURE_SCHEMA", entry.name + " has an invalid operation");
      }
      setAt(model, operation.path, operation.value, operation.op === "delete");
    }
    let caught = null;
    try {
      validateRegistry(model.registry, model.pages, "2026-08-01", 365);
      validatePages(model.registry, model.pages, false);
      validateInvariants(model.pages, "2026-08-01", false);
    } catch (error) { caught = error; }
    if (!caught) fail("FIXTURE_EXPECTED_FAILURE", entry.name + " unexpectedly passed");
    if (!(caught instanceof AuditError) || caught.code !== fixture.expectedCode) {
      fail("FIXTURE_WRONG_FAILURE", entry.name + " expected " + fixture.expectedCode + " but got " +
        (caught && caught.code ? caught.code : caught && caught.message));
    }
    count++;
  }
  if (!count) fail("FIXTURE_MISSING", "No .json regulated-claim fixtures were found");
  return count;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const registryFile = resolveInsideRoot(args.registry, "registry");
  const pageDir = resolveInsideRoot(args.pageDir, "page directory");
  const fixturesDir = resolveInsideRoot(args.fixtures, "fixtures directory");
  const model = loadProduction(registryFile, pageDir);
  validateRegistry(model.registry, model.pages, args.today, args.maxAgeDays);
  const stats = validatePages(model.registry, model.pages, true);
  validateInvariants(model.pages, args.today, true);
  const fixtureCount = runFixtures(fixturesDir);
  console.log("Regulated claims: PASS (" + Object.keys(model.registry).length + " claims, " + stats.linkCount +
    " rendered citations across " + model.pages.length + " pages, " + stats.regulatedPageCount +
    " regulated routes cited, " + fixtureCount + " broken fixtures rejected" +
    (args.todayOverridden ? "; deterministic --today override" : "") + ")");
}

try { main(); }
catch (error) {
  console.error("Regulated claims: FAIL" + (error.code ? " [" + error.code + "]" : "") + "\n- " + error.message);
  process.exit(1);
}
