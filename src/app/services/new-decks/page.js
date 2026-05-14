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
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import { buildMetadata } from '@/lib/seo';

import NamedAuthor from '@/components/NamedAuthor';
export const metadata = buildMetadata({
  path: "/services/new-decks",
  title: "Custom Deck Builder Loudoun VA | Design & Build Services",
  description: "From concept to completion, we design and build fully custom decks tailored to your space, style, and budget in Northern Virginia."
});

const expansionSections = [
  {
    title: "Design Options: Endless Possibilities",
    paragraphs: [
      "We build more than just standard platforms. We create fully personalized outdoor living zones configured to the unique layout of your home and yard. Whether you need a massive entertaining space or a cozy [screened porch](/services/porches), our design team handles every detail."
    ],
    listItems: [
      { label: "1. Multi-Level Decks", text: "Separate zones for dining, lounging, and entertaining. Ideal for sloped yards." },
      { label: "2. Wraparound Decks", text: "Seamless flow around your home that expands usable outdoor space." },
      { label: "3. Decks with Built-In Seating", text: "Clean, functional design that is perfect for large gatherings." },
      { label: "4. Integrated Features", text: "Seamlessly integrate lighting systems, pergolas, fire pits, outdoor kitchens, privacy walls, and custom railings. Many homeowners also choose to combine their new build with [deck resurfacing](/services/deck-resurfacing) for existing structures." }
    ]
  },
  {
    title: "Premium Material Options",
    paragraphs: [
      "We help you choose the very best decking option based on long-term durability, maintenance preferences, and budget."
    ],
    listItems: [
      { label: "Composite Decking", text: "Industry-leading boards from Trex and TimberTech." },
      { label: "Traditional Wood", text: "High-grade pressure-treated wood." },
      { label: "PVC Decking", text: "Advanced, ultra-durable PVC decking systems." },
      { label: "Custom Railings", text: "Available in [Trex Railings](/services/trex-railings), aluminum, and natural wood." }
    ]
  }
];

const designProcess = [
  { title: "Step 1: Consultation", desc: "Free, no-obligation consultation at your home." },
  { title: "Step 2: Planning", desc: "Custom layout design and concept planning." },
  { title: "Step 3: Selection", desc: "Guided material, color, and feature selection." },
  { title: "Step 4: Estimate", desc: "Transparent, detailed estimate and project timeline." },
  { title: "Step 5: Construction", desc: "Professional construction by our experienced crew." },
  { title: "Step 6: Completion", desc: "Final walkthrough and extensive quality check." }
];

const whyLdnDecks = [
  { title: "Local Experts", desc: "Dedicated Loudoun County-based team." },
  { title: "Trustworthy", desc: "Fully licensed, bonded, and insured." },
  { title: "Tailored Approach", desc: "A 100% custom design approach (no templates)." },
  { title: "Professional", desc: "Clean, quiet, and professional builds." },
  { title: "Longevity", desc: "Heavily focused on long-term structural durability and safety." }
];

const authorityLinks = [
  { text: "Loudoun County Residential Deck Details", url: "https://www.loudoun.gov/DocumentCenter/View/1183/Typical-Residential-Deck-Detail" },
  { text: "Fairfax County Typical Deck Guide", url: "https://www.fairfaxcounty.gov/landdevelopment/typical-deck-details" },
  { text: "Official Trex Warranty & Care", url: "https://www.trex.com/customer-support/trex-owners/warranty/" }
];

export default function NewDecksPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Custom Deck Construction",
    "provider": { "@id": "https://ldndecks.com/#organization" },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Loudoun County, VA" },
      { "@type": "AdministrativeArea", "name": "Fairfax County, VA" },
      { "@type": "AdministrativeArea", "name": "Prince William County, VA" }
    ],
    "description": "From concept to completion, we design and build fully custom decks tailored to your space, style, and budget in Northern Virginia."
  };

  return (
    <main>
      <JsonLd data={serviceSchema} />
      <ServicesHeader
        subtext="Custom Deck Design Loudoun VA"
        title="Custom Deck Design Built Around Your Home & Lifestyle"
        description="From concept to completion, we design and build fully custom decks tailored to your space, style, and budget - no templates, no shortcuts."
      />
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
        <NamedAuthor context="Loudoun, Fairfax, Prince William, and Arlington counties" lastUpdated="May 2026" />
      </section>

      {/* Pricing Anchor */}
      <section style={{ backgroundColor: '#f9f9f9', padding: '24px 20px', borderBottom: '1px solid #eee' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: '#555', margin: 0 }}>
            <strong style={{ color: '#222' }}>Most custom deck projects start at $15,000+</strong>
            {' '}— materials, size, access, and design complexity affect final pricing.{' '}
            <strong>Free in-home estimate included.</strong>
          </p>
        </div>
      </section>

      <ServiceMain
        subtitle="Not Just a Deck - A Personalized Outdoor Space"
        title="What is a Custom Deck?"
        description="Designed & Built by LDN Decks – Loudoun County. A custom deck is designed specifically for your home, layout, and exactly how you want to use your outdoor space."
        listItems={[
          "Built to match your home's architecture",
          "Designed for your lifestyle (family, entertaining, relaxing)",
          "Fully customizable layout, materials, and features",
          "Maximizes your backyard potential"
        ]}
        image1="/showcase/img08.jpeg"
        image2="/showcase/img09.jpeg"
      />
      <ServiceContentExpansion sections={expansionSections} />
      <ServiceInclusions
        title="Our Design Process"
        description="How We Bring Your Vision to Life. A step-by-step roadmap to building your perfect deck."
        items={designProcess}
      />
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '15px' }}>See the Transformation</h2>
        <p style={{ marginBottom: '40px', fontSize: '18px', color: '#555' }}>From empty backyard to fully customized outdoor living space. <Link href="/before-and-after" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>See our Before &amp; After Deck Transformations →</Link></p>
        <div style={{ position: 'relative', height: '500px', borderRadius: '8px', overflow: 'hidden' }}>
          <Image src="/showcase/img10.jpeg" alt="Custom deck transformation" fill style={{ objectFit: 'cover' }} />
        </div>
      </section>
      <ServiceInclusions
        title="Local Experts You Can Trust"
        description="Why LDN Decks?"
        items={whyLdnDecks}
      />
      <section style={{ padding: '40px 20px', backgroundColor: '#f9f9f9', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Official Resources & Safety Standards</h3>
          <p style={{ marginBottom: '20px', color: '#666' }}>We build all our decks to exceed local Northern Virginia building codes and manufacturer specifications.</p>
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
      <SimpleCTA title="Start Your Custom Deck Project" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/services/new-decks" />
      <ContactHome />
    </main>
  );
}
