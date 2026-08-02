"use strict";
/* Structural pages: About, Standards, Start Here, Contact, Masthead,
   Corrections, Privacy, Accessibility */

const { inPageLinkSection } = require("../linking.js");
const { SITE } = require("../site-config.js");

const CONTACT_EMAIL = SITE.email;
const CONTACT_LINK = '<a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + "</a>";

const DISC =
  '<div class="disclaimer-box"><strong>Editorial and informational only.</strong> ' +
  "PattayaPets is an editorial publication about pet businesses and pet ownership. " +
  "It is not a veterinary practice and does not give veterinary advice. Always " +
  "consult a qualified veterinarian.</div>";

function fmtDate(iso) {
  var parts = String(iso || "").split("-");
  var months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  if (parts.length !== 3 || !months[Number(parts[1]) - 1]) return String(iso || "");
  return Number(parts[2]) + " " + months[Number(parts[1]) - 1] + " " + parts[0];
}

function prosePage(o) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(o.updated || ""))) {
    throw new Error("Missing or invalid reviewed date for " + (o.path || "structural page"));
  }
  var tail = o.linkTopic ? inPageLinkSection(o.linkTopic) : "";
  return {
    path: o.path,
    title: o.title,
    description: o.desc,
    crumb: o.crumb,
    breadcrumbs: o.breadcrumbs || [],
    updated: o.updated,
    noindex: !!o.noindex,
    schema: o.schema,
    body:
      '<section class="section"><div class="container"><div class="prose">' +
      '<p class="eyebrow">' + o.eyebrow + "</p><h1>" + o.h1 + "</h1>" +
      o.body +
      (o.noindex ? "" : DISC) +
      '<p class="updated">Last updated <time datetime="' + o.updated + '">' +
      fmtDate(o.updated) + "</time></p>" +
      "</div></div></section>" + tail
  };
}

const pages = [];

/* ---------------- Start Here ---------------- */
pages.push({
  path: "/start-here.html",
  title: "Start Here: Vets, Import & Emergencies Pattaya | PattayaPets",
  description:
    "A plain-English orientation for pet owners new to Pattaya: emergency contacts, " +
    "finding a vet, the hot climate, bringing a pet in or out, and adoption.",
  crumb: "Start here",
  breadcrumbs: [],
  bodyClass: "page-start-here",
  updated: "2026-08-01",
  body:
    '<section class="section"><div class="container"><div class="prose">' +
    '<p class="eyebrow">Orientation</p>' +
    "<h1>New to Pattaya with a pet? Start here</h1>" +
    "<p>Whether you have just arrived, are planning the move, or have adopted a " +
    "street dog and suddenly have questions, this page is the short version. It " +
    "points you to the right guide for each situation. It is orientation, not " +
    "veterinary advice.</p>" +
    '<div class="btn-row">' +
    '<a class="btn btn-primary" href="/guides.html?topic=start">Browse orientation guides</a>' +
    '<a class="btn btn-alert" href="/pet-emergency/24-hour-vets-pattaya.html">24-hour vets</a>' +
    '<a class="btn btn-ghost" href="/vets/?filter=24h">24-hour directory</a></div>' +
    '<div class="callout callout-emergency"><div class="ch">If this is an emergency</div>' +
    "<p>If you believe your pet needs urgent care, call a veterinary provider now " +
    "and follow its live instructions; do not use this publication to diagnose or " +
    "delay care. The " +
    '<a href="/pet-emergency/24-hour-vets-pattaya.html">urgent-care directory</a> ' +
    "shows approved records with a public 24-hour claim. Confirm availability whenever " +
    "circumstances allow.</p></div>" +
    '<div class="orientation-quick-bar orientation-quick-bar--sticky btn-row" role="navigation" ' +
    'aria-label="Orientation shortcuts">' +
    '<a class="btn btn-primary" href="/directory.html">Directory</a>' +
    '<a class="btn btn-ghost" href="/guides.html">Guides</a>' +
    '<a class="btn btn-ghost" href="/search.html">Search</a>' +
    '<a class="btn btn-alert" href="/pet-emergency/24-hour-vets-pattaya.html">24-hour vets</a></div>' +
    '<details class="corridor-panel page-jump-panel">' +
    '<summary class="corridor-panel__title">Jump to section</summary>' +
    '<div class="corridor-panel__body"><nav aria-label="Sections on this page"><ul class="toc">' +
    '<li><a href="#start-vet">Nearest vet</a></li>' +
    '<li><a href="#start-heat">Heat risk</a></li>' +
    '<li><a href="#start-import">Import &amp; export</a></li>' +
    '<li><a href="#start-adopt">Adoption</a></li>' +
    '<li><a href="#start-essentials">Everyday essentials</a></li>' +
    "</ul></nav></div></details>" +
    '<h2 id="start-vet">1. Know where your nearest vet is &mdash; before you need one</h2>' +
    "<p>The single most useful thing you can do as a new pet owner here is to know, " +
    "in advance, which clinic you would go to. Browse the " +
    '<a href="/vets/">directory of vets and animal hospitals</a> (use the area chips on ' +
    'each category page), see <a href="/vets/?filter=24h">24-hour clinics</a>, browse ' +
    '<a href="/area/jomtien.html">by neighbourhood</a>, or see ' +
    '<a href="/mobile-vets/">mobile and home-visit vets</a> if transport is difficult. ' +
    "Note which approved records carry a public 24-hour claim, confirm availability, and read our " +
    '<a href="/pet-health-pattaya/">pet health guide</a> for the tropical-climate risks ' +
    "to plan around.</p>" +
    '<h2 id="start-heat">2. Plan around heat and hot surfaces</h2>' +
    "<p>Hot, humid conditions can raise the risk of heat illness and hot-surface injury. " +
    "Check the conditions and ground before activity, choose the coolest suitable times, " +
    "never leave a pet in a parked vehicle, and ask a veterinarian about extra risk for " +
    "older, unwell or short-muzzled animals. Read our guide to " +
    '<a href="/owning-a-pet-in-pattaya/hot-climate-pet-care.html">hot-climate pet ' +
    "care</a> and " +
    '<a href="/pet-health-pattaya/">pet health in Pattaya</a>.</p>' +
    '<h2 id="start-import">3. Bringing a pet to Thailand &mdash; or taking one out</h2>' +
    "<p>Pet import and export involves route-specific identification, vaccination, " +
    "certificate, permit and airline requirements. Not every route requires the same " +
    "tests or sequence, so start with the exact origin, destination, species and carrier.</p><p>Our guide to " +
    '<a href="/bring-pet-to-thailand/">bringing a pet to Thailand</a> walks ' +
    "through every step; see also the " +
    '<a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import ' +
    "permit</a> and " +
    '<a href="/take-pet-out-of-thailand/export-process.html">export process</a> ' +
    "pages for the Thai-side paperwork. Gulf expats may also see " +
    '<a href="/bring-pet-to-thailand/from-uae.html">import from the UAE</a>; ' +
    "the separate hub covers " +
    '<a href="/take-pet-out-of-thailand/">taking a pet out of Thailand</a>.</p><p>' +
    "Specialists who handle the paperwork are listed in the " +
    '<a href="/pet-relocation/">pet relocation agents directory</a>. ' +
    "PattayaPets does not independently endorse an agent; confirm the scope, carrier " +
    "and government requirements in writing before paying.</p>" +
    '<h2 id="start-adopt">4. Thinking of adopting?</h2>' +
    "<p>Pattaya has several established shelters and rescue organisations. If you " +
    "can offer a home, see our guide to " +
    '<a href="/adopt-a-pet-pattaya/">adopting a pet in Pattaya</a>. You can also ' +
    "help without adopting &mdash; see " +
    '<a href="/adopt-a-pet-pattaya/how-to-help.html">how to help street animals</a>, ' +
    "or browse rescues such as " +
    '<a href="/adopt-a-pet-pattaya/hope-for-strays.html">Hope for Strays</a>, ' +
    '<a href="/adopt-a-pet-pattaya/soi-dog-foundation.html">Soi Dog Foundation</a> ' +
    "and " +
    '<a href="/adopt-a-pet-pattaya/animal-army-foundation.html">Animal Army Foundation</a>.</p>' +
    '<h2 id="start-essentials">5. Everyday essentials</h2>' +
    "<p>For food, litter and supplies, see the " +
    '<a href="/pet-shops/">pet shops directory</a>. For grooming, ' +
    '<a href="/groomers/">groomers</a>. For obedience and behaviour, ' +
    '<a href="/trainers/">dog trainers</a>. For travel and work cover, ' +
    '<a href="/boarding/">boarding and daycare</a>.</p><p>For walking and going out, see ' +
    '<a href="/dog-friendly-pattaya/">dog-friendly Pattaya</a>. Dog owners should ' +
    "also see the <a href=\"/dogs/\">dog owner&rsquo;s hub</a>; cat owners the " +
    "<a href=\"/cats/\">cat owner&rsquo;s hub</a>.</p><p>It is worth " +
    "understanding how " +
    '<a href="/owning-a-pet-in-pattaya/dog-registration-thailand.html">dog registration</a> ' +
    "and " +
    '<a href="/owning-a-pet-in-pattaya/microchipping-your-pet.html">microchipping</a>, ' +
    '<a href="/owning-a-pet-in-pattaya/where-to-walk-your-dog.html">where to walk your dog</a>, ' +
    '<a href="/owning-a-pet-in-pattaya/getting-to-the-vet.html">getting your pet to the vet</a>, ' +
    '<a href="/owning-a-pet-in-pattaya/lost-pet-pattaya.html">if your pet goes missing</a>, and ' +
    '<a href="/pet-emergency/ticks-and-fleas.html">ticks &amp; fleas</a> ' +
    "prevention. Browse by " +
    '<a href="/directory.html">neighbourhood</a> in the directory, or see ' +
    '<a href="/pet-relocation/">pet relocation agents</a> if you are planning a move. ' +
    "It is also worth understanding " +
    '<a href="/pet-insurance-thailand.html">pet insurance in Thailand</a> ' +
    "before you need to claim. You can " +
    '<a href="/search.html">search the site</a> or browse the ' +
    '<a href="/sitemap.html">full sitemap</a>.</p>' +
    DISC +
    "</div></div></section>" +
    inPageLinkSection("start")
});

/* ---------------- About ---------------- */
pages.push(prosePage({
  path: "/about.html",
  updated: "2026-08-01",
  title: "About PattayaPets | Editorial Standards & Publisher",
  desc: "About PattayaPets, an independent editorial directory and source-led guide for pet owners in Pattaya, published by TIMPAEMI CO., LTD.",
  crumb: "About",
  eyebrow: "About",
  h1: "About PattayaPets",
  linkTopic: "home",
  body:
    "<p>PattayaPets is a source-led pet resource for Pattaya. It has two halves that " +
    "work together: an <strong>editorial directory</strong> of pet businesses &mdash; " +
    "vets, groomers, boarding, pet shops, trainers and relocation agents &mdash; and " +
    "a <strong>library of guides</strong> answering the questions pet owners in " +
    "Pattaya actually ask &mdash; from import and export to " +
    "<a href=\"/pet-health-pattaya/\">pet health in a tropical climate</a>, with " +
    "dedicated <a href=\"/dogs/\">dog</a> and <a href=\"/cats/\">cat</a> hubs.</p>" +
    "<h2>Why it exists</h2>" +
    "<p>Local public business facts change, while pet-travel rules are distributed " +
    "across Thai and destination-country authorities. PattayaPets brings those subjects " +
    "into one plain-English publication while keeping the source, evidence state and " +
    "remaining uncertainty visible.</p>" +
    "<h2>Who runs it</h2>" +
    "<p>PattayaPets is published by <strong>TIMPAEMI CO., LTD.</strong>. Tim and Paemi, " +
    "the married creative and technical team behind TimPaemi, are the named authors and " +
    "editors of this publication. Their work in Pattaya spans editorial publishing, " +
    "front-end and back-end development, events and live production. Their roles, bylines " +
    "and the publisher identity are listed on the <a href=\"/masthead.html\">masthead</a>.</p>" +
    "<p>TimPaemi is the central identity across their Pattaya publishing and production " +
    "work. PattayaPets keeps its own subject, evidence records and editorial standards.</p>" +
    "<p>On PattayaPets, their role is editorial and technical. A byline does not imply " +
    "veterinary, legal or regulatory credentials; consequential claims still need the " +
    "authority or qualified reviewer identified with the claim.</p>" +
    "<p>No completed anonymous-visit record is currently published. Business pages " +
    "therefore separate sourced facts from unknowns and carry no experiential verdict. " +
    "The public <a href=\"/standards.html\">standards</a> explain the evidence and visit workflow.</p>" +
    "<h2 id=\"funding\">Ownership and funding</h2>" +
    "<p>By TIMPAEMI CO., LTD. directly. There are no ads, no sponsorships, no " +
    "affiliate links, no commissions and no paid placements anywhere on the site. " +
    "The businesses we cover do not pay us. If first-hand visits begin, the publisher " +
    "will pay the ordinary bill in full and will not accept a hosted service.</p>" +
    "<h2>What it is not</h2>" +
    "<p>PattayaPets is an editorial publication <em>about</em> pet businesses. It is " +
    "not a vet, not a referral service, not a pet-relocation agency and not an " +
    "insurance broker. Nothing on the site is veterinary advice. For the full " +
    'method, read our <a href="/standards.html">editorial standards</a>. Browse the ' +
    '<a href="/directory.html">directory</a>, the <a href="/guides.html">guides</a>, ' +
    '<a href="/start-here.html">start here</a>, or <a href="/search.html">search the site</a>.</p>'
}));

/* ---------------- Editorial Standards ---------------- */
pages.push(prosePage({
  path: "/standards.html",
  updated: "2026-08-01",
  title: "How PattayaPets Reviews Pet Businesses | Editorial Standards",
  desc: "How PattayaPets verifies business facts, records source dates, handles future anonymous visits, corrects errors and keeps commercial influence out.",
  crumb: "Editorial Standards",
  eyebrow: "How we work",
  h1: "Editorial standards & method",
  linkTopic: "general",
  body:
    "<p>This page is the source of record for how the directory and guides are " +
    "produced. If the publication falls short of it, the correction is recorded in " +
    "plain sight.</p>" +
    "<h2>Current evidence state</h2>" +
    "<p><strong>No completed anonymous-visit record is currently published.</strong> " +
    "Directory pages are source-led facts pages, not reviews. Each page must distinguish " +
    "current first-party evidence, older or indirect evidence, and facts that remain unknown.</p>" +
    "<h2>How a future visit will work</h2>" +
    "<p>A reviewer will visit as an ordinary customer and pay the bill in full from " +
    "publisher funds. Comped services, PR-arranged visits, hosted treatment and sponsored " +
    "placement are not accepted. A verdict cannot be published without a dated visit record.</p>" +
    "<h2>What a verdict means</h2>" +
    "<p>If documented visits begin, a reviewed business may carry one of three verdicts:</p>" +
    "<ul>" +
    '<li><strong>Recommend</strong> &mdash; a good business experience we would ' +
    "send a friend to.</li>" +
    "<li><strong>OK</strong> &mdash; does the job, with caveats we spell out.</li>" +
    "<li><strong>Avoid</strong> &mdash; a business experience that let customers " +
    "down in ways we can document.</li></ul>" +
    "<p>Crucially, a verdict is scoped to the <strong>business experience only</strong>: " +
    "booking and communication, whether staff speak English, billing transparency, " +
    "cleanliness, comfort and how customers are treated. <strong>We never verdict " +
    "on veterinary medical quality.</strong> Judging diagnosis, treatment or " +
    "surgical outcomes belongs to qualified vets, regulators and accreditors &mdash; " +
    "not to editors.</p>" +
    "<h2>The &lsquo;not yet reviewed&rsquo; state</h2>" +
    "<p>A business may appear first as a <strong>facts page &mdash; visit pending</strong>. " +
    "Only fields supported by an approved source are stated as facts; missing contact, " +
    "hours, locality or operating status stays unknown. Held or unverified records do not " +
    "receive verified labels, FAQ claims or LocalBusiness markup. A verdict requires a " +
    "documented first-hand visit.</p>" +
    "<h2>Who, how and why</h2>" +
    "<p>Tim and Paemi are the named authors and editors. PattayaPets exists to help pet " +
    "owners make safer, clearer local and travel decisions &mdash; not to manufacture " +
    "search variations. Research, drafting and mechanical checks may use software or " +
    "AI-assisted tools, but automation is never treated as a source, a field visit, a " +
    "professional reviewer or publication approval. Consequential facts must still be " +
    "traced to the evidence record and accepted by the responsible editor.</p>" +
    "<h2>This is not veterinary advice</h2>" +
    "<p>PattayaPets is editorial and informational only. Nothing on the site is " +
    "veterinary advice, a diagnosis, a treatment recommendation or a substitute for " +
    "professional care. If your pet is unwell or injured, consult a qualified " +
    "veterinarian. No licensed-veterinarian review record is currently published for " +
    "the health guide collection. Until that gap is closed, health pages must stay at " +
    "orientation and prompt professional care rather than present a treatment algorithm.</p>" +
    "<h2>Import and export rules change</h2>" +
    "<p>Pet import and export requirements &mdash; Thai DLD rules, airline pet " +
    "policies, destination-country requirements &mdash; change without notice. We " +
    "attach primary sources and a checked date to consequential rules, but " +
    "you must verify the current rules with the official source: the Thai " +
    "Department of Livestock Development, your airline, and the relevant " +
    "destination-country authority. We say so on every guide.</p>" +
    "<h2>Corrections</h2>" +
    "<p>When we get something wrong, we fix it visibly. Spotted an error? See the " +
    '<a href="/corrections.html">corrections page</a> for how to report it.</p>' +
    "<h2>What we will never do</h2>" +
    "<ul><li>No paid placements or sponsored tags.</li>" +
    "<li>No affiliate links.</li>" +
    "<li>No fake reviews or scraping of competitor review sites.</li>" +
    "<li>No generic stock pet clipart.</li></ul>" +
    "<p>The directory and guides are accountable to these published controls.</p>" +
    "<h2>Explore PattayaPets</h2>" +
    "<p>Browse the <a href=\"/directory.html\">business directory</a>, the " +
    "<a href=\"/guides.html\">guide library</a>, and the " +
    "<a href=\"/adopt-a-pet-pattaya/\">adoption hub</a>. For moves in or out of " +
    "Thailand, see <a href=\"/bring-pet-to-thailand/\">bringing a pet to " +
    "Thailand</a>, the <a href=\"/take-pet-out-of-thailand/export-process.html\">" +
    "export process</a>, and <a href=\"/pet-relocation/\">pet relocation agents</a>.</p>"
}));

/* ---------------- Contact ---------------- */
pages.push(prosePage({
  path: "/contact.html",
  updated: "2026-08-01",
  title: "Contact PattayaPets | Corrections, Tips & Listing Updates",
  crumb: "Contact",
  desc: "Contact PattayaPets — submit a tip, report a correction, or update a business listing. Editorial publication for Pattaya pet owners, with no paid placement.",
  eyebrow: "Get in touch",
  h1: "Contact PattayaPets",
  linkTopic: "general",
  body:
    "<p>PattayaPets is a small editorial publication. This mailbox is for tips, " +
    "corrections and business-record updates; it is not an emergency service and " +
    "delivery or response time is not guaranteed.</p>" +
    '<div class="contact-actions btn-row">' +
    '<a class="btn btn-primary" href="mailto:' + CONTACT_EMAIL + '">Email ' + CONTACT_EMAIL + '</a>' +
    '' +
    '<a class="btn btn-alert" href="/pet-emergency/24-hour-vets-pattaya.html">24-hour vets</a></div>' +
    "<h2>Email</h2>" +
    '<p>' + CONTACT_LINK + ' &mdash; ' +
    "the best way to reach us for anything.</p>" +
    "<h2>What to send us</h2>" +
    "<ul>" +
    "<li><strong>A tip</strong> &mdash; a pet business you think we should visit, " +
    "or somewhere dog-friendly we have missed.</li>" +
    "<li><strong>A correction</strong> &mdash; if a fact on the site is wrong, " +
    "tell us the specific claim and, if you can, a source. See the " +
    '<a href="/corrections.html">corrections page</a> or browse the ' +
    '<a href="/directory.html">directory</a> and <a href="/guides.html">guides</a>.</li>' +
    "<li><strong>A business update</strong> &mdash; if you run a listed business " +
    "and your hours, address or services have changed, let us know. Note that we " +
    "do not sell placement and updates do not change how we review.</li></ul>" +
    "<h2>What we cannot do</h2>" +
    "<p>We cannot give veterinary advice or help with a medical emergency &mdash; " +
    "please contact a qualified veterinarian or a 24-hour animal hospital directly. " +
    "We also cannot arrange pet relocation; for that, see the " +
    '<a href="/pet-relocation/">relocation agents directory</a>. To find a page on ' +
    'the site, try <a href="/search.html">search</a> or the ' +
    '<a href="/sitemap.html">sitemap</a>.</p>'
}));

/* ---------------- Masthead ---------------- */
pages.push(prosePage({
  path: "/masthead.html",
  updated: "2026-08-01",
  title: "PattayaPets Masthead | Who Writes the Directory & Guides",
  crumb: "Masthead",
  desc: "Meet Tim and Paemi, the married editors behind TimPaemi and PattayaPets, with the publisher, bylines, roles and evidence standards behind every page.",
  eyebrow: "The publication",
  h1: "Masthead",
  linkTopic: "general",
  body:
    '<figure class="author-intro card"><img src="/assets/img/timpaemi.jpg" width="512" height="512" ' +
    'loading="lazy" decoding="async" alt="Tim and Paemi, the married team behind TimPaemi and PattayaPets">' +
    "<figcaption><strong>Tim and Paemi</strong><p>PattayaPets is written and maintained " +
    "by the married creative and technical team behind TimPaemi, and published by " +
    "<strong>TIMPAEMI CO., LTD.</strong> Their work in Pattaya spans editorial publishing, " +
    "front-end and back-end development, events and live production. TimPaemi is the " +
    "central identity for that work; PattayaPets retains its own subject and evidence " +
    "standards.</p></figcaption></figure>" +
    "<h2 id=\"tim\">Tim &mdash; editor and author</h2>" +
    "<p>Tim writes, edits and maintains directory and guide content. A byline identifies " +
    "authorship; it does not claim veterinary, legal or regulatory credentials.</p>" +
    "<h2 id=\"paemi\">Paemi &mdash; editor and author</h2>" +
    "<p>Paemi writes, edits and checks local context and clarity. Regulated and clinical " +
    "claims still require the named authority or qualified reviewer shown with the claim.</p>" +
    "<h2 id=\"publisher\">Publisher</h2>" +
    "<p><strong>TIMPAEMI CO., LTD.</strong>, trading as " +
    "TimPaemi. Tim and Paemi are the people behind the brand. The publication is funded " +
    "by the publisher and accepts no paid placement.</p>" +
    "<h2>Evidence and visits</h2>" +
    "<p>No completed anonymous-visit record is currently published. Facts pages therefore " +
    "carry no verdict. If visits begin, the reviewer will attend as an ordinary customer, " +
    "pay in full and retain a dated evidence record. The full method is on the " +
    '<a href="/standards.html">editorial standards</a> page. Browse the ' +
    '<a href="/directory.html">directory</a>, the <a href="/guides.html">guides</a>, ' +
    'or <a href="/search.html">search the site</a>.</p>'
}));

/* ---------------- Corrections ---------------- */
pages.push(prosePage({
  path: "/corrections.html",
  updated: "2026-08-01",
  title: "Report a Correction | PattayaPets Accuracy Policy",
  crumb: "Corrections",
  desc: "How PattayaPets handles corrections. Spotted a factual error? Here is how to report it, and our log of published corrections. We correct errors in plain sight.",
  eyebrow: "Accuracy",
  h1: "Corrections",
  linkTopic: "general",
  body:
    "<p>PattayaPets aims to be accurate, and pet businesses change &mdash; hours " +
    "move, clinics relocate, services come and go. When we get something wrong, we " +
    "correct it in plain sight.</p>" +
    "<h2>Report an error</h2>" +
    "<p>Email " + CONTACT_LINK + " " +
    "with the page, the specific claim that is wrong, and &mdash; if you have one " +
    "&mdash; a source we can verify. We will use the contact route to acknowledge " +
    "and investigate credible reports.</p>" +
    "<h2>How corrections appear</h2>" +
    "<p>Every substantive correction is logged below, with the date. We do not " +
    "quietly edit and move on.</p>" +
    "<h2>Correction log</h2>" +
    "<p>Newest first. Each entry names what was wrong and what the guidance says now.</p>" +
    "<ul>" +
    "<li><strong>1 August 2026 &mdash; Thailand import identity, sequence and timing.</strong> " +
    "We removed universal ISO-only, chip-before-rabies, automatic-revaccination, " +
    "rabies-only and arrival-wait claims. The current guidance requires the microchip " +
    "number to match an implantation certificate and vaccination records; after all " +
    "primary vaccines, it states a 21-day wait before the permit application, with a " +
    "documented-booster exception, and 5&ndash;7 Thailand business days after a complete " +
    "application. This source is scoped to USA-origin dogs, cats and rabbits; other " +
    "origins and species still need route-specific confirmation. " +
    "<a href=\"https://thaiconsulatela.thaiembassy.org/en/publicservice/bringing-pets-to-thailand\">" +
    "Thai consular instructions, updated 2 February 2026 and checked 1 August 2026</a>.</li>" +
    "<li><strong>1 August 2026 &mdash; Thailand export sequence.</strong> " +
    "We removed a universal email intake, 15-day deadline, three-day flight-confirmation " +
    "rule and optional-exam wording. The current Region 9 sequence says to file R1/1 as " +
    "the responsible animal quarantine station directs, present the animal for the " +
    "mandatory health examination no more than 2&ndash;3 days before travel, then receive " +
    "R9 and the health certificate. Intake and lead time remain station-specific. " +
    "<a href=\"https://region9.dld.go.th/index.php/th/news-head/phey-phaer-khwam-ru-dan-psusatw/khan-txn-kar-sng-satw-leiyng-sunakh-maew-nk-l-xxk-nxk-rach-xanacakr\">" +
    "DLD Region 9 export sequence, published 17 October 2025 and checked 1 August 2026</a> " +
    "(Thai; no certified translation).</li>" +
    "<li><strong>1 August 2026 &mdash; Australia route from Thailand.</strong> " +
    "We removed guidance that allowed preparation and titre testing in Thailand before " +
    "the residency period. Australia&rsquo;s current route requires first moving to an approved " +
    "Group 1, 2 or 3 country, at least 180 consecutive days there immediately before " +
    "export, and the required vaccination and testing in that approved country. " +
    "Returning-animal exceptions need an individual DAFF assessment. " +
    "<a href=\"https://www.agriculture.gov.au/biosecurity-trade/cats-dogs/frequently-asked-questions\">" +
    "Australian Department of Agriculture FAQ, checked 1 August 2026</a>.</li>" +
    "<li><strong>1 August 2026 &mdash; South Korea threshold conflict and titre window.</strong> " +
    "We replaced a single &lsquo;over ten&rsquo; rule. Korea&rsquo;s AIP says more than ten animals, " +
    "while the Ministry of Foreign Affairs says ten or more, and the ministry source " +
    "states a 24-month titre limit. The AIP also describes exemptions for animals under " +
    "90 days and those from rabies-free countries. Groups at the exact threshold must " +
    "obtain written APQA direction. Sources checked 1 August 2026: " +
    "<a href=\"https://aim.koca.go.kr/eaipPub/Package/2024-10-17/html/eAIP/KR-GEN-1.4-en-GB.html\">Korea AIP</a> " +
    "and <a href=\"https://overseas.mofa.go.kr/no-en/brd/m_25180/view.do?seq=9\">Korean Ministry of Foreign Affairs</a>.</li>" +
    "<li><strong>1 August 2026 &mdash; Malaysia scope and non-scheduled-country controls.</strong> " +
    "We removed cabin-possibility, four-to-eight-week and vague quarantine claims. The " +
    "reviewed DVS material covers cargo consignments and, for non-scheduled countries, " +
    "states a permit, ISO microchip, government health certificate and examination within " +
    "seven days, plus quarantine for at least seven days and up to six months case by case. " +
    "An accompanied cabin or checked-baggage path remains unverified. Sources checked " +
    "1 August 2026: <a href=\"https://www.dvs.gov.my/index.php/pages/view/804?mid=53\">DVS FAQ</a> " +
    "and <a href=\"https://www.dvs.gov.my/dvs/resources/user_1/2026/BKPBV/IMPORT%20EKSPORT/%28R2%29-CatsNdogs-NONSCHEDULED_COUNTRIES-revised131213_notis_2.pdf\">" +
    "DVS non-scheduled-country controls</a> (Malay FAQ; no certified translation).</li>" +
    "<li><strong>1 August 2026 &mdash; U-Tapao status narrowed to an evidence gap.</strong> " +
    "Earlier wording treated absence from reviewed lists as proof that clearance was " +
    "impossible. The DLD 59-station map and a USA-scoped six-airport instruction do not " +
    "list U-Tapao, but that absence does not prove impossibility. Current guidance requires " +
    "written DLD confirmation for the exact route. Sources checked 1 August 2026: " +
    "<a href=\"https://aqi-new.dld.go.th/index.php/th/news-head/mapaqithai\">DLD station map</a> " +
    "and <a href=\"https://image.mfa.go.th/mfa/0/91fPdh6NtO/About-Thailand/Bringing_Pets_to_Thailand/All_Airports_-_Instructions_for_Bringing_Dog-Cat-Rabbit_into_Thailand_from_the_USA_%28Revised_30Jan2025%29.pdf\">" +
    "USA-scoped airport instructions</a>.</li>" +
    "<li><strong>1 August 2026 &mdash; IATA container guidance.</strong> " +
    "We replaced Edition 50/51 references, a generic snub-nosed rule and " +
    "&lsquo;IATA-approved&rsquo; brand wording. The guide now cites CR1 Edition 52, including the " +
    "10% larger-container instruction for snub-nosed animals and the applicable construction " +
    "and fit rules; the airline and check-in team make the final acceptance decision, and " +
    "IATA does not approve container brands. " +
    "<a href=\"https://www.iata.org/contentassets/b0016da92c86449f850fe9560827bbea/pet-container-requirements.pdf\">" +
    "IATA CR1 extract, checked 1 August 2026</a>.</li>" +
    "<li><strong>1 August 2026 &mdash; emergency treatment algorithms removed.</strong> " +
    "Generic heat, airway, CPR, stretcher, snake, toad and jellyfish treatment instructions " +
    "were removed. Emergency pages now start with calling a live clinic, following its " +
    "instructions and travelling as directed. Only the condition-specific RVC canine " +
    "heatstroke source supports the displayed cool-first wording. Every page discloses that " +
    "no licensed veterinarian has reviewed it. " +
    "<a href=\"https://www.rvc.ac.uk/vetcompass/news/the-rvc-urges-owners-of-hot-dogs-to-cool-first-transport-second\">" +
    "Royal Veterinary College source, published 20 July 2023 and checked 1 August 2026</a>.</li>" +
    "<li><strong>1 August 2026 &mdash; costs and outcomes.</strong> " +
    "Unsourced market totals, broad price ranges, same-day promises and agent-success " +
    "claims were removed. The only Thai arrival amount retained is the authority&rsquo;s " +
    "500-baht import-licence fee per animal for the source&rsquo;s USA-origin dog, cat and " +
    "rabbit scope; named carrier examples cite their own current pages. All other costs " +
    "require itemised written quotes, and no provider outcome is promised.</li>" +
    "<li><strong>1 August 2026 &mdash; regulated-claim provenance.</strong> " +
    "Generic source blocks and uncited regulated prose were replaced with claim IDs, direct " +
    "primary-source links, short source excerpts, review dates, reviewer status and recheck " +
    "deadlines. The claim ledger&rsquo;s consumer paths are explicitly examples, not a statement " +
    "of complete coverage, and automated checks do not replace legal, clinical, translation " +
    "or jurisdiction-specialist review.</li>" +
    "<li><strong>29 July 2026 &mdash; Mor Ja Pet Clinic removed from recommendations.</strong> " +
    "The clinic was suggested on area and mobile-vet pages, but no phone number, website or " +
    "opening hours could be confirmed from a primary source. Its " +
    "<a href=\"/mobile-vets/mor-ja-pet-clinic-pattaya.html\">facts page</a> stays and now " +
    "says plainly that no contact route is confirmed. It returns to recommendations only " +
    "when one is verified.</li>" +
    "<li><strong>29 July 2026 &mdash; footer wording corrected site-wide.</strong> " +
    "Every page said this guide was &ldquo;checked in person by people who live here&rdquo;. " +
    "No completed anonymous-visit records are published, so the footer now names " +
    "Tim and Paemi as authors and editors without claiming a completed visit or an " +
    "unverified residence. How visits and " +
    "verdicts work is on <a href=\"/standards.html\">editorial standards</a>.</li>" +
    "<li><strong>28 July 2026 &mdash; EU pet travel regulation citation.</strong> " +
    "Export guides cited EU Regulation 576/2013. That framework has been replaced by " +
    "Regulation (EU) 2026/131, which applies from 22 April 2026. Affects the Finland and " +
    "Ireland export guides.</li>" +
    "</ul>" +
    "<p>While you are here: browse the <a href=\"/directory.html\">business " +
    "directory</a>, the <a href=\"/guides.html\">guides</a>, " +
    '<a href="/start-here.html">start here</a> if you are new, or ' +
    '<a href="/search.html">search the site</a>.</p>'
}));

/* ---------------- Terms ---------------- */
pages.push(prosePage({
  path: "/terms.html",
  title: "Terms of Use | PattayaPets",
  desc: "Terms of use for PattayaPets: what the guide is, how facts are checked, and where our responsibility ends. Not veterinary advice, with no paid listings.",
  crumb: "Terms",
  eyebrow: "The legal bit",
  h1: "Terms of use",
  updated: "2026-08-01",
  linkTopic: "general",
  body:
    "<p><b>Operator:</b> TIMPAEMI CO., LTD. <b>Contact:</b> <a href=\"/contact.html\">contact page</a>.</p>" +
    "<h2>What this site is</h2><p>PattayaPets is an editorial directory and guide for pet owners in Pattaya, published by TIMPAEMI CO., LTD. Access is free; no business pays to be listed or ranked.</p>" +
    "<h2>Not veterinary advice</h2><p>Nothing here is veterinary advice. Always consult a qualified veterinarian for your animal's health.</p>" +
    "<h2>Accuracy</h2><p>Hours, prices and services change without notice; import/export rules change with regulation. Confirm with the business or the DLD before relying on details. Content is provided in good faith, \"as is\", without warranty.</p>" +
    "<h2>Our content</h2><p>Text and photographs are the property of TIMPAEMI CO., LTD. Quote with attribution and a link; wholesale republication requires written permission.</p>" +
    "<h2>Liability</h2><p>To the maximum extent permitted by law, TIMPAEMI CO., LTD. is not liable for losses arising from use of this site.</p>" +
    "<h2>Changes</h2><p>These terms may be updated; the date above reflects the latest revision.</p>"
}));

/* ---------------- Privacy ---------------- */
pages.push(prosePage({
  path: "/privacy.html",
  title: "Privacy Notice | PattayaPets Analytics & Data",
  desc: "What PattayaPets and its Cloudflare host process when you read the site or email a correction. No accounts, ads, data sale or Google Analytics tag.",
  crumb: "Privacy",
  eyebrow: "Your privacy",
  h1: "Privacy notice",
  updated: "2026-08-01",
  linkTopic: "general",
  body:
    "<p>PattayaPets is a static website. We do not run user accounts, we do not ask " +
    "you to log in, and we do not sell personal data. This notice describes the " +
    "limited processing used to deliver, secure and measure the site.</p>" +
    "<h2>Analytics</h2>" +
    "<p>The PattayaPets source does not load Google Analytics. Production currently " +
    "uses <strong>Cloudflare Web Analytics</strong>, which Cloudflare Pages injects " +
    "at the edge. Its browser beacon reports page-load performance and page-view " +
    "signals to <code>/cdn-cgi/rum</code>. Cloudflare states that this service does " +
    "not use cookies, local storage or fingerprinting, does not log query strings and " +
    "does not track a person across sites. See Cloudflare&rsquo;s " +
    '<a href="https://developers.cloudflare.com/web-analytics/data-metrics/data-origin-and-collection/">data collection</a> and ' +
    '<a href="https://developers.cloudflare.com/web-analytics/faq/">retention FAQ</a>.</p>' +
    "<p>A content blocker may prevent the browser beacon; core site functions still " +
    "work. Cloudflare also processes ordinary edge request data to deliver and protect " +
    "the site.</p>" +
    "<h2>Offline storage</h2>" +
    "<p>A service worker may store selected public site files in your browser&rsquo;s " +
    "Cache Storage so the homepage, offline notice and interface assets can work during " +
    "a poor connection. This cache contains published site files, not form entries or " +
    "an account profile, and you can remove it through your browser&rsquo;s site-data controls.</p>" +
    "<h2>Email</h2>" +
    "<p>If you email us, we use the message to reply and, where relevant, investigate " +
    "a tip or correction. We do not add you to a mailing list. We retain correspondence " +
    "only while it is needed for that purpose or an accuracy record; ask us to delete " +
    "personal correspondence that is no longer required.</p>" +
    "<h2>Hosting</h2>" +
    "<p>The site is hosted on Cloudflare Pages. Cloudflare processes standard request " +
    "data, including an IP address, to deliver, secure and troubleshoot the service. " +
    "Its own privacy notice governs Cloudflare&rsquo;s processing.</p>" +
    "<h2>Contact</h2>" +
    "<p>Questions about privacy: " +
    CONTACT_LINK + '.</p>'
}));

/* ---------------- Accessibility ---------------- */
pages.push(prosePage({
  path: "/accessibility.html",
  title: "Accessibility Statement | PattayaPets",
  desc: "PattayaPets accessibility goals, implemented keyboard and reflow support, known limitations, and how to report a barrier.",
  crumb: "Accessibility",
  eyebrow: "Accessibility",
  h1: "Accessibility statement",
  updated: "2026-08-01",
  linkTopic: "general",
  body:
    "<p>PattayaPets should be usable by everyone, including people who rely on a " +
    "keyboard, a screen reader, or browser zoom. We build toward the " +
    "<strong>WCAG 2.2 AA</strong> standard.</p>" +
    "<h2>What we do</h2>" +
    "<ul>" +
    "<li>Semantic HTML, clear heading order and visible focus outlines.</li>" +
    "<li>A &lsquo;skip to content&rsquo; link and full keyboard navigation.</li>" +
    "<li>Colour contrast that meets AA, and text that reflows on small screens " +
    "and at high zoom.</li>" +
    "<li>Core content, navigation and ordinary form submission remain available when JavaScript is disabled; enhanced search and filters are progressive enhancements.</li>" +
    "<li>Descriptive link text and alternative text on meaningful images.</li>" +
    '<li>Header search submits to <code>/search.html</code> and works without JavaScript.</li>' +
    '<li>Live search results on the search page update with <code>aria-live</code> when JavaScript is enabled.</li>' +
    "<li>Mobile navigation can be opened and closed with the keyboard (Escape closes it).</li>" +
    "</ul>" +
    "<h2>Known limitations</h2>" +
    "<p>Site search needs JavaScript to query the full index; without it, use the " +
    '<a href="/sitemap.html">sitemap</a> or <a href="/guides.html">guides page</a>. ' +
    "We have not yet completed an independent manual audit with assistive-technology users. If you find " +
    "a page that is hard to use, we want to know &mdash; that feedback directly shapes our fixes.</p>" +
    "<h2>Report a problem</h2>" +
    "<p>Email " + CONTACT_LINK + " " +
    "with the page, browser or assistive technology and what went wrong.</p>"
}));

/* ---------------- Press & media kit ---------------- */
pages.push(prosePage({
  path: "/press.html",
  title: "Press & Media Kit | PattayaPets",
  desc:
    "PattayaPets press kit: boilerplate, coverage, verifiable facts, logo files, brand " +
    "rules and press contact. Published by TIMPAEMI CO., LTD.",
  crumb: "Press kit",
  eyebrow: "For journalists and partners",
  h1: "Press kit",
  updated: "2026-08-01",
  linkTopic: "general",
  body:
    "<p>Everything here is checkable. The numbers are counted from the site itself " +
    "on the date below, not estimated. If you need something that is not on this " +
    "page, email " + CONTACT_LINK + " " +
    "and we will answer in writing.</p>" +

    "<h2>Boilerplate</h2>" +
    "<p><strong>Short boilerplate.</strong> PattayaPets is an independent editorial " +
    "directory and guide for pet owners in Pattaya, Thailand &mdash; vets, groomers, " +
    "boarding, adoption and the import paperwork. Published by TIMPAEMI CO., LTD.</p>" +
    "<p><strong>Long boilerplate.</strong> PattayaPets is an independent pet resource " +
    "for Pattaya, Thailand, written and maintained by Tim and Paemi, the married team " +
    "behind TimPaemi. It combines a " +
    "source-status directory of pet services with guides to " +
    "veterinary care, emergencies, dog-friendly places, adoption, and the Thai import " +
    "and export rules. Business facts are source-led; no completed anonymous-visit " +
    "record or verdict is currently published. Nothing on the site can be bought.</p>" +

    "<h2>What we cover</h2>" +
    "<ul>" +
    "<li><strong>A directory</strong> of Pattaya pet businesses across seven categories " +
    "&mdash; vets and animal hospitals, groomers, boarding, pet shops, trainers, " +
    "relocation agents and mobile vets &mdash; browsable by neighbourhood.</li>" +
    "<li><strong>Emergency orientation</strong> &mdash; urgent veterinary contacts, " +
    "warning signs and locally relevant hazards. It is not a treatment service.</li>" +
    "<li><strong>Import and export</strong> &mdash; the Thai DLD permit process, health " +
    "certificates, quarantine, airline policies, and country-by-country guides in both " +
    "directions.</li>" +
    "<li><strong>Living with a pet in Pattaya</strong> &mdash; hot-climate care, housing, " +
    "adoption and rescue, and how to verify pet policies for housing and venues.</li>" +
    "</ul>" +

    "<h2>Fast facts</h2>" +
    '<div class="table-wrap"><table class="facts-table">' +
    "<tbody>" +
    "<tr><th scope=\"row\">Publication</th><td>PattayaPets (pattayapets.com)</td></tr>" +
    "<tr><th scope=\"row\">Publisher</th><td>TIMPAEMI CO., LTD.</td></tr>" +
    "<tr><th scope=\"row\">Brand</th><td>TimPaemi</td></tr>" +
    "<tr><th scope=\"row\">Brand relationship</th><td>Central identity for Tim and Paemi&rsquo;s Pattaya publishing and production work</td></tr>" +
    "<tr><th scope=\"row\">Written and edited by</th><td>Tim and Paemi, a married creative and technical team</td></tr>" +
    "<tr><th scope=\"row\">Team work</th><td>Editorial publishing, front-end and back-end development, events and live production in Pattaya</td></tr>" +
    "<tr><th scope=\"row\">Language</th><td>English</td></tr>" +
    "<tr><th scope=\"row\">Evidence policy</th><td>Primary sources for regulated claims; field-level provenance for directory facts</td></tr>" +
    "<tr><th scope=\"row\">Published visit records</th><td>None; facts pages are labelled visit pending</td></tr>" +
    "<tr><th scope=\"row\">Press contact</th><td>" + CONTACT_LINK + "</td></tr>" +
    "</tbody></table></div>" +
    "<p class=\"notice\">Route and directory counts change with the source registry and " +
    "are deliberately not hard-coded here. We do not publish audience or traffic figures.</p>" +

    "<h2>How we work</h2>" +
    "<p>No completed anonymous-visit record is currently published. A listing is a " +
    "<em>facts page &mdash; visit pending</em>, and only fields supported by approved " +
    "sources are presented as facts. Unknown or unverified fields remain labelled as such.</p>" +
    "<p>Verdicts describe the business experience only: " +
    "booking, communication, English, billing transparency, cleanliness. We do not " +
    "rate veterinary medical quality and never will. The full method is on the " +
    "<a href=\"/standards.html\">editorial standards</a> page, and every correction we " +
    "make is logged on the <a href=\"/corrections.html\">corrections</a> page.</p>" +

    "<h2>What is not for sale</h2>" +
    "<p>This is the part most enquiries are about, so it is stated plainly.</p>" +
    "<ul>" +
    "<li><strong>Listings cannot be bought.</strong> A business appears because it is " +
    "relevant to pet owners in Pattaya, or it does not appear.</li>" +
    "<li><strong>Verdicts and directory position cannot be bought.</strong> Factual " +
    "errors remain subject to the public corrections process.</li>" +
    "<li><strong>No sponsored posts, no advertorial, no paid guest articles, no " +
    "affiliate links.</strong> There are no display advertising slots.</li>" +
    "<li><strong>No free treatment, discounts, hosted visits or gifts</strong> are " +
    "accepted from any business we cover.</li>" +
    "</ul>" +
    "<p>If a fact about your business is wrong, report it through the " +
    "<a href=\"/corrections.html\">corrections page</a>. Evidence-based corrections " +
    "do not require payment. That is " +
    "the only lever anyone has over what appears here, and it is available to everyone " +
    "equally.</p>" +

    "<h2>Using our content</h2>" +
    "<p>Journalists may quote from PattayaPets with attribution to " +
    "<em>PattayaPets (pattayapets.com)</em> and a link to the page quoted. Please do " +
    "not republish guides in full. For interviews, data requests, or comment on pet " +
    "ownership or the publication&rsquo;s pet-relocation research, email " +
    CONTACT_LINK + ".</p>" +

    "<h2>Logo and brand assets</h2>" +
    "<ul>" +
    "<li><a href=\"/assets/img/logo-mark.svg\">logo-mark.svg</a> &mdash; the pin-and-paw " +
    "mark, vector, for avatars and small sizes.</li>" +
    "<li><a href=\"/assets/img/icon-512.png\">icon-512.png</a> &mdash; 512&times;512 raster " +
    "mark on a solid background.</li>" +
    "<li><a href=\"/assets/img/og-default.png\">og-default.png</a> &mdash; 1200&times;630 " +
    "social card, safe to use as a generic site image.</li>" +
    "</ul>" +
    "<p>Ask the press contact before using a format not listed here.</p>" +

    "<h2>Brand rules</h2>" +
    "<ul>" +
    "<li>Write the name as <strong>PattayaPets</strong> &mdash; one word, two capitals. " +
    "Not &ldquo;Pattaya Pets&rdquo;, not &ldquo;PattayaPets.com&rdquo; in running text.</li>" +
    "<li>The mark is a location pin containing a paw. Do not separate the two, recolour " +
    "them individually, rotate, stretch or add a drop shadow.</li>" +
    "<li>Leave clear space around the mark equal to the width of the paw.</li>" +
    "<li>Minimum size on screen: 24&nbsp;px for the mark alone.</li>" +
    "<li>Do not place the mark on a background that leaves it below AA contrast.</li>" +
    "</ul>" +
    '<div class="table-wrap"><table class="facts-table">' +
    "<thead><tr><th scope=\"col\">Colour</th><th scope=\"col\">Hex</th><th scope=\"col\">Use</th></tr></thead>" +
    "<tbody>" +
    "<tr><th scope=\"row\">Banyan</th><td>#1B5A4C</td><td>Primary green &mdash; links, buttons, the mark</td></tr>" +
    "<tr><th scope=\"row\">Forest</th><td>#15241F</td><td>Headings and the footer background</td></tr>" +
    "<tr><th scope=\"row\">Sand</th><td>#FAF5EC</td><td>Page background</td></tr>" +
    "<tr><th scope=\"row\">Marigold</th><td>#E7A23B</td><td>Accent and update markers</td></tr>" +
    "<tr><th scope=\"row\">Alert</th><td>#C5402F</td><td>Emergency and warning states only</td></tr>" +
    "</tbody></table></div>" +
    "<p>Headings are set in Bricolage Grotesque, body text in Hanken Grotesk.</p>" +

    "<h2>Official channels</h2>" +
    "<p>PattayaPets publishes at <strong>pattayapets.com</strong> only. Tim and Paemi&rsquo;s " +
    "channels are listed on <strong>timpaemi.com</strong>, linked from the footer of every page. " +
    "Any other account, page or site using this name is not us, and we would like to " +
    "hear about it.</p>",
  schema: [{
    "@type": "AboutPage",
    "@id": "https://pattayapets.com/press.html#aboutpage",
    name: "Press & Media Kit",
    description:
      "PattayaPets press kit: boilerplate, coverage, verifiable facts, logo files, " +
      "brand rules and press contact.",
    publisher: { "@type": "Organization", "@id": SITE.publisherId,
      name: SITE.publisherName, url: SITE.publisherUrl },
    mainEntity: { "@type": "Organization", "@id": SITE.publisherId,
      name: SITE.publisherName, url: SITE.publisherUrl },
    inLanguage: "en"
  }]
}));

module.exports = pages;
