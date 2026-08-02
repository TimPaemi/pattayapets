"use strict";
/* Cluster: Dog-friendly Pattaya — evidence-first venue and access guidance. */

const { article, hub } = require("../guidekit.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const CLUSTER = { name: "Dog-friendly Pattaya", path: "/dog-friendly-pattaya/" };
const SUB = [GUIDES, CLUSTER];

const pages = [];

pages.push(hub({
  path: "/dog-friendly-pattaya/",
  title: "Dog-Friendly Pattaya: Access Checks | PattayaPets",
  image: "/assets/img/og-dog-friendly.png",
  updated: "2026-08-01",
  desc: "How to verify current dog access at Pattaya beaches, cafes, restaurants, hotels, condos and walking spaces before visiting or booking.",
  crumb: "Dog-friendly Pattaya",
  breadcrumbs: [GUIDES],
  eyebrow: "Guide",
  h1: "Dog-friendly Pattaya: verify before you go",
  lede: "A pet policy is specific to a place, date, area and animal. This guide separates current first-party evidence from details that still need direct confirmation.",
  intro:
    "<p>PattayaPets does not infer permission from outdoor seating, another guest&rsquo;s photo, " +
    "a booking-platform filter or the absence of a sign. Use the pages below to identify the " +
    "policy owner and the exact questions to ask.</p>" +
    "<p>Policies can change after this review. Save the property&rsquo;s reply when a booking or " +
    "journey depends on it. If a dog becomes unwell in the heat, stop the outing and contact a " +
    "qualified veterinarian.</p>",
  groups: [
    {
      title: "Day visits and walks",
      cards: [
        { name: "Beach access", desc: "The current official-source gap and how to verify a specific stretch.", path: "/dog-friendly-pattaya/beaches.html" },
        { name: "Cafes", desc: "How to obtain a current, first-party dog policy before visiting.", path: "/dog-friendly-pattaya/cafes.html" },
        { name: "Restaurants", desc: "Questions for outdoor dining without assuming dogs are accepted.", path: "/dog-friendly-pattaya/restaurants.html" },
        { name: "Walking spaces", desc: "How to check a park, beach or private space before using it.", path: "/dog-friendly-pattaya/parks.html" }
      ]
    },
    {
      title: "Accommodation and housing",
      cards: [
        { name: "Hotels with first-party pet pages", desc: "Three current policy starting points, with no endorsement or guest-experience claim.", path: "/dog-friendly-pattaya/hotels.html" },
        { name: "Condo policy verification", desc: "Get separate written answers from the building and unit owner.", path: "/dog-friendly-pattaya/condos.html" }
      ]
    }
  ],
  related: [
    { name: "Where to walk your dog", path: "/owning-a-pet-in-pattaya/where-to-walk-your-dog.html", desc: "Planning a daily route." },
    { name: "Hot-climate pet care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", desc: "General heat orientation and when to call a vet." },
    { name: "Pet-friendly housing", path: "/owning-a-pet-in-pattaya/pet-friendly-housing.html", desc: "Written housing permission." }
  ]
}));

function df(o) {
  return article({
    path: "/dog-friendly-pattaya/" + o.slug + ".html",
    title: o.title,
    desc: o.desc,
    crumb: o.crumb,
    breadcrumbs: SUB,
    eyebrow: "Dog-friendly Pattaya",
    h1: o.h1,
    lede: o.lede,
    updated: o.updated,
    verify: o.verify,
    sections: o.sections,
    faqs: o.faqs,
    related: o.related || [
      { name: "Dog-friendly Pattaya", path: "/dog-friendly-pattaya/", desc: "The evidence-first cluster." },
      { name: "Where to walk your dog", path: "/owning-a-pet-in-pattaya/where-to-walk-your-dog.html", desc: "Planning a route." },
      { name: "Hot-climate pet care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", desc: "General heat orientation." }
    ]
  });
}

pages.push(df({
  slug: "beaches",
  crumb: "Beach access",
  title: "Dogs on Pattaya Beaches | How to Verify Access | PattayaPets",
  desc: "How to verify current dog access for a specific Pattaya or Jomtien beach stretch. No unverified dog-beach map or implied permission.",
  h1: "How to verify dog access on a Pattaya beach",
  lede: "PattayaPets has not located a current official public map that designates Pattaya beach stretches as dog-friendly.",
  updated: "2026-08-01",
  verify: "No named beach on this page is represented as allowing dogs. Check current signs and ask Pattaya City about the exact stretch and date before relying on access.",
  sections: [
    { h: "The evidence gap", html:
      "<p>Searches of Pattaya City&rsquo;s public website and data platform on 1 August 2026 " +
      "did not produce a current beach-by-beach dog-permission instrument. That does not prove " +
      "permission or a ban. Reports that owners walk at Dongtan, Jomtien, Wongamat or Bang Saray " +
      "are not a substitute for a rule issued by the authority responsible for that location.</p>" },
    { h: "Check the exact place", html:
      "<ol><li>Record the beach name, nearest access point and planned date.</li>" +
      "<li>Read every entrance and on-beach sign; temporary event or cleaning restrictions may be local.</li>" +
      "<li>Ask Pattaya City&rsquo;s 1337 information service or the authority named on the sign whether dogs are allowed, where, and under what lead or waste rules.</li>" +
      "<li>If the answer is unclear, choose a private venue that gives written permission instead of treating silence as consent.</li></ol>" },
    { h: "General outing safety", html:
      "<p>Use a lead, carry waste bags and drinking water, and leave space around other people and animals. " +
      "Avoid a surface that feels hot and end the outing if the dog shows distress. Beach and heat advice " +
      "on this site is general orientation, not diagnosis or treatment; contact a qualified veterinarian " +
      "for advice about an individual animal or any symptoms.</p>" },
    { h: "Official source checked", html:
      '<p><a href="https://info.pattaya.go.th/DocLib12/%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B9%88%E0%B8%AD%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B8%9E%E0%B8%B1%E0%B8%97%E0%B8%A2%E0%B8%B2.aspx" target="_blank" rel="noopener noreferrer">' +
      "Pattaya City contact page</a> &mdash; publishes the city address, main telephone, " +
      "Contact Center 1337 and email. Checked 1 August 2026; it does not provide a dog-access matrix.</p>" }
  ],
  faqs: [
    ["Which Pattaya beach currently permits dogs?", "<p>This review did not find a current official beach-by-beach permission source. Check signs and ask Pattaya City about the exact access point before going.</p>"],
    ["Does seeing other dogs prove access?", "<p>No. It shows only that dogs were present; it does not establish the current rule.</p>"],
    ["What should I do if the rule is unclear?", "<p>Do not infer permission. Ask the responsible authority or use a private place that confirms its policy in writing.</p>"]
  ]
}));

pages.push(df({
  slug: "cafes",
  crumb: "Cafes",
  title: "Dog-Friendly Cafes Pattaya: Policy Check | PattayaPets",
  desc: "How to verify a Pattaya cafe's current dog policy. No venue is listed without a current first-party policy that PattayaPets could confirm.",
  h1: "How to check a Pattaya cafe&rsquo;s dog policy",
  lede: "Outdoor tables and pet photos do not by themselves establish a current cafe policy.",
  updated: "2026-08-01",
  verify: "The previously named cafes did not have a current, accessible first-party policy that this review could reliably match to a Pattaya venue, so their policy, hours and amenities are not stated here.",
  sections: [
    { h: "No verified cafe list yet", html:
      "<p>PattayaPets checked the named venues previously shown on this page. It could not verify current " +
      "first-party text for dog access, permitted areas, hours, water bowls or fenced runs. Those claims " +
      "have been removed rather than repeated with a &lsquo;confirm first&rsquo; disclaimer.</p>" },
    { h: "Ask before travelling", html:
      "<ul><li>Are customer dogs accepted on the date of the visit?</li>" +
      "<li>Is permission outdoor-only, and which tables are included?</li>" +
      "<li>Are there species, size, number, carrier or lead conditions?</li>" +
      "<li>Is advance booking required?</li></ul>" +
      "<p>Ask through the venue&rsquo;s own website, verified social account or published phone number and save the reply.</p>" },
    { h: "At the table", html:
      "<p>Follow the venue&rsquo;s instructions, keep the dog within your control, bring water, and do not " +
      "place the animal on furniture unless the venue explicitly permits it. Leave if the animal is distressed.</p>" }
  ],
  faqs: [
    ["Which Pattaya cafes does this page currently verify?", "<p>None. This review could not confirm a current first-party policy for the previously named cafes.</p>"],
    ["Is outdoor seating enough to assume dogs are allowed?", "<p>No. Ask the venue for its current rule and the exact area covered.</p>"],
    ["What evidence should I save?", "<p>Save the venue&rsquo;s current policy page or its direct written reply, including the date and any conditions.</p>"]
  ]
}));

pages.push(df({
  slug: "restaurants",
  crumb: "Restaurants",
  title: "Dog-Friendly Restaurants Pattaya | PattayaPets",
  desc: "How to verify a Pattaya restaurant's current dog policy without relying on reviews, outdoor seating or an unverified venue list.",
  h1: "How to verify a restaurant dog policy in Pattaya",
  lede: "A terrace is a clue to ask a question, not proof that customer dogs are accepted.",
  updated: "2026-08-01",
  verify: "No restaurant is recommended or represented here as currently dog-friendly. The prior named-venue claims lacked a current Pattaya first-party policy and were removed.",
  sections: [
    { h: "What was removed", html:
      "<p>The previous list asserted dog access and amenities for several restaurants using reports rather " +
      "than current venue policies. A search result for a similarly named Sandbar led to a policy for a " +
      "Florida business, not Pattaya; it is not evidence for the Pattaya venue. The page now names the gap.</p>" },
    { h: "Get an exact answer", html:
      "<p>Ask whether your species, number and size of animal are allowed, whether permission is limited to " +
      "specific outdoor tables, and whether a lead, carrier or booking is required. Confirm again on arrival " +
      "because a private venue can change its policy.</p>" },
    { h: "Plan for a refusal", html:
      "<p>Keep a non-venue-dependent alternative and accept a refusal without arguing. Do not leave an animal " +
      "unattended in a vehicle while trying another restaurant.</p>" }
  ],
  faqs: [
    ["Does this page verify any current Pattaya restaurant dog policy?", "<p>No. It provides a verification method because the previous named policies were not supported by a current first-party Pattaya source.</p>"],
    ["Can I rely on a review or booking-platform label?", "<p>Use it only as a lead. Obtain the current policy from the restaurant itself.</p>"],
    ["What if staff give different answers?", "<p>Ask for the manager&rsquo;s current decision and follow the answer given at the venue.</p>"]
  ]
}));

pages.push(df({
  slug: "hotels",
  crumb: "Hotels",
  title: "Pet-Friendly Pattaya Hotels | Policy Sources | PattayaPets",
  desc: "Three Pattaya properties with current first-party pet pages, plus the exact policy fields to confirm before paying. No ranking or endorsement.",
  h1: "Pattaya hotels with first-party pet-policy pages",
  lede: "These are policy starting points, not reviews, rankings or guarantees of availability for a particular stay.",
  updated: "2026-08-01",
  verify: "First-party pages were accessible on 1 August 2026. Confirm the current policy, room and total charge directly before paying because terms and availability can change.",
  sections: [
    { h: "Current first-party starting points", html:
      '<div class="table-wrap"><table class="facts-table"><thead><tr><th scope="col">Property</th><th scope="col">What its page currently states</th></tr></thead><tbody>' +
      '<tr><th scope="row">Rabbit Resort</th><td>Its <a href="https://rabbitresort.com/testimonials-2/" target="_blank" rel="noopener noreferrer">pet policy</a> covers dogs and cats and states vaccination proof, weight-tier charges, a deposit, ground-floor rooms, lead rules, breed restrictions and an unattended-pet charge. Read the full conditions.</td></tr>' +
      '<tr><th scope="row">Hard Rock Hotel Pattaya</th><td>Its <a href="https://hotel.hardrock.com/pattaya/th/petfriendly.aspx" target="_blank" rel="noopener noreferrer">Unleashed programme page</a> states dogs and cats, count and weight limits, designated areas, vaccine-record proof and the booking channels. The linked page is in Thai.</td></tr>' +
      '<tr><th scope="row">La Miniera Pool Villas Pattaya</th><td>Its <a href="https://www.laminierapattaya.com/our-accommodations-villas/villas/pet-friendly-pool-villa/" target="_blank" rel="noopener noreferrer">pet-friendly villa page</a> states permitted species, a maximum number of pets, what the villa rate includes, additional-pet charges and a refundable security deposit.</td></tr>' +
      "</tbody></table></div>" },
    { h: "Confirm before paying", html:
      "<ul><li>Exact room type and dates</li><li>Species, breed, weight, number and age limits</li>" +
      "<li>Every nightly charge, deposit, tax and refund condition</li><li>Vaccination or other records required</li>" +
      "<li>Areas where the animal may go and whether it may be left in the room</li>" +
      "<li>Booking channel and cancellation terms</li></ul>" },
    { h: "Not included", html:
      "<p>Booking-platform filters, guest reports and villa-category generalisations were excluded because " +
      "they do not establish a property&rsquo;s current contract terms. PattayaPets has not stayed at, rated " +
      "or endorsed the three properties above.</p>" }
  ],
  faqs: [
    ["Does a first-party pet page guarantee my booking?", "<p>No. It confirms that the property publishes a policy; availability and eligibility still need written confirmation for your dates and animal.</p>"],
    ["Are the three properties ranked?", "<p>No. They are listed only because a current first-party policy page was accessible during this review.</p>"],
    ["Should I rely on a booking-site pet filter?", "<p>No. Ask the property to confirm the exact room, animal and total terms before payment.</p>"]
  ],
  related: [
    { name: "Condo policy verification", path: "/dog-friendly-pattaya/condos.html", desc: "For longer stays." },
    { name: "Pet-friendly housing", path: "/owning-a-pet-in-pattaya/pet-friendly-housing.html", desc: "Written housing permission." },
    { name: "Bangkok to Pattaya with a pet", path: "/owning-a-pet-in-pattaya/bangkok-to-pattaya-with-pet.html", desc: "Ground-transfer verification." }
  ]
}));

pages.push(df({
  slug: "condos",
  crumb: "Condos",
  title: "Pattaya Condo Pet Policy | Verification | PattayaPets",
  desc: "How to obtain and compare written pet permission from a Pattaya condo's building office and unit owner. No unverified building list.",
  h1: "Verify a Pattaya condo pet policy in writing",
  lede: "PattayaPets has no current written-policy dossier that supports calling a named condo dog-friendly.",
  updated: "2026-08-01",
  verify: "This is a practical verification checklist, not legal advice. If a lease or building rule is unclear, obtain qualified Thai legal advice before signing or paying.",
  sections: [
    { h: "Get two written answers", html:
      "<p>Ask the building or juristic office for the current building rule and ask the unit owner to put " +
      "permission for your exact animal in the lease or a signed addendum. Do not infer permission from an " +
      "agent&rsquo;s listing or from seeing another animal in the building.</p>" },
    { h: "Fields to record", html:
      "<ul><li>Policy title, effective date and issuing office</li><li>Species, number, size or breed conditions</li>" +
      "<li>Lift, entrance, carrier, lead, waste and noise rules</li><li>Every fee, deposit, damage and refund term</li>" +
      "<li>The exact unit, lease dates and animal covered by the owner&rsquo;s permission</li></ul>" },
    { h: "Named evidence gap", html:
      "<p>No condo project is listed because PattayaPets has not obtained a current written rule from a " +
      "building authority and matching permission from a unit owner. Search filters remain leads only.</p>" }
  ],
  faqs: [
    ["Which Pattaya condos does this page verify as dog-friendly?", "<p>None. No named building currently has the two-part written evidence required by this page.</p>"],
    ["Is the owner&rsquo;s message enough?", "<p>Obtain the current building rule as well and put the exact animal permission in the lease or a signed addendum.</p>"],
    ["What if the documents conflict?", "<p>Do not pay on an assumption. Ask the parties to resolve the conflict in writing or obtain qualified Thai legal advice.</p>"]
  ]
}));

pages.push(df({
  slug: "parks",
  crumb: "Walking spaces",
  title: "Walking a Dog in Pattaya | Access Check | PattayaPets",
  desc: "How to verify current dog access at a Pattaya park, beach, road or private walking space. No unverified dog-park or route claims.",
  h1: "How to verify a Pattaya dog-walking space",
  lede: "PattayaPets has not located a current official public list of Pattaya spaces that permit customer or companion dogs.",
  updated: "2026-08-01",
  verify: "No named park, beach or route on this page is represented as granting dog access. Check the authority, signs and conditions for the exact location.",
  sections: [
    { h: "Choose by evidence, not popularity", html:
      "<p>Previous copy described named beaches, Pratumnak roads and a private cafe run as routes owners use. " +
      "Those reports did not establish permission, current operation or safety, so the named recommendations " +
      "were removed.</p>" },
    { h: "Verification sequence", html:
      "<ol><li>Identify whether the space is municipal, another public authority&rsquo;s property, or private.</li>" +
      "<li>Read entrance and route signs and note temporary restrictions.</li><li>Ask the responsible office " +
      "whether dogs are permitted and what lead, carrier, waste, time or area conditions apply.</li>" +
      "<li>Inspect traffic, shade, surfaces, exits and other animals for the individual dog.</li></ol>" },
    { h: "General safety boundary", html:
      "<p>Keep the dog under control, carry water and waste bags, and avoid heat or a surface that feels hot. " +
      "For an individual dog&rsquo;s exercise tolerance or any symptom, ask a qualified veterinarian.</p>" },
    { h: "Official source checked", html:
      '<p><a href="https://info.pattaya.go.th/DocLib12/%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B9%88%E0%B8%AD%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B8%9E%E0%B8%B1%E0%B8%97%E0%B8%A2%E0%B8%B2.aspx" target="_blank" rel="noopener noreferrer">' +
      "Pattaya City contact page</a> &mdash; checked 1 August 2026. It publishes Contact Center 1337; " +
      "no dog-access matrix was located in the city material reviewed.</p>" }
  ],
  faqs: [
    ["Does Pattaya have a verified public dog park on this page?", "<p>No. This review did not locate a current official source that supports naming one.</p>"],
    ["Are dogs allowed in Pattaya public parks?", "<p>This page cannot give a city-wide answer. Check the current rule and signs for the exact park.</p>"],
    ["Where should I walk if permission is unclear?", "<p>Use a place whose responsible authority or private operator gives a clear current answer; do not treat silence as permission.</p>"]
  ]
}));

module.exports = pages;
