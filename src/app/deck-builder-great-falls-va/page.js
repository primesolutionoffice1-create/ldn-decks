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
  path: '/deck-builder-great-falls-va',
  title: 'Best Deck Builder in Great Falls, VA | Premium Composite Decks',
  description: 'Trusted deck builder for Great Falls, VA. Premium Trex & AZEK decks for $1M+ homes. Google reviews. RPA-zone expertise. Free estimate. Call (571) 655-7207.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a deck cost in Great Falls, VA?", acceptedAnswer: { "@type": "Answer", text: "Deck projects in Great Falls typically range from $40,000-$100,000+ due to larger lots, premium material preferences (AZEK, Trex Transcend), and complex designs. Great Falls homeowners often add screened porches, outdoor kitchens, and multi-level designs." } },
    { "@type": "Question", name: "Do I need special permits for a deck in Great Falls?", acceptedAnswer: { "@type": "Answer", text: "Great Falls is in Fairfax County standard building permits required. Many Great Falls lots are in RPA (Resource Protection Area) zones near the Potomac River, requiring additional environmental review. We handle all permitting including RPA submissions." } },
    { "@type": "Question", name: "Do Great Falls homes have HOA restrictions on decks?", acceptedAnswer: { "@type": "Answer", text: "Some Great Falls neighborhoods have deed covenants or HOA architectural review. Many estate-lot homes have no HOA. We research your specific property's restrictions before design begins." } },
    { "@type": "Question", name: "How long does a premium deck project take in Great Falls?", acceptedAnswer: { "@type": "Answer", text: "Great Falls estate-scale projects typically take 5-8 weeks from permit approval to completion. Fairfax County plan review runs 3-6 weeks. Projects requiring RPA environmental review may add 2-4 weeks to the permitting phase. Total timeline from contract to completion is usually 10-14 weeks." } },
    { "@type": "Question", name: "Can you build decks in Great Falls during winter?", acceptedAnswer: { "@type": "Answer", text: "Yes we build year-round in Great Falls. Composite and PVC materials install in any temperature. Winter builds can actually benefit Great Falls homeowners by avoiding the peak spring-summer scheduling queue, and Fairfax County processes permits through the winter months." } },
    { "@type": "Question", name: "How long do premium composite materials last in Great Falls?", acceptedAnswer: { "@type": "Answer", text: "TimberTech AZEK and Trex Transcend carry manufacturer warranties of 25-50 years covering fade, stain and structural performance. With proper installation on Great Falls estate lots, these materials routinely last 30+ years with minimal maintenance even in shaded, tree-heavy environments." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 } };

export default function GreatFallsDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <LocalBusinessSchema city="Great Falls" url="https://ldndecks.com/deck-builder-great-falls-va" />
      <WebPageSchema url="https://ldndecks.com/deck-builder-great-falls-va" name="Best Deck Builder in Great Falls, VA | Premium Composite Decks" description="Trusted deck builder for Great Falls, VA. Premium Trex &amp; AZEK decks for $1M+ homes. Google reviews. RPA-zone expertise. Free estimate. Call (571) 655-7207." speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img17.jpeg"
              alt="Premium custom luxury deck built by LDN Decks in Great Falls, Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.01em' }}>Custom Deck Builder in Great Falls, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.15rem' }}>Architectural custom decks for Great Falls luxury properties — composite, screened porches, outdoor living for estate homes.</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Estimate</Link>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#aaa' }}>Google reviews · {BUSINESS.aggregateRating.reviewCount} reviews · Licensed &amp; Insured · 2-Year Warranty</p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <h2 style={S.h2}>Why Great Falls Homeowners Choose Loudoun Decks</h2>
          <p style={S.p}>Great Falls properties demand exceptional craftsmanship. With home values averaging $1.5M+ and lot sizes of 1-5+ acres, Great Falls deck projects are among the most detailed and architecturally significant in Northern Virginia. We specialize in the premium outdoor living spaces these properties deserve.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Premium materials exclusively:</strong> TimberTech AZEK, Trex Transcend, exotic hardwoods materials that match the caliber of Great Falls homes</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>RPA zone expertise:</strong> Many Great Falls lots near the Potomac are in Resource Protection Areas requiring additional environmental review. We navigate this process routinely.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Architectural complexity:</strong> Multi-level decks, wraparound designs, integrated outdoor kitchens, screened porches with fireplaces, pool deck surrounds</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Estate-scale projects:</strong> 600-1,200+ sqft outdoor living spaces designed to complement the scale of Great Falls properties</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Fairfax County permitting:</strong> We handle all zoning review, building permits, and inspections including the more complex requirements for large properties</li>
          </ul>

          <h2 style={S.h2}>What We Build in Great Falls</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { title: 'Estate Composite Decks', desc: 'Multi-level AZEK and Trex Transcend builds with premium railings, integrated lighting, and custom details', range: '$50k–$120k+' },
              { title: 'Screened Porches & Sunrooms', desc: 'EZE-Breeze, retractable screens, stone fireplaces, cedar ceilings, climate-controlled options', range: '$40k–$90k+' },
              { title: 'Pool Deck Surrounds', desc: 'Heat-resistant pavers and composite around pools with code-compliant barriers and outdoor showers', range: '$35k–$80k+' },
              { title: 'Outdoor Kitchens', desc: 'Full kitchens with grill, pizza oven, bar, sink, fridge designed for Great Falls entertaining', range: '$30k–$80k+' },
            ].map((item) => (
              <div key={item.title} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.25rem' }}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>{item.range}</p>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={S.h2}>Great Falls Project Example</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>$92,000 800 sqft Multi-Level Deck + Screened Porch, River Creek</h3>
            <p style={{ lineHeight: 1.7 }}>Three-level TimberTech AZEK deck (500 sqft) in Mahogany connected to a screened porch (300 sqft) with stone fireplace, tongue-and-groove cedar ceiling, retractable screens, and built-in bar. Trex Signature cable railings for Potomac River views. RPA environmental review + Fairfax County building permit. HOA architectural review approved first submission. 7-week build.</p>
          </div>

          <h2 style={S.h2}>Permits &amp; RPA Zones in Great Falls</h2>
          <p style={S.p}><strong>Standard permits:</strong> All decks in Great Falls require Fairfax County building permits (zoning + structural review, 3-6 weeks). <Link href="/deck-permit-fairfax-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Read our Fairfax County permit guide</Link>.</p>
          <p style={S.p}><strong>RPA (Resource Protection Area):</strong> Properties within 100 feet of perennial streams or the Potomac River are in Fairfax County&apos;s RPA zone. Deck construction in RPAs requires additional environmental review, may limit impervious surface, and sometimes requires mitigation planting. We routinely navigate RPA permitting for Great Falls properties.</p>
          <p style={S.p}><strong>Well &amp; septic considerations:</strong> Some Great Falls properties use well water and septic systems. Deck footings must avoid septic drain fields and well casings. We coordinate with your septic company when needed.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "How much does a deck cost in Great Falls?", a: "$40,000-$100,000+ for most projects. Great Falls homeowners typically choose AZEK or Trex Transcend with premium features like screened porches, outdoor kitchens and multi-level designs." },
            { q: "Do I need special permits?", a: "Standard Fairfax County permits plus potential RPA review for lots near the Potomac. We handle everything including environmental submissions." },
            { q: "HOA restrictions?", a: "Varies — some neighborhoods have covenants, many estate lots have no HOA. We research your property before design." },
            { q: "How long does a premium project take?", a: "Estate-scale projects take 5-8 weeks from permit approval. Fairfax County review is 3-6 weeks, and RPA lots may add 2-4 weeks. Total timeline is typically 10-14 weeks from contract to completion." },
            { q: "Can you build in winter?", a: "Yes, we build year-round. Composite and PVC materials install in any temperature. Winter builds avoid peak scheduling queues and Fairfax County processes permits through winter." },
            { q: "How long do premium materials last?", a: "TimberTech AZEK and Trex Transcend carry 25-50 year manufacturer warranties. With proper installation, these materials routinely last 30+ years with minimal maintenance even in shaded Great Falls environments." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Also Serving Nearby</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {[
              ['/deck-builder-mclean-va', 'McLean'],
              ['/deck-builder-vienna-va', 'Vienna'],
              ['/deck-builder-oakton-va', 'Oakton'],
              ['/deck-builder-reston-va', 'Reston'],
              ['/deck-builder-herndon-va', 'Herndon'],
              ['/deck-builder-falls-church-va', 'Falls Church'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>{text}</Link>
            ))}
          </div>
        </div>
      </article>
      <CityAuthorityExpansion cityKey="greatFalls" />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            ['/composite-deck-builder-loudoun', 'Composite Deck Builder in Loudoun County'],
            ['/mclean-great-falls-premium-deck-budget', 'McLean &amp; Great Falls Premium Deck Budget Guide'],
            ['/screened-porch-builder-northern-virginia', 'Screened Porch Builder Northern Virginia'],
            ['/deck-permit-fairfax-county-virginia', 'Fairfax County Deck Permit Guide'],
            ['/composite-deck-cost-northern-virginia', 'How Much Does a Deck Cost in Northern Virginia?'],
            ['/timbertech-azek-deck-cost-northern-virginia', 'TimberTech &amp; AZEK Premium Deck Cost'],
            ['/trex-vs-timbertech-vs-azek', 'Trex vs TimberTech vs AZEK Comparison'],
          ].map(([href, text]) => (
            <li key={href} style={{ marginBottom: '0.5rem' }}>
              <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link>
            </li>
          ))}
        
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (Google reviews) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
            <li key="/services/new-decks" style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building Services →</Link></li>
          </ul>
      </section>
      <SimpleCTA title="Get Your Great Falls Deck Quote" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-great-falls-va" />
      <NamedAuthor context="Great Falls and Northern Virginia" lastUpdated="2026-05-26" />
      <ContactHome />
    </>
  );
}
