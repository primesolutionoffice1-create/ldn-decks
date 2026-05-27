import React from 'react';
import Link from 'next/link';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import ServiceSchema from '@/components/ServiceSchema';
import RelatedGuides from '@/components/RelatedGuides';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import SimpleCTA from '@/components/SimpleCTA';
import JsonLd from '@/components/JsonLd';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';

import NamedAuthor from '@/components/NamedAuthor';
export const metadata = buildMetadata({
  path: "/services/porches",
  title: '5-Star Porch Builder NoVA | Screened & Open Porch Design',
  description: 'Top-rated porch contractor in Northern Virginia. Custom screened porches, open-air pavilions & front porches. ★ 5.0 Google Rated. Free estimates in 24h.',
});

const inclusions = [
  { title: "Structural Integration", desc: "Designing porch rooflines and foundations that integrate seamlessly with your home's existing architecture in Loudoun and Fairfax." },
  { title: "Seasonal Comfort", desc: "Integrating ceiling fans, recessed lighting, and screening systems to extend your outdoor season across Northern Virginia." },
  { title: "Durable Finishes", desc: "Using moisture-resistant materials and premium trim to ensure your porch remains a 5-Star space for decades." }
];

const porchFAQs = [
  { q: "How much does a custom porch cost in Fairfax County?", a: "Custom porch projects in Fairfax County typically range from $25,000 to $75,000+ depending on roofing complexity, screening systems, and electrical integration." },
  { q: "Is a permit required for a screened-in porch in Loudoun County?", a: "Yes. Any structural addition like a porch requires a building permit in Loudoun County. We handle the entire engineering and application process for you." },
  { q: "Can I convert my existing deck into a screened porch?", a: "Often, yes. If the existing foundation and framing can support the additional dead load of a roof, we can resurface and screen your deck into a beautiful porch." },
  { q: "How long does porch construction take in Northern Virginia?", a: "Because porches involve roofing and often electrical work, the construction phase usually takes 3-5 weeks after permit approval." },
  { q: "What are the benefits of an open-air porch vs. screened?", a: "Open-air porches offer maximum airflow and an unobstructed garden feel, while screened porches provide 100% protection from insects and light rain." },
  { q: "Do you build front porches in Arlington?", a: "Yes. Loudoun Decks is a leading front porch remodeler in Arlington, helping homeowners improve curb appeal and functional entry space." },
  { q: "Do your porches include a 5-Star Google Rated guarantee?", a: "We pride ourselves on being a 5-Star Google Rated deck and porch contractor, ensuring every client in NoVA receives premium communication and quality." },
  { q: "Will a new porch increase my home's resale value?", a: "In the Northern Virginia market, professional outdoor living spaces like custom porches often see a 70-80% return on investment (ROI)." }
];

const expansionSections = [
  {
    title: "The Evolution of Outdoor Living: Custom Porches in Northern Virginia",
    paragraphs: [
      "For homeowners in Northern Virginia, the outdoor living season is one of the year's highlights. However, the region's humidity and summer insects can often cut those pleasant evenings short. As a premier porch builder in Loudoun County, Fairfax County, and Prince William County, Loudoun Decks creates beautiful, structural sanctuaries that allow you to enjoy the fresh air without the drawbacks. A custom porch is more than just an addition; it is a lifestyle upgrade that bridges the gap between your indoor comfort and the natural beauty of your backyard. Many homeowners also choose to pair their porch with a [custom deck](/services/new-decks) for the ultimate outdoor experience.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. We have seen a massive trend toward 'outdoor living rooms' in neighborhoods like Ashburn and Great Falls. These spaces are no longer just wooden platforms; they are sophisticated architectural extensions featuring vaulted ceilings, integrated sound systems, and designer lighting. Our mission is to ensure that your new porch feels like it was part of the original home design, not an afterthought. If you have an existing structure, we also offer [deck resurfacing](/services/deck-resurfacing) to match your new porch.",
      "Whether you are looking for a simple open-air retreat to oversee your garden or a fully enclosed screened porch to host summer dinners, choosing a porch contractor near you with local structural expertise is vital. Our builds are engineered to exceed local building codes in Arlington and Stafford, ensuring your investment is safe, legal, and built to last."
    ]
  },
  {
    title: "Screened-In vs. Open-Air: Finding Your Perfect Profile",
    paragraphs: [
      "The debate between a screened-in porch and an open-air porch often comes down to how you plan to use the space. In areas like Sterling and Herndon, where mosquitoes can be particularly active during the summer, a screened porch is the ultimate premium solution. Modern screening systems, like the ScreenEze technology we use, provide crystal-clear views while keeping even the smallest gnats out. These porches often become the most-used room in the house during the spring and autumn months.",
      "On the other hand, an open-air porch (often called a 'covered deck' or pavilion) offers an unmatched sense of freedom and airflow. These structures are ideal for homeowners in Fairfax and Vienna who want to integrate outdoor kitchens, pizza ovens, or fire features where ventilation is paramount. They provide essential shade and protection from the rain overhead while maintaining an open, airy connection to the surrounding landscape.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. As your custom deck builder and porch specialist, we can design hybrid spaces that feature both screened and open sections, allowing you the best of both worlds depending on the time of day and the season."
    ],
    listItems: [
      { label: "Protection", text: "Screened porches keep out bugs, debris, and light rain, allowing for upholstery and electronics." },
      { label: "Architecture", text: "Covered porches allow for dramatic rooflines and exposed timber beam aesthetics." },
      { label: "Value", text: "Integrated porch structures frequently command higher premiums during home appraisals in NoVA." },
      { label: "Comfort", text: "Adding a roof alone can drop the temperature of your outdoor space by 10-15 degrees in mid-summer." }
    ]
  },
  {
    title: "Interior Finishes: Creating the 'Outdoor Living Room'",
    paragraphs: [
      "The true magic of a custom porch build in Northern Virginia lies in the interior finishes. We go far beyond standard pressure-treated lumber. Our clients in Lansdowne and Leesburg often opt for tongue-and-groove cedar ceilings, mahogany flooring, or low-maintenance PVC beadboard. These materials elevate the space from a 'porch' to a 'luxury retreat.' We pay close attention to the details-recessed LED lighting on dimmers, high-powered ceiling fans for humid afternoons, and even infrared heaters for crisp November nights.",
      "Security and longevity are built into every finish. We use high-grade sealants and hidden fastener systems to ensure that your porch looks as clean and professional as your home's interior. We also specialize in 'Eze-Breeze' vertical track windows, which allow you to convert your screened porch into a three-season room by sliding clear vinyl panels over the screens to block the wind and cold.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. By choosing a 5-Star Google Rated contractor, you ensure that these technical details-like electrical grounding and structural load-bearing roof connections-are handled by experts who value your family's safety above all else."
    ]
  },
  {
    title: "The Permit & Planning Journey in NoVA",
    paragraphs: [
      "Adding a roof structure to a deck or building a new porch from scratch changes the structural requirements of your home's foundation. This is why permitting is so critical in regions like Mount Vernon and Dale City. Every new post must be supported by footings that are calculated to handle the increased weight of the roof, as well as the 'snow load' requirements of Virginia winters. Our design team uses CAD software to ensure every beam and header is precisely sized for your specific dimensions.",
      "We manage the entire permit cycle with your local building department, whether you are in Stafford County or the heart of Arlington. This including structural drawings, site plans, and coordinating with inspections. Our 'Full projects only' approach means we take responsibility for the entire lifecycle, so you don't have to worry about the red tape.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. Our local presence means we have established relationships with building inspectors across NoVA, leading to faster approvals and fewer headaches for our clients. We position Loudoun Decks as a premium builder because we don't cut corners on these essential hidden details."
    ]
  }
];

const authorityLinks = [
  { text: "Loudoun County Building Permits", url: "https://www.loudoun.gov/1725/Building-Permits" },
  { text: "Fairfax County Deck & Porch Guide", url: "https://www.fairfaxcounty.gov/landdevelopment/typical-deck-details" }
];

const porchFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": porchFAQs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }))
};

export default function PorchesPage() {
  return (
    <main>
      <ServiceSchema
        name="Porch Construction"
        description="Custom front porches, screened porches, and open porches in Northern Virginia. Full design and build service."
        url="https://ldndecks.com/services/porches"
        category="Porch Construction"
        price="25000"
        relatedServices={['https://ldndecks.com/screened-porch-builder-northern-virginia', 'https://ldndecks.com/services/porches/screened-porch', 'https://ldndecks.com/services/porches/front-porch']}
      />
      <JsonLd data={porchFaqSchema} />
      <WebPageSchema url="https://ldndecks.com/services/porches" name="5-Star Porch Builder NoVA | Screened &amp; Open Porch Design" description="Top-rated porch contractor in Northern Virginia. Custom screened porches, open-air pavilions &amp; front porches. ★ 5.0 Google Rated. Free estimates in 24h." speakable />
      <ServicesHeader
        subtext="5-Star Google Rated Builder"
        title="Custom Porch Design & Construction"
        description="Loudoun Decks builds premium screened-in porches, open pavilions, and custom front porches across Loudoun County, Fairfax County, and Prince William County. Most custom porch projects start at $25,000+."
      />
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
        <NamedAuthor context="Loudoun, Fairfax, and Prince William counties" lastUpdated="May 2026" />
      </section>

      {/* Pricing Anchor */}
      <section style={{ backgroundColor: '#f9f9f9', padding: '24px 20px', borderBottom: '1px solid #eee' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: '#555', margin: 0 }}>
            <strong style={{ color: '#222' }}>Most custom porch projects start at $25,000+</strong>
            {' '}— roofing complexity, screening systems, and electrical integration affect final pricing.{' '}
            <strong>Free estimate included.</strong>
          </p>
        </div>
      </section>

      {/* Porch Type Navigation */}
      <section style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '800', textAlign: 'center', marginBottom: '12px' }}>
          Choose the Right Porch Style
        </h2>
        <p style={{ textAlign: 'center', color: '#555', fontSize: '17px', marginBottom: '40px' }}>
          Every porch type serves a different lifestyle. Explore your options below.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          <Link href="/services/porches/front-porch" style={{ display: 'block', textDecoration: 'none', background: '#fff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '32px 28px', transition: 'box-shadow 0.2s ease', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>🏡</div>
            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#111', marginBottom: '10px' }}>Front Porch</h3>
            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>
              Transform your home&apos;s entrance with a custom-designed front porch. High curb appeal, structural roofline integration, and premium materials built to last decades.
            </p>
            <span style={{ color: 'var(--site-color)', fontWeight: '700', fontSize: '14px' }}>Explore Front Porch →</span>
          </Link>
          <Link href="/services/porches/open-porch" style={{ display: 'block', textDecoration: 'none', background: '#fff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '32px 28px', transition: 'box-shadow 0.2s ease', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>🌿</div>
            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#111', marginBottom: '10px' }}>Open Porch</h3>
            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>
              Maximum airflow, unobstructed views, and seamless connection to the outdoors. Ideal for outdoor kitchens, dining, and year-round entertaining in Northern Virginia.
            </p>
            <span style={{ color: 'var(--site-color)', fontWeight: '700', fontSize: '14px' }}>Explore Open Porch →</span>
          </Link>
          <Link href="/services/porches/screened-porch" style={{ display: 'block', textDecoration: 'none', background: '#fff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '32px 28px', transition: 'box-shadow 0.2s ease', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>🪟</div>
            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#111', marginBottom: '10px' }}>Screened Porch</h3>
            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>
              Full protection from insects and light rain without sacrificing the outdoor feel. The most popular premium porch upgrade for Loudoun and Fairfax County homeowners.
            </p>
            <span style={{ color: 'var(--site-color)', fontWeight: '700', fontSize: '14px' }}>Explore Screened Porch →</span>
          </Link>
        </div>
      </section>

      <ServiceMain
        subtitle="Luxury Outdoor Living"
        title="Professional Porch Contractor Serving NoVA"
        description="Extend your home's footprint with a custom structural porch. We specialize in integrated roof systems and high-performance screening for homeowners in Arlington, Stafford, and beyond."
        listItems={[
          "Custom screened-in porch systems",
          "Open-air pavilions and covered decks",
          "Front porch remodels and curb appeal",
          "Integrated electrical, fans, and lighting",
          "Full structural permit management"
        ]}
        image1="/images/img16.jpeg"
        image2="/images/img20.jpeg"
      />
      <ServiceContentExpansion sections={expansionSections} />
      <ServiceInclusions
        title="Built for the Virginia Lifestyle"
        description="Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. Our porches are built to weather the elements gracefully."
        items={inclusions}
      />
      <ServicesFAQ canonicalUrl="https://ldndecks.com/services/porches" withSchema={false} title="Porch Construction & Design FAQs" faqs={porchFAQs} />
      <section style={{ padding: '40px 20px', backgroundColor: '#f9f9f9', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Official Resources & Safety Standards</h3>
          <p style={{ marginBottom: '20px', color: '#666' }}>We build all our porches to exceed local Northern Virginia building codes and safety regulations.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            {authorityLinks.map((link, idx) => (
              <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--site-color)', fontWeight: '600', textDecoration: 'underline', fontSize: '14px' }}>
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </section>
      <ServiceAreasGrid />
      <SimpleCTA title="Build Your Custom Porch" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/services/porches" />
      <ContactHome />
    </main>
  );
              }
