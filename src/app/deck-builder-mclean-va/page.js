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

export const metadata = buildMetadata({
  path: '/deck-builder-mclean-va',
  title: 'Deck Builder in McLean, VA | Trex Certified | Loudoun Decks',
  description: 'Top-rated deck builder in McLean, VA. 5.0★ Google. Specializing in luxury Trex & TimberTech decks, multi-level designs, and screened porches for McLean estates. Free estimate.',
  image: '/images/img64.jpeg',
});

const inclusions = [
  {
    title: "Luxury Design Standards",
    desc: "We specialize in the high-end finishes expected in McLean, including glass railings, cable systems, and custom multi-level architecture."
  },
  {
    title: "Fairfax County RPA Experts",
    desc: "Experienced with Resource Protection Area (RPA) reviews required for many McLean properties near the Potomac."
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
    q: "Are you a certified Trex Platinum builder in McLean?",
    a: "Yes. Loudoun Decks is a Trex Platinum Partner, meaning our McLean clients get the highest level of craftsmanship and the full protection of Trex's best warranties."
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
      "If your property falls within a Resource Protection Area (RPA), we manage the additional environmental reviews and mitigation plans required by Fairfax County. We ensure that your project is not only stunning but fully compliant with all local environmental regulations. Our experience in areas like Great Falls and McLean means we can anticipate these requirements early in the design phase, avoiding costly delays.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. Our reputation for structural integrity and 5-Star craftsmanship is why McLean homeowners consistently choose us for their most ambitious outdoor projects."
    ],
    listItems: [
      { label: "RPA Expertise", text: "Specialized knowledge of environmental reviews for properties near the Potomac." },
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
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. We are proud to be the 5-Star Choice for McLean homeowners seeking the absolute best in custom outdoor construction."
    ]
  }
];

export default function McLeanDeckBuilderPage() {
  return (
    <main>
      <JsonLd data={mcleanFaqSchema} />
      <LocalBusinessSchema city="McLean" url="https://ldndecks.com/deck-builder-mclean-va" />
      <WebPageSchema url="https://ldndecks.com/deck-builder-mclean-va" name="Deck Builder in McLean, VA | Trex Certified | Loudoun Decks" description="Top-rated deck builder in McLean, VA. 5.0★ Google. Specializing in luxury Trex &amp; TimberTech decks, multi-level designs, and screened porches for McLean estates. Free estimate." speakable />
      <ServicesHeader
        subtext="McLean, VA's Choice for Luxury Decks"
        title="Custom Deck Builder in McLean, VA"
        description="Loudoun Decks builds high-end composite decks, multi-level structures, and screened porches for McLean estates. Trex Platinum Partner. 5-Star Google Rated."
      />

      {/* Pricing Anchor - Conversion Filtering */}
      <section style={{ backgroundColor: '#fff5f2', padding: '24px 20px', borderBottom: '1px solid #ffdbd1' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: '#d14817', margin: 0, fontWeight: '500' }}>
            <strong style={{ color: '#111', fontSize: '18px' }}>New custom build minimum: $5,000+</strong>
            <br />
            We focus on <strong style={{ color: '#111' }}>full custom McLean builds</strong>. Need a repair instead? Visit our <a href="/services/deck-repair-and-structural-maintenance" style={{ color: '#d14817', textDecoration: 'underline', fontWeight: 600 }}>deck repair service</a> for board replacement, railings, and structural fixes.
          </p>
        </div>
      </section>

      <ServiceMain
        subtitle="McLean's Trusted Choice"
        title="Deck Builder McLean VA - Unmatched Craftsmanship"
        description="We design and build the luxury outdoor environments McLean homeowners demand. Custom multi-level builds, premium composite, and full permit management from $30k+."
        listItems={[
          "Trex Platinum & TimberTech Certified",
          "Specialists in Fairfax County RPA environmental reviews",
          "Custom multi-level & luxury estate designs",
          "Screened porches, outdoor kitchens & cable railings",
          "5-Star Google Rated - call (571) 655-7207"
        ]}
        image1="/images/img64.jpeg"
        image2="/images/img21.jpeg"
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
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Featured McLean Project: Langley Forest Retreat</h2>
        <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>
          Our featured McLean project includes a <strong>$68,000 550 sqft Deck + Screened Porch</strong> in Langley Forest. 
          This multi-level project utilized TimberTech AZEK in Dark Hickory with Trex Signature glass railings 
          to preserve the views of the wooded lot. We managed the complex Fairfax County RPA review and building 
          permit process, delivering a 5-Star result in just under 6 weeks.
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
            ['/screened-porch-builder-northern-virginia', 'Screened Porch Builder Northern Virginia'],
            ['/deck-permit-fairfax-county-virginia', 'Fairfax County Deck Permit Guide'],
            ['/how-much-does-a-deck-cost-northern-virginia', 'How Much Does a Deck Cost in Northern Virginia?'],
            ['/trex-vs-timbertech-vs-azek', 'Trex vs TimberTech vs AZEK Comparison'],
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
      <section style={{ padding: '2rem 1.5rem' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><GoogleMapEmbed city="McLean" /></div></section>
      <SimpleCTA title="Build Your Luxury Deck in McLean" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-mclean-va" />
      <NamedAuthor context="Mclean and Northern Virginia" lastUpdated="2026-05-26" />
      <ContactHome />
    </main>
  );
}
