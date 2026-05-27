"use strict";
/* Verify import country pages link to their export pair (and vice versa).
   Run after build: npm run audit:country-pairs */
const fs = require("fs");
const path = require("path");
const { IMPORT_TO_EXPORT, EXPORT_TO_IMPORT } = require("../src/data/country-pairs.js");

const dist = path.join(__dirname, "..", "dist");
const missing = [];

Object.keys(IMPORT_TO_EXPORT).forEach(function (slug) {
  var pair = IMPORT_TO_EXPORT[slug];
  var file = path.join(dist, "bring-pet-to-thailand", slug + ".html");
  var exportUrl = "/take-pet-out-of-thailand/" + pair.slug + ".html";
  if (!fs.existsSync(file)) {
    missing.push(slug + " (import HTML missing)");
    return;
  }
  var html = fs.readFileSync(file, "utf8");
  if (html.indexOf(exportUrl) === -1) {
    missing.push(slug + " (no link to " + exportUrl + ")");
  }
});

Object.keys(EXPORT_TO_IMPORT).forEach(function (slug) {
  var pair = EXPORT_TO_IMPORT[slug];
  var file = path.join(dist, "take-pet-out-of-thailand", slug + ".html");
  var importUrl = "/bring-pet-to-thailand/" + pair.slug + ".html";
  if (!fs.existsSync(file)) {
    missing.push(slug + " (export HTML missing)");
    return;
  }
  var html = fs.readFileSync(file, "utf8");
  if (html.indexOf(importUrl) === -1) {
    missing.push(slug + " (no link to " + importUrl + ")");
  }
});

console.log("Country pairs:", Object.keys(IMPORT_TO_EXPORT).length, "import,", Object.keys(EXPORT_TO_IMPORT).length, "export");
if (missing.length) {
  console.log("FAIL missing cross-links:", missing.length);
  missing.forEach(function (m) { console.log(" ", m); });
  process.exit(1);
}
console.log("OK — every paired country page cross-links its mirror");
