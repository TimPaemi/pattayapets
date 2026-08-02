"use strict";
/* PattayaPets shared layout. Renders a complete static HTML document per page. */

const { SITE } = require("./site-config.js");
const { imageForRoute } = require("./route-image.js");

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

const SITE_SLOGAN = "Built in Pattaya. For Pattaya.";

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
    '<form class="header-search" action="/search.html" method="get" role="search" aria-label="Site search">' +
    '<label class="visually-hidden" for="' + inputId + '">Search PattayaPets</label>' +
    '<input type="search" name="q" id="' + inputId + '" autocomplete="off" ' +
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
  const year = SITE.copyrightYear;
  /* FOOTER-SPEC-2027 — Insider layout: brand + byline + socials, 4 nav columns,
     rule, legal row, disclosure note. timpaemi.com is the only cross-site link. */
  return (
    '<footer class="site-footer"><!--FOOTER-SPEC-2027-->' +
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
    '<p class="pf-tag">Source-led pet guidance for Pattaya: local services, daily care, adoption, emergencies and travel paperwork.</p>' +
    '<div class="pf-by">' +
    '<img src="/assets/img/timpaemi.jpg" width="46" height="46" loading="lazy" alt="Tim and Paemi, who write and check PattayaPets">' +
    '<span>Written, edited and maintained by ' +
    '<a class="pf-author" href="/masthead.html#tim">Tim</a> &amp; ' +
    '<a class="pf-author" href="/masthead.html#paemi">Paemi</a>, the married team behind TimPaemi, ' +
    'working across publishing, web development, events and live production in Pattaya. ' +
    '<a class="pf-credit" href="https://timpaemi.com/" rel="author noopener">TimPaemi.com</a></span>' +
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
    '<span>&copy; ' + year + ' ' + esc(SITE.publisherLegalName) + ' &middot; Made in Pattaya, Thailand</span>' +
    '<span class="pf-legal-links">' +
    '<a href="/privacy.html">Privacy</a>' +
    '<a href="/terms.html">Terms</a>' +
    '<a href="/accessibility.html">Accessibility</a>' +
    '<a href="/sitemap.html">Sitemap</a>' +
    '</span>' +
    '</div>' +
    '<p class="pf-note">Facts pages show their evidence and visit status &middot; No paid placements, sponsorships or affiliate links. ' +
    esc(DISCLAIMER) + ' ' +
    '<a href="https://google.com/preferences/source?q=pattayapets.com" rel="nofollow noopener" target="_blank">Make PattayaPets a preferred source in Google</a>.</p>' +
    '</div>' +
    '</footer>'
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
  return '<div class="container"><p class="updated date-stamp">Last updated <time datetime="' +
    page.updated + '">' + fmtDate(page.updated) + "</time></p></div>";
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

function personGraphs(full) {
  return SITE.authors.map(function (person, index) {
    var node = {
      "@type": "Person",
      "@id": person.id,
      name: person.name,
      url: person.url
    };
    if (full) {
      node.mainEntityOfPage = person.url;
      node.image = {
        "@type": "ImageObject",
        "@id": SITE.url + "/assets/img/timpaemi.jpg#image",
        url: SITE.url + "/assets/img/timpaemi.jpg",
        contentUrl: SITE.url + "/assets/img/timpaemi.jpg",
        width: 512,
        height: 512,
        caption: "Tim and Paemi, the married team behind TimPaemi and PattayaPets",
        copyrightHolder: { "@id": SITE.publisherId }
      };
      node.jobTitle = person.role;
      node.description = person.name + " is one half of the married team behind TimPaemi and a named author and editor of PattayaPets.";
      node.spouse = { "@id": SITE.authors[index === 0 ? 1 : 0].id };
      node.worksFor = { "@id": SITE.publisherId };
    }
    return node;
  });
}

function publisherRef() {
  return {
    "@type": "Organization",
    "@id": SITE.publisherId,
    name: SITE.publisherName,
    url: SITE.publisherUrl
  };
}

function publisherGraph(full) {
  var publisher = publisherRef();
  if (!full) return publisher;
  publisher.legalName = SITE.publisherLegalName;
  publisher.description = SITE.teamSummary + " " + SITE.teamWork + " " +
    SITE.publisherLegalName + " publishes PattayaPets.";
  publisher.logo = {
    "@type": "ImageObject",
    url: SITE.url + "/assets/img/icon-512.png",
    width: 512,
    height: 512
  };
  publisher.founder = SITE.authors.map(function (person) { return { "@id": person.id }; });
  publisher.sameAs = SITE.socials.slice();
  publisher.publishingPrinciples = SITE.policies.publishingPrinciples;
  publisher.correctionsPolicy = SITE.policies.correctionsPolicy;
  publisher.actionableFeedbackPolicy = SITE.policies.actionableFeedbackPolicy;
  publisher.ownershipFundingInfo = SITE.policies.ownershipFundingInfo;
  return publisher;
}

function websiteGraph() {
  return {
    "@type": "WebSite",
    "@id": SITE.url + "/#website",
    name: SITE.name,
    alternateName: "Pattaya Pets",
    url: SITE.url + "/",
    creator: SITE.authors.map(function (person) { return { "@id": person.id }; }),
    publisher: publisherRef(),
    copyrightHolder: { "@id": SITE.publisherId },
    inLanguage: "en"
  };
}

function webPageGraph(page) {
  const node = {
    "@type": "WebPage",
    "@id": canonical(page.path) + "#webpage",
    url: canonical(page.path),
    name: page.ogTitle || page.title,
    description: page.description,
    isPartOf: { "@id": SITE.url + "/#website" },
    creator: SITE.authors.map(function (person) { return { "@id": person.id }; }),
    publisher: publisherRef(),
    copyrightHolder: { "@id": SITE.publisherId },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: SITE.url + imageForRoute(page.path, page.image),
      width: 1200,
      height: 630
    },
    inLanguage: "en"
  };
  if (page.path !== "/") node.breadcrumb = { "@id": canonical(page.path) + "#breadcrumb" };
  var mainEntity = (page.schema || []).find(function (entry) {
    return entry && entry["@id"] && entry["@type"] !== "FAQPage";
  });
  if (mainEntity) node.mainEntity = { "@id": mainEntity["@id"] };
  if (page.updated) node.dateModified = page.updated;
  if (page.published) node.datePublished = page.published;
  if (page.path === "/masthead.html") {
    node.about = SITE.authors.map(function (person) { return { "@id": person.id }; })
      .concat([{ "@id": SITE.publisherId }]);
  } else if (page.path === "/about.html") {
    node.about = [
      { "@id": SITE.url + "/#website" },
      { "@id": SITE.publisherId }
    ];
  }
  return node;
}

function breadcrumbGraph(page) {
  const trail = [{ name: "Home", path: "/" }].concat(page.breadcrumbs || []);
  const current = page.crumb || page.shortTitle;
  if (current) trail.push({ name: current, path: page.path });
  return {
    "@type": "BreadcrumbList",
    "@id": canonical(page.path) + "#breadcrumb",
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

/* Render authored titles exactly; page-kind authoring and audits own title quality. */
function renderPage(page, opts) {
  opts = opts || {};
  const cssHref = opts.cssHref || "/assets/css/site.css";
  const jsSrc = opts.jsSrc || "/assets/js/site.js";
  const url = canonical(page.path);
  const image = SITE.url + imageForRoute(page.path, page.image);
  const ogType = page.ogType || "website";
  const robots = page.noindex
    ? "noindex, follow"
    : "index, follow, max-image-preview:large, max-snippet:-1";

  const isEntityPage = page.path === "/";
  const graph = personGraphs(isEntityPage).concat([
    publisherGraph(isEntityPage),
    websiteGraph(),
    webPageGraph(page)
  ]);
  if (page.path !== "/") graph.push(breadcrumbGraph(page));
  if (page.schema && page.schema.length) {
    page.schema.forEach(function (s) { graph.push(s); });
  }
  const jsonld = JSON.stringify({ "@context": "https://schema.org", "@graph": graph })
    .replace(/</g, "\\u003c");

  return (
    "<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\">" +
    '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">' +
    "<title>" + esc(page.title) + "</title>" +
    '<meta name="description" content="' + esc(page.description) + '">' +
    '<link rel="canonical" href="' + url + '">' +
    '<meta name="robots" content="' + robots + '">' +
    (ogType === "article" && page.published
      ? '<meta property="article:published_time" content="' + page.published + 'T00:00:00+07:00">'
      : "") +
    (ogType === "article" && page.updated
      ? '<meta property="article:modified_time" content="' + page.updated + 'T00:00:00+07:00">' +
        '<meta property="og:updated_time" content="' + page.updated + 'T00:00:00+07:00">'
      : "") +
    '<meta name="theme-color" content="#1B5A4C">' +
    '<meta name="author" content="Tim and Paemi — TimPaemi">' +
    '<meta name="publisher" content="' + esc(SITE.publisherLegalName) + '">' +
    '<meta property="og:type" content="' + ogType + '">' +
    '<meta property="og:site_name" content="PattayaPets">' +
    '<meta property="og:title" content="' + esc(page.ogTitle || page.title) + '">' +
    '<meta property="og:description" content="' + esc(page.description) + '">' +
    '<meta property="og:url" content="' + url + '">' +
    '<meta property="og:image" content="' + image + '">' +
    '<meta property="og:image:alt" content="' + esc(page.ogTitle || page.title) + '">' +
    '<meta property="og:image:width" content="1200">' +
    '<meta property="og:image:height" content="630">' +
    '<meta property="og:locale" content="en_US">' +
    '<meta name="twitter:card" content="summary_large_image">' +
    '<meta name="twitter:title" content="' + esc(page.ogTitle || page.title) + '">' +
    '<meta name="twitter:description" content="' + esc(page.description) + '">' +
    '<meta name="twitter:image" content="' + image + '">' +
    '<meta name="twitter:image:alt" content="' + esc(page.ogTitle || page.title) + '">' +
    '<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">' +
    '<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">' +
    '<link rel="manifest" href="/manifest.webmanifest">' +
    '<link rel="preload" href="/assets/fonts/bricolage-700.woff2" as="font" type="font/woff2" crossorigin fetchpriority="high">' +
    '<link rel="preload" href="/assets/fonts/hanken-400.woff2" as="font" type="font/woff2" crossorigin>' +
    '<link rel="stylesheet" href="' + cssHref + '">' +
    '<script type="application/ld+json">' + jsonld + "</script>" +
    "</head><body" + (page.bodyClass ? ' class="' + page.bodyClass + '"' : "") + ">" +
    header() +
    breadcrumbHtml(page) +
    '<main id="main" tabindex="-1">' + page.body + dateStamp(page) + "</main>" +
    footer() +
    '<script src="' + jsSrc + '" defer></script>' +
    (SITE.analytics.cloudflareBeaconToken
      ? '<script defer src="https://static.cloudflareinsights.com/beacon.min.js" ' +
        "data-cf-beacon='{\"token\":\"" + SITE.analytics.cloudflareBeaconToken + "\"}'></script>"
      : "") +
    "</body></html>"
  );
}

module.exports = { SITE, NAV, SITE_SLOGAN, DISCLAIMER, esc, canonical, renderPage, brandLink };
