"use strict";
/* More destination guides for the "Taking a pet out of Thailand" cluster.
   Full parity with the import cluster's country pages. */

const { article } = require("../guidekit.js");
const { exportCountryRelated } = require("../data/country-pairs.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const CLUSTER = { name: "Taking a pet out of Thailand", path: "/take-pet-out-of-thailand/" };
const SUB = [GUIDES, CLUSTER];

const VERIFY =
  "This guide was last reviewed in May 2026. Export rules &mdash; Thai DLD " +
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
  "<a href=\"https://www.nparks.gov.sg/avs/pets/importing-exporting-and-transhipping-animals-and-birds/importing-dogs-and-cats\" " +
  "target=\"_blank\" rel=\"noopener nofollow\">Singapore AVS</a>; " +
  "<a href=\"https://www.moec.gov.ae/en/services/import-export-services/import-pets\" " +
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
  "certificate completes the paperwork.</p>";

const THAI_SIDE =
  "<p>All of this sits on top of the Thai " +
  "<a href=\"/take-pet-out-of-thailand/export-process.html\">export process</a> " +
  "&mdash; the DLD health certificate and export permit &mdash; which your pet must " +
  "clear on the way out. The two sets of paperwork have to agree.</p>";

function exp(o) {
  var sections = (o.sections || []).slice();
  sections.push({ h: "Official sources", html: OFFICIAL });
  return article({
    path: "/take-pet-out-of-thailand/" + o.slug + ".html",
    title: o.title, desc: o.desc, crumb: o.crumb, breadcrumbs: SUB,
    eyebrow: "Taking a pet out of Thailand &middot; By destination",
    h1: o.h1, lede: o.lede, verify: VERIFY,
    sections: sections, faqs: o.faqs, related: o.related || expRelated(o.slug)
  });
}

const pages = [];

/* ---------------- GERMANY ---------------- */
pages.push(exp({
  slug: "to-germany", crumb: "To Germany",
  title: "Taking a pet from Thailand to Germany | PattayaPets",
  desc: "Bringing a dog or cat from Thailand to Germany: the rabies titer test, the " +
    "three-month wait and the EU entry health certificate.",
  h1: "Taking a pet from Thailand to Germany",
  lede: "Germany follows the standard EU rules for a pet arriving from Thailand, so " +
    "the rabies titer test and its waiting period set your timeline.",
  sections: [
    { h: "Entering Germany", html:
      EU_ENTRY +
      "<p>The entry health certificate is checked on arrival, and the German " +
      "regional veterinary authorities oversee the process at the German end. " +
      "Direct Bangkok-Frankfurt and Bangkok-Munich routes keep the journey " +
      "shorter, which is easier on the pet.</p>" },
    { h: "The Thai side and your timeline", html: THAI_SIDE }
  ],
  faqs: [
    ["Can my pet skip the three-month wait into Germany?",
     "<p>Only if a valid rabies titer test is already in place and the rabies vaccination has been kept current. That is why owners are urged to do the titer test before they ever leave for Thailand.</p>"],
    ["Is the EU pet passport enough to enter Germany from Thailand?",
     "<p>No. Coming from Thailand, a non-listed country, your pet needs an EU third-country entry health certificate, not just the pet passport. Confirm the current rules with the German authorities.</p>"]
  ]
}));

/* ---------------- SWEDEN ---------------- */
pages.push(exp({
  slug: "to-sweden", crumb: "To Sweden",
  title: "Taking a pet from Thailand to Sweden | PattayaPets",
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
  title: "Taking a pet from Thailand to Norway | PattayaPets",
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
  title: "Taking a pet from Thailand to Denmark | PattayaPets",
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
  title: "Taking a pet from Thailand to Finland | PattayaPets",
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
  title: "Taking a pet from Thailand to the Netherlands | PattayaPets",
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
  title: "Taking a pet from Thailand to France | PattayaPets",
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
  title: "Taking a pet from Thailand to Ireland | PattayaPets",
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
  title: "Taking a pet from Thailand to Switzerland | PattayaPets",
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
  title: "Taking a pet from Thailand to Canada | PattayaPets",
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
  title: "Taking a pet from Thailand to Russia | PattayaPets",
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
  title: "Taking a pet from Thailand to New Zealand | PattayaPets",
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
  title: "Taking a pet from Thailand to Japan | PattayaPets",
  desc: "Bringing a dog or cat from Thailand to Japan: MAFF import approval, microchip, " +
    "rabies titer test and the 180-day wait from the sample date.",
  h1: "Taking a pet from Thailand to Japan",
  lede: "Japan has one of the strictest pet-import systems anywhere. From Thailand, " +
    "plan on months of lead time and confirm every step with MAFF before you book.",
  sections: [
    { h: "Entering Japan from Thailand", html:
      "<p>Japan&rsquo;s Ministry of Agriculture, Forestry and Fisheries (MAFF) treats " +
      "Thailand as a designated region requiring advance preparation. The core steps " +
      "include an ISO microchip, rabies vaccinations on the approved schedule, a " +
      "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">rabies " +
      "titer test</a> from an MAFF-approved laboratory, advance notification to the " +
      "Animal Quarantine Service, and a <strong>180-day wait</strong> from the blood " +
      "sample date before the pet may enter. An import approval document from " +
      "<a href=\"https://www.maff.go.jp/aqs/english/\" target=\"_blank\" " +
      "rel=\"noopener nofollow\">MAFF</a> completes the paperwork.</p>" },
    { h: "The Thai side", html:
      THAI_SIDE +
      "<p>Because the Japan timeline is long, start the titer test and MAFF " +
      "notification as early as you can. A specialist " +
      "<a href=\"/pet-relocation/\">pet relocation agent</a> experienced in the " +
      "Japan route is worth considering.</p>" }
  ],
  faqs: [
    ["How long does it take to bring a pet from Thailand to Japan?",
     "<p>Often six months or more from starting the rabies titer test, because of the 180-day wait from the sample date plus the Thai export steps. Confirm the current MAFF timeline before you commit.</p>"],
    ["Does Japan require a rabies titer test from Thailand?",
     "<p>Yes. Japan requires a rabies titer test from an approved laboratory and a waiting period from the sample date. This is not a route to start late.</p>"]
  ]
}));

/* ---------------- SINGAPORE ---------------- */
pages.push(exp({
  slug: "to-singapore", crumb: "To Singapore",
  title: "Taking a pet from Thailand to Singapore | PattayaPets",
  desc: "Bringing a dog or cat from Thailand to Singapore: AVS import licence, rabies " +
    "titer test and Singapore's post-arrival rules.",
  h1: "Taking a pet from Thailand to Singapore",
  lede: "Singapore is rabies-free and protects that status strictly. A pet from " +
    "Thailand can enter, but the paperwork and timeline need careful planning.",
  sections: [
    { h: "Entering Singapore from Thailand", html:
      "<p>Singapore&rsquo;s Animal &amp; Veterinary Service (AVS) requires an " +
      "<strong>import licence</strong>, an ISO microchip, a valid rabies vaccination " +
      "and a <a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">" +
      "rabies titer test</a> from an approved laboratory, with timing rules between " +
      "vaccination, sampling and travel. Dogs and cats may face additional parasite " +
      "treatments and post-arrival home isolation or quarantine depending on the " +
      "current AVS schedule. Confirm every detail with " +
      "<a href=\"https://www.nparks.gov.sg/avs/pets/importing-exporting-and-transhipping-animals-and-birds/importing-dogs-and-cats\" " +
      "target=\"_blank\" rel=\"noopener nofollow\">AVS</a> before booking.</p>" },
    { h: "The Thai side", html:
      THAI_SIDE +
      "<p>Start the titer test early &mdash; Singapore&rsquo;s timing rules sit on top " +
      "of the Thai export process, and both have to align for your travel date.</p>" }
  ],
  faqs: [
    ["Does Singapore require a rabies titer test from Thailand?",
     "<p>Yes. AVS requires a rabies titer test from an approved laboratory for pets arriving from Thailand, along with an import licence and other health requirements. Confirm the current rules with AVS.</p>"],
    ["Is there quarantine in Singapore?",
     "<p>Post-arrival rules depend on AVS's current schedule and whether all pre-arrival steps were completed correctly. Confirm with AVS rather than assuming.</p>"]
  ]
}));

/* ---------------- UAE ---------------- */
pages.push(exp({
  slug: "to-uae", crumb: "To the UAE",
  title: "Taking a pet from Thailand to the UAE | PattayaPets",
  desc: "Bringing a dog or cat from Thailand to the UAE: MOCCAE import permit, microchip, " +
    "vaccinations and the Thai DLD export steps.",
  h1: "Taking a pet from Thailand to the UAE",
  lede: "The UAE route is a common one for Pattaya expats. The import permit and " +
    "vaccination rules are manageable if you start in good time and confirm the " +
    "current detail with MOCCAE.",
  sections: [
    { h: "Entering the UAE from Thailand", html:
      "<p>The UAE Ministry of Climate Change and Environment (MOCCAE) requires an " +
      "<strong>import permit</strong>, an ISO microchip, a valid rabies vaccination " +
      "(and usually other core vaccinations), an official veterinary health " +
      "certificate and compliance with any breed restrictions in the emirate you are " +
      "entering. Some emirates and airlines add their own rules &mdash; confirm with " +
      "<a href=\"https://www.moec.gov.ae/en/services/import-export-services/import-pets\" " +
      "target=\"_blank\" rel=\"noopener nofollow\">MOCCAE</a>, your airline and the " +
      "destination emirate before booking.</p>" },
    { h: "The Thai side", html:
      THAI_SIDE +
      "<p>The UAE does not generally require a rabies titer test for entry from " +
      "Thailand, but if you might move your pet on to the EU, UK or similar later, " +
      "having the <a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">" +
      "titer test</a> done early keeps that option open.</p>" }
  ],
  faqs: [
    ["Does the UAE require a rabies titer test from Thailand?",
     "<p>Generally no for UAE entry itself, though MOCCAE's rules can change. Confirm the current requirements with MOCCAE. Consider a titer test anyway if you might travel onward to stricter destinations.</p>"],
    ["Which UAE emirate am I importing into?",
     "<p>The import permit is federal, but some emirates and airlines add their own conditions. Confirm with MOCCAE and your airline for the emirate and airport you will use.</p>"]
  ],
  related: [
    { name: "Export to the EU", path: "/take-pet-out-of-thailand/to-eu.html", desc: "Stricter rules if you move on from the UAE." },
    { name: "The export process", path: "/take-pet-out-of-thailand/export-process.html", desc: "The Thai DLD side of leaving." },
    { name: "Rabies titer test", path: "/bring-pet-to-thailand/rabies-vaccination-titer-test.html", desc: "Worth doing early if you may leave Thailand again." },
    { name: "Pet relocation agents", path: "/pet-relocation/", desc: "Specialists who manage export." }
  ]
}));

module.exports = pages;
