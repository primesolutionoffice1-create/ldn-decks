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

export const metadata = buildMetadata({
  path: '/deck-builder-burke-va',
  title: 'Deck Builder in Burke, VA | Trex Certified | Loudoun Decks',
  description: 'Deck builder in Burke, VA. Custom Trex composite decks replacing aging wood in Burke Centre, Lakewood Hills & Rolling Valley. Fairfax County permits handled. Free estimate  -  (571) 655-7207.',
  image: '/social/deck-builder-burke-va-social.png',
});

const inclusions = [
  {
    title: "Burke's Deck Replacement Specialists",
    desc: "Most Burke homes were built between the 1970s and 1990s, and original wood decks are 20-30+ years old. We remove the old structure down to the footings when needed and rebuild with composite that will last another 25-50 years  -  no more annual staining."
  },
  {
    title: "Burke Centre Conservancy Experience",
    desc: "Burke Centre is the largest HOA in the area, with its own architectural review committee and specific material and design standards. We prepare and submit ARC packages that meet their requirements, keeping the approval process on schedule."
  },
  {
    title: "Designed for Mature Tree Canopy Lots",
    desc: "Burke lots sit under heavy canopy  -  large oaks, maples and tulip poplars that create shade and drop debris year-round. We design around root zones and specify composite boards that resist mold and staining in low-sun conditions where wood decks fail fastest."
  }
];

const burkeFAQs = [
  {
    q: "How much does a new deck cost in Burke, VA?",
    a: "Burke composite deck projects typically range from $25,000 to $55,000, depending on size, material tier and site conditions. A standard 300-400 sqft Trex Transcend deck with aluminum railings runs $32,000-$42,000 installed. Full replacements that require new footings and framing sit at the higher end. We provide itemized estimates after a site visit  -  no ballpark numbers over the phone."
  },
  {
    q: "Does Burke Centre HOA allow composite decking?",
    a: "Yes. Burke Centre Conservancy permits composite decking and has specific guidelines covering color, railing style and fastener visibility. We prepare the full ARC submission  -  drawings, material samples and color selections  -  and submit it on your behalf. Turnaround is typically 2-4 weeks depending on the review cycle."
  },
  {
    q: "How long does it take to replace a deck in Burke?",
    a: "A typical Burke deck replacement  -  tear-off, new framing and composite decking  -  takes 2 to 3 weeks once materials are on site. The Fairfax County permit adds 3-6 weeks of plan review before construction begins, and Burke Centre ARC review runs in parallel. We start the permit and HOA submissions at the same time so neither holds up the other."
  },
  {
    q: "Do I need a permit for a deck in Burke?",
    a: "Yes. Burke falls under Fairfax County jurisdiction, and any new deck or structural replacement requires a building permit. Plan review takes 3-6 weeks. We prepare the structural drawings, submit the application and schedule footing, framing and final inspections  -  you do not need to visit the county office."
  },
  {
    q: "What deck materials do you recommend for Burke's shaded lots?",
    a: "Composite leads in Burke because it handles shade and moisture far better than wood. Under heavy canopy, wood decks develop mold and rot within a few years. Trex Transcend and TimberTech AZEK both resist mold growth and clean easily. We also recommend lighter color tones on heavily shaded lots  -  they show less pollen and debris than dark boards."
  },
  {
    q: "Can you add a screened porch to my Burke deck?",
    a: "Yes. A screened porch is one of the most popular additions in Burke, especially on lots with heavy tree cover where insects are a factor from May through October. We frame the porch into the deck structure from the start rather than bolting it on afterward, which produces a cleaner build and avoids a second permit cycle."
  }
];

const expansionSections = [
  {
    title: "Burke's Deck Replacement Cycle",
    paragraphs: [
      "Burke's housing stock tells a consistent story: subdivisions built through the 1970s, 1980s and early 1990s, most with pressure-treated wood decks installed at the time of construction. Those decks are now 25-35 years old. Some have been stained and maintained enough to still be standing, but the underlying structure  -  ledger boards, joists and posts  -  is often past its safe service life even when the surface boards look acceptable.",
      "We see this pattern across Burke Centre, Lakewood Hills, Cherry Run and Rolling Valley. The replacement scope is usually full  -  not a resurface  -  because the framing has been exposed to decades of moisture cycling in Fairfax County's humid summers. A new composite deck on fresh pressure-treated framing resets the clock entirely: the boards carry a 25-year fade and stain warranty, and the structural frame is engineered to current Virginia building code.",
      "Timing matters in Burke. Spring and early summer are peak demand for deck replacement, and Fairfax County permit review does not speed up to match. We recommend starting the design process in winter so permits are in hand when the building season opens."
    ]
  },
  {
    title: "Fairfax County Permits for Burke Properties",
    paragraphs: [
      "Burke is unincorporated Fairfax County, so all deck permits run through the county's Land Development Services office. A standard deck permit requires a site plan, structural drawings showing footing size and spacing, ledger connection details and guardrail specifications. Plan review currently runs 3-6 weeks, with occasional longer waits during peak season.",
      "We prepare the full submission package  -  engineered drawings that meet Fairfax County's requirements  -  and file it electronically. Once approved, three inspections follow: footing, framing and final. Our crew schedules each inspection at the appropriate build phase so there is no idle time between steps. The permit fee for a typical Burke deck runs $300-$500 depending on project valuation."
    ]
  },
  {
    title: "Composite Decking for Mature Tree Canopy Lots",
    paragraphs: [
      "Burke's signature landscape feature is its mature tree canopy. Large deciduous trees shade most rear yards for six months of the year and drop leaves, pollen, seeds and branches onto every horizontal surface below. This environment is where wood decks deteriorate fastest  -  trapped moisture under leaf cover breeds mold and accelerates rot  -  and where composite decking earns its keep.",
      "Trex Transcend and TimberTech AZEK both use capped polymer shells that resist moisture absorption and mold growth. In Burke's shaded conditions, that difference matters within the first two to three years: a composite deck requires periodic cleaning with a hose or pressure washer, while a wood deck in the same spot would already be showing mold staining and soft spots.",
      "We also account for tree roots during design. Rather than cutting roots to set footings  -  which can destabilize mature trees  -  we adjust footing locations and use helical piers where needed to work around the root zone. Burke homeowners value their trees, and the deck should not compromise them."
    ]
  },
  {
    title: "Deck and Screened Porch Combinations in Burke",
    paragraphs: [
      "A screened porch paired with an open deck is one of the most common builds we do in Burke. The combination gives homeowners a bug-free dining or seating area under roof and an open section for grilling and sun. In Burke's tree-heavy lots, the screened section also keeps falling debris off the furniture.",
      "Structurally, we frame the screened porch into the deck from the start. The posts, headers and roof tie-in are part of the original engineering, not an afterthought. This means one permit, one build schedule and a finished product that looks intentional rather than added on. The roof pitch is set to clear the home's existing roofline and drain properly  -  a detail that matters on Burke's tight-setback lots.",
      "Cost for a combined deck-and-screened-porch build in Burke typically runs $45,000-$65,000 depending on total square footage and finish level. It is a larger investment than a deck alone, but it effectively adds a three-season room to the home at a fraction of what an interior addition would cost."
    ]
  }
];

export default function DeckBuilderBurkePage() {
  return (
    <main>
      <LocalBusinessSchema city="Burke" url="https://ldndecks.com/deck-builder-burke-va" />
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/deck-builder-burke-va" name="Deck Builder in Burke, VA | Trex Certified | Loudoun Decks" description="Deck builder in Burke, VA. Custom Trex composite decks replacing aging wood in Burke Centre, Lakewood Hills &amp; Rolling Valley. Fairfax County permits handled. Free estimate  -  (571) 655-7207." speakable />
      <ServicesHeader
        subtext="Burke, VA's Trusted Deck Company"
        title="Custom Deck Builder in Burke, VA"
        description="Loudoun Decks replaces aging wood decks with modern composite across Burke Centre, Lakewood Hills, Cherry Run and Rolling Valley. Fairfax County permits handled. publicly documented reputation."
      />
      <ServiceMain
        subtitle="Established Neighborhoods, Modern Decks"
        title="Deck Builder Burke VA  -  Premium Quality"
        description="Burke's mature neighborhoods deserve decks built to last. We replace 20-30+ year-old wood decks with Trex and TimberTech composite, engineered for Burke's shaded lots and heavy tree canopy. Projects from $25k+."
        listItems={[
          "TrexPro & TimberTech Certified installer",
          "Full deck replacement  -  footings to finish",
          "Burke Centre Conservancy ARC submissions handled",
          "Fairfax County permits filed and inspected",
          "Public reviews - call (571) 655-7207"
        ]}
        image1="/images/img36.jpeg"
        image2="/images/img37.jpeg"
      />
      <PlanningUpdate
        market="Burke deck replacements"
        notes={[
          'Older Burke decks should be evaluated at the ledger, joists, beams, posts and footings before a resurface is priced.',
          'Fairfax County permit planning is especially important for full structural replacement and screened porch additions.',
          'Heavy tree canopy affects board color, drainage, cleaning expectations and railing choices.',
        ]}
        links={[
          { href: '/deck-safety-inspection-checklist', label: 'Safety inspection checklist' },
          { href: '/deck-permit-fairfax-county-virginia', label: 'Fairfax permit guide' },
        ]}
      />
      <ServiceContentExpansion sections={expansionSections} />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
          <Image
            src="/images/img17.jpeg"
            alt="Composite deck built by LDN Decks replacing aging wood in Burke, Virginia"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Trex Deck Builder Burke</h2>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Replacing Aging Wood Decks Across Burke Centre and Surrounding Neighborhoods</h3>
      </div>
      <ServiceInclusions
        title="Why Burke Chooses Loudoun Decks"
        description="We are a local Northern Virginia team that knows Burke's neighborhoods, its HOA requirements and its heavily wooded lots from years of building here."
        items={inclusions}
      />
      <ProcessSteps />
      <ServicesFAQ
        title="Deck Builder Burke VA  -  FAQs"
        faqs={burkeFAQs}
        canonicalUrl="https://ldndecks.com/deck-builder-burke-va"
      />
      <ServiceAreasGrid />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            ['/composite-deck-builder-loudoun', 'Composite Deck Builder in Loudoun County'],
            ['/deck-permit-fairfax-county-virginia', 'Fairfax County Deck Permit Guide'],
            ['/hoa-deck-rules-northern-virginia', 'HOA Deck Rules in Northern Virginia'],
            ['/composite-deck-cost-northern-virginia', 'How Much Does a Deck Cost in Northern Virginia?'],
            ['/composite-deck-vs-wood-deck-virginia', 'Composite Deck vs Wood Deck'],
          ].map(([href, text]) => (
            <li key={href} style={{ marginBottom: '0.5rem' }}>
              <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link>
            </li>
          ))}
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (Google reviews) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
            <li key="/services/new-decks" style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building Services →</Link></li>
          </ul>
      </section>
      <section style={{ padding: '2rem 1.5rem' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><GoogleMapEmbed city="Burke" /></div></section>
      <SimpleCTA title="Replace Your Aging Burke Deck" buttonText="Get Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath="/deck-builder-burke-va" />
      <NamedAuthor context="Burke and Northern Virginia" lastUpdated="2026-06-01" />
      <ContactHome />
    </main>
  );
}
