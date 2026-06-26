"use strict";
/* PattayaPets shared layout. Renders a complete static HTML document per page. */

const SITE = {
  url: "https://pattayapets.com",
  name: "PattayaPets",
  tagline: "The honest pet resource for Pattaya",
  operator: "TIMPAEMI Co., Ltd.",
  email: "hello@pattayapets.com",
  whatsapp: "66967286999",
  ga: "G-TX1PLBHN2K",
  cfBeacon: "CF-TOKEN-PLACEHOLDER"
};

const NAV = [
  { name: "Directory", href: "/directory.html" },
  { name: "Guides", href: "/guides.html" },
  { name: "Bring a Pet", href: "/bring-pet-to-thailand/" },
  { name: "Emergency", href: "/pet-emergency/" },
  { name: "Dog-Friendly", href: "/dog-friendly-pattaya/" },
  { name: "Adopt", href: "/adopt-a-pet-pattaya/" },
  { name: "About", href: "/about.html" },
  { name: "Search", href: "/search.html" }
];

const NETWORK_SLOGAN = "Built in Pattaya. For Pattaya.";

/* Canonical Pattaya Authority network list — exclude this site (PattayaPets). */
const NETWORK = [
  { name: "Pattaya Authority", url: "https://pattaya-authority.com/work/pattaya-pets/" },
  { name: "TimPaemi", url: "https://timpaemi.com/" },
  { name: "Pattaya Restaurant Guide", url: "https://pattaya-restaurant-guide.com/" },
  { name: "Pattaya Visa Help", url: "https://pattayavisahelp.com/" },
  { name: "Pattaya Gym", url: "https://pattaya-gym.com/" },
  { name: "Pattaya After Dark", url: "https://pattaya-afterdark.com/" },
  { name: "Pattaya School Guide", url: "https://pattaya-school-guide.com/" },
  { name: "Pattaya Coffee", url: "https://pattaya-coffee.com/" },
  { name: "Pattaya Villa Stream", url: "https://pattayastream.com/" },
  { name: "Pattaya Medical", url: "https://pattaya-medical.com/" },
  { name: "Pattaya Vehicle Rentals", url: "https://pattaya-vehicle-rentals.com/" },
  { name: "TimPaemi Live", url: "https://timpaemi.live/" },
  { name: "Pattaya Golf", url: "https://pattaya-golf.com/" },
  { name: "Retire in Pattaya", url: "https://retire-in-pattaya.com/" },
  { name: "Move to Pattaya", url: "https://movetopattaya.com/" },
  { name: "PattayaTools", url: "https://pattayatools.pages.dev/" },
  { name: "Koh Larn Guide", url: "https://koh-larn-thailand.com/" },
  { name: "Pattaya Insider", url: "https://pattaya-insider.com/" }
];

const DISCLAIMER =
  "Editorial and informational only. Not veterinary advice. Always consult a qualified veterinarian.";

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function canonical(path) {
  if (path === "/" || path === "") return SITE.url + "/";
  return SITE.url + path;
}

const BRAND_MARK =
  '<svg class="brand-mark" viewBox="0 0 32 40" aria-hidden="true" focusable="false">' +
  '<path d="M16 1.5C8.8 1.5 3.5 7 3.5 14.2 3.5 23 16 38.5 16 38.5S28.5 23 28.5 14.2C28.5 7 23.2 1.5 16 1.5Z" fill="#1B5A4C"/>' +
  '<g fill="#FAF5EC"><ellipse cx="16" cy="19.4" rx="5.2" ry="4.1"/>' +
  '<circle cx="9.7" cy="12.6" r="2.5"/><circle cx="14.2" cy="9.4" r="2.6"/>' +
  '<circle cx="18.8" cy="9.4" r="2.6"/><circle cx="22.3" cy="12.6" r="2.5"/></g></svg>';

function brandLink(cls) {
  return '<a class="brand ' + (cls || "") + '" href="/" aria-label="PattayaPets home">' +
    BRAND_MARK +
    '<span class="brand-name"><span>Pattaya</span><b>Pets</b></span></a>';
}

function headerSearchForm(inputId) {
  return (
    '<form class="header-search" action="/search.html" method="get" role="search">' +
    '<label class="visually-hidden" for="' + inputId + '">Search PattayaPets</label>' +
    '<input type="search" name="q" id="' + inputId + '" autocomplete="search" ' +
    'placeholder="Search the site" maxlength="80">' +
    '<button type="submit" aria-label="Search">' +
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" ' +
    'stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>' +
    "</button></form>"
  );
}

const SEARCH_ICON =
  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" ' +
  'stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>';

function header() {
  return (
    '<a class="skip-link" href="#main">Skip to content</a>' +
    '<div class="topbar"><a href="/pet-emergency/24-hour-vets-pattaya.html">' +
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 8v4m0 4h.01"/>' +
    '<path d="M10.3 3.6 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0Z"/></svg>' +
    "Pet emergency? See 24-hour vets in Pattaya &rarr;</a></div>" +
    '<header class="site-header"><div class="header-row">' +
    brandLink("") +
    headerSearchForm("header-q") +
    '<div class="header-mobile-actions">' +
    '<a class="header-nav-quick" href="/directory.html">Directory</a>' +
    '<a class="header-nav-quick header-nav-quick--alert" href="/pet-emergency/">Emergency</a>' +
    '<details class="header-search-drawer">' +
    '<summary class="header-search-link" aria-label="Open search">' + SEARCH_ICON + "</summary>" +
    '<div class="header-search-drawer__panel">' + headerSearchForm("header-q-mobile") + "</div>" +
    "</details>" +
    '<button class="nav-toggle" aria-expanded="false" aria-controls="primary-nav" aria-label="Open menu">' +
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" ' +
    'stroke-linecap="round" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>' +
    '<span class="nav-toggle__label">Menu</span></button>' +
    "</div>" +
    '<nav class="nav" id="primary-nav" aria-label="Primary">' +
    NAV.map(function (n) { return '<a href="' + n.href + '">' + esc(n.name) + "</a>"; }).join("") +
    "</nav></div></header>"
  );
}

function footer() {
  const year = new Date().getFullYear();
  return (
    '<footer class="site-footer">' +
    '<div class="footer-disclaimer">' + esc(DISCLAIMER) + "</div>" +
    '<div class="footer-main">' +
    '<div class="footer-brand">' + brandLink("") +
        "<p>An independent editorial directory and guide for pet owners in Pattaya. " +
    "Reviewed honestly through anonymous visits. No paid placements, ever.</p></div>" +
    '<details class="footer-panel"><summary class="footer-panel__title">The site</summary>' +
    '<div class="footer-panel__body"><ul class="footer-links">' +
    '<li><a href="/directory.html">Business directory</a></li>' +
    '<li><a href="/guides.html">Guides &amp; resources</a></li>' +
    '<li><a href="/start-here.html">Start here</a></li>' +
    '<li><a href="/search.html">Search the site</a></li>' +
    '<li><a href="/about.html">About</a></li>' +
    '<li><a href="/masthead.html">Masthead</a></li>' +
    '<li><a href="/standards.html">Editorial standards</a></li>' +
    '<li><a href="/corrections.html">Corrections</a></li>' +
    '<li><a href="/contact.html">Contact</a></li>' +
    '<li><a href="/sitemap.html">Sitemap</a></li></ul></div></details>' +
    '<details class="footer-panel"><summary class="footer-panel__title">Pet owner essentials</summary>' +
    '<div class="footer-panel__body"><ul class="footer-links">' +
    '<li><a href="/vets/">Vets &amp; animal hospitals</a></li>' +
    '<li><a href="/groomers/">Pet groomers</a></li>' +
    '<li><a href="/pet-shops/">Pet shops</a></li>' +
    '<li><a href="/mobile-vets/">Mobile &amp; home-visit vets</a></li>' +
    '<li><a href="/dogs/">Dogs in Pattaya</a></li>' +
    '<li><a href="/cats/">Cats in Pattaya</a></li>' +
    '<li><a href="/boarding/">Pet boarding &amp; daycare</a></li>' +
    '<li><a href="/trainers/">Dog trainers</a></li>' +
    '<li><a href="/pet-emergency/24-hour-vets-pattaya.html">24-hour vets</a></li>' +
    '<li><a href="/bring-pet-to-thailand/">Bring a pet to Thailand</a></li>' +
    '<li><a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a></li>' +
    '<li><a href="/take-pet-out-of-thailand/export-process.html">The export process</a></li>' +
    '<li><a href="/take-pet-out-of-thailand/">Take a pet out of Thailand</a></li>' +
    '<li><a href="/owning-a-pet-in-pattaya/">Owning a pet in Pattaya</a></li>' +
    '<li><a href="/pet-health-pattaya/">Pet health in Pattaya</a></li>' +
    '<li><a href="/dog-friendly-pattaya/">Dog-friendly Pattaya</a></li>' +
    '<li><a href="/adopt-a-pet-pattaya/">Adopt a pet</a></li>' +
    '<li><a href="/pet-insurance-thailand.html">Pet insurance</a></li></ul></div></details></div>' +
    /* PA-NET bold block */ `<style>.pa-net{--pa-pink:#ff2f8e;--pa-cyan:#00e5ff;font-family:inherit;box-sizing:border-box;width:100%;margin:0;padding:3rem 1.25rem 1.5rem;border-top:1px solid rgba(127,127,127,.22);color:inherit;-webkit-font-smoothing:antialiased}
.pa-net *{box-sizing:border-box}
.pa-net a{color:inherit;text-decoration:none}
.pa-net__in{max-width:1180px;margin:0 auto}
.pa-net__grid{display:grid;grid-template-columns:1fr;gap:2rem;text-align:left}
.pa-net__brand-name{font-weight:800;font-size:1.35rem;letter-spacing:.02em}
.pa-net__brand-name .pk{color:var(--pa-pink)}
.pa-net__brand p{margin:.7rem 0 0;font-size:.85rem;opacity:.72;line-height:1.5;max-width:34ch}
.pa-net__founder{margin:.6rem 0 0;font-size:.8rem;opacity:.85;font-weight:600}
.pa-net__tag{font-size:.66rem;letter-spacing:.22em;text-transform:uppercase;color:var(--pa-cyan);margin:0 0 .9rem}
.pa-net__col a{display:block;padding:.32rem 0;font-size:.9rem;opacity:.85;transition:opacity .15s,color .15s}
.pa-net__col a:hover,.pa-net__col a:focus-visible{opacity:1;color:var(--pa-cyan)}
.pa-net__col a .pk{color:var(--pa-pink);font-weight:700}
.pa-net__col-direct a{text-decoration:underline;text-underline-offset:3px;text-decoration-thickness:1px;text-decoration-color:rgba(127,127,127,.55)}
.pa-net__col-direct a:hover,.pa-net__col-direct a:focus-visible{color:var(--pa-cyan);text-decoration-color:var(--pa-cyan)}
.pa-net__property{text-align:center;margin:2.4rem 0 0;padding-top:1.6rem;border-top:1px solid rgba(127,127,127,.18)}
.pa-net__badge{display:inline-block;font-size:.62rem;letter-spacing:.24em;color:var(--pa-cyan);border:1px solid rgba(127,127,127,.3);border-radius:4px;padding:.35rem .8rem;margin-bottom:1rem}
.pa-net__bigname{font-weight:900;font-size:clamp(1.8rem,5vw,2.8rem);letter-spacing:.01em;line-height:1}
.pa-net__bigname .pk{color:var(--pa-pink)}.pa-net__bigname .cy{color:var(--pa-cyan)}
.pa-net__strap{margin:.7rem 0 0;font-weight:700;font-size:1rem}
.pa-net__strap .pk{color:var(--pa-pink)}.pa-net__strap .cy{color:var(--pa-cyan)}
.pa-net__sub{margin:.5rem 0 0;font-size:.64rem;letter-spacing:.2em;text-transform:uppercase;opacity:.6}
.pa-net__sub b{color:var(--pa-cyan)}
.pa-net__credit{margin:1rem 0 0;font-size:.66rem;letter-spacing:.12em;text-transform:uppercase;opacity:.7;line-height:1.7}
.pa-net__credit a{font-weight:700;text-decoration:underline;text-underline-offset:2px}
.pa-net__credit a:hover{color:var(--pa-cyan)}
.pa-net__bottom{text-align:center;margin:1.4rem 0 0;font-size:.66rem;letter-spacing:.12em;text-transform:uppercase;opacity:.55}
.pa-net__bottom a{color:inherit;text-decoration:underline;text-underline-offset:2px}
@media(min-width:760px){.pa-net__grid{grid-template-columns:1.4fr 1fr 1fr;gap:2.5rem}.pa-net__col-net{column-count:2;column-gap:1.5rem}}
.pa-net-lite{font-family:inherit;display:flex;flex-wrap:wrap;gap:8px 14px;align-items:center;justify-content:center;width:100%;margin:0;padding:1rem;border-top:1px solid rgba(127,127,127,.2);font-size:.82rem;opacity:.9;color:inherit;text-align:center}
.pa-net-lite a{color:inherit;font-weight:600;text-underline-offset:2px}</style>
  <section class="pa-net" aria-label="Pattaya Authority network">
    <div class="pa-net__in">
      <div class="pa-net__grid">
        <div class="pa-net__brand">
          <div class="pa-net__brand-name">PattayaPets<span class="pk">.</span></div>
          <p>Part of the Pattaya Authority network — 18 independent Pattaya sites, written &amp; run in-house. <strong>Built in Pattaya. For Pattaya.</strong></p>
          <p class="pa-net__founder">— Tim &amp; Paemi, founders</p>
        </div>
        <nav class="pa-net__col pa-net__col-net" aria-label="Network sites">
          <div class="pa-net__tag">// Network · 18 sites</div>
        <a href="https://timpaemi.com/" target="_blank" rel="noopener noreferrer"><span class="pk">TimPaemi</span> ↗</a>
        <a href="https://pattaya-authority.com/" target="_blank" rel="noopener noreferrer"><span class="pk">Pattaya Authority</span> ↗</a>
        <a href="https://timpaemi.live/" target="_blank" rel="noopener noreferrer">TimPaemi Live ↗</a>
        <a href="https://pattaya-restaurant-guide.com/" target="_blank" rel="noopener noreferrer">Pattaya Restaurant Guide ↗</a>
        <a href="https://pattaya-coffee.com/" target="_blank" rel="noopener noreferrer">Pattaya Coffee ↗</a>
        <a href="https://pattayavisahelp.com/" target="_blank" rel="noopener noreferrer">Pattaya Visa Help ↗</a>
        <a href="https://pattaya-school-guide.com/" target="_blank" rel="noopener noreferrer">Pattaya School Guide ↗</a>
        <a href="https://retire-in-pattaya.com/" target="_blank" rel="noopener noreferrer">Retire in Pattaya ↗</a>
        <a href="https://movetopattaya.com/" target="_blank" rel="noopener noreferrer">Move to Pattaya ↗</a>
        <a href="https://pattayatools.pages.dev/" target="_blank" rel="noopener noreferrer">PattayaTools ↗</a>
        <a href="https://pattaya-gym.com/" target="_blank" rel="noopener noreferrer">Pattaya Gym ↗</a>
        <a href="https://pattaya-medical.com/" target="_blank" rel="noopener noreferrer">Pattaya Medical ↗</a>
        <a href="https://pattaya-afterdark.com/" target="_blank" rel="noopener noreferrer">Pattaya After Dark ↗</a>
        <a href="https://pattayastream.com/" target="_blank" rel="noopener noreferrer">Pattaya Villa Stream ↗</a>
        <a href="https://pattaya-golf.com/" target="_blank" rel="noopener noreferrer">Pattaya Golf ↗</a>
        <a href="https://pattaya-vehicle-rentals.com/" target="_blank" rel="noopener noreferrer">Pattaya Vehicle Rentals ↗</a>
        <a href="https://koh-larn-thailand.com/" target="_blank" rel="noopener noreferrer">Koh Larn Guide ↗</a>
        <a href="https://pattaya-insider.com/" target="_blank" rel="noopener noreferrer">Pattaya Insider ↗</a>
        </nav>
        <nav class="pa-net__col pa-net__col-direct" aria-label="Direct contact">
          <div class="pa-net__tag">// Direct</div>
        <a href="mailto:info@timpaemi.com">info@timpaemi.com</a>
        <a href="https://api.whatsapp.com/send/?phone=66967286999" target="_blank" rel="noopener noreferrer">WhatsApp · +66 96 728 6999</a>
        <a href="https://line.me/ti/p/~timpaemi" target="_blank" rel="noopener noreferrer">LINE · @timpaemi</a>
        <a href="https://www.youtube.com/@timpaemi" target="_blank" rel="me noopener noreferrer">YouTube · @timpaemi</a>
        <a href="https://www.tiktok.com/@timpaemi.com" target="_blank" rel="me noopener noreferrer">TikTok · @timpaemi.com</a>
        <a href="https://www.instagram.com/timpaemi/" target="_blank" rel="me noopener noreferrer">Instagram · @timpaemi</a>
        <a href="https://www.facebook.com/timpaemi" target="_blank" rel="me noopener noreferrer">Facebook · TIMPAEMI</a>
        </nav>
      </div>
      <div class="pa-net__property">
        <div class="pa-net__badge">★ A TIMPAEMI CO. PROPERTY ★</div>
        <div class="pa-net__bigname"><span class="cy">PATTAYA</span> <span class="pk">AUTHORITY.</span></div>
        <div class="pa-net__strap">Built in <span class="pk">Pattaya</span>. For <span class="cy">Pattaya</span>.</div>
        <div class="pa-net__sub">// THE PATTAYA AUTHORITY NETWORK · <b>18 PLATFORMS</b></div>
        <div class="pa-net__credit">// BUILT, OPERATED &amp; MAINTAINED IN-HOUSE BY <a href="https://timpaemi.com/" target="_blank" rel="author noopener noreferrer">TIMPAEMI</a> · <a href="https://timpaemi.com/" target="_blank" rel="noopener noreferrer">timpaemi.com</a></div>
      </div>
      <div class="pa-net__bottom">© 2026 TIMPAEMI Co., Ltd. · ALL RIGHTS RESERVED · BUILT IN PATTAYA · 12.92°N · 100.87°E · <a href="https://timpaemi.com/privacy/" target="_blank" rel="noopener noreferrer">Privacy</a></div>
    </div>
  </section>` +
    "</footer>"
  );
}

function fmtDate(iso) {
  var M = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var p = String(iso || "").split("-");
  if (p.length !== 3) return String(iso || "");
  return parseInt(p[2], 10) + " " + M[parseInt(p[1], 10) - 1] + " " + p[0];
}
function dateStamp(page) {
  if (!page.updated) return "";
  if (page.body && page.body.indexOf('class="updated"') !== -1) return "";
  return '<div class="container"><p class="updated" style="margin:0 0 44px">Last updated ' +
    fmtDate(page.updated) + "</p></div>";
}

function breadcrumbHtml(page) {
  if (!page.breadcrumbs && page.path === "/") return "";
  const trail = [{ name: "Home", path: "/" }].concat(page.breadcrumbs || []);
  const current = page.crumb || page.shortTitle || "";
  let items = trail.map(function (c) {
    return '<li><a href="' + c.path + '">' + esc(c.name) + "</a></li>";
  });
  if (current) items.push('<li><span aria-current="page">' + esc(current) + "</span></li>");
  return '<nav class="breadcrumb container" aria-label="Breadcrumb"><ol>' + items.join("") + "</ol></nav>";
}

/* Canonical author entity for the whole Pattaya Authority network.
   Lives at timpaemi.com — referenced by Organization.founder and Article.author. */
function personGraph() {
  return {
    "@type": "Person",
    "@id": "https://timpaemi.com/#timpaemi",
    name: "TimPaemi",
    alternateName: ["Tim Paemi", "Paemi Tim", "Tim & Paemi", "TIMPAEMI"],
    url: "https://timpaemi.com/",
    image: "https://timpaemi.com/authors/timpaemi.jpg",
    jobTitle: "Founders & editors, Pattaya Authority network",
    worksFor: { "@id": "https://timpaemi.com/#org" },
    knowsAbout: [
      "Pattaya",
      "Pets in Thailand",
      "Veterinary care",
      "Thailand travel",
      "Local directory editorial"
    ],
    sameAs: [
      "https://www.youtube.com/@timpaemi",
      "https://www.tiktok.com/@timpaemi.com",
      "https://www.instagram.com/timpaemi/",
      "https://www.facebook.com/timpaemi",
      "https://timpaemi.com/",
      "https://pattaya-authority.com/",
      "https://pattaya-gym.com/",
      "https://pattaya-afterdark.com/",
      "https://pattaya-restaurant-guide.com/",
      "https://pattayavisahelp.com/",
      "https://pattaya-school-guide.com/",
      "https://pattaya-coffee.com/",
      "https://pattayastream.com/",
      "https://pattaya-medical.com/",
      "https://pattayapets.com/",
      "https://pattaya-vehicle-rentals.com/",
      "https://pattayavilla.com/",
      "https://pattayapersonaltrainer.com/",
      "https://mrweoutside.com/",
      "https://pattayaolympian.com/"
    ]
  };
}

function orgGraph() {
  return {
    "@type": "Organization",
    "@id": SITE.url + "/#org",
    name: SITE.name,
    url: SITE.url + "/",
    slogan: NETWORK_SLOGAN,
    description:
      "An independent editorial directory and guide for pet owners in Pattaya, Thailand.",
    logo: { "@type": "ImageObject", url: SITE.url + "/assets/img/icon-512.png" },
    email: SITE.email,
    foundingLocation: "Pattaya, Chon Buri, Thailand",
    founder: { "@id": "https://timpaemi.com/#timpaemi" },
    parentOrganization: {
      "@type": "Organization",
      "@id": "https://timpaemi.com/#org",
      name: SITE.operator
    },
    sameAs: NETWORK.map(function (n) { return n.url; })
  };
}

function websiteGraph() {
  return {
    "@type": "WebSite",
    "@id": SITE.url + "/#website",
    name: SITE.name,
    url: SITE.url + "/",
    publisher: { "@id": SITE.url + "/#org" },
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: SITE.url + "/search.html?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };
}

function breadcrumbGraph(page) {
  const trail = [{ name: "Home", path: "/" }].concat(page.breadcrumbs || []);
  const current = page.crumb || page.shortTitle;
  if (current) trail.push({ name: current, path: page.path });
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map(function (c, i) {
      return {
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: canonical(c.path)
      };
    })
  };
}

/* SERP display limit — trim at pipe boundaries when possible */
function clampMetaTitle(title, maxLen) {
  maxLen = maxLen || 60;
  if (!title || title.length <= maxLen) return title;
  var brand = " | PattayaPets";
  var hasBrand = title.slice(-brand.length) === brand;
  var core = hasBrand ? title.slice(0, -brand.length) : title;
  var budget = maxLen - (hasBrand ? brand.length : 0);
  if (core.length <= budget) return title;
  var parts = core.split(" | ");
  while (parts.length > 1) {
    var trial = parts.slice(0, -1).join(" | ");
    if (trial.length <= budget) return trial + (hasBrand ? brand : "");
    parts.pop();
  }
  if (core.length > budget) {
    core = core.slice(0, budget).replace(/\s+\S*$/, "").trim();
    if (!core) core = title.slice(0, budget).trim();
  }
  return core + (hasBrand ? brand : "");
}

function renderPage(page, opts) {
  opts = opts || {};
  const cssCritical = opts.criticalCss || "";
  const url = canonical(page.path);
  const image = (page.image ? SITE.url + page.image : SITE.url + "/assets/img/og-default.png");
  const ogType = page.ogType || "website";
  const robots = page.noindex
    ? "noindex, follow"
    : "index, follow, max-image-preview:large, max-snippet:-1";

  const graph = [orgGraph(), personGraph(), websiteGraph(), breadcrumbGraph(page)];
  if (page.schema && page.schema.length) {
    page.schema.forEach(function (s) { graph.push(s); });
  }
  const jsonld = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });

  const gaAttr = (SITE.ga && SITE.ga.indexOf("XXXX") === -1)
    ? ' data-ga="' + SITE.ga + '"'
    : "";

  return (
    "<!doctype html><html lang=\"en\"" + gaAttr + "><head><meta charset=\"utf-8\">" +
    '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">' +
    "<title>" + esc(clampMetaTitle(page.title)) + "</title>" +
    '<meta name="description" content="' + esc(page.description) + '">' +
    '<link rel="canonical" href="' + url + '">' +
    '<meta name="robots" content="' + robots + '">' +
    '<meta name="theme-color" content="#1B5A4C">' +
    '<meta name="author" content="TimPaemi (timpaemi.com)">' +
    '<meta name="publisher" content="' + esc(SITE.operator) + '">' +
    '<meta property="og:type" content="' + ogType + '">' +
    '<meta property="og:site_name" content="PattayaPets">' +
    '<meta property="og:title" content="' + esc(page.ogTitle || page.title) + '">' +
    '<meta property="og:description" content="' + esc(page.description) + '">' +
    '<meta property="og:url" content="' + url + '">' +
    '<meta property="og:image" content="' + image + '">' +
    '<meta property="og:image:width" content="1200">' +
    '<meta property="og:image:height" content="630">' +
    '<meta property="og:locale" content="en_US">' +
    '<meta name="twitter:card" content="summary_large_image">' +
    '<meta name="twitter:title" content="' + esc(page.ogTitle || page.title) + '">' +
    '<meta name="twitter:description" content="' + esc(page.description) + '">' +
    '<meta name="twitter:image" content="' + image + '">' +
    '<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">' +
    '<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">' +
    '<link rel="manifest" href="/manifest.webmanifest">' +
    '<link rel="preload" href="/assets/fonts/bricolage-700.woff2" as="font" type="font/woff2" crossorigin fetchpriority="high">' +
    '<link rel="preload" href="/assets/fonts/hanken-400.woff2" as="font" type="font/woff2" crossorigin>' +
    '<link rel="preload" href="/assets/fonts/hanken-500.woff2" as="font" type="font/woff2" crossorigin>' +
    '<link rel="preload" href="/assets/fonts/hanken-700.woff2" as="font" type="font/woff2" crossorigin>' +
    '<link rel="preload" href="/assets/fonts/bricolage-600.woff2" as="font" type="font/woff2" crossorigin>' +
    "<style>" + cssCritical + "</style>" +
    '<link rel="preload" href="/assets/css/site.css" as="style" onload="this.onload=null;this.rel=\'stylesheet\'">' +
    '<noscript><link rel="stylesheet" href="/assets/css/site.css">' +
    "<style>@media(max-width:860px){#primary-nav{display:flex;position:static;" +
    "flex-direction:column;padding:4px 20px 12px;background:var(--mist)}" +
    ".nav-toggle{display:none}}</style></noscript>" +
    '<script type="application/ld+json">' + jsonld + "</script>" +
    "</head><body" + (page.bodyClass ? ' class="' + page.bodyClass + '"' : "") + ">" +
    header() +
    breadcrumbHtml(page) +
    '<main id="main" tabindex="-1">' + page.body + dateStamp(page) + "</main>" +
    footer() +
    '<script src="/assets/js/site.js" defer></script>' +
    (SITE.cfBeacon && SITE.cfBeacon.indexOf("PLACEHOLDER") === -1
      ? '<script defer src="https://static.cloudflareinsights.com/beacon.min.js" ' +
        "data-cf-beacon='{\"token\":\"" + SITE.cfBeacon + "\"}'></script>"
      : "") +
    "</body></html>"
  );
}

module.exports = { SITE, NAV, NETWORK, NETWORK_SLOGAN, DISCLAIMER, esc, canonical, renderPage, brandLink };
