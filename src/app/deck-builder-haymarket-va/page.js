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
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import { BUSINESS } from '@/lib/business';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/deck-builder-haymarket-va',
  title: 'Deck Builder in Haymarket, VA | Custom Composite Decks | LDN Decks',
  description: 'Top-rated deck builder in Haymarket, VA. 5.0★ Google. Trex decks, screened porches. Serving Dominion Valley, Piedmont, Villages of Piedmont. Free estimate.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a deck cost in Haymarket?", acceptedAnswer: { "@type": "Answer", text: "Haymarket deck projects range from $20,000-$55,000. Composite decks: $32-$58/sqft installed. Haymarket's larger lots (especially in Dominion Valley) allow for expansive outdoor living multi-level decks, outdoor kitchens, and screened porches." } },
    { "@type": "Question", name: "Do Haymarket HOAs allow deck changes?", acceptedAnswer: { "@type": "Answer", text: "Yes, but approval is required. Dominion Valley, Piedmont, and Villages of Piedmont all have active architectural review committees. We prepare and submit all HOA packages with a 100% approval rate." } },
  ],
};

export default function HaymarketDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <LocalBusinessSchema city="Haymarket" url="https://ldndecks.com/deck-builder-haymarket-va" />
      <WebPageSchema url="https://ldndecks.com/deck-builder-haymarket-va" name="Deck Builder in Haymarket, VA | Custom Composite Decks | LDN Decks" description="Top-rated deck builder in Haymarket, VA. 5.0★ Google. Trex decks, screened porches. Serving Dominion Valley, Piedmont, Villages of Piedmont. Free estimate." speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Custom Deck Builder in Haymarket, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Composite decks &amp; outdoor living for Haymarket Dominion Valley, Piedmont &amp; surrounding communities</p>
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
              src="/images/img22.jpeg"
              alt="Premium custom deck built by LDN Decks in Haymarket, Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Haymarket Large Lots, Large Decks</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Haymarket&apos;s generous lot sizes especially in Dominion Valley and the Piedmont communities give homeowners the space for truly impressive outdoor living projects. Multi-level decks, wrap-around designs, screened porches with fireplaces, and full outdoor kitchens are all possible on Haymarket properties.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Large lot designs:</strong> 500-1,000+ sqft builds with multi-level designs and multiple outdoor zones</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Golf course views:</strong> Dominion Valley properties with course views benefit from cable railings and view-maximizing designs</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>PW County permits:</strong> Fast 2-4 week processing. We handle everything.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>HOA expertise:</strong> Dominion Valley, Piedmont, Villages of Piedmont we know every community&apos;s requirements</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Featured Haymarket Project</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>$48,000 550 sqft Multi-Level Deck, Dominion Valley</h3>
            <p style={{ lineHeight: 1.7 }}>Three-level cascading deck on a golf-course-backing lot. Upper dining (250 sqft), mid lounge (200 sqft), ground-level fire pit pad (100 sqft). Trex Transcend in Havana Gold, cable railings on upper levels for unobstructed course views, 14 LED lights. PW County permit. Dominion Valley HOA approved. 4-week build.</p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Haymarket Communities</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {['Dominion Valley', 'Piedmont', 'Villages of Piedmont', 'Regency at Dominion Valley', 'Marketplace', 'Madison Crescent', 'Catharpin', 'Heathcote'].map((n) => (
              <span key={n} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.85rem', color: '#555' }}>{n}</span>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>FAQ</h2>
          {[
            { q: "Deck cost in Haymarket?", a: "$20,000-$55,000. Large lot designs possible at $32-$58/sqft." },
            { q: "HOA approval needed?", a: "Yes for Dominion Valley, Piedmont, etc. We handle all submissions 100% approval rate." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '2.5rem 0 1rem' }}>Also Serving</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {[
              ['/deck-builder-gainesville-va', 'Gainesville'],
              ['/deck-builder-bristow-va', 'Bristow'],
              ['/deck-builder-manassas-va', 'Manassas'],
              ['/near-you/prince-william-county/nokesville', 'Nokesville'],
              ['/deck-builder-centreville-va', 'Centreville'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>{text}</Link>
            ))}
          </div>
        </div>
      </article>
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (5.0★ Google) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
            <li key="/how-much-does-a-deck-cost-northern-virginia" style={{ marginBottom: '0.5rem' }}><Link href="/how-much-does-a-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>How Much Does a Deck Cost in Northern Virginia? →</Link></li>
            <li key="/services/new-decks" style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building Services →</Link></li>
        </ul>
      </section>

      <SimpleCTA title="Big Lot? Big Deck Dreams. Free Estimate." buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-haymarket-va" />
      <NamedAuthor context="Haymarket and Northern Virginia" lastUpdated="2026-05-26" />
      <ContactHome />
    </>
  );
}
