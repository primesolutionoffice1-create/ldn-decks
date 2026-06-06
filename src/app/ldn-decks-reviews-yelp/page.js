import React from 'react';
import Link from 'next/link';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import { BUSINESS } from '@/lib/business';

export const metadata = buildMetadata({
  path: '/ldn-decks-reviews-yelp',
  title: 'Loudoun Decks Reviews | Yelp Deck Builder Northern Virginia',
  description: 'Verify Loudoun Decks public review profiles on Yelp, Google, Houzz, and BBB before hiring a Northern Virginia deck builder.',
  image: '/social/ldn-decks-reviews-yelp-social.png',
});

const S = {
  h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' },
  h3: { fontSize: '1.2rem', fontWeight: 600, margin: '1.5rem 0 0.5rem' },
  p: { marginBottom: '1rem', lineHeight: 1.7 },
};

const reviewProfiles = [
  { platform: 'Google', rating: 'Review profile', count: 'Verify current count', url: 'https://www.google.com/maps/place/Loudoun+Decks/', note: 'Verify current review count, text, names, photos, and business details directly on Google Maps.' },
  { platform: 'Yelp', rating: 'Public profile', count: 'Review listing', url: 'https://www.yelp.com/biz/loudoun-decks-centreville', note: 'Open the public Yelp listing for current review text and profile details.' },
  { platform: 'Houzz', rating: 'Public profile', count: 'Portfolio listing', url: 'https://www.houzz.com/pro/webuser-782541997/loudoun-decks', note: 'Review portfolio photos and profile details on Houzz.' },
  { platform: 'BBB', rating: 'Public profile', count: 'Accreditation profile', url: 'https://www.bbb.org/us/va/centreville/profile/deck-builder/loudoun-decks-0241-236091241', note: 'Verify current accreditation, rating, and licensing references directly on BBB.' },
];

// No org-level `review` JSON-LD is emitted here. Self-serving Review markup
// about Loudoun Decks is disallowed by Google's review-snippet policy.
// Review text should be verified on the original public platforms.

export default function YelpReviewsPage() {
  return (
    <>
      <WebPageSchema dateModified="2026-06-02" url="https://ldndecks.com/ldn-decks-reviews-yelp" name="Loudoun Decks Reviews | Yelp Deck Builder Northern Virginia" description="Verify Loudoun Decks public review profiles on Yelp, Google, Houzz, and BBB before hiring a Northern Virginia deck builder." speakable />
      {/* Hero */}
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Loudoun Decks Reviews</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Open public review profiles for Yelp, Google, Houzz, and BBB before you request an estimate.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
            <span style={{ color: '#fbbf24', fontSize: '1rem', fontWeight: 700 }}>Public review profiles</span>
            <span style={{ color: '#aaa' }}>Public review profile &middot; verify current count on Google Maps</span>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ marginBottom: '0.5rem' }}>When choosing a deck builder in Northern Virginia, reviews matter. This page routes homeowners to the public source profiles instead of republishing review excerpts without source verification.</p>
          <p style={{ margin: 0 }}>
            <a href="https://www.yelp.com/biz/loudoun-decks-centreville" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>View our Yelp profile &rarr;</a>
            {' '}&middot;{' '}
            <a href="https://www.google.com/maps/place/Loudoun+Decks/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>View on Google &rarr;</a>
          </p>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          {/* Ratings Summary */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem', marginBottom: '3rem' }}>
            {[
              ...reviewProfiles,
            ].map((p) => (
              <a key={p.platform} href={p.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', background: '#f9f9f9', borderRadius: 10, padding: '1.25rem', textAlign: 'center', textDecoration: 'none', color: 'inherit', border: '1px solid #e5e5e5' }}>
                <p style={{ fontSize: '0.8rem', color: '#999', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{p.platform}</p>
                <p style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-primary)', margin: '0 0 0.25rem' }}>{p.rating}</p>
                <p style={{ fontSize: '0.8rem', color: '#666', margin: 0 }}>{p.count}</p>
              </a>
            ))}
          </div>

          {/* Review source verification */}
          <h2 style={S.h2}>Verify Reviews at the Original Source</h2>
          <p style={S.p}>
            Review text, dates, ratings, and names can change over time. For accuracy, open the public profiles below and verify current review details directly on the original platform.
          </p>

          {reviewProfiles.map((profile) => (
            <div key={profile.platform} style={{ background: '#f9f9f9', borderRadius: 10, padding: '1.5rem', marginBottom: '1.25rem', borderLeft: '4px solid var(--color-primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 600, margin: 0 }}>{profile.platform}</h3>
                  <p style={{ fontSize: '0.8rem', color: '#999', margin: 0 }}>{profile.count}</p>
                </div>
                <span style={{ color: '#fbbf24', fontSize: '1rem', fontWeight: 700 }}>Public review listing</span>
              </div>
              <p style={{ lineHeight: 1.7, margin: '0 0 0.8rem', color: '#444' }}>{profile.note}</p>
              <a href={profile.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Open {profile.platform} profile &rarr;</a>
            </div>
          ))}

          {/* CTA to review profile */}
          <div style={{ background: 'var(--color-dark)', borderRadius: 12, padding: '2rem', textAlign: 'center', marginTop: '2rem', marginBottom: '3rem' }}>
            <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Worked With Us? Share Your Google Review</h2>
            <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>Your feedback helps other Northern Virginia homeowners find a trusted deck builder. Use our review page for Google review guidance, or open Yelp as a neutral public profile.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/review" style={{ display: 'inline-block', background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: 8, fontWeight: 600, textDecoration: 'none' }}>Google Review Guidance</Link>
              <a href="https://www.yelp.com/biz/loudoun-decks-centreville" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,.45)', padding: '0.75rem 1.5rem', borderRadius: 8, fontWeight: 600, textDecoration: 'none' }}>View Yelp Profile</a>
            </div>
          </div>

          {/* Why Reviews Matter */}
          <h2 style={S.h2}>Why Reviews Matter When Choosing a Contractor</h2>
          <p style={S.p}>Online reviews are one of the strongest indicators of contractor quality. When you&apos;re investing $15,000&ndash;$75,000 in an outdoor living project, you need to verify the company&apos;s reputation, licensing references, public profiles, project photos, and written estimate process.</p>
          <p style={S.p}>When reviewing any contractor profile, check for:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Recent review activity</strong> &mdash; current feedback is more useful than old volume alone.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Project specificity</strong> &mdash; look for deck, resurfacing, porch, permit, HOA, stair, or railing context.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Profile consistency</strong> &mdash; name, phone, address, service area, and licensing references should match across platforms.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Photo evidence</strong> &mdash; compare public profile photos with before/after galleries and project pages.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Written estimate process</strong> &mdash; a good contractor explains scope, material selections, permit triggers, and exclusions before construction.</li>
          </ul>

          {/* What We Build */}
          <h2 style={S.h2}>Services to Review Before You Hire</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '3rem' }}>
            {[
              { title: 'Custom Composite Decks', price: 'From $15K', href: '/composite-decks' },
              { title: 'Trex Decks', price: 'From $22K', href: '/trex-decks' },
              { title: 'Deck Replacement', price: 'From $18K', href: '/services/deck-replacement' },
              { title: 'Screened Porches', price: 'From $25K', href: '/services/porches/screened-porch' },
              { title: 'Deck Resurfacing', price: 'From $15K', href: '/services/deck-resurfacing' },
              { title: 'Pergolas & Gazebos', price: 'From $8K', href: '/services/gazebo-pergola' },
            ].map(s => (
              <Link key={s.href} href={s.href} style={{ display: 'block', background: '#fff', borderRadius: 8, padding: '1.25rem', textDecoration: 'none', color: 'inherit', border: '1px solid #e5e5e5' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-primary)', margin: 0 }}>{s.price}</p>
              </Link>
            ))}
          </div>

          {/* Local SEO Keywords */}
          <h2 style={S.h2}>Deck Builder Near You &mdash; Northern Virginia</h2>
          <p style={S.p}>If you&apos;re comparing deck contractors in Northern Virginia, review public profiles, project photos, service pages, and local permit guidance before requesting a written estimate. We serve:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {['Ashburn', 'Leesburg', 'Sterling', 'Reston', 'Herndon', 'McLean', 'Great Falls', 'Vienna', 'Centreville', 'Fairfax', 'Chantilly', 'Manassas', 'Woodbridge', 'Burke', 'Springfield'].map(city => (
              <Link key={city} href={`/deck-builder-${city.toLowerCase().replace(/\s+/g, '-')}-va`} style={{ display: 'inline-block', padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.85rem', textDecoration: 'none', color: 'var(--color-dark)' }}>
                {city}, VA
              </Link>
            ))}
          </div>

          {/* Related */}
          <h2 style={S.h2}>Related Pages</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/reviews', 'All LDN Decks Reviews'],
              ['/before-and-after', 'Before & After Deck Transformations'],
              ['/composite-deck-cost-northern-virginia', 'Composite Deck Cost Guide (2026)'],
              ['/how-to-choose-a-deck-builder-northern-virginia', 'How to Choose a Deck Builder'],
              ['/about/certifications-and-licenses', 'Our Certifications & Licenses'],
              ['/social', 'Follow Us on Social Media'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}>
                <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} &rarr;</Link>
              </li>
            ))}
          </ul>

        </div>
      </article>

      <SimpleCTA title="Start Your Deck Project With Confidence" buttonText="Get Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath="/ldn-decks-reviews-yelp" />
      <ContactHome />
    </>
  );
}
