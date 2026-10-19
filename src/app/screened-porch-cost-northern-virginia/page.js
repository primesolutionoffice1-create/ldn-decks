import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import TrustBanner from '@/components/TrustBanner';
import NamedAuthor from '@/components/NamedAuthor';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import { PLANNING_DISCLAIMER, SCREEN_EXISTING_ANSWER } from '@/lib/externalPlanningRanges';

const description = 'Screening an existing porch is about $5–$20/sq ft in a 2026 HomeAdvisor benchmark. Not a Loudoun Decks price. A written estimate is the only project price.';

export const metadata = buildMetadata({
  path: '/screened-porch-cost-northern-virginia',
  title: '2026 Screened Porch Cost NoVA | Pricing Scenarios',
  description,
  image: '/social/screened-porch-cost-northern-virginia-social.png',
});

const faqs = [
  { q: 'How much does a screened porch cost in Northern Virginia?', a: SCREEN_EXISTING_ANSWER },
  { q: 'Is a screened porch worth it?', a: 'Resale recovery is not a fixed percentage. The 2025 Cost vs Value report does not include a screened porch category, so this page does not publish an ROI figure. A written estimate is the only project price.' },
  { q: 'Can you add screens to an existing deck?', a: 'Often yes, if the framing supports the added weight. HomeAdvisor’s $5–$20 per square foot range (updated June 17, 2026) assumes the roof and structure already exist and are sound. We inspect before quoting. A written estimate is the only project price.' },
  { q: 'What are EZE-Breeze windows?', a: 'Vinyl panels that convert a screened porch into a 3-season room. Slide up for airflow, close for wind and rain protection. This page does not publish an EZE-Breeze price.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, h3: { fontSize: '1.2rem', fontWeight: 600, margin: '1.5rem 0 0.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function ScreenedPorchCostPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema dateModified="2026-10-19" url="https://ldndecks.com/screened-porch-cost-northern-virginia" name="2026 Screened Porch Cost NoVA | Pricing Scenarios" description={description} speakable />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>How Much Does a Screened Porch Cost in Northern Virginia?</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>External planning ranges for screening an existing structure. Not a Loudoun Decks price.</p>
        </div>
      </section>
      <TrustBanner />

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }} data-speakable="true">
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p data-speakable>{SCREEN_EXISTING_ANSWER}</p>
        </div>
      </section>

      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
        <NamedAuthor context="Loudoun, Fairfax, and Prince William counties" lastUpdated="October 19, 2026" />
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img23.jpeg"
              alt="Custom screened-in porch with EZE-Breeze windows in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>

          <h2 style={S.h2}>External planning range: screen an existing structure</h2>
          <p style={S.p}>{PLANNING_DISCLAIMER}</p>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <caption style={{ textAlign: 'left', padding: '0 0 0.75rem', fontWeight: 600 }}>External market benchmark, not a Loudoun Decks price</caption>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  {['Scenario', 'Assumptions', 'Planning range', 'Source and year'].map((h) => <th key={h} style={S.th}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th style={S.td}>Screen an existing structure that already has a sound roof</th>
                  <td style={S.td}>Roof and structure already exist and are sound. HomeAdvisor also mentions permit fees of about $150–$300 on that page. That permit mention is not the Loudoun County or Fairfax County fee. A new roof, new footings, and a new structure are outside this range.</td>
                  <td style={S.td}>$5–$20 per sq ft (2025/2026). About $2,000–$4,000 total on the source page. 320 sq ft example: $1,600–$6,400.</td>
                  <td style={S.td}><a href="https://www.homeadvisor.com/cost/outdoor-living/screened-in-porch/" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>HomeAdvisor, Screened-In Porch, updated June 17, 2026</a></td>
                </tr>
                <tr style={{ background: '#fafafa' }}>
                  <th style={S.td}>New screened porch with a new structure and roof</th>
                  <td style={S.td}>Includes a new roofed structure. Published aggregator ranges for this scope are too wide to publish as a planning total.</td>
                  <td style={S.td}>Not published. A written estimate is the only project price.</td>
                  <td style={S.td}>Not published.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={S.p}>The 320 sq ft total is the published $5–$20 per sq ft bounds times 320. Loudoun County says its Typical Deck detail cannot be used for a screened porch, which needs a full plan set, so this page does not publish a flat Loudoun screened-porch permit fee. Fairfax County requires a permit for screen porches and calculates the fee in PLUS. The published minimum base fee is $141.75 plus levy and surcharge (<a href="https://www.fairfaxcounty.gov/landdevelopment/sites/landdevelopment/files/assets/documents/fee-schedule.pdf" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>2026 fee schedule</a>). That minimum is not a porch total. See <a href="https://www.loudoun.gov/1166/Decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun County Decks</a> (accessed October 18, 2026) and <a href="https://www.fairfaxcounty.gov/landdevelopment/when-permit-required" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Fairfax County permit rules</a>.</p>

          <h2 style={S.h2}>Scope examples, not prices</h2>
          <p style={S.p}>These descriptions organize a written estimate. They are not priced tiers, and they are not the $5–$20 per sq ft screening range above.</p>
          <h3 style={S.h3}>Basic</h3>
          <p style={S.p}>Pressure-treated wood frame and floor, fiberglass screen panels, standard ceiling fan, one electrical outlet.</p>
          <h3 style={S.h3}>Mid-range</h3>
          <p style={S.p}>Composite flooring (Trex or TimberTech), EZE-Breeze vinyl windows, tongue-and-groove ceiling, recessed lighting, multiple outlets, upgraded railing.</p>
          <h3 style={S.h3}>Premium</h3>
          <p style={S.p}>Mid-range features plus mahogany or AZEK flooring, retractable screen walls, a fireplace or heater allowance, a TV mount with hidden wiring, custom trim, and a stained beadboard ceiling.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Screened porch vs open deck</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Feature', 'Open deck', 'Screened porch'].map((h) => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Bug protection', 'None', 'Mesh screening'],
                  ['Rain', 'Open to rain unless a roof is added', 'A roof is part of a screened porch'],
                  ['Best fit', 'Grilling and open air', 'Dining with insect protection'],
                ].map((row, i) => (
                  <tr key={row[0]} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={S.p}>An open deck and a screened section can be planned together. This page does not publish a savings percentage for combining them. For an open composite deck, see <Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>composite deck cost in Northern Virginia</Link>. Price the combined scope in a written estimate.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Scope examples for a written estimate</h2>
          <p style={S.p}>
            These examples describe scope. They are not published client case studies and they do not have a published price. Confirm site access, structural support, electrical scope, county permits, HOA review, and materials in the written estimate.
          </p>
          {[
            { desc: '180 sq ft screened porch scope', detail: 'Composite floor, EZE-Breeze-style window package, beadboard-style ceiling finish, two ceiling fans, and permit coordination.' },
            { desc: '280 sq ft porch plus open deck scope', detail: 'Trex Transcend-level flooring, retractable screen package, finished ceiling, electric heater allowance, TV blocking and wiring allowance, and an attached open deck zone.' },
            { desc: '350 sq ft premium porch scope', detail: 'Premium PVC or capped-composite floor, larger screen or window openings, fireplace or heater allowance, upgraded lighting, stained ceiling finish, and custom trim.' },
          ].map((item) => (
            <div key={item.desc} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{item.desc}</h3>
              <p style={{ lineHeight: 1.7 }}>{item.detail}</p>
            </div>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
          {faqs.map((faq) => (
            <details key={faq.q} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/screened-porch-builder-northern-virginia', 'screened porch builder in Northern Virginia'],
              ['/services/porches', 'porch services in Northern Virginia'],
              ['/covered-deck-cost-northern-virginia', 'Covered Deck Cost & Payment Planning Guide'],
              ['/composite-deck-cost-northern-virginia', 'composite deck cost in Northern Virginia'],
              ['/composite-deck-vs-wood-deck-virginia', 'Composite vs Wood Deck'],
              ['/deck-cost-calculator', 'NoVA Deck Cost Calculator'],
              ['/deck-financing', 'Financing in Northern Virginia'],
              ['/how-tariffs-affect-deck-prices-2026', '2026 Tariff Impact on Deck Prices'],
              ['/does-a-deck-add-value-to-your-home', 'Does a Deck Add Value?'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>

      <SimpleCTA title="Get Your Screened Porch Quote" buttonText="Get Free Estimate" link="/get-estimate" />
      
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Resources</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building Services →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Customer Reviews (Google reviews) →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/about" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>About Loudoun Decks →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/get-estimate" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Get a Free Estimate →</Link></li>
        </ul>
      </section>
      <RelatedGuides currentPath="/screened-porch-cost-northern-virginia" />
      <ContactHome />
    </>
  );
}
