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
  path: '/timbertech-azek-deck-cost-northern-virginia',
  title: 'TimberTech & AZEK Deck Cost: Premium PVC Budget Guide (2026)',
  description: 'TimberTech and AZEK deck cost in Northern Virginia. PRO, EDGE, and Vintage tier pricing, 50-year warranty details, and monthly payment examples.',
  image: '/social/timbertech-azek-deck-cost-northern-virginia-social.png',
});

const PATH = '/timbertech-azek-deck-cost-northern-virginia';

const faqs = [
  {
    q: 'How much does a TimberTech or AZEK deck cost in Northern Virginia?',
    a: 'Installed cost in Northern Virginia: TimberTech EDGE Prime+ runs $35–$45/sqft, TimberTech PRO Reserve runs $45–$60/sqft, and TimberTech AZEK Vintage (full PVC) runs $60–$85/sqft. A 350 sqft AZEK Vintage project typically lands $28,000–$42,000+.',
  },
  {
    q: "What's the difference between TimberTech PRO and AZEK Vintage?",
    a: 'TimberTech PRO is a capped polymer composite — a wood-flour core with a PVC cap on four sides. TimberTech AZEK Vintage is full PVC (no wood content), which makes it cooler underfoot in summer, more dimensionally stable, and carries the longest residential warranty in the industry (50-year limited + 50-year fade & stain).',
  },
  {
    q: 'Is AZEK worth the premium over Trex Transcend?',
    a: 'For Northern Virginia humidity and sun exposure, AZEK Vintage typically lasts longer with less surface change than wood-core composites. The premium ($8–$15/sqft over Trex Transcend) is worth it for homeowners who want a 50-year warranty, the lowest surface temperature, and the deepest grain pattern. For most mid-range projects, Trex Transcend or TimberTech PRO Reserve are equally good options at a lower price.',
  },
  {
    q: 'What is the monthly payment on a $35,000 AZEK deck?',
    a: 'At a sample 8.99% APR, a $35,000 AZEK deck financed over 10 years is roughly $443/month and roughly $355/month over 15 years. Pre-qualification through a soft credit pull returns your real APR and term without affecting your credit score.',
  },
  {
    q: 'Does AZEK Vintage come in a board pattern that looks like real wood?',
    a: 'Yes. AZEK Vintage uses a low-gloss multi-tonal streaking process that mimics premium hardwoods like English Walnut, Mahogany, Coastline, and Dark Hickory. Side-by-side with the wood it imitates, AZEK Vintage is the closest match on the market.',
  },
  {
    q: 'Can I finance a TimberTech or AZEK deck in Northern Virginia?',
    a: 'Yes. We work with Enhancify for soft-pull pre-qualification — multiple lender offers in roughly 60 seconds with no credit score impact. Most homeowners model the project amount in the estimator first, then pre-qualify to convert the model into a real rate and term.',
  },
  {
    q: 'How long does a TimberTech installation take?',
    a: 'On-site build for a 300–500 sqft TimberTech or AZEK deck is 1–2 weeks. Permit review in Loudoun, Fairfax, or Prince William typically adds 1–4 weeks; HOA approval adds 2–6 weeks. Total project timeline from contract to finished deck is 4–8 weeks.',
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

const tiers = [
  {
    name: 'TimberTech EDGE',
    sub: 'Entry tier — capped composite (Prime+ collection)',
    range: '$35–$45 /sqft installed',
    construction: 'Capped composite, wood-flour core, PVC cap',
    warranty: '25-yr residential + 25-yr fade & stain',
    project350: '$18,000–$26,000',
    monthly: '$228–$329 /mo over 10y',
  },
  {
    name: 'TimberTech PRO',
    sub: 'Mid tier — Reserve & Legacy collections',
    range: '$45–$60 /sqft installed',
    construction: 'Capped composite, polymer-blend core, full PVC cap',
    warranty: '30-yr residential + 30-yr fade & stain',
    project350: '$22,000–$32,000',
    monthly: '$278–$405 /mo over 10y',
  },
  {
    name: 'TimberTech AZEK Vintage',
    sub: 'Premium tier — full PVC, hardwood-mimic pattern',
    range: '$60–$85 /sqft installed',
    construction: 'Full PVC (no wood content), Alloy Armour Technology',
    warranty: '50-yr residential + 50-yr fade & stain',
    project350: '$28,000–$42,000+',
    monthly: '$354–$531 /mo over 10y',
  },
];

// 8.99% APR amortization: total = monthly × months; interest = total − principal
const paymentMatrix = [
  ['$20,000', '$253', '$203', '$10,360'],
  ['$28,000', '$355', '$284', '$14,600'],
  ['$35,000', '$443', '$355', '$18,160'],
  ['$42,000', '$532', '$426', '$21,840'],
  ['$55,000', '$696', '$558', '$28,520'],
];

const colorways = [
  { name: 'English Walnut', notes: 'Deep brown with streaked grain — flagship AZEK pattern' },
  { name: 'Coastline', notes: 'Driftwood grey, low-gloss, multi-tonal' },
  { name: 'Mahogany', notes: 'Rich red-brown — closest match to real mahogany' },
  { name: 'Dark Hickory', notes: 'Mid-brown with knot pattern — popular Northern Virginia choice' },
  { name: 'Weathered Teak', notes: 'Golden tone with grey undertones — coastal-modern look' },
];

export default function TimberTechAzekDeckCostPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ArticleSchema
        title="TimberTech & AZEK Deck Cost: Premium PVC Budget Guide (2026)"
        description="TimberTech and AZEK deck cost in Northern Virginia. PRO, EDGE, and Vintage tier pricing, 50-year warranty details, and monthly payment examples."
        path={PATH}
        image="/showcase/img22.jpg"
        datePublished="2026-05-27"
        dateModified="2026-05-27"
      />
      <WebPageSchema dateModified="2026-06-01" url={`https://ldndecks.com${PATH}`} name="TimberTech &amp; AZEK Deck Cost: Premium PVC Budget Guide (2026)" description="TimberTech and AZEK deck cost in Northern Virginia. PRO, EDGE, and Vintage tier pricing, 50-year warranty details, and monthly payment examples." speakable />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={S.container}>
          <p style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            TimberTech &amp; AZEK &middot; Northern Virginia
          </p>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.15 }}>
            TimberTech & AZEK Deck Cost: Premium PVC Budget Guide
          </h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Real installed costs for TimberTech EDGE, PRO, and AZEK Vintage in Northern Virginia, plus matching monthly
            payment examples and a side-by-side warranty comparison.
          </p>
        </div>
      </section>

      <TrustBanner />

      <AboveFoldCTA
        headline="Plan a premium TimberTech or AZEK deck budget — model your project amount in the deck payment estimator."
        estimateHref="/deck-payment-estimator"
        estimateLabel="Plan a Premium Deck Budget"
      />

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }} className="quick-answer">
        <div style={S.container}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p data-speakable>
            A <strong>350 sqft TimberTech deck</strong> in Northern Virginia runs <strong>$18,000–$42,000+</strong>{' '}
            depending on tier (EDGE / PRO / AZEK Vintage). At 8.99% APR over 10 years that&apos;s roughly{' '}
            <strong>$228–$531/month</strong>. AZEK Vintage carries the industry&apos;s{' '}
            <strong>50-year residential warranty</strong>. Run your project amount through the{' '}
            <Link href="/deck-payment-estimator" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>
              deck payment estimator
            </Link>{' '}
            for a planning monthly estimate.
          </p>
        </div>
      </section>

      <article style={{ padding: '3.5rem 0' }}>
        <div style={S.container}>
          <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/showcase/img22.jpg"
              alt="TimberTech AZEK deck project in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 960px) 100vw, 960px"
              quality={70}
              priority
            />
          </div>

          <h2 style={{ ...S.h2, marginTop: 0 }}>TimberTech Tiers — Northern Virginia (2026)</h2>
          <p style={S.p}>
            TimberTech ships three residential lines: EDGE (entry), PRO (mid), and the premium AZEK Vintage collection
            (full PVC, hardwood-mimic grain). Each tier targets a different budget and warranty length. Pricing below
            is installed cost in Northern Virginia.
          </p>

          {tiers.map((t, i) => (
            <div key={t.name} style={{ background: i === 2 ? '#fff8f1' : '#f9f9f9', border: `1px solid ${i === 2 ? '#f4d2bd' : '#e5e5e5'}`, borderRadius: 12, padding: '1.5rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <h3 style={{ ...S.h3, margin: 0 }}>{t.name}</h3>
                <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>{t.range}</span>
              </div>
              <p style={{ ...S.p, color: '#666', fontSize: '0.95rem', marginBottom: '0.75rem' }}>{t.sub}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.5rem 1rem', fontSize: '0.9rem' }}>
                <div><strong>Construction:</strong> {t.construction}</div>
                <div><strong>Warranty:</strong> {t.warranty}</div>
                <div><strong>350 sqft project:</strong> {t.project350}</div>
                <div><strong>Monthly (10y):</strong> {t.monthly}</div>
              </div>
            </div>
          ))}

          <h2 style={S.h2}>What Makes AZEK Vintage Different</h2>
          <p style={S.p}>
            AZEK Vintage is the only tier with <strong>full PVC</strong> construction (no wood content). That single
            difference drives three outcomes in Northern Virginia:
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', lineHeight: 1.85 }}>
            <li><strong>Cooler underfoot in summer</strong> — full PVC reflects more heat than wood-core composites</li>
            <li><strong>Most dimensionally stable</strong> — no swelling or contracting from humidity cycles</li>
            <li><strong>50-year residential warranty</strong> — longest in the industry, transferable to a new owner</li>
            <li><strong>Lifetime fade & stain protection</strong> — Alloy Armour Technology, no surface chalking</li>
            <li><strong>Premium grain pattern</strong> — low-gloss multi-tonal streaking that mimics premium hardwoods</li>
          </ul>

          <h2 style={S.h2}>Popular AZEK Vintage Colorways in Northern Virginia</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {colorways.map((c) => (
              <div key={c.name} style={{ background: '#fafafa', border: '1px solid #eee', borderRadius: 8, padding: '1.1rem' }}>
                <h3 style={{ fontWeight: 700, marginTop: 0, marginBottom: '0.4rem', fontSize: '1rem' }}>{c.name}</h3>
                <p style={{ fontSize: '0.9rem', color: '#555', margin: 0, lineHeight: 1.5 }}>{c.notes}</p>
              </div>
            ))}
          </div>

          <h2 style={S.h2}>Monthly Payment by Project Amount (TimberTech / AZEK)</h2>
          <p style={S.p}>
            The table below converts typical TimberTech project amounts into monthly payments at a sample 8.99% APR.
            Longer term = lower monthly, higher total interest.
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={S.th}>Project Amount</th>
                  <th style={S.th}>10-Year /mo</th>
                  <th style={S.th}>15-Year /mo</th>
                  <th style={S.th}>Total Interest (10y)</th>
                </tr>
              </thead>
              <tbody>
                {paymentMatrix.map((row, i) => (
                  <tr key={row[0]} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <td style={{ ...S.td, fontWeight: 700 }}>{row[0]}</td>
                    <td style={S.td}>{row[1]}</td>
                    <td style={{ ...S.td, color: 'var(--color-primary)', fontWeight: 700 }}>{row[2]}</td>
                    <td style={{ ...S.td, color: '#555' }}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ background: '#fff8f1', border: '1px solid #f4d2bd', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.25rem' }}>
            <p data-speakable style={{ margin: 0, fontWeight: 600 }}>
              A $35,000 TimberTech AZEK Vintage deck financed at 8.99% APR over 10 years costs approximately $53,160
              total — $18,160 in interest. A 15-year term lowers the monthly payment to $355 but raises total interest
              to roughly $28,900.
            </p>
          </div>
          <p style={{ ...S.p, fontSize: '0.85rem', color: '#777', fontStyle: 'italic' }}>
            Illustrative only at 8.99% APR. Your real APR and term come from a lender pre-qualification.
          </p>

          <h2 style={S.h2}>TimberTech vs Trex: Side-by-Side</h2>
          <p style={S.p}>
            TimberTech PRO Reserve and Trex Transcend are usually within $1–$3/sqft of each other on installed pricing.
            The deciding factor is grain pattern and warranty: TimberTech PRO carries 30-year fade & stain (vs Trex
            Transcend&apos;s 25-year). AZEK Vintage&apos;s 50-year warranty is unmatched. For a complete brand
            comparison, see{' '}
            <Link href="/trex-vs-timbertech-vs-azek" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
              Trex vs TimberTech vs AZEK
            </Link>{' '}
            and the{' '}
            <Link href="/trex-deck-cost-monthly-payment" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
              Trex deck cost vs monthly payment guide
            </Link>.
          </p>

          <h2 style={S.h2}>What the Project Amount Should Include</h2>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', lineHeight: 1.85 }}>
            <li>TimberTech or AZEK decking material with hidden fastener system</li>
            <li>Framing — pressure-treated lumber or steel substructure (AZEK Vintage works well with steel)</li>
            <li>Railings: TimberTech composite, AZEK aluminum, or cable</li>
            <li>Picture-frame border (especially common with Vintage colorways)</li>
            <li>Stairs, lighting, fascia, skirt</li>
            <li>Permits and HOA submission for Loudoun, Fairfax, Prince William, Arlington, Alexandria</li>
            <li>Demolition of old deck and haul-away</li>
            <li>Written workmanship warranty terms plus manufacturer warranty information for the selected TimberTech or AZEK product line</li>
          </ul>

          <h2 style={S.h2}>Financing a Premium PVC Deck</h2>
          <p style={S.p}>
            AZEK and TimberTech PRO are priced toward the top of the composite market. Many Northern Virginia
            homeowners model the payment first, then choose a tier that fits the comfortable monthly range. Soft-pull
            pre-qualification through Enhancify returns multiple lender offers in roughly 60 seconds without affecting
            your credit score. Process detail on the{' '}
            <Link href="/deck-financing" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
              deck financing page
            </Link>.
          </p>

          <h2 style={S.h2}>FAQ</h2>
          {faqs.map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 10, padding: '1.25rem', marginBottom: '0.75rem', background: '#fff' }}>
              <summary style={{ fontWeight: 700, cursor: 'pointer', fontSize: '1rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.75, color: '#555', fontSize: '0.95rem' }}>{faq.a}</p>
            </details>
          ))}

          <div style={{ background: 'var(--color-dark)', borderRadius: 14, padding: '2.5rem 2rem', textAlign: 'center', margin: '3rem 0 1rem' }}>
            <h2 style={{ fontSize: '1.7rem', fontWeight: 800, color: '#fff', marginTop: 0, marginBottom: '0.75rem' }}>
              Plan a Premium Deck Budget
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 560, margin: '0 auto 1.75rem', fontSize: '1.02rem', lineHeight: 1.6 }}>
              Drop your TimberTech or AZEK project amount into the deck payment estimator and see monthly options.
            </p>
            <Link
              href="/deck-payment-estimator"
              style={{ display: 'inline-block', background: 'var(--color-primary)', color: '#fff', padding: '1rem 2rem', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: '1.02rem' }}
            >
              Open the Deck Payment Estimator →
            </Link>
          </div>

          <h2 style={S.h2}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/timbertech-decks', 'TimberTech & AZEK Decks — Service Overview'],
              ['/deck-payment-estimator', 'Deck Payment Estimator'],
              ['/composite-deck-cost-northern-virginia', 'Composite Deck Cost in Northern Virginia'],
              ['/trex-vs-timbertech-vs-azek', 'Trex vs TimberTech vs AZEK'],
              ['/trex-deck-cost-monthly-payment', 'Trex Deck Cost vs Monthly Payment'],
              ['/monthly-payment-composite-deck-northern-virginia', 'Monthly Payment on a Composite Deck'],
              ['/composite-deck-vs-wood-deck-virginia', 'Composite vs Wood Deck'],
              ['/deck-financing', 'Deck Financing in Northern Virginia'],
              ['/credit-score-deck-financing', 'Credit Score Required for Deck Financing'],
              ['/best-time-to-finance-build-deck-northern-virginia', 'Best Time to Finance &amp; Build'],
              ['/deck-lighting-railings-stairs-addon-cost', 'Add-On Cost: Lighting, Railings &amp; Stairs'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}>
                <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <SimpleCTA
        title="Plan Your TimberTech / AZEK Deck Budget"
        buttonText="Get Free Written Estimate"
        link="/get-estimate"
      />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-27" />
      <RelatedGuides currentPath={PATH} />
      <ContactHome />
    </>
  );
}
