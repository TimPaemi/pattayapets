"use strict";
/* Cluster: Owning a pet in Pattaya */

const { article, hub } = require("../guidekit.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const CLUSTER = { name: "Owning a pet in Pattaya", path: "/owning-a-pet-in-pattaya/" };
const SUB = [GUIDES, CLUSTER];

const pages = [];

pages.push(hub({
  path: "/owning-a-pet-in-pattaya/",
  title: "Owning a pet in Pattaya | PattayaPets",
  desc: "What it is really like to own a pet in Pattaya: costs, hot-climate care, " +
    "pet-friendly housing, walking, registration and where to buy pet food.",
  crumb: "Owning a pet in Pattaya",
  breadcrumbs: [GUIDES],
  eyebrow: "Guide",
  h1: "Owning a pet in Pattaya",
  lede: "Pattaya is an easy place to own a pet &mdash; affordable care, an " +
    "outdoor life &mdash; once you have adjusted for the heat and the housing.",
  intro:
    "<p>Whether you have arrived with a pet, adopted one here, or are weighing it " +
    "up, these guides cover the practical side of day-to-day pet ownership in " +
    "Pattaya: what it costs, how the climate changes everything, finding housing " +
    "that allows pets, and the local rules. For trips within Thailand, see our guide to " +
    "<a href=\"/owning-a-pet-in-pattaya/travelling-in-thailand.html\">travelling with a pet</a>.</p>",
  groups: [
    {
      title: "The essentials",
      cards: [
        { name: "What it costs", desc: "A realistic monthly budget for a pet in Pattaya.", path: "/owning-a-pet-in-pattaya/cost-of-owning-a-pet.html" },
        { name: "Hot-climate pet care", desc: "The single biggest adjustment: keeping a pet safe in the heat.", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html" },
        { name: "Pet-friendly housing", desc: "Renting and living with a pet when many condos say no.", path: "/owning-a-pet-in-pattaya/pet-friendly-housing.html" }
      ]
    },
    {
      title: "Everyday life",
      cards: [
        { name: "Where to walk your dog", desc: "Building a safe, cool-hours walking routine.", path: "/owning-a-pet-in-pattaya/where-to-walk-your-dog.html" },
        { name: "Where to buy pet food", desc: "Pet shops, supermarkets, online and special diets.", path: "/owning-a-pet-in-pattaya/where-to-buy-pet-food.html" },
        { name: "Dog registration & the law", desc: "Rabies vaccination law and local dog registration.", path: "/owning-a-pet-in-pattaya/dog-registration-thailand.html" },
        { name: "Microchipping your pet", desc: "The best route home for a lost pet, and keeping details current.", path: "/owning-a-pet-in-pattaya/microchipping-your-pet.html" },
        { name: "Pet sitters & dog walkers", desc: "Finding reliable care for when you are away or at work.", path: "/owning-a-pet-in-pattaya/pet-sitters-and-dog-walkers.html" },
        { name: "Getting to the vet", desc: "Pet transport options in Pattaya without a car.", path: "/owning-a-pet-in-pattaya/getting-to-the-vet.html" },
        { name: "Travelling in Thailand", desc: "Road trips, domestic flights and pet-friendly stays beyond Pattaya.", path: "/owning-a-pet-in-pattaya/travelling-in-thailand.html" }
      ]
    },
    {
      title: "Seasons and festivals",
      cards: [
        { name: "Songkran and your pet", desc: "Keeping animals safe and calm through the water festival.", path: "/owning-a-pet-in-pattaya/songkran-and-your-pet.html" },
        { name: "Rainy-season pet care", desc: "Walks, skin and ear health, floodwater and storm anxiety.", path: "/owning-a-pet-in-pattaya/rainy-season-pet-care.html" },
        { name: "Fireworks & noise-anxious pets", desc: "Helping a pet through fireworks, festivals and thunder.", path: "/owning-a-pet-in-pattaya/fireworks-and-noise-anxiety.html" }
      ]
    },
    {
      title: "Harder times",
      cards: [
        { name: "If your pet goes missing", desc: "A step-by-step plan for a lost dog or cat in Pattaya.", path: "/owning-a-pet-in-pattaya/lost-pet-pattaya.html" },
        { name: "Senior pet care", desc: "Caring well for an older pet in a hot climate.", path: "/owning-a-pet-in-pattaya/senior-pet-care.html" },
        { name: "End-of-life care", desc: "Compassionate guidance on saying goodbye.", path: "/owning-a-pet-in-pattaya/saying-goodbye.html" }
      ]
    }
  ],
  related: [
    { name: "Pet health in Pattaya", path: "/pet-health-pattaya/", desc: "Heartworm, ticks and tropical-climate risks." },
    { name: "Where to walk your dog", path: "/owning-a-pet-in-pattaya/where-to-walk-your-dog.html", desc: "Cool-hour walking routines." },
    { name: "Pet emergencies", path: "/pet-emergency/", desc: "24-hour vets and urgent hazards." },
    { name: "Getting to the vet", path: "/owning-a-pet-in-pattaya/getting-to-the-vet.html", desc: "Transport without a car." }
  ]
}));

function own(o) {
  return article({
    path: "/owning-a-pet-in-pattaya/" + o.slug + ".html",
    title: o.title, desc: o.desc, crumb: o.crumb, breadcrumbs: SUB,
    eyebrow: "Owning a pet in Pattaya",
    h1: o.h1, lede: o.lede, verify: o.verify,
    sections: o.sections, faqs: o.faqs,
    related: o.related || [
      { name: "Owning a pet in Pattaya", path: "/owning-a-pet-in-pattaya/", desc: "Back to the cluster hub." },
      { name: "Mobile & home-visit vets", path: "/mobile-vets/", desc: "Vets who come to you." },
      { name: "Pet health in Pattaya", path: "/pet-health-pattaya/", desc: "Preventive care and tropical risks." },
      { name: "Hot-climate pet care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", desc: "The climate basics every owner needs." }
    ]
  });
}

pages.push(own({
  slug: "cost-of-owning-a-pet", crumb: "What it costs",
  title: "The cost of owning a pet in Pattaya | PattayaPets",
  desc: "A realistic look at the monthly cost of owning a dog or cat in Pattaya — " +
    "food, vet care, preventatives, grooming and boarding.",
  h1: "What it costs to own a pet in Pattaya",
  lede: "The good news for pet owners: routine pet care in Pattaya is generally " +
    "affordable by Western standards. Here is where the money goes.",
  verify: "Costs are general orientation gathered in May 2026 and vary by your " +
    "pet, your choices and the provider. Use them to plan, not as fixed quotes.",
  sections: [
    { h: "The monthly running costs", html:
      "<p>A pet&rsquo;s ongoing budget in Pattaya is mostly:</p>" +
      "<ul><li><strong>Food</strong> &mdash; the biggest regular cost. " +
      "Supermarket brands are inexpensive; imported premium and prescription " +
      "diets cost more.</li>" +
      "<li><strong>Parasite prevention</strong> &mdash; year-round flea, tick " +
      "and worm control, which in this climate is not optional.</li>" +
      "<li><strong>Grooming</strong> &mdash; occasional for short-coated pets, " +
      "regular for long coats.</li>" +
      "<li><strong>Litter, treats and sundries</strong>.</li></ul>" },
    { h: "The occasional costs", html:
      "<ul><li><strong>Vaccinations and check-ups</strong> &mdash; annual, and " +
      "very reasonably priced at most Pattaya clinics.</li>" +
      "<li><strong>Boarding</strong> &mdash; if you travel, a daily rate per " +
      "pet.</li>" +
      "<li><strong>Unexpected vet treatment</strong> &mdash; the wildcard. " +
      "Routine care is cheap; a serious illness, surgery or a hospital stay is " +
      "not, and this is where <a href=\"/pet-insurance-thailand.html\">pet " +
      "insurance</a> or a savings buffer earns its place.</li></ul>" },
    { h: "The honest summary", html:
      "<p>Day to day, keeping a healthy pet in Pattaya costs noticeably less " +
      "than in most Western countries. The figure that derails budgets is never " +
      "the kibble &mdash; it is an unplanned medical bill. Build a buffer, or " +
      "insure, and the rest is comfortably manageable.</p>" }
  ],
  faqs: [
    ["Is vet care expensive in Pattaya?",
     "<p>Routine vet care — vaccinations, check-ups, basic treatment — is generally affordable by Western standards. Major treatment, surgery or a hospital stay is where costs climb &mdash; which is exactly what a savings buffer or insurance is for.</p>"],
    ["Should I get pet insurance in Thailand?",
     "<p>It depends on your finances and your pet. The case for it is the rare big bill, not the routine costs. See our guide to <a href=\"/pet-insurance-thailand.html\">pet insurance in Thailand</a>.</p>"]
  ],
  related: [
    { name: "Pet insurance in Thailand", path: "/pet-insurance-thailand.html", desc: "When insurance earns its place." },
    { name: "Pet health in Pattaya", path: "/pet-health-pattaya/", desc: "Preventive care and tropical risks." },
    { name: "Where to buy pet food", path: "/owning-a-pet-in-pattaya/where-to-buy-pet-food.html", desc: "The everyday running costs." },
    { name: "Boarding & daycare", path: "/boarding/", desc: "Travel costs when you are away." }
  ]
}));

pages.push(own({
  slug: "hot-climate-pet-care", crumb: "Hot-climate pet care",
  title: "Hot-climate pet care in Pattaya | PattayaPets",
  desc: "How to keep a dog or cat safe and comfortable in Pattaya's heat and " +
    "humidity — water, walk timing, cooling, paws, coat and parasites.",
  h1: "Hot-climate pet care",
  lede: "If you are new to the tropics, this is the adjustment that matters most. " +
    "Pattaya&rsquo;s heat is constant, and pets rely on you to manage it.",
  sections: [
    { h: "Water and shade, always", html:
      "<p>Fresh drinking water should be available everywhere your pet goes, " +
      "indoors and out, refreshed often. Indoors, give your pet a cool, shaded, " +
      "airy spot &mdash; tiled floors, a fan, or air-conditioning during the " +
      "worst heat. Outdoors, there must always be shade.</p>" },
    { h: "Walk in the cool hours", html:
      "<p>Walk dogs in <strong>early morning and after sunset</strong>, not " +
      "through the heat of the day. Test the pavement with the back of your " +
      "hand &mdash; if you cannot hold it there comfortably, it will burn paw " +
      "pads. Keep hot-weather walks shorter and steadier.</p>" },
    { h: "Never leave a pet in a hot space", html:
      "<p>Never leave a pet in a parked car, even briefly &mdash; it becomes " +
      "lethal astonishingly fast. The same caution applies to a sun-trapped " +
      "balcony or an unventilated room. <a href=\"/pet-emergency/heatstroke.html\">" +
      "Heatstroke</a> is the most common preventable pet emergency in Pattaya.</p>" },
    { h: "Coat, paws and parasites", html:
      "<p>Do not shave a double-coated dog down to the skin &mdash; the coat " +
      "also insulates against heat and protects from sun; a groomer can advise. " +
      "Watch paws on hot ground, rinse and dry skin folds to prevent " +
      "irritation, and keep <a href=\"/pet-emergency/ticks-and-fleas.html\">" +
      "parasite prevention</a> going all year, because in this climate it never " +
      "stops.</p>" },
    { h: "Watch the at-risk pets", html:
      "<p>Snub-nosed breeds, very young, elderly, overweight or thick-coated " +
      "pets cope worst with heat. If your pet is one of them, be extra " +
      "conservative with exercise and timing.</p>" }
  ],
  faqs: [
    ["Should I shave my dog for the Thai heat?",
     "<p>Not a double-coated breed down to the skin — the coat insulates and shields from sun. A groomer can tidy and thin a coat appropriately. Single-coated breeds are different; ask a groomer or vet what suits yours.</p>"],
    ["Does my cat need anything special in the heat?",
     "<p>Cats generally self-regulate well but still need constant water, shade and a cool indoor spot. Watch for excessive panting, which is abnormal in cats and a reason to see a vet.</p>"]
  ],
  related: [
    { name: "Heatstroke", path: "/pet-emergency/heatstroke.html", desc: "Recognising and preventing the emergency." },
    { name: "Ticks & fleas", path: "/pet-emergency/ticks-and-fleas.html", desc: "Year-round parasite prevention." },
    { name: "Pet emergencies", path: "/pet-emergency/", desc: "24-hour vets and urgent hazards." },
    { name: "Where to walk your dog", path: "/owning-a-pet-in-pattaya/where-to-walk-your-dog.html", desc: "Building a cool-hours routine." }
  ]
}));

pages.push(own({
  slug: "pet-friendly-housing", crumb: "Pet-friendly housing",
  title: "Pet-friendly housing in Pattaya | PattayaPets",
  desc: "Finding pet-friendly housing in Pattaya: why many condos say no, houses " +
    "versus condos, deposits, and what to confirm before you sign a lease.",
  h1: "Pet-friendly housing in Pattaya",
  lede: "Housing is one of the real challenges of pet ownership in Pattaya &mdash; " +
    "worth solving before you commit to a pet, or before you move.",
  sections: [
    { h: "The condo problem", html:
      "<p>Many Pattaya condominium buildings have <strong>no-pet rules</strong> " +
      "in their regulations. Crucially, a landlord&rsquo;s permission does not " +
      "override the building&rsquo;s rules &mdash; if the building forbids pets, " +
      "you can be required to leave. You need <strong>both</strong> the building " +
      "and the unit owner to allow pets, and you need it in writing.</p>" },
    { h: "Houses and villages versus condos", html:
      "<p>Stand-alone houses, townhouses and village-style rentals &mdash; common " +
      "in East Pattaya and the outer areas &mdash; are generally far easier with " +
      "pets than high-rise condos, and often come with a garden or yard. If a " +
      "pet is central to your life here, widening your search to houses is " +
      "usually the simplest fix.</p>" },
    { h: "What to confirm before you sign", html:
      "<ul><li>The <strong>building</strong> permits pets &mdash; see it in " +
      "writing.</li>" +
      "<li>Any <strong>size, breed or number limits</strong>.</li>" +
      "<li>Any <strong>pet deposit</strong> or extra cleaning charge.</li>" +
      "<li>Rules on <strong>shared areas</strong> &mdash; lifts, gardens, pool " +
      "decks.</li>" +
      "<li>That the pet permission is <strong>written into the lease</strong>.</li></ul>" },
    { h: "Think about the pet, not just the rules", html:
      "<p>Beyond permission, consider whether the home actually suits a pet: " +
      "ground-floor or easy access for a dog, somewhere shaded and safe outside, " +
      "good airflow or air-conditioning, and a walk route nearby. A technically " +
      "pet-friendly 20th-floor studio is still hard work with a big dog.</p>" }
  ],
  faqs: [
    ["Is it hard to rent with a pet in Pattaya?",
     "<p>Harder than many newcomers expect, because a lot of condo buildings ban pets outright. It is very manageable if you search specifically for pet-friendly buildings — or rent a house — and get the permission in writing.</p>"],
    ["Will I pay extra to rent with a pet?",
     "<p>Often there is a higher deposit or a pet/cleaning charge. Confirm it up front and have it written into the lease so there are no surprises later.</p>"]
  ],
  related: [
    { name: "Dog-friendly condos", path: "/dog-friendly-pattaya/condos.html", desc: "The condo side in detail." },
    { name: "Indoor or outdoor cats", path: "/cats/indoor-vs-outdoor-cats.html", desc: "Balconies and high-rise safety for cats." },
    { name: "What it costs to own a pet", path: "/owning-a-pet-in-pattaya/cost-of-owning-a-pet.html", desc: "Deposits, rent and the wider budget." },
    { name: "Browse areas", path: "/directory.html", desc: "Get to know Pattaya's neighbourhoods." }
  ]
}));

pages.push(own({
  slug: "where-to-walk-your-dog", crumb: "Where to walk your dog",
  title: "Where to walk your dog in Pattaya | PattayaPets",
  desc: "Building a safe, cool-hours dog-walking routine in Pattaya — the beach, " +
    "quiet sois, green space, and managing heat and street dogs.",
  h1: "Where and how to walk your dog in Pattaya",
  lede: "A good walking routine in Pattaya is less about finding a perfect park " +
    "and more about timing, route and a little local knowledge.",
  sections: [
    { h: "Timing beats location", html:
      "<p>The most important decision is <em>when</em>. Walk in the " +
      "<strong>early morning and after sunset</strong>, when the air, the sun " +
      "and the pavement are all kinder. A modest route at the right hour beats a " +
      "great route in the midday heat every time.</p>" },
    { h: "Good options", html:
      "<ul><li><strong>Quiet residential sois</strong> near home &mdash; the " +
      "practical everyday walk.</li>" +
      "<li><strong>The beach</strong> at cool hours, especially the calmer " +
      "Jomtien and Dongtan stretches &mdash; see " +
      "<a href=\"/dog-friendly-pattaya/beaches.html\">dog-friendly beaches</a>.</li>" +
      "<li><strong>Green and open spaces</strong>, where dogs are permitted.</li>" +
      "<li><strong>Pratumnak hill</strong>, for leafier, quieter roads.</li></ul>" +
      "<p>For dog-friendly parks and green space specifically, see " +
      "<a href=\"/dog-friendly-pattaya/parks.html\">parks and green space</a> " +
      "in the dog-friendly cluster.</p>" },
    { h: "Walk safely", html:
      "<p>Keep your dog leashed, carry water, and learn the routes around you. " +
      "Be aware of <a href=\"/pet-emergency/street-dog-encounters.html\">" +
      "free-roaming street dogs</a> &mdash; give groups space and stay calm. And " +
      "always keep an eye on the heat: cut a walk short if your dog is " +
      "struggling.</p>" }
  ],
  faqs: [
    ["Can I walk my dog on the beach in Pattaya?",
     "<p>Yes, particularly on the quieter Jomtien and Dongtan stretches and at cool hours. Keep your dog leashed, always pick up, and mind hot sand. See our dog-friendly beaches guide.</p>"],
    ["How do I handle street dogs while walking my dog?",
     "<p>Keep your dog close and leashed, give groups of street dogs a wide berth, and stay calm rather than confrontational. Our guide to street-dog encounters covers it in full.</p>"]
  ],
  related: [
    { name: "Dog-friendly beaches", path: "/dog-friendly-pattaya/beaches.html", desc: "Cool-hour walks on the sand." },
    { name: "Places to walk", path: "/dog-friendly-pattaya/parks.html", desc: "Beaches, sois and green space." },
    { name: "Street-dog encounters", path: "/pet-emergency/street-dog-encounters.html", desc: "Walking safely around soi dogs." },
    { name: "Hot-climate pet care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", desc: "Timing and heat awareness." }
  ]
}));

pages.push(own({
  slug: "dog-registration-thailand", crumb: "Registration & the law",
  title: "Dog registration & pet law in Thailand | PattayaPets",
  desc: "Pet law for owners in Pattaya: the legal requirement to vaccinate " +
    "against rabies, local dog registration, and responsible-ownership rules.",
  h1: "Dog registration and the law",
  lede: "Thailand has real legal duties for pet owners &mdash; rabies vaccination " +
    "chief among them &mdash; and some local registration rules on top.",
  verify: "Pet law and local registration rules change and vary by municipality. " +
    "This is general orientation, last reviewed May 2026 — confirm the current " +
    "rules with your local district office and a vet.",
  sections: [
    { h: "Rabies vaccination is the law", html:
      "<p>Under Thailand&rsquo;s rabies legislation, dogs and cats must be " +
      "<strong>vaccinated against rabies</strong> and kept up to date. This is " +
      "not just good practice &mdash; it is a legal duty, and it protects your " +
      "pet, your family and the community. Keep the certificates.</p>" },
    { h: "Local dog registration", html:
      "<p>Some Thai municipalities operate <strong>dog registration or " +
      "licensing</strong> schemes, and there have been moves toward wider " +
      "registration and microchipping of dogs and cats. What applies to you " +
      "depends on your local district. A working " +
      "<a href=\"/owning-a-pet-in-pattaya/microchipping-your-pet.html\">microchip</a> " +
      "with up-to-date contact details is increasingly part of that picture. Ask at your local municipal or district " +
      "office, or ask your vet &mdash; vets generally know the current local " +
      "position.</p>" },
    { h: "Responsible ownership", html:
      "<p>Beyond paperwork, the everyday law-and-good-neighbour basics apply: " +
      "keep your dog under control in public, do not let it roam or become a " +
      "nuisance, clean up after it, and make sure it cannot stray. Responsible " +
      "ownership is also what keeps dogs welcome in Pattaya&rsquo;s cafes, " +
      "condos and beaches.</p>" }
  ],
  faqs: [
    ["Is rabies vaccination legally required for pets in Thailand?",
     "<p>Yes. Thai law requires dogs and cats to be vaccinated against rabies and kept current. Keep the vaccination certificates, and use a vet to stay on schedule.</p>"],
    ["Do I have to register my dog in Pattaya?",
     "<p>Registration and licensing schemes vary by municipality, and rules have been evolving. Check the current requirement with your local district office or your vet, who will know the local position.</p>"]
  ],
  related: [
    { name: "Microchipping your pet", path: "/owning-a-pet-in-pattaya/microchipping-your-pet.html", desc: "Registration schemes often tie to microchips." },
    { name: "Dog vaccinations & parasites", path: "/dogs/dog-vaccinations-thailand.html", desc: "Rabies vaccination and the booster schedule." },
    { name: "Dog-friendly Pattaya", path: "/dog-friendly-pattaya/", desc: "Responsible ownership keeps dogs welcome out and about." },
    { name: "Street-dog encounters", path: "/pet-emergency/street-dog-encounters.html", desc: "Why registration and control matter on walks." }
  ]
}));

pages.push(own({
  slug: "where-to-buy-pet-food", crumb: "Where to buy pet food",
  title: "Where to buy pet food in Pattaya | PattayaPets",
  desc: "Where to buy pet food and supplies in Pattaya — pet shops, supermarkets, " +
    "online delivery, and finding premium and prescription diets.",
  h1: "Where to buy pet food in Pattaya",
  lede: "Feeding a pet in Pattaya is easy for everyday food, and a little more " +
    "planning for premium or prescription diets.",
  sections: [
    { h: "The everyday options", html:
      "<ul><li><strong>Pet shops</strong> &mdash; dedicated stores carry the " +
      "widest range of food, treats and supplies, and staff can advise. See the " +
      "<a href=\"/pet-shops/\">pet shops directory</a>.</li>" +
      "<li><strong>Supermarkets and hypermarkets</strong> &mdash; the big stores " +
      "stock mainstream dog and cat food, litter and basics, convenient on a " +
      "normal shop.</li>" +
      "<li><strong>Vet clinics</strong> &mdash; many <a href=\"/vets/\">vets</a> " +
      "sell food, especially prescription diets.</li></ul>" },
    { h: "Online and delivery", html:
      "<p>Thailand has well-established online pet retailers and the major " +
      "marketplace apps carry pet food with home delivery &mdash; useful for " +
      "heavy bags and for brands the shops near you do not stock. Delivery to " +
      "condos and houses across Pattaya is straightforward.</p>" },
    { h: "Premium, imported and prescription diets", html:
      "<p>Mainstream brands are easy to find. For a specific imported premium " +
      "brand, or a <strong>prescription diet</strong> your vet has recommended, " +
      "availability varies &mdash; ask your vet and your pet shop, and consider " +
      "buying a steady supply online so you never run out. If you are switching " +
      "your pet&rsquo;s food, do it gradually.</p>" }
  ],
  faqs: [
    ["Can I get my usual brand of pet food in Pattaya?",
     "<p>Mainstream brands are widely available. For a specific imported or premium brand, check pet shops and online retailers — and if your pet is settled on something particular, keep a buffer stock so a temporary shortage is not a problem.</p>"],
    ["Where do I get a prescription diet?",
     "<p>Through vet clinics and some pet shops. Ask your vet where to buy the diet they have recommended, and whether it can be ordered online for regular delivery.</p>"]
  ],
  related: [
    { name: "Pet shops in Pattaya", path: "/pet-shops/", desc: "The directory of pet supply shops." },
    { name: "What it costs to own a pet", path: "/owning-a-pet-in-pattaya/cost-of-owning-a-pet.html", desc: "Food and litter in the wider budget." },
    { name: "Cats in Pattaya", path: "/cats/", desc: "Cat-specific food and litter tips." },
    { name: "Dogs in Pattaya", path: "/dogs/", desc: "Dog food brands and diet basics." }
  ]
}));

module.exports = pages;
