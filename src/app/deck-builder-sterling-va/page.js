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
import CityAuthorityExpansion from '@/components/CityAuthorityExpansion';
import PlanningUpdate from '@/components/PlanningUpdate';
import GeoAnswerBlock from '@/components/GeoAnswerBlock';

export const metadata = buildMetadata({
  path: '/deck-builder-sterling-va',
  title: 'Deck Builder in Sterling, VA | Trex | Loudoun Decks',
  description: 'Trusted deck builder in Sterling, VA. Google reviews. Trex & TimberTech decks, screened porches. Loudoun County permits & HOA handled. Free estimate. (571) 655-7207.',
  image: '/social/deck-builder-sterling-va-social.png',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a deck cost in Sterling, VA?", acceptedAnswer: { "@type": "Answer", text: "Sterling deck projects range from $22,000-$140,000+. Townhome rear decks (Sterling Park, Algonkian, parts of Cascades): $22k-$36k. Single-family rebuilds on existing framing (Sugarland Run, Countryside): $28k-$52k. Multi-level decks (Lowes Island, Potomac Falls, Countryside Estates): $48k-$85k. Full outdoor-living packages with screened porch + outdoor kitchen: $65k-$140k+. Composite at $35-$60/sqft installed." } },
    { "@type": "Question", name: "Do I need a permit for a deck in Sterling?", acceptedAnswer: { "@type": "Answer", text: "Yes Sterling is in Loudoun County. Building permits required with plan review typically 10-15 business days the fastest in Northern Virginia. We handle all submissions." } },
    { "@type": "Question", name: "Can you build decks on Sterling townhomes?", acceptedAnswer: { "@type": "Answer", text: "Yes we regularly build and replace decks on Sterling townhomes in Sugarland Run, Cascades and Sterling Park. Townhome projects require HOA architectural review and often have specific material and color requirements. We handle HOA submissions as part of our process." } },
    { "@type": "Question", name: "How long does a deck project take in Sterling?", acceptedAnswer: { "@type": "Answer", text: "Many Sterling deck projects take 2-3 weeks from permit approval to completion. Total timeline depends on Loudoun County review, HOA review, material delivery, weather, access, and project complexity." } },
    { "@type": "Question", name: "What warranty do you provide on Sterling deck builds?", acceptedAnswer: { "@type": "Answer", text: "Workmanship terms are confirmed in the written proposal for the selected scope. Trex and TimberTech composite materials carry separate manufacturer warranties that vary by product line and installation requirements." } },
    { "@type": "Question", name: "Can you build decks in Sterling during winter?", acceptedAnswer: { "@type": "Answer", text: "Yes we build year-round in Sterling. Composite materials install in any temperature, and Loudoun County processes permits through the winter. Off-season builds often mean shorter scheduling queues and faster project starts." } },
    { "@type": "Question", name: "Why is Sterling such a high-volume deck market?", acceptedAnswer: { "@type": "Answer", text: "Sterling has a large concentration of homes built between the late 1980s and mid-2010s, so many original pressure-treated decks now need inspection, resurfacing, or replacement. Loudoun County permit timelines and proximity to our service base can also make Sterling projects practical to schedule." } },
    { "@type": "Question", name: "Can we resurface an existing Sterling deck instead of rebuilding?", acceptedAnswer: { "@type": "Answer", text: "Often yes. If the original framing (joists, beams, ledger, posts) inspects sound — typically about 40% of 15-year-old Sterling builder decks — we resurface: tear off surface boards and railings, replace with composite, upgrade railings. Saves 40-60% versus full tear-down. Typical Sterling resurface: $18,000-$30,000 for 300-500 sqft. The diagnostic visit is free." } },
    { "@type": "Question", name: "Which Sterling sub-markets do you serve most often?", acceptedAnswer: { "@type": "Answer", text: "Common Sterling planning areas include Sugarland Run, Countryside and Countryside Estates, Cascades, Lowes Island, Potomac Falls, Sterling Park, Algonkian, Great Falls Chase, and Rivermere. Each has its own HOA process and material preferences, so requirements should be checked before submission." } },
  ],
};

export default function SterlingDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <LocalBusinessSchema city="Sterling" url="https://ldndecks.com/deck-builder-sterling-va" />
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/deck-builder-sterling-va" name="Deck Builder in Sterling, VA | Trex | Loudoun Decks" description="Trusted deck builder in Sterling, VA. Google reviews. Trex &amp; TimberTech decks, screened porches. Loudoun County permits &amp; HOA handled. Free estimate. (571) 655-7207." speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Custom Deck Builder in Sterling, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Composite decks, screened porches &amp; outdoor living for Sterling homeowners</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/get-estimate" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Estimate</Link>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#aaa' }}>Public review profiles · Licensed &amp; Insured · Written scope and warranty details provided before contract</p>
        </div>
      </section>
      <PlanningUpdate
        market="Sterling decks in 2026"
        notes={[
          "Sterling remains a strong replacement and resurfacing market because many builder-grade wood decks are now old enough to require structural review.",
          "Sugarland Run, Countryside, Cascades, Lowes Island, and Potomac Falls each need HOA-specific material, railing, and color planning.",
          "A resurfacing recommendation should follow a frame inspection; ledger, joist, post, and footing issues can shift the project into full replacement."
        ]}
        links={[
          { href: "/deck-permit-loudoun-county-virginia", label: "Loudoun permit guide" },
          { href: "/deck-resurfacing-vs-replacement", label: "Resurface vs replace" },
          { href: "/deck-safety-inspection-checklist", label: "Safety checklist" }
        ]}
      />
      <GeoAnswerBlock
        question="When should Sterling homeowners resurface versus replace a deck?"
        answer="Sterling homeowners should only choose resurfacing after the frame, ledger, joists, posts, stairs, railings, and footings are inspected. Many Sterling decks in Sugarland Run, Countryside, Cascades, Lowes Island, and Potomac Falls are old enough to need structural review before composite boards, railings, lighting, Loudoun County permits, and HOA requirements are finalized."
        facts={[
          'Primary buyer intent: deck replacement, resurfacing, Loudoun permit planning, and HOA-ready composite upgrades.',
          'Conversion path: resurface-vs-replace guide, Loudoun permit guide, safety checklist, and written estimate.'
        ]}
        links={[
          { href: '/deck-resurfacing-vs-replacement', label: 'Resurface vs replace' },
          { href: '/deck-permit-loudoun-county-virginia', label: 'Loudoun permit guide' },
          { href: '/get-estimate', label: 'Get a Sterling estimate' }
        ]}
      />
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img33.jpeg"
              alt="Premium custom deck built by LDN Decks in Sterling, Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Sterling Upgrading Loudoun&apos;s Mature Neighborhoods</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Sterling is one of the closest established Loudoun County markets to our team, with strong demand for deck upgrades in communities like Sugarland Run, Countryside, Cascades, and Lowes Island. Many Sterling homeowners are replacing 15-20 year old wood decks with modern composite after a structural review.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Loudoun County fastest permits in NoVA:</strong> 10-15 business days vs 3-6 weeks in Fairfax</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Deck replacement specialists:</strong> Many Sterling decks built 2005-2010 are now due for replacement</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>HOA planning:</strong> Sugarland Run, Countryside, Cascades, and Potomac Falls each need community-specific requirements checked before submission</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Close to HQ:</strong> Sterling is a nearby service market, which helps with estimate scheduling and site review logistics</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Services in Sterling</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { title: 'Composite Decks', range: '$20k–$50k', link: '/services/new-decks' },
              { title: 'Deck Resurfacing', range: '$15k–$30k+', link: '/services/deck-resurfacing' },
              { title: 'Screened Porches', range: '$22k–$55k', link: '/services/porches' },
              { title: 'Pergolas', range: '$8k–$25k', link: '/services/gazebo-pergola' },
              { title: 'Fencing', range: '$4k–$12k', link: '/services/fence' },
              { title: 'Deck Staining', range: '$600–$2k', link: '/deck-staining-northern-virginia' },
            ].map((item) => (
              <Link key={item.title} href={item.link} style={{ display: 'block', background: '#f9f9f9', borderRadius: 8, padding: '1rem', textDecoration: 'none', color: 'inherit' }}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.25rem', fontSize: '0.95rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>{item.range}</p>
              </Link>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Sterling Project Planning Example</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Screened Porch Conversion Scenario, Sugarland Run</h3>
            <p style={{ lineHeight: 1.7 }}>A Sterling screened porch conversion might reuse an existing frame only if the inspection confirms the ledger, joists, posts, beams, and footings are sound. Common upgrades include composite surface boards, railing changes, ceiling finish, fans, lighting, and screened or EZE-Breeze-style panels. Verified project examples should be added here only after owner-supplied photos, scope, date, and permit or HOA details are available.</p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Sterling Neighborhoods We Build In</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Sterling is one of Loudoun County&apos;s most mature residential markets — most homes were built between the late 1980s and mid-2010s, which means the original builder-grade pressure-treated decks installed at the time are now 15-25 years old and at end of design life. That makes Sterling a strong market for deck replacement and resurfacing planning.</p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '1.25rem', marginBottom: '0.5rem' }}>Sugarland Run</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Sugarland Run is one of Sterling&apos;s largest established communities — single-family homes and townhomes on tree-lined streets in the eastern Sterling area. The Sugarland Run HOA architectural review often requires material and color documentation. Common Sugarland Run scopes include 350-500 sqft Trex Transcend rear decks, screened porch conversions on top of inspected existing decks, and full builder-deck rebuilds. Pricing tier: $26k-$48k for standard composite, $32k-$58k for screened porch conversions.</p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '1.25rem', marginBottom: '0.5rem' }}>Countryside &amp; Countryside Estates</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Countryside is the Cascades-adjacent established community with strong ARC presence. Architectural review averages 14-21 days. Trex Transcend in Spiced Rum and Havana Gold are popular here; composite balustrade railings preferred over cable. Countryside Estates (the sub-community of larger detached homes) supports multi-level builds and outdoor kitchens on lots backing to common-area buffers. Pricing: $32k-$58k standard, $48k-$85k for multi-level with outdoor kitchen.</p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '1.25rem', marginBottom: '0.5rem' }}>Cascades &amp; Lowes Island</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Cascades is the larger master-planned community covering much of Sterling&apos;s western section, with Lowes Island as the higher-end sub-community. Cascades ARC review averages 14-21 days and is one of the more flexible in Sterling on cable rail and modern railings when the lot context supports it. Lowes Island lots are larger and command premium materials — TimberTech AZEK Vintage Mahogany is common here. Pricing tier: $35k-$65k Cascades standard, $48k-$95k Lowes Island multi-level.</p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '1.25rem', marginBottom: '0.5rem' }}>Potomac Falls</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Potomac Falls is the higher-end community near the Potomac River with larger lots, mature trees, and a more established design vocabulary. ARC review averages 18-25 days. Multi-level decks following the slope toward the river are common, often with cable railings to preserve views. Pricing: $48k-$85k standard, $75k-$140k for full outdoor-living packages.</p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '1.25rem', marginBottom: '0.5rem' }}>Sterling Park, Algonkian, Great Falls Chase &amp; Rivermere</h3>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>These mid-tier Sterling communities cover the broader residential mix — established 1980s-1990s single-family homes and townhomes, generally with predictable HOA processes (14-18 day review averages). Common builds here are composite rebuilds of original wood decks, screened porch additions, and the occasional outdoor kitchen integration. Pricing tier: $22k-$42k for standard composite builds.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Materials &amp; Pricing Tiers for Sterling</h2>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #e5e5e5' }}>Project type</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #e5e5e5' }}>Typical size</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #e5e5e5' }}>Common neighborhoods</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #e5e5e5' }}>Price range</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Townhome rear deck</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>200-300 sqft</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Sterling Park, Algonkian, parts of Cascades</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>$22,000-$36,000</td></tr>
                <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Single-family rebuild (replace builder deck)</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>350-500 sqft</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Sugarland Run, Countryside, Cascades</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>$28,000-$52,000</td></tr>
                <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Screened porch conversion (existing frame)</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>300-400 sqft</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>All Sterling sub-markets</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>$32,000-$58,000</td></tr>
                <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Multi-level deck (Lowes Island / Potomac Falls)</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>500-700 sqft</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Lowes Island, Potomac Falls, Countryside Estates</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>$48,000-$85,000</td></tr>
                <tr><td style={{ padding: '0.75rem' }}>Outdoor-living package (deck + screened porch + outdoor kitchen)</td><td style={{ padding: '0.75rem' }}>500-800 sqft</td><td style={{ padding: '0.75rem' }}>Potomac Falls, Lowes Island, Countryside Estates</td><td style={{ padding: '0.75rem' }}>$65,000-$140,000+</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>Sterling&apos;s 10-15 business-day Loudoun County permit — the fastest in Northern Virginia — gives Sterling projects a 3-week head start vs Fairfax County builds. Use our <Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck cost calculator</Link> to model your specific Sterling build, or see our <Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>full Northern Virginia composite deck cost guide</Link>.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>FAQ</h2>
          {[
            { q: "Deck cost in Sterling?", a: "$22,000-$140,000+. Townhome rear decks: $22-36k. Single-family rebuild on existing framing: $28-52k. Multi-level Lowes Island / Potomac Falls: $48-85k. Outdoor-living packages with kitchen + screened porch: $65-140k+. Composite at $35-$60/sqft installed." },
            { q: "Permit timeline?", a: "Loudoun County plan review often runs faster than Fairfax County, but final timing depends on county workload, HOA review, revisions, and project complexity. We prepare the permit and HOA package for the applicable Sterling community." },
            { q: "Can you build on townhomes?", a: "Yes, we regularly build and replace decks on Sterling townhomes. HOA architectural review is required and we handle the full submission process including material and color approvals." },
            { q: "How long does a Sterling deck build take?", a: "Many Sterling deck builds take 2-3 weeks from permit approval to completion, with total timeline depending on Loudoun County review, HOA review, material delivery, weather, and project complexity." },
            { q: "What warranty do you offer?", a: "Workmanship terms are confirmed in the written proposal for the selected scope. Trex and TimberTech manufacturer warranties vary by product line and installation requirements." },
            { q: "Can you build in winter?", a: "Yes, we build year-round in Sterling. Composite materials install in any temperature, and Loudoun County processes permits through winter. Off-season builds often mean shorter scheduling queues." },
            { q: "Why is Sterling such a high-volume deck market?", a: "Sterling has a large concentration of homes built between the late 1980s and mid-2010s, so many original pressure-treated decks now need inspection, resurfacing, or replacement. Loudoun County permit timelines and proximity to our service base can also make Sterling projects practical to schedule." },
            { q: "Can we resurface our existing deck instead of rebuilding?", a: "Often yes. If the original framing (joists, beams, ledger, posts) inspects sound — typically about 40% of 15-year-old Sterling builder decks — we resurface: tear off surface boards + railings, replace with composite, upgrade railings. Saves 40-60% vs full tear-down. Typical Sterling resurface: $18-30k. We do the diagnostic visit free." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '2.5rem 0 1rem' }}>Also Serving</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {[
              ['/deck-builder-ashburn-va', 'Ashburn'],
              ['/deck-builder-leesburg-va', 'Leesburg'],
              ['/deck-builder-herndon-va', 'Herndon'],
              ['/deck-builder-reston-va', 'Reston'],
              ['/deck-builder-ashburn-va', 'Broadlands'],
              ['/near-you/loudoun-county', 'Potomac Falls'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>{text}</Link>
            ))}
          </div>
        </div>
      </article>
      <CityAuthorityExpansion cityKey="sterling" />
      <section style={{ padding: '2rem 1.5rem' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><GoogleMapEmbed city="Sterling" /></div></section>
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (Google reviews) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
            <li key="/services/new-decks" style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building Services →</Link></li>
            <li key="/composite-deck-cost-northern-virginia" style={{ marginBottom: '0.5rem' }}><Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>How Much Does a Deck Cost in Northern Virginia? →</Link></li>
        </ul>
      </section>

      <SimpleCTA title="Get Your Sterling Deck Quote" buttonText="Get Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath="/deck-builder-sterling-va" />
      <NamedAuthor context="Sterling and Northern Virginia" lastUpdated="2026-06-01" />
      <ContactHome />
    </>
  );
}
