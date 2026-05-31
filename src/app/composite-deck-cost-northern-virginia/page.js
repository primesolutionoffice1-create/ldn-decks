import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ArticleSchema from '@/components/ArticleSchema';
import SimpleCTA from '@/components/SimpleCTA';
import TrustBanner from '@/components/TrustBanner';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/composite-deck-cost-northern-virginia',
  title: '2026 Composite Deck Cost NoVA | Trex $30-$75/sqft (Installed)',
  description: 'How much does a composite deck cost in NoVA? See 2026 pricing for Trex, TimberTech & AZEK. $30-$75/sqft installed. Real project totals and free estimates!',
  image: '/showcase/img09.jpeg',
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a composite deck cost in Northern Virginia in 2026?", acceptedAnswer: { "@type": "Answer", text: "A composite deck in Northern Virginia costs $30-$75 per square foot installed in 2026. A typical 300 sqft Trex Transcend deck runs $18,000-$28,000. TimberTech and AZEK premium lines range $25,000-$45,000+ for the same size." } },
    { "@type": "Question", name: "Is Trex or TimberTech cheaper?", acceptedAnswer: { "@type": "Answer", text: "Trex is generally 10-20% less expensive than TimberTech. Trex Enhance starts at $30/sqft installed while TimberTech Pro starts at $40/sqft. However, TimberTech's polymer cap is thicker, which some homeowners prefer for longevity." } },
    { "@type": "Question", name: "Why is composite decking more expensive in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "Labor rates near Washington DC are 25-35% higher than the Virginia state average. Stricter county building codes, longer permit timelines, and HOA architectural reviews add cost and time. Material prices are similar statewide, but installation labor drives the NoVA premium." } },
    { "@type": "Question", name: "Is composite decking worth the cost over wood?", acceptedAnswer: { "@type": "Answer", text: "Yes for most homeowners. Over 15 years, composite costs less than wood when you factor in annual staining ($300-$800/year), board replacement, and your time. Composite also lasts 25-50 years vs 10-15 for pressure-treated wood and recoups 65-80% at resale." } },
    { "@type": "Question", name: "What is the cheapest composite decking brand?", acceptedAnswer: { "@type": "Answer", text: "Trex Enhance Basics is the most affordable mainstream composite at $30-$42/sqft installed. Fiberon Good Life is comparable. Both offer 25-year warranties and are a major step up from wood in durability and maintenance." } },
    { "@type": "Question", name: "How much does it cost to build a 400 sq ft composite deck in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "A 400 sq ft composite deck costs $16,000-$30,000 with Trex or $22,000-$42,000 with TimberTech/AZEK in Northern Virginia. Add $3,000-$8,000 for railings, $1,500-$4,000 for stairs, and $200-$800 for permits." } },
  ],
};

const S = {
  h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' },
  h3: { fontSize: '1.2rem', fontWeight: 600, margin: '1.5rem 0 0.5rem' },
  p: { marginBottom: '1rem', lineHeight: 1.7 },
  th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' },
  td: { padding: '0.75rem', borderBottom: '1px solid #eee' },
};

export default function CompositeDeckCostPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ArticleSchema
        title="Composite Deck Cost in Northern Virginia 2026: Complete Price Guide"
        description="How much does a composite deck cost in Northern Virginia? Brand-by-brand pricing, real project costs, and what drives the price up or down."
        path="/composite-deck-cost-northern-virginia"
        image="/showcase/img09.jpeg"
        datePublished="2026-04-21"
        dateModified="2026-04-23"
      />

      {/* Hero */}
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Composite Deck Cost in Northern Virginia (2026)</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Brand-by-brand pricing for Trex, TimberTech, AZEK &amp; Fiberon with real project totals</p>
        </div>
      </section>
      <TrustBanner />

      {/* Quick Answer */}
      <section data-speakable="true" style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p>A composite deck in Northern Virginia costs <strong>$30–$75 per square foot installed</strong> in 2026. For a typical 300 sq ft deck: Trex runs <strong>$15,000–$25,000</strong>, TimberTech <strong>$18,000–$32,000</strong>, and AZEK <strong>$22,000–$38,000</strong>. Northern Virginia prices run 25–35% above the state average due to higher labor rates and stricter codes. <a href="tel:+15716557207" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Call (571) 655-7207</a> for an exact quote.</p>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          {/* Hero Image */}
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/showcase/img09.jpeg"
              alt="Custom composite deck installation in Northern Virginia with integrated seating"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>

          {/* ===== SECTION 1: Why This Guide Exists ===== */}
          <p style={S.p}>If you&apos;re researching composite decking prices in Loudoun County, Fairfax County, or Prince William County, you&apos;ve probably noticed that most online cost guides give national averages that are wildly off for our market. A HomeAdvisor estimate of &ldquo;$22 per square foot&rdquo; has no connection to what a licensed Northern Virginia contractor will actually charge you.</p>
          <p style={S.p}>This guide uses our own project data from 2024–2026 builds across Ashburn, Leesburg, Reston, McLean, Centreville, and Manassas. Every number below reflects what homeowners in this market actually paid materials, labor, permits, railings, and cleanup included.</p>

          {/* ===== SECTION 2: Cost by Brand ===== */}
          <h2 style={S.h2}>Composite Deck Cost by Brand (Installed)</h2>
          <p style={S.p}>The brand and product line you choose is the single biggest factor in your final price. Here&apos;s what each major composite manufacturer costs per square foot when professionally installed in Northern Virginia:</p>

          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  {['Brand & Line', 'Cost/sqft (installed)', '300 sqft Total', '500 sqft Total', 'Warranty'].map(h => <th key={h} style={S.th}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Trex Enhance Basics', '$30–$42', '$9,000–$12,600', '$15,000–$21,000', '25 yr'],
                  ['Trex Enhance Naturals', '$35–$48', '$10,500–$14,400', '$17,500–$24,000', '25 yr'],
                  ['Trex Transcend', '$45–$60', '$13,500–$18,000', '$22,500–$30,000', '25 yr'],
                  ['Trex Transcend Lineage', '$50–$65', '$15,000–$19,500', '$25,000–$32,500', '50 yr'],
                  ['TimberTech Pro', '$40–$55', '$12,000–$16,500', '$20,000–$27,500', '30 yr'],
                  ['TimberTech Edge Prime+', '$45–$60', '$13,500–$18,000', '$22,500–$30,000', '30 yr'],
                  ['TimberTech AZEK Vintage', '$55–$70', '$16,500–$21,000', '$27,500–$35,000', '50 yr'],
                  ['TimberTech AZEK Harvest', '$50–$65', '$15,000–$19,500', '$25,000–$32,500', '50 yr'],
                  ['Fiberon Good Life', '$30–$42', '$9,000–$12,600', '$15,000–$21,000', '25 yr'],
                  ['Fiberon Concordia', '$40–$55', '$12,000–$16,500', '$20,000–$27,500', '25 yr'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400, color: (i === 2 || i === 3) && j === 0 ? 'var(--color-primary)' : 'inherit' }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ ...S.p, fontSize: '0.85rem', color: '#777' }}>Prices include decking boards, hidden fasteners, framing, and standard labor. Railings, stairs, permits, and add-ons are additional broken out below.</p>

          {/* ===== SECTION 3: What's Included / What's Extra ===== */}
          <h2 style={S.h2}>What&apos;s Included in the Per-Square-Foot Price</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '1.25rem' }}>
              <h3 style={{ fontWeight: 600, marginBottom: '0.75rem', color: '#166534' }}>Included</h3>
              <ul style={{ paddingLeft: '1.2rem', lineHeight: 1.8 }}>
                <li>Composite decking boards</li>
                <li>Hidden fastener system</li>
                <li>Pressure-treated wood subframe</li>
                <li>Joist tape (moisture barrier)</li>
                <li>Concrete footings (helical piers extra)</li>
                <li>Ledger board attachment and flashing</li>
                <li>Standard labor and installation</li>
                <li>Jobsite cleanup and debris removal</li>
              </ul>
            </div>
            <div style={{ background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: 8, padding: '1.25rem' }}>
              <h3 style={{ fontWeight: 600, marginBottom: '0.75rem', color: '#9a3412' }}>Additional Costs</h3>
              <ul style={{ paddingLeft: '1.2rem', lineHeight: 1.8 }}>
                <li>Railings: $3,000–$12,000</li>
                <li>Stairs (per flight): $1,500–$4,000</li>
                <li>Permits: $200–$800</li>
                <li>Demolition of old deck: $1,500–$4,000</li>
                <li>Elevation &gt;4 ft: +15–25%</li>
                <li>LED lighting package: $1,500–$4,000</li>
                <li>Helical piers (vs poured): +$200–$400/pier</li>
                <li>Under-deck drainage (Trex RainEscape): $3,000–$6,000</li>
              </ul>
            </div>
          </div>

          {/* ===== SECTION 4: Trex Deep Dive ===== */}
          <h2 style={S.h2}>Trex Decking Cost Breakdown (Our #1 Installed Brand)</h2>
          <p style={S.p}>As a <strong>Trex Platinum Partner</strong> a designation held by fewer than 1% of deck builders nationally we install more Trex than any other brand. Here&apos;s how the three main Trex lines compare for Northern Virginia homeowners:</p>

          <h3 style={S.h3}>Trex Enhance ($30–$48/sqft installed)</h3>
          <p style={S.p}>The entry point into Trex composite. The Basics line offers solid, uniform colors while Naturals adds multi-tonal wood grain streaking. Both feature Trex&apos;s shell protection for fade, stain, and mold resistance. Best for homeowners who want composite durability at the closest price point to wood. Typical full project (300 sqft deck + aluminum railing + 4-step stair): <strong>$18,000–$24,000</strong>.</p>

          <h3 style={S.h3}>Trex Transcend ($45–$65/sqft installed)</h3>
          <p style={S.p}>Our most-installed product line. Transcend boards have a deeper, more realistic wood grain and the thickest protective shell in the Trex lineup. The color palette Havana Gold, Spiced Rum, Island Mist, Lava Rock is specifically designed to complement Virginia&apos;s red brick and stone colonial architecture. Typical full project (350 sqft + Trex Signature railing + multi-step stair): <strong>$28,000–$38,000</strong>.</p>

          <h3 style={S.h3}>Trex Transcend Lineage ($50–$65/sqft installed)</h3>
          <p style={S.p}>Trex&apos;s newest premium tier, launched in 2024. Lineage features the most realistic wood grain ever produced in composite you genuinely cannot tell it from hardwood without touching it. Backed by a 50-year fade and stain warranty. Typical full project (400 sqft + Trex Signature railing + lighting): <strong>$35,000–$48,000</strong>.</p>

          {/* ===== SECTION 5: TimberTech/AZEK Deep Dive ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>TimberTech &amp; AZEK Cost Breakdown</h2>
          <p style={S.p}>TimberTech and AZEK are manufactured by the same parent company (AZEK Building Products). TimberTech composites use a wood-plastic composite core, while AZEK uses a full polymer (PVC) core no wood content at all. As a <strong>TimberTech Certified Installer</strong>, we offer their full product range.</p>

          <h3 style={S.h3}>TimberTech Pro &amp; Edge ($40–$60/sqft installed)</h3>
          <p style={S.p}>Direct competitors to Trex Transcend. TimberTech&apos;s polymer cap is approximately 35% thicker than Trex&apos;s, which some contractors argue delivers better long-term scratch resistance. The Edge Prime+ line features a distinctive wide-plank look (5.5&rdquo; boards) that photographs beautifully. Typical full project (300 sqft + composite railing): <strong>$22,000–$32,000</strong>.</p>

          <h3 style={S.h3}>TimberTech AZEK ($50–$75/sqft installed)</h3>
          <p style={S.p}>The premium tier full PVC with zero wood content. AZEK boards are virtually impervious to moisture, will not swell or contract, and carry a 50-year warranty. The Vintage collection (Mahogany, English Walnut, Coastline) delivers the deepest color saturation in the industry. Ideal for pool decks, waterfront properties, and homeowners who want the absolute best regardless of budget. Typical full project (400 sqft + AZEK railing + stair lighting): <strong>$38,000–$55,000</strong>.</p>

          {/* ===== SECTION 6: Size-Based Cost Table ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Total Project Cost by Deck Size</h2>
          <p style={S.p}>These are all-in estimates including decking, standard aluminum railing, one staircase, footings, permits, and labor the number that actually hits your bank account:</p>

          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  {['Deck Size', 'Trex Enhance', 'Trex Transcend', 'TimberTech AZEK'].map(h => <th key={h} style={S.th}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ['150 sqft (10x15)', '$8,000–$12,000', '$12,000–$16,000', '$15,000–$20,000'],
                  ['200 sqft (12x16)', '$10,000–$15,000', '$15,000–$20,000', '$18,000–$26,000'],
                  ['300 sqft (16x20)', '$15,000–$22,000', '$22,000–$30,000', '$28,000–$38,000'],
                  ['400 sqft (16x25)', '$20,000–$28,000', '$28,000–$40,000', '$35,000–$50,000'],
                  ['500 sqft (20x25)', '$25,000–$35,000', '$35,000–$48,000', '$42,000–$60,000'],
                  ['600+ sqft (Multi-level)', '$30,000–$42,000', '$42,000–$58,000', '$52,000–$75,000'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400, color: j === 2 ? 'var(--color-primary)' : 'inherit' }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ===== SECTION 7: What Drives Price Up ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>8 Factors That Drive Composite Deck Costs Up</h2>

          <h3 style={S.h3}>1. Elevation and Multi-Level Design</h3>
          <p style={S.p}>A ground-level deck needs minimal substructure. A second-story deck attached to a walkout basement requires 6x6 engineered posts, additional concrete footings, lateral bracing, and significantly more labor hours. Expect a <strong>15–30% premium</strong> for decks over 4 feet above grade.</p>

          <h3 style={S.h3}>2. Railing Selection</h3>
          <p style={S.p}>Standard aluminum railings add $3,000–$6,000 to a typical project. Upgrading to <Link href="/cable-railing-for-decks-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>cable railing</Link> or Trex Signature composite railings pushes that to $6,000–$12,000. Glass panel railings can exceed $15,000.</p>

          <h3 style={S.h3}>3. Stairs and Access Points</h3>
          <p style={S.p}>Each composite staircase costs $1,500–$4,000 depending on width and number of steps. Wrap-around stairs or cascading multi-landing designs can add $5,000–$10,000.</p>

          <h3 style={S.h3}>4. Demolition of an Existing Deck</h3>
          <p style={S.p}>If we&apos;re replacing an old wood deck, demolition and hauling adds $1,500–$4,000 depending on size. This is sometimes avoidable if the existing subframe is sound, <Link href="/deck-resurfacing-vs-replacement" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck resurfacing</Link> can save 25–40% versus a full tear-down and rebuild.</p>

          <h3 style={S.h3}>5. Integrated Lighting</h3>
          <p style={S.p}>Low-voltage LED <Link href="/deck-lighting-ideas-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck lighting</Link> riser lights, post cap lights, and under-rail strips adds $1,500–$4,000. Worth every dollar for evening entertaining and safety.</p>

          <h3 style={S.h3}>6. Under-Deck Drainage Systems</h3>
          <p style={S.p}>Trex RainEscape or similar membrane systems capture water from the upper deck and funnel it into gutters, creating a dry patio space underneath. Adds $3,000–$6,000 but effectively doubles your usable outdoor area.</p>

          <h3 style={S.h3}>7. Northern Virginia Labor Premium</h3>
          <p style={S.p}>Skilled carpentry labor in the DC metro area commands $45–$75/hour 25–35% above the Virginia state average. This is the primary reason Northern Virginia deck prices exceed national estimates. The labor premium is unavoidable, but you can manage it by choosing a straightforward rectangular design that minimizes complex framing cuts.</p>

          <h3 style={S.h3}>8. Permit and HOA Timeline</h3>
          <p style={S.p}>County permits ($200–$800) and <Link href="/hoa-deck-rules-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>HOA approvals</Link> don&apos;t directly increase material costs, but extended timelines can affect scheduling and pricing. Loudoun County permits currently take 2–4 weeks; Fairfax County 3–5 weeks.</p>

          {/* ===== SECTION 8: Real Projects ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Real Composite Deck Projects: What Our Clients Paid</h2>
          <p style={S.p}>These are actual project costs from our 2024–2026 builds in Northern Virginia not estimates or national averages:</p>

          {[
            {
              price: '$18,500',
              desc: '280 sqft Trex Enhance, Manassas',
              detail: 'Single-level deck replacing a 15-year-old pressure-treated original. Trex Enhance Naturals in Toasted Sand, standard aluminum railing, 3 stairs to grade. Prince William County permit. Built in 2 weeks.',
              savings: 'Client saved ~$8,000 vs Transcend by choosing Enhance same 25-year warranty, slightly less wood-grain depth.',
            },
            {
              price: '$32,000',
              desc: '380 sqft Trex Transcend, Ashburn',
              detail: 'L-shaped composite deck with picture-frame border. Trex Transcend in Havana Gold, Trex Signature composite railing in Charcoal Black, integrated LED post cap lights. Brambleton HOA approved in one submission. Loudoun County permit in 14 days. Built in 2.5 weeks.',
              savings: 'The L-shape added ~$3,000 vs a simple rectangle due to extra framing and waste cuts.',
            },
            {
              price: '$44,000',
              desc: '420 sqft TimberTech AZEK, Great Falls',
              detail: 'Elevated deck (6 ft above grade) with TimberTech AZEK Vintage in Mahogany. Cable railing system, wide cascading staircase with riser lights, Trex RainEscape drainage underneath. Fairfax County permit. 3.5-week build.',
              savings: 'Client chose AZEK specifically because the deck borders a pool full PVC resists pool chemical splash damage.',
            },
            {
              price: '$56,000',
              desc: '550 sqft Multi-Level + Pergola, Leesburg',
              detail: 'Two-level Trex Transcend Lineage deck with attached 12x14 cedar pergola. Upper level: dining/grilling zone. Lower level: fire pit lounge with bench seating. Hidden LED stair and accent lighting throughout. Loudoun County permit. 4-week build.',
              savings: 'Building the pergola simultaneously with the deck saved ~$4,000 vs adding it later (shared footings and labor mobilization).',
            },
          ].map((p, i) => (
            <div key={i} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{p.price} {p.desc}</h3>
              <p style={{ lineHeight: 1.7, marginBottom: '0.5rem' }}>{p.detail}</p>
              <p style={{ lineHeight: 1.7, fontSize: '0.9rem', color: '#666', fontStyle: 'italic' }}>{p.savings}</p>
            </div>
          ))}

          {/* ===== SECTION 9: Composite vs Wood Total Cost ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Composite vs Wood: 15-Year Total Cost of Ownership</h2>
          <p style={S.p}>The upfront cost of composite is 40–60% higher than pressure-treated wood. But decking is a 15–25 year investment, not a one-time purchase. Here&apos;s what a 300 sq ft deck actually costs over 15 years:</p>

          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  {['Cost Component', 'Pressure-Treated Wood', 'Trex Transcend'].map(h => <th key={h} style={S.th}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Initial build (300 sqft)', '$8,000–$10,500', '$18,000–$22,000'],
                  ['Staining/sealing (every 2 yrs x 7)', '$4,200', '$0'],
                  ['Board replacement (yr 8–12)', '$2,000–$3,500', '$0'],
                  ['Power washing (annual)', '$2,250', '$750'],
                  ['Your time (weekends maintaining)', '100+ hours', '~5 hours'],
                  ['15-Year Total', '$16,450–$20,450', '$18,750–$22,750'],
                  ['25-Year Total (wood rebuilt at yr 15)', '$30,000–$38,000', '$19,500–$23,500'],
                ].map((row, i) => {
                  const isTotal = i >= 5;
                  return (
                    <tr key={i} style={{ background: isTotal ? '#f0f0f0' : (i % 2 ? '#fafafa' : '#fff') }}>
                      <td style={{ ...S.td, fontWeight: isTotal ? 700 : 600 }}>{row[0]}</td>
                      <td style={{ ...S.td, fontWeight: isTotal ? 700 : 400 }}>{row[1]}</td>
                      <td style={{ ...S.td, fontWeight: isTotal ? 700 : 400, color: isTotal ? 'var(--color-primary)' : 'inherit' }}>{row[2]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p style={S.p}><strong>Bottom line:</strong> Composite costs more in year one but breaks even by year 7–8 and saves $10,000–$15,000+ over 25 years. For a deeper material-by-material breakdown, read our <Link href="/composite-deck-vs-wood-deck-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>composite vs wood deck comparison</Link>.</p>

          {/* ===== SECTION 10: How to Save Money ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>7 Ways to Reduce Your Composite Deck Cost</h2>

          <h3 style={S.h3}>1. Choose Trex Enhance Over Transcend</h3>
          <p style={S.p}>Enhance carries the same 25-year warranty as Transcend at 20–30% lower cost. The aesthetic difference is subtle Enhance has less wood-grain variation but identical structural performance.</p>

          <h3 style={S.h3}>2. Keep It Rectangular</h3>
          <p style={S.p}>Every angle, curve, and notch adds framing complexity and material waste. A simple rectangle maximizes usable square footage per dollar.</p>

          <h3 style={S.h3}>3. Resurface Instead of Rebuild</h3>
          <p style={S.p}>If your existing deck&apos;s subframe is sound, <Link href="/deck-resurfacing-vs-replacement" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>resurfacing</Link> saves 25–40% by reusing the pressure-treated structure underneath.</p>

          <h3 style={S.h3}>4. Build in Fall or Winter</h3>
          <p style={S.p}>Spring and summer are peak season crews book out 4–8 weeks. <Link href="/best-time-to-build-a-deck-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Building in fall or winter</Link> can save 5–10% and gets you on the schedule faster.</p>

          <h3 style={S.h3}>5. Start with Standard Aluminum Railings</h3>
          <p style={S.p}>Aluminum railings ($3,000–$6,000) look clean and last decades. Upgrading to cable or composite railings is easy to do later without modifying the deck structure.</p>

          <h3 style={S.h3}>6. Skip Under-Deck Drainage (for Now)</h3>
          <p style={S.p}>RainEscape adds $3,000–$6,000. It&apos;s a fantastic upgrade but can be retrofitted later if budget is tight now.</p>

          <h3 style={S.h3}>7. Bundle With Other Outdoor Projects</h3>
          <p style={S.p}>Adding a pergola, fence, or patio at the same time saves on mobilization and shared labor. We typically see 10–15% savings on the add-on when bundled with a deck build.</p>

          {/* ===== SECTION 11: County Permit Costs ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Permit Costs by County</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  {['County', 'Permit Fee', 'Typical Timeline', 'Notes'].map(h => <th key={h} style={S.th}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Loudoun County', '$200–$500', '2–4 weeks', 'Online submission via LOLA portal'],
                  ['Fairfax County', '$300–$600', '3–5 weeks', 'Requires plot plan with setbacks'],
                  ['Prince William County', '$200–$400', '2–3 weeks', 'Fastest turnaround in our service area'],
                  ['Arlington County', '$250–$500', '3–4 weeks', 'Strict historic district overlays in some areas'],
                  ['Stafford County', '$150–$350', '2–3 weeks', 'Most straightforward process'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={S.p}>We handle 100% of the permitting process in-house submitting plans, coordinating with your HOA, and scheduling inspections. You don&apos;t visit the county office once.</p>

          {/* ===== SECTION 12: 2026 Price Trends ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>2026 Composite Deck Pricing Trends</h2>

          <h3 style={S.h3}>Tariff Impact on Materials</h3>
          <p style={S.p}>Recent tariff activity has increased pressure on imported decking hardware and certain fastener systems. While major composite boards (Trex, TimberTech) are manufactured domestically, aluminum railing components and some fastener systems have seen 8–15% increases since late 2025. Read our full <Link href="/how-tariffs-affect-deck-prices-2026" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>tariff impact analysis</Link>.</p>

          <h3 style={S.h3}>Labor Market</h3>
          <p style={S.p}>Skilled carpentry labor remains tight in Northern Virginia. Experienced framing crews command premium rates, and the best contractors are booking 4–8 weeks out during spring/summer peak season. Early planning is critical we recommend reaching out 6–8 weeks before your desired start date.</p>

          <h3 style={S.h3}>Material Innovation</h3>
          <p style={S.p}>Trex Lineage and TimberTech&apos;s expanded Harvest collection have pushed composite aesthetics to a point where they are genuinely indistinguishable from hardwood at normal viewing distance. The premium for these ultra-realistic lines is 10–15% above standard Transcend/Pro pricing but is increasingly popular with homeowners in McLean, Great Falls, and Vienna.</p>

          {/* ===== SECTION 13: FAQs ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
          {[
            { q: "How much does a composite deck cost in Northern Virginia in 2026?", a: "A composite deck costs $30-$75 per square foot installed. A typical 300 sqft Trex Transcend deck runs $18,000-$28,000. TimberTech and AZEK premium lines range $25,000-$45,000+ for the same size." },
            { q: "Is Trex or TimberTech cheaper?", a: "Trex is generally 10-20% less expensive. Trex Enhance starts at $30/sqft installed while TimberTech Pro starts at $40/sqft. TimberTech's thicker polymer cap justifies the premium for some homeowners." },
            { q: "Why is composite decking more expensive in Northern Virginia?", a: "Skilled carpentry labor near DC commands $45-$75/hour 25-35% above the state average. Stricter codes, longer permit timelines, and HOA reviews add cost and time." },
            { q: "Is composite decking worth the cost over wood?", a: "Yes. Over 15 years, composite costs less than wood when you add staining ($300-$800/year), board replacement, and your time. Composite lasts 25-50 years vs 10-15 for wood and recoups 65-80% at resale." },
            { q: "What is the cheapest composite decking brand?", a: "Trex Enhance Basics at $30-$42/sqft installed. Fiberon Good Life is comparable. Both carry 25-year warranties." },
            { q: "How much does it cost to build a 400 sq ft composite deck?", a: "$16,000-$30,000 with Trex or $22,000-$42,000 with TimberTech/AZEK. Add $3,000-$8,000 for railings, $1,500-$4,000 for stairs, and $200-$800 for permits." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          {/* ===== SECTION 14: Related Guides ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/how-much-does-a-deck-cost-northern-virginia', 'How Much Does a Deck Cost in Northern Virginia?'],
              ['/trex-vs-timbertech-vs-azek', 'Trex vs TimberTech vs AZEK Full Comparison'],
              ['/composite-deck-vs-wood-deck-virginia', 'Composite Deck vs Wood Deck 15-Year Cost Analysis'],
              ['/deck-resurfacing-vs-replacement', 'Deck Resurfacing vs Full Replacement'],
              ['/how-tariffs-affect-deck-prices-2026', 'How 2026 Tariffs Affect Deck Prices'],
              ['/deck-financing', 'Deck Financing Options in Northern Virginia'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}>
                <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} &rarr;</Link>
              </li>
            ))}
          </ul>

        </div>
      </article>

      <SimpleCTA title="Get Your Composite Deck Priced" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/composite-deck-cost-northern-virginia" />
      <ContactHome />
    </>
  );
}
