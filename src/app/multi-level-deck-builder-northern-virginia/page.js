import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/multi-level-deck-builder-northern-virginia',
  title: 'Multi-Level Deck Builder NoVA',
  description: 'Custom multi-level decks in Northern Virginia from $35,000-$80,000+. Perfect for sloped lots and walkout basements. Trex & TimberTech. Free design consultation.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a multi-level deck cost in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "Multi-level composite decks in Northern Virginia cost $35,000-$80,000+ depending on total square footage, number of levels, materials, and features. A typical two-level deck (400-600 sqft total) runs $40,000-$65,000 with Trex Transcend and standard railings." } },
    { "@type": "Question", name: "Are multi-level decks good for sloped yards?", acceptedAnswer: { "@type": "Answer", text: "Yes multi-level decks are the ideal solution for sloped lots, which are common in Northern Virginia. Instead of fighting the grade with retaining walls, the deck follows the natural slope with stepped levels connected by stairs. This turns unusable hillside into functional outdoor living space." } },
    { "@type": "Question", name: "How long does a multi-level deck take to build?", acceptedAnswer: { "@type": "Answer", text: "3-5 weeks of construction time for most two-level decks. Three-level or larger projects: 4-6 weeks. Total timeline including design, permits, and construction: 8-14 weeks." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function MultiLevelDeckPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img26.jpeg"
              alt="Premium custom multi-level deck built by LDN Decks in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>Multi-Level Deck Builder in Northern Virginia</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Two-story, split-level &amp; cascading decks for sloped lots and walkout basements</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Design Consultation</Link>
          </div>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <h2 style={S.h2}>Why Multi-Level Decks Are Popular in Northern Virginia</h2>
          <p style={S.p}>Northern Virginia&apos;s hilly terrain makes multi-level decks one of our most-requested designs. Many NoVA homes especially in Loudoun, western Fairfax, and Prince William sit on sloped lots where a single flat deck would either be too high off the ground or require massive support posts.</p>
          <p style={S.p}>A multi-level design solves this by creating <strong>distinct outdoor zones at different heights</strong>, connected by stairs. Each level serves a purpose: upper dining near the kitchen door, lower lounge closer to the yard, and sometimes a ground-level patio with fire pit.</p>

          <h2 style={S.h2}>Multi-Level Deck Configurations</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { title: 'Two-Level Step-Down', desc: 'Upper level off the house (dining/grill), lower level 2-4 steps down (lounge/seating). Most common and cost-effective.', range: '$35k–$55k', size: '350–500 sqft' },
              { title: 'Cascading Three-Level', desc: 'Follows the slope of a hillside with 3 distinct platforms. Ideal for steep grades. Each level can have its own purpose.', range: '$50k–$80k+', size: '500–800 sqft' },
              { title: 'Walkout Basement Deck', desc: 'Second-story deck off main floor with stairs down to a ground-level patio or lower deck near the walkout basement.', range: '$40k–$70k', size: '400–600 sqft' },
              { title: 'Wrap-Around Multi-Level', desc: 'Deck wraps around 2+ sides of the house with level changes to follow the home\'s footprint and grade changes.', range: '$55k–$90k+', size: '600–1,000 sqft' },
            ].map((config) => (
              <div key={config.title} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.25rem' }}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{config.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>{config.range} · {config.size}</p>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6, marginTop: '0.5rem' }}>{config.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={S.h2}>Cost by Size and Material</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Total Size', 'PT Wood', 'Trex Transcend', 'TimberTech AZEK'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['350 sqft (2-level)', '$12k–$20k', '$22k–$35k', '$25k–$40k'],
                  ['500 sqft (2-level)', '$16k–$28k', '$32k–$50k', '$35k–$55k'],
                  ['600 sqft (3-level)', '$20k–$35k', '$40k–$60k', '$45k–$70k'],
                  ['800+ sqft (wrap/cascade)', '$28k–$45k', '$52k–$80k', '$60k–$90k+'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#888', fontStyle: 'italic' }}>Multi-level decks cost 20–40% more than single-level due to additional stairs, framing transitions, and support structure. <Link href="/how-much-does-a-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)' }}>Full pricing guide →</Link></p>

          <h2 style={S.h2}>Design Considerations for Multi-Level Decks</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Zone each level by function:</strong> Upper = dining/cooking (near kitchen), Middle = lounging/conversation, Lower = fire pit/play area/hot tub</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Stair width matters:</strong> 4-foot-wide stairs between levels feel generous; 3-foot minimum is code but feels cramped for two-way traffic</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Lighting is essential:</strong> Each level transition needs stair lighting for safety. <Link href="/deck-lighting-ideas-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>See lighting options</Link></li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Railing varies by height:</strong> Upper levels need full railings (36-42&quot;). Lower levels under 30&quot; above grade may not require railings by code but consider adding for aesthetics</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Under-deck space:</strong> Elevated upper levels create covered space below. Add an <Link href="/under-deck-ceiling-ideas" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>under-deck ceiling system</Link> to make it usable</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Footings go deeper:</strong> Upper-level support posts may need 42&quot;+ deep footings (below frost line) with larger diameter. More footings = more inspection points</li>
          </ul>

          <h2 style={S.h2}>Real Multi-Level Projects</h2>
          {[
            { price: '$42,000', desc: '450 sqft Two-Level, Ashburn (Broadlands)', detail: 'Upper dining level (250 sqft) off kitchen slider + lower lounge (200 sqft) with built-in bench. Trex Transcend Island Mist, Trex Signature railings, 8 stair lights. Loudoun County permit. 3.5-week build.' },
            { price: '$58,000', desc: '550 sqft Three-Level Cascade, Leesburg', detail: 'Three-level deck following a steep hillside grade. Top level dining (200 sqft), mid-level conversation (200 sqft), ground-level fire pit pad (150 sqft). TimberTech PRO in Dark Roast. Cable railings on upper levels. 4.5-week build.' },
            { price: '$73,000', desc: '700 sqft Wrap-Around + Screened Porch, McLean', detail: 'L-shaped multi-level wrapping two sides of the house. Upper screened porch (250 sqft) + open deck dining (250 sqft) + lower walkout level (200 sqft). AZEK Vintage in Dark Hickory. 6-week build.' },
          ].map((p, i) => (
            <div key={i} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{p.price} {p.desc}</h3>
              <p style={{ lineHeight: 1.7 }}>{p.detail}</p>
            </div>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "How much does a multi-level deck cost?", a: "Two-level composite: $35k-$55k. Three-level: $50k-$80k+. 20-40% more than single-level due to stairs and framing transitions." },
            { q: "Good for sloped yards?", a: "Ideal. Multi-level follows the natural grade instead of fighting it. Turns unusable hillside into functional space." },
            { q: "How long to build?", a: "Two-level: 3-5 weeks. Three-level or larger: 4-6 weeks. Total with permits: 8-14 weeks." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/how-much-does-a-deck-cost-northern-virginia', 'Deck Cost Guide'],
              ['/what-size-deck-should-i-build', 'Deck Size Guide'],
              ['/under-deck-ceiling-ideas', 'Under-Deck Ceiling Ideas'],
              ['/deck-lighting-ideas-northern-virginia', 'Deck Lighting Ideas'],
              ['/deck-railing-options-northern-virginia', 'Railing Options'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Design Your Multi-Level Deck" buttonText="Get Free Design Consultation" link="/contact" />
      <ContactHome />
    </>
  );
}
