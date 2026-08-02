"use strict";
/* Source-led pet-health orientation. No page in this module has been clinically
   reviewed; consequential decisions are deliberately routed to a veterinarian. */

const { article, hub } = require("../guidekit.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const CLUSTER = { name: "Pet health in Pattaya", path: "/pet-health-pattaya/" };
const SUB = [GUIDES, CLUSTER];
const REVIEWED = "2026-08-01";

const HEALTH_VERIFY =
  "Clinical review status: no licensed veterinarian has reviewed this publication. " +
  "It is source-led general orientation, not a diagnosis, treatment plan or dosing " +
  "instruction. A qualified veterinarian must assess the individual animal.";

const SOURCES = {
  wsavaVaccines: "https://wsava.org/Global-Guidelines/Vaccination-Guidelines/",
  heartworm: "https://www.heartwormsociety.org/guidelines",
  ticks: "https://capcvet.org/guidelines/ticks/",
  ehrlichia: "https://capcvet.org/guidelines/ehrlichia-spp-and-anaplasma-spp/",
  parvo: "https://ebusiness.avma.org/files/productdownloads/MCM-ClientBrochures-20-CanineParvovirus.pdf",
  skin: "https://www.aaha.org/trends-magazine/december-2023/2023-aaha-management-of-allergic-skin-diseases-in-dogs-and-cats-guidelines/",
  reproduction: "https://wsava.org/global-guidelines/reproduction-guidelines/"
};

const RELATED = [
  { name: "Heartworm", path: "/pet-health-pattaya/heartworm.html", desc: "Questions to take to a vet about mosquito-borne heartworm." },
  { name: "Tick-borne disease", path: "/pet-health-pattaya/tick-borne-disease.html", desc: "Exposure, non-specific signs and vet-led testing." },
  { name: "Skin & ear problems", path: "/pet-health-pattaya/skin-and-ear-problems.html", desc: "Why an examination matters before treatment." },
  { name: "Hot-climate pet care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", desc: "Prevention and heat-risk planning." },
  { name: "Find a vet", path: "/vets/", desc: "Compare documented Pattaya veterinary services." },
  { name: "Pet emergencies", path: "/pet-emergency/", desc: "Urgent-care orientation and clinic contacts." }
];

function source(name, href) {
  return '<a href="' + href + '">' + name + "</a>";
}

function health(o) {
  return article({
    path: "/pet-health-pattaya/" + o.slug + ".html",
    title: o.title,
    desc: o.desc,
    crumb: o.crumb,
    breadcrumbs: SUB,
    eyebrow: "Pet health in Pattaya",
    h1: o.h1,
    lede: o.lede,
    verify: HEALTH_VERIFY,
    updated: REVIEWED,
    sections: o.sections,
    faqs: o.faqs,
    related: o.related || RELATED
  });
}

const pages = [];

pages.push(hub({
  path: "/pet-health-pattaya/",
  title: "Pet Health Pattaya: Prevention Guide | PattayaPets",
  desc: "A source-led starting point for pet health in Pattaya: vaccination, parasites, skin and ear problems, dental care, weight and when to call a veterinarian.",
  updated: REVIEWED,
  crumb: "Pet health in Pattaya",
  breadcrumbs: [GUIDES],
  eyebrow: "Pet health in Pattaya",
  h1: "Pet health in Pattaya: a safer starting point",
  lede: "Climate and lifestyle shape risk, but a web page cannot diagnose an animal or choose a medicine. Use these guides to prepare better questions for a qualified veterinarian.",
  verify: HEALTH_VERIFY,
  intro: "<p>Every clinical page names its sources, avoids dosing and distinguishes prevention from diagnosis. We have not published local prevalence figures because we did not find a current, representative Pattaya dataset that supports them.</p>",
  groups: [
    {
      title: "Infectious disease and parasites",
      cards: [
        { name: "Heartworm", desc: "How transmission works and why prevention and testing need an individual veterinary plan.", path: "/pet-health-pattaya/heartworm.html" },
        { name: "Tick-borne disease", desc: "Why signs overlap with many illnesses and laboratory interpretation matters.", path: "/pet-health-pattaya/tick-borne-disease.html" },
        { name: "Parvovirus", desc: "A contagious canine disease where prompt veterinary care and isolation matter.", path: "/pet-health-pattaya/parvovirus.html" }
      ]
    },
    {
      title: "Everyday preventive care",
      cards: [
        { name: "Skin and ear problems", desc: "Possible causes, useful observations and why guessing at treatment can backfire.", path: "/pet-health-pattaya/skin-and-ear-problems.html" },
        { name: "Spaying and neutering", desc: "A decision framework that reflects current, individualised guidance.", path: "/pet-health-pattaya/spaying-and-neutering.html" },
        { name: "Dental care", desc: "Home prevention and what a professional dental assessment involves.", path: "/pet-health-pattaya/dental-care.html" },
        { name: "Healthy weight", desc: "Body-condition assessment and a vet-led feeding and activity plan.", path: "/pet-health-pattaya/healthy-weight.html" }
      ]
    },
    {
      title: "Plan before a problem",
      cards: [
        { name: "Find a vet", desc: "Check current services and call before relying on availability.", path: "/vets/" },
        { name: "Pet emergencies", desc: "Recognise uncertainty and contact an emergency veterinarian promptly.", path: "/pet-emergency/" },
        { name: "Dog vaccination", desc: "Core and risk-based vaccination concepts from current global guidance.", path: "/dogs/dog-vaccinations-thailand.html" },
        { name: "Cat vaccination", desc: "Core, lifestyle-based and legal questions to take to a vet.", path: "/cats/cat-vaccinations-thailand.html" }
      ]
    }
  ],
  related: RELATED
}));

pages.push(health({
  slug: "heartworm",
  crumb: "Heartworm",
  title: "Heartworm Pattaya: Prevention Questions | PattayaPets",
  desc: "Heartworm orientation for Pattaya pet owners: mosquito transmission, prevention, testing and why a veterinarian must choose the medication plan.",
  h1: "Heartworm: prevention and testing questions for your vet",
  lede: "Heartworm is transmitted by mosquitoes. The safe product, start date and testing plan depend on the animal, its history and the products licensed locally.",
  sections: [
    { h: "What is established", html:
      "<p><em>Dirofilaria immitis</em> is a mosquito-borne parasite that can infect dogs and cats. Disease, diagnosis and prevention differ between species. The " +
      source("American Heartworm Society's living canine and feline guidelines", SOURCES.heartworm) +
      " separate those pathways and are written for veterinary use.</p><p>We did not find a current representative Pattaya prevalence study, so this page does not claim a local infection rate or describe every pet as equally exposed.</p>" },
    { h: "Build the plan with a veterinarian", html:
      "<p>Bring the vet your pet's age, weight, species, health history, travel history and every parasite product already used. Ask which locally licensed preventive is appropriate, whether testing is needed before starting or restarting, and how follow-up will be documented. Do not combine, split or substitute products from an online schedule.</p>" },
    { h: "Missed or uncertain doses", html:
      "<p>Do not guess, double a dose or borrow another animal's medicine. Contact the prescribing clinic with the product name, strength, last confirmed administration and any travel since then. The next step may depend on both timing and testing.</p>" },
    { h: "Symptoms cannot confirm heartworm", html:
      "<p>Coughing, reduced stamina, breathing difficulty, vomiting or collapse can have many causes. They cannot establish heartworm from a checklist. Breathing difficulty or collapse warrants urgent veterinary assessment; otherwise arrange a prompt examination and let the clinician decide which tests fit.</p>" },
    { h: "Source and review boundary", html:
      "<p><strong>Primary clinical reference:</strong> " + source("American Heartworm Society guidelines", SOURCES.heartworm) +
      ". PattayaPets checked this page on 1 August 2026. No licensed veterinarian has clinically reviewed our interpretation.</p>" }
  ],
  faqs: [
    ["Can cats get heartworm?", "<p>Yes. Dogs and cats can be infected, but the disease and diagnostic approach differ. Ask a veterinarian for a species-specific prevention plan.</p>"],
    ["Should every pet use the same heartworm product?", "<p>No. Species, weight, health history, prior prevention and locally licensed products matter. A veterinarian should select the product and instructions.</p>"],
    ["What if I missed a heartworm dose?", "<p>Contact the prescribing clinic with the exact product and last confirmed dose. Do not double up or invent a catch-up schedule.</p>"],
    ["Does a cough prove heartworm?", "<p>No. Coughing has many possible causes. A veterinarian must examine the animal and decide what testing is appropriate.</p>"],
    ["How common is heartworm in Pattaya?", "<p>We did not find a current representative Pattaya prevalence dataset, so we do not publish a local percentage. Ask your vet to assess your pet's actual exposure.</p>"]
  ]
}));

pages.push(health({
  slug: "tick-borne-disease",
  crumb: "Tick-borne disease",
  title: "Tick-Borne Disease in Dogs | Pattaya Vet Guide | PattayaPets",
  desc: "A cautious guide to tick-borne disease in dogs: exposure, non-specific signs, veterinary testing and prevention without self-diagnosis or treatment advice.",
  h1: "Tick-borne disease: exposure is not a diagnosis",
  lede: "Ticks can carry several pathogens, and the illnesses can look like many other conditions. Prevention and prompt veterinary assessment matter more than naming a disease from symptoms.",
  sections: [
    { h: "What ticks can transmit", html:
      "<p>Veterinary authorities document transmission of organisms including <em>Ehrlichia</em> and <em>Anaplasma</em> through tick feeding. See the " +
      source("CAPC Ehrlichia and Anaplasma guideline", SOURCES.ehrlichia) +
      ". We found no current representative dataset that quantifies these infections specifically across Pattaya pets.</p>" },
    { h: "Why symptom lists are limited", html:
      "<p>Fever, lethargy, reduced appetite, weight change, bruising, bleeding or reluctance to move are possible findings, but none is specific to a tick-borne infection. Do not start antibiotics or leftover medicine from a symptom match. Arrange a veterinary examination; the clinician may combine history, physical findings and laboratory tests.</p>" },
    { h: "Prevention is product-specific", html:
      "<p>The " + source("CAPC tick guideline", SOURCES.ticks) +
      " recommends ongoing tick control and prompt removal of attached ticks. In Thailand, ask a veterinarian which product is licensed and safe for your pet's species, weight, age and health. Never apply a dog product to a cat unless a veterinarian explicitly confirms it is labelled for cats.</p>" },
    { h: "What to record", html:
      "<p>If you find a tick, note the date, where the pet may have been exposed, products used and any new signs. A clear timeline helps the vet. If the animal is weak, collapsing, having trouble breathing or bleeding, contact an emergency veterinarian now.</p>" },
    { h: "Sources and review boundary", html:
      "<p><strong>Clinical references:</strong> " + source("CAPC tick control", SOURCES.ticks) + " and " +
      source("CAPC Ehrlichia/Anaplasma", SOURCES.ehrlichia) +
      ". Checked 1 August 2026; no licensed veterinarian has clinically reviewed this page.</p>" }
  ],
  faqs: [
    ["Does finding a tick mean my dog is infected?", "<p>No. Exposure does not prove infection. Record what you found and ask a veterinarian whether examination or testing is appropriate.</p>"],
    ["Can I diagnose tick fever from pale gums or tiredness?", "<p>No. Those signs have many possible causes and some are urgent. A veterinarian must assess the dog and interpret any tests.</p>"],
    ["Should I use tick prevention all year?", "<p>Veterinary parasite guidance supports ongoing control, but the safe product and interval are product- and patient-specific. Ask your vet for a locally appropriate plan.</p>"],
    ["Can I give leftover antibiotics?", "<p>No. Do not treat a suspected tick-borne infection with leftover or unprescribed medicine. Diagnosis, drug choice and follow-up belong with a veterinarian.</p>"],
    ["How common is tick-borne disease in Pattaya?", "<p>We found no current representative Pattaya-wide prevalence dataset, so we do not state a local rate.</p>"]
  ]
}));

pages.push(health({
  slug: "parvovirus",
  crumb: "Parvovirus",
  title: "Canine Parvovirus Pattaya: Signs & Prevention | PattayaPets",
  desc: "Source-led canine parvovirus guidance: contagious spread, warning signs, isolation, veterinary care and vaccination without home-treatment instructions.",
  h1: "Canine parvovirus: isolate and call a vet",
  lede: "Parvovirus can cause severe disease, especially in inadequately vaccinated puppies. Online advice cannot determine whether vomiting or diarrhoea is parvo.",
  sections: [
    { h: "Why veterinary care is time-sensitive", html:
      "<p>Canine parvovirus spreads through infected faeces and contaminated environments or objects. It can cause lethargy, loss of appetite, vomiting and severe diarrhoea. The " +
      source("American Veterinary Medical Association parvovirus guide", SOURCES.parvo) +
      " advises vaccination and hygiene as core prevention measures.</p>" },
    { h: "If parvo is possible", html:
      "<p>Separate the dog from other dogs and phone a veterinary clinic promptly before arriving, so the clinic can protect other patients. Do not try to confirm parvo at home and do not give human anti-diarrhoeal, pain or nausea medicine. A clinician must assess hydration, rule out other causes and decide on testing and treatment.</p>" },
    { h: "Vaccination is the main prevention", html:
      "<p>WSAVA classifies canine parvovirus vaccination as core. Puppy protection requires a veterinary series because maternal antibodies can interfere with early doses; the exact product and schedule must follow current guidance, local regulation and the veterinarian's assessment. See the " +
      source("2024 WSAVA vaccination guidance", SOURCES.wsavaVaccines) + ".</p>" },
    { h: "Reduce environmental spread", html:
      "<p>Keep an ill or exposed dog away from shared dog areas. Ask the treating clinic for a written cleaning protocol appropriate to the confirmed or suspected diagnosis; ordinary cleaning may not be sufficient, and product concentration and contact time matter.</p>" },
    { h: "Sources and review boundary", html:
      "<p><strong>References:</strong> " + source("AVMA canine parvovirus", SOURCES.parvo) + " and " +
      source("WSAVA vaccination guidelines", SOURCES.wsavaVaccines) +
      ". Checked 1 August 2026; no licensed veterinarian has clinically reviewed this page.</p>" }
  ],
  faqs: [
    ["Does vomiting or diarrhoea mean parvo?", "<p>No. Many conditions cause those signs. In a puppy or inadequately vaccinated dog, isolate from other dogs and phone a veterinarian promptly.</p>"],
    ["Can parvo be treated at home?", "<p>Do not rely on home treatment. A veterinarian must assess the dog, confirm or exclude parvo and provide the care the individual patient needs.</p>"],
    ["Is parvovirus vaccination core?", "<p>Yes. WSAVA classifies it as a core canine vaccine. A veterinarian sets the series and booster plan.</p>"],
    ["Should I tell the clinic before arriving?", "<p>Yes. Phone first when contagious disease is possible, so staff can direct arrival and reduce exposure to other dogs.</p>"],
    ["How do I disinfect after parvo?", "<p>Ask the treating clinic for a written protocol for the surfaces and products in your home. Effective concentration, contact time and material compatibility matter.</p>"]
  ]
}));

pages.push(health({
  slug: "skin-and-ear-problems",
  crumb: "Skin and ear problems",
  title: "Pet Skin & Ear Problems in Pattaya | Vet Guide | PattayaPets",
  desc: "A source-led guide to itching, skin lesions and ear problems in dogs and cats: possible causes, useful observations and why diagnosis should precede treatment.",
  h1: "Skin and ear problems: find the cause before treating",
  lede: "Itching, odour, discharge and inflamed skin are signs, not diagnoses. Parasites, allergy, infection and other conditions can overlap.",
  sections: [
    { h: "Why guessing can prolong the problem", html:
      "<p>The " + source("2023 AAHA allergic skin disease guidelines", SOURCES.skin) +
      " describe a structured veterinary process using history, examination and appropriate diagnostic work before long-term management. A humid climate may affect an individual pet, but it does not prove yeast, bacteria or allergy from appearance alone.</p>" },
    { h: "Record useful observations", html:
      "<p>Note when signs began, body areas involved, season or environment changes, parasite products, diet changes, bathing or grooming products, and any previous treatment. Photos over time can help. Do not clean the ear immediately before an appointment unless the clinic asks; material in the canal may help diagnosis.</p>" },
    { h: "Avoid unsupervised remedies", html:
      "<p>Do not place human ear drops, essential oils, alcohol, peroxide or leftover prescription medicine into an ear or on damaged skin. A painful ear, ruptured eardrum, foreign body or incompatible medicine can make self-treatment harmful. Ask a veterinarian before changing parasite prevention or diet for a suspected allergy.</p>" },
    { h: "When to seek care", html:
      "<p>Arrange a veterinary visit for persistent itching, hair loss, sores, odour, discharge, repeated head shaking or pain. Sudden facial swelling, breathing difficulty, collapse, uncontrolled bleeding or rapidly worsening illness needs emergency veterinary attention.</p>" },
    { h: "Source and review boundary", html:
      "<p><strong>Clinical reference:</strong> " + source("AAHA allergic skin disease guidelines", SOURCES.skin) +
      ". Checked 1 August 2026; no licensed veterinarian has clinically reviewed this page.</p>" }
  ],
  faqs: [
    ["Does Pattaya humidity prove a yeast infection?", "<p>No. Climate can be relevant history, but appearance and odour do not identify the cause. A veterinarian may need to examine and sample the affected area.</p>"],
    ["Can I use human ear drops on my pet?", "<p>No, not without veterinary direction. The eardrum and cause must be assessed, and some products can be painful or harmful.</p>"],
    ["Should I change food for itchy skin?", "<p>Not on a guess. Food trials need veterinary planning and strict execution; casual switching can confuse the diagnosis.</p>"],
    ["What should I record before the appointment?", "<p>Record onset, affected areas, diet and product changes, parasite prevention, prior medicines and photographs over time.</p>"],
    ["When is itching an emergency?", "<p>Sudden facial swelling, breathing difficulty, collapse or rapidly worsening illness needs emergency veterinary attention.</p>"]
  ]
}));

pages.push(health({
  slug: "spaying-and-neutering",
  crumb: "Spaying and neutering",
  title: "Spay & Neuter in Pattaya | Decision Guide | PattayaPets",
  desc: "A balanced framework for discussing spaying or neutering a dog or cat with a veterinarian, including timing, alternatives, preparation and aftercare.",
  h1: "Spaying and neutering: an individual decision with your vet",
  lede: "Reproductive control can prevent unwanted litters, but procedure and timing are not one-size-fits-all, particularly for dogs.",
  sections: [
    { h: "Current guidance is individualised", html:
      "<p>The " + source("2024 WSAVA reproduction-control guidelines", SOURCES.reproduction) +
      " review surgical and non-surgical options, benefits, drawbacks and welfare considerations. Species, sex, age, breed, projected adult size, health, living situation and reliable prevention of mating all affect the discussion.</p>" },
    { h: "Questions for the consultation", html:
      "<ul><li>What are the benefits and trade-offs for this individual animal?</li><li>Why is this procedure and timing being recommended?</li><li>What pre-anaesthetic assessment is appropriate?</li><li>What pain control, monitoring and written aftercare are included?</li><li>Who should be contacted after hours if recovery is not as expected?</li></ul>" },
    { h: "Before surgery", html:
      "<p>Tell the clinic about every medicine, supplement, previous anaesthetic problem, current illness and possible pregnancy. Follow the clinic's patient-specific food, water and medication instructions; do not copy fasting advice from another animal or a web page.</p>" },
    { h: "After surgery", html:
      "<p>Use the discharge instructions from the operating veterinarian. Give only prescribed medicines, prevent interference with the wound as directed and attend planned rechecks. Contact the clinic promptly about a wound opening, persistent bleeding, breathing trouble, collapse, severe pain or any concern named in its discharge plan.</p>" },
    { h: "Cost and service verification", html:
      "<p>We do not publish a Pattaya price range because we did not verify a comparable current package across clinics. Request a written estimate showing examination, blood work if advised, anaesthesia, monitoring, pain relief, procedure, recovery care and rechecks.</p>" },
    { h: "Source and review boundary", html:
      "<p><strong>Clinical reference:</strong> " + source("WSAVA reproduction-control guidelines", SOURCES.reproduction) +
      ". Checked 1 August 2026; no licensed veterinarian has clinically reviewed this page.</p>" }
  ],
  faqs: [
    ["What is the best age to spay or neuter?", "<p>There is no universal age for every animal, especially dogs. Ask a veterinarian to balance species, sex, breed, size, health, lifestyle and pregnancy risk.</p>"],
    ["Is surgery the only reproduction-control option?", "<p>Not always. Current WSAVA guidance discusses surgical and non-surgical approaches, but availability and suitability require a veterinarian.</p>"],
    ["Should I follow online fasting instructions?", "<p>No. Follow the operating clinic's instructions for this patient, including food, water and regular medicines.</p>"],
    ["How much does spaying or neutering cost in Pattaya?", "<p>We did not verify a comparable current market range. Ask for an itemised written estimate and what aftercare is included.</p>"],
    ["Who decides when my pet returns to normal activity?", "<p>The operating veterinarian. Follow the written discharge and recheck plan rather than a generic timetable.</p>"]
  ]
}));

module.exports = pages;
