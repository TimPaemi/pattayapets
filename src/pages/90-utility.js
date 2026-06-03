"use strict";
/* Utility pages: 404 and offline fallback. Both noindex. */

module.exports = [
  {
    path: "/404.html",
    title: "Page Not Found | PattayaPets Directory & Guides",
    description: "The page you were looking for could not be found on PattayaPets.",
    crumb: "Not found",
    breadcrumbs: [],
    noindex: true,
    updated: "2026-05-31",
    body:
      '<section class="section"><div class="container"><div class="prose">' +
      '<p class="eyebrow">Error 404</p>' +
      "<h1>This page could not be found</h1>" +
      "<p>The page you were looking for has moved, or never existed. It is a new " +
      "and growing site, so a few links may still be catching up.</p>" +
      "<p>Try one of these instead:</p>" +
      "<ul>" +
      '<li><a href="/">The PattayaPets home page</a></li>' +
      '<li><a href="/bring-pet-to-thailand/">Bringing a pet to Thailand</a></li>' +
      '<li><a href="/adopt-a-pet-pattaya/">Adopt a pet in Pattaya</a></li>' +
      '<li><a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">DLD import permit</a></li>' +
      '<li><a href="/take-pet-out-of-thailand/export-process.html">The export process</a></li>' +
      '<li><a href="/take-pet-out-of-thailand/">Taking a pet out of Thailand</a></li>' +
      '<li><a href="/pet-relocation/">Pet relocation agents</a></li>' +
      '<li><a href="/mobile-vets/">Mobile &amp; home-visit vets</a></li>' +
      '<li><a href="/take-pet-out-of-thailand/checklist.html">Export checklist</a></li>' +
      '<li><a href="/bring-pet-to-thailand/checklist.html">Import checklist</a></li>' +
      '<li><a href="/pet-health-pattaya/">Pet health in Pattaya</a></li>' +
      '<li><a href="/start-here.html">Start here</a> &mdash; new pet owner orientation</li>' +
      '<li><a href="/directory.html">The business directory</a> &mdash; vets, ' +
      "groomers, boarding and more</li>" +
      '<li><a href="/guides.html">Guides and resources</a> for pet owners</li>' +
      '<li><a href="/pet-emergency/24-hour-vets-pattaya.html">24-hour vets in ' +
      "Pattaya</a></li>" +
      '<li><a href="/dogs/">Dogs in Pattaya</a></li>' +
      '<li><a href="/cats/">Cats in Pattaya</a></li>' +
      '<li><a href="/sitemap.html">The full sitemap</a></li>' +
      '<li><a href="/search.html">Search the site</a></li>' +
      "</ul>" +
      '<p style="margin-top:1.2rem">Sister guides: ' +
      '<a href="https://pattayavisahelp.com/" target="_blank" rel="noopener noreferrer">Pattaya Visa Help</a>, ' +
      '<a href="https://pattaya-vehicle-rentals.com/" target="_blank" rel="noopener noreferrer">Vehicle Rentals</a>, ' +
      '<a href="https://pattaya-medical.com/" target="_blank" rel="noopener noreferrer">Pattaya Medical</a> ' +
      "in the <a href=\"https://pattaya-authority.com/\" target=\"_blank\" rel=\"noopener noreferrer\">" +
      "Pattaya Authority</a> network.</p></div></div></section>"
  },
  {
    path: "/offline.html",
    title: "You Are Offline | PattayaPets — Cached Pages May Still Open",
    description: "You appear to be offline. PattayaPets may still open pages you visited earlier; reconnect to browse the directory and guides.",
    crumb: "Offline",
    breadcrumbs: [],
    noindex: true,
    updated: "2026-05-31",
    body:
      '<section class="section"><div class="container"><div class="prose">' +
      '<p class="eyebrow">No connection</p>' +
      "<h1>You are offline</h1>" +
      "<p>It looks like your device has lost its internet connection, so this page " +
      "could not load.</p>" +
      "<p>Pages you have already visited may still open from your device. Once you " +
      "are back online, everything will work normally again. Try " +
      '<a href="/">the home page</a>, the ' +
      '<a href="/directory.html">business directory</a>, ' +
      '<a href="/guides.html">guides</a>, or ' +
      '<a href="/pet-emergency/24-hour-vets-pattaya.html">24-hour vets</a> from a ' +
      "cached page if you need to, or " +
      '<a href="/owning-a-pet-in-pattaya/getting-to-the-vet.html">getting your pet ' +
      "to the vet</a> if transport is the issue.</p>" +
      '<div class="callout callout-emergency"><div class="ch">In a pet emergency</div>' +
      "<p>If your pet needs urgent help and you cannot get online, open a " +
      '<a href="/pet-emergency/24-hour-vets-pattaya.html">24-hour animal hospital</a> ' +
      "listing you saved earlier, or head to the nearest hospital you know. " +
      "Save a clinic&rsquo;s contact details while you still have a connection.</p></div>" +
      "</div></div></section>"
  }
];
