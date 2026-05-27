import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ProcessSteps from '@/components/ProcessSteps';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import ServiceSchema from '@/components/ServiceSchema';
import RelatedGuides from '@/components/RelatedGuides';
import ServiceVisual from '@/components/ServiceVisual';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';

export const metadata = buildMetadata({
  path: '/deck-remodeling',
  title: 'Custom Deck Remodeling & Upgrades | Transform Your Space',
  description: 'Upgrade your existing deck with modern features. From new railings to built-in lighting, we remodel decks to fit your modern lifestyle.',
});

export default function DeckRemodelingPage() {
  return (
    <main>
      <WebPageSchema url="https://ldndecks.com/deck-remodeling" name="Custom Deck Remodeling &amp; Upgrades | Transform Your Space" description="Upgrade your existing deck with modern features. From new railings to built-in lighting, we remodel decks to fit your modern lifestyle." speakable />
      <ServiceSchema
        name="Deck Remodeling"
        description="Transform your existing deck with new features, materials, and design upgrades in Northern Virginia."
        url="https://ldndecks.com/deck-remodeling"
        category="Deck Construction"
        lowPrice="10000"
        highPrice="60000"
        relatedServices={['https://ldndecks.com/services/deck-resurfacing', 'https://ldndecks.com/services/deck-replacement', 'https://ldndecks.com/services/new-decks']}
      />
      <ServicesHeader 
        subtext="Deck Restoration"
        title="Custom Deck Remodeling & Upgrades"
        description="Transform your dated deck into a modern masterpiece with our specialized remodeling services."
      />

      <ServiceMain 
        subtitle="Modern Upgrades"
        title="Deck Remodeling Specialist in Northern Virginia"
        description="You don't always need a brand new deck to get a brand new look. Our remodeling services focus on upgrading your existing structure with premium materials, modern railings, and custom features."
        listTitle="Remodeling Options:"
        listItems={[
          "Wood-to-composite resurfacing",
          "Contemporary cable or glass railing installs",
          "Integrated deck lighting and power",
          "Built-in seating and planter boxes"
        ]}
        image1="/images/img04.jpeg"
        image2="/images/img07.jpeg"
      />

      <ServiceVisual image="/images/img21.jpeg" />

      <ServiceInclusions 
        title="Our Remodeling Approach"
        description="We combine your vision with our craftsmanship to create a space that feels entirely new."
        items={[
          { title: "Stylistic Updates", desc: "Change the look of your home with modern decking colors and architectural railing styles." },
          { title: "Functional Add-ons", desc: "Add built-in benches, storage solutions, or privacy walls to your existing deck." },
          { title: "Longevity Focus", desc: "Every remodeling project includes a structural safety check to ensure your deck lasts for years to come." }
        ]}
      />

      <ProcessSteps />

      <RelatedGuides currentPath="/deck-remodeling" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <ContactHome />
    </main>
  );
}
