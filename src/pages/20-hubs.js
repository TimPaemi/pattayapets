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
    '<p class="dir-filter-status notice" id="guide-filter-status" hidden></p>';
}

const { BUSINESSES } = require("../data/businesses.js");
const { areaTileHtml } = require("../area-tiles.js");
const { inPageLinkSection, guideClusterChips } = require("../linking.js");

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
  title: "Pattaya Pet Business Directory | Vets, Groomers & Boarding | PattayaPets",
  ogTitle: "The Pattaya pet business directory",
  image: "/assets/img/og-vets.png",
  description:
    "The editorial directory of pet businesses in Pattaya - vets and animal hospitals, groomers, boarding, pet shops, dog trainers, relocation and mobile vets.",
  crumb: "Directory",
  breadcrumbs: [],
  updated: "2026-05-30",
  body:
    '<section class="section"><div class="container">' +
    '<div class="section-head"><p class="eyebrow">The directory</p>' +
    "<h1>The Pattaya pet business directory</h1>" +
    "<p class=\"lede\">Seven categories of pet business across Pattaya, each one " +
    "browsable by neighbourhood. Reviewed honestly &mdash; never paid.</p></div>" +
    '<div class="callout callout-note"><p>Every business starts as a verified ' +
    "<strong>facts page</strong> &mdash; name, area, services, hours, languages and " +
    "contact details &mdash; marked <em>&lsquo;not yet reviewed&rsquo;</em>. An " +
    "honest verdict (recommend, OK or avoid) is added only after a real anonymous " +
    'visit. Read the full method in our <a href="/standards.html">editorial ' +
    "standards</a>.</p></div>" +
    "</div></section>" +

    '<section class="section section-tint"><div class="container">' +
    '<div class="section-head"><h2>Browse by category</h2></div>' +
    '<div class="grid grid-3">' +
    card("/vets/", "Health", "Vets &amp; animal hospitals",
      "General clinics, animal hospitals and 24-hour emergency care.", "View vets") +
    '<a class="card" href="/vets/?filter=24h"><span class="card-tag">Urgent</span>' +
    "<h3>24-hour vets (directory)</h3>" +
    "<p>Filter the vets hub to clinics open around the clock.</p>" +
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
      "Import and export specialists who handle permits, flights and paperwork.", "View agents") +
    card("/mobile-vets/", "At home", "Mobile &amp; home-visit vets",
      "Vets who come to you &mdash; useful for nervous pets and multi-cat homes.", "View mobile vets") +
    "</div></div></section>" +

    '<section class="section"><div class="container">' +
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

    '<section class="section section-tint"><div class="container">' +
    '<div class="section-head"><h2>Helpful guides</h2>' +
    "<p>Orientation for pet owners &mdash; not veterinary advice.</p></div>" +
    '<div class="grid grid-4">' +
    card("/pet-health-pattaya/", "Health", "Pet health in Pattaya",
      "Heartworm, ticks, skin problems and other tropical-climate risks.", "Open the guide") +
    card("/adopt-a-pet-pattaya/", "Adoption", "Adopt a pet in Pattaya",
      "Shelters, fostering and how to help street animals.", "Open the guide") +
    card("/bring-pet-to-thailand/", "Import", "Bringing a pet to Thailand",
      "DLD permit, microchip, rabies titer and health certificate.", "Open the guide") +
    card("/pet-emergency/", "Emergency", "Pet emergencies",
      "24-hour vets, heatstroke, poisoning and first-aid basics.", "Open the guide") +
    "</div>" +
    '<div class="grid grid-4" style="margin-top:1rem">' +
    card("/dog-friendly-pattaya/", "Out &amp; about", "Dog-friendly Pattaya",
      "Beaches, cafes, restaurants and places that welcome dogs.", "Open the guide") +
    card("/pet-emergency/24-hour-vets-pattaya.html", "Urgent", "24-hour vets in Pattaya",
      "Animal hospitals open around the clock.", "View the list") +
    card("/owning-a-pet-in-pattaya/", "Day to day", "Owning a pet in Pattaya",
      "Costs, hot-climate care, pet-friendly housing and where to walk your dog.", "Open the guide") +
    card("/take-pet-out-of-thailand/export-process.html", "Export", "The export process",
      "Thai DLD health certificate, export permit and airport steps.", "Open the guide") +
    "</div>" +
    '<div class="grid grid-4" style="margin-top:1rem">' +
    card("/take-pet-out-of-thailand/", "Moving on", "Taking a pet out of Thailand",
      "DLD export permit, costs and country-by-country destination notes.", "Open the guide") +
    card("/start-here.html", "New here", "Start here",
      "A short orientation for new pet owners in Pattaya.", "Open the page") +
    card("/pet-insurance-thailand.html", "Money", "Pet insurance in Thailand",
      "How pet insurance works here and whether it is worth it.", "Open the guide") +
    card("/pet-relocation/", "Relocation", "Pet relocation agents",
      "Import and export specialists who handle permits and flights.", "View agents") +
    "</div>" +
    '<div class="grid grid-4" style="margin-top:1rem">' +
    card("/dogs/", "Dog owners", "Dogs in Pattaya",
      "Care, training, walks and health guides for dogs.", "Open the hub") +
    card("/cats/", "Cat owners", "Cats in Pattaya",
      "Indoor living, health and care guides for cats.", "Open the hub") +
    card("/owning-a-pet-in-pattaya/microchipping-your-pet.html", "Owning", "Microchipping your pet",
      "The best route home for a lost pet, and keeping details current.", "Open the guide") +
    card("/owning-a-pet-in-pattaya/lost-pet-pattaya.html", "Owning", "Lost pet in Pattaya",
      "Microchip, local groups and what to do first.", "Open the guide") +
    "</div>" +
    '<div class="btn-row" style="margin-top:1.5rem"><a class="btn btn-ghost" href="/guides.html">All guides &rarr;</a></div>' +
    "</div></section>"
});

/* ---------------- Guides hub ---------------- */
pages.push({
  path: "/guides.html",
  title: "Pattaya Pet Guides | Import, Export, Emergency & Owning | PattayaPets",
  ogTitle: "PattayaPets guides & resources",
  description:
    "Plain-English guides for pet owners in Pattaya: bringing a pet to Thailand, taking one out, dog-friendly places, pet emergencies, costs and adoption.",
  crumb: "Guides",
  breadcrumbs: [],
  updated: "2026-05-30",
  image: "/assets/img/og-guides.png",
  body:
    '<section class="section"><div class="container">' +
    '<div class="section-head"><p class="eyebrow">Guides &amp; resources</p>' +
    "<h1>PattayaPets guides</h1>" +
    "<p class=\"lede\">Clear, practical answers to what pet owners in Pattaya " +
    "search for. Every guide is date-stamped and points you to the official source " +
    "to verify against.</p></div>" +
    guideClusterChips() +
    "<h2>Browse the guides</h2>" +
    guideFiltersBar() +
    '<div id="guide-listings" class="grid grid-3">' +
    guideCard("/start-here.html", "New here", "Start here",
      "A short orientation for new pet owners in Pattaya &mdash; emergency contacts, " +
      "finding a vet, the climate and the essentials.", "Open the page") +
    guideCard("/bring-pet-to-thailand/", "Flagship guide", "Bringing a pet to Thailand",
      "The full import process: DLD permit, microchip, rabies and titer test, " +
      "health certificate, airlines and arrival.", "Open the guide") +
    guideCard("/bring-pet-to-thailand/checklist.html", "Import", "Import checklist",
      "A printable step-by-step checklist for the whole move to Thailand.",
      "Open the checklist") +
    guideCard("/take-pet-out-of-thailand/", "Moving on", "Taking a pet out of Thailand",
      "DLD export permit, health certificate, costs and country-by-country destination notes.",
      "Open the guide") +
    guideCard("/take-pet-out-of-thailand/checklist.html", "Export", "Export checklist",
      "A printable step-by-step checklist for taking your pet out of Thailand.",
      "Open the checklist") +
    guideCard("/dog-friendly-pattaya/", "Out &amp; about", "Dog-friendly Pattaya",
      "Beaches, cafes, restaurants, hotels, condos and parks that welcome dogs.",
      "Open the guide") +
    guideCard("/pet-emergency/", "Emergency", "Pet emergencies &amp; hazards",
      "24-hour vets, first-aid steps, heatstroke, ticks, snakes and street-dog " +
      "encounters.", "Open the guide") +
    guideCard("/pet-emergency/24-hour-vets-pattaya.html", "Urgent", "24-hour vets in Pattaya",
      "Animal hospitals open around the clock &mdash; addresses and contact details.",
      "View the list") +
    guideCard("/owning-a-pet-in-pattaya/", "Day to day", "Owning a pet in Pattaya",
      "Costs, hot-climate care, pet-friendly housing and where to walk your dog.",
      "Open the guide") +
    guideCard("/pet-health-pattaya/", "Health", "Pet health in Pattaya",
      "Heartworm, tick disease, skin and ear problems, parvovirus and neutering " +
      "&mdash; the tropical-climate health picture.", "Open the guide") +
    guideCard("/adopt-a-pet-pattaya/", "Adoption", "Adopt a pet in Pattaya",
      "The shelters and rescue organisations in and around Pattaya, and how " +
      "adoption works.", "Open the guide") +
    guideCard("/pet-insurance-thailand.html", "Money", "Pet insurance in Thailand",
      "How pet insurance works here, what it covers and whether it is worth it.",
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
      "Why the titer test matters, and how the timing affects your move.",
      "Open the guide") +
    guideCard("/bring-pet-to-thailand/health-certificate.html", "Import", "Health certificate",
      "The veterinary health certificate and who has to endorse it.",
      "Open the guide") +
    guideCard("/bring-pet-to-thailand/microchip-requirements.html", "Import", "Microchip requirements",
      "The ISO microchip your pet needs, and why it must come first.",
      "Open the guide") +
    guideCard("/take-pet-out-of-thailand/export-process.html", "Export", "The export process",
      "Thai DLD health certificate, export permit and the airport steps on the way out.",
      "Open the guide") +
    guideCard("/mobile-vets/", "At home", "Mobile & home-visit vets",
      "Vets who come to you &mdash; useful for nervous pets and multi-cat homes.",
      "View mobile vets") +
    guideCard("/bring-pet-to-thailand/snub-nosed-breeds-flying.html", "Import", "Snub-nosed breeds & flying",
      "Why flat-faced breeds need extra care, and how airlines restrict them.",
      "Open the guide") +
    guideCard("/bring-pet-to-thailand/thailand-pet-quarantine.html", "Import", "Pet quarantine in Thailand",
      "What really happens at the Animal Quarantine Station on arrival.",
      "Open the guide") +
    guideCard("/bring-pet-to-thailand/u-tapao-airport-pets.html", "Import", "U-Tapao or Bangkok?",
      "Which airport to fly your pet into, and how to reach Pattaya.",
      "Open the guide") +
    guideCard("/bring-pet-to-thailand/from-uae.html", "Import", "Import from the UAE",
      "MOCCAE export permit and the Thai DLD steps for Gulf relocations.",
      "Open the guide") +
    guideCard("/bring-pet-to-thailand/from-india.html", "Import", "Import from India",
      "AQCS export certificate and planning from a high-rabies origin.",
      "Open the guide") +
    guideCard("/bring-pet-to-thailand/from-philippines.html", "Import", "Import from the Philippines",
      "BAI export paperwork and direct flights to Thailand.",
      "Open the guide") +
    guideCard("/bring-pet-to-thailand/from-china.html", "Import", "Import from China",
      "Chinese customs export and direct flights from major cities.",
      "Open the guide") +
    guideCard("/bring-pet-to-thailand/from-south-africa.html", "Import", "Import from South Africa",
      "DAFF export certificate and planning from Africa.",
      "Open the guide") +
    guideCard("/take-pet-out-of-thailand/to-india.html", "Export", "Export to India",
      "AQCS import clearance when you leave Pattaya.",
      "Open the guide") +
    guideCard("/take-pet-out-of-thailand/to-philippines.html", "Export", "Export to the Philippines",
      "BAI import paperwork from Thailand.",
      "Open the guide") +
    guideCard("/take-pet-out-of-thailand/to-china.html", "Export", "Export to China",
      "Customs import clearance and quarantine on arrival.",
      "Open the guide") +
    guideCard("/take-pet-out-of-thailand/to-south-africa.html", "Export", "Export to South Africa",
      "DALRRD import permit and routing from Bangkok.",
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
      "Import and export specialists who handle permits, flights and paperwork.",
      "View agents") +
    guideCard("/pet-emergency/beach-and-sea-hazards.html", "Beach", "Beach & sea hazards",
      "Jellyfish, hot sand and seawater risks for dogs on Pattaya beaches.",
      "Open the guide") +
    guideCard("/owning-a-pet-in-pattaya/where-to-walk-your-dog.html", "Owning", "Where to walk your dog",
      "Building a safe, cool-hours walking routine in Pattaya.",
      "Open the guide") +
    guideCard("/owning-a-pet-in-pattaya/microchipping-your-pet.html", "Owning", "Microchipping your pet",
      "The best route home for a lost pet, and keeping details current.",
      "Open the guide") +
    guideCard("/owning-a-pet-in-pattaya/dog-registration-thailand.html", "Owning", "Dog registration",
      "Rabies vaccination law and local registration in Thailand.",
      "Open the guide") +
    guideCard("/owning-a-pet-in-pattaya/cost-of-owning-a-pet.html", "Owning", "What it costs",
      "A realistic monthly budget for a pet in Pattaya.",
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
