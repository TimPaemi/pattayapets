"use strict";
/* More destination guides for the "Taking a pet out of Thailand" cluster.
   Full parity with the import cluster's country pages. */

const { article } = require("../guidekit.js");
const { exportCountryRelated, attachImportMirrorLink } = require("../data/country-pairs.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const CLUSTER = { name: "Taking a pet out of Thailand", path: "/take-pet-out-of-thailand/" };
const SUB = [GUIDES, CLUSTER];

const VERIFY =
  "This guide was last reviewed on 31 May 2026. Export rules &mdash; Thai DLD " +
  "procedures, destination-country requirements and airline policies &mdash; change " +
  "without notice. Use this as orientation, then confirm every current requirement " +
  "with the DLD and the destination country's authority before booking.";

const OFFICIAL =
  "<p><strong>Official sources to verify against:</strong> " +
  "<a href=\"https://aqi.dld.go.th/webnew/index.php/th/service-menu-2/office-service-menu/72-research/kmresearch/432-exportation-of-live-animals\" " +
  "target=\"_blank\" rel=\"noopener nofollow\">DLD export of live animals</a>; " +
  "Suvarnabhumi AQS export: " +
  "<a href=\"mailto:qsap_bkk_export@dld.go.th\">qsap_bkk_export@dld.go.th</a>; " +
  "<a href=\"https://www.gov.uk/bring-pet-to-great-britain\" target=\"_blank\" rel=\"noopener nofollow\">" +
  "UK pet travel</a>; " +
  "<a href=\"https://www.cdc.gov/importation/bringing-an-animal-into-the-us/index.html\" " +
  "target=\"_blank\" rel=\"noopener nofollow\">CDC animal import (USA)</a>; " +
  "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
  "rel=\"noopener nofollow\">EU pet movement</a>; " +
  "<a href=\"https://www.maff.go.jp/aqs/english/\" target=\"_blank\" rel=\"noopener nofollow\">" +
  "Japan MAFF Animal Quarantine</a>; " +
  "<a href=\"https://avs.nparks.gov.sg/pets/importing-exporting-a-pet/import/dogs-and-cats/\" " +
  "target=\"_blank\" rel=\"noopener nofollow\">Singapore AVS</a>; " +
  "<a href=\"https://moccae.gov.ae/en/services/import-permit-pets\" " +
  "target=\"_blank\" rel=\"noopener nofollow\">UAE MOCCAE pet import</a>; " +
  "<a href=\"https://www.agriculture.gov.au/biosecurity-trade/cats-dogs\" target=\"_blank\" " +
  "rel=\"noopener nofollow\">Australia DAFF</a>; " +
  "<a href=\"https://www.mpi.govt.nz/import/bringing-pets-to-nz/\" target=\"_blank\" " +
  "rel=\"noopener nofollow\">New Zealand MPI</a>; " +
  "<a href=\"https://aqcsindia.gov.in/Home/ImportExportPets\" target=\"_blank\" " +
  "rel=\"noopener nofollow\">India AQCS</a>; " +
  "<a href=\"https://www.bai.gov.ph/Stakeholders/PetImport\" target=\"_blank\" " +
  "rel=\"noopener nofollow\">Philippines BAI</a>; " +
  "<a href=\"https://english.beijing.gov.cn/latest/lawsandpolicies/202104/t20210407_2346645.html\" " +
  "target=\"_blank\" rel=\"noopener nofollow\">China GACC pet entry</a>; " +
  "<a href=\"https://www.gov.za/services/import/import-animals-and-animal-products\" " +
  "target=\"_blank\" rel=\"noopener nofollow\">South Africa DALRRD import</a>; " +
  "<a href=\"https://inspection.canada.ca/en/importing-food-plants-or-animals/pets\" " +
  "target=\"_blank\" rel=\"noopener nofollow\">Canada CFIA</a>; " +
  "<a href=\"https://www.blv.admin.ch/blv/en/home/tiere/reisen-mit-heimtieren.html\" " +
  "target=\"_blank\" rel=\"noopener nofollow\">Switzerland FSVO</a>.</p>";

const RELATED = [
  { name: "The export process", path: "/take-pet-out-of-thailand/export-process.html", desc: "The Thai DLD side of leaving." },
  { name: "DLD export permit", path: "/take-pet-out-of-thailand/export-permit-thailand-dld.html", desc: "The permit you apply for before departure." },
  { name: "What export costs", path: "/take-pet-out-of-thailand/cost-to-export-a-pet-from-thailand.html", desc: "Budgeting the Thai side and the flight." },
  { name: "Bringing a pet to Thailand", path: "/bring-pet-to-thailand/", desc: "The reverse journey, for context." },
  { name: "Rabies titer test", path: "/bring-pet-to-thailand/rabies-vaccination-titer-test.html", desc: "Why timing it early matters so much." },
  { name: "Pet relocation agents", path: "/pet-relocation/", desc: "Specialists who manage export." }
];

function expRelated(slug) {
  return exportCountryRelated(slug, RELATED);
}

const EU_ENTRY =
  "<p>For the EU, Thailand counts as a <strong>non-listed third country</strong>. " +
  "Entry requires an ISO microchip, a current rabies vaccination, a " +
  "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">rabies " +
  "titer test</a> &mdash; the blood sample taken at least 30 days after vaccination, " +
  "from an EU-approved laboratory &mdash; and then a <strong>three-month wait</strong> " +
  "from the sample date before the pet may travel. An EU third-country animal health " +
  "certificate completes the paperwork.</p>" +
  "<p>For the shared EU rules that apply to every member state, see our " +
  "<a href=\"/take-pet-out-of-thailand/to-eu.html\">exporting a pet to the EU</a> guide.</p>";

const THAI_SIDE =
  "<p>All of this sits on top of the Thai " +
  "<a href=\"/take-pet-out-of-thailand/export-process.html\">export process</a> " +
  "&mdash; the DLD health certificate and export permit &mdash; which your pet must " +
  "clear on the way out. The two sets of paperwork have to agree.</p>";

function exp(o) {
  var sections = attachImportMirrorLink((o.sections || []).slice(), o.slug);
  sections.push({ h: "Official sources", html: (o.officialExtra || "") + OFFICIAL });
  return article({
    path: "/take-pet-out-of-thailand/" + o.slug + ".html",
    title: o.title, desc: o.desc, crumb: o.crumb, breadcrumbs: SUB,
    eyebrow: "Taking a pet out of Thailand &middot; By destination",
    h1: o.h1, lede: o.lede, verify: VERIFY,
    updated: o.updated || "2026-05-31",
    sections: sections, faqs: o.faqs, related: o.related || expRelated(o.slug)
  });
}

const DLD_EXPORT_TABLE =
  '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
  '<th scope="col">Thai-side document</th><th scope="col">Notes</th></tr></thead><tbody>' +
  '<tr><th scope="row">Export application (form 1/1)</th><td>Apply at least <strong>15 days</strong> before export to the AQS at your departure airport.</td></tr>' +
  '<tr><th scope="row">Destination import rules</th><td>Attach the destination authority&rsquo;s import requirements (NOC, import licence, SPSIC, etc.) so the Thai health certificate matches.</td></tr>' +
  '<tr><th scope="row">Microchip &amp; vaccinations</th><td>ISO chip and current rabies vaccination; many destinations also require a <a href="/bring-pet-to-thailand/rabies-vaccination-titer-test.html">rabies titer test</a>.</td></tr>' +
  '<tr><th scope="row">DLD export licence &amp; health certificate</th><td>Issued after AQS inspection if paperwork complies.</td></tr>' +
  '</tbody></table></div>';

const EXPORT_FAILS =
  "<ul>" +
  "<li><strong>Starting with Thailand only</strong> &mdash; destination import permits and tests are usually the long pole.</li>" +
  "<li><strong>Expired vaccinations</strong> &mdash; a lapsed rabies shot can void import clearance.</li>" +
  "<li><strong>Microchip mismatch</strong> across Thai export papers and destination import forms.</li>" +
  "<li><strong>Last-minute DLD export</strong> &mdash; applying inside the 15-day window when tests are still pending.</li>" +
  "</ul>";

const EU_EXPORT_FAILS_EXTRA =
  "<ul>" +
  "<li><strong>Assuming the EU pet passport alone works</strong> from Thailand &mdash; you need a third-country entry certificate.</li>" +
  "<li><strong>Entering via a non-designated point</strong> &mdash; each country lists approved entry points for pets from third countries.</li>" +
  "</ul>";

function euExportTimeline(routingIntro) {
  return "<p>" + routingIntro + "</p>" +
    '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
    '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
    '<tr><th scope="row">Month 1 (if no valid titer yet)</th>' +
    '<td>Rabies vaccination current; <strong>rabies titer test</strong> blood sample &ge;30 days after vaccination; approved lab</td>' +
    '<td>Thai vet + EU-approved lab</td></tr>' +
    '<tr><th scope="row">Months 1&ndash;3</th>' +
    '<td><strong>Wait three months</strong> from the blood sample date (non-listed third-country rule)</td>' +
    '<td>EU Regulation 576/2013 framework</td></tr>' +
    '<tr><th scope="row">6&ndash;8 weeks before flight</th>' +
    '<td>Book pet on a route entering via a <strong>designated traveller point of entry</strong></td>' +
    '<td>Airline / agent</td></tr>' +
    '<tr><th scope="row">&ge;15 days before export</th>' +
    '<td>Apply for Thai <a href="/take-pet-out-of-thailand/export-permit-thailand-dld.html">DLD export permit</a> (form 1/1) with titer result and destination entry requirements attached</td>' +
    '<td>DLD AQS</td></tr>' +
    '<tr><th scope="row">Within 10 days of entry</th>' +
    '<td><strong>EU animal health certificate</strong> for third-country entry completed and endorsed by Thai competent authority</td>' +
    '<td>DLD + official vet</td></tr>' +
    '<tr><th scope="row">Destination arrival</th>' +
    '<td>Present documents at designated entry point; customs / veterinary identity check</td>' +
    '<td>Border authority</td></tr>' +
    '</tbody></table></div>' +
    "<p>Shared EU rules: " +
    '<a href="/take-pet-out-of-thailand/to-eu.html">exporting a pet to the EU</a>.</p>';
}

function euExportSections(o) {
  return [
    { h: o.timelineHeading || "The timeline — work backwards from your flight", html: euExportTimeline(o.routingIntro) },
    { h: o.reqHeading, html: o.reqHtml },
    { h: "The Thai export side (DLD)", html:
      "<p>Parallel Thai requirements:</p>" + DLD_EXPORT_TABLE +
      "<p>See " +
      '<a href="/take-pet-out-of-thailand/export-process.html">export process</a>.</p>' },
    { h: "Common mistakes on this corridor", html: EXPORT_FAILS + EU_EXPORT_FAILS_EXTRA + (o.extraFails || "") }
  ];
}

const EU_ENTRY_REQ_LIST =
  "<p>Thailand is a <strong>non-listed third country</strong> under EU pet-travel rules. " +
  "Entry typically requires:</p>" +
  "<ul>" +
  "<li>ISO microchip before rabies vaccination</li>" +
  "<li>Valid rabies vaccination</li>" +
  "<li><strong>Rabies titer test</strong> from an EU-approved laboratory, blood drawn at least 30 days after vaccination</li>" +
  "<li><strong>Three-month wait</strong> from the blood sample date</li>" +
  "<li><strong>EU animal health certificate</strong> for non-commercial entry from a third country, endorsed by the exporting country&rsquo;s competent authority</li>" +
  "<li>Entry through a <strong>designated point of entry</strong></li>" +
  "</ul>";

const EU_TITER_TIP =
  '<div class="callout callout-tip"><div class="ch">Did the titer test before Thailand?</div>' +
  "<p>If you had the blood test done in Europe before moving and kept rabies vaccination " +
  "current, you may avoid the three-month wait &mdash; verify validity before you fly.</p></div>";

const pages = [];

/* ---------------- GERMANY ---------------- */
pages.push(exp({
  slug: "to-germany", crumb: "To Germany",
  title: "Export a Pet from Thailand to Germany (EU Titer & DLD 2026) | PattayaPets",
  desc: "Thailand to Germany pet export: EU titer test, three-month wait, entry " +
    "certificate, designated entry points and DLD export timeline.",
  h1: "Taking a pet from Thailand to Germany",
  lede: "Germany follows standard EU rules for pets from non-listed third countries. " +
    "Thailand triggers the <strong>rabies titer test</strong> and its " +
    "<strong>three-month wait</strong> &mdash; plan in quarters, not weeks.",
  officialExtra:
    "<p><strong>German / EU sources:</strong> " +
    "<a href=\"https://www.bmleh.de/EN/topics/animals/pets-and-zoo-animals/pets-entry-regulation.html\" " +
    "target=\"_blank\" rel=\"noopener nofollow\">BMELH entry regulation</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener nofollow\">EU pet movement</a>. " +
    "Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-germany.html\">bringing a pet from Germany</a>.</p>",
  sections: [
    { h: "The timeline — work backwards from Frankfurt or Munich", html:
      "<p>Direct Bangkok&ndash;Frankfurt and Bangkok&ndash;Munich routes exist, but the " +
      "EU veterinary timeline is usually slower than booking a seat.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">Month 1 (if no valid titer yet)</th>' +
      '<td>Rabies vaccination current; <strong>rabies titer test</strong> blood sample &ge;30 days after vaccination; approved lab</td>' +
      '<td>Thai vet + EU-approved lab</td></tr>' +
      '<tr><th scope="row">Months 1&ndash;3</th>' +
      '<td><strong>Wait three months</strong> from the blood sample date (non-listed third-country rule)</td>' +
      '<td>EU Regulation 576/2013 framework</td></tr>' +
      '<tr><th scope="row">6&ndash;8 weeks before flight</th>' +
      '<td>Book pet on a route entering Germany via a <strong>designated traveller point of entry</strong></td>' +
      '<td>Airline / agent</td></tr>' +
      '<tr><th scope="row">&ge;15 days before export</th>' +
      '<td>Apply for Thai <a href="/take-pet-out-of-thailand/export-permit-thailand-dld.html">DLD export permit</a> (form 1/1) with titer result and EU entry requirements attached</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">Within 10 days of EU entry</th>' +
      '<td><strong>EU animal health certificate</strong> for third-country entry completed and endorsed by Thai competent authority; valid for entry within the EU window (confirm current validity on EU guidance)</td>' +
      '<td>DLD + official vet</td></tr>' +
      '<tr><th scope="row">Germany arrival</th>' +
      '<td>Present documents at designated entry point; customs/ veterinary identity check</td>' +
      '<td>German border authority</td></tr>' +
      '</tbody></table></div>' +
      "<p>Shared EU rules: " +
      '<a href="/take-pet-out-of-thailand/to-eu.html">exporting a pet to the EU</a>.</p>' },
    { h: "What Germany / the EU requires from Thailand", html:
      "<p>Thailand is a <strong>non-listed third country</strong> under EU pet-travel rules. " +
      "Entry typically requires:</p>" +
      "<ul>" +
      "<li>ISO microchip before rabies vaccination</li>" +
      "<li>Valid rabies vaccination</li>" +
      "<li><strong>Rabies titer test</strong> from an EU-approved laboratory, blood drawn at least 30 days after vaccination</li>" +
      "<li><strong>Three-month wait</strong> from the blood sample date</li>" +
      "<li><strong>EU animal health certificate</strong> for non-commercial entry from a third country, endorsed by the exporting country&rsquo;s competent authority</li>" +
      "<li>Entry through a <strong>designated point of entry</strong> listed for Germany</li>" +
      "</ul>" +
      "<p>Finland, Ireland, Malta and parts of the UK keep extra tapeworm rules for dogs " +
      "&mdash; Germany itself does not, but confirm if you connect through those countries.</p>" +
      '<div class="callout callout-tip"><div class="ch">Did the titer test before Thailand?</div>' +
      "<p>If you had the blood test done in Germany (or another EU country) before moving " +
      "and kept rabies vaccination current, you may avoid the three-month wait &mdash; " +
      "verify validity before you fly.</p></div>" },
    { h: "The Thai export side (DLD)", html:
      "<p>Parallel Thai requirements:</p>" + DLD_EXPORT_TABLE +
      "<p>See " +
      '<a href="/take-pet-out-of-thailand/export-process.html">export process</a>.</p>' },
    { h: "Common mistakes on this corridor", html: EXPORT_FAILS +
      "<ul>" +
      "<li><strong>Assuming the EU pet passport alone works</strong> from Thailand &mdash; you need a third-country entry certificate.</li>" +
      "<li><strong>Entering via a non-designated airport</strong> &mdash; Germany lists approved entry points for pets from third countries.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Can my pet skip the three-month wait into Germany?",
     "<p>Only if a valid rabies titer test is already in place and rabies vaccination has been kept current without a gap — commonly because you did the test before leaving Germany for Thailand.</p>"],
    ["Is the EU pet passport enough to enter Germany from Thailand?",
     "<p>No. Coming from Thailand you need an EU third-country animal health certificate endorsed on the Thai side, not just a pet passport issued years ago in Germany.</p>"],
    ["Which German airports accept pets from third countries?",
     "<p>Pets from third countries must enter via designated traveller points of entry. Frankfurt and Munich are common for Bangkok routes — confirm the current BMELH list before booking.</p>"],
    ["Do I need a separate German import permit?",
     "<p>Personal non-commercial pet moves typically use the EU health certificate framework rather than a separate German import permit, but every document and timing rule must be met. Confirm with BMELH if your case is non-standard.</p>"],
    ["How does this differ from exporting to the EU hub page?",
     "<p>The veterinary rules are the same EU-wide; this page adds Germany-specific entry-point and routing notes. See also <a href=\"/take-pet-out-of-thailand/to-eu.html\">export to the EU</a>.</p>"]
  ]
}));

/* ---------------- SWEDEN ---------------- */
pages.push(exp({
  slug: "to-sweden", crumb: "To Sweden",
  title: "Export a Pet from Thailand to Sweden (EU Titer & DLD 2026) | PattayaPets",
  desc: "Thailand to Sweden pet export: EU titer test, three-month wait, entry " +
    "certificate, Jordbruksverket rules and DLD export timeline.",
  h1: "Taking a pet from Thailand to Sweden",
  lede: "Many of Pattaya's Swedish residents eventually head home with a pet. " +
    "Sweden applies the standard EU entry rules &mdash; plan in quarters, not weeks.",
  officialExtra:
    "<p><strong>Swedish / EU sources:</strong> " +
    "<a href=\"https://jordbruksverket.se/en/animals/keeping-animals/pets/travelling-with-pets\" " +
    "target=\"_blank\" rel=\"noopener nofollow\">Jordbruksverket pet travel</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener nofollow\">EU pet movement</a>. " +
    "Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-sweden.html\">bringing a pet from Sweden</a>.</p>",
  sections: euExportSections({
    routingIntro: "The EU veterinary timeline is usually slower than booking a seat on a Stockholm route.",
    reqHeading: "What Sweden / the EU requires from Thailand",
    reqHtml: EU_ENTRY_REQ_LIST +
      "<p>The Swedish Board of Agriculture (Jordbruksverket) oversees pet entry. " +
      "Sweden does not apply the special tapeworm-treatment rule that a few " +
      "countries keep &mdash; but always reconfirm the current requirements with " +
      "Jordbruksverket before you book.</p>" + EU_TITER_TIP
  }),
  faqs: [
    ["How long does moving a pet from Thailand to Sweden take?",
     "<p>Plan for several months if the titer test still has to be done &mdash; the three-month wait after the blood sample is unavoidable. A valid existing titer test makes it much faster.</p>"],
    ["Does Sweden require tapeworm treatment?",
     "<p>Sweden does not currently apply the special tapeworm-treatment rule. Confirm the current position with Jordbruksverket, as rules change.</p>"],
    ["Is the EU pet passport enough to enter Sweden from Thailand?",
     "<p>No. Coming from Thailand you need an EU third-country entry health certificate endorsed on the Thai side, not just a pet passport issued years ago in Sweden.</p>"],
    ["Can my pet skip the three-month wait into Sweden?",
     "<p>Only if a valid rabies titer test is already in place and rabies vaccination has been kept current without a gap.</p>"],
    ["How does this differ from the EU hub page?",
     "<p>The veterinary rules are the same EU-wide; this page adds Sweden-specific authority notes. See also <a href=\"/take-pet-out-of-thailand/to-eu.html\">export to the EU</a>.</p>"]
  ]
}));

/* ---------------- NORWAY ---------------- */
pages.push(exp({
  slug: "to-norway", crumb: "To Norway",
  title: "Export a Pet from Thailand to Norway (EU-style Titer & DLD 2026) | PattayaPets",
  desc: "Thailand to Norway pet export: rabies titer test, three-month wait, Mattilsynet " +
    "entry rules, tapeworm treatment for dogs and DLD export timeline.",
  h1: "Taking a pet from Thailand to Norway",
  lede: "Norway is not in the EU, but it applies the EU pet-travel rules &mdash; " +
    "with one extra requirement for dogs.",
  officialExtra:
    "<p><strong>Norwegian sources:</strong> " +
    "<a href=\"https://www.mattilsynet.no/english/animal/import-and-export-of-animals/personal-import-of-animals-into-norway.2210\" " +
    "target=\"_blank\" rel=\"noopener nofollow\">Mattilsynet pet import</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener nofollow\">EU pet movement</a> (Norway applies EU-aligned rules). " +
    "Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-norway.html\">bringing a pet from Norway</a>.</p>",
  sections: euExportSections({
    routingIntro: "Norway follows EU-style third-country rules; the titer test and three-month wait are usually the long pole.",
    reqHeading: "What Norway requires from Thailand",
    reqHtml: EU_ENTRY_REQ_LIST +
      "<p>The Norwegian Food Safety Authority (Mattilsynet) oversees pet entry. " +
      "Norway also keeps the <strong>tapeworm (Echinococcus) treatment rule</strong>: " +
      "a dog entering Norway must be treated against tapeworm by a vet within a set " +
      "window before arrival (commonly 24 to 120 hours).</p>" + EU_TITER_TIP,
    extraFails: "<ul><li><strong>Missing tapeworm treatment for dogs</strong> &mdash; confirm the current window with Mattilsynet before you fly.</li></ul>"
  }),
  faqs: [
    ["Does my dog need tapeworm treatment to enter Norway?",
     "<p>Yes &mdash; Norway requires a vet-administered tapeworm treatment for dogs within a set window before arrival. Confirm the current window with Mattilsynet.</p>"],
    ["Does Norway being outside the EU change the process?",
     "<p>Not greatly. Norway applies the EU pet-travel rules, so the titer test, the three-month wait and the health certificate work as for an EU country, plus the tapeworm step for dogs.</p>"],
    ["Is the EU pet passport enough from Thailand?",
     "<p>No. You need a third-country entry health certificate endorsed on the Thai side.</p>"],
    ["Can my pet skip the three-month wait?",
     "<p>Only with a valid pre-existing rabies titer test and current rabies vaccination.</p>"],
    ["How early should I start?",
     "<p>Several months ahead if the titer test still has to be done from Pattaya.</p>"]
  ]
}));

/* ---------------- DENMARK ---------------- */
pages.push(exp({
  slug: "to-denmark", crumb: "To Denmark",
  title: "Export a Pet from Thailand to Denmark (EU Titer & DLD 2026) | PattayaPets",
  desc: "Thailand to Denmark pet export: EU titer test, three-month wait, entry " +
    "certificate, Danish authority rules and DLD export timeline.",
  h1: "Taking a pet from Thailand to Denmark",
  lede: "Denmark applies the standard EU entry rules for a pet arriving from " +
    "Thailand, so plan the timeline around the titer test.",
  officialExtra:
    "<p><strong>Danish / EU sources:</strong> " +
    "<a href=\"https://foedevarestyrelsen.dk/english\" target=\"_blank\" " +
    "rel=\"noopener nofollow\">Danish Veterinary and Food Administration</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener nofollow\">EU pet movement</a>. " +
    "Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-denmark.html\">bringing a pet from Denmark</a>.</p>",
  sections: euExportSections({
    routingIntro: "The EU veterinary timeline is usually slower than booking a Copenhagen connection.",
    reqHeading: "What Denmark / the EU requires from Thailand",
    reqHtml: EU_ENTRY_REQ_LIST +
      "<p>The Danish Veterinary and Food Administration oversees pet entry. " +
      "Denmark does not apply the special tapeworm-treatment rule, but confirm the " +
      "current requirements with the Danish authorities before you book.</p>" + EU_TITER_TIP
  }),
  faqs: [
    ["Is the three-month wait avoidable for Denmark?",
     "<p>Only if a valid rabies titer test is already in place, with the rabies vaccination kept current. Otherwise the three-month wait from the blood-sample date is unavoidable.</p>"],
    ["Who should I check the current rules with?",
     "<p>The Danish Veterinary and Food Administration for the destination side, and the Thai DLD for the export side. Check both before booking, as rules change.</p>"],
    ["Is the EU pet passport enough from Thailand?",
     "<p>No. You need a third-country entry health certificate endorsed on the Thai side.</p>"],
    ["How long does the whole move take?",
     "<p>Plan several months if the titer test still has to be done from Pattaya.</p>"],
    ["How does this differ from the EU hub page?",
     "<p>The veterinary rules are the same EU-wide; this page adds Denmark-specific authority notes. See <a href=\"/take-pet-out-of-thailand/to-eu.html\">export to the EU</a>.</p>"]
  ]
}));

/* ---------------- FINLAND ---------------- */
pages.push(exp({
  slug: "to-finland", crumb: "To Finland",
  title: "Export a Pet from Thailand to Finland (EU Titer & DLD 2026) | PattayaPets",
  desc: "Thailand to Finland pet export: EU titer test, three-month wait, Ruokavirasto " +
    "entry rules, tapeworm treatment for dogs and DLD export timeline.",
  h1: "Taking a pet from Thailand to Finland",
  lede: "Finland applies the EU entry rules, with one extra requirement for dogs " +
    "to plan around.",
  officialExtra:
    "<p><strong>Finnish / EU sources:</strong> " +
    "<a href=\"https://www.ruokavirasto.fi/en/themes/animals/travel-with-pet-animals/\" " +
    "target=\"_blank\" rel=\"noopener nofollow\">Ruokavirasto pet travel</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener nofollow\">EU pet movement</a>. " +
    "Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-finland.html\">bringing a pet from Finland</a>.</p>",
  sections: euExportSections({
    routingIntro: "The EU titer test and three-month wait are usually the long pole for Finland entry.",
    reqHeading: "What Finland / the EU requires from Thailand",
    reqHtml: EU_ENTRY_REQ_LIST +
      "<p>The Finnish Food Authority (Ruokavirasto) oversees pet entry. Finland " +
      "also keeps the <strong>tapeworm (Echinococcus) treatment rule</strong>: a " +
      "dog entering Finland must be treated against tapeworm by a vet within a set " +
      "window before arrival (commonly 24 to 120 hours).</p>" + EU_TITER_TIP,
    extraFails: "<ul><li><strong>Missing tapeworm treatment for dogs</strong> &mdash; confirm the current window with Ruokavirasto before you fly.</li></ul>"
  }),
  faqs: [
    ["Does my dog need tapeworm treatment to enter Finland?",
     "<p>Yes &mdash; Finland requires a vet-administered tapeworm treatment for dogs within a set window before arrival. Confirm the current window with Ruokavirasto.</p>"],
    ["How early should I start?",
     "<p>Several months ahead if the titer test still has to be done &mdash; the three-month wait is unavoidable. Do the titer test as early as possible.</p>"],
    ["Is the EU pet passport enough from Thailand?",
     "<p>No. You need a third-country entry health certificate endorsed on the Thai side.</p>"],
    ["Can my pet skip the three-month wait?",
     "<p>Only with a valid pre-existing rabies titer test and current rabies vaccination.</p>"],
    ["How does this differ from the EU hub page?",
     "<p>The veterinary rules are the same EU-wide; this page adds Finland-specific tapeworm notes. See <a href=\"/take-pet-out-of-thailand/to-eu.html\">export to the EU</a>.</p>"]
  ]
}));

/* ---------------- NETHERLANDS ---------------- */
pages.push(exp({
  slug: "to-netherlands", crumb: "To the Netherlands",
  title: "Export a Pet from Thailand to the Netherlands (EU Titer & DLD 2026) | PattayaPets",
  desc: "Thailand to Netherlands pet export: EU titer test, three-month wait, NVWA " +
    "entry rules, Amsterdam routing and DLD export timeline.",
  h1: "Taking a pet from Thailand to the Netherlands",
  lede: "The Netherlands applies the standard EU entry rules, and Amsterdam is a " +
    "convenient direct arrival point from Bangkok.",
  officialExtra:
    "<p><strong>Dutch / EU sources:</strong> " +
    "<a href=\"https://english.nvwa.nl/topics/importing-animals\" target=\"_blank\" " +
    "rel=\"noopener nofollow\">NVWA importing animals</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener nofollow\">EU pet movement</a>. " +
    "Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-netherlands.html\">bringing a pet from the Netherlands</a>.</p>",
  sections: euExportSections({
    routingIntro: "Direct Bangkok&ndash;Amsterdam routes exist, but the EU titer timeline is usually slower than booking a seat.",
    reqHeading: "What the Netherlands / the EU requires from Thailand",
    reqHtml: EU_ENTRY_REQ_LIST +
      "<p>The Netherlands Food and Consumer Product Safety Authority (NVWA) " +
      "oversees pet entry. Amsterdam Schiphol has direct routes from Bangkok, " +
      "which keeps the journey as short as possible &mdash; easier on the pet.</p>" + EU_TITER_TIP
  }),
  faqs: [
    ["Are there direct flights for a pet from Thailand to the Netherlands?",
     "<p>Amsterdam has direct routes from Bangkok; whether a given flight accepts a pet in cabin, as checked baggage or as cargo depends on the airline and aircraft. Confirm with the airline well ahead.</p>"],
    ["Is the three-month wait avoidable?",
     "<p>Only with a valid rabies titer test already in place and the vaccination kept current. Otherwise plan for the full three-month wait after the blood sample.</p>"],
    ["Is the EU pet passport enough from Thailand?",
     "<p>No. You need a third-country entry health certificate endorsed on the Thai side.</p>"],
    ["Who should I check rules with?",
     "<p>NVWA for the Netherlands side and the Thai DLD for export. Check both before booking.</p>"],
    ["How does this differ from the EU hub page?",
     "<p>The veterinary rules are the same EU-wide; this page adds Amsterdam routing notes. See <a href=\"/take-pet-out-of-thailand/to-eu.html\">export to the EU</a>.</p>"]
  ]
}));

/* ---------------- FRANCE ---------------- */
pages.push(exp({
  slug: "to-france", crumb: "To France",
  title: "Export a Pet from Thailand to France (EU Titer & DLD 2026) | PattayaPets",
  desc: "Thailand to France pet export: EU titer test, three-month wait, entry " +
    "certificate, Paris routing and DLD export timeline.",
  h1: "Taking a pet from Thailand to France",
  lede: "France applies the standard EU entry rules for a pet arriving from " +
    "Thailand, with Paris a common direct arrival point.",
  officialExtra:
    "<p><strong>French / EU sources:</strong> " +
    "<a href=\"https://agriculture.gouv.fr/les-demarches-pour-partir-voyager-avec-son-animal-de-compagnie\" " +
    "target=\"_blank\" rel=\"noopener nofollow\">French Ministry of Agriculture pet travel</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener nofollow\">EU pet movement</a>. " +
    "Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-france.html\">bringing a pet from France</a>.</p>",
  sections: euExportSections({
    routingIntro: "Direct Bangkok&ndash;Paris routes exist, but the EU titer timeline is usually the long pole.",
    reqHeading: "What France / the EU requires from Thailand",
    reqHtml: EU_ENTRY_REQ_LIST +
      "<p>The French veterinary authorities oversee pet entry, and the entry " +
      "health certificate is checked on arrival. Paris has direct routes from " +
      "Bangkok, which shortens the journey.</p>" + EU_TITER_TIP
  }),
  faqs: [
    ["How long does it take to move a pet from Thailand to France?",
     "<p>Plan for several months if the titer test is still to be done &mdash; the three-month wait is fixed. A valid existing titer test makes it considerably faster.</p>"],
    ["Does the EU pet passport cover entry from Thailand?",
     "<p>No. Coming from a non-listed country your pet needs an EU third-country entry health certificate. Confirm the current rules with the French authorities.</p>"],
    ["Can my pet skip the three-month wait?",
     "<p>Only with a valid pre-existing rabies titer test and current rabies vaccination.</p>"],
    ["Which Paris airports accept pets from third countries?",
     "<p>Pets from third countries must enter via designated traveller points of entry. Confirm the current French list before booking.</p>"],
    ["How does this differ from the EU hub page?",
     "<p>The veterinary rules are the same EU-wide; this page adds France-specific routing notes. See <a href=\"/take-pet-out-of-thailand/to-eu.html\">export to the EU</a>.</p>"]
  ]
}));

/* ---------------- IRELAND ---------------- */
pages.push(exp({
  slug: "to-ireland", crumb: "To Ireland",
  title: "Export a Pet from Thailand to Ireland (EU Titer & DLD 2026) | PattayaPets",
  desc: "Thailand to Ireland pet export: EU titer test, three-month wait, Department of " +
    "Agriculture rules, tapeworm treatment for dogs and DLD export timeline.",
  h1: "Taking a pet from Thailand to Ireland",
  lede: "Ireland applies the EU entry rules, with one extra requirement for dogs.",
  officialExtra:
    "<p><strong>Irish / EU sources:</strong> " +
    "<a href=\"https://www.gov.ie/en/department-of-agriculture-food-and-the-marine/publications/bringing-pets-to-ireland/\" " +
    "target=\"_blank\" rel=\"noopener nofollow\">Department of Agriculture pet travel</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener nofollow\">EU pet movement</a>. " +
    "Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-ireland.html\">bringing a pet from Ireland</a>.</p>",
  sections: euExportSections({
    routingIntro: "The EU titer test and three-month wait are usually the long pole for Ireland entry.",
    reqHeading: "What Ireland / the EU requires from Thailand",
    reqHtml: EU_ENTRY_REQ_LIST +
      "<p>The Department of Agriculture, Food and the Marine oversees pet entry. " +
      "Ireland also keeps the <strong>tapeworm (Echinococcus) treatment rule</strong>: " +
      "a dog entering Ireland must be treated against tapeworm by a vet within a " +
      "set window before arrival (commonly 24 to 120 hours).</p>" + EU_TITER_TIP,
    extraFails: "<ul><li><strong>Missing tapeworm treatment for dogs</strong> &mdash; confirm the current window with the Department before you fly.</li></ul>"
  }),
  faqs: [
    ["Does my dog need tapeworm treatment to enter Ireland?",
     "<p>Yes &mdash; Ireland requires a vet-administered tapeworm treatment for dogs within a set window before arrival. Confirm the current window with the Department of Agriculture, Food and the Marine.</p>"],
    ["Is there a route to avoid the three-month wait?",
     "<p>Only a valid pre-existing rabies titer test avoids it. If the test still has to be done from Thailand, the three-month wait applies.</p>"],
    ["Is the EU pet passport enough from Thailand?",
     "<p>No. You need a third-country entry health certificate endorsed on the Thai side.</p>"],
    ["How early should I start?",
     "<p>Several months ahead if the titer test still has to be done from Pattaya.</p>"],
    ["How does this differ from the EU hub page?",
     "<p>The veterinary rules are the same EU-wide; this page adds Ireland-specific tapeworm notes. See <a href=\"/take-pet-out-of-thailand/to-eu.html\">export to the EU</a>.</p>"]
  ]
}));

/* ---------------- SWITZERLAND ---------------- */
pages.push(exp({
  slug: "to-switzerland", crumb: "To Switzerland",
  title: "Export a Pet from Thailand to Switzerland (EU-aligned Titer & DLD 2026) | PattayaPets",
  desc: "Thailand to Switzerland pet export: EU-aligned titer test, waiting period, " +
    "FSVO entry rules and DLD export timeline.",
  h1: "Taking a pet from Thailand to Switzerland",
  lede: "Switzerland is not in the EU, but it applies closely aligned rules for a " +
    "pet arriving from Thailand &mdash; plan in quarters, not weeks.",
  officialExtra:
    "<p><strong>Swiss sources:</strong> " +
    "<a href=\"https://www.blv.admin.ch/blv/en/home/tiere/reisen-mit-heimtieren.html\" " +
    "target=\"_blank\" rel=\"noopener nofollow\">FSVO travelling with pets</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener nofollow\">EU pet movement</a> (Switzerland applies EU-aligned rules). " +
    "Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-switzerland.html\">bringing a pet from Switzerland</a>.</p>",
  sections: euExportSections({
    routingIntro: "Switzerland applies EU-aligned third-country rules; the titer test and waiting period are usually the long pole.",
    reqHeading: "What Switzerland requires from Thailand",
    reqHtml:
      "<p>Switzerland applies EU-aligned rules for pets arriving from outside the " +
      "low-risk list. In practice that means:</p>" +
      "<ul>" +
      "<li>ISO microchip before rabies vaccination</li>" +
      "<li>Current rabies vaccination</li>" +
      "<li><a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">Rabies titer test</a> from an approved laboratory, blood drawn at least 30 days after vaccination</li>" +
      "<li>A waiting period before entry (commonly three months from the blood sample for third-country origins &mdash; confirm with FSVO)</li>" +
      "<li>Appropriate entry paperwork endorsed by the exporting country&rsquo;s competent authority</li>" +
      "<li>Entry through a designated point where FSVO requires it</li>" +
      "</ul>" +
      "<p>The Federal Food Safety and Veterinary Office (FSVO) oversees the process.</p>" + EU_TITER_TIP
  }),
  faqs: [
    ["Does Switzerland being outside the EU make this easier?",
     "<p>Not really &mdash; Switzerland runs EU-aligned pet rules, so a titer test and waiting period still apply for a pet from Thailand. Confirm the current detail with FSVO.</p>"],
    ["What is the single most important step?",
     "<p>The rabies titer test, done as early as possible. Its waiting period is what makes the timeline long, so it is the thing to get moving first.</p>"],
    ["Is the EU pet passport enough from Thailand?",
     "<p>No. You need entry paperwork for a third-country origin, endorsed on the Thai side.</p>"],
    ["Can my pet skip the waiting period?",
     "<p>Only if a valid titer test is already in place and rabies vaccination has been kept current. Confirm validity with FSVO.</p>"],
    ["How does this differ from exporting to the EU?",
     "<p>The veterinary framework is closely aligned; this page adds FSVO-specific notes. See also <a href=\"/take-pet-out-of-thailand/to-eu.html\">export to the EU</a>.</p>"]
  ]
}));

/* ---------------- CANADA ---------------- */
pages.push(exp({
  slug: "to-canada", crumb: "To Canada",
  title: "Export a Pet from Thailand to Canada (DLD 2026) | PattayaPets",
  desc: "Bringing a dog or cat from Thailand to Canada: the rabies vaccination " +
    "certificate, and why this is one of the simpler routes.",
  h1: "Taking a pet from Thailand to Canada",
  lede: "Compared with the EU or Australia, Canada is one of the more " +
    "straightforward destinations for a pet leaving Thailand.",
  sections: [
    { h: "Entering Canada", html:
      "<p>Canada&rsquo;s requirements for a dog or cat are comparatively simple. " +
      "The central document is a <strong>valid rabies vaccination certificate</strong>, " +
      "and Canada does not generally require a rabies titer test or a quarantine " +
      "stay for pets. The Canadian Food Inspection Agency (CFIA) sets the rules, " +
      "and there can be additional steps depending on the animal&rsquo;s age and " +
      "your situation &mdash; so confirm the current detail with the " +
      "<a href=\"https://inspection.canada.ca/en/importing-food-plants-or-animals/pets\" " +
      "target=\"_blank\" rel=\"noopener nofollow\">CFIA</a>.</p>" },
    { h: "The Thai side and a word of caution", html:
      THAI_SIDE +
      "<p>Even though Canada is straightforward, still consider a " +
      "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">rabies " +
      "titer test</a> if there is any chance of onward travel &mdash; the EU, UK " +
      "and others require it with a long waiting period.</p>" }
  ],
  faqs: [
    ["Does Canada require a rabies titer test for a pet from Thailand?",
     "<p>Generally no &mdash; Canada's main requirement is a valid rabies vaccination certificate, and it does not normally require titer testing or quarantine. Confirm the current rules for your pet with the CFIA.</p>"],
    ["Is Canada really easier than the EU?",
     "<p>For the entry requirements themselves, yes &mdash; there is no three-month titer wait. The Thai export process still applies, and you should still start in good time.</p>"]
  ]
}));

/* ---------------- RUSSIA ---------------- */
pages.push(exp({
  slug: "to-russia", crumb: "To Russia",
  title: "Export a Pet from Thailand to Russia (FSVPS & DLD 2026) | PattayaPets",
  desc: "Thailand to Russia pet export: FSVPS entry certificate, rabies vaccination, " +
    "DLD export timeline, document checklist and onward-travel notes.",
  h1: "Taking a pet from Thailand to Russia",
  lede: "Pattaya has a large Russian community, and the route home is, by " +
    "international standards, relatively straightforward &mdash; but the Thai DLD " +
    "export steps still run in parallel.",
  officialExtra:
    "<p><strong>Russian sources:</strong> " +
    "<a href=\"https://fsvps.gov.ru/\" target=\"_blank\" rel=\"noopener nofollow\">" +
    "Federal Service for Veterinary and Phytosanitary Surveillance (FSVPS)</a>. " +
    "Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-russia.html\">bringing a pet from Russia</a>.</p>",
  sections: [
    { h: "The timeline — Thailand to Russia", html:
      "<p>Russia does not generally require a rabies titer test, so the timeline is " +
      "shorter than EU routes &mdash; but the DLD export desk still needs lead time.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">6&ndash;8 weeks before</th>' +
      '<td>Confirm current FSVPS import requirements; ensure ISO microchip and current rabies vaccination</td>' +
      '<td>FSVPS + Thai vet</td></tr>' +
      '<tr><th scope="row">4&ndash;6 weeks before</th>' +
      '<td>Book pet on Bangkok&ndash;Moscow or connecting route; confirm airline pet policy</td>' +
      '<td>Airline</td></tr>' +
      '<tr><th scope="row">&ge;15 days before export</th>' +
      '<td>Apply for Thai <a href="/take-pet-out-of-thailand/export-permit-thailand-dld.html">DLD export permit</a> (form 1/1) with Russian entry requirements attached</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">Within 10 days of departure</th>' +
      '<td>Final clinical examination; DLD export health certificate endorsed for Russia</td>' +
      '<td>DLD AQS + vet</td></tr>' +
      '<tr><th scope="row">Close to travel date</th>' +
      '<td>Present documents on arrival; FSVPS may inspect the veterinary certificate at the border</td>' +
      '<td>FSVPS / border veterinary control</td></tr>' +
      '</tbody></table></div>' },
    { h: "What Russia requires from Thailand", html:
      "<p>Russia&rsquo;s requirements centre on a <strong>veterinary certificate</strong> " +
      "and a <strong>current rabies vaccination</strong>, with the pet microchipped " +
      "for identification. Russia does not generally require a rabies titer test " +
      "for entry from most countries. The certificate is handled through FSVPS, and " +
      "the exact form is usually finalised close to travel &mdash; confirm the current " +
      "process with FSVPS and your vet before you book.</p>" +
      "<p>Typical entry documents include:</p>" +
      "<ul>" +
      "<li>ISO microchip matching every certificate</li>" +
      "<li>Valid rabies vaccination</li>" +
      "<li>Government-endorsed export health certificate from Thailand (DLD)</li>" +
      "<li>Proof of ownership where FSVPS asks for it</li>" +
      "</ul>" +
      '<div class="callout callout-tip"><div class="ch">Planning onward travel to the EU?</div>' +
      "<p>If there is any chance of later moving your pet on to the EU, UK or similar, a " +
      "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">rabies titer test</a> " +
      "done early in Thailand keeps that option open without a long wait later.</p></div>" },
    { h: "The Thai export side (DLD)", html:
      "<p>Parallel Thai requirements:</p>" + DLD_EXPORT_TABLE +
      "<p>See " +
      '<a href="/take-pet-out-of-thailand/export-process.html">export process</a>.</p>' },
    { h: "Common mistakes on this corridor", html: EXPORT_FAILS +
      "<ul>" +
      "<li><strong>Leaving FSVPS confirmation until arrival</strong> &mdash; rules change; verify import requirements before you fly.</li>" +
      "<li><strong>Certificate timing</strong> &mdash; Russian veterinary certificates are often finalised close to departure; still allow DLD export lead time.</li>" +
      "<li><strong>Microchip mismatch</strong> &mdash; across Thai export papers, airline booking and FSVPS expectations.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Does Russia require a rabies titer test for a pet from Thailand?",
     "<p>Generally no &mdash; Russia's requirements centre on a veterinary certificate and a current rabies vaccination. Confirm the current process with FSVPS and your vet.</p>"],
    ["When is the Russian certificate issued?",
     "<p>Usually close to the travel date, through FSVPS. Your vet can advise on the timing; start early so nothing is rushed.</p>"],
    ["How long does Thailand-to-Russia take to plan?",
     "<p>Weeks rather than months if no titer test is needed &mdash; but allow at least 15 days for the DLD export permit and time for the final health certificate.</p>"],
    ["Can my pet fly in the cabin to Russia?",
     "<p>Depends on the airline and aircraft on your Bangkok&ndash;Moscow or connecting route. Confirm pet space and crate rules when you book.</p>"],
    ["What if I later move from Russia to the EU?",
     "<p>Plan a titer test and waiting period before that move. Doing the test while still in Thailand saves time if you know EU relocation is possible.</p>"]
  ]
}));

/* ---------------- NEW ZEALAND ---------------- */
pages.push(exp({
  slug: "to-new-zealand", crumb: "To New Zealand",
  title: "Export a Pet from Thailand to New Zealand (MPI & DLD 2026) | PattayaPets",
  desc: "Thailand to New Zealand pet export: why direct import fails, MPI import permit, " +
    "titer testing, mandatory quarantine and DLD export checklist.",
  h1: "Taking a pet from Thailand to New Zealand",
  lede: "Be honest with yourself early: New Zealand has some of the strictest pet " +
    "biosecurity rules anywhere, and Thailand is <strong>not</strong> a straightforward origin.",
  officialExtra:
    "<p><strong>New Zealand sources:</strong> " +
    "<a href=\"https://www.mpi.govt.nz/import/bringing-pets-to-nz/importing-dogs-and-cats/\" " +
    "target=\"_blank\" rel=\"noopener nofollow\">MPI &mdash; importing dogs and cats</a>; " +
    "<a href=\"https://www.mpi.govt.nz/import/bringing-pets-to-nz/\" target=\"_blank\" " +
    "rel=\"noopener nofollow\">MPI pet import hub</a>. " +
    "Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-new-zealand.html\">bringing a pet from New Zealand</a>.</p>",
  sections: [
    { h: "Why direct import is not simple", html:
      "<p>New Zealand protects its rabies-free status with strict import rules. " +
      "Thailand is <strong>not</strong> on MPI&rsquo;s list of countries from which " +
      "pets can import under the lightest pathways. A pet that has lived in Thailand " +
      "typically faces a long, multi-stage process that can include:</p>" +
      "<ol>" +
      "<li><strong>MPI import permit</strong> applied for well before any flight is booked</li>" +
      "<li><a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">Rabies titer testing</a> " +
      "from an MPI-approved laboratory, on MPI&rsquo;s schedule</li>" +
      "<li>A <strong>waiting period</strong> after the blood sample before export (MPI sets the current period &mdash; verify directly)</li>" +
      "<li>Thai <a href=\"/take-pet-out-of-thailand/export-permit-thailand-dld.html\">DLD export paperwork</a> matching MPI&rsquo;s conditions</li>" +
      "<li><strong>Mandatory post-arrival quarantine</strong> at an MPI-approved facility (Auckland or Christchurch area) &mdash; not optional</li>" +
      "</ol>" +
      "<p>Some pathways require a qualifying period in another approved country first. " +
      "Owners commonly report <strong>many months</strong> of planning. This is not a " +
      "last-minute relocation.</p>" +
      '<div class="callout callout-emergency"><div class="ch">NZ → Thailand was the easy bit</div>' +
      "<p>If you imported from New Zealand recently, do not assume symmetry. Read " +
      '<a href="/bring-pet-to-thailand/from-new-zealand.html">New Zealand to Thailand</a> ' +
      "for the outbound direction you already managed &mdash; then accept that the return is an entirely different process.</p></div>" },
    { h: "The realistic timeline (high level)", html:
      "<p>Every case differs by MPI&rsquo;s current country categories, but the shape is similar:</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">Phase</th><th scope="col">What happens</th><th scope="col">Who</th></tr></thead><tbody>' +
      '<tr><th scope="row">Planning (months 1&ndash;2)</th>' +
      '<td>Contact MPI; engage specialist <a href="/pet-relocation/">relocation agent</a>; confirm whether your pet can export directly from Thailand or needs an interim country</td>' +
      '<td>You + agent + MPI</td></tr>' +
      '<tr><th scope="row">Veterinary prep in Thailand</th>' +
      '<td>Rabies vaccination, titer test, other MPI-specified tests and treatments on a fixed schedule</td>' +
      '<td>MPI-approved vet + lab</td></tr>' +
      '<tr><th scope="row">Waiting period</th>' +
      '<td>MPI-required wait after the titer blood sample before export</td>' +
      '<td>MPI rules</td></tr>' +
      '<tr><th scope="row">Import permit</th>' +
      '<td>Apply for MPI import permit with full veterinary history; book quarantine facility space</td>' +
      '<td>MPI</td></tr>' +
      '<tr><th scope="row">&ge;15 days before export</th>' +
      '<td>Apply for Thai DLD export permit (form 1/1) with MPI import permit attached</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">Within 10 days of departure</th>' +
      '<td>Final clinical examination; DLD export health certificate matching MPI conditions</td>' +
      '<td>DLD AQS + vet</td></tr>' +
      '<tr><th scope="row">Arrival in New Zealand</th>' +
      '<td>Mandatory quarantine at MPI-approved facility; release only when MPI clears the pet</td>' +
      '<td>MPI quarantine facility</td></tr>' +
      '</tbody></table></div>' },
    { h: "What MPI import typically requires", html:
      "<p>Confirm the current MPI checklist directly. Commonly includes:</p>" +
      "<ul>" +
      "<li><strong>Import permit</strong> issued before export to New Zealand</li>" +
      "<li><strong>ISO microchip</strong> and rabies vaccination history</li>" +
      "<li><strong>Rabies neutralising antibody titre test</strong> from an MPI-approved lab, on schedule</li>" +
      "<li>Additional treatments and examinations timed to MPI&rsquo;s calendar</li>" +
      "<li>Export health certificate from Thailand endorsed by the DLD, matching MPI&rsquo;s template</li>" +
      "<li>Booking at an <strong>MPI-approved quarantine facility</strong> before the pet flies</li>" +
      "</ul>" +
      "<p>Quarantine is not optional &mdash; even perfect paperwork ends with a stay at an approved facility.</p>" },
    { h: "The Thai export side (DLD)", html:
      "<p>Parallel Thai requirements:</p>" + DLD_EXPORT_TABLE +
      "<p>See " +
      '<a href="/take-pet-out-of-thailand/export-process.html">export process</a>. ' +
      "Engage a specialist agent early &mdash; MPI and DLD paperwork must agree exactly.</p>" },
    { h: "Common mistakes on this corridor", html: EXPORT_FAILS +
      "<ul>" +
      "<li><strong>Assuming a direct Bangkok&ndash;Auckland pet flight solves everything</strong> &mdash; MPI biosecurity rules are the long pole, not the airline booking.</li>" +
      "<li><strong>Starting when the work contract ends</strong> &mdash; many months&rsquo; lead time is normal, not conservative.</li>" +
      "<li><strong>No quarantine facility booking</strong> &mdash; MPI-approved space must be reserved as part of import planning.</li>" +
      "<li><strong>Titer test timing wrong</strong> &mdash; the waiting period runs from the blood sample date, not from when results arrive.</li>" +
      "</ul>" +
      "<p>A specialist <a href=\"/pet-relocation/\">pet relocation agent</a> experienced in " +
      "the New Zealand route is strongly recommended.</p>" }
  ],
  faqs: [
    ["Can I fly my pet directly from Thailand to New Zealand?",
     "<p>Not in a simple way under normal MPI rules. Thailand is not a low-risk origin; the route typically requires titer testing, an import permit, DLD export paperwork and mandatory quarantine. Some cases need an interim approved country. Confirm the current pathway with MPI.</p>"],
    ["How early should I start planning?",
     "<p>As early as possible &mdash; many months of lead time. The sooner you involve MPI and a specialist agent, the fewer surprises in the timeline.</p>"],
    ["How long is quarantine in New Zealand?",
     "<p>MPI sets the minimum quarantine period at an approved facility &mdash; commonly at least ten days, but confirm the current rules and book space early.</p>"],
    ["Does New Zealand require a rabies titer test from Thailand?",
     "<p>Yes for normal pathways from non-rabies-free countries. The test must be from an MPI-approved laboratory and the waiting period after the blood sample must elapse before export.</p>"],
    ["When should I apply for the Thai DLD export permit?",
     "<p>At least 15 days before export, once the MPI import permit is issued and titer/waiting-period requirements are satisfied.</p>"]
  ]
}));

/* ---------------- JAPAN ---------------- */
pages.push(exp({
  slug: "to-japan", crumb: "To Japan",
  title: "Export a Pet from Thailand to Japan (MAFF & DLD 2026) | PattayaPets",
  desc: "Thailand to Japan pet export: MAFF 180-day wait, advance notification, DLD " +
    "export timeline, document checklist and common failure points.",
  h1: "Taking a pet from Thailand to Japan",
  lede: "Japan has one of the strictest pet-import systems anywhere. From Thailand " +
    "(a non-designated region), plan on <strong>at least seven months</strong> from " +
    "starting the titer test to landing in Japan.",
  officialExtra:
    "<p><strong>Japan sources:</strong> " +
    '<a href="https://www.maff.go.jp/aqs/english/animal/dog/import-other.html" target="_blank" ' +
    "rel=\"noopener nofollow\">MAFF AQS &mdash; import from non-designated regions</a>; " +
    '<a href="https://www.maff.go.jp/aqs/english/" target="_blank" rel="noopener nofollow">' +
    "MAFF Animal Quarantine Service</a>. Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-japan.html\">bringing a pet from Japan</a>.</p>",
  sections: [
    { h: "The timeline — Thailand to Japan", html:
      "<p>Japan&rsquo;s clock starts when the titer blood is drawn, not when you book " +
      "the flight. Typical sequence:</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">7+ months before arrival</th>' +
      '<td>ISO microchip; first rabies vaccination</td>' +
      '<td>Thai vet</td></tr>' +
      '<tr><th scope="row">6+ months before</th>' +
      '<td>Second rabies vaccination (at least 30 days after the first); blood sample for MAFF-designated titer test</td>' +
      '<td>Thai vet + approved lab</td></tr>' +
      '<tr><th scope="row">Day 0 = blood sample date</th>' +
      '<td><strong>180-day wait</strong> must elapse before the pet may enter Japan</td>' +
      '<td>MAFF rule</td></tr>' +
      '<tr><th scope="row">&ge;40 days before arrival</th>' +
      '<td><strong>Advance notification</strong> to the AQS at your Japanese arrival port (NACCS online or email)</td>' +
      '<td>MAFF AQS</td></tr>' +
      '<tr><th scope="row">&ge;15 days before export</th>' +
      '<td>Apply for Thai <a href="/take-pet-out-of-thailand/export-permit-thailand-dld.html">DLD export permit</a> (form 1/1)</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">Within 10 days of departure</th>' +
      '<td>Final clinical examination; DLD export health certificate</td>' +
      '<td>DLD AQS + vet</td></tr>' +
      '<tr><th scope="row">Arrival in Japan</th>' +
      '<td>AQS import inspection at a designated airport/seaport; clearance typically within 12 hours if compliant</td>' +
      '<td>MAFF AQS</td></tr>' +
      '</tbody></table></div>' },
    { h: "Thai-side export documents", html: DLD_EXPORT_TABLE + THAI_SIDE },
    { h: "What MAFF checks on arrival", html:
      "<ul>" +
      "<li>Microchip matches every document.</li>" +
      "<li>Two rabies vaccinations on the correct schedule.</li>" +
      "<li>Titer result &ge; 0.5 IU/ml from a MAFF-designated laboratory (valid 2 years from sampling).</li>" +
      "<li>At least 180 days elapsed since the blood sample date.</li>" +
      "<li>Advance notification accepted at least 40 days before arrival.</li>" +
      "<li>Thai export quarantine certificate and endorsed health certificate.</li>" +
      "</ul>" +
      "<p>Non-compliance can mean detention quarantine in Japan for up to 180 days. A " +
      "<a href=\"/pet-relocation/\">pet relocation agent</a> experienced in the Japan route " +
      "is worth the cost on this corridor.</p>" },
    { h: "Common mistakes", html: EXPORT_FAILS +
      "<ul>" +
      "<li><strong>Booking the flight before the 180-day date</strong> &mdash; Japan counts from the blood draw, not the result letter.</li>" +
      "<li><strong>Late advance notification</strong> &mdash; under 40 days may be rejected.</li>" +
      "<li><strong>Wrong laboratory</strong> &mdash; the titer must be at a MAFF-designated lab; check the current list.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["How long does it take to bring a pet from Thailand to Japan?",
     "<p>Often seven months or more: two rabies vaccinations, MAFF-designated titer test, 180-day wait from the blood sample, advance notification at least 40 days before arrival, plus Thai DLD export steps.</p>"],
    ["Does Japan require a rabies titer test from Thailand?",
     "<p>Yes. Thailand is a non-designated region. Japan requires a titer at a designated laboratory, result ≥ 0.5 IU/ml, and a 180-day wait from the sample date.</p>"],
    ["Which Japanese airports accept pet imports?",
     "<p>MAFF publishes designated airports and seaports — typically Narita, Haneda, Kansai and a limited list of others. Confirm your arrival port accepts dogs/cats before booking.</p>"],
    ["Can I shorten the 180-day wait?",
     "<p>No. If you arrive early, Japan holds the pet in detention quarantine until the 180 days from the blood sample are complete.</p>"],
    ["When should I start the Thai DLD export permit?",
     "<p>Apply at least 15 days before export, but only after the Japan-side timeline (titer + 180 days + notification) is already aligned with your travel date.</p>"]
  ]
}));

/* ---------------- SINGAPORE ---------------- */
pages.push(exp({
  slug: "to-singapore", crumb: "To Singapore",
  title: "Export a Pet from Thailand to Singapore (AVS & DLD 2026) | PattayaPets",
  desc: "Thailand to Singapore pet export: Schedule III RNATT timing, AQC quarantine, " +
    "AVS import licence, DLD export timeline and document checklist.",
  h1: "Taking a pet from Thailand to Singapore",
  lede: "Thailand is a <strong>Schedule III</strong> origin under AVS rules. A pet can " +
    "enter Singapore, but expect a <strong>90-day minimum lead time</strong> after the " +
    "titer blood draw and <strong>30 days quarantine</strong> on arrival.",
  officialExtra:
    "<p><strong>Singapore sources:</strong> " +
    '<a href="https://avs.nparks.gov.sg/pets/importing-exporting-a-pet/import/dogs-and-cats/" ' +
    'target="_blank" rel="noopener nofollow">AVS &mdash; importing dogs and cats</a> ' +
    "(verify Thailand&rsquo;s schedule close to travel). Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-singapore.html\">bringing a pet from Singapore</a>.</p>",
  sections: [
    { h: "The timeline — Thailand to Singapore", html:
      "<p>AVS timing gates stack on top of the Thai DLD export process. Typical sequence " +
      "for a Schedule III origin (verify on AVS before you start):</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">4+ months before export</th>' +
      '<td>ISO microchip; valid rabies vaccination (after chip)</td>' +
      '<td>Thai vet</td></tr>' +
      '<tr><th scope="row">&ge;28 days after vaccination</th>' +
      '<td>Blood sample for rabies serology (RNATT) at an approved lab; result &ge; 0.5 IU/ml</td>' +
      '<td>Approved lab</td></tr>' +
      '<tr><th scope="row">&ge;90 days after blood sample</th>' +
      '<td>Earliest export date (sample must also be within 12 months of export)</td>' +
      '<td>AVS rule</td></tr>' +
      '<tr><th scope="row">6&ndash;8 weeks before export</th>' +
      '<td>Dog licence via PALS (dogs only); apply for AVS <strong>import licence</strong>; book AQC quarantine via QMS</td>' +
      '<td>AVS</td></tr>' +
      '<tr><th scope="row">&ge;15 days before export</th>' +
      '<td>Apply for Thai <a href="/take-pet-out-of-thailand/export-permit-thailand-dld.html">DLD export permit</a> (form 1/1) with AVS conditions attached</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">2&ndash;7 days before export</th>' +
      '<td>Internal and external parasite treatments per AVS window</td>' +
      '<td>Thai vet</td></tr>' +
      '<tr><th scope="row">Arrival in Singapore</th>' +
      '<td>Inspection; Schedule III imports typically face &ge;30 days quarantine at AQC plus rabies vaccination on arrival</td>' +
      '<td>AVS / AQC</td></tr>' +
      '</tbody></table></div>' },
    { h: "Thai-side export documents", html: DLD_EXPORT_TABLE + THAI_SIDE },
    { h: "What AVS checks", html:
      "<ul>" +
      "<li>Microchip before vaccination; chip on every document.</li>" +
      "<li>Valid rabies vaccination using an AVS-accepted vaccine.</li>" +
      "<li>RNATT blood sample at least 28 days after vaccination and at least 90 days before export.</li>" +
      "<li>Import licence and AQC quarantine reservation.</li>" +
      "<li>Parasite treatments within the AVS pre-export window.</li>" +
      "<li>Thai DLD export health certificate matching AVS veterinary conditions.</li>" +
      "</ul>" +
      "<p>AVS rabies schedules change &mdash; confirm Thailand&rsquo;s category on the " +
      "AVS website close to your travel date.</p>" },
    { h: "Common mistakes", html: EXPORT_FAILS +
      "<ul>" +
      "<li><strong>Blood sample too soon after vaccination</strong> &mdash; AVS requires at least 28 days.</li>" +
      "<li><strong>Export before 90 days after sampling</strong> &mdash; the sample must be at least 90 days and within 12 months of export.</li>" +
      "<li><strong>No AQC booking</strong> &mdash; quarantine space must be reserved before the import licence is useful.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Does Singapore require a rabies titer test from Thailand?",
     "<p>Yes. Thailand is Schedule III under AVS rules. You need rabies vaccination, RNATT serology at an approved lab (≥ 0.5 IU/ml), and correct timing between vaccination, sampling and export.</p>"],
    ["Is there quarantine in Singapore from Thailand?",
     "<p>Schedule III imports typically require at least 30 days post-arrival quarantine at the Animal Quarantine Centre, plus rabies vaccination on arrival. Book AQC space via the Quarantine Management System.</p>"],
    ["How long before I can export to Singapore?",
     "<p>At minimum roughly four months: vaccination, wait 28 days, blood sample, then wait at least 90 days before export — plus time for import licence and quarantine booking.</p>"],
    ["Do I need a dog licence before importing to Singapore?",
     "<p>Yes for dogs — apply via the Pet Licensing System (PALS) before the AVS import licence.</p>"],
    ["When should I apply for the Thai DLD export permit?",
     "<p>At least 15 days before export, with AVS import licence and quarantine booking already in place and the RNATT timing gates satisfied.</p>"]
  ]
}));

/* ---------------- UAE ---------------- */
pages.push(exp({
  slug: "to-uae", crumb: "To the UAE",
  title: "Export a Pet from Thailand to UAE (MOCCAE & DLD 2026) | PattayaPets",
  desc: "Thailand to UAE pet export: MOCCAE import permit, vaccinations, breed rules, " +
    "IATA cargo requirements, DLD export timeline and document checklist.",
  h1: "Taking a pet from Thailand to the UAE",
  lede: "The UAE corridor is manageable compared with the EU or Australia &mdash; " +
    "no three-month titer wait for UAE entry itself. But MOCCAE is strict on " +
    "<strong>permits, vaccines, breeds and cargo rules</strong>. Start early.",
  officialExtra:
    "<p><strong>UAE sources:</strong> " +
    "<a href=\"https://moccae.gov.ae/en/services/import-permit-pets\" target=\"_blank\" " +
    "rel=\"noopener nofollow\">MOCCAE import permit for pets</a> (updated January 2025). " +
    "Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-uae.html\">bringing a pet from the UAE</a>.</p>",
  sections: [
    { h: "The timeline — Thailand to Dubai or Abu Dhabi", html:
      "<p>Unlike the EU, the UAE route is often measured in <strong>weeks</strong>, not " +
      "months &mdash; but MOCCAE and your airline still need lead time.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">4&ndash;6 weeks before</th>' +
      '<td>Confirm ISO microchip; rabies and core vaccinations current; rabies given at least <strong>21 days</strong> before UAE arrival (and not before pet is <strong>3 months old</strong>)</td>' +
      '<td>Thai vet</td></tr>' +
      '<tr><th scope="row">3&ndash;4 weeks before</th>' +
      '<td>Apply for <strong>MOCCAE import permit</strong> online (valid <strong>90 days</strong> from issue per current service guidance)</td>' +
      '<td>MOCCAE portal</td></tr>' +
      '<tr><th scope="row">&ge;15 days before export</th>' +
      '<td>Apply for Thai <a href="/take-pet-out-of-thailand/export-permit-thailand-dld.html">DLD export permit</a> (form 1/1) with MOCCAE requirements attached</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">2 weeks before</th>' +
      '<td>Book airline — confirm <strong>IATA cargo</strong> vs cabin/hold; MOCCAE often requires manifested cargo</td>' +
      '<td>Airline</td></tr>' +
      '<tr><th scope="row">Within 10 days of shipment</th>' +
      '<td>Pre-shipment treatments MOCCAE requires (internal/external parasites per current List B guidance)</td>' +
      '<td>Accredited vet</td></tr>' +
      '<tr><th scope="row">Before departure</th>' +
      '<td>DLD export licence and health certificate; confirm export date with AQS</td>' +
      '<td>DLD</td></tr>' +
      '<tr><th scope="row">UAE arrival</th>' +
      '<td>Veterinary inspection at port of entry; import permit + health certificate + microchip check; pay inspection fees</td>' +
      '<td>MOCCAE quarantine centre</td></tr>' +
      '</tbody></table></div>' },
    { h: "What MOCCAE requires from Thailand", html:
      "<p>Per MOCCAE&rsquo;s published import service (verify current detail on " +
      "<a href=\"https://moccae.gov.ae/en/services/import-permit-pets\" target=\"_blank\" " +
      "rel=\"noopener nofollow\">moccae.gov.ae</a>):</p>" +
      "<ul>" +
      "<li><strong>Prior import permit</strong> obtained online before the pet travels</li>" +
      "<li><strong>Permanent microchip</strong> — chip number must match the health certificate exactly</li>" +
      "<li><strong>Rabies vaccination</strong> at least 21 days before arrival; primary rabies not before 3 months of age</li>" +
      "<li><strong>Dogs:</strong> rabies plus distemper, parvovirus, infectious hepatitis and leptospirosis</li>" +
      "<li><strong>Cats:</strong> rabies plus panleukopenia (and commonly calicivirus / rhinotracheitis per MOCCAE vaccination lists)</li>" +
      "<li><strong>Pre-shipment treatments</strong> within the window MOCCAE specifies</li>" +
      "<li>Attested <strong>veterinary health certificate</strong> from the exporting country&rsquo;s competent authority</li>" +
      "<li>Shipment under <strong>IATA live-animal regulations</strong> (often manifested cargo)</li>" +
      "</ul>" +
      "<p><strong>Prohibited breeds</strong> include Pit Bull types, Japanese Tosa, Dogo Argentino, " +
      "Fila Brasileiro, wolf-dog hybrids and American Staffordshire Terrier. Non-compliance " +
      "can mean fines, rejection or confiscation under MOCCAE rules.</p>" +
      "<p>MOCCAE also limits how many pets a person may import per year — confirm the current cap.</p>" },
    { h: "The Thai export side (DLD)", html:
      "<p>MOCCAE approval does not replace Thailand&rsquo;s export process:</p>" +
      DLD_EXPORT_TABLE +
      "<p>See " +
      '<a href="/take-pet-out-of-thailand/export-process.html">export process</a> and ' +
      '<a href="/take-pet-out-of-thailand/cost-to-export-a-pet-from-thailand.html">export costs</a>.</p>' },
    { h: "Common mistakes on this corridor", html: EXPORT_FAILS +
      "<ul>" +
      "<li><strong>Expired MOCCAE import permit</strong> — the permit is valid for a fixed period (90 days per current guidance); a delayed flight can void it.</li>" +
      "<li><strong>Banned breed</strong> — confirm before you leave Thailand that your dog can enter the UAE at all.</li>" +
      "<li><strong>Cabin booking when cargo is required</strong> — leads to denied boarding at Bangkok.</li>" +
      "<li><strong>Missing pre-shipment treatments</strong> within MOCCAE&rsquo;s required window.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Does the UAE require a rabies titer test from Thailand?",
     "<p>Generally no for UAE entry itself under current MOCCAE guidance — unlike the EU or UK. Confirm on the MOCCAE website before you travel. Consider a titer test anyway if you might move on to stricter destinations later.</p>"],
    ["How long is the MOCCAE import permit valid?",
     "<p>MOCCAE's online service states the import permit is valid for 90 days from issuance. Do not travel with an expired permit — apply again if your plans slip.</p>"],
    ["Can my pet fly in the cabin to Dubai?",
     "<p>It depends on the airline and MOCCAE conditions. Many UAE-bound pets travel as manifested cargo under IATA rules. Confirm with the airline and MOCCAE before you book cabin space.</p>"],
    ["Which UAE airport will I use?",
     "<p>Dubai (DXB), Abu Dhabi (AUH) and other ports have MOCCAE veterinary inspection centres. Confirm the centre for your arrival airport and its hours — cargo arrivals may differ from passenger terminal hours.</p>"],
    ["What if I originally brought my pet from the UAE?",
     "<p>Returning residents may follow MOCCAE's 'resident pet' rules if rabies vaccination stayed valid and you obtained a MOCCAE veterinary health certificate before leaving the UAE. If vaccination lapsed in Thailand, you may be treated as a first-time import.</p>"]
  ],
  related: [
    { name: "Export to the EU", path: "/take-pet-out-of-thailand/to-eu.html", desc: "Stricter rules if you move on from the UAE." },
    { name: "Import from the UAE", path: "/bring-pet-to-thailand/from-uae.html", desc: "The reverse journey — MOCCAE export and Thai import steps." },
    { name: "The export process", path: "/take-pet-out-of-thailand/export-process.html", desc: "The Thai DLD side of leaving." },
    { name: "Pet relocation agents", path: "/pet-relocation/", desc: "Specialists who manage export." }
  ]
}));

/* ---------------- INDIA ---------------- */
pages.push(exp({
  slug: "to-india", crumb: "To India",
  title: "Export a Pet from Thailand to India (AQCS & DLD 2026) | PattayaPets",
  desc: "Thailand to India pet export: AQCS Advance NOC timeline, approved arrival ports, " +
    "DLD export checklist and common failure points.",
  h1: "Taking a pet from Thailand to India",
  lede: "India clears pet imports through AQCS at a limited set of airports. From " +
    "Pattaya you need the Thai DLD export done first, then an online Advance NOC " +
    "applied at least <strong>seven working days</strong> before arrival.",
  officialExtra:
    "<p><strong>India sources:</strong> " +
    '<a href="https://aqcsindia.gov.in/Home/ImportExportPets" target="_blank" ' +
    "rel=\"noopener nofollow\">AQCS import/export of pets</a>; " +
    '<a href="https://indialog-pga.logistics.gov.in/AQCS/Home.aspx" target="_blank" ' +
    "rel=\"noopener nofollow\">AQCS Import Clearance System (online NOC)</a>; " +
    '<a href="https://aqcsindia.gov.in/pdfs/india-dogs-guidance.pdf" target="_blank" ' +
    "rel=\"noopener nofollow\">India dog import guidance (PDF)</a>. Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-india.html\">bringing a pet from India</a>.</p>",
  sections: [
    { h: "The timeline — Thailand to India", html:
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">6+ weeks before</th>' +
      '<td>ISO microchip; rabies and core vaccinations current</td>' +
      '<td>Thai vet</td></tr>' +
      '<tr><th scope="row">&ge;7 working days before arrival</th>' +
      '<td>Apply online for <strong>Advance NOC</strong> with vaccination records, microchip proof, health certificate draft and flight details</td>' +
      '<td>AQCS online portal</td></tr>' +
      '<tr><th scope="row">&ge;15 days before export</th>' +
      '<td>Apply for Thai <a href="/take-pet-out-of-thailand/export-permit-thailand-dld.html">DLD export permit</a> (form 1/1) with AQCS requirements attached</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">Within 10 days of departure</th>' +
      '<td>Final health examination; DLD export health certificate matching AQCS Annex format</td>' +
      '<td>DLD AQS + vet</td></tr>' +
      '<tr><th scope="row">2+ weeks before</th>' +
      '<td>Book Bangkok&ndash;India flight (often via direct or Gulf connection); confirm pet routing</td>' +
      '<td>Airline</td></tr>' +
      '<tr><th scope="row">Arrival in India</th>' +
      '<td>Physical examination at AQCS station at port of entry; Provisional Quarantine Clearance issued if compliant</td>' +
      '<td>AQCS</td></tr>' +
      '</tbody></table></div>' },
    { h: "Thai-side export documents", html: DLD_EXPORT_TABLE + THAI_SIDE },
    { h: "Approved Indian arrival ports", html:
      "<p>AQCS FAQ lists pet entry through <strong>Delhi, Mumbai, Chennai, Kolkata, " +
      "Bangalore and Hyderabad</strong>. After landing, the owner must bring the pet " +
      "and original documents to the quarantine station for clinical examination.</p>" +
      "<p>If the pet was previously exported from India with an AQCS certificate, check " +
      "whether your case qualifies as <strong>re-import</strong> &mdash; different " +
      "documentation may apply.</p>" },
    { h: "Common mistakes", html: EXPORT_FAILS +
      "<ul>" +
      "<li><strong>Advance NOC too late</strong> &mdash; apply at least seven working days before arrival.</li>" +
      "<li><strong>Wrong arrival airport</strong> &mdash; not every Indian airport has AQCS pet clearance.</li>" +
      "<li><strong>Health certificate format mismatch</strong> &mdash; use the AQCS Annex veterinary health certificate template.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Does India require a rabies titer test for a pet from Thailand?",
     "<p>India's current Advance NOC requirements should be confirmed on the AQCS portal. Thailand is not rabies-free. Upload all vaccination records with your online application and confirm with AQCS before you travel.</p>"],
    ["Which authority handles pet import into India?",
     "<p>AQCS (Animal Quarantine and Certification Services). Apply for Advance NOC online and present the pet at the quarantine station at your arrival airport.</p>"],
    ["How far in advance should I apply for the Advance NOC?",
     "<p>At least seven working days before arrival. Processing charges apply (currently ₹1,000 per application per AQCS FAQ — confirm current fee).</p>"],
    ["Can I fly Bangkok to India with a pet in cabin?",
     "<p>Depends on airline and routing. Some sectors require cargo. Confirm for each leg before booking.</p>"],
    ["When should I apply for the Thai DLD export permit?",
     "<p>At least 15 days before export, with AQCS Advance NOC application already underway and vaccinations current.</p>"]
  ]
}));

/* ---------------- PHILIPPINES ---------------- */
pages.push(exp({
  slug: "to-philippines", crumb: "To the Philippines",
  title: "Export a Pet from Thailand to the Philippines (BAI & DLD 2026) | PattayaPets",
  desc: "Thailand to Philippines pet export: BAI SPSIC timeline, IVHC requirements, " +
    "DLD export checklist and Manila arrival steps.",
  h1: "Taking a pet from Thailand to the Philippines",
  lede: "Manila is a common destination for Pattaya expats returning home. You need a " +
    "BAI <strong>SPSIC</strong> before the pet leaves Thailand &mdash; valid " +
    "<strong>60 days</strong> &mdash; plus the standard DLD export on the Thai side.",
  officialExtra:
    "<p><strong>Philippines sources:</strong> " +
    '<a href="https://www.bai.gov.ph/Stakeholders/PetImport" target="_blank" ' +
    "rel=\"noopener nofollow\">BAI &mdash; pet import procedures</a>; SPSIC application " +
    "via the BAI online portal (see BAI site for current link). Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-philippines.html\">bringing a pet from the Philippines</a>.</p>",
  sections: [
    { h: "The timeline — Thailand to the Philippines", html:
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">6+ weeks before</th>' +
      '<td>ISO microchip; rabies and core vaccinations (dogs: DHLPPi; cats: panleukopenia)</td>' +
      '<td>Thai vet</td></tr>' +
      '<tr><th scope="row">4&ndash;6 weeks before</th>' +
      '<td>Apply online for BAI <strong>SPSIC</strong> (valid 60 days; max 3 pets per application)</td>' +
      '<td>BAI online portal</td></tr>' +
      '<tr><th scope="row">&ge;15 days before export</th>' +
      '<td>Apply for Thai <a href="/take-pet-out-of-thailand/export-permit-thailand-dld.html">DLD export permit</a> (form 1/1) with BAI conditions attached</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">Within 10 days of departure</th>' +
      '<td>International veterinary health certificate (IVHC) endorsed for export from Thailand</td>' +
      '<td>DLD AQS + vet</td></tr>' +
      '<tr><th scope="row">2+ weeks before</th>' +
      '<td>Book Bangkok&ndash;Manila flight; confirm cabin, hold or cargo</td>' +
      '<td>Airline</td></tr>' +
      '<tr><th scope="row">Arrival in the Philippines</th>' +
      '<td>Present SPSIC, IVHC and vaccination records to BAI at port of entry</td>' +
      '<td>BAI</td></tr>' +
      '</tbody></table></div>' },
    { h: "Thai-side export documents", html: DLD_EXPORT_TABLE + THAI_SIDE },
    { h: "What BAI requires on the SPSIC application", html:
      "<p>BAI publishes the current checklist at " +
      '<a href="https://www.bai.gov.ph/Stakeholders/PetImport" target="_blank" rel="noopener nofollow">' +
      "bai.gov.ph</a>. Typically upload (PDF/JPG, &lt;5&nbsp;MB each):</p>" +
      "<ul>" +
      "<li>Proof of ISO microchip implantation.</li>" +
      "<li>Vaccination and antiparasitic records (rabies at least 14 days before travel).</li>" +
      "<li>Photograph of the pet.</li>" +
      "<li>Notarized Affidavit of Undertaking (foreign importers: Annex C format).</li>" +
      "<li>Pet at least <strong>4 months (120 days)</strong> old.</li>" +
      "</ul>" +
      "<p>The approved SPSIC must exist <strong>before</strong> the pet leaves Thailand. " +
      "An SPSIC issued after departure is invalid. The IVHC must be issued within " +
      "<strong>10 calendar days</strong> before export and match the SPSIC details exactly.</p>" },
    { h: "Common mistakes", html: EXPORT_FAILS +
      "<ul>" +
      "<li><strong>SPSIC applied after departure date</strong> &mdash; automatic invalidation.</li>" +
      "<li><strong>IVHC outside the 10-day window</strong> or details not matching the SPSIC.</li>" +
      "<li><strong>Rabies too recent</strong> &mdash; BAI requires at least 14 days since vaccination.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Does the Philippines require a rabies titer test from Thailand?",
     "<p>BAI's current SPSIC requirements should be confirmed on the BAI portal. Thailand is not rabies-free. Upload full vaccination records with your application.</p>"],
    ["Who issues the Philippine import permit?",
     "<p>The Bureau of Animal Industry (BAI) via the online SPSIC system. Apply before the pet leaves Thailand — validity is 60 days.</p>"],
    ["How old must my pet be to enter the Philippines?",
     "<p>At least 4 months (120 days) at the time of SPSIC application, per BAI guidance.</p>"],
    ["Are Bangkok–Manila flights pet-friendly?",
     "<p>Several carriers fly the route. Confirm cabin, checked baggage or cargo for your pet's size before booking.</p>"],
    ["When should I apply for the Thai DLD export permit?",
     "<p>At least 15 days before export, with an approved SPSIC already in hand and the IVHC timeline aligned.</p>"]
  ]
}));

/* ---------------- CHINA ---------------- */
pages.push(exp({
  slug: "to-china", crumb: "To China",
  title: "Export a Pet from Thailand to China (GACC & DLD 2026) | PattayaPets",
  desc: "Thailand to China pet export: GACC titer and quarantine rules, two-rabies-vaccination " +
    "timeline, DLD export checklist and designated ports.",
  h1: "Taking a pet from Thailand to China",
  lede: "China&rsquo;s GACC rules (Announcement No.&nbsp;5, 2019) classify Thailand as " +
    "<strong>non-designated</strong>. Without a valid rabies antibody test from a " +
    "recognised lab, expect <strong>30 days quarantine</strong> at a designated port.",
  officialExtra:
    "<p><strong>China sources:</strong> " +
    '<a href="https://english.beijing.gov.cn/latest/lawsandpolicies/202104/t20210407_2346645.html" ' +
    'target="_blank" rel="noopener nofollow">GACC Announcement No.&nbsp;5 (2019) &mdash; ' +
    "pet entry (English reference)</a>; " +
    '<a href="https://english.shanghai.gov.cn/en-KeepingAPetInShanghai/20240927/988d600b49964546b41d3c342e4ebdb2.html" ' +
    'target="_blank" rel="noopener nofollow">Shanghai pet entry guide</a>. Import mirror: ' +
    "<a href=\"/bring-pet-to-thailand/from-china.html\">bringing a pet from China</a>.</p>",
  sections: [
    { h: "The timeline — Thailand to China", html:
      "<p>Thailand is non-designated under GACC rules. To avoid 30-day quarantine you " +
      "typically need two rabies vaccinations and a recognised-laboratory titer test.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">3+ months before</th>' +
      '<td>ISO microchip; first rabies vaccination</td>' +
      '<td>Thai vet</td></tr>' +
      '<tr><th scope="row">&ge;30 days later</th>' +
      '<td>Second rabies vaccination; blood sample for rabies antibody test (&ge; 0.5 IU/ml at GACC-recognised lab)</td>' +
      '<td>Thai vet + lab</td></tr>' +
      '<tr><th scope="row">6+ weeks before</th>' +
      '<td>Confirm destination city port has quarantine facilities if waiver uncertain</td>' +
      '<td>GACC / agent</td></tr>' +
      '<tr><th scope="row">&ge;15 days before export</th>' +
      '<td>Apply for Thai <a href="/take-pet-out-of-thailand/export-permit-thailand-dld.html">DLD export permit</a> (form 1/1) with GACC requirements attached</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">Within 14 days of arrival</th>' +
      '<td>Official export health certificate from Thailand (government-endorsed)</td>' +
      '<td>DLD AQS + vet</td></tr>' +
      '<tr><th scope="row">On arrival</th>' +
      '<td>Declare pet to customs; microchip scan; on-site quarantine inspection</td>' +
      '<td>GACC customs</td></tr>' +
      '</tbody></table></div>' +
      "<p><strong>One pet per person per entry</strong> under GACC rules.</p>" },
    { h: "Thai-side export documents", html: DLD_EXPORT_TABLE + THAI_SIDE },
    { h: "Quarantine waiver vs mandatory quarantine", html:
      "<p>GACC classifies origin countries into designated and non-designated. Thailand " +
      "is non-designated. Pets that meet all waiver conditions (microchip, two rabies " +
      "vaccinations, valid titer from a recognised laboratory, official health certificate " +
      "within 14 days, successful on-site inspection) may enter without the 30-day " +
      "isolation period.</p>" +
      "<p>If waiver conditions are not met, the pet must enter through a port with " +
      "<strong>quarantine facilities</strong> (Beijing and Shanghai are commonly used) " +
      "and complete <strong>30 days</strong> at a customs-designated station. Pets arriving " +
      "at ports without quarantine kennels when isolation is required may be returned or " +
      "worse &mdash; confirm your destination port with GACC and an experienced agent.</p>" +
      "<p>A specialist <a href=\"/pet-relocation/\">pet relocation agent</a> is strongly " +
      "recommended on this corridor.</p>" },
    { h: "Common mistakes", html: EXPORT_FAILS +
      "<ul>" +
      "<li><strong>Only one rabies vaccination</strong> &mdash; GACC waiver typically requires two, 30+ days apart.</li>" +
      "<li><strong>Titer from unrecognised lab</strong> &mdash; check GACC&rsquo;s current approved laboratory list.</li>" +
      "<li><strong>Wrong arrival city</strong> &mdash; not every Chinese airport has quarantine facilities.</li>" +
      "<li><strong>Two pets, one person</strong> &mdash; GACC allows one dog or cat per person per entry.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Is pet import into China complicated?",
     "<p>It is formal and city-specific. GACC Announcement No. 5 (2019) sets the framework: microchip, vaccinations, possible titer test, health certificate within 14 days, and customs declaration on arrival.</p>"],
    ["Which Chinese authority handles pet import?",
     "<p>The General Administration of Customs (GACC) at your port of entry, with local animal quarantine inspection.</p>"],
    ["Will my pet be quarantined in China from Thailand?",
     "<p>If you cannot meet non-designated country waiver conditions (including the rabies antibody test from a recognised lab), expect 30 days quarantine at a designated facility. Plan the titer test months ahead.</p>"],
    ["How many pets can I bring into China?",
     "<p>One dog or cat per person per entry under GACC rules.</p>"],
    ["When should I apply for the Thai DLD export permit?",
     "<p>At least 15 days before export, once GACC-side requirements (vaccinations, titer if needed) are already satisfied.</p>"]
  ]
}));

/* ---------------- SOUTH AFRICA ---------------- */
pages.push(exp({
  slug: "to-south-africa", crumb: "To South Africa",
  title: "Export a Pet from Thailand to South Africa (DALRRD & DLD 2026) | PattayaPets",
  desc: "Thailand to South Africa pet export: DALRRD import permit, dog quarantine, " +
    "five pre-import blood tests, manifest cargo rules and DLD export timeline.",
  h1: "Taking a pet from Thailand to South Africa",
  lede: "Thailand is <strong>not</strong> on South Africa&rsquo;s quarantine-exempt list. " +
    "Dogs normally face <strong>state quarantine on arrival</strong>, five pre-import blood " +
    "tests, and entry only as <strong>manifest cargo</strong> via Johannesburg or Cape Town.",
  officialExtra:
    "<p><strong>South Africa sources:</strong> " +
    '<a href="https://www.gov.za/services/import/import-animals-and-animal-products" ' +
    'target="_blank" rel="noopener nofollow">gov.za &mdash; import animals and animal products</a> ' +
    "(contact <strong>VetPermits@Dalrrd.gov.za</strong> for current VIP forms and fees); " +
    '<a href="https://dirco.gov.za/newyork/wp-content/uploads/sites/77/2025/04/Importing-cats-and-dogs-to-SA-subject-to-quarantine.pdf" ' +
    'target="_blank" rel="noopener nofollow">quarantine import application form (PDF)</a>. ' +
    "Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-south-africa.html\">bringing a pet from South Africa</a>.</p>",
  sections: [
    { h: "The timeline — Thailand to South Africa", html:
      "<p>DALRRD asks for permit applications at least <strong>four weeks</strong> before " +
      "arrival; processing takes <strong>5&ndash;10 working days</strong> if approved. " +
      "Dogs from Thailand require quarantine booking as part of the permit application.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">3+ months before</th>' +
      '<td>Email DALRRD for current requirements; confirm Thailand is still non-quarantine-exempt for dogs</td>' +
      '<td>DALRRD (VetPermits@Dalrrd.gov.za)</td></tr>' +
      '<tr><th scope="row">6&ndash;8 weeks before</th>' +
      '<td>Apply for <strong>Veterinary Import Permit</strong> with proof of payment; book quarantine (dogs) at Kempton Park or Milnerton</td>' +
      '<td>DALRRD Permit Office</td></tr>' +
      '<tr><th scope="row">Within 30 days of export</th>' +
      '<td>Dogs: blood tests for Babesia gibsoni, Brucella canis, Dirofilaria immitis, Trypanosoma evansi and Leishmania (all negative)</td>' +
      '<td>Approved laboratory</td></tr>' +
      '<tr><th scope="row">30+ days before import (primary rabies)</th>' +
      '<td>Valid rabies vaccination (primary: 30 days&ndash;12 months before import; booster within validity)</td>' +
      '<td>Thai vet</td></tr>' +
      '<tr><th scope="row">&ge;15 days before export</th>' +
      '<td>Apply for Thai <a href="/take-pet-out-of-thailand/export-permit-thailand-dld.html">DLD export permit</a> (form 1/1) with DALRRD VIP attached</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">Within 10 days of departure</th>' +
      '<td>Government-endorsed veterinary health certificate on DALRRD specimen format</td>' +
      '<td>DLD AQS + vet</td></tr>' +
      '<tr><th scope="row">Arrival</th>' +
      '<td>Manifest cargo to OR Tambo (Johannesburg) or Cape Town <strong>cargo terminal</strong>; dog to state quarantine if required</td>' +
      '<td>DALRRD import control</td></tr>' +
      '</tbody></table></div>' },
    { h: "Thai-side export documents", html: DLD_EXPORT_TABLE + THAI_SIDE },
    { h: "What DALRRD requires (verify before you start)", html:
      "<p>DALRRD&rsquo;s published information document (June 2022) specifies, among other things:</p>" +
      "<ul>" +
      "<li><strong>Original Veterinary Import Permit</strong> issued with the permit application.</li>" +
      "<li><strong>ISO 11784/11785 microchip</strong> (tattoos not accepted).</li>" +
      "<li><strong>Manifest cargo only</strong> &mdash; not excess baggage; inspection at the " +
      "<strong>cargo terminal</strong>, not the passenger terminal.</li>" +
      "<li><strong>Dogs from non-exempt countries</strong> (including Thailand) are quarantined on arrival; " +
      "entry via OR Tambo or Cape Town only for quarantined dogs.</li>" +
      "<li><strong>Cats</strong> are not routinely quarantined if the VIP, health certificate and " +
      "rabies certificate are complete on arrival &mdash; but missing originals can trigger holding.</li>" +
      "<li><strong>Dogs:</strong> five negative blood tests within 30 days of import; laboratory report in English.</li>" +
      "<li><strong>Health certificate</strong> endorsed by the exporting country&rsquo;s government veterinarian " +
      "within <strong>10 days</strong> of departure.</li>" +
      "</ul>" +
      "<p>Rules change &mdash; email <strong>VetPermits@Dalrrd.gov.za</strong> for the current VIP, " +
      "fee and health-certificate template before you commit to dates.</p>" },
    { h: "Common mistakes", html: EXPORT_FAILS +
      "<ul>" +
      "<li><strong>Applying for the VIP too late</strong> &mdash; allow four weeks minimum plus 5&ndash;10 working days processing.</li>" +
      "<li><strong>Passenger-terminal arrival</strong> &mdash; DALRRD inspects at cargo terminals; pets must travel as manifest cargo.</li>" +
      "<li><strong>Skipping dog blood tests</strong> &mdash; all five must be negative within 30 days of import.</li>" +
      "<li><strong>No quarantine reservation</strong> &mdash; required for dogs from Thailand when applying for the permit.</li>" +
      "<li><strong>Wrong airport</strong> &mdash; quarantined dogs enter only via Johannesburg or Cape Town.</li>" +
      "</ul>" +
      "<p>A specialist <a href=\"/pet-relocation/\">pet relocation agent</a> experienced in " +
      "the South Africa route is strongly recommended.</p>" }
  ],
  faqs: [
    ["Does South Africa require a rabies titer test from Thailand?",
     "<p>DALRRD's published dog import rules focus on five specific disease blood tests (Babesia, Brucella, heartworm, Trypanosoma, Leishmania) rather than a rabies titer. Rabies vaccination timing rules apply separately. Confirm the current VIP requirements with VetPermits@Dalrrd.gov.za.</p>"],
    ["Who issues the South African import permit?",
     "<p>DALRRD Directorate Animal Health Permit Office in Pretoria. Apply with proof of payment to VetPermits@Dalrrd.gov.za at least four weeks before arrival.</p>"],
    ["Will my dog be quarantined in South Africa from Thailand?",
     "<p>Yes — Thailand is not on South Africa's quarantine-exempt country list for dogs. Book quarantine at Kempton Park (Johannesburg) or Milnerton (Cape Town) when applying for the import permit.</p>"],
    ["Can my pet fly in the cabin to South Africa?",
     "<p>DALRRD allows cabin travel if the airline permits it, but the pet must still be registered as manifest cargo and inspected at the cargo terminal on landing. Confirm with your airline and agent.</p>"],
    ["When should I apply for the Thai DLD export permit?",
     "<p>At least 15 days before export, once the DALRRD import permit is issued and dog blood tests (if applicable) are complete.</p>"]
  ]
}));

module.exports = pages;
