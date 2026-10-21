import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ArticleSchema from '@/components/ArticleSchema';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/deck-roi-calculator-northern-virginia',
  title: 'Deck ROI in Northern Virginia (2026)',
  description: 'How much value does a deck add in Northern Virginia? Resale recovery is not a fixed percentage, and this page does not publish one.',
  image: '/social/deck-roi-calculator-northern-virginia-social.png',
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much value does a deck add to a home in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "Resale recovery is not a fixed percentage, and this page does not publish one or a national-average comparison. A Trex Transcend deck does not have a published resale amount on this page. This page does not publish a wood-deck resale percentage." } },
    { "@type": "Question", name: "What type of deck gives the best ROI?", acceptedAnswer: { "@type": "Answer", text: "This page does not publish a resale percentage for any deck material. A written estimate is the project price." } },
    { "@type": "Question", name: "Does a screened porch have better ROI than a deck?", acceptedAnswer: { "@type": "Answer", text: "In Northern Virginia, this page does not publish a resale percentage for a screened porch or an open deck. However, screened porches cost significantly more (a written estimate), so the absolute dollar value added can be higher. The best ROI per dollar spent is an open composite deck." } },
    { "@type": "Question", name: "Does deck ROI vary by county in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "This page does not publish a county recovery rate. A written estimate is the project price." } },
    { "@type": "Question", name: "Does a deck without a permit affect home value?", acceptedAnswer: { "@type": "Answer", text: "Yes, significantly. An unpermitted deck is flagged during home inspections and can reduce your home's value by a written estimate or more. Buyers may require removal or retrofitting as a condition of sale. In competitive Northern Virginia markets, unpermitted structures are a red flag that can kill deals." } },
    { "@type": "Question", name: "What is the ROI sweet spot for deck investment?", acceptedAnswer: { "@type": "Answer", text: "This page does not publish an investment range or a resale percentage. A written estimate is the project price." } },
  ],
};

const S = {
  h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' },
  h3: { fontSize: '1.2rem', fontWeight: 600, margin: '1.5rem 0 0.5rem' },
  p: { marginBottom: '1rem', lineHeight: 1.7 },
  th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' },
  td: { padding: '0.75rem', borderBottom: '1px solid #eee' },
};

export default function DeckROICalculatorPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema dateModified="2026-10-18" url="https://ldndecks.com/deck-roi-calculator-northern-virginia" name="Deck ROI in Northern Virginia (2026)" description="How much value does a deck add in Northern Virginia? Resale recovery is not a fixed percentage, and this page does not publish one." speakable />
      <ArticleSchema
        title="Deck ROI in Northern Virginia: 2026 Home Value Data"
        description="How much value does a deck add in Northern Virginia? Real ROI data by material, project type, and county — plus the investment sweet spot."
        path="/deck-roi-calculator-northern-virginia"
        image="/images/img13.jpeg"
        datePublished="2026-04-26"
        dateModified="2026-10-18"
      />

      {/* Hero */}
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Deck ROI in Northern Virginia (2026)</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Real resale data by material, project type, and county &mdash; how much value your deck actually adds</p>
        </div>
      </section>

      {/* Quick Answer */}
      <section data-speakable="true" style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p>Resale recovery is not a fixed percentage, and this page does not publish one for composite, wood, or a county. It also does not publish a national comparison. A written estimate is the project price. <CallLink style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Call (571) 655-7207</CallLink> for an estimate.</p>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          {/* Hero Image */}
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img13.jpeg"
              alt="Beautiful composite deck adding value to a Northern Virginia home"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>

          {/* ===== SECTION 1: Why Deck ROI Matters ===== */}
          <p style={S.p}>Every homeowner considering a new deck asks the same question: &ldquo;Will I get my money back?&rdquo; The answer in Northern Virginia is more favorable than almost anywhere else in the country. The DC metro area&apos;s high home values, strong buyer demand for outdoor living space, and relatively mild three-season climate create a market where decks deliver outsized returns.</p>
          <p style={S.p}>Material, size, features, and county can change a resale conversation. This page does not publish a recovery percentage, a national comparison, or a figure from a past sale.</p>
          <p style={S.p}>Whether you&apos;re building a deck primarily for enjoyment (most people) or with an eye toward resale (increasingly common in this market), understanding ROI helps you make smarter decisions about materials, scope, and budget.</p>

          {/* ===== SECTION 2: ROI by Material ===== */}
          <h2 style={S.h2}>Deck ROI by Material Type</h2>
          <p style={S.p}>The material you choose has the single biggest impact on ROI. Buyers perceive composite and PVC decking as premium, low-maintenance assets. Wood decking &mdash; unless it&apos;s recently stained and in excellent condition &mdash; is discounted because buyers mentally add future maintenance costs.</p>

          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  {['Material', 'Typical Cost (300 sqft)', 'Resale recovery', 'Value Added', 'Buyer Perception'].map(h => <th key={h} style={S.th}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Pressure-Treated Wood', 'a written estimate', 'Not published', 'a written estimate', 'Basic — needs work'],
                  ['Cedar', 'a written estimate', 'Not published', 'a written estimate', 'Nice but aging'],
                  ['Trex Enhance', 'a written estimate', 'Not published', 'a written estimate', 'Good composite'],
                  ['Trex Transcend', 'a written estimate', 'Not published', 'a written estimate', 'Premium — move-in ready'],
                  ['TimberTech AZEK', 'a written estimate', 'Not published', 'a written estimate', 'Luxury — impressive'],
                  ['Trex Lineage', 'a written estimate', 'Not published', 'a written estimate', 'Top tier — wow factor'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400, color: (i === 3 || i === 5) && j === 2 ? 'var(--color-primary)' : 'inherit' }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ ...S.p, fontSize: '0.85rem', color: '#777' }}>This page does not publish a resale percentage. It does not restate or adjust an outside cost-versus-value report.</p>

          {/* ===== SECTION 3: ROI by Project Type ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>ROI by Project Type</h2>
          <p style={S.p}>Not all outdoor projects deliver the same return. Here is how different project types compare in the Northern Virginia market:</p>

          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  {['Project Type', 'Typical Investment', 'Resale recovery', 'Value Added', 'Best For'].map(h => <th key={h} style={S.th}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Basic Composite Deck', 'a written estimate', 'Not published', 'a written estimate', 'Best ROI per dollar'],
                  ['Multi-Level Deck', 'a written estimate', 'Not published', 'a written estimate', 'Larger homes'],
                  ['Screened Porch', 'a written estimate', 'Not published', 'a written estimate', 'Year-round use'],
                  ['Outdoor Kitchen + Deck', 'a written estimate', 'Not published', 'a written estimate', 'Entertainers'],
                  ['Deck + Patio Combo', 'a written estimate', 'Not published', 'a written estimate', 'Balanced approach'],
                  ['Deck Resurfacing', 'a written estimate', 'Not published', 'a written estimate', 'Lower scope when the frame is sound'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400, color: (i === 0 || i === 5) && j === 2 ? 'var(--color-primary)' : 'inherit' }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={S.p}>If the frame is sound, resurfacing replaces the boards without rebuilding the structure. This page does not publish a recovery percentage for that scope. See <Link href="/deck-resurfacing-vs-replacement" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>resurfacing versus replacement</Link>.</p>

          {/* ===== SECTION 4: Northern Virginia Premium ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Why Northern Virginia Deck ROI Exceeds the National Average</h2>
          <p style={S.p}>This page does not publish a national average or a Northern Virginia recovery rate. Local demand still changes how buyers talk about outdoor space:</p>

          <h3 style={S.h3}>Higher Home Values Create Higher Expectations</h3>
          <p style={S.p}>The median home price in Loudoun County is approximately a written estimate; Fairfax County exceeds a written estimate. At these price points, buyers expect finished outdoor living spaces. A home without a deck or with a deteriorating wood deck is perceived as incomplete &mdash; and priced accordingly. In communities like Brambleton, Broadlands, and One Loudoun, a quality deck isn&apos;t a luxury; it&apos;s a baseline expectation.</p>

          <h3 style={S.h3}>Three-Season Climate Maximizes Usage</h3>
          <p style={S.p}>Northern Virginia&apos;s climate allows outdoor living from April through November &mdash; roughly 7&ndash;8 months of the year. This extended use period makes outdoor space more valuable per square foot than in markets with shorter outdoor seasons. Buyers factor this into their willingness to pay.</p>

          <h3 style={S.h3}>Competitive Buyer Market</h3>
          <p style={S.p}>Even with recent rate adjustments, the DC metro housing market remains competitive. This page does not publish a days-on-market figure or a ranking of exterior features.</p>

          <h3 style={S.h3}>Remote Work Has Increased Outdoor Space Value</h3>
          <p style={S.p}>The post-2020 shift to remote and hybrid work &mdash; particularly prevalent among NoVA&apos;s government contractor and tech workforce &mdash; has permanently increased demand for functional outdoor spaces. Home offices need a complement, and decks serve as the &ldquo;outdoor room&rdquo; that remote workers use for breaks, calls, and mental health throughout the workday.</p>

          {/* ===== SECTION 5: County Comparison ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Deck ROI by County: Loudoun vs. Fairfax vs. Prince William</h2>
          <p style={S.p}>ROI varies meaningfully across Northern Virginia&apos;s counties. Here is our data-backed comparison:</p>

          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  {['County', 'Median Home Value', 'Avg Deck Investment', 'Typical ROI', 'Value Added', 'Notes'].map(h => <th key={h} style={S.th}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Loudoun County', 'Not published', 'See the written estimate', 'Not published', 'a written estimate', 'Highest ROI — strong buyer demand'],
                  ['Fairfax County', 'Not published', 'See the written estimate', 'Not published', 'a written estimate', 'Premium markets (McLean, Great Falls) push higher'],
                  ['Prince William County', 'Not published', 'See the written estimate', 'Not published', 'a written estimate', 'Good ROI — value-conscious buyers'],
                  ['Arlington County', 'Not published', 'See the written estimate', 'Not published', 'a written estimate', 'Smaller lots limit deck size'],
                  ['Stafford County', 'Not published', 'See the written estimate', 'Not published', 'a written estimate', 'Growing market — ROI rising'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400, color: i === 0 && j === 3 ? 'var(--color-primary)' : 'inherit' }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={S.p}><strong>Pattern:</strong> Higher home values correlate with higher deck ROI. In markets where the median home exceeds a written estimate, buyers actively seek and pay for outdoor living features. Below that threshold, decks still add value but the percentage return decreases.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>ROI Planning Path: Cost, Permit, Payment</h2>
          <p style={S.p}>The highest ROI deck is not always the largest deck. It is the project that matches the home value, passes permit review cleanly, avoids structural surprises, and lands in a payment range the homeowner can keep comfortable. Use this sequence before locking the final scope:</p>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem', lineHeight: 1.9 }}>
            <li><strong>Model the full project amount</strong> with the <Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Northern Virginia deck cost calculator</Link>, including stairs, railings, lighting, demolition, and access.</li>
            <li><strong>Confirm the county review path</strong> using the <Link href="/deck-permit-loudoun-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun</Link>, <Link href="/deck-permit-fairfax-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Fairfax</Link>, <Link href="/deck-permit-prince-william-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Prince William</Link>, or <Link href="/deck-permit-arlington-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Arlington</Link> permit guide before over-investing in a design that may need revision.</li>
            <li><strong>Pressure-test the structure</strong> with the <Link href="/tools/deck-footing-depth-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>footing</Link>, <Link href="/tools/deck-beam-span-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>beam</Link>, <Link href="/tools/deck-joist-span-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>joist</Link>, <Link href="/tools/deck-load-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>load</Link>, and <Link href="/tools/deck-stair-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>stair</Link> calculators.</li>
            <li><strong>Translate the final amount into cash flow</strong> with the <Link href="/deck-payment-estimator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck payment estimator</Link> after the structural and permit assumptions are real.</li>
          </ol>

          {/* ===== SECTION 6: Real Estate Agent Perspective ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>What Northern Virginia Real Estate Agents Say</h2>
          <p style={S.p}>We regularly work alongside real estate agents who list homes with decks we&apos;ve built. Here is what they consistently tell us buyers look for:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: 2 }}>
            <li><strong>Composite over wood, always.</strong> Agents report that composite decks photograph better in listings and generate more showing requests. Buyers associate composite with &ldquo;newer&rdquo; and &ldquo;maintenance-free.&rdquo;</li>
            <li><strong>Railings matter more than you think.</strong> Clean, modern railings (especially cable or composite) signal quality. Rusty metal or wobbly wood railings signal deferred maintenance, even if the deck surface is fine.</li>
            <li><strong>Lighting sells evenings.</strong> Decks with integrated LED lighting photograph dramatically at twilight &mdash; and twilight photos are increasingly used as the primary listing image for homes with outdoor spaces.</li>
            <li><strong>Size matters, but not infinitely.</strong> The sweet spot is 300&ndash;500 square feet. Beyond 500 sqft, the ROI per additional square foot decreases because the law of diminishing returns kicks in.</li>
            <li><strong>Permits are non-negotiable.</strong> Agents universally confirm that unpermitted decks are deal-killers or require significant price concessions. Buyers&apos; inspectors catch these every time.</li>
          </ul>

          {/* ===== SECTION 7: When a Deck Doesn't Add Value ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>When a Deck Does NOT Add Value</h2>
          <p style={S.p}>Not every deck increases home value. Here are the scenarios where a deck can actually hurt your resale position:</p>

          <h3 style={S.h3}>Cheap Materials That Look Cheap</h3>
          <p style={S.p}>A bare pressure-treated deck with no stain, basic wood railings, and visible hardware communicates &ldquo;budget project.&rdquo; Buyers in communities like Brambleton or Broadlands expect composite or better. A cheap deck on a home actually lowers the perceived property quality.</p>

          <h3 style={S.h3}>No Building Permit</h3>
          <p style={S.p}>An unpermitted deck triggers major red flags during inspection. Buyers may demand removal, expensive retroactive permitting, or a price reduction. In some cases, unpermitted structures have killed deals entirely. Always build with permits &mdash; see our <Link href="/deck-permit-loudoun-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun County permit guide</Link>.</p>

          <h3 style={S.h3}>Poor Condition and Deferred Maintenance</h3>
          <p style={S.p}>A wood deck that hasn&apos;t been stained in five years, has visible rot, or wobbles when walked on subtracts value. Buyers calculate the cost to repair or replace &mdash; and their estimate is always higher than reality. If you&apos;re selling within two years and have a deteriorating wood deck, either resurface it with composite or demolish it and sell the yard as a blank canvas.</p>

          <h3 style={S.h3}>Over-Improving for the Neighborhood</h3>
          <p style={S.p}>A multi-level deck with an outdoor kitchen can be more scope than nearby homes offer. This page does not publish a share of home value. A written estimate is the project price.</p>

          {/* ===== SECTION 8: Cost vs Value Sweet Spot ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>The Investment Sweet Spot: the amount in a written estimate</h2>
          <p style={S.p}>After analyzing hundreds of projects and their impact on resale, we&apos;ve identified a clear investment sweet spot for Northern Virginia homeowners:</p>

          <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontWeight: 700, marginBottom: '1rem', color: '#166534', fontSize: '1.15rem' }}>The Sweet Spot Formula</h3>
            <ul style={{ paddingLeft: '1.2rem', lineHeight: 2 }}>
              <li><strong>Investment:</strong> the amount in a written estimate</li>
              <li><strong>Material:</strong> Trex Transcend or TimberTech Pro (mid-premium composite)</li>
              <li><strong>Size:</strong> 300&ndash;450 square feet</li>
              <li><strong>Features:</strong> Quality railing + one staircase + optional lighting</li>
              <li><strong>Expected ROI:</strong> Not published</li>
              <li><strong>Value added:</strong> the amount in a written estimate</li>
              <li><strong>Net enjoyment cost:</strong> the amount in a written estimate over years of use before selling</li>
            </ul>
          </div>
          <p style={S.p}>Think of it this way: a deck that adds a written estimate in resale value costs you only a written estimate in &ldquo;net enjoyment cost&rdquo; &mdash; the price of years of outdoor living, entertaining, and daily quality of life. For most homeowners, that math works regardless of when they plan to sell.</p>

          {/* ===== SECTION 9: Maximizing Your Deck ROI ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>7 Ways to Maximize Your Deck&apos;s ROI</h2>

          <h3 style={S.h3}>1. Choose Mid-Premium Composite</h3>
          <p style={S.p}>Trex Transcend and TimberTech Pro hit the sweet spot: premium enough to impress buyers, not so expensive that you over-invest. Enhance-tier composites work well for value-conscious builds; AZEK-tier is best when the home itself justifies luxury.</p>

          <h3 style={S.h3}>2. Build with Permits</h3>
          <p style={S.p}>This is non-negotiable for ROI. Permitted decks with passing inspection records are verified assets. Unpermitted decks are liabilities. We handle 100% of the permitting process.</p>

          <h3 style={S.h3}>3. Add Lighting</h3>
          <p style={S.p}>An LED lighting package disproportionately increases perceived value because it transforms the deck into an evening destination and photographs beautifully for listings.</p>

          <h3 style={S.h3}>4. Invest in Quality Railings</h3>
          <p style={S.p}>Railings are the most visible element from ground level. Clean composite or cable railings signal quality to buyers walking the yard during a showing. Budget aluminum railings are fine; rusty or wobbly wood railings are not.</p>

          <h3 style={S.h3}>5. Keep It Proportional</h3>
          <p style={S.p}>Match the deck scope to the house. This page does not publish a share of home value. A written estimate is the project price.</p>

          <h3 style={S.h3}>6. Maintain Before Selling</h3>
          <p style={S.p}>If you&apos;re selling within a year, clean the deck professionally, tighten any loose railings, and replace any damaged boards. A cleaning and tune-up can protect a written estimate in perceived value.</p>

          <h3 style={S.h3}>7. Document Everything for the Buyer</h3>
          <p style={S.p}>Provide the buyer with the permit approval, warranty certificates (Trex, TimberTech, and AZEK warranties are all transferable), maintenance records, and your installer&apos;s information. This package communicates professionalism and protects the value narrative.</p>

          {/* ===== SECTION 10: ROI Timeline ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>When Do You &ldquo;Break Even&rdquo; on a Deck?</h2>
          <p style={S.p}>ROI at resale is one metric. But a deck also delivers daily value through use. Here is how to think about the financial timeline:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: 2 }}>
            <li><strong>Year 0:</strong> You invest a written estimate in a Trex Transcend deck.</li>
            <li><strong>Years 1&ndash;5:</strong> You enjoy the deck daily, host gatherings, increase your living space by 350 sqft. Zero maintenance cost.</li>
            <li><strong>Year 5:</strong> If you sell, the deck adds ~a written estimate to home value. Net enjoyment cost: a written estimate for 5 years of use = a payment the lender calculates.</li>
            <li><strong>Year 10:</strong> Still looks great, zero maintenance. A comparable wood deck would have maintenance priced in the amount in a written estimate in staining and repairs by now.</li>
            <li><strong>Year 15:</strong> Composite deck still performing. Wood deck would need replacement (a written estimate). Composite has saved you money overall.</li>
            <li><strong>Year 25:</strong> Warranty still active. The deck has delivered 25 years of use for a net cost that&apos;s actually less than what you would have spent maintaining wood.</li>
          </ul>
          <p style={S.p}>For a detailed cost comparison over time, see our <Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>composite deck cost guide</Link> and <Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>full deck pricing guide</Link>.</p>

          {/* ===== SECTION 11: FAQs ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
          {[
            { q: "How much value does a deck add to a home in Northern Virginia?", a: "Resale recovery is not a fixed percentage, and this page does not publish one. A Trex Transcend deck does not have a published resale amount on this page. This page does not compare Northern Virginia resale recovery with a national average." },
            { q: "What type of deck gives the best ROI?", a: "This page does not publish a resale percentage for a new deck or for resurfacing. A written estimate is the project price." },
            { q: "Does a screened porch have better ROI than a deck?", a: "This page does not publish a resale percentage for a screened porch or an open deck. However, screened porches cost more (a written estimate), so absolute value added can be higher. The best ROI per dollar is an open composite deck." },
            { q: "Does deck ROI vary by county?", a: "This page does not publish a county recovery rate. A written estimate is the project price." },
            { q: "Does a deck without a permit affect home value?", a: "Significantly. Unpermitted decks are flagged during inspection and can reduce value by a written estimate. Buyers may demand removal or retrofitting. In competitive NoVA markets, unpermitted structures kill deals." },
            { q: "What is the ROI sweet spot for deck investment?", a: "This page does not publish an investment range, a resale percentage, or a share of home value. A written estimate is the project price." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          {/* ===== Related Guides ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/composite-deck-cost-northern-virginia', 'How Much Does a Deck Cost in Northern Virginia?'],
              ['/does-a-deck-add-value-to-your-home', 'Does a Deck Add Value to Your Home?'],
              ['/composite-deck-cost-northern-virginia', 'Composite Deck Cost in Northern Virginia (2026)'],
              ['/deck-resurfacing-vs-replacement', 'Deck Resurfacing vs Full Replacement'],
              ['/deck-financing', 'Deck Financing Options in Northern Virginia'],
              ['/how-to-choose-a-deck-builder-northern-virginia', 'How to Choose a Deck Builder'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}>
                <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} &rarr;</Link>
              </li>
            ))}
          </ul>

        </div>
      </article>

      <SimpleCTA title="Build a Deck That Adds Real Value" buttonText="Get Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath="/deck-roi-calculator-northern-virginia" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-10-18" />

      
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Resources</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building Services →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Customer Reviews (Google reviews) →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/about" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>About Loudoun Decks →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/get-estimate" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Get a Free Estimate →</Link></li>
        </ul>
      </section>
      <ContactHome />
    </>
  );
}
