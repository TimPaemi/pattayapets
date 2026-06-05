"use strict";
/* Directory generator: category hubs, area hubs and business listing pages. */

const { CATEGORIES, AREAS, BUSINESSES } = require("../data/businesses.js");
const SITE = "https://pattayapets.com";
const { AREA_GUIDE } = require("../data/areas-content.js");
const { HUB_GUIDE } = require("../data/hub-content.js");
const { areaChipLabel } = require("../area-tiles.js");
const {
  linkTopicForCategory,
  sidebarLinkPanels,
  inPageLinkSection,
  hubQuickBar,
  corridorChipsSection
} = require("../linking.js");

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function bizUrl(b) { return "/" + b.category + "/" + b.slug + ".html"; }
function areaName(k) { return AREAS[k] ? AREAS[k].name : "Pattaya"; }
function firstSentence(t) { var m = t.match(/^.*?[.](\s|$)/); return m ? m[0].trim() : t; }

function bizPageTitle(b, cat) {
  var loc = b.areas.length ? areaName(b.areas[0]) : "Pattaya";
  return b.name + " | " + cat.name + " in " + loc + " | PattayaPets";
}

const HUB_OG = {
  vets: "/assets/img/og-vets.png",
  groomers: "/assets/img/og-groomers.png",
  boarding: "/assets/img/og-boarding.png",
  "pet-shops": "/assets/img/og-pet-shops.png",
  trainers: "/assets/img/og-trainers.png",
  "mobile-vets": "/assets/img/og-mobile-vets.png",
  "pet-relocation": "/assets/img/og-relocation.png"
};

const HUB_TITLE = {
  vets: "Vets in Pattaya | 24-Hour Animal Hospitals & Clinics",
  groomers: "Dog & Cat Groomers in Pattaya",
  boarding: "Pet Boarding & Kennels in Pattaya",
  "pet-shops": "Pet Shops in Pattaya",
  trainers: "Dog Trainers in Pattaya",
  "pet-relocation": "Pet Relocation Agents Thailand | Import & Export Help",
  "mobile-vets": "Mobile & Home-Visit Vets Pattaya | House Calls"
};

const HUB_DESC = {
  vets: "Vets and animal hospitals in Pattaya — 24-hour emergency care, vaccinations and surgery. Verified facts pages; verdicts after anonymous visits.",
  groomers: "Dog and cat groomers in Pattaya — baths, breed clips, nail trims and heat-aware coat care. Verified facts pages; verdicts after anonymous visits.",
  boarding: "Pet boarding, kennels and dog hotels in Pattaya for travel and work days. Verified facts pages; verdicts after anonymous visits.",
  "pet-shops": "Pet shops in Pattaya for food, litter, toys and supplies. Verified facts pages; verdicts after anonymous visits.",
  trainers: "Dog trainers and obedience classes in Pattaya. Verified facts pages; verdicts after anonymous visits.",
  "pet-relocation": "Pet relocation agents for import and export to and from Thailand — DLD permits, health certificates and flights.",
  "mobile-vets": "Mobile and home-visit vets in Pattaya — useful for nervous pets and owners without a car. Verified facts pages."
};

const CAT_GUIDES = {
  vets: [
    { name: "24-hour vets in Pattaya", path: "/pet-emergency/24-hour-vets-pattaya.html" },
    { name: "Mobile & home-visit vets", path: "/mobile-vets/" },
    { name: "Heartworm prevention", path: "/pet-health-pattaya/heartworm.html" },
    { name: "Tick-borne disease", path: "/pet-health-pattaya/tick-borne-disease.html" },
    { name: "Parvovirus", path: "/pet-health-pattaya/parvovirus.html" },
    { name: "Dog vaccinations", path: "/dogs/dog-vaccinations-thailand.html" },
    { name: "Cat vaccinations", path: "/cats/cat-vaccinations-thailand.html" },
    { name: "Getting to the vet", path: "/owning-a-pet-in-pattaya/getting-to-the-vet.html" },
    { name: "Pet health in Pattaya", path: "/pet-health-pattaya/" }
  ],
  groomers: [
    { name: "Mobile & home-visit vets", path: "/mobile-vets/" },
    { name: "Skin & ear problems", path: "/pet-health-pattaya/skin-and-ear-problems.html" },
    { name: "Dental care", path: "/pet-health-pattaya/dental-care.html" },
    { name: "Ticks & fleas", path: "/pet-emergency/ticks-and-fleas.html" },
    { name: "Hot-climate pet care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html" },
    { name: "Rainy-season pet care", path: "/owning-a-pet-in-pattaya/rainy-season-pet-care.html" },
    { name: "Adopt a pet in Pattaya", path: "/adopt-a-pet-pattaya/" }
  ],
  boarding: [
    { name: "The export process", path: "/take-pet-out-of-thailand/export-process.html" },
    { name: "Cat boarding & sitters", path: "/cats/cat-boarding-pattaya.html" },
    { name: "Pet sitters & dog walkers", path: "/owning-a-pet-in-pattaya/pet-sitters-and-dog-walkers.html" },
    { name: "Travelling in Thailand", path: "/owning-a-pet-in-pattaya/travelling-in-thailand.html" },
    { name: "Hot-climate pet care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html" },
    { name: "Microchipping your pet", path: "/owning-a-pet-in-pattaya/microchipping-your-pet.html" },
    { name: "Airline pet policies", path: "/bring-pet-to-thailand/airline-pet-policies.html" },
    { name: "Pet insurance in Thailand", path: "/pet-insurance-thailand.html" }
  ],
  "pet-shops": [
    { name: "Travelling in Thailand", path: "/owning-a-pet-in-pattaya/travelling-in-thailand.html" },
    { name: "Where to buy pet food", path: "/owning-a-pet-in-pattaya/where-to-buy-pet-food.html" },
    { name: "Microchipping your pet", path: "/owning-a-pet-in-pattaya/microchipping-your-pet.html" },
    { name: "Dog registration & the law", path: "/owning-a-pet-in-pattaya/dog-registration-thailand.html" },
    { name: "Ticks & fleas", path: "/pet-emergency/ticks-and-fleas.html" },
    { name: "Cats in Pattaya", path: "/cats/" },
    { name: "Dogs in Pattaya", path: "/dogs/" },
    { name: "Adopt a pet in Pattaya", path: "/adopt-a-pet-pattaya/" },
    { name: "Pet insurance in Thailand", path: "/pet-insurance-thailand.html" }
  ],
  "mobile-vets": [
    { name: "Getting to the vet", path: "/owning-a-pet-in-pattaya/getting-to-the-vet.html" },
    { name: "24-hour vets in Pattaya", path: "/pet-emergency/24-hour-vets-pattaya.html" },
    { name: "Spaying & neutering", path: "/pet-health-pattaya/spaying-and-neutering.html" },
    { name: "Dental care", path: "/pet-health-pattaya/dental-care.html" },
    { name: "Senior pet care", path: "/owning-a-pet-in-pattaya/senior-pet-care.html" },
    { name: "Pet health in Pattaya", path: "/pet-health-pattaya/" },
    { name: "Pet emergencies", path: "/pet-emergency/" }
  ],
  trainers: [
    { name: "Pet relocation agents", path: "/pet-relocation/" },
    { name: "Puppy care in Pattaya", path: "/dogs/puppy-care-pattaya.html" },
    { name: "Dog registration & the law", path: "/owning-a-pet-in-pattaya/dog-registration-thailand.html" },
    { name: "Tropical dog health", path: "/dogs/common-dog-health-issues-tropics.html" },
    { name: "Street-dog encounters", path: "/pet-emergency/street-dog-encounters.html" },
    { name: "Where to walk your dog", path: "/owning-a-pet-in-pattaya/where-to-walk-your-dog.html" },
    { name: "Fireworks & noise anxiety", path: "/owning-a-pet-in-pattaya/fireworks-and-noise-anxiety.html" },
    { name: "Dog-friendly Pattaya", path: "/dog-friendly-pattaya/" }
  ],
  "pet-relocation": [
    { name: "Bringing a pet to Thailand", path: "/bring-pet-to-thailand/" },
    { name: "Taking a pet out of Thailand", path: "/take-pet-out-of-thailand/" },
    { name: "Import from the UK", path: "/bring-pet-to-thailand/from-uk.html" },
    { name: "Export to the UK", path: "/take-pet-out-of-thailand/to-uk.html" },
    { name: "Import from the UAE", path: "/bring-pet-to-thailand/from-uae.html" },
    { name: "Export to the EU", path: "/take-pet-out-of-thailand/to-eu.html" },
    { name: "Export to Australia", path: "/take-pet-out-of-thailand/to-australia.html" },
    { name: "DLD export permit", path: "/take-pet-out-of-thailand/export-permit-thailand-dld.html" },
    { name: "DLD import permit", path: "/bring-pet-to-thailand/import-permit-thailand-dld.html" },
    { name: "Rabies & titer test", path: "/bring-pet-to-thailand/rabies-vaccination-titer-test.html" },
    { name: "Import costs", path: "/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html" },
    { name: "Export costs", path: "/take-pet-out-of-thailand/cost-to-export-a-pet-from-thailand.html" },
    { name: "Airline pet policies", path: "/bring-pet-to-thailand/airline-pet-policies.html" }
  ]
};

function catGuidesSection(key) {
  var links = CAT_GUIDES[key];
  if (!links || !links.length) return "";
  return '<section class="section" id="guides"><div class="container"><div class="prose">' +
    "<h2>Helpful guides</h2><ul>" +
    links.map(function (l) {
      return '<li><a href="' + l.path + '">' + esc(l.name) + "</a></li>";
    }).join("") +
    "</ul></div></div></section>";
}

function bizGuidesSidebar(catKey) {
  var links = CAT_GUIDES[catKey];
  if (!links || !links.length) return "";
  var cat = CATEGORIES[catKey];
  return '<hr><div class="ch">Helpful guides</div><ul class="toc">' +
    links.slice(0, 4).map(function (l) {
      return '<li><a href="' + l.path + '">' + esc(l.name) + "</a></li>";
    }).join("") +
    "</ul>" +
    (cat
      ? '<p style="margin:.65rem 0 0;font-size:.92rem"><a href="/' + cat.slug +
        '/#guides">All ' + esc(cat.name.toLowerCase()) + " guides &rarr;</a></p>"
      : "");
}

const CAT_CROSS = {
  vets: [
    { label: "Mobile vets", path: "/mobile-vets/" },
    { label: "24-hour vets", path: "/pet-emergency/24-hour-vets-pattaya.html" },
    { label: "Pet health guide", path: "/pet-health-pattaya/" },
    { label: "Pet emergencies", path: "/pet-emergency/" },
    { label: "Directory", path: "/directory.html" },
    { label: "Guides", path: "/guides.html?topic=health" }
  ],
  groomers: [
    { label: "Vets", path: "/vets/" },
    { label: "Pet shops", path: "/pet-shops/" },
    { label: "Skin & ear problems", path: "/pet-health-pattaya/skin-and-ear-problems.html" },
    { label: "Ticks & fleas", path: "/pet-emergency/ticks-and-fleas.html" },
    { label: "Area: Jomtien", path: "/area/jomtien.html" },
    { label: "Start here", path: "/start-here.html" }
  ],
  boarding: [
    { label: "Pet sitters", path: "/owning-a-pet-in-pattaya/pet-sitters-and-dog-walkers.html" },
    { label: "Cat boarding", path: "/cats/cat-boarding-pattaya.html" },
    { label: "Vets", path: "/vets/" },
    { label: "Import & travel", path: "/bring-pet-to-thailand/airline-pet-policies.html" },
    { label: "Export process", path: "/take-pet-out-of-thailand/export-process.html" },
    { label: "Dog-friendly stays", path: "/dog-friendly-pattaya/" }
  ],
  "pet-shops": [
    { label: "Where to buy pet food", path: "/owning-a-pet-in-pattaya/where-to-buy-pet-food.html" },
    { label: "Vets", path: "/vets/" },
    { label: "Microchipping", path: "/owning-a-pet-in-pattaya/microchipping-your-pet.html" },
    { label: "Cat owners", path: "/cats/" },
    { label: "Dog owners", path: "/dogs/" },
    { label: "Owning hub", path: "/owning-a-pet-in-pattaya/" }
  ],
  trainers: [
    { label: "Puppy care", path: "/dogs/puppy-care-pattaya.html" },
    { label: "Street-dog encounters", path: "/pet-emergency/street-dog-encounters.html" },
    { label: "Where to walk", path: "/owning-a-pet-in-pattaya/where-to-walk-your-dog.html" },
    { label: "Dog-friendly Pattaya", path: "/dog-friendly-pattaya/" },
    { label: "Vets", path: "/vets/" },
    { label: "Adoption", path: "/adopt-a-pet-pattaya/" }
  ],
  "mobile-vets": [
    { label: "Vets & hospitals", path: "/vets/" },
    { label: "24-hour vets", path: "/pet-emergency/24-hour-vets-pattaya.html" },
    { label: "Getting to the vet", path: "/owning-a-pet-in-pattaya/getting-to-the-vet.html" },
    { label: "Senior pet care", path: "/owning-a-pet-in-pattaya/senior-pet-care.html" },
    { label: "Banglamung area", path: "/area/banglamung.html" },
    { label: "Pet health", path: "/pet-health-pattaya/" }
  ],
  "pet-relocation": [
    { label: "Import guide", path: "/bring-pet-to-thailand/" },
    { label: "Export guide", path: "/take-pet-out-of-thailand/" },
    { label: "From UK", path: "/bring-pet-to-thailand/from-uk.html" },
    { label: "To UK", path: "/take-pet-out-of-thailand/to-uk.html" },
    { label: "From UAE", path: "/bring-pet-to-thailand/from-uae.html" },
    { label: "To EU", path: "/take-pet-out-of-thailand/to-eu.html" },
    { label: "Import checklist", path: "/bring-pet-to-thailand/checklist.html" },
    { label: "Export checklist", path: "/take-pet-out-of-thailand/checklist.html" }
  ]
};

function catCrossSection(key) {
  var links = CAT_CROSS[key];
  if (!links || !links.length) return "";
  return '<section class="section section-tint"><div class="container">' +
    '<div class="section-head"><h2>Related on PattayaPets</h2></div><div class="chips">' +
    links.map(function (l) {
      return '<a class="chip chip-link" href="' + l.path + '">' + esc(l.label) + "</a>";
    }).join("") + "</div></div></section>";
}

const AREA_MISSING_HINTS = {
  naklua: {
    groomers: "<a href=\"/groomers/furiday-pet-grooming.html\">FURiday</a> (Naklua) or " +
      "<a href=\"/groomers/pattaya-city-pet-shop-grooming.html\">Pattaya City Grooming</a> (central)",
    boarding: "<a href=\"/boarding/pattaya-dog-stay.html\">Pattaya Dog Stay</a> (central) or " +
      "<a href=\"/boarding/elite-dog-resort.html\">Elite Dog Resort</a> (Pratumnak)",
    "pet-shops": "<a href=\"/pet-shops/pattaya-pet-center.html\">Pattaya Pet Center</a> (South Pattaya) or " +
      "the <a href=\"/pet-shops/\">pet shops directory</a>",
    trainers: "<a href=\"/trainers/zoeta-dogsoul.html\">Zoeta Dogsoul</a> (confirm Pattaya coverage) or " +
      "the <a href=\"/trainers/\">trainers directory</a>",
    "mobile-vets": "the <a href=\"/mobile-vets/\">mobile vets directory</a> &mdash; mostly East Pattaya / Banglamung"
  },
  wongamat: {
    vets: "<a href=\"/vets/north-pattaya-animal-hospital.html\">North Pattaya Animal Hospital</a> " +
      "(Naklua/Wongamat) or <a href=\"/vets/pattaya-veterinary-clinic.html\">Pattaya Veterinary Clinic</a> (Naklua)",
    groomers: "<a href=\"/groomers/pattaya-city-pet-shop-grooming.html\">Pattaya City Grooming</a> (central) or " +
      "the <a href=\"/groomers/\">groomers directory</a>",
    "pet-shops": "<a href=\"/pet-shops/brand-dog-pattaya-pet-supplies.html\">Brand Dog</a> (South Pattaya) or " +
      "<a href=\"/pet-shops/peturday-pattaya.html\">Peturday</a> (Pratumnak)",
    boarding: "<a href=\"/boarding/elite-dog-resort.html\">Elite Dog Resort</a> (Pratumnak) or " +
      "<a href=\"/boarding/pattaya-dog-stay.html\">Pattaya Dog Stay</a> (central)",
    trainers: "<a href=\"/trainers/zoeta-dogsoul.html\">Zoeta Dogsoul</a> or " +
      "the <a href=\"/trainers/\">trainers directory</a>",
    "mobile-vets": "the <a href=\"/mobile-vets/\">mobile vets directory</a> &mdash; East Pattaya listings"
  },
  pratumnak: {
    vets: "<a href=\"/vets/thonglor-pet-hospital-pattaya.html\">Thonglor Pet Hospital</a> " +
      "(central Pattaya, 24h) or <a href=\"/vets/north-pattaya-animal-hospital.html\">North Pattaya Animal Hospital</a> (Naklua)",
    groomers: "<a href=\"/groomers/pattaya-city-pet-shop-grooming.html\">Pattaya City " +
      "Grooming</a> (central) or <a href=\"/groomers/woof-pattaya.html\">Woof Pattaya</a> " +
      "(Nong Prue)",
    trainers: "<a href=\"/trainers/zoeta-dogsoul.html\">Zoeta Dogsoul</a> or " +
      "<a href=\"/trainers/\">trainers directory</a>"
  },
  jomtien: {
    groomers: "<a href=\"/groomers/doggie-star-grooming-pattaya.html\">Doggie Star</a> (Jomtien), " +
      "<a href=\"/groomers/pet-passions-mobile-grooming.html\">Pet Passions mobile</a> (van) or " +
      "salons in <a href=\"/groomers/\">central Pattaya</a>",
    boarding: "<a href=\"/boarding/pattaya-dog-stay.html\">Pattaya Dog Stay</a> (central) or " +
      "the <a href=\"/boarding/\">boarding directory</a>",
    trainers: "<a href=\"/trainers/k9-pattaya-dog-training-school.html\">K9 Pattaya</a> (Sattahip) or " +
      "the <a href=\"/trainers/\">trainers directory</a>",
    "mobile-vets": "<a href=\"/mobile-vets/mor-ja-pet-clinic-pattaya.html\">Mor Ja Pet Clinic</a> (confirm coverage)"
  },
  "bang-saray": {
    vets: "<a href=\"/vets/animal-army-hospital.html\">Animal Army Hospital</a> (Na Jomtien) " +
      "or <a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour hospitals</a> in " +
      "central Pattaya",
    groomers: "<a href=\"/groomers/woof-pattaya.html\">Woof Pattaya</a> (Nong Prue) or " +
      "the <a href=\"/groomers/\">groomers directory</a>",
    boarding: "<a href=\"/boarding/pattaya-dog-hotel.html\">Pattaya Dog Hotel</a> (Bang Saray) or " +
      "the <a href=\"/boarding/\">boarding directory</a>",
    trainers: "<a href=\"/trainers/k9-coach.html\">K9 Coach</a> (Bang Saray) or " +
      "the <a href=\"/trainers/\">trainers directory</a>",
    "mobile-vets": "<a href=\"/mobile-vets/mor-ja-pet-clinic-pattaya.html\">Mor Ja Pet Clinic</a> " +
      "(confirm coverage) or the <a href=\"/mobile-vets/\">mobile vets directory</a>",
    "pet-shops": "<a href=\"/pet-shops/tong-ma-aquarium-and-pets-shop.html\">Tong-ma</a> " +
      "or <a href=\"/pet-shops/petsmart-pattaya.html\">PetSmart</a> (Thep Prasit, Jomtien)"
  },
  sattahip: {
    vets: "<a href=\"/vets/animal-army-hospital.html\">Animal Army Hospital</a> (Na Jomtien)",
    groomers: "<a href=\"/groomers/woof-pattaya.html\">Woof Pattaya</a> (Nong Prue) or " +
      "the <a href=\"/groomers/\">groomers directory</a>",
    boarding: "<a href=\"/boarding/pattaya-dog-hotel.html\">Pattaya Dog Hotel</a> (Bang Saray / Sattahip) or " +
      "the <a href=\"/boarding/\">boarding directory</a>",
    trainers: "<a href=\"/trainers/k9-pattaya-dog-training-school.html\">K9 Pattaya</a> (Sattahip) or " +
      "the <a href=\"/trainers/\">trainers directory</a>",
    "mobile-vets": "<a href=\"/mobile-vets/\">Mobile vets</a> &mdash; East Pattaya listings",
    "pet-shops": "<a href=\"/pet-shops/\">Pet shops directory</a>"
  },
  banglamung: {
    vets: "<a href=\"/vets/pattaya-community-pet-hospital.html\">Pattaya Community Pet Hospital</a> " +
      "(Nernplubwan, 24h) or <a href=\"/vets/siam-country-pet-hospital.html\">Siam Country Pet Hospital</a>",
    groomers: "<a href=\"/groomers/furpet-grooming-and-hotel.html\">Furpet</a>, " +
      "<a href=\"/groomers/jaijai-grooming.html\">Jaijai Grooming</a> or " +
      "<a href=\"/groomers/woof-pattaya.html\">Woof Pattaya</a>",
    boarding: "<a href=\"/boarding/pattaya-dog-stay.html\">Pattaya Dog Stay</a> (central) or " +
      "the <a href=\"/boarding/\">boarding directory</a>",
    trainers: "<a href=\"/trainers/zoeta-dogsoul.html\">Zoeta Dogsoul</a> or " +
      "<a href=\"/trainers/k9-coach.html\">K9 Coach</a> (Bang Saray)",
    "mobile-vets": "<a href=\"/mobile-vets/mor-ja-pet-clinic-pattaya.html\">Mor Ja Pet Clinic</a> or " +
      "<a href=\"/mobile-vets/baan-mor-raksasat-animal-hospital-pattaya.html\">Baan Mor Raksasat</a>",
    "pet-shops": "<a href=\"/pet-shops/pattaya-pet-center.html\">Pattaya Pet Center</a> or " +
      "the <a href=\"/pet-shops/\">pet shops directory</a>"
  },
  "central-pattaya": {
    trainers: "<a href=\"/trainers/k9-coach.html\">K9 Coach</a> (Bang Saray area) or " +
      "<a href=\"/trainers/\">trainers directory</a>"
  }
};

function missingCategoryHint(areaKey, catKey) {
  var areaHints = AREA_MISSING_HINTS[areaKey];
  if (areaHints && areaHints[catKey]) return areaHints[catKey];
  return "<a href=\"/" + catKey + "/\">" + esc(CATEGORIES[catKey].name) + "</a> across Pattaya";
}

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
  'to the vet</a>, the listed ' +
  '<a href="/mobile-vets/mor-ja-pet-clinic-pattaya.html">Mor Ja Pet Clinic</a> ' +
  'and <a href="/mobile-vets/baan-mor-raksasat-animal-hospital-pattaya.html">' +
  'Baan Mor Raksasat Animal Hospital</a>, and the full ' +
  '<a href="/vets/">vets directory</a>.</p>' +
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

function contactChip(b) {
  if (b.phone && b.tel) {
    return '<a class="chip chip-link" href="tel:' + b.tel + '">' + esc(b.phone) + "</a>";
  }
  if (b.whatsapp) {
    return '<a class="chip chip-link" href="https://wa.me/' + esc(b.whatsapp) +
      '" target="_blank" rel="noopener">WhatsApp</a>';
  }
  if (b.line) return '<span class="chip">LINE ' + esc("@" + String(b.line).replace(/^@/, "")) + "</span>";
  if (b.website) {
    return '<a class="chip chip-link" href="' + b.website +
      '" target="_blank" rel="noopener nofollow">Website</a>';
  }
  return "";
}

function bizContactActions(b) {
  var parts = [];
  if (b.phone && b.tel) {
    var cls = b.c24 ? "btn btn-alert" : "btn btn-primary";
    parts.push('<a class="' + cls + '" href="tel:' + b.tel + '">Call ' + esc(b.phone) + "</a>");
  }
  if (b.whatsapp) {
    parts.push('<a class="btn btn-ghost" href="https://wa.me/' + esc(b.whatsapp) +
      '" target="_blank" rel="noopener">WhatsApp</a>');
  }
  if (b.website) {
    parts.push('<a class="btn btn-ghost" href="' + b.website +
      '" target="_blank" rel="noopener nofollow">Official website</a>');
  }
  if (!parts.length) return "";
  return '<div class="biz-actions btn-row contact-actions" role="group" aria-label="Contact ' +
    esc(b.name) + '">' + parts.join("") + "</div>";
}

function contactRows(b) {
  var rows = [];
  if (b.phone && b.tel) {
    rows.push(["Phone", '<a href="tel:' + b.tel + '">' + esc(b.phone) + "</a>"]);
  }
  if (b.whatsapp) {
    rows.push(["WhatsApp", '<a href="https://wa.me/' + esc(b.whatsapp) +
      '" target="_blank" rel="noopener">Message on WhatsApp</a>']);
  }
  if (b.line) {
    rows.push(["LINE", esc("@" + String(b.line).replace(/^@/, ""))]);
  }
  if (b.email) {
    rows.push(["Email", '<a href="mailto:' + esc(b.email) + '">' + esc(b.email) + "</a>"]);
  }
  return rows;
}

function bizDirTags(b) {
  var tags = [];
  if (b.c24) tags.push("24h");
  if (b.areas.length) {
    b.areas.forEach(function (a) { tags.push("area:" + a); });
  } else {
    tags.push("nationwide");
  }
  return tags.join(" ");
}

function areaHubQuickBar(areaKey) {
  var areaLabel = AREAS[areaKey] ? AREAS[areaKey].name : "this area";
  var f = encodeURIComponent("area:" + areaKey);
  var chips =
    '<a class="chip chip-link" href="/vets/?filter=' + f + '">Vets in ' + esc(areaLabel) + "</a>" +
    '<a class="chip chip-link" href="/groomers/?filter=' + f + '">Groomers</a>' +
    '<a class="chip chip-link" href="/pet-emergency/24-hour-vets-pattaya.html">24-hour vets</a>' +
    '<a class="chip chip-link" href="/pet-health-pattaya/">Pet health</a>' +
    '<a class="chip chip-link" href="/dog-friendly-pattaya/">Dog-friendly</a>' +
    '<a class="chip chip-link" href="/start-here.html">Start here</a>';
  return '<details class="corridor-panel hub-quick-panel hub-quick-links" style="margin-top:1.1rem">' +
    '<summary class="corridor-panel__title">Jump to</summary>' +
    '<div class="corridor-panel__body chips">' + chips + "</div></details>";
}

function areaDirQuickLinks(areaKey, list) {
  if (!list.length) return "";
  var areaLabel = AREAS[areaKey] ? AREAS[areaKey].name : "this area";
  var chips = Object.keys(CATEGORIES).filter(function (ck) {
    return list.some(function (b) { return b.category === ck; });
  }).map(function (ck) {
    var n = list.filter(function (b) { return b.category === ck; }).length;
    return '<a class="chip chip-link" href="/' + ck + "/?filter=" +
      encodeURIComponent("area:" + areaKey) + '">' + esc(areaChipLabel(ck)) +
      " in " + esc(areaLabel) + " (" + n + ")</a>";
  }).join("");
  if (!chips) return "";
  return '<details class="corridor-panel filter-panel area-dir-panel">' +
    '<summary class="corridor-panel__title">Directory in ' + esc(areaLabel) + "</summary>" +
    '<div class="corridor-panel__body"><div class="dir-filters" role="group" aria-label="Directory in ' +
    esc(areaLabel) + '">' + chips + "</div></div></details>";
}

function areaFiltersBar(list, areaSlug) {
  var cats = Object.keys(CATEGORIES).filter(function (ck) {
    return list.some(function (b) { return b.category === ck; });
  });
  if (cats.length < 2) return "";
  var base = "/area/" + areaSlug + ".html";
  var chips =
    '<a href="' + base + '" class="chip chip-link dir-filter is-active" data-dir-filter="all">All (' +
    list.length + ")</a>";
  cats.forEach(function (ck) {
    var n = list.filter(function (b) { return b.category === ck; }).length;
    chips += '<a href="' + base + "?cat=" + ck + '" class="chip chip-link dir-filter" data-dir-filter="' +
      ck + '">' + esc(CATEGORIES[ck].name) + " (" + n + ")</a>";
  });
  return '<div class="dir-filters" role="group" aria-label="Filter by category">' + chips + "</div>" +
    '<p class="dir-filter-status notice" id="area-filter-status" role="status" tabindex="-1" hidden></p>';
}

function areaFiltersPanel(list, areaSlug) {
  var inner = areaFiltersBar(list, areaSlug);
  if (!inner) return "";
  return '<details class="corridor-panel filter-panel">' +
    '<summary class="corridor-panel__title">Filter by category</summary>' +
    '<div class="corridor-panel__body">' + inner + "</div></details>";
}

function dirFiltersBar(list, areaKeys, catKey) {
  var has24 = list.some(function (b) { return b.c24; });
  if (!has24 && areaKeys.length < 2) return "";
  var base = "/" + catKey + "/";
  var chips =
    '<a href="' + base + '" class="chip chip-link dir-filter is-active" data-dir-filter="all">All (' +
    list.length + ")</a>";
  if (has24) {
    var n24 = list.filter(function (b) { return b.c24; }).length;
    chips += '<a href="' + base + '?filter=24h" class="chip chip-link dir-filter" data-dir-filter="24h">' +
      "24-hour (" + n24 + ")</a>";
  }
  areaKeys.forEach(function (ak) {
    var n = list.filter(function (b) { return b.areas.indexOf(ak) !== -1; }).length;
    if (!n) return;
    chips += '<a href="' + base + "?filter=" + encodeURIComponent("area:" + ak) +
      '" class="chip chip-link dir-filter" data-dir-filter="area:' + ak + '">' +
      esc(AREAS[ak].name) + " (" + n + ")</a>";
  });
  return '<div class="dir-filters" role="group" aria-label="Filter listings">' + chips + "</div>" +
    '<p class="dir-filter-status notice" id="dir-filter-status" role="status" tabindex="-1" hidden></p>';
}

function dirFiltersPanel(list, areaKeys, catKey) {
  var inner = dirFiltersBar(list, areaKeys, catKey);
  if (!inner) return "";
  return '<details class="corridor-panel filter-panel">' +
    '<summary class="corridor-panel__title">Filter listings</summary>' +
    '<div class="corridor-panel__body">' + inner + "</div></details>";
}

function bizCard(b) {
  var areas = b.areas.length ? b.areas.map(areaName).join(", ") : "Serves all Thailand";
  return '<article class="biz-card" data-dir-tags="' + esc(bizDirTags(b)) + '" data-dir-cat="' +
    esc(b.category) + '"><div class="biz-top">' +
    "<div><h3><a href=\"" + bizUrl(b) + "\">" + esc(b.name) + "</a></h3>" +
    '<p class="biz-sub">' + esc(b.type) + " &middot; " + esc(areas) + "</p></div>" +
    (b.c24 ? '<span class="badge-24h">24 hr</span>' : "") +
    "</div><p>" + esc(firstSentence(b.summary)) + "</p>" +
    '<div class="biz-facts">' + verdictBadge(b) + contactChip(b) +
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
  var contacts = contactRows(b);
  contacts.forEach(function (r) { rows.push(r); });
  if (b.website) rows.push(["Website",
    '<a href="' + b.website + '" target="_blank" rel="noopener nofollow">Official site</a>']);
  if (!contacts.length && !b.website) {
    rows.push(["Contact", "No verified public phone or website listed &mdash; confirm when booking."]);
  }
  rows.push(["Languages", esc(b.languages)]);
  return '<div class="table-wrap"><table class="facts-table">' +
    '<caption class="visually-hidden">Key facts for ' + esc(b.name) + "</caption><tbody>" +
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
  if (b.c24 && b.tel) s.telephone = b.tel;
  if (b.website) s.sameAs = [b.website];
  if (b.c24) s.openingHours = "Mo-Su 00:00-23:59";
  return s;
}

const pages = [];

const FACTS_UPDATED = "2026-05-31";

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
    bizContactActions(b) +
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
      : b.category === "groomers"
      ? (b.type.toLowerCase().indexOf("mobile") !== -1
        ? '<div class="callout callout-note"><div class="ch">Mobile grooming</div><p>The van comes to your address &mdash; confirm parking access, service zone and any travel surcharge when booking. Humidity drives ' +
          '<a href="/pet-health-pattaya/skin-and-ear-problems.html">skin and ear problems</a> here &mdash; ' +
          "a groomer who spots early signs is worth keeping.</p></div>"
        : '<div class="callout callout-note"><div class="ch">Skin &amp; ears in the heat</div><p>Humidity drives ' +
          '<a href="/pet-health-pattaya/skin-and-ear-problems.html">skin and ear problems</a> here &mdash; ' +
          "a groomer who spots early signs is worth keeping.</p></div>")
      : b.category === "pet-relocation"
      ? '<div class="callout callout-note"><div class="ch">Import &amp; export guides</div><p>See our guides to ' +
        '<a href="/bring-pet-to-thailand/">bringing a pet to Thailand</a>, the ' +
        '<a href="/take-pet-out-of-thailand/export-process.html">export process</a>, ' +
        '<a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a>, ' +
        '<a href="/bring-pet-to-thailand/airline-pet-policies.html">airline pet policies</a>, ' +
        'and the <a href="/bring-pet-to-thailand/checklist.html">import checklist</a>.</p></div>'
      : b.category === "boarding"
      ? '<div class="callout callout-note"><div class="ch">Alternatives to boarding</div><p>Cats especially may ' +
        "do better with an " +
        '<a href="/owning-a-pet-in-pattaya/pet-sitters-and-dog-walkers.html">in-home pet sitter</a>. ' +
        'See also <a href="/cats/cat-boarding-pattaya.html">cat boarding and sitters</a>. ' +
        'Moving internationally? See <a href="/bring-pet-to-thailand/">bringing a pet to Thailand</a>.</p></div>'
      : b.category === "pet-shops"
      ? '<div class="callout callout-note"><div class="ch">Supplies &amp; ID</div><p>See ' +
        '<a href="/owning-a-pet-in-pattaya/where-to-buy-pet-food.html">where to buy pet food</a> and ' +
        '<a href="/owning-a-pet-in-pattaya/microchipping-your-pet.html">microchipping your pet</a>.</p></div>'
      : b.category === "trainers"
      ? '<div class="callout callout-note"><div class="ch">Training &amp; walks</div><p>Starting early? See ' +
        '<a href="/dogs/puppy-care-pattaya.html">puppy care in Pattaya</a> and ' +
        '<a href="/pet-emergency/street-dog-encounters.html">street-dog encounters</a>.</p></div>'
      : b.category === "mobile-vets"
      ? '<div class="callout callout-note"><div class="ch">When a clinic is still needed</div><p>Home visits suit routine care; emergencies and surgery still mean a ' +
        '<a href="/pet-emergency/24-hour-vets-pattaya.html">24-hour animal hospital</a>.</p></div>'
      : "") +
    '<div class="disclaimer-box"><strong>Editorial and informational only.</strong> ' +
    "PattayaPets is not a veterinary practice and does not give veterinary advice. " +
    "This listing describes a business, not medical quality. Always consult a " +
    "qualified veterinarian.</div>" +
    '<p class="notice" style="margin-top:1.2rem">Wrong phone, closed, or moved? ' +
    '<a href="/corrections.html">Tell us on the corrections page</a> &mdash; we update facts when we can verify them.</p>' +
    '<p class="updated">' + (b.reviewed ? "Reviewed " + fmtDate(b.reviewed) :
      "Facts compiled " + fmtDate(FACTS_UPDATED)) + "</p>" +
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
    bizGuidesSidebar(b.category) +
    sidebarLinkPanels(linkTopicForCategory(b.category), { internalLimit: 5, networkLimit: 4 }) +
    "</div></aside>" +
    "</div></div></section>";

  pages.push({
    path: bizUrl(b),
    title: bizPageTitle(b, cat),
    ogTitle: b.name + " - " + b.type + " in Pattaya",
    description: clampDesc(firstSentence(b.summary)),
    crumb: b.name,
    breadcrumbs: [
      { name: "Directory", path: "/directory.html" },
      { name: cat.name, path: "/" + cat.slug + "/" }
    ],
    updated: FACTS_UPDATED,
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
    "<h1>" + esc(HUB_TITLE[key] || cat.name) + "</h1>" +
    '<p class="lede">' + esc(cat.intro) + "</p>" +
    hubQuickBar(linkTopicForCategory(key));

  if (key === "vets") {
    body += '<div class="callout callout-emergency"><div class="ch">Need a vet right now?</div>' +
      "<p>For urgent, after-hours help see " +
      '<a href="/pet-emergency/24-hour-vets-pattaya.html">24-hour vets in ' +
      "Pattaya</a> or " +
      '<a href="/vets/?filter=24h">show only 24-hour clinics</a> in this directory. ' +
      "Listings marked <span class=\"badge-24h\">24 hr</span> operate around the clock.</p></div>" +
      '<div class="corridor-quick-bar corridor-quick-bar--sticky btn-row" role="navigation" aria-label="Vet directory shortcuts">' +
      '<a class="btn btn-alert" href="/pet-emergency/24-hour-vets-pattaya.html">24-hour vets</a>' +
      '<a class="btn btn-primary" href="/vets/?filter=24h">24-hour filter</a>' +
      '<a class="btn btn-ghost" href="/mobile-vets/">Mobile vets</a>' +
      '<a class="btn btn-ghost" href="#dir-listings">All listings</a></div>';
  }
  body += "</div></section>";

  if (key === "mobile-vets") { body += MOBILE_VETS_INTRO; }

  if (list.length) {
    body += '<section class="section section-tint"><div class="container">' +
      '<div class="section-head"><h2>' + list.length + " listed " +
      (list.length === 1 ? cat.one : cat.one + "s") + "</h2>" +
      "<p>Every listing is a verified facts page. Verdicts follow an anonymous " +
      "visit.</p></div>" +
      '<div class="filters-sticky">' + dirFiltersPanel(list, areaKeys, key) + "</div>" +
      '<div class="grid grid-2 dir-listings" id="dir-listings">' + list.map(bizCard).join("") + "</div>";
    if (areaKeys.length) {
      body += '<div class="section-head" style="margin-top:2rem" id="area"><h2>Browse by area</h2></div>' +
        '<div class="chips">' + areaKeys.map(function (ak) {
          return '<a class="chip chip-link" href="/' + key + "/?filter=" +
            encodeURIComponent("area:" + ak) + '">' + esc(AREAS[ak].name) + "</a>";
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
  if (key === "pet-relocation") body += corridorChipsSection();
  body += catGuidesSection(key);
  body += catCrossSection(key);
  body += inPageLinkSection(linkTopicForCategory(key));

  body += '<section class="section"><div class="container">' +
    '<div class="disclaimer-box"><strong>Editorial and informational only.</strong> ' +
    "Listings describe the business experience, not veterinary medical quality. " +
    "Always consult a qualified veterinarian.</div></div></section>";

  pages.push({
    path: "/" + cat.slug + "/",
    title: (HUB_TITLE[key] || cat.name) + " | PattayaPets",
    ogTitle: HUB_TITLE[key] || cat.name,
    image: HUB_OG[key],
    description: clampDesc(HUB_DESC[key] || cat.intro),
    crumb: cat.name,
    breadcrumbs: [{ name: "Directory", path: "/directory.html" }],
    updated: "2026-06-03",
    body: body
  });
});

/* ---- area hub pages ---- */
Object.keys(AREAS).forEach(function (key) {
  var area = AREAS[key];
  var list = BUSINESSES.filter(function (b) { return b.areas.indexOf(key) !== -1; });
  var countLabel = list.length === 1 ? "1 business" : list.length + " businesses";

  var body =
    '<section class="section"><div class="container">' +
    '<p class="eyebrow">By area</p>' +
    "<h1>Pet services in " + esc(area.name) + ", Pattaya</h1>" +
    '<p class="lede">' + esc(area.blurb) + " Below are the " + countLabel +
    " PattayaPets currently lists in " + esc(area.name) + ".</p>" +
    areaHubQuickBar(key) +
    areaDirQuickLinks(key, list) +
    "</div></section>";

  if (AREA_GUIDE[key]) {
    body += '<section class="section"><div class="container">' +
      '<div class="prose">' + AREA_GUIDE[key] + "</div></div></section>";
  }

  if (list.length) {
    body += '<section class="section section-tint"><div class="container">' +
      '<div class="filters-sticky">' + areaFiltersPanel(list, key) + "</div>" +
      '<div id="area-listings">';
    Object.keys(CATEGORIES).forEach(function (ck) {
      var inCat = list.filter(function (b) { return b.category === ck; });
      if (!inCat.length) return;
      body += '<div class="dir-cat-block" data-dir-cat="' + ck + '">' +
        '<div class="section-head" style="margin-top:1.4rem"><h2>' +
        esc(CATEGORIES[ck].name) + "</h2></div>" +
        '<div class="grid grid-2">' + inCat.map(bizCard).join("") + "</div></div>";
    });
    var missing = Object.keys(CATEGORIES).filter(function (ck) {
      return !list.some(function (b) { return b.category === ck; });
    });
    if (missing.length) {
      body += '<div class="callout callout-note" style="margin-top:1.6rem">' +
        '<div class="ch">Not listed in ' + esc(area.name) + " yet</div>" +
        "<p>PattayaPets adds businesses only after verifying their facts. For categories " +
        "with no " + esc(area.name) + " listing yet, these are the nearest options we " +
        "currently list:</p><ul>" +
        missing.map(function (ck) {
          return "<li><strong>" + esc(CATEGORIES[ck].name) + ":</strong> " +
            missingCategoryHint(key, ck) + "</li>";
        }).join("") +
        "</ul></div>";
    }
    body += "</div></div></section>";
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
    '<div class="prose"><p>Planning ahead? See our list of ' +
    '<a href="/pet-emergency/24-hour-vets-pattaya.html">24-hour vets in Pattaya</a>, ' +
    'the <a href="/pet-health-pattaya/">pet health guide</a>, ' +
    '<a href="/owning-a-pet-in-pattaya/">owning a pet in Pattaya</a>, ' +
    '<a href="/dog-friendly-pattaya/">dog-friendly Pattaya</a>, ' +
    '<a href="/bring-pet-to-thailand/">bringing a pet to Thailand</a>, the ' +
    '<a href="/take-pet-out-of-thailand/export-process.html">export process</a>, ' +
    '<a href="/pet-relocation/">pet relocation agents</a>, and ' +
    '<a href="/adopt-a-pet-pattaya/">adopting a pet</a>. Species guides: ' +
    '<a href="/dogs/">dogs</a> and <a href="/cats/">cats</a>. New here? Start with ' +
    '<a href="/start-here.html">Start here</a> or the ' +
    '<a href="/guides.html?topic=start">orientation guides</a>.</p></div>' +
    '<div class="section-head"><h2>Every category</h2></div><div class="chips">' +
    Object.keys(CATEGORIES).map(function (ck) {
      var inArea = list.some(function (b) { return b.category === ck; });
      var href = inArea
        ? "/" + ck + "/?filter=" + encodeURIComponent("area:" + key)
        : "/" + ck + "/";
      return '<a class="chip chip-link" href="' + href + '">' +
        esc(CATEGORIES[ck].name) + "</a>";
    }).join("") + "</div>" +
    '<div class="disclaimer-box"><strong>Editorial and informational only.</strong> ' +
    "Always consult a qualified veterinarian for your pet&rsquo;s health.</div>" +
    "</div></section>" +
    inPageLinkSection("directory");

  pages.push({
    path: "/area/" + key + ".html",
    title: "Pet Vets & Services in " + area.name + ", Pattaya | PattayaPets",
    ogTitle: "Pet services in " + area.name + ", Pattaya",
    description: "Find vets, groomers, boarding, pet shops and pet services in " +
      area.name + ", Pattaya. " + area.blurb,
    crumb: area.name,
    breadcrumbs: [{ name: "Directory", path: "/directory.html" }],
    updated: "2026-06-04",
    body: body
  });
});

module.exports = pages;
