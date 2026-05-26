import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import RatingBadge from '@/components/RatingBadge';
import { buildMetadata } from '@/lib/seo';
import { BUSINESS } from '@/lib/business';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/deck-builder-lorton-va',
  title: 'Deck Builder in Lorton, VA | Custom Composite Decks | LDN Decks',
  description: 'Top-rated deck builder in Lorton, VA. 5.0★ Google. Trex & composite decks, screened porches. Laurel Hill, Crosspointe, Newington. Free estimate. (571) 655-7207.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a deck cost in Lorton, VA?", acceptedAnswer: { "@type": "Answer", text: "Lorton deck projects range from $20,000-$50,000. Composite decks: $33-$58/sqft installed. Lorton's newer communities (Laurel Hill, Crosspointe) have builder-grade decks ready for composite upgrade. Established areas near Mason Neck often need full replacement." } },
    { "@type": "Question", name: "Do I need a permit in Lorton?", acceptedAnswer: { "@type": "Answer", text: "Yes Lorton is in Fairfax County. Building permits required. Some Lorton properties near Mason Neck are in environmental protection zones requiring additional review. We handle all permitting." } },
  ],
};

export default function LortonDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <LocalBusinessSchema city="Lorton" url="https://ldndecks.com/deck-builder-lorton-va" />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Custom Deck Builder in Lorton, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Composite decks &amp; outdoor living for Lorton Laurel Hill, Crosspointe &amp; Mason Neck area</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Estimate</Link>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#aaa' }}>★★★★★ 5.0 on Google · {BUSINESS.aggregateRating.reviewCount} reviews · Licensed &amp; Insured · 2-Year Warranty</p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img33.jpeg"
              alt="Premium custom deck built by LDN Decks in Lorton, Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Lorton Riverside Luxury &amp; Established Comfort</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Lorton combines newer premium communities like Laurel Hill and Crosspointe with established neighborhoods near the Occoquan River and Mason Neck. The diversity of properties means everything from builder-grade upgrades on 10-year-old homes to complete outdoor living builds on larger, wooded lots.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Laurel Hill expertise:</strong> Builder-grade PT decks ready for composite upgrade</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Crosspointe &amp; Newington:</strong> Established homes needing full deck replacement</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Environmental zones:</strong> Properties near Mason Neck may have additional RPA/EPC requirements we navigate these</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Fairfax County permits:</strong> Standard process, we handle everything</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Featured Lorton Project</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>$38,000 420 sqft Multi-Level Deck, Laurel Hill</h3>
            <p style={{ lineHeight: 1.7 }}>Two-level deck on a sloped Laurel Hill lot. Upper dining (260 sqft) connected to lower lounge (160 sqft) with wide stairs. Trex Transcend in Havana Gold, aluminum railings, 10 LED stair lights. Laurel Hill HOA approved. Fairfax County permit. 3-week build.</p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Lorton Neighborhoods</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {['Laurel Hill', 'Crosspointe', 'Newington', 'South Run', 'Gunston', 'Mason Neck', 'Lorton Station', 'Workhouse Arts', 'Pohick Creek'].map((n) => (
              <span key={n} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.85rem', color: '#555' }}>{n}</span>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>FAQ</h2>
          {[
            { q: "Cost in Lorton?", a: "$20,000-$50,000. Composite: $33-$58/sqft. Resurfacing available for solid frames." },
            { q: "Permit?", a: "Yes Fairfax County. Some properties near Mason Neck need environmental review. We handle it all." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '2.5rem 0 1rem' }}>Also Serving</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {[
              ['/deck-builder-springfield-va', 'Springfield'],
              ['/deck-builder-burke-va', 'Burke'],
              ['/deck-builder-woodbridge-va', 'Woodbridge'],
              ['/deck-builder-alexandria-va', 'Alexandria'],
              ['/deck-builder-fairfax-va', 'Fairfax'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>{text}</Link>
            ))}
          </div>
        </div>
      </article>
      <SimpleCTA title="Get Your Lorton Deck Quote" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-lorton-va" />
      <ContactHome />
    </>
  );
}
