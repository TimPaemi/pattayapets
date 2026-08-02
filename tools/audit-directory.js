"use strict";
/* Directory fact-gap report. Run after build: npm run audit:directory */
const { BUSINESSES, CATEGORIES, AREAS } = require("../src/data/businesses.js");

const gaps = {
  noAddress: [], noContact: [], missingLocalAreas: [], areaNotApplicable: [],
  invalidScope: [], noWebsite: [], c24NoPhone: [], summaryContactHint: []
};

var phoneHint = /\b(0\d{1,2}[\s-]?\d{3}[\s-]?\d{4}|\+66[\d\s-]{8,})\b/;
var urlHint = /https?:\/\/[^\s]+/i;
var emailHint = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i;

BUSINESSES.forEach(function (b) {
  var hasContact = !!(b.phone || b.whatsapp || b.line || b.email || b.website);
  var summary = b.summary || "";
  if (!b.address) gaps.noAddress.push(b.slug);
  if (!hasContact) gaps.noContact.push(b.slug);
  if (!hasContact && (phoneHint.test(summary) || urlHint.test(summary) || emailHint.test(summary))) {
    gaps.summaryContactHint.push(b.slug);
  }
  var areas = Array.isArray(b.areas) ? b.areas : [];
  if (!["local", "regional", "nationwide", "remote-only", "unknown"].includes(b.serviceScope)) {
    gaps.invalidScope.push(b.slug);
  }
  if (!areas.length && ["local", "regional"].includes(b.serviceScope)) gaps.missingLocalAreas.push(b.slug);
  if (!areas.length && ["nationwide", "remote-only"].includes(b.serviceScope)) gaps.areaNotApplicable.push(b.slug);
  if (!b.website) gaps.noWebsite.push(b.slug);
  if (b.c24 && !b.phone) gaps.c24NoPhone.push(b.slug);
});

console.log("Directory listings:", BUSINESSES.length);
console.log("Categories:", Object.keys(CATEGORIES).length);
console.log("Areas:", Object.keys(AREAS).length);
console.log("");
console.log("Missing address:", gaps.noAddress.length);
gaps.noAddress.forEach(function (s) { console.log(" ", s); });
console.log("");
console.log("Missing any contact channel:", gaps.noContact.length);
gaps.noContact.forEach(function (s) { console.log(" ", s); });
console.log("");
console.log("No Pattaya area tags (explicit local/regional scope):", gaps.missingLocalAreas.length);
gaps.missingLocalAreas.forEach(function (s) { console.log(" ", s); });
console.log("No Pattaya area tag by explicit nationwide/remote scope:", gaps.areaNotApplicable.length);
gaps.areaNotApplicable.forEach(function (s) { console.log(" ", s); });

var ok = !gaps.c24NoPhone.length && !gaps.invalidScope.length;
if (gaps.noContact.length) {
  console.log("\nWARN missing contact channel:", gaps.noContact.length);
  gaps.noContact.forEach(function (s) { console.log(" ", s); });
}
if (gaps.summaryContactHint.length) {
  console.log("\nWARN summary mentions contact but no structured field:", gaps.summaryContactHint.length);
  gaps.summaryContactHint.forEach(function (s) { console.log(" ", s); });
}
if (gaps.c24NoPhone.length) {
  console.log("\nFAIL 24h listings without phone:", gaps.c24NoPhone.join(", "));
  ok = false;
}
if (gaps.missingLocalAreas.length) {
  console.log("\nADVISORY local/regional records outside Pattaya area-tag surfaces:", gaps.missingLocalAreas.join(", "));
}
if (gaps.invalidScope.length) {
  console.log("\nFAIL listings with invalid serviceScope:", gaps.invalidScope.join(", "));
}
if (ok) {
  var advisories = gaps.noContact.length + gaps.summaryContactHint.length + gaps.missingLocalAreas.length;
  console.log("\nPASS - hard directory checks passed; " + advisories + " advisory item(s) above");
}
process.exit(ok ? 0 : 1);
