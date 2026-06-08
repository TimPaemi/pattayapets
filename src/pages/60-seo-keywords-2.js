"use strict";
/* SEO batch 134 — shelters, pet-friendly hotels keyword, Bangkok transfer, pet taxi. */

const { article } = require("../guidekit.js");
const rb = require("../data/richness-blocks.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const ADOPT = { name: "Adopt a pet in Pattaya", path: "/adopt-a-pet-pattaya/" };
const OWNING = { name: "Owning a pet in Pattaya", path: "/owning-a-pet-in-pattaya/" };
const DOG = { name: "Dog-friendly Pattaya", path: "/dog-friendly-pattaya/" };

const SHELTER_ROWS = [
  ["Hope for Strays", "/adopt-a-pet-pattaya/hope-for-strays.html", "Dog rescue shelter, East Pattaya"],
  ["Dog & Cat Rescue Pattaya", "/adopt-a-pet-pattaya/dog-cat-rescue-pattaya.html", "Dogs and street cats"],
  ["Animal Army Foundation", "/adopt-a-pet-pattaya/animal-army-foundation.html", "Na Jomtien hospital & rescue since 1994"],
  ["Pattaya Street Dogs (K9aid)", "/adopt-a-pet-pattaya/pattaya-street-dogs-k9aid.html", "Street dogs & temple colonies"],
  ["Soi Dog Foundation", "/adopt-a-pet-pattaya/soi-dog-foundation.html", "National charity with Pattaya work"],
  ["Malee's Animal Shelter", "/adopt-a-pet-pattaya/malees-animal-shelter.html", "Pattaya & Chanthaburi"],
  ["Ady G. Second Chance Pattaya", "/adopt-a-pet-pattaya/ady-g-second-chance-pattaya.html", "Disabled & rescued dogs"]
];

function shelterTableHtml() {
  return '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
    '<th scope="col">Organisation</th><th scope="col">Focus</th></tr></thead><tbody>' +
    SHELTER_ROWS.map(function (r) {
      return '<tr><th scope="row"><a href="' + r[1] + '">' + r[0] +
        '</a></th><td>' + r[2] + '</td></tr>';
    }).join("") + "</tbody></table></div>";
}

const pages = [];

/* ---------------- ANIMAL SHELTERS PATTAYA ---------------- */
pages.push(article({
  path: "/adopt-a-pet-pattaya/animal-shelters-pattaya.html",
  title: "Animal Shelters Pattaya | Dog & Cat Rescues | PattayaPets",
  desc: "Animal shelters and rescues in Pattaya — adoption, fostering, volunteering and how each organisation works. Hope for Strays, Soi Dog, Malee's and more.",
  crumb: "Animal shelters",
  breadcrumbs: [GUIDES, ADOPT],
  eyebrow: "Adopt a pet in Pattaya",
  h1: "Animal shelters in Pattaya",
  lede: "Pattaya has a network of dog and cat rescues doing hard, daily work on " +
    "sterilisation, treatment and rehoming. If you are searching for an animal shelter " +
    "in Pattaya, start here — then read each organisation's own page.",
  sections: [
    { html:
      '<div class="callout callout-note"><p>PattayaPets lists shelters as a public-interest ' +
      "service. We are not affiliated with them and take no payment. Hours, locations and " +
      "animals available change — always confirm directly before you visit.</p></div>" },
    { h: "Shelters and rescues we cover", html:
      "<p>Each link below goes to a dedicated PattayaPets page with what we know about " +
      "how that rescue works, adoption and how to help.</p>" + shelterTableHtml() },
    { h: "How adoption usually works", html:
      "<p>Reputable shelters typically:</p><ul>" +
      "<li>Match you with an animal that fits your home and lifestyle</li>" +
      "<li>Rehome animals <strong>vaccinated and sterilised</strong> where possible</li>" +
      "<li>Ask honest questions — a good shelter cares where animals end up</li>" +
      "<li>May offer fostering if you cannot adopt permanently</li></ul>" +
      "<p>Read the full <a href=\"/adopt-a-pet-pattaya/\">adopt a pet in Pattaya</a> hub " +
      "and <a href=\"/adopt-a-pet-pattaya/fostering.html\">fostering guide</a>. New owners " +
      "should plan <a href=\"/owning-a-pet-in-pattaya/microchipping-your-pet.html\">microchipping</a> " +
      "and <a href=\"/owning-a-pet-in-pattaya/dog-registration-thailand.html\">registration</a>.</p>" },
    { h: "If you cannot adopt", html:
      "<p>Fostering, volunteering, donating and reporting injured street animals all help. " +
      "See <a href=\"/adopt-a-pet-pattaya/how-to-help.html\">how to help street animals</a> " +
      "and <a href=\"/pet-emergency/\">pet emergencies</a> if you find an injured dog or cat.</p>" +
      "<p>Even small, regular donations for food and medicine keep shelters running when " +
      "adoption homes are full. Many rescues post specific needs on social media — follow " +
      "the organisation you want to support and ask what they need this month rather than " +
      "assuming cash is always best.</p>" },
    { h: "Flying an adopted pet abroad", html:
      "<p>Some rescues support international adoptions. The export paperwork is the same " +
      "as for any pet leaving Thailand — see " +
      "<a href=\"/take-pet-out-of-thailand/export-process.html\">export process</a> and " +
      "<a href=\"/pet-relocation/\">relocation agents</a> if you need logistics help.</p>" },
    { h: "After adoption — vets and daily life", html:
      "<p>Book a <a href=\"/vets/\">local vet</a> for a post-adoption check, parasite " +
      "prevention and vaccinations. Browse " +
      "<a href=\"/vets/english-speaking-vets-pattaya.html\">English-speaking vets</a> if " +
      "that matters to you. For dogs, read " +
      "<a href=\"/dog-friendly-pattaya/\">dog-friendly Pattaya</a> and " +
      "<a href=\"/owning-a-pet-in-pattaya/hot-climate-pet-care.html\">hot-climate care</a>.</p>" }
  ],
  faqs: [
    ["Where can I adopt a dog in Pattaya?",
     "<p>Several rescues operate in and around Pattaya — see the table on this page. Hope for Strays, Dog & Cat Rescue Pattaya and Soi Dog Foundation are common starting points.</p>"],
    ["Are Pattaya animal shelters open to visitors?",
     "<p>Many welcome arranged visits — contact each organisation first. Some are appointment-only.</p>"],
    ["Can I adopt a street dog in Pattaya?",
     "<p>Yes, through shelters or sometimes directly — but rescues can help with health checks, sterilisation and paperwork. See <a href=\"/adopt-a-pet-pattaya/how-to-help.html\">how to help street animals</a>.</p>"],
    ["Do shelters charge an adoption fee?",
     "<p>Many ask a donation or fee to cover vaccinations and sterilisation — confirm with the shelter.</p>"],
    ["Can I foster instead of adopting?",
     "<p>Yes — fostering frees kennel space and socialises animals. See <a href=\"/adopt-a-pet-pattaya/fostering.html\">fostering a pet</a>.</p>"]
  ],
  related: [
    { name: "Adopt a pet hub", path: "/adopt-a-pet-pattaya/", desc: "The full adoption cluster." },
    { name: "Hope for Strays", path: "/adopt-a-pet-pattaya/hope-for-strays.html", desc: "East Pattaya dog rescue." },
    { name: "Soi Dog Foundation", path: "/adopt-a-pet-pattaya/soi-dog-foundation.html", desc: "Thailand's best-known welfare charity." },
    { name: "Fostering", path: "/adopt-a-pet-pattaya/fostering.html", desc: "Temporary homes save lives." }
  ]
}));

/* ---------------- BANGKOK TO PATTAYA WITH PET ---------------- */
pages.push(article({
  path: "/owning-a-pet-in-pattaya/bangkok-to-pattaya-with-pet.html",
  title: "Bangkok to Pattaya With a Pet | Road Transfer Guide | PattayaPets",
  desc: "How to get from Bangkok Suvarnabhumi or U-Tapao to Pattaya with a dog or cat — taxis, private transfer, carriers, traffic and after import arrival.",
  crumb: "Bangkok to Pattaya",
  breadcrumbs: [GUIDES, OWNING],
  eyebrow: "Owning a pet in Pattaya",
  h1: "Bangkok to Pattaya with a pet",
  lede: "Whether you have just cleared the Animal Quarantine Station or you are visiting " +
    "Pattaya with your dog, the Bangkok&ndash;Pattaya leg needs a secure carrier and a " +
    "realistic traffic plan.",
  sections: [
    { h: "Which Bangkok airport matters", html:
      "<p><strong>Suvarnabhumi (BKK)</strong> is the usual international arrival point for " +
      "pets entering Thailand — see " +
      "<a href=\"/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html\">arriving at Suvarnabhumi</a>. " +
      "<strong>U-Tapao (UTP)</strong> is much closer to Pattaya and suits some regional " +
      "flights — see <a href=\"/bring-pet-to-thailand/u-tapao-airport-pets.html\">U-Tapao or Bangkok</a>. " +
      "Your import paperwork must name the airport you actually use.</p>" },
    { h: "Road time and traffic", html:
      "<p>From Suvarnabhumi to central Pattaya is typically <strong>90&ndash;120 minutes</strong> " +
      "by car in normal traffic — longer on Friday evenings and public holidays. From U-Tapao " +
      "to Pattaya is often <strong>30&ndash;45 minutes</strong>. Plan water, shade and a " +
      "comfort break for dogs on long transfers; cats should stay in a secure carrier throughout.</p>" },
    { h: "Taxis and ride apps", html:
      "<p>Metered taxis and ride-hailing apps operate from both airports, but " +
      "<strong>not every driver accepts animals</strong>. A pet in a clean, secure carrier " +
      "improves your chances — mention the pet when booking. For a more reliable option, " +
      "pre-book a private transfer that accepts pets. See also " +
      "<a href=\"/owning-a-pet-in-pattaya/getting-to-the-vet.html\">getting to the vet without a car</a>.</p>" },
    { h: "Pet taxi and relocation services", html:
      "<p>Some <a href=\"/pet-relocation/\">pet relocation agents</a> offer airport pickup and " +
      "pet taxi runs within Thailand — useful after import when you are tired and paperwork-heavy. " +
      "For dedicated pet taxi options, see " +
      "<a href=\"/owning-a-pet-in-pattaya/pet-taxi-pattaya.html\">pet taxi in Pattaya</a>. " +
      "Agree crate size, price and whether the driver accepts your breed before you land.</p>" },
    { h: "Right after AQS clearance", html:
      "<p>You will have documents, a possibly stressed animal and jet lag. If your housing " +
      "is not ready, a pet-friendly hotel for one night in Bangkok or Pattaya can bridge the " +
      "gap — see <a href=\"/dog-friendly-pattaya/hotels.html\">pet-friendly hotels</a> and " +
      "confirm policy in writing. Book a vet within the first week for parasite prevention — " +
      "<a href=\"/vets/english-speaking-vets-pattaya.html\">English-speaking vets</a> if needed.</p>" },
    { h: "Export trips the other direction", html:
      "<p>Leaving Pattaya for a Bangkok departure? Allow extra time for AQS inspection and " +
      "cargo check-in cut-offs — often several hours before the flight. Many owners stay near " +
      "the airport the night before an early export. See " +
      "<a href=\"/take-pet-out-of-thailand/export-process.html\">export process</a>.</p>" },
    rb.IMPORT_PATTAYA_LIFE
  ],
  faqs: rb.mergeFaqs([
    ["How long is the drive from Bangkok airport to Pattaya with a pet?",
     "<p>Usually 90–120 minutes from Suvarnabhumi to central Pattaya; 30–45 minutes from U-Tapao. Traffic can add significantly on weekends and holidays.</p>"],
    ["Can I take my dog in a Bangkok taxi from the airport?",
     "<p>Sometimes, if the dog is in a secure carrier and the driver agrees. Pre-booking a pet-friendly private transfer is more reliable.</p>"],
    ["Should I go straight to Pattaya after pet import?",
     "<p>Many owners do, if housing is ready. Others rest one night near the airport or in Pattaya — plan water, shade and a vet visit within the first week.</p>"],
    ["Is U-Tapao better than Bangkok for pets moving to Pattaya?",
     "<p>U-Tapao is closer, but fewer international routes use it for pet import. Confirm DLD AQS processing and airline pet policy for your route.</p>"],
    ["Who can pick up my pet from Suvarnabhumi AQS?",
     "<p>The owner named on the import permit should be present or arrange a representative — confirm current DLD rules with the AQS before travel.</p>"]
  ], rb.IMPORT_EXTRA_FAQS),
  related: [
    { name: "Arriving at Suvarnabhumi", path: "/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html", desc: "AQS clearance on landing." },
    { name: "Pet taxi Pattaya", path: "/owning-a-pet-in-pattaya/pet-taxi-pattaya.html", desc: "Dedicated pet transport." },
    { name: "Pet-friendly hotels", path: "/dog-friendly-pattaya/hotels.html", desc: "If you need a night before Pattaya." },
    { name: "Bring a dog to Thailand", path: "/bring-pet-to-thailand/bring-a-dog-to-thailand.html", desc: "Full import guide." }
  ]
}));

/* ---------------- PET TAXI PATTAYA ---------------- */
pages.push(article({
  path: "/owning-a-pet-in-pattaya/pet-taxi-pattaya.html",
  title: "Pet Taxi Pattaya | Airport & Vet Transport | PattayaPets",
  desc: "Pet taxi and private pet transport in Pattaya — airport runs, vet trips, Bangkok transfers and relocation agents who move animals by road.",
  crumb: "Pet taxi",
  breadcrumbs: [GUIDES, OWNING],
  eyebrow: "Owning a pet in Pattaya",
  h1: "Pet taxi and private pet transport in Pattaya",
  lede: "If you do not drive, or you need a stress-free airport run with a crate, a " +
    "pet taxi or relocation driver is often worth the cost.",
  sections: [
    { h: "When a pet taxi makes sense", html:
      "<ul>" +
      "<li><strong>Airport pickup</strong> after import at Suvarnabhumi or U-Tapao</li>" +
      "<li><strong>Export drop-off</strong> with a crate for early cargo flights</li>" +
      "<li><strong>Vet emergencies</strong> when ride apps refuse animals</li>" +
      "<li><strong>Bangkok&ndash;Pattaya transfers</strong> with a large dog or multiple pets</li>" +
      "</ul><p>See <a href=\"/owning-a-pet-in-pattaya/bangkok-to-pattaya-with-pet.html\">Bangkok to Pattaya with a pet</a>.</p>" },
    { h: "Relocation agents with ground transport", html:
      "<p>Several <a href=\"/pet-relocation/\">pet relocation agents</a> serving Thailand " +
      "advertise airport handling, pet taxi within Thailand and coordination with airlines. " +
      "They are not vets — they handle logistics. Browse the directory for English-speaking " +
      "contacts and confirm what is included in the quote (crate, waiting time, tolls).</p>" },
    { h: "Taxis and ride apps — the everyday option", html:
      "<p>For routine vet visits, a metered taxi or ride app can work if your pet travels in " +
      "a <strong>secure carrier</strong> and the driver agrees. Mention the pet when booking. " +
      "Baht buses (songthaews) are not suitable. Full guidance: " +
      "<a href=\"/owning-a-pet-in-pattaya/getting-to-the-vet.html\">getting to the vet without a car</a>.</p>" },
    { h: "Mobile vets as an alternative", html:
      "<p>For non-emergency care, a <a href=\"/mobile-vets/\">mobile vet</a> home visit avoids " +
      "transport altogether. That does not replace a hospital for surgery or overnight care.</p>" },
    { h: "Booking checklist", html:
      "<ul>" +
      "<li>Carrier or crate size and whether the vehicle fits it</li>" +
      "<li>Species, breed and weight — some drivers decline large or brachycephalic breeds in heat</li>" +
      "<li>Price includes tolls, waiting at AQS and late-night surcharge</li>" +
      "<li>Air-conditioning and whether the pet rides in cabin or boot</li>" +
      "<li>Cancellation policy if your AQS slot moves</li>" +
      "</ul>" },
    { h: "Emergencies", html:
      "<p>In a true emergency, call a <a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour vet</a> " +
      "first, then solve transport. Pre-save clinic numbers and keep a carrier ready. See " +
      "<a href=\"/pet-emergency/\">pet emergencies</a>.</p>" }
  ],
  faqs: [
    ["Is there a pet taxi service in Pattaya?",
     "<p>There is no single city-wide pet taxi brand — owners use pet relocation agents, private transfers and occasionally willing taxi drivers with a carrier. See the <a href=\"/pet-relocation/\">relocation directory</a>.</p>"],
    ["How much does a pet taxi from Bangkok airport to Pattaya cost?",
     "<p>Prices vary by vehicle size, time of day and agent — get a written quote before you land. Airport pickup with a large crate costs more than a small-dog carrier.</p>"],
    ["Can Grab or Bolt take pets in Pattaya?",
     "<p>Some drivers accept pets in carriers; many decline. Mention the pet when booking and have a backup plan.</p>"],
    ["Do relocation agents only do international moves?",
     "<p>Many also offer domestic airport transfers and vet runs — ask specifically for ground transport within Thailand.</p>"],
    ["What should my pet travel in?",
     "<p>A secure, well-ventilated carrier or crate — familiarise your pet with it before travel day. See <a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">airline crate rules</a> for sizing guidance.</p>"]
  ],
  related: [
    { name: "Bangkok to Pattaya with a pet", path: "/owning-a-pet-in-pattaya/bangkok-to-pattaya-with-pet.html", desc: "After import or visiting." },
    { name: "Pet relocation agents", path: "/pet-relocation/", desc: "Logistics specialists." },
    { name: "Getting to the vet", path: "/owning-a-pet-in-pattaya/getting-to-the-vet.html", desc: "Everyday transport options." },
    { name: "24-hour vets", path: "/pet-emergency/24-hour-vets-pattaya.html", desc: "When transport is urgent." }
  ]
}));

module.exports = pages;
