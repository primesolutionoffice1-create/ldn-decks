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
  path: '/does-a-deck-add-value-to-your-home',
  title: 'Does a Deck Add Value to Your Home? (2026 ROI Data)',
  description: 'A composite deck recoups 60-80% at resale in Northern Virginia. 2026 ROI data, what buyers look for, and when a deck hurts resale value.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Does a deck add value to a home in Virginia?", acceptedAnswer: { "@type": "Answer", text: "Yes. A composite deck recoups 60-80% of its cost at resale in Northern Virginia. A $35,000 Trex deck can add $21,000-$28,000 to your home's market value." } },
    { "@type": "Question", name: "What type of deck has the best ROI?", acceptedAnswer: { "@type": "Answer", text: "Composite decks have the best ROI at 65-80%. Wood decks recoup 50-65%. Screened porches return 70-85%." } },
    { "@type": "Question", name: "Does a deck add more value than a patio?", acceptedAnswer: { "@type": "Answer", text: "Decks typically have higher ROI (65-80%) than patios (50-70%), especially for homes with walkout basements or sloped lots." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function DeckValuePage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema url="https://ldndecks.com/does-a-deck-add-value-to-your-home" name="Does a Deck Add Value to Your Home? (2026 ROI Data)" description="A composite deck recoups 60-80% at resale in Northern Virginia. 2026 ROI data, what buyers look for, and when a deck hurts resale value." speakable />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Does a Deck Add Value to Your Home?</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>2026 ROI data for Northern Virginia homeowners</p>
        </div>
      </section>

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Short Answer:</p>
          <p><strong>Yes.</strong> A composite deck recoups <strong>60–80%</strong> at resale. A $35,000 Trex deck adds $21,000–$28,000 to your home&apos;s value. In McLean, Great Falls, and Vienna, ROI is even higher because buyers expect outdoor living space.</p>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img36.jpeg"
              alt="Luxury custom deck adding significant resale value to Virginia home"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>

          <h2 style={S.h2}>ROI by Deck Type</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Deck Type', 'Avg. Cost (NoVA)', 'Resale Value Added', 'ROI'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['PT Wood Deck', '$12k–$20k', '$7k–$13k', '50–65%'],
                  ['Composite Deck', '$25k–$45k', '$16k–$36k', '65–80%'],
                  ['Screened Porch', '$35k–$65k', '$24k–$52k', '70–85%'],
                  ['Patio (Pavers)', '$10k–$30k', '$5k–$21k', '50–70%'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: i === 1 ? 600 : 400, color: i === 1 && j === 3 ? 'var(--color-primary)' : 'inherit' }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>Why Northern Virginia Decks Return More</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>High home values:</strong> Median home price in Loudoun County is $700k+, Fairfax $650k+. Buyers at this price point expect outdoor living space.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Competitive market:</strong> Homes with finished outdoor spaces sell 3–5 days faster (NoVA MLS average).</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Climate advantage:</strong> 7–8 months of comfortable outdoor weather means high utilization.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>HOA neighborhoods:</strong> Homes without outdoor improvements look dated compared to upgraded neighbors.</li>
          </ul>

          <h2 style={S.h2}>What Buyers Actually Look For</h2>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Low maintenance materials</strong> buyers strongly prefer composite. &ldquo;No staining needed&rdquo; is a listing selling point.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Usable space</strong> a 300 sqft deck with seating, dining, and grill zones beats a 500 sqft empty platform.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Lighting</strong> integrated stair and post lights signal a finished, professional build.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Code compliance</strong> permitted decks avoid inspection issues at sale. Unpermitted decks kill deals.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Screened option</strong> screened porches command the highest premium.</li>
          </ol>

          <h2 style={S.h2}>When a Deck Hurts Resale (Rare)</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Deteriorating wood:</strong> A rotting deck signals deferred maintenance. Worse than no deck.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Unpermitted:</strong> May need demolition or rebuild to code before sale.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Oversized:</strong> Consumes the entire backyard, reducing perceived yard space.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Wrong style:</strong> Aesthetic mismatch with the home&apos;s architecture.</li>
          </ul>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
          {[
            { q: "Does a deck add value in Virginia?", a: "Yes. Composite decks recoup 60-80%. In competitive NoVA markets, a quality deck can add $15,000-$40,000 to your home's value." },
            { q: "What deck type has the best ROI?", a: "Composite (65-80%), then screened porches (70-85%). Wood decks return 50-65%." },
            { q: "Deck or patio which adds more value?", a: "Decks typically have higher ROI (65-80%) than patios (50-70%), especially on sloped lots or homes with walkout basements." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/composite-deck-cost-northern-virginia', 'How Much Does a Deck Cost?'],
              ['/composite-deck-vs-wood-deck-virginia', 'Composite vs Wood Deck'],
              ['/screened-porch-cost-northern-virginia', 'Screened Porch Cost'],
              ['/hoa-deck-rules-northern-virginia', 'HOA Deck Rules'],
              ['/deck-builder-northern-virginia', 'Deck Builder in Northern Virginia'],
              ['/outdoor-living-northern-virginia', 'Outdoor Living in Northern Virginia'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (Google reviews) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
          </ul>
        </div>
      </article>

      <SimpleCTA title="Planning to Sell? Build Something Buyers Pay For." buttonText="Get Free Estimate" link="/contact" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <RelatedGuides currentPath="/does-a-deck-add-value-to-your-home" />

      <ContactHome />
    </>
  );
}