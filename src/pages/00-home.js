"use strict";
/* Home page */

const ICON = {
  vet: '<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/><circle cx="12" cy="12" r="9"/></svg>',
  groom: '<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.1 8.1 20 20M8.1 15.9 20 4"/></svg>',
  board: '<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-5h4v5"/></svg>',
  shop: '<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2 3 7v1a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0V7l-3-5z"/><path d="M5 12v9h14v-9"/></svg>',
  train: '<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="13" r="3"/><path d="M12 13h6l3-3v6"/><path d="M9 10V5l5 2"/></svg>',
  move: '<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15.5 14 13V6.5a2 2 0 0 0-4 0V13l-7 2.5V18l7-2v4l-2 1.5V23l4-1 4 1v-1.5L17 20v-4l7 2z"/></svg>',
  mobile: '<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>'
};

function catCard(href, icon, tag, name, desc) {
  return '<a class="card" href="' + href + '">' + ICON[icon] +
    '<span class="card-tag">' + tag + '</span><h3>' + name + '</h3><p>' + desc + '</p>' +
    '<span class="card-meta">View ' + name.toLowerCase() + ' &rarr;</span></a>';
}

const { BUSINESSES, isPublishedBusiness } = require("../data/businesses.js");
const { areaTileHtml } = require("../area-tiles.js");
const { inPageLinkSection } = require("../linking.js");
const { htmlToText } = require("../html-text.js");
const VETS24 = BUSINESSES.filter(function (b) {
  return isPublishedBusiness(b) &&
    (b.category === "vets" || b.category === "mobile-vets") && b.c24;
});

function vet24Card(b) {
  return '<a class="card" href="/' + b.category + '/' + b.slug + '.html">' +
    '<span class="badge-24h badge-24h--standalone">Public 24-hour claim</span>' +
    '<h3>' + b.name + '</h3>' +
    '<p>' + b.type + '</p>' +
    '<span class="card-meta">View evidence record &rarr;</span></a>';
}

function areaTile(name, slug) {
  return areaTileHtml(name, slug, "Pet services in " + name);
}

function guideCard(href, tag, title, desc, cta) {
  return '<a class="card" href="' + href + '"><span class="card-tag">' + tag +
    "</span><h3>" + title + "</h3><p>" + desc + "</p>" +
    '<span class="card-meta">' + cta + " &rarr;</span></a>";
}

/* Curated homepage guides — full index on /guides.html */
const HOME_GUIDES_FEATURED = [
  ["/start-here.html", "New here", "Start here",
    "Emergency contacts, finding a vet, the climate and the essentials for new owners.",
    "Open the page"],
  ["/bring-pet-to-thailand/", "Flagship guide", "Bringing a pet to Thailand",
    "The current Thai DLD pathway, source-backed steps and route-specific checks.",
    "Read the guide"],
  ["/bring-pet-to-thailand/checklist.html", "Import", "Import checklist",
    "A printable step-by-step checklist for the whole move to Thailand.",
    "Open the checklist"],
  ["/take-pet-out-of-thailand/", "Moving on", "Taking a pet out of Thailand",
    "The Thai export process and destination-specific requirements from primary sources.",
    "Read the guide"],
  ["/take-pet-out-of-thailand/checklist.html", "Export", "Export checklist",
    "A printable step-by-step checklist for taking your pet out of Thailand.",
    "Open the checklist"],
  ["/pet-health-pattaya/", "Health", "Pet health in Pattaya",
    "General orientation, warning signs and when to contact a qualified veterinarian.",
    "Read the guide"],
  ["/dog-friendly-pattaya/", "Out &amp; about", "Dog-friendly Pattaya",
    "How to check current pet policies for beaches, venues, accommodation and housing.",
    "Read the guide"],
  ["/pet-emergency/24-hour-vets-pattaya.html", "Urgent", "24-hour vets in Pattaya",
    "Approved records with a current public 24-hour claim; always confirm before travelling.",
    "View the list"],
  ["/pet-emergency/", "Emergency", "Pet emergencies &amp; hazards",
    "Urgent-care orientation, contact routes and locally relevant hazards.",
    "Read the guide"],
  ["/owning-a-pet-in-pattaya/", "Day to day", "Owning a pet in Pattaya",
    "Costs, hot-climate care, pet-friendly housing and where to walk your dog.",
    "Read the guide"],
  ["/adopt-a-pet-pattaya/", "Adoption", "Adopt a pet in Pattaya",
    "Shelters, fostering and how to help street animals in and around the city.",
    "Read the guide"],
  ["/dogs/", "For dog owners", "The dog owner&rsquo;s hub",
    "Care, training, walks and health guides for dogs — all in one place.",
    "Open the hub"]
];

const HOME_GUIDES_MORE = [
  ["/bring-pet-to-thailand/import-permit-thailand-dld.html", "Import", "DLD import permit",
    "How to apply for the Thai import permit before your pet flies in.",
    "Read the guide"],
  ["/take-pet-out-of-thailand/export-permit-thailand-dld.html", "Export", "DLD export permit",
    "How to apply for the Thai export permit before your pet flies out.",
    "Read the guide"],
  ["/owning-a-pet-in-pattaya/hot-climate-pet-care.html", "Owning", "Hot-climate pet care",
    "Heat, walk timing and paw-pad safety — the everyday adjustment in Pattaya.",
    "Read the guide"],
  ["/owning-a-pet-in-pattaya/lost-pet-pattaya.html", "Owning", "If your pet goes missing",
    "Microchip, local groups and what to do in the first hours.",
    "Read the guide"],
  ["/cats/", "For cat owners", "The cat owner&rsquo;s hub",
    "Indoor living, health and care guides for cats in Pattaya.",
    "Open the hub"],
  ["/pet-insurance-thailand.html", "Money", "Pet insurance in Thailand",
    "How pet insurance works here, what it covers, and whether it is worth it.",
    "Read the guide"]
];

function homeGuideGrid(guides) {
  return guides.map(function (g) {
    return guideCard(g[0], g[1], g[2], g[3], g[4]);
  }).join("");
}

const HOME_GUIDE_MORE =
  '<details class="corridor-panel guide-topics-panel">' +
  '<summary class="corridor-panel__title">More guides by topic</summary>' +
  '<div class="corridor-panel__body"><p class="guide-topics">' +
  '<a href="/bring-pet-to-thailand/bring-a-dog-to-thailand.html">Bring a dog</a> &middot; ' +
  '<a href="/bring-pet-to-thailand/bring-a-cat-to-thailand.html">Bring a cat</a> &middot; ' +
  '<a href="/vets/english-speaking-vets-pattaya.html">English-speaking vets</a> &middot; ' +
  '<a href="/adopt-a-pet-pattaya/animal-shelters-pattaya.html">Animal shelters</a> &middot; ' +
  '<a href="/dog-friendly-pattaya/hotels.html">Pet-friendly hotels</a> &middot; ' +
  '<a href="/owning-a-pet-in-pattaya/bangkok-to-pattaya-with-pet.html">Bangkok to Pattaya</a> &middot; ' +
  '<a href="/bring-pet-to-thailand/microchip-requirements.html">Microchip</a> &middot; ' +
  '<a href="/bring-pet-to-thailand/rabies-vaccination-titer-test.html">Rabies &amp; titer</a> &middot; ' +
  '<a href="/bring-pet-to-thailand/thailand-pet-quarantine.html">Quarantine</a> &middot; ' +
  '<a href="/bring-pet-to-thailand/snub-nosed-breeds-flying.html">Snub-nosed flying</a> &middot; ' +
  '<a href="/take-pet-out-of-thailand/export-process.html">Export process</a> &middot; ' +
  '<a href="/bring-pet-to-thailand/from-uk.html">Import from UK</a> &middot; ' +
  '<a href="/bring-pet-to-thailand/from-uae.html">Import from UAE</a> &middot; ' +
  '<a href="/bring-pet-to-thailand/from-india.html">Import from India</a> &middot; ' +
  '<a href="/bring-pet-to-thailand/from-philippines.html">Import from Philippines</a> &middot; ' +
  '<a href="/bring-pet-to-thailand/from-china.html">Import from China</a> &middot; ' +
  '<a href="/bring-pet-to-thailand/from-south-africa.html">Import from South Africa</a> &middot; ' +
  '<a href="/bring-pet-to-thailand/from-italy.html">Import from Italy</a> &middot; ' +
  '<a href="/bring-pet-to-thailand/from-malaysia.html">Import from Malaysia</a> &middot; ' +
  '<a href="/bring-pet-to-thailand/from-south-korea.html">Import from South Korea</a> &middot; ' +
  '<a href="/take-pet-out-of-thailand/to-uk.html">Export to UK</a> &middot; ' +
  '<a href="/take-pet-out-of-thailand/to-eu.html">Export to EU</a> &middot; ' +
  '<a href="/take-pet-out-of-thailand/to-india.html">Export to India</a> &middot; ' +
  '<a href="/take-pet-out-of-thailand/to-china.html">Export to China</a> &middot; ' +
  '<a href="/take-pet-out-of-thailand/to-philippines.html">Export to Philippines</a> &middot; ' +
  '<a href="/take-pet-out-of-thailand/to-japan.html">Export to Japan</a> &middot; ' +
  '<a href="/pet-relocation/">Relocation agents</a> &middot; ' +
  '<a href="/owning-a-pet-in-pattaya/microchipping-your-pet.html">Microchipping</a> &middot; ' +
  '<a href="/owning-a-pet-in-pattaya/travelling-in-thailand.html">Travelling in Thailand</a> &middot; ' +
  '<a href="/pet-health-pattaya/tick-borne-disease.html">Tick disease</a> &middot; ' +
  '<a href="/pet-emergency/heatstroke.html">Heatstroke</a> &middot; ' +
  '<a href="/pet-emergency/venomous-creatures.html">Venomous creatures</a> &middot; ' +
  '<a href="/owning-a-pet-in-pattaya/getting-to-the-vet.html">Getting to the vet</a> &middot; ' +
  '<a href="/cats/indoor-vs-outdoor-cats.html">Indoor vs outdoor cats</a> &middot; ' +
  '<a href="/adopt-a-pet-pattaya/hope-for-strays.html">Hope for Strays</a> &middot; ' +
  '<a href="/adopt-a-pet-pattaya/soi-dog-foundation.html">Soi Dog Foundation</a> &middot; ' +
  '<a href="/mobile-vets/">Mobile vets</a></p></div></details>';

const FAQ = [
  ['Is PattayaPets a vet?',
   'No. PattayaPets is an independent editorial publication about pet businesses and pet ownership in Pattaya. It is not a veterinary practice and gives no veterinary advice. For any medical concern, always consult a qualified veterinarian. In a pet emergency, contact a 24-hour animal hospital directly.'],
  ['How does PattayaPets review businesses?',
   'Business pages separate sourced facts from first-hand experience. No completed anonymous-visit record is currently published, so pages are labelled &lsquo;facts page &mdash; visit pending&rsquo; and carry no verdict. There are no paid placements, sponsored listings or affiliate links.'],
  ['Will PattayaPets publish business verdicts?',
   'Only after a documented first-hand visit. No completed visit record or verdict is currently published. A future verdict would cover the customer experience only, never veterinary medical quality.'],
  ['Who is PattayaPets for?',
   'Pet owners, newcomers and travellers in or around Pattaya who need local services, daily-care orientation, adoption information or pet-travel guidance. The guides use plain English and explain Thailand-specific context.'],
  ['Does it cost anything to use PattayaPets?',
   'No. PattayaPets is free to read, with no account, no paywall and no advertising. It is funded and published by TIMPAEMI CO., LTD.'],
  ['How can I find pet services near me?',
   'Use the directory&rsquo;s area filters to browse services by neighbourhood. Each listing provides the available contact details, services and location facts.']
];

const body =
  '<section class="hero"><div class="container"><div class="hero-grid">' +
    '<div>' +
      '<p class="eyebrow">Independent &middot; Pattaya, Thailand</p>' +
      '<h1>Pet care and relocation in Pattaya, clearly explained</h1>' +
      '<p class="lede">A source-led resource for pet owners in and around Pattaya &mdash; ' +
      'an evidence-status directory of local services, plus plain-English ' +
      'guides to pet travel, checking pet-friendly places, and what to do in an ' +
      'emergency.</p>' +
      '<div class="btn-row">' +
        '<a class="btn btn-primary" href="/directory.html">Browse the directory</a>' +
        '<a class="btn btn-ghost" href="/start-here.html">New here? Start here</a>' +
      '</div>' +
    '</div>' +
    '<aside class="hero-card">' +
      '<h2>Pet emergency in Pattaya?</h2>' +
      '<p>If your pet is badly hurt or unwell, call urgent veterinary care now. ' +
      'The emergency page shows approved records with a public 24-hour claim; ' +
      'confirm availability before travelling.</p>' +
      '<div class="btn-row home-emergency-actions">' +
      '<a class="btn btn-alert" href="/pet-emergency/24-hour-vets-pattaya.html">24-hour vets in Pattaya</a>' +
      '</div>' +
      '<p class="notice home-disclaimer">Editorial only &mdash; not veterinary advice. Confirm availability before travelling.</p>' +
    '</aside>' +
  '</div></div></section>' +

  '<section class="section home-quick-section"><div class="container">' +
    '<div class="corridor-quick-bar corridor-quick-bar--sticky btn-row home-quick-bar" role="navigation" aria-label="Quick links">' +
    '<a class="btn btn-primary" href="/vets/">Vets</a>' +
    '<a class="btn btn-ghost" href="/directory.html">Directory</a>' +
    '<a class="btn btn-ghost" href="/guides.html">Guides</a>' +
    '<a class="btn btn-alert" href="/pet-emergency/24-hour-vets-pattaya.html">24-hour vets</a>' +
    '<a class="btn btn-ghost" href="/bring-pet-to-thailand/">Import guide</a></div></div></section>' +

  '<section class="section"><div class="container">' +
    '<div class="section-head"><p class="eyebrow">Pet emergency</p>' +
    '<h2>Urgent-care records with public 24-hour claims</h2>' +
    '<p>These approved records carry a current public claim of 24-hour service. ' +
    'Availability can change: call the provider before travelling whenever circumstances allow.</p></div>' +
    '<div class="grid grid-4">' + VETS24.map(vet24Card).join('') + '</div>' +
    '<div class="btn-row"><a class="btn btn-ghost" href="/pet-emergency/">All emergency vets, first-aid &amp; hazards &rarr;</a></div>' +
  '</div></section>' +

  '<!--__RECENT_UPDATES__-->' +

  '<section class="section section-tint"><div class="container">' +
    '<div class="section-head"><p class="eyebrow">The editorial method</p>' +
    '<h2>How this publication earns trust</h2>' +
    '<p>Each consequential claim should lead to a dated source. Business pages state ' +
    'what is verified, what remains unknown and whether a first-hand visit exists.</p>' +
    '</div>' +
    '<div class="grid grid-4">' +
      '<div><h3>Sources beside claims</h3><p>Regulated rules and changing facts link to the authority or business that supports them.</p></div>' +
      '<div><h3>Visit status is explicit</h3><p>No completed anonymous-visit record is published yet, so no page carries a verdict.</p></div>' +
      '<div><h3>Zero paid placements</h3><p>No sponsored listings, no affiliate links, no advertising. Ever.</p></div>' +
      '<div><h3>Corrections stay visible</h3><p>Material corrections are dated and explained on the public corrections page.</p></div>' +
    '</div>' +
    '<div class="btn-row"><a class="btn btn-ghost" href="/standards.html">Read our full editorial standards &rarr;</a></div>' +
  '</div></section>' +

  '<section class="section"><div class="container">' +
    '<div class="section-head"><p class="eyebrow">The directory</p>' +
    '<h2>Find pet care in Pattaya</h2>' +
    '<p>Seven categories of pet business, each filterable by area. Every listing states ' +
    'its evidence status; unknown or unverified details are labelled instead of inferred. ' +
    'No listing has a verdict unless a documented first-hand visit exists.</p></div>' +
    '<div class="grid grid-3">' +
      catCard('/vets/', 'vet', 'Health', 'Vets &amp; animal hospitals',
        'General clinics, animal hospitals and 24-hour emergency care across Pattaya.') +
      catCard('/groomers/', 'groom', 'Grooming', 'Pet groomers',
        'Dog and cat grooming salons &mdash; baths, clips, de-shedding and nail care.') +
      catCard('/boarding/', 'board', 'Boarding', 'Boarding &amp; daycare',
        'Pet hotels, kennels, catteries and daycare for when you travel or work.') +
      catCard('/pet-shops/', 'shop', 'Supplies', 'Pet shops',
        'Where to buy food, litter, toys and supplies &mdash; in person and nearby.') +
      catCard('/trainers/', 'train', 'Training', 'Dog trainers',
        'Obedience training and behaviour help from Pattaya-based trainers.') +
      catCard('/pet-relocation/', 'move', 'Relocation', 'Pet relocation agents',
        'Import and export specialists who handle permits, flights and paperwork.') +
      catCard('/mobile-vets/', 'mobile', 'At home', 'Mobile &amp; home-visit vets',
        'Vets who come to you &mdash; useful for nervous pets and multi-cat homes.') +
    '</div>' +
    '<div class="btn-row"><a class="btn btn-ghost" href="/directory.html">Browse the full directory &rarr;</a></div>' +
  '</div></section>' +

  '<section class="section section-tint"><div class="container">' +
    '<div class="section-head"><p class="eyebrow">By area</p>' +
    '<h2>Browse pet services by neighbourhood</h2>' +
    '<p>From Naklua in the north to Sattahip in the south &mdash; find what is near you.</p></div>' +
    '<div class="grid grid-4">' +
      areaTile('Naklua', 'naklua') +
      areaTile('Wongamat', 'wongamat') +
      areaTile('Central Pattaya', 'central-pattaya') +
      areaTile('Pratumnak', 'pratumnak') +
      areaTile('Jomtien', 'jomtien') +
      areaTile('Bang Saray', 'bang-saray') +
      areaTile('Sattahip', 'sattahip') +
      areaTile('Banglamung', 'banglamung') +
    '</div></div></section>' +

  '<section class="section"><div class="container">' +
    '<div class="section-head"><p class="eyebrow">Guides &amp; resources</p>' +
    '<h2>Answers to what Pattaya pet owners search for</h2>' +
    '<p>Twelve featured guides below, plus six more and quick links by topic. Every guide ' +
    'is date-stamped &mdash; the full index is on the <a href="/guides.html">guides page</a>.</p></div>' +
    '<div class="grid grid-4">' + homeGuideGrid(HOME_GUIDES_FEATURED) + "</div>" +
    '<details class="corridor-panel home-guides-panel">' +
    '<summary class="corridor-panel__title">Six more guides</summary>' +
    '<div class="corridor-panel__body"><div class="grid grid-4">' +
    homeGuideGrid(HOME_GUIDES_MORE) +
    "</div></div></details>" +
    HOME_GUIDE_MORE +
    '<div class="guide-filters dir-filters home-guide-filters">' +
    '<a class="chip chip-link" href="/guides.html?topic=import">Import</a>' +
    '<a class="chip chip-link" href="/guides.html?topic=export">Export</a>' +
    '<a class="chip chip-link" href="/guides.html?topic=emergency">Emergency</a>' +
    '<a class="chip chip-link" href="/guides.html?topic=owning">Owning</a>' +
    '<a class="chip chip-link" href="/guides.html?topic=health">Health</a>' +
    '<a class="chip chip-link" href="/guides.html?topic=adoption">Adoption</a>' +
    '<a class="chip chip-link" href="/guides.html?topic=start">Start here</a>' +
    "</div>" +
    '<div class="btn-row">' +
    '<a class="btn btn-ghost" href="/guides.html">See all guides &rarr;</a>' +
    '<a class="btn btn-ghost" href="/guides.html?topic=start">Orientation guides</a>' +
    '<a class="btn btn-ghost" href="/vets/?filter=24h">24-hour vets in directory</a></div>' +
  '</div></section>' +

  '<section class="section section-banyan"><div class="container">' +
    '<div class="section-head"><p class="eyebrow">New to Pattaya with a pet?</p>' +
    '<h2>Start with the essentials</h2>' +
    '<p>A short orientation page covering emergency contacts, finding a vet, the ' +
    'climate, and the first things every new pet owner in Pattaya should know.</p></div>' +
    '<div class="btn-row"><a class="btn btn-primary" href="/start-here.html">Open the Start Here page</a>' +
    '<a class="btn btn-ghost" href="/guides.html?topic=start">Orientation guides</a>' +
    '<a class="btn btn-ghost" href="/search.html">Search the whole site</a></div>' +
  '</div></section>' +
  inPageLinkSection("home") +

  '<section class="section"><div class="container">' +
    '<div class="section-head"><p class="eyebrow">Questions</p><h2>Frequently asked</h2></div>' +
    FAQ.map(function (f) {
      return '<details class="faq"><summary>' + f[0] + '</summary>' +
        '<div class="faq-body"><p>' + f[1] + '</p></div></details>';
    }).join('') +
    '<div class="disclaimer-box"><strong>Editorial and informational only.</strong> ' +
    'PattayaPets is not a veterinary practice and does not provide veterinary advice. ' +
    'Always consult a qualified veterinarian.</div>' +
  '</div></section>';

module.exports = [{
  path: "/",
  title: "PattayaPets | Pet Care, Local Services & Travel Guidance",
  description:
    "Pattaya pet directory and source-led guides to local services, daily care, adoption, " +
    "emergencies and pet-travel paperwork in Thailand.",
  updated: "2026-08-01",
  schema: [{
    "@type": "FAQPage",
    mainEntity: FAQ.map(function (f) {
      return {
        "@type": "Question",
        name: htmlToText(f[0]),
        acceptedAnswer: { "@type": "Answer", text: htmlToText(f[1]) }
      };
    })
  }],
  body: body
}];
