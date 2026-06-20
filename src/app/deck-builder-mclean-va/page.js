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
import JsonLd from '@/components/JsonLd';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import PlanningUpdate from '@/components/PlanningUpdate';
import GeoAnswerBlock from '@/components/GeoAnswerBlock';

export const metadata = buildMetadata({
  path: '/deck-builder-mclean-va',
  title: 'Deck Builder in McLean, VA | Trex Certified | Loudoun Decks',
  description: 'Trusted deck builder in McLean, VA. Google reviews. Specializing in luxury Trex & TimberTech decks, multi-level designs, and screened porches for McLean estates. Free estimate.',
  image: '/social/deck-builder-mclean-va-social.png',
});

const inclusions = [
  {
    title: "Luxury Design Standards",
    desc: "We specialize in the high-end finishes expected in McLean, including glass railings, cable systems, and custom multi-level architecture."
  },
  {
    title: "Fairfax County RPA Experts",
    desc: "We screen early for Resource Protection Area (RPA) constraints that can affect many McLean properties near the Potomac."
  },
  {
    title: "Concierge Project Management",
    desc: "Full management of HOA submissions, permits, and engineering for a seamless, white-glove experience in McLean."
  }
];

const mcleanFAQs = [
  {
    q: "How much does a custom deck cost in McLean, VA?",
    a: "Deck projects in McLean typically range from $30,000 to $75,000+. This range reflects the larger lot sizes, premium material preferences (like Trex Transcend or AZEK), and the complexity of multi-level designs common in McLean estates."
  },
  {
    q: "Do I need HOA approval for a deck in McLean?",
    a: "Many McLean neighborhoods, including Langley Forest, Chesterbrook, and the Farms of McLean, have HOA or architectural review requirements. We research your specific community's rules and handle all submissions for you."
  },
  {
    q: "What deck permits does McLean require?",
    a: "McLean falls under Fairfax County jurisdiction. All decks require building and zoning permits. Plan review typically takes 3-6 weeks. For properties near the Potomac, additional environmental (RPA) review may be necessary."
  },
  {
    q: "Can you build multi-level decks with outdoor kitchens?",
    a: "Yes. We specialize in complete outdoor living environments for McLean homes, integrating high-end composite decks with stone outdoor kitchens, fire pits, and pergola structures."
  },
  {
    q: "Do you build Trex and TimberTech decks in McLean?",
    a: "Yes. Loudoun Decks builds Trex and TimberTech deck projects in McLean, and we help homeowners compare product lines, manufacturer warranty terms, colors, railing options, and project-specific installation requirements before final material selection."
  }
];

const mcleanFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": mcleanFAQs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }))
};

const expansionSections = [
  {
    title: "McLean's Premier Custom Deck Specialists",
    paragraphs: [
      "McLean, VA is home to some of the most stunning properties in Northern Virginia, and your outdoor living space should reflect that excellence. At Loudoun Decks, we specialize in high-end, custom-engineered decks that match the luxury and architectural sophistication of McLean estates. Whether you are in Langley Forest, Chesterbrook, or the heart of downtown McLean, we bring a concierge-level approach to your project.",
      "Our clients in McLean expect more than just a deck; they expect an outdoor retreat. This is why we focus on premium materials like Trex Transcend and TimberTech AZEK, combined with modern aesthetic choices like black aluminum or stainless steel cable railings. These materials don't just look better—they last longer and require zero of the maintenance that plagues traditional wood decks in Virginia's climate.",
      "As a 'Full Projects Only' builder, we handle every detail from the first CAD drawing to the final county inspection. We specialize in navigating the complexities of Fairfax County permitting and the strict architectural review boards of McLean's most prestigious neighborhoods."
    ]
  },
  {
    title: "Engineering for McLean's Unique Landscapes",
    paragraphs: [
      "Many properties in McLean feature significant elevation changes or are located in environmentally sensitive areas near the Potomac River. Building in these zones requires a deck builder with deep engineering knowledge. We specialize in multi-level deck structures that turn sloped backyards into functional, beautiful entertainment hubs.",
      "If your property falls within a Resource Protection Area (RPA), Fairfax County may require additional environmental review and mitigation planning. We screen for those constraints early in the design phase so the deck concept, access path, and permit path are realistic before pricing is finalized.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. Our reputation for structural integrity and Premium craftsmanship is why McLean homeowners consistently choose us for their most ambitious outdoor projects."
    ],
    listItems: [
      { label: "RPA Screening", text: "Early review for environmental constraints that can affect properties near the Potomac." },
      { label: "Multi-Level Engineering", text: "Custom structural solutions for sloped and complex McLean lots." },
      { label: "Integrated Lighting", text: "Low-voltage LED systems that transform your McLean deck into a nighttime oasis." },
      { label: "Hidden Fasteners", text: "Screw-free deck surfaces for a clean, luxury finish that is safe for bare feet." }
    ]
  },
  {
    title: "Complete Outdoor Living Transformations",
    paragraphs: [
      "For many of our McLean clients, a deck is just the foundation. We specialize in integrating decks with other high-end outdoor features to create a cohesive lifestyle environment. This includes screened porches with tongue-and-groove ceilings, retractable screen systems, and built-in heaters for three-season comfort.",
      "We also design and build custom outdoor kitchens, stone fire pits, and louvered pergola systems. Imagine hosting a summer dinner party in McLean on a deck that features a full grill station, ambient lighting, and a shaded pergola for daytime comfort. Our 'Full Project' philosophy ensures that all these elements are designed and built together with a singular focus on quality.",
      "Every project includes a dedicated project manager who provides consistent communication from start to finish. We understand that your time is valuable, and our goal is to deliver your new outdoor space on time and with zero stress."
    ]
  },
  {
    title: "The Investment Value of a McLean Custom Deck",
    paragraphs: [
      "In the high-value McLean real estate market, a custom-designed outdoor living space is a major asset. It increases your home's usable square footage and provides an immediate competitive advantage if you ever decide to sell. Buyers in areas like Great Falls and McLean prioritize low-maintenance, luxury outdoor features.",
      "By investing in a composite deck today, you are also eliminating the future costs of sanding and staining. A traditional wood deck in Northern Virginia requires professional maintenance every 2 years, which can cost thousands over the life of the deck. Our Trex and TimberTech projects are designed to stay beautiful for 25 to 50 years with nothing more than an occasional wash.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. We are proud to be the Premium Choice for McLean homeowners seeking the absolute best in custom outdoor construction."
    ]
  }
];

export default function McLeanDeckBuilderPage() {
  return (
    <main>
      <JsonLd data={mcleanFaqSchema} />
      <LocalBusinessSchema city="McLean" url="https://ldndecks.com/deck-builder-mclean-va" />
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/deck-builder-mclean-va" name="Deck Builder in McLean, VA | Trex Certified | Loudoun Decks" description="Trusted deck builder in McLean, VA. Google reviews. Specializing in luxury Trex &amp; TimberTech decks, multi-level designs, and screened porches for McLean estates. Free estimate." speakable />
      <ServicesHeader
        subtext="McLean, VA's Choice for Luxury Decks"
        title="Custom Deck Builder in McLean, VA"
        description="Loudoun Decks builds high-end composite decks, multi-level structures, and screened porches for McLean estates. Trex product-line planning. publicly documented reputation."
      />

      {/* Pricing Anchor - Conversion Filtering */}
      <section style={{ backgroundColor: '#fff5f2', padding: '24px 20px', borderBottom: '1px solid #ffdbd1' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: '#d14817', margin: 0, fontWeight: '500' }}>
            <strong style={{ color: '#111', fontSize: '18px' }}>New custom build minimum: $5,000+</strong>
            <br />
            We focus on <strong style={{ color: '#111' }}>full custom McLean builds</strong>. Need a repair instead? Visit our <a href="/services/deck-repair" style={{ color: '#d14817', textDecoration: 'underline', fontWeight: 600 }}>deck repair service</a> for board replacement, railings, and structural fixes.
          </p>
        </div>
      </section>

      <ServiceMain
        subtitle="McLean's Trusted Choice"
        title="Deck Builder McLean VA - Unmatched Craftsmanship"
        description="We design and build the luxury outdoor environments McLean homeowners demand. Custom multi-level builds, premium composite, and permit planning support from $30k+."
        listItems={[
          "Trex, TimberTech and AZEK material planning",
          "Early screening for Fairfax County RPA environmental constraints",
          "Custom multi-level & luxury estate designs",
          "Screened porches, outdoor kitchens & cable railings",
          "Public reviews - call (571) 655-7207"
        ]}
        image1="/images/img64.jpeg"
        image2="/images/img21.jpeg"
      />
      <PlanningUpdate
        market="McLean decks in 2026"
        notes={[
          "McLean planning should screen for Fairfax County jurisdiction, HOA review, slope, and possible RPA constraints before premium materials are selected.",
          "Large estate decks often need early decisions on glass, cable, aluminum railing, drainage, lighting, and screened porch integration.",
          "For older McLean decks, the first budget question is whether the framing can be reused or whether a code-reset replacement is safer."
        ]}
        links={[
          { href: "/deck-permit-fairfax-county-virginia", label: "Fairfax permit guide" },
          { href: "/mclean-great-falls-premium-deck-budget", label: "McLean budget guide" },
          { href: "/trex-vs-timbertech-vs-azek", label: "Premium material comparison" }
        ]}
      />
      <GeoAnswerBlock
        question="Who plans premium composite decks in McLean, VA?"
        answer="McLean deck projects usually need premium material planning, Fairfax County permit review, slope and drainage checks, privacy planning, and early decisions on railings, lighting, screened porches, or outdoor kitchens. Loudoun Decks plans composite deck replacement and outdoor living scopes for McLean homeowners while keeping manufacturer, project, and neighborhood proof claims gated until verified evidence is available."
        facts={[
          'Primary buyer intent: premium composite decks, estate outdoor living, screened porches, and code-reset replacement.',
          'Proof status: no McLean project/photo/manufacturer claim should be promoted without proof-lock.',
          'Conversion path: premium budget guide, material comparison, and written estimate.'
        ]}
        links={[
          { href: '/mclean-great-falls-premium-deck-budget', label: 'McLean budget guide' },
          { href: '/trex-vs-timbertech-vs-azek', label: 'Material comparison' },
          { href: '/get-estimate', label: 'Get a McLean estimate' }
        ]}
      />
      <ServiceContentExpansion sections={expansionSections} />
      
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
          <Image
            src="/images/img17.jpeg"
            alt="Premium custom deck built by LDN Decks in McLean, Virginia"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>McLean Project Planning: Premium Deck + Outdoor Living</h2>
        <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>
          Typical McLean scopes include 450 to 700 sqft multi-level composite decks, TimberTech AZEK or Trex Transcend boards,
          glass or cable railing, lighting, screened porch tie-ins, and slope-aware access planning.
          Verified project examples should be added here only after owner-supplied photos, scope, date, and permit details are available.
        </p>
      </div>

      <ServiceInclusions
        title="Why McLean Chooses Loudoun Decks"
        description="Local knowledge, premium materials, and a process built for McLean properties."
        items={inclusions}
      />
      <ProcessSteps />
      <ServicesFAQ canonicalUrl="https://ldndecks.com/deck-builder-mclean-va" withSchema={false}
        title="Deck Builder McLean VA - FAQs"
        faqs={mcleanFAQs}
      />
      <ServiceAreasGrid />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            ['/composite-deck-builder-loudoun', 'Composite Deck Builder in Loudoun County'],
            ['/mclean-great-falls-premium-deck-budget', 'McLean &amp; Great Falls Premium Deck Budget Guide'],
            ['/screened-porch-builder-northern-virginia', 'Screened Porch Builder Northern Virginia'],
            ['/deck-permit-fairfax-county-virginia', 'Fairfax County Deck Permit Guide'],
            ['/composite-deck-cost-northern-virginia', 'How Much Does a Deck Cost in Northern Virginia?'],
            ['/timbertech-azek-deck-cost-northern-virginia', 'TimberTech &amp; AZEK Premium Deck Cost'],
            ['/trex-vs-timbertech-vs-azek', 'Trex vs TimberTech vs AZEK Comparison'],
          ].map(([href, text]) => (
            <li key={href} style={{ marginBottom: '0.5rem' }}>
              <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link>
            </li>
          ))}
        
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (Google reviews) →</Link></li>
            <li key="/bbb" style={{ marginBottom: '0.5rem' }}><Link href="/bbb-accredited-deck-builder-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>BBB Accredited Deck Builder →</Link></li>
            <li key="/before-after" style={{ marginBottom: '0.5rem' }}><Link href="/before-and-after" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Before & After Premium Projects →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
            <li key="/deck-payment-estimator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-payment-estimator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck Payment Estimator →</Link></li>
            <li key="/get-estimate" style={{ marginBottom: '0.5rem' }}><Link href="/get-estimate" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Request a Written McLean Estimate →</Link></li>
            <li key="/deck-builder-northern-virginia" style={{ marginBottom: '0.5rem' }}><Link href="/deck-builder-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Northern Virginia Deck Builder Guide →</Link></li>
            <li key="/services/new-decks" style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building Services →</Link></li>
          </ul>
      </section>
      <section style={{ padding: '2rem 1.5rem' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><GoogleMapEmbed city="McLean" /></div></section>
      <SimpleCTA title="Build Your Luxury Deck in McLean" buttonText="Get Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath="/deck-builder-mclean-va" />
      <NamedAuthor context="McLean and Northern Virginia" lastUpdated="2026-06-01" />
      <ContactHome />
    </main>
  );
}
