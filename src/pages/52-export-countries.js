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
  '<tr><th scope="row">Destination import rules</th><td>Attach MOCCAE or EU/German import requirements so the Thai health certificate matches.</td></tr>' +
  '<tr><th scope="row">Microchip &amp; vaccinations</th><td>ISO chip and current rabies vaccination; EU/Germany may require a <a href="/bring-pet-to-thailand/rabies-vaccination-titer-test.html">rabies titer test</a>.</td></tr>' +
  '<tr><th scope="row">DLD export licence &amp; health certificate</th><td>Issued after AQS inspection if paperwork complies.</td></tr>' +
  '</tbody></table></div>';

const EXPORT_FAILS =
  "<ul>" +
  "<li><strong>Starting with Thailand only</strong> &mdash; MOCCAE or EU import permits are usually the long pole.</li>" +
  "<li><strong>Expired vaccinations</strong> &mdash; a lapsed rabies shot can void MOCCAE or EU entry.</li>" +
  "<li><strong>Microchip mismatch</strong> across Thai export papers and destination import forms.</li>" +
  "<li><strong>Last-minute DLD export</strong> &mdash; applying inside the 15-day window when tests are still pending.</li>" +
  "</ul>";

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
  title: "Export a Pet from Thailand to Sweden (DLD 2026) | PattayaPets",
  desc: "Bringing a dog or cat from Thailand to Sweden: the rabies titer test, the " +
    "three-month wait and the EU entry health certificate.",
  h1: "Taking a pet from Thailand to Sweden",
  lede: "Many of Pattaya's Swedish residents eventually head home with a pet. " +
    "Sweden applies the standard EU entry rules.",
  sections: [
    { h: "Entering Sweden", html:
      EU_ENTRY +
      "<p>The Swedish Board of Agriculture (Jordbruksverket) oversees pet entry. " +
      "Sweden does not apply the special tapeworm-treatment rule that a few " +
      "countries keep &mdash; but always reconfirm the current requirements with " +
      "Jordbruksverket before you book.</p>" },
    { h: "The Thai side and your timeline", html: THAI_SIDE }
  ],
  faqs: [
    ["How long does moving a pet from Thailand to Sweden take?",
     "<p>Plan for several months if the titer test still has to be done &mdash; the three-month wait after the blood sample is unavoidable. A valid existing titer test makes it much faster.</p>"],
    ["Does Sweden require tapeworm treatment?",
     "<p>Sweden does not currently apply the special tapeworm-treatment rule. Confirm the current position with Jordbruksverket, as rules change.</p>"]
  ]
}));

/* ---------------- NORWAY ---------------- */
pages.push(exp({
  slug: "to-norway", crumb: "To Norway",
  title: "Export a Pet from Thailand to Norway (DLD 2026) | PattayaPets",
  desc: "Bringing a dog or cat from Thailand to Norway: the rabies titer test, the " +
    "three-month wait, and the tapeworm treatment for dogs.",
  h1: "Taking a pet from Thailand to Norway",
  lede: "Norway is not in the EU, but it applies the EU pet-travel rules &mdash; " +
    "with one extra requirement for dogs.",
  sections: [
    { h: "Entering Norway", html:
      EU_ENTRY +
      "<p>The Norwegian Food Safety Authority (Mattilsynet) oversees pet entry. " +
      "Norway also keeps the <strong>tapeworm (Echinococcus) treatment rule</strong>: " +
      "a dog entering Norway must be treated against tapeworm by a vet within a set " +
      "window before arrival (commonly 24 to 120 hours).</p>" },
    { h: "The Thai side and your timeline", html: THAI_SIDE }
  ],
  faqs: [
    ["Does my dog need tapeworm treatment to enter Norway?",
     "<p>Yes &mdash; Norway requires a vet-administered tapeworm treatment for dogs within a set window before arrival. Confirm the current window with Mattilsynet.</p>"],
    ["Does Norway being outside the EU change the process?",
     "<p>Not greatly. Norway applies the EU pet-travel rules, so the titer test, the three-month wait and the health certificate work as for an EU country, plus the tapeworm step for dogs.</p>"]
  ]
}));

/* ---------------- DENMARK ---------------- */
pages.push(exp({
  slug: "to-denmark", crumb: "To Denmark",
  title: "Export a Pet from Thailand to Denmark (DLD 2026) | PattayaPets",
  desc: "Bringing a dog or cat from Thailand to Denmark: the rabies titer test, the " +
    "three-month wait and the EU entry health certificate.",
  h1: "Taking a pet from Thailand to Denmark",
  lede: "Denmark applies the standard EU entry rules for a pet arriving from " +
    "Thailand, so plan the timeline around the titer test.",
  sections: [
    { h: "Entering Denmark", html:
      EU_ENTRY +
      "<p>The Danish Veterinary and Food Administration oversees pet entry. " +
      "Denmark does not apply the special tapeworm-treatment rule, but confirm the " +
      "current requirements with the Danish authorities before you book.</p>" },
    { h: "The Thai side and your timeline", html: THAI_SIDE }
  ],
  faqs: [
    ["Is the three-month wait avoidable for Denmark?",
     "<p>Only if a valid rabies titer test is already in place, with the rabies vaccination kept current. Otherwise the three-month wait from the blood-sample date is unavoidable.</p>"],
    ["Who should I check the current rules with?",
     "<p>The Danish Veterinary and Food Administration for the destination side, and the Thai DLD for the export side. Check both before booking, as rules change.</p>"]
  ]
}));

/* ---------------- FINLAND ---------------- */
pages.push(exp({
  slug: "to-finland", crumb: "To Finland",
  title: "Export a Pet from Thailand to Finland (DLD 2026) | PattayaPets",
  desc: "Bringing a dog or cat from Thailand to Finland: the rabies titer test, the " +
    "three-month wait, and the tapeworm treatment for dogs.",
  h1: "Taking a pet from Thailand to Finland",
  lede: "Finland applies the EU entry rules, with one extra requirement for dogs " +
    "to plan around.",
  sections: [
    { h: "Entering Finland", html:
      EU_ENTRY +
      "<p>The Finnish Food Authority (Ruokavirasto) oversees pet entry. Finland " +
      "also keeps the <strong>tapeworm (Echinococcus) treatment rule</strong>: a " +
      "dog entering Finland must be treated against tapeworm by a vet within a set " +
      "window before arrival (commonly 24 to 120 hours).</p>" },
    { h: "The Thai side and your timeline", html: THAI_SIDE }
  ],
  faqs: [
    ["Does my dog need tapeworm treatment to enter Finland?",
     "<p>Yes &mdash; Finland requires a vet-administered tapeworm treatment for dogs within a set window before arrival. Confirm the current window with Ruokavirasto.</p>"],
    ["How early should I start?",
     "<p>Several months ahead if the titer test still has to be done &mdash; the three-month wait is unavoidable. Do the titer test as early as possible.</p>"]
  ]
}));

/* ---------------- NETHERLANDS ---------------- */
pages.push(exp({
  slug: "to-netherlands", crumb: "To the Netherlands",
  title: "Export a Pet from Thailand to the Netherlands (DLD 2026) | PattayaPets",
  desc: "Bringing a dog or cat from Thailand to the Netherlands: the rabies titer " +
    "test, the three-month wait and the EU entry health certificate.",
  h1: "Taking a pet from Thailand to the Netherlands",
  lede: "The Netherlands applies the standard EU entry rules, and Amsterdam is a " +
    "convenient direct arrival point from Bangkok.",
  sections: [
    { h: "Entering the Netherlands", html:
      EU_ENTRY +
      "<p>The Netherlands Food and Consumer Product Safety Authority (NVWA) " +
      "oversees pet entry. Amsterdam Schiphol has direct routes from Bangkok, " +
      "which keeps the journey as short as possible &mdash; easier on the " +
      "pet.</p>" },
    { h: "The Thai side and your timeline", html: THAI_SIDE }
  ],
  faqs: [
    ["Are there direct flights for a pet from Thailand to the Netherlands?",
     "<p>Amsterdam has direct routes from Bangkok; whether a given flight accepts a pet in cabin, as checked baggage or as cargo depends on the airline and aircraft. Confirm with the airline well ahead.</p>"],
    ["Is the three-month wait avoidable?",
     "<p>Only with a valid rabies titer test already in place and the vaccination kept current. Otherwise plan for the full three-month wait after the blood sample.</p>"]
  ]
}));

/* ---------------- FRANCE ---------------- */
pages.push(exp({
  slug: "to-france", crumb: "To France",
  title: "Export a Pet from Thailand to France (DLD 2026) | PattayaPets",
  desc: "Bringing a dog or cat from Thailand to France: the rabies titer test, the " +
    "three-month wait and the EU entry health certificate.",
  h1: "Taking a pet from Thailand to France",
  lede: "France applies the standard EU entry rules for a pet arriving from " +
    "Thailand, with Paris a common direct arrival point.",
  sections: [
    { h: "Entering France", html:
      EU_ENTRY +
      "<p>The French veterinary authorities oversee pet entry, and the entry " +
      "health certificate is checked on arrival. Paris has direct routes from " +
      "Bangkok, which shortens the journey.</p>" },
    { h: "The Thai side and your timeline", html: THAI_SIDE }
  ],
  faqs: [
    ["How long does it take to move a pet from Thailand to France?",
     "<p>Plan for several months if the titer test is still to be done &mdash; the three-month wait is fixed. A valid existing titer test makes it considerably faster.</p>"],
    ["Does the EU pet passport cover entry from Thailand?",
     "<p>No. Coming from a non-listed country your pet needs an EU third-country entry health certificate. Confirm the current rules with the French authorities.</p>"]
  ]
}));

/* ---------------- IRELAND ---------------- */
pages.push(exp({
  slug: "to-ireland", crumb: "To Ireland",
  title: "Export a Pet from Thailand to Ireland (DLD 2026) | PattayaPets",
  desc: "Bringing a dog or cat from Thailand to Ireland: the rabies titer test, the " +
    "three-month wait, and the tapeworm treatment for dogs.",
  h1: "Taking a pet from Thailand to Ireland",
  lede: "Ireland applies the EU entry rules, with one extra requirement for dogs.",
  sections: [
    { h: "Entering Ireland", html:
      EU_ENTRY +
      "<p>The Department of Agriculture, Food and the Marine oversees pet entry. " +
      "Ireland also keeps the <strong>tapeworm (Echinococcus) treatment rule</strong>: " +
      "a dog entering Ireland must be treated against tapeworm by a vet within a " +
      "set window before arrival (commonly 24 to 120 hours).</p>" },
    { h: "The Thai side and your timeline", html: THAI_SIDE }
  ],
  faqs: [
    ["Does my dog need tapeworm treatment to enter Ireland?",
     "<p>Yes &mdash; Ireland requires a vet-administered tapeworm treatment for dogs within a set window before arrival. Confirm the current window with the Department of Agriculture, Food and the Marine.</p>"],
    ["Is there a route to avoid the three-month wait?",
     "<p>Only a valid pre-existing rabies titer test avoids it. If the test still has to be done from Thailand, the three-month wait applies.</p>"]
  ]
}));

/* ---------------- SWITZERLAND ---------------- */
pages.push(exp({
  slug: "to-switzerland", crumb: "To Switzerland",
  title: "Export a Pet from Thailand to Switzerland (DLD 2026) | PattayaPets",
  desc: "Bringing a dog or cat from Thailand to Switzerland: the rabies titer test, " +
    "the waiting period and the entry paperwork.",
  h1: "Taking a pet from Thailand to Switzerland",
  lede: "Switzerland is not in the EU, but it applies closely aligned rules for a " +
    "pet arriving from Thailand.",
  sections: [
    { h: "Entering Switzerland", html:
      "<p>Switzerland applies EU-aligned rules for pets arriving from outside the " +
      "low-risk list. In practice that means an ISO microchip, a current rabies " +
      "vaccination, a <a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">" +
      "rabies titer test</a> from an approved laboratory, and a waiting period " +
      "before entry, with the appropriate entry paperwork. The Federal Food Safety " +
      "and Veterinary Office (FSVO) oversees the process.</p>" },
    { h: "The Thai side and your timeline", html: THAI_SIDE }
  ],
  faqs: [
    ["Does Switzerland being outside the EU make this easier?",
     "<p>Not really &mdash; Switzerland runs EU-aligned pet rules, so a titer test and waiting period still apply for a pet from Thailand. Confirm the current detail with the FSVO.</p>"],
    ["What is the single most important step?",
     "<p>The rabies titer test, done as early as possible. Its waiting period is what makes the timeline long, so it is the thing to get moving first.</p>"]
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
  title: "Export a Pet from Thailand to Russia (DLD 2026) | PattayaPets",
  desc: "Bringing a dog or cat from Thailand to Russia: the veterinary certificate, " +
    "rabies vaccination and the state veterinary process.",
  h1: "Taking a pet from Thailand to Russia",
  lede: "Pattaya has a large Russian community, and the route home is, by " +
    "international standards, relatively straightforward.",
  sections: [
    { h: "Entering Russia", html:
      "<p>Russia&rsquo;s requirements centre on a <strong>veterinary certificate</strong> " +
      "and a <strong>current rabies vaccination</strong>, with the pet microchipped " +
      "for identification. Russia does not generally require a rabies titer test " +
      "for entry from most countries. The certificate is handled through the state " +
      "veterinary service, and the exact form is usually finalised close to " +
      "travel.</p>" },
    { h: "The Thai side and onward travel", html:
      THAI_SIDE +
      "<p>If there is any chance of later moving your pet on to the EU, UK or " +
      "similar, a <a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">" +
      "rabies titer test</a> done early keeps that option open without a long " +
      "wait.</p>" }
  ],
  faqs: [
    ["Does Russia require a rabies titer test for a pet from Thailand?",
     "<p>Generally no &mdash; Russia's requirements centre on a veterinary certificate and a current rabies vaccination. Confirm the current process with the state veterinary service and your vet.</p>"],
    ["When is the Russian certificate issued?",
     "<p>Usually close to the travel date, through the state veterinary service. Your vet can advise on the timing and the steps; start early so nothing is rushed.</p>"]
  ]
}));

/* ---------------- NEW ZEALAND ---------------- */
pages.push(exp({
  slug: "to-new-zealand", crumb: "To New Zealand",
  title: "Export a Pet from Thailand to New Zealand (DLD 2026) | PattayaPets",
  desc: "Why moving a pet from Thailand to New Zealand is a long, demanding route, " +
    "and why you must research it with MPI before you commit.",
  h1: "Taking a pet from Thailand to New Zealand",
  lede: "Be honest with yourself early: New Zealand has some of the strictest pet " +
    "biosecurity rules anywhere, and Thailand is not a straightforward origin.",
  sections: [
    { h: "Why this route is hard", html:
      "<p>New Zealand protects its rabies-free status with strict import rules, " +
      "and a pet coming from Thailand &mdash; which is not rabies-free &mdash; " +
      "faces a long, multi-stage process. In practice that can mean the pet first " +
      "spending a qualifying period in an approved country, rabies titer testing, " +
      "a sequence of timed steps, an import permit, and a <strong>mandatory stay " +
      "in a quarantine facility</strong> on arrival in New Zealand. The " +
      "<a href=\"https://www.mpi.govt.nz/import/bringing-pets-to-nz/\" target=\"_blank\" " +
      "rel=\"noopener nofollow\">Ministry for Primary Industries (MPI)</a> sets and " +
      "enforces the rules.</p>" },
    { h: "What it really takes", html:
      "<p>This is not a process to improvise or to start late. Plan on many " +
      "months, begin with MPI&rsquo;s current import requirements, and engage a " +
      "specialist <a href=\"/pet-relocation/\">pet relocation agent</a> " +
      "experienced in the route as early as you can. " + THAI_SIDE + "</p>" }
  ],
  faqs: [
    ["Can I fly my pet directly from Thailand to New Zealand?",
     "<p>Generally not in a simple way. Because of New Zealand's strict rules, the route often requires a qualifying period in an approved country first, then entry to New Zealand with quarantine. Confirm the current pathway with MPI.</p>"],
    ["How early should I start planning?",
     "<p>As early as possible &mdash; many months of lead time. The sooner you involve MPI and a specialist agent, the fewer nasty surprises in the timeline.</p>"]
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
  desc: "Bringing a dog or cat from Thailand to India: AQCS import requirements, " +
    "the Thai DLD export steps, and what to plan before you leave Pattaya.",
  h1: "Taking a pet from Thailand to India",
  lede: "India treats most foreign origins as requiring formal import clearance " +
    "through AQCS. The Thai export side is standard; the Indian import permit and " +
    "endorsement set your timeline.",
  sections: [
    { h: "Entering India from Thailand", html:
      "<p>Pet import into India is handled through the <strong>Animal Quarantine and " +
      "Certification Services (AQCS)</strong>, under the Department of Animal Husbandry " +
      "and Dairying. Typically you need advance import clearance, an ISO microchip, a " +
      "valid rabies vaccination, a veterinary health certificate from Thailand and " +
      "compliance with any AQCS conditions for your arrival airport and state. " +
      "Procedures vary by city &mdash; confirm the current detail with AQCS and an " +
      "experienced import vet before you book.</p>" },
    { h: "The Thai side and routing", html:
      THAI_SIDE +
      "<p>Direct Bangkok&ndash;India flights exist but many routes stop in the Gulf or " +
      "elsewhere, which affects airline pet policies and journey time. See " +
      "<a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">airline pet policies</a> " +
      "early.</p>" +
      "<p>If you came from India originally, see our guide to " +
      "<a href=\"/bring-pet-to-thailand/from-india.html\">bringing a pet from India</a>.</p>" }
  ],
  faqs: [
    ["Does India require a rabies titer test for a pet from Thailand?",
     "<p>India's rules depend on the country of export and current AQCS policy. Thailand is not treated as rabies-free. Confirm the current requirements with AQCS and your vet rather than assuming.</p>"],
    ["Which authority handles pet import into India?",
     "<p>AQCS (Animal Quarantine and Certification Services) oversees import clearance for live animals. Your import vet and the AQCS office for your arrival airport will guide the current process.</p>"]
  ]
}));

/* ---------------- PHILIPPINES ---------------- */
pages.push(exp({
  slug: "to-philippines", crumb: "To the Philippines",
  title: "Export a Pet from Thailand to the Philippines (DLD 2026) | PattayaPets",
  desc: "Bringing a dog or cat from Thailand to the Philippines: BAI import " +
    "paperwork, the Thai DLD export steps, and direct flights to Manila.",
  h1: "Taking a pet from Thailand to the Philippines",
  lede: "Manila is a common destination for Pattaya expats returning home. The " +
    "Philippine side runs through the Bureau of Animal Industry (BAI); the Thai " +
    "export process still has to be completed first.",
  sections: [
    { h: "Entering the Philippines from Thailand", html:
      "<p>The <strong>Bureau of Animal Industry (BAI)</strong> oversees pet import. " +
      "Typically you need an import permit or Sanitary and Phytosanitary Import " +
      "Clearance, an ISO microchip, a valid rabies vaccination, a veterinary health " +
      "certificate endorsed for export from Thailand and compliance with BAI's " +
      "current entry rules. Confirm every requirement with BAI and a BAI-accredited " +
      "import veterinarian before you fix a travel date.</p>" },
    { h: "The Thai side", html:
      THAI_SIDE +
      "<p>Flights from Bangkok to Manila are relatively straightforward compared with " +
      "long-haul routes. Still confirm cabin, checked-baggage and cargo options with " +
      "your airline.</p>" +
      "<p>If you came from the Philippines originally, see " +
      "<a href=\"/bring-pet-to-thailand/from-philippines.html\">bringing a pet from the Philippines</a>.</p>" }
  ],
  faqs: [
    ["Does the Philippines require a rabies titer test from Thailand?",
     "<p>BAI's current rules should be confirmed directly. Thailand is not treated as rabies-free. Your BAI-accredited vet will guide whether additional tests apply.</p>"],
    ["Who issues the Philippine import permit?",
     "<p>The Bureau of Animal Industry (BAI) oversees import certification. Apply through BAI's current process with plenty of lead time before travel.</p>"]
  ]
}));

/* ---------------- CHINA ---------------- */
pages.push(exp({
  slug: "to-china", crumb: "To China",
  title: "Export a Pet from Thailand to China (DLD 2026) | PattayaPets",
  desc: "Bringing a dog or cat from Thailand to China: customs import clearance, " +
    "quarantine rules, and the Thai DLD export steps.",
  h1: "Taking a pet from Thailand to China",
  lede: "China's pet import process is formal and city-specific. The Thai export " +
    "side is manageable; the Chinese import permit, quarantine and customs steps " +
    "need early planning with an experienced agent or vet.",
  sections: [
    { h: "Entering China from Thailand", html:
      "<p>Pet import into China is handled through <strong>customs and animal " +
      "quarantine authorities</strong> at the port of entry. Typically you need advance " +
      "import approval, an ISO microchip, a valid rabies vaccination, a veterinary " +
      "health certificate from Thailand and compliance with quarantine inspection on " +
      "arrival. Rules differ by city and airport &mdash; confirm the current process " +
      "for your destination with Chinese customs, the quarantine bureau and an " +
      "experienced import specialist before you book.</p>" },
    { h: "The Thai side and re-entry planning", html:
      THAI_SIDE +
      "<p>If you might return to Thailand later, keep vaccination records and " +
      "microchip details current. If you came from China originally, see " +
      "<a href=\"/bring-pet-to-thailand/from-china.html\">bringing a pet from China</a>.</p>" }
  ],
  faqs: [
    ["Is pet import into China complicated?",
     "<p>It is formal rather than casual. Import approval, health certification and quarantine inspection all apply, and procedures vary by city. An experienced agent or import vet makes the difference.</p>"],
    ["Which Chinese authority handles pet import?",
     "<p>Customs and the local animal quarantine inspection service at your port of entry. Confirm the current process for your destination city and airport before you travel.</p>"]
  ]
}));

/* ---------------- SOUTH AFRICA ---------------- */
pages.push(exp({
  slug: "to-south-africa", crumb: "To South Africa",
  title: "Export a Pet from Thailand to South Africa (DLD 2026) | PattayaPets",
  desc: "Bringing a dog or cat from Thailand to South Africa: DALRRD import " +
    "requirements, flight routing, and the Thai DLD export steps.",
  h1: "Taking a pet from Thailand to South Africa",
  lede: "South Africa classifies origin countries carefully for rabies control. " +
    "The Thai export process is standard; the South African veterinary import " +
    "permit and any additional tests set your timeline.",
  sections: [
    { h: "Entering South Africa from Thailand", html:
      "<p>Pet import is overseen by the <strong>Department of Agriculture, Land Reform " +
      "and Rural Development (DALRRD)</strong>. Typically you need a veterinary import " +
      "permit, an ISO microchip, a valid rabies vaccination, a health certificate " +
      "from Thailand and compliance with any additional requirements for pets arriving " +
      "from Thailand's rabies status. Confirm the current detail with DALRRD and an " +
      "experienced import veterinarian with plenty of lead time.</p>" },
    { h: "The Thai side and routing", html:
      THAI_SIDE +
      "<p>Most routes from Bangkok to South Africa involve at least one stop, which " +
      "affects airline pet policies and total journey time. Plan crate comfort and " +
      "layover rules with your agent or airline.</p>" +
      "<p>If you came from South Africa originally, see " +
      "<a href=\"/bring-pet-to-thailand/from-south-africa.html\">bringing a pet from South Africa</a>.</p>" }
  ],
  faqs: [
    ["Does South Africa require a rabies titer test from Thailand?",
     "<p>South Africa's rules depend on how Thailand is classified and the current DALRRD policy. Confirm with DALRRD and your import vet rather than assuming.</p>"],
    ["Who issues the South African import permit?",
     "<p>DALRRD oversees veterinary import permits for live animals. Apply through the official process with plenty of lead time before your travel date.</p>"]
  ]
}));

module.exports = pages;
