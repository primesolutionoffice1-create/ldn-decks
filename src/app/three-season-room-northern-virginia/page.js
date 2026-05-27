import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ServiceSchema from '@/components/ServiceSchema';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/three-season-room-northern-virginia',
  title: 'Three-Season Room Builder in Northern Virginia',
  description: 'Custom three-season rooms in Northern Virginia with Eze-Breeze windows — usable 9-10 months a year. $33,000-$60,000+. Free design consultation.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a three-season room cost in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "A custom three-season room in Northern Virginia typically costs $33,000-$60,000. It is built like a screened porch but adds sliding vinyl window panels such as Eze-Breeze, which adds roughly $8,000-$15,000 over a screened porch of the same size. Final pricing depends on the framing elevation, roof, and number of window openings." } },
    { "@type": "Question", name: "What is the difference between a three-season room and a screened porch?", acceptedAnswer: { "@type": "Answer", text: "A screened porch uses fixed insect screens and is comfortable about 5-6 months a year. A three-season room uses the same framing and roof but adds multi-track sliding vinyl windows that close against wind, rain, cold, and pollen, extending comfortable use to roughly 9-10 months a year." } },
    { "@type": "Question", name: "Does a three-season room need a permit in Virginia?", acceptedAnswer: { "@type": "Answer", text: "Yes. Because a three-season room has a solid roof, it is classified as an addition and must meet wind and snow load engineering. It requires a building permit, triggers rear-yard setback review, and almost always needs HOA architectural approval in Northern Virginia communities." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function ThreeSeasonRoomPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema url="https://ldndecks.com/three-season-room-northern-virginia" name="Three-Season Room Builder in Northern Virginia" description="Custom three-season rooms in Northern Virginia with Eze-Breeze windows — usable 9-10 months a year. $33,000-$60,000+. Free design consultation." speakable />
      <ServiceSchema
        name="Three-Season Room Construction"
        description="Custom three-season room design and build in Northern Virginia. Enclosed outdoor rooms with EZE-Breeze windows for spring-to-fall enjoyment."
        url="https://ldndecks.com/three-season-room-northern-virginia"
        category="Porch Construction"
        lowPrice="30000"
        highPrice="80000"
        relatedServices={['https://ldndecks.com/screened-porch-builder-northern-virginia', 'https://ldndecks.com/services/porches', 'https://ldndecks.com/covered-deck-builder-northern-virginia']}
      />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img14.jpeg"
              alt="Custom three-season room with sliding vinyl windows built by LDN Decks in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>Three-Season Room Builder in Northern Virginia</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Sliding-window outdoor rooms usable 9&ndash;10 months a year</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Design Consultation</Link>
          </div>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <h2 style={S.h2}>What Is a Three-Season Room?</h2>
          <p style={S.p}>A three-season room is a roofed outdoor room that takes a screened porch one step further. It uses the same structural framing and roofline, but instead of fixed insect screens it integrates lightweight, multi-track sliding window panels &mdash; typically a vinyl or acrylic system such as <strong>Eze-Breeze</strong>. The panels slide open to expose screen ventilation on beautiful days, then slide shut to seal the room against wind, rain, cold, and pollen.</p>
          <p style={S.p}>For Northern Virginia, that is the difference between a space you use for five months and one you use for nine or ten. A standard screened porch becomes uncomfortable below 50&deg;F and during the spring pollen drop; a three-season room closes up and stays clean and usable from early March through late November. We compare the two in detail in our guide to <Link href="/blog/screened-porch-vs-three-season-room-virginia" style={{ color: 'var(--color-primary)' }}>screened porch vs. three-season room</Link>.</p>

          <h2 style={S.h2}>Three-Season Room Options</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { title: 'New Three-Season Room', desc: 'A full custom build — footings, framing, roof, and sliding-window system designed to match your home from the ground up.', range: '$33k–$60k', size: '160–320 sqft' },
              { title: 'Convert a Screened Porch', desc: 'Retrofit Eze-Breeze sliding vinyl panels into an existing screened porch with sound framing and roof. The fastest path.', range: '$10k–$20k', size: 'Existing porch' },
              { title: 'Convert an Open Deck', desc: 'Add a roof, framing, and sliding windows to an existing deck whose structure can carry the added load.', range: '$28k–$50k', size: 'Existing deck' },
              { title: 'Three-Season Room + Deck', desc: 'A combined project — open deck for grilling and sun, plus an attached three-season room for shaded, bug-free comfort.', range: 'Quoted together', size: 'Custom' },
            ].map((config) => (
              <div key={config.title} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.25rem' }}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{config.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>{config.range} · {config.size}</p>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6, marginTop: '0.5rem' }}>{config.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={S.h2}>What a Three-Season Room Costs in Northern Virginia</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Size', 'Screened Porch', 'Three-Season Room', 'Timeline'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['12x14 ft (168 sqft)', '$25k–$38k', '$33k–$48k', '3–4 weeks'],
                  ['14x18 ft (252 sqft)', '$32k–$45k', '$42k–$58k', '4–5 weeks'],
                  ['16x20 ft (320 sqft)', '$38k–$52k', '$48k–$65k', '4–6 weeks'],
                  ['Screened-porch conversion', '—', '+$10k–$20k', '1–2 weeks'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#888', fontStyle: 'italic' }}>A three-season room adds roughly $8k&ndash;$15k over a screened porch of the same size for the sliding-window system. <Link href="/screened-porch-cost-northern-virginia" style={{ color: 'var(--color-primary)' }}>Screened porch cost guide &rarr;</Link></p>

          <h2 style={S.h2}>Design, Permits &amp; HOA</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Permit required:</strong> a solid roof makes a three-season room a roofed addition that must meet wind and snow load engineering. A building permit is always required.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Setback &amp; zoning review:</strong> because it is roofed, it is held to stricter rear-yard setbacks than an open deck. See our guide to <Link href="/education/fairfax-county-deck-setbacks-zoning" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Fairfax County setbacks and zoning</Link>.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>HOA approval:</strong> Northern Virginia communities review the roof pitch, siding, and window style to match your home. Start the <Link href="/education/hoa-deck-approval-guidelines-nova" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>HOA architectural review</Link> early.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Pollen-proof:</strong> sliding vinyl panels close out the spring oak and pine pollen that blows straight through a standard screened porch &mdash; furniture and floors stay clean.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Furnish it like an indoor room:</strong> with rain and snow kept out, you can use indoor-style sofas, rugs, and a television. Add a ceiling-mounted infrared heater to push usability deeper into autumn.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Not a sunroom:</strong> a three-season room is unconditioned (no permanent HVAC), which keeps it simpler and far less expensive than a four-season glass sunroom.</li>
          </ul>

          <h2 style={S.h2}>Real Three-Season Room Projects</h2>
          {[
            { price: '$46,000', desc: '252 sqft Three-Season Room, Leesburg', detail: 'New roofed room off the kitchen with Eze-Breeze sliding vinyl windows, tongue-and-groove ceiling, recessed lighting, and a ceiling fan. Loudoun County permit and HOA approval handled in-house. 4.5-week build.' },
            { price: '$15,000', desc: 'Screened Porch Conversion, Centreville', detail: 'Existing screened porch upgraded with custom-measured Eze-Breeze panels retrofitted into the screen openings. No structural work needed. 1.5-week install.' },
            { price: '$61,000', desc: '320 sqft Three-Season Room + Deck, McLean', detail: 'Combined project: open Trex deck for grilling plus an attached three-season room with sliding windows, infrared heater, and an outdoor TV. Built as one structure. 6-week build.' },
          ].map((p, i) => (
            <div key={i} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{p.price} {p.desc}</h3>
              <p style={{ lineHeight: 1.7 }}>{p.detail}</p>
            </div>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "How much does a three-season room cost?", a: "Typically $33k-$60k for a new custom build, depending on size and finishes. It runs roughly $8k-$15k more than a screened porch of the same size for the sliding-window system." },
            { q: "Three-season room or screened porch?", a: "A screened porch is comfortable about 5-6 months a year and costs less. A three-season room closes against wind, rain, cold, and pollen and is usable 9-10 months — the better long-term value if you want more use." },
            { q: "Does it need a permit?", a: "Yes. A solid roof makes it a roofed addition subject to wind and snow load engineering. It requires a building permit, setback review, and almost always HOA approval." },
            { q: "Can I convert my existing screened porch?", a: "Usually yes. If the framing and roof are sound, Eze-Breeze sliding vinyl panels can be retrofitted into the existing screen openings — the fastest, most affordable path to a three-season room." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/screened-porch-builder-northern-virginia', 'Screened Porch Builder'],
              ['/screened-porch-cost-northern-virginia', 'Screened Porch Cost Guide'],
              ['/blog/screened-porch-vs-three-season-room-virginia', 'Screened Porch vs. Three-Season Room'],
              ['/services/porches', 'Porch Services'],
              ['/outdoor-living-northern-virginia', 'Outdoor Living Contractor'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} &rarr;</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Design Your Three-Season Room" buttonText="Get Free Design Consultation" link="/contact" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <ContactHome />
    </>
  );
}
