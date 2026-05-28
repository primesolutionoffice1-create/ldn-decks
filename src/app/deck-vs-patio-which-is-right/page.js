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
  path: '/deck-vs-patio-which-is-right',
  title: 'Deck vs Patio: Which Is Right for You?',
  description: 'Deck vs patio cost, maintenance, ROI, and best use compared for Northern Virginia homeowners. We build both. Free consultation.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is a deck or patio cheaper to build?", acceptedAnswer: { "@type": "Answer", text: "Patios are typically 20-40% cheaper. A 300 sqft paver patio costs $8,000-$18,000 vs $15,000-$35,000 for a composite deck of the same size in Northern Virginia." } },
    { "@type": "Question", name: "Does a deck or patio add more value to a home?", acceptedAnswer: { "@type": "Answer", text: "Decks typically have higher ROI (65-80%) than patios (50-70%) because they're perceived as more usable living space. However, ground-level patios work better for certain lot types." } },
    { "@type": "Question", name: "Can you build both a deck and patio?", acceptedAnswer: { "@type": "Answer", text: "Yes combo builds are very popular. A raised deck for dining connected to a ground-level patio with fire pit is one of our most-requested designs. Costs 30-40% less than two separate structures." } },
    { "@type": "Question", name: "Which lasts longer a deck or patio?", acceptedAnswer: { "@type": "Answer", text: "A paver patio can last 25-50 years with minimal maintenance. A composite deck lasts 25-50 years. Pressure-treated wood decks last 10-15 years. For longevity, both composite decks and pavers are excellent." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function DeckVsPatioPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema url="https://ldndecks.com/deck-vs-patio-which-is-right" name="Deck vs Patio: Which Is Right for You?" description="Deck vs patio cost, maintenance, ROI, and best use compared for Northern Virginia homeowners. We build both. Free consultation." speakable />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Deck vs Patio: Which Is Right for Your Home?</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Cost, maintenance, ROI, and best use compared for Northern Virginia homeowners</p>
        </div>
      </section>

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p><strong>Decks</strong> are better for elevated areas, walkout basements, and dining/entertaining spaces. <strong>Patios</strong> are better for flat lots, fire pit areas, and budget-conscious projects. Many homeowners combine both for the best of both worlds.</p>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img32.jpeg"
              alt="Custom deck and patio combination build in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>

          <h2 style={S.h2}>Side-by-Side Comparison</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Factor', 'Deck (Composite)', 'Patio (Pavers)'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Cost (300 sqft)', '$15k–$35k', '$8k–$18k'],
                  ['Lifespan', '25–50 years', '25–50 years'],
                  ['Maintenance', 'Occasional wash', 'Re-leveling every 5–10 yrs, weed control'],
                  ['Best for', 'Elevated areas, dining, entertaining', 'Flat lots, fire pits, pool surrounds'],
                  ['Resale ROI', '65–80%', '50–70%'],
                  ['Permit required', 'Yes (if >30" above grade)', 'Usually no (ground level)'],
                  ['Winter use', 'Limited (open), 9-10 months (screened)', 'Limited without fire feature'],
                  ['Customization', 'Multi-level, railings, lighting, screens', 'Patterns, borders, built-in seating'],
                  ['Drainage', 'Built-in (elevated)', 'Requires grading/slope planning'],
                  ['Construction time', '2–4 weeks', '1–3 weeks'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{row[0]}</td>
                    <td style={S.td}>{row[1]}</td>
                    <td style={S.td}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>When a Deck Is the Better Choice</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Sloped or uneven yard:</strong> Decks are elevated on posts, so they work on any grade. Patios require extensive grading on slopes.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Walkout basement:</strong> A deck creates a seamless transition from the main floor to the yard, with stairs down to grade.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Dining and entertaining:</strong> Decks feel like an extension of your interior closer to the kitchen, higher vantage point.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Screened option desired:</strong> Screened porches are built on deck framing. You can&apos;t screen a ground-level patio without walls.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Higher resale ROI:</strong> Decks return 65–80% vs 50–70% for patios in Northern Virginia.</li>
          </ul>

          <h2 style={S.h2}>When a Patio Wins</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Flat, level yard:</strong> No need for an elevated structure pavers sit directly on a gravel base.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Fire pit area:</strong> Ground-level is safer and more natural for fire features. You can&apos;t put a fire pit on a composite deck.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Pool surround:</strong> Pavers handle water better and stay cooler than most deck surfaces.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Budget priority:</strong> 20–40% less than a comparable deck. Great value for the space.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>No permit needed:</strong> Ground-level patios usually don&apos;t require a building permit in Virginia counties.</li>
          </ul>

          <h2 style={S.h2}>The Combo Build (Best of Both)</h2>
          <p style={S.p}>One of our most popular designs: a <strong>raised composite deck</strong> connected to a <strong>ground-level paver patio</strong> with stairs between them. The deck serves as the dining/entertaining space near the house, while the patio provides a fire pit area or outdoor lounge at grade.</p>
          <p style={S.p}><strong>Cost:</strong> A combo build typically costs 30–40% less than building two separate structures because you share the site prep, access, and construction mobilization.</p>
          <p style={S.p}><strong>Example:</strong> 300 sqft Trex deck + 200 sqft paver patio with fire pit in Centreville: $42,000 total (vs $55,000+ for two separate projects).</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Cost Comparison in Northern Virginia</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Project', '200 sqft', '300 sqft', '500 sqft'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['PT Wood Deck', '$4k–$7k', '$6k–$10k', '$9k–$17k'],
                  ['Composite Deck', '$8k–$15k', '$12k–$23k', '$18k–$37k'],
                  ['Paver Patio', '$5k–$10k', '$8k–$16k', '$12k–$25k'],
                  ['Flagstone Patio', '$6k–$14k', '$10k–$20k', '$16k–$30k'],
                  ['Stamped Concrete', '$3k–$7k', '$5k–$10k', '$8k–$16k'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
          {[
            { q: "Is a deck or patio cheaper?", a: "Patios are 20-40% cheaper. A 300 sqft paver patio: $8k-$16k vs $12k-$23k for composite deck." },
            { q: "Which adds more home value?", a: "Decks (65-80% ROI) typically beat patios (50-70%) because they're perceived as more usable living space." },
            { q: "Can you build both?", a: "Yes combo builds are very popular and cost 30-40% less than two separate structures." },
            { q: "Which lasts longer?", a: "Both composite decks and paver patios last 25-50 years. PT wood decks last only 10-15 years." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/composite-deck-cost-northern-virginia', 'How Much Does a Deck Cost?'],
              ['/services/patios', 'Our Patio Building Services'],
              ['/does-a-deck-add-value-to-your-home', 'Does a Deck Add Value?'],
              ['/composite-deck-vs-wood-deck-virginia', 'Composite vs Wood Deck'],
              ['/outdoor-living-northern-virginia', 'Outdoor Living in Northern Virginia'],
              ['/deck-builder-northern-virginia', 'Deck Builder in Northern Virginia'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (5.0★ Google) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
          </ul>
        </div>
      </article>

      <SimpleCTA title="Not Sure? We Build Both Free Consultation" buttonText="Get Free Estimate" link="/contact" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <ContactHome />
    </>
  );
}