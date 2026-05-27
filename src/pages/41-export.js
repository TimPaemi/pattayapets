"use strict";
/* Cluster: Taking your pet out of Thailand */

const { article, hub } = require("../guidekit.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const CLUSTER = { name: "Taking a pet out of Thailand", path: "/take-pet-out-of-thailand/" };
const SUB = [GUIDES, CLUSTER];

const VERIFY =
  "This guide was last reviewed in May 2026. Export rules &mdash; Thai DLD " +
  "procedures, destination-country requirements, airline policies and CDC/APHA " +
  "rules &mdash; change without notice. Use this as orientation, then confirm " +
  "every current requirement with the DLD and the destination country&rsquo;s " +
  "authority before booking.";

const pages = [];

pages.push(hub({
  path: "/take-pet-out-of-thailand/",
  title: "Taking your pet out of Thailand | PattayaPets",
  desc: "How to export a dog or cat from Thailand: the DLD export process, plus " +
    "destination notes for the UK, USA, EU and Australia.",
  crumb: "Taking a pet out of Thailand",
  breadcrumbs: [GUIDES],
  eyebrow: "Guide",
  h1: "Taking your pet out of Thailand",
  lede: "Leaving Thailand with your pet is the import process in reverse &mdash; " +
    "plus whatever the destination country demands. And destinations vary " +
    "enormously.",
  intro:
    "<p>There are two halves to this. The <strong>Thai side</strong> is " +
    "relatively consistent: the Department of Livestock Development (DLD) " +
    "requires an export health certificate and an export permit. The " +
    "<strong>destination side</strong> is where it gets serious &mdash; the UK, " +
    "EU and Australia all require a rabies titer test with a waiting period of " +
    "<strong>three months or more</strong>, and the USA has its own CDC rules " +
    "for dogs.</p>" +
    "<p>The single biggest mistake is starting late. If you might leave Thailand " +
    "with your pet, get the <a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">" +
    "rabies titer test</a> done early &mdash; ideally you already did it before " +
    "arriving.</p>" +
    '<div class="callout callout-tip"><div class="ch">Rules change — verify before you act</div>' +
    "<p>" + VERIFY + "</p></div>",
  groups: [
    {
      title: "The process",
      cards: [
        { tag: "Start here", name: "The export process", desc: "The Thai DLD side: health certificate, export permit and timing.", path: "/take-pet-out-of-thailand/export-process.html" }
      ]
    },
    {
      title: "By destination",
      note: "Where you are heading changes everything — these are the common ones.",
      cards: [
        { name: "To the UK", desc: "Titer test, the three-month wait, and tapeworm treatment.", path: "/take-pet-out-of-thailand/to-uk.html" },
        { name: "To the USA", desc: "The CDC dog-import rules and the rabies titer test.", path: "/take-pet-out-of-thailand/to-usa.html" },
        { name: "To the EU", desc: "Titer test, the three-month wait and the EU certificate.", path: "/take-pet-out-of-thailand/to-eu.html" },
        { name: "To Japan", desc: "MAFF import approval, microchip and the 180-day wait from the titer sample.", path: "/take-pet-out-of-thailand/to-japan.html" },
        { name: "To Singapore", desc: "AVS licence, rabies titer test and the import permit.", path: "/take-pet-out-of-thailand/to-singapore.html" },
        { name: "To the UAE", desc: "MOCCAE import permit, microchip and vaccination requirements.", path: "/take-pet-out-of-thailand/to-uae.html" },
        { name: "To Australia", desc: "The hardest route — why it takes six months or more.", path: "/take-pet-out-of-thailand/to-australia.html" },
        { name: "To Germany", desc: "The EU titer test, the three-month wait and the entry certificate.", path: "/take-pet-out-of-thailand/to-germany.html" },
        { name: "To Sweden", desc: "Standard EU entry rules for a pet arriving from Thailand.", path: "/take-pet-out-of-thailand/to-sweden.html" },
        { name: "To Norway", desc: "EU-style entry, plus the tapeworm rule for dogs.", path: "/take-pet-out-of-thailand/to-norway.html" },
        { name: "To Denmark", desc: "Standard EU entry rules and the Danish authority.", path: "/take-pet-out-of-thailand/to-denmark.html" },
        { name: "To Finland", desc: "EU entry, plus the tapeworm treatment for dogs.", path: "/take-pet-out-of-thailand/to-finland.html" },
        { name: "To the Netherlands", desc: "EU entry, with direct routes into Amsterdam.", path: "/take-pet-out-of-thailand/to-netherlands.html" },
        { name: "To France", desc: "EU entry rules, with Paris a common arrival point.", path: "/take-pet-out-of-thailand/to-france.html" },
        { name: "To Ireland", desc: "EU entry, plus the tapeworm treatment for dogs.", path: "/take-pet-out-of-thailand/to-ireland.html" },
        { name: "To Switzerland", desc: "EU-aligned rules: titer test and a waiting period.", path: "/take-pet-out-of-thailand/to-switzerland.html" },
        { name: "To Canada", desc: "One of the simpler routes — no titer test or quarantine.", path: "/take-pet-out-of-thailand/to-canada.html" },
        { name: "To Russia", desc: "A relatively straightforward route for a large community.", path: "/take-pet-out-of-thailand/to-russia.html" },
        { name: "To New Zealand", desc: "A long, strict route that needs early planning with MPI.", path: "/take-pet-out-of-thailand/to-new-zealand.html" }
      ]
    }
  ]
}));

function exp(o) {
  return article({
    path: "/take-pet-out-of-thailand/" + o.slug + ".html",
    title: o.title, desc: o.desc, crumb: o.crumb, breadcrumbs: SUB,
    eyebrow: "Taking a pet out of Thailand",
    h1: o.h1, lede: o.lede, verify: VERIFY,
    sections: o.sections, faqs: o.faqs,
    related: o.related || [
      { name: "The export process", path: "/take-pet-out-of-thailand/export-process.html", desc: "The Thai DLD side of leaving." },
      { name: "Rabies titer test", path: "/bring-pet-to-thailand/rabies-vaccination-titer-test.html", desc: "Why timing it early matters so much." },
      { name: "Pet relocation agents", path: "/pet-relocation/", desc: "Specialists who manage export." }
    ]
  });
}

pages.push(exp({
  slug: "export-process", crumb: "The export process",
  title: "Exporting a pet from Thailand | PattayaPets",
  desc: "The Thai side of taking a pet abroad: microchip, rabies, the DLD export " +
    "health certificate and export permit, and the airport on the way out.",
  h1: "The export process from Thailand",
  lede: "Before any destination-country rule applies, your pet has to clear the " +
    "Thai export process. Here is that half.",
  sections: [
    { h: "What Thailand requires to export a pet", html:
      "<p>The Department of Livestock Development oversees pet export. The core " +
      "of the Thai side is:</p>" +
      "<ul><li>a working <strong>ISO microchip</strong>;</li>" +
      "<li>a current <strong>rabies vaccination</strong> and other vaccinations;</li>" +
      "<li>a <strong>veterinary health certificate</strong> confirming your pet " +
      "is fit to travel;</li>" +
      "<li>an <strong>export permit</strong>, with the documents endorsed by the " +
      "DLD.</li></ul>" +
      "<p>This is usually arranged in the days just before travel, often at the " +
      "DLD office at the departure airport.</p>" },
    { h: "Where the destination country comes in", html:
      "<p>The Thai paperwork only gets your pet <em>out</em>. Getting it " +
      "<em>in</em> at the other end is governed entirely by the destination " +
      "country, and that is usually the harder, longer part &mdash; especially " +
      "the rabies titer test and its waiting period. Read the destination page " +
      "for where you are going, and work backwards from your travel date.</p>" },
    { h: "Leaving from the airport", html:
      "<p>Most pets depart from Suvarnabhumi (BKK). The DLD has an office at the " +
      "airport for final endorsement, and your pet is checked before it flies. " +
      "Many owners use a <a href=\"/pet-relocation/\">pet relocation agent</a> " +
      "for export precisely because the airport steps and the destination " +
      "paperwork have to line up perfectly.</p>" }
  ],
  faqs: [
    ["How far ahead should I start the export process?",
     "<p>The Thai side is fairly quick, but the destination side is not — a titer test plus a three-month wait means several months of lead time for the UK, EU or Australia. Start as early as you can; the titer test is the long pole.</p>"],
    ["Do I need an agent to export a pet?",
     "<p>No, but many owners use one. The value of an agent is in lining up the Thai endorsement, the destination requirements and the flight so nothing slips. For complex destinations it is often worth it.</p>"]
  ]
}));

pages.push(exp({
  slug: "to-uk", crumb: "To the UK",
  title: "Taking a pet from Thailand to the UK | PattayaPets",
  desc: "Bringing a pet from Thailand to the UK: the rabies titer test, the " +
    "three-month wait, tapeworm treatment for dogs and approved routes.",
  h1: "Taking a pet from Thailand to the UK",
  lede: "The UK treats Thailand as an &lsquo;unlisted&rsquo; country, which makes " +
    "the rabies titer test and its waiting period the centre of your timeline.",
  sections: [
    { h: "The rabies titer test and the three-month wait", html:
      "<p>To enter the UK from Thailand your pet needs a current rabies " +
      "vaccination and a <strong>rabies titer (blood) test</strong> taken at " +
      "least 30 days after vaccination. Then comes the part that catches people " +
      "out: you must <strong>wait three months from the date of the blood " +
      "sample</strong> before the pet can travel to the UK.</p>" +
      "<p>If you did the titer test before you ever left for Thailand and it has " +
      "stayed valid, you may avoid that wait. If not, build three months into " +
      "your plan.</p>" },
    { h: "Tapeworm and other requirements", html:
      "<p>Dogs additionally need a tapeworm treatment administered by a vet " +
      "within a set window (commonly 24&ndash;120 hours) before arrival in the " +
      "UK. Your pet also needs the microchip and the correct UK entry " +
      "documentation, and must travel on an approved route and carrier into the " +
      "UK.</p>" },
    { h: "Plan the route", html:
      "<p>The UK only permits pets to enter via approved transport routes and " +
      "carriers. Confirm the current rules with the UK government and choose an " +
      "airline and route that satisfies them &mdash; a relocation agent is " +
      "genuinely useful here.</p>" }
  ],
  faqs: [
    ["How long does it take to move a pet from Thailand to the UK?",
     "<p>Plan for several months if the titer test still has to be done — the three-month wait after the blood sample is unavoidable. If a valid titer test is already in place, it can be considerably faster.</p>"],
    ["Does my dog need a tapeworm treatment?",
     "<p>Yes — dogs entering the UK need a vet-administered tapeworm treatment within a set time window before arrival. Confirm the current window with the UK authorities.</p>"]
  ]
}));

pages.push(exp({
  slug: "to-usa", crumb: "To the USA",
  title: "Taking a pet from Thailand to the USA | PattayaPets",
  desc: "Bringing a pet from Thailand to the United States: the CDC dog-import " +
    "rules, the rabies titer test, and what the process involves.",
  h1: "Taking a pet from Thailand to the USA",
  lede: "The US Centers for Disease Control treats Thailand as a " +
    "high-rabies-risk country, and that shapes everything for dogs.",
  sections: [
    { h: "The CDC rules for dogs", html:
      "<p>The CDC tightened its requirements for dogs entering the United " +
      "States. Dogs arriving from a high-rabies-risk country &mdash; which " +
      "includes Thailand &mdash; face additional steps, which can include a " +
      "microchip, a minimum age, a <strong>rabies titer test</strong> from an " +
      "approved laboratory, CDC import paperwork submitted in advance, and " +
      "arrival through specific airports. The exact requirements depend on your " +
      "dog&rsquo;s vaccination history and where it was vaccinated.</p>" +
      "<p>Because these rules are detailed and have changed recently, check the " +
      "current CDC requirements directly and well ahead of travel.</p>" },
    { h: "Cats", html:
      "<p>Cats face lighter US requirements than dogs, but still need to be " +
      "healthy on arrival and meet the rules in force. Confirm the current cat " +
      "requirements with the CDC and USDA.</p>" },
    { h: "The Thai side", html:
      "<p>Alongside the US rules, your pet still needs to clear the Thai " +
      "<a href=\"/take-pet-out-of-thailand/export-process.html\">export " +
      "process</a> &mdash; health certificate and DLD export permit. The two " +
      "sets of paperwork must be consistent.</p>" }
  ],
  faqs: [
    ["Does my dog need a rabies titer test to enter the USA from Thailand?",
     "<p>Because Thailand is treated as a high-rabies-risk country, a rabies titer test from an approved lab is commonly part of the CDC requirements for dogs. Verify the current rules for your dog's specific situation with the CDC.</p>"],
    ["Where do I check the current US rules?",
     "<p>The CDC governs the disease-control side of dog and cat import, and the USDA the animal-health side. Check both, directly, before you book — these rules changed recently.</p>"]
  ]
}));

pages.push(exp({
  slug: "to-eu", crumb: "To the EU",
  title: "Taking a pet from Thailand to the EU | PattayaPets",
  desc: "Bringing a pet from Thailand to the European Union: the rabies titer " +
    "test, the three-month wait and the EU entry health certificate.",
  h1: "Taking a pet from Thailand to the EU",
  lede: "For the EU, Thailand is a non-listed third country &mdash; so the rabies " +
    "titer test and its three-month wait drive your timeline.",
  sections: [
    { h: "The titer test and the wait", html:
      "<p>To bring a pet into the EU from Thailand, your pet needs a current " +
      "rabies vaccination and a <strong>rabies titer test</strong> showing an " +
      "adequate antibody level, with the blood sample taken at least 30 days " +
      "after vaccination. You then wait <strong>three months from the blood " +
      "sample date</strong> before the pet may enter the EU.</p>" +
      "<p>As everywhere, doing the titer test early &mdash; before leaving, if " +
      "possible &mdash; is what saves you that wait.</p>" },
    { h: "The EU entry health certificate", html:
      "<p>Your pet needs an EU animal health certificate completed for entry " +
      "from a third country and endorsed by the Thai authorities. The microchip, " +
      "vaccination dates and titer result must all line up on it. Rules can " +
      "differ slightly by the EU country you enter through &mdash; confirm with " +
      "that country&rsquo;s authority.</p>" }
  ],
  faqs: [
    ["Is the three-month wait avoidable?",
     "<p>Only if a valid rabies titer test is already in place and has remained valid (with the rabies vaccination kept current). That is why owners are advised to do the test before leaving for Thailand.</p>"],
    ["Does the EU pet passport work for this?",
     "<p>The EU pet passport is for movement within the EU and for pets resident there. Coming from Thailand you need a third-country entry health certificate; check the rules for your specific EU entry country.</p>"]
  ]
}));

pages.push(exp({
  slug: "to-australia", crumb: "To Australia",
  title: "Taking a pet from Thailand to Australia | PattayaPets",
  desc: "Why moving a pet from Thailand to Australia is the hardest route — " +
    "non-approved country status, long timelines and mandatory quarantine.",
  h1: "Taking a pet from Thailand to Australia",
  lede: "Be honest with yourself early: Australia has some of the strictest pet " +
    "biosecurity rules in the world, and Thailand is not an approved country.",
  sections: [
    { h: "Why this route is so hard", html:
      "<p>Australia only allows pets to be imported from countries on its " +
      "approved list, and <strong>Thailand is not on that list</strong>. In " +
      "practice, taking a pet from Thailand to Australia means a long, " +
      "multi-stage process: your pet typically has to spend a qualifying period " +
      "in an approved country first, complete a rabies titer test and a series " +
      "of timed steps, obtain an Australian import permit, and then serve a " +
      "<strong>mandatory stay in a government quarantine facility</strong> on " +
      "arrival.</p>" },
    { h: "What it really takes", html:
      "<p>Owners commonly report <strong>six months or more</strong> of " +
      "preparation. This is not a process to improvise. Start with the " +
      "Australian Department of Agriculture, Fisheries and Forestry for the " +
      "current rules, and engage a specialist " +
      "<a href=\"/pet-relocation/\">pet relocation agent</a> experienced in the " +
      "Thailand-to-Australia route as early as you can.</p>" }
  ],
  faqs: [
    ["Can I fly my pet directly from Thailand to Australia?",
     "<p>Generally not. Because Thailand is not an approved country, the route normally requires a qualifying period in an approved country first, then entry to Australia with quarantine. Confirm the current pathway with the Australian authorities.</p>"],
    ["How early should I start?",
     "<p>As early as possible — six months of lead time or more is common. The earlier you involve the Australian department and a specialist agent, the smoother it goes.</p>"]
  ]
}));

module.exports = pages;
