import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/deck-builder-arlington-va',
  title: '5-Star Deck Builder Arlington VA | Get a Free Quote in 24h',
  description: 'Top-rated deck builder in Arlington, VA. ★ 5.0 Google Rated. Custom composite decks & screened porches in Ballston, Clarendon & Rosslyn. Free 24h estimate.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a deck cost in Arlington, VA?", acceptedAnswer: { "@type": "Answer", text: "Arlington deck projects range from $25,000-$65,000. Composite decks: $40-$70/sqft installed. Arlington's compact urban lots require space-efficient designs. Premium materials (AZEK, Trex Transcend) are standard for Arlington's high property values." } },
    { "@type": "Question", name: "Does Arlington have special deck restrictions?", acceptedAnswer: { "@type": "Answer", text: "Arlington County has its own building department with specific setback requirements that are often tighter than Fairfax County. Some neighborhoods have historic overlay districts. We handle all Arlington County permitting and know the local requirements." } },
  ],
};

export default function ArlingtonDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Custom Deck Builder in Arlington, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Premium composite decks &amp; screened porches for Arlington homeowners</p>
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
              alt="Premium custom deck built by LDN Decks in Arlington, Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Arlington Urban Outdoor Living</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Arlington County packs some of the highest property values in Northern Virginia into its 26 square miles. From the Bungalow neighborhoods of Clarendon to the established homes of Donaldson Run and Williamsburg, every outdoor square foot matters. We design decks that make the most of Arlington&apos;s compact but valuable lots.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Urban lot expertise:</strong> Tight setbacks, small yards, close neighbors we design privacy and function into every build</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Arlington County permitting:</strong> Own building department with specific zoning codes we know them well</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>High-value properties:</strong> Median home value $750K+ means premium materials (AZEK, Trex Transcend) are the standard</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Modern aesthetic:</strong> Arlington&apos;s contemporary renovations pair well with clean-line railings, dark composite colors, and integrated lighting</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Services in Arlington</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { title: 'Composite Decks', range: '$25k–$65k', link: '/services/new-decks' },
              { title: 'Screened Porches', range: '$30k–$65k', link: '/services/porches' },
              { title: 'Deck Resurfacing', range: '$15k–$30k+', link: '/services/deck-resurfacing' },
              { title: 'Pergolas', range: '$10k–$28k', link: '/services/gazebo-pergola' },
              { title: 'Patios', range: '$8k–$22k', link: '/services/patios' },
              { title: 'Fencing', range: '$5k–$14k', link: '/services/fence' },
            ].map((item) => (
              <Link key={item.title} href={item.link} style={{ display: 'block', background: '#f9f9f9', borderRadius: 8, padding: '1rem', textDecoration: 'none', color: 'inherit' }}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.25rem', fontSize: '0.95rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>{item.range}</p>
              </Link>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Featured Arlington Project</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>$52,000 380 sqft Deck + Screened Porch, Donaldson Run</h3>
            <p style={{ lineHeight: 1.7 }}>Two-level build on a sloped lot backing to Donaldson Run park. Upper dining deck (220 sqft) in TimberTech AZEK Coastline connected to a lower screened porch (160 sqft) with retractable EZE-Breeze panels. Cable railings on the upper level for tree-canopy views. Privacy lattice on the neighbor-facing side. Arlington County building permit. 4-week build.</p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Arlington Neighborhoods</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {['Ballston', 'Clarendon', 'Rosslyn', 'Shirlington', 'Donaldson Run', 'Williamsburg', 'Cherrydale', 'Lyon Village', 'Ashton Heights', 'Columbia Heights', 'Pentagon City', 'Crystal City', 'Bluemont', 'Fairlington'].map((n) => (
              <span key={n} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.85rem', color: '#555' }}>{n}</span>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>FAQ</h2>
          {[
            { q: "Deck cost in Arlington?", a: "$25,000-$65,000. Composite: $40-$70/sqft. Premium materials standard for Arlington property values." },
            { q: "Special Arlington restrictions?", a: "Arlington County has own building dept with specific setbacks often tighter than Fairfax. Some historic overlay areas. We handle all permitting." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '2.5rem 0 1rem' }}>Also Serving</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {[
              ['/deck-builder-falls-church-va', 'Falls Church'],
              ['/deck-builder-mclean-va', 'McLean'],
              ['/deck-builder-alexandria-va', 'Alexandria'],
              ['/deck-builder-tysons-va', 'Tysons'],
              ['/deck-builder-fairfax-va', 'Fairfax'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>{text}</Link>
            ))}
          </div>
        </div>
      </article>
      <SimpleCTA title="Premium Outdoor Living for Arlington" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-arlington-va" />
      <ContactHome />
    </>
  );
}
