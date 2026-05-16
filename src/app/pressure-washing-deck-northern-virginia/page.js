import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/pressure-washing-deck-northern-virginia',
  title: 'Deck Pressure Washing in Northern Virginia | $150-$500 | LDN Decks',
  description: 'Pro deck pressure washing in Northern Virginia. $150-$500 for most decks. Removes mold, mildew, oxidation. Safe PSI for wood & composite.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does deck pressure washing cost in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "Professional deck pressure washing costs $150-$500 in Northern Virginia depending on deck size. Small (under 200 sqft): $150-$250. Medium (200-400 sqft): $250-$400. Large (400+ sqft): $400-$500+. Includes prep, washing, and rinse." } },
    { "@type": "Question", name: "Can you pressure wash a composite deck?", acceptedAnswer: { "@type": "Answer", text: "Yes, but with caution. Composite decks should only be washed at 1,500 PSI max with a fan tip (40-degree). Higher pressure or direct nozzle can damage the cap surface. We recommend soft washing (low pressure + cleaning solution) for composite safer and equally effective." } },
    { "@type": "Question", name: "How often should I pressure wash my deck in Virginia?", acceptedAnswer: { "@type": "Answer", text: "Wood decks: wash annually (spring recommended) before staining. Composite decks: wash once or twice yearly to remove pollen, mold from organic debris. Virginia's humidity makes annual washing important for both materials." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function PressureWashingDeckPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Deck Pressure Washing in Northern Virginia</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Remove mold, mildew &amp; gray oxidation safe washing for wood &amp; composite decks</p>
        </div>
      </section>
      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p>Deck pressure washing: <strong>$150–$500</strong> for most decks. Removes mold, mildew, pollen, gray oxidation. Wood decks: 1,200-1,500 PSI max with fan tip. Composite: soft wash (low pressure + cleaner) recommended. Annual washing in Virginia&apos;s humid climate.</p>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img44.jpeg"
              alt="Professional pressure washing of a deck in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>
          <h2 style={S.h2}>Pressure Washing vs. Soft Washing What Your Deck Needs</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Deck Size', 'Wash Only', 'Wash + Brightener', 'Wash + Stain Prep'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Under 200 sqft', '$150–$250', '$200–$300', '$250–$350'],
                  ['200–300 sqft', '$250–$350', '$300–$400', '$350–$500'],
                  ['300–400 sqft', '$300–$400', '$350–$450', '$400–$550'],
                  ['400–500 sqft', '$350–$450', '$400–$500', '$500–$650'],
                  ['500+ sqft', '$400–$500+', '$500–$600+', '$600–$750+'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#888', fontStyle: 'italic' }}>Wash + Brightener recommended before staining. Wash + Stain Prep includes sanding rough spots.</p>

          <h2 style={S.h2}>Wood vs Composite Different Washing Approaches</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem' }}>
              <h3 style={{ fontWeight: 700, marginBottom: '0.75rem' }}>Wood Deck Washing</h3>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.95rem' }}>
                <li style={{ marginBottom: '0.4rem' }}>PSI: 1,200–1,500 max (higher damages grain)</li>
                <li style={{ marginBottom: '0.4rem' }}>Tip: 40-degree fan (never zero-degree)</li>
                <li style={{ marginBottom: '0.4rem' }}>Direction: with the grain, 12–18 inches from surface</li>
                <li style={{ marginBottom: '0.4rem' }}>Follow with wood brightener (oxalic acid)</li>
                <li style={{ marginBottom: '0.4rem' }}>Dry 48–72 hours before staining</li>
                <li style={{ marginBottom: '0.4rem' }}>Frequency: annually (spring before stain)</li>
              </ul>
            </div>
            <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem' }}>
              <h3 style={{ fontWeight: 700, marginBottom: '0.75rem' }}>Composite Deck Washing</h3>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.95rem' }}>
                <li style={{ marginBottom: '0.4rem' }}>Preferred: soft wash (low pressure + cleaner)</li>
                <li style={{ marginBottom: '0.4rem' }}>Max PSI if needed: 1,500 with 40-degree tip</li>
                <li style={{ marginBottom: '0.4rem' }}>Never use zero-degree or turbo nozzle</li>
                <li style={{ marginBottom: '0.4rem' }}>Use brand-recommended cleaner (Corte Clean, etc.)</li>
                <li style={{ marginBottom: '0.4rem' }}>No brightener needed (composite doesn&apos;t gray)</li>
                <li style={{ marginBottom: '0.4rem' }}>Frequency: 1–2x yearly (pollen + mold removal)</li>
              </ul>
            </div>
          </div>

          <h2 style={S.h2}>What We Remove</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Green mold/algae:</strong> Common on shaded sections Virginia humidity breeds it fast</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Black mildew spots:</strong> From organic debris (leaves, pollen) sitting on the surface</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Gray oxidation (wood only):</strong> UV damage turns wood silver/gray brightener restores natural color</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Pollen buildup:</strong> Virginia spring pollen coats everything yellow film needs removal</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Ground-in dirt:</strong> Foot traffic, pet paws, mud tracked from yard</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Stain/sealer residue:</strong> Old failing stain needs removal before re-staining</li>
          </ul>

          <h2 style={S.h2}>Combine with Other Services</h2>
          <p style={S.p}><strong>Wash + Stain:</strong> The most common combo we wash, brighten, dry 48 hrs, then stain. <Link href="/deck-staining-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>See staining services &amp; pricing</Link>.</p>
          <p style={S.p}><strong>Wash + Inspection:</strong> While washing, we inspect every board, joist connection, and fastener. If we find structural issues, we&apos;ll tell you before any damage spreads. <Link href="/deck-safety-inspection-checklist" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Safety inspection checklist</Link>.</p>
          <p style={S.p}><strong>Deck + House + Concrete:</strong> Bundle deck washing with house siding and driveway/sidewalk pressure washing for package pricing (save 10-15%).</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "Cost to pressure wash a deck?", a: "$150-$500 depending on size. Medium deck (200-400 sqft): $250-$400." },
            { q: "Can you pressure wash composite?", a: "Yes soft wash preferred (low pressure + cleaner). Max 1,500 PSI with fan tip. Never zero-degree nozzle." },
            { q: "How often in Virginia?", a: "Wood: annually (spring before stain). Composite: 1-2x yearly. Virginia humidity makes annual washing important." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/services/deck-washing', 'Deck Washing Services'],
              ['/deck-staining-northern-virginia', 'Deck Staining Services'],
              ['/deck-maintenance-checklist-virginia', 'Maintenance Checklist'],
              ['/services/house-siding-washing', 'House Siding Washing'],
              ['/services/concrete-washing', 'Concrete Washing'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Book Your Deck Washing" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </>
  );
}
