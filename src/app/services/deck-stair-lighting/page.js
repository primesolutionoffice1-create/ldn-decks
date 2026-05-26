import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ProcessSteps from '@/components/ProcessSteps';
import ContactHome from '@/components/ContactHome';
import ServiceSchema from '@/components/ServiceSchema';
import RelatedGuides from '@/components/RelatedGuides';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import SimpleCTA from '@/components/SimpleCTA';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';

import NamedAuthor from '@/components/NamedAuthor';
export const metadata = buildMetadata({
  path: '/services/deck-stair-lighting',
  title: 'Deck Stair Lighting Loudoun VA | LDN Decks',
  description: 'Custom-built LED lighting systems installed directly into your deck stairs - clean, modern, and built to last in Loudoun, Fairfax & Prince William County.',
});

const whyLdnDecks = [
  {
    title: "Local Loudoun County experts",
    desc: "We understand local building codes and design trends."
  },
  {
    title: "Clean and professional installations",
    desc: "Our installers ensure all wiring is hidden and the finish is flawless."
  },
  {
    title: "Built for long-term durability",
    desc: "Lighting integrated directly into the build, designed to withstand Northern Virginia weather."
  }
];

const expansionSections = [
  {
    title: "Recessed LED Stair Lights",
    paragraphs: [
      "Installed directly into each step, recessed LED stair lights provide a clean, modern flush finish. This is our most popular option for a seamless look that enhances both safety and aesthetics without protruding fixtures."
    ]
  },
  {
    title: "Side Rail Lighting",
    paragraphs: [
      "Subtle glow along railings that adds depth and ambiance to your deck's architecture, perfectly complementing the steps while guiding the way."
    ]
  },
  {
    title: "Post Cap & Smart Lighting Systems",
    paragraphs: [
      "We also offer elegant lighting on deck posts for soft top-down illumination, as well as smart lighting systems featuring motion sensors, timers, and remote or app-controlled capabilities to manage your deck's lighting effortlessly."
    ]
  }
];

export default function DeckStairLightingPage() {
  return (
    <main>
      <WebPageSchema url="https://ldndecks.com/services/deck-stair-lighting" name="Deck Stair Lighting Loudoun VA | LDN Decks" description="Custom-built LED lighting systems installed directly into your deck stairs - clean, modern, and built to last in Loudoun, Fairfax &amp; Prince William County." speakable />
      <ServiceSchema name="Deck & Stair Lighting" description="Integrated LED deck lighting, stair riser lights, post cap lights, and under-rail strips." price="2000" />
      <ServicesHeader
        subtext="Deck Stair Lighting Loudoun VA"
        title="Deck Stair Lighting That Looks Amazing & Keeps Your Family Safe"
        description="Custom-built LED lighting systems installed directly into your deck stairs - clean, modern, and built to last."
      />
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
        <NamedAuthor context="Northern Virginia" lastUpdated="May 2026" />
      </section>

      <ServiceMain
        subtitle="Why It Matters"
        title="Why Add Lights to Your Deck Stairs?"
        description="Installed by LDN Decks – Loudoun County. Enhance the safety and beauty of your outdoor living space with premium lighting solutions."
        listItems={[
          "Prevent slips and accidents at night",
          "Increase home value instantly",
          "Create a luxury outdoor atmosphere",
          "Perfect for entertaining and family use",
          "Energy-efficient LED solutions"
        ]}
        image1="/showcase/light-img.jpeg"
        image2="/showcase/img01.jpg"
      />

      <ServiceContentExpansion sections={expansionSections} />

      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '15px' }}>See the Transformation</h2>
        <p style={{ marginBottom: '40px', fontSize: '18px', color: '#555' }}>Same deck. Completely different experience.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src="/showcase/light-img.jpeg" alt="Before stair lighting" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src="/showcase/img01.jpg" alt="After stair lighting" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem 3rem' }}>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: '#444' }}>
          Stair lighting works best when it is planned with the stair structure, not added as an afterthought. Homeowners can review our <Link href="/education/deck-stair-construction-diagram" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck stair construction diagram</Link> to understand tread depth, riser height, stringers, and landing details before choosing lighting locations.
        </p>
      </section>

      <ServiceInclusions
        title="Why Choose Us"
        description="At LDN Decks, we provide licensed and insured lighting installations integrated into your build."
        items={whyLdnDecks}
      />

      <ProcessSteps />

      <ServiceAreasGrid />

      <RelatedGuides currentPath="/services/deck-stair-lighting" />
      <SimpleCTA title="Light Up Your Deck" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </main>
  );
}
