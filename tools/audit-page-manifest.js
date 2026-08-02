#!/usr/bin/env node
"use strict";
/* Validate the source-derived page manifest before build/audit consumers use it. */

const {
  loadSourcePages,
  loadPageManifest,
  hasAuditScope,
  routeOutputFile
} = require("../src/page-manifest.js");

function main() {
  const sourcePages = loadSourcePages();
  const manifest = loadPageManifest();
  const sourcePaths = new Set(sourcePages.map(function (page) { return page.path; }));
  const manifestPaths = new Set();
  const outputs = new Set();
  const categories = new Set([
    "home", "start", "import", "export", "emergency", "owning", "health",
    "lifestyle", "adoption", "species", "insurance", "directory", "general"
  ]);

  manifest.forEach(function (entry) {
    if (manifestPaths.has(entry.path)) throw new Error("duplicate path: " + entry.path);
    manifestPaths.add(entry.path);
    const output = routeOutputFile(entry.path);
    if (outputs.has(output)) throw new Error("duplicate output: " + output);
    outputs.add(output);
    if (!categories.has(entry.category)) throw new Error("unknown category on " + entry.path);
    if (entry.locale !== "en") throw new Error("unexpected locale on " + entry.path);
    if (hasAuditScope(entry, "regulated") && hasAuditScope(entry, "loop-queue")) {
      throw new Error("regulated route entered the enrichment loop: " + entry.path);
    }
  });

  if (manifest.length !== sourcePages.length + 1 || !manifestPaths.has("/sitemap.html")) {
    throw new Error("manifest must cover every source page plus generated /sitemap.html");
  }
  sourcePaths.forEach(function (pagePath) {
    if (!manifestPaths.has(pagePath)) throw new Error("source page is absent from manifest: " + pagePath);
  });

  const count = function (scope) {
    return manifest.filter(function (entry) { return hasAuditScope(entry, scope); }).length;
  };
  const indexable = manifest.filter(function (entry) { return entry.indexable; }).length;
  console.log("Page manifest: PASS (" + manifest.length + " routes, " + indexable + " indexable)");
  console.log("Audit scopes: content-depth=" + count("content-depth") +
    ", loop-queue=" + count("loop-queue") + ", regulated=" + count("regulated"));
}

try { main(); }
catch (error) {
  console.error("Page manifest: FAIL\n- " + error.message);
  process.exit(1);
}
