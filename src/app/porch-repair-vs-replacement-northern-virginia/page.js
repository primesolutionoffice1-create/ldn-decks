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
import { QUOTE_LABEL } from '@/lib/quotedPrices';

const PORCH_RANGE = 'A roofed or screened porch with an attached open deck (120–236 sq ft of deck) was about $77,000–$112,500 in recent quotes.';
const REPAIR_RULE = 'Repair when the damage is limited to surface boards, screens, or trim and the structure is solid. Replace when posts are rotting at the base, the roof is sagging, the foundation is shifting, or the framing is soft. When the repair quote is a large share of a full replacement quote for the same porch, replacement is usually the better long-term investment. The written estimate compares both scopes.';

export const metadata = buildMetadata({
  path: '/porch-repair-vs-replacement-northern-virginia',
  title: 'Porch Repair vs Replacement: Costs & Inspection in NoVA',
  description: 'Repair your porch for a written estimate or replace for a written estimate. When each makes sense, inspection checklist, and cost comparison for Northern Virginia.',
  image: '/social/porch-repair-vs-replacement-social.png',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Should I repair or replace my porch?", acceptedAnswer: { "@type": "Answer", text: REPAIR_RULE } },
    { "@type": "Question", name: "How much does porch repair cost in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "Porch repair is priced in a written estimate after an inspection. Screen, board, post, and railing scope each change the quote. Compare that repair quote with a replacement quote for the same porch." } },
    { "@type": "Question", name: "How much does a new porch cost in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: `${QUOTE_LABEL}: ${PORCH_RANGE} Those are quoted prices, not a guarantee and not a repair total. Open porches and demolition of an old structure are separate scope. The written estimate after a site visit is the only project price.` } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function PorchRepairPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema dateModified="2026-11-01" url="https://ldndecks.com/porch-repair-vs-replacement-northern-virginia" name="Porch Repair vs Replacement" description="Repair your porch for a written estimate or replace for a written estimate. When each makes sense, inspection checklist, and cost comparison for Northern Virginia." speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Porch Repair vs Replacement: Which Saves You Money?</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>When to repair, when to replace, and how to tell the difference Northern Virginia guide</p>
        </div>
      </section>
      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Rule of Thumb:</p>
          <p><strong>Repair</strong> when damage is cosmetic or on the surface and the structure is sound. <strong>Replace</strong> when the repair quote is a large share of a replacement quote for the same porch, or when posts, beams, or the roof are failing. {QUOTE_LABEL}: {PORCH_RANGE} Those are quoted prices, not a repair total. We offer free inspections to compare both scopes.</p>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ background: '#e8f5e9', borderRadius: 8, padding: '1.5rem' }}>
              <h3 style={{ fontWeight: 700, color: '#2e7d32', marginBottom: '0.75rem' }}>REPAIR ✓ (a written estimate)</h3>
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
              <h3 style={{ fontWeight: 700, color: '#c62828', marginBottom: '0.75rem' }}>REPLACE ✗ (a written estimate)</h3>
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
                  ['Screen panel replacement (per panel)', 'a written estimate', '1 day'],
                  ['Full screen re-screening', 'a written estimate', '1–2 days'],
                  ['Floor board replacement (partial)', 'a written estimate', '1–3 days'],
                  ['Post repair/reinforcement', 'a written estimate', '1–2 days'],
                  ['Railing repair/replacement', 'a written estimate', '1–2 days'],
                  ['Roof leak repair', 'a written estimate', '1 day'],
                  ['Ceiling repair/paint', 'a written estimate', '1–2 days'],
                  ['Floor staining/refinishing', 'a written estimate', '2–3 days'],
                  ['EZE-Breeze panel replacement', 'a written estimate/panel', '1 day'],
                  ['Structural joist sister (reinforce)', 'a written estimate', '2–3 days'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>When repair is a large share of replacement</h2>
          <p style={S.p}><strong>When the repair quote is a large share of a full replacement quote for the same porch, replace.</strong> Here&apos;s why:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>You&apos;re already paying for labor, permits, and mobilization the incremental cost for new materials isn&apos;t much more</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>A repaired 20-year-old porch will need more repairs soon you&apos;re chasing a declining asset</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>A new porch comes with written workmanship warranty terms plus manufacturer material warranty information</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>New construction brings the porch up to current building code (required at sale anyway)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Composite materials mean the new porch needs near-zero maintenance going forward</li>
          </ul>
          <p style={S.p}><strong>Example:</strong> {QUOTE_LABEL}: {PORCH_RANGE} Those are quoted prices, not a repair total and not a guarantee. If the repair quote is a small share of a new porch quote, repair can be the right scope. If the repair quote is close to the replacement quote, replacement is usually the better investment. The written estimate shows both numbers for the porch. Last reviewed November 1, 2026.</p>

          <h2 style={S.h2}>Free Porch Inspection</h2>
          <p style={S.p}>Not sure if your porch needs repair or replacement? We offer <strong>free on-site inspections</strong>. We check every structural element posts, beams, joists, ledger, roof, footings and give you an honest assessment with photos. No obligation, no pressure. If the issue is tied to the deck structure, stairs, railings, or ledger connection rather than the porch roof system, start with our <Link href="/services/deck-repair" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck repair service</Link>, compare stair parts with the <Link href="/education/deck-stair-construction-diagram" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck stair construction diagram</Link>, and review the <Link href="/education/ledger-board-flashing-deck-attachment-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>ledger board flashing guide</Link>.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "Should I repair or replace my porch?", a: REPAIR_RULE },
            { q: "How much does porch repair cost?", a: "Porch repair is priced in a written estimate after an inspection. Screen, board, post, and railing scope each change the quote. Compare that repair quote with a replacement quote for the same porch." },
            { q: "How much for a new porch?", a: `${QUOTE_LABEL}: ${PORCH_RANGE} Those are quoted prices, not a repair total and not a guarantee. Open porches and demolition of an old structure are separate scope. The written estimate after a site visit is the only project price.` },
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
              ['/services/deck-repair', 'Deck Repair Service'],
              ['/education/deck-stair-construction-diagram', 'Deck Stair Construction Diagram'],
              ['/education/ledger-board-flashing-deck-attachment-virginia', 'Ledger Board Flashing Guide'],
              ['/services/porches', 'Porch Building Services'],
              ['/services/deck-inspection', 'Deck & Porch Inspection'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Not Sure? Free Porch Inspection" buttonText="Get Free Estimate" link="/get-estimate" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-11-01" />

      <RelatedGuides currentPath="/porch-repair-vs-replacement-northern-virginia" />

      <ContactHome />
    </>
  );
}
