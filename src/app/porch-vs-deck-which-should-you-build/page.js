import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';

export const metadata = buildMetadata({
  path: '/porch-vs-deck-which-should-you-build',
  title: 'Porch vs Deck: Which Should You Build? (2026 ROI Guide)',
  description: 'Porch vs deck compared cost, ROI, usable months, maintenance. Screened porches: $25k-$70k, 9-10 months use. Open decks: $15k-$45k, 5-6 months. We build both.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is a porch or deck a better investment?", acceptedAnswer: { "@type": "Answer", text: "Screened porches return 70-85% at resale vs 65-80% for composite decks. Porches also extend usable outdoor season to 9-10 months vs 5-6 for open decks. However, porches cost 40-60% more upfront." } },
    { "@type": "Question", name: "How much more does a porch cost than a deck?", acceptedAnswer: { "@type": "Answer", text: "A screened porch costs $25,000-$70,000 vs $15,000-$45,000 for a comparable composite deck in Northern Virginia. The porch premium covers roof framing, screening, ceiling, and often electrical work." } },
    { "@type": "Question", name: "Can you convert a deck into a screened porch?", acceptedAnswer: { "@type": "Answer", text: "Yes, if the existing deck framing can support the added roof and wall weight. We inspect the structure first. Converting an existing deck typically costs $20,000-$40,000 depending on size and features." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function PorchVsDeckPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema url="https://ldndecks.com/porch-vs-deck-which-should-you-build" name="Porch vs Deck: Which Should You Build? (2026 ROI Guide)" description="Porch vs deck compared cost, ROI, usable months, maintenance. Screened porches: $25k-$70k, 9-10 months use. Open decks: $15k-$45k, 5-6 months. We build both." speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Porch vs Deck: Which Should You Build?</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Cost, ROI, usable season, and maintenance compared for Northern Virginia homeowners</p>
        </div>
      </section>
      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p><strong>Build a deck</strong> if you want sun, grilling space, and lower upfront cost ($15k–$45k). <strong>Build a screened porch</strong> if you want bug-free dining, 3-season use, and higher ROI ($25k–$70k). Many clients combine both.</p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img64.jpeg"
              alt="Comparing a screened porch with an open deck in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>
          <h2 style={S.h2}>The 5 Major Differences: Porch vs. Deck</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Factor', 'Open Deck', 'Screened Porch'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Cost (300 sqft)', '$15k–$35k', '$35k–$55k'],
                  ['Usable months/year', '5–6 months', '9–10 months'],
                  ['Bug protection', 'None', 'Full'],
                  ['Rain use', 'No', 'Yes (roof + screens)'],
                  ['Pollen season', 'Exposed', 'Protected'],
                  ['Grilling', 'Yes ideal', 'No (fire risk in enclosed space)'],
                  ['Sunbathing', 'Yes', 'Filtered through screen'],
                  ['Resale ROI', '65–80%', '70–85%'],
                  ['Maintenance', 'Occasional wash', 'Occasional wash + screen repair'],
                  ['Permit complexity', 'Standard', 'Higher (roof structure + electrical)'],
                  ['Construction time', '2–4 weeks', '3–6 weeks'],
                  ['Best for', 'Grilling, sunning, open-air', 'Dining, entertaining, relaxing'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{row[0]}</td>
                    <td style={S.td}>{row[1]}</td>
                    <td style={{ ...S.td, fontWeight: 600, color: 'var(--color-primary)' }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>When to Build a Deck</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>You love grilling outdoors</strong> open-flame cooking isn&apos;t safe in an enclosed porch</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Budget under $30k</strong> more square footage for the money</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>You want full sun</strong> tanning, gardening, open-air feeling</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Multi-level yard</strong> decks handle slopes better than porches</li>
          </ul>

          <h2 style={S.h2}>When to Build a Screened Porch</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Bugs are a dealbreaker</strong> mosquitoes, stink bugs, gnats kept out entirely</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Pollen allergy</strong> screens reduce pollen exposure significantly in spring</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>You entertain often</strong> dining, games, TV watching without weather interruption</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>3-season or 4-season use</strong> EZE-Breeze windows extend into Nov/Mar</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Higher ROI priority</strong> porches return 70–85% vs 65–80% for decks</li>
          </ul>

          <h2 style={S.h2}>The Best of Both: Deck + Porch Combo</h2>
          <p style={S.p}>Our most popular configuration: an <strong>open composite deck</strong> (250–350 sqft) with a connected <strong>screened porch</strong> (150–250 sqft). The deck serves as the grill and sun zone; the porch is the dining and relaxation zone.</p>
          <p style={S.p}><strong>Combo cost:</strong> $45,000–$75,000 (30–40% less than building separately).</p>
          <p style={S.p}><strong>Example project:</strong> 300 sqft Trex Transcend deck + 200 sqft screened porch with EZE-Breeze windows, beadboard ceiling, and ceiling fan in Centreville = $52,000.</p>

          <h2 style={S.h2}>Can You Convert a Deck into a Porch Later?</h2>
          <p style={S.p}>Yes if the existing deck framing can support the added roof weight. We inspect the structure before quoting. Converting typically costs $20,000–$40,000 depending on size and features. If you think you might want a porch later, tell us during deck design we can oversize the footings and framing now (minimal added cost) to make future conversion easy.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
          {[
            { q: "Is a porch or deck a better investment?", a: "Porches return 70-85% at resale vs 65-80% for decks, and extend usable season to 9-10 months. But they cost 40-60% more upfront." },
            { q: "How much more does a porch cost?", a: "Screened porches: $25k-$70k vs $15k-$45k for comparable composite decks. Premium covers roof, screens, ceiling, electrical." },
            { q: "Can I convert my deck to a porch later?", a: "Usually yes if framing supports the weight. Cost: $20k-$40k. Tell us during deck design and we'll prep the structure." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/screened-porch-cost-northern-virginia', 'Screened Porch Cost Guide'],
              ['/how-much-does-a-deck-cost-northern-virginia', 'Deck Cost Guide'],
              ['/deck-vs-patio-which-is-right', 'Deck vs Patio'],
              ['/services/porches', 'Our Porch Building Services'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (5.0★ Google) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
          </ul>
        </div>
      </article>
      <SimpleCTA title="Not Sure? We Build Both Free Consultation" buttonText="Get Free Estimate" link="/contact" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <ContactHome />
    </>
  );
}
