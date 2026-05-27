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
  path: '/deck-builder-bristow-va',
  title: 'Deck Builder in Bristow, VA | Custom Composite Decks | LDN Decks',
  description: 'Top-rated deck builder in Bristow, VA. 5.0★ Google. Trex decks, screened porches. Serving Bristow Manor, Braemar, Linton Hall. PW County. Free estimate.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a deck cost in Bristow, VA?", acceptedAnswer: { "@type": "Answer", text: "Bristow deck projects range from $18,000-$45,000. Composite decks: $30-$52/sqft installed. Bristow's newer communities (Bristow Manor, Braemar, Linton Hall) have builder-grade decks perfect for composite upgrade or resurfacing." } },
    { "@type": "Question", name: "Do I need a permit in Bristow?", acceptedAnswer: { "@type": "Answer", text: "Yes Bristow is in Prince William County. Building permits required, typically 2-4 weeks for plan review. We handle all permitting and inspections." } },
  ],
};

export default function BristowDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <LocalBusinessSchema city="Bristow" url="https://ldndecks.com/deck-builder-bristow-va" />
      <WebPageSchema url="https://ldndecks.com/deck-builder-bristow-va" name="Deck Builder in Bristow, VA | Custom Composite Decks | LDN Decks" description="Top-rated deck builder in Bristow, VA. 5.0★ Google. Trex decks, screened porches. Serving Bristow Manor, Braemar, Linton Hall. PW County. Free estimate." speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Custom Deck Builder in Bristow, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Composite decks &amp; outdoor living for Bristow Bristow Manor, Braemar, Linton Hall</p>
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
              src="/images/img26.jpeg"
              alt="Premium custom deck built by LDN Decks in Bristow, Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Bristow Growing Spaces for Growing Families</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Bristow&apos;s communities (built mostly 2005-2018) are entering the deck upgrade cycle. Builder-grade PT wood decks installed 7-15 years ago are now graying, splintering, and requiring annual staining. We transform these into modern composite decks often resurfacing the existing frame to save 40-60%.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Resurfacing specialists:</strong> Many Bristow frames (7-15 years old) are structurally sound save big by keeping the frame</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Community expertise:</strong> Bristow Manor, Braemar, Linton Hall, Victory Lakes we know every HOA</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>PW County permits:</strong> Fast 2-4 weeks. We handle everything.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Great value:</strong> Prince William pricing = 10-20% better than Fairfax/Loudoun for same materials</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Featured Bristow Project</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>$21,000 300 sqft Deck Resurfacing, Braemar</h3>
            <p style={{ lineHeight: 1.7 }}>Resurfaced a 9-year-old builder PT deck with Trex Enhance in Clam Shell. Frame inspected and solid. New aluminum railings, 6 stair lights. Braemar HOA approved in 10 days. PW County permit. 1.5-week build. Client now has a 25-year warranty deck for less than the cost of a new wood deck.</p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Bristow Communities</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {['Bristow Manor', 'Braemar', 'Linton Hall', 'Victory Lakes', 'Cabells Mill', 'Kingsbrooke', 'Jiffy Lube Live area', 'Piney Branch'].map((n) => (
              <span key={n} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.85rem', color: '#555' }}>{n}</span>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>FAQ</h2>
          {[
            { q: "Cost in Bristow?", a: "New: $18k-$45k. Resurfacing: $10k-$21k. Composite: $30-$52/sqft. PW County value pricing." },
            { q: "Permit?", a: "Yes Prince William County. 2-4 weeks. We handle everything." },
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
              ['/deck-builder-manassas-va', 'Manassas'],
              ['/deck-builder-haymarket-va', 'Haymarket'],
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

      <SimpleCTA title="Upgrade Your Bristow Deck" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-bristow-va" />
      <NamedAuthor context="Bristow and Northern Virginia" lastUpdated="2026-05-26" />
      <ContactHome />
    </>
  );
}
