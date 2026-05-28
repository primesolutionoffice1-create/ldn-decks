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
  path: '/winterize-your-deck-northern-virginia',
  title: 'Winterize Your Deck in Northern VA',
  description: 'Protect your deck from Virginia freeze-thaw. 10-step winterization checklist for wood and composite decks. Free inspection.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How do I winterize my deck in Virginia?", acceptedAnswer: { "@type": "Answer", text: "Clean all debris, inspect for damage, apply stain/sealant (wood only), check flashing, move furniture, clear gutters above deck. Do this before first frost (typically late October in Northern Virginia). Composite decks need less just clean debris and inspect hardware." } },
    { "@type": "Question", name: "Can I use salt on my deck in winter?", acceptedAnswer: { "@type": "Answer", text: "No rock salt and calcium chloride can damage both wood and composite decking. Use sand or kitty litter for traction. For ice, use a plastic shovel and let sun/salt-free de-icer do the work." } },
    { "@type": "Question", name: "Should I cover my deck in winter?", acceptedAnswer: { "@type": "Answer", text: "No need to cover the entire deck that traps moisture and promotes mold. Do cover or store outdoor furniture, cushions, and grills. Leave the deck surface exposed for air circulation." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 } };

export default function WinterizeDeckPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema url="https://ldndecks.com/winterize-your-deck-northern-virginia" name="Winterize Your Deck in Northern VA" description="Protect your deck from Virginia freeze-thaw. 10-step winterization checklist for wood and composite decks. Free inspection." speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>How to Winterize Your Deck in Northern Virginia</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>10-step checklist to protect your deck from 50–80 freeze-thaw cycles per winter</p>
        </div>
      </section>
      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>When to do this:</p>
          <p><strong>October before the first frost.</strong> Northern Virginia typically sees first freeze in late October / early November. Complete all steps while temps are above 50°F (needed for stain/sealant to cure).</p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img60.jpeg"
              alt="Protecting a deck from winter weather in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>
          <h2 style={S.h2}>10-Step Winterization Checklist</h2>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            {[
              { step: 'Clear ALL leaves and debris', detail: 'Wet leaves trap moisture against the deck surface, promoting mold and rot over winter. Clear between board gaps with a putty knife or deck gap tool.' },
              { step: 'Deep clean the surface', detail: 'Sweep, then wash with deck cleaner and soft brush. Power wash wood decks at 1,200–1,500 PSI max. Composite: soap and water only.' },
              { step: 'Inspect every board', detail: 'Look for: soft spots (poke with screwdriver), cracks, splits, popped nails/screws, loose boards. Fix before winter damage worsens with freeze-thaw.' },
              { step: 'Check railing posts', detail: 'Push-test every post. Wobbly posts mean water has entered the base connection. Tighten or replace before freeze-thaw makes it worse.' },
              { step: 'Inspect the ledger board', detail: 'Where the deck meets the house is the #1 failure point. Look for gaps, rusted flashing, water stains on the wall below. Seal any gaps with appropriate flashing and sealant.' },
              { step: 'Apply stain/sealant (wood decks only)', detail: 'If water no longer beads on the surface, apply a fresh coat. Needs 48 hours of above-50°F temps to cure. This is the single most important wood deck winterization step.' },
              { step: 'Clean gutters above the deck', detail: 'Clogged gutters pour water directly onto the deck surface all winter. Clean them now.' },
              { step: 'Move or cover furniture', detail: 'Store cushions indoors. Cover metal furniture or move it inside. Leave the deck surface itself uncovered for air circulation.' },
              { step: 'Trim overhanging branches', detail: 'Heavy snow + ice on branches above your deck = potential damage. Trim back anything within 5 feet.' },
              { step: 'Document the condition (photos)', detail: 'Take photos of your deck from 4 angles. If winter damage occurs, you\'ll have before/after documentation for insurance or warranty claims.' },
            ].map((item, i) => (
              <li key={i} style={{ marginBottom: '1.5rem', lineHeight: 1.7 }}>
                <strong style={{ fontSize: '1.05rem' }}>Step {i + 1}: {item.step}</strong>
                <br /><span style={{ color: '#555' }}>{item.detail}</span>
              </li>
            ))}
          </ol>

          <h2 style={S.h2}>Winter Do&apos;s and Don&apos;ts</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ background: '#e8f5e9', borderRadius: 8, padding: '1.5rem' }}>
              <h3 style={{ fontWeight: 700, color: '#2e7d32', marginBottom: '0.75rem' }}>DO</h3>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.95rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Shovel snow with a plastic shovel</li>
                <li style={{ marginBottom: '0.5rem' }}>Use sand or kitty litter for traction</li>
                <li style={{ marginBottom: '0.5rem' }}>Keep the deck surface clear of heavy snow piles</li>
                <li style={{ marginBottom: '0.5rem' }}>Let small amounts of snow melt naturally</li>
                <li style={{ marginBottom: '0.5rem' }}>Inspect after major ice storms</li>
              </ul>
            </div>
            <div style={{ background: '#ffebee', borderRadius: 8, padding: '1.5rem' }}>
              <h3 style={{ fontWeight: 700, color: '#c62828', marginBottom: '0.75rem' }}>DON&apos;T</h3>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.95rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Use rock salt or calcium chloride (damages surface)</li>
                <li style={{ marginBottom: '0.5rem' }}>Use a metal shovel (scratches composite, gouges wood)</li>
                <li style={{ marginBottom: '0.5rem' }}>Cover the entire deck with a tarp (traps moisture)</li>
                <li style={{ marginBottom: '0.5rem' }}>Power wash in freezing temperatures</li>
                <li style={{ marginBottom: '0.5rem' }}>Ignore ice dams at the ledger board</li>
              </ul>
            </div>
          </div>

          <h2 style={S.h2}>Wood vs Composite Winter Differences</h2>
          <p style={S.p}><strong>Wood decks</strong> are vulnerable to freeze-thaw. Water enters the grain, freezes, expands, and cracks boards from the inside. A fresh stain/sealant coat before winter is essential it&apos;s the barrier between your wood and 50–80 freeze-thaw cycles.</p>
          <p style={S.p}><strong>Composite decks</strong> are largely immune to freeze-thaw because the capped surface prevents moisture entry. Winterization is simpler: clear debris, inspect hardware, done. This is the #1 reason homeowners switch to composite. <Link href="/composite-deck-vs-wood-deck-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Read the full comparison</Link>.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "How do I winterize my deck?", a: "Clean debris, inspect for damage, stain/seal (wood only), check flashing, store furniture. Do before first frost (late October in NoVA)." },
            { q: "Can I use salt on my deck?", a: "No damages both wood and composite. Use sand or kitty litter for traction." },
            { q: "Should I cover my deck?", a: "No covers trap moisture. Store furniture, but leave the deck surface exposed for air circulation." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/deck-maintenance-checklist-virginia', 'Full Deck Maintenance Checklist'],
              ['/deck-staining-northern-virginia', 'Deck Staining Services'],
              ['/how-long-does-a-composite-deck-last', 'How Long Does a Composite Deck Last?'],
              ['/services/deck-inspection', 'Deck Inspection Services'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Deck Need Pre-Winter Repairs? Free Inspection" buttonText="Get Free Estimate" link="/contact" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <RelatedGuides currentPath="/winterize-your-deck-northern-virginia" />

      <ContactHome />
    </>
  );
}
