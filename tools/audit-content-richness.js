"use strict";
/* Richness audit — flags guides above minimum but below agency-grade depth. */
const fs = require("fs");
const path = require("path");

const dist = path.join(__dirname, "..", "dist");
const GUIDE_PREFIXES = [
  "/bring-pet-to-thailand/", "/take-pet-out-of-thailand/", "/dog-friendly-pattaya/",
  "/pet-emergency/", "/owning-a-pet-in-pattaya/", "/pet-health-pattaya/",
  "/adopt-a-pet-pattaya/", "/cats/", "/dogs/"
];
const STANDALONE = new Set(["/pet-insurance-thailand.html"]);
const HUB_ONLY = new Set([
  "/bring-pet-to-thailand/index.html", "/take-pet-out-of-thailand/index.html",
  "/dog-friendly-pattaya/index.html", "/pet-emergency/index.html",
  "/owning-a-pet-in-pattaya/index.html", "/pet-health-pattaya/index.html",
  "/adopt-a-pet-pattaya/index.html", "/cats/index.html", "/dogs/index.html"
]);

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
  if (STANDALONE.has(rel)) return true;
  if (!GUIDE_PREFIXES.some(function (pre) { return rel.startsWith(pre); })) return false;
  if (HUB_ONLY.has(rel)) return false;
  return true;
}

function countSections(html) {
  var h2s = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(function (m) {
    return m[1].replace(/<[^>]+>/g, "").trim();
  });
  var skip = /^(official sources|what comes next|next steps|browse the guides|questions|keep reading|browse by topic|frequently asked)$/i;
  return h2s.filter(function (t) { return t && !skip.test(t); }).length;
}

if (!fs.existsSync(dist)) {
  console.error("dist/ missing — run npm run build first");
  process.exit(1);
}

const MIN_WORDS = 1400;
const MIN_FAQS = 5;
const MIN_SECTIONS = 5;

const rows = [];
walk(dist).forEach(function (f) {
  var rel = "/" + path.relative(dist, f).replace(/\\/g, "/");
  if (!isGuide(rel)) return;
  var html = fs.readFileSync(f, "utf8");
  var faqs = (html.match(/<details class="faq"/g) || []).length;
  var sections = countSections(html);
  var words = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().split(" ").length;
  var issues = [];
  if (words < MIN_WORDS) issues.push("words<" + MIN_WORDS);
  if (faqs < MIN_FAQS) issues.push("faqs<" + MIN_FAQS);
  if (sections < MIN_SECTIONS) issues.push("sections<" + MIN_SECTIONS);
  if (issues.length) rows.push({ rel: rel, words: words, faqs: faqs, sections: sections, issues: issues.join(", ") });
});

rows.sort(function (a, b) { return a.words - b.words; });
console.log("Agency-grade richness audit (words>=" + MIN_WORDS + ", faqs>=" + MIN_FAQS + ", sections>=" + MIN_SECTIONS + ")");
console.log("Below bar:", rows.length);
rows.forEach(function (r) {
  console.log(" ", r.words + "w", r.faqs + "faq", r.sections + "sec", r.issues, "—", r.rel);
});
