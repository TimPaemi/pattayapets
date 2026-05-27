"use strict";
/* Owning a pet in Pattaya - extra guides: seasons and festivals, everyday
   situations, and the harder times. These are child pages of the
   /owning-a-pet-in-pattaya/ cluster (hub defined in 44-owning.js). */

const { article } = require("../guidekit.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const CLUSTER = { name: "Owning a pet in Pattaya", path: "/owning-a-pet-in-pattaya/" };
const SUB = [GUIDES, CLUSTER];

const HUB_RELATED = { name: "Owning a pet in Pattaya", path: "/owning-a-pet-in-pattaya/", desc: "Back to the cluster hub." };

const pages = [];

function own(o) {
  return article({
    path: "/owning-a-pet-in-pattaya/" + o.slug + ".html",
    title: o.title, desc: o.desc, crumb: o.crumb, breadcrumbs: SUB,
    eyebrow: "Owning a pet in Pattaya",
    h1: o.h1, lede: o.lede, verify: o.verify,
    sections: o.sections, faqs: o.faqs, related: o.related
  });
}

/* ---------------- SONGKRAN ---------------- */
pages.push(own({
  slug: "songkran-and-your-pet", crumb: "Songkran & your pet",
  title: "Songkran and your pet in Pattaya | PattayaPets",
  desc: "How to keep a dog or cat safe and calm during Songkran in Pattaya - " +
    "the water festival, the noise, escape risk, and walking around it.",
  h1: "Songkran and your pet: keeping animals safe and calm",
  lede: "Songkran, the Thai New Year, is one of the biggest events in the Pattaya " +
    "calendar &mdash; and for pets it is one of the most stressful.",
  verify: "Songkran nationally falls in mid-April, and Pattaya extends the " +
    "celebrations later in the month with its own Wan Lai festival. Exact dates " +
    "and the scale of street celebrations vary year to year &mdash; check locally.",
  sections: [
    { h: "What Songkran means for a pet", html:
      "<p>For several days, Pattaya&rsquo;s streets fill with water fights, water " +
      "guns and hoses, loud music, big crowds and heavy traffic. Pattaya " +
      "celebrates longer and harder than most of Thailand. To a dog or cat it is " +
      "loud, chaotic and frightening &mdash; and the open gates and doors that " +
      "come with a street party make it the highest-risk time of year for a pet " +
      "to bolt and get lost.</p>" },
    { h: "Keep pets indoors and secure", html:
      "<p>During the main days, keep pets <strong>inside</strong>. Check that " +
      "gates, doors, windows and balconies are properly secured &mdash; a scared " +
      "pet will look for any way out. Do not take dogs through the water-fight " +
      "zones, and keep cats in entirely. Make sure ID and " +
      "<a href=\"/owning-a-pet-in-pattaya/microchipping-your-pet.html\">microchip " +
      "details</a> are current before the festival, just in case.</p>" },
    { h: "Give them a calm space", html:
      "<p>Set up a quiet interior room away from the street noise, with familiar " +
      "bedding, water, and a fan or air-conditioning running &mdash; the steady " +
      "sound also helps mask the bangs and music. Check on your pet often, stay " +
      "calm yourself, and do not leave a frightened animal alone for long " +
      "stretches.</p>" },
    { h: "Walks and toilet breaks", html:
      "<p>Dogs still need to go out. Walk <strong>very early or late</strong>, " +
      "in quiet sois well away from the celebrations, keep your dog leashed, and " +
      "make sure it is wearing ID. Keep these walks short and get back before the " +
      "streets get busy.</p>" },
    { h: "Water guns are not a game for pets", html:
      "<p>However good-natured the crowds are, do not let anyone spray your pet. " +
      "Water blasted into ears and eyes is harmful, the shock is distressing, " +
      "and the talc-like paste some revellers smear on faces is an irritant. If " +
      "you are out with your dog, keep yourself between it and the water.</p>" },
    { h: "Traffic and travel", html:
      "<p>Roads are crowded and accidents rise over Songkran. Avoid taking pets " +
      "out in vehicles unless you need to &mdash; and if you do, use a secure " +
      "carrier or crate. Plan any routine vet trips for before or after the " +
      "festival.</p>" }
  ],
  faqs: [
    ["When is Songkran and how long does it last in Pattaya?",
     "<p>Songkran falls nationally in mid-April, and Pattaya extends the celebrations later in the month with its own Wan Lai festival, so the disruption for pets can run over a couple of weeks. Check the exact local dates each year.</p>"],
    ["My dog is terrified of Songkran - what helps?",
     "<p>Keep it indoors in a quiet room with familiar bedding and a fan or air-conditioning running to mask the noise, check on it often, stay calm yourself, and walk only very early or late in quiet streets. Make sure ID and microchip details are current in case it bolts.</p>"],
    ["Is it safe to walk my dog during Songkran?",
     "<p>Only well away from the water-fight zones, early or late in the day, on a lead, in quiet sois. Never walk a dog through the celebrations - the noise, crowds and water are frightening and the escape risk is high.</p>"]
  ],
  related: [
    { name: "Fireworks & noise-anxious pets", path: "/owning-a-pet-in-pattaya/fireworks-and-noise-anxiety.html", desc: "The wider noise-anxiety picture." },
    { name: "If your pet goes missing", path: "/owning-a-pet-in-pattaya/lost-pet-pattaya.html", desc: "What to do if a pet bolts." },
    HUB_RELATED
  ]
}));

/* ---------------- RAINY SEASON ---------------- */
pages.push(own({
  slug: "rainy-season-pet-care", crumb: "Rainy-season care",
  title: "Rainy-season pet care in Pattaya | PattayaPets",
  desc: "Caring for a dog or cat through Pattaya's rainy season - walks, skin " +
    "and ear health, floodwater, leptospirosis, mosquitoes and storm anxiety.",
  h1: "Rainy-season pet care in Pattaya",
  lede: "Pattaya&rsquo;s rainy season reshapes the daily routine &mdash; and " +
    "brings a few specific health risks that are worth knowing in advance.",
  verify: "Pattaya&rsquo;s rainy season runs roughly from around May into " +
    "October, but timing varies year to year. Treat seasonal advice as general " +
    "orientation and ask your vet about vaccination for your pet.",
  sections: [
    { h: "Walking around the weather", html:
      "<p>Rain here tends to come in heavy bursts rather than all-day drizzle, " +
      "so you can usually find dry windows for walks &mdash; keep them shorter " +
      "and be ready to head back. Towel your dog dry properly afterwards. " +
      "Thunderstorms also rattle noise-sensitive dogs; see " +
      "<a href=\"/owning-a-pet-in-pattaya/fireworks-and-noise-anxiety.html\">" +
      "fireworks and noise anxiety</a>.</p>" },
    { h: "Keep skin, paws and ears dry", html:
      "<p>Humidity plus a damp coat is the main rainy-season health issue. It " +
      "drives skin infections, &lsquo;hot spots&rsquo; and ear infections, " +
      "especially in floppy-eared dogs and breeds with skin folds. See our guide to " +
      "<a href=\"/pet-health-pattaya/skin-and-ear-problems.html\">skin and ear problems</a> " +
      "for the signs. Dry your pet " +
      "thoroughly after every wet walk &mdash; ears and folds included &mdash; " +
      "and see a vet early if skin or ears look red, smell, or are being " +
      "scratched at.</p>" },
    { h: "Floodwater and standing water", html:
      "<p>Pattaya streets can flood quickly in a downpour. Keep pets " +
      "<strong>out of floodwater and puddles</strong>: it can carry sewage, " +
      "chemicals and sharp debris, and standing water is a route for " +
      "leptospirosis &mdash; a bacterial disease spread through contaminated " +
      "water and rodent urine that can make dogs seriously ill. Rinse and dry " +
      "paws and legs after a wet walk, and ask your vet whether leptospirosis " +
      "vaccination is right for your dog.</p>" },
    { h: "Mosquitoes and parasites peak", html:
      "<p>The wet season means more mosquitoes, and mosquitoes carry heartworm. " +
      "Do not let parasite prevention slip now of all times &mdash; keep flea, " +
      "tick, worm and heartworm prevention going on your vet&rsquo;s schedule. " +
      "See <a href=\"/dogs/dog-vaccinations-thailand.html\">dog vaccinations and " +
      "parasite prevention</a>.</p>" },
    { h: "Indoor days", html:
      "<p>When the rain settles in, a bored pet needs an outlet. Short training " +
      "sessions, food puzzles, chews and indoor play burn energy and keep a " +
      "rained-in dog calm and content.</p>" }
  ],
  faqs: [
    ["When is the rainy season in Pattaya?",
     "<p>Roughly from around May into October, though timing and intensity vary year to year. Rain usually comes in heavy bursts rather than all day, so walks are still manageable around the showers.</p>"],
    ["Is floodwater dangerous for my dog?",
     "<p>Yes - keep dogs out of it. Floodwater and standing puddles can carry sewage, chemicals and debris, and are a route for leptospirosis. Rinse and dry paws and legs after wet walks, and ask your vet about leptospirosis vaccination.</p>"],
    ["My dog hates thunderstorms - what can I do?",
     "<p>Give it a quiet interior space with familiar bedding and background sound to mask the thunder, stay calm yourself, and do not punish the fear. For severe storm anxiety, a vet or behaviourist can help - see our fireworks and noise-anxiety guide.</p>"]
  ],
  related: [
    { name: "Hot-climate pet care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", desc: "The hot-season half of the year." },
    { name: "Skin & ear problems", path: "/pet-health-pattaya/skin-and-ear-problems.html", desc: "Rainy-season skin and ear flare-ups." },
    { name: "Tropical dog health issues", path: "/dogs/common-dog-health-issues-tropics.html", desc: "Skin, ears and parasites in the climate." },
    HUB_RELATED
  ]
}));

/* ---------------- FIREWORKS & NOISE ---------------- */
pages.push(own({
  slug: "fireworks-and-noise-anxiety", crumb: "Fireworks & noise",
  title: "Fireworks, festivals and noise-anxious pets | PattayaPets",
  desc: "Helping a noise-anxious dog or cat through fireworks, festivals and " +
    "thunderstorms in Pattaya - preparing a safe space and preventing escapes.",
  h1: "Fireworks, festivals and noise-anxious pets",
  lede: "Pattaya has fireworks and loud festivals through the year &mdash; and " +
    "many pets, dogs especially, find them genuinely distressing.",
  sections: [
    { h: "Why it matters here", html:
      "<p>Between New Year, festival fireworks, beachfront events, temple " +
      "celebrations, loud music and rainy-season thunderstorms, sudden loud " +
      "noise is a regular feature of life in Pattaya. For a noise-anxious pet " +
      "that is not a one-night problem &mdash; it is something to have a plan " +
      "for.</p>" },
    { h: "What noise anxiety looks like", html:
      "<p>Signs include trembling, hiding, pacing, excessive panting or " +
      "drooling, whining, clinginess, destructive behaviour, toileting indoors, " +
      "and frantic attempts to escape. Cats more often simply vanish to a hiding " +
      "place. None of it is your pet &lsquo;being naughty&rsquo; &mdash; it is " +
      "real fear.</p>" },
    { h: "Prepare a safe space", html:
      "<p>Before an event you know is coming, set up a den: a quiet interior " +
      "room, curtains closed, familiar bedding, and background sound &mdash; a " +
      "fan, air-conditioning, music or TV &mdash; to soften the bangs. Let your " +
      "pet choose to hide there; do not force it out. Stay nearby and calm. You " +
      "can comfort a frightened pet &mdash; that does not &lsquo;reward&rsquo; " +
      "fear &mdash; just keep your own manner relaxed and normal.</p>" },
    { h: "The real danger is escape", html:
      "<p>More pets are lost on firework nights than at any other time. A " +
      "panicked animal will jump, dig, climb or bolt through a door. Secure " +
      "doors, gates, windows and balconies, keep dogs leashed if they must go " +
      "out, and make sure ID tags and " +
      "<a href=\"/owning-a-pet-in-pattaya/microchipping-your-pet.html\">microchip " +
      "details</a> are current. If the worst happens, act fast &mdash; see " +
      "<a href=\"/owning-a-pet-in-pattaya/lost-pet-pattaya.html\">if your pet " +
      "goes missing</a>.</p>" },
    { h: "Longer-term help", html:
      "<p>For a pet that suffers badly, there is more you can do than damage " +
      "control. Gradual desensitisation, calming aids, and a proper plan from " +
      "your <a href=\"/vets/\">vet</a> &mdash; who can advise on options for " +
      "severe cases &mdash; all help. A <a href=\"/trainers/\">trainer or " +
      "behaviourist</a> can work on the anxiety itself. Do not just accept that " +
      "your pet &lsquo;hates fireworks&rsquo; if it is genuinely suffering.</p>" }
  ],
  faqs: [
    ["How do I keep my dog calm during fireworks?",
     "<p>Prepare a quiet den room in advance with closed curtains, familiar bedding and background sound to mask the bangs, let your dog hide there, and stay calm and nearby. Secure all exits, because the biggest risk is a panicked dog bolting.</p>"],
    ["My pet bolts when it's scared - what should I do?",
     "<p>Prevention first: secure doors, gates, windows and balconies before known events, keep dogs leashed outside, and keep ID and microchip details current. If a pet does get out, act immediately - see our guide to a missing pet.</p>"],
    ["Can a vet help with a noise-phobic pet?",
     "<p>Yes. For a pet that suffers badly, a vet can advise on calming options and a longer-term plan, and a trainer or behaviourist can work on the anxiety through gradual desensitisation. Severe noise phobia is treatable, not something to just live with.</p>"]
  ],
  related: [
    { name: "Songkran and your pet", path: "/owning-a-pet-in-pattaya/songkran-and-your-pet.html", desc: "The year's biggest noisy event." },
    { name: "If your pet goes missing", path: "/owning-a-pet-in-pattaya/lost-pet-pattaya.html", desc: "If a frightened pet bolts." },
    HUB_RELATED
  ]
}));

/* ---------------- LOST PET ---------------- */
pages.push(own({
  slug: "lost-pet-pattaya", crumb: "If your pet goes missing",
  title: "If your pet goes missing in Pattaya | PattayaPets",
  desc: "A practical, step-by-step plan for what to do if your dog or cat goes " +
    "missing in Pattaya - searching, spreading the word, and microchips.",
  h1: "If your pet goes missing in Pattaya",
  lede: "A lost pet is every owner&rsquo;s worst day. Acting fast and methodically " +
    "gives you the best chance of getting them home.",
  sections: [
    { h: "The first hours", html:
      "<p>Start close to home and stay calm. Search the immediate area, calling " +
      "your pet&rsquo;s name in a normal, friendly voice, and bring treats or a " +
      "familiar-sounding toy. Cats in particular often stay very close and " +
      "hidden &mdash; check under vehicles, in gaps, on rooftops and in quiet " +
      "corners. Search again at quiet times, early morning and late at night, " +
      "when the streets are calm enough for a frightened animal to move.</p>" },
    { h: "Spread the word fast", html:
      "<p>Tell everyone nearby &mdash; neighbours, condo security guards, soi " +
      "vendors, shops and motorbike-taxi riders, who see everything on a street. " +
      "Post in the local Pattaya pet and community groups online, including the " +
      "active lost-and-found pet groups, with a <strong>clear recent photo</strong>, " +
      "the area, and a contact number. The local expat and animal-rescue " +
      "community here is genuinely helpful in this situation.</p>" },
    { h: "Check where animals are taken", html:
      "<p>Call and, where you can, visit the places a found animal ends up: " +
      "nearby <a href=\"/vets/\">vet clinics</a>, " +
      "<a href=\"/adopt-a-pet-pattaya/\">shelters and rescues</a>, and local " +
      "animal services. Leave a photo and your details with each, and check " +
      "back &mdash; a pet may be handed in days later.</p>" },
    { h: "Use the microchip", html:
      "<p>This is exactly the situation a <a href=\"/owning-a-pet-in-pattaya/" +
      "microchipping-your-pet.html\">microchip</a> is for. If your pet is " +
      "chipped, contact the registration database to flag it as missing and " +
      "confirm your contact details are current. A vet or shelter that takes the " +
      "pet in can scan the chip and trace it back to you.</p>" },
    { h: "Posters and persistence", html:
      "<p>Simple posters work: a large clear photo, the word LOST, the area, and " +
      "a phone number, placed where people walk and wait. Do not give up too " +
      "soon &mdash; pets are reunited with owners weeks later. When yours is " +
      "home, give it a vet check after time on the streets, work out how it got " +
      "out, and fix that gap so it cannot happen again.</p>" }
  ],
  faqs: [
    ["What should I do first if my pet goes missing?",
     "<p>Search the immediate area calmly with treats and a familiar voice - cats especially stay close and hidden - then immediately tell neighbours and security, and post a clear recent photo in local Pattaya lost-and-found pet groups with your contact details.</p>"],
    ["Where do lost pets in Pattaya end up?",
     "<p>Often at vet clinics, shelters and rescues, or with local animal services - and sometimes simply with a neighbour who took them in. Call and visit these, leave a photo and your details, and keep checking back.</p>"],
    ["Does a microchip help find a lost pet?",
     "<p>Yes - it is one of the best reasons to chip a pet. A vet or shelter can scan the chip and trace it to you, provided your contact details on the database are current. Flag the chip as missing as soon as your pet is lost.</p>"]
  ],
  related: [
    { name: "Microchipping your pet", path: "/owning-a-pet-in-pattaya/microchipping-your-pet.html", desc: "Why it matters, and keeping details current." },
    { name: "Fireworks & noise-anxious pets", path: "/owning-a-pet-in-pattaya/fireworks-and-noise-anxiety.html", desc: "The most common reason pets bolt." },
    HUB_RELATED
  ]
}));

/* ---------------- MICROCHIPPING ---------------- */
pages.push(own({
  slug: "microchipping-your-pet", crumb: "Microchipping",
  title: "Microchipping your pet in Pattaya | PattayaPets",
  desc: "What a pet microchip is, why it matters in Pattaya, how chipping works, " +
    "and the vital step of keeping your registered details up to date.",
  h1: "Microchipping your pet in Pattaya",
  lede: "A microchip is small, quick and inexpensive &mdash; and it is the single " +
    "best way to give a lost pet a route back home.",
  sections: [
    { h: "What a microchip is", html:
      "<p>A microchip is a tiny identifier, about the size of a grain of rice, " +
      "placed under the skin by a vet in a routine procedure much like an " +
      "injection. It carries a unique number. It is <strong>not</strong> a GPS " +
      "tracker &mdash; it does not show where your pet is &mdash; but when a pet " +
      "is found, a vet or shelter can scan the number and trace it to the " +
      "registered owner.</p>" },
    { h: "Why it matters here", html:
      "<p>In a busy city with open-gate housing, free-roaming animals and noisy " +
      "festivals, pets do get out. A collar and tag can be lost; a microchip " +
      "cannot. It is also a requirement for " +
      "<a href=\"/bring-pet-to-thailand/\">bringing a pet to Thailand</a> and " +
      "for <a href=\"/take-pet-out-of-thailand/\">taking one out</a>, and there " +
      "have been moves toward wider registration of pets in Thailand.</p>" },
    { h: "Getting your pet chipped", html:
      "<p>Any <a href=\"/vets/\">vet</a> in Pattaya can microchip a pet &mdash; " +
      "it is quick, low-cost and can be done at a routine visit, often alongside " +
      "vaccination or neutering. Ask the vet which database the chip is " +
      "registered with and make sure your pet is actually <strong>registered</strong>, " +
      "not just chipped: an unregistered chip leads nowhere.</p>" },
    { h: "Keep your details current", html:
      "<p>A microchip only works if the contact details attached to it are " +
      "right. This is the step people forget. Whenever you change phone number, " +
      "move home, or take on a pet from someone else, <strong>update the " +
      "registration</strong>. Keep a note of the chip number and the database " +
      "yourself. An out-of-date record is the most common reason a chipped pet " +
      "still does not get home.</p>" }
  ],
  faqs: [
    ["Is microchipping a pet painful or risky?",
     "<p>It is a quick, routine procedure - the chip is placed under the skin much like an injection - and any vet in Pattaya can do it, often alongside a vaccination or neutering visit. It is low-cost and complications are rare.</p>"],
    ["Does a microchip track my pet's location?",
     "<p>No. A microchip is an identifier, not a GPS tracker - it does not show where your pet is. Its job is that when a found pet is scanned by a vet or shelter, the number traces back to you.</p>"],
    ["My pet is already chipped - is there anything I need to do?",
     "<p>Yes: make sure it is registered on a database and that your contact details are current. Update them whenever you change phone number or move. An unregistered or out-of-date chip cannot bring a pet home.</p>"]
  ],
  related: [
    { name: "If your pet goes missing", path: "/owning-a-pet-in-pattaya/lost-pet-pattaya.html", desc: "Where the microchip earns its place." },
    { name: "Dog registration & the law", path: "/owning-a-pet-in-pattaya/dog-registration-thailand.html", desc: "Registration rules in Thailand." },
    { name: "Bringing a pet to Thailand", path: "/bring-pet-to-thailand/", desc: "Microchipping in the import process." },
    HUB_RELATED
  ]
}));

/* ---------------- PET SITTERS & DOG WALKERS ---------------- */
pages.push(own({
  slug: "pet-sitters-and-dog-walkers", crumb: "Sitters & dog walkers",
  title: "Finding a pet sitter or dog walker in Pattaya | PattayaPets",
  desc: "How to find and choose a reliable pet sitter or dog walker in Pattaya, " +
    "what to check, and how to brief them so your pet is well cared for.",
  h1: "Finding a pet sitter or dog walker in Pattaya",
  lede: "Whether you travel often or simply work long hours, reliable pet care " +
    "while you are out is worth setting up before you actually need it.",
  sections: [
    { h: "The options", html:
      "<ul><li><strong>An in-home pet sitter</strong> &mdash; someone who visits " +
      "or stays to feed, walk, give medication and keep your pet company on its " +
      "own territory.</li>" +
      "<li><strong>A dog walker</strong> &mdash; for daily exercise when your " +
      "hours are long.</li>" +
      "<li><strong>Boarding</strong> &mdash; a kennel or cattery; see the " +
      "<a href=\"/boarding/\">boarding directory</a>.</li>" +
      "<li><strong>A trusted neighbour or friend</strong> &mdash; fine for short " +
      "trips and simple needs.</li></ul>" +
      "<p>Informal sitting arrangements are common within Pattaya&rsquo;s expat " +
      "community.</p>" },
    { h: "Where people find sitters and walkers", html:
      "<p>Most arrangements here come through <strong>word of mouth</strong> " +
      "&mdash; other pet owners, local community and pet groups online, and " +
      "recommendations from boarding facilities and " +
      "<a href=\"/vets/\">vets</a>, some of which keep sitters they trust. A " +
      "personal recommendation from someone whose judgement you trust is worth " +
      "a great deal.</p>" },
    { h: "What to check before you commit", html:
      "<ul><li><strong>Experience</strong> with your kind of pet, and with any " +
      "medication or special needs it has.</li>" +
      "<li><strong>References</strong> from other owners.</li>" +
      "<li>A <strong>meeting first</strong> &mdash; watch how they are with your " +
      "pet, and how your pet responds.</li>" +
      "<li>Exactly <strong>what is included</strong> &mdash; visits per day, " +
      "walk length, feeding, litter, medication.</li>" +
      "<li>How they would <strong>handle an emergency</strong>, and that they " +
      "are willing to get your pet to a vet.</li></ul>" },
    { h: "Brief them properly", html:
      "<p>Set a sitter up to succeed. Leave written instructions: the feeding " +
      "routine, walk times, medication, your <a href=\"/vets/\">vet&rsquo;s " +
      "details</a> and your own contact, where everything is kept, and your " +
      "pet&rsquo;s quirks and warning signs. If you can, do a trial visit or " +
      "walk while you are still around.</p>" },
    { h: "Walkers and the heat", html:
      "<p>Any dog walker in Pattaya must understand the heat. Confirm they will " +
      "walk in the <strong>cool hours</strong>, carry water, and know to cut a " +
      "walk short if a dog is struggling &mdash; see " +
      "<a href=\"/owning-a-pet-in-pattaya/hot-climate-pet-care.html\">hot-climate " +
      "pet care</a>.</p>" }
  ],
  faqs: [
    ["How do I find a trustworthy pet sitter in Pattaya?",
     "<p>Mostly through word of mouth - other pet owners, local community and pet groups, and recommendations from boarding facilities and vets. Always meet a sitter first, check references and experience, and do a trial run before you rely on them.</p>"],
    ["Should I use a pet sitter or a boarding kennel?",
     "<p>It depends on the pet. Many pets, cats especially, are less stressed at home with a sitter; a sociable dog may do well boarding. Consider your pet's temperament - and see our boarding directory for facilities.</p>"],
    ["What should I tell a pet sitter before I travel?",
     "<p>Leave written instructions covering feeding, walks, medication, your vet's details and your contact number, where supplies are, and your pet's quirks. A trial visit while you are still around helps a lot.</p>"]
  ],
  related: [
    { name: "Boarding in Pattaya", path: "/boarding/", desc: "Kennels and catteries directory." },
    { name: "What it costs to own a pet", path: "/owning-a-pet-in-pattaya/cost-of-owning-a-pet.html", desc: "Where care costs fit the budget." },
    HUB_RELATED
  ]
}));

/* ---------------- GETTING TO THE VET ---------------- */
pages.push(own({
  slug: "getting-to-the-vet", crumb: "Getting to the vet",
  title: "Getting your pet to the vet without a car | PattayaPets",
  desc: "Transport options for getting a pet to the vet in Pattaya without a " +
    "car - carriers, taxis and ride apps, home-visit vets and emergency plans.",
  h1: "Getting your pet to the vet without a car in Pattaya",
  lede: "Plenty of pet owners in Pattaya do not drive. Knowing your transport " +
    "options before an emergency is part of being a prepared owner.",
  sections: [
    { h: "Plan it before you need it", html:
      "<p>Do not wait for a crisis to work this out. Know your nearest " +
      "<a href=\"/vets/\">vet</a> and your nearest " +
      "<a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour animal " +
      "hospital</a>, and have a clear answer to the question: how would I get my " +
      "pet there at two in the morning? Save the numbers in your phone now.</p>" },
    { h: "A secure carrier is essential", html:
      "<p>Whatever transport you use, cats and small dogs must travel in a " +
      "<strong>secure carrier or crate</strong>, and a larger dog needs a lead " +
      "and a calm handler. A loose, frightened animal in a moving vehicle is " +
      "dangerous for everyone. Get your pet used to its carrier in advance, so " +
      "it is not also a new fear on a stressful day.</p>" },
    { h: "Taxis and ride-hailing apps", html:
      "<p>Metered taxis and ride-hailing apps operate across Pattaya, but " +
      "<strong>not every driver will take an animal</strong>. A pet in a clean, " +
      "secure carrier is far more likely to be accepted &mdash; mention the pet " +
      "when you book or before you get in, and be ready for a driver to decline. " +
      "Baht buses (songthaews) are public and uncontrolled, and are not a good " +
      "choice for a pet.</p>" },
    { h: "Home-visit and mobile vets", html:
      "<p>Some vets offer <strong>home visits</strong>, which can be ideal for " +
      "routine care, for a very anxious pet, or simply when transport is hard. " +
      "See the <a href=\"/mobile-vets/\">mobile &amp; home-visit vets directory</a> " +
      "for clinics that advertise off-site visits, including " +
      "<a href=\"/vets/siam-country-pet-hospital.html\">Siam Country Pet Hospital</a> " +
      "and <a href=\"/mobile-vets/mor-ja-pet-clinic-pattaya.html\">Mor Ja Pet Clinic</a>. " +
      "A home visit is not a substitute for a hospital in a true emergency.</p>" },
    { h: "In a real emergency", html:
      "<p>If it is an emergency, <strong>call the clinic first</strong> so they " +
      "are ready for you, have the carrier and a transport plan, and do not lose " +
      "time. If you genuinely cannot move your pet, phone a 24-hour hospital or a " +
      "mobile vet for advice on what to do right now. See " +
      "<a href=\"/pet-emergency/\">pet emergencies</a>.</p>" }
  ],
  faqs: [
    ["Can I take my pet in a taxi or ride app in Pattaya?",
     "<p>Often yes, but not every driver will accept an animal. A pet in a clean, secure carrier is much more likely to be taken - mention the pet when booking, and be prepared for a driver to decline. Baht buses are not a good choice for pets.</p>"],
    ["How should my pet travel in a vehicle?",
     "<p>Cats and small dogs in a secure carrier or crate; a larger dog leashed with a calm handler. A loose, frightened pet in a moving vehicle is dangerous. Get your pet used to the carrier before you need it.</p>"],
    ["What if I can't get my pet to a vet in an emergency?",
     "<p>Call a 24-hour animal hospital or a mobile vet straight away for advice on what to do immediately, and ask about a home visit. Plan your emergency transport in advance so you are never working it out under pressure.</p>"]
  ],
  related: [
    { name: "24-hour vets in Pattaya", path: "/pet-emergency/24-hour-vets-pattaya.html", desc: "Where to go when it cannot wait." },
    { name: "Mobile vets", path: "/mobile-vets/", desc: "Vets who come to you." },
    HUB_RELATED
  ]
}));

/* ---------------- SENIOR PETS ---------------- */
pages.push(own({
  slug: "senior-pet-care", crumb: "Senior pets",
  title: "Caring for a senior pet in Pattaya | PattayaPets",
  desc: "How to care for an older dog or cat in Pattaya - check-ups, the heat, " +
    "comfort at home, and the changes worth watching for as a pet ages.",
  h1: "Caring for a senior pet in Pattaya",
  lede: "Pets age, and an older pet in a hot climate needs a few thoughtful " +
    "adjustments to stay comfortable, healthy and content.",
  sections: [
    { h: "When a pet is 'senior'", html:
      "<p>There is no single age. Larger dogs are considered senior earlier than " +
      "small dogs, and cats later still. Rather than a number, watch for the " +
      "signs &mdash; slowing down, sleeping more, stiffness &mdash; and ask your " +
      "<a href=\"/vets/\">vet</a> when it is time to shift to a senior-care " +
      "routine.</p>" },
    { h: "More frequent check-ups", html:
      "<p>Older pets benefit from seeing a vet more than once a year. Many " +
      "age-related conditions &mdash; kidney, heart, dental, joint, thyroid, " +
      "weight &mdash; are far easier to manage when caught early, and a vet may " +
      "suggest routine blood tests to track an older pet&rsquo;s health. These " +
      "visits are about staying ahead of problems, not waiting for them.</p>" },
    { h: "The heat is harder on older pets", html:
      "<p>An ageing pet regulates temperature less well and tires sooner, so be " +
      "<strong>extra conservative</strong> with the heat: cooler hours only, " +
      "gentler and shorter exercise, and a genuinely cool resting spot at home. " +
      "Everything in <a href=\"/owning-a-pet-in-pattaya/hot-climate-pet-care.html\">" +
      "hot-climate pet care</a> applies double to a senior pet.</p>" },
    { h: "Comfort at home", html:
      "<p>Small changes help a lot: soft, supportive bedding; food and water " +
      "easy to reach; steps or a ramp for a dog that struggles to climb; rugs " +
      "for grip on slippery floors; and a litter tray with a low side for an " +
      "older cat. Keep them gently active and engaged &mdash; and keep an eye on " +
      "weight, which matters more than ever now.</p>" },
    { h: "Watch for changes", html:
      "<p>Tell your vet promptly about changes in appetite, thirst, toileting, " +
      "weight, mobility, lumps, behaviour or apparent confusion. It is tempting " +
      "to put everything down to &lsquo;just getting old&rsquo; &mdash; but many " +
      "of these changes are treatable conditions, and catching them early keeps " +
      "an older pet comfortable for longer.</p>" }
  ],
  faqs: [
    ["How often should an older pet see the vet?",
     "<p>More than once a year is a good guide for a senior pet. Many age-related conditions are far easier to manage when caught early, and your vet may suggest routine blood tests to monitor an older pet's health.</p>"],
    ["Does the heat affect senior pets more?",
     "<p>Yes. An ageing pet regulates its temperature less well and tires sooner, so be extra conservative - cooler hours only, gentler and shorter exercise, and a genuinely cool place to rest.</p>"],
    ["What changes should I watch for in an ageing pet?",
     "<p>Changes in appetite, thirst, toileting, weight, mobility, lumps, behaviour or signs of confusion. Mention them to your vet promptly rather than assuming it is just old age - many such changes are treatable.</p>"]
  ],
  related: [
    { name: "Hot-climate pet care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", desc: "Doubly important for older pets." },
    { name: "Dental care", path: "/pet-health-pattaya/dental-care.html", desc: "Common in older pets and worth catching early." },
    { name: "End-of-life care", path: "/owning-a-pet-in-pattaya/saying-goodbye.html", desc: "Compassionate guidance for the final stage." },
    HUB_RELATED
  ]
}));

/* ---------------- END OF LIFE ---------------- */
pages.push(own({
  slug: "saying-goodbye", crumb: "Saying goodbye",
  title: "End-of-life care for pets in Pattaya | PattayaPets",
  desc: "Compassionate, practical orientation on end-of-life care for a pet in " +
    "Pattaya - quality of life, what euthanasia involves, and aftercare options.",
  h1: "End-of-life care: saying goodbye to a pet in Pattaya",
  lede: "It is the hardest part of loving an animal. Understanding what is " +
    "involved, before you have to, can make a painful time a little less " +
    "overwhelming.",
  verify: "This is general, compassionate orientation, last reviewed May 2026, " +
    "and is not veterinary advice. Your own vet knows your pet and will guide " +
    "you gently through the decisions and the options available to you.",
  sections: [
    { h: "Talk to your vet", html:
      "<p>When a pet is seriously ill, or simply growing very old, your " +
      "<a href=\"/vets/\">vet</a> is the person to talk to honestly. They can " +
      "explain what is happening, what treatment can and cannot do, and how to " +
      "keep your pet comfortable. You do not have to carry these decisions " +
      "alone &mdash; a good vet will walk through them with you, without " +
      "pressure, at your pace.</p>" },
    { h: "Thinking about quality of life", html:
      "<p>The kindest question is not &lsquo;how long can we keep going?&rsquo; " +
      "but &lsquo;is my pet still comfortable and content?&rsquo;. Vets often " +
      "talk this through in terms of the everyday things &mdash; appetite, " +
      "freedom from pain, mobility, interest in life, and whether the good days " +
      "still outnumber the hard ones. Your vet can help you assess this calmly " +
      "and honestly, and there are quality-of-life checklists that make it " +
      "easier to see clearly through the emotion.</p>" },
    { h: "What euthanasia involves", html:
      "<p>If the time comes, putting a pet to sleep is a gentle, peaceful and " +
      "pain-free process, carried out by a vet. You can usually choose to be " +
      "with your pet, holding and comforting it, and many owners find that " +
      "important. Some clinics can also arrange a <strong>home visit</strong>, " +
      "so a pet can stay in familiar surroundings &mdash; ask your vet whether " +
      "that is possible. Take whatever time you need to say goodbye.</p>" },
    { h: "Aftercare", html:
      "<p>Pet cremation services are available in the Pattaya area, including " +
      "individual cremation where the ashes are returned to you. Your vet can " +
      "talk you through the options and help arrange aftercare, so this is not " +
      "something you have to organise by yourself at a difficult moment. There " +
      "is no single right choice &mdash; only the one that feels right to " +
      "you.</p>" },
    { h: "Grief is real, and so is healing", html:
      "<p>The loss of a pet is a genuine bereavement, and it deserves to be " +
      "treated as one. Be gentle with yourself, give yourself time, and lean on " +
      "people who understand what that animal meant to you. Children may need " +
      "support and honest, age-appropriate words too. If you have other pets, " +
      "keep their routine steady &mdash; they often notice an absence &mdash; " +
      "and let your own grief take the time it needs.</p>" }
  ],
  faqs: [
    ["How do I know when it's time?",
     "<p>The guiding question is whether your pet is still comfortable and content - appetite, freedom from pain, mobility, interest in life, and whether the good days still outnumber the hard ones. Your vet can help you assess this calmly, and quality-of-life checklists can help you see clearly.</p>"],
    ["Can my pet be put to sleep at home?",
     "<p>Often yes - some clinics can arrange a home visit so a pet can stay in familiar surroundings. Ask your vet whether that is possible. Putting a pet to sleep is a gentle, peaceful, pain-free process, and you can usually choose to be present.</p>"],
    ["What are the options for a pet's body afterwards?",
     "<p>Pet cremation services are available in the Pattaya area, including individual cremation with the ashes returned to you. Your vet can explain the options and help arrange aftercare, so you do not have to organise it alone at a hard time.</p>"]
  ],
  related: [
    { name: "Senior pet care", path: "/owning-a-pet-in-pattaya/senior-pet-care.html", desc: "Caring well for an older pet." },
    { name: "Vets in Pattaya", path: "/vets/", desc: "The vet who knows your pet best." },
    HUB_RELATED
  ]
}));

module.exports = pages;
