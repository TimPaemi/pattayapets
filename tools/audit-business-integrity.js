"use strict";

/*
 * Dossier-aware business publication gate.
 *
 * HARD failures are deterministic conditions that must not ship: malformed data,
 * unsafe state promotion, inferred geography, contact-policy violations, held-page
 * schema/contact leakage, and accidental publication of dossier-only records.
 * ADVISORY findings are named human work that remains after the field-level contact
 * and publication adjudication. Advisories do not pretend that later operational or
 * first-hand verification has already been completed.
 *
 * Run `node tools/audit-business-integrity.js --dist` after a build to include the
 * generated HTML/search/auxiliary surface. The source-model gate always runs.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const DOSSIER_DIR = path.join(ROOT, "research", "businesses");
const SCHEMA_FILE = path.join(ROOT, "schemas", "business-dossier.schema.json");
const DATA_FILE = path.join(ROOT, "src", "data", "businesses.js");
const DIST_DIR = path.join(ROOT, "dist");
const CHECK_DIST = process.argv.includes("--dist");
const REQUIRE_PRIVATE_SOURCE = process.argv.includes("--require-private-source");
const DOSSIER_ONLY_HOLDS = Object.freeze([
  "better-pets-hospital",
  "chaiyapornwithi-vet-clinic",
  "nana-pet-clinic",
  "nern-plub-wan-animal-hospital",
  "pakana-animal-hospital",
  "pet-buddy-animal-clinic",
  "sri-sara-animal-hospital",
  "vet-pro-veterinary-clinic-sattahip"
]);
const PUBLICATION_BLOCKS = Object.freeze({
  "better-pets-hospital": "vaccination-price-source-contradiction"
});
const PUBLIC_BUSINESS_FIELDS = new Set([
  "address", "addressCountry", "addressLocality", "addressRegion", "areas", "c24",
  "category", "contactPublicationState", "dossierCheckedAt", "dossierConfidence",
  "dossierPath", "dossierStatusOverrideReason", "email", "hours", "languages", "line",
  "locality", "name", "operatingStatus", "phone", "publicationBasis", "publicationReviewedAt", "publishState",
  "serviceAreaNote", "serviceAreas", "serviceScope", "services", "slug", "summary", "tel",
  "type", "website", "whatsapp"
]);
const PUBLIC_INTEGRITY_FIELDS = new Set([
  "addressLocality", "addressRegion", "dossierConfidence", "dossierStatusOverrideReason",
  "operatingStatus", "publicationBasis", "publishState", "serviceAreaNote",
  "serviceAreas", "serviceScope"
]);

const hard = [];
const advisory = [];

function addHard(code, message) { hard.push({ code: code, message: message }); }
function addAdvisory(code, message) { advisory.push({ code: code, message: message }); }
function rel(file) { return path.relative(ROOT, file).replace(/\\/g, "/"); }
function nonEmptyString(value) { return typeof value === "string" && value.trim().length > 0; }
function normalizedName(value) {
  return String(value || "").toLowerCase().replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ").trim();
}
function normalizedAddress(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}
function validDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(value || ""))) return false;
  var date = new Date(value + "T00:00:00Z");
  return !Number.isNaN(date.valueOf()) && date.toISOString().slice(0, 10) === value;
}
function validHttpUrl(value) {
  try {
    var parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch (_) {
    return false;
  }
}
function digits(value) { return String(value || "").replace(/\D/g, ""); }
function localThaiDigits(value) {
  var out = digits(value);
  if (out.indexOf("66") === 0) out = "0" + out.slice(2);
  return out;
}
function expectedTel(phone) {
  var local = localThaiDigits(phone);
  return local && local[0] === "0" ? "+66" + local.slice(1) : null;
}
function hasStoredContact(business) {
  return ["phone", "tel", "whatsapp", "line", "email", "website"]
    .some(function (field) { return Boolean(business[field]); });
}
function collectDuplicates(items, keyFn) {
  var seen = new Map();
  items.forEach(function (item) {
    var key = keyFn(item);
    if (!key) return;
    if (!seen.has(key)) seen.set(key, []);
    seen.get(key).push(item);
  });
  return Array.from(seen.entries()).filter(function (entry) { return entry[1].length > 1; });
}
function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(function (entry) {
    var file = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}
function schemaNodes(value, out) {
  out = out || [];
  if (!value || typeof value !== "object") return out;
  if (Array.isArray(value)) {
    value.forEach(function (item) { schemaNodes(item, out); });
    return out;
  }
  if (value["@type"]) out.push(value);
  Object.keys(value).forEach(function (key) { schemaNodes(value[key], out); });
  return out;
}
function listingPath(business) {
  return "/" + business.category + "/" + business.slug + ".html";
}
function contactPresentInDossier(field, value, raw) {
  var lower = raw.toLowerCase();
  if (["phone", "tel"].includes(field)) {
    var target = localThaiDigits(value);
    var candidates = raw.match(/(?:\+?66|0)[\d\s().-]{7,}/g) || [];
    return candidates.some(function (candidate) { return localThaiDigits(candidate) === target; });
  }
  if (field === "whatsapp") {
    var whatsappTarget = digits(value);
    var whatsappCandidates = raw.match(/(?:\+\d{1,3}|0)[\d\s().-]{7,}/g) || [];
    return whatsappCandidates.some(function (candidate) { return digits(candidate) === whatsappTarget; }) ||
      lower.indexOf(whatsappTarget) !== -1;
  }
  if (field === "website") {
    try { return lower.indexOf(new URL(value).hostname.toLowerCase()) !== -1; }
    catch (_) { return false; }
  }
  return lower.indexOf(String(value).toLowerCase().replace(/^@/, "")) !== -1;
}
function phoneTokens(text) {
  return (String(text).match(/(?:\+?66|0)[\d\s().-]{7,}/g) || [])
    .map(localThaiDigits).filter(function (value) { return value.length >= 9 && value.length <= 10; });
}

console.log("PattayaPets business integrity audit");
console.log("====================================");

/* Schema contract and raw dossier parsing. */
var dossierSchema = null;
try {
  dossierSchema = JSON.parse(fs.readFileSync(SCHEMA_FILE, "utf8"));
  if (dossierSchema.$schema !== "https://json-schema.org/draft/2020-12/schema") {
    addHard("SCHEMA_VERSION", rel(SCHEMA_FILE) + " must declare JSON Schema draft 2020-12");
  }
  if (!/business-dossier\.v\d+\.json$/.test(String(dossierSchema.$id || ""))) {
    addHard("SCHEMA_ID", rel(SCHEMA_FILE) + " must carry a versioned $id");
  }
} catch (error) {
  addHard("SCHEMA_PARSE", rel(SCHEMA_FILE) + ": " + error.message);
}

const dossierFiles = fs.existsSync(DOSSIER_DIR)
  ? fs.readdirSync(DOSSIER_DIR).filter(function (file) { return file.endsWith(".json"); }).sort()
  : [];
const privateDossiersAvailable = dossierFiles.length > 0;
const dossiers = [];
const rawBySlug = new Map();
const missingSchemaVersion = [];
const missingPublicationModel = [];
const missingContactModel = [];
const missingCheckedAt = [];
const sourceWithoutAccessDate = [];
const shapeSignatures = new Set();

if (REQUIRE_PRIVATE_SOURCE && !privateDossiersAvailable) {
  addHard("PRIVATE_DOSSIERS_REQUIRED",
    "Guarded release requires research/businesses/*.json");
}
if (!privateDossiersAvailable) {
  addAdvisory("PRIVATE_DOSSIER_PARITY",
    "Private dossier corpus is unavailable; live-model, hold-boundary and rendered-output gates still run");
}

dossierFiles.forEach(function (filename) {
  var file = path.join(DOSSIER_DIR, filename);
  var raw = fs.readFileSync(file, "utf8");
  if (raw.charCodeAt(0) === 0xFEFF) {
    addHard("DOSSIER_BOM", rel(file) + " begins with a UTF-8 BOM");
    raw = raw.slice(1);
  }
  var dossier;
  try {
    dossier = JSON.parse(raw);
  } catch (error) {
    addHard("DOSSIER_JSON", rel(file) + ": " + error.message);
    return;
  }
  dossier.__file = file;
  dossiers.push(dossier);
  if (nonEmptyString(dossier.slug)) rawBySlug.set(dossier.slug, raw);
  shapeSignatures.add(Object.keys(dossier).filter(function (key) { return key !== "__file"; }).sort().join("|"));

  var required = dossierSchema && Array.isArray(dossierSchema.required)
    ? dossierSchema.required : ["slug", "name", "status", "confidence", "sources", "unverified"];
  required.forEach(function (field) {
    if (!(field in dossier)) addHard("DOSSIER_REQUIRED", rel(file) + " missing required field " + field);
  });
  if (!nonEmptyString(dossier.slug) || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(dossier.slug)) {
    addHard("DOSSIER_SLUG", rel(file) + " has an invalid slug");
  } else if (path.basename(filename, ".json") !== dossier.slug) {
    addHard("DOSSIER_FILENAME", rel(file) + " filename does not equal slug " + dossier.slug);
  }
  if (!nonEmptyString(dossier.name)) addHard("DOSSIER_NAME", rel(file) + " has no name");
  if (!["open", "current-operation-unverified", "unverified", "closed", "unknown"].includes(dossier.status)) {
    addHard("DOSSIER_STATUS", rel(file) + " has unsupported status " + JSON.stringify(dossier.status));
  }
  if (!["high", "medium", "low"].includes(dossier.confidence)) {
    addHard("DOSSIER_CONFIDENCE", rel(file) + " has unsupported confidence " + JSON.stringify(dossier.confidence));
  }
  if (dossier.category && !["vet", "emergency-vet", "mobile-vet", "groomer", "boarding", "pet-shops"]
      .includes(dossier.category)) {
    addHard("DOSSIER_CATEGORY", rel(file) + " has unsupported category " + JSON.stringify(dossier.category));
  }
  if (!Array.isArray(dossier.sources) || !dossier.sources.length) {
    addHard("DOSSIER_SOURCES", rel(file) + " must contain at least one source");
  } else {
    dossier.sources.forEach(function (source, index) {
      if (!source || typeof source !== "object" || Array.isArray(source)) {
        addHard("DOSSIER_SOURCE", rel(file) + " sources[" + index + "] is not an object");
        return;
      }
      if (!validHttpUrl(source.url)) {
        addHard("DOSSIER_SOURCE_URL", rel(file) + " sources[" + index + "] has invalid URL");
      }
      if (source.accessed && !validDate(source.accessed)) {
        addHard("DOSSIER_SOURCE_DATE", rel(file) + " sources[" + index + "] has invalid accessed date");
      }
      if (!source.accessed) sourceWithoutAccessDate.push(filename + "#sources[" + index + "]");
      if (source.supports && (!Array.isArray(source.supports) ||
          source.supports.some(function (item) { return !nonEmptyString(item); }))) {
        addHard("DOSSIER_SUPPORTS", rel(file) + " sources[" + index + "].supports must be nonempty strings");
      }
    });
  }
  if (!Array.isArray(dossier.unverified)) {
    addHard("DOSSIER_UNVERIFIED", rel(file) + " unverified must be an array");
  }
  if (dossier.checkedAt && !validDate(dossier.checkedAt)) {
    addHard("DOSSIER_CHECKED_DATE", rel(file) + " has invalid checkedAt");
  }
  if (!dossier.checkedAt) missingCheckedAt.push(dossier.slug || filename);
  if ("schemaVersion" in dossier && dossier.schemaVersion !== "1.0.0") {
    addHard("DOSSIER_SCHEMA_VERSION", rel(file) + " has unsupported schemaVersion " +
      JSON.stringify(dossier.schemaVersion));
  }
  if ("operatingStatus" in dossier &&
      !["open", "current-operation-unverified", "unverified", "closed", "unknown"]
        .includes(dossier.operatingStatus)) {
    addHard("DOSSIER_OPERATING_STATUS", rel(file) + " has invalid operatingStatus");
  }
  if ("publishState" in dossier && !["published", "hold", "rejected"].includes(dossier.publishState)) {
    addHard("DOSSIER_PUBLISH_STATE", rel(file) + " has invalid publishState");
  }
  if ("serviceScope" in dossier &&
      !["local", "regional", "nationwide", "remote-only", "unknown"].includes(dossier.serviceScope)) {
    addHard("DOSSIER_SERVICE_SCOPE", rel(file) + " has invalid serviceScope");
  }
  if ("serviceAreas" in dossier && (!Array.isArray(dossier.serviceAreas) ||
      dossier.serviceAreas.some(function (area) { return !nonEmptyString(area); }))) {
    addHard("DOSSIER_SERVICE_AREAS", rel(file) + " serviceAreas must contain nonempty strings");
  }
  if (dossier.publicationDecision) {
    var decision = dossier.publicationDecision;
    if (!decision || typeof decision !== "object" || Array.isArray(decision)) {
      addHard("DOSSIER_DECISION", rel(file) + " publicationDecision must be an object");
    } else {
      ["state", "decidedAt", "decidedBy", "reason"].forEach(function (field) {
        if (!nonEmptyString(decision[field])) {
          addHard("DOSSIER_DECISION", rel(file) + " publicationDecision missing " + field);
        }
      });
      if (!["published", "hold", "rejected"].includes(decision.state)) {
        addHard("DOSSIER_DECISION", rel(file) + " publicationDecision.state is invalid");
      }
      if (decision.decidedAt && !validDate(decision.decidedAt)) {
        addHard("DOSSIER_DECISION_DATE", rel(file) + " publicationDecision.decidedAt is invalid");
      }
      if (dossier.publishState && decision.state !== dossier.publishState) {
        addHard("DOSSIER_DECISION_PARITY", rel(file) + " publicationDecision.state differs from publishState");
      }
    }
  }
  if (dossier.contactPublication) {
    if (typeof dossier.contactPublication !== "object" || Array.isArray(dossier.contactPublication)) {
      addHard("DOSSIER_CONTACT_MODEL", rel(file) + " contactPublication must be an object");
    } else {
      Object.keys(dossier.contactPublication).forEach(function (field) {
        var contact = dossier.contactPublication[field];
        if (!contact || typeof contact !== "object" || Array.isArray(contact)) {
          addHard("DOSSIER_CONTACT_MODEL", rel(file) + " contactPublication." + field + " must be an object");
          return;
        }
        if (!["public-business", "private-person", "unknown"].includes(contact.classification)) {
          addHard("DOSSIER_CONTACT_CLASS", rel(file) + " contactPublication." + field +
            " has invalid classification");
        }
        if (!["approved", "withheld", "review-required"].includes(contact.publicationState)) {
          addHard("DOSSIER_CONTACT_STATE", rel(file) + " contactPublication." + field +
            " has invalid publicationState");
        }
        if (!["none-recorded", "requested", "honoured", "unknown"].includes(contact.optOutState)) {
          addHard("DOSSIER_CONTACT_OPTOUT", rel(file) + " contactPublication." + field +
            " has invalid optOutState");
        }
        if (!nonEmptyString(contact.publicationBasis) || !validHttpUrl(contact.source) ||
            !validDate(contact.reviewedAt)) {
          addHard("DOSSIER_CONTACT_PROVENANCE", rel(file) + " contactPublication." + field +
            " needs publicationBasis, source URL and reviewedAt");
        }
        if (contact.publicationState === "approved" && contact.classification !== "public-business") {
          addHard("DOSSIER_CONTACT_PRIVACY", rel(file) + " contactPublication." + field +
            " cannot be approved unless classified public-business");
        }
        if (contact.publicationState === "approved" &&
            ["requested", "honoured"].includes(contact.optOutState)) {
          addHard("DOSSIER_CONTACT_OPTOUT", rel(file) + " contactPublication." + field +
            " cannot remain approved after an opt-out request");
        }
      });
    }
  }
  if (dossier.schemaVersion !== "1.0.0") missingSchemaVersion.push(dossier.slug || filename);
  if (!("publishState" in dossier) || !("operatingStatus" in dossier) ||
      !("serviceScope" in dossier) || !("publicationDecision" in dossier)) {
    missingPublicationModel.push(dossier.slug || filename);
  }
  if (!("contactPublication" in dossier)) missingContactModel.push(dossier.slug || filename);
  if (dossier.publishState === "published") {
    if (dossier.operatingStatus !== "open") {
      addHard("DOSSIER_UNSAFE_PUBLISH", rel(file) + " is published but operatingStatus is not open");
    }
    ["schemaVersion", "checkedAt", "serviceScope", "locality", "publicationDecision", "contactPublication"]
      .forEach(function (field) {
        if (!(field in dossier)) addHard("DOSSIER_PUBLISH_MODEL", rel(file) + " published dossier missing " + field);
      });
  }
});

collectDuplicates(dossiers, function (d) { return d.slug; }).forEach(function (entry) {
  addHard("DOSSIER_DUPLICATE_SLUG", entry[0] + " appears in " +
    entry[1].map(function (d) { return rel(d.__file); }).join(", "));
});
collectDuplicates(dossiers, function (d) { return normalizedName(d.name); }).forEach(function (entry) {
  addHard("DOSSIER_DUPLICATE_NAME", entry[0] + " appears in " +
    entry[1].map(function (d) { return rel(d.__file); }).join(", "));
});
collectDuplicates(dossiers, function (d) {
  return localThaiDigits(d.phone || (d.verified && d.verified.phone));
}).forEach(function (entry) {
  addHard("DOSSIER_DUPLICATE_PHONE", entry[0] + " appears in " +
    entry[1].map(function (d) { return rel(d.__file); }).join(", "));
});
collectDuplicates(dossiers, function (d) {
  return normalizedAddress(d.addressFull || (d.verified &&
    (d.verified.address || d.verified.registeredOffice)));
}).forEach(function (entry) {
  addHard("DOSSIER_DUPLICATE_ADDRESS", entry[0] + " appears in " +
    entry[1].map(function (d) { return rel(d.__file); }).join(", "));
});

const privateDossierBySlug =
  new Map(dossiers.map(function (dossier) { return [dossier.slug, dossier]; }));
if (privateDossiersAvailable) {
  Object.keys(PUBLICATION_BLOCKS).forEach(function (slug) {
    var raw = rawBySlug.get(slug) || "";
    if (!/vaccination/i.test(raw) || !/price/i.test(raw)) {
      addHard("PUBLICATION_BLOCK_PARITY", slug +
        " publication block is not supported by the private dossier text");
    }
  });
}

if (missingSchemaVersion.length) {
  addAdvisory("DOSSIER_MIGRATION", missingSchemaVersion.length + " dossiers remain on the legacy " +
    "unversioned shape; do not invent schemaVersion or decisions during mechanical migration");
}
if (missingPublicationModel.length) {
  addAdvisory("PUBLICATION_DECISIONS", missingPublicationModel.length + " dossiers still require an explicit " +
    "operatingStatus/serviceScope and a dated publish, hold, or reject decision");
}
if (missingContactModel.length) {
  addAdvisory("DOSSIER_CONTACT_MIGRATION", missingContactModel.length +
    " private dossiers still lack embedded per-field publication metadata; the separate versioned " +
    "live contact ledger remains mandatory and is enforced below");
}
if (missingCheckedAt.length) {
  addAdvisory("DOSSIER_CHECKED_AT", "Missing checkedAt: " + missingCheckedAt.join(", "));
}
if (sourceWithoutAccessDate.length) {
  addAdvisory("SOURCE_ACCESS_DATE", sourceWithoutAccessDate.length + " dossier source records lack accessed dates");
}
if (shapeSignatures.size > 1) {
  addAdvisory("DOSSIER_SHAPES", "The corpus still has " + shapeSignatures.size +
    " top-level shapes; the v1 schema accepts them during migration");
}

/* Live model, dossier join, state, locality, provenance, and contacts. */
delete require.cache[require.resolve(DATA_FILE)];
const data = require(DATA_FILE);
const BUSINESSES = data.BUSINESSES || [];
const CATEGORIES = data.CATEGORIES || {};
const AREAS = data.AREAS || {};
const BUSINESS_INTEGRITY = data.BUSINESS_INTEGRITY || {};
const CONTACT_PUBLICATION = data.CONTACT_PUBLICATION || {};
const expectedDataExports = [
  "AREAS", "BUSINESSES", "BUSINESS_INTEGRITY", "CATEGORIES", "CONTACT_PUBLICATION",
  "isContactPublishable", "isPublishedBusiness"
];
if (Object.keys(data).sort().join("|") !== expectedDataExports.slice().sort().join("|")) {
  addHard("LIVE_EXPORT_BOUNDARY",
    "src/data/businesses.js exports an unsupported key; private dossier data must stay isolated");
}
const CONTACT_FIELDS = ["phone", "tel", "whatsapp", "line", "email", "website"];
if (CONTACT_PUBLICATION.schemaVersion !== "1.0.0" ||
    CONTACT_PUBLICATION.ledgerVersion !== "2026-08-05.1" ||
    CONTACT_PUBLICATION.reviewedAt !== "2026-08-05") {
  addHard("CONTACT_LEDGER_VERSION",
    "Contact publication ledger must use schema 1.0.0 and the 2026-08-05.1 adjudication");
}
if (!CONTACT_PUBLICATION.policy ||
    CONTACT_PUBLICATION.policy.storedValueIsPublicationPermission !== false ||
    CONTACT_PUBLICATION.policy.defaultPublicationState !== "withheld") {
  addHard("CONTACT_LEDGER_POLICY",
    "Stored contact values must default to withheld and never imply publication permission");
}
const contactRecords = CONTACT_PUBLICATION.records || {};
const contactRecordSlugs = Object.keys(contactRecords);
const contactBusinessSlugs = BUSINESSES.map(function (business) { return business.slug; });
if (contactRecordSlugs.length !== contactBusinessSlugs.length ||
    contactRecordSlugs.some(function (slug) { return !contactBusinessSlugs.includes(slug); })) {
  addHard("CONTACT_LEDGER_SLUG_BOUNDARY",
    "Field-level contact records must exactly match the live business model");
}
BUSINESSES.forEach(function (business) {
  var record = contactRecords[business.slug];
  if (!record) return;
  var expectedDisposition = business.publishState === "published" ? "PUBLISH" :
    business.publishState === "rejected" ? "REJECT" : "HOLD";
  if (record.disposition !== expectedDisposition ||
      record.defaultPublicationState !== "withheld" ||
      record.reviewedAt !== "2026-08-05") {
    addHard("CONTACT_LEDGER_DISPOSITION", business.slug +
      " contact disposition/date differs from its publication state");
  }
  var storedFields = CONTACT_FIELDS.filter(function (field) { return Boolean(business[field]); }).sort();
  var decisionFields = Object.keys(record.fields || {}).sort();
  if (storedFields.join("|") !== decisionFields.join("|")) {
    addHard("CONTACT_LEDGER_FIELD_BOUNDARY", business.slug +
      " field decisions must exactly match stored contact fields");
  }
  var dossier = privateDossierBySlug.get(business.slug);
  var dossierSources = new Set(dossier && Array.isArray(dossier.sources)
    ? dossier.sources.map(function (source) { return source.url; }) : []);
  decisionFields.forEach(function (field) {
    var decision = record.fields[field];
    if (!decision || !nonEmptyString(decision.publicationBasis) ||
        !validHttpUrl(decision.source) || decision.reviewedAt !== "2026-08-05") {
      addHard("CONTACT_LEDGER_PROVENANCE", business.slug + "." + field +
        " lacks a dated publication basis and dossier source");
      return;
    }
    if (privateDossiersAvailable && !dossierSources.has(decision.source)) {
      addHard("CONTACT_LEDGER_SOURCE", business.slug + "." + field +
        " cites a source that is not in its private dossier");
    }
    if (expectedDisposition === "PUBLISH") {
      if (decision.publicationState !== "approved" ||
          decision.classification !== "public-business" ||
          decision.optOutState !== "none-recorded") {
        addHard("CONTACT_LEDGER_APPROVAL", business.slug + "." + field +
          " is stored on a published record without complete public-business approval");
      }
      if (typeof data.isContactPublishable !== "function" ||
          !data.isContactPublishable(business, field)) {
        addHard("CONTACT_LEDGER_RENDER_GATE", business.slug + "." + field +
          " is approved but the renderer gate rejects it");
      }
    } else if (decision.publicationState !== "withheld" ||
        data.isContactPublishable(business, field)) {
      addHard("CONTACT_LEDGER_WITHHOLD", business.slug + "." + field +
        " must remain withheld on a non-published record");
    }
  });
});
BUSINESSES.forEach(function (business) {
  var unsupported = Object.keys(business)
    .filter(function (field) { return !PUBLIC_BUSINESS_FIELDS.has(field); });
  if (unsupported.length) {
    addHard("LIVE_FIELD_BOUNDARY", business.slug + " exposes unsupported field(s): " +
      unsupported.join(", "));
  }
});
const integritySlugs = Object.keys(BUSINESS_INTEGRITY);
const businessSlugsForIntegrity = BUSINESSES.map(function (business) { return business.slug; });
if (integritySlugs.length !== businessSlugsForIntegrity.length ||
    integritySlugs.some(function (slug) { return !businessSlugsForIntegrity.includes(slug); })) {
  addHard("INTEGRITY_SLUG_BOUNDARY",
    "BUSINESS_INTEGRITY keys must exactly match the live business model");
}
BUSINESSES.forEach(function (business) {
  var integrity = BUSINESS_INTEGRITY[business.slug];
  if (!integrity || typeof integrity !== "object" || Array.isArray(integrity)) {
    addHard("INTEGRITY_RECORD", business.slug + " has no BUSINESS_INTEGRITY record");
    return;
  }
  var unsupported = Object.keys(integrity)
    .filter(function (field) { return !PUBLIC_INTEGRITY_FIELDS.has(field); });
  if (unsupported.length) {
    addHard("INTEGRITY_FIELD_BOUNDARY", business.slug +
      " integrity record exposes unsupported field(s): " + unsupported.join(", "));
  }
  Object.keys(integrity).forEach(function (field) {
    if (JSON.stringify(integrity[field]) !== JSON.stringify(business[field])) {
      addHard("INTEGRITY_VALUE_PARITY", business.slug + "." + field +
        " differs from the live business record");
    }
  });
});
const liveModelSlugs = new Set(BUSINESSES.map(function (business) { return business.slug; }));
const dossierOnlyHoldSlugs = new Set(DOSSIER_ONLY_HOLDS);
if (dossierOnlyHoldSlugs.size !== DOSSIER_ONLY_HOLDS.length) {
  addHard("DOSSIER_ONLY_HOLD_DUPLICATE", "Dossier-only hold slug list contains a duplicate");
}
DOSSIER_ONLY_HOLDS.forEach(function (slug) {
  if (liveModelSlugs.has(slug)) {
    addHard("DOSSIER_ONLY_PROMOTION",
      slug + " entered the live model without removal from the explicit hold boundary");
  }
});
if (privateDossiersAvailable) {
  const expectedPrivateSlugs =
    new Set([].concat(Array.from(liveModelSlugs), DOSSIER_ONLY_HOLDS));
  if (privateDossierBySlug.size !== expectedPrivateSlugs.size) {
    addHard("PRIVATE_DOSSIER_COUNT", "Private dossier corpus has " +
      privateDossierBySlug.size + " unique records; expected " + expectedPrivateSlugs.size +
      " from the live model plus explicit dossier-only holds");
  }
  expectedPrivateSlugs.forEach(function (slug) {
    if (!privateDossierBySlug.has(slug)) {
      addHard("PRIVATE_DOSSIER_MISSING", slug + " is absent from the private dossier corpus");
    }
  });
  privateDossierBySlug.forEach(function (_, slug) {
    if (!expectedPrivateSlugs.has(slug)) {
      addHard("PRIVATE_DOSSIER_UNCLASSIFIED",
        slug + " is neither live nor in the explicit dossier-only hold boundary");
    }
  });
}

collectDuplicates(BUSINESSES, function (b) { return b.slug; }).forEach(function (entry) {
  addHard("LIVE_DUPLICATE_SLUG", entry[0] + " appears " + entry[1].length + " times");
});
collectDuplicates(BUSINESSES, function (b) { return normalizedName(b.name); }).forEach(function (entry) {
  addHard("LIVE_DUPLICATE_NAME", entry[0] + " appears " + entry[1].length + " times");
});
collectDuplicates(BUSINESSES, function (b) { return localThaiDigits(b.phone); }).forEach(function (entry) {
  addHard("LIVE_DUPLICATE_PHONE", entry[0] + " appears in " +
    entry[1].map(function (b) { return b.slug; }).join(", "));
});
collectDuplicates(BUSINESSES, function (b) { return digits(b.tel); }).forEach(function (entry) {
  addHard("LIVE_DUPLICATE_TEL", entry[0] + " appears in " +
    entry[1].map(function (b) { return b.slug; }).join(", "));
});
collectDuplicates(BUSINESSES, function (b) { return normalizedAddress(b.address); }).forEach(function (entry) {
  addHard("LIVE_DUPLICATE_ADDRESS", entry[0] + " appears in " +
    entry[1].map(function (b) { return b.slug; }).join(", "));
});

const heldSlugs = [];
const unknownPublishedScope = [];
BUSINESSES.forEach(function (business) {
  var where = "src/data/businesses.js#" + business.slug;
  var dossier = privateDossierBySlug.get(business.slug);
  if (privateDossiersAvailable && !dossier) {
    addHard("LIVE_DOSSIER", where + " has no matching private dossier");
  }
  var dossierRaw = rawBySlug.get(business.slug) || "";
  if (!Object.prototype.hasOwnProperty.call(CATEGORIES, business.category)) {
    addHard("LIVE_CATEGORY", where + " has unknown category " + business.category);
  }
  if (!Array.isArray(business.areas)) {
    addHard("LIVE_AREAS", where + " areas must be an array");
  } else {
    business.areas.forEach(function (area) {
      if (!Object.prototype.hasOwnProperty.call(AREAS, area)) {
        addHard("LIVE_AREA", where + " has unknown area " + area);
      }
    });
  }
  if (!["open", "current-operation-unverified", "unverified", "closed", "unknown"]
      .includes(business.operatingStatus)) {
    addHard("LIVE_OPERATING_STATUS", where + " has invalid operatingStatus");
  }
  if (!["published", "hold", "rejected"].includes(business.publishState)) {
    addHard("LIVE_PUBLISH_STATE", where + " has invalid publishState");
  }
  if (!["local", "regional", "nationwide", "remote-only", "unknown"]
      .includes(business.serviceScope)) {
    addHard("LIVE_SERVICE_SCOPE", where + " has invalid serviceScope");
  }
  if (business.publishState === "published" && business.operatingStatus !== "open") {
    addHard("LIVE_UNSAFE_PUBLISH", where + " is published without operatingStatus=open");
  }
  if (business.publishState !== "published") heldSlugs.push(business.slug);
  if (dossier && business.operatingStatus !== dossier.status) {
    if (business.publishState === "hold" && nonEmptyString(business.dossierStatusOverrideReason)) {
      addAdvisory("CAUTIOUS_STATUS_OVERRIDE", business.slug + " is held as " + business.operatingStatus +
        " while its legacy dossier says " + dossier.status + ": " +
        business.dossierStatusOverrideReason);
    } else {
      addHard("STATUS_PARITY", where + " operatingStatus " + business.operatingStatus +
        " differs from dossier status " + dossier.status);
    }
  }
  if (!["high", "medium", "low"].includes(business.dossierConfidence)) {
    addHard("LIVE_DOSSIER_CONFIDENCE", where + " has invalid dossierConfidence");
  } else if (dossier && business.dossierConfidence !== dossier.confidence) {
    addHard("CONFIDENCE_PARITY", where + " confidence differs from its private dossier");
  }
  if (!validDate(business.dossierCheckedAt)) {
    addHard("LIVE_DOSSIER_DATE", where + " has invalid dossierCheckedAt");
  } else if (dossier && business.dossierCheckedAt !== dossier.checkedAt) {
    addHard("PROVENANCE_DATE", where + " dossierCheckedAt must equal its private dossier checkedAt");
  }
  if (business.publicationReviewedAt !== "2026-08-05") {
    addHard("PUBLICATION_REVIEW_DATE", where +
      " must carry the dated 5 August 2026 adjudication separately from dossierCheckedAt");
  }
  var expectedDossierPath = path.join(DOSSIER_DIR, business.slug + ".json");
  if (path.resolve(ROOT, business.dossierPath || "") !== path.resolve(expectedDossierPath)) {
    addHard("PROVENANCE_PATH",
      where + " dossierPath does not resolve to its slug-matched private dossier path");
  }
  if (dossier && (!Array.isArray(dossier.sources) || !dossier.sources.length)) {
    addHard("PROVENANCE_SOURCES", where + " has no private dossier sources");
  }
  if (business.address && (!nonEmptyString(business.addressLocality) ||
      !nonEmptyString(business.addressCountry))) {
    addHard("LOCALITY_ADDRESS", where + " has an address but no explicit locality/country");
  }
  if (business.addressCountry && business.addressCountry !== "TH") {
    addHard("LOCALITY_COUNTRY", where + " addressCountry must be TH");
  }
  if (business.addressLocality) {
    if (!business.locality || business.locality.addressLocality !== business.addressLocality ||
        business.locality.addressRegion !== business.addressRegion ||
        business.locality.addressCountry !== business.addressCountry) {
      addHard("LOCALITY_MODEL", where + " locality object differs from its explicit address fields");
    }
    if (dossier &&
        dossierRaw.toLowerCase().indexOf(business.addressLocality.toLowerCase()) === -1) {
      addHard("LOCALITY_PROVENANCE", where + " addressLocality is not present in its dossier evidence");
    }
  } else if (business.locality !== null) {
    addHard("LOCALITY_MODEL", where + " must use locality=null when locality is unknown");
  }
  if (!Array.isArray(business.serviceAreas)) {
    addHard("SERVICE_AREAS", where + " serviceAreas must be an array");
  }
  (business.serviceAreas || []).filter(function (area) { return area !== "Online"; })
    .forEach(function (area) {
      if (dossier && dossierRaw.toLowerCase().indexOf(area.toLowerCase()) === -1) {
        addHard("SERVICE_AREA_PROVENANCE", where + " service area " + area +
          " is not present in its dossier evidence");
      }
    });
  if (dossier && business.serviceScope === "nationwide" &&
      !/(nationwide|thailand-wide|locations across thailand|within thailand)/i.test(dossierRaw)) {
    addHard("NATIONWIDE_PROVENANCE", where + " claims nationwide scope without matching dossier support");
  }
  if (dossier && business.serviceScope === "remote-only" &&
      !/(online|remote|live video)/i.test(dossierRaw)) {
    addHard("REMOTE_PROVENANCE", where + " claims remote-only scope without matching dossier support");
  }
  if (business.areas.length === 0) {
    if (business.publishState === "published" && business.serviceScope === "unknown") {
      unknownPublishedScope.push(business.slug);
    }
    if (["nationwide", "regional"].includes(business.serviceScope) && !business.serviceAreas.length) {
      addHard("SERVICE_AREA_EVIDENCE", where + " needs explicit serviceAreas for " + business.serviceScope);
    }
  }
  var storedContact = hasStoredContact(business);
  if (business.publishState === "hold" && business.contactPublicationState !== "withheld-by-hold") {
    addHard("HELD_CONTACT_STATE", where + " must use contactPublicationState=withheld-by-hold");
  }
  if (business.publishState === "rejected" && business.contactPublicationState !== "withheld-by-reject") {
    addHard("REJECTED_CONTACT_STATE", where + " must use contactPublicationState=withheld-by-reject");
  }
  if (business.publishState === "published" && storedContact &&
      business.contactPublicationState !== "approved-public-contact") {
    addHard("PUBLISHED_CONTACT_STATE", where + " must use contactPublicationState=approved-public-contact");
  }
  if (business.contactPublicationState === "no-public-contact" && storedContact) {
    addHard("CONTACT_STATE", where + " says no-public-contact but stores a contact");
  }
  if (business.publishState === "published" && !storedContact &&
      business.contactPublicationState !== "no-public-contact") {
    addHard("CONTACT_STATE", where + " has no stored contact but is not labelled no-public-contact");
  }
  if (business.phone || business.tel) {
    if (!business.phone || !business.tel || expectedTel(business.phone) !== business.tel) {
      addHard("CONTACT_PHONE_TEL", where + " phone/tel do not normalize to the same Thai number");
    }
    var local = localThaiDigits(business.phone);
    var isMobile = /^(06|08|09)\d{8}$/.test(local);
    if (!isMobile && !business.c24) {
      addHard("CONTACT_LANDLINE", where + " publishes a landline outside a verified 24-hour record");
    }
  }
  if (business.whatsapp && !/^\d{8,15}$/.test(String(business.whatsapp))) {
    addHard("CONTACT_WHATSAPP", where + " WhatsApp must be 8-15 international digits without punctuation");
  }
  if (business.line && /^@/.test(String(business.line))) {
    addHard("CONTACT_LINE", where + " LINE ID must be stored without @");
  }
  if (business.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(business.email)) {
    addHard("CONTACT_EMAIL", where + " has invalid email syntax");
  }
  if (business.website && !validHttpUrl(business.website)) {
    addHard("CONTACT_WEBSITE", where + " has invalid website URL");
  }
  ["phone", "tel", "whatsapp", "line", "email", "website"].forEach(function (field) {
    if (dossier && business[field] &&
        !contactPresentInDossier(field, business[field], dossierRaw)) {
      addHard("CONTACT_PROVENANCE", where + " " + field + " is not found in its dossier evidence");
    }
  });
});

if (unknownPublishedScope.length) {
  addAdvisory("UNKNOWN_SERVICE_SCOPE", "Published records with explicitly unknown service area (no " +
    "Pattaya/nationwide inference): " + unknownPublishedScope.join(", "));
}

/* Directory render contract: direct routes survive, unsafe claims/schema/cards do not. */
const directoryModule = path.join(ROOT, "src", "pages", "30-directory.js");
delete require.cache[require.resolve(directoryModule)];
const directoryPages = require(directoryModule);
const pageByPath = new Map(directoryPages.map(function (page) { return [page.path, page]; }));
const businessPages = directoryPages.filter(function (page) { return Boolean(page.businessSlug); });

directoryPages.forEach(function (page) {
  if (/\sstyle\s*=/i.test(page.body || "")) {
    addHard("DIRECTORY_INLINE_STYLE", page.path + " contains an inline style attribute");
  }
});

if (businessPages.length !== BUSINESSES.length) {
  addHard("BUSINESS_ROUTE_COUNT", "Directory emits " + businessPages.length +
    " business routes for " + BUSINESSES.length + " live records");
}

BUSINESSES.forEach(function (business) {
  var pagePath = listingPath(business);
  var page = pageByPath.get(pagePath);
  if (!page) {
    addHard("BUSINESS_ROUTE", business.slug + " has no retained direct route " + pagePath);
    return;
  }
  if (page.businessPublishState !== business.publishState ||
      page.businessOperatingStatus !== business.operatingStatus ||
      page.businessServiceScope !== business.serviceScope) {
    addHard("PAGE_STATE_PARITY", pagePath + " does not carry the live publication state");
  }
  var nodes = schemaNodes(page.schema || []);
  var businessNodes = nodes.filter(function (node) {
    return ["LocalBusiness", "VeterinaryCare", "PetStore"].includes(node["@type"]);
  });
  var faqNodes = nodes.filter(function (node) { return node["@type"] === "FAQPage"; });
  if (faqNodes.length) addHard("LISTING_FAQ", pagePath + " contains listing FAQ schema");
  if (business.publishState === "published") {
    if (businessNodes.length !== 1) {
      addHard("BUSINESS_SCHEMA", pagePath + " must contain exactly one business schema node");
    } else {
      var node = businessNodes[0];
      if (business.address) {
        if (!node.address || node.address.addressLocality !== business.addressLocality ||
            node.address.addressRegion !== business.addressRegion ||
            node.address.addressCountry !== business.addressCountry ||
            node.address.streetAddress !== business.address) {
          addHard("SCHEMA_LOCALITY", pagePath + " schema address differs from the explicit locality model");
        }
      } else if (node.address) {
        addHard("SCHEMA_INVENTED_ADDRESS", pagePath + " has schema address without a public address");
      }
      if (business.serviceScope === "nationwide" &&
          (!node.areaServed || node.areaServed["@type"] !== "Country" || node.areaServed.name !== "Thailand")) {
        addHard("SCHEMA_SCOPE", pagePath + " does not express its sourced nationwide scope");
      }
      if (business.serviceScope === "remote-only" && node.areaServed) {
        addHard("SCHEMA_SCOPE", pagePath + " invents geographic areaServed for remote-only service");
      }
    }
  } else {
    if (businessNodes.length) addHard("NONPUBLISHED_SCHEMA", pagePath + " exposes business schema while not published");
    var pageText = JSON.stringify({ title: page.title, description: page.description, body: page.body });
    ["phone", "tel", "whatsapp", "line", "email", "website"].forEach(function (field) {
      if (business[field] && pageText.toLowerCase().indexOf(String(business[field]).toLowerCase()) !== -1) {
        addHard("NONPUBLISHED_CONTACT_OUTPUT", pagePath + " exposes non-published " + field);
      }
    });
    var expectedStateLabel = business.publishState === "rejected"
      ? /Outside publication scope/i : /Verification hold/i;
    if (!expectedStateLabel.test(page.body) || /Facts page &mdash; visit pending/i.test(page.body)) {
      addHard("NONPUBLISHED_LABEL", pagePath + " does not carry its unambiguous non-published label");
    }
  }
  if (!business.areas.length && /serves all (?:of )?Thailand/i.test(page.body)) {
    addHard("EMPTY_AREA_COPY", pagePath + " infers nationwide service from areas=[]");
  }
  if (!business.areas.length && ["remote-only", "regional", "local"].includes(business.serviceScope) &&
      /\bin Pattaya\b/i.test(page.title)) {
    addHard("TITLE_LOCALITY", pagePath + " title invents Pattaya locality");
  }
});

Object.keys(CATEGORIES).forEach(function (category) {
  var hub = pageByPath.get("/" + category + "/");
  if (!hub) {
    addHard("CATEGORY_ROUTE", "Missing category hub /" + category + "/");
    return;
  }
  var cards = hub.body.match(/<article class="biz-card"[\s\S]*?<\/article>/g) || [];
  var cardPaths = cards.map(function (card) {
    var match = card.match(/<h3><a href="([^"]+)"/);
    return match && match[1];
  }).filter(Boolean);
  var expectedCardPaths = BUSINESSES.filter(function (business) {
    return business.category === category && business.publishState === "published" &&
      business.operatingStatus === "open";
  }).map(listingPath);
  if (cardPaths.length !== expectedCardPaths.length ||
      expectedCardPaths.some(function (pagePath) { return !cardPaths.includes(pagePath); })) {
    addHard("CATEGORY_CARD_PARITY", "/" + category + "/ cards do not equal approved published records");
  }
  var collection = (hub.schema || []).find(function (node) { return node["@type"] === "CollectionPage"; });
  var schemaPaths = collection && collection.mainEntity && Array.isArray(collection.mainEntity.itemListElement)
    ? collection.mainEntity.itemListElement.map(function (item) {
      return String(item.url || "").replace(/^https:\/\/pattayapets\.com/, "");
    }) : [];
  if (schemaPaths.length !== cardPaths.length ||
      schemaPaths.some(function (pagePath, index) { return pagePath !== cardPaths[index]; })) {
    addHard("CATEGORY_ITEMLIST_PARITY", "/" + category + "/ ItemList does not mirror visible card order");
  }
  BUSINESSES.filter(function (b) { return b.category === category && b.publishState !== "published"; })
    .forEach(function (business) {
      if (cardPaths.includes(listingPath(business))) {
        addHard("NONPUBLISHED_CATEGORY_CARD", business.slug + " appears as a category business card while not published");
      }
      if (hub.body.indexOf('href="' + listingPath(business) + '"') === -1) {
        addHard("NONPUBLISHED_ROUTE_LINK", business.slug + " retained route is not linked from its decision section");
      }
    });
});

Object.keys(AREAS).forEach(function (area) {
  var hub = pageByPath.get("/area/" + area + ".html");
  if (!hub) {
    addHard("AREA_ROUTE", "Missing area hub /area/" + area + ".html");
    return;
  }
  var cards = hub.body.match(/<article class="biz-card"[\s\S]*?<\/article>/g) || [];
  var cardPaths = cards.map(function (card) {
    var match = card.match(/<h3><a href="([^"]+)"/);
    return match && match[1];
  }).filter(Boolean);
  var expected = Object.keys(CATEGORIES).flatMap(function (category) {
    return BUSINESSES.filter(function (business) {
      return business.category === category && business.publishState === "published" &&
        business.operatingStatus === "open" && business.areas.includes(area);
    }).map(listingPath);
  });
  if (cardPaths.length !== expected.length ||
      cardPaths.some(function (pagePath, index) { return pagePath !== expected[index]; })) {
    addHard("AREA_CARD_PARITY", "/area/" + area + ".html cards do not mirror approved area records");
  }
});

const areaTiles = require(path.join(ROOT, "src", "area-tiles.js"));
Object.keys(AREAS).forEach(function (area) {
  var expectedCount = BUSINESSES.filter(function (business) {
    return business.publishState === "published" && business.operatingStatus === "open" &&
      business.areas.includes(area);
  }).length;
  var html = areaTiles.areaTileHtml(AREAS[area].name, area, "No approved listing yet");
  var match = html.match(/<span class="tile-count">(\d+) business(?:es)? listed<\/span>/);
  var renderedCount = match ? Number(match[1]) : 0;
  if (renderedCount !== expectedCount) {
    addHard("AREA_TILE_COUNT", area + " tile count " + renderedCount +
      " differs from approved record count " + expectedCount);
  }
});

const liveSlugs = liveModelSlugs;
const dossierOnly = DOSSIER_ONLY_HOLDS.map(function (slug) {
  return privateDossierBySlug.get(slug) || { slug: slug, status: null };
});
dossierOnly.forEach(function (heldDossier) {
  var matchingPage =
    businessPages.find(function (page) { return page.businessSlug === heldDossier.slug; });
  if (matchingPage || liveSlugs.has(heldDossier.slug)) {
    addHard("DOSSIER_ONLY_PUBLIC",
      heldDossier.slug + " is emitted while on the explicit dossier-only hold boundary");
  }
  var privateDossier = privateDossierBySlug.get(heldDossier.slug);
  if (privateDossier && (privateDossier.publishState === "published" ||
      (privateDossier.publicationDecision &&
       privateDossier.publicationDecision.state === "published"))) {
    addHard("UNIMPLEMENTED_PUBLISH_DECISION", heldDossier.slug +
      " claims a private publish decision but has no approved live record");
  }
});
const openDossierOnly =
  dossierOnly.filter(function (heldDossier) { return heldDossier.status === "open"; });
if (privateDossiersAvailable && openDossierOnly.length) {
  addAdvisory("DOSSIER_ONLY_QUEUE", openDossierOnly.length + " open dossier-only records remain unpublished " +
    "pending Tim's per-URL publish/hold/reject decisions: " +
    openDossierOnly.map(function (dossier) { return dossier.slug; }).join(", "));
} else if (!privateDossiersAvailable) {
  addAdvisory("DOSSIER_ONLY_HOLDS", DOSSIER_ONLY_HOLDS.length +
    " previously reviewed dossier-only slugs remain on the clean-checkout publication hold boundary");
}

/* HUMAN QUEUE tokens may remain in comments/research, never in the public model. */
const dataSource = fs.readFileSync(DATA_FILE, "utf8");
const humanQueueNumbers = [];
for (const match of dataSource.matchAll(/HUMAN QUEUE:[^\r\n]*?((?:\+?66|0)[\d\s().-]{7,})/gi)) {
  humanQueueNumbers.push(localThaiDigits(match[1]));
}
humanQueueNumbers.forEach(function (number) {
  if (phoneTokens(JSON.stringify(BUSINESSES)).includes(number)) {
    addHard("HUMAN_QUEUE_MODEL", "A HUMAN QUEUE number entered the public business model");
  }
  if (phoneTokens(JSON.stringify(directoryPages)).includes(number)) {
    addHard("HUMAN_QUEUE_PAGE", "A HUMAN QUEUE number entered a page object");
  }
});
if (!humanQueueNumbers.length) {
  addAdvisory("HUMAN_QUEUE_DISCOVERY", "No parseable HUMAN QUEUE phone token was found; keep named queue markers machine-readable");
}

/* Explicit publication blockers remain hard stops even without private files. */
Object.entries(PUBLICATION_BLOCKS).forEach(function (entry) {
  if (liveSlugs.has(entry[0])) {
    addHard("PUBLICATION_BLOCK",
      entry[0] + " cannot publish while blocked: " + entry[1]);
  } else if (entry[0] === "better-pets-hospital" &&
      entry[1] === "vaccination-price-source-contradiction") {
    addAdvisory("BETTER_PETS_PRICE",
      "Better Pets remains unpublished; resolve its vaccination price/source contradiction before approval");
  } else {
    addAdvisory("PUBLICATION_BLOCK",
      entry[0] + " remains unpublished: " + entry[1]);
  }
});

/* Optional post-build surface. */
if (CHECK_DIST) {
  if (!fs.existsSync(DIST_DIR)) {
    addHard("DIST_MISSING", "--dist requested but dist/ does not exist");
  } else {
    var distFiles = walk(DIST_DIR).filter(function (file) {
      return /\.(?:html|json|xml|txt|js)$/i.test(file);
    });
    var distText = distFiles.map(function (file) {
      return { file: file, text: fs.readFileSync(file, "utf8") };
    });
    var distHtml = distText.filter(function (entry) { return /\.html$/i.test(entry.file); });
    var searchIndexFile = path.join(DIST_DIR, "search-index.json");
    var homeFile = path.join(DIST_DIR, "index.html");
    var homeHtml = fs.existsSync(homeFile) ? fs.readFileSync(homeFile, "utf8") : "";
    var searchRoutes = [];
    if (!fs.existsSync(searchIndexFile)) {
      addHard("DIST_SEARCH_INDEX", "dist/search-index.json is missing");
    } else {
      try {
        var parsedSearchIndex = JSON.parse(fs.readFileSync(searchIndexFile, "utf8"));
        if (!Array.isArray(parsedSearchIndex)) {
          addHard("DIST_SEARCH_INDEX", "dist/search-index.json is not an array");
        } else {
          searchRoutes = parsedSearchIndex.map(function (entry) { return entry && entry.u; });
        }
      } catch (error) {
        addHard("DIST_SEARCH_INDEX", "dist/search-index.json is invalid JSON: " + error.message);
      }
    }
    humanQueueNumbers.forEach(function (number) {
      distText.forEach(function (entry) {
        if (phoneTokens(entry.text).includes(number)) {
          addHard("HUMAN_QUEUE_DIST", rel(entry.file) + " exposes a HUMAN QUEUE number");
        }
      });
    });
    BUSINESSES.forEach(function (business) {
      var file = path.join(DIST_DIR, listingPath(business).replace(/^\//, "").replace(/\//g, path.sep));
      if (!fs.existsSync(file)) {
        addHard("DIST_BUSINESS_ROUTE", rel(file) + " is missing");
        return;
      }
      var html = fs.readFileSync(file, "utf8");
      var nodes = [];
      for (const match of html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
        try { schemaNodes(JSON.parse(match[1]), nodes); }
        catch (error) { addHard("DIST_SCHEMA_JSON", rel(file) + ": " + error.message); }
      }
      var businessNodes = nodes.filter(function (node) {
        return ["LocalBusiness", "VeterinaryCare", "PetStore"].includes(node["@type"]);
      });
      var faqNodes = nodes.filter(function (node) { return node["@type"] === "FAQPage"; });
      if (faqNodes.length) addHard("DIST_LISTING_FAQ", rel(file) + " contains fabricated/hidden listing FAQ schema");
      if (business.publishState !== "published" && businessNodes.length) {
        addHard("DIST_NONPUBLISHED_SCHEMA", rel(file) + " contains business schema while not published");
      }
      if (business.publishState === "published" && businessNodes.length !== 1) {
        addHard("DIST_BUSINESS_SCHEMA", rel(file) + " must contain exactly one business schema node");
      }
      if (business.publishState !== "published") {
        var publicRoute = listingPath(business);
        var allowedReferenceFiles = new Set([
          path.join(DIST_DIR, publicRoute.replace(/^\//, "").replace(/\//g, path.sep)),
          path.join(DIST_DIR, business.category, "index.html"),
          path.join(DIST_DIR, "sitemap.html")
        ].map(function (entry) { return path.resolve(entry); }));
        if (business.slug === "mor-ja-pet-clinic-pattaya") {
          allowedReferenceFiles.add(path.resolve(path.join(DIST_DIR, "corrections.html")));
        }
        var routeLink = new RegExp(
          "<a\\b[^>]*\\bhref=[\\\"']" +
          publicRoute.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") +
          "(?:[?#][^\\\"']*)?[\\\"']",
          "i"
        );
        distHtml.forEach(function (entry) {
          if (routeLink.test(entry.text) && !allowedReferenceFiles.has(path.resolve(entry.file))) {
            addHard("DIST_NONPUBLISHED_PROMOTION", rel(entry.file) + " links to " + publicRoute +
              " outside its own decision page, category hold list, sitemap or explicit correction record");
          }
        });
        if (searchRoutes.includes(listingPath(business))) {
          addHard("DIST_NONPUBLISHED_SEARCH", listingPath(business) + " appears in the internal search index while not published");
        }
        if (homeHtml.indexOf('href="' + listingPath(business) + '"') !== -1) {
          addHard("DIST_NONPUBLISHED_HOME_PROMOTION", listingPath(business) +
            " appears in the homepage recent-update/promotional surface while not published");
        }
        ["phone", "tel", "whatsapp", "line", "email", "website"].forEach(function (field) {
          if (business[field] && html.toLowerCase().indexOf(String(business[field]).toLowerCase()) !== -1) {
            addHard("DIST_NONPUBLISHED_CONTACT", rel(file) + " exposes non-published " + field);
          }
        });
      } else {
        var searchRouteCount = searchRoutes.filter(function (pagePath) {
          return pagePath === listingPath(business);
        }).length;
        if (searchRouteCount !== 1) {
          addHard("DIST_PUBLISHED_SEARCH", listingPath(business) +
            " must appear exactly once in the internal search index; found " + searchRouteCount);
        }
      }
    });
    dossierOnly.forEach(function (dossier) {
      var accidental = distFiles.filter(function (file) {
        return path.basename(file).toLowerCase() === (dossier.slug + ".html").toLowerCase();
      });
      accidental.forEach(function (file) {
        addHard("DIST_DOSSIER_ONLY", rel(file) + " publishes a dossier-only URL");
      });
    });
    console.log("Generated surface: " + distFiles.length + " HTML/JSON/XML/TXT/JS files inspected");
  }
} else {
  addAdvisory("DIST_NOT_CHECKED", "Generated output not inspected in this run; rerun with --dist after building");
}

console.log("Private dossiers: " + (privateDossiersAvailable
  ? dossiers.length : "unavailable in this checkout"));
console.log("Live records:     " + BUSINESSES.length);
console.log("Non-published:    " + heldSlugs.length + (heldSlugs.length ? " (" + heldSlugs.join(", ") + ")" : ""));
console.log("Dossier-only:     " + dossierOnly.length + (privateDossiersAvailable
  ? " (open: " + openDossierOnly.length + ")" : " (status parity not run)"));
console.log("Schema shapes:    " + (privateDossiersAvailable
  ? shapeSignatures.size : "not checked without private dossiers"));
console.log("HARD:             " + hard.length);
hard.forEach(function (finding) { console.error("  HARD [" + finding.code + "] " + finding.message); });
console.log("ADVISORY:         " + advisory.length);
advisory.forEach(function (finding) { console.log("  ADVISORY [" + finding.code + "] " + finding.message); });

if (hard.length) {
  console.error("FAIL — hard business integrity gates failed; no publication is safe.");
  process.exitCode = 1;
} else {
  console.log("PASS — hard business integrity gates passed; advisory human queue remains explicit.");
}
