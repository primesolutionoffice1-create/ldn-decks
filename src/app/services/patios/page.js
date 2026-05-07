import React from 'react';
import Image from 'next/image';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import SimpleCTA from '@/components/SimpleCTA';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: "/services/patios",
      title: "Custom Patio Builder | Northern Virginia | LDN Decks",
  description: "Expert custom patio design and installation in Northern Virginia. Bluestone, natural stone, concrete pavers, and full hardscape builds. Free estimate from LDN Decks."
});

const expansionSections = [
  {
    title: "Why Choose a Bluestone Patio in Northern Virginia",
    paragraphs: [
      "Bluestone is uniquely suited for the Northern Virginia climate. It easily withstands the freezing winters and scorching, humid summers of Loudoun and Fairfax counties without cracking, provided it is installed with a proper architectural base. Many of our patio projects are designed to integrate perfectly with a [new composite deck](/services/new-decks) or a custom [screened porch](/services/porches).",
      "Custom stonework is also one of the highest ROI hardscaping investments you can make. It immediately elevates your backyard into a luxury entertainment space that appeals to homebuyers across the DC metro region."
    ],
    listItems: [
      { label: "Aesthetics", text: "Rich, natural earth tones including deep blues, grays, and rust colors." },
      { label: "High Durability", text: "Withstands freeze-thaw cycles indefinitely when properly jointed." },
      { label: "Low Maintenance", text: "Requires minimal upkeep compared to wood decks; simply power wash annually." },
      { label: "Increased Value", text: "Premium natural stone adds significant measurable value to your property." },
      { label: "Temperature Control", text: "Absorbs heat slower than pure concrete, making it comfortable during summer." }
    ]
  },
  {
    title: "Understanding Your Design & Layout Options",
    paragraphs: [
      "A bluestone patio layout dictates the entire feel of your outdoor space. Whether you live in a modern estate in Ashburn or a rustic property in Middleburg, we tailor the stone cut to match your home's architecture."
    ],
    listItems: [
      { label: "1. Natural Cleft Dimensional", text: "The most popular choice. Cut into perfect squares and rectangles, but retaining the natural, slightly uneven flaking texture of the stone quarry." },
      { label: "2. Thermal Finish", text: "The stone is subjected to intense heat to pop off the natural cleft, resulting in a perfectly smooth, flat surface ideal for dining areas where wobbly chairs are a concern." },
      { label: "3. Irregular / Flagstone Pattern", text: "Uncut, jagged organic shapes fit together like a puzzle. This 'crazy paving' style is perfect for rustic garden walkways and fire pit surrounds." },
      { label: "4. Borders and Banding", text: "We often incorporate complementary stones like brick or Pennsylvania fieldstone to create distinctive borders that frame the bluestone canvas." }
    ]
  },
  {
    title: "Custom Outdoor Living Features",
    paragraphs: [
      "A patio is just the foundation. Loudoun Decks turns your surface into a fully functional outdoor living room by integrating premium architectural elements."
    ],
    listItems: [
      { label: "Retaining & Seating Walls", text: "Built-in masonry walls wrapped in natural stone veneer to provide structural support for sloped yards and permanent seating for guests." },
      { label: "Custom Fire Features", text: "Wood-burning stone fire pits or integrated gas fireplaces that make your patio usable deep into the autumn and winter months." },
      { label: "Outdoor Kitchens", text: "Built-in grilling stations, bar tops, and refrigerators seamlessly integrated into your patio layout." },
      { label: "Landscape Lighting", text: "Low-voltage LED lighting cast into the stone steps and seating walls to provide safety and ambiance at night." }
    ]
  }
];

const patioProcess = [
  { title: "Step 1: On-Site Evaluation", desc: "We review your property's soil composition, grading, and drainage to determine the necessary sub-base requirements." },
  { title: "Step 2: 3D Design & Permitting", desc: "We provide detailed layouts and handle all Loudoun County grading and zoning permits required for the hardscape project." },
  { title: "Step 3: Excavation & Base Prep", desc: "The most critical step. We excavate and compress layers of crushed stone and gravel to create an immovable foundation resistant to freezing." },
  { title: "Step 4: Stone Installation", desc: "Our masons precision-cut and lay each piece of stone, ensuring perfect leveling and water runoff." },
  { title: "Step 5: Polymeric Jointing", desc: "We fill the gaps with high-grade polymeric sand or mortar to lock the stones together and prevent weed growth." },
  { title: "Step 6: Final Seal & Review", desc: "An optional invisible sealant is applied to protect the stone from stains before a final client walkthrough." }
];

const patioFAQs = [
  { question: "Do I need a permit for a patio in Northern Virginia?", answer: "Most ground-level patios that do not alter the major grading or drainage of the property do not require a building permit. However, if your patio includes retaining walls over 2 feet, electrical lines for kitchens, or sits in a designated RPA (Resource Protection Area), county permits are required. Loudoun Decks handles all of this compliance for you." },
  { question: "How much does a custom patio cost?", answer: "Custom patio projects in Northern Virginia typically start at $15,000+ for natural stone and premium pavers. Pricing varies based on square footage, material selection, grading requirements, and integrated features like fire pits or outdoor kitchens." },
  { question: "How much does a bluestone patio cost compared to stamped concrete?", answer: "Bluestone is a premium natural material, so the upfront material and labor costs are higher than poured or stamped concrete. However, stamped concrete is highly prone to cracking during Virginia's freeze-thaw cycles. Bluestone, laid on a flexible aggregate base, rarely cracks and can be easily repaired stone-by-stone, offering a vastly superior long-term ROI." },
  { question: "How do you handle water runoff and drainage?", answer: "Proper drainage is the hallmark of professional hardscaping. We grade all our patios with a subtle, imperceptible slope (typically 1/8 inch per foot) directing water away from your home's foundation. If your yard has existing water pooling issues, we integrate French drains and catch basins beneath the patio structure." },
  { question: "Can I put a hot tub on my patio?", answer: "Absolutely. If you plan to install a hot tub, we simply adjust the depth and compaction of our crushed stone aggregate base in that specific footprint to support the immense weight (often exceeding 4,000 lbs filled) without shifting the surrounding stones." }
];

const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": patioFAQs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
};

const serviceSchemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom Patio Installation",
  "provider": { "@type": "LocalBusiness", "@id": "https://ldndecks.com/#organization", "name": "Loudoun Decks", "url": "https://ldndecks.com", "telephone": "+1-571-655-7207", "address": { "@type": "PostalAddress", "streetAddress": "13704 Winding Oak Cir", "addressLocality": "Centreville", "addressRegion": "VA", "postalCode": "20121", "addressCountry": "US" } },
  "areaServed": { "@type": "State", "name": "Virginia" },
  "description": "Premium patio installation specializing in bluestone, natural stone, concrete pavers, fire pits, and outdoor kitchens in Northern Virginia."
};

const whyLdnDecks = [
  { title: "Master Masons", desc: "Our teams specialize heavily in natural stone layout and precision dry-laid and wet-laid applications." },
  { title: "Structural Integrity", desc: "We never cut corners on the base aggregate—guaranteeing your patio will not sink or heave after harsh winters." },
  { title: "Turnkey Service", desc: "From design and drainage engineering to the final sealing, we manage the entire project in-house." },
  { title: "Local Compliance", desc: "Deep understanding of Loudoun, Fairfax, and Prince William County HOA restrictions and zoning laws." },
  { title: "Ironclad Warranty", desc: "We stand behind our hardscaping foundations with robust workmanship guarantees." }
];

const authorityLinks = [
  { text: "Loudoun County Paving & Grading", url: "https://www.loudoun.gov/" },
  { text: "Fairfax County Hardscape Guide", url: "https://www.fairfaxcounty.gov/landdevelopment/typical-deck-details" }
];

export default function PatiosPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemaData) }} />

      <ServicesHeader
        subtext="Custom Patio Builder Northern Virginia"
        title="Custom Patio Design & Installation in Northern Virginia"
        description="Transform your backyard with a premium custom patio. From natural bluestone and flagstone to concrete pavers and full outdoor living builds — we design and install high-performance hardscapes for Northern Virginia homeowners."
      />

      {/* Pricing Anchor */}
      <section style={{ backgroundColor: '#f9f9f9', padding: '24px 20px', borderBottom: '1px solid #eee' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: '#555', margin: 0 }}>
            <strong style={{ color: '#222' }}>Custom patio projects typically start at $15,000+</strong>
            {' '}— materials, size, grading, and integrated features affect final pricing.{' '}
            <strong>Free estimate included.</strong>
          </p>
        </div>
      </section>

      {/* Material Options Section */}
      <section style={{ padding: '48px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '26px', fontWeight: '800', marginBottom: '12px', textAlign: 'center' }}>Patio Material Options</h2>
        <p style={{ textAlign: 'center', color: '#555', marginBottom: '28px', fontSize: '16px' }}>
          We build with the materials that perform best in Northern Virginia&apos;s climate and match your home&apos;s architecture.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          {[
            { name: 'Bluestone', note: 'Premium natural stone, classic NoVA choice' },
            { name: 'Flagstone', note: 'Irregular organic layout, rustic character' },
            { name: 'Concrete Pavers', note: 'Versatile, budget-flexible, durable' },
            { name: 'Travertine', note: 'Elegant European aesthetic' },
          ].map((mat, i) => (
            <div key={i} style={{ background: '#f9f9f9', border: '1px solid #e8e8e8', borderRadius: '6px', padding: '20px 16px', textAlign: 'center' }}>
              <div style={{ fontWeight: '700', fontSize: '16px', marginBottom: '6px', color: '#111' }}>{mat.name}</div>
              <div style={{ fontSize: '13px', color: '#666' }}>{mat.note}</div>
            </div>
          ))}
        </div>
      </section>

      <ServiceMain
        subtitle="Natural Stone. Timeless Design."
        title="Custom Patio Contractor in Northern Virginia"
        description="Loudoun Decks is the premier custom hardscaper in Northern Virginia. We specialize in premium patio builds using bluestone, flagstone, and concrete pavers — engineered for Virginia's demanding climate and built for decades of performance."
        listItems={[
          "Bluestone, flagstone, travertine, and concrete paver options",
          "Naturally slip-resistant surfaces for pool decks and walkways",
          "Ideal for patios, walkways, pool decks, and fire pits",
          "Decades of proven weather resistance"
        ]}
        image1="/images/img36.jpeg"
        image2="/showcase/img12.jpeg"
      />
      <ServiceContentExpansion sections={expansionSections} />
      <ServiceInclusions
        title="Our Layout & Build Process"
        description="A patio is only as good as what's underneath it. We employ a rigorous, engineered approach to base layering."
        items={patioProcess}
      />
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '15px' }}>See the Transformation</h2>
        <p style={{ marginBottom: '40px', fontSize: '18px', color: '#555' }}>From a plain grass backyard to a premium outdoor living space.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src="/showcase/img11.jpeg" alt="Before patio installation" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src="/showcase/img12.jpeg" alt="After custom stone patio" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>
      <section style={{ background: '#f9f9f9', padding: '60px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '30px', textAlign: 'center' }}>Patio Design FAQs</h2>
          {patioFAQs.map((faq, index) => (
            <div key={index} style={{ marginBottom: '20px', background: '#fff', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '10px', color: '#B58E3B' }}>{faq.question}</h3>
              <p style={{ lineHeight: '1.6', color: '#444' }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
      <section style={{ padding: '20px 20px 60px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '15px' }}>Project Gallery</h2>
        <p style={{ marginBottom: '40px', fontSize: '18px', color: '#555' }}>A closer look at our custom stone installations and finishes.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src="/showcase/img13.jpg" alt="Bluestone layout detail" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src="/showcase/img14.jpg" alt="Custom patio finish" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>
      <ServiceInclusions
        title="Why LDN Decks for Hardscaping"
        description="Local experts delivering high-end, indestructible architecture."
        items={whyLdnDecks}
      />
      <section style={{ padding: '40px 20px', backgroundColor: '#f9f9f9', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Official Resources & Safety Standards</h3>
          <p style={{ marginBottom: '20px', color: '#666' }}>We build all our patios to exceed local Northern Virginia building codes and hardscape specifications.</p>
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
      <SimpleCTA title="Design Your Dream Patio" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/services/patios" />
      <ContactHome />
    </main>
  );
}
