"use strict";
/**
 * Canonical route classification for PattayaPets.
 *
 * Page modules remain responsible for page content. This module is the only
 * place that decides route kind, editorial category, indexability, locale and
 * audit membership. Consumers should use a manifest entry, never repeat path
 * prefix tables of their own.
 */

const fs = require("fs");
const path = require("path");

const DEFAULT_LOCALE = "en";

const KIND_BY_SECTION = Object.freeze({
  "": "Site pages",
  vets: "Vets & animal hospitals",
  groomers: "Pet groomers",
  boarding: "Boarding & daycare",
  "pet-shops": "Pet shops",
  trainers: "Dog trainers",
  "pet-relocation": "Pet relocation",
  "mobile-vets": "Mobile vets",
  area: "Areas",
  "bring-pet-to-thailand": "Bringing a pet to Thailand",
  "take-pet-out-of-thailand": "Taking a pet out of Thailand",
  "dog-friendly-pattaya": "Dog-friendly Pattaya",
  "pet-emergency": "Pet emergency",
  "owning-a-pet-in-pattaya": "Owning a pet in Pattaya",
  "adopt-a-pet-pattaya": "Adoption & rescue",
  cats: "Cats",
  dogs: "Dogs",
  "pet-health-pattaya": "Pet health in Pattaya"
});

const BUSINESS_CATEGORY_TOPICS = Object.freeze({
  vets: "health",
  groomers: "directory",
  boarding: "owning",
  "pet-shops": "owning",
  trainers: "species",
  "mobile-vets": "health",
  "pet-relocation": "relocation"
});

/* These are the existing reviewed noindex decisions. Moving them changes
   search policy and must be handled as a separately approved structural edit. */
const NON_INDEXABLE_PATHS = new Set([
  "/404.html",
  "/offline.html",
  "/search.html",
  "/take-pet-out-of-thailand/to-new-zealand.html"
]);

const CONTENT_DEPTH_PREFIXES = [
  "/bring-pet-to-thailand/",
  "/take-pet-out-of-thailand/",
  "/dog-friendly-pattaya/",
  "/pet-emergency/",
  "/owning-a-pet-in-pattaya/",
  "/pet-health-pattaya/",
  "/adopt-a-pet-pattaya/",
  "/cats/",
  "/dogs/"
];

const CONTENT_DEPTH_STANDALONE = new Set([
  "/pet-insurance-thailand.html"
]);

const LOOP_QUEUE_EXCLUDED = new Set([
  "/404.html",
  "/offline.html",
  "/search.html",
  "/sitemap.html"
]);

function normalizePagePath(value) {
  var pagePath = String(value || "").split(/[?#]/, 1)[0] || "/";
  if (pagePath === "/index.html") return "/";
  if (pagePath.endsWith("/index.html")) {
    return pagePath.slice(0, -"index.html".length);
  }
  return pagePath;
}

function kindForPath(value) {
  var pagePath = normalizePagePath(value);
  return KIND_BY_SECTION[pagePath.split("/")[1] || ""] || "Page";
}

function categoryForPath(value) {
  var pagePath = normalizePagePath(value);
  if (pagePath === "/") return "home";
  if (pagePath.indexOf("/bring-pet-to-thailand") === 0) return "import";
  if (pagePath.indexOf("/take-pet-out-of-thailand") === 0) return "export";
  if (pagePath.indexOf("/pet-emergency") === 0) return "emergency";
  if (pagePath.indexOf("/owning-a-pet-in-pattaya") === 0) return "owning";
  if (pagePath.indexOf("/pet-health-pattaya") === 0) return "health";
  if (pagePath.indexOf("/dog-friendly-pattaya") === 0) return "lifestyle";
  if (pagePath.indexOf("/adopt-a-pet-pattaya") === 0) return "adoption";
  if (pagePath === "/dogs/" || pagePath.indexOf("/dogs/") === 0) return "species";
  if (pagePath === "/cats/" || pagePath.indexOf("/cats/") === 0) return "species";
  if (pagePath === "/start-here.html") return "start";
  if (pagePath.indexOf("/pet-insurance") === 0) return "insurance";
  if (pagePath === "/directory.html" || pagePath.indexOf("/area/") === 0) return "directory";
  if (/^\/(vets|groomers|boarding|pet-shops|trainers|mobile-vets|pet-relocation)\//.test(pagePath)) {
    return "directory";
  }
  return "general";
}

function isRegulatedPath(pagePath) {
  return pagePath.indexOf("/bring-pet-to-thailand/") === 0 ||
    pagePath.indexOf("/take-pet-out-of-thailand/") === 0;
}

function isContentDepthPath(pagePath) {
  if (CONTENT_DEPTH_STANDALONE.has(pagePath)) return true;
  return CONTENT_DEPTH_PREFIXES.some(function (prefix) {
    return pagePath !== prefix && pagePath.indexOf(prefix) === 0;
  });
}

function auditScopesForPath(value) {
  var pagePath = normalizePagePath(value);
  var scopes = [];
  if (isRegulatedPath(pagePath)) scopes.push("regulated");
  if (isContentDepthPath(pagePath)) scopes.push("content-depth");
  if (!LOOP_QUEUE_EXCLUDED.has(pagePath) && !isRegulatedPath(pagePath)) {
    scopes.push("loop-queue");
  }
  return scopes;
}

function manifestEntryForPath(value) {
  var pagePath = normalizePagePath(value);
  return Object.freeze({
    path: pagePath,
    kind: kindForPath(pagePath),
    category: categoryForPath(pagePath),
    indexable: !NON_INDEXABLE_PATHS.has(pagePath),
    locale: DEFAULT_LOCALE,
    auditScopes: Object.freeze(auditScopesForPath(pagePath))
  });
}

function validateManifestEntry(entry) {
  if (!entry || typeof entry.path !== "string" || !entry.path.startsWith("/") ||
      typeof entry.kind !== "string" || !entry.kind ||
      typeof entry.category !== "string" || !entry.category ||
      typeof entry.indexable !== "boolean" ||
      typeof entry.locale !== "string" || !entry.locale ||
      !Array.isArray(entry.auditScopes) || new Set(entry.auditScopes).size !== entry.auditScopes.length ||
      entry.auditScopes.some(function (scope) { return typeof scope !== "string" || !scope; })) {
    throw new Error("Invalid page-manifest entry: " + JSON.stringify(entry));
  }
}

function createPageManifest(pages) {
  if (!Array.isArray(pages) || !pages.length) throw new Error("Page manifest requires source pages");
  var seen = new Set();
  var manifest = pages.map(function (page) {
    if (!page || typeof page.path !== "string" || normalizePagePath(page.path) !== page.path) {
      throw new Error("Page manifest received an invalid source path: " + JSON.stringify(page && page.path));
    }
    if (seen.has(page.path)) throw new Error("Duplicate page-manifest path: " + page.path);
    seen.add(page.path);
    var entry = manifestEntryForPath(page.path);
    validateManifestEntry(entry);

    /* Legacy page-level declarations are assertions only. The manifest remains
       authoritative, while this guard makes any accidental policy drift fail. */
    if (Object.prototype.hasOwnProperty.call(page, "noindex") &&
        Boolean(page.noindex) === entry.indexable) {
      throw new Error("Page noindex declaration disagrees with manifest: " + page.path);
    }
    if (page.locale && page.locale !== entry.locale) {
      throw new Error("Page locale declaration disagrees with manifest: " + page.path);
    }
    return entry;
  });

  NON_INDEXABLE_PATHS.forEach(function (pagePath) {
    if (!seen.has(pagePath)) throw new Error("Noindex policy references a missing route: " + pagePath);
  });
  return Object.freeze(manifest);
}

function loadSourcePages() {
  var pagesDir = path.join(__dirname, "pages");
  var pages = [];
  for (const file of fs.readdirSync(pagesDir).filter(function (name) {
    return name.endsWith(".js");
  }).sort()) {
    const mod = require(path.join(pagesDir, file));
    const entries = Array.isArray(mod) ? mod : (mod.pages || []);
    entries.forEach(function (page) { pages.push(page); });
  }
  return pages;
}

function loadPageManifest() {
  var pages = loadSourcePages();
  pages.push({ path: "/sitemap.html" });
  return createPageManifest(pages);
}

function indexPageManifest(manifest) {
  var index = new Map();
  manifest.forEach(function (entry) {
    validateManifestEntry(entry);
    if (index.has(entry.path)) throw new Error("Duplicate page-manifest path: " + entry.path);
    index.set(entry.path, entry);
  });
  return index;
}

function hasAuditScope(entry, scope) {
  return Boolean(entry && entry.auditScopes && entry.auditScopes.indexOf(scope) !== -1);
}

function routeOutputFile(value) {
  var pagePath = normalizePagePath(value);
  if (pagePath === "/") return "index.html";
  if (pagePath.endsWith("/")) return pagePath.slice(1) + "index.html";
  return pagePath.slice(1);
}

function businessCategoryTopic(category) {
  return BUSINESS_CATEGORY_TOPICS[category] || "directory";
}

module.exports = {
  DEFAULT_LOCALE,
  manifestEntryForPath,
  createPageManifest,
  loadSourcePages,
  loadPageManifest,
  indexPageManifest,
  hasAuditScope,
  routeOutputFile,
  businessCategoryTopic
};
