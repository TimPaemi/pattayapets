# Visit brief template — generate on the day

Do not use a static route, phone, address, opening hour or service claim from this file. Those
facts change. Before each visit, generate one brief from the approved public record and matching
dossier, then have the operator sign it.

## Pre-visit gate

- [ ] Public slug and dossier match one-to-one.
- [ ] `operatingStatus` is current enough for the approved policy.
- [ ] `publishState` permits a visit; the record is not held, rejected or HUMAN QUEUE.
- [ ] Address and arrival instructions come from a current approved source.
- [ ] Booking channel is classified as a public-business contact and approved for use.
- [ ] The planned purchase is ordinary, non-clinical where possible and causes no unnecessary
      procedure or treatment for an animal.
- [ ] Reviewer, operator and business have no undisclosed relationship.
- [ ] The reviewer has read `README.md` and has the private evidence form.

## Day-of brief

| Field | Operator-approved value |
|---|---|
| Business name and slug | |
| Category | |
| Dossier checked at | |
| Exact visit date/window | |
| Current source for address | |
| Current source for booking channel | |
| Ordinary service/product to purchase | |
| Maximum authorised spend | |
| Accessibility or animal-welfare constraints | |
| Known evidence conflicts to avoid repeating | |

## What the reviewer may observe

- How the booking and arrival worked on that date.
- Whether the price quoted for the purchased item matched the itemised bill.
- Languages actually used during that interaction, without identifying staff.
- Public-area cleanliness, access and comfort directly observed.
- Handling visible to the customer, described factually without a clinical conclusion.

The reviewer must not create an emergency, request unnecessary treatment, test a business with a
false medical story, trespass into staff-only areas or record another customer.

After the visit, complete `post-visit-template.md` privately. Use the mailbox configured in
`src/site-config.js` only after delivery has been tested. The operator, not AI, decides whether
any observation is publishable.
