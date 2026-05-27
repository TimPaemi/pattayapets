"use strict";
/* Bidirectional import ↔ export country slug pairs for related-guide strips
   and in-body cross-links between paired country pages. */

const IMPORT_TO_EXPORT = {
  "from-uk": { slug: "to-uk", label: "To the UK (export)" },
  "from-usa": { slug: "to-usa", label: "To the USA (export)" },
  "from-australia": { slug: "to-australia", label: "To Australia (export)" },
  "from-eu": { slug: "to-eu", label: "To the EU (export)" },
  "from-germany": { slug: "to-germany", label: "To Germany (export)" },
  "from-canada": { slug: "to-canada", label: "To Canada (export)" },
  "from-russia": { slug: "to-russia", label: "To Russia (export)" },
  "from-sweden": { slug: "to-sweden", label: "To Sweden (export)" },
  "from-norway": { slug: "to-norway", label: "To Norway (export)" },
  "from-denmark": { slug: "to-denmark", label: "To Denmark (export)" },
  "from-finland": { slug: "to-finland", label: "To Finland (export)" },
  "from-netherlands": { slug: "to-netherlands", label: "To the Netherlands (export)" },
  "from-france": { slug: "to-france", label: "To France (export)" },
  "from-ireland": { slug: "to-ireland", label: "To Ireland (export)" },
  "from-switzerland": { slug: "to-switzerland", label: "To Switzerland (export)" },
  "from-new-zealand": { slug: "to-new-zealand", label: "To New Zealand (export)" },
  "from-japan": { slug: "to-japan", label: "To Japan (export)" },
  "from-singapore": { slug: "to-singapore", label: "To Singapore (export)" },
  "from-uae": { slug: "to-uae", label: "To the UAE (export)" },
  "from-india": { slug: "to-india", label: "To India (export)" },
  "from-philippines": { slug: "to-philippines", label: "To the Philippines (export)" },
  "from-china": { slug: "to-china", label: "To China (export)" },
  "from-south-africa": { slug: "to-south-africa", label: "To South Africa (export)" }
};

const EXPORT_TO_IMPORT = {
  "to-uk": { slug: "from-uk", label: "From the UK (import)" },
  "to-usa": { slug: "from-usa", label: "From the USA (import)" },
  "to-australia": { slug: "from-australia", label: "From Australia (import)" },
  "to-eu": { slug: "from-eu", label: "From the EU (import)" },
  "to-germany": { slug: "from-germany", label: "From Germany (import)" },
  "to-canada": { slug: "from-canada", label: "From Canada (import)" },
  "to-russia": { slug: "from-russia", label: "From Russia (import)" },
  "to-sweden": { slug: "from-sweden", label: "From Sweden (import)" },
  "to-norway": { slug: "from-norway", label: "From Norway (import)" },
  "to-denmark": { slug: "from-denmark", label: "From Denmark (import)" },
  "to-finland": { slug: "from-finland", label: "From Finland (import)" },
  "to-netherlands": { slug: "from-netherlands", label: "From the Netherlands (import)" },
  "to-france": { slug: "from-france", label: "From France (import)" },
  "to-ireland": { slug: "from-ireland", label: "From Ireland (import)" },
  "to-switzerland": { slug: "from-switzerland", label: "From Switzerland (import)" },
  "to-new-zealand": { slug: "from-new-zealand", label: "From New Zealand (import)" },
  "to-japan": { slug: "from-japan", label: "From Japan (import)" },
  "to-singapore": { slug: "from-singapore", label: "From Singapore (import)" },
  "to-uae": { slug: "from-uae", label: "From the UAE (import)" },
  "to-india": { slug: "from-india", label: "From India (import)" },
  "to-philippines": { slug: "from-philippines", label: "From the Philippines (import)" },
  "to-china": { slug: "from-china", label: "From China (import)" },
  "to-south-africa": { slug: "from-south-africa", label: "From South Africa (import)" }
};

function importCountryRelated(slug, base, desc) {
  var pair = IMPORT_TO_EXPORT[slug];
  if (!pair) return base;
  return [
    { name: pair.label, path: "/take-pet-out-of-thailand/" + pair.slug + ".html",
      desc: desc || "The reverse process, for when you leave." }
  ].concat(base);
}

function exportCountryRelated(slug, base, desc) {
  var pair = EXPORT_TO_IMPORT[slug];
  if (!pair) return base;
  return [
    { name: pair.label, path: "/bring-pet-to-thailand/" + pair.slug + ".html",
      desc: desc || "The easier direction, and why the return is harder." }
  ].concat(base);
}

function exportReturnBlock(importSlug) {
  var pair = IMPORT_TO_EXPORT[importSlug];
  if (!pair) return "";
  return "<p>See our guide to " +
    '<a href="/take-pet-out-of-thailand/' + pair.slug + '.html">' +
    pair.label + "</a> for the full export paperwork.</p>";
}

function attachReturnExportLink(sections, importSlug) {
  var pair = IMPORT_TO_EXPORT[importSlug];
  var block = exportReturnBlock(importSlug);
  if (!block || !sections.length || !pair) return sections;
  var exportPath = "/take-pet-out-of-thailand/" + pair.slug + ".html";
  for (var i = sections.length - 1; i >= 0; i--) {
    if (/return|re-entry|bringing it back|bringing your pet back/i.test(sections[i].h || "")) {
      if (sections[i].html.indexOf(exportPath) === -1) {
        sections[i].html += block;
      }
      return sections;
    }
  }
  return sections;
}

function importMirrorBlock(exportSlug) {
  var pair = EXPORT_TO_IMPORT[exportSlug];
  if (!pair) return "";
  return "<p>If you came the other way, see our guide to " +
    '<a href="/bring-pet-to-thailand/' + pair.slug + '.html">' +
    pair.label + "</a>.</p>";
}

function attachImportMirrorLink(sections, exportSlug) {
  var pair = EXPORT_TO_IMPORT[exportSlug];
  var block = importMirrorBlock(exportSlug);
  if (!block || !sections.length || !pair) return sections;
  var importPath = "/bring-pet-to-thailand/" + pair.slug + ".html";
  if (sections[sections.length - 1].html.indexOf(importPath) === -1) {
    sections[sections.length - 1].html += block;
  }
  return sections;
}

module.exports = {
  importCountryRelated,
  exportCountryRelated,
  exportReturnBlock,
  attachReturnExportLink,
  importMirrorBlock,
  attachImportMirrorLink
};
