import React from 'react';
import Image from 'next/image';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import ServicesFAQ from '@/components/ServicesFAQ';
import SimpleCTA from '@/components/SimpleCTA';
import JsonLd from '@/components/JsonLd';
import ServiceSchema from '@/components/ServiceSchema';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';

import NamedAuthor from '@/components/NamedAuthor';
export const metadata = buildMetadata({
  path: "/services/trex-railings",
  title: "Trex Railings With Cocktail Top Loudoun VA | Custom Deck Upgrades",
  description: "Upgrade your deck with modern Trex railing systems and a custom cocktail top in Northern Virginia. Perfect for entertaining and adding a premium finish."
});

const expansionSections = [
  {
    title: "Why Trex Railings?",
    paragraphs: [
      "Trex railing systems are designed to match composite decks and provide long-lasting performance. They are durable, low-maintenance, and stylish."
    ],
    listItems: [
      { label: "Low Maintenance", text: "No painting or staining required" },
      { label: "Durability", text: "Resistant to weather, fading, and rot" },
      { label: "Safety", text: "Strong, secure construction" },
      { label: "Customizable", text: "Available in multiple styles and colors" }
    ]
  },
  {
    title: "Design Options",
    paragraphs: [
      "Customize the look of your deck with our various premium railing options tailored to your home's aesthetic."
    ],
    listItems: [
      { label: "1. Trex Transcend Railings", text: "Premium design, multiple color combinations, sleek and modern." },
      { label: "2. Trex Select Railings", text: "Budget-friendly option with a clean and simple look." },
      { label: "3. Aluminum Railings with Cocktail Top", text: "Contemporary style, strong and minimal." },
      { label: "4. Wood or Composite Cocktail Top Finishes", text: "Match your deck surface or choose contrasting accent options." }
    ]
  },
  {
    title: "Benefits of Cocktail Railings",
    paragraphs: [
      "Why do homeowners love cocktail railings? They completely change how you use your outdoor space."
    ],
    listItems: [
      { label: "Entertaining", text: "Extra surface for drinks and snacks" },
      { label: "Hosting", text: "Enhances outdoor entertaining" },
      { label: "Aesthetics", text: "Adds a high-end custom look" },
      { label: "Functionality", text: "Increases overall deck functionality" },
      { label: "Value", text: "Boosts home value" }
    ]
  }
];

const howWeInstall = [
  { title: "Step 1: Consultation", desc: "Free consultation and design." },
  { title: "Step 2: Selection", desc: "Material selection (Trex system + top finish)." },
  { title: "Step 3: Installation", desc: "Precise installation of railing system." },
  { title: "Step 4: Integration", desc: "Custom cocktail top integration." },
  { title: "Step 5: Review", desc: "Final inspection and clean finish." }
];

const whyLdnDecks = [
  { title: "Local Team", desc: "Loudoun County-based team." },
  { title: "Trusted", desc: "Fully licensed and insured." },
  { title: "Professional", desc: "Clean, professional installs." },
  { title: "Specialists", desc: "Extensive experience with Trex systems." },
  { title: "Reliable", desc: "Built for durability and long-term use." }
];

const faqs = [
  {
    q: "How much do Trex railings cost in Northern Virginia?",
    a: "Trex railing installation in Loudoun County and Fairfax County typically ranges from $150 to $250 per linear foot installed, including labor. A standard 40-linear-foot deck railing project with cocktail top averages $6,000–$10,000 depending on the Trex system (Transcend vs. Select) and infill style chosen."
  },
  {
    q: "What is the difference between cable, composite, and aluminum railings?",
    a: "Cable railings offer a sleek, open sight-line perfect for decks with views in Great Falls or Potomac Falls. Composite railings like Trex Transcend are low-maintenance and weather-resistant, ideal for NoVA's humid summers. Aluminum railings are lightweight, powder-coated, and the most budget-friendly option while still providing a modern look."
  },
  {
    q: "What are the railing height requirements in Northern Virginia?",
    a: "Virginia Residential Code requires deck railings to be at least 36 inches tall for decks up to 30 inches off the ground, and 42 inches tall for decks higher than 30 inches. Loudoun County and Fairfax County enforce these standards, and we ensure every installation we complete in Leesburg, Ashburn, and Chantilly is fully code-compliant."
  },
  {
    q: "What color options are available for Trex railings?",
    a: "Trex Transcend railings are available in classic colors including White, Vintage Lantern, Tree House, and Charcoal Black, with multiple baluster and post cap finish options. We help homeowners across Loudoun and Prince William County select combinations that complement their composite deck surface and home exterior."
  },
  {
    q: "How long does Trex railing installation take?",
    a: "Most residential Trex railing projects in Northern Virginia are completed in 1–2 days once materials are on-site. Larger decks or projects requiring custom cocktail tops, gate installations, or stair railings in Herndon, Sterling, or Reston may take 2–3 days for a clean, polished result."
  },
  {
    q: "Can Trex railings be added to an existing deck?",
    a: "Yes. Trex railings can be retrofitted onto most existing decks in Northern Virginia, provided the deck framing and post footings are structurally sound. We always perform a structural assessment before installation to ensure your deck in Loudoun or Fairfax County meets code requirements for the new railing system."
  }
];

export default function TrexRailingsPage() {
  return (
    <main>
      <WebPageSchema url="https://ldndecks.com/services/trex-railings" name="Trex Railings With Cocktail Top Loudoun VA | Custom Deck Upgrades" description="Upgrade your deck with modern Trex railing systems and a custom cocktail top in Northern Virginia. Perfect for entertaining and adding a premium finish." speakable />
      <ServiceSchema
        name="Trex Railing Installation"
        description="Trex composite and aluminum railing systems for Northern Virginia decks. Signature, Select, and Transcend rail lines."
        url="https://ldndecks.com/services/trex-railings"
        category="Deck Accessories"
        lowPrice="1500"
        highPrice="8000"
        relatedServices={['https://ldndecks.com/trex-decks', 'https://ldndecks.com/services/new-decks', 'https://ldndecks.com/services/deck-stair-lighting']}
      />
      <ServicesHeader
        subtext="Deck Railing Upgrade Loudoun VA"
        title="Trex Railings with Cocktail Top - Style Meets Function"
        description="Upgrade your deck with modern Trex railing systems and a custom cocktail top - perfect for entertaining, relaxing, and adding a premium finish to your outdoor space."
      />
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
        <NamedAuthor context="Loudoun, Fairfax, and Prince William counties" lastUpdated="May 2026" />
      </section>
      <ServiceMain
        subtitle="More Than Just a Railing"
        title="What is a Cocktail Top?"
        description="Installed by LDN Decks – Northern Virginia. A cocktail top is a flat surface installed on top of your deck railing, creating a functional ledge."
        listItems={[
          "Perfect for drinks and food",
          "Adds usable space without expanding your deck",
          "Clean, modern finish",
          "Great for hosting and entertaining"
        ]}
        image1="/showcase/img06.jpg"
        image2="/showcase/img07.jpeg"
      />
      <ServiceContentExpansion sections={expansionSections} />
      <ServiceInclusions
        title="How We Install Your Railings"
        description="A seamless process to upgrade your outdoor living space."
        items={howWeInstall}
      />
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '15px' }}>See the Transformation</h2>
        <p style={{ marginBottom: '40px', fontSize: '18px', color: '#555' }}>From standard railings to a premium entertaining space.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src="/showcase/img06.jpg" alt="Before Trex railing upgrade — aged wood railing on a Northern Virginia composite deck" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src="/showcase/img07.jpeg" alt="After Trex cocktail railing" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>
      <ServiceInclusions
        title="Trust the Experts"
        description="Why choose LDN Decks for your composite railing installation in Northern Virginia?"
        items={whyLdnDecks}
      />
      <ServiceAreasGrid />
      <RelatedGuides currentPath="/services/trex-railings" />
      <ServicesFAQ canonicalUrl="https://ldndecks.com/services/trex-railings" title="Trex Railings FAQs" faqs={faqs} />
      <SimpleCTA title="Upgrade Your Deck Railings" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </main>
  );
}
