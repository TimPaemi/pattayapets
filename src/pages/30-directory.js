"use strict";
/* Directory generator: category hubs, area hubs and business listing pages. */

const { CATEGORIES, AREAS, BUSINESSES } = require("../data/businesses.js");
const SITE = "https://pattayapets.com";
const { AREA_GUIDE } = require("../data/areas-content.js");
const { HUB_GUIDE } = require("../data/hub-content.js");

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function bizUrl(b) { return "/" + b.category + "/" + b.slug + ".html"; }
function areaName(k) { return AREAS[k] ? AREAS[k].name : "Pattaya"; }
function firstSentence(t) { var m = t.match(/^.*?[.](\s|$)/); return m ? m[0].trim() : t; }

const HUB_TITLE = {
  vets: "Vets & animal hospitals in Pattaya",
  groomers: "Dog & cat groomers in Pattaya",
  boarding: "Pet boarding & kennels in Pattaya",
  "pet-shops": "Pet shops in Pattaya",
  trainers: "Dog trainers in Pattaya",
  "pet-relocation": "Pet relocation agents in Thailand",
  "mobile-vets": "Mobile & home-visit vets in Pattaya"
};

function clampDesc(t) {
  t = String(t == null ? "" : t).replace(/\s+/g, " ").trim();
  if (t.length <= 158) return t;
  var win = t.slice(0, 158);
  var dot = win.lastIndexOf(". ");
  if (dot >= 60) return win.slice(0, dot + 1);
  var sp = win.lastIndexOf(" ");
  return (sp > 60 ? win.slice(0, sp) : win).replace(/[ ,;:]+$/, "") + "...";
}

const MOBILE_VETS_INTRO =
  '<section class="section"><div class="container"><div class="prose">' +
  '<h2>What a mobile vet does</h2>' +
  '<p>A mobile or home-visit vet comes to you, examining and treating your pet ' +
  'in your own home rather than at a clinic. For the right situations that can ' +
  'be calmer for the animal and far easier for the owner &mdash; no carrier, no ' +
  'car journey, no stressful waiting room.</p>' +
  '<h2>When a home visit makes sense</h2>' +
  '<p>Home visits suit routine care such as vaccinations, health checks and ' +
  'parasite prevention; pets that find the carrier or the clinic genuinely ' +
  'distressing; households with several pets, where transporting everyone is a ' +
  'struggle; owners without a car or an easy way to travel; and gentle, ' +
  'unhurried end-of-life care in familiar surroundings.</p>' +
  '<h2>What a home visit cannot replace</h2>' +
  '<p>A mobile vet carries only what fits in a vehicle. Anything that needs an ' +
  'X-ray, a laboratory, surgery, hospitalisation or intensive monitoring still ' +
  'means a clinic or a full animal hospital. In a genuine emergency, do not ' +
  'wait for a home visit &mdash; go straight to a ' +
  '<a href="/pet-emergency/24-hour-vets-pattaya.html">24-hour animal hospital</a>. ' +
  'A home-visit vet works best as a complement to a regular clinic, not a ' +
  'replacement for one.</p>' +
  '<h2>Mobile vets in Pattaya</h2>' +
  '<p>Some Pattaya clinics offer home visits alongside their clinic work, and a ' +
  'smaller number focus on mobile care. Coverage area, availability and fees ' +
  'vary, so confirm the details directly. PattayaPets will list a mobile vet as ' +
  'a verified facts page, and publish an honest verdict only after an anonymous ' +
  'visit with the bill paid in full. In the meantime, see ' +
  '<a href="/owning-a-pet-in-pattaya/getting-to-the-vet.html">getting your pet ' +
  'to the vet</a> and the full <a href="/vets/">vets directory</a>.</p>' +
  '</div></div></section>';

const VERDICT_LABELS = { recommend: "Recommend", ok: "OK", avoid: "Avoid" };

function fmtDate(iso) {
  var p = String(iso || "").split("-");
  if (p.length !== 3) return iso;
  var months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
  return parseInt(p[2], 10) + " " + months[parseInt(p[1], 10) - 1] + " " + p[0];
}

function verdictPending() {
  return '<div class="callout"><span class="verdict verdict-pending">Not yet reviewed</span>' +
    "<p style=\"margin-top:.6rem\">This is a verified <strong>facts page</strong>. " +
    "PattayaPets will publish an honest verdict &mdash; recommend, OK or avoid &mdash; " +
    "only after an anonymous visit, with the bill paid in full. Facts here are " +
    "compiled from public sources; please confirm current details with the business " +
    "before travelling.</p></div>";
}

function verdictBlock(b) {
  if (b.verdict && b.review) {
    var label = VERDICT_LABELS[b.verdict] || b.verdict;
    return '<div class="callout"><span class="verdict verdict-' + esc(b.verdict) + '">' +
      esc(label) + "</span>" +
      '<p style="margin-top:.6rem">' + esc(b.review) + "</p>" +
      (b.reviewed ? '<p class="updated" style="margin-top:.8rem">Reviewed ' +
        fmtDate(b.reviewed) + "</p>" : "") +
      "</div>";
  }
  return verdictPending();
}

function verdictBadge(b) {
  if (b.verdict && b.review) {
    var label = VERDICT_LABELS[b.verdict] || b.verdict;
    return '<span class="verdict verdict-' + esc(b.verdict) + '">' + esc(label) + "</span>";
  }
  return '<span class="verdict verdict-pending">Not yet reviewed</span>';
}

function bizCard(b) {
  var areas = b.areas.length ? b.areas.map(areaName).join(", ") : "Serves all Thailand";
  return '<article class="biz-card"><div class="biz-top">' +
    "<div><h3><a href=\"" + bizUrl(b) + "\">" + esc(b.name) + "</a></h3>" +
    '<p class="biz-sub">' + esc(b.type) + " &middot; " + esc(areas) + "</p></div>" +
    (b.c24 ? '<span class="badge-24h">24 hr</span>' : "") +
    "</div><p>" + esc(firstSentence(b.summary)) + "</p>" +
    '<div class="biz-facts">' + verdictBadge(b) +
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
  else if (b.hours) rows.push(["Hours", esc(b.hours)]);
  if (b.address) rows.push(["Address", esc(b.address)]);
  if (b.phone) rows.push(["Phone", '<a href="tel:' + b.tel + '">' + esc(b.phone) + "</a>"]);
  if (b.website) rows.push(["Website",
    '<a href="' + b.website + '" target="_blank" rel="noopener nofollow">Official site</a>']);
  rows.push(["Languages", esc(b.languages)]);
  return '<div class="table-wrap"><table class="facts-table"><tbody>' +
    rows.map(function (r) {
      return "<tr><th scope=\"row\">" + r[0] + "</th><td>" + r[1] + "</td></tr>";
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
    verdictBlock(b) +
    "<p class=\"lede\">" + esc(b.summary) + "</p>" +
    "<h2>The facts</h2>" +
    factsTable(b) +
    "<h2>Services</h2>" +
    '<div class="chips">' + b.services.map(function (s) {
      return '<span class="chip">' + esc(s) + "</span>";
    }).join("") + "</div>" +
    '<div class="callout callout-note"><div class="ch">What our verdict will cover</div>' +
    "<p>When PattayaPets visits, the verdict will describe the <strong>business " +
    "experience only</strong>: how easy it is to book and communicate, whether " +
    "staff speak English, billing transparency, cleanliness and comfort. We do " +
    "not, and will not, rate veterinary medical quality.</p></div>" +
    (b.category === "vets" || b.category === "mobile-vets"
      ? '<div class="callout callout-emergency"><div class="ch">In an emergency</div><p>If your ' +
        "pet needs urgent help, do not wait for opening hours &mdash; see our list of " +
        '<a href="/pet-emergency/24-hour-vets-pattaya.html">24-hour vets in ' +
        "Pattaya</a>.</p></div>"
      : "") +
    '<div class="disclaimer-box"><strong>Editorial and informational only.</strong> ' +
    "PattayaPets is not a veterinary practice and does not give veterinary advice. " +
    "This listing describes a business, not medical quality. Always consult a " +
    "qualified veterinarian.</div>" +
    '<p class="updated">' + (b.reviewed ? "Reviewed " + fmtDate(b.reviewed) :
      "Facts compiled 27 May 2026") + "</p>" +
    "</div>" +
    '<aside class="sidebar"><div class="card"><div class="ch">More ' + esc(cat.name.toLowerCase()) +
    "</div><ul class=\"toc\">" +
    siblings.map(function (s) {
      return '<li><a href="' + bizUrl(s) + '">' + esc(s.name) + "</a></li>";
    }).join("") +
    '</ul><p style="margin:.8rem 0 0"><a href="/' + cat.slug + '/">All ' +
    esc(cat.name.toLowerCase()) + " &rarr;</a></p>" +
    (primaryArea
      ? '<hr><div class="ch">In this area</div><p><a href="/area/' + primaryArea + '.html">All pet ' +
        "services in " + esc(areaName(primaryArea)) + " &rarr;</a></p>"
      : "") +
    "</div></aside>" +
    "</div></div></section>";

  pages.push({
    path: bizUrl(b),
    title: b.name + " | PattayaPets",
    ogTitle: b.name + " - " + b.type + " in Pattaya",
    description: clampDesc(firstSentence(b.summary)),
    crumb: b.name,
    breadcrumbs: [
      { name: "Directory", path: "/directory.html" },
      { name: cat.name, path: "/" + cat.slug + "/" }
    ],
    updated: "2026-05-27",
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
    body += '<div class="callout callout-emergency"><div class="ch">Need a vet right now?</div>' +
      "<p>For urgent, after-hours help see " +
      '<a href="/pet-emergency/24-hour-vets-pattaya.html">24-hour vets in ' +
      "Pattaya</a>. The clinics below marked <span class=\"badge-24h\">24 hr</span> " +
      "operate around the clock.</p></div>";
  }
  body += "</div></section>";

  if (key === "mobile-vets") { body += MOBILE_VETS_INTRO; }

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
      '<div class="callout callout-note"><div class="ch">Listings are being added</div>' +
      "<p>PattayaPets is verifying " + esc(cat.one) + "s in Pattaya before " +
      "publishing them &mdash; we list a business only once its facts are " +
      "confirmed. In the meantime, see the " +
      '<a href="/directory.html">full directory</a> or the ' +
      '<a href="/vets/">vets and animal hospitals</a>, several of which also ' +
      "offer related services.</p></div></div></section>";
  }

  if (HUB_GUIDE[key]) body += HUB_GUIDE[key];

  body += '<section class="section"><div class="container">' +
    '<div class="disclaimer-box"><strong>Editorial and informational only.</strong> ' +
    "Listings describe the business experience, not veterinary medical quality. " +
    "Always consult a qualified veterinarian.</div></div></section>";

  pages.push({
    path: "/" + cat.slug + "/",
    title: HUB_TITLE[key] + " | PattayaPets",
    ogTitle: HUB_TITLE[key],
    description: clampDesc(cat.intro),
    crumb: cat.name,
    breadcrumbs: [{ name: "Directory", path: "/directory.html" }],
    updated: "2026-05-27",
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

  if (AREA_GUIDE[key]) {
    body += '<section class="section"><div class="container">' +
      '<div class="prose">' + AREA_GUIDE[key] + "</div></div></section>";
  }

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
      '<div class="callout callout-note"><div class="ch">No listings here yet</div>' +
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
    title: "Pet services in " + area.name + ", Pattaya | PattayaPets",
    ogTitle: "Pet services in " + area.name + ", Pattaya",
    description: "Vets, groomers, pet shops and other pet services in " + area.name +
      ", Pattaya. " + area.blurb,
    crumb: area.name,
    breadcrumbs: [{ name: "Directory", path: "/directory.html" }],
    updated: "2026-05-27",
    body: body
  });
});

module.exports = pages;
