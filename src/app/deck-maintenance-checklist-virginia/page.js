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
  path: '/deck-maintenance-checklist-virginia',
  title: 'Deck Maintenance Checklist for Virginia',
  description: 'Seasonal deck maintenance checklist for Virginia climate. Spring cleaning, summer care, fall prep, winter protection. Composite vs wood maintenance compared.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How often should I maintain my deck in Virginia?", acceptedAnswer: { "@type": "Answer", text: "Wood decks: clean and inspect twice yearly (spring + fall), stain/seal every 1-2 years. Composite decks: clean once or twice yearly with soap and water no staining or sealing needed. Virginia's freeze-thaw and humidity require more frequent attention than milder climates." } },
    { "@type": "Question", name: "What is the best time to clean a deck in Virginia?", acceptedAnswer: { "@type": "Answer", text: "Early spring (March-April) after winter debris and before pollen season. Second cleaning in fall (October) to remove leaves and prep for winter. Avoid cleaning in freezing temps or extreme heat." } },
    { "@type": "Question", name: "Do composite decks need any maintenance?", acceptedAnswer: { "@type": "Answer", text: "Minimal. Clean with soap and water 1-2 times per year. Remove leaves/debris that can trap moisture. No staining, sealing, or sanding ever needed. Occasional mold from organic debris can be removed with composite deck cleaner." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, h3: { fontSize: '1.2rem', fontWeight: 600, margin: '1.5rem 0 0.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 } };

export default function DeckMaintenancePage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema url="https://ldndecks.com/deck-maintenance-checklist-virginia" name="Deck Maintenance Checklist for Virginia" description="Seasonal deck maintenance checklist for Virginia climate. Spring cleaning, summer care, fall prep, winter protection. Composite vs wood maintenance compared." speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Deck Maintenance Checklist for Virginia</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Seasonal guide: what to do in spring, summer, fall, and winter to keep your deck lasting decades</p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img60.jpeg"
              alt="Deck maintenance and care in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>

          <h2 style={S.h2}>Spring Checklist (March–April)</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            {[
              '✅ Remove all debris leaves, branches, pine needles that accumulated over winter',
              '✅ Inspect every board for winter damage cracks, splits, soft spots, popped nails',
              '✅ Check railing posts for wobble (push test they shouldn\'t move)',
              '✅ Inspect ledger board connection (where deck meets house) look for gaps or rot',
              '✅ Check under-deck for pest activity (carpenter bees, termites, wasps)',
              '✅ Clean with deck wash or soap + water and a soft brush',
              '✅ Power wash (wood decks only 1,200-1,500 PSI max, fan tip)',
              '✅ For wood decks: apply stain/sealant if water no longer beads on surface',
              '✅ For composite decks: spot-clean any mold with Corte Clean or brand-recommended cleaner',
            ].map((item, i) => <li key={i} style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>{item}</li>)}
          </ul>

          <h2 style={S.h2}>Summer Checklist (May–August)</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            {[
              '✅ Move planters periodically trapped moisture breeds mold underneath',
              '✅ Clean grill drippings immediately grease stains set permanently on wood',
              '✅ Sweep weekly if trees overhang (pollen, sap, leaves)',
              '✅ Check for ant trails and wasp nests in joist bays',
              '✅ Tighten any loose screws/fasteners (heat expansion loosens hardware)',
              '✅ Rinse off sunscreen/insect spray spills they can stain composite',
            ].map((item, i) => <li key={i} style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>{item}</li>)}
          </ul>

          <h2 style={S.h2}>Fall Checklist (September–November)</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            {[
              '✅ Clear ALL leaves wet leaves trap moisture and cause mold/rot (biggest fall risk)',
              '✅ Clean between board gaps where debris collects (use a putty knife or gap cleaner)',
              '✅ Clean gutters above the deck overflowing gutters pour water onto deck surface',
              '✅ Apply wood brightener + fresh stain coat if skipped in spring (last chance before winter)',
              '✅ Check flashing where deck meets house water intrusion here causes the most expensive damage',
              '✅ Store or cover outdoor furniture to reduce winter debris accumulation',
            ].map((item, i) => <li key={i} style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>{item}</li>)}
          </ul>

          <h2 style={S.h2}>Winter Checklist (December–February)</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            {[
              '✅ Shovel snow with a plastic shovel (metal edges scratch composite and gouge wood)',
              '✅ Do NOT use rock salt/calcium chloride on composite decks (can discolor surface)',
              '✅ Use sand or kitty litter for traction instead of salt',
              '✅ Keep snow from piling against the house/ledger board area',
              '✅ After major snow/ice events, inspect for structural stress (sagging, shifting)',
              '✅ Do NOT pressure wash in freezing temperatures water in crevices will freeze and expand',
            ].map((item, i) => <li key={i} style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>{item}</li>)}
          </ul>

          <h2 style={S.h2}>Wood vs Composite Maintenance Compared</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Task', 'Wood Deck', 'Composite Deck'].map(h => <th key={h} style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Cleaning', '2x/year + power wash', '1-2x/year soap & water'],
                  ['Staining/sealing', 'Every 1-2 years ($600-$2,000)', 'Never'],
                  ['Sanding', 'Every 2-3 years', 'Never'],
                  ['Board replacement', 'As needed (rot, cracks)', 'Extremely rare'],
                  ['Annual cost', '$300-$800', '$0-$50'],
                  ['Time per year', '8-15 hours', '1-2 hours'],
                  ['15-year maintenance total', '$6,000-$12,000+', '$200-$750'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee', fontWeight: 600 }}>{row[0]}</td>
                    <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>{row[1]}</td>
                    <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee', fontWeight: 600, color: 'var(--color-primary)' }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={S.p}>Tired of the maintenance cycle? <Link href="/services/deck-resurfacing" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck resurfacing</Link> replaces your wood boards with composite keep the frame, eliminate maintenance forever.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>When to Call a Pro</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Soft/spongy boards</strong> potential structural rot, needs inspection</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Wobbly railings</strong> safety hazard, may need post replacement</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Deck feels bouncy</strong> possible joist/beam failure, get inspected immediately</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Ledger board pulling away from house</strong> critical safety issue, call today</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Mold returns within weeks of cleaning</strong> may need board replacement or resurfacing</li>
          </ul>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "How often should I maintain my deck?", a: "Wood: clean + inspect 2x/year, stain every 1-2 years. Composite: clean 1-2x/year with soap and water. No staining ever." },
            { q: "Best time to clean?", a: "Early spring (March-April) and fall (October). Avoid freezing temps and extreme heat." },
            { q: "Do composite decks need maintenance?", a: "Minimal soap and water 1-2x/year. Remove leaves/debris. No staining, sealing, or sanding." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/deck-staining-northern-virginia', 'Deck Staining Services'],
              ['/services/deck-washing', 'Deck Washing Services'],
              ['/how-long-does-a-composite-deck-last', 'How Long Does a Composite Deck Last?'],
              ['/composite-deck-vs-wood-deck-virginia', 'Composite vs Wood'],
              ['/services/deck-inspection', 'Deck Inspection Services'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Deck Need More Than Maintenance? Free Inspection" buttonText="Get Free Estimate" link="/contact" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <ContactHome />
    </>
  );
}
