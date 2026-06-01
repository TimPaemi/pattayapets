"use strict";
/* Species clusters: cat-owner and dog-owner guides. These are the child
   pages that sit under the /cats/ and /dogs/ species hubs (defined in
   46-misc.js). Each is a guidekit article -> Article + FAQPage schema. */

const { article } = require("../guidekit.js");

const CATS = { name: "Cats", path: "/cats/" };
const DOGS = { name: "Dogs", path: "/dogs/" };

const pages = [];

function cat(o) {
  return article({
    path: "/cats/" + o.slug + ".html",
    title: o.title, desc: o.desc, crumb: o.crumb, breadcrumbs: [CATS],
    eyebrow: "Cats in Pattaya",
    h1: o.h1, lede: o.lede, verify: o.verify,
    sections: o.sections, faqs: o.faqs, related: o.related
  });
}

function dog(o) {
  return article({
    path: "/dogs/" + o.slug + ".html",
    title: o.title, desc: o.desc, crumb: o.crumb, breadcrumbs: [DOGS],
    eyebrow: "Dogs in Pattaya",
    h1: o.h1, lede: o.lede, verify: o.verify,
    sections: o.sections, faqs: o.faqs, related: o.related
  });
}

/* ===================== CATS ===================== */

pages.push(cat({
  slug: "indoor-vs-outdoor-cats", crumb: "Indoor or outdoor?",
  title: "Indoor vs Outdoor Cats Pattaya | Balcony Safety & Street Risks | PattayaPets",
  desc: "Whether to let a cat outside in Pattaya, the real risks of the streets " +
    "here, balcony safety in condos, and how to give an indoor cat a good life.",
  h1: "Indoor or outdoor? Keeping a cat safe in Pattaya",
  lede: "It is one of the first decisions a cat owner makes here &mdash; and in " +
    "Pattaya it carries more weight than it would in a quiet Western suburb.",
  sections: [
    { h: "What the outdoors really looks like for a cat here", html:
      "<p>Pattaya is busier and less forgiving than many newcomers expect. A cat " +
      "with free outdoor access faces:</p>" +
      "<ul><li><strong>Traffic</strong> &mdash; busy sois, motorbikes and fast, " +
      "constant movement.</li>" +
      "<li><strong>Free-roaming dogs</strong> &mdash; loose and street dogs that " +
      "may chase or corner a cat.</li>" +
      "<li><strong>Cat fights and disease</strong> &mdash; territorial fighting " +
      "spreads serious infections, including FIV and feline leukaemia (FeLV), " +
      "through bites.</li>" +
      "<li><strong>Parasites</strong> &mdash; ticks, fleas and worms are " +
      "year-round in this climate. See " +
      "<a href=\"/pet-emergency/ticks-and-fleas.html\">ticks &amp; fleas</a>.</li>" +
      "<li><strong>Poisons</strong> &mdash; pest bait, chemicals and toxic " +
      "plants. See <a href=\"/pet-emergency/poisoning.html\">poisoning hazards</a>.</li>" +
      "<li><strong>Loss and theft</strong> &mdash; an unneutered, unmicrochipped " +
      "cat that wanders can simply not come home. See " +
      "<a href=\"/owning-a-pet-in-pattaya/microchipping-your-pet.html\">microchipping</a> " +
      "and <a href=\"/owning-a-pet-in-pattaya/lost-pet-pattaya.html\">if your pet goes missing</a>.</li></ul>" },
    { h: "The case for an indoor or indoor-mostly life", html:
      "<p>For these reasons, many expat cat owners in Pattaya keep their cats " +
      "<strong>indoors</strong>, or indoor with access only to a safely enclosed " +
      "balcony or garden. Indoor cats here tend to live longer, healthier lives on " +
      "average, and you keep control of the heat, the parasites and the company " +
      "your cat keeps. It is not a lesser life for a cat &mdash; provided the " +
      "indoor space is set up well.</p>" },
    { h: "Making an indoor life genuinely good", html:
      "<p>A bored indoor cat is the real argument against indoor life, so design " +
      "the space around the cat:</p>" +
      "<ul><li><strong>Vertical space</strong> &mdash; shelves, a cat tree, " +
      "window perches. Cats use height the way we use floor space.</li>" +
      "<li><strong>Daily play</strong> &mdash; short, active sessions with wand " +
      "toys; rotate toys so they stay interesting.</li>" +
      "<li><strong>Scratching posts</strong> &mdash; sturdy, tall, in the rooms " +
      "the cat actually uses.</li>" +
      "<li><strong>A window on the world</strong> &mdash; a screened window or " +
      "a view keeps a cat engaged.</li>" +
      "<li><strong>Company</strong> &mdash; two cats that get along will keep " +
      "each other occupied.</li></ul>" },
    { h: "Balconies and high-rise condos", html:
      "<p>A condo balcony is the classic Pattaya hazard. Cats are not as " +
      "sure-footed as people assume &mdash; they misjudge, they chase, they fall, " +
      "and a fall from a condo floor is often fatal or badly injuring. If your " +
      "cat will use a balcony, <strong>screen or net it fully</strong> first. " +
      "Cat-proof balcony netting is widely available and is the single most " +
      "useful thing a high-rise cat owner can do. Never treat an open balcony as " +
      "safe just because the cat &lsquo;has not jumped yet&rsquo;.</p>" },
    { h: "If your cat does go outside", html:
      "<p>If an indoor-outdoor life suits your home &mdash; a quiet soi, a walled " +
      "garden &mdash; reduce the risk first:</p>" +
      "<ul><li><strong>Neuter</strong> the cat &mdash; it roams far less, fights " +
      "far less, and cannot add to the street-cat population. See " +
      "<a href=\"/pet-health-pattaya/spaying-and-neutering.html\">spaying &amp; neutering</a>.</li>" +
      "<li><strong>Microchip and collar</strong> it, so a lost cat can come " +
      "home. See <a href=\"/owning-a-pet-in-pattaya/microchipping-your-pet.html\">microchipping</a>.</li>" +
      "<li>Keep <strong>vaccinations and parasite prevention</strong> fully up " +
      "to date &mdash; an outdoor cat needs them most. See " +
      "<a href=\"/cats/cat-vaccinations-thailand.html\">cat vaccinations</a> and " +
      "<a href=\"/pet-emergency/ticks-and-fleas.html\">ticks &amp; fleas</a>.</li>" +
      "<li>Bring the cat in <strong>overnight</strong>, when traffic, " +
      "<a href=\"/pet-emergency/street-dog-encounters.html\">street dogs</a> and " +
      "fights peak.</li></ul>" }
  ],
  faqs: [
    ["Is it safe to let my cat outside in Pattaya?",
     "<p>It carries real risk &mdash; traffic, free-roaming dogs, fighting and disease, parasites and theft. Many owners here keep cats indoors or limit them to a fully enclosed balcony or garden. If your cat does go out, neuter, microchip, vaccinate and keep parasite prevention current, and bring it in overnight.</p>"],
    ["My condo has a balcony &mdash; is that safe for my cat?",
     "<p>Not as it is. Cats fall from condo balconies, and a fall from height is often fatal. Screen or net the balcony fully before letting a cat use it. Cat-proof balcony netting is easy to find in Pattaya.</p>"],
    ["How do I keep an indoor cat happy?",
     "<p>Build the home around the cat: vertical space and perches, daily wand-toy play, sturdy scratching posts, a window view, and ideally a compatible companion cat. A well-set-up indoor home is a good life for a cat.</p>"],
    ["Should I leash-walk an indoor cat in Pattaya?",
     "<p>Some owners use a harness for supervised balcony or garden time. Never rely on a collar alone outdoors — traffic and dogs are real risks. See <a href=\"/cats/getting-a-cat-in-pattaya.html\">getting a cat in Pattaya</a> for adoption options.</p>"],
    ["Do indoor cats still need parasite prevention?",
     "<p>Often yes — fleas and ticks can enter on people or other pets. Ask your vet about prevention suited to an indoor lifestyle.</p>"]
  ],
  related: [
    { name: "Cat vaccinations", path: "/cats/cat-vaccinations-thailand.html", desc: "Routine vaccines and parasite prevention." },
    { name: "Hot-climate pet care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", desc: "Heat and outdoor access for cats." },
    { name: "Poisoning hazards", path: "/pet-emergency/poisoning.html", desc: "Baits and toxins on the streets." },
    { name: "Getting a cat in Pattaya", path: "/cats/getting-a-cat-in-pattaya.html", desc: "Adopting, kittens and street cats." }
  ]
}));

pages.push(cat({
  slug: "cat-vaccinations-thailand", crumb: "Vaccinations & health",
  title: "Cat Vaccinations Thailand | Schedule for Cats in Pattaya | PattayaPets",
  desc: "An orientation to cat vaccinations, parasite prevention, neutering and " +
    "routine health for cat owners in Pattaya and Thailand.",
  h1: "Cat vaccinations and routine health in Thailand",
  lede: "Keeping a cat healthy in Pattaya is mostly about a few routines done " +
    "consistently &mdash; here is the shape of them, so you know what to ask.",
  verify: "This is general orientation, last reviewed May 2026, and is not " +
    "veterinary advice. Your vet sets the actual vaccination plan for your cat " +
    "based on its age, health and lifestyle &mdash; always follow their guidance.",
  sections: [
    { h: "Core vaccinations", html:
      "<p>Vets in Thailand routinely vaccinate cats against the main feline " +
      "diseases. In broad terms a cat&rsquo;s programme usually covers:</p>" +
      "<ul><li>A <strong>combined feline vaccine</strong> &mdash; commonly " +
      "protecting against feline panleukopenia (feline &lsquo;parvo&rsquo;), and " +
      "the two main cat-flu viruses, feline herpesvirus and calicivirus.</li>" +
      "<li><strong>Rabies</strong> &mdash; important here, and a legal duty for " +
      "cats as well as dogs in Thailand.</li></ul>" +
      "<p>Kittens have a starter course of injections a few weeks apart, then " +
      "boosters through life. Your vet will set the exact schedule and tell you " +
      "when the next one is due &mdash; keep the vaccination record.</p>" },
    { h: "Feline leukaemia (FeLV) and FIV", html:
      "<p>FeLV and FIV are serious viral infections spread mainly between cats, " +
      "and they matter most for cats that go outside and fight. A vet may " +
      "recommend testing &mdash; especially for a new or rescued cat &mdash; and " +
      "an FeLV vaccination for cats with outdoor access. Discuss your cat&rsquo;s " +
      "lifestyle honestly with the vet so the plan fits it.</p>" },
    { h: "Parasite prevention &mdash; all year", html:
      "<p>Pattaya&rsquo;s climate means fleas, ticks and worms never have an " +
      "off-season. Cats need <strong>year-round</strong> flea and tick control " +
      "and regular worming &mdash; yes, indoor cats too, because parasites come " +
      "in on shoes, on other pets and through windows. Your vet will recommend a " +
      "product and an interval. See our guide to " +
      "<a href=\"/pet-emergency/ticks-and-fleas.html\">ticks and fleas</a>.</p>" },
    { h: "Neutering and spaying", html:
      "<p>Neutering is one of the most worthwhile things you can do for a cat in " +
      "Pattaya. It prevents unwanted litters in a city that already has far too " +
      "many street cats, reduces roaming and fighting (and so the disease and " +
      "injury that come with them), and removes some later health risks. It is a " +
      "routine, affordable procedure at Pattaya clinics; ask your vet about the " +
      "right age for your cat.</p>" },
    { h: "Routine check-ups", html:
      "<p>An annual check-up &mdash; often combined with the booster visit &mdash; " +
      "lets a vet catch dental disease, weight problems and early illness while " +
      "they are still easy to manage. Cats hide illness well, so do not wait for " +
      "obvious signs; if something seems off, see a <a href=\"/vets/\">vet</a>.</p>" }
  ],
  faqs: [
    ["What vaccinations does my cat need in Thailand?",
     "<p>Typically a combined feline vaccine covering panleukopenia and the cat-flu viruses, plus rabies, which is a legal requirement. Kittens get a starter course then lifelong boosters. Your vet sets the exact schedule for your cat.</p>"],
    ["Is cat vaccination expensive in Pattaya?",
     "<p>Routine vaccinations and check-ups are generally very affordable by Western standards. The bigger costs come from treating illness or injury, which is part of the case for a savings buffer or insurance.</p>"],
    ["Should I neuter my cat?",
     "<p>For almost every pet cat in Pattaya, yes. It prevents unwanted litters, cuts roaming and fighting and the disease that spreads through fights, and is a routine, affordable procedure. Ask your vet about timing.</p>"],
    ["When should kittens start vaccinations?",
     "<p>Usually in the first weeks of life, with boosters on a schedule your vet sets. Do not let an unvaccinated kitten mix with unknown cats until the course is complete.</p>"],
    ["Are rabies boosters required by law for cats?",
     "<p>Yes — Thai law requires current rabies vaccination for cats as well as dogs. Keep the certificate and schedule boosters before expiry.</p>"]
  ],
  related: [
    { name: "Indoor vs outdoor cats", path: "/cats/indoor-vs-outdoor-cats.html", desc: "Keeping cats safe in Pattaya." },
    { name: "Spaying & neutering", path: "/pet-health-pattaya/spaying-and-neutering.html", desc: "Why neutering matters in Pattaya." },
    { name: "Heartworm", path: "/pet-health-pattaya/heartworm.html", desc: "Mosquito-borne prevention year-round." },
    { name: "Ticks & fleas", path: "/pet-emergency/ticks-and-fleas.html", desc: "Year-round parasite prevention." },
    { name: "Pet health in Pattaya", path: "/pet-health-pattaya/", desc: "The tropical-climate health picture." }
  ]
}));

pages.push(cat({
  slug: "getting-a-cat-in-pattaya", crumb: "Getting a cat",
  title: "Getting a Cat in Pattaya | Adopt, Buy or Rescue | PattayaPets",
  desc: "How to get a cat in Pattaya: adopting from shelters, taking in a street " +
    "kitten, what to do first, and settling a new cat into your home.",
  h1: "Getting a cat in Pattaya: adopt, kitten or street cat",
  lede: "There is no shortage of cats in Pattaya that need a home &mdash; the " +
    "question is mostly how to do it well for the cat and for you.",
  sections: [
    { h: "Adopting from a shelter or rescue", html:
      "<p>Adoption is the route we would point most people to first. Pattaya and " +
      "the wider region have shelters and rescues with cats and kittens looking " +
      "for homes, and a reputable rescue will usually have already vaccinated, " +
      "neutered and health-checked the cat &mdash; so you start from a known, " +
      "settled position. See the " +
      "<a href=\"/adopt-a-pet-pattaya/\">adopt a pet</a> hub for organisations.</p>" },
    { h: "The street-kitten reality", html:
      "<p>Many people in Pattaya do not choose a cat so much as a cat chooses " +
      "them &mdash; a kitten appears, and they take it in. That is a kind thing to " +
      "do, but go straight to a <strong>vet</strong> first. A street kitten needs " +
      "a health check, parasite treatment (fleas, ticks and worms are almost " +
      "guaranteed), and, when old enough, vaccination and neutering. If you " +
      "already have cats, <strong>keep the newcomer separate</strong> until a vet " +
      "has checked it, because of FeLV, FIV and other infections.</p>" },
    { h: "Buying a kitten", html:
      "<p>If you buy from a breeder or shop, take care. Ask to see the kitten " +
      "with its mother and littermates, check it looks bright, clean and well, " +
      "ask what vaccinations and worming it has had, and be wary of kittens sold " +
      "very young. A healthy, well-started kitten saves heartache later.</p>" },
    { h: "First steps with any new cat", html:
      "<ul><li><strong>A vet visit</strong> early on &mdash; health check, " +
      "parasite treatment, and a plan for vaccination and neutering.</li>" +
      "<li><strong>One room first</strong> &mdash; settle a new cat in a single " +
      "quiet room with food, water, litter and a hiding spot, then widen its " +
      "world gradually.</li>" +
      "<li><strong>Slow introductions</strong> &mdash; to other pets, by scent " +
      "and through a door before any face-to-face meeting.</li>" +
      "<li><strong>Microchip</strong> the cat once the vet advises, so it can be " +
      "identified if it is ever lost &mdash; see " +
      "<a href=\"/owning-a-pet-in-pattaya/microchipping-your-pet.html\">microchipping</a>.</li>" +
      "<li><strong>Vaccinate</strong> on schedule &mdash; see " +
      "<a href=\"/cats/cat-vaccinations-thailand.html\">cat vaccinations in Thailand</a>.</li></ul>" },
    { h: "What to have ready at home", html:
      "<p>Before the cat arrives: food and water bowls, a litter tray and litter, " +
      "a scratching post, somewhere to hide and somewhere up high, and a few " +
      "toys. Keep balconies and windows secure from day one &mdash; see " +
      "<a href=\"/cats/indoor-vs-outdoor-cats.html\">indoor or outdoor cats</a>.</p>" }
  ],
  faqs: [
    ["Where can I adopt a cat in Pattaya?",
     "<p>Through local shelters and rescues &mdash; our adopt a pet hub lists organisations in and around Pattaya. A reputable rescue usually vaccinates, neuters and health-checks cats before rehoming.</p>"],
    ["I found a street kitten &mdash; what should I do first?",
     "<p>Take it to a vet for a health check and parasite treatment, and arrange vaccination and neutering when it is old enough. If you have other cats, keep the kitten separate until the vet has checked it for FeLV, FIV and other infections.</p>"],
    ["How do I introduce a new cat to my home?",
     "<p>Start it in one quiet room with everything it needs, then expand its space gradually. Introduce other pets slowly &mdash; by scent and through a closed door first &mdash; never with a sudden face-to-face meeting.</p>"],
    ["Should I adopt a street kitten or buy from a shop?",
     "<p>Rescues and shelters rehome vaccinated, neutered cats and address the street-animal problem directly. See our <a href=\"/adopt-a-pet-pattaya/\">adopt a pet</a> hub for organisations in Pattaya.</p>"],
    ["What vet visit does a new cat need first?",
     "<p>A health check, parasite treatment, vaccination plan and neutering discussion — even if the cat looks healthy. Keep it separate from other cats until the vet clears introductions.</p>"]
  ],
  related: [
    { name: "Adopt a pet in Pattaya", path: "/adopt-a-pet-pattaya/", desc: "Shelters and rescues rehoming cats." },
    { name: "Fostering a pet", path: "/adopt-a-pet-pattaya/fostering.html", desc: "Temporary homes between rescue and adoption." },
    { name: "Pet health in Pattaya", path: "/pet-health-pattaya/", desc: "The tropical-climate health picture." },
    { name: "Mobile & home-visit vets", path: "/mobile-vets/", desc: "A calm first vet visit at home." },
    { name: "Indoor or outdoor cats", path: "/cats/indoor-vs-outdoor-cats.html", desc: "Keeping your new cat safe." }
  ]
}));

pages.push(cat({
  slug: "cat-boarding-pattaya", crumb: "Cat boarding",
  title: "Cat Boarding Pattaya | Catteries & Care While You Travel | PattayaPets",
  desc: "Options for cat care while you travel from Pattaya: catteries and cat " +
    "boarding, vet-clinic boarding, in-home pet sitters, and what to check.",
  h1: "Cat boarding and care while you travel",
  lede: "Cats are creatures of territory, so &lsquo;who looks after the cat&rsquo; " +
    "is worth planning properly before you book a trip.",
  sections: [
    { h: "Your options", html:
      "<ul><li><strong>A pet sitter in your home</strong> &mdash; someone visits " +
      "(or stays) to feed, clean the litter and check on the cat. Often the " +
      "least stressful choice, because the cat stays on its own territory. See " +
      "<a href=\"/owning-a-pet-in-pattaya/pet-sitters-and-dog-walkers.html\">" +
      "finding a pet sitter</a>.</li>" +
      "<li><strong>Cat boarding or a cattery</strong> &mdash; boarding facilities " +
      "that take cats, ideally with cats kept well away from dogs.</li>" +
      "<li><strong>Vet-clinic boarding</strong> &mdash; some clinics board cats, " +
      "which can suit a cat that needs medication or monitoring.</li>" +
      "<li><strong>A trusted friend</strong> &mdash; fine for a short trip if the " +
      "cat knows them.</li></ul>" +
      "<p>See the <a href=\"/boarding/\">boarding directory</a> for facilities, " +
      "and check which take cats.</p>" },
    { h: "Why many cats do better at home", html:
      "<p>Unlike most dogs, cats bond strongly to <em>place</em>. A confident, " +
      "sociable cat may board happily; a shy or older cat is often far less " +
      "stressed staying in its own home with a sitter visiting. Be honest about " +
      "which kind of cat you have when you choose.</p>" },
    { h: "What to check in a boarding place", html:
      "<ul><li><strong>Cats separated from dogs</strong> &mdash; out of sight and " +
      "sound, ideally in a dedicated cat area.</li>" +
      "<li><strong>Clean, secure, well-ventilated</strong> pens with somewhere to " +
      "hide and somewhere to climb.</li>" +
      "<li><strong>Vaccination requirements</strong> &mdash; a good facility will " +
      "insist every boarding cat is up to date; that protects your cat too.</li>" +
      "<li><strong>Staff presence</strong> &mdash; who is there, and how often, " +
      "including overnight.</li>" +
      "<li>A <strong>visit beforehand</strong> &mdash; see it for yourself.</li></ul>" },
    { h: "What to prepare", html:
      "<p>Whatever you choose, leave: enough of the cat&rsquo;s usual food, its " +
      "vaccination record, any medication with clear instructions, your vet&rsquo;s " +
      "details and your contact details, and something that smells of home. Book " +
      "early for peak travel periods, when good places fill up.</p>" }
  ],
  faqs: [
    ["Where can I board my cat in Pattaya?",
     "<p>Through boarding facilities and catteries that take cats, and some vet clinics. See our boarding directory and check which accept cats and keep them separate from dogs.</p>"],
    ["Is it better to board my cat or use a pet sitter?",
     "<p>It depends on the cat. Cats bond to territory, so a shy or older cat is often less stressed at home with a visiting sitter. A confident, sociable cat may board well. Choose around your cat's temperament.</p>"],
    ["What do I need to arrange before boarding my cat?",
     "<p>Up-to-date vaccinations, enough of the usual food, any medication with instructions, the vaccination record, and your and your vet's contact details. Visit the facility first, and book early for busy travel periods.</p>"],
    ["Will boarding stress my cat?",
     "<p>Many cats find boarding harder than dogs because they are territory-bound. A home sitter may be less stressful — compare options in our <a href=\"/owning-a-pet-in-pattaya/pet-sitters-and-dog-walkers.html\">pet sitters guide</a>.</p>"],
    ["Do boarding facilities require FVRCP and rabies?",
     "<p>Reputable kennels and catteries require current vaccinations. Confirm exact requirements when you book and bring certificates on drop-off day.</p>"]
  ],
  related: [
    { name: "Boarding in Pattaya", path: "/boarding/", desc: "The directory of boarding facilities." },
    { name: "Pet sitters & dog walkers", path: "/owning-a-pet-in-pattaya/pet-sitters-and-dog-walkers.html", desc: "In-home care while you travel." },
    { name: "Cat vaccinations & health", path: "/cats/cat-vaccinations-thailand.html", desc: "Boarding places require current vaccinations." },
    { name: "Indoor vs outdoor cats", path: "/cats/indoor-vs-outdoor-cats.html", desc: "Why most cats stay indoors here." }
  ]
}));

/* ===================== DOGS ===================== */

pages.push(dog({
  slug: "dog-vaccinations-thailand", crumb: "Vaccinations & parasites",
  title: "Dog Vaccinations Thailand | Schedule & Parasite Prevention | PattayaPets",
  desc: "An orientation to dog vaccinations, rabies law, heartworm and year-round " +
    "parasite prevention for dog owners in Pattaya and Thailand.",
  h1: "Dog vaccinations and parasite prevention in Thailand",
  lede: "Most of what keeps a dog healthy in Pattaya is preventive &mdash; a few " +
    "routines, kept up consistently. Here is what they are.",
  verify: "This is general orientation, last reviewed May 2026, and is not " +
    "veterinary advice. Your vet sets the actual vaccination and prevention plan " +
    "for your dog &mdash; always follow their guidance.",
  sections: [
    { h: "Core vaccinations", html:
      "<p>Vets in Thailand routinely vaccinate dogs against the main canine " +
      "diseases. In broad terms a dog&rsquo;s programme usually covers:</p>" +
      "<ul><li>A <strong>combined canine vaccine</strong> &mdash; commonly " +
      "protecting against distemper, canine hepatitis (adenovirus), parvovirus " +
      "and parainfluenza, sometimes with leptospirosis.</li>" +
      "<li><strong>Rabies</strong> &mdash; essential here, and a legal duty.</li></ul>" +
      "<p>Puppies have a starter course a few weeks apart, then boosters through " +
      "life. Your vet sets the exact schedule and the booster dates &mdash; keep " +
      "the vaccination record, and see our guide to " +
      "<a href=\"/dogs/puppy-care-pattaya.html\">puppy care</a>.</p>" },
    { h: "Rabies &mdash; protection and the law", html:
      "<p>Rabies is present in Thailand, and vaccinating your dog against it is " +
      "both a serious safety measure and a legal requirement. Keep your " +
      "dog&rsquo;s rabies vaccination current and keep the certificate &mdash; " +
      "you will also need it if you ever travel with the dog. More on the legal " +
      "side is in <a href=\"/owning-a-pet-in-pattaya/dog-registration-thailand.html\">" +
      "dog registration and the law</a>.</p>" },
    { h: "Heartworm &mdash; the one newcomers miss", html:
      "<p>Heartworm is spread by mosquitoes, which Pattaya has all year, and an " +
      "untreated infection is serious and expensive to treat. The good news is " +
      "that <strong>prevention is simple</strong> &mdash; a regular preventive, " +
      "given year-round, on the schedule your vet recommends. If you are new to " +
      "the tropics this is the easiest thing to overlook, so raise it with your " +
      "vet at the first visit. See our " +
      "<a href=\"/pet-health-pattaya/heartworm.html\">heartworm guide</a>.</p>" },
    { h: "Ticks, fleas and worms &mdash; all year", html:
      "<p>The climate means external and internal parasites never stop. Dogs " +
      "need <strong>year-round</strong> tick and flea control and regular " +
      "worming. Ticks matter especially here because they carry tick-borne " +
      "diseases &mdash; see <a href=\"/dogs/common-dog-health-issues-tropics.html\">" +
      "common tropical health issues</a> and our guide to " +
      "<a href=\"/pet-emergency/ticks-and-fleas.html\">ticks and fleas</a>.</p>" },
    { h: "Neutering and the annual check-up", html:
      "<p>Neutering prevents unwanted litters, can reduce roaming and some later " +
      "health risks, and is routine and affordable in Pattaya &mdash; ask your " +
      "vet about timing for your dog. See " +
      "<a href=\"/pet-health-pattaya/spaying-and-neutering.html\">spaying &amp; " +
      "neutering</a>. An annual check-up, usually alongside the " +
      "booster, catches dental, weight and early health problems while they are " +
      "still easy to deal with.</p>" }
  ],
  faqs: [
    ["What vaccinations does my dog need in Thailand?",
     "<p>Typically a combined canine vaccine covering distemper, hepatitis, parvovirus and parainfluenza, plus rabies, which is legally required. Puppies get a starter course then lifelong boosters. Your vet sets the schedule.</p>"],
    ["What is heartworm and does my dog need prevention?",
     "<p>Heartworm is a serious parasite spread by mosquitoes, which are present in Pattaya year-round. Prevention is simple &mdash; a regular preventive on your vet's schedule &mdash; and far easier than treatment. Ask your vet at the first visit.</p>"],
    ["Is dog vaccination expensive in Pattaya?",
     "<p>Routine vaccinations, parasite prevention and check-ups are generally affordable by Western standards. The larger costs come from treating illness or injury, which is the case for a savings buffer or insurance.</p>"],
    ["When do puppies finish their first vaccination course?",
     "<p>Over several weeks, with a final booster timing set by your vet. Keep an unvaccinated puppy away from unknown dogs and high-risk ground until the course is complete.</p>"],
    ["Is leptospirosis vaccination required in Thailand?",
     "<p>Dogs need leptospirosis protection for import and good local practice — either vaccination or a negative test within 30 days per current embassy guidance. Ask your vet what suits your dog.</p>"]
  ],
  related: [
    { name: "Puppy care in Pattaya", path: "/dogs/puppy-care-pattaya.html", desc: "Starting a vaccination routine early." },
    { name: "Heartworm", path: "/pet-health-pattaya/heartworm.html", desc: "Year-round mosquito-borne prevention." },
    { name: "Ticks & fleas", path: "/pet-emergency/ticks-and-fleas.html", desc: "Year-round parasite prevention." },
    { name: "Tick-borne disease", path: "/pet-health-pattaya/tick-borne-disease.html", desc: "What ticks can transmit here." },
    { name: "Pet health in Pattaya", path: "/pet-health-pattaya/", desc: "The tropical-climate health picture." }
  ]
}));

pages.push(dog({
  slug: "choosing-a-dog-for-the-climate", crumb: "Choosing a dog",
  title: "Choosing a Dog for Pattaya's Heat | Breeds & Climate Fit | PattayaPets",
  desc: "Which dogs cope with Pattaya's heat and which struggle &mdash; coat, " +
    "build and flat-faced breeds, and the case for adopting a local dog.",
  h1: "Choosing a dog suited to Pattaya's heat",
  lede: "If you are choosing a dog while living in Pattaya, the climate should be " +
    "near the top of the list &mdash; it shapes daily life for both of you.",
  sections: [
    { h: "The heat is the deciding factor", html:
      "<p>A dog cannot take off its coat or explain that it is overheating. In a " +
      "climate that is hot and humid all year, the breed and build you choose " +
      "decides how comfortable &mdash; and how safe &mdash; your dog will be. " +
      "This is not about ruling breeds out; it is about going in with open " +
      "eyes.</p>" },
    { h: "Breeds that struggle most", html:
      "<ul><li><strong>Flat-faced (brachycephalic) breeds</strong> &mdash; pugs, " +
      "French and English bulldogs, and similar. Their short airways make it " +
      "genuinely hard to cool down by panting, so they are at real risk in heat " +
      "and exertion. If you are flying one in, read " +
      "<a href=\"/bring-pet-to-thailand/snub-nosed-breeds-flying.html\">snub-nosed breeds &amp; flying</a> " +
      "before you book.</li>" +
      "<li><strong>Thick double-coated breeds</strong> &mdash; Huskies, " +
      "Malamutes, Samoyeds and the like. They are popular and beautiful, but " +
      "they are built for cold and need serious heat management here.</li>" +
      "<li><strong>Very large and giant breeds</strong> &mdash; more body mass " +
      "to cool, and the heat is harder work.</li></ul>" +
      "<p>None of this means these dogs cannot live well in Pattaya &mdash; many " +
      "do &mdash; but it takes air-conditioning, strict cool-hour exercise and " +
      "constant vigilance.</p>" },
    { h: "What tends to cope better", html:
      "<p>As a rule, dogs that are <strong>short-coated, light-to-moderate in " +
      "build, and not flat-faced</strong> handle the climate more easily. Many " +
      "local and mixed-breed dogs fit exactly that description &mdash; which is " +
      "no accident.</p>" },
    { h: "The case for a local dog", html:
      "<p>Adopting a local or mixed-breed dog has a lot going for it in Pattaya. " +
      "These dogs are already adapted to the climate, a rescue will usually have " +
      "vaccinated, neutered and parasite-treated them, and you are giving a home " +
      "to a dog that needs one. See <a href=\"/adopt-a-pet-pattaya/\">adopt a " +
      "pet in Pattaya</a>.</p>" },
    { h: "It is not only about breed", html:
      "<p>Age, weight, coat condition and the individual dog all matter. An " +
      "overweight or elderly dog of any breed copes worse with heat; a fit, lean " +
      "dog copes better. Whatever you choose, the care basics are the same &mdash; " +
      "see <a href=\"/owning-a-pet-in-pattaya/hot-climate-pet-care.html\">" +
      "hot-climate pet care</a>.</p>" }
  ],
  faqs: [
    ["What dog breeds are best for Thailand's climate?",
     "<p>As a rule, short-coated, light-to-moderate build, non-flat-faced dogs cope best &mdash; which describes many local and mixed-breed dogs. They are also already adapted to the heat, which is a strong argument for adopting one.</p>"],
    ["Can I keep a Husky in Pattaya?",
     "<p>It can be done and many people do, but a thick double-coated cold-climate breed needs serious heat management &mdash; air-conditioning, strictly cool-hour exercise and constant vigilance. Go in knowing the daily commitment.</p>"],
    ["Are flat-faced breeds like pugs okay in the heat?",
     "<p>They are the highest-risk group, because their short airways make cooling by panting difficult. They can live well in Pattaya with air-conditioning and very careful, cool-hour, low-exertion exercise &mdash; but the risk is real and constant.</p>"],
    ["Is adopting a Thai street dog a good choice for the climate?",
     "<p>Often yes — local and mixed-breed dogs are already adapted to heat and humidity. See <a href=\"/adopt-a-pet-pattaya/\">adopt a pet in Pattaya</a> for rescues rehoming dogs.</p>"],
    ["Should I avoid thick-coated breeds entirely?",
     "<p>Not necessarily, but owners of Huskies, Malamutes and similar breeds need AC, strict cool-hour exercise and realistic daily heat management — not occasional shade alone.</p>"]
  ],
  related: [
    { name: "Puppy care in Pattaya", path: "/dogs/puppy-care-pattaya.html", desc: "If you are starting with a young dog." },
    { name: "Tropical dog health", path: "/dogs/common-dog-health-issues-tropics.html", desc: "What the climate brings for any breed." },
    { name: "Snub-nosed breeds & flying", path: "/bring-pet-to-thailand/snub-nosed-breeds-flying.html", desc: "Extra airline risk for flat-faced breeds." },
    { name: "Hot-climate pet care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", desc: "Keeping any dog safe in the heat." }
  ]
}));

pages.push(dog({
  slug: "puppy-care-pattaya", crumb: "Puppy care",
  title: "Raising a Puppy in Pattaya | Training, Heat & Socialisation | PattayaPets",
  desc: "Raising a puppy in Pattaya: the vaccination series, parasite prevention, " +
    "the heat, safe socialisation, training and neutering.",
  h1: "Bringing up a puppy in Pattaya",
  lede: "The first months set up a dog for life. In Pattaya that means the usual " +
    "puppy basics, plus a few things the climate and the city add.",
  sections: [
    { h: "Start with a vet", html:
      "<p>Get a new puppy to a <a href=\"/vets/\">vet</a> early. The first visit " +
      "covers a health check, the start of the <strong>vaccination series</strong> " +
      "and a <strong>parasite-prevention</strong> plan, and it is your chance to " +
      "ask everything. The vaccination course runs over several weeks &mdash; see " +
      "<a href=\"/dogs/dog-vaccinations-thailand.html\">dog vaccinations</a> " +
      "&mdash; and your vet will tell you the dates.</p>" },
    { h: "Parasite prevention from the start", html:
      "<p>Puppies are vulnerable to worms, fleas and ticks, and to heartworm " +
      "carried by mosquitoes. Start prevention early on your vet&rsquo;s schedule " +
      "and keep it going year-round &mdash; in this climate parasites never have " +
      "an off-season. See " +
      "<a href=\"/pet-health-pattaya/heartworm.html\">heartworm prevention</a> and " +
      "<a href=\"/pet-emergency/ticks-and-fleas.html\">ticks &amp; fleas</a>.</p>" },
    { h: "The heat and a young dog", html:
      "<p>Puppies overheat easily and do not know to stop. Keep outings " +
      "<strong>short and in the cool hours</strong> &mdash; early morning and " +
      "after sunset &mdash; always have water and shade, and never let play run " +
      "on in the heat. A puppy that seems tireless still needs you to call time. " +
      "See <a href=\"/owning-a-pet-in-pattaya/hot-climate-pet-care.html\">" +
      "hot-climate pet care</a>.</p>" },
    { h: "Socialisation, done safely", html:
      "<p>The early weeks are the window for a puppy to meet the world calmly &mdash; " +
      "people, sounds, surfaces, handling. Until the vaccination course is " +
      "complete, your vet will advise keeping a puppy away from unknown dogs and " +
      "places where unvaccinated dogs go. You can still socialise carefully: safe, " +
      "vaccinated dogs, carried outings, and gentle new experiences at home. Be " +
      "mindful of <a href=\"/pet-emergency/street-dog-encounters.html\">" +
      "free-roaming street dogs</a>.</p>" },
    { h: "Training and house habits", html:
      "<p>Start gentle, reward-based training straight away &mdash; name, " +
      "recall, toilet training, calm handling. In a condo or house, decide the " +
      "toilet routine early and be consistent. A " +
      "<a href=\"/trainers/\">trainer</a> can help you build good habits and head " +
      "off problems before they set in.</p>" },
    { h: "Neutering and the road ahead", html:
      "<p>Ask your vet about the right age to neuter your puppy &mdash; it varies " +
      "with size and breed. As the puppy grows, keep up the boosters, the " +
      "parasite prevention and the annual check-up, and you have given your dog " +
      "the best possible start in Pattaya. Until vaccinations finish, keep puppies " +
      "away from parvovirus risk &mdash; see " +
      "<a href=\"/pet-health-pattaya/parvovirus.html\">parvovirus</a>.</p>" }
  ],
  faqs: [
    ["When should my puppy start vaccinations?",
     "<p>Early &mdash; the vaccination series usually starts in the first weeks and runs over several visits. Get a new puppy to a vet promptly; they will set the schedule and the booster dates.</p>"],
    ["When can I take my puppy outside in Pattaya?",
     "<p>Your vet will advise keeping a puppy away from unknown dogs and high-risk places until its vaccination course is complete. You can still socialise it safely in the meantime &mdash; carried outings, safe vaccinated dogs and gentle experiences at home &mdash; and always in the cool hours.</p>"],
    ["Where can I get help training my puppy?",
     "<p>Pattaya has dog trainers who help with obedience and behaviour &mdash; see our trainers directory. Starting gentle, reward-based training early, with help if you want it, prevents many problems later.</p>"],
    ["What food should I feed a puppy in Pattaya?",
     "<p>A complete puppy diet from a reputable brand, measured to your vet's guidance. Avoid sudden switches and table scraps — stomach upsets are common in the heat.</p>"],
    ["When can my puppy meet other dogs?",
     "<p>After your vet clears social contact — usually once the vaccination course is far enough along. Use controlled, vaccinated playmates rather than busy street areas.</p>"]
  ],
  related: [
    { name: "Heartworm", path: "/pet-health-pattaya/heartworm.html", desc: "Year-round prevention in Pattaya." },
    { name: "Parvovirus", path: "/pet-health-pattaya/parvovirus.html", desc: "A deadly, preventable puppy disease." },
    { name: "Dog trainers in Pattaya", path: "/trainers/", desc: "Help building good habits early." },
    { name: "Street-dog encounters", path: "/pet-emergency/street-dog-encounters.html", desc: "Socialising safely before vaccinations finish." }
  ]
}));

pages.push(dog({
  slug: "common-dog-health-issues-tropics", crumb: "Tropical health issues",
  title: "Common Dog Health Issues in Pattaya | Tropical Climate Risks | PattayaPets",
  desc: "The health problems Pattaya's heat and humidity make more common in " +
    "dogs &mdash; tick-borne disease, skin and ear infections, parasites and heat.",
  h1: "Common dog health issues in a tropical climate",
  lede: "A hot, humid, parasite-rich climate brings its own pattern of dog " +
    "health problems. Knowing the pattern helps you prevent and spot them early.",
  verify: "This is general orientation, last reviewed May 2026, and is not " +
    "veterinary advice. If your dog shows any sign of illness, see a qualified " +
    "veterinarian &mdash; do not rely on a guide to diagnose or treat.",
  sections: [
    { h: "Heat-related illness", html:
      "<p>The most immediate climate risk is heat itself. " +
      "<a href=\"/pet-emergency/heatstroke.html\">Heatstroke</a> can develop " +
      "quickly and is an emergency. Prevention &mdash; shade, water, cool-hour " +
      "exercise, never a hot car or balcony &mdash; is covered in " +
      "<a href=\"/owning-a-pet-in-pattaya/hot-climate-pet-care.html\">hot-climate " +
      "pet care</a>.</p>" },
    { h: "Tick-borne disease", html:
      "<p>Ticks are the health issue newcomers underestimate most. Beyond the " +
      "nuisance, ticks here can transmit serious blood-borne diseases &mdash; " +
      "the group sometimes called tick fever &mdash; which can make a dog " +
      "seriously unwell. Signs an owner might notice include lethargy, loss of " +
      "appetite, fever, pale gums or bruising; these always warrant a vet visit. " +
      "The defence is consistent, year-round tick prevention &mdash; see " +
      "<a href=\"/pet-emergency/ticks-and-fleas.html\">ticks and fleas</a> and " +
      "<a href=\"/pet-health-pattaya/tick-borne-disease.html\">tick-borne disease</a>.</p>" },
    { h: "Skin and ear problems", html:
      "<p>Heat and humidity are hard on skin. Dogs in the tropics commonly get " +
      "yeast and bacterial skin infections, &lsquo;hot spots&rsquo;, and ear " +
      "infections &mdash; floppy-eared and skin-folded breeds most of all. Damp " +
      "that does not dry, and scratching that does not stop, tend to get worse, " +
      "not better, so it is worth seeing a vet early rather than waiting. See " +
      "<a href=\"/pet-health-pattaya/skin-and-ear-problems.html\">skin &amp; ear " +
      "problems</a> for the wider picture.</p>" },
    { h: "Parasites, inside and out", html:
      "<p>Fleas, mites (which cause mange), intestinal worms and " +
      "mosquito-borne heartworm are all part of the picture here, year-round. " +
      "Consistent parasite prevention on a vet&rsquo;s plan &mdash; covered in " +
      "<a href=\"/dogs/dog-vaccinations-thailand.html\">dog vaccinations and " +
      "parasite prevention</a> &mdash; is the single most effective thing you " +
      "can do.</p>" },
    { h: "Paws and the hot ground", html:
      "<p>Hot pavement and sand burn paw pads. Walk in the cool hours, test the " +
      "ground with the back of your hand, and check paws for cracks or " +
      "soreness.</p>" },
    { h: "When to see a vet", html:
      "<p>This guide is to help you recognise patterns, not to diagnose. Persistent " +
      "scratching, a bad smell or discharge from ears or skin, lethargy, off food, " +
      "vomiting or diarrhoea, pale gums, or simply &lsquo;not right&rsquo; &mdash; " +
      "all are reasons to see a <a href=\"/vets/\">vet</a>. Early is cheaper, " +
      "kinder and usually more successful.</p>" }
  ],
  faqs: [
    ["Why does my dog keep getting skin or ear infections in Pattaya?",
     "<p>Heat and humidity make yeast and bacterial skin and ear infections common, especially in floppy-eared or skin-folded breeds. They tend to worsen rather than clear on their own, so see a vet early to find the cause and treat it properly.</p>"],
    ["What are tick-borne diseases and how serious are they?",
     "<p>Ticks here can transmit serious blood-borne diseases that can make a dog very unwell. Signs an owner may notice include lethargy, loss of appetite, fever or pale gums &mdash; always a reason for a vet visit. Consistent year-round tick prevention is the main defence.</p>"],
    ["How do I prevent these problems?",
     "<p>Year-round parasite prevention on your vet's plan, cool-hour exercise and heat care, keeping skin and ears clean and dry, and early vet visits when something seems off. Prevention and early action handle most of the tropical pattern.</p>"],
    ["Are certain dog breeds more prone in Pattaya?",
     "<p>Floppy-eared, skin-folded and thick-coated breeds often struggle most with ears, skin and heat. Any dog benefits from the same prevention basics — see <a href=\"/pet-health-pattaya/skin-and-ear-problems.html\">skin and ear problems</a>.</p>"],
    ["When is itching an emergency?",
     "<p>Intense scratching with swelling, hives, collapse or difficulty breathing suggests an allergic reaction — go to a <a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour vet</a>. Routine itching can wait for a daytime appointment.</p>"]
  ],
  related: [
    { name: "Skin & ear problems", path: "/pet-health-pattaya/skin-and-ear-problems.html", desc: "Heat and humidity drive flare-ups." },
    { name: "Tick-borne disease", path: "/pet-health-pattaya/tick-borne-disease.html", desc: "What ticks can transmit here." },
    { name: "Dog vaccinations & parasites", path: "/dogs/dog-vaccinations-thailand.html", desc: "The prevention routines in full." },
    { name: "Pet health in Pattaya", path: "/pet-health-pattaya/", desc: "The tropical-climate health picture." }
  ]
}));

module.exports = pages;
