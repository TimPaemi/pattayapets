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
  teamSummary: "Tim and Paemi are the principals and accountable publication operators behind PattayaPets under the TimPaemi publisher identity.",
  teamWork: "They manage the publication's editorial operations, evidence controls, product maintenance and release review; route authorship is recorded separately.",
  email: "info@pattayapets.com",
  contactDeliveryStatus: "verified",
  analytics: Object.freeze({
    googleMeasurementId: "",
    cloudflareBeaconToken: ""
  }),
  people: Object.freeze([
    Object.freeze({
      key: "tim",
      id: "https://timpaemi.com/#tim",
      name: "Tim",
      url: "https://timpaemi.com/authors/tim/"
    }),
    Object.freeze({
      key: "paemi",
      id: "https://timpaemi.com/#paemi",
      name: "Paemi",
      url: "https://timpaemi.com/authors/paemi/"
    })
  ]),
  policies: Object.freeze({
    publishingPrinciples: "https://pattayapets.com/standards.html"
  })
});

module.exports = { SITE };
