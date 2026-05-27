"use strict";
/* Flagship cluster: Bringing your pet to Thailand */

const { article, hub } = require("../guidekit.js");
const { importCountryRelated } = require("../data/country-pairs.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const CLUSTER = { name: "Bringing a pet to Thailand", path: "/bring-pet-to-thailand/" };
const SUB = [GUIDES, CLUSTER];

const VERIFY =
  "This guide was last reviewed in May 2026. Thailand&rsquo;s Department of " +
  "Livestock Development (DLD), airlines and origin-country authorities change " +
  "their rules without notice. Treat this as an orientation, then confirm every " +
  "current requirement with the DLD, your airline and your origin-country " +
  "authority before you book or travel.";

const OFFICIAL =
  "<p><strong>Official sources to verify against:</strong> " +
  "<a href=\"https://thaiconsulatela.thaiembassy.org/en/publicservice/bringing-pets-to-thailand\" " +
  "target=\"_blank\" rel=\"noopener nofollow\">Thai embassy pet import guide</a> " +
  "(revised January 2025); DLD import application form <strong>R1/1</strong> (via the embassy guide or " +
  "<a href=\"https://aqi.dld.go.th/\" target=\"_blank\" rel=\"noopener nofollow\">" +
  "DLD Animal Quarantine stations</a>); Suvarnabhumi AQS import: " +
  "<a href=\"mailto:qsap_bkk_import@dld.go.th\">qsap_bkk_import@dld.go.th</a>.</p>";

function importStep(o) {
  var sections = (o.sections || []).slice();
  sections.push({ h: "Official sources", html: OFFICIAL });
  return article(Object.assign({}, o, { sections: sections }));
}

const pages = [];

/* ---------------- HUB ---------------- */
pages.push(hub({
  path: "/bring-pet-to-thailand/",
  title: "Bringing your pet to Thailand | PattayaPets",
  desc: "How to bring a dog or cat to Thailand: the DLD import permit, microchip, " +
    "rabies vaccination and titer test, health certificate, airlines and arrival.",
  crumb: "Bringing a pet to Thailand",
  breadcrumbs: [GUIDES],
  eyebrow: "Flagship guide",
  h1: "Bringing your pet to Thailand",
  lede: "A dog or cat can move to Thailand with you — thousands do every year. " +
    "It is a paperwork process with firm deadlines, not a quick errand. Here is " +
    "the whole picture, then a page for each step.",
  intro:
    "<p>The single most important thing to understand is <strong>timing</strong>. " +
    "Between the microchip, the rabies vaccination and its 21-day wait, the " +
    "health certificate and the import permit, a smooth move needs <strong>at " +
    "least one to two months</strong> of lead time &mdash; and if you may later " +
    "move your pet onward to the UK, EU or Australia, a rabies titer test pushes " +
    "that to several months. Start early.</p>" +
    "<p>The process is overseen by Thailand&rsquo;s <strong>Department of " +
    "Livestock Development (DLD)</strong>. Below, each step has its own page. " +
    "Read them in order.</p>" +
    '<div class="callout callout-tip"><div class="ch">Rules change — verify before you act</div>' +
    "<p>" + VERIFY + "</p>" + OFFICIAL + "</div>",
  groups: [
    {
      title: "The process, step by step",
      cards: [
        { tag: "Step 1", name: "Microchip", desc: "The ISO microchip your pet needs, and why it must come first.", path: "/bring-pet-to-thailand/microchip-requirements.html" },
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
        { tag: "Money", name: "What it costs", desc: "An honest breakdown of where the money goes, with rough ranges.", path: "/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html" },
        { tag: "Arrival", name: "U-Tapao or Bangkok?", desc: "Which airport to fly your pet into, and how to reach Pattaya.", path: "/bring-pet-to-thailand/u-tapao-airport-pets.html" }
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
        { name: "From New Zealand", desc: "Straightforward export; the demanding part is the return.", path: "/bring-pet-to-thailand/from-new-zealand.html" }
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
    { name: "From the EU", path: "/bring-pet-to-thailand/from-eu.html", desc: "The largest expat origin cohort." },
    { name: "DLD import permit", path: "/bring-pet-to-thailand/import-permit-thailand-dld.html", desc: "The Thai-side permit you apply for." },
    { name: "Rabies & titer test", path: "/bring-pet-to-thailand/rabies-vaccination-titer-test.html", desc: "Why timing it early matters so much." },
    { name: "Taking a pet out of Thailand", path: "/take-pet-out-of-thailand/", desc: "The reverse process, for when you leave." }
  ]
}));

/* ---------------- MICROCHIP ---------------- */
pages.push(importStep({
  path: "/bring-pet-to-thailand/microchip-requirements.html",
  title: "Pet microchip requirements for Thailand | PattayaPets",
  desc: "Thailand requires an ISO 11784/11785 15-digit microchip, implanted before " +
    "the rabies vaccination. Here is what that means and why the order matters.",
  crumb: "Microchip",
  breadcrumbs: SUB,
  eyebrow: "Bringing a pet to Thailand · Step 1",
  h1: "The microchip your pet needs",
  lede: "Every dog or cat entering Thailand must be identifiable by microchip — " +
    "and the chip has to go in before the rabies shot. This is the first thing to " +
    "get right.",
  verify: VERIFY,
  sections: [
    { h: "Which microchip counts", html:
      "<p>Thailand requires a microchip that meets <strong>ISO standard " +
      "11784/11785</strong> — the 15-digit chip read by standard scanners " +
      "worldwide. This is the same chip standard used across the UK, EU and most " +
      "of the world, so a pet chipped in those places is usually already " +
      "compliant.</p>" +
      "<p>If your pet has a non-ISO chip (some older US chips are 9 or 10 digit, " +
      "or 125&nbsp;kHz AVID/Home Again chips), you have two options: have an ISO " +
      "chip implanted as well, or travel with your own compatible scanner. An " +
      "extra ISO chip is the simpler fix.</p>" },
    { h: "Why the order matters", html:
      "<p>The microchip must be implanted <strong>before</strong> the rabies " +
      "vaccination. The reason is simple: the rabies certificate and every other " +
      "record must quote the microchip number, so officials can confirm the " +
      "vaccinated animal is the animal in front of them. A rabies shot given " +
      "before the chip does not count, and would have to be repeated.</p>" +
      "<p>So the correct sequence is: <strong>microchip first, then rabies " +
      "vaccination, then everything else.</strong></p>" },
    { h: "Get it documented", html:
      "<p>Ask your vet to record the microchip number, the date implanted and the " +
      "chip&rsquo;s standard on your pet&rsquo;s records. That number will appear " +
      "on the rabies certificate, the health certificate and the import permit " +
      "application, so it needs to be consistent everywhere.</p>" }
  ],
  faqs: [
    ["Does my pet need a new microchip if it already has an ISO one?",
     "<p>No. An existing ISO 11784/11785 15-digit microchip is fine — you do not need another. You only need to act if the existing chip is a non-ISO type.</p>"],
    ["My pet was vaccinated for rabies before it was chipped. Is that a problem?",
     "<p>Usually yes. Because the rabies record must reference the microchip, a rabies vaccination given before the chip is generally not accepted, and the vaccination has to be redone after chipping. Confirm your exact situation with your vet and the DLD.</p>"]
  ],
  related: [
    { name: "Rabies & titer test", path: "/bring-pet-to-thailand/rabies-vaccination-titer-test.html", desc: "The next step, once the chip is in." },
    { name: "DLD import permit", path: "/bring-pet-to-thailand/import-permit-thailand-dld.html", desc: "Apply once vaccinations are in order." },
    { name: "The full process", path: "/bring-pet-to-thailand/", desc: "Back to the flagship guide." },
    { name: "What it costs", path: "/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html", desc: "Budget for the whole move." }
  ]
}));

/* ---------------- RABIES & TITER ---------------- */
pages.push(importStep({
  path: "/bring-pet-to-thailand/rabies-vaccination-titer-test.html",
  title: "Rabies vaccination & titer test, Thailand | PattayaPets",
  desc: "The rabies vaccination, the 21-day wait, the other vaccines Thailand " +
    "asks for, and the rabies titer test — what it is and why you should do it.",
  crumb: "Rabies & titer test",
  breadcrumbs: SUB,
  eyebrow: "Bringing a pet to Thailand · Step 2",
  h1: "Rabies vaccination and the titer test",
  lede: "After the microchip, rabies is the centre of the whole process. Get the " +
    "timing wrong here and the trip slips by weeks.",
  verify: VERIFY,
  sections: [
    { h: "The rabies vaccination", html:
      "<p>Your pet needs a current rabies vaccination that was given " +
      "<strong>after</strong> the microchip, <strong>at least 21 days before " +
      "arrival</strong> in Thailand, and <strong>no more than one year</strong> " +
      "before travel (or within the validity of the vaccine used). A booster " +
      "given while a previous shot is still valid keeps the clock running; a " +
      "lapsed-then-renewed vaccination is treated as a first shot, restarting the " +
      "21-day wait.</p>" },
    { h: "The other vaccinations Thailand asks for", html:
      "<p>Rabies is not the only one. Current guidance asks for:</p>" +
      "<ul><li><strong>Dogs:</strong> rabies, plus distemper, hepatitis and " +
      "parvovirus (the combined DHPP shot), plus leptospirosis. If leptospirosis " +
      "is not vaccinated, a blood test with a negative result is generally " +
      "required instead.</li>" +
      "<li><strong>Cats:</strong> rabies, plus the combined FVRCP shot " +
      "(feline viral rhinotracheitis, calicivirus and panleukopenia).</li></ul>" +
      "<p>As with rabies, these should be given at least 21 days before arrival " +
      "and be current.</p>" },
    { h: "The rabies titer test — and why to do it anyway", html:
      "<p>A rabies titer test (also called RNATT or FAVN) is a blood test that " +
      "measures the rabies antibodies in your pet&rsquo;s blood, proving the " +
      "vaccination actually worked. The blood is drawn at least 30 days after the " +
      "vaccination and sent to an approved laboratory.</p>" +
      "<p>For <em>entering Thailand</em> from a rabies-controlled country (such " +
      "as the UK, USA, Canada, Australia or the EU), a titer test is generally " +
      "<strong>not</strong> required. But here is the key advice: <strong>do it " +
      "anyway</strong> if there is any chance you will later move your pet on to " +
      "the UK, the EU or Australia. Those destinations <em>do</em> require a " +
      "titer test, and they impose a waiting period of three months or more " +
      "after the blood sample. Doing the test now, while you are already at the " +
      "vet, can save you months later.</p>" }
  ],
  faqs: [
    ["How long before travel should the rabies shot be given?",
     "<p>At least 21 days before arrival in Thailand, and it must still be within its validity period on the day you travel. If in doubt, give it earlier rather than later.</p>"],
    ["Is the titer test required to enter Thailand?",
     "<p>Generally no, for pets coming from rabies-controlled countries. It becomes important if you later move your pet to a country that requires it, such as the UK, EU or Australia — so many owners do it pre-emptively. Confirm your case with the DLD.</p>"],
    ["Where is the titer blood test analysed?",
     "<p>At an approved rabies laboratory — your vet or a pet relocation agent will know the nearest accepted lab. The result takes a few weeks to come back, which is why you start early.</p>"]
  ],
  related: [
    { name: "Health certificate", path: "/bring-pet-to-thailand/health-certificate.html", desc: "The document that pulls it all together." },
    { name: "Microchip requirements", path: "/bring-pet-to-thailand/microchip-requirements.html", desc: "Step one — which has to come first." },
    { name: "Taking a pet out of Thailand", path: "/take-pet-out-of-thailand/", desc: "Why the titer test matters for the return." },
    { name: "Pet relocation agents", path: "/pet-relocation/", desc: "Specialists who manage this for you." }
  ]
}));

/* ---------------- HEALTH CERTIFICATE ---------------- */
pages.push(importStep({
  path: "/bring-pet-to-thailand/health-certificate.html",
  title: "Health certificate for Thailand pet import | PattayaPets",
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
      "period that applies to your route.</p>" }
  ],
  faqs: [
    ["Can my normal vet do the health certificate?",
     "<p>Your vet can carry out the examination and complete the certificate, but it then needs government endorsement (APHIS, APHA or the EU equivalent). Some vets are specifically accredited for export work — ask before booking.</p>"],
    ["What if my travel date moves?",
     "<p>Because the certificate has a short validity, a delayed trip can mean re-issuing it. Build a little slack into your plans and keep your vet informed.</p>"]
  ],
  related: [
    { name: "DLD import permit", path: "/bring-pet-to-thailand/import-permit-thailand-dld.html", desc: "The Thai-side permit you apply for." },
    { name: "Airline pet policies", path: "/bring-pet-to-thailand/airline-pet-policies.html", desc: "Endorsement timing vs your flight date." },
    { name: "Rabies & titer test", path: "/bring-pet-to-thailand/rabies-vaccination-titer-test.html", desc: "The vaccinations the certificate lists." },
    { name: "What it costs", path: "/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html", desc: "Budgeting the whole move." }
  ]
}));

/* ---------------- IMPORT PERMIT ---------------- */
pages.push(importStep({
  path: "/bring-pet-to-thailand/import-permit-thailand-dld.html",
  title: "Thailand pet import permit (DLD) | PattayaPets",
  desc: "The Thailand pet import permit from the Department of Livestock " +
    "Development: how to apply, the timing, and what you submit.",
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
      "It is typically <strong>valid for 60 days</strong> from issuance, so it is " +
      "applied for in the weeks before travel &mdash; not months ahead.</p>" },
    { h: "When to apply", html:
      "<p>Official guidance (revised January 2025) says you must apply " +
      "<strong>at least seven Thailand business days before departure</strong>, and " +
      "<strong>no more than 60 days before departure</strong>. The DLD recommends " +
      "around <strong>30 days ahead</strong> &mdash; long enough for processing, " +
      "short enough that the permit is still valid when you fly.</p>" +
      "<p>You also cannot start the permit application until primary vaccinations " +
      "(including rabies) have been given and the usual <strong>21-day wait</strong> " +
      "after a primary rabies shot has passed. Boosters given while a previous shot " +
      "is still valid do not restart that wait &mdash; confirm your pet&rsquo;s " +
      "vaccination history with your vet.</p>" },
    { h: "How to apply", html:
      "<p>Applications are emailed to the AQS at your port of entry using DLD form " +
      "<strong>R1/1</strong>. For Suvarnabhumi (Bangkok), the usual airport for " +
      "Pattaya arrivals, email " +
      "<a href=\"mailto:qsap_bkk_import@dld.go.th\">qsap_bkk_import@dld.go.th</a>. " +
      "Other airports have their own AQS inboxes &mdash; check the DLD&rsquo;s current " +
      "port-of-entry list before you send anything.</p>" +
      "<p>Officials review the documents and, if everything is in order, email the " +
      "permit back &mdash; commonly within about <strong>five to seven working " +
      "days</strong>. Print the permit and carry it with your other papers.</p>" +
      "<p>Many owners have a pet relocation agent handle this step, because the " +
      "agent knows the current forms and the quarantine station contacts. Doing " +
      "it yourself is possible; doing it inside the correct timing window is " +
      "essential.</p>" },
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
      "licence; the inspection fee is currently <strong>500&nbsp;baht</strong> " +
      "(confirm the current amount with the AQS).</p>" }
  ],
  faqs: [
    ["When should I apply for the import permit?",
     "<p>Inside the official window: at least seven Thailand business days before departure, and no more than 60 days before. Around 30 days ahead is a sensible target. Apply too early and the permit can expire; too late and it may not be issued in time.</p>"],
    ["Do I need to be in Thailand to apply?",
     "<p>No. The application is made before you travel, by email to the AQS at your arrival airport, or through a pet relocation agent acting for you.</p>"],
    ["Can I apply at the airport on arrival instead?",
     "<p>In some cases the AQS can issue a permit on arrival if you already hold a fully endorsed health certificate and all supporting documents &mdash; but many airlines require the permit before boarding. Check with your airline first; arriving without the paperwork the airline expects is a common reason pets are refused carriage.</p>"]
  ],
  related: [
    { name: "Arrival in Thailand", path: "/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html", desc: "What happens when you land." },
    { name: "Pet quarantine in Thailand", path: "/bring-pet-to-thailand/thailand-pet-quarantine.html", desc: "What happens if paperwork is wrong." },
    { name: "Health certificate", path: "/bring-pet-to-thailand/health-certificate.html", desc: "The document the permit relies on." },
    { name: "Pet relocation agents", path: "/pet-relocation/", desc: "Agents who file the permit for you." }
  ]
}));

/* ---------------- AIRLINE POLICIES ---------------- */
pages.push(importStep({
  path: "/bring-pet-to-thailand/airline-pet-policies.html",
  title: "Airline pet policies for Thailand | PattayaPets",
  desc: "How pets fly to Thailand — in-cabin, as checked baggage or as cargo — " +
    "IATA travel crates, snub-nosed breed rules, and how to book.",
  crumb: "Airline pet policies",
  breadcrumbs: SUB,
  eyebrow: "Bringing a pet to Thailand · Step 5",
  h1: "Airline pet policies and travel crates",
  lede: "The paperwork gets your pet permission to enter Thailand. The airline " +
    "decides how it actually flies — and policies vary a lot.",
  verify: VERIFY,
  sections: [
    { h: "The three ways a pet flies", html:
      "<p>There are broadly three options, and not every airline offers each:</p>" +
      "<ul><li><strong>In the cabin</strong> — only small pets, where the animal " +
      "plus carrier fits within a low weight limit (often around 7–8&nbsp;kg) " +
      "and under the seat. Many airlines do not allow this on long-haul routes " +
      "to Thailand.</li>" +
      "<li><strong>As checked baggage</strong> — your pet flies in the hold, in " +
      "an approved crate, on the same flight as you, booked through the " +
      "airline&rsquo;s special-baggage service.</li>" +
      "<li><strong>As manifest cargo</strong> — your pet is booked as freight, " +
      "often the only option for larger dogs or when travelling separately. " +
      "Pet relocation agents usually arrange this.</li></ul>" },
    { h: "IATA-compliant travel crates", html:
      "<p>Pets flying in the hold must travel in a crate that meets the " +
      "<strong>IATA Live Animals Regulations</strong>: rigid construction, " +
      "ventilation on all sides, secure door, and large enough for your pet to " +
      "stand, turn and lie down naturally. Buy the crate well before travel so " +
      "your pet can get used to it.</p>" },
    { h: "Snub-nosed breeds and the heat", html:
      "<p>Many airlines restrict or refuse <strong>brachycephalic (snub-nosed) " +
      "breeds</strong> — French Bulldogs, Pugs, Persian cats and similar — " +
      "because they are vulnerable to breathing problems and heat stress in the " +
      "hold. Some airlines also embargo hold travel during the hottest months. " +
      "If you own a snub-nosed breed, check this before anything else.</p>" },
    { h: "Booking the pet", html:
      "<p>Airline pet spaces are limited and book up. As soon as your travel " +
      "dates are firm, contact the airline (or your agent) to reserve your " +
      "pet&rsquo;s place — do not assume a seat for you means a space for your " +
      "pet. Confirm the crate rules, the check-in process and the fees in " +
      "writing.</p>" }
  ],
  faqs: [
    ["Which airlines carry pets to Thailand?",
     "<p>Several full-service carriers serving Bangkok accept pets as checked baggage or cargo, with conditions; budget airlines often do not. Because routes and policies change, confirm directly with the airline for your specific route rather than relying on a list.</p>"],
    ["Can my dog sit with me in the cabin?",
     "<p>Only if it is small enough to meet the airline's in-cabin weight and carrier limits, and only on airlines that allow it on that route. Most medium and large dogs travel in the hold.</p>"]
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
  title: "Arriving in Thailand with a pet | PattayaPets",
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
      "day &mdash; there is no routine quarantine.</p>" },
    { h: "If something is missing", html:
      "<p>A quarantine officer has the authority to detain a pet if paperwork is " +
      "incomplete or the animal shows signs of disease — potentially for tests " +
      "or treatment lasting 30 days or more. This is exactly why the earlier " +
      "steps matter. Bring printed originals of everything, organised and easy " +
      "to hand over.</p>" },
    { h: "Getting from the airport to Pattaya", html:
      "<p>Plan the onward journey before you fly. Arrange a pet-friendly private " +
      "transfer or a relocation agent&rsquo;s vehicle &mdash; ordinary airport " +
      "taxis may refuse an animal, especially a large one in a crate. Bring " +
      "water and, after a long flight, expect your pet to be tired and thirsty " +
      "rather than lively.</p>"+
      "<p>Once you are settled, our guide to " +
      "<a href=\"/owning-a-pet-in-pattaya/\">owning a pet in Pattaya</a> covers " +
      "the next steps, and the <a href=\"/vets/\">directory of vets</a> helps " +
      "you find a clinic near your new home.</p>" }
  ],
  faqs: [
    ["Will my pet be put in quarantine?",
     "<p>Not routinely. If the import permit and paperwork are in order and your pet is healthy, there is no standard quarantine period — pets are usually released the same day. Quarantine is a fallback the officer can use if something is wrong.</p>"],
    ["How do I get my pet from Bangkok airport to Pattaya?",
     "<p>Arrange a pet-friendly transfer in advance. It is about a 90-minute to two-hour drive. Relocation agents can include the airport-to-door transfer in their service.</p>"]
  ],
  related: [
    { name: "Pet quarantine in Thailand", path: "/bring-pet-to-thailand/thailand-pet-quarantine.html", desc: "When pets do and do not quarantine on arrival." },
    { name: "U-Tapao or Bangkok?", path: "/bring-pet-to-thailand/u-tapao-airport-pets.html", desc: "Which airport to fly into for Pattaya." },
    { name: "Owning a pet in Pattaya", path: "/owning-a-pet-in-pattaya/", desc: "Settling in once you arrive." },
    { name: "Mobile & home-visit vets", path: "/mobile-vets/", desc: "A calm first vet visit at home." },
    { name: "Pet health in Pattaya", path: "/pet-health-pattaya/", desc: "Tropical-climate health routines." }
  ]
}));

/* ---------------- COST ---------------- */
pages.push(importStep({
  path: "/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html",
  title: "Cost to bring a pet to Thailand | PattayaPets",
  desc: "An honest look at the cost of bringing a dog or cat to Thailand — where " +
    "the money goes, rough ranges, and whether to use a relocation agent.",
  crumb: "What it costs",
  breadcrumbs: SUB,
  eyebrow: "Bringing a pet to Thailand · Budget",
  h1: "What it costs to bring a pet to Thailand",
  lede: "There is no single price. The total depends most on your route, your " +
    "pet&rsquo;s size and whether you use an agent. Here is where the money goes.",
  verify: "Costs below are rough orientation only, gathered in May 2026, and vary " +
    "widely by country, airline, season and provider. Get written quotes for your " +
    "specific situation before you budget.",
  sections: [
    { h: "Where the money goes", html:
      "<p>A pet move is really a stack of separate costs:</p>" +
      "<ul><li><strong>Microchip</strong> — small, if your pet is not already chipped.</li>" +
      "<li><strong>Vaccinations</strong> — rabies and the others, at normal vet rates.</li>" +
      "<li><strong>Rabies titer test</strong> — a lab blood test; modest, but only if you need it.</li>" +
      "<li><strong>Health certificate &amp; government endorsement</strong> — the vet exam plus the official endorsement fee.</li>" +
      "<li><strong>IATA travel crate</strong> — sized to your pet; larger dogs need larger, pricier crates.</li>" +
      "<li><strong>The flight</strong> — almost always the biggest single cost, and the most variable.</li>" +
      "<li><strong>Import permit</strong> — a relatively minor official fee.</li>" +
      "<li><strong>Relocation agent</strong> — optional, and covered below.</li>" +
      "<li><strong>Airport-to-Pattaya transfer</strong> — a pet-friendly vehicle on arrival.</li></ul>" },
    { h: "The honest range", html:
      "<p>For a straightforward move of one pet from the UK, EU or USA, owners " +
      "commonly report a total somewhere in the <strong>low-to-mid four figures " +
      "(in US dollars or pounds)</strong> once the flight, crate, vet work and " +
      "fees are added up. A small cat travelling in-cabin can be at the lower " +
      "end; a large dog flying as cargo with full agent support sits well " +
      "higher. The flight and your pet&rsquo;s size move the number more than " +
      "anything else.</p>" +
      "<p>We deliberately do not publish a precise figure: a number that looks " +
      "authoritative but is wrong for your route is worse than none. Get quotes.</p>" },
    { h: "Agent or do it yourself?", html:
      "<p>A <a href=\"/pet-relocation/\">pet relocation agent</a> adds a fee, but " +
      "removes most of the risk: they know the current DLD forms, book pet " +
      "cargo, supply the right crate and handle airport clearance. Owners with " +
      "a simple route, plenty of time and a small pet often manage alone. For a " +
      "large dog, a complex route, or a tight timeline, the agent fee usually " +
      "buys real peace of mind.</p>" }
  ],
  faqs: [
    ["What is the most expensive part?",
     "<p>Almost always the flight itself, especially for a medium or large dog flying in the hold or as cargo. Crate size and route drive the price.</p>"],
    ["Is it cheaper to do it without an agent?",
     "<p>It can be, if your route is simple and you have time to manage the paperwork and bookings yourself. For complex moves the agent fee often pays for itself by avoiding costly mistakes and missed deadlines.</p>"]
  ],
  related: [
    { name: "Pet relocation agents", path: "/pet-relocation/", desc: "Specialists who quote and manage the move." },
    { name: "Airline pet policies", path: "/bring-pet-to-thailand/airline-pet-policies.html", desc: "Understanding the biggest cost." },
    { name: "U-Tapao or Bangkok?", path: "/bring-pet-to-thailand/u-tapao-airport-pets.html", desc: "Airport choice affects transfer cost." },
    { name: "The full process", path: "/bring-pet-to-thailand/", desc: "Back to the flagship guide." }
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
  { name: "Microchip requirements", path: "/bring-pet-to-thailand/microchip-requirements.html", desc: "Step one — which has to come first." },
  { name: "Airline pet policies", path: "/bring-pet-to-thailand/airline-pet-policies.html", desc: "Cabin, checked baggage or cargo, and travel crates." },
  { name: "Arriving in Thailand", path: "/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html", desc: "The quarantine-station check on landing." },
  { name: "What it costs", path: "/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html", desc: "Budget for the whole move." },
  { name: "Rabies & titer test", path: "/bring-pet-to-thailand/rabies-vaccination-titer-test.html", desc: "Why the titer test matters for the return trip." },
  { name: "Taking a pet out of Thailand", path: "/take-pet-out-of-thailand/", desc: "The reverse process, for later." }
];

function countryRelated(slug) {
  return importCountryRelated(slug, COUNTRY_RELATED, "The return journey and why it is harder.");
}

function countryPage(o) {
  var sections = (o.sections || []).slice();
  sections.push({ h: "Official sources", html: OFFICIAL });
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
    sections: sections,
    faqs: o.faqs,
    related: o.related || countryRelated(o.slug)
  });
}

pages.push(countryPage({
  slug: "from-uk", crumb: "From the UK",
  title: "Bringing a pet to Thailand from the UK | PattayaPets",
  desc: "Bringing a dog or cat from the UK to Thailand: APHA endorsement, and the " +
    "rabies titer test the return journey to the UK will require.",
  h1: "Bringing a pet to Thailand from the UK",
  lede: "The Thai requirements are the standard ones. What is UK-specific is who " +
    "endorses your paperwork — and what you must plan for if you ever come back.",
  sections: [
    { h: "The UK side of the paperwork", html:
      "<p>Follow the standard steps — <a href=\"/bring-pet-to-thailand/microchip-requirements.html\">" +
      "microchip</a>, <a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">rabies</a>, " +
      "<a href=\"/bring-pet-to-thailand/health-certificate.html\">health certificate</a> and " +
      "<a href=\"/bring-pet-to-thailand/import-permit-thailand-dld.html\">DLD import permit</a>. " +
      "In the UK, the export health certificate is endorsed by the <strong>Animal " +
      "and Plant Health Agency (APHA)</strong>. Use a vet experienced in export " +
      "work, and start the APHA process early. Confirm the current process on " +
      "<a href=\"https://www.gov.uk/taking-your-pet-abroad\" target=\"_blank\" " +
      "rel=\"noopener nofollow\">GOV.UK pet travel guidance</a>.</p>" },
    { h: "The return trip is the catch", html:
      "<p>This is the single most important thing for UK owners to understand. " +
      "Thailand is treated by the UK as an <strong>&lsquo;unlisted&rsquo; " +
      "country</strong>. To bring a pet <em>back into the UK</em> from Thailand, " +
      "you need a <strong>rabies titer (blood) test</strong> taken at least 30 " +
      "days after vaccination — and then you must <strong>wait three months</strong> " +
      "from the date of that blood sample before the pet can enter the UK.</p>" +
      "<p>The practical lesson: if there is any chance you will return to the UK " +
      "with your pet, have the titer test done <strong>before you leave the " +
      "UK</strong>, while the vaccination is fresh. It saves a three-month wait " +
      "later. See our guide to " +
      "<a href=\"/take-pet-out-of-thailand/to-uk.html\">taking a pet from Thailand to the UK</a>.</p>" }
  ],
  faqs: [
    ["Does Thailand need a titer test for a pet from the UK?",
     "<p>Generally no — the UK is a rabies-controlled country, so Thailand does not require the titer test to enter. But the UK requires it for the return journey, so most UK owners do the test anyway before leaving.</p>"],
    ["Who endorses my pet's paperwork in the UK?",
     "<p>The Animal and Plant Health Agency (APHA) endorses the export health certificate completed by your vet. Confirm the current process with <a href=\"https://www.gov.uk/taking-your-pet-abroad\" target=\"_blank\" rel=\"noopener nofollow\">GOV.UK</a> and your vet.</p>"]
  ]
}));

pages.push(countryPage({
  slug: "from-usa", crumb: "From the USA",
  title: "Bringing a pet to Thailand from the USA | PattayaPets",
  desc: "Bringing a dog or cat from the United States to Thailand: USDA APHIS " +
    "endorsement and the CDC rules that affect dogs.",
  h1: "Bringing a pet to Thailand from the USA",
  lede: "From the US, the Thai steps are standard. The US-specific points are the " +
    "USDA endorsement and the CDC&rsquo;s rules for dogs.",
  sections: [
    { h: "The US side of the paperwork", html:
      "<p>Follow the standard steps &mdash; " + IMP_STEPS + ". In the US, the health " +
      "certificate is completed by a <strong>USDA-accredited veterinarian</strong> " +
      "and then endorsed by <strong>USDA APHIS</strong> (the Animal and Plant " +
      "Health Inspection Service), usually through its online VEHCS system. " +
      "Build in time for that endorsement.</p>" },
    { h: "The CDC rules for dogs", html:
      "<p>The US Centers for Disease Control (CDC) tightened its rules for dogs " +
      "<em>entering the United States</em>. If you may ever bring your dog back " +
      "to the US, this matters: dogs must meet CDC requirements including a " +
      "microchip, a minimum age, and — for dogs that have been in a " +
      "high-rabies-risk country — additional steps such as a rabies titer test " +
      "and CDC paperwork. Thailand is treated as a rabies-risk country by the " +
      "CDC.</p>" +
      "<p>The takeaway is the same as for UK owners: if a return to the US is " +
      "possible, do the <a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">" +
      "rabies titer test</a> early, and check the current CDC rules well before " +
      "any return trip. See our guide to " +
      "<a href=\"/take-pet-out-of-thailand/to-usa.html\">taking a pet from Thailand to the USA</a>.</p>" }
  ],
  faqs: [
    ["Who endorses my pet's health certificate in the US?",
     "<p>A USDA-accredited vet completes it and USDA APHIS endorses it, generally via the online VEHCS system. Your vet will guide you through it.</p>"],
    ["Do CDC rules affect taking my dog TO Thailand?",
     "<p>The CDC rules govern dogs entering the United States, not leaving it. They matter most if you plan to bring your dog back to the US later — in which case plan for them in advance.</p>"]
  ]
}));

pages.push(countryPage({
  slug: "from-eu", crumb: "From the EU",
  title: "Bringing a pet to Thailand from the EU | PattayaPets",
  desc: "Bringing a dog or cat from an EU country to Thailand: the EU export " +
    "certificate, and why the EU pet passport does not cover the return trip.",
  h1: "Bringing a pet to Thailand from the EU",
  lede: "EU owners travel with a pet passport at home — but it does not do the " +
    "job for Thailand, or for coming back.",
  sections: [
    { h: "The EU side of the paperwork", html:
      "<p>Follow the standard steps &mdash; " + IMP_STEPS + ". For travel out of the EU, " +
      "your vet completes an <strong>EU animal health / export certificate</strong> " +
      "and it is endorsed by your country&rsquo;s <strong>competent authority</strong> " +
      "(the official government veterinary body). The familiar blue EU pet " +
      "passport is for travel within the EU and is not, by itself, the document " +
      "Thailand needs.</p>" },
    { h: "Planning for the return to the EU", html:
      "<p>To bring a pet <em>back into the EU</em> from Thailand &mdash; a " +
      "non-EU country &mdash; you will need a valid rabies vaccination and a " +
      "<strong>rabies titer test</strong>, with the blood sample taken at least " +
      "30 days after vaccination and a <strong>three-month wait</strong> before " +
      "entry. As with the UK, the smart move is to do the titer test before you " +
      "leave, while the vaccination is current. See our guide to " +
      "<a href=\"/take-pet-out-of-thailand/to-eu.html\">taking a pet from Thailand to the EU</a>.</p>" }
  ],
  faqs: [
    ["Is my EU pet passport enough to bring my pet to Thailand?",
     "<p>No. The EU pet passport governs movement within the EU. For Thailand you need an EU export health certificate endorsed by your competent authority, plus the Thai import permit.</p>"],
    ["What does the EU need for the return journey?",
     "<p>A valid rabies vaccination and a rabies titer test, with a three-month wait after the blood sample. Doing the titer test before you leave the EU avoids that wait later.</p>"]
  ]
}));

pages.push(countryPage({
  slug: "from-australia", crumb: "From Australia",
  title: "Bringing a pet to Thailand from Australia | PattayaPets",
  desc: "Bringing a pet from Australia to Thailand, and the hard truth about the " +
    "return journey — Australia&rsquo;s strict biosecurity rules.",
  h1: "Bringing a pet to Thailand from Australia",
  lede: "Australia to Thailand is manageable. It is the journey <em>back</em> to " +
    "Australia that owners must understand before they ever leave.",
  sections: [
    { h: "Australia to Thailand", html:
      "<p>Heading to Thailand, the steps are the standard ones &mdash; " + IMP_STEPS +
      ". This direction is the straightforward part.</p>" },
    { h: "The return to Australia is the hard part", html:
      "<p>Australia has some of the strictest pet biosecurity rules in the " +
      "world, and <strong>Thailand is not on its list of approved countries</strong> " +
      "for direct pet import. In practice, bringing a pet from Thailand to " +
      "Australia means a long, structured process: a rabies titer test, an " +
      "import permit, a period spent in an approved country to qualify, and a " +
      "mandatory stay in the government quarantine facility on arrival in " +
      "Australia. It commonly takes <strong>six months or more</strong> of " +
      "planning.</p>" +
      "<p>If you are an Australian who may one day return with your pet, do not " +
      "improvise this. Speak to the Australian Department of Agriculture and a " +
      "specialist <a href=\"/pet-relocation/\">pet relocation agent</a> early, " +
      "and read our guide to " +
      "<a href=\"/take-pet-out-of-thailand/to-australia.html\">taking a pet from Thailand to Australia</a>.</p>" }
  ],
  faqs: [
    ["Can I fly my pet straight from Thailand to Australia?",
     "<p>Generally not directly — Thailand is not an approved country for direct pet import to Australia. The route usually involves time in an approved country first, plus quarantine on arrival. It is a long process; get specialist advice early.</p>"],
    ["How long does the return to Australia take to arrange?",
     "<p>Owners commonly report six months or more of preparation. Start with the Australian Department of Agriculture and a relocation agent well before you plan to travel.</p>"]
  ]
}));

module.exports = pages;
