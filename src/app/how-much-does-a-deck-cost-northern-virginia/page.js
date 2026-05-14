import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ArticleSchema from '@/components/ArticleSchema';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/how-much-does-a-deck-cost-northern-virginia',
  title: '2026 Deck Cost in Northern Virginia | See Real Project Prices',
  description: 'Composite deck costs $30-$75/sqft installed in Northern Virginia. See real project price tables and get a free itemized quote today!',
  image: '/images/img10.jpeg',
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a composite deck cost in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "A composite deck in Northern Virginia costs $30-$75 per square foot installed. For a typical 300-500 sq ft deck, expect $15,000-$45,000 depending on material brand, railings, stairs, and complexity." } },
    { "@type": "Question", name: "Is a composite deck worth the extra cost over wood?", acceptedAnswer: { "@type": "Answer", text: "Yes. While composite costs 40-60% more upfront, it requires zero staining or sealing, lasts 25-50 years vs 10-15 for wood, and recoups more at resale." } },
    { "@type": "Question", name: "Why are decks more expensive in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "Northern Virginia deck costs run 25-35% above the state average due to higher labor rates, stricter building codes, HOA requirements, and the cost of doing business near Washington DC." } },
    { "@type": "Question", name: "Can I build a deck for under $15,000?", acceptedAnswer: { "@type": "Answer", text: "Yes a small (150-200 sqft) pressure-treated wood deck with basic railings can come in under $15,000. For composite materials at this budget, expect a smaller footprint around 120-150 sqft." } },
    { "@type": "Question", name: "Does a deck increase home value in Virginia?", acceptedAnswer: { "@type": "Answer", text: "Yes. A composite deck recoups 60-80% of its cost at resale in Northern Virginia. In competitive markets like McLean, Great Falls, and Vienna, a quality deck can add $15,000-$40,000 to your home's market value." } },
  ],
};

export default function DeckCostPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ArticleSchema
        title="How Much Does a Deck Cost in Northern Virginia?"
        description="Composite deck costs $30-$75/sqft installed in Northern Virginia. Pressure-treated wood $18-$35/sqft. Real project costs, price tables & free estimate."
        path="/how-much-does-a-deck-cost-northern-virginia"
        image="/images/img10.jpeg"
        datePublished="2025-03-01"
        dateModified="2026-04-23"
      />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>How Much Does a Deck Cost in Northern Virginia?</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Updated 2026 pricing with real project examples from Loudoun, Fairfax &amp; Prince William counties</p>
        </div>
      </section>

      <section data-speakable="true" style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p>A standard composite deck in Northern Virginia costs <strong>$30–$75 per square foot installed</strong>, or <strong>$15,000–$45,000</strong> for a typical 300–500 sq ft project. Pressure-treated wood decks start at $18–$35/sqft. Northern Virginia runs 25–35% above the state average. <CallLink style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Call (571) 655-7207</CallLink> for a free, itemized quote.</p>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img10.jpeg"
              alt="Beautiful custom composite deck in Northern Virginia showing estimated cost value"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Average Deck Cost by Material</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Material</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Cost/sqft</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>300 sqft</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>500 sqft</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Lifespan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Pressure-Treated Wood', '$18–$35', '$5,400–$10,500', '$9,000–$17,500', '10–15 yrs'],
                  ['Cedar', '$25–$45', '$7,500–$13,500', '$12,500–$22,500', '15–20 yrs'],
                  ['Trex Enhance', '$30–$50', '$9,000–$15,000', '$15,000–$25,000', '25+ yrs'],
                  ['Trex Transcend', '$45–$65', '$13,500–$19,500', '$22,500–$32,500', '25+ yrs'],
                  ['TimberTech AZEK', '$50–$75', '$15,000–$22,500', '$25,000–$37,500', '30–50 yrs'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: '0.75rem', borderBottom: '1px solid #eee', fontWeight: i === 3 && j < 2 ? 600 : 400, color: i === 3 && j === 0 ? 'var(--color-primary)' : 'inherit' }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>What Drives the Price Up (and Down)</h2>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, margin: '1.5rem 0 0.5rem' }}>Deck Size and Shape</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>A simple rectangular deck is the most cost-effective. Multi-level designs, curves, and octagonal sections add 20–40% to the base price due to extra framing, cuts, and waste material.</p>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, margin: '1.5rem 0 0.5rem' }}>Material Choice</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>The single biggest cost factor. Pressure-treated wood is cheapest upfront but needs $300–$800/year in staining and maintenance. <Link href="/trex-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Trex composite</Link> costs more initially but requires zero maintenance for 25+ years.</p>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, margin: '1.5rem 0 0.5rem' }}>Railings, Stairs, and Lighting</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Standard aluminum railings add $3,000–$6,000. Trex Signature or cable rail systems run $6,000–$12,000. Integrated LED stair and post lighting adds $1,500–$4,000.</p>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, margin: '1.5rem 0 0.5rem' }}>Permits and HOA Fees</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Building permits in Loudoun, Fairfax, and Prince William counties cost $200–$800. HOA architectural review is free but can add 2–4 weeks. <Link href="/hoa-deck-rules-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Read our HOA guide</Link>.</p>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, margin: '1.5rem 0 0.5rem' }}>Northern Virginia Premium</h3>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>Deck construction in the NoVA/DC metro area costs 25–35% more than the rest of Virginia due to higher labor rates, stricter codes, longer permit timelines, and HOA requirements.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Real Project Costs from Our Recent Builds</h2>

          {[
            { price: '$22,000', desc: '320 sqft Trex Transcend, Ashburn', detail: 'Single-level deck replacing a 12-year-old pressure-treated original. Trex Transcend in Island Mist, aluminum railings, 4 stairs to grade. Permitted through Loudoun County in 12 business days. Built in 2.5 weeks.' },
            { price: '$38,000', desc: '480 sqft Multi-Level, Leesburg', detail: 'Two-level composite deck with Trex Signature railings, integrated LED stair lights, built-in bench on upper level. HOA-approved in one submission. 3-week build.' },
            { price: '$52,000', desc: '600 sqft Deck + Screened Porch, McLean', detail: 'Open composite deck (400 sqft) connected to a screened porch (200 sqft) with ceiling fan, can lights, and EZE-Breeze windows. TimberTech AZEK in Dark Hickory. 4.5-week build.' },
          ].map((p, i) => (
            <div key={i} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{p.price} {p.desc}</h3>
              <p style={{ lineHeight: 1.7 }}>{p.detail}</p>
            </div>
          ))}

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '2.5rem 0 1rem' }}>How to Get an Accurate Quote</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Why online calculators miss 30–40%:</strong> They don&apos;t account for lot conditions, local permits, HOA requirements, or structural attachment work.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>What a good estimate includes:</strong> Itemized materials list, labor breakdown, permits, dumpster, cleanup, timeline with milestones, and warranty terms in writing.</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}><strong>Red flags:</strong> No permit costs listed, &ldquo;materials TBD,&rdquo; no written warranty, cash-only payment, no VA contractor license number.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
          {[
            { q: "How much does a composite deck cost in Northern Virginia?", a: "A composite deck costs $30-$75 per square foot installed. For a typical 300-500 sq ft deck, expect $15,000-$45,000 depending on material brand, railings, stairs, and complexity." },
            { q: "Is a composite deck worth the extra cost over wood?", a: "Yes. Over 15 years, the total cost of ownership for composite is lower than wood when you factor in annual staining, sealing, and board replacement." },
            { q: "Why are decks more expensive in Northern Virginia?", a: "Higher labor rates, stricter building codes, HOA requirements, and proximity to Washington DC drive costs 25-35% above the Virginia average." },
            { q: "Can I build a deck for under $15,000?", a: "Yes a small pressure-treated wood deck (150-200 sqft) with basic railings can come in under $15,000." },
            { q: "Does a deck increase home value?", a: "Yes. A composite deck recoups 60-80% at resale. In McLean, Great Falls, and Vienna, a quality deck can add $15,000-$40,000 to your home's value." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '2.5rem 0 1rem' }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/composite-deck-cost-northern-virginia', 'Composite Deck Cost Brand-by-Brand Pricing Guide'],
              ['/trex-vs-timbertech-vs-azek', 'Trex vs TimberTech vs AZEK Best Composite Decking'],
              ['/composite-deck-vs-wood-deck-virginia', 'Composite Deck vs Wood Deck Complete Comparison'],
              ['/screened-porch-cost-northern-virginia', 'Screened Porch Cost in Northern Virginia'],
              ['/does-a-deck-add-value-to-your-home', 'Does a Deck Add Value to Your Home?'],
              ['/hoa-deck-rules-northern-virginia', 'HOA Deck Rules in Northern Virginia'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}>
                <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link>
              </li>
            ))}
          </ul>

        </div>
      </article>

      <SimpleCTA title="Ready to Get Your Deck Priced?" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/how-much-does-a-deck-cost-northern-virginia" />
      <ContactHome />
    </>
  );
}
