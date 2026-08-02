"use strict";
/* Pet-insurance verification guide and species hubs. */

const { article, hub } = require("../guidekit.js");
const GUIDES = { name: "Guides", path: "/guides.html" };

const pages = [];

pages.push(article({
  path: "/pet-insurance-thailand.html",
  title: "Pet Insurance Thailand | Policy Checks | PattayaPets",
  desc: "How to compare a Thai pet-insurance contract, verify a seller through the OIC and record eligibility, cover, exclusions and claims terms.",
  crumb: "Pet insurance",
  breadcrumbs: [GUIDES],
  eyebrow: "Guide",
  h1: "Pet insurance in Thailand",
  lede: "Start with the policy wording and schedule, not a headline price or a general description of pet insurance.",
  updated: "2026-08-01",
  verify: "General orientation only, not financial, legal, insurance or veterinary advice. PattayaPets does not sell insurance, receive commission or recommend a provider.",
  sections: [
    { h: "A current product exists; eligibility is still individual", html:
      '<p><a href="https://www.muangthaiinsurance.com/th/product/miscellaneous-insurance/Cats-Dogs-Plus" target="_blank" rel="noopener noreferrer">' +
      "Muang Thai Insurance&rsquo;s current Cats &amp; Dogs Plus page</a> publishes plan and application documents. " +
      "It is one first-party example, not a market survey or endorsement. PattayaPets did not verify an " +
      "English contract, foreign-national eligibility, a quote for any animal, or whether the product will " +
      "remain open on a future date.</p>" },
    { h: "Record these fields from the contract", html:
      "<ul><li>Insurer&rsquo;s legal name, seller or broker, product name, form version and policy period</li>" +
      "<li>Applicant residency and payment requirements; eligible species, breed, age, identification and health evidence</li>" +
      "<li>Each insured event, territorial limit, waiting period, exclusion and definition of a pre-existing condition</li>" +
      "<li>Per-event, per-condition and annual limits; excess, co-pay and renewal terms</li>" +
      "<li>Eligible veterinary providers, pre-authorisation, original-document and reimbursement requirements</li>" +
      "<li>Cancellation, complaint and dispute route; which language controls if translations differ</li></ul>" +
      "<p>Write the answer beside the page or clause number. If the seller cannot supply the wording and " +
      "schedule before payment, the comparison is incomplete.</p>" },
    { h: "Verify the seller and keep the issued policy", html:
      '<p>The Thai Office of Insurance Commission provides <a href="https://cit.oic.or.th/oic-connect-eng.html?lang=th" target="_blank" rel="noopener noreferrer">' +
      "OIC Connect and Gateway</a>, including policy and agent or broker licence checks. It also operates an " +
      '<a href="https://complaintportal.oic.or.th/" target="_blank" rel="noopener noreferrer">insurance complaint portal</a>. ' +
      "Use the OIC service or contact the OIC when identity, licence or policy status is unclear.</p>" },
    { h: "Insurance and veterinary decisions are separate", html:
      "<p>Ask a qualified veterinarian what care an individual animal needs; then read whether the contract " +
      "covers that circumstance. PattayaPets does not interpret symptoms, recommend delaying care for a claim, " +
      "or estimate an emergency-fund amount. See <a href=\"/vets/\">Pattaya vets</a> and " +
      "<a href=\"/owning-a-pet-in-pattaya/cost-of-owning-a-pet.html\">budgeting orientation</a>.</p>" },
    { h: "Sources followed", html:
      "<ul>" +
      '<li><a href="https://www.muangthaiinsurance.com/th/product/miscellaneous-insurance/Cats-Dogs-Plus" target="_blank" rel="noopener noreferrer">Muang Thai Insurance product page</a> &mdash; current first-party example and downloadable documents.</li>' +
      '<li><a href="https://cit.oic.or.th/oic-connect-eng.html?lang=th" target="_blank" rel="noopener noreferrer">OIC Connect / Gateway</a> &mdash; regulator tools.</li>' +
      '<li><a href="https://complaintportal.oic.or.th/" target="_blank" rel="noopener noreferrer">OIC complaint portal</a> &mdash; regulator complaint route.</li>' +
      "</ul><p>Checked 1 August 2026.</p>" }
  ],
  faqs: [
    ["Can a foreign resident buy the example policy?", "<p>PattayaPets did not verify foreign-national or residency eligibility. Ask the insurer and obtain the applicable contract before paying.</p>"],
    ["Does the example cover my pet&rsquo;s condition?", "<p>This page cannot answer that. Read the issued schedule, definitions, insured events, waiting periods and exclusions, and ask the insurer in writing. Ask a qualified veterinarian about the animal&rsquo;s care.</p>"],
    ["How do I verify an agent or broker?", "<p>Use the linked OIC Connect / Gateway service or contact the Office of Insurance Commission.</p>"],
    ["Does PattayaPets recommend Muang Thai Insurance?", "<p>No. Its page is linked only as a current first-party example showing that policy and application documents must be checked.</p>"]
  ],
  related: [
    { name: "Pattaya vets", path: "/vets/", desc: "Choose a qualified veterinary provider separately from insurance." },
    { name: "Cost of owning a pet", path: "/owning-a-pet-in-pattaya/cost-of-owning-a-pet.html", desc: "General budgeting orientation." },
    { name: "Pet emergencies", path: "/pet-emergency/", desc: "General emergency orientation." }
  ]
}));

pages.push(hub({
  path: "/cats/",
  title: "Cats in Pattaya: Care & Travel Guides | PattayaPets",
  image: "/assets/img/og-cats.png",
  updated: "2026-08-01",
  desc: "Pattaya guides for cat owners: veterinary care, housing, identification, adoption, boarding, import, export and emergency orientation.",
  crumb: "Cats",
  breadcrumbs: [],
  eyebrow: "Species hub",
  h1: "Cats in Pattaya",
  lede: "A route index for cat care, housing, adoption and travel. Individual health decisions belong with a qualified veterinarian.",
  intro:
    "<p>Use this hub to find the relevant guide, then verify provider, policy and regulatory details at " +
    "the linked primary source. No rescue, clinic, building or service is endorsed merely by appearing here.</p>",
  groups: [
    {
      title: "Daily care and housing",
      cards: [
        { name: "Indoor or outdoor?", desc: "Traffic, balconies, other animals and housing questions.", path: "/cats/indoor-vs-outdoor-cats.html" },
        { name: "Cat health and vaccinations", desc: "General orientation to discuss with a qualified vet.", path: "/cats/cat-vaccinations-thailand.html" },
        { name: "Cat boarding", desc: "How to verify a cattery or sitter.", path: "/cats/cat-boarding-pattaya.html" },
        { name: "Pet-friendly housing", desc: "Written building and owner permission.", path: "/owning-a-pet-in-pattaya/pet-friendly-housing.html" },
        { name: "Microchipping", desc: "Identification questions for your vet.", path: "/owning-a-pet-in-pattaya/microchipping-your-pet.html" },
        { name: "Pet insurance", desc: "Policy-document and regulator checks.", path: "/pet-insurance-thailand.html" }
      ]
    },
    {
      title: "Adoption and travel",
      cards: [
        { name: "Getting a cat", desc: "Adoption and preparation questions.", path: "/cats/getting-a-cat-in-pattaya.html" },
        { name: "Adoption sources", desc: "Current first-party evidence and named gaps.", path: "/adopt-a-pet-pattaya/" },
        { name: "Bring a pet to Thailand", desc: "DLD import process and sources.", path: "/bring-pet-to-thailand/" },
        { name: "Take a pet out of Thailand", desc: "DLD export and destination requirements.", path: "/take-pet-out-of-thailand/" }
      ]
    },
    {
      title: "Veterinary and emergency routes",
      cards: [
        { name: "Pattaya vets", desc: "Business evidence and contact verification.", path: "/vets/" },
        { name: "Mobile vets", desc: "Home-visit provider directory.", path: "/mobile-vets/" },
        { name: "Pet emergencies", desc: "General orientation and current provider routes.", path: "/pet-emergency/" },
        { name: "Lost pet", desc: "Actions and reporting channels.", path: "/owning-a-pet-in-pattaya/lost-pet-pattaya.html" }
      ]
    }
  ],
  related: [
    { name: "Pattaya vets", path: "/vets/", desc: "Find and verify veterinary providers." },
    { name: "Adopt a pet", path: "/adopt-a-pet-pattaya/", desc: "Rescue evidence status." },
    { name: "Pet-friendly housing", path: "/owning-a-pet-in-pattaya/pet-friendly-housing.html", desc: "Written permission." }
  ]
}));

pages.push(hub({
  path: "/dogs/",
  title: "Dogs in Pattaya: Care & Travel Guides | PattayaPets",
  image: "/assets/img/og-dogs.png",
  updated: "2026-08-01",
  desc: "Pattaya guides for dog owners: veterinary care, walking access, training, housing, adoption, import, export and emergency orientation.",
  crumb: "Dogs",
  breadcrumbs: [],
  eyebrow: "Species hub",
  h1: "Dogs in Pattaya",
  lede: "A route index for dog care, access, housing, adoption and travel. Verify current local rules and ask a qualified veterinarian about an individual dog.",
  intro:
    "<p>This hub does not imply that a beach, restaurant, condo, rescue or provider currently accepts a " +
    "dog. Follow the relevant guide to its evidence and verification boundary.</p>",
  groups: [
    {
      title: "Daily care",
      cards: [
        { name: "Dog health and vaccinations", desc: "General orientation to discuss with a qualified vet.", path: "/dogs/dog-vaccinations-thailand.html" },
        { name: "Hot-climate care", desc: "Heat orientation and when to contact a vet.", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html" },
        { name: "Walking routes", desc: "How to verify access and plan a route.", path: "/owning-a-pet-in-pattaya/where-to-walk-your-dog.html" },
        { name: "Training", desc: "Trainer directory and provider checks.", path: "/trainers/" },
        { name: "Boarding", desc: "Boarding-provider directory and verification.", path: "/boarding/" },
        { name: "Pet insurance", desc: "Policy-document and regulator checks.", path: "/pet-insurance-thailand.html" }
      ]
    },
    {
      title: "Access and housing",
      cards: [
        { name: "Dog-friendly Pattaya", desc: "Current first-party policies and named access gaps.", path: "/dog-friendly-pattaya/" },
        { name: "Beach access", desc: "No inferred dog-beach permissions.", path: "/dog-friendly-pattaya/beaches.html" },
        { name: "Condo policy", desc: "Two-part written verification.", path: "/dog-friendly-pattaya/condos.html" },
        { name: "Pet-friendly housing", desc: "Owner and property permission.", path: "/owning-a-pet-in-pattaya/pet-friendly-housing.html" },
        { name: "Dog registration", desc: "Official-source scope and local gaps.", path: "/owning-a-pet-in-pattaya/dog-registration-thailand.html" }
      ]
    },
    {
      title: "Adoption, travel and emergencies",
      cards: [
        { name: "Adoption sources", desc: "Current first-party evidence and named gaps.", path: "/adopt-a-pet-pattaya/" },
        { name: "Bring a pet to Thailand", desc: "DLD import process and sources.", path: "/bring-pet-to-thailand/" },
        { name: "Take a pet out of Thailand", desc: "DLD export and destination requirements.", path: "/take-pet-out-of-thailand/" },
        { name: "Pet emergencies", desc: "General orientation and current provider routes.", path: "/pet-emergency/" },
        { name: "Street-dog encounters", desc: "General safety orientation.", path: "/pet-emergency/street-dog-encounters.html" }
      ]
    }
  ],
  related: [
    { name: "Dog-friendly Pattaya", path: "/dog-friendly-pattaya/", desc: "Access and policy verification." },
    { name: "Pattaya vets", path: "/vets/", desc: "Find and verify veterinary providers." },
    { name: "Adopt a pet", path: "/adopt-a-pet-pattaya/", desc: "Rescue evidence status." }
  ]
}));

module.exports = pages;
