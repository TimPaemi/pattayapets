"use strict";
/* Cluster: Taking your pet out of Thailand */

const { article, hub } = require("../guidekit.js");
const { exportCountryRelated, attachImportMirrorLink } = require("../data/country-pairs.js");
const rb = require("../data/richness-blocks.js");
const {
  claimLink,
  REGULATED_EXPORT_FROM_PATTAYA,
  REGULATED_EXPORT_RELOCATION,
  REGULATED_EXPORT_EXTRA_FAQS
} = require("../data/regulated-claims.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const CLUSTER = { name: "Taking a pet out of Thailand", path: "/take-pet-out-of-thailand/" };
const SUB = [GUIDES, CLUSTER];

const VERIFY =
  "The regulated claims and authority links cited on this page were checked on " +
  "1 August 2026. Export rules &mdash; Thai DLD " +
  "procedures, destination-country requirements, airline policies and CDC/APHA " +
  "rules &mdash; change without notice. Use this as orientation, then confirm " +
  "every current requirement with the DLD and the destination country&rsquo;s " +
  "authority before booking.";

const OFFICIAL =
  "<p><strong>Official sources to verify against:</strong> " +
  claimLink("TH-EXPORT-SEQUENCE-2025-10", "DLD Region 9 export procedure") + "; " +
  "<a href=\"https://www.gov.uk/bring-pet-to-great-britain\" target=\"_blank\" rel=\"noopener\">UK pet travel</a>; " +
  "<a href=\"https://www.cdc.gov/importation/bringing-an-animal-into-the-us/index.html\" target=\"_blank\" rel=\"noopener\">CDC animal import (USA)</a>; " +
  "<a href=\"https://food.ec.europa.eu/animals/live-animal-movements/dogs-cats-and-ferrets/bringing-pet-eu-non-eu-country_en\" target=\"_blank\" rel=\"noopener\">EU pet movement</a>; " +
  "<a href=\"https://www.maff.go.jp/aqs/english/\" target=\"_blank\" rel=\"noopener\">Japan MAFF Animal Quarantine</a>; " +
  "<a href=\"https://avs.nparks.gov.sg/pets/importing-exporting-a-pet/import/dogs-and-cats/\" " +
  "target=\"_blank\" rel=\"noopener\">Singapore AVS</a>; " +
  "<a href=\"https://moccae.gov.ae/en/services/import-permit-pets\" " +
  "target=\"_blank\" rel=\"noopener\">UAE MOCCAE pet import</a>; " +
  "<a href=\"https://www.agriculture.gov.au/biosecurity-trade/cats-dogs\" target=\"_blank\" " +
  "rel=\"noopener\">Australia DAFF</a>; " +
  "<a href=\"https://www.mpi.govt.nz/bring-send-to-nz/pets-travelling-to-nz/bringing-cats-and-dogs-to-nz\" target=\"_blank\" rel=\"noopener\">New Zealand MPI</a>; " +
  "<a href=\"https://inspection.canada.ca/en/importing-food-plants-animals/pets\" " +
  "target=\"_blank\" rel=\"noopener\">Canada CFIA</a>; " +
  "<a href=\"https://www.blv.admin.ch/en/travelling-with-dogs-cats-and-ferrets\" " +
  "target=\"_blank\" rel=\"noopener\">Switzerland FSVO</a>.</p>";

const THAI_SIDE =
  "<p>All of this sits on top of the Thai " +
  "<a href=\"/take-pet-out-of-thailand/export-process.html\">export process</a> " +
  "&mdash; the DLD health certificate and export permit &mdash; which your pet must " +
  "clear on the way out. The two sets of paperwork have to agree.</p>";

const EXP_RELATED = [
  { name: "The export process", path: "/take-pet-out-of-thailand/export-process.html", desc: "The Thai DLD side of leaving." },
  { name: "DLD export permit", path: "/take-pet-out-of-thailand/export-permit-thailand-dld.html", desc: "The permit you apply for before departure." },
  { name: "What export costs", path: "/take-pet-out-of-thailand/cost-to-export-a-pet-from-thailand.html", desc: "Budgeting the Thai side and the flight." },
  { name: "Bringing a pet to Thailand", path: "/bring-pet-to-thailand/", desc: "The reverse journey, for context." },
  { name: "Rabies titer test", path: "/bring-pet-to-thailand/rabies-vaccination-titer-test.html", desc: "Why timing it early matters so much." },
  { name: "Pet relocation agents", path: "/pet-relocation/", desc: "Specialists who manage export." }
];

function expCountryRelated(slug) {
  return exportCountryRelated(slug, EXP_RELATED);
}

const pages = [];

pages.push(hub({
  path: "/take-pet-out-of-thailand/",
  title: "Export a Pet from Thailand (DLD Guide 2026) | PattayaPets",
  image: "/assets/img/og-export.png",
  updated: "2026-06-03",
  desc: "Export a dog or cat from Thailand in 2026: DLD export permit, health certificate, " +
    "rabies titer timing and destination guides for the UK, USA, EU and Australia.",
  crumb: "Taking a pet out of Thailand",
  breadcrumbs: [GUIDES],
  eyebrow: "Guide",
  h1: "Taking your pet out of Thailand",
  lede: "Leaving Thailand with your pet is the import process in reverse &mdash; " +
    "plus whatever the destination country demands. And destinations vary " +
    "enormously.",
  intro:
    "<p>There are two halves to this. The <strong>Thai side</strong> is " +
    "relatively consistent: the Department of Livestock Development (DLD) " +
    "requires an export health certificate and an export permit. The " +
    "<strong>destination side</strong> sets a separate pathway. The standard UK route " +
    "from Thailand can require a rabies titer test followed by a three-month wait; the " +
    "current EU route instead measures at least 90 days from sampling to certificate " +
    "issue, subject to the destination&rsquo;s exceptions. " +
    "Australia instead requires an approved-country " +
    "pathway before export, and the USA has its own CDC rules " +
    "for dogs.</p>" +
    "<p>Read the current destination pathway before booking. Arrange a " +
    "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">rabies titer " +
    "test</a> only when that pathway requires it, using its laboratory and timing rules. " +
    "A <a href=\"/pet-relocation/\">pet relocation agent</a> is optional and does not " +
    "replace authority verification.</p>" +
    '<div class="callout callout-tip"><div class="ch">Rules change — verify before you act</div>' +
    "<p>" + VERIFY + "</p>" + OFFICIAL + "</div>",
  groups: [
    {
      title: "The process",
      cards: [
        { tag: "Start here", name: "Export checklist", desc: "A printable step-by-step checklist for the whole departure.", path: "/take-pet-out-of-thailand/checklist.html" },
        { tag: "Step 1", name: "The export process", desc: "The Thai DLD side: health certificate, export permit and timing.", path: "/take-pet-out-of-thailand/export-process.html" },
        { tag: "Step 2", name: "DLD export permit", desc: "How to apply to the Animal Quarantine Station before you fly.", path: "/take-pet-out-of-thailand/export-permit-thailand-dld.html" }
      ]
    },
    {
      title: "Plan and budget",
      cards: [
        { tag: "Money", name: "What it costs", desc: "Where the money goes on the Thai side and the flight out.", path: "/take-pet-out-of-thailand/cost-to-export-a-pet-from-thailand.html" }
      ]
    },
    {
      title: "By destination",
      note: "Where you are heading changes everything — these are the common ones.",
      cards: [
        { name: "To the UK", desc: "Titer test, the three-month wait, and tapeworm treatment.", path: "/take-pet-out-of-thailand/to-uk.html" },
        { name: "To the USA", desc: "The CDC dog-import rules and the rabies titer test.", path: "/take-pet-out-of-thailand/to-usa.html" },
        { name: "To the EU", desc: "Titer test, 90-day pre-certificate period and EU entry certificate.", path: "/take-pet-out-of-thailand/to-eu.html" },
        { name: "To Japan", desc: "MAFF import approval, microchip and the 180-day wait from the titer sample.", path: "/take-pet-out-of-thailand/to-japan.html" },
        { name: "To Singapore", desc: "AVS licence, rabies titer test and the import permit.", path: "/take-pet-out-of-thailand/to-singapore.html" },
        { name: "To the UAE", desc: "MOCCAE import permit, microchip and vaccination requirements.", path: "/take-pet-out-of-thailand/to-uae.html" },
        { name: "To Australia", desc: "Why an approved country must come before the final export.", path: "/take-pet-out-of-thailand/to-australia.html" },
        { name: "To Germany", desc: "The EU titer test, 90-day pre-certificate period and entry certificate.", path: "/take-pet-out-of-thailand/to-germany.html" },
        { name: "To Sweden", desc: "Standard EU entry rules for a pet arriving from Thailand.", path: "/take-pet-out-of-thailand/to-sweden.html" },
        { name: "To Norway", desc: "EU-style entry, plus the tapeworm rule for dogs.", path: "/take-pet-out-of-thailand/to-norway.html" },
        { name: "To Denmark", desc: "Standard EU entry rules and the Danish authority.", path: "/take-pet-out-of-thailand/to-denmark.html" },
        { name: "To Finland", desc: "EU entry, plus the tapeworm treatment for dogs.", path: "/take-pet-out-of-thailand/to-finland.html" },
        { name: "To the Netherlands", desc: "EU entry, with direct routes into Amsterdam.", path: "/take-pet-out-of-thailand/to-netherlands.html" },
        { name: "To France", desc: "EU entry rules, with Paris a common arrival point.", path: "/take-pet-out-of-thailand/to-france.html" },
        { name: "To Ireland", desc: "EU entry, plus the tapeworm treatment for dogs.", path: "/take-pet-out-of-thailand/to-ireland.html" },
        { name: "To Switzerland", desc: "EU-aligned rules: titer test and a waiting period.", path: "/take-pet-out-of-thailand/to-switzerland.html" },
        { name: "To Canada", desc: "One of the simpler routes — no titer test or quarantine.", path: "/take-pet-out-of-thailand/to-canada.html" },
        { name: "To Russia", desc: "A relatively straightforward route for a large community.", path: "/take-pet-out-of-thailand/to-russia.html" },
        { name: "To New Zealand", desc: "A long, strict route that needs early planning with MPI.", path: "/take-pet-out-of-thailand/to-new-zealand.html" },
        { name: "To India", desc: "AQCS import clearance and planning from Pattaya.", path: "/take-pet-out-of-thailand/to-india.html" },
        { name: "To the Philippines", desc: "BAI import paperwork and direct flights to Manila.", path: "/take-pet-out-of-thailand/to-philippines.html" },
        { name: "To China", desc: "Customs import clearance and quarantine on arrival.", path: "/take-pet-out-of-thailand/to-china.html" },
        { name: "To South Africa", desc: "DALRRD import permit and routing from Bangkok.", path: "/take-pet-out-of-thailand/to-south-africa.html" },
        { name: "To Italy", desc: "EU titer test, 90-day pre-certificate period and entry certificate.", path: "/take-pet-out-of-thailand/to-italy.html" },
        { name: "To Malaysia", desc: "DVS import approval and short ASEAN flight.", path: "/take-pet-out-of-thailand/to-malaysia.html" },
        { name: "To South Korea", desc: "APQA import permission and antibody testing.", path: "/take-pet-out-of-thailand/to-south-korea.html" }
      ]
    }
  ],
  related: [
    { name: "Export checklist", path: "/take-pet-out-of-thailand/checklist.html", desc: "Printable step-by-step checklist." },
    { name: "The export process", path: "/take-pet-out-of-thailand/export-process.html", desc: "The Thai DLD side of leaving." },
    { name: "Pet relocation agents", path: "/pet-relocation/", desc: "Agents who coordinate export paperwork and flights." },
    { name: "Export to Australia", path: "/take-pet-out-of-thailand/to-australia.html", desc: "The approved-country route and DAFF controls." },
    { name: "What export costs", path: "/take-pet-out-of-thailand/cost-to-export-a-pet-from-thailand.html", desc: "Budgeting the Thai side and the flight." },
    { name: "Import checklist", path: "/bring-pet-to-thailand/checklist.html", desc: "The reverse journey." },
    { name: "Bringing a pet to Thailand", path: "/bring-pet-to-thailand/", desc: "The import hub, for context." }
  ]
}));

function exp(o) {
  var sections = attachImportMirrorLink((o.sections || []).slice(), o.slug);
  if (!o.skipRichness) {
    sections.push(REGULATED_EXPORT_FROM_PATTAYA);
    sections.push(REGULATED_EXPORT_RELOCATION);
  }
  if (!o.skipOfficial) {
    sections.push({ h: "Official sources", html: (o.officialExtra || "") + OFFICIAL });
  }
  return article({
    path: "/take-pet-out-of-thailand/" + o.slug + ".html",
    title: o.title, desc: o.desc, crumb: o.crumb, breadcrumbs: SUB,
    eyebrow: "Taking a pet out of Thailand",
    h1: o.h1, lede: o.lede, verify: o.verify || VERIFY,
    updated: o.updated || "2026-06-01",
    sections: sections, faqs: rb.mergeFaqs(o.faqs, REGULATED_EXPORT_EXTRA_FAQS),
    related: o.related || expCountryRelated(o.slug)
  });
}

const DLD_EXPORT_TABLE =
  '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
  '<th scope="col">Thai-side document</th><th scope="col">Notes</th></tr></thead><tbody>' +
  '<tr><th scope="row">Export application (form R1/1)</th><td>Ask the Animal Quarantine Station responsible for the departure port how and when it accepts the application. The current reviewed DLD procedure does not establish one universal email channel or 15-day deadline.</td></tr>' +
  '<tr><th scope="row">Destination import rules</th><td>Show the UK/US/Australian import permit or published requirements to the AQS &mdash; the Thai health certificate must match.</td></tr>' +
  '<tr><th scope="row">Identification, vaccinations and tests</th><td>Carry the records required by the destination and the responsible AQS; requirements depend on the destination and species.</td></tr>' +
  '<tr><th scope="row">Mandatory DLD health examination</th><td>The reviewed DLD procedure says the animal must be examined <strong>no more than 2&ndash;3 days before travel</strong>. After a compliant examination, the station issues the R9 export licence and health certificate. ' + claimLink("TH-EXPORT-SEQUENCE-2025-10", "DLD source") + '.</td></tr>' +
  '</tbody></table></div>';

const EXPORT_FAILS =
  "<ul>" +
  "<li><strong>Starting with Thailand only</strong> &mdash; destination testing, forms or an approved-country pathway may have a separate calendar and must be checked first.</li>" +
  "<li><strong>Expired titer or vaccination gap</strong> &mdash; a lapsed rabies shot can invalidate a titer test and restart months of waiting.</li>" +
  "<li><strong>Mismatched microchip numbers</strong> &mdash; across Thai export papers, airline booking and destination import forms.</li>" +
  "<li><strong>Skipping the final DLD examination</strong> &mdash; the reviewed procedure requires a health examination no more than 2&ndash;3 days before travel.</li>" +
  "<li><strong>Wrong airport AQS</strong> &mdash; export paperwork must match the actual departure port; confirm which AQS is responsible.</li>" +
  "</ul>";

pages.push(exp({
  slug: "export-process", crumb: "The export process",
  skipOfficial: true,
  title: "Thailand Pet Export Process: DLD Steps (2026) | PattayaPets",
  desc: "Thai DLD pet export process: destination requirements, R1/1, mandatory health " +
    "examination, R9, health certificate and responsible departure AQS.",
  updated: "2026-05-30",
  h1: "The export process from Thailand",
  lede: "Before any destination-country rule applies, your pet has to clear the " +
    "Thai export process. Here is that half.",
  sections: [
    { h: "What Thailand requires to export a pet", html:
      "<p>The Department of Livestock Development oversees pet export. The core " +
      "of the Thai side is:</p>" +
      "<ul><li>the animal identification and records required by the destination and AQS;</li>" +
      "<li>a current <strong>rabies vaccination</strong> and other vaccinations;</li>" +
      "<li>a mandatory <strong>DLD health examination no more than 2&ndash;3 days before travel</strong>;</li>" +
      "<li>an <strong>R9 export licence and health certificate</strong>, issued after a compliant examination.</li></ul>" +
      "<p>Submit the R1/1 application as the responsible departure-port AQS directs, then attend the final examination. " +
      claimLink("TH-EXPORT-SEQUENCE-2025-10", "DLD procedure") + ".</p>" },
    { h: "Where the destination country comes in", html:
      "<p>The Thai paperwork only gets your pet <em>out</em>. Getting it " +
      "<em>in</em> at the other end is governed entirely by the destination " +
      "country. It can add a rabies titer, waiting period, permit or quarantine. " +
      "Read the destination page " +
      "for where you are going &mdash; for example " +
      '<a href="/take-pet-out-of-thailand/to-uk.html">the UK</a>, ' +
      '<a href="/take-pet-out-of-thailand/to-eu.html">the EU</a>, or ' +
      '<a href="/take-pet-out-of-thailand/to-australia.html">Australia</a> ' +
      "&mdash; and work backwards from your travel date.</p>" },
    { h: "Leaving from the airport", html:
      "<p>Suvarnabhumi (BKK) has a published DLD AQS process for the DLD examination " +
      "and export documents. The reviewed procedure " +
      "requires the examination no more than 2&ndash;3 days before travel; it does not " +
      "state a separate universal three-day flight-confirmation rule. Confirm the " +
      "intake channel and appointment with the responsible AQS. If using an optional " +
      "<a href=\"/pet-relocation/\">pet relocation agent</a>, obtain an itemised " +
      "scope and independently verify the airport, airline and destination rules.</p>" },
    { h: "Official sources", html: OFFICIAL },
    { h: "Next steps", html:
      "<p>For the permit application itself, see our dedicated page on the " +
      "<a href=\"/take-pet-out-of-thailand/export-permit-thailand-dld.html\">DLD " +
      "export permit</a>. For budgeting, see " +
      "<a href=\"/take-pet-out-of-thailand/cost-to-export-a-pet-from-thailand.html\">" +
      "what export costs</a>.</p>" }
  ],
  faqs: [
    ["How far ahead should I start the export process?",
     "<p>Start with the destination authority&rsquo;s calendar. The standard UK route can require a titer and three-month wait; the current EU route places at least 90 days between sampling and certificate issue. Australia requires an approved-country pathway. Ask the responsible Thai AQS when to file R1/1 and reserve the mandatory DLD examination for no more than 2&ndash;3 days before travel.</p>"],
    ["Do I need an agent to export a pet?",
     "<p>No. An agent is optional. If you seek one, ask for an itemised scope and verify every government and airline requirement directly; PattayaPets has not independently measured agents&rsquo; error rates or outcomes.</p>"],
    ["Can I fly my pet out of U-Tapao instead of Bangkok?",
     "<p>The DLD AQS map reviewed on 1 August 2026 does not list U-Tapao/Rayong airport, so this guide cannot establish a pet-export clearance service there. Confirm the current position directly with DLD before routing; Suvarnabhumi is an alternative with a published AQS process.</p>"],
    ["What if my destination changes mid-process?",
     "<p>You may need new import rules, a fresh health certificate and possibly a new titer timeline. Start destination research before you book flights.</p>"],
    ["Is export harder than import into Thailand?",
     "<p>There is no universal comparison. The destination controls can add testing, permits, quarantine or an approved-country pathway, while the Thai procedure adds R1/1, a mandatory examination and R9/health-certificate issuance.</p>"]
  ],
  related: [
    { name: "DLD export permit", path: "/take-pet-out-of-thailand/export-permit-thailand-dld.html", desc: "The permit you apply for before departure." },
    { name: "Export to the EU", path: "/take-pet-out-of-thailand/to-eu.html", desc: "Titer test and the 90-day pre-certificate period." },
    { name: "Export to the USA", path: "/take-pet-out-of-thailand/to-usa.html", desc: "CDC dog-import rules and the titer test." },
    { name: "Pet relocation agents", path: "/pet-relocation/", desc: "Specialists who manage export." }
  ]
}));

pages.push(exp({
  slug: "export-permit-thailand-dld", crumb: "DLD export permit",
  title: "Thailand DLD Pet Export Permit (2026) | PattayaPets",
  desc: "Thailand DLD pet export procedure: R1/1 application, destination import rules, mandatory final examination and R9 health documents.",
  updated: "2026-05-31",
  h1: "The Thailand export permit (DLD)",
  lede: "Before your pet leaves Thailand, the Department of Livestock Development " +
    "must issue an export permit and health certificate. Here is how that half works.",
  sections: [
    { h: "Timeline at a glance", html:
      "<p>Work backwards from your departure date. The destination country&rsquo;s " +
      "rules &mdash; not the Thai desk alone &mdash; usually set the calendar.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th></tr></thead><tbody>' +
      '<tr><th scope="row">As early as the destination requires</th>' +
      '<td>Complete that country&rsquo;s pathway. UK and EU routes may require titer testing and a waiting period; Australia requires an approved-country pathway.</td></tr>' +
      '<tr><th scope="row">As soon as dates firm</th>' +
      '<td>Obtain destination import permit or written requirements to show the AQS</td></tr>' +
      '<tr><th scope="row">As the responsible AQS directs</th>' +
      '<td>Submit DLD export application form <strong>R1/1</strong>; the reviewed procedure does not give one universal email channel or 15-day deadline</td></tr>' +
      '<tr><th scope="row">No more than 2&ndash;3 days before travel</th>' +
      '<td>Attend the mandatory DLD health examination. If compliant, the station issues the <strong>R9 export licence and health certificate</strong>. ' + claimLink("TH-EXPORT-SEQUENCE-2025-10", "DLD source") + '</td></tr>' +
      '<tr><th scope="row">Departure day</th>' +
      '<td>Final AQS check at the airport; airline accepts pet with matching paperwork</td></tr>' +
      '</tbody></table></div>' },
    { h: "What the export permit is", html:
      "<p>The export permit is issued by the <strong>Department of Livestock " +
      "Development (DLD)</strong> through the <strong>Animal Quarantine Station " +
      "(AQS)</strong> at your departure airport. It confirms your pet may be " +
      "exported and is paired with a DLD health certificate after a veterinary " +
      "inspection.</p>" },
    { h: "Start with the destination country", html:
      "<p>Thailand exports pets <em>to</em> another country&rsquo;s rules. Before " +
      "you apply, obtain that country&rsquo;s import requirements or import permit " +
      "and show them to the AQS &mdash; the Thai health certificate must match what " +
      "the destination expects. Start with the " +
      "<a href=\"/take-pet-out-of-thailand/export-process.html\">export process</a> " +
      "and the destination page in our " +
      "<a href=\"/take-pet-out-of-thailand/\">export guide</a> &mdash; for example " +
      "<a href=\"/take-pet-out-of-thailand/to-uk.html\">the UK</a>, " +
      "<a href=\"/take-pet-out-of-thailand/to-usa.html\">the USA</a>, or " +
      "<a href=\"/take-pet-out-of-thailand/to-eu.html\">the EU</a> &mdash; and confirm with " +
      "the foreign authority directly.</p>" },
    { h: "When to apply", html:
      "<p>Ask the Animal Quarantine Station responsible for your departure port how " +
      "and when to submit R1/1. The current procedure reviewed for this page does not " +
      "establish a universal 15-day deadline or one email channel for every station. " +
      "Allow enough time for destination-side documents and the AQS response.</p>" +
      "<p>The destination calendar can include the UK&rsquo;s three-month post-sample " +
      "wait or the EU&rsquo;s 90-day pre-certificate titer period, which can mean starting " +
      "months before you book the flight.</p>" },
    { h: "How to apply", html:
      "<p>Applications go to the AQS at your port of departure using DLD form " +
      "<strong>R1/1</strong> (export application). Contact that station directly for " +
      "its current submission channel, location and office hours; this guide has not " +
      "verified one method for every AQS.</p>" +
      "<p>A DLD officer reviews the documents and must examine the animal no more than " +
      "2&ndash;3 days before travel. If the animal and documents comply, the station " +
      "issues the R9 export licence and health certificate. " +
      claimLink("TH-EXPORT-SEQUENCE-2025-10", "DLD procedure") + ".</p>" },
    { h: "What you will typically need", html:
      "<ul><li>Completed form <strong>1/1</strong> and a copy of your ID (passport " +
      "for foreign nationals)</li>" +
      "<li>Your pet&rsquo;s microchip number and vaccination records</li>" +
      "<li>The destination country&rsquo;s import permit or written health requirements</li>" +
      "<li>Flight details and consignee details matching all other documents</li>" +
      "<li>Any test results the destination or AQS requires (such as a rabies titer " +
      "result for the UK or EU)</li></ul>" +
      "<p>Keep printed originals of the export permit, health certificate and every " +
      "supporting document for the airport and the destination border check.</p>" },
    { h: "Attend the final health examination", html:
      "<p>Arrange the mandatory DLD examination for <strong>no more than 2&ndash;3 days " +
      "before travel</strong>. Give the station the itinerary and destination " +
      "requirements it requests. The reviewed DLD procedure does not state a separate " +
      "universal rule to email a flight confirmation at least three days before departure.</p>" },
    { h: "Common mistakes", html:
      "<ul>" +
      "<li><strong>Starting with Thailand only</strong> &mdash; finish the destination pathway early enough to show it to the AQS.</li>" +
      "<li><strong>Missing the examination window</strong> &mdash; the DLD examination must be no more than 2&ndash;3 days before travel.</li>" +
      "<li><strong>Mismatched microchip numbers</strong> &mdash; across Thai export papers, airline booking and destination import forms.</li>" +
      "<li><strong>Wrong airport AQS</strong> &mdash; export paperwork must match the actual departure port; confirm which AQS is responsible.</li>" +
      "<li><strong>Destination import proof missing</strong> &mdash; the AQS needs to see what the receiving country expects before issuing the health certificate.</li>" +
      "</ul>" },
    { h: "What comes next", html:
      "<p>Book the flight under " +
      '<a href="/bring-pet-to-thailand/airline-pet-policies.html">airline pet policies</a>, ' +
      "budget in our " +
      '<a href="/take-pet-out-of-thailand/cost-to-export-a-pet-from-thailand.html">export cost guide</a>, ' +
      "and, if requested, obtain an itemised scope from a " +
      '<a href="/pet-relocation/">pet relocation agent</a> while continuing to verify every regulated rule directly.</p>' }
  ],
  faqs: [
    ["Can I get the export permit on the day of the flight?",
     "<p>Do not plan for same-day clearance. Ask the responsible AQS for its R1/1 intake timing and attend the mandatory health examination no more than 2&ndash;3 days before travel. Destination documents may require substantially more lead time.</p>"],
    ["Do I need an agent for the export permit?",
     "<p>No. An agent is optional. If you request help, obtain an itemised scope and independently verify government and airline rules; PattayaPets has not measured agents&rsquo; outcomes.</p>"],
    ["Which airport AQS handles Pattaya departures?",
     "<p>The current DLD AQS map reviewed for this guide does not list U-Tapao/Rayong airport. Confirm the available clearance port with DLD before booking; do not infer a current U-Tapao service from airport expansion plans.</p>"],
    ["What is form 1/1 vs form 9?",
     "<p>R1/1 is the export application. After the mandatory examination no more than 2&ndash;3 days before travel, the station issues the R9 export licence and health certificate if the animal and documents comply.</p>"],
    ["Do I confirm the appointment with the AQS?",
     "<p>Yes. Ask the responsible AQS what itinerary details it requires and how it schedules the examination. This guide found no current universal three-day flight-confirmation rule separate from the mandatory 2&ndash;3-day examination window.</p>"]
  ],
  related: [
    { name: "The export process", path: "/take-pet-out-of-thailand/export-process.html", desc: "The Thai DLD side of leaving." },
    { name: "What export costs", path: "/take-pet-out-of-thailand/cost-to-export-a-pet-from-thailand.html", desc: "Budgeting the Thai side and the flight." },
    { name: "Export to the EU", path: "/take-pet-out-of-thailand/to-eu.html", desc: "Titer test and the 90-day pre-certificate period." },
    { name: "Pet relocation agents", path: "/pet-relocation/", desc: "Specialists who manage export paperwork." }
  ]
}));

pages.push(exp({
  slug: "cost-to-export-a-pet-from-thailand", crumb: "What it costs",
  title: "Pet Export Costs from Thailand (2026) | PattayaPets",
  desc: "Verified pet-export costs from Thailand: DLD paperwork, Thai Airways AVIH fees, Singapore quarantine and why a single total misleads.",
  updated: "2026-08-05",
  h1: "What it costs to export a pet from Thailand",
  lede: "There is no responsible single total for every route. The examples below " +
    "separate published airline and quarantine charges from veterinary, crate, " +
    "permit and agent costs that need case-specific quotes.",
  verify: "The Thai Airways figures and current policy route were rechecked on 5 August 2026; " +
    "the Singapore AVS and Australia DAFF figures retain their stated 26 July checks. Each amount names its source; " +
    "get written quotes before committing to travel.",
  officialExtra:
    "<p><strong>Price and pathway sources:</strong> " +
    "<a href=\"https://www.thaiairways.com/en-tw/content/special-assistance/travel-with-pets/pets-as-checked-baggage-avih/\" target=\"_blank\" rel=\"noopener\">Thai Airways AVIH</a>; " +
    "<a href=\"https://avs.nparks.gov.sg/about-us/our-centres/animal-quarantine-centre/\" target=\"_blank\" rel=\"noopener\">Singapore Animal Quarantine Centre</a>; " +
    "<a href=\"https://www.agriculture.gov.au/biosecurity-trade/cats-dogs/frequently-asked-questions\" target=\"_blank\" rel=\"noopener\">Australia DAFF pet-import FAQ</a>.</p>",
  sections: [
    { h: "Where the money goes", html:
      "<p>A pet export is a stack of separate costs:</p>" +
      "<ul><li><strong>Vaccinations and vet checks</strong> &mdash; quote the exact " +
      "destination work with the veterinarian.</li>" +
      "<li><strong>Rabies titer test</strong> &mdash; arrange one only when the current " +
      "destination pathway requires it, using that authority&rsquo;s laboratory, threshold " +
      "and timing rules.</li>" +
      "<li><strong>Thai export health certificate &amp; DLD fees</strong> &mdash; " +
      "AQS inspection and official paperwork on departure.</li>" +
      "<li><strong>Destination import permit or pre-approval</strong> &mdash; some " +
      "countries charge for their own import licence.</li>" +
      "<li><strong>IATA travel crate</strong> &mdash; sized to your pet if flying " +
      "in the hold or as cargo.</li>" +
      "<li><strong>The flight</strong> &mdash; obtain a quote for the exact animal, " +
      "container, route and transport mode. Check " +
      "<a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">airline pet " +
      "policies</a> early.</li>" +
      "<li><strong>Relocation agent</strong> &mdash; optional; ask for an itemised " +
      "scope and do not treat it as authority evidence.</li>" +
      "<li><strong>Quarantine or intermediary-country residence</strong> &mdash; " +
      "Singapore&rsquo;s Schedule III route requires at least 30 days of quarantine for a pet arriving from Thailand. " +
      claimLink("SG-SCHEDULE-III-ENTRY-2026-08", "AVS conditions") + ". " +
      "Australia does not accept a standard direct import from Thailand: its current " +
      "path requires at least 180 consecutive days in an approved country before export.</li></ul>" },
    { h: "Named published examples", html:
      "<p><strong>Thai Airways checked-baggage pets (AVIH):</strong> for travel on or " +
      "after 2 March 2026, the airline publishes <strong>US$320</strong> when the " +
      "animal plus container weighs under 32 kg and <strong>US$540</strong> for " +
      "32&ndash;70 kg. Request the service at least three working days ahead; route " +
      "and aircraft restrictions still apply.</p>" +
      "<p>THAI&rsquo;s localized pages disagree on the upper-band baht conversion, " +
      "so this page deliberately does not publish that conversion. Ask the airline " +
      "which currency and amount it will charge for your booking.</p>" +
      "<p><strong>Singapore quarantine:</strong> AVS publishes S$26 per day for a " +
      "fan-cooled room or S$35 per day for an air-conditioned room from 1 December " +
      "2025. At the 30-day minimum for a Thailand-origin pet, accommodation alone is " +
      "<strong>S$780 or S$1,050</strong> (30 multiplied by the daily rate), before " +
      "the published S$75 transport fee and S$68 rabies-vaccination fee. Figures " +
      "checked 26 July 2026.</p>" +
      "<p>These are components, not package totals. Veterinary work, laboratory " +
      "testing, crate, permits, cargo handling and agent fees vary by animal and route.</p>" },
    { h: "Thai-side fees only", html:
      "<p>The reviewed DLD procedure does not publish one dependable total for the " +
      "inspection, R9 licence and health certificate. Keep any AQS charge separate " +
      "from veterinary, laboratory, crate, airline, handling and optional-agent quotes. See the " +
      "<a href=\"/take-pet-out-of-thailand/export-permit-thailand-dld.html\">export " +
      "permit page</a> for the application process.</p>" },
    { h: "What comes next", html:
      "<p>Line up the <a href=\"/take-pet-out-of-thailand/export-process.html\">export " +
      "process</a> and your destination page &mdash; for example " +
      "<a href=\"/take-pet-out-of-thailand/to-eu.html\">export to the EU</a>, " +
      "<a href=\"/take-pet-out-of-thailand/to-uae.html\">export to the UAE</a>, or " +
      "<a href=\"/take-pet-out-of-thailand/to-australia.html\">export to Australia</a>. " +
      "A <a href=\"/pet-relocation/\">pet relocation agent</a> is optional; verify " +
      "every regulated instruction with the named authority.</p>" },
    { h: "Comparing a self-managed move with an agent", html:
      "<p>An agent is optional. For manifest cargo, quarantine or an intermediary-country " +
      "pathway, compare a written, itemised service quote with the direct costs you can " +
      "verify. Confirm every government and airline charge yourself; PattayaPets has not " +
      "independently measured agents&rsquo; prices or outcomes.</p>" }
  ],
  faqs: [
    ["Is export cheaper than import?",
     "<p>There is no verified universal comparison. Price the complete route: DLD, veterinary work, laboratory testing, crate, airline, destination permit or quarantine, handling and any optional agent.</p>"],
    ["Should I budget for an agent?",
     "<p>An agent is optional. Ask for an itemised quote so government, airline, handling and service fees remain visible, and verify regulated requirements directly. PattayaPets has not established that an agent prevents errors or saves money.</p>"],
    ["How much does the DLD export inspection cost?",
     "<p>The DLD export page explains the application, examination, Form 9 export licence and health certificate, but it does not publish one dependable end-to-end price for a pet move. Ask the departure-airport AQS for current government charges, then keep those separate from veterinary, laboratory, crate, airline and agent quotes.</p>"],
    ["Do I pay while waiting for a titer test?",
     "<p>Ordinary care continues while you wait, and extra boarding, repeat veterinary work or rebooking may apply in some cases. List those possible categories without assuming they will occur, then obtain quotes for your route.</p>"],
    ["Can I get a fixed quote upfront?",
     "<p>Relocation agents can quote a package; DIY exporters should get separate quotes from your vet, the lab, the airline and the destination authority before committing to dates. Check which items are estimates, which taxes or handling fees are excluded, and how long every price remains valid.</p>"]
  ],
  related: [
    { name: "The export process", path: "/take-pet-out-of-thailand/export-process.html", desc: "The Thai DLD side of leaving." },
    { name: "DLD export permit", path: "/take-pet-out-of-thailand/export-permit-thailand-dld.html", desc: "The permit you apply for before departure." },
    { name: "Export to Australia", path: "/take-pet-out-of-thailand/to-australia.html", desc: "The approved-country route and DAFF controls." },
    { name: "Pet relocation agents", path: "/pet-relocation/", desc: "Specialists who manage export." }
  ]
}));

pages.push(exp({
  slug: "to-uk", crumb: "To the UK",
  title: "Thailand to UK Pet Export (2026) | PattayaPets",
  desc: "Thailand to UK pet export: rabies titer test, three-month wait, tapeworm " +
    "treatment, approved routes, DLD export timeline and document checklist.",
  updated: "2026-08-01",
  h1: "Taking a pet from Thailand to the UK",
  lede: "Great Britain treats Thailand as an <strong>&lsquo;unlisted&rsquo; " +
    "country</strong>. That single classification drives a timeline measured in " +
    "months, not weeks &mdash; unless you planned ahead before you ever moved here.",
  verify: "The cited Great Britain blood-test, tapeworm and air-route rules were checked " +
    "on 1 August 2026 against GOV.UK. Thailand was absent from the checked listed-country " +
    "table; approved routes and carrier availability must be rechecked before payment.",
  officialExtra:
    "<p><strong>UK sources:</strong> " +
    "<a href=\"https://www.gov.uk/bring-pet-to-great-britain\" target=\"_blank\" " +
    "rel=\"noopener\">bringing a pet to Great Britain</a>; " +
    "<a href=\"https://www.gov.uk/bring-pet-to-great-britain/rabies-blood-tests\" target=\"_blank\" " +
    "rel=\"noopener\">rabies blood tests</a>; " +
    "<a href=\"https://www.gov.uk/bring-pet-to-great-britain/travel-routes-pets\" target=\"_blank\" " +
    "rel=\"noopener\">pet travel routes</a>; " +
    "<a href=\"https://www.gov.uk/government/publications/pet-travel-approved-air-sea-and-rail-carriers-and-routes/approved-air-routes-for-pet-travel\" target=\"_blank\" " +
    "rel=\"noopener\">approved air routes</a>. " +
    "Mirror import guide: " +
    "<a href=\"/bring-pet-to-thailand/from-uk.html\">bringing a pet from the UK</a>.</p>",
  sections: [
    { h: "The timeline — work backwards from landing in Britain", html:
      "<p>If you do not already hold a valid rabies titer test from before you " +
      "moved to Thailand, the standard non-listed route requires <strong>three months</strong> " +
      "from the blood sample before entry. " +
      claimLink("GB-RABIES-BLOOD-2026-08", "GOV.UK blood-test rule") + ".</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">Month 1 (if no valid titer yet)</th>' +
      '<td>Confirm the identifier and current rabies vaccination; sample for the <strong>rabies blood test</strong> at least 30 days after vaccination and use an approved laboratory. ' + claimLink("GB-RABIES-BLOOD-2026-08", "Source") + '</td>' +
      '<td>Thai vet + approved laboratory</td></tr>' +
      '<tr><th scope="row">Months 1&ndash;3</th>' +
      '<td><strong>Wait three months</strong> from the blood-sample date under the checked non-listed-country route. ' + claimLink("GB-RABIES-BLOOD-2026-08", "Source") + '</td>' +
      '<td>UK import rules</td></tr>' +
      '<tr><th scope="row">6&ndash;8 weeks before flight</th>' +
      '<td>Research <strong>approved UK entry routes and carriers</strong>; book pet space on a compliant flight</td>' +
      '<td>Airline / relocation agent</td></tr>' +
      '<tr><th scope="row">As the responsible AQS directs</th>' +
      '<td>File Thai DLD form R1/1 with the UK requirements and titer result; the current reviewed procedure gives no universal 15-day deadline</td>' +
      '<td>Departure-port DLD AQS</td></tr>' +
      '<tr><th scope="row">No more than 2&ndash;3 days before travel</th>' +
      '<td>Attend the mandatory DLD health examination; obtain R9 and the health certificate if compliant</td>' +
      '<td>' + claimLink("TH-EXPORT-SEQUENCE-2025-10", "DLD procedure") + '</td></tr>' +
      '<tr><th scope="row">24 hours &ndash; 5 days before UK arrival (dogs)</th>' +
      '<td>Vet-administered <strong>tapeworm treatment</strong> documented on the pet document. ' + claimLink("GB-TAPEWORM-2026-08", "GOV.UK window") + '</td>' +
      '<td>Veterinarian</td></tr>' +
      '<tr><th scope="row">UK arrival</th>' +
      '<td>Enter via an <strong>approved route</strong>; present microchip, rabies, titer and travel documents at border control</td>' +
      '<td>UK Border Force / carrier</td></tr>' +
      '</tbody></table></div>' },
    { h: "What the UK requires from Thailand", html:
      "<p>For pets entering Great Britain from an unlisted country such as Thailand, " +
      "GOV.UK requires (among other steps):</p>" +
      "<ul>" +
      "<li>A readable <strong>microchip</strong> implanted before rabies vaccination</li>" +
      "<li><strong>Valid rabies vaccination</strong></li>" +
      "<li><strong>Rabies blood test (titer)</strong> from an approved lab, with sample taken at least 30 days after vaccination and a result of at least 0.5 IU/ml</li>" +
      "<li><strong>Three-month wait</strong> from the date of that blood sample before entry &mdash; " + claimLink("GB-RABIES-BLOOD-2026-08", "blood-test source") + "</li>" +
      "<li>The correct <strong>pet travel document</strong> for entry from an unlisted country (not an EU pet passport alone)</li>" +
      "<li>For <strong>dogs</strong>, tapeworm treatment by a vet <strong>no less than 24 hours and no more than 5 days</strong> before arrival &mdash; " + claimLink("GB-TAPEWORM-2026-08", "treatment source") + "</li>" +
      "<li>Travel on a currently <strong>approved route and company</strong> into Great Britain</li>" +
      "</ul>" +
      "<p>Failure to meet these rules can mean <strong>quarantine up to four months</strong> or refusal of entry. Confirm every detail on " +
      "<a href=\"https://www.gov.uk/bring-pet-to-great-britain\" target=\"_blank\" rel=\"noopener\">GOV.UK</a> before you book.</p>" +
      '<div class="callout callout-tip"><div class="ch">Already did the titer test before Thailand?</div>' +
      "<p>If you had the blood test done in the UK (or another listed country) before " +
      "moving and kept rabies vaccination current without a gap, you may skip the " +
      "three-month wait &mdash; but only when the current GOV.UK exception and continuous " +
      "vaccination evidence apply. Confirm the individual record before booking. " +
      claimLink("GB-RABIES-BLOOD-2026-08", "Exception source") + ".</p></div>" },
    { h: "The Thai export side (DLD)", html:
      "<p>Your pet must also clear Thailand&rsquo;s export process in parallel:</p>" +
      DLD_EXPORT_TABLE +
      "<p>Full walkthrough: " +
      '<a href="/take-pet-out-of-thailand/export-process.html">export process</a> ' +
      "and " +
      '<a href="/take-pet-out-of-thailand/export-permit-thailand-dld.html">export permit application</a>.</p>' },
    { h: "Approved routes and booking", html:
      "<p>For an ordinary pet arriving in Great Britain by plane, GOV.UK requires " +
      "<strong>cargo</strong>; the stated exceptions are chartered private planes and guide " +
      "or assistance dogs. GOV.UK warns that approved routes can change, so check the live " +
      "route list and obtain written carrier acceptance before paying. " +
      claimLink("GB-AIR-ROUTE-2026-08", "GOV.UK air-route rule") + ". A " +
      '<a href="/pet-relocation/">pet relocation agent</a> can be asked for an itemised routing scope, ' +
      "but is optional and must not replace direct rule checks. See also " +
      '<a href="/bring-pet-to-thailand/airline-pet-policies.html">airline pet policies</a>.</p>' },
    { h: "Common mistakes on this corridor", html: EXPORT_FAILS +
      "<ul>" +
      "<li><strong>Booking a flight before the three-month wait ends</strong> &mdash; the titer clock cannot be rushed.</li>" +
      "<li><strong>Missing or mistimed tapeworm treatment</strong> for dogs &mdash; calculate the destination&rsquo;s window from arrival time.</li>" +
      "<li><strong>Assuming any EU airport connection works</strong> &mdash; check approved routes into Great Britain specifically.</li>" +
      "</ul>" },
    { h: "Who should not use this as a last-minute route", html:
      "<p>Do not book travel as compliant if the three-month blood-test wait has not finished, " +
      "rabies vaccination continuity is uncertain, the dog&rsquo;s tapeworm window " +
      "cannot be coordinated, or your chosen carrier cannot confirm approved cargo " +
      "entry. A normal passenger ticket does not make the pet route compliant.</p>" }
  ],
  faqs: [
    ["How long does it take to move a pet from Thailand to the UK?",
     "<p>If the rabies blood test still has to be done from Thailand, the checked non-listed route requires three months after sampling, plus Thai export processing and flight booking. A pre-existing result helps only when the current exception and vaccination-continuity evidence apply. " + claimLink("GB-RABIES-BLOOD-2026-08", "GOV.UK source") + ".</p>"],
    ["Does my dog need a tapeworm treatment?",
     "<p>Under the checked Thailand route, yes. A veterinarian must administer and record it no less than 24 hours and no more than 5 days before Great Britain entry; calculate from arrival time. " + claimLink("GB-TAPEWORM-2026-08", "GOV.UK source") + ".</p>"],
    ["Can my pet fly in cabin to the UK from Bangkok?",
     "<p>Not as an ordinary pet under the checked GOV.UK rule. Pets arriving by plane travel as cargo unless on a chartered private plane or travelling as a guide or assistance dog. Use a current approved route and obtain written carrier acceptance. " + claimLink("GB-AIR-ROUTE-2026-08", "GOV.UK source") + ".</p>"],
    ["What if my titer test fails?",
      "<p>A result below 0.5 IU/ml does not qualify under the checked rule. Ask the veterinarian and GOV.UK how to prepare a new test for the individual vaccination history; do not book non-refundable cargo until the qualifying result and entry date are clear. " + claimLink("GB-RABIES-BLOOD-2026-08", "Threshold source") + ".</p>"],
    ["Do I need a UK import permit as well as the Thai export permit?",
     "<p>Great Britain does not issue a separate import permit for personal pet dogs and cats in the same way Australia does, but you must meet every documentary and routing requirement on GOV.UK. The Thai export permit is Thailand&rsquo;s permission to leave; UK rules govern entry.</p>"]
  ]
}));

pages.push(exp({
  slug: "to-usa", crumb: "To the USA",
  updated: "2026-08-01",
  title: "Thailand to USA Pet Export: CDC Rules (2026) | PattayaPets",
  desc: "Thailand to USA pet export: CDC dog-import rules for high-rabies countries, " +
    "titer test, DLD export timeline, document checklist and planning months ahead.",
  h1: "Taking a pet from Thailand to the USA",
  lede: "Thailand appears on the current US Centers for Disease Control " +
    "<strong>high-risk list for dog rabies</strong>. The applicable path still depends " +
    "on the dog&rsquo;s six-month travel and vaccination history.",
  officialExtra:
    "<p><strong>US sources:</strong> " +
    "<a href=\"https://www.cdc.gov/importation/bringing-an-animal-into-the-us/index.html\" " +
    "target=\"_blank\" rel=\"noopener\">CDC animal import</a>; " +
    "<a href=\"https://www.aphis.usda.gov/pet-travel\" target=\"_blank\" rel=\"noopener\">USDA APHIS pet travel</a>. " +
    "Mirror import guide: " +
    "<a href=\"/bring-pet-to-thailand/from-usa.html\">bringing a pet from the USA</a>.</p>",
  sections: [
    { h: "The timeline — dogs from a high-rabies country", html:
      "<p>CDC rules for dogs changed several times from 2024 onward. The table below " +
      "is orientation &mdash; your dog&rsquo;s vaccination history and US entry airport " +
      "determine the exact path. Read the CDC site directly before acting.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">Before booking</th>' +
      '<td>Confirm the CDC pathway from the dog&rsquo;s six-month history. For the foreign-vaccinated high-risk path, verify the microchip and rabies sequence and decide whether to obtain a CDC-approved-lab titer; without a valid titer, the facility reservation includes 28-day quarantine. ' + claimLink("US-CDC-FOREIGN-HIGH-RISK-2026-08", "CDC pathway") + '</td>' +
      '<td>Importer + veterinarian + CDC facility</td></tr>' +
      '<tr><th scope="row">Weeks before travel</th>' +
      '<td>Complete CDC dog import documentation online; note any required US arrival airports</td>' +
      '<td>CDC</td></tr>' +
      '<tr><th scope="row">As the responsible AQS directs</th>' +
      '<td>File Thai DLD form R1/1 with the CDC/USDA requirements; there is no universal 15-day deadline in the reviewed procedure</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">No more than 2&ndash;3 days before travel</th>' +
      '<td>Attend the mandatory DLD examination; obtain R9 and the health certificate if compliant</td>' +
      '<td>' + claimLink("TH-EXPORT-SEQUENCE-2025-10", "DLD procedure") + '</td></tr>' +
      '<tr><th scope="row">US arrival</th>' +
      '<td>Arrive at the airport where your reserved CDC-registered animal care facility is located; present CDC documentation, health papers and microchip</td>' +
      '<td>CDC / port veterinarian</td></tr>' +
      '</tbody></table></div>' },
    { h: "CDC rules for dogs — what Thailand triggers", html:
      "<p>A dog vaccinated outside the United States that has been in Thailand during " +
      "the six months before entry follows the CDC foreign-vaccinated, high-risk-country " +
      "pathway. The dog must be at least six months old, appear healthy and have a " +
      "universally readable microchip implanted before its valid rabies vaccination. " +
      claimLink("US-CDC-THAILAND-RISK-2026-08", "Thailand risk list") + "; " +
      claimLink("US-CDC-FOREIGN-HIGH-RISK-2026-08", "foreign-vaccinated pathway") + ".</p>" +
      "<p>You need an endorsed Certification of Foreign Rabies Vaccination and Microchip " +
      "form and a CDC Dog Import Form receipt. You must also reserve a CDC-registered " +
      "animal care facility and fly directly to the US airport where that facility is " +
      "located. The facility examines the dog and revaccinates it with a US-licensed " +
      "rabies vaccine.</p>" +
      "<p>A valid rabies serology titer avoids the standard post-arrival quarantine, but " +
      "it does not remove the facility reservation. Without a valid titer, the " +
      "reservation must include 28-day quarantine. For a dog starting with its first " +
      "valid rabies vaccination, the blood sample must be taken at least 30 days after " +
      "vaccination and at least 28 days before US entry. Recheck the " +
      "<a href=\"https://www.cdc.gov/importation/dogs/foreign-vaccinated-high-risk-countries.html\" " +
      "target=\"_blank\" rel=\"noopener\">current CDC pathway</a> before booking " +
      "because vaccination history can change the preparation sequence. " +
      claimLink("US-CDC-FOREIGN-HIGH-RISK-2026-08", "CDC source") + ".</p>" },
    { h: "Cats — lighter, but not automatic", html:
      "<p>Cats face fewer CDC restrictions than dogs, but must still be healthy on " +
      "arrival and may need documentation depending on airline and state rules. " +
      "Some US states and airlines impose extra requirements beyond the CDC. Confirm " +
      "cat rules with the CDC, USDA and your airline before booking.</p>" },
    { h: "The Thai export side (DLD)", html:
      "<p>CDC approval does not replace Thailand&rsquo;s export process:</p>" +
      DLD_EXPORT_TABLE +
      "<p>See " +
      '<a href="/take-pet-out-of-thailand/export-process.html">export process</a> ' +
      "and budget in " +
      '<a href="/take-pet-out-of-thailand/cost-to-export-a-pet-from-thailand.html">what export costs</a>.</p>' },
    { h: "Common mistakes on this corridor", html: EXPORT_FAILS +
      "<ul>" +
      "<li><strong>Assuming pre-2024 dog-import rules still apply</strong> &mdash; verify the current CDC page.</li>" +
      "<li><strong>Identification mismatch</strong> &mdash; follow the current CDC microchip rule and ensure the same identifier appears throughout the records.</li>" +
      "<li><strong>Wrong US arrival airport</strong> &mdash; a foreign-vaccinated dog must land at the airport where its reserved CDC-registered facility is located.</li>" +
      "<li><strong>Leaving the facility and document review until travel day</strong> &mdash; the endorsed foreign-vaccination form and facility reservation must already be valid.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Does my dog need a rabies titer test to enter the USA from Thailand?",
     "<p>A valid titer is not the only entry option for a foreign-vaccinated dog on this pathway, but without one the required CDC-registered facility reservation includes 28-day quarantine. The reservation, examination and US revaccination still apply with a valid titer. " + claimLink("US-CDC-FOREIGN-HIGH-RISK-2026-08", "CDC source") + ".</p>"],
    ["Where do I check the current US rules?",
     "<p>The CDC governs disease-control import rules for dogs; USDA APHIS covers animal-health certification. Check both directly, plus your destination US state's requirements, before you book.</p>"],
    ["Can I use the same health certificate that got my dog into Thailand?",
     "<p>No. Export from Thailand requires a fresh DLD export health certificate and export permit. US entry requires current CDC-compliant documentation for the inbound journey.</p>"],
    ["Should I use a relocation agent for the USA?",
     "<p>An agent is optional. For a dog on the CDC high-risk-country pathway, ask any agent for an itemised scope and verify each CDC, DLD, facility and airline step directly; PattayaPets has not measured agent outcomes.</p>"],
    ["How does this relate to bringing a dog TO Thailand from the US?",
     "<p>Different direction, different rules. See our <a href=\"/bring-pet-to-thailand/from-usa.html\">USA-to-Thailand import guide</a> for the inbound path; this page is Thailand to USA only.</p>"]
  ]
}));

const EU_EXPORT_TIMELINE =
  '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
  '<th scope="col">When</th><th scope="col">Step</th></tr></thead><tbody>' +
  '<tr><th scope="row">Before booking</th>' +
  '<td>Plan rabies vaccination and the antibody-titer test at a designated laboratory. For the current Thailand route, sampling is at least 30 days after primary vaccination or within a current valid series and at least 90 days before certificate issue. ' + claimLink("EU-RABIES-TITER-2026-08", "Commission titer rule") + '</td></tr>' +
  '<tr><th scope="row">As soon as dates firm</th>' +
  '<td>Confirm destination member-state rules (designated travellers&rsquo; point of entry, advance notification, tapeworm treatment for dogs if required).</td></tr>' +
  '<tr><th scope="row">As the responsible AQS directs</th>' +
  '<td>File Thai DLD form R1/1 with destination evidence; the reviewed procedure does not give one universal 15-day deadline.</td></tr>' +
  '<tr><th scope="row">No more than 2&ndash;3 days before travel</th>' +
  '<td>Attend the mandatory DLD examination; obtain R9 and the health certificate if compliant. ' + claimLink("TH-EXPORT-SEQUENCE-2025-10", "DLD procedure") + '</td></tr>' +
  '<tr><th scope="row">No more than 10 days before EU entry</th>' +
  '<td>Have the EU animal health certificate issued by an official veterinarian, or issued by an authorised veterinarian and endorsed by the competent authority. Make sure the certificate model, microchip, vaccination and titer documents all match. ' + claimLink("EU-NONCOMMERCIAL-ENTRY-2026-08", "Commission entry rule") + '</td></tr>' +
  '<tr><th scope="row">Before check-in</th>' +
  '<td>Confirm flight pet booking and that connection airports accept live animals if not flying direct.</td></tr>' +
  '<tr><th scope="row">At the travellers&rsquo; point of entry</th>' +
  '<td>Present the EU health certificate, microchip, vaccination and titer records for documentary and identity checks.</td></tr>' +
  '</tbody></table></div>';

const EU_MEMBER_EXPORT_LINKS =
  "<p>National pages cover competent-authority contacts, travellers&rsquo; points of entry and local extras:</p>" +
  "<ul>" +
  "<li><a href=\"/take-pet-out-of-thailand/to-germany.html\">Germany</a> &middot; " +
  "<a href=\"/take-pet-out-of-thailand/to-france.html\">France</a> &middot; " +
  "<a href=\"/take-pet-out-of-thailand/to-netherlands.html\">Netherlands</a> &middot; " +
  "<a href=\"/take-pet-out-of-thailand/to-denmark.html\">Denmark</a> &middot; " +
  "<a href=\"/take-pet-out-of-thailand/to-sweden.html\">Sweden</a> &middot; " +
  "<a href=\"/take-pet-out-of-thailand/to-finland.html\">Finland</a> &middot; " +
  "<a href=\"/take-pet-out-of-thailand/to-ireland.html\">Ireland</a> &middot; " +
  "<a href=\"/take-pet-out-of-thailand/to-norway.html\">Norway</a> (EEA) &middot; " +
  "<a href=\"/take-pet-out-of-thailand/to-switzerland.html\">Switzerland</a></li>" +
  "</ul>";

const EU_EXPORT_FAILS =
  "<ul>" +
  "<li><strong>Starting with DLD only</strong> &mdash; the EU titer test and 90-day pre-certificate period usually set the calendar, not the Thai export desk.</li>" +
  "<li><strong>Wrong travellers&rsquo; point of entry</strong> &mdash; non-commercial pets must enter through a member state&rsquo;s designated point for travellers; not every airport qualifies.</li>" +
  "<li><strong>Certificate mismatch</strong> &mdash; Thai export health certificate wording must match the EU model your destination accepts for third-country entry.</li>" +
  "<li><strong>Expired titer or rabies gap</strong> &mdash; a lapsed vaccination invalidates prior tests and restarts waiting periods.</li>" +
  "<li><strong>Commercial vs non-commercial</strong> &mdash; more than five pets, resale or change of ownership can trigger commercial TRACES rules instead of pet-travel rules.</li>" +
  "</ul>";

pages.push(exp({
  slug: "to-eu", crumb: "To the EU",
  title: "Export Pet from Thailand to the EU (2026) | PattayaPets",
  desc: "Thailand to EU pet export: DLD permit, rabies titer timing, EU health certificate and designated travellers' entry points.",
  updated: "2026-08-01",
  h1: "Taking a pet from Thailand to the EU",
  lede: "For the current EU route, Thailand is outside the listed no-titer countries. " +
    "The rabies antibody test and at least 90 days between sampling and certificate " +
    "issue drive the calendar; line up DLD export paperwork inside it.",
  verify: "EU non-commercial pet rules were checked on 1 August 2026 against the " +
    "European Commission and the 2026 certificate framework. The arrival control is " +
    "a designated travellers&rsquo; point of entry, not a commercial Border Control Post.",
  officialExtra:
    "<p><strong>EU sources:</strong> " +
    "<a href=\"https://food.ec.europa.eu/animals/live-animal-movements/dogs-cats-and-ferrets/bringing-pet-eu-non-eu-country_en\" " +
    "target=\"_blank\" rel=\"noopener\">European Commission &mdash; bringing a pet from a non-EU country</a>. " +
    "Mirror import guide: " +
    "<a href=\"/bring-pet-to-thailand/from-eu.html\">bringing a pet from the EU</a>.</p>",
  sections: [
    { h: "The timeline — what to do when", html:
      "<p>Work backwards from the date you want to land in the EU. The applicable " +
      "titer and waiting rules set a fixed part of that calendar.</p>" +
      EU_EXPORT_TIMELINE },
    { h: "The titer test and the wait", html:
      "<p>To bring a pet into the EU from Thailand, your pet needs a current " +
      "rabies vaccination and a <strong>rabies antibody-titer test</strong> showing " +
      "at least 0.5 IU/ml. Under the current rule, an authorised veterinarian takes " +
      "the sample at least 30 days after the primary vaccination (or within a current " +
      "valid series), and at least <strong>90 days before the animal health certificate " +
      "is issued</strong>. " + claimLink("EU-RABIES-TITER-2026-08", "Commission rule") + ".</p>" +
      "<p>The Commission publishes conditions under which a satisfactory test completed " +
      "before leaving the EU can avoid the 90-day period on return. Confirm the " +
      "required recording and vaccination-continuity conditions before relying on that exception.</p>" },
    { h: "The EU entry health certificate", html:
      "<p>Your pet needs an EU animal health certificate completed for entry " +
      "from a third country and endorsed by the Thai authorities. The microchip, " +
      "vaccination dates and titer result must all line up on it. Non-commercial " +
      "entry must be through a <strong>designated travellers&rsquo; point of entry</strong> " +
      "in the member state of arrival. " +
      claimLink("EU-NONCOMMERCIAL-ENTRY-2026-08", "Commission entry rule") + ".</p>" +
      "<p>For certificates issued before 1 October 2026, the European Commission says " +
      "the former Regulation (EU) No 577/2013 model remains valid. For later travel, " +
      "use the model under Implementing Regulation (EU) 2026/705 and recheck the " +
      "Commission page before the appointment. " +
      claimLink("EU-NONCOMMERCIAL-ENTRY-2026-08", "Commission certificate page") + ".</p>" +
      "<p>Dogs entering Finland, Ireland, Malta or Norway may need tapeworm " +
      "treatment; some member states require advance notification. Confirm with " +
      "the competent authority for your entry country.</p>" +
      EU_MEMBER_EXPORT_LINKS },
    { h: "Thai export documents", html: DLD_EXPORT_TABLE + THAI_SIDE },
    { h: "Common mistakes on this corridor", html: EXPORT_FAILS + EU_EXPORT_FAILS },
    { h: "Who should not use the non-commercial route", html:
      "<p>This guide is not the right pathway when more than five pets travel, the " +
      "move involves sale or transfer of ownership, or the owner or authorised person " +
      "cannot travel within five days of the animals. Those cases can fall under " +
      "commercial movement and TRACES controls instead.</p>" }
  ],
  faqs: [
    ["Can the 90-day pre-certificate period be avoided?",
     "<p>The Commission publishes a re-entry exception when an EU-resident pet&rsquo;s passport documents the favourable test before departure and vaccination continuity is maintained. Ask the destination authority to decide any uncertain history before booking. " + claimLink("EU-RABIES-TITER-2026-08", "Commission source") + ".</p>"],
    ["Does the EU pet passport work for this?",
     "<p>Usually, a pet travelling from Thailand needs the EU animal health certificate. A documented return journey is different: an EU-resident pet may use its EU passport if it records a still-valid rabies vaccination and, where required, a favourable titer completed before the pet left the EU. If that return exception does not apply, the passport does not replace the certificate or arrival checks.</p>"],
    ["Can my pet enter any EU airport?",
     "<p>No. A non-commercial pet arriving from Thailand must use a member state&rsquo;s designated travellers&rsquo; point of entry, where officials perform document and identity checks. That is distinct from the Border Control Post terminology used for commercial consignments. Check the competent authority&rsquo;s current list before choosing an airport or connection. " + claimLink("EU-NONCOMMERCIAL-ENTRY-2026-08", "Commission source") + ".</p>"],
    ["How long does DLD export take compared with EU entry rules?",
     "<p>The reviewed DLD procedure does not publish a universal processing duration. EU titer testing and the waiting period set the longer calendar. Ask the responsible AQS when to file R1/1, then reserve the mandatory DLD examination for no more than 2&ndash;3 days before travel.</p>"],
    ["What if I am moving with more than one pet?",
     "<p>The current non-commercial route ordinarily caps the movement at five pets and applies owner-travel conditions; narrow event exceptions exist. Above the limit, on ownership change or when owner-travel conditions fail, use the authority&rsquo;s applicable movement pathway. " + claimLink("EU-NONCOMMERCIAL-ENTRY-2026-08", "Commission source") + ".</p>"]
  ]
}));

pages.push(exp({
  slug: "to-australia", crumb: "To Australia",
  title: "Export Pet from Thailand to Australia (2026) | PattayaPets",
  desc: "Thailand to Australia pet export: why direct import fails, approved-country " +
    "pathway, DAFF import permit, mandatory quarantine and DLD export checklist.",
  h1: "Taking a pet from Thailand to Australia",
  lede: "Be direct with yourself: <strong>you cannot fly a pet directly from Thailand " +
    "to Australia</strong> under normal DAFF rules. Thailand is not an approved " +
    "country. The pet must first qualify through an approved country.",
  officialExtra:
    "<p><strong>Australian sources:</strong> " +
    "<a href=\"https://www.agriculture.gov.au/biosecurity-trade/cats-dogs\" " +
    "target=\"_blank\" rel=\"noopener\">importing cats and dogs to Australia</a>. " +
    "Mirror import guide: " +
    "<a href=\"/bring-pet-to-thailand/from-australia.html\">bringing a pet from Australia</a>.</p>",
  sections: [
    { h: "Why direct import does not work", html:
      "<p>Australia only allows dog and cat imports from countries on its approved " +
      "list (grouped by rabies risk). <strong>Thailand is not an approved country</strong> " +
      "for direct import. For the standard non-approved-country pathway, the pet must:</p>" +
      "<ol>" +
      "<li>Move first to a DAFF-approved Group 1, 2 or 3 country.</li>" +
      "<li>Spend at least <strong>180 consecutive days in approved countries immediately before export</strong> to Australia.</li>" +
      "<li>Complete all required vaccinations, testing and treatments in an approved country.</li>" +
      "<li>Obtain the Australian import permit, meet the approved-country export conditions and complete required post-entry quarantine.</li>" +
      "</ol>" +
      "<p>Do not start the qualifying veterinary work in Thailand and assume it counts. " +
      "DAFF identifies limited exceptions, including some returning Australian-origin " +
      "animals; confirm whether an exception applies before acting. " +
      claimLink("AU-NONAPPROVED-PATH-2026-08", "DAFF FAQ") + ".</p>" },
    { h: "The realistic timeline (high level)", html:
      "<p>Every case differs by approved-country pathway, but the shape is similar:</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">Phase</th><th scope="col">What happens</th><th scope="col">Who</th></tr></thead><tbody>' +
      '<tr><th scope="row">Choose an approved-country pathway</th>' +
      '<td>Confirm a Group 1, 2 or 3 country and its own entry rules with DAFF and that country before moving the pet</td>' +
      '<td>You + DAFF + interim-country authority</td></tr>' +
      '<tr><th scope="row">Move to an approved country</th>' +
      '<td>Complete Thailand&rsquo;s DLD export process for this first leg, then establish the pet in the approved country</td>' +
      '<td>DLD + interim-country authority</td></tr>' +
      '<tr><th scope="row">Approved-country residence and preparation</th>' +
      '<td>Maintain at least 180 consecutive days in approved countries immediately before Australian export and complete every required vaccination, test and treatment there</td>' +
      '<td>DAFF conditions + approved-country veterinarian</td></tr>' +
      '<tr><th scope="row">Import permit</th>' +
      '<td>Apply for Australian import permit with full veterinary history</td>' +
      '<td>DAFF</td></tr>' +
      '<tr><th scope="row">Export from interim country</th>' +
      '<td>That country&rsquo;s export process + airline cargo booking to Australia</td>' +
      '<td>Foreign authority + airline</td></tr>' +
      '<tr><th scope="row">Arrival in Australia</th>' +
      '<td>Mandatory quarantine at Mickleham; release only when DAFF clears the pet</td>' +
      '<td>DAFF quarantine facility</td></tr>' +
      '</tbody></table></div>' +
      '<div class="callout callout-emergency"><div class="ch">Australia → Thailand was the easy bit</div>' +
      "<p>If you imported from Australia, do not assume symmetry or assume the standard " +
      "180-day pathway automatically applies. Read " +
      '<a href="/bring-pet-to-thailand/from-australia.html">Australia to Thailand</a> ' +
      "for the outbound direction, then ask DAFF whether a documented returning-animal " +
      "exception changes the route.</p></div>" },
    { h: "What DAFF import typically requires", html:
      "<p>After the pet is in an approved country, use the exact DAFF checklist for that " +
      "country group. It can include:</p>" +
      "<ul>" +
      "<li><strong>Import permit</strong> issued before export to Australia</li>" +
      "<li>DAFF-compliant identification and rabies vaccination history</li>" +
      "<li><strong>Rabies neutralising antibody titre test (RNAT)</strong> from an approved lab, on schedule</li>" +
      "<li>Additional blood tests, treatments and examinations timed to DAFF&rsquo;s calendar</li>" +
      "<li>Export health certificate from the <strong>approved country of export</strong> (not Thailand for final entry)</li>" +
      "<li>Booking at the <strong>post-entry quarantine facility</strong> before the pet flies</li>" +
      "</ul>" +
      "<p>Quarantine is not optional &mdash; even perfect paperwork ends with a stay at Mickleham.</p>" },
    { h: "The Thai export side — when Thailand is still in the journey", html:
      "<p>If your pet is departing Thailand for an approved interim country, you still need:</p>" +
      DLD_EXPORT_TABLE +
      "<p>That interim country then becomes the export origin for the Australia leg. See " +
      '<a href="/take-pet-out-of-thailand/export-process.html">export process</a>.</p>' },
    { h: "Common mistakes on this corridor", html: EXPORT_FAILS +
      "<ul>" +
      "<li><strong>Booking Bangkok&ndash;Sydney direct</strong> &mdash; not available for pets from Thailand under normal DAFF rules.</li>" +
      "<li><strong>Doing qualifying tests in Thailand</strong> &mdash; the standard pathway requires the vaccinations, testing and treatments in an approved country.</li>" +
      "<li><strong>Counting non-approved-country time</strong> &mdash; the 180 consecutive days immediately before export must be in approved countries.</li>" +
      "<li><strong>Assuming an agent changes the rules</strong> &mdash; an agent is optional and DAFF remains authoritative.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Can I fly my pet directly from Thailand to Australia?",
      "<p>Generally no. Thailand is not approved for direct dog and cat import. Under the standard pathway, move first to an approved country, keep the pet in approved countries for at least 180 consecutive days immediately before export, and complete the required veterinary work there. Ask DAFF about limited returning-animal exceptions.</p>"],
    ["How early should I start?",
      "<p>Before moving the pet to an approved country, obtain DAFF&rsquo;s current pathway and that country&rsquo;s entry rules. The 180-day approved-country residence is only one part of the calendar; this guide does not state an unsupported total duration.</p>"],
    ["How much does Thailand-to-Australia cost?",
      "<p>No verified universal total is available here. Price the Thailand-to-approved-country leg, 180-day residence, approved-country veterinary work and export, DAFF charges, quarantine, airline and handling separately. An agent is optional; request an itemised quote if you use one.</p>"],
    ["Does my pet need a Thai export permit if Australia is the final goal?",
     "<p>If the pet leaves Thailand en route to an approved interim country, yes — the DLD export permit and health certificate are required for that first leg. The Australia import permit covers entry from the approved country, not from Thailand directly.</p>"],
    ["What if I cannot complete the return pathway?",
     "<p>Some owners rehome their pet in Thailand or relocate the pet to a third country where they can stay long-term. Decide early — last-minute rehoming is distressing for everyone.</p>"]
  ]
}));

module.exports = pages;
