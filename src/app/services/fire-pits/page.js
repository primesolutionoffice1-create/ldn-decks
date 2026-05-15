import React from 'react';
import Image from 'next/image';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import ContactHome from '@/components/ContactHome';
import SimpleCTA from '@/components/SimpleCTA';
import RelatedGuides from '@/components/RelatedGuides';
import ServicesFAQ from '@/components/ServicesFAQ';
import { buildMetadata } from '@/lib/seo';

import NamedAuthor from '@/components/NamedAuthor';
export const metadata = buildMetadata({
  path: "/services/fire-pits",
  title: "Custom Fire Pit Installation Loudoun VA | Outdoor Entertainment",
  description: "Transform your backyard with a custom-built fire pit in Northern Virginia. We specialize in gas, wood-burning, and stone fire pits for year-round enjoyment."
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Custom Fire Pit Installation",
  "provider": { "@id": "https://ldndecks.com/#organization" },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Loudoun County, VA" },
    { "@type": "AdministrativeArea", "name": "Fairfax County, VA" },
    { "@type": "AdministrativeArea", "name": "Prince William County, VA" }
  ],
  "description": "Professional custom fire pit design and installation in Northern Virginia. Wood-burning, gas, and built-in stone fire pits with integrated seating areas."
};

const expansionSections = [
  {
    title: "Fire Pit Options",
    paragraphs: [ "Built to Match Your Style." ],
    listItems: [
      { label: "1. Wood-Burning Fire Pits", text: "Classic experience with natural flame and sound. Ideal for traditional setups." },
      { label: "2. Gas Fire Pits (Propane / Natural Gas)", text: "Easy to use and maintain. Instant ignition, clean and modern." },
      { label: "3. Built-In Stone Fire Pits", text: "Permanent structure that matches your patio or landscape. High-end finish." },
      { label: "4. Fire Pit + Seating Area Designs", text: "Integrated seating walls. Perfect for entertaining spaces." }
    ]
  },
  {
    title: "Premium Material Options",
    paragraphs: [ "Materials That Last." ],
    listItems: [
      { label: "Bluestone", text: "Elegant natural stone style" },
      { label: "Concrete Pavers", text: "Versatile and highly durable" },
      { label: "Natural Stone", text: "Rustic, organic appearance" },
      { label: "Brick", text: "Classic and timeless" },
      { label: "Custom Finishes", text: "Customized specifically to match your existing patio or deck." }
    ]
  },
  {
    title: "Benefits of Adding a Fire Pit",
    paragraphs: [ "Why Homeowners Love Fire Pits." ],
    listItems: [
      { label: "Atmosphere", text: "Creates a cozy, warm outdoor atmosphere" },
      { label: "Value", text: "Increases property value immediately" },
      { label: "Entertaining", text: "Enhances entertaining space year-round" },
      { label: "Custom Layout", text: "Fully custom design to fit your layout" },
      { label: "Durability", text: "Durable and weather-resistant construction" }
    ]
  }
];

const firePitProcess = [
  { title: "Step 1: Consultation", desc: "Free consultation and design planning." },
  { title: "Step 2: Evaluation", desc: "Location and safety evaluation." },
  { title: "Step 3: Materials", desc: "Material selection." },
  { title: "Step 4: Installation", desc: "Professional installation." },
  { title: "Step 5: Review", desc: "Final inspection and clean finish." }
];

const whyLdnDecks = [
  { title: "Local Team", desc: "Loudoun County-based team." },
  { title: "Trusted", desc: "Licensed and insured." },
  { title: "Custom", desc: "Custom design approach." },
  { title: "Professional", desc: "Clean, professional installation." },
  { title: "Longevity", desc: "Built for long-term durability." }
];

const faqs = [
  {
    q: "How much does a custom fire pit cost in Northern Virginia?",
    a: "Custom fire pit installations in Loudoun County and Fairfax County typically range from $1,500 to $6,000 depending on size, materials, and fuel type. Gas fire pits with natural stone and integrated seating walls are on the higher end, while simple wood-burning paver designs start around $1,500–$2,500."
  },
  {
    q: "Do I need a permit to install a fire pit in Northern Virginia?",
    a: "Permit requirements vary by jurisdiction. In Loudoun County and Fairfax County, most permanent built-in fire pits require a building permit, while freestanding units generally do not. We handle the permit research and submission process for all our clients in Leesburg, Ashburn, Chantilly, and surrounding areas."
  },
  {
    q: "What is the difference between a gas and wood-burning fire pit?",
    a: "Gas fire pits (propane or natural gas) offer instant, smokeless flames with simple on/off control — ideal for entertaining in neighborhoods across Reston, Herndon, and Centreville. Wood-burning fire pits provide a more classic campfire experience with natural crackling sound and aroma, but require ash cleanup and may be restricted in some HOA communities."
  },
  {
    q: "What materials are used to build a custom fire pit in NoVA?",
    a: "We build fire pits using bluestone, concrete pavers, natural fieldstone, and brick — all materials that withstand the Northern Virginia climate through hot summers and cold winters. The material is typically matched to your existing patio or deck design for a cohesive look."
  },
  {
    q: "How far should a fire pit be from my deck or house?",
    a: "Virginia building codes and most local fire safety guidelines recommend keeping a fire pit at least 10 feet from any structure, deck, or overhanging branches. During your free consultation, we evaluate your yard layout in Purcellville, Broadlands, or wherever you are located to find the safest and most functional placement."
  },
  {
    q: "Can a fire pit be installed on an existing patio?",
    a: "Yes, in many cases we can integrate a fire pit into your existing patio surface in Northern Virginia. We assess the patio's foundation, material compatibility, and gas line access (if applicable) before recommending the best approach for your Loudoun or Fairfax County home."
  }
];

export default function FirePitsPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <ServicesHeader
        subtext="Custom Fire Pit Loudoun VA"
        title="Custom Fire Pits Built for Comfort, Style & Year-Round Enjoyment"
        description="Transform your backyard into a warm, inviting space with a custom-built fire pit - perfect for relaxing nights, entertaining guests, and adding value to your home."
      />
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
        <NamedAuthor context="Loudoun, Fairfax, and Prince William counties" lastUpdated="May 2026" />
      </section>
      <ServiceMain
        subtitle="More Than Just a Feature - It's the Centerpiece"
        title="What is a Custom Fire Pit?"
        description="Custom Fire Pit by LDN Decks – Loudoun County. A custom fire pit creates a natural gathering space in your backyard."
        listItems={[
          "Perfect for family time and entertaining",
          "Extends outdoor use into cooler seasons",
          "Adds a luxury outdoor living feel",
          "Fully customizable to match your patio or deck"
        ]}
        image1="/showcase/img15.jpeg"
        image2="/showcase/img16.jpeg"
      />

      <section style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Fire Pit Options & Pricing</h2>
        <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#f5f5f5' }}>
                {['Type', 'Price Range', 'Fuel', 'Best For'].map(h => (
                  <th key={h} style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Portable fire bowl/table', '$500–$2,000', 'Propane/gas', 'Flexibility, rentals, small spaces'],
                ['Built-in gas fire pit', '$3,000–$8,000', 'Natural gas line', 'Clean, instant, deck-adjacent'],
                ['Stone surround (wood-burning)', '$5,000–$12,000', 'Wood logs', 'Large lots, campfire experience'],
                ['Fire pit + seating wall', '$8,000–$18,000', 'Gas or wood', 'Gathering spot, entertaining'],
                ['Fire pit + paver patio combo', '$12,000–$25,000', 'Gas or wood', 'Complete outdoor room at grade'],
                ['Fire table (rectangular)', '$2,000–$6,000', 'Propane/natural gas', 'Dining integration, modern look'],
                ['Deck-integrated gas feature', '$4,000–$10,000', 'Natural gas', 'Built into deck with non-combustible pad'],
              ].map((row, i) => (
                <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ padding: '0.75rem', borderBottom: '1px solid #eee', fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Gas vs Wood-Burning Fire Pit</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ background: '#fff3e0', border: '2px solid var(--color-primary)', borderRadius: 8, padding: '1.5rem' }}>
            <h3 style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--color-primary)' }}>Gas Fire Pit (Recommended for NoVA)</h3>
            <ul style={{ paddingLeft: '1.25rem', fontSize: '0.95rem', listStyleType: 'disc' }}>
              <li style={{ marginBottom: '0.4rem' }}>Instant on/off no startup or cleanup</li>
              <li style={{ marginBottom: '0.4rem' }}>No smoke, no sparks, no ash</li>
              <li style={{ marginBottom: '0.4rem' }}>Adjustable flame height</li>
              <li style={{ marginBottom: '0.4rem' }}>Safe near deck/house structures</li>
              <li style={{ marginBottom: '0.4rem' }}>HOA-preferred (most allow gas, restrict wood)</li>
              <li style={{ marginBottom: '0.4rem' }}>No wood storage or hauling</li>
            </ul>
          </div>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem' }}>
            <h3 style={{ fontWeight: 700, marginBottom: '0.75rem' }}>Wood-Burning Fire Pit</h3>
            <ul style={{ paddingLeft: '1.25rem', fontSize: '0.95rem', listStyleType: 'disc' }}>
              <li style={{ marginBottom: '0.4rem' }}>Authentic campfire experience (crackle, smell)</li>
              <li style={{ marginBottom: '0.4rem' }}>No gas line required lower install cost</li>
              <li style={{ marginBottom: '0.4rem' }}>Higher heat output</li>
              <li style={{ marginBottom: '0.4rem' }}>Requires 15+ ft from structures (fire code)</li>
              <li style={{ marginBottom: '0.4rem' }}>Smoke can bother neighbors on small lots</li>
              <li style={{ marginBottom: '0.4rem' }}>Some HOAs prohibit wood-burning</li>
            </ul>
          </div>
        </div>
      </section>

      <ServiceContentExpansion sections={expansionSections} />
      <ServiceInclusions
        title="Our Layout Process"
        description="How We Build Your Fire Pit."
        items={firePitProcess}
      />
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '15px' }}>See the Transformation</h2>
        <p style={{ marginBottom: '40px', fontSize: '18px', color: '#555' }}>From empty backyard to a warm, inviting gathering space.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src="/showcase/img17.jpeg" alt="Before fire pit installation" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src="/showcase/img18.jpeg" alt="After custom fire pit" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>
      <ServiceInclusions
        title="Why LDN Decks"
        description="Your dedicated local contractor."
        items={whyLdnDecks}
      />
      <ServiceAreasGrid />
      <RelatedGuides currentPath="/services/fire-pits" />
      <ServicesFAQ canonicalUrl="https://ldndecks.com/services/fire-pits" title="Fire Pit FAQs" faqs={faqs} />
      <SimpleCTA title="Build Your Dream Fire Pit" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </main>
  );
}
