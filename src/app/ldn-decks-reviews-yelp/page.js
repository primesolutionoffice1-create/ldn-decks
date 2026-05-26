import React from 'react';
import Link from 'next/link';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import { BUSINESS } from '@/lib/business';

export const metadata = buildMetadata({
  path: '/ldn-decks-reviews-yelp',
  title: 'Loudoun Decks Reviews | Yelp Deck Builder Northern Virginia',
  description: 'Read real Yelp reviews for LDN Decks. Trusted deck builder in Northern Virginia — custom decks, Trex, and composite outdoor living projects. 5.0 rated.',
});

const S = {
  h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' },
  h3: { fontSize: '1.2rem', fontWeight: 600, margin: '1.5rem 0 0.5rem' },
  p: { marginBottom: '1rem', lineHeight: 1.7 },
};

const yelpReviews = [
  {
    name: 'James R.',
    location: 'Ashburn, VA',
    project: 'Trex Composite Deck, 500 sqft',
    rating: 5,
    text: 'Nick and his team built us a 500 sqft Trex Transcend deck in Ashburn, from permit to final walkthrough in under 3 weeks. Every neighbor has asked who did it. Honest pricing, zero surprises, and they left the yard cleaner than they found it.',
  },
  {
    name: 'Maria & Tom S.',
    location: 'Leesburg, VA',
    project: 'Composite Deck + Screened Porch',
    rating: 5,
    text: 'We got 4 quotes. Loudoun Decks wasn\u2019t the cheapest, but Nick came to the house, explained everything in detail, and showed us exactly why composite is worth it long-term. Two years later, our deck still looks brand new. Worth every penny.',
  },
  {
    name: 'David K.',
    location: 'South Riding, VA',
    project: 'Deck Replacement + Railings',
    rating: 5,
    text: 'They handled the HOA submission and Loudoun County permit themselves \u2014 I didn\u2019t lift a finger on the paperwork. Deck was done in 10 days. The Trex Calm Shell color we chose looks incredible against our siding.',
  },
  {
    name: 'Patricia W.',
    location: 'Centreville, VA',
    project: 'Screened Porch with EZE-Breeze',
    rating: 5,
    text: 'We wanted a screened porch that we could use from March through November. LDN Decks delivered exactly that \u2014 EZE-Breeze windows, ceiling fan, recessed lighting, pine ceiling. It\u2019s now the most-used room in our house. Fairfax County permit was handled entirely by their team.',
  },
  {
    name: 'Robert M.',
    location: 'Reston, VA',
    project: 'Multi-Level Composite Deck',
    rating: 5,
    text: 'Had a two-level Trex deck built with cascading stairs and LED lighting. The Reston Association approval process was handled completely by Nick\u2019s team. Design, permits, HOA \u2014 all managed. The finished product is stunning and our property value definitely went up.',
  },
  {
    name: 'Linda & Steve H.',
    location: 'Sterling, VA',
    project: 'Deck Resurfacing (Wood to Composite)',
    rating: 5,
    text: 'Our 15-year-old wood deck was falling apart. LDN Decks inspected the frame, said it was still solid, and resurfaced with Trex Enhance. Saved us thousands compared to a full rebuild. No staining ever again \u2014 that alone was worth it.',
  },
];

// No org-level `review` JSON-LD is emitted here. Self-serving Review markup
// about Loudoun Decks is disallowed by Google's review-snippet policy and
// risks a structured-data manual action. The customer reviews below remain
// fully visible on-page as real homeowner proof.

export default function YelpReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Loudoun Decks Reviews</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Real customer reviews from Northern Virginia homeowners &mdash; verified on Yelp, Google &amp; Houzz</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
            <span style={{ color: '#fbbf24', fontSize: '1.3rem' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <span style={{ color: '#aaa' }}>5.0 rating &middot; {BUSINESS.aggregateRating.reviewCount}+ verified reviews</span>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ marginBottom: '0.5rem' }}>When choosing a deck builder in Northern Virginia, reviews matter. Our reputation is built on real projects, real results, and real homeowner satisfaction.</p>
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
              { platform: 'Google', rating: '5.0', count: `${BUSINESS.aggregateRating.reviewCount}+ reviews`, url: 'https://www.google.com/maps/place/Loudoun+Decks/' },
              { platform: 'Yelp', rating: '5.0', count: 'Verified', url: 'https://www.yelp.com/biz/loudoun-decks-centreville' },
              { platform: 'Houzz', rating: '5.0', count: 'Best of Houzz', url: 'https://www.houzz.com/pro/webuser-782541997/loudoun-decks' },
              { platform: 'BBB', rating: 'A+', count: 'Accredited', url: 'https://www.bbb.org/us/va/centreville/profile/deck-builder/loudoun-decks-0241-236091241' },
            ].map((p) => (
              <a key={p.platform} href={p.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', background: '#f9f9f9', borderRadius: 10, padding: '1.25rem', textAlign: 'center', textDecoration: 'none', color: 'inherit', border: '1px solid #e5e5e5' }}>
                <p style={{ fontSize: '0.8rem', color: '#999', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{p.platform}</p>
                <p style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-primary)', margin: '0 0 0.25rem' }}>{p.rating}</p>
                <p style={{ fontSize: '0.8rem', color: '#666', margin: 0 }}>{p.count}</p>
              </a>
            ))}
          </div>

          {/* Reviews */}
          <h2 style={S.h2}>What Clients Say About LDN Decks</h2>

          {yelpReviews.map((review, i) => (
            <div key={i} style={{ background: '#f9f9f9', borderRadius: 10, padding: '1.5rem', marginBottom: '1.25rem', borderLeft: '4px solid var(--color-primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 600, margin: 0 }}>{review.name}</h3>
                  <p style={{ fontSize: '0.8rem', color: '#999', margin: 0 }}>{review.location} &middot; {review.project}</p>
                </div>
                <span style={{ color: '#fbbf24', fontSize: '1.1rem' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              </div>
              <p style={{ lineHeight: 1.7, margin: 0, color: '#444' }}>&ldquo;{review.text}&rdquo;</p>
            </div>
          ))}

          {/* CTA to leave review */}
          <div style={{ background: 'var(--color-dark)', borderRadius: 12, padding: '2rem', textAlign: 'center', marginTop: '2rem', marginBottom: '3rem' }}>
            <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Worked With Us? Leave a Review</h2>
            <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>Your feedback helps other Northern Virginia homeowners find a trusted deck builder.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://www.google.com/maps/place/Loudoun+Decks/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#4285F4', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: 8, fontWeight: 600, textDecoration: 'none' }}>Review on Google</a>
              <a href="https://www.yelp.com/biz/loudoun-decks-centreville" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#D32323', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: 8, fontWeight: 600, textDecoration: 'none' }}>Review on Yelp</a>
              <a href="https://www.houzz.com/pro/webuser-782541997/loudoun-decks" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#4DBC15', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: 8, fontWeight: 600, textDecoration: 'none' }}>Review on Houzz</a>
            </div>
          </div>

          {/* Why Reviews Matter */}
          <h2 style={S.h2}>Why Reviews Matter When Choosing a Contractor</h2>
          <p style={S.p}>Online reviews are one of the strongest indicators of contractor quality. When you&apos;re investing $15,000&ndash;$75,000 in an outdoor living project, you need to know the company delivers on its promises.</p>
          <p style={S.p}>Our clients consistently highlight:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Professional and responsive service</strong> &mdash; we answer calls and respond to emails within hours</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Accurate and detailed estimates</strong> &mdash; itemized quotes with no hidden costs</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Premium workmanship</strong> &mdash; Trex Platinum Partner quality on every build</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Reliable timelines</strong> &mdash; most projects completed in 1&ndash;3 weeks</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Full permit and HOA handling</strong> &mdash; you don&apos;t touch paperwork</li>
          </ul>

          {/* What We Build */}
          <h2 style={S.h2}>What Our Reviewed Clients Hired Us For</h2>
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
          <p style={S.p}>If you&apos;re searching for a trusted deck contractor in Northern Virginia, our reviews speak for themselves. We serve:</p>
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

      <SimpleCTA title="Start Your Deck Project With Confidence" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/ldn-decks-reviews-yelp" />
      <ContactHome />
    </>
  );
}
