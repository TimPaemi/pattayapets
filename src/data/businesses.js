"use strict";
/* PattayaPets business directory data.
   Listings = factual pages compiled from public sources. Optional fields after
   an anonymous visit: verdict ("recommend"|"ok"|"avoid"), reviewed (YYYY-MM-DD),
   review (business-experience text only). Never invent facts; leave null if not
   verified and the listing simply omits that row.
   Contact: prefer website, email, WhatsApp (whatsapp: digits only) and LINE (line:
   ID without @). Do not publish landline phones except verified numbers on 24-hour
   emergency vet listings. */

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
    intro: "Pet hotels, kennels, catteries, resorts and daycare for when you travel " +
      "or work. Dog boarding is more common in Pattaya than dedicated catteries &mdash; " +
      "confirm a place accepts cats and keeps them apart from dogs. Verified facts " +
      "pages; verdicts follow an anonymous visit."
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
    intro: "Vets who come to you &mdash; useful for nervous pets, multi-cat homes and " +
      "owners without transport. Some Pattaya clinics offer home visits alongside " +
      "their clinic work; coverage, fees and availability vary. Verified facts pages; " +
      "verdicts follow an anonymous visit."
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
    website: "https://en.muangakepethospital.com", hours: "Open 24 hours",
    languages: "Thai; confirm English-language support when booking",
    services: ["24-hour service", "General treatment", "Surgery", "Inpatient care"],
    summary: "The Pattaya branch of the Muang Ake veterinary group, on Sukhumvit Road in " +
      "Nong Prue. It operates 24 hours, which makes it one of the options worth knowing " +
      "for after-hours care."
  },
  {
    slug: "pattaya-animal-hospital",
    name: "Pattaya Animal Hospital",
    category: "vets", areas: ["central-pattaya"], type: "Animal hospital", c24: false,
    address: "49/86-7 Moo 10, Pattaya Tai Road, Nong Prue, Bang Lamung, Chon Buri 20150",
    phone: null, tel: null,
    website: null, hours: "Confirm current hours when booking",
    languages: "Thai; confirm English-language support when booking",
    services: ["General consultations", "Vaccinations", "Treatment & surgery"],
    summary: "An animal hospital on Pattaya Tai Road in central Pattaya, handling " +
      "general consultations, vaccinations and routine treatment. Confirm current " +
      "hours and English-language support when booking."
  },
  {
    slug: "pattaya-community-pet-hospital",
    name: "Pattaya Community Pet Hospital",
    category: "vets", areas: ["central-pattaya", "banglamung"], type: "Animal hospital", c24: true,
    address: "248/6-8 Moo 5, Nernplubwan, Nong Prue, Bang Lamung, Chon Buri 20150",
    phone: "038 410 545", tel: "+6638410545",
    website: "https://en.muangakepethospital.com/pattaya-community-pet-hospital/",
    hours: "Open 24 hours",
    languages: "Thai; confirm English-language support when booking",
    services: ["24-hour service", "General treatment", "Surgery"],
    summary: "A 24-hour community animal hospital in Nernplubwan, part of the Muang Ake " +
      "veterinary group. Also listed on 061 094 9996. It handles general and after-hours " +
      "care across the Pattaya area."
  },
  {
    slug: "animal-army-hospital",
    name: "Animal Army Hospital",
    category: "vets", areas: ["jomtien", "sattahip"], type: "Animal hospital & rescue clinic", c24: false,
    address: "90/55 Moo 5, Na Jomtien, Sattahip District, Chon Buri 20250",
    phone: "085 093 5954", tel: "+66850935954",
    website: "https://animalarmy.org/",
    hours: "Daily 08:00-17:00; animal intake by appointment (emergencies excepted)",
    languages: "Thai and English",
    services: ["General consultations", "Rescue ambulance", "Surgery", "Street-animal care", "Adoption support"],
    summary: "A licensed non-profit animal hospital in Na Jomtien, operating since 1994, " +
      "with a rescue ambulance for street animals and pets in urgent need. Open daily " +
      "08:00-17:00; animal intake by appointment except emergencies."
  },
  {
    slug: "siam-country-pet-hospital",
    name: "Siam Country Pet Hospital",
    category: "vets", areas: ["banglamung"], type: "Veterinary clinic", c24: false,
    address: "Pornpraphanimit Road (Siam Country Club Road), Nong Prue, Bang Lamung, Chon Buri 20150",
    phone: null, tel: null,
    website: null, hours: "Daily 08:00-00:00 (midnight); confirm current hours when booking",
    languages: "Thai and English",
    services: ["General consultations", "Vaccinations", "Surgery", "X-ray & ultrasound", "Blood testing", "Home visits (by arrangement)"],
    summary: "A clinic on Siam Country Club Road (Pornpraphanimit) in East Pattaya, with " +
      "on-site diagnostics and English-speaking staff. Also listed on 080 573 6727. " +
      "Home visits can be arranged — confirm coverage and fees when booking."
  },
  {
    slug: "north-pattaya-animal-hospital",
    name: "North Pattaya Animal Hospital",
    category: "vets", areas: ["naklua", "wongamat"], type: "Animal hospital", c24: false,
    address: "120/20 Moo 6, Sukhumvit Road, Naklua, Bang Lamung, Chon Buri 20150",
    phone: null, tel: null,
    website: null, hours: null,
    languages: "Thai; confirm English-language support when booking",
    services: ["General consultations", "Vaccinations", "Treatment & surgery",
      "Specialist heart clinic", "Neurology", "Exotic pets", "Grooming & bathing"],
    summary: "A well-established animal hospital on Sukhumvit Road in Naklua, founded in " +
      "2006, with specialist clinics alongside everyday care and an on-site grooming " +
      "service. Also reachable on 082 946 6979. Near Bangkok Hospital Pattaya."
  },

  {
    slug: "pattaya-city-pet-shop-grooming",
    name: "Pattaya City Pet Shop & Grooming Salon",
    category: "groomers", areas: ["central-pattaya"], type: "Grooming salon & pet shop", c24: false,
    address: "209/17 Soi Khao Talo, Pattaya City, Bang Lamung, Chon Buri 20150",
    phone: "096 293 9454", tel: "+66962939454",
    website: "https://www.pattayagrooming.com/", hours: null,
    languages: "Thai and English",
    services: ["Dog & cat grooming", "Bath & blow-dry", "Breed clips", "Nail trims", "Pet supplies"],
    summary: "A combined grooming salon and pet shop serving central Pattaya, handling " +
      "both dogs and cats with baths, breed clips and nail care alongside a range of " +
      "pet supplies."
  },
  {
    slug: "jaijai-grooming",
    name: "Jaijai Spa & Grooming",
    category: "groomers", areas: ["banglamung"], type: "Dog & cat grooming", c24: false,
    address: "97/15 Moo 6, Pong, Bang Lamung, Chon Buri 20150",
    phone: "062 502 9871", tel: "+66625029871",
    website: "https://www.facebook.com/jaijaigrooming/", hours: null,
    languages: "Thai; confirm English-language support when booking",
    services: ["Dog grooming", "Cat grooming", "Bath & tidy"],
    summary: "A grooming salon in the Pong area east of Pattaya city, listed on Wongnai " +
      "as jaijai spa & grooming. Appointments are arranged through its Facebook page."
  },
  {
    slug: "woof-pattaya",
    name: "Woof Pattaya",
    category: "groomers", areas: ["banglamung", "central-pattaya"], type: "Grooming salon & pet boarding", c24: false,
    address: "77/10 Moo 1, Ruean Phisa Village, Nong Prue, Bang Lamung, Chon Buri 20150",
    phone: "083 012 1897", tel: "+66830121897",
    website: null, hours: null,
    languages: "Thai; confirm English-language support when booking",
    services: ["Dog grooming", "Cat grooming", "Bath & blow-dry", "Pet boarding", "Pick-up service (by arrangement)"],
    summary: "A grooming salon and boarding service in Nong Prue (Ruean Phisa Village), " +
      "offering baths, clips and short-stay boarding for dogs and cats. Pick-up " +
      "service may be available by arrangement — confirm coverage when booking."
  },
  {
    slug: "furiday-pet-grooming",
    name: "FURiday Pet Grooming",
    category: "groomers", areas: ["central-pattaya"], type: "Pet grooming salon", c24: false,
    address: null, phone: null, tel: null,
    website: "https://www.facebook.com/FURidaypetgrooming/", hours: null,
    languages: "Thai and English",
    services: ["Dog grooming", "Cat grooming", "Bath & blow-dry"],
    summary: "A pet grooming salon in Pattaya reachable through its Facebook page only. " +
      "Confirm the current address, hours and booking arrangements on Facebook " +
      "before visiting."
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
    summary: "A Pattaya grooming and short-stay boarding business listed on Facebook. " +
      "Confirm the current address, hours and services directly on its page before visiting."
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
    address: "352/680 Moo 12, Phra Tamnak, Pattaya City, Bang Lamung, Chon Buri 20150",
    phone: null, tel: null,
    website: "https://elitedogresort.com/", hours: "Daily 08:00-17:00; extended hours by appointment",
    languages: "Thai and English",
    services: ["Climate-controlled rooms", "Boarding", "Daycare", "Grooming & spa", "24/7 supervision", "VIP rooms"],
    summary: "A luxury dog resort and spa on Pratumnak hill, focused on small breeds, " +
      "with climate-controlled rooms, round-the-clock supervision, grooming and spa " +
      "services, and standard or VIP options. Enquire through the official website."
  },
  {
    slug: "pattaya-dog-hotel",
    name: "Pattaya Dog Hotel",
    category: "boarding", areas: ["bang-saray", "sattahip"], type: "Dog hotel & training facility", c24: false,
    address: "Bang Saray / Sattahip area, Chon Buri (same site as K9 Coach — confirm directions when booking)",
    phone: "080 905 3216", tel: "+66809053216",
    website: "https://k9-coach.co.th/", hours: null,
    languages: "English and Thai",
    services: ["Dog boarding", "Board-and-train", "Supervised playtime", "Grooming"],
    summary: "A dog hotel and boarding facility near Bang Saray on the same 18-rai " +
      "site as K9 Coach dog training. Confirm whether you are booking boarding " +
      "only or a combined training stay when you enquire."
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
    website: "https://www.facebook.com/PetSmart.th/", hours: "Daily from 10:00",
    languages: "Thai and English",
    services: ["Pet food", "Snacks & treats", "Accessories"],
    summary: "A pet shop on Thep Prasit Road towards the Jomtien side of the city, with " +
      "a large selection of pet food and snacks. It is not affiliated with the US " +
      "PetSmart chain."
  },
  {
    slug: "tong-ma-aquarium-and-pets-shop",
    name: "Tong-ma Aquarium & Pets Shop",
    category: "pet-shops", areas: ["jomtien"], type: "Pet shop & aquarium", c24: false,
    address: "229/70 Thep Prasit Road, Pattaya City, Bang Lamung, Chon Buri 20150",
    phone: "062 881 4452", tel: "+66628814452",
    website: null, hours: null,
    languages: "Thai; confirm English-language support when booking",
    services: ["Pet food", "Aquarium fish & supplies", "Accessories"],
    summary: "A pet and aquarium shop on Thep Prasit Road on the Jomtien side of " +
      "Pattaya, stocking fish, pond supplies and everyday pet accessories alongside " +
      "food. Confirm current hours before visiting."
  },
  {
    slug: "peturday-pattaya",
    name: "Peturday Pattaya",
    category: "pet-shops", areas: ["pratumnak"], type: "Pet shop", c24: false,
    address: "337/10 Phra Tamnak, Bang Lamung, Chon Buri 20150",
    phone: "098 471 4877", tel: "+66984714877",
    website: "https://www.facebook.com/peturdaypty", hours: null,
    languages: "Thai and English",
    services: ["Pet food", "Supplies", "Accessories"],
    summary: "The neighbourhood pet shop for the Pratumnak area, on Pratumnak Road. " +
      "Useful for residents of the hill who would rather not drive into central Pattaya " +
      "for supplies."
  },
  {
    slug: "pattaya-pet-center",
    name: "Pattaya Pet Center",
    category: "pet-shops", areas: ["central-pattaya"], type: "Pet shop", c24: false,
    address: "49/84 Moo 10, South Pattaya Soi 12, Nong Prue, Bang Lamung, Chon Buri 20150",
    phone: "087 127 7757", tel: "+66871277757",
    website: null, hours: null,
    languages: "Thai and English",
    services: ["Pet food", "Accessories", "Supplies"],
    summary: "A local pet shop on South Pattaya Soi 12 in Nong Prue, opposite the " +
      "mosque, stocking everyday food and supplies for dogs and cats."
  },

  {
    slug: "k9-coach",
    name: "K9 Coach",
    category: "trainers", areas: ["bang-saray", "sattahip", "banglamung"], type: "Dog training & behaviour", c24: false,
    address: "Bang Saray / Sattahip area, Chon Buri (18-rai facility — confirm directions when booking)",
    phone: "080 905 3216", tel: "+66809053216",
    website: "https://k9-coach.co.th/", hours: null,
    languages: "English and Thai",
    services: ["Obedience training", "Behaviour modification", "Board-and-train", "Daycare", "Private coaching"],
    summary: "An English-speaking dog-training operation on an 18-rai facility near " +
      "Bang Saray, with 36 kennels, multiple training areas and board-and-train " +
      "programmes. Also runs the Pattaya Dog Hotel boarding service on the same site. " +
      "Contact steve@k9-coach.co.th or 080 905 3216 to arrange a visit."
  },
  {
    slug: "zoeta-dogsoul",
    name: "Zoeta Dogsoul",
    category: "trainers", areas: ["central-pattaya", "banglamung"], type: "Dog training & behaviour", c24: false,
    address: "Chiang Mai (headquarters); confirm Pattaya service area when booking",
    phone: "095 849 6783", tel: "+66958496783",
    email: "info@zoeta-dogsoul.com",
    website: "https://zoeta-dogsoul.com/dog-training-pattaya/", hours: null,
    languages: "English and Thai",
    services: ["Private dog training", "Behaviour consultations", "Obedience classes"],
    summary: "A dog-training operation headquartered in Chiang Mai with a Pattaya " +
      "programme page. Also listed on info@zoeta-dogsoul.com. Confirm whether " +
      "in-person Pattaya sessions or home visits are offered when you enquire."
  },
  {
    slug: "k9-pattaya-dog-training-school",
    name: "K9 Pattaya Dog Training School",
    category: "trainers", areas: ["sattahip", "bang-saray", "jomtien"], type: "Dog training school", c24: false,
    address: "Near Wat Huay Yai, Sattahip District, Chon Buri (confirm directions when booking)",
    phone: "087 983 4466", tel: "+66879834466",
    website: "http://www.k9pattaya.com/", hours: null,
    languages: "English and Thai",
    services: ["Obedience training", "Protection training", "Board-and-train", "Dog hotel"],
    summary: "A long-running dog training school and boarding facility south of Pattaya " +
      "near Wat Huay Yai in Sattahip. Also reachable on 096 724 2255 and 089 405 1954. " +
      "Confirm current programmes and visit arrangements before enrolling."
  },

  {
    slug: "pet-relocation-thailand",
    name: "Pet Relocation Thailand",
    category: "pet-relocation", areas: [], type: "Pet import & export agent", c24: false,
    address: "15 Soi Tha Kham 13, Bang Khun Thian, Bangkok 10150",
    phone: null, tel: null,
    whatsapp: "66946942992",
    line: "petrelocation",
    email: "info@petrelocationthailand.com",
    website: "https://www.petrelocationthailand.com/", hours: "Monday–Friday 09:00–18:00",
    languages: "English and Thai",
    services: ["Import & export", "DLD permits", "Health certificates", "Crates & flight booking"],
    summary: "An agency handling pet import to and export from Thailand, coordinating " +
      "vaccinations, microchipping, blood tests, health certificates and permits. It " +
      "serves clients nationwide, including the Pattaya area. Enquire via WhatsApp, " +
      "LINE @petrelocation or the website contact form."
  },
  {
    slug: "relo4paws",
    name: "Relo4Paws",
    category: "pet-relocation", areas: [], type: "Pet relocation consultancy", c24: false,
    address: null, phone: null, tel: null,
    whatsapp: "66855419959",
    email: "info@relo4paws.com",
    website: "https://www.relo4paws.com/", hours: null,
    languages: "English and Thai",
    services: ["Pet relocation consulting", "Export from Thailand", "Worldwide destinations"],
    summary: "A consultancy arranging pet relocation from Thailand to destinations " +
      "worldwide, positioning itself on fair pricing and hands-on support through the " +
      "process. English enquiries on WhatsApp; Thai support also listed on the website."
  },
  {
    slug: "united-pet-express",
    name: "United Pet Express",
    category: "pet-relocation", areas: [], type: "Pet import & export agent", c24: false,
    address: "32/3 Soi Bangna-Trad 56, Bangna, Bangkok 10260",
    phone: null, tel: null,
    whatsapp: "66818991416",
    email: "joybelle@unitedreloth.com",
    website: "https://www.unitedpetexpress.com/", hours: "Monday–Friday 08:30–17:30",
    languages: "English and Thai",
    services: ["Import to Thailand", "Export from Thailand", "Door-to-door transport"],
    summary: "A pet transport company handling import to and export from Thailand, " +
      "including the paperwork and logistics of moving a pet internationally. Urgent " +
      "enquiries via WhatsApp; office hours Monday to Friday."
  },
  {
    slug: "asia-relocation-pet-transport",
    name: "Asia Relocation - Pet Transport",
    category: "pet-relocation", areas: [], type: "Relocation company (pet division)", c24: false,
    address: null, phone: null, tel: null,
    email: "inquiryth@asia-relocation.com",
    website: "https://www.asia-relocation.com/thailand/moving-services/pet-relocation/",
    hours: null,
    languages: "English and Thai",
    services: ["Pet relocation", "Vaccination & microchip coordination", "Export permits"],
    summary: "The pet division of a Thailand relocation company, coordinating " +
      "vaccinations, microchipping, health certificates and export permits with the " +
      "Department of Livestock Development. Enquire via the website inquiry form or " +
      "inquiryth@asia-relocation.com."
  },
  {
    slug: "pawspective-relocations",
    name: "Pawspective Relocations",
    category: "pet-relocation", areas: [], type: "Pet travel specialist", c24: false,
    address: null, phone: null, tel: null, line: "Numfonunited",
    whatsapp: "66843521056",
    website: "https://www.pettravelthailand.com/", hours: null,
    languages: "English and Thai",
    services: ["Pet travel planning", "Import & export", "Documentation support", "Door-to-door relocation"],
    summary: "A pet-travel specialist offering planning and documentation support for " +
      "moving pets into and out of Thailand, including door-to-door options. " +
      "Enquire via the website, WhatsApp or LINE ID Numfonunited."
  },

  {
    slug: "mor-ja-pet-clinic-pattaya",
    name: "Mor Ja Pet Clinic",
    category: "mobile-vets", areas: ["banglamung"], type: "Mobile & clinic pet care", c24: false,
    address: "519/156-157 Moo 6, Soi Siam Country Club, Nong Prue, Bang Lamung, Chon Buri 20150",
    phone: null, tel: null,
    website: null, hours: null,
    languages: "Thai; confirm English-language support when booking",
    services: ["Home visits", "General consultations", "Vaccinations", "Neutering", "Bathing"],
    summary: "A Pattaya clinic in the Nong Prue / Siam Country Club area that publicly " +
      "advertises off-site home visits alongside in-clinic care, vaccinations and " +
      "neutering. Confirm current coverage area and any visit fees when booking."
  },
  {
    slug: "baan-mor-raksasat-animal-hospital-pattaya",
    name: "Baan Mor Raksasat Animal Hospital",
    category: "mobile-vets", areas: ["banglamung"], type: "Animal hospital (home visits)", c24: false,
    address: "Railway Road (Khao Noi-Khao Talo), Nong Prue, Bang Lamung, Chon Buri",
    phone: null, tel: null,
    website: "https://www.facebook.com/doctorpetclinic24hr/", hours: "Daily 10:00-21:00",
    languages: "Thai; confirm English-language support when booking",
    services: ["Home visits", "Pet pickup & delivery", "General treatment", "Grooming", "Boarding"],
    summary: "A Pattaya animal hospital on the railway road between Khao Noi and Khao " +
      "Talo — also known locally as Baan Mor Raksasat — with on-site diagnostics " +
      "and advertised off-site visits, pet pickup or delivery, grooming and boarding. " +
      "Despite the Facebook page name, published hours are 10:00-21:00, not 24-hour " +
      "emergency care — confirm contact details on its Facebook page before booking."
  }
];

module.exports = { CATEGORIES, AREAS, BUSINESSES };
