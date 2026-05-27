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
  title: "Adopt a pet in Pattaya | PattayaPets",
  desc: "How to adopt a dog or cat in Pattaya: how adoption works, what to " +
    "expect, and the shelters and rescue organisations in and around the city.",
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
    "good shelter cares where its animals end up.</p>" +
    "<h2>If you cannot adopt</h2>" +
    "<p>Fostering, volunteering, donating, or sponsoring an animal all genuinely " +
    "help &mdash; and if you are leaving Thailand, some organisations can " +
    "support adopters in flying an animal abroad. See also our guide to " +
    "<a href=\"/take-pet-out-of-thailand/\">taking a pet out of Thailand</a>.</p>" +
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
        { name: "Hope for Strays", desc: "A Pattaya dog rescue shelter caring for several hundred dogs.", path: "/adopt-a-pet-pattaya/hope-for-strays.html" },
        { name: "Dog & Cat Rescue Pattaya", desc: "A Pattaya shelter rescuing dogs and helping the city's street cats.", path: "/adopt-a-pet-pattaya/dog-cat-rescue-pattaya.html" },
        { name: "Animal Army Foundation", desc: "A long-running Pattaya foundation with a rescue ambulance and clinic.", path: "/adopt-a-pet-pattaya/animal-army-foundation.html" },
        { name: "Pattaya Street Dogs (K9aid)", desc: "A rescue caring for street dogs and feeding temple-dog colonies.", path: "/adopt-a-pet-pattaya/pattaya-street-dogs-k9aid.html" },
        { name: "Soi Dog Foundation", desc: "Thailand's best-known animal-welfare charity, with Pattaya work.", path: "/adopt-a-pet-pattaya/soi-dog-foundation.html" },
        { name: "Malee's Animal Shelter", desc: "A large shelter rescuing dogs and cats across the Pattaya–Chanthaburi area.", path: "/adopt-a-pet-pattaya/malees-animal-shelter.html" }
      ]
    },
    {
      title: "Helping beyond adoption",
      cards: [
        { name: "Fostering a pet", desc: "Give a rescue animal a temporary home while it waits for adoption.", path: "/adopt-a-pet-pattaya/fostering.html" },
        { name: "How to help street animals", desc: "Donating, volunteering, and what to do for an injured animal.", path: "/adopt-a-pet-pattaya/how-to-help.html" }
      ]
    }
  ],
  related: [
    { name: "Fostering a pet", path: "/adopt-a-pet-pattaya/fostering.html", desc: "Temporary homes save lives between rescue and adoption." },
    { name: "How to help street animals", path: "/adopt-a-pet-pattaya/how-to-help.html", desc: "Donate, volunteer and what to do for an injured animal." },
    { name: "Microchipping your pet", path: "/owning-a-pet-in-pattaya/microchipping-your-pet.html", desc: "Essential after you adopt." },
    { name: "Taking a pet out of Thailand", path: "/take-pet-out-of-thailand/", desc: "If you might fly an adopted pet abroad." }
  ]
}));

/* ---- SHELTER PAGES ---- */
const SHELTERS = [
  {
    slug: "hope-for-strays", name: "Hope for Strays",
    crumb: "Hope for Strays",
    type: "Dog rescue shelter",
    website: "https://hopeforstrays.org/",
    lede: "Hope for Strays is a non-profit dog rescue shelter in Pattaya, home to " +
      "several hundred dogs at any time.",
    what:
      "<p>Hope for Strays Foundation is a Pattaya-based non-profit dedicated to " +
      "improving the lives of stray dogs. It runs a shelter caring for a large " +
      "number of dogs &mdash; reported as well over a hundred &mdash; and works " +
      "on vaccination, sterilisation, medical treatment and street feeding " +
      "alongside rehoming.</p>",
    adopt:
      "<p>Healthy, vaccinated and sterilised dogs are available for adoption. As " +
      "with any reputable rescue, expect a conversation about your home and " +
      "lifestyle so the right dog is matched to the right family.</p>"
  },
  {
    slug: "dog-cat-rescue-pattaya", name: "Dog & Cat Rescue Pattaya",
    crumb: "Dog & Cat Rescue Pattaya",
    type: "Dog & cat shelter",
    website: "https://www.facebook.com/DogRescuePattaya/",
    lede: "Dog & Cat Rescue Pattaya is a Pattaya animal shelter that rescues dogs " +
      "and helps the city&rsquo;s street cats.",
    what:
      "<p>Dog &amp; Cat Rescue Pattaya operates as a shelter rescuing dogs and " +
      "supporting street cats around the city, with care, treatment and rehoming " +
      "at the centre of its work. It is active on social media, where it shares " +
      "animals in need of homes and updates on rescues.</p>",
    adopt:
      "<p>Dogs and cats are rehomed once cared for. Contact the organisation " +
      "directly &mdash; its Facebook page is the most current channel &mdash; to " +
      "ask about adopting, fostering or helping.</p>"
  },
  {
    slug: "animal-army-foundation", name: "Animal Army Foundation",
    crumb: "Animal Army Foundation",
    type: "Animal welfare foundation",
    website: "https://animalarmy.org/",
    lede: "Animal Army Foundation is a long-running Pattaya animal-welfare " +
      "organisation, operating since 1994.",
    what:
      "<p>Animal Army Foundation is a registered, licensed Pattaya organisation " +
      "that has worked in animal welfare since 1994. Its work has included a " +
      "veterinary team and a dedicated rescue ambulance providing emergency care " +
      "to street animals, alongside encouraging the adoption of homeless " +
      "companion animals. It has also supported adopters in flying newly adopted " +
      "animals overseas.</p>",
    adopt:
      "<p>Animal Army encourages adoption of the animals in its care. Because an " +
      "organisation&rsquo;s services and facilities can change over time, " +
      "confirm current adoption arrangements directly with the foundation.</p>"
  },
  {
    slug: "pattaya-street-dogs-k9aid", name: "Pattaya Street Dogs (K9aid)",
    crumb: "Pattaya Street Dogs (K9aid)",
    type: "Dog rescue",
    website: "https://k9aid.org/pattaya/",
    lede: "Pattaya Street Dogs, part of K9aid, is a rescue caring for street dogs " +
      "and supporting temple-dog colonies.",
    what:
      "<p>Founded in 2018, Pattaya Street Dogs (K9aid) provides a home for a " +
      "group of rescued dogs and also feeds and monitors additional dogs living " +
      "at a Buddhist temple near the sea. Its work centres on care, feeding and " +
      "finding homes for street dogs around Pattaya.</p>",
    adopt:
      "<p>The rescue rehomes dogs in its care and welcomes adopters, fosters, " +
      "volunteers and donors. Contact it directly to ask how you can help or " +
      "adopt.</p>"
  },
  {
    slug: "soi-dog-foundation", name: "Soi Dog Foundation",
    crumb: "Soi Dog Foundation",
    type: "Animal welfare charity",
    website: "https://www.soidog.org/",
    lede: "Soi Dog Foundation is Thailand&rsquo;s best-known animal-welfare " +
      "charity, with sterilisation, rescue and adoption work that reaches Pattaya.",
    what:
      "<p>Soi Dog Foundation is a major Thai animal-welfare charity, widely known " +
      "for large-scale sterilisation and vaccination programmes, rescue, and " +
      "international adoption. Its work includes the Pattaya area, and it offers " +
      "ways to sponsor and support animals there.</p>",
    adopt:
      "<p>Soi Dog runs an established adoption programme, including international " +
      "adoption for supporters who have moved or are moving abroad. See its " +
      "website for current adoption and sponsorship options.</p>"
  },
  {
    slug: "malees-animal-shelter", name: "Malee's Animal Shelter",
    crumb: "Malee's Animal Shelter",
    type: "Dog & cat shelter",
    website: "https://www.chanthaburishelter.com/",
    lede: "Malee&rsquo;s Animal Shelter rescues dogs and cats across the Pattaya " +
      "and Chanthaburi area, caring for several hundred animals.",
    what:
      "<p>Malee&rsquo;s Animal Shelter rescues and cares for dogs and cats in the " +
      "Pattaya and Chanthaburi region &mdash; reported as more than four hundred " +
      "dogs and several dozen cats. It relies, like all the shelters here, on " +
      "donations and volunteers to continue its work.</p>",
    adopt:
      "<p>Dogs and cats are available for adoption. Contact the shelter directly " +
      "to discuss adopting, fostering, volunteering or donating.</p>"
  }
];

SHELTERS.forEach(function (s) {
  pages.push(article({
    path: "/adopt-a-pet-pattaya/" + s.slug + ".html",
    title: s.name + " | PattayaPets",
    desc: s.name + " is a " + s.type.toLowerCase() + " in the Pattaya area. " +
      "How its rescue and adoption work runs, and how to help.",
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
      { h: "Adopting and helping", html: s.adopt +
        "<p>If you cannot adopt, fostering, volunteering and donating all make a " +
        "real difference &mdash; shelters run on exactly that support.</p>" },
      { h: "Get in touch", html:
        '<p><a href="' + s.website + '" target="_blank" rel="noopener nofollow">' +
        "Visit the official website or page</a> for current contact details, " +
        "location and the animals looking for homes.</p>" }
    ],
    faqs: [
      ["Are pets from " + s.name + " vaccinated and sterilised?",
       "<p>Reputable rescues rehome animals vaccinated and sterilised, and are open about each animal's health. Confirm the specifics for any animal directly with the organisation.</p>"],
      ["I am leaving Thailand — can I adopt and take the pet with me?",
       "<p>Often yes. Many rescues support adopters in relocating an animal abroad. Plan early and read our guide to <a href=\"/take-pet-out-of-thailand/\">taking a pet out of Thailand</a> — the rabies titer test in particular needs lead time.</p>"]
    ],
    related: [
      { name: "Adopt a pet in Pattaya", path: "/adopt-a-pet-pattaya/", desc: "All the shelters and how adoption works." },
      { name: "Fostering a pet", path: "/adopt-a-pet-pattaya/fostering.html", desc: "Give a rescue animal a temporary home." },
      { name: "How to help street animals", path: "/adopt-a-pet-pattaya/how-to-help.html", desc: "Volunteer, donate and emergency help." },
      { name: "Microchipping your pet", path: "/owning-a-pet-in-pattaya/microchipping-your-pet.html", desc: "Do this soon after adoption." },
      { name: "Vets in Pattaya", path: "/vets/", desc: "Line up a vet for your adopted pet." }
    ]
  }));
});

module.exports = pages;
