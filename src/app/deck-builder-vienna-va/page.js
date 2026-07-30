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
import CityLeadFormSection from '@/components/CityLeadFormSection';
import PremiumCityLeadQualifier from '@/components/PremiumCityLeadQualifier';

export const metadata = buildMetadata({
  path: '/deck-builder-vienna-va',
  title: 'Deck Builder in Vienna, VA | Composite Decks | Loudoun Decks',
  description: 'Trusted deck builder in Vienna, VA. Google reviews. Custom Trex & TimberTech decks, screened porches & pergolas. Town of Vienna permit experts. Free estimate.',
  image: '/social/deck-builder-vienna-va-social.png',
});

const inclusions = [
  {
    title: "Town of Vienna Experts",
    desc: "We navigate the unique building department requirements of the Town of Vienna and prepare the permit package around current town and Fairfax County expectations."
  },
  {
    title: "Fairfax Luxury Standards",
    desc: "Building high-end outdoor spaces that match the premium real estate of Vienna, Windover Heights, and Tysons Woods."
  },
  {
    title: "Full Project Management",
    desc: "From initial CAD designs to HOA submissions and final county inspections, we handle the entire process in Vienna."
  }
];

const viennaFAQs = [
  {
    q: "How much does a custom deck cost in Vienna, VA?",
    a: "Most professional deck projects in Vienna range from $25,000 to $65,000. Composite decks (Trex/AZEK) typically average between $40 and $65 per square foot installed, depending on structural needs and railing choices."
  },
  {
    q: "Do I need a permit for a deck in the Town of Vienna?",
    a: "Yes. If your property is within the Town of Vienna limits, you need a permit from the Town's building department. If you are in the Vienna zip code but outside town limits, you fall under Fairfax County. We handle the process for both."
  },
  {
    q: "Do HOAs in Vienna allow composite decking?",
    a: "Yes, nearly all Vienna HOAs (like those in Vienna Woods or Country Creek) approve and often prefer composite decking due to its consistent appearance and lack of maintenance issues over time."
  },
  {
    q: "How long does it take to build a deck in Vienna?",
    a: "Permit review usually takes 2-4 weeks. Once the permit is issued, construction of a standard composite deck typically takes 1-2 weeks. Screened porches or multi-level projects may take 3-4 weeks."
  },
  {
    q: "Are you a licensed deck builder in Fairfax County?",
    a: "Yes, Loudoun Decks is a Class A licensed contractor, fully insured, and carries specialized certifications from Trex (Platinum Partner) and TimberTech."
  }
];

const viennaFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": viennaFAQs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }))
};

const expansionSections = [
  {
    title: "Vienna's Choice for Premium Outdoor Living",
    paragraphs: [
      "Vienna, VA is a community that values quality, tradition, and well-maintained properties. As a premier deck builder in Vienna, Loudoun Decks understands that a deck is more than just an add-on; it is a critical extension of your home's value and your family's lifestyle. From the historic charm of Windover Heights to the modern renovations in Tysons Woods, we build outdoor spaces that stand the test of time.",
      "We specialize in 'Full Projects Only,' meaning we manage the design, the structural engineering, the permitting, and the final Premium build. Our clients in Vienna expect precision, and that is exactly what we deliver. We utilize advanced materials like Trex Transcend and TimberTech Vintage to ensure your deck remains as beautiful as the day it was finished, with no need for the sanding and staining required by traditional wood decks.",
      "Whether you are looking to replace a 20-year-old pressure-treated deck or you are designing a brand-new outdoor oasis from scratch, our team provides the local expertise and craftsmanship necessary to navigate Vienna's unique regulatory environment."
    ]
  },
  {
    title: "Navigating Vienna & Fairfax County Regulations",
    paragraphs: [
      "Building in Vienna requires a deep understanding of local zoning and building codes. If your home is within the Town of Vienna limits, your project must go through the Town's specific building department. This often involves a faster review cycle but requires precise adherence to town-specific setbacks and height restrictions. We verify the jurisdiction, setback rules, and submission requirements before plans are finalized.",
      "For homes in the greater Vienna area that fall under Fairfax County jurisdiction, we utilize our years of experience with the Fairfax County Land Development Services (LDS) portal. We ensure every footing, every ledger connection, and every railing detail meets or exceeds the current building codes. We manage the paperwork so you can focus on choosing your materials and design.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. We prepare permit and HOA submissions carefully for NoVA jurisdictions, including the sometimes complex requirements of Vienna HOAs."
    ],
    listItems: [
      { label: "Town of Vienna Specialist", text: "Expertise in navigating the Town's specific building department and zoning rules." },
      { label: "Fairfax County Compliant", text: "All projects outside town limits are built to the highest Fairfax County safety standards." },
      { label: "HOA Submission Management", text: "We provide full CAD drawings and site plans for your HOA's architectural review board." },
      { label: "Licensed & Insured", text: "Class A Contractor status with full workers' comp and liability coverage for your protection." }
    ]
  },
  {
    title: "Custom Designs for Vienna Neighborhoods",
    paragraphs: [
      "Every neighborhood in Vienna has its own 'vibe' and structural requirements. In neighborhoods with smaller lots, like Vienna Woods, we specialize in high-efficiency deck designs that maximize usable space without overwhelming the backyard. In areas with larger estates, like near Wolf Trap, we often build multi-level masterpieces featuring screened porches, outdoor kitchens, and integrated fire pits.",
      "Our featured Vienna projects often include the Trex Signature Aluminum railing in Charcoal Black—a sleek, modern look that is incredibly popular among Vienna homeowners for its slim profile and high-end feel. Combined with a multi-tonal composite board like Trex Transcend Spiced Rum or Island Mist, your deck will be the envy of the neighborhood.",
      "We also specialize in deck resurfacing in Vienna. If your existing deck frame is structurally sound, we can save you significant time and money by replacing only the surface boards and railings with premium composite. This is a perfect option for the many well-built homes in Vienna that just need an aesthetic and maintenance upgrade."
    ]
  },
  {
    title: "The Financial ROI of a Premium Deck in Vienna",
    paragraphs: [
      "In the competitive Vienna and Tysons Corner real estate markets, curb appeal and outdoor amenities are top priorities for buyers. A professionally installed composite deck by a Premium rated builder is one of the highest ROI investments you can make in your home. It expands your living square footage for a fraction of the cost of an indoor addition.",
      "Moreover, by choosing low-maintenance materials, you are saving thousands of dollars over the lifespan of the deck. Traditional wood decks in Virginia's humid climate require professional staining every 2 years—a cost that can easily exceed $8,000 over a decade. A composite deck by Loudoun Decks eliminates these costs, paying for its premium price point in just a few short years.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. We are committed to building high-value, high-performance decks that enhance your lifestyle and your property value in the heart of Northern Virginia."
    ]
  }
];

export default function ViennaDeckBuilderPage() {
  return (
    <main>
      <JsonLd data={viennaFaqSchema} />
      <LocalBusinessSchema city="Vienna" url="https://ldndecks.com/deck-builder-vienna-va" />
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/deck-builder-vienna-va" name="Deck Builder in Vienna, VA | Composite Decks | Loudoun Decks" description="Trusted deck builder in Vienna, VA. Google reviews. Custom Trex &amp; TimberTech decks, screened porches &amp; pergolas. Town of Vienna permit experts. Free estimate." speakable />
      <ServicesHeader
        subtext="Vienna, VA Deck Builder"
        title="Custom Deck Builder in Vienna, VA"
        description="Loudoun Decks builds premium composite and wood decks in Vienna, Tysons, and across Fairfax County. Trex product-line planning. publicly documented reputation."
      />

      {/* Pricing Anchor - Conversion Filtering */}
      <section style={{ backgroundColor: '#fff5f2', padding: '24px 20px', borderBottom: '1px solid #ffdbd1' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: '#d14817', margin: 0, fontWeight: '500' }}>
            <strong style={{ color: '#111', fontSize: '18px' }}>New custom build minimum: $5,000+</strong>
            <br />
            We focus on <strong style={{ color: '#111' }}>full custom Vienna builds</strong>. Need a repair instead? Visit our <a href="/services/deck-repair" style={{ color: '#d14817', textDecoration: 'underline', fontWeight: 600 }}>deck repair service</a> for board replacement, railings, and structural fixes.
          </p>
        </div>
      </section>

      <ServiceMain
        subtitle="Vienna's Trusted Choice"
        title="Deck Builder Vienna VA - Premium Craftsmanship"
        description="We build the outdoor spaces Vienna homeowners are proud to show off. Custom designs, Town of Vienna permit expertise, and premium materials from $25k+."
        listItems={[
          "Trex, TimberTech and AZEK material planning",
          "Town of Vienna building permit experts",
          "Custom multi-level and single-level designs",
          "Screened porches, pergolas & outdoor kitchens",
          "Public reviews - call (571) 655-7207"
        ]}
        image1="/images/img37.jpeg"
        image2="/images/img37.jpeg"
      />
      <CityLeadFormSection
        city="Vienna"
        county="Fairfax County"
        service="deck replacement or composite deck"
        formLocation="local_city_vienna_deck_builder"
      />
      <PlanningUpdate
        market="Vienna decks in 2026"
        notes={[
          "Vienna projects need a first-step jurisdiction check because Town of Vienna and Fairfax County addresses can sit close together but follow different permit paths.",
          "Mature trees, tighter lots, and older pressure-treated decks make repair-vs-replacement planning more important before a budget is finalized.",
          "HOA and town review packets should show material selections, railings, stairs, and rear-yard visibility clearly before submission."
        ]}
        links={[
          { href: "/deck-permit-fairfax-county-virginia", label: "Fairfax permit guide" },
          { href: "/deck-safety-inspection-checklist", label: "Safety checklist" },
          { href: "/composite-deck-cost-northern-virginia", label: "Composite deck cost" }
        ]}
      />
      <GeoAnswerBlock
        question="What should Vienna homeowners confirm before building or replacing a deck?"
        answer="Vienna deck projects should begin with a jurisdiction check because Town of Vienna and Fairfax County addresses can follow different permit paths. Homeowners should also review mature trees, rear-yard visibility, older framing, HOA or town documentation, composite material options, stairs, railings, and whether the project is a repair, resurfacing, or full replacement."
        facts={[
          'Primary buyer intent: Town of Vienna permit clarity, composite deck replacement, screened porches, and mature-lot planning.',
          'Conversion path: Fairfax permit guide, safety checklist, composite cost guide, and written estimate.'
        ]}
        links={[
          { href: '/deck-permit-fairfax-county-virginia', label: 'Fairfax permit guide' },
          { href: '/deck-safety-inspection-checklist', label: 'Safety checklist' },
          { href: '/get-estimate', label: 'Get a Vienna estimate' }
        ]}
      />
      <PremiumCityLeadQualifier
        city="Vienna"
        county="Fairfax County"
        intro="Vienna estimates work best when the project is qualified by jurisdiction, age of the existing deck, town or HOA documentation, mature-tree impact, privacy needs, and whether the homeowner wants a simple replacement or a higher-finish composite outdoor living upgrade."
        projectTypes={[
          'Composite deck replacement for mature Vienna lots',
          'Town of Vienna or Fairfax County permit-ready deck plans',
          'Screened porch, pergola, and outdoor living additions',
          'Resurfacing decisions where the frame needs safety review first',
        ]}
        planningSignals={[
          'Exact jurisdiction: Town of Vienna or Fairfax County',
          'Current deck age, photos, and visible framing concerns',
          'HOA, town review, or neighbor-facing visibility requirements',
          'Material direction: Trex, TimberTech, AZEK, wood comparison, or budget planning',
        ]}
        links={[
          { href: '/get-estimate', label: 'Request Vienna estimate', primary: true },
          { href: '/deck-permit-fairfax-county-virginia', label: 'Fairfax permit guide' },
          { href: '/deck-safety-inspection-checklist', label: 'Safety checklist' },
        ]}
      />
      <ServiceContentExpansion sections={expansionSections} />
      
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
          <Image
            src="/images/img31.jpeg"
            alt="Premium custom deck built by LDN Decks in Vienna, Virginia"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Vienna Luxury Outdoor Living in the Heart of Fairfax</h2>
        <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>
          Typical Vienna scopes include 320 to 450 sqft composite deck replacements, Trex or TimberTech surfaces,
          aluminum railing upgrades, and lighting packages designed around mature lots and rear-yard privacy.
          The right Vienna scope should be confirmed after a jurisdiction check, framing review, mature-tree planning, material selection, and HOA or town documentation review.
        </p>
      </div>

      <ServiceInclusions
        title="Why Vienna Homeowners Choose Loudoun Decks"
        description="Local knowledge, premium materials, and a process built for Vienna properties."
        items={inclusions}
      />
      <ProcessSteps />
      <ServicesFAQ canonicalUrl="https://ldndecks.com/deck-builder-vienna-va" withSchema={false}
        title="Deck Builder Vienna VA - FAQs"
        faqs={viennaFAQs}
      />
      <ServiceAreasGrid />
      <section style={{ padding: '2rem 1.5rem' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><GoogleMapEmbed city="Vienna" /></div></section>
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (Google reviews) →</Link></li>
            <li key="/bbb" style={{ marginBottom: '0.5rem' }}><Link href="/bbb-accredited-deck-builder-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>BBB Accredited Deck Builder →</Link></li>
            <li key="/before-after" style={{ marginBottom: '0.5rem' }}><Link href="/before-and-after" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Before & After Deck Projects →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
            <li key="/deck-payment-estimator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-payment-estimator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck Payment Estimator →</Link></li>
            <li key="/composite-deck-cost-northern-virginia" style={{ marginBottom: '0.5rem' }}><Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>How Much Does a Deck Cost in Northern Virginia? →</Link></li>
            <li key="/services/new-decks" style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building Services →</Link></li>
            <li key="/get-estimate" style={{ marginBottom: '0.5rem' }}><Link href="/get-estimate" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Request a Written Vienna Estimate →</Link></li>
        </ul>
      </section>

      <SimpleCTA title="Build Your Dream Deck in Vienna" buttonText="Get Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath="/deck-builder-vienna-va" />
      <NamedAuthor context="Vienna and Northern Virginia" lastUpdated="2026-06-01" />
      <ContactHome />
    </main>
  );
}
