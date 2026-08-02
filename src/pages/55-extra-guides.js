"use strict";
/* Cross-cluster guides with explicit evidence and verification boundaries. */

const { article } = require("../guidekit.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const EMERG = { name: "Pet emergencies", path: "/pet-emergency/" };
const ADOPT = { name: "Adopt a pet in Pattaya", path: "/adopt-a-pet-pattaya/" };
const HEALTH = { name: "Pet health in Pattaya", path: "/pet-health-pattaya/" };
const OWNING = { name: "Owning a pet in Pattaya", path: "/owning-a-pet-in-pattaya/" };
const REVIEWED = "2026-08-01";

const CLINICAL_BOUNDARY =
  "Clinical review status: no licensed veterinarian has reviewed this publication. " +
  "It is source-led general orientation, not a diagnosis, treatment plan or dosing " +
  "instruction. Contact a qualified veterinarian for the individual animal.";

const SOURCES = {
  toads: "https://www.msdvetmanual.com/toxicology/toad-poisoning/toad-poisoning-in-dogs-and-cats",
  shelterCare: "https://www.sheltervet.org/guidelines-for-standards-of-care-in-animal-shelters.",
  rabiesBite: "https://ddc.moph.go.th/brc/news.php?deptcode=brc&news=58885&news_views=416",
  dental: "https://www.aaha.org/resources/2019-aaha-dental-care-guidelines-for-dogs-and-cats/",
  dentalHome: "https://www.aaha.org/resources/your-pets-dental-care/",
  weight: "https://www.aaha.org/trends-magazine/publications/nutritional-guidelines/",
  wsavaNutrition: "https://wsava.org/global-guidelines/global-nutrition-guidelines/",
  dldMovement: "https://aqi-new.dld.go.th/index.php/th/service/manualpeo",
  catTransport: "https://catvets.com/resource/2025-transportation-of-cats-in-motor-vehicles-position-statement/"
};

const pages = [];

function source(name, href) {
  return '<a href="' + href + '">' + name + "</a>";
}

pages.push(article({
  path: "/pet-emergency/venomous-creatures.html",
  title: "Toads, Stings & Bites in Pattaya | Pet Safety | PattayaPets",
  desc: "Source-led emergency orientation for a pet that mouths a toad or has an unidentified sting or bite in Pattaya, with safe limits and veterinary escalation.",
  crumb: "Toads, stings and bites",
  breadcrumbs: [GUIDES, EMERG],
  eyebrow: "Pet emergencies",
  h1: "Toads, stings and unidentified bites: call a vet",
  lede: "Species, toxin and severity are difficult to identify at home. Treat a concerning exposure as a veterinary problem, not an online identification exercise.",
  verify: CLINICAL_BOUNDARY,
  updated: REVIEWED,
  sections: [
    { h: "Toad exposure can affect more than the mouth", html:
      "<p>The " + source("MSD Veterinary Manual review of toad poisoning", SOURCES.toads) +
      " documents immediate drooling, head shaking, pawing at the mouth and retching, with possible vomiting, weakness, breathing difficulty, abnormal heart rhythm or seizures in more serious exposures. Severity varies by toad, dose and patient; a photograph from a safe distance may help, but do not delay care to identify the animal.</p>" },
    { h: "What to do after mouthing a toad", html:
      "<p>Remove the pet from further exposure and contact an emergency veterinarian immediately. MSD recommends prompt, thorough flushing of oral mucous membranes, while also warning against inhalation of contaminated water or saliva. Because an agitated, weak or seizing animal may aspirate or bite, follow the emergency clinic's handling instructions while travelling; do not force water down the throat and do not induce vomiting.</p>" },
    { h: "Stings, centipedes, scorpions and unknown bites", html:
      "<p>We did not verify which arthropod species caused an individual exposure or publish a claim that a particular Pattaya species is harmless. Move the pet away without handling the creature, photograph it only if safe, and call a vet with the time, location and signs. Breathing difficulty, collapse, seizures, rapidly spreading swelling, multiple stings or a mouth/eye exposure needs emergency care.</p>" },
    { h: "Do not improvise medication", html:
      "<p>Do not give human antihistamines, pain medicines or leftover veterinary drugs unless a veterinarian who knows the patient's species, weight, history and current signs instructs you. Do not cut, suck, burn or tourniquet a bite site.</p>" },
    { h: "Reduce exposure without making prevalence claims", html:
      "<p>Supervise outdoor access, use lighting, remove accessible food and water that attract wildlife, keep storage areas orderly and block safe-to-seal entry gaps. We found no current representative dataset for the frequency of these encounters across Pattaya homes, so this page does not rank local prevalence.</p>" },
    { h: "Source and review boundary", html:
      "<p><strong>Clinical reference:</strong> " + source("MSD Veterinary Manual: toad poisoning", SOURCES.toads) +
      ". Checked 1 August 2026; no licensed veterinarian has clinically reviewed this page.</p>" }
  ],
  faqs: [
    ["My dog mouthed a toad. What should I do?", "<p>Remove further exposure and phone an emergency veterinarian now. Do not induce vomiting or force water down the throat; follow the clinic's instructions for safe oral decontamination and transport.</p>"],
    ["Can I identify the risk from a photo?", "<p>A photo may help a clinician, but it cannot establish dose or severity. Do not delay veterinary contact to identify the creature.</p>"],
    ["Can I give an antihistamine for a sting?", "<p>Only if a veterinarian who knows the individual pet instructs you. Human products, combinations and doses can be inappropriate.</p>"],
    ["Is a centipede or scorpion sting harmless?", "<p>Do not assume that. Species and patient response may be uncertain; call a vet and seek emergency care for serious or rapidly worsening signs.</p>"],
    ["Which signs need emergency care?", "<p>Breathing difficulty, collapse, seizures, rapidly spreading swelling, multiple stings, severe weakness or a mouth or eye exposure needs emergency veterinary attention.</p>"]
  ],
  related: [
    { name: "Poisoning", path: "/pet-emergency/poisoning.html", desc: "Veterinary-first poisoning orientation." },
    { name: "Snake bites", path: "/pet-emergency/snake-bites.html", desc: "Avoid unsafe first aid and contact a vet." },
    { name: "24-hour vets", path: "/pet-emergency/24-hour-vets-pattaya.html", desc: "Call to confirm current emergency intake." },
    { name: "Pet emergencies", path: "/pet-emergency/", desc: "Urgent-care contacts and boundaries." }
  ]
}));

pages.push(article({
  path: "/adopt-a-pet-pattaya/fostering.html",
  title: "Fostering a Pet in Pattaya: Checklist | PattayaPets",
  desc: "A practical checklist for fostering a rescue dog or cat in Pattaya: verify the organisation, written authority, costs, veterinary plan, housing and handover.",
  crumb: "Fostering",
  breadcrumbs: [GUIDES, ADOPT],
  eyebrow: "Adopt a pet in Pattaya",
  h1: "Fostering in Pattaya: put the care plan in writing",
  lede: "Fostering can provide valuable temporary care, but responsibility, authority and emergency decisions must be clear before an animal enters your home.",
  verify: "Editorial checklist checked 1 August 2026. Organisation capacity, foster needs, funding and policies change. PattayaPets has not verified an open foster placement through this page and has not clinically reviewed a foster medical protocol.",
  updated: REVIEWED,
  sections: [
    { h: "Verify the organisation and animal", html:
      "<p>Contact the organisation through a current official channel. Confirm its legal or operating identity, who owns or has authority over the animal, the named coordinator, the animal's microchip and records, and whether the foster request is current. A directory listing does not prove capacity or an active programme.</p>" },
    { h: "Use a written foster agreement", html:
      "<p>Record start and expected review dates, where the animal may live or travel, adoption and publicity authority, supplies, routine and emergency veterinary responsibility, spending approval, transport, insurance or liability, data and photo use, and how either side ends or extends the placement. Do not assume the rescue pays every bill.</p>" },
    { h: "Require a veterinary and emergency plan", html:
      "<p>The " + source("Association of Shelter Veterinarians' care standards", SOURCES.shelterCare) +
      " apply to foster-based organisations and require timely veterinary and emergency planning. Obtain the regular and after-hours clinic, authorised decision-maker, medical records, current prescriptions and instructions for signs of infectious disease. Medication and isolation protocols must come from the responsible veterinarian, not this page.</p>" },
    { h: "Match the home to the individual", html:
      "<p>Confirm landlord, lease, juristic-person and household permission. Discuss resident animals, children, secure separation, escape risk, noise, stairs, balconies, transport and time alone. Do not promise introductions until a veterinarian and the organisation have addressed health and behaviour.</p>" },
    { h: "Track care and handover", html:
      "<p>Keep a daily record of food, water, elimination, medication, health and material behaviour changes, plus receipts and appointments. At handover, transfer the animal, equipment, original records and a signed care summary to the authorised person.</p>" },
    { h: "Source and review boundary", html:
      "<p><strong>Welfare reference:</strong> " + source("ASV Guidelines for Standards of Care", SOURCES.shelterCare) +
      ". Checked 1 August 2026. No licensed veterinarian has reviewed this page or any local organisation's protocol.</p>" }
  ],
  faqs: [
    ["Who pays foster veterinary bills?", "<p>Do not assume. Put routine, emergency and after-hours financial responsibility and approval limits in the written agreement.</p>"],
    ["How long does fostering last?", "<p>There is no reliable default. Agree a start date, review date, expected duration and extension or exit process in writing.</p>"],
    ["Can I foster with resident pets?", "<p>Possibly, but health, behaviour and secure separation must be assessed for the individuals. Follow the responsible veterinarian and organisation's plan.</p>"],
    ["Does a directory listing prove a rescue needs fosters?", "<p>No. Contact the organisation through a current official channel and verify the specific request.</p>"],
    ["What should I track each day?", "<p>Record food, water, elimination, medication, health and meaningful behaviour changes, plus appointments and expenses.</p>"]
  ],
  related: [
    { name: "Adopt a pet", path: "/adopt-a-pet-pattaya/", desc: "Check organisation operating and verification status." },
    { name: "Animal shelters", path: "/adopt-a-pet-pattaya/animal-shelters-pattaya.html", desc: "Compare documented services and gaps." },
    { name: "Pet-friendly housing", path: "/owning-a-pet-in-pattaya/pet-friendly-housing.html", desc: "Get building permission in writing." },
    { name: "24-hour vets", path: "/pet-emergency/24-hour-vets-pattaya.html", desc: "Pre-plan and reconfirm emergency intake." }
  ]
}));

pages.push(article({
  path: "/adopt-a-pet-pattaya/how-to-help.html",
  title: "Help Street Animals in Pattaya | Safe Options | PattayaPets",
  desc: "Safer ways to help Pattaya street animals: verify organisations, donate transparently, volunteer with a scope, foster formally and respond safely to injury.",
  crumb: "How to help",
  breadcrumbs: [GUIDES, ADOPT],
  eyebrow: "Adopt a pet in Pattaya",
  h1: "Helping street animals in Pattaya safely and accountably",
  lede: "Useful help starts with human safety, a verified recipient and a plan the responsible organisation or veterinarian can sustain.",
  verify: "Editorial guidance checked 1 August 2026. PattayaPets does not collect donations or dispatch rescue services. Organisation status, needs and response capacity must be confirmed directly.",
  updated: REVIEWED,
  sections: [
    { h: "Verify before donating", html:
      "<p>Use the organisation's current official channel, confirm who controls the payment account and ask what the money or supplies will fund. For a material donation, request a receipt or acknowledgement and check whether financial or activity reporting is available. Do not send money solely because an account appears in a repost.</p>" },
    { h: "Volunteer to a defined scope", html:
      "<p>Ask what task is needed, who supervises it, what training and protective equipment are provided, whether animal handling is involved, what insurance or liability applies and how personal data or images may be used. Decline work outside your competence.</p>" },
    { h: "Foster through a written agreement", html:
      "<p>A foster placement needs ownership authority, veterinary and emergency responsibility, costs, housing, transport, dates and handover in writing. See the <a href=\"/adopt-a-pet-pattaya/fostering.html\">fostering checklist</a>. The " +
      source("ASV shelter-care standards", SOURCES.shelterCare) +
      " are a useful benchmark for foster-based organisations.</p>" },
    { h: "If an animal is injured", html:
      "<p>Do not step into traffic or grab a frightened animal. Keep distance, note the exact location and condition, and contact a local rescue, animal-welfare authority or veterinarian through a verified number. Only contain or transport when it is safe and the receiving organisation or clinic agrees; availability is not guaranteed.</p>" },
    { h: "If you are bitten, scratched or exposed to saliva", html:
      "<p>Thailand's Department of Disease Control advises immediate washing with soap and water and prompt medical assessment even for a small exposure; see its " +
      source("March 2026 rabies guidance", SOURCES.rabiesBite) +
      ". Do not let an animal rescue task delay human medical care. A clinician decides post-exposure treatment.</p>" },
    { h: "What we could not verify", html:
      "<p>We did not verify real-time intake capacity, ambulance availability, volunteer vacancies or donation needs for every listed Pattaya organisation. Those named gaps are why each action begins with direct confirmation.</p>" }
  ],
  faqs: [
    ["How do I know a donation request is genuine?", "<p>Confirm it through the organisation's current official channel, verify the account holder and purpose, and ask for acknowledgement or reporting.</p>"],
    ["Should I move an injured street animal myself?", "<p>Only if it is safe and a receiving rescue or clinic agrees. A frightened animal may bite, and traffic or handling can create more harm.</p>"],
    ["What if I am bitten or scratched?", "<p>Wash with soap and water immediately and seek prompt human medical assessment. Do not wait for the animal's condition to become clear.</p>"],
    ["Can I volunteer without animal-handling experience?", "<p>Ask for non-handling tasks and a defined scope. Do not accept work outside your training or without appropriate supervision.</p>"],
    ["Does PattayaPets dispatch a rescue ambulance?", "<p>No. PattayaPets is an editorial publication. Contact organisations or veterinary clinics directly and confirm whether they can respond.</p>"]
  ],
  related: [
    { name: "Adopt a pet", path: "/adopt-a-pet-pattaya/", desc: "Organisation listings with explicit status and evidence." },
    { name: "Fostering", path: "/adopt-a-pet-pattaya/fostering.html", desc: "Use a written placement and veterinary plan." },
    { name: "Street-dog encounters", path: "/pet-emergency/street-dog-encounters.html", desc: "Protect people and avoid escalating the animal." },
    { name: "Find a vet", path: "/vets/", desc: "Call to confirm current intake." }
  ]
}));

pages.push(article({
  path: "/pet-health-pattaya/dental-care.html",
  title: "Pet Dental Care in Pattaya | Vet-Led Guide | PattayaPets",
  desc: "Source-led dental care for dogs and cats: warning signs, daily home prevention, professional assessment, anaesthesia and questions for a veterinarian.",
  crumb: "Dental care",
  breadcrumbs: [GUIDES, HEALTH],
  eyebrow: "Pet health in Pattaya",
  h1: "Dental care for dogs and cats: prevention plus examination",
  lede: "Visible tartar is only part of the mouth. A complete diagnosis and treatment plan belongs with a veterinarian and often requires assessment below the gum line.",
  verify: CLINICAL_BOUNDARY,
  updated: REVIEWED,
  sections: [
    { h: "Signs deserve a dental assessment", html:
      "<p>Persistent bad breath, red or bleeding gums, drooling, difficulty eating, dropping food, facial swelling, loose or broken teeth and mouth pain are reasons to call a veterinarian. These signs do not reveal the full extent or cause. The " +
      source("AAHA dental care guidelines", SOURCES.dental) +
      " describe a comprehensive approach to examination, imaging, cleaning, pain management and treatment.</p>" },
    { h: "Home care starts with a healthy-enough mouth", html:
      "<p>AAHA's current " + source("pet-owner dental guidance", SOURCES.dentalHome) +
      " supports daily brushing with pet-specific toothpaste. Ask a vet to examine a painful or inflamed mouth before starting. Do not use human toothpaste, and do not force brushing when it causes pain or fear.</p>" },
    { h: "Choose dental products by evidence", html:
      "<p>Ask the veterinary team for a suitable toothbrush or alternative and products with evidence for the individual species and chewing behaviour. Chews can fracture teeth or create choking and gastrointestinal risks if they are too hard, the wrong size or swallowed in pieces; supervise and follow the product and vet's instructions.</p>" },
    { h: "Why anaesthesia is discussed", html:
      "<p>AAHA explains that anaesthesia permits dental radiographs, probing and cleaning below the gum line, where disease can be hidden. Anaesthesia also has patient-specific risks, so ask about pre-anaesthetic assessment, monitoring, pain control, dental imaging, consent for extractions and recovery.</p>" },
    { h: "Urgent concerns", html:
      "<p>Contact a veterinarian promptly for sudden inability to eat, significant mouth trauma, facial swelling, uncontrolled bleeding or severe pain. Breathing difficulty, collapse or rapidly worsening swelling needs emergency care. Do not give human pain medicine.</p>" },
    { h: "Sources and review boundary", html:
      "<p><strong>Clinical references:</strong> " + source("AAHA dental guidelines", SOURCES.dental) + " and " + source("AAHA pet dental care", SOURCES.dentalHome) +
      ". Checked 1 August 2026; no licensed veterinarian has clinically reviewed this page.</p>" }
  ],
  faqs: [
    ["Is persistent bad breath normal?", "<p>No. It is a reason to arrange a dental assessment, although it does not identify the cause by itself.</p>"],
    ["Can I brush my pet's teeth?", "<p>Often yes, using pet-specific toothpaste, but ask a vet to assess a painful or inflamed mouth first and introduce brushing gradually.</p>"],
    ["Why does a professional dental involve anaesthesia?", "<p>It permits dental imaging, probing, cleaning below the gum line and safe treatment. Ask about the individual anaesthetic assessment and monitoring.</p>"],
    ["Are dental chews enough?", "<p>No single product replaces veterinary assessment. Ask which evidence-backed options are safe for the individual pet and supervise use.</p>"],
    ["Can I give human pain medicine for tooth pain?", "<p>No. Human medicines can be dangerous to pets. Contact a veterinarian for assessment and patient-specific pain control.</p>"]
  ],
  related: [
    { name: "Find a vet", path: "/vets/", desc: "Arrange a dental examination and written estimate." },
    { name: "Healthy weight", path: "/pet-health-pattaya/healthy-weight.html", desc: "Nutrition and body-condition assessment." },
    { name: "24-hour vets", path: "/pet-emergency/24-hour-vets-pattaya.html", desc: "Call for acute trauma, swelling or severe pain." },
    { name: "Pet health", path: "/pet-health-pattaya/", desc: "Source-led preventive health guides." }
  ]
}));

pages.push(article({
  path: "/pet-health-pattaya/healthy-weight.html",
  title: "Healthy Pet Weight in Pattaya | Vet-Led Guide | PattayaPets",
  desc: "A source-led guide to body condition and weight in dogs and cats: veterinary assessment, complete diets, measured intake, activity and safe monitoring.",
  crumb: "Healthy weight",
  breadcrumbs: [GUIDES, HEALTH],
  eyebrow: "Pet health in Pattaya",
  h1: "Healthy weight: assess body condition, then build a plan",
  lede: "A scale number alone does not define a healthy pet. Body condition, muscle, life stage, disease, diet and activity all belong in the assessment.",
  verify: CLINICAL_BOUNDARY,
  updated: REVIEWED,
  sections: [
    { h: "Use weight, body condition and muscle together", html:
      "<p>The " + source("2021 AAHA nutrition and weight-management guidance", SOURCES.weight) +
      " calls for nutritional history, body weight, body-condition score, muscle-condition score and physical examination. Ask the veterinary team to show you the assessment and record a baseline rather than relying on breed averages or appearance alone.</p>" },
    { h: "Record the whole intake", html:
      "<p>List the exact food, measured daily amount, treats, chews, table food, supplements, how household members feed, and any food obtained elsewhere. Bring labels or photographs. The " +
      source("WSAVA Global Nutrition Toolkit", SOURCES.wsavaNutrition) +
      " includes body-condition and nutrition tools for veterinary teams and caregivers.</p>" },
    { h: "Weight change needs an individual plan", html:
      "<p>A veterinarian should rule out or account for disease, select an appropriate complete diet, set the intake and activity plan, and define monitoring. Do not use a human diet, abrupt restriction, supplements or a copied calorie calculation. Rapid restriction is particularly risky in cats.</p>" },
    { h: "Activity in a hot climate", html:
      "<p>Exercise must fit species, age, joints, airway, heart, current fitness and conditions. Move activity to safer environments or times and stop before heat distress. Food adjustment still requires professional guidance; exercise alone is not a universal weight-loss prescription.</p>" },
    { h: "Unexpected change is a health signal", html:
      "<p>Unplanned weight loss or gain, muscle loss, sudden appetite or thirst change, vomiting, diarrhoea, weakness or abdominal enlargement warrants veterinary assessment. Collapse or breathing difficulty needs emergency care.</p>" },
    { h: "Sources and review boundary", html:
      "<p><strong>Clinical references:</strong> " + source("AAHA nutrition and weight management", SOURCES.weight) + " and " + source("WSAVA nutrition guidance", SOURCES.wsavaNutrition) +
      ". Checked 1 August 2026; no licensed veterinarian has clinically reviewed this page.</p>" }
  ],
  faqs: [
    ["How can I tell if my pet is overweight?", "<p>Ask a veterinary team to assess body weight, body-condition score and muscle condition together and show you how to monitor them.</p>"],
    ["Can I use an online calorie calculator?", "<p>Not as a patient-specific prescription. Health, life stage, diet and monitoring affect the plan; use a veterinary recommendation.</p>"],
    ["Should I cut food sharply for fast results?", "<p>No. Abrupt or excessive restriction can be harmful, particularly for cats. A veterinarian should set and monitor the plan.</p>"],
    ["Do treats count?", "<p>Yes. Record treats, chews, table food and supplements as part of the full daily intake for the veterinary assessment.</p>"],
    ["When is weight change concerning?", "<p>Unexpected loss or gain, muscle loss or a sudden change in appetite, thirst or energy warrants veterinary assessment.</p>"]
  ],
  related: [
    { name: "Find a vet", path: "/vets/", desc: "Request body- and muscle-condition assessment." },
    { name: "Dental care", path: "/pet-health-pattaya/dental-care.html", desc: "Oral pain can change eating." },
    { name: "Hot-climate pet care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", desc: "Plan safer activity and transport." },
    { name: "Pet health", path: "/pet-health-pattaya/", desc: "Source-led preventive health guides." }
  ]
}));

pages.push(article({
  path: "/owning-a-pet-in-pattaya/travelling-in-thailand.html",
  title: "Thailand Pet Travel: Verification Guide | PattayaPets",
  desc: "How to verify domestic pet travel in Thailand: DLD movement rules, carrier policy, route acceptance, accommodation, health records and contingency planning.",
  crumb: "Travelling in Thailand",
  breadcrumbs: [GUIDES, OWNING],
  eyebrow: "Owning a pet in Pattaya",
  h1: "Travelling in Thailand with a pet: verify every link",
  lede: "A workable trip depends on the exact animal, route, operator, destination and current government rules. Confirm each one directly before payment and departure.",
  verify: "Regulatory and operator information checked 1 August 2026. Policies and controlled-disease zones can change. Confirm the exact trip with Thailand's Department of Livestock Development, the carrier, accommodation and your veterinarian. No licensed veterinarian has clinically reviewed this page.",
  updated: REVIEWED,
  sections: [
    { h: "Check DLD movement requirements", html:
      "<p>Do not assume domestic pet movement is paperwork-free. Thailand's DLD publishes a current public-service manual covering applications to move animals within the Kingdom, including R.3, R.4 and R.5 processes; see the " +
      source("DLD Animal Quarantine and Inspection manual page", SOURCES.dldMovement) +
      ". Ask the relevant origin and destination DLD offices whether a permit, health evidence or controlled-zone condition applies to this animal and route.</p>" },
    { h: "Get operator acceptance in writing", html:
      "<p>Ask the airline, railway, bus, ferry, taxi or other operator whether it accepts the species, breed, weight and carrier on the specific service. Confirm booking channel, check-in point, temperature or route restrictions, documents, fees, refund terms and who has custody. An old policy summary or call-centre answer for another route is not sufficient.</p>" },
    { h: "Use safe vehicle restraint", html:
      "<p>Use a secure carrier or restraint appropriate to the species and vehicle, and never allow an animal to interfere with the driver. The " + source("FelineVMA motor-vehicle position statement", SOURCES.catTransport) +
      " recommends acclimating cats to carriers and securing a carrier appropriately. Never leave any pet unattended in a parked vehicle.</p>" },
    { h: "Plan health and medication with a vet", html:
      "<p>Ask whether the animal is fit for the journey, what records and prescribed medicines to carry, and how time, heat, stress or motion sickness affect the individual. Do not sedate a pet for travel unless the prescribing veterinarian has assessed the animal and route and provided specific instructions.</p>" },
    { h: "Verify accommodation and destination", html:
      "<p>Get written acceptance showing species, number, size, room type, fees, deposits, restricted areas and unattended-pet rules. Check the destination's animal, park, beach, temple, building and local health rules directly. “Pet-friendly” is not a complete policy.</p>" },
    { h: "Create a disruption plan", html:
      "<p>Carry identification, current contacts, records, food and essential prescription supply, water, cleaning materials and a safe carrier. Record veterinary options along the route and at destination. Plan what happens if transport is cancelled, a permit is delayed or the pet is refused.</p>" },
    { h: "Named verification gap", html:
      "<p>We did not verify one universal domestic permit rule for every species, province and disease-control status, nor real-time acceptance across Thai carriers. Those are route-specific checks with DLD and each operator.</p>" }
  ],
  faqs: [
    ["Is domestic pet travel in Thailand paperwork-free?", "<p>Do not assume so. DLD publishes internal animal-movement permit processes; ask the relevant offices what applies to the animal and route.</p>"],
    ["Can my pet travel on a Thai airline, train, bus or ferry?", "<p>Acceptance is operator- and service-specific. Get written confirmation for the exact species, animal, carrier, date and route.</p>"],
    ["Should I sedate my pet for travel?", "<p>Only if the prescribing veterinarian assesses the individual and route and gives specific instructions. Do not use borrowed or over-the-counter medication.</p>"],
    ["Does pet-friendly accommodation accept every pet?", "<p>No. Confirm species, number, size, room, fees, deposits and unattended-pet rules in writing.</p>"],
    ["What should a disruption plan cover?", "<p>Plan for cancellation, permit delay, operator refusal, heat, illness and an alternative safe place for the pet.</p>"]
  ],
  related: [
    { name: "Airline pet policies", path: "/bring-pet-to-thailand/airline-pet-policies.html", desc: "Verify the exact airline and flight." },
    { name: "Pet taxi", path: "/owning-a-pet-in-pattaya/pet-taxi-pattaya.html", desc: "Confirm vehicle, restraint, scope and price." },
    { name: "Boarding", path: "/boarding/", desc: "Build a stay-behind contingency." },
    { name: "Hot-climate pet care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", desc: "Reduce heat exposure during travel." }
  ]
}));

module.exports = pages;
