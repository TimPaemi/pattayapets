"use strict";
/* Cluster: Dog-friendly Pattaya */

const { article, hub } = require("../guidekit.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const CLUSTER = { name: "Dog-friendly Pattaya", path: "/dog-friendly-pattaya/" };
const SUB = [GUIDES, CLUSTER];

const pages = [];

pages.push(hub({
  path: "/dog-friendly-pattaya/",
  title: "Dog-Friendly Pattaya | Beaches, Cafes, Restaurants & Hotels | PattayaPets",
  image: "/assets/img/og-dog-friendly.png",
  desc: "Dog-friendly Pattaya: beaches, cafes, restaurants, hotels and condos that welcome " +
    "dogs — plus walking routes, etiquette and what to confirm before you go.",
  crumb: "Dog-friendly Pattaya",
  breadcrumbs: [GUIDES],
  eyebrow: "Guide",
  h1: "Dog-friendly Pattaya",
  lede: "Pattaya is, on the whole, an easy city to have a dog in &mdash; outdoor " +
    "living, a long beach and a growing number of places that welcome a " +
    "well-behaved dog.",
  intro:
    "<p>This cluster is built the PattayaPets way: practical, honest, and " +
    "growing carefully. Rather than a padded list of names we have not checked, " +
    "each page below gives you the lay of the land, the etiquette that keeps " +
    "dogs welcome, and the specifics we can stand behind &mdash; with more added " +
    "as we confirm them. Know somewhere genuinely dog-friendly? " +
    "<a href=\"/contact.html\">Tell us</a>. For daily walks, see " +
    "<a href=\"/owning-a-pet-in-pattaya/where-to-walk-your-dog.html\">where to walk " +
    "your dog</a> and " +
    "<a href=\"/owning-a-pet-in-pattaya/hot-climate-pet-care.html\">hot-climate pet " +
    "care</a>. For a wider editorial list of places to eat out in Pattaya, see the " +
    '<a href="https://pattaya-restaurant-guide.com/" target="_blank" rel="noopener noreferrer">' +
    "Pattaya Restaurant Guide</a> &mdash; cross-check dog policies before you go.</p>",
  groups: [
    {
      title: "Out and about with your dog",
      cards: [
        { name: "Dog-friendly beaches", desc: "Where dogs can enjoy the sand and sea — and the etiquette that keeps it that way.", path: "/dog-friendly-pattaya/beaches.html" },
        { name: "Dog-friendly cafes", desc: "Pattaya's growing pet-friendly cafe scene and how to find it.", path: "/dog-friendly-pattaya/cafes.html" },
        { name: "Dog-friendly restaurants", desc: "Eating out with a dog — where, and how to do it well.", path: "/dog-friendly-pattaya/restaurants.html" },
        { name: "Places to walk", desc: "Beaches, quiet sois and green space for a daily walk.", path: "/dog-friendly-pattaya/parks.html" }
      ]
    },
    {
      title: "Staying and living with a dog",
      cards: [
        { name: "Dog-friendly hotels", desc: "Pet-friendly places to stay, and what to confirm when booking.", path: "/dog-friendly-pattaya/hotels.html" },
        { name: "Dog-friendly condos", desc: "Renting with a dog in Pattaya — the rules, and how to find a pet-friendly building.", path: "/dog-friendly-pattaya/condos.html" }
      ]
    }
  ],
  related: [
    { name: "Where to walk your dog", path: "/owning-a-pet-in-pattaya/where-to-walk-your-dog.html", desc: "Building a safe daily routine." },
    { name: "Beach & sea hazards", path: "/pet-emergency/beach-and-sea-hazards.html", desc: "Jellyfish, hot sand and tideline toxins." },
    { name: "Hot-climate pet care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", desc: "The heat is the biggest everyday adjustment." },
    { name: "Street-dog encounters", path: "/pet-emergency/street-dog-encounters.html", desc: "Out and about with your dog." },
    { name: "24-hour vets in Pattaya", path: "/pet-emergency/24-hour-vets-pattaya.html", desc: "If something goes wrong on an outing." },
    { name: "Dog-friendly beaches", path: "/dog-friendly-pattaya/beaches.html", desc: "Cool-hour walks on the sand." }
  ]
}));

function df(o) {
  return article({
    path: "/dog-friendly-pattaya/" + o.slug + ".html",
    title: o.title, desc: o.desc, crumb: o.crumb, breadcrumbs: SUB,
    eyebrow: "Dog-friendly Pattaya",
    h1: o.h1, lede: o.lede,
    updated: o.updated, updatedLabel: o.updatedLabel, verify: o.verify,
    sections: o.sections, faqs: o.faqs,
    related: o.related || [
      { name: "Where to walk your dog", path: "/owning-a-pet-in-pattaya/where-to-walk-your-dog.html", desc: "Building a safe daily routine." },
      { name: "Street-dog encounters", path: "/pet-emergency/street-dog-encounters.html", desc: "Out and about with your dog." },
      { name: "Hot-climate pet care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", desc: "Heat, timing and paw-pad safety." },
      { name: "Dog-friendly beaches", path: "/dog-friendly-pattaya/beaches.html", desc: "Cool-hour walks on the sand." }
    ]
  });
}

pages.push(df({
  slug: "beaches", crumb: "Dog-friendly beaches",
  title: "Dog-Friendly Beaches Pattaya & Jomtien | Cool-Hour Walks | PattayaPets",
  desc: "Where you can walk a dog on the beach around Pattaya and Jomtien, the " +
    "etiquette that keeps dogs welcome, and how to do it safely in the heat.",
  h1: "Dog-friendly beaches in Pattaya",
  lede: "A beach walk at the right time of day is one of the real pleasures of " +
    "owning a dog in Pattaya &mdash; if you do it considerately.",
  updated: "2026-05-31",
  updatedLabel: "31 May 2026",
  verify: "Thailand does not publish a single national &lsquo;dogs on beaches&rsquo; rule for " +
    "Pattaya. Access is a mix of local practice, beach cleanliness campaigns, and how " +
    "considerate owners behave. Always read the stretch you are on, keep your dog leashed " +
    "unless the sand is genuinely empty, and obey any posted signs.",
  sections: [
    { h: "Stretch by stretch — where owners actually walk", html:
      "<p>There is no official map of &lsquo;dog beaches&rsquo; in Chonburi. In practice, " +
      "residents walk dogs on quieter sand at cool hours. The table below is what expat " +
      "owners report &mdash; not a guarantee of permission. If a stretch feels crowded " +
      "with sunbathers, move on.</p>" +
      '<div class="table-wrap"><table class="facts-table">' +
      "<thead><tr><th>Stretch</th><th>Typical use</th><th>Notes</th></tr></thead><tbody>" +
      "<tr><td><strong>Dongtan Beach</strong> (south Jomtien)</td>" +
      "<td>Most common dog-walking beach in Pattaya</td>" +
      "<td>Early morning and after sunset. Residential feel; many local owners. " +
      "See <a href=\"/area/jomtien.html\">Jomtien</a>.</td></tr>" +
      "<tr><td><strong>Jomtien Beach</strong> (central Jomtien)</td>" +
      "<td>Regular leashed walks at quiet hours</td>" +
      "<td>Busier than Dongtan by day. Stick to the edges or go before 08:00.</td></tr>" +
      "<tr><td><strong>Na Jomtien / north Jomtien</strong></td>" +
      "<td>Longer, quieter dawn walks</td>" +
      "<td>Less built-up than central Pattaya Beach. Good for a steady leashed stroll.</td></tr>" +
      "<tr><td><strong>Pattaya Beach</strong> (central tourist strip)</td>" +
      "<td>Generally avoid with a dog</td>" +
      "<td>Heavy foot traffic, vendors and sunbeds. Very few owners walk dogs here in daylight.</td></tr>" +
      "<tr><td><strong>North Pattaya / Wongamat</strong></td>" +
      "<td>Occasional quiet-hour walks</td>" +
      "<td>Rockier in places; check tide line and access from your soi. See " +
      "<a href=\"/area/wongamat.html\">Wongamat</a>.</td></tr>" +
      "<tr><td><strong>Bang Saray</strong></td>" +
      "<td>Quieter alternative south of Pattaya</td>" +
      "<td>Smaller village beach; still use cool hours and a lead. See " +
      "<a href=\"/area/bang-saray.html\">Bang Saray</a>.</td></tr>" +
      "</tbody></table></div>" },
    { h: "When to go — heat, tide and season", html:
      '<div class="table-wrap"><table class="facts-table">' +
      "<thead><tr><th>Factor</th><th>Practical rule</th></tr></thead><tbody>" +
      "<tr><td><strong>Best times</strong></td>" +
      "<td>Before 08:00 and from around 17:00 onward. Sand above ~30&deg;C burns paw pads in minutes.</td></tr>" +
      "<tr><td><strong>Midday</strong></td>" +
      "<td>Avoid March&ndash;May especially. If you must go out, keep it to shaded sois, not open sand.</td></tr>" +
      "<tr><td><strong>Hot sand test</strong></td>" +
      "<td>Hold the back of your hand on the sand for five seconds. If it hurts you, it hurts your dog.</td></tr>" +
      "<tr><td><strong>Monsoon (roughly May&ndash;Oct)</strong></td>" +
      "<td>More debris on the tideline, stronger currents and jellyfish risk after storms. Rinse your dog after any swim.</td></tr>" +
      "<tr><td><strong>Water quality</strong></td>" +
      "<td>After heavy rain, runoff can make near-shore water murky. Drinking seawater causes vomiting &mdash; bring fresh water.</td></tr>" +
      "</tbody></table></div>" +
      "<p>See <a href=\"/pet-emergency/heatstroke.html\">heatstroke</a>, " +
      "<a href=\"/pet-emergency/beach-and-sea-hazards.html\">beach &amp; sea hazards</a>, and " +
      "<a href=\"/owning-a-pet-in-pattaya/hot-climate-pet-care.html\">hot-climate pet care</a>.</p>" },
    { h: "Beach etiquette that keeps dogs welcome", html:
      "<ul><li><strong>Keep your dog on a lead</strong> unless you are certain " +
      "of recall and the stretch is empty.</li>" +
      "<li><strong>Always pick up</strong> &mdash; nothing turns a beach against " +
      "dogs faster than the opposite.</li>" +
      "<li><strong>Give people space</strong>, especially children, sunbathers and other " +
      "dogs.</li>" +
      "<li><strong>Street dogs</strong> share the sand too. Keep distance, do not let your dog " +
      "charge groups, and read our guide to " +
      "<a href=\"/pet-emergency/street-dog-encounters.html\">street-dog encounters</a>.</li>" +
      "<li><strong>No glass or food left behind</strong> &mdash; tideline rubbish is a paw and " +
      "mouth hazard.</li></ul>" },
    { h: "Safety in the sea", html:
      "<p>Many Pattaya dogs paddle happily in shallow water; not all can swim confidently. " +
      "Use a harness (not a collar) if your dog enters the sea, watch for tiring, and rinse " +
      "the coat after saltwater. Jellyfish stings and cut feet from hidden debris happen &mdash; " +
      "know your nearest " +
      "<a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour vet</a> before you go.</p>" }
  ],
  faqs: [
    ["Can I let my dog off the lead on the beach?",
     "<p>Only where the stretch is genuinely empty and your dog's recall is reliable. A lead is the considerate default — it keeps your dog away from other people, other dogs and beach hazards, and keeps dogs welcome there in general.</p>"],
    ["What time of day is best for a beach walk?",
     "<p>Early morning and around or after sunset. The sand is cooler, the sun is kinder, and the quieter beach is more relaxing for your dog anyway.</p>"],
    ["Are dogs banned from Pattaya beaches?",
     "<p>There is no single published city-wide ban we can point to, but central Pattaya Beach is impractical with a dog and attitudes vary by stretch. Dongtan and Jomtien at quiet hours are where owners actually go. Obey any posted signs and use common sense.</p>"],
    ["Can my dog swim in the sea at Jomtien?",
     "<p>Many dogs do, in shallow water at calm times. Watch currents after storms, rinse salt off afterwards, and never assume your dog can swim — use a harness and stay close.</p>"],
    ["What should I bring on a beach walk?",
     "<p>Lead, poop bags, fresh drinking water and a bowl, a towel to rinse sandy paws, and ideally booties or stick to cool hours if sand is hot. A mat helps if you stop at a beachfront cafe afterwards.</p>"]
  ],
  related: [
    { name: "Beach & sea hazards", path: "/pet-emergency/beach-and-sea-hazards.html", desc: "Jellyfish, hot sand and seawater risks." },
    { name: "Places to walk", path: "/dog-friendly-pattaya/parks.html", desc: "Beaches and quieter routes beyond the sand." },
    { name: "Heatstroke", path: "/pet-emergency/heatstroke.html", desc: "The hot-climate risk to plan around." },
    { name: "Street-dog encounters", path: "/pet-emergency/street-dog-encounters.html", desc: "Walking safely on the sand." }
  ]
}));

pages.push(df({
  slug: "cafes", crumb: "Dog-friendly cafes",
  title: "Dog-Friendly Cafes Pattaya | Outdoor Seating & Etiquette | PattayaPets",
  desc: "How to find dog-friendly cafes in Pattaya, what to look for, and the " +
    "etiquette that keeps you and your dog welcome back.",
  h1: "Dog-friendly cafes in Pattaya",
  lede: "Pattaya&rsquo;s cafe scene has grown fast, and a good share of it &mdash; " +
    "especially places with gardens and outdoor seating &mdash; is happy to see " +
    "a calm dog.",
  sections: [
    { h: "Where to look", html:
      "<p>Pet-friendly cafes cluster where there is room for outdoor seating: " +
      "the East Pattaya and " +
      "<a href=\"/area/jomtien.html\">Jomtien</a> sides have a number of garden-style and " +
      "open-air cafes that welcome dogs, some even keeping a water bowl on hand. " +
      "Cafes in tight indoor units in " +
      "<a href=\"/area/central-pattaya.html\">central Pattaya</a> are less likely to.</p>" +
      "<p>Because cafes open, close and change policy quickly, the reliable " +
      "approach is not a fixed list but a habit: look for outdoor or garden " +
      "seating, and simply ask. A polite &lsquo;is it okay to bring my dog?&rsquo; " +
      "at the door settles it. For a wider editorial guide to Pattaya&rsquo;s cafe " +
      "scene, see " +
      '<a href="https://pattaya-coffee.com/" target="_blank" rel="noopener noreferrer">' +
      "Pattaya Coffee</a> &mdash; then confirm dog policy before you go.</p>" },
    { h: "Cafe etiquette", html:
      "<ul><li>Choose an outdoor table and keep your dog settled beside you, on " +
      "a short lead.</li>" +
      "<li>Bring a mat or towel so your dog has its own spot.</li>" +
      "<li>Go when it is quiet, especially while your dog is still learning to " +
      "settle in public.</li>" +
      "<li>Bring water; do not assume the cafe provides it.</li>" +
      "<li>Leave if your dog is unsettled &mdash; one stressed dog can close a " +
      "door for every dog after it.</li></ul>" },
    { h: "Places that welcome dogs (confirm before you go)", html:
      "<p>Policies change. Always ask at the door. These are widely reported as " +
      "dog-friendly in Pattaya &mdash; we have not reviewed them as businesses, " +
      "only noted that expats and visitors regularly bring dogs:</p>" +
      "<ul>" +
      "<li><strong>Casa Myka</strong> &mdash; 352/103&ndash;104 Thappraya Road, " +
      "near Dongtan Beach. Terrace and courtyard seating; dogs are typically " +
      "welcomed outdoors and staff often bring water bowls. Open daily " +
      "08:00&ndash;22:00. Confirm where your dog can sit before you order.</li>" +
      "<li><strong>Pet and Play Cafe</strong> &mdash; Huai Yai / East Pattaya " +
      "area (Bang Lamung). A family cafe with a fenced dog run and outdoor " +
      "seating; visitors report bringing their own dogs. Worth the drive if you " +
      "want off-lead play in a secure area. Confirm hours and any entry rules " +
      "on arrival.</li>" +
      "<li><strong>Sandbar by the Sea</strong> &mdash; Dongtan Beach / Jomtien " +
      "beachfront. Outdoor dining with dogs reported as allowed on the terrace. " +
      "Good for a casual breakfast or lunch after an early beach walk.</li>" +
      "</ul>" +
      "<p>For more cafes city-wide, see " +
      '<a href="https://pattaya-coffee.com/" target="_blank" rel="noopener noreferrer">' +
      "Pattaya Coffee</a> &mdash; then confirm dog policy before you go. Know " +
      "another spot? <a href=\"/contact.html\">Send us a tip</a>.</p>" }
  ],
  faqs: [
    ["How do I know if a cafe allows dogs?",
     "<p>The simplest way is to ask at the door. Cafes with garden or open-air seating are the most likely to say yes. Policies change often, so asking beats relying on an old list."],
    ["Is it normal to bring a dog to a cafe in Pattaya?",
     "<p>At outdoor and garden cafes, a calm, leashed dog is widely accepted and increasingly common. Indoors, and at food-focused venues, assume not unless told otherwise.</p>"]
  ],
  related: [
    { name: "Dog-friendly restaurants", path: "/dog-friendly-pattaya/restaurants.html", desc: "Eating out with a dog — similar etiquette." },
    { name: "Places to walk", path: "/dog-friendly-pattaya/parks.html", desc: "Beaches and quieter routes beyond the cafe." },
    { name: "Street-dog encounters", path: "/pet-emergency/street-dog-encounters.html", desc: "Out and about with your dog." },
    { name: "Heatstroke", path: "/pet-emergency/heatstroke.html", desc: "The hot-climate risk to plan around." }
  ]
}));

pages.push(df({
  slug: "restaurants", crumb: "Dog-friendly restaurants",
  title: "Dog-Friendly Restaurants in Pattaya | Where to Eat With Your Dog | PattayaPets",
  desc: "Eating out with your dog in Pattaya — where it works, the etiquette, and " +
    "how to find restaurants that welcome a well-behaved dog.",
  h1: "Dog-friendly restaurants in Pattaya",
  lede: "Plenty of Pattaya restaurants with terraces, gardens or beachfront " +
    "seating are relaxed about a well-behaved dog at your feet.",
  sections: [
    { h: "Where it works", html:
      "<p>The pattern is the same as for cafes: <strong>outdoor seating</strong> " +
      "is the key. Beachfront restaurants, garden restaurants and the more " +
      "relaxed bar-and-grill style places &mdash; particularly around " +
      "<a href=\"/area/jomtien.html\">Jomtien</a> and East Pattaya &mdash; are the most likely to welcome a dog. " +
      "Air-conditioned, formal indoor dining rooms generally will not.</p>" +
      "<p>One example often mentioned as dog-friendly is The Dog House Bar &amp; " +
      "Grill at Jomtien Beach &mdash; as ever, confirm the current policy " +
      "directly. PattayaPets adds restaurants to this guide only once we are " +
      "confident of them. For a wider list of places to eat out in Pattaya, see the " +
      '<a href="https://pattaya-restaurant-guide.com/" target="_blank" rel="noopener noreferrer">' +
      "Pattaya Restaurant Guide</a> &mdash; always confirm dog policy before you go.</p>" },
    { h: "Etiquette for eating out with a dog", html:
      "<ul><li>Always ask first, and accept a no gracefully.</li>" +
      "<li>Pick an outdoor table with room for your dog to lie out of the way " +
      "of staff and other diners.</li>" +
      "<li>Feed your dog before you go so it is settled, not begging.</li>" +
      "<li>Keep it on a short lead and bring its own water.</li>" +
      "<li>Choose quieter times while your dog is still learning.</li></ul>" },
    { h: "Places that welcome dogs (confirm before you go)", html:
      "<p>Outdoor seating is the rule. These are commonly named as dog-friendly " +
      "around Pattaya &mdash; confirm policy when you arrive; we have not " +
      "reviewed them as dining experiences:</p>" +
      "<ul>" +
      "<li><strong>The Dog House Bar &amp; Grill</strong> &mdash; Jomtien Beach " +
      "Road area. Long-standing expat favourite for eating out with a dog on the " +
      "terrace. Still the name most people mention &mdash; verify current hours " +
      "and table rules.</li>" +
      "<li><strong>Sandbar by the Sea</strong> &mdash; Dongtan Beach. Beachfront " +
      "breakfast, brunch and lunch; dogs reported as welcome on outdoor tables.</li>" +
      "<li><strong>Casa Myka</strong> &mdash; Thappraya Road near Dongtan. More " +
      "cafe than full restaurant, but serves breakfast and lunch from late morning; " +
      "dogs welcomed on outdoor seating.</li>" +
      "<li><strong>Pet and Play Cafe</strong> &mdash; Huai Yai / East Pattaya. " +
      "Homemade meals plus a fenced area where dogs can run; family-oriented.</li>" +
      "</ul>" +
      "<p>For a wider editorial list of restaurants in Pattaya, see the " +
      '<a href="https://pattaya-restaurant-guide.com/" target="_blank" rel="noopener noreferrer">' +
      "Pattaya Restaurant Guide</a> &mdash; always ask about dogs before you book. " +
      "Spot another good terrace? <a href=\"/contact.html\">Tell us</a>.</p>" }
  ],
  faqs: [
    ["Can I take my dog to a beachfront restaurant in Pattaya?",
     "<p>Often yes, at outdoor tables — beachfront and garden restaurants tend to be the most relaxed. Always ask when you arrive, and choose a table where your dog can settle out of the way.</p>"],
    ["Will restaurants provide water for my dog?",
     "<p>Some will, many will not. Bring your own travel bowl and water so your dog is comfortable regardless.</p>"]
  ],
  related: [
    { name: "Dog-friendly cafes", path: "/dog-friendly-pattaya/cafes.html", desc: "Outdoor seating and similar etiquette." },
    { name: "Places to walk", path: "/dog-friendly-pattaya/parks.html", desc: "Beaches and quieter routes after dinner." },
    { name: "Street-dog encounters", path: "/pet-emergency/street-dog-encounters.html", desc: "Out and about with your dog." },
    { name: "Heatstroke", path: "/pet-emergency/heatstroke.html", desc: "The hot-climate risk to plan around." }
  ]
}));

pages.push(df({
  slug: "hotels", crumb: "Dog-friendly hotels",
  title: "Dog-Friendly Hotels Pattaya | Pet-Friendly Stays & Booking Tips | PattayaPets",
  desc: "Finding pet-friendly accommodation in Pattaya, what to confirm before " +
    "you book, and the questions that avoid a nasty surprise at check-in.",
  h1: "Dog-friendly hotels in Pattaya",
  lede: "Pet-friendly accommodation in Pattaya exists &mdash; but &lsquo;pet " +
    "friendly&rsquo; means different things at different properties, so the " +
    "booking call matters.",
  updated: "2026-05-31",
  updatedLabel: "31 May 2026",
  verify: "Pet policies, fees and breed rules change without notice. Always confirm " +
    "directly with the property before you pay &mdash; a &lsquo;pet friendly&rsquo; filter " +
    "on a booking site is not a contract. PattayaPets has not reviewed these hotels as " +
    "guest experiences; we list them because they publish or widely report pet policies.",
  sections: [
    { h: "What to confirm before you book", html:
      "<p>&lsquo;Pet friendly&rsquo; on a booking site is not enough. Before you pay, " +
      "get written confirmation from the property on:</p>" +
      '<div class="table-wrap"><table class="facts-table">' +
      "<thead><tr><th>Question</th><th>Why it matters</th></tr></thead><tbody>" +
      "<tr><td>Size, breed and number limits</td>" +
      "<td>Some hotels cap weight (e.g. 12&nbsp;kg) or ban specific breeds.</td></tr>" +
      "<tr><td>Daily fee and deposit</td>" +
      "<td>Ranges from a few hundred baht per night to weight-tier daily charges plus a damage deposit.</td></tr>" +
      "<tr><td>Ground-floor / designated rooms only?</td>" +
      "<td>Many properties restrict pets to specific room types or floors.</td></tr>" +
      "<tr><td>Can the dog be left alone in the room?</td>" +
      "<td>Often no, or hourly charges apply if barking is reported.</td></tr>" +
      "<tr><td>Pool, restaurant and beach rules</td>" +
      "<td>Common exclusions &mdash; assume off-limits unless told otherwise.</td></tr>" +
      "<tr><td>Vaccination proof</td>" +
      "<td>Rabies certificate on arrival is commonly required.</td></tr>" +
      "</tbody></table></div>" },
    { h: "Properties that accept pets (confirm before you book)", html:
      "<p>Policies change. These properties publish or are widely reported as accepting " +
      "dogs &mdash; treat as starting points, not guarantees:</p>" +
      "<ul>" +
      "<li><strong>Rabbit Resort</strong> &mdash; Dongtan Beach, Jomtien. One of the best-known " +
      "pet-friendly resorts in Pattaya; Thai-village style on the sand. Their published pet " +
      "policy includes weight-tier daily fees, a damage deposit, ground-floor rooms only, " +
      "leash rules and breed restrictions. Read the full policy on " +
      '<a href="https://rabbitresort.com/testimonials-2/" target="_blank" rel="noopener noreferrer">' +
      "Rabbit Resort&rsquo;s website</a> and confirm by phone before booking.</li>" +
      "<li><strong>Hard Rock Hotel Pattaya</strong> &mdash; Central Pattaya. Runs the " +
      "&lsquo;Unleashed&rsquo; pet programme: weight limits, nightly fee, designated pet zones " +
      "and book-direct requirement. Details on " +
      '<a href="https://hotel.hardrock.com/pattaya/petfriendly.aspx" target="_blank" rel="noopener noreferrer">' +
      "Hard Rock Pattaya&rsquo;s pet page</a>. Not a beach-resort stay, but useful if you " +
      "want city access with a small dog.</li>" +
      "<li><strong>La Miniera Pool Villas</strong> &mdash; East Pattaya (Bang Lamung). " +
      "Dedicated pet-friendly pool villas with published surcharges by dog weight and pet " +
      "amenities. See " +
      '<a href="https://www.laminierapattaya.com/our-accommodations-villas/villas/pet-friendly-pool-villa-family/" target="_blank" rel="noopener noreferrer">' +
      "La Miniera&rsquo;s pet villa page</a>. Good for families who want private pool space.</li>" +
      "<li><strong>Somerset Pattaya</strong> &mdash; Central Pattaya. Frequently listed on " +
      '<a href="https://www.booking.com/pets/city/th/pattaya.html" target="_blank" rel="noopener noreferrer">' +
      "Booking.com&rsquo;s pet-friendly filter</a>; guests report designated pet-friendly floors. " +
      "Confirm current policy on your booking channel.</li>" +
      "<li><strong>Villa rentals (Tortuga Villas, 4poolvillas and similar)</strong> &mdash; " +
      "Private pool villas around Pattaya often allow pets when hotels will not. Read the " +
      "individual listing&rsquo;s pet clause; owner rules override generic platform filters.</li>" +
      "</ul>" +
      "<p>For more options, filter " +
      '<a href="https://www.booking.com/pets/city/th/pattaya.html" target="_blank" rel="noopener noreferrer">' +
      "Booking.com&rsquo;s pet-friendly Pattaya list</a> &mdash; then message each property " +
      "before you pay. Know another genuinely pet-friendly stay? " +
      "<a href=\"/contact.html\">Tell us</a>.</p>" },
    { h: "Be a guest they will take again", html:
      "<p>Bring bedding, never leave a barking dog alone, keep off furniture, and clean up " +
      "everywhere you walk on the property. Considerate guests are why hotels stay pet-friendly.</p>" +
      "<p>Many Jomtien stays are walking distance from " +
      "<a href=\"/dog-friendly-pattaya/beaches.html\">dog-friendly beaches</a> at cool hours. " +
      "Staying longer? See " +
      "<a href=\"/dog-friendly-pattaya/condos.html\">dog-friendly condos</a> and " +
      "<a href=\"/owning-a-pet-in-pattaya/pet-friendly-housing.html\">pet-friendly housing</a>.</p>" }
  ],
  faqs: [
    ["Are there really pet-friendly hotels in Pattaya?",
     "<p>Yes — from dedicated resorts like Rabbit Resort on Dongtan Beach to city hotels with published pet programmes and villa rentals. The key is to read the actual policy and confirm in writing before you pay.</p>"],
    ["Can I leave my dog alone in the hotel room?",
     "<p>Many properties forbid it or charge hourly fees if the dog barks. Rabbit Resort, for example, publishes an hourly charge for unattended pets. Always check the rule and plan your day around your dog.</p>"],
    ["How much do hotels charge for pets in Pattaya?",
     "<p>It varies widely: from a few hundred baht per night at some city hotels to weight-tier daily fees plus deposits at resorts. There is no standard rate — get the full figure in writing before booking.</p>"],
    ["Do I need vaccination papers at check-in?",
     "<p>Often yes — rabies vaccination proof is commonly required at pet-friendly properties. Carry your vaccination booklet or vet certificate even if nobody asked when you booked.</p>"],
    ["Is Jomtien or central Pattaya better with a dog?",
     "<p>Jomtien and Dongtan suit dogs better day to day: quieter beach walks and more pet-aware guesthouses. Central Pattaya has some pet-friendly hotels but heavy traffic and fewer easy walk routes.</p>"]
  ],
  related: [
    { name: "Dog-friendly condos", path: "/dog-friendly-pattaya/condos.html", desc: "If you are staying longer than a holiday." },
    { name: "Travelling in Thailand", path: "/owning-a-pet-in-pattaya/travelling-in-thailand.html", desc: "Pet-friendly stays beyond Pattaya." },
    { name: "Pet-friendly housing", path: "/owning-a-pet-in-pattaya/pet-friendly-housing.html", desc: "Renting with a dog in Pattaya." },
    { name: "Dog-friendly beaches", path: "/dog-friendly-pattaya/beaches.html", desc: "Walks near many pet-friendly stays." }
  ]
}));

pages.push(df({
  slug: "condos", crumb: "Dog-friendly condos",
  title: "Dog-Friendly Condos Pattaya | Renting With a Dog | PattayaPets",
  desc: "Renting a condo in Pattaya with a dog: why most condos are no-pet, how " +
    "to find a pet-friendly building, and what to check before you sign.",
  h1: "Renting a dog-friendly condo in Pattaya",
  lede: "This is the one that surprises new arrivals: in Pattaya, most condo " +
    "buildings do not allow pets at all. Finding one that does takes a deliberate " +
    "search.",
  updated: "2026-05-31",
  updatedLabel: "31 May 2026",
  verify: "Condominium regulations and juristic-office enforcement vary by building. " +
    "A landlord&rsquo;s verbal OK does not override a no-pet rule in the building bylaws. " +
    "Get the building&rsquo;s written pet policy before you sign a lease or pay a deposit.",
  sections: [
    { h: "Two permissions — building and landlord", html:
      "<p>A great many Pattaya condominium buildings have <strong>no-pet rules</strong> in " +
      "their registered regulations. A friendly landlord saying &lsquo;yes&rsquo; is not " +
      "enough &mdash; if the juristic office enforces a ban, you and your dog can be " +
      "required to leave regardless of what the unit owner agreed.</p>" +
      '<div class="table-wrap"><table class="facts-table">' +
      "<thead><tr><th>Who says yes</th><th>What it means</th></tr></thead><tbody>" +
      "<tr><td><strong>Building / juristic office</strong></td>" +
      "<td>The rule that actually matters. Ask for written confirmation that dogs are permitted, " +
      "with any size or number limits.</td></tr>" +
      "<tr><td><strong>Unit owner / agent</strong></td>" +
      "<td>Must agree to your dog specifically. Get pet permission written into the lease.</td></tr>" +
      "<tr><td><strong>Neighbours</strong></td>" +
      "<td>Even where pets are allowed, barking and lift mess can trigger complaints. " +
      "Ground-floor or villa-style units reduce friction.</td></tr>" +
      "</tbody></table></div>" },
    { h: "Where pet-friendly rentals are easier to find", html:
      "<p>High-rise towers in central Pattaya and Pratumnak are the hardest. Owners " +
      "more often succeed in:</p>" +
      "<ul>" +
      "<li><strong>Low-rise and village-style projects</strong> in Huai Yai, East Pattaya " +
      "and Bang Lamung &mdash; fewer shared lifts, more ground access.</li>" +
      "<li><strong>House and townhouse rentals</strong> &mdash; no juristic office, but check " +
      "the lease still allows pets.</li>" +
      "<li><strong>Older, smaller condo blocks</strong> in Naklua and Jomtien &mdash; sometimes " +
      "more flexible than new high-rises, but still verify in writing.</li>" +
      "<li><strong>Pet-filtered searches</strong> on Facebook groups, Thai property portals " +
      "and agents who specialise in expat rentals &mdash; say &lsquo;dog, X kg&rsquo; on the " +
      "first message so nobody wastes time.</li>" +
      "</ul>" +
      "<p>See also <a href=\"/area/jomtien.html\">Jomtien</a> and " +
      "<a href=\"/owning-a-pet-in-pattaya/pet-friendly-housing.html\">pet-friendly housing</a> " +
      "for the fuller renting guide.</p>" },
    { h: "Before you sign — checklist", html:
      '<div class="table-wrap"><table class="facts-table">' +
      "<thead><tr><th>Check</th><th>Why</th></tr></thead><tbody>" +
      "<tr><td>Written building pet policy</td>" +
      "<td>Not just the agent&rsquo;s WhatsApp message.</td></tr>" +
      "<tr><td>Pet deposit and monthly surcharge</td>" +
      "<td>Common range: one extra month&rsquo;s rent as deposit; some buildings add a monthly pet fee.</td></tr>" +
      "<tr><td>Size / breed limits</td>" +
      "<td>Large breeds are rejected more often than small dogs.</td></tr>" +
      "<tr><td>Lift and common-area rules</td>" +
      "<td>Some buildings require dogs in carriers in lifts.</td></tr>" +
      "<tr><td>Walk route nearby</td>" +
      "<td>Ground-floor access to a quiet soi or cool-hour beach walk saves daily stress.</td></tr>" +
      "<tr><td><a href=\"/owning-a-pet-in-pattaya/dog-registration-thailand.html\">Dog registration</a></td>" +
      "<td>Separate from the lease &mdash; you still need to comply with local dog-keeping rules.</td></tr>" +
      "</tbody></table></div>" +
      "<p>If the owner refuses to put pet permission in the lease, walk away. Verbal promises " +
      "do not help when a neighbour complains to the juristic office.</p>" }
  ],
  faqs: [
    ["Why do so many Pattaya condos not allow pets?",
     "<p>Many condominium buildings simply have no-pet rules in their regulations — often driven by lift hygiene, barking complaints and insurance. It is one of the most common frustrations for pet owners here.</p>"],
    ["The owner says it is fine — is that enough?",
     "<p>No. If the building's regulations forbid pets, the owner's permission does not override that. Confirm the building allows pets and put the agreement in your lease.</p>"],
    ["How much extra will a pet-friendly condo cost?",
     "<p>Expect a narrower choice and sometimes a higher rent or pet deposit. There is no fixed market rate — one extra month's deposit is common, and some buildings add a monthly pet surcharge.</p>"],
    ["Can I register my dog if the condo allows pets?",
     "<p>Registration with the local authority is a separate legal requirement from your lease. See our guide to dog registration in Thailand for the paperwork your district expects.</p>"],
    ["Is a house rental better than a condo with a dog?",
     "<p>Often yes — no juristic office, easier ground access, and fewer neighbour complaints about lifts. The trade-off is location and security; many owners in Pattaya choose a village house in East Pattaya or Huai Yai for exactly this reason.</p>"]
  ],
  related: [
    { name: "Pet-friendly housing", path: "/owning-a-pet-in-pattaya/pet-friendly-housing.html", desc: "The fuller guide to housing with a pet." },
    { name: "Dog registration & the law", path: "/owning-a-pet-in-pattaya/dog-registration-thailand.html", desc: "Rules for keeping a dog legally." },
    { name: "Where to walk your dog", path: "/owning-a-pet-in-pattaya/where-to-walk-your-dog.html", desc: "Building a routine from your building." },
    { name: "Dog-friendly hotels", path: "/dog-friendly-pattaya/hotels.html", desc: "If you are staying before you rent." }
  ]
}));

pages.push(df({
  slug: "parks", crumb: "Places to walk",
  title: "Where to Walk a Dog in Pattaya | Beaches, Sois & Green Space | PattayaPets",
  desc: "Where to walk a dog in Pattaya: the beach, quiet sois and green space — " +
    "and an honest look at the city's limited formal dog parks.",
  h1: "Where to walk your dog in Pattaya",
  lede: "Pattaya is not a city of grand parks, but with a bit of local knowledge " +
    "there are good options for a daily walk.",
  sections: [
    { h: "The honest picture", html:
      "<p>Pattaya does not have an abundance of large formal parks, and dedicated " +
      "fenced dog parks are scarce. What it does have is a long beach, a network " +
      "of quiet residential sois, and some green and open spaces &mdash; enough " +
      "for a good walking routine once you know your neighbourhood.</p>" },
    { h: "Good options for a daily walk", html:
      "<ul><li><strong>The beach</strong>, at cool hours &mdash; especially the " +
      "quieter Jomtien and Dongtan stretches. See " +
      "<a href=\"/dog-friendly-pattaya/beaches.html\">dog-friendly beaches</a>.</li>" +
      "<li><strong>Quiet residential sois</strong> &mdash; the calm side streets " +
      "of your own neighbourhood are often the most practical everyday walk.</li>" +
      "<li><strong>Green and open spaces</strong> &mdash; Pattaya has parks and " +
      "open areas; check whether dogs are permitted and keep yours leashed.</li>" +
      "<li><strong>Pratumnak hill</strong> has quieter, leafier roads than the " +
      "city core &mdash; see " +
      "<a href=\"/area/pratumnak.html\">pet services in Pratumnak</a>.</li></ul>" },
    { h: "Named routes owners actually use", html:
      "<p>These are not official dog parks &mdash; they are routes and spots expat " +
      "owners report using regularly. Rules and enforcement vary; keep your dog " +
      "leashed unless you are in a clearly private, fenced space:</p>" +
      "<ul>" +
      "<li><strong>Dongtan Beach (Jomtien)</strong> &mdash; the stretch between " +
      "Dongtan and Jomtien is the most common early-morning beach walk. Go before " +
      "08:00 when sand is cool and crowds are thin.</li>" +
      "<li><strong>Pratumnak Hill roads</strong> &mdash; the quieter sois climbing " +
      "toward Big Buddha (Khao Phra Bat) offer shade and less traffic than Beach " +
      "Road. Stick to side streets, not temple grounds.</li>" +
      "<li><strong>North Jomtien / Na Jomtien</strong> &mdash; longer, quieter " +
      "beach than central Pattaya; good for a leashed stroll at dawn.</li>" +
      "<li><strong>Your own condo soi</strong> &mdash; often the most reliable " +
      "daily walk. Introduce yourself to neighbours; a polite dog owner keeps " +
      "access open for everyone.</li>" +
      "<li><strong>Pet and Play Cafe (Huai Yai)</strong> &mdash; not a public park, " +
      "but the fenced run is the closest thing to off-lead play many owners find. " +
      "See <a href=\"/dog-friendly-pattaya/cafes.html\">dog-friendly cafes</a>.</li>" +
      "</ul>" +
      "<p>Formal city parks often restrict dogs. If you see a sign, obey it &mdash; " +
      "fines and neighbour complaints are real.</p>" },
    { h: "Walk smart in the climate", html:
      "<p>Whatever route you choose, the climate rules apply: walk early or " +
      "late, avoid hot pavement, carry water, and keep it shorter on the " +
      "hottest days. See <a href=\"/owning-a-pet-in-pattaya/where-to-walk-your-dog.html\">" +
      "where to walk your dog</a>, " +
      "<a href=\"/owning-a-pet-in-pattaya/hot-climate-pet-care.html\">hot-climate pet " +
      "care</a>, and " +
      "<a href=\"/pet-emergency/street-dog-encounters.html\">street-dog encounters</a>.</p>" }
  ],
  faqs: [
    ["Are there dog parks in Pattaya?",
     "<p>Dedicated fenced dog parks are scarce. Most owners build a routine around the beach at cool hours, quiet sois and open green spaces. Always check whether dogs are allowed in a given park and keep yours leashed.</p>"],
    ["Where is the best everyday walk?",
     "<p>For most owners it is a mix: the quiet sois near home for daily walks, and the cooler ends of the beach for something longer. Pratumnak's leafier roads are pleasant too.</p>"]
  ],
  related: [
    { name: "Travelling in Thailand", path: "/owning-a-pet-in-pattaya/travelling-in-thailand.html", desc: "Domestic trips with your dog." },
    { name: "Dog-friendly beaches", path: "/dog-friendly-pattaya/beaches.html", desc: "Cool-hour walks on the sand." },
    { name: "Beach & sea hazards", path: "/pet-emergency/beach-and-sea-hazards.html", desc: "Jellyfish, hot sand and seawater risks." },
    { name: "Heatstroke", path: "/pet-emergency/heatstroke.html", desc: "The hot-climate risk to plan around." }
  ]
}));

module.exports = pages;
