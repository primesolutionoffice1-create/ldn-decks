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
import JsonLd from '@/components/JsonLd';
import ServiceSchema from '@/components/ServiceSchema';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';

import NamedAuthor from '@/components/NamedAuthor';
export const metadata = buildMetadata({
  path: "/services/trex-calm-shell",
  title: "Trex Clam Shell Deck Resurfacing Loudoun VA | Clean Modern Looks",
  description: "Upgrade your existing deck with a fresh, modern look using Trex Clam Shell composite decking in Northern Virginia. Expert resurfacing & installation."
});

const expansionSections = [
  {
    title: "Why Trex Calm Shell",
    paragraphs: [ "Clean, Modern & Built to Last." ],
    listItems: [
      { label: "Soft Neutral Color", text: "A soft, neutral tone that perfectly complements any house exterior and landscape." },
      { label: "High-Performance", text: "Superior scratch, stain, and fade resistance backed by a strong manufacturer warranty." },
      { label: "Low Maintenance", text: "Never sand, stain, or paint your deck again. A simple soap-and-water cleaning is all it takes." },
      { label: "Eco-Friendly", text: "Made from 95% recycled materials, it's an environmentally conscious choice." }
    ]
  },
  {
    title: "What is Deck Resurfacing?",
    paragraphs: [ "A Smarter Alternative to Full Replacement." ],
    listItems: [
      { label: "Cost-Effective", text: "Save money compared to a full rebuild by utilizing your existing framing." },
      { label: "Faster Installation", text: "Complete your project in less time with fewer structural building requirements." },
      { label: "Structural Evaluation", text: "We carefully inspect your sub-structure to guarantee it is safe and built to code before adding new boards." },
      { label: "Complete Upgrade", text: "Enjoy a brand new, modern deck surface without the mess of major demolition." }
    ]
  }
];

const resurfacingProcess = [
  { title: "Step 1: Frame Inspection", desc: "We evaluate your existing deck structure to ensure it is sound and meets code requirements." },
  { title: "Step 2: Old Board Removal", desc: "Safe tear-down and disposal of your old, worn-out wood or composite surface boards." },
  { title: "Step 3: Joist Protection", desc: "Application of joist tape to prevent future rot and extend the life of your existing wood frame." },
  { title: "Step 4: Surface Installation", desc: "Precision installation of your new Trex Calm Shell decking with hidden fasteners." },
  { title: "Step 5: Final Review", desc: "Final walkthrough to ensure a perfect, durable finish." }
];

const whyLdnDecks = [
  { title: "Local Team", desc: "Proudly serving Loudoun County and Northern Virginia." },
  { title: "Trusted", desc: "Fully licensed and insured professionals." },
  { title: "Certified Builders", desc: "Extensive experience with Trex composite systems." },
  { title: "Craftsmanship", desc: "Clean, detail-oriented installation and high-quality finishes." },
  { title: "Satisfaction", desc: "Driven by 5-star customer reviews and long-lasting durability." }
];

export default function TrexCalmShellPage() {
  return (
    <main>
      <WebPageSchema url="https://ldndecks.com/services/trex-calm-shell" name="Trex Clam Shell Deck Resurfacing Loudoun VA | Clean Modern Looks" description="Upgrade your existing deck with a fresh, modern look using Trex Clam Shell composite decking in Northern Virginia. Expert resurfacing &amp; installation." speakable />
      <ServiceSchema
        name="Trex Calm Shell Decking"
        description="Trex Calm Shell color installation and showcase for Northern Virginia decks. Premium composite decking in a warm beige tone."
        url="https://ldndecks.com/services/trex-calm-shell"
        category="Deck Construction"
        price="20000"
        relatedServices={['https://ldndecks.com/trex-decks', 'https://ldndecks.com/services/new-decks', 'https://ldndecks.com/composite-decks']}
      />
      <ServicesHeader
        subtext="Deck Resurfacing"
        title="Upgrade Your Deck with Trex Calm Shell Resurfacing"
        description="Give your old deck a fresh, modern look with Trex Calm Shell - a premium composite color designed for durability, style, and low maintenance."
      />
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
        <NamedAuthor context="Loudoun, Fairfax, and Prince William counties" lastUpdated="May 2026" />
      </section>
      <ServiceMain
        subtitle="A Smarter Alternative to Full Replacement"
        title="What is Deck Resurfacing?"
        description="Deck resurfacing allows you to keep your existing structure while upgrading the surface with new composite decking."
        listItems={[
          "Save money vs full rebuild",
          "Faster installation",
          "Modern look without major construction",
          "Extend the life of your deck"
        ]}
        image1="/showcase/img21.jpg"
        image2="/showcase/img22.jpg"
      />
      <ServiceContentExpansion sections={expansionSections} />
      <ServiceInclusions
        title="The Resurfacing Process"
        description="How we transform your existing structure."
        items={resurfacingProcess}
      />
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '15px' }}>See the Transformation</h2>
        <p style={{ marginBottom: '40px', fontSize: '18px', color: '#555' }}>From weathered wood to a beautiful Trex surface.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src="/showcase/img23.jpg" alt="Before Trex Calm Shell deck resurfacing — old wood deck in Northern Virginia" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src="/showcase/img24.jpg" alt="After Trex Calm Shell installation" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>
      <ServiceInclusions
        title="Why LDN Decks"
        description="Your dedicated local Trex installer."
        items={whyLdnDecks}
      />
      <ServiceAreasGrid />
      <SimpleCTA title="Get Your Trex Calm Shell Quote" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/services/trex-calm-shell" />
      <ContactHome />
    </main>
  );
}
