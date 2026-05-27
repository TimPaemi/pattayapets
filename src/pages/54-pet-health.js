"use strict";
/* Cluster: Pet health in Pattaya - orientation guides to the conditions a hot,
   humid, parasite-rich climate makes common. Not veterinary advice. */

const { article, hub } = require("../guidekit.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const CLUSTER = { name: "Pet health in Pattaya", path: "/pet-health-pattaya/" };
const SUB = [GUIDES, CLUSTER];

const HEALTH_VERIFY =
  "This is general health orientation, last reviewed May 2026, and is not " +
  "veterinary advice or a diagnosis. PattayaPets is an editorial publication, not " +
  "a veterinary practice. If you are worried about your pet, see a qualified " +
  "veterinarian &mdash; early advice is always better than waiting.";

const RELATED = [
  { name: "Pet health in Pattaya", path: "/pet-health-pattaya/", desc: "Back to the health hub." },
  { name: "Heartworm", path: "/pet-health-pattaya/heartworm.html", desc: "Year-round prevention in Pattaya." },
  { name: "Tick-borne disease", path: "/pet-health-pattaya/tick-borne-disease.html", desc: "Ticks are active all year here." },
  { name: "Skin & ear problems", path: "/pet-health-pattaya/skin-and-ear-problems.html", desc: "Heat and humidity drive flare-ups." },
  { name: "Mobile & home-visit vets", path: "/mobile-vets/", desc: "Routine checks without the clinic stress." },
  { name: "Pet emergencies", path: "/pet-emergency/", desc: "24-hour vets and urgent hazards." }
];

function health(o) {
  return article({
    path: "/pet-health-pattaya/" + o.slug + ".html",
    title: o.title, desc: o.desc, crumb: o.crumb, breadcrumbs: SUB,
    eyebrow: "Pet health in Pattaya",
    h1: o.h1, lede: o.lede, verify: HEALTH_VERIFY,
    sections: o.sections, faqs: o.faqs, related: o.related || RELATED
  });
}

const pages = [];

/* ---------------- HUB ---------------- */
pages.push(hub({
  path: "/pet-health-pattaya/",
  title: "Pet health in Pattaya: a tropical guide | PattayaPets",
  desc: "Orientation to the pet health issues a hot, humid, parasite-rich climate " +
    "makes common in Pattaya: heartworm, tick disease, skin and ear problems and more.",
  crumb: "Pet health",
  breadcrumbs: [GUIDES],
  eyebrow: "Guide",
  h1: "Pet health in Pattaya",
  lede: "A hot, humid, parasite-rich climate gives Pattaya its own pattern of pet " +
    "health concerns. Knowing the pattern helps you prevent trouble and spot it early.",
  intro:
    "<p>This is an orientation hub, not a veterinary service. It explains the " +
    "conditions that newcomers to the tropics most often run into &mdash; what " +
    "they are, why Pattaya makes them more likely, how they are prevented, and the " +
    "signs that should send you to a vet. For diagnosis and treatment, your " +
    "<a href=\"/vets/\">vet</a> is always the right call.</p>" +
    "<p>The common thread is <strong>prevention</strong>. Most of what follows is " +
    "far easier, cheaper and kinder to prevent than to treat.</p>",
  groups: [
    {
      title: "Parasite-borne disease",
      note: "The risks the climate's mosquitoes and ticks carry year-round.",
      cards: [
        { name: "Heartworm", desc: "A mosquito-borne parasite Pattaya makes a year-round risk - and why prevention is everything.", path: "/pet-health-pattaya/heartworm.html" },
        { name: "Tick-borne disease", desc: "The blood-borne illnesses ticks spread here, and the signs to watch for.", path: "/pet-health-pattaya/tick-borne-disease.html" },
        { name: "Parvovirus", desc: "A deadly, preventable virus - why vaccination matters most for puppies.", path: "/pet-health-pattaya/parvovirus.html" }
      ]
    },
    {
      title: "Everyday tropical health",
      cards: [
        { name: "Skin & ear problems", desc: "Why heat and humidity make these so common, and what helps.", path: "/pet-health-pattaya/skin-and-ear-problems.html" },
        { name: "Spaying & neutering", desc: "The benefits, the timing, and the welfare case in a city with many street animals.", path: "/pet-health-pattaya/spaying-and-neutering.html" },
        { name: "Dental care", desc: "Why dental disease is so common, the signs, and home and professional care.", path: "/pet-health-pattaya/dental-care.html" },
        { name: "Healthy weight", desc: "Why a healthy weight matters even more in the heat, and how to manage it.", path: "/pet-health-pattaya/healthy-weight.html" },
        { name: "Rainy-season pet care", desc: "Humidity, damp coats and skin flare-ups in monsoon season.", path: "/owning-a-pet-in-pattaya/rainy-season-pet-care.html" }
      ]
    },
    {
      title: "Related guides",
      cards: [
        { name: "Dog vaccinations & parasites", desc: "The core preventive routines for dogs.", path: "/dogs/dog-vaccinations-thailand.html" },
        { name: "Cat vaccinations & health", desc: "The routine health picture for cats.", path: "/cats/cat-vaccinations-thailand.html" },
        { name: "Ticks & fleas", desc: "Year-round parasite prevention.", path: "/pet-emergency/ticks-and-fleas.html" }
      ]
    }
  ],
  related: [
    { name: "Hot-climate pet care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", desc: "Keeping a pet safe in Pattaya's heat." },
    { name: "Pet emergencies", path: "/pet-emergency/", desc: "24-hour vets and first-aid orientation." },
    { name: "Dog vaccinations & parasites", path: "/dogs/dog-vaccinations-thailand.html", desc: "The core preventive routines for dogs." },
    { name: "Cat vaccinations & health", path: "/cats/cat-vaccinations-thailand.html", desc: "The routine health picture for cats." }
  ]
}));

/* ---------------- HEARTWORM ---------------- */
pages.push(health({
  slug: "heartworm", crumb: "Heartworm",
  title: "Heartworm in pets in Pattaya | PattayaPets",
  desc: "What heartworm is, why Pattaya's year-round mosquitoes make it a constant " +
    "risk, how prevention works, and why it beats treatment every time.",
  h1: "Heartworm: the mosquito-borne risk",
  lede: "Heartworm is the health risk newcomers to the tropics most often " +
    "underestimate &mdash; and the one where prevention matters most.",
  sections: [
    { h: "What heartworm is", html:
      "<p>Heartworm is a parasitic worm spread from animal to animal by " +
      "<strong>mosquito bites</strong>. Over months, the worms grow and live in " +
      "the heart and the large blood vessels of the lungs, where they cause " +
      "serious, progressive damage. It mainly affects dogs, but cats can be " +
      "affected too.</p>" },
    { h: "Why Pattaya makes it a year-round risk", html:
      "<p>Heartworm needs mosquitoes to spread, and Pattaya has mosquitoes " +
      "<strong>all year</strong> &mdash; there is no cold season to break the " +
      "cycle. That is the key difference from cooler countries: prevention here is " +
      "not seasonal, it is continuous. Any dog that goes outdoors, which is every " +
      "dog, is exposed.</p>" },
    { h: "Prevention is simple - treatment is not", html:
      "<p>This is the heart of it. <strong>Prevention</strong> is a regular " +
      "preventive &mdash; given on the schedule your vet sets, year-round &mdash; " +
      "and it is straightforward and inexpensive. <strong>Treatment</strong> of an " +
      "established heartworm infection in a dog is the opposite: a long, costly, " +
      "medically demanding process that carries real risk to the dog. For cats " +
      "there is no equivalent treatment at all, which makes prevention even more " +
      "important. The lesson is blunt &mdash; keep prevention going and you almost " +
      "never face the alternative.</p>" },
    { h: "Signs an owner might notice", html:
      "<p>Early heartworm often shows nothing at all, which is part of the danger. " +
      "As it advances, an owner may notice a <strong>soft cough</strong>, tiring " +
      "easily, reluctance to exercise, or weight loss. Because these appear late, " +
      "you cannot rely on signs &mdash; prevention and the testing your vet " +
      "recommends are what protect a pet.</p>" },
    { h: "What to do", html:
      "<p>Talk to your <a href=\"/vets/\">vet</a> about a year-round heartworm " +
      "preventive as a basic, non-negotiable part of owning a pet in Pattaya, and " +
      "follow the schedule without gaps. A vet may also advise a test before " +
      "starting or restarting prevention. See our guide to " +
      "<a href=\"/dogs/dog-vaccinations-thailand.html\">dog vaccinations and " +
      "parasite prevention</a> for how it fits the wider routine.</p>" }
  ],
  faqs: [
    ["Does my pet really need heartworm prevention all year in Pattaya?",
     "<p>Yes. Heartworm spreads by mosquito, and Pattaya has mosquitoes year-round, so prevention is continuous rather than seasonal. Your vet will recommend a product and schedule.</p>"],
    ["Why is prevention emphasised so heavily?",
     "<p>Because treating an established infection is long, costly and risky for a dog, and for cats there is no equivalent treatment. Prevention is simple and inexpensive by comparison - it is genuinely the whole game.</p>"],
    ["Can indoor cats get heartworm?",
     "<p>Cats can be affected by heartworm, and mosquitoes get indoors. Ask your vet whether heartworm prevention is right for your cat, especially as there is no feline treatment if it takes hold.</p>"]
  ],
  related: [
    { name: "Dog vaccinations & parasites", path: "/dogs/dog-vaccinations-thailand.html", desc: "How prevention fits the wider routine." },
    { name: "Ticks & fleas", path: "/pet-emergency/ticks-and-fleas.html", desc: "Year-round parasite prevention." },
    { name: "Mobile & home-visit vets", path: "/mobile-vets/", desc: "Routine prevention visits at home." },
    { name: "Pet health in Pattaya", path: "/pet-health-pattaya/", desc: "Back to the health hub." }
  ]
}));

/* ---------------- TICK-BORNE DISEASE ---------------- */
pages.push(health({
  slug: "tick-borne-disease", crumb: "Tick-borne disease",
  title: "Tick-borne disease in dogs in Pattaya | PattayaPets",
  desc: "The blood-borne diseases ticks spread in Thailand - sometimes called tick " +
    "fever - the signs to watch for, and why year-round prevention matters.",
  h1: "Tick-borne disease: the hidden danger of ticks",
  lede: "A tick is more than an itch. In the tropics, ticks carry blood-borne " +
    "diseases that can make a dog seriously, sometimes lastingly, unwell.",
  sections: [
    { h: "More than a parasite", html:
      "<p>Ticks are a year-round fact of life in Pattaya&rsquo;s climate. The real " +
      "concern is not the tick itself but what it can transmit: a group of " +
      "<strong>blood-borne diseases</strong> &mdash; including ehrlichiosis, " +
      "babesiosis and anaplasmosis &mdash; sometimes spoken of together as " +
      "&lsquo;tick fever&rsquo;. These can make a dog genuinely ill, and some can " +
      "become long-term problems.</p>" },
    { h: "Signs an owner might notice", html:
      "<p>Tick-borne illness can be vague and easy to miss at first. Signs an " +
      "owner may notice include <strong>lethargy</strong>, loss of appetite, " +
      "fever, weakness, pale gums, bruising or bleeding that seems unusual, " +
      "lameness or stiffness, and weight loss. None of these is proof of tick " +
      "disease &mdash; but all of them are reasons to see a <a href=\"/vets/\">" +
      "vet</a>, and to mention any recent tick exposure.</p>" },
    { h: "Why early action matters", html:
      "<p>Caught early, tick-borne diseases are often treatable. Left to run, some " +
      "can do lasting damage. So the rule is simple: if your dog seems unwell and " +
      "has been around ticks, do not wait it out &mdash; have a vet look. Only a " +
      "vet can diagnose these conditions, usually with blood tests.</p>" },
    { h: "Prevention: the real defence", html:
      "<p>The way to win against tick-borne disease is to <strong>not let it " +
      "start</strong>. That means consistent, <strong>year-round tick " +
      "prevention</strong> on your vet&rsquo;s plan, plus checking your dog over " +
      "for ticks after walks and removing any you find promptly and properly. Our " +
      "guide to <a href=\"/pet-emergency/ticks-and-fleas.html\">ticks and fleas</a> " +
      "covers prevention in more detail.</p>" },
    { h: "Removing a tick", html:
      "<p>If you find a tick, remove it promptly: grasp it close to the skin with " +
      "fine tweezers or a tick tool and pull steadily, without twisting or " +
      "crushing it. Do not use heat or chemicals. If you are unsure, or the tick " +
      "is awkwardly placed, a vet or vet nurse can do it &mdash; and can advise on " +
      "prevention while you are there.</p>" }
  ],
  faqs: [
    ["What is 'tick fever'?",
     "<p>It is an informal term for the group of blood-borne diseases ticks transmit - such as ehrlichiosis, babesiosis and anaplasmosis. They can make a dog seriously unwell, and only a vet can diagnose them, usually by blood test.</p>"],
    ["What are the warning signs?",
     "<p>Lethargy, loss of appetite, fever, weakness, pale gums, unusual bruising or bleeding, lameness or weight loss. Any of these, especially after tick exposure, is a reason to see a vet promptly.</p>"],
    ["How do I protect my dog?",
     "<p>Consistent year-round tick prevention on your vet's plan, plus checking your dog for ticks after walks and removing any promptly. Prevention is far more reliable than catching disease early.</p>"]
  ],
  related: [
    { name: "Ticks & fleas", path: "/pet-emergency/ticks-and-fleas.html", desc: "Year-round prevention in the tropics." },
    { name: "Dog vaccinations & parasites", path: "/dogs/dog-vaccinations-thailand.html", desc: "Keeping prevention on schedule." },
    { name: "Common dog health issues", path: "/dogs/common-dog-health-issues-tropics.html", desc: "Other tropical risks for dogs." },
    { name: "Pet health in Pattaya", path: "/pet-health-pattaya/", desc: "The tropical-climate health picture." }
  ]
}));

/* ---------------- PARVOVIRUS ---------------- */
pages.push(health({
  slug: "parvovirus", crumb: "Parvovirus",
  title: "Parvovirus in dogs in Pattaya | PattayaPets",
  desc: "What parvovirus is, why it is so dangerous for unvaccinated puppies in " +
    "Pattaya, the warning signs, and why vaccination is the protection.",
  h1: "Parvovirus: deadly, and preventable",
  lede: "Parvovirus is one of the most dangerous illnesses an unvaccinated puppy " +
    "can meet &mdash; and one of the most preventable.",
  sections: [
    { h: "What parvovirus is", html:
      "<p>Canine parvovirus is a <strong>highly contagious viral disease</strong> " +
      "that attacks the gut and the immune system. It mainly strikes " +
      "<strong>unvaccinated puppies and young dogs</strong>, and without prompt " +
      "intensive veterinary care it is frequently fatal. The virus is extremely " +
      "hardy &mdash; it survives a long time in the environment and resists many " +
      "ordinary cleaners.</p>" },
    { h: "Why it matters in Pattaya", html:
      "<p>Parvovirus spreads through contact with an infected dog or with a " +
      "contaminated environment &mdash; ground, surfaces, shoes. In a warm city " +
      "with a free-roaming dog population, the chance of an unvaccinated puppy " +
      "meeting the virus is real. This is exactly why a new puppy is kept away " +
      "from unknown dogs and public ground until its vaccination course is " +
      "complete &mdash; see <a href=\"/dogs/puppy-care-pattaya.html\">puppy care " +
      "in Pattaya</a>.</p>" },
    { h: "The warning signs", html:
      "<p>Parvovirus in a puppy is dramatic and fast: <strong>severe vomiting</strong>, " +
      "profuse and often bloody <strong>diarrhoea</strong>, deep lethargy, refusal " +
      "to eat or drink, and rapid collapse. It is a <strong>dire emergency</strong>. " +
      "A puppy showing these signs needs a <a href=\"/pet-emergency/24-hour-vets-pattaya.html\">" +
      "vet immediately</a> &mdash; do not wait and see.</p>" },
    { h: "Vaccination is the protection", html:
      "<p>The reason parvovirus is described as preventable is the " +
      "<strong>vaccine</strong>. The standard puppy vaccination course protects " +
      "against parvovirus, and keeping boosters current maintains that protection. " +
      "There is no clever alternative &mdash; vaccinate on your vet&rsquo;s " +
      "schedule, and do not cut the course short. See " +
      "<a href=\"/dogs/dog-vaccinations-thailand.html\">dog vaccinations</a>.</p>" },
    { h: "What about cats?", html:
      "<p>Cats have their own equivalent &mdash; feline panleukopenia, sometimes " +
      "called feline parvo &mdash; which is also serious and also preventable by " +
      "the standard cat vaccine. The same lesson applies: vaccinate, and keep it " +
      "current. See <a href=\"/cats/cat-vaccinations-thailand.html\">cat " +
      "vaccinations</a>.</p>" }
  ],
  faqs: [
    ["How do I protect my puppy from parvovirus?",
     "<p>Vaccination. The standard puppy vaccination course protects against parvovirus - complete the full course on your vet's schedule, keep boosters current, and keep an unvaccinated puppy away from unknown dogs and public ground until the course is finished.</p>"],
    ["What are the signs of parvovirus?",
     "<p>Severe vomiting, profuse and often bloody diarrhoea, deep lethargy, and refusing food and water - coming on fast in a puppy or young dog. It is a dire emergency; get to a vet immediately.</p>"],
    ["Can older dogs get parvovirus?",
     "<p>It mainly affects unvaccinated puppies and young dogs, but keeping every dog's vaccinations current is the protection at any age. Ask your vet about your dog's booster schedule.</p>"]
  ],
  related: [
    { name: "Puppy care in Pattaya", path: "/dogs/puppy-care-pattaya.html", desc: "Vaccination timing for a new puppy." },
    { name: "Dog vaccinations", path: "/dogs/dog-vaccinations-thailand.html", desc: "The full vaccination and prevention routine." },
    { name: "24-hour vets in Pattaya", path: "/pet-emergency/24-hour-vets-pattaya.html", desc: "Go straight here if you suspect parvo." },
    { name: "Pet emergencies", path: "/pet-emergency/", desc: "Back to the emergency hub." }
  ]
}));

/* ---------------- SKIN & EAR ---------------- */
pages.push(health({
  slug: "skin-and-ear-problems", crumb: "Skin & ear problems",
  title: "Pet skin and ear problems in Pattaya's climate | PattayaPets",
  desc: "Why heat and humidity make skin infections, hot spots and ear infections " +
    "so common in Pattaya pets, and what helps prevent and manage them.",
  h1: "Skin and ear problems in a humid climate",
  lede: "Heat and humidity are hard on skin. Skin and ear trouble is one of the " +
    "most common reasons Pattaya pets end up at the vet.",
  sections: [
    { h: "Why the climate drives it", html:
      "<p>Warmth and moisture are exactly what yeast and bacteria like. In " +
      "Pattaya&rsquo;s humidity, a coat that stays damp, a skin fold that does " +
      "not dry, or an ear canal with poor airflow becomes a place for infection " +
      "to take hold. That is why <strong>skin and ear conditions</strong> &mdash; " +
      "uncommon background problems in cooler countries &mdash; are everyday " +
      "issues here.</p>" },
    { h: "What it looks like", html:
      "<p>Common forms include yeast and bacterial <strong>skin infections</strong>, " +
      "<strong>hot spots</strong> (a sore, inflamed patch that flares up fast), " +
      "and <strong>ear infections</strong>. Signs an owner notices: persistent " +
      "scratching, licking or chewing, redness, a bad smell, discharge, hair " +
      "loss, head-shaking or an ear that is sore to touch.</p>" },
    { h: "Breeds and pets most at risk", html:
      "<p>Some pets are more prone than others: <strong>floppy-eared dogs</strong>, " +
      "whose ear canals get less air; <strong>skin-folded breeds</strong>, whose " +
      "folds trap moisture; and any pet that swims or is bathed often without " +
      "being dried properly afterwards. If your pet is in one of these groups, " +
      "routine checking and drying matters even more.</p>" },
    { h: "Do not wait it out", html:
      "<p>The single most useful thing to know: skin and ear problems in this " +
      "climate tend to <strong>get worse, not better</strong>, when left. A small " +
      "irritation a pet keeps scratching becomes a bigger infection. See a " +
      "<a href=\"/vets/\">vet</a> early &mdash; they can find the cause (which " +
      "might be parasites, an allergy or a primary infection) and treat it " +
      "properly. Guessing with leftover or human products often makes things " +
      "worse.</p>" },
    { h: "What helps prevent it", html:
      "<ul><li><strong>Dry your pet thoroughly</strong> after swimming, bathing " +
      "or a wet walk &mdash; ears and skin folds included.</li>" +
      "<li><strong>Keep parasite prevention going</strong> &mdash; fleas and " +
      "mites are a common trigger of skin disease.</li>" +
      "<li><strong>Check ears and skin regularly</strong>, so you catch trouble " +
      "while it is small.</li>" +
      "<li><strong>Groom appropriately</strong> for the coat and the climate " +
      "&mdash; a <a href=\"/groomers/\">groomer</a> can advise.</li></ul>" }
  ],
  faqs: [
    ["Why does my pet keep getting skin or ear infections in Pattaya?",
     "<p>Heat and humidity let yeast and bacteria thrive, especially where a coat, skin fold or ear canal stays damp. Floppy-eared and skin-folded breeds are most prone. They tend to recur, so finding the underlying cause with a vet matters.</p>"],
    ["Should I treat it myself?",
     "<p>It is best not to guess. Skin and ear problems have several possible causes - parasites, allergies, infection - and the wrong product can worsen things. A vet can identify the cause and treat it properly; early is easier than late.</p>"],
    ["How can I help prevent it?",
     "<p>Dry your pet thoroughly after any soaking, ears and folds included; keep flea and parasite prevention going; check ears and skin regularly; and groom appropriately for the climate.</p>"]
  ],
  related: [
    { name: "Rainy-season pet care", path: "/owning-a-pet-in-pattaya/rainy-season-pet-care.html", desc: "Humidity and damp coats drive flare-ups." },
    { name: "Groomers in Pattaya", path: "/groomers/", desc: "Coat care in the climate." },
    { name: "Ticks & fleas", path: "/pet-emergency/ticks-and-fleas.html", desc: "Parasites that trigger skin disease." },
    { name: "Mobile & home-visit vets", path: "/mobile-vets/", desc: "Skin checks without the clinic stress." }
  ]
}));

/* ---------------- SPAYING & NEUTERING ---------------- */
pages.push(health({
  slug: "spaying-and-neutering", crumb: "Spaying & neutering",
  title: "Spaying and neutering pets in Pattaya | PattayaPets",
  desc: "What spaying and neutering involve, the benefits for your pet, the timing, " +
    "and the welfare case in a city with a large street-animal population.",
  h1: "Spaying and neutering in Pattaya",
  lede: "Neutering is one of the most worthwhile, and most routine, things you can " +
    "do for a pet in Pattaya &mdash; for the pet, and for the city.",
  sections: [
    { h: "What it is", html:
      "<p>Spaying (females) and neutering (males) are routine surgical procedures, " +
      "carried out by a vet under anaesthetic, that prevent a pet from breeding. " +
      "They are among the most commonly performed operations in veterinary " +
      "practice, and in Pattaya they are widely available and affordable.</p>" },
    { h: "The benefits for your pet", html:
      "<p>Beyond preventing unwanted litters, neutering tends to <strong>reduce " +
      "roaming</strong> &mdash; and a pet that roams less meets less traffic, " +
      "fewer fights and less disease. It can reduce fighting and territorial " +
      "behaviour such as spraying, and it removes or lowers some later health " +
      "risks. Your vet can explain what it means specifically for your pet.</p>" },
    { h: "The welfare case", html:
      "<p>Pattaya, like much of Thailand, has a large population of free-roaming, " +
      "unwanted dogs and cats. Every unplanned litter adds to it. Neutering your " +
      "own pet &mdash; and supporting the rescues and shelters that run " +
      "sterilisation programmes &mdash; is one of the most genuinely effective " +
      "things an animal lover here can do. See " +
      "<a href=\"/adopt-a-pet-pattaya/\">adopt a pet in Pattaya</a> for the " +
      "organisations doing this work.</p>" },
    { h: "When to do it", html:
      "<p>The right age depends on the species, the breed and the size of the " +
      "animal, and veterinary thinking on timing continues to evolve. Rather than " +
      "follow a fixed rule, <strong>ask your vet</strong> what they recommend for " +
      "your specific pet &mdash; it is a normal, straightforward conversation.</p>" },
    { h: "What to expect", html:
      "<p>It is a routine day procedure at most clinics. Your vet will explain the " +
      "pre-operative checks, the anaesthetic, and the simple aftercare &mdash; " +
      "rest, keeping the wound clean and protected, and a short recovery. If you " +
      "have adopted from a Pattaya rescue, your pet has very likely already been " +
      "neutered as part of the rehoming process.</p>" }
  ],
  faqs: [
    ["Should I spay or neuter my pet?",
     "<p>For most pet owners in Pattaya, yes. It prevents unwanted litters in a city with a large street-animal problem, tends to reduce roaming and fighting and the risks that come with them, and is a routine, affordable procedure. Discuss it with your vet.</p>"],
    ["When is the right age?",
     "<p>It depends on species, breed and size, and veterinary guidance evolves. Ask your vet what they recommend for your specific pet rather than following a fixed rule.</p>"],
    ["Is it expensive in Pattaya?",
     "<p>Spaying and neutering are routine and generally affordable at Pattaya clinics. Some rescues and welfare groups also run low-cost or subsidised sterilisation programmes as part of tackling the street-animal population.</p>"]
  ],
  related: [
    { name: "Adopt a pet in Pattaya", path: "/adopt-a-pet-pattaya/", desc: "Rescues often neuter before rehoming." },
    { name: "How to help street animals", path: "/adopt-a-pet-pattaya/how-to-help.html", desc: "Supporting sterilisation programmes." },
    { name: "Cat vaccinations", path: "/cats/cat-vaccinations-thailand.html", desc: "Routine care for cats." },
    { name: "Mobile & home-visit vets", path: "/mobile-vets/", desc: "Some offer home-visit neutering." }
  ]
}));

module.exports = pages;
