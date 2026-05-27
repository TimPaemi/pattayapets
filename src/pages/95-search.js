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
    '<p class="notice" style="margin-top:1rem">Popular: ' +
    '<a href="/pet-emergency/24-hour-vets-pattaya.html">24-hour vet</a> &middot; ' +
    '<a href="/bring-pet-to-thailand/from-uk.html">Bring pet from UK</a> &middot; ' +
    '<a href="/take-pet-out-of-thailand/to-uk.html">Export to UK</a> &middot; ' +
    '<a href="/take-pet-out-of-thailand/export-process.html">Export process</a> &middot; ' +
    '<a href="/area/jomtien.html">Jomtien</a> &middot; ' +
    '<a href="/pet-health-pattaya/tick-borne-disease.html">Tick disease</a> &middot; ' +
    '<a href="/pet-health-pattaya/">Pet health</a> &middot; ' +
    '<a href="/adopt-a-pet-pattaya/">Adopt a pet</a> &middot; ' +
    '<a href="/pet-emergency/heatstroke.html">Heatstroke</a> &middot; ' +
    '<a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">Import permit</a> &middot; ' +
    '<a href="/mobile-vets/">Mobile vet</a> &middot; ' +
    '<a href="/adopt-a-pet-pattaya/fostering.html">Fostering</a></p>' +
    '<div id="pp-results" class="search-results">' +
    '<noscript><p class="notice">Search needs JavaScript enabled. You can browse ' +
    'the <a href="/start-here.html">start-here guide</a>, the ' +
    '<a href="/directory.html">business directory</a>, the ' +
    '<a href="/guides.html">guides</a>, or the <a href="/sitemap.html">full ' +
    "sitemap</a> instead.</p></noscript></div>" +
    "</div></section>"
}];
