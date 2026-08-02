"use strict";
/* Flagship cluster: Bringing your pet to Thailand */

const { article, hub } = require("../guidekit.js");
const { importCountryRelated, attachReturnExportLink } = require("../data/country-pairs.js");
const rb = require("../data/richness-blocks.js");
const { AIRLINE_POLICY_SNAPSHOT } = require("../data/airline-policy-snapshot.js");
const {
  claimLink,
  REGULATED_IMPORT_PATTAYA_ARRIVAL,
  REGULATED_IMPORT_PATTAYA_LIFE,
  REGULATED_IMPORT_EXTRA_FAQS
} = require("../data/regulated-claims.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const CLUSTER = { name: "Bringing a pet to Thailand", path: "/bring-pet-to-thailand/" };
const SUB = [GUIDES, CLUSTER];

const VERIFY =
  "The high-consequence Thai import claims identified on this page were rechecked on " +
  "1 August 2026 against the Thai consular/DLD guidance updated 2 February 2026. " +
  "Thailand&rsquo;s Department of Livestock Development " +
  "(DLD), airlines and origin-country authorities change their rules without notice. " +
  "Treat this as an orientation, then confirm every current requirement with the DLD, " +
  "your airline and your origin-country authority before you book or travel.";

const OFFICIAL =
  "<p><strong>Official sources to verify against:</strong> " +
  claimLink("TH-IMPORT-SEQUENCE-2026-02", "Thai consular/DLD pet-import guide") +
  " (updated 2 February 2026; its detailed instruction is scoped to dogs, cats and rabbits from the USA); " +
  "DLD import application form <strong>R1/1</strong> (via the guide or " +
  "<a href=\"https://aqi.dld.go.th/\" target=\"_blank\" rel=\"noopener\">" +
  "DLD Animal Quarantine stations</a>); Suvarnabhumi AQS import: " +
  "<a href=\"mailto:qsap_bkk_import@dld.go.th\">qsap_bkk_import@dld.go.th</a>.</p>";

function importStep(o) {
  var sections = (o.sections || []).slice();
  if (!o.skipRichness) {
    sections.push(REGULATED_IMPORT_PATTAYA_ARRIVAL);
    sections.push(REGULATED_IMPORT_PATTAYA_LIFE);
  }
  sections.push({ h: "Official sources", html: OFFICIAL });
  return article(Object.assign({}, o, {
    sections: sections,
    faqs: rb.mergeFaqs(o.faqs, REGULATED_IMPORT_EXTRA_FAQS),
    updated: o.updated || "2026-06-01"
  }));
}

const pages = [];

function airlineEsc(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function airlineDate(iso) {
  const parts = String(iso || "").split("-");
  const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  return parts.length === 3 && months[Number(parts[1]) - 1]
    ? Number(parts[2]) + " " + months[Number(parts[1]) - 1] + " " + parts[0]
    : String(iso || "");
}

function airlinePolicyTable() {
  const rows = AIRLINE_POLICY_SNAPSHOT.map(function (policy) {
    return "<tr><th scope=\"row\">" + airlineEsc(policy.airline) +
      " <small>(" + airlineEsc(policy.iata) + ")</small></th>" +
      "<td>" + policy.ordinaryPetModes.map(airlineEsc).join(", ") + "</td>" +
      "<td>" + airlineEsc(policy.bookingTiming) + "</td>" +
      "<td>" + airlineEsc(policy.bookingMethod) + "</td>" +
      "<td><a href=\"" + airlineEsc(policy.policyUrl) +
      "\" target=\"_blank\" rel=\"noopener\" aria-label=\"Official " +
      airlineEsc(policy.airline) + " pet policy\">Official policy</a><br><small>Checked " +
      airlineEsc(airlineDate(policy.asOf)) + "; evidence confidence " +
      airlineEsc(policy.confidence) + "</small></td></tr>";
  }).join("");
  return "<p>This is a deliberately narrow publication view of <strong>" +
    AIRLINE_POLICY_SNAPSHOT.length + " official airline policies</strong> reviewed for " +
    "ordinary pets. It publishes only the carriage modes, request timing, booking channel " +
    "and official policy source that passed the airline evidence gate. It excludes prices, " +
    "route schedules and unresolved dossier fields.</p>" +
    '<div class="table-wrap"><table class="facts-table"><caption>Ordinary-pet policy snapshot; ' +
    "not flight acceptance</caption><thead><tr><th scope=\"col\">Airline</th>" +
    "<th scope=\"col\">Published mode</th><th scope=\"col\">Published request timing</th>" +
    "<th scope=\"col\">Booking channel</th><th scope=\"col\">Evidence</th></tr></thead>" +
    "<tbody>" + rows + "</tbody></table></div>" +
    '<p class="notice"><strong>Decision boundary:</strong> a mode in this table does not prove ' +
    "acceptance for an animal, breed, container, airport, route, connection, aircraft or date. " +
    "Assistance-animal rules are separate. Reopen the linked policy and obtain written " +
    "acceptance from every operating carrier before paying.</p>";
}

/* ---------------- HUB ---------------- */
pages.push(hub({
  path: "/bring-pet-to-thailand/",
  title: "Bring a Pet to Thailand (DLD Guide 2026) | PattayaPets",
  image: "/assets/img/og-import.png",
  updated: "2026-06-03",
  desc: "How to bring a dog or cat to Thailand in 2026: DLD import permit, microchip, " +
    "rabies vaccination, health certificate, airlines and arrival at Suvarnabhumi.",
  crumb: "Bringing a pet to Thailand",
  breadcrumbs: [GUIDES],
  eyebrow: "Flagship guide",
  h1: "Bringing your pet to Thailand",
  lede: "A dog or cat can move to Thailand with you — thousands do every year. " +
    "It is a paperwork process with firm deadlines, not a quick errand. Here is " +
    "the whole picture, then a page for each step.",
  intro:
    "<p>The single most important thing to understand is <strong>timing</strong>. " +
    "The current published sequence is: finish all primary vaccines, wait 21 days, " +
    "then apply for the import permit and allow 5&ndash;7 Thailand business days after " +
    "a complete application. Documented boosters are exempt from that 21-day wait. " +
    "Origin certificates, airlines and onward destinations add separate clocks, so " +
    "build the date only after checking every authority. " +
    claimLink("TH-IMPORT-SEQUENCE-2026-02", "Thai source") + ".</p>" +
    "<p>The process is overseen by Thailand&rsquo;s <strong>Department of " +
    "Livestock Development (DLD)</strong>. Below, each step has its own page. " +
    "Read them in order.</p>" +
    "<p>Moving to Thailand with a pet usually sits alongside visa, housing and " +
    "transport planning. Keep those human arrangements separate from the animal&rsquo;s " +
    "regulated DLD and airline paperwork.</p>" +
    '<div class="callout callout-tip"><div class="ch">Rules change — verify before you act</div>' +
    "<p>" + VERIFY + "</p>" + OFFICIAL + "</div>",
  groups: [
    {
      title: "The process, step by step",
      cards: [
        { tag: "Start here", name: "Import checklist", desc: "A printable step-by-step checklist for the whole move.", path: "/bring-pet-to-thailand/checklist.html" },
        { tag: "Step 1", name: "Microchip", desc: "The Thai identification certificate and number-matching requirement.", path: "/bring-pet-to-thailand/microchip-requirements.html" },
        { tag: "Step 2", name: "Rabies & titer test", desc: "The rabies vaccination, other required jabs, and the titer test.", path: "/bring-pet-to-thailand/rabies-vaccination-titer-test.html" },
        { tag: "Step 3", name: "Health certificate", desc: "The veterinary health certificate and who has to endorse it.", path: "/bring-pet-to-thailand/health-certificate.html" },
        { tag: "Step 4", name: "DLD import permit", desc: "How to apply to the Department of Livestock Development.", path: "/bring-pet-to-thailand/import-permit-thailand-dld.html" },
        { tag: "Step 5", name: "Airline pet policies", desc: "Cabin, checked baggage or cargo — and IATA travel crates.", path: "/bring-pet-to-thailand/airline-pet-policies.html" },
        { tag: "Step 6", name: "Arrival in Thailand", desc: "The Animal Quarantine Station check, and getting to Pattaya.", path: "/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html" }
      ]
    },
    {
      title: "Plan and budget",
      cards: [
        { tag: "Money", name: "What it costs", desc: "Itemised cost categories and a sourced Thai arrival fee.", path: "/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html" },
        { tag: "Arrival", name: "U-Tapao or Bangkok?", desc: "Which airport to fly your pet into, and how to reach Pattaya.", path: "/bring-pet-to-thailand/u-tapao-airport-pets.html" },
        { tag: "Dogs", name: "Bring a dog to Thailand", desc: "Dog-specific vaccines, CDC notes and settling in Pattaya.", path: "/bring-pet-to-thailand/bring-a-dog-to-thailand.html" },
        { tag: "Cats", name: "Bring a cat to Thailand", desc: "Cat vaccines, cabin travel and indoor life in Pattaya.", path: "/bring-pet-to-thailand/bring-a-cat-to-thailand.html" }
      ]
    },
    {
      title: "By the country you are coming from",
      note: "The Thai requirements are the same; what differs is who endorses your paperwork — and what you will need if you ever move your pet on again.",
      cards: [
        { name: "From the UK", desc: "Endorsement by APHA, and the titer test the return trip will need.", path: "/bring-pet-to-thailand/from-uk.html" },
        { name: "From the USA", desc: "USDA APHIS endorsement and the CDC rules for dogs.", path: "/bring-pet-to-thailand/from-usa.html" },
        { name: "From the EU", desc: "EU export paperwork and what the pet passport does not cover.", path: "/bring-pet-to-thailand/from-eu.html" },
        { name: "From Australia", desc: "Why this route is the hardest, and what it really involves.", path: "/bring-pet-to-thailand/from-australia.html" },
        { name: "From Canada", desc: "CFIA endorsement and planning for the journey home.", path: "/bring-pet-to-thailand/from-canada.html" },
        { name: "From Japan", desc: "AQS export paperwork and the rabies titer test for the return.", path: "/bring-pet-to-thailand/from-japan.html" },
        { name: "From Singapore", desc: "AVS export certificate and planning from a rabies-free origin.", path: "/bring-pet-to-thailand/from-singapore.html" },
        { name: "From the UAE", desc: "MOCCAE export permit and the Thai import steps for Gulf relocations.", path: "/bring-pet-to-thailand/from-uae.html" },
        { name: "From Germany", desc: "EU export paperwork via the German veterinary office.", path: "/bring-pet-to-thailand/from-germany.html" },
        { name: "From Russia", desc: "The state veterinary certificate and the rabies titer test.", path: "/bring-pet-to-thailand/from-russia.html" },
        { name: "From Sweden", desc: "EU export paperwork via the Swedish Board of Agriculture.", path: "/bring-pet-to-thailand/from-sweden.html" },
        { name: "From Norway", desc: "The export certificate and the tapeworm rule for the return.", path: "/bring-pet-to-thailand/from-norway.html" },
        { name: "From Denmark", desc: "EU export paperwork via the Danish veterinary authority.", path: "/bring-pet-to-thailand/from-denmark.html" },
        { name: "From Finland", desc: "EU export paperwork and the tapeworm rule for the return.", path: "/bring-pet-to-thailand/from-finland.html" },
        { name: "From the Netherlands", desc: "EU export paperwork via the NVWA, with direct routes to Bangkok.", path: "/bring-pet-to-thailand/from-netherlands.html" },
        { name: "From France", desc: "EU export paperwork via the French veterinary services.", path: "/bring-pet-to-thailand/from-france.html" },
        { name: "From Switzerland", desc: "The EU-aligned Swiss export process via the FSVO.", path: "/bring-pet-to-thailand/from-switzerland.html" },
        { name: "From Ireland", desc: "EU export paperwork and the tapeworm rule for the return.", path: "/bring-pet-to-thailand/from-ireland.html" },
        { name: "From New Zealand", desc: "Straightforward export; the demanding part is the return.", path: "/bring-pet-to-thailand/from-new-zealand.html" },
        { name: "From India", desc: "AQCS export certificate and planning from a high-rabies origin.", path: "/bring-pet-to-thailand/from-india.html" },
        { name: "From the Philippines", desc: "BAI export paperwork and direct flights to Thailand.", path: "/bring-pet-to-thailand/from-philippines.html" },
        { name: "From China", desc: "Chinese customs export and direct flights from major cities.", path: "/bring-pet-to-thailand/from-china.html" },
        { name: "From South Africa", desc: "DAFF export certificate and planning from Africa.", path: "/bring-pet-to-thailand/from-south-africa.html" },
        { name: "From Italy", desc: "EU export paperwork via the Italian veterinary services.", path: "/bring-pet-to-thailand/from-italy.html" },
        { name: "From Malaysia", desc: "Short ASEAN corridor — DVS export and direct flights.", path: "/bring-pet-to-thailand/from-malaysia.html" },
        { name: "From South Korea", desc: "APQA export certificate and Bangkok routes.", path: "/bring-pet-to-thailand/from-south-korea.html" }
      ]
    },
    {
      title: "Good to know before you fly",
      cards: [
        { name: "Snub-nosed breeds & flying", desc: "Why flat-faced breeds need extra care, and how airlines restrict them.", path: "/bring-pet-to-thailand/snub-nosed-breeds-flying.html" },
        { name: "Is there quarantine?", desc: "What really happens at the Animal Quarantine Station on arrival.", path: "/bring-pet-to-thailand/thailand-pet-quarantine.html" }
      ]
    }
  ],
  related: [
    { name: "Import checklist", path: "/bring-pet-to-thailand/checklist.html", desc: "Printable step-by-step checklist." },
    { name: "U-Tapao or Bangkok?", path: "/bring-pet-to-thailand/u-tapao-airport-pets.html", desc: "Which airport to fly into for Pattaya." },
    { name: "What import costs", path: "/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html", desc: "Budgeting the move." },
    { name: "Pet relocation agents", path: "/pet-relocation/", desc: "Specialists who handle the paperwork and flights." },
    { name: "Arriving in Thailand", path: "/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html", desc: "The quarantine-station check on landing." },
    { name: "DLD import permit", path: "/bring-pet-to-thailand/import-permit-thailand-dld.html", desc: "The Thai-side permit you apply for." },
    { name: "Taking a pet out of Thailand", path: "/take-pet-out-of-thailand/", desc: "Export hub — process, costs and destinations." },
    { name: "Export checklist", path: "/take-pet-out-of-thailand/checklist.html", desc: "Printable step-by-step checklist for leaving." },
    { name: "The export process", path: "/take-pet-out-of-thailand/export-process.html", desc: "The Thai DLD side when you leave." }
  ]
}));

/* ---------------- MICROCHIP ---------------- */
pages.push(importStep({
  path: "/bring-pet-to-thailand/microchip-requirements.html",
  title: "Bring a Pet to Thailand: Microchip Rules | PattayaPets",
  desc: "Thailand's published pet-import file requires a microchip implantation " +
    "certificate and matching chip numbers across the application and records.",
  crumb: "Microchip",
  breadcrumbs: SUB,
  eyebrow: "Bringing a pet to Thailand · Step 1",
  h1: "The microchip your pet needs",
  lede: "The Thai file must identify the animal consistently. The current source " +
    "requires the chip number and implantation certificate; it does not publish a " +
    "universal ISO or chip-before-rabies rule.",
  verify: VERIFY,
  sections: [
    { h: "What the Thai source requires", html:
      "<p>The current Thai consular/DLD guide asks for the pet&rsquo;s microchip number " +
      "on form R1/1, a <strong>microchip implantation certificate</strong>, and the " +
      "same number on the vaccination records. Officers compare those identifiers " +
      "with the animal. " + claimLink("TH-IMPORT-ID-2026-02", "Read the current Thai source") +
      ".</p>" },
    { h: "What it does not establish", html:
      "<p>That source does <strong>not</strong> state a universal ISO 11784/11785 " +
      "requirement, require the chip to precede rabies vaccination, or say an earlier " +
      "rabies dose must automatically be repeated. Do not repeat a vaccination or add " +
      "a second chip on this page&rsquo;s authority. Ask the responsible AQS, your " +
      "origin authority and operating airline about your exact chip and records.</p>" +
      "<p>An onward destination may impose its own ISO or sequencing rule. Treat that " +
      "as a separately sourced destination requirement, not a Thai import rule.</p>" },
    { h: "Get it documented", html:
      "<p>Ask your vet to record the microchip number, the date implanted and the " +
      "chip&rsquo;s standard on your pet&rsquo;s records. That number will appear " +
      "on the rabies certificate, the health certificate and the import permit " +
      "application, so it needs to be consistent everywhere.</p>" },
    { h: "Common mistakes", html:
      "<ul>" +
      "<li><strong>Missing implantation certificate</strong> &mdash; the Thai application asks for it.</li>" +
      "<li><strong>Typos across documents</strong> &mdash; one wrong digit on the permit vs the health certificate vs the airline booking stops clearance.</li>" +
      "<li><strong>Assuming Thai acceptance proves airline acceptance</strong> &mdash; the operating carrier can impose a different scanner or chip rule.</li>" +
      "</ul>" },
    { h: "What comes next", html:
      "<p>Once the chip is in and documented, move on to the " +
      '<a href="/bring-pet-to-thailand/rabies-vaccination-titer-test.html">rabies vaccination and titer test</a>. ' +
      "After arrival, register the chip locally &mdash; see " +
      '<a href="/owning-a-pet-in-pattaya/microchipping-your-pet.html">microchipping your pet</a>.</p>' }
  ],
  faqs: [
    ["Does my pet need a new microchip if it already has one?",
     "<p>Do not add a second chip solely because of this guide. Check that the existing chip scans, obtain its implantation record, and ask the responsible AQS and operating airline whether they accept that exact chip type.</p>"],
    ["My pet was vaccinated for rabies before it was chipped. Is that a problem?",
     "<p>The current Thai source does not say that vaccination must automatically be repeated. Send the dated vaccination and implantation records to the responsible AQS and ask for a written answer; do not revaccinate on this page&rsquo;s authority.</p>"],
    ["Can I use a tattoo instead of a microchip?",
     "<p>The published application asks for a microchip number and implantation certificate. A tattoo does not supply those documents; confirm any unusual identification case with the responsible AQS.</p>"],
    ["Where should the chip number appear?",
     "<p>On every document in the chain: vaccination records, the health certificate, the import permit application (R1/1) and the airline booking. Officials compare them at the AQS on arrival.</p>"],
    ["Does the chip need registering in Thailand after arrival?",
     "<p>Thailand does not require a national pet registry on import, but registering locally helps if your pet is lost. See our <a href=\"/owning-a-pet-in-pattaya/microchipping-your-pet.html\">microchipping in Pattaya</a> guide.</p>"]
  ],
  related: [
    { name: "Rabies & titer test", path: "/bring-pet-to-thailand/rabies-vaccination-titer-test.html", desc: "The next step, once the chip is in." },
    { name: "Microchipping in Pattaya", path: "/owning-a-pet-in-pattaya/microchipping-your-pet.html", desc: "Why a chip matters for lost pets too." },
    { name: "DLD import permit", path: "/bring-pet-to-thailand/import-permit-thailand-dld.html", desc: "Apply once vaccinations are in order." },
    { name: "Arrival in Thailand", path: "/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html", desc: "What happens when you land." }
  ]
}));

/* ---------------- RABIES & TITER ---------------- */
pages.push(importStep({
  path: "/bring-pet-to-thailand/rabies-vaccination-titer-test.html",
  title: "Bring a Pet to Thailand: Rabies & Titer Test | PattayaPets",
  desc: "Thailand's primary-vaccine wait, documented-booster exception, permit " +
    "processing sequence and destination-specific rabies antibody planning.",
  crumb: "Rabies & titer test",
  breadcrumbs: SUB,
  eyebrow: "Bringing a pet to Thailand · Step 2",
  h1: "Rabies vaccination and the titer test",
  lede: "Primary vaccines, documented boosters and the permit do not share one " +
    "generic travel-date rule. Use the current Thai sequence below.",
  verify: VERIFY,
  sections: [
    { h: "The rabies vaccination", html:
      "<p>Under the current published Thai sequence, complete <strong>all primary " +
      "vaccines</strong>, wait <strong>21 days</strong>, then start the import-permit " +
      "application. A documented booster does not require that wait, but prior " +
      "vaccination records must be submitted. Allow a further <strong>5&ndash;7 " +
      "Thailand business days</strong> after the complete application is received. " +
      claimLink("TH-IMPORT-SEQUENCE-2026-02", "Source and scope") + ".</p>" +
      "<p>The detailed consular instruction is written for dogs, cats and rabbits " +
      "travelling from the USA. Travellers from another origin should have their AQS " +
      "and origin authority confirm the applicable certificate and vaccine wording.</p>" },
    { h: "The other vaccinations Thailand asks for", html:
      "<p>Rabies is not the only one. Current guidance asks for:</p>" +
      "<ul><li><strong>Dogs:</strong> rabies, plus distemper, hepatitis and " +
      "parvovirus (the combined DHPP shot), plus leptospirosis. If leptospirosis " +
      "is not vaccinated, a blood test with a negative result is generally " +
      "required instead.</li>" +
      "<li><strong>Cats:</strong> rabies, plus the combined FVRCP shot " +
      "(feline viral rhinotracheitis, calicivirus and panleukopenia).</li></ul>" +
      "<p>When any of these is a primary vaccination, the published sequence places " +
      "the 21-day wait <strong>before the permit application</strong>, not merely " +
      "before arrival. Documented boosters use the exception above.</p>" },
    { h: "The rabies titer test — only for a sourced destination rule", html:
      "<p>A rabies titer test (also called RNATT or FAVN) is a blood test that " +
      "measures rabies antibodies. The required laboratory, threshold, sampling date " +
      "and wait are destination-specific.</p>" +
      "<p>The reviewed USA-origin Thai instruction does not list a rabies titer among " +
      "its Thai entry documents. Do not generalise that scope to another origin, and " +
      "arrange a titre only against the current rule of a named destination. Great " +
      "Britain and the EU have their own threshold, sample and wait rules. Australia " +
      "does not accept qualifying " +
      "vaccination or testing done in non-approved Thailand for the standard pathway: " +
      "the pet must first move to an approved country and complete the qualifying work " +
      "there. " + claimLink("AU-NONAPPROVED-PATH-2026-08", "Australian source") + ".</p>" +
      "<p>If you might later leave Thailand, read " +
      '<a href="/take-pet-out-of-thailand/export-process.html">export process</a> ' +
      "for what the return journey involves.</p>" },
    { h: "What comes next", html:
      "<p>With vaccinations in order, the next documents are the " +
      '<a href="/bring-pet-to-thailand/health-certificate.html">health certificate</a> ' +
      "and the " +
      '<a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a>. ' +
      "Step one was the " +
      '<a href="/bring-pet-to-thailand/microchip-requirements.html">microchip</a>.</p>' }
  ],
  faqs: [
    ["How long before travel should the rabies shot be given?",
     "<p>For a primary vaccination under the published Thai sequence, wait 21 days before starting the permit application, then allow 5&ndash;7 Thailand business days for a complete application. Documented boosters are exempt from that wait. Confirm validity and any origin-specific certificate window with the responsible authorities.</p>"],
    ["Is the titer test required to enter Thailand?",
     "<p>Generally no for the ordinary published pathway, but confirm the exact origin/species case with the DLD. Great Britain and the EU may require destination-specific testing for a later move. Australia&rsquo;s standard non-approved-country pathway instead requires qualifying vaccination and testing in an approved country, not Thailand.</p>"],
    ["Where is the titer blood test analysed?",
     "<p>Use a laboratory accepted by the destination authority. Ask that authority or its published list which laboratory qualifies, then obtain the laboratory&rsquo;s current turnaround estimate before booking.</p>"],
    ["What if my pet's rabies vaccine lapsed before travel?",
     "<p>Do not infer this from the word &lsquo;booster&rsquo; alone. Ask the responsible AQS whether the records qualify for the documented-booster exception; otherwise plan on the primary-vaccine sequence.</p>"],
    ["Do puppies and kittens need a special vaccination schedule?",
     "<p>A veterinarian sets the animal&rsquo;s clinical schedule. For Thai paperwork, the current published sequence waits 21 days after all primary vaccines before the permit application begins; confirm age and origin-specific conditions with the AQS.</p>"]
  ],
  related: [
    { name: "Health certificate", path: "/bring-pet-to-thailand/health-certificate.html", desc: "The document that pulls it all together." },
    { name: "Microchip requirements", path: "/bring-pet-to-thailand/microchip-requirements.html", desc: "Step one — which has to come first." },
    { name: "Pet quarantine in Thailand", path: "/bring-pet-to-thailand/thailand-pet-quarantine.html", desc: "What goes wrong when paperwork slips." },
    { name: "The export process", path: "/take-pet-out-of-thailand/export-process.html", desc: "Why the titer test matters for the return." }
  ]
}));

/* ---------------- HEALTH CERTIFICATE ---------------- */
pages.push(importStep({
  path: "/bring-pet-to-thailand/health-certificate.html",
  title: "Bring a Pet to Thailand: Health Certificate | PattayaPets",
  desc: "The veterinary health certificate Thailand requires, who has to issue " +
    "and government-endorse it, and the tight timing window before travel.",
  crumb: "Health certificate",
  breadcrumbs: SUB,
  eyebrow: "Bringing a pet to Thailand · Step 3",
  h1: "The veterinary health certificate",
  lede: "This is the document that ties the microchip, the vaccinations and your " +
    "pet&rsquo;s clean bill of health into one official paper.",
  verify: VERIFY,
  sections: [
    { h: "What it is", html:
      "<p>The health certificate states that your pet is healthy, fit to travel, " +
      "free of signs of infectious disease, and lists the microchip number and " +
      "the vaccination dates. Thailand accepts a certificate that meets its " +
      "requirements; an official APHIS/EU-style export certificate is the usual " +
      "form.</p>" },
    { h: "Who issues and endorses it", html:
      "<p>Two steps. First, a <strong>licensed veterinarian</strong> examines " +
      "your pet and completes the certificate. Second — and this is the step " +
      "people forget — it must be <strong>endorsed by the origin " +
      "country&rsquo;s government veterinary authority</strong>: USDA APHIS in " +
      "the United States, APHA in the United Kingdom, and the equivalent " +
      "competent authority in EU countries. An un-endorsed certificate is not " +
      "enough.</p>" },
    { h: "The timing window", html:
      "<p>The certificate is only valid for a short window — commonly issued " +
      "within about <strong>ten days</strong> of travel, and some sources say " +
      "seven. Because it must also be government-endorsed inside that window, " +
      "the final fortnight before departure is the busy one. Book the vet exam " +
      "and the endorsement well in advance, and confirm the exact validity " +
      "period that applies to your route.</p>" },
    { h: "Common mistakes", html:
      "<ul>" +
      "<li><strong>Vet-only certificate</strong> &mdash; missing USDA APHIS, APHA or EU competent-authority endorsement.</li>" +
      "<li><strong>Expired before landing</strong> &mdash; a delayed flight can push you outside the validity window.</li>" +
      "<li><strong>Microchip mismatch</strong> &mdash; certificate quotes a different number from the permit or vaccinations.</li>" +
      "<li><strong>Wrong certificate model</strong> &mdash; using a generic vet letter instead of the country-specific export health certificate Thailand expects.</li>" +
      "</ul>" },
    { h: "What comes next", html:
      "<p>Apply for the " +
      '<a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a> ' +
      "once the certificate is ready, then book the flight under " +
      '<a href="/bring-pet-to-thailand/airline-pet-policies.html">airline pet policies</a>. ' +
      "The vaccinations are covered in our " +
      '<a href="/bring-pet-to-thailand/rabies-vaccination-titer-test.html">rabies &amp; titer guide</a>.</p>' }
  ],
  faqs: [
    ["Can my normal vet do the health certificate?",
     "<p>Your vet can carry out the examination and complete the certificate, but it then needs government endorsement (APHIS, APHA or the EU equivalent). Some vets are specifically accredited for export work — ask before booking.</p>"],
    ["What if my travel date moves?",
     "<p>Because the certificate has a short validity, a delayed trip can mean re-issuing it. Build a little slack into your plans and keep your vet informed.</p>"],
    ["How long does government endorsement take?",
     "<p>It varies by country — APHA often targets seven working days for GB export certificates, USDA APHIS can be faster for some routes. Do not leave endorsement to the last day before your flight.</p>"],
    ["Does Thailand accept a copy of the health certificate?",
     "<p>Plan on originals at the AQS. Copies alone are commonly rejected at inspection.</p>"],
    ["Which country page shows a worked example?",
     "<p>See our <a href=\"/bring-pet-to-thailand/from-uk.html\">UK import guide</a> for EHC 2917 and APHA endorsement as a full worked example.</p>"]
  ],
  related: [
    { name: "DLD import permit", path: "/bring-pet-to-thailand/import-permit-thailand-dld.html", desc: "The Thai-side permit you apply for." },
    { name: "From the UK", path: "/bring-pet-to-thailand/from-uk.html", desc: "APHA endorsement as a worked example." },
    { name: "Airline pet policies", path: "/bring-pet-to-thailand/airline-pet-policies.html", desc: "Endorsement timing vs your flight date." },
    { name: "Rabies & titer test", path: "/bring-pet-to-thailand/rabies-vaccination-titer-test.html", desc: "The vaccinations the certificate lists." }
  ]
}));

/* ---------------- IMPORT PERMIT ---------------- */
pages.push(importStep({
  path: "/bring-pet-to-thailand/import-permit-thailand-dld.html",
  title: "Thailand DLD Pet Import Permit (2026) | PattayaPets",
  desc: "Thailand pet import permit (form R1/1): the current USA-origin sequence, " +
    "required vaccines, application evidence and arrival inspection.",
  crumb: "DLD import permit",
  breadcrumbs: SUB,
  eyebrow: "Bringing a pet to Thailand · Step 4",
  h1: "The Thailand import permit (DLD)",
  lede: "The import permit is Thailand&rsquo;s formal permission for your pet to " +
    "enter. It comes from the Department of Livestock Development.",
  verify: VERIFY,
  sections: [
    { h: "What the import permit is", html:
      "<p>The permit is issued by the <strong>Department of Livestock " +
      "Development (DLD)</strong> through the <strong>Animal Quarantine Station " +
      "(AQS)</strong> at your arrival airport. It confirms your pet may be imported. " +
      "Use the application window and intake method given by the AQS responsible for " +
      "the actual route.</p>" },
    { h: "When to apply", html:
      "<p>The current detailed consular guide, scoped to dogs, cats and rabbits from " +
      "the USA, says to apply <strong>at least seven days before departure</strong> and " +
      "<strong>no more than 60 days before departure</strong>. The DLD recommends " +
      "around <strong>30 days ahead</strong> &mdash; long enough for processing, " +
      "short enough that the permit is still valid when you fly. Do not apply that " +
      "USA-scoped window to another origin without confirmation. " +
      claimLink("TH-IMPORT-WINDOW-2026-02", "Source and scope") + ".</p>" +
      "<p>Before applying, complete all primary vaccines and wait <strong>21 days</strong>. " +
      "Documented boosters are exempt when prior records are submitted. A complete " +
      "application then needs <strong>5&ndash;7 Thailand business days</strong>. " +
      claimLink("TH-IMPORT-SEQUENCE-2026-02", "Source and scope") + ".</p>" },
    { h: "How to apply", html:
      "<p>The reviewed USA-origin instruction sends form <strong>R1/1</strong> and its " +
      "supporting documents to the AQS at the port of entry. For Suvarnabhumi it gives " +
      "<a href=\"mailto:qsap_bkk_import@dld.go.th\">qsap_bkk_import@dld.go.th</a>. " +
      "Other routes should obtain the current intake channel from their responsible " +
      "AQS rather than assuming that address applies.</p>" +
      "<p>After a complete application, allow <strong>5&ndash;7 Thailand business " +
      "days</strong>. Print the issued permit and carry it with the original supporting " +
      "documents. " + claimLink("TH-IMPORT-SEQUENCE-2026-02", "Source and scope") + ".</p>" },
    { h: "What you will need to hand", html:
      "<ul><li>Completed form <strong>R1/1</strong> (your name, Thai address, origin " +
      "country, pet details and microchip number)</li>" +
      "<li>Copy of your passport</li>" +
      "<li>Microchip implantation certificate</li>" +
      "<li>Vaccination records in English (see our " +
      "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">rabies " +
      "&amp; vaccination page</a> for what Thailand asks for)</li>" +
      "<li>A clear colour photo of your pet (face visible)</li>" +
      "<li>Flight itinerary / booking confirmation</li></ul>" +
      "<p>Keep printed copies of the permit and every supporting document for " +
      "the airport. On arrival, the AQS inspects your pet and issues the import " +
      "licence; the current USA-origin guide states a <strong>500&nbsp;baht</strong> " +
      "fee per animal. Confirm it with the AQS for the actual route. " +
      claimLink("TH-ARRIVAL-INSPECTION-2026-02", "Source and scope") + ".</p>" },
    { h: "After the permit is issued", html:
      "<p>Print the permit, keep the itinerary and original endorsed health " +
      "certificate with the traveller, and reconfirm the operating airline&rsquo;s " +
      "boarding requirements. The reviewed source does not establish a universal " +
      "separate &lsquo;confirm arrival three days ahead&rsquo; rule; follow a station-specific " +
      "instruction only when that AQS provides it directly.</p>" },
    { h: "What comes next", html:
      "<p>With the permit in hand, book the flight under " +
      '<a href="/bring-pet-to-thailand/airline-pet-policies.html">airline pet policies</a>, ' +
      "then read " +
      '<a href="/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html">what happens on arrival</a>. ' +
      "A <a href=\"/pet-relocation/\">pet relocation agent</a> is optional; verify all " +
      "regulated instructions directly with the named authority.</p>" }
  ],
  faqs: [
    ["When should I apply for the import permit?",
     "<p>For the published USA-origin instruction, apply at least seven days and no more than 60 days before departure; the source recommends around 30 days. First complete the 21-day primary-vaccine wait, then allow 5&ndash;7 Thailand business days after a complete application. Other origins should confirm the window with their AQS. " + claimLink("TH-IMPORT-WINDOW-2026-02", "Window source") + "; " + claimLink("TH-IMPORT-SEQUENCE-2026-02", "sequence source") + ".</p>"],
    ["Do I need to be in Thailand to apply?",
     "<p>The reviewed USA-origin instruction submits before travel to the responsible AQS. Other origins and routes should obtain the current intake method directly; an optional agent does not change the authority&rsquo;s rules.</p>"],
    ["Can I apply at the airport on arrival instead?",
     "<p>Do not assume that option exists. Follow the responsible AQS&rsquo;s written process and obtain every document the operating airline requires before check-in.</p>"],
    ["How long is the import permit valid once issued?",
     "<p>The reviewed USA-origin instruction uses a window no more than 60 days before departure, but this page does not generalise that to every route. Confirm the issued permit&rsquo;s validity with the responsible AQS.</p>"],
    ["Must the import permit match my arrival airport?",
     "<p>Use the AQS responsible for the port where the animal will be presented. The reviewed DLD map does not list a U-Tapao/Rayong airport AQS; obtain written DLD confirmation before routing there. " + claimLink("TH-AQS-MAP-2025-10", "DLD AQS map") + ".</p>"]
  ],
  related: [
    { name: "Arrival in Thailand", path: "/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html", desc: "What happens when you land." },
    { name: "U-Tapao or Bangkok?", path: "/bring-pet-to-thailand/u-tapao-airport-pets.html", desc: "Which airport your permit targets." },
    { name: "Health certificate", path: "/bring-pet-to-thailand/health-certificate.html", desc: "The document the permit relies on." },
    { name: "Pet relocation agents", path: "/pet-relocation/", desc: "Agents who file the permit for you." }
  ]
}));

/* ---------------- AIRLINE POLICIES ---------------- */
pages.push(importStep({
  path: "/bring-pet-to-thailand/airline-pet-policies.html",
  title: "Bring a Pet to Thailand: Airline & Crate Rules | PattayaPets",
  desc: "How pets fly to Thailand — in-cabin, as checked baggage or as cargo — " +
    "IATA travel crates, snub-nosed breed rules, and how to book.",
  crumb: "Airline pet policies",
  breadcrumbs: SUB,
  eyebrow: "Bringing a pet to Thailand · Step 5",
  h1: "Airline pet policies and travel crates",
  lede: "The paperwork gets your pet permission to enter Thailand. The airline " +
    "decides how it actually flies — and policies vary a lot.",
  verify: VERIFY,
  updated: "2026-08-01",
  sections: [
    { h: "The three ways a pet flies", html:
      "<p>There are broadly three options, and not every airline offers each:</p>" +
      "<ul><li><strong>In the cabin</strong> — only where the animal plus carrier " +
      "meets that operating airline&rsquo;s route-specific limit and fits under the " +
      "seat. There is no universal cabin-weight allowance.</li>" +
      "<li><strong>As checked baggage</strong> — your pet flies in the hold, in " +
      "an approved crate, on the same flight as you, booked through the " +
      "airline&rsquo;s special-baggage service.</li>" +
      "<li><strong>As manifest cargo</strong> — your pet is booked as freight, " +
      "large dogs or when travelling separately. " +
      "<a href=\"/pet-relocation/\">Pet relocation agents</a> usually arrange this.</li></ul>" },
    { h: "Reviewed airline policy snapshot", html: airlinePolicyTable() },
    { h: "IATA-compliant travel crates", html:
      "<p>For dogs and cats covered by <strong>IATA Container Requirement 1, " +
      "Edition 52 (January 2026)</strong>, the acceptance check includes rigid " +
      "construction, metal fasteners, the specified ventilation distribution, secure " +
      "welded mesh/openings that prevent noses and paws protruding, handling spacers, " +
      "absorbent bedding, a water container, labels, and dimensions that let the animal " +
      "stand or sit erect, turn and lie naturally. Snub-nosed animals require dimensions " +
      "10% larger. " + claimLink("IATA-CR1-ED52-2026-01", "Read current CR1") + ".</p>" +
      "<p>IATA does not approve crate brands. The operating airline decides whether " +
      "the exact container and animal are accepted, so obtain written route-specific " +
      "confirmation before purchase and again before travel.</p>" },
    { h: "Snub-nosed breeds and the heat", html:
      "<p>Many airlines restrict or refuse <strong>brachycephalic (snub-nosed) " +
      "breeds</strong> — French Bulldogs, Pugs, Persian cats and similar — " +
      "because they are vulnerable to breathing problems and heat stress in the " +
      "hold. Some airlines also embargo hold travel during the hottest months. " +
      "If you own a snub-nosed breed, check this before anything else &mdash; see our " +
      "<a href=\"/bring-pet-to-thailand/snub-nosed-breeds-flying.html\">snub-nosed breeds &amp; flying</a> guide.</p>" },
    { h: "What comes next", html:
      "<p>With the flight booked, read " +
      "<a href=\"/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html\">what happens on arrival</a> " +
      "and budget the move in our " +
      "<a href=\"/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html\">cost guide</a>. " +
      "The Thai-side permit is the " +
      "<a href=\"/bring-pet-to-thailand/import-permit-thailand-dld.html\">DLD import permit</a>.</p>" },
    { h: "Booking the pet", html:
      "<p>Use the reviewed timing only as the policy&rsquo;s stated request point, not " +
      "as a safe planning buffer or a promise of capacity. Contact the operating airline " +
      "when your dates are firm, identify every operating sector, and obtain written " +
      "acceptance for the animal, container, route and aircraft before paying. A passenger " +
      "ticket does not by itself confirm pet carriage.</p>" }
  ],
  faqs: [
    ["Which airlines carry pets to Thailand?",
     "<p>The reviewed table gives a source-dated starting point for " +
       AIRLINE_POLICY_SNAPSHOT.length + " airlines, but it is not a live flight or route " +
       "inventory. Open the official policy and ask every operating carrier to accept the " +
       "exact animal, container, route, aircraft and date in writing.</p>"],
    ["Can my dog sit with me in the cabin?",
     "<p>Only the operating airline can decide. The table identifies reviewed ordinary-pet policies that publish cabin as a mode; it does not prove cabin acceptance for a specific dog, carrier, route, aircraft or date.</p>"],
    ["Do I need an IATA-compliant crate?",
     "<p>For hold or cargo travel, follow the current IATA container requirement and the operating airline&rsquo;s route-specific acceptance rules. IATA does not approve brands, and this checklist is not an acceptance guarantee.</p>"],
    ["When should I book my pet's flight space?",
     "<p>Read the exact request timing in the reviewed table, then contact the operating airline as soon as your dates are firm. A published deadline is not a safe buffer or a capacity guarantee. Confirm the route, mode, container, check-in and price in writing before payment.</p>"],
    ["Can I sedate my pet for the flight?",
     "<p>Do not give a sedative or other medicine on this page&rsquo;s authority. Ask your veterinarian about the individual animal and obtain the operating airline&rsquo;s current written medication and fitness conditions before travel.</p>"]
  ],
  related: [
    { name: "Snub-nosed breeds & flying", path: "/bring-pet-to-thailand/snub-nosed-breeds-flying.html", desc: "Airline restrictions for flat-faced breeds." },
    { name: "Arrival in Thailand", path: "/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html", desc: "Landing and the quarantine check." },
    { name: "What it costs", path: "/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html", desc: "The flight is usually the biggest line." },
    { name: "Pet relocation agents", path: "/pet-relocation/", desc: "Agents who book pet cargo for you." }
  ]
}));

/* ---------------- ARRIVAL ---------------- */
pages.push(importStep({
  path: "/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html",
  title: "Bring a Pet to Thailand: Suvarnabhumi Arrival | PattayaPets",
  desc: "What happens when your pet lands in Thailand: the Animal Quarantine " +
    "Station inspection, what officers check, and getting from the airport to Pattaya.",
  crumb: "Arrival in Thailand",
  breadcrumbs: SUB,
  eyebrow: "Bringing a pet to Thailand · Step 6",
  h1: "Arriving in Thailand with your pet",
  lede: "If the paperwork is right, arrival is the straightforward part. Here is " +
    "what to expect at the airport and on the road down to Pattaya.",
  verify: VERIFY,
  sections: [
    { h: "Which airport", html:
      "<p>Most pets arrive at <strong>Suvarnabhumi Airport (BKK)</strong> in " +
      "Bangkok, which has the main Animal Quarantine Station. Don Muang (DMK) " +
      "also handles animals. Pattaya is roughly a <strong>90-minute to " +
      "two-hour drive</strong> south of Suvarnabhumi.</p>" },
    { h: "The Animal Quarantine Station check", html:
      "<p>On arrival your pet is taken to the airport&rsquo;s Animal Quarantine " +
      "Station. Officers will:</p>" +
      "<ul><li>check your import permit, health certificate and vaccination " +
      "records;</li>" +
      "<li>scan the microchip and confirm the number matches the paperwork;</li>" +
      "<li>look your pet over for visible signs of illness;</li>" +
      "<li>collect any arrival fees due.</li></ul>" +
      "<p>If everything is in order, pets are normally released to you the same " +
      "day &mdash; there is no routine quarantine. See " +
      "<a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">pet quarantine in " +
      "Thailand</a> for when a hold can happen.</p>" },
    { h: "If something is missing", html:
      "<p>A quarantine officer has the authority to detain a pet if paperwork is " +
      "incomplete or the animal shows signs of disease. The published requirements " +
      "allow return to origin or detention for further action, with costs borne by " +
      "the importer; they do not give one dependable duration. Bring printed originals " +
      "of everything, organised and easy to hand over.</p>" },
    { h: "Getting from the airport to Pattaya", html:
      "<p>Plan the onward journey before you fly. Arrange a pet-friendly private " +
      "transfer, a <a href=\"/pet-relocation/\">relocation agent&rsquo;s</a> vehicle, " +
      "or read <a href=\"/owning-a-pet-in-pattaya/getting-to-the-vet.html\">getting your " +
      "pet to the vet</a> for transport options &mdash; ordinary airport taxis may " +
      "refuse an animal, especially a large one in a crate. Bring " +
      "water and, after a long flight, expect your pet to be tired and thirsty " +
      "rather than lively.</p>"+
      "<p>Once you are settled, our guide to " +
      "<a href=\"/owning-a-pet-in-pattaya/\">owning a pet in Pattaya</a> covers " +
      "the next steps, and the <a href=\"/vets/\">directory of vets</a> helps " +
      "you find a clinic near your new home.</p>" }
  ],
  faqs: [
    ["Will my pet be put in quarantine?",
     "<p>DLD decides clearance, detention or other action after inspecting the animal and original documents. The reviewed source does not guarantee same-day release. " + claimLink("TH-ARRIVAL-INSPECTION-2026-02", "Source and scope") + ".</p>"],
    ["How do I get my pet from Bangkok airport to Pattaya?",
     "<p>Arrange a pet-friendly transfer in advance and obtain a route-specific quote and collection plan. Do not rely on an unsourced fixed drive time; traffic and cargo/hand-carried collection points differ.</p>"],
    ["How long does AQS clearance take?",
     "<p>The reviewed authority does not publish a dependable clearance duration. Have every original and printed permit ready, and do not book a tight onward connection on this page&rsquo;s authority.</p>"],
    ["What fees do I pay on arrival?",
     "<p>The AQS inspection fee is currently 500 baht (confirm with the station). Budget for a pet-friendly transfer separately — ordinary taxis may refuse animals.</p>"],
    ["Can I fly into U-Tapao instead of Suvarnabhumi?",
     "<p>The reviewed DLD station map and the scoped USA-origin airport instruction do not establish a U-Tapao pet-import AQS. That absence is not proof of impossibility; obtain written DLD confirmation before booking. See <a href=\"/bring-pet-to-thailand/u-tapao-airport-pets.html\">U-Tapao and pets</a>.</p>"]
  ],
  related: [
    { name: "Pet quarantine in Thailand", path: "/bring-pet-to-thailand/thailand-pet-quarantine.html", desc: "When pets do and do not quarantine on arrival." },
    { name: "U-Tapao or Bangkok?", path: "/bring-pet-to-thailand/u-tapao-airport-pets.html", desc: "Which airport to fly into for Pattaya." },
    { name: "Microchipping your pet", path: "/owning-a-pet-in-pattaya/microchipping-your-pet.html", desc: "Settle in with ID from day one." },
    { name: "Owning a pet in Pattaya", path: "/owning-a-pet-in-pattaya/", desc: "Settling in once you arrive." }
  ]
}));

/* ---------------- COST ---------------- */
pages.push(importStep({
  path: "/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html",
  title: "Cost to Bring a Pet to Thailand (2026) | PattayaPets",
  desc: "The cost components of bringing a dog or cat to Thailand, the one sourced " +
    "Thai arrival fee, and how to obtain route-specific written quotes.",
  crumb: "What it costs",
  breadcrumbs: SUB,
  eyebrow: "Bringing a pet to Thailand · Budget",
  h1: "What it costs to bring a pet to Thailand",
  lede: "There is no verified universal price. Obtain current quotes for each " +
    "component of the exact animal, route, carrier and optional service scope.",
  verify: "No disclosed market sample supports a total price range here. Use the " +
    "itemised components below and obtain dated written quotes for the exact animal, " +
    "route, carrier and service scope.",
  sections: [
    { h: "Where the money goes", html:
      "<p>A pet move is really a stack of separate costs:</p>" +
      "<ul><li><strong>Microchip</strong> &mdash; if the pet is not already chipped. See " +
      "<a href=\"/bring-pet-to-thailand/microchip-requirements.html\">microchip requirements</a>.</li>" +
      "<li><strong>Vaccinations</strong> &mdash; rabies and the other required vaccines; obtain a veterinary quote. See " +
      "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">rabies &amp; titer test</a>.</li>" +
      "<li><strong>Rabies titer test</strong> &mdash; only for a named destination rule that requires it; obtain a laboratory quote.</li>" +
      "<li><strong>Health certificate &amp; government endorsement</strong> &mdash; the vet exam plus the official endorsement fee. See " +
      "<a href=\"/bring-pet-to-thailand/health-certificate.html\">health certificate</a>.</li>" +
      "<li><strong>IATA travel crate</strong> &mdash; sized to the animal; obtain a product-specific quote.</li>" +
      "<li><strong>The flight</strong> &mdash; quote the actual animal, crate, route and transport mode. See " +
      "<a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">airline pet policies</a>.</li>" +
      "<li><strong>Thai arrival licence</strong> &mdash; the sourced fee is listed below. See " +
      "<a href=\"/bring-pet-to-thailand/import-permit-thailand-dld.html\">DLD import permit</a>.</li>" +
      "<li><strong>Relocation agent</strong> — optional, and covered below.</li>" +
      "<li><strong>Airport-to-Pattaya transfer</strong> — a pet-friendly vehicle on arrival.</li></ul>" },
    { h: "What can be priced from a primary source", html:
      "<p>The current Thai consular guide states an arrival import-licence fee of " +
      "<strong>500&nbsp;baht per animal</strong>. " +
      claimLink("TH-ARRIVAL-INSPECTION-2026-02", "Source and scope") + ". All other " +
      "components depend on the origin authority, veterinarian, laboratory, crate, " +
      "operating airline and optional service provider. Keep their quotes separate " +
      "rather than adding incomparable anecdotes into a supposed total.</p>" },
    { h: "Agent or do it yourself?", html:
      "<p>A <a href=\"/pet-relocation/\">pet relocation agent</a> is optional. " +
      "PattayaPets has not independently reviewed an agent&rsquo;s outcomes and cannot " +
      "say one removes risk or saves money. Ask for a dated scope that separates " +
      "government, veterinary, laboratory, crate, airline, ground-transport and " +
      "service fees; verify regulated instructions with the named authority yourself.</p>" },
    { h: "What comes next", html:
      "<p>Once you have a budget, read " +
      "<a href=\"/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html\">what happens on arrival</a> " +
      "and " +
      "<a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">pet quarantine in Thailand</a> " +
      "so you know what the AQS check involves. If you might leave again, plan the " +
      "<a href=\"/take-pet-out-of-thailand/export-process.html\">export process</a> early too.</p>" }
  ],
  faqs: [
    ["What is the most expensive part?",
     "<p>No disclosed like-for-like sample supports a ranking. Obtain separate current quotes for the veterinary work, laboratory, crate, airline, ground transport and any optional service.</p>"],
    ["Is it cheaper to do it without an agent?",
     "<p>No disclosed comparison here proves that. Compare written like-for-like quotes with the tasks you would otherwise perform, and treat the provider as optional rather than as an accuracy guarantee.</p>"],
    ["How much does the DLD import permit cost?",
     "<p>The reviewed USA-origin Thai guide states a 500-baht import-licence fee per animal on arrival. Confirm the amount and any other route-specific charge directly with the responsible AQS.</p>"],
    ["Does pet size change the cost a lot?",
     "<p>Airlines quote from their own route, mode, animal and container rules. Measure the animal as the airline directs and request the written quote for the compliant crate.</p>"],
    ["Are there hidden fees on arrival?",
     "<p>This page has no verified sample of additional arrival charges. Ask the AQS, carrier or cargo handler and ground-transfer provider for itemised written charges before travel.</p>"]
  ],
  related: [
    { name: "Pet relocation agents", path: "/pet-relocation/", desc: "Specialists who quote and manage the move." },
    { name: "Airline pet policies", path: "/bring-pet-to-thailand/airline-pet-policies.html", desc: "Obtain the route-specific transport quote." },
    { name: "U-Tapao or Bangkok?", path: "/bring-pet-to-thailand/u-tapao-airport-pets.html", desc: "Airport choice affects transfer cost." },
    { name: "Cost of owning a pet", path: "/owning-a-pet-in-pattaya/cost-of-owning-a-pet.html", desc: "Budgeting after your pet arrives." }
  ]
}));

/* ---------------- COUNTRY PAGES ---------------- */
const IMP_STEPS =
  "<a href=\"/bring-pet-to-thailand/microchip-requirements.html\">microchip</a>, " +
  "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">rabies</a>, " +
  "<a href=\"/bring-pet-to-thailand/health-certificate.html\">health certificate</a> and " +
  "<a href=\"/bring-pet-to-thailand/import-permit-thailand-dld.html\">DLD import permit</a>";

const COUNTRY_RELATED = [
  { name: "The full process", path: "/bring-pet-to-thailand/", desc: "Every step, in order." },
  { name: "DLD import permit", path: "/bring-pet-to-thailand/import-permit-thailand-dld.html", desc: "The Thai-side permit you apply for." },
  { name: "Microchip requirements", path: "/bring-pet-to-thailand/microchip-requirements.html", desc: "Certificate and identifier matching for the Thai file." },
  { name: "Airline pet policies", path: "/bring-pet-to-thailand/airline-pet-policies.html", desc: "Cabin, checked baggage or cargo, and travel crates." },
  { name: "Arriving in Thailand", path: "/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html", desc: "The quarantine-station check on landing." },
  { name: "What it costs", path: "/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html", desc: "Budget for the whole move." },
  { name: "Rabies & titer test", path: "/bring-pet-to-thailand/rabies-vaccination-titer-test.html", desc: "Why the titer test matters for the return trip." },
  { name: "The export process", path: "/take-pet-out-of-thailand/export-process.html", desc: "The Thai DLD side when you leave." }
];

function countryRelated(slug) {
  return importCountryRelated(slug, COUNTRY_RELATED, "The return journey and why it is harder.");
}

function countryPage(o) {
  var sections = attachReturnExportLink((o.sections || []).slice(), o.slug);
  if (!o.skipRichness) {
    sections.push(REGULATED_IMPORT_PATTAYA_ARRIVAL);
    sections.push(REGULATED_IMPORT_PATTAYA_LIFE);
  }
  sections.push({ h: "Official sources", html: (o.officialExtra || "") + OFFICIAL });
  return article({
    path: "/bring-pet-to-thailand/" + o.slug + ".html",
    title: o.title,
    desc: o.desc,
    crumb: o.crumb,
    breadcrumbs: SUB,
    eyebrow: "Bringing a pet to Thailand · By country",
    h1: o.h1,
    lede: o.lede,
    verify: VERIFY,
    updated: o.updated || "2026-06-01",
    sections: sections,
    faqs: rb.mergeFaqs(o.faqs, REGULATED_IMPORT_EXTRA_FAQS),
    related: o.related || countryRelated(o.slug)
  });
}

const TH_DOCS_TABLE =
  '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
  '<th scope="col">Document</th><th scope="col">What it is</th></tr></thead><tbody>' +
  '<tr><th scope="row">DLD import permit</th><td>Form <strong>R1/1</strong>. Obtain the responsible AQS&rsquo;s current intake method and window. The reviewed USA-origin instruction uses an AQS submission window of 7&ndash;60 days before departure and recommends about 30 days, but that is not presented here as a universal origin-country rule. ' + claimLink("TH-IMPORT-WINDOW-2026-02", "Source and scope") + '.</td></tr>' +
  '<tr><th scope="row">Microchip certificate</th><td>Implantation certificate; the chip number must match form R1/1 and every vaccination/health record. The reviewed Thai source does not state a universal ISO or chip-before-rabies rule. ' + claimLink("TH-IMPORT-ID-2026-02", "Source") + '.</td></tr>' +
  '<tr><th scope="row">Vaccination records</th><td>In English. Dogs: rabies, distemper, hepatitis, parvovirus, leptospirosis (or negative leptospirosis test within 30 days). Cats: rabies and feline panleukopenia. After all primary vaccines, wait <strong>21 days before applying</strong>; documented boosters are exempt with prior records. Allow <strong>5&ndash;7 Thailand business days</strong> after a complete application. ' + claimLink("TH-IMPORT-SEQUENCE-2026-02", "Source and scope") + '.</td></tr>' +
  '<tr><th scope="row">Government-endorsed health certificate</th><td>Your origin country&rsquo;s official export certificate &mdash; endorsed by APHA, USDA APHIS, DAFF, etc.</td></tr>' +
  '<tr><th scope="row">Your passport</th><td>Original at the AQS (or the person collecting a cargo shipment).</td></tr>' +
  '<tr><th scope="row">Pet photo</th><td>Colour, face clearly visible (for the permit application).</td></tr>' +
  '<tr><th scope="row">Flight booking</th><td>Itinerary showing date, flight number and arrival airport.</td></tr>' +
  '</tbody></table></div>';

const TH_ARRIVAL =
  "<p>DLD decides clearance, detention or other action after inspecting the animal " +
  "and original documents; the reviewed source does not guarantee same-day release. " +
  "The current USA-origin guide says the AQS issues Forms R-6 and R-7 and charges " +
  "<strong>500&nbsp;baht</strong> per animal; confirm the fee for the actual route. " +
  claimLink("TH-ARRIVAL-INSPECTION-2026-02", "Source and scope") + ". " +
  "No reviewed source establishes a universal separate three-day arrival-confirmation rule; " +
  "follow any station-specific instruction the AQS sends with the permit. See " +
  '<a href="/bring-pet-to-thailand/thailand-pet-quarantine.html">pet quarantine in Thailand</a> ' +
  "and " +
  '<a href="/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html">arriving at Suvarnabhumi</a>.</p>';

const TH_FAILS =
  "<ul>" +
  "<li><strong>Wrong permit sequence</strong> &mdash; starting the application before the 21-day wait after all primary vaccines, or omitting prior records needed for the booster exception.</li>" +
  "<li><strong>Permit timing</strong> &mdash; applied too early (expires before you fly) or too late (AQS cannot process in time).</li>" +
  "<li><strong>Airline vs government</strong> &mdash; confirm the AQS submission method and separately obtain the operating airline&rsquo;s pre-flight document list; neither is evidence of the other&rsquo;s rule.</li>" +
  "<li><strong>Health certificate window</strong> &mdash; endorsed certificate expires before you land; a delayed flight can mean starting again.</li>" +
  "<li><strong>Cargo arrival hours</strong> &mdash; pets shipped as cargo may only be collected during AQS weekday business hours at some airports.</li>" +
  "</ul>";

pages.push(countryPage({
  slug: "from-uk", crumb: "From the UK",
  title: "Bring Pet to Thailand from the UK (2026) | PattayaPets",
  desc: "UK to Thailand pet import: EHC 2917, APHA timeline, DLD permit checklist, " +
    "Bangkok arrival and why to do the rabies titer test before you leave.",
  h1: "Bringing a pet to Thailand from the UK",
  lede: "What is UK-specific is export certificate <strong>2917</strong>, " +
    "who certifies it, and what you must plan now if you ever want to come home with your pet.",
  updated: "2026-08-01",
  officialExtra:
    "<p><strong>UK sources:</strong> " +
    "<a href=\"https://www.gov.uk/export-health-certificates/export-cats-and-dogs-to-thailand-certificate-2917\" " +
    "target=\"_blank\" rel=\"noopener\">EHC 2917 (cats and dogs to Thailand)</a>; " +
    "<a href=\"https://www.gov.uk/guidance/get-an-export-health-certificate\" " +
    "target=\"_blank\" rel=\"noopener\">how to get an export health certificate</a>; " +
    "<a href=\"https://www.gov.uk/bring-pet-to-great-britain\" " +
    "target=\"_blank\" rel=\"noopener\">bringing a pet to Great Britain</a> " +
    "(return journey).</p>",
  sections: [
    { h: "The timeline — what to do when", html:
      "<p>Build backwards from your flight date. If you may return to the UK, add " +
      "the <strong>rabies titer test</strong> at the start &mdash; not the end.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">UK / Thailand</th></tr></thead><tbody>' +
      '<tr><th scope="row">Before leaving GB (if return is possible)</th>' +
      '<td>Confirm the microchip and rabies record; consider a qualifying <a href="/bring-pet-to-thailand/rabies-vaccination-titer-test.html">rabies antibody test</a> sampled at least 30 days after vaccination so the current pre-departure exception may apply. ' + claimLink("GB-RABIES-BLOOD-2026-08", "GOV.UK source") + '</td>' +
      '<td>Your vet; approved lab</td></tr>' +
      '<tr><th scope="row">Before the Thai permit application</th>' +
      '<td>Complete all primary vaccines, then wait <strong>21 days</strong>; documented boosters are exempt with prior records. Allow 5&ndash;7 Thailand business days after the complete application. ' + claimLink("TH-IMPORT-SEQUENCE-2026-02", "Source and scope") + '</td>' +
      '<td>Your vet</td></tr>' +
      '<tr><th scope="row">After the primary-vaccine wait</th>' +
      '<td>Apply for the <a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a> (form R1/1) using the responsible AQS&rsquo;s confirmed channel; allow 5&ndash;7 Thailand business days for a complete application</td>' +
      '<td>DLD / Suvarnabhumi AQS</td></tr>' +
      '<tr><th scope="row">2&ndash;3 weeks before</th>' +
      '<td>Book pet space on the flight; confirm the airline requires the import permit before boarding</td>' +
      '<td>Airline</td></tr>' +
      '<tr><th scope="row">7+ working days before export</th>' +
      '<td>Apply for <strong>export health certificate 2917</strong> via APHA&rsquo;s online service; nominate an Official Veterinarian (OV)</td>' +
      '<td>APHA / DAERA (NI)</td></tr>' +
      '<tr><th scope="row">Final 7&ndash;10 days</th>' +
      '<td>OV examines your pet and completes EHC 2917; certificate issued inside its validity window</td>' +
      '<td>Official Veterinarian</td></tr>' +
      '<tr><th scope="row">Arrival day</th>' +
      '<td>AQS inspection at the airport; Forms R-6/R-7 issued; 500&nbsp;baht fee</td>' +
      '<td>Suvarnabhumi AQS</td></tr>' +
      '</tbody></table></div>' +
      "<p>Full step pages: " + IMP_STEPS + ".</p>" },
    { h: "The UK export certificate (EHC 2917)", html:
      "<p>Great Britain does not use the EU pet passport for exports to Thailand. " +
      "You need the country-specific export health certificate " +
      "<strong>EHC 2917</strong> &mdash; &ldquo;Export cats and dogs to Thailand&rdquo; " +
      "(version 3 guidance notes, updated May 2026 on GOV.UK).</p>" +
      "<p><strong>England, Scotland and Wales:</strong> apply through APHA&rsquo;s " +
      "<a href=\"https://www.gov.uk/export-health-certificates/export-cats-and-dogs-to-thailand-certificate-2917\" " +
      "target=\"_blank\" rel=\"noopener\">EHC online service</a>. You nominate " +
      "an <strong>Official Veterinarian (OV)</strong> who will examine your pet and " +
      "sign the certificate. APHA typically returns the EHC within <strong>seven " +
      "working days</strong> of your export date, or within one working day if you " +
      "are exporting sooner &mdash; but do not leave it to the last minute.</p>" +
      "<p><strong>Northern Ireland:</strong> apply through " +
      "<strong>DAERA</strong> via the DECS online process, not the GB EHC Online " +
      "service.</p>" +
      "<p>The EHC must match your Thai import permit and vaccination records exactly " +
      "&mdash; microchip number, vaccine dates and breed must line up across every " +
      "document. Read the guidance notes for EHC 2917 for the certificate&rsquo;s " +
      "validity period and any breed or age conditions before your OV appointment.</p>" },
    { h: "Documents Thailand expects", html:
      "<p>These are the papers the DLD asks for regardless of origin country:</p>" +
      TH_DOCS_TABLE + TH_ARRIVAL },
    { h: "Plan the UK return before you leave", html:
      "<p>This is the single most important UK-specific point. Thailand is an " +
      "<strong>&lsquo;unlisted&rsquo; country</strong> under UK pet-travel rules. To " +
      "bring a dog or cat <em>back into Great Britain</em> from Thailand you need:</p>" +
      "<ul>" +
      "<li>A current rabies vaccination</li>" +
      "<li>A <strong>rabies titer test</strong> (blood sample at least 30 days after vaccination)</li>" +
      "<li>A <strong>three-month wait</strong> from the date of that blood sample before entry</li>" +
      "<li>For <strong>dogs</strong>, a vet-administered tapeworm treatment no less than 24 hours and no more than 120 hours before GB entry</li>" +
      "<li>Travel on a currently <strong>approved route and company</strong>; an ordinary pet arriving by air travels as cargo unless a stated exception applies</li>" +
      "</ul>" +
      "<p>The practical lesson: if there is any chance you will return with your pet, " +
      "have the titer test done <strong>while you are still in the UK</strong>, with " +
      "continuous rabies cover and the result recorded in the required document. That may qualify " +
      "for GOV.UK&rsquo;s pre-departure exception; uncertain histories must use the standard route. See our guide to " +
      "<a href=\"/take-pet-out-of-thailand/to-uk.html\">exporting a pet from Thailand to the UK</a>. " +
      claimLink("GB-RABIES-BLOOD-2026-08", "Rabies-test source") + "; " +
      claimLink("GB-TAPEWORM-2026-08", "Dog tapeworm source") + "; " +
      claimLink("GB-AIR-ROUTE-2026-08", "Air-route source") + ".</p>" +
      '<div class="callout callout-note"><div class="ch">Thailand does not require the titer test on the way in</div>' +
      "<p>From the UK, Thailand generally does <em>not</em> ask for a titer test to " +
      "enter. You do it for your own future &mdash; not because Bangkok demands it on arrival.</p></div>" },
    { h: "Common mistakes British owners make", html: TH_FAILS +
      "<ul>" +
      "<li><strong>Assuming the EU pet passport is enough</strong> &mdash; it is not valid for Thailand export; you need EHC 2917.</li>" +
      "<li><strong>Skipping the titer test</strong> &mdash; then discovering the three-month wait when a job or family emergency calls you home.</li>" +
      "<li><strong>Wrong AQS email</strong> &mdash; apply to the quarantine station at the airport you actually land at (Suvarnabhumi for most Pattaya arrivals).</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Does Thailand need a titer test for a pet from the UK?",
     "<p>The detailed Thai instruction reviewed here is scoped to USA-origin dogs, cats and rabbits, so it does not prove the UK-origin answer. Confirm the UK-origin document list with the responsible Thai AQS. Separately, a qualifying pre-departure test can preserve the GOV.UK return exception when its documentation and vaccination-continuity conditions are met. " + claimLink("GB-RABIES-BLOOD-2026-08", "GOV.UK source") + ".</p>"],
    ["Which export certificate do I need from the UK?",
     "<p>Export health certificate <strong>2917</strong> for cats and dogs to Thailand, applied for through APHA (or DAERA in Northern Ireland) and signed by an Official Veterinarian. Confirm you are using the latest version on GOV.UK.</p>"],
    ["How long before the flight should I apply for the Thai import permit?",
     "<p>Complete all primary vaccines and the 21-day wait first; documented boosters are exempt with prior records. Then use the responsible AQS&rsquo;s confirmed application window and allow 5&ndash;7 Thailand business days after a complete application. The detailed source is scoped to USA-origin dogs, cats and rabbits, so UK travellers should confirm the route-specific intake. " + claimLink("TH-IMPORT-SEQUENCE-2026-02", "Source and scope") + ".</p>"],
    ["Will my pet be quarantined on arrival in Thailand?",
     "<p>DLD decides clearance, detention or other action after inspecting the animal and original documents; the reviewed source does not guarantee same-day release. See our <a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">quarantine guide</a>.</p>"],
    ["Can I fly into U-Tapao instead of Bangkok?",
     "<p>The reviewed DLD map does not list a U-Tapao/Rayong airport AQS. That is a verification gap, not proof that no later case-specific service exists; obtain written DLD confirmation before booking. See <a href=\"/bring-pet-to-thailand/u-tapao-airport-pets.html\">U-Tapao or Bangkok?</a></p>"]
  ]
}));

pages.push(countryPage({
  slug: "from-usa", crumb: "From the USA",
  title: "Bring Pet to Thailand from the USA (2026) | PattayaPets",
  desc: "USA to Thailand pet import: USDA APHIS endorsement, DLD permit, 10-day " +
    "certificate window, document checklist and CDC rules if you return later.",
  h1: "Bringing a pet to Thailand from the USA",
  lede: "The Thai side is the same for every nationality. From the United States, " +
    "what catches people out is the <strong>two-step US endorsement</strong> " +
    "(accredited vet, then USDA APHIS), the <strong>10-day certificate window</strong>, " +
    "and the CDC&rsquo;s separate rules if a dog ever re-enters the US.",
  updated: "2026-08-01",
  officialExtra:
    "<p><strong>US sources:</strong> " +
    "<a href=\"https://www.aphis.usda.gov/pet-travel/us-to-another-country-export\" " +
    "target=\"_blank\" rel=\"noopener\">USDA APHIS pet export</a>; " +
    "<a href=\"https://www.cdc.gov/importation/bringing-an-animal-into-the-us/index.html\" " +
    "target=\"_blank\" rel=\"noopener\">CDC animal import rules</a>; " +
    "<a href=\"https://www.cdc.gov/importation/dogs/high-risk-countries.html\" " +
    "target=\"_blank\" rel=\"noopener\">CDC dog-rabies risk list</a>; " +
    "<a href=\"https://www.cdc.gov/importation/dogs/foreign-vaccinated-high-risk-countries.html\" " +
    "target=\"_blank\" rel=\"noopener\">foreign-vaccinated high-risk dog pathway</a>; " +
    "Thai embassy guide (revised January 2025) for the US-specific checklist.</p>",
  sections: [
    { h: "The timeline — what to do when", html:
      "<p>The Thai Royal Consulate-General in Los Angeles publishes a US-specific " +
      "checklist (revised January 2025). The order matters: import permit first, " +
      "then the endorsed health certificate in the final days.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Who</th></tr></thead><tbody>' +
      '<tr><th scope="row">Before leaving (if US return is possible)</th>' +
      '<td>Preserve the microchip and rabies records, check the dog&rsquo;s likely CDC pathway and do not assume a titer is universally required or sufficient. Thailand is currently on CDC&rsquo;s high-risk list. ' + claimLink("US-CDC-THAILAND-RISK-2026-08", "CDC source") + '</td>' +
      '<td>USDA-accredited vet</td></tr>' +
      '<tr><th scope="row">Before the Thai permit application</th>' +
      '<td>Complete all primary vaccines, then wait <strong>21 days</strong>; documented boosters are exempt with prior records. Allow 5&ndash;7 Thailand business days after the complete application. ' + claimLink("TH-IMPORT-SEQUENCE-2026-02", "Source and scope") + '</td>' +
      '<td>Accredited vet</td></tr>' +
      '<tr><th scope="row">~30 days before departure</th>' +
      '<td>Email DLD import permit application (R1/1 + passport copy, photo, vaccinations, itinerary) to the AQS at your arrival airport</td>' +
      '<td>DLD AQS (e.g. qsap_bkk_import@dld.go.th for Suvarnabhumi)</td></tr>' +
      '<tr><th scope="row">After permit arrives (5&ndash;7 Thailand business days)</th>' +
      '<td>Book flight with confirmed pet space; verify airline requires the permit email before check-in</td>' +
      '<td>Airline</td></tr>' +
      '<tr><th scope="row">Within 10 days of travel</th>' +
      '<td>USDA-accredited vet issues the Official Health Certificate (OHC); submit to <strong>USDA APHIS</strong> for physical endorsement (stamp)</td>' +
      '<td>Vet + APHIS (often via VEHCS)</td></tr>' +
      '<tr><th scope="row">Before departure</th>' +
      '<td>Land in Thailand within <strong>10 days of the USDA endorsement date</strong> on the OHC</td>' +
      '<td>You</td></tr>' +
      '<tr><th scope="row">Arrival</th>' +
      '<td>Present <strong>original</strong> endorsed OHC, original permit printout, passport, vaccination records at the AQS</td>' +
      '<td>Suvarnabhumi carousel area / cargo AQS</td></tr>' +
      '</tbody></table></div>' +
      "<p>Step-by-step pages: " + IMP_STEPS + ".</p>" },
    { h: "The US side: accredited vet and USDA endorsement", html:
      "<p>Two separate steps, often confused:</p>" +
      "<ol>" +
      "<li>A <strong>USDA-accredited veterinarian</strong> examines your pet and " +
      "completes the <strong>Official Health Certificate (OHC)</strong> for Thailand.</li>" +
      "<li><strong>USDA APHIS</strong> physically <strong>endorses</strong> that " +
      "certificate &mdash; stamps and countersigns the original. Electronic copies " +
      "alone are <strong>not</strong> accepted at the Thai AQS; you need the " +
      "original stamped document.</li>" +
      "</ol>" +
      "<p>Most exporters use APHIS&rsquo;s online <strong>VEHCS</strong> system to " +
      "submit the certificate for endorsement, then receive the stamped original " +
      "before travel. Find your nearest endorsement office on the " +
      "<a href=\"https://www.aphis.usda.gov/pet-travel/us-to-another-country-export\" " +
      "target=\"_blank\" rel=\"noopener\">USDA APHIS pet-travel pages</a>.</p>" +
      "<p>The OHC is valid for <strong>10 days from the date of USDA endorsement</strong> " +
      "according to the Thai embassy&rsquo;s January 2025 guidance. A delayed flight " +
      "that pushes you past that window can mean re-issuing the certificate &mdash; " +
      "build slack into your schedule.</p>" },
    { h: "Documents Thailand expects", html:
      "<p>At the AQS on arrival you should carry:</p>" +
      "<ul>" +
      "<li><strong>Original</strong> traveller&rsquo;s passport (or pickup person&rsquo;s passport for cargo)</li>" +
      "<li><strong>Original</strong> USDA-endorsed health certificate with stamp</li>" +
      "<li>Printed import permit (the email from the AQS)</li>" +
      "<li>Original vaccination records / pet passport showing microchip number</li>" +
      "</ul>" +
      TH_DOCS_TABLE + TH_ARRIVAL +
      "<p><strong>Operating hours:</strong> obtain the cargo or passenger AQS&rsquo;s " +
      "current hours directly for the exact arrival mode and date; this page does not " +
      "publish an unverified universal schedule.</p>" },
    { h: "The CDC rules — for the return journey", html:
      "<p>CDC requirements concern entry into the United States, not the outbound " +
      "Thai import. Thailand is on CDC&rsquo;s current high-risk-country list for dog rabies. " +
      "The return pathway depends on the dog&rsquo;s six-month travel history and where its " +
      "rabies vaccination was administered. " +
      claimLink("US-CDC-THAILAND-RISK-2026-08", "Current classification") + ".</p>" +
      "<p>For a <strong>foreign-vaccinated dog</strong> with relevant high-risk-country travel, " +
      "the checked pathway requires a dog at least six months old and appearing healthy, a " +
      "universally readable microchip implanted before the rabies vaccination, the endorsed " +
      "Certification of Foreign Rabies Vaccination and Microchip form, CDC Dog Import Form " +
      "receipt, a CDC-registered animal-care-facility reservation and direct arrival at that " +
      "facility&rsquo;s airport. A valid CDC-approved-laboratory titer uses a sample at least " +
      "30 days after the first valid rabies vaccination and at least 28 days before US entry; " +
      "without a valid titer, the facility reservation must include 28 days of quarantine. " +
      "The facility examines and revaccinates the dog on arrival. This is not the unchanged route " +
      "for a US-vaccinated dog or for a cat. " +
      claimLink("US-CDC-FOREIGN-HIGH-RISK-2026-08", "CDC pathway source") + ".</p>" +
      "<p>Read the current CDC decision tree for the individual animal before arranging any " +
      "test or booking, then see our guide to " +
      "<a href=\"/take-pet-out-of-thailand/to-usa.html\">exporting a pet from Thailand to the USA</a>. " +
      "</p>" },
    { h: "Common mistakes US owners make", html: TH_FAILS +
      "<ul>" +
      "<li><strong>Electronic-only health certificate</strong> &mdash; Thailand wants the original USDA-stamped paper.</li>" +
      "<li><strong>Certificate after endorsement, not from endorsement</strong> &mdash; the 10-day clock starts on the endorsement date, not the vet exam date.</li>" +
      "<li><strong>Unconfirmed chip compatibility</strong> &mdash; obtain the implantation record and ask the AQS and airline about the exact chip; do not add a chip or repeat rabies on this page&rsquo;s authority.</li>" +
      "<li><strong>Ignoring CDC until the return flight</strong> &mdash; by then it may be too late to meet titer-test timelines.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Do I apply for the Thai import permit before or after the USDA health certificate?",
     "<p>Before. The Thai embassy&rsquo;s January 2025 US checklist says to apply for the import permit first (7&ndash;60 days before departure), then have the accredited vet issue the OHC after you receive the permit, and then get USDA endorsement — all within the 10-day validity window before arrival. " + claimLink("TH-IMPORT-WINDOW-2026-02", "Source and scope") + ".</p>"],
    ["Who endorses my pet's health certificate in the US?",
     "<p>A USDA-accredited veterinarian completes it, and USDA APHIS endorses (stamps) the original — generally via the VEHCS online system. Your vet will know the process; build in several days for APHIS processing.</p>"],
    ["Do CDC rules affect taking my dog TO Thailand?",
     "<p>No. CDC rules govern US entry, not Thai entry. They matter for the return because Thailand is currently on CDC&rsquo;s high-risk dog-rabies list and the US pathway depends on travel and vaccination history. " + claimLink("US-CDC-THAILAND-RISK-2026-08", "CDC source") + ".</p>"],
    ["Is a rabies titer test required to enter Thailand from the US?",
     "<p>The reviewed USA-origin Thai instruction does not list a rabies titer as an entry document. A later destination may have its own test and timing rules; check that authority before arranging one.</p>"],
    ["Which Bangkok airport should I use for Pattaya?",
     "<p>Suvarnabhumi is documented in the reviewed sources. Those sources do not establish a U-Tapao pet-import AQS, so use U-Tapao only after written DLD confirmation. See <a href=\"/bring-pet-to-thailand/u-tapao-airport-pets.html\">U-Tapao or Bangkok?</a></p>"]
  ]
}));

pages.push(countryPage({
  slug: "from-australia", crumb: "From Australia",
  title: "Bring Pet to Thailand from Australia (2026) | PattayaPets",
  desc: "Australia to Thailand pet import: DAFF export permit, NOI timeline, DLD " +
    "import permit, 72-hour export window and the truth about returning home.",
  h1: "Bringing a pet to Thailand from Australia",
  lede: "Australia&rarr;Thailand is manageable if you respect both countries&rsquo; " +
    "timelines. Australia&rarr;Thailand&rarr;<em>Australia</em> is a different " +
    "proposition entirely &mdash; understand that before you ever leave.",
  officialExtra:
    "<p><strong>Australian sources:</strong> " +
    "<a href=\"https://www.agriculture.gov.au/biosecurity-trade/export/controlled-goods/live-animals/companion-and-other-live-animals\" " +
    "target=\"_blank\" rel=\"noopener\">DAFF companion animal export</a>; " +
    "<a href=\"https://canberra.thaiembassy.org/en/content/bringing-pets-to-thailand\" " +
    "target=\"_blank\" rel=\"noopener\">Royal Thai Embassy Canberra import guide</a>.</p>",
  sections: [
    { h: "The timeline — what to do when", html:
      "<p>You are juggling <strong>two governments</strong>: DAFF on the way out, DLD " +
      "on the way in. Missing either timeline voids the move.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">Before the Thai permit application</th>' +
      '<td>Record the microchip number consistently, complete rabies and core vaccinations, and confirm the Australia-specific Thai age condition with the current authority</td>' +
      '<td>Registered Australian vet</td></tr>' +
      '<tr><th scope="row">After all primary vaccines and the 21-day wait</th>' +
      '<td>Apply for the Thai <a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a> (R1/1); documented boosters are exempt with prior records. ' + claimLink("TH-IMPORT-SEQUENCE-2026-02", "Source and scope") + '</td>' +
      '<td>DLD (allow 5&ndash;7 Thailand business days)</td></tr>' +
      '<tr><th scope="row">&ge;10 working days before export</th>' +
      '<td>Lodge a <strong>Notice of Intention (NOI)</strong> to export with DAFF, with Thailand&rsquo;s requirements and your Thai import permit attached</td>' +
      '<td>Department of Agriculture, Fisheries and Forestry</td></tr>' +
      '<tr><th scope="row">Pre-export period</th>' +
      '<td>DAFF assesses NOI; your vet completes examinations, treatments and documentation per Thailand&rsquo;s conditions</td>' +
      '<td>DAFF + registered vet</td></tr>' +
      '<tr><th scope="row">Final days</th>' +
      '<td>DAFF issues <strong>export permit and health certificate</strong>; you must export within <strong>72 hours</strong> of permit issue</td>' +
      '<td>DAFF</td></tr>' +
      '<tr><th scope="row">Before departure</th>' +
      '<td>Book cargo or accompanied travel (direct Australia&ndash;Thailand pet routes are limited — confirm with airlines early)</td>' +
      '<td>Airline / relocation agent</td></tr>' +
      '<tr><th scope="row">Arrival in Thailand</th>' +
      '<td>AQS inspection; Forms R-6/R-7; 500&nbsp;baht fee if paperwork is complete</td>' +
      '<td>DLD AQS</td></tr>' +
      '</tbody></table></div>' +
      "<p>Thai-side steps in detail: " + IMP_STEPS + ".</p>" },
    { h: "The Australian export side (DAFF)", html:
      "<p>Australia treats every pet export as a controlled consignment. Before your " +
      "pet leaves, you typically need:</p>" +
      "<ol>" +
      "<li><strong>Thailand&rsquo;s import conditions</strong> &mdash; including your " +
      "DLD import permit, which specifies what DAFF must certify.</li>" +
      "<li>A <strong>Notice of Intention (NOI)</strong> lodged with DAFF at least " +
      "<strong>10 working days</strong> before the intended export date (more for " +
      "complex routes).</li>" +
      "<li>Pre-export work by a <strong>registered veterinarian</strong> &mdash; " +
      "examinations, vaccinations and any tests Thailand requires.</li>" +
      "<li>A DAFF <strong>export permit and health certificate</strong>, issued only " +
      "when DAFF is satisfied the pet meets Thailand&rsquo;s conditions.</li>" +
      "</ol>" +
      "<p>Critical detail: once DAFF issues the export permit, your pet must leave " +
      "Australia within <strong>72 hours</strong>. That is a condition of the permit " +
      "&mdash; not a guideline. Coordinate your flight booking with your vet and DAFF " +
      "assessment so you are not re-applying because a flight slipped.</p>" +
      "<p>DAFF charges time-based fees for assessment and certificate preparation, " +
      "plus an export permit fee. Budget this separately from airline cargo charges " +
      "&mdash; see " +
      '<a href="/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html">what import costs</a>.</p>' },
    { h: "Documents Thailand expects", html:
      "<p>The Royal Thai Embassy in Canberra publishes Australia-specific notes. Core " +
      "requirements match the global DLD rules:</p>" +
      TH_DOCS_TABLE +
      "<p><strong>Age and breed restrictions:</strong> pets must be at least " +
      "<strong>4 months old</strong>. Pit bull terrier and American Staffordshire " +
      "terrier types are prohibited from import into Thailand (airlines may impose " +
      "additional breed bans).</p>" +
      TH_ARRIVAL +
      "<p>If shipping cargo without travelling on the same flight, confirm the required " +
      "shipper and pickup-person documents and the cargo AQS&rsquo;s current operating " +
      "hours directly before booking.</p>" },
    { h: "The return to Australia — read this first", html:
      "<p>Australia has some of the strictest pet biosecurity rules in the world. " +
      "<strong>Thailand is not on Australia&rsquo;s list of approved countries</strong> " +
      "for direct dog and cat import. In practice, bringing a pet from Thailand back " +
      "to Australia means:</p>" +
      "<ul>" +
      "<li>First move the pet to an <strong>approved Group 1, 2 or 3 country</strong>.</li>" +
      "<li>Keep the pet continuously resident there for at least <strong>180 consecutive days immediately before export</strong>.</li>" +
      "<li>Complete Australia&rsquo;s qualifying vaccinations and tests in that approved country; DAFF does not accept those steps from a non-approved country.</li>" +
      "<li>Meet the approved country&rsquo;s remaining permit, identity-verification, export and Australian quarantine conditions.</li>" +
      "</ul>" +
      "<p>Returning Australian animals can have case-specific exceptions, so do not " +
      "apply the standard pathway without a written DAFF assessment. " +
      claimLink("AU-NONAPPROVED-PATH-2026-08", "DAFF source") + ".</p>" +
      "<p>If you are an Australian who might one day go home with your pet, speak to " +
      "DAFF and a specialist " +
      '<a href="/pet-relocation/">pet relocation agent</a> before you leave Australia — ' +
      "not when your contract ends. Read " +
      '<a href="/take-pet-out-of-thailand/to-australia.html">taking a pet from Thailand to Australia</a> ' +
      "for the full picture.</p>" +
      '<div class="callout callout-emergency"><div class="ch">Australia → Thailand is the easy direction</div>' +
      "<p>Do not assume because the outbound move was straightforward that the inbound " +
      "move to Australia will mirror it. Many owners only discover the approved-country " +
      "requirement when it is too late to avoid rehoming their pet.</p></div>" },
    { h: "Common mistakes Australian owners make", html: TH_FAILS +
      "<ul>" +
      "<li><strong>Missing the 72-hour export window</strong> after DAFF issues the permit.</li>" +
      "<li><strong>NOI lodged too late</strong> &mdash; fewer than 10 working days before planned export.</li>" +
      "<li><strong>Doing qualifying vaccination/testing in Thailand</strong> &mdash; the standard pathway requires those steps in the approved country.</li>" +
      "<li><strong>Cargo arrival on a weekend</strong> &mdash; cargo AQS hours may delay pickup.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Can I fly my pet straight from Australia to Thailand?",
     "<p>The route requires DAFF export approval, the applicable Thai import documents and explicit pet acceptance from the operating airline. Confirm mode, route and conditions directly before payment.</p>"],
    ["How long does DAFF take to approve an export?",
     "<p>Allow at least 10 working days from lodging the Notice of Intention, often longer if documentation needs correction. Then remember the 72-hour export window once the permit is issued.</p>"],
    ["Will my pet be quarantined on arrival in Thailand?",
     "<p>DLD decides clearance, detention or other action after inspecting the animal and original documents. The reviewed source does not guarantee same-day release or a fixed detention duration. " + claimLink("TH-ARRIVAL-INSPECTION-2026-02", "Source and scope") + ".</p>"],
    ["Can I fly my pet straight from Thailand back to Australia?",
     "<p>Generally no — Thailand is not an approved country for direct import. The route involves time in an approved country, an import permit, and mandatory government quarantine on arrival in Australia. Plan with DAFF and a relocation specialist.</p>"],
    ["How long does the return to Australia take to arrange?",
     "<p>The standard pathway includes at least 180 consecutive days of residence in an approved country immediately before export, plus that country&rsquo;s veterinary, permit, export and booking steps. Ask DAFF for the case pathway before setting a date; returning Australian animals can be assessed differently.</p>"]
  ]
}));

const EU_MEMBER_IMPORT_LINKS =
  "<p>Each member state has its own competent authority and certificate format. " +
  "Use the page for your departure country:</p>" +
  "<ul>" +
  "<li><a href=\"/bring-pet-to-thailand/from-germany.html\">Germany</a> &middot; " +
  "<a href=\"/bring-pet-to-thailand/from-france.html\">France</a> &middot; " +
  "<a href=\"/bring-pet-to-thailand/from-netherlands.html\">Netherlands</a> &middot; " +
  "<a href=\"/bring-pet-to-thailand/from-denmark.html\">Denmark</a> &middot; " +
  "<a href=\"/bring-pet-to-thailand/from-sweden.html\">Sweden</a> &middot; " +
  "<a href=\"/bring-pet-to-thailand/from-finland.html\">Finland</a> &middot; " +
  "<a href=\"/bring-pet-to-thailand/from-ireland.html\">Ireland</a> &middot; " +
  "<a href=\"/bring-pet-to-thailand/from-norway.html\">Norway</a> (EEA) &middot; " +
  "<a href=\"/bring-pet-to-thailand/from-switzerland.html\">Switzerland</a></li>" +
  "</ul>";

const EU_IMPORT_FAILS =
  "<ul>" +
  "<li><strong>Pet passport only</strong> &mdash; intra-EU passports do not replace a competent-authority export health certificate for Thailand.</li>" +
  "<li><strong>Wrong endorsement chain</strong> &mdash; some member states require central authority sign-off after the official vet; missing it voids the certificate.</li>" +
  "<li><strong>Permit timing</strong> &mdash; DLD import permit applied inside seven working days when the AQS desk is busy, or too early so it expires before you fly.</li>" +
  "<li><strong>Health certificate window</strong> &mdash; issued outside the validity period for your landing date.</li>" +
  "<li><strong>Return-trip blindness</strong> &mdash; no qualifying titer recorded before leaving Europe, then the standard route&rsquo;s 90-day pre-certificate timing gate when returning from Thailand.</li>" +
  "</ul>";

pages.push(countryPage({
  slug: "from-eu", crumb: "From the EU",
  title: "EU to Thailand Pet Import (2026) | PattayaPets",
  desc: "EU to Thailand pet import: export health certificate, competent authority " +
    "endorsement, DLD import permit and Bangkok AQS clearance — plus EU return planning.",
  updated: "2026-08-01",
  h1: "Bringing a pet to Thailand from the EU",
  lede: "EU owners travel with a pet passport at home — but it does not do the " +
    "job for Thailand, or for coming back. Thailand applies one import rulebook; " +
    "your member state issues the export certificate.",
  officialExtra:
    "<p><strong>EU sources:</strong> " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" " +
    "target=\"_blank\" rel=\"noopener\">European Commission &mdash; movement of pets</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/live-animal-movements/dogs-cats-and-ferrets/eu-legislation/non-commercial-movement-non-eu-countries_en\" " +
    "target=\"_blank\" rel=\"noopener\">non-EU rabies-test rules</a>; " +
    "<a href=\"https://food.ec.europa.eu/animals/live-animal-movements/dogs-cats-and-ferrets/bringing-pet-eu-non-eu-country_en\" " +
    "target=\"_blank\" rel=\"noopener\">bringing a pet from a non-EU country</a>.</p>",
  sections: [
    { h: "The timeline — what to do when", html:
      "<p>Build backwards from your Bangkok arrival date. If you may return to the EU, " +
      "add the <strong>rabies titer test</strong> at the start.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th></tr></thead><tbody>' +
      '<tr><th scope="row">Before leaving the EU (if return is possible)</th>' +
      '<td>Confirm the microchip and continuous rabies record; consider a qualifying designated-laboratory <a href="/bring-pet-to-thailand/rabies-vaccination-titer-test.html">antibody test</a> and have the satisfactory result recorded in the EU passport before departure. ' + claimLink("EU-RABIES-TITER-2026-08", "Commission source") + '</td></tr>' +
      '<tr><th scope="row">Before the Thai permit application</th>' +
      '<td>Complete all primary vaccines, then wait <strong>21 days</strong>; documented boosters are exempt with prior records. Allow 5&ndash;7 Thailand business days after the complete application. ' + claimLink("TH-IMPORT-SEQUENCE-2026-02", "Source and scope") + '</td></tr>' +
      '<tr><th scope="row">After the primary-vaccine wait</th>' +
      '<td>Apply for the <a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a> (form R1/1) using the responsible AQS&rsquo;s confirmed intake; allow 5&ndash;7 Thailand business days for a complete application</td></tr>' +
      '<tr><th scope="row">2&ndash;3 weeks before</th>' +
      '<td>Book pet space on the flight; confirm airline requires the import permit before boarding</td></tr>' +
      '<tr><th scope="row">Final 7&ndash;10 days</th>' +
      '<td>Official vet completes <strong>EU export health certificate</strong>; competent authority endorses as your country requires</td></tr>' +
      '<tr><th scope="row">Arrival day</th>' +
      '<td>AQS inspection at Suvarnabhumi; Forms R-6/R-7 issued; fee payable on clearance</td></tr>' +
      '</tbody></table></div>' +
      "<p>Full step pages: " + IMP_STEPS + ".</p>" },
    { h: "The EU side of the paperwork", html:
      "<p>For travel out of the EU to Thailand, your vet completes an " +
      "<strong>EU animal health / export certificate</strong> and it is endorsed by " +
      "your country&rsquo;s <strong>competent authority</strong> (the official " +
      "government veterinary body). The familiar blue EU pet passport is for travel " +
      "within the EU and is not, by itself, the document Thailand needs.</p>" +
      "<ul>" +
      "<li><strong>Microchip implantation certificate</strong> with the same number on every Thai application, vaccination and health record; confirm any member-state or airline ISO/sequence rule separately.</li>" +
      "<li><strong>Valid rabies vaccination</strong> recorded on the export certificate.</li>" +
      "<li><strong>Export health certificate for Thailand</strong> &mdash; aligned with DLD import rules, not intra-EU pet-passport travel alone.</li>" +
      "<li><strong>Official endorsement</strong> where your member state requires central authority sign-off.</li>" +
      "</ul>" +
      EU_MEMBER_IMPORT_LINKS },
    { h: "Documents Thailand expects", html:
      "<p>These are the papers the DLD asks for regardless of EU departure country:</p>" +
      TH_DOCS_TABLE + TH_ARRIVAL },
    { h: "Planning for the return to the EU", html:
      "<p>To bring a pet <em>back into the EU</em> from Thailand &mdash; a " +
      "non-listed third country under the checked route &mdash; you need valid rabies cover and a " +
      "designated-laboratory antibody result of at least 0.5 IU/ml. The sample must be at least " +
      "30 days after primary vaccination (or within a current valid series) and at least " +
      "90 days before the animal health certificate is issued. A satisfactory pre-departure " +
      "test recorded in the EU passport can qualify for the re-entry exception when continuous " +
      "vaccination and the other conditions are met. " + claimLink("EU-RABIES-TITER-2026-08", "Commission titer source") + ".</p>" +
      "<p>The ordinary non-commercial route uses an animal health certificate valid for 10 days " +
      "to the designated travellers&rsquo; point-of-entry check and ordinarily permits no more " +
      "than five pets, subject to the owner-travel and published exception conditions. See " +
      "<a href=\"/take-pet-out-of-thailand/to-eu.html\">taking a pet from Thailand to the EU</a>. " +
      claimLink("EU-NONCOMMERCIAL-ENTRY-2026-08", "Commission entry source") + ".</p>" },
    { h: "Common mistakes on this corridor", html: TH_FAILS + EU_IMPORT_FAILS }
  ],
  faqs: [
    ["Is my EU pet passport enough to bring my pet to Thailand?",
     "<p>No. The EU pet passport governs movement within the EU. For Thailand you need an export health certificate endorsed by your competent authority, plus the Thai import permit.</p>"],
    ["Do all EU countries use the same export certificate for Thailand?",
     "<p>No. Thailand's import rules are uniform, but each member state's competent authority issues its own export certificate format and endorsement process. Use our country page for your departure state.</p>"],
    ["What does the EU need for the return journey?",
     "<p>Under the checked standard route, valid rabies cover and a designated-laboratory titer at or above 0.5 IU/ml, sampled at least 30 days after primary vaccination or within a valid series and at least 90 days before certificate issue. A qualifying result recorded before EU departure can preserve the re-entry exception when continuous vaccination and the other conditions are met. " + claimLink("EU-RABIES-TITER-2026-08", "Commission source") + ".</p>"],
    ["Which EU airport should I fly from?",
     "<p>Thailand cares about correct paperwork, not which EU hub you use. Choose a route with a confirmed pet booking and minimal connection risk; long layovers in non-EU countries can trigger extra transit rules.</p>"],
    ["How long does the full EU-to-Thailand process take?",
     "<p>No verified universal duration is stated here. The Thai sequence alone requires all primary vaccines, then a 21-day wait before the permit application, followed by 5&ndash;7 Thailand business days for a complete application; documented boosters are exempt with prior records. Add the member state&rsquo;s certificate process and the airline&rsquo;s booking lead time.</p>"]
  ]
}));

module.exports = pages;
