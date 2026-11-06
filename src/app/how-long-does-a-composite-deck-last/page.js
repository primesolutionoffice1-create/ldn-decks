import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';

export const metadata = buildMetadata({
  path: '/how-long-does-a-composite-deck-last',
  title: 'How Long Does a Composite Deck Last? | Virginia Lifespan Guide',
  description: 'How long composite decks last in Virginia: Trex warranties 25–50 yrs, TimberTech 25–30 yrs or lifetime (Advanced PVC). Brand lifespans & when to replace.',
  image: '/social/composite-deck-lifespan-virginia-social.png',
});

const lifespanFaqs = [
  {
    q: 'How long does a Trex deck last?',
    a: 'Trex backs its decking with limited residential warranties of 25 years (Enhance), 35 years (Select) and 50 years (Transcend). How long the deck lasts also depends on the framing underneath and on maintenance; capped composite boards resist moisture, rot and insects.',
  },
  {
    q: 'How long does a wood deck last in Virginia?',
    a: 'Pressure-treated wood lasts 10-15 years with annual staining/sealing, or 5-8 years without maintenance. Cedar lasts 15-20 years with maintenance.',
  },
  {
    q: 'When should I replace vs resurface my deck?',
    a: 'Resurface if: the frame/joists are solid, only the surface boards are damaged or worn. Replace if: joists are soft, posts are rotting, footings are shifting, or the deck feels bouncy underfoot. We offer free inspections to determine which you need.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: lifespanFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function DeckLifespanPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema dateModified="2026-11-06" url="https://ldndecks.com/how-long-does-a-composite-deck-last" name="How Long Does a Composite Deck Last? | Virginia Lifespan Guide" description="How long composite decks last in Virginia: Trex warranties 25–50 yrs, TimberTech 25–30 yrs or lifetime (Advanced PVC). Brand lifespans &amp; when to replace." speakable />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>How Long Does a Composite Deck Last?</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Lifespan by brand, what kills a deck in Virginia, and when to replace vs resurface</p>
        </div>
      </section>

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }} data-speakable="true">
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p data-speakable>Composite and PVC decking carry manufacturer limited residential warranties of <strong>25–50 years</strong> depending on brand and line: Trex 25 (Enhance), 35 (Select) and 50 years (Transcend); TimberTech Composite 25–30 years; TimberTech Advanced PVC (formerly AZEK) a limited lifetime product warranty with a 50-year fade &amp; stain warranty. Pressure-treated wood: 10–15 years with annual maintenance. In Virginia, freeze-thaw, summer humidity and the framing underneath decide how long a deck really lasts.</p>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img40.jpeg"
              alt="Durable long-lasting composite deck build by Trex product-line planning"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>

          <h2 style={S.h2}>Average Lifespan by Material</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Material', 'Lifespan', 'Warranty', 'Maintenance Required'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Pressure-Treated Wood', '10–15 years', 'None', 'Stain/seal every 1-2 yrs, sand, replace rotted boards'],
                  ['Cedar', '15–20 years', 'None', 'Stain/seal every 1-2 yrs, annual inspection'],
                  ['Trex Enhance', '25+ years', '25 years', 'Occasional soap & water wash'],
                  ['Trex Transcend', '25–30+ years', '50 years', 'Occasional wash'],
                  ['TimberTech Composite (Legacy, Reserve, Terrain)', '25–30+ years', '30 years', 'Occasional wash'],
                  ['TimberTech Advanced PVC (formerly AZEK)', '30–50 years', 'Lifetime (product); 50-yr fade & stain', 'Occasional wash'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400, color: i >= 2 && j === 1 ? 'var(--color-primary)' : 'inherit' }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.75rem', marginBottom: 0 }}>Warranty column: manufacturer limited residential warranties. Trex: Enhance 25, Select 35, Transcend 50 years (<a href="https://www.trex.com/products/decking/" target="_blank" rel="noopener noreferrer">trex.com</a>, checked November 2, 2026). TimberTech: Composite 25–30 years (Legacy, Reserve, Terrain 30; Prime+, Prime, Premier 25); Advanced PVC limited lifetime product warranty plus 50-year fade &amp; stain (35 for Solstice) (<a href="https://www.timbertech.com/about-warranties/" target="_blank" rel="noopener noreferrer">timbertech.com</a>, checked November 3, 2026). Lifespan depends on the framing underneath and on maintenance.</p>
          </div>

          <h2 style={S.h2}>What Kills a Deck in Virginia</h2>
          <p style={S.p}><strong>Freeze-thaw cycles:</strong> Northern Virginia winters swing above and below freezing again and again. Water that soaks into wood grain freezes, expands and opens checks and splits, so unsealed boards crack sooner. Capped composite boards have a protective shell that resists water absorption.</p>
          <p style={S.p}><strong>Summer humidity:</strong> Sustained moisture breeds mold, mildew, and rot in wood. Even sealed wood eventually absorbs moisture through end cuts and fastener holes. A composite board&apos;s cap resists moisture penetration.</p>
          <p style={S.p}><strong>UV exposure:</strong> Sunlight weathers unsealed wood to gray. Stain helps but must be reapplied every 1–2 years. Composite boards use UV-stabilized pigments, and manufacturers back their color with fade &amp; stain limited warranties (see the warranty sources under the table).</p>
          <p style={S.p}><strong>Insect damage:</strong> Carpenter bees, termites, and wood-boring beetles target untreated wood in Virginia. Composite has no organic food source for insects.</p>

          <h2 style={S.h2}>Signs Your Deck Is Aging</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            {[
              'Boards feel soft or spongy when you walk on them',
              'Visible rot at post bases, where boards meet the house, or around fasteners',
              'Boards are splintering especially on stairs and railings',
              'Deck feels bouncy or unstable (structural concern inspect immediately)',
              'Railing posts wobble when pushed',
              'Stain/seal peels within months of application (wood is saturated)',
              'Visible mold or fungus that returns within weeks of cleaning',
            ].map((item, i) => <li key={i} style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>{item}</li>)}
          </ul>

          <h2 style={S.h2}>When to Resurface vs Replace</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ background: '#e8f5e9', borderRadius: 8, padding: '1.5rem' }}>
              <h3 style={{ fontWeight: 700, marginBottom: '0.75rem', color: '#2e7d32' }}>Resurface ✓</h3>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.95rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Frame/joists are solid (poke test screwdriver shouldn&apos;t sink in)</li>
                <li style={{ marginBottom: '0.5rem' }}>Only surface boards are worn, faded, or splintering</li>
                <li style={{ marginBottom: '0.5rem' }}>Footings are stable (no shifting or heaving)</li>
                <li style={{ marginBottom: '0.5rem' }}>Ledger board connection is solid</li>
              </ul>
              <p style={{ fontSize: '0.9rem', marginTop: '0.75rem' }}><strong>Cost:</strong> depends on board area and what the inspection finds. In Loudoun Decks&apos; recent written quotes in Northern Virginia (September–October 2026), a Trex deck resurfacing was $9,020–$12,678.</p>
            </div>
            <div style={{ background: '#ffebee', borderRadius: 8, padding: '1.5rem' }}>
              <h3 style={{ fontWeight: 700, marginBottom: '0.75rem', color: '#c62828' }}>Full Replace ✗</h3>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.95rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Joists are soft, cracked, or visibly rotting</li>
                <li style={{ marginBottom: '0.5rem' }}>Posts are rotting at the base</li>
                <li style={{ marginBottom: '0.5rem' }}>Footings have shifted or heaved</li>
                <li style={{ marginBottom: '0.5rem' }}>Deck feels bouncy or unstable</li>
                <li style={{ marginBottom: '0.5rem' }}>Ledger board is pulling away from house</li>
              </ul>
              <p style={{ fontSize: '0.9rem', marginTop: '0.75rem' }}><strong>Cost:</strong> in the same quotes, new open decks came to $61–$102 per sq ft (most $64–$68).</p>
            </div>
          </div>
          <p style={S.p}>These are quoted prices, not guarantees; the written estimate after the site visit is the only project price. See <Link href="/deck-resurfacing-vs-replacement" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>resurfacing vs replacement</Link>.</p>
          <p style={S.p}><strong>Not sure which you need?</strong> We offer free deck inspections. We&apos;ll check every component and tell you honestly whether resurfacing will work or if a rebuild is the smarter investment.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
          {lifespanFaqs.map((faq) => (
            <details key={faq.q} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/composite-deck-vs-wood-deck-virginia', 'Composite vs Wood Deck'],
              ['/trex-vs-timbertech-vs-azek', 'Trex vs TimberTech vs AZEK'],
              ['/services/deck-resurfacing', 'Deck Resurfacing Services'],
              ['/composite-deck-cost-northern-virginia', 'How Much Does a Deck Cost?'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>

      <SimpleCTA title="Deck Past Its Prime? Free Inspection" buttonText="Get Free Estimate" link="/get-estimate" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-11-06" />

      <RelatedGuides currentPath="/how-long-does-a-composite-deck-last" />

      <ContactHome />
    </>
  );
}
