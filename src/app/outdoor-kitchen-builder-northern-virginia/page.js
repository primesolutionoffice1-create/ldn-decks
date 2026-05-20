import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/outdoor-kitchen-builder-northern-virginia',
  title: 'Outdoor Kitchen Builder in Northern Virginia | Design & Build',
  description: 'Custom outdoor kitchens in Northern Virginia from $15,000-$80,000+. Grill islands, pizza ovens, bars, full kitchens. Permits handled. Free estimate.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does an outdoor kitchen cost in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "Outdoor kitchens in Northern Virginia range from $15,000 for a basic grill island to $80,000+ for a full kitchen with built-in grill, refrigerator, sink, pizza oven, and bar seating. Most of our projects fall between $25,000 and $55,000." } },
    { "@type": "Question", name: "Do I need a permit for an outdoor kitchen in Virginia?", acceptedAnswer: { "@type": "Answer", text: "It depends on the scope. A freestanding grill island on an existing patio may not need a permit. However, any structure with gas lines, electrical, plumbing, or a roof requires permits in Loudoun, Fairfax, and Prince William counties. We determine permit requirements and handle submissions." } },
    { "@type": "Question", name: "Can you build an outdoor kitchen on a deck?", acceptedAnswer: { "@type": "Answer", text: "Yes, with proper planning. The deck framing must support the added weight (stone countertops and grills are heavy). Fire-rated materials are required around grills. We often design a combined deck + outdoor kitchen as one project for structural efficiency." } },
    { "@type": "Question", name: "What materials withstand Virginia weather?", acceptedAnswer: { "@type": "Answer", text: "We use stainless steel (304 grade) for appliances, natural stone or porcelain tile for countertops, and CMU block or steel framing for the island structure. All materials are rated for freeze-thaw cycles and UV exposure." } },
    { "@type": "Question", name: "How long does it take to build an outdoor kitchen?", acceptedAnswer: { "@type": "Answer", text: "3-6 weeks depending on complexity. A basic grill island takes 2-3 weeks. A full kitchen with gas, electrical, and plumbing takes 4-6 weeks after permits are approved." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, h3: { fontSize: '1.2rem', fontWeight: 600, margin: '1.5rem 0 0.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function OutdoorKitchenPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Outdoor Kitchen Builder in Northern Virginia</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Custom design, permits &amp; build grill islands to full kitchens</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Estimate</Link>
          </div>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img55.jpeg"
              alt="Custom outdoor kitchen with built-in grill and stone island in McLean"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>

          <h2 style={S.h2}>What We Build</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { title: 'Grill Islands', desc: 'Built-in gas grills with stone or stucco surround, granite countertops, storage drawers', price: '$15k–$25k' },
              { title: 'Kitchen + Bar', desc: 'L-shaped or U-shaped island with grill, sink, refrigerator, and bar-height seating', price: '$30k–$50k' },
              { title: 'Full Outdoor Kitchen', desc: 'Complete kitchen: grill, side burner, pizza oven, sink, fridge, ice maker, trash pull-out, lighting', price: '$50k–$80k+' },
              { title: 'Pizza Ovens', desc: 'Wood-fired or gas pizza ovens standalone or integrated into island', price: '$5k–$15k' },
            ].map((item) => (
              <div key={item.title} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.25rem' }}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>{item.price}</p>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={S.h2}>Outdoor Kitchen Cost in Northern Virginia</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}>{['Configuration', 'What\'s Included', 'Price Range'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ['Basic Grill Island', 'Built-in grill, stone surround, granite top, storage', '$15,000–$25,000'],
                  ['Kitchen + Bar', 'Grill, sink, fridge, bar seating, lighting, gas line', '$30,000–$50,000'],
                  ['Full Kitchen', 'Grill, burner, pizza oven, sink, fridge, ice maker, lighting, electrical', '$50,000–$80,000+'],
                  ['Add to Existing Deck', 'Grill island on reinforced deck section, fire-rated materials', '$18,000–$35,000'],
                  ['Combo: Deck + Kitchen', 'New deck with integrated outdoor kitchen designed as one', '$45,000–$90,000+'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>Materials That Survive Virginia Weather</h2>
          <p style={S.p}><strong>Countertops:</strong> Granite and porcelain tile handle freeze-thaw without cracking. We avoid marble (stains) and concrete (cracks in cold) outdoors.</p>
          <p style={S.p}><strong>Island structure:</strong> CMU (concrete block) or galvanized steel frame not wood framing, which rots near water and heat sources.</p>
          <p style={S.p}><strong>Appliances:</strong> 304-grade stainless steel rated for outdoor use. We work with Blaze, Bull, Lynx, and DCS brands. Avoid indoor appliances outdoors they&apos;ll rust within one Virginia winter.</p>
          <p style={S.p}><strong>Finishes:</strong> Natural stone veneer, stucco, or porcelain tile. All rated for exterior use and freeze-thaw rated for Virginia&apos;s climate.</p>

          <h2 style={S.h2}>Permits and Utilities</h2>
          <p style={S.p}><strong>Gas line:</strong> Any new gas line requires a plumbing permit and inspection. We coordinate with licensed plumbers.</p>
          <p style={S.p}><strong>Electrical:</strong> Outlets, lighting, and appliance circuits require electrical permits. GFCI protection required for all outdoor outlets.</p>
          <p style={S.p}><strong>Water/drain:</strong> Outdoor sinks require water supply and drain connections plumbing permit required.</p>
          <p style={S.p}><strong>Structure:</strong> Covered outdoor kitchens (with roof/pergola) require building permits. Freestanding islands on existing patios may not. We determine what&apos;s needed and handle all submissions.</p>

          <h2 style={S.h2}>Combine with a Deck Package Pricing</h2>
          <p style={S.p}>Building your outdoor kitchen as part of a new deck project is 15–25% cheaper than adding one later. We design the deck framing to support the kitchen weight from the start, run utilities during construction (before decking goes on), and eliminate the cost of a second mobilization.</p>
          <p style={S.p}><strong>Popular combo:</strong> 400 sqft Trex Transcend deck + built-in grill island with granite counter, sink, and bar seating = $55,000–$70,000 (vs $70,000–$85,000 if built separately).</p>

          <h2 style={S.h2}>Real Projects</h2>
          {[
            { price: '$22,000', desc: 'Grill Island, Ashburn', detail: 'L-shaped stone island with Bull 30" grill, granite counter, double storage doors, and LED under-counter lighting on existing paver patio.' },
            { price: '$48,000', desc: 'Kitchen + Bar, Leesburg', detail: 'U-shaped island: Blaze 32" grill, side burner, outdoor-rated fridge, farm sink, bar with 4 stools. Natural stone veneer, bluestone counter. New gas and water lines.' },
            { price: '$72,000', desc: 'Full Kitchen + Deck, Centreville', detail: 'Built as part of a 450 sqft Trex Transcend deck project. DCS grill, pizza oven, sink, fridge, ice maker, trash pull-out, can lighting under pergola cover. Total deck + kitchen project.' },
          ].map((p, i) => (
            <div key={i} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{p.price} {p.desc}</h3>
              <p style={{ lineHeight: 1.7 }}>{p.detail}</p>
            </div>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
          {[
            { q: "How much does an outdoor kitchen cost in Northern Virginia?", a: "$15,000-$80,000+. Basic grill island: $15k-$25k. Full kitchen: $50k-$80k+. Most projects: $25k-$55k." },
            { q: "Do I need a permit?", a: "Gas, electrical, or plumbing work requires permits. Freestanding grill islands on existing patios may not. We determine and handle everything." },
            { q: "Can you build on an existing deck?", a: "Yes if the framing supports the weight. Fire-rated materials required around grills. We inspect first." },
            { q: "What materials survive Virginia winters?", a: "304 stainless steel appliances, granite/porcelain counters, CMU or steel frame. No wood framing near heat/water." },
            { q: "How long does it take?", a: "2-3 weeks for a grill island, 4-6 weeks for a full kitchen after permits." },
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
              ['/screened-porch-cost-northern-virginia', 'Screened Porch Cost'],
              ['/services/fire-pits', 'Custom Fire Pits'],
              ['/deck-vs-patio-which-is-right', 'Deck vs Patio'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>

      <SimpleCTA title="Design Your Outdoor Kitchen" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </>
  );
}
