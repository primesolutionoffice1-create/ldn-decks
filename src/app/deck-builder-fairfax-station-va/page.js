import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import NamedAuthor from '@/components/NamedAuthor';
import CallLink from '@/components/CallLink';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import PlanningUpdate from '@/components/PlanningUpdate';
import GeoAnswerBlock from '@/components/GeoAnswerBlock';
import CityLeadFormSection from '@/components/CityLeadFormSection';
import PremiumCityLeadQualifier from '@/components/PremiumCityLeadQualifier';

const PATH = '/deck-builder-fairfax-station-va';

export const metadata = buildMetadata({
  path: PATH,
  title: 'Deck Builder in Fairfax Station, VA | Premium Composite Decks',
  description: 'Premium deck builder in Fairfax Station, VA for wooded lots, South Run, Crosspointe, Barrington, composite decks, screened porches, deck replacement, and Fairfax County permits.',
  image: '/social/deck-builder-fairfax-va-social.png',
});

const faqs = [
  {
    q: 'How much does a composite deck cost in Fairfax Station?',
    a: 'Most Fairfax Station composite deck projects start around $30,000 for a serious replacement and can run $55,000 to $95,000+ when the scope includes a larger footprint, stairs, lighting, premium railings, screened porch work, or complex wooded-lot access. The best estimate comes after checking the existing framing, ledger, footings, site slope, and permit requirements.',
  },
  {
    q: 'Do Fairfax Station deck projects need Fairfax County permits?',
    a: 'Yes, most new decks, structural replacements, elevated decks, screened porches, and major stair or railing changes in Fairfax Station need Fairfax County permit review. We plan the deck with permit drawings, footing details, ledger attachment notes, railing/stair details, and inspection sequencing in mind from the beginning.',
  },
  {
    q: 'Can you replace an older wood deck on a wooded or sloped Fairfax Station lot?',
    a: 'Yes. Fairfax Station has many wooded and sloped properties where old wood decks need full structural replacement instead of simple resurfacing. We inspect the ledger, joists, beams, posts, footings, stairs, drainage, and access path before recommending repair, resurfacing, or a full rebuild.',
  },
  {
    q: 'What materials work best for Fairfax Station homes?',
    a: 'Composite and PVC boards are usually the best fit because Fairfax Station lots often have shade, tree debris, moisture, and larger outdoor living expectations. Trex, TimberTech, AZEK, and premium railing packages can be planned around color, heat, privacy, maintenance, and long-term resale value.',
  },
  {
    q: 'Do you handle HOA or architectural review requirements in communities like Crosspointe?',
    a: 'We prepare the deck scope so homeowners have the information needed for HOA or architectural review, including layout, colors, railing style, material selections, and permit-ready drawings where applicable. Crosspointe, South Run, and similar communities often benefit from early HOA review instead of waiting until the permit packet is complete.',
  },
  {
    q: 'Can a Fairfax Station deck include a screened porch, patio, or outdoor kitchen?',
    a: 'Yes. Fairfax Station is a strong fit for larger outdoor living projects such as deck-plus-screened-porch combinations, stairs to patios, lighting, privacy railing, and outdoor kitchen planning. We scope these together when possible so structure, drainage, permits, and traffic flow are coordinated.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `https://ldndecks.com${PATH}#faq`,
  url: `https://ldndecks.com${PATH}`,
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: a,
    },
  })),
};

const neighborhoods = [
  {
    name: 'South Run',
    desc: 'Large wooded lots, mature trees, and sloped backyards make South Run a strong fit for premium composite decks, screened porches, privacy railings, and careful drainage planning.',
  },
  {
    name: 'Crosspointe',
    desc: 'Planned-community standards and HOA review make material selections, railing style, color palette, and permit-ready drawings important before construction starts.',
  },
  {
    name: 'Barrington',
    desc: 'Estate-style homes and generous rear yards often support larger deck footprints, multi-zone entertaining layouts, and premium railing or lighting packages.',
  },
  {
    name: 'Fairlee and Clifton-adjacent homes',
    desc: 'Wooded access, walkout basements, and privacy concerns often shape the framing plan, stair location, screening needs, and ground-level patio connection.',
  },
];

const projectScopes = [
  {
    title: 'Composite deck replacement',
    copy: 'For older pressure-treated decks where boards, railings, framing, or ledger details are past their safe service life. We separate true resurfacing candidates from decks that need a structural rebuild.',
    href: '/deck-resurfacing-vs-replacement',
  },
  {
    title: 'Screened porch and covered deck planning',
    copy: 'For homeowners who want a bug-free, shaded outdoor room connected to an open grill deck or patio path.',
    href: '/screened-porch-builder-northern-virginia',
  },
  {
    title: 'Premium railings, stairs, and lighting',
    copy: 'For elevated decks where safe stairs, clean sightlines, evening use, and long-term appearance matter as much as square footage.',
    href: '/services/deck-stair-lighting',
  },
  {
    title: 'Fairfax County permit-ready design',
    copy: 'For projects that need footings, ledger details, framing spans, guardrails, stairs, setbacks, and inspection sequencing planned before submission.',
    href: '/deck-permit-fairfax-county-virginia',
  },
];

export default function FairfaxStationDeckBuilderPage() {
  return (
    <main>
      <JsonLd data={faqSchema} />
      <LocalBusinessSchema city="Fairfax Station" url={`https://ldndecks.com${PATH}`} />
      <WebPageSchema
        dateModified="2026-07-19"
        url={`https://ldndecks.com${PATH}`}
        name="Deck Builder in Fairfax Station, VA | Premium Composite Decks"
        description="Premium deck builder in Fairfax Station, VA for wooded lots, South Run, Crosspointe, Barrington, composite decks, screened porches, deck replacement, and Fairfax County permits."
        speakable
      />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ margin: '0 0 0.6rem', color: '#f97316', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.82rem' }}>
            Premium Fairfax Station deck builder
          </p>
          <h1 style={{ fontSize: 'clamp(2.15rem, 4vw, 3.3rem)', lineHeight: 1.05, fontWeight: 900, marginBottom: '1rem', maxWidth: 840 }}>
            Composite Decks, Screened Porches, and Outdoor Living for Fairfax Station Homes
          </h1>
          <p style={{ color: '#d1d5db', fontSize: '1.12rem', lineHeight: 1.7, maxWidth: 760 }}>
            Loudoun Decks plans premium deck replacement and outdoor living projects in Fairfax Station, South Run, Crosspointe, Barrington, and wooded south Fairfax County neighborhoods where privacy, drainage, access, permits, and long-term materials matter.
          </p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 1.5rem', fontWeight: 800, borderRadius: 6, textDecoration: 'none' }}>
              Call (571) 655-7207
            </CallLink>
            <Link href="/get-estimate" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 1.5rem', fontWeight: 800, borderRadius: 6, textDecoration: 'none' }}>
              Request Fairfax Station Estimate
            </Link>
          </div>
        </div>
      </section>

      <CityLeadFormSection
        city="Fairfax Station"
        county="Fairfax County"
        service="premium deck replacement, composite deck, or screened porch"
        formLocation="local_city_fairfax_station_deck_builder"
      />

      <article style={{ padding: '3rem 0' }}>
        <div style={{ maxWidth: 940, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ borderLeft: '4px solid var(--color-primary)', background: '#fff8f1', padding: '1.25rem 1.5rem', borderRadius: 6, marginBottom: '2rem' }}>
            <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Quick Answer</strong>
            <p style={{ margin: 0, lineHeight: 1.7 }} data-speakable>
              Fairfax Station deck projects should be planned as premium structural work, not basic deck add-ons. Most serious composite deck replacements start around $30,000, with larger wooded-lot, screened porch, railing, lighting, and outdoor living scopes often reaching $55,000 to $95,000+. The key steps are confirming Fairfax County permit needs, checking the existing structure, planning drainage and access, and choosing materials that handle shade, moisture, and tree debris.
            </p>
          </div>

          <NamedAuthor context="Fairfax Station, South Run, Crosspointe, and wooded Fairfax County deck projects" />

          <PlanningUpdate
            market="Fairfax Station deck projects"
            notes={[
              'Wooded lots often need access, drainage, tree-root, and privacy planning before structure and material choices are finalized.',
              'Older decks should be inspected at the ledger, joists, beams, posts, stairs, railings, and footings before resurfacing is recommended.',
              'HOA or architectural review should run in parallel with Fairfax County permit planning for planned communities such as Crosspointe.',
            ]}
            links={[
              { href: '/deck-permit-fairfax-county-virginia', label: 'Fairfax County permit guide' },
              { href: '/deck-safety-inspection-checklist', label: 'Deck safety checklist' },
              { href: '/deck-resurfacing-vs-replacement', label: 'Resurface vs replace' },
            ]}
          />

          <GeoAnswerBlock
            question="What makes Fairfax Station deck projects different from standard Fairfax deck projects?"
            answer="Fairfax Station deck projects often involve larger wooded lots, stronger privacy expectations, sloped backyards, walkout basements, HOA review, and premium outdoor living goals. Homeowners should confirm Fairfax County permit needs, inspect the existing deck structure, plan drainage and access, and compare composite or PVC materials before choosing replacement, resurfacing, or a deck-plus-screened-porch design."
            facts={[
              'Primary buyer intent: premium composite deck replacement, wooded-lot planning, screened porch combinations, and Fairfax County permit-safe structure.',
              'Conversion path: structural inspection, Fairfax permit guide, premium estimate request, and material comparison.'
            ]}
            links={[
              { href: '/deck-permit-fairfax-county-virginia', label: 'Fairfax permit guide' },
              { href: '/trex-vs-timbertech-vs-azek', label: 'Compare deck materials' },
              { href: '/get-estimate', label: 'Request an estimate' },
            ]}
          />

          <PremiumCityLeadQualifier
            city="Fairfax Station"
            county="Fairfax County"
            intro="Fairfax Station estimates should quickly separate smaller repair needs from serious premium projects: full structural replacement, composite decking, screened porch additions, elevated stairs, premium railings, lighting, drainage, privacy, and access planning."
            projectTypes={[
              'Large composite deck replacement on wooded or sloped lots',
              'Deck plus screened porch combinations for higher-value outdoor living',
              'Multi-zone entertaining decks with stairs, lighting, and patio connections',
              'Resurfacing only after the existing frame, ledger, posts, and footings pass review',
            ]}
            planningSignals={[
              'Neighborhood or community: South Run, Crosspointe, Barrington, Fairlee, or nearby Clifton/Burke areas',
              'Photos of the current deck, stairs, ledger area, support posts, and rear-yard access path',
              'HOA or architectural review requirements if the home is in a planned community',
              'Preferred scope: replacement, resurfacing, screened porch, covered deck, patio connection, or full outdoor living plan',
            ]}
            links={[
              { href: '/get-estimate', label: 'Request Fairfax Station estimate', primary: true },
              { href: '/deck-safety-inspection-checklist', label: 'Safety inspection checklist' },
              { href: '/composite-deck-cost-northern-virginia', label: 'Composite deck cost guide' },
            ]}
          />

          <div style={{ position: 'relative', width: '100%', height: '420px', borderRadius: 12, overflow: 'hidden', margin: '2.5rem 0' }}>
            <Image
              src="/images/timbertech-deck-black-railings-northern-virginia.jpg"
              alt="Premium composite deck with black railings and wooded backyard setting for Northern Virginia homeowners"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 940px) 100vw, 940px"
              priority
            />
          </div>

          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, marginBottom: '1rem' }}>Fairfax Station Is a Premium Outdoor Living Market</h2>
          <p style={{ lineHeight: 1.75, marginBottom: '1rem' }}>
            Fairfax Station is different from a standard suburban deck market. Many homes sit on larger wooded lots, slope toward natural drainage areas, or connect from a walkout basement to a rear yard that needs stairs, landings, privacy, and outdoor-room planning. That means the right deck design has to solve more than square footage. It has to manage how the family moves from the kitchen to the deck, from the deck to the yard, and from the outdoor living area to a patio, pool, play area, or wooded view.
          </p>
          <p style={{ lineHeight: 1.75, marginBottom: '2rem' }}>
            For South Run, Crosspointe, Barrington, and Fairlee homeowners, we usually start with structure and site planning: existing deck age, ledger condition, footing depth, beam spans, stair location, drainage flow, tree canopy, and whether a screened porch or covered deck should be framed into the first build rather than added later.
          </p>

          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, marginBottom: '1rem' }}>Common Fairfax Station Project Scopes</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1rem', marginBottom: '2.25rem' }}>
            {projectScopes.map((scope) => (
              <Link key={scope.title} href={scope.href} style={{ display: 'block', padding: '1.15rem', border: '1px solid #e5e7eb', borderRadius: 8, color: 'inherit', textDecoration: 'none', background: '#fff' }}>
                <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.05rem', fontWeight: 800 }}>{scope.title}</h3>
                <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.6, fontSize: '0.95rem' }}>{scope.copy}</p>
              </Link>
            ))}
          </div>

          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, marginBottom: '1rem' }}>Composite, PVC, and Premium Railing Choices</h2>
          <p style={{ lineHeight: 1.75, marginBottom: '1rem' }}>
            Shade and tree debris are part of the Fairfax Station environment. Pressure-treated wood can work when it is maintained aggressively, but homeowners who want a cleaner long-term ownership experience usually compare Trex, TimberTech, and AZEK. Lighter composite tones can help with heat and pollen visibility, while richer boards and black railing systems can fit larger homes with a more architectural outdoor living style.
          </p>
          <p style={{ lineHeight: 1.75, marginBottom: '2rem' }}>
            We help homeowners compare board lines, hidden fasteners, fascia, stair trim, black aluminum railing, cable railing, lighting, and privacy details in one plan. The goal is a deck that looks appropriate for the home, handles Fairfax County weather, and does not feel like a builder-grade replacement.
          </p>

          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, marginBottom: '1rem' }}>Neighborhood Planning Notes</h2>
          <div style={{ marginBottom: '2.25rem' }}>
            {neighborhoods.map((item) => (
              <div key={item.name} style={{ borderBottom: '1px solid #ececec', paddingBottom: '1rem', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.08rem', fontWeight: 800, marginBottom: '0.35rem' }}>{item.name}</h3>
                <p style={{ margin: 0, color: '#444', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, marginBottom: '1rem' }}>Permits, HOA Review, and Structural Inspection</h2>
          <p style={{ lineHeight: 1.75, marginBottom: '1rem' }}>
            Fairfax Station is under Fairfax County for building permits, so deck replacements and new structures need permit-ready drawings, clear footing and framing details, and inspection planning. For many homes, HOA or architectural review also matters. Crosspointe and similar communities may need color, railing, footprint, and elevation information before the homeowner can move forward.
          </p>
          <p style={{ lineHeight: 1.75, marginBottom: '2rem' }}>
            If an older deck is already on the home, we do not assume resurfacing is safe. A deck can have attractive surface boards and still have ledger damage, undersized posts, soft stair stringers, failing railings, or footings that need replacement. Our <Link href="/deck-safety-inspection-checklist" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>deck safety inspection checklist</Link> explains the warning signs, and the <Link href="/deck-permit-fairfax-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Fairfax County deck permit guide</Link> explains what reviewers expect.
          </p>

          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, marginBottom: '1rem' }}>Fairfax Station Deck Builder FAQs</h2>
          {faqs.map((faq) => (
            <details key={faq.q} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.1rem 1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 750, cursor: 'pointer', fontSize: '1.02rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '0.85rem', lineHeight: 1.7, color: '#444', marginBottom: 0 }}>{faq.a}</p>
            </details>
          ))}

          <section style={{ marginTop: '2.5rem', padding: '1.5rem', background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: 8 }}>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 850, marginBottom: '1rem' }}>Related Fairfax Station Planning Guides</h2>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: 1.9 }}>
              <li><Link href="/deck-builder-fairfax-va" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Fairfax deck builder guide</Link></li>
              <li><Link href="/deck-builder-burke-va" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Burke deck builder guide</Link></li>
              <li><Link href="/deck-builder-lorton-va" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Lorton deck builder guide</Link></li>
              <li><Link href="/trex-vs-timbertech-vs-azek" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Trex vs TimberTech vs AZEK comparison</Link></li>
              <li><Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Composite deck cost in Northern Virginia</Link></li>
              <li><Link href="/tools/deck-beam-span-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Virginia deck beam span calculator</Link></li>
            </ul>
          </section>
        </div>
      </article>

      <SimpleCTA title="Plan a Premium Fairfax Station Deck the Right Way" buttonText="Get Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath={PATH} />
      <ContactHome />
    </main>
  );
}
