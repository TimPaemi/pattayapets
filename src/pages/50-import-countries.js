"use strict";
/* More origin-country guides for the "Bringing a pet to Thailand" cluster,
   plus the U-Tapao / Bangkok arrival-airport guide. */

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

const EU_IMPORT_REF =
  "<p>For the shared EU export-certificate framework every member state follows, " +
  "see our <a href=\"/bring-pet-to-thailand/from-eu.html\">bringing a pet from the EU</a> guide.</p>";

const TH_DOCS_TABLE =
  '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
  '<th scope="col">Document</th><th scope="col">What it is</th></tr></thead><tbody>' +
  '<tr><th scope="row">DLD import permit</th><td>Form <strong>R1/1</strong>, emailed to the AQS at your arrival airport. Valid <strong>60 days</strong> from issue. Apply <strong>7&ndash;60 days</strong> before departure (around <strong>30 days</strong> is sensible).</td></tr>' +
  '<tr><th scope="row">MOCCAE export permit</th><td>UAE export approval before the pet leaves the Emirates (separate from the Thai permit).</td></tr>' +
  '<tr><th scope="row">Microchip certificate</th><td>ISO 11784/11785 chip; number must match every certificate.</td></tr>' +
  '<tr><th scope="row">Vaccination records</th><td>In English. Thailand asks for rabies plus core vaccines — see our <a href="/bring-pet-to-thailand/rabies-vaccination-titer-test.html">vaccination guide</a>.</td></tr>' +
  '<tr><th scope="row">Endorsed health certificate</th><td>Official veterinary certificate for export from the UAE, endorsed as MOCCAE requires.</td></tr>' +
  '<tr><th scope="row">Flight booking</th><td>Itinerary; confirm airline pet policy (some Gulf routes require cargo).</td></tr>' +
  '</tbody></table></div>';

const TH_ARRIVAL_UAE =
  "<p>With complete paperwork, pets from the UAE normally clear the AQS the same day. " +
  "Confirm arrival at least three days ahead. See " +
  '<a href="/bring-pet-to-thailand/thailand-pet-quarantine.html">pet quarantine in Thailand</a>.</p>';

const UAE_FAILS =
  "<ul>" +
  "<li><strong>MOCCAE export permit missing</strong> &mdash; required before leaving the UAE, separate from the Thai import permit.</li>" +
  "<li><strong>Breed on the prohibited list</strong> &mdash; several fighting-dog types and wolf hybrids cannot enter the UAE; check before you assume return is possible.</li>" +
  "<li><strong>Assuming cabin travel</strong> &mdash; MOCCAE often expects IATA-compliant cargo shipment; confirm with Emirates, Etihad or your airline.</li>" +
  "<li><strong>Microchip mismatch</strong> &mdash; MOCCAE and DLD both require the chip number to match every document exactly.</li>" +
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

/* ---------------- SWEDEN ---------------- */
pages.push(country({
  slug: "from-sweden", crumb: "From Sweden",
  title: "Bring a Pet to Thailand from Sweden (DLD 2026) | PattayaPets",
  desc: "Bringing a dog or cat from Sweden to Thailand: the EU export certificate, " +
    "the Swedish authority that endorses it, and planning the journey home.",
  h1: "Bringing a pet to Thailand from Sweden",
  lede: "Pattaya has one of the largest Swedish communities in Thailand, and many " +
    "arrive with a pet. The Thai steps are standard; the Swedish-specific part is " +
    "the export paperwork.",
  sections: [
    { h: "The Swedish side of the paperwork", html:
      "<p>" + STD_STEPS + "For travel out of the EU, your vet completes an " +
      "<strong>EU animal health / export certificate</strong>, endorsed by an " +
      "official veterinarian under <strong>the Swedish Board of Agriculture " +
      "(Jordbruksverket)</strong>. The EU pet passport you use within Europe is not, " +
      "by itself, what Thailand requires. Use a vet experienced in export work and " +
      "start early.</p>" + EU_IMPORT_REF },
    { h: "Planning the return to Sweden", html:
      EU_RETURN +
      "<p>Sweden does not apply the special tapeworm-treatment rule that a few " +
      "countries keep, but always reconfirm the current EU re-entry requirements " +
      "with Jordbruksverket before you travel.</p>" }
  ],
  faqs: [
    ["Is my EU pet passport enough to bring my pet to Thailand?",
     "<p>No. The EU pet passport governs movement within the EU. For Thailand you need an EU export health certificate endorsed by the Swedish authorities, plus the Thai DLD import permit.</p>"],
    ["What will Sweden need for the return journey?",
     "<p>A valid rabies vaccination and a rabies titer test, with a three-month wait after the blood sample is taken. Doing the titer test before you leave Sweden avoids that wait later. Confirm the current rules with Jordbruksverket.</p>"]
  ]
}));

/* ---------------- NORWAY ---------------- */
pages.push(country({
  slug: "from-norway", crumb: "From Norway",
  title: "Bring a Pet to Thailand from Norway (DLD 2026) | PattayaPets",
  desc: "Bringing a dog or cat from Norway to Thailand: the export certificate, the " +
    "Norwegian Food Safety Authority, and the tapeworm rule for the return.",
  h1: "Bringing a pet to Thailand from Norway",
  lede: "Norway is not in the EU, but it follows the EU pet-travel scheme closely. " +
    "The Thai steps are standard; plan carefully for the journey home.",
  sections: [
    { h: "The Norwegian side of the paperwork", html:
      "<p>" + STD_STEPS + "For travel to Thailand your vet completes an export " +
      "health certificate, endorsed through <strong>the Norwegian Food Safety " +
      "Authority (Mattilsynet)</strong>. Although Norway is outside the EU, it uses " +
      "the EU pet passport and pet-travel system, so the documents will feel " +
      "familiar &mdash; but the passport alone is not what Thailand needs.</p>" },
    { h: "Planning the return to Norway", html:
      EU_RETURN +
      "<p>Norway also keeps the <strong>tapeworm (Echinococcus) treatment rule</strong>: " +
      "a dog entering Norway must be treated by a vet against tapeworm within a set " +
      "window before arrival (commonly 24 to 120 hours). Build that into the return " +
      "plan, and confirm the current detail with Mattilsynet.</p>" }
  ],
  faqs: [
    ["Does Norway being outside the EU change things?",
     "<p>Not greatly for the trip to Thailand &mdash; Norway uses the EU pet-travel system, so your vet issues an export certificate much as in an EU country. Confirm the current process with Mattilsynet.</p>"],
    ["What does Norway require for the return?",
     "<p>A valid rabies vaccination, a rabies titer test with a three-month wait, and &mdash; for dogs &mdash; a vet-administered tapeworm treatment shortly before arrival. Verify the current rules with Mattilsynet.</p>"]
  ]
}));

/* ---------------- DENMARK ---------------- */
pages.push(country({
  slug: "from-denmark", crumb: "From Denmark",
  title: "Bring a Pet to Thailand from Denmark (DLD 2026) | PattayaPets",
  desc: "Bringing a dog or cat from Denmark to Thailand: the EU export certificate, " +
    "the Danish authority that endorses it, and the return-trip planning.",
  h1: "Bringing a pet to Thailand from Denmark",
  lede: "For Danish owners the Thai requirements are the standard ones. What is " +
    "Denmark-specific is who endorses the export paperwork.",
  sections: [
    { h: "The Danish side of the paperwork", html:
      "<p>" + STD_STEPS + "For travel out of the EU, your vet completes an " +
      "<strong>EU export health certificate</strong>, endorsed by an official " +
      "veterinarian under <strong>the Danish Veterinary and Food Administration</strong>. " +
      "The EU pet passport is for movement within Europe and is not, on its own, " +
      "what Thailand requires.</p>" + EU_IMPORT_REF },
    { h: "Planning the return to Denmark", html:
      EU_RETURN +
      "<p>Confirm the current EU re-entry requirements with the Danish Veterinary " +
      "and Food Administration before you travel.</p>" }
  ],
  faqs: [
    ["Who endorses my pet's export certificate in Denmark?",
     "<p>An official veterinarian, under the Danish Veterinary and Food Administration. Use a vet familiar with export work and confirm the current procedure.</p>"],
    ["What will Denmark need for the return journey?",
     "<p>A valid rabies vaccination and a rabies titer test, with a three-month wait after the blood sample. Doing the test before you leave avoids that wait. Confirm current rules with the Danish authorities.</p>"]
  ]
}));

/* ---------------- FINLAND ---------------- */
pages.push(country({
  slug: "from-finland", crumb: "From Finland",
  title: "Bring a Pet to Thailand from Finland (DLD 2026) | PattayaPets",
  desc: "Bringing a dog or cat from Finland to Thailand: the EU export certificate, " +
    "the Finnish Food Authority, and the tapeworm rule for the return.",
  h1: "Bringing a pet to Thailand from Finland",
  lede: "The Thai steps are the standard ones for Finnish owners. The point to plan " +
    "around is the journey home, which has one extra requirement.",
  sections: [
    { h: "The Finnish side of the paperwork", html:
      "<p>" + STD_STEPS + "For travel out of the EU, your vet completes an " +
      "<strong>EU export health certificate</strong>, endorsed by an official " +
      "veterinarian under <strong>the Finnish Food Authority (Ruokavirasto)</strong>. " +
      "The EU pet passport governs intra-EU travel only.</p>" + EU_IMPORT_REF },
    { h: "Planning the return to Finland", html:
      EU_RETURN +
      "<p>Finland also keeps the <strong>tapeworm (Echinococcus) treatment rule</strong>: " +
      "a dog entering Finland must be treated against tapeworm by a vet within a set " +
      "window before arrival (commonly 24 to 120 hours). Plan that into the return, " +
      "and confirm the current detail with Ruokavirasto.</p>" }
  ],
  faqs: [
    ["Is the EU pet passport enough for Thailand?",
     "<p>No. It is for movement within the EU. Thailand needs an EU export health certificate endorsed by the Finnish authorities, plus the Thai DLD import permit.</p>"],
    ["What does Finland require for the return?",
     "<p>A valid rabies vaccination, a rabies titer test with a three-month wait, and &mdash; for dogs &mdash; a vet-administered tapeworm treatment shortly before arrival. Confirm with Ruokavirasto.</p>"]
  ]
}));

/* ---------------- NETHERLANDS ---------------- */
pages.push(country({
  slug: "from-netherlands", crumb: "From the Netherlands",
  title: "Bring a Pet to Thailand from the Netherlands (DLD 2026) | PattayaPets",
  desc: "Bringing a dog or cat from the Netherlands to Thailand: the EU export " +
    "certificate, the Dutch authority (NVWA), and planning the return.",
  h1: "Bringing a pet to Thailand from the Netherlands",
  lede: "Amsterdam is a major long-haul hub with direct routes to Bangkok, which " +
    "makes the Netherlands one of the more straightforward departure points.",
  sections: [
    { h: "The Dutch side of the paperwork", html:
      "<p>" + STD_STEPS + "For travel out of the EU, your vet completes an " +
      "<strong>EU export health certificate</strong>, endorsed under <strong>the " +
      "Netherlands Food and Consumer Product Safety Authority (NVWA)</strong>. The " +
      "EU pet passport is for intra-EU travel and is not what Thailand requires.</p>" +
      EU_IMPORT_REF },
    { h: "Planning the return to the Netherlands", html:
      EU_RETURN +
      "<p>A direct Amsterdam-Bangkok routing keeps the journey as short as possible, " +
      "which is easier on the pet. Confirm current EU re-entry rules with the NVWA " +
      "before travelling.</p>" }
  ],
  faqs: [
    ["Are there direct flights that take pets to Thailand?",
     "<p>Amsterdam has direct long-haul routes to Bangkok; whether a given flight accepts pets in cabin, as checked baggage or as cargo depends on the airline and aircraft. Confirm directly with the airline well in advance.</p>"],
    ["What will the Netherlands need for the return journey?",
     "<p>A valid rabies vaccination and a rabies titer test, with a three-month wait after the blood sample. Doing the test before you leave avoids that wait. Confirm current rules with the NVWA.</p>"]
  ]
}));

/* ---------------- FRANCE ---------------- */
pages.push(country({
  slug: "from-france", crumb: "From France",
  title: "Bring a Pet to Thailand from France (DLD 2026) | PattayaPets",
  desc: "Bringing a dog or cat from France to Thailand: the EU export certificate, " +
    "the French veterinary authorities, and planning the return.",
  h1: "Bringing a pet to Thailand from France",
  lede: "For French owners the Thai requirements are standard. The French-specific " +
    "part is the export certificate and its endorsement.",
  sections: [
    { h: "The French side of the paperwork", html:
      "<p>" + STD_STEPS + "For travel out of the EU, your vet completes an " +
      "<strong>EU export health certificate</strong>, endorsed through the official " +
      "channel of <strong>the French agriculture ministry&rsquo;s veterinary " +
      "services</strong> (the departmental directorate that handles animal health). " +
      "The EU pet passport is for travel within Europe only.</p>" + EU_IMPORT_REF },
    { h: "Planning the return to France", html:
      EU_RETURN +
      "<p>Paris has direct routes to Bangkok, which keeps the journey shorter. " +
      "Confirm current EU re-entry requirements with the French veterinary " +
      "authorities before you travel.</p>" }
  ],
  faqs: [
    ["Who endorses the export certificate in France?",
     "<p>The official veterinary service of the French agriculture ministry, through the departmental directorate responsible for animal health. Your vet completes the certificate; confirm the current endorsement process locally.</p>"],
    ["What does France need for the return journey?",
     "<p>A valid rabies vaccination and a rabies titer test, with a three-month wait after the blood sample. Doing the test before leaving France removes that wait. Confirm current rules with the French authorities.</p>"]
  ]
}));

/* ---------------- SWITZERLAND ---------------- */
pages.push(country({
  slug: "from-switzerland", crumb: "From Switzerland",
  title: "Bring a Pet to Thailand from Switzerland (DLD 2026) | PattayaPets",
  desc: "Bringing a dog or cat from Switzerland to Thailand: the export certificate, " +
    "the Swiss authority (FSVO), and planning the return.",
  h1: "Bringing a pet to Thailand from Switzerland",
  lede: "Switzerland is not in the EU, but it runs a closely aligned pet-travel " +
    "system. The Thai steps are standard.",
  sections: [
    { h: "The Swiss side of the paperwork", html:
      "<p>" + STD_STEPS + "Switzerland uses an EU-aligned pet passport and " +
      "pet-travel system. For travel to Thailand your vet completes an export " +
      "health certificate, endorsed through <strong>the Federal Food Safety and " +
      "Veterinary Office (FSVO)</strong> and the cantonal veterinary office. The " +
      "passport alone is not what Thailand requires.</p>" + EU_IMPORT_REF },
    { h: "Planning the return to Switzerland", html:
      "<p>Switzerland applies EU-aligned rules for pets arriving from outside the " +
      "low-risk list. Returning a pet from Thailand will involve a valid rabies " +
      "vaccination and a <a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">" +
      "rabies titer test</a>, with a waiting period before entry. Having the titer " +
      "test done early keeps your options open &mdash; confirm the current detail " +
      "with the FSVO.</p>" }
  ],
  faqs: [
    ["Does Switzerland being outside the EU change the process?",
     "<p>Not greatly. Switzerland runs an EU-aligned pet-travel system, so the export certificate and passport work much as in an EU country. Confirm the current procedure with the FSVO and your vet.</p>"],
    ["What will Switzerland need for the return?",
     "<p>A valid rabies vaccination and a rabies titer test, with a waiting period before entry, in line with EU-aligned rules. Doing the test early avoids delay later. Confirm current requirements with the FSVO.</p>"]
  ]
}));

/* ---------------- IRELAND ---------------- */
pages.push(country({
  slug: "from-ireland", crumb: "From Ireland",
  title: "Bring a Pet to Thailand from Ireland (DLD 2026) | PattayaPets",
  desc: "Bringing a dog or cat from Ireland to Thailand: the EU export certificate, " +
    "the Irish department that endorses it, and the tapeworm rule for the return.",
  h1: "Bringing a pet to Thailand from Ireland",
  lede: "The Thai steps are standard for Irish owners. The journey home has one " +
    "extra requirement worth planning around.",
  sections: [
    { h: "The Irish side of the paperwork", html:
      "<p>" + STD_STEPS + "For travel out of the EU, your vet completes an " +
      "<strong>EU export health certificate</strong>, endorsed by <strong>the " +
      "Department of Agriculture, Food and the Marine</strong>. The EU pet passport " +
      "governs intra-EU travel only and is not what Thailand requires.</p>" + EU_IMPORT_REF },
    { h: "Planning the return to Ireland", html:
      EU_RETURN +
      "<p>Ireland also keeps the <strong>tapeworm (Echinococcus) treatment rule</strong>: " +
      "a dog entering Ireland must be treated against tapeworm by a vet within a set " +
      "window before arrival (commonly 24 to 120 hours). Build that into the return " +
      "plan, and confirm the current detail with the Department.</p>" }
  ],
  faqs: [
    ["Is the EU pet passport enough for Thailand?",
     "<p>No. It is for movement within the EU. Thailand needs an EU export health certificate endorsed by the Department of Agriculture, Food and the Marine, plus the Thai DLD import permit.</p>"],
    ["What does Ireland require for the return journey?",
     "<p>A valid rabies vaccination, a rabies titer test with a three-month wait, and &mdash; for dogs &mdash; a vet-administered tapeworm treatment shortly before arrival. Confirm with the Department.</p>"]
  ]
}));

/* ---------------- NEW ZEALAND ---------------- */
pages.push(country({
  slug: "from-new-zealand", crumb: "From New Zealand",
  title: "Bring a Pet to Thailand from New Zealand (DLD 2026) | PattayaPets",
  desc: "Bringing a dog or cat from New Zealand to Thailand: MPI endorsement, and " +
    "the demanding requirements if you ever return your pet to New Zealand.",
  h1: "Bringing a pet to Thailand from New Zealand",
  lede: "Getting a pet out of New Zealand is straightforward. The part that needs " +
    "real thought, before you ever leave, is whether you might bring it back.",
  sections: [
    { h: "The New Zealand side of the paperwork", html:
      "<p>" + STD_STEPS + "In New Zealand the export health certificate is completed " +
      "by your vet and endorsed by <strong>the Ministry for Primary Industries " +
      "(MPI)</strong>. New Zealand is a rabies-free country, so the export side is " +
      "generally clean &mdash; use a vet experienced in export work and book the MPI " +
      "endorsement in good time.</p>" },
    { h: "Think hard about the return to New Zealand", html:
      "<p>This is the part to research <strong>before you leave</strong>. New Zealand " +
      "protects its rabies-free status with strict import rules, and bringing a pet " +
      "back from Thailand &mdash; which is not rabies-free &mdash; can be a long, " +
      "demanding and expensive process, with rabies titer testing, extended timelines " +
      "and the real possibility of quarantine on arrival. If there is any chance you " +
      "will return your pet to New Zealand, study MPI&rsquo;s current import " +
      "requirements first, so nothing about the timeline takes you by surprise.</p>" }
  ],
  faqs: [
    ["Is it hard to take a pet out of New Zealand?",
     "<p>No &mdash; the export side is generally straightforward. Your vet completes the export certificate and MPI endorses it. The difficulty is the return journey, not the departure.</p>"],
    ["Can I bring my pet back to New Zealand from Thailand?",
     "<p>It is possible but demanding. New Zealand applies strict rules to protect its rabies-free status, and a return from Thailand can involve titer testing, long lead times and possible quarantine. Research MPI's current requirements well before you travel, not after.</p>"]
  ]
}));

/* ---------------- JAPAN ---------------- */
pages.push(country({
  slug: "from-japan", crumb: "From Japan",
  title: "Bring a Pet to Thailand from Japan (MAFF Export & DLD 2026) | PattayaPets",
  desc: "Japan to Thailand pet import: AQS export inspection, DLD import timeline, " +
    "document checklist, and the 180-day rule if you ever return to Japan.",
  h1: "Bringing a pet to Thailand from Japan",
  lede: "Japan&rsquo;s Animal Quarantine Service runs a thorough export process. The Thai " +
    "import side is standard &mdash; but if you might return to Japan, start the " +
    "<strong>180-day MAFF timeline</strong> before you ever leave.",
  officialExtra:
    "<p><strong>Japan sources:</strong> " +
    '<a href="https://www.maff.go.jp/aqs/english/animal/dog/import-other.html" target="_blank" ' +
    "rel=\"noopener nofollow\">MAFF AQS &mdash; import from non-designated regions</a> " +
    "(Thailand is non-designated); " +
    '<a href="https://www.maff.go.jp/aqs/english/" target="_blank" rel="noopener nofollow">' +
    "MAFF Animal Quarantine Service</a>. Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-japan.html\">taking a pet to Japan</a>.</p>",
  sections: [
    { h: "The timeline — Japan export and Thai import", html:
      "<p>Run the Japanese export steps and the DLD import permit in parallel once " +
      "vaccinations are current.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">8+ weeks before</th>' +
      '<td>ISO microchip; rabies and core vaccinations per Thailand&rsquo;s schedule</td>' +
      '<td>Japanese vet</td></tr>' +
      '<tr><th scope="row">4&ndash;6 weeks before</th>' +
      '<td>Apply for <a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a> (form R1/1) to the AQS at your arrival airport</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">3+ weeks before</th>' +
      '<td>Prior application for <strong>AQS export inspection</strong>; confirm Thailand import requirements with AQS</td>' +
      '<td>MAFF AQS (departure airport)</td></tr>' +
      '<tr><th scope="row">2 weeks before</th>' +
      '<td>Book airline (cabin, hold or cargo); confirm crate and routing to Suvarnabhumi or U-Tapao</td>' +
      '<td>Airline</td></tr>' +
      '<tr><th scope="row">Within 10 days of departure</th>' +
      '<td>Final clinical examination; AQS issues <strong>export quarantine certificate</strong></td>' +
      '<td>AQS + vet</td></tr>' +
      '<tr><th scope="row">Arrival in Thailand</th>' +
      '<td>AQS inspection with DLD permit, export certificate and vaccination records</td>' +
      '<td>DLD AQS</td></tr>' +
      '</tbody></table></div>' },
    { h: "Documents the DLD expects", html: TH_IMPORT_TABLE + TH_ARRIVAL_STD },
    { h: "Planning the return to Japan", html:
      "<p>Thailand is a <strong>non-designated region</strong> under MAFF rules. If there is " +
      "any chance of returning your pet to Japan, research this <strong>before you leave " +
      "Japan</strong> &mdash; not after settling in Pattaya:</p>" +
      "<ul>" +
      "<li>ISO microchip and <strong>at least two rabies vaccinations</strong> (with correct spacing).</li>" +
      "<li><a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">Rabies antibody test</a> " +
      "at a MAFF-designated laboratory &mdash; result &ge; 0.5 IU/ml.</li>" +
      "<li><strong>180-day wait</strong> from the blood sample date before the pet may enter Japan.</li>" +
      "<li><strong>Advance notification</strong> to the AQS at your arrival port at least " +
      "<strong>40 days</strong> before the return flight (online via NACCS or by email).</li>" +
      "<li>Pre-departure clinical examination and government-endorsed export certificate from Thailand.</li>" +
      "</ul>" +
      "<p>Miss a step and Japan can hold the pet in detention quarantine for up to 180 days. " +
      "See our mirror guide " +
      "<a href=\"/take-pet-out-of-thailand/to-japan.html\">exporting a pet to Japan</a> " +
      "for the full Thailand-to-Japan pathway.</p>" },
    { h: "Common mistakes on this corridor", html: TH_IMPORT_FAILS +
      "<ul>" +
      "<li><strong>Starting AQS export late</strong> &mdash; inspection appointments at Narita, Haneda or Kansai fill up.</li>" +
      "<li><strong>Ignoring the 180-day clock</strong> &mdash; the wait runs from the titer blood draw, not from when results arrive.</li>" +
      "<li><strong>Notification under 40 days</strong> &mdash; MAFF may reject late advance notification for Japan entry.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Is Japan's export process complicated?",
     "<p>It is thorough rather than chaotic. AQS sets clear steps: prior export application, meeting Thailand's import requirements, clinical examination and the export quarantine certificate. An experienced export vet and early AQS contact make the difference.</p>"],
    ["What will Japan require for the return from Thailand?",
     "<p>Non-designated region rules: microchip, two rabies vaccinations, MAFF-designated titer test, 180-day wait from the blood sample, advance notification at least 40 days before arrival, then Thai export paperwork. Plan seven months or more.</p>"],
    ["Can puppies under 10 months enter Japan from Thailand?",
     "<p>Japan's non-designated pathway effectively requires completing two rabies vaccinations and the 180-day wait after titer sampling — which means young puppies cannot complete the process quickly. Confirm current MAFF age rules before you assume a puppy can return.</p>"],
    ["Which Japanese airports handle pet export to Thailand?",
     "<p>Most Tokyo and Osaka routes go via Narita, Haneda or Kansai AQS offices. Confirm which airport your airline uses and book AQS export inspection at that port.</p>"],
    ["Does Thailand quarantine pets from Japan?",
     "<p>With complete paperwork, Thailand normally clears pets the same day at the AQS — an inspection, not weeks of quarantine. Email the Bangkok AQS to confirm arrival at least three days ahead.</p>"]
  ]
}));

/* ---------------- SINGAPORE ---------------- */
pages.push(country({
  slug: "from-singapore", crumb: "From Singapore",
  title: "Bring a Pet to Thailand from Singapore (AVS Export & DLD 2026) | PattayaPets",
  desc: "Singapore to Thailand pet import: AVS export certificate, DLD import timeline, " +
    "document checklist, and Schedule III rules if you return from Thailand.",
  h1: "Bringing a pet to Thailand from Singapore",
  lede: "Singapore is a rabies-controlled origin with a clear AVS export process. The Thai " +
    "import side is straightforward &mdash; but returning from Thailand triggers " +
    "<strong>Schedule III</strong> rules including quarantine.",
  officialExtra:
    "<p><strong>Singapore sources:</strong> " +
    '<a href="https://avs.nparks.gov.sg/pets/importing-exporting-a-pet/import/dogs-and-cats/" ' +
    'target="_blank" rel="noopener nofollow">AVS &mdash; importing dogs and cats</a> ' +
    "(verify your export country&rsquo;s rabies schedule close to travel). Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-singapore.html\">taking a pet to Singapore</a>.</p>",
  sections: [
    { h: "The timeline — Singapore export and Thai import", html:
      "<p>AVS export endorsement and the DLD import permit can run in parallel once " +
      "vaccinations are current.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">6+ weeks before</th>' +
      '<td>ISO microchip; rabies and core vaccinations per Thailand&rsquo;s schedule</td>' +
      '<td>AVS-accredited vet</td></tr>' +
      '<tr><th scope="row">4&ndash;6 weeks before</th>' +
      '<td>Apply for <a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a> (form R1/1)</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">3+ weeks before</th>' +
      '<td>AVS export health certificate and endorsement; confirm Thailand import conditions with AVS</td>' +
      '<td>AVS</td></tr>' +
      '<tr><th scope="row">2 weeks before</th>' +
      '<td>Book airline (direct Singapore&ndash;Bangkok routes are common); confirm cabin, hold or cargo</td>' +
      '<td>Airline</td></tr>' +
      '<tr><th scope="row">Within 7&ndash;10 days of departure</th>' +
      '<td>Final health examination; parasite treatments if AVS requires for export</td>' +
      '<td>Vet</td></tr>' +
      '<tr><th scope="row">Arrival in Thailand</th>' +
      '<td>AQS inspection with DLD permit, AVS export certificate and vaccination records</td>' +
      '<td>DLD AQS</td></tr>' +
      '</tbody></table></div>' },
    { h: "Documents the DLD expects", html: TH_IMPORT_TABLE + TH_ARRIVAL_STD },
    { h: "Planning the return to Singapore", html:
      "<p>Singapore classifies export countries by rabies risk. Thailand is <strong>not</strong> " +
      "Schedule I or II, so a return from Pattaya falls under <strong>Schedule III</strong> " +
      "rules &mdash; verify the current schedule on the AVS website before you travel:</p>" +
      "<ul>" +
      "<li>ISO microchip before vaccination.</li>" +
      "<li>Valid rabies vaccination using an AVS-accepted inactivated or recombinant vaccine.</li>" +
      "<li><a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">Rabies serology (RNATT)</a> " +
      "at least 28 days after vaccination; blood sample at least <strong>90 days</strong> and " +
      "within <strong>12 months</strong> before export; result &ge; 0.5 IU/ml at an approved lab.</li>" +
      "<li>AVS <strong>import licence</strong> (dog licence via PALS first if importing a dog).</li>" +
      "<li>Book <strong>quarantine at the Animal Quarantine Centre (AQC)</strong> &mdash; Schedule III " +
      "imports typically require at least <strong>30 days</strong> post-arrival quarantine.</li>" +
      "<li>Internal and external parasite treatments within the AVS window before export.</li>" +
      "</ul>" +
      "<p>Start the titer clock early in Thailand. See " +
      "<a href=\"/take-pet-out-of-thailand/to-singapore.html\">exporting a pet to Singapore</a> " +
      "for the full Thailand-to-Singapore pathway.</p>" },
    { h: "Common mistakes on this corridor", html: TH_IMPORT_FAILS +
      "<ul>" +
      "<li><strong>Assuming Singapore&rsquo;s export ease means an easy return</strong> &mdash; " +
      "Schedule III re-entry is a different process with quarantine.</li>" +
      "<li><strong>Blood sample too soon</strong> &mdash; AVS requires at least 90 days between sampling and export.</li>" +
      "<li><strong>No quarantine booking</strong> &mdash; AQC space must be reserved via the Quarantine Management System.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Is it hard to export a pet from Singapore to Thailand?",
     "<p>The export side is straightforward if you follow AVS's published steps and use an accredited vet. Direct flights to Bangkok are common. The difficulty is the return journey from Thailand, not the departure from Singapore.</p>"],
    ["What does Singapore require for the return from Thailand?",
     "<p>Schedule III rules: microchip, rabies vaccination, RNATT titer with 90-day lead time, AVS import licence, parasite treatments, AQC quarantine booking and typically 30 days post-arrival quarantine. Verify the current schedule on AVS before you travel.</p>"],
    ["Does Thailand treat Singapore as rabies-free?",
     "<p>No. Follow the standard Thai import process — microchip, rabies vaccination, health certificate and DLD import permit — even though Singapore is rabies-controlled on its own schedule.</p>"],
    ["Can I fly Singapore to Bangkok with a pet in cabin?",
     "<p>Some carriers allow cabin pets on short-haul routes subject to weight limits and aircraft type. Confirm directly with the airline; many owners use checked baggage or cargo for larger dogs.</p>"],
    ["How long before I should apply for the DLD import permit?",
     "<p>Apply 7–60 days before departure; around 30 days is sensible. The permit is valid 60 days from issue — do not apply too early.</p>"]
  ]
}));

/* ---------------- UAE ---------------- */
pages.push(country({
  slug: "from-uae", crumb: "From the UAE",
  title: "Bring a Pet to Thailand from UAE (MOCCAE & DLD 2026) | PattayaPets",
  desc: "UAE to Thailand pet import: MOCCAE export permit, DLD import timeline, " +
    "vaccination checklist, airline cargo rules and return-to-UAE planning.",
  h1: "Bringing a pet to Thailand from the UAE",
  lede: "Dubai and Abu Dhabi to Bangkok is a corridor Gulf expats use constantly. " +
    "You are juggling <strong>two permits</strong> &mdash; MOCCAE to leave the UAE, " +
    "DLD to enter Thailand &mdash; plus airline rules that often mean cargo, not cabin.",
  officialExtra:
    "<p><strong>UAE sources:</strong> " +
    "<a href=\"https://moccae.gov.ae/en/services/import-permit-pets\" target=\"_blank\" " +
    "rel=\"noopener nofollow\">MOCCAE import/export of pets</a> (service updated January 2025; " +
    "transition to Emirates Drug Establishment may apply &mdash; confirm current portal). " +
    "Export mirror: " +
    "<a href=\"/take-pet-out-of-thailand/to-uae.html\">taking a pet to the UAE</a>.</p>",
  sections: [
    { h: "The timeline — what to do when", html:
      "<p>Apply for <strong>both</strong> the UAE export side and the Thai import side " +
      "in parallel once vaccinations are in order.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">6&ndash;8 weeks before</th>' +
      '<td>ISO microchip, rabies and core vaccinations; <strong>21-day wait</strong> after primary rabies (MOCCAE and DLD both expect this)</td>' +
      '<td>UAE-licensed vet</td></tr>' +
      '<tr><th scope="row">~30 days before departure</th>' +
      '<td>Apply for <strong>MOCCAE export permit</strong> to leave the UAE</td>' +
      '<td>MOCCAE online portal</td></tr>' +
      '<tr><th scope="row">~30 days before departure</th>' +
      '<td>Apply for <a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a> (form R1/1) to the AQS at your arrival airport</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">2&ndash;3 weeks before</th>' +
      '<td>Book pet space &mdash; confirm whether the airline accepts cabin, hold or requires <strong>manifested cargo</strong> per IATA</td>' +
      '<td>Airline</td></tr>' +
      '<tr><th scope="row">Final week</th>' +
      '<td>Official export health certificate from competent UAE veterinary authority; any pre-shipment treatments MOCCAE requires</td>' +
      '<td>Vet + MOCCAE</td></tr>' +
      '<tr><th scope="row">&ge;3 days before landing</th>' +
      '<td>Confirm arrival date with the Thai AQS by email</td>' +
      '<td>DLD</td></tr>' +
      '<tr><th scope="row">Arrival in Thailand</th>' +
      '<td>AQS inspection; 500&nbsp;baht fee if paperwork is complete</td>' +
      '<td>DLD</td></tr>' +
      '</tbody></table></div>' +
      "<p>Thai-side steps: " + STD_STEPS + "</p>" },
    { h: "The UAE export side (MOCCAE)", html:
      "<p>Before a pet leaves the United Arab Emirates, the Ministry of Climate Change " +
      "and Environment (MOCCAE) requires an <strong>export permit</strong>, permanent " +
      "microchip identification, valid vaccinations (including rabies) and an official " +
      "veterinary health certificate. MOCCAE publishes the current service on " +
      "<a href=\"https://moccae.gov.ae/en/services/import-permit-pets\" target=\"_blank\" " +
      "rel=\"noopener nofollow\">its website</a>.</p>" +
      "<p><strong>Residents who may return to the UAE:</strong> MOCCAE rules state that " +
      "pets leaving the UAE should obtain a <strong>MOCCAE veterinary health certificate " +
      "before departure</strong>, keep rabies vaccination valid for the return, and apply " +
      "for an import permit before coming back. If rabies vaccination lapses while you are " +
      "in Thailand, the pet may be treated as a first-time import on return.</p>" +
      "<p><strong>Breed restrictions:</strong> several dog types (including Pit Bull types, " +
      "Tosa, Dogo Argentino, Fila Brasileiro, wolf hybrids and American Staffordshire " +
      "Terrier) are prohibited from UAE import. Confirm your breed before assuming you can " +
      "return.</p>" },
    { h: "Documents for Thailand", html: TH_DOCS_TABLE + TH_ARRIVAL_UAE },
    { h: "Planning the return to the UAE", html:
      "<p>If you might take your pet back to the Emirates, read " +
      "<a href=\"/take-pet-out-of-thailand/to-uae.html\">exporting a pet to the UAE</a> " +
      "before you leave. MOCCAE requires a prior <strong>import permit</strong> (valid " +
      "90 days from issue per current service guidance), matching microchip, rabies " +
      "vaccination at least <strong>21 days</strong> before arrival (and not before the " +
      "pet is <strong>three months old</strong>), core vaccinations for dogs and cats, and " +
      "often pre-shipment treatments within a set window. Entry inspection fees apply at " +
      "the port of arrival.</p>" +
      "<p>The UAE generally does <em>not</em> require a rabies titer test from Thailand, " +
      "but if you might move on to the EU or UK, doing the " +
      "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">titer test</a> " +
      "early keeps that option open.</p>" },
    { h: "Common mistakes on this corridor", html: UAE_FAILS }
  ],
  faqs: [
    ["Does the UAE require special paperwork to export a pet to Thailand?",
     "<p>Yes. MOCCAE requires an export permit, microchip, vaccinations and an endorsed health certificate before the pet leaves the UAE — in addition to Thailand's DLD import permit on the Thai side.</p>"],
    ["Do I need both a MOCCAE permit and a Thai import permit?",
     "<p>Yes. MOCCAE permission covers export from the UAE; the DLD import permit (form R1/1) covers entry into Thailand. They are separate applications to separate authorities.</p>"],
    ["Can my pet fly in the cabin from Dubai to Bangkok?",
     "<p>It depends on the airline and MOCCAE conditions. Some routes require manifested cargo under IATA rules. Confirm with your airline and MOCCAE before booking — do not assume cabin travel is available.</p>"],
    ["Is there quarantine when I bring a pet from the UAE to Thailand?",
     "<p>With correct paperwork, most pets clear the AQS inspection on arrival rather than entering long quarantine. Incomplete documents or signs of illness can trigger quarantine — see our <a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">quarantine guide</a>.</p>"],
    ["Which emirate's rules apply?",
     "<p>MOCCAE sets federal import/export rules, but airlines and local authorities may add conditions. Confirm for the emirate and airport you use (Dubai, Abu Dhabi, Sharjah, etc.).</p>"]
  ]
}));

/* ---------------- U-TAPAO vs BANGKOK ---------------- */
pages.push(article({
  path: "/bring-pet-to-thailand/u-tapao-airport-pets.html",
  title: "U-Tapao or Bangkok for Pets? Flying into Pattaya (2026) | PattayaPets",
  desc: "Whether you can fly a pet directly into U-Tapao near Pattaya, why most pet " +
    "imports use Bangkok's Suvarnabhumi, and how to get from the airport to Pattaya.",
  crumb: "U-Tapao or Bangkok?",
  breadcrumbs: SUB,
  eyebrow: "Bringing a pet to Thailand",
  h1: "Flying a pet into Pattaya: U-Tapao or Bangkok?",
  lede: "Pattaya has its own airport at U-Tapao, so it is a natural question: can " +
    "you skip Bangkok and fly your pet straight in? Here is the honest picture.",
  verify: VERIFY,
  sections: [
    { h: "Pattaya's two airport options", html:
      "<p>Pattaya is served by two airports. <strong>U-Tapao (Rayong-Pattaya " +
      "International, UTP)</strong> sits south of the city and is the closest by " +
      "road. <strong>Suvarnabhumi (Bangkok, BKK)</strong> is larger, further away " +
      "&mdash; very roughly a one-and-a-half to two-hour drive north &mdash; and is " +
      "the airport almost every long-haul route actually uses.</p>" },
    { h: "Where pet imports are actually handled", html:
      "<p>A live-animal import to Thailand has to clear an airport with a Department " +
      "of Livestock Development <strong>Animal Quarantine Station</strong> and the " +
      "established import process. <strong>Suvarnabhumi is the well-trodden port of " +
      "entry for pets</strong> &mdash; its quarantine station handles pet arrivals " +
      "routinely, and the steps are familiar to vets, airlines and relocation " +
      "agents. U-Tapao is a smaller airport that mainly serves regional, charter and " +
      "selected scheduled flights. Whether a pet can be imported through U-Tapao at " +
      "all depends on the DLD clearance facilities there and on your airline " +
      "carrying animals to it &mdash; do not assume it is possible. Confirm directly " +
      "with the DLD and the airline before planning any U-Tapao arrival. See also " +
      "<a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">pet quarantine " +
      "in Thailand</a> for what happens when paperwork is not in order.</p>" },
    { h: "The practical reality for most owners", html:
      "<p>In practice, the overwhelming majority of pets bound for Pattaya arrive at " +
      "<strong>Suvarnabhumi</strong>, clear the " +
      "<a href=\"/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html\">quarantine " +
      "station there</a>, and travel on to Pattaya by road. Routing through Bangkok also gives you far more choice " +
      "of airline and flight, and more direct long-haul options &mdash; which " +
      "usually means a shorter, lower-stress journey for the pet than chasing a " +
      "rare U-Tapao connection. Whichever airport you use, you still need the " +
      "<a href=\"/bring-pet-to-thailand/import-permit-thailand-dld.html\">DLD import permit</a> " +
      "and an airline that accepts pets under its " +
      "<a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">pet policy</a>.</p>" },
    { h: "Getting from the airport to Pattaya", html:
      "<p>From Suvarnabhumi, arrange a <strong>pet-friendly vehicle</strong> in " +
      "advance &mdash; a private transfer or a relocation agent&rsquo;s service that " +
      "expects an animal and a travel crate. Plan for the road time, bring water, " +
      "and avoid leaving a crate in a hot vehicle. After a long flight and the " +
      "quarantine check, a calm, direct drive to Pattaya is what your pet needs " +
      "most.</p>" },
    { h: "Official sources", html: OFFICIAL }
  ],
  faqs: [
    ["Can I fly my pet directly into Pattaya?",
     "<p>Possibly not in the way you would hope. Pet imports to Thailand clear through an airport with a DLD Animal Quarantine Station, and Suvarnabhumi in Bangkok is the established one. Whether U-Tapao near Pattaya can process a pet import depends on its facilities and your airline &mdash; confirm with the DLD and the airline rather than assuming.</p>"],
    ["How do I get my pet from Bangkok to Pattaya?",
     "<p>By road &mdash; arrange a pet-friendly private transfer or a relocation agent's vehicle in advance. It is roughly a one-and-a-half to two-hour drive. Bring water and never leave the crate in a hot, unventilated vehicle.</p>"],
    ["Which airport should I plan for?",
     "<p>For almost every owner, Bangkok's Suvarnabhumi &mdash; it has the established pet-import process and far more flight choice. Treat a direct U-Tapao arrival as something to verify carefully with the DLD and airline, not to assume.</p>"]
  ],
  related: [
    { name: "Import checklist", path: "/bring-pet-to-thailand/checklist.html", desc: "Printable step-by-step checklist." },
    { name: "Arriving at Suvarnabhumi", path: "/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html", desc: "The quarantine-station check on landing." },
    { name: "Pet quarantine in Thailand", path: "/bring-pet-to-thailand/thailand-pet-quarantine.html", desc: "What the AQS check really means." },
    { name: "The full process", path: "/bring-pet-to-thailand/", desc: "Every step, in order." },
    { name: "The export process", path: "/take-pet-out-of-thailand/export-process.html", desc: "When you leave Thailand again." },
    { name: "What it costs", path: "/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html", desc: "Budget for the whole move." }
  ]
}));

/* ---------------- INDIA ---------------- */
pages.push(country({
  slug: "from-india", crumb: "From India",
  title: "Bring a Pet to Thailand from India (AQCS & DLD 2026) | PattayaPets",
  desc: "Bringing a dog or cat from India to Thailand: AQCS export certificate, " +
    "Thai import steps, and what to plan if you may leave again.",
  h1: "Bringing a pet to Thailand from India",
  lede: "Thailand's import rules are the same for every origin. From India, the " +
    "distinctive part is the export health certificate issued through India's " +
    "Animal Quarantine and Certification Services (AQCS).",
  sections: [
    { h: "The Indian export side", html:
      "<p>" + STD_STEPS + "In India, the veterinary health certificate for export " +
      "is issued and endorsed through the <strong>Animal Quarantine and Certification " +
      "Services (AQCS)</strong>, under the Department of Animal Husbandry and " +
      "Dairying. Procedures vary by airport and state &mdash; use an experienced " +
      "export vet and confirm the current AQCS process for your departure city " +
      "before you book.</p>" +
      "<p>Direct flights from Indian cities to Bangkok are limited compared with " +
      "routes via the Gulf or Southeast Asia hubs. That affects both airline pet " +
      "policies and total journey time &mdash; see " +
      "<a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">airline pet policies</a> " +
      "early.</p>" },
    { h: "If you may leave Thailand again", html:
      "<p>India treats many countries as requiring a rabies titer test and waiting " +
      "period for re-entry. If you might return to India with your pet, plan the " +
      "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">rabies titer test</a> " +
      "before or soon after arrival in Thailand, and verify current AQCS import " +
      "rules with plenty of lead time. See our guide to " +
      "<a href=\"/take-pet-out-of-thailand/to-india.html\">exporting a pet to India</a> " +
      "for the full return paperwork.</p>" }
  ],
  faqs: [
    ["Does Thailand require extra steps for a pet from India?",
     "<p>Thailand's core requirements are the same: microchip, rabies vaccination, health certificate and DLD import permit. India is not on Thailand's simplified rabies-free list, so follow the standard import route and confirm every document with the DLD before you fly.</p>"],
    ["Which Indian authority endorses the export certificate?",
     "<p>AQCS (Animal Quarantine and Certification Services) handles export certification for live animals leaving India. Your vet and AQCS office for your departure airport will guide the current process.</p>"]
  ]
}));

/* ---------------- PHILIPPINES ---------------- */
pages.push(country({
  slug: "from-philippines", crumb: "From the Philippines",
  title: "Bring a Pet to Thailand from Philippines (DLD 2026) | PattayaPets",
  desc: "Bringing a dog or cat from the Philippines to Thailand: BAI export " +
    "paperwork, airline routes, and what to plan if you may leave again.",
  h1: "Bringing a pet to Thailand from the Philippines",
  lede: "Manila and other Philippine cities have direct and one-stop flights to " +
    "Bangkok, which makes this a common relocation route. The Thai steps are " +
    "standard; the Philippine side is handled through the Bureau of Animal Industry (BAI).",
  sections: [
    { h: "The Philippine export side", html:
      "<p>" + STD_STEPS + "For export from the Philippines, the health certificate " +
      "and export endorsement are handled through the <strong>Bureau of Animal " +
      "Industry (BAI)</strong>. Use a veterinarian registered with BAI and confirm " +
      "the current export requirements for dogs and cats leaving the Philippines " +
      "before you fix a travel date.</p>" +
      "<p>Flights from Manila to Bangkok are relatively straightforward compared " +
      "with long-haul routes from Europe or the Americas. Still confirm cabin, " +
      "checked-baggage and cargo options with your airline &mdash; policies differ " +
      "by carrier and aircraft.</p>" },
    { h: "Arriving near Pattaya", html:
      "<p>Most pets clear at Suvarnabhumi in Bangkok. From there it is a road " +
      "transfer to Pattaya &mdash; see " +
      "<a href=\"/bring-pet-to-thailand/u-tapao-airport-pets.html\">U-Tapao or Bangkok?</a> " +
      "and <a href=\"/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html\">arrival " +
      "at Suvarnabhumi</a>.</p>" },
    { h: "If you may leave Thailand again", html:
      "<p>The Philippines applies its own import rules when a pet returns from abroad. " +
      "If you might go back to the Philippines with your pet, research current BAI " +
      "import requirements before you leave and plan the " +
      "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">rabies titer test</a> " +
      "with plenty of lead time. See our guide to " +
      "<a href=\"/take-pet-out-of-thailand/to-philippines.html\">exporting a pet to the Philippines</a> " +
      "for the full return paperwork.</p>" }
  ],
  faqs: [
    ["Is the Philippines treated as rabies-free by Thailand?",
     "<p>No. Follow the standard Thai import process with microchip, rabies vaccination, health certificate and DLD import permit. Confirm the current DLD list and your pet's vaccination timing before you apply.</p>"],
    ["Who issues the Philippine export health certificate?",
     "<p>The Bureau of Animal Industry (BAI) oversees export certification. Your BAI-accredited veterinarian will guide the health certificate and any BAI endorsement required for export.</p>"]
  ]
}));

/* ---------------- CHINA ---------------- */
pages.push(country({
  slug: "from-china", crumb: "From China",
  title: "Bring a Pet to Thailand from China (DLD 2026) | PattayaPets",
  desc: "Bringing a dog or cat from China to Thailand: customs export paperwork, " +
    "direct flights to Bangkok, and the standard Thai import steps.",
  h1: "Bringing a pet to Thailand from China",
  lede: "Direct flights from Shanghai, Guangzhou, Beijing and other Chinese cities " +
    "to Bangkok are common, which makes China a frequent origin for relocations " +
    "to Pattaya. The Thai import steps are standard; the Chinese side is handled " +
    "through local animal health and customs export procedures.",
  sections: [
    { h: "The Chinese export side", html:
      "<p>" + STD_STEPS + "For export from China, your veterinarian works with the " +
      "local animal health authority and <strong>customs export inspection</strong> " +
      "to issue the health certificate and any export endorsement required. " +
      "Procedures vary by city and departure airport &mdash; use an experienced " +
      "export vet or relocation agent and confirm the current requirements for " +
      "your departure point before you book.</p>" +
      "<p>Many routes fly directly to Suvarnabhumi in Bangkok, which simplifies " +
      "the Pattaya end of the journey. Still confirm cabin, checked-baggage and " +
      "cargo options with your airline early &mdash; see " +
      "<a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">airline pet policies</a>.</p>" },
    { h: "If you may leave Thailand again", html:
      "<p>China applies strict re-entry rules for pets arriving from most countries, " +
      "including rabies controls and advance notification. If you might return to " +
      "China with your pet, research the current import rules before you leave and " +
      "plan the <a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">" +
      "rabies titer test</a> with plenty of lead time. See our guide to " +
      "<a href=\"/take-pet-out-of-thailand/to-china.html\">exporting a pet to China</a> " +
      "for the full return paperwork.</p>" }
  ],
  faqs: [
    ["Does Thailand treat China differently for pet import?",
     "<p>Thailand's core requirements are the same: microchip, rabies vaccination, health certificate and DLD import permit. China is not on Thailand's simplified rabies-free list, so follow the standard import route and confirm every document with the DLD before you fly.</p>"],
    ["Which Chinese authority handles pet export?",
     "<p>Export involves your accredited veterinarian, local animal health supervision, and customs export inspection at your departure airport. An experienced export vet or relocation agent will guide the current process for your city.</p>"]
  ]
}));

/* ---------------- SOUTH AFRICA ---------------- */
pages.push(country({
  slug: "from-south-africa", crumb: "From South Africa",
  title: "Bring a Pet to Thailand from South Africa (DLD 2026) | PattayaPets",
  desc: "Bringing a dog or cat from South Africa to Thailand: DAFF export " +
    "certificate, flight routing, and the standard Thai import steps.",
  h1: "Bringing a pet to Thailand from South Africa",
  lede: "South Africa is a high-rabies origin with a formal export process through " +
    "the Department of Agriculture. The Thai import steps are standard; allow " +
    "extra lead time for flights and export paperwork.",
  sections: [
    { h: "The South African export side", html:
      "<p>" + STD_STEPS + "For export from South Africa, the veterinary health " +
      "certificate is issued and endorsed through the " +
      "<strong>Department of Agriculture, Land Reform and Rural Development (DALRRD)</strong> " +
      "export process (often referred to in pet-move guides as DAFF). Use a " +
      "state veterinarian or an experienced export vet and confirm the current " +
      "export requirements for dogs and cats leaving South Africa before you fix " +
      "a travel date.</p>" +
      "<p>Most routes to Bangkok involve at least one stop &mdash; often in the " +
      "Gulf or Southeast Asia &mdash; which affects total journey time and airline " +
      "pet policies. Plan crate comfort, water and layover rules with your agent " +
      "or airline.</p>" },
    { h: "Arriving near Pattaya", html:
      "<p>Pets clear at Suvarnabhumi in Bangkok. From there it is a road transfer " +
      "to Pattaya &mdash; see " +
      "<a href=\"/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html\">arrival " +
      "at Suvarnabhumi</a> and " +
      "<a href=\"/bring-pet-to-thailand/u-tapao-airport-pets.html\">U-Tapao or Bangkok?</a>.</p>" +
      "<p>If you may return to South Africa, verify current DALRRD re-entry rules " +
      "with plenty of lead time &mdash; see our guide to " +
      "<a href=\"/take-pet-out-of-thailand/to-south-africa.html\">exporting a pet to South Africa</a>.</p>" }
  ],
  faqs: [
    ["Is South Africa treated as rabies-free by Thailand?",
     "<p>No. Follow the standard Thai import process with microchip, rabies vaccination, health certificate and DLD import permit. Confirm the current DLD list and your pet's vaccination timing before you apply.</p>"],
    ["Who endorses the South African export certificate?",
     "<p>Export health certification for live animals leaving South Africa is handled through the official veterinary export process under DALRRD. Your export vet will guide the health certificate and any state endorsement required.</p>"]
  ]
}));

module.exports = pages;
