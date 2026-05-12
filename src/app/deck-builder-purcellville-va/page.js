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
  path: '/deck-builder-purcellville-va',
  title: 'Deck Builder in Purcellville, VA | Custom Composite Decks | LDN Decks',
  description: 'Custom deck builder serving Purcellville & western Loudoun. 5.0★ Google. Trex decks, screened porches for farmettes & estate homes. Free estimate.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a deck cost in Purcellville?", acceptedAnswer: { "@type": "Answer", text: "Purcellville deck projects range from $20,000-$55,000. Composite decks: $32-$58/sqft installed. Western Loudoun lots tend to be larger, allowing for expansive multi-level builds, wrap-around decks, and outdoor kitchens not possible on suburban lots." } },
    { "@type": "Question", name: "Do western Loudoun properties need permits?", acceptedAnswer: { "@type": "Answer", text: "Yes all Loudoun County permitting rules apply. The Town of Purcellville also has its own building department for properties within town limits. We determine jurisdiction and handle everything. Loudoun permits: 10-15 business days." } },
  ],
};

export default function PurcellvilleDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Custom Deck Builder in Purcellville, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Decks &amp; outdoor living for western Loudoun farmettes, estates &amp; mountain views</p>
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
              src="/images/img13.jpeg"
              alt="Premium custom deck built by LDN Decks in Purcellville, Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Purcellville Country Living, Premium Decking</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Purcellville and western Loudoun County offer something rare in Northern Virginia: space. Multi-acre farmettes, estate properties, and mountain-view lots give homeowners the room to build truly impressive outdoor living spaces wrap-around decks, expansive screened porches, outdoor kitchens, and multi-level designs that suburban lots can&apos;t accommodate.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Estate-scale builds:</strong> 1-10+ acre lots allow 600-1,200+ sqft outdoor living projects</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Mountain views:</strong> Cable railings and elevated designs to maximize Blue Ridge views</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Rural character:</strong> Natural wood tones (Trex Havana Gold, Spiced Rum) complement western Loudoun&apos;s rustic aesthetic</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Often no HOA:</strong> Many western Loudoun properties have no HOA more design freedom</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Loudoun County permits:</strong> Fastest in NoVA 10-15 business days. We handle everything.</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Featured Purcellville Project</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>$52,000 650 sqft Wrap-Around Deck, Short Hill Mountain</h3>
            <p style={{ lineHeight: 1.7 }}>Expansive wrap-around deck on a 5-acre property with Blue Ridge mountain views. Three-sided design wrapping the farmhouse, Trex Transcend in Havana Gold, cable railings on the view side (west-facing), standard composite railings on approach sides. 4 separate access points from house. No HOA. Loudoun County permit. 4.5-week build.</p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Western Loudoun Areas We Serve</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {['Purcellville', 'Round Hill', 'Hamilton', 'Lovettsville', 'Hillsboro', 'Waterford', 'Between the Hills', 'Lincoln', 'Lucketts', 'Bluemont'].map((n) => (
              <span key={n} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.85rem', color: '#555' }}>{n}</span>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>FAQ</h2>
          {[
            { q: "Cost in Purcellville?", a: "$20,000-$55,000+. Large lots enable bigger builds at $32-$58/sqft." },
            { q: "Permits in western Loudoun?", a: "Yes Loudoun County (10-15 business days). Town of Purcellville has own department for in-town properties. We handle both." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '2.5rem 0 1rem' }}>Also Serving</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {[
              ['/deck-builder-leesburg-va', 'Leesburg'],
              ['/near-you/loudoun-county/round-hill', 'Round Hill'],
              ['/near-you/loudoun-county/hamilton', 'Hamilton'],
              ['/near-you/loudoun-county/lovettsville', 'Lovettsville'],
              ['/near-you/loudoun-county/waterford', 'Waterford'],
              ['/near-you/loudoun-county/middleburg', 'Middleburg'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>{text}</Link>
            ))}
          </div>
        </div>
      </article>
      <SimpleCTA title="Big Property? Big Deck Dreams. Free Estimate." buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-purcellville-va" />
      <ContactHome />
    </>
  );
}
