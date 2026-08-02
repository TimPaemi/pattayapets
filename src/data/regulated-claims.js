"use strict";

/*
 * High-consequence facts used by the regulated and emergency guides.
 *
 * This is an editorial provenance ledger, not a substitute for a legal or clinical
 * review. Keep each claim narrow: one authority, one scope and one checked date.
 * Page prose may explain a claim in its own words, but should cite the matching ID
 * beside every load-bearing number, deadline, port or exception. `exampleConsumers`
 * is a non-exhaustive editorial discovery list, not a coverage declaration.
 * `sourceExcerpt` is a non-empty array of exact source fragments; `support` is
 * PattayaPets' scoped paraphrase.
 * `qualifiedReviewStatus` records missing specialist approval rather than implying it,
 * and `recheckBy` is the editorial hard-stop date for re-verification.
 */

const REGULATED_CLAIMS = Object.freeze({
  "TH-IMPORT-ID-2026-02": Object.freeze({
    jurisdiction: "Thailand",
    scope: "Dogs, cats and rabbits entering Thailand under the published Thai consular/DLD process",
    checkedAt: "2026-08-01",
    editorialReviewer: "SOL",
    editorialReviewerRole: "Editorial audit; source transcription and scope review",
    qualifiedReviewStatus: "No independent Thai import regulatory specialist review",
    recheckBy: "2026-11-01",
    sourceUrl: "https://thaiconsulatela.thaiembassy.org/en/publicservice/bringing-pets-to-thailand",
    sourceExcerpt: Object.freeze(["Microchip implantation certificate"]),
    sourceExcerptLanguage: "en",
    support: "The application requires the pet's microchip number and a microchip implantation certificate; vaccination records must carry the same number.",
    doesNotSupport: "No universal ISO 11784/11785, chip-before-rabies or automatic-revaccination rule is stated on this source.",
    exampleConsumers: [
      "/bring-pet-to-thailand/microchip-requirements.html",
      "/bring-pet-to-thailand/checklist.html",
      "/bring-pet-to-thailand/bring-a-dog-to-thailand.html",
      "/bring-pet-to-thailand/bring-a-cat-to-thailand.html"
    ]
  }),
  "TH-IMPORT-SEQUENCE-2026-02": Object.freeze({
    jurisdiction: "Thailand",
    scope: "The current Thai consular guide for dogs, cats and rabbits from the USA; other origins must confirm their AQS/origin authority",
    checkedAt: "2026-08-01",
    editorialReviewer: "SOL",
    editorialReviewerRole: "Editorial audit; source transcription and scope review",
    qualifiedReviewStatus: "No independent Thai import regulatory specialist review",
    recheckBy: "2026-11-01",
    sourceUrl: "https://thaiconsulatela.thaiembassy.org/en/publicservice/bringing-pets-to-thailand",
    sourceExcerpt: Object.freeze([
      "For all primary vaccines, animals must wait 21 days after vaccination before starting to apply for the import permit.",
      "Booster shots do not require the waiting period, but previous vaccination records must be submitted."
    ]),
    sourceExcerptLanguage: "en",
    support: "After all primary vaccines, wait 21 days before starting the import-permit application; documented boosters are exempt; complete applications need 5-7 Thailand business days.",
    exampleConsumers: [
      "/bring-pet-to-thailand/",
      "/bring-pet-to-thailand/rabies-vaccination-titer-test.html",
      "/bring-pet-to-thailand/import-permit-thailand-dld.html",
      "/bring-pet-to-thailand/checklist.html"
    ]
  }),
  "TH-IMPORT-WINDOW-2026-02": Object.freeze({
    jurisdiction: "Thailand",
    scope: "The current Thai consular guide for dogs, cats and rabbits travelling from the USA",
    checkedAt: "2026-08-01",
    editorialReviewer: "SOL",
    editorialReviewerRole: "Editorial audit; source transcription and scope review",
    qualifiedReviewStatus: "No independent Thai import regulatory specialist review",
    recheckBy: "2026-11-01",
    sourceUrl: "https://thaiconsulatela.thaiembassy.org/en/publicservice/bringing-pets-to-thailand",
    sourceExcerpt: Object.freeze([
      "at least 7 days (and no more than 60 days) prior to your departure"
    ]),
    sourceExcerptLanguage: "en",
    support: "Apply for the import permit 7-60 days before departure; the guide recommends about 30 days and provides the destination AQS submission contacts.",
    doesNotSupport: "This source does not establish the same application window or intake channel for every origin and route.",
    exampleConsumers: [
      "/bring-pet-to-thailand/import-permit-thailand-dld.html",
      "/bring-pet-to-thailand/from-usa.html"
    ]
  }),
  "TH-ARRIVAL-INSPECTION-2026-02": Object.freeze({
    jurisdiction: "Thailand",
    scope: "Arrival controls and import-licence fee in the current Thai consular guide for dogs, cats and rabbits from the USA",
    checkedAt: "2026-08-01",
    editorialReviewer: "SOL",
    editorialReviewerRole: "Editorial audit; source transcription and scope review",
    qualifiedReviewStatus: "No independent Thai import regulatory specialist review",
    recheckBy: "2026-11-01",
    sourceUrl: "https://thaiconsulatela.thaiembassy.org/en/publicservice/bringing-pets-to-thailand",
    sourceExcerpt: Object.freeze(["A fee of 500 baht per animal will be charged."]),
    sourceExcerptLanguage: "en",
    support: "The animal and original documents are presented to the AQS on arrival; the guide states a 500-baht import-licence fee per animal.",
    doesNotSupport: "The source does not guarantee same-day release or state a universal three-day arrival-confirmation rule.",
    exampleConsumers: [
      "/bring-pet-to-thailand/arrival-suvarnabhumi-airport.html",
      "/bring-pet-to-thailand/thailand-pet-quarantine.html",
      "/bring-pet-to-thailand/checklist.html"
    ]
  }),
  "TH-EXPORT-SEQUENCE-2025-10": Object.freeze({
    jurisdiction: "Thailand",
    scope: "DLD Region 9's published pet-export sequence; the responsible departure AQS must confirm its own application intake",
    checkedAt: "2026-08-01",
    editorialReviewer: "SOL",
    editorialReviewerRole: "Editorial audit; Thai-source transcription and scope review",
    qualifiedReviewStatus: "No independent Thai export regulatory specialist or certified translator review",
    recheckBy: "2026-11-01",
    sourceUrl: "https://region9.dld.go.th/index.php/th/news-head/phey-phaer-khwam-ru-dan-psusatw/khan-txn-kar-sng-satw-leiyng-sunakh-maew-nk-l-xxk-nxk-rach-xanacakr",
    sourceExcerpt: Object.freeze([
      "ยื่นคำร้องขอส่งสัตว์ออก (แบบ ร.1/1)",
      "ตรวจสุขภาพสัตว์ก่อนการเดินทางไม่เกิน 2-3 วัน",
      "ด่าน ฯ ออกใบอนุญาตส่งสัตว์ออก (แบบ ร.9) พร้อมเอกสารรับรองสุขภาพสัตว์ (HEALTH CERTIFICATE)"
    ]),
    sourceExcerptLanguage: "th",
    support: "Submit R1/1, present the animal for a health examination no more than 2-3 days before travel, then the station issues R9 and the health certificate.",
    doesNotSupport: "The page does not state a universal email intake, 15-day application deadline or three-day flight-confirmation rule.",
    exampleConsumers: [
      "/take-pet-out-of-thailand/",
      "/take-pet-out-of-thailand/export-process.html",
      "/take-pet-out-of-thailand/export-permit-thailand-dld.html",
      "/take-pet-out-of-thailand/checklist.html"
    ]
  }),
  "AU-NONAPPROVED-PATH-2026-08": Object.freeze({
    jurisdiction: "Australia",
    scope: "Dogs and cats originating in a country not approved for direct import, including Thailand; returning-Australian exceptions require DAFF case assessment",
    checkedAt: "2026-08-01",
    editorialReviewer: "SOL",
    editorialReviewerRole: "Editorial audit; source transcription and scope review",
    qualifiedReviewStatus: "No independent Australian biosecurity specialist review",
    recheckBy: "2026-11-01",
    sourceUrl: "https://www.agriculture.gov.au/biosecurity-trade/cats-dogs/frequently-asked-questions",
    sourceExcerpt: Object.freeze([
      "continuous residence in an approved Group 1, 2 or 3 country for at least 180 consecutive days immediately before export",
      "all testing and vaccination requirements take place in an approved country"
    ]),
    sourceExcerptLanguage: "en",
    support: "The animal must first reside continuously in an approved Group 1, 2 or 3 country for at least 180 consecutive days; required vaccination and testing take place in the approved country.",
    exampleConsumers: [
      "/take-pet-out-of-thailand/to-australia.html",
      "/bring-pet-to-thailand/from-australia.html"
    ]
  }),
  "KR-PET-ENTRY-AIP-2024-10": Object.freeze({
    jurisdiction: "South Korea",
    scope: "Passenger import of dogs and cats under Korea's published AIP",
    checkedAt: "2026-08-01",
    editorialReviewer: "SOL",
    editorialReviewerRole: "Editorial audit; source transcription and scope review",
    qualifiedReviewStatus: "No independent Korean quarantine specialist review",
    recheckBy: "2026-11-01",
    sourceUrl: "https://aim.koca.go.kr/eaipPub/Package/2024-10-17/html/eAIP/KR-GEN-1.4-en-GB.html",
    sourceExcerpt: Object.freeze([
      "Animal health certificate must clearly provide microchip mumber and rabies antibody neutralization test results(0.5IU/ml≥)",
      "The pets less than 90 days olds or from rabies-free countries are exempted for rabies antibody neutralization test",
      "In the case of importing more than 10 dogs or cats, a permission from the Animal and Plant Quarantine Agency(APQA) is required in advance"
    ]),
    sourceExcerptLanguage: "en",
    support: "The health certificate records the microchip and a rabies neutralising-antibody result of at least 0.5 IU/ml; pets under 90 days or from rabies-free countries are exempt; more than 10 dogs or cats need advance APQA permission.",
    exampleConsumers: [
      "/take-pet-out-of-thailand/to-south-korea.html",
      "/bring-pet-to-thailand/from-south-korea.html"
    ]
  }),
  "KR-PET-ENTRY-MOFA-2023-12": Object.freeze({
    jurisdiction: "South Korea",
    scope: "Korean MOFA embassy guidance for dogs and cats; conflicts with the AIP at exactly ten animals",
    checkedAt: "2026-08-01",
    editorialReviewer: "SOL",
    editorialReviewerRole: "Editorial audit; source transcription and scope review",
    qualifiedReviewStatus: "No independent Korean quarantine specialist review; exact-ten conflict remains unresolved",
    recheckBy: "2026-11-01",
    sourceUrl: "https://overseas.mofa.go.kr/no-en/brd/m_25180/view.do?seq=9",
    sourceExcerpt: Object.freeze([
      "The test must be done at an internationally approved laboratory or the competent authorities of the exporting country within 24 months prior to boarding.",
      "Travelers bringing ten or more cats and/or dogs to Korea must submit an advance notification form"
    ]),
    sourceExcerptLanguage: "en",
    support: "The embassy page says ten or more animals need advance approval and the antibody test must be within 24 months before boarding.",
    exampleConsumers: [
      "/take-pet-out-of-thailand/to-south-korea.html",
      "/bring-pet-to-thailand/from-south-korea.html"
    ]
  }),
  "MY-CARGO-CONSIGNMENT-2026-08": Object.freeze({
    jurisdiction: "Malaysia",
    scope: "Import of dogs and cats from Thailand into Malaysia by cargo consignment",
    checkedAt: "2026-08-01",
    editorialReviewer: "SOL",
    editorialReviewerRole: "Editorial audit; Malay-source transcription and scope review",
    qualifiedReviewStatus: "No independent Malaysian DVS specialist or certified translator review",
    recheckBy: "2026-11-01",
    sourceUrl: "https://www.dvs.gov.my/index.php/pages/view/804?mid=53",
    sourceExcerpt: Object.freeze([
      "Haiwan peliharaan hanya boleh diimport sebagai kargo pengiriman"
    ]),
    sourceExcerptLanguage: "ms",
    support: "Pets are imported as consignment cargo and declared to the Animal Quarantine Officer.",
    exampleConsumers: ["/take-pet-out-of-thailand/to-malaysia.html"]
  }),
  "MY-NONSCHEDULED-CONTROLS-2026-03": Object.freeze({
    jurisdiction: "Malaysia",
    scope: "Dogs and cats from Thailand entering Malaysia under the reviewed non-scheduled-country cargo-consignment pathway",
    checkedAt: "2026-08-01",
    editorialReviewer: "SOL",
    editorialReviewerRole: "Editorial audit; source transcription and scope review",
    qualifiedReviewStatus: "No independent Malaysian DVS specialist review; accompanied mode remains unresolved",
    recheckBy: "2026-11-01",
    sourceUrl: "https://www.dvs.gov.my/dvs/resources/user_1/2026/BKPBV/IMPORT%20EKSPORT/%28R2%29-CatsNdogs-NONSCHEDULED_COUNTRIES-revised131213_notis_2.pdf",
    sourceExcerpt: Object.freeze([
      "The consignment of animals shall be accompanied by a valid import permit issued by Malaysian Quarantine and Inspection Services Department (MAQIS)",
      "The animal shall be identified using an ISO (Std 11784 & 11785) compliant microchip.",
      "within seven (7) days immediately prior to export",
      "detained in quarantine for compulsory period of not less than seven (7) days",
      "the quarantine period can be extended up to six (6) months based on risk assessment on a case to case basis."
    ]),
    sourceExcerptLanguage: "en",
    support: "The protocol requires an import permit, ISO-compatible microchip, government veterinary health certificate based on an examination within seven days before export, and compulsory quarantine for at least seven days; DVS may extend quarantine up to six months case by case.",
    doesNotSupport: "This reviewed protocol does not establish the pathway for an accompanied cabin or checked-baggage pet.",
    exampleConsumers: ["/take-pet-out-of-thailand/to-malaysia.html"]
  }),
  "IATA-CR1-ED52-2026-01": Object.freeze({
    jurisdiction: "International air transport",
    scope: "Dogs and cats transported under IATA Container Requirement 1, Edition 52",
    checkedAt: "2026-08-01",
    editorialReviewer: "SOL",
    editorialReviewerRole: "Editorial audit; source transcription and scope review",
    qualifiedReviewStatus: "No independent live-animal air-cargo specialist review",
    recheckBy: "2026-11-01",
    sourceUrl: "https://www.iata.org/contentassets/b0016da92c86449f850fe9560827bbea/pet-container-requirements.pdf",
    sourceExcerpt: Object.freeze([
      "EDITION 52, JANUARY 2026",
      "Snub-nosed breeds require 10% larger container.",
      "IATA does not certify, approve, endorse, or sell any particular pet container manufacturer, brand, make, or model.",
      "Check-in staff are responsible for ensuring the container meets the IATA LAR requirements."
    ]),
    sourceExcerptLanguage: "en",
    support: "CR1 covers construction, metal fasteners, ventilation, safe openings, spacers, bedding, water, labels and animal-fit dimensions; snub-nosed animals require 10% larger dimensions.",
    exampleConsumers: ["/bring-pet-to-thailand/airline-pet-policies.html"]
  }),
  "TH-AQS-MAP-2025-10": Object.freeze({
    jurisdiction: "Thailand",
    scope: "DLD's map of 59 Animal Quarantine Stations, published 8 October 2025",
    checkedAt: "2026-08-01",
    editorialReviewer: "SOL",
    editorialReviewerRole: "Editorial audit; complete station-list review",
    qualifiedReviewStatus: "No independent DLD confirmation or certified translator review; source-list absence is not proof of impossibility",
    recheckBy: "2026-11-01",
    sourceUrl: "https://aqi-new.dld.go.th/index.php/th/news-head/mapaqithai",
    sourceExcerpt: Object.freeze(["แผนที่ด่านกักกันสัตว์ 59 ด่าน ฉบับภาษาไทย"]),
    sourceExcerptLanguage: "th",
    sourceEvidenceNote: "The complete published list was checked for U-Tapao and Rayong-airport names; an absence cannot itself be quoted as a sentence.",
    support: "The published station map does not list U-Tapao or a Rayong airport Animal Quarantine Station.",
    exampleConsumers: ["/bring-pet-to-thailand/u-tapao-airport-pets.html"]
  }),
  "TH-USA-AIRPORTS-2025-01": Object.freeze({
    jurisdiction: "Thailand",
    scope: "Dogs, cats and rabbits arriving from the USA under the revised 30 January 2025 consular instruction",
    checkedAt: "2026-08-01",
    editorialReviewer: "SOL",
    editorialReviewerRole: "Editorial audit; complete airport-list review",
    qualifiedReviewStatus: "No independent DLD confirmation; source is expressly USA-origin only",
    recheckBy: "2026-11-01",
    sourceUrl: "https://image.mfa.go.th/mfa/0/91fPdh6NtO/About-Thailand/Bringing_Pets_to_Thailand/All_Airports_-_Instructions_for_Bringing_Dog-Cat-Rabbit_into_Thailand_from_the_USA_%28Revised_30Jan2025%29.pdf",
    sourceExcerpt: Object.freeze([
      "Suvarnabhumi International Airport",
      "Don Mueang International Airport",
      "Chiang Mai International Airport",
      "Phuket International Airport",
      "Samui International Airport",
      "Krabi International Airport"
    ]),
    sourceExcerptLanguage: "en",
    sourceEvidenceNote: "The complete six-airport list was checked for U-Tapao; list absence does not establish that no later case-specific service exists.",
    support: "The instruction names Suvarnabhumi, Don Mueang, Chiang Mai, Phuket, Samui and Krabi/Trang; it does not name U-Tapao.",
    exampleConsumers: ["/bring-pet-to-thailand/u-tapao-airport-pets.html"]
  }),
  "GB-RABIES-BLOOD-2026-08": Object.freeze({
    jurisdiction: "Great Britain",
    scope: "Non-commercial dogs, cats and ferrets entering Great Britain from a non-EU country that is not listed, including Thailand under the checked GOV.UK list",
    checkedAt: "2026-08-01",
    editorialReviewer: "SOL",
    editorialReviewerRole: "Editorial audit; source transcription, list check and scope review",
    qualifiedReviewStatus: "No independent APHA pet-travel specialist review",
    recheckBy: "2026-11-01",
    sourceUrl: "https://www.gov.uk/bring-pet-to-great-britain/rabies-blood-tests",
    sourceExcerpt: Object.freeze([
      "at least 30 days after the rabies vaccination",
      "rabies antibody level of at least 0.5 IU/ml",
      "You must wait 3 months from the date the blood sample was taken before you travel.",
      "The blood test will continue to be valid as long as your pet’s rabies vaccinations are kept up to date."
    ]),
    sourceExcerptLanguage: "en",
    sourceEvidenceNote: "The GOV.UK listed-country table was checked for Thailand; its absence is a classification check, not a quoted sentence.",
    support: "For the checked non-listed route, sample at least 30 days after rabies vaccination, use an approved laboratory, require at least 0.5 IU/ml and wait three months from sampling; the test stays valid while rabies cover remains continuous.",
    doesNotSupport: "The source does not establish airline acceptance, a Thai export process or eligibility for the pre-departure EU/GB exception in an individual case.",
    exampleConsumers: [
      "/take-pet-out-of-thailand/to-uk.html",
      "/bring-pet-to-thailand/from-uk.html"
    ]
  }),
  "GB-TAPEWORM-2026-08": Object.freeze({
    jurisdiction: "Great Britain",
    scope: "Dogs entering Great Britain from Thailand under the ordinary pet-travel route",
    checkedAt: "2026-08-01",
    editorialReviewer: "SOL",
    editorialReviewerRole: "Editorial audit; source transcription and scope review",
    qualifiedReviewStatus: "No independent APHA pet-travel specialist review",
    recheckBy: "2026-11-01",
    sourceUrl: "https://www.gov.uk/bring-pet-to-great-britain/tapeworm-treatment-dogs",
    sourceExcerpt: Object.freeze([
      "no less than 24 hours before you enter Great Britain",
      "no more than 5 days (120 hours) before you enter Great Britain"
    ]),
    sourceExcerptLanguage: "en",
    support: "A veterinarian must administer and record a qualifying tapeworm treatment no less than 24 hours and no more than 120 hours before the dog enters Great Britain.",
    doesNotSupport: "The source does not apply this treatment requirement to cats or ferrets.",
    exampleConsumers: [
      "/take-pet-out-of-thailand/to-uk.html",
      "/bring-pet-to-thailand/from-uk.html"
    ]
  }),
  "GB-AIR-ROUTE-2026-08": Object.freeze({
    jurisdiction: "Great Britain",
    scope: "Ordinary pet dogs, cats and ferrets entering Great Britain by air",
    checkedAt: "2026-08-01",
    editorialReviewer: "SOL",
    editorialReviewerRole: "Editorial audit; source transcription and route-scope review",
    qualifiedReviewStatus: "No independent APHA or live-animal carrier specialist review; live carrier space was not checked",
    recheckBy: "2026-11-01",
    sourceUrl: "https://www.gov.uk/bring-pet-to-great-britain/travel-routes-pets",
    sourceExcerpt: Object.freeze([
      "Check the ‘approved routes’ before you travel - they can change",
      "Pets have to travel as cargo on a plane unless:",
      "you’re flying on a chartered private plane",
      "you’re travelling with a guide or assistance dog"
    ]),
    sourceExcerptLanguage: "en",
    support: "Use a currently approved route and company; an ordinary pet arriving by plane travels as cargo, with stated exceptions for chartered private planes and guide or assistance dogs.",
    doesNotSupport: "The source does not guarantee a particular Thailand service, flight, carrier or space.",
    exampleConsumers: ["/take-pet-out-of-thailand/to-uk.html"]
  }),
  "EU-RABIES-TITER-2026-08": Object.freeze({
    jurisdiction: "European Union",
    scope: "Non-commercial dogs, cats and ferrets entering the EU from Thailand under the current non-listed-third-country route",
    checkedAt: "2026-08-01",
    editorialReviewer: "SOL",
    editorialReviewerRole: "Editorial audit; source transcription, list check and scope review",
    qualifiedReviewStatus: "No independent EU pet-movement regulatory specialist review",
    recheckBy: "2026-11-01",
    sourceUrl: "https://food.ec.europa.eu/animals/live-animal-movements/dogs-cats-and-ferrets/eu-legislation/non-commercial-movement-non-eu-countries_en",
    sourceExcerpt: Object.freeze([
      "at least 30 days after the date of the primary vaccination",
      "not less than 90 days before the date of issue of the animal health certificate",
      "equal to or greater than 0,5 IU/ml",
      "The three-month period shall not apply to the re-entry of a pet animal residing habitually in the EU"
    ]),
    sourceExcerptLanguage: "en",
    sourceEvidenceNote: "The current Commission no-titer country lists were checked for Thailand; list absence is not itself a quoted sentence.",
    support: "The current route requires a designated-laboratory rabies antibody test of at least 0.5 IU/ml, sampled at least 30 days after primary vaccination or within a current valid series and at least 90 days before certificate issue; continuous timely revaccination preserves a satisfactory test.",
    doesNotSupport: "The re-entry exception requires the EU passport to document the favourable test before departure; this record does not decide uncertain histories or commercial movements.",
    exampleConsumers: [
      "/take-pet-out-of-thailand/to-eu.html",
      "/bring-pet-to-thailand/from-eu.html",
      "/take-pet-out-of-thailand/to-germany.html"
    ]
  }),
  "EU-NONCOMMERCIAL-ENTRY-2026-08": Object.freeze({
    jurisdiction: "European Union",
    scope: "Non-commercial movement of pet dogs, cats and ferrets into the EU from a non-EU country",
    checkedAt: "2026-08-01",
    editorialReviewer: "SOL",
    editorialReviewerRole: "Editorial audit; source transcription and movement-scope review",
    qualifiedReviewStatus: "No independent EU pet-movement regulatory specialist review",
    recheckBy: "2026-11-01",
    sourceUrl: "https://food.ec.europa.eu/animals/live-animal-movements/dogs-cats-and-ferrets/bringing-pet-eu-non-eu-country_en",
    sourceExcerpt: Object.freeze([
      "valid for 10 days from the date of issue",
      "must pass through a travellers' point of entry designated by each EU country",
      "The maximum number of pet animals",
      "is 5 in a single vehicle"
    ]),
    sourceExcerptLanguage: "en",
    support: "The non-commercial route ordinarily uses an animal health certificate valid for 10 days to the designated travellers’ point-of-entry check and allows up to five pets, subject to the published exceptions and owner-travel conditions.",
    doesNotSupport: "The source does not make a commercial consignment, sale, ownership transfer or every movement of more than five animals non-commercial.",
    exampleConsumers: [
      "/take-pet-out-of-thailand/to-eu.html",
      "/bring-pet-to-thailand/from-eu.html"
    ]
  }),
  "US-CDC-THAILAND-RISK-2026-08": Object.freeze({
    jurisdiction: "United States",
    scope: "CDC dog-rabies risk classification for dogs that have been in Thailand during the six months before US entry",
    checkedAt: "2026-08-01",
    editorialReviewer: "SOL",
    editorialReviewerRole: "Editorial audit; complete country-list check and scope review",
    qualifiedReviewStatus: "No independent CDC dog-import specialist review",
    recheckBy: "2026-11-01",
    sourceUrl: "https://www.cdc.gov/importation/dogs/high-risk-countries.html",
    sourceExcerpt: Object.freeze(["Thailand"]),
    sourceExcerptLanguage: "en",
    support: "Thailand appears on CDC’s current high-risk countries list for dog rabies.",
    doesNotSupport: "Country classification alone does not determine the pathway without the dog’s six-month travel and vaccination history.",
    exampleConsumers: [
      "/take-pet-out-of-thailand/to-usa.html",
      "/bring-pet-to-thailand/from-usa.html"
    ]
  }),
  "US-CDC-FOREIGN-HIGH-RISK-2026-08": Object.freeze({
    jurisdiction: "United States",
    scope: "Foreign-vaccinated dogs that have been in a CDC high-risk country during the six months before US entry",
    checkedAt: "2026-08-01",
    editorialReviewer: "SOL",
    editorialReviewerRole: "Editorial audit; source transcription and pathway-scope review",
    qualifiedReviewStatus: "No independent CDC dog-import specialist review",
    recheckBy: "2026-11-01",
    sourceUrl: "https://www.cdc.gov/importation/dogs/foreign-vaccinated-high-risk-countries.html",
    sourceExcerpt: Object.freeze([
      "A Certification of Foreign Rabies Vaccination and Microchip form.",
      "If you do not have a valid rabies serology titer, this must include a 28-day quarantine reservation.",
      "at least 30 days after the dog’s first valid rabies vaccination",
      "at least 28 days before entry to the United States"
    ]),
    sourceExcerptLanguage: "en",
    support: "The pathway requires the endorsed foreign-rabies/microchip form, CDC Dog Import Form receipt, CDC-registered facility reservation and direct arrival at its airport; no valid CDC-approved-lab titer adds a 28-day quarantine reservation. The dog must also meet CDC’s age, health, microchip and timing rules.",
    doesNotSupport: "The pathway does not apply unchanged to US-vaccinated dogs, dogs without relevant high-risk travel, cats or service-dog sea-arrival exceptions.",
    exampleConsumers: [
      "/take-pet-out-of-thailand/to-usa.html",
      "/bring-pet-to-thailand/from-usa.html"
    ]
  }),
  "JP-NONDESIGNATED-ENTRY-2026-08": Object.freeze({
    jurisdiction: "Japan",
    scope: "Dogs and cats entering Japan from non-designated regions, including Thailand under the checked MAFF designated-region list",
    checkedAt: "2026-08-01",
    editorialReviewer: "SOL",
    editorialReviewerRole: "Editorial audit; source transcription, list check and scope review",
    qualifiedReviewStatus: "No independent Japanese AQS import specialist review",
    recheckBy: "2026-11-01",
    sourceUrl: "https://www.maff.go.jp/aqs/english/animal/dog/import-other.html",
    sourceExcerpt: Object.freeze([
      "vaccinated against rabies twice or more after the microchip implanting",
      "Antibody titer against rabies must be equal to or greater than 0.5 IU/ml.",
      "arrive in Japan after 180 days have passed from the date of blood sampling",
      "not less than 40 days before arrival in Japan"
    ]),
    sourceExcerptLanguage: "en",
    sourceEvidenceNote: "The MAFF designated-region list was checked for Thailand; its absence is a classification check, not a quoted sentence.",
    support: "For the non-designated route, microchip before two or more qualifying rabies vaccinations, sample after the second vaccination at a MAFF-designated lab with at least 0.5 IU/ml, arrive after 180 days from sampling and notify the arrival-port AQS at least 40 days before arrival.",
    doesNotSupport: "This record does not guarantee acceptance of a particular vaccine, laboratory, port, certificate or notification, or promise a fixed inspection duration.",
    exampleConsumers: [
      "/take-pet-out-of-thailand/to-japan.html",
      "/bring-pet-to-thailand/from-japan.html"
    ]
  }),
  "SG-SCHEDULE-III-ENTRY-2026-08": Object.freeze({
    jurisdiction: "Singapore",
    scope: "Dogs and cats entering Singapore from a Schedule III country or region, including Thailand under the current AVS category page",
    checkedAt: "2026-08-01",
    editorialReviewer: "SOL",
    editorialReviewerRole: "Editorial audit; current AVS category-page check, source transcription and scope review",
    qualifiedReviewStatus: "No independent Singapore AVS import specialist review",
    recheckBy: "2026-11-01",
    sourceUrl: "https://avs.nparks.gov.sg/pets/importing-exporting-a-pet/import/dogs-and-cats/",
    sourceExcerpt: Object.freeze([
      "at least 28 days after a valid vaccination against rabies",
      "at least 90 days and within 12 months prior to the date of export",
      "post-arrival quarantine of at least 30-days at AQC is required",
      "ensuring that a quarantine space has been booked"
    ]),
    sourceExcerptLanguage: "en",
    sourceEvidenceNote: "AVS’s current import page, last updated 18 June 2026, was checked on 2026-08-01; Thailand is not in its Schedule I or II lists and therefore falls under the published Schedule III definition.",
    support: "The Schedule III route requires valid rabies vaccination, a qualifying approved-lab serology sample at least 28 days later and 90 days to 12 months before export, at least 0.5 IU/ml, relevant licences, a booked AQC space, arrival vaccination and at least 30 days’ quarantine.",
    doesNotSupport: "The source does not guarantee quarantine space, airline acceptance or that Thailand’s category will remain unchanged.",
    exampleConsumers: [
      "/take-pet-out-of-thailand/to-singapore.html",
      "/bring-pet-to-thailand/from-singapore.html"
    ]
  }),
  "CN-GACC-PET-ENTRY-2019-05": Object.freeze({
    jurisdiction: "China",
    scope: "One accompanied personal pet dog or cat per traveller entering China under GACC Announcement No. 5 (2019)",
    checkedAt: "2026-08-01",
    editorialReviewer: "SOL",
    editorialReviewerRole: "Editorial audit; official English-reference transcription and scope review",
    qualifiedReviewStatus: "No independent GACC import specialist or certified Chinese translation review; Chinese text controls",
    recheckBy: "2026-11-01",
    sourceUrl: "https://english.beijing.gov.cn/latest/lawsandpolicies/202104/t20210407_2346645.html",
    sourceExcerpt: Object.freeze([
      "one dog or one cat",
      "for each person per entry",
      "quarantined for 30 days",
      "antibody titer or immune antibody must be above 0.5 IU/ml"
    ]),
    sourceExcerptLanguage: "en",
    support: "The accompanied-pet framework allows one dog or cat per person per entry and requires official quarantine and rabies-vaccination certificates plus a microchip. A non-designated-origin pet can avoid 30-day isolation only with an effective chip, accepted-lab titer above 0.5 IU/ml and a passed on-site inspection.",
    doesNotSupport: "The announcement does not establish a universal two-vaccination interval, the current origin list, live port capability, airline mode or titer-report validity period.",
    exampleConsumers: [
      "/take-pet-out-of-thailand/to-china.html",
      "/bring-pet-to-thailand/from-china.html"
    ]
  }),
  "CN-THAILAND-ENTRY-2025-10": Object.freeze({
    jurisdiction: "China",
    scope: "Shanghai Customs’ current operational guidance for accompanied pet dogs and cats arriving from Thailand",
    checkedAt: "2026-08-01",
    editorialReviewer: "SOL",
    editorialReviewerRole: "Editorial audit; current Shanghai Customs source transcription and Thailand-scope review",
    qualifiedReviewStatus: "No independent GACC or arrival-port import specialist review; port-level determination remains controlling",
    recheckBy: "2026-11-01",
    sourceUrl: "https://english.shanghai.gov.cn/en-KeepingAPetInShanghai/20240927/988d600b49964546b41d3c342e4ebdb2.html",
    sourceExcerpt: Object.freeze([
      "A second vaccination is only required if your pet needs a new rabies antibody test.",
      "clinical health examination performed within 14 days of arrival",
      "Thailand, which has no labs approved by Chinese Customs",
      "Pets from non-designated countries without a valid rabies titer test will be subject to a 30-day quarantine"
    ]),
    sourceExcerptLanguage: "en",
    support: "The checked Shanghai Customs guide treats Thailand under the non-designated preparation route, requires the clinical examination within 14 days, and says a second rabies vaccination is only required when a new titer is needed; the accepted report must meet its current timing, laboratory, identifier and result conditions.",
    doesNotSupport: "This source does not support a universal 30-day interval between two vaccinations, private serum submission, guaranteed waiver or live capability at every Chinese port.",
    exampleConsumers: [
      "/take-pet-out-of-thailand/to-china.html",
      "/bring-pet-to-thailand/from-china.html"
    ]
  }),
  "RVC-HEATSTROKE-2023": Object.freeze({
    jurisdiction: "Veterinary clinical guidance",
    scope: "Canine heat-related illness; treatment varies with age, health and consciousness and is not generalized to cats",
    checkedAt: "2026-08-01",
    editorialReviewer: "SOL",
    editorialReviewerRole: "Editorial audit; source transcription and species-scope review",
    qualifiedReviewStatus: "No licensed veterinarian has reviewed the PattayaPets emergency guidance",
    recheckBy: "2026-11-01",
    sourceUrl: "https://www.rvc.ac.uk/vetcompass/news/the-rvc-urges-owners-of-hot-dogs-to-cool-first-transport-second",
    sourceExcerpt: Object.freeze([
      "cool first, transport second",
      "cold water immersion for young, healthy dogs",
      "pouring water of any temperature that is cooler than the dog over them combined with air movement",
      "for older dogs or dogs with underlying health problems"
    ]),
    sourceExcerptLanguage: "en",
    support: "RVC says cool first and transport second, and distinguishes cold-water immersion for young healthy conscious dogs from cooler-than-dog water plus airflow for older or unwell dogs.",
    exampleConsumers: ["/pet-emergency/heatstroke.html"]
  })
});

function claimLink(id, label, sourceUrl) {
  const claim = REGULATED_CLAIMS[id];
  if (!claim) throw new Error("Unknown regulated claim: " + id);
  const href = sourceUrl || claim.sourceUrl;
  return '<a href="' + href + '" target="_blank" rel="noopener" data-claim-id="' +
    id + '">' + label + "</a>";
}

const REGULATED_IMPORT_PATTAYA_ARRIVAL = Object.freeze({
  h: "After the AQS inspection — reaching Pattaya",
  html:
    "<p>DLD decides clearance, detention or other action after inspecting the animal " +
    "and original documents; no reviewed source guarantees same-day release. After " +
    "clearance, arrange a road vehicle that explicitly accepts the animal and crate. " +
    "The reviewed DLD map does not list a U-Tapao/Rayong airport AQS, but absence from " +
    "the map is not proof that no later case-specific service exists. Obtain written " +
    "DLD confirmation before routing there. " +
    claimLink("TH-AQS-MAP-2025-10", "DLD AQS map") + ".</p>"
});

const REGULATED_IMPORT_PATTAYA_LIFE = Object.freeze({
  h: "Settling in Pattaya",
  html:
    "<p>Confirm pet-friendly housing, save a local veterinary contact and discuss " +
    "heat and parasite prevention with a veterinarian. Keep every stamped AQS record. " +
    "For a later UK or EU journey, check the destination&rsquo;s titer rules. Australia " +
    "instead requires an approved-country pathway under the standard non-approved-origin " +
    "route. " + claimLink("AU-NONAPPROVED-PATH-2026-08", "DAFF FAQ") + ".</p>"
});

const REGULATED_IMPORT_EXTRA_FAQS = Object.freeze([
  Object.freeze([
    "Which airport is better for Pattaya — BKK or U-Tapao?",
    "<p>Suvarnabhumi is documented in the reviewed sources. Those sources do not establish " +
      "a U-Tapao pet-import AQS, so use U-Tapao only after written DLD confirmation.</p>"
  ]),
  Object.freeze([
    "What should I do after reaching Pattaya?",
    "<p>Confirm housing, save a local vet, keep every AQS document and ask a veterinarian " +
      "about heat and parasite prevention for the individual animal.</p>"
  ]),
  Object.freeze([
    "Will I need a titer test later?",
    "<p>That depends on the next destination. UK and EU routes can require a titer and wait. " +
      "Australia&rsquo;s standard route from a non-approved origin requires an approved " +
      "country first; do not assume a test performed in Thailand qualifies.</p>"
  ])
]);

const REGULATED_EXPORT_FROM_PATTAYA = Object.freeze({
  h: "Departing from Pattaya — confirm the port and DLD sequence",
  html:
    "<p>Ask the AQS responsible for the departure port how and when to file R1/1. The " +
    "reviewed DLD procedure does not establish a universal email intake, 15-day deadline " +
    "or separate three-day flight-confirmation rule. It requires the animal&rsquo;s health " +
    "examination no more than 2&ndash;3 days before travel; if compliant, the station " +
    "issues R9 and the health certificate. " +
    claimLink("TH-EXPORT-SEQUENCE-2025-10", "DLD procedure") + ". The reviewed DLD " +
    "map does not list a U-Tapao/Rayong airport AQS, so obtain written DLD confirmation " +
    "before routing there. " + claimLink("TH-AQS-MAP-2025-10", "DLD AQS map") + ".</p>"
});

const REGULATED_EXPORT_RELOCATION = Object.freeze({
  h: "Using an agent is optional",
  html:
    "<p>An agent cannot change government or airline rules. If you request assistance, " +
    "obtain an itemised scope and verify each regulated requirement directly with the " +
    "authority. PattayaPets has not independently measured agents&rsquo; prices, error rates " +
    "or outcomes.</p>"
});

const REGULATED_EXPORT_EXTRA_FAQS = Object.freeze([
  Object.freeze([
    "Can I fly my pet out of U-Tapao?",
    "<p>The reviewed DLD map does not list a U-Tapao/Rayong airport AQS. That is a " +
      "verification gap, not proof that no later service exists; obtain written DLD " +
      "confirmation before booking.</p>"
  ]),
  Object.freeze([
    "How should I plan the transfer to the departure airport?",
    "<p>Use a vehicle that accepts the animal and crate, confirm the airline&rsquo;s " +
      "check-in cut-off and leave route-specific contingency time.</p>"
  ]),
  Object.freeze([
    "Should I stay near the departure airport?",
    "<p>Decide from the confirmed examination appointment, airline check-in time and " +
      "road conditions. This guide has no evidence for a universal recommendation.</p>"
  ])
]);

module.exports = {
  REGULATED_CLAIMS,
  claimLink,
  REGULATED_IMPORT_PATTAYA_ARRIVAL,
  REGULATED_IMPORT_PATTAYA_LIFE,
  REGULATED_IMPORT_EXTRA_FAQS,
  REGULATED_EXPORT_FROM_PATTAYA,
  REGULATED_EXPORT_RELOCATION,
  REGULATED_EXPORT_EXTRA_FAQS
};
