"use strict";
/* Cluster: Pet emergencies & tropical hazards */

const { article, hub } = require("../guidekit.js");
const { BUSINESSES, AREAS } = require("../data/businesses.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const CLUSTER = { name: "Pet emergencies", path: "/pet-emergency/" };
const SUB = [GUIDES, CLUSTER];

const NOTVET =
  "PattayaPets is not a veterinary practice and this is not veterinary advice. " +
  "In a genuine emergency, the right move is almost always the same: get your pet " +
  "to a veterinarian as fast as safely possible. The information here is general " +
  "orientation only.";

const pages = [];

/* ---------------- HUB ---------------- */
pages.push(hub({
  path: "/pet-emergency/",
  title: "Pet emergencies in Pattaya | PattayaPets",
  desc: "What to do in a pet emergency in Pattaya: 24-hour vets, first-aid " +
    "orientation, heatstroke, ticks, snake bites, street dogs and poisoning.",
  crumb: "Pet emergencies",
  breadcrumbs: [GUIDES],
  eyebrow: "Emergency guide",
  h1: "Pet emergencies &amp; tropical hazards in Pattaya",
  lede: "A hot climate brings its own risks for pets. Know where the 24-hour vets " +
    "are, and recognise the hazards before they become emergencies.",
  intro:
    '<div class="callout callout-emergency"><div class="ch">If your pet needs help right now</div>' +
    "<p>Go straight to a 24-hour animal hospital &mdash; do not wait for normal " +
    "opening hours. See <a href=\"/pet-emergency/24-hour-vets-pattaya.html\">" +
    "24-hour vets in Pattaya</a> for clinics open around the clock, with " +
    "addresses and contact details. Save your nearest clinic&rsquo;s contact " +
    "today, before you ever need it.</p></div>" +
    '<div class="prose"><p>' + NOTVET + "</p></div>",
  groups: [
    {
      title: "When it is an emergency",
      cards: [
        { tag: "Start here", name: "24-hour vets in Pattaya", desc: "Animal hospitals open around the clock — addresses and contact details.", path: "/pet-emergency/24-hour-vets-pattaya.html" },
        { tag: "Be ready", name: "Pet first-aid orientation", desc: "Staying calm, moving an injured pet safely, and what not to do.", path: "/pet-emergency/pet-first-aid.html" }
      ]
    },
    {
      title: "Tropical hazards to know",
      note: "The risks that catch new pet owners in Pattaya off guard.",
      cards: [
        { name: "Heatstroke", desc: "Pattaya's number-one preventable pet emergency — signs and prevention.", path: "/pet-emergency/heatstroke.html" },
        { name: "Ticks & fleas", desc: "Year-round in a tropical climate, and why prevention matters.", path: "/pet-emergency/ticks-and-fleas.html" },
        { name: "Snake bites", desc: "Thailand has venomous snakes — how to lower the risk and react.", path: "/pet-emergency/snake-bites.html" },
        { name: "Street-dog encounters", desc: "Walking your dog safely around Pattaya's free-roaming dogs.", path: "/pet-emergency/street-dog-encounters.html" },
        { name: "Poisoning", desc: "Common household and street hazards, and what to do.", path: "/pet-emergency/poisoning.html" },
        { name: "Beach & sea hazards", desc: "Jellyfish, hot sand, seawater and tideline scavenging on the beach.", path: "/pet-emergency/beach-and-sea-hazards.html" },
        { name: "Toads, centipedes & stings", desc: "Venomous creatures beyond snakes, and what to do.", path: "/pet-emergency/venomous-creatures.html" }
      ]
    },
    {
      title: "Accidents and injuries",
      cards: [
        { name: "If your pet is choking", desc: "Recognising an airway blockage, and acting fast.", path: "/pet-emergency/choking.html" },
        { name: "Hit by a vehicle", desc: "What to do if your pet is in a road accident in Pattaya.", path: "/pet-emergency/road-accident.html" }
      ]
    }
  ],
  related: [
    { name: "Hot-climate pet care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", desc: "Preventing heatstroke and paw-pad burns in Pattaya." },
    { name: "Getting to the vet", path: "/owning-a-pet-in-pattaya/getting-to-the-vet.html", desc: "Transport, taxis and what to bring in an emergency." },
    { name: "Pet health in Pattaya", path: "/pet-health-pattaya/", desc: "Ticks, heartworm and other tropical-climate risks." },
    { name: "Start here", path: "/start-here.html", desc: "Orientation for new pet owners in Pattaya." }
  ]
}));

/* ---------------- 24-HOUR VETS ---------------- */
var c24 = BUSINESSES.filter(function (b) {
  return (b.category === "vets" || b.category === "mobile-vets") && b.c24;
});
var c24list = c24.map(function (b) {
  var areaNm = b.areas[0] && AREAS[b.areas[0]] ? AREAS[b.areas[0]].name : "Pattaya";
  return '<article class="biz-card"><div class="biz-top">' +
    "<div><h3><a href=\"/" + b.category + "/" + b.slug + ".html\">" + b.name +
    "</a></h3><p class=\"biz-sub\">" + b.type + " &middot; " + areaNm + "</p></div>" +
    '<span class="badge-24h">24 hr</span></div>' +
    '<table class="facts-table" style="margin:.5rem 0 0"><tbody>' +
    (b.address ? "<tr><th scope=\"row\">Address</th><td>" + b.address + "</td></tr>" : "") +
    (b.phone ? '<tr><th scope="row">Phone</th><td><a href="tel:' + b.tel + '">' + b.phone + "</a></td></tr>" : "") +
    (!b.address && !b.phone ? '<tr><td colspan="2">Contact details are being verified &mdash; check the clinic listing before travelling.</td></tr>' : "") +
    "</tbody></table></article>";
}).join("");

pages.push(article({
  path: "/pet-emergency/24-hour-vets-pattaya.html",
  title: "24-hour vets in Pattaya | PattayaPets",
  desc: "Animal hospitals in Pattaya listed as open 24 hours, with addresses and " +
    "contact details — for pet emergencies outside normal clinic hours.",
  crumb: "24-hour vets",
  breadcrumbs: SUB,
  eyebrow: "Pet emergencies",
  h1: "24-hour vets in Pattaya",
  lede: "When a pet emergency happens at night or on a holiday, you need a clinic " +
    "that is already open. These Pattaya animal hospitals are listed as operating " +
    "around the clock.",
  sections: [
    { html:
      '<div class="callout callout-emergency"><div class="ch">Act now, read later</div>' +
      "<p>If your pet is in distress, call the nearest clinic below and head " +
      "there. Phone ahead if you can, so staff are ready &mdash; but do not delay " +
      "leaving. " + NOTVET + "</p></div>" },
    { h: "Animal hospitals listed as open 24 hours", html:
      "<p>The clinics below appear, from public information, to operate 24 hours. " +
      "Opening hours can change &mdash; if you can, call first to confirm someone " +
      "is on duty for emergencies.</p>" +
      '<div class="grid grid-2">' + c24list + "</div>" },
    { h: "Before an emergency ever happens", html:
      "<p>Three minutes of preparation now can save your pet later:</p>" +
      "<ul><li><strong>Save a 24-hour clinic in your phone</strong> &mdash; pick " +
      "the closest to your home and add it to your contacts today.</li>" +
      "<li><strong>Know your route</strong> &mdash; have a sense of how you would " +
      "get there, day or night, and who could drive if you cannot.</li>" +
      "<li><strong>Keep a carrier accessible</strong> &mdash; a panicked or " +
      "injured pet is far safer transported in a carrier or crate.</li>" +
      "<li><strong>Keep records handy</strong> &mdash; vaccination history helps " +
      "the vet act faster.</li></ul>" +
      "<p>For non-urgent care, browse the full " +
      "<a href=\"/vets/\">directory of vets and animal hospitals</a>.</p>" }
  ],
  faqs: [
    ["How do I know if it is a real emergency?",
     "<p>Treat it as urgent if your pet has difficulty breathing, has collapsed or cannot stand, is bleeding heavily, has had a suspected poisoning, seizure or heatstroke, has been hit by a vehicle, or is in obvious severe pain. When in doubt, call a 24-hour clinic and describe what you see — they can advise whether to come in.</p>"],
    ["Should I call before going?",
     "<p>If you can do it without delaying, yes — a quick call lets the clinic prepare and confirm a vet is on duty. But never let making a call hold you up when minutes matter.</p>"],
    ["Are these clinics confirmed as 24-hour by PattayaPets?",
     "<p>They are listed as 24-hour based on public information. PattayaPets has not yet completed anonymous visits, and hours can change — check the clinic listing for current contact details before you travel.</p>"]
  ],
  related: [
    { name: "Pet first-aid orientation", path: "/pet-emergency/pet-first-aid.html", desc: "Staying calm and moving a hurt pet safely." },
    { name: "Heatstroke", path: "/pet-emergency/heatstroke.html", desc: "Pattaya's most common preventable emergency." },
    { name: "Poisoning", path: "/pet-emergency/poisoning.html", desc: "Toad toxin, baits and other hazards." },
    { name: "All vets in Pattaya", path: "/vets/", desc: "The full directory for non-urgent care." }
  ]
}));

/* ---------------- helper for hazard pages ---------------- */
function hazard(o) {
  return article({
    path: "/pet-emergency/" + o.slug + ".html",
    title: o.title,
    desc: o.desc,
    crumb: o.crumb,
    breadcrumbs: SUB,
    eyebrow: "Pet emergencies",
    h1: o.h1,
    lede: o.lede,
    sections: [{ html:
      '<div class="callout callout-emergency"><p>' + NOTVET + "</p></div>" }]
      .concat(o.sections),
    faqs: o.faqs,
    related: o.related || [
      { name: "24-hour vets in Pattaya", path: "/pet-emergency/24-hour-vets-pattaya.html", desc: "Clinics open around the clock." },
      { name: "Pet first-aid orientation", path: "/pet-emergency/pet-first-aid.html", desc: "The calm, practical basics." },
      { name: "Owning a pet in Pattaya", path: "/owning-a-pet-in-pattaya/", desc: "Day-to-day care in a hot climate." }
    ]
  });
}

/* ---------------- FIRST AID ---------------- */
pages.push(hazard({
  slug: "pet-first-aid", crumb: "Pet first aid",
  title: "Pet first aid in Pattaya — the calm basics | PattayaPets",
  desc: "Practical orientation for a pet emergency in Pattaya: stay calm, move an " +
    "injured pet safely, and get to a vet — without making things worse.",
  h1: "Pet first-aid orientation",
  lede: "&lsquo;First aid&rsquo; for a pet owner is mostly about staying calm, " +
    "keeping your pet safe, and getting to a vet quickly. It is not about playing " +
    "vet yourself.",
  sections: [
    { h: "The mindset", html:
      "<p>In an emergency, your job is to be the calm one. A frightened or " +
      "injured animal reads your panic. Speak low, move slowly, and focus on one " +
      "thing: getting safely to professional help.</p>" },
    { h: "Moving an injured pet safely", html:
      "<ul><li><strong>Protect yourself first</strong> &mdash; even a gentle pet " +
      "in pain may bite or scratch. Approach slowly and quietly.</li>" +
      "<li><strong>Use a carrier or a firm surface</strong> &mdash; for a small " +
      "pet, a carrier; for a larger dog, a board, a blanket used as a stretcher, " +
      "or careful support of the body.</li>" +
      "<li><strong>Keep the pet warm and still</strong> &mdash; minimise " +
      "movement, especially if a spinal injury is possible.</li>" +
      "<li><strong>Go</strong> &mdash; head for the nearest " +
      "<a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour vet</a>.</li></ul>" },
    { h: "What not to do", html:
      "<p>Do not give human medicines &mdash; many are toxic to pets. Do not " +
      "force food or water on a collapsed animal. Do not try to set a bone, " +
      "induce vomiting, or treat a wound beyond gently controlling obvious " +
      "bleeding. These are decisions for a veterinarian.</p>" },
    { h: "Be ready before it happens", html:
      "<p>Keep a carrier accessible, a 24-hour clinic saved in your phone, and " +
      "your pet&rsquo;s vaccination records somewhere you can grab them. " +
      "Preparation is the most useful &lsquo;first aid&rsquo; there is.</p>" }
  ],
  faqs: [
    ["Should I keep a pet first-aid kit?",
     "<p>A simple kit — a clean carrier, a spare lead, a towel or blanket, and your vet's number — covers most situations. Ask your own vet what else they suggest for your specific pet.</p>"],
    ["Can I give my dog human painkillers?",
     "<p>No. Many common human medicines, including some painkillers, are dangerous or fatal to dogs and cats. Never medicate a pet without a vet's direction.</p>"]
  ],
  related: [
    { name: "Heatstroke", path: "/pet-emergency/heatstroke.html", desc: "The most common preventable emergency here." },
    { name: "Choking", path: "/pet-emergency/choking.html", desc: "Airway blockages and swallowed objects." },
    { name: "Road accidents", path: "/pet-emergency/road-accident.html", desc: "Moving an injured pet safely." },
    { name: "24-hour vets in Pattaya", path: "/pet-emergency/24-hour-vets-pattaya.html", desc: "Go straight here in an emergency." }
  ]
}));

/* ---------------- HEATSTROKE ---------------- */
pages.push(hazard({
  slug: "heatstroke", crumb: "Heatstroke",
  title: "Heatstroke in pets | PattayaPets",
  desc: "Heatstroke is the most common preventable pet emergency in Pattaya. " +
    "Recognise the signs, know the high-risk situations, and prevent it.",
  h1: "Heatstroke in pets",
  lede: "In Pattaya&rsquo;s heat and humidity, heatstroke is the emergency owners " +
    "most often cause by accident &mdash; and the one most easily prevented.",
  sections: [
    { h: "Why Pattaya makes it worse", html:
      "<p>Pattaya is hot and humid year round. Dogs and cats cannot sweat the way " +
      "people do &mdash; they shed heat mainly by panting, which works poorly in " +
      "humid air. Add hot pavement, parked cars and midday sun and a pet can " +
      "overheat dangerously fast.</p>" },
    { h: "Warning signs", html:
      "<p>Signs that a pet is overheating include heavy, frantic panting, thick " +
      "drooling, a bright red tongue and gums, weakness or stumbling, vomiting, " +
      "and collapse. Heatstroke is a true emergency &mdash; if you see these " +
      "signs, it is time to act and to head for a " +
      "<a href=\"/pet-emergency/24-hour-vets-pattaya.html\">vet</a>.</p>" },
    { h: "The high-risk situations", html:
      "<ul><li><strong>A parked car</strong> &mdash; never, even for a minute, " +
      "even with windows cracked. Interiors become lethal extraordinarily fast.</li>" +
      "<li><strong>Midday walks</strong> &mdash; walk early morning or after " +
      "sunset instead.</li>" +
      "<li><strong>Hot pavement</strong> &mdash; if you cannot hold the back of " +
      "your hand on it for seven seconds, it is too hot for paws.</li>" +
      "<li><strong>Snub-nosed breeds</strong> &mdash; Pugs, French Bulldogs, " +
      "Persians and similar overheat especially easily.</li></ul>" },
    { h: "Prevention", html:
      "<p>Keep fresh water always available, provide shade and airflow indoors, " +
      "walk in the cool hours, and never leave a pet in a hot car or a hot " +
      "balcony. If you suspect heatstroke, move the pet to shade, offer small " +
      "amounts of cool (not ice-cold) water, wet the coat with cool water, and " +
      "get to a vet without delay &mdash; cooling on the way, not instead of " +
      "going.</p>" }
  ],
  faqs: [
    ["What time of day is safe to walk a dog in Pattaya?",
     "<p>Early morning and after sunset are the comfortable windows. Through the middle of the day the air, sun and pavement are all working against your pet — keep walks short and shaded, or skip them.</p>"],
    ["My dog seems fine after overheating — do I still need a vet?",
     "<p>Heatstroke can cause internal damage that is not visible straight away. If your pet has genuinely overheated, a vet check is the safe call even if it seems to have recovered.</p>"]
  ],
  related: [
    { name: "Hot-climate pet care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", desc: "Preventing heat problems day to day." },
    { name: "Where to walk your dog", path: "/owning-a-pet-in-pattaya/where-to-walk-your-dog.html", desc: "Cool-hour walking routines." },
    { name: "Pet emergencies", path: "/pet-emergency/", desc: "Back to the emergency hub." },
    { name: "24-hour vets in Pattaya", path: "/pet-emergency/24-hour-vets-pattaya.html", desc: "Clinics open around the clock." }
  ]
}));

/* ---------------- TICKS & FLEAS ---------------- */
pages.push(hazard({
  slug: "ticks-and-fleas", crumb: "Ticks & fleas",
  title: "Ticks & fleas on pets in Pattaya | PattayaPets",
  desc: "Thailand's tropical climate means ticks and fleas all year. Why " +
    "prevention matters for pets in Pattaya, and what to watch for.",
  h1: "Ticks &amp; fleas in a tropical climate",
  lede: "In a temperate country, parasites have an off-season. In Pattaya they do " +
    "not &mdash; which changes how you protect your pet.",
  sections: [
    { h: "A year-round problem", html:
      "<p>Thailand&rsquo;s warm, humid climate lets ticks and fleas breed all " +
      "year. There is no winter pause. For pet owners that means parasite " +
      "prevention is not seasonal &mdash; it is continuous.</p>" },
    { h: "Why ticks matter beyond the itch", html:
      "<p>Fleas cause irritation and can trigger skin allergies. Ticks are the " +
      "bigger concern: they can transmit serious tick-borne diseases to dogs. " +
      "Catching and preventing them is far easier than treating the illnesses " +
      "they carry.</p>" },
    { h: "Prevention", html:
      "<ul><li><strong>Use a vet-recommended preventative</strong> &mdash; " +
      "spot-on treatments, chewable tablets and collars all exist; ask a vet " +
      "which suits your pet, and keep to the schedule year-round.</li>" +
      "<li><strong>Check after walks</strong> &mdash; run your hands over your " +
      "pet, especially ears, neck, armpits and between toes.</li>" +
      "<li><strong>Keep the environment tidy</strong> &mdash; short grass and " +
      "clean bedding give parasites fewer places to thrive.</li></ul>" +
      "<p>If you find a tick or a flea problem, a " +
      "<a href=\"/vets/\">vet</a> can recommend the right treatment and " +
      "prevention plan.</p>" }
  ],
  faqs: [
    ["Do indoor cats need flea and tick prevention in Pattaya?",
     "<p>Often yes — parasites can come in on people, on other pets, or through open windows and balconies. Ask your vet what is appropriate for your cat.</p>"],
    ["Should I remove a tick myself?",
     "<p>Ticks should be removed promptly and correctly. If you are not confident, a vet can do it quickly and advise on prevention so it does not keep happening.</p>"]
  ],
  related: [
    { name: "Tick-borne disease", path: "/pet-health-pattaya/tick-borne-disease.html", desc: "What ticks can transmit here." },
    { name: "Heartworm", path: "/pet-health-pattaya/heartworm.html", desc: "Mosquito-borne prevention year-round." },
    { name: "Dog vaccinations & parasites", path: "/dogs/dog-vaccinations-thailand.html", desc: "Keeping prevention on schedule." }
  ]
}));

/* ---------------- SNAKE BITES ---------------- */
pages.push(hazard({
  slug: "snake-bites", crumb: "Snake bites",
  title: "Snake bites & pets in Pattaya | PattayaPets",
  desc: "Thailand has venomous snakes. How to lower the risk to your pet around " +
    "Pattaya, and what to do if you suspect a snake bite.",
  h1: "Snakes and your pet",
  lede: "Thailand is home to venomous snakes, and a curious dog or cat in a " +
    "garden is exactly the sort of thing that finds one.",
  sections: [
    { h: "Where pets meet snakes", html:
      "<p>Snakes turn up in gardens, gardens&rsquo; edges, long grass, drains, " +
      "and undergrowth &mdash; and they are more active around dawn and dusk and " +
      "after rain. A pet that likes to nose through bushes is the one most at " +
      "risk.</p>" },
    { h: "Lowering the risk", html:
      "<ul><li>Keep grass cut short and clear away debris, wood piles and " +
      "rubbish where snakes shelter.</li>" +
      "<li>Walk dogs on a lead through undergrowth and unlit areas, especially " +
      "at dawn and dusk.</li>" +
      "<li>Watch your pet in the garden rather than letting it roam unobserved " +
      "at high-risk times.</li>" +
      "<li>Block gaps under fences and doors where a snake could enter.</li></ul>" },
    { h: "If you suspect a bite", html:
      "<p>A suspected snake bite is an emergency. Keep your pet as calm and " +
      "<strong>still</strong> as possible &mdash; movement spreads venom faster " +
      "&mdash; and get to a <a href=\"/pet-emergency/24-hour-vets-pattaya.html\">" +
      "vet</a> immediately. Do not try to catch or kill the snake; if you can " +
      "safely note its colour and size from a distance, that may help the vet. " +
      "Do not apply a tourniquet, cut the wound, or attempt to suck out venom.</p>" }
  ],
  faqs: [
    ["How do I know if my pet was bitten by a snake?",
     "<p>You may see sudden swelling, puncture marks, bleeding, pain, drooling, weakness or collapse — or you may simply have seen the snake. If a snake bite is possible, treat it as an emergency and get to a vet straight away.</p>"],
    ["Should I try to identify the snake?",
     "<p>Only from a safe distance, and never at the cost of delaying the trip to the vet. Your safety comes first; the vet can often treat without a precise identification.</p>"]
  ],
  related: [
    { name: "24-hour vets in Pattaya", path: "/pet-emergency/24-hour-vets-pattaya.html", desc: "Go straight here if you suspect a bite." },
    { name: "Venomous creatures", path: "/pet-emergency/venomous-creatures.html", desc: "Toads, centipedes and other venom risks." },
    { name: "Pet first aid", path: "/pet-emergency/pet-first-aid.html", desc: "Moving an injured pet safely." },
    { name: "Where to walk your dog", path: "/owning-a-pet-in-pattaya/where-to-walk-your-dog.html", desc: "Dawn and dusk are high-risk times." }
  ]
}));

/* ---------------- STREET DOGS ---------------- */
pages.push(hazard({
  slug: "street-dog-encounters", crumb: "Street dogs",
  title: "Street-dog encounters in Pattaya | PattayaPets",
  desc: "Pattaya has free-roaming street dogs. How to walk your own dog safely, " +
    "handle an encounter, and why rabies vaccination matters.",
  h1: "Walking safely around Pattaya&rsquo;s street dogs",
  lede: "Free-roaming &lsquo;soi dogs&rsquo; are part of life in Pattaya. Most " +
    "want nothing to do with you &mdash; but a walk routine that respects them " +
    "keeps everyone calm.",
  sections: [
    { h: "Understanding soi dogs", html:
      "<p>Many Pattaya streets have free-roaming dogs that live around a soi " +
      "(side street), often fed by residents. Most are wary of people and not " +
      "looking for trouble, but they can be territorial, especially in a group " +
      "or near where they sleep.</p>" },
    { h: "Walking your dog safely", html:
      "<ul><li>Keep your dog on a lead and close to you, particularly on " +
      "unfamiliar streets.</li>" +
      "<li>Learn the routes near your home and when local dogs are most active; " +
      "early-morning and late-evening walks are calmer.</li>" +
      "<li>If you see a group of street dogs ahead, calmly change direction " +
      "rather than walking through them.</li>" +
      "<li>Stay relaxed &mdash; a tense owner makes a tense dog, and tension " +
      "invites a reaction.</li></ul>" },
    { h: "If dogs approach", html:
      "<p>Do not run or shout. Keep moving calmly and steadily away, keep your " +
      "body side-on rather than squared up, and avoid direct staring. Put " +
      "yourself between your dog and the approaching dogs if you can do so " +
      "safely. Most encounters end with everyone simply moving on.</p>" },
    { h: "Rabies — keep vaccinations current", html:
      "<p>Rabies still exists in Thailand. Keeping your own pet&rsquo;s rabies " +
      "vaccination current is essential &mdash; for its protection and because " +
      "it is legally required. If your pet is bitten or scratched by a street " +
      "animal, or you are, treat it seriously and seek medical or veterinary " +
      "advice promptly at a " +
      "<a href=\"/vets/\">Pattaya vet</a> or a " +
      "<a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour animal hospital</a>. " +
      "For street-animal emergencies, " +
      "<a href=\"/vets/animal-army-hospital.html\">Animal Army Hospital</a> in Na " +
      "Jomtien operates a rescue ambulance.</p>" }
  ],
  faqs: [
    ["Are Pattaya's street dogs dangerous?",
     "<p>Most are not interested in confrontation and keep their distance. The sensible approach is respect, not fear: keep your dog leashed, give groups space, and stay calm. Keep your pet's rabies vaccination current as a basic precaution.</p>"],
    ["What if my dog is bitten by a street dog?",
     "<p>Treat it seriously. Get the wound seen by a <a href=\"/vets/\">vet</a> as soon as you can — or a <a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour animal hospital</a> if it is after hours. The vet will advise on wound care and rabies risk given your pet's vaccination status. If a person is bitten, seek medical advice promptly.</p>"]
  ],
  related: [
    { name: "Dog registration & the law", path: "/owning-a-pet-in-pattaya/dog-registration-thailand.html", desc: "Rabies vaccination is a legal duty." },
    { name: "Adopt a pet in Pattaya", path: "/adopt-a-pet-pattaya/", desc: "Rescue organisations and rehoming." },
    { name: "Where to walk your dog", path: "/owning-a-pet-in-pattaya/where-to-walk-your-dog.html", desc: "Building a safe walking routine." },
    { name: "How to help street animals", path: "/adopt-a-pet-pattaya/how-to-help.html", desc: "What to do for an injured stray." }
  ]
}));

/* ---------------- POISONING ---------------- */
pages.push(hazard({
  slug: "poisoning", crumb: "Poisoning",
  title: "Pet poisoning in Pattaya | PattayaPets",
  desc: "Common poisoning hazards for pets in Pattaya homes and streets, the " +
    "warning signs, and what to do if you suspect your pet has been poisoned.",
  h1: "Pet poisoning &mdash; hazards and what to do",
  lede: "Some everyday things in a Pattaya home or street are toxic to pets. " +
    "Knowing them is most of the prevention.",
  sections: [
    { h: "Common hazards", html:
      "<p>Things that can poison a dog or cat include:</p>" +
      "<ul><li><strong>Toxic foods</strong> &mdash; chocolate, grapes and " +
      "raisins, onion and garlic, xylitol sweetener, and alcohol.</li>" +
      "<li><strong>Rodent and pest poisons</strong> &mdash; rat bait is designed " +
      "to be eaten and is highly dangerous; pets can also be poisoned by eating " +
      "a poisoned rodent.</li>" +
      "<li><strong>Human medicines</strong> &mdash; many common ones are toxic " +
      "to pets.</li>" +
      "<li><strong>Cleaning products and insecticides</strong>, and some " +
      "garden plants.</li></ul>" },
    { h: "Warning signs", html:
      "<p>Signs vary with the poison but can include vomiting, diarrhoea, " +
      "drooling, tremors or seizures, weakness, breathing trouble or sudden " +
      "collapse. If you saw your pet eat something it should not have, do not " +
      "wait for symptoms.</p>" },
    { h: "If you suspect poisoning", html:
      "<p>Contact a <a href=\"/pet-emergency/24-hour-vets-pattaya.html\">vet</a> " +
      "immediately and head there. If you know what your pet ate, take the " +
      "packaging or a photo with you &mdash; it helps the vet act fast. " +
      "<strong>Do not make your pet vomit unless a vet tells you to</strong>: " +
      "with some substances that does more harm than good.</p>" },
    { h: "Prevention", html:
      "<p>Store food, medicines, cleaning products and pest poisons well out of " +
      "reach. Be cautious about where your pet scavenges on walks, and ask " +
      "neighbours and condo management about any rodent baiting in shared " +
      "areas.</p>" }
  ],
  faqs: [
    ["Should I make my pet vomit if it ate something toxic?",
     "<p>Not on your own initiative. For some poisons, inducing vomiting causes further harm. Call a vet first and follow their instruction.</p>"],
    ["My pet ate chocolate — is that really dangerous?",
     "<p>Chocolate is genuinely toxic to dogs, and the risk rises with darker chocolate and smaller dogs. If your pet has eaten chocolate, contact a vet with the type and amount and your pet's weight.</p>"]
  ],
  related: [
    { name: "Choking", path: "/pet-emergency/choking.html", desc: "Airway blockages and swallowed objects." },
    { name: "Venomous creatures", path: "/pet-emergency/venomous-creatures.html", desc: "Toads, centipedes and other venom risks." },
    { name: "Pet first aid", path: "/pet-emergency/pet-first-aid.html", desc: "The calm basics before you reach a vet." },
    { name: "24-hour vets in Pattaya", path: "/pet-emergency/24-hour-vets-pattaya.html", desc: "Do not wait for symptoms to worsen." }
  ]
}));

module.exports = pages;
