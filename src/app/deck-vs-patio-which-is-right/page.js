import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';

export const metadata = buildMetadata({
  path: '/deck-vs-patio-which-is-right',
  title: 'Deck vs Patio: Which Is Right for You?',
  description: 'Deck vs patio cost, maintenance, ROI, and best use compared for Northern Virginia homeowners. We build both. Free consultation.',
  image: '/social/deck-vs-patio-which-is-right-social.png',
});

const faqs = [
  { q: "Is a deck or patio cheaper to build?", a: "It depends on size, base preparation, materials and site conditions, and we do not publish a fixed percentage difference. External 2026 benchmarks put a simple, low-height composite deck at $35–$80 per square foot installed (RemodelCalculators, reviewed October 11, 2026), about $10,500–$24,000 for 300 sq ft. These are national planning estimates, not Loudoun Decks prices. Your project price is set in a written estimate after a site visit." },
  { q: "Does a deck or patio add more value to a home?", a: "Resale value depends on the home, the lot and local market conditions, so we do not quote a fixed ROI percentage for either option. Decks suit elevated and walkout lots; ground-level patios suit flat lots and fire features." },
  { q: "Can you build both a deck and patio?", a: "Yes. A raised deck connected to a ground-level patio is a common layout. Whether a combined project costs less than two separate projects depends on shared site preparation and access; the written estimate shows the actual numbers." },
  { q: "Which lasts longer a deck or patio?", a: "A paver patio can last 25-50 years with minimal maintenance. A composite deck lasts 25-50 years. Pressure-treated wood decks last 10-15 years. For longevity, both composite decks and pavers are excellent." },
];

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' }, link: { color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3 } };

export default function DeckVsPatioPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema dateModified="2026-10-19" url="https://ldndecks.com/deck-vs-patio-which-is-right" name="Deck vs Patio: Which Is Right for You?" description="Deck vs patio cost, maintenance, ROI, and best use compared for Northern Virginia homeowners. We build both. Free consultation." speakable />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Deck vs Patio: Which Is Right for Your Home?</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Cost, maintenance, ROI, and best use compared for Northern Virginia homeowners</p>
        </div>
      </section>

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p><strong>Decks</strong> are better for elevated areas, walkout basements, and dining/entertaining spaces. <strong>Patios</strong> are better for flat lots, fire pit areas, and budget-conscious projects. Many homeowners combine both for the best of both worlds.</p>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img32.jpeg"
              alt="Custom deck and patio combination build in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>

          <h2 style={S.h2}>Side-by-Side Comparison</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Factor', 'Deck (Composite)', 'Patio (Pavers)'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Cost (300 sqft)', 'About $10,500–$24,000 (external 2026 benchmark of $35–$80/sq ft; not a Loudoun Decks price)', 'Priced in a written estimate (no published range)'],
                  ['Lifespan', '25–50 years', '25–50 years'],
                  ['Maintenance', 'Occasional wash', 'Re-leveling every 5–10 yrs, weed control'],
                  ['Best for', 'Elevated areas, dining, entertaining', 'Flat lots, fire pits, pool surrounds'],
                  ['Permit required', 'Yes — Loudoun County requires building and zoning permits for all decks', 'Confirm with your county and HOA'],
                  ['Winter use', 'Limited (open); longer season with a screened porch', 'Limited without fire feature'],
                  ['Customization', 'Multi-level, railings, lighting, screens', 'Patterns, borders, built-in seating'],
                  ['Drainage', 'Built-in (elevated)', 'Requires grading/slope planning'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{row[0]}</td>
                    <td style={S.td}>{row[1]}</td>
                    <td style={S.td}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>When a Deck Is the Better Choice</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Sloped or uneven yard:</strong> Decks are elevated on posts, so they work on any grade. Patios require extensive grading on slopes.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Walkout basement:</strong> A deck creates a seamless transition from the main floor to the yard, with stairs down to grade.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Dining and entertaining:</strong> Decks feel like an extension of your interior closer to the kitchen, higher vantage point.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Screened option desired:</strong> Screened porches are built on deck framing. You can&apos;t screen a ground-level patio without walls.</li>
          </ul>

          <h2 style={S.h2}>When a Patio Wins</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Flat, level yard:</strong> No need for an elevated structure pavers sit directly on a gravel base.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Fire pit area:</strong> Ground-level is safer and more natural for fire features. You can&apos;t put a fire pit on a composite deck.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Pool surround:</strong> Pavers handle water better and stay cooler than most deck surfaces.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Budget priority:</strong> A ground-level patio avoids elevated framing, railings and stairs, which are major cost items on a deck. Compare written estimates for both options.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Permits:</strong> Requirements for ground-level patios differ from decks. Confirm permit and HOA requirements with your county before building.</li>
          </ul>

          <h2 style={S.h2}>The Combo Build (Best of Both)</h2>
          <p style={S.p}>A common layout: a <strong>raised composite deck</strong> connected to a <strong>ground-level paver patio</strong> with stairs between them. The deck serves as the dining/entertaining space near the house, while the patio provides a fire pit area or outdoor lounge at grade.</p>
          <p style={S.p}><strong>Cost:</strong> Sharing site preparation, access and mobilization can reduce cost compared with two separately scheduled projects, but we do not publish a fixed percentage. Your written estimate can show both options side by side.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Cost Planning in Northern Virginia</h2>
          <p style={S.p}>For a simple, low-height composite deck with standard railing and without complex stairs or elevation, external 2026 benchmarks put installed cost at $35–$80 per square foot (<a href="https://remodelcalculators.com/deck-cost" target="_blank" rel="noopener noreferrer" style={S.link}>RemodelCalculators</a>, reviewed October 11, 2026; <a href="https://www.angi.com/articles/how-much-does-it-cost-build-deck.htm" target="_blank" rel="noopener noreferrer" style={S.link}>Angi</a> lists $30–$60 per square foot for deck construction, updated September 24, 2026). For 300 sq ft that is about $10,500–$24,000. These are national planning estimates, not Loudoun Decks prices or quotes.</p>
          <p style={S.p}>Loudoun County requires building and zoning permits for all decks; the county&apos;s typical deck permit for decks under 1,000 sq ft outside incorporated towns is $265 (<a href="https://www.loudoun.gov/1166/Decks" target="_blank" rel="noopener noreferrer" style={S.link}>Loudoun County</a>, accessed October 18, 2026).</p>
          <p style={S.p}>We do not publish ranges for paver, flagstone or stamped concrete patios or pressure-treated wood decks on this page. A written estimate after a site visit is the only project price.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/composite-deck-cost-northern-virginia', 'How Much Does a Deck Cost?'],
              ['/services/patios', 'Our Patio Building Services'],
              ['/does-a-deck-add-value-to-your-home', 'Does a Deck Add Value?'],
              ['/composite-deck-vs-wood-deck-virginia', 'Composite vs Wood Deck'],
              ['/outdoor-living-northern-virginia', 'Outdoor Living in Northern Virginia'],
              ['/deck-builder-northern-virginia', 'Deck Builder in Northern Virginia'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (Google reviews) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
          </ul>
        </div>
      </article>

      <SimpleCTA title="Not Sure? We Build Both Free Consultation" buttonText="Get Free Estimate" link="/get-estimate" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-10-19" />

      <RelatedGuides currentPath="/deck-vs-patio-which-is-right" />

      <ContactHome />
    </>
  );
}
