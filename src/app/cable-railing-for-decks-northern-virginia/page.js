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
  path: '/cable-railing-for-decks-northern-virginia',
  title: 'Cable Railing for Decks (NoVA)',
  description: 'Cable railing $60-$100/linear ft in Northern Virginia. Horizontal vs vertical, VA code requirements & HOA considerations. We install all types.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does cable railing cost for a deck?", acceptedAnswer: { "@type": "Answer", text: "Cable railing in Northern Virginia costs $60-$100 per linear foot installed, or $3,600-$6,000 for a typical 60-foot deck perimeter. Stainless steel cables with aluminum posts are the most common configuration. Premium all-stainless systems run $80-$120/ft." } },
    { "@type": "Question", name: "Is cable railing allowed by Virginia building code?", acceptedAnswer: { "@type": "Answer", text: "Yes cable railing meets Virginia building code if cables are spaced no more than 3 inches apart (center-to-center) and the system passes a 200-lb concentrated load test at the top rail. Posts must be spaced per manufacturer specifications, typically 4-6 feet." } },
    { "@type": "Question", name: "Do HOAs allow cable railing in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "Some do, some don't. Cable railing is a modern aesthetic that some traditional communities restrict. We check your specific HOA guidelines before recommending cable rail. If restricted, aluminum railings offer a similar clean look at lower cost." } },
    { "@type": "Question", name: "Horizontal vs vertical cable railing which is better?", acceptedAnswer: { "@type": "Answer", text: "Horizontal cables are more popular and less expensive, providing clean sightlines. Vertical cables have a more traditional look but cost 10-20% more due to additional cables needed. Both meet Virginia building code. Horizontal is not recommended for homes with small children who might use cables as a ladder." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function CableRailingPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema url="https://ldndecks.com/cable-railing-for-decks-northern-virginia" name="Cable Railing for Decks (NoVA)" description="Cable railing $60-$100/linear ft in Northern Virginia. Horizontal vs vertical, VA code requirements &amp; HOA considerations. We install all types." speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Cable Railing for Decks in Northern Virginia</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Modern, open-view railing costs, code requirements, horizontal vs vertical, HOA guide</p>
        </div>
      </section>
      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p>Cable railing costs <strong>$60–$100/linear ft installed</strong> ($3,600–$6,000 for a typical deck). Meets Virginia code at ≤3&quot; spacing. Best for: elevated decks with scenic views. Check HOA first some restrict cable rail. We install Feeney CableRail, Atlantis Rail, and custom stainless systems.</p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img50.jpeg"
              alt="Premium cable railing system for a Northern Virginia deck"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>

          <h2 style={S.h2}>Cable Railing Options Compared</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Configuration', 'Cost/linear ft', '60 ft Total', 'Look', 'Maintenance'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['SS cable + aluminum posts', '$60–$80', '$3,600–$4,800', 'Modern, clean most popular', 'Re-tension cables yearly'],
                  ['SS cable + wood posts', '$50–$70', '$3,000–$4,200', 'Warm modern blend', 'Re-tension + stain wood posts'],
                  ['SS cable + SS posts (all stainless)', '$80–$120', '$4,800–$7,200', 'Premium contemporary', 'Re-tension only'],
                  ['Vertical cables + aluminum', '$70–$100', '$4,200–$6,000', 'Traditional-modern hybrid', 'Minimal'],
                  ['Cable + composite posts (Trex)', '$70–$90', '$4,200–$5,400', 'Matches composite deck', 'Re-tension only'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400, color: i === 0 && j === 0 ? 'var(--color-primary)' : 'inherit' }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>Horizontal vs Vertical Cable Railing</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ background: '#fff3e0', border: '2px solid var(--color-primary)', borderRadius: 8, padding: '1.25rem' }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 600 }}>Most Popular</p>
              <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Horizontal Cables</h3>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9rem' }}>
                <li style={{ marginBottom: '0.3rem' }}>Cables run left-to-right between posts</li>
                <li style={{ marginBottom: '0.3rem' }}>Maximum view transparency</li>
                <li style={{ marginBottom: '0.3rem' }}>10–20% less expensive than vertical</li>
                <li style={{ marginBottom: '0.3rem' }}>Fewer cables needed per section</li>
                <li style={{ marginBottom: '0.3rem', color: '#c62828' }}>⚠ Not ideal with small children (ladder effect)</li>
              </ul>
            </div>
            <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.25rem' }}>
              <p style={{ fontSize: '0.8rem', color: '#888' }}>Traditional Modern</p>
              <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Vertical Cables</h3>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9rem' }}>
                <li style={{ marginBottom: '0.3rem' }}>Cables run top-to-bottom</li>
                <li style={{ marginBottom: '0.3rem' }}>More traditional appearance</li>
                <li style={{ marginBottom: '0.3rem' }}>Safer for homes with small children</li>
                <li style={{ marginBottom: '0.3rem' }}>No ladder effect</li>
                <li style={{ marginBottom: '0.3rem' }}>More cables per section = higher cost</li>
              </ul>
            </div>
          </div>

          <h2 style={S.h2}>Virginia Building Code for Cable Railing</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Cable spacing:</strong> Maximum 3 inches center-to-center (tighter than the 4-inch baluster rule)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Load rating:</strong> Must pass 200-lb concentrated load test at top rail</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Top rail height:</strong> 36 inches minimum (42 inches in some jurisdictions for decks over 30&quot; above grade)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Post spacing:</strong> Per manufacturer specs, typically 4–6 feet maximum</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Cable tension:</strong> Must maintain spacing under load annual re-tensioning recommended</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Intermediate posts:</strong> May be required for long runs to prevent cable deflection</li>
          </ul>

          <h2 style={S.h2}>HOA Considerations</h2>
          <p style={S.p}>Cable railing is a modern design element that some Northern Virginia HOAs restrict. Before committing:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Communities with traditional architecture guidelines may require standard balusters</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Some HOAs allow cable rail on the back/side of the house but not the front</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Vertical cables are sometimes approved where horizontal is not</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>We check your HOA guidelines before recommending any railing system</li>
          </ul>
          <p style={S.p}><strong>If cable is restricted,</strong> <Link href="/deck-railing-options-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>aluminum railings</Link> offer a similar clean, open look at lower cost and are universally HOA-approved.</p>

          <h2 style={S.h2}>When Cable Railing Makes Sense</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>✅ Elevated deck with a scenic view (trees, water, mountains)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>✅ Modern or contemporary home design</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>✅ No small children (or choose vertical cables)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>✅ HOA approves cable railing</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>❌ Avoid if: small children, traditional HOA, budget under $3,000 for railings</li>
          </ul>

          <h2 style={S.h2}>Brands We Install</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { name: 'Feeney CableRail', desc: 'Industry leader. Quick-Connect fittings, marine-grade stainless. Works with wood, composite, or metal posts.' },
              { name: 'Atlantis Rail', desc: 'Premium all-stainless systems. RailEasy and HandiSwage lines. Multiple post styles.' },
              { name: 'Trex Signature + Cable', desc: 'Cable infill with Trex Signature posts. Matches Trex decking perfectly.' },
            ].map((brand) => (
              <div key={brand.name} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.25rem' }}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '1rem' }}>{brand.name}</h3>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6 }}>{brand.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "How much does cable railing cost?", a: "$60-$100/linear ft installed. Typical 60ft deck: $3,600-$6,000." },
            { q: "Is it code-compliant in Virginia?", a: "Yes at ≤3\" cable spacing and 200-lb load rating. We ensure code compliance on every install." },
            { q: "HOA-approved?", a: "Varies. Some restrict cable rail. We check your HOA first. Aluminum is a good alternative if restricted." },
            { q: "Horizontal or vertical?", a: "Horizontal is more popular and 10-20% cheaper. Vertical is safer for homes with small children." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/deck-railing-options-northern-virginia', 'All Railing Options Compared'],
              ['/how-much-does-a-deck-cost-northern-virginia', 'Deck Cost Guide'],
              ['/hoa-deck-rules-northern-virginia', 'HOA Deck Rules'],
              ['/services/trex-railings', 'Trex Railing Services'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="See Cable Railing Samples at Our Showroom" buttonText="Get Free Estimate" link="/contact" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <ContactHome />
    </>
  );
}
