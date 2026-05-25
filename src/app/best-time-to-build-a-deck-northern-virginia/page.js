import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ArticleSchema from '@/components/ArticleSchema';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/best-time-to-build-a-deck-northern-virginia',
  title: 'Best Time to Build a Deck in Northern Virginia (2026)',
  description: 'Late winter/early spring gets the best pricing and fastest scheduling. Summer is peak season with 4-6 week waits. Month-by-month guide, hidden HOA + permit timeline, and how to time financing.',
});

const faqs = [
  {
    q: 'When is the best time to build a deck in Northern Virginia?',
    a: 'February–April for the best pricing and the fastest scheduling. May–August is peak season with 4–6 week waits. September–November is the second-best window: scheduling has eased from the spring rush and a fall replacement leaves you with a finished deck ready for spring.',
  },
  {
    q: 'Can you build a deck in winter in Virginia?',
    a: 'Yes — composite decking installs year-round. Footings can be poured when temperatures allow and the ground is workable; deeply frozen soil can slow excavation. Winter is typically the calmest, most flexible time on a builder’s calendar, and a deck finished in late winter is ready the moment spring arrives.',
  },
  {
    q: 'How far in advance should I book a deck builder?',
    a: 'For a summer completion, start the consultation in February–March. For peak season (May–August), expect 4–6 week backlogs with most quality Northern Virginia builders. Off-peak, 2–3 weeks is realistic. Sooner is always better — the limiting factor is HOA review and the county permit, not the build itself.',
  },
  {
    q: 'Why does timing a deck project matter so much?',
    a: 'Because construction is the last step, not the first. HOA architectural review and the county permit happen before any footings go in, and together they commonly add several weeks to a few months. Start late and those weeks land inside peak season — pushing the build into the busiest, slowest-to-schedule months instead of getting ahead of them.',
  },
  {
    q: 'When should I sort out deck financing?',
    a: 'Before design is finalized. Knowing your comfortable monthly range early shapes the design and material choices instead of forcing compromises after the quote lands. You can model a payment yourself with the deck payment estimator, and a soft-credit pre-qualification does not affect your credit score. Winter is the natural time to handle it.',
  },
  {
    q: 'Is fall a good time to replace an old deck?',
    a: 'Fall is one of the best windows for a replacement. A full summer of use reveals every soft board and loose railing on an aging wood deck; scheduling has eased from the spring rush; and replacing in fall means a finished deck waiting in spring without competing for a peak-season slot.',
  },
  {
    q: 'When is the busiest time for deck builders?',
    a: 'May through August — about 60% of Northern Virginia deck projects are booked in this window. Demand climbs as the weather warms, which means longer lead times and tighter schedules. Planning in the off-season (late fall and winter) typically means more flexibility and a deck ready when warm weather arrives.',
  },
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

const S = {
  h2: { fontSize: '1.85rem', fontWeight: 800, marginBottom: '1.25rem', marginTop: '3rem', lineHeight: 1.25, color: 'var(--color-dark)', borderLeft: '5px solid var(--color-primary)', paddingLeft: '1rem' },
  h3: { fontSize: '1.2rem', fontWeight: 700, margin: '1.5rem 0 0.5rem' },
  p: { marginBottom: '1rem', lineHeight: 1.7 },
  th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' },
  td: { padding: '0.75rem', borderBottom: '1px solid #eee' },
  link: { color: 'var(--color-primary)', fontWeight: 600 },
  callout: { background: '#f0f7ff', borderLeft: '4px solid #0070f3', padding: '1.25rem 1.5rem', borderRadius: '0 8px 8px 0', margin: '1.75rem 0' },
};

export default function BestTimeToBuildPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ArticleSchema
        title="Best Time to Build a Deck in Northern Virginia (2026)"
        description="Month-by-month guide to deck timing in Northern Virginia — pricing, wait times, weather, the hidden HOA + permit timeline before construction, and how to time financing."
        path="/best-time-to-build-a-deck-northern-virginia"
        datePublished="2025-02-12"
        dateModified="2026-05-21"
      />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>When Is the Best Time to Build a Deck in Northern Virginia?</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Month-by-month guide: pricing, wait times, the hidden HOA + permit timeline, and how to time financing</p>
        </div>
      </section>

      <section data-speakable="true" style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p style={{ margin: 0 }}><strong>February–April</strong> for best pricing and availability. <strong>May–August</strong> is peak season with 4–6 week waits. <strong>September–November</strong> is the second-best window. Book 6–8 weeks before your desired start date — and remember that HOA review and the county permit happen <em>before</em> construction, so plan roughly one season ahead.</p>
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

          <h2 style={S.h2}>The Hidden Timeline: HOA + Permits Before the Build</h2>
          <p style={S.p}>
            The part homeowners underestimate most is approvals. An HOA architectural review committee meets on its own schedule and can take a few weeks — longer in spring, when submissions pile up. The county permit is a separate track on top of that. Neither is construction; both have to finish first.
          </p>
          <p style={S.p}>
            County permit timing varies by jurisdiction — see the <Link href="/deck-permit-loudoun-county-virginia" style={S.link}>Loudoun</Link>, <Link href="/deck-permit-fairfax-county-virginia" style={S.link}>Fairfax</Link>, and <Link href="/deck-permit-prince-william-county-virginia" style={S.link}>Prince William</Link> permit guides for specifics. HOA architectural review is its own track; the <Link href="/hoa-deck-rules-northern-virginia" style={S.link}>HOA deck rules guide</Link> covers what each committee typically asks for.
          </p>
          <div style={S.callout}>
            <p style={{ margin: 0, lineHeight: 1.7 }}>
              <strong>The practical rule:</strong> add the HOA window plus the permit window to your plan and count backward from when you actually want to use the deck. We prepare and submit both packages as part of the project, so they run in parallel rather than back-to-back.
            </p>
          </div>

          <h2 style={S.h2}>Summer Peak Season — What to Expect</h2>
          <p style={S.p}>May through August is when about 60% of deck projects are booked in Northern Virginia. Expect:</p>
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

          <h2 style={S.h2}>Financing Timing — Why Winter Is the Smart Window</h2>
          <p style={S.p}>
            Money is a planning input, not an afterthought. Knowing your comfortable monthly range <em>before</em> design is finalized shapes the choices — instead of forcing compromises after the quote lands. Winter, while you are planning, is the natural time to handle it.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Model a payment yourself with the <Link href="/deck-payment-estimator" style={S.link}>deck payment estimator</Link> — three sliders, a monthly figure in seconds.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Review options on the <Link href="/deck-financing" style={S.link}>deck financing page</Link>; pre-qualify with a soft-credit check that does not affect your score.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Anchor the budget with realistic numbers from the <Link href="/how-much-does-a-deck-cost-northern-virginia" style={S.link}>Northern Virginia deck cost guide</Link>.</li>
          </ul>

          <h2 style={S.h2}>Year-Round Building: Can You Really Build in Winter?</h2>
          <p style={S.p}>
            Yes — and it is often the smartest call. Composite decking installs year-round, builder schedules are at their most flexible, and a deck finished in late winter is ready the moment spring arrives. The honest caveat is the ground: deeply frozen soil can slow footing excavation, and concrete needs suitable conditions to cure. A good builder simply plans around short cold snaps.
          </p>

          <h2 style={S.h2}>Common Timing Mistakes</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Calling in spring for a summer deck — and discovering approvals alone will use most of that window.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Treating winter as &quot;off-season&quot; when it is the best planning-and-booking window.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Forgetting that HOA review sits <em>in front of</em> the county permit, not alongside it.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Leaving financing until after design — then trimming the project to fit.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Pushing a worn deck through one more summer instead of replacing it in the calmer fall window.</li>
          </ul>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 700, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/how-much-does-a-deck-cost-northern-virginia', 'How Much Does a Deck Cost?'],
              ['/deck-payment-estimator', 'Deck Payment Estimator — see your monthly payment'],
              ['/deck-financing', 'Deck Financing in Northern Virginia'],
              ['/hoa-deck-rules-northern-virginia', 'HOA Deck Rules in Northern Virginia'],
              ['/deck-permit-loudoun-county-virginia', 'Loudoun County Deck Permit Guide'],
              ['/trex-vs-timbertech-vs-azek', 'Trex vs TimberTech vs AZEK'],
              ['/before-and-after', 'Before & After Project Gallery'],
              ['/reviews', 'Homeowner Reviews'],
              ['/about/process', 'Our Build Process'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={S.link}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>

      <SimpleCTA title="Book Now for Spring/Summer Slots Filling Fast" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/best-time-to-build-a-deck-northern-virginia" />
      <ContactHome />
    </>
  );
}
