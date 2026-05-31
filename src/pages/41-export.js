"use strict";
/* Cluster: Taking your pet out of Thailand */

const { article, hub } = require("../guidekit.js");
const { exportCountryRelated, attachImportMirrorLink } = require("../data/country-pairs.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const CLUSTER = { name: "Taking a pet out of Thailand", path: "/take-pet-out-of-thailand/" };
const SUB = [GUIDES, CLUSTER];

const VERIFY =
  "This guide was last reviewed on 31 May 2026 against DLD export procedures and " +
  "published destination-country import rules. Export rules &mdash; Thai DLD " +
  "procedures, destination-country requirements, airline policies and CDC/APHA " +
  "rules &mdash; change without notice. Use this as orientation, then confirm " +
  "every current requirement with the DLD and the destination country&rsquo;s " +
  "authority before booking.";

const OFFICIAL =
  "<p><strong>Official sources to verify against:</strong> " +
  "<a href=\"https://aqi.dld.go.th/webnew/index.php/th/service-menu-2/office-service-menu/72-research/kmresearch/432-exportation-of-live-animals\" " +
  "target=\"_blank\" rel=\"noopener nofollow\">DLD export of live animals</a>; " +
  "Suvarnabhumi AQS export: " +
  "<a href=\"mailto:qsap_bkk_export@dld.go.th\">qsap_bkk_export@dld.go.th</a> " +
  "(Mon&ndash;Fri 08:30&ndash;12:00 and 13:00&ndash;15:30, Thai public holidays excepted); " +
  "<a href=\"https://www.gov.uk/bring-pet-to-great-britain\" target=\"_blank\" rel=\"noopener nofollow\">UK pet travel</a>; " +
  "<a href=\"https://www.cdc.gov/importation/bringing-an-animal-into-the-us/index.html\" target=\"_blank\" rel=\"noopener nofollow\">CDC animal import (USA)</a>; " +
  "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" rel=\"noopener nofollow\">EU pet movement</a>; " +
  "<a href=\"https://www.maff.go.jp/aqs/english/\" target=\"_blank\" rel=\"noopener nofollow\">Japan MAFF Animal Quarantine</a>; " +
  "<a href=\"https://avs.nparks.gov.sg/pets/importing-exporting-a-pet/import/dogs-and-cats/\" " +
  "target=\"_blank\" rel=\"noopener nofollow\">Singapore AVS</a>; " +
  "<a href=\"https://moccae.gov.ae/en/services/import-permit-pets\" " +
  "target=\"_blank\" rel=\"noopener nofollow\">UAE MOCCAE pet import</a>; " +
  "<a href=\"https://www.agriculture.gov.au/biosecurity-trade/cats-dogs\" target=\"_blank\" " +
  "rel=\"noopener nofollow\">Australia DAFF</a>; " +
  "<a href=\"https://www.mpi.govt.nz/import/bringing-pets-to-nz/\" target=\"_blank\" rel=\"noopener nofollow\">New Zealand MPI</a>; " +
  "<a href=\"https://inspection.canada.ca/en/importing-food-plants-or-animals/pets\" " +
  "target=\"_blank\" rel=\"noopener nofollow\">Canada CFIA</a>; " +
  "<a href=\"https://www.blv.admin.ch/blv/en/home/tiere/reisen-mit-heimtieren.html\" " +
  "target=\"_blank\" rel=\"noopener nofollow\">Switzerland FSVO</a>.</p>";

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
  title: "How to Export a Pet from Thailand (DLD Guide 2026) | PattayaPets",
  image: "/assets/img/og-export.png",
  updated: "2026-05-30",
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
    "<strong>destination side</strong> is where it gets serious &mdash; the UK, " +
    "EU and Australia all require a rabies titer test with a waiting period of " +
    "<strong>three months or more</strong>, and the USA has its own CDC rules " +
    "for dogs.</p>" +
    "<p>The single biggest mistake is starting late. If you might leave Thailand " +
    "with your pet, get the <a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">" +
    "rabies titer test</a> done early &mdash; ideally you already did it before " +
    "arriving. Many owners use a " +
    '<a href="/pet-relocation/">pet relocation agent</a> to keep the paperwork aligned.</p>' +
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
        { name: "To the EU", desc: "Titer test, the three-month wait and the EU certificate.", path: "/take-pet-out-of-thailand/to-eu.html" },
        { name: "To Japan", desc: "MAFF import approval, microchip and the 180-day wait from the titer sample.", path: "/take-pet-out-of-thailand/to-japan.html" },
        { name: "To Singapore", desc: "AVS licence, rabies titer test and the import permit.", path: "/take-pet-out-of-thailand/to-singapore.html" },
        { name: "To the UAE", desc: "MOCCAE import permit, microchip and vaccination requirements.", path: "/take-pet-out-of-thailand/to-uae.html" },
        { name: "To Australia", desc: "The hardest route — why it takes six months or more.", path: "/take-pet-out-of-thailand/to-australia.html" },
        { name: "To Germany", desc: "The EU titer test, the three-month wait and the entry certificate.", path: "/take-pet-out-of-thailand/to-germany.html" },
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
        { name: "To South Africa", desc: "DALRRD import permit and routing from Bangkok.", path: "/take-pet-out-of-thailand/to-south-africa.html" }
      ]
    }
  ],
  related: [
    { name: "Export checklist", path: "/take-pet-out-of-thailand/checklist.html", desc: "Printable step-by-step checklist." },
    { name: "The export process", path: "/take-pet-out-of-thailand/export-process.html", desc: "The Thai DLD side of leaving." },
    { name: "Pet relocation agents", path: "/pet-relocation/", desc: "Agents who coordinate export paperwork and flights." },
    { name: "Export to Australia", path: "/take-pet-out-of-thailand/to-australia.html", desc: "The hardest route — and the most expensive." },
    { name: "What export costs", path: "/take-pet-out-of-thailand/cost-to-export-a-pet-from-thailand.html", desc: "Budgeting the Thai side and the flight." },
    { name: "Import checklist", path: "/bring-pet-to-thailand/checklist.html", desc: "The reverse journey." },
    { name: "Bringing a pet to Thailand", path: "/bring-pet-to-thailand/", desc: "The import hub, for context." }
  ]
}));

function exp(o) {
  var sections = attachImportMirrorLink((o.sections || []).slice(), o.slug);
  if (!o.skipOfficial) {
    sections.push({ h: "Official sources", html: (o.officialExtra || "") + OFFICIAL });
  }
  return article({
    path: "/take-pet-out-of-thailand/" + o.slug + ".html",
    title: o.title, desc: o.desc, crumb: o.crumb, breadcrumbs: SUB,
    eyebrow: "Taking a pet out of Thailand",
    h1: o.h1, lede: o.lede, verify: VERIFY,
    updated: o.updated || "2026-05-31",
    sections: sections, faqs: o.faqs,
    related: o.related || expCountryRelated(o.slug)
  });
}

const DLD_EXPORT_TABLE =
  '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
  '<th scope="col">Thai-side document</th><th scope="col">Notes</th></tr></thead><tbody>' +
  '<tr><th scope="row">Export application (form 1/1)</th><td>Email or submit to the AQS at your departure airport. Apply at least <strong>15 days</strong> before export (allow more in practice).</td></tr>' +
  '<tr><th scope="row">Destination import rules</th><td>Show the UK/US/Australian import permit or published requirements to the AQS &mdash; the Thai health certificate must match.</td></tr>' +
  '<tr><th scope="row">Microchip &amp; vaccinations</th><td>ISO chip and current rabies vaccination on record; destination may require a <a href="/bring-pet-to-thailand/rabies-vaccination-titer-test.html">rabies titer test</a>.</td></tr>' +
  '<tr><th scope="row">DLD export licence (form 9) &amp; health certificate</th><td>Issued after AQS inspection if paperwork complies.</td></tr>' +
  '<tr><th scope="row">Flight confirmation</th><td>Confirm departure date with the AQS at least <strong>three days</strong> before you fly.</td></tr>' +
  '</tbody></table></div>';

const EXPORT_FAILS =
  "<ul>" +
  "<li><strong>Starting with Thailand only</strong> &mdash; the destination timeline (titer test, CDC form, Australian import permit) is usually the long pole, not the DLD export desk.</li>" +
  "<li><strong>Expired titer or vaccination gap</strong> &mdash; a lapsed rabies shot can invalidate a titer test and restart months of waiting.</li>" +
  "<li><strong>Mismatched microchip numbers</strong> &mdash; across Thai export papers, airline booking and destination import forms.</li>" +
  "<li><strong>Last-minute DLD export</strong> &mdash; applying inside the 15-day window when the AQS still needs inspection or test results.</li>" +
  "<li><strong>Wrong airport AQS</strong> &mdash; export paperwork must match your actual departure port (Suvarnabhumi for most Pattaya departures).</li>" +
  "</ul>";

pages.push(exp({
  slug: "export-process", crumb: "The export process",
  skipOfficial: true,
  title: "Export a Pet from Thailand: DLD Process Step by Step | PattayaPets",
  desc: "Thai DLD pet export process: ISO microchip, rabies vaccination, export health " +
    "certificate, export permit (form 1/1) and Suvarnabhumi AQS steps before you fly.",
  updated: "2026-05-30",
  h1: "The export process from Thailand",
  lede: "Before any destination-country rule applies, your pet has to clear the " +
    "Thai export process. Here is that half.",
  sections: [
    { h: "What Thailand requires to export a pet", html:
      "<p>The Department of Livestock Development oversees pet export. The core " +
      "of the Thai side is:</p>" +
      "<ul><li>a working <strong>ISO microchip</strong> &mdash; see " +
      "<a href=\"/bring-pet-to-thailand/microchip-requirements.html\">microchip " +
      "requirements</a>;</li>" +
      "<li>a current <strong>rabies vaccination</strong> and other vaccinations;</li>" +
      "<li>a <strong>veterinary health certificate</strong> confirming your pet " +
      "is fit to travel;</li>" +
      "<li>an <strong>export permit</strong>, with the documents endorsed by the " +
      "DLD.</li></ul>" +
      "<p>This is usually arranged in the days just before travel, often at the " +
      "DLD office at the departure airport.</p>" },
    { h: "Where the destination country comes in", html:
      "<p>The Thai paperwork only gets your pet <em>out</em>. Getting it " +
      "<em>in</em> at the other end is governed entirely by the destination " +
      "country, and that is usually the harder, longer part &mdash; especially " +
      "the rabies titer test and its waiting period. Read the destination page " +
      "for where you are going &mdash; for example " +
      '<a href="/take-pet-out-of-thailand/to-uk.html">the UK</a>, ' +
      '<a href="/take-pet-out-of-thailand/to-eu.html">the EU</a>, or ' +
      '<a href="/take-pet-out-of-thailand/to-australia.html">Australia</a> ' +
      "&mdash; and work backwards from your travel date.</p>" },
    { h: "Leaving from the airport", html:
      "<p>Most pets depart from Suvarnabhumi (BKK). The DLD has an office at the " +
      "airport for final endorsement, and your pet is checked before it flies. " +
      "Confirm your exact departure date with the AQS export desk when your permit " +
      "application is underway &mdash; the same three-day confirmation rule applies " +
      "on export as on import. Many owners use a " +
      "<a href=\"/pet-relocation/\">pet relocation agent</a> " +
      "for export precisely because the airport steps, the " +
      "<a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">airline pet " +
      "policy</a> and the destination paperwork have to line up perfectly.</p>" },
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
     "<p>The Thai side is fairly quick, but the destination side is not — a titer test plus a three-month wait means several months of lead time for the UK, EU or Australia. Start as early as you can; the titer test is the long pole.</p>"],
    ["Do I need an agent to export a pet?",
     "<p>No, but many owners use one. The value of an agent is in lining up the Thai endorsement, the destination requirements and the flight so nothing slips. For complex destinations it is often worth it.</p>"]
  ],
  related: [
    { name: "DLD export permit", path: "/take-pet-out-of-thailand/export-permit-thailand-dld.html", desc: "The permit you apply for before departure." },
    { name: "Export to the EU", path: "/take-pet-out-of-thailand/to-eu.html", desc: "Titer test and the three-month wait." },
    { name: "Export to the USA", path: "/take-pet-out-of-thailand/to-usa.html", desc: "CDC dog-import rules and the titer test." },
    { name: "Pet relocation agents", path: "/pet-relocation/", desc: "Specialists who manage export." }
  ]
}));

pages.push(exp({
  slug: "export-permit-thailand-dld", crumb: "DLD export permit",
  title: "Thailand DLD Pet Export Permit: How to Apply (2026) | PattayaPets",
  desc: "Apply for Thailand's DLD pet export permit (form 1/1): 15-day minimum lead time, " +
    "Suvarnabhumi AQS export desk, destination import rules and what to submit.",
  updated: "2026-05-30",
  h1: "The Thailand export permit (DLD)",
  lede: "Before your pet leaves Thailand, the Department of Livestock Development " +
    "must issue an export permit and health certificate. Here is how that half works.",
  sections: [
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
      "<p>Official DLD guidance asks you to submit export application form " +
      "<strong>1/1 at least 15 days before export</strong>. In practice, allow " +
      "more slack &mdash; especially if blood tests, a " +
      "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">rabies " +
      "titer test</a> or destination-side paperwork still has to be completed.</p>" +
      "<p>The destination country&rsquo;s timeline is usually the long pole: a " +
      "titer test plus a three-month wait for the UK or EU can mean starting " +
      "months before you book the flight.</p>" },
    { h: "How to apply", html:
      "<p>Applications go to the AQS at your port of departure using DLD form " +
      "<strong>1/1</strong> (export application). For Suvarnabhumi (Bangkok), " +
      "the usual airport for Pattaya departures, email " +
      "<a href=\"mailto:qsap_bkk_export@dld.go.th\">qsap_bkk_export@dld.go.th</a> " +
      "or attend in person at the AQS office on the 1st floor of the Customs Export " +
      "Building at the airport (Mon&ndash;Fri 08:30&ndash;12:00 and 13:00&ndash;15:30, " +
      "except Thai public holidays).</p>" +
      "<p>An AQS veterinary officer reviews your documents, may examine your pet " +
      "and/or request tests, then issues the export licence (form 9) and health " +
      "certificate if everything complies.</p>" },
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
    { h: "What comes next", html:
      "<p>Book the flight under " +
      '<a href="/bring-pet-to-thailand/airline-pet-policies.html">airline pet policies</a>, ' +
      "budget in our " +
      '<a href="/take-pet-out-of-thailand/cost-to-export-a-pet-from-thailand.html">export cost guide</a>, ' +
      "and consider a " +
      '<a href="/pet-relocation/">pet relocation agent</a> if cargo or a complex destination is involved.</p>' }
  ],
  faqs: [
    ["Can I get the export permit on the day of the flight?",
     "<p>Officially you should apply at least 15 days ahead. Last-minute export is risky — the AQS may need time for inspection or tests, and your destination country may not accept paperwork issued the same day. Plan weeks ahead, not hours.</p>"],
    ["Do I need an agent for the export permit?",
     "<p>No, but many owners use a pet relocation agent because the Thai endorsement, destination requirements and airline booking must align. For complex destinations it is often worth the fee.</p>"]
  ],
  related: [
    { name: "The export process", path: "/take-pet-out-of-thailand/export-process.html", desc: "The Thai DLD side of leaving." },
    { name: "What export costs", path: "/take-pet-out-of-thailand/cost-to-export-a-pet-from-thailand.html", desc: "Budgeting the Thai side and the flight." },
    { name: "Export to the EU", path: "/take-pet-out-of-thailand/to-eu.html", desc: "Titer test and the three-month wait." },
    { name: "Pet relocation agents", path: "/pet-relocation/", desc: "Specialists who manage export paperwork." }
  ]
}));

pages.push(exp({
  slug: "cost-to-export-a-pet-from-thailand", crumb: "What it costs",
  title: "Cost to Export a Pet from Thailand (2026) | DLD, Vet & Flight Fees | PattayaPets",
  desc: "An honest look at the cost of taking a dog or cat out of Thailand — " +
    "Thai-side fees, vet work, the flight and destination requirements.",
  h1: "What it costs to export a pet from Thailand",
  lede: "Export has two cost piles: the relatively quick Thai side, and the " +
    "destination country&rsquo;s requirements — which can run to months and " +
    "thousands of dollars for a titer test and waiting period.",
  verify: "Costs below are rough orientation only, gathered in May 2026, and vary " +
    "widely by destination, airline, pet size and provider. Get written quotes for " +
    "your specific situation before you budget.",
  sections: [
    { h: "Where the money goes", html:
      "<p>A pet export is a stack of separate costs:</p>" +
      "<ul><li><strong>Vaccinations and vet checks</strong> &mdash; keeping rabies " +
      "and other jabs current at normal clinic rates.</li>" +
      "<li><strong>Rabies titer test</strong> &mdash; essential for the UK, EU, " +
      "Japan, Singapore and others; modest lab fee but a long calendar wait.</li>" +
      "<li><strong>Thai export health certificate &amp; DLD fees</strong> &mdash; " +
      "AQS inspection and official paperwork on departure.</li>" +
      "<li><strong>Destination import permit or pre-approval</strong> &mdash; some " +
      "countries charge for their own import licence.</li>" +
      "<li><strong>IATA travel crate</strong> &mdash; sized to your pet if flying " +
      "in the hold or as cargo.</li>" +
      "<li><strong>The flight</strong> &mdash; often the largest single line, and " +
      "highly variable by route and pet size. Check " +
      "<a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">airline pet " +
      "policies</a> early.</li>" +
      "<li><strong>Relocation agent</strong> &mdash; optional but common for cargo " +
      "bookings and complex destinations.</li>" +
      "<li><strong>Quarantine</strong> &mdash; only for certain destinations " +
      "(notably Australia); can dominate the budget.</li></ul>" },
    { h: "The honest range", html:
      "<p>For a straightforward export to a country without quarantine &mdash; " +
      "say Canada or Russia &mdash; owners commonly report a total in the " +
      "<strong>low-to-mid four figures (US dollars)</strong> once vet work, Thai " +
      "export fees, crate and flight are added. A small cat in cabin sits lower; " +
      "a large dog as manifest cargo with agent support sits higher.</p>" +
      "<p>For the UK, EU or Australia the <strong>destination timeline</strong> " +
      "matters as much as the cash: a titer test and three-month (or longer) wait " +
      "mean paying for ongoing care in Thailand while you wait, plus possible " +
      "repeat vet visits to keep certificates current.</p>" +
      "<p>We deliberately avoid a single headline number &mdash; get quotes from " +
      "your airline and a <a href=\"/pet-relocation/\">relocation agent</a> for " +
      "your exact route.</p>" },
    { h: "Thai-side fees only", html:
      "<p>The DLD export inspection and certificate are relatively modest compared " +
      "with the flight. The expensive parts on the Thai side are usually the vet " +
      "work (especially a titer test sent to an approved lab) and, if you use one, " +
      "the agent&rsquo;s service fee. See the " +
      "<a href=\"/take-pet-out-of-thailand/export-permit-thailand-dld.html\">export " +
      "permit page</a> for the application process.</p>" },
    { h: "What comes next", html:
      "<p>Line up the <a href=\"/take-pet-out-of-thailand/export-process.html\">export " +
      "process</a> and your destination page &mdash; for example " +
      "<a href=\"/take-pet-out-of-thailand/to-eu.html\">export to the EU</a>, " +
      "<a href=\"/take-pet-out-of-thailand/to-uae.html\">export to the UAE</a>, or " +
      "<a href=\"/take-pet-out-of-thailand/to-australia.html\">export to Australia</a>. " +
      "Many owners use a " +
      "<a href=\"/pet-relocation/\">pet relocation agent</a> to keep timing aligned.</p>" }
  ],
  faqs: [
    ["Is export cheaper than import?",
     "<p>Not necessarily. The Thai export steps are fairly quick, but destination requirements — especially a titer test and waiting period for the UK or EU — can make export more expensive and slower than bringing a pet into Thailand.</p>"],
    ["Should I budget for an agent?",
     "<p>Many owners export without one for simpler destinations. For cargo bookings, Australia, Japan or the USA (CDC dog rules), an agent often pays for itself in avoided mistakes and re-bookings.</p>"]
  ],
  related: [
    { name: "The export process", path: "/take-pet-out-of-thailand/export-process.html", desc: "The Thai DLD side of leaving." },
    { name: "DLD export permit", path: "/take-pet-out-of-thailand/export-permit-thailand-dld.html", desc: "The permit you apply for before departure." },
    { name: "Export to Australia", path: "/take-pet-out-of-thailand/to-australia.html", desc: "The hardest route — and the most expensive." },
    { name: "Pet relocation agents", path: "/pet-relocation/", desc: "Specialists who manage export." }
  ]
}));

pages.push(exp({
  slug: "to-uk", crumb: "To the UK",
  title: "Export a Pet from Thailand to the UK (Titer & Tapeworm 2026) | PattayaPets",
  desc: "Thailand to UK pet export: rabies titer test, three-month wait, tapeworm " +
    "treatment, approved routes, DLD export timeline and document checklist.",
  h1: "Taking a pet from Thailand to the UK",
  lede: "Great Britain treats Thailand as an <strong>&lsquo;unlisted&rsquo; " +
    "country</strong>. That single classification drives a timeline measured in " +
    "months, not weeks &mdash; unless you planned ahead before you ever moved here.",
  officialExtra:
    "<p><strong>UK sources:</strong> " +
    "<a href=\"https://www.gov.uk/bring-pet-to-great-britain\" target=\"_blank\" " +
    "rel=\"noopener nofollow\">bringing a pet to Great Britain</a>; " +
    "<a href=\"https://www.gov.uk/taking-your-pet-abroad\" target=\"_blank\" " +
    "rel=\"noopener nofollow\">taking your pet abroad</a>. " +
    "Mirror import guide: " +
    "<a href=\"/bring-pet-to-thailand/from-uk.html\">bringing a pet from the UK</a>.</p>",
  sections: [
    { h: "The timeline — work backwards from landing in Britain", html:
      "<p>If you do not already hold a valid rabies titer test from before you " +
      "moved to Thailand, assume <strong>at least three months</strong> from the " +
      "blood sample before your pet can enter Great Britain.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">Month 1 (if no valid titer yet)</th>' +
      '<td>Ensure ISO microchip and current rabies vaccination; blood sample for <strong>rabies titer test</strong> at least 30 days after vaccination; send to an approved lab</td>' +
      '<td>Thai vet + approved laboratory</td></tr>' +
      '<tr><th scope="row">Months 1&ndash;3</th>' +
      '<td><strong>Wait three months</strong> from the date of the blood sample (unlisted-country rule)</td>' +
      '<td>UK import rules</td></tr>' +
      '<tr><th scope="row">6&ndash;8 weeks before flight</th>' +
      '<td>Research <strong>approved UK entry routes and carriers</strong>; book pet space on a compliant flight</td>' +
      '<td>Airline / relocation agent</td></tr>' +
      '<tr><th scope="row">&ge;15 days before export</th>' +
      '<td>Apply for Thai <a href="/take-pet-out-of-thailand/export-permit-thailand-dld.html">DLD export permit</a> (form 1/1) with UK requirements and titer result attached</td>' +
      '<td>DLD AQS (e.g. qsap_bkk_export@dld.go.th)</td></tr>' +
      '<tr><th scope="row">24 hours &ndash; 5 days before UK arrival (dogs)</th>' +
      '<td>Vet-administered <strong>tapeworm treatment</strong> (Echinococcus multilocularis) documented on the health certificate</td>' +
      '<td>Accredited vet</td></tr>' +
      '<tr><th scope="row">&ge;3 days before departure</th>' +
      '<td>Confirm export date with the AQS; collect DLD export licence and health certificate</td>' +
      '<td>DLD</td></tr>' +
      '<tr><th scope="row">UK arrival</th>' +
      '<td>Enter via an <strong>approved route</strong>; present microchip, rabies, titer and travel documents at border control</td>' +
      '<td>UK Border Force / carrier</td></tr>' +
      '</tbody></table></div>' },
    { h: "What the UK requires from Thailand", html:
      "<p>For pets entering Great Britain from an unlisted country such as Thailand, " +
      "GOV.UK requires (among other steps):</p>" +
      "<ul>" +
      "<li><strong>ISO microchip</strong> implanted before rabies vaccination</li>" +
      "<li><strong>Valid rabies vaccination</strong></li>" +
      "<li><strong>Rabies blood test (titer)</strong> from an approved lab, with sample taken at least 30 days after vaccination</li>" +
      "<li><strong>Three-month wait</strong> from the date of that blood sample before entry</li>" +
      "<li>The correct <strong>pet travel document</strong> for entry from an unlisted country (not an EU pet passport alone)</li>" +
      "<li>For <strong>dogs</strong>, tapeworm treatment by a vet <strong>no less than 24 hours and no more than 5 days</strong> before arrival in Great Britain</li>" +
      "<li>Travel on an <strong>approved route and carrier</strong> into Great Britain</li>" +
      "</ul>" +
      "<p>Failure to meet these rules can mean <strong>quarantine up to four months</strong> or refusal of entry. Confirm every detail on " +
      "<a href=\"https://www.gov.uk/bring-pet-to-great-britain\" target=\"_blank\" rel=\"noopener nofollow\">GOV.UK</a> before you book.</p>" +
      '<div class="callout callout-tip"><div class="ch">Already did the titer test before Thailand?</div>' +
      "<p>If you had the blood test done in the UK (or another listed country) before " +
      "moving and kept rabies vaccination current without a gap, you may skip the " +
      "three-month wait &mdash; but only if the test and vaccines are still valid. " +
      "That is why British owners are told to do the test <em>before</em> leaving for Thailand.</p></div>" },
    { h: "The Thai export side (DLD)", html:
      "<p>Your pet must also clear Thailand&rsquo;s export process in parallel:</p>" +
      DLD_EXPORT_TABLE +
      "<p>Full walkthrough: " +
      '<a href="/take-pet-out-of-thailand/export-process.html">export process</a> ' +
      "and " +
      '<a href="/take-pet-out-of-thailand/export-permit-thailand-dld.html">export permit application</a>. ' +
      "Suvarnabhumi export desk: Mon&ndash;Fri 08:30&ndash;12:00 and 13:00&ndash;15:30 (Thai public holidays excepted).</p>" },
    { h: "Approved routes and booking", html:
      "<p>The UK restricts which airlines, ports and routes may carry pets into Great " +
      "Britain. Not every Bangkok&ndash;London connection qualifies. Confirm the " +
      "current approved-route list on GOV.UK and tell your airline you are importing " +
      "a pet from an unlisted country &mdash; cargo and accompanied travel have " +
      "different rules. A " +
      '<a href="/pet-relocation/">pet relocation agent</a> experienced in UK entry ' +
      "is often worth the fee for routing alone. See also " +
      '<a href="/bring-pet-to-thailand/airline-pet-policies.html">airline pet policies</a>.</p>' },
    { h: "Common mistakes on this corridor", html: EXPORT_FAILS +
      "<ul>" +
      "<li><strong>Booking a flight before the three-month wait ends</strong> &mdash; the titer clock cannot be rushed.</li>" +
      "<li><strong>Missing or mistimed tapeworm treatment</strong> for dogs &mdash; a common reason for refusal at the border.</li>" +
      "<li><strong>Assuming any EU airport connection works</strong> &mdash; check approved routes into Great Britain specifically.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["How long does it take to move a pet from Thailand to the UK?",
     "<p>If the rabies titer test still has to be done from Thailand, plan for at least three months after the blood sample, plus Thai export processing and flight booking. If a valid titer test is already in place from before you moved, it can be considerably faster — but confirm validity with GOV.UK.</p>"],
    ["Does my dog need a tapeworm treatment?",
     "<p>Yes. Dogs entering Great Britain need vet-administered tapeworm treatment documented on the certificate, given no less than 24 hours and no more than 5 days before arrival. Confirm the current window on GOV.UK.</p>"],
    ["Can my pet fly in cabin to the UK from Bangkok?",
     "<p>It depends on the airline and route, and whether the route is UK-approved for pet entry. Many UK-bound pets travel as checked baggage or cargo. Confirm with the airline and GOV.UK approved routes — do not assume cabin travel is available or compliant.</p>"],
    ["What if my titer test fails?",
     "<p>A failed or borderline result usually means revaccination and retesting, which restarts waiting periods. Use an approved laboratory and an experienced vet; build slack into your timeline.</p>"],
    ["Do I need a UK import permit as well as the Thai export permit?",
     "<p>Great Britain does not issue a separate import permit for personal pet dogs and cats in the same way Australia does, but you must meet every documentary and routing requirement on GOV.UK. The Thai export permit is Thailand&rsquo;s permission to leave; UK rules govern entry.</p>"]
  ]
}));

pages.push(exp({
  slug: "to-usa", crumb: "To the USA",
  title: "Export a Pet from Thailand to the USA (CDC Rules 2026) | PattayaPets",
  desc: "Thailand to USA pet export: CDC dog-import rules for high-rabies countries, " +
    "titer test, DLD export timeline, document checklist and planning months ahead.",
  h1: "Taking a pet from Thailand to the USA",
  lede: "The US Centers for Disease Control treats Thailand as a <strong>high-rabies-risk " +
    "country</strong>. For dogs especially, CDC paperwork and timing often matter " +
    "more than the Thai export desk.",
  officialExtra:
    "<p><strong>US sources:</strong> " +
    "<a href=\"https://www.cdc.gov/importation/bringing-an-animal-into-the-us/index.html\" " +
    "target=\"_blank\" rel=\"noopener nofollow\">CDC animal import</a>; " +
    "<a href=\"https://www.aphis.usda.gov/pet-travel\" target=\"_blank\" rel=\"noopener nofollow\">USDA APHIS pet travel</a>. " +
    "Mirror import guide: " +
    "<a href=\"/bring-pet-to-thailand/from-usa.html\">bringing a pet from the USA</a>.</p>",
  sections: [
    { h: "The timeline — dogs from a high-rabies country", html:
      "<p>CDC rules for dogs changed several times from 2024 onward. The table below " +
      "is orientation &mdash; your dog&rsquo;s vaccination history and US entry airport " +
      "determine the exact path. Read the CDC site directly before acting.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">2&ndash;3 months before (typical)</th>' +
      '<td>Confirm ISO microchip; ensure rabies vaccination is current; arrange <strong>rabies titer test</strong> if required for your CDC pathway</td>' +
      '<td>Thai vet + approved lab</td></tr>' +
      '<tr><th scope="row">Weeks before travel</th>' +
      '<td>Complete CDC dog import documentation online; note any required US arrival airports</td>' +
      '<td>CDC</td></tr>' +
      '<tr><th scope="row">&ge;15 days before export</th>' +
      '<td>Apply for Thai <a href="/take-pet-out-of-thailand/export-permit-thailand-dld.html">DLD export permit</a> (form 1/1) with CDC/USDA requirements attached</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">Final week</th>' +
      '<td>AQS inspection; DLD export licence and health certificate issued; confirm airline IATA crate rules</td>' +
      '<td>DLD + airline</td></tr>' +
      '<tr><th scope="row">&ge;3 days before departure</th>' +
      '<td>Confirm export date with the AQS by email</td>' +
      '<td>DLD</td></tr>' +
      '<tr><th scope="row">US arrival</th>' +
      '<td>Present CDC documentation, health papers and microchip at designated inspection if required</td>' +
      '<td>CDC / port veterinarian</td></tr>' +
      '</tbody></table></div>' },
    { h: "CDC rules for dogs — what Thailand triggers", html:
      "<p>Dogs entering the United States from Thailand face the CDC&rsquo;s " +
      "high-rabies-country requirements. Depending on your dog&rsquo;s age, " +
      "microchip, vaccination history and whether it was vaccinated in the US " +
      "before travel, steps commonly include:</p>" +
      "<ul>" +
      "<li><strong>ISO-compatible microchip</strong> recorded before or with rabies vaccination</li>" +
      "<li><strong>Minimum age</strong> rules (young puppies may not import)</li>" +
      "<li><strong>Rabies vaccination</strong> tied to the microchip</li>" +
      "<li><strong>Rabies titer test</strong> from an approved laboratory, for many dogs coming from high-rabies countries</li>" +
      "<li><strong>CDC Dog Import Form</strong> (or equivalent current CDC paperwork) submitted before travel</li>" +
      "<li>Arrival through <strong>designated airports</strong> for some import categories</li>" +
      "</ul>" +
      "<p>These rules are detailed and have been updated repeatedly. Do not rely on " +
      "a forum post or an old airline PDF &mdash; read " +
      "<a href=\"https://www.cdc.gov/importation/bringing-an-animal-into-the-us/index.html\" " +
      "target=\"_blank\" rel=\"noopener nofollow\">CDC requirements</a> and " +
      "<a href=\"https://www.aphis.usda.gov/pet-travel\" target=\"_blank\" rel=\"noopener nofollow\">USDA APHIS pet travel</a> " +
      "for cats and any state-level rules at your US destination.</p>" },
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
      "<li><strong>Non-ISO microchip</strong> &mdash; common on older US-born dogs; may require re-chip and re-vaccination.</li>" +
      "<li><strong>Wrong US arrival airport</strong> &mdash; some CDC categories restrict where dogs may land.</li>" +
      "<li><strong>Submitting CDC paperwork on the day of travel</strong> &mdash; many forms must be filed in advance.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Does my dog need a rabies titer test to enter the USA from Thailand?",
     "<p>Because Thailand is a high-rabies-risk country under CDC rules, a rabies titer test from an approved lab is commonly required for dogs — but the exact rule depends on vaccination history and the current CDC policy. Verify your dog's specific case on the CDC website.</p>"],
    ["Where do I check the current US rules?",
     "<p>The CDC governs disease-control import rules for dogs; USDA APHIS covers animal-health certification. Check both directly, plus your destination US state's requirements, before you book.</p>"],
    ["Can I use the same health certificate that got my dog into Thailand?",
     "<p>No. Export from Thailand requires a fresh DLD export health certificate and export permit. US entry requires current CDC-compliant documentation for the inbound journey.</p>"],
    ["Should I use a relocation agent for the USA?",
     "<p>Many owners manage simpler cat moves themselves. For dogs from Thailand under current CDC rules, an agent experienced in US entry often prevents expensive rebooking or denial at arrival.</p>"],
    ["How does this relate to bringing a dog TO Thailand from the US?",
     "<p>Different direction, different rules. See our <a href=\"/bring-pet-to-thailand/from-usa.html\">USA-to-Thailand import guide</a> for the inbound path; this page is Thailand to USA only.</p>"]
  ]
}));

pages.push(exp({
  slug: "to-eu", crumb: "To the EU",
  title: "Export a Pet from Thailand to the EU (Pet Passport & DLD 2026) | PattayaPets",
  desc: "Bringing a pet from Thailand to the European Union: the rabies titer " +
    "test, the three-month wait and the EU entry health certificate.",
  h1: "Taking a pet from Thailand to the EU",
  lede: "For the EU, Thailand is a non-listed third country &mdash; so the rabies " +
    "titer test and its three-month wait drive your timeline.",
  sections: [
    { h: "The titer test and the wait", html:
      "<p>To bring a pet into the EU from Thailand, your pet needs a current " +
      "rabies vaccination and a <strong>rabies titer test</strong> showing an " +
      "adequate antibody level, with the blood sample taken at least 30 days " +
      "after vaccination. You then wait <strong>three months from the blood " +
      "sample date</strong> before the pet may enter the EU.</p>" +
      "<p>As everywhere, doing the titer test early &mdash; before leaving, if " +
      "possible &mdash; is what saves you that wait.</p>" },
    { h: "The EU entry health certificate", html:
      "<p>Your pet needs an EU animal health certificate completed for entry " +
      "from a third country and endorsed by the Thai authorities. The microchip, " +
      "vaccination dates and titer result must all line up on it. Rules can " +
      "differ slightly by the EU country you enter through &mdash; we have " +
      "dedicated pages for " +
      "<a href=\"/take-pet-out-of-thailand/to-germany.html\">Germany</a> and " +
      "<a href=\"/take-pet-out-of-thailand/to-france.html\">France</a>, and you " +
      "should confirm with that country&rsquo;s authority.</p>" },
    { h: "The Thai side and your timeline", html: THAI_SIDE }
  ],
  faqs: [
    ["Is the three-month wait avoidable?",
     "<p>Only if a valid rabies titer test is already in place and has remained valid (with the rabies vaccination kept current). That is why owners are advised to do the test before leaving for Thailand.</p>"],
    ["Does the EU pet passport work for this?",
     "<p>The EU pet passport is for movement within the EU and for pets resident there. Coming from Thailand you need a third-country entry health certificate; check the rules for your specific EU entry country.</p>"]
  ]
}));

pages.push(exp({
  slug: "to-australia", crumb: "To Australia",
  title: "Export a Pet from Thailand to Australia (DAFF & DLD 2026) | PattayaPets",
  desc: "Thailand to Australia pet export: why direct import fails, approved-country " +
    "pathway, DAFF import permit, mandatory quarantine and DLD export checklist.",
  h1: "Taking a pet from Thailand to Australia",
  lede: "Be direct with yourself: <strong>you cannot fly a pet directly from Thailand " +
    "to Australia</strong> under normal DAFF rules. Thailand is not an approved " +
    "country. This corridor is a multi-stage project measured in months and " +
    "thousands of dollars.",
  officialExtra:
    "<p><strong>Australian sources:</strong> " +
    "<a href=\"https://www.agriculture.gov.au/biosecurity-trade/cats-dogs\" " +
    "target=\"_blank\" rel=\"noopener nofollow\">importing cats and dogs to Australia</a>. " +
    "Mirror import guide: " +
    "<a href=\"/bring-pet-to-thailand/from-australia.html\">bringing a pet from Australia</a>.</p>",
  sections: [
    { h: "Why direct import does not work", html:
      "<p>Australia only allows dog and cat imports from countries on its approved " +
      "list (grouped by rabies risk). <strong>Thailand is not an approved country</strong> " +
      "for direct import. A pet that has lived in Thailand must typically:</p>" +
      "<ol>" +
      "<li>Complete veterinary steps including a <strong>rabies titer test</strong></li>" +
      "<li>Spend a qualifying period in an <strong>approved country</strong> (the pathway depends on DAFF&rsquo;s current country groups)</li>" +
      "<li>Obtain an <strong>Australian import permit</strong> before export from that approved country</li>" +
      "<li>Enter Australia and serve <strong>mandatory post-entry quarantine</strong> at the government facility in Mickleham, Victoria</li>" +
      "</ol>" +
      "<p>Owners commonly report <strong>six months to a year or more</strong> of " +
      "planning. This is not a last-minute relocation.</p>" },
    { h: "The realistic timeline (high level)", html:
      "<p>Every case differs by approved-country pathway, but the shape is similar:</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">Phase</th><th scope="col">What happens</th><th scope="col">Who</th></tr></thead><tbody>' +
      '<tr><th scope="row">Planning (months 1&ndash;2)</th>' +
      '<td>Contact DAFF; engage specialist <a href="/pet-relocation/">relocation agent</a>; choose approved-country pathway; confirm whether pet can wait in Thailand or must move interim</td>' +
      '<td>You + agent + DAFF</td></tr>' +
      '<tr><th scope="row">Veterinary prep</th>' +
      '<td>Rabies vaccination, titer test, other DAFF-specified tests and treatments on a fixed schedule</td>' +
      '<td>DAFF-approved vet</td></tr>' +
      '<tr><th scope="row">Approved-country residency</th>' +
      '<td>Pet resides in (or transits through) an approved country for the period DAFF requires before Australian entry</td>' +
      '<td>DAFF conditions</td></tr>' +
      '<tr><th scope="row">Import permit</th>' +
      '<td>Apply for Australian import permit with full veterinary history</td>' +
      '<td>DAFF</td></tr>' +
      '<tr><th scope="row">Export from interim country</th>' +
      '<td>That country&rsquo;s export process + airline cargo booking to Australia</td>' +
      '<td>Foreign authority + airline</td></tr>' +
      '<tr><th scope="row">Thailand exit (if pet is still here early on)</th>' +
      '<td><a href="/take-pet-out-of-thailand/export-permit-thailand-dld.html">DLD export permit</a> to reach the approved country &mdash; Thailand is only the first leg</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">Arrival in Australia</th>' +
      '<td>Mandatory quarantine at Mickleham; release only when DAFF clears the pet</td>' +
      '<td>DAFF quarantine facility</td></tr>' +
      '</tbody></table></div>' +
      '<div class="callout callout-emergency"><div class="ch">Australia → Thailand was the easy bit</div>' +
      "<p>If you imported from Australia recently, do not assume symmetry. Read " +
      '<a href="/bring-pet-to-thailand/from-australia.html">Australia to Thailand</a> ' +
      "for the outbound direction you already managed &mdash; then accept that the return is an entirely different process.</p></div>" },
    { h: "What DAFF import typically requires", html:
      "<p>Confirm the current DAFF checklist directly. Commonly includes:</p>" +
      "<ul>" +
      "<li><strong>Import permit</strong> issued before export to Australia</li>" +
      "<li><strong>ISO microchip</strong> and rabies vaccination history</li>" +
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
      "<li><strong>Starting when the work contract ends</strong> &mdash; six months&rsquo; lead time is optimistic, not conservative.</li>" +
      "<li><strong>Skipping the relocation agent</strong> &mdash; on this corridor, specialist help is not a luxury.</li>" +
      "<li><strong>Underestimating quarantine cost and booking lead time</strong> &mdash; Mickleham slots fill up.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Can I fly my pet directly from Thailand to Australia?",
     "<p>Generally no. Thailand is not an approved country for direct dog and cat import to Australia. The usual route requires veterinary preparation, time in an approved country, an Australian import permit and mandatory quarantine on arrival.</p>"],
    ["How early should I start?",
     "<p>As early as possible — before you even move to Thailand if return is conceivable. Six months is a common minimum; many pathways take longer.</p>"],
    ["How much does Thailand-to-Australia cost?",
     "<p>Often several thousand US dollars or more: interim-country residency, multiple flights, veterinary tests, DAFF fees, quarantine at Mickleham and agent fees. Get a written quote from a specialist agent rather than guessing.</p>"],
    ["Does my pet need a Thai export permit if Australia is the final goal?",
     "<p>If the pet leaves Thailand en route to an approved interim country, yes — the DLD export permit and health certificate are required for that first leg. The Australia import permit covers entry from the approved country, not from Thailand directly.</p>"],
    ["What if I cannot complete the return pathway?",
     "<p>Some owners rehome their pet in Thailand or relocate the pet to a third country where they can stay long-term. Decide early — last-minute rehoming is distressing for everyone.</p>"]
  ]
}));

module.exports = pages;
