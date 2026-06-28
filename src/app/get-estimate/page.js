import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import WebPageSchema from '@/components/WebPageSchema';
import RelatedGuides from '@/components/RelatedGuides';
import NamedAuthor from '@/components/NamedAuthor';
import { buildMetadata } from '@/lib/seo';
import { BUSINESS } from '@/lib/business';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/get-estimate',
  title: 'Request a Deck Estimate Northern Virginia | Loudoun Decks',
  description: 'Request a deck estimate for composite decks, deck replacement, repairs, screened porches and outdoor living projects in Northern Virginia.',
  image: '/social/get-estimate-social.png',
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
      <WebPageSchema dateModified="2026-06-02" url="https://ldndecks.com/get-estimate" name="Request a Deck Estimate Northern Virginia | Loudoun Decks" description="Request a deck estimate for composite decks, deck replacement, repairs, screened porches and outdoor living projects in Northern Virginia." speakable />
      {getEstimateSchema.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}

      {/* Hero Above the Fold: Trust + CTA */}
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '3rem 0 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ color: '#fbbf24', fontSize: '1rem', fontWeight: 700 }}>Public reviews</span>
              <span style={{ color: '#ccc', fontSize: '0.9rem' }}>Public Google review profile</span>
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
                { label: 'TrexPro', sub: 'Verify profile' },
                { label: 'Warranty', sub: 'Written terms' },
                { label: 'Reviews', sub: 'Public profiles' },
                { label: 'License', sub: 'Verify DPOR' },
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

      <section style={{ background: '#fff', padding: '1.5rem 0 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ border: '1px solid #fed7aa', borderLeft: '5px solid var(--color-primary)', borderRadius: 8, padding: '1.2rem', background: '#fff7ed' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 800, margin: '0 0 0.5rem' }}>Quick Answer</h2>
            <p style={{ color: '#475569', lineHeight: 1.65, margin: 0 }}>
              The fastest way to get a useful deck estimate is to send your project type, city, approximate size, photos, material goals, and any repair, permit, HOA, stair, railing, or drainage concerns. Loudoun Decks uses that detail to route you toward a written estimate, inspection, calculator path, or planning call.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem', marginTop: '1rem' }}>
              <Link href="#estimate-form" style={{ color: 'var(--color-primary)', fontWeight: 800, textDecoration: 'none' }}>Start estimate form</Link>
              <Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 800, textDecoration: 'none' }}>Use deck calculator</Link>
              <Link href="/services/deck-repair" style={{ color: 'var(--color-primary)', fontWeight: 800, textDecoration: 'none' }}>Request repair inspection</Link>
            </div>
          </div>
          <div style={{ marginTop: '1.25rem' }}>
            <NamedAuthor context="estimate triage for decks, resurfacing, repairs, screened porches, and outdoor living projects in Northern Virginia" lastUpdated="2026-06-02" />
          </div>
        </div>
      </section>

      {/* Quick Stats Strip */}
      <section style={{ background: '#fff3e0', padding: '1rem 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem', display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          {[
            { num: 'Photos', label: 'Improve accuracy' },
            { num: 'Google', label: 'review profile' },
            { num: 'Scope', label: 'Before pricing' },
            { num: 'Permit', label: 'Checked early' },
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

      {/* Form + proof-safe trust path */}
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

          {/* Right: Proof-safe trust path */}
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem' }}>Verify Loudoun Decks Before You Request an Estimate</h3>
            <p style={{ color: '#555', lineHeight: 1.65, fontSize: '0.92rem', marginBottom: '1rem' }}>
              Review public profiles, planning guides, project photos, and permit resources before you share project details. We keep estimate conversations focused on scope, safety, budget, and the right next step.
            </p>
            <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {[
                ['/reviews', 'Read public review sources'],
                ['/bbb-accredited-deck-builder-virginia', 'Check BBB profile information'],
                ['/team', 'Meet the team'],
                ['/deck-permit-loudoun-county-virginia', 'Review Loudoun permit guidance'],
              ].map(([href, label]) => (
                <Link key={href} href={href} style={{ display: 'block', background: '#f9fafb', borderRadius: 8, padding: '0.95rem 1rem', color: 'var(--color-primary)', fontWeight: 800, textDecoration: 'none', border: '1px solid #e5e7eb' }}>
                  {label} &rarr;
                </Link>
              ))}
            </div>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, margin: '2rem 0 1rem' }}>Project Photos to Review</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {[
                {
                  src: '/images/img13.jpeg',
                  alt: 'Finished composite deck with white railing by Loudoun Decks in Northern Virginia',
                },
                {
                  src: '/showcase/img08.jpeg',
                  alt: 'Finished low-maintenance deck with clean composite boards by Loudoun Decks',
                },
                {
                  src: '/images/img03.jpeg',
                  alt: 'Elevated deck with stair lighting and cable railing by Loudoun Decks',
                },
                {
                  src: '/images/screened-porch-cost-northern-virginia-2026.png',
                  alt: 'Modern screened porch with black railing and wooded backyard view by Loudoun Decks',
                },
              ].map((photo) => (
                <div key={photo.src} style={{ position: 'relative', height: '140px', borderRadius: '8px', overflow: 'hidden' }}>
                  <Image src={photo.src} alt={photo.alt} fill style={{ objectFit: 'cover' }} sizes="250px" />
                </div>
              ))}
            </div>
            <Link href="/before-and-after" style={{ display: 'block', textAlign: 'center', color: 'var(--color-primary)', fontWeight: 600, marginTop: '0.75rem', fontSize: '0.9rem' }}>Review before &amp; after gallery &rarr;</Link>
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
              { title: 'Structural Repair', price: 'Inspection first', desc: 'Posts, ledger & inspection fixes', href: '/services/deck-repair' },
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

      <section style={{ padding: '3rem 0', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, textAlign: 'center', marginBottom: '1.5rem' }}>Verify Before You Book</h2>
          <p style={{ color: '#555', lineHeight: 1.7, textAlign: 'center', maxWidth: 720, margin: '0 auto 2rem' }}>
            Compare reviews, credentials, project photos, planning tools, and local permit guidance before requesting the final written estimate.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {[
              ['/reviews', 'Public Review Profiles'],
              ['/bbb-accredited-deck-builder-virginia', 'BBB Accredited Deck Builder'],
              ['/before-and-after', 'Before & After Projects'],
              ['/houzz-deck-projects', 'Houzz Project Portfolio'],
              ['/deck-cost-calculator', 'Deck Cost Calculator'],
              ['/deck-permit-loudoun-county-virginia', 'Loudoun Permit Guide'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ display: 'block', padding: '1rem', border: '1px solid #e5e5e5', borderRadius: 8, color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'none', background: '#fff' }}>
                {text} &rarr;
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedGuides currentPath="/get-estimate" category="deck-core" />
    </>
  );
}
