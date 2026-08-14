import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ArticleSchema from '@/components/ArticleSchema';
import WebPageSchema from '@/components/WebPageSchema';
import SimpleCTA from '@/components/SimpleCTA';
import TrustBanner from '@/components/TrustBanner';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import NamedAuthor from '@/components/NamedAuthor';
import AboveFoldCTA from '@/components/AboveFoldCTA';
import PlanningUpdate from '@/components/PlanningUpdate';
import GeoAnswerBlock from '@/components/GeoAnswerBlock';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/deck-permit-hoa-cost-loudoun-county',
  title: 'Deck Permit & HOA Costs in Loudoun County: 2026 Budget Guide',
  description: 'Source-checked Loudoun County deck permit and HOA cost planning: LandMARC fees, ARC review, engineering drawings, inspections, and total budget impact.',
  image: '/social/deck-permit-hoa-cost-loudoun-county-social.png',
});

const PATH = '/deck-permit-hoa-cost-loudoun-county';

const costRows = [
  ['Loudoun County typical deck permit', 'Verify current county fee', 'Standard processing when county-typical', 'County fees are invoiced at intake and paid before review'],
  ['Covered deck or non-typical deck permit', 'Higher review budget', 'Longer if plan review/trades apply', 'Roof, electrical, hot tub, spa, or grading scope can add permits'],
  ['HOA application fee', 'Verify with the association', 'Submit with the complete ARC packet', 'Fees and deposits vary by community'],
  ['HOA architectural review', 'Verify with the association', 'Meeting schedule varies', 'HOA approval is separate from county permitting'],
  ['Engineering drawings (if required)', '$500–$1,500', '1–2 weeks', 'Covered decks, complex framing, or sloped sites'],
  ['Permit revisions (if needed)', 'Case-specific', '1–2 weeks', 'Avoided by aligning HOA aesthetics with permit drawings'],
  ['Inspections (3 standard)', 'Included in permit workflow', 'Schedule one work day ahead', 'Footings → framing → final; framing/final may combine if accessible'],
];

const faqs = [
  {
    q: 'How much does a deck permit cost in Loudoun County?',
    a: 'Use Loudoun County\'s official deck page and fee schedule before filing. The county says fees are calculated from the application details, invoiced at intake, and must be paid before review starts. For homeowner budgeting, permit, HOA, engineering, and revision contingency are usually planned together instead of treated as separate surprises.',
  },
  {
    q: 'How much does HOA approval cost in Loudoun?',
    a: 'HOA application fees, review fees, and refundable construction deposits vary by association and can change. Confirm the current amount directly with the community manager or ARC/DRB before submitting. HOA approval is separate from the Loudoun County permit fee.',
  },
  {
    q: 'How long does HOA approval take in Loudoun County?',
    a: 'Timing depends on the association\'s meeting calendar, submission deadline, packet completeness, and revision requests. Ask the community manager for the current ARC/DRB schedule before committing to a construction start date.',
  },
  {
    q: 'Do I need a permit for a small deck in Loudoun?',
    a: 'Check Loudoun County\'s current deck guidance before assuming an exemption. The county deck page states that deck projects use building and zoning permits, and projects inside incorporated towns may follow a different review path. HOA approval is separate and does not replace county review.',
  },
  {
    q: 'Should permit and HOA costs be included in deck financing?',
    a: 'If those items are part of the financed contract amount, include the verified permit, HOA, engineering, and revision allowances in the project budget. Confirm which costs are included in the written estimate and which are paid directly to the county, association, or engineer.',
  },
  {
    q: 'Who handles the permit and HOA submission?',
    a: 'Responsibility should be stated in the written project scope. Depending on the contract and association rules, the contractor may prepare permit drawings and HOA materials while the homeowner signs, pays fees, or submits owner-required forms. Confirm the exact division of responsibility before work begins.',
  },
];

const officialReferences = [
  {
    name: 'Loudoun County deck permit guidance',
    href: 'https://www.loudoun.gov/1166/Decks',
    description: 'Official deck requirements, fee language, inspection sequence, rejection reasons, and LandMARC inspection scheduling.',
  },
  {
    name: 'Loudoun County fee schedules and payment options',
    href: 'https://www.loudoun.gov/5126/Fee-Schedules',
    description: 'Official fee schedule and payment guidance, including intake invoicing and payment-before-review language.',
  },
  {
    name: 'Loudoun County residential and commercial construction permits',
    href: 'https://www.loudoun.gov/4265/Residential-and-Commercial-Construction-',
    description: 'Official permit application, plan review, contractor license, grading, well/septic, and LandMARC submission context.',
  },
  {
    name: 'Loudoun County LandMARC permit updates',
    href: 'https://www.loudoun.gov/Blog.aspx?CID=88',
    description: 'Official processing updates, including county-typical deck timeline context and dashboard routing.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `https://ldndecks.com${PATH}#faq`,
  url: `https://ldndecks.com${PATH}`,
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const officialReferenceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `https://ldndecks.com${PATH}#official-source-references`,
  name: 'Official Loudoun County permit and fee references for deck and HOA budget planning',
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  numberOfItems: officialReferences.length,
  itemListElement: officialReferences.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'WebPage',
      name: item.name,
      url: item.href,
      description: item.description,
    },
  })),
};

const S = {
  h2: { fontSize: '1.85rem', fontWeight: 800, marginBottom: '1.1rem', marginTop: '2.5rem', lineHeight: 1.2 },
  h3: { fontSize: '1.2rem', fontWeight: 700, margin: '1.5rem 0 0.6rem' },
  p: { marginBottom: '1rem', lineHeight: 1.75, fontSize: '1rem' },
  th: { padding: '0.85rem', textAlign: 'left', borderBottom: '2px solid #ddd', fontSize: '0.92rem', background: '#f5f5f5' },
  td: { padding: '0.85rem', borderBottom: '1px solid #eee', fontSize: '0.92rem' },
  container: { maxWidth: 960, margin: '0 auto', padding: '0 1.5rem' },
};

export default function DeckPermitHoaCostLoudounPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={officialReferenceSchema} />
      <ArticleSchema
        title="Deck Permit & HOA Costs in Loudoun County: 2026 Budget Guide"
        description="Source-checked Loudoun County deck permit and HOA cost planning: LandMARC fee timing, ARC review, engineering drawings, inspections, and total project amount impact."
        path={PATH}
        image="/showcase/img17.jpeg"
        datePublished="2026-05-27"
        dateModified="2026-08-13"
      />
      <WebPageSchema dateModified="2026-08-13" url={`https://ldndecks.com${PATH}`} name="Deck Permit &amp; HOA Costs in Loudoun County: 2026 Budget Guide" description="Source-checked Loudoun County deck permit and HOA cost planning: LandMARC fees, ARC review, engineering drawings, inspections, and total budget impact." speakable />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={S.container}>
          <p style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Permits &amp; HOA &middot; Loudoun County
          </p>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.15 }}>
            Deck Permit and HOA Costs in Loudoun County: Budget Planning Guide
          </h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Real 2026 costs for Loudoun County deck permits and HOA architectural review — what to budget, how long it
            takes, and how it shapes your monthly payment.
          </p>
        </div>
      </section>

      <TrustBanner />

      <AboveFoldCTA
        headline="Want an HOA-ready written estimate that includes permit and architectural review costs?"
        estimateHref="/get-estimate"
        estimateLabel="Request an HOA-Ready Estimate"
      />

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }} className="quick-answer">
        <div style={S.container}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p data-speakable>
            In Loudoun County, verify the current permit fee on the official county deck and fee-schedule pages before
            filing. County fees are calculated from application details, invoiced at intake, and paid before review
            begins. HOA fees, deposits, and review timing must be confirmed with the individual association. Engineering
            costs are project-specific when a covered deck, complex framing, slope, hot tub, spa, electrical, or
            non-typical detail changes the submission.
          </p>
        </div>
      </section>

      <PlanningUpdate
        market="Loudoun County permit and HOA budget planning"
        title="August 2026 Source Check"
        notes={[
          'Loudoun County deck guidance says fees are calculated from the application details and additional equipment can require separate permits.',
          'The county fee page says permitting fees are invoiced at intake and must be paid before review starts.',
          'Official deck inspections are footing, framing, and final; framing and final may combine only when framing and mechanical attachments are at least 42 inches above grade.',
          'The LandMARC update notes county-typical deck timelines remain on standard processing even while some zoning-review permit types have extended timelines.',
        ]}
        links={[
          { href: 'https://www.loudoun.gov/1166/Decks', label: 'Official deck guidance' },
          { href: 'https://www.loudoun.gov/5126/Fee-Schedules', label: 'Fee schedules' },
          { href: 'https://www.loudoun.gov/Blog.aspx?CID=88', label: 'LandMARC updates' },
        ]}
      />

      <GeoAnswerBlock
        question="How should Loudoun homeowners budget for deck permit and HOA approval?"
        answer="Budget permit, HOA, engineering, and inspection-readiness together. Loudoun County controls building and zoning permit review through LandMARC and official fee schedules, while HOA architectural review separately controls materials, colors, railings, screening, stairs, and neighborhood appearance. A permit-ready written estimate should identify the county path, HOA packet needs, drawing assumptions, equipment permits, footing/framing/final inspection sequence, and whether stair, ledger, lighting, hot tub, spa, or covered-deck scope changes the budget."
        facts={[
          'Primary county path: Loudoun County deck guidance and LandMARC',
          'Primary HOA path: community ARC/DRB architectural review',
          'Conversion path: HOA-ready written estimate with permit scope, structural details, and inspection sequencing',
        ]}
        links={[
          { href: '/deck-permit-loudoun-county-virginia', label: 'Loudoun permit guide' },
          { href: '/loudoun-county-hoa-deck-rules', label: 'Loudoun HOA rules' },
          { href: '/education/ledger-board-flashing-deck-attachment-virginia', label: 'Ledger flashing' },
          { href: '/education/deck-stair-code-rise-run-virginia', label: 'Stair code' },
          { href: '/get-estimate', label: 'Get a written estimate' },
        ]}
      />

      <article style={{ padding: '3.5rem 0' }}>
        <div style={S.container}>
          <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/showcase/img17.jpeg"
              alt="Loudoun County deck permit application package"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 960px) 100vw, 960px"
              quality={70}
              priority
            />
          </div>

          <h2 style={{ ...S.h2, marginTop: 0 }}>Loudoun County Deck Permit & HOA Cost Breakdown</h2>
          <p style={S.p}>
            The table below shows every line item that adds to permit and HOA cost for a typical Loudoun County deck
            project in 2026. County permit fees should be verified against the official fee schedule and application
            details because they are invoiced at intake; HOA fees vary by community.
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={S.th}>Item</th>
                  <th style={S.th}>Cost Range</th>
                  <th style={S.th}>Timeline</th>
                  <th style={S.th}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{row[0]}</td>
                    <td style={S.td}>{row[1]}</td>
                    <td style={S.td}>{row[2]}</td>
                    <td style={{ ...S.td, color: '#555', fontSize: '0.85rem' }}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>How Permit + HOA Cost Shapes Monthly Payment</h2>
          <p style={S.p}>
            Permit and HOA costs are a small share of total project amount — usually 1–3%. But they belong in the
            project amount you finance, not in cash on top. Including $1,500 in permit/HOA fees in a $30,000 financed
            project adds about $19/month at 8.99% APR over 10 years. Excluding them creates surprise cash outflow.
          </p>
          <p style={S.p}>
            Before choosing a material or payment plan, model the full project with the <Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck cost calculator</Link> and compare it against the <Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>composite deck cost guide</Link>. Those two pages help separate the base deck budget from permit fees, HOA review, engineering drawings, railings, stairs, lighting, and covered-deck upgrades.
          </p>

          <section id="official-source-references" style={{ padding: '1.5rem', margin: '2rem 0 3rem', background: '#f8fafc', border: '1px solid #d9e2ec', borderRadius: 12 }}>
            <p style={{ margin: 0, color: '#46515f', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, fontSize: 12 }}>Official source links checked for this update</p>
            <h2 style={{ margin: '6px 0 12px', fontSize: '1.35rem' }}>Verify Permit Fees Before Filing</h2>
            <p style={{ margin: '0 0 1rem', lineHeight: 1.7, color: '#333' }}>Use the county pages below before treating any permit-fee range as final. HOA fees still come from the individual community, so they should be confirmed before the ARC packet is submitted.</p>
            <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
              {officialReferences.map((item) => (
                <li key={item.href} style={{ marginBottom: '0.75rem', lineHeight: 1.6 }}>
                  <Link href={item.href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>{item.name}</Link>
                  <span style={{ color: '#555' }}> — {item.description}</span>
                </li>
              ))}
            </ul>
          </section>

          <h2 style={S.h2}>Loudoun County Permit Process Step-By-Step</h2>
          <ol style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', lineHeight: 1.85 }}>
            <li><strong>Design & site plan</strong> — we create the deck plan, site survey overlay, and material spec</li>
            <li><strong>HOA architectural review submission</strong> — when applicable, confirm the community's required packet and sequencing</li>
            <li><strong>HOA approval documentation</strong> — retain it with the project records and provide it where the reviewing authority or contract requires it</li>
            <li><strong>Loudoun County permit application</strong> — online through LandMARC or in person when needed</li>
            <li><strong>County intake and invoice</strong> — permit fees are invoiced at intake and paid before review starts</li>
            <li><strong>County review</strong> — county-typical decks follow standard processing; zoning, roof, trade, grading, well/septic, hot tub, or spa scope can add review paths</li>
            <li><strong>Permit issuance</strong> — approved plans or the typical deck detail must stay available on site</li>
            <li><strong>Construction inspections</strong> — footing before concrete, framing before decking, and final; schedule each inspection one work day ahead</li>
          </ol>

          <h2 style={S.h2}>Common Loudoun County HOA Communities We Build In</h2>
          <p style={S.p}>
            We submit HOA packages weekly to most major Loudoun communities. Each HOA has its own architectural
            guidelines for railings, materials, colors, setbacks, and stair placement.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/ashburn-village-hoa-deck-rules" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Ashburn Village HOA Deck Rules →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/brambleton-hoa-deck-rules" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Brambleton HOA Deck Rules →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/broadlands-hoa-deck-rules" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Broadlands HOA Deck Rules →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/hoa-deck-rules-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                All Northern Virginia HOA Deck Rules →
              </Link>
            </li>
          </ul>

          <h2 style={S.h2}>What the Loudoun Building Department Looks For</h2>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', lineHeight: 1.85 }}>
            <li>Site plan showing setbacks and lot lines</li>
            <li>Structural drawings — joist spacing, beam sizing, post spacing, footing depth</li>
            <li>Ledger attachment detail and flashing</li>
            <li>Railing height (36" min) and baluster spacing (4" max)</li>
            <li>Stair stringer specifications and handrail continuity</li>
            <li>Material spec — composite brand, framing lumber grade, fastener type</li>
            <li>HOA approval letter (when applicable)</li>
            <li>Separate equipment or trade details when the deck includes electrical fixtures, hot tubs, spas, or other attached equipment</li>
          </ul>
          <p style={S.p}>
            For the structural pieces that tend to slow reviews, cross-check the <Link href="/education/ledger-board-flashing-deck-attachment-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>ledger board flashing guide</Link>, <Link href="/tools/deck-joist-span-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Virginia deck joist span calculator</Link>, <Link href="/tools/deck-beam-span-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck beam span calculator</Link>, and <Link href="/education/deck-stair-construction-diagram" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck stair construction diagram</Link> before finalizing the HOA packet. Those details help align the aesthetic approval with the county permit review.
          </p>

          <h2 style={S.h2}>Related Permit & HOA Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/deck-permit-loudoun-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Deck Permits in Loudoun County (full process guide) →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/deck-permit-fairfax-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Deck Permits in Fairfax County →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/deck-permit-prince-william-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Deck Permits in Prince William County →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/education/ledger-board-flashing-deck-attachment-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Ledger Board Flashing Guide →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/education/deck-stair-construction-diagram" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Deck Stair Construction Diagram →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Deck Cost Calculator →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Composite Deck Cost Guide →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/deck-payment-estimator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Deck Payment Estimator →
              </Link>
            </li>
          </ul>

          <h2 style={S.h2}>FAQ</h2>
          {faqs.map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 10, padding: '1.25rem', marginBottom: '0.75rem', background: '#fff' }}>
              <summary style={{ fontWeight: 700, cursor: 'pointer', fontSize: '1rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.75, color: '#555', fontSize: '0.95rem' }}>{faq.a}</p>
            </details>
          ))}
        </div>
      </article>

      <SimpleCTA title="HOA-Ready Estimate Including Permit Fees" buttonText="Request Written Estimate" link="/get-estimate" />
      <NamedAuthor context="Loudoun County" lastUpdated="2026-08-13" />
      <RelatedGuides currentPath={PATH} category="permit-approval" />
      <ContactHome />
    </>
  );
}
