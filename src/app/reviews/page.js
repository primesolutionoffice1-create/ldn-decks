import React from 'react';
import Link from 'next/link';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import WebPageSchema from '@/components/WebPageSchema';
import JsonLd from '@/components/JsonLd';
import CallLink from '@/components/CallLink';
import { buildMetadata } from '@/lib/seo';
import NamedAuthor from '@/components/NamedAuthor';

const GOOGLE_REVIEW_URL = 'https://www.google.com/maps/place/Loudoun+Decks/@38.8379807,-77.4214727,15z/data=!4m6!3m5!1s0x89b6450e6789e93d:0x91d60ee13bfdba09!8m2!3d38.8396576!4d-77.4392692!16s%2Fg%2F11vybttycn?entry=ttu';
const YELP_URL = 'https://www.yelp.com/biz/loudoun-decks-centreville';
const BBB_URL = 'https://www.bbb.org/us/va/centreville/profile/deck-builder/loudoun-decks-0241-236091241';

export const metadata = buildMetadata({
  path: '/reviews',
  title: 'Loudoun Decks Reviews | Verify Public Review Profiles',
  description: `Open Loudoun Decks public review profiles on Google, Yelp, and BBB. Verify current review text directly on the source platforms.`,
  image: '/social/reviews-social.png',
});

const reviewFaqs = [
  {
    q: 'Are these public customer reviews?',
    a: `Loudoun Decks links to public Google, Yelp, and BBB review profiles so homeowners can verify current review text directly on the source platform. We do not create fake reviews or incentivize ratings.`,
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
    a: 'After your project is complete, we send a follow-up email with a direct link to our Google Business Profile. We appreciate honest Google reviews from completed-project customers because they help other Northern Virginia homeowners make confident decisions.',
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
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/reviews" name="Loudoun Decks Reviews | Verify Public Review Profiles" description="Open Loudoun Decks public review profiles and verify current review text directly on Google, Yelp, and BBB." speakable />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }} data-speakable>What Northern Virginia Homeowners Say About Loudoun Decks</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }} data-speakable>Open Loudoun Decks public review profiles and verify current review text, dates, names, and ratings directly on Google, Yelp, and BBB.</p>
          <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--color-primary)' }}>Google</p>
              <p style={{ color: '#ccc', fontSize: '1.2rem' }}>Review Profile</p>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}>View on Google Maps</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--color-primary)' }}>Verify</p>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Current counts</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--color-primary)' }}>BBB</p>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Public profile</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section style={{ background: '#fff5f2', padding: '1.5rem 0', borderBottom: '1px solid #ffdbd1' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', fontSize: '0.9rem', color: '#555' }}>
          <span><strong style={{ color: '#111' }}>Trex material options</strong></span>
          <span><strong style={{ color: '#111' }}>TimberTech material options</strong></span>
          <span><strong style={{ color: '#111' }}>BBB profile linked</strong></span>
          <span><strong style={{ color: '#111' }}>License verification encouraged</strong></span>
          <span><strong style={{ color: '#111' }}>Written warranty terms</strong></span>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <h2 style={S.h2}>Verify Reviews on Public Platforms</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', borderLeft: '4px solid var(--color-primary)', marginBottom: '3rem' }}>
            <p style={{ ...S.p, marginBottom: '0.75rem' }}>
              To avoid publishing unverifiable review excerpts, this page points homeowners to the original public profiles. Review text, dates, names, and ratings should be checked directly on Google, Yelp, and BBB.
            </p>
            <p style={{ ...S.p, marginBottom: 0 }}>
              If individual review excerpts are added later, they should be copied from the public profile or an owner-supplied evidence packet and recorded in the SEO evidence ledger.
            </p>
          </div>

          {/* Mid-page CTA */}
          <div style={{ background: 'var(--color-primary)', color: '#fff', borderRadius: 12, padding: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.75rem' }}>Ready to Plan Your Project?</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', opacity: 0.9 }}>Get a free, no-obligation estimate for your deck, porch, or outdoor living project.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/get-estimate" style={{ background: '#fff', color: 'var(--color-primary)', padding: '0.75rem 2rem', fontWeight: 700, borderRadius: 6, textDecoration: 'none', fontSize: '1.05rem' }}>Get Free Estimate</Link>
              <CallLink style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            </div>
          </div>

          {/* Platform Links */}
          <h2 style={S.h2}>Read All Reviews on Public Platforms</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
            {[
              { name: 'Google Reviews', url: GOOGLE_REVIEW_URL, rating: 'Review profile', count: 'Verify current count' },
              { name: 'Yelp', url: YELP_URL, rating: 'Review profile', count: 'Public listing' },
              { name: 'BBB', url: BBB_URL, rating: 'Public profile', count: 'Verify current status' },
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

          {/* Google review guidance */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Had a Great Experience?</h2>
          <p style={S.p}>If we built your deck, porch, or patio, we&apos;d love to hear about your experience on Google. Your review helps other Northern Virginia homeowners make confident decisions.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <Link href="/review" style={{ padding: '0.6rem 1.2rem', border: '1px solid var(--color-primary)', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-primary)', fontWeight: 700 }}>Google Review Guidance →</Link>
            <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" style={{ padding: '0.6rem 1.2rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>Google Profile →</a>
            <a href={YELP_URL} target="_blank" rel="noopener noreferrer" style={{ padding: '0.6rem 1.2rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)', fontWeight: 500 }}>View Yelp Profile →</a>
          </div>

          {/* Related Pages */}
          <h2 style={S.h2}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/about', 'About Loudoun Decks'],
              ['/about/certifications-and-licenses', 'Our Certifications & Licenses'],
              ['/showcase', 'Project Gallery'],
              ['/before-and-after', 'Before & After Deck Projects'],
              ['/houzz-deck-projects', 'Houzz Project Portfolio'],
              ['/how-to-choose-a-deck-builder-northern-virginia', 'How to Choose a Deck Builder'],
              ['/services/new-decks', 'Custom Deck Building Services'],
              ['/screened-porch-builder-northern-virginia', 'Screened Porch Builder'],
              ['/composite-deck-cost-northern-virginia', 'Deck Cost Guide'],
              ['/deck-cost-calculator', 'Deck Cost Calculator'],
              ['/deck-payment-estimator', 'Deck Payment Estimator'],
              ['/deck-permit-loudoun-county-virginia', 'Loudoun County Deck Permit Guide'],
              ['/bbb-accredited-deck-builder-virginia', 'BBB Accredited Deck Builder'],
              ['/get-estimate', 'Request a Written Estimate'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>

      <SimpleCTA title="Plan Your Deck, Porch, or Outdoor Living Project" buttonText="Get Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath="/reviews" />
      <NamedAuthor context="Northern Virginia public review profile verification" lastUpdated="2026-06-01" />
      <ContactHome />
    </>
  );
}
