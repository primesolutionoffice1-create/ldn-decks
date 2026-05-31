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

export const metadata = buildMetadata({
  path: '/trex-transcend-review-northern-virginia',
  title: 'Trex Transcend Review 2026 | Is It Worth It for NoVA Homes?',
  description: 'Honest Trex Transcend review from a Platinum Partner installer. 500+ installs in Northern Virginia durability, fade, heat, cost vs Lineage and TimberTech.',
  image: '/images/img36.jpeg',
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is Trex Transcend worth the extra cost over Enhance?", acceptedAnswer: { "@type": "Answer", text: "For most homeowners, yes. Transcend's deeper wood grain, thicker shell, and richer color palette justify the 25-35% premium over Enhance. If budget is tight, Enhance Naturals is a strong alternative same warranty, slightly less visual depth." } },
    { "@type": "Question", name: "Does Trex Transcend fade?", acceptedAnswer: { "@type": "Answer", text: "All composite decking experiences minor initial color settling in the first 60-90 days as the UV stabilizers activate. After that, Transcend holds its color exceptionally well. After 5+ years on our earliest Northern Virginia installs, fade is minimal and even not patchy." } },
    { "@type": "Question", name: "How hot does Trex Transcend get in the sun?", acceptedAnswer: { "@type": "Answer", text: "Darker Transcend colors (Lava Rock, Spiced Rum) can reach 130-150°F in direct Virginia summer sun. Lighter colors (Island Mist, Rope Swing) stay 15-20 degrees cooler. For pool decks and barefoot areas, we recommend lighter colors or TimberTech AZEK which runs slightly cooler." } },
    { "@type": "Question", name: "How long does Trex Transcend last?", acceptedAnswer: { "@type": "Answer", text: "Trex warranties Transcend for 25 years against structural damage, fade, and stain. Real-world lifespan is 30-40+ years with basic maintenance (occasional soap and water wash). Our earliest Transcend installs in Loudoun County (2019) still look excellent." } },
    { "@type": "Question", name: "What is the difference between Trex Transcend and Lineage?", acceptedAnswer: { "@type": "Answer", text: "Lineage is Trex's newest premium line with a more realistic wood grain pattern and a 50-year warranty (vs 25 for Transcend). Lineage costs 10-15% more than Transcend. Both use the same shell technology. Lineage is worth it if you want the absolute most realistic wood look in composite." } },
    { "@type": "Question", name: "How much does a Trex Transcend deck cost in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "Trex Transcend costs $45-$65 per square foot installed in Northern Virginia. A typical 300 sqft deck runs $22,000-$30,000 including railings and stairs. A 500 sqft deck runs $35,000-$48,000." } },
  ],
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Product",
    "name": "Trex Transcend Composite Decking",
    "brand": { "@type": "Brand", "name": "Trex" },
    "description": "Premium composite decking with deep wood grain, protective shell technology, and 25-year warranty.",
  },
  "author": {
    "@type": "Organization",
    "name": "Loudoun Decks",
    "url": "https://ldndecks.com",
  },
  "publisher": {
    "@type": "Organization",
    "name": "Loudoun Decks",
  },
  "reviewBody": "After installing 500+ Trex Transcend decks across Northern Virginia since 2019, Transcend remains our most-recommended product line for homeowners who want the best balance of aesthetics, durability, and value.",
};

const S = {
  h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' },
  h3: { fontSize: '1.2rem', fontWeight: 600, margin: '1.5rem 0 0.5rem' },
  p: { marginBottom: '1rem', lineHeight: 1.7 },
  th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' },
  td: { padding: '0.75rem', borderBottom: '1px solid #eee' },
};

export default function TrexTranscendReviewPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema url="https://ldndecks.com/trex-transcend-review-northern-virginia" name="Trex Transcend Review 2026 | Is It Worth It for NoVA Homes?" description="Honest Trex Transcend review from a Platinum Partner installer. 500+ installs in Northern Virginia durability, fade, heat, cost vs Lineage and TimberTech." speakable />
      <JsonLd data={reviewSchema} />
      <ArticleSchema
        title="Trex Transcend Review 2026: Is It Worth the Investment for Virginia Homes?"
        description="Honest Trex Transcend review from a Platinum Partner installer. 500+ installs in Northern Virginia."
        path="/trex-transcend-review-northern-virginia"
        image="/images/img36.jpeg"
        datePublished="2026-04-21"
        dateModified="2026-04-23"
      />

      {/* Hero */}
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Trex Transcend Review: Is It Worth It for Virginia Homes?</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>An honest assessment after 500+ installations across Northern Virginia by a Trex Platinum Partner</p>
        </div>
      </section>

      {/* Quick Verdict */}
      <section data-speakable="true" style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Our Verdict: 4.8/5</p>
          <p>Trex Transcend is the <strong>best value in premium composite decking</strong> for Northern Virginia homes. It delivers near-hardwood aesthetics, proven 5+ year performance in Virginia&apos;s climate, and a 25-year warranty at 15–25% less than TimberTech AZEK. The only knock: dark colors get hot in direct summer sun. For most homeowners, Transcend is the sweet spot between Enhance (budget) and Lineage/AZEK (ultra-premium).</p>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          {/* Hero Image */}
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img36.jpeg"
              alt="Trex Transcend composite deck in Havana Gold installed by Loudoun Decks in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>

          {/* ===== Why We're Qualified ===== */}
          <p style={S.p}>Most Trex Transcend reviews are written by people who&apos;ve never installed a board. We&apos;re a <strong>Trex Platinum Partner</strong> a designation held by fewer than 1% of deck builders in the United States and we&apos;ve installed Trex Transcend on over 500 projects across Loudoun, Fairfax, and Prince William counties since 2019. This review is based on real-world performance data, not manufacturer specs.</p>
          <p style={S.p}>We also install TimberTech, AZEK, and Fiberon, so we have direct comparison experience across brands. We have no financial incentive to recommend one brand over another we install whatever is right for the project.</p>

          {/* ===== Scorecard ===== */}
          <h2 style={S.h2}>Trex Transcend Scorecard</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  {['Category', 'Score', 'Notes'].map(h => <th key={h} style={S.th}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Aesthetics / Wood Grain', '4.5/5', 'Deep, multi-tonal grain. Best in the Trex lineup. Lineage is slightly more realistic.'],
                  ['Durability', '5/5', 'Zero structural failures across 500+ installs. Shell protection performs as advertised.'],
                  ['Fade Resistance', '4.5/5', 'Minor initial settling (60-90 days). After that, color holds beautifully over 5+ years.'],
                  ['Stain Resistance', '5/5', 'Wine, grease, ketchup, sunscreen everything washes off with soap and water.'],
                  ['Scratch Resistance', '4/5', 'Light scratches from dragged furniture are possible. They blend into the grain over time.'],
                  ['Heat Performance', '3.5/5', 'Dark colors get hot in direct Virginia sun. Lighter colors are noticeably cooler.'],
                  ['Value for Money', '5/5', 'Best price-to-performance ratio in premium composite. 15-25% less than AZEK.'],
                  ['Warranty', '4.5/5', '25-year fade & stain. Lifetime structural. Good but Lineage/AZEK offer 50-year.'],
                  ['Overall', '4.8/5', 'Our most-recommended product for Northern Virginia homeowners.'],
                ].map((row, i) => {
                  const isOverall = i === 8;
                  return (
                    <tr key={i} style={{ background: isOverall ? '#f0f0f0' : (i % 2 ? '#fafafa' : '#fff') }}>
                      <td style={{ ...S.td, fontWeight: 600 }}>{row[0]}</td>
                      <td style={{ ...S.td, fontWeight: isOverall ? 700 : 600, color: 'var(--color-primary)' }}>{row[1]}</td>
                      <td style={S.td}>{row[2]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* ===== What We Like ===== */}
          <h2 style={S.h2}>What We Like About Trex Transcend</h2>

          <h3 style={S.h3}>1. The Wood Grain Is Genuinely Convincing</h3>
          <p style={S.p}>Transcend boards feature a deep, multi-tonal grain pattern that photographs beautifully and looks natural at normal viewing distance. The Havana Gold and Spiced Rum colors, in particular, have a warmth that pairs perfectly with the red brick and stone colonial architecture that dominates Loudoun and Fairfax counties. Compared to the earlier Trex Select (now discontinued) or even the current Enhance line, Transcend is a significant step up in realism.</p>

          <h3 style={S.h3}>2. The Shell Protection Actually Works</h3>
          <p style={S.p}>Trex&apos;s three-sided shell technology wraps the board&apos;s top and sides in a protective polymer cap. After 5+ years on our earliest Northern Virginia installs, we&apos;ve seen zero cap delamination, zero mold penetration through the cap, and no structural degradation. Virginia&apos;s freeze-thaw cycles (30+ per winter), summer humidity, and intense UV don&apos;t faze this product. The shell does what Trex says it does.</p>

          <h3 style={S.h3}>3. The Color Palette Is Designed for Mid-Atlantic Architecture</h3>
          <p style={S.p}>Transcend offers 8 colors across two sub-collections. Our most-installed colors in Northern Virginia:</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { color: 'Havana Gold', desc: 'Warm medium brown. Our #1 seller. Complements brick, stone, and painted siding equally well.', pct: '35%' },
              { color: 'Spiced Rum', desc: 'Rich reddish-brown. Popular in McLean, Great Falls, and Vienna where homes lean traditional.', pct: '25%' },
              { color: 'Island Mist', desc: 'Cool medium gray. Clean, contemporary look. Stays cooler in direct sun than browns.', pct: '20%' },
              { color: 'Lava Rock', desc: 'Deep charcoal brown. Dramatic and modern. Gets hottest in sun best for shaded decks.', pct: '10%' },
            ].map((c) => (
              <div key={c.color} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.25rem' }}>
                <h4 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{c.color} <span style={{ fontWeight: 400, color: '#999', fontSize: '0.85rem' }}>({c.pct} of our installs)</span></h4>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.5, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>

          <h3 style={S.h3}>4. Installation Is Consistent and Predictable</h3>
          <p style={S.p}>From a contractor&apos;s perspective, Transcend boards are dimensionally stable, cut cleanly with standard carbide-tipped blades, and the hidden fastener system (Trex Hideaway) seats reliably. Board-to-board color consistency is excellent within a lot. We rarely encounter warped or defective boards Trex&apos;s quality control is among the best in the industry.</p>

          <h3 style={S.h3}>5. The Price-to-Performance Ratio Is Unmatched</h3>
          <p style={S.p}>At <Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>$45–$65 per square foot installed</Link> in Northern Virginia, Transcend delivers 90% of the aesthetics and 100% of the durability of products costing 15–25% more (TimberTech AZEK, Trex Lineage). For homeowners who want premium without ultra-premium pricing, it&apos;s the mathematical sweet spot.</p>

          {/* ===== What We Don't Like ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>What We Don&apos;t Like About Trex Transcend</h2>

          <h3 style={S.h3}>1. Dark Colors Get Hot Really Hot</h3>
          <p style={S.p}>This is the single most common complaint we hear from homeowners after installation. In direct Virginia summer sun (June–August), dark Transcend colors like Lava Rock and Spiced Rum can reach <strong>130–150&deg;F</strong> surface temperature. That&apos;s too hot for bare feet. Lighter colors (Island Mist, Rope Swing) are noticeably cooler typically 15–20 degrees lower.</p>
          <p style={S.p}><strong>Our recommendation:</strong> If your deck gets full afternoon sun and your family goes barefoot, choose Island Mist or Rope Swing. For pool decks, consider <Link href="/trex-vs-timbertech-vs-azek" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>TimberTech AZEK</Link> which runs slightly cooler due to its full PVC construction.</p>

          <h3 style={S.h3}>2. Light Scratches From Furniture</h3>
          <p style={S.p}>Dragging heavy metal furniture across Transcend can leave light scuff marks on the shell surface. These are cosmetic only they don&apos;t penetrate the protective cap and they tend to blend into the grain pattern over a few months of UV exposure. But it&apos;s worth knowing upfront. Use furniture pads on chair and table legs.</p>

          <h3 style={S.h3}>3. The 25-Year Warranty Is Good, Not Great</h3>
          <p style={S.p}>Trex Transcend carries a 25-year fade and stain warranty plus a lifetime limited structural warranty. This is solid but Trex Lineage and TimberTech AZEK now offer 50-year warranties. If you plan to stay in your home for 25+ years or want maximum future-proofing, the 50-year warranty products are worth the 10–15% premium.</p>

          <h3 style={S.h3}>4. It&apos;s Not Immune to Mold ON the Surface</h3>
          <p style={S.p}>Trex&apos;s shell prevents mold from growing <em>inside</em> the board, but organic matter (pollen, leaf debris, dirt) that sits on the surface can develop surface mold in Virginia&apos;s humid climate. This is easily solved with a biannual soap-and-water scrub. It&apos;s not a product defect it happens on every composite brand but homeowners who expect literally zero maintenance may be disappointed.</p>

          {/* ===== Transcend vs Alternatives ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Transcend vs the Competition</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  {['Feature', 'Trex Transcend', 'Trex Enhance', 'Trex Lineage', 'TimberTech AZEK'].map(h => <th key={h} style={S.th}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Cost/sqft (installed)', '$45–$65', '$30–$48', '$50–$65', '$55–$75'],
                  ['Wood grain realism', 'Very good', 'Good', 'Best in class', 'Very good'],
                  ['Warranty', '25 yr fade/stain', '25 yr fade/stain', '50 yr fade/stain', '50 yr fade/stain'],
                  ['Core material', 'Wood-plastic composite', 'Wood-plastic composite', 'Wood-plastic composite', 'Full PVC (no wood)'],
                  ['Heat in sun', 'Moderate-hot', 'Moderate-hot', 'Moderate-hot', 'Slightly cooler'],
                  ['Moisture resistance', 'Excellent (capped)', 'Excellent (capped)', 'Excellent (capped)', 'Superior (no wood core)'],
                  ['Best for', 'Most homeowners', 'Budget-conscious', 'Ultra-premium look', 'Pool/waterfront'],
                  ['Our rating', '4.8/5', '4.3/5', '4.9/5', '4.7/5'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ ...S.td, fontWeight: j === 0 || j === 1 ? 600 : 400, color: j === 1 ? 'var(--color-primary)' : 'inherit' }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={S.p}>For the full brand-by-brand breakdown, read our <Link href="/trex-vs-timbertech-vs-azek" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Trex vs TimberTech vs AZEK comparison</Link>.</p>

          {/* ===== Who Should Buy It ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Who Should Choose Trex Transcend?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '1.25rem' }}>
              <h3 style={{ fontWeight: 600, marginBottom: '0.75rem', color: '#166534' }}>Transcend Is Right for You If:</h3>
              <ul style={{ paddingLeft: '1.2rem', lineHeight: 1.8 }}>
                <li>You want premium aesthetics without ultra-premium pricing</li>
                <li>Your home has traditional Virginia architecture (brick, stone, colonial)</li>
                <li>You plan to stay in your home 10–25 years</li>
                <li>You want a proven product with 5+ years of Virginia climate data</li>
                <li>Zero-maintenance is a priority</li>
              
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (Google reviews) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
          </ul>
            </div>
            <div style={{ background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: 8, padding: '1.25rem' }}>
              <h3 style={{ fontWeight: 600, marginBottom: '0.75rem', color: '#9a3412' }}>Consider Alternatives If:</h3>
              <ul style={{ paddingLeft: '1.2rem', lineHeight: 1.8 }}>
                <li>Your deck borders a pool (consider AZEK for chlorine resistance)</li>
                <li>You want maximum barefoot comfort in full sun (choose lighter colors or AZEK)</li>
                <li>Budget is under $20k (Trex Enhance is better value at smaller sizes)</li>
                <li>You want the absolute most realistic wood look (Lineage)</li>
                <li>50-year warranty is important to you (Lineage or AZEK)</li>
              </ul>
            </div>
          </div>

          {/* ===== Real Projects ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Trex Transcend on Real Northern Virginia Projects</h2>
          {[
            { price: '$28,000', color: 'Havana Gold', location: 'Ashburn', size: '350 sqft', detail: 'Single-level deck with picture-frame border and Trex Signature railings. Brambleton HOA approved. After 2 years: zero fade, zero staining, zero maintenance beyond seasonal washing.' },
            { price: '$44,000', color: 'Spiced Rum', location: 'Leesburg', size: '480 sqft (two-level)', detail: 'Multi-level deck with cascading stairs and integrated LED lighting. The warm Spiced Rum tone complements the home\'s stone facade perfectly. Homeowner reports using the deck daily from April through October.' },
            { price: '$36,000', color: 'Island Mist', location: 'Reston', size: '400 sqft', detail: 'Modern deck with cable railings. Client chose Island Mist specifically for heat management their deck gets full afternoon sun. After 18 months: significantly cooler than their neighbor\'s dark composite and still looks brand new.' },
          ].map((p, i) => (
            <div key={i} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{p.price} {p.color}, {p.location} ({p.size})</h3>
              <p style={{ lineHeight: 1.7, margin: 0 }}>{p.detail}</p>
            </div>
          ))}
          <p style={S.p}>See more projects on our <Link href="/before-and-after" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Before &amp; After page</Link>.</p>

          {/* ===== Cost Section ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>How Much Does a Trex Transcend Deck Cost in Northern Virginia?</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  {['Deck Size', 'Transcend Only', 'Full Project (with railing, stairs, permits)'].map(h => <th key={h} style={S.th}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ['200 sqft', '$9,000–$13,000', '$15,000–$20,000'],
                  ['300 sqft', '$13,500–$19,500', '$22,000–$30,000'],
                  ['400 sqft', '$18,000–$26,000', '$28,000–$40,000'],
                  ['500 sqft', '$22,500–$32,500', '$35,000–$48,000'],
                  ['600+ sqft (multi-level)', '$27,000–$39,000', '$42,000–$60,000+'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400, color: j === 2 ? 'var(--color-primary)' : 'inherit' }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={S.p}>For a detailed breakdown including all add-ons and county-specific costs, see our <Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>complete composite deck cost guide</Link>.</p>

          {/* ===== FAQs ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
          {[
            { q: "Is Trex Transcend worth the extra cost over Enhance?", a: "For most homeowners, yes. Transcend's deeper wood grain, thicker shell, and richer color palette justify the 25-35% premium. If budget is tight, Enhance Naturals is a strong alternative." },
            { q: "Does Trex Transcend fade?", a: "Minor initial color settling in the first 60-90 days. After that, it holds its color beautifully. Our earliest installs (2019) show minimal, even fade." },
            { q: "How hot does Trex Transcend get in the sun?", a: "Dark colors reach 130-150°F in direct Virginia summer sun. Lighter colors (Island Mist, Rope Swing) stay 15-20 degrees cooler. For pool decks, consider AZEK." },
            { q: "How long does Trex Transcend last?", a: "25-year warranty. Real-world lifespan is 30-40+ years. Our earliest Northern Virginia installs (2019) still look excellent." },
            { q: "What's the difference between Transcend and Lineage?", a: "Lineage has a more realistic wood grain and a 50-year warranty. Costs 10-15% more. Both use the same shell technology." },
            { q: "How much does a Trex Transcend deck cost?", a: "$45-$65 per square foot installed. 300 sqft deck: $22,000-$30,000. 500 sqft: $35,000-$48,000." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          {/* ===== Related ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/trex-vs-timbertech-vs-azek', 'Trex vs TimberTech vs AZEK Full Comparison'],
              ['/composite-deck-cost-northern-virginia', 'Composite Deck Cost in Northern Virginia (2026)'],
              ['/trex-decks', 'Our Trex Decking Services'],
              ['/composite-deck-vs-wood-deck-virginia', 'Composite vs Wood 15-Year Cost Analysis'],
              ['/how-long-does-a-composite-deck-last', 'How Long Does a Composite Deck Last?'],
              ['/before-and-after', 'Before & After Deck Transformations'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}>
                <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} &rarr;</Link>
              </li>
            ))}
          </ul>

        </div>
      </article>

      <SimpleCTA title="Build Your Trex Transcend Deck" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/trex-transcend-review-northern-virginia" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <ContactHome />
    </>
  );
}
