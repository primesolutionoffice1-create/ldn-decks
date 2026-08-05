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
import CityAuthorityExpansion from '@/components/CityAuthorityExpansion';
import PlanningUpdate from '@/components/PlanningUpdate';
import CityLeadFormSection from '@/components/CityLeadFormSection';
import PremiumCityLeadQualifier from '@/components/PremiumCityLeadQualifier';

export const metadata = buildMetadata({
  path: '/deck-builder-great-falls-va',
  title: 'Deck Builder in Great Falls, VA | Premium Composite Decks',
  description: 'Premium deck builder in Great Falls, VA for estate composite deck replacement, Trex and AZEK planning, screened porches, RPA screening, and outdoor living projects.',
  image: '/social/deck-builder-great-falls-va-social.png',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a deck cost in Great Falls, VA?", acceptedAnswer: { "@type": "Answer", text: "Many serious Great Falls composite deck replacements and outdoor living projects plan around $45,000-$140,000+, depending on size, framing condition, slope, access, material tier, railing, lighting, drainage, septic constraints, and whether the scope includes a screened porch or covered structure." } },
    { "@type": "Question", name: "Do I need special permits for a deck in Great Falls?", acceptedAnswer: { "@type": "Answer", text: "Great Falls is in Fairfax County, so standard building permits are required. Some Great Falls lots are in or near RPA (Resource Protection Area) zones near the Potomac River, which may require additional environmental review. We screen for these constraints during planning." } },
    { "@type": "Question", name: "Do Great Falls homes have HOA restrictions on decks?", acceptedAnswer: { "@type": "Answer", text: "Some Great Falls neighborhoods have deed covenants or HOA architectural review. Many estate-lot homes have no HOA. We research your specific property's restrictions before design begins." } },
    { "@type": "Question", name: "How long does a premium deck project take in Great Falls?", acceptedAnswer: { "@type": "Answer", text: "Great Falls estate-scale projects often take 5-8 weeks from permit approval to completion. Fairfax County plan review commonly runs 3-6 weeks. Projects requiring RPA environmental review, covered structure engineering, septic coordination, or tree/access planning may take longer." } },
    { "@type": "Question", name: "Can you build decks in Great Falls during winter?", acceptedAnswer: { "@type": "Answer", text: "Yes we build year-round in Great Falls. Composite and PVC materials install in any temperature. Winter builds can actually benefit Great Falls homeowners by avoiding the peak spring-summer scheduling queue, and Fairfax County processes permits through the winter months." } },
    { "@type": "Question", name: "How long do premium composite materials last in Great Falls?", acceptedAnswer: { "@type": "Answer", text: "TimberTech AZEK and Trex Transcend carry manufacturer warranties of 25-50 years covering fade, stain and structural performance. With proper installation on Great Falls estate lots, these materials routinely last 30+ years with minimal maintenance even in shaded, tree-heavy environments." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 } };

const projectScenarios = [
  {
    title: 'Estate composite replacement',
    range: '$45k-$85k+ planning range',
    desc: 'Best for older Great Falls decks where framing, ledger, stairs, and guardrails need inspection before reuse is considered. Typical upgrades include Trex or TimberTech/AZEK decking, aluminum railing, code-compliant stairs, lighting, and a cleaner access plan.',
  },
  {
    title: 'Wooded or sloped-lot outdoor living deck',
    range: '$70k-$130k+ planning range',
    desc: 'Best for larger homes with mature trees, grade change, privacy needs, septic layout, drainage questions, and long stair runs. These projects need slope-aware structure, material planning, drainage review, and early permit-path screening.',
  },
  {
    title: 'Deck + screened porch or covered structure',
    range: '$90k-$160k+ planning range',
    desc: 'Best when the deck is part of a larger outdoor room with roof tie-in, screened porch, heaters, fan, fireplace, or covered dining zone. These scopes need engineering, roof integration, RPA screening where relevant, and Fairfax County permit review.',
  },
];

export default function GreatFallsDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <LocalBusinessSchema city="Great Falls" url="https://ldndecks.com/deck-builder-great-falls-va" />
      <WebPageSchema dateModified="2026-07-06" url="https://ldndecks.com/deck-builder-great-falls-va" name="Deck Builder in Great Falls, VA | Premium Composite Decks" description="Premium deck builder in Great Falls, VA for estate composite deck replacement, Trex and AZEK planning, screened porches, RPA screening, and outdoor living projects." speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img17.jpeg"
              alt="Premium deck planning example for Great Falls, Virginia homeowners"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.01em' }}>Custom Deck Builder in Great Falls, VA</h1>
          <p style={{ color: '#ccc', fontSize: '1.15rem' }}>Premium composite deck replacement, screened porch planning, covered structures, and outdoor living scopes for Great Falls homes with slope, tree, septic, and permit complexity.</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/get-estimate" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Estimate</Link>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#aaa' }}>Licensed &amp; insured · Written scope and warranty details provided before contract · Premium project planning from site review</p>
        </div>
      </section>
      <section style={{ backgroundColor: '#fff5f2', padding: '24px 20px', borderBottom: '1px solid #ffdbd1' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: '#d14817', margin: 0, fontWeight: '500' }}>
            <strong style={{ color: '#111', fontSize: '18px' }}>Great Falls premium planning range: many serious projects start around $45,000+</strong>
            <br />
            We focus on <strong style={{ color: '#111' }}>estate composite replacement, screened porch, covered deck, and outdoor living scopes</strong>. Need a repair instead? Visit our <Link href="/services/deck-repair" style={{ color: '#d14817', textDecoration: 'underline', fontWeight: 600 }}>deck repair service</Link>.
          </p>
        </div>
      </section>
      <CityLeadFormSection
        city="Great Falls"
        county="Fairfax County"
        service="estate deck replacement or premium composite deck"
        formLocation="local_city_great_falls_deck_builder"
      />
      <PlanningUpdate
        market="Great Falls decks in 2026"
        notes={[
          "Great Falls projects should screen early for Fairfax County RPA constraints, slope, septic locations, mature trees, and access paths.",
          "Estate-scale decks need early decisions on railings, drainage, screened porch tie-ins, outdoor kitchens, and lighting before pricing is finalized.",
          "The right Great Falls scope should be confirmed after RPA screening, septic-location review, tree protection planning, material selection, and permit-path review."
        ]}
        links={[
          { href: "/deck-permit-fairfax-county-virginia", label: "Fairfax permit guide" },
          { href: "/mclean-great-falls-premium-deck-budget", label: "Premium budget guide" },
          { href: "/trex-vs-timbertech-vs-azek", label: "Material comparison" }
        ]}
      />
      <PremiumCityLeadQualifier
        city="Great Falls"
        county="Fairfax County"
        intro="Great Falls deck estimates should screen for estate-lot complexity before a number is trusted. Slope, mature trees, septic layouts, RPA exposure, long access paths, drainage, privacy, screened porch tie-ins, and premium material choices can all change the correct scope."
        projectTypes={[
          'Estate composite replacement with premium railing and lighting packages',
          'Wooded or sloped-lot outdoor living decks',
          'Deck plus screened porch, covered dining, or outdoor kitchen scopes',
          'Code-reset replacement where framing, ledger, footings, stairs, or guards need review',
        ]}
        planningSignals={[
          'Photos showing grade, trees, current structure, and equipment access',
          'Septic, well, RPA, or drainage constraints if known',
          'Preferred scope: deck only, covered deck, screened porch, or outdoor living phase',
          'Material direction: Trex, TimberTech/AZEK, railing, lighting, and drainage',
        ]}
        links={[
          { href: '/get-estimate', label: 'Request Great Falls estimate', primary: true },
          { href: '/mclean-great-falls-premium-deck-budget', label: 'Premium budget guide' },
          { href: '/deck-permit-fairfax-county-virginia', label: 'Fairfax permit guide' },
        ]}
      />
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <h2 style={S.h2}>Why Great Falls Homeowners Choose Loudoun Decks</h2>
          <p style={S.p}>Great Falls deck projects usually need more planning than a basic replacement. Larger lots, wooded settings, slope, septic layouts, RPA exposure, long access paths, and privacy expectations can all change the right design before the final budget is set.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Premium material planning:</strong> Trex, TimberTech, and AZEK options compared by board tier, warranty, color, railing, and site exposure</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>RPA screening:</strong> Many Great Falls lots near the Potomac may be in Resource Protection Areas requiring additional environmental review. We screen for this early in planning.</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Architectural complexity:</strong> Multi-level decks, wraparound designs, integrated outdoor kitchens, screened porches with fireplaces, pool deck surrounds</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Estate-scale planning:</strong> larger outdoor living spaces that need structural review, drainage strategy, privacy planning, and code-aware stairs</li>
            <li style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}><strong>Fairfax County permitting:</strong> We handle all zoning review, building permits, and inspections including the more complex requirements for large properties</li>
          </ul>

          <h2 style={S.h2}>Great Falls Premium Project Scenarios</h2>
          <p style={S.p}>These are planning scenarios, not final quotes. A Great Falls estimate should be confirmed after site access, framing condition, slope, septic location, Fairfax County permit path, RPA exposure, drainage, and material selections are reviewed.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {projectScenarios.map((scenario) => (
              <article key={scenario.title} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8, padding: '1.25rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>{scenario.title}</h3>
                <p style={{ color: '#d14817', fontWeight: 700, marginBottom: '0.6rem' }}>{scenario.range}</p>
                <p style={{ lineHeight: 1.65, margin: 0 }}>{scenario.desc}</p>
              </article>
            ))}
          </div>

          <h2 style={S.h2}>What We Build in Great Falls</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { title: 'Estate Composite Decks', desc: 'Multi-level AZEK, TimberTech, and Trex builds with premium railings, lighting, stairs, drainage, and site-specific access planning', range: '$45k-$130k+' },
              { title: 'Screened Porches & Covered Decks', desc: 'Roof tie-ins, screened rooms, heaters, fans, fireplace planning, cedar ceilings, and all-season comfort decisions', range: '$80k-$160k+' },
              { title: 'Pool and Rear-Yard Deck Zones', desc: 'Composite or PVC decking around pools and rear-yard entertainment areas with code-compliant barriers and drainage planning', range: '$55k-$120k+' },
              { title: 'Outdoor Living Add-Ons', desc: 'Outdoor kitchens, covered dining, lighting, privacy screens, and under-deck drainage planned as one cohesive scope', range: '$35k-$90k+' },
            ].map((item) => (
              <div key={item.title} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.25rem' }}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>{item.range}</p>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={S.h2}>Great Falls Project Planning Example</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Estate Multi-Level Deck + Screened Porch Scenario</h3>
            <p style={{ lineHeight: 1.7 }}>A Great Falls estate concept might include a multi-level TimberTech AZEK or Trex deck, screened porch, fireplace planning, premium railing, lighting, and view-sensitive layout. Final scope should be confirmed after Fairfax County permit requirements, RPA screening, septic location, tree protection, HOA or covenant rules, and site access are reviewed.</p>
          </div>

          <h2 style={S.h2}>Permits, RPA Zones, Septic, and Access in Great Falls</h2>
          <p style={S.p}><strong>Standard permits:</strong> All decks in Great Falls require Fairfax County building permits (zoning + structural review, 3-6 weeks). <Link href="/deck-permit-fairfax-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Read our Fairfax County permit guide</Link>.</p>
          <p style={S.p}><strong>RPA (Resource Protection Area):</strong> Properties within 100 feet of perennial streams or the Potomac River may fall in Fairfax County&apos;s RPA zone. Deck construction in RPAs can require additional environmental review, may limit impervious surface, and sometimes requires mitigation planting. We screen for these constraints before the design is finalized.</p>
          <p style={S.p}><strong>Well &amp; septic considerations:</strong> Some Great Falls properties use well water and septic systems. Deck footings must avoid septic drain fields and well casings. We coordinate with your septic company when needed.</p>
          <p style={S.p}><strong>Tree and equipment access:</strong> Long driveways, mature trees, wooded rear yards, and grade changes can affect delivery, staging, excavation, and stair design. These details should be reviewed before a premium Great Falls scope is finalized.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "How much does a deck cost in Great Falls?", a: "Many serious Great Falls composite deck replacements and outdoor living projects plan around $45,000-$140,000+, depending on size, framing condition, slope, access, material tier, railing, lighting, drainage, septic constraints, and whether the scope includes a screened porch or covered structure." },
            { q: "Do I need special permits?", a: "Standard Fairfax County permits plus potential RPA review for lots near the Potomac. We handle everything including environmental submissions." },
            { q: "HOA restrictions?", a: "Varies — some neighborhoods have covenants, many estate lots have no HOA. We research your property before design." },
            { q: "How long does a premium project take?", a: "Estate-scale projects often take 5-8 weeks from permit approval. Fairfax County review commonly runs 3-6 weeks, and RPA, septic, tree access, or covered-structure engineering can extend the timeline." },
            { q: "Can you build in winter?", a: "Yes, we build year-round. Composite and PVC materials install in any temperature. Winter builds avoid peak scheduling queues and Fairfax County processes permits through winter." },
            { q: "How long do premium materials last?", a: "TimberTech AZEK and Trex Transcend carry 25-50 year manufacturer warranties. With proper installation, these materials routinely last 30+ years with minimal maintenance even in shaded Great Falls environments." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Also Serving Nearby</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {[
              ['/deck-builder-mclean-va', 'McLean'],
              ['/deck-builder-vienna-va', 'Vienna'],
              ['/deck-builder-oakton-va', 'Oakton'],
              ['/deck-builder-reston-va', 'Reston'],
              ['/deck-builder-herndon-va', 'Herndon'],
              ['/deck-builder-falls-church-va', 'Falls Church'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>{text}</Link>
            ))}
          </div>
        </div>
      </article>
      <CityAuthorityExpansion cityKey="greatFalls" />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            ['/composite-deck-builder-loudoun', 'Composite Deck Builder in Loudoun County'],
            ['/mclean-great-falls-premium-deck-budget', 'McLean &amp; Great Falls Premium Deck Budget Guide'],
            ['/screened-porch-builder-northern-virginia', 'Screened Porch Builder Northern Virginia'],
            ['/premium-composite-deck-replacement-arlington-alexandria-mclean-va', 'Premium Composite Replacement for Arlington, Alexandria & McLean'],
            ['/deck-permit-fairfax-county-virginia', 'Fairfax County Deck Permit Guide'],
            ['/composite-deck-cost-northern-virginia', 'How Much Does a Deck Cost in Northern Virginia?'],
            ['/timbertech-azek-deck-cost-northern-virginia', 'TimberTech &amp; AZEK Premium Deck Cost'],
            ['/trex-vs-timbertech-vs-azek', 'Trex vs TimberTech vs AZEK Comparison'],
          ].map(([href, text]) => (
            <li key={href} style={{ marginBottom: '0.5rem' }}>
              <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link>
            </li>
          ))}
        
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (Google reviews) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
            <li key="/services/new-decks" style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building Services →</Link></li>
          </ul>
      </section>
      <SimpleCTA title="Get Your Great Falls Deck Quote" buttonText="Get Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath="/deck-builder-great-falls-va" />
      <NamedAuthor context="Great Falls and Northern Virginia" lastUpdated="2026-07-06" />
      <ContactHome />
    </>
  );
}
