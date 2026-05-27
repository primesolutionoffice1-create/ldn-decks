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
  path: '/deck-lighting-ideas-northern-virginia',
  title: 'Deck Lighting Ideas (Northern VA)',
  description: '8 deck lighting options: post caps, stair risers, under-rail, string lights, recessed, landscape. Costs from $500-$5,000. Transform your deck for evening use.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does deck lighting cost?", acceptedAnswer: { "@type": "Answer", text: "Deck lighting in Northern Virginia costs $500-$5,000+ depending on type and scope. Post cap lights: $50-$100 each. Stair riser lights: $40-$80 each. Under-rail LED strips: $300-$800. A full lighting package for a 300 sqft deck typically runs $1,500-$3,500." } },
    { "@type": "Question", name: "What is the best lighting for a deck?", acceptedAnswer: { "@type": "Answer", text: "LED post cap lights + stair riser lights are the best combination for most decks. They provide safety lighting on stairs, ambient glow from posts, and integrate cleanly with composite railing systems like Trex Signature. Add under-rail LED strips for a premium look." } },
    { "@type": "Question", name: "Can you add lighting to an existing deck?", acceptedAnswer: { "@type": "Answer", text: "Yes. Post cap lights and solar options require no wiring. Hardwired stair lights and under-rail strips require running low-voltage wire under the deck boards easier on composite decks where boards can be partially removed and reinstalled." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function DeckLightingPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema url="https://ldndecks.com/deck-lighting-ideas-northern-virginia" name="Deck Lighting Ideas (Northern VA)" description="8 deck lighting options: post caps, stair risers, under-rail, string lights, recessed, landscape. Costs from $500-$5,000. Transform your deck for evening use." speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img50.jpeg"
              alt="Premium deck lighting installation by LDN Decks in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>Deck Lighting Ideas for Northern Virginia</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>8 lighting options with costs transform your deck for evening entertaining</p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={S.h2}>8 Deck Lighting Options Compared</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Type', 'Cost', 'Power', 'Best For', 'Difficulty'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Post cap lights', '$50–$100 each', 'Low voltage / Solar', 'Ambient glow, railing accents', 'Easy (retrofit OK)'],
                  ['Stair riser lights', '$40–$80 each', 'Low voltage', 'Safety, code compliance', 'Medium (wiring needed)'],
                  ['Under-rail LED strips', '$300–$800 total', 'Low voltage', 'Ambient, modern look', 'Medium'],
                  ['Recessed deck lights (in-board)', '$60–$120 each', 'Low voltage', 'Flush, minimal, pathway', 'Hard (install with deck)'],
                  ['String lights / bistro lights', '$30–$150', 'Plug-in / Solar', 'Casual, festive, warm vibe', 'Easy (DIY)'],
                  ['Landscape spotlights (up-light)', '$80–$200 each', 'Low voltage', 'Drama, architectural accent', 'Medium (ground install)'],
                  ['Under-deck soffit lights', '$500–$1,500', 'Line voltage', 'Light area below elevated deck', 'Hard (electrical permit)'],
                  ['Smart LED (color changing)', '$100–$300 each', 'Low voltage / WiFi', 'Party mode, holiday colors', 'Medium'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>Our Recommended Lighting Packages</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { tier: 'Essential', price: '$500–$1,200', items: '4 post cap lights + 6 stair riser lights', desc: 'Safety + ambiance. Covers code requirements and looks great. Best for budget-conscious builds.' },
              { tier: 'Popular', price: '$1,500–$3,000', items: 'Post caps + stair risers + under-rail LED strips', desc: 'The full package most clients choose. Warm ambient glow from every angle. Dramatic at night.' },
              { tier: 'Premium', price: '$3,000–$5,000+', items: 'All above + recessed deck lights + landscape spots + smart controls', desc: 'Total transformation. Dimmable, color-programmable, controlled from your phone. Showpiece-level deck.' },
            ].map((pkg) => (
              <div key={pkg.tier} style={{ background: pkg.tier === 'Popular' ? '#fff3e0' : '#f9f9f9', border: pkg.tier === 'Popular' ? '2px solid var(--color-primary)' : '1px solid #eee', borderRadius: 8, padding: '1.25rem' }}>
                <p style={{ fontSize: '0.8rem', color: pkg.tier === 'Popular' ? 'var(--color-primary)' : '#888', fontWeight: 600 }}>{pkg.tier === 'Popular' ? 'Most Popular' : pkg.tier}</p>
                <p style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>{pkg.price}</p>
                <p style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>{pkg.items}</p>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6 }}>{pkg.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={S.h2}>Why Deck Lighting Matters</h2>
          <p style={S.p}><strong>Safety:</strong> Virginia building code requires adequate lighting on deck stairs. Stair riser lights satisfy this while looking far better than a floodlight.</p>
          <p style={S.p}><strong>Extended use:</strong> Northern Virginia has 7–8 months of comfortable evening weather. Lighting lets you use your deck after sunset effectively doubling your hours of enjoyment.</p>
          <p style={S.p}><strong>Home value:</strong> Lighting is one of the top 3 features buyers notice on a deck (along with materials and railings). It signals a finished, professional build.</p>
          <p style={S.p}><strong>Security:</strong> A well-lit deck deters intruders and illuminates your backyard entry points.</p>

          <h2 style={S.h2}>Add Lighting to an Existing Deck?</h2>
          <p style={S.p}><strong>Easiest:</strong> Post cap lights (solar no wiring) and string lights (plug into outdoor outlet). DIY-friendly.</p>
          <p style={S.p}><strong>Medium:</strong> Low-voltage stair risers and under-rail strips. Requires running wire under deck boards easier on composite decks where boards lift out.</p>
          <p style={S.p}><strong>Hardest:</strong> Recessed in-board lights and under-deck soffits. Best installed during initial construction. Retrofit requires removing and reinstalling deck boards.</p>
          <p style={S.p}><strong>Our recommendation:</strong> If building a new deck, include lighting in the initial design it costs 30–50% less than retrofitting later because wiring runs during framing before boards go on.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
          {[
            { q: "How much does deck lighting cost?", a: "Basic (post caps + stairs): $500-$1,200. Popular package with LED strips: $1,500-$3,000. Premium with smart controls: $3,000-$5,000+." },
            { q: "What's the best deck lighting?", a: "Post cap lights + stair risers + under-rail LED strips our most-requested combo. Warm white (2700K) looks best on composite." },
            { q: "Can I add lights to an existing deck?", a: "Yes. Solar post caps need no wiring. Hardwired options require running low-voltage wire easier on composite decks." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/services/deck-stair-lighting', 'Deck Stair Lighting Services'],
              ['/deck-railing-options-northern-virginia', 'Deck Railing Options'],
              ['/composite-deck-cost-northern-virginia', 'Deck Cost Guide'],
              ['/trex-vs-timbertech-vs-azek', 'Trex vs TimberTech vs AZEK'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (5.0★ Google) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
          </ul>
        </div>
      </article>
      <SimpleCTA title="Include Lighting in Your Deck Design" buttonText="Get Free Estimate" link="/contact" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <ContactHome />
    </>
  );
}
