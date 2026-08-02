"use strict";
/* SEO export guides: Italy, Malaysia and South Korea destination corridors. */

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
  "1 August 2026. Export rules change without notice. " +
  "Confirm with the DLD and the destination authority before booking.";

const OFFICIAL =
  "<p><strong>Official sources to verify against:</strong> " +
  claimLink("TH-EXPORT-SEQUENCE-2025-10", "DLD Region 9 export procedure") + ".</p>";

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
  "(R1/1 filed as the responsible AQS directs), then a mandatory DLD health examination " +
  "no more than <strong>2&ndash;3 days before travel</strong>. If compliant, the station " +
  "issues R9 and the health certificate. The reviewed procedure gives no universal " +
  "email channel or 15-day deadline. " + claimLink("TH-EXPORT-SEQUENCE-2025-10", "DLD source") + ". See " +
  "<a href=\"/take-pet-out-of-thailand/export-process.html\">export process</a>.</p>";

function exp(o) {
  var sections = attachImportMirrorLink((o.sections || []).slice(), o.slug);
  sections.push(REGULATED_EXPORT_FROM_PATTAYA);
  sections.push(REGULATED_EXPORT_RELOCATION);
  sections.push({ h: "Official sources", html: (o.officialExtra || "") + OFFICIAL });
  return article({
    path: "/take-pet-out-of-thailand/" + o.slug + ".html",
    title: o.title, desc: o.desc, crumb: o.crumb, breadcrumbs: SUB,
    eyebrow: "Taking a pet out of Thailand &middot; By destination",
    h1: o.h1, lede: o.lede, verify: VERIFY,
    updated: o.updated || "2026-06-04",
    sections: sections, faqs: rb.mergeFaqs(o.faqs, REGULATED_EXPORT_EXTRA_FAQS),
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
    "rel=\"noopener\">EU pet movement</a>. Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-italy.html\">bringing a pet from Italy</a>.</p>",
  sections: [
    { h: "What Italy / the EU requires from Thailand", html: EU_ENTRY + DLD_SIDE },
    { h: "The timeline — work backwards", html:
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th></tr></thead><tbody>' +
      '<tr><th scope="row">Month 1</th><td>Rabies titer test if not already valid</td></tr>' +
      '<tr><th scope="row">Months 1&ndash;3</th><td>Three-month wait from blood sample (EU non-listed country rule)</td></tr>' +
      '<tr><th scope="row">As the AQS directs</th><td>File Thai DLD R1/1; no universal 15-day deadline is stated in the reviewed procedure</td></tr>' +
      '<tr><th scope="row">No more than 2&ndash;3 days before travel</th><td>Mandatory DLD examination; R9 and health certificate if compliant</td></tr>' +
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
      "<li><strong>Missing the DLD examination window</strong> &mdash; it must occur no more than 2&ndash;3 days before travel.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Does Italy require the rabies titer test from Thailand?",
     "<p>Yes, under standard EU third-country rules — blood sample at least 30 days after vaccination, then a three-month wait.</p>"],
    ["Is the EU pet passport enough to enter Italy from Thailand?",
     "<p>No. You need a third-country EU health certificate endorsed on the Thai export side.</p>"],
    ["How long does export from Thailand to Italy take?",
     "<p>If a new titer is required, EU rules impose a three-month wait from the sample date. Laboratory, DLD, certificate and airline time are additional and route-specific; this guide does not state an unsupported total.</p>"],
    ["Which Italian airports accept pets from third countries?",
     "<p>Rome Fiumicino and Milan Malpensa are common entry points — confirm designated traveller entry rules before booking.</p>"],
    ["What is the Thai DLD export fee?",
     "<p>The reviewed DLD procedure does not publish one dependable end-to-end price. Ask the responsible AQS and keep government charges separate from veterinary, laboratory, crate, airline and optional-agent quotes.</p>"]
  ]
}));

pages.push(exp({
  slug: "to-malaysia", crumb: "To Malaysia",
  updated: "2026-08-01",
  title: "Export Pet from Thailand to Malaysia (2026) | PattayaPets",
  desc: "Thailand to Malaysia pet export: reviewed DVS cargo-import controls, Thai DLD export procedure and unresolved accompanied-pet pathway.",
  h1: "Taking a pet from Thailand to Malaysia",
  lede: "Malaysia is a regional neighbour but still a formal import &mdash; " +
    "<strong>DVS Malaysia</strong> rules and Thai DLD export paperwork must align. " +
    "The DVS protocol reviewed here is expressly scoped to a cargo consignment.",
  officialExtra:
    "<p><strong>Malaysian sources:</strong> " +
    claimLink("MY-CARGO-CONSIGNMENT-2026-08", "DVS cargo-consignment page") + "; " +
    claimLink("MY-NONSCHEDULED-CONTROLS-2026-03", "DVS non-scheduled-country protocol") + ". " +
    "Import mirror: " +
    "<a href=\"/bring-pet-to-thailand/from-malaysia.html\">bringing a pet from Malaysia</a>.</p>",
  sections: [
    { h: "What Malaysia requires", html:
      "<p>The DVS document reviewed on 1 August 2026 is titled and worded for the " +
      "<strong>importation of dogs and cats from Thailand into Malaysia by cargo " +
      "consignment</strong>. Its conditions must not be presented as a universal rule " +
      "for an accompanied cabin or checked-baggage pet. " +
      claimLink("MY-CARGO-CONSIGNMENT-2026-08", "DVS cargo-consignment page") + ".</p>" +
      "<p>For that reviewed non-scheduled-country cargo route, DVS requires an import " +
      "permit, an ISO-compatible microchip and a government veterinary health certificate " +
      "based on an examination within seven days before export. Arrival quarantine is " +
      "compulsory for at least seven days and may be extended up to six months case by " +
      "case. " + claimLink("MY-NONSCHEDULED-CONTROLS-2026-03", "DVS protocol") + ".</p>" +
      "<p>Obtain the current permit and protocol directly from DVS and the destination " +
      "state authority, then give those conditions to DLD and the cargo carrier. For an " +
      "accompanied pet, this audit did not locate a current " +
      "first-party DVS protocol that establishes the applicable pathway. That is a " +
      "verification gap: ask DVS whether accompanied entry is accepted and request the " +
      "exact written conditions before booking.</p>" +
      DLD_SIDE },
    { h: "The timeline — work backwards", html:
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th></tr></thead><tbody>' +
      '<tr><th scope="row">Before booking</th><td>Tell DVS whether the pet will be a cargo consignment or accompanied; obtain the current written pathway for that exact mode</td></tr>' +
      '<tr><th scope="row">For the reviewed cargo route</th><td>Obtain the DVS permit; match the ISO-compatible microchip across the documents; arrange the government certificate examination within seven days before export; plan for at least seven days of quarantine, which DVS may extend case by case</td></tr>' +
      '<tr><th scope="row">As the Thai AQS directs</th><td>File R1/1 with the Malaysian conditions; no universal 15-day deadline is stated in the reviewed DLD procedure</td></tr>' +
      '<tr><th scope="row">No more than 2&ndash;3 days before travel</th><td>Attend the mandatory DLD examination; obtain R9 and health certificate if compliant</td></tr>' +
      '<tr><th scope="row">Arrival</th><td>Present documents to Malaysian quarantine / veterinary officer</td></tr>' +
      '</tbody></table></div>' },
    { h: "Choose a route only after DVS confirms the mode", html:
      "<p>Do not infer cabin or checked-baggage eligibility from the short passenger route. " +
      "The reviewed protocol is cargo-consignment-only. Confirm the Malaysian entry port, " +
      "carrier mode and Thai departure AQS in writing before paying. The DLD AQS map " +
      "reviewed on 1 August 2026 does not list U-Tapao/Rayong airport.</p>" },
    { h: "Common mistakes", html:
      "<ul>" +
      "<li><strong>Applying cargo rules to an accompanied pet</strong> &mdash; the reviewed DVS protocol does not support that generalisation.</li>" +
      "<li><strong>Microchip number mismatch</strong> between DVS application and Thai export papers.</li>" +
      "<li><strong>Expired rabies vaccination</strong> on the Thai health certificate.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Do I need a Malaysian import permit from Thailand?",
     "<p>The reviewed DVS cargo-consignment protocol requires the permit and other stated controls. For an accompanied pet, ask DVS for the current written pathway; this guide cannot extend cargo conditions to that different mode.</p>"],
    ["How long does Thailand-to-Malaysia pet export take?",
     "<p>No verified universal total is stated here. DVS must first confirm the pathway for the travel mode. Separately, ask the responsible Thai AQS when to file R1/1 and attend the DLD examination no more than 2&ndash;3 days before travel.</p>"],
    ["Can I fly my pet to Malaysia from U-Tapao?",
     "<p>The current DLD AQS map reviewed here does not list U-Tapao/Rayong airport. Confirm the departure clearance port with DLD and the permitted arrival mode with DVS before booking.</p>"],
    ["Is quarantine required in Malaysia?",
     "<p>For the reviewed non-scheduled-country cargo route, yes: DVS states compulsory quarantine for at least seven days and may extend it up to six months case by case. This source does not establish a universal answer for an accompanied cabin or checked-baggage pet. " + claimLink("MY-NONSCHEDULED-CONTROLS-2026-03", "DVS protocol") + ".</p>"],
    ["What does the Thai DLD export process involve?",
     "<p>File R1/1 as the responsible AQS directs, attend the mandatory DLD examination no more than 2&ndash;3 days before travel, and obtain R9 and the health certificate if compliant. See <a href=\"/take-pet-out-of-thailand/export-process.html\">export process</a>.</p>"]
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
    claimLink("KR-PET-ENTRY-AIP-2024-10", "Korea Aeronautical Information Publication") + "; " +
    claimLink("KR-PET-ENTRY-MOFA-2023-12", "Korean MOFA embassy guidance") + ". " +
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
      "<li>A <strong>rabies neutralising antibody titre of 0.5&nbsp;IU/ml or higher</strong>, " +
      "with the MOFA page stating the test must be within 24 months before boarding</li>" +
      "<li><strong>Declaration on arrival</strong> &mdash; tick the animal box on the customs " +
      "declaration form and present your pet to a quarantine officer before customs</li>" +
      "</ul>" +
      "<p>The AIP exempts pets under 90 days old and pets coming from rabies-free countries " +
      "from the antibody-result requirement. Thailand should not be treated as a rabies-free " +
      "origin without current APQA confirmation. Noncompliant identification, certificates or " +
      "antibody evidence can trigger quarantine action; this page does not promise same-day release.</p>" +
      "<p><strong>Official conflict at exactly ten animals:</strong> the AIP says advance " +
      "APQA permission is needed for <em>more than 10</em> dogs or cats, while the Korean " +
      "MOFA embassy page says <em>ten or more</em>. These sources conflict for a group of " +
      "exactly ten. Obtain written APQA direction before booking rather than choosing the " +
      "more permissive wording. " + claimLink("KR-PET-ENTRY-AIP-2024-10", "AIP") + "; " +
      claimLink("KR-PET-ENTRY-MOFA-2023-12", "MOFA") + ".</p>" +
      DLD_SIDE },
    { h: "The timeline — work backwards", html:
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th></tr></thead><tbody>' +
      '<tr><th scope="row">Before travel</th><td>Rabies vaccination and a qualifying antibody test, unless an official exemption applies; MOFA states the test must be within 24 months before boarding</td></tr>' +
      '<tr><th scope="row">As the Thai AQS directs</th><td>File R1/1 with Korea&rsquo;s current certificate requirements; no universal 15-day deadline is stated in the reviewed DLD procedure</td></tr>' +
      '<tr><th scope="row">No more than 2&ndash;3 days before travel</th><td>Mandatory DLD examination; R9 and export health certificate if compliant</td></tr>' +
      '<tr><th scope="row">Arrival</th><td>Declare the animal on your customs form; APQA inspection at Incheon</td></tr>' +
      '</tbody></table></div>' },
    { h: "Departing from Pattaya or Bangkok", html:
      "<p>Most exports use <strong>Suvarnabhumi</strong>. Allow road time from Pattaya. " +
      "See <a href=\"/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html\">Suvarnabhumi " +
      "AQS</a> (import mirror) for how the station operates.</p>" },
    { h: "Common mistakes", html:
      "<ul>" +
      "<li><strong>Using a result older than the MOFA window</strong> &mdash; that source states a 24-month maximum before boarding.</li>" +
      "<li><strong>Guessing at exactly ten animals</strong> &mdash; the AIP and MOFA thresholds conflict; ask APQA in writing.</li>" +
      "<li><strong>Assuming Thailand&rsquo;s entry paperwork covers Korean entry</strong>.</li>" +
      "<li><strong>Not declaring the animal</strong> on the customs form at Incheon.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Does South Korea require a rabies titer test from Thailand?",
     "<p>The published route requires a result of at least 0.5 IU/ml, with exemptions in the AIP for pets under 90 days and origins designated rabies-free. The MOFA page states the test must be within 24 months before boarding. Confirm how APQA applies any exemption to the individual animal.</p>"],
    ["Do I need advance permission or an import licence for Korea?",
     "<p>The ordinary route relies on the government export certificate, identification and antibody evidence. For group size, the AIP says permission above ten while MOFA says ten or more. Exactly ten is unresolved in the reviewed official sources, so obtain written APQA direction. Commercial movements may follow different controls.</p>"],
    ["How long does Thailand-to-Korea pet export take?",
     "<p>No verified universal total is stated here. Allow for the antibody result and MOFA&rsquo;s 24-month validity limit; separately ask the responsible Thai AQS when to file R1/1 and attend the mandatory examination no more than 2&ndash;3 days before travel.</p>"],
    ["Can my pet enter Korea through Incheon airport?",
     "<p>Yes. APQA&rsquo;s Incheon Airport Regional Office inspects arriving pets. Tick the animal box on your customs declaration form and present the pet and certificate to a quarantine officer before customs.</p>"],
    ["What Thai documents does APQA expect?",
     "<p>The DLD export permit and export quarantine certificate, plus vaccination records and an antibody result whose microchip number matches every other document.</p>"],
    ["Should I use a relocation agent?",
     "<p>An agent is optional. Ask for an itemised scope and verify APQA, DLD and airline requirements directly; PattayaPets has not independently measured agent outcomes.</p>"]
  ]
}));

module.exports = pages;
