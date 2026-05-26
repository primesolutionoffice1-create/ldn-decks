import React from 'react';
import Link from 'next/link';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import { BUSINESS } from '@/lib/business';

export const metadata = buildMetadata({
  path: '/reviews',
  title: `Loudoun Decks Reviews | 5.0 Google Rating | ${BUSINESS.aggregateRating.reviewCount}+ Reviews`,
  description: `Read what Northern Virginia homeowners say about Loudoun Decks. 5.0★ on Google with ${BUSINESS.aggregateRating.reviewCount}+ reviews. Real feedback from Ashburn, Leesburg, McLean, Vienna & more.`,
});

// Review cards render from the single source of truth in lib/business.js.
// The site-wide GeneralContractor JSON-LD (buildOrganizationSchema in
// lib/business.js) already emits these as `review` items on every page via
// StructuredData, so this page intentionally adds no separate review schema —
// a second #organization node would duplicate the canonical entity.
const reviews = BUSINESS.reviews;

export default function ReviewsPage() {
  return (
    <>
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>What Our Clients Say</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>5.0★ on Google with {BUSINESS.aggregateRating.reviewCount}+ reviews from Northern Virginia homeowners</p>
          <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--color-primary)' }}>5.0</p>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>★★★★★</p>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Google Rating</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--color-primary)' }}>{BUSINESS.aggregateRating.reviewCount}+</p>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Verified Reviews</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--color-primary)' }}>NoVA</p>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Local Homeowners</p>
            </div>
          </div>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '3rem' }}>
            {reviews.map((review, i) => (
              <div key={i} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', borderLeft: '4px solid var(--color-primary)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <span style={{ fontWeight: 700 }}>{review.author}</span>
                    <span style={{ color: '#888', marginLeft: '0.5rem', fontSize: '0.9rem' }}>{review.city}, VA &middot; {review.dateLabel}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#f59e0b' }}>★★★★★</span>
                    <span style={{ fontSize: '0.8rem', color: '#888' }}>via {review.platform}</span>
                  </div>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>{review.project}</p>
                <p style={{ lineHeight: 1.7, color: '#444' }}>&ldquo;{review.body}&rdquo;</p>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--color-dark)', color: '#fff', borderRadius: 8, padding: '2rem', textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Read All Reviews</h2>
            <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>See every review on our verified platforms:</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://www.google.com/maps/search/Loudoun+Decks+Centreville+VA" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: 6, fontWeight: 600, textDecoration: 'none' }}>Google Reviews</a>
              <a href="https://www.yelp.com/biz/loudoun-decks-centreville" target="_blank" rel="noopener noreferrer" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: 6, fontWeight: 600, textDecoration: 'none' }}>Yelp Reviews</a>
              <a href="https://www.bbb.org/us/va/centreville/profile/deck-builder/loudoun-decks-0241-236091241" target="_blank" rel="noopener noreferrer" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: 6, fontWeight: 600, textDecoration: 'none' }}>BBB Profile</a>
            </div>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>Had a Great Experience?</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>If we built your deck, porch, or patio, we&apos;d love to hear about your experience. Your review helps other Northern Virginia homeowners make confident decisions.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <a href="https://www.google.com/maps/search/Loudoun+Decks+Centreville+VA" target="_blank" rel="noopener noreferrer" style={{ padding: '0.6rem 1.2rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>Leave a Google Review →</a>
            <a href="https://www.yelp.com/biz/loudoun-decks-centreville" target="_blank" rel="noopener noreferrer" style={{ padding: '0.6rem 1.2rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>Leave a Yelp Review →</a>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/about', 'About Loudoun Decks'],
              ['/about/certifications-and-licenses', 'Our Certifications & Licenses'],
              ['/showcase', 'Project Gallery'],
              ['/how-to-choose-a-deck-builder-northern-virginia', 'How to Choose a Deck Builder'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>

      <SimpleCTA title={`Join ${BUSINESS.aggregateRating.reviewCount}+ Happy Homeowners`} buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/reviews" />
      <ContactHome />
    </>
  );
}
