import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import SimpleCTA from '@/components/SimpleCTA';
import JsonLd from '@/components/JsonLd';
import ServiceSchema from '@/components/ServiceSchema';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';

import NamedAuthor from '@/components/NamedAuthor';
export const metadata = buildMetadata({
  path: "/services/deck-resurfacing",
  title: '5-Star Deck Resurfacing NoVA | TimberTech Vintage Experts',
  description: 'Premium deck resurfacing in Northern Virginia from $15k+. Upgrade a sound frame to TimberTech Vintage with permits, HOA, railing, and lighting options.',
  image: "/showcase/img05.jpeg",
});

const expansionSections = [
  {
    title: "Why Resurface with the TimberTech Vintage Collection",
    paragraphs: [
      "The TimberTech Vintage Collection is the gold standard of composite decking in the industry. While many homeowners are familiar with standard composite boards, Vintage stands apart by utilizing an Advanced PVC material core that contains zero wood fibers. This makes it a superior option compared to traditional [new deck construction](/services/new-decks) materials.",
      "This 100% synthetic composition makes it effectively immune to the moisture, swelling, mold, and rot that slowly degrades traditional wood-composite blends in Northern Virginia's humid climate. Its proprietary capping technology resists fading and staining, ensuring your deck looks as vibrant in year 20 as it did on day one."
    ],
    listItems: [
      { label: "Unmatched Aesthetics", text: "Wire-brushed texture that perfectly mimics the intricate grain patterns of premium hardwood." },
      { label: "Advanced PVC Core", text: "Zero organic material means zero food source for mold, mildew, or termites." },
      { label: "Barefoot Friendly", text: "Stays up to 30% cooler than competitive composite products under the hot Virginia sun." },
      { label: "Fade Resistance", text: "Backed by an industry-leading 50-Year Fade & Stain Warranty." },
      { label: "Eco-Conscious", text: "Manufactured in the USA from over 50% recycled polymer material." }
    ]
  },
  {
    title: "Popular TimberTech Vintage Color Options",
    paragraphs: [
      "The Vintage Collection offers a curated palette of elegant, complex colors that feature highlights and lowlights designed to emulate natural aged wood. During our on-site consultation, we provide physical samples so you can see how the light interacts with the boards against your home's exterior."
    ],
    listItems: [
      { label: "Coastline", text: "A highly sought-after cool, weathered gray. Perfect for modern and coastal-inspired architectural styles." },
      { label: "English Walnut", text: "A rich, saturated brown with deep, realistic graining. Ideal for traditional brick homes in Loudoun." },
      { label: "Weathered Teak", text: "A warm, golden-brown hue that invokes the feel of a classic luxury yacht deck." },
      { label: "Dark Hickory", text: "A striking, deeply colored board bringing a sophisticated contrast to lighter home sidings." }
    ]
  },
  {
    title: "The Financial & Lifestyle Benefits of Resurfacing",
    paragraphs: [
      "If your deck's substructure (the posts, beams, and joists) is still structurally sound, a full tear-down is financially wasteful. Deck resurfacing is the ultimate high-ROI upgrade."
    ],
    listItems: [
      { label: "Cost-Effective", text: "Save thousands by reusing your existing pressure-treated structural frame rather than paying for outright demolition and rebuilding." },
      { label: "Faster Turnaround", text: "Resurfacing projects are typically completed in half the time of full new builds, minimizing disruption to your yard." },
      { label: "Zero Maintenance", text: "Reclaim your weekends. Never spend another summer power washing, sanding, or staining splintered wood again." },
      { label: "Safety First", text: "Eliminate the hazard of splinters, loose nails, and slippery moss buildup. TimberTech provides a safe, highly slip-resistant surface for children and pets." }
    ]
  }
];

const resurfacingProcess = [
  { title: "Step 1: Structural Integrity Inspection", desc: "Before we ever lay a new board, we rigorously inspect your existing ledger board, joists, and concrete footings. If the sub-structure is rotting, we cannot resurface it. Safety is always our primary directive." },
  { title: "Step 2: Permit Acquisition", desc: "If modifications to the railing system or structural reinforcements are needed, we handle all Loudoun County building permits required to ensure total code compliance." },
  { title: "Step 3: Strategic Demolition", desc: "We carefully remove and haul away your old, warped surface boards and railing systems without damaging the foundational joist structure beneath." },
  { title: "Step 4: Joist Protection & Reinforcement", desc: "We apply heavy-duty butyl joist tape over the top of your existing wood framing. This crucial barrier prevents future water intrusion and dramatically extends the life of your wood." },
  { title: "Step 5: Surface & Railing Installation", desc: "We install your new TimberTech Vintage boards using hidden fastening systems for a clean, screw-free surface. We then install upgraded railings (such as Trex Signature Aluminum or glass panels)." },
  { title: "Step 6: Lighting Integration & Clean-Up", desc: "Low-voltage LED lighting is wired into the stairs and posts. A final safety inspection is conducted, and your yard is left spotless." }
];

const resurfacingFAQs = [
  { question: "How do I know if my deck is a candidate for resurfacing?", answer: "A deck is typically a good candidate if the foundational posts, beams, and joists are sturdy, free of deep rot, and built to modern safety codes. During our free evaluation, we structurally probe the wood. If your frame is over 25 years old or severely compromised by water damage, a full replacement will be necessary." },
  { question: "How much does deck resurfacing cost compared to building a new deck?", answer: "On average, resurfacing your deck with premium composite material costs 25-40% less than building a brand new deck of the same size, primarily because you are saving significantly on foundational lumber and structural labor." },
  { question: "Do I need a building permit to resurface my deck in Virginia?", answer: "If you are strictly replacing the surface decking boards (the 'skin') on a one-for-one basis, many jurisdictions consider it a repair that does not require a permit. However, if the project involves altering the structural framing, changing the stairs, or installing a new railing system, a permit is almost always required. We navigate this entirely for you." },
  { question: "Can I change the layout or size of my deck during resurfacing?", answer: "Usually, yes. While the main body of the deck remains the same, we can often frame out extensions, widen stairs, or add specialized bumps-outs for a grill station while utilizing the main existing structure." }
];

const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": resurfacingFAQs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
};

const whyLdnDecks = [
  { title: "TimberTech Specialists", desc: "We have extensive, specialized experience handling and installing Advanced PVC composite materials with hidden fastening systems." },
  { title: "Structural Rigor", desc: "We never 'slap lipstick on a pig'. If your frame is unsafe, we will not resurface it. We prioritize the long-term safety of your family." },
  { title: "Turnkey Project Management", desc: "From lumber disposal to final LED light wiring, we manage the entire ecosystem of your backyard remodel." },
  { title: "Local Market Knowledge", desc: "Deep understanding of HOA architectural review board guidelines across Ashburn, Leesburg, and Fairfax." },
  { title: "Dedicated Support", desc: "We provide direct, communicative project management from day one until the final walkthrough." }
];

const authorityLinks = [
  { text: "Loudoun County Building Permits", url: "https://www.loudoun.gov/DocumentCenter/View/1183/Typical-Residential-Deck-Detail" },
  { text: "Fairfax County Deck Requirements", url: "https://www.fairfaxcounty.gov/landdevelopment/typical-deck-details" },
  { text: "TimberTech Official Site", url: "https://www.timbertech.com/" }
];

export default function DeckResurfacingPage() {
  return (
    <main>
      {/* Dynamic SEO Schemas */}
      <JsonLd data={faqSchemaData} />
      <WebPageSchema url="https://ldndecks.com/services/deck-resurfacing" name="5-Star Deck Resurfacing NoVA | TimberTech Vintage Experts" description="Premium deck resurfacing in Northern Virginia from $15k+. Upgrade a sound frame to TimberTech Vintage with permits, HOA, railing, and lighting options." speakable />
      <ServiceSchema
        name="Custom Deck Resurfacing"
        description="Professional deck resurfacing services utilizing TimberTech Vintage Collection composite boards, structural reinforcement, and aluminum railings in Northern Virginia."
        url="https://ldndecks.com/services/deck-resurfacing"
        category="Deck Construction"
        lowPrice="10000"
        highPrice="35000"
        relatedServices={['https://ldndecks.com/services/deck-replacement', 'https://ldndecks.com/services/deck-repair-and-structural-maintenance', 'https://ldndecks.com/services/new-decks']}
      />

      <ServicesHeader
        subtext="Deck Resurfacing Loudoun VA"
        title="Upgrade Your Deck with TimberTech Vintage Collection"
        description="Don't tear down a structurally sound deck. Transform your outdated outdoor space into a premium retreat with high-end TimberTech Vintage Collection composite boards—engineered for beauty, durability, and a lifetime of performance."
      />
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
        <NamedAuthor context="Loudoun, Fairfax, and Prince William counties" lastUpdated="May 2026" />
      </section>

      {/* Pricing Anchor - Conversion Filtering */}
      <section style={{ backgroundColor: '#fff5f2', padding: '24px 20px', borderBottom: '1px solid #ffdbd1' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: '#d14817', margin: 0, fontWeight: '500' }}>
            <strong style={{ color: '#111', fontSize: '18px' }}>Full resurfacing projects from $15,000+</strong>
            <br />
            On this page we focus on <strong style={{ color: '#111' }}>full surface conversions</strong> with composite boards, upgraded railings, fascia, stairs, and safety review. Need a few boards swapped, railings reinforced, or rot patched? See our <a href="/services/deck-repair-and-structural-maintenance" style={{ color: '#d14817', textDecoration: 'underline', fontWeight: 600 }}>deck repair service</a>.
          </p>
        </div>
      </section>

      <ServiceMain
        subtitle="The Smarter Upgrade Path"
        title="Give Your Existing Deck a Second Life"
        description="Loudoun Decks specializes in premium deck resurfacing across Northern Virginia. Deck resurfacing is a highly efficient remodeling process that allows you to salvage your existing pressure-treated structural frame while replacing the aging surface boards, railings, stairs, and fascia with modern, zero-maintenance composite materials."
        listItems={[
          "Save up to 40% vs a full tear-down and structural replacement",
          "Significantly faster construction timeline with less yard disruption",
          "Instant architectural upgrade with premium aluminum railings",
          "Extend the functional lifespan of your outdoor space by decades"
        ]}
        image1="/showcase/img03.jpg"
        image2="/showcase/img05.jpeg"
      />
      <ServiceContentExpansion sections={expansionSections} />
      <section style={{ padding: '20px 20px 40px', maxWidth: '900px', margin: '0 auto', lineHeight: 1.7 }}>
        <h2 style={{ fontSize: '30px', marginBottom: '16px', fontWeight: 800 }}>Before We Resurface, We Verify the Frame</h2>
        <p style={{ fontSize: '17px', color: '#555', marginBottom: 0 }}>
          A resurfacing project only makes sense when the posts, beams, joists, ledger, and footings are still sound.
          We check whether the footing depth is adequate for Northern Virginia freeze-thaw conditions, whether the joist sizing fits the span,
          and whether the repair scope triggers a permit. Helpful background: <Link href="/tools/deck-footing-depth-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck footing depth in Virginia</Link>,
          {' '}<Link href="/tools/deck-beam-span-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck beam span planning</Link>,
          {' '}<Link href="/tools/deck-joist-span-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck joist span planning</Link>,
          {' '}<Link href="/blog/2x8-vs-2x10-deck-joists" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>2x8 vs 2x10 joists</Link>, and
          {' '}<Link href="/blog/do-i-need-a-permit-for-a-deck-loudoun" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Virginia deck permit requirements</Link>.
        </p>
      </section>
      <ServiceInclusions
        title="Our Engineered Resurfacing Process"
        description="A rigorous, multi-step process ensuring total structural integrity before a single new board is fastened."
        items={resurfacingProcess}
      />
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '15px' }}>See the Transformation</h2>
        <p style={{ marginBottom: '40px', fontSize: '18px', color: '#555' }}>Same base structure. Completely transformed aesthetic.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <Image src="/showcase/img03.jpg" alt="Before deck resurfacing — old pressure-treated wood deck in Northern Virginia" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <Image src="/showcase/img05.jpeg" alt="After TimberTech Vintage resurfacing" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>
      <section style={{ background: '#f9f9f9', padding: '60px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '30px', textAlign: 'center' }}>Resurfacing FAQs</h2>
          {resurfacingFAQs.map((faq, index) => (
            <div key={index} style={{ marginBottom: '20px', background: '#fff', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '10px', color: '#B58E3B' }}>{faq.question}</h3>
              <p style={{ lineHeight: '1.6', color: '#444' }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
      <ServiceInclusions
        title="Local Experts You Can Trust"
        description="Why choose Loudoun Decks for your remodel?"
        items={whyLdnDecks}
      />
      <section style={{ padding: '40px 20px', backgroundColor: '#f9f9f9', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Official Resources & Safety Standards</h3>
          <p style={{ marginBottom: '20px', color: '#666' }}>We build all our projects to exceed local Northern Virginia building codes and manufacturer specifications.</p>
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

      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Resurfacing Cost &amp; Decision Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/deck-resurfacing-northern-virginia" style={{ color: 'var(--site-color)', fontWeight: 600 }}>Deck Resurfacing in Northern Virginia (counties &amp; cities) →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/deck-resurfacing-vs-replacement" style={{ color: 'var(--site-color)', fontWeight: 600 }}>Resurfacing vs Full Replacement →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/resurface-or-replace-deck-financing" style={{ color: 'var(--site-color)', fontWeight: 600 }}>Resurface or Replace Before Financing? (cost math) →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/deck-payment-estimator" style={{ color: 'var(--site-color)', fontWeight: 600 }}>Deck Payment Estimator →</Link></li>
        </ul>
      </section>

      <RelatedGuides currentPath="/services/deck-resurfacing" />
      <SimpleCTA title="Resurface Your Deck Today" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </main>
  );
}
