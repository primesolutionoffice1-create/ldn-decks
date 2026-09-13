import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import TrustBanner from '@/components/TrustBanner';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import DeckCostCalculatorWidget from '@/components/DeckCostCalculatorWidget';
import AboveFoldCTA from '@/components/AboveFoldCTA';
import WebPageSchema from '@/components/WebPageSchema';
import { buildMetadata } from '@/lib/seo';
import { calculateDeckBudget, formatBudget } from '@/lib/deckBudgetModel';

const path = '/composite-deck-cost-northern-virginia';
const updated = '2026-09-13';
const description = 'Plan a Northern Virginia composite deck budget. Compare calculator scenarios, understand exclusions, and prepare a written Trex or TimberTech installation estimate.';
export const metadata = buildMetadata({ path, title: 'How Much Does a Composite Deck Cost in Northern Virginia?', description, image: '/social/composite-deck-cost-northern-virginia-social.png' });

const range = (budget) => `${formatBudget(budget.low)} - ${formatBudget(budget.high)}`;
const example = calculateDeckBudget(400, 3, [0, 1]);
const quickAnswer = `For a 400-square-foot composite deck, this calculator models ${range(example)} with Trex Transcend, one stair flight and composite railings. This is an illustrative budget, not a Northern Virginia market average or a quote. Actual installed cost depends on the measured design, framing, site access, permits and written inclusions.`;

const S = {
  container: { width: '100%', maxWidth: 960, margin: '0 auto', padding: '0 1.25rem', minWidth: 0 },
  section: { padding: '2.75rem 0', borderTop: '1px solid #e5e7eb', scrollMarginTop: '7rem' },
  h2: { fontSize: '1.8rem', lineHeight: 1.3, fontWeight: 700, marginBottom: '1rem', letterSpacing: 0 },
  p: { marginBottom: '1rem', lineHeight: 1.75, color: '#374151' },
  link: { color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3 },
  cell: { padding: '0.85rem', borderBottom: '1px solid #e5e7eb', textAlign: 'left', verticalAlign: 'top', lineHeight: 1.6 },
};

const answers = [
  { id: 'composite-cost-drivers', q: 'What drives the price of a composite deck?', a: 'Deck size is only the starting point. Compare framing and footings, height above grade, stairs and landings, railing length, board collection, trim, demolition, access and electrical work. Two decks with the same floor area can require very different work. Ask each contractor to price the same design and list exclusions.' },
  { id: 'composite-vs-wood-cost', q: 'Is composite decking more expensive than wood?', a: 'Composite can have a higher upfront material cost than pressure-treated wood. Its maintenance requirements differ: capped composite generally avoids routine staining and sealing, but still needs cleaning. Compare the installed scope and the care instructions for the exact board. Maintenance savings depend on your exposure, cleaning choices and ownership period.' },
  { id: 'composite-brand-budget-fit', q: 'Which composite brand is best for budget planning?', a: 'Compare specific board collections rather than brand names alone. Trex offers multiple composite collections; TimberTech offers composite and Advanced PVC decking, also known as AZEK. Ask for the same framing, stairs, railings and finish details in each option so the price difference shows the material choice rather than a change in scope.' },
  { id: 'composite-permit-cost-impact', q: 'Do permits affect composite deck cost?', a: 'Permit-related costs depend on the jurisdiction and work proposed. Drawings, structural design, permit fees and inspection coordination may be separate line items. HOA approval and county approval are separate processes. Confirm requirements with the county for your address, then identify who prepares, submits and pays for each item in the estimate.' },
  { id: 'composite-project-timeline', q: 'How long does a composite deck project take?', a: 'Separate the construction period from the full project schedule. Design decisions, HOA review, permit review, materials, inspections and weather can each affect the start or completion date. Request a schedule showing those dependencies. A contractor should confirm a construction window after the scope and required approvals are clear.' },
];

const faqs = [
  { q: 'How much does a 20x20 composite deck cost in Northern Virginia?', a: `A 20x20 deck is 400 square feet. With Trex Transcend, one stair flight and composite railings selected, the calculator on this page produces ${range(example)}. Those are preset modeling assumptions, not a completed-project price. Confirm demolition, framing, footings, permits, electrical work and cleanup in a property-specific estimate.` },
  { q: 'Does the calculator include railings and stairs?', a: 'Only when you select those add-ons. The size table below shows both the base scenario and the scenario with one stair flight and composite railings. Neither output verifies the length of your railing, stair height, existing structure or local permit fees. Those details need an itemized estimate.' },
  { q: 'Is a manufacturer material estimate the same as an installed quote?', a: 'No. A material estimate covers its listed products and assumptions. The Trex material calculator explicitly separates labor. An installed proposal should also identify demolition, structure, labor, stairs, railings, permits and cleanup as applicable. Compare the included quantities and exclusions before comparing the totals.' },
  { q: 'Can the existing frame reduce the cost?', a: 'Reusing a suitable frame can reduce the work compared with rebuilding it, but eligibility depends on an inspection and the proposed design. New decking does not correct deteriorated framing, inadequate connections or unsuitable joist spacing. Ask for separate resurfacing and replacement scopes when both remain feasible after evaluation.' },
  { q: 'Can you pressure wash composite decking?', a: 'Follow the care guide for the exact product and generation. Trex and TimberTech publish different limits and cleaning procedures; one pressure setting is not a universal rule. Check the approved cleaner, nozzle, distance and technique before starting. Use the manufacturer care links below rather than treating warranty length as a cleaning instruction.' },
  { q: 'Does composite decking guarantee a return at resale?', a: 'No. Resale recovery depends on the property, condition, market and buyer preferences. A manufacturer warranty is also not a guarantee of resale value or the service life of the entire structure. Choose a documented scope you can afford and evaluate maintenance and daily use alongside potential resale appeal.' },
];

const scopeRows = [
  ['Decking', 'Brand, collection, color, board profile, layout, border and fastener system.'],
  ['Existing deck', 'Demolition and disposal; which structural members are retained or replaced.'],
  ['Structure', 'Footings, posts, beams, joists, ledger and flashing work; inspection or design dependencies.'],
  ['Stairs and railings', 'Number of flights and landings, stair width, railing length and specified system.'],
  ['Finishes and electrical', 'Fascia, skirting, lighting, outlets and any separately priced electrical work.'],
  ['Approvals', 'Responsibility for drawings, HOA submission, county permits, fees and inspections.'],
  ['Contract terms', 'Allowances, exclusions, quote expiry, payment schedule, change orders and written warranty terms.'],
];

export default function CompositeDeckCostPage() {
  return (
    <>
      <WebPageSchema dateModified={updated} url={`https://ldndecks.com${path}`} name="How Much Does a Composite Deck Cost in Northern Virginia?" description={description} speakable />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }} />
      <JsonLd data={{
        '@context': 'https://schema.org', '@type': 'Article', '@id': `https://ldndecks.com${path}#article`,
        headline: 'Composite Deck Cost in Northern Virginia: Budget and Quote Guide', description,
        mainEntityOfPage: `https://ldndecks.com${path}`,
        image: 'https://ldndecks.com/showcase/img09.jpeg',
        datePublished: '2026-04-21', dateModified: updated,
        author: { '@type': 'Organization', '@id': 'https://ldndecks.com/#organization', name: 'Loudoun Decks' },
        publisher: { '@id': 'https://ldndecks.com/#organization' },
        inLanguage: 'en-US',
      }} />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '3rem 0' }}>
        <div style={S.container}>
          <h1 style={{ fontSize: '2.4rem', lineHeight: 1.2, fontWeight: 700, marginBottom: '1rem', overflowWrap: 'anywhere' }}>Composite Deck Cost in Northern Virginia</h1>
          <p style={{ lineHeight: 1.7, color: '#e5e7eb', maxWidth: 760 }}>Compare budget scenarios for your deck, understand what a price includes, and prepare a written installation estimate with Loudoun Decks.</p>
        </div>
      </section>
      <TrustBanner />
      <AboveFoldCTA headline="Planning a composite deck in Northern Virginia? Start with a measured scope and a written estimate." estimateHref="/get-estimate" estimateLabel="Request Written Estimate" />

      <section id="composite-cost-answer" data-speakable="true" style={S.section}>
        <div style={S.container}>
          <h2 style={S.h2}>How much should you budget for a composite deck?</h2>
          <p style={S.p}>{quickAnswer}</p>
          <p style={{ ...S.p, fontSize: '0.9rem' }}>By Loudoun Decks Team. Updated September 13, 2026: calculator assumptions, quote inclusions and manufacturer references.</p>
          <nav aria-label="Composite deck cost topics" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {[['#calculator', 'Calculator'], ['#cost-by-size', 'Cost by size'], ['#composite-estimate-routing', 'Compare quotes'], ['#trex-vs-timbertech', 'Materials'], ['#faqs', 'Questions']].map(([href, label]) => <a key={href} href={href} style={S.link}>{label}</a>)}
          </nav>
        </div>
      </section>

      <div style={S.container}>
        <Image src="/showcase/img09.jpeg" alt="Deck and railing detail from the Loudoun Decks showcase" width={960} height={720} sizes="(max-width: 960px) 100vw, 960px" style={{ width: '100%', height: 'auto', borderRadius: 8 }} />
      </div>

      <section id="calculator" style={S.section}>
        <div style={S.container}>
          <h2 style={S.h2}>Composite deck budget calculator</h2>
          <p style={S.p}>Choose a size, material and optional features. The result is a scenario built from preset rates and a planning adjustment. It does not measure your property or establish a supplier price. Railings and stairs are optional inputs; verify all required work before treating any total as a project budget.</p>
          <DeckCostCalculatorWidget defaultMaterial={3} defaultSqft={400} defaultAddons={[0, 1]} ctaLabel="Request a Written Estimate" ctaHref="/get-estimate" />
          <p style={{ ...S.p, marginTop: '1.5rem' }}><Link href="/deck-cost-calculator" style={S.link}>Open the standalone deck calculator</Link>.</p>
        </div>
      </section>

      <section id="cost-by-size" style={{ ...S.section, background: '#f8faf9' }}>
        <div style={S.container}>
          <h2 style={S.h2}>Composite deck cost by size: calculator scenarios</h2>
          <p style={S.p}>Every row uses the calculator&apos;s Trex Transcend assumptions: $45-$65 per square foot, then a 25%-35% adjustment. The second scenario also adds $1,500-$4,000 for one stair flight and $3,000-$8,000 for composite railings before that adjustment. These are arithmetic examples, not surveyed prices or completed Loudoun Decks projects.</p>
          <div style={{ overflowX: 'auto' }} tabIndex={0} role="region" aria-label="Budget scenarios by deck size">
            <table style={{ width: '100%', minWidth: 480, borderCollapse: 'collapse', background: '#fff' }}>
              <caption style={{ textAlign: 'left', paddingBottom: '0.75rem', fontWeight: 600 }}>Same assumptions, different floor areas</caption>
              <thead><tr>{['Floor area', 'Base scenario', 'With one stair flight and composite railings'].map((label) => <th key={label} scope="col" style={S.cell}>{label}</th>)}</tr></thead>
              <tbody>{[200, 300, 400, 500].map((sqft) => <tr key={sqft}><th scope="row" style={S.cell}>{sqft} sq ft</th><td style={S.cell}>{range(calculateDeckBudget(sqft))}</td><td style={S.cell}>{range(calculateDeckBudget(sqft, 3, [0, 1]))}</td></tr>)}</tbody>
            </table>
          </div>
          <p style={{ ...S.p, marginTop: '1rem' }}>Actual railing length, stair height, structural work, demolition, permit fees, electrical work and access are not measured by this table. Ask for them to be included or excluded explicitly in your proposal.</p>
        </div>
      </section>

      <section id="composite-estimate-routing" style={S.section}>
        <div style={S.container}>
          <h2 style={S.h2}>What should a written composite deck quote include?</h2>
          <p style={S.p}>Compare quotes against the same scope: footprint, structure, board collection, railing length, stairs, demolition and approvals. Ask each contractor to identify quantities, allowances and exclusions. A lower total may reflect less work. Resolve missing items and the treatment of hidden damage before comparing payment terms or choosing a contractor.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead><tr><th scope="col" style={S.cell}>Scope item</th><th scope="col" style={S.cell}>Get this in writing</th></tr></thead>
              <tbody>{scopeRows.map(([item, detail]) => <tr key={item}><th scope="row" style={S.cell}>{item}</th><td style={S.cell}>{detail}</td></tr>)}</tbody>
            </table>
          </div>
          <p style={{ ...S.p, marginTop: '1.25rem' }}>Choose the relevant scope: <Link href="/services/deck-replacement" style={S.link}>full replacement</Link>, <Link href="/services/deck-resurfacing" style={S.link}>resurfacing</Link>, <Link href="/services/deck-repair" style={S.link}>structural repair</Link>, or a <Link href="/covered-deck-cost-northern-virginia" style={S.link}>covered deck</Link>. A <Link href="/screened-porch-builder-northern-virginia" style={S.link}>screened porch</Link> adds a different enclosure and roof scope.</p>
        </div>
      </section>

      <section id="trex-vs-timbertech" style={S.section}>
        <div style={S.container}>
          <h2 style={S.h2}>Trex vs TimberTech vs AZEK: compare the exact collection</h2>
          <p style={S.p}>TimberTech includes both composite and Advanced PVC decking, also known as AZEK. Compare the actual collection and board profile with your Trex or Fiberon option. There is no universal brand price premium: the railing, structure, fasteners, availability and finish scope affect the installed total.</p>
          <p style={S.p}>Use the <Link href="/trex-vs-timbertech-vs-azek" style={S.link}>material comparison guide</Link> for product-specific sources, samples and warranty questions. A warranty duration does not establish how long your entire deck will last.</p>
          <p style={S.p}>A manufacturer&apos;s material calculator also has different inclusions from an installation quote. <a href="https://www.trex.com/build-your-deck/planyourdeck/deck-cost-landing/productcalculator/" style={S.link}>Trex&apos;s material calculator</a> states that labor is calculated separately.</p>
        </div>
      </section>

      <section id="tariffs-2026" style={S.section}>
        <div style={S.container}>
          <h2 style={S.h2}>How should you handle material price changes?</h2>
          <p style={S.p}>Ask for the proposal&apos;s expiration date, named product availability, substitution policy and treatment of later price changes. A tariff headline alone does not establish the price of your selected decking or railing. Current supplier pricing and the signed contract determine which costs are included and who carries changes after approval.</p>
        </div>
      </section>

      {answers.map(({ id, q, a }) => <section key={id} id={id} data-speakable="true" style={S.section}><div style={S.container}><h2 style={S.h2}>{q}</h2><p style={S.p}>{a}</p>{id === 'composite-permit-cost-impact' && <p style={S.p}>Check the official <a href="https://www.loudoun.gov/1166/Decks" style={S.link}>Loudoun County deck guidance</a> or <a href="https://www.fairfaxcounty.gov/landdevelopment/when-permit-required" style={S.link}>Fairfax County permit requirements</a> for the property&apos;s jurisdiction.</p>}</div></section>)}

      <section id="financing" style={{ ...S.section, background: '#f8faf9' }}>
        <div style={S.container}>
          <h2 style={S.h2}>Financing your composite deck</h2>
          <p style={S.p}>Financing options may be available for eligible projects, subject to approval and provider terms. Establish the written project scope first. Review the amount financed, APR, term, fees and total repayment before choosing a payment option.</p>
          <p style={S.p}><Link href="/deck-financing" style={S.link}>Deck financing information</Link> and <Link href="/deck-payment-estimator" style={S.link}>payment planning</Link>.</p>
        </div>
      </section>

      <section id="faqs" style={S.section}>
        <div style={S.container}>
          <h2 style={S.h2}>Composite deck cost questions</h2>
          {faqs.map(({ q, a }) => <details key={q} style={{ padding: '1rem 0', borderBottom: '1px solid #e5e7eb' }}><summary style={{ fontWeight: 600, cursor: 'pointer', lineHeight: 1.6 }}>{q}</summary><p style={{ ...S.p, marginTop: '0.75rem' }}>{a}</p></details>)}
          <p style={{ ...S.p, marginTop: '1.5rem' }}>Product care sources: <a href="https://www.trex.com/customer-support/trex-owners/care-and-cleaning/" style={S.link}>Trex care and cleaning</a> and <a href="https://www.timbertech.com/resources/care-cleaning/" style={S.link}>TimberTech care and cleaning</a>. References checked September 13, 2026.</p>
        </div>
      </section>

      <section style={S.section}>
        <div style={S.container}>
          <h2 style={S.h2}>Plan your Northern Virginia project</h2>
          <p style={S.p}>Loudoun Decks works with homeowners in Ashburn, Leesburg, Sterling, Fairfax, Reston, McLean and surrounding Northern Virginia communities. Include your ZIP code, approximate deck size, photos you can take safely, and whether you want a new deck, replacement or resurfacing when you <Link href="/get-estimate" style={S.link}>request an estimate</Link>. Confirm scheduling and service availability for your address with the team.</p>
          <p style={S.p}>Continue with <Link href="/deck-resurfacing-vs-replacement" style={S.link}>resurfacing vs replacement</Link>, <Link href="/deck-lighting-railings-stairs-addon-cost" style={S.link}>railings, stairs and lighting</Link>, or <Link href="/tools/deck-stair-calculator" style={S.link}>stair planning</Link>.</p>
        </div>
      </section>
      <SimpleCTA title="Get a Written Composite Deck Estimate" buttonText="Request Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath={path} category="ai-retrieval" />
      <ContactHome />
    </>
  );
}
