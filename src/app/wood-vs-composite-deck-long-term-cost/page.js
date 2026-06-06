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
  path: '/wood-vs-composite-deck-long-term-cost',
  title: 'Wood vs Composite Deck Long-Term Cost: 15-Year Analysis',
  description: 'Wood vs composite deck long-term cost in Northern Virginia. 15-year total cost including maintenance, repairs, financing, and resale impact.',
  image: '/social/wood-vs-composite-deck-long-term-cost-social.png',
});

const PATH = '/wood-vs-composite-deck-long-term-cost';

const fifteenYear = [
  { item: 'Upfront cost (350 sqft)', wood: '$10,500–$16,000', composite: '$22,000–$32,000', diff: 'Composite +$12k–$16k' },
  { item: 'Annual stain/seal (15 yrs)', wood: '$5,400–$10,500 ($360–$700/yr)', composite: '$0', diff: 'Composite saves $5.4k–$10.5k' },
  { item: 'Sanding (every 5 yrs)', wood: '$1,500–$3,000', composite: '$0', diff: 'Composite saves $1.5k–$3k' },
  { item: 'Board replacement (years 8–15)', wood: '$2,000–$5,000', composite: '$0–$500', diff: 'Composite saves $2k–$4.5k' },
  { item: 'Cleaning (15 yrs)', wood: '$0–$750', composite: '$300–$750', diff: 'Roughly equal' },
  { item: 'TOTAL 15-year cost', wood: '$19,400–$35,250', composite: '$22,300–$33,250', diff: 'Composite often equal or LESS' },
  { item: 'Lifespan after 15 yrs', wood: 'Near end of life', composite: '10–35 years remaining', diff: 'Composite wins long-term' },
  { item: 'Resale recoup', wood: '50–65%', composite: '65–80%', diff: 'Composite adds $5k–$10k+ at resale' },
];

const faqs = [
  {
    q: 'Is composite cheaper than wood over 15 years?',
    a: 'Often yes. A 350 sqft pressure-treated wood deck costs $10,500–$16,000 upfront, but adds $7,000–$15,000+ in 15-year maintenance (stain, seal, sand, board replacement). A composite deck costs $22,000–$32,000 upfront and adds only $300–$1,250 in 15-year maintenance. Total 15-year cost often equal or favoring composite.',
  },
  {
    q: 'How much does wood deck maintenance cost in Northern Virginia?',
    a: 'Wood deck maintenance in Northern Virginia runs $360–$700 per year for stain/seal, plus $1,500–$3,000 every ~5 years for sanding, plus $2,000–$5,000 in board replacement between years 8–15. Total 15-year maintenance: $7,000–$15,000+ depending on size and exposure.',
  },
  {
    q: 'How long does a wood deck last in Northern Virginia?',
    a: 'A pressure-treated wood deck in Northern Virginia typically lasts 10–15 years with regular maintenance. Composite (Trex Transcend, TimberTech PRO) lasts 25–50 years. Premium PVC (AZEK Vintage) carries a 50-year warranty.',
  },
  {
    q: 'Does composite cost more to finance than wood?',
    a: 'Yes upfront. The higher composite project amount means a higher monthly payment at the same APR and term. But over the 15-year horizon, you avoid out-of-pocket maintenance costs that aren\'t in the loan. Many homeowners model both monthly payment and 15-year total cost before picking.',
  },
  {
    q: 'Does composite add more home value than wood?',
    a: 'Yes. Composite decks recoup 65–80% of cost at resale in Northern Virginia; wood decks recoup 50–65%. Homes with composite decks also tend to sell 3–5 days faster in the active NoVA market. A $30,000 composite deck typically adds $19,500–$24,000 to resale value.',
  },
  {
    q: 'Does the math change for short-term homeowners?',
    a: 'Yes. If you\'re planning to sell within 5 years, the resale recoup difference (composite +$5k–$10k+) often justifies the higher upfront cost. Wood is hardest to justify in the 5–10 year horizon — high upfront annual maintenance starts to compound right when you might sell.',
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
  th: { padding: '0.85rem', textAlign: 'left', borderBottom: '2px solid #ddd', fontSize: '0.9rem', background: '#f5f5f5' },
  td: { padding: '0.85rem', borderBottom: '1px solid #eee', fontSize: '0.9rem' },
  container: { maxWidth: 960, margin: '0 auto', padding: '0 1.5rem' },
};

export default function WoodVsCompositeLongTermPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ArticleSchema
        title="Wood vs Composite Deck Long-Term Cost: 15-Year Analysis"
        description="Wood vs composite deck long-term cost in Northern Virginia. 15-year total cost including maintenance, repairs, financing, and resale impact."
        path={PATH}
        image="/images/img16.jpeg"
        datePublished="2026-05-27"
        dateModified="2026-05-27"
      />
      <WebPageSchema dateModified="2026-06-01" url={`https://ldndecks.com${PATH}`} name="Wood vs Composite Deck Long-Term Cost: 15-Year Analysis" description="Wood vs composite deck long-term cost in Northern Virginia. 15-year total cost including maintenance, repairs, financing, and resale impact." speakable />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={S.container}>
          <p style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Cost Comparison &middot; Long-Term
          </p>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.15 }}>
            Wood vs Composite Deck Long-Term Cost: Maintenance, Repairs, and Financing
          </h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Composite costs more upfront but often less over 15 years once stain, seal, sanding, and board replacement
            are added. Full 15-year cost breakdown for Northern Virginia.
          </p>
        </div>
      </section>

      <TrustBanner />

      <AboveFoldCTA
        headline="Compare wood vs composite monthly payment in seconds with the deck payment estimator."
        estimateHref="/deck-payment-estimator"
        estimateLabel="Compare Lifetime Cost"
      />

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }} className="quick-answer">
        <div style={S.container}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p data-speakable>
            A 350 sqft <strong>wood deck</strong> costs $10.5k–$16k upfront but adds <strong>$7k–$15k+</strong> in
            15-year stain, seal, sand, and board replacement. A <strong>composite deck</strong> costs $22k–$32k upfront
            and adds only $300–$1,250 in 15-year maintenance. <strong>Total 15-year cost is often equal or favors
            composite</strong>, and composite typically lasts 10–35 more years after that.
          </p>
        </div>
      </section>

      <article style={{ padding: '3.5rem 0' }}>
        <div style={S.container}>
          <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img16.jpeg"
              alt="Wood vs composite deck long-term cost in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 960px) 100vw, 960px"
              quality={70}
              priority
            />
          </div>

          <h2 style={{ ...S.h2, marginTop: 0 }}>15-Year Total Cost: Wood vs Composite</h2>
          <p style={S.p}>
            Below is the full 15-year cost for a 350 sqft deck in Northern Virginia, broken down line by line. The
            upfront cost difference reverses once cumulative maintenance is factored in.
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={S.th}>Cost Item</th>
                  <th style={S.th}>Pressure-Treated Wood</th>
                  <th style={S.th}>Composite (Mid Tier)</th>
                  <th style={S.th}>Difference</th>
                </tr>
              </thead>
              <tbody>
                {fifteenYear.map((row, i) => (
                  <tr key={i} style={{ background: i === 5 ? '#fff8f1' : (i % 2 ? '#fafafa' : '#fff') }}>
                    <td style={{ ...S.td, fontWeight: i === 5 ? 800 : 600 }}>{row.item}</td>
                    <td style={S.td}>{row.wood}</td>
                    <td style={S.td}>{row.composite}</td>
                    <td style={{ ...S.td, color: row.diff.includes('Composite') ? '#2e7d32' : '#555', fontWeight: i === 5 ? 700 : 400 }}>{row.diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>Why Wood Maintenance Cost Stacks Up in Northern Virginia</h2>
          <p style={S.p}>
            Northern Virginia has the worst wood deck climate on the East Coast — humid summers, freeze-thaw winters,
            and a long pollen season. Stain breaks down faster than the manufacturer claim. Boards cup and split sooner
            than the 15-year wood deck lifespan rating. Annual maintenance is not optional — skipping a year accelerates
            board replacement and shortens lifespan.
          </p>

          <h2 style={S.h2}>Financing Math: Different Principal, Same APR</h2>
          <p style={S.p}>
            A wood deck financed at $13,000 over 10 years at 8.99% APR is roughly $165/month. A composite deck financed
            at $27,000 over the same terms is roughly $342/month. Composite costs $177/month more in financing — but
            the wood deck adds $30–$60/month in maintenance not on the loan. Real cost gap is usually $100–$120/month,
            not the $177 the loan suggests.
          </p>

          <h2 style={S.h2}>Resale Value Impact in Northern Virginia</h2>
          <p style={S.p}>
            Buyers in Loudoun, Fairfax, and Prince William increasingly expect composite decks. Listings with wood
            decks (especially older wood decks) sit longer on the market and get lower offers on the deck component.
            Composite typically recoups 65–80% of original cost at resale; wood recoups 50–65%. On a $25,000 deck, that
            gap is $3,750–$5,000 at resale.
          </p>

          <h2 style={S.h2}>When Wood Still Makes Sense</h2>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', lineHeight: 1.85 }}>
            <li><strong>Very short ownership horizon (under 3 years)</strong> — maintenance hasn&apos;t compounded yet</li>
            <li><strong>Rental property where tenants maintain it</strong> — cost shifts to occupier</li>
            <li><strong>Strict HOA wood-only rules</strong> — rare, but exists in some historic districts</li>
            <li><strong>Cash flow extremely constrained</strong> — wood&apos;s lower upfront fits a smaller loan</li>
          </ul>

          <h2 style={S.h2}>Material-Specific Cost Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/wood-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Wood Decks — Cedar, IPE & Pressure-Treated →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/composite-deck-vs-wood-deck-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Composite vs Wood Deck Comparison (full guide) →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Composite Deck Cost in Northern Virginia →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/how-long-does-a-composite-deck-last" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                How Long Does a Composite Deck Last? →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/best-deck-stain-sealer-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Best Deck Stain & Sealer for Virginia →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/trex-vs-timbertech-vs-azek" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Trex vs TimberTech vs AZEK Comparison →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Deck Cost Calculator →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/deck-payment-estimator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Monthly Payment Estimator →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/deck-financing" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Deck Financing Options →
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

      <SimpleCTA title="Compare Lifetime Cost: Wood vs Composite" buttonText="Get Free Estimate" link="/get-estimate" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-27" />
      <RelatedGuides currentPath={PATH} />
      <ContactHome />
    </>
  );
}
