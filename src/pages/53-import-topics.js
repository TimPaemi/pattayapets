"use strict";
/* Extra topic guides for the "Bringing a pet to Thailand" cluster:
   snub-nosed breeds and flying, and the Thailand quarantine question. */

const { article } = require("../guidekit.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const CLUSTER = { name: "Bringing a pet to Thailand", path: "/bring-pet-to-thailand/" };
const SUB = [GUIDES, CLUSTER];

const VERIFY =
  "This guide was last reviewed on 30 May 2026 against the Thai embassy pet-import " +
  "guidance (revised January 2025), DLD Animal Quarantine Station contacts and " +
  "published export procedures. Thailand's Department of Livestock Development, " +
  "airlines and origin-country authorities change their rules without notice. Treat " +
  "this as orientation, then confirm every current requirement with the DLD, your " +
  "airline and your origin-country authority before you book or travel.";

const OFFICIAL =
  "<p><strong>Official sources to verify against:</strong> " +
  "<a href=\"https://thaiconsulatela.thaiembassy.org/en/publicservice/bringing-pets-to-thailand\" " +
  "target=\"_blank\" rel=\"noopener nofollow\">Thai embassy pet import guide</a> " +
  "(revised January 2025); DLD import application form <strong>R1/1</strong> (via the embassy guide or " +
  "<a href=\"https://aqi.dld.go.th/\" target=\"_blank\" rel=\"noopener nofollow\">" +
  "DLD Animal Quarantine stations</a>); Suvarnabhumi AQS import: " +
  "<a href=\"mailto:qsap_bkk_import@dld.go.th\">qsap_bkk_import@dld.go.th</a>.</p>";

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

/* ---------------- SNUB-NOSED BREEDS ---------------- */
pages.push(article({
  path: "/bring-pet-to-thailand/snub-nosed-breeds-flying.html",
  title: "Flying a snub-nosed pet to Thailand | PattayaPets",
  desc: "Why flat-faced (brachycephalic) breeds need extra care when flying to " +
    "Thailand, airline restrictions, and how to lower the risk.",
  crumb: "Snub-nosed breeds",
  breadcrumbs: SUB,
  eyebrow: "Bringing a pet to Thailand",
  h1: "Flying a snub-nosed breed to Thailand",
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
    { h: "Lowering the risk", html:
      "<p>If your pet can travel, stack the odds in its favour:</p>" +
      "<ul><li><strong>Fly direct</strong> where you can &mdash; fewer transfers " +
      "and less total time.</li>" +
      "<li><strong>Choose the cooler season and cooler times of day</strong> for " +
      "the journey.</li>" +
      "<li><strong>Consider cabin travel</strong> if your pet is small enough and " +
      "the airline allows it &mdash; it avoids the cargo hold entirely.</li>" +
      "<li><strong>Get a vet fitness check</strong> before travel, and use a " +
      "well-ventilated crate with room to breathe.</li>" +
      "<li><strong>Do not sedate</strong> without explicit veterinary guidance " +
      "&mdash; sedation can make breathing problems worse at altitude.</li></ul>" },
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
     "<p>Fly direct where possible, travel in the cooler season and hours, consider cabin travel if the pet is small enough, get a vet fitness check, use a well-ventilated crate, and never sedate without veterinary guidance.</p>"]
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
pages.push(article({
  path: "/bring-pet-to-thailand/thailand-pet-quarantine.html",
  title: "Is there pet quarantine in Thailand? | PattayaPets",
  desc: "Whether Thailand quarantines imported pets, what really happens at the " +
    "Animal Quarantine Station on arrival, and what can cause a pet to be held.",
  crumb: "Pet quarantine",
  breadcrumbs: SUB,
  eyebrow: "Bringing a pet to Thailand",
  h1: "Is there pet quarantine in Thailand?",
  lede: "It is one of the first worries owners have. For a pet that arrives with " +
    "correct paperwork, the reassuring answer is usually no &mdash; but the detail " +
    "matters.",
  verify: VERIFY,
  sections: [
    { h: "The short answer", html:
      "<p>For a pet that arrives with <strong>complete, correct paperwork</strong> " +
      "and that meets the requirements, Thailand does not normally impose a " +
      "quarantine stay. Arrival is a <strong>clearance check, not a kennel " +
      "sentence</strong>. The image many owners carry &mdash; weeks in a " +
      "government facility &mdash; is not what a compliant pet faces.</p>" },
    { h: "What actually happens on arrival", html:
      "<p>When you land, your pet and its documents go to the airport&rsquo;s " +
      "Department of Livestock Development <strong>Animal Quarantine Station</strong>. " +
      "An officer checks that the microchip scans, that the rabies and other " +
      "vaccinations are in order, and that the health certificate and import " +
      "permit match the animal in front of them. With everything correct, this is " +
      "an inspection and release &mdash; usually the same day, after payment of the " +
      "AQS inspection fee (currently <strong>500&nbsp;baht</strong> &mdash; confirm " +
      "the current amount with the station). See " +
      "<a href=\"/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html\">" +
      "arriving in Thailand</a> for the full picture.</p>" },
    { h: "When a hold or quarantine can happen", html:
      "<p>The risk arises when the <strong>paperwork is wrong, missing or " +
      "inconsistent</strong>. Common triggers include a microchip that does not " +
      "scan or that was implanted <em>after</em> the rabies vaccination, a missing " +
      "or invalid import permit, a health certificate that is out of date or not " +
      "properly endorsed, or a requirement simply not met. In those cases the DLD " +
      "may hold the pet, require extra steps, impose a quarantine period, or &mdash; " +
      "in the worst case &mdash; refuse entry. That is exactly why the paperwork " +
      "has to be right.</p>" },
    { h: "How to make arrival a formality", html:
      "<p>The whole <a href=\"/bring-pet-to-thailand/\">import process</a> is " +
      "designed so that arrival is straightforward. Get the sequence right &mdash; " +
      "<a href=\"/bring-pet-to-thailand/microchip-requirements.html\">microchip " +
      "before the rabies vaccination</a> &mdash; sort the " +
      "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">rabies " +
      "vaccination</a>, the " +
      "<a href=\"/bring-pet-to-thailand/health-certificate.html\">health certificate</a>, " +
      "and the " +
      "<a href=\"/bring-pet-to-thailand/import-permit-thailand-dld.html\">DLD " +
      "import permit</a> in advance, keep the original documents together and " +
      "accessible, and use a vet, or a " +
      "<a href=\"/pet-relocation/\">relocation agent</a>, experienced in the " +
      "process. Confirm the current requirements with the DLD before you " +
      "travel.</p>" },
    { h: "What comes next", html:
      "<p>Read <a href=\"/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html\">what happens on arrival</a> and budget in our " +
      "<a href=\"/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html\">import cost guide</a>. " +
      "Planning to leave again? Start the " +
      "<a href=\"/take-pet-out-of-thailand/export-process.html\">export process</a> early.</p>" },
    { h: "Official sources", html: OFFICIAL }
  ],
  faqs: [
    ["Will my pet be quarantined when it arrives in Thailand?",
     "<p>Generally not, if it arrives with complete, correct paperwork and meets the requirements. For a compliant pet, arrival is an inspection and same-day release at the Animal Quarantine Station, not a quarantine stay.</p>"],
    ["What happens at the Animal Quarantine Station?",
     "<p>A Department of Livestock Development officer checks the microchip, the vaccinations, the health certificate and the import permit against your pet. With everything in order, the pet is cleared to enter, usually the same day.</p>"],
    ["What could cause my pet to be held or quarantined?",
     "<p>Paperwork problems &mdash; a microchip that does not scan or was implanted after the rabies shot, a missing import permit, an out-of-date or improperly endorsed health certificate, or an unmet requirement. Getting the documents exactly right is what keeps arrival smooth.</p>"]
  ],
  related: [
    { name: "Arriving at Suvarnabhumi", path: "/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html", desc: "What the AQS check looks like on landing." },
    { name: "DLD import permit", path: "/bring-pet-to-thailand/import-permit-thailand-dld.html", desc: "The permit that must be in place before you fly." },
    { name: "Import checklist", path: "/bring-pet-to-thailand/checklist.html", desc: "Printable step-by-step checklist." },
    { name: "The export process", path: "/take-pet-out-of-thailand/export-process.html", desc: "The Thai DLD side when you leave." },
    { name: "Microchip requirements", path: "/bring-pet-to-thailand/microchip-requirements.html", desc: "Why the chip must come before the rabies jab." },
    { name: "What import costs", path: "/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html", desc: "Budgeting the whole move." }
  ]
}));

/* ---------------- CHECKLIST ---------------- */
pages.push(article({
  path: "/bring-pet-to-thailand/checklist.html",
  title: "Bring a Dog or Cat to Thailand: Printable Checklist | PattayaPets",
  desc: "Printable pet import checklist for Thailand: microchip, rabies, DLD import " +
    "permit (R1/1), health certificate, airline booking and arrival steps for Pattaya.",
  crumb: "Import checklist",
  breadcrumbs: SUB,
  eyebrow: "Bringing a pet to Thailand",
  h1: "Pet import to Thailand checklist",
  updated: "2026-05-30",
  updatedLabel: "30 May 2026",
  lede: "Use this as a working checklist while you plan. Every step links to the " +
    "full guide. Allow at least one to two months &mdash; longer if you may later " +
    "move your pet to the UK, EU or Australia.",
  verify: VERIFY,
  sections: [
    { h: "May 2026 review", html:
      '<div class="callout callout-tip"><div class="ch">What we checked this update</div>' +
      "<p>Cross-checked against the Thai embassy pet-import guide (revised January 2025) " +
      "and DLD AQS guidance: import permit window (7&ndash;60 days before departure, " +
      "valid 60 days once issued); form <strong>R1/1</strong>; dog vaccines including " +
      "leptospirosis (or a negative test within 30 days if not vaccinated); 21-day wait " +
      "after primary rabies; confirm arrival with the AQS at least three days before " +
      "landing; 500&nbsp;baht inspection fee on arrival. Always re-verify before you fly.</p></div>" },
    { h: "Before you book anything", html:
      "<ol>" +
      "<li>Read the <a href=\"/bring-pet-to-thailand/\">full import guide</a>.</li>" +
      "<li>Confirm your <strong>airline</strong> will carry your pet on your route &mdash; " +
      "see <a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">airline pet policies</a> " +
      "and <a href=\"/bring-pet-to-thailand/snub-nosed-breeds-flying.html\">snub-nosed breeds</a>.</li>" +
      "<li>Choose <a href=\"/bring-pet-to-thailand/u-tapao-airport-pets.html\">U-Tapao or Bangkok</a> " +
      "for arrival near Pattaya.</li>" +
      "<li>Budget with our <a href=\"/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html\">import cost guide</a>.</li>" +
      "</ol>" },
    { h: "The paperwork sequence (order matters)", html:
      "<ol>" +
      "<li><strong>Microchip</strong> &mdash; ISO 11784/11785, implanted " +
      "<em>before</em> the rabies shot. " +
      "<a href=\"/bring-pet-to-thailand/microchip-requirements.html\">Microchip guide</a></li>" +
      "<li><strong>Rabies vaccination</strong> &mdash; at least 21 days before travel; dogs " +
      "also need distemper, hepatitis, parvovirus and leptospirosis (or a negative " +
      "leptospirosis test within 30 days per current embassy guidance). " +
      "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">Rabies and titer guide</a></li>" +
      "<li><strong>Rabies titer test</strong> (recommended even if Thailand does not require it) &mdash; " +
      "essential if you may later export to the UK, EU or Australia. Start early.</li>" +
      "<li><strong>Health certificate</strong> &mdash; within the validity window; endorsed by your " +
      "origin-country authority. " +
      "<a href=\"/bring-pet-to-thailand/health-certificate.html\">Health certificate guide</a></li>" +
      "<li><strong>DLD import permit</strong> &mdash; apply in the 7&ndash;60 day window before " +
      "departure (around 30 days ahead is sensible). " +
      "<a href=\"/bring-pet-to-thailand/import-permit-thailand-dld.html\">Import permit guide</a></li>" +
      "</ol>" },
    { h: "Two weeks before departure", html:
      "<ul>" +
      "<li>Confirm your exact arrival date with the AQS at least three days before landing.</li>" +
      "<li>Re-read every document against the DLD and airline requirements.</li>" +
      "<li>Confirm crate size meets IATA rules; book cargo or cabin slot if required.</li>" +
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
      "<p>Need an agent? See <a href=\"/pet-relocation/\">pet relocation agents</a>.</p>" }
  ],
  faqs: [
    ["How long before travel should I start?",
     "<p>At least one to two months for a straightforward move. If you need a rabies titer test for a future export to the UK, EU or Australia, start several months earlier because of waiting periods after the blood sample.</p>"],
    ["Can I print this checklist?",
     "<p>Yes. Use your browser print function on this page. The step links stay useful on screen; for travel, keep PDF copies of every official certificate and permit instead.</p>"]
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
