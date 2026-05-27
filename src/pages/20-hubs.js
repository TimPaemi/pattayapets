"use strict";
/* Hub overview pages: Directory and Guides */

function card(href, tag, name, desc, cta) {
  return '<a class="card" href="' + href + '"><span class="card-tag">' + tag +
    "</span><h3>" + name + "</h3><p>" + desc + "</p>" +
    '<span class="card-meta">' + cta + " &rarr;</span></a>";
}

const { BUSINESSES } = require("../data/businesses.js");

function areaTile(name, slug, blurb) {
  var n = BUSINESSES.filter(function (b) { return b.areas.indexOf(slug) !== -1; }).length;
  var sub = n ? (n + (n === 1 ? " business listed" : " businesses listed")) : blurb;
  return '<a class="tile" href="/area/' + slug + '.html">' +
    '<span class="tile-name">' + name + "</span>" +
    '<span class="tile-count">' + sub + "</span></a>";
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
  title: "Pattaya pet business directory",
  ogTitle: "The Pattaya pet business directory",
  description:
    "The editorial directory of pet businesses in Pattaya - vets and animal hospitals, groomers, boarding, pet shops, dog trainers, relocation and mobile vets.",
  crumb: "Directory",
  breadcrumbs: [],
  updated: "2026-05-27",
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
    card("/groomers/", "Grooming", "Pet groomers",
      "Dog and cat grooming &mdash; baths, clips, de-shedding and nail care.", "View groomers") +
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
    "</div></div></section>"
});

/* ---------------- Guides hub ---------------- */
pages.push({
  path: "/guides.html",
  title: "Pattaya pet guides",
  ogTitle: "PattayaPets guides & resources",
  description:
    "Plain-English guides for pet owners in Pattaya: bringing a pet to Thailand, taking one out, dog-friendly places, pet emergencies, costs and adoption.",
  crumb: "Guides",
  breadcrumbs: [],
  updated: "2026-05-27",
  body:
    '<section class="section"><div class="container">' +
    '<div class="section-head"><p class="eyebrow">Guides &amp; resources</p>' +
    "<h1>PattayaPets guides</h1>" +
    "<p class=\"lede\">Clear, practical answers to what pet owners in Pattaya " +
    "search for. Every guide is date-stamped and points you to the official source " +
    "to verify against.</p></div>" +
    "<h2>Browse the guides</h2>" +
    '<div class="grid grid-3">' +
    card("/start-here.html", "New here", "Start here",
      "A short orientation for new pet owners in Pattaya &mdash; emergency contacts, " +
      "finding a vet, the climate and the essentials.", "Open the page") +
    card("/bring-pet-to-thailand/", "Flagship guide", "Bringing a pet to Thailand",
      "The full import process: DLD permit, microchip, rabies and titer test, " +
      "health certificate, airlines and arrival.", "Open the guide") +
    card("/take-pet-out-of-thailand/", "Moving on", "Taking a pet out of Thailand",
      "DLD export permit, health certificate, costs and country-by-country destination notes.",
      "Open the guide") +
    card("/dog-friendly-pattaya/", "Out &amp; about", "Dog-friendly Pattaya",
      "Beaches, cafes, restaurants, hotels, condos and parks that welcome dogs.",
      "Open the guide") +
    card("/pet-emergency/", "Emergency", "Pet emergencies &amp; hazards",
      "24-hour vets, first-aid steps, heatstroke, ticks, snakes and street-dog " +
      "encounters.", "Open the guide") +
    card("/pet-emergency/24-hour-vets-pattaya.html", "Urgent", "24-hour vets in Pattaya",
      "Animal hospitals open around the clock &mdash; addresses and contact details.",
      "View the list") +
    card("/owning-a-pet-in-pattaya/", "Day to day", "Owning a pet in Pattaya",
      "Costs, hot-climate care, pet-friendly housing and where to walk your dog.",
      "Open the guide") +
    card("/pet-health-pattaya/", "Health", "Pet health in Pattaya",
      "Heartworm, tick disease, skin and ear problems, parvovirus and neutering " +
      "&mdash; the tropical-climate health picture.", "Open the guide") +
    card("/adopt-a-pet-pattaya/", "Adoption", "Adopt a pet in Pattaya",
      "The shelters and rescue organisations in and around Pattaya, and how " +
      "adoption works.", "Open the guide") +
    card("/pet-insurance-thailand.html", "Money", "Pet insurance in Thailand",
      "How pet insurance works here, what it covers and whether it is worth it.",
      "Open the guide") +
    card("/dogs/", "For dog owners", "The dog owner&rsquo;s hub",
      "Everything dog-specific in one place &mdash; care, training, walks and more.",
      "Open the hub") +
    card("/cats/", "For cat owners", "The cat owner&rsquo;s hub",
      "Everything cat-specific in one place &mdash; care, vets and indoor living.",
      "Open the hub") +
    card("/adopt-a-pet-pattaya/fostering.html", "Adoption", "Fostering a pet",
      "Give a rescue animal a temporary home while it waits for adoption.",
      "Open the guide") +
    card("/adopt-a-pet-pattaya/how-to-help.html", "Adoption", "How to help street animals",
      "Donate, volunteer, foster and what to do for an injured animal.",
      "Open the guide") +
    card("/bring-pet-to-thailand/import-permit-thailand-dld.html", "Import", "DLD import permit",
      "How to apply for the Thai import permit before your pet flies in.",
      "Open the guide") +
    card("/bring-pet-to-thailand/rabies-vaccination-titer-test.html", "Import", "Rabies & titer test",
      "Why the titer test matters, and how the timing affects your move.",
      "Open the guide") +
    card("/take-pet-out-of-thailand/export-process.html", "Export", "The export process",
      "Thai DLD health certificate, export permit and the airport steps on the way out.",
      "Open the guide") +
    card("/mobile-vets/", "At home", "Mobile & home-visit vets",
      "Vets who come to you &mdash; useful for nervous pets and multi-cat homes.",
      "View mobile vets") +
    card("/bring-pet-to-thailand/snub-nosed-breeds-flying.html", "Import", "Snub-nosed breeds & flying",
      "Why flat-faced breeds need extra care, and how airlines restrict them.",
      "Open the guide") +
    card("/bring-pet-to-thailand/thailand-pet-quarantine.html", "Import", "Pet quarantine in Thailand",
      "What really happens at the Animal Quarantine Station on arrival.",
      "Open the guide") +
    card("/bring-pet-to-thailand/u-tapao-airport-pets.html", "Import", "U-Tapao or Bangkok?",
      "Which airport to fly your pet into, and how to reach Pattaya.",
      "Open the guide") +
    "</div>" +
    '<div class="disclaimer-box"><strong>Editorial and informational only.</strong> ' +
    "Our guides are not veterinary advice. Import and export rules change &mdash; " +
    "always verify the current requirements with the official source. Always " +
    "consult a qualified veterinarian for your pet&rsquo;s health.</div>" +
    "</div></section>"
});

module.exports = pages;
