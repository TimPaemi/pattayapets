"use strict";
/* Structural pages: About, Standards, Start Here, Contact, Masthead,
   Corrections, Privacy, Accessibility */

const DISC =
  '<div class="disclaimer-box"><strong>Editorial and informational only.</strong> ' +
  "PattayaPets is an editorial publication about pet businesses and pet ownership. " +
  "It is not a veterinary practice and does not give veterinary advice. Always " +
  "consult a qualified veterinarian.</div>";

function prosePage(o) {
  return {
    path: o.path,
    title: o.title,
    description: o.desc,
    crumb: o.crumb,
    breadcrumbs: o.breadcrumbs || [],
    updated: o.updated || "2026-05-27",
    noindex: !!o.noindex,
    schema: o.schema,
    body:
      '<section class="section"><div class="container"><div class="prose">' +
      '<p class="eyebrow">' + o.eyebrow + "</p><h1>" + o.h1 + "</h1>" +
      o.body +
      (o.noindex ? "" : DISC) +
      '<p class="updated">Last updated ' + (o.updatedLabel || "27 May 2026") + "</p>" +
      "</div></div></section>"
  };
}

const pages = [];

/* ---------------- Start Here ---------------- */
pages.push({
  path: "/start-here.html",
  title: "New to Pattaya with a pet? Start here | PattayaPets",
  description:
    "A plain-English orientation for pet owners new to Pattaya: emergency contacts, " +
    "finding a vet, the hot climate, bringing a pet in or out, and adoption.",
  crumb: "Start here",
  breadcrumbs: [],
  updated: "2026-05-27",
  body:
    '<section class="section"><div class="container"><div class="prose">' +
    '<p class="eyebrow">Orientation</p>' +
    "<h1>New to Pattaya with a pet? Start here</h1>" +
    "<p>Whether you have just arrived, are planning the move, or have adopted a " +
    "street dog and suddenly have questions, this page is the short version. It " +
    "points you to the right guide for each situation. It is orientation, not " +
    "veterinary advice.</p>" +
    '<div class="callout callout-emergency"><div class="ch">If this is an emergency</div>' +
    "<p>If your pet is seriously injured, struggling to breathe, collapsed, " +
    "bleeding heavily, or has a suspected poisoning or heatstroke, go straight to " +
    "a 24-hour animal hospital. Do not wait. See our list of " +
    '<a href="/pet-emergency/24-hour-vets-pattaya.html">24-hour vets in Pattaya</a> ' +
    "for addresses and contact details.</p></div>" +
    "<h2>1. Know where your nearest vet is &mdash; before you need one</h2>" +
    "<p>The single most useful thing you can do as a new pet owner here is to know, " +
    "in advance, which clinic you would go to. Browse the " +
    '<a href="/vets/">directory of vets and animal hospitals</a>, filter by your ' +
    '<a href="/area/jomtien.html">neighbourhood</a>, or see ' +
    '<a href="/mobile-vets/">mobile and home-visit vets</a> if transport is difficult. ' +
    "Note which clinics are open 24 hours, and read our " +
    '<a href="/pet-health-pattaya/">pet health guide</a> for the tropical-climate risks ' +
    "to plan around.</p>" +
    "<h2>2. Heat is the biggest everyday risk</h2>" +
    "<p>Pattaya is hot and humid year round. Heatstroke, hot pavement burning paw " +
    "pads, and dehydration are common and preventable. Walk dogs early morning or " +
    "after sunset, never leave a pet in a parked car, and read our guide to " +
    '<a href="/owning-a-pet-in-pattaya/hot-climate-pet-care.html">hot-climate pet ' +
    "care</a> and " +
    '<a href="/pet-health-pattaya/">pet health in Pattaya</a>.</p>' +
    "<h2>3. Bringing a pet to Thailand &mdash; or taking one out</h2>" +
    "<p>Pet import and export is a process with real deadlines: microchip, rabies " +
    "vaccination, a titer test, a health certificate and an import permit from the " +
    "Thai Department of Livestock Development. Start early. Our flagship guide to " +
    '<a href="/bring-pet-to-thailand/">bringing a pet to Thailand</a> walks ' +
    "through every step; see also the " +
    '<a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import ' +
    "permit</a> and " +
    '<a href="/take-pet-out-of-thailand/export-process.html">export process</a> ' +
    "pages for the Thai-side paperwork, and the separate guide for " +
    '<a href="/take-pet-out-of-thailand/">taking a pet out of Thailand</a>.</p>' +
    "<h2>4. Thinking of adopting?</h2>" +
    "<p>Pattaya has several established shelters and rescue organisations. If you " +
    "can offer a home, see our guide to " +
    '<a href="/adopt-a-pet-pattaya/">adopting a pet in Pattaya</a>.</p>' +
    "<h2>5. Everyday essentials</h2>" +
    "<p>For food, litter and supplies, see the " +
    '<a href="/pet-shops/">pet shops directory</a>. For grooming, ' +
    '<a href="/groomers/">groomers</a>. For travel and work cover, ' +
    '<a href="/boarding/">boarding and daycare</a>. For walking and going out, see ' +
    '<a href="/dog-friendly-pattaya/">dog-friendly Pattaya</a>. Dog owners should ' +
    "also see the <a href=\"/dogs/\">dog owner&rsquo;s hub</a>; cat owners the " +
    "<a href=\"/cats/\">cat owner&rsquo;s hub</a>. And it is worth " +
    "understanding how " +
    '<a href="/owning-a-pet-in-pattaya/dog-registration-thailand.html">dog registration</a> ' +
    "and " +
    '<a href="/owning-a-pet-in-pattaya/microchipping-your-pet.html">microchipping</a>, ' +
    '<a href="/owning-a-pet-in-pattaya/where-to-walk-your-dog.html">where to walk your dog</a>, ' +
    '<a href="/pet-emergency/ticks-and-fleas.html">ticks &amp; fleas</a> ' +
    "prevention. Browse by " +
    '<a href="/directory.html">neighbourhood</a> in the directory, or see ' +
    '<a href="/pet-relocation/">pet relocation agents</a> if you are planning a move. ' +
    "It is also worth understanding " +
    '<a href="/pet-insurance-thailand.html">pet insurance in Thailand</a> ' +
    "before you need to claim. You can " +
    '<a href="/search.html">search the site</a> or browse the ' +
    '<a href="/sitemap.html">full sitemap</a>.</p>' +
    '<p class="updated">Last updated 27 May 2026</p>' +
    DISC +
    "</div></div></section>"
});

/* ---------------- About ---------------- */
pages.push(prosePage({
  path: "/about.html",
  updated: "2026-05-27",
  updatedLabel: "27 May 2026",
  title: "About PattayaPets — an independent pet directory & guide",
  desc: "About PattayaPets — an independent editorial directory and guide for pet owners in Pattaya, operated by TIMPAEMI Co., Ltd. via the Pattaya Authority network.",
  crumb: "About",
  eyebrow: "About",
  h1: "About PattayaPets",
  body:
    "<p>PattayaPets is the honest pet resource for Pattaya. It has two halves that " +
    "work together: an <strong>editorial directory</strong> of pet businesses &mdash; " +
    "vets, groomers, boarding, pet shops, trainers and relocation agents &mdash; and " +
    "a <strong>library of guides</strong> answering the questions pet owners in " +
    "Pattaya actually ask &mdash; from import and export to " +
    "<a href=\"/pet-health-pattaya/\">pet health in a tropical climate</a>, with " +
    "dedicated <a href=\"/dogs/\">dog</a> and <a href=\"/cats/\">cat</a> hubs.</p>" +
    "<h2>Why it exists</h2>" +
    "<p>If you have a pet in Pattaya, or you are bringing one to Thailand, good " +
    "information is scattered and often out of date. Reviews of local pet " +
    "businesses tend to be promotional. Import rules are explained in officialese. " +
    "PattayaPets was built to be the clear, independent, genuinely useful resource " +
    "the city was missing &mdash; written for Western expats and tourists, in plain " +
    "English.</p>" +
    "<h2>Who runs it</h2>" +
    "<p>PattayaPets is published by <strong>TIMPAEMI Co., Ltd.</strong>, based in " +
    "Pattaya, and operated via the Pattaya Authority network &mdash; a family of " +
    "independent Pattaya publications that share one method: visit anonymously, pay " +
    "every bill, take no money from the businesses covered. The founder is " +
    '<a href="https://timpaemi.com/" target="_blank" rel="noopener">Tim</a>. ' +
    "Reviews are bylined to The Editors.</p>" +
    "<h2>How it is funded</h2>" +
    "<p>By TIMPAEMI Co., Ltd. directly. There are no ads, no sponsorships, no " +
    "affiliate links, no commissions and no paid placements anywhere on the site. " +
    "The businesses we cover do not pay us, and we do not pay them &mdash; beyond " +
    "the bill for an ordinary visit, paid in full.</p>" +
    "<h2>What it is not</h2>" +
    "<p>PattayaPets is an editorial publication <em>about</em> pet businesses. It is " +
    "not a vet, not a referral service, not a pet-relocation agency and not an " +
    "insurance broker. Nothing on the site is veterinary advice. For the full " +
    'method, read our <a href="/standards.html">editorial standards</a>.</p>'
}));

/* ---------------- Editorial Standards ---------------- */
pages.push(prosePage({
  path: "/standards.html",
  title: "Editorial Standards & method — PattayaPets",
  desc: "How PattayaPets reviews pet businesses: anonymous visits, bills paid in full, zero paid placements, and verdicts scoped to the business experience only.",
  crumb: "Editorial Standards",
  eyebrow: "How we work",
  h1: "Editorial standards & method",
  schema: [{
    "@type": "FAQPage",
    mainEntity: [
      ["Does PattayaPets accept payment from businesses?",
       "No. There are no paid placements, sponsored listings, affiliate links, commissions or advertising anywhere on PattayaPets. Businesses cannot pay to appear, to rank, or to change a verdict."],
      ["Does PattayaPets give veterinary advice?",
       "No. PattayaPets is an editorial publication about pet businesses and pet ownership. Nothing on the site is veterinary advice, a diagnosis or a treatment recommendation. Always consult a qualified veterinarian."]
    ].map(function (q) {
      return { "@type": "Question", name: q[0],
        acceptedAnswer: { "@type": "Answer", text: q[1] } };
    })
  }],
  body:
    "<p>PattayaPets follows the same method as the rest of the Pattaya Authority " +
    "network. This page is the source of record for how the directory and the " +
    "guides are produced. If we ever fall short of it, tell us and we will correct " +
    "it in plain sight.</p>" +
    "<h2>How we review a business</h2>" +
    "<p>Our reviewers visit each business <strong>anonymously</strong>, as ordinary " +
    "customers, and <strong>pay every bill in full</strong> from our own funds. We " +
    "do not accept comped services, PR-arranged visits, press junkets or sponsored " +
    "placement of any kind.</p>" +
    "<h2>What a verdict means</h2>" +
    "<p>A reviewed business carries one of three verdicts:</p>" +
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
    "<p>Building an honest directory takes time. A business appears in the directory " +
    "first as a <strong>facts page</strong> &mdash; verified name, area, services, " +
    "hours, languages and contact details &mdash; marked <em>&lsquo;not yet " +
    "reviewed &mdash; visit pending&rsquo;</em>. It receives a verdict only after a " +
    "real anonymous visit. We never invent a verdict and never publish a fake " +
    "review.</p>" +
    "<h2>This is not veterinary advice</h2>" +
    "<p>PattayaPets is editorial and informational only. Nothing on the site is " +
    "veterinary advice, a diagnosis, a treatment recommendation or a substitute for " +
    "professional care. If your pet is unwell or injured, consult a qualified " +
    "veterinarian. In an emergency, go to a 24-hour animal hospital.</p>" +
    "<h2>Import and export rules change</h2>" +
    "<p>Pet import and export requirements &mdash; Thai DLD rules, airline pet " +
    "policies, destination-country requirements &mdash; change without notice. We " +
    "present each process clearly and <strong>date-stamp every guide</strong>, but " +
    "you must verify the current rules with the official source: the Thai " +
    "Department of Livestock Development, your airline, and the relevant " +
    "destination-country authority. We say so on every guide.</p>" +
    "<h2>Corrections</h2>" +
    "<p>When we get something wrong, we fix it visibly. Spotted an error? See the " +
    '<a href="/corrections.html">corrections page</a> for how to report it.</p>' +
    "<h2>What we will never do</h2>" +
    "<p>No paid placements. No sponsored tags. No affiliate links. No fake reviews. " +
    "No scraping of competitor review sites. No generic stock pet clipart. The " +
    "directory and the guides are ours, built honestly.</p>"
}));

/* ---------------- Contact ---------------- */
pages.push(prosePage({
  path: "/contact.html",
  title: "Contact PattayaPets",
  desc: "Contact PattayaPets — submit a tip, report a correction, or update a business listing. Editorial publication for Pattaya pet owners.",
  crumb: "Contact",
  eyebrow: "Get in touch",
  h1: "Contact PattayaPets",
  body:
    "<p>PattayaPets is a small editorial team. We read everything, and we are glad " +
    "to hear from readers, pet owners and the businesses we cover.</p>" +
    "<h2>Email</h2>" +
    '<p><a href="mailto:hello@pattayapets.com">hello@pattayapets.com</a> &mdash; ' +
    "the best way to reach us for anything.</p>" +
    "<h2>WhatsApp</h2>" +
    '<p><a href="https://wa.me/66967286999" target="_blank" rel="noopener">' +
    "+66 96 728 6999</a> &mdash; the Pattaya Authority network line.</p>" +
    "<h2>What to send us</h2>" +
    "<ul>" +
    "<li><strong>A tip</strong> &mdash; a pet business you think we should visit, " +
    "or somewhere dog-friendly we have missed.</li>" +
    "<li><strong>A correction</strong> &mdash; if a fact on the site is wrong, " +
    "tell us the specific claim and, if you can, a source. See the " +
    '<a href="/corrections.html">corrections page</a>.</li>' +
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
  title: "Masthead — PattayaPets",
  desc: "The PattayaPets masthead — who produces the directory and guides, and what our bylines mean.",
  crumb: "Masthead",
  eyebrow: "The publication",
  h1: "Masthead",
  body:
    "<p>PattayaPets is produced by a small editorial team based in Pattaya and " +
    "published by TIMPAEMI Co., Ltd. via the Pattaya Authority network.</p>" +
    "<h2>Bylines</h2>" +
    "<p>Directory reviews and guides are bylined to <strong>The Editors</strong>. " +
    "We do not put individual names on reviews: the method matters more than the " +
    "reviewer, and anonymity protects the integrity of our visits. The founder is " +
    'named on the <a href="/about.html">About page</a>.</p>' +
    "<h2>Publisher</h2>" +
    "<p>TIMPAEMI Co., Ltd., Pattaya City, Bang Lamung District, Chon Buri 20150, " +
    "Thailand. Operated via the " +
    '<a href="https://pattaya-authority.com/" target="_blank" rel="noopener">' +
    "Pattaya Authority</a> network.</p>" +
    "<h2>Method</h2>" +
    "<p>Anonymous visits. Bills paid in full. Zero paid placements, zero " +
    "sponsorships, zero affiliate links. The full method is on the " +
    '<a href="/standards.html">editorial standards</a> page. Browse the ' +
    '<a href="/directory.html">directory</a>, the <a href="/guides.html">guides</a>, ' +
    'or <a href="/search.html">search the site</a>.</p>'
}));

/* ---------------- Corrections ---------------- */
pages.push(prosePage({
  path: "/corrections.html",
  title: "Corrections — PattayaPets",
  desc: "How PattayaPets handles corrections. Spotted a factual error? Here is how to report it, and our log of published corrections.",
  crumb: "Corrections",
  eyebrow: "Accuracy",
  h1: "Corrections",
  body:
    "<p>PattayaPets aims to be accurate, and pet businesses change &mdash; hours " +
    "move, clinics relocate, services come and go. When we get something wrong, we " +
    "correct it in plain sight.</p>" +
    "<h2>Report an error</h2>" +
    "<p>Email <a href=\"mailto:hello@pattayapets.com\">hello@pattayapets.com</a> " +
    "with the page, the specific claim that is wrong, and &mdash; if you have one " +
    "&mdash; a source we can verify. We aim to acknowledge every credible " +
    "correction request within seven days.</p>" +
    "<h2>How corrections appear</h2>" +
    "<p>A correction is noted on the page it affects and logged here, with the " +
    "date. We do not quietly edit and move on.</p>" +
    "<h2>Correction log</h2>" +
    "<p>No corrections have been published yet. This log will list them as they " +
    "occur.</p>" +
    "<p>While you are here: browse the <a href=\"/directory.html\">business " +
    "directory</a>, the <a href=\"/guides.html\">guides</a>, " +
    '<a href="/start-here.html">start here</a> if you are new, or ' +
    '<a href="/search.html">search the site</a>.</p>'
}));

/* ---------------- Privacy ---------------- */
pages.push(prosePage({
  path: "/privacy.html",
  title: "Privacy — PattayaPets",
  desc: "The PattayaPets privacy notice — what limited analytics we use, and what we do not collect.",
  crumb: "Privacy",
  eyebrow: "Your privacy",
  h1: "Privacy notice",
  body:
    "<p>PattayaPets is a static website. We do not run user accounts, we do not ask " +
    "you to log in, and we do not sell or share personal data. This notice explains " +
    "the little we do collect.</p>" +
    "<h2>Analytics</h2>" +
    "<p>We use two privacy-minded analytics tools to understand which pages are " +
    "useful:</p>" +
    "<ul>" +
    "<li><strong>Cloudflare Web Analytics</strong> &mdash; a cookieless tool that " +
    "measures page views without tracking individuals across sites.</li>" +
    "<li><strong>Google Analytics 4</strong> &mdash; configured with IP " +
    "anonymisation. GA4 sets first-party cookies to count visits. We do not use " +
    "Google Analytics for advertising and we have not enabled ad features.</li>" +
    "</ul>" +
    "<p>We do not display advertising and we do not use advertising or " +
    "cross-site tracking cookies. You can block cookies in your browser settings, " +
    "or use a content blocker, and the site will work normally.</p>" +
    "<h2>Email</h2>" +
    "<p>If you email us, we keep your message so we can reply and, where relevant, " +
    "act on a tip or correction. We do not add you to any mailing list.</p>" +
    "<h2>Hosting</h2>" +
    "<p>The site is hosted on Cloudflare Pages. Cloudflare processes standard " +
    "server request data (such as IP address) to deliver and protect the site.</p>" +
    "<h2>Contact</h2>" +
    "<p>Questions about privacy: " +
    '<a href="mailto:hello@pattayapets.com">hello@pattayapets.com</a>.</p>'
}));

/* ---------------- Accessibility ---------------- */
pages.push(prosePage({
  path: "/accessibility.html",
  title: "Accessibility — PattayaPets",
  desc: "The PattayaPets accessibility statement — our commitment to WCAG 2.2 AA and how to report an accessibility problem.",
  crumb: "Accessibility",
  eyebrow: "Accessibility",
  h1: "Accessibility statement",
  body:
    "<p>PattayaPets should be usable by everyone, including people who rely on a " +
    "keyboard, a screen reader, or browser zoom. We build to the " +
    "<strong>WCAG 2.2 AA</strong> standard.</p>" +
    "<h2>What we do</h2>" +
    "<ul>" +
    "<li>Semantic HTML, clear heading order and visible focus outlines.</li>" +
    "<li>A &lsquo;skip to content&rsquo; link and full keyboard navigation.</li>" +
    "<li>Colour contrast that meets AA, and text that reflows on small screens " +
    "and at high zoom.</li>" +
    "<li>The site works fully with JavaScript disabled.</li>" +
    "<li>Descriptive link text and alternative text on meaningful images.</li>" +
    "</ul>" +
    "<h2>Known limitations</h2>" +
    "<p>This is a new and growing site. If you find a page that is hard to use, we " +
    "want to know &mdash; that feedback directly shapes our fixes.</p>" +
    "<h2>Report a problem</h2>" +
    "<p>Email <a href=\"mailto:hello@pattayapets.com\">hello@pattayapets.com</a> " +
    "with the page and what went wrong. We aim to respond within seven days.</p>"
}));

module.exports = pages;
