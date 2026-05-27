"use strict";
/* More origin-country guides for the "Bringing a pet to Thailand" cluster,
   plus the U-Tapao / Bangkok arrival-airport guide. */

const { article } = require("../guidekit.js");
const { importCountryRelated, attachReturnExportLink } = require("../data/country-pairs.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const CLUSTER = { name: "Bringing a pet to Thailand", path: "/bring-pet-to-thailand/" };
const SUB = [GUIDES, CLUSTER];

const VERIFY =
  "This guide was last reviewed in May 2026. Thailand's Department of Livestock " +
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
  { name: "Taking a pet out of Thailand", path: "/take-pet-out-of-thailand/", desc: "The reverse process, for later." }
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

function country(o) {
  var sections = attachReturnExportLink((o.sections || []).slice(), o.slug);
  sections.push({ h: "Official sources", html: OFFICIAL });
  return article({
    path: "/bring-pet-to-thailand/" + o.slug + ".html",
    title: o.title, desc: o.desc, crumb: o.crumb, breadcrumbs: SUB,
    eyebrow: "Bringing a pet to Thailand &middot; By country",
    h1: o.h1, lede: o.lede, verify: VERIFY,
    sections: sections, faqs: o.faqs, related: o.related || countryRelated(o.slug)
  });
}

const pages = [];

/* ---------------- SWEDEN ---------------- */
pages.push(country({
  slug: "from-sweden", crumb: "From Sweden",
  title: "Bringing a pet to Thailand from Sweden | PattayaPets",
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
  title: "Bringing a pet to Thailand from Norway | PattayaPets",
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
  title: "Bringing a pet to Thailand from Denmark | PattayaPets",
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
  title: "Bringing a pet to Thailand from Finland | PattayaPets",
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
  title: "Bringing a pet to Thailand: the Netherlands | PattayaPets",
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
  title: "Bringing a pet to Thailand from France | PattayaPets",
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
  title: "Bringing a pet to Thailand from Switzerland | PattayaPets",
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
  title: "Bringing a pet to Thailand from Ireland | PattayaPets",
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
  title: "Bringing a pet to Thailand from New Zealand | PattayaPets",
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
  title: "Bringing a pet to Thailand from Japan | PattayaPets",
  desc: "Bringing a dog or cat from Japan to Thailand: AQS export paperwork, the rabies " +
    "titer test for the return, and what to plan before you leave.",
  h1: "Bringing a pet to Thailand from Japan",
  lede: "Japan is a well-organised origin for pet export. The Thai import steps are " +
    "standard; the part worth planning early is what Japan will require if you ever " +
    "bring your pet back.",
  sections: [
    { h: "The Japanese side of the paperwork", html:
      "<p>" + STD_STEPS + "For export from Japan, your vet works through the " +
      "<strong>Animal Quarantine Service (AQS)</strong> &mdash; the export health " +
      "certificate, vaccination records and any pre-export inspection the route " +
      "requires. Japan&rsquo;s process is thorough; use a vet experienced in export " +
      "work and allow plenty of lead time for AQS appointments.</p>" },
    { h: "Planning the return to Japan", html:
      "<p>If there is any chance of returning your pet to Japan, research the " +
      "<strong>re-entry rules before you leave</strong>. Japan applies strict rabies " +
      "controls to pets arriving from most countries, including a " +
      "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">rabies " +
      "titer test</a>, advance notification to AQS and a waiting period from the " +
      "blood sample before the pet may enter. The timeline is measured in months, " +
      "not weeks &mdash; confirm the current detail with AQS and your vet.</p>" }
  ],
  faqs: [
    ["Is Japan's export process complicated?",
     "<p>It is thorough rather than chaotic. The AQS sets clear steps, and an experienced export vet makes the difference. Start early, especially if you need AQS inspection appointments close to your travel date.</p>"],
    ["What will Japan require for the return?",
     "<p>Strict rabies controls for most origin countries: microchip, rabies vaccination, a rabies titer test, advance notification to AQS and a waiting period from the sample date. Confirm the current rules with AQS before you travel.</p>"]
  ]
}));

/* ---------------- SINGAPORE ---------------- */
pages.push(country({
  slug: "from-singapore", crumb: "From Singapore",
  title: "Bringing a pet to Thailand from Singapore | PattayaPets",
  desc: "Bringing a dog or cat from Singapore to Thailand: AVS export certificate, " +
    "the Thai DLD import permit, and what to plan if you might return.",
  h1: "Bringing a pet to Thailand from Singapore",
  lede: "Singapore is a rabies-free country with a clear export process. The Thai " +
    "import side is standard; the return journey is where the rules tighten.",
  sections: [
    { h: "The Singapore side of the paperwork", html:
      "<p>" + STD_STEPS + "For export from Singapore, your vet completes the export " +
      "health certificate through the <strong>Animal &amp; Veterinary Service (AVS)</strong>. " +
      "Singapore&rsquo;s export requirements are well documented; book AVS endorsement " +
      "and any pre-export steps in good time.</p>" },
    { h: "Planning the return to Singapore", html:
      "<p>Singapore protects its rabies-free status strictly. Bringing a pet back from " +
      "Thailand &mdash; which is not rabies-free &mdash; requires a valid rabies " +
      "vaccination, a <a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">" +
      "rabies titer test</a> from an approved laboratory, an import licence from AVS " +
      "and often a quarantine or home-isolation period on arrival. If there is any " +
      "chance of returning, study AVS&rsquo;s current import requirements before you " +
      "leave &mdash; not after.</p>" }
  ],
  faqs: [
    ["Is it hard to export a pet from Singapore?",
     "<p>The export side is straightforward if you follow AVS's published steps and use an experienced vet. The difficulty is the return journey from Thailand, not the departure from Singapore.</p>"],
    ["What does Singapore require for the return?",
     "<p>A rabies vaccination, a rabies titer test, an AVS import licence and compliance with Singapore's post-arrival rules. Confirm the current detail with AVS before you travel.</p>"]
  ]
}));

/* ---------------- U-TAPAO vs BANGKOK ---------------- */
pages.push(article({
  path: "/bring-pet-to-thailand/u-tapao-airport-pets.html",
  title: "Flying a pet into Pattaya: U-Tapao or Bangkok? | PattayaPets",
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
    { name: "Arriving at Suvarnabhumi", path: "/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html", desc: "The quarantine-station check on landing." },
    { name: "Pet quarantine in Thailand", path: "/bring-pet-to-thailand/thailand-pet-quarantine.html", desc: "What the AQS check really means." },
    { name: "The full process", path: "/bring-pet-to-thailand/", desc: "Every step, in order." },
    { name: "What it costs", path: "/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html", desc: "Budget for the whole move." }
  ]
}));

module.exports = pages;
