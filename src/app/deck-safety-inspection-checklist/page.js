import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/deck-safety-inspection-checklist',
  title: 'Deck Safety Inspection Checklist | Is Your Deck Safe? (2026)',
  description: '15-point deck safety inspection checklist. Check for rot, structural issues, railing stability, and code compliance. Free professional inspection available.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How do I know if my deck is safe?", acceptedAnswer: { "@type": "Answer", text: "Inspect these 5 critical areas: 1) Ledger board look for gaps between deck and house, rust stains, or water damage on the wall below. 2) Support posts check bases for rot (poke test with screwdriver). 3) Joists look under the deck for sagging, cracks, or soft wood. 4) Railings push-test every post; they should not wobble. 5) Deck surface check for soft spots, severe splintering, or boards that flex underfoot." } },
    { "@type": "Question", name: "How often should I inspect my deck?", acceptedAnswer: { "@type": "Answer", text: "Inspect twice yearly spring (after winter damage) and fall (before winter). Wood decks over 10 years old should get a professional structural inspection annually. Composite decks need less frequent inspection but should still be checked yearly for hardware and connection points." } },
    { "@type": "Question", name: "What is the most dangerous deck failure?", acceptedAnswer: { "@type": "Answer", text: "Ledger board failure where the deck detaches from the house. This causes the most injuries and fatalities of any deck failure type. It happens when the ledger attachment corrodes, rots, or was improperly installed. Check the ledger connection annually." } },
  ],
};

export default function DeckInspectionPage() {
  const checks = [
    {
      area: 'Ledger Board (CRITICAL)', items: [
        'No gap between deck frame and house wall',
        'Flashing intact above the ledger no water running behind it',
        'No rust stains or water damage on siding below the connection',
        'Lag bolts/screws tight and not corroded',
        'No soft or spongy wood at attachment points',
      ]
    },
    {
      area: 'Support Posts & Footings', items: [
        'Post bases not rotting (poke test screwdriver should not sink in)',
        'Posts are plumb (straight vertical, not leaning)',
        'Concrete footings not cracked or heaving',
        'Post-to-beam connections secure (bolts/brackets tight)',
        'No pest damage at base (carpenter bees, termites)',
      ]
    },
    {
      area: 'Beams & Joists', items: [
        'No visible sagging when viewed from the side',
        'No cracks or splits in beams',
        'Joists not soft or spongy (poke test underneath)',
        'Joist hangers intact and not rusted through',
        'No bounce or flex when walking on the deck',
      ]
    },
    {
      area: 'Railings & Stairs', items: [
        'Railing posts do not wobble (push test with body weight)',
        'Balusters secure none loose or missing',
        'Railing height meets code (36" min, 42" in some areas)',
        'Stair stringers solid (not cracked or pulling away)',
        'Stair treads secure no wobble or flex',
        'Handrail graspable and continuous on all stairs',
      ]
    },
    {
      area: 'Deck Surface', items: [
        'No soft spots (step test no areas feel spongy)',
        'No severe splintering (hazard for bare feet)',
        'Board fasteners not popping up',
        'No excessive warping or cupping',
        'Boards don\'t flex more than 1/4" underfoot between joists',
      ]
    },
  ];

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": "https://ldndecks.com/deck-safety-inspection-checklist#howto",
    "name": "How to Inspect Your Deck for Safety (5-Area Checklist)",
    "description": "Systematic 5-area deck safety inspection covering ledger board, support posts, beams and joists, railings and stairs, and deck surface.",
    "totalTime": "PT1H",
    "step": checks.map((c, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "name": `Inspect ${c.area}`,
      "text": c.items.join('. ') + '.',
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={howToSchema} />
      <WebPageSchema url="https://ldndecks.com/deck-safety-inspection-checklist" name="Deck Safety Inspection Checklist | Is Your Deck Safe? (2026)" description="15-point deck safety inspection checklist. Check for rot, structural issues, railing stability, and code compliance. Free professional inspection available." speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img61.jpeg"
              alt="Professional deck safety inspection in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Deck Safety Inspection Checklist</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>15-point checklist to determine if your deck is safe or if it needs repair or replacement</p>
        </div>
      </section>
      <section style={{ background: '#ffebee', borderLeft: '4px solid #c62828', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, color: '#c62828', marginBottom: '0.5rem' }}>Safety Warning:</p>
          <p>Deck collapses injure thousands of people annually in the US. The #1 cause: <strong>ledger board failure</strong> (deck detaching from the house). If your deck is over 15 years old, has never been inspected, or shows any of the warning signs below get a professional inspection before your next gathering.</p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          {checks.map((section) => (
            <div key={section.area} style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', borderBottom: '2px solid var(--color-primary)', paddingBottom: '0.5rem' }}>{section.area}</h2>
              {section.items.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.2rem', lineHeight: 1.4 }}>☐</span>
                  <p style={{ lineHeight: 1.6 }}>{item}</p>
                </div>
              ))}
            </div>
          ))}

          <div style={{ background: '#fff3e0', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.75rem' }}>How to Score Your Deck</h2>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong style={{ color: '#2e7d32' }}>All items pass:</strong> Your deck is in good shape. Re-inspect in 6 months.</li>
              <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong style={{ color: '#f57c00' }}>1-3 items fail (non-structural):</strong> Schedule repairs before next season.</li>
              <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong style={{ color: '#c62828' }}>Any CRITICAL item fails (ledger, posts, joists, bounce):</strong> Stop using the deck and get a professional inspection immediately.</li>
            </ul>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>When to Call a Professional</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Deck is over 15 years old and has never been professionally inspected</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Any structural concern (ledger, posts, joists, bounce)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Planning to sell your home (inspection issues will come up)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Hosting a large gathering (50+ lbs/sqft loading)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Deck was built without permits (unknown construction quality)</li>
          </ul>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>We offer <strong>free deck inspections</strong>. We check every structural element and give you an honest assessment with photos repair, resurface, or replace. No obligation. <CallLink style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Call (571) 655-7207</CallLink>.</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>
            For the two failure points homeowners ask about most, review our guides to{' '}
            <Link href="/tools/deck-footing-depth-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck footing depth planning</Link>
            {', '}
            <Link href="/education/deck-stair-construction-diagram" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck stair stringers, treads and risers</Link>
            {' '}and{' '}
            <Link href="/education/ledger-board-flashing-deck-attachment-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>ledger board flashing</Link>
            {' '}before deciding whether the deck needs repair, resurfacing or replacement.
            For stairs specifically, use the printable{' '}
            <Link href="/education/deck-stair-safety-inspection-checklist" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck stair safety checklist</Link>
            {', model the layout with the '}
            <Link href="/tools/deck-stair-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Virginia deck stair calculator</Link>
            {', and review the '}
            <Link href="/education/common-deck-stair-inspection-failures-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>common deck stair inspection failures</Link>
            {' '}that often show up during county inspections or home-sale reviews.
          </p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>FAQ</h2>
          {[
            { q: "How do I know if my deck is safe?", a: "Check 5 areas: ledger board (no gaps/rot), posts (poke test), joists (no sag), railings (push test), surface (no soft spots). Any structural failure = stop using it." },
            { q: "How often should I inspect?", a: "Twice yearly (spring + fall). Wood decks over 10 years: get annual professional inspection." },
            { q: "Most dangerous failure type?", a: "Ledger board failure deck detaches from house. Check this connection annually. #1 cause of deck collapse injuries." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '2.5rem 0 1rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/services/deck-inspection', 'Professional Deck Inspection Service'],
              ['/tools/deck-footing-depth-calculator-virginia', 'Deck Footing Depth Calculator Virginia'],
              ['/tools/deck-stair-calculator', 'Virginia Deck Stair Calculator'],
              ['/education/deck-stair-safety-inspection-checklist', 'Deck Stair Safety Checklist PDF'],
              ['/education/common-deck-stair-inspection-failures-virginia', 'Common Deck Stair Inspection Failures'],
              ['/education/deck-stair-construction-diagram', 'Deck Stair Construction Diagram'],
              ['/education/ledger-board-flashing-deck-attachment-virginia', 'Ledger Board Flashing Guide'],
              ['/deck-maintenance-checklist-virginia', 'Deck Maintenance Checklist'],
              ['/how-long-does-a-composite-deck-last', 'How Long Does a Deck Last?'],
              ['/porch-repair-vs-replacement-northern-virginia', 'Repair vs Replacement'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Free Professional Deck Inspection" buttonText="Schedule Inspection" link="/contact" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <ContactHome />
    </>
  );
}
