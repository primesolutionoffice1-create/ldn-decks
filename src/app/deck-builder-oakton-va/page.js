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
  path: '/deck-builder-oakton-va',
  title: 'Deck Builder in Oakton, VA | Premium Composite Decks | LDN Decks',
  description: 'Custom deck builder in Oakton, VA. 5.0★ Google. Trex Transcend & AZEK decks for Oakton estate homes. Screened porches, outdoor kitchens. Free estimate.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a deck cost in Oakton, VA?", acceptedAnswer: { "@type": "Answer", text: "Oakton deck projects range from $30,000-$70,000+. Oakton homes tend toward premium builds with Trex Transcend or TimberTech AZEK, multi-level designs, and integrated features. Composite decks: $40-$65/sqft installed." } },
    { "@type": "Question", name: "Do I need a permit in Oakton?", acceptedAnswer: { "@type": "Answer", text: "Yes Oakton is in Fairfax County. Building permits required, 3-6 weeks for plan review. Many Oakton lots have unique setback or tree-save requirements. We handle all permitting." } },
  ],
};

export default function OaktonDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <LocalBusinessSchema city="Oakton" url="https://ldndecks.com/deck-builder-oakton-va" />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Premium Deck Builder in Oakton, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Custom composite decks, screened porches &amp; outdoor kitchens for Oakton homes</p>
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
              src="/images/img37.jpeg"
              alt="Premium custom deck built by LDN Decks in Oakton, Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Oakton Luxury Outdoor Living in the Heart of Fairfax</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Oakton is known for its wooded lots, established homes, and premium property values. Deck projects here tend toward larger, more architecturally significant designs multi-level builds that work with the natural terrain, screened porches nestled among mature trees, and outdoor kitchens designed for Oakton-style entertaining.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Tree-preservation expertise:</strong> Oakton lots often have mature trees near the build zone. We design around root systems and canopy to preserve your landscape.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Sloped lot specialists:</strong> Many Oakton properties have grade changes that call for multi-level or cascading deck designs</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Premium materials only:</strong> Trex Transcend, TimberTech AZEK, cable railings materials that match Oakton&apos;s upscale aesthetic</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Fairfax County permitting:</strong> We handle all setback, tree-save, and RPA considerations for Oakton lots</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Featured Oakton Project</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>$56,000 500 sqft Deck + Screened Porch, Fox Den Estates</h3>
            <p style={{ lineHeight: 1.7 }}>Open Trex Transcend deck (300 sqft) in Tiki Torch connected to a screened porch (200 sqft) with retractable EZE-Breeze panels, tongue-and-groove pine ceiling, 3 ceiling fans, and recessed lighting. Cable railings on the open section for views through the mature tree canopy. Fairfax County permit with tree-save waiver. 4.5-week build.</p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>FAQ</h2>
          {[
            { q: "Deck cost in Oakton?", a: "$30,000-$70,000+. Premium builds with Trex Transcend or AZEK. $40-$65/sqft installed." },
            { q: "Permit needed?", a: "Yes Fairfax County. 3-6 weeks. Tree-save and setback considerations common on Oakton lots. We handle everything." },
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
              ['/deck-builder-great-falls-va', 'Great Falls'],
              ['/deck-builder-fairfax-va', 'Fairfax'],
              ['/deck-builder-centreville-va', 'Centreville'],
              ['/deck-builder-chantilly-va', 'Chantilly'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>{text}</Link>
            ))}
          </div>
        </div>
      </article>
      <SimpleCTA title="Get Your Oakton Deck Quote" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-oakton-va" />
      <ContactHome />
    </>
  );
}
