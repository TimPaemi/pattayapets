"use strict";
/* SEO country guides: Italy, Malaysia and South Korea import corridors. */

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
  claimLink("TH-AQS-MAP-2025-10", "DLD AQS map") + ".</p>";

const STD_STEPS =
  "Follow the standard steps &mdash; " +
  "<a href=\"/bring-pet-to-thailand/microchip-requirements.html\">microchip</a>, " +
  "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">rabies and core vaccinations</a>, " +
  "<a href=\"/bring-pet-to-thailand/health-certificate.html\">health certificate</a> " +
  "and <a href=\"/bring-pet-to-thailand/import-permit-thailand-dld.html\">DLD import permit</a>. ";

const EU_RETURN =
  "<p>Thailand is not on the EU&rsquo;s list of low-risk countries, so to bring a pet " +
  "back into the EU from Thailand you need a valid rabies vaccination and a " +
  "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">rabies titer test</a>, " +
  "with the blood sample taken at least 30 days after vaccination and a three-month wait " +
  "before entry. Having the titer test done before you leave removes that wait later.</p>";

const EU_IMPORT_REF =
  "<p>For the shared EU export-certificate framework, see " +
  "<a href=\"/bring-pet-to-thailand/from-eu.html\">bringing a pet from the EU</a>.</p>";

const TH_IMPORT_TABLE =
  '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
  '<th scope="col">Document</th><th scope="col">What it is</th></tr></thead><tbody>' +
  '<tr><th scope="row">DLD import permit</th><td>After all required primary vaccinations, wait at least 21 days before filing R1/1 as the arrival AQS directs. The scoped guide says to allow 5&ndash;7 Thai business days. ' + claimLink("TH-IMPORT-SEQUENCE-2026-02", "Thai source") + '</td></tr>' +
  '<tr><th scope="row">Microchip certificate</th><td>Implantation certificate with the identifier matching every record. The reviewed Thai source does not state a universal ISO-format or chip-before-rabies rule.</td></tr>' +
  '<tr><th scope="row">Vaccination records</th><td>Complete all required primary vaccinations, then wait at least 21 days before the permit application; documented boosters are exempt when continuity is shown. See our <a href="/bring-pet-to-thailand/rabies-vaccination-titer-test.html">vaccination guide</a>.</td></tr>' +
  '<tr><th scope="row">Government-endorsed health certificate</th><td>Export certificate from the origin country, endorsed as that authority requires.</td></tr>' +
  '<tr><th scope="row">Flight booking</th><td>Itinerary; confirm airline pet policy early.</td></tr>' +
  '</tbody></table></div>';

const TH_ARRIVAL =
  "<p>Present the animal and original documents for the AQS inspection. DLD decides " +
  "clearance, detention or other action; this guide does not promise same-day release. " +
  "Follow the responsible station&rsquo;s current notification instructions; the reviewed " +
  "source gives no universal three-day rule. See " +
  '<a href="/bring-pet-to-thailand/thailand-pet-quarantine.html">pet quarantine in Thailand</a>.</p>';

function country(o) {
  var sections = attachReturnExportLink((o.sections || []).slice(), o.slug);
  sections.push(REGULATED_IMPORT_PATTAYA_ARRIVAL);
  sections.push(REGULATED_IMPORT_PATTAYA_LIFE);
  sections.push({ h: "Official sources", html: (o.officialExtra || "") + OFFICIAL });
  return article({
    path: "/bring-pet-to-thailand/" + o.slug + ".html",
    title: o.title, desc: o.desc, crumb: o.crumb, breadcrumbs: SUB,
    eyebrow: "Bringing a pet to Thailand &middot; By country",
    h1: o.h1, lede: o.lede, verify: VERIFY,
    updated: o.updated || "2026-06-04",
    sections: sections, faqs: rb.mergeFaqs(o.faqs, REGULATED_IMPORT_EXTRA_FAQS),
    related: o.related || importCountryRelated(o.slug, [
      { name: "The full process", path: "/bring-pet-to-thailand/", desc: "Every step, in order." },
      { name: "Bring a dog to Thailand", path: "/bring-pet-to-thailand/bring-a-dog-to-thailand.html", desc: "Dog-specific import guide." },
      { name: "Bring a cat to Thailand", path: "/bring-pet-to-thailand/bring-a-cat-to-thailand.html", desc: "Cat-specific import guide." }
    ])
  });
}

const pages = [];

pages.push(country({
  slug: "from-italy", crumb: "From Italy",
  title: "Bring Pet to Thailand from Italy (2026) | PattayaPets",
  desc: "Italy to Thailand pet import: EU export certificate, DLD permit timeline, Rome/Milan routing to Bangkok and return-to-EU titer planning.",
  h1: "Bringing a pet to Thailand from Italy",
  lede: "Italy follows the standard EU export framework for third-country moves. The Thai DLD steps are the same as from any EU member state &mdash; what matters is competent-authority endorsement and airline booking.",
  officialExtra:
    "<p><strong>Italian / EU sources:</strong> " +
    "<a href=\"https://www.salute.gov.it/portale/temi/p2/6/impiantare-animale-domestico-italia\" " +
    "target=\"_blank\" rel=\"noopener\">Italian Ministry of Health pet travel</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener\">EU pet movement</a>. Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-italy.html\">taking a pet to Italy</a>.</p>",
  sections: [
    { h: "The timeline — what to do when", html:
      "<p>Work backwards from your flight. <strong>Rome&ndash;Bangkok</strong> and " +
      "<strong>Milan&ndash;Bangkok</strong> routes exist; confirm pet acceptance early.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th></tr></thead><tbody>' +
      '<tr><th scope="row">3+ months before (if EU return possible)</th><td>Microchip, rabies vaccination, optional <a href="/bring-pet-to-thailand/rabies-vaccination-titer-test.html">rabies titer test</a></td></tr>' +
      '<tr><th scope="row">Before the permit application</th><td>Complete all required primary vaccinations and wait at least 21 days; documented boosters are exempt when continuity is shown</td></tr>' +
      '<tr><th scope="row">After that wait</th><td>File DLD form R1/1 as the arrival AQS directs and allow the scoped guide&rsquo;s 5&ndash;7 Thai business days</td></tr>' +
      '<tr><th scope="row">Final 1&ndash;2 weeks</th><td>EU export health certificate endorsed by the competent Italian veterinary authority</td></tr>' +
      '<tr><th scope="row">Arrival day</th><td>AQS inspection at Suvarnabhumi; 500&nbsp;baht fee</td></tr>' +
      '</tbody></table></div><p>' + STD_STEPS + EU_IMPORT_REF },
    { h: "The Italian side of the paperwork", html:
      "<p>For travel from Italy to Thailand, your vet completes an <strong>EU animal health " +
      "certificate</strong> for export to a non-EU country. It must be endorsed by the " +
      "competent Italian authority &mdash; not just signed by any clinic vet. The EU pet " +
      "passport used for holidays inside Europe is <em>not</em> sufficient on its own.</p>" },
    { h: "Documents Thailand expects", html: TH_IMPORT_TABLE + TH_ARRIVAL },
    { h: "Plan the return to Italy before you leave", html: EU_RETURN +
      "<p>See <a href=\"/take-pet-out-of-thailand/to-italy.html\">exporting a pet to Italy</a>.</p>" },
    { h: "Common mistakes", html:
      "<ul>" +
      "<li><strong>Using the EU pet passport alone</strong> for export to Thailand.</li>" +
      "<li><strong>DLD permit before the vaccination wait</strong> &mdash; all required primary vaccines come first, followed by at least 21 days; documented boosters are exempt.</li>" +
      "<li><strong>Skipping the titer test</strong> if you may return to the EU.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Is the EU pet passport enough from Italy?",
     "<p>No. You need an EU export health certificate endorsed for third-country travel plus the Thai DLD import permit.</p>"],
    ["Can I fly direct from Rome or Milan with a pet?",
     "<p>Direct Bangkok routes exist but pet policies vary. Book early — see <a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">airline pet policies</a>.</p>"],
    ["Will my pet quarantine on arrival in Thailand?",
     "<p>DLD decides after arrival inspection. Complete documents do not guarantee a particular release time or rule out detention.</p>"],
    ["What does Italy require for the return journey?",
     "<p>Rabies vaccination, titer test and three-month wait from the blood sample under EU third-country rules.</p>"],
    ["Is Italy different from the general EU import guide?",
     "<p>The veterinary framework is the same; this page adds Italy-specific routing and authority notes. See also <a href=\"/bring-pet-to-thailand/from-eu.html\">import from the EU</a>.</p>"]
  ]
}));

pages.push(country({
  slug: "from-malaysia", crumb: "From Malaysia",
  title: "Bring Pet to Thailand from Malaysia (2026) | PattayaPets",
  desc: "Malaysia to Thailand pet import: DVS export permit, DLD import permit, short ASEAN flight routes and document checklist for dogs and cats.",
  h1: "Bringing a pet to Thailand from Malaysia",
  lede: "Malaysia&ndash;Thailand is a regional route, but the DVS export documents, Thai " +
    "DLD import sequence and operating-airline rules still have to align.",
  officialExtra:
    "<p><strong>Malaysian sources:</strong> " +
    "<a href=\"https://www.dvs.gov.my/\" target=\"_blank\" rel=\"noopener\">" +
    "Department of Veterinary Services (DVS) Malaysia</a>. Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-malaysia.html\">taking a pet to Malaysia</a>.</p>",
  sections: [
    { h: "The timeline — what to do when", html:
      "<p>Work backwards from your flight. <strong>Kuala Lumpur&ndash;Bangkok</strong> and " +
      "<strong>Penang&ndash;Bangkok</strong> routes are common; confirm pet acceptance when you book.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th></tr></thead><tbody>' +
      '<tr><th scope="row">Before the permit application</th><td>Obtain an implantation certificate; complete all required primary vaccinations and wait at least 21 days. Documented boosters are exempt when continuity is shown</td></tr>' +
      '<tr><th scope="row">After that wait</th><td>File DLD form R1/1 as the arrival AQS directs and allow the scoped guide&rsquo;s 5&ndash;7 Thai business days</td></tr>' +
      '<tr><th scope="row">2&ndash;3 weeks before</th><td>Malaysian export permit / health certificate through DVS as required</td></tr>' +
      '<tr><th scope="row">Before travel</th><td>Follow the responsible AQS&rsquo;s current itinerary-notification instructions; no universal three-day rule appears in the reviewed source</td></tr>' +
      '</tbody></table></div><p>' + STD_STEPS + "</p>" },
    { h: "The Malaysian side of the paperwork", html:
      "<p>Malaysia&rsquo;s <strong>Department of Veterinary Services (DVS)</strong> oversees " +
      "export of dogs and cats. Your vet completes the health work; DVS endorsement and any " +
      "export permit must match what Thailand&rsquo;s AQS expects on landing. Requirements " +
      "can differ for peninsular Malaysia vs East Malaysia &mdash; confirm for your departure " +
      "state.</p>" },
    { h: "Documents Thailand expects", html: TH_IMPORT_TABLE + TH_ARRIVAL },
    { h: "Flying a short ASEAN route", html:
      "<p>Small dogs and cats may travel in cabin on some carriers; larger dogs go checked " +
      "or cargo. Heat and crate sizing still matter on short hops. See " +
      "<a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">airline pet policies</a> " +
      "and <a href=\"/bring-pet-to-thailand/u-tapao-airport-pets.html\">U-Tapao vs Bangkok</a> " +
      "if you are heading straight to Pattaya.</p>" },
    { h: "If you may return to Malaysia", html:
      "<p>Malaysia&rsquo;s re-import rules for pets that have been abroad can involve import " +
      "permits, updated vaccinations and quarantine in some cases. If you might return, " +
      "verify current DVS import requirements before you leave Malaysia. See " +
      "<a href=\"/take-pet-out-of-thailand/to-malaysia.html\">export to Malaysia</a>.</p>" }
  ],
  faqs: [
    ["How long does it take to bring a pet from Malaysia to Thailand?",
     "<p>The Thai sequence includes at least 21 days after all required primary vaccinations before applying, then 5&ndash;7 Thai business days for a complete application under the scoped guide. DVS, certificate and airline time is route-specific, so this page does not state one unsupported total.</p>"],
    ["Can I fly Kuala Lumpur to Bangkok with a pet in cabin?",
     "<p>Some airlines allow small pets in cabin subject to weight and carrier rules — confirm when you book.</p>"],
    ["Does Malaysia require a separate export permit?",
     "<p>DVS oversees export; your vet should coordinate the current export health certificate and any permit. Verify with DVS before travel.</p>"],
    ["Is quarantine required on arrival in Thailand?",
     "<p>DLD decides after arrival inspection. Complete documents do not guarantee a particular release time or rule out detention.</p>"],
    ["Can I enter Thailand via U-Tapao from Malaysia?",
     "<p>The reviewed DLD map does not list a U-Tapao/Rayong airport AQS. Obtain written DLD confirmation before routing there; Suvarnabhumi is a documented alternative.</p>"]
  ]
}));

pages.push(country({
  slug: "from-south-korea", crumb: "From South Korea",
  title: "Bring Pet to Thailand from South Korea (2026) | PattayaPets",
  desc: "South Korea to Thailand pet import: APQA export certificate, DLD permit, Seoul–Bangkok routing and rabies titer planning for onward travel.",
  h1: "Bringing a pet to Thailand from South Korea",
  lede: "Seoul&ndash;Bangkok is a well-used corridor for teachers, retirees and remote workers " +
    "moving south. South Korea&rsquo;s <strong>APQA</strong> export process is thorough &mdash; " +
    "start early.",
  officialExtra:
    "<p><strong>Korean sources:</strong> " +
    claimLink("KR-PET-ENTRY-AIP-2024-10", "Korea Aeronautical Information Publication") + "; " +
    claimLink("KR-PET-ENTRY-MOFA-2023-12", "Korean MOFA embassy guidance") + ". Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-south-korea.html\">taking a pet to South Korea</a>.</p>",
  sections: [
    { h: "The timeline — what to do when", html:
      "<p>Work backwards from your flight. <strong>Incheon&ndash;Bangkok</strong> direct routes " +
      "are common; confirm pet acceptance and cabin vs cargo rules early.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th></tr></thead><tbody>' +
      '<tr><th scope="row">3+ months before (if onward travel possible)</th><td>Microchip, rabies vaccination, optional <a href="/bring-pet-to-thailand/rabies-vaccination-titer-test.html">rabies titer test</a></td></tr>' +
      '<tr><th scope="row">Before the permit application</th><td>Obtain an implantation certificate; complete all required primary vaccinations and wait at least 21 days. Documented boosters are exempt when continuity is shown</td></tr>' +
      '<tr><th scope="row">After that wait</th><td>File DLD form R1/1 as the arrival AQS directs and allow the scoped guide&rsquo;s 5&ndash;7 Thai business days</td></tr>' +
      '<tr><th scope="row">Final 2&ndash;3 weeks</th><td>APQA export inspection and international health certificate</td></tr>' +
      '<tr><th scope="row">Before travel</th><td>Follow the responsible AQS&rsquo;s current itinerary-notification instructions; no universal three-day rule appears in the reviewed source</td></tr>' +
      '</tbody></table></div><p>' + STD_STEPS + "</p>" },
    { h: "The South Korean side of the paperwork", html:
      "<p>Export of dogs and cats from South Korea goes through the " +
      "<strong>Animal and Plant Quarantine Agency (APQA)</strong>. Your vet prepares " +
      "vaccination records and health checks; APQA issues the export certificate needed " +
      "for international travel. Microchip numbers must match every document.</p>" },
    { h: "Documents Thailand expects", html: TH_IMPORT_TABLE + TH_ARRIVAL },
    { h: "Cabin vs cargo from Incheon", html:
      "<p>Many owners fly small dogs and cats in cabin on Korean carriers subject to weight " +
      "limits; larger pets travel as checked baggage or cargo. Summer heat restrictions may " +
      "apply. See <a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">airline pet policies</a>.</p>" },
    { h: "If you may return to South Korea", html:
      "<p>Bringing a pet back into South Korea means meeting APQA&rsquo;s entry rules again: a " +
      "government export quarantine certificate from the country you leave, microchip " +
      "identification, rabies vaccination, and a rabies neutralising antibody titre of " +
      "0.5&nbsp;IU/ml or higher. The AIP exempts pets under 90 days and origins it " +
      "designates rabies-free; MOFA states the test must be within 24 months before boarding.</p>" +
      "<p><strong>Exactly ten animals is unresolved in the reviewed official sources:</strong> " +
      "the AIP says advance APQA permission for more than ten, while MOFA says ten or " +
      "more. Obtain written APQA direction rather than choosing the more permissive wording. " +
      claimLink("KR-PET-ENTRY-AIP-2024-10", "AIP") + "; " +
      claimLink("KR-PET-ENTRY-MOFA-2023-12", "MOFA") + ". See " +
      "<a href=\"/take-pet-out-of-thailand/to-south-korea.html\">export to South Korea</a>.</p>" }
  ],
  faqs: [
    ["What does APQA require to export a pet from Korea?",
     "<p>Current rabies vaccination, microchip identification, health examination and APQA export certificate — confirm the latest APQA checklist before you book.</p>"],
    ["Can I fly Incheon to Bangkok with a pet in cabin?",
     "<p>Only the operating airline can confirm the mode for the specific animal, container, route and aircraft. Obtain written acceptance before booking.</p>"],
    ["Does Thailand require quarantine from South Korea?",
     "<p>DLD decides after arrival inspection. Complete documents do not guarantee a particular release time or rule out detention.</p>"],
    ["Should I do a rabies titer test before leaving Korea?",
     "<p>The reviewed detailed Thai instruction is scoped to USA-origin dogs, cats and rabbits, so it does not establish the answer for Korea. Ask the responsible AQS. UK and EU routes can require a destination-specific titer and wait. Australia instead requires an approved-country pathway with qualifying work there; do not assume a test performed in Korea or Thailand is sufficient without DAFF confirmation. " + claimLink("AU-NONAPPROVED-PATH-2026-08", "DAFF FAQ") + ".</p>"],
    ["How do I get from Bangkok to Pattaya after landing?",
     "<p>Arrange a vehicle that explicitly accepts the animal and crate; travel time varies with route and traffic. See <a href=\"/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html\">arriving at Suvarnabhumi</a>.</p>"]
  ]
}));

module.exports = pages;
