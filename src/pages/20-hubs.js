"use strict";
/* Hub overview pages: Directory and Guides */

function card(href, tag, name, desc, cta) {
  return '<a class="card" href="' + href + '"><span class="card-tag">' + tag +
    "</span><h3>" + name + "</h3><p>" + desc + "</p>" +
    '<span class="card-meta">' + cta + " &rarr;</span></a>";
}

function guideCatFromHref(href) {
  if (href.indexOf("/bring-pet-to-thailand/") === 0) return "import";
  if (href.indexOf("/take-pet-out-of-thailand/") === 0) return "export";
  if (href.indexOf("/pet-emergency/") === 0) return "emergency";
  if (href.indexOf("/owning-a-pet-in-pattaya/") === 0) return "owning";
  if (href.indexOf("/pet-health-pattaya/") === 0) return "health";
  if (href.indexOf("/adopt-a-pet-pattaya/") === 0) return "adoption";
  if (href.indexOf("/dog-friendly-pattaya/") === 0) return "lifestyle";
  if (href.indexOf("/dogs/") === 0 || href.indexOf("/cats/") === 0) return "species";
  if (href === "/start-here.html") return "start";
  if (href.indexOf("/pet-insurance") === 0) return "insurance";
  if (href.indexOf("/trainers/") === 0 || href.indexOf("/mobile-vets/") === 0 ||
    href.indexOf("/pet-relocation/") === 0) return "services";
  return "other";
}

function guideCard(href, tag, name, desc, cta) {
  return '<a class="card guide-card" href="' + href + '" data-guide-cat="' +
    guideCatFromHref(href) + '"><span class="card-tag">' + tag +
    "</span><h3>" + name + "</h3><p>" + desc + "</p>" +
    '<span class="card-meta">' + cta + " &rarr;</span></a>";
}

function guideFilterChip(topic, label, active) {
  var href = topic === "all" ? "/guides.html" : "/guides.html?topic=" + topic;
  var cls = "chip chip-link guide-filter" + (active ? " is-active" : "");
  return '<a href="' + href + '" class="' + cls + '" data-guide-filter="' + topic + '">' +
    label + "</a>";
}

function guideFiltersPanel() {
  return '<details class="corridor-panel filter-panel">' +
    '<summary class="corridor-panel__title">Filter guides</summary>' +
    '<div class="corridor-panel__body">' + guideFiltersBar() + "</div></details>";
}

function guideFiltersBar() {
  var chips = guideFilterChip("all", "All", true) +
    guideFilterChip("start", "Start here") +
    guideFilterChip("import", "Import") +
    guideFilterChip("export", "Export") +
    guideFilterChip("emergency", "Emergency") +
    guideFilterChip("owning", "Owning") +
    guideFilterChip("health", "Health") +
    guideFilterChip("adoption", "Adoption") +
    guideFilterChip("lifestyle", "Out &amp; about") +
    guideFilterChip("species", "Dogs &amp; cats") +
    guideFilterChip("insurance", "Insurance") +
    guideFilterChip("services", "Services");
  return '<div class="guide-filters dir-filters" role="group" aria-label="Filter guides">' +
    chips + "</div>" +
    '<p class="dir-filter-status notice" id="guide-filter-status" role="status" tabindex="-1" hidden></p>';
}

const { BUSINESSES } = require("../data/businesses.js");
const { areaTileHtml } = require("../area-tiles.js");
const { inPageLinkSection } = require("../linking.js");

function areaTile(name, slug, blurb) {
  return areaTileHtml(name, slug, blurb);
}

const AREAS = [
  ["Naklua", "naklua", "The northern beach district above the city centre."],
  ["Wongamat", "wongamat", "Quiet upmarket beachfront north of Pattaya."],
  ["Central Pattaya", "central-pattaya", "The busy core, around Beach Road and Soi Buakhao."],
  ["Pratumnak", "pratumnak", "The leafy hill between Pattaya and Jomtien."],
  ["Jomtien", "jomtien", "The long beach suburb popular with families and expats."],
  ["Bang Saray", "bang-saray", "The relaxed fishing town south of Jomtien."],
  ["Sattahip", "sattahip", "The southern district towards the naval base."],
  ["Banglamung", "banglamung", "The wider district surrounding Pattaya city."]
];

const pages = [];

/* ---------------- Directory hub ---------------- */
pages.push({
  path: "/directory.html",
  title: "Vets in Pattaya | Groomers, Boarding & Pet Shops",
  ogTitle: "The Pattaya pet business directory",
  image: "/assets/img/og-vets.png",
  description:
    "The editorial directory of pet businesses in Pattaya - vets and animal hospitals, groomers, boarding, pet shops, dog trainers, relocation and mobile vets.",
  crumb: "Directory",
  breadcrumbs: [],
  updated: "2026-08-01",
  body:
    '<section class="section"><div class="container">' +
    '<div class="section-head"><p class="eyebrow">The directory</p>' +
    "<h1>The Pattaya pet business directory</h1>" +
    "<p class=\"lede\">Approved public facts for pet services relevant to Pattaya, " +
    "with evidence status and unresolved details shown clearly. No paid placement.</p></div>" +
    '<div class="corridor-quick-bar corridor-quick-bar--sticky btn-row" role="navigation" aria-label="Directory shortcuts">' +
    '<a class="btn btn-primary" href="/vets/">Vets</a>' +
    '<a class="btn btn-alert" href="/vets/?filter=24h">24-hour vets</a>' +
    '<a class="btn btn-ghost" href="/groomers/">Groomers</a>' +
    '<a class="btn btn-ghost" href="#browse-area">By area</a>' +
    '<a class="btn btn-ghost" href="/guides.html">Guides</a></div>' +
    '<div class="callout callout-note"><p>Listings are generated only from the ' +
    "approved business record. A page may show sourced public facts, unknown fields, " +
    "or a hold state; it must not imply that PattayaPets has visited or endorsed a " +
    'business. Read the method in our <a href="/standards.html">editorial ' +
    "standards</a>.</p></div>" +
    "</div></section>" +

    '<section class="section section-tint"><div class="container">' +
    '<div class="section-head"><h2>Browse by category</h2></div>' +
    '<div class="grid grid-3">' +
    card("/vets/", "Health", "Vets &amp; animal hospitals",
      "Approved clinic records, including public 24-hour service claims where supported.", "View vets") +
    '<a class="card" href="/vets/?filter=24h"><span class="card-tag">Urgent</span>' +
    "<h3>24-hour vets (directory)</h3>" +
    "<p>Filter the vets hub for approved records with a current public 24-hour claim; confirm before travelling.</p>" +
    '<span class="card-meta">View 24-hour listings &rarr;</span></a>' +
    card("/groomers/", "Grooming", "Pet groomers",
      "Dog and cat grooming across Pattaya &mdash; filter by area on the groomers hub.",
      "View groomers") +
    card("/boarding/", "Boarding", "Boarding &amp; daycare",
      "Pet hotels, kennels, catteries and daycare for travel and work days.", "View boarding") +
    card("/pet-shops/", "Supplies", "Pet shops",
      "Where to buy food, litter, toys and supplies in Pattaya.", "View pet shops") +
    card("/trainers/", "Training", "Dog trainers",
      "Obedience training and behaviour help from Pattaya-based trainers.", "View trainers") +
    card("/pet-relocation/", "Relocation", "Pet relocation agents",
      "Approved public service scopes and evidence status for relocation providers.", "View agents") +
    card("/mobile-vets/", "At home", "Mobile &amp; home-visit vets",
      "Vets who come to you &mdash; useful for nervous pets and multi-cat homes.", "View mobile vets") +
    "</div></div></section>" +

    '<section class="section" id="browse-area"><div class="container">' +
    '<div class="section-head"><h2>Browse by area</h2>' +
    "<p>Pattaya stretches a long way along the coast. Find pet services in your " +
    "part of the city.</p></div>" +
    '<div class="grid grid-4">' +
    AREAS.map(function (a) {
      return areaTile(a[0], a[1], a[2]);
    }).join("") +
    "</div>" +
    '<div class="disclaimer-box"><strong>Editorial and informational only.</strong> ' +
    "Listings describe the business experience, not veterinary medical quality. " +
    "Always consult a qualified veterinarian.</div>" +
    "</div></section>" +
    inPageLinkSection("directory") +

    '<section class="section"><div class="container">' +
    '<div class="section-head"><h2>Rescues &amp; adoption</h2>' +
    "<p>Established shelters and charities in and around Pattaya &mdash; each with " +
    "its own page for adoption, visiting and volunteering.</p></div>" +
    '<div class="grid grid-4">' +
    card("/adopt-a-pet-pattaya/hope-for-strays.html", "Adoption", "Hope for Strays",
      "Organisation record with current source links and evidence status.", "Open the page") +
    card("/adopt-a-pet-pattaya/soi-dog-foundation.html", "Adoption", "Soi Dog Foundation",
      "National charity with sterilisation and rehoming work in Pattaya.", "Open the page") +
    card("/adopt-a-pet-pattaya/animal-army-foundation.html", "Adoption", "Animal Army Foundation",
      "Organisation record with current source links and evidence status.", "Open the page") +
    card("/adopt-a-pet-pattaya/", "Adoption", "Shelters &amp; rescues guide",
      "Approved organisation records, fostering orientation and ways to help.", "View the hub") +
    "</div></div></section>" +

    '<section class="section section-tint"><div class="container">' +
    '<div class="section-head"><h2>Helpful guides</h2>' +
    "<p>Orientation for pet owners &mdash; not veterinary advice.</p></div>" +
    '<div class="grid grid-4">' +
    card("/pet-health-pattaya/", "Health", "Pet health in Pattaya",
      "Heartworm, ticks, skin problems and other tropical-climate risks.", "Open the guide") +
    card("/adopt-a-pet-pattaya/", "Adoption", "Adopt a pet in Pattaya",
      "Shelters, fostering and how to help street animals.", "Open the guide") +
    card("/bring-pet-to-thailand/", "Import", "Bringing a pet to Thailand",
      "The current DLD pathway, source-backed steps and route-specific checks.", "Open the guide") +
    card("/pet-emergency/", "Emergency", "Pet emergencies",
      "Urgent-care contacts, warning signs and locally relevant hazards.", "Open the guide") +
    "</div>" +
    '<div class="grid grid-4 hub-grid-spaced">' +
    card("/dog-friendly-pattaya/", "Out &amp; about", "Dog-friendly Pattaya",
      "How to verify current pet policies for beaches, venues and housing.", "Open the guide") +
    card("/pet-emergency/24-hour-vets-pattaya.html", "Urgent", "24-hour vets in Pattaya",
      "Approved records with a public 24-hour claim; confirm before travelling.", "View the list") +
    card("/owning-a-pet-in-pattaya/", "Day to day", "Owning a pet in Pattaya",
      "Costs, hot-climate care, pet-friendly housing and where to walk your dog.", "Open the guide") +
    card("/take-pet-out-of-thailand/export-process.html", "Export", "The export process",
      "The current DLD application, required examination, documents and departure checks.", "Open the guide") +
    "</div>" +
    '<div class="grid grid-4 hub-grid-spaced">' +
    card("/take-pet-out-of-thailand/", "Moving on", "Taking a pet out of Thailand",
      "The Thai export process and destination-specific primary-source guidance.", "Open the guide") +
    card("/start-here.html", "New here", "Start here",
      "A short orientation for new pet owners in Pattaya.", "Open the page") +
    card("/pet-insurance-thailand.html", "Money", "Pet insurance in Thailand",
      "How pet insurance works here and whether it is worth it.", "Open the guide") +
    card("/pet-relocation/", "Relocation", "Pet relocation agents",
      "Approved public service scopes and evidence status for relocation providers.", "View agents") +
    "</div>" +
    '<div class="grid grid-4 hub-grid-spaced">' +
    card("/dogs/", "Dog owners", "Dogs in Pattaya",
      "Care, training, walks and health guides for dogs.", "Open the hub") +
    card("/cats/", "Cat owners", "Cats in Pattaya",
      "Indoor living, health and care guides for cats.", "Open the hub") +
    card("/owning-a-pet-in-pattaya/microchipping-your-pet.html", "Owning", "Microchipping your pet",
      "Identification records, registry questions and keeping contact details current.", "Open the guide") +
    card("/owning-a-pet-in-pattaya/lost-pet-pattaya.html", "Owning", "Lost pet in Pattaya",
      "Microchip, local groups and what to do first.", "Open the guide") +
    "</div>" +
    '<div class="btn-row section-actions"><a class="btn btn-ghost" href="/guides.html">All guides &rarr;</a></div>' +
    "</div></section>"
});

/* ---------------- Guides hub ---------------- */
pages.push({
  path: "/guides.html",
  title: "Bring a Pet to Thailand | Pattaya Guides & Vets",
  ogTitle: "PattayaPets guides & resources",
  description:
    "Pattaya pet guides — bring a pet to Thailand, find a vet, emergencies, dog-friendly places, export, adoption, daily owning costs and local directories.",
  crumb: "Guides",
  breadcrumbs: [],
  updated: "2026-08-01",
  image: "/assets/img/og-guides.png",
  body:
    '<section class="section"><div class="container">' +
    '<div class="section-head"><p class="eyebrow">Guides &amp; resources</p>' +
    "<h1>PattayaPets guides</h1>" +
    "<p class=\"lede\">Plain-English orientation for pet owners in Pattaya. Pages carry " +
    "a reviewed date; regulated guidance identifies the primary evidence and remaining " +
    "route-specific checks.</p></div>" +
    '<div class="corridor-quick-bar corridor-quick-bar--sticky btn-row" role="navigation" aria-label="Guide shortcuts">' +
    '<a class="btn btn-primary" href="/start-here.html">Start here</a>' +
    '<a class="btn btn-ghost" href="/bring-pet-to-thailand/">Import</a>' +
    '<a class="btn btn-ghost" href="/take-pet-out-of-thailand/">Export</a>' +
    '<a class="btn btn-alert" href="/pet-emergency/">Emergency</a>' +
    '<a class="btn btn-ghost" href="/directory.html">Directory</a></div>' +
    "<h2>Browse the guides</h2>" +
    '<div class="filters-sticky">' + guideFiltersPanel() + "</div>" +
    '<div id="guide-listings" class="grid grid-3">' +
    guideCard("/start-here.html", "New here", "Start here",
      "A short orientation for new pet owners in Pattaya &mdash; emergency contacts, " +
      "finding a vet, the climate and the essentials.", "Open the page") +
    guideCard("/bring-pet-to-thailand/", "Flagship guide", "Bringing a pet to Thailand",
      "The current Thai DLD pathway, source-backed steps and route-specific checks.", "Open the guide") +
    guideCard("/bring-pet-to-thailand/checklist.html", "Import", "Import checklist",
      "A printable step-by-step checklist for the whole move to Thailand.",
      "Open the checklist") +
    guideCard("/take-pet-out-of-thailand/", "Moving on", "Taking a pet out of Thailand",
      "The Thai export process and destination-specific primary-source guidance.",
      "Open the guide") +
    guideCard("/take-pet-out-of-thailand/checklist.html", "Export", "Export checklist",
      "A printable step-by-step checklist for taking your pet out of Thailand.",
      "Open the checklist") +
    guideCard("/dog-friendly-pattaya/", "Out &amp; about", "Dog-friendly Pattaya",
      "How to check current pet policies for beaches, venues, accommodation and housing.",
      "Open the guide") +
    guideCard("/pet-emergency/", "Emergency", "Pet emergencies &amp; hazards",
      "Urgent-care contacts, warning signs and locally relevant hazards; not a treatment service.", "Open the guide") +
    guideCard("/pet-emergency/24-hour-vets-pattaya.html", "Urgent", "24-hour vets in Pattaya",
      "Approved records with a public 24-hour claim; confirm before travelling.",
      "View the list") +
    guideCard("/owning-a-pet-in-pattaya/", "Day to day", "Owning a pet in Pattaya",
      "Costs, hot-climate care, pet-friendly housing and where to walk your dog.",
      "Open the guide") +
    guideCard("/pet-health-pattaya/", "Health", "Pet health in Pattaya",
      "General health orientation, warning signs and when to contact a qualified veterinarian.", "Open the guide") +
    guideCard("/adopt-a-pet-pattaya/", "Adoption", "Adopt a pet in Pattaya",
      "The shelters and rescue organisations in and around Pattaya, and how " +
      "adoption works.", "Open the guide") +
    guideCard("/adopt-a-pet-pattaya/hope-for-strays.html", "Adoption", "Hope for Strays",
      "East Pattaya dog rescue shelter — adoption, visiting and volunteering.",
      "Open the page") +
    guideCard("/adopt-a-pet-pattaya/soi-dog-foundation.html", "Adoption", "Soi Dog Foundation",
      "An approved organisation record with its evidence status and current source links.",
      "Open the page") +
    guideCard("/adopt-a-pet-pattaya/animal-army-foundation.html", "Adoption", "Animal Army Foundation",
      "An approved organisation record with current sources and evidence status.",
      "Open the page") +
    guideCard("/adopt-a-pet-pattaya/dog-cat-rescue-pattaya.html", "Adoption", "Dog &amp; Cat Rescue Pattaya",
      "A Pattaya shelter rescuing dogs and helping the city&rsquo;s street cats.",
      "Open the page") +
    guideCard("/pet-insurance-thailand.html", "Money", "Pet insurance in Thailand",
      "Questions to ask about cover, exclusions, limits and current policy wording.",
      "Open the guide") +
    guideCard("/dogs/", "For dog owners", "The dog owner&rsquo;s hub",
      "Everything dog-specific in one place &mdash; care, training, walks and more.",
      "Open the hub") +
    guideCard("/cats/", "For cat owners", "The cat owner&rsquo;s hub",
      "Everything cat-specific in one place &mdash; care, vets and indoor living.",
      "Open the hub") +
    guideCard("/adopt-a-pet-pattaya/fostering.html", "Adoption", "Fostering a pet",
      "Give a rescue animal a temporary home while it waits for adoption.",
      "Open the guide") +
    guideCard("/adopt-a-pet-pattaya/how-to-help.html", "Adoption", "How to help street animals",
      "Donate, volunteer, foster and what to do for an injured animal.",
      "Open the guide") +
    guideCard("/owning-a-pet-in-pattaya/lost-pet-pattaya.html", "Owning", "If your pet goes missing",
      "A step-by-step plan for a lost dog or cat in Pattaya.",
      "Open the guide") +
    guideCard("/owning-a-pet-in-pattaya/hot-climate-pet-care.html", "Owning", "Hot-climate pet care",
      "The single biggest everyday adjustment for pets in Pattaya.",
      "Open the guide") +
    guideCard("/take-pet-out-of-thailand/export-permit-thailand-dld.html", "Export", "DLD export permit",
      "How to apply for the Thai export permit before your pet flies out.",
      "Open the guide") +
    guideCard("/owning-a-pet-in-pattaya/travelling-in-thailand.html", "Owning", "Travelling in Thailand",
      "Domestic flights, road trips and pet-friendly hotels with your pet.",
      "Open the guide") +
    guideCard("/bring-pet-to-thailand/import-permit-thailand-dld.html", "Import", "DLD import permit",
      "How to apply for the Thai import permit before your pet flies in.",
      "Open the guide") +
    guideCard("/bring-pet-to-thailand/rabies-vaccination-titer-test.html", "Import", "Rabies & titer test",
      "Rabies records, when a route requires a titre, and route-specific timing.",
      "Open the guide") +
    guideCard("/bring-pet-to-thailand/health-certificate.html", "Import", "Health certificate",
      "How to identify the certificate and endorsement required for the exact route.",
      "Open the guide") +
    guideCard("/bring-pet-to-thailand/microchip-requirements.html", "Import", "Microchip requirements",
      "What current Thai sources require for identification and matching records.",
      "Open the guide") +
    guideCard("/take-pet-out-of-thailand/export-process.html", "Export", "The export process",
      "The current DLD application, required examination, documents and departure checks.",
      "Open the guide") +
    guideCard("/mobile-vets/", "At home", "Mobile & home-visit vets",
      "Approved records that publicly advertise off-site service; confirm coverage and suitability.",
      "View mobile vets") +
    guideCard("/bring-pet-to-thailand/snub-nosed-breeds-flying.html", "Import", "Snub-nosed breeds & flying",
      "Health-risk orientation and current carrier acceptance checks for flat-faced breeds.",
      "Open the guide") +
    guideCard("/bring-pet-to-thailand/thailand-pet-quarantine.html", "Import", "Pet quarantine in Thailand",
      "What current Thai sources prove about arrival checks, and what remains route-specific.",
      "Open the guide") +
    guideCard("/bring-pet-to-thailand/u-tapao-airport-pets.html", "Import", "U-Tapao or Bangkok?",
      "The limited evidence for U-Tapao and the confirmations needed before booking.",
      "Open the guide") +
    guideCard("/bring-pet-to-thailand/from-uae.html", "Import", "Import from the UAE",
      "Current UAE authority and Thai DLD sources for the route.",
      "Open the guide") +
    guideCard("/bring-pet-to-thailand/from-uk.html", "Import", "Import from the UK",
      "Source-led Thai entry steps and separate planning for a possible UK return.",
      "Open the guide") +
    guideCard("/take-pet-out-of-thailand/to-uk.html", "Export", "Export to the UK",
      "Current Thai export and UK entry sources for the exact animal and route.",
      "Open the guide") +
    guideCard("/take-pet-out-of-thailand/to-eu.html", "Export", "Export to the EU",
      "Current Thai export and EU entry sources, including route-specific timing.",
      "Open the guide") +
    guideCard("/bring-pet-to-thailand/from-india.html", "Import", "Import from India",
      "Current Indian authority and Thai DLD sources for the route.",
      "Open the guide") +
    guideCard("/bring-pet-to-thailand/from-philippines.html", "Import", "Import from the Philippines",
      "BAI export paperwork and direct flights to Thailand.",
      "Open the guide") +
    guideCard("/bring-pet-to-thailand/from-china.html", "Import", "Import from China",
      "Chinese customs export and direct flights from major cities.",
      "Open the guide") +
    guideCard("/bring-pet-to-thailand/from-south-africa.html", "Import", "Import from South Africa",
      "Current South African authority and Thai DLD sources for the route.",
      "Open the guide") +
    guideCard("/take-pet-out-of-thailand/to-india.html", "Export", "Export to India",
      "AQCS import clearance when you leave Pattaya.",
      "Open the guide") +
    guideCard("/take-pet-out-of-thailand/to-philippines.html", "Export", "Export to the Philippines",
      "BAI import paperwork from Thailand.",
      "Open the guide") +
    guideCard("/take-pet-out-of-thailand/to-china.html", "Export", "Export to China",
      "Current Thai export and Chinese entry sources for the route.",
      "Open the guide") +
    guideCard("/take-pet-out-of-thailand/to-south-africa.html", "Export", "Export to South Africa",
      "Current Thai export and South African entry sources for the route.",
      "Open the guide") +
    guideCard("/pet-emergency/heatstroke.html", "Urgent", "Heatstroke",
      "Pattaya's number-one preventable pet emergency.",
      "Open the guide") +
    guideCard("/pet-emergency/choking.html", "Emergency", "If your pet is choking",
      "Recognising an airway blockage and acting fast.",
      "Open the guide") +
    guideCard("/pet-health-pattaya/heartworm.html", "Health", "Heartworm prevention",
      "Why year-round prevention matters in Pattaya.",
      "Open the guide") +
    guideCard("/pet-health-pattaya/spaying-and-neutering.html", "Health", "Spaying & neutering",
      "Routine surgery and the welfare case in Pattaya.",
      "Open the guide") +
    guideCard("/trainers/", "Training", "Dog trainers in Pattaya",
      "Obedience training and behaviour help from Pattaya-based trainers.",
      "View trainers") +
    guideCard("/pet-relocation/", "Relocation", "Pet relocation agents",
      "Approved public service scopes and evidence status for relocation providers.",
      "View agents") +
    guideCard("/pet-emergency/beach-and-sea-hazards.html", "Beach", "Beach & sea hazards",
      "Jellyfish, hot sand and seawater risks for dogs on Pattaya beaches.",
      "Open the guide") +
    guideCard("/owning-a-pet-in-pattaya/where-to-walk-your-dog.html", "Owning", "Where to walk your dog",
      "Building a safe, cool-hours walking routine in Pattaya.",
      "Open the guide") +
    guideCard("/owning-a-pet-in-pattaya/microchipping-your-pet.html", "Owning", "Microchipping your pet",
      "Identification records, registry questions and keeping contact details current.",
      "Open the guide") +
    guideCard("/owning-a-pet-in-pattaya/dog-registration-thailand.html", "Owning", "Dog registration",
      "What the current national source proves and which local ordinance details remain unverified.",
      "Open the guide") +
    guideCard("/owning-a-pet-in-pattaya/cost-of-owning-a-pet.html", "Owning", "What it costs",
      "A budgeting framework that asks providers for current written prices.",
      "Open the guide") +
    guideCard("/owning-a-pet-in-pattaya/pet-sitters-and-dog-walkers.html", "Owning", "Pet sitters & dog walkers",
      "Cover for travel and long work days.",
      "Open the guide") +
    guideCard("/pet-health-pattaya/parvovirus.html", "Health", "Parvovirus",
      "A deadly, preventable puppy disease — and how to protect against it.",
      "Open the guide") +
    guideCard("/pet-health-pattaya/dental-care.html", "Health", "Dental care",
      "Teeth, tartar and gum health for dogs and cats.",
      "Open the guide") +
    guideCard("/pet-emergency/venomous-creatures.html", "Emergency", "Venomous creatures",
      "Toads, centipedes and stings beyond snakes.",
      "Open the guide") +
    guideCard("/owning-a-pet-in-pattaya/rainy-season-pet-care.html", "Owning", "Rainy-season pet care",
      "Humidity, skin and ear health when the monsoon arrives.",
      "Open the guide") +
    guideCard("/owning-a-pet-in-pattaya/getting-to-the-vet.html", "Owning", "Getting your pet to the vet",
      "Transport options without a car in Pattaya.",
      "Open the guide") +
    guideCard("/pet-health-pattaya/healthy-weight.html", "Health", "Healthy weight",
      "Extra weight and heat do not mix well.",
      "Open the guide") +
    guideCard("/pet-health-pattaya/tick-borne-disease.html", "Health", "Tick-borne disease",
      "The hidden danger of ticks in the tropics.",
      "Open the guide") +
    guideCard("/cats/indoor-vs-outdoor-cats.html", "Cats", "Indoor or outdoor cats",
      "Keeping a cat safe from traffic, dogs and balconies.",
      "Open the guide") +
    "</div>" +
    '<div class="disclaimer-box"><strong>Editorial and informational only.</strong> ' +
    "Our guides are not veterinary advice. Import and export rules change &mdash; " +
    "always verify the current requirements with the official source. Always " +
    "consult a qualified veterinarian for your pet&rsquo;s health.</div>" +
    "</div></section>" +
    inPageLinkSection("general")
});

module.exports = pages;
