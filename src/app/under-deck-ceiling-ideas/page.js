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
  path: '/under-deck-ceiling-ideas',
  title: 'Under-Deck Ceiling Ideas (5 Options)',
  description: 'Turn the space under your elevated deck into usable living area. Under-deck drainage systems, ceiling panels, lighting. $3,000-$15,000 in Northern Virginia.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does an under-deck ceiling system cost?", acceptedAnswer: { "@type": "Answer", text: "Under-deck ceiling systems in Northern Virginia cost $8-$25 per square foot installed. For a typical 300 sqft under-deck area: basic gutter system $3,000-$5,000, vinyl ceiling panels $5,000-$10,000, premium aluminum ceiling with lighting $8,000-$15,000." } },
    { "@type": "Question", name: "What is the best under-deck drainage system?", acceptedAnswer: { "@type": "Answer", text: "Trex RainEscape and Zip-UP UnderDeck are the two leading systems. Trex RainEscape is a trough-and-tape system installed above the joists invisible from below. Zip-UP is a panel system that serves as both ceiling and drainage. Both keep the area below 100% dry." } },
    { "@type": "Question", name: "Can I finish the space under my deck?", acceptedAnswer: { "@type": "Answer", text: "Yes an under-deck drainage/ceiling system creates a dry, usable space below. Common uses: patio seating, outdoor kitchen, storage, dog run, hot tub placement. It effectively doubles your outdoor living area on a two-story deck." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function UnderDeckPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema url="https://ldndecks.com/under-deck-ceiling-ideas" name="Under-Deck Ceiling Ideas (5 Options)" description="Turn the space under your elevated deck into usable living area. Under-deck drainage systems, ceiling panels, lighting. $3,000-$15,000 in Northern Virginia." speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Under-Deck Ceiling Ideas</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>5 ways to transform the space below your elevated deck into usable outdoor living</p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img33.jpeg"
              alt="Premium under-deck ceiling installation by Loudoun Decks on a multi-level Northern Virginia deck"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>
          <h2 style={S.h2}>Standard vs. Premium Under-Deck Systems</h2>
          <p style={S.p}>If your deck is elevated (second-story or walkout basement), the space underneath is often wasted dark, damp, and dripping during rain. An under-deck ceiling system solves all three problems: it creates a <strong>dry, finished ceiling</strong> that turns dead space into a functional outdoor room.</p>
          <p style={S.p}>On a typical Northern Virginia two-story home, this means gaining <strong>200–400+ sqft of covered outdoor space at a fraction of the cost</strong> of building a separate covered structure.</p>

          <h2 style={S.h2}>5 Under-Deck Ceiling Options</h2>

          <div style={{ marginBottom: '2rem' }}>
            {[
              { num: '1', title: 'Trex RainEscape (Drainage Only)', cost: '$3,000–$5,000', desc: 'A trough-and-tape system installed above the joists, between the deck boards and the framing. Channels water to gutters and downspouts. Invisible from below you see the bare joists. Best for: homeowners who want dry space below without finishing the ceiling.', pros: 'Affordable, hidden, compatible with any deck board', cons: 'No finished look joists still visible below' },
              { num: '2', title: 'Vinyl Ceiling Panels (Zip-UP, Under Deck Oasis)', cost: '$5,000–$10,000', desc: 'Interlocking vinyl panels that snap between joists. Serve as both ceiling and drainage water runs through channels to the perimeter. Creates a clean, white ceiling appearance below.', pros: 'Clean finished look, drainage + ceiling in one, DIY-friendly', cons: 'Limited colors (mostly white), can yellow over time' },
              { num: '3', title: 'Aluminum Ceiling System', cost: '$8,000–$15,000', desc: 'Premium aluminum panels in multiple colors and profiles. The best-looking option resembles a finished interior ceiling. Integrated drainage, recessed lighting compatible, and lasts indefinitely.', pros: 'Best appearance, lighting integration, no yellowing, lifetime durability', cons: 'Higher cost, professional install required' },
              { num: '4', title: 'Tongue-and-Groove Wood Ceiling', cost: '$6,000–$12,000', desc: 'Cedar or pine boards installed across the joist bottoms with a waterproof membrane above. Beautiful natural look but requires separate drainage system (like RainEscape above).', pros: 'Warm natural aesthetic, paintable/stainable', cons: 'Needs separate drainage, wood maintenance over time' },
              { num: '5', title: 'Corrugated Metal Ceiling', cost: '$4,000–$8,000', desc: 'Galvanized or painted metal panels mounted to joists at a slight angle for drainage. Industrial/modern aesthetic. Simple, effective, and extremely durable.', pros: 'Durable, unique look, good drainage, affordable', cons: 'Louder in rain, limited aesthetic appeal' },
            ].map((opt) => (
              <div key={opt.num} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{opt.num}. {opt.title}</h3>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.95rem' }}>{opt.cost}</span>
                </div>
                <p style={{ lineHeight: 1.7, marginBottom: '0.5rem' }}>{opt.desc}</p>
                <p style={{ fontSize: '0.9rem' }}><strong style={{ color: '#2e7d32' }}>Pros:</strong> {opt.pros}</p>
                <p style={{ fontSize: '0.9rem' }}><strong style={{ color: '#c62828' }}>Cons:</strong> {opt.cons}</p>
              </div>
            ))}
          </div>

          <h2 style={S.h2}>What to Do with the Dry Space</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Patio seating area:</strong> Add pavers or a concrete pad below, plus outdoor furniture instant covered patio</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Outdoor kitchen/bar:</strong> The covered ceiling protects grills and appliances from rain</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Hot tub placement:</strong> Covered overhead, private from above ideal hot tub location</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Storage:</strong> Bikes, tools, outdoor toys keep them dry and accessible</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Dog run:</strong> Covered, contained, easy-clean space for pets</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Play area:</strong> Covered play zone for kids usable in light rain</li>
          </ul>

          <h2 style={S.h2}>Add Lighting Below</h2>
          <p style={S.p}>Under-deck spaces tend to be dark. With an aluminum or wood ceiling, you can add recessed LED lights ($1,000–$2,500 for a typical area) that transform the space into an inviting evening room. Vinyl panels can accommodate surface-mount fixtures. Even the basic RainEscape system works with string lights hung from joists.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "How much does an under-deck ceiling cost?", a: "Basic drainage (RainEscape): $3k-$5k. Vinyl panels: $5k-$10k. Premium aluminum: $8k-$15k. For a typical 300 sqft under-deck area." },
            { q: "Best under-deck drainage system?", a: "Trex RainEscape (hidden, affordable) or Zip-UP (ceiling + drainage in one). Both keep the space 100% dry." },
            { q: "Can I finish the space under my deck?", a: "Yes drainage/ceiling system creates dry usable space. Common uses: patio seating, outdoor kitchen, hot tub, storage." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/services/under-deck-patios', 'Under-Deck Patio Services'],
              ['/deck-lighting-ideas-northern-virginia', 'Deck Lighting Ideas'],
              ['/composite-deck-cost-northern-virginia', 'Deck Cost Guide'],
              ['/outdoor-kitchen-builder-northern-virginia', 'Outdoor Kitchen Builder'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Double Your Outdoor Space" buttonText="Get Free Estimate" link="/contact" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <RelatedGuides currentPath="/under-deck-ceiling-ideas" />

      <ContactHome />
    </>
  );
}
