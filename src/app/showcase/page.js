import React from 'react';
import ShowcaseHeader from '@/components/ShowcaseHeader';
import ShowcaseGrid from '@/components/ShowcaseGrid';
import ShowcaseStats from '@/components/ShowcaseStats';
import Testimonials from '@/components/Testimonials';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import VerifiedProjectProofSection from '@/components/VerifiedProjectProofSection';
import JsonLd from '@/components/JsonLd';

export const metadata = buildMetadata({
  path: '/showcase',
  title: 'Custom Deck Project Gallery | Trex Deck Designer & Showcase',
  description: 'Explore our portfolio of custom deck, porch, and patio projects across Northern Virginia. See why we are the leading Trex deck designer in the region.',
  image: '/social/showcase-gallery-social.png',
});

const showcaseFaqs = [
  {
    q: 'Is every gallery page a formal case study?',
    a: 'No. Gallery pages are visual and planning records. Formal case-study claims require verified scope details, owner permission, and evidence notes.',
  },
  {
    q: 'Can I use a gallery project as my exact estimate?',
    a: 'No. Similar projects are useful for direction, but pricing depends on measurements, access, structure, materials, railing length, stairs, permits, HOA rules, and timeline.',
  },
  {
    q: 'What should I send before requesting an estimate?',
    a: 'Send photos, rough dimensions, preferred material direction, budget range, timing goals, and any HOA or permit documents already available.',
  },
];

export default function ShowcasePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://ldndecks.com/showcase#faq',
    mainEntity: showcaseFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <main>
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/showcase" name="Custom Deck Project Gallery | Trex Deck Designer &amp; Showcase" description="Explore our portfolio of custom deck, porch, and patio projects across Northern Virginia. See why we are the leading Trex deck designer in the region." speakable />
      <JsonLd data={faqSchema} />
      <ShowcaseHeader />
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '2rem 1.5rem 0' }}>
        <VerifiedProjectProofSection compact />
      </div>
      <section style={{ padding: '3rem 1.5rem 1rem', background: '#fff' }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <p style={{ margin: '0 0 0.5rem', color: '#d14817', fontSize: '0.78rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Project gallery guidance
          </p>
          <h2 style={{ margin: '0 0 1rem', fontSize: 'clamp(1.6rem, 2.7vw, 2.25rem)', lineHeight: 1.2, color: '#111', fontWeight: 900 }}>
            How to use the Loudoun Decks project gallery
          </h2>
          <p style={{ color: '#444', lineHeight: 1.75, fontSize: '1.05rem', marginBottom: '1rem' }}>
            This gallery helps Northern Virginia homeowners compare deck, resurfacing, balcony, fence, and outdoor living project types before requesting a written estimate. Each gallery record should be read as visual planning context unless the project has been separately verified with owner permission, scope details, and evidence notes.
          </p>
          <p style={{ color: '#444', lineHeight: 1.75, fontSize: '1.05rem', marginBottom: '1rem' }}>
            A Loudoun Decks project gallery is a planning resource that explains how similar outdoor living projects
            should be evaluated before a homeowner approves a scope. It is not a substitute for a site visit,
            measurements, permit review, HOA review, structural inspection, or a written proposal.
          </p>
          <p style={{ color: '#444', lineHeight: 1.75, fontSize: '1.05rem', marginBottom: '1rem' }}>
            Use this showcase as a comparison tool, not just a photo grid. A strong deck estimate should connect
            5 planning inputs: project photos, rough dimensions, material direction, budget range, and timeline.
            For resurfacing or elevated work, the estimate should also separate structural requirements vs optional
            finish upgrades before the homeowner approves the project.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            {[
              ['Definition', 'A project gallery page shows visual scope, location context, and the planning questions a similar homeowner should ask before approving a deck or outdoor living proposal.'],
              ['Planning facts', 'The strongest estimate uses 7 inputs: photos, dimensions, existing frame condition, material preferences, permit or HOA notes, budget range, and timeline.'],
              ['Proof rule', 'Customer quotes, ratings, detailed claims, and formal case-study labels are published only after the evidence ledger confirms permission and source details.'],
              ['Next step', 'Follow 4 steps: compare examples, choose a service path, gather project inputs, then request a written estimate for a project-specific scope.'],
            ].map(([title, text]) => (
              <article key={title} style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: '1rem', background: '#fafafa' }}>
                <h3 style={{ margin: '0 0 0.5rem', fontSize: '1rem', color: '#111' }}>{title}</h3>
                <p style={{ margin: 0, color: '#555', lineHeight: 1.6 }}>{text}</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: '2rem', borderTop: '1px solid #e5e7eb', paddingTop: '1.5rem' }}>
            <h2 style={{ margin: '0 0 1rem', fontSize: '1.5rem', color: '#111' }}>
              How to compare gallery inspiration vs a written proposal
            </h2>
            <ol style={{ paddingLeft: '1.25rem', color: '#444', lineHeight: 1.75, margin: 0 }}>
              <li>Step 1: Pick the closest project type: new deck, resurfacing, balcony, fence, porch, or outdoor living upgrade.</li>
              <li>Step 2: Compare the visible design details vs your home: height, stairs, railings, sun exposure, access, and landscape conditions.</li>
              <li>Step 3: Gather photos, measurements, budget range, material preferences, permit or HOA notes, and desired timeline.</li>
              <li>Step 4: Request a written estimate so the project can be checked against structure, approvals, materials, and schedule.</li>
            </ol>
            <p style={{ margin: '1rem 0 0', color: '#666', fontSize: '0.95rem' }}>
              Updated 2026-08-06 for AI-readable project proof, comparison guidance, and homeowner planning context.
            </p>
          </div>
          <div style={{ marginTop: '2rem', borderTop: '1px solid #e5e7eb', paddingTop: '1.5rem' }}>
            <h2 style={{ margin: '0 0 1rem', fontSize: '1.5rem', color: '#111' }}>
              Project gallery FAQ
            </h2>
            {showcaseFaqs.map((faq) => (
              <details key={faq.q} style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: '1rem', marginBottom: '0.75rem', background: '#fff' }}>
                <summary style={{ cursor: 'pointer', fontWeight: 800, color: '#111' }}>{faq.q}</summary>
                <p style={{ margin: '0.75rem 0 0', color: '#555', lineHeight: 1.65 }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <ShowcaseGrid />
      <ShowcaseStats />
      <Testimonials />
      <RelatedGuides currentPath="/showcase" />
      <ContactHome />
    </main>
  );
}
