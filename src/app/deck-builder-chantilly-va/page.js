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
import GeoAnswerBlock from '@/components/GeoAnswerBlock';

export const metadata = buildMetadata({
  path: '/deck-builder-chantilly-va',
  title: 'Deck Builder in Chantilly, VA | Composite Decks | Loudoun Decks',
  description: 'Trusted deck builder in Chantilly, VA. Trex product-line planning & TimberTech and AZEK product planning. Custom composite decks, screened porches & pergolas. Free estimate  -  call (571) 655-7207.',
  image: '/social/deck-builder-chantilly-va-social.png',
});

const inclusions = [
  {
    title: "Chantilly & Sully District Expertise",
    desc: "We navigate the requirements of Fairfax County's Sully District and local HOAs with permit-ready planning and clear submission details."
  },
  {
    title: "Premium Composite Specialists",
    desc: "With Trex, TimberTech, and AZEK material planning experience, we deliver high-grade composite decking that withstands the variable Virginia weather while looking pristine."
  },
  {
    title: "Route 50 Corridor Craftsmanship",
    desc: "Building outdoor spaces that elevate Chantilly homes with precision engineering, clean lines, and premium materials designed to last decades."
  }
];

const chantillyFAQs = [
  {
    q: "Do you build custom decks in Chantilly, VA?",
    a: "Yes. Loudoun Decks is a highly trusted deck builder serving all of Chantilly, including neighborhoods along the Route 50 corridor and the Sully District."
  },
  {
    q: "What is the cost of a composite deck in Chantilly?",
    a: "A professional composite deck in Chantilly typically ranges from $20,000 to $50,000+, depending on size, materials, multi-level design, and add-ons like screened porches."
  },
  {
    q: "Do you handle the Fairfax County permitting process for Chantilly homes?",
    a: "Yes. Building in Chantilly requires Fairfax County permits and local HOA approvals. We coordinate permitting and architectural review planning for you."
  },
  {
    q: "How long does it take to build a deck in Chantilly?",
    a: "Permitting typically takes about 2-4 weeks. Once approved by the county and your HOA, most standard deck builds are completed in 1-2 weeks. Complex projects may take 3-4 weeks."
  },
  {
    q: "Are you a Trex certified contractor in Chantilly VA?",
    a: "Loudoun Decks plans Chantilly projects with Trex product-line options, manufacturer warranty documentation, and installation practices aligned with published Trex requirements."
  },
  {
    q: "Do you build screened porches in Chantilly?",
    a: "Yes, we specialize in building structurally integrated screened porches, pergolas, and full outdoor living spaces for Chantilly homeowners."
  }
];

const expansionSections = [
  {
    title: "Why Chantilly Homeowners Choose Loudoun Decks",
    paragraphs: [
      "Chantilly neighborhoods each have unique characteristics and guidelines. We plan around Route 50 corridor site conditions, Fairfax County permit expectations, HOA requirements, and local building codes so the deck design fits the home and review path.",
      "Chantilly project scopes often include multi-level TimberTech decks, screened porch additions near Pleasant Valley, and backyard transformations with Trex Transcend decks and under-deck patios. Specific project examples should be added only from verified owner-supplied evidence."
    ]
  },
  {
    title: "Chantilly's Premier Custom Deck Builder",
    paragraphs: [
      "Chantilly, VA offers a mix of historic significance and modern suburban convenience. As a dedicated deck builder in Chantilly, Loudoun Decks brings premium craftsmanship to every project. We are not a volume builder focused on rushing through jobs; we are a detail-oriented team that prioritizes quality and longevity.",
      "Whether you're looking to replace an old wooden deck with modern composites or build a brand-new outdoor entertainment space from scratch, our team handles the entire process. We manage the Fairfax County permits, the HOA architectural review board submissions, and the structural engineering.",
      "If you are looking for a deck builder near you in Chantilly that prioritizes quality, code-aware planning, and clear communication, Loudoun Decks is your partner. Public review profiles can help homeowners evaluate reputation alongside license, insurance, materials, and scope detail."
    ]
  },
  {
    title: "Composite Decking Specialists for Chantilly Homes",
    paragraphs: [
      "The humid Virginia summers make composite decking the ideal choice for Chantilly homeowners. We plan Trex, TimberTech, and AZEK decking options with low-maintenance boards selected for Virginia humidity and freeze-thaw exposure. Projects typically start around $20,000 and scale based on your specific design requirements.",
      "We specialize in designing decks that maximize the usable outdoor space of your property. Integrated lighting, custom railings, and built-in seating are standard requests that we execute flawlessly.",
      "Every composite deck proposal in Chantilly includes manufacturer warranty information for the selected product line and installation practices aligned with published manufacturer guidance."
    ],
    listItems: [
      { label: "Trex product-line planning", text: "Trex product-line familiarity and manufacturer-aligned installation practices for Chantilly and Northern Virginia." },
      { label: "TimberTech and AZEK product planning", text: "TimberTech Pro and AZEK product-line planning for premium builds." },
      { label: "Permit Ready", text: "Permit planning support for Fairfax County and inspections." },
      { label: "Public Profiles", text: "Homeowners can review public profiles and project documentation before approving a scope." }
    ]
  },
  {
    title: "Screened Porches and Outdoor Living in Chantilly",
    paragraphs: [
      "Many Chantilly homeowners are expanding their vision beyond just a deck. A screened porch addition allows you to enjoy the Virginia outdoors without the intense summer sun or evening insects. We specialize in screen room additions that look like original extensions of your home.",
      "Pergolas are another excellent addition, providing architectural character and partial shade. We build both traditional open-rafter wood pergolas and modern low-maintenance systems.",
      "Our full outdoor living packages \u2014 combining decks, screened porches, and under-deck dry systems \u2014 deliver a complete transformation of your property's outdoor potential, maximizing your home's resale value in the Chantilly market."
    ]
  }
];

export default function DeckBuilderChantillyPage() {
  return (
    <main>
      <LocalBusinessSchema city="Chantilly" url="https://ldndecks.com/deck-builder-chantilly-va" />
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/deck-builder-chantilly-va" name="Deck Builder in Chantilly, VA | Composite Decks | Loudoun Decks" description="Trusted deck builder in Chantilly, VA. Trex product-line planning &amp; TimberTech and AZEK product planning. Custom composite decks, screened porches &amp; pergolas. Free estimate  -  call (571) 655-7207." speakable />
      <ServicesHeader
        subtext="Chantilly, VA's Trusted Deck Company"
        title="Custom Deck Builder in Chantilly, VA"
        description="Loudoun Decks builds premium composite decks and screened porches in Chantilly. Trex product-line planning. publicly documented reputation."
      />
      <ServiceMain
        subtitle="Sully District Craftsmanship"
        title="Deck Builder Chantilly VA  -  Premium Quality"
        description="We build the outdoor spaces Chantilly homeowners love. Custom designs, HOA-ready plans, and premium composite materials starting at $20k+."
        listItems={[
          "Trex, TimberTech and AZEK material planning",
          "Full Chantilly & Fairfax County Permit management",
          "Custom multi-level and single-level designs",
          "Screened porches, pergolas & under-deck patios",
          "Public reviews - call (571) 655-7207"
        ]}
        image1="/images/img36.jpeg"
        image2="/images/img37.jpeg"
      />
      <PlanningUpdate
        market="Chantilly decks in 2026"
        notes={[
          "Chantilly projects should confirm Fairfax County requirements, Sully District site constraints, and HOA rules before final design selections.",
          "Many Route 50 corridor decks need early decisions on stairs, privacy, shade, and drainage because rear-yard grades vary widely.",
          "Older pressure-treated decks should be inspected before resurfacing so unsafe ledger, railing, or footing conditions are not hidden under new boards."
        ]}
        links={[
          { href: "/deck-permit-fairfax-county-virginia", label: "Fairfax permit guide" },
          { href: "/deck-resurfacing-vs-replacement", label: "Resurface vs replace" },
          { href: "/deck-cost-calculator", label: "Deck cost calculator" }
        ]}
      />
      <GeoAnswerBlock
        question="Why do Chantilly deck projects need early HOA and permit planning?"
        answer="Chantilly deck projects often involve Fairfax County Sully District requirements, Route 50 corridor neighborhoods, HOA architectural review, and older wood deck replacement. Homeowners should check framing, ledger flashing, stairs, railings, material choices, HOA packet requirements, and Fairfax County permit details before choosing resurfacing, full replacement, or a screened porch addition."
        facts={[
          'Primary buyer intent: Chantilly deck builder, HOA-ready replacement, composite upgrades, and screened porches.',
          'Conversion path: Fairfax permit guide, HOA guide, and written estimate.'
        ]}
        links={[
          { href: '/deck-permit-fairfax-county-virginia', label: 'Fairfax permit guide' },
          { href: '/hoa-deck-rules-northern-virginia', label: 'HOA deck rules' },
          { href: '/get-estimate', label: 'Get a Chantilly estimate' }
        ]}
      />
      <ServiceContentExpansion sections={expansionSections} />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
          <Image
            src="/images/img17.jpeg"
            alt="Premium custom deck built by LDN Decks in Chantilly, Virginia"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Trex Deck Builder Chantilly</h2>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Chantilly: Expanding Your Outdoor Living Space</h3>
      </div>
      <ServiceInclusions
        title="Why Chantilly Chooses Loudoun Decks"
        description="We are a local Northern Virginia team with deep roots in the Route 50 corridor and the credentials to back every build."
        items={inclusions}
      />
      <ProcessSteps />
      <ServicesFAQ
        title="Deck Builder Chantilly VA  -  FAQs"
        faqs={chantillyFAQs}
        canonicalUrl="https://ldndecks.com/deck-builder-chantilly-va"
      />
      <ServiceAreasGrid />
      <CityAuthorityExpansion cityKey="chantilly" />
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
      <section style={{ padding: '2rem 1.5rem' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><GoogleMapEmbed city="Chantilly" /></div></section>
      <SimpleCTA title="Build Your Dream Deck in Chantilly" buttonText="Get Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath="/deck-builder-chantilly-va" />
      <NamedAuthor context="Chantilly and Northern Virginia" lastUpdated="2026-06-01" />
      <ContactHome />
    </main>
  );
}
