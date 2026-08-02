"use strict";
/* Cluster: Adopt a pet in Pattaya — current first-party evidence and named gaps. */

const { article, hub } = require("../guidekit.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const CLUSTER = { name: "Adopt a pet in Pattaya", path: "/adopt-a-pet-pattaya/" };
const SUB = [GUIDES, CLUSTER];

const pages = [];

pages.push(hub({
  path: "/adopt-a-pet-pattaya/",
  title: "Adopt a Pet in Pattaya: Verified Sources | PattayaPets",
  image: "/assets/img/og-adoption.png",
  updated: "2026-08-01",
  desc: "Pattaya-area adoption and rescue sources separated by current first-party evidence, plus exact status gaps to confirm before visiting or applying.",
  crumb: "Adopt a pet in Pattaya",
  breadcrumbs: [GUIDES],
  eyebrow: "Guide",
  h1: "Adopt a pet in Pattaya: verify the organisation first",
  lede: "An organisation&rsquo;s website can confirm that it runs an adoption programme; it cannot guarantee that a particular animal is still available.",
  intro:
    "<p>The pages below were reviewed against the organisations&rsquo; own public channels on " +
    "1 August 2026. Current operation and adoption information was found for some organisations. " +
    "Others remain listed only so the evidence gap is explicit.</p>" +
    "<p>Contact the organisation before travelling. Ask for the current process, location, appointment " +
    "rules, animal records, fee or donation terms, and who will sign any agreement. PattayaPets is not " +
    "affiliated with these organisations and receives no payment from them.</p>",
  groups: [
    {
      title: "Current first-party information found",
      note: "A live first-party page describes current rescue, adoption or sanctuary activity. Availability still requires direct confirmation.",
      cards: [
        { name: "Hope for Strays", desc: "East Pattaya dog rescue with current shelter, adoption and contact pages.", path: "/adopt-a-pet-pattaya/hope-for-strays.html" },
        { name: "Animal Army", desc: "Na Jomtien hospital and welfare organisation with current adoption, foster and rescue pages.", path: "/adopt-a-pet-pattaya/animal-army-foundation.html" },
        { name: "Pattaya Street Dogs / K9aid", desc: "Current project page; present adoption availability is not stated.", path: "/adopt-a-pet-pattaya/pattaya-street-dogs-k9aid.html" },
        { name: "Ady G. Second Chance Pattaya", desc: "Current sanctuary site describes adoption and volunteering.", path: "/adopt-a-pet-pattaya/ady-g-second-chance-pattaya.html" },
        { name: "Soi Dog Foundation", desc: "Current adoption programme at its Phuket sanctuary; not a Pattaya shelter.", path: "/adopt-a-pet-pattaya/soi-dog-foundation.html" }
      ]
    },
    {
      title: "Current status not independently verified",
      note: "These routes are retained as verification records, not recommendations or claims of current operation.",
      cards: [
        { name: "Dog & Cat Rescue Pattaya", desc: "The linked Facebook page was not independently readable during review.", path: "/adopt-a-pet-pattaya/dog-cat-rescue-pattaya.html" },
        { name: "Malee&rsquo;s Animal Shelter", desc: "The accessible first-party page is dated February 2020; current status is unknown.", path: "/adopt-a-pet-pattaya/malees-animal-shelter.html" }
      ]
    },
    {
      title: "Adoption planning",
      cards: [
        { name: "Animal shelter evidence table", desc: "All seven routes with current evidence status.", path: "/adopt-a-pet-pattaya/animal-shelters-pattaya.html" },
        { name: "Fostering", desc: "Questions to settle before taking temporary responsibility.", path: "/adopt-a-pet-pattaya/fostering.html" },
        { name: "How to help street animals", desc: "General options and emergency orientation.", path: "/adopt-a-pet-pattaya/how-to-help.html" }
      ]
    }
  ],
  related: [
    { name: "Pet-friendly housing", path: "/owning-a-pet-in-pattaya/pet-friendly-housing.html", desc: "Get written permission before adopting." },
    { name: "Microchipping", path: "/owning-a-pet-in-pattaya/microchipping-your-pet.html", desc: "Identification questions for a qualified vet." },
    { name: "Export process", path: "/take-pet-out-of-thailand/export-process.html", desc: "If a future international move is possible." }
  ]
}));

const SHELTERS = [
  {
    slug: "hope-for-strays",
    name: "Hope for Strays",
    pageTitle: "Hope for Strays Pattaya: Current Sources",
    crumb: "Hope for Strays",
    type: "East Pattaya dog rescue",
    lede: "Hope for Strays&rsquo; current first-party site describes shelter, rescue, adoption and volunteer activity in East Pattaya.",
    status: "Current first-party activity found",
    statusHtml:
      "<p>The organisation&rsquo;s current website identifies it as a dog rescue for East Pattaya. " +
      "Its services page describes feeding, veterinary care, vaccination, sterilisation, temporary " +
      "housing and adoption work, primarily in Nongprue, Nongpralai and Pong.</p>",
    adoptionHtml:
      "<p>Its current adoption page displays dogs and says listed dogs are vaccinated and spayed or " +
      "neutered if old enough. Confirm the specific animal, records and process directly because the " +
      "page can change.</p>",
    visitHtml:
      "<p>The contact page invites messages about visits and volunteering. Arrange a time before travelling.</p>",
    address: "43/5 Moo 3, Chaiyapornwithi Road (Highway 3240), Soi 33, East Pattaya",
    phone: "089 158 8345",
    tel: "+66891588345",
    sources: [
      ["Official site", "https://hopeforstrays.org/", "identity and shelter location"],
      ["Adoption page", "https://hopeforstrays.org/dog-adoption/", "current adoption programme and stated preparation of listed dogs"],
      ["Contact page", "https://hopeforstrays.org/contact/", "current phone and visit contact route"]
    ],
    adoptionAnswer: "Its current first-party page describes an adoption programme and displays dogs. Confirm which animals are available now."
  },
  {
    slug: "dog-cat-rescue-pattaya",
    name: "Dog & Cat Rescue Pattaya",
    pageTitle: "Dog & Cat Rescue Pattaya | Status Check",
    crumb: "Dog & Cat Rescue Pattaya",
    type: "unverified rescue listing",
    lede: "PattayaPets could not independently verify this organisation&rsquo;s current operation, location or adoption availability.",
    status: "Current status not independently verified",
    statusHtml:
      "<p>The previously cited source was a Facebook page. During this review, the public web response " +
      "did not expose organisation posts or current contact details without platform access. Older third-party " +
      "material is not enough to state that the rescue currently operates.</p>",
    adoptionHtml:
      "<p>Current animals, adoption, fostering, intake and fee terms are unknown. Do not travel or donate " +
      "based on this route alone.</p>",
    visitHtml:
      "<p>No current public address or visiting policy was verified.</p>",
    sources: [
      ["Facebook page previously cited", "https://www.facebook.com/DogRescuePattaya/", "identity lead only; current content was not independently readable"]
    ],
    adoptionAnswer: "Unknown. No current adoption source was independently readable during this review."
  },
  {
    slug: "animal-army-foundation",
    name: "Animal Army",
    pageTitle: "Animal Army Pattaya | Adoption Sources",
    crumb: "Animal Army",
    type: "animal hospital and welfare organisation",
    lede: "Animal Army&rsquo;s current first-party site describes hospital, rescue, foster and adoption work from Na Jomtien.",
    status: "Current first-party activity found",
    statusHtml:
      "<p>The organisation&rsquo;s current site describes a veterinary hospital and animal-welfare work, " +
      "including a rescue ambulance, emergency response, foster care and adoption in the Pattaya and Chonburi area.</p>",
    adoptionHtml:
      "<p>Its adoption page describes an inquiry, matching and agreement process and says animals considered " +
      "ready for adoption are examined, vaccinated and cleared by its veterinary team. Ask for current profiles " +
      "and the individual record.</p>",
    visitHtml:
      "<p>The contact page states that animal intake is by appointment except critical emergencies. Contact the organisation before arrival.</p>",
    address: "90/55 Moo 5, Na Jomtien, Sattahip District, Chon Buri 20250",
    hours: "Daily 08:00&ndash;17:00; intake by appointment except critical emergencies",
    phone: "085 093 5954",
    tel: "+66850935954",
    email: "info@animalarmy.org",
    sources: [
      ["Official site", "https://animalarmy.org/", "current hospital and welfare activity"],
      ["Adoption page", "https://animalarmy.org/pages/adoption-with-animal-army", "current adoption process"],
      ["Contact page", "https://animalarmy.org/pages/contact", "address, hours, phone, email and intake note"]
    ],
    adoptionAnswer: "Its current site describes an adoption programme. Contact Animal Army for current animal profiles."
  },
  {
    slug: "pattaya-street-dogs-k9aid",
    name: "Pattaya Street Dogs / K9aid",
    pageTitle: "Pattaya Street Dogs K9aid: Current Source",
    crumb: "Pattaya Street Dogs / K9aid",
    type: "dog-care project",
    lede: "K9aid&rsquo;s current project page describes a Pattaya shelter and care for dogs at a nearby temple; it does not state current adoption availability.",
    status: "Current project page found; adoption status unknown",
    statusHtml:
      "<p>The current K9aid page identifies the Pattaya Street Dogs project and describes shelter and " +
      "temple-dog care. It also links a project blog. The route previously used by PattayaPets now redirects " +
      "to the current project URL.</p>",
    adoptionHtml:
      "<p>The current project page does not publish a current list of adoptable dogs or a Pattaya-specific " +
      "adoption process. Ask K9aid directly; do not infer availability from the project description.</p>",
    visitHtml: "<p>No current public visitor hours or walk-in policy were found on the project page.</p>",
    sources: [
      ["K9aid Pattaya Street Dogs page", "https://k9aid.org/pattaya-street-dogs/", "current project description only"]
    ],
    adoptionAnswer: "Unknown. The current project page does not state which dogs, if any, are available for adoption."
  },
  {
    slug: "soi-dog-foundation",
    name: "Soi Dog Foundation",
    pageTitle: "Soi Dog Foundation | Phuket Adoption Source",
    crumb: "Soi Dog Foundation",
    type: "Phuket-based animal-welfare foundation",
    lede: "Soi Dog Foundation has a current adoption programme at its Phuket sanctuary; this review did not verify a current Pattaya shelter or Pattaya adoption facility.",
    status: "Current national source; not a Pattaya shelter",
    statusHtml:
      "<p>Soi Dog&rsquo;s current adoption and visitor pages locate its sanctuary in Mai Khao, Phuket. " +
      "Older reports described Pattaya sterilisation work, but this review did not find a current official " +
      "Pattaya programme page. It is therefore presented as a Thailand-wide alternative, not a Pattaya rescue.</p>",
    adoptionHtml:
      "<p>The current official adoption page displays dogs at the Phuket shelter and links the process and " +
      "travel-cost information. Confirm current profiles and destination conditions directly.</p>",
    visitHtml:
      "<p>The current visitor page publishes Phuket visitor hours and tour information. Those details apply " +
      "to the Phuket sanctuary, not Pattaya.</p>",
    address: "167/9 Moo 4, Soi Mai Khao 10, Mai Khao, Thalang, Phuket 83110",
    hours: "Phuket visitor hours: Mon&ndash;Fri 09:30&ndash;11:30 and 13:00&ndash;15:30",
    email: "info@soidog.org",
    sources: [
      ["Adoption page", "https://www.soidog.org/adopt", "current Phuket adoption programme"],
      ["Visit page", "https://www.soidog.org/index.php/content/visit-us", "Phuket address and visitor hours"]
    ],
    adoptionAnswer: "Its current adoption programme is at the Phuket sanctuary. This page does not establish a Pattaya adoption location."
  },
  {
    slug: "malees-animal-shelter",
    name: "Malee&rsquo;s Animal Shelter",
    plainName: "Malee's Animal Shelter",
    pageTitle: "Malee's Animal Shelter: Status Check",
    crumb: "Malee's Animal Shelter",
    type: "unverified shelter listing",
    lede: "The accessible first-party page for Malee&rsquo;s Animal Shelter is dated February 2020, so current operation and adoption availability are unknown.",
    status: "Current status not independently verified",
    statusHtml:
      "<p>The WordPress site remains accessible, but its home-page organisation description is attached " +
      "to a post updated 4 February 2020. That historical page describes a Chanthaburi shelter; it is not " +
      "sufficient evidence of operation, animal counts, adoption availability or visitor access in August 2026.</p>",
    adoptionHtml: "<p>Current adoption, donation, volunteering and contact arrangements are unknown.</p>",
    visitHtml: "<p>No current address, visitor hours or appointment process was verified.</p>",
    sources: [
      ["First-party WordPress page", "https://maleeanimalshelter.wordpress.com/", "historical description last updated in February 2020"]
    ],
    adoptionAnswer: "Unknown. The accessible first-party adoption statement is historical and does not prove current availability."
  },
  {
    slug: "ady-g-second-chance-pattaya",
    name: "Ady G. Second Chance Pattaya",
    pageTitle: "Ady G. Second Chance Pattaya | Current Sources",
    crumb: "Ady G. Second Chance Pattaya",
    type: "dog sanctuary",
    lede: "Ady G. Second Chance Pattaya&rsquo;s current first-party site describes a sanctuary for rescued and disabled dogs, adoption and volunteering.",
    status: "Current first-party activity found",
    statusHtml:
      "<p>The current official site describes rescue and rehabilitation of dogs, with particular attention " +
      "to disabled dogs. It publishes ways to donate, sponsor, adopt and volunteer.</p>",
    adoptionHtml:
      "<p>The current site says adoption is selective, includes healthy dogs as well as disabled dogs, and " +
      "asks potential adopters to visit the dog on site at least three times. Confirm which dogs and process " +
      "apply now.</p>",
    visitHtml:
      "<p>The site welcomes volunteers but asks people to make contact because capacity is limited. Arrange before travelling.</p>",
    address: "Sukjai Soi 6, Pattaya City, Bang Lamung District, Chon Buri 20150",
    sources: [
      ["Official site", "https://www.adygsecondchancepattaya.org/", "current sanctuary, adoption and volunteer descriptions"],
      ["Contact page", "https://www.adygsecondchancepattaya.org/contact-us", "current address and contact channels"]
    ],
    adoptionAnswer: "Its current site describes selective adoption. Confirm current dogs and arrange the required visits directly."
  }
];

function sourceHtml(s) {
  return "<ul>" + s.sources.map(function (source) {
    return '<li><a href="' + source[1] + '" target="_blank" rel="noopener noreferrer">' +
      source[0] + "</a> &mdash; " + source[2] + ".</li>";
  }).join("") + "</ul><p>Sources checked 1 August 2026. A live page does not guarantee " +
    "today&rsquo;s animal availability, appointment capacity or unchanged terms.</p>";
}

function contactHtml(s) {
  var rows = [];
  if (s.address) rows.push("<p><strong>Published location:</strong> " + s.address + "</p>");
  if (s.hours) rows.push("<p><strong>Published hours:</strong> " + s.hours + "</p>");
  if (s.phone) rows.push('<p><strong>Phone:</strong> <a href="tel:' + s.tel + '">' + s.phone + "</a></p>");
  if (s.email) rows.push('<p><strong>Email:</strong> <a href="mailto:' + s.email + '">' + s.email + "</a></p>");
  if (!rows.length) rows.push("<p>No current public address, hours, phone or email was independently verified.</p>");
  return rows.join("");
}

SHELTERS.forEach(function (s) {
  var displayName = s.plainName || s.name;
  pages.push(article({
    path: "/adopt-a-pet-pattaya/" + s.slug + ".html",
    title: s.pageTitle + " | PattayaPets",
    desc: displayName + ": current first-party evidence, adoption-status limits, source links and what to confirm before visiting.",
    crumb: s.crumb,
    breadcrumbs: SUB,
    eyebrow: "Adopt a pet in Pattaya",
    h1: s.name,
    lede: s.lede,
    updated: "2026-08-01",
    verify: "Evidence status: " + s.status + ". PattayaPets is not affiliated with this organisation and receives no payment from it.",
    sections: [
      { h: "Current evidence status", html: s.statusHtml },
      { h: "Adoption availability", html: s.adoptionHtml },
      { h: "Visiting or volunteering", html: s.visitHtml },
      { h: "Published contact details", html: contactHtml(s) },
      { h: "Before committing", html:
        "<p>Ask for the current application and agreement, the animal&rsquo;s identity and available health " +
        "records, known behaviour and care needs, every fee or donation term, and the support offered after " +
        "placement. Confirm written housing permission first. Ask a qualified veterinarian to interpret " +
        "records and advise on care for the individual animal.</p>" },
      { h: "First-party sources followed", html: sourceHtml(s) }
    ],
    faqs: [
      ["Is adoption currently available from " + displayName + "?", "<p>" + s.adoptionAnswer + "</p>"],
      ["Can I visit without arranging it?", "<p>Do not assume walk-in access. Use the current first-party contact channel and obtain confirmation before travelling.</p>"],
      ["Does PattayaPets verify an individual animal&rsquo;s health?", "<p>No. Obtain the animal&rsquo;s records and ask a qualified veterinarian to interpret them and advise on the individual animal.</p>"],
      ["Is PattayaPets affiliated with this organisation?", "<p>No. The listing is an editorial public-interest reference and no payment is taken.</p>"]
    ],
    related: [
      { name: "Animal shelter evidence table", path: "/adopt-a-pet-pattaya/animal-shelters-pattaya.html", desc: "Compare current source status." },
      { name: "Fostering", path: "/adopt-a-pet-pattaya/fostering.html", desc: "Temporary-care planning." },
      { name: "Pet-friendly housing", path: "/owning-a-pet-in-pattaya/pet-friendly-housing.html", desc: "Written permission before placement." },
      { name: "Export process", path: "/take-pet-out-of-thailand/export-process.html", desc: "If an international move may follow." }
    ]
  }));
});

module.exports = pages;
