"use strict";
/* Guide depth audit on dist HTML. Run after build: npm run audit:content */
const fs = require("fs");
const path = require("path");

const dist = path.join(__dirname, "..", "dist");

/* Indexable guide paths — exclude hubs ending in / and directory/business pages */
const GUIDE_PREFIXES = [
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

const SKIP_SUFFIX = /\/index\.html$/;
const HUB_ONLY = new Set([
  "/bring-pet-to-thailand/index.html",
  "/take-pet-out-of-thailand/index.html",
  "/dog-friendly-pattaya/index.html",
  "/pet-emergency/index.html",
  "/owning-a-pet-in-pattaya/index.html",
  "/pet-health-pattaya/index.html",
  "/adopt-a-pet-pattaya/index.html",
  "/cats/index.html",
  "/dogs/index.html"
]);

const MIN_SECTIONS = 3;
const MIN_FAQS = 3;

function walk(d, acc) {
  acc = acc || [];
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, f.name);
    if (f.isDirectory()) walk(p, acc);
    else if (f.name.endsWith(".html")) acc.push(p);
  }
  return acc;
}

function isGuide(rel) {
  if (!GUIDE_PREFIXES.some(function (pre) { return rel.startsWith(pre); })) return false;
  if (HUB_ONLY.has(rel)) return false;
  return true;
}

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

const files = walk(dist);
const thinSections = [];
const thinFaqs = [];

files.forEach(function (f) {
  var rel = "/" + path.relative(dist, f).replace(/\\/g, "/");
  if (rel === "/index.html") rel = "/";
  if (!isGuide(rel)) return;
  var html = fs.readFileSync(f, "utf8");
  var sections = countSections(html);
  var faqs = countFaqs(html);
  if (sections < MIN_SECTIONS) thinSections.push({ p: rel, n: sections });
  if (faqs < MIN_FAQS) thinFaqs.push({ p: rel, n: faqs });
});

console.log("Guide depth audit (dist/)");
console.log("Minimum:", MIN_SECTIONS, "content sections,", MIN_FAQS, "FAQs");
console.log("Guides checked:", thinSections.length + thinFaqs.length > 0 ?
  "see WARN lines" : files.filter(function (f) {
    var rel = "/" + path.relative(dist, f).replace(/\\/g, "/");
    return isGuide(rel);
  }).length);

var ok = true;
if (thinSections.length) {
  console.log("\nWARN thin sections (<" + MIN_SECTIONS + "):", thinSections.length);
  thinSections.sort(function (a, b) { return a.n - b.n; });
  thinSections.forEach(function (x) { console.log(" ", x.n, x.p); });
}
if (thinFaqs.length) {
  console.log("\nWARN thin FAQs (<" + MIN_FAQS + "):", thinFaqs.length);
  thinFaqs.sort(function (a, b) { return a.n - b.n; });
  thinFaqs.forEach(function (x) { console.log(" ", x.n, x.p); });
}

if (!thinSections.length && !thinFaqs.length) {
  console.log("\nOK — all checked guides meet minimum depth");
} else {
  console.log("\nWARN — thin guides listed (non-blocking; fix in content batches)");
}

process.exit(ok ? 0 : 1);
