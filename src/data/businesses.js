"use strict";
/* PattayaPets business directory data.
   Phase 1 = factual listings compiled from public sources. Verdicts are added
   only after an anonymous visit. Never invent facts; leave a field null if not
   verified and the listing simply omits that row. */

const CATEGORIES = {
  vets: {
    name: "Vets & animal hospitals", slug: "vets", schemaType: "VeterinaryCare", one: "vet",
    intro: "General clinics, full animal hospitals and 24-hour emergency care across " +
      "Pattaya. Each listing is a verified facts page; an honest verdict is added after " +
      "an anonymous visit. PattayaPets never rates veterinary medical quality, only the " +
      "business experience."
  },
  groomers: {
    name: "Pet groomers", slug: "groomers", schemaType: "LocalBusiness", one: "groomer",
    intro: "Dog and cat grooming salons in Pattaya for baths, breed clips, de-shedding, " +
      "nail trims and tidy-ups. Verified facts pages; verdicts follow an anonymous visit."
  },
  boarding: {
    name: "Pet boarding & daycare", slug: "boarding", schemaType: "LocalBusiness", one: "boarding provider",
    intro: "Pet hotels, kennels, resorts and daycare for when you travel or work. " +
      "Verified facts pages; verdicts follow an anonymous visit."
  },
  "pet-shops": {
    name: "Pet shops & supplies", slug: "pet-shops", schemaType: "PetStore", one: "pet shop",
    intro: "Where to buy pet food, litter, toys, tanks and supplies in Pattaya, in person " +
      "and near you. Verified facts pages; verdicts follow an anonymous visit."
  },
  trainers: {
    name: "Dog trainers & behaviourists", slug: "trainers", schemaType: "LocalBusiness", one: "trainer",
    intro: "Obedience training, puppy classes and behaviour help from Pattaya-based dog " +
      "trainers. Verified facts pages; verdicts follow an anonymous visit."
  },
  "pet-relocation": {
    name: "Pet relocation agents", slug: "pet-relocation", schemaType: "LocalBusiness", one: "relocation agent",
    intro: "Specialist agents who handle pet import and export, including DLD permits, " +
      "health certificates, crates and flight booking. Most serve all of Thailand."
  },
  "mobile-vets": {
    name: "Mobile & home-visit vets", slug: "mobile-vets", schemaType: "VeterinaryCare", one: "mobile vet",
    intro: "Vets who come to you, useful for nervous pets, multi-cat homes and owners " +
      "without transport. A young category on PattayaPets; verified listings are being added."
  }
};

const AREAS = {
  naklua: { name: "Naklua", blurb: "The northern beach district above the city centre, around Naklua Road." },
  wongamat: { name: "Wongamat", blurb: "The quiet upmarket beachfront just north of Pattaya." },
  "central-pattaya": { name: "Central Pattaya", blurb: "The busy core, around Beach Road, Second Road and Soi Buakhao." },
  pratumnak: { name: "Pratumnak", blurb: "The leafy hill between Pattaya and Jomtien." },
  jomtien: { name: "Jomtien", blurb: "The long beach suburb popular with families and expats." },
  "bang-saray": { name: "Bang Saray", blurb: "The relaxed fishing town south of Jomtien." },
  sattahip: { name: "Sattahip", blurb: "The southern district towards the naval base." },
  banglamung: { name: "Banglamung", blurb: "The wider district surrounding Pattaya city." }
};

const BUSINESSES = [
  {
    slug: "thonglor-pet-hospital-pattaya",
    name: "Thonglor Pet Hospital - Pattaya",
    category: "vets", areas: ["central-pattaya"], type: "Animal hospital", c24: true,
    address: "147/41 Sukhumvit Road, Bang Lamung, Chon Buri 20150",
    phone: "038 423 078", tel: "+6638423078",
    website: "https://thonglorpet.com/en/branch/pethospital-thonglorpet-pattaya",
    hours: "Open 24 hours",
    languages: "Thai, with an English-language international service",
    services: ["24-hour emergency care", "Diagnostic imaging", "Surgery", "Inpatient care", "Referral cases"],
    summary: "The Pattaya branch of Thonglor Pet Hospital, one of Thailand's largest " +
      "veterinary networks. It operates around the clock and acts as a referral hub for " +
      "the Eastern Seaboard, with an international service desk for non-Thai-speaking owners."
  },
  {
    slug: "pattaya-veterinary-clinic",
    name: "Pattaya Veterinary Clinic",
    category: "vets", areas: ["naklua"], type: "Veterinary clinic", c24: false,
    address: "157/15 Moo 5, Pattaya-Naklua Road, Bang Lamung, Chon Buri 20150",
    phone: "065 020 3773", tel: "+66650203773",
    website: null, hours: null,
    languages: "Thai and English",
    services: ["General consultations", "Vaccinations", "Routine treatment"],
    summary: "A long-established, well-regarded small clinic on Naklua Road near the " +
      "Soi 16/2 junction. It is compact rather than a full hospital, and known among " +
      "Naklua residents as a steady, no-frills option for everyday care."
  },
  {
    slug: "vetazoo-animal-and-exotic-pet-hospital",
    name: "Vetazoo Animal & Exotic Pet Hospital",
    category: "vets", areas: ["central-pattaya"], type: "Animal & exotic pet hospital", c24: true,
    address: "140/84 Moo 11, Sukhumvit Road, South Pattaya (opposite Lotus's South Pattaya)",
    phone: "082 662 7999", tel: "+66826627999",
    website: "https://vetazoo.com/",
    hours: "Daily 10:00-22:00; 24-hour emergency line",
    languages: "Thai and English",
    services: ["Cats & dogs", "Exotic pets", "Birds & reptiles", "Surgery", "24-hour emergency line"],
    summary: "One of the few Pattaya hospitals set up for exotic pets such as birds, " +
      "reptiles and small mammals, alongside cats and dogs. Office hours run 10:00 to " +
      "22:00 daily, with a 24-hour emergency phone line."
  },
  {
    slug: "muang-ake-pet-hospital-pattaya",
    name: "Muang Ake Pet Hospital - Pattaya",
    category: "vets", areas: ["central-pattaya"], type: "Animal hospital", c24: true,
    address: "44/57 Moo 11, Sukhumvit Road, Nong Prue, Bang Lamung, Chon Buri 20150",
    phone: "038 233 200", tel: "+6638233200",
    website: null, hours: "Open 24 hours",
    languages: "Thai; confirm English-language support when booking",
    services: ["24-hour service", "General treatment", "Surgery", "Inpatient care"],
    summary: "The Pattaya branch of the Muang Ake veterinary group, on Sukhumvit Road in " +
      "Nong Prue. It operates 24 hours, which makes it one of the options worth knowing " +
      "for after-hours care."
  },
  {
    slug: "th-animal-hospital-pattaya",
    name: "TH Animal Hospital",
    category: "vets", areas: ["central-pattaya"], type: "Animal hospital", c24: false,
    address: null, phone: null, tel: null,
    website: "https://www.thvet.com/en/home/",
    hours: null,
    languages: "Thai and English",
    services: ["General treatment", "Neurology", "Ophthalmology", "Dermatology", "Orthopaedics", "Physical therapy"],
    summary: "A Pattaya animal hospital that treats everyday illness alongside more " +
      "specialised areas including neurological, eye, skin and bone-and-joint conditions, " +
      "and offers physical therapy and consulting services."
  },
  {
    slug: "pattaya-community-pet-hospital",
    name: "Pattaya Community Pet Hospital",
    category: "vets", areas: ["central-pattaya"], type: "Animal hospital", c24: true,
    address: null, phone: null, tel: null, website: null, hours: "Open 24 hours",
    languages: "Thai; confirm English-language support when booking",
    services: ["24-hour service", "General treatment", "Surgery"],
    summary: "A 24-hour community animal hospital serving the Pattaya area, useful to " +
      "know for general and after-hours care. Confirm the current location and contact " +
      "details before travelling."
  },
  {
    slug: "north-pattaya-animal-hospital",
    name: "North Pattaya Animal Hospital",
    category: "vets", areas: ["naklua"], type: "Animal hospital", c24: false,
    address: null, phone: null, tel: null, website: null, hours: null,
    languages: "Thai; confirm English-language support when booking",
    services: ["General consultations", "Vaccinations", "Treatment & surgery"],
    summary: "An animal hospital serving the North Pattaya and Naklua side of the city, " +
      "handling general consultations, vaccinations and routine treatment."
  },

  {
    slug: "pattaya-city-pet-shop-grooming",
    name: "Pattaya City Pet Shop & Grooming Salon",
    category: "groomers", areas: ["central-pattaya"], type: "Grooming salon & pet shop", c24: false,
    address: null, phone: "096 293 9454", tel: "+66962939454",
    website: "https://www.pattayagrooming.com/", hours: null,
    languages: "Thai and English",
    services: ["Dog & cat grooming", "Bath & blow-dry", "Breed clips", "Nail trims", "Pet supplies"],
    summary: "A combined grooming salon and pet shop serving central Pattaya, handling " +
      "both dogs and cats with baths, breed clips and nail care alongside a range of " +
      "pet supplies."
  },
  {
    slug: "jaijai-grooming",
    name: "Jaijai Grooming",
    category: "groomers", areas: ["central-pattaya"], type: "Dog & cat grooming", c24: false,
    address: null, phone: null, tel: null,
    website: "https://www.facebook.com/jaijaigrooming/", hours: null,
    languages: "Thai; confirm English-language support when booking",
    services: ["Dog grooming", "Cat grooming", "Bath & tidy"],
    summary: "A Pattaya grooming service for dogs and cats, run through its Facebook " +
      "page and arranged by appointment."
  },
  {
    slug: "furiday-pet-grooming",
    name: "FURiday Pet Grooming",
    category: "groomers", areas: ["central-pattaya"], type: "Pet grooming salon", c24: false,
    address: null, phone: null, tel: null,
    website: "https://www.facebook.com/FURidaypetgrooming/", hours: null,
    languages: "Thai and English",
    services: ["Dog grooming", "Cat grooming", "Bath & blow-dry"],
    summary: "A pet grooming salon in Pattaya, reachable through its Facebook page, " +
      "offering grooming for both dogs and cats."
  },
  {
    slug: "furpet-grooming-and-hotel",
    name: "Furpet Grooming & Hotel",
    category: "groomers", areas: ["banglamung"], type: "Grooming salon & pet hotel", c24: false,
    address: null, phone: null, tel: null,
    website: "https://www.facebook.com/people/Furpet-Grooming-and-Hotel/61561258409344/",
    hours: null,
    languages: "Thai; confirm English-language support when booking",
    services: ["Dog grooming", "Cat grooming", "Bathing", "Short-stay boarding"],
    summary: "A Pattaya business combining pet grooming with short-stay boarding for both " +
      "dogs and cats, handy if you want grooming and a few nights' stay arranged together."
  },

  {
    slug: "pattaya-dog-stay",
    name: "Pattaya Dog Stay",
    category: "boarding", areas: ["central-pattaya"], type: "Dog hotel & daycare", c24: false,
    address: "63/26 Moo 5, Tessaban 1 Road (Soi 27), Pattaya",
    phone: "095 776 4698", tel: "+66957764698",
    website: "https://www.facebook.com/Pattayadogstay/", hours: null,
    languages: "Thai and English",
    services: ["Air-conditioned rooms", "Dog daycare", "Multi-day boarding", "Saltwater pool", "Garden exercise area", "Grooming"],
    summary: "A dog hotel and daycare in central Pattaya with air-conditioned rooms, a " +
      "garden exercise area and a saltwater pool. It handles both daycare and multi-day " +
      "stays, and offers grooming on site."
  },
  {
    slug: "elite-dog-resort",
    name: "Elite Dog Resort",
    category: "boarding", areas: ["pratumnak"], type: "Luxury dog resort & spa", c24: false,
    address: null, phone: null, tel: null,
    website: "https://elitedogresort.com/", hours: null,
    languages: "Thai and English",
    services: ["Climate-controlled rooms", "Boarding", "Daycare", "Grooming & spa", "24/7 supervision", "VIP rooms"],
    summary: "A luxury dog resort and spa on Pratumnak hill, focused on small breeds, " +
      "with climate-controlled rooms, round-the-clock supervision, grooming and spa " +
      "services, and standard or VIP options."
  },
  {
    slug: "pattaya-dog-hotel",
    name: "Pattaya Dog Hotel",
    category: "boarding", areas: ["banglamung"], type: "Dog hotel", c24: false,
    address: null, phone: null, tel: null,
    website: "https://www.pattayadoghotel.com/", hours: null,
    languages: "Thai and English",
    services: ["Dog boarding", "Supervised playtime", "Grooming"],
    summary: "A Pattaya dog hotel offering boarding with plenty of supervised playtime, " +
      "plus grooming, for owners who want their dog kept active while they are away."
  },

  {
    slug: "brand-dog-pattaya-pet-supplies",
    name: "Brand Dog - Pattaya Pet Supplies",
    category: "pet-shops", areas: ["central-pattaya"], type: "Pet supplies shop", c24: false,
    address: "385 South Pattaya Road, Pattaya City, Bang Lamung, Chon Buri 20150",
    phone: "062 428 8513", tel: "+66624288513",
    website: null, hours: "Daily 10:00-21:00",
    languages: "Thai and English",
    services: ["Pet food", "Treats & supplements", "Toys & accessories", "Supplies"],
    summary: "A pet supplies shop on South Pattaya Road with a broad range of food, " +
      "treats and accessories for dogs and cats. Open daily from 10:00 to 21:00."
  },
  {
    slug: "petsmart-pattaya",
    name: "PetSmart Pattaya",
    category: "pet-shops", areas: ["jomtien"], type: "Pet shop", c24: false,
    address: "315/100-101 Thep Prasit Road, Pattaya City, Bang Lamung, Chon Buri 20150",
    phone: null, tel: null,
    website: "https://www.facebook.com/PetSmart.th/", hours: null,
    languages: "Thai and English",
    services: ["Pet food", "Snacks & treats", "Accessories"],
    summary: "A pet shop on Thep Prasit Road towards the Jomtien side of the city, with " +
      "a large selection of pet food and snacks. It is not affiliated with the US " +
      "PetSmart chain."
  },
  {
    slug: "peturday-pattaya",
    name: "Peturday Pattaya",
    category: "pet-shops", areas: ["pratumnak"], type: "Pet shop", c24: false,
    address: null, phone: "098 471 4877", tel: "+66984714877",
    website: "https://www.facebook.com/peturdaypty", hours: null,
    languages: "Thai and English",
    services: ["Pet food", "Supplies", "Accessories"],
    summary: "The neighbourhood pet shop for the Pratumnak area, on Pratumnak Road. " +
      "Useful for residents of the hill who would rather not drive into central Pattaya " +
      "for supplies."
  },
  {
    slug: "pet-lovers-centre-pattaya",
    name: "Pet Lovers Centre Pattaya",
    category: "pet-shops", areas: ["central-pattaya"], type: "Pet shop (chain branch)", c24: false,
    address: null, phone: null, tel: null,
    website: "https://www.petloverscentre.co.th/", hours: null,
    languages: "Thai and English",
    services: ["Pet food", "Accessories", "Health & care products"],
    summary: "A Pattaya branch of Pet Lovers Centre, one of Southeast Asia's largest pet " +
      "retail chains, carrying mainstream food and accessory brands. Confirm the exact " +
      "mall location and hours before visiting."
  },

  {
    slug: "canine-point-academy",
    name: "Canine Point Academy",
    category: "trainers", areas: ["banglamung"], type: "Dog training academy", c24: false,
    address: null, phone: null, tel: null,
    website: "https://www.caninepointacademy.com/", hours: null,
    languages: "English and Thai",
    services: ["Obedience training", "Puppy classes", "Dog boarding", "Daycare"],
    summary: "A dog training academy that also offers boarding and daycare, led by a " +
      "trainer holding international accreditation. It serves the wider Pattaya area; " +
      "confirm the location and class schedules directly."
  },
  {
    slug: "zoeta-dogsoul",
    name: "Zoeta Dogsoul",
    category: "trainers", areas: ["banglamung"], type: "Dog training & behaviour", c24: false,
    address: null, phone: "095 849 6783", tel: "+66958496783",
    website: "https://zoeta-dogsoul.com/dog-training-pattaya/", hours: null,
    languages: "English and Thai",
    services: ["Private dog training", "Behaviour consultations", "Obedience classes"],
    summary: "A Pattaya dog-training operation offering private training and behaviour " +
      "work, with trainers who cite study under established animal behaviourists. " +
      "Sessions are arranged by appointment."
  },
  {
    slug: "k9-pattaya-dog-training-school",
    name: "K9 Pattaya Dog Training School",
    category: "trainers", areas: ["banglamung"], type: "Dog training school", c24: false,
    address: null, phone: null, tel: null,
    website: "http://www.k9pattaya.com/", hours: null,
    languages: "English and Thai",
    services: ["Obedience training", "Protection training", "Board-and-train"],
    summary: "A long-running dog training school in the Pattaya area offering obedience " +
      "and more advanced training programmes. Confirm current programmes and location " +
      "directly before enrolling."
  },
  {
    slug: "personal-dog-trainer-max",
    name: "Personal Dog Trainer Max",
    category: "trainers", areas: ["bang-saray", "sattahip"], type: "Private dog trainer", c24: false,
    address: null, phone: null, tel: null,
    website: "https://trainerpattaya.com/dog-training/", hours: null,
    languages: "English and Thai",
    services: ["Private family-dog training", "Positive-reinforcement methods", "In-home sessions"],
    summary: "A private dog trainer working with family dogs across Pattaya, Bang Saray " +
      "and Sattahip using positive-reinforcement methods. Training is one-to-one and " +
      "arranged by appointment."
  },

  {
    slug: "pet-relocation-thailand",
    name: "Pet Relocation Thailand",
    category: "pet-relocation", areas: [], type: "Pet import & export agent", c24: false,
    address: null, phone: null, tel: null,
    website: "https://www.petrelocationthailand.com/", hours: null,
    languages: "English and Thai",
    services: ["Import & export", "DLD permits", "Health certificates", "Crates & flight booking"],
    summary: "An agency handling pet import to and export from Thailand, coordinating " +
      "vaccinations, microchipping, blood tests, health certificates and permits. It " +
      "serves clients nationwide, including the Pattaya area."
  },
  {
    slug: "relo4paws",
    name: "Relo4Paws",
    category: "pet-relocation", areas: [], type: "Pet relocation consultancy", c24: false,
    address: null, phone: null, tel: null,
    website: "https://www.relo4paws.com/", hours: null,
    languages: "English and Thai",
    services: ["Pet relocation consulting", "Export from Thailand", "Worldwide destinations"],
    summary: "A consultancy arranging pet relocation from Thailand to destinations " +
      "worldwide, positioning itself on fair pricing and hands-on support through the " +
      "process."
  },
  {
    slug: "united-pet-express",
    name: "United Pet Express",
    category: "pet-relocation", areas: [], type: "Pet import & export agent", c24: false,
    address: null, phone: null, tel: null,
    website: "https://www.unitedpetexpress.com/", hours: null,
    languages: "English and Thai",
    services: ["Import to Thailand", "Export from Thailand", "Door-to-door transport"],
    summary: "A pet transport company handling import to and export from Thailand, " +
      "including the paperwork and logistics of moving a pet internationally."
  },
  {
    slug: "asia-relocation-pet-transport",
    name: "Asia Relocation - Pet Transport",
    category: "pet-relocation", areas: [], type: "Relocation company (pet division)", c24: false,
    address: null, phone: null, tel: null,
    website: "https://www.asia-relocation.com/thailand/moving-services/pet-relocation/",
    hours: null,
    languages: "English and Thai",
    services: ["Pet relocation", "Vaccination & microchip coordination", "Export permits"],
    summary: "The pet division of a Thailand relocation company, coordinating " +
      "vaccinations, microchipping, health certificates and export permits with the " +
      "Department of Livestock Development."
  },
  {
    slug: "pawspective-relocations",
    name: "Pawspective Relocations",
    category: "pet-relocation", areas: [], type: "Pet travel specialist", c24: false,
    address: null, phone: null, tel: null,
    website: "https://www.pettravelthailand.com/", hours: null,
    languages: "English and Thai",
    services: ["Pet travel planning", "Import & export", "Documentation support"],
    summary: "A pet-travel specialist offering planning and documentation support for " +
      "moving pets into and out of Thailand."
  }
];

module.exports = { CATEGORIES, AREAS, BUSINESSES };
