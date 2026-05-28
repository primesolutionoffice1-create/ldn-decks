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
  path: '/pet-friendly-deck-design',
  title: 'Pet-Friendly Deck Design: Build a Deck Your Dog Will Love (2026)',
  description: 'Design a pet-friendly deck: scratch-resistant composite, safe railings, shade zones, pet gates, easy-clean surfaces. Tips from Northern Virginia deck builders.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the best decking material for dogs?", acceptedAnswer: { "@type": "Answer", text: "Capped composite (Trex Transcend or TimberTech AZEK) is the best decking for dogs. It resists scratches from claws, doesn't splinter (safe for paws), stays cooler than wood in sun, and cleans easily. Avoid uncapped or low-end composites that scratch more easily." } },
    { "@type": "Question", name: "Will dog claws scratch composite decking?", acceptedAnswer: { "@type": "Answer", text: "Light surface scratches are possible but capped composites (Trex Transcend, TimberTech AZEK) are highly scratch-resistant. Any minor marks blend into the wood-grain texture over time. Pressure-treated wood shows claw marks more visibly and splinters into paws." } },
    { "@type": "Question", name: "How do I keep my dog safe on a deck?", acceptedAnswer: { "@type": "Answer", text: "Key safety features: railing balusters spaced 3 inches or less (prevents head entrapment), pet gates at stairs, no toxic stains or treatments, shade area for hot days, and fresh water station. Avoid cable railings dogs can squeeze through or get tangled." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 } };

export default function PetFriendlyDeckPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema url="https://ldndecks.com/pet-friendly-deck-design" name="Pet-Friendly Deck Design: Build a Deck Your Dog Will Love (2026)" description="Design a pet-friendly deck: scratch-resistant composite, safe railings, shade zones, pet gates, easy-clean surfaces. Tips from Northern Virginia deck builders." speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Pet-Friendly Deck Design</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Build a deck your dog (and you) will love materials, safety features, and design tips</p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img37.jpeg"
              alt="Designing a pet-friendly composite deck with built-in safety features for Northern Virginia homes"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>
          <h2 style={S.h2}>Standard vs. Pet-Optimized Deck Designs</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Material', 'Scratch Resistance', 'Splinter-Free', 'Heat', 'Easy to Clean', 'Pet Rating'].map(h => <th key={h} style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Trex Transcend', 'Excellent', 'Yes', 'Moderate', 'Yes', '★★★★★'],
                  ['TimberTech AZEK', 'Excellent', 'Yes', 'Good (coolest)', 'Yes', '★★★★★'],
                  ['Trex Enhance', 'Good', 'Yes', 'Moderate', 'Yes', '★★★★'],
                  ['Pressure-treated wood', 'Poor (shows marks)', 'No (splinters)', 'Moderate', 'Difficult', '★★'],
                  ['Cedar', 'Poor', 'Less than PT', 'Cool', 'Difficult', '★★★'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ padding: '0.75rem', borderBottom: '1px solid #eee', fontWeight: j === 0 ? 600 : 400, color: i < 2 && j === 5 ? 'var(--color-primary)' : 'inherit' }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>7 Pet-Friendly Deck Features</h2>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            {[
              { title: 'Composite decking (capped)', detail: 'No splinters in paws, resists claw scratches, cleans pet messes easily with soap and water. The #1 pet-friendly upgrade.' },
              { title: 'Close-spaced balusters (3" or less)', detail: 'Standard code is 4" max, but for small dogs and puppies, specify 3" spacing. Prevents head entrapment. Avoid cable railings dogs can squeeze through or get caught.' },
              { title: 'Pet gates at stairs', detail: 'Built-in gate mounts at the top and bottom of deck stairs. Keeps dogs on the deck when unsupervised. We can integrate gate hardware into the railing design.' },
              { title: 'Shade zone', detail: 'A pergola or canopy section so your dog has escape from direct sun. Virginia summers hit 90°F+ deck surfaces can reach 130°F. Dogs need shade.' },
              { title: 'Fresh water station', detail: 'A built-in hose bib connection or designated area for a water bowl. Small detail that makes daily life easier.' },
              { title: 'Easy-access ramp (for older dogs)', detail: 'If your deck is elevated, a wide ramp alongside the stairs lets senior dogs or dogs with joint issues access the deck comfortably.' },
              { title: 'Designated wash zone', detail: 'A section of the deck near the hose connection with a slight drainage slope perfect for post-walk paw rinses and summer baths. Composite surfaces handle water without damage.' },
            ].map((item, i) => (
              <li key={i} style={{ marginBottom: '1.25rem', lineHeight: 1.7 }}>
                <strong>{item.title}</strong>
                <br /><span style={{ color: '#555' }}>{item.detail}</span>
              </li>
            ))}
          </ol>

          <h2 style={S.h2}>Common Pet Deck Mistakes to Avoid</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Cable railings:</strong> Dogs can squeeze through horizontal cables, get tangled, or use them as a ladder. Use solid balusters instead.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Toxic stains/sealants:</strong> Some wood treatments contain chemicals harmful to pets who lick surfaces. Composite eliminates this entirely no chemicals needed.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Wide board gaps:</strong> Small dog nails can get caught in wide gaps between boards. Hidden fastener systems create tighter, safer gaps.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Dark colors in full sun:</strong> Dark composite can hit 140°F+ in direct Virginia sun. Choose lighter colors (Trex Island Mist, Foggy Wharf) for pet-heavy areas.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>No shade:</strong> Dogs overheat faster than humans. Always include a shaded section.</li>
          </ul>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "Best decking for dogs?", a: "Capped composite (Trex Transcend or TimberTech AZEK). Scratch-resistant, splinter-free, easy to clean, no toxic treatments." },
            { q: "Will dog claws scratch composite?", a: "Light scratches possible but capped composites are highly resistant. Marks blend into wood-grain texture. Far better than wood." },
            { q: "How to keep dogs safe on a deck?", a: "3\" baluster spacing, pet gates at stairs, shade zone, no cable railings, lighter color for heat, fresh water station." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/composite-deck-vs-wood-deck-virginia', 'Composite vs Wood Deck'],
              ['/trex-vs-timbertech-vs-azek', 'Trex vs TimberTech vs AZEK'],
              ['/deck-railing-options-northern-virginia', 'Railing Options'],
              ['/deck-maintenance-checklist-virginia', 'Deck Maintenance Checklist'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Design a Deck Your Whole Family Loves" buttonText="Get Free Estimate" link="/contact" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <ContactHome />
    </>
  );
}
