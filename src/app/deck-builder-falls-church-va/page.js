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
  path: '/deck-builder-falls-church-va',
  title: 'Deck Builder in Falls Church, VA | Custom Composite Decks | LDN Decks',
  description: 'Top-rated deck builder in Falls Church, VA. 5.0★ Google. Custom Trex decks, screened porches. City of Falls Church + Fairfax County permits. Free estimate.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a deck cost in Falls Church, VA?", acceptedAnswer: { "@type": "Answer", text: "Falls Church deck projects range from $25,000-$60,000. Composite decks: $40-$65/sqft installed. Falls Church's smaller lots often require creative designs compact multi-level builds, bump-outs, and screened porch conversions are common." } },
    { "@type": "Question", name: "City of Falls Church vs Fairfax County permits?", acceptedAnswer: { "@type": "Answer", text: "The City of Falls Church is independent with its own building department smaller and often faster than Fairfax County. Many addresses in the 22042/22043/22044 zip codes are actually in Fairfax County, not the City. We determine your exact jurisdiction." } },
  ],
};

export default function FallsChurchDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <LocalBusinessSchema city="Falls Church" url="https://ldndecks.com/deck-builder-falls-church-va" />
      <WebPageSchema url="https://ldndecks.com/deck-builder-falls-church-va" name="Deck Builder in Falls Church, VA | Custom Composite Decks | LDN Decks" description="Top-rated deck builder in Falls Church, VA. 5.0★ Google. Custom Trex decks, screened porches. City of Falls Church + Fairfax County permits. Free estimate." speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Custom Deck Builder in Falls Church, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Composite decks &amp; screened porches for Falls Church homeowners compact lot specialists</p>
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
              src="/images/img10.jpeg"
              alt="Premium custom deck built by LDN Decks in Falls Church, Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Falls Church The Little City with Big Deck Potential</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Falls Church is known for its walkable neighborhoods, excellent schools, and charming character but also for smaller lot sizes compared to outer suburbs. We specialize in maximizing outdoor living space on compact Falls Church properties through creative design: multi-level decks that use vertical space, bump-out extensions, and screened porches that turn unusable side yards into living areas.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Compact lot expertise:</strong> Smaller yards need smarter design we maximize every square foot</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Independent City permitting:</strong> City of Falls Church has its own building department often faster than Fairfax County</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Close-neighbor sensitivity:</strong> We design with privacy in mind screen walls, pergola shade, strategic plantings</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Tree-city considerations:</strong> Falls Church has significant urban canopy we protect root zones during construction</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Featured Falls Church Project</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>$42,000 280 sqft Deck + 150 sqft Screened Porch, City of Falls Church</h3>
            <p style={{ lineHeight: 1.7 }}>Compact but complete outdoor living solution on a 0.15 acre lot. L-shaped Trex Transcend deck (Island Mist) with attached screened porch featuring EZE-Breeze panels and cedar ceiling. Privacy lattice on neighbor-facing side. City of Falls Church building permit approved in 10 business days. 3-week build.</p>
          </div>
          <CityAuthorityExpansion cityKey="fallsChurch" />

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>FAQ</h2>
          {[
            { q: "Deck cost in Falls Church?", a: "$25,000-$60,000. Composite: $40-$65/sqft. Creative compact designs our specialty." },
            { q: "Which permit do I need?", a: "City of Falls Church (independent) or Fairfax County many FC zip codes overlap. We determine your jurisdiction." },
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
              ['/near-you/fairfax-county/annandale', 'Annandale'],
              ['/deck-builder-arlington-va', 'Arlington'],
              ['/deck-builder-fairfax-va', 'Fairfax'],
              ['/deck-builder-tysons-va', 'Tysons'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>{text}</Link>
            ))}
          </div>
        </div>
      </article>
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (5.0★ Google) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
            <li key="/composite-deck-cost-northern-virginia" style={{ marginBottom: '0.5rem' }}><Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>How Much Does a Deck Cost in Northern Virginia? →</Link></li>
            <li key="/services/new-decks" style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building Services →</Link></li>
        </ul>
      </section>

      <SimpleCTA title="Maximize Your Falls Church Outdoor Space" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-falls-church-va" />
      <NamedAuthor context="Falls Church and Northern Virginia" lastUpdated="2026-05-26" />
      <ContactHome />
    </>
  );
}
