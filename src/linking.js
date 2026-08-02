"use strict";
/* Contextual links within PattayaPets. Cross-publication links are prohibited. */

const {
  manifestEntryForPath,
  businessCategoryTopic
} = require("./page-manifest.js");

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const INTERNAL_BY_TOPIC = {
  import: [
    { path: "/bring-pet-to-thailand/", name: "Bring a pet to Thailand" },
    { path: "/bring-pet-to-thailand/checklist.html", name: "Import checklist" },
    { path: "/bring-pet-to-thailand/import-permit-thailand-dld.html", name: "DLD import permit" },
    { path: "/bring-pet-to-thailand/airline-pet-policies.html", name: "Airline pet policies" },
    { path: "/pet-relocation/", name: "Relocation agents" },
    { path: "/vets/", name: "Vets directory" }
  ],
  export: [
    { path: "/take-pet-out-of-thailand/", name: "Take a pet out of Thailand" },
    { path: "/take-pet-out-of-thailand/export-process.html", name: "Export process" },
    { path: "/take-pet-out-of-thailand/checklist.html", name: "Export checklist" },
    { path: "/pet-relocation/", name: "Relocation agents" },
    { path: "/vets/", name: "Vets directory" }
  ],
  emergency: [
    { path: "/pet-emergency/24-hour-vets-pattaya.html", name: "24-hour vets" },
    { path: "/vets/?filter=24h", name: "24-hour directory filter" },
    { path: "/pet-emergency/heatstroke.html", name: "Heatstroke" },
    { path: "/pet-emergency/poisoning.html", name: "Poisoning" },
    { path: "/pet-emergency/", name: "Emergency hub" },
    { path: "/pet-health-pattaya/", name: "Pet health guide" },
    { path: "/owning-a-pet-in-pattaya/getting-to-the-vet.html", name: "Getting to the vet" }
  ],
  owning: [
    { path: "/owning-a-pet-in-pattaya/", name: "Owning a pet in Pattaya" },
    { path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", name: "Hot-climate care" },
    { path: "/owning-a-pet-in-pattaya/pet-friendly-housing.html", name: "Pet-friendly housing" },
    { path: "/owning-a-pet-in-pattaya/lost-pet-pattaya.html", name: "Lost pet plan" },
    { path: "/start-here.html", name: "Start here" },
    { path: "/pet-shops/", name: "Pet shops" },
    { path: "/dog-friendly-pattaya/", name: "Dog-friendly Pattaya" }
  ],
  health: [
    { path: "/pet-health-pattaya/", name: "Pet health hub" },
    { path: "/pet-health-pattaya/heartworm.html", name: "Heartworm" },
    { path: "/pet-health-pattaya/tick-borne-disease.html", name: "Tick-borne disease" },
    { path: "/vets/", name: "Vets directory" },
    { path: "/pet-emergency/", name: "Emergencies" },
    { path: "/mobile-vets/", name: "Mobile vets" }
  ],
  lifestyle: [
    { path: "/dog-friendly-pattaya/", name: "Dog-friendly Pattaya" },
    { path: "/dog-friendly-pattaya/beaches.html", name: "Dog-friendly beaches" },
    { path: "/dog-friendly-pattaya/restaurants.html", name: "Dog-friendly restaurants" },
    { path: "/owning-a-pet-in-pattaya/where-to-walk-your-dog.html", name: "Where to walk your dog" },
    { path: "/pet-emergency/beach-and-sea-hazards.html", name: "Beach hazards" },
    { path: "/pet-emergency/street-dog-encounters.html", name: "Street-dog encounters" }
  ],
  adoption: [
    { path: "/adopt-a-pet-pattaya/", name: "Adopt a pet in Pattaya" },
    { path: "/adopt-a-pet-pattaya/hope-for-strays.html", name: "Hope for Strays" },
    { path: "/adopt-a-pet-pattaya/soi-dog-foundation.html", name: "Soi Dog Foundation" },
    { path: "/adopt-a-pet-pattaya/animal-army-foundation.html", name: "Animal Army Foundation" },
    { path: "/adopt-a-pet-pattaya/how-to-help.html", name: "How to help street animals" },
    { path: "/adopt-a-pet-pattaya/fostering.html", name: "Fostering" },
    { path: "/vets/", name: "Vets for rescue follow-up" },
    { path: "/pet-health-pattaya/", name: "Pet health guide" }
  ],
  species: [
    { path: "/dogs/", name: "Dogs in Pattaya" },
    { path: "/cats/", name: "Cats in Pattaya" },
    { path: "/pet-health-pattaya/", name: "Pet health" },
    { path: "/vets/", name: "Vets directory" },
    { path: "/guides.html?topic=species", name: "Species guides" }
  ],
  directory: [
    { path: "/directory.html", name: "Full directory" },
    { path: "/guides.html", name: "All guides" },
    { path: "/start-here.html", name: "Start here" },
    { path: "/search.html", name: "Search the site" },
    { path: "/pet-emergency/24-hour-vets-pattaya.html", name: "24-hour vets" }
  ],
  relocation: [
    { path: "/bring-pet-to-thailand/", name: "Import guide" },
    { path: "/take-pet-out-of-thailand/", name: "Export guide" },
    { path: "/bring-pet-to-thailand/checklist.html", name: "Import checklist" },
    { path: "/take-pet-out-of-thailand/checklist.html", name: "Export checklist" },
    { path: "/bring-pet-to-thailand/from-uk.html", name: "Import from UK" },
    { path: "/take-pet-out-of-thailand/to-uk.html", name: "Export to UK" },
    { path: "/bring-pet-to-thailand/from-uae.html", name: "Import from UAE" },
    { path: "/take-pet-out-of-thailand/to-eu.html", name: "Export to EU" },
    { path: "/pet-relocation/", name: "Relocation agents" }
  ],
  start: [
    { path: "/start-here.html", name: "Start here" },
    { path: "/guides.html?topic=start", name: "Orientation guides" },
    { path: "/vets/", name: "Find a vet" },
    { path: "/pet-emergency/24-hour-vets-pattaya.html", name: "24-hour vets" },
    { path: "/bring-pet-to-thailand/", name: "Import guide" }
  ],
  home: [
    { path: "/directory.html", name: "Directory" },
    { path: "/guides.html", name: "Guides" },
    { path: "/start-here.html", name: "Start here" },
    { path: "/bring-pet-to-thailand/", name: "Import guide" },
    { path: "/take-pet-out-of-thailand/", name: "Export guide" },
    { path: "/pet-relocation/", name: "Relocation agents" },
    { path: "/mobile-vets/", name: "Mobile vets" },
    { path: "/adopt-a-pet-pattaya/", name: "Adopt a pet" },
    { path: "/pet-emergency/24-hour-vets-pattaya.html", name: "24-hour vets" }
  ],
  general: [
    { path: "/guides.html", name: "All guides" },
    { path: "/directory.html", name: "Directory" },
    { path: "/start-here.html", name: "Start here" },
    { path: "/search.html", name: "Search" },
    { path: "/about.html", name: "About PattayaPets" }
  ],
  insurance: [
    { path: "/pet-insurance-thailand.html", name: "Pet insurance guide" },
    { path: "/vets/", name: "Vets directory" },
    { path: "/pet-emergency/", name: "Pet emergencies" },
    { path: "/owning-a-pet-in-pattaya/", name: "Owning a pet in Pattaya" },
    { path: "/pet-health-pattaya/", name: "Pet health" }
  ]
};

function linkTopicFromPath(path) {
  return manifestEntryForPath(path || "/unknown.html").category;
}

function linkTopicForCategory(catKey) {
  return businessCategoryTopic(catKey);
}

function pickLinks(list, limit) {
  if (!list || !list.length) return [];
  var n = limit || list.length;
  return list.slice(0, n);
}

function internalListHtml(topic, limit) {
  var links = pickLinks(INTERNAL_BY_TOPIC[topic] || INTERNAL_BY_TOPIC.general, limit);
  if (!links.length) return "";
  return '<ul class="toc link-panel__list">' +
    links.map(function (l) {
      return '<li><a href="' + l.path + '">' + esc(l.name) + "</a></li>";
    }).join("") +
    "</ul>";
}

function linkPanel(title, bodyHtml) {
  if (!bodyHtml) return "";
  return '<details class="toc-panel card link-panel">' +
    '<summary class="toc-panel__title">' + title + "</summary>" +
    '<div class="toc-panel__body">' + bodyHtml + "</div></details>";
}

function sidebarLinkPanels(topic, opts) {
  opts = opts || {};
  var internal = opts.internal !== false ? internalListHtml(topic, opts.internalLimit || 6) : "";
  return linkPanel("Related on PattayaPets", internal);
}

function sidebarLinkAside(topic, opts) {
  var panels = sidebarLinkPanels(topic, opts);
  if (!panels) return "";
  return '<aside class="sidebar sidebar-links" aria-label="Related links">' + panels + "</aside>";
}

function mergeSidebars(tocAside, linkAside) {
  if (!tocAside && !linkAside) return "";
  if (tocAside && linkAside) {
    var tocInner = tocAside.replace(/^<aside[^>]*>/, "").replace(/<\/aside>\s*$/, "");
    var linkInner = linkAside.replace(/^<aside[^>]*>/, "").replace(/<\/aside>\s*$/, "");
    return '<aside class="sidebar sidebar-stack" aria-label="Page navigation and links">' +
      tocInner + linkInner + "</aside>";
  }
  return tocAside || linkAside;
}

function hubQuickBar(topic) {
  var links = pickLinks(INTERNAL_BY_TOPIC[topic] || INTERNAL_BY_TOPIC.general, 6);
  if (!links.length) return "";
  return '<details class="corridor-panel hub-quick-panel hub-quick-links">' +
    '<summary class="corridor-panel__title">Jump to</summary>' +
    '<div class="corridor-panel__body chips">' +
    links.map(function (l) {
      return '<a class="chip chip-link" href="' + l.path + '">' + esc(l.name) + "</a>";
    }).join("") +
    "</div></details>";
}

function guideClusterChips() {
  var clusters = [
    { path: "/guides.html?topic=start", name: "Start here" },
    { path: "/guides.html?topic=import", name: "Import" },
    { path: "/guides.html?topic=export", name: "Export" },
    { path: "/guides.html?topic=emergency", name: "Emergency" },
    { path: "/guides.html?topic=owning", name: "Owning" },
    { path: "/guides.html?topic=health", name: "Health" },
    { path: "/guides.html?topic=adoption", name: "Adoption" },
    { path: "/guides.html?topic=lifestyle", name: "Out & about" },
    { path: "/guides.html?topic=species", name: "Dogs & cats" }
  ];
  return '<div class="guide-cluster-chips chips">' +
    clusters.map(function (c) {
      return '<a class="chip chip-link" href="' + c.path + '">' + esc(c.name) + "</a>";
    }).join("") +
    "</div>";
}

function inPageLinkSection(topic) {
  var internal = INTERNAL_BY_TOPIC[topic] || INTERNAL_BY_TOPIC.general;
  if (!internal.length) return "";
  return '<section class="section section-tint"><div class="container">' +
    '<details class="corridor-panel more-read-panel">' +
    '<summary class="corridor-panel__title">More to read</summary>' +
    '<div class="corridor-panel__body">' +
    "<p class=\"notice\">Related PattayaPets guides selected for this topic.</p>" +
    '<div class="link-section-grid">' +
    '<div class="link-section-col"><div class="ch">On PattayaPets</div><div class="chips">' +
    internal.slice(0, 8).map(function (l) {
      return '<a class="chip chip-link" href="' + l.path + '">' + esc(l.name) + "</a>";
    }).join("") +
    '</div><p class="related-all-link"><a href="/guides.html">All guides &rarr;</a> &middot; ' +
    '<a href="/directory.html">Directory &rarr;</a> &middot; ' +
    '<a href="/search.html">Search &rarr;</a></p></div>' +
    '' +
    "</div></div></details></div></section>";
}

function pathNorm(p) {
  return String(p || "").replace(/index\.html$/, "").split("?")[0] || "/";
}

function seeAlsoCallout(topic, excludePath) {
  var here = pathNorm(excludePath);
  var internal = (INTERNAL_BY_TOPIC[topic] || INTERNAL_BY_TOPIC.general).filter(function (l) {
    return pathNorm(l.path) !== here;
  }).slice(0, 4);
  if (!internal.length) return "";
  var body = "";
  if (internal.length) {
    body += "<p>" + internal.map(function (l) {
      return '<a href="' + l.path + '">' + esc(l.name) + "</a>";
    }).join(" &middot; ") + "</p>";
  }
  return '<div class="callout callout-note see-also"><div class="ch">See also</div>' + body + "</div>";
}

const CORRIDOR_IMPORT = [
  { path: "/bring-pet-to-thailand/from-uk.html", name: "From UK" },
  { path: "/bring-pet-to-thailand/from-usa.html", name: "From USA" },
  { path: "/bring-pet-to-thailand/from-eu.html", name: "From EU" },
  { path: "/bring-pet-to-thailand/from-australia.html", name: "From Australia" },
  { path: "/bring-pet-to-thailand/from-uae.html", name: "From UAE" },
  { path: "/bring-pet-to-thailand/from-canada.html", name: "From Canada" },
  { path: "/bring-pet-to-thailand/from-japan.html", name: "From Japan" },
  { path: "/bring-pet-to-thailand/from-singapore.html", name: "From Singapore" },
  { path: "/bring-pet-to-thailand/from-india.html", name: "From India" },
  { path: "/bring-pet-to-thailand/from-philippines.html", name: "From Philippines" },
  { path: "/bring-pet-to-thailand/from-china.html", name: "From China" }
];

const CORRIDOR_EXPORT = [
  { path: "/take-pet-out-of-thailand/to-uk.html", name: "To UK" },
  { path: "/take-pet-out-of-thailand/to-usa.html", name: "To USA" },
  { path: "/take-pet-out-of-thailand/to-eu.html", name: "To EU" },
  { path: "/take-pet-out-of-thailand/to-australia.html", name: "To Australia" },
  { path: "/take-pet-out-of-thailand/to-uae.html", name: "To UAE" },
  { path: "/take-pet-out-of-thailand/to-canada.html", name: "To Canada" },
  { path: "/take-pet-out-of-thailand/to-japan.html", name: "To Japan" },
  { path: "/take-pet-out-of-thailand/to-singapore.html", name: "To Singapore" },
  { path: "/take-pet-out-of-thailand/to-india.html", name: "To India" },
  { path: "/take-pet-out-of-thailand/to-philippines.html", name: "To Philippines" },
  { path: "/take-pet-out-of-thailand/to-china.html", name: "To China" }
];

function corridorChipRow(links, allPath, allLabel) {
  return links.map(function (l) {
    return '<a class="chip chip-link" href="' + l.path + '">' + esc(l.name) + "</a>";
  }).join("") +
    '<a class="chip chip-link" href="' + allPath + '">' + esc(allLabel) + "</a>";
}

function corridorChipsSection() {
  return '<section class="section section-tint"><div class="container">' +
    '<div class="section-head"><h2>Country corridors</h2>' +
    "<p>Thai DLD steps are the same; what changes is your origin or destination " +
    "paperwork. Pick the corridor that matches your move.</p></div>" +
    '<details class="corridor-panel">' +
    '<summary class="corridor-panel__title">Importing into Thailand</summary>' +
    '<div class="corridor-panel__body chips">' +
    corridorChipRow(CORRIDOR_IMPORT, "/bring-pet-to-thailand/", "All import corridors \u2192") +
    "</div></details>" +
    '<details class="corridor-panel">' +
    '<summary class="corridor-panel__title">Exporting from Thailand</summary>' +
    '<div class="corridor-panel__body chips">' +
    corridorChipRow(CORRIDOR_EXPORT, "/take-pet-out-of-thailand/", "All export corridors \u2192") +
    "</div></details></div></section>";
}

module.exports = {
  linkTopicFromPath,
  linkTopicForCategory,
  sidebarLinkPanels,
  sidebarLinkAside,
  mergeSidebars,
  inPageLinkSection,
  seeAlsoCallout,
  hubQuickBar,
  guideClusterChips,
  internalListHtml,
  corridorChipsSection
};
