"use strict";
/* PattayaPets business directory data.
   Listings = factual pages compiled from public sources. Optional fields after
   an anonymous visit: verdict ("recommend"|"ok"|"avoid"), reviewed (YYYY-MM-DD),
   review (business-experience text only). Never invent facts; leave null if not
   verified and the listing simply omits that row.
   Contact: prefer website, email, WhatsApp (whatsapp: digits only) and LINE (line:
   ID without @). Do not publish landline phones except verified numbers on 24-hour
   emergency vet listings.

   Integrity fields are joined below from BUSINESS_INTEGRITY. A non-published state
   is an evidence/scope decision, not an instruction to remove or noindex an existing URL.
   `areas: []` always means that no Pattaya area was verified; serviceScope carries
   the separately sourced service geography and must never be inferred from [] alone. */

const CONTACT_PUBLICATION = require("./business-contact-publication.js");

const CATEGORIES = {
  vets: {
    name: "Vets & animal hospitals", slug: "vets", schemaType: "VeterinaryCare", one: "vet",
    intro: "General clinics, full animal hospitals and 24-hour emergency care across " +
      "Pattaya. Each page shows its evidence status; an honest verdict is added only after " +
      "an anonymous visit. PattayaPets never rates veterinary medical quality, only the " +
      "business experience."
  },
  groomers: {
    name: "Pet groomers", slug: "groomers", schemaType: "LocalBusiness", one: "groomer",
    intro: "Dog and cat grooming salons in Pattaya for baths, breed clips, de-shedding, " +
      "nail trims and tidy-ups. Each page states its evidence status; verdicts follow an anonymous visit."
  },
  boarding: {
    name: "Pet boarding & daycare", slug: "boarding", schemaType: "LocalBusiness", one: "boarding provider",
    intro: "Pet hotels, kennels, catteries, resorts and daycare for when you travel " +
      "or work. Dog boarding is more common in Pattaya than dedicated catteries &mdash; " +
      "confirm a place accepts cats and keeps them apart from dogs. Each page states its " +
      "evidence status; verdicts follow an anonymous visit."
  },
  "pet-shops": {
    name: "Pet shops & supplies", slug: "pet-shops", schemaType: "PetStore", one: "pet shop",
    intro: "Where to buy pet food, litter, toys, tanks and supplies in Pattaya, in person " +
      "and near you. Each page states its evidence status; verdicts follow an anonymous visit."
  },
  trainers: {
    name: "Dog trainers & behaviourists", slug: "trainers", schemaType: "LocalBusiness", one: "trainer",
    intro: "Obedience training, puppy classes and behaviour help from Pattaya-based dog " +
      "trainers. Each page states its evidence status; verdicts follow an anonymous visit."
  },
  "pet-relocation": {
    name: "Pet relocation agents", slug: "pet-relocation", schemaType: "LocalBusiness", one: "relocation agent",
    intro: "Specialist agents who handle pet import and export, including DLD permits, " +
      "health certificates, crates and flight booking. Service scope is shown per listing."
  },
  "mobile-vets": {
    name: "Mobile & home-visit vets", slug: "mobile-vets", schemaType: "VeterinaryCare", one: "mobile vet",
    intro: "Vets who come to you &mdash; useful for nervous pets, multi-cat homes and " +
      "owners without transport. Some Pattaya clinics offer home visits alongside " +
      "their clinic work; coverage, fees and availability vary. Each page states its " +
      "evidence status; verdicts follow an anonymous visit."
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
    address: "148-2 Sukhumvit Road, Pattaya City, Bang Lamung, Chon Buri 20150",
    phone: "02 079 9942", tel: "+6620799942",
    website: "https://thonglorpet.com/en/branch/pethospital-thonglorpet-pattaya",
    hours: "Open 24 hours",
    languages: "Thai and English",
    services: ["24-hour emergency care", "TAHSA-accredited animal hospital", "Diagnostic imaging", "Surgery",
      "ICU, SCU, observation ward & inpatient care", "Pet hotel & medical boarding assessment",
      "Neurology", "Cardiology", "Orthopedics",
      "Dermatology & allergy care", "Eye care", "Cancer care", "Oral & dental care",
      "Internal medicine", "Senior care", "Dedicated cat care", "Exotic pet care", "Rehabilitation", "Referral cases",
      "Telemedicine", "Medical grooming", "Sanitised supervised dog pool & pet park",
      "Door-to-door pet taxi", "Worldwide pet relocation including EU, Japan, Singapore & USA"],
    summary: "Thonglor Pet Hospital's TAHSA-accredited Pattaya branch provides 24-hour emergency intake, " +
      "surgery, ICU, SCU, observation and inpatient care, with neurology, cardiology, orthopedic, " +
      "dermatology, cancer, dental, internal-medicine, senior and rehabilitation services, telemedicine and English-speaking veterinarians. " +
      "For neurological, heart, bone and other complex referrals, its branch page asks callers to send " +
      "medical history and test results and phone before arrival."
  },
  {
    slug: "pattaya-veterinary-clinic",
    name: "Pattaya Veterinary Clinic",
    category: "vets", areas: ["naklua"], type: "Veterinary clinic", c24: false,
    address: "157/15 Moo 5, Pattaya-Naklua Road, Na Kluea, Bang Lamung, Chon Buri 20150",
    phone: "065 020 3773", tel: "+66650203773",
    website: null, hours: "Mon-Sat 09:00-20:00; Sun 11:00-20:00 (confirm when booking)",
    languages: "Confirm English-language support when booking",
    services: ["ISO 11784/11785 microchipping", "AnyVet registry registration",
      "AnyVet digital microchip certificate", "AnyVet public registration-status lookup",
      "AnyVet pet-profile management & 30-day registration-edit window",
      "AnyVet microchip-based lost & found", "Routine vaccinations", "Deworming",
      "Flea treatment"],
    summary: "A veterinary clinic at 157/15 Moo 5 on Pattaya-Naklua Road near the Soi 16/2 " +
      "junction, listed as a current AnyVet partner for ISO microchip implantation, registry entry and a digital certificate, with routine vaccinations, deworming and flea treatment also documented; call 065 020 3773 before visiting. " +
      "AnyVet also provides pet-profile management with a 30-day registration-edit window, public status lookup without exposing owner details and a microchip-based lost-and-found service. " +
      "Older Thai directories publish conflicting landlines and hours, so current opening hours and broader services remain unverified."
  },
  {
    slug: "vetazoo-animal-and-exotic-pet-hospital",
    name: "Vetazoo Animal & Exotic Pet Hospital",
    category: "vets", areas: ["central-pattaya"], type: "Animal & exotic pet hospital", c24: false,
    address: "140/83-84 Moo 11, Sukhumvit Road, Nong Prue, Bang Lamung, Chon Buri 20150 (opposite Lotus's South Pattaya)",
    phone: "082 662 7999", tel: "+66826627999",
    email: "vetazoohospital@gmail.com",
    line: "022zyfzh",
    website: "https://vetazoo.com/",
    hours: "Daily 10:00–22:00; last case 21:30",
    languages: "Thai and English",
    services: ["Cats & dogs", "Rabbits, guinea pigs, hamsters, hedgehogs, ferrets, sugar gliders & chinchillas",
      "Birds, reptiles, amphibians & wildlife", "Surgery",
      "Emergency, critical & intensive care during opening hours", "Inpatient care",
      "Digital X-ray", "Ultrasound & echocardiography", "Laboratory diagnostics",
      "Cardiology clinic", "Oxygen therapy & nebulisation", "Vaccinations", "Dental care",
      "Nutrition consultations", "Home visits for pets difficult to transport or sensitive to unfamiliar settings",
      "Pet pickup & drop-off", "Online pet food & supplies shop"],
    summary: "One of the few Pattaya hospitals set up for exotic pets such as birds, " +
      "reptiles, rabbits, guinea pigs, hamsters, hedgehogs, ferrets, sugar gliders and chinchillas, alongside cats and dogs, with surgical, cardiology and intensive-care services. It is open daily " +
      "10:00–22:00, with the last case accepted at 21:30. Its official services page also links an online pet food and supplies shop."
  },
  {
    slug: "muang-ake-pet-hospital-pattaya",
    name: "Muang Ake Pet Hospital - Pattaya",
    category: "vets", areas: ["central-pattaya"], type: "Animal hospital", c24: true,
    address: "44/57 Moo 11, Sukhumvit Road, Nong Prue, Bang Lamung, Chon Buri 20150",
    phone: "086 338 8638", tel: "+66863388638",
    line: "macvetpy",
    website: "https://en.muangakepethospital.com", hours: "Open 24 hours",
    languages: "Thai; confirm English-language support when booking",
    services: ["24-hour emergency care", "Emergency referrals from local pet clinics",
      "Emergency surgery", "General treatment", "Inpatient care",
      "X-ray & ultrasound", "Laboratory testing", "Exotic-pet care",
      "Pet transport by advance booking",
      "24-hour gastrointestinal endoscopy", "Neurology clinic & neurosurgery",
      "Rehabilitation & underwater treadmill",
      "Bathing & grooming after a veterinary check",
      "Pet hotel with 24-hour staff care, two meals & twice-daily walks",
      "24-hour pet shop",
      "At-home vaccination, deworming & heartworm prevention by appointment",
      "International health certificates", "Microchipping", "Rabies titre testing"],
    summary: "The Pattaya branch of the Muang Ake veterinary group, on Sukhumvit Road in " +
      "Nong Prue, providing 24-hour emergency and surgical care, inpatient treatment, " +
      "diagnostic imaging, endoscopy, neurology, rehabilitation, exotic-pet care, a staffed pet hotel, a 24-hour pet shop and pet transport. " +
      "It also offers bathing and grooming after an initial veterinary check; its current mobile contact is 086 338 8638."
  },
  {
    slug: "pattaya-animal-hospital",
    name: "Pattaya Animal Hospital",
    category: "vets", areas: ["central-pattaya"], type: "Animal hospital", c24: false,
    address: "49/86-7 Moo 10, Pattaya Tai Road, Nong Prue, Bang Lamung, Chon Buri 20150",
    phone: null, tel: null,
    website: null, hours: "Daily 08:30–20:00 (confirm when booking)",
    languages: "Confirm English-language support when booking",
    services: ["General dog & cat treatment", "Vaccinations", "Neutering",
      "Surgery", "Off-site dog & cat veterinary treatment"],
    summary: "An animal hospital at 49/86-7 Moo 10 on Pattaya Tai Road in central Pattaya, " +
      "with directory-published general dog and cat treatment, vaccinations, neutering, surgery and off-site treatment. " +
      "Daily directory hours are 08:30–20:00; this is not a verified 24-hour emergency service, so confirm availability before visiting."
  },
  {
    slug: "pattaya-community-pet-hospital",
    name: "Pattaya Community Pet Hospital",
    category: "vets", areas: ["banglamung"], type: "Animal hospital", c24: true,
    address: "248/6-8 Soi Nern Plub Wan, Nong Prue, Bang Lamung, Chon Buri 20150",
    phone: "061 094 9996", tel: "+66610949996",
    line: "uew1130h",
    website: "https://en.muangakepethospital.com/",
    hours: "Open 24 hours",
    languages: "Thai; confirm English-language support when booking",
    services: ["24-hour emergency care", "Emergency referrals from local clinics",
      "General treatment", "Emergency surgery",
      "X-ray", "Inpatient care", "Vaccinations", "Dog & cat health screening",
      "Skin examinations", "Bathing & grooming"],
    summary: "A 24-hour community animal hospital in Nernplubwan, part of the Muang Ake " +
      "veterinary group, providing emergency referrals, general treatment, emergency surgery, X-ray, inpatient care, " +
      "vaccinations, health and skin screening, bathing and grooming. Current Thai posts continue to identify it as open daily for 24 hours, " +
      "and a Krungsri promotion confirms payment with participating cards for grooming."
  },
  {
    slug: "animal-army-hospital",
    name: "Animal Army Hospital",
    category: "vets", areas: ["jomtien", "sattahip"], type: "Animal hospital & rescue clinic", c24: false,
    address: "90/55 Moo 5, Na Jomtien, Sattahip District, Chon Buri 20250",
    phone: "085 093 5954", tel: "+66850935954",
    email: "info@animalarmy.org",
    website: "https://animalarmy.org/",
    hours: "Daily 08:00-17:00; animal intake by appointment (emergencies excepted)",
    languages: "Thai and English",
    services: ["General consultations", "Rescue ambulance", "Field assessment & first aid",
      "Safe handling & stabilisation", "Urgent treatment",
      "Surgery", "Orthopedic & soft-tissue surgery", "Fish-skin grafting",
      "Digital X-ray", "Blood pathology",
      "Vaccinations", "Flea & tick treatment", "Wound care", "Dental & cancer treatment",
      "Inpatient & short-term intensive care", "Rehabilitation", "Quarantine care",
      "Two dedicated sterilisation operating rooms",
      "Pre- & post-operative sterilisation monitoring", "Community CNVR", "Microchipping"],
    summary: "An animal hospital in Na Jomtien " +
      "with a seven-day Chonburi rescue ambulance providing field assessment, first aid, safe handling and stabilisation, plus surgery, fish-skin grafting, digital X-ray, short-term intensive care and rehabilitation. " +
      "Its prevention programme uses two dedicated sterilisation operating rooms with pre- and post-operative monitoring. Open daily 08:00-17:00; animal intake by appointment except emergencies."
  },
  {
    slug: "siam-country-pet-hospital",
    name: "Siam Country Pet Hospital",
    category: "vets", areas: ["banglamung"], type: "Veterinary clinic", c24: false,
    address: "173/16-17 Moo 6, Pornprapanimit Road (Siam Country Club Road), Nong Prue, Bang Lamung, Chon Buri 20150",
    phone: null, tel: null,
    website: null, hours: "Tuesday–Sunday 09:00–20:00; closed Monday",
    languages: "Thai; confirm English-language support when booking",
    services: ["General consultations", "Vaccinations", "Neutering", "Surgery", "Boarding", "Pet supplies"],
    summary: "A clinic on Siam Country Club Road (Pornpraphanimit) in East Pattaya, offering " +
      "routine consultations, vaccinations, neutering, surgery, boarding and pet supplies. " +
      "Open Tuesday to Sunday from 09:00 to 20:00 and closed Monday; confirm current contact details before visiting. " +
      "Its registered operator, Siamcountry Pet Care Co., Ltd., remains active at the same address for veterinary consultation and treatment surgery; " +
      "the former website and email are no longer published as current contacts."
  },
  {
    slug: "north-pattaya-animal-hospital",
    name: "North Pattaya Animal Hospital",
    category: "vets", areas: ["naklua", "wongamat"], type: "Animal hospital", c24: false,
    address: "120/19 North Pattaya Road, Naklua, Bang Lamung, Chon Buri 20150",
    phone: "095 445 5622", tel: "+66954455622",
    website: "https://www.facebook.com/PTNpetlover", hours: null,
    languages: "Confirm English-language support when booking",
    services: ["General consultations", "Vaccinations", "Cardiology clinic",
      "Neurology clinic", "Exotic-pet clinic", "X-ray", "Surgery",
      "Laser treatment", "Ultrasound", "Dental scaling", "Microchipping",
      "Pet boarding", "Dog & cat grooming & bathing", "Underwater treadmill", "Pet shop", "Parking"],
    summary: "A hospital founded by a group of veterinarians on 16 December 2006 at 120/19 North Pattaya Road in Naklua, offering general " +
      "care, cardiology, neurology and exotic-pet clinics, surgery, imaging, dental scaling, microchipping, boarding and grooming. " +
      "A current directory also lists parking; opening hours still vary between sources, so confirm before visiting."
  },

  {
    slug: "pattaya-city-pet-shop-grooming",
    name: "Pattaya City Pet Shop & Grooming Salon",
    category: "groomers", areas: ["central-pattaya"], type: "Grooming salon & pet shop", c24: false,
    address: "209/17 Soi Khao Talo, Pattaya City, Bang Lamung, Chon Buri 20150",
    phone: "096 293 9454", tel: "+66962939454",
    website: "https://pattayagrooming.wordpress.com/", hours: null,
    languages: "Confirm English-language support when booking",
    services: ["Dog grooming", "Hair cutting & styling", "Shampoo & blow-dry",
      "Nail clipping", "Ear trimming", "Grooming appointments by phone",
      "Pet beds, baskets & carry bags", "Pet shirts, jackets & clothing",
      "Collars, leads & toys"],
    summary: "A dog-grooming salon and pet shop at 209/17 Soi Khao Talo, publishing haircuts, " +
      "shampoo and blow-dry, nail clipping and ear trimming, plus beds, carry bags, clothing, collars, leads and toys. Its official " +
      "site and matching social archive remain online, but current operating activity could not be verified; call before making a trip."
  },
  {
    slug: "jaijai-grooming",
    name: "Jaijai Spa & Grooming",
    category: "groomers", areas: ["banglamung"], type: "Pet grooming salon", c24: false,
    address: "Room 1, 97/15 Moo 6, Pong, Bang Lamung, Chon Buri 20150",
    phone: "062 502 9871", tel: "+66625029871",
    website: "https://www.facebook.com/jaijaigrooming/", hours: "Daily 09:30–20:00",
    languages: "Confirm English-language support when booking",
    services: ["Bathing & coat clipping", "Pet food & supplies"],
    summary: "A pet-grooming salon at Room 1, 97/15 Moo 6 in Pong, east of Pattaya city, " +
      "marked official on Wongnai for bathing and coat clipping with daily hours of 09:30–20:00; call 062 502 9871. Its current public listing also " +
      "publishes pet food and supplies and places it beside the entrance to Soi Pong Klang 1, opposite Baan Fern kitchen shop; Cybo now again corroborates the Pong address and mobile."
  },
  {
    slug: "woof-pattaya",
    name: "Woof Pattaya",
    category: "groomers", areas: ["banglamung"], type: "Grooming salon & pet boarding", c24: false,
    address: "77/10 Moo 1, Ruean Phisa Village, Nong Prue, Bang Lamung, Chon Buri 20150",
    phone: "083 012 1897", tel: "+66830121897",
    website: "https://www.facebook.com/woof.pattaya",
    hours: "Mon–Tue, Thu–Sun 09:00–18:00; Wed closed",
    languages: "Confirm English-language support when booking",
    services: ["Dog bathing & clipping", "Cat bathing & clipping",
      "Coat-and-skin spa", "Pet boarding", "Pick-up service (arrange and confirm area)"],
    summary: "A grooming salon and boarding service in Nong Prue (Ruean Phisa Village), " +
      "offering bathing, clipping, coat-and-skin spa care and boarding for dogs and cats in Bang Lamung. It opens " +
      "09:00–18:00 except Wednesday; pick-up may be arranged, subject to coverage. PETECO marks its current listing verified and notes a recent move, so confirm the exact map pin when booking."
  },
  {
    slug: "furiday-pet-grooming",
    name: "FURiday Pet Grooming",
    category: "groomers", areas: ["naklua"], type: "Pet grooming salon", c24: false,
    address: "Pattaya-Naklua Road, Na Kluea, Bang Lamung, Chon Buri 20150",
    phone: "083 092 0420", tel: "+66830920420",
    website: "https://www.facebook.com/FURidaypetgrooming/", hours: "Daily 10:00–19:00",
    languages: "Confirm English-language support when booking",
    services: ["Pet grooming", "Bathing", "Coat trimming", "Coat & skin care", "Pet hotel"],
    summary: "A pet-grooming salon on Pattaya-Naklua Road, publishing bathing, coat trimming, " +
      "coat-and-skin care and pet-hotel services with daily hours of 10:00–19:00 and phone " +
      "083 092 0420. Its LOOKLOOK listing also indicates parking and says appointments and basic vaccinations are required; confirm which species are accepted when booking."
  },
  {
    slug: "furpet-grooming-and-hotel",
    name: "Furpet Grooming & Hotel",
    category: "groomers", areas: [], type: "Grooming and pet-hotel listing", c24: false,
    address: null,
    phone: null, tel: null, line: null,
    website: "https://www.facebook.com/people/Furpet-Grooming-and-Hotel/61561258409344/",
    hours: null,
    languages: "Confirm English-language support when booking",
    services: ["Dog and cat bathing", "Dog and cat boarding"],
    summary: "Its live Facebook page title identifies Furpet Grooming & Hotel as a Pattaya dog-and-cat bathing and boarding business, but " +
      "current posts, contacts, hours and fuller details remain unreadable. Treat this as a limited Facebook lead, and do not rely on stale contact details " +
      "that may remain in search-engine copies."
  },

  {
    slug: "pattaya-dog-stay",
    name: "Pattaya Dog Stay",
    category: "boarding", areas: ["banglamung"], type: "Dog hotel & daycare", c24: false,
    address: "63/26 Moo 5, Tessaban 1 Road, Soi Yak Kamnan, Bang Lamung, Chon Buri 20150",
    phone: "095 776 4698", tel: "+66957764698",
    website: "https://www.facebook.com/Pattayadogstay/", hours: "Daily 08:00–17:30",
    languages: "Confirm English-language support when booking",
    services: ["Air-conditioned rooms", "Dog daycare", "Multi-day boarding", "Saltwater pool", "Large grass running & exercise area", "Grooming"],
    summary: "A dog-only hotel and daycare on Tessaban 1 Road (Soi 27), off Soi Yak Kamnan in Bang Lamung, with air-conditioned rooms, parking, " +
      "a garden exercise area, a saltwater pool and on-site grooming. Its published hours are " +
      "08:00–17:30 daily on Petmap; another directory differs, so confirm when booking. Cybo now again corroborates the Soi Yak Kamnan address and mobile."
  },
  {
    slug: "elite-dog-resort",
    name: "Elite Dog Resort",
    category: "boarding", areas: ["pratumnak"], type: "Luxury dog resort & spa", c24: false,
    address: "352/680 Moo 12, Phra Tamnak, Pattaya City, Bang Lamung, Chon Buri 20150",
    phone: null, tel: null,
    website: "https://elitedogresort.com/", hours: "Daily 08:00-17:00; extended hours by appointment",
    languages: "Confirm English-language support when booking",
    services: ["Climate-controlled rooms", "Boarding", "Daycare", "Grooming & spa",
      "Ozone treatments, pawdicures & de-shedding", "Dog training",
      "Group play matched by size, temperament & play style", "One-to-one play alternatives",
      "Personalised play & socialisation", "First-stay orientation packages", "24/7 on-site supervision",
      "CCTV & smart monitoring", "VIP & deluxe rooms", "Video calls & owner camera access",
      "Playground & ball pool", "Special diets by arrangement",
      "Emergency transport to an approved local veterinary clinic"],
    summary: "A luxury dog resort and spa on Pratumnak hill whose house rules accept small and medium dogs up to 15 kg, although its terms separately describe admission as small breeds only — confirm eligibility before booking. It offers " +
      "climate-controlled rooms, round-the-clock supervision, CCTV, owner camera access, a playground and ball pool, grooming and spa " +
      "services, and standard or VIP options. Check-in requires current vaccination proof, " +
      "good health and flea-and-tick prevention; its house rules also provide for transport to an approved local veterinary clinic when an emergency exceeds the resort's facilities."
  },
  {
    slug: "pattaya-dog-hotel",
    name: "Pattaya Dog Hotel",
    category: "boarding", areas: ["bang-saray", "sattahip"], type: "Dog hotel", c24: false,
    address: "203/4 Moo 6, Bang Saray, Sattahip, Thailand",
    phone: "081 911 1967", tel: "+66819111967",
    website: "https://www.pattayadoghotel.com/", email: "kenyaker@gmail.com", hours: null,
    languages: "English-language website; confirm spoken languages when booking",
    services: ["Dog boarding", "Cozy sleeping quarters", "Feeding & walking", "Supervised playtime with other dogs",
      "Individual care by trained staff", "Dog grooming", "Dog training"],
    summary: "A dog-only boarding service in Bang Saray with cozy sleeping quarters, feeding, walking, " +
      "supervised playtime and individual care tailored to each dog, plus grooming and training " +
      "described on its official website. That site publishes no hours, and a directory's 24-hour claim remains unconfirmed; contact the hotel directly to confirm access times, availability and boarding arrangements."
  },

  {
    slug: "brand-dog-pattaya-pet-supplies",
    name: "Brand Dog - Pattaya Pet Supplies",
    category: "pet-shops", areas: ["central-pattaya"], type: "Pet supplies shop", c24: false,
    address: "385 South Pattaya Road, Pattaya City, Bang Lamung, Chon Buri 20150",
    phone: "062 428 8513", tel: "+66624288513",
    website: null, hours: "Daily 10:00-21:00",
    languages: null,
    services: ["Pet food", "Pet treats", "Toys & accessories", "Supplies", "In-store shopping", "Women-owned business",
      "NFC mobile payments", "Wheelchair-accessible entrance", "Assistive hearing loop"],
    summary: "Current Google-listing mirrors identify this South Pattaya Road shop as selling " +
      "food, treats, toys and accessories for dogs and cats, with in-store shopping, NFC mobile " +
      "payments, a wheelchair-accessible entrance, an assistive hearing loop, women-owned business identification and daily 10:00–21:00 hours. No attributable first-party website or social page " +
      "was found, so confirm before visiting."
  },
  {
    slug: "petsmart-pattaya",
    name: "PetSmart Pattaya",
    category: "pet-shops", areas: ["jomtien"], type: "Pet shop", c24: false,
    address: "315/100-101 Moo 12, Thep Prasit Road, Nong Prue, Bang Lamung, Chon Buri 20150",
    phone: "083 151 2569", tel: "+66831512569",
    website: "https://www.facebook.com/PetSmart.th/", hours: "Daily 10:00-20:00",
    languages: null,
    services: ["Pet food", "Pet beds", "Pet toys", "Accessories", "Pet hotel", "Delivery",
      "Pickup point", "All animals permitted in shop", "Wheelchair access with ramp"],
    summary: "Thai FindGlocal lists this pet shop at 315/100-101 Moo 12 on Thep Prasit Road near Jomtien, publishing " +
      "pet food, beds, toys and accessories for dogs and cats, plus delivery and pickup. Its " +
      "current Yandex map listing also categorises it as a pet hotel, permits all animals in the shop " +
      "and lists full wheelchair access with a ramp; confirm hotel arrangements before booking."
  },
  {
    slug: "tong-ma-aquarium-and-pets-shop",
    name: "Tong-ma Aquarium & Pets Shop",
    category: "pet-shops", areas: ["jomtien"], type: "Pet shop & aquarium", c24: false,
    address: "229/70 Thep Prasit Road, Pattaya City, Bang Lamung, Chon Buri 20150",
    phone: "062 881 4452", tel: "+66628814452",
    website: null, hours: "Monday-Saturday 08:30-20:00; Sunday 08:30-17:00",
    languages: null,
    services: ["Ornamental fish", "Aquariums in all sizes & supplies", "Tank & pond cleaning for all sizes",
      "Aquarium consultation", "Pet supplies", "On-site Wi-Fi"],
    summary: "A pet and aquarium shop on Thep Prasit Road on the Jomtien side of Pattaya, listed " +
      "for ornamental fish, aquariums, supplies and tank and pond cleaning. ThaiThurkic also lists " +
      "aquarium consultation and on-site Wi-Fi. Its weekly hours come from that directory, so " +
      "confirm before visiting."
  },
  {
    slug: "peturday-pattaya",
    name: "Peturday Pattaya",
    category: "pet-shops", areas: ["pratumnak"], type: "Pet shop", c24: false,
    address: "337/10 Phra Tamnak, Bang Lamung, Chon Buri 20150",
    phone: "098 471 4877", tel: "+66984714877",
    website: "https://www.facebook.com/peturdaypty", hours: "Daily 09:00-21:00",
    languages: null,
    services: ["Pet food", "Grooming products", "Pet toys", "Accessories", "Pet equipment"],
    summary: "A neighbourhood pet shop on Pratumnak Road selling pet food, grooming products, " +
      "toys, accessories and equipment, with Waze listing daily hours from 09:00 to 21:00. " +
      "Waze also lists mobile 098 471 4877. A historical local profile documents the product " +
      "range; its delivery claim could not be confirmed on a current first-party surface."
  },
  {
    slug: "pattaya-pet-center",
    name: "Pattaya Pet Center",
    category: "pet-shops", areas: ["central-pattaya"], type: "Pet shop", c24: false,
    address: "49/84 Moo 10, South Pattaya Soi 12, Nong Prue, Bang Lamung, Chon Buri 20150",
    phone: "087 127 7757", tel: "+66871277757",
    website: null, hours: "Monday-Saturday 08:00-17:00; Sunday not published",
    languages: null,
    services: ["Pet food & supplies", "Delivery Monday-Saturday 08:00-17:00"],
    summary: "A pet shop at 49/84 Moo 10 on South Pattaya Soi 12, opposite the mosque, with a " +
      "current official Wongnai profile publishing pet food and supplies, matching delivery hours, mobile contact and " +
      "Monday-Saturday hours. No Sunday schedule, attributable website or social page could be verified."
  },

  {
    slug: "k9-coach",
    name: "K9 Coach",
    category: "trainers", areas: ["bang-saray", "sattahip", "banglamung"], type: "Dog training & behaviour", c24: false,
    address: "204/15, Bang Sare, Sattahip District, Chon Buri 20250",
    phone: "080 905 3216", tel: "+66809053216",
    email: "info@k9-coach.co.th", whatsapp: "971501840326", line: "K9-COACH",
    website: "https://k9-coach.co.th/", hours: "08:00-18:00 (days not stated)",
    languages: null,
    services: ["Initial consultation", "Puppy training", "Obedience training", "Aggressive dog training", "Intermediate & advanced training",
      "Behaviour modification", "Basic protection training", "Board-and-train", "Daycare", "Owner coaching",
      "Home visits", "Socialisation", "Bang Saray training days",
      "Online member training with courses, videos, live coaching and community support"],
    summary: "A dog-training operation on an 18-rai facility near " +
      "Bang Saray, with 36 kennels, multiple training areas, board-and-train " +
      "programmes spanning puppy, aggressive-dog, advanced and basic protection work. Its online member training includes structured courses, " +
      "videos, live coaching and community support, with 24/7 access to materials. Published working hours are 08:00-18:00, with days unstated. " +
      "Its official partner page also lists a Dog Hotel Pattaya facility in Bang Sare. " +
      "Contact info@k9-coach.co.th or 080 905 3216 to arrange a visit."
  },
  {
    slug: "zoeta-dogsoul",
    name: "Zoeta Dogsoul",
    category: "trainers", areas: [], type: "Dog training & behaviour", c24: false,
    address: "Chiang Mai (headquarters); confirm Pattaya service area when booking",
    phone: "095 849 6783", tel: "+66958496783",
    email: "info@zoeta-dogsoul.com",
    website: "https://zoeta-dogsoul.com/", hours: null,
    languages: null,
    services: ["Personal dog training", "Obedience training", "Online courses", "Live video sessions",
      "AI-assisted training app", "GPS walk coach", "Training calendar", "Behaviour & progress logging",
      "Video learning library", "DogSoul TV", "Behaviour decoder", "Puppy course", "Dog nutrition AI",
      "Training journal", "Training cards", "SOS training protocols", "Calm tool", "AI assistant in 95 languages"],
    summary: "A Chiang Mai-based trainer whose older indexed Pattaya programme page now returns HTTP 410 Gone while online courses and its training app remain current. Live video " +
      "sessions and the iOS and Android app include GPS walk coaching, a training calendar " +
      "and behaviour tracking remain current. The app also includes a puppy course, dog nutrition AI, " +
      "training journal, training cards, SOS protocols and a calm tool; confirm any in-person Pattaya training session directly."
  },
  {
    slug: "k9-pattaya-dog-training-school",
    name: "Dogs Training International Institute (K9 Pattaya)",
    category: "trainers", areas: ["banglamung"], type: "Dog training school", c24: false,
    address: "51/3 Moo 5, Huai Yai, Bang Lamung, Chon Buri 20150",
    phone: "083 293 1694", tel: "+66832931694",
    website: "https://www.facebook.com/SJk9Pattaya/", hours: "Daily 08:00-17:00",
    languages: null,
    services: ["All-breed dog training", "Boarding", "Parking", "Wheelchair access"],
    summary: "A dog training and boarding operation in Huai Yai, currently listed as Dogs " +
      "Training International Institute and associated with the K9 Pattaya name. Current " +
      "directories publish map plus code VX94+JFC, all-breed training, parking and wheelchair access and link an attributable " +
      "Facebook profile whose current content could not be read. A conflicting directory landline is withheld; confirm by mobile."
  },

  {
    slug: "pet-relocation-thailand",
    name: "Pet Relocation Thailand",
    category: "pet-relocation", areas: [], type: "Pet import & export agent", c24: false,
    address: "15 Soi Tha Kham 13, Samae Dam, Bang Khun Thian, Bangkok 10150",
    phone: "064 694 2992", tel: "+66646942992",
    whatsapp: "66646942992",
    line: "petrelocation",
    email: "info@petrelocationthailand.com",
    website: "https://www.petrelocationthailand.com/", hours: "Monday-Friday 09:00-18:00",
    languages: "English and Thai",
    services: ["Import & export", "DLD permits", "Health certificates", "Rabies-titre coordination",
      "Vaccination & microchip coordination", "Nationwide partner-vet coordination", "Pet passports", "Crates & flight booking",
      "Customs clearance", "Airport pickup", "Door-to-door delivery", "Ground transport", "Bangkok pet accommodation"],
    summary: "An agency handling pet import to and export from Thailand, coordinating " +
      "rabies-titre tests, vaccination, microchips, pet passports, health certificates, permits, flights and travel crates. It " +
      "also publishes customs clearance, airport pickup, door-to-door delivery, nationwide collection and ground transport for dogs and cats, " +
      "destination-country permit coordination when needed, " +
      "coordination through partner vet clinics nationwide and Bangkok accommodation through boarding partners. Enquire via WhatsApp, " +
      "LINE @petrelocation or the website contact form."
  },
  {
    slug: "relo4paws",
    name: "Relo4Paws",
    category: "pet-relocation", areas: [], type: "Pet relocation consultancy", c24: false,
    address: null,
    phone: "085 541 9959", tel: "+66855419959",
    email: "info@relo4paws.com",
    website: "https://www.relo4paws.com/", hours: "Always open",
    languages: "English and Thai",
    services: ["Pet relocation consulting", "Export from Thailand", "Import to Thailand",
      "Worldwide destinations", "Pet taxi within Thailand", "Vet coordination",
      "Microchip, vaccination & rabies-titre coordination", "Parasite-treatment coordination",
      "IATA travel crates", "Preflight document checks", "Export papers & health certificates",
      "Departure-day airport check-in assistance", "Airport export handling", "Airport cargo clearing",
      "Philippines import permits", "Thailand & Taiwan transit permits",
      "Pet-friendly airline & Bangkok hotel advice", "Short-term pet accommodation"],
    summary: "A Bangkok-based consultancy arranging pet import and export from Thailand " +
      "worldwide, including airport handling at Suvarnabhumi, a Thailand-wide minivan pet taxi " +
      "that can carry the owner with their pet, and vet " +
      "coordination for microchips, vaccinations, rabies titres and parasite treatments. " +
      "Its export handling includes preflight document checks, export papers, health certificates and departure-day airport check-in assistance. " +
      "It also lists Philippines import permits and transit permits for flights through Thailand or Taiwan. " +
      "English enquiries use 085 541 9959; Thai enquiries use 088 978 9953."
  },
  {
    slug: "united-pet-express",
    name: "United Pet Express",
    category: "pet-relocation", areas: [], type: "Pet import & export agent", c24: false,
    address: "32/3 Soi Bangna-Trad 56, Bangna, Bangkok 10260",
    phone: "081 899 1416", tel: "+66818991416",
    website: "https://www.unitedpetexpress.com/", hours: "Monday-Friday 08:30-17:30",
    languages: "English and Thai",
    services: ["Import to Thailand", "Export from Thailand", "Transit shipments",
      "Transit permits for excess baggage", "Transit clearance for manifest cargo",
      "Nationwide collection & residential delivery", "Flight arrangements",
      "Microchip, vaccination & vet coordination", "Permits & health certificates", "Destination customs clearance",
      "Long-transit pet care", "Temperature-controlled boarding kennel & cattery", "Cat play area",
      "Outdoor dog area", "Supervised socialisation", "Rabies titre testing", "Custom travel crates"],
    summary: "A pet transport company handling import to and export from Thailand, " +
      "including microchip and vaccination coordination, flight arrangements, health certificates " +
      "and destination customs clearance. Its transit service distinguishes excess-baggage permits from manifest-cargo clearance. " +
      "For Bangkok cargo transits longer than six hours it " +
      "publishes dog walking, crate cleaning, food and water. Urgent enquiries use its published " +
      "mobile number. Its temperature-controlled boarding has four special kennels, one VIP dog room, " +
      "two large cat condos and supervised socialisation; office hours are Monday to Friday, but the official " +
      "pages carry a last-revision date of 3 April 2020, so reconfirm details directly."
  },
  {
    slug: "asia-relocation-pet-transport",
    name: "Asia Relocation - Pet Transport",
    category: "pet-relocation", areas: [], type: "Relocation company (pet division)", c24: false,
    address: "100 On Nut 40 Alley, Suan Luang, Bangkok 10250",
    email: "inquiryth@asia-relocation.com",
    whatsapp: "66810638189",
    website: "https://www.asia-relocation.com/thailand/moving/pet-relocation/",
    hours: null,
    languages: null,
    services: ["Dog & cat import and export", "Microchip, vaccination & rabies-test coordination", "Vet-certificate coordination",
      "Destination-rule, vaccination-timeline & quarantine-requirement assessment", "Import & export permits", "IATA travel crates",
      "Crate size & breed assessment", "Airline policy verification", "Air-freight booking",
      "Same-flight or unaccompanied-cargo enquiry",
      "Thai Livestock Department & airline cargo-team coordination",
      "Bangkok, Chiang Mai & Phuket airport handling", "Cargo-procedure supervision", "Customs clearance"],
    summary: "The pet division of a Bangkok relocation company, coordinating veterinary " +
      "certificates, microchips, vaccinations, rabies tests, destination-rule reviews, permits, " +
      "crate sizing, airline-policy checks, air-freight booking and customs " +
      "clearance. It also publishes vaccination-timeline and pre-export quarantine-requirement reviews and coordination with the Thai Livestock Department " +
      "and airline cargo teams at Bangkok, Chiang Mai and Phuket airports. Its pet inquiry covers travel on the owner's flight or alone as cargo. Enquire via the website inquiry form or inquiryth@asia-relocation.com; " +
      "no public phone number or business hours were captured."
  },
  {
    slug: "pawspective-relocations",
    name: "Pawspective Relocations",
    category: "pet-relocation", areas: [], type: "Pet travel specialist", c24: false,
    address: null,
    phone: "098 826 9294", tel: "+66988269294",
    whatsapp: "66988269294",
    email: "pawspective@pettravelthailand.com",
    website: "https://www.pettravelthailand.com/", hours: null,
    languages: "English website; confirm Thai-language support",
    services: ["Pet travel planning", "Dedicated relocation coordinator", "Personalised timeline",
      "Import & export", "Americas, Europe, UK, Asia & Pacific destinations", "Door-to-door relocation",
      "Permit, certificate & government-endorsement coordination", "Vet preparation",
      "Rabies titre testing through approved laboratories", "Waiting-period guidance",
      "Flight booking", "Departure-process oversight", "IATA travel crates", "Customs clearance",
      "Home collection & final-destination delivery"],
    summary: "A Thailand-based pet-travel specialist coordinating import and export, veterinary " +
      "preparation, permits, flights, travel crates and door-to-door relocation through one " +
      "dedicated coordinator with a personalised timeline. " +
      "It publishes approved-laboratory rabies-titre coordination, required waiting-period guidance, " +
      "government endorsements and departure-process oversight. " +
      "Enquire via the website, email, 098 826 9294 mobile or WhatsApp. Its rebuilt English " +
      "site now publishes only Bangkok without a street address, no longer carries its former pet-taxi claim, and its localized Thai services and about routes remain live even though the former /th landing route returns 404."
  },

  {
    slug: "mor-ja-pet-clinic-pattaya",
    name: "Mor Ja Pet Clinic (Mor Ja Raksa Sat)",
    category: "mobile-vets", areas: ["banglamung"], type: "Mobile & clinic pet care", c24: false,
    address: "519/156-157 Moo 6, Soi Siam Country Club, Nong Prue, Bang Lamung, Chon Buri 20150",
    // HUMAN QUEUE: 083 232 9898 circulates as this clinic's number but no primary
    // source (FB page / Yellow Pages field) confirms it — verify before publishing.
    phone: null, tel: null,
    website: null, hours: null,
    languages: "Thai; confirm English-language support when booking",
    services: ["Advertised off-site veterinary visits", "General consultations", "Vaccinations", "Neutering",
      "Bathing", "Puppy & kitten vaccination packages"],
    summary: "Also listed locally as Mor Ja Raksa Sat (หมอจ๋ารักษาสัตว์) — a clinic in " +
      "the Nong Prue / Siam Country Club area that publicly advertises off-site " +
      "home visits alongside in-clinic care, vaccinations, neutering, bathing and puppy and kitten vaccination packages. " +
      "Thailand YellowPages pins it at 12.9335569, 100.9371114, and Adopt Don't Shop independently repeats the clinic name and address. " +
      "The directory calls the off-site service free, but that fee wording lacks first-party confirmation and is not a current guarantee. " +
      "Two directories repeat the same mobile, but it remains withheld pending the required human confirmation call; no website or opening hours could be confirmed " +
      "for this clinic from a primary source, so it is listed here for reference only " +
      "&mdash; not as a clinic to call in an emergency."
  },
  {
    slug: "baan-mor-raksasat-animal-hospital-pattaya",
    name: "Baan Mor Raksasat Animal Hospital",
    category: "mobile-vets", areas: ["banglamung"], type: "Animal hospital (home visits)", c24: false,
    address: "107/27-28 Railway Road (Khao Noi-Khao Talo), Nong Prue, Bang Lamung, Chon Buri",
    phone: "085 055 8898", tel: "+66850558898",
    website: "https://www.facebook.com/DoctorPetClinic24Hr/", hours: "Daily 10:00–21:00",
    languages: "Thai; confirm English-language support when booking",
    services: ["Home visits", "Pet pickup & delivery", "General treatment", "X-ray",
      "Blood testing", "Oxygen therapy", "Dental scaling", "Ultrasonic nebuliser treatment",
      "Parvovirus, distemper, heartworm & blood-parasite tests", "Microscopy", "Ear & eye examinations", "Tear testing",
      "Named-vet continuity appointments", "Parking", "Grooming", "Boarding"],
    summary: "A Pattaya animal hospital on the railway road between Khao Noi and Khao " +
      "Talo, about 200 metres from the Khao Noi intersection at map plus code WWF3+F83. Also known locally as Baan Mor Raksasat, it has imaging, blood testing, microscopy, oxygen and dental equipment " +
      "and published parvovirus, distemper, heartworm and blood-parasite testing alongside advertised off-site visits, pet pickup or delivery, named-vet continuity appointments, " +
      "grooming and boarding. " +
      "Reachable on 085 055 8898; despite the Facebook " +
      "page name, published hours are 10:00–21:00, not 24-hour emergency care."
  },
  {
    slug: "pet-passions-mobile-grooming",
    name: "Pet Passions Mobile Grooming & Spa",
    category: "groomers", areas: [], type: "Mobile grooming van", c24: false,
    address: "600/14 CoCo Hua Hin 88 Village, Hin Lek Fai, Hua Hin, Prachuap Khiri Khan 77110",
    phone: "062 262 9717", tel: "+66622629717",
    line: "petpassions",
    email: "petpassions.official@gmail.com",
    website: "https://petpassionsth.com/eng/", hours: "24/7 online booking; appointment hours not published",
    languages: "Thai and English",
    services: ["Mobile bath", "Breed grooming & haircuts", "Spa treatments",
      "Hygiene trimming", "Nail trim & buffing", "Teeth brushing", "Ear cleaning",
      "Dematting", "100% natural premium grooming products", "Online, LINE OA, Android & iOS booking",
      "Bank-transfer payment", "Weight-based pricing",
      "Three-day cancellation or reschedule notice"],
    summary: "A Hua Hin-based mobile grooming service for dog and cat baths, breed-specific " +
      "clips, spa and add-on grooming treatments using published 100% natural premium products, with 24-hour online, LINE OA and app booking; appointment hours are not published. " +
      "The van requires household water and electricity. Its " +
      "bookings require at least three days' notice to cancel or reschedule. Its current official " +
      "service area covers Hua Hin, Cha-am and Pranburi; " +
      "the business does not currently publish Pattaya, Jomtien or Bang Lamung coverage."
  },
  {
    slug: "pluto-luxury-pet-hotel-pattaya",
    name: "Pluto Luxury Pet Hotel",
    category: "boarding", areas: [], type: "Dog & cat hotel", c24: false,
    address: "1502 Phatthanakan Road, Suan Luang, Bangkok 10250",
    phone: "095 879 2915", tel: "+66958792915",
    line: "pluto.pet",
    website: "https://www.plutopethotel.com/en/pet-hotel-en/",
    hours: "Daily check-in & check-out 09:00–19:00",
    languages: "Thai, English and Chinese",
    services: ["Dog boarding", "Cat boarding", "Daycare 09:00–19:00",
      "Night care 19:00–02:00", "Standard or deluxe daycare/night-care rooms",
      "24-hour care & CCTV for boarded pets",
      "Pre-stay screening, room disinfection & separate litter scoops", "Separate-household walks",
      "Twice-daily individual walks", "Air-conditioned rooms with toys",
      "Cat climbing areas", "Grooming & spa", "On-site pet shop", "Attended limousine pickup & drop-off"],
    summary: "A Bangkok pet hotel on Phatthanakan Road offering dog and cat boarding, " +
      "daycare and night care in standard or deluxe rooms, grooming, pickup and drop-off, with screening, air-conditioned rooms, " +
      "toys, cat climbing areas, separate litter scoops, twice-daily individual walks, an on-site pet shop " +
      "and 24-hour care and CCTV for boarded pets. Its current official " +
      "website does not show a Pattaya or Bang Lamung branch."
  },
  {
    slug: "doggie-star-grooming-pattaya",
    name: "Doggie Star Grooming",
    category: "groomers", areas: [], type: "Unverified grooming lead", c24: false,
    address: null,
    phone: null, tel: null,
    website: "https://www.facebook.com/DoggieStarGrooming/",
    hours: null,
    languages: null,
    services: [],
    summary: "The published Facebook URL is the only external lead for this listing, and exact-name English and Thai searches still surface no readable independent current business source. " +
      "Older cached PattayaPets category text mentions Jomtien grooming services, but that is this site's own stale output rather than independent confirmation. " +
      "Treat the listing only as an unverified lead: operating status, location, contact details, hours and services all require direct confirmation."
  }
];

/*
 * Publication state is deliberately explicit and separate from route retention.
 * Existing held URLs remain available as clearly labelled evidence leads until Tim
 * makes an indexing/pruning decision. Dossier-only records are intentionally absent
 * from this registry and therefore cannot become public business pages accidentally.
 *
 * `dossierCheckedAt` records when the source dossier was checked. A separate versioned
 * contact ledger records the 5 August 2026 field-level publication adjudication.
 */
const BUSINESS_INTEGRITY = {
  "thonglor-pet-hospital-pattaya": {
    operatingStatus: "open", publishState: "published", serviceScope: "local",
    addressLocality: "Pattaya", addressRegion: "Chon Buri", dossierConfidence: "high"
  },
  "pattaya-veterinary-clinic": {
    operatingStatus: "current-operation-unverified", publishState: "hold", serviceScope: "local",
    addressLocality: "Na Kluea", addressRegion: "Chon Buri", dossierConfidence: "medium",
    publicationBasis: "current-operation-unverified",
    dossierStatusOverrideReason: "No attributable current first-party channel was verified in the 5 August adjudication."
  },
  "vetazoo-animal-and-exotic-pet-hospital": {
    operatingStatus: "open", publishState: "published", serviceScope: "local",
    addressLocality: "Nong Prue", addressRegion: "Chon Buri", dossierConfidence: "high"
  },
  "muang-ake-pet-hospital-pattaya": {
    operatingStatus: "open", publishState: "published", serviceScope: "local",
    addressLocality: "Nong Prue", addressRegion: "Chon Buri", dossierConfidence: "high"
  },
  "pattaya-animal-hospital": {
    operatingStatus: "current-operation-unverified", publishState: "hold", serviceScope: "local",
    addressLocality: "Nong Prue", addressRegion: "Chon Buri", dossierConfidence: "medium",
    publicationBasis: "current-operation-unverified",
    dossierStatusOverrideReason: "No attributable current first-party channel was verified in the 5 August adjudication."
  },
  "pattaya-community-pet-hospital": {
    operatingStatus: "open", publishState: "published", serviceScope: "local",
    addressLocality: "Nong Prue", addressRegion: "Chon Buri", dossierConfidence: "high"
  },
  "animal-army-hospital": {
    operatingStatus: "open", publishState: "published", serviceScope: "local",
    addressLocality: "Na Jomtien", addressRegion: "Chon Buri", dossierConfidence: "high"
  },
  "siam-country-pet-hospital": {
    operatingStatus: "current-operation-unverified", publishState: "hold", serviceScope: "local",
    addressLocality: "Nong Prue", addressRegion: "Chon Buri", dossierConfidence: "medium",
    publicationBasis: "current-operation-unverified",
    dossierStatusOverrideReason: "Corporate registration evidence does not establish current consumer-facing operation."
  },
  "north-pattaya-animal-hospital": {
    operatingStatus: "open", publishState: "published", serviceScope: "local",
    addressLocality: "Naklua", addressRegion: "Chon Buri", dossierConfidence: "medium"
  },
  "pattaya-city-pet-shop-grooming": {
    operatingStatus: "current-operation-unverified", publishState: "hold", serviceScope: "local",
    addressLocality: "Pattaya", addressRegion: "Chon Buri", dossierConfidence: "low",
    publicationBasis: "current-operation-unverified"
  },
  "jaijai-grooming": {
    operatingStatus: "open", publishState: "published", serviceScope: "local",
    addressLocality: "Pong", addressRegion: "Chon Buri", dossierConfidence: "medium"
  },
  "woof-pattaya": {
    operatingStatus: "open", publishState: "published", serviceScope: "local",
    addressLocality: "Nong Prue", addressRegion: "Chon Buri", dossierConfidence: "medium"
  },
  "furiday-pet-grooming": {
    operatingStatus: "current-operation-unverified", publishState: "hold", serviceScope: "local",
    addressLocality: "Na Kluea", addressRegion: "Chon Buri", dossierConfidence: "medium",
    publicationBasis: "current-operation-unverified",
    dossierStatusOverrideReason: "The reviewed sources did not establish a readable, current operator channel."
  },
  "furpet-grooming-and-hotel": {
    operatingStatus: "unverified", publishState: "hold", serviceScope: "unknown",
    addressLocality: null, addressRegion: null, dossierConfidence: "low",
    publicationBasis: "unverified-lead"
  },
  "pattaya-dog-stay": {
    operatingStatus: "open", publishState: "published", serviceScope: "local",
    addressLocality: "Bang Lamung", addressRegion: "Chon Buri", dossierConfidence: "medium"
  },
  "elite-dog-resort": {
    operatingStatus: "open", publishState: "published", serviceScope: "local",
    addressLocality: "Pattaya", addressRegion: "Chon Buri", dossierConfidence: "high"
  },
  "pattaya-dog-hotel": {
    operatingStatus: "open", publishState: "published", serviceScope: "local",
    addressLocality: "Bang Saray", addressRegion: "Chon Buri", dossierConfidence: "medium"
  },
  "brand-dog-pattaya-pet-supplies": {
    operatingStatus: "current-operation-unverified", publishState: "hold", serviceScope: "local",
    addressLocality: "Pattaya", addressRegion: "Chon Buri", dossierConfidence: "medium",
    publicationBasis: "current-operation-unverified",
    dossierStatusOverrideReason: "Only aggregator and map-derived evidence was available; no attributable operator channel was verified."
  },
  "petsmart-pattaya": {
    operatingStatus: "open", publishState: "published", serviceScope: "local",
    addressLocality: "Nong Prue", addressRegion: "Chon Buri", dossierConfidence: "medium"
  },
  "tong-ma-aquarium-and-pets-shop": {
    operatingStatus: "current-operation-unverified", publishState: "hold", serviceScope: "local",
    addressLocality: "Pattaya", addressRegion: "Chon Buri", dossierConfidence: "medium",
    publicationBasis: "current-operation-unverified",
    dossierStatusOverrideReason: "Only third-party directory evidence was available; current operation needs direct confirmation."
  },
  "peturday-pattaya": {
    operatingStatus: "open", publishState: "published", serviceScope: "local",
    addressLocality: "Bang Lamung", addressRegion: "Chon Buri", dossierConfidence: "medium"
  },
  "pattaya-pet-center": {
    operatingStatus: "current-operation-unverified", publishState: "hold", serviceScope: "local",
    addressLocality: "Nong Prue", addressRegion: "Chon Buri", dossierConfidence: "low",
    publicationBasis: "current-operation-unverified",
    dossierStatusOverrideReason: "No attributable operator website or social channel was verified."
  },
  "k9-coach": {
    operatingStatus: "open", publishState: "published", serviceScope: "local",
    addressLocality: "Bang Saray", addressRegion: "Chon Buri", dossierConfidence: "high"
  },
  "zoeta-dogsoul": {
    operatingStatus: "open", publishState: "hold", serviceScope: "remote-only",
    addressLocality: "Chiang Mai", addressRegion: "Chiang Mai", dossierConfidence: "medium",
    serviceAreas: ["Online"],
    serviceAreaNote: "Online / remote service; the former Pattaya programme route is gone",
    publicationBasis: "pattaya-service-scope-conflict",
    dossierStatusOverrideReason: "A former Pattaya programme URL is gone and no current in-person Pattaya service was verified."
  },
  "k9-pattaya-dog-training-school": {
    operatingStatus: "open", publishState: "published", serviceScope: "local",
    addressLocality: "Huai Yai", addressRegion: "Chon Buri", dossierConfidence: "medium"
  },
  "pet-relocation-thailand": {
    operatingStatus: "open", publishState: "published", serviceScope: "nationwide",
    addressLocality: "Bangkok", addressRegion: "Bangkok", dossierConfidence: "high",
    serviceAreas: ["Thailand"]
  },
  "relo4paws": {
    operatingStatus: "open", publishState: "published", serviceScope: "nationwide",
    addressLocality: "Bangkok", addressRegion: "Bangkok", dossierConfidence: "high",
    serviceAreas: ["Thailand"]
  },
  "united-pet-express": {
    operatingStatus: "open", publishState: "published", serviceScope: "nationwide",
    addressLocality: "Bangkok", addressRegion: "Bangkok", dossierConfidence: "medium",
    serviceAreas: ["Thailand"]
  },
  "asia-relocation-pet-transport": {
    operatingStatus: "open", publishState: "published", serviceScope: "regional",
    addressLocality: "Bangkok", addressRegion: "Bangkok", dossierConfidence: "high",
    serviceAreas: ["Bangkok", "Chiang Mai", "Phuket"],
    serviceAreaNote: "Airport handling documented in Bangkok, Chiang Mai and Phuket"
  },
  "pawspective-relocations": {
    operatingStatus: "open", publishState: "published", serviceScope: "unknown",
    addressLocality: "Bangkok", addressRegion: "Bangkok", dossierConfidence: "high"
  },
  "mor-ja-pet-clinic-pattaya": {
    operatingStatus: "current-operation-unverified", publishState: "hold", serviceScope: "local",
    addressLocality: "Nong Prue", addressRegion: "Chon Buri", dossierConfidence: "medium",
    publicationBasis: "human-verification-required",
    dossierStatusOverrideReason: "Current operation lacks first-party confirmation; HUMAN QUEUE call pending."
  },
  "baan-mor-raksasat-animal-hospital-pattaya": {
    operatingStatus: "open", publishState: "published", serviceScope: "local",
    addressLocality: "Nong Prue", addressRegion: "Chon Buri", dossierConfidence: "high"
  },
  "pet-passions-mobile-grooming": {
    operatingStatus: "open", publishState: "rejected", serviceScope: "regional",
    addressLocality: "Hua Hin", addressRegion: "Prachuap Khiri Khan", dossierConfidence: "high",
    serviceAreas: ["Hua Hin", "Cha-am", "Pranburi"],
    serviceAreaNote: "Serves Hua Hin, Cha-am and Pranburi; no Pattaya coverage is published",
    publicationBasis: "out-of-area-rejected"
  },
  "pluto-luxury-pet-hotel-pattaya": {
    operatingStatus: "open", publishState: "rejected", serviceScope: "regional",
    addressLocality: "Bangkok", addressRegion: "Bangkok", dossierConfidence: "high",
    serviceAreas: ["Bangkok"],
    serviceAreaNote: "Bangkok location; no Pattaya or Bang Lamung branch is published",
    publicationBasis: "out-of-area-rejected"
  },
  "doggie-star-grooming-pattaya": {
    operatingStatus: "unverified", publishState: "hold", serviceScope: "unknown",
    addressLocality: null, addressRegion: null, dossierConfidence: "low",
    publicationBasis: "unverified-lead"
  }
};

const DOSSIER_CHECKED_AT = "2026-08-01";
const CONTACT_FIELDS = ["phone", "tel", "whatsapp", "line", "email", "website"];

BUSINESSES.forEach(function (business) {
  var integrity = BUSINESS_INTEGRITY[business.slug];
  if (!integrity) throw new Error("Missing BUSINESS_INTEGRITY record for " + business.slug);
  var hasStoredContact = CONTACT_FIELDS.some(function (field) { return Boolean(business[field]); });
  var contactRecord = CONTACT_PUBLICATION.records[business.slug];
  if (!contactRecord) throw new Error("Missing contact-publication record for " + business.slug);
  Object.assign(business, integrity, {
    addressCountry: integrity.addressLocality ? "TH" : null,
    locality: integrity.addressLocality ? {
      addressLocality: integrity.addressLocality,
      addressRegion: integrity.addressRegion || null,
      addressCountry: "TH"
    } : null,
    serviceAreas: (integrity.serviceAreas || []).slice(),
    dossierCheckedAt: DOSSIER_CHECKED_AT,
    dossierPath: "research/businesses/" + business.slug + ".json",
    publicationBasis: integrity.publicationBasis || "reviewed-dossier",
    publicationReviewedAt: contactRecord.reviewedAt,
    contactPublicationState: integrity.publishState === "hold"
      ? "withheld-by-hold"
      : integrity.publishState === "rejected"
        ? "withheld-by-reject"
        : (hasStoredContact ? "approved-public-contact" : "no-public-contact")
  });
});

function isPublishedBusiness(business) {
  return Boolean(business) && business.publishState === "published" &&
    business.operatingStatus === "open";
}

function isContactPublishable(business, field) {
  if (!isPublishedBusiness(business) || !CONTACT_FIELDS.includes(field)) return false;
  var record = CONTACT_PUBLICATION.records[business.slug];
  var decision = record && record.fields && record.fields[field];
  return Boolean(business[field]) && Boolean(decision) &&
    decision.publicationState === "approved" &&
    decision.classification === "public-business" &&
    decision.optOutState === "none-recorded";
}

module.exports = {
  CATEGORIES,
  AREAS,
  BUSINESSES,
  BUSINESS_INTEGRITY,
  CONTACT_PUBLICATION,
  isContactPublishable,
  isPublishedBusiness
};
