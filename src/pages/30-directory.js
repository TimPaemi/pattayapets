"use strict";
/* Directory generator: category hubs, area hubs and business listing pages. */

const { CATEGORIES, AREAS, BUSINESSES } = require("../data/businesses.js");
const SITE = "https://pattayapets.com";

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function bizUrl(b) { return "/" + b.category + "/" + b.slug + ".html"; }
function areaName(k) { return AREAS[k] ? AREAS[k].name : "Pattaya"; }
function firstSentence(t) { var m = t.match(/^.*?[.](\s|$)/); return m ? m[0].trim() : t; }

const HUB_TITLE = {
  vets: "Vets in Pattaya — animal hospitals & 24-hour clinics",
  groomers: "Pet groomers in Pattaya — dog & cat grooming",
  boarding: "Pet boarding in Pattaya — hotels, kennels & daycare",
  "pet-shops": "Pet shops in Pattaya — pet food & supplies",
  trainers: "Dog trainers in Pattaya — obedience & behaviour help",
  "pet-relocation": "Pet relocation Thailand — import & export agents",
  "mobile-vets": "Mobile vets in Pattaya — home-visit veterinary care"
};

function verdictPending() {
  return '<div class="callout"><span class="verdict verdict-pending">Not yet reviewed</span>' +
    "<p style=\"margin-top:.6rem\">This is a verified <strong>facts page</strong>. " +
    "PattayaPets will publish an honest verdict &mdash; recommend, OK or avoid &mdash; " +
    "only after an anonymous visit, with the bill paid in full. Facts here are " +
    "compiled from public sources; please confirm current details with the business " +
    "before travelling.</p></div>";
}

function bizCard(b) {
  var areas = b.areas.length ? b.areas.map(areaName).join(", ") : "Serves all Thailand";
  return '<article class="biz-card"><div class="biz-top">' +
    "<div><h3><a href=\"" + bizUrl(b) + "\">" + esc(b.name) + "</a></h3>" +
    '<p class="biz-sub">' + esc(b.type) + " &middot; " + esc(areas) + "</p></div>" +
    (b.c24 ? '<span class="badge-24h">24 hr</span>' : "") +
    "</div><p>" + esc(firstSentence(b.summary)) + "</p>" +
    '<div class="biz-facts"><span class="verdict verdict-pending">Visit pending</span>' +
    (b.phone ? '<span class="chip">' + esc(b.phone) + "</span>" : "") +
    "</div></article>";
}

function factsTable(b) {
  var rows = [];
  rows.push(["Type", esc(b.type)]);
  rows.push(["Area", b.areas.length ? b.areas.map(function (k) {
    return '<a href="/area/' + k + '.html">' + esc(areaName(k)) + "</a>";
  }).join(", ") : "Serves all of Thailand"]);
  if (b.c24) rows.push(["Hours", "<strong>Open 24 hours</strong>"]);
  else rows.push(["Hours", b.hours ? esc(b.hours) : "<em>Being verified</em>"]);
  rows.push(["Address", b.address ? esc(b.address) : "<em>Being verified</em>"]);
  rows.push(["Phone", b.phone
    ? '<a href="tel:' + b.tel + '">' + esc(b.phone) + "</a>"
    : "<em>Being verified</em>"]);
  rows.push(["Website", b.website
    ? '<a href="' + b.website + '" target="_blank" rel="noopener nofollow">Official site</a>'
    : "<em>None found</em>"]);
  rows.push(["Languages", esc(b.languages)]);
  return '<div class="table-wrap"><table class="facts-table"><tbody>' +
    rows.map(function (r) {
      return "<tr><th>" + r[0] + "</th><td>" + r[1] + "</td></tr>";
    }).join("") +
    "</tbody></table></div>";
}

function bizSchema(b) {
  var cat = CATEGORIES[b.category];
  var s = {
    "@type": cat.schemaType,
    "@id": SITE + bizUrl(b) + "#business",
    name: b.name,
    url: SITE + bizUrl(b),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pattaya",
      addressRegion: "Chon Buri",
      addressCountry: "TH"
    },
    areaServed: { "@type": "City", name: "Pattaya" }
  };
  if (b.address) s.address.streetAddress = b.address;
  if (b.tel) s.telephone = b.tel;
  if (b.website) s.sameAs = [b.website];
  if (b.c24) s.openingHours = "Mo-Su 00:00-23:59";
  return s;
}

const pages = [];

/* ---- business listing pages ---- */
BUSINESSES.forEach(function (b) {
  var cat = CATEGORIES[b.category];
  var siblings = BUSINESSES.filter(function (x) {
    return x.category === b.category && x.slug !== b.slug;
  }).slice(0, 4);
  var primaryArea = b.areas[0];

  var body =
    '<section class="section"><div class="container"><div class="page-grid"><div>' +
    '<p class="eyebrow">' + esc(cat.name) + "</p>" +
    "<h1>" + esc(b.name) + "</h1>" +
    '<p class="biz-sub" style="font-size:1rem">' + esc(b.type) +
    (primaryArea ? " &middot; " + esc(areaName(primaryArea)) + ", Pattaya" : " &middot; serves all Thailand") +
    (b.c24 ? ' &middot; <strong style="color:var(--alert)">open 24 hours</strong>' : "") +
    "</p>" +
    verdictPending() +
    "<p class=\"lede\">" + esc(b.summary) + "</p>" +
    "<h2>The facts</h2>" +
    factsTable(b) +
    "<h2>Services</h2>" +
    '<div class="chips">' + b.services.map(function (s) {
      return '<span class="chip">' + esc(s) + "</span>";
    }).join("") + "</div>" +
    '<div class="callout callout-note"><h4>What our verdict will cover</h4>' +
    "<p>When PattayaPets visits, the verdict will describe the <strong>business " +
    "experience only</strong>: how easy it is to book and communicate, whether " +
    "staff speak English, billing transparency, cleanliness and comfort. We do " +
    "not, and will not, rate veterinary medical quality.</p></div>" +
    (b.category === "vets" || b.category === "mobile-vets"
      ? '<div class="callout callout-emergency"><h4>In an emergency</h4><p>If your ' +
        "pet needs urgent help, do not wait for opening hours &mdash; see our list of " +
        '<a href="/pet-emergency/24-hour-vets-pattaya.html">24-hour vets in ' +
        "Pattaya</a>.</p></div>"
      : "") +
    '<div class="disclaimer-box"><strong>Editorial and informational only.</strong> ' +
    "PattayaPets is not a veterinary practice and does not give veterinary advice. " +
    "This listing describes a business, not medical quality. Always consult a " +
    "qualified veterinarian.</div>" +
    '<p class="updated">Facts compiled 21 May 2026</p>' +
    "</div>" +
    /* sidebar */
    '<aside class="sidebar"><div class="card"><h4>More ' + esc(cat.name.toLowerCase()) +
    "</h4><ul class=\"toc\">" +
    siblings.map(function (s) {
      return '<li><a href="' + bizUrl(s) + '">' + esc(s.name) + "</a></li>";
    }).join("") +
    '</ul><p style="margin:.8rem 0 0"><a href="/' + cat.slug + '/">All ' +
    esc(cat.name.toLowerCase()) + " &rarr;</a></p>" +
    (primaryArea
      ? '<hr><h4>In this area</h4><p><a href="/area/' + primaryArea + '.html">All pet ' +
        "services in " + esc(areaName(primaryArea)) + " &rarr;</a></p>"
      : "") +
    "</div></aside>" +
    "</div></div></section>";

  pages.push({
    path: bizUrl(b),
    title: b.name + " | " + b.type + " | PattayaPets",
    ogTitle: b.name + " — " + b.type + " in Pattaya",
    description: firstSentence(b.summary) + " Verified facts page; verdict pending.",
    crumb: b.name,
    breadcrumbs: [
      { name: "Directory", path: "/directory.html" },
      { name: cat.name, path: "/" + cat.slug + "/" }
    ],
    updated: "2026-05-21",
    schema: [bizSchema(b)],
    body: body
  });
});

/* ---- category hub pages ---- */
Object.keys(CATEGORIES).forEach(function (key) {
  var cat = CATEGORIES[key];
  var list = BUSINESSES.filter(function (b) { return b.category === key; });
  var areaKeys = Object.keys(AREAS).filter(function (ak) {
    return list.some(function (b) { return b.areas.indexOf(ak) !== -1; });
  });

  var body =
    '<section class="section"><div class="container">' +
    '<p class="eyebrow">Directory</p>' +
    "<h1>" + esc(HUB_TITLE[key]) + "</h1>" +
    '<p class="lede">' + esc(cat.intro) + "</p>";

  if (key === "vets") {
    body += '<div class="callout callout-emergency"><h4>Need a vet right now?</h4>' +
      "<p>For urgent, after-hours help see " +
      '<a href="/pet-emergency/24-hour-vets-pattaya.html">24-hour vets in ' +
      "Pattaya</a>. The clinics below marked <span class=\"badge-24h\">24 hr</span> " +
      "operate around the clock.</p></div>";
  }
  body += "</div></section>";

  if (list.length) {
    body += '<section class="section section-tint"><div class="container">' +
      '<div class="section-head"><h2>' + list.length + " listed " +
      (list.length === 1 ? cat.one : cat.one + "s") + "</h2>" +
      "<p>Every listing is a verified facts page. Verdicts follow an anonymous " +
      "visit.</p></div>" +
      '<div class="grid grid-2">' + list.map(bizCard).join("") + "</div>";
    if (areaKeys.length) {
      body += '<div class="section-head" style="margin-top:2rem"><h2>Browse by area</h2></div>' +
        '<div class="chips">' + areaKeys.map(function (ak) {
          return '<a class="chip chip-link" href="/area/' + ak + '.html">' +
            esc(AREAS[ak].name) + "</a>";
        }).join("") + "</div>";
    }
    body += "</div></section>";
  } else {
    body += '<section class="section section-tint"><div class="container">' +
      '<div class="callout callout-note"><h4>Listings are being added</h4>' +
      "<p>PattayaPets is verifying " + esc(cat.one) + "s in Pattaya before " +
      "publishing them &mdash; we list a business only once its facts are " +
      "confirmed. In the meantime, see the " +
      '<a href="/directory.html">full directory</a> or the ' +
      '<a href="/vets/">vets and animal hospitals</a>, several of which also ' +
      "offer related services.</p></div></div></section>";
  }

  body += '<section class="section"><div class="container">' +
    '<div class="disclaimer-box"><strong>Editorial and informational only.</strong> ' +
    "Listings describe the business experience, not veterinary medical quality. " +
    "Always consult a qualified veterinarian.</div></div></section>";

  pages.push({
    path: "/" + cat.slug + "/",
    title: HUB_TITLE[key] + " | PattayaPets",
    ogTitle: HUB_TITLE[key],
    description: cat.intro.slice(0, 155),
    crumb: cat.name,
    breadcrumbs: [{ name: "Directory", path: "/directory.html" }],
    updated: "2026-05-21",
    body: body
  });
});

/* ---- area hub pages ---- */
Object.keys(AREAS).forEach(function (key) {
  var area = AREAS[key];
  var list = BUSINESSES.filter(function (b) { return b.areas.indexOf(key) !== -1; });

  var body =
    '<section class="section"><div class="container">' +
    '<p class="eyebrow">By area</p>' +
    "<h1>Pet services in " + esc(area.name) + ", Pattaya</h1>" +
    '<p class="lede">' + esc(area.blurb) + " Below are the pet businesses " +
    "PattayaPets currently lists in " + esc(area.name) + ".</p></div></section>";

  if (list.length) {
    body += '<section class="section section-tint"><div class="container">';
    Object.keys(CATEGORIES).forEach(function (ck) {
      var inCat = list.filter(function (b) { return b.category === ck; });
      if (!inCat.length) return;
      body += '<div class="section-head" style="margin-top:1.4rem"><h2>' +
        esc(CATEGORIES[ck].name) + "</h2></div>" +
        '<div class="grid grid-2">' + inCat.map(bizCard).join("") + "</div>";
    });
    body += "</div></section>";
  } else {
    body += '<section class="section section-tint"><div class="container">' +
      '<div class="callout callout-note"><h4>No listings here yet</h4>' +
      "<p>PattayaPets does not yet list a pet business in " + esc(area.name) +
      ". We add a listing only once its facts are verified. Try the " +
      '<a href="/directory.html">full directory</a>, or browse ' +
      '<a href="/vets/">vets</a> and <a href="/groomers/">groomers</a> ' +
      "across Pattaya &mdash; many serve customers from " + esc(area.name) +
      ".</p></div></div></section>";
  }

  body += '<section class="section"><div class="container">' +
    '<div class="section-head"><h2>Every category</h2></div><div class="chips">' +
    Object.keys(CATEGORIES).map(function (ck) {
      return '<a class="chip chip-link" href="/' + ck + '/">' +
        esc(CATEGORIES[ck].name) + "</a>";
    }).join("") + "</div>" +
    '<div class="disclaimer-box"><strong>Editorial and informational only.</strong> ' +
    "Always consult a qualified veterinarian for your pet&rsquo;s health.</div>" +
    "</div></section>";

  pages.push({
    path: "/area/" + key + ".html",
    title: "Pet services in " + area.name + ", Pattaya — vets, groomers & more | PattayaPets",
    ogTitle: "Pet services in " + area.name + ", Pattaya",
    description: "Vets, groomers, pet shops and other pet services in " + area.name +
      ", Pattaya. " + area.blurb,
    crumb: area.name,
    breadcrumbs: [{ name: "Directory", path: "/directory.html" }],
    updated: "2026-05-21",
    body: body
  });
});

module.exports = pages;
