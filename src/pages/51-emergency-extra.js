"use strict";
/* Extra guides for the "Pet emergencies" cluster: choking, road accidents,
   and beach & sea hazards. Child pages of /pet-emergency/. */

const { article } = require("../guidekit.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const CLUSTER = { name: "Pet emergencies", path: "/pet-emergency/" };
const SUB = [GUIDES, CLUSTER];

const NOTVET =
  "PattayaPets is not a veterinary practice and this is not veterinary advice. " +
  "In a genuine emergency, the right move is almost always the same: get your pet " +
  "to a veterinarian as fast as safely possible. The information here is general " +
  "orientation only.";

function hazard(o) {
  return article({
    path: "/pet-emergency/" + o.slug + ".html",
    title: o.title, desc: o.desc, crumb: o.crumb, breadcrumbs: SUB,
    eyebrow: "Pet emergencies", h1: o.h1, lede: o.lede,
    sections: [{ html:
      '<div class="callout callout-emergency"><p>' + NOTVET + "</p></div>" }]
      .concat(o.sections),
    faqs: o.faqs,
    related: o.related || [
      { name: "24-hour vets in Pattaya", path: "/pet-emergency/24-hour-vets-pattaya.html", desc: "Clinics open around the clock." },
      { name: "Pet first-aid orientation", path: "/pet-emergency/pet-first-aid.html", desc: "The calm, practical basics." },
      { name: "Getting your pet to the vet", path: "/owning-a-pet-in-pattaya/getting-to-the-vet.html", desc: "Transport options without a car." },
      { name: "Pet emergencies", path: "/pet-emergency/", desc: "Back to the emergency hub." }
    ]
  });
}

const pages = [];

/* ---------------- CHOKING ---------------- */
pages.push(hazard({
  slug: "choking", crumb: "Choking",
  title: "If your pet is choking | PattayaPets",
  desc: "Recognising choking and an airway blockage in a dog or cat, what to do, " +
    "what not to do, and how to prevent it.",
  h1: "If your pet is choking",
  lede: "Choking is frightening and fast. Recognising it, and getting to a vet " +
    "without delay, matters more than any single technique.",
  sections: [
    { h: "Recognising choking", html:
      "<p>A choking pet is suddenly, obviously distressed. Watch for " +
      "<strong>pawing at the mouth</strong>, gagging or retching, drooling, " +
      "coughing, a panicked look, and gums that turn pale or blue. The most " +
      "dangerous sign is a pet that is <strong>struggling silently and cannot " +
      "draw breath</strong>, or that collapses. A pet that is coughing strongly " +
      "is at least still moving air &mdash; the cough itself may shift the " +
      "object.</p>" },
    { h: "What to do, and what not to do", html:
      "<p>Stay calm and act fast. If your pet is still breathing and coughing, let " +
      "the cough work and get straight to a <a href=\"/pet-emergency/24-hour-vets-pattaya.html\">" +
      "vet</a>, phoning ahead so they are ready. If you can <strong>clearly and " +
      "easily see</strong> an object at the front of the mouth, you may be able to " +
      "remove it gently &mdash; but do <strong>not</strong> blindly push your " +
      "fingers down the throat: you risk pushing the object deeper, or being " +
      "bitten by a panicking animal.</p>" +
      "<p>If your pet cannot breathe and is collapsing, this is a dire emergency. " +
      "Phone a 24-hour clinic the moment you are moving, and let a vet talk you " +
      "through what to do. Techniques to dislodge an airway blockage exist, but " +
      "they can injure a pet if done wrong &mdash; they are best attempted under a " +
      "vet&rsquo;s direct guidance while you get to help.</p>" },
    { h: "Preventing it", html:
      "<p>Most choking is preventable. Choose toys and balls too large to lodge in " +
      "the throat, supervise chews and take away small end-pieces, and keep these " +
      "common culprits away from pets: <strong>bones, rawhide chunks, corn cobs, " +
      "fruit stones, children&rsquo;s toys and small household objects</strong>. " +
      "Match every chew and toy to the size of your pet. See also " +
      "<a href=\"/pet-emergency/poisoning.html\">poisoning hazards</a> for items " +
      "that can block or injure the airway.</p>" }
  ],
  faqs: [
    ["How do I know if my pet is choking?",
     "<p>Sudden distress, pawing at the mouth, gagging, drooling, coughing and pale or blue gums. The most serious sign is silent struggling with no air moving, or collapse &mdash; treat that as a dire emergency.</p>"],
    ["Should I try to pull the object out?",
     "<p>Only if you can clearly and easily see it at the front of the mouth. Never push fingers blindly down the throat &mdash; you can lodge the object deeper or be bitten. If your pet cannot breathe, phone a 24-hour vet immediately and follow their guidance while you get there.</p>"],
    ["How can I prevent choking?",
     "<p>Use toys and balls too big to lodge in the throat, supervise all chews, and keep bones, rawhide pieces, corn cobs, fruit stones and small objects out of reach. Size every chew and toy to your pet.</p>"]
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
  title: "If your pet is hit by a vehicle | PattayaPets",
  desc: "What to do if your dog or cat is hit by a vehicle in Pattaya: staying " +
    "safe, moving an injured pet, and why a vet check is essential.",
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
      "<p>Even the gentlest pet, in pain and shock, may bite or scratch without " +
      "meaning to. Move slowly, speak in a low calm voice, and keep your face " +
      "away from its mouth. A towel laid gently over a small pet can calm it and " +
      "give you safer handling. Do not attempt to muzzle a pet that is vomiting or " +
      "struggling to breathe.</p>" },
    { h: "Moving it off the road", html:
      "<p>Get your pet out of the traffic and somewhere quiet, moving it as little " +
      "as possible in case of a spinal or internal injury. Support the whole body: " +
      "slide a larger dog onto a board or a blanket used as a stretcher; carry a " +
      "small pet supporting its body fully. Keep it warm, still and calm.</p>" },
    { h: "See a vet &mdash; even if it 'seems fine'", html:
      "<p>This is the part owners get wrong. After being hit, a pet can look " +
      "almost normal and still have <strong>serious hidden injuries</strong> " +
      "&mdash; internal bleeding, a bruised lung, a fracture, or shock that only " +
      "develops over the following hours. <strong>Any pet hit by a vehicle should " +
      "be seen by a vet promptly</strong>, even with no visible wound. Phone a " +
      "<a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour clinic</a>, " +
      "tell them you are coming, and go.</p>" },
    { h: "Lowering the risk", html:
      "<p>Most road accidents trace back to a pet getting loose. Keep dogs leashed " +
      "near roads, check that gates and fences are secure, and make sure your pet " +
      "is <a href=\"/owning-a-pet-in-pattaya/microchipping-your-pet.html\">" +
      "microchipped</a> and wearing ID, so a pet that does get out can be " +
      "identified fast.</p>" }
  ],
  faqs: [
    ["My pet was hit but seems okay - does it still need a vet?",
     "<p>Yes. A pet can seem normal after being hit and still have internal bleeding, a bruised lung, a fracture or delayed shock. Any pet hit by a vehicle should be seen by a vet promptly, even without a visible wound.</p>"],
    ["How do I move an injured pet safely?",
     "<p>Move it as little as possible. Support the whole body - slide a larger dog onto a board or blanket stretcher, carry a small pet supporting it fully - and keep it warm, still and calm. Approach slowly, as a hurt pet may bite in shock.</p>"],
    ["How can I reduce the risk of a road accident?",
     "<p>Keep dogs leashed near traffic, secure gates and fences so pets cannot get loose, and keep your pet microchipped and wearing ID. Most road accidents start with a pet escaping.</p>"]
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
  title: "Beach and sea hazards for pets in Pattaya | PattayaPets",
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
      "&mdash; they can still sting after death. If your pet is stung, stop it " +
      "licking the area, rinse with <strong>seawater</strong> (not fresh water, " +
      "which can set off more stinging cells), do not rub, and watch closely. " +
      "Swelling, breathing trouble, weakness or collapse is an emergency &mdash; " +
      "get to a <a href=\"/pet-emergency/24-hour-vets-pattaya.html\">vet</a>.</p>" },
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
      "<strong>pufferfish are toxic</strong> to a dog that mouths or eats one.</p>" },
    { h: "Swimming and currents", html:
      "<p>Not every dog is a strong swimmer. Watch a dog that heads out, be aware " +
      "of currents, and never assume a tired dog can bring itself back. On rocky " +
      "stretches, mind sea-urchin spines and sharp rock underfoot.</p>" },
    { h: "After the beach", html:
      "<p>Rinse the salt and sand off your dog with fresh water and dry it well, " +
      "<strong>ears included</strong>. Salt and damp left on the skin and in the " +
      "ears invite the irritation and infection that Pattaya&rsquo;s humidity " +
      "already encourages.</p>" }
  ],
  faqs: [
    ["Is the beach safe for my dog?",
     "<p>Yes, with the basics: go in the cool hours, bring fresh water and shade, supervise around the water and the tideline, and rinse and dry your dog afterwards. The main hazards are heat, jellyfish, seawater and scavenged debris.</p>"],
    ["My dog drank seawater - should I worry?",
     "<p>A small amount usually just causes an upset stomach. Drinking a lot can cause salt poisoning, which is serious. Offer fresh water, watch your dog, and see a vet if it becomes unwell, very thirsty, wobbly or vomits repeatedly.</p>"],
    ["What should I do if my dog is stung by a jellyfish?",
     "<p>Stop it licking the area, rinse with seawater rather than fresh water, and do not rub the spot. Watch closely - swelling, breathing difficulty, weakness or collapse is an emergency. If in any doubt, see a vet.</p>"]
  ],
  related: [
    { name: "Dog-friendly beaches", path: "/dog-friendly-pattaya/beaches.html", desc: "Beach etiquette and where dogs can go." },
    { name: "Heatstroke", path: "/pet-emergency/heatstroke.html", desc: "The beach heat risk in detail." },
    { name: "Poisoning", path: "/pet-emergency/poisoning.html", desc: "Pufferfish and tideline toxins." },
    { name: "24-hour vets in Pattaya", path: "/pet-emergency/24-hour-vets-pattaya.html", desc: "Clinics open around the clock." }
  ]
}));

module.exports = pages;
