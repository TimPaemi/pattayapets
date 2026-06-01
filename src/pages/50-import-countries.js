"use strict";
/* More origin-country guides for the "Bringing a pet to Thailand" cluster,
   plus the U-Tapao / Bangkok arrival-airport guide. */

const { article } = require("../guidekit.js");
const { importCountryRelated, attachReturnExportLink } = require("../data/country-pairs.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const CLUSTER = { name: "Bringing a pet to Thailand", path: "/bring-pet-to-thailand/" };
const SUB = [GUIDES, CLUSTER];

const VERIFY =
  "This guide was last reviewed on 31 May 2026. Thailand's Department of Livestock " +
  "Development, airlines and origin-country authorities change their rules without " +
  "notice. Treat this as orientation, then confirm every current requirement with " +
  "the DLD, your airline and your origin-country authority before you book or travel.";

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
  "<p>Thailand is not on the EU&rsquo;s list of low-risk countries, so to bring a pet " +
  "back into the EU from Thailand you need a valid rabies vaccination and a " +
  "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">rabies titer " +
  "test</a>, with the blood sample taken at least 30 days after vaccination and a " +
  "three-month wait before entry. Having the titer test done before you leave removes " +
  "that wait later &mdash; it is the single best piece of forward planning.</p>";

const EU_IMPORT_REF =
  "<p>For the shared EU export-certificate framework every member state follows, " +
  "see our <a href=\"/bring-pet-to-thailand/from-eu.html\">bringing a pet from the EU</a> guide.</p>";

const TH_DOCS_TABLE =
  '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
  '<th scope="col">Document</th><th scope="col">What it is</th></tr></thead><tbody>' +
  '<tr><th scope="row">DLD import permit</th><td>Form <strong>R1/1</strong>, emailed to the AQS at your arrival airport. Valid <strong>60 days</strong> from issue. Apply <strong>7&ndash;60 days</strong> before departure (around <strong>30 days</strong> is sensible).</td></tr>' +
  '<tr><th scope="row">MOCCAE export permit</th><td>UAE export approval before the pet leaves the Emirates (separate from the Thai permit).</td></tr>' +
  '<tr><th scope="row">Microchip certificate</th><td>ISO 11784/11785 chip; number must match every certificate.</td></tr>' +
  '<tr><th scope="row">Vaccination records</th><td>In English. Thailand asks for rabies plus core vaccines — see our <a href="/bring-pet-to-thailand/rabies-vaccination-titer-test.html">vaccination guide</a>.</td></tr>' +
  '<tr><th scope="row">Endorsed health certificate</th><td>Official veterinary certificate for export from the UAE, endorsed as MOCCAE requires.</td></tr>' +
  '<tr><th scope="row">Flight booking</th><td>Itinerary; confirm airline pet policy (some Gulf routes require cargo).</td></tr>' +
  '</tbody></table></div>';

const TH_ARRIVAL_UAE =
  "<p>With complete paperwork, pets from the UAE normally clear the AQS the same day. " +
  "Confirm arrival at least three days ahead. See " +
  '<a href="/bring-pet-to-thailand/thailand-pet-quarantine.html">pet quarantine in Thailand</a>.</p>';

const UAE_FAILS =
  "<ul>" +
  "<li><strong>MOCCAE export permit missing</strong> &mdash; required before leaving the UAE, separate from the Thai import permit.</li>" +
  "<li><strong>Breed on the prohibited list</strong> &mdash; several fighting-dog types and wolf hybrids cannot enter the UAE; check before you assume return is possible.</li>" +
  "<li><strong>Assuming cabin travel</strong> &mdash; MOCCAE often expects IATA-compliant cargo shipment; confirm with Emirates, Etihad or your airline.</li>" +
  "<li><strong>Microchip mismatch</strong> &mdash; MOCCAE and DLD both require the chip number to match every document exactly.</li>" +
  "</ul>";

const TH_IMPORT_TABLE =
  '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
  '<th scope="col">Document</th><th scope="col">What it is</th></tr></thead><tbody>' +
  '<tr><th scope="row">DLD import permit</th><td>Form <strong>R1/1</strong>, emailed to the AQS at your arrival airport. Valid <strong>60 days</strong> from issue. Apply <strong>7&ndash;60 days</strong> before departure (around <strong>30 days</strong> is sensible).</td></tr>' +
  '<tr><th scope="row">Microchip certificate</th><td>ISO 11784/11785 15-digit chip, implanted <strong>before</strong> rabies vaccination.</td></tr>' +
  '<tr><th scope="row">Vaccination records</th><td>In English. See our <a href="/bring-pet-to-thailand/rabies-vaccination-titer-test.html">vaccination guide</a> for dog and cat schedules.</td></tr>' +
  '<tr><th scope="row">Government-endorsed health certificate</th><td>Export certificate from the origin country, endorsed as that authority requires.</td></tr>' +
  '<tr><th scope="row">Flight booking</th><td>Itinerary; confirm airline pet policy early.</td></tr>' +
  '</tbody></table></div>';

const TH_ARRIVAL_STD =
  "<p>With complete paperwork, pets normally clear the AQS the same day &mdash; an inspection, " +
  "not multi-week quarantine. Email the AQS to <strong>confirm your arrival date at least three " +
  "days before landing</strong>. See " +
  '<a href="/bring-pet-to-thailand/thailand-pet-quarantine.html">pet quarantine in Thailand</a>.</p>';

const TH_IMPORT_FAILS =
  "<ul>" +
  "<li><strong>DLD permit too early or expired</strong> &mdash; valid only 60 days from issue; apply inside the 7&ndash;60 day window.</li>" +
  "<li><strong>Microchip after rabies vaccination</strong> &mdash; invalidates the vaccination record for import.</li>" +
  "<li><strong>Health certificate outside the validity window</strong> &mdash; usually 7&ndash;10 days before departure; confirm with the AQS.</li>" +
  "<li><strong>Assuming return will be easy</strong> &mdash; rabies-free origins (Japan, Singapore, NZ) have strict re-entry rules from Thailand.</li>" +
  "</ul>";

const EU_IMPORT_FAILS =
  "<ul>" +
  "<li><strong>Using the EU pet passport alone</strong> &mdash; it is for travel within the EU/EFTA pet-travel area, not export to Thailand.</li>" +
  "<li><strong>Incomplete authority endorsement</strong> &mdash; the export certificate must be endorsed by the competent national veterinary authority, not only signed by a private vet.</li>" +
  "<li><strong>DLD permit timing</strong> &mdash; valid only 60 days from issue; apply inside the 7&ndash;60 day window.</li>" +
  "<li><strong>Skipping the titer test</strong> if you may return to Europe &mdash; the three-month EU wait catches people who did not plan ahead.</li>" +
  "</ul>";

function euImportTimeline(endorseWho, flightNote) {
  var intro = "<p>Work backwards from your flight.";
  if (flightNote) intro += " " + flightNote;
  intro += "</p>";
  return intro +
    '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
    '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Who</th></tr></thead><tbody>' +
    '<tr><th scope="row">3+ months before (if EU/EFTA return possible)</th>' +
    '<td>Microchip (if needed), rabies vaccination, optional <a href="/bring-pet-to-thailand/rabies-vaccination-titer-test.html">rabies titer test</a> &mdash; blood &ge;30 days after vaccination</td>' +
    '<td>Your vet; approved lab</td></tr>' +
    '<tr><th scope="row">6&ndash;8 weeks before</th>' +
    '<td>Core vaccinations and the <strong>21-day wait</strong> after any primary rabies shot Thailand requires</td>' +
    '<td>Your vet</td></tr>' +
    '<tr><th scope="row">~30 days before departure</th>' +
    '<td>Apply for <a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a> (form R1/1) to the AQS at your arrival airport</td>' +
    '<td>DLD / Suvarnabhumi AQS</td></tr>' +
    '<tr><th scope="row">2&ndash;3 weeks before</th>' +
    '<td>Book pet space on the flight; confirm airline requires the Thai import permit before boarding</td>' +
    '<td>Airline</td></tr>' +
    '<tr><th scope="row">Final 1&ndash;2 weeks</th>' +
    '<td><strong>EU animal health / export certificate</strong> for third-country movement, completed by an authorised vet and endorsed by ' +
    endorseWho + '</td>' +
    '<td>Authorised vet + national authority</td></tr>' +
    '<tr><th scope="row">&ge;3 days before landing</th>' +
    '<td>Email the AQS to confirm your exact arrival date and flight</td>' +
    '<td>DLD</td></tr>' +
    '<tr><th scope="row">Arrival day</th>' +
    '<td>AQS inspection; Forms R-6/R-7; 500&nbsp;baht fee</td>' +
    '<td>Bangkok AQS</td></tr>' +
    '</tbody></table></div>';
}

function country(o) {
  var sections = attachReturnExportLink((o.sections || []).slice(), o.slug);
  sections.push({ h: "Official sources", html: (o.officialExtra || "") + OFFICIAL });
  return article({
    path: "/bring-pet-to-thailand/" + o.slug + ".html",
    title: o.title, desc: o.desc, crumb: o.crumb, breadcrumbs: SUB,
    eyebrow: "Bringing a pet to Thailand &middot; By country",
    h1: o.h1, lede: o.lede, verify: VERIFY,
    updated: o.updated || "2026-05-31",
    sections: sections, faqs: o.faqs, related: o.related || countryRelated(o.slug)
  });
}

const pages = [];

/* ---------------- SWEDEN ---------------- */
pages.push(country({
  slug: "from-sweden", crumb: "From Sweden",
  title: "Bring a Pet to Thailand from Sweden (EU & DLD 2026) | PattayaPets",
  desc: "Sweden to Thailand pet import: EU export certificate, Jordbruksverket endorsement, " +
    "DLD permit timeline, document checklist and EU return planning.",
  h1: "Bringing a pet to Thailand from Sweden",
  lede: "Pattaya has one of the largest Swedish communities in Thailand, and many " +
    "arrive with a pet. The Thai steps are standard; the Swedish-specific part is " +
    "the <strong>EU export health certificate</strong> and planning the EU return if " +
    "you ever come back.",
  officialExtra:
    "<p><strong>Swedish / EU sources:</strong> " +
    "<a href=\"https://jordbruksverket.se/en/animals/keeping-animals/pets/travelling-with-pets\" " +
    "target=\"_blank\" rel=\"noopener nofollow\">Jordbruksverket pet travel</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener nofollow\">EU pet movement</a>. " +
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
      '<div class="callout callout-tip"><div class="ch">Thailand does not require the titer test on the way in</div>' +
      "<p>From Sweden, Thailand generally does not ask for a titer test to enter. You " +
      "do it for your own future if you may return to the EU.</p></div>" },
    { h: "Common mistakes on this corridor", html: EU_IMPORT_FAILS }
  ],
  faqs: [
    ["Is my EU pet passport enough to bring my pet to Thailand?",
     "<p>No. The EU pet passport governs movement within the EU. For Thailand you need an EU export health certificate endorsed by Jordbruksverket, plus the Thai DLD import permit.</p>"],
    ["Which Swedish authority endorses the export certificate?",
     "<p>Jordbruksverket (the Swedish Board of Agriculture) through an official veterinarian. Your export-experienced vet will know the current endorsement process.</p>"],
    ["What will Sweden need for the return journey?",
     "<p>A valid rabies vaccination, a rabies titer test with a three-month wait after the blood sample, and an EU third-country entry health certificate. Doing the test before you leave avoids that wait.</p>"],
    ["Will my pet be quarantined on arrival in Thailand?",
     "<p>Not usually, if every document is in order. The AQS inspection is typically same-day clearance &mdash; see our <a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">quarantine guide</a>.</p>"],
    ["Are there direct flights from Stockholm with a pet?",
     "<p>Stockholm and other hubs have Bangkok routes, but not every flight accepts pets. Confirm pet space and crate rules when you book &mdash; see our <a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">airline pet policies</a> guide.</p>"]
  ]
}));

/* ---------------- NORWAY ---------------- */
pages.push(country({
  slug: "from-norway", crumb: "From Norway",
  title: "Bring a Pet to Thailand from Norway (EU-style & DLD 2026) | PattayaPets",
  desc: "Norway to Thailand pet import: export certificate, Mattilsynet endorsement, " +
    "DLD permit timeline, tapeworm return rule and document checklist.",
  h1: "Bringing a pet to Thailand from Norway",
  lede: "Norway is not in the EU, but it follows the EU pet-travel scheme closely. " +
    "The Thai steps are standard; plan carefully for the journey home, including the " +
    "tapeworm rule for dogs.",
  officialExtra:
    "<p><strong>Norwegian / EU sources:</strong> " +
    "<a href=\"https://www.mattilsynet.no/english/animal/import-and-export-of-animals/personal-import-of-animals-into-norway.2210\" " +
    "target=\"_blank\" rel=\"noopener nofollow\">Mattilsynet pet import</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener nofollow\">EU pet movement</a> (Norway applies EU-aligned rules). " +
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
     "<p>A valid rabies vaccination, a rabies titer test with a three-month wait, and &mdash; for dogs &mdash; a vet-administered tapeworm treatment shortly before arrival. Confirm with Mattilsynet.</p>"],
    ["Which authority endorses the export certificate?",
     "<p>Mattilsynet (the Norwegian Food Safety Authority). Your export-experienced vet coordinates the endorsement.</p>"],
    ["Will my pet be quarantined on arrival in Thailand?",
     "<p>Not usually with complete paperwork. See our <a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">quarantine guide</a>.</p>"],
    ["Should I do the titer test before leaving Norway?",
     "<p>Strongly advisable if you may return. It removes the three-month EU wait later and is required for re-entry from Thailand.</p>"]
  ]
}));

/* ---------------- DENMARK ---------------- */
pages.push(country({
  slug: "from-denmark", crumb: "From Denmark",
  title: "Bring a Pet to Thailand from Denmark (EU & DLD 2026) | PattayaPets",
  desc: "Denmark to Thailand pet import: EU export certificate, Danish Veterinary and Food " +
    "Administration endorsement, DLD permit timeline and EU return planning.",
  h1: "Bringing a pet to Thailand from Denmark",
  lede: "For Danish owners the Thai requirements are the standard ones. What is " +
    "Denmark-specific is who endorses the export paperwork and planning the EU return.",
  officialExtra:
    "<p><strong>Danish / EU sources:</strong> " +
    "<a href=\"https://foedevarestyrelsen.dk/english\" target=\"_blank\" " +
    "rel=\"noopener nofollow\">Danish Veterinary and Food Administration</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener nofollow\">EU pet movement</a>. " +
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
      '<div class="callout callout-tip"><div class="ch">Thailand does not require the titer test on the way in</div>' +
      "<p>From Denmark, Thailand generally does not ask for a titer test to enter. You " +
      "do it for your own future if you may return to the EU.</p></div>" },
    { h: "Common mistakes on this corridor", html: EU_IMPORT_FAILS }
  ],
  faqs: [
    ["Who endorses my pet's export certificate in Denmark?",
     "<p>An official veterinarian under the Danish Veterinary and Food Administration. Use a vet familiar with export work and confirm the current procedure.</p>"],
    ["What will Denmark need for the return journey?",
     "<p>A valid rabies vaccination, a rabies titer test with a three-month wait after the blood sample, and an EU third-country entry health certificate. Doing the test before you leave avoids that wait.</p>"],
    ["Is the EU pet passport enough for Thailand?",
     "<p>No. It is for intra-EU travel. Thailand needs an EU export certificate endorsed by the Danish authorities, plus the DLD import permit.</p>"],
    ["Will my pet be quarantined on arrival in Thailand?",
     "<p>Not usually with complete paperwork. See our <a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">quarantine guide</a>.</p>"],
    ["Are Copenhagen–Bangkok routes pet-friendly?",
     "<p>Copenhagen has long-haul connections; confirm pet acceptance with the airline when you book.</p>"]
  ]
}));

/* ---------------- FINLAND ---------------- */
pages.push(country({
  slug: "from-finland", crumb: "From Finland",
  title: "Bring a Pet to Thailand from Finland (EU & DLD 2026) | PattayaPets",
  desc: "Finland to Thailand pet import: EU export certificate, Ruokavirasto endorsement, " +
    "DLD permit timeline, tapeworm return rule and document checklist.",
  h1: "Bringing a pet to Thailand from Finland",
  lede: "The Thai steps are the standard ones for Finnish owners. The point to plan " +
    "around is the journey home, which has the tapeworm rule for dogs.",
  officialExtra:
    "<p><strong>Finnish / EU sources:</strong> " +
    "<a href=\"https://www.ruokavirasto.fi/en/themes/animals/travel-with-pet-animals/\" " +
    "target=\"_blank\" rel=\"noopener nofollow\">Ruokavirasto pet travel</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener nofollow\">EU pet movement</a>. " +
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
     "<p>A valid rabies vaccination, a rabies titer test with a three-month wait, and &mdash; for dogs &mdash; a vet-administered tapeworm treatment shortly before arrival. Confirm with Ruokavirasto.</p>"],
    ["Which authority endorses the export certificate?",
     "<p>Ruokavirasto (the Finnish Food Authority) through an official veterinarian.</p>"],
    ["Will my pet be quarantined on arrival in Thailand?",
     "<p>Not usually with complete paperwork. See our <a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">quarantine guide</a>.</p>"],
    ["Should I do the titer test before leaving Finland?",
     "<p>Strongly advisable if you may return. It removes the three-month wait later.</p>"]
  ]
}));

/* ---------------- NETHERLANDS ---------------- */
pages.push(country({
  slug: "from-netherlands", crumb: "From the Netherlands",
  title: "Bring a Pet to Thailand from the Netherlands (EU & DLD 2026) | PattayaPets",
  desc: "Netherlands to Thailand pet import: EU export certificate, NVWA endorsement, " +
    "DLD permit timeline, Amsterdam routing notes and EU return planning.",
  h1: "Bringing a pet to Thailand from the Netherlands",
  lede: "Amsterdam is a major long-haul hub with direct routes to Bangkok, which " +
    "makes the Netherlands one of the more straightforward departure points.",
  officialExtra:
    "<p><strong>Dutch / EU sources:</strong> " +
    "<a href=\"https://english.nvwa.nl/topics/importing-animals\" target=\"_blank\" " +
    "rel=\"noopener nofollow\">NVWA importing animals</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener nofollow\">EU pet movement</a>. " +
    "Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-netherlands.html\">taking a pet to the Netherlands</a>.</p>",
  sections: [
    { h: "The timeline — what to do when", html:
      euImportTimeline("<strong>the Netherlands Food and Consumer Product Safety Authority (NVWA)</strong>",
        "Direct <strong>Amsterdam&ndash;Bangkok</strong> routes are common; still confirm pet acceptance with the airline early.") +
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
      "<p>A direct Amsterdam-Bangkok routing keeps the journey as short as possible, " +
      "which is easier on the pet. Confirm current EU re-entry rules with NVWA " +
      "before travelling. See " +
      "<a href=\"/take-pet-out-of-thailand/to-netherlands.html\">exporting a pet to the Netherlands</a>.</p>" +
      '<div class="callout callout-tip"><div class="ch">Thailand does not require the titer test on the way in</div>' +
      "<p>From the Netherlands, Thailand generally does not ask for a titer test to enter. You " +
      "do it for your own future if you may return to the EU.</p></div>" },
    { h: "Common mistakes on this corridor", html: EU_IMPORT_FAILS }
  ],
  faqs: [
    ["Are there direct flights that take pets to Thailand?",
     "<p>Amsterdam has direct long-haul routes to Bangkok; whether a given flight accepts pets in cabin, as checked baggage or as cargo depends on the airline and aircraft. Confirm directly with the airline well in advance.</p>"],
    ["What will the Netherlands need for the return journey?",
     "<p>A valid rabies vaccination, a rabies titer test with a three-month wait after the blood sample, and an EU third-country entry health certificate. Doing the test before you leave avoids that wait.</p>"],
    ["Which authority endorses the export certificate?",
     "<p>NVWA (Netherlands Food and Consumer Product Safety Authority) through the official veterinary channel your vet uses.</p>"],
    ["Is the EU pet passport enough for Thailand?",
     "<p>No. Thailand needs an EU export certificate endorsed by NVWA, plus the DLD import permit.</p>"],
    ["Will my pet be quarantined on arrival in Thailand?",
     "<p>Not usually with complete paperwork. See our <a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">quarantine guide</a>.</p>"]
  ]
}));

/* ---------------- FRANCE ---------------- */
pages.push(country({
  slug: "from-france", crumb: "From France",
  title: "Bring a Pet to Thailand from France (EU & DLD 2026) | PattayaPets",
  desc: "France to Thailand pet import: EU export certificate, French veterinary authority " +
    "endorsement, DLD permit timeline, Paris routing and EU return planning.",
  h1: "Bringing a pet to Thailand from France",
  lede: "For French owners the Thai requirements are standard. The French-specific " +
    "part is the export certificate, its endorsement and planning the EU return.",
  officialExtra:
    "<p><strong>French / EU sources:</strong> " +
    "<a href=\"https://agriculture.gouv.fr/les-demarches-pour-partir-voyager-avec-son-animal-de-compagnie\" " +
    "target=\"_blank\" rel=\"noopener nofollow\">French Ministry of Agriculture pet travel</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener nofollow\">EU pet movement</a>. " +
    "Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-france.html\">taking a pet to France</a>.</p>",
  sections: [
    { h: "The timeline — what to do when", html:
      euImportTimeline("the official channel of <strong>the French agriculture ministry&rsquo;s veterinary services</strong>",
        "Direct <strong>Paris&ndash;Bangkok</strong> routes exist; confirm pet acceptance with the airline early.") +
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
      "<p>Paris has direct routes to Bangkok, which keeps the journey shorter. " +
      "Confirm current EU re-entry requirements with the French veterinary " +
      "authorities before you travel. See " +
      "<a href=\"/take-pet-out-of-thailand/to-france.html\">exporting a pet to France</a>.</p>" +
      '<div class="callout callout-tip"><div class="ch">Thailand does not require the titer test on the way in</div>' +
      "<p>From France, Thailand generally does not ask for a titer test to enter. You " +
      "do it for your own future if you may return to the EU.</p></div>" },
    { h: "Common mistakes on this corridor", html: EU_IMPORT_FAILS }
  ],
  faqs: [
    ["Who endorses the export certificate in France?",
     "<p>The official veterinary service of the French agriculture ministry, through the departmental directorate responsible for animal health. Your vet completes the certificate; confirm the current endorsement process locally.</p>"],
    ["What does France need for the return journey?",
     "<p>A valid rabies vaccination, a rabies titer test with a three-month wait after the blood sample, and an EU third-country entry health certificate. Doing the test before leaving France removes that wait.</p>"],
    ["Is the EU pet passport enough for Thailand?",
     "<p>No. Thailand needs an EU export certificate endorsed by the French authorities, plus the DLD import permit.</p>"],
    ["Will my pet be quarantined on arrival in Thailand?",
     "<p>Not usually with complete paperwork. See our <a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">quarantine guide</a>.</p>"],
    ["Can I fly direct from Paris with a pet?",
     "<p>Paris has direct Bangkok routes; confirm pet space and crate rules with the airline when you book.</p>"]
  ]
}));

/* ---------------- SWITZERLAND ---------------- */
pages.push(country({
  slug: "from-switzerland", crumb: "From Switzerland",
  title: "Bring a Pet to Thailand from Switzerland (EU-aligned & DLD 2026) | PattayaPets",
  desc: "Switzerland to Thailand pet import: export certificate, FSVO endorsement, " +
    "DLD permit timeline, cantonal vet office and EU-aligned return planning.",
  h1: "Bringing a pet to Thailand from Switzerland",
  lede: "Switzerland is not in the EU, but it runs a closely aligned pet-travel " +
    "system. The Thai steps are standard; plan the EU-aligned return if you may go back.",
  officialExtra:
    "<p><strong>Swiss sources:</strong> " +
    "<a href=\"https://www.blv.admin.ch/blv/en/home/tiere/reisen-mit-heimtieren.html\" " +
    "target=\"_blank\" rel=\"noopener nofollow\">FSVO travelling with pets</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener nofollow\">EU pet movement</a> (Switzerland applies EU-aligned rules). " +
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
      "rabies titer test</a>, with a waiting period before entry. Having the titer " +
      "test done early keeps your options open &mdash; confirm the current detail " +
      "with FSVO. See " +
      "<a href=\"/take-pet-out-of-thailand/to-switzerland.html\">exporting a pet to Switzerland</a>.</p>" +
      '<div class="callout callout-tip"><div class="ch">Thailand does not require the titer test on the way in</div>' +
      "<p>From Switzerland, Thailand generally does not ask for a titer test to enter. You " +
      "do it for your own future if you may return.</p></div>" },
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
     "<p>Not usually with complete paperwork. See our <a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">quarantine guide</a>.</p>"]
  ]
}));

/* ---------------- IRELAND ---------------- */
pages.push(country({
  slug: "from-ireland", crumb: "From Ireland",
  title: "Bring a Pet to Thailand from Ireland (EU & DLD 2026) | PattayaPets",
  desc: "Ireland to Thailand pet import: EU export certificate, Department of Agriculture " +
    "endorsement, DLD permit timeline, tapeworm return rule and checklist.",
  h1: "Bringing a pet to Thailand from Ireland",
  lede: "The Thai steps are standard for Irish owners. The journey home has the " +
    "tapeworm rule for dogs worth planning around.",
  officialExtra:
    "<p><strong>Irish / EU sources:</strong> " +
    "<a href=\"https://www.gov.ie/en/department-of-agriculture-food-and-the-marine/publications/bringing-pets-to-ireland/\" " +
    "target=\"_blank\" rel=\"noopener nofollow\">Department of Agriculture pet travel</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener nofollow\">EU pet movement</a>. " +
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
     "<p>A valid rabies vaccination, a rabies titer test with a three-month wait, and &mdash; for dogs &mdash; a vet-administered tapeworm treatment shortly before arrival. Confirm with the Department.</p>"],
    ["Which authority endorses the export certificate?",
     "<p>The Department of Agriculture, Food and the Marine through the official veterinary channel your vet uses.</p>"],
    ["Will my pet be quarantined on arrival in Thailand?",
     "<p>Not usually with complete paperwork. See our <a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">quarantine guide</a>.</p>"],
    ["Should I do the titer test before leaving Ireland?",
     "<p>Strongly advisable if you may return. It removes the three-month wait later.</p>"]
  ]
}));

/* ---------------- NEW ZEALAND ---------------- */
pages.push(country({
  slug: "from-new-zealand", crumb: "From New Zealand",
  title: "Bring a Pet to Thailand from New Zealand (DLD 2026) | PattayaPets",
  desc: "Bringing a dog or cat from New Zealand to Thailand: MPI endorsement, and " +
    "the demanding requirements if you ever return your pet to New Zealand.",
  h1: "Bringing a pet to Thailand from New Zealand",
  lede: "Getting a pet out of New Zealand is straightforward. The part that needs " +
    "real thought, before you ever leave, is whether you might bring it back.",
  sections: [
    { h: "The New Zealand side of the paperwork", html:
      "<p>" + STD_STEPS + "In New Zealand the export health certificate is completed " +
      "by your vet and endorsed by <strong>the Ministry for Primary Industries " +
      "(MPI)</strong>. New Zealand is a rabies-free country, so the export side is " +
      "generally clean &mdash; use a vet experienced in export work and book the MPI " +
      "endorsement in good time.</p>" },
    { h: "Think hard about the return to New Zealand", html:
      "<p>This is the part to research <strong>before you leave</strong>. New Zealand " +
      "protects its rabies-free status with strict import rules, and bringing a pet " +
      "back from Thailand &mdash; which is not rabies-free &mdash; can be a long, " +
      "demanding and expensive process, with rabies titer testing, extended timelines " +
      "and the real possibility of quarantine on arrival. If there is any chance you " +
      "will return your pet to New Zealand, study MPI&rsquo;s current import " +
      "requirements first, so nothing about the timeline takes you by surprise.</p>" }
  ],
  faqs: [
    ["Is it hard to take a pet out of New Zealand?",
     "<p>No &mdash; the export side is generally straightforward. Your vet completes the export certificate and MPI endorses it. The difficulty is the return journey, not the departure.</p>"],
    ["Can I bring my pet back to New Zealand from Thailand?",
     "<p>It is possible but demanding. New Zealand applies strict rules to protect its rabies-free status, and a return from Thailand can involve titer testing, long lead times and possible quarantine. Research MPI's current requirements well before you travel, not after.</p>"]
  ]
}));

/* ---------------- JAPAN ---------------- */
pages.push(country({
  slug: "from-japan", crumb: "From Japan",
  title: "Bring a Pet to Thailand from Japan (MAFF Export & DLD 2026) | PattayaPets",
  desc: "Japan to Thailand pet import: AQS export inspection, DLD import timeline, " +
    "document checklist, and the 180-day rule if you ever return to Japan.",
  h1: "Bringing a pet to Thailand from Japan",
  lede: "Japan&rsquo;s Animal Quarantine Service runs a thorough export process. The Thai " +
    "import side is standard &mdash; but if you might return to Japan, start the " +
    "<strong>180-day MAFF timeline</strong> before you ever leave.",
  officialExtra:
    "<p><strong>Japan sources:</strong> " +
    '<a href="https://www.maff.go.jp/aqs/english/animal/dog/import-other.html" target="_blank" ' +
    "rel=\"noopener nofollow\">MAFF AQS &mdash; import from non-designated regions</a> " +
    "(Thailand is non-designated); " +
    '<a href="https://www.maff.go.jp/aqs/english/" target="_blank" rel="noopener nofollow">' +
    "MAFF Animal Quarantine Service</a>. Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-japan.html\">taking a pet to Japan</a>.</p>",
  sections: [
    { h: "The timeline — Japan export and Thai import", html:
      "<p>Run the Japanese export steps and the DLD import permit in parallel once " +
      "vaccinations are current.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">8+ weeks before</th>' +
      '<td>ISO microchip; rabies and core vaccinations per Thailand&rsquo;s schedule</td>' +
      '<td>Japanese vet</td></tr>' +
      '<tr><th scope="row">4&ndash;6 weeks before</th>' +
      '<td>Apply for <a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a> (form R1/1) to the AQS at your arrival airport</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">3+ weeks before</th>' +
      '<td>Prior application for <strong>AQS export inspection</strong>; confirm Thailand import requirements with AQS</td>' +
      '<td>MAFF AQS (departure airport)</td></tr>' +
      '<tr><th scope="row">2 weeks before</th>' +
      '<td>Book airline (cabin, hold or cargo); confirm crate and routing to Suvarnabhumi or U-Tapao</td>' +
      '<td>Airline</td></tr>' +
      '<tr><th scope="row">Within 10 days of departure</th>' +
      '<td>Final clinical examination; AQS issues <strong>export quarantine certificate</strong></td>' +
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
      "<li>ISO microchip and <strong>at least two rabies vaccinations</strong> (with correct spacing).</li>" +
      "<li><a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">Rabies antibody test</a> " +
      "at a MAFF-designated laboratory &mdash; result &ge; 0.5 IU/ml.</li>" +
      "<li><strong>180-day wait</strong> from the blood sample date before the pet may enter Japan.</li>" +
      "<li><strong>Advance notification</strong> to the AQS at your arrival port at least " +
      "<strong>40 days</strong> before the return flight (online via NACCS or by email).</li>" +
      "<li>Pre-departure clinical examination and government-endorsed export certificate from Thailand.</li>" +
      "</ul>" +
      "<p>Miss a step and Japan can hold the pet in detention quarantine for up to 180 days. " +
      "See our mirror guide " +
      "<a href=\"/take-pet-out-of-thailand/to-japan.html\">exporting a pet to Japan</a> " +
      "for the full Thailand-to-Japan pathway.</p>" },
    { h: "Common mistakes on this corridor", html: TH_IMPORT_FAILS +
      "<ul>" +
      "<li><strong>Starting AQS export late</strong> &mdash; inspection appointments at Narita, Haneda or Kansai fill up.</li>" +
      "<li><strong>Ignoring the 180-day clock</strong> &mdash; the wait runs from the titer blood draw, not from when results arrive.</li>" +
      "<li><strong>Notification under 40 days</strong> &mdash; MAFF may reject late advance notification for Japan entry.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Is Japan's export process complicated?",
     "<p>It is thorough rather than chaotic. AQS sets clear steps: prior export application, meeting Thailand's import requirements, clinical examination and the export quarantine certificate. An experienced export vet and early AQS contact make the difference.</p>"],
    ["What will Japan require for the return from Thailand?",
     "<p>Non-designated region rules: microchip, two rabies vaccinations, MAFF-designated titer test, 180-day wait from the blood sample, advance notification at least 40 days before arrival, then Thai export paperwork. Plan seven months or more.</p>"],
    ["Can puppies under 10 months enter Japan from Thailand?",
     "<p>Japan's non-designated pathway effectively requires completing two rabies vaccinations and the 180-day wait after titer sampling — which means young puppies cannot complete the process quickly. Confirm current MAFF age rules before you assume a puppy can return.</p>"],
    ["Which Japanese airports handle pet export to Thailand?",
     "<p>Most Tokyo and Osaka routes go via Narita, Haneda or Kansai AQS offices. Confirm which airport your airline uses and book AQS export inspection at that port.</p>"],
    ["Does Thailand quarantine pets from Japan?",
     "<p>With complete paperwork, Thailand normally clears pets the same day at the AQS — an inspection, not weeks of quarantine. Email the Bangkok AQS to confirm arrival at least three days ahead.</p>"]
  ]
}));

/* ---------------- SINGAPORE ---------------- */
pages.push(country({
  slug: "from-singapore", crumb: "From Singapore",
  title: "Bring a Pet to Thailand from Singapore (AVS Export & DLD 2026) | PattayaPets",
  desc: "Singapore to Thailand pet import: AVS export certificate, DLD import timeline, " +
    "document checklist, and Schedule III rules if you return from Thailand.",
  h1: "Bringing a pet to Thailand from Singapore",
  lede: "Singapore is a rabies-controlled origin with a clear AVS export process. The Thai " +
    "import side is straightforward &mdash; but returning from Thailand triggers " +
    "<strong>Schedule III</strong> rules including quarantine.",
  officialExtra:
    "<p><strong>Singapore sources:</strong> " +
    '<a href="https://avs.nparks.gov.sg/pets/importing-exporting-a-pet/import/dogs-and-cats/" ' +
    'target="_blank" rel="noopener nofollow">AVS &mdash; importing dogs and cats</a> ' +
    "(verify your export country&rsquo;s rabies schedule close to travel). Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-singapore.html\">taking a pet to Singapore</a>.</p>",
  sections: [
    { h: "The timeline — Singapore export and Thai import", html:
      "<p>AVS export endorsement and the DLD import permit can run in parallel once " +
      "vaccinations are current.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">6+ weeks before</th>' +
      '<td>ISO microchip; rabies and core vaccinations per Thailand&rsquo;s schedule</td>' +
      '<td>AVS-accredited vet</td></tr>' +
      '<tr><th scope="row">4&ndash;6 weeks before</th>' +
      '<td>Apply for <a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a> (form R1/1)</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">3+ weeks before</th>' +
      '<td>AVS export health certificate and endorsement; confirm Thailand import conditions with AVS</td>' +
      '<td>AVS</td></tr>' +
      '<tr><th scope="row">2 weeks before</th>' +
      '<td>Book airline (direct Singapore&ndash;Bangkok routes are common); confirm cabin, hold or cargo</td>' +
      '<td>Airline</td></tr>' +
      '<tr><th scope="row">Within 7&ndash;10 days of departure</th>' +
      '<td>Final health examination; parasite treatments if AVS requires for export</td>' +
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
      "<li>ISO microchip before vaccination.</li>" +
      "<li>Valid rabies vaccination using an AVS-accepted inactivated or recombinant vaccine.</li>" +
      "<li><a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">Rabies serology (RNATT)</a> " +
      "at least 28 days after vaccination; blood sample at least <strong>90 days</strong> and " +
      "within <strong>12 months</strong> before export; result &ge; 0.5 IU/ml at an approved lab.</li>" +
      "<li>AVS <strong>import licence</strong> (dog licence via PALS first if importing a dog).</li>" +
      "<li>Book <strong>quarantine at the Animal Quarantine Centre (AQC)</strong> &mdash; Schedule III " +
      "imports typically require at least <strong>30 days</strong> post-arrival quarantine.</li>" +
      "<li>Internal and external parasite treatments within the AVS window before export.</li>" +
      "</ul>" +
      "<p>Start the titer clock early in Thailand. See " +
      "<a href=\"/take-pet-out-of-thailand/to-singapore.html\">exporting a pet to Singapore</a> " +
      "for the full Thailand-to-Singapore pathway.</p>" },
    { h: "Common mistakes on this corridor", html: TH_IMPORT_FAILS +
      "<ul>" +
      "<li><strong>Assuming Singapore&rsquo;s export ease means an easy return</strong> &mdash; " +
      "Schedule III re-entry is a different process with quarantine.</li>" +
      "<li><strong>Blood sample too soon</strong> &mdash; AVS requires at least 90 days between sampling and export.</li>" +
      "<li><strong>No quarantine booking</strong> &mdash; AQC space must be reserved via the Quarantine Management System.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Is it hard to export a pet from Singapore to Thailand?",
     "<p>The export side is straightforward if you follow AVS's published steps and use an accredited vet. Direct flights to Bangkok are common. The difficulty is the return journey from Thailand, not the departure from Singapore.</p>"],
    ["What does Singapore require for the return from Thailand?",
     "<p>Schedule III rules: microchip, rabies vaccination, RNATT titer with 90-day lead time, AVS import licence, parasite treatments, AQC quarantine booking and typically 30 days post-arrival quarantine. Verify the current schedule on AVS before you travel.</p>"],
    ["Does Thailand treat Singapore as rabies-free?",
     "<p>No. Follow the standard Thai import process — microchip, rabies vaccination, health certificate and DLD import permit — even though Singapore is rabies-controlled on its own schedule.</p>"],
    ["Can I fly Singapore to Bangkok with a pet in cabin?",
     "<p>Some carriers allow cabin pets on short-haul routes subject to weight limits and aircraft type. Confirm directly with the airline; many owners use checked baggage or cargo for larger dogs.</p>"],
    ["How long before I should apply for the DLD import permit?",
     "<p>Apply 7–60 days before departure; around 30 days is sensible. The permit is valid 60 days from issue — do not apply too early.</p>"]
  ]
}));

/* ---------------- UAE ---------------- */
pages.push(country({
  slug: "from-uae", crumb: "From the UAE",
  title: "Bring a Pet to Thailand from UAE (MOCCAE & DLD 2026) | PattayaPets",
  desc: "UAE to Thailand pet import: MOCCAE export permit, DLD import timeline, " +
    "vaccination checklist, airline cargo rules and return-to-UAE planning.",
  h1: "Bringing a pet to Thailand from the UAE",
  lede: "Dubai and Abu Dhabi to Bangkok is a corridor Gulf expats use constantly. " +
    "You are juggling <strong>two permits</strong> &mdash; MOCCAE to leave the UAE, " +
    "DLD to enter Thailand &mdash; plus airline rules that often mean cargo, not cabin.",
  officialExtra:
    "<p><strong>UAE sources:</strong> " +
    "<a href=\"https://moccae.gov.ae/en/services/import-permit-pets\" target=\"_blank\" " +
    "rel=\"noopener nofollow\">MOCCAE import/export of pets</a> (service updated January 2025; " +
    "transition to Emirates Drug Establishment may apply &mdash; confirm current portal). " +
    "Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-uae.html\">taking a pet to the UAE</a>.</p>",
  sections: [
    { h: "The timeline — what to do when", html:
      "<p>Apply for <strong>both</strong> the UAE export side and the Thai import side " +
      "in parallel once vaccinations are in order.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">6&ndash;8 weeks before</th>' +
      '<td>ISO microchip, rabies and core vaccinations; <strong>21-day wait</strong> after primary rabies (MOCCAE and DLD both expect this)</td>' +
      '<td>UAE-licensed vet</td></tr>' +
      '<tr><th scope="row">~30 days before departure</th>' +
      '<td>Apply for <strong>MOCCAE export permit</strong> to leave the UAE</td>' +
      '<td>MOCCAE online portal</td></tr>' +
      '<tr><th scope="row">~30 days before departure</th>' +
      '<td>Apply for <a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a> (form R1/1) to the AQS at your arrival airport</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">2&ndash;3 weeks before</th>' +
      '<td>Book pet space &mdash; confirm whether the airline accepts cabin, hold or requires <strong>manifested cargo</strong> per IATA</td>' +
      '<td>Airline</td></tr>' +
      '<tr><th scope="row">Final week</th>' +
      '<td>Official export health certificate from competent UAE veterinary authority; any pre-shipment treatments MOCCAE requires</td>' +
      '<td>Vet + MOCCAE</td></tr>' +
      '<tr><th scope="row">&ge;3 days before landing</th>' +
      '<td>Confirm arrival date with the Thai AQS by email</td>' +
      '<td>DLD</td></tr>' +
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
      "rel=\"noopener nofollow\">its website</a>.</p>" +
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
     "<p>With correct paperwork, most pets clear the AQS inspection on arrival rather than entering long quarantine. Incomplete documents or signs of illness can trigger quarantine — see our <a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">quarantine guide</a>.</p>"],
    ["Which emirate's rules apply?",
     "<p>MOCCAE sets federal import/export rules, but airlines and local authorities may add conditions. Confirm for the emirate and airport you use (Dubai, Abu Dhabi, Sharjah, etc.).</p>"]
  ]
}));

/* ---------------- U-TAPAO vs BANGKOK ---------------- */
pages.push(article({
  path: "/bring-pet-to-thailand/u-tapao-airport-pets.html",
  title: "U-Tapao or Bangkok for Pets? Flying into Pattaya (2026) | PattayaPets",
  desc: "Whether you can fly a pet directly into U-Tapao near Pattaya, why most pet " +
    "imports use Bangkok's Suvarnabhumi, and how to get from the airport to Pattaya.",
  crumb: "U-Tapao or Bangkok?",
  breadcrumbs: SUB,
  eyebrow: "Bringing a pet to Thailand",
  h1: "Flying a pet into Pattaya: U-Tapao or Bangkok?",
  lede: "Pattaya has its own airport at U-Tapao, so it is a natural question: can " +
    "you skip Bangkok and fly your pet straight in? Here is the honest picture.",
  verify: VERIFY,
  sections: [
    { h: "Pattaya's two airport options", html:
      "<p>Pattaya is served by two airports. <strong>U-Tapao (Rayong-Pattaya " +
      "International, UTP)</strong> sits south of the city and is the closest by " +
      "road. <strong>Suvarnabhumi (Bangkok, BKK)</strong> is larger, further away " +
      "&mdash; very roughly a one-and-a-half to two-hour drive north &mdash; and is " +
      "the airport almost every long-haul route actually uses.</p>" },
    { h: "Where pet imports are actually handled", html:
      "<p>A live-animal import to Thailand has to clear an airport with a Department " +
      "of Livestock Development <strong>Animal Quarantine Station</strong> and the " +
      "established import process. <strong>Suvarnabhumi is the well-trodden port of " +
      "entry for pets</strong> &mdash; its quarantine station handles pet arrivals " +
      "routinely, and the steps are familiar to vets, airlines and relocation " +
      "agents. U-Tapao is a smaller airport that mainly serves regional, charter and " +
      "selected scheduled flights. Whether a pet can be imported through U-Tapao at " +
      "all depends on the DLD clearance facilities there and on your airline " +
      "carrying animals to it &mdash; do not assume it is possible. Confirm directly " +
      "with the DLD and the airline before planning any U-Tapao arrival. See also " +
      "<a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">pet quarantine " +
      "in Thailand</a> for what happens when paperwork is not in order.</p>" },
    { h: "The practical reality for most owners", html:
      "<p>In practice, the overwhelming majority of pets bound for Pattaya arrive at " +
      "<strong>Suvarnabhumi</strong>, clear the " +
      "<a href=\"/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html\">quarantine " +
      "station there</a>, and travel on to Pattaya by road. Routing through Bangkok also gives you far more choice " +
      "of airline and flight, and more direct long-haul options &mdash; which " +
      "usually means a shorter, lower-stress journey for the pet than chasing a " +
      "rare U-Tapao connection. Whichever airport you use, you still need the " +
      "<a href=\"/bring-pet-to-thailand/import-permit-thailand-dld.html\">DLD import permit</a> " +
      "and an airline that accepts pets under its " +
      "<a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">pet policy</a>.</p>" },
    { h: "Getting from the airport to Pattaya", html:
      "<p>From Suvarnabhumi, arrange a <strong>pet-friendly vehicle</strong> in " +
      "advance &mdash; a private transfer or a relocation agent&rsquo;s service that " +
      "expects an animal and a travel crate. Plan for the road time, bring water, " +
      "and avoid leaving a crate in a hot vehicle. After a long flight and the " +
      "quarantine check, a calm, direct drive to Pattaya is what your pet needs " +
      "most.</p>" },
    { h: "Official sources", html: OFFICIAL }
  ],
  faqs: [
    ["Can I fly my pet directly into Pattaya?",
     "<p>Possibly not in the way you would hope. Pet imports to Thailand clear through an airport with a DLD Animal Quarantine Station, and Suvarnabhumi in Bangkok is the established one. Whether U-Tapao near Pattaya can process a pet import depends on its facilities and your airline &mdash; confirm with the DLD and the airline rather than assuming.</p>"],
    ["How do I get my pet from Bangkok to Pattaya?",
     "<p>By road &mdash; arrange a pet-friendly private transfer or a relocation agent's vehicle in advance. It is roughly a one-and-a-half to two-hour drive. Bring water and never leave the crate in a hot, unventilated vehicle.</p>"],
    ["Which airport should I plan for?",
     "<p>For almost every owner, Bangkok's Suvarnabhumi &mdash; it has the established pet-import process and far more flight choice. Treat a direct U-Tapao arrival as something to verify carefully with the DLD and airline, not to assume.</p>"]
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
  title: "Bring a Pet to Thailand from India (AQCS & DLD 2026) | PattayaPets",
  desc: "India to Thailand pet import: AQCS export certificate timeline, DLD import " +
    "checklist, flight routing via Gulf hubs, and re-import planning if you return.",
  h1: "Bringing a pet to Thailand from India",
  lede: "India is a high-rabies origin with a formal AQCS export process. The Thai import " +
    "steps are standard &mdash; but direct flights to Bangkok are limited, so routing and " +
    "airline pet policy matter as much as the paperwork.",
  officialExtra:
    "<p><strong>India sources:</strong> " +
    '<a href="https://aqcsindia.gov.in/Home/ImportExportPets" target="_blank" ' +
    "rel=\"noopener nofollow\">AQCS import/export of pets</a>; " +
    '<a href="https://aqcsindia.gov.in/Home/ExportPets" target="_blank" rel="noopener nofollow">' +
    "AQCS export requirements</a>; " +
    '<a href="https://aqcsindia.gov.in/pdfs/india-dogs-guidance.pdf" target="_blank" ' +
    "rel=\"noopener nofollow\">India dog import guidance (PDF)</a>. Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-india.html\">taking a pet to India</a>.</p>",
  sections: [
    { h: "The timeline — AQCS export and DLD import", html:
      "<p>Book an AQCS appointment early &mdash; export certificates are normally issued " +
      "on the same day as inspection but require documents submitted about " +
      "<strong>seven days before embarkation</strong>.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">8+ weeks before</th>' +
      '<td>ISO microchip; rabies and core vaccinations per Thailand&rsquo;s schedule</td>' +
      '<td>Indian vet</td></tr>' +
      '<tr><th scope="row">4&ndash;6 weeks before</th>' +
      '<td>Apply for <a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a> (form R1/1) to Bangkok AQS</td>' +
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
      '<a href="https://aqcsindia.gov.in/Home/ExportPets" target="_blank" rel="noopener nofollow">' +
      "aqcsindia.gov.in</a>. Typically required:</p>" +
      "<ul>" +
      "<li>Two passport-size photos of the pet (4&times;6&nbsp;in, light-facing).</li>" +
      "<li>Owner passport copy and air ticket.</li>" +
      "<li>Microchip certificate and vaccination records.</li>" +
      "<li>Vet &lsquo;fit to fly&rsquo; certificate from a registered local veterinarian.</li>" +
      "<li>Thailand&rsquo;s import requirements attached (DLD permit copy).</li>" +
      "<li>Pet presented for AQCS examination; prior appointment by email or phone.</li>" +
      "</ul>" +
      "<p>Direct Delhi/Mumbai/Chennai&ndash;Bangkok flights are limited. Most owners route " +
      "via Gulf or Southeast Asian hubs &mdash; see " +
      "<a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">airline pet policies</a> " +
      "and total journey time before booking.</p>" },
    { h: "If you may return to India", html:
      "<p>If the pet was exported from India with an AQCS certificate, a return can be treated " +
      "as <strong>re-import</strong> &mdash; but only if you kept the original export paperwork " +
      "and meet AQCS re-import rules. Otherwise India treats the pet as a fresh import requiring " +
      "an online Advance NOC via the " +
      '<a href="https://indialog-pga.logistics.gov.in/AQCS/Home.aspx" target="_blank" ' +
      "rel=\"noopener nofollow\">AQCS Import Clearance System</a>, applied at least " +
      "<strong>seven working days</strong> before arrival at an approved port (Delhi, Mumbai, " +
      "Chennai, Kolkata, Bangalore or Hyderabad).</p>" +
      "<p>See " +
      "<a href=\"/take-pet-out-of-thailand/to-india.html\">exporting a pet to India</a> " +
      "for the full Thailand-to-India pathway.</p>" },
    { h: "Common mistakes on this corridor", html: TH_IMPORT_FAILS +
      "<ul>" +
      "<li><strong>No AQCS appointment</strong> &mdash; export certificates are not issued without prior booking and document submission ~7 days ahead.</li>" +
      "<li><strong>Expired export certificate</strong> &mdash; AQCS export validity is only 10 days from issue.</li>" +
      "<li><strong>Assuming a direct flight</strong> &mdash; hub connections add airline pet-policy complexity and journey time.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Does Thailand require extra steps for a pet from India?",
     "<p>Thailand's core requirements are the same: microchip, rabies vaccination, health certificate and DLD import permit. India is not on Thailand's rabies-free simplified list — follow the standard import route and confirm every document with the DLD before you fly.</p>"],
    ["Which Indian authority endorses the export certificate?",
     "<p>AQCS (Animal Quarantine and Certification Services) at your departure airport. Book a prior appointment and submit documents about seven days before embarkation.</p>"],
    ["How long is the AQCS export certificate valid?",
     "<p>Typically 10 days from the date of issue or examination at AQCS. Plan your flight and DLD permit timing around that window.</p>"],
    ["Can I fly my pet in cabin from India to Bangkok?",
     "<p>It depends on the airline and routing. Many itineraries connect through Gulf hubs where cargo rules apply. Confirm with the airline for each sector before booking.</p>"],
    ["What if I want to bring my pet back to India later?",
     "<p>Keep the original AQCS export certificate for re-import. Otherwise apply for an Advance NOC online at least seven working days before arrival. See our export-to-India guide for the full return pathway.</p>"]
  ]
}));

/* ---------------- PHILIPPINES ---------------- */
pages.push(country({
  slug: "from-philippines", crumb: "From the Philippines",
  title: "Bring a Pet to Thailand from Philippines (BAI & DLD 2026) | PattayaPets",
  desc: "Philippines to Thailand pet import: BAI export health certificate, DLD import " +
    "timeline, Manila–Bangkok routing, and BAI re-import rules if you return.",
  h1: "Bringing a pet to Thailand from the Philippines",
  lede: "Manila&ndash;Bangkok is one of the easier regional corridors &mdash; direct and " +
    "one-stop flights are common. The Philippine side runs through the Bureau of Animal " +
    "Industry (BAI); the Thai side is the standard DLD import permit.",
  officialExtra:
    "<p><strong>Philippines sources:</strong> " +
    '<a href="https://www.bai.gov.ph/Stakeholders/PetImport" target="_blank" ' +
    "rel=\"noopener nofollow\">BAI &mdash; pet import procedures</a> (export mirror " +
    "requirements); export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-philippines.html\">taking a pet to the Philippines</a>.</p>",
  sections: [
    { h: "The timeline — BAI export and DLD import", html:
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">6+ weeks before</th>' +
      '<td>ISO microchip; rabies and core vaccinations (dogs: DHLPPi; cats: panleukopenia)</td>' +
      '<td>BAI-accredited vet</td></tr>' +
      '<tr><th scope="row">4&ndash;6 weeks before</th>' +
      '<td>Apply for <a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a> (form R1/1)</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">2&ndash;3 weeks before</th>' +
      '<td>Book Manila&ndash;Bangkok flight; confirm cabin, hold or cargo with airline</td>' +
      '<td>Airline</td></tr>' +
      '<tr><th scope="row">Within 10 days of departure</th>' +
      '<td>BAI-endorsed export health certificate / international veterinary health certificate (IVHC)</td>' +
      '<td>BAI + vet</td></tr>' +
      '<tr><th scope="row">&ge;3 days before landing</th>' +
      '<td>Confirm arrival date with Bangkok AQS by email</td>' +
      '<td>DLD</td></tr>' +
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
     "<p>No. Follow the standard Thai import process with microchip, rabies vaccination, health certificate and DLD import permit.</p>"],
    ["Who issues the Philippine export health certificate?",
     "<p>A BAI-accredited veterinarian, with BAI endorsement. Confirm the current export process with BAI before you travel.</p>"],
    ["Are there direct flights from Manila to Bangkok with pets?",
     "<p>Yes — several carriers fly the route. Confirm cabin, checked baggage or cargo options for your pet's size and the aircraft type.</p>"],
    ["Can I fly into U-Tapao near Pattaya from Manila?",
     "<p>Do not assume it. Most pet imports clear at Suvarnabhumi. Confirm with the DLD and airline before planning a U-Tapao arrival.</p>"],
    ["What if I want to return to the Philippines later?",
     "<p>Apply for an SPSIC online before export from Thailand — valid 60 days. See our export-to-Philippines guide for the full checklist.</p>"]
  ]
}));

/* ---------------- CHINA ---------------- */
pages.push(country({
  slug: "from-china", crumb: "From China",
  title: "Bring a Pet to Thailand from China (Customs Export & DLD 2026) | PattayaPets",
  desc: "China to Thailand pet import: customs export inspection timeline, DLD import " +
    "checklist, direct flights to Bangkok, and GACC re-entry rules if you return.",
  h1: "Bringing a pet to Thailand from China",
  lede: "Shanghai, Guangzhou and Beijing have direct Bangkok routes, which makes China " +
    "a common origin for Pattaya relocations. Export is city-specific under Chinese " +
    "customs; the Thai import side is the standard DLD permit.",
  officialExtra:
    "<p><strong>China sources:</strong> " +
    '<a href="https://english.beijing.gov.cn/latest/lawsandpolicies/202104/t20210407_2346645.html" ' +
    'target="_blank" rel="noopener nofollow">GACC Announcement No.&nbsp;5 (2019) &mdash; ' +
    "pet entry (English reference)</a>; " +
    '<a href="https://www.gov.cn/zhengce/zhengceku/2019-11/04/content_5448320.htm" ' +
    'target="_blank" rel="noopener nofollow">original Chinese announcement</a>. ' +
    "Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-china.html\">taking a pet to China</a>.</p>",
  sections: [
    { h: "The timeline — China export and DLD import", html:
      "<p>Procedures vary by departure city (Shanghai, Guangzhou, Beijing, Shenzhen, etc.). " +
      "Use an export vet or relocation agent who knows your airport.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">6+ weeks before</th>' +
      '<td>ISO microchip; rabies and core vaccinations per Thailand&rsquo;s schedule</td>' +
      '<td>Chinese vet</td></tr>' +
      '<tr><th scope="row">4&ndash;6 weeks before</th>' +
      '<td>Apply for <a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a> (form R1/1)</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">3+ weeks before</th>' +
      '<td>Book direct or connecting flight to Suvarnabhumi; confirm airline pet policy</td>' +
      '<td>Airline</td></tr>' +
      '<tr><th scope="row">1&ndash;2 weeks before</th>' +
      '<td>Apply for export inspection with local animal health / customs at departure airport</td>' +
      '<td>Customs + animal quarantine bureau</td></tr>' +
      '<tr><th scope="row">Within 7&ndash;10 days of departure</th>' +
      '<td>Final health examination; export quarantine certificate issued</td>' +
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
      "<p>Typically you need: microchip proof, vaccination records, owner passport copy, " +
      "flight booking, Thailand&rsquo;s import requirements (DLD permit), and the pet " +
      "presented for export inspection. An experienced " +
      "<a href=\"/pet-relocation/\">pet relocation agent</a> is worth using on this corridor.</p>" },
    { h: "If you may return to China", html:
      "<p>Under GACC Announcement No.&nbsp;5 (2019), Thailand is a <strong>non-designated</strong> " +
      "origin. Returning to China typically requires:</p>" +
      "<ul>" +
      "<li>One pet per person per entry.</li>" +
      "<li>ISO 11784/11785 microchip.</li>" +
      "<li>Two rabies vaccinations (at least 30 days apart).</li>" +
      "<li><a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">Rabies antibody test</a> " +
      "from a GACC-recognised laboratory (&ge; 0.5 IU/ml) after the second vaccination.</li>" +
      "<li>Official health certificate within <strong>14 days</strong> of arrival.</li>" +
      "<li>Declaration to customs on arrival; entry through a port with quarantine facilities " +
      "if waiver conditions are not met.</li>" +
      "</ul>" +
      "<p>Without meeting waiver conditions, expect <strong>30 days quarantine</strong> at a " +
      "designated facility. See " +
      "<a href=\"/take-pet-out-of-thailand/to-china.html\">exporting a pet to China</a> " +
      "for the full Thailand-to-China pathway.</p>" },
    { h: "Common mistakes on this corridor", html: TH_IMPORT_FAILS +
      "<ul>" +
      "<li><strong>Assuming all Chinese airports work the same</strong> &mdash; Shanghai, Guangzhou and Beijing have different export offices.</li>" +
      "<li><strong>No export inspection appointment</strong> &mdash; customs export clearance is not walk-in at most airports.</li>" +
      "<li><strong>Ignoring GACC return rules</strong> &mdash; the titer test and two-vaccination schedule need months of lead time.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Does Thailand treat China differently for pet import?",
     "<p>Thailand's core requirements are the same: microchip, rabies vaccination, health certificate and DLD import permit. China is not on Thailand's rabies-free simplified list.</p>"],
    ["Which Chinese authority handles pet export?",
     "<p>Your accredited vet, local animal health supervision, and customs export inspection at your departure airport. Use an export specialist for your specific city.</p>"],
    ["Are there direct flights from China to Bangkok with pets?",
     "<p>Yes — several carriers fly Shanghai, Guangzhou and Beijing to Suvarnabhumi. Confirm cabin, hold or cargo for your pet before booking.</p>"],
    ["What if I want to return to China later?",
     "<p>Plan for GACC non-designated country rules: two rabies shots, titer test from a recognised lab, and possibly 30 days quarantine if waiver conditions are not met. Start months ahead.</p>"],
    ["Can I import through U-Tapao instead of Bangkok?",
     "<p>Do not assume it. Suvarnabhumi is the established pet-import port. Confirm with the DLD before planning any U-Tapao arrival.</p>"]
  ]
}));

/* ---------------- SOUTH AFRICA ---------------- */
pages.push(country({
  slug: "from-south-africa", crumb: "From South Africa",
  title: "Bring a Pet to Thailand from South Africa (DALRRD & DLD 2026) | PattayaPets",
  desc: "South Africa to Thailand pet import: state vet export certificate, DLD " +
    "import timeline, manifest cargo routing, and return-to-SA planning.",
  h1: "Bringing a pet to Thailand from South Africa",
  lede: "South Africa runs a formal export process through <strong>DALRRD state " +
    "veterinarians</strong>. The Thai import side is standard &mdash; but flights to " +
    "Bangkok almost always connect via the Gulf or Asia, and airlines often require " +
    "<strong>manifested cargo</strong>.",
  officialExtra:
    "<p><strong>South Africa sources:</strong> " +
    '<a href="https://www.elsenburg.com/exporting-pets-and-products/" target="_blank" ' +
    "rel=\"noopener nofollow\">Western Cape DALRRD &mdash; exporting pets</a> (general " +
    "process; contact your province&rsquo;s state vet office); " +
    '<a href="https://www.gov.za/services/import/import-animals-and-animal-products" ' +
    'target="_blank" rel="noopener nofollow">gov.za &mdash; import animals</a>. ' +
    "Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-south-africa.html\">taking a pet to South Africa</a>.</p>",
  sections: [
    { h: "The timeline — South African export and DLD import", html:
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">8+ weeks before</th>' +
      '<td>ISO microchip; rabies and core vaccinations per Thailand&rsquo;s schedule</td>' +
      '<td>Private vet</td></tr>' +
      '<tr><th scope="row">4&ndash;6 weeks before</th>' +
      '<td>Apply for <a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a> (form R1/1) to Bangkok AQS</td>' +
      '<td>DLD</td></tr>' +
      '<tr><th scope="row">3+ weeks before</th>' +
      '<td>Confirm Thailand import requirements with your local <strong>state veterinarian</strong>; book export certification appointment</td>' +
      '<td>DALRRD state vet</td></tr>' +
      '<tr><th scope="row">2+ weeks before</th>' +
      '<td>Book airline routing (often via Dubai, Doha or Singapore); confirm <strong>manifest cargo</strong> vs cabin rules</td>' +
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
      "source of truth. Most Johannesburg/Cape Town&ndash;Bangkok routes involve at least " +
      "one stop; plan crate comfort, layovers and " +
      "<a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">airline pet policies</a> " +
      "with a relocation agent if the routing is complex.</p>" },
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
      "<li><strong>Underestimating hub journey time</strong> &mdash; Gulf/Asia connections add stress and airline policy complexity.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Is South Africa treated as rabies-free by Thailand?",
     "<p>No. Follow the standard Thai import process with microchip, rabies vaccination, health certificate and DLD import permit.</p>"],
    ["Who endorses the South African export certificate?",
     "<p>A DALRRD state veterinarian, after your private vet completes the health certificate and Thailand's requirements are attached.</p>"],
    ["Are there direct flights from South Africa to Bangkok with pets?",
     "<p>Most routes connect via the Gulf or Southeast Asia. Confirm pet acceptance on every sector and whether manifested cargo is required.</p>"],
    ["How long does state vet export certification take?",
     "<p>Book early. You need a private vet health check within the window Thailand requires, then a state vet appointment for endorsement — allow several weeks total.</p>"],
    ["What if I want to return to South Africa later?",
     "<p>Plan as a formal DALRRD import with permit, blood tests for dogs, possible quarantine, and cargo-terminal entry. See our export-to-South-Africa guide.</p>"]
  ]
}));

module.exports = pages;
