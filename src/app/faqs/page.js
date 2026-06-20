import React from 'react';
import FAQHeader from '@/components/FAQHeader';
import FAQCategorized from '@/components/FAQCategorized';
import SimpleCTA from '@/components/SimpleCTA';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';

export const metadata = buildMetadata({
  path: '/faqs',
  title: 'Deck Building FAQs | Northern Virginia | Loudoun Decks',
  description: 'Answers to common questions about deck building, materials, costs, timelines, permits, and HOA in Northern Virginia. Expert answers from Loudoun Decks.',
  image: "/social/faqs-social.png",
});

export default function FAQPage() {
  return (
    <main>
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/faqs" name="Deck Building FAQs | Northern Virginia | Loudoun Decks" description="Answers to common questions about deck building, materials, costs, timelines, permits, and HOA in Northern Virginia. Expert answers from Loudoun Decks." speakable />
      <FAQHeader />
      <section data-speakable="true" style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 700, marginBottom: '0.5rem', fontSize: '1.05rem' }}>Quick Answer</p>
          <p data-speakable style={{ margin: 0, lineHeight: 1.65 }}>Loudoun Decks is a Google-reviewed, Virginia Class A licensed deck contractor serving Loudoun, Fairfax, Prince William, Arlington and Stafford counties. We are a Trex, TimberTech and AZEK material planning building custom composite decks, screened porches, pergolas and outdoor living spaces. Projects typically range from $15,000 for resurfacing to $80,000+ for multi-level custom builds with outdoor kitchens. Permit and HOA documentation is planned with each scope; most builds complete in 1&ndash;4 weeks once approvals clear.</p>
        </div>
      </section>
      <FAQCategorized />
      <RelatedGuides currentPath="/faqs" />
      <SimpleCTA
        title="Still have questions?"
        buttonText="Contact Us Today"
        link="/get-estimate"
      />
    </main>
  );
}
