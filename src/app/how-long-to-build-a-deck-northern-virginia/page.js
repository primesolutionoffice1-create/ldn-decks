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
  path: '/how-long-to-build-a-deck-northern-virginia',
  title: 'Deck Build Timeline in Northern Virginia | LDN Decks',
  description: 'Most decks take 2-4 weeks to build after permits. Full timeline: consultation (1 week), permits (2-6 weeks), construction (2-4 weeks). Total: 6-12 weeks.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How long does it take to build a deck?", acceptedAnswer: { "@type": "Answer", text: "Construction takes 2-4 weeks for most decks in Northern Virginia. However, the full timeline from first call to completion is 6-12 weeks when you include consultation (1 week), design (1-2 weeks), permits (2-6 weeks), and construction (2-4 weeks)." } },
    { "@type": "Question", name: "What takes the longest in the deck building process?", acceptedAnswer: { "@type": "Answer", text: "Permits. Loudoun County takes 10-15 business days, Fairfax County 3-6 weeks. This is why we recommend starting the process 2-3 months before your desired completion date." } },
    { "@type": "Question", name: "Can weather delay a deck build?", acceptedAnswer: { "@type": "Answer", text: "Yes. Rain days can add 1-3 days. Extended freezing (ground too hard for footings) can pause work for days. Summer thunderstorms rarely cause significant delays. We build through light rain and adjust schedules proactively." } },
    { "@type": "Question", name: "How long does a screened porch take to build?", acceptedAnswer: { "@type": "Answer", text: "Screened porches take 3-6 weeks of construction time longer than a standard deck due to the roof structure, screening, and often electrical work. Total timeline including permits: 8-14 weeks." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function HowLongToBuildPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema url="https://ldndecks.com/how-long-to-build-a-deck-northern-virginia" name="How Long to Build a Deck in Virginia" description="Most decks take 2-4 weeks to build after permits. Full timeline: consultation (1 week), permits (2-6 weeks), construction (2-4 weeks). Total: 6-12 weeks." speakable />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Deck Build Timeline in Northern Virginia: From Contract to Completion</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Complete timeline from first call to completion permits, construction, and what causes delays</p>
        </div>
      </section>

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p>Construction takes <strong>2–4 weeks</strong>. Full timeline from consultation to completion: <strong>6–12 weeks</strong>. The biggest variable is permits Loudoun County: 10–15 business days, Fairfax County: 3–6 weeks. Start the process 2–3 months before your desired completion date.</p>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img13.jpeg"
              alt="Deck construction timeline and process in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>
          <h2 style={S.h2}>The 5 Phases of a Deck Build</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Phase', 'Duration', 'What Happens'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['1. Initial consultation', '3–5 days', 'On-site visit, measurements, discuss your vision, review lot conditions'],
                  ['2. Design & estimate', '1–2 weeks', 'Custom design, material selection, detailed itemized estimate delivered'],
                  ['3. HOA submission', '2–4 weeks', 'Prepare and submit ARC package (if applicable), wait for approval'],
                  ['4. Permit application', '2–6 weeks', 'Submit plans to county, zoning + building review, receive permit'],
                  ['5. Material ordering', '1–2 weeks', 'Order decking, railings, hardware runs parallel with permit wait'],
                  ['6. Construction', '2–4 weeks', 'Footings, framing, decking, railings, stairs, lighting, inspections'],
                  ['7. Final inspection + walkthrough', '2–3 days', 'County final inspection, cleanup, client walkthrough, warranty delivery'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={S.p}><strong>Total: 6–12 weeks</strong> from first call to enjoying your deck. We overlap steps where possible (e.g., ordering materials during permit review) to compress the timeline.</p>

          <h2 style={S.h2}>Construction Time by Project Type</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Project', 'Size', 'Build Time'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Simple single-level deck', '200–300 sqft', '1.5–2.5 weeks'],
                  ['Standard deck with stairs', '300–450 sqft', '2–3 weeks'],
                  ['Multi-level deck', '400–600 sqft', '3–4 weeks'],
                  ['Deck + screened porch', '400–600 sqft combo', '4–6 weeks'],
                  ['Full outdoor living (deck + kitchen + porch)', '600+ sqft', '5–8 weeks'],
                  ['Deck resurfacing (keep frame)', '300–500 sqft', '1–2 weeks'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>Permit Timelines by County</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['County', 'Plan Review', 'Notes'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Loudoun County', '10–15 business days', 'Fastest in NoVA clean submissions process quickly'],
                  ['Fairfax County', '3–6 weeks', 'Slowest zoning review adds time, especially near RPA zones'],
                  ['Prince William County', '2–4 weeks', 'Middle ground straightforward for standard decks'],
                  ['Arlington County', '2–4 weeks', 'Smaller county, generally efficient'],
                  ['Stafford County', '2–3 weeks', 'Less demand, typically faster processing'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>What Causes Delays</h2>
          <p style={S.p}><strong>Weather:</strong> Rain adds 1–3 days. Frozen ground (Dec–Feb) can delay footings. Summer thunderstorms rarely cause significant impact crews work early mornings.</p>
          <p style={S.p}><strong>Permit revisions:</strong> If the county requests changes to your plans, add 1–2 weeks. We minimize this by checking compliance before submitting.</p>
          <p style={S.p}><strong>HOA delays:</strong> Some HOAs meet monthly. If you miss the submission deadline, you wait a full month. We track all major NoVA HOA review cycles.</p>
          <p style={S.p}><strong>Material backorders:</strong> Popular Trex colors can sell out in peak season (May–Aug). We order materials as soon as the contract is signed, before permits are even approved.</p>
          <p style={S.p}><strong>Change orders mid-build:</strong> Adding features during construction extends the timeline. We finalize the design completely before breaking ground.</p>

          <h2 style={S.h2}>How to Speed Up Your Project</h2>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Start in winter (Jan–Feb).</strong> Zero wait for crews, materials in stock, HOA boards less backlogged.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Have your HOA guidelines ready.</strong> If you can provide your ARC requirements at the first meeting, we submit faster.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Decide on materials early.</strong> &quot;I&apos;ll think about colors&quot; adds 1–2 weeks. Pick your material and color at the design meeting.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Finalize the design before signing.</strong> Changes after permit submission mean resubmission + another review cycle.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Clear the work area.</strong> Move furniture, planters, and anything within 10 feet of the build zone before day 1.</li>
          </ol>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
          {[
            { q: "How long does it take to build a deck?", a: "Construction: 2-4 weeks. Full process including permits: 6-12 weeks." },
            { q: "What takes the longest?", a: "Permits. Loudoun: 10-15 business days. Fairfax: 3-6 weeks." },
            { q: "Can weather delay my deck?", a: "Rain adds 1-3 days. Freezing can pause footings. Summer storms rarely cause significant delays." },
            { q: "How long for a screened porch?", a: "3-6 weeks of construction. Total with permits: 8-14 weeks." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/best-time-to-build-a-deck-northern-virginia', 'Best Time to Build a Deck'],
              ['/composite-deck-cost-northern-virginia', 'How Much Does a Deck Cost?'],
              ['/hoa-deck-rules-northern-virginia', 'HOA Deck Rules'],
              ['/deck-permit-fairfax-county-virginia', 'Fairfax County Permit Guide'],
              ['/about/process', 'Our Build Process'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>

      <SimpleCTA title="Ready to Start? Book Your Free Consultation" buttonText="Get Free Estimate" link="/contact" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <RelatedGuides currentPath="/how-long-to-build-a-deck-northern-virginia" />

      <ContactHome />
    </>
  );
}
