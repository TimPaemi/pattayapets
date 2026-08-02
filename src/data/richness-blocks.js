"use strict";

/* Shared FAQ de-duplication only. Regulated, local-market and clinical copy belongs
   beside its scoped page data and evidence; do not reintroduce generic content pools. */
function mergeFaqs(existing, extra, maxTotal) {
  existing = (existing || []).slice();
  maxTotal = maxTotal || 8;
  var seen = {};
  existing.forEach(function (faq) { seen[faq[0]] = true; });
  (extra || []).forEach(function (faq) {
    if (existing.length >= maxTotal) return;
    if (!seen[faq[0]]) {
      existing.push(faq);
      seen[faq[0]] = true;
    }
  });
  return existing;
}

module.exports = { mergeFaqs };
