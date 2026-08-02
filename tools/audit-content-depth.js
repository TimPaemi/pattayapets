"use strict";
/* Guide depth audit on dist HTML. Run after build: npm run audit:content */
const fs = require("fs");
const path = require("path");
const {
  loadPageManifest,
  hasAuditScope,
  routeOutputFile
} = require("../src/page-manifest.js");

const dist = path.join(__dirname, "..", "dist");

const MIN_SECTIONS = 3;
const MIN_FAQS = 3;
const STRICT = process.argv.includes("--strict");

function countSections(html) {
  var h2s = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(function (m) {
    return m[1].replace(/<[^>]+>/g, "").trim();
  });
  var skip = /^(official sources|what comes next|next steps|browse the guides|questions)$/i;
  return h2s.filter(function (t) { return t && !skip.test(t); }).length;
}

function countFaqs(html) {
  return (html.match(/<details class="faq"/g) || []).length;
}

const guides = loadPageManifest().filter(function (entry) {
  return hasAuditScope(entry, "content-depth");
});
const thinSections = [];
const thinFaqs = [];

guides.forEach(function (entry) {
  var rel = entry.path;
  var f = path.join(dist, ...routeOutputFile(rel).split("/"));
  if (!fs.existsSync(f)) throw new Error("Manifest guide output is missing: " + rel);
  var html = fs.readFileSync(f, "utf8");
  var sections = countSections(html);
  var faqs = countFaqs(html);
  if (sections < MIN_SECTIONS) thinSections.push({ p: rel, n: sections });
  if (faqs < MIN_FAQS) thinFaqs.push({ p: rel, n: faqs });
});

console.log("Guide depth audit (dist/)");
console.log("Minimum:", MIN_SECTIONS, "content sections,", MIN_FAQS, "FAQs");
console.log("Guides checked:", thinSections.length + thinFaqs.length > 0 ?
  "see WARN lines" : guides.length);

if (thinSections.length) {
  console.log("\nADVISORY thin sections (<" + MIN_SECTIONS + "):", thinSections.length);
  thinSections.sort(function (a, b) { return a.n - b.n; });
  thinSections.forEach(function (x) { console.log(" ", x.n, x.p); });
}
if (thinFaqs.length) {
  console.log("\nADVISORY thin FAQs (<" + MIN_FAQS + "):", thinFaqs.length);
  thinFaqs.sort(function (a, b) { return a.n - b.n; });
  thinFaqs.forEach(function (x) { console.log(" ", x.n, x.p); });
}

if (!thinSections.length && !thinFaqs.length) {
  console.log("\nOK — all checked guides meet minimum depth");
} else {
  console.log("\nADVISORY - thin guides listed (non-blocking unless --strict is used)");
}

process.exit(STRICT && (thinSections.length || thinFaqs.length) ? 1 : 0);
