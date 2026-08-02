"use strict";

/* One source of truth for public identity and contact details.
   Mail delivery was confirmed by the operator on 2026-08-01. */
const SITE = Object.freeze({
  url: "https://pattayapets.com",
  name: "PattayaPets",
  tagline: "Source-led pet guidance for Pattaya",
  copyrightYear: "2026",
  publisherName: "TimPaemi",
  publisherLegalName: "TIMPAEMI CO., LTD.",
  publisherId: "https://timpaemi.com/#timpaemi",
  publisherUrl: "https://timpaemi.com/",
  teamSummary: "Tim and Paemi are the married team behind TimPaemi, the central identity for their Pattaya publishing and production work, and the named authors and editors of PattayaPets.",
  teamWork: "Their work in Pattaya spans editorial publishing, front-end and back-end development, events and live production.",
  email: "info@pattayapets.com",
  contactDeliveryStatus: "verified",
  analytics: Object.freeze({
    googleMeasurementId: "",
    cloudflareBeaconToken: ""
  }),
  authors: Object.freeze([
    Object.freeze({
      id: "https://timpaemi.com/#tim",
      name: "Tim",
      role: "Author, editor and digital producer",
      path: "/masthead.html#tim",
      url: "https://pattayapets.com/masthead.html#tim"
    }),
    Object.freeze({
      id: "https://timpaemi.com/#paemi",
      name: "Paemi",
      role: "Author, editor and digital producer",
      path: "/masthead.html#paemi",
      url: "https://pattayapets.com/masthead.html#paemi"
    })
  ]),
  socials: Object.freeze([
    "https://www.youtube.com/@timpaemi",
    "https://www.instagram.com/timpaemi/",
    "https://www.tiktok.com/@timpaemi.com",
    "https://www.facebook.com/timpaemi"
  ]),
  policies: Object.freeze({
    publishingPrinciples: "https://pattayapets.com/standards.html",
    correctionsPolicy: "https://pattayapets.com/corrections.html",
    actionableFeedbackPolicy: "https://pattayapets.com/contact.html",
    ownershipFundingInfo: "https://pattayapets.com/about.html#funding"
  })
});

module.exports = { SITE };
