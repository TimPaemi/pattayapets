"use strict";
/* Home page */

const ICON = {
  vet: '<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/><circle cx="12" cy="12" r="9"/></svg>',
  groom: '<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.1 8.1 20 20M8.1 15.9 20 4"/></svg>',
  board: '<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-5h4v5"/></svg>',
  shop: '<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2 3 7v1a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0V7l-3-5z"/><path d="M5 12v9h14v-9"/></svg>',
  train: '<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="13" r="3"/><path d="M12 13h6l3-3v6"/><path d="M9 10V5l5 2"/></svg>',
  move: '<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15.5 14 13V6.5a2 2 0 0 0-4 0V13l-7 2.5V18l7-2v4l-2 1.5V23l4-1 4 1v-1.5L17 20v-4l7 2z"/></svg>',
  mobile: '<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 13l2-6h11l3 4h2v5h-3"/><path d="M6 18h7"/><circle cx="6.5" cy="18" r="2"/><circle cx="16.5" cy="18" r="2"/></svg>'
};

function catCard(href, icon, tag, name, desc) {
  return '<a class="card" href="' + href + '">' + ICON[icon] +
    '<span class="card-tag">' + tag + '</span><h3>' + name + "</h3><p>" + desc + "</p>" +
    '<span class="card-meta">View ' + name.toLowerCase() + " &rarr;</span></a>";
}

const AREAS = [
  ["Naklua", "naklua"], ["Wongamat", "wongamat"], ["Central Pattaya", "central-pattaya"],
  ["Pratumnak", "pratumnak"], ["Jomtien", "jomtien"], ["Bang Saray", "bang-saray"],
  ["Sattahip", "sattahip"], ["Banglamung", "banglamung"]
];

const FAQ = [
  ["Is PattayaPets a vet?",
   "No. PattayaPets is an independent editorial publication about pet businesses and pet ownership in Pattaya. It is not a veterinary practice and gives no veterinary advice. For any medical concern, always consult a qualified veterinarian. In a pet emergency, contact a 24-hour animal hospital directly."],
  ["How does PattayaPets review businesses?",
   "The same way as the rest of the Pattaya Authority network: anonymous visits, with every bill paid in full. There are no paid placements, no sponsored listings and no affiliate links. Until a business has had a real anonymous visit, its page shows verified facts only and is marked &lsquo;not yet reviewed&rsquo;."],
  ["What does a verdict cover?",
   "Verdicts &mdash; recommend, OK or avoid &mdash; describe the business experience only: booking, communication, English-speaking staff, billing transparency, cleanliness and comfort. PattayaPets never verdicts on veterinary medical quality. That judgement belongs to qualified vets and regulators."],
  ["Who is PattayaPets for?",
   "Western expats and tourists in and around Pattaya who already have a pet, are planning to bring one to Thailand, or want to adopt one here. The guides are written in plain English with the assumption you may be new to Thailand."]
];

const body =
  '<section class="hero"><div class="container"><div class="hero-grid">' +
    "<div>" +
      '<p class="eyebrow">Independent &middot; Pattaya, Thailand</p>' +
      "<h1>Pets in Pattaya, honestly reviewed and clearly explained</h1>" +
      '<p class="lede">The complete resource for pet owners in and around Pattaya &mdash; ' +
      "an editorial directory of vets, groomers, boarding and more, plus plain-English " +
      "guides to bringing a pet to Thailand, dog-friendly places, and what to do in an " +
      "emergency.</p>" +
      '<div class="btn-row">' +
        '<a class="btn btn-primary" href="/directory.html">Browse the directory</a>' +
        '<a class="btn btn-ghost" href="/start-here.html">New here? Start here</a>' +
      "</div>" +
    "</div>" +
    '<aside class="hero-card">' +
      '<h2>Pet emergency in Pattaya?</h2>' +
      "<p>If your pet is badly hurt or unwell, go straight to a 24-hour animal hospital. " +
      "Our emergency page lists clinics that are open around the clock, with addresses " +
      "and phone numbers.</p>" +
      '<div class="btn-row" style="margin-top:.7rem">' +
      '<a class="btn btn-alert" href="/pet-emergency/24-hour-vets-pattaya.html">24-hour vets in Pattaya</a>' +
      "</div>" +
      '<p class="notice" style="margin:.9rem 0 0">Editorial only &mdash; not veterinary advice.</p>' +
    "</aside>" +
  "</div></div></section>" +

  '<section class="section section-tint"><div class="container">' +
    '<div class="grid grid-4">' +
      '<div><h3>Anonymous visits</h3><p class="notice">We visit as ordinary customers &mdash; no PR tours, no special treatment.</p></div>' +
      '<div><h3>Bills paid in full</h3><p class="notice">Every bill is paid from our own funds. Nobody pays to appear here.</p></div>' +
      '<div><h3>Zero paid placements</h3><p class="notice">No sponsored listings, no affiliate links, no advertising. Ever.</p></div>' +
      '<div><h3>A verdict, not advice</h3><p class="notice">We rate the business experience &mdash; never the veterinary medicine.</p></div>' +
    "</div></div></section>" +

  '<section class="section"><div class="container">' +
    '<div class="section-head"><p class="eyebrow">The directory</p>' +
    "<h2>Find pet care in Pattaya</h2>" +
    "<p>Seven categories of pet business, each filterable by area. Phase one publishes " +
    "verified facts &mdash; address, hours, services, languages &mdash; with honest " +
    "verdicts added after our anonymous visits.</p></div>" +
    '<div class="grid grid-3">' +
      catCard("/vets/", "vet", "Health", "Vets &amp; animal hospitals",
        "General clinics, animal hospitals and 24-hour emergency care across Pattaya.") +
      catCard("/groomers/", "groom", "Grooming", "Pet groomers",
        "Dog and cat grooming salons &mdash; baths, clips, de-shedding and nail care.") +
      catCard("/boarding/", "board", "Boarding", "Boarding &amp; daycare",
        "Pet hotels, kennels, catteries and daycare for when you travel or work.") +
      catCard("/pet-shops/", "shop", "Supplies", "Pet shops",
        "Where to buy food, litter, toys and supplies &mdash; in person and nearby.") +
      catCard("/trainers/", "train", "Training", "Dog trainers",
        "Obedience training and behaviour help from Pattaya-based trainers.") +
      catCard("/pet-relocation/", "move", "Relocation", "Pet relocation agents",
        "Import and export specialists who handle permits, flights and paperwork.") +
    "</div>" +
    '<div class="btn-row"><a class="btn btn-ghost" href="/mobile-vets/">Also: mobile &amp; home-visit vets &rarr;</a></div>' +
  "</div></section>" +

  '<section class="section section-tint"><div class="container">' +
    '<div class="section-head"><p class="eyebrow">By area</p>' +
    "<h2>Browse pet services by neighbourhood</h2>" +
    "<p>From Naklua in the north to Sattahip in the south &mdash; find what is near you.</p></div>" +
    '<div class="grid grid-4">' +
      AREAS.map(function (a) {
        return '<a class="tile" href="/area/' + a[1] + '.html">' +
          '<span class="tile-name">' + a[0] + "</span>" +
          '<span class="tile-count">Pet services in ' + a[0] + "</span></a>";
      }).join("") +
    "</div></div></section>" +

  '<section class="section"><div class="container">' +
    '<div class="section-head"><p class="eyebrow">Guides &amp; resources</p>' +
    "<h2>Answers to what Pattaya pet owners search for</h2>" +
    "<p>Plain-English guides, each one date-stamped and pointing you to the official " +
    "source to verify against.</p></div>" +
    '<div class="grid grid-3">' +
      '<a class="card" href="/bring-pet-to-thailand/"><span class="card-tag">Flagship guide</span>' +
        "<h3>Bringing a pet to Thailand</h3><p>The full import process &mdash; DLD permit, " +
        "microchip, rabies and titer test, health certificate, airlines and arrival.</p>" +
        '<span class="card-meta">Read the guide &rarr;</span></a>' +
      '<a class="card" href="/dog-friendly-pattaya/"><span class="card-tag">Out &amp; about</span>' +
        "<h3>Dog-friendly Pattaya</h3><p>Beaches, cafes, restaurants, hotels, condos and " +
        "parks that genuinely welcome dogs.</p>" +
        '<span class="card-meta">Read the guide &rarr;</span></a>' +
      '<a class="card" href="/pet-emergency/"><span class="card-tag">Emergency</span>' +
        "<h3>Pet emergencies &amp; hazards</h3><p>24-hour vets, first-aid steps, heatstroke, " +
        "ticks, snakes and street-dog encounters in a hot climate.</p>" +
        '<span class="card-meta">Read the guide &rarr;</span></a>' +
      '<a class="card" href="/owning-a-pet-in-pattaya/"><span class="card-tag">Day to day</span>' +
        "<h3>Owning a pet in Pattaya</h3><p>Costs, hot-climate care, pet-friendly housing " +
        "and where to walk your dog.</p>" +
        '<span class="card-meta">Read the guide &rarr;</span></a>' +
      '<a class="card" href="/adopt-a-pet-pattaya/"><span class="card-tag">Adoption</span>' +
        "<h3>Adopt a pet in Pattaya</h3><p>The shelters and rescue organisations in and " +
        "around Pattaya, and how adoption works.</p>" +
        '<span class="card-meta">Read the guide &rarr;</span></a>' +
      '<a class="card" href="/pet-insurance-thailand.html"><span class="card-tag">Money</span>' +
        "<h3>Pet insurance in Thailand</h3><p>How pet insurance works here, what it covers, " +
        "and whether it is worth it.</p>" +
        '<span class="card-meta">Read the guide &rarr;</span></a>' +
    "</div>" +
    '<div class="btn-row"><a class="btn btn-ghost" href="/guides.html">See all guides &rarr;</a></div>' +
  "</div></section>" +

  '<section class="section section-banyan"><div class="container">' +
    '<div class="section-head"><p class="eyebrow">New to Pattaya with a pet?</p>' +
    "<h2>Start with the essentials</h2>" +
    "<p>A short orientation page covering the emergency numbers, finding a vet, the " +
    "climate, and the first things every new pet owner in Pattaya should know.</p></div>" +
    '<div class="btn-row"><a class="btn btn-primary" href="/start-here.html">Open the Start Here page</a></div>' +
  "</div></section>" +

  '<section class="section"><div class="container">' +
    '<div class="section-head"><p class="eyebrow">Questions</p><h2>Frequently asked</h2></div>' +
    FAQ.map(function (f) {
      return '<details class="faq"><summary>' + f[0] + "</summary>" +
        '<div class="faq-body"><p>' + f[1] + "</p></div></details>";
    }).join("") +
    '<div class="disclaimer-box"><strong>Editorial and informational only.</strong> ' +
    "PattayaPets is not a veterinary practice and does not provide veterinary advice. " +
    "Always consult a qualified veterinarian.</div>" +
  "</div></section>";

module.exports = [{
  path: "/",
  title: "PattayaPets — The honest pet resource for Pattaya",
  ogTitle: "PattayaPets — The honest pet resource for Pattaya",
  description:
    "The independent editorial directory of Pattaya pet businesses — vets, groomers, " +
    "boarding, pet shops, trainers and relocation agents — plus plain-English guides " +
    "for pet owners. No paid placements.",
  updated: "2026-05-21",
  schema: [{
    "@type": "FAQPage",
    mainEntity: FAQ.map(function (f) {
      return {
        "@type": "Question",
        name: f[0].replace(/&[a-z]+;/g, ""),
        acceptedAnswer: { "@type": "Answer", text: f[1].replace(/&[a-z]+;/g, "") }
      };
    })
  }],
  body: body
}];
