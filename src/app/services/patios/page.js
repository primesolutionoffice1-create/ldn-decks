import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import SimpleCTA from '@/components/SimpleCTA';
import AboveFoldCTA from '@/components/AboveFoldCTA';
import NamedAuthor from '@/components/NamedAuthor';
import JsonLd from '@/components/JsonLd';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: "/services/patios",
  title: 'Patio Contractor Northern Virginia | Paver, Stone & Stamped',
  description: 'Licensed Virginia Class A patio contractor in Northern Virginia. Paver patios, stamped concrete, bluestone & natural stone. Loudoun, Fairfax, Prince William, Arlington. Free 24h estimate.',
  image: '/showcase/img12.jpeg',
});

const S = {
  h2: { fontSize: '1.95rem', fontWeight: 700, marginBottom: '1.1rem', letterSpacing: '-0.01em' },
  h3: { fontSize: '1.2rem', fontWeight: 600, margin: '1.4rem 0 0.55rem' },
  p: { marginBottom: '1rem', lineHeight: 1.75, color: '#333' },
  pMuted: { marginBottom: '1rem', lineHeight: 1.7, color: '#555' },
  section: { padding: '3rem 1.5rem' },
  container: { maxWidth: 980, margin: '0 auto' },
  th: { padding: '0.85rem', textAlign: 'left', borderBottom: '2px solid #ddd', fontSize: '0.92rem' },
  td: { padding: '0.85rem', borderBottom: '1px solid #eee', fontSize: '0.92rem' },
  callout: { borderLeft: '4px solid var(--color-primary)', background: '#fff8f1', padding: '1.25rem 1.5rem', borderRadius: 6, marginBottom: '2rem' },
};

const patioCostRows = [
  ['Concrete pavers (entry)', '200–300 sqft', 'Standard paver, basic 6\" base, simple rectangular layout', '$14,000–$22,000', '$60–$80/sqft'],
  ['Stamped concrete (mid)', '300–400 sqft', 'Slate or flagstone stamp pattern, integral color, sealer', '$15,000–$25,000', '$40–$65/sqft'],
  ['Natural stone — flagstone (mid-premium)', '300–400 sqft', 'Irregular Pennsylvania flagstone, hand-fit, polymeric joints', '$22,000–$38,000', '$70–$95/sqft'],
  ['Bluestone — natural cleft (premium)', '300–450 sqft', 'Full pattern bluestone, dimensional cut, sealed border', '$28,000–$48,000', '$90–$115/sqft'],
  ['Bluestone — thermal finish (luxury)', '350–500 sqft', 'Thermal-flat bluestone, mortar set, integrated steps & lighting', '$45,000–$75,000', '$120–$165/sqft'],
  ['Luxury hardscape suite', '500+ sqft', 'Bluestone or travertine, seating walls, fire feature, outdoor kitchen', '$75,000–$160,000+', 'project-based'],
];

const materialComparison = [
  {
    name: 'Concrete Pavers',
    cost: '$60–$90/sqft installed',
    durability: '30+ years',
    freezeThaw: 'Excellent — individually flexible',
    look: 'Uniform, engineered',
    repair: 'Lift and replace individual pavers',
    bestFor: 'Geometric layouts, modern homes, budget-flexible builds',
  },
  {
    name: 'Stamped Concrete',
    cost: '$40–$70/sqft installed',
    durability: '15–25 years',
    freezeThaw: 'Vulnerable — cracks if base settles',
    look: 'Mimics stone or brick patterns',
    repair: 'Patch and re-stamp; rarely invisible',
    bestFor: 'Larger footprints, budgets under $25k, walkway connectors',
  },
  {
    name: 'Natural Stone (Bluestone / Flagstone)',
    cost: '$90–$165/sqft installed',
    durability: '50+ years',
    freezeThaw: 'Excellent — natural stone, replaceable piece by piece',
    look: 'Premium, distinctive, color depth no synthetic can match',
    repair: 'Lift and replace individual stones',
    bestFor: 'Luxury estates, premium NoVA neighborhoods, long-hold homes',
  },
  {
    name: 'Travertine',
    cost: '$85–$130/sqft installed',
    durability: '40+ years',
    freezeThaw: 'Excellent — naturally cool, low absorption when sealed',
    look: 'European, soft cream to walnut tones',
    repair: 'Stone-by-stone, sealing every 3–5 years',
    bestFor: 'Pool decks, formal designs, light/cream palettes',
  },
];

const patioProcess = [
  { title: 'Step 1 — Site evaluation & grading review', desc: 'On-site walk of your soil profile, existing grade, drainage patterns and tree-root constraints. We measure pitch back to the house and identify any standing-water issues before design begins.' },
  { title: 'Step 2 — Design, layout & permitting', desc: 'Scaled drawing of the patio footprint, material selection, integrated features (fire pit, kitchen, seating walls), and county or HOA submission packets where required.' },
  { title: 'Step 3 — Excavation & engineered base', desc: 'We excavate 6 to 10 inches and lay compacted gravel and crushed-stone aggregate in lifts. The base is where every patio either succeeds for 50 years or fails in five — we never cut it.' },
  { title: 'Step 4 — Drainage infrastructure', desc: 'French drains, catch basins, and perimeter pitch detailing per Virginia clay-soil drainage standards. Pitch is 1/8\" per foot away from the house, invisible to the eye but absolute for water management.' },
  { title: 'Step 5 — Stone or paver installation', desc: 'Hand-set or mortar-set installation by our masonry crew. Each stone leveled to the adjacent piece, every joint dimensioned to spec, integrated lighting roughed in before final set.' },
  { title: 'Step 6 — Polymeric jointing & sealing', desc: 'Polymeric sand or mortar joints, swept and watered to a hardened cure. Optional invisible sealer on stone or stamped concrete to protect against staining and freeze-spalling.' },
  { title: 'Step 7 — Final walkthrough & 5-year workmanship warranty', desc: 'Itemized punch-list walkthrough with you on-site, photo documentation filed to your project record, and our written 5-year workmanship warranty on every patio we install.' },
];

const patioFAQs = [
  {
    question: 'How much does a patio cost in Northern Virginia in 2026?',
    answer: 'A custom patio in Loudoun, Fairfax or Prince William County typically runs $14,000–$48,000 installed, depending on material and footprint. Concrete pavers at 250–300 sqft start near $14,000–$22,000. Stamped concrete runs $15,000–$25,000. Premium bluestone in the 350–450 sqft range lands at $28,000–$48,000. Full luxury hardscape suites with seating walls, fire features and outdoor kitchens run $75,000–$160,000+. Every Loudoun Decks estimate is itemized, written, and delivered within 48 hours of an on-site visit.'
  },
  {
    question: 'Pavers vs stamped concrete vs natural stone — which is best for NoVA?',
    answer: 'For long-term value in Northern Virginia\'s freeze-thaw climate, concrete pavers and natural stone outperform stamped concrete by a wide margin. Stamped concrete is a single rigid slab — if the base settles or freezes unevenly, cracks propagate across the surface and are nearly impossible to repair invisibly. Pavers and natural stone are individual pieces resting on a flexible aggregate base; they flex with seasonal soil movement, and a damaged piece can be lifted and replaced without touching the rest of the patio. For luxury homes in Vienna, McLean or Great Falls, bluestone is the long-cycle ROI play. For budget-flexible builds in Ashburn, Manassas or Gainesville, pavers deliver near-identical longevity at 30–40% lower cost.'
  },
  {
    question: 'Do I need a permit for a patio in Loudoun, Fairfax or Prince William County?',
    answer: 'Most at-grade patios under 256 sqft do not trigger a building permit in NoVA. Permits are required when the patio includes retaining walls over 2 feet (Fairfax and Loudoun), runs electrical or gas lines for outdoor kitchens, sits inside an RPA (Resource Protection Area) along stream corridors, or alters site grading and drainage. HOA architectural review is separate and applies in most planned communities — Brambleton, Lansdowne, Reston, Burke Centre and others — regardless of permit status. We handle every submission for our clients.'
  },
  {
    question: 'How does Northern Virginia clay soil affect patio installation?',
    answer: 'NoVA sits on heavy red clay that expands when wet and contracts when dry. A patio built on poorly compacted clay will heave through the first winter and sink through the first dry summer. The fix is engineered base prep: excavate 6 to 10 inches below grade, install a geotextile separation fabric, then 4 to 6 inches of crushed-stone aggregate compacted in 2-inch lifts. We pitch the entire patio 1/8 inch per foot away from the house and tie surface drainage into either daylight or a perimeter French drain. This base detail is the line between a patio that lasts 5 years and a patio that lasts 50.'
  },
  {
    question: 'How long does it take to build a patio in Northern Virginia?',
    answer: 'From signed contract to completed build: typically 6–10 weeks. The design and permit phase runs 2–4 weeks (longer if Fairfax County structural review is triggered by an attached fire feature or kitchen). HOA architectural review runs 1–4 weeks in parallel. Construction itself runs 2–4 weeks once the crew mobilizes — base prep is 3–5 days, stone or paver installation is 3–8 days depending on size and material, and jointing/sealing closes out in 1–2 days.'
  },
  {
    question: 'How do you handle drainage around a new patio?',
    answer: 'Every patio we build pitches 1/8 inch per foot away from the house — imperceptible visually but absolute for water management. Where existing yards already have pooling problems, we integrate French drains beneath the patio base tied into either daylight or a dry well sized to your average storm event. For patios within 10 feet of a house foundation, we run a perimeter drain along the back edge to catch roof runoff before it reaches the foundation wall. Drainage is engineered into the base, not retrofitted later.'
  },
  {
    question: 'Can a patio be added to an existing deck or screened porch?',
    answer: 'Yes — combined deck-and-patio builds are one of our most-requested projects in Vienna, McLean, Reston and Great Falls. The patio typically sits below an elevated deck (under-deck patio system with a dry ceiling) or extends off a ground-level deck into the yard. For under-deck installations we install a waterproof drainage ceiling between the joists so the patio space below stays dry through every storm. Pergolas and screened porches integrate directly onto the patio footprint, sharing footings and creating a unified outdoor living suite.'
  },
  {
    question: 'What is the ROI on a custom patio in Northern Virginia?',
    answer: 'A premium hardscape patio recovers 55–75% of its installed cost at resale in the NoVA market, with luxury bluestone and integrated outdoor-kitchen builds often exceeding 75% cost recovery on properties valued at $1M+ (Remodeling Magazine and National Association of Realtors Outdoor Features Reports). The bigger return is on time-on-market: NoVA homes with finished outdoor living spaces sell measurably faster than comparable inventory without them. For owners holding 7+ years, a patio is among the highest-ROI outdoor additions you can make — second only to a full composite deck plus screened porch combination.'
  },
];

const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": patioFAQs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
};

const serviceSchemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom Patio Design & Installation",
  "serviceType": "Hardscape Patio Construction",
  "provider": { "@id": "https://ldndecks.com/#organization" },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Loudoun County, VA" },
    { "@type": "AdministrativeArea", "name": "Fairfax County, VA" },
    { "@type": "AdministrativeArea", "name": "Prince William County, VA" },
    { "@type": "AdministrativeArea", "name": "Arlington County, VA" },
  ],
  "description": "Premium patio installation in Northern Virginia. Concrete pavers, stamped concrete, bluestone, flagstone, travertine. Drainage engineering, retaining walls, fire features, outdoor kitchens.",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "14000",
    "highPrice": "160000",
  },
};

const neighborhoods = [
  { county: 'Loudoun County', cities: 'Ashburn, Leesburg, Sterling, Brambleton, South Riding, Purcellville, Lansdowne, Aldie, Middleburg' },
  { county: 'Fairfax County', cities: 'Vienna, McLean, Reston, Herndon, Fairfax, Great Falls, Oakton, Burke, Centreville, Chantilly, Tysons, Falls Church' },
  { county: 'Prince William County', cities: 'Manassas, Gainesville, Haymarket, Bristow, Woodbridge' },
  { county: 'Arlington County', cities: 'Arlington, Rosslyn, Clarendon, Ballston' },
];

export default function PatiosPage() {
  return (
    <main>
      <JsonLd data={faqSchemaData} />
      <JsonLd data={serviceSchemaData} />

      <ServicesHeader
        subtext="Patio Builder & Contractor — Northern Virginia"
        title="Custom Patio Contractor in Northern Virginia"
        description="Virginia Class A licensed patio contractor serving Loudoun, Fairfax, Prince William, and Arlington counties. Paver patios, stamped concrete, bluestone, flagstone, and travertine hardscapes engineered for NoVA clay soil and freeze-thaw climate. Trex Platinum Partner — outdoor living suites that integrate seamlessly with decks, pergolas, and screened porches."
      />

      <AboveFoldCTA headline="Planning a paver, flagstone or bluestone patio in NoVA? Talk to a custom hardscape specialist today." />

      <section style={{ padding: '2.5rem 1.5rem 1rem' }}>
        <div style={S.container}>
          <div style={S.callout}>
            <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Quick Answer</strong>
            <p style={{ margin: 0, lineHeight: 1.7 }} data-speakable>
              A custom patio in Northern Virginia typically costs $14,000–$48,000 installed for a 250–450 sqft build, with material running the largest cost lever — concrete pavers from $60/sqft, stamped concrete from $40/sqft, premium bluestone from $90/sqft. Loudoun Decks is a Virginia Class A licensed patio contractor and Trex Platinum Partner. We handle every county and HOA submission, engineer drainage into the base, and deliver an itemized written estimate within 48 hours of the on-site visit. Service area: Loudoun, Fairfax, Prince William, and Arlington counties.
            </p>
          </div>

          <NamedAuthor context="Loudoun, Fairfax, Prince William and Arlington counties" lastUpdated="May 2026" />

          <h2 style={S.h2}>The Premier Patio Builder for Luxury Homes in Northern Virginia</h2>
          <p style={S.p}>
            A patio is the single most-used architectural feature in any NoVA backyard — used more days per year than the deck above it, the screened porch beside it, or the pool deck across from it. That utility makes the difference between a patio that quietly carries the property and one that becomes a maintenance line-item brutal at year five. Loudoun Decks builds the first kind. We work in bluestone, flagstone, travertine, and premium concrete pavers, on engineered bases designed for the freeze-thaw realities of Virginia clay soil, with drainage detailing that holds through the worst late-spring NoVA storm.
          </p>
          <p style={S.p}>
            Our work spans the corridor from Leesburg and Ashburn through Vienna and McLean down to Manassas and Haymarket. The properties differ — historic homes in Old Town Fairfax, modern estates in Great Falls, townhomes in South Riding, custom rebuilds in Reston — but the standard is constant: a Virginia Class A licensed crew, sealed structural drawings where the county requires them, manufacturer-certified materials, and a 5-year workmanship warranty on every patio we hand off.
          </p>

          <h2 style={S.h2}>2026 Patio Cost in Northern Virginia</h2>
          <p style={S.p}>
            Patio pricing in NoVA runs 25–35% above the national average, driven by Fairfax County&apos;s permit documentation standards, NoVA labor rates, and the engineered base and drainage required to perform on heavy clay soil. The table below reflects real 2026 builds we&apos;ve delivered across Loudoun, Fairfax, Prince William and Arlington — full-project costs, not material-only.
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 8, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
              <thead>
                <tr style={{ background: '#f0efea' }}>
                  <th style={S.th}>Build tier</th>
                  <th style={S.th}>Footprint</th>
                  <th style={S.th}>Spec</th>
                  <th style={S.th}>Installed cost</th>
                  <th style={S.th}>$/sqft</th>
                </tr>
              </thead>
              <tbody>
                {patioCostRows.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{row[0]}</td>
                    <td style={S.td}>{row[1]}</td>
                    <td style={{ ...S.td, color: '#555' }}>{row[2]}</td>
                    <td style={{ ...S.td, fontWeight: 600, color: 'var(--color-primary)' }}>{row[3]}</td>
                    <td style={S.td}>{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#666', fontStyle: 'italic', marginBottom: '2rem' }}>
            Ranges include base prep, drainage, materials, labor, permit fees, and our 5-year workmanship warranty. Excludes lighting electrical service, gas-line installation for outdoor kitchens, and tree removal where required by site conditions.
          </p>

          <h2 style={S.h2}>Pavers vs Stamped Concrete vs Natural Stone</h2>
          <p style={S.p}>
            Four material classes dominate the NoVA patio market. The right one for your project depends on budget tier, design aesthetic, and how long you plan to own the home.
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 8, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04)', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#f0efea' }}>
                  <th style={S.th}>Material</th>
                  <th style={S.th}>Installed cost</th>
                  <th style={S.th}>Service life</th>
                  <th style={S.th}>Freeze-thaw</th>
                  <th style={S.th}>Repairability</th>
                </tr>
              </thead>
              <tbody>
                {materialComparison.map((m, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{m.name}</td>
                    <td style={S.td}>{m.cost}</td>
                    <td style={S.td}>{m.durability}</td>
                    <td style={S.td}>{m.freezeThaw}</td>
                    <td style={S.td}>{m.repair}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={S.pMuted}>
            For a deeper material comparison: <Link href="/paver-vs-flagstone-patio-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>paver vs flagstone</Link>, <Link href="/stamped-concrete-patio-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>stamped concrete patio guide</Link>, and <Link href="/deck-vs-patio-which-is-right" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck vs patio decision framework</Link>.
          </p>

          <h2 style={S.h2}>Patio Permits in Loudoun, Fairfax & Prince William</h2>
          <p style={S.p}>
            Most at-grade patios under 256 sqft do not trigger a building permit in NoVA. The exceptions are common enough to matter:
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.55rem', lineHeight: 1.7 }}><strong>Retaining walls over 2 feet</strong> trigger a permit in Loudoun, Fairfax and Prince William counties. Walls over 4 feet require sealed engineering drawings.</li>
            <li style={{ marginBottom: '0.55rem', lineHeight: 1.7 }}><strong>Outdoor kitchen electrical and gas lines</strong> require separate electrical and plumbing permits from the county.</li>
            <li style={{ marginBottom: '0.55rem', lineHeight: 1.7 }}><strong>Patios inside an RPA</strong> (Resource Protection Area — stream corridors and Chesapeake Bay buffer zones) require county environmental review.</li>
            <li style={{ marginBottom: '0.55rem', lineHeight: 1.7 }}><strong>HOA architectural review</strong> applies regardless of permit status in Brambleton, Lansdowne, Reston, Burke Centre, South Riding, Broadlands, Belmont and most other planned NoVA communities.</li>
          </ul>
          <p style={S.pMuted}>
            We handle every submission for our clients. See the full <Link href="/deck-permit-loudoun-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun</Link>, <Link href="/deck-permit-fairfax-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Fairfax County</Link>, and <Link href="/deck-permit-prince-william-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Prince William County</Link> permit guides for fee schedules and timelines.
          </p>

          <h2 style={S.h2}>NoVA Clay Soil, Drainage & the Engineered Base</h2>
          <p style={S.p}>
            Every Northern Virginia patio sits on heavy red clay. Clay expands when wet and contracts when dry — a 200 sqft patio over poorly prepped clay can heave half an inch through the first winter and crack the surface beyond repair. The base is the most important thing about your patio and the part you&apos;ll never see.
          </p>
          <p style={S.p}>
            Our base detail: excavate 6–10 inches below finished grade, lay geotextile separation fabric across the subsoil, then 4–6 inches of #57 crushed stone compacted in 2-inch lifts with a plate compactor. We pitch the entire patio 1/8 inch per foot away from the house — imperceptible to the eye, absolute for water management. Where existing yards already pool water, we integrate a perimeter French drain along the back edge tied into either daylight or a sized dry well. For patios within 10 feet of a foundation wall, the drain catches roof runoff before it reaches the basement.
          </p>
          <p style={S.p}>
            This is the line between a patio that lasts 5 years and a patio that lasts 50. Almost every patio failure we&apos;re called to remediate failed at the base — not at the surface stone.
          </p>

          <h2 style={S.h2}>Best Patio Materials for the NoVA Freeze-Thaw Climate</h2>
          <p style={S.p}>
            Northern Virginia delivers 50 to 80 freeze-thaw cycles per winter. Water seeps into joints, freezes, expands, and lifts material. The materials that handle this best are the ones built to flex with seasonal soil movement: concrete pavers (individual units on flexible base), natural bluestone and flagstone (lift-and-replace pieces), and travertine (low-absorption when sealed). Stamped concrete is the freeze-thaw weak link — a single rigid slab cracks when the base settles unevenly, and the cracks are visually impossible to hide.
          </p>
          <p style={S.p}>
            Our default recommendation for clients planning to stay 7+ years is natural bluestone with polymeric or mortar joints on a fully engineered base. For shorter-hold homes, premium concrete pavers from manufacturers like Techo-Bloc, Belgard, or Unilock deliver near-identical longevity at 30–40% lower installed cost.
          </p>

          <h2 style={S.h2}>How Patios Combine With Decks, Pergolas & Screened Porches</h2>
          <p style={S.p}>
            The highest-value backyard transformations in NoVA are not single-element builds — they&apos;re integrated outdoor living suites. We design and build complete systems:
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.55rem', lineHeight: 1.7 }}><strong>Patio + composite deck</strong>: ground-level patio extending off a raised <Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Trex or TimberTech deck</Link>, sharing footings and creating multi-level outdoor zoning.</li>
            <li style={{ marginBottom: '0.55rem', lineHeight: 1.7 }}><strong>Patio + under-deck system</strong>: dry, fully usable <Link href="/services/under-deck-patios" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>under-deck patio</Link> with waterproof drainage ceiling between the joists.</li>
            <li style={{ marginBottom: '0.55rem', lineHeight: 1.7 }}><strong>Patio + pergola</strong>: shaded patio with structural <Link href="/services/gazebo-pergola" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>pergola</Link> overhead — most-requested combination for west-facing yards in Vienna, McLean and Great Falls.</li>
            <li style={{ marginBottom: '0.55rem', lineHeight: 1.7 }}><strong>Patio + screened porch</strong>: open patio space adjacent to a <Link href="/services/porches/screened-porch" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>screened porch</Link>, sharing the same footing line and finish floor elevation.</li>
            <li style={{ marginBottom: '0.55rem', lineHeight: 1.7 }}><strong>Patio + fire feature + outdoor kitchen</strong>: the full luxury hardscape suite, with <Link href="/services/fire-pits" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>built-in fire pit</Link>, integrated grill station, and seating walls finished in the same stone.</li>
          </ul>
          <p style={S.pMuted}>
            See the <Link href="/outdoor-living-trends-northern-virginia-2026" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>2026 NoVA outdoor living trends</Link> for the design directions driving these integrated builds.
          </p>

          <h2 style={S.h2}>Patio ROI & Resale Value in Northern Virginia</h2>
          <p style={S.p}>
            A premium hardscape patio recovers 55–75% of its installed cost at resale in the NoVA market (Remodeling Magazine and NAR Outdoor Features Reports). On properties valued at $1M+ in Great Falls, McLean, Vienna and Ashburn, luxury bluestone builds with integrated fire features and outdoor kitchens often exceed 75% cost recovery. The under-reported value is time-on-market: NoVA homes with finished outdoor living spaces sell measurably faster than comparable inventory.
          </p>
          <p style={S.p}>
            For owners holding 7+ years, a patio is among the highest-ROI outdoor additions you can make — second only to a full composite deck plus screened porch combination. The longer you own the home, the more the freeze-thaw resilience of natural stone and premium pavers pays back.
          </p>

          <h2 style={S.h2}>Our Layout & Build Process</h2>
          <p style={S.p}>
            Seven steps from on-site visit to final walkthrough. Every patio we hand off has been through each one.
          </p>
        </div>
      </section>

      <ServiceInclusions
        title="Engineered for NoVA Climate"
        description="Each step exists because the patio failures we&apos;re called to remediate failed at one of them."
        items={patioProcess}
      />

      <section style={{ padding: '3.5rem 1.5rem', background: '#fafafa', borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>
        <div style={S.container}>
          <h2 style={S.h2}>Where We Build — NoVA Patio Service Area</h2>
          <p style={S.p}>
            We build patios across Northern Virginia. Cluster density is heaviest in Loudoun, Fairfax and Prince William; we also serve Arlington and Stafford on a case-by-case basis.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            {neighborhoods.map((n) => (
              <div key={n.county} style={{ background: '#fff', border: '1px solid #ececec', borderRadius: 8, padding: '1.2rem' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--color-primary)' }}>{n.county}</h3>
                <p style={{ margin: 0, fontSize: '0.92rem', color: '#555', lineHeight: 1.6 }}>{n.cities}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '0.92rem' }}>
            <Link href="/areas-we-serve" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Full NoVA service map →</Link>
          </p>
        </div>
      </section>

      <section style={{ padding: '3.5rem 1.5rem' }}>
        <div style={S.container}>
          <h2 style={S.h2}>Patio Project Gallery</h2>
          <p style={S.pMuted}>A closer look at recent NoVA hardscape builds.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            <div style={{ position: 'relative', height: '380px', borderRadius: 8, overflow: 'hidden' }}>
              <Image src="/showcase/img11.jpeg" alt="Custom bluestone patio installation Northern Virginia — Loudoun County build" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div style={{ position: 'relative', height: '380px', borderRadius: 8, overflow: 'hidden' }}>
              <Image src="/showcase/img12.jpeg" alt="Premium natural stone patio with integrated fire feature — Fairfax County" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div style={{ position: 'relative', height: '380px', borderRadius: 8, overflow: 'hidden' }}>
              <Image src="/showcase/img13.jpg" alt="Hand-laid flagstone patio detail with polymeric joints — NoVA luxury hardscape" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div style={{ position: 'relative', height: '380px', borderRadius: 8, overflow: 'hidden' }}>
              <Image src="/showcase/img14.jpg" alt="Outdoor living suite with patio, pergola, and seating wall — Vienna VA" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '3.5rem 1.5rem', background: '#fafafa' }}>
        <div style={S.container}>
          <h2 style={S.h2}>Patio Builder & Contractor FAQs</h2>
          {patioFAQs.map((faq, index) => (
            <details key={index} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.1rem 1.25rem', marginBottom: '0.75rem', background: '#fff' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.02rem' }}>{faq.question}</summary>
              <p style={{ marginTop: '0.85rem', lineHeight: 1.7, color: '#444', marginBottom: 0 }}>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <ServiceAreasGrid />
      <SimpleCTA title="Build Your Northern Virginia Patio" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/services/patios" />
      <ContactHome />
    </main>
  );
}
