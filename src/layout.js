"use strict";
/* PattayaPets shared layout. Renders a complete static HTML document per page. */

const SITE = {
  url: "https://pattayapets.com",
  name: "PattayaPets",
  tagline: "The honest pet resource for Pattaya",
  operator: "TIMPAEMI Co., Ltd.",
  email: "hello@pattayapets.com",
  whatsapp: "",
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
  /* FOOTER-SPEC-2027 — Insider layout: brand + byline + socials, 4 nav columns,
     rule, legal row, disclosure note. timpaemi.com is the only cross-site link. */
  return (
    '<footer class="site-footer"><!--FOOTER-SPEC-2027-->' +
    '<style id="pf-css">' +
    '.pf{--pf-ink:#FFFDF8;--pf-mut:rgba(255,253,248,.66);--pf-acc:#A8DCC3;max-width:1180px;margin:0 auto;padding:56px 24px 26px;text-align:left;color:var(--pf-ink)}' +
    '.pf a{text-decoration:none}' +
    '.pf-top{display:grid;grid-template-columns:1fr;gap:38px;margin:0 0 40px}' +
    '@media(min-width:900px){.pf-top{grid-template-columns:minmax(280px,1.15fr) 3fr;gap:48px}}' +
    '.pf-mark{display:flex;align-items:center;gap:11px;margin:0 0 16px}' +
    '.pf-mark svg{width:34px;height:34px;flex:none}' +
    '.pf-word{font-weight:700;font-size:1.32rem;letter-spacing:-.02em;color:var(--pf-ink)}' +
    '.pf-word b{color:var(--pf-acc);font-weight:700}' +
    '.pf-tag{color:var(--pf-mut);font-size:.9rem;line-height:1.62;margin:0 0 15px;max-width:34ch}' +
    '.pf-by{display:flex;align-items:flex-start;gap:12px;color:var(--pf-mut);font-size:.9rem;line-height:1.6;margin:0 0 20px;max-width:36ch}' +
    '.pf-by img{width:46px;height:46px;border-radius:50%;object-fit:cover;flex:none;border:1px solid rgba(255,253,248,.22)}' +
    '.pf-by b{color:var(--pf-ink);font-weight:600}' +
    '.pf-by a{color:var(--pf-acc);font-weight:600;display:block;margin-top:1px}' +
    '.pf-by a:hover{text-decoration:underline}' +
    '.pf-soc{display:flex;gap:10px;margin:0}' +
    '.pf-soc a{width:38px;height:38px;border:1px solid rgba(255,253,248,.24);border-radius:50%;display:flex;align-items:center;justify-content:center;color:var(--pf-mut);transition:.16s}' +
    '.pf-soc a:hover{border-color:var(--pf-acc);color:var(--pf-acc)}' +
    '.pf-soc svg{width:17px;height:17px;fill:currentColor}' +
    '.pf-nav{display:grid;grid-template-columns:repeat(2,1fr);gap:30px 20px}' +
    '@media(min-width:720px){.pf-nav{grid-template-columns:repeat(4,1fr);gap:30px}}' +
    '.pf-h{font-size:.66rem;letter-spacing:.19em;text-transform:uppercase;color:var(--pf-ink);font-weight:700;margin:0 0 13px}' +
    '.pf-nav ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:9px}' +
    '.pf-nav a{color:var(--pf-mut);font-size:.875rem;line-height:1.4}.pf-nav a:hover{color:var(--pf-acc)}' +
    '.pf-rule{border:0;border-top:1px solid rgba(255,253,248,.16);margin:0 0 20px}' +
    '.pf-base{display:flex;flex-direction:column;gap:12px;font-size:.78rem;color:var(--pf-mut)}' +
    '@media(min-width:720px){.pf-base{flex-direction:row;justify-content:space-between;align-items:center}}' +
    '.pf-base a{color:var(--pf-mut)}.pf-base a:hover{color:var(--pf-acc)}' +
    '.pf-legal-links{display:flex;gap:20px;flex-wrap:wrap}' +
    '.pf-note{font-size:.78rem;color:rgba(255,253,248,.5);line-height:1.6;margin:16px 0 0;max-width:78ch}' +
    '.pf-note a{color:rgba(255,253,248,.62);text-decoration:underline;text-underline-offset:2px}' +
    '.pf-note a:hover{color:var(--pf-acc)}' +
    '</style>' +
    '<div class="pf">' +
    '<div class="pf-top">' +
    '<div>' +
    '<div class="pf-mark">' +
    '<svg viewBox="0 0 32 40" aria-hidden="true" focusable="false">' +
    '<path d="M16 1.5C8.8 1.5 3.5 7 3.5 14.2 3.5 23 16 38.5 16 38.5S28.5 23 28.5 14.2C28.5 7 23.2 1.5 16 1.5Z" fill="#A8DCC3"/>' +
    '<g fill="#15241F"><ellipse cx="16" cy="19.4" rx="5.2" ry="4.1"/>' +
    '<circle cx="9.7" cy="12.6" r="2.5"/><circle cx="14.2" cy="9.4" r="2.6"/>' +
    '<circle cx="18.8" cy="9.4" r="2.6"/><circle cx="22.3" cy="12.6" r="2.5"/></g></svg>' +
    '<span class="pf-word">Pattaya<b>Pets</b></span>' +
    '</div>' +
    '<p class="pf-tag">The honest local guide to pets in Pattaya &mdash; vets, groomers, boarding, adoption and the import paperwork, checked in person by people who live here.</p>' +
    '<div class="pf-by">' +
    '<img src="/assets/img/timpaemi.jpg" width="46" height="46" loading="lazy" alt="Tim and Paemi, who write and check PattayaPets">' +
    '<span>Written and kept up to date by <b>Tim &amp; Paemi</b>, who live in Pattaya.' +
    '<a href="https://timpaemi.com/" rel="author noopener">timpaemi.com</a></span>' +
    '</div>' +
    '<div class="pf-soc">' +
    '<a href="https://www.youtube.com/@timpaemi" rel="me noopener" target="_blank" aria-label="YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg></a>' +
    '<a href="https://www.instagram.com/timpaemi/" rel="me noopener" target="_blank" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4a3.7 3.7 0 0 1-1.4-.9 3.7 3.7 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 3.2A6.6 6.6 0 1 0 18.6 12 6.6 6.6 0 0 0 12 5.4Zm0 10.9A4.3 4.3 0 1 1 16.3 12 4.3 4.3 0 0 1 12 16.3Zm6.9-11.1a1.5 1.5 0 1 1-1.5-1.6 1.5 1.5 0 0 1 1.5 1.6Z"/></svg></a>' +
    '<a href="https://www.tiktok.com/@timpaemi.com" rel="me noopener" target="_blank" aria-label="TikTok"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.3 8.4a5.9 5.9 0 0 1-4-1.6v6.9a5.4 5.4 0 1 1-4.6-5.3v2.8a2.6 2.6 0 1 0 1.8 2.5V2h2.8a4.1 4.1 0 0 0 4 3.6Z"/></svg></a>' +
    '<a href="https://www.facebook.com/timpaemi" rel="me noopener" target="_blank" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.5V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z"/></svg></a>' +
    '</div>' +
    '</div>' +
    '<nav class="pf-nav" aria-label="Footer">' +
    '<div><p class="pf-h">Explore</p><ul>' +
    '<li><a href="/directory.html">Directory</a></li>' +
    '<li><a href="/vets/">Vets &amp; hospitals</a></li>' +
    '<li><a href="/groomers/">Groomers</a></li>' +
    '<li><a href="/boarding/">Boarding</a></li>' +
    '<li><a href="/pet-shops/">Pet shops</a></li>' +
    '</ul></div>' +
    '<div><p class="pf-h">Plan</p><ul>' +
    '<li><a href="/bring-pet-to-thailand/">Bring a pet in</a></li>' +
    '<li><a href="/take-pet-out-of-thailand/">Take a pet out</a></li>' +
    '<li><a href="/bring-pet-to-thailand/checklist.html">Import checklist</a></li>' +
    '<li><a href="/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html">What it costs</a></li>' +
    '<li><a href="/bring-pet-to-thailand/airline-pet-policies.html">Airline policies</a></li>' +
    '</ul></div>' +
    '<div><p class="pf-h">Browse</p><ul>' +
    '<li><a href="/guides.html">Guides</a></li>' +
    '<li><a href="/pet-emergency/">Pet emergency</a></li>' +
    '<li><a href="/pet-health-pattaya/">Pet health</a></li>' +
    '<li><a href="/dog-friendly-pattaya/">Dog-friendly</a></li>' +
    '<li><a href="/adopt-a-pet-pattaya/">Adopt a pet</a></li>' +
    '</ul></div>' +
    '<div><p class="pf-h">Company</p><ul>' +
    '<li><a href="/about.html">About us</a></li>' +
    '<li><a href="/standards.html">How we work</a></li>' +
    '<li><a href="/press.html">Press kit</a></li>' +
    '<li><a href="/masthead.html">Masthead</a></li>' +
    '<li><a href="/corrections.html">Corrections</a></li>' +
    '<li><a href="/contact.html">Contact</a></li>' +
    '</ul></div>' +
    '</nav>' +
    '</div>' +
    '<hr class="pf-rule">' +
    '<div class="pf-base">' +
    '<span>&copy; ' + year + ' TimPaemi Co., Ltd. &middot; Made in Pattaya, Thailand</span>' +
    '<span class="pf-legal-links">' +
    '<a href="/privacy.html">Privacy</a>' +
    '<a href="/terms.html">Terms</a>' +
    '<a href="/accessibility.html">Accessibility</a>' +
    '<a href="/sitemap.html">Sitemap</a>' +
    '</span>' +
    '</div>' +
    '<p class="pf-note">Anonymous visits &middot; Bills paid in full &middot; No paid placements, no sponsorships, no affiliate links. ' +
    esc(DISCLAIMER) + ' ' +
    '<a href="https://google.com/preferences/source?q=pattayapets.com" rel="nofollow noopener" target="_blank">Make PattayaPets a preferred source in Google</a>.</p>' +
    '</div>' +
    '</footer>'
  );
}

function footerOld() {
  const year = new Date().getFullYear();
  return (
    /* PA-XLINK contextual cross-links — renders above the footer on every page */
    `` +
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
    /* PA-NET bold block */ `<!--PA-NET:START-->
  <style>.pa-net{--pa-pink:#ff2f8e;--pa-cyan:#00e5ff;font-family:inherit;box-sizing:border-box;width:100%;margin:0;padding:3rem 1.25rem 1.5rem;border-top:1px solid rgba(127,127,127,.22);color:inherit;-webkit-font-smoothing:antialiased}
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
  <section class="pa-net" aria-label="Publisher">
    <div class="pa-net__in">
      <div class="pa-net__property" style="margin-top:0;border-top:0;padding-top:0">
        <div class="pa-net__brand-name">PattayaPets<span class="pk">.</span></div>
        <p style="margin:.7rem auto 0;font-size:.85rem;opacity:.72;line-height:1.5;max-width:52ch">Written, photographed and kept up to date by the team at <a href="https://pattaya-authority.com/" target="_blank" rel="author nofollow noopener noreferrer" style="font-weight:700;text-decoration:underline;text-underline-offset:2px">Pattaya Authority</a>, a Pattaya-based publishing studio.</p>
      </div>
      <div class="pa-net__bottom">© 2026 TIMPAEMI Co., Ltd. · <a href="https://timpaemi.com/privacy/" target="_blank" rel="nofollow noopener noreferrer">Privacy</a> · <a href="mailto:info@timpaemi.com">Contact</a></div>
    </div>
  </section>
<!--PA-NET:END-->` +
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

/* FOOTER-SPEC-2026: canonical TimPaemi publisher entity (Organization).
   Same @id on every owned site — author/publisher fields reference it. */
function personGraph() {
  return {
    "@type": "Organization",
    "@id": "https://timpaemi.com/#timpaemi",
    name: "TimPaemi",
    url: "https://timpaemi.com/",
    founder: [
      { "@type": "Person", name: "Tim" },
      { "@type": "Person", name: "Paemi" }
    ],
    sameAs: [
      "https://www.youtube.com/@timpaemi",
      "https://www.tiktok.com/@timpaemi.com",
      "https://www.instagram.com/timpaemi/",
      "https://www.facebook.com/timpaemi"
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
    founder: [
      { "@type": "Person", name: "Tim" },
      { "@type": "Person", name: "Paemi" }
    ],
    parentOrganization: { "@id": "https://timpaemi.com/#timpaemi" },
    legalName: SITE.operator,
    alternateName: "Pattaya Pets",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pattaya City",
      addressRegion: "Chon Buri",
      postalCode: "20150",
      addressCountry: "TH"
    },
    areaServed: { "@type": "City", name: "Pattaya" },
    knowsAbout: [
      "Veterinary care in Pattaya",
      "Pet import to Thailand",
      "Pet export from Thailand",
      "Dog-friendly places in Pattaya",
      "Pet adoption in Thailand"
    ],
    publishingPrinciples: SITE.url + "/standards.html",
    correctionsPolicy: SITE.url + "/corrections.html",
    actionableFeedbackPolicy: SITE.url + "/contact.html",
    ethicsPolicy: SITE.url + "/standards.html",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "editorial",
      email: SITE.email,
      url: SITE.url + "/contact.html",
      availableLanguage: ["en", "th"]
    }
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

function webPageGraph(page) {
  const node = {
    "@type": "WebPage",
    "@id": canonical(page.path) + "#webpage",
    url: canonical(page.path),
    isPartOf: { "@id": SITE.url + "/#website" },
    about: { "@id": SITE.url + "/#org" },
    inLanguage: "en"
  };
  if (page.updated) node.dateModified = page.updated;
  if (page.published) node.datePublished = page.published;
  return node;
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

  const graph = [orgGraph(), personGraph(), websiteGraph(), breadcrumbGraph(page), webPageGraph(page)];
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
    (page.updated
      ? '<meta property="article:modified_time" content="' + page.updated + 'T00:00:00+07:00">' +
        '<meta property="og:updated_time" content="' + page.updated + 'T00:00:00+07:00">'
      : "") +
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
