import React from 'react';
import Link from 'next/link';
import ServicesHeader from '@/components/ServicesHeader';
import WebPageSchema from '@/components/WebPageSchema';
import ServiceSchema from '@/components/ServiceSchema';
import ServicesFAQ from '@/components/ServicesFAQ';
import RelatedGuides from '@/components/RelatedGuides';
import NamedAuthor from '@/components/NamedAuthor';
import GeoAnswerBlock from '@/components/GeoAnswerBlock';
import PaidSearchLeadForm from '@/components/PaidSearchLeadForm';
import CallLink from '@/components/CallLink';
import { buildMetadata } from '@/lib/seo';

const pagePath = '/replace-wood-deck-with-composite-northern-virginia';
const pageUrl = `https://ldndecks.com${pagePath}`;

export const metadata = buildMetadata({
  path: pagePath,
  title: 'Replace Wood Deck With Composite | Northern Virginia',
  description:
    'Replace an aging wood deck with composite decking in Northern Virginia. Trex, TimberTech, AZEK and Fiberon guidance, resurfacing vs full replacement, permits and written estimates.',
  image: '/social/composite-decks-social.png',
});

const materialRows = [
  {
    brand: 'Trex',
    fit: 'Strong default choice for many Northern Virginia homeowners who want proven composite performance, broad color availability, and local supply depth.',
    note: 'Good fit when availability, installed value, and long-term low maintenance are the main priorities.',
  },
  {
    brand: 'TimberTech / AZEK',
    fit: 'Premium composite and PVC path for homeowners comparing higher-end finish, moisture resistance, and larger outdoor living scopes.',
    note: 'Often considered for premium railings, trim details, pool-adjacent spaces, and higher-budget projects.',
  },
  {
    brand: 'Fiberon',
    fit: 'Valid cross-shop when the homeowner likes a specific color, grain, or Fiberon Concordia look and wants to compare against Trex or TimberTech.',
    note: 'Best discussed with current sample availability, lead time, warranty terms, and installed scope before deciding.',
  },
];

const faqs = [
  {
    q: 'Can I replace only the wood boards with composite decking?',
    a: 'Sometimes, but only if the frame, ledger, joists, posts, beam, stairs, flashing, and footings are sound and properly spaced for the selected composite system. If the structure is old, unsafe, undersized, or poorly flashed, full replacement is the better path.',
  },
  {
    q: 'When should I fully replace the deck instead of resurfacing it?',
    a: 'Full replacement is usually better when the deck has soft framing, ledger risk, failing stairs, loose railings, outdated layout, drainage issues, or when the homeowner wants premium railings, lighting, privacy, stairs, or an outdoor living redesign.',
  },
  {
    q: 'Which composite brand is best for replacing a wood deck?',
    a: 'Trex, TimberTech, AZEK, and Fiberon can all be good choices depending on budget, color, heat exposure, warranty language, supplier availability, and the existing structure. The right answer should be confirmed after reviewing samples and the project scope.',
  },
  {
    q: 'How much does wood-to-composite deck replacement cost in Northern Virginia?',
    a: 'Serious wood-to-composite projects often start in the mid-five figures once demolition, structural correction, composite boards, railings, stairs, permits, and finish details are included. Larger premium projects can move much higher depending on size and options.',
  },
  {
    q: 'Do I need a permit to replace a wood deck with composite?',
    a: 'Many deck replacement projects require permit review when structural framing, guards, stairs, footings, or layout changes are involved. The exact path depends on the county, city, HOA, and scope.',
  },
  {
    q: 'What should I send before requesting an estimate?',
    a: 'Send the address, photos of the deck surface and framing if visible, approximate size, desired material brands, railing or lighting preferences, timeline, budget range, and any HOA or permit concerns.',
  },
];

const boxStyle = {
  border: '1px solid #e7e0d7',
  borderRadius: 8,
  padding: '1.15rem',
  background: '#fff',
};

export default function ReplaceWoodDeckWithCompositePage() {
  return (
    <main>
      <WebPageSchema
        datePublished="2026-08-26"
        dateModified="2026-08-26"
        url={pageUrl}
        name="Replace Wood Deck With Composite | Northern Virginia"
        description="Replace an aging wood deck with composite decking in Northern Virginia. Trex, TimberTech, AZEK and Fiberon guidance, resurfacing vs full replacement, permits and written estimates."
        speakable
      />
      <ServiceSchema
        name="Wood Deck to Composite Deck Replacement"
        description="Wood-to-composite deck replacement planning for Northern Virginia homeowners, including structural review, resurfacing decisions, Trex, TimberTech, AZEK, Fiberon, railings, stairs, lighting, permits, and HOA-aware written estimates."
        url={pageUrl}
        category="Deck Construction"
        serviceType="Composite deck replacement"
        lowPrice="25000"
        highPrice="120000"
        areaServed={[
          { '@type': 'AdministrativeArea', name: 'Northern Virginia' },
          { '@type': 'AdministrativeArea', name: 'Loudoun County' },
          { '@type': 'AdministrativeArea', name: 'Fairfax County' },
          { '@type': 'AdministrativeArea', name: 'Prince William County' },
          { '@type': 'City', name: 'Arlington' },
          { '@type': 'City', name: 'Alexandria' },
          { '@type': 'City', name: 'McLean' },
        ]}
        relatedServices={[
          'https://ldndecks.com/composite-decks',
          'https://ldndecks.com/services/deck-replacement',
          'https://ldndecks.com/deck-resurfacing-vs-replacement',
          'https://ldndecks.com/trex-vs-timbertech-vs-azek',
        ]}
      />

      <ServicesHeader
        subtext="Wood to composite replacement"
        title="Replace an Aging Wood Deck With Composite Decking"
        description="A focused estimate path for Northern Virginia homeowners who want to stop staining, fix unsafe structure, and upgrade to Trex, TimberTech, AZEK, or Fiberon-level composite planning."
        path={pagePath}
        image="/images/homepage-intro-timbertech-deck.jpg"
      />

      <section style={{ background: '#fff7ed', borderBottom: '1px solid #fed7aa', padding: '22px 20px' }}>
        <div style={{ maxWidth: 1050, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem', alignItems: 'center' }}>
          <div>
            <p style={{ margin: '0 0 0.45rem', color: '#c2410c', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.78rem' }}>
              Built for high-intent homeowners
            </p>
            <h2 style={{ margin: 0, fontSize: 'clamp(1.55rem, 3vw, 2.35rem)', lineHeight: 1.12 }}>
              If the old wood deck is costing weekends, repairs, and worry, this is the right conversion path.
            </h2>
            <p style={{ margin: '0.85rem 0 0', color: '#4b5563', lineHeight: 1.65 }}>
              This page is not for retail board shopping or small handyman repairs. It is for homeowners comparing resurfacing versus full replacement, modern composite materials, safer stairs and railings, permits, HOA review, and a written scope.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem', marginTop: '1rem' }}>
              <CallLink style={{ color: '#fff', background: '#111827', borderRadius: 6, padding: '0.75rem 1rem', fontWeight: 900, textDecoration: 'none' }}>
                Call for composite replacement
              </CallLink>
              <Link href="/deck-resurfacing-vs-replacement" style={{ color: '#111827', border: '1px solid #111827', borderRadius: 6, padding: '0.75rem 1rem', fontWeight: 900, textDecoration: 'none' }}>
                Resurface vs replace
              </Link>
            </div>
          </div>
          <PaidSearchLeadForm
            service="Wood Deck to Composite Replacement"
            formLocation="wood_to_composite_above_fold"
            heading="Request a wood-to-composite replacement estimate"
            leadSource="Google Search"
            pageContext={{
              pageType: 'paid_search_landing_page',
              service: 'wood_deck_to_composite_replacement',
              intent: 'replace_wood_deck_with_composite',
              county: 'Northern Virginia',
            }}
          />
        </div>
      </section>

      <GeoAnswerBlock
        question="Who should replace a wood deck with composite in Northern Virginia?"
        answer="The best fit is a homeowner with an aging wood deck who wants less maintenance, safer structure, modern railings, better stairs, lighting, and a long-term outdoor living upgrade. The right estimate starts with the existing frame condition, not just board color."
        facts={[
          'Best-fit intent: aging wood deck replacement, full composite upgrade, serious resurfacing decision, or premium outdoor living scope.',
          'Primary project signals: homeowner decision maker, visible wear, unsafe rails or stairs, repeated staining, and interest in Trex, TimberTech, AZEK, or Fiberon.',
          'Lead quality filter: budget, timeline, address, photos, material interest, and HOA or permit constraints should be captured before proposal work.',
        ]}
        links={[
          { href: '/trex-vs-timbertech-vs-azek', label: 'Compare composite brands' },
          { href: '/fiberon-decking-review-northern-virginia', label: 'Fiberon review' },
          { href: '/deck-payment-estimator', label: 'Payment estimator' },
        ]}
      />

      <section style={{ padding: '56px 20px', background: '#fff' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <h2 style={{ margin: '0 0 0.75rem', fontSize: 'clamp(1.6rem, 3vw, 2.35rem)' }}>
            The Decision: Resurface the Frame or Replace the Whole Deck
          </h2>
          <p style={{ maxWidth: 820, color: '#4b5563', lineHeight: 1.7, margin: '0 0 1.4rem' }}>
            The expensive mistake is installing premium composite boards over a weak frame. Composite replacement should start with structure: ledger, flashing, joists, beams, posts, footings, stairs, guards, drainage, and code readiness.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            <div style={boxStyle}>
              <h3 style={{ marginTop: 0 }}>Resurfacing can work when...</h3>
              <ul style={{ paddingLeft: '1.1rem', color: '#4b5563', lineHeight: 1.65 }}>
                <li>The frame is structurally sound.</li>
                <li>Joist spacing fits the selected boards.</li>
                <li>Ledger, flashing, stairs, and rails pass review.</li>
                <li>The layout does not need a major redesign.</li>
              </ul>
            </div>
            <div style={boxStyle}>
              <h3 style={{ marginTop: 0 }}>Full replacement is better when...</h3>
              <ul style={{ paddingLeft: '1.1rem', color: '#4b5563', lineHeight: 1.65 }}>
                <li>There is rot, bounce, old framing, or weak stairs.</li>
                <li>The homeowner wants premium railings or lighting.</li>
                <li>The deck size, traffic flow, or stairs should change.</li>
                <li>Permit, HOA, or inspection risk needs a reset.</li>
              </ul>
            </div>
            <div style={boxStyle}>
              <h3 style={{ marginTop: 0 }}>Best lead-quality signal</h3>
              <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.65 }}>
                A strong lead includes address, photos, budget range, timeline, material preference, and whether the homeowner is open to structural replacement if resurfacing is not safe.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#f8fafc', padding: '56px 20px' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <h2 style={{ margin: '0 0 0.75rem', fontSize: 'clamp(1.6rem, 3vw, 2.35rem)' }}>
            Composite Brands Homeowners Are Comparing
          </h2>
          <p style={{ maxWidth: 820, color: '#4b5563', lineHeight: 1.7, margin: '0 0 1.4rem' }}>
            Searchers compare brand names before they call. The page has to answer that intent directly so paid traffic does not bounce back to competitors.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', border: '1px solid #e5e7eb' }}>
              <thead>
                <tr style={{ background: '#111827', color: '#fff' }}>
                  <th style={{ padding: '0.9rem', textAlign: 'left' }}>Brand</th>
                  <th style={{ padding: '0.9rem', textAlign: 'left' }}>Best fit</th>
                  <th style={{ padding: '0.9rem', textAlign: 'left' }}>Estimate note</th>
                </tr>
              </thead>
              <tbody>
                {materialRows.map((row, index) => (
                  <tr key={row.brand} style={{ background: index % 2 ? '#f9fafb' : '#fff' }}>
                    <td style={{ padding: '0.9rem', borderTop: '1px solid #e5e7eb', fontWeight: 900 }}>{row.brand}</td>
                    <td style={{ padding: '0.9rem', borderTop: '1px solid #e5e7eb', color: '#4b5563', lineHeight: 1.55 }}>{row.fit}</td>
                    <td style={{ padding: '0.9rem', borderTop: '1px solid #e5e7eb', color: '#4b5563', lineHeight: 1.55 }}>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ margin: '1rem 0 0', color: '#4b5563', lineHeight: 1.65 }}>
            Compare the full brand guide: <Link href="/trex-vs-timbertech-vs-azek">Trex vs TimberTech vs AZEK vs Fiberon</Link>.
          </p>
        </div>
      </section>

      <section style={{ padding: '56px 20px', background: '#111827', color: '#fff' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <h2 style={{ margin: '0 0 0.75rem', fontSize: 'clamp(1.6rem, 3vw, 2.35rem)' }}>
            Campaign Fit: Where This Page Should Receive Google Ads Traffic
          </h2>
          <p style={{ maxWidth: 820, color: '#d1d5db', lineHeight: 1.7, margin: '0 0 1.4rem' }}>
            This page should be used for high-intent searches tied to old wood deck replacement, composite upgrade, Trex replacement, TimberTech replacement, Fiberon comparison, and resurfacing versus full replacement.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {[
              ['High priority', 'replace wood deck with composite, composite deck replacement, wood deck replacement, replace deck boards with composite'],
              ['Premium modifier', 'Trex deck replacement, TimberTech deck replacement, AZEK deck replacement, Fiberon decking installer'],
              ['Lead quality filter', 'Homeowner, written estimate, full project, structure, permit, HOA, budget range, timeline'],
            ].map(([title, text]) => (
              <div key={title} style={{ border: '1px solid rgba(255,255,255,0.16)', borderRadius: 8, padding: '1.15rem', background: 'rgba(255,255,255,0.06)' }}>
                <h3 style={{ marginTop: 0, color: '#fb923c' }}>{title}</h3>
                <p style={{ marginBottom: 0, color: '#e5e7eb', lineHeight: 1.65 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '56px 20px', background: '#fff' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ margin: '0 0 0.75rem', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
            Next Step: Send Photos Before We Price the Project
          </h2>
          <p style={{ color: '#4b5563', lineHeight: 1.7 }}>
            Photos help separate a clean resurface from a true rebuild. The strongest estimate request includes the deck surface, stairs, railing, posts, underside framing, house connection, backyard access, and the homeowner's preferred material direction.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem', marginTop: '1rem' }}>
            <Link href="/get-estimate" style={{ color: '#fff', background: '#c2410c', borderRadius: 6, padding: '0.8rem 1rem', fontWeight: 900, textDecoration: 'none' }}>
              Request written estimate
            </Link>
            <Link href="/composite-deck-cost-northern-virginia" style={{ color: '#111827', border: '1px solid #111827', borderRadius: 6, padding: '0.8rem 1rem', fontWeight: 900, textDecoration: 'none' }}>
              See composite deck cost
            </Link>
          </div>
        </div>
      </section>

      <ServicesFAQ canonicalUrl={pageUrl} title="Wood to Composite Replacement FAQs" faqs={faqs} />
      <RelatedGuides currentPath={pagePath} />
      <NamedAuthor context="wood-to-composite deck replacement in Northern Virginia" lastUpdated="2026-08-26" />
    </main>
  );
}
