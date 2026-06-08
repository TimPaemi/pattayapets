"use strict";
/* Cluster: Adopt a pet in Pattaya */

const { article, hub } = require("../guidekit.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const CLUSTER = { name: "Adopt a pet in Pattaya", path: "/adopt-a-pet-pattaya/" };
const SUB = [GUIDES, CLUSTER];

const pages = [];

/* ---- HUB ---- */
pages.push(hub({
  path: "/adopt-a-pet-pattaya/",
  title: "Adopt a Pet Pattaya | Shelters & Street Dogs | PattayaPets",
  image: "/assets/img/og-adoption.png",
  desc: "Adopt a dog or cat in Pattaya: how adoption works, shelters and rescues " +
    "(Soi Dog, Hope for Strays), fostering, and helping street animals without adopting.",
  crumb: "Adopt a pet in Pattaya",
  breadcrumbs: [GUIDES],
  eyebrow: "Guide",
  h1: "Adopt a pet in Pattaya",
  lede: "Pattaya has a real street-animal challenge &mdash; and a network of " +
    "dedicated shelters and rescues. If you can offer a home, adoption is one of " +
    "the most worthwhile things you can do here.",
  intro:
    "<p>Thailand&rsquo;s tropical cities have large free-roaming dog and cat " +
    "populations, and Pattaya is no exception. The organisations below rescue, " +
    "treat, sterilise and rehome animals &mdash; and they are almost always " +
    "looking for adopters, fosters, volunteers and donors.</p>" +
    "<h2>How adoption usually works</h2>" +
    "<p>Most shelters follow a similar path: you meet the animals, talk to the " +
    "team about what suits your home and lifestyle, and there is often a home " +
    "check or an adoption agreement. Reputable rescues rehome animals already " +
    "<strong>vaccinated and sterilised</strong>, and will be honest with you " +
    "about an animal&rsquo;s health and temperament. Expect questions &mdash; a " +
    "good shelter cares where its animals end up. New owners should read " +
    '<a href="/owning-a-pet-in-pattaya/dog-registration-thailand.html">dog registration in Thailand</a> ' +
    "and " +
    '<a href="/owning-a-pet-in-pattaya/microchipping-your-pet.html">microchipping</a> ' +
    "once the pet is home.</p>" +
    "<h2>If you cannot adopt</h2>" +
    "<p>Fostering, volunteering, donating, or sponsoring an animal all genuinely " +
    "help &mdash; and if you are leaving Thailand, some organisations can " +
    "support adopters in flying an animal abroad. See " +
    '<a href="/adopt-a-pet-pattaya/fostering.html">fostering</a>, ' +
    '<a href="/adopt-a-pet-pattaya/how-to-help.html">how to help street animals</a>, ' +
    "and our guide to " +
    '<a href="/take-pet-out-of-thailand/export-process.html">exporting a pet from Thailand</a>.</p>' +
    '<div class="callout callout-note"><p>PattayaPets lists these organisations ' +
    "as a public-interest service. Details such as locations, opening times and " +
    "current animals change &mdash; always confirm directly with the " +
    "organisation. We are not affiliated with them and do not take payment from " +
    "them.</p></div>",
  groups: [
    {
      title: "Shelters & rescue organisations",
      note: "Established dog and cat rescues operating in and around Pattaya.",
      cards: [
        { tag: "Directory", name: "Animal shelters in Pattaya", desc: "All rescues in one place — adoption, fostering and volunteering.", path: "/adopt-a-pet-pattaya/animal-shelters-pattaya.html" },
        { name: "Hope for Strays", desc: "East Pattaya dog rescue shelter — several hundred dogs, open to visitors by arrangement.", path: "/adopt-a-pet-pattaya/hope-for-strays.html" },
        { name: "Dog & Cat Rescue Pattaya", desc: "A Pattaya shelter rescuing dogs and helping the city's street cats.", path: "/adopt-a-pet-pattaya/dog-cat-rescue-pattaya.html" },
        { name: "Animal Army Foundation", desc: "Licensed Na Jomtien hospital & rescue since 1994 — ambulance, clinic and adoptions.", path: "/adopt-a-pet-pattaya/animal-army-foundation.html" },
        { name: "Pattaya Street Dogs (K9aid)", desc: "A rescue caring for street dogs and feeding temple-dog colonies.", path: "/adopt-a-pet-pattaya/pattaya-street-dogs-k9aid.html" },
        { name: "Soi Dog Foundation", desc: "Thailand's best-known animal-welfare charity, with Pattaya work.", path: "/adopt-a-pet-pattaya/soi-dog-foundation.html" },
        { name: "Malee's Animal Shelter", desc: "A large shelter rescuing dogs and cats across the Pattaya–Chanthaburi area.", path: "/adopt-a-pet-pattaya/malees-animal-shelter.html" },
        { name: "Ady G. Second Chance Pattaya", desc: "A sanctuary for disabled and rescued dogs — Sukjai Soi 6, central Pattaya.", path: "/adopt-a-pet-pattaya/ady-g-second-chance-pattaya.html" }
      ]
    },
    {
      title: "Helping beyond adoption",
      cards: [
        { name: "Fostering a pet", desc: "Give a rescue animal a temporary home while it waits for adoption.", path: "/adopt-a-pet-pattaya/fostering.html" },
        { name: "How to help street animals", desc: "Donating, volunteering, and what to do for an injured animal.", path: "/adopt-a-pet-pattaya/how-to-help.html" },
        { name: "Getting a cat in Pattaya", desc: "Adopting, kittens and taking in a street cat.", path: "/cats/getting-a-cat-in-pattaya.html" },
        { name: "Choosing a dog for the heat", desc: "Which dogs cope with Pattaya's climate.", path: "/dogs/choosing-a-dog-for-the-climate.html" }
      ]
    }
  ],
  related: [
    { name: "Getting a cat in Pattaya", path: "/cats/getting-a-cat-in-pattaya.html", desc: "Adopting, kittens and street cats." },
    { name: "Fostering a pet", path: "/adopt-a-pet-pattaya/fostering.html", desc: "Temporary homes save lives between rescue and adoption." },
    { name: "Spaying & neutering", path: "/pet-health-pattaya/spaying-and-neutering.html", desc: "Why rescues sterilise before rehoming." },
    { name: "The export process", path: "/take-pet-out-of-thailand/export-process.html", desc: "If you might fly an adopted pet abroad." }
  ]
}));

/* ---- SHELTER PAGES ---- */
function shelterDesc(s) {
  return "Adopt from " + s.name + " near Pattaya — " + s.type.toLowerCase() +
    ". How rescue, adoption, fostering and volunteering work.";
}

const SHELTERS = [
  {
    slug: "hope-for-strays", name: "Hope for Strays",
    pageTitle: "Hope for Strays Pattaya | Dog Rescue Shelter & Adoption",
    crumb: "Hope for Strays",
    type: "Dog rescue shelter",
    website: "https://hopeforstrays.org/",
    facebook: "https://www.facebook.com/HopeforStraysThailand/",
    address: "43/5 Moo 3, Chaiyapornwithi Road (Hwy 3240) Soi 33, East Pattaya (Nongprue), Chon Buri 20150",
    lede: "Hope for Strays is a non-profit dog rescue shelter in East Pattaya, home to " +
      "several hundred dogs at any time.",
    what:
      "<p>Hope for Strays Foundation is a Pattaya-based non-profit dedicated to " +
      "improving the lives of stray dogs in East Pattaya &mdash; primarily the " +
      "Nongprue, Nongpralai and Pong areas. It runs a shelter caring for a large " +
      "number of dogs &mdash; reported as well over a hundred &mdash; and works " +
      "on vaccination, sterilisation, medical treatment and street feeding " +
      "alongside rehoming. Visits and volunteering are welcome; contact the " +
      "foundation first to arrange a time. The shelter relies on donations for food, " +
      "medicine and sterilisation programmes &mdash; typical of Pattaya&rsquo;s " +
      "independent rescues.</p>",
    adopt:
      "<p>Healthy, vaccinated and sterilised dogs are available for adoption. As " +
      "with any reputable rescue, expect a conversation about your home and " +
      "lifestyle so the right dog is matched to the right family. If you are not " +
      "ready to adopt permanently, " +
      "<a href=\"/adopt-a-pet-pattaya/fostering.html\">fostering</a> frees kennel " +
      "space here.</p>"
  },
  {
    slug: "dog-cat-rescue-pattaya", name: "Dog & Cat Rescue Pattaya",
    pageTitle: "Dog & Cat Rescue Pattaya | Adopt Dogs & Street Cats",
    crumb: "Dog & Cat Rescue Pattaya",
    type: "Dog & cat shelter",
    website: "https://www.facebook.com/DogRescuePattaya/",
    facebook: "https://www.facebook.com/DogRescuePattaya/",
    lede: "Dog & Cat Rescue Pattaya is a Pattaya animal shelter that rescues dogs " +
      "and helps the city&rsquo;s street cats.",
    what:
      "<p>Dog &amp; Cat Rescue Pattaya operates as a shelter rescuing dogs and " +
      "supporting street cats around the city, with care, treatment and rehoming " +
      "at the centre of its work. It is active on social media, where it shares " +
      "animals in need of homes and updates on rescues. Shelter location and visiting " +
      "arrangements are confirmed through its Facebook page rather than a fixed " +
      "public address &mdash; message before you travel so volunteers can meet you.</p>",
    adopt:
      "<p>Dogs and cats are rehomed once cared for. Contact the organisation " +
      "directly &mdash; its Facebook page is the most current channel &mdash; to " +
      "ask about adopting, fostering or helping. Found an injured street animal? " +
      "See <a href=\"/adopt-a-pet-pattaya/how-to-help.html\">how to help street " +
      "animals</a>.</p>"
  },
  {
    slug: "animal-army-foundation", name: "Animal Army Foundation",
    pageTitle: "Animal Army Foundation Pattaya | Rescue Hospital & Adoption",
    crumb: "Animal Army Foundation",
    type: "Animal welfare foundation & hospital",
    phone: "085 093 5954", tel: "+66850935954",
    address: "90/55 Moo 5, Na Jomtien, Sattahip District, Chon Buri 20250",
    email: "info@animalarmy.org",
    hours: "Daily 08:00&ndash;17:00; animal intake by appointment (emergencies excepted)",
    lede: "Animal Army Foundation is a licensed non-profit animal hospital in Na " +
      "Jomtien, operating since 1994.",
    what:
      "<p>Animal Army Foundation is a registered, licensed animal hospital in Na " +
      "Jomtien that has worked in animal welfare since 1994. Its veterinary team " +
      "operates a dedicated rescue ambulance providing emergency care to street " +
      "animals and pets in urgent need, alongside everyday clinic work. It also " +
      "encourages adoption of homeless companion animals and has supported adopters " +
      "in flying newly adopted animals overseas. Its Na Jomtien site combines rescue " +
      "ambulance work with everyday clinic services &mdash; useful if you adopt an " +
      "animal that still needs follow-up treatment. See also our " +
      "<a href=\"/vets/animal-army-hospital.html\">Animal Army Hospital listing</a> " +
      "in the vets directory.</p>",
    adopt:
      "<p>Animal Army runs an adoption programme for dogs and cats in its care, " +
      "including support for international adopters. Its public website is not " +
      "currently available &mdash; contact the foundation by phone or email for " +
      "current animals and the adoption process.</p>"
  },
  {
    slug: "pattaya-street-dogs-k9aid", name: "Pattaya Street Dogs (K9aid)",
    pageTitle: "Pattaya Street Dogs (K9aid) | Rescue & Temple-Dog Care",
    crumb: "Pattaya Street Dogs (K9aid)",
    type: "Dog rescue",
    website: "https://k9aid.org/pattaya/",
    facebook: "https://www.facebook.com/k9aid",
    email: "cindy@k9aid.org",
    lede: "Pattaya Street Dogs, part of K9aid, is a rescue caring for street dogs " +
      "and supporting temple-dog colonies.",
    what:
      "<p>Founded in 2018, Pattaya Street Dogs (K9aid) provides a home for a " +
      "group of rescued dogs and also feeds and monitors additional dogs living " +
      "at a Buddhist temple near the sea. Its work centres on care, feeding and " +
      "finding homes for street dogs around Pattaya. The project publishes updates " +
      "through K9aid&rsquo;s Pattaya channels; contact before visiting so someone " +
      "can meet you.</p>",
    adopt:
      "<p>The rescue rehomes dogs in its care and welcomes adopters, fosters, " +
      "volunteers and donors. Contact it directly through " +
      "<a href=\"https://k9aid.org/pattaya/\" target=\"_blank\" rel=\"noopener nofollow\">" +
      "k9aid.org/pattaya</a> to ask how you can help or adopt. Its temple-colony " +
      "work is one example of the wider street-animal picture in " +
      "<a href=\"/adopt-a-pet-pattaya/how-to-help.html\">how to help</a>.</p>"
  },
  {
    slug: "soi-dog-foundation", name: "Soi Dog Foundation",
    pageTitle: "Soi Dog Foundation | Thailand Rescue, Sterilisation & Adoption",
    crumb: "Soi Dog Foundation",
    type: "Animal welfare charity",
    website: "https://www.soidog.org/",
    address: "167/9 Moo 4, Soi Mai Khao 10, Mai Khao, Thalang, Phuket 83110",
    email: "clinic@soidog.org",
    hours: "Head office Mon&ndash;Fri 08:00&ndash;17:00; sanctuary visits by arrangement",
    lede: "Soi Dog Foundation is Thailand&rsquo;s best-known animal-welfare " +
      "charity, with sterilisation, rescue and adoption work that reaches Pattaya.",
    what:
      "<p>Soi Dog Foundation is a major Thai animal-welfare charity based in " +
      "Phuket, widely known for large-scale sterilisation and vaccination " +
      "programmes, rescue, and international adoption. Its work includes the " +
      "Pattaya area through outreach and sponsorship &mdash; but the main sanctuary " +
      "and head office are in Phuket, not Pattaya city. Guided sanctuary tours run " +
      "from the Phuket site by prior arrangement.</p>",
    adopt:
      "<p>Soi Dog runs an established adoption programme, including international " +
      "adoption for supporters who have moved or are moving abroad. See its " +
      "<a href=\"https://www.soidog.org/adopt\" target=\"_blank\" " +
      "rel=\"noopener nofollow\">adoption pages</a> for current options. Flying a " +
      "pet abroad later? Read the " +
      "<a href=\"/take-pet-out-of-thailand/export-process.html\">export process</a>.</p>"
  },
  {
    slug: "malees-animal-shelter", name: "Malee's Animal Shelter",
    pageTitle: "Malee's Animal Shelter | Pattaya & Chanthaburi Dog & Cat Rescue",
    crumb: "Malee's Animal Shelter",
    type: "Dog & cat shelter",
    website: "https://maleeanimalshelter.wordpress.com/",
    address: "Chanthaburi province (confirm exact location via the website before visiting)",
    lede: "Malee&rsquo;s Animal Shelter rescues dogs and cats across the Pattaya " +
      "and Chanthaburi area, caring for several hundred animals.",
    what:
      "<p>Malee&rsquo;s Animal Shelter rescues and cares for dogs and cats in the " +
      "Pattaya and Chanthaburi region &mdash; reported as more than four hundred " +
      "dogs and several dozen cats at times. The shelter operates in Chanthaburi province " +
      "east of Pattaya (roughly one to two hours by road). It relies on donations and " +
      "volunteers; founders Malee and Derek have run the project for many years. Confirm " +
      "the current location and visiting arrangements through " +
      "<a href=\"https://maleeanimalshelter.wordpress.com/\" target=\"_blank\" " +
      "rel=\"noopener nofollow\">its website</a> before you travel.</p>",
    adopt:
      "<p>Dogs and cats are available for adoption. Contact the shelter directly " +
      "through its website to discuss adopting, " +
      "<a href=\"/adopt-a-pet-pattaya/fostering.html\">fostering</a>, volunteering " +
      "or donating. The site also lists ways to support its work if you cannot adopt.</p>"
  },
  {
    slug: "ady-g-second-chance-pattaya", name: "Ady G. Second Chance Pattaya",
    pageTitle: "Ady G. Second Chance Pattaya | Disabled Dog Sanctuary",
    crumb: "Ady G. Second Chance Pattaya",
    type: "Dog sanctuary",
    website: "https://www.adygsecondchancepattaya.org/",
    email: "adygsecondchancepattaya@gmail.com",
    address: "Sukjai Soi 6, Pattaya City, Bang Lamung District, Chon Buri 20150",
    lede: "Ady G. Second Chance Pattaya is a sanctuary caring for disabled and rescued " +
      "dogs in central Pattaya.",
    what:
      "<p>Founded in 2018, Ady G. Second Chance Pattaya runs a sanctuary for disabled " +
      "and rescued dogs in central Pattaya &mdash; home to well over eighty dogs at " +
      "times. The project focuses on dogs that would otherwise receive little help " +
      "when injured or abandoned on the street, providing housing, food and medical care.</p>",
    adopt:
      "<p>Adoption may be possible for suitable homes. Contact the sanctuary directly " +
      "to ask about the dogs in its care, visiting arrangements and how you can help " +
      "as a donor or volunteer. Many sanctuary dogs need patient owners &mdash; see " +
      "<a href=\"/dogs/choosing-a-dog-for-the-climate.html\">choosing a dog for " +
      "Pattaya&rsquo;s climate</a> for the wider picture on care and exercise.</p>"
  }
];

const SHELTER_PEERS = {
  "hope-for-strays": [
    { name: "Dog & Cat Rescue Pattaya", path: "/adopt-a-pet-pattaya/dog-cat-rescue-pattaya.html",
      desc: "Dogs and street cats around the city." },
    { name: "Soi Dog Foundation", path: "/adopt-a-pet-pattaya/soi-dog-foundation.html",
      desc: "Thailand-wide welfare with Pattaya work." }
  ],
  "dog-cat-rescue-pattaya": [
    { name: "Hope for Strays", path: "/adopt-a-pet-pattaya/hope-for-strays.html",
      desc: "East Pattaya dog rescue shelter." },
    { name: "Pattaya Street Dogs (K9aid)", path: "/adopt-a-pet-pattaya/pattaya-street-dogs-k9aid.html",
      desc: "Street dogs and temple-dog colonies." }
  ],
  "animal-army-foundation": [
    { name: "Hope for Strays", path: "/adopt-a-pet-pattaya/hope-for-strays.html",
      desc: "Large East Pattaya dog shelter." },
    { name: "Animal Army Hospital", path: "/vets/animal-army-hospital.html",
      desc: "Na Jomtien rescue hospital in the vets directory." }
  ],
  "pattaya-street-dogs-k9aid": [
    { name: "Hope for Strays", path: "/adopt-a-pet-pattaya/hope-for-strays.html",
      desc: "East Pattaya dog rescue." },
    { name: "Dog & Cat Rescue Pattaya", path: "/adopt-a-pet-pattaya/dog-cat-rescue-pattaya.html",
      desc: "Dogs and cats around Pattaya." }
  ],
  "soi-dog-foundation": [
    { name: "Hope for Strays", path: "/adopt-a-pet-pattaya/hope-for-strays.html",
      desc: "Local Pattaya dog rescue." },
    { name: "Malee's Animal Shelter", path: "/adopt-a-pet-pattaya/malees-animal-shelter.html",
      desc: "Dogs and cats across the wider region." }
  ],
  "malees-animal-shelter": [
    { name: "Soi Dog Foundation", path: "/adopt-a-pet-pattaya/soi-dog-foundation.html",
      desc: "National charity with Pattaya programmes." },
    { name: "Hope for Strays", path: "/adopt-a-pet-pattaya/hope-for-strays.html",
      desc: "Pattaya-city dog rescue." }
  ],
  "ady-g-second-chance-pattaya": [
    { name: "Hope for Strays", path: "/adopt-a-pet-pattaya/hope-for-strays.html",
      desc: "General dog rescue in East Pattaya." },
    { name: "Pattaya Street Dogs (K9aid)", path: "/adopt-a-pet-pattaya/pattaya-street-dogs-k9aid.html",
      desc: "Street-dog rescue near the sea." }
  ]
};

const SHELTER_HELP =
  "<p>If you cannot adopt, " +
  '<a href="/adopt-a-pet-pattaya/fostering.html">fostering</a>, ' +
  '<a href="/adopt-a-pet-pattaya/how-to-help.html">volunteering and donating</a> ' +
  "all make a real difference &mdash; shelters run on exactly that support.</p>";

const SHELTER_VISIT =
  "<p>Most Pattaya rescues are <strong>small teams on tight budgets</strong>, not " +
  "tourist attractions. Message or email before you visit, wear closed shoes, and " +
  "expect noise, strong smells and animals in various states of health. Children can " +
  "visit when the organisation agrees, but supervise closely &mdash; frightened rescue " +
  "dogs may not behave like pets at home.</p>" +
  "<p>Volunteering often means cleaning, feeding, walking sociable dogs or helping " +
  "with laundry &mdash; not only cuddling puppies. Donations of cash, food and " +
  "medicine are usually welcome; ask what they need this week rather than assuming.</p>";

const SHELTER_AFTER =
  "<p>After adoption, schedule a vet check within the first week even if the rescue " +
  "has vaccinated and sterilised the animal. Register and " +
  '<a href="/owning-a-pet-in-pattaya/microchipping-your-pet.html">microchip</a> ' +
  "as soon as practical, read " +
  '<a href="/owning-a-pet-in-pattaya/dog-registration-thailand.html">dog registration in Thailand</a> ' +
  "for dogs, and confirm your condo or landlord allows pets &mdash; see " +
  '<a href="/owning-a-pet-in-pattaya/pet-friendly-housing.html">pet-friendly housing</a>. ' +
  "Routine care: " +
  '<a href="/cats/cat-vaccinations-thailand.html">cat vaccinations</a>, ' +
  '<a href="/dogs/dog-vaccinations-thailand.html">dog vaccinations</a>, and ' +
  '<a href="/pet-health-pattaya/spaying-and-neutering.html">spaying &amp; neutering</a> ' +
  "if not already done. Flying abroad later? Start the " +
  '<a href="/take-pet-out-of-thailand/export-process.html">export process</a> ' +
  "months ahead &mdash; the rabies titer test cannot be rushed.</p>";

const SHELTER_RELATED_BASE = [
  { name: "Fostering a pet", path: "/adopt-a-pet-pattaya/fostering.html", desc: "Temporary homes between rescue and adoption." },
  { name: "Cat vaccinations & health", path: "/cats/cat-vaccinations-thailand.html", desc: "Routine care after you adopt." },
  { name: "Dog vaccinations & parasites", path: "/dogs/dog-vaccinations-thailand.html", desc: "Routine care after you adopt." },
  { name: "Microchipping your pet", path: "/owning-a-pet-in-pattaya/microchipping-your-pet.html", desc: "Do this soon after adoption." },
  { name: "Spaying & neutering", path: "/pet-health-pattaya/spaying-and-neutering.html", desc: "What good rescues do before rehoming." },
  { name: "The export process", path: "/take-pet-out-of-thailand/export-process.html", desc: "The Thai DLD side when you leave." }
];

SHELTERS.forEach(function (s) {
  var contact = "";
  if (s.address) {
    contact += "<p><strong>Location:</strong> " + s.address + "</p>";
  }
  if (s.hours) {
    contact += "<p><strong>Hours:</strong> " + s.hours + "</p>";
  }
  if (s.email) {
    contact += "<p><strong>Email:</strong> <a href=\"mailto:" + s.email + "\">" +
      s.email + "</a></p>";
  }
  if (s.phone) {
    contact += "<p><strong>Phone:</strong> <a href=\"tel:" + (s.tel || s.phone) + "\">" +
      s.phone + "</a></p>";
  }
  var ext = [];
  if (s.website) {
    ext.push('<a href="' + s.website + '" target="_blank" rel="noopener nofollow">' +
      (s.website.indexOf("facebook.com") !== -1 ? "Facebook page" : "Official website") +
      "</a>");
  }
  if (s.facebook && s.facebook !== s.website) {
    ext.push('<a href="' + s.facebook + '" target="_blank" rel="noopener nofollow">Facebook</a>');
  }
  if (ext.length) {
    contact += "<p>" + ext.join(" &middot; ") +
      " for current contact details, visiting arrangements and the animals " +
      "looking for homes.</p>";
  } else if (s.phone || s.email) {
    contact += "<p>Contact the organisation directly for visiting arrangements and " +
      "the animals looking for homes.</p>";
  }

  pages.push(article({
    path: "/adopt-a-pet-pattaya/" + s.slug + ".html",
    title: (s.pageTitle || s.name) + " | PattayaPets",
    desc: shelterDesc(s),
    crumb: s.crumb,
    breadcrumbs: SUB,
    eyebrow: "Adopt a pet in Pattaya",
    h1: s.name,
    lede: s.lede,
    sections: [
      { html:
        '<div class="callout callout-note"><p>PattayaPets lists this ' +
        "organisation as a public-interest service. We are not affiliated with " +
        "it and take no payment from it. Locations, hours and the animals in " +
        "care change &mdash; please confirm current details directly with the " +
        "organisation.</p></div>" },
      { h: "What it does", html: s.what },
      { h: "Adopting from " + s.name, html: s.adopt + SHELTER_HELP },
      { h: "Visiting, fostering and volunteering", html: SHELTER_VISIT + (s.visit || "") },
      { h: "After you adopt in Pattaya", html: SHELTER_AFTER },
      { h: "Get in touch", html: contact }
    ],
    updated: "2026-06-01",
    faqs: [
      ["Are pets from " + s.name + " vaccinated and sterilised?",
       "<p>Reputable rescues rehome animals vaccinated and sterilised, and are open about each animal's health. Confirm the specifics for any animal directly with the organisation before you commit.</p>"],
      ["Does " + s.name + " charge an adoption fee?",
       "<p>Many rescues ask for a donation or adoption fee to cover vaccinations, sterilisation and food. Amounts vary — ask directly. A fee is normal; unusually high pressure for cash without paperwork is a red flag.</p>"],
      ["I am leaving Thailand — can I adopt and take the pet with me?",
       "<p>Often yes. Many rescues support adopters in relocating an animal abroad. Plan early and read our guide to the <a href=\"/take-pet-out-of-thailand/export-process.html\">export process</a> — the rabies titer test in particular needs lead time.</p>"],
      ["How do I visit or volunteer?",
       "<p>Contact the organisation directly via its website or Facebook page to ask about visiting hours, volunteering and fostering. PattayaPets does not coordinate visits — always arrange ahead.</p>"],
      ["Can I foster before adopting from " + s.name + "?",
       "<p>Many rescues welcome fosters — it frees kennel space and lets you learn the animal's temperament. See our <a href=\"/adopt-a-pet-pattaya/fostering.html\">fostering guide</a> and ask the organisation what they need.</p>"],
      ["What should I ask before adopting a rescue pet?",
       "<p>Ask about vaccinations, sterilisation, behavioural history, any medical needs, bite history, and what support the rescue offers after adoption. See our <a href=\"/adopt-a-pet-pattaya/\">adopt a pet in Pattaya</a> hub for the wider picture.</p>"],
      ["Can foreigners adopt in Thailand?",
       "<p>Yes — rescues regularly place animals with expat and tourist adopters. You need a stable home, commitment to vaccinations and registration, and realistic plans if you may leave Thailand later.</p>"],
      ["What if my condo does not allow pets?",
       "<p>Do not adopt until housing is sorted — returning an animal is traumatic for everyone. Read <a href=\"/owning-a-pet-in-pattaya/pet-friendly-housing.html\">pet-friendly housing</a> and get written permission from your landlord or juristic person where possible.</p>"]
    ],
    related: (SHELTER_PEERS[s.slug] || []).concat(SHELTER_RELATED_BASE)
  }));
});

module.exports = pages;
