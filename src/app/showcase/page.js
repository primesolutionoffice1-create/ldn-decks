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

export const metadata = buildMetadata({
  path: '/showcase',
  title: 'Custom Deck Project Gallery | Trex Deck Designer & Showcase',
  description: 'Explore our portfolio of custom deck, porch, and patio projects across Northern Virginia. See why we are the leading Trex deck designer in the region.',
  image: '/social/showcase-gallery-social.png',
});

export default function ShowcasePage() {
  return (
    <main>
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/showcase" name="Custom Deck Project Gallery | Trex Deck Designer &amp; Showcase" description="Explore our portfolio of custom deck, porch, and patio projects across Northern Virginia. See why we are the leading Trex deck designer in the region." speakable />
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            {[
              ['Definition', 'A project gallery page shows visual scope, location context, and the planning questions a similar homeowner should ask before approving a deck or outdoor living proposal.'],
              ['Planning facts', 'The strongest estimate uses photos, dimensions, existing frame condition, material preferences, permit or HOA notes, budget range, and timeline.'],
              ['Proof rule', 'Customer quotes, ratings, detailed claims, and formal case-study labels are published only after the evidence ledger confirms permission and source details.'],
              ['Next step', 'Use the gallery for ideas, then connect to the relevant city page, service page, cost guide, or estimate form for a project-specific scope.'],
            ].map(([title, text]) => (
              <article key={title} style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: '1rem', background: '#fafafa' }}>
                <h3 style={{ margin: '0 0 0.5rem', fontSize: '1rem', color: '#111' }}>{title}</h3>
                <p style={{ margin: 0, color: '#555', lineHeight: 1.6 }}>{text}</p>
              </article>
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
