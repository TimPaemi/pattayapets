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

const RU_IMPORT_FAILS =
  "<ul>" +
  "<li><strong>Clinic certificate only</strong> &mdash; Thailand expects the government-endorsed international veterinary certificate, not just a local clinic form.</li>" +
  "<li><strong>Last-minute state vet exchange</strong> &mdash; Rosselkhoznadzor endorsement queues can delay departure if you leave it too late.</li>" +
  "<li><strong>Microchip number mismatch</strong> &mdash; the chip on the Russian certificate must match the DLD permit and every vaccination record exactly.</li>" +
  "<li><strong>Assuming Russia re-entry will be simple</strong> &mdash; rules change; confirm FSVPS requirements before you leave if you may return.</li>" +
  "</ul>";

const CA_IMPORT_FAILS =
  "<ul>" +
  "<li><strong>CFIA endorsement booked too late</strong> &mdash; CFIA offices need appointments; peak summer routes fill up.</li>" +
  "<li><strong>Health certificate outside the validity window</strong> &mdash; CFIA and the DLD both expect a recent certificate; confirm the window with your vet and the AQS.</li>" +
  "<li><strong>Assuming Canada re-entry needs no planning</strong> &mdash; CFIA still expects a valid rabies certificate and may inspect on arrival.</li>" +
  "<li><strong>Skipping the titer test if EU travel is possible</strong> &mdash; onward moves to the EU or UK need it with a long wait.</li>" +
  "</ul>";

function caImportTimeline() {
  return "<p>Work backwards from your flight. <strong>Toronto&ndash;Bangkok</strong> and " +
    "<strong>Vancouver&ndash;Bangkok</strong> direct routes exist; still confirm pet " +
    "acceptance with the airline early.</p>" +
    '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
    '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Who</th></tr></thead><tbody>' +
    '<tr><th scope="row">3+ months before (if EU/UK return possible)</th>' +
    '<td>Microchip (if needed), rabies vaccination, optional <a href="/bring-pet-to-thailand/rabies-vaccination-titer-test.html">rabies titer test</a> for onward travel</td>' +
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
    '<td>Export health certificate completed by your vet and <strong>endorsed by CFIA</strong> (Canadian Food Inspection Agency)</td>' +
    '<td>Vet + CFIA</td></tr>' +
    '<tr><th scope="row">&ge;3 days before landing</th>' +
    '<td>Email the AQS to confirm your exact arrival date and flight</td>' +
    '<td>DLD</td></tr>' +
    '<tr><th scope="row">Arrival day</th>' +
    '<td>AQS inspection; Forms R-6/R-7; 500&nbsp;baht fee</td>' +
    '<td>Bangkok AQS</td></tr>' +
    '</tbody></table></div>';
}

function ruImportTimeline() {
  return "<p>Work backwards from your flight. Moscow and other hubs have Bangkok routes; " +
    "confirm pet acceptance with the airline early.</p>" +
    '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
    '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Who</th></tr></thead><tbody>' +
    '<tr><th scope="row">3+ months before (if EU/UK return possible)</th>' +
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
    '<tr><th scope="row">Final 5&ndash;10 days</th>' +
    '<td>Clinic veterinary certificate exchanged for the <strong>international export certificate</strong> through the regional office of the Federal Service for Veterinary and Phytosanitary Surveillance (FSVPS / Rosselkhoznadzor)</td>' +
    '<td>Clinic vet + FSVPS regional office</td></tr>' +
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

pages.push(country({
  slug: "from-canada", crumb: "From Canada",
  title: "Bring a Pet to Thailand from Canada (CFIA & DLD 2026) | PattayaPets",
  desc: "Canada to Thailand pet import: CFIA export endorsement, DLD permit timeline, " +
    "document checklist, Toronto/Vancouver routing and return-to-Canada planning.",
  h1: "Bringing a pet to Thailand from Canada",
  lede: "Canada&rarr;Thailand is a well-used corridor for snowbirds and relocators. " +
    "The Thai steps are standard; what is Canada-specific is <strong>CFIA endorsement</strong> " +
    "and planning if you ever come back.",
  officialExtra:
    "<p><strong>Canadian sources:</strong> " +
    "<a href=\"https://inspection.canada.ca/en/importing-food-plants-animals/pets\" " +
    "target=\"_blank\" rel=\"noopener nofollow\">CFIA &mdash; importing or travelling with pets</a>. " +
    "Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-canada.html\">taking a pet to Canada</a>.</p>",
  sections: [
    { h: "The timeline — what to do when", html:
      caImportTimeline() +
      "<p>Step pages: " + STD_STEPS + "</p>" },
    { h: "The Canadian side of the paperwork", html:
      "<p>In Canada, your veterinarian completes the export health certificate for " +
      "international travel. <strong>CFIA</strong> (the Canadian Food Inspection Agency) " +
      "must <strong>endorse</strong> that certificate before the pet leaves. This is not " +
      "a rubber stamp &mdash; CFIA checks that Thailand&rsquo;s import requirements are " +
      "met, including microchip, vaccinations and the DLD import permit details.</p>" +
      "<p>Use a vet experienced in export work and book the CFIA endorsement appointment " +
      "early, especially before peak summer travel. The certificate is usually issued " +
      "within a short window before departure; confirm the validity period with CFIA and " +
      "the Bangkok AQS.</p>" +
      "<p>Canada is a rabies-controlled country, so Thailand generally does <em>not</em> " +
      "require a rabies titer test for entry from Canada. Many owners still do the test " +
      "pre-emptively if they might move on to the EU or UK later.</p>" },
    { h: "Documents Thailand expects", html:
      "<p>Regardless of origin country, the DLD asks for:</p>" +
      TH_IMPORT_TABLE + TH_ARRIVAL_STD },
    { h: "Plan for the return to Canada", html:
      "<p>If there is any chance you will bring your pet <em>back</em> to Canada, " +
      "research CFIA&rsquo;s current import rules before you leave &mdash; not when " +
      "your lease ends. For personal dogs and cats, Canada typically requires:</p>" +
      "<ul>" +
      "<li>A <strong>valid rabies vaccination certificate</strong> in English or French, " +
      "with the microchip number if the pet is chipped</li>" +
      "<li>A healthy animal with paperwork that matches the pet in front of the inspector</li>" +
      "<li>Inspection by CFIA on arrival if selected &mdash; no routine quarantine for " +
      "compliant personal imports</li>" +
      "</ul>" +
      "<p>Canada does not generally require a titer test for return from Thailand, which " +
      "makes it one of the simpler reverse corridors compared with the EU or New Zealand. " +
      "Still confirm age, breed and commercial-import rules with CFIA if your case is " +
      "non-standard. See " +
      "<a href=\"/take-pet-out-of-thailand/to-canada.html\">exporting a pet to Canada</a>.</p>" +
      '<div class="callout callout-tip"><div class="ch">Snowbird season timing</div>' +
      "<p>Many Canadian owners arrive in Pattaya for November&ndash;March. Apply for the " +
      "DLD permit around <strong>30 days before</strong> departure and book CFIA endorsement " +
      "before Thanksgiving/Christmas rush if you fly in peak season.</p></div>" },
    { h: "Common mistakes on this corridor", html: TH_IMPORT_FAILS + CA_IMPORT_FAILS }
  ],
  faqs: [
    ["Who endorses my pet's paperwork in Canada?",
     "<p>The Canadian Food Inspection Agency (CFIA) endorses the export health certificate completed by your veterinarian. Confirm the current process and appointment booking with CFIA and your vet.</p>"],
    ["Does Thailand need a titer test for a pet from Canada?",
     "<p>Generally no, because Canada is a rabies-controlled country. The titer test becomes important for onward moves to the EU, UK or similar destinations.</p>"],
    ["Are there direct flights from Toronto or Vancouver with a pet?",
     "<p>Both cities have direct Bangkok routes, but not every flight accepts pets in cabin or hold. Confirm pet space and crate rules when you book.</p>"],
    ["Will my pet be quarantined on arrival in Thailand?",
     "<p>Not usually with complete paperwork. The AQS inspection is typically same-day clearance &mdash; see our <a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">quarantine guide</a>.</p>"],
    ["What does Canada need for the return journey?",
     "<p>Typically a valid rabies vaccination certificate in English or French and a healthy pet matching the paperwork. Confirm current CFIA rules before you assume return is automatic.</p>"]
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
    "<a href=\"https://www.bmel.de/EN/topics/animals/pets-and-zoo-animals/pets-entry-regulation.html\" " +
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
      "<a href=\"https://www.bmel.de/EN/topics/animals/pets-and-zoo-animals/pets-entry-regulation.html\" " +
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
  title: "Bring a Pet to Thailand from Russia (FSVPS & DLD 2026) | PattayaPets",
  desc: "Russia to Thailand pet import: FSVPS export certificate, DLD permit timeline, " +
    "document checklist, titer test planning and return-trip notes.",
  h1: "Bringing a pet to Thailand from Russia",
  lede: "Pattaya has a large Russian community, and many arrive with a pet. The Thai " +
    "steps are standard; what is Russia-specific is the <strong>state veterinary " +
    "certificate</strong> and planning ahead if you may return to Russia or move on to the EU.",
  officialExtra:
    "<p><strong>Russian sources:</strong> " +
    "<a href=\"https://fsvps.gov.ru/\" target=\"_blank\" rel=\"noopener nofollow\">" +
    "Federal Service for Veterinary and Phytosanitary Surveillance (FSVPS)</a>. " +
    "Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-russia.html\">taking a pet to Russia</a>.</p>",
  sections: [
    { h: "The timeline — what to do when", html:
      ruImportTimeline() +
      "<p>Step pages: " + STD_STEPS + "</p>" },
    { h: "The Russian side of the paperwork", html:
      "<p>In Russia, your clinic veterinarian completes the initial health certificate. " +
      "Shortly before travel, that document is exchanged for the <strong>international " +
      "veterinary certificate</strong> through the regional office of the Federal Service " +
      "for Veterinary and Phytosanitary Surveillance (<strong>FSVPS</strong>, under " +
      "Rosselkhoznadzor). The exact form and timing depend on your departure region &mdash; " +
      "confirm the current procedure with your vet and the local FSVPS office.</p>" +
      "<p>Thailand expects a government-endorsed export certificate, not only a clinic " +
      "stamp. The microchip number must match every page.</p>" +
      "<p>Use a vet experienced in international export work and allow time for the " +
      "state veterinary exchange &mdash; queues close to peak travel dates are common.</p>" },
    { h: "Documents Thailand expects", html:
      "<p>Regardless of origin country, the DLD asks for:</p>" +
      TH_IMPORT_TABLE + TH_ARRIVAL_STD },
    { h: "The rabies titer test — strongly advised", html:
      "<p>Thailand does not generally require a titer test for entry from Russia, but " +
      "make sure the <strong>microchip is implanted before the rabies vaccination</strong>, " +
      "and consider a <a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">" +
      "rabies titer test</a> from an approved laboratory before you leave. It supports " +
      "onward travel to the EU, UK and similar destinations, each with a waiting period " +
      "after the blood sample. Doing it early keeps your options open.</p>" +
      '<div class="callout callout-tip"><div class="ch">Large Russian community in Pattaya</div>' +
      "<p>Many owners fly Moscow&ndash;Bangkok or connect via the Gulf. Confirm pet " +
      "acceptance and crate rules with the airline when you book &mdash; see our " +
      '<a href="/bring-pet-to-thailand/airline-pet-policies.html">airline pet policies</a> guide.</p></div>' },
    { h: "If you may return to Russia or leave Thailand again", html:
      "<p>Russia&rsquo;s re-entry rules for pets arriving from abroad can change and " +
      "typically involve a current rabies vaccination, microchip identification and " +
      "a veterinary certificate handled through FSVPS. If you might return to Russia " +
      "with your pet, verify the current import requirements before you leave Russia " +
      "and keep vaccination records in English. See our mirror guide " +
      "<a href=\"/take-pet-out-of-thailand/to-russia.html\">exporting a pet to Russia</a>.</p>" },
    { h: "Common mistakes on this corridor", html: TH_IMPORT_FAILS + RU_IMPORT_FAILS }
  ],
  faqs: [
    ["How is the pet certificate handled in Russia?",
     "<p>A clinic issues the initial veterinary certificate, which is then exchanged for the international form through the regional FSVPS office shortly before departure. Confirm the current procedure with your vet and FSVPS.</p>"],
    ["Should my pet have a rabies titer test leaving Russia?",
     "<p>It is strongly advisable. Thailand may not require it on entry, but the EU, UK and similar destinations do, with a waiting period after the blood sample. Doing it early keeps your options open.</p>"],
    ["Which authority endorses the export certificate?",
     "<p>The regional office of FSVPS (Federal Service for Veterinary and Phytosanitary Surveillance). Your export-experienced vet coordinates the exchange from the clinic certificate.</p>"],
    ["Will my pet be quarantined on arrival in Thailand?",
     "<p>Not usually with complete paperwork. The AQS inspection is typically same-day clearance &mdash; see our <a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">quarantine guide</a>.</p>"],
    ["What does Russia need for the return journey from Thailand?",
     "<p>Generally a current rabies vaccination, microchip and veterinary certificate through FSVPS &mdash; confirm the current import rules before you assume return is straightforward.</p>"]
  ]
}));

module.exports = pages;
