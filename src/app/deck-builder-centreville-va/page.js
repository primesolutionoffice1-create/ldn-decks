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
import CallLink from '@/components/CallLink';
import PlanningUpdate from '@/components/PlanningUpdate';
import GeoAnswerBlock from '@/components/GeoAnswerBlock';
import CityLeadFormSection from '@/components/CityLeadFormSection';

export const metadata = buildMetadata({
  path: '/deck-builder-centreville-va',
  title: 'Deck Builder in Centreville, VA | Trex | Loudoun Decks',
  description: 'Centreville deck builder for composite deck replacement, resurfacing, screened porches, railings, and lighting. Based in Centreville. On-site estimates by appointment.',
  image: '/social/deck-builder-centreville-va-social.png',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Where is Loudoun Decks located?", acceptedAnswer: { "@type": "Answer", text: "Based in Centreville (13704 Winding Oak Cir, Centreville, VA 20121). Material samples are brought to your home during the free on-site estimate; estimate visits are scheduled by appointment. Hours are Mon–Fri 7 AM–7 PM, Sat 8 AM–5 PM, Sun closed." } },
    { "@type": "Question", name: "How much does a deck cost in Centreville?", acceptedAnswer: { "@type": "Answer", text: "Centreville deck projects typically range from a written estimate. Sully Station and Centre Ridge townhomes: a written estimate. Country Club Manor / Chalet Woods single-family: a written estimate. Newgate townhomes and detached: a written estimate. Virginia Run premier estates: a written estimate. Composite decks are priced in a written estimate depending on material grade and design complexity." } },
    { "@type": "Question", name: "Which Centreville neighborhoods do you build in?", acceptedAnswer: { "@type": "Answer", text: "We build in Sully Station, Centre Ridge, Newgate, Country Club Manor / Chalet Woods, and Virginia Run. We also build in Compton Village, London Towne, Centreville Farms, Bull Run, Cub Run, Rocky Run, Fair Lakes, and Clifton-adjacent properties." } },
    { "@type": "Question", name: "Do I need a permit in Centreville?", acceptedAnswer: { "@type": "Answer", text: "Yes. Centreville is in Fairfax County. Most decks need a Fairfax County building permit, and the thresholds and review times are set by the county, so confirm them for your address on the Fairfax County Land Development Services site or in our Fairfax County deck permit guide. Your written estimate states who prepares and submits the permit package and who schedules inspections." } },
    { "@type": "Question", name: "How long does Centreville HOA review take?", acceptedAnswer: { "@type": "Answer", text: "It depends on your community and its architectural committee, so ask your HOA for its current review window and required submission items (often material samples, color specs and structural drawings) before you set a schedule. Your written estimate states who prepares and submits the HOA package." } },
    { "@type": "Question", name: "How can I compare Trex and TimberTech samples?", acceptedAnswer: { "@type": "Answer", text: "We install Trex, TimberTech and other composite brands, including Trex Transcend, Trex Enhance, Trex Select, TimberTech AZEK, and TimberTech PRO. Material samples are brought to your home during the free on-site estimate; estimate visits are scheduled by appointment. Hours are Mon–Fri 7 AM–7 PM, Sat 8 AM–5 PM, Sun closed." } },
    { "@type": "Question", name: "What materials work best for Centreville homes?", acceptedAnswer: { "@type": "Answer", text: "Centreville is a mid-range to premium market with diverse architectural styles. Sully Station and Centre Ridge (1990s-2000s suburban): Trex Transcend Spiced Rum, Tiki Torch, or Havana Gold with classic balustrade railings. Country Club Manor (1960s-70s established): Trex Enhance Foggy Wharf or Beach Dune for value, Transcend Vintage Lantern for premium. Newgate (2000s townhomes): Trex Enhance or TimberTech EDGE for value-conscious budgets. Virginia Run (premier estates): TimberTech AZEK Vintage Mahogany or Coastline with cable or glass railings, integrated outdoor kitchens, multi-level designs." } },
    { "@type": "Question", name: "How long does a Centreville deck project take from contract?", acceptedAnswer: { "@type": "Answer", text: "Timing depends on Fairfax County plan review, your HOA's review window, material lead times and the scope of the build. Your written estimate gives a schedule for your specific project; check current Fairfax County Land Development Services review times for your permit type." } },
    { "@type": "Question", name: "Do you build outdoor kitchens in Centreville?", acceptedAnswer: { "@type": "Answer", text: "Yes, especially in Virginia Run, Country Club Manor, and the larger Sully Station lots where backyard space supports a full outdoor cooking area. Typical Centreville outdoor kitchens are priced in a written estimate depending on built-in appliances, counter material, and electrical/gas/water infrastructure. We often combine outdoor kitchens with multi-level decks for the full outdoor-living experience." } },
    { "@type": "Question", name: "Do you build screened porches in Centreville?", acceptedAnswer: { "@type": "Answer", text: "Yes — Centreville's mature tree canopy and humid summers make screened porches especially valuable. Typical 250-350 sqft Centreville screened porch: a written estimate including foundation, composite decking, screen system, roof, ceiling, electric, and ceiling fans. We frequently build screened porches connected to a new or existing open deck for the full indoor-outdoor flow." } },
  ],
};

export default function CentrevilleDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <LocalBusinessSchema city="Centreville" url="https://ldndecks.com/deck-builder-centreville-va" />
      <WebPageSchema dateModified="2026-10-25" url="https://ldndecks.com/deck-builder-centreville-va" name="Deck Builder in Centreville, VA | Trex | Loudoun Decks" description="Centreville deck builder for composite deck replacement, resurfacing, screened porches, railings, and lighting. Based in Centreville. On-site estimates by appointment." speakable />
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
          <p style={{ color: '#ccc', fontSize: '1.15rem' }}>Based in Centreville (13704 Winding Oak Cir). Material samples are brought to your home during the free on-site estimate; estimate visits are scheduled by appointment.</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/get-estimate" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Book an on-site estimate</Link>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#aaa' }}>13704 Winding Oak Cir, Centreville, VA 20121 · Mon–Fri 7 AM–7 PM, Sat 8 AM–5 PM, Sun closed</p>
        </div>
      </section>
      <CityLeadFormSection
        city="Centreville"
        county="Fairfax County"
        service="deck replacement, composite deck, or on-site estimate"
      />
      <PlanningUpdate
        market="Centreville decks in 2026"
        notes={[
          "Centreville projects should verify Fairfax County permit scope, HOA review path, and material selections before final pricing.",
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
          'Primary buyer intent: local deck builder, deck replacement, and HOA-ready composite upgrades.',
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

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Your Local Centreville Deck Builder</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Based in Centreville (13704 Winding Oak Cir). Material samples are brought to your home during the free on-site estimate; estimate visits are scheduled by appointment. Hours are Mon–Fri 7 AM–7 PM, Sat 8 AM–5 PM, Sun closed.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>We build throughout Centreville neighborhoods. Fairfax County permits, local HOA architectural reviews, soil and grade, and property-line setbacks are part of the written estimate.</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>If you live in Sully Station, Centre Ridge, Country Club Manor, Newgate, Virginia Run, Compton Village, London Towne, Bull Run, Cub Run, Rocky Run, Fair Lakes, or anywhere in 20120/20121 — we&apos;ve almost certainly built within walking distance of your home. Ask for project references in your specific community when you call.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Centreville&apos;s deck market — what we see most</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Centreville isn&apos;t one market — it&apos;s a portfolio of master-planned communities, established large-lot single-family neighborhoods, and townhome clusters from the 1980s through 2010s. Pricing, design vocabulary, and HOA process all vary by community.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Master-planned communities</strong> (Sully Station, Virginia Run, Newgate, Centre Ridge) — detailed architectural review, predictable material catalogs, well-documented setback rules. Predictable timelines.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Established large-lot single-family</strong> (Country Club Manor / Chalet Woods, Compton Village, Centreville Farms) — bigger backyards, fewer restrictions, more design freedom. Multi-level decks and outdoor kitchens common.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Townhome clusters</strong> (parts of Centre Ridge, Newgate, London Towne) — compact rear decks (180–280 sqft), HOA-managed approval, often phased rebuilds.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Clifton-adjacent estate lots</strong> — west of Compton Road, rural-zoned acreage. Custom multi-level decks, screened porches with mountain views, full outdoor kitchens.</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Book an on-site estimate</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Loudoun Decks, Centreville</p>
            <p style={{ marginBottom: '0.25rem' }}>13704 Winding Oak Cir, Centreville, VA 20121</p>
            <p style={{ marginBottom: '0.25rem' }}>Phone: <CallLink style={{ color: 'var(--color-primary)', fontWeight: 600 }}>(571) 655-7207</CallLink></p>
            <p style={{ marginBottom: '0.5rem' }}>Hours: Mon–Fri 7 AM–7 PM, Sat 8 AM–5 PM, Sun closed</p>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>We install Trex, TimberTech and other composite brands. Material samples are brought to your home during the free on-site estimate; estimate visits are scheduled by appointment.</p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Services in Centreville</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>For Centreville homeowners, our best-fit projects are full deck replacements, composite upgrades, resurfacing, screened porches, railings, lighting, and outdoor-living scopes where the structure, permit path, HOA package, and material selection need professional review.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { title: 'Custom Composite Decks', range: 'Project-specific estimate', link: '/services/new-decks' },
              { title: 'Deck Replacement', range: 'Inspection-led estimate', link: '/services/deck-replacement' },
              { title: 'Deck Resurfacing', range: 'a written estimate', link: '/services/deck-resurfacing' },
              { title: 'Screened Porches', range: 'Project-specific estimate', link: '/services/porches' },
              { title: 'Pergolas & Gazebos', range: 'a written estimate', link: '/services/gazebo-pergola' },
              { title: 'Outdoor Kitchens', range: 'a written estimate', link: '/outdoor-kitchen-builder-northern-virginia' },
              { title: 'Railings & Lighting', range: 'Add-on packages', link: '/deck-lighting-railings-stairs-addon-cost' },
              { title: 'Structural Deck Review', range: 'Inspection-led scope', link: '/services/deck-repair' },
            ].map((item) => (
              <Link key={item.title} href={item.link} style={{ display: 'block', background: '#f9f9f9', borderRadius: 8, padding: '1rem', textDecoration: 'none', color: 'inherit' }}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.25rem', fontSize: '0.95rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>{item.range}</p>
              </Link>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Centreville neighborhoods we serve</h2>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>Virginia Run</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Virginia Run is Centreville&apos;s premier master-planned community — a golf-course-anchored neighborhood with pools, tennis, basketball courts, miles of trails, a clubhouse, and a strong HOA. This page does not publish home prices for Virginia Run. HOA dues are set by the association. This page does not publish them, and architectural review is the most detailed in Centreville: physical material samples, color specs, structural drawings, and an in-person committee meeting. Projects are often multi-level, with integrated outdoor kitchens and lighting design priced in a written estimate. Submission packets ship 14 days before the next committee meeting; we maintain the current template.</p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>Sully Station</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>An award-winning planned community covering 1,100+ landscaped acres with roughly 1,000 residences — a mix of single-family homes and townhomes, pools, trails, and community centers. Home prices typically a written estimate. Architectural review averages 21–28 days. Our most common Sully Station builds: 350–500 sqft Trex Transcend rear decks with composite balustrade railings (often Spiced Rum or Tiki Torch), and screened porches added to homes whose original deck has reached end-of-life.</p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>Centre Ridge</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>A family-friendly mix of townhomes and detached single-family homes. Townhomes typically a written estimate. Architectural review averages 14–21 days. Townhome rear decks here are usually 200–320 sqft; detached homes range 350–500 sqft. Trex Enhance is popular for value-conscious budgets; TimberTech AZEK upgrades are common on the detached homes.</p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>Country Club Manor &amp; Chalet Woods</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Roughly 1,200 homes in an established single-family community with mature tree-lined streets and large private lots. No premium HOA architectural process — only the Fairfax County permit applies. This makes Country Club Manor / Chalet Woods our fastest-moving Centreville sub-market (typical permit-to-shovel: 5–6 weeks). Common builds: 400–600 sqft rear decks, screened porches with full ceiling and lighting, multi-level designs that step down the slope toward backyard tree lines.</p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>Newgate</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>807 homes — a mix of townhomes and detached single-family — with a community pool, pool house, basketball and tennis courts, and tot lots. Architectural review averages 14–21 days. Townhome builds here are typically 200–280 sqft with composite balustrade railings; detached homes support 400–550 sqft full-rear decks.</p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>Compton Village, London Towne, Centreville Farms, Bull Run, Cub Run, Rocky Run, Fair Lakes</h3>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>Centreville&apos;s established mid-tier neighborhoods. HOA processes vary by community; ask your association for its current review window. London Towne and Centreville Farms are particularly active for screened-porch additions. Fair Lakes is mostly condos and townhomes — limited deck opportunity but frequent balcony and patio rebuild work. Clifton-adjacent lots west of Compton Road are larger and more rural — custom multi-level builds with outdoor kitchens are common.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Permits, HOA approval &amp; the parallel-filing advantage</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Centreville sits in Fairfax County, so deck permits follow the standard Fairfax County process administered through Land Development Services. Submitting the county permit and the HOA architectural package one after the other can lengthen the timeline, so ask your contractor which submissions can go in at the same time where your HOA allows it.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Your written estimate states who prepares and submits the Fairfax County permit application and the HOA package, and which submissions can go in at the same time. County review times and HOA review windows change, so confirm both for your address before planning a start date.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>When you need a permit:</strong> Most decks do; confirm the current Fairfax County requirements for your address before you decide a deck is exempt.</li>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>Fairfax County plan review:</strong> handled through the Land Development Services portal; check the county for current review times and fees.</li>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>Inspections:</strong> the county sets the inspection steps for your permit; ask your contractor to name each inspection and who books it.</li>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>HOA review windows:</strong> vary by community and committee; ask your association for its current window and submission checklist.</li>
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
                <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Townhome (Centre Ridge, Newgate)</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>200–320 sqft rear deck</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Trex Enhance or TimberTech EDGE</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>a written estimate</td></tr>
                <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Master-planned single-family (Sully Station)</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>350–500 sqft rear deck</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Trex Transcend or TimberTech PRO</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>a written estimate</td></tr>
                <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Established large-lot (Country Club Manor)</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>400–600 sqft, often multi-level</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Trex Transcend or TimberTech AZEK</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>a written estimate</td></tr>
                <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Premier estate (Virginia Run)</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>500–800 sqft multi-level + features</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>TimberTech AZEK Vintage / Coastline</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>a written estimate</td></tr>
                <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Screened porch (any neighborhood)</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>250–350 sqft</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Composite + screen system + roof</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>a written estimate</td></tr>
                <tr><td style={{ padding: '0.75rem' }}>Deck + screened porch combo</td><td style={{ padding: '0.75rem' }}>400–600 sqft</td><td style={{ padding: '0.75rem' }}>Trex Transcend + EZE-Breeze panels</td><td style={{ padding: '0.75rem' }}>a written estimate</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>Material samples are brought to your home during the free on-site estimate so you can compare deck boards, railings, lighting, fascia, and porch options before final material selection. Need payment flexibility? See <Link href="/deck-financing" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck financing options</Link>, subject to approval and provider terms.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Centreville Project Planning Example</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Deck + Screened Porch Scenario, Virginia Run</h3>
            <p style={{ lineHeight: 1.7 }}>A Centreville deck-plus-screened-porch concept might connect an open composite grilling deck to a screened porch with upgraded ceiling finish, lighting, and aluminum or composite railing. Final pricing and timeline should be confirmed after Fairfax County permit requirements, HOA rules, footing conditions, electrical needs, and material selections are reviewed.</p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>FAQ — building a deck in Centreville</h2>
          {faqSchema.mainEntity.map((faq) => (
            <details key={faq.name} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.name}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.acceptedAnswer.text}</p>
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

      <SimpleCTA title="Book an on-site estimate" buttonText="Get Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath="/deck-builder-centreville-va" />
      <NamedAuthor context="Centreville and Northern Virginia" lastUpdated="2026-10-25" />
      <ContactHome />
    </>
  );
}
