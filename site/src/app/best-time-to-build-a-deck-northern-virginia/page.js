import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/best-time-to-build-a-deck-northern-virginia',
  title: 'Best Time to Build a Deck in Northern Virginia (2026)',
  description: 'Late winter/early spring gets the best pricing and fastest scheduling. Summer is peak season with 4-6 week waits. Month-by-month guide for NoVA deck building.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "When is the best time to build a deck in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "Late winter/early spring (February-April) offers the best pricing and fastest scheduling. Summer is peak season with 4-6 week wait times. Fall (September-November) is the second-best window." } },
    { "@type": "Question", name: "Can you build a deck in winter in Virginia?", acceptedAnswer: { "@type": "Answer", text: "Yes, as long as the ground isn't frozen solid. Footings can be poured when temps are above 32°F. Winter builds often get 10-15% better pricing due to lower demand." } },
    { "@type": "Question", name: "How far in advance should I book a deck builder?", acceptedAnswer: { "@type": "Answer", text: "For summer completion: book by February-March. For fall: book by June-July. Peak season (May-August) has 4-6 week backlogs for most quality builders in Northern Virginia." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, h3: { fontSize: '1.2rem', fontWeight: 600, margin: '1.5rem 0 0.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function BestTimeToBuildPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>When Is the Best Time to Build a Deck in Northern Virginia?</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Month-by-month guide: pricing, wait times, and weather considerations</p>
        </div>
      </section>

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p><strong>February–April</strong> for best pricing and availability. <strong>May–August</strong> is peak season with 4–6 week waits. <strong>September–November</strong> is the second-best window. Book 6–8 weeks before your desired start date.</p>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img30.jpeg"
              alt="Deck building project in Northern Virginia scheduled during optimal season"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>

          <h2 style={S.h2}>Northern Virginia Deck Building Calendar</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Month', 'Demand', 'Wait Time', 'Pricing', 'Weather'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Jan–Feb', 'Low', '1–2 weeks', 'Best (10–15% off)', 'Cold footings OK if ground not frozen'],
                  ['Mar–Apr', 'Medium', '2–3 weeks', 'Good', 'Ideal mild temps, ground thawed'],
                  ['May–Jun', 'Peak', '4–6 weeks', 'Standard', 'Great weather, high demand'],
                  ['Jul–Aug', 'Peak', '4–6 weeks', 'Standard', 'Hot crews work early mornings'],
                  ['Sep–Oct', 'Medium', '2–3 weeks', 'Good', 'Ideal cool and dry'],
                  ['Nov–Dec', 'Low', '1–2 weeks', 'Best (10–15% off)', 'Cold shorter days, but doable'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400, color: (i === 0 || i === 1 || i === 4 || i === 5) && j === 3 ? 'green' : 'inherit' }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>Why Winter/Spring Gets You the Best Deal</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Lower demand = faster scheduling.</strong> Most homeowners wait until summer to think about decks. If you start the process in January/February, you skip the backlog entirely.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Potential pricing advantage.</strong> Some builders (including us) offer 10–15% off labor during slow months to keep crews working year-round.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Permits process during the wait.</strong> Start your consultation in January, submit permits in February, and break ground in March when weather cooperates. By May your deck is done while your neighbors are just starting their search.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Material availability.</strong> Popular Trex colors and TimberTech lines can sell out in peak season. Off-peak means full selection.</li>
          </ul>

          <h2 style={S.h2}>Summer Peak Season What to Expect</h2>
          <p style={S.p}>May through August is when 60% of deck projects are booked in Northern Virginia. Expect:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>4–6 week wait from signed contract to construction start</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Permit offices at full capacity (Loudoun: 10–15 business days; Fairfax: 3–6 weeks)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Popular material colors may be backordered 2–4 weeks</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Afternoon thunderstorms can add 1–3 days to build time</li>
          </ul>
          <p style={S.p}><strong>Pro tip:</strong> If you want a summer completion, start the consultation process in February/March. By the time design, permits, and HOA approval are done (6–10 weeks), you&apos;re first in line for a May/June build start.</p>

          <h2 style={S.h2}>How Far in Advance to Book</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Desired Completion', 'Start Consultation By', 'Book Build By'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Spring (Apr–May)', 'January', 'February'],
                  ['Early Summer (Jun)', 'February', 'March'],
                  ['Mid Summer (Jul–Aug)', 'March–April', 'April–May'],
                  ['Fall (Sep–Oct)', 'June', 'July'],
                  ['Winter (Nov–Feb)', '4–6 weeks before', '2–3 weeks before'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
          {[
            { q: "When is the best time to build a deck in Northern Virginia?", a: "February–April for best pricing and scheduling. May–August is peak with 4-6 week waits. September–November is the second-best window." },
            { q: "Can you build a deck in winter?", a: "Yes footings can be poured above 32°F. Winter builds often get 10-15% better pricing." },
            { q: "How far ahead should I book?", a: "6-8 weeks minimum for peak season. For summer completion, start consulting in February-March." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/how-much-does-a-deck-cost-northern-virginia', 'How Much Does a Deck Cost?'],
              ['/hoa-deck-rules-northern-virginia', 'HOA Deck Rules'],
              ['/trex-vs-timbertech-vs-azek', 'Trex vs TimberTech vs AZEK'],
              ['/about/process', 'Our Build Process'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>

      <SimpleCTA title="Book Now for Spring/Summer Slots Filling Fast" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </>
  );
}
