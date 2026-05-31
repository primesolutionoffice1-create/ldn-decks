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
import CityAuthorityExpansion from '@/components/CityAuthorityExpansion';

export const metadata = buildMetadata({
  path: '/deck-builder-stafford-va',
  title: 'Premium Deck Builder Stafford VA | Get a Free Quote in 24h',
  description: 'Trusted deck builder in Stafford, VA. review-backed. Trex & TimberTech composite decks, screened porches. Best value in the NoVA region. Free estimate!',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a deck cost in Stafford, VA?", acceptedAnswer: { "@type": "Answer", text: "Stafford deck projects range from $15,000-$40,000. Composite decks: $28-$50/sqft installed. Stafford offers the best value in the Northern Virginia region same quality materials at 15-25% less than Fairfax or Loudoun due to lower labor and permit costs." } },
    { "@type": "Question", name: "Do I need a permit in Stafford County?", acceptedAnswer: { "@type": "Answer", text: "Yes Stafford County requires building permits for decks attached to the house or over 30 inches above grade. Plan review is typically 2-3 weeks faster than most NoVA counties. We handle all permitting." } },
    { "@type": "Question", name: "How long does a deck build take in Stafford?", acceptedAnswer: { "@type": "Answer", text: "Most Stafford composite deck projects take 2-4 weeks from permit approval to completion. Stafford County plan review is typically 2-3 weeks, which is faster than Fairfax or Loudoun counties." } },
    { "@type": "Question", name: "What warranty do you offer on Stafford deck projects?", acceptedAnswer: { "@type": "Answer", text: "We provide a 2-year craftsmanship warranty on all Stafford builds. Trex and TimberTech composite materials carry separate manufacturer warranties of 25-50 years covering fade, stain and structural performance." } },
    { "@type": "Question", name: "Which materials work best for Stafford's climate?", acceptedAnswer: { "@type": "Answer", text: "Stafford gets more sustained summer heat than northern Loudoun or Fairfax. Trex Transcend and TimberTech composite boards handle UV exposure and humidity well without warping, and lighter color options reduce heat absorption on south-facing decks." } },
    { "@type": "Question", name: "When is the best season to build a deck in Stafford?", acceptedAnswer: { "@type": "Answer", text: "We build year-round in Stafford County. Spring and fall are the most popular seasons. Winter builds are viable since Stafford sees less freeze disruption than areas farther north, and booking in the off-season often means shorter wait times." } },
  ],
};

export default function StaffordDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <LocalBusinessSchema city="Stafford" url="https://ldndecks.com/deck-builder-stafford-va" />
      <WebPageSchema url="https://ldndecks.com/deck-builder-stafford-va" name="Premium Deck Builder Stafford VA | Get a Free Quote in 24h" description="Trusted deck builder in Stafford, VA. review-backed. Trex &amp; TimberTech composite decks, screened porches. Best value in the NoVA region. Free estimate!" speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Custom Deck Builder in Stafford, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Best value composite decks in the Northern Virginia region same quality, lower cost</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Estimate</Link>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#aaa' }}>Google reviews · {BUSINESS.aggregateRating.reviewCount} reviews · Licensed &amp; Insured · 2-Year Warranty</p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img32.jpeg"
              alt="Premium custom deck built by LDN Decks in Stafford, Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Stafford Modern Outdoor Living for Growing Families</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Stafford County offers the best outdoor living value in the greater Northern Virginia area. Lower labor rates, faster permit processing, and larger lots mean your budget stretches 15-25% further than in Loudoun or Fairfax with identical Trex and TimberTech materials and the same expert craftsmanship.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>15-25% lower costs:</strong> Same Trex/TimberTech materials, lower overall project cost vs Fairfax/Loudoun</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Fast permits:</strong> Stafford County plan review in 2-3 weeks (faster than most NoVA counties)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Larger lots:</strong> More room for expansive outdoor living bigger decks at better per-sqft value</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Growing communities:</strong> Embrey Mill, Aquia Harbour, Garrisonville, Falmouth all active service areas</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Services in Stafford</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { title: 'Composite Decks', range: '$15k–$40k', link: '/services/new-decks' },
              { title: 'Deck Resurfacing', range: '$15k–$30k+', link: '/services/deck-resurfacing' },
              { title: 'Screened Porches', range: '$18k–$45k', link: '/services/porches' },
              { title: 'Pergolas', range: '$7k–$20k', link: '/services/gazebo-pergola' },
              { title: 'Patios', range: '$6k–$16k', link: '/services/patios' },
              { title: 'Fencing', range: '$3.5k–$10k', link: '/services/fence' },
            ].map((item) => (
              <Link key={item.title} href={item.link} style={{ display: 'block', background: '#f9f9f9', borderRadius: 8, padding: '1rem', textDecoration: 'none', color: 'inherit' }}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.25rem', fontSize: '0.95rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>{item.range}</p>
              </Link>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Featured Stafford Project</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>$26,000 380 sqft Trex Transcend Deck, Embrey Mill</h3>
            <p style={{ lineHeight: 1.7 }}>Full composite deck for a growing family. Trex Transcend in Spiced Rum, aluminum railings, 8 LED stair lights, wide stairs to yard. Same materials as our $35k+ Fairfax projects Stafford pricing made it $9k less. Stafford County permit approved in 11 business days. 2.5-week build.</p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Stafford Communities</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {['Embrey Mill', 'Aquia Harbour', 'Garrisonville', 'Falmouth', 'North Stafford', 'Stafford Marketplace', 'Winding Creek', 'Abberly', 'Augustine', 'Rocky Run'].map((n) => (
              <span key={n} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.85rem', color: '#555' }}>{n}</span>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>FAQ</h2>
          {[
            { q: "Deck cost in Stafford?", a: "$15,000-$40,000. Composite: $28-$50/sqft. 15-25% less than Fairfax/Loudoun for same materials." },
            { q: "Permit timeline?", a: "Stafford County: 2-3 weeks plan review, faster than most NoVA counties. We handle everything." },
            { q: "How long does a deck build take?", a: "Most Stafford projects take 2-4 weeks from permit approval to completion. Faster county review means you're enjoying your deck sooner." },
            { q: "What warranty do you offer?", a: "2-year craftsmanship warranty on all builds. Trex and TimberTech materials carry 25-50 year manufacturer warranties for fade, stain and structural performance." },
            { q: "Best materials for Stafford's climate?", a: "Stafford gets more sustained summer heat than northern NoVA. Trex Transcend and TimberTech composites handle UV and humidity without warping. Lighter colors reduce heat on south-facing decks." },
            { q: "Best season to build?", a: "We build year-round in Stafford. Spring and fall are most popular. Winter builds are viable here since Stafford sees less freeze disruption, and off-season booking often means shorter wait times." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '2.5rem 0 1rem' }}>Also Serving</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {[
              ['/deck-builder-woodbridge-va', 'Woodbridge'],
              ['/deck-builder-manassas-va', 'Manassas'],
              ['/near-you/prince-william-county', 'Dumfries'],
              ['/near-you/stafford-county', 'Quantico'],
              ['/near-you/stafford-county', 'Triangle'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>{text}</Link>
            ))}
          </div>
        </div>
      </article>
      <CityAuthorityExpansion cityKey="stafford" />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (Google reviews) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
            <li key="/services/new-decks" style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building Services →</Link></li>
            <li key="/composite-deck-cost-northern-virginia" style={{ marginBottom: '0.5rem' }}><Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>How Much Does a Deck Cost in Northern Virginia? →</Link></li>
        </ul>
      </section>

      <SimpleCTA title="Best Value Decks in Northern Virginia" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-stafford-va" />
      <NamedAuthor context="Stafford and Northern Virginia" lastUpdated="2026-05-26" />
      <ContactHome />
    </>
  );
}
