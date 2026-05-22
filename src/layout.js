"use strict";
/* PattayaPets shared layout. Renders a complete static HTML document per page. */

const SITE = {
  url: "https://pattayapets.com",
  name: "PattayaPets",
  tagline: "The honest pet resource for Pattaya",
  operator: "TIMPAEMI Co., Ltd.",
  email: "hello@pattayapets.com",
  whatsapp: "66967286999",
  ga: "G-XXXXXXXXXX",
  cfBeacon: "CF-TOKEN-PLACEHOLDER"
};

const NAV = [
  { name: "Directory", href: "/directory.html" },
  { name: "Guides", href: "/guides.html" },
  { name: "Bring a Pet", href: "/bring-pet-to-thailand/" },
  { name: "Dog-Friendly", href: "/dog-friendly-pattaya/" },
  { name: "Adopt", href: "/adopt-a-pet-pattaya/" },
  { name: "About", href: "/about.html" }
];

const NETWORK = [
  { name: "TimPaemi", url: "https://timpaemi.com/" },
  { name: "Pattaya Authority", url: "https://pattaya-authority.com/" },
  { name: "Restaurant Guide", url: "https://pattaya-restaurant-guide.com/" },
  { name: "Pattaya Visa Help", url: "https://pattayavisahelp.com/" },
  { name: "Pattaya Gym", url: "https://pattaya-gym.com/" },
  { name: "Pattaya School Guide", url: "https://pattaya-school-guide.com/" },
  { name: "Pattaya Coffee", url: "https://pattaya-coffee.com/" },
  { name: "Pattaya Stream", url: "https://pattayastream.com/" },
  { name: "Pattaya Medical", url: "https://pattaya-medical.com/" }
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
    '<button class="nav-toggle" aria-expanded="false" aria-controls="primary-nav">' +
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" ' +
    'stroke-linecap="round" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>Menu</button>' +
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
    '<div><h4>The site</h4><ul class="footer-links">' +
    '<li><a href="/directory.html">Business directory</a></li>' +
    '<li><a href="/guides.html">Guides &amp; resources</a></li>' +
    '<li><a href="/start-here.html">Start here</a></li>' +
    '<li><a href="/about.html">About</a></li>' +
    '<li><a href="/standards.html">Editorial standards</a></li>' +
    '<li><a href="/corrections.html">Corrections</a></li>' +
    '<li><a href="/contact.html">Contact</a></li>' +
    '<li><a href="/sitemap.html">Sitemap</a></li></ul></div>' +
    '<div><h4>Pet owner essentials</h4><ul class="footer-links">' +
    '<li><a href="/vets/">Vets &amp; animal hospitals</a></li>' +
    '<li><a href="/pet-emergency/24-hour-vets-pattaya.html">24-hour vets</a></li>' +
    '<li><a href="/bring-pet-to-thailand/">Bring a pet to Thailand</a></li>' +
    '<li><a href="/dog-friendly-pattaya/">Dog-friendly Pattaya</a></li>' +
    '<li><a href="/adopt-a-pet-pattaya/">Adopt a pet</a></li>' +
    '<li><a href="/pet-insurance-thailand.html">Pet insurance</a></li></ul></div></div>' +
    '<div class="network"><p class="network-label">The Pattaya Authority network</p>' +
    '<div class="network-links">' +
    NETWORK.map(function (s) {
      return '<a href="' + s.url + '" target="_blank" rel="noopener">' + esc(s.name) + "</a>";
    }).join("") +
    "</div></div>" +
    '<div class="footer-legal"><span>&copy; ' + year + " " + esc(SITE.operator) +
    " &mdash; Pattaya, Thailand. Operated via the Pattaya Authority network.</span>" +
    '<span><a href="/privacy.html">Privacy</a> &middot; <a href="/accessibility.html">Accessibility</a></span>' +
    "</div></footer>"
  );
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

function orgGraph() {
  return {
    "@type": "Organization",
    "@id": SITE.url + "/#org",
    name: SITE.name,
    url: SITE.url + "/",
    description:
      "An independent editorial directory and guide for pet owners in Pattaya, Thailand.",
    logo: { "@type": "ImageObject", url: SITE.url + "/assets/img/icon-512.png" },
    email: SITE.email,
    foundingLocation: "Pattaya, Chon Buri, Thailand",
    parentOrganization: { "@type": "Organization", name: SITE.operator },
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
    inLanguage: "en"
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

function renderPage(page, opts) {
  opts = opts || {};
  const cssCritical = opts.criticalCss || "";
  const url = canonical(page.path);
  const image = (page.image ? SITE.url + page.image : SITE.url + "/assets/img/og-default.png");
  const ogType = page.ogType || "website";
  const robots = page.noindex
    ? "noindex, follow"
    : "index, follow, max-image-preview:large, max-snippet:-1";

  const graph = [orgGraph(), websiteGraph(), breadcrumbGraph(page)];
  if (page.schema && page.schema.length) {
    page.schema.forEach(function (s) { graph.push(s); });
  }
  const jsonld = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });

  let analytics = "";
  if (SITE.ga && SITE.ga.indexOf("XXXX") === -1) {
    analytics +=
      '<script async src="https://www.googletagmanager.com/gtag/js?id=' + SITE.ga + '"></script>' +
      "<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}" +
      "gtag('js',new Date());gtag('config','" + SITE.ga + "',{anonymize_ip:true});</script>";
  }
  if (SITE.cfBeacon && SITE.cfBeacon.indexOf("PLACEHOLDER") === -1) {
    analytics +=
      '<script defer src="https://static.cloudflareinsights.com/beacon.min.js" ' +
      "data-cf-beacon='{\"token\":\"" + SITE.cfBeacon + "\"}'></script>";
  }

  return (
    "<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\">" +
    '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">' +
    "<title>" + esc(page.title) + "</title>" +
    '<meta name="description" content="' + esc(page.description) + '">' +
    '<link rel="canonical" href="' + url + '">' +
    '<meta name="robots" content="' + robots + '">' +
    '<meta name="theme-color" content="#1B5A4C">' +
    '<meta name="author" content="The Editors">' +
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
    '<link rel="preload" href="/assets/fonts/hanken-400.woff2" as="font" type="font/woff2" crossorigin>' +
    '<link rel="preload" href="/assets/fonts/bricolage-700.woff2" as="font" type="font/woff2" crossorigin>' +
    "<style>" + cssCritical + "</style>" +
    '<link rel="preload" href="/assets/css/site.css" as="style" onload="this.onload=null;this.rel=\'stylesheet\'">' +
    '<noscript><link rel="stylesheet" href="/assets/css/site.css">' +
    "<style>@media(max-width:860px){#primary-nav{display:flex;position:static;" +
    "flex-direction:column;padding:4px 20px 12px;background:var(--mist)}" +
    ".nav-toggle{display:none}}</style></noscript>" +
    '<script type="application/ld+json">' + jsonld + "</script>" +
    analytics +
    "</head><body" + (page.bodyClass ? ' class="' + page.bodyClass + '"' : "") + ">" +
    header() +
    breadcrumbHtml(page) +
    '<main id="main">' + page.body + "</main>" +
    footer() +
    '<script src="/assets/js/site.js" defer></script>' +
    "</body></html>"
  );
}

module.exports = { SITE, NAV, NETWORK, DISCLAIMER, esc, canonical, renderPage, brandLink };
