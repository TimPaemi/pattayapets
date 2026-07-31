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
    "<a href=\"https://www.dvs.gov.my/index.php/pages/view/804?mid=53\" target=\"_blank\" rel=\"noopener nofollow\">DVS pet import requirements</a> " +
    "and the <a href=\"https://www.dvs.gov.my/index.php/announcements/view/207\" target=\"_blank\" rel=\"noopener nofollow\">5 February 2026 DVS notice</a> suspending the May 2025 requirement documents. " +
    "Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-malaysia.html\">bringing a pet from Malaysia</a>.</p>",
  sections: [
    { h: "What Malaysia requires", html:
      "<p>Malaysia&rsquo;s Department of Veterinary Services (DVS) requires:</p>" +
      "<ul>" +
      "<li>An <strong>import permit</strong> &mdash; an animal that arrives without one is refused " +
      "entry. Apply to the State Veterinary Director or the DVS Director-General for peninsular " +
      "Malaysia; Sabah and Sarawak apply through their own state authorities. The fee is " +
      "RM&nbsp;5 per animal and the permit is valid <strong>30 days</strong> from issue.</li>" +
      "<li>A <strong>minimum age of three months</strong> for dogs and cats</li>" +
      "<li>Current <strong>rabies vaccination</strong> records, submitted with the permit application</li>" +
      "<li>Thai <strong>DLD export health certificate</strong> and export permit</li>" +
      "<li><strong>Quarantine on arrival</strong> &mdash; Thailand is not on the DVS exemption list, " +
      "so a pet arriving from Thailand faces a minimum of <strong>7 days</strong>. Quarantine " +
      "stations are at KLIA (Sepang), Penang International Airport, and Padang Besar on the " +
      "Perlis&ndash;Thailand border.</li>" +
      "<li>Microchipping is <strong>not</strong> a general DVS requirement &mdash; it applies to " +
      "restricted breeds. Chip anyway: the Thai export paperwork and your airline rely on it.</li>" +
      "</ul>" +
      "<p><strong>Check before you book.</strong> On <strong>5 February 2026</strong> DVS suspended " +
      "both of its May 2025 import-requirement documents for dogs and cats and has not published " +
      "replacements. Confirm the current requirement set with DVS before you start the Thai export.</p>" +
      DLD_SIDE },
    { h: "The timeline — work backwards", html:
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th></tr></thead><tbody>' +
      '<tr><th scope="row">Within 30 days of travel</th><td>Apply to DVS for the import permit &mdash; it is valid 30 days from issue</td></tr>' +
      '<tr><th scope="row">&ge;15 days before export</th><td>Thai DLD export permit (form 1/1)</td></tr>' +
      '<tr><th scope="row">Final week</th><td>DLD health certificate; AQS inspection</td></tr>' +
      '<tr><th scope="row">Arrival</th><td>Present documents to Malaysian quarantine / veterinary officer</td></tr>' +
      '</tbody></table></div>' },
    { h: "Short flight from Bangkok", html:
      "<p>Kuala Lumpur is under three hours from Bangkok. Cabin travel may be possible for " +
      "small pets; confirm heat embargoes and crate rules. If you live in Pattaya, export " +
      "through Suvarnabhumi &mdash; U-Tapao has no Animal Quarantine Station.</p>" },
    { h: "Common mistakes", html:
      "<ul>" +
      "<li><strong>Assuming ASEAN proximity means no import permit</strong>.</li>" +
      "<li><strong>Microchip number mismatch</strong> between DVS application and Thai export papers.</li>" +
      "<li><strong>Expired rabies vaccination</strong> on the Thai health certificate.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Do I need a Malaysian import permit from Thailand?",
     "<p>Yes. A dog or cat that arrives without an import permit is refused entry. Apply to the State Veterinary Director or the DVS Director-General; the fee is RM 5 per animal.</p>"],
    ["How long does Thailand-to-Malaysia pet export take?",
     "<p>The Thai DLD export permit needs at least 15 days. The Malaysian permit is issued quickly but is only valid for 30 days, so apply for it inside that window and run the two timelines together.</p>"],
    ["Can I fly my pet to Malaysia from U-Tapao?",
     "<p>No. U-Tapao is not one of the DLD's animal quarantine stations, so the export cannot be cleared there. Use Suvarnabhumi.</p>"],
    ["Is quarantine required in Malaysia?",
     "<p>Yes — a minimum of 7 days for a pet arriving from Thailand, which is not on the DVS quarantine-exemption list. Quarantine stations are at KLIA, Penang and Padang Besar.</p>"],
    ["What does the Thai DLD export process involve?",
     "<p>Export permit, health certificate from an approved vet, AQS inspection — see <a href=\"/take-pet-out-of-thailand/export-process.html\">export process</a>.</p>"]
  ]
}));

pages.push(exp({
  slug: "to-south-korea", crumb: "To South Korea",
  updated: "2026-07-31",
  title: "Export Pet from Thailand to South Korea (2026) | PattayaPets",
  desc: "Thailand to South Korea pet export: APQA import rules, rabies antibody test, DLD export permit and Incheon arrival planning.",
  h1: "Taking a pet from Thailand to South Korea",
  lede: "South Korea&rsquo;s <strong>APQA</strong> system is document-led &mdash; a Thai " +
    "government export quarantine certificate, a microchip and a rabies antibody result " +
    "decide whether your pet clears on the day it lands.",
  officialExtra:
    "<p><strong>Korean sources:</strong> " +
    "<a href=\"https://www.qia.go.kr/english/html/Animal_livestock/02AnimalLivestock_007-8_FAQ.jsp\" target=\"_blank\" rel=\"noopener nofollow\">APQA &mdash; bringing a dog or cat to Korea</a> and " +
    "<a href=\"https://www.airport.kr/ap_en/1443/subview.do\" target=\"_blank\" rel=\"noopener nofollow\">Incheon Airport animal quarantine</a>. " +
    "Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-south-korea.html\">bringing a pet from South Korea</a>.</p>",
  sections: [
    { h: "What South Korea requires", html:
      "<p>Korea&rsquo;s <strong>Animal and Plant Quarantine Agency (APQA)</strong> admits a pet " +
      "dog or cat on documents and inspection, not on an advance licence:</p>" +
      "<ul>" +
      "<li>A <strong>government export quarantine certificate</strong> issued by the Thai DLD</li>" +
      "<li><strong>Microchip</strong> identification</li>" +
      "<li><strong>Rabies vaccination</strong> history</li>" +
      "<li>A <strong>rabies neutralising antibody titre of 0.5&nbsp;IU/ml or higher</strong></li>" +
      "<li><strong>Declaration on arrival</strong> &mdash; tick the animal box on the customs " +
      "declaration form and present your pet to a quarantine officer before customs</li>" +
      "</ul>" +
      "<p>With a readable microchip and a titre at or above 0.5&nbsp;IU/ml, pets are released " +
      "on the day of arrival. If either is missing, quarantine is extended until the pet is " +
      "chipped and vaccinated and the titre reaches that level. There is <strong>no routine " +
      "import licence or quarantine reservation</strong> for a pet travelling with its owner. " +
      "Advance APQA permission is required when importing more than 10 dogs or cats. " +
      "Commercial movements and other non-personal consignments may have additional " +
      "conditions, so confirm those directly with APQA.</p>" +
      DLD_SIDE },
    { h: "The timeline — work backwards", html:
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th></tr></thead><tbody>' +
      '<tr><th scope="row">Well before travel</th><td>Rabies vaccination, then the rabies neutralising antibody test &mdash; the result must be 0.5&nbsp;IU/ml or higher</td></tr>' +
      '<tr><th scope="row">&ge;15 days before export</th><td>Thai DLD export permit (form 1/1)</td></tr>' +
      '<tr><th scope="row">Final week</th><td>DLD export quarantine certificate; AQS inspection at Suvarnabhumi</td></tr>' +
      '<tr><th scope="row">Arrival</th><td>Declare the animal on your customs form; APQA inspection at Incheon</td></tr>' +
      '</tbody></table></div>' },
    { h: "Departing from Pattaya or Bangkok", html:
      "<p>Most exports use <strong>Suvarnabhumi</strong>. Allow road time from Pattaya. " +
      "See <a href=\"/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html\">Suvarnabhumi " +
      "AQS</a> (import mirror) for how the station operates.</p>" },
    { h: "Common mistakes", html:
      "<ul>" +
      "<li><strong>Flying before the antibody result is back</strong> &mdash; a titre below 0.5&nbsp;IU/ml means extended quarantine on arrival.</li>" +
      "<li><strong>Assuming Thailand&rsquo;s entry paperwork covers Korean entry</strong>.</li>" +
      "<li><strong>Not declaring the animal</strong> on the customs form at Incheon.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Does South Korea require a rabies titer test from Thailand?",
     "<p>Yes. A dog or cat identified by microchip with a rabies neutralising antibody titre of 0.5 IU/ml or higher is released on the day of arrival. Below that level, quarantine is extended until the pet is chipped, vaccinated and the titre reaches 0.5 IU/ml.</p>"],
    ["Do I need advance permission or an import licence for Korea?",
     "<p>Not for a pet travelling with you. The controlling document is the government export quarantine certificate issued by the Thai DLD, together with microchip and rabies antibody evidence. Advance APQA permission applies when importing more than 10 dogs or cats; commercial movements are handled separately — confirm those with APQA.</p>"],
    ["How long does Thailand-to-Korea pet export take?",
     "<p>The pacing item is the rabies antibody test, plus the Thai DLD export permit lead time of at least 15 days. Book the blood draw first and work forward from the result.</p>"],
    ["Can my pet enter Korea through Incheon airport?",
     "<p>Yes. APQA&rsquo;s Incheon Airport Regional Office inspects arriving pets. Tick the animal box on your customs declaration form and present the pet and certificate to a quarantine officer before customs.</p>"],
    ["What Thai documents does APQA expect?",
     "<p>The DLD export permit and export quarantine certificate, plus vaccination records and an antibody result whose microchip number matches every other document.</p>"],
    ["Should I use a relocation agent?",
     "<p>Korea imports are paperwork-heavy; see <a href=\"/pet-relocation/\">relocation agents</a> if you want managed export.</p>"]
  ]
}));

module.exports = pages;
