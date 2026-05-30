import React from 'react';
import Link from 'next/link';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import WebPageSchema from '@/components/WebPageSchema';
import JsonLd from '@/components/JsonLd';
import CallLink from '@/components/CallLink';
import { buildMetadata } from '@/lib/seo';
import { BUSINESS } from '@/lib/business';

export const metadata = buildMetadata({
  path: '/reviews',
  title: `Loudoun Decks Reviews | 5.0 Google Rating | ${BUSINESS.reviewSummary.reviewCount}+ Reviews`,
  description: `Read what Northern Virginia homeowners say about Loudoun Decks. 5.0★ on Google with ${BUSINESS.reviewSummary.reviewCount}+ reviews. Real feedback from Ashburn, Leesburg, McLean, Vienna & more.`,
});

const reviews = BUSINESS.reviews;

const serviceCategories = [
  { label: 'All Reviews', filter: null },
  { label: 'Custom Decks', filter: r => /deck/i.test(r.project) && !/resurfac|replac|repair/i.test(r.project) },
  { label: 'Screened Porches', filter: r => /porch|screen/i.test(r.project) },
  { label: 'Replacements & Resurfacing', filter: r => /replac|resurfac/i.test(r.project) },
  { label: 'Outdoor Living', filter: r => /kitchen|pergola|fire|outdoor/i.test(r.project) },
  { label: 'Fencing', filter: r => /fence/i.test(r.project) },
];

const cities = [...new Set(reviews.map(r => r.city))].sort();

const cityPages = {
  Ashburn: '/deck-builder-ashburn-va',
  Leesburg: '/deck-builder-leesburg-va',
  Centreville: '/deck-builder-centreville-va',
  Sterling: '/deck-builder-sterling-va',
  Reston: '/deck-builder-reston-va',
  McLean: '/deck-builder-mclean-va',
  Vienna: '/deck-builder-vienna-va',
  Fairfax: '/deck-builder-fairfax-va',
};

const reviewFaqs = [
  {
    q: 'Are these reviews verified?',
    a: `Every review on this page comes from a verified Google, Yelp, or BBB profile. We never edit, filter, or cherry-pick reviews. Our ${BUSINESS.reviewSummary.reviewCount}+ reviews maintain a perfect 5.0 average because we do not cut corners on materials or communication.`,
  },
  {
    q: 'What kinds of projects do you build?',
    a: 'We build custom composite decks (Trex, TimberTech, AZEK), screened porches, deck replacements, outdoor kitchens, pergolas, fencing, and full outdoor living spaces. Most projects range from $20,000 to $100,000+ depending on scope.',
  },
  {
    q: 'Which areas do you serve?',
    a: 'We serve all of Northern Virginia including Loudoun County (Ashburn, Leesburg, Sterling, Purcellville, Brambleton), Fairfax County (Reston, McLean, Vienna, Great Falls, Oakton), Prince William County (Manassas, Haymarket, Bristow), and beyond.',
  },
  {
    q: 'How do I leave a review?',
    a: 'After your project is complete, we send a follow-up email with a direct link to our Google Business Profile. You can also visit our Google listing or Yelp page directly. We appreciate every review — it helps other Northern Virginia homeowners make confident decisions.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: reviewFaqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const S = {
  h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' },
  p: { marginBottom: '1rem', lineHeight: 1.7 },
};

export default function ReviewsPage() {
  return (
    <>
      <WebPageSchema url="https://ldndecks.com/reviews" name={`Loudoun Decks Reviews | ${BUSINESS.reviewSummary.reviewCount}+ Google Reviews`} description="Read verified reviews from Northern Virginia homeowners about Loudoun Decks. 5.0 star Google rating." speakable />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }} data-speakable>What Northern Virginia Homeowners Say About Loudoun Decks</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }} data-speakable>5.0★ on Google with {BUSINESS.reviewSummary.reviewCount}+ verified reviews from homeowners across Ashburn, Leesburg, McLean, Vienna, Reston, and more</p>
          <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--color-primary)' }}>5.0</p>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>★★★★★</p>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Google Rating</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--color-primary)' }}>{BUSINESS.reviewSummary.reviewCount}+</p>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Verified Reviews</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--color-primary)' }}>A+</p>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}>BBB Rating</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--color-primary)' }}>100%</p>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Would Recommend</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section style={{ background: '#fff5f2', padding: '1.5rem 0', borderBottom: '1px solid #ffdbd1' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', fontSize: '0.9rem', color: '#555' }}>
          <span><strong style={{ color: '#111' }}>Trex Platinum Partner</strong></span>
          <span><strong style={{ color: '#111' }}>TimberTech Certified</strong></span>
          <span><strong style={{ color: '#111' }}>BBB A+ Rated</strong></span>
          <span><strong style={{ color: '#111' }}>Licensed & Insured</strong></span>
          <span><strong style={{ color: '#111' }}>2-Year Warranty</strong></span>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          {/* Browse by Service */}
          <h2 style={S.h2}>Browse Reviews by Service</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {serviceCategories.map(cat => {
              const count = cat.filter ? reviews.filter(cat.filter).length : reviews.length;
              return (
                <span key={cat.label} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.85rem', color: 'var(--color-dark)', background: count > 0 ? '#fff' : '#f5f5f5' }}>
                  {cat.label} ({count})
                </span>
              );
            })}
          </div>

          {/* Browse by City */}
          <h2 style={S.h2}>Reviews by City</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
            {cities.map(city => {
              const count = reviews.filter(r => r.city === city).length;
              const href = cityPages[city];
              return href ? (
                <Link key={city} href={href} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.85rem', textDecoration: 'none', color: 'var(--color-dark)' }}>
                  {city}, VA ({count})
                </Link>
              ) : (
                <span key={city} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.85rem', color: 'var(--color-dark)' }}>
                  {city}, VA ({count})
                </span>
              );
            })}
          </div>

          {/* All Reviews */}
          <h2 style={S.h2}>All {BUSINESS.reviewSummary.reviewCount}+ Verified Reviews</h2>
          <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '3rem' }}>
            {reviews.map((review, i) => (
              <div key={i} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', borderLeft: '4px solid var(--color-primary)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <span style={{ fontWeight: 700 }}>{review.author}</span>
                    {cityPages[review.city] ? (
                      <Link href={cityPages[review.city]} style={{ color: '#888', marginLeft: '0.5rem', fontSize: '0.9rem', textDecoration: 'none' }}>{review.city}, VA &middot; {review.dateLabel}</Link>
                    ) : (
                      <span style={{ color: '#888', marginLeft: '0.5rem', fontSize: '0.9rem' }}>{review.city}, VA &middot; {review.dateLabel}</span>
                    )}
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

          {/* Mid-page CTA */}
          <div style={{ background: 'var(--color-primary)', color: '#fff', borderRadius: 12, padding: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.75rem' }}>Ready to Join {BUSINESS.reviewSummary.reviewCount}+ Happy Homeowners?</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', opacity: 0.9 }}>Get a free, no-obligation estimate for your deck, porch, or outdoor living project.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ background: '#fff', color: 'var(--color-primary)', padding: '0.75rem 2rem', fontWeight: 700, borderRadius: 6, textDecoration: 'none', fontSize: '1.05rem' }}>Get Free Estimate</Link>
              <CallLink style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            </div>
          </div>

          {/* Platform Links */}
          <h2 style={S.h2}>Read All Reviews on Verified Platforms</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
            {[
              { name: 'Google Reviews', url: 'https://www.google.com/maps/search/Loudoun+Decks+Centreville+VA', rating: '5.0★', count: `${BUSINESS.reviewSummary.reviewCount}+ reviews` },
              { name: 'Yelp', url: 'https://www.yelp.com/biz/loudoun-decks-centreville', rating: '5.0★', count: 'Verified' },
              { name: 'BBB', url: 'https://www.bbb.org/us/va/centreville/profile/deck-builder/loudoun-decks-0241-236091241', rating: 'A+', count: 'Accredited' },
            ].map(platform => (
              <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.25rem', textDecoration: 'none', color: 'var(--color-dark)', textAlign: 'center', border: '1px solid #e5e5e5' }}>
                <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>{platform.name}</p>
                <p style={{ color: 'var(--color-primary)', fontWeight: 600, marginBottom: '0.25rem' }}>{platform.rating}</p>
                <p style={{ fontSize: '0.85rem', color: '#888' }}>{platform.count}</p>
              </a>
            ))}
          </div>

          {/* FAQ */}
          <h2 style={S.h2}>Frequently Asked Questions</h2>
          {reviewFaqs.map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          {/* Leave a Review */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Had a Great Experience?</h2>
          <p style={S.p}>If we built your deck, porch, or patio, we&apos;d love to hear about your experience. Your review helps other Northern Virginia homeowners make confident decisions.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <a href="https://www.google.com/maps/search/Loudoun+Decks+Centreville+VA" target="_blank" rel="noopener noreferrer" style={{ padding: '0.6rem 1.2rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>Leave a Google Review →</a>
            <a href="https://www.yelp.com/biz/loudoun-decks-centreville" target="_blank" rel="noopener noreferrer" style={{ padding: '0.6rem 1.2rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>Leave a Yelp Review →</a>
          </div>

          {/* Related Pages */}
          <h2 style={S.h2}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/about', 'About Loudoun Decks'],
              ['/about/certifications-and-licenses', 'Our Certifications & Licenses'],
              ['/showcase', 'Project Gallery'],
              ['/how-to-choose-a-deck-builder-northern-virginia', 'How to Choose a Deck Builder'],
              ['/services/new-decks', 'Custom Deck Building Services'],
              ['/screened-porch-builder-northern-virginia', 'Screened Porch Builder'],
              ['/composite-deck-cost-northern-virginia', 'Deck Cost Guide'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>

      <SimpleCTA title={`Join ${BUSINESS.reviewSummary.reviewCount}+ Happy Homeowners`} buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/reviews" />
      <ContactHome />
    </>
  );
}
