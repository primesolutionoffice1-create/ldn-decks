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
  path: '/deck-builder-springfield-va',
  title: 'Deck Builder in Springfield, VA | Trex Certified | Loudoun Decks',
  description: 'Deck builder in Springfield, VA. Custom Trex & composite decks for Kingstowne, West Springfield, Franconia & Saratoga. Fairfax County permits handled. Free estimate  -  (571) 655-7207.',
  image: '/images/img36.jpeg',
});

const inclusions = [
  {
    title: "Springfield's Diverse Housing Stock",
    desc: "Springfield ranges from 1960s ranches in North Springfield to 2000s townhomes in Kingstowne. We design for both  -  compact, efficient layouts for townhome rear decks and larger multi-level builds for single-family lots in West Springfield and Saratoga."
  },
  {
    title: "Kingstowne HOA Navigation",
    desc: "Kingstowne is one of Fairfax County's largest planned communities with an active architectural review process. We prepare submissions that meet their standards for materials, colors and railing styles  -  and handle the back-and-forth so approvals move on schedule."
  },
  {
    title: "Strong Deck ROI in Springfield's Market",
    desc: "Springfield offers solid home values with room for improvement. A composite deck addition typically returns 65-75% of its cost at resale in this market, and it converts underused backyard space into functional outdoor living  -  a feature buyers in this price range actively seek."
  }
];

const springfieldFAQs = [
  {
    q: "How much does a new deck cost in Springfield, VA?",
    a: "Springfield composite deck projects typically range from $22,000 to $50,000. A standard 300-350 sqft Trex Enhance or Transcend deck with aluminum railings runs $28,000-$38,000 installed. Townhome decks in Kingstowne tend toward the lower end of that range due to smaller footprints, while single-family homes in West Springfield and Saratoga with larger lots and multi-level designs reach higher."
  },
  {
    q: "Does Kingstowne HOA allow composite decking?",
    a: "Yes. Kingstowne's architectural review committee permits composite decking and has guidelines covering board color, railing material and overall design. We prepare the full submission package  -  drawings, material specifications and color samples  -  and file it on your behalf. Review typically takes 2-4 weeks."
  },
  {
    q: "Do I need a permit for a deck in Springfield?",
    a: "Yes. Springfield is in Fairfax County, and any new deck or structural replacement requires a building permit. The county's plan review currently runs 3-6 weeks. We prepare the structural drawings, file the application electronically and schedule all three inspections  -  footing, framing and final  -  so the process stays on track."
  },
  {
    q: "How long does a Springfield deck project take?",
    a: "Construction typically takes 2 to 3 weeks once materials arrive and the permit is in hand. The Fairfax County permit adds 3-6 weeks of plan review before that. If your property is in Kingstowne or another HOA community, we submit the architectural review application in parallel with the permit so they do not stack up sequentially."
  },
  {
    q: "Can you build a deck and patio combination in Springfield?",
    a: "Yes. Deck-and-patio combinations are one of our most requested builds in Springfield, especially on lots where the grade drops away from the house. The deck extends from the main level, and a paver or stamped-concrete patio sits below at grade. Under-deck drainage systems keep the patio dry. This approach effectively doubles usable outdoor space."
  },
  {
    q: "What materials work best for Springfield decks?",
    a: "Composite decking  -  specifically Trex and TimberTech  -  leads in Springfield for its low maintenance and long warranty. Trex Enhance is the most popular line here, offering a good balance of appearance and value. For homeowners wanting a premium finish, Trex Transcend and TimberTech AZEK provide richer color depth and superior scratch resistance."
  }
];

const expansionSections = [
  {
    title: "Springfield's Diverse Housing Stock and What It Means for Decks",
    paragraphs: [
      "Springfield's neighborhoods span four decades of building  -  from the mid-century ranches of North Springfield and Kings Park built in the 1960s to the townhomes and single-family homes of Kingstowne completed in the early 2000s. That range creates very different deck projects depending on which part of Springfield you live in.",
      "Older single-family homes in West Springfield, Saratoga and Franconia typically have larger lots with room for 400+ sqft multi-level decks, screened porches and stair runs to the yard. Many still have original wood decks from the 1980s or 1990s that need full replacement. Kingstowne and Daventry townhomes, on the other hand, call for compact, efficient designs  -  typically 200-300 sqft rear decks maximized with built-in benches, planter boxes and space-saving railing choices.",
      "We design for both ends of that spectrum. The engineering is different, the permit drawings are different and the material selections often differ, but the build quality is the same."
    ]
  },
  {
    title: "Deck Value in Springfield's Real Estate Market",
    paragraphs: [
      "Springfield sits in a value-conscious segment of the Northern Virginia market. Home prices are strong but below the peaks seen in western Loudoun or McLean, which means buyers here pay close attention to outdoor living space as a differentiator. A well-built composite deck is one of the most visible upgrades a Springfield home can carry, and it directly expands usable square footage.",
      "National remodeling data puts composite deck ROI at 65-75% of project cost at resale, and in Springfield's competitive market  -  where families commuting to Fort Belvoir, the Pentagon and the Springfield Metro are comparing similar homes  -  a finished deck can be the factor that moves a listing. The practical return goes beyond resale: a family that uses their deck three seasons a year gets years of daily value from the investment.",
      "We size and specify Springfield decks with both the homeowner's use and the home's market position in mind. Overbuilding a $60,000 deck on a $550,000 Springfield home makes less sense than a well-designed $30,000 deck that hits the right balance."
    ]
  },
  {
    title: "Navigating Kingstowne's Architectural Review",
    paragraphs: [
      "Kingstowne is one of Fairfax County's largest planned communities, and its homeowner association maintains an active architectural review committee. Any exterior modification  -  including a new deck or deck replacement  -  requires an application with drawings, material specifications, color selections and sometimes a neighbor notification.",
      "We handle the full Kingstowne ARC process. The submission includes dimensioned drawings showing the deck footprint relative to property lines and setbacks, the specific composite board and railing products with manufacturer color chips, and a description of the build timeline. Our packages are designed to answer the committee's questions upfront, which reduces the back-and-forth that delays approvals.",
      "Turnaround varies by season  -  spring submissions take longer because more homeowners are applying  -  but 2-4 weeks is typical. We submit the ARC application at the same time we file the Fairfax County permit so the two review periods overlap rather than run in series."
    ]
  },
  {
    title: "Deck and Patio Combinations for Springfield Homes",
    paragraphs: [
      "Many Springfield lots have a gentle grade change from the back door to the yard  -  enough to make a raised deck practical and a patio below it useful. A deck-and-patio combination takes advantage of that grade: the composite deck extends from the main floor for dining and seating, while a paver or concrete patio at ground level serves as a second outdoor room.",
      "The key to making this work is under-deck drainage. A dry-joist system installed beneath the deck boards channels water to a gutter at the edge, keeping the patio below completely dry during rain. Without drainage, the lower patio gets wet every time it rains and accumulates debris  -  defeating the purpose of the covered space.",
      "Combined deck-and-patio builds in Springfield typically run $35,000-$55,000 depending on total square footage, material tier and whether the patio is pavers or stamped concrete. It is a more involved project than a deck alone, but it effectively creates two distinct outdoor living zones from a single build."
    ]
  }
];

export default function DeckBuilderSpringfieldPage() {
  return (
    <main>
      <LocalBusinessSchema city="Springfield" url="https://ldndecks.com/deck-builder-springfield-va" />
      <WebPageSchema url="https://ldndecks.com/deck-builder-springfield-va" name="Deck Builder in Springfield, VA | Trex Certified | Loudoun Decks" description="Deck builder in Springfield, VA. Custom Trex &amp; composite decks for Kingstowne, West Springfield, Franconia &amp; Saratoga. Fairfax County permits handled. Free estimate  -  (571) 655-7207." speakable />
      <ServicesHeader
        subtext="Springfield, VA's Trusted Deck Company"
        title="Custom Deck Builder in Springfield, VA"
        description="Loudoun Decks builds composite decks and screened porches across Kingstowne, West Springfield, Franconia and Saratoga. Fairfax County permits handled. 5-Star Google Rated."
      />
      <ServiceMain
        subtitle="Smart Outdoor Living for Springfield Families"
        title="Deck Builder Springfield VA  -  Premium Quality"
        description="Springfield's mix of ranches, colonials and townhomes calls for decks designed to fit  -  not a template. Composite builds from Trex and TimberTech, Kingstowne HOA handled, projects from $22k+."
        listItems={[
          "TrexPro & TimberTech Certified installer",
          "Kingstowne & Springfield HOA submissions handled",
          "Deck + patio combinations with under-deck drainage",
          "Fairfax County permits filed and inspected",
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
            alt="Composite deck built by LDN Decks in Springfield, Virginia"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Trex Deck Builder Springfield</h2>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Composite Decks for Kingstowne, West Springfield, Franconia and Beyond</h3>
      </div>
      <ServiceInclusions
        title="Why Springfield Chooses Loudoun Decks"
        description="We are a local Northern Virginia team that builds across Springfield's diverse neighborhoods  -  from Kingstowne townhomes to West Springfield single-family homes."
        items={inclusions}
      />
      <ProcessSteps />
      <ServicesFAQ
        title="Deck Builder Springfield VA  -  FAQs"
        faqs={springfieldFAQs}
        canonicalUrl="https://ldndecks.com/deck-builder-springfield-va"
      />
      <ServiceAreasGrid />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            ['/composite-deck-builder-loudoun', 'Composite Deck Builder in Loudoun County'],
            ['/deck-permit-fairfax-county-virginia', 'Fairfax County Deck Permit Guide'],
            ['/hoa-deck-rules-northern-virginia', 'HOA Deck Rules in Northern Virginia'],
            ['/how-much-does-a-deck-cost-northern-virginia', 'How Much Does a Deck Cost in Northern Virginia?'],
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
      <section style={{ padding: '2rem 1.5rem' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><GoogleMapEmbed city="Springfield" /></div></section>
      <SimpleCTA title="Upgrade Your Springfield Deck" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-springfield-va" />
      <NamedAuthor context="Springfield and Northern Virginia" lastUpdated="2026-05-26" />
      <ContactHome />
    </main>
  );
}
