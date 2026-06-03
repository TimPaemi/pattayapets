"use strict";
/* Contextual internal (PattayaPets) and Pattaya Authority network cross-links. */

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const NETWORK_SITES = {
  authority: {
    name: "Pattaya Authority",
    url: "https://pattaya-authority.com/work/pattaya-pets/",
    hint: "The network hub and editorial method."
  },
  timpaemi: {
    name: "TimPaemi",
    url: "https://timpaemi.com/",
    hint: "Publisher behind the network."
  },
  restaurant: {
    name: "Pattaya Restaurant Guide",
    url: "https://pattaya-restaurant-guide.com/",
    hint: "Dog-friendly dining and terrace policies."
  },
  visa: {
    name: "Pattaya Visa Help",
    url: "https://pattayavisahelp.com/",
    hint: "Visas, extensions and relocation timing."
  },
  gym: {
    name: "Pattaya Gym",
    url: "https://pattaya-gym.com/",
    hint: "Cool-hour routines alongside dog walks."
  },
  school: {
    name: "Pattaya School Guide",
    url: "https://pattaya-school-guide.com/",
    hint: "Schools when the whole family relocates."
  },
  coffee: {
    name: "Pattaya Coffee",
    url: "https://pattaya-coffee.com/",
    hint: "Outdoor seating and relaxed patios."
  },
  stream: {
    name: "Pattaya Villa Stream",
    url: "https://pattayastream.com/",
    hint: "Pet-friendly rentals and long-stay villas."
  },
  medical: {
    name: "Pattaya Medical",
    url: "https://pattaya-medical.com/",
    hint: "Human medical care in Pattaya."
  },
  vehicle: {
    name: "Pattaya Vehicle Rentals",
    url: "https://pattaya-vehicle-rentals.com/",
    hint: "Cars for vet trips, airport runs and crates."
  }
};

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
    { path: "/pet-relocation/", name: "Relocation agents" },
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

const NETWORK_BY_TOPIC = {
  import: ["visa", "vehicle", "school", "stream", "authority"],
  export: ["visa", "vehicle", "authority"],
  emergency: ["medical", "vehicle", "authority"],
  owning: ["vehicle", "restaurant", "stream", "gym", "authority"],
  lifestyle: ["restaurant", "stream", "coffee", "authority"],
  health: ["medical", "vehicle", "authority"],
  adoption: ["authority", "school"],
  species: ["restaurant", "school", "vehicle"],
  directory: ["vehicle", "medical", "visa", "authority"],
  relocation: ["visa", "vehicle", "stream", "authority"],
  start: ["visa", "school", "vehicle", "authority"],
  home: ["authority", "visa", "restaurant", "medical", "vehicle"],
  general: ["authority", "visa", "restaurant"],
  insurance: ["medical", "authority", "visa"]
};

const CATEGORY_TOPIC = {
  vets: "health",
  groomers: "directory",
  boarding: "owning",
  "pet-shops": "owning",
  trainers: "species",
  "mobile-vets": "health",
  "pet-relocation": "relocation"
};

function linkTopicFromPath(path) {
  if (!path) return "general";
  if (path === "/" || path === "/index.html") return "home";
  if (path.indexOf("/bring-pet-to-thailand") === 0) return "import";
  if (path.indexOf("/take-pet-out-of-thailand") === 0) return "export";
  if (path.indexOf("/pet-emergency") === 0) return "emergency";
  if (path.indexOf("/owning-a-pet-in-pattaya") === 0) return "owning";
  if (path.indexOf("/pet-health-pattaya") === 0) return "health";
  if (path.indexOf("/dog-friendly-pattaya") === 0) return "lifestyle";
  if (path.indexOf("/adopt-a-pet-pattaya") === 0) return "adoption";
  if (path === "/dogs/" || path.indexOf("/dogs/") === 0) return "species";
  if (path === "/cats/" || path.indexOf("/cats/") === 0) return "species";
  if (path === "/start-here.html") return "start";
  if (path.indexOf("/pet-insurance") === 0) return "insurance";
  if (path === "/directory.html" || path.indexOf("/area/") === 0) return "directory";
  if (/^\/(vets|groomers|boarding|pet-shops|trainers|mobile-vets|pet-relocation)\//.test(path)) {
    return "directory";
  }
  return "general";
}

function linkTopicForCategory(catKey) {
  return CATEGORY_TOPIC[catKey] || "directory";
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

function networkListHtml(topic, limit) {
  var keys = pickLinks(NETWORK_BY_TOPIC[topic] || NETWORK_BY_TOPIC.general, limit);
  if (!keys.length) return "";
  return '<ul class="toc link-panel__list">' +
    keys.map(function (k) {
      var s = NETWORK_SITES[k];
      if (!s) return "";
      return '<li><a href="' + s.url + '" target="_blank" rel="noopener noreferrer">' +
        esc(s.name) + "</a><span class=\"link-hint\">" + esc(s.hint) + "</span></li>";
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
  var network = opts.network !== false ? networkListHtml(topic, opts.networkLimit || 5) : "";
  return linkPanel("Also on PattayaPets", internal) + linkPanel("Pattaya network", network);
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
  return '<div class="hub-quick-links"><div class="ch">Jump to</div><div class="chips">' +
    links.map(function (l) {
      return '<a class="chip chip-link" href="' + l.path + '">' + esc(l.name) + "</a>";
    }).join("") +
    "</div></div>";
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
  var netKeys = NETWORK_BY_TOPIC[topic] || NETWORK_BY_TOPIC.general;
  if (!internal.length && !netKeys.length) return "";
  return '<section class="section section-tint"><div class="container">' +
    '<div class="section-head"><h2>More to read</h2>' +
    "<p>Jump to related guides on PattayaPets or sister sites in the Pattaya Authority network.</p></div>" +
    '<div class="link-section-grid">' +
    '<div class="link-section-col"><div class="ch">On PattayaPets</div><div class="chips">' +
    internal.slice(0, 8).map(function (l) {
      return '<a class="chip chip-link" href="' + l.path + '">' + esc(l.name) + "</a>";
    }).join("") +
    '</div><p style="margin:.75rem 0 0;font-size:.92rem"><a href="/guides.html">All guides &rarr;</a> &middot; ' +
    '<a href="/directory.html">Directory &rarr;</a> &middot; ' +
    '<a href="/search.html">Search &rarr;</a></p></div>' +
    '<div class="link-section-col"><div class="ch">Pattaya Authority network</div><div class="chips">' +
    netKeys.slice(0, 6).map(function (k) {
      var s = NETWORK_SITES[k];
      return s
        ? '<a class="chip chip-link" href="' + s.url + '" target="_blank" rel="noopener noreferrer">' +
          esc(s.name) + "</a>"
        : "";
    }).join("") +
    '</div><p style="margin:.75rem 0 0;font-size:.92rem"><a href="https://pattaya-authority.com/work/pattaya-pets/" ' +
    'target="_blank" rel="noopener noreferrer">About the network &rarr;</a></p></div>' +
    "</div></div></section>";
}

function pathNorm(p) {
  return String(p || "").replace(/index\.html$/, "").split("?")[0] || "/";
}

function seeAlsoCallout(topic, excludePath) {
  var here = pathNorm(excludePath);
  var internal = (INTERNAL_BY_TOPIC[topic] || INTERNAL_BY_TOPIC.general).filter(function (l) {
    return pathNorm(l.path) !== here;
  }).slice(0, 4);
  var netKeys = (NETWORK_BY_TOPIC[topic] || NETWORK_BY_TOPIC.general).slice(0, 3);
  if (!internal.length && !netKeys.length) return "";
  var body = "";
  if (internal.length) {
    body += "<p>" + internal.map(function (l) {
      return '<a href="' + l.path + '">' + esc(l.name) + "</a>";
    }).join(" &middot; ") + "</p>";
  }
  if (netKeys.length) {
    body += '<p class="see-also-network">Pattaya network: ' +
      netKeys.map(function (k) {
        var s = NETWORK_SITES[k];
        return s
          ? '<a href="' + s.url + '" target="_blank" rel="noopener noreferrer">' +
            esc(s.name) + "</a>"
          : "";
      }).filter(Boolean).join(" &middot; ") + "</p>";
  }
  return '<div class="callout callout-note see-also"><div class="ch">See also</div>' + body + "</div>";
}

function networkChipsHtml(keys) {
  var list = keys || Object.keys(NETWORK_SITES);
  return '<div class="chips">' + list.map(function (k) {
    var s = NETWORK_SITES[k];
    if (!s) return "";
    return '<a class="chip chip-link" href="' + s.url + '" target="_blank" rel="noopener noreferrer">' +
      esc(s.name) + "</a>";
  }).join("") + "</div>";
}

function networkDirectoryProse() {
  return "<h2>Sister publications in the Pattaya Authority network</h2>" +
    "<p>PattayaPets is one independent publication in a family of Pattaya guides. " +
    "Each site uses the same method &mdash; anonymous visits, bills paid in full, " +
    "no paid placements. They are editorial neighbours, not competitors:</p>" +
    networkChipsHtml() +
    '<p style="margin-top:.9rem"><a href="https://pattaya-authority.com/work/pattaya-pets/" target="_blank" ' +
    'rel="noopener noreferrer">About the Pattaya Authority network &rarr;</a></p>';
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

function corridorChipsSection() {
  return '<section class="section section-tint"><div class="container">' +
    '<div class="section-head"><h2>Country corridors</h2>' +
    "<p>Thai DLD steps are the same; what changes is your origin or destination " +
    "paperwork. Pick the corridor that matches your move.</p></div>" +
    '<div class="ch">Importing into Thailand</div>' +
    '<div class="chips" style="margin-bottom:1.1rem">' +
    CORRIDOR_IMPORT.map(function (l) {
      return '<a class="chip chip-link" href="' + l.path + '">' + esc(l.name) + "</a>";
    }).join("") +
    '<a class="chip chip-link" href="/bring-pet-to-thailand/">All import corridors &rarr;</a>' +
    "</div>" +
    '<div class="ch">Exporting from Thailand</div>' +
    '<div class="chips">' +
    CORRIDOR_EXPORT.map(function (l) {
      return '<a class="chip chip-link" href="' + l.path + '">' + esc(l.name) + "</a>";
    }).join("") +
    '<a class="chip chip-link" href="/take-pet-out-of-thailand/">All export corridors &rarr;</a>' +
    "</div></div></section>";
}

function proseNetworkLine(topic) {
  var keys = NETWORK_BY_TOPIC[topic] || NETWORK_BY_TOPIC.general;
  if (!keys.length) return "";
  var names = keys.slice(0, 3).map(function (k) {
    var s = NETWORK_SITES[k];
    return s
      ? '<a href="' + s.url + '" target="_blank" rel="noopener noreferrer">' + esc(s.name) + "</a>"
      : "";
  }).filter(Boolean);
  if (!names.length) return "";
  return "<p>Planning the wider move? See " + names.join(", ") +
    " in the <a href=\"https://pattaya-authority.com/work/pattaya-pets/\" target=\"_blank\" rel=\"noopener noreferrer\">" +
    "Pattaya Authority</a> network.</p>";
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
  networkChipsHtml,
  networkDirectoryProse,
  proseNetworkLine,
  internalListHtml,
  networkListHtml,
  corridorChipsSection
};
