"use strict";
/* Cluster: Owning a pet in Pattaya */

const { article, hub } = require("../guidekit.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const CLUSTER = { name: "Owning a pet in Pattaya", path: "/owning-a-pet-in-pattaya/" };
const SUB = [GUIDES, CLUSTER];

const pages = [];

pages.push(hub({
  path: "/owning-a-pet-in-pattaya/",
  title: "Owning a Pet in Pattaya | PattayaPets",
  image: "/assets/img/og-owning.png",
  updated: "2026-08-01",
  desc: "What it is really like to own a pet in Pattaya: costs, hot-climate care, " +
    "pet-friendly housing, walking, registration and where to buy pet food.",
  crumb: "Owning a pet in Pattaya",
  breadcrumbs: [GUIDES],
  eyebrow: "Guide",
  h1: "Owning a pet in Pattaya",
  lede: "Daily life with a pet in Pattaya depends on current housing rules, " +
    "live weather and surface conditions, provider evidence and a plan made for your animal.",
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
    "Relocating? Pair this hub with the " +
    '<a href="/bring-pet-to-thailand/">Thailand import guide</a> and the ' +
    '<a href="/owning-a-pet-in-pattaya/pet-friendly-housing.html">pet-friendly housing guide</a>.</p>',
  groups: [
    {
      title: "The essentials",
      cards: [
        { name: "What it costs", desc: "Build a current budget from written quotes instead of unsourced market ranges.", path: "/owning-a-pet-in-pattaya/cost-of-owning-a-pet.html" },
        { name: "Hot-climate pet care", desc: "Plan around live conditions and pet-specific veterinary guidance.", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html" },
        { name: "Pet-friendly housing", desc: "Renting and living with a pet when many condos say no.", path: "/owning-a-pet-in-pattaya/pet-friendly-housing.html" }
      ]
    },
    {
      title: "Everyday life",
      cards: [
        { name: "Where to walk your dog", desc: "Verify access and choose each outing from live route conditions.", path: "/owning-a-pet-in-pattaya/where-to-walk-your-dog.html" },
        { name: "Where to buy pet food", desc: "Check current stock, seller evidence and any veterinary diet instructions.", path: "/owning-a-pet-in-pattaya/where-to-buy-pet-food.html" },
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
  title: "Cost of Owning a Pet in Pattaya | PattayaPets",
  desc: "Build a current Pattaya pet budget from itemised food, veterinary, housing, care and travel quotes, with unsupported market ranges clearly excluded.",
  h1: "What it costs to own a pet in Pattaya",
  lede: "There is no representative Pattaya price survey behind this page. A defensible " +
    "budget starts with your animal&rsquo;s needs and current written quotes from the providers you may use.",
  updated: "2026-08-01",
  verify: "PattayaPets has not completed a local price survey and does not publish a " +
    "monthly total, nationality comparison or emergency-fund target. Prices, eligibility, " +
    "frequency and inclusions must be confirmed for the animal and service.",
  sections: [
    { h: "Start with a quote sheet, not a market average", html:
      "<p>No current, representative dataset establishes a typical monthly cost for a " +
      "dog or cat in Pattaya. Species, size, health, diet, housing, travel and the exact " +
      "provider change the result. Create a dated sheet with one row for each item, the " +
      "source of the quote, what is included, when it expires and what remains unknown.</p>" },
    { h: "Separate recurring, periodic and contingent items", html:
      "<p>A useful budget keeps unlike costs apart:</p>" +
      "<ul><li><strong>Recurring:</strong> the food and supplies actually used by your animal, " +
      "plus any medicine or therapeutic diet prescribed for it.</li>" +
      "<li><strong>Periodic:</strong> the examination, vaccination, testing, parasite-control " +
      "and grooming plan set by the relevant veterinarian or care professional.</li>" +
      "<li><strong>Care while away:</strong> boarding, a sitter, transport or another arrangement, " +
      "only if you expect to use it.</li>" +
      "<li><strong>Housing:</strong> any written pet deposit, cleaning term or rent condition in " +
      "the actual lease and building policy.</li>" +
      "<li><strong>Contingent:</strong> urgent veterinary care, replacement travel, or a move. " +
      "These are scenarios, not a predictable monthly average.</li></ul>" },
    { h: "Ask for comparable written quotes", html:
      "<p>For a clinic, boarding facility, groomer, sitter or transporter, ask for an " +
      "itemised written quote for the same animal and service specification. Confirm whether " +
      "tax, medicine, laboratory work, weight or species supplements, deposits, cancellation, " +
      "collection and after-hours charges are included. A directory page is not a price quote " +
      "or an endorsement; use the <a href=\"/directory.html\">directory</a> only to find " +
      "candidate contact routes.</p>" },
    { h: "Veterinary and insurance decisions", html:
      "<p>This publication has not audited Pattaya clinic prices or compared fees by " +
      "nationality. Ask the treating clinic for a written estimate before non-urgent work and " +
      "ask what could change it. Do not delay urgent care to compare prices. If considering " +
      "<a href=\"/pet-insurance-thailand.html\">pet insurance</a>, read the current policy " +
      "wording, eligibility, exclusions, limits, waiting periods, reimbursement process and " +
      "cancellation terms; PattayaPets does not recommend a product or a reserve amount.</p>" },
    { h: "Food, grooming and care frequency", html:
      "<p>Do not infer a feeding, preventive-care or grooming schedule from a generic budget. " +
      "Use the quantity and storage instructions for the selected food, the veterinarian&rsquo;s " +
      "plan for the individual animal, and a groomer or veterinarian&rsquo;s coat-and-skin advice. " +
      "Confirm current stock and price through the " +
      "<a href=\"/owning-a-pet-in-pattaya/where-to-buy-pet-food.html\">food guide</a> and " +
      "<a href=\"/groomers/\">groomer directory</a>; neither page supplies a market average.</p>" },
    { h: "Travel and relocation are route-specific", html:
      "<p>Import and export totals cannot be inferred from a single permit fee. The route can " +
      "involve authority documents, veterinary work, laboratory testing, a container, ground " +
      "transport and carrier charges, each with different scope and timing. Use the " +
      "<a href=\"/bring-pet-to-thailand/\">import</a> or " +
      "<a href=\"/take-pet-out-of-thailand/\">export</a> guide for source-backed authority " +
      "items, then obtain a live carrier or provider quote. No outcome or same-day clearance " +
      "is promised.</p>" }
  ],
  faqs: [
    ["How much should I budget each month?",
     "<p>No representative Pattaya dataset supports one monthly figure. Add current quotes for the items your animal actually needs and keep recurring, periodic and contingent costs separate.</p>"],
    ["Is veterinary care cheaper in Pattaya than elsewhere?",
     "<p>PattayaPets has not run a comparable clinic-price study and does not make that claim. Ask the clinic for an itemised estimate for the exact work and animal.</p>"],
    ["Are prices different for expatriates?",
     "<p>No published audit reviewed by PattayaPets establishes pricing parity or a nationality difference. Request the same written service specification and itemised price before drawing a comparison.</p>"],
    ["Should I buy pet insurance?",
     "<p>That depends on the animal, policy wording and your finances. Check current eligibility, exclusions, limits, waiting periods and claims terms in the <a href=\"/pet-insurance-thailand.html\">insurance guide</a>; this site does not recommend a product.</p>"],
    ["How much should an emergency reserve contain?",
     "<p>There is no universal amount on this page. Consider your finances, the current clinic and transport options, and any insurance limits. In an active emergency, call a clinic and do not delay care to price-shop.</p>"],
    ["What should a boarding or grooming quote include?",
     "<p>Give each provider the same animal and service details, then ask what the quote includes, when it expires, and whether deposits, collection, medicine handling, after-hours or cancellation charges apply.</p>"],
    ["Why are there no local price ranges here?",
     "<p>Without a dated, representative method, a range would look precise while mixing different animals, services and inclusions. This page names the evidence gap instead.</p>"]
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
  title: "Hot-Climate Pet Care in Pattaya | PattayaPets",
  desc: "Source-led Pattaya heat-risk orientation for pets: assess live conditions, make an individual plan with a veterinarian, and know when to call a clinic.",
  h1: "Hot-climate pet care",
  lede: "Heat risk depends on the animal, activity and live conditions. This page supports " +
    "planning and prompt veterinary contact; it is not a treatment or exercise algorithm.",
  updated: "2026-08-01",
  verify: "No licensed veterinarian has clinically reviewed this page. The Royal Veterinary " +
    "College and Cornell sources below concern canine heat illness; they do not establish " +
    "one rule for cats, every dog, every surface or every Pattaya day.",
  sections: [
    { h: "What the reviewed sources establish", html:
      "<p>The <a href=\"https://www.rvc.ac.uk/vetcompass/news/the-rvc-urges-owners-of-hot-dogs-to-cool-first-transport-second\">" +
      "Royal Veterinary College</a> describes canine heat-related illness as a veterinary " +
      "emergency and separates cooling advice by the dog&rsquo;s age, health and level of " +
      "consciousness. <a href=\"https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-information/heatstroke-medical-emergency\">" +
      "Cornell&rsquo;s canine guidance</a> likewise calls heatstroke an emergency. These " +
      "sources support preparation and fast professional contact, not one universal household rule.</p>" },
    { h: "Make an individual heat plan before an emergency", html:
      "<p>Ask the veterinarian who knows the animal how exercise, transport, indoor climate " +
      "and any medical condition should change in hot or humid weather. Record which signs " +
      "should trigger a call, which clinic to contact and how to transport the animal. " +
      "Flat-faced anatomy, age, body condition, illness, medicine and prior heat problems can " +
      "change the plan; this page does not rank or diagnose those risks.</p>" },
    { h: "Use live conditions, not a fixed clock or hand test", html:
      "<p>Air temperature alone does not describe sun, humidity, airflow, surface exposure, " +
      "activity or the individual animal. Check the live route and weather, provide access to " +
      "drinking water and a cooler retreat, and postpone or shorten an outing when safe " +
      "conditions are uncertain. PattayaPets does not endorse a back-of-hand pavement test, " +
      "a universal walk duration or a fixed safe time of day.</p>" },
    { h: "Vehicles, balconies and indoor contingencies", html:
      "<p>Do not leave an animal unattended where heat can build without a reliable escape or " +
      "response. For a vehicle, balcony, carrier or closed room, consider sun movement, " +
      "ventilation, monitoring and what happens if power or cooling fails. Arrange a named " +
      "backup person and location before relying on equipment. No universal thermostat setting " +
      "or claim that a fan or air-conditioning is sufficient appears here.</p>" },
    { h: "Coat, skin, ears, paws and parasites need separate advice", html:
      "<p>Coat clipping, bathing, skin-fold care, ear care, paw protection and parasite control " +
      "depend on species, coat, skin, activity, product and medical history. Ask a veterinarian " +
      "or appropriately qualified groomer for the individual plan and follow the product or " +
      "prescriber instructions. Do not use this page as a shaving, rinsing, cleaning or dosing " +
      "schedule. See the source-bounded <a href=\"/pet-emergency/ticks-and-fleas.html\">" +
      "tick and flea</a> orientation and the " +
      "<a href=\"/pet-health-pattaya/skin-and-ear-problems.html\">skin and ear</a> guide.</p>" },
    { h: "If the animal may be overheating", html:
      "<p>Call a veterinary clinic immediately, describe the species, condition, consciousness, " +
      "breathing, exposure and location, and follow its live instructions. The " +
      "<a href=\"/pet-emergency/heatstroke.html\">heatstroke emergency page</a> explains the " +
      "reviewed dog-specific RVC wording and its limits. PattayaPets does not provide a generic " +
      "ice, bath, towel, airflow or transport algorithm for every animal.</p>" }
  ],
  faqs: [
    ["Has a veterinarian reviewed this page?",
     "<p>No. It deliberately stays at planning and referral. Ask the veterinarian who knows the animal for an individual heat, exercise and transport plan.</p>"],
    ["Is there a safe time for every Pattaya dog walk?",
     "<p>No. Use live heat, humidity, sun, surface, shade and traffic conditions plus the individual dog&rsquo;s veterinary plan. Postpone the outing when safe conditions are uncertain.</p>"],
    ["Does the back-of-hand pavement test prove a surface is safe?",
     "<p>This page does not treat that informal test as a validated universal threshold. Avoid prolonged surface exposure when conditions are uncertain and ask a veterinarian about paw protection for the individual animal.</p>"],
    ["Should I shave my dog or trim my cat for the heat?",
     "<p>There is no universal answer here. Coat and skin needs differ; ask a veterinarian or appropriately qualified groomer who can assess the animal.</p>"],
    ["Should I leave a fan or air-conditioning on?",
     "<p>No single setting or device is guaranteed. Assess the room, animal, monitoring and power-failure plan with veterinary advice where health risk is involved.</p>"],
    ["Should I use ice, a cooling mat or wet towels?",
     "<p>This page does not give a treatment algorithm. If overheating is suspected, call a clinic immediately and follow its live instructions; the linked emergency page explains the narrow dog-specific source.</p>"],
    ["Does the canine evidence apply to cats?",
     "<p>Not automatically. The cited RVC and Cornell material is canine. Call a veterinarian for species-specific advice and any abnormal breathing, collapse or behaviour change.</p>"],
    ["Where is the emergency guidance?",
     "<p>Use the <a href=\"/pet-emergency/heatstroke.html\">heatstroke page</a>, call a live clinic and follow its instructions. PattayaPets has no licensed-veterinarian review record.</p>"]
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
  title: "Pet-Friendly Housing in Pattaya | PattayaPets",
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
      "pet is central to your life here, widening your search to houses may provide " +
      "more options. Confirm every rule with the landlord and juristic office. Browse by " +
      "<a href=\"/directory.html\">neighbourhood</a> in the directory, and " +
      "compare local pet services such as " +
      "<a href=\"/vets/siam-country-pet-hospital.html\">Siam Country Pet Hospital</a> " +
      "before settling on a location.</p>" },
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
     "<p>If your lease or building rules ban pets and you moved in without written permission, you are exposed. Fix it before signing, not after a complaint.</p>"],
    ["Is landlord permission enough for a condo pet?",
     "<p>No. The building's rules still apply, so both the unit owner and the building must allow pets. Get both permissions in writing before you sign.</p>"],
    ["What shared-area rules should I check for my pet?",
     "<p>Ask about rules for lifts, gardens and pool decks, as well as any size, breed or number limits. Have the agreed pet permission written into the lease.</p>"]
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
  title: "Dog Walking in Pattaya: Route Checklist | PattayaPets",
  desc: "How to verify current dog-walking access in Pattaya and choose each route from live heat, surface, traffic, weather and animal-specific conditions.",
  h1: "Where and how to walk your dog in Pattaya",
  lede: "PattayaPets has no current citywide access matrix or ranked route survey. " +
    "Verify permission and choose each outing from the conditions in front of you.",
  updated: "2026-08-01",
  verify: "No beach, park, condominium or private-venue policy is treated as permanent. " +
    "Check current official rules, entrance signs and staff direction; this page does not " +
    "set exercise duration or replace veterinary advice.",
  sections: [
    { h: "Start with live conditions", html:
      "<p>Before leaving, check current weather, sun, humidity, surface exposure, traffic, " +
      "visibility and any event activity on the route. Combine that with the individual " +
      "dog&rsquo;s age, health, behaviour and veterinary exercise plan. There is no fixed " +
      "Pattaya clock time or duration that makes every walk safe.</p>" },
    { h: "Build a route from verified access", html:
      "<p>Start with places whose current access you can verify: a public route with clear " +
      "signage, a private property whose operator has confirmed permission, or a building " +
      "area covered by written rules. The <a href=\"/dog-friendly-pattaya/beaches.html\">" +
      "beach</a> and <a href=\"/dog-friendly-pattaya/parks.html\">park</a> guides name the " +
      "absence of a complete current policy inventory; they do not guarantee entry. Recheck " +
      "at the entrance because enforcement and private policies can change.</p>" },
    { h: "Plan for traffic, animals and a change of route", html:
      "<p>Use secure equipment suited to the dog and follow the current rule for that place. " +
      "Identify traffic crossings, loose animals, waste, standing water, shade and an exit " +
      "route before committing to a loop. If another animal or hazard makes the route unsafe, " +
      "create distance and leave rather than test a generic handling technique. The " +
      "<a href=\"/pet-emergency/street-dog-encounters.html\">street-dog</a> and " +
      "<a href=\"/pet-emergency/heatstroke.html\">heat-risk</a> pages prioritise live " +
      "professional help and state their evidence limits.</p>" },
    { h: "Compare routes without inventing a ranking", html:
      "<p>PattayaPets has not audited every footpath, beach, park, private road or village, " +
      "so it does not call one neighbourhood safest or promise off-lead access. Compare a " +
      "candidate route for legal access, surface, shade, traffic, loose animals, lighting, " +
      "escape options and distance from help. The <a href=\"/area/jomtien.html\">Jomtien</a>, " +
      "<a href=\"/area/naklua.html\">Naklua</a> and " +
      "<a href=\"/area/pratumnak.html\">Pratumnak</a> pages list approved service records; " +
      "they are not route-safety certifications.</p>" },
    { h: "Reassess during weather and events", html:
      "<p>Rain, flooding, thunder, traffic diversions, water-fight zones, fireworks and crowds " +
      "can change a familiar route. Use live weather and event information and be ready to " +
      "cancel rather than rely on a fixed seasonal schedule. The " +
      "<a href=\"/owning-a-pet-in-pattaya/rainy-season-pet-care.html\">rain</a>, " +
      "<a href=\"/owning-a-pet-in-pattaya/songkran-and-your-pet.html\">Songkran</a> and " +
      "<a href=\"/owning-a-pet-in-pattaya/fireworks-and-noise-anxiety.html\">noise</a> " +
      "guides identify what is sourced and what still needs veterinary or live local confirmation.</p>" },
    { h: "Use the individual dog&rsquo;s plan", html:
      "<p>A puppy, senior, flat-faced dog, dog with a medical condition, or dog unused to the " +
      "conditions may need a different activity and exposure plan. Ask the treating veterinarian " +
      "rather than using a generic duration, distance or time-of-day threshold. The " +
      "<a href=\"/dogs/choosing-a-dog-for-the-climate.html\">climate guide</a> explains the " +
      "decision factors without ranking a breed or promising suitability.</p>" }
  ],
  faqs: [
    ["Can I walk my dog on a Pattaya beach?",
     "<p>No universal permission is published here. Check the current official rule, entrance signage and staff direction for the exact stretch and time; see the <a href=\"/dog-friendly-pattaya/beaches.html\">beach evidence page</a>.</p>"],
    ["Which Pattaya neighbourhood has the best dog walks?",
     "<p>PattayaPets has not completed a comparative route audit and does not rank one area safest or best. Compare verified access and the live route factors listed above.</p>"],
    ["How should I respond to free-roaming dogs?",
     "<p>Create distance and leave the route when possible. Do not rely on a generic confrontation technique; use the <a href=\"/pet-emergency/street-dog-encounters.html\">source-bounded orientation</a> and seek live help if needed.</p>"],
    ["Do booties make hot surfaces safe?",
     "<p>This page makes no such guarantee. Ask a veterinarian about the animal&rsquo;s paws and any protective equipment, and avoid the exposure when surface safety is uncertain.</p>"],
    ["Where can my dog be off lead?",
     "<p>Only where the current rule and property operator explicitly allow it and the situation is safe. PattayaPets has no complete off-lead inventory and does not treat a beach or private road as permission.</p>"],
    ["How long should a walk last?",
     "<p>There is no universal Pattaya duration. Use the individual veterinary exercise plan and live conditions, and call a clinic if the dog shows concerning changes.</p>"],
    ["Is a busy nightlife area always unsafe for dogs?",
     "<p>This page does not issue a permanent area verdict. Assess the actual crowd, noise, traffic, waste, escape route and the individual dog, and choose another route when conditions are unsuitable.</p>"],
    ["Can I hire a dog walker in Pattaya?",
     "<p>PattayaPets has no current market-wide availability, credential or insurance audit. Ask a candidate for identity, experience, handling plan, references, insurance evidence, emergency authority and a trial arrangement before deciding.</p>"]
  ],
  related: [
    { name: "Dog-friendly beaches", path: "/dog-friendly-pattaya/beaches.html", desc: "Cool-hour walks on the sand." },
    { name: "Places to walk", path: "/dog-friendly-pattaya/parks.html", desc: "Beaches, sois and green space." },
    { name: "Snake bites", path: "/pet-emergency/snake-bites.html", desc: "Walking near long grass, drains and undergrowth." },
    { name: "Street-dog encounters", path: "/pet-emergency/street-dog-encounters.html", desc: "Walking safely around soi dogs." },
    { name: "Hot-climate pet care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", desc: "Timing and heat awareness." }
  ]
}));

pages.push(own({
  slug: "dog-registration-thailand", crumb: "Registration & the law",
  title: "Dog Registration in Pattaya | What Is Verified | PattayaPets",
  desc: "What can and cannot currently be verified about rabies law, dog registration and local pet rules in Pattaya, with the official DLD legal source.",
  h1: "Dog registration and rabies rules in Pattaya",
  lede: "Thailand has national rabies legislation, but this publication has not " +
    "verified a current Pattaya ordinance or an official English text that supports " +
    "a universal local registration or booster schedule.",
  updated: "2026-08-01",
  verify: "Ask the relevant Pattaya City or district office for the current local " +
    "instrument and ask a licensed veterinarian for the schedule that applies to your animal. " +
    "Do not rely on a condo rule or an old news report as the law.",
  sections: [
    { h: "The national source we can point to", html:
      "<p>The Department of Livestock Development publishes the Thai-language " +
      "<a href=\"https://legal.dld.go.th/index.php/th/phra-rach-bayyati-rokh-phis-sunakh-ba-ph-s-2535\">Rabies Act B.E. 2535 legal hub</a> " +
      "and its <a href=\"https://legal.dld.go.th/images/Pho%20Roh%20Bor/Rok-Phit-SuNak-Ba/5%20Rok-Phit-SuNak-Ba/1.pdf\">official Act PDF</a>. " +
      "Both were reopened on 1 August 2026. PattayaPets has not obtained a certified " +
      "translation, so it does not paraphrase a species, age, interval or penalty from " +
      "those Thai provisions.</p>" },
    { h: "What remains unverified locally", html:
      "<p>No current official Pattaya registration ordinance was located in the audit. " +
      "That means this page cannot tell every Pattaya resident that a dog or cat must " +
      "be registered, microchipped or renewed on one universal schedule. Ask the office " +
      "responsible for your registered address for the instrument, effective date, animals " +
      "covered, documents, fee and renewal rule.</p>" },
    { h: "Keep evidence separate", html:
      "<p>Keep the vaccination certificate, identifier records, adoption or import papers " +
      "and any municipal receipt together. A landlord or condominium may request evidence, " +
      "but a private building policy is not proof of a city or national legal requirement. " +
      "Likewise, an airline or destination-country rule applies to that journey, not to every " +
      "pet living in Pattaya.</p>" },
    { h: "If an incident occurs", html:
      "<p>Protect people and animals from further contact, exchange details and contact the " +
      "appropriate medical, veterinary and local authorities. Show the actual vaccination " +
      "and identification records rather than estimating dates from memory. PattayaPets does " +
      "not provide legal or clinical advice.</p>" }
  ],
  faqs: [
    ["Is rabies vaccination legally required for pets in Thailand?",
     "<p>DLD publishes the Rabies Act B.E. 2535, linked above. This English-language page does not assert the Act&rsquo;s exact species, age or booster interval without a certified translation. Ask DLD or a licensed veterinarian for the rule that applies to your animal.</p>"],
    ["Do I have to register my dog in Pattaya?",
     "<p>A current official Pattaya registration instrument was not located. Ask the office responsible for your address to provide the current ordinance or notice and its effective date.</p>"],
    ["What documents should I keep after vaccination?",
     "<p>Keep the issued vaccination certificate, identifier records, import or adoption papers and any municipal receipt. Preserve the original dates and issuer details.</p>"],
    ["Does a condo rule prove the law?",
     "<p>No. A lease, landlord or juristic-office policy can bind occupancy without being a municipal or national law. Ask for each rule in writing and identify who issued it.</p>"],
    ["What if official sources conflict?",
     "<p>Ask the competent authority for written clarification and keep it with your records. Do not choose the more convenient interpretation from an unofficial summary.</p>"]
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
  title: "Buying Pet Food in Pattaya | PattayaPets",
  desc: "How to verify current pet-food stock and sellers in Pattaya, protect product integrity, and keep therapeutic or diet changes under veterinary direction.",
  h1: "Where to buy pet food in Pattaya",
  lede: "Stock, seller quality and delivery conditions change. This page explains what to " +
    "verify without claiming a brand is available or prescribing a diet.",
  updated: "2026-08-01",
  verify: "PattayaPets has not completed a current stock, price, seller-authenticity or " +
    "delivery audit. It provides no feeding transition, therapeutic-diet or parasite-treatment " +
    "instruction; confirm those with the treating veterinarian and product manufacturer.",
  sections: [
    { h: "Find candidates, then verify the exact product", html:
      "<p>The <a href=\"/pet-shops/\">pet-shop directory</a> contains approved business " +
      "records and explicit evidence states; it is not a live inventory. Contact a seller " +
      "before travelling and confirm the full product name, formulation, pack size, batch or " +
      "expiry information, price, storage condition and collection or delivery method. A clinic " +
      "or supermarket should be treated the same way: no stock is inferred from its category.</p>" },
    { h: "Online orders need seller and delivery checks", html:
      "<p>PattayaPets does not certify an online retailer or marketplace seller. Check who the " +
      "seller is, whether the listing identifies the exact product, how the item is stored and " +
      "transported, what happens if packaging is damaged, and the current return or refund route. " +
      "Confirm building access and delivery conditions rather than assuming every Pattaya address " +
      "or heavy order is served.</p>" },
    { h: "Therapeutic diets stay under veterinary direction", html:
      "<p>If a veterinarian has prescribed or recommended a therapeutic diet, confirm the exact " +
      "name, formulation, quantity, duration, monitoring and acceptable alternative with that " +
      "veterinarian. A seller&rsquo;s category or a similar label does not establish clinical " +
      "equivalence. Do not substitute or start a diet from this guide, and do not infer that an " +
      "imported or premium label is necessary or superior.</p>" },
    { h: "Check packaging, storage and product authority", html:
      "<p>For food, litter, treats or another supply, inspect the product identity, intact " +
      "packaging, expiry or best-before information, storage instructions and seller contact. " +
      "PattayaPets has not sampled local products or tested seller authenticity. Parasite " +
      "products are not ordinary shopping advice: ask a veterinarian for the product and " +
      "schedule appropriate to the species, weight, health and exposure, then use it exactly as " +
      "directed. See the <a href=\"/pet-emergency/ticks-and-fleas.html\">source-bounded " +
      "parasite page</a>.</p>" },
    { h: "Location and continuity are verification questions", html:
      "<p>The current business data does not prove that one Pattaya neighbourhood has the " +
      "widest range or that a particular item will remain available. Use the directory&rsquo;s " +
      "area filters to find approved records, then confirm stock and transport for the exact " +
      "address. If continuity matters, ask the veterinarian and seller how to plan around a " +
      "shortage; this page does not prescribe a fixed buffer quantity.</p>" },
    { h: "Do not use a universal transition schedule", html:
      "<p>A suitable transition depends on the animal, current diet, new product, health and " +
      "reason for change. Follow the treating veterinarian&rsquo;s and manufacturer&rsquo;s current " +
      "instructions rather than a generic number of days. If the animal is unwell, refuses " +
      "food, or develops concerning signs, contact a veterinarian. Questions about raw, home-" +
      "prepared or therapeutic feeding require individual clinical and food-safety advice; " +
      "this page does not approve a feeding method.</p>" }
  ],
  faqs: [
    ["Can I get a specific brand in Pattaya?",
     "<p>This page has no live stock inventory. Contact the seller and confirm the exact formulation, pack size, expiry information, storage, price and collection or delivery before relying on it.</p>"],
    ["Where do I obtain a therapeutic diet?",
     "<p>Ask the treating veterinarian to identify the exact product and acceptable source or alternative. Do not infer clinical equivalence from a similar label or seller category.</p>"],
    ["Does PattayaPets certify Thai or imported brands?",
     "<p>No. The publication has not sampled products, audited manufacturers or compared nutrition, safety or quality by country of origin.</p>"],
    ["How much food should I keep in reserve?",
     "<p>No fixed buffer is recommended here. Ask the veterinarian and seller how to maintain continuity for the individual animal, particularly where a therapeutic diet is involved.</p>"],
    ["Can I bring pet food into Thailand?",
     "<p>This page does not establish a customs, DLD or food-authority allowance. Confirm the current rule for the exact product, quantity and origin with the competent Thai authority before travel.</p>"],
    ["Which Pattaya shop has the widest range?",
     "<p>PattayaPets has not completed a comparative inventory and does not rank one seller. Use the <a href=\"/pet-shops/\">directory</a> to find approved records, then verify stock directly.</p>"],
    ["Is online delivery reliable?",
     "<p>No platform-wide guarantee is made. Verify the seller, exact product, delivery conditions, packaging, returns and the address service area for each order.</p>"],
    ["How should I change my pet&rsquo;s food?",
     "<p>Use the treating veterinarian&rsquo;s and manufacturer&rsquo;s instructions for that animal and product. This page does not supply a universal transition schedule or diagnose a refusal to eat.</p>"]
  ],
  related: [
    { name: "Pet shops in Pattaya", path: "/pet-shops/", desc: "The directory of pet supply shops." },
    { name: "What it costs to own a pet", path: "/owning-a-pet-in-pattaya/cost-of-owning-a-pet.html", desc: "Food and litter in the wider budget." },
    { name: "Cats in Pattaya", path: "/cats/", desc: "Cat-specific food and litter tips." },
    { name: "Dogs in Pattaya", path: "/dogs/", desc: "Dog food brands and diet basics." }
  ]
}));

module.exports = pages;
