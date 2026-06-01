"use strict";
/* Cross-cluster guides that fill genuine gaps: a venomous-creatures emergency
   page, two adoption/welfare guides, two pet-health guides, and a domestic
   travel guide. Each is placed in the cluster it belongs to. */

const { article } = require("../guidekit.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const EMERG = { name: "Pet emergencies", path: "/pet-emergency/" };
const ADOPT = { name: "Adopt a pet in Pattaya", path: "/adopt-a-pet-pattaya/" };
const HEALTH = { name: "Pet health in Pattaya", path: "/pet-health-pattaya/" };
const OWNING = { name: "Owning a pet in Pattaya", path: "/owning-a-pet-in-pattaya/" };

const NOTVET =
  "PattayaPets is not a veterinary practice and this is not veterinary advice. " +
  "In a genuine emergency, the right move is almost always the same: get your pet " +
  "to a veterinarian as fast as safely possible. The information here is general " +
  "orientation only.";

const HEALTH_VERIFY =
  "This is general health orientation, last reviewed on 31 May 2026, and is not " +
  "veterinary advice or a diagnosis. PattayaPets is an editorial publication, not " +
  "a veterinary practice. If you are worried about your pet, see a qualified " +
  "veterinarian &mdash; early advice is always better than waiting.";

const pages = [];

/* ============ EMERGENCY: VENOMOUS CREATURES ============ */
pages.push(article({
  path: "/pet-emergency/venomous-creatures.html",
  title: "Venomous Creatures & Pets Pattaya | Toads, Centipedes & Stings | PattayaPets",
  desc: "Beyond snakes: the toads, centipedes, bees and other small creatures in " +
    "Thailand that can hurt or poison a curious pet, and what to do.",
  crumb: "Toads, centipedes & stings",
  breadcrumbs: [GUIDES, EMERG],
  eyebrow: "Pet emergencies",
  h1: "Toads, centipedes and stinging creatures",
  lede: "Snakes get the attention, but Thailand has other small creatures a " +
    "curious dog or cat can get badly hurt by.",
  sections: [
    { html: '<div class="callout callout-emergency"><p>' + NOTVET + "</p></div>" },
    { h: "Toxic toads", html:
      "<p>Thailand&rsquo;s common toads secrete a <strong>toxin</strong> from " +
      "their skin as a defence. A dog &mdash; or, less often, a cat &mdash; that " +
      "mouths, bites or eats a toad can be poisoned. The first signs are usually " +
      "sudden <strong>drooling or foaming</strong>, pawing at the mouth, head " +
      "shaking and obvious distress; in more serious cases there can be " +
      "wobbliness, vomiting, an abnormal heartbeat, collapse or seizures.</p>" +
      "<p>If you see your pet mouth a toad, act straight away: <strong>rinse the " +
      "mouth out</strong> &mdash; flush and wipe the gums and tongue with running " +
      "water, with the head tilted down so water runs <em>out</em> of the mouth, " +
      "not down the throat &mdash; for several minutes, then get to a " +
      "<a href=\"/pet-emergency/24-hour-vets-pattaya.html\">vet</a>. Any serious " +
      "sign is an emergency. Toads are most active at night and in the rainy " +
      "season.</p>" },
    { h: "Centipedes", html:
      "<p>Thailand has large centipedes whose bite is genuinely painful. A bitten " +
      "pet may yelp, paw at the spot, and develop swelling at the bite. For a " +
      "healthy pet a single bite is usually not life-threatening, but it is " +
      "painful and worth a vet call &mdash; especially if swelling spreads, or " +
      "the pet seems unwell, or it is a small, very young or elderly animal.</p>" },
    { h: "Bees, wasps and hornets", html:
      "<p>A single sting causes pain and local swelling. The situations that need " +
      "a vet urgently are <strong>multiple stings</strong>, a sting <strong>inside " +
      "the mouth or throat</strong> (which can swell and affect breathing), or " +
      "signs of an <strong>allergic reaction</strong> &mdash; facial swelling, " +
      "hives, weakness, breathing difficulty or collapse. Move your pet away from " +
      "the area; for a single sting, watch closely; for any of those warning " +
      "signs, go straight to a vet.</p>" },
    { h: "Scorpions", html:
      "<p>Thailand has scorpions, and a sting is painful, but it is generally not " +
      "dangerous to a healthy dog or cat. Still phone a vet if your pet is small, " +
      "very young or old, or seems genuinely unwell rather than just sore.</p>" },
    { h: "Lowering the risk", html:
      "<p>Supervise pets in gardens, especially at <strong>dusk and night and in " +
      "the rainy season</strong>, when toads and centipedes are most active. " +
      "Discourage your pet from mouthing small creatures, keep the garden tidy " +
      "&mdash; woodpiles and damp corners shelter centipedes &mdash; and know " +
      "your nearest 24-hour vet before you ever need it. For snakes specifically, " +
      "see <a href=\"/pet-emergency/snake-bites.html\">snake bites</a>.</p>" }
  ],
  faqs: [
    ["My dog mouthed a toad - what do I do?",
     "<p>Rinse the mouth out at once: flush and wipe the gums and tongue with running water, head tilted down so water runs out of the mouth, for several minutes. Then get to a vet. Drooling, foaming and pawing at the mouth are the early signs; collapse or seizures are a dire emergency.</p>"],
    ["Is a centipede bite dangerous to a pet?",
     "<p>For a healthy pet a single bite is painful but usually not life-threatening. See a vet if swelling spreads, the pet seems unwell, or it is small, very young or elderly.</p>"],
    ["My pet was stung by a bee - should I worry?",
     "<p>A single sting usually just causes pain and swelling - watch closely. Seek a vet urgently for multiple stings, a sting in the mouth or throat, or signs of an allergic reaction such as facial swelling, hives, weakness or breathing difficulty.</p>"]
  ],
  related: [
    { name: "Snake bites", path: "/pet-emergency/snake-bites.html", desc: "Thailand's venomous snakes, and how to react." },
    { name: "Poisoning", path: "/pet-emergency/poisoning.html", desc: "Toad toxin, baits and other hazards." },
    { name: "Rainy-season pet care", path: "/owning-a-pet-in-pattaya/rainy-season-pet-care.html", desc: "When toads and centipedes are most active." },
    { name: "24-hour vets in Pattaya", path: "/pet-emergency/24-hour-vets-pattaya.html", desc: "Clinics open around the clock." }
  ]
}));

/* ============ ADOPT: FOSTERING ============ */
pages.push(article({
  path: "/adopt-a-pet-pattaya/fostering.html",
  title: "Fostering a Pet in Pattaya | Short-Term Care That Saves Lives | PattayaPets",
  desc: "What fostering a rescue dog or cat in Pattaya involves, why it matters so " +
    "much, what it asks of you, and how to start.",
  crumb: "Fostering",
  breadcrumbs: [GUIDES, ADOPT],
  eyebrow: "Adopt a pet in Pattaya",
  h1: "Fostering a pet in Pattaya",
  lede: "Not ready to adopt for life, but want to help? Fostering is one of the " +
    "most valuable things you can do for Pattaya&rsquo;s animals.",
  sections: [
    { h: "What fostering means", html:
      "<p>As a foster carer you give a rescue animal a <strong>temporary " +
      "home</strong> &mdash; days, weeks or a few months &mdash; while it " +
      "recovers from illness or injury, grows up enough to be rehomed, or simply " +
      "waits for the right permanent family. The rescue organisation usually " +
      "covers the veterinary costs; you provide the home, the routine and the " +
      "care.</p>" },
    { h: "Why it matters here", html:
      "<p>Pattaya&rsquo;s shelters and rescues run at, or beyond, capacity. Every " +
      "foster home does three things at once: it <strong>frees a space</strong> " +
      "for another animal in need, it gets an animal <strong>out of kennels and " +
      "into a real home</strong> &mdash; which lowers its stress and makes it far " +
      "more adoptable &mdash; and it gives puppies, kittens, recovering animals " +
      "and shy individuals the settled environment a shelter cannot.</p>" },
    { h: "What it asks of you", html:
      "<p>Fostering asks for time, a home that suits an animal, and a willingness " +
      "to <strong>say goodbye</strong> when your foster pet is adopted &mdash; the " +
      "hard part, and the whole point. You will follow the rescue&rsquo;s " +
      "guidance, and you should think about how a foster animal will fit with any " +
      "<a href=\"/dogs/\">dogs</a> or <a href=\"/cats/\">cats</a> already in your " +
      "home. Be honest with the " +
      "rescue about what you can and cannot take on &mdash; a good organisation " +
      "wants the match to work.</p>" },
    { h: "How to start", html:
      "<p>Contact the Pattaya shelters and rescues directly and ask about their " +
      "<strong>foster programme</strong> &mdash; most are glad to hear from " +
      "potential fosters. They will talk through your situation and match an " +
      "animal to it. See the <a href=\"/adopt-a-pet-pattaya/\">adopt a pet</a> " +
      "hub for the organisations working in and around the city.</p>" },
    { h: "And if you cannot let go?", html:
      "<p>Sometimes a foster carer realises they cannot part with the animal and " +
      "adopts it themselves &mdash; affectionately called a &lsquo;foster " +
      "failure&rsquo;. It is, of course, a perfectly happy ending.</p>" }
  ],
  faqs: [
    ["What does fostering a pet involve?",
     "<p>Giving a rescue animal a temporary home - days to months - while it recovers, grows up or waits for a permanent family. The rescue usually covers vet costs; you provide the home and care, and follow their guidance.</p>"],
    ["Who pays the veterinary bills for a foster pet?",
     "<p>Usually the rescue organisation covers the veterinary costs. Confirm the arrangement with the specific rescue before you start, so expectations are clear on both sides.</p>"],
    ["Isn't it too hard to give them back?",
     "<p>Saying goodbye is the hard part - but it is the point: each animal you foster and pass on to a permanent home frees you to help the next one. And if you truly cannot let go, adopting your foster pet is a happy ending too.</p>"]
  ],
  related: [
    { name: "Adopt a pet in Pattaya", path: "/adopt-a-pet-pattaya/", desc: "Shelters and rescue organisations." },
    { name: "Helping street animals", path: "/adopt-a-pet-pattaya/how-to-help.html", desc: "More ways to make a difference." },
    { name: "Microchipping your pet", path: "/owning-a-pet-in-pattaya/microchipping-your-pet.html", desc: "Essential once a foster pet is in your care." },
    { name: "Spaying & neutering", path: "/pet-health-pattaya/spaying-and-neutering.html", desc: "Tackling the root of the problem." }
  ]
}));

/* ============ ADOPT: HOW TO HELP ============ */
pages.push(article({
  path: "/adopt-a-pet-pattaya/how-to-help.html",
  title: "How to Help Street Animals in Pattaya | Without Adopting | PattayaPets",
  desc: "Ways to help Pattaya's street dogs and cats without adopting: donating, " +
    "volunteering, fostering, supporting desexing, and what to do for an injured animal.",
  crumb: "How to help",
  breadcrumbs: [GUIDES, ADOPT],
  eyebrow: "Adopt a pet in Pattaya",
  h1: "Helping Pattaya's street animals",
  lede: "You do not have to adopt to make a real difference. There are many ways " +
    "to help the animals of Pattaya.",
  sections: [
    { h: "The picture", html:
      "<p>Pattaya, like much of Thailand, has a large population of free-roaming " +
      "dogs and cats. The city&rsquo;s shelters and rescues do extraordinary " +
      "work, but they are always stretched &mdash; and they rely on residents and " +
      "visitors who want to help.</p>" },
    { h: "Donate", html:
      "<p>Money is what lets a rescue treat, feed and sterilise animals, and even " +
      "small <strong>regular</strong> donations add up. Many organisations also " +
      "welcome supplies &mdash; food, blankets, cleaning materials &mdash; or let " +
      "you sponsor a specific animal. Give to the established, registered rescues; " +
      "the <a href=\"/adopt-a-pet-pattaya/\">adopt a pet</a> hub lists " +
      "organisations working in the area, including " +
      "<a href=\"/adopt-a-pet-pattaya/hope-for-strays.html\">Hope for Strays</a>, " +
      "<a href=\"/adopt-a-pet-pattaya/dog-cat-rescue-pattaya.html\">Dog &amp; Cat Rescue Pattaya</a>, " +
      "<a href=\"/adopt-a-pet-pattaya/soi-dog-foundation.html\">Soi Dog Foundation</a>, " +
      "<a href=\"/adopt-a-pet-pattaya/malees-animal-shelter.html\">Malee&rsquo;s Animal Shelter</a>, " +
      "<a href=\"/adopt-a-pet-pattaya/pattaya-street-dogs-k9aid.html\">Pattaya Street Dogs (K9aid)</a> " +
      "and " +
      "<a href=\"/adopt-a-pet-pattaya/ady-g-second-chance-pattaya.html\">Ady G. Second Chance Pattaya</a>.</p>" },
    { h: "Volunteer", html:
      "<p>Shelters need hands as much as funds: walking and socialising dogs, " +
      "helping with cleaning and feeding, transport, admin, fundraising and " +
      "events. Even occasional help is genuinely useful &mdash; ask a rescue what " +
      "they need and when.</p>" },
    { h: "Foster", html:
      "<p>Opening your home to a rescue animal temporarily frees a shelter space " +
      "and gets an animal the settled environment it needs. See " +
      "<a href=\"/adopt-a-pet-pattaya/fostering.html\">fostering a pet in " +
      "Pattaya</a>.</p>" },
    { h: "If you find an injured or stray animal", html:
      "<p>Put your <strong>own safety first</strong> &mdash; a frightened, hurt " +
      "animal may bite or scratch, however gentle its intentions. If you can " +
      "safely contain, shade or comfort it, do; then contact a local animal " +
      "rescue or welfare group, or a <a href=\"/vets/\">vet</a>. For possible " +
      "poisoning, see <a href=\"/pet-emergency/poisoning.html\">poisoning</a>. " +
      "<a href=\"/adopt-a-pet-pattaya/animal-army-foundation.html\">Animal Army " +
      "Foundation</a> in Na Jomtien operates a rescue ambulance for street " +
      "animals and urgent cases (085 093 5954; see also " +
      "<a href=\"/vets/animal-army-hospital.html\">Animal Army Hospital</a>). " +
      "Do not assume someone else will act. You cannot save every animal, but you " +
      "can do something for the one in front of you.</p>" },
    { h: "Support desexing - the real fix", html:
      "<p>The lasting solution to a street-animal population is " +
      "<strong>sterilisation</strong>. Supporting the rescues that run spay and " +
      "neuter programmes &mdash; and <a href=\"/pet-health-pattaya/spaying-and-neutering.html\">" +
      "neutering your own pets</a> &mdash; addresses the cause, not just the " +
      "symptom. If you feed street animals, do it thoughtfully: feeding alone " +
      "grows colonies, so pair it with support for sterilisation.</p>" }
  ],
  faqs: [
    ["How can I help if I can't adopt a pet?",
     "<p>Donate money or supplies, volunteer your time, foster temporarily, sponsor an animal, and support sterilisation programmes. Even small, regular contributions genuinely help a stretched rescue.</p>"],
    ["I found an injured street dog - what should I do?",
     "<p>Keep yourself safe first, as a hurt animal may bite. If you can safely contain or comfort it, do so, then contact a local rescue, welfare group or vet - some rescues run a rescue ambulance. Acting for the animal in front of you is what matters.</p>"],
    ["Does feeding street animals help?",
     "<p>It can ease immediate hunger, but feeding alone tends to grow colonies. The thoughtful approach is to pair any feeding with support for sterilisation programmes, which address the root of the street-animal problem.</p>"]
  ],
  related: [
    { name: "Adopt a pet in Pattaya", path: "/adopt-a-pet-pattaya/", desc: "Shelters and rescue organisations." },
    { name: "Hope for Strays", path: "/adopt-a-pet-pattaya/hope-for-strays.html", desc: "East Pattaya dog rescue shelter." },
    { name: "Dog & Cat Rescue Pattaya", path: "/adopt-a-pet-pattaya/dog-cat-rescue-pattaya.html", desc: "Dogs and street cats in Pattaya." },
    { name: "Soi Dog Foundation", path: "/adopt-a-pet-pattaya/soi-dog-foundation.html", desc: "Thailand's best-known animal-welfare charity." },
    { name: "Malee's Animal Shelter", path: "/adopt-a-pet-pattaya/malees-animal-shelter.html", desc: "Dogs and cats across Pattaya and Chanthaburi." },
    { name: "Pattaya Street Dogs (K9aid)", path: "/adopt-a-pet-pattaya/pattaya-street-dogs-k9aid.html", desc: "Street dogs and temple-dog colonies." },
    { name: "Ady G. Second Chance Pattaya", path: "/adopt-a-pet-pattaya/ady-g-second-chance-pattaya.html", desc: "Sanctuary for disabled and rescued dogs." },
    { name: "Fostering a pet", path: "/adopt-a-pet-pattaya/fostering.html", desc: "Give a rescue animal a temporary home." },
    { name: "24-hour vets in Pattaya", path: "/pet-emergency/24-hour-vets-pattaya.html", desc: "For injured street animals." },
    { name: "Street-dog encounters", path: "/pet-emergency/street-dog-encounters.html", desc: "Approaching injured or loose animals safely." },
    { name: "Spaying & neutering", path: "/pet-health-pattaya/spaying-and-neutering.html", desc: "The lasting fix for the street-animal problem." }
  ]
}));

/* ============ HEALTH: DENTAL CARE ============ */
pages.push(article({
  path: "/pet-health-pattaya/dental-care.html",
  title: "Pet Dental Care Pattaya | Teeth Cleaning & Gum Health | PattayaPets",
  desc: "Why dental disease is so common in dogs and cats, the signs to watch for, " +
    "home care, and professional dental care - orientation, not veterinary advice.",
  crumb: "Dental care",
  breadcrumbs: [GUIDES, HEALTH],
  eyebrow: "Pet health in Pattaya",
  h1: "Dental care for dogs and cats",
  lede: "Dental disease is one of the most common &mdash; and most overlooked " +
    "&mdash; health problems in pets.",
  verify: HEALTH_VERIFY,
  updated: "2026-05-31",
  sections: [
    { h: "Why dental health matters", html:
      "<p>Dental disease is extremely common in adult dogs and cats. It is " +
      "<strong>painful</strong>, and pets are very good at hiding mouth pain, so " +
      "it often goes unnoticed for a long time. Beyond the mouth, advanced dental " +
      "disease is not just a local problem &mdash; it affects a pet&rsquo;s wider " +
      "wellbeing and comfort. It is also one of the most preventable problems " +
      "there is.</p>" },
    { h: "Signs an owner might notice", html:
      "<p>Things worth a closer look, and a word with your vet:</p>" +
      "<ul><li><strong>Bad breath</strong> &mdash; not normal, and often the " +
      "first sign.</li>" +
      "<li><strong>Yellow or brown tartar</strong> built up on the teeth.</li>" +
      "<li><strong>Red, swollen or bleeding gums</strong>.</li>" +
      "<li><strong>Difficulty eating</strong>, dropping food, or chewing on one " +
      "side.</li>" +
      "<li>Pawing at the mouth, or loose or missing teeth.</li></ul>" },
    { h: "Home care", html:
      "<p>The gold standard is <strong>tooth brushing</strong>, introduced " +
      "gradually and made positive, using a pet toothpaste &mdash; <strong>never " +
      "human toothpaste</strong>, which contains ingredients toxic to pets. " +
      "Vet-recommended dental chews and dental diets can help too. As with most " +
      "things, consistency beats intensity: a little, often.</p>" },
    { h: "Professional dental care", html:
      "<p>Home care slows dental disease; it does not replace the vet. A " +
      "<a href=\"/vets/\">vet</a> checks the mouth at routine visits and, when " +
      "needed, performs a professional clean &mdash; carried out under anaesthetic " +
      "so the whole mouth can be cleaned and assessed properly. Follow your " +
      "vet&rsquo;s advice on how often your pet needs this; do not put it off " +
      "because the mouth &lsquo;looks fine&rsquo;.</p>" },
    { h: "When mouth pain is an emergency", html:
      "<p>Sudden difficulty eating, heavy drooling, facial swelling, bleeding that " +
      "will not stop, or a pet that will not open its mouth at all needs a " +
      "<a href=\"/pet-emergency/24-hour-vets-pattaya.html\">vet promptly</a> &mdash; " +
      "not a wait-and-see approach. Chronic bad breath and tartar are slower problems; " +
      "acute mouth trauma or swelling is urgent. See also " +
      "<a href=\"/pet-emergency/poisoning.html\">poisoning</a> if you suspect your pet " +
      "swallowed something harmful.</p>" }
  ],
  faqs: [
    ["How do I know if my pet has dental disease?",
     "<p>Common signs include bad breath, yellow or brown tartar, red or bleeding gums, difficulty eating, dropping food, pawing at the mouth, and loose teeth. Pets hide mouth pain well, so have a vet check the mouth at routine visits.</p>"],
    ["Can I brush my pet's teeth?",
     "<p>Yes - it is the most effective home care. Introduce it gradually and use a pet toothpaste only; human toothpaste contains ingredients toxic to pets. Vet-recommended dental chews and diets can help alongside brushing.</p>"],
    ["Is bad breath in a pet normal?",
     "<p>No - persistent bad breath is usually a sign of dental disease, not something to accept as normal. Mention it to your vet.</p>"]
  ],
  related: [
    { name: "24-hour vets in Pattaya", path: "/pet-emergency/24-hour-vets-pattaya.html", desc: "Sudden mouth pain or swelling needs a vet promptly." },
    { name: "Skin & ear problems", path: "/pet-health-pattaya/skin-and-ear-problems.html", desc: "Mouth pain can show up as head-shaking or pawing." },
    { name: "Mobile & home-visit vets", path: "/mobile-vets/", desc: "Routine dental checks at home." },
    { name: "Healthy weight", path: "/pet-health-pattaya/healthy-weight.html", desc: "Weight and diet affect dental health too." },
    { name: "What it costs to own a pet", path: "/owning-a-pet-in-pattaya/cost-of-owning-a-pet.html", desc: "Budgeting for routine and unexpected care." }
  ]
}));

/* ============ HEALTH: HEALTHY WEIGHT ============ */
pages.push(article({
  path: "/pet-health-pattaya/healthy-weight.html",
  title: "Pet Obesity Pattaya | Healthy Weight in a Hot Climate | PattayaPets",
  desc: "Why a healthy weight matters even more in Pattaya's heat, how to tell if " +
    "a pet is overweight, why pets gain weight, and how to manage it.",
  crumb: "Healthy weight",
  breadcrumbs: [GUIDES, HEALTH],
  eyebrow: "Pet health in Pattaya",
  h1: "Keeping a pet at a healthy weight",
  lede: "Carrying extra weight is one of the most common and most preventable pet " +
    "health problems &mdash; and in Pattaya&rsquo;s heat it matters even more.",
  verify: HEALTH_VERIFY,
  updated: "2026-05-31",
  sections: [
    { h: "Why weight matters", html:
      "<p>Excess weight is not a cosmetic issue. It strains joints and the heart, " +
      "is linked to other health problems, and shortens lives. In Pattaya it " +
      "carries an extra penalty: an overweight pet <strong>copes far worse with " +
      "the heat</strong>, tiring and overheating more easily than a lean one. In " +
      "a hot climate, a healthy weight is part of basic comfort and safety.</p>" },
    { h: "How to tell if a pet is overweight", html:
      "<p>The scales alone do not tell the story &mdash; body shape does. As a " +
      "rough guide, you should be able to <strong>feel the ribs</strong> easily " +
      "without pressing through a layer of fat, and see a <strong>waist</strong> " +
      "when you look down at your pet. Your <a href=\"/vets/\">vet</a> can assess " +
      "your pet&rsquo;s body condition properly and tell you whether it is at, " +
      "above or below a healthy weight.</p>" },
    { h: "Why pets gain weight here", html:
      "<p>The usual causes: <strong>overfeeding</strong> and too many treats or " +
      "table scraps; free-feeding (food left down all day); and less exercise, " +
      "because the heat limits midday activity. Neutering also changes a " +
      "pet&rsquo;s metabolism, so portions often need trimming afterwards. None " +
      "of these is a failing &mdash; they are just easy to miss.</p>" },
    { h: "Managing it", html:
      "<ul><li><strong>Measure the food</strong> rather than guessing, and feed " +
      "the amount that suits your pet&rsquo;s size and life stage &mdash; ask " +
      "your vet.</li>" +
      "<li><strong>Count the treats</strong> as part of the daily total, not " +
      "extra.</li>" +
      "<li><strong>Exercise in the cool hours</strong> &mdash; see " +
      "<a href=\"/owning-a-pet-in-pattaya/hot-climate-pet-care.html\">hot-climate " +
      "pet care</a>.</li>" +
      "<li><strong>Change gradually</strong>, and have a vet check before a " +
      "weight-loss plan &mdash; to rule out a medical cause and set a safe, " +
      "realistic target.</li></ul>" },
    { h: "When weight becomes urgent", html:
      "<p>Rapid weight loss, a swollen abdomen, collapse, or a pet that stops " +
      "drinking in the heat needs a vet urgently &mdash; see " +
      "<a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour vets in Pattaya</a> " +
      "and " +
      "<a href=\"/pet-emergency/heatstroke.html\">heatstroke</a>. Gradual overweight " +
      "is a slow problem; sudden change in appetite or energy is not.</p>" }
  ],
  faqs: [
    ["How do I know if my pet is overweight?",
     "<p>Look at body shape, not just the scales: you should be able to feel the ribs easily without a thick fat layer, and see a waist from above. Your vet can assess body condition properly.</p>"],
    ["My pet always seems hungry - am I underfeeding it?",
     "<p>Not necessarily - many pets would happily eat well beyond what they need. Measure food to your vet's guidance rather than feeding to appetite, and count treats within the daily total. If appetite changes suddenly, mention it to your vet.</p>"],
    ["How do I help my pet lose weight safely?",
     "<p>Measure food, trim treats, exercise in the cool hours, and make changes gradually. See your vet first - they can rule out a medical cause and set a safe target and pace. Crash dieting is not safe, especially for cats.</p>"]
  ],
  related: [
    { name: "24-hour vets in Pattaya", path: "/pet-emergency/24-hour-vets-pattaya.html", desc: "Sudden collapse or rapid weight loss needs urgent care." },
    { name: "Where to walk your dog", path: "/owning-a-pet-in-pattaya/where-to-walk-your-dog.html", desc: "Exercise and cool-hour routines." },
    { name: "Spaying & neutering", path: "/pet-health-pattaya/spaying-and-neutering.html", desc: "Neutering changes metabolism and appetite." },
    { name: "Dental care", path: "/pet-health-pattaya/dental-care.html", desc: "Weight and dental health go together." },
    { name: "Hot-climate pet care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", desc: "Exercise in the cool hours." }
  ]
}));

/* ============ OWNING: TRAVELLING IN THAILAND ============ */
pages.push(article({
  path: "/owning-a-pet-in-pattaya/travelling-in-thailand.html",
  title: "Travelling in Thailand with a Pet | Road Trips & Domestic Flights | PattayaPets",
  desc: "Taking a pet beyond Pattaya: road trips, domestic flights, pet-friendly " +
    "accommodation, where pets are restricted, and the heat.",
  crumb: "Travelling in Thailand",
  breadcrumbs: [GUIDES, OWNING],
  eyebrow: "Owning a pet in Pattaya",
  h1: "Travelling around Thailand with a pet",
  lede: "Leaving Pattaya for a trip elsewhere in Thailand? With a little planning, " +
    "your pet can come along.",
  verify: "This is general orientation, last reviewed May 2026. Airline pet " +
    "policies and the rules of individual hotels, parks and attractions change " +
    "&mdash; always confirm directly before you rely on them.",
  sections: [
    { h: "Road trips", html:
      "<p>The car is the most flexible way to travel with a pet. Use a " +
      "<strong>secure carrier, crate or travel harness</strong>, never leave a " +
      "pet in a parked vehicle &mdash; it becomes lethally hot astonishingly fast, " +
      "see <a href=\"/pet-emergency/heatstroke.html\">heatstroke</a> &mdash; and " +
      "stop regularly for water and toilet breaks. Bring water, food, your " +
      "pet&rsquo;s records and any medication.</p>" },
    { h: "Domestic flights", html:
      "<p>Some Thai domestic airlines carry pets, in the cabin for small animals " +
      "or as cargo, but <strong>policies vary widely and change</strong>. Check " +
      "<a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">airline pet " +
      "policies</a> well ahead, and expect to need an airline-approved " +
      "crate and to follow the airline&rsquo;s booking process &mdash; a domestic " +
      "flight is still a formal process, not a walk-on.</p>" },
    { h: "Pet-friendly accommodation", html:
      "<p>Pet-friendly hotels and resorts exist across Thailand, but many places " +
      "do not accept animals, so you must search <strong>specifically</strong> " +
      "for pet-friendly stays and <strong>confirm in writing</strong> before you " +
      "travel. In Pattaya, see our guide to " +
      "<a href=\"/dog-friendly-pattaya/hotels.html\">dog-friendly hotels</a>. " +
      "Privately rented condos and villas sometimes allow pets where " +
      "hotels will not.</p>" },
    { h: "Where pets are restricted", html:
      "<p>Do not assume your pet is welcome everywhere. National parks, many " +
      "temples, some beaches and certain attractions restrict or prohibit " +
      "animals, and islands may have their own ferry rules. Check the rules for " +
      "your destination before you set off, so it is not a surprise on " +
      "arrival.</p>" },
    { h: "The heat travels with you", html:
      "<p>Wherever you go in Thailand, it is hot. The same rules apply: cool-hour " +
      "activity, constant water and shade, and no hot vehicles. Keep " +
      "<a href=\"/dogs/dog-vaccinations-thailand.html\">parasite prevention</a> going, and find " +
      "out where the nearest vet is at your destination &mdash; before you need " +
      "one. If a trip is not suitable for your pet, a " +
      "<a href=\"/owning-a-pet-in-pattaya/pet-sitters-and-dog-walkers.html\">pet " +
      "sitter</a> or <a href=\"/boarding/\">boarding</a> may be the kinder " +
      "choice.</p>" }
  ],
  faqs: [
    ["Can I take my pet on a domestic flight in Thailand?",
     "<p>Some Thai domestic airlines carry pets, in cabin or as cargo, but policies vary widely and change. Check the specific airline well in advance, and expect to need an approved crate and to follow their booking process.</p>"],
    ["How do I find pet-friendly hotels in Thailand?",
     "<p>Search specifically for pet-friendly accommodation - many places do not accept animals - and confirm the policy in writing before you travel. Privately rented condos and villas can be an alternative.</p>"],
    ["Is a long road trip safe for my pet?",
     "<p>It can be, with planning: a secure carrier or harness, regular water and toilet stops, never leaving the pet in a parked vehicle, and travelling in cooler hours. If your pet finds car travel very stressful, consider a sitter or boarding instead.</p>"]
  ],
  related: [
    { name: "Boarding & daycare", path: "/boarding/", desc: "If the pet stays behind." },
    { name: "Pet sitters & dog walkers", path: "/owning-a-pet-in-pattaya/pet-sitters-and-dog-walkers.html", desc: "When the pet stays in Pattaya." },
    { name: "Airline pet policies", path: "/bring-pet-to-thailand/airline-pet-policies.html", desc: "Domestic flights and crate rules." },
    { name: "U-Tapao or Bangkok?", path: "/bring-pet-to-thailand/u-tapao-airport-pets.html", desc: "Flying into Thailand for Pattaya." },
    { name: "Dog-friendly hotels", path: "/dog-friendly-pattaya/hotels.html", desc: "Pet-friendly stays in Pattaya and beyond." },
    { name: "Hot-climate pet care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", desc: "Managing the heat, anywhere in Thailand." }
  ]
}));

module.exports = pages;
