import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import SimpleCTA from '@/components/SimpleCTA';
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
  path: '/deck-builder-tysons-va',
  title: 'Deck Builder in Tysons, VA | Modern Composite Decks | LDN Decks',
  description: 'Custom deck builder in Tysons, VA. Google reviews. Modern composite decks & rooftop terraces for Tysons townhomes and condos. Free estimate. (571) 655-7207.',
  image: '/social/deck-builder-tysons-va-social.png',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Can you build a deck on a Tysons townhome?", acceptedAnswer: { "@type": "Answer", text: "Yes. Many newer Tysons townhomes have small rear yards or rooftop terraces that are perfect for compact composite decks (150-300 sqft). We design space-efficient outdoor living that maximizes smaller Tysons lots." } },
    { "@type": "Question", name: "How much does a deck cost in Tysons?", acceptedAnswer: { "@type": "Answer", text: "Tysons deck projects range from $18,000-$50,000. Compact townhome decks: $18k-$30k. Single-family with screened porch: $35k-$50k. Composite: $40-$65/sqft installed." } },
    { "@type": "Question", name: "Which Tysons neighborhoods do you serve most often?", acceptedAnswer: { "@type": "Answer", text: "Our largest single-family-home volume in the Tysons area comes from Pimmit Hills (no mandatory HOA, quarter to one-third acre lots, 1950s-era ranches and Cape Cods often expanding with full rear decks and screened porches), Old Courthouse between Tysons and Vienna, and the Westgate Elementary area. Our compact-deck work concentrates in The Boro, One Park Crest, and the Ovation at Park Crest townhome and condo communities along the Tysons Corner urban core." } },
    { "@type": "Question", name: "Do I need a deck permit in Tysons? What's the Fairfax County process?", acceptedAnswer: { "@type": "Answer", text: "Yes for any deck attached to your house, over 256 sqft, or more than 16.5 inches above grade. Fairfax County deck construction is regulated by the setback table in Section 5100.1 of the Zoning Ordinance (decks can extend into setbacks within published limits). Within the Tysons Urban Center, the Planned Tysons Corner (PTC) District adds Comprehensive Plan design overlays. Permit Application Center 703-222-0801; review averages 3-6 weeks. We file the application as part of every Tysons project." } },
    { "@type": "Question", name: "What about HOA approval for Tysons condos and townhomes?", acceptedAnswer: { "@type": "Answer", text: "Most Tysons-core communities (The Boro, One Park Crest, Ovation at Park Crest, Lerner-built townhomes) are managed by professional firms like FirstService Residential. Architectural Review timing typically depends on the manager's calendar and the completeness of the material samples, renderings, and structural drawings. Pimmit Hills single-family homes have no mandatory HOA, which can make the approval path simpler than condo or townhome communities." } },
    { "@type": "Question", name: "What materials work best for the Tysons modern aesthetic?", acceptedAnswer: { "@type": "Answer", text: "Tysons leans contemporary: dark composite colors (Trex Transcend Lava Rock, TimberTech AZEK Dark Hickory, Vintage Mahogany), black or bronze aluminum cable railings, integrated low-voltage LED lighting, and clean linear pergolas. For light/coastal counterpoints we use TimberTech AZEK Coastline or Trex Transcend Tiki Torch. PVC decking (AZEK) outperforms composite on south-facing high-rise terraces where surface temperature matters." } },
    { "@type": "Question", name: "Do you build rooftop terraces and balcony decks in Tysons?", acceptedAnswer: { "@type": "Answer", text: "Yes. Rooftop terraces and elevated balcony rebuilds are common in Tysons-core townhomes. These projects require structural load review (often engineer-stamped), waterproof membrane coordination with the existing roof system, code-compliant guardrails 42 inches high, and association approval. AZEK or aluminum pedestal systems are typical; we coordinate with the building's roofing contractor when needed." } },
    { "@type": "Question", name: "How long does a Tysons deck project take from contract to walkthrough?", acceptedAnswer: { "@type": "Answer", text: "From signed contract: 8-12 weeks total. That includes 3-4 weeks for Fairfax County permit, 2-4 weeks for HOA/condo association approval (often runs in parallel with permit), 1-3 weeks for material delivery, and 1-3 weeks for construction depending on size. Compact 200 sqft townhome decks typically finish in 9-10 weeks; larger Pimmit Hills full-rear decks finish in 10-12 weeks." } },
    { "@type": "Question", name: "Can homeowners in Pimmit Hills add screened porches?", acceptedAnswer: { "@type": "Answer", text: "Yes — and it's one of the most popular Pimmit Hills upgrades because the 1950s ranches and Cape Cods originally had no rear outdoor living space. Quarter-acre lots with mature trees make screened porches especially valuable here. Typical Pimmit Hills screened porch builds run $48,000-$78,000 including foundation, composite decking, screen system, roof, and electric." } },
  ],
};

export default function TysonsDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <LocalBusinessSchema city="Tysons" url="https://ldndecks.com/deck-builder-tysons-va" />
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/deck-builder-tysons-va" name="Deck Builder in Tysons, VA | Modern Composite Decks | LDN Decks" description="Custom deck builder in Tysons, VA. Google reviews. Modern composite decks &amp; rooftop terraces for Tysons townhomes and condos. Free estimate. (571) 655-7207." speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Modern Deck Builder in Tysons, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Compact, modern composite decks &amp; terraces for Tysons townhomes &amp; single-family homes</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/get-estimate" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Estimate</Link>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#aaa' }}>Public review profiles · Licensed &amp; Insured · Written scope and warranty details provided before contract</p>
        </div>
      </section>
      <PlanningUpdate
        market="Tysons decks in 2026"
        notes={[
          "Tysons projects should separate Pimmit Hills single-family work from urban-core townhome, condo, rooftop, and balcony scopes before pricing.",
          "Fairfax County permits, association rules, load review, waterproofing, and railing height can all change the path for compact Tysons builds.",
          "Rooftop and terrace projects need earlier coordination around structure, membrane protection, drainage, and association approvals than ground-level decks."
        ]}
        links={[
          { href: "/deck-permit-fairfax-county-virginia", label: "Fairfax permit guide" },
          { href: "/deck-railing-options-northern-virginia", label: "Railing options" },
          { href: "/trex-vs-timbertech-vs-azek", label: "Material comparison" }
        ]}
      />
      <GeoAnswerBlock
        question="What should Tysons homeowners check before planning a deck or terrace?"
        answer="Tysons deck projects should first separate urban-core terrace, balcony, rooftop, townhome, and Pimmit Hills single-family scopes because each path changes structure, waterproofing, association review, permit details, railing height, and material selection. Loudoun Decks plans compact composite decks and outdoor living upgrades around Fairfax County requirements and the tighter access conditions common near Tysons."
        facts={[
          'Primary buyer intent: compact composite decks, rooftop terraces, townhome upgrades, and association-ready planning.',
          'Proof status: rooftop, condo, and neighborhood project claims require proof-lock before public use.',
          'Conversion path: Fairfax permit guide, railing options, material comparison, and written estimate.'
        ]}
        links={[
          { href: '/deck-permit-fairfax-county-virginia', label: 'Fairfax permit guide' },
          { href: '/deck-railing-options-northern-virginia', label: 'Railing options' },
          { href: '/get-estimate', label: 'Get a Tysons estimate' }
        ]}
      />
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img35.jpeg"
              alt="Premium custom deck built by LDN Decks in Tysons, Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Tysons Modern Living in Northern Virginia’s Hub</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Tysons has evolved from a suburban office park into a walkable urban center with luxury townhomes, mixed-use developments, and established single-family neighborhoods. Deck projects here range from sleek, compact rooftop terraces on new construction to full-size outdoor living expansions on established properties near Tysons Corner.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Modern aesthetic:</strong> Clean lines, aluminum or cable railings, dark composite colors (Lava Rock, Dark Hickory) matching Tysons&apos; contemporary architecture</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Townhome specialists:</strong> Compact 150-300 sqft builds that maximize small rear yards and rooftop spaces</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>High-rise adjacent:</strong> We work with HOAs and management companies in Tysons&apos; newer communities</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Fairfax County permitting:</strong> <Link href="/deck-permit-fairfax-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Permit guide</Link></li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>The two Tysons deck markets we serve</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Tysons isn&apos;t one market — it&apos;s two, and they call for different design vocabularies, permit paths, and price points. Understanding which Tysons you live in is the difference between a 9-week build and a 14-week one.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>The Tysons urban core</strong> — The Boro, One Park Crest, Ovation at Park Crest, and the newer Metro-oriented mixed-use blocks — is dense, vertical, and architecturally contemporary. Projects here are compact (150–300 sqft), often involve rooftop terraces or balcony rebuilds, and require coordination with professional management firms like FirstService Residential. Material specifications skew dark and modern (Lava Rock, Dark Hickory, Vintage Mahogany), railings are almost always black aluminum or cable, and lighting is integrated into the deck itself. Architectural Review approvals typically take 2–4 weeks.</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}><strong>The single-family Tysons</strong> — Pimmit Hills, Old Courthouse, the Westgate Elementary area — sits just outside the Beltway ring around Tysons Corner Center. These are 1950s-era ranches, expanded Cape Cods, and a growing inventory of new-construction Contemporary and Craftsman townhomes on quarter to one-third acre lots. Pimmit Hills has no mandatory HOA, which can simplify the approval path compared with managed condo or townhome communities. Projects here look more like Vienna or McLean builds: 350–600 sqft rear decks, screened porches added to homes that originally had none, and full outdoor-living layouts.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Tysons neighborhoods we serve</h2>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>Pimmit Hills</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Established in 1950 as a subdivision for World War II and Korean War veterans, Pimmit Hills is one of the closest residential neighborhoods to Tysons Corner Center. Single-family homes here typically sit on quarter to one-third acre lots, ranging from original 50s-era two-bed Cape Cods (often under 1,000 sqft) to newer Craftsman and Traditional rebuilds at $850k–$2M. There is no mandatory HOA — homeowners can ship a permitted deck project on a faster timeline than almost any other Tysons-adjacent neighborhood. Our most common Pimmit Hills builds: 400–550 sqft rear composite decks with screened porches, full outdoor kitchens on the half-acre lots, and deck-plus-paver-patio combos that extend usable yard space toward mature tree lines.</p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>Old Courthouse</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Tucked between Tysons and Vienna, Old Courthouse is a popular established neighborhood with easy Metro access. Lots are larger than the Tysons urban core but smaller than Pimmit Hills. Old Courthouse homeowners typically request mid-tier composite decks ($35k–$55k range), full pergola-and-pavers combinations, and screened porches that complement the area&apos;s mature landscape. HOA structures vary block by block.</p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>The Boro &amp; the Tysons urban core</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>The Boro is a Meridian Group-developed mixed-use neighborhood with roughly 700 residential units, 500,000 sqft of office, and 250,000 sqft of retail anchored at Greensboro Drive. Townhome and condo residents call us for compact rear decks (often under 250 sqft), rooftop terrace builds, and balcony rebuilds. One Park Crest (the 19-story, 335-unit condo) and Ovation at Park Crest similarly drive demand for elevated terrace work. All Tysons-core projects require Architectural Review through the building&apos;s management firm in addition to the Fairfax County building permit.</p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>Westgate Elementary area &amp; perimeter</h3>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>The blocks served by Westgate Elementary and Lemon Road Elementary form a family-oriented perimeter ring west and south of Tysons Corner Center. These are mid-century single-family homes with the same deck-expansion patterns as Pimmit Hills — full rear decks, screened porches, and the occasional second-story deck off of an addition.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Materials &amp; pricing for Tysons projects</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Tysons pricing breaks along the same two-market line as the geography. Compact urban-core projects favor premium PVC (lower expansion, better high-rise temperature behavior); Pimmit Hills and Old Courthouse projects typically use mid-to-premium composite.</p>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #e5e5e5' }}>Project type</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #e5e5e5' }}>Typical size</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #e5e5e5' }}>Material</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #e5e5e5' }}>Price range</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Tysons-core townhome deck</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>150–250 sqft</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>TimberTech AZEK or Trex Transcend</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>$18,000–$30,000</td></tr>
                <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Rooftop terrace / balcony rebuild</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>200–400 sqft</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>AZEK pedestal or aluminum frame</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>$28,000–$58,000</td></tr>
                <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Pimmit Hills full rear deck</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>400–550 sqft</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Trex Transcend or TimberTech PRO</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>$32,000–$52,000</td></tr>
                <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Pimmit Hills screened porch</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>250–350 sqft</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Composite + screen system + roof</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>$48,000–$78,000</td></tr>
                <tr><td style={{ padding: '0.75rem' }}>Old Courthouse multi-level deck</td><td style={{ padding: '0.75rem' }}>500–700 sqft</td><td style={{ padding: '0.75rem' }}>TimberTech PRO Legacy or AZEK Vintage</td><td style={{ padding: '0.75rem' }}>$52,000–$85,000</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>Tysons estimates can include design visualization where the scope calls for it, so homeowners can evaluate layout, railing, stairs, privacy, and material choices before final approval. Need to spread the cost? <Link href="/deck-financing" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck financing options</Link> may be available, subject to approval and provider terms.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Permits &amp; HOA approval for Tysons</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Tysons sits within the Fairfax County <strong>Planned Tysons Corner (PTC) District</strong> — a special zoning overlay created to implement the Tysons Comprehensive Plan&apos;s vision of a walkable urban center. For most residential deck projects, the PTC overlay means coordinating the Fairfax County building permit (Section 5100 of the Zoning Ordinance covers deck setback rules and Table 5100.1 lists allowed extensions into setbacks) with any community-specific design controls.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>Fairfax County permit:</strong> Plan review takes 3–6 weeks. Online via the Department of Land Development Services portal. Permit fees are based on construction valuation. Inspections required at footing, framing, and final.</li>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>HOA / condo association approval:</strong> Tysons-core communities (The Boro, One Park Crest, Ovation, Lerner townhomes) typically require material samples, color specs, and engineered drawings. Approval averages 2–4 weeks via FirstService Residential or the building&apos;s property-management team.</li>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>Pimmit Hills:</strong> No mandatory HOA. Only the Fairfax County permit applies, which is one reason Pimmit Hills projects move 3–4 weeks faster than Tysons-core builds.</li>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>Parallel planning where feasible:</strong> county and HOA packages should be prepared together when the association allows it, reducing preventable waiting time.</li>
          </ul>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>Full county-specific walkthrough: <Link href="/deck-permit-fairfax-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Fairfax County deck permit guide</Link>.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Tysons Project Planning Example</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>220 sqft Modern Townhome Deck Scenario</h3>
            <p style={{ lineHeight: 1.7 }}>A compact Tysons townhome concept might use TimberTech AZEK or Trex boards, black aluminum or cable railing, low-profile lighting, and planter integration to maximize a small rear yard or terrace. Final pricing and timeline should be confirmed after Fairfax County requirements, association rules, access constraints, and waterproofing details are reviewed. Verified project examples should be added here only after owner-supplied photos, scope, date, and approval details are available.</p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Why Tysons homeowners choose Loudoun Decks</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Trex product-line planning</strong> — Trex product-line familiarity and manufacturer-aligned installation practices.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>TimberTech and AZEK product planning</strong> — manufacturer-trained on PVC pedestal systems used in Tysons-core rooftop projects.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>VA Class A Contractor License</strong> — licensing and insurance details can be included with HOA or association packets when requested.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Coordinated project team</strong> — scope, access, material delivery, and site protection are planned before construction begins.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Warranty clarity</strong> — workmanship and manufacturer material warranty details should be confirmed in the written proposal for the selected system.</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>FAQ — building a deck in Tysons</h2>
          {[
            { q: "Can you build a deck on a Tysons townhome?", a: "Yes. Many newer Tysons townhomes have small rear yards or rooftop terraces that are perfect for compact composite decks (150-300 sqft). We design space-efficient outdoor living that maximizes smaller Tysons lots." },
            { q: "How much does a deck cost in Tysons?", a: "Tysons deck projects range from $18,000-$78,000+ depending on location and scope. Compact townhome decks: $18k-$30k. Rooftop terraces: $28k-$58k. Pimmit Hills full-rear decks: $32k-$52k. Old Courthouse multi-level: $52k-$85k. Pimmit Hills screened porches: $48k-$78k." },
            { q: "Which Tysons neighborhoods do you serve most often?", a: "Our largest single-family-home volume in the Tysons area comes from Pimmit Hills (no mandatory HOA), Old Courthouse between Tysons and Vienna, and the Westgate Elementary area. Our compact-deck work concentrates in The Boro, One Park Crest, and Ovation at Park Crest." },
            { q: "Do I need a deck permit in Tysons? What's the Fairfax County process?", a: "Yes for any deck attached to your house, over 256 sqft, or more than 16.5 inches above grade. Fairfax County deck construction is regulated by setback Table 5100.1 in the Zoning Ordinance. Within the Tysons Urban Center, the Planned Tysons Corner (PTC) District adds Comprehensive Plan design overlays. Permit Application Center 703-222-0801; review averages 3-6 weeks." },
            { q: "What about HOA approval for Tysons condos and townhomes?", a: "Most Tysons-core communities (The Boro, One Park Crest, Ovation at Park Crest, Lerner-built townhomes) are managed by firms like FirstService Residential. Architectural Review typically takes 2-4 weeks once we submit material samples, renderings, and structural drawings. Pimmit Hills single-family homes have no mandatory HOA." },
            { q: "What materials work best for the Tysons modern aesthetic?", a: "Dark composite colors (Trex Transcend Lava Rock, TimberTech AZEK Dark Hickory, Vintage Mahogany), black or bronze aluminum cable railings, integrated low-voltage LED lighting. For light/coastal contrast: TimberTech AZEK Coastline or Trex Transcend Tiki Torch. PVC (AZEK) outperforms composite on south-facing rooftop terraces." },
            { q: "Do you build rooftop terraces and balcony decks in Tysons?", a: "Yes. Rooftop terraces and elevated balcony rebuilds are common in Tysons-core townhomes. These require structural load review (often engineer-stamped), waterproof membrane coordination, 42-inch guardrails, and association approval. AZEK or aluminum pedestal systems are typical." },
            { q: "How long does a Tysons deck project take from contract to walkthrough?", a: "8-12 weeks total. That includes 3-4 weeks for Fairfax County permit, 2-4 weeks for HOA approval (parallel with permit), 1-3 weeks for material delivery, and 1-3 weeks for construction. Compact townhome decks: 9-10 weeks. Pimmit Hills full-rear decks: 10-12 weeks." },
            { q: "Can homeowners in Pimmit Hills add screened porches?", a: "Yes — and it's one of the most popular Pimmit Hills upgrades because the 1950s ranches originally had no rear outdoor living space. Quarter-acre lots with mature trees make screened porches especially valuable here. Typical Pimmit Hills screened porches: $48,000-$78,000 including foundation, decking, screen, roof, and electric." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '2.5rem 0 1rem' }}>Also Serving</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {[
              ['/deck-builder-vienna-va', 'Vienna'],
              ['/deck-builder-mclean-va', 'McLean'],
              ['/deck-builder-falls-church-va', 'Falls Church'],
              ['/deck-builder-fairfax-va', 'Fairfax'],
              ['/deck-builder-oakton-va', 'Oakton'],
              ['/deck-builder-reston-va', 'Reston'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>{text}</Link>
            ))}
          </div>
        </div>
      </article>
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (Google reviews) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
            <li key="/composite-deck-cost-northern-virginia" style={{ marginBottom: '0.5rem' }}><Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>How Much Does a Deck Cost in Northern Virginia? →</Link></li>
            <li key="/services/new-decks" style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building Services →</Link></li>
        </ul>
      </section>

      <SimpleCTA title="Modern Deck for Modern Living" buttonText="Get Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath="/deck-builder-tysons-va" />
      <NamedAuthor context="Tysons and Northern Virginia" lastUpdated="2026-06-01" />
      <ContactHome />
    </>
  );
}
