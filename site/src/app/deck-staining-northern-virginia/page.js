import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/deck-staining-northern-virginia',
  title: 'Deck Staining in Northern Virginia',
  description: 'Professional deck staining in Northern Virginia. $3-$7/sqft. Protects against Virginia freeze-thaw, UV, and humidity. Free estimate. Call (571) 655-7207.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does deck staining cost in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "Professional deck staining in Northern Virginia costs $3-$7 per square foot, or $600-$2,100 for a typical 200-300 sqft deck. Price depends on deck condition, stain type, and prep work required." } },
    { "@type": "Question", name: "How often should you stain a deck in Virginia?", acceptedAnswer: { "@type": "Answer", text: "Every 1-2 years for high-traffic decks, every 2-3 years for moderate use. Virginia's freeze-thaw cycles and UV exposure break down stain faster than milder climates. South-facing decks need more frequent treatment." } },
    { "@type": "Question", name: "What's the best time to stain a deck in Virginia?", acceptedAnswer: { "@type": "Answer", text: "Late spring (April-May) or early fall (September-October) when temperatures are 50-85°F with low humidity and no rain forecast for 48 hours. Avoid summer heat (stain dries too fast) and winter cold (won't cure)." } },
    { "@type": "Question", name: "Should I stain or replace my old deck?", acceptedAnswer: { "@type": "Answer", text: "Stain if: boards are structurally sound, just faded or gray. Replace if: boards are soft, splintering badly, or rotting. If you're spending $2,000+ on staining an old deck, consider resurfacing with composite the last stain job you'll ever need." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, h3: { fontSize: '1.2rem', fontWeight: 600, margin: '1.5rem 0 0.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function DeckStainingPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Professional Deck Staining &amp; Sealing in Northern Virginia</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Protect your wood deck from Virginia&apos;s freeze-thaw, UV, and humidity</p>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img60.jpeg"
              alt="Professional deck staining and wood protection in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>

          <h2 style={S.h2}>Why Your Wood Deck Needs Staining in Virginia</h2>
          <p style={S.p}>Virginia&apos;s climate is brutal on untreated wood. Without staining and sealing:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Freeze-thaw (50-80 cycles/winter):</strong> Water penetrates wood grain, freezes, expands, splits boards from the inside</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>UV damage (200+ sunny days/year):</strong> Bleaches wood to gray within 12 months, breaks down lignin fibers</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Humidity (70-90% in summer):</strong> Promotes mold, mildew, and rot especially on shaded sections</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Result without staining:</strong> A new PT wood deck deteriorates visibly within 2 years and structurally within 5-8 years</li>
          </ul>

          <h2 style={S.h2}>Our Staining Process</h2>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            {[
              { step: 'Inspection', detail: 'We check every board, joist connection, and fastener. If structural issues are found, we address them before staining (no point staining a deck that needs repair).' },
              { step: 'Power washing', detail: 'Professional-grade pressure washing removes dirt, mildew, old stain, and gray oxidation. We use the right PSI too much damages wood fibers.' },
              { step: 'Sanding (if needed)', detail: 'Rough or splintering boards are sanded smooth. This also opens the wood grain to accept stain more evenly.' },
              { step: 'Brightener application', detail: 'Wood brightener restores the natural color and opens pores for maximum stain penetration. This step is what separates a professional job from DIY.' },
              { step: 'Stain application', detail: 'We apply premium exterior stain (typically 2 coats) using professional sprayers and back-brushing for even coverage. We use UV-resistant, waterproof formulations rated for Virginia climate.' },
            ].map((item, i) => (
              <li key={i} style={{ marginBottom: '1.25rem', lineHeight: 1.7 }}>
                <strong>Step {i + 1}: {item.step}</strong>
                <br /><span style={{ color: '#555' }}>{item.detail}</span>
              </li>
            ))}
          </ol>

          <h2 style={S.h2}>Cost of Deck Staining in Northern Virginia</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Deck Size', 'Basic (transparent)', 'Semi-Transparent', 'Solid Stain'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['150 sqft', '$450–$750', '$600–$900', '$750–$1,050'],
                  ['200 sqft', '$600–$1,000', '$800–$1,200', '$1,000–$1,400'],
                  ['300 sqft', '$900–$1,500', '$1,200–$1,800', '$1,500–$2,100'],
                  ['400 sqft', '$1,200–$2,000', '$1,600–$2,400', '$2,000–$2,800'],
                  ['500+ sqft', '$1,500–$2,500', '$2,000–$3,000', '$2,500–$3,500'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#888', fontStyle: 'italic', marginBottom: '2rem' }}>
            Includes power washing, prep, brightener, and 2-coat stain application. Add 20-30% for decks needing significant repair or old stain stripping.
          </p>

          <h2 style={S.h2}>How Often to Restain in Virginia</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Stain Type', 'Frequency in Virginia', 'Best For'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Transparent', 'Every 1–2 years', 'Shows full wood grain, natural look needs most maintenance'],
                  ['Semi-transparent', 'Every 2–3 years', 'Best balance shows grain with more UV/water protection'],
                  ['Solid stain', 'Every 3–4 years', 'Most protection, hides grain looks like paint, can peel'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>Signs Your Deck Needs Restaining Now</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            {[
              'Water droplets no longer bead on the surface they absorb immediately',
              'Wood has turned gray or silver (UV damage)',
              'Visible mold or green discoloration that returns within weeks of cleaning',
              'Stain is peeling, flaking, or wearing through in traffic areas',
              'Wood feels rough or is starting to splinter',
            ].map((item, i) => <li key={i} style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>{item}</li>)}
          </ul>

          <div style={{ background: '#e8f5e9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontWeight: 700, color: '#2e7d32', marginBottom: '0.5rem' }}>Tired of Restaining Every 2 Years?</h3>
            <p style={{ lineHeight: 1.7 }}>Consider <Link href="/services/deck-resurfacing" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck resurfacing</Link> with composite. We remove your old wood boards, keep the frame, and install Trex or TimberTech decking that never needs staining. It&apos;s the last stain job you&apos;ll ever need and over 10+ years, it&apos;s cheaper than repeated staining. <Link href="/composite-deck-vs-wood-deck-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>See the full cost comparison</Link>.</p>
          </div>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
          {[
            { q: "How much does deck staining cost?", a: "$3-$7/sqft, or $600-$2,100 for a typical 200-300 sqft deck including power washing and prep." },
            { q: "How often should I stain in Virginia?", a: "Every 1-3 years depending on stain type, sun exposure, and traffic. Semi-transparent every 2-3 years is the sweet spot." },
            { q: "Best time to stain?", a: "Late spring (April-May) or early fall (September-October). 50-85°F, low humidity, no rain for 48 hours." },
            { q: "Stain or replace?", a: "Stain if boards are sound but faded. Replace/resurface if boards are soft, rotting, or splintering badly." },
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
              ['/services/deck-resurfacing', 'Deck Resurfacing (Upgrade to Composite)'],
              ['/how-long-does-a-composite-deck-last', 'How Long Does a Composite Deck Last?'],
              ['/composite-deck-vs-wood-deck-virginia', 'Composite vs Wood Full Comparison'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>

      <SimpleCTA title="Protect Your Deck Before Winter" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </>
  );
}
