import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/deck-design-ideas-2026',
  title: '15 Stunning Deck Design Ideas for 2026 | Northern Virginia Trends',
  description: 'Explore the top deck design trends for 2026 in Northern Virginia. From multi-level composite layouts to luxury outdoor kitchens. See real project photos and budget ranges.',
});

const designs = [
  { title: 'Multi-Level Step-Down', desc: 'Two or three levels following your yard\'s natural slope. Upper dining near the kitchen, lower lounge closer to the yard. Perfect for NoVA\'s hilly terrain.', range: '$35k–$80k', link: '/multi-level-deck-builder-northern-virginia', tags: ['Trending', 'Best for slopes'], image: '/images/img01.jpeg' },
  { title: 'Deck + Screened Porch Combo', desc: 'Open composite deck for grilling connected to a screened section for bug-free dining. Our #1 most-requested design. Extends usable season to 9-10 months.', range: '$45k–$75k', link: '/screened-porch-cost-northern-virginia', tags: ['Most Popular'], image: '/images/img02.jpeg' },
  { title: 'Integrated Outdoor Kitchen', desc: 'Built-in grill island, bar seating, and prep counter integrated directly into the deck design. Stone or stucco island on reinforced deck framing.', range: '$55k–$100k+', link: '/outdoor-kitchen-builder-northern-virginia', tags: ['Premium', 'Entertaining'], image: '/images/img03.jpeg' },
  { title: 'Low-Profile Ground-Level', desc: 'Floating deck just inches above grade. No railings needed. Clean, modern look that blends with the landscape. Great for flat yards and pool surrounds.', range: '$12k–$25k', tags: ['Budget-friendly', 'Modern'], image: '/images/img04.jpeg' },
  { title: 'Wraparound Deck', desc: 'Continuous deck wrapping two or more sides of the house. Multiple access points from different rooms. Creates a resort-like perimeter around your home.', range: '$50k–$90k+', tags: ['Estate homes'], image: '/images/img05.jpeg' },
  { title: 'Cable Railing View Deck', desc: 'Elevated deck with cable railings for maximum view transparency. Perfect for hilltop lots and homes overlooking trees, water, or mountains.', range: '$35k–$65k', link: '/cable-railing-for-decks-northern-virginia', tags: ['Modern', 'Best for views'], image: '/images/img06.jpeg' },
  { title: 'Mixed Material: Deck + Stone Patio', desc: 'Raised composite deck connected by stairs to a ground-level stone or paver patio with fire pit. Two distinct zones at different levels.', range: '$40k–$70k', link: '/deck-vs-patio-which-is-right', tags: ['Popular combo'], image: '/images/img07.jpeg' },
  { title: 'Pergola-Covered Deck', desc: 'Deck with an attached or freestanding pergola providing partial shade. Optional: louvered roof panels for adjustable coverage, or climbing vines for natural shade.', range: '$30k–$55k', link: '/services/gazebo-pergola', tags: ['Shade solution'], image: '/images/img08.jpeg' },
  { title: 'Under-Deck Living Space', desc: 'Second-story deck with a finished ceiling underneath, creating a covered patio on the lower level. Under-deck drainage keeps it completely dry.', range: '$45k–$80k', link: '/under-deck-ceiling-ideas', tags: ['Doubles space'], image: '/images/img09.jpeg' },
  { title: 'Deck with Built-In Seating', desc: 'Integrated benches along the perimeter or as a focal centerpiece. Saves space vs freestanding furniture. Can include storage underneath.', range: '$20k–$40k', tags: ['Space-saving'], image: '/images/img10.jpeg' },
  { title: 'Boardwalk-Style Deck', desc: 'Long, narrow deck extending into the yard like a boardwalk. Connects the house to a detached feature (fire pit, garden, shed). Creates visual drama.', range: '$15k–$30k', tags: ['Unique'], image: '/images/img11.jpeg' },
  { title: 'Hot Tub Deck', desc: 'Reinforced deck section designed to support hot tub weight (3,000-5,000 lbs filled). Privacy screens, step-up platform, and dedicated electrical.', range: '$25k–$50k', tags: ['Relaxation'], image: '/images/img12.jpeg' },
  { title: 'Smart Deck (Automated Lighting + Audio)', desc: 'WiFi-controlled LED lighting, built-in Bluetooth speakers, and automated screen systems. The tech-forward outdoor living space.', range: '$30k–$55k', link: '/deck-lighting-ideas-northern-virginia', tags: ['Tech', '2026 Trend'], image: '/images/img14.jpeg' },
  { title: 'EZE-Breeze 3-Season Room', desc: 'Screened porch with EZE-Breeze vinyl panels that slide open in summer and close for wind/rain protection. Extends use to March-November.', range: '$35k–$65k', link: '/deck-enclosure-ideas-northern-virginia', tags: ['3-Season'], image: '/images/img15.jpeg' },
  { title: 'Fire Feature Deck', desc: 'Deck designed around a fire element: gas fire pit built into a stone-topped table, or a fire bowl on a non-combustible pad.', range: '$25k–$45k', link: '/services/fire-pits', tags: ['Evening living'], image: '/images/img16.jpeg' },
];

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What are the most popular deck designs in 2026?", acceptedAnswer: { "@type": "Answer", text: "Multi-level decks, deck + screened porch combos, integrated outdoor kitchens, cable railings, hidden LED lighting, mixed materials (composite deck + stone patio), and low-profile ground-level decks are the top trends in Northern Virginia for 2026." } },
    { "@type": "Question", name: "What is the most popular deck shape?", acceptedAnswer: { "@type": "Answer", text: "Rectangular and L-shaped decks are most popular in Northern Virginia. Rectangular is most cost-effective. L-shaped creates natural zones (dining + lounge). Multi-level step-down designs are trending for sloped lots." } },
    { "@type": "Question", name: "What deck color is most popular in 2026?", acceptedAnswer: { "@type": "Answer", text: "Medium-tone warm browns and grays dominate in 2026. Trex Transcend in Spiced Rum and Island Mist are our most-requested colors. Dark colors (Lava Rock, Dark Hickory) are popular for modern homes but get hotter in sun." } },
  ],
};

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "15 Stunning Deck Design Ideas for 2026",
  "itemListElement": designs.map((d, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "item": {
      "@type": "CreativeWork",
      "name": d.title,
      "description": d.desc,
      "image": `https://ldndecks.com${d.image}`
    }
  }))
};

export default function DeckDesignIdeasPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={gallerySchema} />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>15 Deck Design Ideas for Northern Virginia</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>2026 trends and inspiration from real projects find the design that fits your home</p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img13.jpeg"
              alt="Modern 2026 deck design ideas for Northern Virginia homes"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            {designs.map((d, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', border: '1px solid #eee' }}>
                <div style={{ position: 'relative', height: '200px' }}>
                  <Image src={d.image} alt={d.title} fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: 10, left: 10, background: 'var(--color-primary)', color: '#fff', padding: '2px 8px', borderRadius: 4, fontSize: '0.8rem', fontWeight: 700 }}>#{i + 1}</div>
                </div>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{d.title}</h2>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    {d.tags.map((tag) => (
                      <span key={tag} style={{ background: '#f0f0f0', color: '#666', padding: '0.15rem 0.5rem', borderRadius: 4, fontSize: '0.7rem', fontWeight: 600 }}>{tag}</span>
                    ))}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>{d.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#333' }}>{d.range}</span>
                    {d.link && (
                      <Link href={d.link} style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none' }}>
                        View Details →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>2026 Color Trends</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { color: '#8B7355', name: 'Spiced Rum', brand: 'Trex Transcend', note: '#1 most requested' },
              { color: '#9CA3AF', name: 'Island Mist', brand: 'Trex Transcend', note: 'Cool gray tone' },
              { color: '#4A3728', name: 'Lava Rock', brand: 'Trex Transcend', note: 'Bold dark modern' },
              { color: '#5C4033', name: 'Dark Hickory', brand: 'TimberTech AZEK', note: 'Rich warm brown' },
              { color: '#D4C5A9', name: 'Coastline', brand: 'TimberTech AZEK', note: 'Light beach tone' },
              { color: '#6B5B4A', name: 'Pecan', brand: 'Trex Enhance', note: 'Best value warm' },
            ].map((c) => (
              <div key={c.name} style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid #e5e5e5' }}>
                <div style={{ background: c.color, height: 60 }} />
                <div style={{ padding: '0.75rem' }}>
                  <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>{c.name}</p>
                  <p style={{ fontSize: '0.8rem', color: '#888' }}>{c.brand}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600 }}>{c.note}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>FAQ</h2>
          {[
            { q: "Most popular deck designs in 2026?", a: "Multi-level, deck + screened porch combo, integrated outdoor kitchens, cable railings, LED lighting, mixed material (deck + stone patio)." },
            { q: "Most popular deck shape?", a: "Rectangular (cost-effective) and L-shaped (natural zones). Multi-level for sloped lots." },
            { q: "Most popular deck color in 2026?", a: "Medium warm browns/grays. Trex Spiced Rum and Island Mist are #1 and #2 most requested." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '2.5rem 0 1rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/deck-design-ideas-northern-virginia-2026', 'Deck Design Ideas for Northern Virginia 2026'],
              ['/northern-virginia-deck-building-guide', 'Complete Deck Building Guide'],
              ['/how-much-does-a-deck-cost-northern-virginia', 'Deck Cost Guide'],
              ['/trex-vs-timbertech-vs-azek', 'Trex vs TimberTech vs AZEK'],
              ['/showcase', 'Our Project Gallery'],
              ['/what-size-deck-should-i-build', 'Deck Size Guide'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Bring Your Design to Life" buttonText="Get Free Design Consultation" link="/contact" />
      <ContactHome />
    </>
  );
}
