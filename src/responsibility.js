"use strict";

/*
 * The sole source for personal author/creator projection. The safe default is
 * omission: publisher ownership, site operation, editing, or a masthead mention
 * never becomes route authorship without an APPROVED route record.
 */

const LEDGER = require("./data/route-responsibility-ledger.json");
const { SITE } = require("./site-config.js");

const PEOPLE = Object.freeze(Object.fromEntries(SITE.people.map(function (person) {
  return [person.key, person];
})));
const ROUTES = new Map(LEDGER.routes.map(function (record) { return [record.path, record]; }));

function approvedRoute(path) {
  const record = ROUTES.get(path);
  return record && record.disposition === "APPROVED" ? record : null;
}

function peopleForRole(path, role) {
  const record = approvedRoute(path);
  if (!record) return [];
  return record.responsiblePeople.filter(function (entry) {
    return entry.roles.includes(role);
  }).map(function (entry) {
    const person = PEOPLE[entry.person];
    if (!person) throw new Error("Unknown responsibility-ledger person: " + entry.person);
    return person;
  });
}

function projectCreators() {
  const evidence = LEDGER.projectCreationEvidence;
  if (evidence.disposition !== "APPROVED") return [];
  return evidence.people.map(function (key) {
    const person = PEOPLE[key];
    if (!person) throw new Error("Unknown project-creation person: " + key);
    return person;
  });
}

function personRef(person) {
  return { "@type": "Person", "@id": person.id, name: person.name, url: person.url };
}

module.exports = {
  LEDGER,
  approvedRoute,
  peopleForRole,
  projectCreators,
  personRef
};
