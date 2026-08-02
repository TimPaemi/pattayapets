"use strict";

/*
 * Publication-safe view of the reviewed airline-policy research.
 *
 * The research dossier deliberately contains route examples, fees, restrictions,
 * operational notes and unresolved fields. None of those belong in a reusable
 * comparison data source. Keep this adapter as an explicit allowlist so a page can
 * consume the reviewed policy channel without accidentally publishing the dossier.
 */

const SOURCE_POLICIES = require("../../research/findings/airline-pet-policies.json");

const EXPECTED_POLICY_COUNT = 17;
const NO_PUBLIC_MINIMUM_BOOKING_TIMING =
  "No public minimum booking or request lead time is stated in the reviewed policy; " +
  "request shipment-specific timing from the airline.";
const ALLOWED_CONFIDENCE = new Set(["high", "medium", "low"]);

function nonEmptyString(value, label) {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new TypeError(label + " must be a nonempty string");
  }
  return value.trim();
}

function ordinaryPetModes(record, label) {
  const policy = record && record.petPolicy;
  if (!policy || typeof policy !== "object" || Array.isArray(policy)) {
    throw new TypeError(label + ".petPolicy must be an object");
  }

  ["cabinAllowed", "holdAllowed", "manifestCargoOnly"].forEach(function (field) {
    if (typeof policy[field] !== "boolean") {
      throw new TypeError(label + ".petPolicy." + field + " must be boolean");
    }
  });

  if (policy.manifestCargoOnly && (policy.cabinAllowed || policy.holdAllowed)) {
    throw new Error(label + " cannot combine manifest-cargo-only with passenger carriage");
  }

  const modes = [];
  if (policy.cabinAllowed) modes.push("Cabin");
  if (policy.holdAllowed) modes.push("Checked baggage");
  if (policy.manifestCargoOnly) modes.push("Manifest cargo only");
  if (!modes.length) throw new Error(label + " has no supported ordinary-pet mode");
  return Object.freeze(modes);
}

function sanitizePolicy(record, index) {
  const label = "airlinePolicies[" + index + "]";
  if (!record || typeof record !== "object" || Array.isArray(record)) {
    throw new TypeError(label + " must be an object");
  }

  const airline = nonEmptyString(record.airline, label + ".airline");
  const iata = nonEmptyString(record.iata, label + ".iata");
  if (!/^[A-Z0-9]{2}$/.test(iata)) {
    throw new TypeError(label + ".iata must be a two-character IATA code");
  }

  const policy = record.petPolicy;
  const restrictions = record.breedRestrictions;
  if (!restrictions || typeof restrictions !== "object" || Array.isArray(restrictions)) {
    throw new TypeError(label + ".breedRestrictions must be an object");
  }

  const sourceTiming = policy && policy.bookingLeadTime;
  if (sourceTiming !== null && sourceTiming !== undefined &&
      (typeof sourceTiming !== "string" || sourceTiming.trim().length === 0)) {
    throw new TypeError(label + ".petPolicy.bookingLeadTime must be a nonempty string or null");
  }

  const confidence = nonEmptyString(record.confidence, label + ".confidence");
  if (!ALLOWED_CONFIDENCE.has(confidence)) {
    throw new TypeError(label + ".confidence has an unsupported value");
  }

  return Object.freeze({
    airline: airline,
    iata: iata,
    ordinaryPetModes: ordinaryPetModes(record, label),
    bookingTiming: sourceTiming == null
      ? NO_PUBLIC_MINIMUM_BOOKING_TIMING
      : sourceTiming.trim(),
    bookingMethod: nonEmptyString(policy && policy.bookingMethod,
      label + ".petPolicy.bookingMethod"),
    policyUrl: nonEmptyString(restrictions.policyUrl,
      label + ".breedRestrictions.policyUrl"),
    asOf: nonEmptyString(restrictions.asOf, label + ".breedRestrictions.asOf"),
    confidence: confidence
  });
}

if (!Array.isArray(SOURCE_POLICIES) || SOURCE_POLICIES.length !== EXPECTED_POLICY_COUNT) {
  throw new Error("Expected exactly " + EXPECTED_POLICY_COUNT + " reviewed airline policies");
}

const AIRLINE_POLICY_SNAPSHOT = Object.freeze(SOURCE_POLICIES.map(sanitizePolicy));

const seenAirlines = new Set();
const seenIata = new Set();
AIRLINE_POLICY_SNAPSHOT.forEach(function (policy) {
  if (seenAirlines.has(policy.airline)) throw new Error("Duplicate airline: " + policy.airline);
  if (seenIata.has(policy.iata)) throw new Error("Duplicate IATA code: " + policy.iata);
  seenAirlines.add(policy.airline);
  seenIata.add(policy.iata);
});

module.exports = { AIRLINE_POLICY_SNAPSHOT };
