"use strict";
/* Shared rendering kit for guide pages. Article/authorship output is ledger-gated. */

const {
  linkTopicFromPath,
  sidebarLinkAside,
  mergeSidebars,
  inPageLinkSection,
  seeAlsoCallout,
  hubQuickBar
} = require("./linking.js");

const { SITE: SITE_CONFIG } = require("./site-config.js");
const { htmlToText } = require("./html-text.js");
const { imageForRoute } = require("./route-image.js");
const { peopleForRole, personRef } = require("./responsibility.js");
const SITE = SITE_CONFIG.url;
const DISC =
  '<div class="disclaimer-box"><strong>Editorial and informational only.</strong> ' +
  "PattayaPets is not a veterinary practice and does not give veterinary advice. " +
  "Pet import and export rules change without notice &mdash; always confirm the " +
  "current requirements with the official source before you act. Always consult a " +
  "qualified veterinarian about your pet&rsquo;s health.</div>";

function stripTags(s) {
  return htmlToText(s);
}

function fmtDate(iso) {
  var parts = String(iso || "").split("-");
  var months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  if (parts.length !== 3 || !months[Number(parts[1]) - 1]) return String(iso || "");
  return Number(parts[2]) + " " + months[Number(parts[1]) - 1] + " " + parts[0];
}

function articleMeta(updated, path) {
  var authors = peopleForRole(path, "author");
  var responsibility = authors.length
    ? '<p class="byline">By ' + authors.map(function (person) {
        return '<a rel="author" href="' + person.url + '">' + person.name + "</a>";
      }).join(" and ") + '</p>'
    : '<p class="evidence-line">Source-led editorial guide</p>';
  return '<div class="article-meta">' + responsibility +
    '<p class="updated">Last reviewed <time datetime="' + updated + '">' +
    fmtDate(updated) + "</time></p></div>";
}

function requireReviewedDate(o) {
  var value = o && o.updated;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(value || ""))) {
    throw new Error("Missing or invalid reviewed date for " + ((o && o.path) || "unknown page"));
  }
  return value;
}

function slugifyHeading(s) {
  return stripTags(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "section";
}

function tocSidebar(toc, hasFaqs) {
  if (!toc || toc.length < 3) return "";
  var quick = hasFaqs
    ? '<p class="toc-quick"><a href="#faq">Jump to FAQ &darr;</a></p>'
    : "";
  return '<aside class="sidebar"><details class="toc-panel card">' +
    '<summary class="toc-panel__title">On this page</summary>' +
    '<div class="toc-panel__body">' + quick +
    '<nav aria-label="On this page"><ul class="toc">' +
    toc.map(function (t) {
      return '<li><a href="#' + t.id + '">' + t.label + "</a></li>";
    }).join("") +
    "</ul></nav></div></details></aside>";
}

function faqBlock(faqs) {
  return faqs.map(function (f) {
    return '<details class="faq"><summary>' + f[0] + "</summary>" +
      '<div class="faq-body">' + f[1] + "</div></details>";
  }).join("");
}

function faqSchema(faqs) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map(function (f) {
      return {
        "@type": "Question",
        name: stripTags(f[0]),
        acceptedAnswer: { "@type": "Answer", text: stripTags(f[1]) }
      };
    })
  };
}

function articleSchema(o, url) {
  var updated = requireReviewedDate(o);
  var authors = peopleForRole(o.path, "author");
  if (!authors.length) return null;
  var node = {
    "@type": "Article",
    "@id": url + "#article",
    headline: stripTags(o.h1),
    description: o.desc,
    dateModified: updated,
    image: [SITE + imageForRoute(o.path, o.image)],
    author: authors.map(personRef),
    publisher: {
      "@type": "Organization",
      "@id": SITE_CONFIG.publisherId,
      name: SITE_CONFIG.publisherName,
      url: SITE_CONFIG.publisherUrl
    },
    mainEntityOfPage: { "@id": url + "#webpage" },
    inLanguage: "en"
  };
  if (o.published) node.datePublished = o.published;
  return node;
}

function hubCollectionSchema(o) {
  var items = [];
  (o.groups || []).forEach(function (g) {
    (g.cards || []).forEach(function (c) {
      items.push({
        "@type": "ListItem",
        position: items.length + 1,
        url: SITE + c.path,
        name: stripTags(c.name)
      });
    });
  });
  if (!items.length) return null;
  return {
    "@type": "ItemList",
    "@id": SITE + o.path + "#items",
    name: stripTags(o.h1),
    description: o.desc,
    itemListElement: items
  };
}

/* o: { path, title, ogTitle, desc, crumb, breadcrumbs, eyebrow, h1, lede,
        updated, verify, sections:[{h,html}], faqs:[[q,a]],
        related:[{name,path,desc}] } */
function article(o) {
  var reviewedDate = requireReviewedDate(o);
  const url = SITE + o.path;
  var sections = o.sections || [];
  var toc = [];
  var usedIds = {};
  var headingIds = [];
  sections.forEach(function (s) {
    if (!s.h) {
      headingIds.push(null);
      return;
    }
    var id = slugifyHeading(s.h);
    while (usedIds[id]) id = id + "-2";
    usedIds[id] = true;
    headingIds.push(id);
    toc.push({ id: id, label: stripTags(s.h) });
  });
  var hasFaqs = o.faqs && o.faqs.length;
  if (hasFaqs) toc.push({ id: "faq", label: "Frequently asked" });

  var isChecklist = /\/checklist\.html$/.test(o.path);
  var isEmergencyGuide = o.path.indexOf("/pet-emergency/") === 0 && o.path !== "/pet-emergency/";
  let prose =
    '<p class="eyebrow">' + o.eyebrow + "</p><h1>" + o.h1 + "</h1>" +
    '<p class="lede">' + o.lede + "</p>" +
    articleMeta(reviewedDate, o.path);
  if (isEmergencyGuide) {
    prose += '<div class="emergency-quick-bar emergency-quick-bar--sticky btn-row" role="navigation" aria-label="Emergency shortcuts">' +
      '<a class="btn btn-alert" href="/pet-emergency/24-hour-vets-pattaya.html">24-hour vets in Pattaya</a>' +
      '<a class="btn btn-ghost" href="/vets/?filter=24h">24-hour directory</a>' +
      '<a class="btn btn-ghost" href="/guides.html?topic=emergency">Emergency guides</a></div>';
  }
  if (isChecklist) {
    prose += '<div class="guide-actions btn-row">' +
      '<button type="button" class="btn btn-ghost print-page-btn">' +
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 9V2h12v7"/>' +
      '<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>' +
      '<path d="M6 14h12v8H6z"/></svg>Print checklist</button></div>';
  }
  if (o.verify) {
    prose += '<div class="callout callout-tip"><div class="ch">Rules change — verify before you act</div>' +
      "<p>" + o.verify + "</p></div>";
  }
  sections.forEach(function (s, i) {
    if (s.h) prose += '<h2 id="' + headingIds[i] + '">' + s.h + "</h2>";
    prose += s.html;
  });
  var routeArticleSchema = articleSchema(o, url);
  let schema = routeArticleSchema ? [routeArticleSchema] : [];
  if (hasFaqs) {
    prose += '<h2 id="faq">Frequently asked</h2>' + faqBlock(o.faqs);
    schema.push(faqSchema(o.faqs));
  }
  var linkTopic = o.linkTopic || linkTopicFromPath(o.path);
  prose += seeAlsoCallout(linkTopic, o.path);
  prose += DISC;

  var useToc = toc.length >= 3;
  var tocAside = useToc ? tocSidebar(toc, hasFaqs) : "";
  var linkAside = sidebarLinkAside(linkTopic);
  var sidebar = mergeSidebars(tocAside, linkAside);
  var mainCol = '<div class="prose">' + prose + "</div>";
  var grid = sidebar
    ? '<div class="page-grid">' + sidebar + mainCol + "</div>"
    : mainCol;

  let body = '<section class="section"><div class="container">' + grid;
  if (o.related && o.related.length) {
    body += '<details class="corridor-panel related-panel related">' +
      '<summary class="corridor-panel__title">Keep reading</summary>' +
      '<div class="corridor-panel__body"><div class="grid grid-3">' +
      o.related.map(function (r) {
        return '<a class="card" href="' + r.path + '"><h3>' + r.name + "</h3>" +
          "<p>" + (r.desc || "") + '</p><span class="card-meta">Read &rarr;</span></a>';
      }).join("") + "</div></div></details>";
  }
  body += "</div></section>";

  var bodyClass = o.bodyClass || "";
  if (bodyClass.indexOf("guide-page") === -1) {
    bodyClass = (bodyClass ? bodyClass + " " : "") + "guide-page";
  }
  if (sidebar && bodyClass.indexOf("has-guide-toc") === -1) {
    bodyClass = (bodyClass ? bodyClass + " " : "") + "has-guide-toc";
  }
  if (/\/checklist\.html$/.test(o.path)) {
    bodyClass = (bodyClass ? bodyClass + " " : "") + "print-guide";
  }
  if (/\/24-hour-vets-pattaya\.html$/.test(o.path)) {
    bodyClass = (bodyClass ? bodyClass + " " : "") + "print-emergency";
  }

  return {
    path: o.path,
    title: o.title,
    ogTitle: o.ogTitle || stripTags(o.h1),
    description: o.desc,
    crumb: o.crumb || stripTags(o.h1),
    breadcrumbs: o.breadcrumbs || [],
    updated: reviewedDate,
    published: o.published || undefined,
    schema: schema,
    image: o.image,
    ogType: routeArticleSchema ? "article" : "website",
    noindex: !!o.noindex,
    bodyClass: bodyClass || undefined,
    body: body
  };
}

function hubGuidesTopic(path) {
  if (path === "/bring-pet-to-thailand/") return "import";
  if (path === "/take-pet-out-of-thailand/") return "export";
  if (path === "/pet-emergency/") return "emergency";
  if (path === "/owning-a-pet-in-pattaya/") return "owning";
  if (path === "/pet-health-pattaya/") return "health";
  if (path === "/adopt-a-pet-pattaya/") return "adoption";
  if (path === "/dog-friendly-pattaya/") return "lifestyle";
  if (path === "/dogs/" || path === "/cats/") return "species";
  if (path.indexOf("/pet-insurance") === 0) return "insurance";
  return "";
}

var HUB_SHORTCUT_BARS = {
  "/pet-emergency/": {
    barClass: "emergency-quick-bar",
    label: "Emergency shortcuts",
    links: [
      ["btn btn-alert", "/pet-emergency/24-hour-vets-pattaya.html", "24-hour vets in Pattaya"],
      ["btn btn-ghost", "/vets/?filter=24h", "24-hour directory"],
      ["btn btn-ghost", "/guides.html?topic=emergency", "Emergency guides"]
    ]
  },
  "/bring-pet-to-thailand/": {
    label: "Import shortcuts",
    links: [
      ["btn btn-primary", "/bring-pet-to-thailand/checklist.html", "Import checklist"],
      ["btn btn-ghost", "/bring-pet-to-thailand/import-permit-thailand-dld.html", "DLD permit"],
      ["btn btn-ghost", "/guides.html?topic=import", "Import guides"],
      ["btn btn-ghost", "/pet-relocation/", "Relocation agents"]
    ]
  },
  "/take-pet-out-of-thailand/": {
    label: "Export shortcuts",
    links: [
      ["btn btn-primary", "/take-pet-out-of-thailand/checklist.html", "Export checklist"],
      ["btn btn-ghost", "/take-pet-out-of-thailand/export-process.html", "Export process"],
      ["btn btn-ghost", "/guides.html?topic=export", "Export guides"],
      ["btn btn-ghost", "/pet-relocation/", "Relocation agents"]
    ]
  },
  "/owning-a-pet-in-pattaya/": {
    label: "Owning shortcuts",
    links: [
      ["btn btn-primary", "/owning-a-pet-in-pattaya/hot-climate-pet-care.html", "Hot-climate care"],
      ["btn btn-ghost", "/owning-a-pet-in-pattaya/cost-of-owning-a-pet.html", "What it costs"],
      ["btn btn-ghost", "/vets/", "Find a vet"],
      ["btn btn-ghost", "/guides.html?topic=owning", "Owning guides"]
    ]
  },
  "/adopt-a-pet-pattaya/": {
    label: "Adoption shortcuts",
    links: [
      ["btn btn-primary", "/adopt-a-pet-pattaya/hope-for-strays.html", "Hope for Strays"],
      ["btn btn-ghost", "/adopt-a-pet-pattaya/how-to-help.html", "How to help"],
      ["btn btn-ghost", "/guides.html?topic=adoption", "Adoption guides"],
      ["btn btn-ghost", "/vets/", "Find a vet"]
    ]
  },
  "/pet-health-pattaya/": {
    label: "Health shortcuts",
    links: [
      ["btn btn-primary", "/pet-health-pattaya/heartworm.html", "Heartworm"],
      ["btn btn-ghost", "/pet-emergency/ticks-and-fleas.html", "Ticks &amp; fleas"],
      ["btn btn-ghost", "/pet-emergency/24-hour-vets-pattaya.html", "24-hour vets"],
      ["btn btn-ghost", "/guides.html?topic=health", "Health guides"]
    ]
  },
  "/dog-friendly-pattaya/": {
    label: "Dog-friendly shortcuts",
    links: [
      ["btn btn-primary", "/dog-friendly-pattaya/beaches.html", "Dog-friendly beaches"],
      ["btn btn-ghost", "/dog-friendly-pattaya/restaurants.html", "Restaurants"],
      ["btn btn-ghost", "/owning-a-pet-in-pattaya/where-to-walk-your-dog.html", "Where to walk"],
      ["btn btn-ghost", "/guides.html?topic=lifestyle", "Out &amp; about guides"]
    ]
  },
  "/dogs/": {
    label: "Dog owner shortcuts",
    links: [
      ["btn btn-primary", "/dogs/puppy-care-pattaya.html", "Puppy care"],
      ["btn btn-ghost", "/owning-a-pet-in-pattaya/where-to-walk-your-dog.html", "Where to walk"],
      ["btn btn-ghost", "/vets/", "Vets directory"],
      ["btn btn-ghost", "/guides.html?topic=species", "Dogs &amp; cats guides"]
    ]
  },
  "/cats/": {
    label: "Cat owner shortcuts",
    links: [
      ["btn btn-primary", "/cats/indoor-vs-outdoor-cats.html", "Indoor or outdoor?"],
      ["btn btn-ghost", "/cats/cat-vaccinations-thailand.html", "Vaccinations"],
      ["btn btn-ghost", "/adopt-a-pet-pattaya/", "Adopt a cat"],
      ["btn btn-ghost", "/guides.html?topic=species", "Dogs &amp; cats guides"]
    ]
  }
};

function hubShortcutBar(path) {
  var cfg = HUB_SHORTCUT_BARS[path];
  if (!cfg) return "";
  var barClass = cfg.barClass || "corridor-quick-bar";
  var links = cfg.links.map(function (l) {
    return '<a class="' + l[0] + '" href="' + l[1] + '">' + l[2] + "</a>";
  }).join("");
  return '<div class="' + barClass + ' ' + barClass + '--sticky btn-row" role="navigation" aria-label="' +
    cfg.label + '">' + links + "</div>";
}

/* a cluster hub: intro + a grid of cards linking the cluster's pages */
function hub(o) {
  var reviewedDate = requireReviewedDate(o);
  let body =
    '<section class="section"><div class="container">' +
    '<p class="eyebrow">' + o.eyebrow + "</p>" +
    "<h1>" + o.h1 + "</h1>" +
    '<p class="lede">' + o.lede + "</p>" +
    articleMeta(reviewedDate, o.path);
  if (o.intro) body += '<div class="prose guide-intro">' + o.intro + "</div>";
  body += hubShortcutBar(o.path);
  var guidesTopic = o.guidesTopic || hubGuidesTopic(o.path);
  if (guidesTopic) body += hubQuickBar(guidesTopic);
  if (guidesTopic) {
    body += '<div class="btn-row guide-actions">' +
      '<a class="btn btn-ghost" href="/guides.html?topic=' + guidesTopic + '">' +
      "Browse matching guides on the library page &rarr;</a></div>";
  }
  body += "</div></section>";

  (o.groups || []).forEach(function (g, i) {
    var cardsHtml = g.cards.map(function (c) {
      return '<a class="card" href="' + c.path + '">' +
        (c.tag ? '<span class="card-tag">' + c.tag + "</span>" : "") +
        "<h3>" + c.name + "</h3><p>" + c.desc + "</p>" +
        '<span class="card-meta">' + (c.cta || "Read") + " &rarr;</span></a>";
    }).join("");
    var grid = '<div class="grid grid-3">' + cardsHtml + "</div>";
    var sectionCls = "section" + (i % 2 === 0 ? " section-tint" : "");
    if (g.cards.length > 3) {
      /* <summary> is not a heading, so without this the card <h3>s would follow the
         page <h1> directly (WCAG 2.2 / 1.3.1 meaningful structure). */
      body += '<section class="' + sectionCls + '"><div class="container">' +
        '<h2 class="visually-hidden">' + g.title + "</h2>" +
        '<details class="corridor-panel hub-group-panel">' +
        '<summary class="corridor-panel__title">' + g.title +
        " (" + g.cards.length + ")</summary>" +
        '<div class="corridor-panel__body">' +
        (g.note ? '<p class="hub-group-note">' + g.note + "</p>" : "") +
        grid + "</div></details></div></section>";
    } else {
      body += '<section class="' + sectionCls + '"><div class="container">' +
        '<div class="section-head"><h2>' + g.title + "</h2>" +
        (g.note ? "<p>" + g.note + "</p>" : "") + "</div>" + grid +
        "</div></section>";
    }
  });

  if (o.related && o.related.length) {
    body += '<section class="section"><div class="container">' +
      '<details class="corridor-panel related-panel related">' +
      '<summary class="corridor-panel__title">Keep reading</summary>' +
      '<div class="corridor-panel__body"><div class="grid grid-3">' +
      o.related.map(function (r) {
        return '<a class="card" href="' + r.path + '"><h3>' + r.name + "</h3>" +
          "<p>" + (r.desc || "") + '</p><span class="card-meta">Read &rarr;</span></a>';
      }).join("") + "</div></div></details></div></section>";
  }

  var hubTopic = o.guidesTopic || hubGuidesTopic(o.path);
  if (hubTopic) body += inPageLinkSection(hubTopic);

  body += '<section class="section"><div class="container">' +
    '<div class="disclaimer-box"><strong>Editorial and informational only.</strong> ' +
    "PattayaPets is not a veterinary practice and does not give veterinary advice. " +
    "Import and export rules change &mdash; always verify with the official source. " +
    "Always consult a qualified veterinarian.</div></div></section>";

  var schema = o.schema ? o.schema.slice() : [];
  var coll = hubCollectionSchema(o);
  if (coll) schema.push(coll);

  return {
    path: o.path,
    title: o.title,
    ogTitle: o.ogTitle || o.h1,
    description: o.desc,
    crumb: o.crumb || o.h1,
    breadcrumbs: o.breadcrumbs || [],
    updated: reviewedDate,
    published: o.published || undefined,
    schema: schema,
    image: o.image,
    body: body
  };
}

module.exports = { article, hub, SITE };
