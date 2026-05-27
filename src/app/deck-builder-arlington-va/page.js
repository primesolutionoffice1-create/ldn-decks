import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import { BUSINESS } from '@/lib/business';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/deck-builder-arlington-va',
  title: '5-Star Deck Builder Arlington VA | Get a Free Quote in 24h',
  description: 'Top-rated deck builder in Arlington, VA. ★ 5.0 Google Rated. Custom composite decks & screened porches in Ballston, Clarendon & Rosslyn. Free 24h estimate.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a deck cost in Arlington, VA?", acceptedAnswer: { "@type": "Answer", text: "Arlington deck projects range from $25,000-$85,000+. Composite decks: $40-$75/sqft installed. North Arlington (Lyon Village, Lyon Park, Cherrydale, Donaldson Run) typically lands $45,000-$75,000 with premium materials. South Arlington (Aurora Hills, Forest Hills, Boulevard Manor) typically lands $28,000-$55,000. Premium materials (AZEK, Trex Transcend) are standard for Arlington's high property values." } },
    { "@type": "Question", name: "Does Arlington have special deck restrictions?", acceptedAnswer: { "@type": "Answer", text: "Yes. Arlington County has its own building department (CPHD) with setback rules often tighter than Fairfax County. The Lyon Park Historic District is a National Historic District with additional design review for visible exterior changes. Lyon Village, Maywood, and Westover also have historic-overlay considerations. We handle all Arlington County permitting and know the historic district requirements." } },
    { "@type": "Question", name: "What's the Arlington County deck permit process?", acceptedAnswer: { "@type": "Answer", text: "Arlington requires a building permit for any deck attached to your house and for any freestanding deck 30 inches or more above grade. Applications go through the Permit Arlington web portal (operated by Arlington County CPHD — Community Planning, Housing & Development). Required: site plan, structural drawings, deck details, and homeowner approval if applicable. Plan review averages 3-5 weeks. Inspections (footing, framing, final) coordinated through Inspection Services 703-228-3800. We file every package as part of the project." } },
    { "@type": "Question", name: "Which Arlington neighborhoods do you serve most?", acceptedAnswer: { "@type": "Answer", text: "Our highest single-family-home volume is in North Arlington — Lyon Park, Lyon Village, Cherrydale, Donaldson Run, Williamsburg, Maywood, Westover, Rock Spring, Country Club Hills, Yorktown, and Waverly Hills. In South Arlington we serve Aurora Hills, Forest Hills, Boulevard Manor, Fairlington, Shirlington, and Douglas Park. Urban-core projects (Ballston, Clarendon, Rosslyn, Pentagon City, Crystal City) are typically rooftop terraces and condo/townhome compact builds." } },
    { "@type": "Question", name: "Can you build in the Lyon Park Historic District?", acceptedAnswer: { "@type": "Answer", text: "Yes. Lyon Park is a National Historic District with 1,165 contributing buildings, mostly 1920s-30s Craftsman bungalows, American Foursquares, Colonial Revivals, Tudor Revivals, and Cape Cods. Decks visible from the public right-of-way need design review for compatibility (materials, color, scale, railing style). We design Lyon Park decks specifically to clear historic review — typically Trex Transcend Spiced Rum or Tiki Torch tones, classic balustrade railings, and proportions matched to the original home." } },
    { "@type": "Question", name: "What materials work best for Arlington homes?", acceptedAnswer: { "@type": "Answer", text: "North Arlington historic neighborhoods (Lyon Park, Lyon Village, Cherrydale): warm-tone composites — Trex Transcend Tiki Torch, Spiced Rum, Havana Gold — with classic balustrade or aluminum-traditional railings. South Arlington modern renovations: cooler tones — Trex Transcend Island Mist, TimberTech AZEK Dark Hickory — with cable or horizontal-aluminum railings. PVC (AZEK) outperforms composite on compact south-facing decks where surface temperature matters." } },
    { "@type": "Question", name: "How long does an Arlington deck project take from contract?", acceptedAnswer: { "@type": "Answer", text: "8-12 weeks total. Arlington permit review averages 3-5 weeks (typically 1 week longer than Fairfax County). Historic district design review adds 2-4 weeks if your home is in Lyon Park, Maywood, or another protected area. Material delivery: 1-3 weeks. Build: 1-3 weeks. North Arlington two-level builds with screened porches: 10-12 weeks. Compact South Arlington single-level: 8-10 weeks." } },
    { "@type": "Question", name: "Do you build screened porches in Arlington?", acceptedAnswer: { "@type": "Answer", text: "Yes — screened porches are one of our most-requested Arlington builds, especially in Lyon Park and Donaldson Run where mature tree canopy makes them year-round usable. Typical 250-350 sqft Arlington screened porch: $48,000-$78,000 including foundation, composite decking, screen system (often EZE-Breeze retractable panels), roof, and electric. We retrofit screen systems onto existing Arlington decks as well." } },
  ],
};

export default function ArlingtonDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <LocalBusinessSchema city="Arlington" url="https://ldndecks.com/deck-builder-arlington-va" />
      <WebPageSchema url="https://ldndecks.com/deck-builder-arlington-va" name="5-Star Deck Builder Arlington VA | Get a Free Quote in 24h" description="Top-rated deck builder in Arlington, VA. ★ 5.0 Google Rated. Custom composite decks &amp; screened porches in Ballston, Clarendon &amp; Rosslyn. Free 24h estimate." speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Custom Deck Builder in Arlington, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Premium composite decks &amp; screened porches for Arlington homeowners</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Estimate</Link>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#aaa' }}>★★★★★ 5.0 on Google · {BUSINESS.aggregateRating.reviewCount} reviews · Licensed &amp; Insured · 2-Year Warranty</p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img13.jpeg"
              alt="Premium custom deck built by LDN Decks in Arlington, Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Arlington Urban Outdoor Living</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Arlington County packs some of the highest property values in Northern Virginia into its 26 square miles. From the Bungalow neighborhoods of Clarendon to the established homes of Donaldson Run and Williamsburg, every outdoor square foot matters. We design decks that make the most of Arlington&apos;s compact but valuable lots.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Urban lot expertise:</strong> Tight setbacks, small yards, close neighbors we design privacy and function into every build</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Arlington County permitting:</strong> Own building department (CPHD) and the Permit Arlington portal we know them well</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Historic-district experience:</strong> Lyon Park, Maywood, Westover, Lyon Village we file design review packages that clear on first submission</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>High-value properties:</strong> Median home value $750K+ means premium materials (AZEK, Trex Transcend) are the standard</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>The two Arlington deck markets</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Arlington is two markets separated by Route 50 and a property-value gradient. Knowing which one your home sits in is the first step to pricing a deck honestly.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>North Arlington</strong> — Lyon Park, Lyon Village, Cherrydale, Donaldson Run, Williamsburg, Maywood, Westover, Rock Spring, Country Club Hills, Yorktown, Waverly Hills. Historic neighborhoods with 1920s-1940s Colonial Revivals, Tudor Revivals, Craftsman bungalows, and American Foursquares. Many homes are inside or adjacent to historic districts. Projects skew toward premium materials, design review compliance, and multi-level builds. Typical deck investment: $45,000-$85,000.</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}><strong>South Arlington</strong> — Aurora Hills, Forest Hills, Boulevard Manor, Fairlington, Shirlington, Douglas Park, Long Branch Creek. Mid-century single-family homes and townhouses on smaller lots. Projects skew toward space-efficient single-level builds, screened porches, and resurfacing existing decks. Typical deck investment: $28,000-$55,000.</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}><strong>The Arlington urban core</strong> — Ballston, Clarendon, Rosslyn, Pentagon City, Crystal City. Almost entirely condos and apartments. Project work is limited to rooftop terraces, balcony rebuilds, and the occasional ground-floor townhome rear-yard.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Arlington neighborhoods we serve</h2>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>Lyon Park (National Historic District)</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Lyon Park is a National Historic District with 1,165 contributing buildings, mostly 1920s-30s Craftsman bungalows, American Foursquares, Colonial Revivals, Tudor Revivals, and Cape Cods. Home values range $300k for compact brick condos to $2M for detached single-family. Decks visible from the public right-of-way go through historic design review for materials, color, scale, and railing style. Our Lyon Park playbook: warm-tone composites (Trex Transcend Spiced Rum, Havana Gold, Tiki Torch), classic balustrade or aluminum-traditional railings, deck proportions matched to the home&apos;s original footprint. Average historic-review turnaround when packaged correctly: 3-4 weeks.</p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>Lyon Village</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Low-density, predominantly single-family homes on lots of less than an acre. Most houses pre-date 1940 and feature Colonial Revivals, Tudor Revivals, and American Foursquares. New construction in Tudor and Victorian style is allowed and increasingly common. Projects here lean toward multi-level decks with screened porches, often integrated with mature landscaping. Lyon Village does not have the same historic-district design review as Lyon Park, but the architectural character drives material choices.</p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>Cherrydale &amp; Westover</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Historic charm with modern appeal. Cherrydale&apos;s tree-lined streets, proximity to Hidden Pond and Oak Grove Park, and Westover&apos;s 1930s-40s housing stock all favor screened porches that take advantage of shaded yards. Many Cherrydale and Westover homes are being renovated with rear additions; deck and porch projects often run concurrent with the addition&apos;s building permit.</p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>Donaldson Run, Williamsburg, Yorktown</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>The wooded ravines of Donaldson Run and the larger lots of the Williamsburg-Yorktown area support some of our most ambitious Arlington builds: two-level decks following the slope, screened porches with retractable EZE-Breeze panels, integrated outdoor kitchens, and full deck-to-paver-patio transitions. Cable railings are popular here for preserving tree-canopy views.</p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>Aurora Hills, Forest Hills, Boulevard Manor (South Arlington)</h3>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>South Arlington&apos;s mid-century neighborhoods feature compact single-family homes with smaller backyards than North Arlington. Projects here favor space-efficient single-level decks (280-450 sqft), composite materials, and screened porches that extend living space. Fairlington and Shirlington townhouses also see compact deck-rebuild work, typically managed through community associations.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Permits &amp; historic review for Arlington</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Arlington County&apos;s permit and inspections process is administered by the <strong>Department of Community Planning, Housing &amp; Development (CPHD)</strong> via the <strong>Permit Arlington</strong> web portal.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>When you need a permit:</strong> Any deck attached to your house, or any freestanding deck 30 inches or more above grade.</li>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>Required documents:</strong> Site plan with setbacks marked, structural drawings, deck details (ledger, framing, footings, railings, stairs), and homeowner authorization.</li>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>Plan review timeline:</strong> 3-5 weeks (1 week longer than Fairfax County on average).</li>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>Inspections:</strong> Footing, framing, and final. Coordinated through Arlington Inspection Services at <strong>703-228-3800</strong>.</li>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>Historic district review:</strong> Lyon Park (National Historic District), Maywood, and Westover require additional design review for visible exterior changes. Adds 2-4 weeks to the timeline.</li>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>Setbacks:</strong> Vary by zoning district and lot. Arlington setbacks are often tighter than Fairfax — we verify on every site before designing.</li>
          </ul>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>We file the Arlington permit package and any historic-review submission in parallel from the day you sign — saving 3-5 weeks compared to builders who serialize the submissions.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Materials &amp; pricing for Arlington projects</h2>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #e5e5e5' }}>Project type</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #e5e5e5' }}>Typical size</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #e5e5e5' }}>Where it&apos;s common</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #e5e5e5' }}>Price range</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Compact single-level deck</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>280–450 sqft</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>South Arlington</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>$28,000–$48,000</td></tr>
                <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Historic-district composite deck</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>350–500 sqft</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Lyon Park, Maywood</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>$42,000–$68,000</td></tr>
                <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Two-level / multi-level deck</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>500–750 sqft</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Donaldson Run, Williamsburg</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>$52,000–$85,000</td></tr>
                <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Screened porch (new)</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>250–350 sqft</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>North Arlington</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>$48,000–$78,000</td></tr>
                <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Deck + screened porch combo</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>380–550 sqft</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Donaldson Run, Cherrydale</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>$52,000–$88,000</td></tr>
                <tr><td style={{ padding: '0.75rem' }}>Rooftop terrace / balcony rebuild</td><td style={{ padding: '0.75rem' }}>200–350 sqft</td><td style={{ padding: '0.75rem' }}>Ballston, Clarendon, Rosslyn</td><td style={{ padding: '0.75rem' }}>$28,000–$58,000</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>Every Arlington estimate includes free 3D design rendering and a full materials breakdown before contract. Financing through our partners — see <Link href="/deck-financing-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck financing options</Link>.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Services in Arlington</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { title: 'Composite Decks', range: '$25k–$65k', link: '/services/new-decks' },
              { title: 'Screened Porches', range: '$30k–$65k', link: '/services/porches' },
              { title: 'Deck Resurfacing', range: '$15k–$30k+', link: '/services/deck-resurfacing' },
              { title: 'Pergolas', range: '$10k–$28k', link: '/services/gazebo-pergola' },
              { title: 'Patios', range: '$8k–$22k', link: '/services/patios' },
              { title: 'Fencing', range: '$5k–$14k', link: '/services/fence' },
            ].map((item) => (
              <Link key={item.title} href={item.link} style={{ display: 'block', background: '#f9f9f9', borderRadius: 8, padding: '1rem', textDecoration: 'none', color: 'inherit' }}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.25rem', fontSize: '0.95rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>{item.range}</p>
              </Link>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Featured Arlington Project</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>$52,000 380 sqft Deck + Screened Porch, Donaldson Run</h3>
            <p style={{ lineHeight: 1.7 }}>Two-level build on a sloped lot backing to Donaldson Run park. Upper dining deck (220 sqft) in TimberTech AZEK Coastline connected to a lower screened porch (160 sqft) with retractable EZE-Breeze panels. Cable railings on the upper level for tree-canopy views. Privacy lattice on the neighbor-facing side. Arlington County building permit. 4-week build.</p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Arlington Neighborhoods</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {['Ballston', 'Clarendon', 'Rosslyn', 'Shirlington', 'Donaldson Run', 'Williamsburg', 'Cherrydale', 'Lyon Village', 'Ashton Heights', 'Columbia Heights', 'Pentagon City', 'Crystal City', 'Bluemont', 'Fairlington'].map((n) => (
              <span key={n} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.85rem', color: '#555' }}>{n}</span>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>FAQ — building a deck in Arlington</h2>
          {[
            { q: "How much does a deck cost in Arlington, VA?", a: "Arlington deck projects range from $25,000-$85,000+. North Arlington (Lyon Village, Lyon Park, Cherrydale, Donaldson Run) typically lands $45k-$75k with premium materials. South Arlington (Aurora Hills, Forest Hills, Boulevard Manor) typically $28k-$55k. Composite: $40-$75/sqft." },
            { q: "Does Arlington have special deck restrictions?", a: "Yes. Arlington County has its own building department (CPHD) with setback rules often tighter than Fairfax County. Lyon Park Historic District (National Historic) requires design review for visible exterior changes. Lyon Village, Maywood, and Westover also have historic-overlay considerations." },
            { q: "What's the Arlington County deck permit process?", a: "Arlington requires a building permit for any deck attached to your house and for freestanding decks 30 inches or more above grade. Applications go through the Permit Arlington web portal (CPHD). Plan review averages 3-5 weeks. Inspections (footing, framing, final) coordinated through Inspection Services 703-228-3800." },
            { q: "Which Arlington neighborhoods do you serve most?", a: "Our highest single-family-home volume is in North Arlington — Lyon Park, Lyon Village, Cherrydale, Donaldson Run, Williamsburg, Maywood, Westover, Rock Spring, Country Club Hills, Yorktown, Waverly Hills. South Arlington: Aurora Hills, Forest Hills, Boulevard Manor, Fairlington, Shirlington, Douglas Park." },
            { q: "Can you build in the Lyon Park Historic District?", a: "Yes. Lyon Park has 1,165 contributing buildings (Craftsman bungalows, American Foursquares, Colonial Revivals, Tudor Revivals, Cape Cods). Visible decks need design review. We design Lyon Park decks specifically to clear historic review — warm-tone composites (Trex Transcend Spiced Rum, Tiki Torch), classic balustrade railings, proportions matched to the original home." },
            { q: "What materials work best for Arlington homes?", a: "North Arlington historic (Lyon Park, Lyon Village, Cherrydale): warm-tone composites — Trex Transcend Tiki Torch, Spiced Rum, Havana Gold — with classic balustrade or aluminum-traditional railings. South Arlington modern: cooler tones — Trex Transcend Island Mist, TimberTech AZEK Dark Hickory — with cable or horizontal-aluminum railings." },
            { q: "How long does an Arlington deck project take from contract?", a: "8-12 weeks total. Arlington permit review averages 3-5 weeks (1 week longer than Fairfax). Historic district design review adds 2-4 weeks if your home is in Lyon Park, Maywood, or another protected area. Material delivery: 1-3 weeks. Build: 1-3 weeks." },
            { q: "Do you build screened porches in Arlington?", a: "Yes — screened porches are one of our most-requested Arlington builds, especially in Lyon Park and Donaldson Run where mature tree canopy makes them year-round usable. Typical 250-350 sqft screened porch: $48,000-$78,000 including foundation, decking, screen system (often EZE-Breeze retractable), roof, and electric." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '2.5rem 0 1rem' }}>Also Serving</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {[
              ['/deck-builder-falls-church-va', 'Falls Church'],
              ['/deck-builder-mclean-va', 'McLean'],
              ['/deck-builder-alexandria-va', 'Alexandria'],
              ['/deck-builder-tysons-va', 'Tysons'],
              ['/deck-builder-fairfax-va', 'Fairfax'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>{text}</Link>
            ))}
          </div>
        </div>
      </article>
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (5.0★ Google) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
            <li key="/how-much-does-a-deck-cost-northern-virginia" style={{ marginBottom: '0.5rem' }}><Link href="/how-much-does-a-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>How Much Does a Deck Cost in Northern Virginia? →</Link></li>
        </ul>
      </section>

      <SimpleCTA title="Premium Outdoor Living for Arlington" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-arlington-va" />
      <NamedAuthor context="Arlington and Northern Virginia" lastUpdated="2026-05-26" />
      <ContactHome />
    </>
  );
}
