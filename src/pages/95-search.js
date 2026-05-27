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
  updated: "2026-05-28",
  body:
    '<section class="section"><div class="container">' +
    '<p class="eyebrow">Search</p>' +
    "<h1>Search PattayaPets</h1>" +
    '<p class="lede">Find a vet, a guide, an area or a business &mdash; across ' +
    "every page on the site. Live search needs JavaScript; browse the topics " +
    "below if it is disabled.</p>" +
    '<form class="search-form" action="/search.html" method="get" role="search">' +
    '<label for="pp-q">What are you looking for?</label>' +
    '<input type="search" id="pp-q" name="q" autocomplete="off" ' +
    'placeholder="Try &ldquo;24 hour vet&rdquo;, &ldquo;Jomtien&rdquo;, &ldquo;bring dog from UK&rdquo;">' +
    '<button type="submit" class="btn btn-primary" style="margin-top:.8rem">Search</button></form>' +
    '<div class="search-browse">' +
    '<h2>Browse by topic</h2>' +
    '<p class="notice">These links work without JavaScript.</p>' +
    '<div class="chips">' +
    '<a class="chip chip-link" href="/directory.html">Directory</a>' +
    '<a class="chip chip-link" href="/vets/">Vets</a>' +
    '<a class="chip chip-link" href="/groomers/">Groomers</a>' +
    '<a class="chip chip-link" href="/boarding/">Boarding</a>' +
    '<a class="chip chip-link" href="/mobile-vets/">Mobile vets</a>' +
    '<a class="chip chip-link" href="/pet-emergency/24-hour-vets-pattaya.html">24-hour vets</a>' +
    '<a class="chip chip-link" href="/bring-pet-to-thailand/">Import guide</a>' +
    '<a class="chip chip-link" href="/bring-pet-to-thailand/checklist.html">Import checklist</a>' +
    '<a class="chip chip-link" href="/take-pet-out-of-thailand/">Export guide</a>' +
    '<a class="chip chip-link" href="/pet-emergency/">Emergencies</a>' +
    '<a class="chip chip-link" href="/pet-health-pattaya/">Pet health</a>' +
    '<a class="chip chip-link" href="/adopt-a-pet-pattaya/">Adoption</a>' +
    '<a class="chip chip-link" href="/dog-friendly-pattaya/">Dog-friendly</a>' +
    '<a class="chip chip-link" href="/pet-relocation/">Relocation agents</a>' +
    '<a class="chip chip-link" href="/area/jomtien.html">Jomtien area</a>' +
    '<a class="chip chip-link" href="/area/naklua.html">Naklua area</a>' +
    '<a class="chip chip-link" href="/area/central-pattaya.html">Central Pattaya</a>' +
    '<a class="chip chip-link" href="/area/wongamat.html">Wongamat area</a>' +
    '<a class="chip chip-link" href="/guides.html">All guides</a>' +
    '<a class="chip chip-link" href="/sitemap.html">Full sitemap</a>' +
    '</div></div>' +
    '<div id="pp-filters" class="search-filters" aria-label="Filter by section"></div>' +
    '<div id="pp-results" class="search-results" aria-live="polite" aria-atomic="true" role="region" aria-label="Search results">' +
    '<noscript><p class="notice">Live search needs JavaScript. Use the topic links above, the ' +
    '<a href="/directory.html">directory</a>, or the ' +
    '<a href="/sitemap.html">sitemap</a>.</p></noscript></div>' +
    '<p class="notice search-popular">Popular: ' +
    '<a href="/bring-pet-to-thailand/from-eu.html">Import from EU</a> &middot; ' +
    '<a href="/bring-pet-to-thailand/from-uae.html">Import from UAE</a> &middot; ' +
    '<a href="/bring-pet-to-thailand/from-india.html">Import from India</a> &middot; ' +
    '<a href="/bring-pet-to-thailand/from-china.html">Import from China</a> &middot; ' +
    '<a href="/bring-pet-to-thailand/checklist.html">Import checklist</a> &middot; ' +
    '<a href="/adopt-a-pet-pattaya/fostering.html">Fostering</a> &middot; ' +
    '<a href="/adopt-a-pet-pattaya/how-to-help.html">How to help</a> &middot; ' +
    '<a href="/adopt-a-pet-pattaya/animal-army-foundation.html">Animal Army</a> &middot; ' +
    '<a href="/adopt-a-pet-pattaya/soi-dog-foundation.html">Soi Dog</a> &middot; ' +
    '<a href="/cats/indoor-vs-outdoor-cats.html">Indoor cats</a> &middot; ' +
    '<a href="/pet-emergency/beach-and-sea-hazards.html">Beach hazards</a> &middot; ' +
    '<a href="/owning-a-pet-in-pattaya/where-to-walk-your-dog.html">Where to walk</a> &middot; ' +
    '<a href="/bring-pet-to-thailand/snub-nosed-breeds-flying.html">Snub-nosed flying</a> &middot; ' +
    '<a href="/take-pet-out-of-thailand/to-usa.html">Export to USA</a> &middot; ' +
    '<a href="/take-pet-out-of-thailand/to-australia.html">Export to Australia</a> &middot; ' +
    '<a href="/take-pet-out-of-thailand/">Export hub</a> &middot; ' +
    '<a href="/owning-a-pet-in-pattaya/hot-climate-pet-care.html">Hot climate</a> &middot; ' +
    '<a href="/dog-friendly-pattaya/beaches.html">Dog beaches</a> &middot; ' +
    '<a href="/pet-health-pattaya/spaying-and-neutering.html">Spay &amp; neuter</a> &middot; ' +
    '<a href="/take-pet-out-of-thailand/to-eu.html">Export to EU</a> &middot; ' +
    '<a href="/pet-emergency/24-hour-vets-pattaya.html">24-hour vet</a> &middot; ' +
    '<a href="/bring-pet-to-thailand/from-uk.html">Bring pet from UK</a> &middot; ' +
    '<a href="/take-pet-out-of-thailand/to-uk.html">Export to UK</a> &middot; ' +
    '<a href="/take-pet-out-of-thailand/export-process.html">Export process</a> &middot; ' +
    '<a href="/take-pet-out-of-thailand/to-uae.html">Export to UAE</a> &middot; ' +
    '<a href="/area/jomtien.html">Jomtien</a> &middot; ' +
    '<a href="/pet-health-pattaya/tick-borne-disease.html">Tick disease</a> &middot; ' +
    '<a href="/pet-health-pattaya/">Pet health</a> &middot; ' +
    '<a href="/adopt-a-pet-pattaya/">Adopt a pet</a> &middot; ' +
    '<a href="/pet-emergency/heatstroke.html">Heatstroke</a> &middot; ' +
    '<a href="/bring-pet-to-thailand/import-permit-thailand-dld.html">Import permit</a> &middot; ' +
    '<a href="/owning-a-pet-in-pattaya/dog-registration-thailand.html">Dog registration</a> &middot; ' +
    '<a href="/owning-a-pet-in-pattaya/lost-pet-pattaya.html">Lost pet</a> &middot; ' +
    '<a href="/pet-relocation/">Pet relocation</a> &middot; ' +
    '<a href="/boarding/">Boarding</a> &middot; ' +
    '<a href="/start-here.html">Start here</a> &middot; ' +
    '<a href="/owning-a-pet-in-pattaya/pet-friendly-housing.html">Pet-friendly housing</a> &middot; ' +
    '<a href="/pet-emergency/ticks-and-fleas.html">Ticks &amp; fleas</a> &middot; ' +
    '<a href="/bring-pet-to-thailand/rabies-vaccination-titer-test.html">Rabies titer</a> &middot; ' +
    '<a href="/bring-pet-to-thailand/microchip-requirements.html">Microchip</a> &middot; ' +
    '<a href="/owning-a-pet-in-pattaya/pet-sitters-and-dog-walkers.html">Pet sitters</a> &middot; ' +
    '<a href="/cats/cat-boarding-pattaya.html">Cat boarding</a> &middot; ' +
    '<a href="/groomers/">Groomers</a> &middot; ' +
    '<a href="/pet-insurance-thailand.html">Pet insurance</a> &middot; ' +
    '<a href="/mobile-vets/">Mobile vet</a> &middot; ' +
    '<a href="/pet-health-pattaya/parvovirus.html">Parvovirus</a> &middot; ' +
    '<a href="/pet-emergency/venomous-creatures.html">Venomous creatures</a> &middot; ' +
    '<a href="/pet-health-pattaya/dental-care.html">Dental care</a> &middot; ' +
    '<a href="/owning-a-pet-in-pattaya/rainy-season-pet-care.html">Rainy season</a> &middot; ' +
    '<a href="/pet-health-pattaya/healthy-weight.html">Healthy weight</a></p>' +
    "</div></section>"
}];
