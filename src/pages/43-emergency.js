"use strict";
/* Cluster: Pet emergencies & tropical hazards */

const { article, hub } = require("../guidekit.js");
const { esc } = require("../layout.js");
const { BUSINESSES, AREAS } = require("../data/businesses.js");

function emergencyClinicCard(b) {
  var areaNm = b.areas[0] && AREAS[b.areas[0]] ? AREAS[b.areas[0]].name : "Pattaya";
  var listing = "/" + b.category + "/" + b.slug + ".html";
  var actions = "";
  if (b.phone && b.tel) {
    actions += '<a class="btn btn-alert" href="tel:' + b.tel + '" aria-label="Call ' +
      esc(b.name) + ' now">Call ' + esc(b.phone) + "</a>";
  }
  actions += '<a class="btn btn-ghost" href="' + listing + '">Full listing</a>';
  return '<article class="biz-card biz-card--emergency">' +
    '<div class="biz-top">' +
    "<div><h3><a href=\"" + listing + "\">" + esc(b.name) + "</a></h3>" +
    '<p class="biz-sub">' + esc(b.type) + " &middot; " + esc(areaNm) + "</p></div>" +
    '<span class="badge-24h">Open 24 hours</span></div>' +
    (actions ? '<div class="biz-actions btn-row">' + actions + "</div>" : "") +
    '<div class="table-wrap"><table class="facts-table">' +
    '<caption class="visually-hidden">Contact details for ' + esc(b.name) + "</caption><tbody>" +
    (b.address ? "<tr><th scope=\"row\">Address</th><td>" + esc(b.address) + "</td></tr>" : "") +
    (b.phone ? '<tr><th scope="row">Phone</th><td><a href="tel:' + b.tel + '">' +
      esc(b.phone) + "</a></td></tr>" : "") +
    (!b.address && !b.phone
      ? "<tr><td colspan=\"2\">Contact details are being verified &mdash; open the full listing before travelling.</td></tr>"
      : "") +
    "</tbody></table></div></article>";
}

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
  title: "Pet Emergency Pattaya | 24-Hour Vets, First Aid & Hot-Climate Hazards | PattayaPets",
  image: "/assets/img/og-emergency.png",
  updated: "2026-06-04",
  desc: "Pet emergency in Pattaya: 24-hour animal hospitals with addresses and phone " +
    "numbers, first aid, heatstroke, ticks, snake bites, street dogs and poisoning.",
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
    "addresses and contact details. If you need transport, read " +
    "<a href=\"/owning-a-pet-in-pattaya/getting-to-the-vet.html\">getting your pet " +
    "to the vet</a>. Save your nearest clinic&rsquo;s contact " +
    "today, before you ever need it.</p></div>" +
    '<div class="prose"><p>For everyday prevention, see ' +
    "<a href=\"/owning-a-pet-in-pattaya/hot-climate-pet-care.html\">hot-climate pet " +
    "care</a>, <a href=\"/pet-emergency/ticks-and-fleas.html\">ticks &amp; fleas</a>, " +
    "and <a href=\"/owning-a-pet-in-pattaya/where-to-walk-your-dog.html\">where to walk " +
    "your dog</a> safely.</p><p><strong>This hub is for animal emergencies only.</strong> " +
    "For human medical care in Pattaya, see " +
    '<a href="https://pattaya-medical.com/" target="_blank" rel="noopener noreferrer">' +
    "Pattaya Medical</a>.</p><p>" + NOTVET + "</p></div>",
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
    { name: "24-hour vets in Pattaya", path: "/pet-emergency/24-hour-vets-pattaya.html", desc: "Clinics open around the clock." },
    { name: "Pet first-aid orientation", path: "/pet-emergency/pet-first-aid.html", desc: "Staying calm and moving an injured pet safely." },
    { name: "Venomous creatures", path: "/pet-emergency/venomous-creatures.html", desc: "Toads, centipedes and stings beyond snakes." },
    { name: "Beach & sea hazards", path: "/pet-emergency/beach-and-sea-hazards.html", desc: "Jellyfish, hot sand and seawater on the beach." },
    { name: "Street-dog encounters", path: "/pet-emergency/street-dog-encounters.html", desc: "Walking safely around free-roaming dogs." },
    { name: "Pet health in Pattaya", path: "/pet-health-pattaya/", desc: "Prevention for heartworm, ticks and skin problems." },
    { name: "Hot-climate pet care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", desc: "Preventing heatstroke and paw-pad burns." }
  ]
}));

/* ---------------- 24-HOUR VETS ---------------- */
var c24 = BUSINESSES.filter(function (b) {
  return (b.category === "vets" || b.category === "mobile-vets") && b.c24;
});
var c24list = c24.map(emergencyClinicCard).join("");

pages.push(article({
  path: "/pet-emergency/24-hour-vets-pattaya.html",
  title: "24-Hour Emergency Vets in Pattaya (Addresses & Phone) | PattayaPets",
  desc: "24-hour animal hospitals in Pattaya for pet emergencies: addresses, phone numbers " +
    "and what to do before you need one — open around the clock near Pattaya.",
  crumb: "24-hour vets",
  breadcrumbs: SUB,
  eyebrow: "Pet emergencies",
  h1: "24-hour vets in Pattaya",
  lede: "When a pet emergency happens at night or on a holiday, you need a clinic " +
    "that is already open. These Pattaya animal hospitals are listed as operating " +
    "around the clock.",
  related: [
    { name: "24-hour clinics in the directory", path: "/vets/?filter=24h", desc: "Filter the vets hub to clinics open around the clock." },
    { name: "All emergency guides", path: "/guides.html?topic=emergency", desc: "Heatstroke, poisoning, first aid and more." },
    { name: "Pet emergencies hub", path: "/pet-emergency/", desc: "The full emergency guide cluster." }
  ],
  sections: [
    { html:
      '<div class="callout callout-emergency"><div class="ch">Act now, read later</div>' +
      "<p>If your pet is in distress, call the nearest clinic below and head " +
      "there. Phone ahead if you can, so staff are ready &mdash; but do not delay " +
      "leaving. " + NOTVET + "</p></div>" },
    { h: "Animal hospitals listed as open 24 hours", html:
      "<p>The clinics below appear, from public information, to operate 24 hours. " +
      "Opening hours can change &mdash; if you can, call first to confirm someone " +
      "is on duty for emergencies. PattayaPets lists these as <strong>facts pages</strong> " +
      "until anonymous visits are complete; we do not rate medical quality.</p>" +
      '<div class="grid grid-2 emergency-clinic-grid">' + c24list + "</div>" +
      "<p>Need a daytime clinic or a vet in your neighbourhood? Browse " +
      "<a href=\"/vets/?filter=24h\">24-hour clinics in the vets directory</a>, the full " +
      "<a href=\"/vets/\">vets directory</a>, " +
      "<a href=\"/area/naklua.html\">Naklua</a>, " +
      "<a href=\"/area/jomtien.html\">Jomtien</a> and " +
      "<a href=\"/area/central-pattaya.html\">Central Pattaya</a> area hubs, or " +
      "<a href=\"/mobile-vets/\">mobile &amp; home-visit vets</a> for routine care " +
      "that is not an emergency.</p>" },
    { h: "How emergency vet care works in Pattaya", html:
      "<p>Most 24-hour animal hospitals in Pattaya are <strong>private clinics</strong>, " +
      "not government services. You pay at the time of treatment &mdash; cash and card " +
      "are widely accepted, but it is wise to bring both. English is commonly spoken " +
      "at the larger hospitals listed here, especially at reception, though you should " +
      "not assume every staff member on every shift will be fluent.</p>" +
      "<p>In a true emergency the priority is stabilising your pet. Clinics may ask for " +
      "a deposit or an estimate before extensive diagnostics or surgery; that is normal " +
      "business practice here, not a sign you are in the wrong place. If your pet needs " +
      "specialist care the hospital may stabilise first and refer you onward &mdash; " +
      "still an emergency success, not a failure.</p>" +
      "<p><strong>What to tell reception on the phone or at arrival:</strong> species " +
      "and approximate weight, what happened, when symptoms started, whether the pet " +
      "is conscious and breathing normally, and any known toxins or medicines involved. " +
      "If heatstroke is possible, say so immediately &mdash; see " +
      "<a href=\"/pet-emergency/heatstroke.html\">heatstroke</a> for the signs.</p>" },
    { h: "Before an emergency ever happens", html:
      "<p>Three minutes of preparation now can save your pet later:</p>" +
      "<ul><li><strong>Save a 24-hour clinic in your phone</strong> &mdash; pick " +
      "the closest to your home and add it to your contacts today.</li>" +
      "<li><strong>Know your route</strong> &mdash; have a sense of how you would " +
      "get there, day or night, and who could drive if you cannot. See " +
      "<a href=\"/owning-a-pet-in-pattaya/getting-to-the-vet.html\">getting your pet " +
      "to the vet</a> for transport options without a car.</li>" +
      "<li><strong>Keep a carrier accessible</strong> &mdash; a panicked or " +
      "injured pet is far safer transported in a carrier or crate.</li>" +
      "<li><strong>Keep records handy</strong> &mdash; vaccination history helps " +
      "the vet act faster.</li></ul>" +
      "<p>For non-urgent care, browse the full " +
      "<a href=\"/vets/\">directory of vets and animal hospitals</a>.</p>" },
    { h: "Getting there fast — transport and language", html:
      "<p>Most expats use <strong>Grab or a trusted driver</strong> with the clinic " +
      "address saved in English and Thai. Put the address in your phone before you " +
      "need it &mdash; see " +
      "<a href=\"/owning-a-pet-in-pattaya/getting-to-the-vet.html\">getting your pet " +
      "to the vet</a> for options without your own car, including " +
      '<a href="https://pattaya-vehicle-rentals.com/" target="_blank" rel="noopener noreferrer">' +
      "short-term car hire</a> if you prefer to drive yourself at night.</p>" +
      "<p>If you are new to Thailand, save the phrase <em>soo sat</em> (animal hospital) " +
      "for a driver. A calm human voice on the phone helps reception prepare; a photo " +
      "of your pet in distress is useful only if it does not delay leaving.</p>" +
      "<p><strong>Mobile and home-visit vets</strong> suit vaccinations and routine checks, " +
      "but they are rarely equipped for surgery, oxygen, IV fluids or overnight " +
      "monitoring. In a collapse, breathing difficulty or major trauma, go to a " +
      "24-hour hospital, not a mobile appointment.</p>" },
    { h: "After the emergency — follow-up and records", html:
      "<p>Once your pet is stable, ask for a <strong>written discharge summary</strong> " +
      "or copy of notes — especially if you may travel, change vets, or need " +
      "insurance paperwork. Note medication names, doses and recheck dates in your " +
      "phone the same day; stress makes memory unreliable.</p>" +
      "<p>If your pet was hospitalised overnight, clarify visiting rules, how updates " +
      "are shared (LINE, phone, email), and what to watch for at home before you " +
      "leave. For ongoing care, our <a href=\"/vets/\">vets directory</a> lists " +
      "daytime clinics if you need a follow-up near home rather than returning to " +
      "the emergency hospital.</p>" +
      "<p>Heatstroke, snake bites, poisoning and road trauma often need <strong>recheck " +
      "appointments</strong> even when your pet looks recovered. Skipping follow-up " +
      "is one of the most common reasons preventable complications appear days later.</p>" }
  ],
  faqs: [
    ["How do I know if it is a real emergency?",
     "<p>Treat it as urgent if your pet has difficulty breathing, has collapsed or cannot stand, is bleeding heavily, has had a suspected poisoning, seizure or heatstroke, has been hit by a vehicle, or is in obvious severe pain. When in doubt, call a 24-hour clinic and describe what you see — they can advise whether to come in.</p>"],
    ["Should I call before going?",
     "<p>If you can do it without delaying, yes — a quick call lets the clinic prepare and confirm a vet is on duty. But never let making a call hold you up when minutes matter.</p>"],
    ["Are these clinics confirmed as 24-hour by PattayaPets?",
     "<p>They are listed as 24-hour based on public information. PattayaPets has not yet completed anonymous visits, and hours can change — check the clinic listing for current contact details before you travel.</p>"],
    ["What should I bring to a 24-hour vet visit?",
     "<p>Your pet secured in a carrier or on a lead, vaccination records if you have them, any medication, and a payment method. Save the clinic address in English and Thai for your driver if someone else is taking you.</p>"],
    ["Do I need an appointment for an emergency?",
     "<p>No — go straight there for a genuine emergency. A quick call on the way helps the team prepare, but do not delay travel when minutes matter.</p>"],
    ["How much does an emergency vet visit cost in Pattaya?",
     "<p>There is no fixed public price — it depends on the clinic, time of day and treatment. Consultations often start in the low thousands of baht; surgery, imaging or overnight care can run much higher. Ask for an estimate when you can, but do not let cost delay life-saving stabilisation.</p>"],
    ["Which 24-hour clinic is closest to Jomtien or Naklua?",
     "<p>Most listed 24-hour hospitals cluster along Sukhumvit and central Pattaya. From Jomtien or Naklua, pick the nearest from the list above and save the drive time in advance. For daytime neighbourhood care, use our <a href=\"/area/jomtien.html\">Jomtien</a> and <a href=\"/area/naklua.html\">Naklua</a> area pages.</p>"],
    ["Can I get human medical help on this page?",
     "<p>No — this list is for <strong>animals only</strong>. For human emergencies in Pattaya, see <a href=\"https://pattaya-medical.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Pattaya Medical</a>.</p>"]
  ],
  updated: "2026-06-01",
  related: [
    { name: "Pet first-aid orientation", path: "/pet-emergency/pet-first-aid.html", desc: "Staying calm and moving a hurt pet safely." },
    { name: "Heatstroke", path: "/pet-emergency/heatstroke.html", desc: "Pattaya's most common preventable emergency." },
    { name: "Poisoning", path: "/pet-emergency/poisoning.html", desc: "Toad toxin, baits and other hazards." },
    { name: "Getting your pet to the vet", path: "/owning-a-pet-in-pattaya/getting-to-the-vet.html", desc: "Transport options without a car." }
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

/* ---------------- FIRST AID ---------------- */
pages.push(hazard({
  slug: "pet-first-aid", crumb: "Pet first aid",
  title: "Pet First Aid Pattaya | Calm Steps Before the Vet | PattayaPets",
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
      "thing: getting safely to professional help.</p>" +
      "<p>Most owners in Pattaya are not medically trained &mdash; and that is " +
      "fine. <strong>First aid here means not making things worse</strong> while " +
      "you travel to a vet. If you are alone, prioritise securing the pet and " +
      "calling a driver or friend before you attempt anything that could get you " +
      "bitten.</p>" },
    { h: "Moving an injured pet safely", html:
      "<ul><li><strong>Protect yourself first</strong> &mdash; even a gentle pet " +
      "in pain may bite or scratch. Approach slowly and quietly. A towel over the " +
      "head can calm some dogs briefly; do not smother a cat or restrict breathing.</li>" +
      "<li><strong>Use a carrier or a firm surface</strong> &mdash; for a small " +
      "pet, a hard-sided carrier; for a larger dog, a board, a blanket used as a " +
      "stretcher with two people, or careful support of the chest and hindquarters " +
      "without twisting the spine.</li>" +
      "<li><strong>Keep the pet warm and still</strong> &mdash; minimise " +
      "movement, especially if a spinal injury is possible. Heatstroke is the " +
      "exception: cool with water and air flow on the way &mdash; see " +
      "<a href=\"/pet-emergency/heatstroke.html\">heatstroke</a>.</li>" +
      "<li><strong>Muzzle only if safe</strong> &mdash; an improvised muzzle on a " +
      "conscious dog in pain can help you lift them; never muzzle a vomiting pet, a " +
      "brachycephalic (flat-faced) breed struggling to breathe, or any animal that " +
      "is gasping.</li>" +
      "<li><strong>Go</strong> &mdash; head for the nearest " +
      "<a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour vet</a>. " +
      "See <a href=\"/owning-a-pet-in-pattaya/getting-to-the-vet.html\">getting your " +
      "pet to the vet</a> if you do not have a car.</li></ul>" },
    { h: "Bleeding, breathing and collapse", html:
      "<p><strong>Bleeding:</strong> apply firm pressure with a clean cloth for several " +
      "minutes without repeatedly lifting to check. Do not use a tourniquet unless a " +
      "vet has told you how &mdash; it is rarely appropriate for pets.</p>" +
      "<p><strong>Choking:</strong> if you can see an object in the mouth and can remove " +
      "it safely, try; otherwise go. See <a href=\"/pet-emergency/choking.html\">choking</a> " +
      "for orientation &mdash; do not blindly finger a throat.</p>" +
      "<p><strong>Collapse or seizure:</strong> clear hard objects away, time the episode, " +
      "do not restrain violently, and transport once it is safe to move. Prolonged " +
      "seizure or repeated seizures need urgent vet care.</p>" },
    { h: "What not to do", html:
      "<p>Do not give human medicines &mdash; many are toxic to pets. Do not " +
      "force food or water on a collapsed animal. Do not try to set a bone, " +
      "induce vomiting, or treat a wound beyond gently controlling obvious " +
      "bleeding. These are decisions for a veterinarian.</p>" +
      "<p>Do not delay leaving because you are searching online for a home remedy. " +
      "Pattaya&rsquo;s heat makes <strong>wait-and-see</strong> especially dangerous " +
      "for heatstroke, toad poisoning and snake bites.</p>" },
    { h: "At the clinic — what to expect", html:
      "<p>Reception will triage: breathing problems, collapse and major trauma usually " +
      "go first. You may be asked to wait even when you feel it is urgent &mdash; trust " +
      "that the clinical team is prioritising the sickest patients. Have your payment " +
      "method ready; deposits for surgery or overnight care are common at private hospitals.</p>" +
      "<p>Ask for an estimate when the situation is stable enough to discuss. If English " +
      "is limited, write key facts on your phone: species, weight, what happened, " +
      "current medicines, and your contact number.</p>" },
    { h: "Be ready before it happens", html:
      "<p>Keep a carrier accessible, a 24-hour clinic saved in your phone, and " +
      "your pet&rsquo;s vaccination records somewhere you can grab them. " +
      "A <a href=\"/owning-a-pet-in-pattaya/microchipping-your-pet.html\">microchip</a> " +
      "with current contact details helps if your pet gets loose. " +
      "Preparation is the most useful &lsquo;first aid&rsquo; there is.</p>" +
      "<p>A practical kit for Pattaya: hard carrier, spare lead and harness, towel, " +
      "photocopy of vaccination book, vet card, cash, and the address of your nearest " +
      "24-hour hospital in Thai for Grab drivers.</p>" }
  ],
  faqs: [
    ["Should I keep a pet first-aid kit?",
     "<p>Yes — keep it simple: a clean carrier, spare lead, towel, vaccination records, your regular vet&rsquo;s number and a 24-hour clinic contact. Ask your own vet what else they suggest for your specific pet (e.g. breed, chronic conditions).</p>"],
    ["Can I give my dog human painkillers?",
     "<p>No. Many common human medicines, including ibuprofen, paracetamol/acetaminophen and some painkillers, are dangerous or fatal to dogs and cats. Never medicate a pet without a vet&rsquo;s direction.</p>"],
    ["When is it definitely an emergency?",
     "<p>Difficulty breathing, collapse, heavy bleeding, suspected poisoning, seizures, heatstroke signs or a road accident all warrant immediate travel to a <a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour vet</a>.</p>"],
    ["How do I transport a cat versus a dog in an emergency?",
     "<p>Cats almost always travel more safely in a hard carrier — a panicked cat in a car without one is a danger to itself and the driver. Dogs may use a carrier, crate or careful restraint on a lead; large injured dogs may need a blanket stretcher with two people.</p>"],
    ["Should I induce vomiting if my pet ate something toxic?",
     "<p>Not unless a vet or poison helpline tells you to. Some toxins cause more damage on the way back up. For toad mouthing, rinse the mouth with water if you can do it safely and go — see <a href=\"/pet-emergency/poisoning.html\">poisoning</a>.</p>"],
    ["What if the emergency happens during Songkran or a holiday?",
     "<p>24-hour hospitals aim to stay open, but roads may be congested and staff stretched. Leave earlier, call ahead, and avoid driving yourself if you have been drinking — use a sober driver or Grab.</p>"],
    ["Can I use a mobile vet for first aid at home?",
     "<p>Mobile vets help with routine care and some urgent calls, but surgery, oxygen and overnight monitoring need a hospital. If your pet has collapsed or cannot breathe, go to a <a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour animal hospital</a>, not a home visit.</p>"],
    ["Does pet insurance cover emergency visits in Pattaya?",
     "<p>Depends on your policy and insurer — many expat policies require treatment at registered clinics and pre-authorisation for large claims. Read our <a href=\"/pet-insurance-thailand.html\">pet insurance in Thailand</a> orientation and check your own documents before you need them.</p>"]
  ],
  updated: "2026-06-01",
  related: [
    { name: "Heatstroke", path: "/pet-emergency/heatstroke.html", desc: "The most common preventable emergency here." },
    { name: "Venomous creatures", path: "/pet-emergency/venomous-creatures.html", desc: "Toads, centipedes and stings." },
    { name: "Road accidents", path: "/pet-emergency/road-accident.html", desc: "Moving an injured pet safely." },
    { name: "24-hour vets in Pattaya", path: "/pet-emergency/24-hour-vets-pattaya.html", desc: "Go straight here in an emergency." }
  ]
}));

/* ---------------- HEATSTROKE ---------------- */
pages.push(hazard({
  slug: "heatstroke", crumb: "Heatstroke",
  title: "Heatstroke in Dogs & Cats Pattaya | Signs, First Aid & Prevention | PattayaPets",
  desc: "Heatstroke in dogs and cats in Pattaya: warning signs, what to do before the " +
    "vet, high-risk situations, and how to prevent it in Thailand's heat.",
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
      "<a href=\"/pet-emergency/24-hour-vets-pattaya.html\">vet</a>.</p>" +
      "<p><strong>Cats pant less often than dogs</strong> &mdash; when a cat is " +
      "panting with an open mouth, treat it as urgent. Brachycephalic breeds " +
      "(Pugs, French Bulldogs, Persians) can tip into distress with less obvious " +
      "warning because their airways are already compromised.</p>" },
    { h: "Cooling on the way to the vet", html:
      "<p>Start cooling <strong>while you travel</strong>, not instead of going. " +
      "Move the pet to shade or air conditioning, offer small sips of cool (not " +
      "ice-cold) water if it is conscious and able to swallow, and wet the paws, " +
      "belly and inner thighs with lukewarm water. Use a fan or car AC on the " +
      "way. Do not force water into a collapsed animal or wrap it in wet towels " +
      "that trap heat &mdash; evaporation and airflow matter more than soaking.</p>" +
      "<p>Phone the clinic en route so they can prepare IV fluids and monitoring. " +
      "Heatstroke can cause clotting problems and organ damage that are not visible " +
      "from the outside; professional treatment is not optional once signs are " +
      "serious.</p>" },
    { h: "The high-risk situations", html:
      "<ul><li><strong>A parked car</strong> &mdash; never, even for a minute, " +
      "even with windows cracked. Interiors become lethal extraordinarily fast.</li>" +
      "<li><strong>Midday walks</strong> &mdash; walk early morning or after " +
      "sunset instead.</li>" +
      "<li><strong>Hot pavement</strong> &mdash; if you cannot hold the back of " +
      "your hand on it for seven seconds, it is too hot for paws.</li>" +
      "<li><strong>Snub-nosed breeds</strong> &mdash; Pugs, French Bulldogs, " +
      "Persians and similar overheat especially easily; see " +
      "<a href=\"/bring-pet-to-thailand/snub-nosed-breeds-flying.html\">snub-nosed " +
      "breeds &amp; flying</a>.</li></ul>" },
    { h: "Prevention", html:
      "<p>Keep fresh water always available, provide shade and airflow indoors, " +
      "walk in the cool hours, and never leave a pet in a hot car or a hot " +
      "balcony. For day-to-day heat management, see " +
      "<a href=\"/owning-a-pet-in-pattaya/hot-climate-pet-care.html\">hot-climate pet " +
      "care</a> and " +
      "<a href=\"/owning-a-pet-in-pattaya/where-to-walk-your-dog.html\">where to walk " +
      "your dog</a>.</p>" +
      "<p>On condo balconies, check that metal flooring and glass walls do not turn " +
      "a shaded spot into a greenhouse by mid-morning. If you rely on AC, have a " +
      "backup plan for power cuts during hot season &mdash; a neighbour, pet sitter " +
      "or boarding option beats a panicked emergency run.</p>" }
  ],
  faqs: [
    ["What time of day is safe to walk a dog in Pattaya?",
     "<p>Early morning and after sunset are the comfortable windows. Through the middle of the day the air, sun and pavement are all working against your pet — keep walks short and shaded, or skip them.</p>"],
    ["My dog seems fine after overheating — do I still need a vet?",
     "<p>Heatstroke can cause internal damage that is not visible straight away. If your pet has genuinely overheated, a vet check is the safe call even if it seems to have recovered.</p>"],
    ["How hot is too hot for pavement?",
     "<p>If you cannot hold the back of your hand on the pavement for five seconds, it is too hot for paw pads. Walk on grass or wait for cooler hours.</p>"],
    ["Can cats get heatstroke indoors?",
     "<p>Yes — a room without airflow or AC, a balcony with no shade, or a closed car can overheat a cat quickly. Ensure water, shade and ventilation; panting in a cat is always urgent.</p>"],
    ["What is the fastest way to cool a pet?",
     "<p>Move to shade or AC, offer small amounts of cool (not ice-cold) water, and wet paws and belly with lukewarm water while you travel to a vet. Do not force water if the pet is collapsed.</p>"],
    ["Can I use ice packs or cold baths?",
     "<p>Ice-cold immersion can shock the system and constrict blood vessels, slowing cooling. Lukewarm water plus airflow is safer while you get to a vet.</p>"],
    ["Does wetting a dog's coat help in humid Pattaya air?",
     "<p>Yes, if water can evaporate — wet belly and paws, use a fan or car AC, and avoid heavy wet towels that trap heat against the skin.</p>"],
    ["Are short-nosed breeds at higher risk?",
     "<p>Yes — brachycephalic dogs and cats overheat faster. See <a href=\"/bring-pet-to-thailand/snub-nosed-breeds-flying.html\">snub-nosed breeds</a> for the wider picture on breathing and heat.</p>"]
  ],
  related: [
    { name: "Hot-climate pet care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", desc: "Preventing heat problems day to day." },
    { name: "Snub-nosed breeds & flying", path: "/bring-pet-to-thailand/snub-nosed-breeds-flying.html", desc: "Flat-faced breeds overheat especially easily." },
    { name: "Where to walk your dog", path: "/owning-a-pet-in-pattaya/where-to-walk-your-dog.html", desc: "Cool-hour walking routines." },
    { name: "24-hour vets in Pattaya", path: "/pet-emergency/24-hour-vets-pattaya.html", desc: "Clinics open around the clock." }
  ]
}));

/* ---------------- TICKS & FLEAS ---------------- */
pages.push(hazard({
  slug: "ticks-and-fleas", crumb: "Ticks & fleas",
  title: "Ticks & Fleas on Pets in Pattaya | Prevention & Treatment | PattayaPets",
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
      "bigger concern: they can transmit serious " +
      "<a href=\"/pet-health-pattaya/tick-borne-disease.html\">tick-borne diseases</a> " +
      "to dogs. Catching and preventing them is far easier than treating the illnesses " +
      "they carry.</p>" },
    { h: "Prevention", html:
      "<ul><li><strong>Use a vet-recommended preventative</strong> &mdash; " +
      "spot-on treatments, chewable tablets and collars all exist; ask a vet " +
      "which suits your pet, and keep to the schedule year-round.</li>" +
      "<li><strong>Check after walks</strong> &mdash; run your hands over your " +
      "pet, especially ears, neck, armpits and between toes.</li>" +
      "<li><strong>Keep the environment tidy</strong> &mdash; short grass and " +
      "clean bedding give parasites fewer places to thrive.</li>" +
      "<li><strong>Treat all pets in the household</strong> &mdash; fleas hop between " +
      "dogs and cats; treating one pet while another carries parasites wastes money.</li></ul>" +
      "<p>If you find a tick or a flea problem, a " +
      "<a href=\"/vets/\">vet</a> can recommend the right treatment and " +
      "prevention plan. See also " +
      "<a href=\"/pet-health-pattaya/heartworm.html\">heartworm prevention</a> " +
      "&mdash; mosquitoes, like ticks, do not take a dry-season holiday here.</p>" },
    { h: "Removing ticks safely", html:
      "<p>Found a tick? Remove it <strong>promptly</strong> &mdash; the longer it " +
      "feeds, the higher the risk of disease transmission. Use a proper tick hook " +
      "or fine tweezers, grasp close to the skin, and pull steadily upward without " +
      "twisting or squeezing the body. Do not burn ticks, smother them in oil or " +
      "leave the head behind if you can avoid it; if part remains, let a vet advise.</p>" +
      "<p>After removal, note the date and location on your phone. Watch your pet for " +
      "lethargy, fever, lameness or loss of appetite over the following weeks &mdash; " +
      "see <a href=\"/pet-health-pattaya/tick-borne-disease.html\">tick-borne disease</a> " +
      "for what to mention to a vet.</p>" },
    { h: "When to see a vet", html:
      "<p>Book a vet visit if you find <strong>many ticks or fleas</strong>, if your " +
      "pet is scratching until the skin breaks, if a tick was attached for days, " +
      "or if you see lethargy, pale gums, fever or lameness after a bite. Puppies " +
      "and kittens with heavy infestations can become anaemic quickly in the tropics.</p>" +
      "<p>Your vet can recommend a product suited to Pattaya&rsquo;s year-round " +
      "pressure, treat any secondary skin infection, and discuss testing if tick-borne " +
      "illness is suspected. Do not rotate random supermarket products without " +
      "professional advice &mdash; some combinations are unsafe.</p>" }
  ],
  faqs: [
    ["Do indoor cats need flea and tick prevention in Pattaya?",
     "<p>Often yes — parasites can come in on people, on other pets, or through open windows and balconies. Ask your vet what is appropriate for your cat.</p>"],
    ["Should I remove a tick myself?",
     "<p>Ticks should be removed promptly and correctly with a tick hook or fine tweezers. If you are not confident, a vet can do it quickly and advise on prevention so it does not keep happening.</p>"],
    ["How often should I use flea and tick prevention in Pattaya?",
     "<p>Year-round prevention is the norm here — ticks and fleas do not stop in the dry season. Your vet can recommend a product suited to your pet and lifestyle.</p>"],
    ["What if my pet is scratching but I see no fleas?",
     "<p>Fleas are not always visible; allergies, mites and skin infections also cause itching. A vet exam beats guessing — especially if scratching is intense or the skin is red or broken.</p>"],
    ["Are tick-borne diseases common in Pattaya?",
     "<p>Ticks are present in Thailand and can transmit serious illnesses. Prevention and prompt removal reduce risk; see our <a href=\"/pet-health-pattaya/tick-borne-disease.html\">tick-borne disease</a> guide for what to watch for.</p>"],
    ["Can I use dog flea products on cats?",
     "<p>No — some dog-only products contain permethrin, which is toxic to cats. Always use species-appropriate products prescribed or approved by your vet.</p>"],
    ["Do ticks live on beaches and condo gardens?",
     "<p>Ticks favour grass, undergrowth and areas where wildlife or street dogs pass through — including garden edges and scrub near Jomtien and Naklua. Check pets after any outdoor time, not only forest walks.</p>"],
    ["Should I worry about one tick?",
     "<p>A single tick removed promptly is usually manageable, but note the date and watch for illness. Multiple ticks or repeated finds mean your prevention plan needs a vet review.</p>"]
  ],
  related: [
    { name: "Tick-borne disease", path: "/pet-health-pattaya/tick-borne-disease.html", desc: "What ticks can transmit here." },
    { name: "Heartworm", path: "/pet-health-pattaya/heartworm.html", desc: "Mosquito-borne prevention year-round." },
    { name: "Dog vaccinations & parasites", path: "/dogs/dog-vaccinations-thailand.html", desc: "Keeping prevention on schedule." },
    { name: "Pet health in Pattaya", path: "/pet-health-pattaya/", desc: "The tropical-climate health picture." }
  ]
}));

/* ---------------- SNAKE BITES ---------------- */
pages.push(hazard({
  slug: "snake-bites", crumb: "Snake bites",
  title: "Snake Bite in Dogs & Cats Pattaya | What to Do & Prevention | PattayaPets",
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
      "risk. For toads, centipedes and stings at the same times of day, see " +
      "<a href=\"/pet-emergency/venomous-creatures.html\">venomous creatures</a>.</p>" },
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
      "Do not apply a tourniquet, cut the wound, or attempt to suck out venom.</p>" +
      "<p>Carry your pet or use minimal movement if you must lift it. Phone ahead " +
      "so the clinic can prepare antivenom assessment and supportive care. Time " +
      "matters more than perfect identification.</p>" },
    { h: "What happens at the vet", html:
      "<p>Veterinary teams treat snake bites with <strong>supportive care</strong> " +
      "&mdash; pain relief, fluids, monitoring and, when indicated, antivenom. " +
      "Not every bite envenomates; not every species requires the same antivenom. " +
      "That is why professional assessment beats home remedies.</p>" +
      "<p>Expect blood tests, wound care and possibly hospitalisation. Even non-venomous " +
      "bites can become infected in Pattaya&rsquo;s heat. Follow discharge instructions " +
      "on rechecks and activity restriction &mdash; swelling can worsen before it improves.</p>" },
    { h: "Snakes in and around Pattaya", html:
      "<p>Thailand has many snake species; several are venomous. In green spaces, " +
      "vacant plots, gardens and edges of development around Pattaya and Chon Buri, " +
      "encounters are possible &mdash; especially after rain when snakes move. " +
      "Common advice from wildlife authorities is to give snakes space and call " +
      "trained handlers for removal from homes rather than attempting capture yourself.</p>" +
      "<p>For pets, the practical rule is simpler: assume any bite from an unknown snake " +
      "is an emergency until a vet says otherwise. See also " +
      "<a href=\"/pet-emergency/venomous-creatures.html\">venomous creatures</a> " +
      "for toads and centipedes at the same times of day.</p>" }
  ],
  faqs: [
    ["How do I know if my pet was bitten by a snake?",
     "<p>You may see sudden swelling, puncture marks, bleeding, pain, drooling, weakness or collapse — or you may simply have seen the snake. If a snake bite is possible, treat it as an emergency and get to a vet straight away.</p>"],
    ["Should I try to identify the snake?",
     "<p>Only from a safe distance, and never at the cost of delaying the trip to the vet. Your safety comes first; the vet can often treat without a precise identification.</p>"],
    ["How quickly do I need to get to a vet after a snake bite?",
     "<p>Immediately — do not wait to see if swelling develops. Time matters; call ahead if you can so the clinic is ready.</p>"],
    ["Are venomous snakes common in Pattaya?",
     "<p>Snakes exist in and around Pattaya, including venomous species in green spaces and undeveloped land. Keep dogs on leads near scrub and avoid letting pets poke into holes or piles of leaves.</p>"],
    ["Should I apply a tourniquet or suck out venom?",
     "<p>No — outdated first-aid myths can cause more harm. Focus on getting your pet to a vet quickly and keeping it as calm and still as possible.</p>"],
    ["Does antivenom exist for pets in Thailand?",
     "<p>Veterinary hospitals in Thailand can access antivenom when clinically indicated. Availability and type depend on the case — another reason to reach a hospital fast rather than waiting at home.</p>"],
    ["My dog killed the snake — should I bring it?",
     "<p>Only if you can do so safely without delay. A photo from a distance is often enough. Never risk a second bite handling a dead snake.</p>"],
    ["Can cats survive snake bites?",
     "<p>Cats are bitten less often but are not immune. Any suspected bite in either species is an emergency.</p>"]
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
  title: "Street Dog Encounters Pattaya | Walking Your Dog Safely | PattayaPets",
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
      "invites a reaction.</li></ul>" +
      "<p>For calmer routes and timing, see " +
      "<a href=\"/owning-a-pet-in-pattaya/where-to-walk-your-dog.html\">where to walk " +
      "your dog</a>.</p>" },
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
      "Jomtien operates a rescue ambulance.</p>" +
      "<p>Bring your pet&rsquo;s vaccination book to the vet after any bite. The " +
      "clinic will advise on wound cleaning, antibiotics if needed, and whether " +
      "a rabies booster is required given timing and severity. Human bite victims " +
      "need medical care separately &mdash; see " +
      '<a href="https://pattaya-medical.com/" target="_blank" rel="noopener noreferrer">' +
      "Pattaya Medical</a> for human emergency orientation.</p>" },
    { h: "High-risk areas and situations", html:
      "<p>Soi dogs are most territorial near where they sleep and eat &mdash; " +
      "often the same side streets every day. Markets, construction sites with " +
      "food waste, and unlit alleys at dawn or dusk see more movement. If you rent " +
      "short-term, ask neighbours which routes are calm before you establish a " +
      "walking pattern.</p>" +
      "<p>Small dogs and puppies can trigger chase behaviour in some street dogs. " +
      "Pick them up only if you can do so without putting your face near the " +
      "approaching group; otherwise create distance calmly with your body between " +
      "them. Off-lead beach runs near soi access points combine two risk factors &mdash; " +
      "see <a href=\"/dog-friendly-pattaya/beaches.html\">dog-friendly beaches</a> " +
      "for etiquette.</p>" }
  ],
  faqs: [
    ["Are Pattaya's street dogs dangerous?",
     "<p>Most are not interested in confrontation and keep their distance. The sensible approach is respect, not fear: keep your dog leashed, give groups space, and stay calm. Keep your pet's rabies vaccination current as a basic precaution.</p>"],
    ["What if my dog is bitten by a street dog?",
     "<p>Treat it seriously. Get the wound seen by a <a href=\"/vets/\">vet</a> as soon as you can — or a <a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour animal hospital</a> if it is after hours. The vet will advise on wound care and rabies risk given your pet's vaccination status. If a person is bitten, seek medical advice promptly.</p>"],
    ["Should I carry treats to distract street dogs?",
     "<p>Do not throw food at loose dogs — it can attract more animals or create competition. Keep your dog close, change direction calmly, and avoid running.</p>"],
    ["Is it safe to walk at night?",
     "<p>Many owners walk early morning or after sunset for heat reasons; at night visibility is lower and some street dogs are more active. A good lead, a torch and familiar routes help.</p>"],
    ["What if a street dog follows us home?",
     "<p>Do not encourage it inside. If it seems lost or injured, contact a local rescue rather than adopting on impulse — see <a href=\"/adopt-a-pet-pattaya/\">adopt a pet in Pattaya</a> for organisations that can help.</p>"],
    ["Should my dog greet street dogs on a walk?",
     "<p>Generally no — keep moving and give space. Even friendly-looking encounters can turn if a territorial dog feels challenged near its patch.</p>"],
    ["Are temple dogs different from soi dogs?",
     "<p>Temple colonies are often fed and tolerated by residents but are still free-roaming dogs with the same bite and disease risks. Same rules: lead, space, current rabies vaccination.</p>"],
    ["What if I am bitten while protecting my dog?",
     "<p>Wash the wound, seek human medical advice promptly, and still have your dog's vaccination status checked by a vet if it was also bitten.</p>"]
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
  title: "Pet Poisoning Pattaya | Common Toxins & Emergency Steps | PattayaPets",
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
      "garden plants.</li>" +
      "<li><strong>Toad toxin</strong> &mdash; see " +
      "<a href=\"/pet-emergency/venomous-creatures.html\">toads and venomous " +
      "creatures</a>.</li></ul>" },
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
      "reach. Be cautious about where your pet scavenges on walks &mdash; see " +
      "<a href=\"/pet-emergency/street-dog-encounters.html\">street-dog encounters</a> " +
      "for tideline and soi hazards &mdash; and ask neighbours and condo management about any rodent baiting in shared " +
      "areas.</p>" +
      "<p>In Pattaya&rsquo;s rainy season, <strong>toad encounters</strong> spike &mdash; " +
      "dogs that mouth toads can foam at the mouth and collapse quickly. Rinse the " +
      "mouth with water if you can do so safely and go; details in " +
      "<a href=\"/pet-emergency/venomous-creatures.html\">venomous creatures</a>.</p>" },
    { h: "At the veterinary hospital", html:
      "<p>On arrival, tell reception <strong>what you think was ingested</strong>, " +
      "when, and roughly how much. Bring packaging, photos of bait stations, or " +
      "samples only if safe and the vet asks. Treatment depends on the toxin: " +
      "some cases need activated charcoal or specific antidotes; others need " +
      "supportive fluids and monitoring; vomiting is induced only when appropriate.</p>" +
      "<p>Do not be surprised if your pet is kept for observation. Many poisons have " +
      "delayed effects. Ask what warning signs to watch for at home and when to " +
      "return immediately.</p>" }
  ],
  faqs: [
    ["Should I make my pet vomit if it ate something toxic?",
     "<p>Not on your own initiative. For some poisons, inducing vomiting causes further harm. Call a vet first and follow their instruction.</p>"],
    ["My pet ate chocolate — is that really dangerous?",
     "<p>Chocolate is genuinely toxic to dogs, and the risk rises with darker chocolate and smaller dogs. If your pet has eaten chocolate, contact a vet with the type and amount and your pet's weight.</p>"],
    ["What household items poison pets most often in Thailand?",
     "<p>Human medicines, insecticides, rat poison, certain foods (onions, grapes, xylitol gum), and some plants and toads are common risks. Keep chemicals and meds out of reach and know the number for a <a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour vet</a>.</p>"],
    ["Should I bring the packaging to the vet?",
     "<p>Yes — the label helps the vet identify the substance and dose. If your pet vomited, note what you saw; do not collect vomit unless the vet asks.</p>"],
    ["Can lilies poison cats?",
     "<p>Many lilies are highly toxic to cats — even small amounts of pollen or leaf can cause kidney failure. If you have cats, avoid lilies in the home and garden.</p>"],
    ["What about rat poison my neighbour put out?",
     "<p>Secondary poisoning from eating a poisoned rodent is a real risk. Ask management where bait is placed, keep dogs on leads in shared areas, and treat any suspected ingestion as urgent.</p>"],
    ["My pet ate a pufferfish on the beach — what now?",
     "<p>Treat as an emergency — pufferfish toxin is extremely dangerous. Rinse the mouth if safe, do not delay, and see <a href=\"/pet-emergency/beach-and-sea-hazards.html\">beach hazards</a>.</p>"],
    ["Can grapes or onions in Thai food harm my dog?",
     "<p>Yes — both are toxic to dogs, and restaurant scraps often contain garlic and onion. Keep table food away from pets and warn guests who share from their plate.</p>"]
  ],
  related: [
    { name: "Choking", path: "/pet-emergency/choking.html", desc: "Airway blockages and swallowed objects." },
    { name: "Venomous creatures", path: "/pet-emergency/venomous-creatures.html", desc: "Toads, centipedes and other venom risks." },
    { name: "Pet first aid", path: "/pet-emergency/pet-first-aid.html", desc: "The calm basics before you reach a vet." },
    { name: "24-hour vets in Pattaya", path: "/pet-emergency/24-hour-vets-pattaya.html", desc: "Do not wait for symptoms to worsen." }
  ]
}));

module.exports = pages;
