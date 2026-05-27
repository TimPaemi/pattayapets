"use strict";
/* Directory fact-gap report. Run after build: npm run audit:directory */
const { BUSINESSES, CATEGORIES, AREAS } = require("../src/data/businesses.js");

const gaps = { noAddress: [], noContact: [], noAreas: [], noWebsite: [], c24NoPhone: [] };

BUSINESSES.forEach(function (b) {
  var hasContact = !!(b.phone || b.whatsapp || b.line || b.email || b.website);
  if (!b.address) gaps.noAddress.push(b.slug);
  if (!hasContact) gaps.noContact.push(b.slug);
  if (!b.areas || !b.areas.length) gaps.noAreas.push(b.slug);
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
console.log("No area tags (nationwide OK):", gaps.noAreas.length);
gaps.noAreas.forEach(function (s) { console.log(" ", s); });

var ok = !gaps.c24NoPhone.length;
if (gaps.noContact.length) {
  console.log("\nWARN missing contact channel:", gaps.noContact.length);
  gaps.noContact.forEach(function (s) { console.log(" ", s); });
}
if (gaps.c24NoPhone.length) {
  console.log("\nFAIL 24h listings without phone:", gaps.c24NoPhone.join(", "));
  ok = false;
}
if (ok) console.log("\nOK — contact audit passed (see WARN lines for thin listings)");
process.exit(ok ? 0 : 1);
