"use strict";
/* Shelter evidence index and evidence-first ground-transport guides. */

const { article } = require("../guidekit.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const ADOPT = { name: "Adopt a pet in Pattaya", path: "/adopt-a-pet-pattaya/" };
const OWNING = { name: "Owning a pet in Pattaya", path: "/owning-a-pet-in-pattaya/" };

const SHELTER_ROWS = [
  ["Hope for Strays", "/adopt-a-pet-pattaya/hope-for-strays.html", "Current first-party shelter, adoption and contact pages"],
  ["Animal Army", "/adopt-a-pet-pattaya/animal-army-foundation.html", "Current first-party rescue, adoption and contact pages"],
  ["Pattaya Street Dogs / K9aid", "/adopt-a-pet-pattaya/pattaya-street-dogs-k9aid.html", "Current project page; adoption availability not stated"],
  ["Ady G. Second Chance Pattaya", "/adopt-a-pet-pattaya/ady-g-second-chance-pattaya.html", "Current first-party sanctuary, adoption and contact pages"],
  ["Soi Dog Foundation", "/adopt-a-pet-pattaya/soi-dog-foundation.html", "Current Phuket adoption programme; not a Pattaya shelter"],
  ["Dog & Cat Rescue Pattaya", "/adopt-a-pet-pattaya/dog-cat-rescue-pattaya.html", "Current operation and adoption status not independently verified"],
  ["Malee's Animal Shelter", "/adopt-a-pet-pattaya/malees-animal-shelter.html", "Accessible first-party description is dated February 2020; current status unknown"]
];

function shelterTableHtml() {
  return '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
    '<th scope="col">Organisation route</th><th scope="col">Evidence status on 1 August 2026</th>' +
    "</tr></thead><tbody>" + SHELTER_ROWS.map(function (r) {
      return '<tr><th scope="row"><a href="' + r[1] + '">' + r[0] +
        "</a></th><td>" + r[2] + "</td></tr>";
    }).join("") + "</tbody></table></div>";
}

const pages = [];

pages.push(article({
  path: "/adopt-a-pet-pattaya/animal-shelters-pattaya.html",
  title: "Pattaya Animal Shelters | Evidence Status | PattayaPets",
  desc: "Pattaya-area rescue and adoption routes with current first-party evidence, including organisations whose operation or adoption availability remains unknown.",
  crumb: "Animal shelter evidence",
  breadcrumbs: [GUIDES, ADOPT],
  eyebrow: "Adopt a pet in Pattaya",
  h1: "Pattaya animal shelter and rescue evidence",
  lede: "This is an evidence index, not a claim that every named organisation currently operates, accepts visitors or has animals available.",
  updated: "2026-08-01",
  verify: "Each dedicated page follows the available first-party sources and names what could not be verified. PattayaPets is not affiliated with the organisations and receives no payment from them.",
  sections: [
    { h: "Evidence status", html: shelterTableHtml() },
    { h: "What each status means", html:
      "<ul><li><strong>Current first-party page:</strong> the organisation presently publishes relevant " +
      "information on its own domain. Availability and terms still require direct confirmation.</li>" +
      "<li><strong>Current project page, availability unstated:</strong> activity is described, but no " +
      "current adoptable-animal or process claim is made.</li>" +
      "<li><strong>Status unknown:</strong> the accessible source is old or not independently readable. " +
      "The route is retained to document that gap, not to recommend a visit or donation.</li></ul>" },
    { h: "Before applying, visiting or donating", html:
      "<p>Use the organisation&rsquo;s current official channel to confirm its legal or organisational name, " +
      "location, appointment policy, current programme, animal availability, agreement, fees or donation terms " +
      "and receipt. Do not send money or travel because a directory page exists.</p>" },
    { h: "Before taking responsibility for an animal", html:
      "<p>Confirm written housing permission and obtain the animal&rsquo;s identity and available health and " +
      "behaviour records. Ask a qualified veterinarian to interpret those records and advise on the individual " +
      "animal. If an international move may follow, check the destination authority and Thai DLD process before committing.</p>" }
  ],
  faqs: [
    ["Does this page prove every organisation is operating?", "<p>No. The table explicitly distinguishes current first-party evidence from an unknown current status.</p>"],
    ["Does a current adoption page guarantee an animal is available?", "<p>No. Confirm the specific animal and process directly with the organisation.</p>"],
    ["Which listed organisation is in Phuket?", "<p>Soi Dog Foundation&rsquo;s current sanctuary and adoption programme are in Phuket; this page does not represent it as a Pattaya shelter.</p>"],
    ["Does PattayaPets coordinate visits or donations?", "<p>No. Use the first-party channels followed on each organisation page.</p>"]
  ],
  related: [
    { name: "Adoption hub", path: "/adopt-a-pet-pattaya/", desc: "Current evidence and named gaps." },
    { name: "Fostering", path: "/adopt-a-pet-pattaya/fostering.html", desc: "Temporary-care planning." },
    { name: "Pet-friendly housing", path: "/owning-a-pet-in-pattaya/pet-friendly-housing.html", desc: "Written permission before placement." }
  ]
}));

pages.push(article({
  path: "/owning-a-pet-in-pattaya/bangkok-to-pattaya-with-pet.html",
  title: "Bangkok to Pattaya With a Pet: Options | PattayaPets",
  desc: "How to verify a Bangkok-to-Pattaya pet transfer after DLD clearance: arrival point, vehicle, carrier, quote, waiting time and provider scope.",
  crumb: "Bangkok to Pattaya with a pet",
  breadcrumbs: [GUIDES, OWNING],
  eyebrow: "Owning a pet in Pattaya",
  h1: "Bangkok to Pattaya with a pet",
  lede: "Match the ground-transfer booking to the actual airport, DLD clearance process, animal and carrier; do not plan from an assumed drive time or taxi policy.",
  updated: "2026-08-01",
  verify: "No travel time, fare or driver acceptance is guaranteed here. Confirm DLD clearance with the relevant station and obtain written transport terms for the actual journey.",
  sections: [
    { h: "Confirm the arrival and clearance point first", html:
      '<p>Current official material includes <a href="https://image.mfa.go.th/mfa/0/91fPdh6NtO/About-Thailand/Bringing_Pets_to_Thailand/All_Airports_-_Instructions_for_Bringing_Dog-Cat-Rabbit_into_Thailand_from_the_USA_%28Revised_30Jan2025%29.pdf" target="_blank" rel="noopener noreferrer">' +
      "Thai government instructions revised 30 January 2025</a>. Follow the requirements issued " +
      "for the actual route and mode; the linked document is expressly for dogs, cats and rabbits arriving from the United States.</p>" +
      "<p><strong>Named gap:</strong> this review did not locate current DLD instructions establishing a " +
      "passenger or cargo pet-clearance process at U-Tapao. Do not infer that it can or cannot clear a pet; " +
      "ask DLD before booking a flight or naming an entry point on an application.</p>" },
    { h: "Current ground-transport starting points", html:
      "<p>Two providers&rsquo; own sites currently advertise nationwide Thai ground transport: " +
      '<a href="https://relo4paws.com/" target="_blank" rel="noopener noreferrer">Relo4Paws</a> and ' +
      '<a href="https://www.petrelocationthailand.com/service/pick-up-delivery-car/" target="_blank" rel="noopener noreferrer">Pet Relocation Thailand</a>. ' +
      "These links verify only what the businesses publish. PattayaPets did not verify a quote, availability, " +
      "licence, insurance, driver, vehicle or completed journey and does not endorse either provider.</p>" },
    { h: "Taxi and app limits", html:
      '<p>Airports of Thailand publishes a <a href="https://suvarnabhumi.airportthai.co.th/service/transportation/detail/304" target="_blank" rel="noopener noreferrer">Suvarnabhumi public-taxi location</a>, ' +
      "but the page does not publish a pet-acceptance policy. Do not infer acceptance.</p>" +
      '<p>Grab&rsquo;s current Thailand transport page lists <a href="https://www.grab.com/th/transport/" target="_blank" rel="noopener noreferrer">GrabPet</a>, ' +
      "while its public service guide describes Bangkok and vicinity. This review did not verify GrabPet " +
      "coverage in Pattaya or for the exact airport journey. Check the app at the pickup point and keep a confirmed backup.</p>" },
    { h: "Written booking fields", html:
      "<ul><li>Airport terminal or cargo facility, clearance completion point and destination</li>" +
      "<li>Date window and how DLD, customs or airline delay is charged</li><li>Animal species, number, size and individual handling needs</li>" +
      "<li>Carrier&rsquo;s external dimensions and whether it fits without folding or unsafe placement</li>" +
      "<li>Air-conditioning, ventilation, restraint, cleaning and emergency plan</li>" +
      "<li>Total price, tolls, parking, waiting, cancellation and payment recipient</li></ul>" },
    { h: "Animal-specific advice", html:
      "<p>Use a secure, ventilated carrier or other restraint appropriate to the animal and vehicle. Ask a " +
      "qualified veterinarian about an individual animal&rsquo;s fitness to travel, medication or symptoms. This " +
      "page does not recommend sedation or a fixed break schedule.</p>" },
    { h: "Sources followed", html:
      "<ul>" +
      '<li><a href="https://image.mfa.go.th/mfa/0/91fPdh6NtO/About-Thailand/Bringing_Pets_to_Thailand/All_Airports_-_Instructions_for_Bringing_Dog-Cat-Rabbit_into_Thailand_from_the_USA_%28Revised_30Jan2025%29.pdf" target="_blank" rel="noopener noreferrer">Thai government pet-import instructions (revised 30 January 2025)</a>.</li>' +
      '<li><a href="https://suvarnabhumi.airportthai.co.th/service/transportation/detail/304" target="_blank" rel="noopener noreferrer">Airports of Thailand public-taxi page</a>.</li>' +
      '<li><a href="https://www.grab.com/th/transport/" target="_blank" rel="noopener noreferrer">Grab Thailand transport page</a> and <a href="https://www.grab.com/th/en/blog/grabpet/" target="_blank" rel="noopener noreferrer">GrabPet public guide</a>.</li>' +
      '<li><a href="https://relo4paws.com/" target="_blank" rel="noopener noreferrer">Relo4Paws</a> and <a href="https://www.petrelocationthailand.com/service/pick-up-delivery-car/" target="_blank" rel="noopener noreferrer">Pet Relocation Thailand</a> first-party service pages.</li>' +
      "</ul><p>Checked 1 August 2026.</p>" }
  ],
  faqs: [
    ["How long does Bangkok to Pattaya take with a pet?", "<p>This page does not publish a fixed time. Ask the provider for a route-specific estimate and how clearance, traffic and stops affect it.</p>"],
    ["Can I take a pet in an airport public taxi?", "<p>The AOT taxi page reviewed does not state a pet policy. Obtain driver or operator agreement and keep a confirmed alternative.</p>"],
    ["Is GrabPet available in Pattaya?", "<p>Current Grab material lists GrabPet, but the public service guide describes Bangkok and vicinity. Pattaya availability was not verified; check the app for the exact pickup and time.</p>"],
    ["Can U-Tapao clear an imported pet?", "<p>This review did not find current DLD instructions that establish the answer. Confirm with DLD before booking or naming the entry point.</p>"],
    ["Does PattayaPets endorse the linked transfer providers?", "<p>No. Their own pages verify advertised scope only; availability and all contract fields still need direct verification.</p>"]
  ],
  related: [
    { name: "Arriving at Suvarnabhumi", path: "/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html", desc: "DLD clearance on arrival." },
    { name: "Pet taxi in Pattaya", path: "/owning-a-pet-in-pattaya/pet-taxi-pattaya.html", desc: "Local transport verification." },
    { name: "Pet relocation agents", path: "/pet-relocation/", desc: "Business evidence directory." }
  ]
}));

pages.push(article({
  path: "/owning-a-pet-in-pattaya/pet-taxi-pattaya.html",
  title: "Pet Taxi in Pattaya | Verify Current Transport | PattayaPets",
  desc: "How to verify a current Pattaya pet taxi, ride-app or relocation transfer: coverage, vehicle, carrier fit, quote, delay and emergency terms.",
  crumb: "Pet taxi in Pattaya",
  breadcrumbs: [GUIDES, OWNING],
  eyebrow: "Owning a pet in Pattaya",
  h1: "Pet taxi and private pet transport in Pattaya",
  lede: "PattayaPets has not verified a city-wide pet-taxi operator or guaranteed on-demand service; it provides current first-party leads and a booking checklist.",
  updated: "2026-08-01",
  verify: "A provider&rsquo;s live service page does not prove availability for a particular animal, route or time. Obtain a written booking and keep an alternative.",
  sections: [
    { h: "Verified publication, not verified booking", html:
      "<p><a href=\"https://relo4paws.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Relo4Paws</a> " +
      "currently advertises pet-taxi transport anywhere in Thailand. " +
      "<a href=\"https://www.petrelocationthailand.com/service/pick-up-delivery-car/\" target=\"_blank\" rel=\"noopener noreferrer\">Pet Relocation Thailand</a> " +
      "currently advertises door-to-door and long-distance ground transport across Thailand. " +
      "PattayaPets did not test either service, verify licensing or insurance, obtain a quote, or confirm a Pattaya vehicle.</p>" },
    { h: "Ride-app boundary", html:
      "<p>Grab&rsquo;s current Thailand transport page lists GrabPet. Its public GrabPet guide describes Bangkok " +
      "and vicinity, so this review cannot claim Pattaya coverage. A standard ride category is not a pet policy. " +
      "Check the exact product offered in the app and obtain driver acceptance before pickup.</p>" },
    { h: "Booking checklist", html:
      "<ul><li>Pickup, destination, date window and required arrival time</li><li>Animal species, number, size and individual needs</li>" +
      "<li>Carrier dimensions, vehicle cargo layout, ventilation and restraint</li><li>Whether the owner travels with the animal</li>" +
      "<li>Total price, tolls, parking, waiting, cleaning, late hours and cancellation</li>" +
      "<li>Delay plan, driver contact and a backup vehicle</li></ul>" },
    { h: "Emergency boundary", html:
      "<p>A transport listing is not veterinary triage. Contact a qualified veterinarian or animal hospital " +
      "for clinical advice, then arrange transport. Ask a vet about an individual animal&rsquo;s fitness to travel " +
      "or medication; this page does not recommend treatment or sedation.</p>" },
    { h: "Sources followed", html:
      "<ul>" +
      '<li><a href="https://relo4paws.com/" target="_blank" rel="noopener noreferrer">Relo4Paws first-party service page</a>.</li>' +
      '<li><a href="https://www.petrelocationthailand.com/service/pick-up-delivery-car/" target="_blank" rel="noopener noreferrer">Pet Relocation Thailand first-party ground-transport page</a>.</li>' +
      '<li><a href="https://www.grab.com/th/transport/" target="_blank" rel="noopener noreferrer">Grab Thailand transport page</a> and <a href="https://www.grab.com/th/en/blog/grabpet/" target="_blank" rel="noopener noreferrer">GrabPet public guide</a>.</li>' +
      "</ul><p>Checked 1 August 2026.</p>" }
  ],
  faqs: [
    ["Is there a verified city-wide Pattaya pet taxi?", "<p>Not in this review. The page links businesses advertising nationwide service, but it does not verify Pattaya availability for a specific booking.</p>"],
    ["Can I book GrabPet in Pattaya?", "<p>Pattaya coverage was not verified from the public source. Check the exact product in the app for the pickup point and time.</p>"],
    ["How much does a Pattaya pet taxi cost?", "<p>No current market-wide or route-specific figure is published here. Obtain an itemised written quote.</p>"],
    ["Does PattayaPets verify the provider&rsquo;s licence or insurance?", "<p>No. Those are named verification fields for the customer to request from the contracting business.</p>"],
    ["Can a pet taxi replace veterinary emergency advice?", "<p>No. Contact a qualified veterinarian or animal hospital for clinical advice, then arrange suitable transport.</p>"]
  ],
  related: [
    { name: "Bangkok to Pattaya with a pet", path: "/owning-a-pet-in-pattaya/bangkok-to-pattaya-with-pet.html", desc: "Airport-transfer verification." },
    { name: "Pet relocation agents", path: "/pet-relocation/", desc: "Business evidence directory." },
    { name: "Getting to a vet", path: "/owning-a-pet-in-pattaya/getting-to-the-vet.html", desc: "Local transport planning." },
    { name: "Pet emergencies", path: "/pet-emergency/", desc: "General emergency orientation." }
  ]
}));

module.exports = pages;
