import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';

export const metadata = buildMetadata({
  path: '/deck-enclosure-ideas-northern-virginia',
  title: 'Deck Enclosure Ideas (Northern VA)',
  description: 'Enclose your existing deck: screens ($8k-$20k), EZE-Breeze 3-season ($15k-$35k), full sunroom ($40k-$80k+). Extend outdoor season to 9-10 months.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does it cost to enclose a deck?", acceptedAnswer: { "@type": "Answer", text: "Basic screen enclosure: $8,000-$20,000. EZE-Breeze 3-season room: $15,000-$35,000. Full sunroom conversion: $40,000-$80,000+. Cost depends on existing deck condition, size, and enclosure type." } },
    { "@type": "Question", name: "Can I enclose my existing deck?", acceptedAnswer: { "@type": "Answer", text: "Usually yes if the deck framing and footings can support the added weight of posts, roof structure, and wall panels. We inspect the existing structure first. Some decks need footing upgrades or joist reinforcement before enclosing." } },
    { "@type": "Question", name: "What is the difference between a screened porch and a 3-season room?", acceptedAnswer: { "@type": "Answer", text: "A screened porch uses mesh screens keeps bugs out but doesn't block wind or cold. A 3-season room uses EZE-Breeze vinyl panels that slide open like screens in summer and close for wind/rain protection in spring and fall, extending usable season from 6 months to 9-10 months." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function DeckEnclosurePage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema url="https://ldndecks.com/deck-enclosure-ideas-northern-virginia" name="Deck Enclosure Ideas (Northern VA)" description="Enclose your existing deck: screens ($8k-$20k), EZE-Breeze 3-season ($15k-$35k), full sunroom ($40k-$80k+). Extend outdoor season to 9-10 months." speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Deck Enclosure Ideas for Northern Virginia</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Turn your open deck into a screened porch, 3-season room, or sunroom costs and options compared</p>
        </div>
      </section>
      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p>Three enclosure levels: <strong>Screen enclosure</strong> ($8k–$20k) bugs out, breeze in. <strong>EZE-Breeze 3-season</strong> ($15k–$35k) our most popular, extends season to 9–10 months. <strong>Full sunroom</strong> ($40k–$80k+) year-round, climate-controlled.</p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img23.jpeg"
              alt="Premium deck enclosure project by LDN Decks in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>

          <h2 style={S.h2}>Enclosure Options Compared</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Feature', 'Screen Enclosure', 'EZE-Breeze 3-Season', 'Full Sunroom'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Cost (250 sqft)', '$8k–$20k', '$15k–$35k', '$40k–$80k+'],
                  ['Usable months', '6–7 (Apr–Oct)', '9–10 (Mar–Nov)', '12 (year-round)'],
                  ['Bug protection', 'Full', 'Full', 'Full'],
                  ['Wind/rain protection', 'Minimal', 'Good (panels close)', 'Complete'],
                  ['Temperature control', 'None', 'Passive (no HVAC)', 'Full HVAC'],
                  ['Airflow', 'Excellent', 'Adjustable (panels slide)', 'Controlled'],
                  ['Permit required', 'Usually yes', 'Yes', 'Yes + more complex'],
                  ['Construction time', '1–2 weeks', '2–3 weeks', '4–8 weeks'],
                  ['Best for', 'Bug-free dining', 'Extended 3-season living', 'Year-round room addition'],
                  ['ROI at resale', '65–75%', '70–85%', '50–70%'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : (j === 2 ? 600 : 400), color: j === 2 ? 'var(--color-primary)' : 'inherit' }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>Screen Enclosure ($8,000–$20,000)</h2>
          <p style={S.p}>The simplest and most affordable option. We add posts, a roof structure, and fiberglass screen panels to your existing deck. Keeps bugs out entirely while maintaining open-air airflow. Best for homeowners who mainly want mosquito protection for dining and relaxing.</p>
          <p style={S.p}><strong>Includes:</strong> Treated or aluminum posts, roof framing with shingles or metal, fiberglass screen panels, screen door, ceiling fan rough-in.</p>

          <h2 style={S.h2}>EZE-Breeze 3-Season Room ($15,000–$35,000)</h2>
          <p style={S.p}><strong>Our most popular enclosure.</strong> EZE-Breeze vinyl-glazed panels replace traditional screens. They slide up like double-hung windows for full airflow in summer, then close tight for wind and rain protection in spring and fall. Extends your outdoor season from 6 months to 9–10 months.</p>
          <p style={S.p}><strong>Includes:</strong> Everything in screen enclosure + EZE-Breeze 4-track vertical sliding panels, tongue-and-groove ceiling, recessed lighting, multiple electrical outlets. Optional: ceiling heater ($500–$1,500) for chilly evenings.</p>
          <p style={S.p}><strong>Why it&apos;s the sweet spot:</strong> 70–85% ROI at resale (highest of any enclosure type), 40–60% cheaper than a full sunroom, and most Northern Virginia buyers specifically look for EZE-Breeze porches in listings.</p>

          <h2 style={S.h2}>Full Sunroom Conversion ($40,000–$80,000+)</h2>
          <p style={S.p}>A permanent, climate-controlled room addition. Insulated walls, real windows (double/triple-pane), HVAC connection, and finished interior. Functions as a year-round living space essentially adding a room to your home.</p>
          <p style={S.p}><strong>Includes:</strong> Insulated framing, real windows, HVAC ductwork, electrical panel connection, insulated roof, drywall or finished ceiling, flooring (tile, LVP, or hardwood).</p>
          <p style={S.p}><strong>Consideration:</strong> Full sunrooms have lower ROI (50–70%) because the cost is high relative to the appraised value increase. They make financial sense when you need the living space not as a pure investment play.</p>

          <h2 style={S.h2}>Can Your Existing Deck Handle an Enclosure?</h2>
          <p style={S.p}>Most decks built in the last 15 years can support a screen or EZE-Breeze enclosure if:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Footings are adequate size (may need upsizing for roof load)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Joists and beams are in good condition (no rot, no sag)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Ledger board connection is solid</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Posts can accommodate roof attachment</li>
          </ul>
          <p style={S.p}>We inspect everything before quoting. If structural upgrades are needed (joist sistering, footing enlargement), we include them in the estimate. <strong>Pro tip:</strong> If you&apos;re building a new deck and think you might want to enclose it later, tell us now we&apos;ll oversize the footings and framing at minimal extra cost.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "How much to enclose a deck?", a: "Screen: $8k-$20k. EZE-Breeze 3-season: $15k-$35k. Full sunroom: $40k-$80k+." },
            { q: "Can I enclose my existing deck?", a: "Usually yes if framing supports the weight. We inspect first. Some need footing or joist upgrades." },
            { q: "Screen porch vs 3-season room?", a: "Screens keep bugs out but not wind/cold. EZE-Breeze panels close for wind/rain protection, extending use to 9-10 months. Most popular choice in NoVA." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/screened-porch-cost-northern-virginia', 'Screened Porch Cost Guide'],
              ['/porch-vs-deck-which-should-you-build', 'Porch vs Deck'],
              ['/porch-repair-vs-replacement-northern-virginia', 'Porch Repair vs Replacement'],
              ['/services/porches/screened-porch', 'Screened Porch Services'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Enclose Your Deck Free Design Consultation" buttonText="Get Free Estimate" link="/contact" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <ContactHome />
    </>
  );
}
