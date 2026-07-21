import React from 'react';
import Link from 'next/link';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import SimpleCTA from '@/components/SimpleCTA';
import ServiceSchema from '@/components/ServiceSchema';
import WebPageSchema from '@/components/WebPageSchema';
import PlanningUpdate from '@/components/PlanningUpdate';
import GeoAnswerBlock from '@/components/GeoAnswerBlock';
import CityLeadFormSection from '@/components/CityLeadFormSection';
import PremiumCityLeadQualifier from '@/components/PremiumCityLeadQualifier';
import NamedAuthor from '@/components/NamedAuthor';
import { buildMetadata } from '@/lib/seo';

const pagePath = '/premium-composite-deck-replacement-arlington-alexandria-mclean-va';
const pageUrl = `https://ldndecks.com${pagePath}`;

export const metadata = buildMetadata({
  path: pagePath,
  title: 'Premium Composite Deck Replacement | Arlington, Alexandria & McLean',
  description: 'Premium composite deck replacement for Arlington, Alexandria and McLean homeowners. Trex, TimberTech, AZEK, permits, HOA planning, railings, lighting, stairs and written estimates.',
  image: '/social/composite-decks-social.png',
});

const inclusions = [
  {
    title: 'Premium Replacement Scope',
    desc: 'Built for full deck replacement, unsafe structure correction, old wood-to-composite upgrades, railing packages, lighting, stairs, and outdoor living add-ons.',
  },
  {
    title: 'Arlington, Alexandria, and McLean Planning',
    desc: 'Jurisdiction, permit, HOA, historic-area, RPA, drainage, access, and neighborhood constraints are considered before the final proposal is prepared.',
  },
  {
    title: 'Composite and PVC Material Guidance',
    desc: 'Trex, TimberTech, AZEK, Deckorators, aluminum railing, PVC trim, and lighting options are matched to shade, sun exposure, budget, and home style.',
  },
  {
    title: 'Lead-Quality Estimate Path',
    desc: 'The best estimates start with address, photos, existing deck condition, desired scope, timeline, budget range, and any HOA or permit concerns.',
  },
];

const expansionSections = [
  {
    title: 'A Premium Replacement Page for the Northern Virginia High-Value Corridor',
    paragraphs: [
      'Arlington, Alexandria, and McLean homeowners often compare deck contractors for a bigger decision than replacing boards. Older wood decks in these markets may need structural correction, permit review, HOA documentation, railing modernization, stair improvements, lighting, privacy, drainage, or a full outdoor living redesign.',
      'This page focuses on that higher-intent buyer. It is different from a general city page because it connects premium composite deck replacement across three affluent Northern Virginia markets where property value, design quality, construction details, and low-maintenance materials matter.',
      'Loudoun Decks uses this estimate path for homeowners who want a written scope, material guidance, and a clear replacement plan instead of a quick board-only price. That keeps the conversation focused on safety, durability, code readiness, and long-term value.',
    ],
  },
  {
    title: 'When Replacement Beats Resurfacing',
    paragraphs: [
      'Resurfacing can make sense only when the existing frame is structurally sound, properly flashed, correctly supported, and suitable for the new decking system. If the ledger, posts, footings, joists, beam layout, stairs, or guardrails are failing, resurfacing can hide risk instead of solving it.',
      'A full replacement lets the project reset the structure for modern composite or PVC decking, updated railing systems, safer stairs, better lighting, and cleaner permit documentation. It also gives the homeowner the chance to improve traffic flow, outdoor dining space, privacy, and transitions to patios or screened porches.',
      'For Arlington, Alexandria, and McLean projects, this decision should be made after photos, site access, age of structure, visible damage, and jurisdiction are reviewed. Final recommendations should be based on the actual frame, not just the surface boards.',
    ],
    listItems: [
      { label: 'Replacement fit', text: 'Widespread framing issues, major layout change, rail/stair upgrades, higher-value materials, or code reset.' },
      { label: 'Resurfacing fit', text: 'Sound frame, good ledger/flashing, correct spans, acceptable footings, and no major safety concerns.' },
      { label: 'Estimate filter', text: 'Best-fit projects usually involve a serious composite replacement or outdoor living scope, not small repairs.' },
    ],
  },
  {
    title: 'Market-Specific Planning Notes',
    paragraphs: [
      'Arlington projects often require tighter access planning, urban lot coordination, older home details, and permit-aware stair or railing decisions. Alexandria projects may involve City of Alexandria or Fairfax County rules, HOA review, historic-area expectations, or wooded Mount Vernon-style backyard constraints.',
      'McLean projects often lean toward premium material selections, larger entertainment layouts, cable or black aluminum railing, lighting, multi-zone outdoor living, and clean architectural details that match the home. In each market, the best proposal should connect structure, materials, permit path, and final use.',
      'The goal is not to make each city sound the same. The goal is to give homeowners and AI search systems a clear, canonical answer for premium composite replacement in the Arlington-Alexandria-McLean corridor.',
    ],
  },
  {
    title: 'Material and Finish Decisions That Change the Budget',
    paragraphs: [
      'Trex, TimberTech, AZEK, and Deckorators can all be good choices, but the right fit depends on sun exposure, shade, color goals, heat expectations, warranty language, stair details, and trim preferences. PVC boards may be attractive for moisture-heavy or premium finish expectations; capped composite can be a strong value for many replacement projects.',
      'Railings, lighting, fascia, picture framing, stair lighting, privacy screens, and under-deck drainage can change both appearance and budget. A serious estimate should separate must-have structural items from optional finish upgrades so the homeowner can make a confident decision.',
      'Because premium replacement projects can carry bigger budgets, proof matters. Real project photos, public reviews, manufacturer-context pages, and written scope clarity are stronger trust signals than unsupported marketing claims.',
    ],
  },
];

const faqs = [
  {
    q: 'What is the best page for premium composite deck replacement in Arlington, Alexandria, or McLean?',
    a: 'This page is the focused planning path for homeowners comparing premium composite deck replacement in Arlington, Alexandria, and McLean. It connects full replacement, structural review, Trex, TimberTech, AZEK, railings, stairs, lighting, permits, HOA concerns, and written estimate preparation in one place.',
  },
  {
    q: 'How much does a premium composite deck replacement cost in these markets?',
    a: 'Many serious composite replacement projects in Northern Virginia start in the mid-five figures, and larger projects with premium railing, lighting, stairs, PVC trim, screened porch connections, or structural rebuilds can move much higher. Final pricing depends on size, height, framing condition, material tier, access, permits, and scope.',
  },
  {
    q: 'Should I resurface my old deck or replace it completely?',
    a: 'Resurfacing is only a good fit when the frame, ledger, footings, stairs, and railings are sound and suitable for the new decking system. Replacement is safer when the structure is old, undersized, poorly flashed, damaged, or when the homeowner wants a layout, railing, stair, or outdoor living upgrade.',
  },
  {
    q: 'Do Arlington, Alexandria, and McLean deck replacements need permits?',
    a: 'Most full deck replacements require permit review when framing, footings, ledger attachment, stairs, guards, or structural layout changes are involved. The exact path depends on whether the property is in Arlington County, the City of Alexandria, Fairfax County, an HOA, or a special review area.',
  },
  {
    q: 'Which material is better for a high-end replacement: Trex, TimberTech, or AZEK?',
    a: 'There is no single best material for every home. Trex, TimberTech, and AZEK each have different color lines, board construction, heat behavior, warranty language, and trim details. The right choice depends on exposure, budget, desired finish, railing package, and maintenance expectations.',
  },
  {
    q: 'What should I send to get a stronger replacement estimate?',
    a: 'Send the property address, photos of the existing deck and framing if visible, approximate size, desired materials, railing or lighting preferences, HOA documents if available, timeline, budget range, and whether you are considering a screened porch, covered deck, or patio connection.',
  },
  {
    q: 'Why is this page not just another city landing page?',
    a: 'This page targets a specific premium replacement intent across three high-value markets. The city pages answer local deck builder searches, while this page helps homeowners compare full composite replacement scope, cost drivers, permit concerns, materials, and conversion-ready estimate steps.',
  },
];

export default function PremiumCompositeReplacementCorridorPage() {
  return (
    <main>
      <WebPageSchema
        datePublished="2026-07-21"
        dateModified="2026-07-21"
        url={pageUrl}
        name="Premium Composite Deck Replacement | Arlington, Alexandria & McLean"
        description="Premium composite deck replacement for Arlington, Alexandria and McLean homeowners. Trex, TimberTech, AZEK, permits, HOA planning, railings, lighting, stairs and written estimates."
        speakable
      />
      <ServiceSchema
        name="Premium Composite Deck Replacement"
        description="Premium composite and PVC deck replacement planning for Arlington, Alexandria, and McLean homeowners, including structural review, Trex, TimberTech, AZEK, railings, lighting, stairs, permits, and HOA-aware scope preparation."
        url={pageUrl}
        category="Deck Construction"
        serviceType="Composite deck replacement"
        lowPrice="30000"
        highPrice="120000"
        areaServed={[
          { '@type': 'City', name: 'Arlington' },
          { '@type': 'City', name: 'Alexandria' },
          { '@type': 'City', name: 'McLean' },
          { '@type': 'AdministrativeArea', name: 'Northern Virginia' },
        ]}
        relatedServices={[
          'https://ldndecks.com/services/deck-replacement',
          'https://ldndecks.com/composite-decks',
          'https://ldndecks.com/timbertech-decks',
          'https://ldndecks.com/trex-decks',
        ]}
      />

      <ServicesHeader
        subtext="Arlington + Alexandria + McLean Premium Replacement"
        title="Premium Composite Deck Replacement for Arlington, Alexandria, and McLean"
        description="A focused estimate path for high-value wood-to-composite deck replacements, structural rebuilds, Trex, TimberTech, AZEK, railings, lighting, stairs, permits, HOA planning, and outdoor living upgrades."
      />

      <section style={{ background: '#fff5f2', borderBottom: '1px solid #ffdbd1', padding: '24px 20px' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ margin: 0, color: '#d14817', fontSize: 16, lineHeight: 1.65 }}>
            <strong style={{ color: '#111', fontSize: 18 }}>Built for serious composite replacement projects, not board-only shopping.</strong>
            <br />
            If you are comparing premium deck builders in Arlington, Alexandria, or McLean, start here before requesting a written scope.
          </p>
          <p style={{ margin: '12px 0 0', color: '#555', fontSize: 15, lineHeight: 1.65 }}>
            Need the broader service page? See <Link href="/services/deck-replacement" style={{ color: '#d14817', fontWeight: 700 }}>deck replacement</Link>. Comparing boards? See <Link href="/trex-vs-timbertech-vs-azek" style={{ color: '#d14817', fontWeight: 700 }}>Trex vs TimberTech vs AZEK</Link>. Budgeting monthly options? Use the <Link href="/deck-payment-estimator" style={{ color: '#d14817', fontWeight: 700 }}>deck payment estimator</Link>.
          </p>
        </div>
      </section>

      <GeoAnswerBlock
        question="Who should request a premium composite deck replacement estimate in Arlington, Alexandria, or McLean?"
        answer="The best fit is a homeowner planning a full wood-to-composite replacement, structural rebuild, premium railing package, stair upgrade, lighting package, screened porch connection, covered deck, or larger outdoor living project in Arlington, Alexandria, McLean, or nearby Northern Virginia markets."
        facts={[
          'Primary intent: premium composite deck replacement, not small repair or retail material shopping.',
          'Primary markets: Arlington, Alexandria, McLean, nearby Fairfax County, and high-value Northern Virginia neighborhoods.',
          'Best estimate inputs: address, photos, scope, framing condition, material preference, timeline, budget range, permit or HOA concerns.',
        ]}
        links={[
          { href: '/get-estimate', label: 'Request a written estimate' },
          { href: '/composite-deck-cost-northern-virginia', label: 'Composite deck cost guide' },
          { href: '/deck-resurfacing-vs-replacement', label: 'Resurfacing vs replacement' },
        ]}
      />

      <ServiceMain
        subtitle="Premium Replacement + Composite Upgrade"
        title="Replace the Structure, Upgrade the Materials, Improve the Outdoor Living Plan"
        description="Loudoun Decks helps homeowners move from aging wood decks to safer, cleaner, lower-maintenance composite and PVC outdoor spaces with permit-aware planning and strong conversion-ready scope clarity."
        listItems={[
          'Full deck replacement and old wood-to-composite upgrades',
          'Trex, TimberTech, AZEK, Deckorators, aluminum railing, lighting, and PVC trim guidance',
          'Structural review for ledger, beams, joists, posts, footings, stairs, and guardrails',
          'Permit, HOA, historic-area, access, drainage, and inspection planning by market',
          'Written estimate path for serious Arlington, Alexandria, McLean, and nearby Northern Virginia homeowners',
        ]}
        image1="/images/homepage-intro-timbertech-deck.jpg"
        image2="/images/img97.jpeg"
      />

      <PlanningUpdate
        market="premium composite replacement in Arlington, Alexandria, and McLean"
        notes={[
          'Confirm jurisdiction before final pricing: Arlington County, City of Alexandria, Fairfax County, HOA, historic-area, or special review constraints may change the path.',
          'Inspect the existing frame before recommending resurfacing; composite boards should not be installed over unsafe ledgers, shallow footings, weak joists, or failing stairs.',
          'Separate structural must-haves from finish upgrades so premium railings, lighting, fascia, privacy screens, and porch connections can be planned clearly.',
        ]}
        links={[
          { href: '/deck-builder-arlington-va', label: 'Arlington deck builder' },
          { href: '/deck-builder-alexandria-va', label: 'Alexandria deck builder' },
          { href: '/deck-builder-mclean-va', label: 'McLean deck builder' },
          { href: '/deck-permit-arlington-county-virginia', label: 'Arlington permit guide' },
          { href: '/deck-permit-fairfax-county-virginia', label: 'Fairfax permit guide' },
        ]}
      />

      <PremiumCityLeadQualifier
        city="Arlington, Alexandria, and McLean"
        county="Arlington County, the City of Alexandria, and Fairfax County"
        intro="This corridor should produce stronger leads when the first conversation confirms budget range, existing deck condition, jurisdiction, material expectations, railing and lighting goals, and whether the homeowner wants a deck-only replacement or a larger backyard plan."
        projectTypes={[
          'Aging wood deck replaced with Trex, TimberTech, AZEK, or Deckorators',
          'Premium railing, stair, lighting, fascia, and picture-frame packages',
          'Full structural rebuilds where resurfacing is not safe',
          'Deck replacement tied to screened porch, covered deck, patio, or outdoor kitchen planning',
          'High-value Arlington, Alexandria, McLean, and nearby Northern Virginia homes',
        ]}
        planningSignals={[
          'Address and jurisdiction, including HOA, historic-area, or special review notes',
          'Photos of existing boards, railings, stairs, posts, ledger, beams, and backyard access',
          'Preferred material tier and whether PVC, capped composite, or brand comparison is needed',
          'Budget range, timeline, and whether the project should be phased',
        ]}
        links={[
          { href: '/get-estimate', label: 'Request premium estimate', primary: true },
          { href: '/deck-payment-estimator', label: 'Estimate monthly payment' },
          { href: '/deck-safety-inspection-checklist', label: 'Safety checklist' },
        ]}
      />

      <ServiceContentExpansion sections={expansionSections} />

      <section style={{ background: '#f7f4ed', padding: '64px 20px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.85rem, 3vw, 2.55rem)', margin: '0 0 16px', color: '#111', textAlign: 'center' }}>
            Premium Replacement Decision Paths
          </h2>
          <p style={{ maxWidth: 780, margin: '0 auto 32px', textAlign: 'center', color: '#555', lineHeight: 1.65 }}>
            Use these pages to validate city fit, permit path, material choice, budget, and structural readiness before requesting a detailed proposal.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(235px, 1fr))', gap: 16 }}>
            {[
              ['/deck-builder-arlington-va', 'Arlington Deck Builder', 'Local deck replacement, access, permit, and premium composite planning.'],
              ['/deck-builder-alexandria-va', 'Alexandria Deck Builder', 'City, Fairfax County, HOA, Mount Vernon, and outdoor living context.'],
              ['/deck-builder-mclean-va', 'McLean Deck Builder', 'Premium replacement, large deck, railing, lighting, and estate-home planning.'],
              ['/services/deck-replacement', 'Deck Replacement Service', 'Full rebuild guidance for unsafe or outdated Northern Virginia decks.'],
              ['/composite-decks', 'Composite Decks', 'Trex, TimberTech, AZEK, and low-maintenance material planning.'],
              ['/timbertech-decks', 'TimberTech and AZEK', 'PVC and premium composite material decisions for higher-end projects.'],
              ['/deck-resurfacing-vs-replacement', 'Resurface or Replace', 'Decision guide for old frames, new boards, and rebuild scope.'],
              ['/composite-deck-cost-northern-virginia', 'Composite Deck Cost', 'Cost drivers, size ranges, material tiers, and budget planning.'],
              ['/deck-permit-arlington-county-virginia', 'Arlington Permits', 'Permit planning for Arlington deck replacements and structural work.'],
              ['/deck-permit-fairfax-county-virginia', 'Fairfax Permits', 'Permit and inspection context for McLean and many Alexandria-area projects.'],
              ['/outdoor-living-mount-vernon-alexandria-va', 'Mount Vernon Outdoor Living', 'Alexandria corridor deck, porch, patio, drainage, and lighting planning.'],
              ['/get-estimate', 'Written Estimate', 'Send photos, address, scope, material goals, and budget range.'],
            ].map(([href, title, text]) => (
              <Link
                key={href}
                href={href}
                style={{ background: '#fff', border: '1px solid #e8dfd1', borderRadius: 8, padding: 20, color: '#111', textDecoration: 'none' }}
              >
                <h3 style={{ margin: '0 0 8px', fontSize: '1.05rem' }}>{title}</h3>
                <p style={{ margin: 0, color: '#555', lineHeight: 1.55 }}>{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceInclusions
        title="What a Premium Replacement Estimate Should Clarify"
        description="High-value replacement projects need structure, scope, materials, jurisdiction, and finish decisions documented before construction."
        items={inclusions}
      />

      <CityLeadFormSection
        city="Arlington, Alexandria, and McLean"
        county="Arlington County, City of Alexandria, and Fairfax County"
        service="premium composite deck replacement"
        formLocation="local_seo_premium_composite_replacement_corridor"
        heading="Request a premium composite deck replacement estimate"
        pageType="premium_composite_replacement_corridor_page"
      />

      <ServicesFAQ
        title="Premium Composite Deck Replacement FAQs"
        faqs={faqs}
        canonicalUrl={pageUrl}
        withSpeakable
      />

      <SimpleCTA
        title="Planning a premium composite replacement in Arlington, Alexandria, or McLean?"
        buttonText="Request Written Estimate"
        link="/get-estimate"
      />

      <RelatedGuides currentPath={pagePath} category="deck-core" />
      <NamedAuthor context="Arlington, Alexandria, McLean, and Northern Virginia premium composite deck replacement" lastUpdated="2026-07-21" />
      <ContactHome />
    </main>
  );
}
