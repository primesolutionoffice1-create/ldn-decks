import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import SimpleCTA from '@/components/SimpleCTA';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import RatingBadge from '@/components/RatingBadge';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import { BUSINESS } from '@/lib/business';
import CallLink from '@/components/CallLink';
import PlanningUpdate from '@/components/PlanningUpdate';
import GeoAnswerBlock from '@/components/GeoAnswerBlock';

export const metadata = buildMetadata({
  path: '/deck-builder-centreville-va',
  title: 'Deck Builder in Centreville, VA | Trex | Loudoun Decks',
  description: 'Loudoun Decks is headquartered in Centreville, VA. Custom Trex & composite decks, porches, patios. Visit our showroom. (571) 655-7207.',
  image: '/social/deck-builder-centreville-va-social.png',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Where is Loudoun Decks located?", acceptedAnswer: { "@type": "Answer", text: "Our office and showroom are at 13704 Winding Oak Cir, Centreville, VA 20121. We're headquartered in Centreville and serve all of Northern Virginia — Loudoun, Fairfax, Prince William, Arlington, and Stafford counties. Centreville is the only city in our service area where we can offer in-person material sampling at our showroom by appointment." } },
    { "@type": "Question", name: "How much does a deck cost in Centreville?", acceptedAnswer: { "@type": "Answer", text: "Centreville deck projects typically range from $22,000-$85,000. Sully Station and Centre Ridge townhomes: $22k-$38k. Country Club Manor / Chalet Woods single-family: $32k-$55k. Newgate townhomes and detached: $26k-$48k. Virginia Run premier estates: $55k-$85k+. Composite decks average $40-$70/sqft installed depending on material grade and design complexity." } },
    { "@type": "Question", name: "Which Centreville neighborhoods do you build in most?", acceptedAnswer: { "@type": "Answer", text: "Our highest project volume in Centreville comes from Sully Station (~1,000 residences on 1,100 landscaped acres), Centre Ridge (family-friendly townhomes + detached), Newgate (807 homes), Country Club Manor / Chalet Woods (~1,200 large-lot single-family), and Virginia Run (premier master-planned community with golf course and HOA $90-120/month). We also build regularly in Compton Village, London Towne, Centreville Farms, Bull Run, Cub Run, Rocky Run, Fair Lakes, and Clifton-adjacent properties." } },
    { "@type": "Question", name: "Do I need a permit in Centreville?", acceptedAnswer: { "@type": "Answer", text: "Yes. Centreville is in Fairfax County. Building permits are required for any deck attached to your house, over 256 sqft in size, or more than 16.5 inches above grade. Plan review through the Fairfax County Land Development Services portal averages 3-6 weeks. Inspections (footing, framing, final) coordinated through the Fairfax County Permit Application Center 703-222-0801. We file every package as part of the project." } },
    { "@type": "Question", name: "Which Centreville HOA process is fastest?", acceptedAnswer: { "@type": "Answer", text: "It depends on the community. Centre Ridge and London Towne typically clear architectural review in 14-21 days when submitted with material samples and engineered drawings. Sully Station's master-planned process averages 21-28 days. Newgate runs 14-21 days. Virginia Run is the most detailed — material samples, color specs, structural drawings, and an in-person committee meeting — averaging 21-35 days. Country Club Manor / Chalet Woods has the fewest restrictions (no premium HOA), making it the fastest at ~14 days. We carry current submission templates for all major Centreville HOAs." } },
    { "@type": "Question", name: "What does the Centreville showroom offer?", acceptedAnswer: { "@type": "Answer", text: "Our 13704 Winding Oak Cir showroom is the only place in the Loudoun-Fairfax-Prince William corridor where you can see and touch Trex Transcend, Trex Enhance, Trex Select, TimberTech AZEK Vintage / Harvest / Coastline, TimberTech PRO, full-color sample boards, every railing system we install (composite balustrade, aluminum traditional, cable, glass), full-height post wraps, integrated lighting fixtures, and pergola components — all side by side. Most clients save 1-2 design meetings by visiting the showroom early. By appointment, Mon-Sat 8 AM-6 PM." } },
    { "@type": "Question", name: "What materials work best for Centreville homes?", acceptedAnswer: { "@type": "Answer", text: "Centreville is a mid-range to premium market with diverse architectural styles. Sully Station and Centre Ridge (1990s-2000s suburban): Trex Transcend Spiced Rum, Tiki Torch, or Havana Gold with classic balustrade railings. Country Club Manor (1960s-70s established): Trex Enhance Foggy Wharf or Beach Dune for value, Transcend Vintage Lantern for premium. Newgate (2000s townhomes): Trex Enhance or TimberTech EDGE for value-conscious budgets. Virginia Run (premier estates): TimberTech AZEK Vintage Mahogany or Coastline with cable or glass railings, integrated outdoor kitchens, multi-level designs." } },
    { "@type": "Question", name: "How long does a Centreville deck project take from contract?", acceptedAnswer: { "@type": "Answer", text: "8-12 weeks total for most builds. That includes 3-4 weeks for the Fairfax County permit, 2-4 weeks for HOA approval (parallel with permit), 1-3 weeks for material delivery, and 1-3 weeks for construction. Sully Station and Centre Ridge townhome decks: 9-10 weeks. Country Club Manor full-rear decks: 10-12 weeks. Virginia Run multi-level estate builds: 12-16 weeks given the detailed HOA review." } },
    { "@type": "Question", name: "Do you build outdoor kitchens in Centreville?", acceptedAnswer: { "@type": "Answer", text: "Yes, especially in Virginia Run, Country Club Manor, and the larger Sully Station lots where backyard space supports a full outdoor cooking area. Typical Centreville outdoor kitchens run $15,000-$80,000 depending on built-in appliances, counter material, and electrical/gas/water infrastructure. We often combine outdoor kitchens with multi-level decks for the full outdoor-living experience." } },
    { "@type": "Question", name: "Do you build screened porches in Centreville?", acceptedAnswer: { "@type": "Answer", text: "Yes — Centreville's mature tree canopy and humid summers make screened porches especially valuable. Typical 250-350 sqft Centreville screened porch: $48,000-$78,000 including foundation, composite decking, screen system, roof, ceiling, electric, and ceiling fans. We frequently build screened porches connected to a new or existing open deck for the full indoor-outdoor flow." } },
  ],
};

export default function CentrevilleDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <LocalBusinessSchema city="Centreville" url="https://ldndecks.com/deck-builder-centreville-va" />
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/deck-builder-centreville-va" name="Deck Builder in Centreville, VA | Trex | Loudoun Decks" description="" speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img33.jpeg"
              alt="Premium custom deck built by LDN Decks in Centreville, Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.01em' }}>Custom Deck Builder in Centreville, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.15rem' }}>Centreville expanding your outdoor potential — Loudoun Decks is headquartered right here. Visit our showroom for material samples.</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Visit Our Showroom</Link>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#aaa' }}>Public review profiles · 13704 Winding Oak Cir, Centreville, VA 20121 · Showroom by appointment</p>
        </div>
      </section>
      <PlanningUpdate
        market="Centreville decks in 2026"
        notes={[
          "Centreville projects should verify Fairfax County permit scope, HOA review path, and whether the homeowner wants showroom material selection before final pricing.",
          "Sully Station, Centre Ridge, Newgate, Country Club Manor, and Virginia Run each need different material, color, and railing documentation.",
          "Deck-plus-screened-porch scopes should plan footing, framing, drainage, and electrical details before HOA or permit submission."
        ]}
        links={[
          { href: "/deck-permit-fairfax-county-virginia", label: "Fairfax permit guide" },
          { href: "/deck-cost-calculator", label: "Deck cost calculator" },
          { href: "/trex-vs-timbertech-vs-azek", label: "Material comparison" }
        ]}
      />
      <GeoAnswerBlock
        question="Why is Centreville a strong deck replacement market?"
        answer="Centreville has many established Fairfax County communities where older wood decks, townhome decks, and HOA-managed outdoor spaces need resurfacing, replacement, or screened-porch planning. Loudoun Decks is based in Centreville, so the practical first step is a local site review that checks framing, HOA rules, Fairfax County permit needs, materials, stairs, railings, drainage, and the written estimate path."
        facts={[
          'Primary buyer intent: local deck builder, deck replacement, HOA-ready composite upgrades, and showroom material selection.',
          'Proof status: community-specific project claims require proof-lock before public use.',
          'Conversion path: material comparison, Fairfax permit guide, and written Centreville estimate.'
        ]}
        links={[
          { href: '/deck-permit-fairfax-county-virginia', label: 'Fairfax permit guide' },
          { href: '/deck-cost-calculator', label: 'Deck cost calculator' },
          { href: '/get-estimate', label: 'Get a Centreville estimate' }
        ]}
      />
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Your Local Centreville Deck Builder — Headquarters &amp; Showroom</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>We don&apos;t just serve Centreville — we&apos;re headquartered here. Our office and material showroom are at <strong>13704 Winding Oak Cir, Centreville, VA 20121</strong>. When you work with Loudoun Decks on a Centreville project, your project manager is minutes away — not across the metro area. We&apos;re typically on-site within 30 minutes of a service call, and material deliveries from our staging area drop directly to your driveway without crossing the Beltway.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Centreville is more than our office address — it&apos;s where most of our team lives. We&apos;ve built throughout Centreville&apos;s diverse neighborhoods, and the deck volume per zip code in 20120/20121 is consistently among the highest in our portfolio. We know the Fairfax County permitting process, the local HOA architectural reviews, the soil and grade conditions, and the property-line setbacks that affect deck construction here in a way no out-of-county contractor can match.</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>If you live in Sully Station, Centre Ridge, Country Club Manor, Newgate, Virginia Run, Compton Village, London Towne, Bull Run, Cub Run, Rocky Run, Fair Lakes, or anywhere in 20120/20121 — we&apos;ve almost certainly built within walking distance of your home. Ask for project references in your specific community when you call.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Centreville&apos;s deck market — what we see most</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Centreville isn&apos;t one market — it&apos;s a portfolio of master-planned communities, established large-lot single-family neighborhoods, and townhome clusters from the 1980s through 2010s. Pricing, design vocabulary, and HOA process all vary by community.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Master-planned communities</strong> (Sully Station, Virginia Run, Newgate, Centre Ridge) — detailed architectural review, predictable material catalogs, well-documented setback rules. Predictable timelines.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Established large-lot single-family</strong> (Country Club Manor / Chalet Woods, Compton Village, Centreville Farms) — bigger backyards, fewer restrictions, more design freedom. Multi-level decks and outdoor kitchens common.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Townhome clusters</strong> (parts of Centre Ridge, Newgate, London Towne) — compact rear decks (180–280 sqft), HOA-managed approval, often phased rebuilds.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Clifton-adjacent estate lots</strong> — west of Compton Road, rural-zoned acreage. Custom multi-level decks, screened porches with mountain views, full outdoor kitchens.</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Visit Our Showroom</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Loudoun Decks Showroom</p>
            <p style={{ marginBottom: '0.25rem' }}>13704 Winding Oak Cir, Centreville, VA 20121</p>
            <p style={{ marginBottom: '0.25rem' }}>Phone: <CallLink style={{ color: 'var(--color-primary)', fontWeight: 600 }}>(571) 655-7207</CallLink></p>
            <p style={{ marginBottom: '0.5rem' }}>Hours: Mon–Sat 8:00 AM – 6:00 PM (by appointment recommended)</p>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>See and touch samples of Trex Transcend, Trex Enhance, TimberTech AZEK, railing systems, lighting options, and color swatches. Compare materials side by side before deciding.</p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Services in Centreville</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { title: 'Custom Composite Decks', range: '$20k–$55k', link: '/services/new-decks' },
              { title: 'Deck Resurfacing', range: '$15k–$30k+', link: '/services/deck-resurfacing' },
              { title: 'Screened Porches', range: '$25k–$65k', link: '/services/porches' },
              { title: 'Pergolas & Gazebos', range: '$10k–$30k', link: '/services/gazebo-pergola' },
              { title: 'Outdoor Kitchens', range: '$15k–$80k', link: '/outdoor-kitchen-builder-northern-virginia' },
              { title: 'Fencing', range: '$5k–$15k', link: '/services/fence' },
              { title: 'Patios', range: '$8k–$25k', link: '/services/patios' },
              { title: 'Deck Staining', range: '$600–$2k', link: '/deck-staining-northern-virginia' },
            ].map((item) => (
              <Link key={item.title} href={item.link} style={{ display: 'block', background: '#f9f9f9', borderRadius: 8, padding: '1rem', textDecoration: 'none', color: 'inherit' }}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.25rem', fontSize: '0.95rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>{item.range}</p>
              </Link>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Centreville neighborhoods we serve</h2>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>Virginia Run</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Virginia Run is Centreville&apos;s premier master-planned community — a golf-course-anchored neighborhood with pools, tennis, basketball courts, miles of trails, a clubhouse, and a strong HOA. Home prices typically range $700k–$1.2M. HOA dues run $90–$120/month, and architectural review is the most detailed in Centreville: physical material samples, color specs, structural drawings, and an in-person committee meeting. The premium pays off — Virginia Run decks tend to be the largest in our Centreville portfolio (500–800 sqft multi-level builds, $55k–$85k+, often with integrated outdoor kitchens and full lighting design). Submission packets ship 14 days before the next committee meeting; we maintain the current template.</p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>Sully Station</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>An award-winning planned community covering 1,100+ landscaped acres with roughly 1,000 residences — a mix of single-family homes and townhomes, pools, trails, and community centers. Home prices typically $550k–$850k. Architectural review averages 21–28 days. Our most common Sully Station builds: 350–500 sqft Trex Transcend rear decks with composite balustrade railings (often Spiced Rum or Tiki Torch), and screened porches added to homes whose original deck has reached end-of-life.</p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>Centre Ridge</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>A family-friendly mix of townhomes and detached single-family homes. Townhomes typically $400k–$600k. Architectural review averages 14–21 days. Townhome rear decks here are usually 200–320 sqft; detached homes range 350–500 sqft. Trex Enhance is popular for value-conscious budgets; TimberTech AZEK upgrades are common on the detached homes.</p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>Country Club Manor &amp; Chalet Woods</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Roughly 1,200 homes in an established single-family community with mature tree-lined streets and large private lots. No premium HOA architectural process — only the Fairfax County permit applies. This makes Country Club Manor / Chalet Woods our fastest-moving Centreville sub-market (typical permit-to-shovel: 5–6 weeks). Common builds: 400–600 sqft rear decks, screened porches with full ceiling and lighting, multi-level designs that step down the slope toward backyard tree lines.</p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>Newgate</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>807 homes — a mix of townhomes and detached single-family — with a community pool, pool house, basketball and tennis courts, and tot lots. Architectural review averages 14–21 days. Townhome builds here are typically 200–280 sqft with composite balustrade railings; detached homes support 400–550 sqft full-rear decks.</p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>Compton Village, London Towne, Centreville Farms, Bull Run, Cub Run, Rocky Run, Fair Lakes</h3>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>Centreville&apos;s established mid-tier neighborhoods. HOA processes vary (typically 14–21 days when one exists). London Towne and Centreville Farms are particularly active for screened-porch additions. Fair Lakes is mostly condos and townhomes — limited deck opportunity but frequent balcony and patio rebuild work. Clifton-adjacent lots west of Compton Road are larger and more rural — custom multi-level builds with outdoor kitchens are common.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Permits, HOA approval &amp; the parallel-filing advantage</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Centreville sits in Fairfax County, so deck permits follow the standard Fairfax County process administered through Land Development Services. Most builders file the county permit first, wait for it to come back, and only then submit the HOA architectural package. Serializing the submissions adds 4–6 weeks to the timeline.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>We file the Fairfax County permit and the HOA package <strong>in parallel from the day you sign the contract</strong>. By the time the county returns its first plan-review comments (typically week 3–4), the HOA is already two-thirds of the way through its own architectural review. The two approvals usually clear within a few days of each other, and construction can start immediately.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>When you need a permit:</strong> Any deck attached to your house, over 256 sqft, or more than 16.5 inches above grade.</li>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>Fairfax County plan review:</strong> 3–6 weeks via the Land Development Services portal. Permit fees scale with construction valuation.</li>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>Inspections:</strong> Footing, framing, final — Fairfax County Permit Application Center 703-222-0801.</li>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>HOA review windows:</strong> Country Club Manor / Chalet Woods none (fastest); Centre Ridge / Newgate 14–21 days; Sully Station 21–28 days; Virginia Run 21–35 days.</li>
          </ul>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>Full county walkthrough: <Link href="/deck-permit-fairfax-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Fairfax County deck permit guide</Link>.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Materials &amp; pricing for Centreville projects</h2>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #e5e5e5' }}>Where you live</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #e5e5e5' }}>Typical project</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #e5e5e5' }}>Material</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #e5e5e5' }}>Price range</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Townhome (Centre Ridge, Newgate)</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>200–320 sqft rear deck</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Trex Enhance or TimberTech EDGE</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>$22,000–$38,000</td></tr>
                <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Master-planned single-family (Sully Station)</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>350–500 sqft rear deck</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Trex Transcend or TimberTech PRO</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>$32,000–$52,000</td></tr>
                <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Established large-lot (Country Club Manor)</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>400–600 sqft, often multi-level</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Trex Transcend or TimberTech AZEK</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>$38,000–$62,000</td></tr>
                <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Premier estate (Virginia Run)</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>500–800 sqft multi-level + features</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>TimberTech AZEK Vintage / Coastline</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>$55,000–$85,000+</td></tr>
                <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Screened porch (any neighborhood)</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>250–350 sqft</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Composite + screen system + roof</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>$48,000–$78,000</td></tr>
                <tr><td style={{ padding: '0.75rem' }}>Deck + screened porch combo</td><td style={{ padding: '0.75rem' }}>400–600 sqft</td><td style={{ padding: '0.75rem' }}>Trex Transcend + EZE-Breeze panels</td><td style={{ padding: '0.75rem' }}>$52,000–$95,000</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>Centreville homeowners can use the showroom to compare deck boards, railings, lighting, fascia, and porch options before final material selection. Need payment flexibility? See <Link href="/deck-financing" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck financing options</Link>, subject to approval and provider terms.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Centreville Project Planning Example</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Deck + Screened Porch Scenario, Virginia Run</h3>
            <p style={{ lineHeight: 1.7 }}>A Centreville deck-plus-screened-porch concept might connect an open composite grilling deck to a screened porch with upgraded ceiling finish, lighting, and aluminum or composite railing. Final pricing and timeline should be confirmed after Fairfax County permit requirements, HOA rules, footing conditions, electrical needs, and material selections are reviewed. Verified project examples should be added here only after owner-supplied photos, scope, date, and permit details are available.</p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>FAQ — building a deck in Centreville</h2>
          {[
            { q: "Where is Loudoun Decks located?", a: "13704 Winding Oak Cir, Centreville, VA 20121. Office + material showroom. Open Mon-Sat 8 AM - 6 PM by appointment. We're the only deck builder in the Loudoun-Fairfax-Prince William corridor with an in-person material sampling showroom." },
            { q: "How much does a deck cost in Centreville?", a: "Centreville deck projects range from $22,000-$85,000+. Sully Station and Centre Ridge townhomes: $22k-$38k. Country Club Manor / Chalet Woods: $32k-$55k. Newgate: $26k-$48k. Virginia Run premier estates: $55k-$85k+. Composite: $40-$70/sqft." },
            { q: "Which Centreville neighborhoods do you build in most?", a: "Highest volume: Sully Station, Centre Ridge, Newgate, Country Club Manor / Chalet Woods, Virginia Run. Also: Compton Village, London Towne, Centreville Farms, Bull Run, Cub Run, Rocky Run, Fair Lakes, and Clifton-adjacent estates." },
            { q: "Do I need a permit in Centreville?", a: "Yes. Centreville is Fairfax County. Plan review through Land Development Services averages 3-6 weeks. Inspections coordinated through the Fairfax County Permit Application Center 703-222-0801." },
            { q: "Which Centreville HOA process is fastest?", a: "Country Club Manor / Chalet Woods has no premium HOA — fastest at ~14 days for permit-only. Centre Ridge and Newgate: 14-21 days. Sully Station: 21-28 days. Virginia Run: 21-35 days (most detailed review)." },
            { q: "What does the Centreville showroom offer?", a: "See and touch Trex Transcend, Trex Enhance, Trex Select, TimberTech AZEK Vintage / Harvest / Coastline, TimberTech PRO, every railing system (composite balustrade, aluminum, cable, glass), post wraps, integrated lighting, pergola components. By appointment, Mon-Sat 8 AM - 6 PM." },
            { q: "What materials work best for Centreville homes?", a: "Sully Station / Centre Ridge: Trex Transcend Spiced Rum, Tiki Torch, Havana Gold + balustrade railings. Country Club Manor: Trex Enhance Foggy Wharf or Beach Dune for value, Vintage Lantern for premium. Newgate: Trex Enhance or TimberTech EDGE. Virginia Run: TimberTech AZEK Vintage Mahogany or Coastline with cable/glass railings." },
            { q: "How long does a Centreville deck project take from contract?", a: "8-12 weeks total. Sully Station / Centre Ridge: 9-10 weeks. Country Club Manor: 10-12 weeks. Virginia Run multi-level estates: 12-16 weeks given detailed HOA review." },
            { q: "Do you build outdoor kitchens in Centreville?", a: "Yes, especially in Virginia Run, Country Club Manor, and larger Sully Station lots. Typical Centreville outdoor kitchens: $15,000-$80,000 depending on built-in appliances, counter material, electrical/gas/water." },
            { q: "Do you build screened porches in Centreville?", a: "Yes. Mature tree canopy and humid summers make screened porches especially valuable. Typical 250-350 sqft screened porch: $48,000-$78,000 including foundation, decking, screen, roof, ceiling, electric, ceiling fans." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '2.5rem 0 1rem' }}>Also Serving Nearby</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {[
              ['/deck-builder-chantilly-va', 'Chantilly'],
              ['/deck-builder-fairfax-va', 'Fairfax'],
              ['/deck-builder-vienna-va', 'Vienna'],
              ['/deck-builder-oakton-va', 'Oakton'],
              ['/deck-builder-manassas-va', 'Manassas'],
              ['/deck-builder-gainesville-va', 'Gainesville'],
              ['/deck-builder-south-riding-va', 'South Riding'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>{text}</Link>
            ))}
          </div>
        </div>
      </article>
      <section style={{ padding: '2rem 1.5rem' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><GoogleMapEmbed city="Centreville" /></div></section>
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (Google reviews) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
            <li key="/composite-deck-cost-northern-virginia" style={{ marginBottom: '0.5rem' }}><Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>How Much Does a Deck Cost in Northern Virginia? →</Link></li>
        </ul>
      </section>

      <SimpleCTA title="Visit Our Centreville Showroom" buttonText="Get Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath="/deck-builder-centreville-va" />
      <NamedAuthor context="Centreville and Northern Virginia" lastUpdated="2026-06-01" />
      <ContactHome />
    </>
  );
}
