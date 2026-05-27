"use strict";
/* Editorial neighbourhood content for the area hub pages. Each entry is an
   HTML block (prose + a short list of relevant guides) rendered by the area
   generator in src/pages/30-directory.js. Orientation only - general
   character of each area for pet owners, not invented specifics. */

const AREA_GUIDE = {

  naklua:
    "<h2>Living in Naklua with a pet</h2>" +
    "<p>Naklua occupies the quieter northern end of greater Pattaya, where the " +
    "city softens into an older, largely residential Thai-Chinese community " +
    "built around its fishing port. The pace is calmer than the tourist core, " +
    "the streets are more about everyday life than nightlife, and that makes " +
    "Naklua one of the more comfortable parts of Pattaya in which to keep a " +
    "pet.</p>" +
    "<p>For dog owners, the appeal is a network of quiet residential sois and " +
    "the green space around Lan Pho Park, all best enjoyed in the cool of early " +
    "morning or after sunset. Wongamat Beach runs along Naklua's southern edge " +
    "and offers a calmer stretch of sand than central Pattaya. As everywhere in " +
    "the city, manage the heat, keep dogs leashed, and be aware of free-roaming " +
    "street dogs.</p>" +
    "<p>Housing here is a mix of condominium blocks near the water and " +
    "Thai-style houses and townhouses set back from it. Houses are generally " +
    "the easier choice for a pet, because many condo buildings restrict " +
    "animals &mdash; always confirm a building's pet policy in writing before " +
    "you commit. Naklua sits close to the pet shops and clinics of north " +
    "Pattaya, with the rest of the directory only a short trip away.</p>" +
    "<h3>Helpful guides for Naklua pet owners</h3>" +
    "<ul>" +
    "<li><a href=\"/owning-a-pet-in-pattaya/pet-friendly-housing.html\">Pet-friendly housing in Pattaya</a></li>" +
    "<li><a href=\"/owning-a-pet-in-pattaya/where-to-walk-your-dog.html\">Where and how to walk your dog</a></li>" +
    "<li><a href=\"/dog-friendly-pattaya/beaches.html\">Dog-friendly beaches</a></li>" +
    "<li><a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour vets in Pattaya</a></li>" +
    "</ul>",

  wongamat:
    "<h2>Living in Wongamat with a pet</h2>" +
    "<p>Wongamat is the upscale beachfront strip at the northern end of " +
    "Pattaya, a quieter, more polished alternative to the busy centre. " +
    "High-rise condominiums and beach resorts line the shore, and the area is " +
    "popular with expats and longer-stay residents who want the sea close by " +
    "without the noise of the tourist core.</p>" +
    "<p>Wongamat Beach itself is one of the calmer, cleaner stretches in the " +
    "area, which makes it pleasant for a cool-hour dog walk &mdash; early or " +
    "late, on a lead, with water to hand. Away from the sand, the area is " +
    "condo-dense rather than green, so a walking routine here is mostly about " +
    "quiet timing and the beachfront.</p>" +
    "<p>Housing in Wongamat is overwhelmingly condominium living, and that is " +
    "the single biggest thing for a pet owner to plan around: many buildings " +
    "have no-pet rules, and a landlord's permission does not override the " +
    "building's regulations. Search specifically for genuinely pet-friendly " +
    "buildings and get the permission written into your lease. Balconies should " +
    "be secured before a cat is ever allowed onto one.</p>" +
    "<p>For services, Wongamat is well placed between the clinics and pet shops " +
    "of Naklua and north Pattaya, so routine vet visits and supplies are never " +
    "far.</p>" +
    "<h3>Helpful guides for Wongamat pet owners</h3>" +
    "<ul>" +
    "<li><a href=\"/owning-a-pet-in-pattaya/pet-friendly-housing.html\">Pet-friendly housing in Pattaya</a></li>" +
    "<li><a href=\"/dog-friendly-pattaya/condos.html\">Dog-friendly condos</a></li>" +
    "<li><a href=\"/cats/indoor-vs-outdoor-cats.html\">Indoor or outdoor cats</a></li>" +
    "<li><a href=\"/dog-friendly-pattaya/beaches.html\">Dog-friendly beaches</a></li>" +
    "</ul>",

  "central-pattaya":
    "<h2>Living in Central Pattaya with a pet</h2>" +
    "<p>Central Pattaya is the busy heart of the city &mdash; Beach Road, " +
    "Second Road, the malls, the nightlife. It is the most convenient part of " +
    "Pattaya for shops, clinics and services, and the most stimulating; it is " +
    "also the least restful for a pet, with dense crowds, constant traffic and " +
    "frequent noise.</p>" +
    "<p>Walking a dog here takes more planning than it does elsewhere. The " +
    "pavements are hot and crowded and the beach is busy, so a workable routine " +
    "leans heavily on the cool hours and on the quieter back sois away from the " +
    "main roads. Keep dogs leashed and close, and keep walks steady and short " +
    "in the heat.</p>" +
    "<p>The area also sees fireworks and large events more often than the " +
    "outskirts &mdash; worth knowing if you have a noise-anxious pet, because " +
    "preparation and a secure home make those evenings far easier. Housing is " +
    "almost entirely condominiums, many with pet restrictions, so finding a " +
    "genuinely pet-friendly building and securing balconies are the first jobs " +
    "for any pet owner moving here.</p>" +
    "<p>The upside is real: in Central Pattaya you are never far from a pet " +
    "shop, a vet, or a 24-hour animal hospital if something goes wrong.</p>" +
    "<h3>Helpful guides for Central Pattaya pet owners</h3>" +
    "<ul>" +
    "<li><a href=\"/owning-a-pet-in-pattaya/fireworks-and-noise-anxiety.html\">Fireworks and noise-anxious pets</a></li>" +
    "<li><a href=\"/owning-a-pet-in-pattaya/pet-friendly-housing.html\">Pet-friendly housing in Pattaya</a></li>" +
    "<li><a href=\"/owning-a-pet-in-pattaya/hot-climate-pet-care.html\">Hot-climate pet care</a></li>" +
    "<li><a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour vets in Pattaya</a></li>" +
    "</ul>",

  pratumnak:
    "<h2>Living on Pratumnak with a pet</h2>" +
    "<p>Pratumnak Hill sits between Pattaya and Jomtien, a leafier, quieter " +
    "pocket that has long been a favourite with expat families and residents " +
    "who want calm without giving up easy access to the city. Its roads are " +
    "greener and gentler than the centre, and the mood is residential rather " +
    "than touristy.</p>" +
    "<p>That makes Pratumnak one of the more pleasant places in Pattaya to walk " +
    "a dog. The quieter, tree-lined roads suit a steady cool-hour routine, and " +
    "the Cosy Beach side gives a smaller, calmer stretch of coast. The usual " +
    "rules still apply &mdash; mind the heat, keep dogs leashed, and give " +
    "free-roaming street dogs space.</p>" +
    "<p>Housing on the hill is a mix of condominiums and stand-alone houses, " +
    "which gives pet owners more choice than the condo-only parts of the city. " +
    "Houses with a little outdoor space are within reach here; with any condo, " +
    "check the building's pet policy in writing and secure balconies before a " +
    "cat uses one.</p>" +
    "<p>Pratumnak's central position means vets, pet shops and emergency care " +
    "are all a short drive away &mdash; one of the reasons it is a popular " +
    "compromise for pet owners.</p>" +
    "<h3>Helpful guides for Pratumnak pet owners</h3>" +
    "<ul>" +
    "<li><a href=\"/vets/thonglor-pet-hospital-pattaya.html\">Thonglor Pet Hospital</a> (central, 24h)</li>" +
    "<li><a href=\"/pet-shops/peturday-pattaya.html\">Peturday</a> (Pratumnak pet shop)</li>" +
    "<li><a href=\"/boarding/elite-dog-resort.html\">Elite Dog Resort (Pratumnak)</a></li>" +
    "<li><a href=\"/owning-a-pet-in-pattaya/where-to-walk-your-dog.html\">Where and how to walk your dog</a></li>" +
    "<li><a href=\"/owning-a-pet-in-pattaya/pet-friendly-housing.html\">Pet-friendly housing in Pattaya</a></li>" +
    "<li><a href=\"/dog-friendly-pattaya/\">Dog-friendly Pattaya</a></li>" +
    "<li><a href=\"/vets/\">Vets and animal hospitals</a></li>" +
    "</ul>",

  jomtien:
    "<h2>Living in Jomtien with a pet</h2>" +
    "<p>Jomtien stretches along the coast south of Pratumnak, and its slower, " +
    "more residential character has made it a favourite with families, " +
    "retirees and longer-term expats &mdash; many of them pet owners. It feels " +
    "calmer and more liveable than the tourist centre while still being fully " +
    "served by shops and services.</p>" +
    "<p>For dogs, Jomtien's long, flat beachfront is one of the better " +
    "walking environments in the whole area, especially the quieter Dongtan " +
    "end and the beachside promenade, walked in the cool of the morning or " +
    "evening. Keep dogs leashed, always clean up, and watch for hot sand in " +
    "the middle of the day.</p>" +
    "<p>Housing in Jomtien spans beachfront condominiums and, in the back " +
    "streets and East Jomtien, a good supply of houses and townhouses. That " +
    "mix gives pet owners options: a house sidesteps the condo no-pet problem, " +
    "while a condo means checking the building's policy carefully and securing " +
    "any balcony.</p>" +
    "<p>With pet shops and clinics along the Jomtien corridor, and central Pattaya " +
    "a short drive away for groomers and 24-hour hospitals, day-to-day pet life " +
    "here is straightforward &mdash; though specialist grooming on the doorstep " +
    "is thinner than in central Pattaya.</p>" +
    "<h3>Helpful guides for Jomtien pet owners</h3>" +
    "<ul>" +
    "<li><a href=\"/vets/animal-army-hospital.html\">Animal Army Hospital (Na Jomtien)</a></li>" +
    "<li><a href=\"/pet-shops/tong-ma-aquarium-and-pets-shop.html\">Tong-ma pet shop (Thep Prasit)</a></li>" +
    "<li><a href=\"/dog-friendly-pattaya/beaches.html\">Dog-friendly beaches</a></li>" +
    "<li><a href=\"/owning-a-pet-in-pattaya/where-to-walk-your-dog.html\">Where and how to walk your dog</a></li>" +
    "<li><a href=\"/owning-a-pet-in-pattaya/pet-friendly-housing.html\">Pet-friendly housing in Pattaya</a></li>" +
    "<li><a href=\"/dog-friendly-pattaya/\">Dog-friendly Pattaya</a></li>" +
    "</ul>",

  "bang-saray":
    "<h2>Living in Bang Saray with a pet</h2>" +
    "<p>Bang Saray is a quiet traditional fishing town along the coast south " +
    "of Jomtien, and it is about as relaxed as the Pattaya area gets. Far less " +
    "touristy than the city, it keeps a slow, local pace, and that calm is its " +
    "great appeal for anyone wanting an unhurried life with a pet.</p>" +
    "<p>The quiet roads and low-key seafront make for peaceful, unstressed dog " +
    "walks, still best taken in the cool hours with water on hand. With far " +
    "less traffic and fewer crowds than central Pattaya, day-to-day walking " +
    "here is simply more pleasant.</p>" +
    "<p>Housing leans toward houses and village-style homes rather than " +
    "high-rise condominiums, which is good news for pet owners &mdash; a home " +
    "with its own outdoor space is far more achievable here, and the condo " +
    "no-pet problem is much less of an obstacle.</p>" +
    "<p>The trade-off is distance. Bang Saray is a longer drive from central " +
    "Pattaya's pet shops, specialist clinics and 24-hour animal hospitals, so " +
    "it is worth knowing your nearest vet and planning how you would reach " +
    "emergency care before you ever need it.</p>" +
    "<h3>Helpful guides for Bang Saray pet owners</h3>" +
    "<ul>" +
    "<li><a href=\"/vets/animal-army-hospital.html\">Animal Army Hospital (Na Jomtien)</a></li>" +
    "<li><a href=\"/boarding/pattaya-dog-hotel.html\">Pattaya Dog Hotel (near Bang Saray)</a></li>" +
    "<li><a href=\"/trainers/k9-coach.html\">K9 Coach (Bang Saray area)</a></li>" +
    "<li><a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour vets in Pattaya</a></li>" +
    "<li><a href=\"/owning-a-pet-in-pattaya/getting-to-the-vet.html\">Getting your pet to the vet</a></li>" +
    "<li><a href=\"/mobile-vets/\">Mobile vets</a></li>" +
    "<li><a href=\"/owning-a-pet-in-pattaya/\">Owning a pet in Pattaya</a></li>" +
    "</ul>",

  sattahip:
    "<h2>Living in Sattahip with a pet</h2>" +
    "<p>Sattahip lies at the southern end of the Pattaya area, a naval district " +
    "with a distinctly Thai town character, quiet beaches and a residential, " +
    "everyday feel well away from the tourist scene. For pet owners who value " +
    "peace and space, it is an appealing, unhurried place to live.</p>" +
    "<p>The quiet, uncrowded roads make for calm walking, and the relaxed pace " +
    "suits a settled pet routine &mdash; with the same cool-hour timing, " +
    "leashing and heat awareness that apply across the region.</p>" +
    "<p>Housing is mostly residential houses and local-style homes rather than " +
    "tourist condominiums, so a home with outdoor space for a pet is realistic, " +
    "and the condo pet-policy hurdle is far smaller than in the city.</p>" +
    "<p>As with the other outlying areas, the main thing to plan for is " +
    "distance from central services. Sattahip is the furthest of these areas " +
    "from central Pattaya's specialist and 24-hour veterinary care, so " +
    "identify your nearest clinic, keep its number saved, and find out which " +
    "vets near you offer home visits.</p>" +
    "<h3>Helpful guides for Sattahip pet owners</h3>" +
    "<ul>" +
    "<li><a href=\"/vets/animal-army-hospital.html\">Animal Army Hospital (Na Jomtien)</a></li>" +
    "<li><a href=\"/trainers/k9-pattaya-dog-training-school.html\">K9 Pattaya Dog Training School</a></li>" +
    "<li><a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour vets in Pattaya</a></li>" +
    "<li><a href=\"/owning-a-pet-in-pattaya/getting-to-the-vet.html\">Getting your pet to the vet</a></li>" +
    "<li><a href=\"/mobile-vets/\">Mobile vets</a></li>" +
    "<li><a href=\"/pet-emergency/\">Pet emergencies</a></li>" +
    "</ul>",

  banglamung:
    "<h2>Living in Banglamung with a pet</h2>" +
    "<p>Banglamung is the wider district that contains Pattaya, and in everyday " +
    "use the name covers the residential areas inland and east of the beach " +
    "strip &mdash; the housing estates, villages and gardens of East Pattaya. " +
    "It is quieter, greener and more spacious than the seafront, and popular " +
    "with families and longer-term residents.</p>" +
    "<p>For pet owners this is, in many ways, the easiest part of greater " +
    "Pattaya. Stand-alone houses with their own yards are common, so dogs " +
    "often have outdoor space at home, and walks run along quiet residential " +
    "sois and village roads rather than busy tourist streets. The heat and " +
    "free-roaming street dogs still call for the usual care.</p>" +
    "<p>Crucially, the supply of houses here sidesteps the condominium no-pet " +
    "problem that complicates pet ownership nearer the beach. A house with a " +
    "garden gives a pet room to be a pet &mdash; one of the main reasons many " +
    "pet-owning residents choose East Pattaya in the first place.</p>" +
    "<p>The trade-off is that you are away from the beach and a drive from the " +
    "central tourist strip, so knowing your nearest vet and pet shop &mdash; " +
    "and your route to emergency care &mdash; matters.</p>" +
    "<h3>Helpful guides for Banglamung pet owners</h3>" +
    "<ul>" +
    "<li><a href=\"/owning-a-pet-in-pattaya/pet-friendly-housing.html\">Pet-friendly housing in Pattaya</a></li>" +
    "<li><a href=\"/owning-a-pet-in-pattaya/where-to-walk-your-dog.html\">Where and how to walk your dog</a></li>" +
    "<li><a href=\"/dogs/choosing-a-dog-for-the-climate.html\">Choosing a dog for the climate</a></li>" +
    "<li><a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour vets in Pattaya</a></li>" +
    "</ul>"

};

module.exports = { AREA_GUIDE };
