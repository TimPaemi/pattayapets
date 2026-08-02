"use strict";
/* More destination guides for the "Taking a pet out of Thailand" cluster.
   Full parity with the import cluster's country pages. */

const { article } = require("../guidekit.js");
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
  "procedures, destination-country requirements and airline policies &mdash; change " +
  "without notice. Use this as orientation, then confirm every current requirement " +
  "with the DLD and the destination country's authority before booking.";

const OFFICIAL =
  "<p><strong>Official sources to verify against:</strong> " +
  claimLink("TH-EXPORT-SEQUENCE-2025-10", "DLD Region 9 export procedure") + "; " +
  "<a href=\"https://www.gov.uk/bring-pet-to-great-britain\" target=\"_blank\" rel=\"noopener\">" +
  "UK pet travel</a>; " +
  "<a href=\"https://www.cdc.gov/importation/bringing-an-animal-into-the-us/index.html\" " +
  "target=\"_blank\" rel=\"noopener\">CDC animal import (USA)</a>; " +
  "<a href=\"https://food.ec.europa.eu/animals/live-animal-movements/dogs-cats-and-ferrets/bringing-pet-eu-non-eu-country_en\" target=\"_blank\" " +
  "rel=\"noopener\">EU pet movement</a>; " +
  "<a href=\"https://www.maff.go.jp/aqs/english/\" target=\"_blank\" rel=\"noopener\">" +
  "Japan MAFF Animal Quarantine</a>; " +
  "<a href=\"https://avs.nparks.gov.sg/pets/importing-exporting-a-pet/import/dogs-and-cats/\" " +
  "target=\"_blank\" rel=\"noopener\">Singapore AVS</a>; " +
  "<a href=\"https://moccae.gov.ae/en/services/import-permit-pets\" " +
  "target=\"_blank\" rel=\"noopener\">UAE MOCCAE pet import</a>; " +
  "<a href=\"https://www.agriculture.gov.au/biosecurity-trade/cats-dogs\" target=\"_blank\" " +
  "rel=\"noopener\">Australia DAFF</a>; " +
  "<a href=\"https://www.mpi.govt.nz/bring-send-to-nz/pets-travelling-to-nz/bringing-cats-and-dogs-to-nz\" target=\"_blank\" " +
  "rel=\"noopener\">New Zealand MPI</a>; " +
  "<a href=\"https://aqcsindia.gov.in/Home/ImportExportPets\" target=\"_blank\" " +
  "rel=\"noopener\">India AQCS</a>; " +
  "<a href=\"https://www.bai.gov.ph/Stakeholders/PetImport\" target=\"_blank\" " +
  "rel=\"noopener\">Philippines BAI</a>; " +
  "<a href=\"https://english.beijing.gov.cn/latest/lawsandpolicies/202104/t20210407_2346645.html\" " +
  "target=\"_blank\" rel=\"noopener\">China GACC pet entry</a>; " +
  "<a href=\"https://www.gov.za/services/import/import-animals-and-animal-products\" " +
  "target=\"_blank\" rel=\"noopener\">South Africa DALRRD import</a>; " +
  "<a href=\"https://inspection.canada.ca/en/importing-food-plants-animals/pets\" " +
  "target=\"_blank\" rel=\"noopener\">Canada CFIA</a>; " +
  "<a href=\"https://www.blv.admin.ch/en/travelling-with-dogs-cats-and-ferrets\" " +
  "target=\"_blank\" rel=\"noopener\">Switzerland FSVO</a>.</p>";

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
  "from an EU-approved laboratory and with a result of at least 0.5 IU/ml &mdash; with " +
  "sampling at least <strong>90 days before certificate issue</strong>. An EU third-country animal health " +
  "certificate completes the paperwork.</p>" +
  "<p>For the shared EU rules that apply to every member state, see our " +
  "<a href=\"/take-pet-out-of-thailand/to-eu.html\">exporting a pet to the EU</a> guide. " +
  claimLink("EU-RABIES-TITER-2026-08", "Commission source") + ".</p>";

const THAI_SIDE =
  "<p>All of this sits on top of the Thai " +
  "<a href=\"/take-pet-out-of-thailand/export-process.html\">export process</a> " +
  "&mdash; the DLD health certificate and export permit &mdash; which your pet must " +
  "clear on the way out. The two sets of paperwork have to agree.</p>";

function exp(o) {
  var sections = attachImportMirrorLink((o.sections || []).slice(), o.slug);
  if (!o.skipRichness) {
    sections.push(REGULATED_EXPORT_FROM_PATTAYA);
    sections.push(REGULATED_EXPORT_RELOCATION);
  }
  sections.push({ h: "Official sources", html: (o.officialExtra || "") + OFFICIAL });
  return article({
    path: "/take-pet-out-of-thailand/" + o.slug + ".html",
    title: o.title, desc: o.desc, crumb: o.crumb, breadcrumbs: SUB,
    eyebrow: "Taking a pet out of Thailand &middot; By destination",
    h1: o.h1, lede: o.lede, verify: o.verify || VERIFY,
    updated: o.updated || "2026-06-01",
    noindex: !!o.noindex,
    sections: sections, faqs: rb.mergeFaqs(o.faqs, REGULATED_EXPORT_EXTRA_FAQS),
    related: o.related || expRelated(o.slug)
  });
}

const DLD_EXPORT_TABLE =
  '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
  '<th scope="col">Thai-side document</th><th scope="col">Notes</th></tr></thead><tbody>' +
  '<tr><th scope="row">Export application (form R1/1)</th><td>Ask the responsible departure-port AQS how and when to file. The reviewed current procedure establishes no universal email channel or 15-day deadline.</td></tr>' +
  '<tr><th scope="row">Destination import rules</th><td>Attach the destination authority&rsquo;s import requirements (NOC, import licence, SPSIC, etc.) so the Thai health certificate matches.</td></tr>' +
  '<tr><th scope="row">Identification, vaccinations and tests</th><td>Carry the records required by the destination and the responsible AQS.</td></tr>' +
  '<tr><th scope="row">Mandatory health examination</th><td>DLD requires examination no more than <strong>2&ndash;3 days before travel</strong>. If compliant, the station issues R9 and the health certificate. ' + claimLink("TH-EXPORT-SEQUENCE-2025-10", "DLD source") + '.</td></tr>' +
  '</tbody></table></div>';

const EXPORT_FAILS =
  "<ul>" +
  "<li><strong>Starting with Thailand only</strong> &mdash; destination import permits and tests are usually the long pole.</li>" +
  "<li><strong>Expired vaccinations</strong> &mdash; a lapsed rabies shot can void import clearance.</li>" +
  "<li><strong>Microchip mismatch</strong> across Thai export papers and destination import forms.</li>" +
  "<li><strong>Missing the final DLD examination</strong> &mdash; it must occur no more than 2&ndash;3 days before travel.</li>" +
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
    '<tr><th scope="row">At least 90 days after sampling</th>' +
    '<td>Earliest issue date for the animal health certificate under the checked non-listed-third-country route</td>' +
    '<td>EU Regulation 2026/131 framework</td></tr>' +
    '<tr><th scope="row">6&ndash;8 weeks before flight</th>' +
    '<td>Book pet on a route entering via a <strong>designated traveller point of entry</strong></td>' +
    '<td>Airline / agent</td></tr>' +
    '<tr><th scope="row">As the responsible AQS directs</th>' +
    '<td>File Thai DLD form R1/1 with the destination requirements as the responsible AQS directs; the reviewed procedure gives no universal 15-day deadline</td>' +
    '<td>DLD AQS</td></tr>' +
    '<tr><th scope="row">Within 10 days of entry</th>' +
    '<td><strong>EU animal health certificate</strong> for third-country entry completed and endorsed by Thai competent authority</td>' +
    '<td>DLD + official vet</td></tr>' +
    '<tr><th scope="row">Destination arrival</th>' +
    '<td>Present documents at designated entry point; customs / veterinary identity check</td>' +
    '<td>Border authority</td></tr>' +
    '</tbody></table></div>' +
    "<p>Shared EU rules: " +
    '<a href="/take-pet-out-of-thailand/to-eu.html">exporting a pet to the EU</a>. ' +
    claimLink("EU-RABIES-TITER-2026-08", "Titer source") + '; ' +
    claimLink("EU-NONCOMMERCIAL-ENTRY-2026-08", "Entry source") + '.</p>';
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
  "<li>Blood sample at least <strong>90 days before certificate issue</strong></li>" +
  "<li><strong>EU animal health certificate</strong> for non-commercial entry from a third country, endorsed by the exporting country&rsquo;s competent authority</li>" +
  "<li>Entry through a <strong>designated point of entry</strong></li>" +
  "</ul>";

const EU_TITER_TIP =
  '<div class="callout callout-tip"><div class="ch">Did the titer test before Thailand?</div>' +
  "<p>If you had the blood test done in Europe before moving and kept rabies vaccination " +
  "current, you may qualify for the re-entry exception &mdash; verify the passport record and continuous vaccination before you fly. " +
  claimLink("EU-RABIES-TITER-2026-08", "Commission source") + ".</p></div>";

const pages = [];

/* ---------------- GERMANY ---------------- */
pages.push(exp({
  slug: "to-germany", crumb: "To Germany",
  title: "Export Pet from Thailand to Germany (2026) | PattayaPets",
  desc: "Thailand to Germany pet export: EU titer test, 90-day pre-certificate rule, entry " +
    "certificate, designated entry points and DLD export timeline.",
  h1: "Taking a pet from Thailand to Germany",
  lede: "Germany follows standard EU rules for pets from non-listed third countries. " +
    "Thailand triggers the <strong>rabies titer test</strong> and the current " +
    "<strong>90-day pre-certificate timing gate</strong>.",
  officialExtra:
    "<p><strong>German / EU sources:</strong> " +
    "<a href=\"https://www.bmel.de/EN/topics/animals/pets-and-zoo-animals/pets-entry-regulation.html\" " +
    "target=\"_blank\" rel=\"noopener\">BMELH entry regulation</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener\">EU pet movement</a>. " +
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
      '<tr><th scope="row">At least 90 days after sampling</th>' +
      '<td>Earliest issue date for the animal health certificate under the checked non-listed-third-country route</td>' +
      '<td>EU Regulation 2026/131 framework</td></tr>' +
      '<tr><th scope="row">6&ndash;8 weeks before flight</th>' +
      '<td>Book pet on a route entering Germany via a <strong>designated traveller point of entry</strong></td>' +
      '<td>Airline / agent</td></tr>' +
      '<tr><th scope="row">As the responsible AQS directs</th>' +
      '<td>File Thai DLD form R1/1 with the destination requirements as the responsible AQS directs; the reviewed procedure gives no universal 15-day deadline</td>' +
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
      "<li>Blood sample at least <strong>90 days before certificate issue</strong></li>" +
      "<li><strong>EU animal health certificate</strong> for non-commercial entry from a third country, endorsed by the exporting country&rsquo;s competent authority</li>" +
      "<li>Entry through a <strong>designated point of entry</strong> listed for Germany</li>" +
      "</ul>" +
      "<p>Finland, Ireland, Malta and parts of the UK keep extra tapeworm rules for dogs " +
      "&mdash; Germany itself does not, but confirm if you connect through those countries.</p>" +
      '<div class="callout callout-tip"><div class="ch">Did the titer test before Thailand?</div>' +
      "<p>If you had the blood test done in Germany (or another EU country) before moving " +
      "and kept rabies vaccination current, you may qualify for the documented re-entry exception &mdash; " +
      "verify the passport record and vaccination continuity before you fly. " +
      claimLink("EU-RABIES-TITER-2026-08", "Commission source") + ".</p></div>" },
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
    ["Can my pet avoid the standard titer timing into Germany?",
     "<p>A satisfactory test recorded in the EU passport before departure can qualify for the re-entry exception when rabies vaccination remains continuously current. Otherwise the sample must be at least 90 days before certificate issue. " + claimLink("EU-RABIES-TITER-2026-08", "Commission source") + ".</p>"],
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
  title: "Export Pet from Thailand to Sweden (2026) | PattayaPets",
  desc: "Thailand to Sweden pet export: EU titer test, 90-day pre-certificate rule, entry " +
    "certificate, Jordbruksverket rules and DLD export timeline.",
  h1: "Taking a pet from Thailand to Sweden",
  lede: "Many of Pattaya's Swedish residents eventually head home with a pet. " +
    "Sweden applies the standard EU entry rules &mdash; plan in quarters, not weeks.",
  officialExtra:
    "<p><strong>Swedish / EU sources:</strong> " +
    "<a href=\"https://jordbruksverket.se/languages/english/swedish-board-of-agriculture/animals/pets---trade-and-travel/movement-of-dogs-cats-and-ferrets-to-sweden\" " +
    "target=\"_blank\" rel=\"noopener\">Jordbruksverket pet travel</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener\">EU pet movement</a>. " +
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
     "<p>If a new titer is needed, the sample must be at least 90 days before certificate issue. A qualifying pre-departure test recorded in the EU passport may preserve the re-entry exception when rabies cover remains continuous. " + claimLink("EU-RABIES-TITER-2026-08", "Commission source") + ".</p>"],
    ["Does Sweden require tapeworm treatment?",
     "<p>Sweden does not currently apply the special tapeworm-treatment rule. Confirm the current position with Jordbruksverket, as rules change.</p>"],
    ["Is the EU pet passport enough to enter Sweden from Thailand?",
     "<p>No. Coming from Thailand you need an EU third-country entry health certificate endorsed on the Thai side, not just a pet passport issued years ago in Sweden.</p>"],
    ["Can my pet avoid the standard titer timing into Sweden?",
     "<p>Only if a valid rabies titer test is already in place and rabies vaccination has been kept current without a gap.</p>"],
    ["How does this differ from the EU hub page?",
     "<p>The veterinary rules are the same EU-wide; this page adds Sweden-specific authority notes. See also <a href=\"/take-pet-out-of-thailand/to-eu.html\">export to the EU</a>.</p>"]
  ]
}));

/* ---------------- NORWAY ---------------- */
pages.push(exp({
  slug: "to-norway", crumb: "To Norway",
  title: "Export Pet from Thailand to Norway (2026) | PattayaPets",
  desc: "Thailand to Norway pet export: rabies titer test, 90-day pre-certificate rule, Mattilsynet " +
    "entry rules, tapeworm treatment for dogs and DLD export timeline.",
  h1: "Taking a pet from Thailand to Norway",
  lede: "Norway is not in the EU, but it applies the EU pet-travel rules &mdash; " +
    "with one extra requirement for dogs.",
  officialExtra:
    "<p><strong>Norwegian sources:</strong> " +
    "<a href=\"https://www.mattilsynet.no/en/animals/guide-travelling-with-pets-to-norway\" " +
    "target=\"_blank\" rel=\"noopener\">Mattilsynet pet import</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener\">EU pet movement</a> (Norway applies EU-aligned rules). " +
    "Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-norway.html\">bringing a pet from Norway</a>.</p>",
  sections: euExportSections({
    routingIntro: "Norway follows EU-style third-country rules; a new titer sample must precede certificate issue by at least 90 days.",
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
     "<p>Not greatly. Norway applies the EU-style titer and health-certificate framework, including the checked 90-day pre-certificate timing for a new test, plus the tapeworm step for dogs.</p>"],
    ["Is the EU pet passport enough from Thailand?",
     "<p>No. You need a third-country entry health certificate endorsed on the Thai side.</p>"],
    ["Can my pet avoid the standard titer timing?",
     "<p>Only with a valid pre-existing rabies titer test and current rabies vaccination.</p>"],
    ["How early should I start?",
     "<p>Several months ahead if the titer test still has to be done from Pattaya.</p>"]
  ]
}));

/* ---------------- DENMARK ---------------- */
pages.push(exp({
  slug: "to-denmark", crumb: "To Denmark",
  title: "Export Pet from Thailand to Denmark (2026) | PattayaPets",
  desc: "Thailand to Denmark pet export: EU titer test, 90-day pre-certificate rule, entry " +
    "certificate, Danish authority rules and DLD export timeline.",
  h1: "Taking a pet from Thailand to Denmark",
  lede: "Denmark applies the standard EU entry rules for a pet arriving from " +
    "Thailand, so plan the timeline around the titer test.",
  officialExtra:
    "<p><strong>Danish / EU sources:</strong> " +
    "<a href=\"https://en.foedevarestyrelsen.dk/animals/travelling-with-pet-animals\" target=\"_blank\" " +
    "rel=\"noopener\">Danish Veterinary and Food Administration</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener\">EU pet movement</a>. " +
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
    ["Can the standard titer timing be avoided for Denmark?",
     "<p>A qualifying test recorded before EU departure can preserve the re-entry exception when rabies vaccination remains continuously current. Otherwise the sample must be at least 90 days before certificate issue. " + claimLink("EU-RABIES-TITER-2026-08", "Commission source") + ".</p>"],
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
  title: "Export Pet from Thailand to Finland (2026) | PattayaPets",
  desc: "Thailand to Finland pet export: rabies titer, 90-day wait, Helsinki-Vantaa entry, " +
    "the 24-120h tapeworm window and Finland's four-week dog register deadline.",
  h1: "Taking a pet from Thailand to Finland",
  lede: "Finland is the most straightforward EU country to fly a pet into from Bangkok, " +
    "because there is a nonstop and because an accompanied pet clears at the Customs red " +
    "channel with no appointment and no inspection fee. The two things that catch people " +
    "out are which clock the tapeworm window runs on, and a registration deadline that " +
    "only starts once you have landed.",
  officialExtra:
    "<p><strong>Finnish / EU sources:</strong> " +
    "<a href=\"https://www.ruokavirasto.fi/en/themes/import-and-export/import/animals-and-animal-products/animals-and-gametes/dogs-cats-and-ferrets/non-commercial-movement/\" " +
    "target=\"_blank\" rel=\"noopener\">Ruokavirasto, non-commercial movement</a>; " +
    "<a href=\"https://tulli.fi/en/restrictions/pets/travelling\" target=\"_blank\" " +
    "rel=\"noopener\">Finnish Customs (Tulli), travelling with pets</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener\">EU pet movement</a>. " +
    "Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-finland.html\">bringing a pet from Finland</a>.</p>",
  sections: euExportSections({
    routingIntro: "The titer test and the 90-day wait are the long pole. Everything else on the Finnish side is unusually light.",
    reqHeading: "What Finland requires that the rest of the EU does not",
    reqHtml: EU_ENTRY_REQ_LIST +
      "<p><strong>Ruokavirasto</strong> (the Finnish Food Authority) writes the rules, but for a " +
      "pet arriving <em>with</em> you the border check is done by <strong>Tulli, Finnish " +
      "Customs</strong> &mdash; not by a border vet. You walk the red channel at " +
      "Helsinki-Vantaa, show the paperwork, and that is the whole procedure. " +
      "<strong>No appointment, no pre-notification and no inspection fee.</strong></p>" +
      "<p>Finland is one of only four EU states (with Ireland, Malta and Northern Ireland, " +
      "plus Norway) that may still require <strong>tapeworm treatment against " +
      "<em>Echinococcus multilocularis</em></strong>. Dogs only &mdash; cats and ferrets are " +
      "exempt. There are two different windows, and which one applies depends on whether " +
      "your pet is travelling with you:</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">How the pet travels</th><th scope="col">Tapeworm window</th><th scope="col">Border check</th></tr></thead><tbody>' +
      '<tr><th scope="row">With you, as cabin or checked baggage</th>' +
      '<td><strong>24 to 120 hours</strong> before arrival (1 to 5 days)</td>' +
      '<td>Tulli red channel. No fee, no booking.</td></tr>' +
      '<tr><th scope="row">Without you, as manifest cargo</th>' +
      '<td><strong>24 to 48 hours</strong> before arrival &mdash; a much tighter window</td>' +
      '<td>Border vet at the Finnair COOL cargo terminal, Vantaa. 166 EUR, TRACES notice required.</td></tr>' +
      '</tbody></table></div>' +
      "<p><strong>The clock runs to the moment your pet crosses the Finnish border, not to " +
      "the moment the plane leaves Bangkok.</strong> Ruokavirasto states this explicitly. On " +
      "a nonstop that distinction costs you about eleven hours; routed through the Gulf it " +
      "can be twenty or more, and it is the single most common reason a dog treated in " +
      "Pattaya arrives outside the window. Treat late, not early, and have the vet write " +
      "the <strong>date and the clock time</strong> on the certificate.</p>" +
      "<p><strong>Helsinki-Vantaa is the only airport in Finland</strong> a pet from a " +
      "non-EU country may enter through. There is also a trap in connecting flights: if " +
      "you route through another EU country and your pet is in the cabin, the compliance " +
      "check must happen <em>at the stopover</em>, not in Helsinki &mdash; and Ruokavirasto " +
      "warns that the stopover airport may not offer one unless you arrange it. A nonstop " +
      "removes the problem entirely.</p>" +
      "<p><strong>Finland has no quarantine facility.</strong> There is no holding kennel " +
      "to fix paperwork in. Ruokavirasto is blunt about the consequence: a non-compliant " +
      "animal is returned to Thailand at your cost, or euthanised. This is the reason to be " +
      "pedantic about the tapeworm timing rather than hopeful.</p>" +
      "<p><strong>After you land: the dog register.</strong> Every dog imported into Finland " +
      "must be entered in the national register <strong>within four weeks of arrival</strong>. " +
      "10 EUR online, 20 EUR on paper. An unregistered, unidentified dog attracts a penalty " +
      "from 300 EUR plus a municipal supervision fee. Cats and ferrets are exempt. Almost " +
      "nobody arrives knowing about this, because it is not an entry requirement &mdash; it is " +
      "an obligation that begins the day you get there.</p>" + EU_TITER_TIP,
    extraFails: "<ul>" +
      "<li><strong>Tapeworm treated against the departure time instead of the arrival time</strong> &mdash; the window closes on Finnish border crossing. Count backwards from landing.</li>" +
      "<li><strong>Treated too early to be safe</strong> &mdash; 120 hours sounds generous until a delay or a missed connection pushes arrival past it. A dog treated at the 24-hour end has slack; one treated at 120 hours has none.</li>" +
      "<li><strong>Missing clock time on the certificate</strong> &mdash; the date alone does not prove the window was met.</li>" +
      "<li><strong>Connecting through an EU airport with the pet in the cabin</strong> and assuming Helsinki will check it &mdash; the check belongs to the first EU country you land in.</li>" +
      "<li><strong>Forgetting the four-week register deadline</strong> once you have arrived and relaxed.</li>" +
      "</ul>"
  }),
  faqs: [
    ["When exactly should the tapeworm treatment be given?",
     "<p>Between 24 and 120 hours before your pet <em>arrives in Finland</em>, if it is travelling with you. Ruokavirasto counts from the border crossing, not from take-off. On the Bangkok nonstop, allow roughly eleven hours of flight plus your journey to the airport; treating the day before departure lands you comfortably inside the window. If your pet flies unaccompanied as cargo the window is tighter still, 24 to 48 hours.</p>"],
    ["Is there a nonstop flight from Bangkok to Helsinki?",
     "<p>Yes. Finnair operates a nonstop Bangkok to Helsinki service, currently on an A350, at roughly eleven hours. That is unusual among EU destinations and it matters for a pet: no transit hub, no second set of ground handling, and no stopover compliance check. Finnair quotes 120 to 130 EUR for a pet in the cabin (8 kg including the carrier) and 650 EUR in the hold. Confirm at booking that they will accept your pet in the hold on a Bangkok departure &mdash; policies are set by route and season.</p>"],
    ["Do I need to tell anyone in Finland that I am coming?",
     "<p>Not if your pet travels with you. There is no advance notice and no fee &mdash; you use the red channel at Customs on arrival. This is a real difference from Ireland, which requires you to file advance notice before you fly. If your pet travels as cargo without you, that changes: it becomes a commercial import needing a TRACES notification at least one working day ahead, and the inspection fee doubles if you skip it.</p>"],
    ["Does my cat need the tapeworm treatment?",
     "<p>No. The Echinococcus rule applies to dogs only. Cats and ferrets are exempt, and since 2026 cats are also outside Finland's registration requirement.</p>"],
    ["How does this differ from the EU hub page?",
     "<p>The rabies groundwork is EU-wide, but Finland's handling is not. Customs rather than a vet does the border check, there is no fee and no advance notice for an accompanied pet, Helsinki-Vantaa is the only airport, there is no quarantine facility anywhere in the country, and every imported dog must be registered within four weeks of landing. See <a href=\"/take-pet-out-of-thailand/to-eu.html\">export to the EU</a> for the shared groundwork.</p>"]
  ]
}));

/* ---------------- NETHERLANDS ---------------- */
pages.push(exp({
  slug: "to-netherlands", crumb: "To the Netherlands",
  title: "Thailand to Netherlands Pet Export (2026) | PattayaPets",
  desc: "Thailand to Netherlands pet export: EU titer test, 90-day pre-certificate rule, NVWA " +
    "entry rules, Amsterdam routing and DLD export timeline.",
  h1: "Taking a pet from Thailand to the Netherlands",
  lede: "The Netherlands applies the standard EU entry rules, and Amsterdam is a " +
    "convenient direct arrival point from Bangkok.",
  officialExtra:
    "<p><strong>Dutch / EU sources:</strong> " +
    "<a href=\"https://english.nvwa.nl/topics/animal-health/travelling-to-the-netherlands-with-your-dog-or-cat\" target=\"_blank\" " +
    "rel=\"noopener\">NVWA importing animals</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener\">EU pet movement</a>. " +
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
    ["Can the standard titer timing be avoided?",
     "<p>A satisfactory pre-departure test recorded in the EU passport can preserve the re-entry exception when rabies vaccination remains continuously current. Otherwise the sample must be at least 90 days before certificate issue. " + claimLink("EU-RABIES-TITER-2026-08", "Commission source") + ".</p>"],
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
  title: "Export Pet from Thailand to France (2026) | PattayaPets",
  desc: "Thailand to France pet export: EU titer test, 90-day pre-certificate rule, entry " +
    "certificate, Paris routing and DLD export timeline.",
  h1: "Taking a pet from Thailand to France",
  lede: "France applies the standard EU entry rules for a pet arriving from " +
    "Thailand, with Paris a common direct arrival point.",
  officialExtra:
    "<p><strong>French / EU sources:</strong> " +
    "<a href=\"https://mesdemarches.agriculture.gouv.fr/demarches/particulier/vivre-avec-un-animal-de-compagnie/article/voyager-hors-de-france-avec-un\" " +
    "target=\"_blank\" rel=\"noopener\">French Ministry of Agriculture pet travel</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener\">EU pet movement</a>. " +
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
     "<p>If a new titer is needed, the sample must be at least 90 days before certificate issue. A qualifying pre-departure test recorded in the EU passport may preserve the re-entry exception when rabies cover remains continuous. " + claimLink("EU-RABIES-TITER-2026-08", "Commission source") + ".</p>"],
    ["Does the EU pet passport cover entry from Thailand?",
     "<p>No. Coming from a non-listed country your pet needs an EU third-country entry health certificate. Confirm the current rules with the French authorities.</p>"],
    ["Can my pet avoid the standard titer timing?",
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
  title: "Export Pet from Thailand to Ireland (2026) | PattayaPets",
  desc: "Thailand to Ireland pet export: mandatory advance notice, six entry points, " +
    "wet-signature paperwork, no nonstop from Bangkok and Ireland's breed rules.",
  h1: "Taking a pet from Thailand to Ireland",
  lede: "Ireland runs the strictest arrivals process of any EU country covered here. " +
    "Advance notice is compulsory, only six ports and airports may be used, photocopied " +
    "paperwork is refused outright, and there is no nonstop from Bangkok &mdash; so the " +
    "hardest decision you will make is which airline carries your pet, not which forms " +
    "you file.",
  officialExtra:
    "<p><strong>Irish / EU sources:</strong> " +
    "<a href=\"http://www.pettravel.gov.ie/pets/dogscatsferrets/other/\" " +
    "target=\"_blank\" rel=\"noopener\">DAFM pet travel, non-listed countries</a> " +
    "(this is the page that covers Thailand, not the &ldquo;outside EU&rdquo; one); " +
    "<a href=\"https://www.gov.ie/en/department-of-agriculture-food-and-the-marine/publications/advance-notice/\" " +
    "target=\"_blank\" rel=\"noopener\">DAFM advance notice portal</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener\">EU pet movement</a>. " +
    "Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-ireland.html\">bringing a pet from Ireland</a>.</p>",
  sections: euExportSections({
    routingIntro: "The titer test sets your earliest departure date. After that, the flight routing is the hard part, because no aircraft flies Bangkok to Dublin without stopping.",
    reqHeading: "What Ireland requires that the rest of the EU does not",
    reqHtml: EU_ENTRY_REQ_LIST +
      "<p>The <strong>Department of Agriculture, Food and the Marine (DAFM)</strong> runs pet " +
      "entry, and it is materially stricter than most EU states on process rather than on " +
      "veterinary substance:</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">Requirement</th><th scope="col">Detail</th></tr></thead><tbody>' +
      '<tr><th scope="row">Advance notice</th>' +
      '<td><strong>Compulsory</strong> since 23 October 2023, filed through DAFM&rsquo;s online imports portal before you travel. Most EU countries ask nothing of an accompanied pet.</td></tr>' +
      '<tr><th scope="row">Points of entry</th>' +
      '<td>Six only: <strong>Dublin, Cork and Shannon airports; Dublin Port, Ringaskiddy and Rosslare Europort</strong>. There is no designated entry point on the land border, so arriving via Northern Ireland is not a route for a Thai-origin pet.</td></tr>' +
      '<tr><th scope="row">Paperwork format</th>' +
      '<td><strong>Originals only, stamped, wet signature.</strong> DAFM states that photocopies and digital printouts are not acceptable.</td></tr>' +
      '<tr><th scope="row">Tapeworm treatment</th>' +
      '<td>Praziquantel, by a vet, <strong>24 to 120 hours</strong> before scheduled arrival. Dogs only. The certificate needs the <strong>date and the clock time</strong>.</td></tr>' +
      '<tr><th scope="row">On arrival</th>' +
      '<td>You may not leave the airport or port until the compliance check is done. A per-animal fee applies; DAFM does not publish the amount.</td></tr>' +
      '</tbody></table></div>' +
      "<p><strong>There is no nonstop from Bangkok to Dublin</strong>, and this shapes the " +
      "whole trip. Your pet has to change aircraft somewhere, and the carrier you pick " +
      "decides whether it travels as checked baggage or as freight &mdash; which in turn " +
      "decides where in Dublin it is cleared and during which hours:</p>" +
      "<ul>" +
      "<li><strong>Qatar Airways via Doha</strong> is usually the cleanest. Qatar carries " +
      "dogs and cats in the hold as checked baggage and flies both Bangkok to Doha and Doha " +
      "to Dublin, so the animal stays on one carrier. <strong>The trap:</strong> Qatar does " +
      "not accept hold animals transferred in from another airline. A cheap Thai Airways or " +
      "Bangkok Airways feeder onto the Doha flight will break the chain and your pet will " +
      "not be loaded. Book the whole thing on one Qatar ticket.</li>" +
      "<li><strong>Emirates via Dubai</strong> only allows pets in the hold as baggage when " +
      "the journey <em>starts</em> in Dubai. Departing Bangkok it must go as manifest cargo, " +
      "which pushes clearance into Dublin&rsquo;s Border Control Post &mdash; office hours " +
      "Monday to Friday, and out-of-hours movements need written pre-approval before you " +
      "book the flight.</li>" +
      "<li><strong>Aer Lingus</strong> never carries pets in the cabin, and refuses " +
      "snub-nosed breeds and Ireland&rsquo;s restricted breeds in the hold too. Do not " +
      "assume the final leg into Dublin will take your dog.</li>" +
      "</ul>" +
      "<p><strong>Two Irish breed rules bite harder from Thailand than from anywhere else.</strong> " +
      "<strong>XL Bully type dogs cannot be imported at all</strong> &mdash; the ban took effect " +
      "on 1 October 2024 and the exemption window has closed. Separately, <strong>a dog with " +
      "cropped ears needs a Ministerial import licence</strong> under the Ear-Cropping of Dogs " +
      "Regulations 2023, and the licence is only granted where a vet removed the ear to treat " +
      "injury or disease. The rule catches dogs cropped before it came in and dogs cropped " +
      "abroad. Cropped Dobermans, Bully types and Great Danes are not unusual in Thailand, so " +
      "check your dog against this before you spend anything on a titer test. Ireland also " +
      "keeps ten <em>restricted</em> breeds &mdash; including the German Shepherd, Rottweiler, " +
      "Dobermann and Staffordshire Bull Terrier &mdash; which may be imported but must be " +
      "muzzled and led on a short leash in public by someone over sixteen.</p>" +
      "<p>One more thing that changed in 2026: an <strong>EU pet passport is now only valid " +
      "for an owner whose main residence is in the EU</strong>, including passports issued " +
      "before the change. An Irish citizen who has been living in Thailand can no longer " +
      "travel on an old Irish pet passport and needs the third-country health certificate.</p>" + EU_TITER_TIP,
    extraFails: "<ul>" +
      "<li><strong>No advance notice filed</strong> &mdash; Ireland requires it and most people arrive assuming EU means no paperwork on the destination side.</li>" +
      "<li><strong>Photocopied or reprinted certificates</strong> &mdash; DAFM wants originals with a wet signature. A scan emailed by your Thai vet is not enough.</li>" +
      "<li><strong>A mixed-airline itinerary through Doha</strong> &mdash; Qatar will not accept a hold animal handed over from another carrier.</li>" +
      "<li><strong>Booking a cargo arrival outside the Border Control Post&rsquo;s hours</strong> without written pre-approval.</li>" +
      "<li><strong>Buying a ticket for a cropped-ear dog or an XL Bully type</strong> before checking the breed rules &mdash; one needs a licence, the other cannot come at all.</li>" +
      "<li><strong>Missing clock time on the tapeworm entry</strong> &mdash; the date alone does not prove the 24 to 120 hour window.</li>" +
      "</ul>"
  }),
  faqs: [
    ["Is there a direct flight from Bangkok to Dublin?",
     "<p>No, and there is no sign of one. Every route connects, most often through Doha, Dubai, or a European hub. That makes the airline choice the critical decision: Qatar Airways will carry a pet in the hold on a single through-ticket via Doha, whereas an Emirates routing from Bangkok forces the animal into manifest cargo and a weekday-hours clearance at Dublin&rsquo;s Border Control Post.</p>"],
    ["Do I really have to file advance notice?",
     "<p>Yes. It has been compulsory since October 2023 and is filed through DAFM&rsquo;s online imports portal. File at least 24 hours before you travel, and in practice about a week ahead is what DAFM guidance leans toward. You also may not leave the airport or port on arrival until the compliance check has been carried out.</p>"],
    ["Can I bring my dog in through Northern Ireland or the UK?",
     "<p>Practically, no. A pet from a non-listed country such as Thailand may only enter through the six designated points, all of which are airports and seaports, and the health certificate has to be endorsed by an official at that point of entry. There is no designated entry point on the land border, so a dog driven down from Belfast has no lawful endorsement.</p>"],
    ["My dog has cropped ears. Is that a problem?",
     "<p>Yes, and it is worth resolving before you spend money on anything else. Ireland requires a Ministerial import licence for a dog with cropped ears, granted only where a vet removed the ear to treat injury or disease, and it applies regardless of where or when the cropping happened. Separately, XL Bully type dogs cannot be imported at all.</p>"],
    ["How does this differ from the EU hub page?",
     "<p>The rabies groundwork is EU-wide, but Ireland's arrival process is its own thing: compulsory advance notice, six permitted entry points, original wet-signature documents, breed rules that block some dogs outright, and no nonstop from Bangkok. See <a href=\"/take-pet-out-of-thailand/to-eu.html\">export to the EU</a> for the shared groundwork.</p>"]
  ]
}));

/* ---------------- SWITZERLAND ---------------- */
pages.push(exp({
  slug: "to-switzerland", crumb: "To Switzerland",
  title: "Export Pet from Thailand to Switzerland (2026) | PattayaPets",
  desc: "Thailand to Switzerland pet export: rabies titer and wait, direct-air import licence, under-seven-month ban and DLD timeline.",
  updated: "2026-07-26",
  h1: "Taking a pet from Thailand to Switzerland",
  lede: "FSVO classifies origins outside its low-risk lists as rabies-risk. Thailand " +
    "is not on those lists, so the titer, waiting period and route-specific controls apply.",
  verify: "Swiss rules and the FSVO country classification were checked on 26 July " +
    "2026. Direct arrival by air from Thailand needs an FSVO import licence, and " +
    "dogs, cats and ferrets under seven months cannot enter from a rabies-risk country.",
  officialExtra:
    "<p><strong>Swiss sources:</strong> " +
    "<a href=\"https://www.blv.admin.ch/en/travelling-with-dogs-cats-and-ferrets\" " +
    "target=\"_blank\" rel=\"noopener\">FSVO travelling with pets</a>; " +
    "<a href=\"https://www.blv.admin.ch/dam/en/sd-web/rGF02-RRaF0f/liste-laender-tollwut-en.pdf\" target=\"_blank\" " +
    "rel=\"noopener\">FSVO rabies country list (June 2026 PDF)</a>. " +
    "Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-switzerland.html\">bringing a pet from Switzerland</a>.</p>",
  sections: euExportSections({
    routingIntro: "For Thailand, the titer test, waiting period and FSVO route approval are the long poles.",
    reqHeading: "What Switzerland requires from Thailand",
    reqHtml:
      "<p>Thailand is absent from the FSVO low-risk country lists and therefore " +
      "falls in the rabies-risk group. For a non-commercial dog, cat or ferret, plan for:</p>" +
      "<ul>" +
      "<li>ISO microchip before rabies vaccination</li>" +
      "<li>Current rabies vaccination</li>" +
      "<li><a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">Rabies titer test</a> from an approved laboratory, blood drawn at least 30 days after vaccination</li>" +
      "<li>The FSVO waiting period after the blood sample</li>" +
      "<li>A veterinary certificate endorsed by the exporting country&rsquo;s competent authority</li>" +
      "<li><strong>An FSVO import licence before direct entry by air</strong> from a rabies-risk country</li>" +
      "<li>Declaration through the red customs exit and entry through an allowed travellers&rsquo; point</li>" +
      "<li><strong>No entry for dogs, cats or ferrets under seven months old</strong> from a rabies-risk country</li>" +
      "</ul>" +
      "<p>The Federal Food Safety and Veterinary Office (FSVO) oversees the process.</p>" + EU_TITER_TIP
  }).concat([{
    h: "Who should not use this route yet",
    html: "<p>Do not book direct air transport if the FSVO import licence is not in " +
      "hand, the titer waiting period is incomplete, or the animal will be under " +
      "seven months at entry. Those are eligibility conditions, not paperwork that " +
      "can be fixed at the airport.</p>"
  }]),
  faqs: [
    ["Does Switzerland being outside the EU make this easier?",
     "<p>No. Switzerland applies its own FSVO controls alongside an EU-aligned veterinary framework. Thailand falls in the rabies-risk group, so the titer and waiting period apply; direct arrival by air also needs an FSVO import licence. The red customs exit and an allowed travellers&rsquo; entry point are part of the arrival plan.</p>"],
    ["What is the single most important step?",
     "<p>The rabies titer test, done as early as possible. Its waiting period is what makes the timeline long, so it is the thing to get moving first. At the same time, ask FSVO about the direct-air import licence so the route is eligible.</p>"],
    ["Is the EU pet passport enough from Thailand?",
     "<p>No. A passport does not replace the veterinary certificate, rabies-risk evidence or route approval required for entry from Thailand. For direct entry by air, obtain the FSVO import licence before travel as well. Keep the microchip, vaccination, titer and Thai-endorsed export records consistent across every document.</p>"],
    ["Can my pet skip the waiting period?",
     "<p>Only when an earlier valid titer remains usable and every rabies booster has been given without a lapse; otherwise the rabies-risk timeline applies. Confirm the individual record with FSVO before booking. An animal under seven months still cannot enter from Thailand, even if the owner has a pressing travel date.</p>"],
    ["How does this differ from exporting to the EU?",
     "<p>The veterinary framework is closely aligned, but Switzerland applies its own FSVO controls. Direct air entry from Thailand needs an import licence, rabies-risk origins cannot send animals under seven months, and arrival uses Swiss customs procedures. Compare the shared timeline in <a href=\"/take-pet-out-of-thailand/to-eu.html\">export to the EU</a>, then follow FSVO for the Swiss route.</p>"]
  ]
}));

/* ---------------- CANADA ---------------- */
pages.push(exp({
  slug: "to-canada", crumb: "To Canada",
  title: "Export Pet from Thailand to Canada (2026) | PattayaPets",
  desc: "Thailand to Canada pet export: CFIA rabies certificate, no titer wait, DLD " +
    "export timeline, document checklist and onward-travel notes.",
  h1: "Taking a pet from Thailand to Canada",
  lede: "Compared with the EU or Australia, Canada is one of the more " +
    "straightforward destinations for a pet leaving Thailand &mdash; but the DLD " +
    "export steps still run in parallel.",
  officialExtra:
    "<p><strong>Canadian sources:</strong> " +
    "<a href=\"https://inspection.canada.ca/en/importing-food-plants-animals/pets\" " +
    "target=\"_blank\" rel=\"noopener\">CFIA &mdash; importing or travelling with pets</a>. " +
    "Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-canada.html\">bringing a pet from Canada</a>.</p>",
  sections: [
    { h: "The timeline — Thailand to Canada", html:
      "<p>Canada does not require a rabies titer test, so the timeline is weeks rather " +
      "than months &mdash; but book CFIA-aligned paperwork and the DLD export desk early.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">6&ndash;8 weeks before</th>' +
      '<td>Confirm current CFIA import requirements; ensure ISO microchip and current rabies vaccination</td>' +
      '<td>CFIA + Thai vet</td></tr>' +
      '<tr><th scope="row">4&ndash;6 weeks before</th>' +
      '<td>Book pet on Bangkok&ndash;Toronto, Bangkok&ndash;Vancouver or connecting route; confirm airline pet policy</td>' +
      '<td>Airline</td></tr>' +
      '<tr><th scope="row">As the responsible AQS directs</th>' +
      '<td>File Thai DLD form R1/1 with the destination requirements as the responsible AQS directs; the reviewed procedure gives no universal 15-day deadline</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">Within 10 days of departure</th>' +
      '<td>Final clinical examination; DLD export health certificate with valid rabies vaccination recorded</td>' +
      '<td>DLD AQS + vet</td></tr>' +
      '<tr><th scope="row">Arrival in Canada</th>' +
      '<td>Present rabies vaccination certificate; CFIA inspection if selected at the port of entry</td>' +
      '<td>CFIA / Canada Border Services</td></tr>' +
      '</tbody></table></div>' },
    { h: "What Canada requires from Thailand", html:
      "<p>Canada&rsquo;s requirements for a personal dog or cat are comparatively " +
      "simple. The central document is a <strong>valid rabies vaccination " +
      "certificate</strong> in English or French. Canada does not generally require " +
      "a rabies titer test or a quarantine stay for compliant personal imports.</p>" +
      "<p>Typical entry documents include:</p>" +
      "<ul>" +
      "<li>ISO microchip (recommended; should match the rabies certificate if present)</li>" +
      "<li>Valid rabies vaccination administered in accordance with CFIA&rsquo;s current rules</li>" +
      "<li>DLD export health certificate for the Thai exit</li>" +
      "<li>Healthy animal matching the paperwork</li>" +
      "</ul>" +
      "<p>Additional steps can apply depending on the animal&rsquo;s age, whether the " +
      "move is commercial, or the province of arrival &mdash; confirm the current detail " +
      "with CFIA before you book.</p>" +
      '<div class="callout callout-tip"><div class="ch">Planning onward travel to the EU?</div>' +
      "<p>Even though Canada is straightforward, consider a " +
      "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">rabies titer test</a> " +
      "in Thailand if there is any chance of later moving to the EU, UK or similar &mdash; " +
      "those routes require it with a long waiting period.</p></div>" },
    { h: "The Thai export side (DLD)", html:
      "<p>Parallel Thai requirements:</p>" + DLD_EXPORT_TABLE +
      "<p>See " +
      '<a href="/take-pet-out-of-thailand/export-process.html">export process</a>.</p>' },
    { h: "Common mistakes on this corridor", html: EXPORT_FAILS +
      "<ul>" +
      "<li><strong>Expired rabies vaccination</strong> &mdash; CFIA expects a current certificate; a lapsed shot can block entry.</li>" +
      "<li><strong>Certificate language</strong> &mdash; CFIA expects English or French; confirm the DLD export certificate meets that requirement.</li>" +
      "<li><strong>Missing the DLD examination window</strong> &mdash; the examination must be no more than 2&ndash;3 days before travel.</li>" +
      "<li><strong>Assuming EU rules apply</strong> &mdash; Canada has no EU-style 90-day pre-certificate titer gate, but the Thai export process still applies.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Does Canada require a rabies titer test for a pet from Thailand?",
     "<p>Generally no &mdash; Canada's main requirement is a valid rabies vaccination certificate, and it does not normally require titer testing or quarantine for personal imports. Confirm the current rules for your pet with CFIA.</p>"],
    ["Is Canada really easier than the EU?",
     "<p>For entry requirements, yes &mdash; there is no EU-style 90-day pre-certificate titer gate. The Thai DLD export process still applies, and you should still start in good time.</p>"],
    ["How long does Thailand-to-Canada take to plan?",
     "<p>No universal Thai duration is published in the reviewed procedure. Ask the responsible AQS when to file R1/1 and attend the mandatory examination no more than 2&ndash;3 days before travel; separately allow for the airline and CFIA requirements.</p>"],
    ["Can my pet fly in the cabin to Canada?",
     "<p>Depends on the airline and aircraft on your Bangkok&ndash;Toronto/Vancouver or connecting route. Confirm pet space and crate rules when you book.</p>"],
    ["What if I later move from Canada to the EU?",
     "<p>Plan a titer test and waiting period before that move. Doing the test while still in Thailand saves time if you know EU relocation is possible.</p>"]
  ]
}));

/* ---------------- RUSSIA ---------------- */
pages.push(exp({
  slug: "to-russia", crumb: "To Russia",
  title: "Export Pet from Thailand to Russia (2026) | PattayaPets",
  desc: "Thailand to Russia pet export: FSVPS entry certificate, rabies vaccination, " +
    "DLD export timeline, document checklist and onward-travel notes.",
  h1: "Taking a pet from Thailand to Russia",
  lede: "Pattaya has a large Russian community, and the route home is, by " +
    "international standards, relatively straightforward &mdash; but the Thai DLD " +
    "export steps still run in parallel.",
  officialExtra:
    "<p><strong>Russian sources:</strong> " +
    "<a href=\"https://fsvps.gov.ru/\" target=\"_blank\" rel=\"noopener\">" +
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
      '<tr><th scope="row">As the responsible AQS directs</th>' +
      '<td>File Thai DLD form R1/1 with the destination requirements as the responsible AQS directs; the reviewed procedure gives no universal 15-day deadline</td>' +
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
     "<p>No universal Thai duration is published in the reviewed procedure. Ask the responsible AQS when to file R1/1 and attend the mandatory examination no more than 2&ndash;3 days before travel; separately allow for the destination and airline steps.</p>"],
    ["Can my pet fly in the cabin to Russia?",
     "<p>Depends on the airline and aircraft on your Bangkok&ndash;Moscow or connecting route. Confirm pet space and crate rules when you book.</p>"],
    ["What if I later move from Russia to the EU?",
     "<p>Plan a titer test and waiting period before that move. Doing the test while still in Thailand saves time if you know EU relocation is possible.</p>"]
  ]
}));

/* ---------------- NEW ZEALAND ---------------- */
pages.push(exp({
  slug: "to-new-zealand", crumb: "To New Zealand",
  noindex: true,
  title: "Export Pet from Thailand to New Zealand (2026) | PattayaPets",
  desc: "Thailand to New Zealand pet export: why direct import fails, MPI import permit, " +
    "titer testing, mandatory quarantine and DLD export checklist.",
  updated: "2026-07-26",
  h1: "Taking a pet from Thailand to New Zealand",
  lede: "This page is temporarily held out of search indexing because MPI&rsquo;s live " +
    "guide and source documents could not be opened for primary-source verification " +
    "on 26 July 2026. Do not act on this route until that check is complete.",
  verify: "MPI&rsquo;s current guide, import health standard and Schedule 9 URLs all " +
    "returned HTTP 403 during this review, including through an interactive browser. " +
    "The route summary below is held for editorial review and is not marked verified.",
  officialExtra:
    "<p><strong>New Zealand sources:</strong> " +
    "<a href=\"https://www.mpi.govt.nz/bring-send-to-nz/pets-travelling-to-nz/bringing-cats-and-dogs-to-nz/bringing-cats-and-dogs-to-nz-using-the-2026-import-health-standard/step-by-step-guide-to-bringing-cats-and-dogs-to-nz-2026\" " +
    "target=\"_blank\" rel=\"noopener\">MPI 2026 step-by-step guide</a>; " +
    "<a href=\"https://www.mpi.govt.nz/dmsdocument/71909/direct\" target=\"_blank\" " +
    "rel=\"noopener\">2026 import health standard</a>; " +
    "<a href=\"https://www.mpi.govt.nz/dmsdocument/2040/direct\" target=\"_blank\" " +
    "rel=\"noopener\">Schedule 9 categorized countries</a>. " +
    "Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-new-zealand.html\">bringing a pet from New Zealand</a>.</p>",
  sections: [
    { h: "Why standard direct import is unavailable", html:
      "<p>MPI permits standard imports only from countries or territories in its " +
      "categorized-country schedule. Thailand is not in Schedule 9. A Thailand-origin " +
      "pet must first complete MPI&rsquo;s non-categorized-country pathway through a " +
      "<strong>Category 2 or Category 3 country</strong>, rather than flying directly " +
      "from Bangkok under the ordinary standard.</p>" +
      "<p>The pathway includes:</p>" +
      "<ol>" +
      "<li>Official identification and veterinary preparation beginning at least <strong>six months before final shipment</strong></li>" +
      "<li><a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">Rabies titer testing</a> from an MPI-approved laboratory on MPI&rsquo;s schedule</li>" +
      "<li>Movement to a qualifying intermediary country and at least <strong>six months of residence</strong> under the applicable approved-country standard</li>" +
      "<li><strong>MPI import permit</strong> application at least 30 working days before the pet is needed for shipment</li>" +
      "<li>Thai <a href=\"/take-pet-out-of-thailand/export-permit-thailand-dld.html\">DLD export paperwork</a> for the move to the intermediary country</li>" +
      "<li>The final health certificate from an official government veterinarian in the approved export country, followed by cargo shipment</li>" +
      "<li><strong>At least 10 days of post-arrival quarantine</strong> at an MPI-approved facility, with arrival through Auckland or Christchurch</li>" +
      "</ol>" +
      "<p>This is a multi-country, many-month relocation, not a last-minute direct flight.</p>" +
      '<div class="callout callout-emergency"><div class="ch">NZ → Thailand was the easy bit</div>' +
      "<p>If you imported from New Zealand recently, do not assume symmetry. Read " +
      '<a href="/bring-pet-to-thailand/from-new-zealand.html">New Zealand to Thailand</a> ' +
      "for the outbound direction you already managed &mdash; then accept that the return is an entirely different process.</p></div>" },
    { h: "The realistic timeline (high level)", html:
      "<p>For a pet starting in Thailand, the high-level sequence is:</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">Phase</th><th scope="col">What happens</th><th scope="col">Who</th></tr></thead><tbody>' +
      '<tr><th scope="row">At least 6 months before final shipment</th>' +
      '<td>Contact MPI, arrange official identification and veterinary preparation, and engage a specialist <a href="/pet-relocation/">relocation agent</a></td>' +
      '<td>You + agent + MPI</td></tr>' +
      '<tr><th scope="row">Thailand preparation</th>' +
      '<td>Rabies vaccination, titer testing and other MPI-specified work on the fixed schedule</td>' +
      '<td>MPI-approved vet + lab</td></tr>' +
      '<tr><th scope="row">Intermediary-country phase</th>' +
      '<td>Complete at least six months of residence and the applicable Category 2 or 3 veterinary controls</td>' +
      '<td>Intermediary competent authority + MPI</td></tr>' +
      '<tr><th scope="row">At least 30 working days before needed</th>' +
      '<td>Apply for the MPI import permit with veterinary history and book an approved quarantine facility</td>' +
      '<td>MPI</td></tr>' +
      '<tr><th scope="row">As the responsible AQS directs</th>' +
      '<td>File Thai DLD form R1/1 with the destination requirements as the responsible AQS directs; the reviewed procedure gives no universal 15-day deadline</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">Final certification window</th>' +
      '<td>Complete the examinations and treatments; obtain the final certificate from an official government veterinarian in the approved export country</td>' +
      '<td>Approved export country&rsquo;s competent authority</td></tr>' +
      '<tr><th scope="row">Arrival in New Zealand</th>' +
      '<td>Ship as cargo through Auckland or Christchurch; complete at least 10 days at an MPI-approved quarantine facility</td>' +
      '<td>MPI quarantine facility</td></tr>' +
      '</tbody></table></div>' },
    { h: "What MPI import typically requires", html:
      "<p>The 2026 standard requires the following core controls, with the exact " +
      "sequence set by the pathway and certificate:</p>" +
      "<ul>" +
      "<li><strong>Import permit</strong> applied for at least 30 working days before it is needed and issued before shipment</li>" +
      "<li><strong>ISO microchip</strong> and rabies vaccination history</li>" +
      "<li><strong>Rabies neutralising antibody titre test</strong> from an MPI-approved lab, on schedule</li>" +
      "<li>Additional treatments and examinations timed to MPI&rsquo;s calendar</li>" +
      "<li>Final export health certificate issued by an official government veterinarian in the approved intermediary country</li>" +
      "<li>Booking at an <strong>MPI-approved quarantine facility</strong> before the pet flies, for at least 10 days</li>" +
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
      "the New Zealand route is strongly recommended.</p>" },
    { h: "Who should not attempt this route yet", html:
      "<p>Do not book a Thailand-to-New Zealand pet flight if you have no Category 2 " +
      "or 3 intermediary plan, less than six months for veterinary preparation, no " +
      "import permit application or no quarantine reservation. Those are structural " +
      "parts of the pathway, not airport-day fixes.</p>" }
  ],
  faqs: [
    ["Can I fly my pet directly from Thailand to New Zealand?",
     "<p>No standard direct-import pathway is available. Thailand is absent from MPI&rsquo;s Schedule 9 categorized-country list, so the pet must qualify through the non-categorized-country process in a Category 2 or 3 intermediary country. Obtain MPI&rsquo;s case-specific confirmation before moving the animal or paying for flights.</p>"],
    ["How early should I start planning?",
     "<p>Begin at least six months before the final shipment. MPI&rsquo;s 2026 guide places official identification and preparation well ahead of travel, and a Thailand-origin pet also needs an intermediary-country phase. Add time for laboratory results, the import permit, quarantine availability and changes to airline space.</p>"],
    ["How long is quarantine in New Zealand?",
     "<p>The 2026 standard requires at least 10 days in an MPI-approved quarantine facility for cats and dogs using this pathway. Reserve before shipment and plan arrival through Auckland or Christchurch. The stay can be longer if MPI identifies a compliance or health issue, so do not book an inflexible onward plan.</p>"],
    ["Does New Zealand require a rabies titer test from Thailand?",
     "<p>Yes. The non-categorized-country pathway includes rabies neutralising antibody testing from an MPI-approved laboratory on the required schedule. The titer is only one part: the pet must also complete the intermediary-country controls, official certification, import permit and post-arrival quarantine required by the current MPI standard.</p>"],
    ["When should I apply for the Thai DLD export permit?",
     "<p>Ask the responsible Thai departure-port AQS when to file R1/1 once the intermediary-country requirements are settled; the reviewed DLD procedure has no universal 15-day deadline. Separately, MPI says to apply for its New Zealand import permit at least 30 working days before it is needed.</p>"]
  ]
}));

/* ---------------- JAPAN ---------------- */
pages.push(exp({
  slug: "to-japan", crumb: "To Japan",
  title: "Export Pet from Thailand to Japan (2026) | PattayaPets",
  desc: "Thailand to Japan pet export: MAFF 180-day wait, advance notification, DLD " +
    "export timeline, document checklist and common failure points.",
  h1: "Taking a pet from Thailand to Japan",
  lede: "For a dog or cat arriving from Thailand, Japan&rsquo;s non-designated-region route " +
    "requires ordered vaccination and testing steps, then <strong>180 days</strong> from " +
    "the titer blood sample before arrival.",
  updated: "2026-08-01",
  officialExtra:
    "<p><strong>Japan sources:</strong> " +
    '<a href="https://www.maff.go.jp/aqs/english/animal/dog/import-other.html" target="_blank" ' +
    "rel=\"noopener\">MAFF AQS &mdash; import from non-designated regions</a>; " +
    '<a href="https://www.maff.go.jp/aqs/english/" target="_blank" rel="noopener">' +
    "MAFF Animal Quarantine Service</a>. Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-japan.html\">bringing a pet from Japan</a>.</p>",
  sections: [
    { h: "The timeline — Thailand to Japan", html:
      "<p>Japan&rsquo;s clock starts when the titer blood is drawn, not when you book " +
      "the flight. The checked sequence is:</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">Before the rabies sequence</th>' +
      '<td>ISO microchip; first rabies vaccination</td>' +
      '<td>Thai vet</td></tr>' +
      '<tr><th scope="row">On the qualifying vaccine schedule</th>' +
      '<td>Second rabies vaccination at least 30 days after the first and within its validity; after that second vaccination, blood sample for a MAFF-designated-laboratory test</td>' +
      '<td>Thai vet + approved lab</td></tr>' +
      '<tr><th scope="row">Day 0 = blood sample date</th>' +
      '<td><strong>180-day wait</strong> must elapse before the pet may enter Japan</td>' +
      '<td>MAFF rule</td></tr>' +
      '<tr><th scope="row">&ge;40 days before arrival</th>' +
      '<td><strong>Advance notification</strong> to the AQS at your Japanese arrival port (NACCS online or email)</td>' +
      '<td>MAFF AQS</td></tr>' +
      '<tr><th scope="row">As the responsible AQS directs</th>' +
      '<td>File Thai DLD form R1/1 with the destination requirements as the responsible AQS directs; the reviewed procedure gives no universal 15-day deadline</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">No more than 2&ndash;3 days before departure</th>' +
      '<td>Mandatory DLD examination; obtain the export certificate if compliant</td>' +
      '<td>DLD AQS + vet</td></tr>' +
      '<tr><th scope="row">Arrival in Japan</th>' +
      '<td>AQS import inspection at the notified arrival port; AQS determines the quarantine period from the documents and inspection</td>' +
      '<td>MAFF AQS</td></tr>' +
      '</tbody></table></div>' +
      "<p>" + claimLink("JP-NONDESIGNATED-ENTRY-2026-08", "MAFF source") + ".</p>" },
    { h: "Thai-side export documents", html: DLD_EXPORT_TABLE + THAI_SIDE },
    { h: "What MAFF checks on arrival", html:
      "<ul>" +
      "<li>Microchip matches every document.</li>" +
      "<li>Two rabies vaccinations on the correct schedule.</li>" +
      "<li>Titer result &ge; 0.5 IU/ml from a MAFF-designated laboratory; verify the report and vaccination-validity window for the actual arrival date.</li>" +
      "<li>At least 180 days elapsed since the blood sample date.</li>" +
      "<li>Advance notification accepted at least 40 days before arrival.</li>" +
      "<li>Thai export quarantine certificate and endorsed health certificate.</li>" +
      "</ul>" +
      "<p>If the 180-day wait is incomplete, AQS can detain the pet for the remaining period. " +
      "Confirm the complete file with the notified arrival-port AQS before payment. " +
      claimLink("JP-NONDESIGNATED-ENTRY-2026-08", "MAFF source") + ".</p>" },
    { h: "Common mistakes", html: EXPORT_FAILS +
      "<ul>" +
      "<li><strong>Booking the flight before the 180-day date</strong> &mdash; Japan counts from the blood draw, not the result letter.</li>" +
      "<li><strong>Late advance notification</strong> &mdash; under 40 days may be rejected.</li>" +
      "<li><strong>Wrong laboratory</strong> &mdash; the titer must be at a MAFF-designated lab; check the current list.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["How long does it take to bring a pet from Thailand to Japan?",
     "<p>The authority-controlled minimum includes the qualifying two-vaccination sequence, sampling after the second vaccination, 180 days from sampling before arrival and notification at least 40 days before arrival. Laboratory, DLD, certificate and airline time are additional and case-specific. " + claimLink("JP-NONDESIGNATED-ENTRY-2026-08", "MAFF source") + ".</p>"],
    ["Does Japan require a rabies titer test from Thailand?",
     "<p>Yes. Thailand is a non-designated region. Japan requires a titer at a designated laboratory, result &ge; 0.5 IU/ml, and arrival after 180 days from the sample date. " + claimLink("JP-NONDESIGNATED-ENTRY-2026-08", "MAFF source") + ".</p>"],
    ["Which Japanese airports accept pet imports?",
     "<p>This guide does not maintain a live port list. Use MAFF&rsquo;s current designated-port information, then confirm the notification channel and species handling with the responsible arrival-port AQS before booking.</p>"],
    ["Can I shorten the 180-day wait?",
     "<p>Do not book an arrival before the 180-day date. MAFF says a pet arriving before the wait is complete is quarantined for the remaining period. " + claimLink("JP-NONDESIGNATED-ENTRY-2026-08", "MAFF source") + ".</p>"],
    ["When should I start the Thai DLD export permit?",
     "<p>Ask the responsible AQS when to file R1/1 after Japan&rsquo;s titer, 180-day and notification timeline is aligned. Attend the mandatory DLD examination no more than 2&ndash;3 days before travel.</p>"]
  ]
}));

/* ---------------- SINGAPORE ---------------- */
pages.push(exp({
  slug: "to-singapore", crumb: "To Singapore",
  title: "Export Pet from Thailand to Singapore (2026) | PattayaPets",
  desc: "Thailand to Singapore pet export: Schedule III RNATT timing, AQC quarantine, " +
    "AVS import licence, DLD export timeline and document checklist.",
  h1: "Taking a pet from Thailand to Singapore",
  lede: "Thailand is a <strong>Schedule III</strong> origin under AVS rules. A pet can " +
    "enter Singapore, but expect a <strong>90-day minimum lead time</strong> after the " +
    "titer blood draw and <strong>30 days quarantine</strong> on arrival.",
  updated: "2026-08-01",
  officialExtra:
    "<p><strong>Singapore sources:</strong> " +
    '<a href="https://avs.nparks.gov.sg/pets/importing-exporting-a-pet/import/dogs-and-cats/" ' +
    'target="_blank" rel="noopener">AVS &mdash; importing dogs and cats</a> ' +
    "(verify Thailand&rsquo;s schedule close to travel). Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-singapore.html\">bringing a pet from Singapore</a>.</p>",
  sections: [
    { h: "The timeline — Thailand to Singapore", html:
      "<p>AVS timing gates stack on top of the Thai DLD export process. The checked Schedule III sequence is:</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">Before sampling</th>' +
      '<td>Microchip recorded consistently; valid qualifying rabies vaccination</td>' +
      '<td>Thai vet</td></tr>' +
      '<tr><th scope="row">&ge;28 days after vaccination</th>' +
      '<td>Blood sample for rabies serology (RNATT) at an approved lab; result &ge; 0.5 IU/ml</td>' +
      '<td>Approved lab</td></tr>' +
      '<tr><th scope="row">&ge;90 days after blood sample</th>' +
      '<td>Earliest export date (sample must also be within 12 months of export)</td>' +
      '<td>AVS rule</td></tr>' +
      '<tr><th scope="row">Once the travel dates qualify</th>' +
      '<td>Obtain the applicable pet licence, apply for the AVS <strong>import licence</strong> and book AQC quarantine</td>' +
      '<td>AVS</td></tr>' +
      '<tr><th scope="row">As the responsible AQS directs</th>' +
      '<td>File Thai DLD form R1/1 with the destination requirements as the responsible AQS directs; the reviewed procedure gives no universal 15-day deadline</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">2&ndash;7 days before export</th>' +
      '<td>Internal and external parasite treatments per AVS window</td>' +
      '<td>Thai vet</td></tr>' +
      '<tr><th scope="row">Arrival in Singapore</th>' +
      '<td>Inspection, rabies vaccination on arrival and at least 30 days of AQC quarantine</td>' +
      '<td>AVS / AQC</td></tr>' +
      '</tbody></table></div>' +
      "<p>" + claimLink("SG-SCHEDULE-III-ENTRY-2026-08", "AVS Schedule III source") + ".</p>" },
    { h: "Thai-side export documents", html: DLD_EXPORT_TABLE + THAI_SIDE },
    { h: "What AVS checks", html:
      "<ul>" +
      "<li>Microchip number consistent across the vaccination, laboratory and certificate records.</li>" +
      "<li>Valid rabies vaccination using an AVS-accepted vaccine.</li>" +
      "<li>RNATT blood sample at least 28 days after vaccination and at least 90 days before export.</li>" +
      "<li>Import licence and AQC quarantine reservation.</li>" +
      "<li>Parasite treatments within the AVS pre-export window.</li>" +
      "<li>Thai DLD export health certificate matching AVS veterinary conditions.</li>" +
      "</ul>" +
      "<p>AVS rabies schedules change &mdash; confirm Thailand&rsquo;s category on the " +
      "AVS website close to your travel date. " + claimLink("SG-SCHEDULE-III-ENTRY-2026-08", "Checked source") + ".</p>" },
    { h: "Common mistakes", html: EXPORT_FAILS +
      "<ul>" +
      "<li><strong>Blood sample too soon after vaccination</strong> &mdash; AVS requires at least 28 days.</li>" +
      "<li><strong>Export before 90 days after sampling</strong> &mdash; the sample must be at least 90 days and within 12 months of export.</li>" +
      "<li><strong>No AQC booking</strong> &mdash; quarantine space must be reserved before the import licence is useful.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Does Singapore require a rabies titer test from Thailand?",
     "<p>Yes. Under the checked Schedule III route, the approved-lab RNATT result must be at least 0.5 IU/ml, with sampling at least 28 days after the qualifying vaccination and 90 days to 12 months before export. " + claimLink("SG-SCHEDULE-III-ENTRY-2026-08", "AVS source") + ".</p>"],
    ["Is there quarantine in Singapore from Thailand?",
     "<p>Yes. The checked Schedule III route requires a booked AQC space, rabies vaccination on arrival and at least 30 days of quarantine. " + claimLink("SG-SCHEDULE-III-ENTRY-2026-08", "AVS source") + ".</p>"],
    ["How long before I can export to Singapore?",
     "<p>For a primary vaccination, sampling cannot occur until at least 28 days later, and export cannot occur until at least 90 days after sampling. A qualifying booster history can change the first interval. Add case-specific licence, quarantine-space, certificate, DLD and airline time. " + claimLink("SG-SCHEDULE-III-ENTRY-2026-08", "AVS source") + ".</p>"],
    ["Do I need a dog licence before importing to Singapore?",
     "<p>Yes for dogs — apply via the Pet Licensing System (PALS) before the AVS import licence.</p>"],
    ["When should I apply for the Thai DLD export permit?",
     "<p>Ask the responsible AQS when to file R1/1 after the AVS import licence, quarantine booking and RNATT timing gates are satisfied. The reviewed DLD procedure has no universal 15-day deadline.</p>"]
  ]
}));

/* ---------------- UAE ---------------- */
pages.push(exp({
  slug: "to-uae", crumb: "To the UAE",
  title: "Export Pet from Thailand to UAE (2026) | PattayaPets",
  desc: "Thailand to UAE pet export: MOCCAE import permit, vaccinations, breed rules, " +
    "IATA cargo requirements, DLD export timeline and document checklist.",
  h1: "Taking a pet from Thailand to the UAE",
  lede: "The UAE corridor is manageable compared with the EU or Australia &mdash; " +
    "no EU-style 90-day pre-certificate titer gate for UAE entry itself. But MOCCAE is strict on " +
    "<strong>permits, vaccines, breeds and cargo rules</strong>. Start early.",
  officialExtra:
    "<p><strong>UAE sources:</strong> " +
    "<a href=\"https://moccae.gov.ae/en/services/import-permit-pets\" target=\"_blank\" " +
    "rel=\"noopener\">MOCCAE import permit for pets</a> (updated January 2025). " +
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
      '<tr><th scope="row">As the responsible AQS directs</th>' +
      '<td>File Thai DLD form R1/1 with the destination requirements as the responsible AQS directs; the reviewed procedure gives no universal 15-day deadline</td>' +
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
      "rel=\"noopener\">moccae.gov.ae</a>):</p>" +
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
  title: "Export Pet from Thailand to India (2026) | PattayaPets",
  desc: "Thailand to India pet export: AQCS Advance NOC timeline, approved arrival ports, " +
    "DLD export checklist and common failure points.",
  h1: "Taking a pet from Thailand to India",
  lede: "India clears pet imports through AQCS at a limited set of airports. From " +
    "Pattaya you need the Thai DLD export done first, then an online Advance NOC " +
    "applied at least <strong>seven working days</strong> before arrival.",
  officialExtra:
    "<p><strong>India sources:</strong> " +
    '<a href="https://aqcsindia.gov.in/Home/ImportExportPets" target="_blank" ' +
    "rel=\"noopener\">AQCS import/export of pets</a>; " +
    '<a href="https://aqcsindia.gov.in/Home/ImportExportPets" target="_blank" ' +
    "rel=\"noopener\">AQCS Import Clearance System (online NOC)</a>; " +
    '<a href="https://aqcsindia.gov.in/pdfs/india-dogs-guidance.pdf" target="_blank" ' +
    "rel=\"noopener\">India dog import guidance (PDF)</a>. Import mirror: " +
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
      '<tr><th scope="row">As the responsible AQS directs</th>' +
      '<td>File Thai DLD form R1/1 with the destination requirements as the responsible AQS directs; the reviewed procedure gives no universal 15-day deadline</td>' +
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
     "<p>Ask the responsible AQS when to file R1/1 after the AQCS Advance NOC is underway. The reviewed DLD procedure has no universal 15-day deadline.</p>"]
  ]
}));

/* ---------------- PHILIPPINES ---------------- */
pages.push(exp({
  slug: "to-philippines", crumb: "To the Philippines",
  title: "Thailand to Philippines Pet Export (2026) | PattayaPets",
  desc: "Thailand to Philippines pet export: BAI SPSIC timeline, IVHC requirements, " +
    "DLD export checklist and Manila arrival steps.",
  h1: "Taking a pet from Thailand to the Philippines",
  lede: "Manila is a common destination for Pattaya expats returning home. You need a " +
    "BAI <strong>SPSIC</strong> before the pet leaves Thailand &mdash; valid " +
    "<strong>60 days</strong> &mdash; plus the standard DLD export on the Thai side.",
  officialExtra:
    "<p><strong>Philippines sources:</strong> " +
    '<a href="https://www.bai.gov.ph/Stakeholders/PetImport" target="_blank" ' +
    "rel=\"noopener\">BAI &mdash; pet import procedures</a>; SPSIC application " +
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
      '<tr><th scope="row">As the responsible AQS directs</th>' +
      '<td>File Thai DLD form R1/1 with the destination requirements as the responsible AQS directs; the reviewed procedure gives no universal 15-day deadline</td>' +
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
      '<a href="https://www.bai.gov.ph/Stakeholders/PetImport" target="_blank" rel="noopener">' +
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
     "<p>Ask the responsible AQS when to file R1/1 after the SPSIC and IVHC calendar are aligned. The reviewed DLD procedure has no universal 15-day deadline.</p>"]
  ]
}));

/* ---------------- CHINA ---------------- */
pages.push(exp({
  slug: "to-china", crumb: "To China",
  title: "Export Pet from Thailand to China (2026) | PattayaPets",
  desc: "Thailand to China pet export: GACC titer and quarantine rules, DLD export " +
    "checklist and port-level verification.",
  h1: "Taking a pet from Thailand to China",
  lede: "China&rsquo;s GACC rules (Announcement No.&nbsp;5, 2019) classify Thailand as " +
    "<strong>non-designated</strong>. Without a valid rabies antibody test from a " +
    "recognised lab, expect <strong>30 days quarantine</strong> at a designated port.",
  updated: "2026-08-01",
  officialExtra:
    "<p><strong>China sources:</strong> " +
    '<a href="https://english.beijing.gov.cn/latest/lawsandpolicies/202104/t20210407_2346645.html" ' +
    'target="_blank" rel="noopener">GACC Announcement No.&nbsp;5 (2019) &mdash; ' +
    "pet entry (English reference)</a>; " +
    '<a href="https://english.shanghai.gov.cn/en-KeepingAPetInShanghai/20240927/988d600b49964546b41d3c342e4ebdb2.html" ' +
    'target="_blank" rel="noopener">Shanghai pet entry guide</a>. Import mirror: ' +
    "<a href=\"/bring-pet-to-thailand/from-china.html\">bringing a pet from China</a>.</p>",
  sections: [
    { h: "The timeline — Thailand to China", html:
      "<p>Thailand follows the checked non-designated-origin preparation route. A pet seeking " +
      "the quarantine waiver needs a qualifying Chinese Customs-accepted-laboratory titer report; " +
      "a second vaccination is required when a new titer must be obtained, not universally.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">Before certification</th>' +
      '<td>Microchip; valid rabies vaccination; confirm whether an existing accepted-lab titer report qualifies</td>' +
      '<td>Thai vet</td></tr>' +
      '<tr><th scope="row">If a new titer is needed</th>' +
      '<td>Complete the second rabies vaccination on the veterinarian/manufacturer schedule, then sample no earlier than that vaccination for a Chinese Customs-accepted-lab test above 0.5 IU/ml</td>' +
      '<td>Thai vet + lab</td></tr>' +
      '<tr><th scope="row">Before booking</th>' +
      '<td>Confirm the port&rsquo;s current pet-entry capability and quarantine facility if the waiver evidence may fail</td>' +
      '<td>Arrival-port Customs</td></tr>' +
      '<tr><th scope="row">As the responsible AQS directs</th>' +
      '<td>File Thai DLD form R1/1 with the destination requirements as the responsible AQS directs; the reviewed procedure gives no universal 15-day deadline</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">Within 14 days of arrival</th>' +
      '<td>Official export health certificate from Thailand (government-endorsed)</td>' +
      '<td>DLD AQS + vet</td></tr>' +
      '<tr><th scope="row">On arrival</th>' +
      '<td>Declare pet to customs; microchip scan; on-site quarantine inspection</td>' +
      '<td>GACC customs</td></tr>' +
      '</tbody></table></div>' +
      "<p><strong>One accompanied dog or cat per person per entry.</strong> " +
      claimLink("CN-GACC-PET-ENTRY-2019-05", "GACC source") + "; " +
      claimLink("CN-THAILAND-ENTRY-2025-10", "Thailand-specific Customs source") + ".</p>" },
    { h: "Thai-side export documents", html: DLD_EXPORT_TABLE + THAI_SIDE },
    { h: "Quarantine waiver vs mandatory quarantine", html:
      "<p>GACC classifies origin countries into designated and non-designated. Thailand " +
      "is non-designated. Pets that meet all waiver conditions (microchip, valid titer above " +
      "0.5 IU/ml from an accepted laboratory, official certificates and successful on-site " +
      "inspection) may enter without the 30-day " +
      "isolation period.</p>" +
      "<p>If waiver conditions are not met, the pet must enter through a port with " +
      "<strong>quarantine facilities</strong> and complete <strong>30 days</strong> at a " +
      "customs-designated station. The checked source does not establish a live universal port " +
      "list, so obtain written arrival-port confirmation before booking.</p>" +
      "<p>For Thailand, current Shanghai Customs guidance says no local laboratory is approved by " +
      "Chinese Customs. Confirm the authority-approved sample route and do not assume private serum " +
      "submission will qualify. " + claimLink("CN-GACC-PET-ENTRY-2019-05", "GACC source") + "; " +
      claimLink("CN-THAILAND-ENTRY-2025-10", "Shanghai Customs source") + ".</p>" },
    { h: "Common mistakes", html: EXPORT_FAILS +
      "<ul>" +
      "<li><strong>Inventing a universal two-shot interval</strong> &mdash; current Thailand guidance requires a second vaccination only when a new titer is needed; apply the actual vaccine schedule.</li>" +
      "<li><strong>Titer from unrecognised lab</strong> &mdash; check GACC&rsquo;s current approved laboratory list.</li>" +
      "<li><strong>Wrong arrival city</strong> &mdash; not every Chinese airport has quarantine facilities.</li>" +
      "<li><strong>Two pets, one person</strong> &mdash; GACC allows one dog or cat per person per entry.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Is pet import into China complicated?",
     "<p>The national framework requires one accompanied pet per person, a microchip, official health/quarantine and rabies certificates, and declaration for Customs inspection. The Thailand-specific guide adds the current accepted-titer and 14-day examination conditions. " + claimLink("CN-GACC-PET-ENTRY-2019-05", "GACC source") + "; " + claimLink("CN-THAILAND-ENTRY-2025-10", "Shanghai Customs source") + ".</p>"],
    ["Which Chinese authority handles pet import?",
     "<p>The General Administration of Customs (GACC) at your port of entry, with local animal quarantine inspection.</p>"],
    ["Will my pet be quarantined in China from Thailand?",
     "<p>If the pet cannot meet the non-designated-origin waiver conditions, including an accepted-lab titer above 0.5 IU/ml and a passed on-site inspection, the national rule requires 30 days of quarantine. " + claimLink("CN-GACC-PET-ENTRY-2019-05", "GACC source") + ".</p>"],
    ["How many pets can I bring into China?",
     "<p>One accompanied dog or cat per person per entry under the checked national rule. " + claimLink("CN-GACC-PET-ENTRY-2019-05", "GACC source") + ".</p>"],
    ["When should I apply for the Thai DLD export permit?",
     "<p>Ask the responsible AQS when to file R1/1 once the GACC-side requirements are satisfied. The reviewed DLD procedure has no universal 15-day deadline.</p>"]
  ]
}));

/* ---------------- SOUTH AFRICA ---------------- */
pages.push(exp({
  slug: "to-south-africa", crumb: "To South Africa",
  title: "Thailand to South Africa Pet Export | PattayaPets",
  desc: "Thailand to South Africa pet export: DALRRD import permit, dog quarantine, " +
    "five pre-import blood tests, manifest cargo rules and DLD export timeline.",
  h1: "Taking a pet from Thailand to South Africa",
  lede: "Thailand is <strong>not</strong> on South Africa&rsquo;s quarantine-exempt list. " +
    "Dogs normally face <strong>state quarantine on arrival</strong>, five pre-import blood " +
    "tests, and entry only as <strong>manifest cargo</strong> via Johannesburg or Cape Town.",
  officialExtra:
    "<p><strong>South Africa sources:</strong> " +
    '<a href="https://www.gov.za/services/import/import-animals-and-animal-products" ' +
    'target="_blank" rel="noopener">gov.za &mdash; import animals and animal products</a> ' +
    "(contact <strong>VetPermits@Dalrrd.gov.za</strong> for current VIP forms and fees); " +
    '<a href="https://dirco.gov.za/newyork/wp-content/uploads/sites/77/2025/04/Importing-cats-and-dogs-to-SA-subject-to-quarantine.pdf" ' +
    'target="_blank" rel="noopener">quarantine import application form (PDF)</a>. ' +
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
      '<tr><th scope="row">As the responsible AQS directs</th>' +
      '<td>File Thai DLD form R1/1 with the destination requirements as the responsible AQS directs; the reviewed procedure gives no universal 15-day deadline</td>' +
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
     "<p>Ask the responsible AQS when to file R1/1 once the DALRRD permit and applicable blood tests are complete. The reviewed DLD procedure has no universal 15-day deadline.</p>"]
  ]
}));

module.exports = pages;
