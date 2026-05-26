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
  path: '/deck-builder-burke-va',
  title: 'Deck Builder in Burke, VA | Custom Composite Decks | LDN Decks',
  description: 'Top-rated deck builder in Burke, VA. 5.0★ Google. Custom Trex decks replacing aging wood. Burke Centre HOA handled. Fairfax County permits. Free estimate.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a deck cost in Burke, VA?", acceptedAnswer: { "@type": "Answer", text: "Burke deck projects range from $22,000-$52,000. Composite decks: $35-$60/sqft installed. Many Burke homes (1980s-2000s) have original wood decks ready for composite replacement. Burke Centre is our most active Burke service area." } },
    { "@type": "Question", name: "Does Burke Centre HOA allow composite?", acceptedAnswer: { "@type": "Answer", text: "Yes. Burke Centre Conservancy allows composite decking and has specific architectural guidelines. We know their requirements and handle all ARC submissions with 100% approval rate." } },
  ],
};

export default function BurkeDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <LocalBusinessSchema city="Burke" url="https://ldndecks.com/deck-builder-burke-va" />
      <WebPageSchema url="https://ldndecks.com/deck-builder-burke-va" name="Deck Builder in Burke, VA | Custom Composite Decks | LDN Decks" description="Top-rated deck builder in Burke, VA. 5.0★ Google. Custom Trex decks replacing aging wood. Burke Centre HOA handled. Fairfax County permits. Free estimate." speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Custom Deck Builder in Burke, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Replacing aging wood decks with modern composite Burke Centre &amp; surrounding neighborhoods</p>
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
              src="/images/img32.jpeg"
              alt="Premium custom deck built by LDN Decks in Burke, Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Burke Timeless Wood and Modern Composite</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Burke&apos;s established neighborhoods (many built 1980s-2000s) have some of the oldest wood decks in Fairfax County. Many are 20-30+ years old and well past their lifespan. We specialize in replacing these aging structures with modern composite decks that will last another 25-50 years with zero maintenance.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Deck replacement experts:</strong> Hundreds of Burke decks are due for replacement we do this daily</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Burke Centre Conservancy:</strong> We know their architectural guidelines inside and out</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Wooded lots:</strong> Burke has heavy tree canopy we design around roots and shade patterns</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Fairfax County permitting:</strong> <Link href="/deck-permit-fairfax-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Full permit guide</Link></li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Featured Burke Project</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>$35,000 400 sqft Full Deck Replacement, Burke Centre</h3>
            <p style={{ lineHeight: 1.7 }}>Replaced a 25-year-old rotting wood deck (frame beyond saving). New footings, new PT frame, Trex Transcend decking in Foggy Wharf, Trex Signature railings, 10 LED lights. Burke Centre Conservancy ARC approved. Fairfax County permit. 3-week build. Homeowner eliminated 25 years of annual staining.</p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Burke Neighborhoods</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {['Burke Centre', 'Burke Lake', 'Cardinal Forest', 'Cherry Run', 'Keene Mill', 'Lake Braddock', 'Old Keene Mill', 'Pohick', 'Rolling Valley', 'Signal Hill', 'Terra Grande', 'Woodlands'].map((n) => (
              <span key={n} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.85rem', color: '#555' }}>{n}</span>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>FAQ</h2>
          {[
            { q: "Cost in Burke?", a: "$22,000-$52,000. Composite: $35-$60/sqft. Deck replacement is our specialty here." },
            { q: "Burke Centre HOA?", a: "Allows composite. We know their ARC requirements and handle everything. 100% approval rate." },
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
              ['/deck-builder-fairfax-va', 'Fairfax'],
              ['/near-you/fairfax-county/annandale', 'Annandale'],
              ['/deck-builder-centreville-va', 'Centreville'],
              ['/deck-builder-lorton-va', 'Lorton'],
              ['/deck-builder-alexandria-va', 'Alexandria'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>{text}</Link>
            ))}
          </div>
        </div>
      </article>
      <SimpleCTA title="Replace Your Aging Burke Deck" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-burke-va" />
      <NamedAuthor context="Burke and Northern Virginia" lastUpdated="2026-05-26" />
      <ContactHome />
    </>
  );
}
