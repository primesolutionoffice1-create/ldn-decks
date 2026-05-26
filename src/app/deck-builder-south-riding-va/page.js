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
  path: '/deck-builder-south-riding-va',
  title: 'Deck Builder in South Riding, VA | Custom Composite Decks | LDN Decks',
  description: 'Top-rated deck builder in South Riding, VA. 5.0★ Google. Builder-grade deck upgrades, screened porches. South Riding HOA handled. Free estimate. (571) 655-7207.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a deck cost in South Riding?", acceptedAnswer: { "@type": "Answer", text: "South Riding deck projects range from $18,000-$45,000. Composite decks: $32-$55/sqft installed. Most South Riding projects involve upgrading builder-grade PT decks (2005-2015 homes) to Trex or TimberTech composite. Resurfacing: $10k-$20k if frame is solid." } },
    { "@type": "Question", name: "Does South Riding HOA allow composite decks?", acceptedAnswer: { "@type": "Answer", text: "Yes. South Riding HOA allows and prefers composite over wood. Architectural review required submit site plan, materials, and colors. We handle the entire ARC process with 100% approval rate." } },
  ],
};

export default function SouthRidingDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <LocalBusinessSchema city="South Riding" url="https://ldndecks.com/deck-builder-south-riding-va" />
      <WebPageSchema url="https://ldndecks.com/deck-builder-south-riding-va" name="Deck Builder in South Riding, VA | Custom Composite Decks | LDN Decks" description="Top-rated deck builder in South Riding, VA. 5.0★ Google. Builder-grade deck upgrades, screened porches. South Riding HOA handled. Free estimate. (571) 655-7207." speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Custom Deck Builder in South Riding, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Builder-grade upgrades &amp; custom composite decks for South Riding homeowners</p>
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
              alt="Premium custom deck built by LDN Decks in South Riding, Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>South Riding From Builder Wood to Maintenance-Free Composite</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>South Riding homes (mostly built 2005-2015) typically came with basic pressure-treated wood decks that are now 10-20 years old graying, splintering, and requiring constant maintenance. We transform these into beautiful, maintenance-free composite decks. Many South Riding homeowners combine the upgrade with adding a screened porch or pergola.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Resurfacing saves money:</strong> If your deck frame is solid (we inspect free), we keep it and replace only the boards 40-60% less than full rebuild</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>South Riding HOA expert:</strong> We know the ARC requirements, approved materials/colors, and submission timeline</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Loudoun County permits:</strong> Fastest in NoVA 10-15 business days. We handle everything.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>15 minutes from HQ:</strong> Fast site visits and responsive service</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Featured South Riding Project</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>$19,500 280 sqft Deck Resurfacing, South Riding</h3>
            <p style={{ lineHeight: 1.7 }}>Resurfaced a 12-year-old builder-grade PT deck with Trex Enhance (Saddle). Frame inspected and solid removed old boards, installed Trex with hidden fasteners, new aluminum railings, 4 stair lights. Total transformation for under $20k. South Riding HOA approved in 12 days. Loudoun County permit. 1-week build.</p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>FAQ</h2>
          {[
            { q: "Cost in South Riding?", a: "New deck: $18k-$45k. Resurfacing: $10k-$20k (saves 40-60% if frame is solid). Composite: $32-$55/sqft." },
            { q: "South Riding HOA allow composite?", a: "Yes they prefer it. We handle ARC submissions. 100% approval rate." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '2.5rem 0 1rem' }}>Also Serving</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {[
              ['/deck-builder-brambleton-va', 'Brambleton'],
              ['/deck-builder-chantilly-va', 'Chantilly'],
              ['/near-you/loudoun-county/stone-ridge', 'Stone Ridge'],
              ['/near-you/loudoun-county/aldie', 'Aldie'],
              ['/deck-builder-centreville-va', 'Centreville'],
              ['/deck-builder-ashburn-va', 'Ashburn'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>{text}</Link>
            ))}
          </div>
        </div>
      </article>
      <SimpleCTA title="Upgrade Your South Riding Deck" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-south-riding-va" />
      <NamedAuthor context="South Riding and Northern Virginia" lastUpdated="2026-05-26" />
      <ContactHome />
    </>
  );
}
