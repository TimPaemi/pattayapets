"use strict";
/* Cluster: Dog-friendly Pattaya */

const { article, hub } = require("../guidekit.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const CLUSTER = { name: "Dog-friendly Pattaya", path: "/dog-friendly-pattaya/" };
const SUB = [GUIDES, CLUSTER];

const pages = [];

pages.push(hub({
  path: "/dog-friendly-pattaya/",
  title: "Dog-friendly Pattaya | PattayaPets",
  desc: "Where dogs are welcome in Pattaya: dog-friendly beaches, cafes, " +
    "restaurants, hotels, condos and places to walk. Honest, practical guidance.",
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
    "<a href=\"/contact.html\">Tell us</a>.</p>",
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
    { name: "Owning a pet in Pattaya", path: "/owning-a-pet-in-pattaya/", desc: "Day-to-day life, costs and housing with a dog." },
    { name: "Dog registration in Thailand", path: "/owning-a-pet-in-pattaya/dog-registration-thailand.html", desc: "The rules for keeping a dog legally." },
    { name: "Street-dog encounters", path: "/pet-emergency/street-dog-encounters.html", desc: "What to do when walking your dog." },
    { name: "The dog owner&rsquo;s hub", path: "/dogs/", desc: "Dog-specific care, training and health guides." }
  ]
}));

function df(o) {
  return article({
    path: "/dog-friendly-pattaya/" + o.slug + ".html",
    title: o.title, desc: o.desc, crumb: o.crumb, breadcrumbs: SUB,
    eyebrow: "Dog-friendly Pattaya",
    h1: o.h1, lede: o.lede,
    sections: o.sections, faqs: o.faqs,
    related: o.related || [
      { name: "Dog-friendly Pattaya", path: "/dog-friendly-pattaya/", desc: "Back to the cluster hub." },
      { name: "Where to walk your dog", path: "/owning-a-pet-in-pattaya/where-to-walk-your-dog.html", desc: "Building a safe daily routine." },
      { name: "Street-dog encounters", path: "/pet-emergency/street-dog-encounters.html", desc: "Out and about with your dog." },
      { name: "Pet health in Pattaya", path: "/pet-health-pattaya/", desc: "Heat, ticks and tropical-climate risks." }
    ]
  });
}

pages.push(df({
  slug: "beaches", crumb: "Dog-friendly beaches",
  title: "Dog-friendly beaches in Pattaya & Jomtien | PattayaPets",
  desc: "Where you can walk a dog on the beach around Pattaya and Jomtien, the " +
    "etiquette that keeps dogs welcome, and how to do it safely in the heat.",
  h1: "Dog-friendly beaches in Pattaya",
  lede: "A beach walk at the right time of day is one of the real pleasures of " +
    "owning a dog in Pattaya &mdash; if you do it considerately.",
  sections: [
    { h: "Where dogs walk", html:
      "<p>The long stretch of <strong>Jomtien Beach</strong>, including the " +
      "<strong>Dongtan</strong> end, is where you will most often see residents " +
      "walking dogs &mdash; particularly in the cooler early-morning and " +
      "after-sunset hours. It is a relaxed, local-feeling stretch well suited to " +
      "a steady walk. See also pet services in " +
      "<a href=\"/area/jomtien.html\">Jomtien</a>.</p>" +
      "<p>Beach access for dogs is not formally signposted everywhere, and " +
      "attitudes vary by stretch and by time of day. The busy, central tourist " +
      "sections of Pattaya Beach are far less suitable than the quieter ends. " +
      "Read the spot you are in: if it is calm and other dogs are around, you " +
      "are probably fine; if it is packed with sunbathers and vendors, move on.</p>" },
    { h: "Beach etiquette that keeps dogs welcome", html:
      "<ul><li><strong>Keep your dog on a lead</strong> unless you are certain " +
      "of recall and the stretch is empty.</li>" +
      "<li><strong>Always pick up</strong> &mdash; nothing turns a beach against " +
      "dogs faster than the opposite.</li>" +
      "<li><strong>Give people space</strong>, especially children and other " +
      "dogs.</li>" +
      "<li><strong>Go at cool hours</strong> &mdash; sand gets hot enough to " +
      "burn paw pads, and midday sun is dangerous.</li></ul>" },
    { h: "Safety in the heat and the sea", html:
      "<p>Hot sand burns paws &mdash; test it with the back of your hand. Bring " +
      "fresh drinking water; dogs should not drink seawater. Rinse the coat " +
      "after a swim, watch for tiring in the water, and keep the whole outing " +
      "short in hot weather. See our guide to " +
      "<a href=\"/pet-emergency/heatstroke.html\">heatstroke</a>.</p>" }
  ],
  faqs: [
    ["Can I let my dog off the lead on the beach?",
     "<p>Only where the stretch is genuinely empty and your dog's recall is reliable. A lead is the considerate default — it keeps your dog away from other people, other dogs and beach hazards, and keeps dogs welcome there in general.</p>"],
    ["What time of day is best for a beach walk?",
     "<p>Early morning and around or after sunset. The sand is cooler, the sun is kinder, and the quieter beach is more relaxing for your dog anyway.</p>"]
  ],
  related: [
    { name: "Places to walk", path: "/dog-friendly-pattaya/parks.html", desc: "Beaches and quieter routes beyond the sand." },
    { name: "Street-dog encounters", path: "/pet-emergency/street-dog-encounters.html", desc: "What to do when other dogs are around." },
    { name: "Dog-friendly Pattaya", path: "/dog-friendly-pattaya/", desc: "Back to the cluster hub." },
    { name: "Heatstroke", path: "/pet-emergency/heatstroke.html", desc: "The hot-climate risk to plan around." }
  ]
}));

pages.push(df({
  slug: "cafes", crumb: "Dog-friendly cafes",
  title: "Dog-friendly cafes in Pattaya | PattayaPets",
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
      "at the door settles it.</p>" },
    { h: "Cafe etiquette", html:
      "<ul><li>Choose an outdoor table and keep your dog settled beside you, on " +
      "a short lead.</li>" +
      "<li>Bring a mat or towel so your dog has its own spot.</li>" +
      "<li>Go when it is quiet, especially while your dog is still learning to " +
      "settle in public.</li>" +
      "<li>Bring water; do not assume the cafe provides it.</li>" +
      "<li>Leave if your dog is unsettled &mdash; one stressed dog can close a " +
      "door for every dog after it.</li></ul>" },
    { h: "Help us build the list", html:
      "<p>PattayaPets is compiling dog-friendly cafes the honest way &mdash; " +
      "confirmed, not copied. If you have a favourite that genuinely welcomes " +
      "dogs, <a href=\"/contact.html\">send us a tip</a>.</p>" }
  ],
  faqs: [
    ["How do I know if a cafe allows dogs?",
     "<p>The simplest way is to ask at the door. Cafes with garden or open-air seating are the most likely to say yes. Policies change often, so asking beats relying on an old list."],
    ["Is it normal to bring a dog to a cafe in Pattaya?",
     "<p>At outdoor and garden cafes, a calm, leashed dog is widely accepted and increasingly common. Indoors, and at food-focused venues, assume not unless told otherwise.</p>"]
  ],
  related: [
    { name: "Dog-friendly restaurants", path: "/dog-friendly-pattaya/restaurants.html", desc: "Eating out with a dog — similar etiquette." },
    { name: "Dog-friendly Pattaya", path: "/dog-friendly-pattaya/", desc: "Back to the cluster hub." },
    { name: "Owning a pet in Pattaya", path: "/owning-a-pet-in-pattaya/", desc: "Day-to-day life with a dog here." },
    { name: "Heatstroke", path: "/pet-emergency/heatstroke.html", desc: "The hot-climate risk to plan around." }
  ]
}));

pages.push(df({
  slug: "restaurants", crumb: "Dog-friendly restaurants",
  title: "Dog-friendly restaurants in Pattaya | PattayaPets",
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
      "confident of them.</p>" },
    { h: "Etiquette for eating out with a dog", html:
      "<ul><li>Always ask first, and accept a no gracefully.</li>" +
      "<li>Pick an outdoor table with room for your dog to lie out of the way " +
      "of staff and other diners.</li>" +
      "<li>Feed your dog before you go so it is settled, not begging.</li>" +
      "<li>Keep it on a short lead and bring its own water.</li>" +
      "<li>Choose quieter times while your dog is still learning.</li></ul>" },
    { h: "Help us build the list", html:
      "<p>PattayaPets adds restaurants here only once we are confident they " +
      "genuinely welcome dogs &mdash; not copied from old lists. If you have a " +
      "favourite outdoor spot, <a href=\"/contact.html\">send us a tip</a>.</p>" }
  ],
  faqs: [
    ["Can I take my dog to a beachfront restaurant in Pattaya?",
     "<p>Often yes, at outdoor tables — beachfront and garden restaurants tend to be the most relaxed. Always ask when you arrive, and choose a table where your dog can settle out of the way.</p>"],
    ["Will restaurants provide water for my dog?",
     "<p>Some will, many will not. Bring your own travel bowl and water so your dog is comfortable regardless.</p>"]
  ],
  related: [
    { name: "Dog-friendly cafes", path: "/dog-friendly-pattaya/cafes.html", desc: "Outdoor seating and similar etiquette." },
    { name: "Dog-friendly Pattaya", path: "/dog-friendly-pattaya/", desc: "Back to the cluster hub." },
    { name: "Owning a pet in Pattaya", path: "/owning-a-pet-in-pattaya/", desc: "Day-to-day life with a dog here." },
    { name: "Heatstroke", path: "/pet-emergency/heatstroke.html", desc: "The hot-climate risk to plan around." }
  ]
}));

pages.push(df({
  slug: "hotels", crumb: "Dog-friendly hotels",
  title: "Dog-friendly hotels in Pattaya | PattayaPets",
  desc: "Finding pet-friendly accommodation in Pattaya, what to confirm before " +
    "you book, and the questions that avoid a nasty surprise at check-in.",
  h1: "Dog-friendly hotels in Pattaya",
  lede: "Pet-friendly accommodation in Pattaya exists &mdash; but &lsquo;pet " +
    "friendly&rsquo; means different things at different properties, so the " +
    "booking call matters.",
  sections: [
    { h: "What is out there", html:
      "<p>A range of Pattaya accommodation accepts pets, from relaxed guesthouses " +
      "to resort-style properties &mdash; the Jomtien and Dongtan side, with its " +
      "more residential feel, has long been popular with pet owners. Rabbit " +
      "Resort on Dongtan Beach, for instance, is frequently described as " +
      "pet-friendly. See also " +
      "<a href=\"/area/jomtien.html\">pet services in Jomtien</a>. Listings change, so treat any name as a starting point and " +
      "confirm directly.</p>" },
    { h: "Confirm before you book", html:
      "<p>&lsquo;Pet friendly&rsquo; on a booking site is not a contract. Before " +
      "you pay, confirm in writing with the property:</p>" +
      "<ul><li>Is my dog&rsquo;s <strong>size and breed</strong> accepted?</li>" +
      "<li>Is there a <strong>pet fee or deposit</strong>?</li>" +
      "<li>Can the dog be <strong>left alone</strong> in the room, or not?</li>" +
      "<li>Which <strong>areas</strong> are off-limits (pool, restaurant, " +
      "indoors)?</li>" +
      "<li>Is there <strong>somewhere to walk</strong> and toilet the dog " +
      "nearby?</li></ul>" },
    { h: "Be a guest they will take again", html:
      "<p>Bring your dog&rsquo;s bedding, never leave a dog that will bark or " +
      "scratch alone in a room, keep it off the furniture, and clean up " +
      "everywhere. Considerate pet guests are why properties stay pet-friendly.</p>" +
      "<p>Staying longer? See also " +
      "<a href=\"/dog-friendly-pattaya/condos.html\">dog-friendly condos</a> and " +
      "<a href=\"/owning-a-pet-in-pattaya/pet-friendly-housing.html\">pet-friendly " +
      "housing</a>.</p>" }
  ],
  faqs: [
    ["Are there really pet-friendly hotels in Pattaya?",
     "<p>Yes — a range of properties accept pets, particularly around Jomtien and Dongtan. The key is to confirm the specific policy (size limits, fees, rules) directly with the property before booking.</p>"],
    ["Can I leave my dog alone in the hotel room?",
     "<p>Many properties do not allow it, and even where it is allowed it is a bad idea if your dog may bark or panic. Always check the rule, and plan around your dog rather than leaving it stressed.</p>"]
  ],
  related: [
    { name: "Dog-friendly condos", path: "/dog-friendly-pattaya/condos.html", desc: "If you are staying longer than a holiday." },
    { name: "Pet-friendly housing", path: "/owning-a-pet-in-pattaya/pet-friendly-housing.html", desc: "Renting with a dog in Pattaya." },
    { name: "Dog-friendly Pattaya", path: "/dog-friendly-pattaya/", desc: "Back to the cluster hub." },
    { name: "Dog-friendly beaches", path: "/dog-friendly-pattaya/beaches.html", desc: "Walks near many pet-friendly stays." }
  ]
}));

pages.push(df({
  slug: "condos", crumb: "Dog-friendly condos",
  title: "Dog-friendly condos in Pattaya | PattayaPets",
  desc: "Renting a condo in Pattaya with a dog: why most condos are no-pet, how " +
    "to find a pet-friendly building, and what to check before you sign.",
  h1: "Renting a dog-friendly condo in Pattaya",
  lede: "This is the one that surprises new arrivals: in Pattaya, most condo " +
    "buildings do not allow pets at all. Finding one that does takes a deliberate " +
    "search.",
  sections: [
    { h: "The reality of condo rules", html:
      "<p>A great many Pattaya condominium buildings have <strong>no-pet " +
      "rules</strong> written into the building regulations. A friendly landlord " +
      "saying &lsquo;yes&rsquo; is not enough &mdash; if the building&rsquo;s " +
      "rules forbid pets, you and your dog can be made to leave regardless of " +
      "what the unit&rsquo;s owner agreed.</p>" +
      "<p>So there are two permissions to secure: the <strong>building</strong> " +
      "must allow pets, and the <strong>unit&rsquo;s owner</strong> must agree.</p>" },
    { h: "Finding a pet-friendly building", html:
      "<ul><li>Tell any agent up front that pet-friendly is non-negotiable, and " +
      "the dog&rsquo;s size &mdash; it narrows the search honestly.</li>" +
      "<li>Lower-rise and house-style or village rentals are often easier than " +
      "big high-rise condos.</li>" +
      "<li>Ask to see the <strong>building&rsquo;s</strong> pet policy in " +
      "writing, not just the landlord&rsquo;s word.</li>" +
      "<li>Get the pet permission written into the lease.</li></ul>" },
    { h: "Before you sign", html:
      "<p>Confirm any pet deposit, size or number limits, and rules about shared " +
      "areas and lifts. Think too about the practicalities of the building for a " +
      "dog &mdash; ground-floor access, somewhere nearby to walk, and shade. Our " +
      "guide to <a href=\"/owning-a-pet-in-pattaya/pet-friendly-housing.html\">" +
      "pet-friendly housing</a> goes further.</p>" }
  ],
  faqs: [
    ["Why do so many Pattaya condos not allow pets?",
     "<p>Many condominium buildings simply have no-pet rules in their regulations. It is one of the most common frustrations for pet owners here — which is why you should search specifically for pet-friendly buildings and get it in writing.</p>"],
    ["The owner says it is fine — is that enough?",
     "<p>No. If the building's regulations forbid pets, the owner's permission does not override that. Confirm the building allows pets and put the agreement in your lease.</p>"]
  ],
  related: [
    { name: "Pet-friendly housing", path: "/owning-a-pet-in-pattaya/pet-friendly-housing.html", desc: "The fuller guide to housing with a pet." },
    { name: "Dog registration & the law", path: "/owning-a-pet-in-pattaya/dog-registration-thailand.html", desc: "Rules for keeping a dog legally." },
    { name: "Dog-friendly hotels", path: "/dog-friendly-pattaya/hotels.html", desc: "If you are staying before you rent." },
    { name: "Dog-friendly Pattaya", path: "/dog-friendly-pattaya/", desc: "Back to the cluster hub." }
  ]
}));

pages.push(df({
  slug: "parks", crumb: "Places to walk",
  title: "Where to walk a dog in Pattaya | PattayaPets",
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
    { h: "Walk smart in the climate", html:
      "<p>Whatever route you choose, the climate rules apply: walk early or " +
      "late, avoid hot pavement, carry water, and keep it shorter on the " +
      "hottest days. See <a href=\"/owning-a-pet-in-pattaya/where-to-walk-your-dog.html\">" +
      "where to walk your dog</a> and <a href=\"/pet-emergency/heatstroke.html\">" +
      "heatstroke</a>.</p>" }
  ],
  faqs: [
    ["Are there dog parks in Pattaya?",
     "<p>Dedicated fenced dog parks are scarce. Most owners build a routine around the beach at cool hours, quiet sois and open green spaces. Always check whether dogs are allowed in a given park and keep yours leashed.</p>"],
    ["Where is the best everyday walk?",
     "<p>For most owners it is a mix: the quiet sois near home for daily walks, and the cooler ends of the beach for something longer. Pratumnak's leafier roads are pleasant too.</p>"]
  ],
  related: [
    { name: "Dog-friendly beaches", path: "/dog-friendly-pattaya/beaches.html", desc: "The best longer walks at cool hours." },
    { name: "Street-dog encounters", path: "/pet-emergency/street-dog-encounters.html", desc: "What to do when other dogs are around." },
    { name: "Where to walk your dog", path: "/owning-a-pet-in-pattaya/where-to-walk-your-dog.html", desc: "Building a safe daily routine." },
    { name: "Dog-friendly Pattaya", path: "/dog-friendly-pattaya/", desc: "Back to the cluster hub." }
  ]
}));

module.exports = pages;
