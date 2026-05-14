import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import RatingBadge from '@/components/RatingBadge';
import { buildMetadata } from '@/lib/seo';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/deck-builder-springfield-va',
  title: 'Deck Builder in Springfield, VA | Custom Composite Decks | LDN Decks',
  description: 'Top-rated deck builder in Springfield, VA. 5.0★ Google. Trex & composite decks, screened porches. West Springfield, Kingstowne, Franconia. Free estimate.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a deck cost in Springfield, VA?", acceptedAnswer: { "@type": "Answer", text: "Springfield deck projects range from $20,000-$50,000. Composite decks: $35-$58/sqft installed. Springfield's established homes (West Springfield, Kings Park, Kingstowne) often need 20-30 year old decks replaced." } },
    { "@type": "Question", name: "Do I need a permit in Springfield?", acceptedAnswer: { "@type": "Answer", text: "Yes Springfield is in Fairfax County. Standard building permits required, 3-6 weeks for plan review. We handle all submissions and inspections." } },
  ],
};

export default function SpringfieldDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Custom Deck Builder in Springfield, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Composite decks &amp; screened porches for Springfield, West Springfield &amp; Kingstowne</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Estimate</Link>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#aaa' }}>★★★★★ 5.0 on Google · 41 reviews · Licensed &amp; Insured · 2-Year Warranty</p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img26.jpeg"
              alt="Premium custom deck built by LDN Decks in Springfield, Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Springfield Established Comfort, Modern Upgrades</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Springfield and West Springfield neighborhoods have some of Fairfax County&apos;s most established homes many with original decks from the 1980s and 1990s that are well overdue for replacement. From the townhomes of Kingstowne to the single-family homes of West Springfield, we deliver modern outdoor living upgrades.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Deck replacement specialists:</strong> Springfield&apos;s 30-40 year old neighborhoods have massive replacement demand</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Kingstowne expertise:</strong> Townhome decks, compact designs, HOA-managed communities</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>West Springfield:</strong> Larger single-family lots with room for multi-level designs and screened porches</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Good value positioning:</strong> Springfield offers solid property values with excellent deck ROI</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Featured Springfield Project</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>$32,000 350 sqft Deck + Pergola, West Springfield</h3>
            <p style={{ lineHeight: 1.7 }}>Replaced a 28-year-old failing PT wood deck with Trex Transcend (Spiced Rum). Added a 10x10 attached pergola for partial shade over the dining area. Aluminum railings, 8 stair lights. Fairfax County permit. West Springfield Civic Association notified. 3-week build.</p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Springfield Neighborhoods</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {['West Springfield', 'Kingstowne', 'Kings Park', 'Franconia', 'Saratoga', 'Newington', 'North Springfield', 'Backlick', 'Orange Hunt', 'Huntsman', 'Rolling Forest', 'Fairfax Station'].map((n) => (
              <span key={n} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.85rem', color: '#555' }}>{n}</span>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>FAQ</h2>
          {[
            { q: "Cost in Springfield?", a: "$20,000-$50,000. Composite: $35-$58/sqft. Deck replacement is our #1 service here." },
            { q: "Permit needed?", a: "Yes Fairfax County. 3-6 weeks plan review. We handle everything." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '2.5rem 0 1rem' }}>Also Serving</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {[
              ['/deck-builder-burke-va', 'Burke'],
              ['/deck-builder-fairfax-va', 'Fairfax'],
              ['/deck-builder-alexandria-va', 'Alexandria'],
              ['/near-you/fairfax-county/annandale', 'Annandale'],
              ['/near-you/fairfax-county/lorton', 'Lorton'],
              ['/deck-builder-centreville-va', 'Centreville'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>{text}</Link>
            ))}
          </div>
        </div>
      </article>
      <SimpleCTA title="Upgrade Your Springfield Deck" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-springfield-va" />
      <ContactHome />
    </>
  );
}
