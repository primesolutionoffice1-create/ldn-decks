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
import CityAuthorityExpansion from '@/components/CityAuthorityExpansion';
import PlanningUpdate from '@/components/PlanningUpdate';

export const metadata = buildMetadata({
  path: '/deck-builder-herndon-va',
  title: 'Deck Builder in Herndon, VA | Trex Certified | Loudoun Decks',
  description: 'Trusted deck builder in Herndon, VA. Trex Platinum Partner & TimberTech Certified. Custom composite decks, screened porches & pergolas. Free estimate  -  call (571) 655-7207.',
  image: '/social/deck-builder-herndon-va-social.png',
});

const inclusions = [
  {
    title: "Herndon Permit & HOA Expertise",
    desc: "We navigate the requirements of both the Town of Herndon and Fairfax County, as well as local HOAs, with permit-ready planning and clear submission details."
  },
  {
    title: "Premium Composite Specialists",
    desc: "As certified Trex Platinum and TimberTech installers, we deliver high-grade composite decking that withstands the variable Virginia weather while looking pristine."
  },
  {
    title: "Tech Corridor Craftsmanship",
    desc: "Building outdoor spaces that elevate Herndon homes with precision engineering, clean lines, and premium materials designed to last decades."
  }
];

const herndonFAQs = [
  {
    q: "Do you build custom decks in Herndon, VA?",
    a: "Yes. Loudoun Decks is a highly trusted deck builder serving all of Herndon, from the historic downtown area to the neighborhoods bordering the Dulles Tech Corridor."
  },
  {
    q: "What is the cost of a composite deck in Herndon?",
    a: "A professional composite deck in Herndon typically ranges from $20,000 to $50,000+, depending on size, materials, multi-level design, and add-ons like screened porches."
  },
  {
    q: "Do you handle the Herndon permitting process?",
    a: "Yes. Building in Herndon can sometimes involve both Town of Herndon and Fairfax County regulations. We handle the entire permitting and HOA submission process for you."
  },
  {
    q: "How long does it take to build a deck in Herndon?",
    a: "Permitting typically takes about 2-4 weeks. Once approved by the county and your HOA, most standard deck builds are completed in 1-2 weeks. Complex projects may take 3-4 weeks."
  },
  {
    q: "Are you a Trex certified contractor in Herndon VA?",
    a: "Yes. Loudoun Decks is a Trex Platinum Partner, giving Herndon clients access to Trex product lines, manufacturer-backed warranty paths, and installation practices aligned with Trex requirements."
  },
  {
    q: "Do you build screened porches in Herndon?",
    a: "Yes, we specialize in building structurally integrated screened porches, pergolas, and full outdoor living spaces for Herndon homeowners."
  }
];

const expansionSections = [
  {
    title: "Why Herndon Homeowners Choose Loudoun Decks",
    paragraphs: [
      "Herndon neighborhoods \u2014 from the historic districts to newer developments near the Innovation Center \u2014 each have unique characteristics and guidelines. We plan around Town of Herndon, Fairfax County, HOA, and site constraints so the deck design complements the home while meeting local building codes.",
      "Herndon project scopes often include multi-level TimberTech decks, screened porch additions near downtown, and backyard transformations with Trex Transcend decks and under-deck patios. Specific project examples should be added only from verified owner-supplied evidence."
    ]
  },
  {
    title: "Herndon's Premier Custom Deck Builder",
    paragraphs: [
      "Herndon, VA offers a mix of small-town charm and modern suburban convenience. As a dedicated deck builder in Herndon, Loudoun Decks brings premium craftsmanship to every project. We are not a volume builder focused on rushing through jobs; we are a detail-oriented team that prioritizes quality and longevity.",
      "Whether you're looking to replace an old wooden deck with modern composites or build a brand-new outdoor entertainment space from scratch, our team handles the entire process. We manage the Fairfax County/Town of Herndon permits, the HOA architectural review board submissions, and the structural engineering.",
      "If you are looking for a deck builder near you in Herndon that prioritizes quality, code-aware planning, and clear communication, Loudoun Decks is your partner. Public review profiles can help homeowners evaluate reputation alongside license, insurance, materials, and scope detail."
    ]
  },
  {
    title: "Composite Decking Specialists for Herndon Homes",
    paragraphs: [
      "The humid Virginia summers make composite decking the ideal choice for Herndon homeowners. As a Trex Platinum Partner and TimberTech Certified contractor, we install decking that won't warp, splinter, or rot. Projects typically start around $20,000 and scale based on your specific design requirements.",
      "We specialize in designing decks that maximize the usable outdoor space of your property. Integrated lighting, custom railings, and built-in seating are standard requests that we execute flawlessly.",
      "Every composite deck proposal in Herndon includes manufacturer warranty information for the selected product line and installation practices aligned with published manufacturer guidance."
    ],
    listItems: [
      { label: "Trex Platinum Partner", text: "Trex product-line familiarity and manufacturer-aligned installation practices for Herndon and Northern Virginia." },
      { label: "TimberTech Certified", text: "Certified installer for the full TimberTech Pro and AZEK product lines." },
      { label: "Permit Ready", text: "Full handling of all Fairfax County and Town of Herndon permitting." },
      { label: "Public Profiles", text: "Homeowners can review public profiles and project documentation before approving a scope." }
    ]
  },
  {
    title: "Screened Porches and Outdoor Living in Herndon",
    paragraphs: [
      "Many Herndon homeowners are expanding their vision beyond just a deck. A screened porch addition allows you to enjoy the Virginia outdoors without the intense summer sun or evening insects. We specialize in screen room additions that look like original extensions of your home.",
      "Pergolas are another excellent addition, providing architectural character and partial shade. We build both traditional open-rafter wood pergolas and modern low-maintenance systems.",
      "Our full outdoor living packages \u2014 combining decks, screened porches, and under-deck dry systems \u2014 deliver a complete transformation of your property's outdoor potential, maximizing your home's resale value in the Herndon market."
    ]
  }
];

export default function DeckBuilderHerndonPage() {
  return (
    <main>
      <LocalBusinessSchema city="Herndon" url="https://ldndecks.com/deck-builder-herndon-va" />
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/deck-builder-herndon-va" name="Deck Builder in Herndon, VA | Trex Certified | Loudoun Decks" description="Trusted deck builder in Herndon, VA. Trex Platinum Partner &amp; TimberTech Certified. Custom composite decks, screened porches &amp; pergolas. Free estimate  -  call (571) 655-7207." speakable />
      <ServicesHeader
        subtext="Herndon, VA's Trusted Deck Company"
        title="Custom Deck Builder in Herndon, VA"
        description="Loudoun Decks builds premium composite decks and screened porches in Herndon. Trex Platinum Partner. publicly documented reputation."
      />
      <ServiceMain
        subtitle="Dulles Corridor Craftsmanship"
        title="Deck Builder Herndon VA  -  Premium Quality"
        description="We build the outdoor spaces Herndon homeowners love. Custom designs, HOA-ready plans, and premium composite materials starting at $20k+."
        listItems={[
          "Trex Platinum & TimberTech Certified",
          "Full Herndon & Fairfax County Permit management",
          "Custom multi-level and single-level designs",
          "Screened porches, pergolas & under-deck patios",
          "Public reviews - call (571) 655-7207"
        ]}
        image1="/images/img36.jpeg"
        image2="/images/img37.jpeg"
      />
      <PlanningUpdate
        market="Herndon decks in 2026"
        notes={[
          "Herndon projects should confirm whether the address falls under Town of Herndon review, Fairfax County review, or both before drawings are finalized.",
          "Older Dulles corridor decks should be inspected for ledger flashing, stair safety, and framing condition before resurfacing is recommended.",
          "HOA packages should show board color, railing style, stair layout, and rear-yard visibility clearly so preventable review questions are reduced."
        ]}
        links={[
          { href: "/deck-permit-fairfax-county-virginia", label: "Fairfax permit guide" },
          { href: "/deck-safety-inspection-checklist", label: "Safety checklist" },
          { href: "/deck-resurfacing-vs-replacement", label: "Resurface vs replace" }
        ]}
      />
      <ServiceContentExpansion sections={expansionSections} />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
          <Image
            src="/images/img17.jpeg"
            alt="Premium custom deck built by LDN Decks in Herndon, Virginia"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Trex Deck Builder Herndon</h2>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Herndon: Expanding Your Outdoor Living Space</h3>
      </div>
      <ServiceInclusions
        title="Why Herndon Chooses Loudoun Decks"
        description="We are a local Northern Virginia team with deep roots in the Dulles corridor and the credentials to back every build."
        items={inclusions}
      />
      <ProcessSteps />
      <ServicesFAQ
        title="Deck Builder Herndon VA  -  FAQs"
        faqs={herndonFAQs}
        canonicalUrl="https://ldndecks.com/deck-builder-herndon-va"
      />
      <ServiceAreasGrid />
      <CityAuthorityExpansion cityKey="herndon" />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
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
      <section style={{ padding: '2rem 1.5rem' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><GoogleMapEmbed city="Herndon" /></div></section>
      <SimpleCTA title="Build Your Dream Deck in Herndon" buttonText="Get Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath="/deck-builder-herndon-va" />
      <NamedAuthor context="Herndon and Northern Virginia" lastUpdated="2026-06-01" />
      <ContactHome />
    </main>
  );
}
