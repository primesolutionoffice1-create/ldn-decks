import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ProcessSteps from '@/components/ProcessSteps';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import SimpleCTA from '@/components/SimpleCTA';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import PlanningUpdate from '@/components/PlanningUpdate';
import GeoAnswerBlock from '@/components/GeoAnswerBlock';
import CityLeadFormSection from '@/components/CityLeadFormSection';

export const metadata = buildMetadata({
  path: '/deck-builder-leesburg-va',
  title: 'Deck Builder in Leesburg, VA | Composite Decks | Loudoun Decks',
  description: 'Deck builder in Leesburg, VA. Custom Trex & cedar decks for River Creek, Lansdowne, Tavistock Farms & the historic district. Town of Leesburg + Loudoun County permit planning support. Free estimate  -  (571) 655-7207.',
  image: '/social/deck-builder-leesburg-va-social.png',
});

const inclusions = [
  {
    title: "Town Zoning and County Building Review",
    desc: "Inside the Town of Leesburg, deck planning generally involves Town zoning approval and a Loudoun County building permit. A Leesburg mailing address alone does not establish Town jurisdiction. Confirm the property location and required approvals before filing."
  },
  {
    title: "Historic District to River Creek",
    desc: "From period-sensitive decks behind King Street colonials to contemporary builds in River Creek and Lansdowne, we match the design to the neighborhood rather than reuse a template."
  },
  {
    title: "Slope and View Engineering",
    desc: "Many Leesburg lots fall away toward the Potomac. We engineer multi-level decks for those grades and specify cable or glass railing where a river or fairway view is worth preserving."
  }
];

const leesburgFAQs = [
  {
    q: "Do you build custom decks in Leesburg, VA?",
    a: "Yes  -  across all of Leesburg, from the historic downtown around King Street to River Creek, Lansdowne on the Potomac, Tavistock Farms, Potomac Station and Exeter."
  },
  {
    q: "Will my Leesburg deck need a Town permit or a County permit?",
    a: "A property inside the Town of Leesburg generally needs Town zoning approval as well as a Loudoun County building permit. For properties outside the incorporated Town, confirm the applicable County requirements. Check the property address, proposed work, HOA rules and any historic-district requirements before filing."
  },
  {
    q: "What does a deck cost in Leesburg?",
    a: "Your installed price depends on the deck's size, demolition, framing, stairs, railings, materials and site access. Request a written estimate based on your property's scope rather than comparing incomplete per-square-foot figures."
  },
  {
    q: "Which Leesburg HOAs have you worked with?",
    a: "Lansdowne Conservancy + Lansdowne Woods (most detailed ARC, see our dedicated Lansdowne HOA guide), River Creek, Tavistock Farms, Potomac Station, Exeter, Beacon Hill, Red Cedar, and Brandon Park. Each ARC operates on its own timeline and material standards; we maintain current submission templates for every major Leesburg HOA."
  },
  {
    q: "What deck materials are popular in Leesburg?",
    a: "Composite (Trex Transcend and TimberTech AZEK) leads, but cedar and IPE remain popular in River Creek for the natural-wood aesthetic, and AZEK's premium lines suit the historic district where a refined, traditional finish matters. Warm-tone palettes (Spiced Rum, Havana Gold, Vintage Mahogany) dominate; cool tones are less common in Leesburg's traditional architectural context."
  },
  {
    q: "Can you design a Leesburg deck around a Potomac or golf-course view?",
    a: "Yes. On Leesburg's view lots we favor cable and glass railing to keep sight lines open, and we set deck height and stair runs to frame the river or fairway rather than block it. River Creek and Lansdowne both support cable rail submissions when the lot context is documented (woods-backing or river-view)."
  },
  {
    q: "What's special about Lansdowne deck projects?",
    a: "Confirm the requirements of the association that governs your property before choosing materials or submitting drawings. Ask which plans, samples and approvals are needed for your scope. See our Lansdowne HOA deck rules guide as a starting point, then check the current association documents."
  },
  {
    q: "What's special about historic district deck projects?",
    a: "Exterior changes in Leesburg's historic district may require additional Town architectural review. Confirm the applicable requirements for your property, including materials, scale, color and visibility from the public right-of-way. This review is separate from Town zoning approval and the County building permit; review dates are not guaranteed construction start dates."
  },
  {
    q: "How long does a Leesburg deck project take from contract?",
    a: "The schedule depends on design, complete applications, zoning and building review, any HOA or historic-district approval, material availability and construction conditions. Request a project-specific sequence and confirm the current review requirements with the relevant authority. Do not treat an approval estimate as a guaranteed start date."
  },
  {
    q: "What's the difference between River Creek and Lansdowne projects?",
    a: "Compare the requirements of the specific property and association rather than assuming one neighborhood has a fixed project price or review period. Lot slope, access, deck layout, railing, material choices and the current architectural-review requirements determine the scope."
  }
];

const expansionSections = [
  {
    "title": "Deck Permits in Leesburg: Town Zoning and County Building Review",
    "paragraphs": [
      "For a property within the Town of Leesburg, deck planning generally involves a Town zoning permit and a building permit from Loudoun County. The Town reviews the proposed use and location, including setbacks; the County reviews building-code requirements and carries out building inspections. A Leesburg mailing address alone does not establish whether the property is within Town limits.",
      "Confirm the property's jurisdiction before submitting plans. Historic-district requirements and HOA approval may add separate review steps. Approval dates depend on the application and the reviewing authority; they should not be treated as guaranteed construction start dates."
    ]
  },
  {
    title: "From the Historic District to the Potomac",
    paragraphs: [
      "Leesburg is the historic seat of Loudoun County, and its housing reflects two centuries of building. Colonial and Federal homes line the historic district near King Street; larger-lot communities like River Creek, Lansdowne and Tavistock Farms spread toward the Potomac on a third of an acre and up. A deck that suits one rarely suits the other, and we design accordingly.",
      "We build for Leesburg the way the town itself was built  -  deliberately. Loudoun Decks keeps a limited roster of full Leesburg projects rather than chasing job volume, so a deck near Morven Park gets the same hands-on attention as one in River Creek: the owner on site, the same crew from footing to final board.",
      "Hire a Leesburg deck builder who can tell you, before you sign anything, which Town and County approvals your property requires and how your HOA expects drawings packaged. That answer is built into every Leesburg estimate we write."
    ]
  },
  {
    title: "Composite, Cedar and the Leesburg View Lot",
    paragraphs: [
      "Material choice in Leesburg is more varied than in most NoVA towns. Composite leads for its low maintenance, and with Trex, TimberTech, and AZEK product-line planning, we help homeowners compare the top-tier lines. But River Creek homeowners often still choose cedar or IPE for a natural-wood aesthetic, and the historic district frequently calls for AZEK's premium boards where a traditional finish matters. We build all of them well.",
      "Leesburg's larger, sloped lots shape the design as much as the material. Where a yard falls toward the Potomac, a multi-level deck turns an awkward grade into usable rooms, and cable or glass railing keeps the river or golf-course view intact. Your written estimate should identify how slope, levels and railing choice affect the scope.",
      "Review the current warranty and installation documents for the selected collection. Manufacturer product coverage and contractor workmanship coverage are separate; confirm the written terms that apply to your project."
    ],
    listItems: [
      { label: "Trex product planning", text: "Trex Transcend, Enhance and Select catalog options for Leesburg builds." },
      { label: "TimberTech and AZEK product planning", text: "TimberTech Pro and AZEK product-line planning." },
      { label: "Cedar & IPE Capable", text: "Natural-wood decks built to last for River Creek and historic-district homes." },
      { label: "Dual-Jurisdiction Permits", text: "Filing handled for both the Town of Leesburg and Loudoun County." }
    ]
  },
  {
    title: "Screened Porches and Multi-Level Living in Leesburg",
    paragraphs: [
      "A screened porch is the natural second phase for a Leesburg deck. Tied into the structure at the framing stage rather than bolted on afterward, it stretches the usable season well past the first cool Potomac-side evening.",
      "Where the grade falls away  -  which is most of River Creek and Lansdowne  -  a stepped layout earns its keep: a cooking-and-dining level off the kitchen, a lounge level nearer the yard, and a dry-joist ceiling that claims the shaded zone underneath as covered patio.",
      "Combined builds  -  deck, screened porch and a covered lower patio  -  suit the larger lots in Leesburg's river communities, and outdoor square footage remains one of the clearer resale levers in that market."
    ]
  },
  {
    "title": "Planning a Deck in Your Leesburg Neighborhood",
    "paragraphs": [
      "River Creek, Lansdowne, Tavistock Farms, Potomac Station, Exeter, Beacon Hill and other Leesburg-area neighborhoods can have different architectural-review requirements. Start with the current documents for the association governing your property; do not assume a neighboring community uses the same material rules or review schedule.",
      "For a property in the Downtown Historic District, confirm whether the proposed exterior work needs Town architectural review in addition to zoning approval and the County building permit. Lot slope, access, drainage and the proposed layout should be reviewed before comparing estimates."
    ]
  },
  {
    "title": "What to Prepare for Your Leesburg Deck Estimate",
    "paragraphs": [
      "Start with your property address, a few photos and the type of project you are considering: a new deck, replacement, resurfacing or a screened porch. Note how you want to use the space and whether stairs, railings, shade or an area beneath the deck are part of your plan.",
      "Use the written estimate to compare the complete scope. Look for the proposed decking collection, structural work, demolition, railings, stairs and permit responsibilities. For a resurfacing project, clarify what framing will be inspected and what happens if concealed damage is found after old boards are removed.",
      "Before approving work, review the payment schedule, exclusions, change-order process and warranty terms in the project documents. Manufacturer product warranties and contractor workmanship coverage are separate; ask which written terms apply to your project."
    ]
  },
  {
    "title": "Before Submitting Deck Plans",
    "paragraphs": [
      "Confirm the property location, proposed deck layout, setbacks and any HOA or historic-district requirements. Identify who will prepare and submit the plans and who will schedule required inspections.",
      "For properties outside the incorporated Town, confirm the applicable Loudoun County zoning and building requirements. Check current application instructions with the relevant authority rather than relying on a fixed review period or a fee estimate from another project."
    ]
  }
];

export default function DeckBuilderLeesburgPage() {
  return (
    <main>
      <LocalBusinessSchema city="Leesburg" url="https://ldndecks.com/deck-builder-leesburg-va" />
      <WebPageSchema dateModified="2026-10-24" url="https://ldndecks.com/deck-builder-leesburg-va" name="Deck Builder in Leesburg, VA | Composite Decks | Loudoun Decks" description="Deck builder in Leesburg, VA. Custom Trex &amp; cedar decks for River Creek, Lansdowne, Tavistock Farms &amp; the historic district. Town of Leesburg + Loudoun County permit planning support. Free estimate  -  (571) 655-7207." speakable />
      <ServicesHeader
        subtext="Leesburg, VA's Trusted Deck Company"
        title="Custom Deck Builder in Leesburg, VA"
        description="Loudoun Decks builds composite, cedar and IPE decks across River Creek, Lansdowne and the historic district. Town of Leesburg + Loudoun County permit planning support. "
      />
      <ServiceMain
        subtitle="Historic Loudoun Craftsmanship"
        title="Deck Builder Leesburg VA  -  Premium Quality"
        description="We build decks suited to Leesburg's two worlds  -  the historic district and the river communities. Slope-aware designs, view-preserving railings and material options identified in your written estimate."
        listItems={[
          "Trex, TimberTech, AZEK, cedar & IPE",
          "Town of Leesburg & Loudoun County permits confirmed and filed",
          "Multi-level designs for sloped Potomac-facing lots",
          "Cable & glass railing for river and fairway views",
          "Public reviews - call (571) 655-7207"
        ]}
        image1="/images/img36.jpeg"
        image2="/images/img37.jpeg"
      />
      <CityLeadFormSection
        city="Leesburg"
        county="Loudoun County / Town of Leesburg"
        service="deck replacement, composite deck, or screened porch"
      />
      <PlanningUpdate
        market="Leesburg decks in 2026"
        notes={[
          "Inside Town limits, confirm Town zoning approval and the Loudoun County building permit; a Leesburg mailing address alone does not establish jurisdiction.",
          "Historic district projects need earlier material, color, and visibility planning before the ARB review window begins.",
          "River Creek, Lansdowne, and Potomac-facing lots benefit from early railing and drainage decisions because slope and view preservation can change the budget."
        ]}
        links={[
          { href: "/deck-permit-loudoun-county-virginia", label: "Loudoun permit guide" },
          { href: "/lansdowne-hoa-deck-rules", label: "Lansdowne HOA guide" },
          { href: "/deck-resurfacing-vs-replacement", label: "Resurface vs replace" }
        ]}
      />
      <GeoAnswerBlock
        question="What should Leesburg homeowners know before planning a deck?"
        answer="Leesburg deck projects should start with a jurisdiction check. Inside Town limits, planning generally involves Town zoning approval and a Loudoun County building permit. Historic district, River Creek, Lansdowne, Tavistock Farms, Beacon Hill, and Potomac-facing lots may also need earlier decisions on materials, railing visibility, slope, drainage, HOA or ARB review, and whether the existing deck can be resurfaced."
        facts={[
          'Primary buyer intent: permit clarity, historic review, premium composite materials, and sloped-lot planning.',
          'Conversion path: written estimate plus permit and material planning.'
        ]}
        links={[
          { href: '/deck-permit-loudoun-county-virginia', label: 'Loudoun permit guide' },
          { href: '/lansdowne-hoa-deck-rules', label: 'Lansdowne HOA guide' },
          { href: '/get-estimate', label: 'Get a Leesburg estimate' }
        ]}
      />
      <ServiceContentExpansion sections={expansionSections} />
      <section aria-label="Official deck permit resources" style={{ padding: '1rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <p>Official permit resources: <a href="https://www.leesburgva.gov/departments/community-development/community-development-faqs">Town of Leesburg zoning and building permit FAQ</a> and <a href="https://www.loudoun.gov/1166/Decks">Loudoun County deck permits and inspections</a>.</p>
        <p><Link href="/get-estimate">Request a written Leesburg deck estimate</Link> or call <a href="tel:+15716557207">(571) 655-7207</a>.</p>
      </section>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
          <Image
            src="/images/img17.jpeg"
            alt="Multi-level composite deck built by LDN Decks on a sloped lot in Leesburg, Virginia"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Trex Deck Builder Leesburg</h2>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Decks for Leesburg's Two Worlds  -  The Historic District and the River Communities</h3>
      </div>
      <ServiceInclusions
        title="Why Leesburg Chooses Loudoun Decks"
        description="We are a local Loudoun County team that knows the town's permit lines, its HOAs and its sloped river lots from the ground up."
        items={inclusions}
      />
      <ProcessSteps />
      <ServicesFAQ
        title="Deck Builder Leesburg VA  -  FAQs"
        faqs={leesburgFAQs}
        canonicalUrl="https://ldndecks.com/deck-builder-leesburg-va"
      />
      <ServiceAreasGrid />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            ['/composite-deck-builder-loudoun', 'Composite Deck Builder in Loudoun County'],
            ['/deck-builder-northern-virginia', 'LDN Decks Northern Virginia deck building service'],
            ['/screened-porch-builder-northern-virginia', 'Screened Porch Builder Northern Virginia'],
            ['/deck-permit-loudoun-county-virginia', 'Loudoun County Deck Permit Guide'],
            ['/hoa-deck-rules-northern-virginia', 'HOA Deck Rules in Northern Virginia'],
            ['/services/deck-repair', 'Deck Repair Service in Northern Virginia'],
            ['/composite-deck-cost-northern-virginia', 'How Much Does a Deck Cost in Northern Virginia?'],
            ['/composite-deck-vs-wood-deck-virginia', 'Composite Deck vs Wood Deck'],
          ].map(([href, text]) => (
            <li key={href} style={{ marginBottom: '0.5rem' }}>
              <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link>
            </li>
          ))}
        
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (Google reviews) →</Link></li>
            <li key="/bbb" style={{ marginBottom: '0.5rem' }}><Link href="/bbb-accredited-deck-builder-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>BBB Accredited Deck Builder →</Link></li>
            <li key="/before-after" style={{ marginBottom: '0.5rem' }}><Link href="/before-and-after" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Before & After Deck Projects →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
            <li key="/deck-payment-estimator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-payment-estimator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck Payment Estimator →</Link></li>
            <li key="/get-estimate" style={{ marginBottom: '0.5rem' }}><Link href="/get-estimate" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Request a Written Leesburg Estimate →</Link></li>
            <li key="/deck-builder-northern-virginia" style={{ marginBottom: '0.5rem' }}><Link href="/deck-builder-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Northern Virginia Deck Builder Guide →</Link></li>
            <li key="/services/new-decks" style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building Services →</Link></li>
          </ul>
      </section>
      <section style={{ padding: '2rem 1.5rem' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><GoogleMapEmbed city="Leesburg" /></div></section>
      <SimpleCTA title="Build Your Dream Deck in Leesburg" buttonText="Get Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath="/deck-builder-leesburg-va" />
      <NamedAuthor context="Leesburg and Northern Virginia" lastUpdated="2026-10-24" />
      <ContactHome />
    </main>
  );
}
