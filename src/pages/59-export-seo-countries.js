"use strict";
/* SEO export guides: Italy, Malaysia and South Korea destination corridors. */

const { article } = require("../guidekit.js");
const { exportCountryRelated, attachImportMirrorLink } = require("../data/country-pairs.js");
const rb = require("../data/richness-blocks.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const CLUSTER = { name: "Taking a pet out of Thailand", path: "/take-pet-out-of-thailand/" };
const SUB = [GUIDES, CLUSTER];

const VERIFY =
  "This guide was last reviewed on 4 June 2026. Export rules change without notice. " +
  "Confirm with the DLD and the destination authority before booking.";

const OFFICIAL =
  "<p><strong>Official sources to verify against:</strong> " +
  "<a href=\"https://aqi.dld.go.th/\" target=\"_blank\" rel=\"noopener nofollow\">DLD Animal Quarantine stations</a>; " +
  "Suvarnabhumi AQS export: " +
  "<a href=\"mailto:qsap_bkk_export@dld.go.th\">qsap_bkk_export@dld.go.th</a>.</p>";

const RELATED = [
  { name: "The export process", path: "/take-pet-out-of-thailand/export-process.html", desc: "The Thai DLD side of leaving." },
  { name: "DLD export permit", path: "/take-pet-out-of-thailand/export-permit-thailand-dld.html", desc: "Apply before departure." },
  { name: "What export costs", path: "/take-pet-out-of-thailand/cost-to-export-a-pet-from-thailand.html", desc: "Budgeting the move." },
  { name: "Bringing a pet to Thailand", path: "/bring-pet-to-thailand/", desc: "The reverse journey." }
];

const EU_ENTRY =
  "<p>Italy follows standard <strong>EU third-country entry rules</strong> for pets arriving " +
  "from Thailand: ISO microchip, current rabies vaccination, " +
  "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">rabies titer test</a> " +
  "(blood &ge;30 days after vaccination), <strong>three-month wait</strong> from the sample " +
  "date, and an EU animal health certificate endorsed on the Thai side. See " +
  "<a href=\"/take-pet-out-of-thailand/to-eu.html\">exporting a pet to the EU</a>.</p>";

const DLD_SIDE =
  "<p>Parallel Thai requirements: " +
  "<a href=\"/take-pet-out-of-thailand/export-permit-thailand-dld.html\">DLD export permit</a> " +
  "(form 1/1, apply at least 15 days before departure), health certificate from a DLD-approved " +
  "vet, and AQS inspection at your departure airport. See " +
  "<a href=\"/take-pet-out-of-thailand/export-process.html\">export process</a>.</p>";

function exp(o) {
  var sections = attachImportMirrorLink((o.sections || []).slice(), o.slug);
  sections.push(rb.EXPORT_FROM_PATTAYA);
  sections.push(rb.EXPORT_RELOCATION);
  sections.push({ h: "Official sources", html: (o.officialExtra || "") + OFFICIAL });
  return article({
    path: "/take-pet-out-of-thailand/" + o.slug + ".html",
    title: o.title, desc: o.desc, crumb: o.crumb, breadcrumbs: SUB,
    eyebrow: "Taking a pet out of Thailand &middot; By destination",
    h1: o.h1, lede: o.lede, verify: VERIFY,
    updated: o.updated || "2026-06-04",
    sections: sections, faqs: rb.mergeFaqs(o.faqs, rb.EXPORT_EXTRA_FAQS),
    related: o.related || exportCountryRelated(o.slug, RELATED)
  });
}

const pages = [];

pages.push(exp({
  slug: "to-italy", crumb: "To Italy",
  title: "Export Pet from Thailand to Italy (2026) | PattayaPets",
  desc: "Thailand to Italy pet export: EU titer test, three-month wait, DLD export permit and entry certificate for Rome/Milan arrival.",
  h1: "Taking a pet from Thailand to Italy",
  lede: "Italy applies the same EU veterinary rules as Germany or France for pets arriving from Thailand &mdash; plan in <strong>quarters</strong>, not weeks.",
  officialExtra:
    "<p><strong>Italian / EU sources:</strong> " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener nofollow\">EU pet movement</a>. Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-italy.html\">bringing a pet from Italy</a>.</p>",
  sections: [
    { h: "What Italy / the EU requires from Thailand", html: EU_ENTRY + DLD_SIDE },
    { h: "The timeline — work backwards", html:
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th></tr></thead><tbody>' +
      '<tr><th scope="row">Month 1</th><td>Rabies titer test if not already valid</td></tr>' +
      '<tr><th scope="row">Months 1&ndash;3</th><td>Three-month wait from blood sample (EU non-listed country rule)</td></tr>' +
      '<tr><th scope="row">&ge;15 days before export</th><td>Thai DLD export permit (form 1/1)</td></tr>' +
      '<tr><th scope="row">Within EU entry window</th><td>EU third-country health certificate endorsed by DLD</td></tr>' +
      '</tbody></table></div>' },
    { h: "Routing to Rome or Milan", html:
      "<p>Bangkok&ndash;Rome and Bangkok&ndash;Milan routes exist; pets must enter via a " +
      "<strong>designated EU traveller point of entry</strong>. Confirm with the airline " +
      "whether your pet travels cabin, hold or cargo.</p>" },
    { h: "Common mistakes", html:
      "<ul>" +
      "<li><strong>Assuming an old EU pet passport works</strong> from Thailand.</li>" +
      "<li><strong>Booking flights before the titer wait finishes</strong>.</li>" +
      "<li><strong>Applying for Thai export inside the 15-day window</strong> while tests are still pending.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Does Italy require the rabies titer test from Thailand?",
     "<p>Yes, under standard EU third-country rules — blood sample at least 30 days after vaccination, then a three-month wait.</p>"],
    ["Is the EU pet passport enough to enter Italy from Thailand?",
     "<p>No. You need a third-country EU health certificate endorsed on the Thai export side.</p>"],
    ["How long does export from Thailand to Italy take?",
     "<p>Often three to four months if you need a new titer test, plus DLD export lead time.</p>"],
    ["Which Italian airports accept pets from third countries?",
     "<p>Rome Fiumicino and Milan Malpensa are common entry points — confirm designated traveller entry rules before booking.</p>"],
    ["What is the Thai DLD export fee?",
     "<p>See <a href=\"/take-pet-out-of-thailand/cost-to-export-a-pet-from-thailand.html\">export costs</a> for current ranges.</p>"]
  ]
}));

pages.push(exp({
  slug: "to-malaysia", crumb: "To Malaysia",
  title: "Export Pet from Thailand to Malaysia (2026) | PattayaPets",
  desc: "Thailand to Malaysia pet export: DVS import requirements, DLD export permit, short ASEAN flight and document checklist.",
  h1: "Taking a pet from Thailand to Malaysia",
  lede: "Malaysia is a regional neighbour but still a formal import &mdash; " +
    "<strong>DVS Malaysia</strong> rules and Thai DLD export paperwork must align before you fly.",
  officialExtra:
    "<p><strong>Malaysian sources:</strong> " +
    "<a href=\"https://www.dvs.gov.my/\" target=\"_blank\" rel=\"noopener nofollow\">DVS Malaysia</a>. " +
    "Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-malaysia.html\">bringing a pet from Malaysia</a>.</p>",
  sections: [
    { h: "What Malaysia typically requires", html:
      "<p>Malaysia&rsquo;s Department of Veterinary Services (DVS) generally expects:</p>" +
      "<ul>" +
      "<li>Advance <strong>import permit</strong> or approval for dogs and cats</li>" +
      "<li>ISO microchip and current <strong>rabies vaccination</strong></li>" +
      "<li>Thai <strong>DLD export health certificate</strong> and export permit</li>" +
      "<li>Flight details matching the declared arrival point</li>" +
      "</ul>" +
      "<p>Rules differ for peninsular Malaysia vs East Malaysia and can change &mdash; verify with DVS before you start the Thai export.</p>" +
      DLD_SIDE },
    { h: "The timeline — work backwards", html:
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th></tr></thead><tbody>' +
      '<tr><th scope="row">6&ndash;8 weeks before</th><td>Apply for Malaysian import approval through DVS</td></tr>' +
      '<tr><th scope="row">&ge;15 days before export</th><td>Thai DLD export permit (form 1/1)</td></tr>' +
      '<tr><th scope="row">Final week</th><td>DLD health certificate; AQS inspection</td></tr>' +
      '<tr><th scope="row">Arrival</th><td>Present documents to Malaysian quarantine / veterinary officer</td></tr>' +
      '</tbody></table></div>' },
    { h: "Short flight from Bangkok", html:
      "<p>Kuala Lumpur is under three hours from Bangkok. Cabin travel may be possible for " +
      "small pets; confirm heat embargoes and crate rules. If you live in Pattaya, export " +
      "through Suvarnabhumi or U-Tapao as named on your DLD permit.</p>" },
    { h: "Common mistakes", html:
      "<ul>" +
      "<li><strong>Assuming ASEAN proximity means no import permit</strong>.</li>" +
      "<li><strong>Microchip number mismatch</strong> between DVS application and Thai export papers.</li>" +
      "<li><strong>Expired rabies vaccination</strong> on the Thai health certificate.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Do I need a Malaysian import permit from Thailand?",
     "<p>Usually yes for dogs and cats — apply through DVS Malaysia before booking export.</p>"],
    ["How long does Thailand-to-Malaysia pet export take?",
     "<p>Often 4–8 weeks minimum for Malaysian approval plus Thai DLD export lead time.</p>"],
    ["Can I export through U-Tapao to Malaysia?",
     "<p>Only if your DLD export permit names U-Tapao and the airline route accepts pets — confirm both sides.</p>"],
    ["Is quarantine required in Malaysia?",
     "<p>Depends on DVS classification and vaccination history — verify current rules for your pet.</p>"],
    ["What does the Thai DLD export process involve?",
     "<p>Export permit, health certificate from an approved vet, AQS inspection — see <a href=\"/take-pet-out-of-thailand/export-process.html\">export process</a>.</p>"]
  ]
}));

pages.push(exp({
  slug: "to-south-korea", crumb: "To South Korea",
  title: "Export Pet from Thailand to South Korea (2026) | PattayaPets",
  desc: "Thailand to South Korea pet export: APQA import rules, rabies antibody test, DLD export permit and Incheon arrival planning.",
  h1: "Taking a pet from Thailand to South Korea",
  lede: "South Korea&rsquo;s <strong>APQA</strong> import system is strict &mdash; antibody " +
    "tests, designated routes and advance permission are normal for pets coming from Thailand.",
  officialExtra:
    "<p><strong>Korean sources:</strong> " +
    "<a href=\"https://www.animal.go.kr/\" target=\"_blank\" rel=\"noopener nofollow\">APQA Korea</a>. " +
    "Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-south-korea.html\">bringing a pet from South Korea</a>.</p>",
  sections: [
    { h: "What South Korea typically requires", html:
      "<p>APQA import of dogs and cats from non-rabies-free countries commonly includes:</p>" +
      "<ul>" +
      "<li>Advance <strong>import licence</strong> / quarantine reservation</li>" +
      "<li>ISO microchip and rabies vaccination history</li>" +
      "<li><strong>Rabies antibody test</strong> from an approved laboratory (often with a waiting period)</li>" +
      "<li>Thai DLD export health certificate and export permit</li>" +
      "<li>Arrival through an approved port such as <strong>Incheon</strong></li>" +
      "</ul>" +
      "<p>Verify the current APQA checklist &mdash; Korea updates requirements periodically.</p>" +
      DLD_SIDE },
    { h: "The timeline — work backwards", html:
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th></tr></thead><tbody>' +
      '<tr><th scope="row">2&ndash;3 months before</th><td>Rabies antibody test and any APQA waiting period</td></tr>' +
      '<tr><th scope="row">6&ndash;8 weeks before</th><td>APQA import permission / quarantine booking</td></tr>' +
      '<tr><th scope="row">&ge;15 days before export</th><td>Thai DLD export permit (form 1/1)</td></tr>' +
      '<tr><th scope="row">Departure day</th><td>AQS inspection; fly to Incheon</td></tr>' +
      '</tbody></table></div>' },
    { h: "Departing from Pattaya or Bangkok", html:
      "<p>Most exports use <strong>Suvarnabhumi</strong>. Allow road time from Pattaya. " +
      "See <a href=\"/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html\">Suvarnabhumi " +
      "AQS</a> (import mirror) for how the station operates.</p>" },
    { h: "Common mistakes", html:
      "<ul>" +
      "<li><strong>Booking Korea import before the antibody test clears</strong>.</li>" +
      "<li><strong>Assuming Thailand&rsquo;s entry paperwork covers Korean import</strong>.</li>" +
      "<li><strong>Last-minute DLD export</strong> while APQA permission is still pending.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Does South Korea require a rabies titer test from Thailand?",
     "<p>APQA commonly requires a rabies antibody test from an approved lab for imports from non-designated countries — verify the current APQA list.</p>"],
    ["How long does Thailand-to-Korea pet export take?",
     "<p>Often two to three months minimum because of antibody testing and APQA lead time.</p>"],
    ["Can my pet enter Korea through Incheon airport?",
     "<p>Incheon is the usual international entry point for pets — confirm APQA approval for your flight.</p>"],
    ["What Thai documents does APQA expect?",
     "<p>DLD export permit, export health certificate, vaccination records with matching microchip — all aligned with APQA import approval.</p>"],
    ["Should I use a relocation agent?",
     "<p>Korea imports are paperwork-heavy; see <a href=\"/pet-relocation/\">relocation agents</a> if you want managed export.</p>"]
  ]
}));

module.exports = pages;
