"use strict";
/* Extra topic guides for the "Taking a pet out of Thailand" cluster. */

const { article } = require("../guidekit.js");

const GUIDES = { name: "Guides", path: "/guides.html" };
const CLUSTER = { name: "Taking a pet out of Thailand", path: "/take-pet-out-of-thailand/" };
const SUB = [GUIDES, CLUSTER];

const VERIFY =
  "This guide was last reviewed in May 2026. Export rules &mdash; Thai DLD " +
  "procedures, destination-country requirements and airline policies &mdash; change " +
  "without notice. Use this as orientation, then confirm every current requirement " +
  "with the DLD and the destination country's authority before booking.";

const OFFICIAL =
  "<p><strong>Official sources to verify against:</strong> " +
  "<a href=\"https://aqi.dld.go.th/webnew/index.php/th/service-menu-2/office-service-menu/72-research/kmresearch/432-exportation-of-live-animals\" " +
  "target=\"_blank\" rel=\"noopener nofollow\">DLD export of live animals</a>; " +
  "Suvarnabhumi AQS export: " +
  "<a href=\"mailto:qsap_bkk_export@dld.go.th\">qsap_bkk_export@dld.go.th</a>.</p>";

const pages = [];

pages.push(article({
  path: "/take-pet-out-of-thailand/checklist.html",
  title: "Pet export from Thailand checklist | PattayaPets",
  desc: "Printable checklist for taking a dog or cat out of Thailand: microchip, " +
    "rabies titer, DLD export permit, health certificate and airline booking.",
  crumb: "Export checklist",
  breadcrumbs: SUB,
  eyebrow: "Taking a pet out of Thailand",
  h1: "Pet export from Thailand checklist",
  lede: "Use this as a working checklist while you plan your departure from Pattaya. " +
    "Allow several months if your destination requires a rabies titer test and waiting period.",
  verify: VERIFY,
  updated: "2026-05-29",
  sections: [
    { h: "Before you book anything", html:
      "<ol>" +
      "<li>Read the <a href=\"/take-pet-out-of-thailand/\">full export guide</a>.</li>" +
      "<li>Identify your <strong>destination country's rules</strong> &mdash; see the " +
      "<a href=\"/take-pet-out-of-thailand/#by-destination\">country guides on the export hub</a> " +
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
      "<li><strong>Rabies titer test</strong> &mdash; if the UK, EU, Australia, Japan or similar " +
      "is your destination, the blood sample and waiting period often set the timeline. " +
      "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">Rabies and titer guide</a></li>" +
      "<li>Check whether your pet already has a valid titer from before arrival in Thailand.</li>" +
      "<li>Book a <a href=\"/pet-relocation/\">relocation agent</a> if the paperwork feels overwhelming.</li>" +
      "</ol>" },
    { h: "The Thai export sequence", html:
      "<ol>" +
      "<li><strong>ISO microchip</strong> &mdash; must match every certificate. " +
      "<a href=\"/bring-pet-to-thailand/microchip-requirements.html\">Microchip guide</a></li>" +
      "<li><strong>Current rabies vaccination</strong> &mdash; and other jabs your destination requires.</li>" +
      "<li><strong>DLD export health certificate</strong> &mdash; issued by an accredited vet in Thailand. " +
      "<a href=\"/take-pet-out-of-thailand/export-process.html\">Export process guide</a></li>" +
      "<li><strong>DLD export permit</strong> &mdash; apply before you fly. " +
      "<a href=\"/take-pet-out-of-thailand/export-permit-thailand-dld.html\">Export permit guide</a></li>" +
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
      "<p>Came the other way? See <a href=\"/bring-pet-to-thailand/checklist.html\">import checklist</a>.</p>" }
  ],
  faqs: [
    ["How long before departure should I start?",
     "<p>For the UK, EU or Australia, start several months ahead because of the rabies titer test and waiting period. For simpler destinations such as Canada or Russia, the Thai export side still needs weeks of lead time.</p>"],
    ["Can I print this checklist?",
     "<p>Yes. Use your browser print function on this page. For travel, keep PDF copies of every official certificate and permit instead.</p>"]
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
