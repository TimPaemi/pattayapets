"use strict";
/* Shared rendering kit for guide pages. Produces Article + FAQPage schema. */

const SITE = "https://pattayapets.com";
const DEFAULT_UPDATED = "2026-05-28";
const DEFAULT_UPDATED_LABEL = "28 May 2026";

const DISC =
  '<div class="disclaimer-box"><strong>Editorial and informational only.</strong> ' +
  "PattayaPets is not a veterinary practice and does not give veterinary advice. " +
  "Pet import and export rules change without notice &mdash; always confirm the " +
  "current requirements with the official source before you act. Always consult a " +
  "qualified veterinarian about your pet&rsquo;s health.</div>";

function stripTags(s) {
  return String(s).replace(/<[^>]+>/g, "")
    .replace(/&mdash;/g, "—").replace(/&ndash;/g, "–")
    .replace(/&rsquo;/g, "’").replace(/&lsquo;/g, "‘")
    .replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").trim();
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
  var updated = o.updated || DEFAULT_UPDATED;
  return {
    "@type": "Article",
    headline: stripTags(o.h1),
    description: o.desc,
    datePublished: o.published || DEFAULT_UPDATED,
    dateModified: updated,
    author: { "@type": "Organization", name: "PattayaPets", url: SITE + "/" },
    publisher: { "@id": SITE + "/#org" },
    mainEntityOfPage: url,
    inLanguage: "en"
  };
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
    "@type": "CollectionPage",
    name: stripTags(o.h1),
    description: o.desc,
    url: SITE + o.path,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items
    }
  };
}

/* o: { path, title, ogTitle, desc, crumb, breadcrumbs, eyebrow, h1, lede,
        updatedLabel, updated, verify, sections:[{h,html}], faqs:[[q,a]],
        related:[{name,path,desc}] } */
function article(o) {
  const url = SITE + o.path;
  let prose =
    '<p class="eyebrow">' + o.eyebrow + "</p><h1>" + o.h1 + "</h1>" +
    '<p class="lede">' + o.lede + "</p>" +
    '<p class="updated">Last updated ' + (o.updatedLabel || DEFAULT_UPDATED_LABEL) + "</p>";
  if (o.verify) {
    prose += '<div class="callout callout-tip"><div class="ch">Rules change — verify before you act</div>' +
      "<p>" + o.verify + "</p></div>";
  }
  (o.sections || []).forEach(function (s) {
    prose += (s.h ? "<h2>" + s.h + "</h2>" : "") + s.html;
  });
  let schema = [articleSchema(o, url)];
  if (o.faqs && o.faqs.length) {
    prose += "<h2>Frequently asked</h2>" + faqBlock(o.faqs);
    schema.push(faqSchema(o.faqs));
  }
  prose += DISC;

  let body = '<section class="section"><div class="container">' +
    '<div class="prose">' + prose + "</div>";
  if (o.related && o.related.length) {
    body += '<div class="related"><h2>Keep reading</h2><div class="grid grid-3">' +
      o.related.map(function (r) {
        return '<a class="card" href="' + r.path + '"><h3>' + r.name + "</h3>" +
          "<p>" + (r.desc || "") + '</p><span class="card-meta">Read &rarr;</span></a>';
      }).join("") + "</div></div>";
  }
  body += "</div></section>";

  return {
    path: o.path,
    title: o.title,
    ogTitle: o.ogTitle || stripTags(o.h1),
    description: o.desc,
    crumb: o.crumb || stripTags(o.h1),
    breadcrumbs: o.breadcrumbs || [],
    updated: o.updated || DEFAULT_UPDATED,
    schema: schema,
    image: o.image,
    body: body
  };
}

/* a cluster hub: intro + a grid of cards linking the cluster's pages */
function hub(o) {
  let body =
    '<section class="section"><div class="container">' +
    '<p class="eyebrow">' + o.eyebrow + "</p>" +
    "<h1>" + o.h1 + "</h1>" +
    '<p class="lede">' + o.lede + "</p>" +
    '<p class="updated">Last updated ' + (o.updatedLabel || DEFAULT_UPDATED_LABEL) + "</p>";
  if (o.intro) body += '<div class="prose" style="margin-top:1.2rem">' + o.intro + "</div>";
  body += "</div></section>";

  (o.groups || []).forEach(function (g, i) {
    body += '<section class="section' + (i % 2 === 0 ? " section-tint" : "") +
      '"><div class="container">' +
      '<div class="section-head"><h2>' + g.title + "</h2>" +
      (g.note ? "<p>" + g.note + "</p>" : "") + "</div>" +
      '<div class="grid grid-3">' +
      g.cards.map(function (c) {
        return '<a class="card" href="' + c.path + '">' +
          (c.tag ? '<span class="card-tag">' + c.tag + "</span>" : "") +
          "<h3>" + c.name + "</h3><p>" + c.desc + "</p>" +
          '<span class="card-meta">' + (c.cta || "Read") + " &rarr;</span></a>";
      }).join("") +
      "</div></div></section>";
  });

  if (o.related && o.related.length) {
    body += '<section class="section"><div class="container">' +
      '<div class="related"><h2>Keep reading</h2><div class="grid grid-3">' +
      o.related.map(function (r) {
        return '<a class="card" href="' + r.path + '"><h3>' + r.name + "</h3>" +
          "<p>" + (r.desc || "") + '</p><span class="card-meta">Read &rarr;</span></a>';
      }).join("") + "</div></div></div></section>";
  }

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
    updated: o.updated || DEFAULT_UPDATED,
    schema: schema,
    image: o.image,
    body: body
  };
}

module.exports = { article, hub, SITE };
