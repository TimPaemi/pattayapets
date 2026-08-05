"use strict";

/*
 * PattayaPets repository-local TimPaemi entity-v2 and network gate.
 *
 * This gate pins the authoritative standard and entity contract, validates the
 * route-responsibility projection, renders the source corpus, optionally validates
 * dist/, and executes adversarial fixtures. It never imports a sibling repository.
 */

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "src");
const DIST = path.join(ROOT, "dist");
const FIXTURES = path.join(ROOT, "tools", "fixtures", "network-v2");
const LOCAL_CONTRACT = path.join(ROOT, "schemas", "timpaemi-entity-contract.v2.json");
const LOCAL_RULES = path.join(ROOT, "RULES.md");
const GLOBAL_MANIFEST = "C:\\Projects\\NETWORK-STANDARD.json";
const EXPECTED_STANDARD = "TP-NETWORK-2026-08-04.1";
const EXPECTED_RULES_SHA = "921701a22c8ac50b71bb17cad86383b53f5035a9361f81dd3ad536440a81b588";
const EXPECTED_CONTRACT_SHA = "be0e7f1d9b4c878efdfa764a3e2e5d3dffefbf8f56466639063e32b05ff8ff33";
const REQUIRE_DIST = process.argv.includes("--require-dist");
const SOURCE_ONLY = process.argv.includes("--source-only");

const SISTER_HOSTS = Object.freeze([
  "pattaya-authority.com",
  "pattaya-medical.com",
  "pattaya-school.com",
  "pattaya-gym.com",
  "pattaya-coffee.com",
  "pattayavisahelp.com",
  "pattayastream.com",
  "pattaya-vehicle-rentals.com",
  "pattaya-restaurant-guide.com",
  "pattaya-afterdark.com"
]);

const findings = [];
const notes = [];
function fail(code, message) { findings.push({ code: code, message: message }); }
function note(message) { notes.push(message); }
function rel(file) { return path.relative(ROOT, file).replace(/\\/g, "/"); }
function sha256(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}
function readJson(file, code) {
  try { return JSON.parse(fs.readFileSync(file, "utf8")); }
  catch (error) { fail(code, rel(file) + ": " + error.message); return null; }
}
function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(function (entry) {
    var target = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(target) : [target];
  });
}
function validDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(value || ""))) return false;
  var parsed = new Date(value + "T00:00:00Z");
  return !Number.isNaN(parsed.valueOf()) && parsed.toISOString().slice(0, 10) === value;
}
function htmlDecode(value) {
  return String(value || "")
    .replace(/&#x([0-9a-f]+);?/gi, function (_, hex) {
      return String.fromCodePoint(parseInt(hex, 16));
    })
    .replace(/&#([0-9]+);?/g, function (_, dec) {
      return String.fromCodePoint(parseInt(dec, 10));
    })
    .replace(/&(?:period|dot);/gi, ".")
    .replace(/&(?:hyphen|dash);/gi, "-")
    .replace(/&colon;/gi, ":")
    .replace(/&sol;/gi, "/")
    .replace(/&amp;/gi, "&");
}
function decodeForScan(value) {
  var out = htmlDecode(value)
    .replace(/\\[nr]/gi, "")
    .replace(/\\x([0-9a-f]{2})/gi, function (_, hex) { return String.fromCharCode(parseInt(hex, 16)); })
    .replace(/\\u\{([0-9a-f]+)\}/gi, function (_, hex) { return String.fromCodePoint(parseInt(hex, 16)); })
    .replace(/\\u([0-9a-f]{4})/gi, function (_, hex) { return String.fromCharCode(parseInt(hex, 16)); });
  for (var i = 0; i < 3; i += 1) {
    try {
      var decoded = decodeURIComponent(out);
      if (decoded === out) break;
      out = decoded;
    } catch (_) { break; }
  }
  return out.toLowerCase();
}
function compactForDomain(value) {
  return decodeForScan(value).replace(/[\s'"`<>\\]+/g, "");
}
function scanSurface(value, surface) {
  var codes = new Set();
  var decoded = decodeForScan(value);
  var compact = compactForDomain(value);
  SISTER_HOSTS.forEach(function (host) {
    if (compact.includes(host)) codes.add("SISTER_DOMAIN");
  });
  SOCIAL_URLS.forEach(function (url) {
    if (compact.includes(compactForDomain(url))) codes.add("SOCIAL_PROMOTION");
  });
  if (/c:[\\/]projects|c:\\projects|\/users\/[^/]+\/|research\/businesses|human\s+queue|dossierpath|network-standard\.json/i.test(decoded)) {
    codes.add("PRIVATE_CONTROL_LEAK");
  }
  if (surface !== "html" && compact.includes("timpaemi.com")) {
    codes.add("NETWORK_URL_NON_HTML");
  }
  return codes;
}
function attrs(tag) {
  var out = {};
  for (const match of String(tag).matchAll(/([^\s=/>]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)) {
    out[match[1].toLowerCase()] = match[2] == null ? (match[3] == null ? match[4] : match[3]) : match[2];
  }
  return out;
}
function tokens(value) {
  return String(value || "").toLowerCase().split(/\s+/).filter(Boolean);
}
function nodeTypes(node) {
  return Array.isArray(node && node["@type"]) ? node["@type"] : [node && node["@type"]];
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
function ids(value) {
  return (Array.isArray(value) ? value : (value ? [value] : []))
    .map(function (item) { return item && item["@id"]; }).filter(Boolean).sort();
}
function sameMembers(actual, expected) {
  return JSON.stringify(actual.slice().sort()) === JSON.stringify(expected.slice().sort());
}
function canonical(route) {
  return route === "/" ? SITE.url + "/" : SITE.url + route;
}

/* Pin the manifest, RULES and copied entity contract before loading site code. */
const manifest = readJson(GLOBAL_MANIFEST, "MANIFEST_PARSE");
if (manifest) {
  if (manifest.standardId !== EXPECTED_STANDARD ||
      !manifest.rules || manifest.rules.sha256 !== EXPECTED_RULES_SHA ||
      !manifest.entityContract || manifest.entityContract.version !== 2 ||
      manifest.entityContract.sha256 !== EXPECTED_CONTRACT_SHA) {
    fail("MANIFEST_DRIFT", "The authoritative manifest no longer matches the pinned standard and hashes");
  }
}
if (!fs.existsSync(LOCAL_RULES) || sha256(LOCAL_RULES) !== EXPECTED_RULES_SHA) {
  fail("RULES_DRIFT", "RULES.md does not match the authoritative RULES hash");
}
if (!fs.existsSync(LOCAL_CONTRACT) || sha256(LOCAL_CONTRACT) !== EXPECTED_CONTRACT_SHA) {
  fail("CONTRACT_DRIFT", "The repository-local entity-v2 contract is missing or has drifted");
}

const CONTRACT = readJson(LOCAL_CONTRACT, "CONTRACT_PARSE") || {};
const ORGANIZATION = CONTRACT.organization || {};
const PEOPLE = CONTRACT.people || {};
const SOCIAL_URLS = Object.freeze((ORGANIZATION.sameAs || []).slice());
if (CONTRACT.standardId !== EXPECTED_STANDARD || CONTRACT.contractVersion !== 2) {
  fail("CONTRACT_VERSION", "The local contract must be entity-v2 under " + EXPECTED_STANDARD);
}

const { SITE } = require(path.join(SRC, "site-config.js"));
const { htmlToText } = require(path.join(SRC, "html-text.js"));
const responsibility = require(path.join(SRC, "responsibility.js"));
const LEDGER = responsibility.LEDGER || {};
if (SITE.publisherId !== ORGANIZATION["@id"] || SITE.publisherUrl !== ORGANIZATION.url ||
    SITE.publisherName !== ORGANIZATION.name || SITE.publisherLegalName !== ORGANIZATION.legalName) {
  fail("SITE_ENTITY_DRIFT", "src/site-config.js publisher identity differs from entity-v2");
}
var configuredPeople = Object.fromEntries((SITE.people || []).map(function (person) { return [person.key, person]; }));
Object.keys(PEOPLE).forEach(function (key) {
  var expected = PEOPLE[key];
  var actual = configuredPeople[key];
  if (!actual || actual.id !== expected["@id"] || actual.url !== expected.url || actual.name !== expected.name) {
    fail("PERSON_CONFIG_DRIFT", "Configured person " + key + " differs from entity-v2");
  }
});
if (Object.keys(configuredPeople).length !== Object.keys(PEOPLE).length) {
  fail("PERSON_CONFIG_BOUNDARY", "The configured global-person set must exactly match entity-v2");
}

/* No runtime/build dependency may reach into a sibling repository. */
walk(SRC).filter(function (file) { return /\.(?:js|json)$/i.test(file); })
  .concat([path.join(ROOT, "build.js")]).forEach(function (file) {
    var text = fs.readFileSync(file, "utf8");
    if (/(?:require|import)[^\r\n]*(?:c:[\\/]projects[\\/]|\.\.[\\/].*timpaemi|timpaemi[\\/]schema)/i.test(text)) {
      fail("SIBLING_RUNTIME_IMPORT", rel(file) + " imports or resolves a sibling project");
    }
  });

/* Assemble the source page corpus and validate the responsibility ledger. */
const pages = [];
walk(path.join(SRC, "pages")).filter(function (file) { return file.endsWith(".js"); }).sort()
  .forEach(function (file) {
    var exported = require(file);
    (Array.isArray(exported) ? exported : (exported.pages || [])).forEach(function (page) { pages.push(page); });
  });
const sourceRoutes = new Set(pages.map(function (page) { return page.path; }).concat(["/sitemap.html"]));
if (LEDGER.schemaVersion !== 1 || LEDGER.ledgerVersion !== "2026-08-05.1" ||
    LEDGER.standardId !== EXPECTED_STANDARD || LEDGER.projectClass !== "OWNED PUBLICATION" ||
    LEDGER.reviewedAt !== "2026-08-05" ||
    LEDGER.defaultDisposition !== "OMIT_PERSONAL_ATTRIBUTION") {
  fail("RESPONSIBILITY_VERSION", "The responsibility ledger is not the reviewed 2026-08-05.1 owned-publication ledger");
}
const projectEvidence = LEDGER.projectCreationEvidence || {};
if (!["APPROVED", "HOLD", "REJECTED"].includes(projectEvidence.disposition) ||
    !Array.isArray(projectEvidence.evidenceRefs) || !Array.isArray(projectEvidence.people)) {
  fail("PROJECT_CREATION_SHAPE", "projectCreationEvidence has an invalid shape");
} else if (projectEvidence.disposition === "APPROVED") {
  if (!projectEvidence.evidenceRefs.length || !projectEvidence.people.length) {
    fail("PROJECT_CREATION_EVIDENCE", "Approved project creators require people and evidence references");
  }
} else if (projectEvidence.people.length) {
  fail("PROJECT_CREATION_HOLD", "Unapproved project creation evidence must not name creators");
}
const ledgerRoutes = new Map();
(LEDGER.routes || []).forEach(function (record, index) {
  var where = "route responsibility record " + index;
  if (!record || !sourceRoutes.has(record.path) || ledgerRoutes.has(record.path)) {
    fail("RESPONSIBILITY_ROUTE", where + " is duplicate or outside the frozen route corpus");
    return;
  }
  ledgerRoutes.set(record.path, record);
  if (!["APPROVED", "HOLD", "REJECTED"].includes(record.disposition) || !validDate(record.reviewedAt) ||
      !Array.isArray(record.evidenceRefs) || !Array.isArray(record.responsiblePeople)) {
    fail("RESPONSIBILITY_SHAPE", where + " has an invalid shape");
    return;
  }
  if (record.disposition === "APPROVED") {
    if (!record.evidenceRefs.length || !record.responsiblePeople.length) {
      fail("RESPONSIBILITY_EVIDENCE", where + " is approved without evidence and responsible people");
    }
  } else if (record.responsiblePeople.length) {
    fail("RESPONSIBILITY_HOLD", where + " names responsible people without approval");
  }
  record.responsiblePeople.forEach(function (entry) {
    if (!PEOPLE[entry.person] || !Array.isArray(entry.roles) || !entry.roles.length ||
        entry.roles.some(function (role) { return !["author", "creator", "editor", "reviewer"].includes(role); })) {
      fail("RESPONSIBILITY_PERSON", where + " has an unknown person or role");
    }
  });
});

function expectedRole(route, role) {
  var record = ledgerRoutes.get(route);
  if (!record || record.disposition !== "APPROVED") return [];
  return record.responsiblePeople.filter(function (entry) { return entry.roles.includes(role); })
    .map(function (entry) { return PEOPLE[entry.person]; });
}
function expectedProjectCreators() {
  if (projectEvidence.disposition !== "APPROVED") return [];
  return projectEvidence.people.map(function (key) { return PEOPLE[key]; });
}

function parseGraphs(html, where) {
  var graphs = [];
  for (const match of String(html).matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try { graphs.push(JSON.parse(match[1])); }
    catch (error) { fail("SCHEMA_JSON", where + ": " + error.message); }
  }
  return graphs;
}

function validateDocument(doc, corpus) {
  var where = corpus + ":" + doc.route;
  var html = doc.html;
  scanSurface(html, "html").forEach(function (code) { fail(code, where); });
  var graphs = parseGraphs(html, where);
  var nodes = [];
  graphs.forEach(function (graph) { schemaNodes(graph, nodes); });
  var routeAuthors = expectedRole(doc.route, "author");
  var routeCreators = expectedRole(doc.route, "creator");
  var projectCreators = expectedProjectCreators();
  var expectedAuthorIds = routeAuthors.map(function (person) { return person["@id"]; });
  var expectedCreatorIds = routeCreators.map(function (person) { return person["@id"]; });
  var expectedProjectCreatorIds = projectCreators.map(function (person) { return person["@id"]; });

  var authorAnchors = [];
  var networkAnchors = [];
  for (const match of html.matchAll(/<a\b[^>]*>/gi)) {
    var attr = attrs(match[0]);
    var relTokens = tokens(attr.rel);
    if (relTokens.includes("author")) authorAnchors.push(attr);
    try {
      if (attr.href && new URL(htmlDecode(attr.href), SITE.url).hostname.toLowerCase() === "timpaemi.com") {
        networkAnchors.push(attr);
      }
    } catch (_) { /* malformed external URLs are handled by link audits */ }
  }
  var actualAuthorHrefs = authorAnchors.map(function (attr) { return htmlDecode(attr.href); }).sort();
  var expectedAuthorHrefs = routeAuthors.map(function (person) { return person.url; }).sort();
  if (!sameMembers(actualAuthorHrefs, expectedAuthorHrefs)) {
    fail("AUTHOR_LINK_PARITY", where + " rel=author links differ from the route ledger");
  }
  authorAnchors.forEach(function (attr) {
    if (htmlDecode(attr.href) === ORGANIZATION.url) {
      fail("PUBLISHER_REL_AUTHOR", where + " uses the publisher home as rel=author");
    }
  });
  var metaAuthors = [];
  for (const match of html.matchAll(/<meta\b[^>]*>/gi)) {
    var meta = attrs(match[0]);
    if (String(meta.name || "").toLowerCase() === "author") metaAuthors.push(meta.content || "");
  }
  var expectedMeta = routeAuthors.length ? [routeAuthors.map(function (person) { return person.name; }).join("; ")] : [];
  if (!sameMembers(metaAuthors, expectedMeta)) {
    fail("AUTHOR_META_PARITY", where + " author metadata differs from the route ledger");
  }
  var hasByline = /class=["'][^"']*\bbyline\b/i.test(html);
  if (hasByline !== Boolean(routeAuthors.length)) {
    fail("VISIBLE_BYLINE_PARITY", where + " visible byline state differs from the route ledger");
  }

  var webPages = nodes.filter(function (node) {
    return nodeTypes(node).includes("WebPage") && node["@id"] === canonical(doc.route) + "#webpage";
  });
  if (webPages.length !== 1) {
    fail("WEBPAGE_NODE", where + " must contain one canonical WebPage node");
  } else {
    if (!sameMembers(ids(webPages[0].author), expectedAuthorIds)) {
      fail("WEBPAGE_AUTHOR_PARITY", where + " WebPage.author differs from the route ledger");
    }
    if (!sameMembers(ids(webPages[0].creator), expectedCreatorIds)) {
      fail("WEBPAGE_CREATOR_PARITY", where + " WebPage.creator differs from the route ledger");
    }
    if (!webPages[0].publisher || webPages[0].publisher["@id"] !== ORGANIZATION["@id"]) {
      fail("WEBPAGE_PUBLISHER", where + " WebPage.publisher does not reference the global Organization");
    }
  }
  var websites = nodes.filter(function (node) {
    return nodeTypes(node).includes("WebSite") && node["@id"] === SITE.url + "/#website";
  });
  if (websites.length !== 1) {
    fail("WEBSITE_NODE", where + " must contain one local WebSite node");
  } else {
    var website = websites[0];
    if (!website.publisher || website.publisher["@id"] !== ORGANIZATION["@id"] ||
        website.publishingPrinciples !== SITE.policies.publishingPrinciples) {
      fail("WEBSITE_PUBLISHER_POLICY", where + " WebSite publisher or local publishingPrinciples drifted");
    }
    ["correctionsPolicy", "actionableFeedbackPolicy", "ownershipFundingInfo"].forEach(function (property) {
      if (property in website) fail("WEBSITE_ORG_POLICY", where + " WebSite exposes Organization-only " + property);
    });
    if (!sameMembers(ids(website.creator), expectedProjectCreatorIds)) {
      fail("WEBSITE_CREATOR_PARITY", where + " WebSite.creator differs from project-creation evidence");
    }
  }

  nodes.filter(function (node) { return nodeTypes(node).includes("Article"); }).forEach(function (article) {
    if (!expectedAuthorIds.length || !sameMembers(ids(article.author), expectedAuthorIds)) {
      fail("ARTICLE_AUTHOR_PARITY", where + " Article schema lacks matching route-specific authorship evidence");
    }
  });
  nodes.filter(function (node) { return nodeTypes(node).includes("Organization") && node["@id"] === ORGANIZATION["@id"]; })
    .forEach(function (organization) {
      var allowed = ["@type", "@id", "name", "url"];
      var extra = Object.keys(organization).filter(function (key) { return !allowed.includes(key); });
      if (organization["@type"] !== "Organization" || organization.name !== ORGANIZATION.name ||
          organization.url !== ORGANIZATION.url || extra.length) {
        fail("ORGANIZATION_COMPACTNESS", where + " expands or alters the global Organization projection");
      }
    });

  var profilePersonIds = [];
  nodes.filter(function (node) { return nodeTypes(node).includes("ProfilePage"); }).forEach(function (profile) {
    var personId = profile.mainEntity && profile.mainEntity["@id"];
    var localUrl = canonical(doc.route);
    if (!Object.values(PEOPLE).some(function (person) { return person["@id"] === personId; }) ||
        (profile.url && profile.url !== localUrl) ||
        (profile["@id"] && !String(profile["@id"]).startsWith(localUrl))) {
      fail("PROFILEPAGE_CONTRACT", where + " ProfilePage must be local and point mainEntity to one global Person @id");
    } else {
      profilePersonIds.push(personId);
    }
  });
  var allowedPersonIds = new Set(expectedAuthorIds.concat(expectedCreatorIds, expectedProjectCreatorIds, profilePersonIds));
  nodes.filter(function (node) { return nodeTypes(node).includes("Person"); }).forEach(function (personNode) {
    var expected = Object.values(PEOPLE).find(function (person) { return person["@id"] === personNode["@id"]; });
    var keys = Object.keys(personNode).sort();
    var expectedKeys = ["@id", "@type", "name", "url"].sort();
    if (!expected || personNode.name !== expected.name || personNode.url !== expected.url ||
        !sameMembers(keys, expectedKeys) || !allowedPersonIds.has(personNode["@id"])) {
      fail("PERSON_PROJECTION", where + " contains an unapproved, local-URL, or expanded Person projection");
    }
  });
  nodes.forEach(function (node) {
    if (nodeTypes(node).includes("Review") || Object.prototype.hasOwnProperty.call(node, "aggregateRating")) {
      fail("RATING_SCHEMA", where + " emits Review or aggregateRating without a first-party rating corpus");
    }
  });
  var visibleFaqs = [];
  for (const match of html.matchAll(/<details\b[^>]*class=["'][^"']*\bfaq\b[^"']*["'][^>]*>\s*<summary>([\s\S]*?)<\/summary>\s*<div\b[^>]*class=["'][^"']*\bfaq-body\b[^"']*["'][^>]*>([\s\S]*?)<\/div>\s*<\/details>/gi)) {
    visibleFaqs.push({ name: htmlToText(match[1]), text: htmlToText(match[2]) });
  }
  var faqPages = nodes.filter(function (node) { return nodeTypes(node).includes("FAQPage"); });
  if ((visibleFaqs.length && faqPages.length !== 1) || (!visibleFaqs.length && faqPages.length)) {
    fail("FAQ_SCHEMA_PARITY", where + " visible FAQ and FAQPage presence differ");
  } else if (visibleFaqs.length) {
    var schemaFaqs = Array.isArray(faqPages[0].mainEntity) ? faqPages[0].mainEntity.map(function (question) {
      return { name: String(question.name || ""), text: String(question.acceptedAnswer && question.acceptedAnswer.text || "") };
    }) : [];
    if (JSON.stringify(schemaFaqs) !== JSON.stringify(visibleFaqs)) {
      fail("FAQ_SCHEMA_PARITY", where + " visible FAQ questions/answers differ from FAQPage schema");
    }
  }
  return networkAnchors;
}

function validateCorpus(name, docs) {
  var homeLinks = [];
  docs.forEach(function (doc) {
    validateDocument(doc, name).forEach(function (attr) {
      var href = htmlDecode(attr.href);
      if (href === ORGANIZATION.url) {
        homeLinks.push({ route: doc.route, attr: attr });
      } else if (!expectedRole(doc.route, "author").some(function (person) { return person.url === href; })) {
        fail("UNAPPROVED_NETWORK_LINK", name + ":" + doc.route + " links to an unapproved TimPaemi URL");
      }
    });
  });
  if (homeLinks.length !== 1) {
    fail("ENTITY_HOME_LINK_COUNT", name + " corpus must contain exactly one followed TimPaemi home link; found " + homeLinks.length);
  } else {
    var link = homeLinks[0];
    var relTokens = tokens(link.attr.rel);
    if (!["/about.html", "/masthead.html"].includes(link.route) ||
        relTokens.some(function (token) { return ["author", "nofollow", "sponsored", "ugc"].includes(token); })) {
      fail("ENTITY_HOME_LINK_QUALIFICATION", name + " home link must be a natural followed ownership/masthead link, never authorship");
    }
  }
}

const layout = require(path.join(SRC, "layout.js"));
const sourceDocs = pages.map(function (page) {
  return { route: page.path, html: layout.renderPage(page) };
});
validateCorpus("source", sourceDocs);

/* Public-source scan: catch sister domains and global-social promotion outside rendered HTML. */
const publicSourceFiles = walk(SRC).filter(function (file) {
  return /\.(?:js|json|html|xml|txt|css)$/i.test(file);
}).concat([path.join(ROOT, "build.js")]);
publicSourceFiles.forEach(function (file) {
  var codes = scanSurface(fs.readFileSync(file, "utf8"), "source");
  ["SISTER_DOMAIN", "SOCIAL_PROMOTION"].forEach(function (code) {
    if (codes.has(code)) fail(code, rel(file));
  });
});

if (SOURCE_ONLY) {
  note("source-only mode; generated-surface validation was skipped");
} else if (!fs.existsSync(DIST)) {
  if (REQUIRE_DIST) fail("DIST_REQUIRED", "--require-dist was set but dist/ is missing");
  else note("dist/ is absent; generated-surface validation was skipped");
} else {
  var distHtmlFiles = walk(DIST).filter(function (file) { return file.endsWith(".html"); }).sort();
  var distDocs = distHtmlFiles.map(function (file) {
    var relative = path.relative(DIST, file).replace(/\\/g, "/");
    var route = relative === "index.html" ? "/" :
      relative.endsWith("/index.html") ? "/" + relative.slice(0, -"index.html".length) : "/" + relative;
    return { route: route, html: fs.readFileSync(file, "utf8") };
  });
  validateCorpus("dist", distDocs);
  walk(DIST).filter(function (file) { return /\.(?:json|xml|txt|css|js)$/i.test(file); })
    .forEach(function (file) {
      scanSurface(fs.readFileSync(file, "utf8"), path.extname(file).slice(1)).forEach(function (code) {
        fail(code, rel(file));
      });
    });
  note("Generated corpus: " + distDocs.length + " HTML files plus non-HTML public surfaces");
}

/* Every deliberately broken network-v2 fixture must be rejected for its named reason. */
if (!fs.existsSync(FIXTURES)) {
  fail("FIXTURE_DIR", "tools/fixtures/network-v2 is missing");
} else {
  var fixtureFiles = fs.readdirSync(FIXTURES).filter(function (file) { return file.endsWith(".json"); }).sort();
  if (fixtureFiles.length < 8) fail("FIXTURE_COUNT", "At least eight adversarial network-v2 fixtures are required");
  fixtureFiles.forEach(function (filename) {
    var fixture = readJson(path.join(FIXTURES, filename), "FIXTURE_JSON");
    if (!fixture) return;
    var codes = scanSurface(fixture.content, fixture.surface);
    if (!codes.has(fixture.expectedCode)) {
      fail("FIXTURE_NOT_REJECTED", filename + " did not trigger " + fixture.expectedCode);
    }
  });
  note("Adversarial fixtures: " + fixtureFiles.length + " deliberate violations rejected");
}

console.log("PattayaPets entity-v2 / network gate");
console.log("====================================");
console.log("Standard:          " + EXPECTED_STANDARD);
console.log("Entity contract:   v2 " + EXPECTED_CONTRACT_SHA);
console.log("Responsibility:    " + (LEDGER.routes || []).length + " route records; project creation " + projectEvidence.disposition);
console.log("Source corpus:     " + sourceDocs.length + " rendered pages");
notes.forEach(function (message) { console.log("Note:              " + message); });
console.log("HARD:              " + findings.length);
findings.forEach(function (finding) { console.error("  HARD [" + finding.code + "] " + finding.message); });
if (findings.length) {
  console.error("FAIL - entity-v2, responsibility, link, or public-surface invariants failed.");
  process.exitCode = 1;
} else {
  console.log("PASS - pinned entity-v2, evidence-gated responsibility and spoke-link boundaries hold.");
}
