"use strict";
/* Flagship cluster: Bringing your pet to Thailand */

const { article, hub } = require("../guidekit.js");
const { importCountryRelated, attachReturnExportLink } = require("../data/country-pairs.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const CLUSTER = { name: "Bringing a pet to Thailand", path: "/bring-pet-to-thailand/" };
const SUB = [GUIDES, CLUSTER];

const VERIFY =
  "This guide was last reviewed on 30 May 2026 against the Thai embassy pet-import " +
  "guidance (revised January 2025), DLD Animal Quarantine Station contacts and " +
  "published export procedures. Thailand&rsquo;s Department of Livestock Development " +
  "(DLD), airlines and origin-country authorities change their rules without notice. " +
  "Treat this as an orientation, then confirm every current requirement with the DLD, " +
  "your airline and your origin-country authority before you book or travel.";

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
  title: "How to Bring a Pet to Thailand (DLD Guide 2026) | PattayaPets",
  image: "/assets/img/og-import.png",
  updated: "2026-05-30",
  desc: "How to bring a dog or cat to Thailand in 2026: DLD import permit, microchip, " +
    "rabies vaccination, health certificate, airlines and arrival at Bangkok or U-Tapao.",
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
    "<p>Moving to Thailand with a pet usually sits alongside visa and relocation " +
    "planning &mdash; for the human side of the move, see " +
    '<a href="https://pattayavisahelp.com/" target="_blank" rel="noopener noreferrer">' +
    "Pattaya Visa Help</a> in the Pattaya Authority network.</p>" +
    '<div class="callout callout-tip"><div class="ch">Rules change — verify before you act</div>' +
    "<p>" + VERIFY + "</p>" + OFFICIAL + "</div>",
  groups: [
    {
      title: "The process, step by step",
      cards: [
        { tag: "Start here", name: "Import checklist", desc: "A printable step-by-step checklist for the whole move.", path: "/bring-pet-to-thailand/checklist.html" },
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
        { name: "From South Africa", desc: "DAFF export certificate and planning from Africa.", path: "/bring-pet-to-thailand/from-south-africa.html" }
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
  title: "Thailand Pet Import Microchip | ISO 11784/11785 & Order | PattayaPets",
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
      "application, so it needs to be consistent everywhere.</p>" },
    { h: "Common mistakes", html:
      "<ul>" +
      "<li><strong>Rabies before chip</strong> &mdash; the most frequent sequencing error; the rabies shot must be redone after implantation.</li>" +
      "<li><strong>Non-ISO chip without a plan</strong> &mdash; older US chips may not scan at the AQS; add an ISO chip or bring a compatible reader.</li>" +
      "<li><strong>Typos across documents</strong> &mdash; one wrong digit on the permit vs the health certificate vs the airline booking stops clearance.</li>" +
      "<li><strong>Assuming a tattoo counts</strong> &mdash; Thailand expects a scannable ISO microchip for modern imports.</li>" +
      "</ul>" },
    { h: "What comes next", html:
      "<p>Once the chip is in and documented, move on to the " +
      '<a href="/bring-pet-to-thailand/rabies-vaccination-titer-test.html">rabies vaccination and titer test</a>. ' +
      "After arrival, register the chip locally &mdash; see " +
      '<a href="/owning-a-pet-in-pattaya/microchipping-your-pet.html">microchipping your pet</a>.</p>' }
  ],
  faqs: [
    ["Does my pet need a new microchip if it already has an ISO one?",
     "<p>No. An existing ISO 11784/11785 15-digit microchip is fine — you do not need another. You only need to act if the existing chip is a non-ISO type.</p>"],
    ["My pet was vaccinated for rabies before it was chipped. Is that a problem?",
     "<p>Usually yes. Because the rabies record must reference the microchip, a rabies vaccination given before the chip is generally not accepted, and the vaccination has to be redone after chipping. Confirm your exact situation with your vet and the DLD.</p>"],
    ["Can I use a tattoo instead of a microchip?",
     "<p>For Thailand import, plan on an ISO microchip. Tattoos alone are not a substitute under current DLD guidance for most routes.</p>"],
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
  title: "Rabies Vaccination & Titer Test for Thailand Import | PattayaPets",
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
      "vet, can save you months later.</p>" +
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
     "<p>At least 21 days before arrival in Thailand, and it must still be within its validity period on the day you travel. If in doubt, give it earlier rather than later.</p>"],
    ["Is the titer test required to enter Thailand?",
     "<p>Generally no, for pets coming from rabies-controlled countries. It becomes important if you later move your pet to a country that requires it, such as the UK, EU or Australia — so many owners do it pre-emptively. Confirm your case with the DLD.</p>"],
    ["Where is the titer blood test analysed?",
     "<p>At an approved rabies laboratory — your vet or a pet relocation agent will know the nearest accepted lab. The result takes a few weeks to come back, which is why you start early.</p>"]
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
  title: "Pet Health Certificate for Thailand Import | Endorsement & Timing | PattayaPets",
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
  title: "Thailand DLD Pet Import Permit: How to Apply (2026) | PattayaPets",
  desc: "Apply for Thailand's DLD pet import permit (form R1/1): 7–60 day window, AQS " +
    "email contacts, required vaccines, 500 baht arrival fee and what to submit.",
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
      "(confirm the current amount with the AQS).</p>" },
    { h: "Confirm your arrival date", html:
      "<p>DLD guidance also asks you to <strong>confirm your exact arrival date with " +
      "the AQS at least three days before you land</strong>, so the quarantine " +
      "station can prepare. After your permit is approved and your flight is " +
      "booked, email the AQS with your final itinerary &mdash; do not assume a " +
      "permit alone is enough without telling them when you are coming.</p>" },
    { h: "What comes next", html:
      "<p>With the permit in hand, book the flight under " +
      '<a href="/bring-pet-to-thailand/airline-pet-policies.html">airline pet policies</a>, ' +
      "then read " +
      '<a href="/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html">what happens on arrival</a>. ' +
      "Many owners use a " +
      '<a href="/pet-relocation/">pet relocation agent</a> to keep the timing aligned.</p>' }
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
    { name: "U-Tapao or Bangkok?", path: "/bring-pet-to-thailand/u-tapao-airport-pets.html", desc: "Which airport your permit targets." },
    { name: "Health certificate", path: "/bring-pet-to-thailand/health-certificate.html", desc: "The document the permit relies on." },
    { name: "Pet relocation agents", path: "/pet-relocation/", desc: "Agents who file the permit for you." }
  ]
}));

/* ---------------- AIRLINE POLICIES ---------------- */
pages.push(importStep({
  path: "/bring-pet-to-thailand/airline-pet-policies.html",
  title: "Flying a Pet to Thailand | Airline Policies, Cabin & Cargo | PattayaPets",
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
      "large dogs or when travelling separately. " +
      "<a href=\"/pet-relocation/\">Pet relocation agents</a> usually arrange this.</li></ul>" },
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
  title: "Arriving in Thailand with a Pet | AQS Clearance & Pattaya Transfer | PattayaPets",
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
      "incomplete or the animal shows signs of disease — potentially for tests " +
      "or treatment lasting 30 days or more. This is exactly why the earlier " +
      "steps matter. Bring printed originals of everything, organised and easy " +
      "to hand over.</p>" },
    { h: "Getting from the airport to Pattaya", html:
      "<p>Plan the onward journey before you fly. Arrange a pet-friendly private " +
      "transfer, a <a href=\"/pet-relocation/\">relocation agent&rsquo;s</a> vehicle, " +
      "a hire car from " +
      '<a href="https://pattaya-vehicle-rentals.com/" target="_blank" rel="noopener noreferrer">' +
      "Pattaya Vehicle Rentals</a>, " +
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
     "<p>Not routinely. If the import permit and paperwork are in order and your pet is healthy, there is no standard quarantine period — pets are usually released the same day. Quarantine is a fallback the officer can use if something is wrong.</p>"],
    ["How do I get my pet from Bangkok airport to Pattaya?",
     "<p>Arrange a pet-friendly transfer in advance. It is about a 90-minute to two-hour drive. Relocation agents can include the airport-to-door transfer in their service.</p>"]
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
  title: "Cost to Bring a Pet to Thailand (2026) | Flights, Permits & Vet Fees | PattayaPets",
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
      "<ul><li><strong>Microchip</strong> &mdash; small, if your pet is not already chipped. See " +
      "<a href=\"/bring-pet-to-thailand/microchip-requirements.html\">microchip requirements</a>.</li>" +
      "<li><strong>Vaccinations</strong> &mdash; rabies and the others, at normal vet rates. See " +
      "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">rabies &amp; titer test</a>.</li>" +
      "<li><strong>Rabies titer test</strong> &mdash; a lab blood test; modest, but only if you need it.</li>" +
      "<li><strong>Health certificate &amp; government endorsement</strong> &mdash; the vet exam plus the official endorsement fee. See " +
      "<a href=\"/bring-pet-to-thailand/health-certificate.html\">health certificate</a>.</li>" +
      "<li><strong>IATA travel crate</strong> &mdash; sized to your pet; larger dogs need larger, pricier crates.</li>" +
      "<li><strong>The flight</strong> &mdash; almost always the biggest single cost, and the most variable. See " +
      "<a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">airline pet policies</a>.</li>" +
      "<li><strong>Import permit</strong> &mdash; a relatively minor official fee. See " +
      "<a href=\"/bring-pet-to-thailand/import-permit-thailand-dld.html\">DLD import permit</a>.</li>" +
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
      "buys real peace of mind.</p>" },
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
     "<p>Almost always the flight itself, especially for a medium or large dog flying in the hold or as cargo. Crate size and route drive the price.</p>"],
    ["Is it cheaper to do it without an agent?",
     "<p>It can be, if your route is simple and you have time to manage the paperwork and bookings yourself. For complex moves the agent fee often pays for itself by avoiding costly mistakes and missed deadlines.</p>"]
  ],
  related: [
    { name: "Pet relocation agents", path: "/pet-relocation/", desc: "Specialists who quote and manage the move." },
    { name: "Airline pet policies", path: "/bring-pet-to-thailand/airline-pet-policies.html", desc: "Understanding the biggest cost." },
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
  { name: "Microchip requirements", path: "/bring-pet-to-thailand/microchip-requirements.html", desc: "Step one — which has to come first." },
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
    updated: o.updated || "2026-05-31",
    sections: sections,
    faqs: o.faqs,
    related: o.related || countryRelated(o.slug)
  });
}

const TH_DOCS_TABLE =
  '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
  '<th scope="col">Document</th><th scope="col">What it is</th></tr></thead><tbody>' +
  '<tr><th scope="row">DLD import permit</th><td>Form <strong>R1/1</strong>, emailed to the AQS at your arrival airport. Valid <strong>60 days</strong> from issue. Apply <strong>7&ndash;60 days</strong> before departure (around <strong>30 days</strong> is sensible).</td></tr>' +
  '<tr><th scope="row">Microchip certificate</th><td>ISO 11784/11785 15-digit chip, implanted <strong>before</strong> rabies vaccination.</td></tr>' +
  '<tr><th scope="row">Vaccination records</th><td>In English. Dogs: rabies, distemper, hepatitis, parvovirus, leptospirosis (or negative leptospirosis test within 30 days). Cats: rabies and feline panleukopenia (FVRCP covers this). At least <strong>21 days</strong> after primary shots.</td></tr>' +
  '<tr><th scope="row">Government-endorsed health certificate</th><td>Your origin country&rsquo;s official export certificate &mdash; endorsed by APHA, USDA APHIS, DAFF, etc.</td></tr>' +
  '<tr><th scope="row">Your passport</th><td>Original at the AQS (or the person collecting a cargo shipment).</td></tr>' +
  '<tr><th scope="row">Pet photo</th><td>Colour, face clearly visible (for the permit application).</td></tr>' +
  '<tr><th scope="row">Flight booking</th><td>Itinerary showing date, flight number and arrival airport.</td></tr>' +
  '</tbody></table></div>';

const TH_ARRIVAL =
  "<p>From a rabies-controlled origin such as the UK, USA or Australia, pets with " +
  "complete paperwork are normally cleared at the AQS the same day &mdash; this is " +
  "an inspection, not a multi-week quarantine. The AQS issues Forms R-6 and R-7 and " +
  "charges <strong>500&nbsp;baht</strong> per animal (confirm the current fee). " +
  "Email the AQS to <strong>confirm your arrival date at least three days before " +
  "landing</strong>. See " +
  '<a href="/bring-pet-to-thailand/thailand-pet-quarantine.html">pet quarantine in Thailand</a> ' +
  "and " +
  '<a href="/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html">arriving at Suvarnabhumi</a>.</p>';

const TH_FAILS =
  "<ul>" +
  "<li><strong>Wrong order</strong> &mdash; rabies given before the microchip, or import permit applied before the 21-day wait has passed.</li>" +
  "<li><strong>Permit timing</strong> &mdash; applied too early (expires before you fly) or too late (AQS cannot process in time).</li>" +
  "<li><strong>Airline vs government</strong> &mdash; Thailand may allow permit-on-arrival in some cases, but your airline may refuse boarding without the permit email in hand.</li>" +
  "<li><strong>Health certificate window</strong> &mdash; endorsed certificate expires before you land; a delayed flight can mean starting again.</li>" +
  "<li><strong>Cargo arrival hours</strong> &mdash; pets shipped as cargo may only be collected during AQS weekday business hours at some airports.</li>" +
  "</ul>";

pages.push(countryPage({
  slug: "from-uk", crumb: "From the UK",
  title: "Bring a Pet to Thailand from the UK (APHA & DLD 2026) | PattayaPets",
  desc: "UK to Thailand pet import: EHC 2917, APHA timeline, DLD permit checklist, " +
    "Bangkok arrival and why to do the rabies titer test before you leave.",
  h1: "Bringing a pet to Thailand from the UK",
  lede: "Thousands of British expats live in Pattaya. The Thai requirements are the " +
    "same for everyone; what is UK-specific is export certificate <strong>2917</strong>, " +
    "who certifies it, and what you must plan now if you ever want to come home with your pet.",
  officialExtra:
    "<p><strong>UK sources:</strong> " +
    "<a href=\"https://www.gov.uk/export-health-certificates/export-cats-and-dogs-to-thailand-certificate-2917\" " +
    "target=\"_blank\" rel=\"noopener nofollow\">EHC 2917 (cats and dogs to Thailand)</a>; " +
    "<a href=\"https://www.gov.uk/guidance/get-an-export-health-certificate\" " +
    "target=\"_blank\" rel=\"noopener nofollow\">how to get an export health certificate</a>; " +
    "<a href=\"https://www.gov.uk/bring-pet-to-great-britain\" " +
    "target=\"_blank\" rel=\"noopener nofollow\">bringing a pet to Great Britain</a> " +
    "(return journey).</p>",
  sections: [
    { h: "The timeline — what to do when", html:
      "<p>Build backwards from your flight date. If you may return to the UK, add " +
      "the <strong>rabies titer test</strong> at the start &mdash; not the end.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">UK / Thailand</th></tr></thead><tbody>' +
      '<tr><th scope="row">3+ months before (if UK return possible)</th>' +
      '<td>Microchip (if needed), rabies vaccination, optional <a href="/bring-pet-to-thailand/rabies-vaccination-titer-test.html">rabies titer (FAVN) test</a> &mdash; blood drawn &ge;30 days after vaccination</td>' +
      '<td>Your vet; approved lab</td></tr>' +
      '<tr><th scope="row">6&ndash;8 weeks before</th>' +
      '<td>DHPP (dogs) or FVRCP (cats), leptospirosis (dogs) or negative leptospirosis test; wait <strong>21 days</strong> after any primary rabies shot</td>' +
      '<td>Your vet</td></tr>' +
      '<tr><th scope="row">~30 days before departure</th>' +
      '<td>Apply for <a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a> (form R1/1) by email to the AQS at your arrival airport</td>' +
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
      '<tr><th scope="row">&ge;3 days before landing</th>' +
      '<td>Email the AQS to confirm your exact arrival date and flight</td>' +
      '<td>DLD AQS</td></tr>' +
      '<tr><th scope="row">Arrival day</th>' +
      '<td>AQS inspection at the airport; Forms R-6/R-7 issued; 500&nbsp;baht fee</td>' +
      '<td>Bangkok / U-Tapao AQS</td></tr>' +
      '</tbody></table></div>' +
      "<p>Full step pages: " + IMP_STEPS + ".</p>" },
    { h: "The UK export certificate (EHC 2917)", html:
      "<p>Great Britain does not use the EU pet passport for exports to Thailand. " +
      "You need the country-specific export health certificate " +
      "<strong>EHC 2917</strong> &mdash; &ldquo;Export cats and dogs to Thailand&rdquo; " +
      "(version 3 guidance notes, updated May 2026 on GOV.UK).</p>" +
      "<p><strong>England, Scotland and Wales:</strong> apply through APHA&rsquo;s " +
      "<a href=\"https://www.gov.uk/export-health-certificates/export-cats-and-dogs-to-thailand-certificate-2917\" " +
      "target=\"_blank\" rel=\"noopener nofollow\">EHC online service</a>. You nominate " +
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
      "<li>For <strong>dogs</strong>, a vet-administered tapeworm treatment within the window before arrival</li>" +
      "<li>Travel on an <strong>approved route and carrier</strong> into Great Britain</li>" +
      "</ul>" +
      "<p>The practical lesson: if there is any chance you will return with your pet, " +
      "have the titer test done <strong>while you are still in the UK</strong>, with " +
      "the vaccination fresh. That removes the three-month wait later. See our guide to " +
      "<a href=\"/take-pet-out-of-thailand/to-uk.html\">exporting a pet from Thailand to the UK</a>.</p>" +
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
     "<p>Generally no — the UK is a rabies-controlled country, so Thailand does not require the titer test to enter. But the UK requires it for the return journey, so most British owners do the test before leaving.</p>"],
    ["Which export certificate do I need from the UK?",
     "<p>Export health certificate <strong>2917</strong> for cats and dogs to Thailand, applied for through APHA (or DAERA in Northern Ireland) and signed by an Official Veterinarian. Confirm you are using the latest version on GOV.UK.</p>"],
    ["How long before the flight should I apply for the Thai import permit?",
     "<p>Inside the official window: at least seven Thailand business days before departure, and no more than 60 days before. Around 30 days ahead is a sensible target — long enough for AQS processing, short enough that the permit is still valid when you fly.</p>"],
    ["Will my pet be quarantined on arrival in Thailand?",
     "<p>Not usually, if every document is in order and your pet appears healthy. The AQS inspection is typically same-day clearance. Quarantine is reserved for paperwork failures or signs of disease — see our <a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">quarantine guide</a>.</p>"],
    ["Can I fly into U-Tapao instead of Bangkok?",
     "<p>U-Tapao is closer to Pattaya. Check that your airline accepts pets on that route and apply for the import permit through the correct AQS for your port of entry. See <a href=\"/bring-pet-to-thailand/u-tapao-airport-pets.html\">U-Tapao or Bangkok?</a></p>"]
  ]
}));

pages.push(countryPage({
  slug: "from-usa", crumb: "From the USA",
  title: "Bring a Pet to Thailand from the USA (USDA & DLD 2026) | PattayaPets",
  desc: "USA to Thailand pet import: USDA APHIS endorsement, DLD permit, 10-day " +
    "certificate window, document checklist and CDC rules if you return later.",
  h1: "Bringing a pet to Thailand from the USA",
  lede: "The Thai side is the same for every nationality. From the United States, " +
    "what catches people out is the <strong>two-step US endorsement</strong> " +
    "(accredited vet, then USDA APHIS), the <strong>10-day certificate window</strong>, " +
    "and the CDC&rsquo;s separate rules if a dog ever re-enters the US.",
  officialExtra:
    "<p><strong>US sources:</strong> " +
    "<a href=\"https://www.aphis.usda.gov/pet-travel/us-to-another-country-export\" " +
    "target=\"_blank\" rel=\"noopener nofollow\">USDA APHIS pet export</a>; " +
    "<a href=\"https://www.cdc.gov/importation/bringing-an-animal-into-the-us/index.html\" " +
    "target=\"_blank\" rel=\"noopener nofollow\">CDC dog and cat import rules</a>; " +
    "Thai embassy guide (revised January 2025) for the US-specific checklist.</p>",
  sections: [
    { h: "The timeline — what to do when", html:
      "<p>The Thai Royal Consulate-General in Los Angeles publishes a US-specific " +
      "checklist (revised January 2025). The order matters: import permit first, " +
      "then the endorsed health certificate in the final days.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Who</th></tr></thead><tbody>' +
      '<tr><th scope="row">3+ months before (if US return possible)</th>' +
      '<td>Microchip, rabies vaccination, optional <a href="/bring-pet-to-thailand/rabies-vaccination-titer-test.html">rabies titer test</a> for future CDC compliance</td>' +
      '<td>USDA-accredited vet</td></tr>' +
      '<tr><th scope="row">6&ndash;8 weeks before</th>' +
      '<td>DHPP/FVRCP, leptospirosis (dogs) or negative test; <strong>21-day wait</strong> after primary rabies</td>' +
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
      '<tr><th scope="row">&ge;3 days before landing</th>' +
      '<td>Confirm arrival date with the AQS by email</td>' +
      '<td>DLD</td></tr>' +
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
      "target=\"_blank\" rel=\"noopener nofollow\">USDA APHIS pet-travel pages</a>.</p>" +
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
      "<p><strong>Cargo shipments:</strong> the cargo AQS at Suvarnabhumi operates " +
      "Monday&ndash;Friday business hours; hand-carried pets can be cleared 24 hours. " +
      "Plan arrival times accordingly.</p>" },
    { h: "The CDC rules — for the return journey", html:
      "<p>The CDC governs dogs (and cats) <em>entering the United States</em>, not " +
      "leaving it. Thailand is treated as a <strong>high-rabies-risk country</strong>. " +
      "If you may bring your dog back to the US later, you face additional CDC " +
      "requirements that can include:</p>" +
      "<ul>" +
      "<li>ISO microchip</li>" +
      "<li>Minimum age rules</li>" +
      "<li>Rabies vaccination history tied to the microchip</li>" +
      "<li>A <strong>rabies titer test</strong> from an approved laboratory, for many scenarios</li>" +
      "<li>CDC import paperwork submitted in advance</li>" +
      "<li>Arrival through designated airports for some routes</li>" +
      "</ul>" +
      "<p>These rules have changed several times since 2024. Do not rely on a blog post " +
      "&mdash; read the current " +
      "<a href=\"https://www.cdc.gov/importation/bringing-an-animal-into-the-us/index.html\" " +
      "target=\"_blank\" rel=\"noopener nofollow\">CDC requirements</a> directly and " +
      "see our guide to " +
      "<a href=\"/take-pet-out-of-thailand/to-usa.html\">exporting a pet from Thailand to the USA</a>. " +
      "Doing the titer test before you leave the US, while vaccinations are current, " +
      "is the same forward-planning advice as for UK owners.</p>" },
    { h: "Common mistakes US owners make", html: TH_FAILS +
      "<ul>" +
      "<li><strong>Electronic-only health certificate</strong> &mdash; Thailand wants the original USDA-stamped paper.</li>" +
      "<li><strong>Certificate after endorsement, not from endorsement</strong> &mdash; the 10-day clock starts on the endorsement date, not the vet exam date.</li>" +
      "<li><strong>Non-ISO microchip</strong> &mdash; older US chips may need a second ISO chip implanted before rabies is re-done.</li>" +
      "<li><strong>Ignoring CDC until the return flight</strong> &mdash; by then it may be too late to meet titer-test timelines.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Do I apply for the Thai import permit before or after the USDA health certificate?",
     "<p>Before. The Thai embassy&rsquo;s January 2025 US checklist says to apply for the import permit first (7&ndash;60 days before departure), then have the accredited vet issue the OHC after you receive the permit, and then get USDA endorsement — all within the 10-day validity window before arrival.</p>"],
    ["Who endorses my pet's health certificate in the US?",
     "<p>A USDA-accredited veterinarian completes it, and USDA APHIS endorses (stamps) the original — generally via the VEHCS online system. Your vet will know the process; build in several days for APHIS processing.</p>"],
    ["Do CDC rules affect taking my dog TO Thailand?",
     "<p>No — CDC rules govern entry into the United States. They matter when you plan to bring your dog back from Thailand later, which is why US owners should read them before leaving, not on the return trip.</p>"],
    ["Is a rabies titer test required to enter Thailand from the US?",
     "<p>Generally no for pets from rabies-controlled countries. Thailand may require it for pets from high-rabies origins. The test is still worth doing before departure if you might return to the US, UK or EU later.</p>"],
    ["Which Bangkok airport should I use for Pattaya?",
     "<p>Most owners fly into Suvarnabhumi (BKK). U-Tapao (UTP) is closer to Pattaya but has fewer pet-friendly routes — see <a href=\"/bring-pet-to-thailand/u-tapao-airport-pets.html\">U-Tapao or Bangkok?</a></p>"]
  ]
}));

pages.push(countryPage({
  slug: "from-australia", crumb: "From Australia",
  title: "Bring a Pet to Thailand from Australia (DAFF & DLD 2026) | PattayaPets",
  desc: "Australia to Thailand pet import: DAFF export permit, NOI timeline, DLD " +
    "import permit, 72-hour export window and the truth about returning home.",
  h1: "Bringing a pet to Thailand from Australia",
  lede: "Australia&rarr;Thailand is manageable if you respect both countries&rsquo; " +
    "timelines. Australia&rarr;Thailand&rarr;<em>Australia</em> is a different " +
    "proposition entirely &mdash; understand that before you ever leave.",
  officialExtra:
    "<p><strong>Australian sources:</strong> " +
    "<a href=\"https://www.agriculture.gov.au/biosecurity-trade/export/controlled-goods/live-animals/companion-and-other-live-animals\" " +
    "target=\"_blank\" rel=\"noopener nofollow\">DAFF companion animal export</a>; " +
    "<a href=\"https://canberra.thaiembassy.org/en/content/bringing-pets-to-thailand\" " +
    "target=\"_blank\" rel=\"noopener nofollow\">Royal Thai Embassy Canberra import guide</a>.</p>",
  sections: [
    { h: "The timeline — what to do when", html:
      "<p>You are juggling <strong>two governments</strong>: DAFF on the way out, DLD " +
      "on the way in. Missing either timeline voids the move.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th><th scope="col">Authority</th></tr></thead><tbody>' +
      '<tr><th scope="row">8+ weeks before</th>' +
      '<td>ISO microchip, rabies and core vaccinations; pet must be <strong>at least 4 months old</strong> to import into Thailand</td>' +
      '<td>Registered Australian vet</td></tr>' +
      '<tr><th scope="row">After 21-day post-vaccination wait</th>' +
      '<td>Apply for Thai <a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a> (R1/1) by email to the AQS at your arrival airport</td>' +
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
      "<p>If you are shipping cargo without travelling on the same flight, the embassy " +
      "guide asks for separate shipper and pickup-person passport copies and recommends " +
      "arrival during AQS weekday business hours for cargo clearance.</p>" },
    { h: "The return to Australia — read this first", html:
      "<p>Australia has some of the strictest pet biosecurity rules in the world. " +
      "<strong>Thailand is not on Australia&rsquo;s list of approved countries</strong> " +
      "for direct dog and cat import. In practice, bringing a pet from Thailand back " +
      "to Australia means:</p>" +
      "<ul>" +
      "<li>A <strong>rabies titer test</strong> and a series of timed veterinary steps</li>" +
      "<li>An <strong>Australian import permit</strong> applied for months ahead</li>" +
      "<li>A qualifying period spent in an <strong>approved country</strong> (Group 2 or 3) before entry to Australia — Thailand alone does not qualify</li>" +
      "<li><strong>Mandatory quarantine</strong> at the government facility (Mickleham, Victoria) on arrival, even when every step is perfect</li>" +
      "<li>Commonly <strong>six months or more</strong> of planning and <strong>thousands of dollars</strong> in fees</li>" +
      "</ul>" +
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
      "<li><strong>Assuming direct return</strong> &mdash; Thailand-to-Australia direct import is not available; plan an approved-country pathway years ahead, not weeks.</li>" +
      "<li><strong>Cargo arrival on a weekend</strong> &mdash; cargo AQS hours may delay pickup.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["Can I fly my pet straight from Australia to Thailand?",
     "<p>Yes — this direction is routinely done. You need DAFF export approval, a Thai import permit, airline cargo or accompanied booking, and compliant vaccinations. Direct routes are limited; confirm pet acceptance with the airline early.</p>"],
    ["How long does DAFF take to approve an export?",
     "<p>Allow at least 10 working days from lodging the Notice of Intention, often longer if documentation needs correction. Then remember the 72-hour export window once the permit is issued.</p>"],
    ["Will my pet be quarantined on arrival in Thailand?",
     "<p>Usually not if paperwork is complete and your pet is healthy — the AQS inspection is same-day clearance. Incomplete documents or signs of illness can trigger quarantine of 7–30 days at an approved facility.</p>"],
    ["Can I fly my pet straight from Thailand back to Australia?",
     "<p>Generally no — Thailand is not an approved country for direct import. The route involves time in an approved country, an import permit, and mandatory government quarantine on arrival in Australia. Plan with DAFF and a relocation specialist.</p>"],
    ["How long does the return to Australia take to arrange?",
     "<p>Owners commonly report six months or more of preparation, often longer if an approved-country residency period is required. Start before you leave Australia if return is possible.</p>"]
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
  "<li><strong>Return-trip blindness</strong> &mdash; no titer test before leaving Europe, then a three-month wait when you try to bring the pet back from Thailand.</li>" +
  "</ul>";

pages.push(countryPage({
  slug: "from-eu", crumb: "From the EU",
  title: "Bring a Pet to Thailand from the EU (DLD Import 2026) | PattayaPets",
  desc: "EU to Thailand pet import: export health certificate, competent authority " +
    "endorsement, DLD import permit and Bangkok AQS clearance — plus EU return planning.",
  updated: "2026-05-31",
  h1: "Bringing a pet to Thailand from the EU",
  lede: "EU owners travel with a pet passport at home — but it does not do the " +
    "job for Thailand, or for coming back. Thailand applies one import rulebook; " +
    "your member state issues the export certificate.",
  officialExtra:
    "<p><strong>EU sources:</strong> " +
    "<a href=\"https://food.ec.europa.eu/animals/movement-pets_en\" " +
    "target=\"_blank\" rel=\"noopener nofollow\">European Commission &mdash; movement of pets</a>.</p>",
  sections: [
    { h: "The timeline — what to do when", html:
      "<p>Build backwards from your Bangkok arrival date. If you may return to the EU, " +
      "add the <strong>rabies titer test</strong> at the start.</p>" +
      '<div class="table-wrap"><table class="facts-table"><thead><tr>' +
      '<th scope="col">When</th><th scope="col">Step</th></tr></thead><tbody>' +
      '<tr><th scope="row">3+ months before (if EU return possible)</th>' +
      '<td>ISO microchip (if needed), rabies vaccination, optional <a href="/bring-pet-to-thailand/rabies-vaccination-titer-test.html">FAVN titer test</a> &mdash; blood drawn &ge;30 days after vaccination</td></tr>' +
      '<tr><th scope="row">6&ndash;8 weeks before</th>' +
      '<td>Core vaccinations (DHPP/FVRCP, leptospirosis for dogs); wait <strong>21 days</strong> after any primary rabies shot</td></tr>' +
      '<tr><th scope="row">~30 days before departure</th>' +
      '<td>Apply for <a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a> (form R1/1) by email to the AQS at your arrival airport</td></tr>' +
      '<tr><th scope="row">2&ndash;3 weeks before</th>' +
      '<td>Book pet space on the flight; confirm airline requires the import permit before boarding</td></tr>' +
      '<tr><th scope="row">Final 7&ndash;10 days</th>' +
      '<td>Official vet completes <strong>EU export health certificate</strong>; competent authority endorses as your country requires</td></tr>' +
      '<tr><th scope="row">&ge;3 days before landing</th>' +
      '<td>Email the AQS to confirm your exact arrival date and flight</td></tr>' +
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
      "<li><strong>ISO 11784/11785 microchip</strong> implanted before the rabies vaccination used for export.</li>" +
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
      "non-EU country &mdash; you will need a valid rabies vaccination and a " +
      "<strong>rabies titer test</strong>, with the blood sample taken at least " +
      "30 days after vaccination and a <strong>three-month wait</strong> before " +
      "entry. As with the UK, the smart move is to do the titer test before you " +
      "leave, while the vaccination is current. See our guide to " +
      "<a href=\"/take-pet-out-of-thailand/to-eu.html\">taking a pet from Thailand to the EU</a>.</p>" },
    { h: "Common mistakes on this corridor", html: TH_FAILS + EU_IMPORT_FAILS }
  ],
  faqs: [
    ["Is my EU pet passport enough to bring my pet to Thailand?",
     "<p>No. The EU pet passport governs movement within the EU. For Thailand you need an export health certificate endorsed by your competent authority, plus the Thai import permit.</p>"],
    ["Do all EU countries use the same export certificate for Thailand?",
     "<p>No. Thailand's import rules are uniform, but each member state's competent authority issues its own export certificate format and endorsement process. Use our country page for your departure state.</p>"],
    ["What does the EU need for the return journey?",
     "<p>A valid rabies vaccination and a rabies titer test, with a three-month wait after the blood sample. Doing the titer test before you leave the EU avoids that wait later.</p>"],
    ["Which EU airport should I fly from?",
     "<p>Thailand cares about correct paperwork, not which EU hub you use. Choose a route with a confirmed pet booking and minimal connection risk; long layovers in non-EU countries can trigger extra transit rules.</p>"],
    ["How long does the full EU-to-Thailand process take?",
     "<p>Budget six to eight weeks minimum for straightforward moves, longer if you are lining up vaccinations, permit processing and airline cargo space. Add months if you are also preparing a valid titer test for a future EU return.</p>"]
  ]
}));

module.exports = pages;
