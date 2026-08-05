# Local business evidence and publication ledger

Review date: 2026-08-05
Project class: OWNED PUBLICATION
Mode: IMPLEMENTATION

## Corpus and decision boundary

- Private evidence: 43 dossiers containing 239 source records.
- Existing public route boundary: 35 business-detail routes, all retained.
- Current public decisions: 21 PUBLISH, 12 HOLD and two REJECT.
- Dossier-only candidates: eight, all kept out of the public model.
- Contact decisions: 105 stored contact fields reviewed; 76 approved and 29 withheld.
- Coordinates and Maps links: none admitted because the review did not establish an exact source-and-rights basis for every coordinate or exact place.

PUBLISH means the exact entity/branch has usable current operator evidence and no unresolved material identity, locality or operating-state conflict. HOLD means the route remains but identifying facts, services, actions, contacts and business schema are suppressed. REJECT means the reviewed entity is outside the route's Pattaya scope; the frozen route remains as a clear outside-scope state pending a separately authorized URL/index decision.

## Existing route decisions

| Route | Decision | Narrow basis |
| --- | --- | --- |
| `/vets/thonglor-pet-hospital-pattaya.html` | PUBLISH | Current exact-branch operator page |
| `/vets/vetazoo-animal-and-exotic-pet-hospital.html` | PUBLISH | Current operator site/contact surface |
| `/vets/muang-ake-pet-hospital-pattaya.html` | PUBLISH | Current operator branch page |
| `/vets/pattaya-veterinary-clinic.html` | HOLD | Current operation not established to the admission standard |
| `/vets/pattaya-animal-hospital.html` | HOLD | Current operation not established to the admission standard |
| `/vets/pattaya-community-pet-hospital.html` | PUBLISH | Operator branch evidence plus current contact surface |
| `/vets/animal-army-hospital.html` | PUBLISH | Current operator site/contact surface |
| `/vets/siam-country-pet-hospital.html` | HOLD | Current operation not established to the admission standard |
| `/vets/north-pattaya-animal-hospital.html` | PUBLISH | Operator-controlled current surface plus corroboration |
| `/groomers/pattaya-city-pet-shop-grooming.html` | HOLD | Current operation not established to the admission standard |
| `/groomers/jaijai-grooming.html` | PUBLISH | Operator-controlled current surface plus corroboration |
| `/groomers/woof-pattaya.html` | PUBLISH | Operator-controlled current surface plus corroboration |
| `/groomers/furiday-pet-grooming.html` | HOLD | Discovery records do not establish current operation |
| `/groomers/furpet-grooming-and-hotel.html` | HOLD | Unverified lead |
| `/groomers/doggie-star-grooming-pattaya.html` | HOLD | Unverified lead |
| `/groomers/pet-passions-mobile-grooming.html` | REJECT | Operator material supports Hua Hin/other service scope, not Pattaya |
| `/boarding/pattaya-dog-stay.html` | PUBLISH | Operator-controlled current surface plus corroboration |
| `/boarding/elite-dog-resort.html` | PUBLISH | Current operator site |
| `/boarding/pattaya-dog-hotel.html` | PUBLISH | Current operator site/contact surface |
| `/boarding/pluto-luxury-pet-hotel-pattaya.html` | REJECT | Operator material supports Bangkok, not Pattaya |
| `/pet-shops/brand-dog-pattaya-pet-supplies.html` | HOLD | Current operation not established to the admission standard |
| `/pet-shops/petsmart-pattaya.html` | PUBLISH | Operator-controlled current surface plus corroboration |
| `/pet-shops/tong-ma-aquarium-and-pets-shop.html` | HOLD | Current operation not established to the admission standard |
| `/pet-shops/peturday-pattaya.html` | PUBLISH | Operator-controlled current surface plus corroboration |
| `/pet-shops/pattaya-pet-center.html` | HOLD | Current operation not established to the admission standard |
| `/trainers/k9-coach.html` | PUBLISH | Current operator site/contact surface |
| `/trainers/zoeta-dogsoul.html` | HOLD | Operator material conflicts with the claimed Pattaya service scope |
| `/trainers/k9-pattaya-dog-training-school.html` | PUBLISH | Current official Facebook URL plus independent identity evidence |
| `/pet-relocation/pet-relocation-thailand.html` | PUBLISH | Current operator site/contact surface |
| `/pet-relocation/relo4paws.html` | PUBLISH | Current operator site/contact surface |
| `/pet-relocation/united-pet-express.html` | PUBLISH | Current operator site/contact surface |
| `/pet-relocation/asia-relocation-pet-transport.html` | PUBLISH | Current operator Thailand pet-relocation and contact pages |
| `/pet-relocation/pawspective-relocations.html` | PUBLISH | Current operator site/contact surface |
| `/mobile-vets/mor-ja-pet-clinic-pattaya.html` | HOLD | Human exact-entity/current-operation verification still required |
| `/mobile-vets/baan-mor-raksasat-animal-hospital-pattaya.html` | PUBLISH | Current operator-controlled surface plus corroboration |

## Dossier-only candidates

| Candidate | Decision | Reason |
| --- | --- | --- |
| Better Pets Hospital | HOLD-CONFLICT | Stored price/vaccination evidence conflicts; no safe public wording admitted |
| Chaiyapornwithi Vet Clinic | HOLD | Exact current branch/operation decision incomplete |
| Nana Pet Clinic | HOLD | Exact current branch/operation decision incomplete |
| Nern Plub Wan Animal Hospital | HOLD | Exact current branch/operation decision incomplete |
| Pakana Animal Hospital | HOLD | Exact current branch/operation decision incomplete |
| Pet Buddy Animal Clinic | HOLD | Exact current branch/operation decision incomplete |
| Sri Sara Animal Hospital | HOLD | Exact current branch/operation decision incomplete |
| Vet Pro Veterinary Clinic Sattahip | HOLD | Sattahip/locality and current-publication scope need an explicit decision |

No route was created for a dossier-only candidate.

## Field-level contact controls

`src/data/business-contact-publication.js` is the versioned publication-permission ledger. Stored data is withheld by default. A field renders only when the exact slug and field have an approved `public-business` classification, source, basis and review date. HOLD and REJECT records publish no contact value, service list, business action or LocalBusiness-family schema.

Two stale actions were corrected:

- K9 Pattaya Dog Training School: `https://www.facebook.com/SJk9Pattaya/`.
- Asia Relocation pet transport: `https://www.asia-relocation.com/thailand/moving/pet-relocation/`.

The private dossier corpus still contains legacy shapes and incomplete embedded decision metadata. That migration debt is reported as advisory only; it does not bypass the separate live ledger or renderer gate.

## Unresolved human/external decisions

- Tim/operator verification for Mor Ja and any other held exact entity.
- Permission to make any later route/index/canonical decision for the two outside-scope records.
- Exact source-and-rights review before adding coordinates or Maps actions.
- Operator confirmation before publishing hours, 24-hour/emergency claims or services that are not already supported by the admitted field/model evidence.
