"use strict";
/* Cluster: Owning a pet in Pattaya */

const { article, hub } = require("../guidekit.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const CLUSTER = { name: "Owning a pet in Pattaya", path: "/owning-a-pet-in-pattaya/" };
const SUB = [GUIDES, CLUSTER];

const pages = [];

pages.push(hub({
  path: "/owning-a-pet-in-pattaya/",
  title: "Owning a Pet in Pattaya | Costs, Housing & Heat | PattayaPets",
  image: "/assets/img/og-owning.png",
  updated: "2026-06-04",
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
    "that allows pets, and the local rules. Save " +
    '<a href="/pet-emergency/24-hour-vets-pattaya.html">24-hour vets</a> in your phone, ' +
    "and read " +
    '<a href="/owning-a-pet-in-pattaya/microchipping-your-pet.html">microchipping</a> ' +
    "early. For trips within Thailand, see " +
    "<a href=\"/owning-a-pet-in-pattaya/travelling-in-thailand.html\">travelling with a pet</a>. " +
    "Relocating? Pair this hub with " +
    '<a href="https://pattayavisahelp.com/" target="_blank" rel="noopener noreferrer">' +
    "Pattaya Visa Help</a> and pet-friendly rentals on " +
    '<a href="https://pattayastream.com/" target="_blank" rel="noopener noreferrer">' +
    "Pattaya Villa Stream</a>.</p>",
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
        { name: "Pet taxi Pattaya", desc: "Airport runs, vet trips and private pet transport.", path: "/owning-a-pet-in-pattaya/pet-taxi-pattaya.html" },
        { name: "Bangkok to Pattaya with a pet", desc: "Road transfer after import or from the airports.", path: "/owning-a-pet-in-pattaya/bangkok-to-pattaya-with-pet.html" },
        { name: "Vet costs in Pattaya", desc: "Typical fees and how to budget.", path: "/owning-a-pet-in-pattaya/vet-costs-pattaya.html" },
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
    { name: "Microchipping your pet", path: "/owning-a-pet-in-pattaya/microchipping-your-pet.html", desc: "Essential ID for any pet in Pattaya." },
    { name: "Pet-friendly housing", path: "/owning-a-pet-in-pattaya/pet-friendly-housing.html", desc: "Renting and living with a pet here." },
    { name: "Hot-climate pet care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", desc: "The climate basics every owner needs." }
  ]
}));

function own(o) {
  return article({
    path: "/owning-a-pet-in-pattaya/" + o.slug + ".html",
    title: o.title, desc: o.desc, crumb: o.crumb, breadcrumbs: SUB,
    eyebrow: "Owning a pet in Pattaya",
    h1: o.h1, lede: o.lede, verify: o.verify,
    updated: o.updated || "2026-06-01",
    sections: o.sections, faqs: o.faqs,
    related: o.related || [
      { name: "Hot-climate pet care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", desc: "The climate basics every owner needs." },
      { name: "Pet health in Pattaya", path: "/pet-health-pattaya/", desc: "Preventive care and tropical risks." },
      { name: "Pet emergencies", path: "/pet-emergency/", desc: "24-hour vets and urgent hazards." },
      { name: "Where to walk your dog", path: "/owning-a-pet-in-pattaya/where-to-walk-your-dog.html", desc: "Building a safe daily routine." }
    ]
  });
}

pages.push(own({
  slug: "cost-of-owning-a-pet", crumb: "What it costs",
  title: "Cost of Owning a Pet in Pattaya | Monthly Budget Guide | PattayaPets",
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
      "insure, and the rest is comfortably manageable.</p>" },
    { h: "Sample monthly budgets", html:
      "<p>Figures below are <strong>orientation only</strong> (May 2026) &mdash; " +
      "your pet, brand choices and clinic will shift them:</p>" +
      "<ul><li><strong>Small cat, indoor, healthy:</strong> food and litter often " +
      "the main line items; add year-round parasite prevention and an annual vet " +
      "visit.</li>" +
      "<li><strong>Medium dog, active:</strong> food scales with weight; grooming " +
      "depends on coat; factor in monthly preventatives and occasional boarding " +
      "if you travel.</li>" +
      "<li><strong>Senior or chronic condition:</strong> medication and more " +
      "frequent vet checks dominate &mdash; see " +
      "<a href=\"/owning-a-pet-in-pattaya/senior-pet-care.html\">senior pet care</a>.</li></ul>" +
      "<p>Compare food prices in our " +
      "<a href=\"/owning-a-pet-in-pattaya/where-to-buy-pet-food.html\">where to buy " +
      "pet food</a> guide and shop around before assuming imported brands are " +
      "mandatory.</p>" },
    { h: "One-off and relocation costs", html:
      "<p>Beyond monthly spend, budget for:</p>" +
      "<ul><li><strong>Setup:</strong> carrier, bowls, bed, lead, initial " +
      "vaccinations and sterilisation if not done by a rescue.</li>" +
      "<li><strong>Housing:</strong> pet deposits or higher rent &mdash; " +
      "<a href=\"/owning-a-pet-in-pattaya/pet-friendly-housing.html\">pet-friendly housing</a>.</li>" +
      "<li><strong>Leaving Thailand:</strong> export health certificates, titer " +
      "tests and airline fees can run to tens of thousands of baht &mdash; start " +
      "early via " +
      "<a href=\"/take-pet-out-of-thailand/export-process.html\">export process</a>.</li>" +
      "<li><strong>Importing with you:</strong> if you arrived with a pet, you " +
      "already know that side can dwarf a year of kibble.</li></ul>" }
  ],
  faqs: [
    ["Is vet care expensive in Pattaya?",
     "<p>Routine vet care — vaccinations, check-ups, basic treatment — is generally affordable by Western standards. Major treatment, surgery or a hospital stay is where costs climb &mdash; which is exactly what a savings buffer or insurance is for.</p>"],
    ["Should I get pet insurance in Thailand?",
     "<p>It depends on your finances and your pet. The case for it is the rare big bill, not the routine costs. See our guide to <a href=\"/pet-insurance-thailand.html\">pet insurance in Thailand</a>.</p>"],
    ["How much should I budget monthly for a dog or cat?",
     "<p>Food, flea prevention and routine vet care are the steady costs — often a few thousand baht a month for a medium dog, less for a cat. Build a separate buffer for emergencies and boarding.</p>"],
    ["Are vet prices higher for expats?",
     "<p>Reputable clinics generally quote the same fees regardless of nationality. Ask for an estimate before non-routine treatment and keep vaccination records so you are not paying to repeat work unnecessarily.</p>"],
    ["What unexpected costs catch new owners out?",
     "<p>Pet-friendly housing deposits, air-conditioned transport, grooming in the humid season, and export paperwork if you leave Thailand are common surprises — plan them early if they apply to you.</p>"],
    ["How much does boarding cost when I travel?",
     "<p>Daily boarding rates vary by facility and room type — browse the <a href=\"/boarding/\">boarding directory</a> and book early in peak season. Home visits and pet sitters are alternatives for nervous animals.</p>"],
    ["Is grooming a big line item in Pattaya humidity?",
     "<p>Short coats need occasional baths; long coats and breeds with skin folds may need professional grooming every few weeks in the humid season. See <a href=\"/groomers/\">groomers</a> for options.</p>"],
    ["Should I keep a separate emergency fund?",
     "<p>Yes — many owners aim for enough to cover at least one serious vet hospitalisation. That matters more than premium kibble brand choices.</p>"]
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
  title: "Hot-Climate Pet Care Pattaya | Heatstroke, Walks & Paw Safety | PattayaPets",
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
      "conservative with exercise and timing. Dog owners choosing a breed should " +
      "read <a href=\"/dogs/choosing-a-dog-for-the-climate.html\">choosing a dog " +
      "for the climate</a>.</p>" },
    { h: "Condos, balconies and power cuts", html:
      "<p>High-rise living is common in Pattaya. Check balcony mesh and gaps " +
      "cats can slip through; dogs need shade on terrace floors that heat up by " +
      "mid-morning. If your building loses power in hot season, have a plan &mdash; " +
      "a neighbour with AC, boarding, or a pet sitter &mdash; rather than leaving a " +
      "pet in a closed unit. Indoor-only cats still need airflow; a fan alone may " +
      "not be enough when humidity is high.</p>" +
      "<p>After beach or pool visits, rinse salt from coats and dry ears to prevent " +
      "skin and ear problems aggravated by heat &mdash; see " +
      "<a href=\"/pet-health-pattaya/skin-and-ear-problems.html\">skin &amp; ear problems</a>.</p>" }
  ],
  faqs: [
    ["Should I shave my dog for the Thai heat?",
     "<p>Not a double-coated breed down to the skin — the coat insulates and shields from sun. A groomer can tidy and thin a coat appropriately. Single-coated breeds are different; ask a groomer or vet what suits yours.</p>"],
    ["Does my cat need anything special in the heat?",
     "<p>Cats generally self-regulate well but still need constant water, shade and a cool indoor spot. Watch for excessive panting, which is abnormal in cats and a reason to see a vet.</p>"],
    ["Should I leave the AC on for my pet when I am out?",
     "<p>If your home gets very hot without it, yes — a fan alone may not be enough in midday humidity. Ensure fresh water and that the pet cannot block the AC unit or chew cables.</p>"],
    ["Can I walk my dog at midday if I carry water?",
     "<p>Water helps but does not stop heatstroke on hot pavement or in full sun. Early morning and evening walks are the safe default in Pattaya.</p>"],
    ["Do short-haired breeds need less care in the heat?",
     "<p>They overheat faster in direct sun because they lack a thick coat's insulation — shade, timing and paw-pad checks still matter. See <a href=\"/pet-emergency/heatstroke.html\">heatstroke</a> for warning signs.</p>"],
    ["How hot is too hot for a balcony pet?",
     "<p>If you would not sit there comfortably for an hour at midday, your pet should not either. Provide shade, water and retreat indoors when temperatures climb.</p>"],
    ["Should I use cooling mats or ice?",
     "<p>Cooling mats and damp towels can help indoors; avoid ice-cold baths if a pet is already overheating — see <a href=\"/pet-emergency/heatstroke.html\">heatstroke</a> for emergency cooling guidance.</p>"],
    ["Does humidity make heat worse for pets?",
     "<p>Yes — panting clears heat less efficiently in humid air. AC or strong airflow matters as much as shade in Pattaya's wet season.</p>"]
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
  title: "Pet-Friendly Housing Pattaya | Condos, Houses & Rental Rules | PattayaPets",
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
      "and the unit owner to allow pets, and you need it in writing. For condos " +
      "that do accept dogs, see " +
      "<a href=\"/dog-friendly-pattaya/condos.html\">dog-friendly condos</a>.</p>" },
    { h: "Houses and villages versus condos", html:
      "<p>Stand-alone houses, townhouses and village-style rentals &mdash; common " +
      "in East Pattaya and the outer areas &mdash; are generally far easier with " +
      "pets than high-rise condos, and often come with a garden or yard. If a " +
      "pet is central to your life here, widening your search to houses is " +
      "usually the simplest fix. Families relocating with children should also " +
      "see " +
      '<a href="https://pattaya-school-guide.com/" target="_blank" rel="noopener noreferrer">' +
      "Pattaya School Guide</a> for schools near your chosen area. Browse by " +
      "<a href=\"/directory.html\">neighbourhood</a> in the directory.</p>" },
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
      "good airflow or air-conditioning, and a walk route nearby. See " +
      "<a href=\"/owning-a-pet-in-pattaya/where-to-walk-your-dog.html\">where to " +
      "walk your dog</a> for building a routine. A technically " +
      "pet-friendly 20th-floor studio is still hard work with a big dog.</p>" },
    { h: "Negotiating with landlords and juristic offices", html:
      "<p>When you find a willing landlord, get pet permission <strong>in the lease " +
      "and</strong> confirmed with the building juristic person where applicable. " +
      "Offer a reasonable pet deposit and describe your pet calmly (size, breed, " +
      "neutered, quiet). References from a previous landlord help.</p>" +
      "<p>If a agent says pets are OK but the building rules say no, believe the " +
      "building rules. Eviction after move-in is traumatic for everyone. See " +
      "<a href=\"/dog-friendly-pattaya/condos.html\">dog-friendly condos</a> for " +
      "the dog-owner angle and " +
      "<a href=\"/cats/indoor-vs-outdoor-cats.html\">indoor cats</a> for balcony safety.</p>" },
    { h: "Short-term stays and hotels", html:
      "<p>Tourists and snowbirds sometimes arrive before securing long-term housing. " +
      "Book <a href=\"/dog-friendly-pattaya/hotels.html\">pet-friendly hotels</a> " +
      "explicitly &mdash; never smuggle a pet into a no-pet room. For cats, a " +
      "temporary setup needs litter, hiding space and secure windows until your " +
      "lease is signed.</p>" }
  ],
  faqs: [
    ["Is it hard to rent with a pet in Pattaya?",
     "<p>Harder than many newcomers expect, because a lot of condo buildings ban pets outright. It is very manageable if you search specifically for pet-friendly buildings — or rent a house — and get the permission in writing.</p>"],
    ["Will I pay extra to rent with a pet?",
     "<p>Often there is a higher deposit or a pet/cleaning charge. Confirm it up front and have it written into the lease so there are no surprises later.</p>"],
    ["What should a pet-friendly lease include?",
     "<p>Explicit permission to keep your pet, any deposit or monthly pet fee, rules on number and size of animals, and who pays for damage beyond normal wear. Verbal OK from a landlord is not enough if the building forbids pets.</p>"],
    ["Are houses easier than condos for pet owners?",
     "<p>Often yes — a house with a small garden gives more space and fewer lift-and-neighbour issues. Still confirm the owner allows pets and check noise rules if you have a vocal dog.</p>"],
    ["Can my landlord evict me for having a pet?",
     "<p>If your lease or building rules ban pets and you moved in without written permission, you are exposed. Fix it before signing, not after a complaint.</p>"]
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
  title: "Where to Walk Your Dog in Pattaya | Routes, Timing & Safety | PattayaPets",
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
      "in the dog-friendly cluster. Many expats pair a dawn walk with morning " +
      "exercise &mdash; if you want gym facilities after the dog is home, see " +
      '<a href="https://pattaya-gym.com/" target="_blank" rel="noopener noreferrer">' +
      "Pattaya Gym</a>.</p>" },
    { h: "Walk safely", html:
      "<p>Keep your dog leashed, carry water, and learn the routes around you. " +
      "Be aware of <a href=\"/pet-emergency/street-dog-encounters.html\">" +
      "free-roaming street dogs</a> &mdash; give groups space and stay calm. And " +
      "always keep an eye on the heat: cut a walk short if your dog is " +
      "struggling. See " +
      "<a href=\"/pet-emergency/heatstroke.html\">heatstroke</a> and " +
      "<a href=\"/owning-a-pet-in-pattaya/dog-registration-thailand.html\">dog " +
      "registration &amp; the law</a> for the wider picture on responsible walks.</p>" },
    { h: "Routes by area", html:
      "<p>Where you live shapes the routine:</p>" +
      "<ul><li><strong>Jomtien / Dongtan:</strong> long beach walks at dawn; watch " +
      "tideline hazards &mdash; " +
      "<a href=\"/pet-emergency/beach-and-sea-hazards.html\">beach hazards</a>.</li>" +
      "<li><strong>Pratumnak:</strong> hill roads with shade and less traffic if " +
      "you pick quiet times; steeper routes suit fit dogs, not puppies.</li>" +
      "<li><strong>Central Pattaya / Naklua:</strong> rely on residential sois; " +
      "avoid Walking Street and bar areas at night.</li>" +
      "<li><strong>East Pattaya / villages:</strong> often easier off-lead in " +
      "private driveways, but traffic on main roads still demands a lead.</li></ul>" +
      "<p>Browse <a href=\"/area/jomtien.html\">Jomtien</a>, " +
      "<a href=\"/area/naklua.html\">Naklua</a> and " +
      "<a href=\"/area/pratumnak.html\">Pratumnak</a> area pages for vets and " +
      "services near your route.</p>" },
    { h: "Rainy season and festivals", html:
      "<p>During rainy season, puddles, toads and slippery tiles increase risk &mdash; " +
      "see <a href=\"/owning-a-pet-in-pattaya/rainy-season-pet-care.html\">rainy-season " +
      "pet care</a>. Shorten walks when storms build, towel paws at home, and avoid " +
      "drains where street dogs congregate after rain.</p>" +
      "<p>Over <a href=\"/owning-a-pet-in-pattaya/songkran-and-your-pet.html\">Songkran</a> " +
      "and fireworks periods, stick to very early walks or indoor toilet training " +
      "pads for small dogs if streets are chaotic.</p>" },
    { h: "Puppies, seniors and flat-faced breeds", html:
      "<p>Puppies need shorter, frequent outings for socialisation, not long hot " +
      "treks. Senior dogs may need flatter routes and more rest stops. Brachycephalic " +
      "breeds overheat fast &mdash; see " +
      "<a href=\"/dogs/choosing-a-dog-for-the-climate.html\">choosing a dog for the climate</a> " +
      "and treat midday walks as off limits.</p>" }
  ],
  faqs: [
    ["Can I walk my dog on the beach in Pattaya?",
     "<p>Yes, particularly on the quieter Jomtien and Dongtan stretches and at cool hours. Keep your dog leashed, always pick up, and mind hot sand. See our dog-friendly beaches guide.</p>"],
    ["How do I handle street dogs while walking my dog?",
     "<p>Keep your dog close and leashed, give groups of street dogs a wide berth, and stay calm rather than confrontational. Our guide to street-dog encounters covers it in full.</p>"],
    ["Do I need booties for hot pavement?",
     "<p>Many dogs manage with timing walks for cooler hours; booties help if your dog will wear them and you must cross hot asphalt. Test them at home first.</p>"],
    ["Where can I let my dog off-lead?",
     "<p>Only where it is safe, legal and your recall is reliable — which rules out most busy Pattaya streets. A long lead on the beach at quiet hours is a practical compromise.</p>"],
    ["What should I carry on every walk?",
     "<p>Water, poop bags, a spare lead clip and your phone with a vet contact saved. In the rainy season, a towel for muddy paws helps when you get home.</p>"],
    ["Is Walking Street safe for dogs at night?",
     "<p>No — crowds, noise, food scraps and drunk pedestrians make it stressful and risky. Walk residential sois instead.</p>"],
    ["How long should walks be in Pattaya heat?",
     "<p>Let your dog set the pace — if panting becomes heavy or they lag, head home. Ten to twenty minutes at cool hours beats an hour at midday.</p>"],
    ["Can I hire a dog walker in Pattaya?",
     "<p>Some trainers and boarding facilities offer walking services — ask locally and verify insurance and handling experience. Never hand your dog to an unvetted stranger from a social-media post.</p>"]
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
  title: "Dog Registration Thailand | Rabies Law & Local Rules | PattayaPets",
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
      "pet, your family and the community. Keep the certificates and stay on " +
      "schedule &mdash; see " +
      "<a href=\"/dogs/dog-vaccinations-thailand.html\">dog vaccinations</a> and " +
      "<a href=\"/cats/cat-vaccinations-thailand.html\">cat vaccinations</a>.</p>" },
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
      "condos and beaches.</p>" },
    { h: "After adopting or importing a pet", html:
      "<p>New owners should book a vet visit within the first week to confirm " +
      "vaccination history and schedule rabies boosters if needed. Rescues often " +
      "rehome animals already vaccinated &mdash; still keep certificates in a " +
      "folder with microchip paperwork.</p>" +
      "<p>If you imported your pet, DLD and airline records may already document " +
      "rabies vaccination &mdash; translate key dates onto a calendar reminder " +
      "before the certificate expires. See " +
      "<a href=\"/bring-pet-to-thailand/\">bring pet to Thailand</a> for the " +
      "import side and " +
      "<a href=\"/take-pet-out-of-thailand/export-process.html\">export process</a> " +
      "if you may leave later.</p>" },
    { h: "Microchips, collars and ID", html:
      "<p>Thailand is moving toward wider identification of dogs and cats. A " +
      "<a href=\"/owning-a-pet-in-pattaya/microchipping-your-pet.html\">microchip</a> " +
      "registered with your current phone number helps if your pet is lost or " +
      "involved in a bite incident. Collar tags with a local number are still " +
      "worthwhile &mdash; finders call before scanning.</p>" +
      "<p>Update chip registry details every time you change SIM or leave the " +
      "country temporarily. Boarding facilities and airlines increasingly ask for " +
      "chip numbers upfront.</p>" },
    { h: "If something goes wrong", html:
      "<p>If your dog bites a person or another animal, exchange contact details, " +
      "seek medical or vet care promptly, and produce vaccination records. " +
      "Out-of-date rabies vaccination creates serious legal and health exposure.</p>" +
      "<p>Roaming dogs annoy neighbours and trigger complaints to juristic offices " +
      "&mdash; another reason registration, vaccination and leash control matter " +
      "beyond paperwork.</p>" }
  ],
  faqs: [
    ["Is rabies vaccination legally required for pets in Thailand?",
     "<p>Yes. Thai law requires dogs and cats to be vaccinated against rabies and kept current. Keep the vaccination certificates, and use a vet to stay on schedule.</p>"],
    ["Do I have to register my dog in Pattaya?",
     "<p>Registration and licensing schemes vary by municipality, and rules have been evolving. Check the current requirement with your local district office or your vet, who will know the local position.</p>"],
    ["What documents should I keep after vaccination?",
     "<p>Keep the rabies certificate, microchip number and any municipal registration receipt in one folder — you may need them for boarding, export or if your dog is involved in an incident.</p>"],
    ["Can I register a cat as well as a dog?",
     "<p>Rabies vaccination rules apply to cats too. Registration schemes focus on dogs in many areas — confirm locally whether cats need separate licensing.</p>"],
    ["What happens if my pet's rabies vaccine lapses?",
     "<p>You are out of compliance with Thai law and may need to restart vaccination intervals for travel. Book a booster before the expiry date on the certificate.</p>"],
    ["Does my condo need proof of registration?",
     "<p>Some buildings ask for vaccination or registration copies when you move in with a pet — have scans ready alongside your lease permission.</p>"],
    ["Who can vaccinate against rabies in Thailand?",
     "<p>Licensed veterinarians administer rabies vaccines and issue the certificates you need for registration and travel. Keep the official certificate, not just a clinic receipt.</p>"],
    ["Are there breed-specific bans in Pattaya?",
     "<p>Some condos and landlords restrict size or breed regardless of national law. Check building rules before adopting a large or restricted breed.</p>"]
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
  title: "Where to Buy Pet Food in Pattaya | Shops, Supermarkets & Online | PattayaPets",
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
      "your pet&rsquo;s food, do it gradually.</p>" },
    { h: "Litter, treats and everyday supplies", html:
      "<p>Cat litter is stocked at supermarkets, pet shops and online &mdash; clumping " +
      "and tofu-based litters are common. For dogs, treats sold at street stalls are " +
      "often fatty or salty; stick to reputable pet-shop brands if you reward heavily.</p>" +
      "<p>Parasite preventatives are usually purchased through your " +
      "<a href=\"/vets/\">vet</a> rather than random market stalls &mdash; counterfeits " +
      "exist. Year-round flea and tick control is not optional in Pattaya; see " +
      "<a href=\"/pet-emergency/ticks-and-fleas.html\">ticks &amp; fleas</a>.</p>" },
    { h: "Shopping by neighbourhood", html:
      "<p>Central Pattaya and Naklua have the densest cluster of " +
      "<a href=\"/pet-shops/\">pet shops</a> and hypermarkets. Jomtien owners often " +
      "drive to larger stores or use delivery apps for heavy bags. East Pattaya village " +
      "houses may rely on weekly online orders if local shops carry limited premium lines.</p>" +
      "<p>Before a long trip, check stock of your pet&rsquo;s usual diet &mdash; " +
      "see <a href=\"/owning-a-pet-in-pattaya/cost-of-owning-a-pet.html\">cost of owning " +
      "a pet</a> for why a two-week buffer beats last-minute panic.</p>" },
    { h: "Switching foods safely", html:
      "<p>Thailand&rsquo;s heat and travel stress make sudden diet changes a common " +
      "cause of upset stomachs. Mix old and new food over seven to ten days. If your " +
      "vet prescribed a therapeutic diet, do not substitute supermarket brands without " +
      "asking &mdash; kidney, urinary and allergy diets are formulated precisely.</p>" +
      "<p>Raw feeding has a following among expats but carries parasite and bacterial " +
      "risk in the tropics; discuss with a vet who understands your pet&rsquo;s health " +
      "before committing.</p>" }
  ],
  faqs: [
    ["Can I get my usual brand of pet food in Pattaya?",
     "<p>Mainstream brands are widely available. For a specific imported or premium brand, check pet shops and online retailers — and if your pet is settled on something particular, keep a buffer stock so a temporary shortage is not a problem.</p>"],
    ["Where do I get a prescription diet?",
     "<p>Through vet clinics and some pet shops. Ask your vet where to buy the diet they have recommended, and whether it can be ordered online for regular delivery.</p>"],
    ["Is Thai-made pet food reliable?",
     "<p>Established Thai brands sold through reputable shops are widely used. If your pet has allergies or a sensitive stomach, introduce new food gradually and ask your vet if a specific diet is needed.</p>"],
    ["Should I stock up before Songkran or holidays?",
     "<p>Shops can run short around long holidays and during heavy rain when delivery slows. Keep two weeks of your pet's usual food as a buffer.</p>"],
    ["Can I bring pet food from abroad?",
     "<p>Small amounts for personal use are usually fine; large shipments may face customs rules. For everyday feeding, local supply is simpler — see our <a href=\"/owning-a-pet-in-pattaya/cost-of-owning-a-pet.html\">cost guide</a>.</p>"],
    ["Which supermarkets stock pet food in Pattaya?",
     "<p>Major hypermarkets across central Pattaya, Naklua and Jomtien carry mainstream dog and cat lines; dedicated pet shops still win on range and advice.</p>"],
    ["Is online pet food delivery reliable?",
     "<p>Generally yes for established retailers and marketplace sellers with good ratings — useful for heavy bags. Inspect packaging on arrival and store food in airtight containers in the humidity.</p>"],
    ["What if my pet refuses Thai brands?",
     "<p>Transition gradually, or ask your vet whether a specific imported line is worth the premium. Sometimes refusal is stress, not taste — especially after a move.</p>"]
  ],
  related: [
    { name: "Pet shops in Pattaya", path: "/pet-shops/", desc: "The directory of pet supply shops." },
    { name: "What it costs to own a pet", path: "/owning-a-pet-in-pattaya/cost-of-owning-a-pet.html", desc: "Food and litter in the wider budget." },
    { name: "Cats in Pattaya", path: "/cats/", desc: "Cat-specific food and litter tips." },
    { name: "Dogs in Pattaya", path: "/dogs/", desc: "Dog food brands and diet basics." }
  ]
}));

module.exports = pages;
