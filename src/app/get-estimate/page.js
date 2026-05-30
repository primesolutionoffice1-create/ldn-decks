import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import WebPageSchema from '@/components/WebPageSchema';
import { buildMetadata } from '@/lib/seo';
import { BUSINESS } from '@/lib/business';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/get-estimate',
  title: 'Request a Deck Estimate Northern Virginia | Loudoun Decks',
  description: 'Request a deck estimate for composite decks, deck replacement, repairs, screened porches and outdoor living projects in Northern Virginia.',
  image: '/images/img36.jpeg',
});

const estimateFaq = [
  {
    question: 'What should I include when requesting a deck estimate?',
    answer: 'Include your city, the type of project, approximate deck size, whether the deck is new or existing, preferred material, photos if available, and any permit, HOA, repair, stair, railing, or porch concerns.',
  },
  {
    question: 'Do you provide deck repair and replacement estimates?',
    answer: 'Yes. Loudoun Decks can estimate deck repairs, structural concerns, resurfacing, replacement, stairs, railings, and composite upgrades across Northern Virginia.',
  },
  {
    question: 'How quickly will Loudoun Decks respond?',
    answer: 'Most estimate requests receive a follow-up within the same business day or the next business day, depending on project detail and schedule volume.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'Loudoun Decks serves homeowners across Northern Virginia, including Loudoun County, Fairfax County, Prince William County, Arlington, Alexandria, Ashburn, Leesburg, Sterling, Herndon, Reston, Vienna, McLean, and nearby communities.',
  },
];

const getEstimateSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ldndecks.com' },
      { '@type': 'ListItem', position: 2, name: 'Request a Deck Estimate', item: 'https://ldndecks.com/get-estimate' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: estimateFaq.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  },
];

export default function GetEstimatePage() {
  return (
    <>
      <WebPageSchema url="https://ldndecks.com/get-estimate" name="Request a Deck Estimate Northern Virginia | Loudoun Decks" description="Request a deck estimate for composite decks, deck replacement, repairs, screened porches and outdoor living projects in Northern Virginia." speakable />
      {getEstimateSchema.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}

      {/* Hero Above the Fold: Trust + CTA */}
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '3rem 0 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ color: '#fbbf24', fontSize: '1.2rem' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span style={{ color: '#ccc', fontSize: '0.9rem' }}>5.0 on Google &middot; {BUSINESS.reviewSummary.reviewCount} reviews</span>
            </div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 700, lineHeight: 1.2, marginBottom: '1rem' }}>
              Request a Deck Estimate in Northern Virginia
            </h1>
            <p style={{ color: '#ccc', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Tell us about your composite deck, deck replacement, repair, screened porch, or outdoor living project.
              Loudoun Decks helps homeowners plan the right scope, budget, permits, HOA path, and next step before construction.
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

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
              <CallLink style={{ display: 'inline-block', background: 'var(--color-primary)', color: '#fff', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '1.05rem' }}>
                Call (571) 655-7207
              </CallLink>
              <Link href="#estimate-form" style={{ display: 'inline-block', color: '#fff', padding: '0.9rem 1.25rem', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem', border: '1px solid rgba(255,255,255,0.35)' }}>
                Fill Out Estimate Form
              </Link>
            </div>
            <p style={{ color: '#aaa', fontSize: '0.82rem', marginTop: '0.75rem' }}>Share photos, project goals, and location for a more accurate first response.</p>
          </div>

          <div style={{ position: 'relative', minHeight: '320px', height: 'min(400px, 70vw)', borderRadius: '12px', overflow: 'hidden' }}>
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

      {/* Estimate Fit */}
      <section style={{ padding: '2.5rem 0', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {[
              { title: 'Best-fit projects', text: 'Composite decks, deck replacement, resurfacing, screened porches, stairs, railings, lighting, structural repair, and outdoor living upgrades.' },
              { title: 'What helps us price faster', text: 'Photos, rough dimensions, city or county, HOA status, material preference, repair symptoms, and whether permits are already in progress.' },
              { title: 'What happens next', text: 'We review your project, clarify scope, discuss budget range, and schedule the right next step if the project is a fit.' },
            ].map((item) => (
              <div key={item.title} style={{ border: '1px solid #e5e5e5', borderRadius: 10, padding: '1.25rem', background: '#fff' }}>
                <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{item.title}</h2>
                <p style={{ color: '#555', lineHeight: 1.6, fontSize: '0.92rem', margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Social Proof */}
      <section id="estimate-form" style={{ padding: '3rem 0', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

          {/* Left: Form */}
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Request Your Free Estimate</h2>
            <p style={{ color: '#666', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Tell us about your project, location, timeline, and concerns. More detail helps us route you toward the right estimate, repair review, or planning conversation.</p>
            <ContactForm hideInfoCol noPadding />
            <div style={{ background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: 10, padding: '1rem', marginTop: '1rem' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem' }}>For the strongest estimate request, include:</h3>
              <ul style={{ color: '#555', lineHeight: 1.7, fontSize: '0.88rem', margin: 0, paddingLeft: '1.1rem' }}>
                <li>Project type: new deck, replacement, repair, resurfacing, porch, stairs, or railing.</li>
                <li>City or county and whether HOA approval may be required.</li>
                <li>Approximate size, height, preferred material, and timeline.</li>
                <li>Photos of the current deck or yard if available.</li>
              </ul>
            </div>
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
                  <Image src={src} alt={`Recent custom deck project ${i + 1} by Loudoun Decks in Northern Virginia`} fill style={{ objectFit: 'cover' }} sizes="250px" />
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem' }}>
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

      <section style={{ padding: '3rem 0', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, textAlign: 'center', marginBottom: '1.5rem' }}>Estimate Questions Homeowners Ask</h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {estimateFaq.map((faq) => (
              <details key={faq.question} style={{ border: '1px solid #e5e5e5', borderRadius: 10, padding: '1rem', background: '#fff' }}>
                <summary style={{ cursor: 'pointer', fontWeight: 700 }}>{faq.question}</summary>
                <p style={{ color: '#555', lineHeight: 1.6, margin: '0.75rem 0 0' }}>{faq.answer}</p>
              </details>
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
