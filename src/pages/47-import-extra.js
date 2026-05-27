"use strict";
/* Extra origin-country guides for the "Bringing a pet to Thailand" cluster. */

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

pages.push(country({
  slug: "from-canada", crumb: "From Canada",
  title: "Bringing a pet to Thailand from Canada | PattayaPets",
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
  title: "Bringing a pet to Thailand from Germany | PattayaPets",
  desc: "Bringing a dog or cat from Germany to Thailand: the EU export certificate, " +
    "the German competent authority, and what the EU pet passport does not cover.",
  h1: "Bringing a pet to Thailand from Germany",
  lede: "German owners travel with an EU pet passport at home, but it is not the " +
    "document Thailand needs, nor enough for the journey back.",
  sections: [
    { h: "The German side of the paperwork", html:
      "<p>" + STD_STEPS + "For travel out of the EU, your vet " +
      "completes an <strong>EU animal health / export certificate</strong>, endorsed by " +
      "the responsible German authority (the regional veterinary office, the " +
      "<em>Veterinaeramt</em>). The familiar EU pet passport governs travel within the " +
      "EU and is not, by itself, what Thailand requires.</p>" + EU_IMPORT_REF },
    { h: "Planning the return to Germany", html:
      "<p>To bring a pet back into the EU from Thailand &mdash; a non-EU country &mdash; " +
      "you will need a valid rabies vaccination and a " +
      "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">rabies titer " +
      "test</a>, with the blood sample taken at least 30 days after vaccination and a " +
      "three-month wait before entry. Doing the titer test before you leave Germany " +
      "avoids that wait later.</p>" }
  ],
  faqs: [
    ["Is my EU pet passport enough to bring my pet to Thailand?",
     "<p>No. The EU pet passport is for movement within the EU. For Thailand you need an EU export health certificate endorsed by the German authorities, plus the Thai import permit.</p>"],
    ["What does Germany need for the return journey?",
     "<p>A valid rabies vaccination and a rabies titer test, with a three-month wait after the blood sample. Confirm the current EU re-entry rules before you travel.</p>"]
  ]
}));

pages.push(country({
  slug: "from-russia", crumb: "From Russia",
  title: "Bringing a pet to Thailand from Russia | PattayaPets",
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
