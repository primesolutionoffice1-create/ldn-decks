import React from 'react';
import FAQHeader from '@/components/FAQHeader';
import FAQCategorized from '@/components/FAQCategorized';
import SimpleCTA from '@/components/SimpleCTA';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import { SERVICE_AREA_FAQ_ANSWER } from '@/lib/serviceArea';

export const metadata = buildMetadata({
  path: '/faqs',
  title: 'Deck Building FAQs | Northern Virginia | Loudoun Decks',
  description: 'Answers about deck building, materials, permits, and the Northern Virginia service area. Loudoun Decks confirms scope in a written estimate.',
  image: "/social/faqs-social.png",
});

export default function FAQPage() {
  return (
    <main>
      <WebPageSchema dateModified="2026-10-18" url="https://ldndecks.com/faqs" name="Deck Building FAQs | Northern Virginia | Loudoun Decks" description="Answers to common questions about deck building, materials, permits, and HOA in Northern Virginia. Expert answers from Loudoun Decks." speakable />
      <FAQHeader />
      <section data-speakable="true" style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 700, marginBottom: '0.5rem', fontSize: '1.05rem' }}>Quick Answer</p>
          <p data-speakable style={{ margin: 0, lineHeight: 1.65 }}>{SERVICE_AREA_FAQ_ANSWER} Loudoun Decks is a Virginia Class A contractor, license #2705191673, and builds custom composite decks, screened porches, pergolas, and outdoor living spaces. The written estimate names the scope, the product, and the permit office for that property.</p>
        </div>
      </section>
      <FAQCategorized />

      <section aria-labelledby="faq-key-numbers" style={{ maxWidth: 900, margin: '0 auto', padding: '48px 1.5rem 0' }}>
        <h2 id="faq-key-numbers" style={{ fontSize: '1.7rem', fontWeight: 800, marginBottom: 14 }}>
          Deck building in Northern Virginia: the key numbers
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 14 }}>
          {[
            'A written estimate is the price for a specific property. This page does not publish one price for every deck.',
            'Resurfacing is a fit only when the existing frame is sound. The site visit decides that.',
            'The schedule depends on the scope and the permit office. The estimate states the timeline for that project.',
            'Footing depth follows the code that applies to the property. Confirm it on the plans, not from a ZIP code.',
            'Manufacturer warranty terms vary by product line. Verify the current warranty for the product named in the estimate.',
            'Licensed and verifiable: Virginia DPOR Class A Contractor License #2705191673.',
          ].map((fact) => (
            <article key={fact} style={{ border: '1px solid #e5e7eb', borderRadius: 8, background: '#fafafa', padding: 18 }}>
              <p style={{ margin: 0, color: '#444', lineHeight: 1.6 }}>{fact}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="faq-how-to-start" style={{ maxWidth: 900, margin: '0 auto', padding: '40px 1.5rem 8px' }}>
        <h2 id="faq-how-to-start" style={{ fontSize: '1.7rem', fontWeight: 800, marginBottom: 14 }}>
          How to get from question to finished deck — 5 steps
        </h2>
        <ol style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14, listStyle: 'none', padding: 0, margin: 0 }}>
          {[
            'Step 1: Gather your inputs — photos of the space, rough dimensions, material preference, budget range and timeline.',
            'Step 2: Book the free consultation; we review grade, frame condition (for resurfacing) and permit or HOA triggers on site.',
            'Step 3: Receive a written, itemized estimate — scope, materials, price and timeline, with no pressure.',
            'Step 4: We prepare county permit documentation and the HOA architectural review package where required.',
            'Step 5: Construction (typically 1–2 weeks), county inspections, then walkthrough with care guidance and written labor warranty terms.',
          ].map((step) => (
            <li key={step} style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #B58E3B', borderRadius: 8, padding: 18, background: '#fff', color: '#444', lineHeight: 1.6 }}>
              {step}
            </li>
          ))}
        </ol>
      </section>

      <RelatedGuides currentPath="/faqs" />
      <SimpleCTA
        title="Still have questions?"
        buttonText="Contact Us Today"
        link="/get-estimate"
      />
    </main>
  );
}
