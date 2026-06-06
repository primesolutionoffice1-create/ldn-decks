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
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/deck-permit-hoa-cost-loudoun-county',
  title: 'Deck Permit & HOA Costs in Loudoun County: 2026 Budget Guide',
  description: 'Loudoun County deck permit cost ($200–$1,200), HOA approval cost ($0–$500), timeline, drawings required, and total project amount impact.',
  image: '/social/deck-permit-hoa-cost-loudoun-county-social.png',
});

const PATH = '/deck-permit-hoa-cost-loudoun-county';

const costRows = [
  ['Loudoun County deck permit', '$200–$800', '10–15 business days', 'Standard residential deck'],
  ['Loudoun County covered deck permit', '$400–$1,200', '2–4 weeks', 'Roof structure requires extra review'],
  ['HOA application fee', '$0–$300', 'Bundled with submission', 'Most NoVA HOAs charge a flat review fee'],
  ['HOA architectural review', '$0–$500', '2–6 weeks', 'Required before permit submission in most HOA neighborhoods'],
  ['Engineering drawings (if required)', '$500–$1,500', '1–2 weeks', 'Covered decks, complex framing, or sloped sites'],
  ['Permit revisions (if needed)', '$0–$200', '1–2 weeks', 'Rare with experienced builders'],
  ['Inspections (3 standard)', 'Included in permit', '1–3 days each', 'Footings → framing → final'],
];

const faqs = [
  {
    q: 'How much does a deck permit cost in Loudoun County?',
    a: 'Loudoun County deck permits run $200–$800 for a standard residential deck and $400–$1,200 for a covered deck. The fee scales with project value and roof type. Permit review takes 10–15 business days for standard decks and 2–4 weeks for covered structures.',
  },
  {
    q: 'How much does HOA approval cost in Loudoun?',
    a: 'Most Loudoun HOAs charge $0–$500 for architectural review of a deck project. Brambleton, Ashburn Village, Stone Ridge, Broadlands, and Belmont fall in this range. Some communities charge a small application fee ($50–$300); others bundle it into annual dues.',
  },
  {
    q: 'How long does HOA approval take in Loudoun County?',
    a: 'Most HOA architectural review committees meet monthly. Typical turnaround is 2–6 weeks from a complete submission. Ashburn Village, Brambleton, and Stone Ridge are usually on the faster end (2–4 weeks). Smaller HOAs without dedicated committees can take longer.',
  },
  {
    q: 'Do I need a permit for a small deck in Loudoun?',
    a: 'Yes for any deck attached to the house or higher than 30 inches off the ground. Free-standing ground-level platforms under 30" can sometimes be built without a permit, but adding railings, stairs, or attaching to the house triggers the permit requirement.',
  },
  {
    q: 'Should permit and HOA costs be included in deck financing?',
    a: 'Yes. The project amount you enter into the deck payment estimator should reflect total project cost, including permits, HOA fees, engineering drawings, and contingency for revisions. Loudoun homeowners typically budget $500–$2,500 for permit and HOA combined.',
  },
  {
    q: 'Who handles the permit and HOA submission?',
    a: 'We do, as part of every project. The Loudoun building permit application, drawings, HOA architectural review package, color samples, material specs, and revision responses are all handled by the project manager. Most homeowners do not interact with the county or HOA directly.',
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
      <ArticleSchema
        title="Deck Permit & HOA Costs in Loudoun County: 2026 Budget Guide"
        description="Loudoun County deck permit cost, HOA approval cost, timeline, drawings required, and total project amount impact."
        path={PATH}
        image="/showcase/img17.jpeg"
        datePublished="2026-05-27"
        dateModified="2026-05-27"
      />
      <WebPageSchema dateModified="2026-06-01" url={`https://ldndecks.com${PATH}`} name="Deck Permit &amp; HOA Costs in Loudoun County: 2026 Budget Guide" description="Loudoun County deck permit cost ($200–$1,200), HOA approval cost ($0–$500), timeline, drawings required, and total project amount impact." speakable />

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
            In Loudoun County, expect <strong>$200–$800</strong> for a standard residential deck permit (10–15 business
            days) and <strong>$0–$500</strong> for HOA architectural review (2–6 weeks). Add{' '}
            <strong>$500–$1,500</strong> for engineering drawings if you&apos;re building a covered deck or complex
            framing. Most Loudoun homeowners budget <strong>$500–$2,500</strong> total for permit + HOA + engineering.
          </p>
        </div>
      </section>

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
            project in 2026. Permit fees vary with project value and roof type; HOA fees vary by community.
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

          <h2 style={S.h2}>Loudoun County Permit Process Step-By-Step</h2>
          <ol style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', lineHeight: 1.85 }}>
            <li><strong>Design & site plan</strong> — we create the deck plan, site survey overlay, and material spec</li>
            <li><strong>HOA architectural review submission</strong> — typically required before permit application</li>
            <li><strong>HOA approval letter</strong> — included with the county permit application</li>
            <li><strong>Loudoun County permit application</strong> — online through Loudoun&apos;s building department portal</li>
            <li><strong>County review</strong> — 10–15 business days for standard, longer for covered decks</li>
            <li><strong>Permit issuance</strong> — payment of fees and pick-up of approved drawings</li>
            <li><strong>Construction</strong> — 3 inspections during the build (footings, framing, final)</li>
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
      <NamedAuthor context="Loudoun County" lastUpdated="2026-05-27" />
      <RelatedGuides currentPath={PATH} />
      <ContactHome />
    </>
  );
}
