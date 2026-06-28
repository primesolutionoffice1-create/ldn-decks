import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ArticleSchema from '@/components/ArticleSchema';
import SimpleCTA from '@/components/SimpleCTA';
import TrustBanner from '@/components/TrustBanner';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import NamedAuthor from '@/components/NamedAuthor';
import DeckCostCalculatorWidget from '@/components/DeckCostCalculatorWidget';
import AboveFoldCTA from '@/components/AboveFoldCTA';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import GeoAnswerBlock from '@/components/GeoAnswerBlock';

export const metadata = buildMetadata({
  path: '/composite-deck-cost-northern-virginia',
  title: 'How Much Does a Composite Deck Cost in Northern Virginia?',
  description: 'Get 2026 planning pricing data for custom composite decks in Northern Virginia. Compare costs for Trex, TimberTech, sizing, and premium add-ons.',
  image: '/social/composite-deck-cost-northern-virginia-social.png',
});

const S = {
  h2: { fontSize: '2rem', fontWeight: 700, marginBottom: '1.1rem', letterSpacing: '-0.01em', scrollMarginTop: '6rem' },
  h3: { fontSize: '1.25rem', fontWeight: 700, margin: '1.6rem 0 0.6rem' },
  p: { marginBottom: '1rem', lineHeight: 1.75, color: '#2d3748' },
  pMuted: { marginBottom: '1rem', lineHeight: 1.7, color: '#555' },
  th: { padding: '0.85rem', textAlign: 'left', borderBottom: '2px solid #ddd', fontSize: '0.92rem', background: '#f0efea' },
  td: { padding: '0.85rem', borderBottom: '1px solid #eee', fontSize: '0.92rem' },
  container: { maxWidth: 960, margin: '0 auto', padding: '0 1.5rem' },
  callout: { borderLeft: '4px solid var(--color-primary)', background: '#fff8f1', padding: '1.5rem 1.75rem', borderRadius: 8, marginBottom: '1.5rem' },
};

// ---------- COST TABLES BY DECK SIZE × MATERIAL TIER ----------
// Assumptions: pressure-treated framing, standard rectangular deck on grade,
// composite decking + composite railings, 1 stair flight, permit allowance.
// NoVA premium (25-35% over national average) baked in.

const buildCostMatrix = ({ sqft, material, materialPerSqft, labor, permit }) => {
  const matLow = sqft * materialPerSqft[0];
  const matHigh = sqft * materialPerSqft[1];
  const laborLow = sqft * labor[0];
  const laborHigh = sqft * labor[1];
  const totalLow = matLow + laborLow + permit[0];
  const totalHigh = matHigh + laborHigh + permit[1];
  const typical = Math.round((totalLow + totalHigh) / 2);
  const f = (n) => '$' + n.toLocaleString();
  return {
    material,
    materialCost: `${f(matLow)} – ${f(matHigh)}`,
    laborCost: `${f(laborLow)} – ${f(laborHigh)}`,
    permitCost: `${f(permit[0])} – ${f(permit[1])}`,
    total: `${f(totalLow)} – ${f(totalHigh)}`,
    typical: f(typical),
  };
};

const sizes = [
  { sqft: 200, label: '200 sqft  ·  e.g. 10×20', permit: [400, 700] },
  { sqft: 300, label: '300 sqft  ·  e.g. 15×20', permit: [500, 900] },
  { sqft: 400, label: '400 sqft  ·  e.g. 20×20', permit: [600, 1100] },
  { sqft: 500, label: '500 sqft  ·  e.g. 25×20', permit: [700, 1300] },
];

const tiers = [
  { name: 'Budget composite (Trex Enhance Basics / Fiberon Good Life)', materialPerSqft: [12, 22], labor: [18, 28] },
  { name: 'Mid-tier capped composite (Trex Transcend / TimberTech PRO / Fiberon Concordia)', materialPerSqft: [18, 32], labor: [22, 33] },
  { name: 'Premium composite & PVC (TimberTech AZEK Vintage / Trex Signature)', materialPerSqft: [26, 45], labor: [24, 38] },
];

const sizeMatrix = sizes.map((s) => ({
  label: s.label,
  sqft: s.sqft,
  rows: tiers.map((t) =>
    buildCostMatrix({
      sqft: s.sqft,
      material: t.name,
      materialPerSqft: t.materialPerSqft,
      labor: t.labor,
      permit: s.permit,
    })
  ),
}));

// ---------- TREX VS TIMBERTECH COMPARISON ----------
const brandComparison = [
  { feature: 'Installed cost (NoVA, 2026)', trex: '$30–$65/sqft', timbertech: '$40–$75/sqft', premium: 'TimberTech ~15–25% premium' },
  { feature: 'Flagship warranty', trex: '25-year stain & fade (Transcend)', timbertech: '50-year stain & fade (AZEK Vintage)', premium: 'TimberTech 2× warranty depth' },
  { feature: 'Heat retention (full sun)', trex: 'Transcend stays 20–25°F cooler than base composites', timbertech: 'AZEK stays 25–30°F cooler — full PVC core', premium: 'AZEK coolest in NoVA summer' },
  { feature: 'Fade resistance', trex: 'Excellent (Transcend multi-tonal shell)', timbertech: 'Excellent (AZEK Vintage capped PVC)', premium: 'Tied at premium tier' },
  { feature: 'Hidden fastener compatibility', trex: 'Trex Hideaway, Cortex, TigerClaw — full ecosystem', timbertech: 'TimberTech CONCEALoc, Cortex — full ecosystem', premium: 'Tied — both fully grooved' },
  { feature: 'Board width & profile options', trex: 'Square + grooved, 5.5" standard, 8.5" wide-plank on Signature', timbertech: 'Square + grooved, 5.5" standard, 7.25" wide-plank on Vintage', premium: 'Trex Signature widest option' },
  { feature: 'Color options', trex: '12 colors (Transcend), 6 (Enhance)', timbertech: '20+ colors (AZEK Vintage), 8 (PRO)', premium: 'TimberTech wider palette' },
  { feature: 'Recycled content', trex: '95% reclaimed/recycled', timbertech: 'AZEK Vintage: virgin PVC. PRO: mixed', premium: 'Trex higher recycled content' },
  { feature: 'Maintenance', trex: 'Annual rinse + soap if needed', timbertech: 'Annual rinse + soap if needed', premium: 'Identical maintenance profile' },
];

// ---------- FAQS ----------
const faqs = [
  {
    q: 'How much does a 20x20 composite deck cost in Northern Virginia?',
    a: 'A 20×20 (400 sqft) composite deck in Northern Virginia costs $18,000–$42,000 fully installed in 2026, depending on material tier. Budget capped composite (Trex Enhance Basics, Fiberon Good Life) lands at $18,000–$28,000. Mid-tier (Trex Transcend, TimberTech PRO, Fiberon Concordia) lands at $24,000–$34,000. Premium PVC (TimberTech AZEK Vintage, Trex Signature) lands at $32,000–$42,000. Composite railings and one stair flight are included in those ranges; cable railings, lighting, second-story elevation, or a screened porch conversion push totals higher.'
  },
  {
    q: 'Is composite decking worth the cost in Virginia?',
    a: 'For Virginia homeowners holding 7+ years, yes — composite decking pays back through avoided maintenance and longer service life. A pressure-treated wood deck in Loudoun or Fairfax County needs professional power-wash, sand and re-stain every 2 years ($1,500–$2,500 each cycle). Over 15 years that\'s $11,000–$19,000 in maintenance. Composite needs an annual hose-down. Service life is 25+ years for Trex Transcend, 30–50 years for TimberTech AZEK Vintage, versus 10–15 years for pressure-treated pine. Composite also recovers 65–75% of installed cost at resale (Remodeling Magazine Cost vs Value 2024), versus 40–55% for wood.'
  },
  {
    q: 'Does Trex add home value?',
    a: 'Yes, a Trex or comparable composite deck can support home value when it is designed, permitted, and documented well. Remodeling cost/value reports have historically shown composite deck additions recovering a meaningful portion of installed cost at resale, but the exact recovery varies by market, home price, condition, and buyer demand. In Northern Virginia, the stronger value case is usually practical: low maintenance, usable outdoor living space, manufacturer material documentation, and a finished feature buyers can understand quickly.'
  },
  {
    q: 'What is cheaper than Trex?',
    a: 'Three real alternatives. (1) Pressure-treated pine at $18–$35/sqft installed — cheapest upfront, most expensive over 10 years once maintenance is counted. (2) Cedar at $25–$45/sqft installed — middle ground, lasts 15–20 years in NoVA climate, requires sealing. (3) Fiberon Good Life or ArmorGuard at $28–$45/sqft installed — Fortune Brands–owned composite competitor, capped composite construction, 25-year stain & fade warranty. The honest answer for most NoVA homeowners staying 5+ years: Trex Enhance at $30–$50/sqft beats every cheaper option once you factor maintenance and replacement timing.'
  },
  {
    q: 'How long does composite decking last?',
    a: 'Service life varies by capping tier. Capped composite (Trex Transcend, TimberTech PRO, Fiberon Concordia) holds 25+ years with negligible visible aging. Capped PVC (TimberTech AZEK Vintage, Trex Signature) holds 30–50 years with even less aging — full PVC cores don\'t absorb moisture at all. Uncapped first-generation composites (early 2000s Trex, before the shell technology) failed in 10–15 years; that\'s the source of the "composite goes bad" reputation, but it doesn\'t apply to any composite sold since ~2012. Every brand we install today carries a 25-year stain & fade warranty minimum; TimberTech AZEK carries 50 years.'
  },
  {
    q: 'Can you pressure wash composite decking?',
    a: 'Yes — carefully. Manufacturer guidance from Trex and TimberTech allows pressure washing at low pressure (max 1,500 PSI), a 40° fan tip, held at least 8 inches from the surface, sweeping with the grain. Higher pressure or tight tips will mar the surface cap and void the warranty. For routine cleaning, soap and a garden hose is enough. Heavier seasonal cleaning — pollen, tree sap, leaf staining — pressure-wash at low setting once per spring. Never pressure wash uncapped composite; the exposed core absorbs water and accelerates degradation.'
  },
  {
    q: 'Why are composite decks more expensive upfront than wood?',
    a: 'Three reasons. (1) Material cost: composite boards run $4–$12 per linear foot vs $2–$4 for pressure-treated pine. (2) Engineering: composite expands and contracts more with temperature, so fastening, gapping, and joist spacing are tighter — that\'s installation labor. (3) Hidden fasteners: composite is almost always installed with concealed clip systems (Trex Hideaway, CONCEALoc, Cortex) which cost more and install slower than face-screwed wood. The payoff is back-end: composite eliminates the $1,500–$2,500 every-two-years maintenance cost wood requires, and the boards still look new at year 15 when wood needs replacement.'
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a }
  })),
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Composite Deck Installation — Northern Virginia",
  description: "Professionally installed composite deck (Trex, TimberTech AZEK, Fiberon) in Loudoun, Fairfax, Prince William and Arlington counties. Scope can include framing, permits, hidden fasteners, composite railings, and written workmanship terms.",
  brand: { "@type": "Brand", name: "Loudoun Decks" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "8000",
    highPrice: "60000",
    offerCount: "12",
    availability: "https://schema.org/InStock",
    seller: { "@id": "https://ldndecks.com/#organization" },
  },
};

export default function CompositeDeckCostPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/composite-deck-cost-northern-virginia" name="How Much Does a Composite Deck Cost in Northern Virginia?" description="Get 2026 planning pricing data for custom composite decks in Northern Virginia. Compare costs for Trex, TimberTech, sizing, and premium add-ons." speakable />
      <JsonLd data={productSchema} />
      <ArticleSchema
        title="Composite Deck Cost in Northern Virginia 2026: Complete Price Guide"
        description="Composite deck cost in Northern Virginia for 2026. Trex pricing, TimberTech pricing, real installed totals by deck size, calculator, tariff impacts, and what drives the price up or down."
        path="/composite-deck-cost-northern-virginia"
        image="/showcase/img09.jpeg"
        datePublished="2026-04-21"
        dateModified="2026-06-01"
        author="Nick — Owner, Loudoun Decks"
      />

      {/* Hero */}
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '0.6rem' }}>
            2026 PRICING  ·  Updated for 2026 material pricing trends
          </p>
          <h1 style={{ fontSize: '2.6rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.015em' }}>
            Composite Deck Cost in Northern Virginia (2026)
          </h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem', maxWidth: 720 }}>
            Real installed pricing for Trex, TimberTech, AZEK, and Fiberon decks across Loudoun, Fairfax, Prince William, and Arlington counties — with side-by-side cost tables, a live calculator, and a 2026 tariff briefing.
          </p>
        </div>
      </section>

      <TrustBanner />

      <AboveFoldCTA
        headline="Planning a contractor-installed composite deck? Get a written Northern Virginia estimate path before you choose materials."
        estimateHref="/get-estimate"
        estimateLabel="Request Written Estimate"
      />

      {/* QUICK ANSWER — featured snippet bait */}
      <section data-speakable="true" style={{ padding: '2rem 1.5rem 0' }}>
        <div style={S.container}>
          <div style={S.callout}>
            <p style={{ fontWeight: 700, marginBottom: '0.5rem', fontSize: '1.05rem' }}>Quick Answer</p>
            <p style={{ margin: 0, lineHeight: 1.75, fontSize: '1.02rem' }}>
              <strong>A composite deck in Northern Virginia typically costs</strong> $30–$95 per square foot installed in 2026 — a 200 sqft Trex Enhance deck lands around $8,000–$14,000, a 400 sqft Trex Transcend build $24,000–$34,000, and a 500 sqft TimberTech AZEK premium build $40,000–$55,000. Total cost depends on deck size, material tier, stairs, railing system, second-story elevation, and site conditions (slope, soil, access). Loudoun Decks provides itemized written estimates for Northern Virginia homeowners.
            </p>
            <p style={{ margin: '0.8rem 0 0', lineHeight: 1.65, fontSize: '0.95rem', color: '#555' }}>
              This guide is for contractor-installed deck projects, not loose board pricing or retail material sales.
            </p>
          </div>

          {/* Jump links + calc CTA */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.85rem', color: '#666', fontWeight: 600, marginRight: '0.5rem' }}>Jump to:</span>
            {[
              ['#calculator', 'Calculator'],
              ['#cost-by-size', 'Cost by size'],
              ['#trex-vs-timbertech', 'Trex vs TimberTech'],
              ['#tariffs-2026', '2026 tariffs'],
              ['#financing', 'Financing'],
              ['#faqs', 'FAQs'],
            ].map(([href, label]) => (
              <a key={href} href={href} style={{ fontSize: '0.88rem', padding: '0.4rem 0.9rem', background: '#f0efea', borderRadius: 20, color: '#333', textDecoration: 'none', fontWeight: 500 }}>
                {label}
              </a>
            ))}
            <a href="#calculator" style={{ marginLeft: 'auto', fontSize: '0.92rem', padding: '0.5rem 1.1rem', background: 'var(--color-primary)', color: '#fff', borderRadius: 6, fontWeight: 600, textDecoration: 'none' }}>
              Estimate Your Exact Deck Cost →
            </a>
          </div>

          <NamedAuthor context="Loudoun, Fairfax, Prince William, and Arlington counties" lastUpdated="2026-06-01" />
        </div>
      </section>

      <GeoAnswerBlock
        question="How much does a composite deck cost in Northern Virginia?"
        answer="A composite deck in Northern Virginia usually costs $30 to $95 per square foot installed in 2026. Most finished 300 to 400 square foot projects land between $22,000 and $38,000 when they include composite boards, railings, one stair run, permit coordination, hidden fasteners, and standard framing. Final cost depends on material tier, elevation, stairs, railings, lighting, access, slope, and county or HOA review."
        facts={[
          'Best cost page: /composite-deck-cost-northern-virginia',
          'Primary conversion path: written estimate, not generic price quote',
        ]}
        links={[
          { href: '/deck-cost-calculator', label: 'Deck cost calculator' },
          { href: '/trex-vs-timbertech-vs-azek', label: 'Material comparison' },
          { href: '/get-estimate', label: 'Get a written estimate' },
        ]}
      />

      {/* HERO IMAGE */}
      <section style={{ padding: '0 1.5rem 1.5rem' }}>
        <div style={S.container}>
          <div style={{ position: 'relative', width: '100%', height: '420px', borderRadius: '12px', overflow: 'hidden' }}>
            <Image
              src="/showcase/img09.jpeg"
              alt="Custom Trex Transcend composite deck installed in Northern Virginia — Loudoun Decks 2026 project"
              fill
              priority
              fetchPriority="high"
              quality={72}
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 960px) 100vw, 960px"
            />
          </div>
        </div>
      </section>

      {/* CALCULATOR EMBED — high on page per spec */}
      <section id="calculator" style={{ padding: '3rem 1.5rem', background: '#fff' }}>
        <div style={S.container}>
          <h2 style={S.h2}>Northern Virginia Composite Deck Cost Calculator</h2>
          <p style={S.p}>
            Real pricing math — no placeholder numbers. Composite is preselected (Trex Transcend default). The Northern Virginia regional premium of 25–35% is applied to the materials-and-labor base. Every output is a starting point for a free itemized on-site estimate.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <DeckCostCalculatorWidget
              defaultMaterial={3}
              defaultSqft={350}
              ctaLabel="Estimate Your Exact Deck Cost"
              ctaHref="/get-estimate"
            />
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '0.88rem', color: '#666' }}>
            <strong>Prefer the full standalone tool?</strong>{' '}
            <Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Open the dedicated calculator →</Link>
          </p>
        </div>
      </section>

      {/* COST BY SIZE — 4 tables, 3 tiers each */}
      <section id="cost-by-size" style={{ padding: '3rem 1.5rem', background: '#fafafa', borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>
        <div style={S.container}>
          <h2 style={S.h2}>2026 Composite Deck Cost by Size — Northern Virginia Planning Pricing</h2>
          <p style={S.p}>
            Four common deck footprints, three material tiers each. Every total assumes pressure-treated framing, the listed composite decking and railings, one stair flight, Loudoun or Fairfax County permit allowance, hidden fasteners, and written workmanship terms confirmed in the estimate. Standard rectangular geometry on grade — second-story builds, multi-level decks, and integrated lighting add $3,000–$8,000+ on top.
          </p>
          <p style={{ ...S.pMuted, fontSize: '0.88rem', fontStyle: 'italic', marginBottom: '2rem' }}>
            Prices checked May 2026 against manufacturer/dealer price references and Loudoun Decks installed-cost estimating logic. Final publication as invoice-backed project data requires matching each example to a source-verified project record.
          </p>

          {sizeMatrix.map((size, si) => (
            <div key={si} style={{ marginBottom: '2.5rem' }}>
              <h3 style={S.h3}>{size.label}</h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 8, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                  <thead>
                    <tr>
                      <th style={S.th}>Material tier</th>
                      <th style={S.th}>Material</th>
                      <th style={S.th}>Labor</th>
                      <th style={S.th}>Permit / inspection</th>
                      <th style={S.th}>Total installed</th>
                      <th style={S.th}>Typical spend</th>
                    </tr>
                  </thead>
                  <tbody>
                    {size.rows.map((row, ri) => (
                      <tr key={ri} style={{ background: ri % 2 ? '#fafafa' : '#fff' }}>
                        <td style={{ ...S.td, fontWeight: 600 }}>{row.material}</td>
                        <td style={S.td}>{row.materialCost}</td>
                        <td style={S.td}>{row.laborCost}</td>
                        <td style={S.td}>{row.permitCost}</td>
                        <td style={{ ...S.td, fontWeight: 700, color: 'var(--color-primary)' }}>{row.total}</td>
                        <td style={{ ...S.td, fontWeight: 600 }}>{row.typical}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          <p style={S.p}>
            <strong>Most homeowners spend between $22,000 and $38,000</strong> on a finished composite deck in Northern Virginia — that&apos;s the typical 300–400 sqft mid-tier capped composite (Trex Transcend, TimberTech PRO, or Fiberon Concordia) build with composite railings and one stair flight. Premium PVC and large-footprint luxury builds push past $50,000.
          </p>
        </div>
      </section>

      {/* TREX VS TIMBERTECH COMPARISON */}
      <section id="trex-vs-timbertech" style={{ padding: '3rem 1.5rem' }}>
        <div style={S.container}>
          <h2 style={S.h2}>Trex vs TimberTech — Installed Cost & Performance</h2>
          <p style={S.p}>
            Trex and TimberTech are the two dominant composite brands in Northern Virginia. Pricing is close at the budget tier and separates at the premium tier, where TimberTech AZEK&apos;s full PVC core commands a 15–25% premium over the equivalent Trex line. Performance is functionally tied at premium; aesthetics, warranty depth, and color palette drive the real choice.
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '1.25rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 8, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04)', fontSize: '0.92rem' }}>
              <thead>
                <tr>
                  <th style={S.th}>Feature</th>
                  <th style={S.th}>Trex</th>
                  <th style={S.th}>TimberTech</th>
                  <th style={S.th}>Installed premium</th>
                </tr>
              </thead>
              <tbody>
                {brandComparison.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{row.feature}</td>
                    <td style={S.td}>{row.trex}</td>
                    <td style={S.td}>{row.timbertech}</td>
                    <td style={{ ...S.td, color: '#555' }}>{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={S.pMuted}>
            For a full 4-way comparison with Fiberon and AZEK side-by-side, see <Link href="/trex-vs-timbertech-vs-azek" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Trex vs TimberTech vs AZEK vs Fiberon</Link>. For deeper Trex line specifics: <Link href="/trex-transcend-review-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Trex Transcend review for NoVA</Link>.
          </p>
        </div>
      </section>

      {/* 2026 TARIFFS */}
      <section id="tariffs-2026" style={{ padding: '3rem 1.5rem', background: '#fafafa', borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>
        <div style={S.container}>
          <h2 style={S.h2}>How 2026 Tariffs Affect Composite Deck Prices</h2>
          <p style={{ ...S.p, fontStyle: 'italic', color: '#555' }}>
            Updated for 2026 material pricing trends. Prices verified May 2026.
          </p>
          <p style={S.p}>
            Composite decking material pricing in 2026 behaves differently from pressure-treated lumber, and the difference matters when you&apos;re budgeting a build six months out. Three pressure points dominate the 2026 picture:
          </p>
          <h3 style={S.h3}>1. Aluminum railing tariffs</h3>
          <p style={S.p}>
            Section 232 aluminum tariffs (10–25% depending on country of origin) have lifted aluminum railing system costs roughly 8–15% versus 2024 baseline. Cable rail and modern aluminum picket systems are the most exposed line items on a 2026 composite deck quote. If aluminum railing is on your spec, expect $400–$900 more on a 30-linear-foot run than the same system cost in 2023. Composite railing systems (Trex Signature, TimberTech Impression) are insulated from this tariff because the structural cores are domestic.
          </p>
          <h3 style={S.h3}>2. PVC and capstock supply chain</h3>
          <p style={S.p}>
            Composite boards from Trex, TimberTech, and Fiberon are predominantly US-manufactured (NV and GA for Trex, OH and PA for TimberTech, NC and IA for Fiberon), so they avoid the import tariff exposure that affects competing imported composites. The 2026 squeeze sits on the capstock side: the PVC and acrylic shell layers depend on imported polymer precursors with their own tariff schedules. Net effect on US-made composite board pricing: 3–7% over 2024 levels, smaller than the aluminum impact.
          </p>
          <h3 style={S.h3}>3. Why composite behaves differently than pressure-treated lumber</h3>
          <p style={S.p}>
            Pressure-treated pine pricing tracks softwood lumber commodity futures — wildly volatile, swinging 20–40% in a single quarter. Composite pricing is set by manufacturer MSRP and dealer programs, which adjust on annual or semi-annual cycles. The practical implication: composite quotes are more stable than wood quotes over the 8–12 weeks between contract signing and material delivery. Most NoVA contractors (including Loudoun Decks) lock material pricing at contract signature for that reason.
          </p>
          <h3 style={S.h3}>4. Current market volatility</h3>
          <p style={S.p}>
            2026 composite deck pricing is up roughly 8–14% from 2024 across the NoVA market — driven by labor inflation (NoVA deck-build labor is up faster than national average), the aluminum hardware tariffs above, and incremental capstock cost pressure. If you&apos;re budgeting for a 2026 or 2027 build, plan to the upper end of the ranges in our cost tables above.
          </p>
          <p style={S.p}>
            For the full tariff breakdown by material category: <Link href="/how-tariffs-affect-deck-prices-2026" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>How 2026 tariffs affect deck prices in Northern Virginia</Link>.
          </p>
        </div>
      </section>

      {/* MANUFACTURER PRICE SOURCES */}
      <section style={{ padding: '3rem 1.5rem' }}>
        <div style={S.container}>
          <h2 style={S.h2}>Where These Prices Come From — Manufacturer & Dealer Sources</h2>
          <p style={S.p}>
            Every price range on this page is based on one of three categories: manufacturer published pricing references, dealer pricing references, or Loudoun Decks installed-cost estimating logic for Northern Virginia. Treat these as planning ranges until a property-specific scope is measured and written. <strong>Prices verified May 2026.</strong>
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.55rem', lineHeight: 1.7 }}>
              <strong>Trex pricing</strong> — Trex.com material MSRP for Enhance, Transcend, Signature, and Lineage product lines. Dealer pricing may vary by program and region. Trex installer locator: <a href="https://www.trex.com/contractors/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>trex.com/contractors</a>.
            </li>
            <li style={{ marginBottom: '0.55rem', lineHeight: 1.7 }}>
              <strong>TimberTech pricing</strong> — TimberTech.com product MSRP for AZEK Vintage, AZEK Harvest, PRO Legacy, and PRO Reserve lines. TimberTech Platinum dealer pricing. Installer locator: <a href="https://www.timbertech.com/locate-a-pro/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>locator.timbertech.com</a>.
            </li>
            <li style={{ marginBottom: '0.55rem', lineHeight: 1.7 }}>
              <strong>Fiberon pricing</strong> — Fiberon.com product MSRP for Concordia, Sanctuary, and ArmorGuard lines. Fiberon contractor locator: <a href="https://www.fiberondecking.com/find-a-pro" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>fiberondecking.com/find-a-pro</a>.
            </li>
            <li style={{ marginBottom: '0.55rem', lineHeight: 1.7 }}>
              <strong>NoVA labor &amp; installed-cost logic</strong> — Loudoun Decks estimating inputs for local labor, access, permit allowances, railings, stairs, and site conditions across Loudoun, Fairfax, Prince William, and Arlington counties.
            </li>
            <li style={{ marginBottom: '0.55rem', lineHeight: 1.7 }}>
              <strong>ROI &amp; resale data</strong> — Remodeling Magazine&apos;s annual <em>Cost vs Value</em> report (Mid-Atlantic, mid-range and upscale composite deck categories).
            </li>
          </ul>
        </div>
      </section>

      {/* WHAT DRIVES THE PRICE */}
      <section style={{ padding: '3rem 1.5rem', background: '#fafafa', borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>
        <div style={S.container}>
          <h2 style={S.h2}>What Actually Drives Your Composite Deck Cost in NoVA</h2>
          <p style={S.p}>
            Seven cost levers shape every NoVA composite deck quote. Knowing which ones apply to your build is the difference between a $24,000 and a $40,000 final number for the same square footage.
          </p>
          <ol style={{ paddingLeft: '1.25rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.7rem', lineHeight: 1.75 }}><strong>Material tier.</strong> The single biggest lever. Budget capped composite vs premium PVC is a 60–80% spread on material cost alone.</li>
            <li style={{ marginBottom: '0.7rem', lineHeight: 1.75 }}><strong>Square footage and shape.</strong> Rectangular costs less per sqft than complex multi-tier or angled geometry. Picture-frame borders and herringbone insets are aesthetic upgrades that add labor.</li>
            <li style={{ marginBottom: '0.7rem', lineHeight: 1.75 }}><strong>Elevation.</strong> Second-story decks need 6×6 engineered posts, safety rigging, and stairs to grade — adds $3,000–$8,000 over a ground-level build of the same size.</li>
            <li style={{ marginBottom: '0.7rem', lineHeight: 1.75 }}><strong>Railing system.</strong> Composite railing $3,000–$8,000 for a typical run. Cable rail $5,000–$12,000. Modern aluminum picket somewhere in between.</li>
            <li style={{ marginBottom: '0.7rem', lineHeight: 1.75 }}><strong>Stairs.</strong> Single flight $1,500–$4,000. Multi-flight to grade or split-level $4,000–$9,000+.</li>
            <li style={{ marginBottom: '0.7rem', lineHeight: 1.75 }}><strong>Site conditions.</strong> Slope, soil, root systems, access constraints. Sloped lots in Vienna, McLean, and Great Falls regularly add $2,000–$6,000 in additional foundation work.</li>
            <li style={{ marginBottom: '0.7rem', lineHeight: 1.75 }}><strong>Permits &amp; HOA review.</strong> Fairfax County permits $600–$1,300 with sealed structural drawings. Loudoun County $400–$900. HOA architectural review is free but adds 1–4 weeks of timeline. See our <Link href="/deck-permit-fairfax-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Fairfax County</Link> and <Link href="/deck-permit-loudoun-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun County</Link> permit guides.</li>
          </ol>

          <h3 style={S.h3}>Northern Virginia pricing examples to verify against project records</h3>
          <p style={S.pMuted}>
            The examples below are useful estimating scenarios. Before any one is reused as a formal case study, match it to a signed estimate, invoice, photo set, city, date, and final scope.
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.55rem', lineHeight: 1.7 }}>
              <strong>Ashburn, 380 sqft Trex Transcend rebuild</strong> — single-level ground deck replacing aged pressure-treated, Spiced Rum boards, composite railing, one stair flight, LED riser lighting. Total: <strong>$28,400 installed</strong>.
            </li>
            <li style={{ marginBottom: '0.55rem', lineHeight: 1.7 }}>
              <strong>Vienna, 460 sqft TimberTech AZEK Vintage second-story</strong> — walkout-grade deck on sloped lot, English Walnut boards, cable rail, two stair flights to grade, integrated lighting. Total: <strong>$48,900 installed</strong>.
            </li>
            <li style={{ marginBottom: '0.55rem', lineHeight: 1.7 }}>
              <strong>Manassas, 240 sqft Trex Enhance Basics ground deck</strong> — first-time deck on a townhome lot, Toasted Sand boards, composite railing, one stair flight. Total: <strong>$13,200 installed</strong>.
            </li>
            <li style={{ marginBottom: '0.55rem', lineHeight: 1.7 }}>
              <strong>McLean, 520 sqft Fiberon Concordia multi-level</strong> — two-tier walkout, Symmetry boards, modern aluminum railing, three stair flights, picture-frame border. Total: <strong>$54,300 installed</strong>.
            </li>
          </ul>
        </div>
      </section>

      {/* DECK REPLACEMENT */}
      <section style={{ padding: '3rem 1.5rem' }}>
        <div style={S.container}>
          <h2 style={S.h2}>Deck Replacement Cost — Resurfacing vs Full Rebuild</h2>
          <p style={S.p}>
            If you already have a deck and the framing is sound, you can skip 30–50% of the cost by resurfacing instead of full tear-down. Resurfacing strips the old surface boards and railings and installs new composite on the existing structure — only an option when the joists, beams, posts, and ledger pass inspection. Most 20+ year-old NoVA decks need full replacement because the ledger detail predates modern flashing standards. We assess the framing first, then quote.
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.55rem', lineHeight: 1.7 }}><strong>Composite deck resurface (NoVA, 2026):</strong> $16,000–$28,000 on a typical 300–400 sqft deck — boards, railings, fasteners, no framing.</li>
            <li style={{ marginBottom: '0.55rem', lineHeight: 1.7 }}><strong>Full composite deck rebuild (NoVA, 2026):</strong> $24,000–$48,000 on the same footprint — new framing, footings, ledger, boards, railings, permit.</li>
          </ul>
          <p style={S.pMuted}>
            See <Link href="/services/deck-replacement" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>full deck replacement services</Link> and <Link href="/services/deck-resurfacing" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck resurfacing</Link> for scope breakdowns.
          </p>
        </div>
      </section>

      {/* FINANCING */}
      <section id="financing" style={{ padding: '3rem 1.5rem', background: '#fafafa', borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>
        <div style={S.container}>
          <h2 style={S.h2}>Financing Your Composite Deck</h2>
          <p style={S.p}>
            Financing options may be available for eligible composite deck projects, subject to approval and provider terms. Start with a clear written scope, then ask about current options for new decks, resurfacing, repairs, and composite upgrades.
          </p>
          <p style={S.pMuted}>
            For compliant financing guidance: <Link href="/deck-financing" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck financing in Northern Virginia</Link>. If you already have a project range in mind, use the <Link href="/deck-payment-estimator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck payment estimator</Link> as a planning tool before requesting a written estimate.
          </p>
        </div>
      </section>

      {/* MAINTENANCE COST */}
      <section style={{ padding: '3rem 1.5rem' }}>
        <div style={S.container}>
          <h2 style={S.h2}>Ongoing Composite Deck Maintenance Cost</h2>
          <p style={S.p}>
            The post-install cost picture is where composite earns back its upfront premium versus wood. Annual maintenance: $0–$150 (a soap-and-water wash, optional power-wash at low pressure). No staining, no sealing, no sanding. Compare to pressure-treated wood at $1,500–$2,500 every two years for professional clean-sand-stain in NoVA. Over 15 years that&apos;s $11,000–$19,000 saved.
          </p>
          <p style={S.pMuted}>
            Detail: <Link href="/deck-maintenance-checklist-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck maintenance checklist for Virginia</Link>.
          </p>
        </div>
      </section>

      {/* FAQS */}
      <section id="faqs" style={{ padding: '3rem 1.5rem', background: '#fafafa', borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>
        <div style={S.container}>
          <h2 style={S.h2}>Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.1rem 1.25rem', marginBottom: '0.75rem', background: '#fff' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.02rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '0.85rem', lineHeight: 1.75, color: '#444', marginBottom: 0 }}>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* RELATED GUIDES */}
      <section style={{ padding: '3rem 1.5rem' }}>
        <div style={S.container}>
          <h2 style={S.h2}>Related Cost &amp; Comparison Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem' }}>
            {[
              ['/deck-cost-calculator', 'NoVA Deck Cost Calculator', 'Interactive estimate by size, material, add-ons'],
              ['/composite-deck-cost-by-size', 'Composite Cost by Size', '300 / 400 / 500 / 600 sqft pricing breakdown'],
              ['/monthly-payment-composite-deck-northern-virginia', 'Monthly Payment on a Composite Deck', '$15k–$70k project payment ranges'],
              ['/deck-lighting-railings-stairs-addon-cost', 'Lighting, Railings &amp; Stairs Add-On Costs', 'Per-linear-foot pricing for the biggest add-ons'],
              ['/credit-score-deck-financing', 'Credit Score for Deck Financing', 'Credit-readiness guidance'],
              ['/wood-vs-composite-deck-long-term-cost', 'Wood vs Composite — 15-Yr Cost', '15-year total including maintenance + financing'],
              ['/trex-vs-timbertech-vs-azek', 'Trex vs TimberTech vs AZEK vs Fiberon', 'Full 4-way comparison'],
              ['/how-tariffs-affect-deck-prices-2026', '2026 Deck Tariff Impact', 'How import duties moved the market'],
              ['/composite-deck-cost-northern-virginia', 'Deck Cost (All Materials)', 'Composite, wood, and cedar pricing side by side'],
              ['/composite-deck-vs-wood-deck-virginia', 'Composite vs Wood Decision', 'Total-cost-of-ownership math'],
              ['/does-a-deck-add-value-to-your-home', 'Deck ROI &amp; Home Value', 'What composite recoups at resale'],
              ['/services/deck-replacement', 'Deck Replacement Services', 'Full rebuild scope and pricing'],
              ['/services/deck-resurfacing', 'Deck Resurfacing', 'When resurface is the right call'],
              ['/deck-financing', 'Deck Financing in NoVA', 'Options may be available; subject to approval'],
              ['/deck-payment-estimator', 'Deck Payment Estimator', 'Estimate monthly payments by project amount'],
              ['/deck-maintenance-checklist-virginia', 'Maintenance Checklist', 'Annual care for composite decks'],
              ['/deck-permit-fairfax-county-virginia', 'Fairfax County Permits', '3–5 week review, $600–$1,300'],
              ['/deck-permit-loudoun-county-virginia', 'Loudoun County Permits', 'LOLA portal, 2–4 weeks, $400–$900'],
            ].map(([href, title, desc]) => (
              <li key={href}>
                <Link href={href} style={{ display: 'block', padding: '1rem', border: '1px solid #e2e8f0', borderRadius: 8, textDecoration: 'none', color: 'inherit', height: '100%' }}>
                  <p style={{ fontWeight: 700, color: 'var(--color-primary)', margin: 0, marginBottom: '0.3rem' }} dangerouslySetInnerHTML={{ __html: title }} />
                  <p style={{ fontSize: '0.88rem', color: '#4a5568', margin: 0 }}>{desc}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SimpleCTA title="Get Your Exact Composite Deck Quote" buttonText="Request Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath="/composite-deck-cost-northern-virginia" />
      
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Resources</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building Services →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Customer Reviews (Google reviews) →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/about" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>About Loudoun Decks →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/get-estimate" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Get a Free Estimate →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/deck-builder-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck Builder in Northern Virginia →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/outdoor-living-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Outdoor Living in Northern Virginia →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/wood-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Wood Decks — Cedar, IPE & Pressure-Treated →</Link></li>
        </ul>
      </section>
      <ContactHome />
    </>
  );
}
