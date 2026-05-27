"use strict";
/* PattayaPets allowlist build script.  src/ -> dist/
   Generates static HTML, minifies HTML/CSS/JS, copies allowlisted assets,
   regenerates the service-worker precache, validates every JSON-LD block,
   and writes sitemap.xml, llms.txt and search-index.json. */

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const CleanCSS = require("clean-css");
const { minify: minifyHtml } = require("html-minifier-terser");
const { minify: minifyJs } = require("terser");

const ROOT = __dirname;
const SRC = path.join(ROOT, "src");
const DIST = process.env.PP_DIST ? path.resolve(process.env.PP_DIST) : path.join(ROOT, "dist");

const ASSET_EXT = [".woff2", ".svg", ".png", ".webp", ".jpg", ".jpeg", ".ico", ".gif"];
const STATIC_FILES = [
  "_headers", "_redirects", "robots.txt", "manifest.webmanifest",
  ".well-known/security.txt"
];
const SECTION_LABELS = {
  "": "Site pages", vets: "Vets & animal hospitals", groomers: "Pet groomers",
  boarding: "Boarding & daycare", "pet-shops": "Pet shops", trainers: "Dog trainers",
  "pet-relocation": "Pet relocation", "mobile-vets": "Mobile vets", area: "Areas",
  "bring-pet-to-thailand": "Bringing a pet to Thailand",
  "take-pet-out-of-thailand": "Taking a pet out of Thailand",
  "dog-friendly-pattaya": "Dog-friendly Pattaya", "pet-emergency": "Pet emergency",
  "owning-a-pet-in-pattaya": "Owning a pet in Pattaya",
  "adopt-a-pet-pattaya": "Adoption & rescue", cats: "Cats", dogs: "Dogs",
  "pet-health-pattaya": "Pet health in Pattaya"
};

const HTML_MIN = {
  collapseWhitespace: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  minifyCSS: true,
  minifyJS: true,
  sortAttributes: true,
  sortClassName: true
};

function log(m) { process.stdout.write(m + "\n"); }

function rmrf(p) {
  if (!fs.existsSync(p)) return;
  try { fs.rmSync(p, { recursive: true, force: true }); }
  catch (e) { /* read-only mount: fall back to overwriting files in place */ }
}

function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }

function write(rel, content) {
  const out = path.join(DIST, rel);
  ensureDir(path.dirname(out));
  fs.writeFileSync(out, content);
}

function pathToFile(p) {
  if (p === "/" || p === "") return "index.html";
  if (p.endsWith("/")) return p.replace(/^\//, "") + "index.html";
  return p.replace(/^\//, "");
}

function kindOf(p) {
  return SECTION_LABELS[p.split("/")[1] || ""] || "Page";
}

function walk(dir, base, list) {
  base = base || dir;
  list = list || [];
  if (!fs.existsSync(dir)) return list;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walk(full, base, list);
    else list.push(path.relative(base, full));
  }
  return list;
}

function validateJsonLd(html, pagePath) {
  const re = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  let m, count = 0;
  while ((m = re.exec(html))) {
    try { JSON.parse(m[1]); count++; }
    catch (e) { throw new Error("Invalid JSON-LD on " + pagePath + ": " + e.message); }
  }
  return count;
}

function buildSitemapPage(pages) {
  const groups = {};
  pages.filter(function (p) { return !p.noindex; }).forEach(function (p) {
    const key = kindOf(p.path);
    (groups[key] = groups[key] || []).push(p);
  });
  let body =
    '<section class="section"><div class="container"><p class="eyebrow">Sitemap</p>' +
    "<h1>Every page on PattayaPets</h1>" +
    '<p class="lede">A complete index of the directory and guide library.</p>';
  Object.keys(groups).forEach(function (g) {
    body += "<h2>" + g.replace(/&/g, "&amp;") + "</h2><ul>";
    groups[g].forEach(function (p) {
      body += '<li><a href="' + p.path + '">' +
        (p.crumb || p.shortTitle || p.title) + "</a></li>";
    });
    body += "</ul>";
  });
  body += "</div></section>";
  return {
    path: "/sitemap.html",
    title: "Sitemap — PattayaPets",
    description: "A complete index of every page on PattayaPets — the Pattaya pet directory and guides.",
    crumb: "Sitemap",
    breadcrumbs: [],
    updated: new Date().toISOString().slice(0, 10),
    body: body
  };
}

var RECENT_SKIP = {
  "/": 1, "/sitemap.html": 1, "/search.html": 1, "/404.html": 1,
  "/offline.html": 1, "/masthead.html": 1
};

function fmtUpdated(iso) {
  var p = String(iso || "").split("-");
  if (p.length !== 3) return iso;
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct", "Nov", "Dec"];
  return parseInt(p[2], 10) + " " + months[parseInt(p[1], 10) - 1] + " " + p[0];
}

function pageLabel(p) {
  var t = p.crumb || p.shortTitle || p.title || "";
  return t.replace(/\s*\|\s*PattayaPets\s*$/, "").replace(/\s*—\s*PattayaPets\s*$/, "");
}

function truncateText(s, n) {
  s = String(s || "").replace(/\s+/g, " ").trim();
  if (s.length <= n) return s;
  var cut = s.slice(0, n - 1);
  var sp = cut.lastIndexOf(" ");
  if (sp > n * 0.6) cut = cut.slice(0, sp);
  return cut + "\u2026";
}

function buildRecentSection(pages) {
  var recent = pages.filter(function (p) {
    return !p.noindex && !RECENT_SKIP[p.path] && p.updated;
  }).sort(function (a, b) {
    return b.updated.localeCompare(a.updated);
  }).slice(0, 8);
  if (!recent.length) return "";
  var items = recent.map(function (p) {
    var desc = truncateText(p.description, 100).replace(/&/g, "&amp;").replace(/</g, "&lt;");
    return '<a class="recent-item" href="' + p.path + '">' +
      '<span class="recent-date">' + fmtUpdated(p.updated) + "</span>" +
      '<span class="recent-title">' + pageLabel(p).replace(/&/g, "&amp;") + "</span>" +
      (desc ? '<span class="recent-desc">' + desc + "</span>" : "") +
      '<span class="recent-kind">' + kindOf(p.path).replace(/&/g, "&amp;") + "</span></a>";
  }).join("");
  return '<section class="section"><div class="container">' +
    '<div class="section-head"><p class="eyebrow">Fresh content</p>' +
    "<h2>Recently updated</h2>" +
    "<p>Pages refreshed most recently across the directory and guides.</p></div>" +
    '<div class="recent-list">' + items + "</div>" +
    '<div class="btn-row"><a class="btn btn-ghost" href="/guides.html">All guides &rarr;</a> ' +
    '<a class="btn btn-ghost" href="/sitemap.html">Full sitemap &rarr;</a></div>' +
    "</div></section>";
}

function injectRecentUpdates(pages) {
  var home = pages.find(function (p) { return p.path === "/"; });
  if (!home || !home.body || home.body.indexOf("<!--__RECENT_UPDATES__-->") === -1) return;
  home.body = home.body.replace("<!--__RECENT_UPDATES__-->", buildRecentSection(pages));
}

async function build() {
  const t0 = Date.now();
  log("\nPattayaPets build");
  log("=================");
  rmrf(DIST);
  ensureDir(DIST);

  const criticalRaw = fs.readFileSync(path.join(SRC, "critical.css"), "utf8");
  const criticalMin = new CleanCSS({ level: 1 }).minify(criticalRaw).styles;

  const layout = require(path.join(SRC, "layout.js"));
  const pagesDir = path.join(SRC, "pages");
  let pages = [];
  if (fs.existsSync(pagesDir)) {
    for (const f of fs.readdirSync(pagesDir).sort()) {
      if (!f.endsWith(".js")) continue;
      const mod = require(path.join(pagesDir, f));
      const arr = Array.isArray(mod) ? mod : (mod.pages || []);
      arr.forEach(function (p) { pages.push(p); });
    }
  }
  if (!pages.length) throw new Error("No pages found in src/pages/");

  pages.push(buildSitemapPage(pages));

  const seen = {};
  pages.forEach(function (p) {
    if (seen[p.path]) throw new Error("Duplicate page path: " + p.path);
    seen[p.path] = true;
  });

  injectRecentUpdates(pages);

  let jsonldCount = 0;
  for (const page of pages) {
    const html = layout.renderPage(page, { criticalCss: criticalMin });
    jsonldCount += validateJsonLd(html, page.path);
    const min = await minifyHtml(html, HTML_MIN);
    write(pathToFile(page.path), min);
  }
  log("Pages:      " + pages.length + " rendered, " + jsonldCount + " JSON-LD blocks valid");

  const cssRaw = fs.readFileSync(path.join(SRC, "assets/css/site.css"), "utf8");
  const cssMin = new CleanCSS({ level: 2 }).minify(cssRaw).styles;
  write("assets/css/site.css", cssMin);

  const jsRaw = fs.readFileSync(path.join(SRC, "assets/js/site.js"), "utf8");
  const jsMin = (await minifyJs(jsRaw)).code;
  write("assets/js/site.js", jsMin);

  let assetCount = 0;
  for (const sub of ["fonts", "img"]) {
    const dir = path.join(SRC, "assets", sub);
    for (const rel of walk(dir)) {
      if (ASSET_EXT.indexOf(path.extname(rel).toLowerCase()) === -1) continue;
      const from = path.join(dir, rel);
      const to = path.join(DIST, "assets", sub, rel);
      ensureDir(path.dirname(to));
      fs.copyFileSync(from, to);
      assetCount++;
    }
  }
  log("Assets:     1 css, 1 js, " + assetCount + " static assets");

  for (const rel of STATIC_FILES) {
    const from = path.join(SRC, "static", rel);
    if (fs.existsSync(from)) {
      const to = path.join(DIST, rel);
      ensureDir(path.dirname(to));
      fs.copyFileSync(from, to);
    }
  }

  const indexable = pages.filter(function (p) { return !p.noindex; });
  const sitemap =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    indexable.map(function (p) {
      return "  <url><loc>" + layout.canonical(p.path) + "</loc>" +
        (p.updated ? "<lastmod>" + p.updated + "</lastmod>" : "") +
        "<changefreq>monthly</changefreq></url>";
    }).join("\n") +
    "\n</urlset>\n";
  write("sitemap.xml", sitemap);

  const llms =
    "# PattayaPets\n\n" +
    "> The honest pet resource for Pattaya, Thailand — an independent editorial " +
    "directory of pet businesses and a guide hub for pet owners. No paid placements, " +
    "no sponsored content, no affiliate links. Editorial and informational only; " +
    "not veterinary advice.\n\n## Key pages\n\n" +
    indexable.map(function (p) {
      return "- [" + (p.crumb || p.shortTitle || p.title) + "](" +
        layout.canonical(p.path) + "): " + (p.description || "");
    }).join("\n") + "\n";
  write("llms.txt", llms);

  const { BUSINESSES, AREAS, CATEGORIES } = require(path.join(SRC, "data/businesses.js"));
  const bizByPath = {};
  BUSINESSES.forEach(function (b) {
    bizByPath["/" + b.category + "/" + b.slug + ".html"] = b;
  });

  const GUIDE_KEYWORDS = {
    "/bring-pet-to-thailand/": "import pet thailand DLD permit microchip rabies titer health certificate",
    "/bring-pet-to-thailand/import-permit-thailand-dld.html": "R1/1 import permit quarantine station AQS",
    "/bring-pet-to-thailand/u-tapao-airport-pets.html": "U-Tapao UTP Suvarnabhumi BKK Pattaya airport pet",
    "/bring-pet-to-thailand/snub-nosed-breeds-flying.html": "brachycephalic flat faced pug bulldog persian airline cargo",
    "/take-pet-out-of-thailand/": "export pet Thailand DLD export permit leave destination",
    "/pet-emergency/heatstroke.html": "heat stroke overheating hot dog cat emergency",
    "/pet-emergency/choking.html": "choking airway blocked dog cat",
    "/pet-emergency/venomous-creatures.html": "toad centipede bee sting scorpion poison",
    "/pet-health-pattaya/dental-care.html": "teeth tartar gum dental dog cat",
    "/pet-health-pattaya/healthy-weight.html": "obesity overweight diet exercise",
    "/adopt-a-pet-pattaya/fostering.html": "foster rescue temporary home",
    "/adopt-a-pet-pattaya/how-to-help.html": "street dog cat donate volunteer rescue",
    "/dogs/": "dog owner puppy vaccination walk training",
    "/cats/": "cat owner indoor balcony vaccination",
    "/dog-friendly-pattaya/": "dog friendly beach cafe restaurant hotel condo walk",
    "/owning-a-pet-in-pattaya/songkran-and-your-pet.html": "songkran water festival pet noise escape",
    "/mobile-vets/": "home visit vet mobile house call",
    "/bring-pet-to-thailand/from-uk.html": "import pet UK DEFRA APHA titer tapeworm Thailand",
    "/take-pet-out-of-thailand/to-uk.html": "export pet UK APHA tapeworm Thailand",
    "/owning-a-pet-in-pattaya/getting-to-the-vet.html": "taxi transport vet no car Grab Bolt",
    "/pet-emergency/pet-first-aid.html": "first aid injured pet calm carrier",
    "/bring-pet-to-thailand/thailand-pet-quarantine.html": "quarantine AQS inspection arrival Thailand import",
    "/bring-pet-to-thailand/from-eu.html": "import pet EU pet passport Thailand",
    "/take-pet-out-of-thailand/to-australia.html": "export pet Australia DAFF quarantine",
    "/adopt-a-pet-pattaya/": "adopt rescue shelter dog cat Pattaya",
    "/pet-insurance-thailand.html": "pet insurance cover vet bill Thailand",
    "/start-here.html": "new pet owner Pattaya orientation emergency vet climate",
    "/take-pet-out-of-thailand/export-process.html": "export pet Thailand DLD health certificate permit airport",
    "/take-pet-out-of-thailand/export-permit-thailand-dld.html": "DLD export permit AQS form 1/1 Suvarnabhumi",
    "/take-pet-out-of-thailand/cost-to-export-a-pet-from-thailand.html": "export pet cost budget flight titer agent",
    "/pet-health-pattaya/parvovirus.html": "parvovirus puppy vaccination deadly virus",
    "/pet-health-pattaya/tick-borne-disease.html": "tick disease ehrlichia babesia anaplasmosis",
    "/owning-a-pet-in-pattaya/rainy-season-pet-care.html": "rainy season monsoon humidity skin ear flood",
    "/owning-a-pet-in-pattaya/microchipping-your-pet.html": "microchip ISO lost pet registration import export",
    "/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html": "import pet cost budget flight quarantine agent",
    "/bring-pet-to-thailand/health-certificate.html": "health certificate vet export import fit to fly",
    "/bring-pet-to-thailand/microchip-requirements.html": "ISO microchip 15 digit import export Thailand",
    "/pet-emergency/road-accident.html": "hit by car vehicle injured pet transport vet",
    "/pet-emergency/street-dog-encounters.html": "soi dog loose dog walk leash Pattaya",
    "/pet-emergency/snake-bites.html": "snake bite venom Thailand cobra viper emergency",
    "/owning-a-pet-in-pattaya/dog-registration-thailand.html": "dog registration rabies law Thailand license",
    "/cats/cat-boarding-pattaya.html": "cat boarding cattery sitter travel Pattaya",
    "/dogs/puppy-care-pattaya.html": "puppy vaccination socialise training heat Pattaya",
    "/area/jomtien.html": "Jomtien pet owner beach dog walk vet",
    "/area/naklua.html": "Naklua pet owner north Pattaya vet walk",
    "/area/central-pattaya.html": "Central Pattaya pet owner condo vet emergency",
    "/take-pet-out-of-thailand/to-usa.html": "export pet USA CDC dog import Thailand",
    "/bring-pet-to-thailand/from-usa.html": "import pet USA CDC Thailand",
    "/bring-pet-to-thailand/from-australia.html": "import pet Australia DAFF Thailand",
    "/bring-pet-to-thailand/from-japan.html": "import pet Japan MAFF Thailand",
    "/bring-pet-to-thailand/from-singapore.html": "import pet Singapore AVS Thailand",
    "/pet-emergency/poisoning.html": "poison toad bait chocolate xylitol toxic",
    "/pet-health-pattaya/heartworm.html": "heartworm mosquito prevention Thailand",
    "/pet-health-pattaya/skin-and-ear-problems.html": "skin ear infection yeast hot humid",
    "/owning-a-pet-in-pattaya/travelling-in-thailand.html": "domestic flight road trip pet hotel Thailand",
    "/owning-a-pet-in-pattaya/lost-pet-pattaya.html": "missing lost dog cat microchip Pattaya",
    "/owning-a-pet-in-pattaya/senior-pet-care.html": "older pet elderly dog cat heat climate",
    "/area/wongamat.html": "Wongamat pet owner condo beach north Pattaya",
    "/area/pratumnak.html": "Pratumnak pet owner hill walk vet",
    "/area/bang-saray.html": "Bang Saray pet owner quiet south coast",
    "/area/sattahip.html": "Sattahip pet owner naval south Pattaya",
    "/area/banglamung.html": "Banglamung East Pattaya pet owner house garden",
    "/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html": "Suvarnabhumi BKK airport AQS arrival quarantine",
    "/bring-pet-to-thailand/airline-pet-policies.html": "airline cabin cargo hold pet crate IATA",
    "/bring-pet-to-thailand/rabies-vaccination-titer-test.html": "rabies titer FAVN blood test waiting period",
    "/take-pet-out-of-thailand/to-eu.html": "export pet EU titer three month wait Thailand",
    "/take-pet-out-of-thailand/to-japan.html": "export pet Japan MAFF 180 day wait Thailand",
    "/take-pet-out-of-thailand/to-canada.html": "export pet Canada CFIA Thailand",
    "/take-pet-out-of-thailand/to-germany.html": "export pet Germany EU titer Thailand",
    "/dog-friendly-pattaya/beaches.html": "dog beach Jomtien walk sand leash",
    "/owning-a-pet-in-pattaya/fireworks-and-noise-anxiety.html": "fireworks thunder noise anxious pet escape",
    "/owning-a-pet-in-pattaya/pet-sitters-and-dog-walkers.html": "pet sitter dog walker house sit Pattaya",
    "/bring-pet-to-thailand/from-germany.html": "import pet Germany EU Thailand",
    "/bring-pet-to-thailand/from-france.html": "import pet France EU Thailand",
    "/bring-pet-to-thailand/from-netherlands.html": "import pet Netherlands EU Thailand",
    "/bring-pet-to-thailand/from-sweden.html": "import pet Sweden EU Thailand",
    "/bring-pet-to-thailand/from-norway.html": "import pet Norway EU Thailand",
    "/bring-pet-to-thailand/from-denmark.html": "import pet Denmark EU Thailand",
    "/bring-pet-to-thailand/from-finland.html": "import pet Finland EU Thailand",
    "/bring-pet-to-thailand/from-switzerland.html": "import pet Switzerland FSVO Thailand",
    "/bring-pet-to-thailand/from-ireland.html": "import pet Ireland EU Thailand",
    "/bring-pet-to-thailand/from-new-zealand.html": "import pet New Zealand MPI Thailand",
    "/take-pet-out-of-thailand/to-france.html": "export pet France EU titer Thailand",
    "/take-pet-out-of-thailand/to-netherlands.html": "export pet Netherlands EU titer Thailand",
    "/take-pet-out-of-thailand/to-sweden.html": "export pet Sweden EU titer Thailand",
    "/take-pet-out-of-thailand/to-norway.html": "export pet Norway EU titer Thailand",
    "/take-pet-out-of-thailand/to-denmark.html": "export pet Denmark EU titer Thailand",
    "/take-pet-out-of-thailand/to-finland.html": "export pet Finland EU titer Thailand",
    "/take-pet-out-of-thailand/to-switzerland.html": "export pet Switzerland FSVO Thailand",
    "/take-pet-out-of-thailand/to-ireland.html": "export pet Ireland EU titer Thailand",
    "/take-pet-out-of-thailand/to-new-zealand.html": "export pet New Zealand MPI quarantine Thailand",
    "/bring-pet-to-thailand/from-canada.html": "import pet Canada CFIA Thailand",
    "/take-pet-out-of-thailand/to-uae.html": "export pet UAE MOCCAE Thailand",
    "/take-pet-out-of-thailand/to-singapore.html": "export pet Singapore AVS Thailand",
    "/bring-pet-to-thailand/from-russia.html": "import pet Russia Thailand",
    "/cats/indoor-vs-outdoor-cats.html": "indoor cat balcony outdoor street dog Pattaya",
    "/cats/getting-a-cat-in-pattaya.html": "adopt kitten street cat Pattaya",
    "/dogs/common-dog-health-issues-tropics.html": "skin ear tick disease hot humid dog",
    "/dogs/choosing-a-dog-for-the-climate.html": "breed heat brachycephalic climate Pattaya",
    "/owning-a-pet-in-pattaya/saying-goodbye.html": "end of life euthanasia pet goodbye",
    "/pet-emergency/": "pet emergency heatstroke snake poison 24 hour vet Pattaya",
    "/pet-emergency/ticks-and-fleas.html": "ticks fleas parasite prevention year round",
    "/pet-emergency/24-hour-vets-pattaya.html": "24 hour emergency vet hospital open night",
    "/owning-a-pet-in-pattaya/": "owning pet Pattaya cost housing walk registration",
    "/owning-a-pet-in-pattaya/cost-of-owning-a-pet.html": "pet cost budget food vet grooming Pattaya",
    "/owning-a-pet-in-pattaya/pet-friendly-housing.html": "pet friendly condo rent housing Pattaya",
    "/dogs/dog-vaccinations-thailand.html": "dog vaccination rabies heartworm parasite Thailand",
    "/cats/cat-vaccinations-thailand.html": "cat vaccination rabies FIV FeLV Thailand",
    "/dog-friendly-pattaya/condos.html": "dog friendly condo rent pet policy Pattaya",
    "/dog-friendly-pattaya/hotels.html": "dog friendly hotel stay Pattaya pet policy",
    "/guides.html": "pet guides Pattaya import export emergency owning",
    "/directory.html": "pet directory vets groomers boarding Pattaya",
    "/pet-health-pattaya/": "heartworm tick parvovirus skin ear dental spay neuter tropical health",
    "/vets/": "vet clinic animal hospital emergency 24 hour Pattaya",
    "/groomers/": "dog cat grooming bath clip nail de-shed Pattaya",
    "/boarding/": "pet hotel kennel cattery daycare travel Pattaya",
    "/pet-shops/": "pet food supplies litter toys Pattaya shop",
    "/trainers/": "dog training obedience behaviour Pattaya",
    "/take-pet-out-of-thailand/to-russia.html": "export pet Russia Thailand veterinary certificate",
    "/pet-emergency/beach-and-sea-hazards.html": "beach jellyfish hot sand seawater pufferfish dog",
    "/dog-friendly-pattaya/cafes.html": "dog friendly cafe coffee Pattaya pet policy",
    "/dog-friendly-pattaya/restaurants.html": "dog friendly restaurant dining Pattaya",
    "/dog-friendly-pattaya/parks.html": "dog park green space walk Pattaya",
    "/owning-a-pet-in-pattaya/where-to-buy-pet-food.html": "pet food litter supermarket online delivery Pattaya",
    "/owning-a-pet-in-pattaya/hot-climate-pet-care.html": "hot climate heat stroke walk timing Pattaya",
    "/owning-a-pet-in-pattaya/where-to-walk-your-dog.html": "where walk dog Pattaya cool hours beach soi dog leash routine",
    "/pet-health-pattaya/spaying-and-neutering.html": "neuter spay sterilisation street animals Pattaya",
    "/pet-relocation/": "pet relocation import export agent DLD permit nationwide Thailand",
    "/adopt-a-pet-pattaya/hope-for-strays.html": "Hope for Strays dog rescue East Pattaya adopt",
    "/adopt-a-pet-pattaya/dog-cat-rescue-pattaya.html": "Dog Cat Rescue Pattaya shelter adopt",
    "/adopt-a-pet-pattaya/animal-army-foundation.html": "Animal Army Foundation Na Jomtien rescue adopt",
    "/adopt-a-pet-pattaya/pattaya-street-dogs-k9aid.html": "Pattaya Street Dogs K9aid rescue adopt",
    "/adopt-a-pet-pattaya/soi-dog-foundation.html": "Soi Dog Foundation Thailand rescue adopt",
    "/adopt-a-pet-pattaya/malees-animal-shelter.html": "Malee Animal Shelter Pattaya Chanthaburi adopt",
    "/adopt-a-pet-pattaya/ady-g-second-chance-pattaya.html": "Ady G Second Chance disabled dog sanctuary Pattaya",
    "/about.html": "about PattayaPets editorial directory independent TIMPAEMI",
    "/standards.html": "editorial standards anonymous visit verdict method",
    "/contact.html": "contact PattayaPets email corrections editorial hello",
    "/corrections.html": "correction mistake report update factual error",
    "/privacy.html": "privacy policy data analytics PattayaPets",
    "/accessibility.html": "accessibility WCAG PattayaPets website",
    "/masthead.html": "editorial standards about network Pattaya Authority",
    "/": "PattayaPets pet resource directory guides Pattaya Thailand honest"
  };

  const searchIndex = indexable.map(function (p) {
    var d = p.description || "";
    var b = bizByPath[p.path];
    if (b) {
      if (b.address) d += " " + b.address;
      if (b.c24 && b.phone) d += " " + b.phone;
      if (b.type) d += " " + b.type;
      if (b.languages) d += " " + b.languages;
      if (CATEGORIES[b.category]) d += " " + CATEGORIES[b.category].name;
      if (b.summary) d += " " + b.summary;
      if (b.services && b.services.length) d += " " + b.services.join(" ");
      if (b.category === "pet-relocation") {
        d += " nationwide Thailand pet import export relocation";
      }
      if (b.email) d += " " + b.email;
      if (b.line) d += " LINE " + b.line;
      else {
        var em = (b.summary || "").match(/[\w.+-]+@[\w.-]+\.\w+/);
        if (em) d += " " + em[0];
      }
      b.areas.forEach(function (ak) {
        if (AREAS[ak]) d += " " + AREAS[ak].name;
      });
      d += " " + b.slug.replace(/-/g, " ");
      if (b.c24) d += " 24 hour emergency open night";
      var catKw = {
        vets: " veterinarian clinic animal hospital Pattaya",
        groomers: " dog cat grooming bath nail trim Pattaya",
        boarding: " pet hotel kennel cattery daycare travel Pattaya",
        "pet-shops": " pet food litter supplies toys shop Pattaya",
        trainers: " dog training obedience behaviour puppy Pattaya",
        "pet-relocation": " import export relocation agent DLD permit Thailand",
        "mobile-vets": " home visit mobile vet house call Pattaya"
      };
      if (catKw[b.category]) d += catKw[b.category];
    }
    var gk = GUIDE_KEYWORDS[p.path];
    if (gk) d += " " + gk;
    return {
      t: p.crumb || p.shortTitle || p.title,
      u: p.path,
      k: kindOf(p.path),
      d: d.replace(/\s+/g, " ").trim()
    };
  });
  write("search-index.json", JSON.stringify(searchIndex));
  log("Search:     " + searchIndex.length + " pages indexed");

  const version = crypto.createHash("sha1")
    .update(cssMin + jsMin + criticalMin).digest("hex").slice(0, 12);
  const precache = [
    "/", "/offline.html", "/search-index.json", "/assets/css/site.css", "/assets/js/site.js",
    "/assets/img/favicon.svg", "/manifest.webmanifest",
    "/assets/fonts/hanken-400.woff2", "/assets/fonts/hanken-500.woff2",
    "/assets/fonts/hanken-700.woff2", "/assets/fonts/bricolage-600.woff2",
    "/assets/fonts/bricolage-700.woff2"
  ];
  let swRaw = fs.readFileSync(path.join(SRC, "sw.js"), "utf8");
  swRaw = swRaw.replace("__VERSION__", version)
               .replace("__PRECACHE__", JSON.stringify(precache));
  const swMin = (await minifyJs(swRaw)).code;
  write("sw.js", swMin);

  let total = 0;
  walk(DIST).forEach(function (f) { total += fs.statSync(path.join(DIST, f)).size; });
  log("Sitemap:    " + indexable.length + " indexable URLs");
  log("Service worker: " + precache.length + " precached, version " + version);
  log("Output:     " + DIST + "  (" + (total / 1024).toFixed(0) + " KB)");
  log("Done in " + (Date.now() - t0) + " ms\n");
}

build().catch(function (e) {
  log("\nBUILD FAILED: " + e.message + "\n");
  process.exit(1);
});
