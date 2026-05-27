"use strict";
/* Site search — fetches /search-index.json (built by build.js). Logic lives in site.js. */

module.exports = [{
  path: "/search.html",
  title: "Search PattayaPets — vets, guides & areas",
  description: "Search every page on PattayaPets — the Pattaya pet directory, " +
    "guides, areas and businesses.",
  crumb: "Search",
  breadcrumbs: [],
  noindex: true,
  updated: "2026-05-27",
  body:
    '<section class="section"><div class="container">' +
    '<p class="eyebrow">Search</p>' +
    "<h1>Search PattayaPets</h1>" +
    '<p class="lede">Find a vet, a guide, an area or a business &mdash; across ' +
    "every page on the site.</p>" +
    '<div class="field search-form">' +
    '<label for="pp-q">What are you looking for?</label>' +
    '<input type="search" id="pp-q" autocomplete="off" ' +
    'placeholder="Try &ldquo;24 hour vet&rdquo;, &ldquo;Jomtien&rdquo;, &ldquo;bring dog from UK&rdquo;"></div>' +
    '<div id="pp-filters" class="search-filters" aria-label="Filter by section"></div>' +
    '<div id="pp-results" class="search-results">' +
    '<noscript><p class="notice">Search needs JavaScript enabled. You can browse ' +
    'the <a href="/start-here.html">start-here guide</a>, the ' +
    '<a href="/directory.html">business directory</a>, the ' +
    '<a href="/guides.html">guides</a>, or the <a href="/sitemap.html">full ' +
    "sitemap</a> instead.</p></noscript></div>" +
    "</div></section>"
}];
