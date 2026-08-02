"use strict";
/* Extra guides for the "Pet emergencies" cluster: choking, road accidents,
   and beach & sea hazards. Child pages of /pet-emergency/. */

const { article } = require("../guidekit.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const CLUSTER = { name: "Pet emergencies", path: "/pet-emergency/" };
const SUB = [GUIDES, CLUSTER];

const NOTVET =
  "No licensed veterinarian has clinically reviewed this page. It deliberately does " +
  "not provide a treatment algorithm. In a current emergency, call a veterinary clinic " +
  "now, follow its live instructions and travel as the clinic directs; do not delay care " +
  "to keep reading.";

function hazard(o) {
  return article({
    path: "/pet-emergency/" + o.slug + ".html",
    title: o.title, desc: o.desc, crumb: o.crumb, breadcrumbs: SUB,
    eyebrow: "Pet emergencies", h1: o.h1, lede: o.lede,
    updated: o.updated || "2026-06-01",
    sections: [{ html:
      '<div class="callout callout-emergency"><p>' + NOTVET + "</p></div>" }]
      .concat(o.sections),
    faqs: o.faqs,
    related: o.related || [
      { name: "24-hour vets in Pattaya", path: "/pet-emergency/24-hour-vets-pattaya.html", desc: "Clinics open around the clock." },
      { name: "Pet first-aid orientation", path: "/pet-emergency/pet-first-aid.html", desc: "The calm, practical basics." },
      { name: "Getting your pet to the vet", path: "/owning-a-pet-in-pattaya/getting-to-the-vet.html", desc: "Transport options without a car." },
      { name: "Venomous creatures", path: "/pet-emergency/venomous-creatures.html", desc: "Snakes, scorpions and centipedes." }
    ]
  });
}

const pages = [];

/* ---------------- CHOKING ---------------- */
pages.push(hazard({
  slug: "choking", crumb: "Choking",
  updated: "2026-08-01",
  title: "Pet Choking in Pattaya: Before the Vet | PattayaPets",
  desc: "Recognising choking and an airway blockage in a dog or cat, what to do, " +
    "what not to do, how to prevent it, and why urgent veterinary help matters.",
  h1: "If your pet is choking",
  lede: "Choking is frightening and fast. Recognising it, and getting to a vet " +
    "without delay, matters more than any single technique.",
  sections: [
    { h: "Recognising choking", html:
      "<p>Sudden gagging, retching, drooling, pawing at the mouth, abnormal breathing, " +
      "pale or blue gums, extreme distress or collapse may indicate an airway emergency. " +
      "A webpage cannot distinguish choking from another breathing problem. Call a " +
      "<a href=\"/pet-emergency/24-hour-vets-pattaya.html\">veterinary clinic</a> " +
      "immediately and describe exactly what you see.</p>" },
    { h: "What to do, and what not to do", html:
      "<p>Call a 24-hour clinic immediately, arrange transport and follow the " +
      "veterinary team&rsquo;s live, case-specific direction. Do not put fingers, tools, " +
      "food, water or medicine into the animal&rsquo;s mouth, and do not attempt an " +
      "airway manoeuvre from an online description unless the veterinarian speaking " +
      "to you directs it.</p>" },
    { h: "On the way to the clinic", html:
      "<p>Tell the clinic the animal&rsquo;s species, size, consciousness and breathing " +
      "status, and follow its instructions for handling and transport. This page gives " +
      "no head position, mouth-clearing, thrust, rescue-breath or compression method. " +
      "For transport options, see " +
      "<a href=\"/owning-a-pet-in-pattaya/getting-to-the-vet.html\">getting your pet " +
      "to the vet</a>.</p>" },
    { h: "Preventing it", html:
      "<p>Most choking is preventable. Choose toys and balls too large to lodge in " +
      "the throat, supervise chews and take away small end-pieces, and keep these " +
      "common culprits away from pets: <strong>bones, rawhide chunks, corn cobs, " +
      "fruit stones, children&rsquo;s toys and small household objects</strong>. " +
      "Match every chew and toy to the size of your pet. See also " +
      "<a href=\"/pet-emergency/poisoning.html\">poisoning hazards</a> for items " +
      "that can block or injure the airway.</p>" },
    { h: "After a choking scare", html:
      "<p>If an apparent choking episode stops, call a veterinary clinic and describe " +
      "what happened. The clinic can decide whether examination is needed; do not use " +
      "the animal&rsquo;s apparent recovery as a substitute for that advice.</p>" +
      "<p>Swap risky chews for size-appropriate toys, and tell household members and " +
      "guests not to feed table scraps — especially bones from Thai street food. " +
      "If your pet repeats choking episodes, investigate underlying dental disease or " +
      "a habit of gulping food too fast with your regular " +
      "<a href=\"/vets/\">vet</a>.</p>" }
  ],
  faqs: [
    ["How do I know if my pet is choking?",
     "<p>Sudden distress, pawing at the mouth, gagging, drooling, coughing and pale or blue gums. The most serious sign is silent struggling with no air moving, or collapse &mdash; treat that as a dire emergency.</p>"],
    ["Should I try to pull the object out?",
     "<p>Do not put fingers or tools into the mouth based on this page. Call a 24-hour veterinary clinic immediately and follow its live, case-specific instructions.</p>"],
    ["How can I prevent choking?",
     "<p>Use toys and balls too big to lodge in the throat, supervise all chews, and keep bones, rawhide pieces, corn cobs, fruit stones and small objects out of reach. Size every chew and toy to your pet.</p>"],
    ["Can cats choke the same way as dogs?",
     "<p>Cats can have airway emergencies. Call a veterinary clinic immediately and follow its live instructions; do not attempt a mouth or airway manoeuvre from this page.</p>"],
    ["Should I try the Heimlich manoeuvre on my pet?",
     "<p>This unreviewed page gives no thrust or airway technique. Call a veterinary clinic immediately and do only what its team directs for this animal.</p>"],
    ["What objects do Pattaya dogs choke on most?",
     "<p>Chicken bones from street food scraps, corn cobs, small balls, and children's toys dropped in sois. Supervise chews and keep bins secured on balconies.</p>"],
    ["My pet gagged but seems fine now — still see a vet?",
     "<p>Call a veterinary clinic, describe the episode and follow its advice on examination and urgency.</p>"]
  ],
  related: [
    { name: "Poisoning hazards", path: "/pet-emergency/poisoning.html", desc: "Swallowed toxins and objects." },
    { name: "Beach & sea hazards", path: "/pet-emergency/beach-and-sea-hazards.html", desc: "Tideline objects and pufferfish." },
    { name: "Pet first aid", path: "/pet-emergency/pet-first-aid.html", desc: "The calm basics before you reach a vet." },
    { name: "Road accidents", path: "/pet-emergency/road-accident.html", desc: "Moving an injured pet safely." }
  ]
}));

/* ---------------- ROAD ACCIDENTS ---------------- */
pages.push(hazard({
  slug: "road-accident", crumb: "Road accidents",
  updated: "2026-08-01",
  title: "Pet Road Accident in Pattaya: First Steps | PattayaPets",
  desc: "What to do if your dog or cat is hit by a vehicle in Pattaya: staying " +
    "safe, moving an injured pet, and why a vet check is essential after a collision.",
  h1: "If your pet is hit by a vehicle",
  lede: "Pattaya&rsquo;s roads are busy and fast, and a pet that gets loose near " +
    "traffic is at real risk. The first few minutes matter.",
  sections: [
    { h: "Your own safety first", html:
      "<p>It is an awful moment, but do <strong>not</strong> run into moving " +
      "traffic &mdash; you cannot help your pet if you are hurt too. If you can do " +
      "it safely, signal traffic to slow or stop, and approach only when the road " +
      "is clear.</p>" },
    { h: "Approaching an injured pet", html:
      "<p>An injured animal may bite or scratch. From a safe position, call a " +
      "<a href=\"/pet-emergency/24-hour-vets-pattaya.html\">veterinary clinic</a>, " +
      "describe the animal&rsquo;s location, size, consciousness, breathing and visible " +
      "injuries, and follow the clinic&rsquo;s handling instructions. This unreviewed " +
      "page gives no restraint or muzzling method.</p>" },
    { h: "Moving it off the road", html:
      "<p>Do not enter moving traffic. Call the veterinary clinic and, where needed, " +
      "local emergency services for immediate scene safety. Species, size, " +
      "consciousness, breathing and suspected injury change how an animal can be moved; " +
      "follow live professional direction. This page deliberately gives no lifting, " +
      "stretcher, spinal-positioning, pressure or restraint technique.</p>" },
    { h: "See a vet &mdash; even if it 'seems fine'", html:
      "<p>This is the part owners get wrong. After being hit, a pet can look " +
      "almost normal and still have <strong>serious hidden injuries</strong> " +
      "&mdash; internal bleeding, a bruised lung, a fracture, or shock that only " +
      "develops over the following hours. <strong>Any pet hit by a vehicle should " +
      "be seen by a vet promptly</strong>, even with no visible wound. Phone a " +
      "<a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour clinic</a>, " +
      "tell them you are coming, and go. If you do not have a car, see " +
      "<a href=\"/owning-a-pet-in-pattaya/getting-to-the-vet.html\">getting your pet " +
      "to the vet</a>.</p>" },
    { h: "Lowering the risk", html:
      "<p>Most road accidents trace back to a pet getting loose. Keep dogs leashed " +
      "near roads, check that gates and fences are secure, and make sure your pet " +
      "is <a href=\"/owning-a-pet-in-pattaya/microchipping-your-pet.html\">" +
      "microchipped</a> and wearing ID, so a pet that does get out can be " +
      "identified fast. If a pet bolts after a scare, see " +
      "<a href=\"/owning-a-pet-in-pattaya/lost-pet-pattaya.html\">lost pet in Pattaya</a>.</p>" }
  ],
  faqs: [
    ["My pet was hit but seems okay - does it still need a vet?",
     "<p>Yes. A pet can seem normal after being hit and still have internal bleeding, a bruised lung, a fracture or delayed shock. Any pet hit by a vehicle should be seen by a vet promptly, even without a visible wound.</p>"],
    ["How do I move an injured pet safely?",
     "<p>Call the receiving veterinary clinic before handling the animal and follow its live instructions. This page gives no lifting, stretcher, spinal-positioning or restraint method.</p>"],
    ["How can I reduce the risk of a road accident?",
     "<p>Keep dogs leashed near traffic, secure gates and fences so pets cannot get loose, and keep your pet microchipped and wearing ID. Most road accidents start with a pet escaping.</p>"],
    ["My pet was hit but the driver left — what now?",
     "<p>Your priority is the vet. A police report may help later with insurance, but do not delay treatment to chase the vehicle.</p>"],
    ["Can I use Grab or a taxi after a road accident?",
     "<p>Only if the driver accepts an animal in a crate and the pet can be moved safely. Many owners arrange a private pet transfer — see <a href=\"/owning-a-pet-in-pattaya/getting-to-the-vet.html\">getting to the vet</a>.</p>"],
    ["Should I call the emergency vet before leaving?",
     "<p>Yes. Phone the clinic, explain that your pet was hit by a vehicle, tell them you are coming, and then go promptly.</p>"]
  ],
  related: [
    { name: "If your pet goes missing", path: "/owning-a-pet-in-pattaya/lost-pet-pattaya.html", desc: "If a loose pet is hit and runs off." },
    { name: "Where to walk your dog", path: "/owning-a-pet-in-pattaya/where-to-walk-your-dog.html", desc: "Leash routines near busy roads." },
    { name: "24-hour vets in Pattaya", path: "/pet-emergency/24-hour-vets-pattaya.html", desc: "Clinics open around the clock." },
    { name: "Microchipping your pet", path: "/owning-a-pet-in-pattaya/microchipping-your-pet.html", desc: "ID if your pet gets loose." }
  ]
}));

/* ---------------- BEACH & SEA HAZARDS ---------------- */
pages.push(hazard({
  slug: "beach-and-sea-hazards", crumb: "Beach & sea hazards",
  updated: "2026-08-01",
  title: "Pattaya Beach Hazards for Dogs | PattayaPets",
  desc: "The specific risks of Pattaya's beaches for dogs: jellyfish, hot sand, " +
    "seawater, the tideline, currents, and caring for your dog after a beach trip.",
  h1: "Beach and sea hazards for pets",
  lede: "Pattaya&rsquo;s beaches are one of the joys of having a dog here &mdash; " +
    "with a handful of specific hazards worth knowing before you go.",
  sections: [
    { h: "Jellyfish", html:
      "<p>Thai coastal waters carry jellyfish, and the Gulf sees, seasonally, more " +
      "dangerous species. A sting is painful and can be serious. Keep your dog " +
      "from mouthing or rolling on jellyfish <strong>washed up on the sand</strong> " +
      "&mdash; they can still sting after death. If contact may have occurred, keep " +
      "people and pets away from the jellyfish and call a " +
      "<a href=\"/pet-emergency/24-hour-vets-pattaya.html\">veterinary clinic</a> " +
      "immediately. Follow its case-specific handling and travel instructions. This " +
      "unreviewed page deliberately gives no rinsing, removal or treatment method.</p>" },
    { h: "Hot sand and sun", html:
      "<p>Midday sand burns paw pads exactly as hot pavement does, and the open " +
      "beach offers little shade. Walk in the <strong>cool hours</strong>, test the " +
      "sand with the back of your hand, and bring shade and water. The beach is a " +
      "real <a href=\"/pet-emergency/heatstroke.html\">heatstroke</a> risk in the " +
      "middle of the day.</p>" },
    { h: "Seawater and the tideline", html:
      "<p>A dog that gulps seawater can get an upset stomach, and drinking a lot " +
      "can cause <strong>salt poisoning</strong>, which is serious &mdash; bring " +
      "plenty of fresh water and offer it often so the sea is less tempting. Along " +
      "the tideline, discourage scavenging: sharp shells, broken glass, coral, " +
      "fish hooks and line, and washed-up dead fish are all hazards, and " +
      "<strong>pufferfish are toxic</strong> to a dog that mouths or eats one &mdash; " +
      "see <a href=\"/pet-emergency/poisoning.html\">poisoning</a>.</p>" },
    { h: "Swimming and currents", html:
      "<p>Not every dog is a strong swimmer. Watch a dog that heads out, be aware " +
      "of currents, and never assume a tired dog can bring itself back. On rocky " +
      "stretches, mind sea-urchin spines and sharp rock underfoot.</p>" },
    { h: "After the beach", html:
      "<p>Rinse the salt and sand off your dog with fresh water and dry it well, " +
      "<strong>ears included</strong>. Salt and damp left on the skin and in the " +
      "ears invite the irritation and infection that Pattaya&rsquo;s humidity " +
      "already encourages &mdash; see " +
      "<a href=\"/pet-health-pattaya/skin-and-ear-problems.html\">skin &amp; ear " +
      "problems</a>. For where to go, see " +
      "<a href=\"/dog-friendly-pattaya/beaches.html\">dog-friendly beaches</a>.</p>" }
  ],
  faqs: [
    ["Is the beach safe for my dog?",
     "<p>Yes, with the basics: go in the cool hours, bring fresh water and shade, supervise around the water and the tideline, and rinse and dry your dog afterwards. The main hazards are heat, jellyfish, seawater and scavenged debris.</p>"],
    ["My dog drank seawater - should I worry?",
     "<p>Seawater ingestion can be harmful, and a webpage cannot assess the amount or the animal. Call a veterinary clinic, describe what happened and follow its instructions; do not wait for symptoms if a large or unknown amount may have been swallowed.</p>"],
    ["What should I do if my dog is stung by a jellyfish?",
     "<p>Keep people and pets away from the jellyfish and call a veterinary clinic immediately. Follow its handling and travel instructions; this page gives no rinsing, tentacle-removal or treatment technique.</p>"],
    ["Should I rinse my dog after every beach visit?",
     "<p>Yes — salt irritates skin and ears. A fresh-water rinse and thorough dry, especially of ears and paws, prevents many post-beach vet visits.</p>"],
    ["Are jellyfish worse at certain times of year?",
     "<p>Risk varies by season and beach stretch. Avoid washed-up jellyfish year-round, and keep dogs away from the tideline after storms when debris accumulates.</p>"],
    ["Can a washed-up jellyfish still sting my dog?",
     "<p>Yes. Keep your dog from mouthing or rolling on any jellyfish on the sand because it can still sting after death.</p>"]
  ],
  related: [
    { name: "Dog-friendly beaches", path: "/dog-friendly-pattaya/beaches.html", desc: "Beach etiquette and where dogs can go." },
    { name: "Heatstroke", path: "/pet-emergency/heatstroke.html", desc: "The beach heat risk in detail." },
    { name: "Poisoning", path: "/pet-emergency/poisoning.html", desc: "Pufferfish and tideline toxins." },
    { name: "24-hour vets in Pattaya", path: "/pet-emergency/24-hour-vets-pattaya.html", desc: "Clinics open around the clock." }
  ]
}));

module.exports = pages;
