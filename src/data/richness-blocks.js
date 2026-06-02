"use strict";
/* Shared agency-depth sections and FAQ pools appended by cluster wrappers. */

function mergeFaqs(existing, extra, maxTotal) {
  existing = (existing || []).slice();
  maxTotal = maxTotal || 8;
  var seen = {};
  existing.forEach(function (f) { seen[f[0]] = true; });
  extra.forEach(function (f) {
    if (existing.length >= maxTotal) return;
    if (!seen[f[0]]) {
      existing.push(f);
      seen[f[0]] = true;
    }
  });
  return existing;
}

const EXPORT_FROM_PATTAYA = {
  h: "Departing from Pattaya — airports, AQS and lead time",
  html:
    "<p>Most owners in Chon Buri export through <strong>Suvarnabhumi (BKK)</strong>, " +
    "roughly 90&ndash;120 minutes by road depending on traffic. " +
    "<strong>U-Tapao (UTP)</strong> is closer to Pattaya and suits some regional " +
    "routes, but your DLD export paperwork must name the <em>actual</em> departure " +
    "airport &mdash; see " +
    "<a href=\"/bring-pet-to-thailand/u-tapao-airport-pets.html\">U-Tapao or Bangkok</a> " +
    "for the import-side mirror.</p>" +
    "<p>Apply for the Thai export permit (form <strong>1/1</strong>) at least " +
    "<strong>15 days</strong> before departure to the Animal Quarantine Station " +
    "(AQS) at that airport. In practice, allow more when destination import permits, " +
    "titer tests or airline cargo bookings still need to align. Email " +
    "<a href=\"mailto:qsap_bkk_export@dld.go.th\">qsap_bkk_export@dld.go.th</a> " +
    "for Suvarnabhumi export questions and confirm your flight date at least " +
    "<strong>three days</strong> before you fly &mdash; the same confirmation rule " +
    "applies on import.</p>" +
    "<p>Keep digital and paper copies of every document in one folder: microchip " +
    "number, rabies certificate, destination import approval, health certificate " +
    "draft and flight booking. Mismatched chip numbers between Thai export papers " +
    "and destination import forms are one of the most common reasons export is " +
    "delayed at the desk.</p>"
};

const EXPORT_RELOCATION = {
  h: "When a relocation agent earns its fee",
  html:
    "<p>You do not <em>have</em> to use an agent, but many Pattaya owners do for " +
    "complex destinations (UK, EU, Australia, Japan, Singapore). A good " +
    "<a href=\"/pet-relocation/\">pet relocation specialist</a> lines up three " +
    "timelines that slip easily when managed alone: destination import rules, " +
    "Thai DLD export endorsement, and airline cargo or cabin booking.</p>" +
    "<p>Agents cannot override law &mdash; they still need your pet vaccinated, " +
    "microchipped and tested on schedule &mdash; but they know which AQS forms " +
    "to submit, which vet clinics issue export-ready health certificates, and " +
    "how to keep crate dimensions within " +
    "<a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">IATA airline rules</a>. " +
    "Compare quotes from more than one agent; PattayaPets lists relocation businesses " +
    "as directory facts, not endorsements.</p>" +
    "<p>If you self-manage, budget extra time for a pre-export vet appointment in " +
    "Pattaya or Bangkok, a dry run to the airport AQS if you have never exported " +
    "before, and a contingency night in Bangkok if your flight is early and the " +
    "pet must check in hours ahead in cargo.</p>"
};

const IMPORT_PATTAYA_ARRIVAL = {
  h: "After clearance — reaching Pattaya from the airport",
  html:
    "<p>Once the Animal Quarantine Station clears your pet, the practical question " +
    "is the drive to Pattaya. From Suvarnabhumi, most owners use a pre-booked " +
    "pet-friendly taxi, Grab with a crate (confirm with the driver), or a " +
    "<a href=\"/pet-relocation/\">relocation transfer</a>. From U-Tapao, the hop " +
    "is shorter &mdash; one reason some Pattaya-bound owners choose UTP when the " +
    "airline and route allow pets.</p>" +
    "<p>Have water, a spare towel and your pet&rsquo;s usual food accessible after " +
    "a long flight. Do not assume your condo or hotel accepts pets on arrival day " +
    "&mdash; confirm " +
    "<a href=\"/owning-a-pet-in-pattaya/pet-friendly-housing.html\">pet-friendly housing</a> " +
    "in writing before you land. Schedule a local " +
    "<a href=\"/vets/\">vet check</a> within the first week for parasite prevention " +
    "suited to Pattaya&rsquo;s year-round climate.</p>" +
    "<p>Register and update " +
    "<a href=\"/owning-a-pet-in-pattaya/microchipping-your-pet.html\">microchip contact " +
    "details</a> to your Thai phone number, and read " +
    "<a href=\"/owning-a-pet-in-pattaya/dog-registration-thailand.html\">dog registration " +
    "and rabies law</a> for dogs. If you may leave Thailand later, plan the " +
    "<a href=\"/bring-pet-to-thailand/rabies-vaccination-titer-test.html\">rabies titer test</a> " +
    "before or soon after arrival &mdash; the waiting period cannot be rushed when " +
    "you export to the UK, EU or Australia.</p>"
};

const IMPORT_PATTAYA_LIFE = {
  h: "Settling in Pattaya — first-month checklist",
  html:
    "<p>Beyond paperwork, new arrivals should tackle:</p>" +
    "<ul>" +
    "<li><strong>Heat management</strong> &mdash; " +
    "<a href=\"/owning-a-pet-in-pattaya/hot-climate-pet-care.html\">hot-climate pet care</a> " +
    "and cool-hour walks.</li>" +
    "<li><strong>Parasites</strong> &mdash; year-round flea, tick and heartworm " +
    "prevention; see <a href=\"/pet-emergency/ticks-and-fleas.html\">ticks &amp; fleas</a>.</li>" +
    "<li><strong>Street animals</strong> &mdash; " +
    "<a href=\"/pet-emergency/street-dog-encounters.html\">walking safely</a> around soi dogs.</li>" +
    "<li><strong>Emergency contacts</strong> &mdash; save a " +
    "<a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour vet</a> before you need one.</li>" +
    "<li><strong>Food supply</strong> &mdash; " +
    "<a href=\"/owning-a-pet-in-pattaya/where-to-buy-pet-food.html\">where to buy pet food</a> " +
    "and a two-week buffer stock.</li>" +
    "</ul>" +
    "<p>Thailand does not usually quarantine pets that arrive with complete documents " +
    "&mdash; see " +
    "<a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">pet quarantine in Thailand</a> " +
    "for when inspection becomes detention. Keep every stamped form the AQS gives you; " +
    "you may need them for export later.</p>"
};

const DOG_OUTING_CHECKLIST = {
  h: "Before you go — practical checklist",
  html:
    "<p>Every dog outing in Pattaya works better with a short routine:</p>" +
    "<ul>" +
    "<li><strong>Timing</strong> &mdash; early morning or after sunset in hot season; " +
    "see <a href=\"/owning-a-pet-in-pattaya/where-to-walk-your-dog.html\">where to walk your dog</a>.</li>" +
    "<li><strong>Gear</strong> &mdash; lead, poop bags, water, towel for sandy or muddy paws.</li>" +
    "<li><strong>Policy</strong> &mdash; ask at the door; outdoor seating does not guarantee dogs indoors.</li>" +
    "<li><strong>Behaviour</strong> &mdash; a settled dog keeps venues open to the next owner.</li>" +
    "<li><strong>Heat</strong> &mdash; watch panting and paw pads; cut visits short if your dog struggles.</li>" +
    "</ul>" +
    "<p>Keep rabies vaccination current &mdash; required by Thai law and sensible around " +
    "street animals. For beach trips, rinse salt and sand afterward per " +
    "<a href=\"/pet-emergency/beach-and-sea-hazards.html\">beach &amp; sea hazards</a>.</p>"
};

const DOG_OUTING_SEASONS = {
  h: "Heat, rain, Songkran and fireworks",
  html:
    "<p>Pattaya&rsquo;s calendar affects outings as much as venue policy:</p>" +
    "<ul>" +
    "<li><strong>Hot season</strong> &mdash; midday outings are a heatstroke risk; plan shade and water.</li>" +
    "<li><strong>Rainy season</strong> &mdash; slippery tiles, toads and shorter walks; see " +
    "<a href=\"/owning-a-pet-in-pattaya/rainy-season-pet-care.html\">rainy-season pet care</a>.</li>" +
    "<li><strong>Songkran</strong> &mdash; keep dogs away from water-fight zones; see " +
    "<a href=\"/owning-a-pet-in-pattaya/songkran-and-your-pet.html\">Songkran &amp; your pet</a>.</li>" +
    "<li><strong>Fireworks</strong> &mdash; festivals and New Year stress noise-sensitive dogs; see " +
    "<a href=\"/owning-a-pet-in-pattaya/fireworks-and-noise-anxiety.html\">fireworks &amp; noise anxiety</a>.</li>" +
    "</ul>" +
    "<p>One stressed or overheated dog at a venue can close the door for everyone &mdash; " +
    "leave early if it is not working.</p>"
};

const EXPORT_EXTRA_FAQS = [
  ["Can I export from U-Tapao instead of Suvarnabhumi?",
   "<p>Sometimes — if your airline accepts pets on that route. Export paperwork must match the actual departure airport. See <a href=\"/bring-pet-to-thailand/u-tapao-airport-pets.html\">U-Tapao or Bangkok</a> for the Pattaya angle.</p>"],
  ["How do I get my pet to Suvarnabhumi from Pattaya?",
   "<p>Pre-book a pet-friendly taxi or private transfer with a crate secured. Allow extra time for traffic and cargo check-in cut-offs — often several hours before departure.</p>"],
  ["Should I stay in Bangkok the night before an export flight?",
   "<p>Many owners do for early cargo departures or when the AQS needs same-day inspection. It reduces the risk of a missed slot if Pattaya traffic is bad.</p>"]
];

const IMPORT_EXTRA_FAQS = [
  ["Which airport is better for Pattaya — BKK or U-Tapao?",
   "<p>U-Tapao is closer; Suvarnabhumi has more international routes. Your import permit must name the airport you actually use. See <a href=\"/bring-pet-to-thailand/u-tapao-airport-pets.html\">U-Tapao or Bangkok</a>.</p>"],
  ["What should I do in my first week in Pattaya with a pet?",
   "<p>Book a local vet for parasite prevention, confirm housing allows pets, update microchip contacts, and save a 24-hour clinic number. See our <a href=\"/owning-a-pet-in-pattaya/\">owning a pet in Pattaya</a> hub.</p>"],
  ["Will I need the titer test if I only stay in Thailand?",
   "<p>Not for Thai import. You need it if you may later export to the UK, EU, Australia or other titer-countries — plan early because the wait cannot be shortened.</p>"]
];

const DOG_EXTRA_FAQS = [
  ["Can I take my dog indoors in Pattaya restaurants?",
   "<p>Usually not in air-conditioned dining rooms. Outdoor terraces and garden seating are where dogs are most often accepted — always ask first.</p>"],
  ["What if staff say no after I sat down outside?",
   "<p>Leave politely — policies change and staff may be enforcing building rules. Arguing makes the next dog owner less welcome.</p>"],
  ["Are service or emotional-support dogs treated differently?",
   "<p>Thailand does not mirror all Western service-dog access laws. Ask the venue and airline directly; carry documentation if you have it.</p>"]
];

module.exports = {
  EXPORT_FROM_PATTAYA,
  EXPORT_RELOCATION,
  IMPORT_PATTAYA_ARRIVAL,
  IMPORT_PATTAYA_LIFE,
  DOG_OUTING_CHECKLIST,
  DOG_OUTING_SEASONS,
  EXPORT_EXTRA_FAQS,
  IMPORT_EXTRA_FAQS,
  DOG_EXTRA_FAQS,
  mergeFaqs
};
