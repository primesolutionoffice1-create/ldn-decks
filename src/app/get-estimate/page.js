import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import { buildMetadata } from '@/lib/seo';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/get-estimate',
  title: 'Free Deck Estimate | Trex Platinum Partner | LDN Decks',
  description: 'Get a free deck estimate from Northern Virginia\'s top-rated Trex Platinum Partner. 5.0 Google rating, 2-year warranty. Call (571) 655-7207.',
  image: '/images/img36.jpeg',
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Custom Deck Construction",
  "provider": { "@id": "https://ldndecks.com/#organization" },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Loudoun County, VA" },
    { "@type": "AdministrativeArea", "name": "Fairfax County, VA" },
    { "@type": "AdministrativeArea", "name": "Prince William County, VA" }
  ],
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "15000",
    "highPrice": "75000"
  }
};

export default function GetEstimatePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      {/* Hero Above the Fold: Trust + CTA */}
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '3rem 0 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ color: '#fbbf24', fontSize: '1.2rem' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span style={{ color: '#ccc', fontSize: '0.9rem' }}>5.0 on Google &middot; 41 reviews</span>
            </div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 700, lineHeight: 1.2, marginBottom: '1rem' }}>
              Get Your Free Deck Estimate
            </h1>
            <p style={{ color: '#ccc', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Northern Virginia&apos;s only <strong style={{ color: '#fff' }}>Trex Platinum Partner</strong> (top 1% nationally).
              Custom composite decks, screened porches &amp; outdoor living designed and built by our in-house crew.
            </p>

            {/* Trust Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem' }}>
              {[
                { label: 'Trex Platinum', sub: 'Top 1% in US' },
                { label: '2-Year Warranty', sub: 'Workmanship' },
                { label: '10+ Years', sub: 'Experience' },
                { label: 'Licensed', sub: '& Insured' },
              ].map(b => (
                <div key={b.label} style={{ textAlign: 'center' }}>
                  <p style={{ fontWeight: 700, fontSize: '0.95rem', margin: 0, color: 'var(--color-primary)' }}>{b.label}</p>
                  <p style={{ fontSize: '0.75rem', color: '#999', margin: 0 }}>{b.sub}</p>
                </div>
              ))}
            </div>

            <CallLink style={{ display: 'inline-block', background: 'var(--color-primary)', color: '#fff', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '1.1rem' }}>
              Call (571) 655-7207
            </CallLink>
            <p style={{ color: '#777', fontSize: '0.8rem', marginTop: '0.5rem' }}>Or fill out the form below we respond within 2 hours</p>
          </div>

          <div style={{ position: 'relative', height: '400px', borderRadius: '12px', overflow: 'hidden' }}>
            <Image
              src="/images/img36.jpeg"
              alt="Custom Trex Transcend composite deck built by LDN Decks in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 1100px) 100vw, 550px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Quick Stats Strip */}
      <section style={{ background: '#fff3e0', padding: '1rem 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem', display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          {[
            { num: '100+', label: 'Decks built' },
            { num: '5.0', label: 'Google rating' },
            { num: '2yr', label: 'Warranty' },
            { num: '$15K+', label: 'Projects from' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <p style={{ fontWeight: 700, fontSize: '1.3rem', margin: 0, color: 'var(--color-primary)' }}>{s.num}</p>
              <p style={{ fontSize: '0.8rem', color: '#666', margin: 0 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form + Social Proof */}
      <section style={{ padding: '3rem 0', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>

          {/* Left: Form */}
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Request Your Free Estimate</h2>
            <p style={{ color: '#666', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Tell us about your project and we&apos;ll get back to you within 2 hours with a preliminary estimate.</p>
            <ContactForm hideInfoCol noPadding />
          </div>

          {/* Right: Social Proof */}
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.5rem' }}>What Homeowners Say</h3>
            {[
              { text: "Nick and his team built us a 500 sqft Trex Transcend deck in Ashburn, from permit to final walkthrough in under 3 weeks. Every neighbor has asked who did it.", name: "James R.", city: "Ashburn" },
              { text: "We got 4 quotes. Loudoun Decks wasn\u2019t the cheapest, but Nick explained everything in detail and showed us why composite is worth it. Two years later, our deck still looks brand new.", name: "Maria & Tom S.", city: "Leesburg" },
              { text: "They handled the HOA submission and Loudoun County permit themselves \u2014 I didn\u2019t lift a finger. Deck was done in 10 days. The Trex Calm Shell color looks incredible.", name: "David K.", city: "South Riding" },
            ].map((r, i) => (
              <div key={i} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.25rem', marginBottom: '1rem' }}>
                <div style={{ color: '#fbbf24', marginBottom: '0.5rem' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p style={{ lineHeight: 1.6, fontSize: '0.9rem', marginBottom: '0.5rem' }}>&ldquo;{r.text}&rdquo;</p>
                <p style={{ fontSize: '0.8rem', color: '#999', margin: 0 }}>— {r.name}, {r.city}</p>
              </div>
            ))}

            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, margin: '2rem 0 1rem' }}>Recent Projects</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {['/images/img01.jpeg', '/images/img10.jpeg', '/images/img03.jpeg', '/images/img07.jpeg'].map((src, i) => (
                <div key={i} style={{ position: 'relative', height: '140px', borderRadius: '8px', overflow: 'hidden' }}>
                  <Image src={src} alt={`Recent deck project ${i + 1}`} fill style={{ objectFit: 'cover' }} sizes="250px" />
                </div>
              ))}
            </div>
            <Link href="/before-and-after" style={{ display: 'block', textAlign: 'center', color: 'var(--color-primary)', fontWeight: 600, marginTop: '0.75rem', fontSize: '0.9rem' }}>See all Before &amp; After projects &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Services Strip */}
      <section style={{ padding: '3rem 0', background: '#f9f9f9' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, textAlign: 'center', marginBottom: '2rem' }}>What We Build</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {[
              { title: 'Custom Composite Decks', price: 'From $15K', desc: 'Trex, TimberTech & AZEK', href: '/composite-deck-cost-northern-virginia' },
              { title: 'Screened Porches', price: 'From $25K', desc: 'Bug-free 3-season rooms', href: '/screened-porch-cost-northern-virginia' },
              { title: 'Deck Resurfacing', price: 'From $15K', desc: 'Wood to composite upgrade', href: '/deck-resurfacing-vs-replacement' },
              { title: 'Pergolas & Gazebos', price: 'From $8K', desc: 'Shade structures', href: '/services/gazebo-pergola' },
              { title: 'Structural Repair', price: 'From $2.5K', desc: 'Posts, ledger & inspection fixes', href: '/services/deck-repair-and-structural-maintenance' },
              { title: 'Patios & Hardscape', price: 'From $10K', desc: 'Pavers, flagstone, stamped', href: '/services/patios' },
            ].map(s => (
              <Link key={s.href} href={s.href} style={{ display: 'block', background: '#fff', borderRadius: 8, padding: '1.25rem', textDecoration: 'none', color: 'inherit', border: '1px solid #e5e5e5' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.25rem' }}>{s.price}</p>
                <p style={{ fontSize: '0.8rem', color: '#666', margin: 0 }}>{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '3rem 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>Ready to Start Your Deck Project?</h2>
          <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>Free on-site consultation. 3D design rendering. Itemized written quote. No obligation.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <CallLink style={{ display: 'inline-block', background: 'var(--color-primary)', color: '#fff', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '1.1rem' }}>
              Call (571) 655-7207
            </CallLink>
            <Link href="/deck-cost-calculator" style={{ display: 'inline-block', background: 'transparent', color: '#fff', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', fontSize: '1rem', border: '2px solid rgba(255,255,255,0.3)' }}>
              Try Cost Calculator
            </Link>
          </div>
          <p style={{ color: '#666', fontSize: '0.8rem', marginTop: '1rem' }}>Serving Loudoun, Fairfax, Prince William, Arlington &amp; Stafford counties</p>
        </div>
      </section>
    </>
  );
}
