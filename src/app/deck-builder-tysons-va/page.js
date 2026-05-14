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
  path: '/deck-builder-tysons-va',
  title: 'Deck Builder in Tysons, VA | Modern Composite Decks | LDN Decks',
  description: 'Custom deck builder in Tysons, VA. 5.0★ Google. Modern composite decks & rooftop terraces for Tysons townhomes and condos. Free estimate. (571) 655-7207.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Can you build a deck on a Tysons townhome?", acceptedAnswer: { "@type": "Answer", text: "Yes. Many newer Tysons townhomes have small rear yards or rooftop terraces that are perfect for compact composite decks (150-300 sqft). We design space-efficient outdoor living that maximizes smaller Tysons lots." } },
    { "@type": "Question", name: "How much does a deck cost in Tysons?", acceptedAnswer: { "@type": "Answer", text: "Tysons deck projects range from $18,000-$50,000. Compact townhome decks: $18k-$30k. Single-family with screened porch: $35k-$50k. Composite: $40-$65/sqft installed." } },
  ],
};

export default function TysonsDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Modern Deck Builder in Tysons, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Compact, modern composite decks &amp; terraces for Tysons townhomes &amp; single-family homes</p>
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
              src="/images/img35.jpeg"
              alt="Premium custom deck built by LDN Decks in Tysons, Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Tysons Modern Living in Northern Virginia’s Hub</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Tysons has evolved from a suburban office park into a walkable urban center with luxury townhomes, mixed-use developments, and established single-family neighborhoods. Deck projects here range from sleek, compact rooftop terraces on new construction to full-size outdoor living expansions on established properties near Tysons Corner.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Modern aesthetic:</strong> Clean lines, aluminum or cable railings, dark composite colors (Lava Rock, Dark Hickory) matching Tysons&apos; contemporary architecture</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Townhome specialists:</strong> Compact 150-300 sqft builds that maximize small rear yards and rooftop spaces</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>High-rise adjacent:</strong> We work with HOAs and management companies in Tysons&apos; newer communities</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Fairfax County permitting:</strong> <Link href="/deck-permit-fairfax-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Full permit guide</Link></li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Featured Tysons Project</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>$28,000 220 sqft Modern Townhome Deck, The Boro</h3>
            <p style={{ lineHeight: 1.7 }}>Compact but stunning: TimberTech AZEK deck in Coastline (light beach tone) with black aluminum cable railings, flush-mount LED deck lights, and integrated planter boxes. Designed for a rear-facing townhome with limited space. Fairfax County permit. HOA managed by FirstService approved in 2 weeks. 2-week build.</p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>FAQ</h2>
          {[
            { q: "Can you build on a Tysons townhome?", a: "Yes. Compact 150-300 sqft designs for rear yards and rooftop terraces. We maximize small spaces with modern design." },
            { q: "Cost in Tysons?", a: "Townhomes: $18k-$30k. Single-family: $30k-$50k. Composite: $40-$65/sqft." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '2.5rem 0 1rem' }}>Also Serving</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {[
              ['/deck-builder-vienna-va', 'Vienna'],
              ['/deck-builder-mclean-va', 'McLean'],
              ['/deck-builder-falls-church-va', 'Falls Church'],
              ['/deck-builder-fairfax-va', 'Fairfax'],
              ['/deck-builder-oakton-va', 'Oakton'],
              ['/near-you/fairfax-county/reston', 'Reston'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>{text}</Link>
            ))}
          </div>
        </div>
      </article>
      <SimpleCTA title="Modern Deck for Modern Living" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-tysons-va" />
      <ContactHome />
    </>
  );
}
