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
import { BUSINESS } from '@/lib/business';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/wood-decks',
  title: 'Expert Wood Deck Builder NoVA | Cedar & Hardwood Decks',
  description: 'The premier wood deck builder in Northern Virginia. Custom pressure-treated, cedar, and Ipe decks built to last. Serving Loudoun, Fairfax & Prince William counties.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a wood deck cost in Northern Virginia?", acceptedAnswer: { "@type": "Answer", text: "Wood decks in Northern Virginia cost $18-$45 per square foot installed. Pressure-treated wood: $18-$35/sqft. Cedar: $25-$45/sqft. Redwood: $30-$50/sqft. Exotic hardwoods (Ipe, Cumaru, Tigerwood): $35-$65/sqft. A typical 300-500 sqft wood deck: $5,400-$22,500." } },
    { "@type": "Question", name: "How long does a wood deck last in Virginia?", acceptedAnswer: { "@type": "Answer", text: "Lifespan varies by wood type and maintenance: pressure-treated 10-15 years (5-8 without maintenance), cedar 15-20 years, redwood 20-25 years, ipe and other hardwoods 25-40+ years. Virginia's freeze-thaw cycles and humidity require annual sealing/staining for all wood types." } },
    { "@type": "Question", name: "Wood deck or composite — which is better in Virginia?", acceptedAnswer: { "@type": "Answer", text: "Composite is better long-term in Virginia's humid, freeze-thaw climate. Wood costs less upfront ($18-$45/sqft vs $30-$75 for composite) but requires $300-$800/year in maintenance and lasts half as long. Over 15 years, composite is actually cheaper. Wood makes sense only for tight budgets, exotic hardwood aesthetics, or temporary structures." } },
    { "@type": "Question", name: "What is the best wood for outdoor decks?", acceptedAnswer: { "@type": "Answer", text: "For Virginia climate: cedar (best balance of cost and durability), pressure-treated southern yellow pine (best budget), or ipe (best premium — naturally rot-resistant, 40+ year lifespan). Avoid untreated softwoods. Always seal/stain annually." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, h3: { fontSize: '1.2rem', fontWeight: 600, margin: '1.5rem 0 0.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 }, th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }, td: { padding: '0.75rem', borderBottom: '1px solid #eee' } };

export default function WoodDecksPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema url="https://ldndecks.com/wood-decks" name="Expert Wood Deck Builder NoVA | Cedar &amp; Hardwood Decks" description="The premier wood deck builder in Northern Virginia. Custom pressure-treated, cedar, and Ipe decks built to last. Serving Loudoun, Fairfax &amp; Prince William counties." speakable />
      <ServiceSchema
        name="Wood Deck Construction"
        description="Custom wood deck building in Northern Virginia. Cedar, IPE, and pressure-treated lumber options with expert craftsmanship."
        url="https://ldndecks.com/wood-decks"
        category="Deck Construction"
        lowPrice="12000"
        highPrice="50000"
        relatedServices={['https://ldndecks.com/composite-decks', 'https://ldndecks.com/services/new-decks']}
      />
      {/* Hero with full-width background image */}
      <section style={{ position: 'relative', minHeight: 520, overflow: 'hidden' }}>
        <Image
          src="/images/wood-deck-hero.jpg"
          alt="Custom stained wood deck with modern pergola in Northern Virginia backyard"
          fill
          priority
              quality={70}
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.45) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 1, color: '#fff', padding: '5rem 0' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
            <h1 style={{ fontSize: '2.75rem', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.15 }}>Expert Wood Deck Builder in Northern Virginia</h1>
            <p style={{ color: '#eee', fontSize: '1.15rem', maxWidth: 640, lineHeight: 1.5 }}>Pressure-treated, cedar, redwood &amp; exotic hardwood decks — natural beauty meets honest craftsmanship for Loudoun, Fairfax &amp; Prince William counties</p>
            <div style={{ marginTop: '1.75rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.85rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
              <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.85rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Estimate</Link>
            </div>
            <p style={{ marginTop: '1.25rem', fontSize: '0.9rem', color: '#ddd' }}>★★★★★ 5.0 on Google · {BUSINESS.aggregateRating.reviewCount} reviews · Licensed &amp; Insured · 5-Year Warranty</p>
          </div>
        </div>
      </section>

      {/* Photo gallery — 6-image grid */}
      <section style={{ padding: '3rem 0', background: '#f9f9f9' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.6rem', fontWeight: 700, marginBottom: '0.5rem' }}>Wood Deck Projects &amp; Inspiration</h2>
          <p style={{ textAlign: 'center', color: '#555', marginBottom: '2rem', maxWidth: 700, margin: '0 auto 2rem' }}>From classic pressure-treated builds to modern wood deck designs — see what&apos;s possible for your Northern Virginia home</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {[
              { src: '/images/wood-deck-classic.jpg', title: 'Classic Elevated Wood Deck', desc: 'Traditional second-story deck with stairs and full railings — the most common wood deck configuration for Northern Virginia homes.' },
              { src: '/images/wood-deck-ground.jpg', title: 'Ground-Level Wood Deck', desc: 'Low-profile wood platform with integrated bench seating — perfect for flat lots, no railings required at this height.' },
              { src: '/images/wood-deck-with-railings.jpg', title: 'Wood Deck with Wood Railings', desc: 'Pressure-treated wood deck with matching wood railing system — cohesive natural look that ages beautifully.' },
              { src: '/images/wood-deck-living.jpg', title: 'Wood Deck Outdoor Living', desc: 'Wood deck transformed into a full outdoor living room with Adirondack chairs and view of the surroundings.' },
              { src: '/images/wood-deck-pt-pine.jpg', title: 'Pressure-Treated Pine Detail', desc: 'Close-up of fresh PT pine deck boards — the most affordable wood deck option starting at $18/sqft.' },
              { src: '/images/wood-deck-stained-floor.jpg', title: 'Stained Wood Deck Surface', desc: 'Cedar or stained pine deck with rich brown finish — natural wood beauty with weather protection.' },
            ].map((item) => (
              <figure key={item.src} style={{ margin: 0, borderRadius: 10, overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', background: '#fff', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', aspectRatio: '3/2', background: '#eee' }}>
                  <Image
                    src={item.src}
                    alt={item.title + ' — Loudoun Decks Northern Virginia'}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <figcaption style={{ padding: '1.1rem 1.25rem' }}>
                  <h3 style={{ fontWeight: 600, marginBottom: '0.35rem', fontSize: '1rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.5 }}>{item.desc}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '2.25rem' }}>
            <Link href="/showcase" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>View our complete project gallery →</Link>
          </p>
        </div>
      </section>

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p>Wood decks in Northern Virginia cost <strong>$18&ndash;$45/sqft installed</strong>. Pressure-treated $18&ndash;$35, cedar $25&ndash;$45, exotic hardwoods $35&ndash;$65. Last 10&ndash;40 years depending on species. Require annual sealing in Virginia&apos;s freeze-thaw climate. Lower upfront cost than composite, higher long-term cost due to maintenance.</p>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <h2 style={S.h2}>Wood Deck Materials We Build With</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  {['Material', 'Cost/sqft', 'Lifespan', 'Maintenance', 'Best For'].map(h => <th key={h} style={S.th}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Pressure-Treated Pine', '$18–$35', '10–15 years', 'Stain/seal yearly', 'Budget builds, basic decks'],
                  ['Western Red Cedar', '$25–$45', '15–20 years', 'Seal every 2 yrs', 'Natural look, balanced cost'],
                  ['California Redwood', '$30–$50', '20–25 years', 'Seal every 2 yrs', 'Premium aesthetic, west coast feel'],
                  ['Ipe (Brazilian Walnut)', '$45–$65', '40+ years', 'Annual oil', 'Ultra-premium, naturally rot-resistant'],
                  ['Cumaru (Brazilian Teak)', '$35–$55', '30–40 years', 'Annual oil', 'Premium hardwood alternative'],
                  ['Tigerwood', '$35–$55', '25–35 years', 'Annual oil', 'Striking grain pattern'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>Wood Deck Options Explained</h2>

          <h3 style={S.h3}>Pressure-Treated Wood (Most Common)</h3>
          <p style={S.p}>The default choice for budget-conscious homeowners. Southern yellow pine treated with copper-based preservatives to resist rot, decay, and insect damage. Most affordable option at $18&ndash;$35/sqft installed. Lasts 10&ndash;15 years with annual staining; only 5&ndash;8 years without. Looks decent when new but turns gray within 12 months without stain.</p>

          <h3 style={S.h3}>Western Red Cedar</h3>
          <p style={S.p}>Natural beauty without chemical treatment. Cedar has natural rot resistance from oils in the wood. Stays cooler underfoot than PT (lighter color, lower density). Costs $25&ndash;$45/sqft installed. Lasts 15&ndash;20 years with bi-annual sealing. Develops a silver patina over time if left unstained — many homeowners prefer this aged look.</p>

          <h3 style={S.h3}>California Redwood</h3>
          <p style={S.p}>Premium softwood with deep red color and natural rot resistance. More dimensionally stable than cedar (less warping/cupping). Costs $30&ndash;$50/sqft installed. Lasts 20&ndash;25 years with proper care. Less common in Virginia due to East Coast availability and price.</p>

          <h3 style={S.h3}>Ipe (Brazilian Walnut) &mdash; The Premium Choice</h3>
          <p style={S.p}>One of the densest, most durable woods available — naturally fire-resistant, rot-resistant, and insect-resistant without any treatment. Costs $45&ndash;$65/sqft installed. Lasts 40+ years with minimal maintenance (annual oil application). Beautiful dark brown color that ages to gray if untreated. Ipe is heavy and hard to work with — installation requires specialty tools and skilled labor.</p>

          <h3 style={S.h3}>Cumaru &amp; Tigerwood (Mid-Premium Hardwoods)</h3>
          <p style={S.p}>Brazilian hardwoods similar to Ipe but more affordable and easier to install. Cumaru ($35&ndash;$55/sqft) is sometimes called &quot;Brazilian Teak&quot; — golden-brown with natural durability. Tigerwood ($35&ndash;$55/sqft) features striking dark grain stripes. Both last 25&ndash;40 years with annual oil.</p>

          <div style={{ background: 'var(--color-primary)', color: '#fff', borderRadius: 8, padding: '2rem', marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Get Your Wood Deck Estimate</h2>
            <p style={{ marginBottom: '1.5rem', opacity: 0.95 }}>Free on-site consultation &middot; Honest pricing &middot; All wood species available</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <CallLink style={{ background: '#fff', color: 'var(--color-primary)', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
              <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Free Estimate</Link>
            </div>
          </div>

          <h2 style={S.h2}>Wood vs Composite — The Honest Comparison</h2>
          <p style={S.p}>We build with both wood and composite. Here&apos;s the truth about when each makes sense:</p>

          <h3 style={S.h3}>Choose WOOD when:</h3>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Budget under $15,000 (PT wood is the only option in this range)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>You love the look and feel of natural wood — especially exotic hardwoods like Ipe</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>You enjoy the maintenance ritual (annual sealing/staining)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Selling within 5 years (PT wood is fine for short-term)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Premium build with Ipe/Cumaru that will outlast composite</li>
          </ul>

          <h3 style={S.h3}>Choose COMPOSITE when:</h3>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>You want zero maintenance — no staining, sealing, or sanding ever</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>You&apos;re staying in your home 10+ years (composite recoups its premium)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>You want the longest possible warranty (25&ndash;50 years)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Maximum resale ROI (composite returns 65&ndash;80% vs 50&ndash;65% for wood)</li>
          </ul>
          <p style={S.p}><Link href="/composite-deck-vs-wood-deck-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Read our full Composite vs Wood comparison &rarr;</Link></p>

          <h2 style={S.h2}>Wood Deck Maintenance in Virginia</h2>
          <p style={S.p}>Virginia&apos;s climate is hard on wood. Without proper maintenance, even pressure-treated wood deteriorates fast:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Freeze-thaw cycles:</strong> 50&ndash;80 cycles each winter — water enters wood grain, freezes, expands, splits boards</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Humidity (70&ndash;90% in summer):</strong> Promotes mold, mildew, and rot — sealing creates moisture barrier</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>UV exposure (200+ sunny days):</strong> Bleaches color, breaks down lignin fibers — UV-resistant stain helps</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Carpenter bees &amp; termites:</strong> Common in Virginia — annual inspection critical</li>
          </ul>
          <p style={S.p}><strong>Annual maintenance schedule:</strong> Spring power wash + brightener + stain ($600&ndash;$2,000 by deck size). Fall: clear leaves, inspect for damage. Plan to spend $300&ndash;$800/year on a 300 sqft wood deck.</p>
          <p style={S.p}><Link href="/deck-staining-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>See our deck staining services &rarr;</Link></p>

          <h2 style={S.h2}>Real Wood Deck Projects</h2>
          {[
            { price: '$8,500', desc: '300 sqft Pressure-Treated Deck, Manassas', detail: 'Budget-friendly PT pine deck for a young family. Standard aluminum railings, 4 stair lights. 1.5-week build. Client got a quality wood deck for under $9k.' },
            { price: '$22,000', desc: '380 sqft Cedar Deck, Vienna', detail: 'Western Red Cedar deck with cedar railings and posts. Custom built-in bench. Stained natural cedar tone. 2.5-week build. Beautiful warm aesthetic that matches client\'s craftsman-style home.' },
            { price: '$48,000', desc: '500 sqft Ipe Deck, McLean', detail: 'Premium Brazilian Walnut deck with hidden fasteners and stainless hardware. Cable railings for views. 4-week build. 40+ year lifespan with annual oil — will outlast composite.' },
          ].map((p, i) => (
            <div key={i} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{p.price} — {p.desc}</h3>
              <p style={{ lineHeight: 1.7 }}>{p.detail}</p>
            </div>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "Cost of a wood deck in Northern Virginia?", a: "$18-$45/sqft installed. PT pine: $18-$35. Cedar: $25-$45. Ipe: $45-$65. Typical 300-500 sqft: $5,400-$22,500." },
            { q: "How long does a wood deck last?", a: "PT pine: 10-15 years. Cedar: 15-20. Redwood: 20-25. Ipe: 40+. Annual sealing required for all in Virginia climate." },
            { q: "Wood or composite?", a: "Composite is better long-term in Virginia (durability + zero maintenance). Wood makes sense for tight budgets, exotic aesthetic, or short-term ownership." },
            { q: "Best wood for outdoor decks?", a: "Cedar (balance of cost and durability), PT pine (budget), or Ipe (premium, 40+ year life)." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/composite-deck-vs-wood-deck-virginia', 'Composite vs Wood Deck — Full Comparison'],
              ['/composite-deck-cost-northern-virginia', 'Deck Cost Guide'],
              ['/deck-staining-northern-virginia', 'Deck Staining Services'],
              ['/composite-decks', 'Composite Decks'],
              ['/trex-decks', 'Trex Decks'],
              ['/services/new-decks', 'New Deck Services'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Build Your Custom Wood Deck" buttonText="Get Free Estimate" link="/contact" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <ContactHome />
    </>
  );
}
