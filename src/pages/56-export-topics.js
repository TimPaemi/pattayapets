"use strict";
/* Extra topic guides for the "Taking a pet out of Thailand" cluster. */

const { article } = require("../guidekit.js");
const { claimLink } = require("../data/regulated-claims.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const CLUSTER = { name: "Taking a pet out of Thailand", path: "/take-pet-out-of-thailand/" };
const SUB = [GUIDES, CLUSTER];

const VERIFY =
  "This guide was last reviewed on 1 August 2026 against DLD export procedures and " +
  "published destination-country import rules. Export rules &mdash; Thai DLD " +
  "procedures, destination-country requirements and airline policies &mdash; change " +
  "without notice. Use this as orientation, then confirm every current requirement " +
  "with the DLD and the destination country's authority before booking.";

const OFFICIAL =
  "<p><strong>Official sources to verify against:</strong> " +
  claimLink("TH-EXPORT-SEQUENCE-2025-10", "DLD Region 9 export procedure") + ".</p>";

const pages = [];

pages.push(article({
  path: "/take-pet-out-of-thailand/checklist.html",
  title: "Export a Pet from Thailand: Checklist | PattayaPets",
  desc: "Printable pet export checklist from Thailand: rabies titer timing, DLD export " +
    "permit, health certificate, destination import rules and airline booking.",
  crumb: "Export checklist",
  breadcrumbs: SUB,
  eyebrow: "Taking a pet out of Thailand",
  h1: "Pet export from Thailand checklist",
  lede: "Use this as a working checklist while you plan your departure from Pattaya. " +
    "Allow several months if your destination requires a rabies titer test and waiting period.",
  verify: VERIFY,
  updated: "2026-08-01",
  sections: [
    { h: "Before you book anything", html:
      "<ol>" +
      "<li>Read the <a href=\"/take-pet-out-of-thailand/\">full export guide</a>.</li>" +
      "<li>Identify your <strong>destination country's rules</strong> &mdash; see the " +
      "<a href=\"/take-pet-out-of-thailand/\">country guides on the export hub</a> " +
      "or our pages for " +
      "<a href=\"/take-pet-out-of-thailand/to-uk.html\">UK</a>, " +
      "<a href=\"/take-pet-out-of-thailand/to-eu.html\">EU</a>, " +
      "<a href=\"/take-pet-out-of-thailand/to-usa.html\">USA</a> and " +
      "<a href=\"/take-pet-out-of-thailand/to-australia.html\">Australia</a>.</li>" +
      "<li>Confirm your <strong>airline</strong> will carry your pet on your route &mdash; " +
      "<a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">airline pet policies</a>.</li>" +
      "<li>Budget with our <a href=\"/take-pet-out-of-thailand/cost-to-export-a-pet-from-thailand.html\">export cost guide</a>.</li>" +
      "</ol>" },
    { h: "Start early (destination timing)", html:
      "<ol>" +
      "<li><strong>Destination pathway</strong> &mdash; UK and EU routes can require a " +
      "rabies titer and waiting period; Australia requires an approved country first, " +
      "including at least 180 consecutive days in approved countries immediately before export (" +
      claimLink("AU-NONAPPROVED-PATH-2026-08", "DAFF FAQ") + "). " +
      "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">Rabies and titer guide</a></li>" +
      "<li>Check whether your pet already has a valid titer from before arrival in Thailand.</li>" +
      "<li>An <a href=\"/pet-relocation/\">agent</a> is optional. If used, request an itemised scope and verify the rules directly.</li>" +
      "</ol>" },
    { h: "The Thai export sequence", html:
      "<ol>" +
      "<li><strong>Identification and vaccination records</strong> &mdash; meet the destination and AQS requirements and keep every identifier consistent.</li>" +
      "<li><strong>R1/1 export application</strong> &mdash; file as the responsible departure-port AQS directs; the reviewed procedure gives no universal email channel or 15-day deadline.</li>" +
      "<li><strong>Mandatory DLD health examination</strong> &mdash; attend no more than 2&ndash;3 days before travel. If compliant, the station issues R9 and the health certificate. " +
      "<a href=\"/take-pet-out-of-thailand/export-process.html\">Export process guide</a></li>" +
      "<li><strong>Destination import permit</strong> (if required) &mdash; UK, EU, USA, Australia, UAE and others each have their own.</li>" +
      "</ol>" },
    { h: "Two weeks before departure", html:
      "<ul>" +
      "<li>Re-read every Thai and destination document against current rules.</li>" +
      "<li>Confirm crate size meets IATA rules; book cargo or cabin slot if required.</li>" +
      "<li>Carry copies of every certificate, permit and endorsement in hand luggage.</li>" +
      "<li>Save Suvarnabhumi AQS export contacts from the " +
      "<a href=\"/take-pet-out-of-thailand/export-process.html\">export process guide</a>.</li>" +
      "</ul>" },
    { h: "On departure day", html:
      "<ul>" +
      "<li>Allow extra time at the airport for the Animal Quarantine Station export check.</li>" +
      "<li>Keep the pet calm, hydrated and never leave the crate in a hot vehicle.</li>" +
      "<li>Have destination import paperwork ready for landing.</li>" +
      "</ul>" +
      "<p>Came the other way? See <a href=\"/bring-pet-to-thailand/checklist.html\">import checklist</a>.</p>" },
    { h: "Common mistakes to avoid", html:
      "<ul>" +
      "<li><strong>Starting with DLD only</strong> &mdash; the destination titer test and waiting period usually sets the calendar.</li>" +
      "<li><strong>Expired titer or rabies gap</strong> &mdash; a lapsed vaccination invalidates prior tests.</li>" +
      "<li><strong>Assuming one R1/1 deadline or email applies everywhere</strong> &mdash; ask the responsible AQS.</li>" +
      "<li><strong>Missing the examination window</strong> &mdash; the mandatory DLD health examination is no more than 2&ndash;3 days before travel.</li>" +
      "</ul>" }
  ],
  faqs: [
    ["How long before departure should I start?",
     "<p>Start with the destination authority. UK and EU routes can include a three-month post-sample wait; Australia&rsquo;s standard route requires an approved country and at least 180 consecutive days there immediately before export. The reviewed Thai procedure does not publish a universal total duration.</p>"],
    ["Can I print this checklist?",
     "<p>Yes. Use your browser print function on this page. For travel, keep PDF copies of every official certificate and permit instead.</p>"],
    ["What is the single biggest timing mistake?",
     "<p>Starting the Thai export permit without first lining up the destination country&rsquo;s import rules — especially the titer test and three-month wait for the UK and EU.</p>"],
    ["Do I need to confirm my flight with the AQS?",
     "<p>Ask the responsible AQS what itinerary details it requires and how it schedules the final examination. The reviewed procedure states a mandatory examination no more than 2&ndash;3 days before travel, but not a separate universal three-day confirmation rule.</p>"],
    ["Should I use a relocation agent?",
     "<p>No. An agent is optional. Ask for an itemised scope and verify every government and airline requirement directly; PattayaPets has not independently measured agent outcomes or savings.</p>"]
  ],
  related: [
    { name: "The export process", path: "/take-pet-out-of-thailand/export-process.html", desc: "The Thai DLD side in full." },
    { name: "DLD export permit", path: "/take-pet-out-of-thailand/export-permit-thailand-dld.html", desc: "The permit before you fly." },
    { name: "What export costs", path: "/take-pet-out-of-thailand/cost-to-export-a-pet-from-thailand.html", desc: "Budgeting the move." },
    { name: "Import checklist", path: "/bring-pet-to-thailand/checklist.html", desc: "The reverse journey." },
    { name: "Rabies & titer test", path: "/bring-pet-to-thailand/rabies-vaccination-titer-test.html", desc: "Why timing matters." },
    { name: "Pet relocation agents", path: "/pet-relocation/", desc: "Specialists who manage export." }
  ]
}));

module.exports = pages;
