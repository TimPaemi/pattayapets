"use strict";
/* High-intent SEO landing pages — species import, English-speaking vets,
   grooming and vet costs. Keyword-led titles under 60 characters. */

const { article } = require("../guidekit.js");
const { BUSINESSES, isPublishedBusiness } = require("../data/businesses.js");
const rb = require("../data/richness-blocks.js");
const {
  claimLink,
  REGULATED_IMPORT_PATTAYA_ARRIVAL,
  REGULATED_IMPORT_PATTAYA_LIFE,
  REGULATED_IMPORT_EXTRA_FAQS
} = require("../data/regulated-claims.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const IMPORT = { name: "Bringing a pet to Thailand", path: "/bring-pet-to-thailand/" };
const OWNING = { name: "Owning a pet in Pattaya", path: "/owning-a-pet-in-pattaya/" };
const VETS = { name: "Vets in Pattaya", path: "/vets/" };

const IMPORT_VERIFY =
  "The scoped Thai import claims and authority links cited on this page were checked " +
  "on 1 August 2026. " +
  "Rules change without notice — confirm with the DLD, your airline and your " +
  "origin-country authority before you book or travel.";

const STD_IMPORT =
  "<p>The Thai steps are the same for dogs and cats: " +
  "an <a href=\"/bring-pet-to-thailand/microchip-requirements.html\">implantation certificate</a> " +
  "whose identifier matches every record; all required " +
  "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">primary vaccinations</a>; " +
  "a wait of at least 21 days before the permit application (documented boosters are exempt); " +
  "<a href=\"/bring-pet-to-thailand/health-certificate.html\">health certificate</a> " +
  "endorsed by your government, " +
  "<a href=\"/bring-pet-to-thailand/import-permit-thailand-dld.html\">DLD import permit</a> " +
  "(form R1/1, with 5&ndash;7 Thai business days allowed by the scoped guide), then " +
  "<a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">airline booking</a> " +
  "and " +
  "<a href=\"/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html\">AQS clearance on arrival</a>. " +
  "See the full " +
  "<a href=\"/bring-pet-to-thailand/\">bringing a pet to Thailand hub</a> and the " +
  "<a href=\"/bring-pet-to-thailand/checklist.html\">printable checklist</a>. The " +
  "reviewed source&rsquo;s detailed scope is dogs, cats and rabbits from the United States; " +
  "other origins must confirm with their AQS and origin authority. " +
  claimLink("TH-IMPORT-SEQUENCE-2026-02", "Thai source") + ".</p>";

function vetListHtml() {
  var vetCats = { vets: 1, "mobile-vets": 1 };
  var rows = BUSINESSES.filter(function (b) {
    return isPublishedBusiness(b) && vetCats[b.category] && /english/i.test(b.languages || "");
  });
  if (!rows.length) {
    return "<p>Browse the <a href=\"/vets/\">vets directory</a> and confirm " +
      "English-language support when you book.</p>";
  }
  return '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
    '<th scope="col">Clinic</th><th scope="col">Type</th><th scope="col">Languages</th></tr></thead><tbody>' +
    rows.map(function (b) {
      return "<tr><th scope=\"row\"><a href=\"/" + b.category + "/" + b.slug +
        ".html\">" + b.name + "</a></th><td>" + b.type + "</td><td>" +
        (b.languages || "Confirm when booking") + "</td></tr>";
    }).join("") + "</tbody></table></div>";
}

const pages = [];

/* ---------------- BRING A DOG TO THAILAND ---------------- */
pages.push(article({
  path: "/bring-pet-to-thailand/bring-a-dog-to-thailand.html",
  title: "Bring a Dog to Thailand: DLD Guide (2026) | PattayaPets",
  desc: "How to bring a dog to Thailand in 2026 — microchip, rabies shots, DLD import permit, airline rules, Bangkok arrival and settling in Pattaya.",
  crumb: "Bring a dog to Thailand",
  breadcrumbs: [GUIDES, IMPORT],
  eyebrow: "Bringing a pet to Thailand",
  h1: "Bring a dog to Thailand",
  updated: "2026-08-01",
  lede: "The route is document-led: identification, all required primary vaccinations, " +
    "the waiting period, the DLD permit, origin export certificate and airline rules must align.",
  verify: IMPORT_VERIFY,
  sections: [
    { h: "What Thailand requires for dogs", html:
      "<p>Dogs need a microchip implantation certificate whose identifier matches every " +
      "record, a valid <strong>rabies vaccination</strong>, and the other primary vaccines: " +
      "<strong>distemper, hepatitis, parvovirus</strong> and either " +
      "<strong>leptospirosis</strong> vaccination or a negative leptospirosis test within " +
      "30 days of departure. Your origin country must issue and endorse an export " +
      "health certificate; Thailand&rsquo;s <strong>Department of Livestock Development " +
      "(DLD)</strong> issues the import permit (form R1/1). After <strong>all required " +
      "primary vaccinations</strong>, wait at least 21 days before applying; documented " +
      "boosters are exempt when continuity is shown. The reviewed Thai source does not " +
      "state a universal ISO-format or chip-before-rabies rule. " +
      claimLink("TH-IMPORT-SEQUENCE-2026-02", "Thai source") + ".</p>" +
      STD_IMPORT },
    { h: "CDC rules if you are coming from the USA", html:
      "<p>From the United States, dogs also fall under <strong>CDC dog-import rules</strong> " +
      "in addition to Thai requirements. Check the current CDC guidance before you book — " +
      "see our <a href=\"/bring-pet-to-thailand/from-usa.html\">import from the USA</a> " +
      "guide for the full US-side checklist.</p>" },
    { h: "Flying a dog into Bangkok", html:
      "<p>Suvarnabhumi (BKK) is a documented Thai AQS arrival option. The official " +
      "sources reviewed on 1 August 2026 do not establish a U-Tapao pet-import AQS; " +
      "obtain written DLD confirmation before considering it. Airlines accept dogs in " +
      "cabin (small), checked baggage or cargo depending on size and route — book pet " +
      "space early. Brachycephalic (flat-faced) breeds face extra restrictions: read " +
      "<a href=\"/bring-pet-to-thailand/snub-nosed-breeds-flying.html\">snub-nosed breeds and flying</a>.</p>" },
    { h: "After arrival — Pattaya and daily life", html:
      "<p>DLD inspects the animal and original documents and determines the action; this " +
      "guide does not promise same-day release. In Pattaya, discuss <strong>heat</strong>, <strong>ticks</strong> and " +
      "<strong>heartworm prevention</strong> — see " +
      "<a href=\"/pet-health-pattaya/\">pet health in Pattaya</a>, " +
      "<a href=\"/owning-a-pet-in-pattaya/hot-climate-pet-care.html\">hot-climate care</a> " +
      "and <a href=\"/dog-friendly-pattaya/\">dog-friendly Pattaya</a> for walks and housing.</p>" },
    { h: "Budget and timeline", html:
      "<p>The Thai sequence includes at least 21 days after all required primary vaccinations " +
      "before the permit application, then 5&ndash;7 Thai business days for a complete " +
      "application under the scoped guide. Airline and origin-export steps add route-specific " +
      "time. A " +
      "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">rabies titer test</a> " +
      "may be required for a future return to the UK or EU. See " +
      "<a href=\"/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html\">what it costs</a> " +
      "for itemised cost categories and directly sourced examples.</p>" },
    REGULATED_IMPORT_PATTAYA_ARRIVAL,
    REGULATED_IMPORT_PATTAYA_LIFE
  ],
  faqs: rb.mergeFaqs([
    ["Can I bring my dog to Thailand in cabin?",
     "<p>Some airlines allow small dogs in cabin on certain routes; many require checked baggage or cargo for larger dogs. Confirm with the airline when you book — see our <a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">airline pet policies</a> guide.</p>"],
    ["Does my dog need quarantine in Thailand?",
     "<p>DLD decides after arrival inspection. Complete documents do not guarantee a particular release time or rule out detention. See <a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">pet quarantine in Thailand</a>.</p>"],
    ["What vaccines does Thailand require for dogs?",
     "<p>Rabies plus distemper, hepatitis, parvovirus and leptospirosis (or the stated negative-test alternative). Complete all required primary vaccinations, wait at least 21 days before applying for the permit, and use the documented-booster exception only with continuity records.</p>"],
    ["How long does it take to bring a dog to Thailand?",
     "<p>The Thai sequence includes the 21-day post-primary wait and 5&ndash;7 Thai business days for a complete permit application under the scoped guide. Origin certification and airline booking add route-specific time, so this page does not state one unsupported total.</p>"],
    ["Where do I find a vet in Pattaya after arrival?",
     "<p>Browse our <a href=\"/vets/\">vets directory</a> and <a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour emergency list</a>. Many clinics serve English-speaking owners.</p>"]
  ], REGULATED_IMPORT_EXTRA_FAQS),
  related: [
    { name: "Bring a cat to Thailand", path: "/bring-pet-to-thailand/bring-a-cat-to-thailand.html", desc: "Cat-specific vaccines and tips." },
    { name: "The full import hub", path: "/bring-pet-to-thailand/", desc: "Every step in order." },
    { name: "Import checklist", path: "/bring-pet-to-thailand/checklist.html", desc: "Printable step-by-step list." },
    { name: "Dogs in Pattaya", path: "/dogs/", desc: "Walks, training and health after you land." }
  ]
}));

/* ---------------- BRING A CAT TO THAILAND ---------------- */
pages.push(article({
  path: "/bring-pet-to-thailand/bring-a-cat-to-thailand.html",
  title: "Bring a Cat to Thailand: DLD Guide (2026) | PattayaPets",
  desc: "How to bring a cat to Thailand in 2026 — microchip, rabies, panleukopenia vaccine, DLD permit, airline travel and settling in Pattaya.",
  crumb: "Bring a cat to Thailand",
  breadcrumbs: [GUIDES, IMPORT],
  eyebrow: "Bringing a pet to Thailand",
  h1: "Bring a cat to Thailand",
  updated: "2026-08-01",
  lede: "Cats follow the DLD import framework with a species-specific vaccination list; " +
    "the airline decides whether cabin, checked-baggage or cargo carriage is available.",
  verify: IMPORT_VERIFY,
  sections: [
    { h: "What Thailand requires for cats", html:
      "<p>Cats need a microchip implantation certificate whose identifier matches every " +
      "record, a valid <strong>rabies vaccination</strong>, and " +
      "<strong>feline panleukopenia</strong> (cat distemper) vaccination. The DLD import " +
      "permit, endorsed export health certificate and AQS inspection on arrival match the " +
      "dog process. After all required primary vaccinations, wait at least 21 days before " +
      "the permit application; documented boosters are exempt when continuity is shown. " +
      "The reviewed Thai source does not state a universal ISO-format or chip-before-rabies rule. " +
      claimLink("TH-IMPORT-SEQUENCE-2026-02", "Thai source") + ".</p>" + STD_IMPORT },
    { h: "Cabin vs cargo for cats", html:
      "<p>Cabin, checked-baggage and cargo acceptance depends on the operating airline, " +
      "route, aircraft, animal and container. Obtain written acceptance before booking. See " +
      "<a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">airline pet policies</a> " +
      "and <a href=\"/bring-pet-to-thailand/snub-nosed-breeds-flying.html\">brachycephalic breeds</a> " +
      "if you have a flat-faced cat.</p>" },
    { h: "Indoor life in Pattaya", html:
      "<p>Assess traffic, other animals, heat, escape points and balcony screening for the " +
      "specific home, and ask a veterinarian about the individual cat. Read " +
      "<a href=\"/cats/indoor-vs-outdoor-cats.html\">indoor cats in Pattaya</a>, " +
      "<a href=\"/cats/cat-vaccinations-thailand.html\">cat vaccinations</a> and " +
      "<a href=\"/pet-health-pattaya/tick-borne-disease.html\">tick-borne disease</a> for " +
      "local health risks.</p>" },
    { h: "Finding a vet for your cat in Pattaya", html:
      "<p>Browse <a href=\"/vets/\">vets in Pattaya</a> and " +
      "<a href=\"/boarding/\">boarding</a> — confirm cat acceptance when you call.</p>" },
    { h: "Return trips and the titer test", html:
      "<p>The reviewed detailed Thai source, scoped to cats travelling from the USA, does " +
      "not list a rabies titer; other origins must confirm with their AQS. UK and EU return " +
      "routes can require a titer and waiting period. Australia instead " +
      "requires an approved-country pathway and qualifying work performed there, so a test " +
      "in Thailand must not be presented as sufficient. If you might leave again, plan the " +
      "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">rabies titer test</a> " +
      "against the actual destination authority before you leave your origin country. " +
      claimLink("AU-NONAPPROVED-PATH-2026-08", "DAFF FAQ") + ".</p>" },
    REGULATED_IMPORT_PATTAYA_ARRIVAL,
    REGULATED_IMPORT_PATTAYA_LIFE
  ],
  faqs: rb.mergeFaqs([
    ["Can I bring my cat to Thailand in cabin?",
     "<p>Only the operating airline can confirm the permitted mode for the specific animal, container, route and aircraft. Obtain written acceptance before booking.</p>"],
    ["What vaccines does Thailand require for cats?",
     "<p>Rabies and feline panleukopenia. Complete all required primary vaccinations, wait at least 21 days before applying for the permit, and use the documented-booster exception only with continuity records.</p>"],
    ["Is Thailand safe for outdoor cats?",
     "<p>No universal safety conclusion is supported here. Assess the specific property and local hazards, and ask a veterinarian about the individual cat; see the <a href=\"/cats/indoor-vs-outdoor-cats.html\">indoor cats guide</a>.</p>"],
    ["Will my cat be quarantined on arrival?",
     "<p>DLD decides after arrival inspection. Complete documents do not guarantee a particular release time or rule out detention. See <a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">quarantine guide</a>.</p>"],
    ["How much does it cost to bring a cat to Thailand?",
     "<p>No universal comparison is verified here. Obtain written quotes for veterinary work, certificate endorsement, airline mode, container, handling and any optional agent; see the <a href=\"/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html\">cost breakdown</a>.</p>"]
  ], REGULATED_IMPORT_EXTRA_FAQS),
  related: [
    { name: "Bring a dog to Thailand", path: "/bring-pet-to-thailand/bring-a-dog-to-thailand.html", desc: "Dog-specific vaccines and CDC notes." },
    { name: "Cats in Pattaya", path: "/cats/", desc: "Housing, health and daily care." },
    { name: "The full import hub", path: "/bring-pet-to-thailand/", desc: "Every step in order." },
    { name: "Import from the UK", path: "/bring-pet-to-thailand/from-uk.html", desc: "Popular origin-country guide." }
  ]
}));

/* ---------------- ENGLISH-SPEAKING VETS ---------------- */
pages.push(article({
  path: "/vets/english-speaking-vets-pattaya.html",
  updated: "2026-08-01",
  title: "English-Speaking Vets Pattaya: Clinics | PattayaPets",
  desc: "Vets and animal hospitals in Pattaya where English is spoken or advertised — directory facts pages with contact details and 24-hour options.",
  crumb: "English-speaking vets",
  breadcrumbs: [GUIDES, VETS],
  eyebrow: "Vets in Pattaya",
  h1: "English-speaking vets in Pattaya",
  lede: "This page surfaces directory records that mention English-language support. " +
    "Availability can change by shift, so confirm it for the appointment time.",
  sections: [
    { html:
      '<div class="callout callout-note"><p><strong>Editorial note:</strong> PattayaPets ' +
      "lists language support recorded in its business data. We have not independently " +
      "tested staff language proficiency and do not rate veterinary medical quality. " +
      "Always consult a qualified veterinarian about your pet&rsquo;s health.</p></div>" },
    { h: "Clinics listing English support", html:
      "<p>These directory listings mention English on their website, materials or our verified " +
      "facts research. Tap through for hours, services and contact channels.</p>" +
      vetListHtml() +
      "<p>For emergencies, see <a href=\"/pet-emergency/24-hour-vets-pattaya.html\">" +
      "24-hour vets in Pattaya</a>. For home visits, see " +
      "<a href=\"/mobile-vets/\">mobile vets</a>.</p>" },
    { h: "What to ask when you call", html:
      "<ul>" +
      "<li>Is an <strong>English-speaking vet or nurse</strong> on duty at your planned time?</li>" +
      "<li>Do you handle <strong>emergency surgery</strong> and <strong>inpatient care</strong>?</li>" +
      "<li>What are <strong>consultation fees</strong> and typical <strong>deposit</strong> rules?</li>" +
      "<li>Can you prepare the private-veterinary records required by the responsible departure-port AQS?</li>" +
      "</ul>" },
    { h: "24-hour and referral hospitals", html:
      "<p>Use the <a href=\"/vets/?filter=24h\">vets directory 24-hour filter</a>, then " +
      "confirm the clinic&rsquo;s current hours, emergency intake and English-language " +
      "availability directly before travelling.</p>" },
    { h: "If English is limited", html:
      "<p>Bring a Thai-speaking friend for complex cases, or use a <strong>pet relocation agent</strong> " +
      "for export paperwork only (not medical advice). See " +
      "<a href=\"/pet-relocation/\">relocation agents</a> and " +
      "<a href=\"/owning-a-pet-in-pattaya/getting-to-the-vet.html\">getting to the vet</a> " +
      "if transport is difficult.</p>" },
    { h: "Related guides", html:
      "<p>New in town: <a href=\"/start-here.html\">start here</a>. Tropical risks: " +
      "<a href=\"/pet-health-pattaya/\">pet health</a>. Moving in: " +
      "<a href=\"/bring-pet-to-thailand/\">bring a pet to Thailand</a>.</p>" }
  ],
  faqs: [
    ["Which vet in Pattaya speaks English?",
     "<p>See the directory-derived table on this page, then confirm that an English-speaking staff member will be available at the appointment time. PattayaPets has not independently tested language proficiency.</p>"],
    ["Is there a 24-hour English-speaking vet in Pattaya?",
     "<p>Check the <a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour vet list</a>, then call the clinic to confirm current emergency intake and English-language availability for that shift.</p>"],
    ["How much does a vet visit cost in Pattaya?",
     "<p>No disclosed local sample supports a price range here. Ask the clinic for its current consultation fee and an itemised estimate; see <a href=\"/owning-a-pet-in-pattaya/vet-costs-pattaya.html\">vet costs in Pattaya</a>.</p>"],
    ["Can a Pattaya vet do export paperwork?",
     "<p>Ask the responsible departure-port AQS which examination and certificate steps it performs and what it requires from a private veterinarian; see the current <a href=\"/take-pet-out-of-thailand/export-process.html\">export process</a>.</p>"],
    ["What should I ask when booking an English-speaking vet?",
     "<p>Confirm that an English-speaking vet or nurse will be on duty at your appointment time. For a complex or urgent case, also ask about inpatient care, emergency surgery, consultation fees and deposit rules.</p>"],
    ["Are mobile vets available in English?",
     "<p>Yes, some mobile clinics list English-language support. Browse <a href=\"/mobile-vets/\">mobile vets</a> and confirm that an English-speaking vet is available when booking.</p>"]
  ],
  related: [
    { name: "All vets in Pattaya", path: "/vets/", desc: "Full directory with area filters." },
    { name: "24-hour emergency vets", path: "/pet-emergency/24-hour-vets-pattaya.html", desc: "Addresses and phone numbers." },
    { name: "Vet costs in Pattaya", path: "/owning-a-pet-in-pattaya/vet-costs-pattaya.html", desc: "Quote questions and budgeting." },
    { name: "Pet emergencies", path: "/pet-emergency/", desc: "Heatstroke, ticks, snakes and first aid." }
  ]
}));

/* ---------------- VET COSTS ---------------- */
pages.push(article({
  path: "/owning-a-pet-in-pattaya/vet-costs-pattaya.html",
  updated: "2026-08-01",
  title: "Vet Costs in Pattaya (2026) | Prices & Budget | PattayaPets",
  desc: "How to obtain and compare current itemised veterinary estimates in Pattaya, " +
    "without relying on an undisclosed price sample.",
  crumb: "Vet costs",
  breadcrumbs: [GUIDES, OWNING],
  eyebrow: "Owning a pet in Pattaya",
  h1: "Vet costs in Pattaya",
  lede: "PattayaPets has no disclosed, current clinic sample that supports a local price " +
    "range or international comparison. Obtain an itemised estimate for the individual case.",
  sections: [
    { html:
      '<div class="callout callout-note"><p>Prices change and vary by clinic. This is ' +
      "orientation only — not a quote. No price figure is published without a disclosed " +
      "source sample.</p></div>" },
    { h: "Consultation estimates", html:
      "<p>Ask the clinic for its current consultation or emergency-intake fee and whether " +
      "diagnostics, medicines, procedures, hospitalisation or follow-up are separate. " +
      "For urgent care, do not delay assessment while comparing prices.</p>" },
    { h: "Vaccinations and prevention", html:
      "<p>Request current product- and animal-specific quotes for <strong>vaccinations</strong>, " +
      "heartworm prevention and tick/flea products. A veterinarian should set the " +
      "individual schedule. See " +
      "<a href=\"/pet-health-pattaya/heartworm.html\">heartworm</a> and " +
      "<a href=\"/dogs/dog-vaccinations-thailand.html\">dog vaccinations</a>.</p>" },
    { h: "Surgery and hospitalisation", html:
      "<p>Procedure, anaesthesia, diagnostics, medicines and hospitalisation vary by the " +
      "animal and case. Ask for an itemised written estimate before non-urgent work and " +
      "ask how the clinic handles changes discovered during treatment.</p>" },
    { h: "How to compare clinics fairly", html:
      "<p>Compare <strong>what is included</strong> (exam, meds, follow-up), not just the " +
      "headline fee. Browse the <a href=\"/vets/\">vets directory</a> and " +
      "<a href=\"/vets/english-speaking-vets-pattaya.html\">English-speaking clinics</a>. " +
      "PattayaPets does not publish medical-quality ratings.</p>" },
    { h: "Insurance and emergency fund", html:
      "<p>If considering insurance, read the policy&rsquo;s eligibility, exclusions, limits, " +
      "waiting periods, provider rules and claim process; see " +
      "<a href=\"/pet-insurance-thailand.html\">pet insurance Thailand</a>. Set any " +
      "emergency reserve from your own finances and written clinic estimates. Know your nearest " +
      "<a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour hospital</a> before you need it.</p>" },
    { h: "Price questions to ask any clinic", html:
      "<p>Before you commit to a clinic for ongoing care, ask for transparency on the " +
      "basics: consultation fee, whether follow-up checks in the same illness window are " +
      "included, typical cost of a <strong>blood panel</strong> or <strong>X-ray</strong>, " +
      "and how deposits work for surgery. Larger hospitals may itemise every consumable; " +
      "smaller clinics sometimes bundle visits. Neither approach is wrong &mdash; you just " +
      "need to know which you are buying.</p><p>For import and export paperwork, confirm whether " +
      "the clinic is on the DLD approved list before you pay for certificate work. " +
      "Relocation agents quote separate service fees for logistics &mdash; that is not the " +
      "same as a vet consultation. See " +
      "<a href=\"/vets/english-speaking-vets-pattaya.html\">English-speaking vets</a> if " +
      "billing clarity in English matters to you.</p>" }
  ],
  faqs: [
    ["How much is a vet visit in Pattaya?",
     "<p>No disclosed current clinic sample supports a range here. Ask the clinic for its consultation fee and an itemised estimate for diagnostics, medicines and procedures.</p>"],
    ["Is vet care cheaper than in the UK or USA?",
     "<p>No disclosed like-for-like sample supports that comparison. Compare written estimates with the same included services, currency date and case complexity.</p>"],
    ["Do Pattaya vets accept credit cards?",
     "<p>Payment methods are business-specific and can change. Confirm accepted methods and any deposit before the visit.</p>"],
    ["What does dog neutering cost in Pattaya?",
     "<p>Request an itemised case-specific estimate that identifies examination, diagnostics, anaesthesia, procedure, medicines and follow-up.</p>"],
    ["Should I get pet insurance in Thailand?",
     "<p>That depends on the policy and your circumstances. Compare eligibility, exclusions, limits, waiting periods, provider rules and claims requirements; see the <a href=\"/pet-insurance-thailand.html\">pet insurance guide</a>.</p>"],
    ["Should I ask for a written vet estimate?",
     "<p>Yes, ask for a written estimate before non-urgent treatment. Check what it includes, such as the examination, medicines and follow-up, rather than comparing only the headline fee.</p>"]
  ],
  related: [
    { name: "Cost of owning a pet", path: "/owning-a-pet-in-pattaya/cost-of-owning-a-pet.html", desc: "Full monthly budget." },
    { name: "English-speaking vets", path: "/vets/english-speaking-vets-pattaya.html", desc: "Clinics listing English." },
    { name: "Vets directory", path: "/vets/", desc: "Every listing with contact details." },
    { name: "Pet health in Pattaya", path: "/pet-health-pattaya/", desc: "Prevention worth paying for." }
  ]
}));

/* ---------------- DOG GROOMING PATTAYA ---------------- */
pages.push(article({
  path: "/groomers/dog-grooming-pattaya.html",
  updated: "2026-08-01",
  title: "Dog Grooming Pattaya: Salons & Mobile | PattayaPets",
  desc: "Dog grooming in Pattaya — baths, breed clips, de-shedding and nail trims. Browse the groomers directory with area filters and heat-aware coat care tips.",
  crumb: "Dog grooming",
  breadcrumbs: [GUIDES, { name: "Groomers", path: "/groomers/" }],
  eyebrow: "Groomers in Pattaya",
  h1: "Dog grooming in Pattaya",
  lede: "Use the directory to find grooming services, then confirm the current service " +
    "area, animal acceptance, price and handling process directly.",
  sections: [
    { h: "Browse groomers by area", html:
      "<p>The <a href=\"/groomers/\">groomers directory</a> lists recorded services, hours " +
      "and contact channels; confirm each with the provider. Use the <strong>area chips</strong> " +
      "on the hub to narrow by Naklua, Jomtien, Central Pattaya and other neighbourhoods.</p>" },
    { h: "Mobile and home-visit grooming", html:
      "<p>Use the directory to identify records that mention mobile or home service, then " +
      "confirm the current coverage area, animal size, equipment and price before booking.</p>" },
    { h: "Heat-aware coat care", html:
      "<p>No licensed veterinarian has clinically reviewed this page, so it does not give " +
      "a universal clipping, shaving, skin or ear-care instruction. Ask a veterinarian " +
      "what is appropriate for the individual dog&rsquo;s coat and health. Read " +
      "<a href=\"/owning-a-pet-in-pattaya/hot-climate-pet-care.html\">hot-climate pet care</a> " +
      "and <a href=\"/pet-health-pattaya/skin-and-ear-problems.html\">skin and ear problems</a>.</p>" },
    { h: "What to ask before the first appointment", html:
      "<ul>" +
      "<li>Do you groom my <strong>breed/size</strong> and can I stay or drop off?</li>" +
      "<li>How do you handle <strong>nervous dogs</strong> and how long will it take?</li>" +
      "<li>Are <strong>nail trim</strong> and <strong>ear clean</strong> included in the price?</li>" +
      "<li>What <strong>shampoo</strong> do you use for sensitive skin?</li>" +
      "</ul>" },
    { h: "Grooming and health overlap", html:
      "<p>Groomers are not veterinarians and should not diagnose or treat a medical problem. " +
      "If a skin, ear or parasite concern is raised, contact a <a href=\"/vets/\">vet in Pattaya</a>. For tick orientation, " +
      "see <a href=\"/pet-emergency/ticks-and-fleas.html\">ticks and fleas</a>.</p>" }
  ],
  faqs: [
    ["How much does dog grooming cost in Pattaya?",
     "<p>No disclosed local sample supports a price range here. Ask for a written quote for the dog&rsquo;s size, coat condition and requested services.</p>"],
    ["Are there mobile dog groomers in Pattaya?",
     "<p>Browse the <a href=\"/groomers/\">directory</a> for records that mention mobile service, then confirm current coverage and availability directly.</p>"],
    ["How often should I groom my dog in Thailand's climate?",
     "<p>This unreviewed page gives no universal interval. Ask a veterinarian or suitably qualified groomer about the individual coat, skin, health and lifestyle.</p>"],
    ["Can groomers handle cats too?",
     "<p>Species acceptance is provider-specific. Confirm cat handling, qualifications and current availability directly before booking.</p>"],
    ["Should I shave my dog for the Thai heat?",
     "<p>This page has no clinical review and gives no universal shaving rule. Ask a veterinarian what is appropriate for the individual dog&rsquo;s coat, skin and health.</p>"],
    ["What should I ask before my dog's first grooming appointment?",
     "<p>Confirm that the salon handles your dog's breed and size, how it manages nervous dogs, whether nail trimming and ear cleaning are included, and which shampoo it uses for sensitive skin.</p>"]
  ],
  related: [
    { name: "All groomers", path: "/groomers/", desc: "Full directory." },
    { name: "Hot-climate care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", desc: "Walking times and coat care." },
    { name: "Skin & ear problems", path: "/pet-health-pattaya/skin-and-ear-problems.html", desc: "When grooming reveals an issue." },
    { name: "Dog-friendly Pattaya", path: "/dog-friendly-pattaya/", desc: "Walks and outings after a groom." }
  ]
}));

module.exports = pages;
