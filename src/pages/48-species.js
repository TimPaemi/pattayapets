"use strict";
/* Species-specific owner guides. Medical claims are source-led and deliberately
   stop short of diagnosis, dosing or patient-specific treatment. */

const { article } = require("../guidekit.js");

const CATS = { name: "Cats", path: "/cats/" };
const DOGS = { name: "Dogs", path: "/dogs/" };
const REVIEWED = "2026-08-01";
const CLINICAL_BOUNDARY =
  "Clinical review status: no licensed veterinarian has reviewed this publication. " +
  "It is source-led general orientation, not veterinary advice, a diagnosis, a " +
  "treatment plan or dosing guidance. Ask a qualified veterinarian about your pet.";

const SOURCES = {
  indoorOutdoor: "https://catvets.com/resource/2024-indoor-outdoor-lifestyle-position-statement/",
  indoorNeeds: "https://catvets.com/resource/2025-meeting-the-physical-and-emotional-needs-of-indoor-cats/",
  catIntro: "https://catvets.com/wp-content/uploads/2024/07/Step-by-Step-Guide-How-to-Introduce-a-New-Cat-to-Other-Cats-in-Your-Home.pdf",
  retrovirus: "https://catvets.com/resource/feline-retrovirus-management-guidelines/",
  vaccines: "https://wsava.org/Global-Guidelines/Vaccination-Guidelines/",
  thaiRabies: "https://legal.dld.go.th/index.php/th/phra-rach-bayyati-rokh-phis-sunakh-ba-ph-s-2535",
  shelterCare: "https://www.sheltervet.org/guidelines-for-standards-of-care-in-animal-shelters.",
  heat: "https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-information/heatstroke-medical-emergency",
  boas: "https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-topics/brachycephalic-obstructive-airway-syndrome-boas",
  puppy: "https://www.aaha.org/resources/what-to-do-when-you-first-bring-home-a-new-puppy/",
  training: "https://avsab.org/wp-content/uploads/2024/12/AVSAB-Humane-Dog-Training-Position-Statement-2021.pdf",
  heartworm: "https://www.heartwormsociety.org/guidelines",
  ticks: "https://capcvet.org/guidelines/ticks/",
  skin: "https://www.aaha.org/trends-magazine/december-2023/2023-aaha-management-of-allergic-skin-diseases-in-dogs-and-cats-guidelines/"
};

const pages = [];

function source(name, href) {
  return '<a href="' + href + '">' + name + "</a>";
}

function cat(o) {
  return article({
    path: "/cats/" + o.slug + ".html",
    title: o.title,
    desc: o.desc,
    crumb: o.crumb,
    breadcrumbs: [CATS],
    eyebrow: "Cats in Pattaya",
    h1: o.h1,
    lede: o.lede,
    verify: o.verify || CLINICAL_BOUNDARY,
    updated: REVIEWED,
    sections: o.sections,
    faqs: o.faqs,
    related: o.related
  });
}

function dog(o) {
  return article({
    path: "/dogs/" + o.slug + ".html",
    title: o.title,
    desc: o.desc,
    crumb: o.crumb,
    breadcrumbs: [DOGS],
    eyebrow: "Dogs in Pattaya",
    h1: o.h1,
    lede: o.lede,
    verify: o.verify || CLINICAL_BOUNDARY,
    updated: REVIEWED,
    sections: o.sections,
    faqs: o.faqs,
    related: o.related
  });
}

pages.push(cat({
  slug: "indoor-vs-outdoor-cats",
  crumb: "Indoor or outdoor?",
  title: "Indoor vs Outdoor Cats in Pattaya | PattayaPets",
  desc: "A welfare-led guide to indoor, controlled-outdoor and free-roaming lifestyles for cats in Pattaya, including enrichment, balcony security and vet planning.",
  h1: "Indoor or outdoor? Build a safe life for the individual cat",
  lede: "Indoor living reduces many outdoor hazards, but safety alone is not enough: cats also need territory, resources, play and predictable care.",
  sections: [
    { h: "Use a welfare framework, not a slogan", html:
      "<p>The " + source("Feline Veterinary Medical Association's 2024 position statement", SOURCES.indoorOutdoor) +
      " describes benefits and risks across indoor-only, indoor/outdoor and outdoor-only lifestyles. It favours controlled access, such as an enclosure, cat-safe fence or harness, when that meets the cat's needs and reduces exposure to traffic, conflict, predators and infectious disease.</p>" },
    { h: "Meet indoor cats' essential needs", html:
      "<p>The " + source("2025 indoor-cat position statement", SOURCES.indoorNeeds) +
      " centres five areas: a safe place; separated key resources; opportunities for play and predatory behaviour; positive, predictable human interaction; and respect for feline senses. Provide vertical territory, hiding options, scratching surfaces, clean toileting areas and play that fits the individual cat.</p><p>Do not assume a second cat is automatic enrichment. Some cats do not benefit from feline company, and introductions require planning.</p>" },
    { h: "Balconies, windows and controlled access", html:
      "<p>An open high-rise balcony or unscreened window is not a controlled environment. Before access, have the full boundary assessed and securely enclosed with materials and fixings appropriate to the building and cat. Check rental, juristic-person and fire-safety rules before installation.</p>" },
    { h: "Health and identification", html:
      "<p>Ask a veterinarian to tailor vaccination, parasite control and reproductive care to actual lifestyle and exposure. Microchip details and visible identification should be kept current even for indoor cats because escapes happen. Product choice and frequency are patient-specific; this page does not prescribe them.</p>" },
    { h: "Source and review boundary", html:
      "<p><strong>Welfare references:</strong> " + source("indoor/outdoor lifestyle", SOURCES.indoorOutdoor) + " and " +
      source("indoor-cat needs", SOURCES.indoorNeeds) +
      ". Checked 1 August 2026; no licensed veterinarian has clinically reviewed this page.</p>" }
  ],
  faqs: [
    ["Is an indoor life automatically good for a cat?", "<p>No. Indoor living avoids many outdoor hazards, but the home must meet the cat's physical and emotional needs with safe places, separated resources, play and appropriate territory.</p>"],
    ["Is an open condo balcony safe for a cat?", "<p>Do not treat it as safe. Use a properly assessed, fully secured enclosure and comply with building and fire-safety rules before allowing access.</p>"],
    ["Should every indoor cat have a companion cat?", "<p>No. Feline sociability varies. Some cats benefit from company and others experience tension; make the decision for the individuals and introduce slowly.</p>"],
    ["Can a cat use a harness outdoors?", "<p>Some cats can learn to use a well-fitted harness for controlled access. Introduce it gradually indoors and stop if the cat is distressed.</p>"],
    ["Does an indoor cat need a veterinarian?", "<p>Yes. Indoor status does not replace preventive care. Ask a vet to tailor vaccination, parasite, dental, weight and reproductive care to the cat.</p>"]
  ],
  related: [
    { name: "Cat vaccination guide", path: "/cats/cat-vaccinations-thailand.html", desc: "Core, lifestyle and legal questions for a vet." },
    { name: "Getting a cat", path: "/cats/getting-a-cat-in-pattaya.html", desc: "Health records, home setup and introductions." },
    { name: "Microchipping", path: "/owning-a-pet-in-pattaya/microchipping-your-pet.html", desc: "Identification and keeping contact details current." },
    { name: "Hot-climate pet care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", desc: "Plan shade, water and safe activity." }
  ]
}));

pages.push(cat({
  slug: "cat-vaccinations-thailand",
  crumb: "Cat vaccinations",
  title: "Cat Vaccines in Thailand | Vet-Led Guide | PattayaPets",
  desc: "A source-led guide to cat vaccination in Thailand: core and lifestyle-based vaccines, Thai rabies law, records and questions for a qualified veterinarian.",
  h1: "Cat vaccination in Thailand: build the plan with a vet",
  lede: "A safe vaccination plan follows current evidence, Thai requirements, the product label and the individual cat's age, health, history and exposure.",
  sections: [
    { h: "Core and risk-based decisions", html:
      "<p>The " + source("2024 WSAVA vaccination guidelines", SOURCES.vaccines) +
      " identify feline panleukopenia virus, feline herpesvirus and feline calicivirus vaccines as core for pet cats. Rabies vaccination follows local law and risk. Other decisions, including feline leukaemia virus vaccination, depend on age, exposure and test history.</p>" },
    { h: "Why there is no universal online schedule", html:
      "<p>Maternal antibodies, previous records, current illness, vaccine type and manufacturer instructions affect timing. Bring every certificate and label to the veterinarian. Do not restart, delay or combine vaccines from a generic calendar without clinical advice.</p>" },
    { h: "Thai rabies requirements", html:
      "<p>Thailand's Department of Livestock Development maintains the official " +
      source("Rabies Act B.E. 2535 legal hub", SOURCES.thaiRabies) +
      ". Ask a Thai veterinarian or the relevant DLD office to confirm the current requirement and documentation for your cat; the legal rule and locally licensed product take priority over an overseas schedule.</p>" },
    { h: "FeLV, FIV and new cats", html:
      "<p>The " + source("AAFP feline retrovirus guidelines", SOURCES.retrovirus) +
      " explain why exposure history and test interpretation matter. A result is not a do-it-yourself diagnosis. Ask the veterinarian whether and when testing is appropriate, especially before introducing a new cat to resident cats.</p>" },
    { h: "Records and adverse events", html:
      "<p>Keep the date, product, batch if recorded, clinic, veterinarian and next review date. Ask what mild effects may be expected and what signs should trigger a call. If the cat develops breathing difficulty, collapse or rapidly worsening swelling after vaccination, contact an emergency veterinarian immediately.</p>" },
    { h: "Sources and review boundary", html:
      "<p><strong>References:</strong> " + source("WSAVA vaccination guidelines", SOURCES.vaccines) + ", " +
      source("DLD Rabies Act hub", SOURCES.thaiRabies) + " and " + source("AAFP retrovirus guidelines", SOURCES.retrovirus) +
      ". Checked 1 August 2026; no licensed veterinarian has clinically reviewed this page.</p>" }
  ],
  faqs: [
    ["Which vaccines are core for cats?", "<p>WSAVA identifies vaccines against feline panleukopenia, herpesvirus and calicivirus as core for pet cats. Rabies follows local law and risk; a veterinarian must set the plan.</p>"],
    ["Is there one kitten schedule for every cat?", "<p>No. Age, maternal antibodies, product instructions, health and previous records affect timing. Use the schedule from the treating veterinarian.</p>"],
    ["Does Thai rabies law apply to cats?", "<p>Thailand's DLD publishes the Rabies Act and related rules. Confirm the current requirement and certificate details with a Thai veterinarian or DLD office.</p>"],
    ["Does every cat need FeLV vaccination?", "<p>It is a risk-based decision influenced by age and exposure. Discuss testing and vaccination with a veterinarian.</p>"],
    ["What vaccination records should I keep?", "<p>Keep the certificate and, where recorded, product, batch, date, clinic, veterinarian and next review date.</p>"]
  ],
  related: [
    { name: "Indoor vs outdoor cats", path: "/cats/indoor-vs-outdoor-cats.html", desc: "Lifestyle changes exposure and welfare needs." },
    { name: "Getting a cat", path: "/cats/getting-a-cat-in-pattaya.html", desc: "First records, examination and introductions." },
    { name: "Heartworm", path: "/pet-health-pattaya/heartworm.html", desc: "Vet-led prevention and testing questions." },
    { name: "Find a vet", path: "/vets/", desc: "Compare documented local services." }
  ]
}));

pages.push(cat({
  slug: "getting-a-cat-in-pattaya",
  crumb: "Getting a cat",
  title: "Getting a Cat in Pattaya | Safe First Steps | PattayaPets",
  desc: "A checklist for getting a cat in Pattaya: verify the source, collect health records, arrange a veterinary check, prepare a transition room and introduce slowly.",
  h1: "Getting a cat in Pattaya: verify, prepare, introduce slowly",
  lede: "The safest start is a documented handover, a prepared home and a veterinary plan based on the individual cat rather than assumptions about its source.",
  sections: [
    { h: "Verify the source and the handover", html:
      "<p>Whether the cat comes from a rescue, private rehoming or breeder, ask for the identity of the current keeper, ownership or surrender authority, age estimate, microchip scan, vaccination and treatment records, known medical or behavioural needs, and written adoption or sale terms. Do not assume a listing means we verified current availability or care.</p>" },
    { h: "Arrange a veterinary check", html:
      "<p>The Feline Veterinary Medical Association advises a recent veterinary check before introducing a new cat to resident cats. Its " +
      source("new-cat introduction guide", SOURCES.catIntro) +
      " also recommends discussing contagious-disease testing with a veterinarian. Keep the newcomer separate until the clinician advises how to proceed.</p>" },
    { h: "Create a transition room", html:
      "<p>Prepare a quiet, secure room with food, water, litter, hiding and elevated resting options, scratching and play resources. Secure windows and balconies. Let the cat choose contact; do not force handling or immediately open the whole home.</p>" },
    { h: "Introduce resident cats gradually", html:
      "<p>Health clearance comes first, then a staged behavioural introduction. The " + source("FelineVMA step-by-step guide", SOURCES.catIntro) +
      " starts with separation and resource planning. Progress at the cats' comfort rather than a fixed number of days, and seek veterinary or qualified behaviour help if tension persists.</p>" },
    { h: "Budget and continuity", html:
      "<p>Plan for food, litter, housing permission, routine and unexpected veterinary care, transport, identification and care during travel. Confirm actual fees with providers; this page does not publish an unverified Pattaya cost estimate.</p>" },
    { h: "Sources and review boundary", html:
      "<p><strong>References:</strong> " + source("FelineVMA introduction guide", SOURCES.catIntro) + " and " +
      source("AAFP retrovirus guidelines", SOURCES.retrovirus) +
      ". Checked 1 August 2026; no licensed veterinarian has clinically reviewed this page.</p>" }
  ],
  faqs: [
    ["What records should come with a cat?", "<p>Ask for current keeper and handover details, microchip information, vaccination and treatment records, known health or behaviour needs and written adoption or sale terms.</p>"],
    ["Should a new cat meet my resident cat immediately?", "<p>No. Arrange veterinary checks, use a separate transition room and follow a gradual introduction process.</p>"],
    ["Does a rescue listing prove the cat is vaccinated or neutered?", "<p>No. Verify the individual cat's current records directly with the organisation and, when needed, the treating clinic.</p>"],
    ["What should be in a transition room?", "<p>Provide food, water, litter, a safe hiding place, elevated rest, scratching and play resources in a secure, quiet room.</p>"],
    ["How long should introductions take?", "<p>There is no reliable fixed duration. Progress only when each cat is comfortable and seek professional help if tension persists.</p>"]
  ],
  related: [
    { name: "Adopt a pet", path: "/adopt-a-pet-pattaya/", desc: "Organisation listings whose current status must be checked directly." },
    { name: "Cat vaccination guide", path: "/cats/cat-vaccinations-thailand.html", desc: "Records and risk-based vet planning." },
    { name: "Indoor vs outdoor cats", path: "/cats/indoor-vs-outdoor-cats.html", desc: "Set up a safe, welfare-led home." },
    { name: "Find a vet", path: "/vets/", desc: "Arrange an individual health assessment." }
  ]
}));

pages.push(cat({
  slug: "cat-boarding-pattaya",
  crumb: "Cat boarding",
  title: "Cat Boarding Pattaya: Verification Guide | PattayaPets",
  desc: "How to verify cat boarding in Pattaya: current acceptance, housing, veterinary plan, vaccination rules, medication, records and written costs.",
  h1: "Cat boarding in Pattaya: verify the care before booking",
  lede: "A facility name or pet-friendly label does not establish suitable cat care. Ask for current, written answers about the individual cat and booking.",
  verify: "This is an editorial verification checklist, checked 1 August 2026. Facility policies, staffing, availability and fees change. PattayaPets has not clinically reviewed any boarding protocol and does not certify a facility through this page.",
  sections: [
    { h: "Confirm the booking facts", html:
      "<p>Ask the operator directly whether it accepts cats on your dates, the exact room type, total price and deposit or cancellation terms. Get the legal or trading name, physical address, emergency contact and written confirmation. A directory listing is not a live availability feed.</p>" },
    { h: "Inspect cat housing", html:
      "<p>Look for secure double-door handling, clean and intact surfaces, ventilation and temperature control, hiding and elevated resting places, separation from dogs and unfamiliar cats, individual litter and feeding arrangements, and a plan that prevents escape during cleaning. Ask how wellbeing and food, water, urine and stool are recorded.</p>" },
    { h: "Health and outbreak questions", html:
      "<p>The " + source("Association of Shelter Veterinarians' standards", SOURCES.shelterCare) +
      " provide a useful care benchmark for population settings. Ask which vaccination and parasite records are required, how coughing, diarrhoea, vomiting or skin disease are handled, how animals are isolated, and which veterinarian is contacted. The facility's rule does not replace your own vet's advice.</p>" },
    { h: "Medication and emergencies", html:
      "<p>If medication is needed, provide the original labelled container and written instructions from the prescribing veterinarian. Confirm who may administer it, how each dose is logged and what happens if it is refused or vomited. Put emergency authority, spending limits and contacts in writing.</p>" },
    { h: "Trial and handover", html:
      "<p>For a longer stay, ask whether a short trial is appropriate. Supply the cat's identification, carrier, routine, diet, veterinary details and signed authority. At collection, request the daily record and ask about any change in eating, drinking, toileting, medication or behaviour.</p>" },
    { h: "Source and review boundary", html:
      "<p><strong>Care benchmark:</strong> " + source("ASV Guidelines for Standards of Care", SOURCES.shelterCare) +
      ". Checked 1 August 2026. We did not perform a clinical protocol review or certify a Pattaya facility.</p>" }
  ],
  faqs: [
    ["Does a listing prove a cattery has space?", "<p>No. Confirm current cat acceptance, exact dates, room type and price directly and in writing.</p>"],
    ["What should I inspect in cat housing?", "<p>Check escape controls, cat-only separation, clean surfaces, ventilation and temperature, hiding and elevated rest, litter arrangements and daily monitoring records.</p>"],
    ["Can boarding staff give medication?", "<p>Policies and competence vary. Confirm who administers it, how doses are logged and the escalation plan with the prescribing veterinarian.</p>"],
    ["Which vaccinations are required?", "<p>The facility sets entry rules and your veterinarian sets patient care. Obtain both in writing and resolve any conflict before booking.</p>"],
    ["What should I collect after the stay?", "<p>Ask for the daily record and any changes in food, water, toileting, medication, health or behaviour.</p>"]
  ],
  related: [
    { name: "Boarding directory", path: "/boarding/", desc: "Check current operating and verification status." },
    { name: "Cat vaccination guide", path: "/cats/cat-vaccinations-thailand.html", desc: "Prepare records with your vet." },
    { name: "Pet sitters", path: "/owning-a-pet-in-pattaya/pet-sitters-and-dog-walkers.html", desc: "Compare in-home care using a written scope." },
    { name: "Find a vet", path: "/vets/", desc: "Set an emergency contact before travel." }
  ]
}));

pages.push(dog({
  slug: "dog-vaccinations-thailand",
  crumb: "Dog vaccinations",
  title: "Dog Vaccines in Thailand | Vet-Led Guide | PattayaPets",
  desc: "A source-led guide to dog vaccination in Thailand: core vaccines, lifestyle decisions, Thai rabies law, parasite planning and records.",
  h1: "Dog vaccination in Thailand: evidence, law and individual risk",
  lede: "The safe plan is not a copied calendar. It combines current vaccination guidance, Thai requirements, product instructions and the dog's health and exposure.",
  sections: [
    { h: "Core vaccination concepts", html:
      "<p>The " + source("2024 WSAVA vaccination guidelines", SOURCES.vaccines) +
      " identify canine distemper virus, canine adenovirus and canine parvovirus vaccines as core for pet dogs. Rabies vaccination follows local law and risk. Puppy series and adult revaccination decisions must account for reliable records and the product used.</p>" },
    { h: "Lifestyle-based decisions", html:
      "<p>Leptospirosis and respiratory-disease vaccines are examples of decisions influenced by geography, animal contact, shared water or environments, boarding and travel. Tell the vet where the dog lives and goes; do not select or omit a vaccine from a generic online list.</p>" },
    { h: "Thai rabies requirements", html:
      "<p>The Department of Livestock Development publishes Thailand's " + source("Rabies Act B.E. 2535 legal hub", SOURCES.thaiRabies) +
      ". Confirm current vaccination and certificate requirements with a Thai veterinarian or relevant DLD office. Thai law and the locally licensed product take priority over a schedule from another country.</p>" },
    { h: "Parasites are a separate plan", html:
      "<p>Vaccines do not prevent heartworm, ticks, fleas or intestinal parasites. Ask the veterinarian for a species-, weight-, history- and exposure-specific plan. See the " + source("American Heartworm Society guidelines", SOURCES.heartworm) + " and " +
      source("CAPC tick guidance", SOURCES.ticks) +
      " as clinical references; do not copy drug or interval choices without local veterinary advice.</p>" },
    { h: "Keep an auditable record", html:
      "<p>Retain certificates and, where recorded, the product, batch, date, clinic, veterinarian and next review date. These records matter for boarding, travel and clinical decisions. Ask the clinic what reaction signs require a call; breathing difficulty, collapse or rapidly worsening swelling needs emergency veterinary attention.</p>" },
    { h: "Sources and review boundary", html:
      "<p><strong>References:</strong> " + source("WSAVA vaccination guidelines", SOURCES.vaccines) + ", " +
      source("DLD Rabies Act hub", SOURCES.thaiRabies) + ", " + source("AHS heartworm guidelines", SOURCES.heartworm) + " and " +
      source("CAPC tick guidance", SOURCES.ticks) +
      ". Checked 1 August 2026; no licensed veterinarian has clinically reviewed this page.</p>" }
  ],
  faqs: [
    ["Which vaccines are core for dogs?", "<p>WSAVA identifies vaccines against canine distemper, adenovirus and parvovirus as core for pet dogs. Rabies follows local law and risk. A veterinarian sets the individual plan.</p>"],
    ["Is there one puppy schedule for every dog?", "<p>No. Age, maternal antibodies, product instructions, health and previous records affect timing. Follow the treating veterinarian's schedule.</p>"],
    ["Does vaccination prevent heartworm or ticks?", "<p>No. Parasite prevention is a separate, vet-led plan using products suitable for the individual dog.</p>"],
    ["What Thai rabies rule should I follow?", "<p>Confirm current requirements with a Thai veterinarian or DLD office using the official Rabies Act and related rules, not an overseas schedule.</p>"],
    ["What records should I keep?", "<p>Keep certificates and, where recorded, product, batch, date, clinic, veterinarian and next review date.</p>"]
  ],
  related: [
    { name: "Puppy care", path: "/dogs/puppy-care-pattaya.html", desc: "Coordinate health, socialisation and training." },
    { name: "Heartworm", path: "/pet-health-pattaya/heartworm.html", desc: "Prevention and testing questions for a vet." },
    { name: "Tick-borne disease", path: "/pet-health-pattaya/tick-borne-disease.html", desc: "Why exposure and symptoms do not diagnose infection." },
    { name: "Find a vet", path: "/vets/", desc: "Build and document the individual plan." }
  ]
}));

pages.push(dog({
  slug: "choosing-a-dog-for-the-climate",
  crumb: "Choosing a dog",
  title: "Dogs and Pattaya Heat | Choosing for Welfare | PattayaPets",
  desc: "A welfare-led guide to choosing a dog for Pattaya's heat, considering breathing, body condition, coat, age, health and the life you can reliably provide.",
  h1: "Choose a dog for the life and climate you can provide",
  lede: "Heat risk is not a simple best-breed list. Airway shape, age, body condition, coat, illness, activity and housing all affect an individual dog's ability to cope.",
  sections: [
    { h: "Start with heat-risk factors", html:
      "<p>Cornell's " + source("canine heatstroke guide", SOURCES.heat) +
      " identifies short-muzzled conformation, older age, excess weight, thick or dark coat and respiratory or cardiac disease among risk factors. Ask a veterinarian to assess the individual dog rather than relying on a breed label alone.</p>" },
    { h: "Flat-faced dogs need special scrutiny", html:
      "<p>Brachycephalic obstructive airway syndrome can restrict airflow and worsen with heat, humidity, exertion and stress. Review the " +
      source("Cornell BOAS guide", SOURCES.boas) +
      ", listen for noisy or laboured breathing and seek a veterinary assessment before acquisition. Snoring or poor exercise tolerance should not be dismissed as normal for the breed.</p>" },
    { h: "Audit the real daily life", html:
      "<ul><li>Can the home maintain a safe indoor environment during the hottest periods and power interruptions?</li><li>Can exercise be adjusted to conditions and the dog's signals?</li><li>Can you transport the dog safely without leaving it in a parked vehicle?</li><li>Can you fund routine care and airway, skin, joint or other breed-associated needs?</li><li>Do housing and travel plans accept this individual dog's size and welfare needs?</li></ul>" },
    { h: "Local origin does not prove heat tolerance", html:
      "<p>Do not assume a Thai or mixed-breed dog is automatically adapted, healthy or low-risk. Assess body condition, breathing, age, coat, health history and behaviour for the individual. Likewise, no breed can be made safe by air-conditioning alone.</p>" },
    { h: "Source and review boundary", html:
      "<p><strong>Clinical references:</strong> " + source("Cornell heatstroke", SOURCES.heat) + " and " + source("Cornell BOAS", SOURCES.boas) +
      ". Checked 1 August 2026; no licensed veterinarian has clinically reviewed this page.</p>" }
  ],
  faqs: [
    ["Which dog breed is best for Pattaya?", "<p>There is no single best breed. Evaluate the individual dog's breathing, age, body condition, coat, health and activity needs against the home and care you can reliably provide.</p>"],
    ["Are flat-faced dogs at higher heat risk?", "<p>Yes. Short-muzzled dogs are a recognised higher-risk group, and BOAS may restrict airflow. Arrange a veterinary assessment rather than treating noisy breathing as normal.</p>"],
    ["Is a local mixed-breed dog automatically heat-adapted?", "<p>No. Origin does not prove heat tolerance or health. Assess the individual dog.</p>"],
    ["Does air-conditioning remove heatstroke risk?", "<p>No. It can help manage the environment, but transport, power loss, exertion, weight, airway disease and other factors still matter.</p>"],
    ["What should I ask before choosing?", "<p>Ask about breathing, exercise tolerance, medical records, body condition, behaviour, housing fit, transport and realistic lifetime care costs.</p>"]
  ],
  related: [
    { name: "Hot-climate pet care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", desc: "Plan activity, shade, water and transport." },
    { name: "Heatstroke", path: "/pet-emergency/heatstroke.html", desc: "Emergency recognition and veterinary contact." },
    { name: "Adopt a pet", path: "/adopt-a-pet-pattaya/", desc: "Verify each animal's current records and status." },
    { name: "Healthy weight", path: "/pet-health-pattaya/healthy-weight.html", desc: "Body condition and heat risk." }
  ]
}));

pages.push(dog({
  slug: "puppy-care-pattaya",
  crumb: "Puppy care",
  title: "Puppy Care Pattaya: Vet & Training Guide | PattayaPets",
  desc: "A source-led puppy checklist for Pattaya: veterinary records, vaccination, safe socialisation, reward-based training, heat management and identification.",
  h1: "Puppy care in Pattaya: coordinate health and learning",
  lede: "Puppies need both infectious-disease protection and safe, positive exposure to the world. Your veterinarian and qualified reward-based trainer should coordinate the plan.",
  sections: [
    { h: "Book an early veterinary visit", html:
      "<p>Bring the source and ownership record, birth date or estimate, microchip details, every vaccine and parasite record, diet, current products and any signs of illness. The vet can examine the puppy and set a vaccination, parasite, nutrition and follow-up plan.</p>" },
    { h: "Vaccination and exposure belong in one plan", html:
      "<p>The " + source("2024 WSAVA vaccination guidelines", SOURCES.vaccines) +
      " explain why puppy vaccination is a series and also state that careful socialisation can begin before the series is complete. Ask the veterinarian which environments and known healthy dogs are appropriate locally; avoid sick dogs and uncontrolled, contaminated or high-traffic dog areas.</p>" },
    { h: "Socialisation is calm learning", html:
      "<p>AAHA's current " + source("new-puppy guidance", SOURCES.puppy) +
      " describes managed exposure that builds confidence rather than forced interaction. Let the puppy observe people, sounds, surfaces, handling and other animals at a comfortable distance. Stop or increase distance when the puppy shows fear or cannot disengage.</p>" },
    { h: "Use reward-based training", html:
      "<p>The " + source("AVSAB humane training position statement", SOURCES.training) +
      " supports reward-based methods and advises against aversive methods. Choose a trainer who explains methods and credentials, welcomes observation and does not use pain, fear, intimidation, shock, prong collars or dominance claims.</p>" },
    { h: "Heat, food and growth", html:
      "<p>Puppies can be vulnerable to heat and overexertion. Adjust activity to conditions and the individual, provide a cool environment and never leave a puppy in a parked vehicle. Feed a complete diet appropriate to growth on veterinary advice; do not add supplements or impose an online calorie target without assessment.</p>" },
    { h: "Sources and review boundary", html:
      "<p><strong>References:</strong> " + source("WSAVA vaccination", SOURCES.vaccines) + ", " + source("AAHA puppy guidance", SOURCES.puppy) + " and " +
      source("AVSAB humane training", SOURCES.training) +
      ". Checked 1 August 2026; no licensed veterinarian has clinically reviewed this page.</p>" }
  ],
  faqs: [
    ["Must socialisation wait until every vaccine is finished?", "<p>Not necessarily. Current veterinary guidance supports careful socialisation before completion, while avoiding sick dogs and uncontrolled high-risk areas. Ask your vet for a local risk plan.</p>"],
    ["What training methods should I use?", "<p>Use reward-based methods. Avoid training that relies on pain, fear, intimidation, shock, prong collars or dominance.</p>"],
    ["Can an online chart set my puppy's vaccine dates?", "<p>No. The treating veterinarian must use age, records, health, product instructions and local risk to set the series.</p>"],
    ["How should I exercise a puppy in the heat?", "<p>Adjust activity to conditions and the puppy's signals, provide a cool environment and stop before distress. Ask your vet about individual exercise limits.</p>"],
    ["What should I bring to the first vet visit?", "<p>Bring origin and ownership details, age, microchip, vaccine and parasite records, diet and product names, plus notes on any health or behaviour concerns.</p>"]
  ],
  related: [
    { name: "Dog vaccination guide", path: "/dogs/dog-vaccinations-thailand.html", desc: "Core, legal and lifestyle decisions." },
    { name: "Parvovirus", path: "/pet-health-pattaya/parvovirus.html", desc: "Contagion, isolation and prompt veterinary care." },
    { name: "Dog trainers", path: "/trainers/", desc: "Verify methods, credentials and current services." },
    { name: "Hot-climate pet care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", desc: "Reduce heat exposure and transport risk." }
  ]
}));

pages.push(dog({
  slug: "common-dog-health-issues-tropics",
  crumb: "Tropical health risks",
  title: "Dog Health in Pattaya | Tropical Risk Guide | PattayaPets",
  desc: "A source-led overview of dog health risks relevant to Pattaya: heat, mosquitoes, ticks, skin and ears, with prevention questions and clear diagnostic limits.",
  h1: "Dog health in Pattaya: use risk patterns, not self-diagnosis",
  lede: "Heat, vectors and moisture can matter, but they do not identify a disease. This guide links each risk to an authoritative source and a vet-led next step.",
  sections: [
    { h: "Heat-related illness", html:
      "<p>Heatstroke is life-threatening. Short-muzzled, older, overweight, thick-coated and cardiorespiratory-compromised dogs are among higher-risk groups in " +
      source("Cornell's heatstroke guidance", SOURCES.heat) +
      ". Prevent exposure to hot vehicles and unsafe exertion. Heavy distress, confusion, weakness, collapse or breathing difficulty needs emergency veterinary help.</p>" },
    { h: "Mosquito-borne heartworm", html:
      "<p>The " + source("American Heartworm Society guidelines", SOURCES.heartworm) +
      " cover prevention and testing for dogs and cats. We found no current representative Pattaya prevalence figure, so we do not state one. Ask a vet for a locally licensed, patient-specific prevention and testing plan.</p>" },
    { h: "Ticks and tick-borne disease", html:
      "<p>Ticks can transmit pathogens, and signs such as lethargy, fever, appetite change or bruising are non-specific. The " +
      source("CAPC tick guideline", SOURCES.ticks) +
      " supports ongoing control, but product selection belongs with a veterinarian. Exposure or symptoms alone do not establish a diagnosis.</p>" },
    { h: "Skin and ear problems", html:
      "<p>Allergy, parasites, foreign material and secondary infection can overlap. The " + source("AAHA allergic skin disease guidelines", SOURCES.skin) +
      " use a structured diagnostic process. Do not put human drops, essential oils or leftover prescriptions into an ear or on damaged skin.</p>" },
    { h: "Build a documented prevention plan", html:
      "<p>Keep vaccine certificates, parasite product names and dates, weight and body-condition trend, diet, travel and exposure history, and your regular and emergency clinic contacts. Review the plan when lifestyle, health, travel or product availability changes.</p>" },
    { h: "Sources and review boundary", html:
      "<p><strong>References:</strong> " + source("Cornell heatstroke", SOURCES.heat) + ", " + source("AHS heartworm", SOURCES.heartworm) + ", " +
      source("CAPC ticks", SOURCES.ticks) + " and " + source("AAHA skin disease", SOURCES.skin) +
      ". Checked 1 August 2026; no licensed veterinarian has clinically reviewed this page.</p>" }
  ],
  faqs: [
    ["What are the main health risks to plan for?", "<p>Heat exposure, mosquito- and tick-borne parasites, skin and ear disease, contagious disease and the dog's individual conditions. A vet should prioritise them for the patient.</p>"],
    ["Does tiredness diagnose tick-borne disease?", "<p>No. Tiredness and other signs are non-specific. A veterinarian must assess the dog and decide on testing.</p>"],
    ["How common is heartworm in Pattaya?", "<p>We found no current representative Pattaya prevalence dataset, so we do not publish a percentage.</p>"],
    ["Can I use human ear drops?", "<p>No, not without veterinary direction. The cause and condition of the ear must be assessed first.</p>"],
    ["What records should I maintain?", "<p>Keep vaccine certificates, parasite products and dates, diet, weight trend, travel and exposure history, and regular and emergency vet contacts.</p>"]
  ],
  related: [
    { name: "Heartworm", path: "/pet-health-pattaya/heartworm.html", desc: "Prevention and testing questions." },
    { name: "Tick-borne disease", path: "/pet-health-pattaya/tick-borne-disease.html", desc: "Why symptoms are not a diagnosis." },
    { name: "Skin and ear problems", path: "/pet-health-pattaya/skin-and-ear-problems.html", desc: "Find the cause before treating." },
    { name: "Pet emergencies", path: "/pet-emergency/", desc: "Urgent-care orientation and current contacts." }
  ]
}));

module.exports = pages;
