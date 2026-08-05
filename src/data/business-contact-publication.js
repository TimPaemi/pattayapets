"use strict";

/*
 * Versioned field-level contact publication decisions.
 *
 * A stored value is not permission to publish it. The business integrity gate
 * requires the fields below to match the stored contact fields exactly and the
 * renderer consults these decisions before emitting any contact value or schema.
 */

const REVIEWED_AT = "2026-08-05";

function record(disposition, basis, fieldSources) {
  var publish = disposition === "PUBLISH";
  var fields = {};
  Object.keys(fieldSources).forEach(function (field) {
    fields[field] = Object.freeze({
      classification: publish ? "public-business" : "unknown",
      publicationState: publish ? "approved" : "withheld",
      publicationBasis: basis,
      optOutState: publish ? "none-recorded" : "unknown",
      source: fieldSources[field],
      reviewedAt: REVIEWED_AT
    });
  });
  return Object.freeze({
    disposition: disposition,
    defaultPublicationState: "withheld",
    reviewedAt: REVIEWED_AT,
    fields: Object.freeze(fields)
  });
}

const RECORDS = Object.freeze({
  "thonglor-pet-hospital-pattaya": record("PUBLISH", "operator-primary", {
    phone: "https://thonglorpet.com/en/branch/pethospital-thonglorpet-pattaya", tel: "https://thonglorpet.com/en/branch/pethospital-thonglorpet-pattaya", website: "https://thonglorpet.com/en/branch/pethospital-thonglorpet-pattaya"
  }),
  "pattaya-veterinary-clinic": record("HOLD", "current-operation-unverified", {
    phone: "https://microchip.anyvet.ai/partner/39", tel: "https://microchip.anyvet.ai/partner/39"
  }),
  "vetazoo-animal-and-exotic-pet-hospital": record("PUBLISH", "operator-primary", {
    phone: "https://vetazoo.com/th/contact/", tel: "https://vetazoo.com/th/contact/", line: "https://vetazoo.com/th/contact/", email: "https://vetazoo.com/th/contact/", website: "https://vetazoo.com/"
  }),
  "muang-ake-pet-hospital-pattaya": record("PUBLISH", "operator-primary", {
    phone: "https://en.muangakepethospital.com/17045029/our-branch", tel: "https://en.muangakepethospital.com/17045029/our-branch", line: "https://en.muangakepethospital.com/17045029/our-branch", website: "https://en.muangakepethospital.com/"
  }),
  "pattaya-animal-hospital": record("HOLD", "current-operation-unverified", {}),
  "pattaya-community-pet-hospital": record("PUBLISH", "operator-primary", {
    phone: "https://en.muangakepethospital.com/17045029/our-branch", tel: "https://en.muangakepethospital.com/17045029/our-branch", line: "https://www.facebook.com/PATTAYACOMMUNITYPETHOSPITAL24Hrs/", website: "https://en.muangakepethospital.com/17045029/our-branch"
  }),
  "animal-army-hospital": record("PUBLISH", "operator-primary", {
    phone: "https://animalarmy.org/pages/contact", tel: "https://animalarmy.org/pages/contact", email: "https://animalarmy.org/pages/contact", website: "https://animalarmy.org/"
  }),
  "siam-country-pet-hospital": record("HOLD", "current-operation-unverified", {}),
  "north-pattaya-animal-hospital": record("PUBLISH", "operator-plus-independent", {
    phone: "https://www.facebook.com/PTNpetlover", tel: "https://www.facebook.com/PTNpetlover", website: "https://www.facebook.com/PTNpetlover"
  }),
  "pattaya-city-pet-shop-grooming": record("HOLD", "current-operation-unverified", {
    phone: "https://pattayagrooming.wordpress.com/", tel: "https://pattayagrooming.wordpress.com/", website: "https://pattayagrooming.wordpress.com/"
  }),
  "jaijai-grooming": record("PUBLISH", "operator-plus-independent", {
    phone: "https://www.facebook.com/jaijaigrooming/", tel: "https://www.facebook.com/jaijaigrooming/", website: "https://www.facebook.com/jaijaigrooming/"
  }),
  "woof-pattaya": record("PUBLISH", "operator-plus-independent", {
    phone: "https://www.facebook.com/woof.pattaya", tel: "https://www.facebook.com/woof.pattaya", website: "https://www.facebook.com/woof.pattaya"
  }),
  "furiday-pet-grooming": record("HOLD", "current-operation-unverified", {
    phone: "https://looklook.pet/en/places/67d006f5f798515eb74c65fa/FURiday-pet-grooming", tel: "https://looklook.pet/en/places/67d006f5f798515eb74c65fa/FURiday-pet-grooming", website: "https://www.facebook.com/FURidaypetgrooming/"
  }),
  "furpet-grooming-and-hotel": record("HOLD", "unverified-lead", {
    website: "https://www.facebook.com/people/Furpet-Grooming-and-Hotel/61561258409344/"
  }),
  "pattaya-dog-stay": record("PUBLISH", "operator-plus-independent", {
    phone: "https://www.facebook.com/Pattayadogstay/", tel: "https://www.facebook.com/Pattayadogstay/", website: "https://www.facebook.com/Pattayadogstay/"
  }),
  "elite-dog-resort": record("PUBLISH", "operator-primary", {
    website: "https://elitedogresort.com/"
  }),
  "pattaya-dog-hotel": record("PUBLISH", "operator-primary", {
    phone: "https://www.pattayadoghotel.com/contact", tel: "https://www.pattayadoghotel.com/contact", email: "https://www.pattayadoghotel.com/contact", website: "https://www.pattayadoghotel.com/"
  }),
  "brand-dog-pattaya-pet-supplies": record("HOLD", "current-operation-unverified", {
    phone: "https://wanderlog.com/place/details/13597603/brand-dog-pattaya-pet-supplies", tel: "https://wanderlog.com/place/details/13597603/brand-dog-pattaya-pet-supplies"
  }),
  "petsmart-pattaya": record("PUBLISH", "operator-plus-independent", {
    phone: "https://www.facebook.com/PetSmart.th/", tel: "https://www.facebook.com/PetSmart.th/", website: "https://www.facebook.com/PetSmart.th/"
  }),
  "tong-ma-aquarium-and-pets-shop": record("HOLD", "current-operation-unverified", {
    phone: "https://www.thaithurkic.com/tong-ma-aquarium-pets-shop-062-881-4452", tel: "https://www.thaithurkic.com/tong-ma-aquarium-pets-shop-062-881-4452"
  }),
  "peturday-pattaya": record("PUBLISH", "operator-plus-independent", {
    phone: "https://www.facebook.com/peturdaypty", tel: "https://www.facebook.com/peturdaypty", website: "https://www.facebook.com/peturdaypty"
  }),
  "pattaya-pet-center": record("HOLD", "current-operation-unverified", {
    phone: "https://th.near-place.com/pet_store-nearby-phathyaplatu-pattaya-pet-shop-pattaya-aquarium-thep-prasit-11-pattaya-city-bang-lamung-district", tel: "https://th.near-place.com/pet_store-nearby-phathyaplatu-pattaya-pet-shop-pattaya-aquarium-thep-prasit-11-pattaya-city-bang-lamung-district"
  }),
  "k9-coach": record("PUBLISH", "operator-primary", {
    phone: "https://k9-coach.co.th/contact-us/", tel: "https://k9-coach.co.th/contact-us/", whatsapp: "https://k9-coach.co.th/contact-us/", line: "https://k9-coach.co.th/contact-us/", email: "https://k9-coach.co.th/contact-us/", website: "https://k9-coach.co.th/contact-us/"
  }),
  "zoeta-dogsoul": record("HOLD", "pattaya-service-scope-conflict", {
    phone: "https://zoeta-dogsoul.com/contact/", tel: "https://zoeta-dogsoul.com/contact/", email: "https://zoeta-dogsoul.com/contact/", website: "https://zoeta-dogsoul.com/"
  }),
  "k9-pattaya-dog-training-school": record("PUBLISH", "operator-plus-independent", {
    phone: "https://www.cybo.com/TH-biz/dogs-training-international-institute", tel: "https://www.cybo.com/TH-biz/dogs-training-international-institute", website: "https://www.facebook.com/SJk9Pattaya/"
  }),
  "pet-relocation-thailand": record("PUBLISH", "operator-primary", {
    phone: "https://www.petrelocationthailand.com/contact/", tel: "https://www.petrelocationthailand.com/contact/", whatsapp: "https://www.petrelocationthailand.com/contact/", line: "https://www.petrelocationthailand.com/contact/", email: "https://www.petrelocationthailand.com/contact/", website: "https://www.petrelocationthailand.com/"
  }),
  "relo4paws": record("PUBLISH", "operator-primary", {
    phone: "https://relo4paws.com/inquiry/", tel: "https://relo4paws.com/inquiry/", email: "https://relo4paws.com/inquiry/", website: "https://relo4paws.com/"
  }),
  "united-pet-express": record("PUBLISH", "operator-primary", {
    phone: "https://www.unitedpetexpress.com/contact", tel: "https://www.unitedpetexpress.com/contact", website: "https://www.unitedpetexpress.com/"
  }),
  "asia-relocation-pet-transport": record("PUBLISH", "operator-primary", {
    whatsapp: "https://www.asia-relocation.com/thailand/contact/", email: "https://www.asia-relocation.com/thailand/contact/", website: "https://www.asia-relocation.com/thailand/moving/pet-relocation/"
  }),
  "pawspective-relocations": record("PUBLISH", "operator-primary", {
    phone: "https://www.pettravelthailand.com/", tel: "https://www.pettravelthailand.com/", whatsapp: "https://www.pettravelthailand.com/", email: "https://www.pettravelthailand.com/", website: "https://www.pettravelthailand.com/"
  }),
  "mor-ja-pet-clinic-pattaya": record("HOLD", "human-verification-required", {}),
  "baan-mor-raksasat-animal-hospital-pattaya": record("PUBLISH", "operator-plus-independent", {
    phone: "https://www.facebook.com/DoctorPetClinic24Hr/", tel: "https://www.facebook.com/DoctorPetClinic24Hr/", website: "https://www.facebook.com/DoctorPetClinic24Hr/"
  }),
  "pet-passions-mobile-grooming": record("REJECT", "out-of-area-rejected", {
    phone: "https://petpassionsth.com/eng/", tel: "https://petpassionsth.com/eng/", line: "https://petpassionsth.com/eng/", email: "https://petpassionsth.com/eng/", website: "https://petpassionsth.com/eng/"
  }),
  "pluto-luxury-pet-hotel-pattaya": record("REJECT", "out-of-area-rejected", {
    phone: "https://www.plutopethotel.com/", tel: "https://www.plutopethotel.com/", line: "https://www.plutopethotel.com/", website: "https://www.plutopethotel.com/en/pet-hotel-en/"
  }),
  "doggie-star-grooming-pattaya": record("HOLD", "unverified-lead", {
    website: "https://www.facebook.com/DoggieStarGrooming/"
  })
});

module.exports = Object.freeze({
  schemaVersion: "1.0.0",
  ledgerVersion: "2026-08-05.1",
  reviewedAt: REVIEWED_AT,
  policy: Object.freeze({
    storedValueIsPublicationPermission: false,
    defaultPublicationState: "withheld",
    approvedClassification: "public-business",
    coordinates: "not-collected-or-published-without-source-and-rights-review"
  }),
  records: RECORDS
});
