import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/porch-repair-vs-replacement-northern-virginia',
  title: 'Porch Repair vs Replacement',
  description: 'Repair your porch for $2,000-$8,000 or replace for $25,000-$70,000. When each makes sense, inspection checklist, and cost comparison for Northern Virginia.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Should I repair or replace my porch?", acceptedAnswer: { "@type": "Answer", text: "Repair if: damage is limited to surface boards, screens, or trim structure is solid. Replace if: posts are rotting at the base, roof is sagging, foundation is shifting, or framing is soft/spongy. When repair costs exceed 40-50% of replacement cost, replacement is the better long-term investment." } },
    { "@type": "Question", name: "How much does porch repair cost in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "Porch repairs in Northern Virginia: screen replacement $300-$1,200, board replacement $500-$3,000, post repair $800-$2,500, railing repair $500-$2,000. Most repairs fall between $1,500 and $8,000." } },
    { "@type": "Question", name: "How much does a new porch cost in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "A new screened porch in Northern Virginia costs $25,000-$70,000+ depending on size, materials, and features. Open porches: $15,000-$40,000. Full porch replacement including demolition of the old structure adds $2,000-$5,000." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function PorchRepairPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Porch Repair vs Replacement: Which Saves You Money?</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>When to repair, when to replace, and how to tell the difference Northern Virginia guide</p>
        </div>
      </section>
      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Rule of Thumb:</p>
          <p><strong>Repair</strong> when damage is cosmetic/surface-level and structure is sound ($1,500–$8,000). <strong>Replace</strong> when repair costs exceed 40–50% of replacement cost, or when structural elements (posts, beams, roof) are failing ($25,000–$70,000+). We offer free inspections to determine which you need.</p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img61.jpeg"
              alt="Assessing porch repair vs replacement for a Northern Virginia home"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>
          <h2 style={S.h2}>The &apos;Pick-Test&apos; How to Check Your Porch&apos;s Structural Integrity</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ background: '#e8f5e9', borderRadius: 8, padding: '1.5rem' }}>
              <h3 style={{ fontWeight: 700, color: '#2e7d32', marginBottom: '0.75rem' }}>REPAIR ✓ ($1,500–$8,000)</h3>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.95rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Torn or damaged screens (replace panels)</li>
                <li style={{ marginBottom: '0.5rem' }}>Worn/faded floor boards but frame is solid</li>
                <li style={{ marginBottom: '0.5rem' }}>Loose railing posts (tighten or reinforce)</li>
                <li style={{ marginBottom: '0.5rem' }}>Minor roof leak (patch flashing/shingles)</li>
                <li style={{ marginBottom: '0.5rem' }}>Cosmetic trim/fascia damage</li>
                <li style={{ marginBottom: '0.5rem' }}>Ceiling fan or lighting replacement</li>
                <li style={{ marginBottom: '0.5rem' }}>Paint/stain refresh</li>
              </ul>
            </div>
            <div style={{ background: '#ffebee', borderRadius: 8, padding: '1.5rem' }}>
              <h3 style={{ fontWeight: 700, color: '#c62828', marginBottom: '0.75rem' }}>REPLACE ✗ ($25,000–$70,000+)</h3>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.95rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Posts rotting at base (structural failure risk)</li>
                <li style={{ marginBottom: '0.5rem' }}>Roof sagging or rafters cracked</li>
                <li style={{ marginBottom: '0.5rem' }}>Foundation/footings shifting or heaving</li>
                <li style={{ marginBottom: '0.5rem' }}>Floor joists soft/spongy (poke test fails)</li>
                <li style={{ marginBottom: '0.5rem' }}>Ledger board pulling from house</li>
                <li style={{ marginBottom: '0.5rem' }}>Multiple systems failing simultaneously</li>
                <li style={{ marginBottom: '0.5rem' }}>Porch doesn&apos;t meet current building code</li>
              </ul>
            </div>
          </div>

          <h2 style={S.h2}>Common Porch Repair Costs</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Repair', 'Cost Range', 'Timeline'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Screen panel replacement (per panel)', '$150–$400', '1 day'],
                  ['Full screen re-screening', '$800–$2,500', '1–2 days'],
                  ['Floor board replacement (partial)', '$500–$3,000', '1–3 days'],
                  ['Post repair/reinforcement', '$800–$2,500', '1–2 days'],
                  ['Railing repair/replacement', '$500–$2,000', '1–2 days'],
                  ['Roof leak repair', '$500–$2,000', '1 day'],
                  ['Ceiling repair/paint', '$400–$1,500', '1–2 days'],
                  ['Floor staining/refinishing', '$600–$2,000', '2–3 days'],
                  ['EZE-Breeze panel replacement', '$300–$800/panel', '1 day'],
                  ['Structural joist sister (reinforce)', '$1,500–$4,000', '2–3 days'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>The 40% Rule</h2>
          <p style={S.p}><strong>When repair costs exceed 40–50% of full replacement cost, replace.</strong> Here&apos;s why:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>You&apos;re already paying for labor, permits, and mobilization the incremental cost for new materials isn&apos;t much more</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>A repaired 20-year-old porch will need more repairs soon you&apos;re chasing a declining asset</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>A new porch comes with a full 2-year workmanship warranty + manufacturer material warranties</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>New construction brings the porch up to current building code (required at sale anyway)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Composite materials mean the new porch needs near-zero maintenance going forward</li>
          </ul>
          <p style={S.p}><strong>Example:</strong> If a new screened porch costs $45,000 and repairs are quoted at $15,000+ (33%), strongly consider replacement. At $20,000+ (44%), replacement is almost certainly the better investment.</p>

          <h2 style={S.h2}>Free Porch Inspection</h2>
          <p style={S.p}>Not sure if your porch needs repair or replacement? We offer <strong>free on-site inspections</strong>. We check every structural element posts, beams, joists, ledger, roof, footings and give you an honest assessment with photos. No obligation, no pressure.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "Should I repair or replace my porch?", a: "Repair if damage is surface-level and structure is sound. Replace if posts are rotting, roof is sagging, or repair costs exceed 40-50% of replacement." },
            { q: "How much does porch repair cost?", a: "Most repairs: $1,500-$8,000. Screen replacement: $300-$2,500. Board replacement: $500-$3,000. Post repair: $800-$2,500." },
            { q: "How much for a new porch?", a: "Screened porch: $25k-$70k. Open porch: $15k-$40k. Add $2k-$5k for demolition of old structure." },
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
              ['/services/porches', 'Porch Building Services'],
              ['/services/deck-inspection', 'Deck & Porch Inspection'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Not Sure? Free Porch Inspection" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </>
  );
}
