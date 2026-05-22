"use strict";
/* Utility pages: 404 and offline fallback. Both noindex. */

module.exports = [
  {
    path: "/404.html",
    title: "Page not found — PattayaPets",
    description: "The page you were looking for could not be found on PattayaPets.",
    crumb: "Not found",
    breadcrumbs: [],
    noindex: true,
    updated: "2026-05-21",
    body:
      '<section class="section"><div class="container"><div class="prose">' +
      '<p class="eyebrow">Error 404</p>' +
      "<h1>This page could not be found</h1>" +
      "<p>The page you were looking for has moved, or never existed. It is a new " +
      "and growing site, so a few links may still be catching up.</p>" +
      "<p>Try one of these instead:</p>" +
      "<ul>" +
      '<li><a href="/">The PattayaPets home page</a></li>' +
      '<li><a href="/directory.html">The business directory</a> &mdash; vets, ' +
      "groomers, boarding and more</li>" +
      '<li><a href="/guides.html">Guides and resources</a> for pet owners</li>' +
      '<li><a href="/pet-emergency/24-hour-vets-pattaya.html">24-hour vets in ' +
      "Pattaya</a></li>" +
      '<li><a href="/sitemap.html">The full sitemap</a></li>' +
      "</ul></div></div></section>"
  },
  {
    path: "/offline.html",
    title: "You are offline — PattayaPets",
    description: "You appear to be offline.",
    crumb: "Offline",
    breadcrumbs: [],
    noindex: true,
    updated: "2026-05-21",
    body:
      '<section class="section"><div class="container"><div class="prose">' +
      '<p class="eyebrow">No connection</p>' +
      "<h1>You are offline</h1>" +
      "<p>It looks like your device has lost its internet connection, so this page " +
      "could not load.</p>" +
      "<p>Pages you have already visited may still open from your device. Once you " +
      "are back online, everything will work normally again.</p>" +
      '<div class="callout callout-emergency"><h4>In a pet emergency</h4>' +
      "<p>If your pet needs urgent help and you cannot get online, call a 24-hour " +
      "animal hospital directly. It is worth saving your nearest one in your phone " +
      "now, before you need it.</p></div>" +
      "</div></div></section>"
  }
];
