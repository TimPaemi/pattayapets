"use strict";
/* Extra topic guides for the "Bringing a pet to Thailand" cluster:
   snub-nosed breeds and flying, and the Thailand quarantine question. */

const { article } = require("../guidekit.js");
const rb = require("../data/richness-blocks.js");
const {
  claimLink,
  REGULATED_IMPORT_PATTAYA_ARRIVAL,
  REGULATED_IMPORT_PATTAYA_LIFE,
  REGULATED_IMPORT_EXTRA_FAQS
} = require("../data/regulated-claims.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const CLUSTER = { name: "Bringing a pet to Thailand", path: "/bring-pet-to-thailand/" };
const SUB = [GUIDES, CLUSTER];

const VERIFY =
  "The scoped Thai import claims and authority links cited on this page were checked " +
  "on 1 August 2026. Thailand's Department of Livestock Development, " +
  "airlines and origin-country authorities change their rules without notice. Treat " +
  "this as orientation, then confirm every current requirement with the DLD, your " +
  "airline and your origin-country authority before you book or travel.";

const OFFICIAL =
  "<p><strong>Official sources to verify against:</strong> " +
  claimLink("TH-IMPORT-SEQUENCE-2026-02", "Thai consular import guide") +
  " (detailed scope: dogs, cats and rabbits from the United States); " +
  claimLink("TH-AQS-MAP-2025-10", "DLD AQS map") + ".</p>";

const RELATED = [
  { name: "The full process", path: "/bring-pet-to-thailand/", desc: "Every step, in order." },
  { name: "DLD import permit", path: "/bring-pet-to-thailand/import-permit-thailand-dld.html", desc: "The Thai-side permit you apply for." },
  { name: "Microchip requirements", path: "/bring-pet-to-thailand/microchip-requirements.html", desc: "Step one — which has to come first." },
  { name: "Airline pet policies", path: "/bring-pet-to-thailand/airline-pet-policies.html", desc: "Cabin, checked baggage or cargo, and travel crates." },
  { name: "Arriving in Thailand", path: "/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html", desc: "The quarantine-station check on landing." },
  { name: "What it costs", path: "/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html", desc: "Budget for the whole move." },
  { name: "Pet quarantine", path: "/bring-pet-to-thailand/thailand-pet-quarantine.html", desc: "When pets do and do not quarantine on arrival." },
  { name: "Rabies & titer test", path: "/bring-pet-to-thailand/rabies-vaccination-titer-test.html", desc: "Why the titer test matters for the return trip." },
  { name: "The export process", path: "/take-pet-out-of-thailand/export-process.html", desc: "The Thai DLD side when you leave." }
];

const pages = [];

function importTopic(o) {
  var sections = (o.sections || []).slice();
  if (!o.skipRichness) {
    sections.push(REGULATED_IMPORT_PATTAYA_ARRIVAL);
    sections.push(REGULATED_IMPORT_PATTAYA_LIFE);
  }
  if (!o.skipOfficial) {
    sections.push({ h: "Official sources", html: (o.officialExtra || "") + OFFICIAL });
  }
  return article(Object.assign({}, o, {
    sections: sections,
    faqs: rb.mergeFaqs(o.faqs, REGULATED_IMPORT_EXTRA_FAQS),
    updated: o.updated || "2026-06-01"
  }));
}

/* ---------------- SNUB-NOSED BREEDS ---------------- */
pages.push(article({
  path: "/bring-pet-to-thailand/snub-nosed-breeds-flying.html",
  title: "Flying Snub-Nosed Pets to Thailand | PattayaPets",
  desc: "Why flat-faced (brachycephalic) breeds need extra care when flying to " +
    "Thailand, airline restrictions, and how to lower the risk.",
  crumb: "Snub-nosed breeds",
  breadcrumbs: SUB,
  eyebrow: "Bringing a pet to Thailand",
  h1: "Flying a snub-nosed breed to Thailand",
  updated: "2026-08-01",
  lede: "If you own a flat-faced pet, the airline part of the move needs careful " +
    "research before you commit to anything else.",
  verify: VERIFY,
  sections: [
    { h: "Which pets this affects", html:
      "<p>&lsquo;Snub-nosed&rsquo; or <strong>brachycephalic</strong> means " +
      "flat-faced, short-muzzled breeds. On the dog side that includes pugs, " +
      "French and English bulldogs, Boston terriers, boxers, Pekingese and shih " +
      "tzus; among cats, Persians and Himalayans. Their shortened airways make " +
      "breathing less efficient than in a longer-nosed animal &mdash; and that is " +
      "the whole reason air travel needs extra thought for them.</p>" },
    { h: "Why flying is higher-risk for them", html:
      "<p>Air travel means stress, confinement and, in the cargo hold, real swings " +
      "in temperature and air. A brachycephalic pet copes less well with heat and " +
      "stress than other pets, because its airway has less margin to spare. That " +
      "is not a reason these pets cannot travel &mdash; many do &mdash; but it is " +
      "the reason the journey has to be planned, not improvised.</p>" },
    { h: "Airlines often restrict these breeds", html:
      "<p>Because of that risk, <strong>many airlines restrict or refuse " +
      "snub-nosed breeds</strong>, especially in the cargo hold. Policies vary a " +
      "great deal between carriers and change over time. Do not assume your " +
      "airline will carry your flat-faced pet: checking the specific " +
      "airline&rsquo;s <a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">" +
      "current policy</a> should be one of the first things you do, before you " +
      "book flights or fix a moving date.</p>" },
    { h: "Container and acceptance checks", html:
      "<p>Obtain an individual fitness-to-travel assessment from a veterinarian and " +
      "written acceptance from the operating airline. For a snub-nosed animal, IATA " +
      "Container Requirement 1, Edition 52, says the container must be <strong>10% " +
      "larger</strong> than normally required. CR1 also covers escape-proof construction, " +
      "metal door fasteners, ventilation, spacers, bedding and water. IATA does not " +
      "approve crate brands; the airline makes the final acceptance decision. " +
      claimLink("IATA-CR1-ED52-2026-01", "IATA CR1, Edition 52") + ".</p>" +
      "<p>Ask the veterinarian and airline about routing, temperature restrictions, " +
      "sedation policy and any breed embargo. This page has not clinically assessed " +
      "your animal and does not promise that a particular itinerary is safe.</p>" },
    { h: "If your airline will not carry your pet", html:
      "<p>If your first-choice airline says no, you have options: another carrier " +
      "with a different policy, a different routing, or a " +
      "<a href=\"/pet-relocation/\">pet relocation specialist</a> experienced in " +
      "moving brachycephalic pets. The key is to find this out <em>early</em>, so " +
      "it shapes your plan rather than derailing it.</p>" },
    { h: "What comes next", html:
      "<p>With airline clearance sorted, work through the " +
      '<a href="/bring-pet-to-thailand/">full import process</a>, the ' +
      '<a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a>, ' +
      'and <a href="/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html">arrival at Suvarnabhumi</a>.</p>' },
    { h: "Official sources", html: OFFICIAL }
  ],
  faqs: [
    ["Which breeds count as snub-nosed?",
     "<p>Flat-faced, short-muzzled breeds &mdash; dogs such as pugs, French and English bulldogs, Boston terriers, boxers, Pekingese and shih tzus, and cats such as Persians and Himalayans. Their shorter airways are why air travel needs extra care.</p>"],
    ["Will an airline fly my flat-faced dog to Thailand?",
     "<p>It depends entirely on the airline. Many restrict or refuse snub-nosed breeds, particularly in cargo, and policies differ and change. Check the specific airline's current policy before you book anything.</p>"],
    ["How can I make the flight safer for a snub-nosed pet?",
     "<p>Ask a veterinarian to assess the individual animal and obtain written airline acceptance for the exact itinerary. Follow IATA CR1 and the carrier&rsquo;s rules; CR1 requires a snub-nosed animal&rsquo;s container to be 10% larger than normally required. No checklist can make an unsuitable animal or route safe.</p>"],
    ["Are airline embargoes seasonal for snub-nosed pets?",
     "<p>Many carriers restrict hold travel during hot months regardless of breed. Flat-faced pets face extra limits — confirm seasonal rules when you quote the route.</p>"],
    ["Should I get a fitness certificate for a brachycephalic pet?",
     "<p>A pre-travel vet check is wise and may be required by the airline. The vet can confirm breathing and fitness for the planned mode of travel.</p>"]
  ],
  related: [
    { name: "Airline pet policies", path: "/bring-pet-to-thailand/airline-pet-policies.html", desc: "Which carriers allow flat-faced breeds." },
    { name: "Import checklist", path: "/bring-pet-to-thailand/checklist.html", desc: "The full step-by-step plan." },
    { name: "Pet quarantine", path: "/bring-pet-to-thailand/thailand-pet-quarantine.html", desc: "What happens on arrival." },
    { name: "What import costs", path: "/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html", desc: "Budgeting the move." },
    { name: "Choosing a dog for the climate", path: "/dogs/choosing-a-dog-for-the-climate.html", desc: "Why brachycephalic breeds struggle in the heat." },
    { name: "Pet relocation agents", path: "/pet-relocation/", desc: "Specialists experienced with restricted breeds." }
  ]
}));

/* ---------------- THAILAND QUARANTINE ---------------- */
pages.push(importTopic({
  path: "/bring-pet-to-thailand/thailand-pet-quarantine.html",
  title: "Thailand Pet Quarantine on Arrival (2026) | PattayaPets",
  desc: "Whether Thailand quarantines imported pets, what really happens at the " +
    "Animal Quarantine Station on arrival, and what can cause a pet to be held.",
  crumb: "Pet quarantine",
  breadcrumbs: SUB,
  eyebrow: "Bringing a pet to Thailand",
  h1: "Is there pet quarantine in Thailand?",
  lede: "DLD inspects the animal and original documents on arrival. Complete paperwork " +
    "does not justify a promise of same-day release or a guarantee against detention.",
  verify: VERIFY,
  sections: [
    { h: "The short answer", html:
      "<p>The AQS performs an arrival inspection. The current scoped Thai source does " +
      "not publish a guaranteed release time or a universal detention duration. DLD " +
      "decides the action for the animal and documents presented. " +
      claimLink("TH-ARRIVAL-INSPECTION-2026-02", "Thai source") + ".</p>" },
    { h: "What actually happens on arrival", html:
      "<p>When you land, your pet and its documents go to the airport&rsquo;s " +
      "Department of Livestock Development <strong>Animal Quarantine Station</strong>. " +
      "An officer checks that the microchip scans, that the rabies and other " +
      "vaccinations are in order, and that the health certificate and import " +
      "permit match the animal in front of them. The scoped source states an import-licence " +
      "fee of <strong>500&nbsp;baht per animal</strong>, but it does not guarantee a " +
      "release outcome or time. " + claimLink("TH-ARRIVAL-INSPECTION-2026-02", "Thai source") + ". See " +
      "<a href=\"/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html\">" +
      "arriving in Thailand</a> for the full picture.</p>" },
    { h: "When a hold or quarantine can happen", html:
      "<p>The risk arises when the <strong>paperwork is wrong, missing or " +
      "inconsistent</strong>. Problems include an identifier that does not scan or " +
      "does not match the implantation and vaccination records, a missing " +
      "or invalid import permit, a health certificate that is out of date or not " +
      "properly endorsed, or a requirement simply not met. In those cases the DLD " +
      "may hold the pet, require extra steps, impose a quarantine period, or &mdash; " +
      "in the worst case &mdash; refuse entry. That is exactly why the paperwork " +
      "has to be right.</p>" },
    { h: "Reduce avoidable document problems", html:
      "<p>Follow the <a href=\"/bring-pet-to-thailand/\">import process</a>: obtain an " +
      "implantation certificate whose identifier matches every record; complete all " +
      "required primary vaccinations; wait at least 21 days before the permit application " +
      "(documented boosters are exempt when continuity is shown); then arrange the " +
      "<a href=\"/bring-pet-to-thailand/health-certificate.html\">health certificate</a>, " +
      "and the " +
      "<a href=\"/bring-pet-to-thailand/import-permit-thailand-dld.html\">DLD " +
      "import permit</a> in advance, keep the original documents together and " +
      "accessible. An agent is optional and cannot guarantee DLD clearance. Confirm " +
      "the current requirements with the DLD before travel. " +
      claimLink("TH-IMPORT-SEQUENCE-2026-02", "Thai source") + ".</p>" },
    { h: "What comes next", html:
      "<p>Read <a href=\"/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html\">what happens on arrival</a> and budget in our " +
      "<a href=\"/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html\">import cost guide</a>. " +
      "Planning to leave again? Start the " +
      "<a href=\"/take-pet-out-of-thailand/export-process.html\">export process</a> early.</p>" },
    { h: "Official sources", html: OFFICIAL }
  ],
  skipOfficial: true,
  faqs: [
    ["Will my pet be quarantined when it arrives in Thailand?",
     "<p>DLD decides after the AQS inspection. Complete paperwork reduces avoidable problems but does not guarantee same-day release or rule out detention. The reviewed source does not publish one universal detention duration.</p>"],
    ["What happens at the Animal Quarantine Station?",
     "<p>A DLD officer compares the animal&rsquo;s identifier, vaccination records, health certificate and permit. DLD then determines the action; this guide does not promise an outcome or duration.</p>"],
    ["What could cause my pet to be held or quarantined?",
     "<p>An identifier that does not scan or match the records, a missing permit, an invalid or improperly endorsed certificate, unmet vaccination conditions, or an animal that does not meet inspection requirements can trigger further DLD action.</p>"],
    ["How much does AQS clearance cost on arrival?",
     "<p>The inspection fee is currently 500 baht — confirm with the station before you travel. That is separate from airline, vet and transfer costs.</p>"],
    ["Can a relocation agent handle quarantine clearance for me?",
     "<p>Ask an agent for an itemised scope if you want representation. An agent is optional, cannot replace the required records and cannot guarantee DLD clearance; PattayaPets has not measured agent outcomes.</p>"]
  ],
  related: [
    { name: "Arriving at Suvarnabhumi", path: "/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html", desc: "What the AQS check looks like on landing." },
    { name: "DLD import permit", path: "/bring-pet-to-thailand/import-permit-thailand-dld.html", desc: "The permit that must be in place before you fly." },
    { name: "Import checklist", path: "/bring-pet-to-thailand/checklist.html", desc: "Printable step-by-step checklist." },
    { name: "The export process", path: "/take-pet-out-of-thailand/export-process.html", desc: "The Thai DLD side when you leave." },
    { name: "Microchip requirements", path: "/bring-pet-to-thailand/microchip-requirements.html", desc: "The implantation certificate and identifier matching." },
    { name: "What import costs", path: "/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html", desc: "Budgeting the whole move." }
  ]
}));

/* ---------------- CHECKLIST ---------------- */
pages.push(article({
  path: "/bring-pet-to-thailand/checklist.html",
  title: "Bring a Pet to Thailand: Printable Checklist | PattayaPets",
  desc: "Printable pet import checklist for Thailand: microchip, rabies, DLD import " +
    "permit (R1/1), health certificate, airline booking and arrival steps for Pattaya.",
  crumb: "Import checklist",
  breadcrumbs: SUB,
  eyebrow: "Bringing a pet to Thailand",
  h1: "Pet import to Thailand checklist",
  updated: "2026-08-01",
  lede: "Use this as a working checklist while you plan. Every step links to the " +
    "full guide. The Thai sequence and destination-specific return planning both matter.",
  verify: VERIFY,
  sections: [
    { h: "August 2026 review", html:
      '<div class="callout callout-tip"><div class="ch">What we checked this update</div>' +
      "<p>The current scoped Thai guide says: complete all required primary vaccinations; " +
      "wait at least 21 days; then apply for the permit and allow 5&ndash;7 Thai business " +
      "days. Documented boosters are exempt from the wait when continuity is shown. It " +
      "requires an implantation certificate and matching identifier, but does not state " +
      "a universal ISO-format, chip-before-vaccination or three-day arrival-confirmation rule. " +
      "Its detailed scope is dogs, cats and rabbits from the United States, so other origins " +
      "must confirm with their AQS and origin authority. " +
      claimLink("TH-IMPORT-SEQUENCE-2026-02", "Thai source") + ".</p></div>" },
    { h: "Before you book anything", html:
      "<ol>" +
      "<li>Read the <a href=\"/bring-pet-to-thailand/\">full import guide</a>.</li>" +
      "<li>Confirm your <strong>airline</strong> will carry your pet on your route &mdash; " +
      "see <a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">airline pet policies</a> " +
      "and <a href=\"/bring-pet-to-thailand/snub-nosed-breeds-flying.html\">snub-nosed breeds</a>.</li>" +
      "<li>Confirm an accepted arrival AQS. The reviewed official sources do not establish " +
      "a U-Tapao pet-import AQS; see <a href=\"/bring-pet-to-thailand/u-tapao-airport-pets.html\">U-Tapao or Bangkok</a>.</li>" +
      "<li>Budget with our <a href=\"/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html\">import cost guide</a>.</li>" +
      "</ol>" },
    { h: "The paperwork sequence (order matters)", html:
      "<ol>" +
      "<li><strong>Microchip</strong> &mdash; obtain the implantation certificate and use " +
      "the same identifier on every record. The reviewed Thai source does not state a " +
      "universal ISO-format or chip-before-rabies rule. " +
      "<a href=\"/bring-pet-to-thailand/microchip-requirements.html\">Microchip guide</a></li>" +
      "<li><strong>All required primary vaccinations</strong> &mdash; complete the full " +
      "species-specific set, then wait at least 21 days before the permit application. " +
      "Documented boosters are exempt when continuity is shown. " +
      "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">Rabies and titer guide</a></li>" +
      "<li><strong>Return-country planning</strong> &mdash; a titer and wait can apply for " +
      "UK or EU return. Australia instead requires an approved-country pathway; do not " +
      "assume a test performed in Thailand qualifies. " +
      claimLink("AU-NONAPPROVED-PATH-2026-08", "DAFF FAQ") + ".</li>" +
      "<li><strong>Health certificate</strong> &mdash; within the validity window; endorsed by your " +
      "origin-country authority. " +
      "<a href=\"/bring-pet-to-thailand/health-certificate.html\">Health certificate guide</a></li>" +
      "<li><strong>DLD import permit</strong> &mdash; after the primary-vaccination wait, " +
      "file R1/1 as the arrival AQS directs and allow the scoped guide&rsquo;s 5&ndash;7 Thai business days. " +
      "<a href=\"/bring-pet-to-thailand/import-permit-thailand-dld.html\">Import permit guide</a></li>" +
      "</ol>" },
    { h: "Two weeks before departure", html:
      "<ul>" +
      "<li>Follow the responsible AQS&rsquo;s current itinerary-notification instructions; the reviewed source gives no universal three-day rule.</li>" +
      "<li>Re-read every document against the DLD and airline requirements.</li>" +
      "<li>Confirm the container against current IATA CR1 and the operating airline; IATA does not approve crate brands. " + claimLink("IATA-CR1-ED52-2026-01", "IATA CR1") + ".</li>" +
      "<li>Carry copies of every certificate, permit and endorsement in hand luggage.</li>" +
      "<li>Save Animal Quarantine Station contacts from the " +
      "<a href=\"/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html\">arrival guide</a>.</li>" +
      "<li>If you may leave Thailand again, read the " +
      "<a href=\"/take-pet-out-of-thailand/\">export hub</a> and " +
      "<a href=\"/take-pet-out-of-thailand/checklist.html\">export checklist</a> early.</li>" +
      "</ul>" },
    { h: "On arrival in Thailand", html:
      "<ul>" +
      "<li>Clear the Animal Quarantine Station inspection &mdash; see " +
      "<a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">quarantine on arrival</a>.</li>" +
      "<li>Register the microchip locally when settled &mdash; " +
      "<a href=\"/owning-a-pet-in-pattaya/microchipping-your-pet.html\">microchipping in Pattaya</a>.</li>" +
      "<li>Find a vet for a post-arrival check &mdash; " +
      "<a href=\"/vets/\">Pattaya vets directory</a> or " +
      "<a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour hospitals</a>.</li>" +
      "</ul>" +
      "<p>An agent is optional. If used, request an itemised scope and verify government and airline requirements directly.</p>" },
    { h: "Common mistakes to avoid", html:
      "<ul>" +
      "<li><strong>Wrong order</strong> &mdash; applying before completing all primary vaccinations and the 21-day wait; documented boosters are the stated exception.</li>" +
      "<li><strong>Airline vs government</strong> &mdash; confirm both documentary sets before booking.</li>" +
      "<li><strong>Assuming a universal arrival-notification rule</strong> &mdash; follow the responsible AQS&rsquo;s current instructions.</li>" +
      "<li><strong>No return-trip plan</strong> &mdash; if you may leave Thailand again, start the titer test before you arrive. See the <a href=\"/take-pet-out-of-thailand/checklist.html\">export checklist</a>.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["How long before travel should I start?",
     "<p>The Thai source imposes at least 21 days after all required primary vaccinations before the permit application, then says to allow 5&ndash;7 Thai business days for a complete application. Airline and origin-export steps add route-specific time. Australia is a separate approved-country pathway.</p>"],
    ["Can I print this checklist?",
     "<p>Yes. Use your browser print function on this page. The step links stay useful on screen; for travel, keep PDF copies of every official certificate and permit instead.</p>"],
    ["What if my airline requires the permit before check-in?",
     "<p>Follow the carrier&rsquo;s written documentary rule and the arrival AQS&rsquo;s permit instructions. Carry the issued permit and original supporting records; do not rely on an unverified permit-on-arrival assumption.</p>"],
    ["Do cats need the same vaccines as dogs?",
     "<p>Cats need rabies and FVRCP; dogs need rabies plus DHPP and leptospirosis (or a negative leptospirosis test within 30 days). See our <a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">vaccination guide</a>.</p>"],
    ["Which airport is best for Pattaya?",
     "<p>Suvarnabhumi is documented in the reviewed sources. Those sources do not establish a U-Tapao pet-import AQS, so obtain written DLD confirmation before considering it. See <a href=\"/bring-pet-to-thailand/u-tapao-airport-pets.html\">U-Tapao or Bangkok</a>.</p>"]
  ],
  related: [
    { name: "The full process", path: "/bring-pet-to-thailand/", desc: "Every step with full detail." },
    { name: "Snub-nosed breeds & flying", path: "/bring-pet-to-thailand/snub-nosed-breeds-flying.html", desc: "Airline restrictions for flat-faced pets." },
    { name: "Pet quarantine", path: "/bring-pet-to-thailand/thailand-pet-quarantine.html", desc: "What happens at the AQS on arrival." },
    { name: "U-Tapao or Bangkok?", path: "/bring-pet-to-thailand/u-tapao-airport-pets.html", desc: "Which airport to fly into for Pattaya." },
    { name: "DLD import permit", path: "/bring-pet-to-thailand/import-permit-thailand-dld.html", desc: "The Thai-side permit." },
    { name: "Export checklist", path: "/take-pet-out-of-thailand/checklist.html", desc: "Planning the return journey." },
    { name: "The export process", path: "/take-pet-out-of-thailand/export-process.html", desc: "The Thai DLD side when you leave." },
    { name: "Pet relocation agents", path: "/pet-relocation/", desc: "Specialists who handle paperwork and flights." }
  ]
}));

module.exports = pages;
