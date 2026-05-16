import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import SimpleCTA from '@/components/SimpleCTA';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import RatingBadge from '@/components/RatingBadge';
import { buildMetadata } from '@/lib/seo';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/deck-builder-sterling-va',
  title: 'Deck Builder in Sterling, VA | Trex | Loudoun Decks',
  description: 'Top-rated deck builder in Sterling, VA. 5.0★ Google. Trex & TimberTech decks, screened porches. Loudoun County permits & HOA handled. Free estimate. (571) 655-7207.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a deck cost in Sterling, VA?", acceptedAnswer: { "@type": "Answer", text: "Sterling deck projects range from $20,000-$50,000. Composite decks average $35-$60/sqft installed. Sterling has a mix of established neighborhoods (Sugarland Run, Countryside) and newer communities, with projects from 200 sqft townhome decks to 500+ sqft single-family builds." } },
    { "@type": "Question", name: "Do I need a permit for a deck in Sterling?", acceptedAnswer: { "@type": "Answer", text: "Yes Sterling is in Loudoun County. Building permits required with plan review typically 10-15 business days the fastest in Northern Virginia. We handle all submissions." } },
  ],
};

export default function SterlingDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <LocalBusinessSchema city="Sterling" url="https://ldndecks.com/deck-builder-sterling-va" />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Custom Deck Builder in Sterling, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Composite decks, screened porches &amp; outdoor living for Sterling homeowners</p>
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
              src="/images/img33.jpeg"
              alt="Premium custom deck built by LDN Decks in Sterling, Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Sterling Upgrading Loudoun&apos;s Mature Neighborhoods</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Sterling is one of our most active service areas close to our headquarters, with a strong demand for deck upgrades in established communities like Sugarland Run, Countryside, Cascades, and Lowes Island. Many Sterling homeowners are replacing 15-20 year old wood decks with modern composite and we&apos;re the most-requested builder for these transformations.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Loudoun County fastest permits in NoVA:</strong> 10-15 business days vs 3-6 weeks in Fairfax</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Deck replacement specialists:</strong> Many Sterling decks built 2005-2010 are now due for replacement</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>HOA expertise:</strong> Sugarland Run, Countryside, Cascades, Potomac Falls we know every HOA&apos;s requirements</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>10 minutes from HQ:</strong> Fastest response times and site visits</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Services in Sterling</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { title: 'Composite Decks', range: '$20k–$50k', link: '/services/new-decks' },
              { title: 'Deck Resurfacing', range: '$15k–$30k+', link: '/services/deck-resurfacing' },
              { title: 'Screened Porches', range: '$22k–$55k', link: '/services/porches' },
              { title: 'Pergolas', range: '$8k–$25k', link: '/services/gazebo-pergola' },
              { title: 'Fencing', range: '$4k–$12k', link: '/services/fence' },
              { title: 'Deck Staining', range: '$600–$2k', link: '/deck-staining-northern-virginia' },
            ].map((item) => (
              <Link key={item.title} href={item.link} style={{ display: 'block', background: '#f9f9f9', borderRadius: 8, padding: '1rem', textDecoration: 'none', color: 'inherit' }}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.25rem', fontSize: '0.95rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>{item.range}</p>
              </Link>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Featured Sterling Project</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>$34,000 380 sqft Screened Porch Conversion, Sugarland Run</h3>
            <p style={{ lineHeight: 1.7 }}>Converted an existing open wood deck into a screened porch with EZE-Breeze windows, composite floor overlay (Trex Transcend), beadboard ceiling, 2 ceiling fans, and recessed lighting. The existing frame was in good condition saved $12k vs full rebuild. Loudoun County permit. Sugarland Run HOA approved. 3-week build.</p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Sterling Neighborhoods</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {['Sugarland Run', 'Countryside', 'Cascades', 'Lowes Island', 'Potomac Falls', 'Great Falls Chase', 'Sterling Park', 'Algonkian', 'Countryside Estates', 'Rivermere'].map((n) => (
              <span key={n} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.85rem', color: '#555' }}>{n}</span>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>FAQ</h2>
          {[
            { q: "Deck cost in Sterling?", a: "$20,000-$50,000. Composite: $35-$60/sqft installed." },
            { q: "Permit timeline?", a: "Loudoun County: 10-15 business days fastest in NoVA. We handle everything." },
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
              ['/deck-builder-leesburg-va', 'Leesburg'],
              ['/deck-builder-herndon-va', 'Herndon'],
              ['/deck-builder-reston-va', 'Reston'],
              ['/near-you/loudoun-county/broadlands', 'Broadlands'],
              ['/near-you/loudoun-county/potomac-falls', 'Potomac Falls'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>{text}</Link>
            ))}
          </div>
        </div>
      </article>
      <section style={{ padding: '2rem 1.5rem' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><GoogleMapEmbed city="Sterling" /></div></section>
      <SimpleCTA title="Get Your Sterling Deck Quote" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-sterling-va" />
      <ContactHome />
    </>
  );
}
