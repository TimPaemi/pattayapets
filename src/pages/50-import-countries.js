"use strict";
/* More origin-country guides for the "Bringing a pet to Thailand" cluster,
   plus the U-Tapao / Bangkok arrival-airport guide. */

const { article } = require("../guidekit.js");
const { importCountryRelated, attachReturnExportLink } = require("../data/country-pairs.js");
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
  "The regulated claims and authority links cited on this page were checked on " +
  "1 August 2026. Thailand's Department of Livestock " +
  "Development, airlines and origin-country authorities change their rules without " +
  "notice. Treat this as orientation, then confirm every current requirement with " +
  "the DLD, your airline and your origin-country authority before you book or travel.";

const OFFICIAL =
  "<p><strong>Official sources to verify against:</strong> " +
  claimLink("TH-IMPORT-SEQUENCE-2026-02", "Thai consular import guide") +
  " (detailed scope: dogs, cats and rabbits from the United States); " +
  claimLink("TH-AQS-MAP-2025-10", "DLD Animal Quarantine Station map") + ".</p>";

const RELATED = [
  { name: "The full process", path: "/bring-pet-to-thailand/", desc: "Every step, in order." },
  { name: "DLD import permit", path: "/bring-pet-to-thailand/import-permit-thailand-dld.html", desc: "The Thai-side permit you apply for." },
  { name: "Microchip requirements", path: "/bring-pet-to-thailand/microchip-requirements.html", desc: "Identifier records and document matching." },
  { name: "Airline pet policies", path: "/bring-pet-to-thailand/airline-pet-policies.html", desc: "Cabin, checked baggage or cargo, and travel crates." },
  { name: "Arriving in Thailand", path: "/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html", desc: "The quarantine-station check on landing." },
  { name: "What it costs", path: "/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html", desc: "Budget for the whole move." },
  { name: "Pet quarantine", path: "/bring-pet-to-thailand/thailand-pet-quarantine.html", desc: "When pets do and do not quarantine on arrival." },
  { name: "Rabies & titer test", path: "/bring-pet-to-thailand/rabies-vaccination-titer-test.html", desc: "Why the titer test matters for the return trip." },
  { name: "The export process", path: "/take-pet-out-of-thailand/export-process.html", desc: "The Thai DLD side when you leave." }
];

function countryRelated(slug) {
  return importCountryRelated(slug, RELATED);
}

const STD_STEPS =
  "Follow the standard steps &mdash; " +
  "<a href=\"/bring-pet-to-thailand/microchip-requirements.html\">microchip</a>, " +
  "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">rabies and the " +
  "other vaccinations</a>, the " +
  "<a href=\"/bring-pet-to-thailand/health-certificate.html\">health certificate</a> " +
  "and the <a href=\"/bring-pet-to-thailand/import-permit-thailand-dld.html\">DLD import " +
  "permit</a>. ";

const EU_RETURN =
  "<p>Thailand is outside the current EU no-titer lists, so the standard return route " +
  "from Thailand uses a valid rabies vaccination and a " +
  "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">rabies titer " +
  "test</a> of at least 0.5 IU/ml. Sample at least 30 days after primary vaccination " +
  "or within a current valid series, and at least 90 days before the animal health " +
  "certificate is issued. EU authorities publish an " +
  "exception for a satisfactory test completed and recorded before leaving, subject to " +
  "vaccination-continuity and documentation conditions; confirm those conditions before relying on it. " +
  claimLink("EU-RABIES-TITER-2026-08", "Commission titer rule") + ".</p>";

const EU_IMPORT_REF =
  "<p>For the shared EU export-certificate framework every member state follows, " +
  "see our <a href=\"/bring-pet-to-thailand/from-eu.html\">bringing a pet from the EU</a> guide.</p>";

const TH_DOCS_TABLE =
  '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
  '<th scope="col">Document</th><th scope="col">What it is</th></tr></thead><tbody>' +
  '<tr><th scope="row">DLD import permit</th><td>After all required primary vaccinations, wait at least 21 days before filing R1/1 as the arrival AQS directs. The scoped Thai guide says to allow 5&ndash;7 Thai business days; confirm applicability outside its US-origin scope. ' + claimLink("TH-IMPORT-SEQUENCE-2026-02", "Thai source") + '</td></tr>' +
  '<tr><th scope="row">MOCCAE export permit</th><td>UAE export approval before the pet leaves the Emirates (separate from the Thai permit).</td></tr>' +
  '<tr><th scope="row">Microchip certificate</th><td>Implantation certificate; the identifier must match every record. The reviewed Thai source does not establish a universal ISO-format or chip-before-vaccination rule.</td></tr>' +
  '<tr><th scope="row">Vaccination records</th><td>Complete all required primary vaccinations, then wait at least 21 days before the permit application; documented boosters are exempt when continuity is shown. See our <a href="/bring-pet-to-thailand/rabies-vaccination-titer-test.html">vaccination guide</a>.</td></tr>' +
  '<tr><th scope="row">Endorsed health certificate</th><td>Official veterinary certificate for export from the UAE, endorsed as MOCCAE requires.</td></tr>' +
  '<tr><th scope="row">Flight booking</th><td>Itinerary; confirm airline pet policy (some Gulf routes require cargo).</td></tr>' +
  '</tbody></table></div>';

const TH_ARRIVAL_UAE =
  "<p>Present the pet and original documents for AQS inspection. DLD decides clearance or " +
  "other action; this guide does not promise same-day release. Follow the responsible " +
  "station&rsquo;s current notification instructions; no universal three-day rule appears " +
  "in the reviewed Thai source. See " +
  '<a href="/bring-pet-to-thailand/thailand-pet-quarantine.html">pet quarantine in Thailand</a>.</p>';

const UAE_FAILS =
  "<ul>" +
  "<li><strong>MOCCAE export permit missing</strong> &mdash; required before leaving the UAE, separate from the Thai import permit.</li>" +
  "<li><strong>Breed on the prohibited list</strong> &mdash; several fighting-dog types and wolf hybrids cannot enter the UAE; check before you assume return is possible.</li>" +
  "<li><strong>Assuming cabin travel</strong> &mdash; confirm the permitted transport mode directly with the UAE authority and operating airline.</li>" +
  "<li><strong>Microchip mismatch</strong> &mdash; MOCCAE and DLD both require the chip number to match every document exactly.</li>" +
  "</ul>";

const TH_IMPORT_TABLE =
  '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
  '<th scope="col">Document</th><th scope="col">What it is</th></tr></thead><tbody>' +
  '<tr><th scope="row">DLD import permit</th><td>After all required primary vaccinations, wait at least 21 days before filing R1/1 as the arrival AQS directs. The scoped guide says to allow 5&ndash;7 Thai business days. ' + claimLink("TH-IMPORT-SEQUENCE-2026-02", "Thai source") + '</td></tr>' +
  '<tr><th scope="row">Microchip certificate</th><td>Implantation certificate with the identifier matching every record. The reviewed Thai source does not establish a universal ISO-format or chip-before-vaccination rule.</td></tr>' +
  '<tr><th scope="row">Vaccination records</th><td>Complete all required primary vaccinations, then wait at least 21 days before the permit application; documented boosters are exempt when continuity is shown. See our <a href="/bring-pet-to-thailand/rabies-vaccination-titer-test.html">vaccination guide</a>.</td></tr>' +
  '<tr><th scope="row">Government-endorsed health certificate</th><td>Export certificate from the origin country, endorsed as that authority requires.</td></tr>' +
  '<tr><th scope="row">Flight booking</th><td>Itinerary; confirm airline pet policy early.</td></tr>' +
  '</tbody></table></div>';

const TH_ARRIVAL_STD =
  "<p>Present the pet and original documents for AQS inspection. DLD decides clearance, " +
  "detention or other action; this guide does not promise same-day release. Follow the " +
  "responsible station&rsquo;s notification instructions; no universal three-day rule appears " +
  "in the reviewed Thai source. See " +
  '<a href="/bring-pet-to-thailand/thailand-pet-quarantine.html">pet quarantine in Thailand</a>.</p>';

const TH_IMPORT_FAILS =
  "<ul>" +
  "<li><strong>Wrong vaccination sequence</strong> &mdash; after all required primary vaccinations, wait at least 21 days before applying; documented boosters are exempt when continuity is shown.</li>" +
  "<li><strong>Identifier mismatch</strong> &mdash; the implantation certificate, permit and vaccination records must identify the same animal.</li>" +
  "<li><strong>Assuming one certificate window applies everywhere</strong> &mdash; confirm the current requirement with the origin authority and arrival AQS.</li>" +
  "<li><strong>Assuming return will be easy</strong> &mdash; rabies-free origins (Japan, Singapore, NZ) have strict re-entry rules from Thailand.</li>" +
  "</ul>";

const EU_IMPORT_FAILS =
  "<ul>" +
  "<li><strong>Using the EU pet passport alone</strong> &mdash; it is for travel within the EU/EFTA pet-travel area, not export to Thailand.</li>" +
  "<li><strong>Incomplete authority endorsement</strong> &mdash; the export certificate must be endorsed by the competent national veterinary authority, not only signed by a private vet.</li>" +
  "<li><strong>DLD permit timing</strong> &mdash; finish all required primary vaccinations, wait 21 days, then allow the scoped guide&rsquo;s 5&ndash;7 Thai business days and confirm the arrival AQS.</li>" +
  "<li><strong>Skipping return planning</strong> &mdash; the current EU titer route puts at least 90 days between sampling and certificate issue.</li>" +
  "</ul>";

function euImportTimeline(endorseWho, flightNote) {
  var intro = "<p>Work backwards from your flight.";
  if (flightNote) intro += " " + flightNote;
  intro += "</p>";
  return intro +
    '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
    '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Who</th></tr></thead><tbody>' +
    '<tr><th scope="row">Before travel (if EU/EFTA return is possible)</th>' +
    '<td>Plan the identifier, rabies vaccination and optional <a href="/bring-pet-to-thailand/rabies-vaccination-titer-test.html">rabies titer test</a>. Under the current EU route, sample &ge;30 days after primary vaccination or within a current valid series and &ge;90 days before certificate issue. ' + claimLink("EU-RABIES-TITER-2026-08", "Commission rule") + '</td>' +
    '<td>Your vet; approved lab</td></tr>' +
    '<tr><th scope="row">Before filing the Thai permit</th>' +
    '<td>Complete all required primary vaccinations, then wait at least 21 days; documented boosters are exempt when continuity is shown</td>' +
    '<td>Your vet</td></tr>' +
    '<tr><th scope="row">After the primary-vaccine wait</th>' +
    '<td>Apply for <a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a> (form R1/1) using the responsible AQS&rsquo;s confirmed channel; allow 5&ndash;7 Thailand business days for a complete application</td>' +
    '<td>DLD / Suvarnabhumi AQS</td></tr>' +
    '<tr><th scope="row">2&ndash;3 weeks before</th>' +
    '<td>Book pet space on the flight; confirm airline requires the Thai import permit before boarding</td>' +
    '<td>Airline</td></tr>' +
    '<tr><th scope="row">Final 1&ndash;2 weeks</th>' +
    '<td><strong>EU animal health / export certificate</strong> for third-country movement, completed by an authorised vet and endorsed by ' +
    endorseWho + '</td>' +
    '<td>Authorised vet + national authority</td></tr>' +
    '<tr><th scope="row">Before travel</th>' +
    '<td>Follow the responsible AQS&rsquo;s current itinerary-notification instructions; the reviewed source gives no universal three-day rule</td>' +
    '<td>Arrival AQS</td></tr>' +
    '<tr><th scope="row">Arrival day</th>' +
    '<td>AQS inspection; Forms R-6/R-7; 500&nbsp;baht fee</td>' +
    '<td>Bangkok AQS</td></tr>' +
    '</tbody></table></div>';
}

function country(o) {
  var sections = attachReturnExportLink((o.sections || []).slice(), o.slug);
  if (!o.skipRichness) {
    sections.push(REGULATED_IMPORT_PATTAYA_ARRIVAL);
    sections.push(REGULATED_IMPORT_PATTAYA_LIFE);
  }
  sections.push({ h: "Official sources", html: (o.officialExtra || "") + OFFICIAL });
  return article({
    path: "/bring-pet-to-thailand/" + o.slug + ".html",
    title: o.title, desc: o.desc, crumb: o.crumb, breadcrumbs: SUB,
    eyebrow: "Bringing a pet to Thailand &middot; By country",
    h1: o.h1, lede: o.lede, verify: VERIFY,
    updated: o.updated || "2026-06-01",
    sections: sections, faqs: rb.mergeFaqs(o.faqs, REGULATED_IMPORT_EXTRA_FAQS),
    related: o.related || countryRelated(o.slug)
  });
}

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

const pages = [];

/* ---------------- SWEDEN ---------------- */
pages.push(country({
  slug: "from-sweden", crumb: "From Sweden",
  title: "Bring Pet to Thailand from Sweden (2026) | PattayaPets",
  desc: "Sweden to Thailand pet import: EU export certificate, Jordbruksverket endorsement, " +
    "DLD permit timeline, document checklist and EU return planning.",
  h1: "Bringing a pet to Thailand from Sweden",
  lede: "Pattaya has one of the largest Swedish communities in Thailand, and many " +
    "arrive with a pet. The Thai steps are standard; the Swedish-specific part is " +
    "the <strong>EU export health certificate</strong> and planning the EU return if " +
    "you ever come back.",
  officialExtra:
    "<p><strong>Swedish / EU sources:</strong> " +
    "<a href=\"https://jordbruksverket.se/languages/english/swedish-board-of-agriculture/animals/pets---trade-and-travel/movement-of-dogs-cats-and-ferrets-to-sweden\" " +
    "target=\"_blank\" rel=\"noopener\">Jordbruksverket pet travel</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener\">EU pet movement</a>. " +
    "Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-sweden.html\">taking a pet to Sweden</a>.</p>",
  sections: [
    { h: "The timeline — what to do when", html:
      euImportTimeline("<strong>the Swedish Board of Agriculture (Jordbruksverket)</strong>") +
      "<p>Step pages: " + STD_STEPS + EU_IMPORT_REF },
    { h: "The Swedish side of the paperwork", html:
      "<p>For travel from Sweden to a non-EU country such as Thailand, your vet " +
      "completes an <strong>EU animal health / export certificate</strong> for " +
      "third-country movement. It must be issued by an <strong>official veterinarian</strong> " +
      "and <strong>endorsed by Jordbruksverket</strong> (the Swedish Board of Agriculture).</p>" +
      "<p>The blue <strong>EU pet passport</strong> you use within Europe is <em>not</em> " +
      "the document Thailand accepts on its own. You need the export certificate plus the " +
      "Thai import permit, with the same microchip number on every page.</p>" +
      "<p>Use a vet experienced in export work &mdash; not every practice handles " +
      "third-country certificates daily.</p>" },
    { h: "Documents Thailand expects", html:
      "<p>Regardless of origin country, the DLD asks for:</p>" +
      TH_IMPORT_TABLE + TH_ARRIVAL_STD },
    { h: "Planning the return to Sweden", html:
      EU_RETURN +
      "<p>Sweden does not apply the special tapeworm-treatment rule that a few " +
      "countries keep, but always reconfirm the current EU re-entry requirements " +
      "with Jordbruksverket before you travel. See " +
      "<a href=\"/take-pet-out-of-thailand/to-sweden.html\">exporting a pet to Sweden</a>.</p>" +
      '<div class="callout callout-tip"><div class="ch">Confirm the Thai requirement for this origin</div>' +
      "<p>The reviewed detailed Thai instruction is scoped to USA-origin dogs, cats and " +
      "rabbits. Ask the responsible AQS whether this origin needs any additional test; " +
      "the EU or Swiss return pathway is a separate rule.</p></div>" },
    { h: "Common mistakes on this corridor", html: EU_IMPORT_FAILS }
  ],
  faqs: [
    ["Is my EU pet passport enough to bring my pet to Thailand?",
     "<p>No. The EU pet passport governs movement within the EU. For Thailand you need an EU export health certificate endorsed by Jordbruksverket, plus the Thai DLD import permit.</p>"],
    ["Which Swedish authority endorses the export certificate?",
     "<p>Jordbruksverket (the Swedish Board of Agriculture) through an official veterinarian. Your export-experienced vet will know the current endorsement process.</p>"],
    ["What will Sweden need for the return journey?",
     "<p>The standard route uses a valid rabies vaccination, a qualifying titer sampled at least 90 days before certificate issue, and the required EU entry document. Ask the Swedish/EU authority whether a satisfactory pre-departure test qualifies for the exception, including continuity conditions. " + claimLink("EU-RABIES-TITER-2026-08", "Commission rule") + ".</p>"],
    ["Will my pet be quarantined on arrival in Thailand?",
     "<p>DLD decides after inspection. Complete documents do not guarantee a particular release time or rule out detention. See our <a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">quarantine guide</a>.</p>"],
    ["Are there direct flights from Stockholm with a pet?",
     "<p>This page does not maintain a verified live route schedule. Ask the operating airline to confirm the itinerary, aircraft, pet mode and space before payment; see our <a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">airline pet policies</a> guide.</p>"]
  ]
}));

/* ---------------- NORWAY ---------------- */
pages.push(country({
  slug: "from-norway", crumb: "From Norway",
  title: "Bring Pet to Thailand from Norway (2026) | PattayaPets",
  desc: "Norway to Thailand pet import: export certificate, Mattilsynet endorsement, " +
    "DLD permit timeline, tapeworm return rule and document checklist.",
  h1: "Bringing a pet to Thailand from Norway",
  lede: "Norway is not in the EU, but it follows the EU pet-travel scheme closely. " +
    "The Thai steps are standard; plan carefully for the journey home, including the " +
    "tapeworm rule for dogs.",
  officialExtra:
    "<p><strong>Norwegian / EU sources:</strong> " +
    "<a href=\"https://www.mattilsynet.no/en/animals/guide-travelling-with-pets-to-norway\" " +
    "target=\"_blank\" rel=\"noopener\">Mattilsynet pet import</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener\">EU pet movement</a> (Norway applies EU-aligned rules). " +
    "Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-norway.html\">taking a pet to Norway</a>.</p>",
  sections: [
    { h: "The timeline — what to do when", html:
      euImportTimeline("<strong>the Norwegian Food Safety Authority (Mattilsynet)</strong>") +
      "<p>Step pages: " + STD_STEPS + EU_IMPORT_REF },
    { h: "The Norwegian side of the paperwork", html:
      "<p>For travel from Norway to Thailand, your vet completes an export health " +
      "certificate, endorsed through <strong>Mattilsynet</strong>. Although Norway is " +
      "outside the EU, it uses the EU pet passport and pet-travel system, so the " +
      "documents will feel familiar &mdash; but the passport alone is not what Thailand needs.</p>" +
      "<p>Use a vet experienced in export work and allow time for Mattilsynet endorsement.</p>" },
    { h: "Documents Thailand expects", html:
      "<p>Regardless of origin country, the DLD asks for:</p>" +
      TH_IMPORT_TABLE + TH_ARRIVAL_STD },
    { h: "Planning the return to Norway", html:
      EU_RETURN +
      "<p>Norway also keeps the <strong>tapeworm (Echinococcus) treatment rule</strong>: " +
      "a dog entering Norway must be treated by a vet against tapeworm within a set " +
      "window before arrival (commonly 24 to 120 hours). Build that into the return " +
      "plan, and confirm the current detail with Mattilsynet. See " +
      "<a href=\"/take-pet-out-of-thailand/to-norway.html\">exporting a pet to Norway</a>.</p>" },
    { h: "Common mistakes on this corridor", html: EU_IMPORT_FAILS +
      "<ul><li><strong>Forgetting the tapeworm treatment on return</strong> &mdash; dogs need vet-administered treatment shortly before Norway entry.</li></ul>" }
  ],
  faqs: [
    ["Does Norway being outside the EU change things?",
     "<p>Not greatly for the trip to Thailand &mdash; Norway uses the EU pet-travel system, so your vet issues an export certificate much as in an EU country. Confirm the current process with Mattilsynet.</p>"],
    ["What does Norway require for the return?",
     "<p>A valid rabies vaccination, a qualifying titer under the current 90-day pre-certificate rule and, for dogs, the authority&rsquo;s tapeworm treatment. Confirm the full Norway route with Mattilsynet and the shared titer rule with the Commission. " + claimLink("EU-RABIES-TITER-2026-08", "Commission rule") + ".</p>"],
    ["Which authority endorses the export certificate?",
     "<p>Mattilsynet (the Norwegian Food Safety Authority). Your export-experienced vet coordinates the endorsement.</p>"],
    ["Will my pet be quarantined on arrival in Thailand?",
     "<p>DLD decides clearance, detention or other action after inspecting the animal and original documents; the reviewed source does not guarantee same-day release. See our <a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">quarantine guide</a>.</p>"],
    ["Should I do the titer test before leaving Norway?",
     "<p>Ask the destination authority whether a satisfactory test completed and recorded before departure qualifies for its exception, including vaccination-continuity and documentation conditions.</p>"]
  ]
}));

/* ---------------- DENMARK ---------------- */
pages.push(country({
  slug: "from-denmark", crumb: "From Denmark",
  title: "Bring Pet to Thailand from Denmark (2026) | PattayaPets",
  desc: "Denmark to Thailand pet import: EU export certificate, Danish Veterinary and Food " +
    "Administration endorsement, DLD permit timeline and EU return planning.",
  h1: "Bringing a pet to Thailand from Denmark",
  lede: "For Danish owners the Thai requirements are the standard ones. What is " +
    "Denmark-specific is who endorses the export paperwork and planning the EU return.",
  officialExtra:
    "<p><strong>Danish / EU sources:</strong> " +
    "<a href=\"https://en.foedevarestyrelsen.dk/animals/travelling-with-pet-animals\" target=\"_blank\" " +
    "rel=\"noopener\">Danish Veterinary and Food Administration</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener\">EU pet movement</a>. " +
    "Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-denmark.html\">taking a pet to Denmark</a>.</p>",
  sections: [
    { h: "The timeline — what to do when", html:
      euImportTimeline("<strong>the Danish Veterinary and Food Administration</strong>") +
      "<p>Step pages: " + STD_STEPS + EU_IMPORT_REF },
    { h: "The Danish side of the paperwork", html:
      "<p>For travel from Denmark to a non-EU country such as Thailand, your vet " +
      "completes an <strong>EU export health certificate</strong>, endorsed by an official " +
      "veterinarian under <strong>the Danish Veterinary and Food Administration</strong>. " +
      "The EU pet passport is for movement within Europe and is not, on its own, what " +
      "Thailand requires.</p>" +
      "<p>Use a vet familiar with export work and confirm the current endorsement process locally.</p>" },
    { h: "Documents Thailand expects", html:
      "<p>Regardless of origin country, the DLD asks for:</p>" +
      TH_IMPORT_TABLE + TH_ARRIVAL_STD },
    { h: "Planning the return to Denmark", html:
      EU_RETURN +
      "<p>Confirm the current EU re-entry requirements with the Danish Veterinary " +
      "and Food Administration before you travel. See " +
      "<a href=\"/take-pet-out-of-thailand/to-denmark.html\">exporting a pet to Denmark</a>.</p>" +
      '<div class="callout callout-tip"><div class="ch">Confirm the Thai requirement for this origin</div>' +
      "<p>The reviewed detailed Thai instruction is scoped to USA-origin dogs, cats and " +
      "rabbits. Ask the responsible AQS whether this origin needs any additional test; " +
      "the EU or Swiss return pathway is a separate rule.</p></div>" },
    { h: "Common mistakes on this corridor", html: EU_IMPORT_FAILS }
  ],
  faqs: [
    ["Who endorses my pet's export certificate in Denmark?",
     "<p>An official veterinarian under the Danish Veterinary and Food Administration. Use a vet familiar with export work and confirm the current procedure.</p>"],
    ["What will Denmark need for the return journey?",
     "<p>A valid rabies vaccination, a qualifying titer sampled at least 90 days before certificate issue, and an EU third-country entry health certificate. A documented pre-departure test may qualify for the Commission&rsquo;s return exception. " + claimLink("EU-RABIES-TITER-2026-08", "Commission rule") + ".</p>"],
    ["Is the EU pet passport enough for Thailand?",
     "<p>No. It is for intra-EU travel. Thailand needs an EU export certificate endorsed by the Danish authorities, plus the DLD import permit.</p>"],
    ["Will my pet be quarantined on arrival in Thailand?",
     "<p>DLD decides clearance, detention or other action after inspecting the animal and original documents; the reviewed source does not guarantee same-day release. See our <a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">quarantine guide</a>.</p>"],
    ["Are Copenhagen–Bangkok routes pet-friendly?",
     "<p>Copenhagen has long-haul connections; confirm pet acceptance with the airline when you book.</p>"]
  ]
}));

/* ---------------- FINLAND ---------------- */
pages.push(country({
  slug: "from-finland", crumb: "From Finland",
  title: "Bring Pet to Thailand from Finland (2026) | PattayaPets",
  desc: "Finland to Thailand pet import: EU export certificate, Ruokavirasto endorsement, " +
    "DLD permit timeline, tapeworm return rule and document checklist.",
  h1: "Bringing a pet to Thailand from Finland",
  lede: "The Thai steps are the standard ones for Finnish owners. The point to plan " +
    "around is the journey home, which has the tapeworm rule for dogs.",
  officialExtra:
    "<p><strong>Finnish / EU sources:</strong> " +
    "<a href=\"https://www.ruokavirasto.fi/en/animals/travellers/\" " +
    "target=\"_blank\" rel=\"noopener\">Ruokavirasto pet travel</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener\">EU pet movement</a>. " +
    "Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-finland.html\">taking a pet to Finland</a>.</p>",
  sections: [
    { h: "The timeline — what to do when", html:
      euImportTimeline("<strong>the Finnish Food Authority (Ruokavirasto)</strong>") +
      "<p>Step pages: " + STD_STEPS + EU_IMPORT_REF },
    { h: "The Finnish side of the paperwork", html:
      "<p>For travel from Finland to a non-EU country such as Thailand, your vet " +
      "completes an <strong>EU export health certificate</strong>, endorsed by an official " +
      "veterinarian under <strong>Ruokavirasto</strong>. The EU pet passport governs " +
      "intra-EU travel only.</p>" +
      "<p>Use a vet experienced in export work and allow time for authority endorsement.</p>" },
    { h: "Documents Thailand expects", html:
      "<p>Regardless of origin country, the DLD asks for:</p>" +
      TH_IMPORT_TABLE + TH_ARRIVAL_STD },
    { h: "Planning the return to Finland", html:
      EU_RETURN +
      "<p>Finland also keeps the <strong>tapeworm (Echinococcus) treatment rule</strong>: " +
      "a dog entering Finland must be treated against tapeworm by a vet within a set " +
      "window before arrival (commonly 24 to 120 hours). Plan that into the return, " +
      "and confirm the current detail with Ruokavirasto. See " +
      "<a href=\"/take-pet-out-of-thailand/to-finland.html\">exporting a pet to Finland</a>.</p>" },
    { h: "Common mistakes on this corridor", html: EU_IMPORT_FAILS +
      "<ul><li><strong>Forgetting the tapeworm treatment on return</strong> &mdash; dogs need vet-administered treatment shortly before Finland entry.</li></ul>" }
  ],
  faqs: [
    ["Is the EU pet passport enough for Thailand?",
     "<p>No. It is for movement within the EU. Thailand needs an EU export health certificate endorsed by Ruokavirasto, plus the Thai DLD import permit.</p>"],
    ["What does Finland require for the return?",
     "<p>A valid rabies vaccination, a qualifying titer under the current 90-day pre-certificate rule and, for dogs, the authority&rsquo;s tapeworm treatment. Confirm the full route with Ruokavirasto. " + claimLink("EU-RABIES-TITER-2026-08", "Commission rule") + ".</p>"],
    ["Which authority endorses the export certificate?",
     "<p>Ruokavirasto (the Finnish Food Authority) through an official veterinarian.</p>"],
    ["Will my pet be quarantined on arrival in Thailand?",
     "<p>DLD decides clearance, detention or other action after inspecting the animal and original documents; the reviewed source does not guarantee same-day release. See our <a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">quarantine guide</a>.</p>"],
    ["Should I do the titer test before leaving Finland?",
     "<p>Ask the destination authority whether a satisfactory test completed and recorded before departure qualifies for its exception, including vaccination-continuity and documentation conditions.</p>"]
  ]
}));

/* ---------------- NETHERLANDS ---------------- */
pages.push(country({
  slug: "from-netherlands", crumb: "From the Netherlands",
  title: "Netherlands to Thailand Pet Import (2026) | PattayaPets",
  desc: "Netherlands to Thailand pet import: EU export certificate, NVWA endorsement, " +
    "DLD permit timeline, Amsterdam routing notes and EU return planning.",
  h1: "Bringing a pet to Thailand from the Netherlands",
  lede: "The Netherlands export side runs through NVWA endorsement. Confirm the " +
    "operating route and pet acceptance directly with the airline.",
  officialExtra:
    "<p><strong>Dutch / EU sources:</strong> " +
    "<a href=\"https://english.nvwa.nl/topics/animal-health/travelling-to-the-netherlands-with-your-dog-or-cat\" target=\"_blank\" " +
    "rel=\"noopener\">NVWA importing animals</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener\">EU pet movement</a>. " +
    "Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-netherlands.html\">taking a pet to the Netherlands</a>.</p>",
  sections: [
    { h: "The timeline — what to do when", html:
      euImportTimeline("<strong>the Netherlands Food and Consumer Product Safety Authority (NVWA)</strong>",
        "Confirm the operating itinerary and pet acceptance with the airline before payment.") +
      "<p>Step pages: " + STD_STEPS + EU_IMPORT_REF },
    { h: "The Dutch side of the paperwork", html:
      "<p>For travel from the Netherlands to a non-EU country such as Thailand, your vet " +
      "completes an <strong>EU export health certificate</strong>, endorsed under " +
      "<strong>NVWA</strong>. The EU pet passport is for intra-EU travel and is not what " +
      "Thailand requires on its own.</p>" +
      "<p>Use a vet experienced in export work and book NVWA endorsement in good time.</p>" },
    { h: "Documents Thailand expects", html:
      "<p>Regardless of origin country, the DLD asks for:</p>" +
      TH_IMPORT_TABLE + TH_ARRIVAL_STD },
    { h: "Planning the return to the Netherlands", html:
      EU_RETURN +
      "<p>Confirm the actual itinerary and pet conditions with the operating airline, " +
      "and confirm current EU re-entry rules with NVWA " +
      "before travelling. See " +
      "<a href=\"/take-pet-out-of-thailand/to-netherlands.html\">exporting a pet to the Netherlands</a>.</p>" +
      '<div class="callout callout-tip"><div class="ch">Confirm the Thai requirement for this origin</div>' +
      "<p>The reviewed detailed Thai instruction is scoped to USA-origin dogs, cats and " +
      "rabbits. Ask the responsible AQS whether this origin needs any additional test; " +
      "the EU or Swiss return pathway is a separate rule.</p></div>" },
    { h: "Common mistakes on this corridor", html: EU_IMPORT_FAILS }
  ],
  faqs: [
    ["Are there direct flights that take pets to Thailand?",
     "<p>This page does not maintain a verified live route schedule. Ask the operating airline to confirm the itinerary, aircraft, pet mode and space before payment.</p>"],
    ["What will the Netherlands need for the return journey?",
     "<p>A valid rabies vaccination, a qualifying titer sampled at least 90 days before certificate issue, and an EU third-country entry health certificate. A documented pre-departure test may qualify for the Commission&rsquo;s return exception. " + claimLink("EU-RABIES-TITER-2026-08", "Commission rule") + ".</p>"],
    ["Which authority endorses the export certificate?",
     "<p>NVWA (Netherlands Food and Consumer Product Safety Authority) through the official veterinary channel your vet uses.</p>"],
    ["Is the EU pet passport enough for Thailand?",
     "<p>No. Thailand needs an EU export certificate endorsed by NVWA, plus the DLD import permit.</p>"],
    ["Will my pet be quarantined on arrival in Thailand?",
     "<p>DLD decides clearance, detention or other action after inspecting the animal and original documents; the reviewed source does not guarantee same-day release. See our <a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">quarantine guide</a>.</p>"]
  ]
}));

/* ---------------- FRANCE ---------------- */
pages.push(country({
  slug: "from-france", crumb: "From France",
  title: "Bring Pet to Thailand from France (2026) | PattayaPets",
  desc: "France to Thailand pet import: EU export certificate, French veterinary authority " +
    "endorsement, DLD permit timeline, Paris routing and EU return planning.",
  h1: "Bringing a pet to Thailand from France",
  lede: "For French owners the Thai requirements are standard. The French-specific " +
    "part is the export certificate, its endorsement and planning the EU return.",
  officialExtra:
    "<p><strong>French / EU sources:</strong> " +
    "<a href=\"https://mesdemarches.agriculture.gouv.fr/demarches/particulier/vivre-avec-un-animal-de-compagnie/article/voyager-hors-de-france-avec-un\" " +
    "target=\"_blank\" rel=\"noopener\">French Ministry of Agriculture pet travel</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener\">EU pet movement</a>. " +
    "Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-france.html\">taking a pet to France</a>.</p>",
  sections: [
    { h: "The timeline — what to do when", html:
      euImportTimeline("the official channel of <strong>the French agriculture ministry&rsquo;s veterinary services</strong>",
        "Confirm the operating itinerary and pet acceptance with the airline before payment.") +
      "<p>Step pages: " + STD_STEPS + EU_IMPORT_REF },
    { h: "The French side of the paperwork", html:
      "<p>For travel from France to a non-EU country such as Thailand, your vet completes " +
      "an <strong>EU export health certificate</strong>, endorsed through the official " +
      "channel of <strong>the French agriculture ministry&rsquo;s veterinary services</strong> " +
      "(the departmental directorate that handles animal health). The EU pet passport is " +
      "for travel within Europe only.</p>" +
      "<p>Use a vet experienced in export work and confirm the current endorsement process locally.</p>" },
    { h: "Documents Thailand expects", html:
      "<p>Regardless of origin country, the DLD asks for:</p>" +
      TH_IMPORT_TABLE + TH_ARRIVAL_STD },
    { h: "Planning the return to France", html:
      EU_RETURN +
      "<p>Confirm the actual itinerary and pet conditions with the operating airline. " +
      "Confirm current EU re-entry requirements with the French veterinary " +
      "authorities before you travel. See " +
      "<a href=\"/take-pet-out-of-thailand/to-france.html\">exporting a pet to France</a>.</p>" +
      '<div class="callout callout-tip"><div class="ch">Confirm the Thai requirement for this origin</div>' +
      "<p>The reviewed detailed Thai instruction is scoped to USA-origin dogs, cats and " +
      "rabbits. Ask the responsible AQS whether this origin needs any additional test; " +
      "the EU or Swiss return pathway is a separate rule.</p></div>" },
    { h: "Common mistakes on this corridor", html: EU_IMPORT_FAILS }
  ],
  faqs: [
    ["Who endorses the export certificate in France?",
     "<p>The official veterinary service of the French agriculture ministry, through the departmental directorate responsible for animal health. Your vet completes the certificate; confirm the current endorsement process locally.</p>"],
    ["What does France need for the return journey?",
     "<p>The standard route uses a valid rabies vaccination, a qualifying titer sampled at least 90 days before certificate issue, and the required EU entry document. Ask the French/EU authority whether a satisfactory pre-departure test qualifies for the exception, including vaccination continuity. " + claimLink("EU-RABIES-TITER-2026-08", "Commission rule") + ".</p>"],
    ["Is the EU pet passport enough for Thailand?",
     "<p>No. Thailand needs an EU export certificate endorsed by the French authorities, plus the DLD import permit.</p>"],
    ["Will my pet be quarantined on arrival in Thailand?",
     "<p>DLD decides clearance, detention or other action after inspecting the animal and original documents; the reviewed source does not guarantee same-day release. See our <a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">quarantine guide</a>.</p>"],
    ["Can I fly direct from Paris with a pet?",
     "<p>This page does not maintain a verified live route schedule. Ask the operating airline to confirm the itinerary, aircraft, pet mode and space before payment.</p>"]
  ]
}));

/* ---------------- SWITZERLAND ---------------- */
pages.push(country({
  slug: "from-switzerland", crumb: "From Switzerland",
  title: "Bring Pet to Thailand from Switzerland (2026) | PattayaPets",
  desc: "Switzerland to Thailand pet import: export certificate, FSVO endorsement, " +
    "DLD permit timeline, cantonal vet office and EU-aligned return planning.",
  h1: "Bringing a pet to Thailand from Switzerland",
  lede: "Switzerland is not in the EU, but it runs a closely aligned pet-travel " +
    "system. The Thai steps are standard; plan the EU-aligned return if you may go back.",
  officialExtra:
    "<p><strong>Swiss sources:</strong> " +
    "<a href=\"https://www.blv.admin.ch/blv/en/home/tiere/reisen-mit-heimtieren.html\" " +
    "target=\"_blank\" rel=\"noopener\">FSVO travelling with pets</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener\">EU pet movement</a> (Switzerland applies EU-aligned rules). " +
    "Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-switzerland.html\">taking a pet to Switzerland</a>.</p>",
  sections: [
    { h: "The timeline — what to do when", html:
      euImportTimeline("<strong>the Federal Food Safety and Veterinary Office (FSVO)</strong> and the cantonal veterinary office") +
      "<p>Step pages: " + STD_STEPS + EU_IMPORT_REF },
    { h: "The Swiss side of the paperwork", html:
      "<p>Switzerland uses an EU-aligned pet passport and pet-travel system. For travel " +
      "to Thailand your vet completes an export health certificate, endorsed through " +
      "<strong>FSVO</strong> and the <strong>cantonal veterinary office</strong>. The " +
      "passport alone is not what Thailand requires.</p>" +
      "<p>Use a vet experienced in export work and confirm cantonal endorsement steps early.</p>" },
    { h: "Documents Thailand expects", html:
      "<p>Regardless of origin country, the DLD asks for:</p>" +
      TH_IMPORT_TABLE + TH_ARRIVAL_STD },
    { h: "Planning the return to Switzerland", html:
      "<p>Switzerland applies EU-aligned rules for pets arriving from outside the " +
      "low-risk list. Returning a pet from Thailand will involve a valid rabies " +
      "vaccination and a <a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">" +
      "rabies titer test</a>, with a waiting period before entry. Confirm any " +
      "pre-departure-test exception and its continuity/documentation conditions " +
      "with FSVO. See " +
      "<a href=\"/take-pet-out-of-thailand/to-switzerland.html\">exporting a pet to Switzerland</a>.</p>" +
      '<div class="callout callout-tip"><div class="ch">Confirm the Thai requirement for this origin</div>' +
      "<p>The reviewed detailed Thai instruction is scoped to USA-origin dogs, cats and " +
      "rabbits. Ask the responsible AQS whether this origin needs any additional test; " +
      "the EU or Swiss return pathway is a separate rule.</p></div>" },
    { h: "Common mistakes on this corridor", html: EU_IMPORT_FAILS }
  ],
  faqs: [
    ["Does Switzerland being outside the EU change the process?",
     "<p>Not greatly. Switzerland runs an EU-aligned pet-travel system, so the export certificate and passport work much as in an EU country. Confirm the current procedure with FSVO and your vet.</p>"],
    ["What will Switzerland need for the return?",
     "<p>A valid rabies vaccination and a rabies titer test, with a waiting period before entry, in line with EU-aligned rules. Doing the test early avoids delay later.</p>"],
    ["Which authority endorses the export certificate?",
     "<p>FSVO and the cantonal veterinary office. Your export-experienced vet coordinates both steps.</p>"],
    ["Is the EU pet passport enough for Thailand?",
     "<p>No. Thailand needs an export certificate endorsed by the Swiss authorities, plus the DLD import permit.</p>"],
    ["Will my pet be quarantined on arrival in Thailand?",
     "<p>DLD decides clearance, detention or other action after inspecting the animal and original documents; the reviewed source does not guarantee same-day release. See our <a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">quarantine guide</a>.</p>"]
  ]
}));

/* ---------------- IRELAND ---------------- */
pages.push(country({
  slug: "from-ireland", crumb: "From Ireland",
  title: "Bring Pet to Thailand from Ireland (2026) | PattayaPets",
  desc: "Ireland to Thailand pet import: EU export certificate, Department of Agriculture " +
    "endorsement, DLD permit timeline, tapeworm return rule and checklist.",
  h1: "Bringing a pet to Thailand from Ireland",
  lede: "The Thai steps are standard for Irish owners. The journey home has the " +
    "tapeworm rule for dogs worth planning around.",
  officialExtra:
    "<p><strong>Irish / EU sources:</strong> " +
    "<a href=\"https://www.gov.ie/en/department-of-agriculture-food-and-the-marine/publications/pet-travel/\" " +
    "target=\"_blank\" rel=\"noopener\">Department of Agriculture pet travel</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener\">EU pet movement</a>. " +
    "Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-ireland.html\">taking a pet to Ireland</a>.</p>",
  sections: [
    { h: "The timeline — what to do when", html:
      euImportTimeline("<strong>the Department of Agriculture, Food and the Marine</strong>") +
      "<p>Step pages: " + STD_STEPS + EU_IMPORT_REF },
    { h: "The Irish side of the paperwork", html:
      "<p>For travel from Ireland to a non-EU country such as Thailand, your vet completes " +
      "an <strong>EU export health certificate</strong>, endorsed by <strong>the " +
      "Department of Agriculture, Food and the Marine</strong>. The EU pet passport " +
      "governs intra-EU travel only and is not what Thailand requires.</p>" +
      "<p>Use a vet experienced in export work and allow time for Department endorsement.</p>" },
    { h: "Documents Thailand expects", html:
      "<p>Regardless of origin country, the DLD asks for:</p>" +
      TH_IMPORT_TABLE + TH_ARRIVAL_STD },
    { h: "Planning the return to Ireland", html:
      EU_RETURN +
      "<p>Ireland also keeps the <strong>tapeworm (Echinococcus) treatment rule</strong>: " +
      "a dog entering Ireland must be treated against tapeworm by a vet within a set " +
      "window before arrival (commonly 24 to 120 hours). Build that into the return " +
      "plan, and confirm the current detail with the Department. See " +
      "<a href=\"/take-pet-out-of-thailand/to-ireland.html\">exporting a pet to Ireland</a>.</p>" },
    { h: "Common mistakes on this corridor", html: EU_IMPORT_FAILS +
      "<ul><li><strong>Forgetting the tapeworm treatment on return</strong> &mdash; dogs need vet-administered treatment shortly before Ireland entry.</li></ul>" }
  ],
  faqs: [
    ["Is the EU pet passport enough for Thailand?",
     "<p>No. It is for movement within the EU. Thailand needs an EU export health certificate endorsed by the Department of Agriculture, Food and the Marine, plus the Thai DLD import permit.</p>"],
    ["What does Ireland require for the return journey?",
     "<p>A valid rabies vaccination, a qualifying titer under the current 90-day pre-certificate rule and, for dogs, the authority&rsquo;s tapeworm treatment. Confirm the full route with Ireland&rsquo;s Department and the shared titer rule with the Commission. " + claimLink("EU-RABIES-TITER-2026-08", "Commission rule") + ".</p>"],
    ["Which authority endorses the export certificate?",
     "<p>The Department of Agriculture, Food and the Marine through the official veterinary channel your vet uses.</p>"],
    ["Will my pet be quarantined on arrival in Thailand?",
     "<p>DLD decides clearance, detention or other action after inspecting the animal and original documents; the reviewed source does not guarantee same-day release. See our <a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">quarantine guide</a>.</p>"],
    ["Should I do the titer test before leaving Ireland?",
     "<p>Ask the destination authority whether a satisfactory test completed and recorded before departure qualifies for its exception, including vaccination-continuity and documentation conditions.</p>"]
  ]
}));

/* ---------------- NEW ZEALAND ---------------- */
pages.push(country({
  slug: "from-new-zealand", crumb: "From New Zealand",
  title: "Bring Pet to Thailand from New Zealand (2026) | PattayaPets",
  desc: "New Zealand to Thailand pet import: MPI export endorsement, DLD permit timeline, " +
    "document checklist and why the return to NZ is the hard part.",
  h1: "Bringing a pet to Thailand from New Zealand",
  lede: "New Zealand export endorsement and Thailand import are separate processes. " +
    "Check the current MPI return pathway before deciding to leave with the animal.",
  officialExtra:
    "<p><strong>New Zealand sources:</strong> " +
    "<a href=\"https://www.mpi.govt.nz/bring-send-to-nz/pets-travelling-to-nz/bringing-cats-and-dogs-to-nz/step-by-step-guide-to-bringing-cats-and-dogs-to-nz\" " +
    "target=\"_blank\" rel=\"noopener\">MPI &mdash; importing dogs and cats</a>; " +
    "<a href=\"https://www.mpi.govt.nz/bring-send-to-nz/pets-travelling-to-nz/bringing-cats-and-dogs-to-nz\" target=\"_blank\" " +
    "rel=\"noopener\">MPI pet import hub</a>. " +
    "Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-new-zealand.html\">taking a pet to New Zealand</a>.</p>",
  sections: [
    { h: "The timeline — MPI export and Thai import", html:
      "<p>Run the MPI export steps and the DLD import permit in parallel once " +
      "the Thai primary-vaccine wait is complete. Confirm the departure airport and " +
      "pet route with MPI and the operating airline.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">Before filing the Thai permit</th>' +
      '<td>Obtain an implantation certificate; complete all Thai-required primary vaccinations, then wait at least 21 days. Documented boosters are exempt when continuity is shown</td>' +
      '<td>New Zealand vet</td></tr>' +
      '<tr><th scope="row">After the primary-vaccine wait</th>' +
      '<td>Apply for <a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a> (form R1/1) using the responsible AQS&rsquo;s confirmed channel; allow 5&ndash;7 Thailand business days for a complete application</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">3+ weeks before</th>' +
      '<td>MPI export application; confirm Thailand import requirements with MPI and your vet</td>' +
      '<td>MPI + vet</td></tr>' +
      '<tr><th scope="row">2 weeks before</th>' +
      '<td>Book airline (cabin, hold or cargo); confirm crate and routing to Suvarnabhumi</td>' +
      '<td>Airline</td></tr>' +
      '<tr><th scope="row">Within 10 days of departure</th>' +
      '<td>Final clinical examination; MPI <strong>endorses the export health certificate</strong></td>' +
      '<td>MPI + vet</td></tr>' +
      '<tr><th scope="row">Before travel</th>' +
      '<td>Follow the responsible AQS&rsquo;s current itinerary-notification instructions; the reviewed source gives no universal three-day rule</td>' +
      '<td>Arrival AQS</td></tr>' +
      '<tr><th scope="row">Arrival in Thailand</th>' +
      '<td>AQS inspection with DLD permit, MPI export certificate and vaccination records</td>' +
      '<td>DLD AQS</td></tr>' +
      '</tbody></table></div>' },
    { h: "The New Zealand side of the paperwork", html:
      "<p>In New Zealand the export health certificate is completed by your vet and " +
      "endorsed by <strong>the Ministry for Primary Industries (MPI)</strong>. Use the " +
      "current MPI export process and an appropriately authorised veterinarian.</p>" +
      "<p>MPI checks that the destination country&rsquo;s import rules are met. For " +
      "Thailand that means matching the DLD permit, microchip, vaccinations and " +
      "certificate validity window.</p>" },
    { h: "Documents the DLD expects", html: TH_IMPORT_TABLE + TH_ARRIVAL_STD },
    { h: "Think hard about the return to New Zealand", html:
      "<p>This is the part to research <strong>before you leave New Zealand</strong>, not " +
      "after settling in Pattaya. New Zealand protects its rabies-free status with strict " +
      "import rules. Thailand is <strong>not</strong> a low-risk origin under MPI&rsquo;s " +
      "country categories. The current MPI pathway may include:</p>" +
      "<ul>" +
      "<li>An <strong>MPI import permit</strong> applied for well before travel.</li>" +
      "<li><a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">Rabies titer testing</a> " +
      "from an MPI-approved laboratory, on MPI&rsquo;s schedule.</li>" +
      "<li>A <strong>waiting period</strong> after the blood sample before export from Thailand (MPI sets the current period &mdash; verify directly).</li>" +
      "<li>Thai <a href=\"/take-pet-out-of-thailand/export-process.html\">DLD export paperwork</a> " +
      "that matches MPI&rsquo;s import conditions.</li>" +
      "<li><strong>Mandatory post-arrival quarantine</strong> at an MPI-approved facility in New Zealand (commonly Auckland or Christchurch) &mdash; not optional.</li>" +
      "</ul>" +
      "<p>MPI&rsquo;s pathway depends on the current country list and the animal&rsquo;s case. " +
      "Confirm it before committing to travel. See our mirror guide " +
      "<a href=\"/take-pet-out-of-thailand/to-new-zealand.html\">exporting a pet to New Zealand</a>.</p>" +
      '<div class="callout callout-emergency"><div class="ch">The return is a separate pathway</div>' +
      "<p>Do not assume the New Zealand return mirrors the outbound process. Obtain the " +
      "current MPI steps and written quotes before making a travel decision.</p></div>" },
    { h: "Common mistakes on this corridor", html: TH_IMPORT_FAILS +
      "<ul>" +
      "<li><strong>Assuming you can return the pet easily</strong> &mdash; MPI rules from Thailand are among the strictest anywhere.</li>" +
      "<li><strong>Unconfirmed MPI appointment</strong> &mdash; obtain the authority&rsquo;s actual endorsement schedule.</li>" +
      "<li><strong>DLD permit timing</strong> &mdash; finish the primary-vaccine wait, then use the AQS&rsquo;s confirmed intake and allow 5&ndash;7 Thailand business days for a complete application.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Is it hard to take a pet out of New Zealand?",
     "<p>Your authorised veterinarian and MPI complete the export-certificate process. Separately confirm the Thai permit sequence and airline route; this guide has no measured basis for rating the move easy or hard.</p>"],
    ["Can I bring my pet back to New Zealand from Thailand?",
     "<p>It is possible but demanding. MPI applies strict biosecurity rules; a return from Thailand typically involves titer testing, long lead times, an import permit and mandatory quarantine. Research MPI's current requirements before you travel, not after.</p>"],
    ["Does Thailand require a titer test for a pet from New Zealand?",
     "<p>The reviewed detailed Thai instruction is scoped to USA-origin dogs, cats and rabbits, so it does not establish the answer for New Zealand. Ask the responsible AQS; treat any later NZ, EU or UK test as a separate destination rule.</p>"],
    ["Which New Zealand airports handle pet export to Thailand?",
     "<p>Confirm the current export port with MPI and the operating airline; this guide has not verified a universal airport list.</p>"],
    ["Will my pet be quarantined on arrival in Thailand?",
     "<p>DLD decides after arrival inspection. Complete documents do not guarantee a particular release time or rule out detention. Follow the responsible AQS&rsquo;s current notification instructions.</p>"]
  ]
}));

/* ---------------- JAPAN ---------------- */
pages.push(country({
  slug: "from-japan", crumb: "From Japan",
  title: "Bring Pet to Thailand from Japan (2026) | PattayaPets",
  desc: "Japan to Thailand pet import: AQS export inspection, DLD import timeline, " +
    "document checklist, and the 180-day rule if you ever return to Japan.",
  h1: "Bringing a pet to Thailand from Japan",
  lede: "Japan&rsquo;s Animal Quarantine Service runs a thorough export process. The Thai " +
    "import requirements must be confirmed with the responsible AQS. If you might " +
    "return to Japan, MAFF&rsquo;s non-designated route includes a 180-day post-sample wait.",
  updated: "2026-08-01",
  officialExtra:
    "<p><strong>Japan sources:</strong> " +
    '<a href="https://www.maff.go.jp/aqs/english/animal/dog/import-other.html" target="_blank" ' +
    "rel=\"noopener\">MAFF AQS &mdash; import from non-designated regions</a> " +
    "(Thailand is non-designated); " +
    '<a href="https://www.maff.go.jp/aqs/english/" target="_blank" rel="noopener">' +
    "MAFF Animal Quarantine Service</a>. Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-japan.html\">taking a pet to Japan</a>.</p>",
  sections: [
    { h: "The timeline — Japan export and Thai import", html:
      "<p>Run the Japanese export steps and the DLD import permit in parallel once " +
      "vaccinations are current.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">Before filing the Thai permit</th>' +
      '<td>Obtain an implantation certificate; complete all Thai-required primary vaccinations, then wait at least 21 days. Documented boosters are exempt when continuity is shown</td>' +
      '<td>Japanese vet</td></tr>' +
      '<tr><th scope="row">After the primary-vaccine wait</th>' +
      '<td>Apply for <a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a> (form R1/1) using the responsible AQS&rsquo;s confirmed channel; allow 5&ndash;7 Thailand business days for a complete application</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">Before booking</th>' +
      '<td>Ask the departure-airport AQS for its current export application and inspection sequence; provide Thailand&rsquo;s confirmed requirements</td>' +
      '<td>MAFF AQS (departure airport)</td></tr>' +
      '<tr><th scope="row">2 weeks before</th>' +
      '<td>Book airline (cabin, hold or cargo); confirm crate and routing to Suvarnabhumi</td>' +
      '<td>Airline</td></tr>' +
      '<tr><th scope="row">On the schedule confirmed by AQS</th>' +
      '<td>Complete the required clinical examination and obtain the export quarantine certificate if compliant</td>' +
      '<td>AQS + vet</td></tr>' +
      '<tr><th scope="row">Arrival in Thailand</th>' +
      '<td>AQS inspection with DLD permit, export certificate and vaccination records</td>' +
      '<td>DLD AQS</td></tr>' +
      '</tbody></table></div>' },
    { h: "Documents the DLD expects", html: TH_IMPORT_TABLE + TH_ARRIVAL_STD },
    { h: "Planning the return to Japan", html:
      "<p>Thailand is a <strong>non-designated region</strong> under MAFF rules. If there is " +
      "any chance of returning your pet to Japan, research this <strong>before you leave " +
      "Japan</strong> &mdash; not after settling in Pattaya:</p>" +
      "<ul>" +
      "<li>ISO-compatible microchip before <strong>two or more qualifying rabies vaccinations</strong>.</li>" +
      "<li><a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">Rabies antibody test</a> " +
      "at a MAFF-designated laboratory &mdash; result &ge; 0.5 IU/ml.</li>" +
      "<li><strong>180-day wait</strong> from the blood sample date before the pet may enter Japan.</li>" +
      "<li><strong>Advance notification</strong> to the AQS at your arrival port at least " +
      "<strong>40 days</strong> before arrival (online via NACCS or by email).</li>" +
      "<li>Pre-departure clinical examination and government-endorsed export certificate from Thailand.</li>" +
      "</ul>" +
      "<p>Miss a step and Japan can hold the pet in detention quarantine for up to 180 days. " +
      "See our mirror guide " +
      "<a href=\"/take-pet-out-of-thailand/to-japan.html\">exporting a pet to Japan</a> " +
      "for the full Thailand-to-Japan pathway. " +
      claimLink("JP-NONDESIGNATED-ENTRY-2026-08", "MAFF source") + ".</p>" },
    { h: "Common mistakes on this corridor", html: TH_IMPORT_FAILS +
      "<ul>" +
      "<li><strong>Starting AQS export late</strong> &mdash; obtain the responsible office&rsquo;s actual application and inspection schedule before booking.</li>" +
      "<li><strong>Ignoring the 180-day clock</strong> &mdash; the wait runs from the titer blood draw, not from when results arrive.</li>" +
      "<li><strong>Notification under 40 days</strong> &mdash; MAFF may reject late advance notification for Japan entry.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Is Japan's export process complicated?",
     "<p>Use the departure-airport AQS&rsquo;s current steps: confirm Thailand&rsquo;s import requirements, make the required export application, attend the scheduled clinical examination and obtain the export quarantine certificate if compliant.</p>"],
    ["What will Japan require for the return from Thailand?",
     "<p>The non-designated route includes microchip, two or more qualifying rabies vaccinations, MAFF-designated titer testing at or above 0.5 IU/ml, a 180-day wait from sampling, notification at least 40 days before arrival and Thai export paperwork. " + claimLink("JP-NONDESIGNATED-ENTRY-2026-08", "MAFF source") + ".</p>"],
    ["Can puppies under 10 months enter Japan from Thailand?",
     "<p>Do not infer eligibility from age alone. The pet must complete the microchip, two-or-more qualifying rabies vaccinations, post-vaccination sampling and 180-day post-sample wait in the required order. Confirm the animal&rsquo;s actual dates with the arrival-port AQS before booking. " + claimLink("JP-NONDESIGNATED-ENTRY-2026-08", "MAFF source") + ".</p>"],
    ["Which Japanese airports handle pet export to Thailand?",
     "<p>This guide does not maintain a live airport or service list. Confirm the actual departure airport, its responsible AQS office, the inspection appointment and airline acceptance before payment.</p>"],
    ["Does Thailand quarantine pets from Japan?",
     "<p>DLD decides after arrival inspection. Complete documents do not guarantee a particular release time or rule out detention. Follow the responsible AQS&rsquo;s current notification instructions.</p>"]
  ]
}));

/* ---------------- SINGAPORE ---------------- */
pages.push(country({
  slug: "from-singapore", crumb: "From Singapore",
  title: "Bring Pet to Thailand from Singapore (2026) | PattayaPets",
  desc: "Singapore to Thailand pet import: AVS export certificate, DLD import timeline, " +
    "document checklist, and Schedule III rules if you return from Thailand.",
  h1: "Bringing a pet to Thailand from Singapore",
  lede: "Singapore&rsquo;s AVS export process and Thailand&rsquo;s DLD import process are " +
    "separate. A return from Thailand can trigger " +
    "<strong>Schedule III</strong> rules including quarantine.",
  updated: "2026-08-01",
  officialExtra:
    "<p><strong>Singapore sources:</strong> " +
    '<a href="https://avs.nparks.gov.sg/pets/importing-exporting-a-pet/import/dogs-and-cats/" ' +
    'target="_blank" rel="noopener">AVS &mdash; importing dogs and cats</a> ' +
    "(verify your export country&rsquo;s rabies schedule close to travel). Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-singapore.html\">taking a pet to Singapore</a>.</p>",
  sections: [
    { h: "The timeline — Singapore export and Thai import", html:
      "<p>AVS export endorsement and the DLD import permit can run in parallel once " +
      "vaccinations are current.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">Before filing the Thai permit</th>' +
      '<td>Obtain an implantation certificate; complete all Thai-required primary vaccinations, then wait at least 21 days. Documented boosters are exempt when continuity is shown</td>' +
      '<td>AVS-accredited vet</td></tr>' +
      '<tr><th scope="row">After the primary-vaccine wait</th>' +
      '<td>Apply for <a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a> (form R1/1) using the responsible AQS&rsquo;s confirmed channel; allow 5&ndash;7 Thailand business days for a complete application</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">On the schedule AVS confirms</th>' +
      '<td>Complete AVS&rsquo;s current export-certificate and endorsement sequence; provide Thailand&rsquo;s confirmed import conditions</td>' +
      '<td>AVS</td></tr>' +
      '<tr><th scope="row">2 weeks before</th>' +
      '<td>Book only after the operating airline confirms the route and whether it accepts cabin, hold or cargo</td>' +
      '<td>Airline</td></tr>' +
      '<tr><th scope="row">In AVS&rsquo;s certificate window</th>' +
      '<td>Complete the examination and any treatment AVS requires for the specific export certificate</td>' +
      '<td>Vet</td></tr>' +
      '<tr><th scope="row">Arrival in Thailand</th>' +
      '<td>AQS inspection with DLD permit, AVS export certificate and vaccination records</td>' +
      '<td>DLD AQS</td></tr>' +
      '</tbody></table></div>' },
    { h: "Documents the DLD expects", html: TH_IMPORT_TABLE + TH_ARRIVAL_STD },
    { h: "Planning the return to Singapore", html:
      "<p>Singapore classifies export countries by rabies risk. Thailand is <strong>not</strong> " +
      "Schedule I or II, so a return from Pattaya falls under <strong>Schedule III</strong> " +
      "rules &mdash; verify the current schedule on the AVS website before you travel:</p>" +
      "<ul>" +
      "<li>Microchip whose number matches the vaccination, laboratory and certificate records.</li>" +
      "<li>Valid rabies vaccination using an AVS-accepted inactivated or recombinant vaccine.</li>" +
      "<li><a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">Rabies serology (RNATT)</a> " +
      "at least 28 days after vaccination; blood sample at least <strong>90 days</strong> and " +
      "within <strong>12 months</strong> before export; result &ge; 0.5 IU/ml at an approved lab.</li>" +
      "<li>Applicable AVS pet licence, then the <strong>import licence</strong>.</li>" +
      "<li>Book <strong>quarantine at the Animal Quarantine Centre (AQC)</strong> &mdash; Schedule III " +
      "imports require at least <strong>30 days</strong> post-arrival quarantine and an arrival rabies vaccination.</li>" +
      "<li>Internal and external parasite treatments 2&ndash;7 days before export and the required veterinary certificate no more than 7 days before export.</li>" +
      "</ul>" +
      "<p>Start the titer clock early in Thailand. See " +
      "<a href=\"/take-pet-out-of-thailand/to-singapore.html\">exporting a pet to Singapore</a> " +
      "for the full Thailand-to-Singapore pathway. " +
      claimLink("SG-SCHEDULE-III-ENTRY-2026-08", "AVS Schedule III source") + ".</p>" },
    { h: "Common mistakes on this corridor", html: TH_IMPORT_FAILS +
      "<ul>" +
      "<li><strong>Assuming Singapore&rsquo;s export ease means an easy return</strong> &mdash; " +
      "Schedule III re-entry is a different process with quarantine.</li>" +
      "<li><strong>Blood sample too soon</strong> &mdash; the sample must be at least 28 days after the qualifying rabies vaccination and 90 days to 12 months before export.</li>" +
      "<li><strong>No quarantine booking</strong> &mdash; AQC space must be reserved via the Quarantine Management System.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Is it hard to export a pet from Singapore to Thailand?",
     "<p>Use AVS&rsquo;s current export steps, an accredited veterinarian, the Thai permit sequence and the operating airline&rsquo;s written acceptance. This guide has no measured basis for rating the move easy or hard.</p>"],
    ["What does Singapore require for the return from Thailand?",
     "<p>The checked Schedule III route requires matching microchip records, valid rabies vaccination, qualifying RNATT at or above 0.5 IU/ml, applicable licences, parasite treatments, an AQC booking, arrival rabies vaccination and at least 30 days of quarantine. " + claimLink("SG-SCHEDULE-III-ENTRY-2026-08", "AVS source") + ".</p>"],
    ["Does Thailand treat Singapore as rabies-free?",
     "<p>The reviewed detailed Thai instruction is scoped to USA-origin dogs, cats and rabbits and does not establish a Singapore classification. Confirm the required import documents and any origin-specific condition with the responsible AQS.</p>"],
    ["Can I fly Singapore to Bangkok with a pet in cabin?",
     "<p>Only the operating airline can confirm the mode for the specific animal, container, route and aircraft. Obtain written acceptance before booking.</p>"],
    ["How long before I should apply for the DLD import permit?",
     "<p>Complete all required primary vaccinations and wait at least 21 days before applying; documented boosters are exempt when continuity is shown. The scoped Thai guide says to allow 5&ndash;7 Thai business days. Confirm the sequence and submission channel with the arrival AQS.</p>"]
  ]
}));

/* ---------------- UAE ---------------- */
pages.push(country({
  slug: "from-uae", crumb: "From the UAE",
  title: "Bring Pet to Thailand from UAE (2026) | PattayaPets",
  desc: "UAE to Thailand pet import: MOCCAE export permit, DLD import timeline, " +
    "vaccination checklist, airline cargo rules and return-to-UAE planning.",
  h1: "Bringing a pet to Thailand from the UAE",
  lede: "Dubai and Abu Dhabi to Bangkok is a corridor Gulf expats use constantly. " +
    "You are juggling <strong>two permits</strong> &mdash; MOCCAE to leave the UAE, " +
    "DLD to enter Thailand &mdash; plus airline rules that often mean cargo, not cabin.",
  officialExtra:
    "<p><strong>UAE sources:</strong> " +
    "<a href=\"https://moccae.gov.ae/en/services/import-permit-pets\" target=\"_blank\" " +
    "rel=\"noopener\">MOCCAE import/export of pets</a> (service updated January 2025; " +
    "transition to Emirates Drug Establishment may apply &mdash; confirm current portal). " +
    "Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-uae.html\">taking a pet to the UAE</a>.</p>",
  sections: [
    { h: "The timeline — what to do when", html:
      "<p>Apply for <strong>both</strong> the UAE export side and the Thai import side " +
      "in parallel once vaccinations are in order.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">Before filing the Thai permit</th>' +
      '<td>Obtain an implantation certificate; complete all Thai-required primary vaccinations, then wait at least 21 days. Documented boosters are exempt when continuity is shown</td>' +
      '<td>UAE-licensed vet</td></tr>' +
      '<tr><th scope="row">~30 days before departure</th>' +
      '<td>Apply for <strong>MOCCAE export permit</strong> to leave the UAE</td>' +
      '<td>MOCCAE online portal</td></tr>' +
      '<tr><th scope="row">After the primary-vaccine wait</th>' +
      '<td>Apply for <a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a> (form R1/1) using the responsible AQS&rsquo;s confirmed channel; allow 5&ndash;7 Thailand business days for a complete application</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">2&ndash;3 weeks before</th>' +
      '<td>Book pet space &mdash; confirm whether the airline accepts cabin, hold or requires <strong>manifested cargo</strong> per IATA</td>' +
      '<td>Airline</td></tr>' +
      '<tr><th scope="row">Final week</th>' +
      '<td>Official export health certificate from competent UAE veterinary authority; any pre-shipment treatments MOCCAE requires</td>' +
      '<td>Vet + MOCCAE</td></tr>' +
      '<tr><th scope="row">Before travel</th>' +
      '<td>Follow the responsible AQS&rsquo;s current itinerary-notification instructions; the reviewed source gives no universal three-day rule</td>' +
      '<td>Arrival AQS</td></tr>' +
      '<tr><th scope="row">Arrival in Thailand</th>' +
      '<td>AQS inspection; 500&nbsp;baht fee if paperwork is complete</td>' +
      '<td>DLD</td></tr>' +
      '</tbody></table></div>' +
      "<p>Thai-side steps: " + STD_STEPS + "</p>" },
    { h: "The UAE export side (MOCCAE)", html:
      "<p>Before a pet leaves the United Arab Emirates, the Ministry of Climate Change " +
      "and Environment (MOCCAE) requires an <strong>export permit</strong>, permanent " +
      "microchip identification, valid vaccinations (including rabies) and an official " +
      "veterinary health certificate. MOCCAE publishes the current service on " +
      "<a href=\"https://moccae.gov.ae/en/services/import-permit-pets\" target=\"_blank\" " +
      "rel=\"noopener\">its website</a>.</p>" +
      "<p><strong>Residents who may return to the UAE:</strong> MOCCAE rules state that " +
      "pets leaving the UAE should obtain a <strong>MOCCAE veterinary health certificate " +
      "before departure</strong>, keep rabies vaccination valid for the return, and apply " +
      "for an import permit before coming back. If rabies vaccination lapses while you are " +
      "in Thailand, the pet may be treated as a first-time import on return.</p>" +
      "<p><strong>Breed restrictions:</strong> several dog types (including Pit Bull types, " +
      "Tosa, Dogo Argentino, Fila Brasileiro, wolf hybrids and American Staffordshire " +
      "Terrier) are prohibited from UAE import. Confirm your breed before assuming you can " +
      "return.</p>" },
    { h: "Documents for Thailand", html: TH_DOCS_TABLE + TH_ARRIVAL_UAE },
    { h: "Planning the return to the UAE", html:
      "<p>If you might take your pet back to the Emirates, read " +
      "<a href=\"/take-pet-out-of-thailand/to-uae.html\">exporting a pet to the UAE</a> " +
      "before you leave. MOCCAE requires a prior <strong>import permit</strong> (valid " +
      "90 days from issue per current service guidance), matching microchip, rabies " +
      "vaccination at least <strong>21 days</strong> before arrival (and not before the " +
      "pet is <strong>three months old</strong>), core vaccinations for dogs and cats, and " +
      "often pre-shipment treatments within a set window. Entry inspection fees apply at " +
      "the port of arrival.</p>" +
      "<p>The UAE generally does <em>not</em> require a rabies titer test from Thailand, " +
      "but if you might move on to the EU or UK, doing the " +
      "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">titer test</a> " +
      "early keeps that option open.</p>" },
    { h: "Common mistakes on this corridor", html: UAE_FAILS }
  ],
  faqs: [
    ["Does the UAE require special paperwork to export a pet to Thailand?",
     "<p>Yes. MOCCAE requires an export permit, microchip, vaccinations and an endorsed health certificate before the pet leaves the UAE — in addition to Thailand's DLD import permit on the Thai side.</p>"],
    ["Do I need both a MOCCAE permit and a Thai import permit?",
     "<p>Yes. MOCCAE permission covers export from the UAE; the DLD import permit (form R1/1) covers entry into Thailand. They are separate applications to separate authorities.</p>"],
    ["Can my pet fly in the cabin from Dubai to Bangkok?",
     "<p>It depends on the airline and MOCCAE conditions. Some routes require manifested cargo under IATA rules. Confirm with your airline and MOCCAE before booking — do not assume cabin travel is available.</p>"],
    ["Is there quarantine when I bring a pet from the UAE to Thailand?",
     "<p>DLD decides clearance, detention or other action after inspecting the animal and original documents. The reviewed source does not guarantee release or a fixed detention duration; see our <a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">quarantine guide</a>.</p>"],
    ["Which emirate's rules apply?",
     "<p>MOCCAE sets federal import/export rules, but airlines and local authorities may add conditions. Confirm for the emirate and airport you use (Dubai, Abu Dhabi, Sharjah, etc.).</p>"]
  ]
}));

/* ---------------- U-TAPAO vs BANGKOK ---------------- */
pages.push(importTopic({
  path: "/bring-pet-to-thailand/u-tapao-airport-pets.html",
  title: "U-Tapao vs Bangkok for Pet Entry (2026) | PattayaPets",
  desc: "What the reviewed DLD sources establish for Suvarnabhumi and U-Tapao, the " +
    "remaining verification gap, and onward ground transport to Pattaya.",
  crumb: "U-Tapao or Bangkok?",
  updated: "2026-07-31",
  breadcrumbs: SUB,
  eyebrow: "Bringing a pet to Thailand",
  h1: "Flying a pet into Pattaya: U-Tapao or Bangkok?",
  lede: "Pattaya has its own airport at U-Tapao, so it is a natural question: can " +
    "you skip Bangkok and fly your pet straight in? Here is the honest picture.",
  verify: VERIFY,
  sections: [
    { h: "Pattaya's two airport options", html:
      "<p>Pattaya is served by two airports. <strong>U-Tapao (Rayong-Pattaya " +
      "International, UTP)</strong> is closer to Pattaya by road. <strong>Suvarnabhumi " +
      "(Bangkok, BKK)</strong> has a DLD Animal Quarantine Station shown in the reviewed " +
      "official sources. Airport choice for a live-animal import must follow DLD&rsquo;s " +
      "written permit and current station instructions.</p>" },
    { h: "Where pet imports are actually handled", html:
      "<p>A live-animal import to Thailand has to clear an airport with a Department " +
      "of Livestock Development <strong>Animal Quarantine Station</strong> and the " +
      "established import process. Suvarnabhumi appears in the reviewed DLD and scoped " +
      "consular sources.</p>" +
      "<p><strong>No reviewed official source establishes a U-Tapao pet-import AQS.</strong> " +
      "The DLD map titled as a map of 59 Animal Quarantine Stations, published " +
      "8 October 2025 and rechecked 1 August 2026, does not list U-Tapao/Rayong airport. " +
      claimLink("TH-AQS-MAP-2025-10", "DLD AQS map") + ". A separate Thai consular " +
      "instruction revised 30 January 2025 names six arrival locations but is expressly " +
      "detailed for dogs, cats and rabbits from the United States; it also does not name " +
      "U-Tapao. Do not generalise its list beyond that scope. " +
      claimLink("TH-USA-AIRPORTS-2025-01", "scoped consular instruction") + ".</p>" +
      "<p>Because absence from these sources is not proof that no later or case-specific " +
      "service exists, obtain written DLD confirmation before routing through U-Tapao. " +
      "Unless DLD confirms the port on the R1/1 pathway, plan through an airport whose " +
      "AQS accepts the application, such as Suvarnabhumi. See also " +
      "<a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">pet quarantine " +
      "in Thailand</a> for what happens when paperwork is not in order.</p>" },
    { h: "A documented Pattaya-bound route", html:
      "<p>A documented option for Pattaya-bound pets is to arrive at " +
      "<strong>Suvarnabhumi</strong>, present the animal and documents at the " +
      "<a href=\"/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html\">quarantine " +
      "station there</a>, and travel on to Pattaya by road. Compare carriers and " +
      "connections only after the arrival AQS confirms the port. You still need the " +
      "<a href=\"/bring-pet-to-thailand/import-permit-thailand-dld.html\">DLD import permit</a> " +
      "and an airline that accepts pets under its " +
      "<a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">pet policy</a>.</p>" },
    { h: "Getting from the airport to Pattaya", html:
      "<p>From Suvarnabhumi, arrange a <strong>pet-friendly vehicle</strong> in " +
      "advance that explicitly accepts the animal and travel crate. Ask the carrier " +
      "about vehicle ventilation, stops and restraint; never leave an animal in a hot vehicle.</p>" },
    { h: "Official sources", html: OFFICIAL }
  ],
  faqs: [
    ["Can I fly my pet directly into Pattaya?",
     "<p>Do not book U-Tapao on the basis of the sources reviewed here: neither the current DLD AQS map nor the scoped consular airport list names it. Ask DLD in writing whether the airport can accept your R1/1 pathway. Suvarnabhumi is a documented alternative.</p>"],
    ["How do I get my pet from Bangkok to Pattaya?",
     "<p>Arrange a road vehicle that explicitly accepts the animal and crate. Confirm ventilation, restraint and planned stops; never leave the animal in a hot vehicle.</p>"],
    ["Which airport should I plan for?",
     "<p>Suvarnabhumi is documented in the reviewed official sources. U-Tapao is not listed in them, so use it only if DLD supplies written confirmation for your case.</p>"],
    ["Does the DLD import permit name the arrival airport?",
     "<p>The arrival port and responsible AQS must align with the permit pathway. Confirm the exact R1/1 field and accepted port with DLD before booking; Suvarnabhumi is documented, while U-Tapao is not established by the sources reviewed here.</p>"],
    ["Is U-Tapao close enough to justify fewer flight options?",
     "<p>Distance does not resolve the regulatory gap. The reviewed sources do not establish a U-Tapao AQS, so obtain written DLD confirmation or use a documented AQS port.</p>"]
  ],
  related: [
    { name: "Import checklist", path: "/bring-pet-to-thailand/checklist.html", desc: "Printable step-by-step checklist." },
    { name: "Arriving at Suvarnabhumi", path: "/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html", desc: "The quarantine-station check on landing." },
    { name: "Pet quarantine in Thailand", path: "/bring-pet-to-thailand/thailand-pet-quarantine.html", desc: "What the AQS check really means." },
    { name: "The full process", path: "/bring-pet-to-thailand/", desc: "Every step, in order." },
    { name: "The export process", path: "/take-pet-out-of-thailand/export-process.html", desc: "When you leave Thailand again." },
    { name: "What it costs", path: "/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html", desc: "Budget for the whole move." }
  ]
}));

/* ---------------- INDIA ---------------- */
pages.push(country({
  slug: "from-india", crumb: "From India",
  title: "Bring Pet to Thailand from India (2026) | PattayaPets",
  desc: "India to Thailand pet import: AQCS export certificate timeline, DLD import " +
    "checklist, flight routing via Gulf hubs, and re-import planning if you return.",
  h1: "Bringing a pet to Thailand from India",
  lede: "India uses a formal AQCS export process. Separately complete the Thai import " +
    "steps and obtain route- and animal-specific acceptance from the operating airline.",
  officialExtra:
    "<p><strong>India sources:</strong> " +
    '<a href="https://aqcsindia.gov.in/Home/ImportExportPets" target="_blank" ' +
    "rel=\"noopener\">AQCS import/export of pets</a>; " +
    '<a href="https://aqcsindia.gov.in/Home/ExportPets" target="_blank" rel="noopener">' +
    "AQCS export requirements</a>; " +
    '<a href="https://aqcsindia.gov.in/pdfs/india-dogs-guidance.pdf" target="_blank" ' +
    "rel=\"noopener\">India dog import guidance (PDF)</a>. Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-india.html\">taking a pet to India</a>.</p>",
  sections: [
    { h: "The timeline — AQCS export and DLD import", html:
      "<p>Book an AQCS appointment early &mdash; export certificates are normally issued " +
      "on the same day as inspection but require documents submitted about " +
      "<strong>seven days before embarkation</strong>.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">Before filing the Thai permit</th>' +
      '<td>Obtain an implantation certificate; complete all Thai-required primary vaccinations, then wait at least 21 days. Documented boosters are exempt when continuity is shown</td>' +
      '<td>Indian vet</td></tr>' +
      '<tr><th scope="row">After the primary-vaccine wait</th>' +
      '<td>Apply for <a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a> (form R1/1) using the responsible AQS&rsquo;s confirmed channel; allow 5&ndash;7 Thailand business days for a complete application</td>' +
      '<td>DLD</td></tr>' +
      '<tr><th scope="row">7+ days before departure</th>' +
      '<td>Submit export documents to AQCS; book prior appointment; pet examined at AQCS station</td>' +
      '<td>AQCS (departure city)</td></tr>' +
      '<tr><th scope="row">Within 10 days of departure</th>' +
      '<td>AQCS issues <strong>Certificate of Health for Export</strong> (valid 10 days from issue)</td>' +
      '<td>AQCS</td></tr>' +
      '<tr><th scope="row">2+ weeks before</th>' +
      '<td>Book airline &mdash; many routes connect via Dubai, Doha or Singapore; confirm cabin, hold or cargo</td>' +
      '<td>Airline</td></tr>' +
      '<tr><th scope="row">Arrival in Thailand</th>' +
      '<td>AQS inspection at Suvarnabhumi with DLD permit and AQCS export certificate</td>' +
      '<td>DLD AQS</td></tr>' +
      '</tbody></table></div>' },
    { h: "Documents the DLD expects", html: TH_IMPORT_TABLE + TH_ARRIVAL_STD },
    { h: "AQCS export checklist (India side)", html:
      "<p>AQCS publishes the current list at " +
      '<a href="https://aqcsindia.gov.in/Home/ExportPets" target="_blank" rel="noopener">' +
      "aqcsindia.gov.in</a>. Typically required:</p>" +
      "<ul>" +
      "<li>Two passport-size photos of the pet (4&times;6&nbsp;in, light-facing).</li>" +
      "<li>Owner passport copy and air ticket.</li>" +
      "<li>Microchip certificate and vaccination records.</li>" +
      "<li>Vet &lsquo;fit to fly&rsquo; certificate from a registered local veterinarian.</li>" +
      "<li>Thailand&rsquo;s import requirements attached (DLD permit copy).</li>" +
      "<li>Pet presented for AQCS examination; prior appointment by email or phone.</li>" +
      "</ul>" +
      "<p>This page does not maintain a verified live route schedule. Confirm every " +
      "sector, transit rule, pet mode and container condition with the operating airline; " +
      "see <a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">airline pet policies</a>.</p>" },
    { h: "If you may return to India", html:
      "<p>If the pet was exported from India with an AQCS certificate, a return can be treated " +
      "as <strong>re-import</strong> &mdash; but only if you kept the original export paperwork " +
      "and meet AQCS re-import rules. Otherwise India treats the pet as a fresh import requiring " +
      "an online Advance NOC via the " +
      '<a href="https://aqcsindia.gov.in/Home/ImportExportPets" target="_blank" ' +
      "rel=\"noopener\">AQCS Import Clearance System</a>, applied at least " +
      "<strong>seven working days</strong> before arrival at an approved port (Delhi, Mumbai, " +
      "Chennai, Kolkata, Bangalore or Hyderabad).</p>" +
      "<p>See " +
      "<a href=\"/take-pet-out-of-thailand/to-india.html\">exporting a pet to India</a> " +
      "for the full Thailand-to-India pathway.</p>" },
    { h: "Common mistakes on this corridor", html: TH_IMPORT_FAILS +
      "<ul>" +
      "<li><strong>No AQCS appointment</strong> &mdash; export certificates are not issued without prior booking and document submission ~7 days ahead.</li>" +
      "<li><strong>Expired export certificate</strong> &mdash; AQCS export validity is only 10 days from issue.</li>" +
      "<li><strong>Unverified itinerary</strong> &mdash; confirm pet acceptance and transit rules for every operating sector.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Does Thailand require extra steps for a pet from India?",
     "<p>The reviewed detailed Thai instruction is scoped to USA-origin dogs, cats and rabbits and does not establish India-specific additions or exemptions. Confirm every required document and test with the responsible AQS before booking.</p>"],
    ["Which Indian authority endorses the export certificate?",
     "<p>AQCS (Animal Quarantine and Certification Services) at your departure airport. Book a prior appointment and submit documents about seven days before embarkation.</p>"],
    ["How long is the AQCS export certificate valid?",
     "<p>Typically 10 days from the date of issue or examination at AQCS. Plan your flight and DLD permit timing around that window.</p>"],
    ["Can I fly my pet in cabin from India to Bangkok?",
     "<p>Only the operating airline can confirm the mode for the specific animal, container, route and aircraft. Obtain written acceptance for every sector before booking.</p>"],
    ["What if I want to bring my pet back to India later?",
     "<p>Keep the original AQCS export certificate for re-import. Otherwise apply for an Advance NOC online at least seven working days before arrival. See our export-to-India guide for the full return pathway.</p>"]
  ]
}));

/* ---------------- PHILIPPINES ---------------- */
pages.push(country({
  slug: "from-philippines", crumb: "From the Philippines",
  title: "Bring Pet to Thailand from Philippines (2026) | PattayaPets",
  desc: "Philippines to Thailand pet import: BAI export health certificate, DLD import " +
    "timeline, Manila–Bangkok routing, and BAI re-import rules if you return.",
  h1: "Bringing a pet to Thailand from the Philippines",
  lede: "The Philippine export side runs through the Bureau of Animal Industry (BAI); " +
    "the Thai side requires the DLD import process. Confirm the operating route and pet " +
    "acceptance directly with the airline.",
  officialExtra:
    "<p><strong>Philippines sources:</strong> " +
    '<a href="https://www.bai.gov.ph/Stakeholders/PetImport" target="_blank" ' +
    "rel=\"noopener\">BAI &mdash; pet import procedures</a> (export mirror " +
    "requirements); export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-philippines.html\">taking a pet to the Philippines</a>.</p>",
  sections: [
    { h: "The timeline — BAI export and DLD import", html:
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">Before filing the Thai permit</th>' +
      '<td>Obtain an implantation certificate; complete all Thai-required primary vaccinations, then wait at least 21 days. Documented boosters are exempt when continuity is shown</td>' +
      '<td>BAI-accredited vet</td></tr>' +
      '<tr><th scope="row">After the primary-vaccine wait</th>' +
      '<td>Apply for <a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a> (form R1/1) using the responsible AQS&rsquo;s confirmed channel; allow 5&ndash;7 Thailand business days for a complete application</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">2&ndash;3 weeks before</th>' +
      '<td>Book Manila&ndash;Bangkok flight; confirm cabin, hold or cargo with airline</td>' +
      '<td>Airline</td></tr>' +
      '<tr><th scope="row">Within 10 days of departure</th>' +
      '<td>BAI-endorsed export health certificate / international veterinary health certificate (IVHC)</td>' +
      '<td>BAI + vet</td></tr>' +
      '<tr><th scope="row">Before travel</th>' +
      '<td>Follow the responsible AQS&rsquo;s current itinerary-notification instructions; the reviewed source gives no universal three-day rule</td>' +
      '<td>Arrival AQS</td></tr>' +
      '<tr><th scope="row">Arrival in Thailand</th>' +
      '<td>AQS inspection at Suvarnabhumi; road transfer to Pattaya</td>' +
      '<td>DLD AQS</td></tr>' +
      '</tbody></table></div>' +
      "<p>Thai-side steps: " + STD_STEPS + "</p>" },
    { h: "Documents the DLD expects", html: TH_IMPORT_TABLE + TH_ARRIVAL_STD +
      "<p>From Suvarnabhumi it is a road transfer to Pattaya &mdash; see " +
      "<a href=\"/bring-pet-to-thailand/u-tapao-airport-pets.html\">U-Tapao or Bangkok?</a> " +
      "and <a href=\"/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html\">arrival at " +
      "Suvarnabhumi</a>.</p>" },
    { h: "The Philippine export side (BAI)", html:
      "<p>Export from the Philippines is handled through a <strong>BAI-accredited " +
      "veterinarian</strong> who issues the health certificate and obtains BAI endorsement. " +
      "BAI&rsquo;s import guidance (which mirrors what export paperwork should contain) " +
      "requires:</p>" +
      "<ul>" +
      "<li>ISO-compatible microchip with proof of implantation.</li>" +
      "<li>Rabies vaccination at least <strong>14 days</strong> before travel and within validity.</li>" +
      "<li>Internal and external parasite treatment records.</li>" +
      "<li>Pet at least <strong>4 months (120 days)</strong> old at time of travel.</li>" +
      "<li>IVHC issued within <strong>10 calendar days</strong> before export (BAI import rule " +
      "for pets entering the Philippines &mdash; confirm the same window applies for export).</li>" +
      "</ul>" +
      "<p>Use a BAI-accredited vet experienced in export work and confirm the current BAI " +
      "process before you fix a date.</p>" },
    { h: "If you may return to the Philippines", html:
      "<p>Returning to the Philippines requires a <strong>Sanitary and Phytosanitary Import " +
      "Clearance (SPSIC)</strong> applied online before the pet leaves Thailand &mdash; valid " +
      "<strong>60 days</strong>, maximum three pets per application. Requirements include " +
      "microchip proof, vaccination and deworming records, and a photograph of the pet.</p>" +
      "<p>See " +
      "<a href=\"/take-pet-out-of-thailand/to-philippines.html\">exporting a pet to the Philippines</a> " +
      "for the full Thailand-to-Manila pathway and SPSIC steps.</p>" },
    { h: "Common mistakes on this corridor", html: TH_IMPORT_FAILS +
      "<ul>" +
      "<li><strong>Health certificate outside the 10-day window</strong> &mdash; BAI timing rules are strict.</li>" +
      "<li><strong>Rabies given too close to travel</strong> &mdash; must be at least 14 days before departure.</li>" +
      "<li><strong>Pet under 4 months</strong> &mdash; BAI does not allow import (and export vets may refuse) below 120 days.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Is the Philippines treated as rabies-free by Thailand?",
     "<p>The reviewed detailed Thai instruction is scoped to USA-origin dogs, cats and rabbits and does not establish the Philippines classification. Confirm the required documents and any origin-specific condition with the responsible AQS.</p>"],
    ["Who issues the Philippine export health certificate?",
     "<p>A BAI-accredited veterinarian, with BAI endorsement. Confirm the current export process with BAI before you travel.</p>"],
    ["Are there direct flights from Manila to Bangkok with pets?",
     "<p>This page does not maintain a verified live route schedule. Ask the operating airline to confirm the itinerary, aircraft, pet mode and space before payment.</p>"],
    ["Can I fly into U-Tapao near Pattaya from Manila?",
     "<p>The reviewed DLD map does not list a U-Tapao/Rayong airport AQS. That absence is not proof of impossibility; obtain written DLD confirmation before booking.</p>"],
    ["What if I want to return to the Philippines later?",
     "<p>Apply for an SPSIC online before export from Thailand — valid 60 days. See our export-to-Philippines guide for the full checklist.</p>"]
  ]
}));

/* ---------------- CHINA ---------------- */
pages.push(country({
  slug: "from-china", crumb: "From China",
  title: "Bring Pet to Thailand from China (2026) | PattayaPets",
  desc: "China to Thailand pet import: customs export inspection timeline, DLD import " +
    "checklist and GACC re-entry rules if you return.",
  h1: "Bringing a pet to Thailand from China",
  lede: "Export is city-specific under Chinese " +
    "customs; the Thai import side is the standard DLD permit.",
  updated: "2026-08-01",
  officialExtra:
    "<p><strong>China sources:</strong> " +
    '<a href="https://english.beijing.gov.cn/latest/lawsandpolicies/202104/t20210407_2346645.html" ' +
    'target="_blank" rel="noopener">GACC Announcement No.&nbsp;5 (2019) &mdash; ' +
    "pet entry (English reference)</a>; " +
    '<a href="https://www.gov.cn/zhengce/zhengceku/2019-11/04/content_5448320.htm" ' +
    'target="_blank" rel="noopener">original Chinese announcement</a>. ' +
    '<a href="https://english.shanghai.gov.cn/en-KeepingAPetInShanghai/20240927/988d600b49964546b41d3c342e4ebdb2.html" ' +
    'target="_blank" rel="noopener">Shanghai Customs guidance for arrivals from Thailand</a>. ' +
    "Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-china.html\">taking a pet to China</a>.</p>",
  sections: [
    { h: "The timeline — China export and DLD import", html:
      "<p>Procedures vary by departure city. Ask the departure-city Customs office for its " +
      "current application, examination and certificate sequence before booking.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">Before filing the Thai permit</th>' +
      '<td>Obtain an implantation certificate; complete all Thai-required primary vaccinations, then wait at least 21 days. Documented boosters are exempt when continuity is shown</td>' +
      '<td>Chinese vet</td></tr>' +
      '<tr><th scope="row">After the primary-vaccine wait</th>' +
      '<td>Apply for <a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a> (form R1/1) using the responsible AQS&rsquo;s confirmed channel; allow 5&ndash;7 Thailand business days for a complete application</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">Before booking</th>' +
      '<td>Obtain written airline acceptance for the itinerary, aircraft, animal and container</td>' +
      '<td>Airline</td></tr>' +
      '<tr><th scope="row">On the local Customs schedule</th>' +
      '<td>Apply for the required export inspection using the departure office&rsquo;s current channel</td>' +
      '<td>Customs + animal quarantine bureau</td></tr>' +
      '<tr><th scope="row">In the confirmed certificate window</th>' +
      '<td>Present the pet for the required examination and obtain the official export certificate if compliant</td>' +
      '<td>Customs inspection office</td></tr>' +
      '<tr><th scope="row">Arrival in Thailand</th>' +
      '<td>AQS inspection at Suvarnabhumi with DLD permit and Chinese export certificate</td>' +
      '<td>DLD AQS</td></tr>' +
      '</tbody></table></div>' +
      "<p>Thai-side steps: " + STD_STEPS + "</p>" },
    { h: "Documents the DLD expects", html: TH_IMPORT_TABLE + TH_ARRIVAL_STD },
    { h: "The Chinese export side", html:
      "<p>Pet export from China requires coordination between your veterinarian, the " +
      "local <strong>animal health supervision authority</strong> and " +
      "<strong>customs export inspection</strong> at your departure airport. Each major " +
      "city (Shanghai PVG, Guangzhou CAN, Beijing PEK/PKX, etc.) has its own appointment " +
      "system and document checklist &mdash; do not copy another city&rsquo;s process.</p>" +
      "<p>This audit did not verify a single national export checklist for every Chinese departure city. " +
      "Obtain the exact document list and certificate window from the responsible Customs office, then " +
      "verify the itinerary and animal acceptance with the operating airline.</p>" },
    { h: "If you may return to China", html:
      "<p>Under GACC Announcement No.&nbsp;5 (2019), Thailand is a <strong>non-designated</strong> " +
      "origin. The checked national rule and current Shanghai Customs guidance establish:</p>" +
      "<ul>" +
      "<li>One pet per person per entry.</li>" +
      "<li>Microchip plus official animal-health/quarantine and rabies-vaccination certificates.</li>" +
      "<li><a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">Rabies antibody test</a> " +
      "from a Chinese Customs-accepted laboratory, above 0.5 IU/ml. If a new test is needed, " +
      "the sample may be drawn no earlier than the second rabies vaccination; a second vaccination " +
      "is not universally required when a valid existing report qualifies.</li>" +
      "<li>Clinical health examination and official certificate within <strong>14 days</strong> of arrival.</li>" +
      "<li>Declaration to customs on arrival; entry through a port with quarantine facilities " +
      "if waiver conditions are not met.</li>" +
      "</ul>" +
      "<p>A non-designated-origin pet needs an effective chip, accepted titer report and a passed " +
      "on-site inspection to avoid the national rule&rsquo;s <strong>30-day quarantine</strong>. " +
      "Thailand currently has no laboratory approved by Chinese Customs, so confirm how the sample " +
      "will reach an accepted laboratory without assuming private submission is allowed. See " +
      "<a href=\"/take-pet-out-of-thailand/to-china.html\">exporting a pet to China</a> " +
      "for the full Thailand-to-China pathway. " +
      claimLink("CN-GACC-PET-ENTRY-2019-05", "GACC source") + "; " +
      claimLink("CN-THAILAND-ENTRY-2025-10", "Shanghai Customs source") + ".</p>" },
    { h: "Common mistakes on this corridor", html: TH_IMPORT_FAILS +
      "<ul>" +
      "<li><strong>Assuming all Chinese airports work the same</strong> &mdash; Shanghai, Guangzhou and Beijing have different export offices.</li>" +
      "<li><strong>No export inspection appointment</strong> &mdash; customs export clearance is not walk-in at most airports.</li>" +
      "<li><strong>Inventing a universal two-shot interval</strong> &mdash; the current Thailand guidance only makes a second vaccination necessary when a new titer is needed; the veterinarian must apply the vaccine&rsquo;s valid schedule.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Does Thailand treat China differently for pet import?",
     "<p>The reviewed detailed Thai instruction is scoped to USA-origin dogs, cats and rabbits and does not establish China-specific additions or exemptions. Confirm every required document and test with the responsible AQS.</p>"],
    ["Which Chinese authority handles pet export?",
     "<p>Your accredited vet, local animal health supervision, and customs export inspection at your departure airport. Use an export specialist for your specific city.</p>"],
    ["Are there direct flights from China to Bangkok with pets?",
     "<p>This page does not maintain a verified live route schedule. Ask the operating airline to confirm the itinerary, aircraft, pet mode and space before payment.</p>"],
    ["What if I want to return to China later?",
     "<p>Plan for the non-designated-origin route: one accompanied dog or cat per person, matching microchip and official certificates, a qualifying accepted-lab titer above 0.5 IU/ml and on-site inspection. Without the waiver evidence, the national rule requires 30 days of quarantine. " + claimLink("CN-GACC-PET-ENTRY-2019-05", "GACC source") + "; " + claimLink("CN-THAILAND-ENTRY-2025-10", "Thailand-specific Customs source") + ".</p>"],
    ["Can I import through U-Tapao instead of Bangkok?",
     "<p>The reviewed DLD map does not list a U-Tapao/Rayong airport AQS. That absence is not proof of impossibility; obtain written DLD confirmation before booking.</p>"]
  ]
}));

/* ---------------- SOUTH AFRICA ---------------- */
pages.push(country({
  slug: "from-south-africa", crumb: "From South Africa",
  title: "Bring Pet to Thailand from South Africa (2026) | PattayaPets",
  desc: "South Africa to Thailand pet import: state vet export certificate, DLD " +
    "import timeline, manifest cargo routing, and return-to-SA planning.",
  h1: "Bringing a pet to Thailand from South Africa",
  lede: "South Africa runs a formal export process through <strong>DALRRD state " +
    "veterinarians</strong>. Separately complete the Thai import process and obtain " +
    "the operating airline&rsquo;s written route and transport-mode conditions.",
  officialExtra:
    "<p><strong>South Africa sources:</strong> " +
    '<a href="https://www.elsenburg.com/exporting-pets-and-products/" target="_blank" ' +
    "rel=\"noopener\">Western Cape DALRRD &mdash; exporting pets</a> (general " +
    "process; contact your province&rsquo;s state vet office); " +
    '<a href="https://www.gov.za/services/import/import-animals-and-animal-products" ' +
    'target="_blank" rel="noopener">gov.za &mdash; import animals</a>. ' +
    "Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-south-africa.html\">taking a pet to South Africa</a>.</p>",
  sections: [
    { h: "The timeline — South African export and DLD import", html:
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">Before filing the Thai permit</th>' +
      '<td>Obtain an implantation certificate; complete all Thai-required primary vaccinations, then wait at least 21 days. Documented boosters are exempt when continuity is shown</td>' +
      '<td>Private vet</td></tr>' +
      '<tr><th scope="row">After the primary-vaccine wait</th>' +
      '<td>Apply for <a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a> (form R1/1) using the responsible AQS&rsquo;s confirmed channel; allow 5&ndash;7 Thailand business days for a complete application</td>' +
      '<td>DLD</td></tr>' +
      '<tr><th scope="row">3+ weeks before</th>' +
      '<td>Confirm Thailand import requirements with your local <strong>state veterinarian</strong>; book export certification appointment</td>' +
      '<td>DALRRD state vet</td></tr>' +
      '<tr><th scope="row">2+ weeks before</th>' +
      '<td>Obtain the operating airline&rsquo;s written itinerary and confirmation of <strong>manifest cargo</strong> versus any other permitted mode</td>' +
      '<td>Airline</td></tr>' +
      '<tr><th scope="row">Within 7&ndash;10 days of departure</th>' +
      '<td>Private vet health check; state vet endorses export health certificate for Thailand</td>' +
      '<td>State vet + private vet</td></tr>' +
      '<tr><th scope="row">Arrival in Thailand</th>' +
      '<td>AQS inspection at Suvarnabhumi; road transfer to Pattaya</td>' +
      '<td>DLD AQS</td></tr>' +
      '</tbody></table></div>' +
      "<p>Thai-side steps: " + STD_STEPS + "</p>" },
    { h: "Documents the DLD expects", html: TH_IMPORT_TABLE + TH_ARRIVAL_STD +
      "<p>See <a href=\"/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html\">arrival " +
      "at Suvarnabhumi</a> and " +
      "<a href=\"/bring-pet-to-thailand/u-tapao-airport-pets.html\">U-Tapao or Bangkok?</a>.</p>" },
    { h: "The South African export side (DALRRD)", html:
      "<p>Export from South Africa requires a <strong>Veterinary Health Certificate " +
      "certified by a state veterinarian</strong>. The usual sequence:</p>" +
      "<ol>" +
      "<li>Obtain Thailand&rsquo;s DLD import requirements (your permit copy).</li>" +
      "<li>Private veterinarian completes health checks, vaccinations and any tests Thailand requires.</li>" +
      "<li>Present the signed certificate, vaccination records and DLD permit to your " +
      "<strong>provincial state veterinary office</strong> for official endorsement.</li>" +
      "</ol>" +
      "<p>DALRRD guidance stresses that you must confirm the destination country&rsquo;s " +
      "rules yourself &mdash; Thailand&rsquo;s embassy guide and your DLD permit are the " +
      "source of truth. Confirm every operating sector, transit condition and pet mode " +
      "directly with the airline. Review " +
      "<a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">airline pet policies</a> " +
      "and, if using an optional agent, obtain an itemised scope.</p>" },
    { h: "If you may return to South Africa", html:
      "<p>Thailand is <strong>not</strong> on South Africa&rsquo;s list of countries whose " +
      "dogs enter without quarantine. A return means a DALRRD <strong>Veterinary Import " +
      "Permit</strong>, possible <strong>state quarantine</strong> for dogs, five pre-import " +
      "blood tests for dogs, and entry only via approved airports in <strong>manifest cargo</strong>. " +
      "Start months ahead &mdash; see " +
      "<a href=\"/take-pet-out-of-thailand/to-south-africa.html\">exporting a pet to South Africa</a>.</p>" },
    { h: "Common mistakes on this corridor", html: TH_IMPORT_FAILS +
      "<ul>" +
      "<li><strong>Booking before export cert timing is clear</strong> &mdash; state vet endorsement must match Thailand&rsquo;s validity window.</li>" +
      "<li><strong>Assuming cabin travel avoids cargo rules</strong> &mdash; some airlines and routes still require manifest cargo registration.</li>" +
      "<li><strong>Unverified itinerary</strong> &mdash; confirm pet acceptance and transit rules for every operating sector.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Is South Africa treated as rabies-free by Thailand?",
     "<p>The reviewed detailed Thai instruction is scoped to USA-origin dogs, cats and rabbits and does not establish South Africa&rsquo;s classification. Confirm the required documents and any origin-specific condition with the responsible AQS.</p>"],
    ["Who endorses the South African export certificate?",
     "<p>A DALRRD state veterinarian, after your private vet completes the health certificate and Thailand's requirements are attached.</p>"],
    ["Are there direct flights from South Africa to Bangkok with pets?",
     "<p>This page does not maintain a verified live route schedule. Confirm pet acceptance on every operating sector and whether manifested cargo is required.</p>"],
    ["How long does state vet export certification take?",
     "<p>Book early. You need a private vet health check within the window Thailand requires, then a state vet appointment for endorsement — allow several weeks total.</p>"],
    ["What if I want to return to South Africa later?",
     "<p>Plan as a formal DALRRD import with permit, blood tests for dogs, possible quarantine, and cargo-terminal entry. See our export-to-South-Africa guide.</p>"]
  ]
}));

module.exports = pages;
