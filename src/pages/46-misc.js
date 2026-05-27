"use strict";
/* Pet insurance guide + the cats and dogs species hubs */

const { article, hub } = require("../guidekit.js");
const GUIDES = { name: "Guides", path: "/guides.html" };

const pages = [];

/* ---------------- PET INSURANCE ---------------- */
pages.push(article({
  path: "/pet-insurance-thailand.html",
  title: "Pet insurance in Thailand: is it worth it? | PattayaPets",
  desc: "How pet insurance works in Thailand, what it typically covers and " +
    "excludes, what to check before buying, and whether it is worth it in Pattaya.",
  crumb: "Pet insurance",
  breadcrumbs: [GUIDES],
  eyebrow: "Guide",
  h1: "Pet insurance in Thailand",
  lede: "Routine pet care in Pattaya is affordable. Pet insurance is not about " +
    "the routine &mdash; it is about the rare, expensive day.",
  verify: "This is general orientation, last reviewed May 2026, not financial or " +
    "insurance advice. Policy terms vary widely between providers &mdash; read the " +
    "actual policy document before buying.",
  sections: [
    { h: "What pet insurance does", html:
      "<p>Pet insurance in Thailand has grown in recent years. A policy is there " +
      "to cushion the cost of the <strong>big, unplanned event</strong> &mdash; " +
      "an accident, a serious illness, surgery, a hospital stay &mdash; rather " +
      "than to pay for routine vaccinations and check-ups. Cover, limits and " +
      "price vary a great deal between providers.</p>" },
    { h: "What to check before you buy", html:
      "<p>Before choosing any policy, read the document for:</p>" +
      "<ul><li><strong>What is covered</strong> &mdash; accident only, or " +
      "accident and illness; surgery; hospitalisation.</li>" +
      "<li><strong>Exclusions</strong> &mdash; pre-existing conditions are " +
      "almost always excluded, and some breeds or conditions may be too.</li>" +
      "<li><strong>Age limits</strong> &mdash; many insurers will not start " +
      "cover on an older pet, and cover can change as a pet ages.</li>" +
      "<li><strong>Waiting periods</strong> &mdash; the time after purchase " +
      "before you can claim.</li>" +
      "<li><strong>Limits and excess</strong> &mdash; annual and per-condition " +
      "caps, and how much you pay per claim.</li>" +
      "<li><strong>The claims process</strong> &mdash; which vets you can use, " +
      "and whether you pay and reclaim or the insurer settles directly.</li></ul>" },
    { h: "Is it worth it?", html:
      "<p>There is no universal answer. Insurance makes most sense if a sudden " +
      "four- or five-figure vet bill would genuinely hurt, and if you insure " +
      "while your pet is young and healthy &mdash; before conditions become " +
      "&lsquo;pre-existing&rsquo;. The alternative is to <strong>self-insure</strong>: " +
      "set aside a dedicated pet-emergency fund and let it build. Either way, " +
      "the goal is the same &mdash; making sure money is never the reason a pet " +
      "cannot get the treatment it needs.</p>" +
      "<p>PattayaPets does not sell insurance, earn commission, or recommend a " +
      "particular provider. Compare current policies yourself and read the " +
      "wording.</p>" }
  ],
  faqs: [
    ["Is pet insurance common in Thailand?",
     "<p>It is increasingly available, with several providers offering dog and cat policies. Terms vary widely, so compare the actual cover rather than just the price.</p>"],
    ["Will insurance cover my pet's existing condition?",
     "<p>Almost certainly not &mdash; pre-existing conditions are a standard exclusion. This is the main reason to insure while a pet is young and healthy, if you are going to insure at all.</p>"],
    ["What is the alternative to insurance?",
     "<p>Self-insuring: setting aside a dedicated savings buffer for pet emergencies. For a disciplined saver with routine, affordable vet costs, this is a genuine alternative.</p>"]
  ],
  related: [
    { name: "What it costs to own a pet", path: "/owning-a-pet-in-pattaya/cost-of-owning-a-pet.html", desc: "The wider pet budget in Pattaya." },
    { name: "Bringing a pet to Thailand", path: "/bring-pet-to-thailand/", desc: "Insurance matters most on complex moves." },
    { name: "Taking a pet out of Thailand", path: "/take-pet-out-of-thailand/", desc: "Export timelines and unexpected vet bills." },
    { name: "Vets in Pattaya", path: "/vets/", desc: "The directory of clinics and hospitals." },
    { name: "Pet emergencies", path: "/pet-emergency/", desc: "When the big, unplanned bills happen." }
  ]
}));

/* ---------------- CATS HUB ---------------- */
pages.push(hub({
  path: "/cats/",
  title: "Cats in Pattaya: a cat owner's guide | PattayaPets",
  desc: "Everything for cat owners in Pattaya: vets, hot-climate care, bringing " +
    "or adopting a cat, and keeping a cat safe and happy in the tropics.",
  crumb: "Cats",
  breadcrumbs: [],
  eyebrow: "Species hub",
  h1: "Cats in Pattaya",
  lede: "Everything on PattayaPets that matters to cat owners, gathered in one " +
    "place &mdash; from finding a vet to bringing a cat to Thailand.",
  intro:
    "<p>Cats adapt well to Pattaya life, and many live happily as indoor or " +
    "indoor-outdoor pets. The heat, parasites, traffic and free-roaming animals " +
    "all still apply &mdash; the guides below cover what a cat owner here needs.</p>",
  groups: [
    {
      title: "Cat-owner guides",
      cards: [
        { name: "Indoor or outdoor?", desc: "Keeping a cat safe here: traffic, street dogs, balconies and disease.", path: "/cats/indoor-vs-outdoor-cats.html" },
        { name: "Cat vaccinations & health", desc: "The routine vaccination, parasite and neutering picture for cats.", path: "/cats/cat-vaccinations-thailand.html" },
        { name: "Getting a cat", desc: "Adopting, raising a kitten, or taking in a street cat.", path: "/cats/getting-a-cat-in-pattaya.html" },
        { name: "Cat boarding", desc: "Catteries, sitters and care for your cat while you travel.", path: "/cats/cat-boarding-pattaya.html" }
      ]
    },
    {
      title: "Caring for a cat in Pattaya",
      cards: [
        { name: "Vets & animal hospitals", desc: "Find a clinic for your cat, including exotic-friendly hospitals.", path: "/vets/" },
        { name: "Hot-climate pet care", desc: "Keeping a cat cool, hydrated and safe in the tropics.", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html" },
        { name: "Groomers", desc: "Cat grooming salons in Pattaya.", path: "/groomers/" },
        { name: "Ticks & fleas", desc: "Year-round parasite prevention, yes, indoor cats too.", path: "/pet-emergency/ticks-and-fleas.html" },
        { name: "What it costs", desc: "Budgeting for a cat in Pattaya.", path: "/owning-a-pet-in-pattaya/cost-of-owning-a-pet.html" },
        { name: "Where to buy pet food", desc: "Cat food and litter: shops, supermarkets and online.", path: "/owning-a-pet-in-pattaya/where-to-buy-pet-food.html" },
        { name: "Pet insurance", desc: "Whether to insure your cat in Thailand.", path: "/pet-insurance-thailand.html" },
        { name: "Pet health in Pattaya", desc: "Heartworm, parasites, skin and ear problems and neutering.", path: "/pet-health-pattaya/" }
      ]
    },
    {
      title: "Getting a cat",
      cards: [
        { name: "Adopt a cat", desc: "Pattaya shelters and rescues rehoming cats.", path: "/adopt-a-pet-pattaya/" },
        { name: "Bring a cat to Thailand", desc: "The full import process for a cat.", path: "/bring-pet-to-thailand/" },
        { name: "Take a cat out of Thailand", desc: "Exporting a cat when you move on.", path: "/take-pet-out-of-thailand/" }
      ]
    },
    {
      title: "If something goes wrong",
      cards: [
        { name: "Pet emergencies", desc: "24-hour vets and the hazards to know.", path: "/pet-emergency/" },
        { name: "Poisoning", desc: "Household hazards that are toxic to cats.", path: "/pet-emergency/poisoning.html" },
        { name: "Pet first aid", desc: "The calm basics if your cat is hurt or unwell.", path: "/pet-emergency/pet-first-aid.html" }
      ]
    }
  ]
}));

/* ---------------- DOGS HUB ---------------- */
pages.push(hub({
  path: "/dogs/",
  title: "Dogs in Pattaya: a dog owner's guide | PattayaPets",
  desc: "Everything for dog owners in Pattaya: vets, walking, training, " +
    "dog-friendly places, hot-climate care, and bringing or adopting a dog.",
  crumb: "Dogs",
  breadcrumbs: [],
  eyebrow: "Species hub",
  h1: "Dogs in Pattaya",
  lede: "Everything on PattayaPets that matters to dog owners, in one place " +
    "&mdash; care, walking, training, dog-friendly spots and more.",
  intro:
    "<p>Pattaya is a rewarding place to own a dog: an outdoor life, a long " +
    "beach, and a growing number of dog-friendly places. The guides below cover " +
    "the daily reality &mdash; the heat, the walks, the street dogs &mdash; and " +
    "the bigger steps like bringing a dog in or adopting one here.</p>",
  groups: [
    {
      title: "Dog-owner guides",
      cards: [
        { name: "Dog vaccinations & parasites", desc: "Core vaccinations, rabies law, heartworm and year-round prevention.", path: "/dogs/dog-vaccinations-thailand.html" },
        { name: "Choosing a dog for the heat", desc: "Which dogs cope with Pattaya's climate, and which struggle.", path: "/dogs/choosing-a-dog-for-the-climate.html" },
        { name: "Puppy care in Pattaya", desc: "The first months: vaccinations, socialising, training and the heat.", path: "/dogs/puppy-care-pattaya.html" },
        { name: "Tropical health issues", desc: "Skin, ears, tick-borne disease and the problems the climate brings.", path: "/dogs/common-dog-health-issues-tropics.html" }
      ]
    },
    {
      title: "Caring for a dog in Pattaya",
      cards: [
        { name: "Vets & animal hospitals", desc: "Find a clinic or 24-hour hospital for your dog.", path: "/vets/" },
        { name: "Hot-climate pet care", desc: "The heat is the biggest daily adjustment, here is how.", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html" },
        { name: "Where to walk your dog", desc: "Building a safe, cool-hours walking routine.", path: "/owning-a-pet-in-pattaya/where-to-walk-your-dog.html" },
        { name: "Dog trainers", desc: "Obedience and behaviour help from Pattaya trainers.", path: "/trainers/" },
        { name: "Dog registration & the law", desc: "Rabies law and local registration for dogs.", path: "/owning-a-pet-in-pattaya/dog-registration-thailand.html" },
        { name: "Grooming", desc: "Dog groomers across Pattaya.", path: "/groomers/" },
        { name: "Boarding & daycare", desc: "Dog hotels and kennels while you travel.", path: "/boarding/" },
        { name: "Pet health in Pattaya", desc: "Heartworm, tick disease, skin and ear problems and more.", path: "/pet-health-pattaya/" }
      ]
    },
    {
      title: "Out and about",
      cards: [
        { name: "Dog-friendly Pattaya", desc: "Beaches, cafes, restaurants, hotels and more.", path: "/dog-friendly-pattaya/" },
        { name: "Dog-friendly beaches", desc: "Where dogs can enjoy the sand and sea.", path: "/dog-friendly-pattaya/beaches.html" },
        { name: "Street-dog encounters", desc: "Walking safely around Pattaya's free-roaming dogs.", path: "/pet-emergency/street-dog-encounters.html" }
      ]
    },
    {
      title: "Getting a dog, and emergencies",
      cards: [
        { name: "Adopt a dog", desc: "Pattaya shelters and rescues rehoming dogs.", path: "/adopt-a-pet-pattaya/" },
        { name: "Bring a dog to Thailand", desc: "The full import process for a dog.", path: "/bring-pet-to-thailand/" },
        { name: "Pet emergencies", desc: "24-hour vets, heatstroke, snakes and more.", path: "/pet-emergency/" }
      ]
    }
  ]
}));

module.exports = pages;
