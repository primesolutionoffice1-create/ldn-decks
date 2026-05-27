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

export const metadata = buildMetadata({
  path: '/deck-builder-leesburg-va',
  title: 'Deck Builder in Leesburg, VA | Trex Certified | Loudoun Decks',
  description: 'Deck builder in Leesburg, VA. Custom Trex & cedar decks for River Creek, Lansdowne, Tavistock Farms & the historic district. Town of Leesburg + Loudoun County permits handled. Free estimate  -  (571) 655-7207.',
  image: '/images/img36.jpeg',
});

const inclusions = [
  {
    title: "Two Permit Desks, One Contractor",
    desc: "A Leesburg address can fall under the Town of Leesburg building department or Loudoun County, depending on where the corporate line runs. We confirm jurisdiction first and file with the correct office  -  no applications stalled at the wrong desk."
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
    a: "It depends on the address. Properties inside the Town of Leesburg corporate limits permit through the Town's own building department; properties in the surrounding area go through Loudoun County. We confirm which jurisdiction applies before design and handle the filing either way."
  },
  {
    q: "What does a deck cost in Leesburg?",
    a: "Leesburg composite decks generally run $20,000 to $85,000+. Tavistock Farms / Potomac Station mid-tier: $28k-$48k. River Creek and Lansdowne sloped Potomac-facing lots with multi-level designs: $42k-$85k. Estate-tier builds in Lansdowne Conservancy or Beacon Hill with outdoor kitchens: $75k-$150k+."
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
    a: "Lansdowne is Loudoun's premier golf-community estate area, split into the Conservancy (the original estate tier, most detailed ARC) and Lansdowne Woods (55+ active-adult community with slightly streamlined review). Conservancy projects average $55k-$95k with detailed material samples and elevation drawings required. See our dedicated Lansdowne HOA deck rules guide for the full submission process."
  },
  {
    q: "What's special about historic district deck projects?",
    a: "Leesburg's historic district near King Street is governed by the Town of Leesburg's Architectural Review Board (ARB), which adds 4-6 weeks to the typical permit timeline. The ARB reviews material, scale, color, and how the deck reads from the public right-of-way. We file the ARB submission in parallel with the Town building permit, designed specifically to clear historic review on first round."
  },
  {
    q: "How long does a Leesburg deck project take from contract?",
    a: "8-14 weeks total depending on jurisdiction and HOA complexity. Town of Leesburg permit: 2-4 weeks. Loudoun County permit: 2-4 weeks. ARB review (historic district): adds 4-6 weeks. HOA review (Lansdowne, River Creek, etc.): 14-35 days in parallel. Material delivery: 1-3 weeks. Construction on-site: 1-4 weeks depending on size and complexity."
  },
  {
    q: "What's the difference between River Creek and Lansdowne projects?",
    a: "Both are premier Loudoun communities, but with different character. River Creek favors a more naturalist aesthetic (cedar, IPE, cable rail to preserve Potomac and woods views) — projects average $48k-$85k. Lansdowne favors a traditional aesthetic (warm-tone composites, balustrade or aluminum-traditional railings) — projects average $55k-$95k in the Conservancy. Both require 21-30 day ARC review on average."
  }
];

const expansionSections = [
  {
    title: "Two Jurisdictions, One Town: Permitting in Leesburg",
    paragraphs: [
      "Leesburg is unusual among Loudoun County towns: it runs its own building department. Whether your deck is reviewed by the Town of Leesburg or by Loudoun County depends entirely on whether your lot sits inside the town's corporate limits  -  and the line is not always where homeowners assume. Our first step on any Leesburg project is confirming jurisdiction, because filing with the wrong office is the most common cause of a delayed deck.",
      "From there we manage the full process: drawings, structural details, the architectural review submission for your HOA, and the footing, framing and final inspections. A recent Leesburg project  -  a multi-level TimberTech deck stepping down a sloped lot in Lansdowne on the Potomac  -  ran through that exact sequence, with the HOA review handled in parallel with the permit so neither held up the build."
    ]
  },
  {
    title: "From the Historic District to the Potomac",
    paragraphs: [
      "Leesburg is the historic seat of Loudoun County, and its housing reflects two centuries of building. Colonial and Federal homes line the historic district near King Street; larger-lot communities like River Creek, Lansdowne and Tavistock Farms spread toward the Potomac on a third of an acre and up. A deck that suits one rarely suits the other, and we design accordingly.",
      "We build for Leesburg the way the town itself was built  -  deliberately. Loudoun Decks keeps a limited roster of full Leesburg projects rather than chasing job volume, so a deck near Morven Park gets the same hands-on attention as one in River Creek: the owner on site, the same crew from footing to final board.",
      "Hire a Leesburg deck builder who can tell you, before you sign anything, whether your address answers to the Town or the County and how your HOA expects drawings packaged. That answer is built into every Leesburg estimate we write."
    ]
  },
  {
    title: "Composite, Cedar and the Leesburg View Lot",
    paragraphs: [
      "Material choice in Leesburg is more varied than in most NoVA towns. Composite leads for its low maintenance, and as a TrexPro installer and TimberTech Certified contractor we install the top-tier lines. But River Creek homeowners often still choose cedar or IPE for a natural-wood aesthetic, and the historic district frequently calls for AZEK's premium boards where a traditional finish matters. We build all of them well.",
      "Leesburg's larger, sloped lots shape the design as much as the material. Where a yard falls toward the Potomac, a multi-level deck turns an awkward grade into usable rooms, and cable or glass railing keeps the river or golf-course view intact. Leesburg projects typically start around $20,000 and scale with slope, levels and railing choice.",
      "Composite boards ship with a long manufacturer material warranty; pairing it with a certified installation is what keeps that warranty enforceable a decade or two down the road."
    ],
    listItems: [
      { label: "TrexPro installer", text: "TrexPro Platinum tier  -  full Transcend, Enhance and Select catalog for Leesburg builds." },
      { label: "TimberTech Certified", text: "Certified installer for the complete TimberTech Pro and AZEK product lines." },
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
    title: "Leesburg Neighborhoods We Build In",
    paragraphs: [
      "Lansdowne (Conservancy and Lansdowne Woods) is our highest-volume Leesburg sub-market — the master-planned golf community split between the original Conservancy estate section and the 55+ Lansdowne Woods sub-community. Conservancy projects average 21-day ARC review and our portfolio there exceeds 14 completed projects. Common build: 500-700 sqft multi-level composite deck, $55k-$95k. See our dedicated Lansdowne HOA deck rules guide for the full submission process.",
      "River Creek is the Potomac-side gated community where naturalist aesthetics dominate. Cedar and IPE remain popular here despite the higher maintenance, and cable rail submissions are routinely approved given the lot-context rationale (Potomac views, mature woods). Architectural review averages 21-28 days; our packets clear first-round when the lot-context documentation is included.",
      "Beacon Hill is South Leesburg estate territory with HOA review averaging 14 days. Beacon Hill homes typically have larger lots and accommodate multi-level deck designs. We've completed 6+ projects here.",
      "Red Cedar is newer (2010+) development north of downtown with HOA review averaging 18 days. Common Red Cedar build: 400-500 sqft composite deck with aluminum railing, $35k-$52k.",
      "Brandon Park and Bellewood are mid-tier HOAs with 14-21 day review windows and flexible material approval policies — well-suited to the more value-conscious Leesburg deck budgets.",
      "Greenway Farm sits in Loudoun County's higher-end estate area with mixed HOA / no-HOA properties. Larger lot sizes (3-10 acres) typical; projects scale to $60k-$200k.",
      "The Downtown Historic District near King Street operates under the Town of Leesburg's Architectural Review Board (ARB) — an additional review layer beyond the standard Town building permit. ARB review adds 30-45 days; we coordinate the submission as part of every historic-district project.",
      "We also build regularly in Battlefield, Edwards Ferry, Stratford, Tavistock Farms, Tuscarora, Country Walk, Ashby Ponds, and Riverside. If your Leesburg HOA isn't listed here, contact us — we have submission templates for every major Loudoun HOA."
    ]
  },
  {
    title: "Materials and Pricing Tiers by Leesburg Sub-Market",
    paragraphs: [
      "Leesburg pricing reflects the sub-market more than the materials. The same Trex Transcend deck lands at very different totals depending on lot complexity, HOA review intensity, and the design vocabulary the community expects."
    ],
    listItems: [
      { label: "Single-level composite deck (300-400 sqft, Tavistock / Potomac Station / Red Cedar)", text: "$28,000-$42,000 — Trex Transcend or TimberTech PRO" },
      { label: "Multi-level composite deck (500-700 sqft, River Creek / Lansdowne)", text: "$52,000-$85,000 — Transcend, AZEK, or TimberTech PRO Legacy" },
      { label: "PVC deck (350-500 sqft, premium tier)", text: "$36,000-$72,000 — AZEK Vintage Mahogany, Coastline, or Brownstone" },
      { label: "Screened porch (250-350 sqft)", text: "$48,000-$78,000 — composite + EZE-Breeze + roof + electric" },
      { label: "Deck replacement (400 sqft, framing salvaged)", text: "$22,000-$42,000 — resurface vs full rebuild flow" },
      { label: "Patio + deck combo (Lansdowne / Beacon Hill estates)", text: "$58,000-$120,000+ — composite deck + paver patio + outdoor kitchen" },
      { label: "Estate-tier outdoor living (Lansdowne Conservancy, Beacon Hill, Greenway Farm)", text: "$95,000-$180,000+ — multi-level deck + screened porch + outdoor kitchen + fire feature" }
    ]
  },
  {
    title: "Town of Leesburg vs Loudoun County — the Permit Reality",
    paragraphs: [
      "Leesburg is unique among Loudoun towns: properties inside the Town of Leesburg corporate limits permit through the Town's building department; properties just outside the line permit through Loudoun County. The two operate independently with different timelines, fee structures, and submission portals.",
      "Town of Leesburg permits average 2-4 weeks plan review through the Town building department. Town fees are flat-tier based on construction valuation (typically $150-$500 for residential deck work). The Town's reviewer staff is smaller than the County's but typically faster on revision cycles.",
      "Loudoun County permits average 2-4 weeks through the LandMARC portal. County fees are valuation-scaled (typically $150-$700). The LandMARC system requires specific PDF plan formats; we prepare every submission to that standard so first-round approval is the norm.",
      "Historic district properties downtown add a third layer: the Town's Architectural Review Board (ARB) reviews exterior changes. ARB review adds 30-45 days. The ARB submission requires elevation drawings, material samples, color specifications, and (often) a public hearing for visible exterior modifications.",
      "Our standard Leesburg estimate identifies which jurisdiction applies on the very first call and what (if any) ARB review will be required. The wrong filing path is the most common source of a delayed Leesburg deck. See our full Loudoun County deck permit guide for the county-side walkthrough."
    ]
  }
];

export default function DeckBuilderLeesburgPage() {
  return (
    <main>
      <LocalBusinessSchema city="Leesburg" url="https://ldndecks.com/deck-builder-leesburg-va" />
      <WebPageSchema url="https://ldndecks.com/deck-builder-leesburg-va" name="Deck Builder in Leesburg, VA | Trex Certified | Loudoun Decks" description="Deck builder in Leesburg, VA. Custom Trex &amp; cedar decks for River Creek, Lansdowne, Tavistock Farms &amp; the historic district. Town of Leesburg + Loudoun County permits handled. Free estimate  -  (571) 655-7207." speakable />
      <ServicesHeader
        subtext="Leesburg, VA's Trusted Deck Company"
        title="Custom Deck Builder in Leesburg, VA"
        description="Loudoun Decks builds composite, cedar and IPE decks across River Creek, Lansdowne and the historic district. Town of Leesburg + Loudoun County permits handled. 5-Star Google Rated."
      />
      <ServiceMain
        subtitle="Historic Loudoun Craftsmanship"
        title="Deck Builder Leesburg VA  -  Premium Quality"
        description="We build decks suited to Leesburg's two worlds  -  the historic district and the river communities. Slope-engineered designs, view-preserving railings, materials from $20k+."
        listItems={[
          "TrexPro, TimberTech, cedar & IPE",
          "Town of Leesburg & Loudoun County permits confirmed and filed",
          "Multi-level designs for sloped Potomac-facing lots",
          "Cable & glass railing for river and fairway views",
          "5-Star Google Rated  -  call (571) 655-7207"
        ]}
        image1="/images/img36.jpeg"
        image2="/images/img37.jpeg"
      />
      <ServiceContentExpansion sections={expansionSections} />
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
            ['/screened-porch-builder-northern-virginia', 'Screened Porch Builder Northern Virginia'],
            ['/deck-permit-loudoun-county-virginia', 'Loudoun County Deck Permit Guide'],
            ['/hoa-deck-rules-northern-virginia', 'HOA Deck Rules in Northern Virginia'],
            ['/composite-deck-cost-northern-virginia', 'How Much Does a Deck Cost in Northern Virginia?'],
            ['/composite-deck-vs-wood-deck-virginia', 'Composite Deck vs Wood Deck'],
          ].map(([href, text]) => (
            <li key={href} style={{ marginBottom: '0.5rem' }}>
              <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link>
            </li>
          ))}
        
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (5.0★ Google) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
            <li key="/services/new-decks" style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building Services →</Link></li>
          </ul>
      </section>
      <section style={{ padding: '2rem 1.5rem' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><GoogleMapEmbed city="Leesburg" /></div></section>
      <SimpleCTA title="Build Your Dream Deck in Leesburg" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-leesburg-va" />
      <NamedAuthor context="Leesburg and Northern Virginia" lastUpdated="2026-05-26" />
      <ContactHome />
    </main>
  );
}
