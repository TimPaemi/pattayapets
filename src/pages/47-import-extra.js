"use strict";
/* Extra origin-country guides for the "Bringing a pet to Thailand" cluster. */

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

const EU_IMPORT_REF =
  "<p>For the shared EU export-certificate framework every member state follows, " +
  "see our <a href=\"/bring-pet-to-thailand/from-eu.html\">bringing a pet from the EU</a> guide.</p>";

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

const TH_DOCS_TABLE =
  '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
  '<th scope="col">Document</th><th scope="col">What it is</th></tr></thead><tbody>' +
  '<tr><th scope="row">DLD import permit</th><td>Form <strong>R1/1</strong>, emailed to the AQS at your arrival airport. Valid <strong>60 days</strong> from issue. Apply <strong>7&ndash;60 days</strong> before departure (around <strong>30 days</strong> is sensible).</td></tr>' +
  '<tr><th scope="row">Microchip certificate</th><td>ISO 11784/11785 15-digit chip, implanted <strong>before</strong> rabies vaccination.</td></tr>' +
  '<tr><th scope="row">Vaccination records</th><td>In English. Dogs: rabies, distemper, hepatitis, parvovirus, leptospirosis (or negative leptospirosis test within 30 days). Cats: rabies and feline panleukopenia. At least <strong>21 days</strong> after primary shots.</td></tr>' +
  '<tr><th scope="row">Government-endorsed health certificate</th><td>EU export certificate for third-country travel, endorsed by the German competent authority.</td></tr>' +
  '<tr><th scope="row">Your passport</th><td>Original at the AQS (or the person collecting a cargo shipment).</td></tr>' +
  '<tr><th scope="row">Pet photo</th><td>Colour, face clearly visible (for the permit application).</td></tr>' +
  '<tr><th scope="row">Flight booking</th><td>Itinerary showing date, flight number and arrival airport.</td></tr>' +
  '</tbody></table></div>';

const TH_ARRIVAL =
  "<p>From Germany, pets with complete paperwork are normally cleared at the AQS the same day &mdash; " +
  "an inspection, not multi-week quarantine. The AQS charges <strong>500&nbsp;baht</strong> per animal. " +
  "Email the AQS to <strong>confirm your arrival date at least three days before landing</strong>. See " +
  '<a href="/bring-pet-to-thailand/thailand-pet-quarantine.html">pet quarantine in Thailand</a> ' +
  "and " +
  '<a href="/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html">arriving at Suvarnabhumi</a>.</p>';

const TH_FAILS =
  "<ul>" +
  "<li><strong>Using the EU pet passport alone</strong> &mdash; it is for travel within the EU, not export to Thailand.</li>" +
  "<li><strong>Wrong endorsement authority</strong> &mdash; the export certificate must be endorsed by the competent German veterinary authority, not just signed by any vet.</li>" +
  "<li><strong>Permit timing</strong> &mdash; DLD import permit applied too early (expires) or too late (AQS cannot process in time).</li>" +
  "<li><strong>Skipping the titer test</strong> if you may return to Germany &mdash; the three-month EU wait catches people who did not plan ahead.</li>" +
  "</ul>";

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

pages.push(country({
  slug: "from-canada", crumb: "From Canada",
  title: "Bring a Pet to Thailand from Canada (CFIA & DLD 2026) | PattayaPets",
  desc: "Bringing a dog or cat from Canada to Thailand: CFIA endorsement of the " +
    "health certificate, and the rabies titer test the return trip will need.",
  h1: "Bringing a pet to Thailand from Canada",
  lede: "The Thai requirements are the standard ones. What is Canada-specific is who " +
    "endorses your paperwork, and what you should plan for if you ever return.",
  sections: [
    { h: "The Canadian side of the paperwork", html:
      "<p>" + STD_STEPS + "In Canada, the export health certificate is completed by your vet and " +
      "endorsed by the <strong>Canadian Food Inspection Agency (CFIA)</strong>. Use a vet " +
      "experienced in export work and book the CFIA endorsement early.</p>" },
    { h: "Plan for the return to Canada", html:
      "<p>Canada is a rabies-controlled country, so Thailand does not require a titer test " +
      "for entry from Canada. But if there is any chance you will bring your pet " +
      "<em>back</em> to Canada, check the Canadian import rules in advance &mdash; and, as " +
      "for all destinations, having the <a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">" +
      "rabies titer test</a> done early keeps your options open.</p>" }
  ],
  faqs: [
    ["Who endorses my pet's paperwork in Canada?",
     "<p>The Canadian Food Inspection Agency (CFIA) endorses the export health certificate completed by your veterinarian. Confirm the current process with the CFIA and your vet.</p>"],
    ["Does Thailand need a titer test for a pet from Canada?",
     "<p>Generally no, because Canada is a rabies-controlled country. The titer test becomes important for onward moves to countries that require it, so many owners do it pre-emptively.</p>"]
  ]
}));

pages.push(country({
  slug: "from-germany", crumb: "From Germany",
  title: "Bring a Pet to Thailand from Germany (EU & DLD 2026) | PattayaPets",
  desc: "Germany to Thailand pet import: EU export certificate, Veterinäramt endorsement, " +
    "DLD permit timeline, document checklist and EU return planning.",
  h1: "Bringing a pet to Thailand from Germany",
  lede: "Frankfurt and Munich have direct Bangkok routes, so Germany&rarr;Pattaya is a " +
    "well-trodden corridor. The Thai steps are standard; what is German-specific is the " +
    "<strong>EU export health certificate</strong> and planning the EU return if you " +
    "ever come back.",
  officialExtra:
    "<p><strong>German / EU sources:</strong> " +
    "<a href=\"https://www.bmleh.de/EN/topics/animals/pets-and-zoo-animals/pets-entry-regulation.html\" " +
    "target=\"_blank\" rel=\"noopener nofollow\">BMELH pet entry rules</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" target=\"_blank\" " +
    "rel=\"noopener nofollow\">EU pet movement</a>. " +
    "Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-germany.html\">taking a pet to Germany</a>.</p>",
  sections: [
    { h: "The timeline — what to do when", html:
      "<p>Work backwards from your flight. Direct <strong>Frankfurt&ndash;Bangkok</strong> " +
      "and <strong>Munich&ndash;Bangkok</strong> routes are common; still confirm pet " +
      "acceptance with the airline early.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Who</th></tr></thead><tbody>' +
      '<tr><th scope="row">3+ months before (if EU return possible)</th>' +
      '<td>Microchip (if needed), rabies vaccination, optional <a href="/bring-pet-to-thailand/rabies-vaccination-titer-test.html">rabies titer test</a> &mdash; blood &ge;30 days after vaccination</td>' +
      '<td>Your vet; approved lab</td></tr>' +
      '<tr><th scope="row">6&ndash;8 weeks before</th>' +
      '<td>DHPP (dogs) or FVRCP (cats), leptospirosis (dogs) or negative test; <strong>21-day wait</strong> after any primary rabies shot</td>' +
      '<td>Your vet</td></tr>' +
      '<tr><th scope="row">~30 days before departure</th>' +
      '<td>Apply for <a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a> (form R1/1) to the AQS at your arrival airport</td>' +
      '<td>DLD / Suvarnabhumi AQS</td></tr>' +
      '<tr><th scope="row">2&ndash;3 weeks before</th>' +
      '<td>Book pet space on the flight; confirm airline requires the Thai import permit before boarding</td>' +
      '<td>Airline</td></tr>' +
      '<tr><th scope="row">Final 1&ndash;2 weeks</th>' +
      '<td><strong>EU animal health / export certificate</strong> completed by an authorised vet and endorsed by the competent German authority (<em>Veterin&auml;ramt</em> / BLV framework)</td>' +
      '<td>Authorised vet + German authority</td></tr>' +
      '<tr><th scope="row">&ge;3 days before landing</th>' +
      '<td>Email the AQS to confirm your exact arrival date and flight</td>' +
      '<td>DLD</td></tr>' +
      '<tr><th scope="row">Arrival day</th>' +
      '<td>AQS inspection; Forms R-6/R-7; 500&nbsp;baht fee</td>' +
      '<td>Bangkok AQS</td></tr>' +
      '</tbody></table></div>' +
      "<p>Step pages: " + STD_STEPS + EU_IMPORT_REF },
    { h: "The German side of the paperwork", html:
      "<p>For travel from Germany to a non-EU country such as Thailand, your vet " +
      "completes an <strong>EU animal health / export certificate</strong> for " +
      "third-country movement. It must be issued by an <strong>authorised or official " +
      "veterinarian</strong> and <strong>endorsed by the competent authority</strong> " +
      "&mdash; in Germany, that is typically your regional veterinary office " +
      "(<em>Veterin&auml;ramt</em>) under the federal food and veterinary framework " +
      "(BMELH / BLV).</p>" +
      "<p>The blue <strong>EU pet passport</strong> you use for holidays in Spain or " +
      "Italy is <em>not</em> the document Thailand accepts on its own. You need the " +
      "export certificate plus the Thai import permit, with the same microchip number " +
      "on every page.</p>" +
      "<p>Use a vet experienced in international export work &mdash; not every practice " +
      "handles third-country certificates daily.</p>" },
    { h: "Documents Thailand expects", html:
      "<p>Regardless of origin country, the DLD asks for:</p>" +
      TH_DOCS_TABLE + TH_ARRIVAL },
    { h: "Plan the return to Germany before you leave", html:
      EU_RETURN +
      "<p>Germany follows the standard EU rules for pets entering from a non-listed " +
      "third country such as Thailand: rabies vaccination, titer test, three-month wait " +
      "from the blood sample, and an EU third-country entry health certificate on the " +
      "way back. Entry is through designated traveller points of entry &mdash; confirm " +
      "the current list on " +
      "<a href=\"https://www.bmleh.de/EN/topics/animals/pets-and-zoo-animals/pets-entry-regulation.html\" " +
      "target=\"_blank\" rel=\"noopener nofollow\">BMELH</a>. See " +
      "<a href=\"/take-pet-out-of-thailand/to-germany.html\">exporting a pet to Germany</a>.</p>" +
      '<div class="callout callout-tip"><div class="ch">Thailand does not require the titer test on the way in</div>' +
      "<p>From Germany, Thailand generally does not ask for a titer test to enter. You " +
      "do it for your own future if you may return to the EU.</p></div>" },
    { h: "Common mistakes German owners make", html: TH_FAILS }
  ],
  faqs: [
    ["Is my EU pet passport enough to bring my pet to Thailand?",
     "<p>No. The EU pet passport governs movement within the EU. For Thailand you need an EU export health certificate endorsed by the German authorities, plus the Thai DLD import permit.</p>"],
    ["Which German authority endorses the export certificate?",
     "<p>An authorised veterinarian completes the certificate; endorsement comes from the competent regional veterinary authority (Veterinäramt) under Germany's federal veterinary system. Your export-experienced vet will know the current process.</p>"],
    ["Can I fly direct from Frankfurt or Munich with a pet?",
     "<p>Both cities have direct Bangkok routes, but not every flight accepts pets in cabin or hold. Confirm pet space and the airline's IATA crate rules when you book — see our <a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">airline pet policies</a> guide.</p>"],
    ["What does Germany need for the return journey?",
     "<p>A valid rabies vaccination, a rabies titer test with a three-month wait from the blood sample, and an EU third-country entry health certificate. Doing the titer test before you leave Germany avoids the wait later.</p>"],
    ["Will my pet be quarantined on arrival in Thailand?",
     "<p>Not usually, if every document is in order and your pet appears healthy. The AQS inspection is typically same-day clearance — see our <a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">quarantine guide</a>.</p>"]
  ]
}));

pages.push(country({
  slug: "from-russia", crumb: "From Russia",
  title: "Bring a Pet to Thailand from Russia (DLD 2026) | PattayaPets",
  desc: "Bringing a dog or cat from Russia to Thailand: the veterinary certificate, " +
    "state endorsement, and why the rabies titer test matters.",
  h1: "Bringing a pet to Thailand from Russia",
  lede: "Pattaya has a large Russian community, and many arrive with a pet. The Thai " +
    "steps are standard; the Russian-specific part is the state veterinary paperwork.",
  sections: [
    { h: "The Russian side of the paperwork", html:
      "<p>" + STD_STEPS + "In Russia, the " +
      "veterinary certificate is issued and endorsed through the <strong>state veterinary " +
      "service</strong> (under Rosselkhoznadzor), usually by exchanging the clinic " +
      "certificate for an international form shortly before travel. Allow time for that " +
      "step.</p>" },
    { h: "The rabies titer test", html:
      "<p>Make sure the <strong>microchip is implanted before the rabies vaccination</strong>, " +
      "and have a <a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">" +
      "rabies titer test</a> done from an approved laboratory. A titer test is strongly " +
      "advisable both for a smooth entry and for any onward travel &mdash; the EU, UK and " +
      "others require it, with a waiting period, so doing it early is wise.</p>" },
    { h: "If you may leave Thailand again", html:
      "<p>Russia&rsquo;s re-entry rules for pets arriving from abroad can change and " +
      "often involve the state veterinary service and endorsed certificates. If you " +
      "might return to Russia with your pet, verify the current import requirements " +
      "before you leave and keep the " +
      "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">rabies titer test</a> " +
      "on your timeline. See our guide to " +
      "<a href=\"/take-pet-out-of-thailand/to-russia.html\">exporting a pet to Russia</a> " +
      "for the full return paperwork.</p>" }
  ],
  faqs: [
    ["How is the pet certificate handled in Russia?",
     "<p>A clinic issues the initial veterinary certificate, which is then exchanged for the international form through the state veterinary service shortly before departure. Confirm the current procedure with your vet and the state service.</p>"],
    ["Should my pet have a rabies titer test leaving Russia?",
     "<p>It is strongly advisable. It supports a smooth entry and is required for onward travel to the EU, UK and similar destinations, where a waiting period also applies. Doing it early keeps your options open.</p>"]
  ]
}));

module.exports = pages;
