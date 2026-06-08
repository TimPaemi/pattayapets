"use strict";
/* High-intent SEO landing pages — species import, English-speaking vets,
   grooming and vet costs. Keyword-led titles under 60 characters. */

const { article } = require("../guidekit.js");
const { BUSINESSES, CATEGORIES } = require("../data/businesses.js");
const rb = require("../data/richness-blocks.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const IMPORT = { name: "Bringing a pet to Thailand", path: "/bring-pet-to-thailand/" };
const OWNING = { name: "Owning a pet in Pattaya", path: "/owning-a-pet-in-pattaya/" };
const VETS = { name: "Vets in Pattaya", path: "/vets/" };

const IMPORT_VERIFY =
  "This guide was last reviewed on 4 June 2026 against the Thai embassy pet-import " +
  "guidance (revised January 2025) and DLD Animal Quarantine Station contacts. " +
  "Rules change without notice — confirm with the DLD, your airline and your " +
  "origin-country authority before you book or travel.";

const STD_IMPORT =
  "<p>The Thai steps are the same for dogs and cats: " +
  "<a href=\"/bring-pet-to-thailand/microchip-requirements.html\">ISO microchip</a> " +
  "(before rabies vaccination), " +
  "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">rabies and core vaccinations</a> " +
  "with the 21-day wait, " +
  "<a href=\"/bring-pet-to-thailand/health-certificate.html\">health certificate</a> " +
  "endorsed by your government, " +
  "<a href=\"/bring-pet-to-thailand/import-permit-thailand-dld.html\">DLD import permit</a> " +
  "(form R1/1), then " +
  "<a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">airline booking</a> " +
  "and " +
  "<a href=\"/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html\">AQS clearance on arrival</a>. " +
  "See the full " +
  "<a href=\"/bring-pet-to-thailand/\">bringing a pet to Thailand hub</a> and the " +
  "<a href=\"/bring-pet-to-thailand/checklist.html\">printable checklist</a>.</p>";

function vetListHtml() {
  var vetCats = { vets: 1, "mobile-vets": 1 };
  var rows = BUSINESSES.filter(function (b) {
    return vetCats[b.category] && /english/i.test(b.languages || "");
  });
  if (!rows.length) {
    return "<p>Browse the <a href=\"/vets/\">vets directory</a> and confirm " +
      "English-language support when you book.</p>";
  }
  return '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
    '<th scope="col">Clinic</th><th scope="col">Type</th><th scope="col">Languages</th></tr></thead><tbody>' +
    rows.map(function (b) {
      var cat = CATEGORIES[b.category];
      return "<tr><th scope=\"row\"><a href=\"/" + b.category + "/" + b.slug +
        ".html\">" + b.name + "</a></th><td>" + b.type + "</td><td>" +
        (b.languages || "Confirm when booking") + "</td></tr>";
    }).join("") + "</tbody></table></div>";
}

const pages = [];

/* ---------------- BRING A DOG TO THAILAND ---------------- */
pages.push(article({
  path: "/bring-pet-to-thailand/bring-a-dog-to-thailand.html",
  title: "Bring a Dog to Thailand (2026) | DLD Import Guide | PattayaPets",
  desc: "How to bring a dog to Thailand in 2026 — microchip, rabies shots, DLD import permit, airline rules, Bangkok arrival and settling in Pattaya.",
  crumb: "Bring a dog to Thailand",
  breadcrumbs: [GUIDES, IMPORT],
  eyebrow: "Bringing a pet to Thailand",
  h1: "Bring a dog to Thailand",
  lede: "Thousands of dogs move to Thailand with their owners every year. The process is " +
    "paperwork-heavy but predictable — if you start early and follow the DLD steps in order.",
  verify: IMPORT_VERIFY,
  sections: [
    { h: "What Thailand requires for dogs", html:
      "<p>Dogs need an <strong>ISO 11784/11785 microchip</strong> implanted before the " +
      "rabies vaccination, a valid <strong>rabies shot</strong> (with at least 21 days " +
      "after a primary vaccination before travel), and core vaccines: " +
      "<strong>distemper, hepatitis, parvovirus</strong> and either " +
      "<strong>leptospirosis</strong> vaccination or a negative leptospirosis test within " +
      "30 days of departure. Your origin country must issue and endorse an export " +
      "health certificate; Thailand&rsquo;s <strong>Department of Livestock Development " +
      "(DLD)</strong> issues the import permit (form R1/1).</p>" +
      STD_IMPORT },
    { h: "CDC rules if you are coming from the USA", html:
      "<p>From the United States, dogs also fall under <strong>CDC dog-import rules</strong> " +
      "in addition to Thai requirements. Check the current CDC guidance before you book — " +
      "see our <a href=\"/bring-pet-to-thailand/from-usa.html\">import from the USA</a> " +
      "guide for the full US-side checklist.</p>" },
    { h: "Flying a dog to Bangkok or U-Tapao", html:
      "<p>Most owners land at <strong>Suvarnabhumi (BKK)</strong>; " +
      "<strong>U-Tapao (UTP)</strong> is closer to Pattaya. Airlines accept dogs in " +
      "cabin (small), checked baggage or cargo depending on size and route — book pet " +
      "space early. Brachycephalic (flat-faced) breeds face extra restrictions: read " +
      "<a href=\"/bring-pet-to-thailand/snub-nosed-breeds-flying.html\">snub-nosed breeds and flying</a>.</p>" },
    { h: "After arrival — Pattaya and daily life", html:
      "<p>With complete paperwork, dogs normally clear the Animal Quarantine Station the " +
      "same day. In Pattaya, plan for <strong>heat</strong>, <strong>ticks</strong> and " +
      "<strong>heartworm prevention</strong> — see " +
      "<a href=\"/pet-health-pattaya/\">pet health in Pattaya</a>, " +
      "<a href=\"/owning-a-pet-in-pattaya/hot-climate-pet-care.html\">hot-climate care</a> " +
      "and <a href=\"/dog-friendly-pattaya/\">dog-friendly Pattaya</a> for walks and housing.</p>" },
    { h: "Budget and timeline", html:
      "<p>Allow <strong>one to two months</strong> minimum; add several months if you need a " +
      "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">rabies titer test</a> " +
      "for a future return to the UK or EU. See " +
      "<a href=\"/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html\">what it costs</a> " +
      "for realistic ranges.</p>" },
    rb.IMPORT_PATTAYA_ARRIVAL,
    rb.IMPORT_PATTAYA_LIFE
  ],
  faqs: rb.mergeFaqs([
    ["Can I bring my dog to Thailand in cabin?",
     "<p>Some airlines allow small dogs in cabin on certain routes; many require checked baggage or cargo for larger dogs. Confirm with the airline when you book — see our <a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">airline pet policies</a> guide.</p>"],
    ["Does my dog need quarantine in Thailand?",
     "<p>Not usually with complete paperwork. The AQS inspection is typically same-day clearance — see <a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">pet quarantine in Thailand</a>.</p>"],
    ["What vaccines does Thailand require for dogs?",
     "<p>Rabies plus distemper, hepatitis, parvovirus and leptospirosis (or a negative leptospirosis test). At least 21 days after primary vaccinations before travel.</p>"],
    ["How long does it take to bring a dog to Thailand?",
     "<p>Plan at least one to two months for microchip, vaccinations, health certificate, DLD permit and flight booking. Add months if you need a rabies titer test for onward travel.</p>"],
    ["Where do I find a vet in Pattaya after arrival?",
     "<p>Browse our <a href=\"/vets/\">vets directory</a> and <a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour emergency list</a>. Many clinics serve English-speaking owners.</p>"]
  ], rb.IMPORT_EXTRA_FAQS),
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
  title: "Bring a Cat to Thailand (2026) | DLD Import Guide | PattayaPets",
  desc: "How to bring a cat to Thailand in 2026 — microchip, rabies, panleukopenia vaccine, DLD permit, airline travel and settling in Pattaya.",
  crumb: "Bring a cat to Thailand",
  breadcrumbs: [GUIDES, IMPORT],
  eyebrow: "Bringing a pet to Thailand",
  h1: "Bring a cat to Thailand",
  lede: "Cats follow the same DLD import framework as dogs, with a slightly different " +
    "vaccination list and often a calmer flight in cabin — if your airline allows it.",
  verify: IMPORT_VERIFY,
  sections: [
    { h: "What Thailand requires for cats", html:
      "<p>Cats need an <strong>ISO microchip</strong> before rabies vaccination, a valid " +
      "<strong>rabies shot</strong> (21-day wait after a primary vaccination), and " +
      "<strong>feline panleukopenia</strong> (cat distemper) vaccination. The DLD import " +
      "permit, endorsed export health certificate and AQS inspection on arrival match the " +
      "dog process.</p>" + STD_IMPORT },
    { h: "Cabin vs cargo for cats", html:
      "<p>Many owners fly cats in <strong>cabin</strong> in an airline-approved soft carrier " +
      "under the seat — but policies vary by airline and aircraft. Book early; some routes " +
      "only accept cats as checked baggage or cargo. See " +
      "<a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">airline pet policies</a> " +
      "and <a href=\"/bring-pet-to-thailand/snub-nosed-breeds-flying.html\">brachycephalic breeds</a> " +
      "if you have a flat-faced cat.</p>" },
    { h: "Indoor life in Pattaya", html:
      "<p>Most expat cat owners in Pattaya keep cats <strong>indoors</strong> or on screened " +
      "balconies — traffic, dogs and heat make free roaming risky. Read " +
      "<a href=\"/cats/indoor-vs-outdoor-cats.html\">indoor cats in Pattaya</a>, " +
      "<a href=\"/cats/cat-vaccinations-thailand.html\">cat vaccinations</a> and " +
      "<a href=\"/pet-health-pattaya/tick-borne-disease.html\">tick-borne disease</a> for " +
      "local health risks.</p>" },
    { h: "Finding a vet for your cat in Pattaya", html:
      "<p>General vets and animal hospitals treat cats; dedicated catteries for boarding are " +
      "rarer than dog boarding. Browse <a href=\"/vets/\">vets in Pattaya</a> and " +
      "<a href=\"/boarding/\">boarding</a> — confirm cat acceptance when you call.</p>" },
    { h: "Return trips and the titer test", html:
      "<p>Thailand does not require a rabies titer test on entry, but the UK, EU and Australia " +
      "do for return or onward travel. If you might leave Thailand again, plan the " +
      "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">rabies titer test</a> " +
      "before you leave your origin country.</p>" },
    rb.IMPORT_PATTAYA_ARRIVAL,
    rb.IMPORT_PATTAYA_LIFE
  ],
  faqs: rb.mergeFaqs([
    ["Can I bring my cat to Thailand in cabin?",
     "<p>Many airlines allow cats in cabin in a soft carrier under the seat, subject to weight limits and route rules. Confirm when you book.</p>"],
    ["What vaccines does Thailand require for cats?",
     "<p>Rabies and feline panleukopenia (cat distemper), with at least 21 days after primary rabies vaccination before travel.</p>"],
    ["Is Thailand safe for outdoor cats?",
     "<p>Most owners keep cats indoors or on screened balconies — traffic, heat, dogs and disease risks make free roaming unwise. See our <a href=\"/cats/indoor-vs-outdoor-cats.html\">indoor cats guide</a>.</p>"],
    ["Will my cat be quarantined on arrival?",
     "<p>Not usually with complete paperwork. Same-day AQS clearance is typical — see <a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">quarantine guide</a>.</p>"],
    ["How much does it cost to bring a cat to Thailand?",
     "<p>Similar to dogs for permits and flights; cabin travel can be cheaper than cargo. See <a href=\"/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html\">cost breakdown</a>.</p>"]
  ], rb.IMPORT_EXTRA_FAQS),
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
  title: "English-Speaking Vets in Pattaya | Clinics List | PattayaPets",
  desc: "Vets and animal hospitals in Pattaya where English is spoken or advertised — directory facts pages with contact details and 24-hour options.",
  crumb: "English-speaking vets",
  breadcrumbs: [GUIDES, VETS],
  eyebrow: "Vets in Pattaya",
  h1: "English-speaking vets in Pattaya",
  lede: "Most expat pet owners need a clinic where staff can explain billing, consent forms " +
    "and follow-up care in English. Here is what the directory shows today — always confirm " +
    "when you book.",
  sections: [
    { html:
      '<div class="callout callout-note"><p><strong>Editorial note:</strong> PattayaPets ' +
      "lists language support from public sources and clinic statements. We do not rate " +
      "veterinary medical quality — only the business experience after an anonymous visit. " +
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
      "<li>Can you issue <strong>export health paperwork</strong> or refer to a DLD-approved vet?</li>" +
      "</ul>" },
    { h: "24-hour and referral hospitals", html:
      "<p><strong>Thonglor Pet Hospital - Pattaya</strong> operates 24 hours and advertises an " +
      "international service desk. Several other hospitals list English alongside Thai. " +
      "Filter the <a href=\"/vets/?filter=24h\">vets directory for 24-hour clinics</a> if you " +
      "need overnight cover.</p>" },
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
     "<p>Several clinics list English — see the table on this page. Thonglor Pet Hospital Pattaya advertises an international desk. Always confirm English support for your appointment time when you book.</p>"],
    ["Is there a 24-hour English-speaking vet in Pattaya?",
     "<p>Thonglor Pet Hospital Pattaya is open 24 hours with an international service. See our <a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour vet list</a> for addresses and phones.</p>"],
    ["How much does a vet visit cost in Pattaya?",
     "<p>Consultation fees vary by clinic — often a few hundred to around 1,000+ baht for a standard visit, with extras for tests and surgery. See <a href=\"/owning-a-pet-in-pattaya/vet-costs-pattaya.html\">vet costs in Pattaya</a>.</p>"],
    ["Can a Pattaya vet do export paperwork?",
     "<p>Only DLD-approved veterinarians can complete Thai export health certificates. Ask the clinic directly or see <a href=\"/take-pet-out-of-thailand/export-process.html\">export process</a>.</p>"],
    ["Are mobile vets available in English?",
     "<p>Some mobile clinics list English — browse <a href=\"/mobile-vets/\">mobile vets</a> and confirm when booking.</p>"]
  ],
  related: [
    { name: "All vets in Pattaya", path: "/vets/", desc: "Full directory with area filters." },
    { name: "24-hour emergency vets", path: "/pet-emergency/24-hour-vets-pattaya.html", desc: "Addresses and phone numbers." },
    { name: "Vet costs in Pattaya", path: "/owning-a-pet-in-pattaya/vet-costs-pattaya.html", desc: "Typical fees and budgeting." },
    { name: "Pet emergencies", path: "/pet-emergency/", desc: "Heatstroke, ticks, snakes and first aid." }
  ]
}));

/* ---------------- VET COSTS ---------------- */
pages.push(article({
  path: "/owning-a-pet-in-pattaya/vet-costs-pattaya.html",
  title: "Vet Costs in Pattaya (2026) | Prices & Budget | PattayaPets",
  desc: "Typical vet prices in Pattaya — consultation fees, vaccinations, heartworm prevention, surgery ranges and how to budget as an expat pet owner.",
  crumb: "Vet costs",
  breadcrumbs: [GUIDES, OWNING],
  eyebrow: "Owning a pet in Pattaya",
  h1: "Vet costs in Pattaya",
  lede: "Veterinary care in Pattaya is generally cheaper than Western Europe or North America, " +
    "but emergency surgery and specialist imaging can still run to tens of thousands of baht. " +
    "Here is how to budget.",
  sections: [
    { html:
      '<div class="callout callout-note"><p>Prices change and vary by clinic. This is ' +
      "orientation only — not a quote. PattayaPets does not provide veterinary advice.</p></div>" },
    { h: "Typical consultation fees", html:
      "<p>A <strong>standard consultation</strong> at a Pattaya clinic often falls roughly " +
      "in the <strong>300&ndash;800 baht</strong> range for a simple visit, with full " +
      "animal hospitals at the higher end. <strong>Emergency out-of-hours</strong> fees and " +
      "referral cases cost more. Hospitals such as Thonglor may quote separately for the " +
      "international desk — ask upfront.</p>" },
    { h: "Vaccinations and prevention", html:
      "<p><strong>Rabies and core vaccinations</strong> are typically a few hundred baht per " +
      "jab. <strong>Heartworm prevention</strong> and <strong>tick/flea products</strong> " +
      "are ongoing monthly costs — essential in Pattaya&rsquo;s climate. See " +
      "<a href=\"/pet-health-pattaya/heartworm.html\">heartworm</a> and " +
      "<a href=\"/dogs/dog-vaccinations-thailand.html\">dog vaccinations</a>.</p>" },
    { h: "Surgery and hospitalisation", html:
      "<p><strong>Neutering</strong> commonly runs from a few thousand baht upward depending " +
      "on size and clinic. <strong>Emergency surgery</strong>, <strong>IV fluids</strong> and " +
      "<strong>overnight stays</strong> can reach <strong>10,000&ndash;50,000+ baht</strong> " +
      "or more for serious cases. Ask for a written estimate before non-urgent procedures.</p>" },
    { h: "How to compare clinics fairly", html:
      "<p>Compare <strong>what is included</strong> (exam, meds, follow-up), not just the " +
      "headline fee. Browse the <a href=\"/vets/\">vets directory</a> and " +
      "<a href=\"/vets/english-speaking-vets-pattaya.html\">English-speaking clinics</a>. " +
      "After anonymous visits we publish business-experience verdicts — never medical ratings.</p>" },
    { h: "Insurance and emergency fund", html:
      "<p>Pet insurance exists in Thailand but uptake among expats is mixed — see " +
      "<a href=\"/pet-insurance-thailand.html\">pet insurance Thailand</a>. Many owners keep " +
      "a dedicated <strong>emergency fund</strong> of 20,000&ndash;50,000 baht for unexpected " +
      "vet bills. Know your nearest " +
      "<a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour hospital</a> before you need it.</p>" },
    { h: "Price questions to ask any clinic", html:
      "<p>Before you commit to a clinic for ongoing care, ask for transparency on the " +
      "basics: consultation fee, whether follow-up checks in the same illness window are " +
      "included, typical cost of a <strong>blood panel</strong> or <strong>X-ray</strong>, " +
      "and how deposits work for surgery. Larger hospitals may itemise every consumable; " +
      "smaller clinics sometimes bundle visits. Neither approach is wrong &mdash; you just " +
      "need to know which you are buying. For import and export paperwork, confirm whether " +
      "the clinic is on the DLD approved list before you pay for certificate work. " +
      "Relocation agents quote separate service fees for logistics &mdash; that is not the " +
      "same as a vet consultation. See " +
      "<a href=\"/vets/english-speaking-vets-pattaya.html\">English-speaking vets</a> if " +
      "billing clarity in English matters to you.</p>" }
  ],
  faqs: [
    ["How much is a vet visit in Pattaya?",
     "<p>A routine consultation is often roughly 300–800 baht at local clinics, more at large hospitals and for emergencies. Always ask for an estimate.</p>"],
    ["Is vet care cheaper than in the UK or USA?",
     "<p>Generally yes for routine care, but complex surgery and imaging can still be expensive in baht terms. Budget for prevention and emergencies separately.</p>"],
    ["Do Pattaya vets accept credit cards?",
     "<p>Many hospitals accept cards; smaller clinics may prefer cash or Thai QR. Confirm when you book.</p>"],
    ["What does dog neutering cost in Pattaya?",
     "<p>Often a few thousand baht upward depending on size and clinic — get a quote that includes anaesthesia and pain relief.</p>"],
    ["Should I get pet insurance in Thailand?",
     "<p>It can help with large unexpected bills but read exclusions carefully. See our <a href=\"/pet-insurance-thailand.html\">pet insurance guide</a>.</p>"]
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
  title: "Dog Grooming Pattaya | Salons & Mobile Groomers | PattayaPets",
  desc: "Dog grooming in Pattaya — baths, breed clips, de-shedding and nail trims. Browse the groomers directory with area filters and heat-aware coat care tips.",
  crumb: "Dog grooming",
  breadcrumbs: [GUIDES, { name: "Groomers", path: "/groomers/" }],
  eyebrow: "Groomers in Pattaya",
  h1: "Dog grooming in Pattaya",
  lede: "Regular grooming matters more in Pattaya&rsquo;s heat and humidity — matted coats trap " +
    "moisture and skin problems follow. Here is how to find a groomer and what to expect.",
  sections: [
    { h: "Browse groomers by area", html:
      "<p>The <a href=\"/groomers/\">groomers directory</a> lists salons across Pattaya with " +
      "verified facts — services, hours and contact channels. Use the <strong>area chips</strong> " +
      "on the hub to narrow by Naklua, Jomtien, Central Pattaya and other neighbourhoods.</p>" },
    { h: "Mobile and home-visit grooming", html:
      "<p>Some groomers offer <strong>mobile visits</strong> — useful if your dog is anxious in " +
      "traffic or you lack transport. See listings such as Pet Passions Mobile Grooming in the " +
      "directory and confirm coverage for your soi.</p>" },
    { h: "Heat-aware coat care", html:
      "<p>Do <strong>not</strong> shave double-coated breeds to the skin — it can worsen heat " +
      "stress. Regular brush-outs, paw pad checks and ear cleaning matter more. Read " +
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
      "<p>Groomers are not vets — but they often spot ear infections, hot spots and parasites early. " +
      "If they flag something, see a <a href=\"/vets/\">vet in Pattaya</a>. For ticks after walks, " +
      "see <a href=\"/pet-emergency/ticks-and-fleas.html\">ticks and fleas</a>.</p>" }
  ],
  faqs: [
    ["How much does dog grooming cost in Pattaya?",
     "<p>Baths and tidy-ups often run from a few hundred baht; full breed grooms cost more. Ask for a quote for your dog's size and coat.</p>"],
    ["Are there mobile dog groomers in Pattaya?",
     "<p>Yes — several listings offer mobile grooming. Browse <a href=\"/groomers/\">groomers</a> and filter by area.</p>"],
    ["How often should I groom my dog in Thailand's climate?",
     "<p>Brush regularly; professional grooms every 4–8 weeks depending on coat. Short coats still need paw, ear and skin checks.</p>"],
    ["Can groomers handle cats too?",
     "<p>Some salons groom both — confirm when booking. Cat grooming is less common than dogs in Pattaya.</p>"],
    ["Should I shave my dog for the Thai heat?",
     "<p>Not double-coated breeds — it can damage the coat and increase sunburn risk. Regular brush-outs and cool-walk timing matter more.</p>"]
  ],
  related: [
    { name: "All groomers", path: "/groomers/", desc: "Full directory." },
    { name: "Hot-climate care", path: "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", desc: "Walking times and coat care." },
    { name: "Skin & ear problems", path: "/pet-health-pattaya/skin-and-ear-problems.html", desc: "When grooming reveals an issue." },
    { name: "Dog-friendly Pattaya", path: "/dog-friendly-pattaya/", desc: "Walks and outings after a groom." }
  ]
}));

module.exports = pages;
