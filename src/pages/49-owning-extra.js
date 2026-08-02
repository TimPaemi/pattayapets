"use strict";
/* Owning a pet in Pattaya - extra guides: seasons and festivals, everyday
   situations, and the harder times. These are child pages of the
   /owning-a-pet-in-pattaya/ cluster (hub defined in 44-owning.js). */

const { article } = require("../guidekit.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const CLUSTER = { name: "Owning a pet in Pattaya", path: "/owning-a-pet-in-pattaya/" };
const SUB = [GUIDES, CLUSTER];
const REVIEW_BOUNDARY =
  "Source check: PattayaPets reviewed this page on 1 August 2026. No licensed " +
  "veterinarian or Thai legal professional has reviewed this publication. " +
  "Use it as general orientation; a veterinarian must assess health or behaviour " +
  "decisions, and time-sensitive local details must be confirmed at source.";

const SOURCES = {
  pattayaWanLai: "https://www.pattaya.go.th/wp-content/uploads/2022/01/%E0%B9%81%E0%B8%9C%E0%B8%99%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B8%9E%E0%B8%B1%E0%B8%97%E0%B8%A2%E0%B8%B2-66-70.pdf",
  pattayaWeather: "https://www.tmd.go.th/weather/province/pattaya",
  floodwater: "https://www.cdc.gov/floods/safety/floodwater-after-a-disaster-or-emergency-safety.html",
  leptospirosis: "https://www.cdc.gov/leptospirosis/pets/index.html",
  heartworm: "https://www.heartwormsociety.org/guidelines",
  noise: "https://www.aaha.org/resources/safe-and-sound-noise-aversion-in-pets/",
  lost: "https://www.aspca.org/pet-care/general-pet-care/finding-lost-pet",
  microchip: "https://www.aaha.org/animal-identification/",
  microchipLookup: "https://www.aaha.org/for-veterinary-professionals/microchip-registry-lookup-tool-aaha-find-your-pets-microchip-registry/",
  sitter: "https://www.aaha.org/resources/preparing-for-the-unexpected-essential-pet-sitter-instructions/",
  transport: "https://catvets.com/resource/2025-transportation-of-cats-in-motor-vehicles-position-statement/",
  senior: "https://www.aaha.org/resources/2023-aaha-senior-care-guidelines-for-dogs-and-cats/",
  endOfLife: "https://www.aaha.org/resources/end-of-life-care-for-pets/"
};

const pages = [];

function own(o) {
  return article({
    path: "/owning-a-pet-in-pattaya/" + o.slug + ".html",
    title: o.title, desc: o.desc, crumb: o.crumb, breadcrumbs: SUB,
    eyebrow: "Owning a pet in Pattaya",
    h1: o.h1, lede: o.lede,
    verify: (o.verify ? o.verify + " " : "") + REVIEW_BOUNDARY,
    updated: o.updated,
    sections: o.sections, faqs: o.faqs, related: o.related
  });
}

function source(name, href) {
  return '<a href="' + href + '">' + name + "</a>";
}

/* ---------------- SONGKRAN ---------------- */
pages.push(own({
  slug: "songkran-and-your-pet", crumb: "Songkran & your pet", updated: "2026-08-01",
  title: "Songkran Pet Safety in Pattaya | PattayaPets",
  desc: "Plan safer care for a dog or cat during Songkran in Pattaya: current event notices, secure indoor space, escape prevention, outings and transport.",
  h1: "Songkran and your pet: planning for noise, crowds and water",
  lede: "Songkran changes Pattaya&rsquo;s traffic, street access and noise environment. " +
    "Plan secure indoor care and minimise avoidable exposure and escape opportunities.",
  verify: "Pattaya City planning documents list Wan Lai Pattaya as an annual " +
    "19 April tradition. Event routes, hours and restrictions can change, so check " +
    "the current Pattaya City notice rather than relying on a past calendar.",
  sections: [
    { h: "What Songkran means for a pet", html:
      "<p>During advertised festival periods, water fights, hoses, amplified sound, " +
      "crowds and changed traffic may affect Pattaya streets. Individual " +
      "animals respond differently, but unfamiliar noise and open doors can create " +
      "an escape opportunity. Plan for the animal you have rather than assuming it " +
      "will tolerate the event.</p>" },
    { h: "Keep pets indoors and secure", html:
      "<p>During advertised water-fight periods, keep pets <strong>inside</strong>. Check that " +
      "gates, doors, windows and balconies are properly secured &mdash; a frightened " +
      "pet may use an opening. Do not take dogs through active water-fight " +
      "zones, and keep cats securely indoors.</p>" +
      "<p>Make sure ID and " +
      "<a href=\"/owning-a-pet-in-pattaya/microchipping-your-pet.html\">microchip " +
      "details</a> are current before the festival, just in case. If your pet bolts, " +
      "see <a href=\"/owning-a-pet-in-pattaya/lost-pet-pattaya.html\">lost pet in Pattaya</a>. " +
      "Noise-anxious pets may also need the strategies in " +
      "<a href=\"/owning-a-pet-in-pattaya/fireworks-and-noise-anxiety.html\">fireworks &amp; noise anxiety</a>.</p>" },
    { h: "Give them a calm space", html:
      "<p>Set up a quiet interior room away from the street noise, with familiar " +
      "bedding, water, and appropriate cooling. Background sound from a fan, " +
      "air-conditioning, music or TV may mask some outside noise. If possible, have " +
      "a responsible adult monitor the animal; ask a veterinarian in advance for an " +
      "individual plan if it panics or cannot settle.</p>" },
    { h: "Necessary outings", html:
      "<p>If a toilet break is necessary, use current event, weather, surface and " +
      "traffic conditions to choose the quietest available time and route away from " +
      "active celebrations. Keep the dog securely leashed and wearing ID, keep the " +
      "outing brief, and turn back if conditions or the dog&rsquo;s behaviour make it unsafe.</p>" },
    { h: "Water guns are not a game for pets", html:
      "<p>However good-natured the crowds are, do not let anyone spray your pet. " +
      "Direct spray can reach eyes or ears, and festival powders or water may have " +
      "unknown ingredients. Avoid deliberate exposure. If the animal develops eye, " +
      "skin, breathing or behaviour changes, contact a veterinarian rather than " +
      "trying a home treatment from this page.</p>" },
    { h: "Traffic and travel", html:
      "<p>Routes, access and journey times can change during festival activity. " +
      "Confirm the current route before a necessary trip and use a suitable secure " +
      "carrier or restraint. Keep the clinic&rsquo;s number and an alternative route " +
      "available.</p>" },
    { h: "Sources and limits", html:
      "<p><strong>Local calendar reference:</strong> " +
      source("Pattaya City development plan (Thai-language PDF)", SOURCES.pattayaWanLai) +
      ". <strong>Behaviour reference:</strong> " +
      source("AAHA noise-aversion guidance", SOURCES.noise) +
      ". Neither source publishes a Pattaya pet-loss rate, so this guide does not " +
      "claim that Songkran is the city&rsquo;s highest-risk period for lost pets.</p>" }
  ],
  faqs: [
    ["When is Songkran and how long does it last in Pattaya?",
     "<p>Pattaya City planning material lists Wan Lai Pattaya as an annual 19 April tradition. Check the current city notice for that year's event routes, hours and restrictions.</p>"],
    ["My dog is terrified of Songkran - what helps?",
     "<p>Prepare a quiet indoor room with familiar bedding, water and appropriate cooling. Background sound may mask some outside noise. Monitor the dog if possible, secure exits, keep identification current and ask a veterinarian in advance for an individual plan if the dog panics or cannot settle.</p>"],
    ["Is it safe to walk my dog during Songkran?",
     "<p>Avoid active event zones. If a toilet break is necessary, choose the quietest available route, keep the dog securely leashed and turn back if conditions or the animal's behaviour make the outing unsafe.</p>"],
    ["Should I sedate my pet for Songkran noise?",
     "<p>Do not improvise medication or use another animal's medicine. Ask a veterinarian in advance; the appropriate plan depends on the individual animal, its history and the medicine involved.</p>"],
    ["Can I board my pet during Songkran?",
     "<p>Ask the facility directly about availability, staffing, noise management, admission requirements and its emergency plan. We do not have occupancy data for Pattaya boarding facilities.</p>"],
    ["What should I check at home before Songkran starts?",
     "<p>Check that gates, doors, windows and balconies are secure, and make sure your pet's ID and microchip details are current. Set up a quiet interior room with familiar bedding, water and cooling before the streets become busy.</p>"]
  ],
  related: [
    { name: "Fireworks & noise-anxious pets", path: "/owning-a-pet-in-pattaya/fireworks-and-noise-anxiety.html", desc: "The wider noise-anxiety picture." },
    { name: "If your pet goes missing", path: "/owning-a-pet-in-pattaya/lost-pet-pattaya.html", desc: "What to do if a pet bolts." },
    { name: "Hot-climate pet care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", desc: "Cooling and activity planning for current conditions." },
    { name: "Microchipping your pet", path: "/owning-a-pet-in-pattaya/microchipping-your-pet.html", desc: "ID before the gates open." }
  ]
}));

/* ---------------- RAINY SEASON ---------------- */
pages.push(own({
  slug: "rainy-season-pet-care", crumb: "Rainy-season care", updated: "2026-08-01",
  title: "Rainy-Season Pet Care in Pattaya | PattayaPets",
  desc: "Caring for a dog or cat through Pattaya's rainy season - walks, skin " +
    "and ear health, floodwater, leptospirosis, mosquitoes and storm anxiety.",
  h1: "Rainy-season pet care in Pattaya",
  lede: "Heavy rain can change walking routes and expose pets to floodwater, " +
    "standing water and prolonged damp. Use current conditions, not a fixed " +
    "seasonal calendar, to plan each outing.",
  verify: "The Thai Meteorological Department publishes current observations and " +
    "forecasts for Pattaya. This page does not predict a fixed start, end or " +
    "intensity for a future rainy season.",
  sections: [
    { h: "Walking around the weather", html:
      "<p>Check the current Pattaya forecast and street conditions before leaving. " +
      "Choose a route that can be shortened and avoid any road where water depth, " +
      "drainage or traffic is uncertain. Dry the coat, skin folds and paws after a " +
      "wet outing. " +
      "Thunder can trigger distress in some dogs; see " +
      "<a href=\"/owning-a-pet-in-pattaya/fireworks-and-noise-anxiety.html\">" +
      "fireworks and noise anxiety</a>.</p>" },
    { h: "Monitor skin, paws and ears", html:
      "<p>Persistent moisture can contribute to skin or ear problems, but redness, " +
      "odour, discharge and scratching have multiple possible causes. See our guide to " +
      "<a href=\"/pet-health-pattaya/skin-and-ear-problems.html\">skin and ear problems</a> " +
      "for what to observe. Dry the animal gently and arrange a veterinary " +
      "examination if a change persists, worsens or appears painful. Do not put a " +
      "cleaner or medicine into an ear without veterinary direction.</p>" },
    { h: "Floodwater and standing water", html:
      "<p>If a street is flooded, keep pets <strong>out of the water</strong>. The " +
      "CDC notes that floodwater may contain waste, chemicals, debris and infectious " +
      "hazards. Leptospira bacteria can contaminate water or soil through infected " +
      "animal urine, but exposure does not establish infection. If contact occurs, " +
      "prevent licking if you can do so safely and call a veterinary clinic for " +
      "case-specific cleaning and exposure advice. Ask the veterinarian whether " +
      "leptospirosis vaccination is appropriate for your dog.</p>" },
    { h: "Keep the prescribed parasite plan current", html:
      "<p>Heartworm is transmitted by mosquitoes, but this publication found no " +
      "representative Pattaya dataset supporting a seasonal mosquito, flea, tick or " +
      "heartworm peak. Follow the individual prevention and testing plan from your " +
      "veterinarian rather than changing or combining products because it rained. " +
      "See <a href=\"/dogs/dog-vaccinations-thailand.html\">dog vaccinations and " +
      "parasite prevention</a>.</p>" },
    { h: "Indoor days", html:
      "<p>When the rain settles in, a bored pet needs an outlet. Short training " +
      "sessions, suitable food puzzles and supervised indoor play can provide an " +
      "outlet. Choose activities that fit the animal&rsquo;s health and normal diet.</p>" },
    { h: "Sources and limits", html:
      "<p><strong>Weather:</strong> " + source("Thai Meteorological Department: Pattaya", SOURCES.pattayaWeather) +
      ". <strong>Floodwater:</strong> " + source("CDC floodwater safety", SOURCES.floodwater) +
      ". <strong>Animal leptospirosis:</strong> " + source("CDC guidance for pets", SOURCES.leptospirosis) +
      ". <strong>Heartworm:</strong> " + source("American Heartworm Society guidelines", SOURCES.heartworm) +
      ". These sources describe hazards and prevention principles; they do not " +
      "establish local disease prevalence or diagnose an exposed animal.</p>" }
  ],
  faqs: [
    ["When is the rainy season in Pattaya?",
     "<p>Do not use a fixed calendar as a daily safety signal. Check the Thai Meteorological Department's current Pattaya forecast and the actual route before each outing.</p>"],
    ["Is floodwater dangerous for my dog?",
     "<p>Keep dogs out of floodwater. It may contain waste, chemicals, debris and infectious hazards. Water or soil contaminated by infected animal urine can transmit leptospirosis, but contact alone does not diagnose infection. If exposure occurs, prevent licking if safe and call a vet for cleaning and exposure advice.</p>"],
    ["My dog hates thunderstorms - what can I do?",
     "<p>Offer a quiet interior space with familiar bedding and background sound, and do not punish fear behaviour. Ask a veterinarian to assess severe or recurring reactions and, where appropriate, recommend a qualified behaviour professional.</p>"],
    ["Are toads more dangerous in rainy season?",
     "<p>This page has no Pattaya incidence data and cannot identify a species or exposure. Prevent further contact only if you can do so without unsafe handling, then contact a veterinarian or emergency clinic for case-specific instructions; see <a href=\"/pet-emergency/venomous-creatures.html\">venomous-creature guidance</a>.</p>"],
    ["Should I skip walks when it is pouring?",
     "<p>There is no blanket yes-or-no rule. Use current visibility, lightning, flooding, traffic, surface and the animal's condition; take a brief leashed toilet break only when the route is safe. After a wet outing, dry the coat and paws gently, but do not put anything into an ear canal without veterinary direction.</p>"],
    ["Should parasite prevention continue during rainy season?",
     "<p>Follow the prevention and testing plan prescribed for the individual animal. Do not alter, combine or restart parasite medicines from a seasonal rule on this page.</p>"],
    ["How can I keep my pet occupied on rainy days?",
     "<p>Choose supervised indoor play, short reward-based training or a species-appropriate food puzzle that fits the animal's health, behaviour and normal diet.</p>"]
  ],
  related: [
    { name: "Snake bites", path: "/pet-emergency/snake-bites.html", desc: "Urgent response and evidence limits." },
    { name: "Hot-climate pet care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", desc: "Heat planning from current conditions." },
    { name: "Skin & ear problems", path: "/pet-health-pattaya/skin-and-ear-problems.html", desc: "What changes require veterinary assessment." },
    { name: "Tropical dog health issues", path: "/dogs/common-dog-health-issues-tropics.html", desc: "Skin, ears and parasites in the climate." },
    { name: "Ticks & fleas", path: "/pet-emergency/ticks-and-fleas.html", desc: "Individual parasite prevention and testing." }
  ]
}));

/* ---------------- FIREWORKS & NOISE ---------------- */
pages.push(own({
  slug: "fireworks-and-noise-anxiety", crumb: "Fireworks & noise", updated: "2026-08-01",
  title: "Fireworks & Noise Anxiety in Pets | PattayaPets",
  desc: "Helping a noise-anxious dog or cat through fireworks, festivals and " +
    "thunderstorms in Pattaya - preparing a quiet space and reducing escape opportunities.",
  h1: "Fireworks, festivals and noise-anxious pets",
  lede: "Fireworks, storms and construction can trigger fear or anxiety in some " +
    "dogs and cats. Prepare the environment before a known event and involve a " +
    "veterinarian when reactions are severe or recurring.",
  sections: [
    { h: "Why it matters here", html:
      "<p>Potential triggers include fireworks, amplified events, construction and " +
      "thunderstorms. Timing is not reliably predictable from this page, so use " +
      "current event and weather notices and prepare a repeatable household plan " +
      "for an animal with a known response.</p>" },
    { h: "What noise anxiety looks like", html:
      "<p>Possible signs described by AAHA include trembling, hiding, pacing, panting or " +
      "drooling, whining, clinginess, destructive behaviour, toileting indoors, " +
      "and attempts to escape. Cats may hide. These behaviours can reflect distress, " +
      "but a web list cannot diagnose its cause or severity.</p>" },
    { h: "Prepare a quiet retreat", html:
      "<p>Before an event you know is coming, set up a den: a quiet interior " +
      "room, curtains closed, familiar bedding, and background sound &mdash; a " +
      "fan, air-conditioning, music or TV &mdash; to soften the bangs. Let your " +
      "pet choose to hide there; do not force it out. If safe and practical, stay " +
      "nearby and calm. You " +
      "can comfort a frightened pet &mdash; that does not &lsquo;reward&rsquo; " +
      "fear &mdash; just keep your own manner relaxed and normal.</p>" },
    { h: "Reduce escape opportunities", html:
      "<p>A frightened animal may try to escape. PattayaPets did not find a current " +
      "local dataset ranking firework nights against other causes of missing pets. Secure " +
      "doors, gates, windows and balconies, keep dogs leashed if they must go " +
      "out, and make sure ID tags and " +
      "<a href=\"/owning-a-pet-in-pattaya/microchipping-your-pet.html\">microchip " +
      "details</a> are current. If a pet gets out, start the search plan promptly &mdash; see " +
      "<a href=\"/owning-a-pet-in-pattaya/lost-pet-pattaya.html\">if your pet " +
      "goes missing</a>.</p>" },
    { h: "Longer-term help", html:
      "<p>Ask your <a href=\"/vets/\">veterinarian</a> to assess possible medical " +
      "contributors and build an individual plan. Behaviour modification needs " +
      "appropriate timing and technique; medication, supplements or pheromone " +
      "products should not be selected from a generic web list. If referral is " +
      "appropriate, ask what credentials to look for in a behaviour professional.</p>" },
    { h: "Source and review boundary", html:
      "<p><strong>Clinical reference:</strong> " + source("AAHA noise-aversion guidance", SOURCES.noise) +
      ". AAHA describes environmental preparation and veterinarian-led assessment. " +
      "It does not validate a Pattaya event schedule or a local pet-loss statistic. " +
      "No licensed veterinarian has reviewed PattayaPets&rsquo; interpretation.</p>" }
  ],
  faqs: [
    ["How do I keep my dog calm during fireworks?",
     "<p>Prepare a quiet room in advance with closed curtains, familiar bedding and background sound, let the dog choose to hide there, and stay calm and nearby when possible. Secure exits because some frightened animals try to escape. Ask a veterinarian about severe or recurring reactions.</p>"],
    ["My pet bolts when it's scared - what should I do?",
     "<p>Secure doors, gates, windows and balconies before known events, keep dogs leashed outside, and keep ID and microchip details current. If a pet gets out, start the linked missing-pet search plan promptly.</p>"],
    ["Can a vet help with severe noise distress?",
     "<p>Yes. A veterinarian can assess the animal, consider medical contributors and discuss an individual management plan or qualified behaviour referral. Do not copy another pet's medication or a generic desensitisation schedule.</p>"],
    ["Can cats show distress during fireworks?",
     "<p>They can. A cat may hide or try to escape during a noise event. Keep cats securely indoors, provide voluntary hiding places and do not force an animal out of its chosen space.</p>"],
    ["What events besides Songkran are noisy in Pattaya?",
     "<p>Potential triggers include fireworks, amplified events, thunderstorms and construction. Check current city, venue and weather notices because this page does not maintain a complete event calendar.</p>"],
    ["Should I force my pet out of its hiding place during fireworks?",
     "<p>No. Let the animal choose its quiet space and do not force it out. If safe and practical, stay nearby and calm; familiar bedding and background sound may support the prepared environment.</p>"],
    ["Should I leave my pet alone during a noisy event?",
     "<p>If it is safe and practical, have a responsible adult nearby. Prepare a quiet room and secure exits before the event; ask a veterinarian in advance how to manage an animal that panics, injures itself or cannot settle.</p>"]
  ],
  related: [
    { name: "Songkran and your pet", path: "/owning-a-pet-in-pattaya/songkran-and-your-pet.html", desc: "Plan around current local event notices." },
    { name: "If your pet goes missing", path: "/owning-a-pet-in-pattaya/lost-pet-pattaya.html", desc: "If a frightened pet bolts." },
    { name: "Pet emergencies", path: "/pet-emergency/", desc: "Urgent signs and when to call a clinic." },
    { name: "Dog registration & the law", path: "/owning-a-pet-in-pattaya/dog-registration-thailand.html", desc: "Read the cited national law and named local-policy gap." }
  ]
}));

/* ---------------- LOST PET ---------------- */
pages.push(own({
  slug: "lost-pet-pattaya", crumb: "If your pet goes missing", updated: "2026-08-01",
  title: "Lost Pet in Pattaya: Search Plan | PattayaPets",
  desc: "A step-by-step plan for what to do if your dog or cat goes missing in Pattaya: where to search first, who to tell, and why a registered microchip matters.",
  h1: "If your pet goes missing in Pattaya",
  lede: "A written search plan helps you cover nearby places, identification " +
    "records and responsible local notices without losing track of what you checked.",
  sections: [
    { h: "The first hours", html:
      "<p>Start close to home and stay calm. Search the immediate area, calling " +
      "your pet&rsquo;s name in a normal, friendly voice, and bring treats or a " +
      "familiar-sounding toy. Check concealed spaces and ask permission before " +
      "entering private property. Record the streets, buildings and times already " +
      "checked so repeated searches remain systematic and safe.</p>" },
    { h: "Spread the word fast", html:
      "<p>Tell everyone nearby &mdash; neighbours, condo security guards, soi " +
      "vendors, shops and transport stands that are willing to help. If you post " +
      "online, use a <strong>clear recent photo</strong>, the last confirmed place " +
      "and time, distinctive features and a safe contact method. Do not publish " +
      "documents, a full home address or personal data that is not needed.</p>" },
    { h: "Check where animals are taken", html:
      "<p>Contact nearby <a href=\"/vets/\">vet clinics</a> and relevant " +
      "<a href=\"/adopt-a-pet-pattaya/\">shelters or rescues</a>; ask whether " +
      "they accept lost-pet notices and how they want updates. PattayaPets does not " +
      "have a verified single intake authority or complete list of active online " +
      "groups, so confirm each channel before sharing personal information.</p>" },
    { h: "Use the microchip", html:
      "<p>A registered <a href=\"/owning-a-pet-in-pattaya/" +
      "microchipping-your-pet.html\">microchip</a> may help identify a found pet. " +
      "Contact the responsible registry, ask whether the record can be flagged as " +
      "missing and confirm your contact details. A scan reveals an identifier, not " +
      "the animal&rsquo;s location; the identification benefit depends in part on a " +
      "readable chip, a traceable registry and current contact information.</p>" },
    { h: "Posters and persistence", html:
      "<p>Use a simple poster with a large clear photo, the word LOST, the last " +
      "confirmed area and time, distinctive features and a safe contact method. " +
      "Place it only where posting is permitted, keep notices current and remove " +
      "them after the case closes. When the pet returns, call a vet and describe " +
      "its time outside, injuries or other changes so the clinic can decide whether " +
      "and how urgently an examination is needed. Then identify and reduce the same " +
      "escape opportunity.</p>" },
    { h: "Source and local evidence gap", html:
      "<p><strong>Search reference:</strong> " + source("ASPCA lost-pet guidance", SOURCES.lost) +
      ". <strong>Identification reference:</strong> " + source("AAHA animal identification guidance", SOURCES.microchip) +
      ". These support a nearby search, local notices and current identification " +
      "records; they do not validate a Pattaya channel or outcome. We found no " +
      "authoritative Pattaya-wide lost-animal intake directory or recovery-rate " +
      "dataset, so this page does not publish one.</p>" }
  ],
  faqs: [
    ["What should I do first if my pet goes missing?",
     "<p>Search the home and immediate area calmly, then tell neighbours and building staff. Use a clear recent photo, the last confirmed place and time, distinctive features and a safe contact method in relevant channels whose current activity you have checked.</p>"],
    ["Where do lost pets in Pattaya end up?",
     "<p>There is no verified single Pattaya intake route in our evidence. Contact nearby vet clinics and relevant shelters or rescues and ask whether they accept notices; also check with neighbours and building staff.</p>"],
    ["Does a microchip help find a lost pet?",
     "<p>A chip can help identify a found pet when it is scanned and the registration can be traced, but it is not GPS and is not fail-safe. Contact the responsible registry and confirm the record is current.</p>"],
    ["Should I offer a reward for a lost pet?",
     "<p>That is an individual choice, not a proven requirement. If you mention one, protect personal information, do not transfer money to an unverified caller and ask for evidence that cannot be guessed from the public notice.</p>"],
    ["How long should I keep searching?",
     "<p>No single duration fits every case. Keep a dated search log, revisit relevant channels, update notices when facts change and remove them when the case closes.</p>"],
    ["What should I put on a lost-pet poster?",
     "<p>Use a large clear recent photo, the word LOST, the last confirmed area and time, distinctive features and a safe contact method. Place it only where posting is permitted, keep it current and remove it when the case closes.</p>"]
  ],
  related: [
    { name: "Microchipping your pet", path: "/owning-a-pet-in-pattaya/microchipping-your-pet.html", desc: "Identification and current registration records." },
    { name: "Fireworks & noise-anxious pets", path: "/owning-a-pet-in-pattaya/fireworks-and-noise-anxiety.html", desc: "Reduce escape opportunities during known noise events." },
    { name: "How to help street animals", path: "/adopt-a-pet-pattaya/how-to-help.html", desc: "Posting and community help when a pet is lost." },
    { name: "24-hour vets in Pattaya", path: "/pet-emergency/24-hour-vets-pattaya.html", desc: "Call-confirmed urgent-care leads if the pet is injured." }
  ]
}));

/* ---------------- MICROCHIPPING ---------------- */
pages.push(own({
  slug: "microchipping-your-pet", crumb: "Microchipping", updated: "2026-08-01",
  title: "Pet Microchipping in Pattaya: Records & Travel | PattayaPets",
  desc: "What a pet microchip is, why it matters in Pattaya, how chipping works, " +
    "and why registration records must stay current after a move or ownership transfer.",
  h1: "Microchipping your pet in Pattaya",
  lede: "A microchip stores an identification number. It can support reunification " +
    "and travel paperwork only when it is readable and linked to an accurate record.",
  sections: [
    { h: "What a microchip is", html:
      "<p>A microchip is a tiny identifier, about the size of a grain of rice, " +
      "implanted under the skin. Use a veterinary clinic and ask who performs the " +
      "procedure, how the chip is checked and how its record is created. " +
      "It carries a unique number. It is <strong>not</strong> a GPS " +
      "tracker &mdash; it does not show where your pet is &mdash; but when a pet " +
      "is found, a scanner may reveal the number so the relevant registry can be " +
      "contacted. The chip itself does not store an owner&rsquo;s address.</p>" },
    { h: "Why it matters here", html:
      "<p>A collar tag can be read without a scanner, while a microchip provides a " +
      "second identification route. Neither method is fail-safe, so AAHA recommends " +
      "using current collar identification as well as a registered chip. Separate " +
      "requirements may apply when " +
      "<a href=\"/bring-pet-to-thailand/microchip-requirements.html\">bringing a pet to " +
      "Thailand</a> or completing an " +
      "<a href=\"/take-pet-out-of-thailand/export-process.html\">export process</a>. " +
      "Those regulated guides, not this general page, define the current sequence " +
      "and destination scope.</p>" },
    { h: "Getting your pet chipped", html:
      "<p>Ask a <a href=\"/vets/\">veterinary clinic</a> whether it currently " +
      "offers implantation, which chip standard and scanner ecosystem it uses, who " +
      "performs the procedure, what the quoted fee includes, which registry receives " +
      "the record and how you can verify it. Make sure the chip is <strong>registered</strong>, " +
      "not just implanted. PattayaPets has not price-checked every clinic and does " +
      "not describe the procedure as risk-free.</p>" },
    { h: "Keep your details current", html:
      "<p>Registration and current contact details make the identifier useful. " +
      "Whenever you change phone number, " +
      "move home, or take on a pet from someone else, <strong>update the " +
      "registration</strong>. Keep a note of the chip number and the database " +
      "yourself. Ask the registry how ownership changes, privacy and international " +
      "contacts are handled; there is no universal worldwide owner database.</p>" },
    { h: "Lost pets, import and export paperwork", html:
      "<p>If your pet goes missing, tell local vets, post in responsible community " +
      "groups, and follow our " +
      "<a href=\"/owning-a-pet-in-pattaya/lost-pet-pattaya.html\">lost pet in Pattaya</a> " +
      "plan. Have the responsible issuer record the chip number on vaccination, " +
      "health-certificate or carrier paperwork wherever the responsible authority or " +
      "carrier requires it. Compare every character before submission.</p>" +
      "<p><strong>Do not use a universal chip-before-rabies rule from this page.</strong> " +
      "The accepted sequence depends on the movement direction, authority and " +
      "destination. Follow the current primary-source pathway in the linked import " +
      "or export guide and have the responsible authority resolve ambiguity.</p>" },
    { h: "Multiple pets and rescues", html:
      "<p>If more than one animal is microchipped, each needs its own chip number and " +
      "registration record. Adopted pets from " +
      "rescues may already be chipped &mdash; ask the rescue and responsible registry " +
      "to complete the applicable keeper or ownership update during handover. See " +
      "<a href=\"/adopt-a-pet-pattaya/\">adopt a pet in Pattaya</a> for shelter " +
      "organisations.</p>" },
    { h: "Sources and limits", html:
      "<p><strong>Identification reference:</strong> " + source("AAHA animal identification position", SOURCES.microchip) +
      ". <strong>Registry-discovery example:</strong> " + source("AAHA registry lookup", SOURCES.microchipLookup) +
      ". AAHA notes that scanners and registries are not fail-safe and that its " +
      "lookup primarily serves chips distributed in the United States. It is not a " +
      "Thai registry or a substitute for DLD and destination-country rules.</p>" }
  ],
  faqs: [
    ["Is microchipping a pet painful or risky?",
     "<p>Implantation is a veterinary procedure. Ask the clinic who performs it, which chip is used, how registration is completed and what risks apply to your animal. We have not verified that every Pattaya clinic offers it or that pricing is uniform.</p>"],
    ["Does a microchip track my pet's location?",
     "<p>No. A microchip is an identifier, not a GPS tracker. A scanner can reveal its number; the finder then needs a registry that can connect that number to current contact information.</p>"],
    ["My pet is already chipped - is there anything I need to do?",
     "<p>Ask a clinic to scan and record the number, identify the responsible registry, and confirm the owner and alternate contact details. Update the record after a move, phone change or ownership transfer.</p>"],
    ["What information does a pet microchip store?",
     "<p>The chip itself carries an identification number, not GPS location or an owner's address. A separate registry record may connect that number to contact information, so ask which registry holds the record and keep it current.</p>"],
    ["Do I need a microchip to export my pet from Thailand?",
     "<p>Identification requirements depend on the DLD process, destination and travel date. Use the current <a href=\"/take-pet-out-of-thailand/export-process.html\">export process</a> and destination guide, then confirm the chip standard and sequence with the responsible authority.</p>"],
    ["Does each pet need its own microchip?",
     "<p>If an animal is microchipped, its identifier and registration record must be individual to that animal. Do not reuse paperwork or assume one household record covers several pets.</p>"],
    ["What should I do with a rescue pet's existing microchip?",
     "<p>Ask the rescue for the chip number and registry, confirm the animal by scanning, and follow that registry's ownership-transfer process. Keep proof of the completed change with the pet's records.</p>"]
  ],
  related: [
    { name: "If your pet goes missing", path: "/owning-a-pet-in-pattaya/lost-pet-pattaya.html", desc: "Where the microchip earns its place." },
    { name: "Microchip for import & export", path: "/bring-pet-to-thailand/microchip-requirements.html", desc: "Check the current standard and movement-specific sequence." },
    { name: "Dog registration & the law", path: "/owning-a-pet-in-pattaya/dog-registration-thailand.html", desc: "Registration rules in Thailand." },
    { name: "The export process", path: "/take-pet-out-of-thailand/export-process.html", desc: "Microchipping in the export process." }
  ]
}));

/* ---------------- PET SITTERS & DOG WALKERS ---------------- */
pages.push(own({
  slug: "pet-sitters-and-dog-walkers", crumb: "Sitters & dog walkers", updated: "2026-08-01",
  title: "Pet Sitters & Dog Walkers in Pattaya | PattayaPets",
  desc: "How to assess a pet sitter or dog walker in Pattaya, document the handover, " +
    "protect home access and prepare an individual emergency plan.",
  h1: "Finding a pet sitter or dog walker in Pattaya",
  lede: "Treat access to your home and responsibility for an animal as a documented " +
    "handover: verify the person, agree the scope and test the plan before travel.",
  sections: [
    { h: "The options", html:
      "<ul><li><strong>An in-home pet sitter</strong> &mdash; someone who visits " +
      "or stays to carry out agreed feeding, exercise and companionship tasks. " +
      "Medication should be included only when the person is competent, authorised " +
      "and following the prescribing clinic&rsquo;s written instructions.</li>" +
      "<li><strong>A dog walker</strong> &mdash; for agreed outings when you cannot " +
      "provide them yourself.</li>" +
      "<li><strong>Boarding</strong> &mdash; a kennel or cattery; see the " +
      "<a href=\"/boarding/\">boarding directory</a>.</li>" +
      "<li><strong>A known neighbour or friend</strong> &mdash; still needs clear " +
      "instructions, consent and an emergency plan.</li></ul>" +
      "<p>PattayaPets has not found a complete official Pattaya sitter register, " +
      "licensing directory or representative rate survey.</p>" },
    { h: "Where people find sitters and walkers", html:
      "<p>A referral can produce a candidate, but it is not verification. Confirm " +
      "identity, recent references and relevant experience directly. Ask a boarding " +
      "facility or <a href=\"/vets/\">clinic</a> only whether it maintains a " +
      "current referral list; do not imply that a referrer guarantees the work.</p>" },
    { h: "What to check before you commit", html:
      "<ul><li><strong>Experience</strong> with your kind of pet, and with any " +
      "special needs it has. For medication, confirm competence, written prescribing " +
      "instructions and a plan for refusal, a missed administration or a concerning change.</li>" +
      "<li><strong>References</strong> from other owners.</li>" +
      "<li>A <strong>meeting first</strong> &mdash; watch how they are with your " +
      "pet, and how your pet responds.</li>" +
      "<li>Exactly <strong>what is included</strong> &mdash; visits per day, " +
      "walk length, feeding, litter, medication.</li>" +
      "<li>How they would <strong>handle an emergency</strong>, who may authorise " +
      "care and spending, and how they would transport the animal.</li>" +
      "<li>How keys, access codes, cameras, photos and personal data will be handled " +
      "and returned or deleted.</li></ul>" +
      "<p>Leave the current, call-confirmed number of a " +
      "<a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour vet</a> too.</p>" },
    { h: "Brief them properly", html:
      "<p>Leave written instructions covering the feeding routine, the outing plan " +
      "and cancellation thresholds, prescribed medication, your <a href=\"/vets/\">vet&rsquo;s " +
      "details</a> and your own contact, where everything is kept, and your " +
      "pet&rsquo;s routines and observed warning signs. Include written veterinary " +
      "authorisation, spending limits and a backup contact where appropriate. Do a " +
      "trial visit or walk while you are present.</p>" },
    { h: "Walkers and the heat", html:
      "<p>Ask how the walker uses current temperature, humidity, shade, surface and " +
      "the individual dog&rsquo;s condition to decide whether an outing should be " +
      "shortened, relocated or cancelled. A clock time alone is not a safety test. See " +
      "<a href=\"/owning-a-pet-in-pattaya/hot-climate-pet-care.html\">hot-climate " +
      "pet care</a>.</p>" },
    { h: "Evidence boundary", html:
      "<p><strong>Handover reference:</strong> " + source("AAHA pet-sitter instruction checklist", SOURCES.sitter) +
      ". It supports documenting the animal, routine, medication and emergency contacts; " +
      "it does not vet a candidate. We did not find an authoritative Pattaya-wide " +
      "sitter registry, credential " +
      "standard, insurance database or price survey. PattayaPets therefore does not " +
      "endorse a candidate or publish a normal rate. Verify documents, references, " +
      "scope and emergency permissions for the specific arrangement.</p>" }
  ],
  faqs: [
    ["How do I find a trustworthy pet sitter in Pattaya?",
     "<p>Use referrals only to identify candidates. Verify identity, recent references and relevant experience yourself, meet first, agree the scope in writing and complete a supervised trial.</p>"],
    ["Should I use a pet sitter or a boarding kennel?",
     "<p>It depends on the animal's health, behaviour, routine and the evidence available for each provider. Discuss health concerns with a veterinarian and behaviour concerns with a veterinarian or appropriately qualified behaviour professional, then compare the documented arrangements.</p>"],
    ["What should I tell a pet sitter before I travel?",
     "<p>Document feeding, the outing plan and heat-cancellation thresholds, prescribed medication, handling preferences, supplies, vet authorisation, your contact and a backup. Use a supervised trial to test the handover and correct gaps before travel.</p>"],
    ["How much should I pay a pet sitter in Pattaya?",
     "<p>We found no representative Pattaya rate survey, so this page cannot provide a normal price. Obtain itemised current quotes and agree the scope, total fee, cancellation terms, access handling and emergency authority in writing.</p>"],
    ["Should the sitter have a spare key?",
     "<p>Use the least access needed for the agreed service. Document key or code handling, return, emergency access and backup contacts; do not share a building credential without the authorised person's or manager's permission.</p>"],
    ["What should I ask a Pattaya dog walker about the heat?",
     "<p>Ask how they assess current weather, shade, surface and your individual dog, when they cancel or shorten an outing, and what they do if the animal shows a concerning change.</p>"]
  ],
  related: [
    { name: "Boarding in Pattaya", path: "/boarding/", desc: "Kennels and catteries directory." },
    { name: "Cat boarding in Pattaya", path: "/cats/cat-boarding-pattaya.html", desc: "When a sitter is not the right fit for a cat." },
    { name: "Travelling in Thailand", path: "/owning-a-pet-in-pattaya/travelling-in-thailand.html", desc: "When a sitter is not enough." },
    { name: "Pet-friendly housing", path: "/owning-a-pet-in-pattaya/pet-friendly-housing.html", desc: "If a sitter will be in your home." }
  ]
}));

/* ---------------- GETTING TO THE VET ---------------- */
pages.push(own({
  slug: "getting-to-the-vet", crumb: "Getting to the vet", updated: "2026-08-01",
  title: "Pet Transport to a Pattaya Vet | PattayaPets",
  desc: "Transport options for getting a pet to the vet in Pattaya without a " +
    "car - carriers, taxis and ride apps, home-visit vets and emergency plans.",
  h1: "Getting your pet to the vet without a car in Pattaya",
  lede: "Choose and test a primary and backup transport route before an urgent " +
    "journey. Provider acceptance and clinic availability must be confirmed live.",
  sections: [
    { h: "Plan it before you need it", html:
      "<p>Shortlist a <a href=\"/vets/\">clinic</a>, a backup and a transport " +
      "provider that has explicitly accepted your species and containment method. " +
      "For after-hours planning, use the <a href=\"/pet-emergency/24-hour-vets-pattaya.html\">" +
      "public 24-hour claims</a> only as leads: call in advance to confirm the current entrance, " +
      "staffing and service scope, then repeat that confirmation during an incident.</p>" },
    { h: "Plan safe containment", html:
      "<p>Ask the clinic and transport provider what suitable containment or restraint " +
      "they require for the species, size and vehicle. Acclimatise the animal to an " +
      "appropriate carrier before it is needed when a carrier fits that animal. If " +
      "injury or illness makes movement " +
      "unsafe, describe the condition to the clinic and follow its case-specific " +
      "handling instructions rather than forcing the animal into a generic method.</p>" },
    { h: "Taxis and ride-hailing apps", html:
      "<p>App, fleet and individual-driver policies can change. Disclose the animal " +
      "and containment method before the journey and obtain explicit acceptance; do " +
      "not assume a booking category permits animals. Compare lawful local options, " +
      "vehicle space, ventilation, restraint and cleaning requirements. Shared or " +
      "open transport may not fit an ill, frightened or uncontained animal.</p>" },
    { h: "Home-visit and mobile vets", html:
      "<p>Some published clinic records advertise <strong>home visits</strong>. " +
      "The clinic must decide whether the requested examination or procedure fits " +
      "its current mobile scope. " +
      "See the <a href=\"/mobile-vets/\">mobile &amp; home-visit vets directory</a> " +
      "for clinics that advertise off-site visits, including " +
      "<a href=\"/mobile-vets/baan-mor-raksasat-animal-hospital-pattaya.html\">Baan Mor Raksasat</a>. " +
      "Do not infer emergency capability from the phrase &lsquo;home visit&rsquo;.</p>" },
    { h: "In a real emergency", html:
      "<p>Contact the clinic while arranging transport so it can confirm whether it " +
      "can receive the case and advise on movement. If it does not answer, use the " +
      "backup rather than treating silence as acceptance. Do not wait for email or " +
      "a directory reply. See <a href=\"/pet-emergency/\">pet emergencies</a>.</p>" },
    { h: "Evidence boundary", html:
      "<p><strong>Cat-transport reference:</strong> " + source("FelineVMA 2025 motor-vehicle transport position", SOURCES.transport) +
      ". It supports carrier acclimation and veterinary guidance on carrier type and " +
      "placement for cats; it does not cover every species or validate a Pattaya " +
      "provider. PattayaPets has not completed a current market-wide audit of taxi, app or " +
      "pet-transport acceptance, pricing, insurance or response time. Directory " +
      "records show only the documented publication state; every journey and clinic " +
      "handover needs live confirmation.</p>" }
  ],
  faqs: [
    ["Can I take my pet in a taxi or ride app in Pattaya?",
     "<p>Policies vary. Disclose the animal and containment method before travel and obtain the assigned provider's explicit acceptance. Keep a backup because a booking request is not proof of carriage.</p>"],
    ["How should my pet travel in a vehicle?",
     "<p>Use containment or restraint appropriate to the species, size, vehicle and condition, agreed with the provider. If an injury makes normal handling unsafe, ask the receiving clinic for case-specific instructions.</p>"],
    ["What if I can't get my pet to a vet in an emergency?",
     "<p>Call the intended clinic and backup while arranging transport. Describe the animal and ask whether it can receive the case and how to move it; do not infer emergency capability from a home-visit listing.</p>"],
    ["Are motorbike taxis safe for pets?",
     "<p>This page does not approve a motorcycle journey. Ask the clinic and a lawful transport provider for an option with suitable containment, restraint, space and ventilation for the animal and condition.</p>"],
    ["Should I keep a carrier in the car?",
     "<p>Keep an appropriate carrier accessible and inspect it before use. Ask the veterinary team how that model should be sized and secured for the animal and vehicle; a stored carrier is not automatically suitable for an injured animal.</p>"],
    ["Should I call the clinic before leaving for an emergency?",
     "<p>Call while arranging transport to confirm the clinic can receive the case and ask for handling instructions. If nobody answers, contact the backup rather than waiting indefinitely.</p>"],
    ["Can a home-visit vet replace a hospital in a true emergency?",
     "<p>Do not assume they can. The provider must decide whether its current mobile equipment, staffing and scope fit the case and whether hospital transfer is required.</p>"]
  ],
  related: [
    { name: "Pet taxi Pattaya", path: "/owning-a-pet-in-pattaya/pet-taxi-pattaya.html", desc: "Dedicated transport for vet and airport trips." },
    { name: "24-hour vets in Pattaya", path: "/pet-emergency/24-hour-vets-pattaya.html", desc: "Call-confirmed leads for urgent care." },
    { name: "Hit by a vehicle", path: "/pet-emergency/road-accident.html", desc: "Case-specific handling and clinic contact." },
    { name: "Mobile vets", path: "/mobile-vets/", desc: "Published home-visit claims to confirm directly." },
    { name: "Pet emergencies", path: "/pet-emergency/", desc: "24-hour vets and urgent hazards." }
  ]
}));

/* ---------------- SENIOR PETS ---------------- */
pages.push(own({
  slug: "senior-pet-care", crumb: "Senior pets", updated: "2026-08-01",
  title: "Senior Pet Care in Pattaya | PattayaPets",
  desc: "How to care for an older dog or cat in Pattaya - check-ups, the heat, " +
    "comfort at home, and the changes worth watching for as a pet ages in tropical heat.",
  h1: "Caring for a senior pet in Pattaya",
  lede: "Senior care is individual: species, breed, size, health, function and " +
    "environment shape the examination, monitoring and home-support plan.",
  sections: [
    { h: "When a pet is 'senior'", html:
      "<p>There is no single age or universal senior protocol. AAHA notes variation " +
      "by species, breed, size and lifespan. Ask your " +
      "<a href=\"/vets/\">vet</a> when it is time to shift to a senior-care " +
      "routine and which baseline observations apply to the individual animal.</p>" },
    { h: "Set the examination interval", html:
      "<p>Ask the veterinarian to set an examination and testing interval from the " +
      "animal&rsquo;s age, history, medicines, findings and trajectory. Do not order " +
      "or interpret a generic blood panel from this page. Oral health is part of " +
      "senior assessment &mdash; see " +
      "<a href=\"/pet-health-pattaya/dental-care.html\">dental care</a>. These " +
      "visits are also a chance to record changes before they become hard to compare.</p>" },
    { h: "Assess heat risk individually", html:
      "<p>Age alone does not quantify heat risk. Ask the veterinarian how age, " +
      "breed, body condition, heart or airway disease, mobility and medicines affect " +
      "this animal&rsquo;s activity plan. Use current conditions and the individual " +
      "thresholds in <a href=\"/owning-a-pet-in-pattaya/hot-climate-pet-care.html\">" +
      "hot-climate pet care</a>; do not apply a fixed age multiplier.</p>" },
    { h: "Comfort at home", html:
      "<p>Potential environmental changes include supportive bedding; food and water " +
      "easy to reach; steps or a ramp for a dog that struggles to climb; rugs " +
      "for grip on slippery floors; and a litter tray with a low side for an " +
      "older cat. Have the veterinary team check that a ramp, exercise plan or diet " +
      "fits the animal&rsquo;s health, mobility and body-condition goal &mdash; see " +
      "<a href=\"/pet-health-pattaya/healthy-weight.html\">healthy weight</a>.</p>" },
    { h: "Watch for changes", html:
      "<p>Tell your vet promptly about changes in appetite, thirst, toileting, " +
      "weight, mobility, lumps, behaviour or apparent confusion. It is tempting " +
      "to put everything down to &lsquo;just getting old&rsquo; &mdash; but many " +
      "of these changes may reflect a condition that deserves assessment rather than " +
      "an assumption about age.</p>" },
    { h: "Medication, arthritis and cognitive changes", html:
      "<p>Use only the medicine, formulation and schedule prescribed for the animal. " +
      "Ask the clinic how to record administrations, handle a missed dose and store " +
      "each product; do not combine tablets in an unlabelled organiser. Rugs, traction " +
      "and ramps may help some animals, but placement and slope must be safe.</p>" +
      "<p>Disorientation, night waking or house-soiling can have multiple causes, " +
      "including pain or cognitive dysfunction, and cannot be diagnosed from a web " +
      "list. Ask the veterinarian to assess the change and document monitoring and " +
      "escalation steps.</p>" },
    { h: "Source and review boundary", html:
      "<p><strong>Clinical reference:</strong> " + source("2023 AAHA Senior Care Guidelines for Dogs and Cats", SOURCES.senior) +
      ". The guideline presents an evidence-guided framework for tailored senior " +
      "care rather than a universal protocol. PattayaPets found no representative " +
      "Pattaya senior-disease prevalence or clinic-fee dataset and publishes neither. " +
      "No veterinarian has reviewed this PattayaPets summary.</p>" }
  ],
  faqs: [
    ["How often should an older pet see the vet?",
     "<p>There is no universal interval. Ask the veterinarian to set one from the animal's species, age, history, medicines, examination findings and rate of change.</p>"],
    ["Does the heat affect senior pets more?",
     "<p>Age can be one factor, but actual risk also depends on breed, body condition, disease, mobility, medicines and current conditions. Ask for an individual activity and cooling plan.</p>"],
    ["What changes should I watch for in an ageing pet?",
     "<p>Record changes in appetite, thirst, toileting, weight, mobility, lumps, behaviour or apparent confusion. Tell the veterinarian rather than assuming a cause from age; these observations can have multiple causes and need individual assessment.</p>"],
    ["Should senior pets still exercise in Pattaya heat?",
     "<p>Ask the veterinarian what type, duration, surface and conditions fit the individual animal. Do not use age alone or wait for exhaustion as the stopping rule.</p>"],
    ["Do older pets need different food?",
     "<p>Not automatically. Nutrition should reflect body condition, disease, medicines and current intake. Ask the veterinarian before changing the product, amount or transition.</p>"],
    ["How can I make home easier for a senior pet?",
     "<p>Ask the veterinary team to tailor access to food, water, bedding, toileting and traction. Test any rug, step or ramp for stability and fit rather than assuming one setup suits every animal.</p>"],
    ["Should I assume confusion is just old age?",
     "<p>No. Disorientation, night waking or house-soiling can have several medical or behavioural causes. Record the change and ask a veterinarian to assess it rather than diagnosing cognitive decline from a web list.</p>"]
  ],
  related: [
    { name: "Hot-climate pet care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", desc: "Questions for an individual heat and activity plan." },
    { name: "Dental care", path: "/pet-health-pattaya/dental-care.html", desc: "Include oral health in an individual senior assessment." },
    { name: "End-of-life care", path: "/owning-a-pet-in-pattaya/saying-goodbye.html", desc: "Compassionate guidance for the final stage." },
    { name: "Vets in Pattaya", path: "/vets/", desc: "Individual senior examinations and testing plans." }
  ]
}));

/* ---------------- END OF LIFE ---------------- */
pages.push(own({
  slug: "saying-goodbye", crumb: "Saying goodbye", updated: "2026-08-01",
  title: "Pet End-of-Life Care in Pattaya | PattayaPets",
  desc: "Compassionate, practical orientation on end-of-life care for a pet in " +
    "Pattaya - quality of life, what euthanasia involves, and aftercare options.",
  h1: "End-of-life care: saying goodbye to a pet in Pattaya",
  lede: "Ask the veterinary team to explain prognosis, comfort, alternatives, the " +
    "procedure, costs and aftercare before a crisis forces decisions under time pressure.",
  verify: "End-of-life decisions require a veterinarian who has assessed the animal. " +
    "This page offers questions to ask; it does not decide when euthanasia is " +
    "appropriate or promise a particular clinic, procedure or outcome.",
  sections: [
    { h: "Talk to your vet", html:
      "<p>When a pet has a serious illness or progressive functional decline, ask " +
      "the <a href=\"/vets/\">veterinary team</a> to explain what is known, what " +
      "treatment or palliative care may and may not achieve, and how comfort will be " +
      "assessed. Ask for plain-language options, likely burdens and benefits, expected " +
      "changes, urgent warning signs and whom to call after hours. For older pets, see also " +
      "<a href=\"/owning-a-pet-in-pattaya/senior-pet-care.html\">senior pet care</a>.</p>" },
    { h: "Thinking about quality of life", html:
      "<p>Track concrete observations such as appetite, hydration, breathing, pain " +
      "behaviour, hygiene, mobility, sleep, interaction and activities the animal " +
      "normally values. A quality-of-life tool can structure a conversation, but a " +
      "score is not a diagnosis or automatic decision. Review the record with the " +
      "veterinarian and ask how uncertainty will be handled.</p>" },
    { h: "What euthanasia involves", html:
      "<p>The veterinarian should explain consent, location, sedation if used, the " +
      "euthanasia method, what you may observe, who may be present and what happens " +
      "afterwards. Procedures and clinic policies vary, so ask every question before " +
      "consenting. A <strong>home visit</strong> may be an option only if a provider " +
      "confirms that service and considers it appropriate; see " +
      "<a href=\"/mobile-vets/\">mobile &amp; home-visit records</a>.</p>" },
    { h: "Aftercare", html:
      "<p>Ask the clinic which aftercare options it can actually arrange, which " +
      "provider performs them, whether identification is maintained, what is returned, " +
      "the written price and expected timing. PattayaPets has not independently " +
      "audited a local cremation chain of custody and does not promise individual " +
      "cremation or ashes return.</p>" +
      "<p>Ask for costs before consent where circumstances allow. See " +
      "<a href=\"/pet-insurance-thailand.html\">pet insurance in Thailand</a> and " +
      "<a href=\"/owning-a-pet-in-pattaya/cost-of-owning-a-pet.html\">what it costs to own a pet</a> " +
      "for budgeting context.</p>" },
    { h: "Grief and support", html:
      "<p>People respond to pet loss differently. Ask the clinic whether it can point " +
      "to qualified bereavement support, and seek a licensed human-health professional " +
      "if grief is disrupting daily functioning. Use local emergency services if " +
      "anyone is in immediate danger. A child&rsquo;s needs depend " +
      "on age and circumstances; use an appropriate health or counselling professional " +
      "rather than a fixed script from this page.</p>" },
    { h: "Source and review boundary", html:
      "<p><strong>Clinical reference:</strong> " + source("2023 AAHA Senior Care Guidelines for Dogs and Cats", SOURCES.senior) +
      ", including its palliative, hospice and euthanasia material, and " +
      source("AAHA's 2026 end-of-life owner guidance", SOURCES.endOfLife) +
      ". These support veterinarian-led, individual decisions rather than an " +
      "automatic web score. No veterinarian " +
      "has reviewed this PattayaPets summary, and no local aftercare provider has " +
      "been independently audited by PattayaPets.</p>" }
  ],
  faqs: [
    ["How do I know when it's time?",
     "<p>There is no automatic web score. Record concrete changes, ask the veterinarian about prognosis, suffering, treatment and palliative options, and discuss how uncertainty and urgent deterioration will be handled.</p>"],
    ["Can my pet be put to sleep at home?",
     "<p>Only if a provider confirms that service and considers it appropriate for the animal and circumstances. Ask about staffing, method, consent, presence, fees, timing and aftercare.</p>"],
    ["Can I stay with my pet during euthanasia?",
     "<p>Policies and circumstances vary. Ask the veterinary team what is possible, what you may observe and what support is available for the animal and people present.</p>"],
    ["What are the options for a pet's body afterwards?",
     "<p>Ask the clinic for its current options, named provider, chain of custody, what is returned, written fee and timing. PattayaPets has not independently audited a local cremation provider.</p>"],
    ["How do I talk to children about losing a pet?",
     "<p>Needs vary with age, development and circumstances. Ask an appropriate paediatric health or counselling professional for help when needed; this page cannot provide a universal script.</p>"],
    ["Should I get another pet straight away?",
     "<p>There is no required timetable. Consider the household's readiness, other animals, care capacity and the responsibilities of a specific adoption without treating a new animal as a prescribed grief intervention.</p>"]
  ],
  related: [
    { name: "Senior pet care", path: "/owning-a-pet-in-pattaya/senior-pet-care.html", desc: "Individual senior monitoring and home support." },
    { name: "Pet insurance in Thailand", path: "/pet-insurance-thailand.html", desc: "Check the actual policy wording and exclusions." },
    { name: "Mobile & home-visit vets", path: "/mobile-vets/", desc: "Confirm current scope directly with the provider." },
    { name: "Adopt a pet in Pattaya", path: "/adopt-a-pet-pattaya/", desc: "Consider a future adoption only when the household is ready." }
  ]
}));

module.exports = pages;
