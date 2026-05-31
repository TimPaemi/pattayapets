"use strict";
/* Editorial buyer's-guide content for the directory category hubs. Each entry
   is a self-contained HTML section rendered after the listings by the category
   hub generator in src/pages/30-directory.js. Orientation only - how to choose
   well - not endorsements of any business. */

function S(inner) {
  return '<section class="section"><div class="container"><div class="prose">' +
    inner + "</div></div></section>";
}

const HUB_GUIDE = {

  vets: S(
    "<h2>How to choose a vet in Pattaya</h2>" +
    "<p>Picking a vet before you urgently need one is one of the smartest things " +
    "a pet owner in Pattaya can do. A few things worth weighing up:</p>" +
    "<ul>" +
    "<li><strong>English-speaking staff.</strong> For an expat owner this often " +
    "matters most &mdash; being clearly understood is the difference between " +
    "confident care and guesswork. Many Pattaya clinics have English-speaking " +
    "vets; check before an emergency, not during one.</li>" +
    "<li><strong>Clinic or full hospital.</strong> A general clinic handles " +
    "routine care &mdash; vaccinations, check-ups, minor illness. Serious " +
    "illness, surgery, hospitalisation and advanced diagnostics need a fuller " +
    "animal hospital. Know which is which near you.</li>" +
    "<li><strong>After-hours access.</strong> Identify your nearest " +
    "<a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour animal " +
    "hospital</a> in advance, and how you would " +
    "<a href=\"/owning-a-pet-in-pattaya/getting-to-the-vet.html\">get there</a> " +
    "at night.</li>" +
    "<li><strong>The everyday signals.</strong> Clean premises, clear pricing, " +
    "a vet who explains things and handles your pet calmly.</li>" +
    "</ul>" +
    "<p>PattayaPets reviews the <strong>business experience</strong> &mdash; " +
    "booking, communication, billing transparency, cleanliness and comfort &mdash; " +
    "and never rates veterinary medical quality. That judgement is between you " +
    "and your vet. See also " +
    "<a href=\"/pet-health-pattaya/\">pet health in Pattaya</a> for the tropical-climate " +
    "risks to discuss with a clinic, and " +
    "<a href=\"/pet-health-pattaya/heartworm.html\">heartworm prevention</a> for the " +
    "year-round mosquito risk, and " +
    "<a href=\"/pet-health-pattaya/tick-borne-disease.html\">tick-borne disease</a> " +
    "for the year-round tick risk.</p>"),

  groomers: S(
    "<h2>How to choose a groomer in Pattaya</h2>" +
    "<p>A good groom is about more than appearance &mdash; it keeps a coat " +
    "healthy and a pet comfortable in the heat. What to look for:</p>" +
    "<ul>" +
    "<li><strong>Experience with your pet&rsquo;s coat.</strong> Double-coated, " +
    "long-haired, curly and short-haired coats all need different handling; a " +
    "groomer used to yours will get a better, safer result.</li>" +
    "<li><strong>Heat-aware advice.</strong> A good Pattaya groomer will " +
    "<em>not</em> shave a double-coated dog down to the skin &mdash; the coat " +
    "insulates against heat and shields from sun. They should suggest an " +
    "appropriate tidy or thin instead.</li>" +
    "<li><strong>Calm handling.</strong> Ask how they handle nervous, elderly " +
    "or first-time pets. Patience matters more than speed.</li>" +
    "<li><strong>Hygiene.</strong> Clean premises and equipment cleaned between " +
    "pets.</li>" +
    "<li><strong>What the groom includes.</strong> Bath, brush-out, nail trim, " +
    "ear and eye cleaning, coat trim &mdash; confirm what is covered.</li>" +
    "</ul>" +
    "<p>Some groomers work from a salon, others come to you. A mobile groom " +
    "spares a pet the travel and the wait; a salon may carry more equipment. " +
    "Either can be a good choice &mdash; it depends on your pet. Humidity drives " +
    "<a href=\"/pet-health-pattaya/skin-and-ear-problems.html\">skin and ear problems</a> " +
    "here &mdash; a groomer who spots early signs is worth keeping. See also " +
    "<a href=\"/owning-a-pet-in-pattaya/hot-climate-pet-care.html\">hot-climate pet care</a> " +
    "and <a href=\"/pet-health-pattaya/dental-care.html\">dental care</a>. " +
    "Browse groomers <a href=\"/groomers/#area\">by Pattaya area</a> on the category hub.</p>"),

  boarding: S(
    "<h2>How to choose boarding in Pattaya</h2>" +
    "<p>Pattaya has more dog-boarding options than dedicated catteries. If you are " +
    "boarding a cat, confirm the facility accepts cats and keeps them apart from " +
    "dogs. Leaving a pet while you travel is easier when you have checked the " +
    "place out properly first. The single best rule: <strong>visit before you " +
    "book</strong>. Once there, look for:</p>" +
    "<ul>" +
    "<li><strong>Space and cleanliness</strong> &mdash; room to move, and a " +
    "genuinely clean, well-kept facility.</li>" +
    "<li><strong>Cooling</strong> &mdash; shade, airflow or air-conditioning " +
    "for Pattaya&rsquo;s heat.</li>" +
    "<li><strong>Supervision</strong> &mdash; who is on site, and how often, " +
    "including overnight.</li>" +
    "<li><strong>Cats kept apart from dogs</strong>, ideally out of sight and " +
    "sound of them.</li>" +
    "<li><strong>Vaccination requirements</strong> &mdash; a responsible place " +
    "insists every boarder is up to date, which protects your pet too.</li>" +
    "</ul>" +
    "<p>Book well ahead for peak holiday periods, when good places fill up, and " +
    "bring your pet&rsquo;s usual food, vaccination records, any medication and " +
    "a familiar-smelling item. Humidity and rain can trigger " +
    "<a href=\"/owning-a-pet-in-pattaya/rainy-season-pet-care.html\">skin and ear " +
    "flare-ups</a> &mdash; worth mentioning to staff if your pet is prone. For some pets " +
    "&mdash; cats especially &mdash; an " +
    "<a href=\"/owning-a-pet-in-pattaya/pet-sitters-and-dog-walkers.html\">" +
    "in-home pet sitter</a> is less stressful than boarding. See also " +
    "<a href=\"/cats/cat-boarding-pattaya.html\">cat boarding and sitters</a>, and " +
    "<a href=\"/owning-a-pet-in-pattaya/travelling-in-thailand.html\">travelling in " +
    "Thailand</a> if your pet stays behind on a domestic trip.</p>"),

  "pet-shops": S(
    "<h2>Buying pet supplies in Pattaya</h2>" +
    "<p>Feeding and equipping a pet in Pattaya is straightforward for everyday " +
    "needs, with a little planning for anything specialised.</p>" +
    "<ul>" +
    "<li><strong>What pet shops carry</strong> &mdash; food, treats, litter, " +
    "beds, leads, toys and accessories, and sometimes grooming services. Staff " +
    "can usually help you find what you need.</li>" +
    "<li><strong>Food</strong> &mdash; mainstream dog and cat brands are widely " +
    "stocked. For a specific imported or premium brand, check several shops and " +
    "online retailers. <strong>Prescription diets</strong> are usually best " +
    "sourced through a <a href=\"/mobile-vets/\">vet</a> or the " +
    "<a href=\"/vets/\">vets directory</a>.</li>" +
    "<li><strong>Shop versus vet</strong> &mdash; a pet shop sells supplies; " +
    "health advice, medication and prescription food are a vet&rsquo;s domain. " +
    "Keep the two separate in your mind.</li>" +
    "<li><strong>Online</strong> &mdash; Thailand&rsquo;s online pet retailers " +
    "and the major marketplace apps deliver across Pattaya, which is handy for " +
    "heavy bags and hard-to-find brands.</li>" +
    "</ul>" +
    "<p>More detail is in our guide to " +
    "<a href=\"/owning-a-pet-in-pattaya/where-to-buy-pet-food.html\">where to " +
    "buy pet food in Pattaya</a>. Many shops can also arrange or advise on " +
    "<a href=\"/owning-a-pet-in-pattaya/microchipping-your-pet.html\">" +
    "microchipping</a> &mdash; ask at the counter or through your vet.</p>"),

  trainers: S(
    "<h2>How to choose a dog trainer in Pattaya</h2>" +
    "<p>A good trainer helps both ends of the lead. When you are choosing one, " +
    "the method matters most of all:</p>" +
    "<ul>" +
    "<li><strong>Favour reward-based training.</strong> Modern, humane, " +
    "reward-based (positive-reinforcement) methods are effective and kind. Be " +
    "cautious of any trainer who relies on fear, pain or harsh punishment &mdash; " +
    "it can worsen anxiety and damage trust.</li>" +
    "<li><strong>Obedience or behaviour.</strong> Everyday obedience &mdash; " +
    "recall, lead manners, basic cues &mdash; is different from behaviour " +
    "problems such as anxiety, reactivity or aggression. For serious behaviour " +
    "issues, look for a trainer or behaviourist with genuine, specific " +
    "experience.</li>" +
    "<li><strong>Group or private.</strong> Group classes are good for basics " +
    "and socialising; private sessions suit a specific problem or a nervous " +
    "dog.</li>" +
    "<li><strong>Ask to watch.</strong> A trainer worth hiring will happily let " +
    "you see a session and explain how they work.</li>" +
    "<li><strong>Registration</strong> &mdash; see " +
    "<a href=\"/owning-a-pet-in-pattaya/dog-registration-thailand.html\">dog registration &amp; the law</a> " +
    "for the rabies-vaccination duty in Thailand.</li>" +
    "</ul>" +
    "<p>Starting early helps &mdash; gentle, positive work with a " +
    "<a href=\"/dogs/puppy-care-pattaya.html\">puppy</a> prevents many problems " +
    "before they begin. For walking safely around Pattaya&rsquo;s street dogs, see " +
    "<a href=\"/pet-emergency/street-dog-encounters.html\">street-dog encounters</a>. " +
    "If you are importing a dog, see our " +
    "<a href=\"/pet-relocation/\">pet relocation agents</a> directory. Browse " +
    "<a href=\"/trainers/\">dog trainers in Pattaya</a> for obedience and behaviour help.</p>"),

  "mobile-vets": S(
    "<h2>When a mobile vet makes sense in Pattaya</h2>" +
    "<p>A mobile or home-visit vet examines and treats your pet at home. That can " +
    "be calmer for the animal and far easier for you &mdash; no carrier, no car " +
    "journey, no waiting room.</p>" +
    "<ul>" +
    "<li><strong>Good fits</strong> &mdash; routine vaccinations and health checks; " +
    "pets that find clinics genuinely distressing; multi-pet households; owners " +
    "without easy transport; gentle end-of-life care in familiar surroundings.</li>" +
    "<li><strong>Not a substitute for a hospital</strong> &mdash; anything needing " +
    "X-rays, surgery, hospitalisation or intensive monitoring still means a full " +
    "clinic. In an emergency, go straight to a " +
    "<a href=\"/pet-emergency/24-hour-vets-pattaya.html\">24-hour animal hospital</a>.</li>" +
    "<li><strong>Confirm the details</strong> &mdash; coverage area, same-day " +
    "availability, visit fees and what equipment the vet carries. Many Pattaya " +
    "clinics offer home visits alongside their clinic work; a smaller number " +
    "focus on mobile care.</li>" +
    "</ul>" +
    "<p>See also " +
    "<a href=\"/owning-a-pet-in-pattaya/getting-to-the-vet.html\">getting your pet " +
    "to the vet</a>, the listed " +
    "<a href=\"/mobile-vets/mor-ja-pet-clinic-pattaya.html\">Mor Ja Pet Clinic</a> " +
    "and <a href=\"/mobile-vets/baan-mor-raksasat-animal-hospital-pattaya.html\">" +
    "Baan Mor Raksasat Animal Hospital</a>, and the full " +
    "<a href=\"/vets/\">vets directory</a>. For routine neutering at home, see " +
    "<a href=\"/pet-health-pattaya/spaying-and-neutering.html\">spaying &amp; neutering</a>.</p>"),

  "pet-relocation": S(
    "<h2>How to choose a pet relocation agent</h2>" +
    "<p>Moving a pet into or out of Thailand is a multi-step process with real " +
    "deadlines. A relocation agent coordinates it for you; some owners prefer " +
    "to manage it themselves.</p>" +
    "<ul>" +
    "<li><strong>What an agent does</strong> &mdash; coordinates microchipping, " +
    "vaccinations, the rabies titer test where required, the health " +
    "certificate, Thai DLD import or export permits, airline booking and an " +
    "approved travel crate.</li>" +
    "<li><strong>Get the scope in writing</strong> &mdash; a clear written " +
    "quote, and exactly what is and is not included. Understand where their " +
    "service ends and yours begins.</li>" +
    "<li><strong>Route experience</strong> &mdash; ask about their experience " +
    "with your specific destination country, which sets its own rules.</li>" +
    "</ul>" +
    "<p>Whoever handles the move, the rules change without notice &mdash; " +
    "always confirm current requirements with the official sources: Thailand&rsquo;s " +
    "Department of Livestock Development, your airline, and the destination " +
    "country&rsquo;s authority. Our guides to " +
    "<a href=\"/bring-pet-to-thailand/\">bringing a pet to Thailand</a>, the " +
    "<a href=\"/take-pet-out-of-thailand/export-process.html\">export process</a>, " +
    "and the " +
    "<a href=\"/bring-pet-to-thailand/import-permit-thailand-dld.html\">DLD import " +
    "permit</a> and " +
    "<a href=\"/take-pet-out-of-thailand/export-permit-thailand-dld.html\">DLD export " +
    "permit</a> walk through the whole process. Start with the " +
    "<a href=\"/bring-pet-to-thailand/checklist.html\">import checklist</a> or " +
    "<a href=\"/take-pet-out-of-thailand/checklist.html\">export checklist</a>. " +
    "For costs, see " +
    "<a href=\"/bring-pet-to-thailand/cost-to-bring-a-pet-to-thailand.html\">import costs</a> " +
    "and <a href=\"/take-pet-out-of-thailand/cost-to-export-a-pet-from-thailand.html\">export costs</a>. " +
    "For airline rules, see " +
    "<a href=\"/bring-pet-to-thailand/airline-pet-policies.html\">airline pet " +
    "policies</a>, and for snub-nosed breeds and quarantine on arrival see " +
    "<a href=\"/bring-pet-to-thailand/snub-nosed-breeds-flying.html\">snub-nosed breeds &amp; flying</a> " +
    "and <a href=\"/bring-pet-to-thailand/thailand-pet-quarantine.html\">pet quarantine in Thailand</a>.</p>")

};

module.exports = { HUB_GUIDE };
