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

export const metadata = buildMetadata({
  path: '/deck-builder-vienna-va',
  title: 'Deck Builder in Vienna, VA | Trex Certified | Loudoun Decks',
  description: 'Top-rated deck builder in Vienna, VA. 5.0★ Google. Custom Trex & TimberTech decks, screened porches & pergolas. Town of Vienna permit experts. Free estimate.',
  image: '/images/img37.jpeg',
});

const inclusions = [
  {
    title: "Town of Vienna Experts",
    desc: "We navigate the unique building department requirements of the Town of Vienna, ensuring faster permit approvals for your project."
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
      "We specialize in 'Full Projects Only,' meaning we manage the design, the structural engineering, the permitting, and the final 5-Star build. Our clients in Vienna expect precision, and that is exactly what we deliver. We utilize advanced materials like Trex Transcend and TimberTech Vintage to ensure your deck remains as beautiful as the day it was finished, with no need for the sanding and staining required by traditional wood decks.",
      "Whether you are looking to replace a 20-year-old pressure-treated deck or you are designing a brand-new outdoor oasis from scratch, our team provides the local expertise and craftsmanship necessary to navigate Vienna's unique regulatory environment."
    ]
  },
  {
    title: "Navigating Vienna & Fairfax County Regulations",
    paragraphs: [
      "Building in Vienna requires a deep understanding of local zoning and building codes. If your home is within the Town of Vienna limits, your project must go through the Town's specific building department. This often involves a faster review cycle but requires precise adherence to town-specific setbacks and height restrictions. Our team has built many projects within town limits and knows exactly how to get your plans approved efficiently.",
      "For homes in the greater Vienna area that fall under Fairfax County jurisdiction, we utilize our years of experience with the Fairfax County Land Development Services (LDS) portal. We ensure every footing, every ledger connection, and every railing detail meets or exceeds the current building codes. We handle the 100% of the paperwork so you can focus on choosing your materials and design.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. We take pride in our 100% permit approval rate across all NoVA jurisdictions, including the sometimes complex requirements of Vienna HOAs."
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
    title: "The Financial ROI of a 5-Star Deck in Vienna",
    paragraphs: [
      "In the competitive Vienna and Tysons Corner real estate markets, curb appeal and outdoor amenities are top priorities for buyers. A professionally installed composite deck by a 5-Star rated builder is one of the highest ROI investments you can make in your home. It expands your living square footage for a fraction of the cost of an indoor addition.",
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
      <ServicesHeader
        subtext="Vienna, VA's #1 Rated Builder"
        title="Custom Deck Builder in Vienna, VA"
        description="Loudoun Decks builds premium composite and wood decks in Vienna, Tysons, and across Fairfax County. Trex Platinum Partner. 5-Star Google Rated."
      />

      {/* Pricing Anchor - Conversion Filtering */}
      <section style={{ backgroundColor: '#fff5f2', padding: '24px 20px', borderBottom: '1px solid #ffdbd1' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: '#d14817', margin: 0, fontWeight: '500' }}>
            <strong style={{ color: '#111', fontSize: '18px' }}>New custom build minimum: $5,000+</strong>
            <br />
            We focus on <strong style={{ color: '#111' }}>full custom Vienna builds</strong>. Need a repair instead? Visit our <a href="/services/deck-repair-and-structural-maintenance" style={{ color: '#d14817', textDecoration: 'underline', fontWeight: 600 }}>deck repair service</a> for board replacement, railings, and structural fixes.
          </p>
        </div>
      </section>

      <ServiceMain
        subtitle="Vienna's Trusted Choice"
        title="Deck Builder Vienna VA - Premium Craftsmanship"
        description="We build the outdoor spaces Vienna homeowners are proud to show off. Custom designs, Town of Vienna permit expertise, and premium materials from $25k+."
        listItems={[
          "Trex Platinum & TimberTech Certified",
          "Town of Vienna building permit experts",
          "Custom multi-level and single-level designs",
          "Screened porches, pergolas & outdoor kitchens",
          "5-Star Google Rated - call (571) 655-7207"
        ]}
        image1="/images/img37.jpeg"
        image2="/images/img37.jpeg"
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
          Our featured Vienna project includes a <strong>$36,000 380 sqft Trex Transcend Deck</strong> in Vienna Woods. 
          This project replaced a 15-year-old pressure-treated deck with a modern composite sanctuary featuring 
          Trex Signature railings and integrated LED lighting. We handled the full Town of Vienna building permit 
          and HOA approval process, completing the build in just 3 weeks.
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
      <SimpleCTA title="Build Your Dream Deck in Vienna" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-vienna-va" />
      <ContactHome />
    </main>
  );
}
