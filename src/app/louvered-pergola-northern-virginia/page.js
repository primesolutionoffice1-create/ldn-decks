import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ServiceSchema from '@/components/ServiceSchema';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/louvered-pergola-northern-virginia',
  title: 'Louvered Pergola Builder in Northern Virginia',
  description: 'Motorized and manual louvered pergolas in Northern Virginia — adjustable-roof shade structures over decks and patios. $12,000-$35,000+. Free design consultation.',
  image: '/social/louvered-pergola-northern-virginia-social.png',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a louvered pergola cost in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "A manual louvered pergola around 12x14 ft runs $12,000-$20,000 installed in Northern Virginia. A motorized version of the same size runs $20,000-$35,000. Large or sensor-equipped systems with integrated lighting and screens start around $35,000. Those ranges include the dedicated footings and deck reinforcement the structure requires." } },
    { "@type": "Question", name: "Do louvered pergolas need a building permit in Virginia?", acceptedAnswer: { "@type": "Answer", text: "Usually yes. A louvered pergola whose roof closes fully is generally treated by Virginia building departments as a roofed structure subject to wind and snow load engineering, and the dedicated footings and structural connection typically require a building permit. HOA architectural approval is normally required as well." } },
    { "@type": "Question", name: "Can a louvered pergola be installed over an existing deck?", acceptedAnswer: { "@type": "Answer", text: "Sometimes, but it is far more involved than building one with a new deck. A louvered pergola is heavy and usually needs its own concrete footings plus a structural tie-in to the deck framing, which often means removing boards on a finished deck. The best results come from designing the pergola and the deck together." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function LouveredPergolaPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/louvered-pergola-northern-virginia" name="Louvered Pergola Builder in Northern Virginia" description="Motorized and manual louvered pergolas in Northern Virginia — adjustable-roof shade structures over decks and patios. $12,000-$35,000+. Free design consultation." speakable />
      <ServiceSchema
        name="Louvered Pergola Installation"
        description="Motorized louvered pergola systems in Northern Virginia. Adjustable aluminum roof structures for year-round outdoor living."
        url="https://ldndecks.com/louvered-pergola-northern-virginia"
        category="Outdoor Living"
        lowPrice="15000"
        highPrice="50000"
        relatedServices={['https://ldndecks.com/services/gazebo-pergola', 'https://ldndecks.com/outdoor-living-northern-virginia', 'https://ldndecks.com/covered-deck-builder-northern-virginia']}
      />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img15.jpeg"
              alt="Louvered pergola with an adjustable roof over a composite deck in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>Louvered Pergola Builder in Northern Virginia</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Motorized &amp; adjustable-roof pergolas over decks and patios</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/get-estimate" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Design Consultation</Link>
          </div>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <h2 style={S.h2}>Why Louvered Pergolas Are the 2026 Outdoor Upgrade</h2>
          <p style={S.p}>A louvered pergola is an open-sided shade structure with an adjustable roof. Instead of fixed beams, the roof is built from pivoting slats &mdash; louvers &mdash; that rotate from fully open to fully closed. Open them and sunlight pours through; close them and they overlap into a sealed roof that sheds rain into the hollow posts and away from your deck.</p>
          <p style={S.p}>For Northern Virginia homeowners that solves the classic outdoor-living problem: a traditional pergola never truly shelters you, and a solid roof blocks the sky permanently. A louvered pergola gives you both &mdash; filtered light on a clear morning, and a dry, sealed roof when a typical Virginia afternoon thunderstorm rolls in. Paired with a deck, it turns an exposed platform into a true outdoor room you can use across far more of the year. We cover the full background in our guide to <Link href="/blog/louvered-pergola-over-deck-northern-virginia" style={{ color: 'var(--color-primary)' }}>louvered pergolas over a deck</Link>.</p>

          <h2 style={S.h2}>Louvered Pergola Options</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { title: 'Manual Louvered Pergola', desc: 'Louvers rotate with a hand crank or pull rod. Fewer moving parts, lower cost. Best when you do not need automatic control.', range: '$12k–$20k', size: 'approx. 12x14 ft' },
              { title: 'Motorized Louvered Pergola', desc: 'A weather-sealed motor rotates the louvers from a switch, remote, or smartphone app. The breakout trend of 2026.', range: '$20k–$35k', size: 'approx. 12x14 ft' },
              { title: 'Deck-Mounted (Attached)', desc: 'Posts tie directly into reinforced deck framing and dedicated footings. Integrates the pergola with a new or existing deck.', range: 'Quoted with deck', size: 'Any deck size' },
              { title: 'Freestanding (Over Patio)', desc: 'A standalone louvered structure over a paver or stone patio on its own concrete footings. No deck required.', range: '$14k–$30k+', size: 'Any patio' },
            ].map((config) => (
              <div key={config.title} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.25rem' }}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{config.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>{config.range} · {config.size}</p>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6, marginTop: '0.5rem' }}>{config.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={S.h2}>What a Louvered Pergola Costs in Northern Virginia</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Size', 'Manual', 'Motorized', 'Typical Timeline'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['10x12 ft', '$9k–$15k', '$16k–$24k', '1 week'],
                  ['12x14 ft', '$12k–$20k', '$20k–$32k', '1–2 weeks'],
                  ['14x20 ft', '$18k–$28k', '$28k–$45k', '2 weeks'],
                  ['Large / sensor-equipped', '—', '$35k+', '2–3 weeks'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#888', fontStyle: 'italic' }}>Ranges include the dedicated footings and structural reinforcement the pergola requires. Integrated LED lighting, retractable side screens, and heaters add cost &mdash; but each is far cheaper installed during the original build. <Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)' }}>Full deck pricing guide &rarr;</Link></p>

          <h2 style={S.h2}>Design &amp; Structural Considerations</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>It is heavy:</strong> the aluminum frame, the bank of louvers, and the motor weigh far more than a wood pergola &mdash; and a closed roof loaded with rain or snow adds a real live load on top of that.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Footings and load path:</strong> the posts must be tied into the deck framing and usually need dedicated concrete footings poured below the frost line (24&ndash;30&quot; in Virginia). The load travels to the ground, not the deck surface &mdash; the same <Link href="/education/understanding-deck-load-paths" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>load-path principle</Link> every safe structure depends on.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Permits:</strong> a louvered pergola whose roof closes fully is generally treated as a roofed structure and requires a building permit. See <Link href="/blog/do-i-need-a-permit-for-a-deck-loudoun" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>when a deck project needs a permit</Link>.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Material:</strong> nearly all louvered pergolas are powder-coated aluminum &mdash; it will not rot, rust, warp, or splinter, and it carries the moving mechanism without sagging.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Smart add-ons:</strong> rain and wind sensors close or open the roof automatically, and integrated lighting ties the pergola into your <Link href="/blog/smart-deck-technology-trends-2026" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>smart deck system</Link>.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Plan it early:</strong> the best time to add a louvered pergola is during deck design. Retrofitting one onto a finished deck often means opening boards to add footings and reinforcement.</li>
          </ul>

          <h2 style={S.h2}>Real Louvered Pergola Projects</h2>
          {[
            { price: '$24,000', desc: 'Motorized 12x14 Pergola, Ashburn', detail: 'App-controlled aluminum louvered pergola over an existing Trex deck, tied into four new concrete footings. Rain sensor and integrated LED downlighting. Loudoun County permit. 1.5-week install.' },
            { price: '$16,000', desc: 'Manual 12x16 Pergola, Manassas', detail: 'Hand-crank louvered pergola over a paver patio dining area, freestanding on four footings. Powder-coated bronze finish. Prince William County permit. 1-week install.' },
            { price: '$38,000', desc: 'Motorized 14x22 Pergola + Screens, Vienna', detail: 'Large motorized louvered pergola over a new composite deck, with retractable side screens, integrated heaters, and lighting. Built with the deck as one structure. 2.5-week install.' },
          ].map((p, i) => (
            <div key={i} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{p.price} {p.desc}</h3>
              <p style={{ lineHeight: 1.7 }}>{p.detail}</p>
            </div>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "How much does a louvered pergola cost?", a: "Manual: $12k-$20k for a typical 12x14. Motorized: $20k-$35k. Large or sensor-equipped systems: $35k+. Ranges include footings and reinforcement." },
            { q: "Do they need a permit in Virginia?", a: "Usually yes. A roof that closes fully is treated as a roofed structure subject to wind and snow load engineering, and the footings and tie-in require a permit. HOA approval is normally needed too." },
            { q: "Can I add one to my existing deck?", a: "Sometimes, but it is more involved. A louvered pergola needs its own footings and a structural tie-in, which often means removing deck boards. It is best designed with the deck." },
            { q: "Manual or motorized?", a: "Motorized louvers with rain and wind sensors adjust automatically and are worth it if you entertain often or have a west-facing deck. Manual costs less and has fewer moving parts." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/services/gazebo-pergola', 'Gazebo & Pergola Services'],
              ['/blog/louvered-pergola-over-deck-northern-virginia', 'Louvered Pergolas Over a Deck (Guide)'],
              ['/blog/smart-deck-technology-trends-2026', 'Smart Deck Technology Trends'],
              ['/screened-porch-builder-northern-virginia', 'Screened Porch Builder'],
              ['/outdoor-living-northern-virginia', 'Outdoor Living Contractor'],
              ['/three-season-room-northern-virginia', 'Three-Season Room Builder'],
              ['/covered-deck-builder-northern-virginia', 'Covered Deck Builder Northern Virginia'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} &rarr;</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Design Your Louvered Pergola" buttonText="Get Free Design Consultation" link="/get-estimate" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <RelatedGuides currentPath="/louvered-pergola-northern-virginia" />

      <ContactHome />
    </>
  );
}
