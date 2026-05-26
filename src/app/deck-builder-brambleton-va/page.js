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
  path: '/deck-builder-brambleton-va',
  title: 'Deck Builder in Brambleton, VA | Custom Composite Decks | LDN Decks',
  description: 'Top-rated deck builder serving Brambleton, VA. 5.0★ Google. Trex decks replacing builder-grade PT wood. HOA handled. Loudoun County permits. Free estimate.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a deck cost in Brambleton?", acceptedAnswer: { "@type": "Answer", text: "Brambleton deck projects range from $20,000-$48,000. Composite decks: $35-$58/sqft installed. Most Brambleton projects involve upgrading builder-grade PT wood decks to composite resurfacing can save 40-60% vs full rebuild if the frame is solid." } },
    { "@type": "Question", name: "Does the Brambleton HOA allow composite decks?", acceptedAnswer: { "@type": "Answer", text: "Yes. Brambleton HOA allows composite decking and actually prefers it over wood for consistent community appearance. Architectural review required we prepare and submit the full package. Typical approval: 2-3 weeks." } },
  ],
};

export default function BrambletonDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <LocalBusinessSchema city="Brambleton" url="https://ldndecks.com/deck-builder-brambleton-va" />
      <WebPageSchema url="https://ldndecks.com/deck-builder-brambleton-va" name="Deck Builder in Brambleton, VA | Custom Composite Decks | LDN Decks" description="Top-rated deck builder serving Brambleton, VA. 5.0★ Google. Trex decks replacing builder-grade PT wood. HOA handled. Loudoun County permits. Free estimate." speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Custom Deck Builder in Brambleton, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Upgrade your builder-grade deck to premium composite Brambleton&apos;s go-to deck builder</p>
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
              alt="Premium custom deck built by LDN Decks in Brambleton, Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Brambleton Time to Upgrade Your Builder Deck</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Brambleton is one of Loudoun County&apos;s largest master-planned communities &mdash; anchored by Brambleton Town Center, the Brambleton Library and Hal &amp; Berni Hanson Regional Park &mdash; and many original homes (built 2007-2015) now have builder-grade pressure-treated decks that are showing their age: graying, splintering, and requiring annual staining. We specialize in transforming these into modern, maintenance-free composite decks designed for Brambleton&apos;s typically narrow, deep lots, where a stepped multi-level layout often delivers more usable space than a single wide platform.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Builder-grade upgrade experts:</strong> 80% of our Brambleton projects involve replacing or resurfacing original PT wood decks</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Brambleton HOA relationships:</strong> We know the ARC requirements, preferred materials, and submission process</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Resurfacing option:</strong> If your frame is solid (we inspect), resurfacing saves 40-60% vs full rebuild</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Loudoun County permits:</strong> Fastest in NoVA (10-15 business days). We handle everything.</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Featured Brambleton Project</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>$22,000 300 sqft Deck Resurfacing, Brambleton Town Center</h3>
            <p style={{ lineHeight: 1.7 }}>Resurfaced a 10-year-old builder-grade PT deck with Trex Transcend (Island Mist). Frame inspected and confirmed solid saved $14k vs full rebuild. New Trex Select railings in white, 6 stair lights. Brambleton HOA approved in 2 weeks. Loudoun County permit. 1.5-week build. Zero maintenance going forward.</p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Brambleton Sections We Serve</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {['Brambleton Town Center', 'North Brambleton', 'The Promenade', 'The Villages', 'Birchwood', 'Summerfield', 'Ryan Park', 'Wintergreen', 'Reed\'s Landing', 'Claiborne Parkway'].map((n) => (
              <span key={n} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.85rem', color: '#555' }}>{n}</span>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>FAQ</h2>
          {[
            { q: "Deck cost in Brambleton?", a: "New build: $20k-$48k. Resurfacing: $10k-$22k (saves 40-60% if frame is solid). Composite: $35-$58/sqft." },
            { q: "Brambleton HOA allow composite?", a: "Yes they prefer it. We know the ARC process and handle submissions. Typical approval: 2-3 weeks." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '2.5rem 0 1rem' }}>Also Serving</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {[
              ['/deck-builder-ashburn-va', 'Ashburn'],
              ['/deck-builder-south-riding-va', 'South Riding'],
              ['/near-you/loudoun-county/stone-ridge', 'Stone Ridge'],
              ['/deck-builder-chantilly-va', 'Chantilly'],
              ['/deck-builder-centreville-va', 'Centreville'],
              ['/deck-builder-sterling-va', 'Sterling'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>{text}</Link>
            ))}
          </div>
        </div>
      </article>
      <SimpleCTA title="Upgrade Your Brambleton Deck" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-brambleton-va" />
      <NamedAuthor context="Brambleton and Northern Virginia" lastUpdated="2026-05-26" />
      <ContactHome />
    </>
  );
}
