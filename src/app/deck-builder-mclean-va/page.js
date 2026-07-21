import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ProcessSteps from '@/components/ProcessSteps';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import SimpleCTA from '@/components/SimpleCTA';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import JsonLd from '@/components/JsonLd';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import PlanningUpdate from '@/components/PlanningUpdate';
import GeoAnswerBlock from '@/components/GeoAnswerBlock';
import CityLeadFormSection from '@/components/CityLeadFormSection';
import PremiumCityLeadQualifier from '@/components/PremiumCityLeadQualifier';

export const metadata = buildMetadata({
  path: '/deck-builder-mclean-va',
  title: 'Deck Builder in McLean, VA | Trex Certified | Loudoun Decks',
  description: 'Premium deck builder in McLean, VA for composite deck replacement, Trex and TimberTech planning, screened porches, and estate outdoor living projects.',
  image: '/social/deck-builder-mclean-va-social.png',
});

const inclusions = [
  {
    title: "Luxury Design Standards",
    desc: "We specialize in the high-end finishes expected in McLean, including glass railings, cable systems, and custom multi-level architecture."
  },
  {
    title: "Fairfax County RPA Experts",
    desc: "We screen early for Resource Protection Area (RPA) constraints that can affect many McLean properties near the Potomac."
  },
  {
    title: "Concierge Project Management",
    desc: "Full management of HOA submissions, permits, and engineering for a seamless, white-glove experience in McLean."
  }
];

const mcleanFAQs = [
  {
    q: "How much does a custom deck cost in McLean, VA?",
    a: "Many serious McLean composite deck replacements and outdoor living projects plan around $40,000 to $120,000+, depending on size, framing condition, material tier, railing, lighting, stairs, drainage, and whether the scope includes a screened porch or covered structure. Smaller repair-only work should be evaluated separately."
  },
  {
    q: "Do I need HOA approval for a deck in McLean?",
    a: "Many McLean neighborhoods, including Langley Forest, Chesterbrook, and the Farms of McLean, have HOA or architectural review requirements. We research your specific community's rules and handle all submissions for you."
  },
  {
    q: "What deck permits does McLean require?",
    a: "McLean falls under Fairfax County jurisdiction. All decks require building and zoning permits. Plan review typically takes 3-6 weeks. For properties near the Potomac, additional environmental (RPA) review may be necessary."
  },
  {
    q: "Can you build multi-level decks with outdoor kitchens?",
    a: "Yes. We specialize in complete outdoor living environments for McLean homes, integrating high-end composite decks with stone outdoor kitchens, fire pits, and pergola structures."
  },
  {
    q: "Do you build Trex and TimberTech decks in McLean?",
    a: "Yes. Loudoun Decks builds Trex and TimberTech deck projects in McLean, and we help homeowners compare product lines, manufacturer warranty terms, colors, railing options, and project-specific installation requirements before final material selection."
  }
];

const mcleanFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": mcleanFAQs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }))
};

const expansionSections = [
  {
    title: "Premium Deck Planning for McLean Homes",
    paragraphs: [
      "McLean deck projects need a different planning standard than a basic replacement deck. Older framing, larger lots, privacy expectations, HOA review, slope, drainage, and Fairfax County permit requirements can all change the right design before material selection begins.",
      "For serious McLean scopes, we help homeowners compare Trex, TimberTech, and AZEK product lines, railing systems, lighting, stairs, under-deck drainage, and screened porch tie-ins before locking the project budget. The goal is a durable outdoor living plan that looks intentional with the home, not an add-on built around the cheapest board option.",
      "Our process is built for full deck replacement and outdoor living projects where site conditions, code compliance, material selection, and lead quality matter. Repair-only requests are better routed through our deck repair service so premium build calendars stay focused on the right projects."
    ]
  },
  {
    title: "Engineering for McLean's Unique Landscapes",
    paragraphs: [
      "Many properties in McLean feature significant elevation changes or are located in environmentally sensitive areas near the Potomac River. Building in these zones requires a deck builder with deep engineering knowledge. We specialize in multi-level deck structures that turn sloped backyards into functional, beautiful entertainment hubs.",
      "If your property falls within a Resource Protection Area (RPA), Fairfax County may require additional environmental review and mitigation planning. We screen for those constraints early in the design phase so the deck concept, access path, and permit path are realistic before pricing is finalized.",
      "The strongest McLean deck plans resolve structure, access, privacy, drainage, and permit path before the homeowner is asked to commit to a final scope. That protects the budget and reduces avoidable change orders during construction."
    ],
    listItems: [
      { label: "RPA Screening", text: "Early review for environmental constraints that can affect properties near the Potomac." },
      { label: "Multi-Level Engineering", text: "Custom structural solutions for sloped and complex McLean lots." },
      { label: "Integrated Lighting", text: "Low-voltage LED systems that transform your McLean deck into a nighttime oasis." },
      { label: "Hidden Fasteners", text: "Screw-free deck surfaces for a clean, luxury finish that is safe for bare feet." }
    ]
  },
  {
    title: "Complete Outdoor Living Transformations",
    paragraphs: [
      "For many of our McLean clients, a deck is just the foundation. We specialize in integrating decks with other high-end outdoor features to create a cohesive lifestyle environment. This includes screened porches with tongue-and-groove ceilings, retractable screen systems, and built-in heaters for three-season comfort.",
      "We also design and build custom outdoor kitchens, stone fire pits, and louvered pergola systems. Imagine hosting a summer dinner party in McLean on a deck that features a full grill station, ambient lighting, and a shaded pergola for daytime comfort. Our 'Full Project' philosophy ensures that all these elements are designed and built together with a singular focus on quality.",
      "Every project includes a dedicated project manager who provides consistent communication from start to finish. We understand that your time is valuable, and our goal is to deliver your new outdoor space on time and with zero stress."
    ]
  },
  {
    title: "The Investment Value of a McLean Custom Deck",
    paragraphs: [
      "In the high-value McLean real estate market, a custom-designed outdoor living space is a major asset. It increases your home's usable square footage and provides an immediate competitive advantage if you ever decide to sell. Buyers in areas like Great Falls and McLean prioritize low-maintenance, luxury outdoor features.",
      "By investing in a composite deck today, you are also eliminating the future costs of sanding and staining. A traditional wood deck in Northern Virginia requires professional maintenance every 2 years, which can cost thousands over the life of the deck. Our Trex and TimberTech projects are designed to stay beautiful for 25 to 50 years with nothing more than an occasional wash.",
      "For high-income McLean homeowners, the best deck investment is not just larger square footage. It is a scope that fits the architecture, improves daily use, protects resale expectations, and avoids cheap-looking materials or shortcuts that age poorly."
    ]
  }
];

const projectScenarios = [
  {
    title: "Code-reset composite replacement",
    range: "$40k-$75k+ planning range",
    details: "Best for older pressure-treated decks where ledger, footings, stairs, and guardrails need inspection before reuse is considered. Typical upgrades include Trex or TimberTech decking, aluminum railing, code-compliant stairs, lighting, and a cleaner access plan."
  },
  {
    title: "Estate outdoor living deck",
    range: "$65k-$120k+ planning range",
    details: "Best for larger McLean homes that need a 500-800 sqft entertainment deck, AZEK or premium composite boards, glass/cable/aluminum railing, low-voltage lighting, privacy planning, under-deck drainage, and slope-aware layout."
  },
  {
    title: "Deck + screened porch or covered structure",
    range: "$80k-$150k+ planning range",
    details: "Best when the deck is part of a larger outdoor room with roof tie-in, screened porch, heaters, fan, fireplace, or covered dining zone. These projects need early review for structure, drainage, RPA exposure, and Fairfax County permit path."
  }
];

export default function McLeanDeckBuilderPage() {
  return (
    <main>
      <JsonLd data={mcleanFaqSchema} />
      <LocalBusinessSchema city="McLean" url="https://ldndecks.com/deck-builder-mclean-va" />
      <WebPageSchema dateModified="2026-07-06" url="https://ldndecks.com/deck-builder-mclean-va" name="Deck Builder in McLean, VA | Trex Certified | Loudoun Decks" description="Premium deck builder in McLean, VA for composite deck replacement, Trex and TimberTech planning, screened porches, and estate outdoor living projects." speakable />
      <ServicesHeader
        subtext="McLean, VA's Choice for Luxury Decks"
        title="Custom Deck Builder in McLean, VA"
        description="Loudoun Decks plans high-end composite deck replacements, multi-level outdoor living structures, and screened porches for McLean homeowners who need premium materials, code-aware planning, and a serious written scope."
      />

      {/* Pricing Anchor - Conversion Filtering */}
      <section style={{ backgroundColor: '#fff5f2', padding: '24px 20px', borderBottom: '1px solid #ffdbd1' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: '#d14817', margin: 0, fontWeight: '500' }}>
            <strong style={{ color: '#111', fontSize: '18px' }}>McLean premium planning range: most serious projects start around $40,000+</strong>
            <br />
            We focus on <strong style={{ color: '#111' }}>full replacement, composite, screened porch, and outdoor living scopes</strong>. Need a repair instead? Visit our <a href="/services/deck-repair" style={{ color: '#d14817', textDecoration: 'underline', fontWeight: 600 }}>deck repair service</a> for board replacement, railings, and structural fixes.
          </p>
        </div>
      </section>

      <ServiceMain
        subtitle="McLean's Trusted Choice"
        title="Deck Builder McLean VA - Premium Composite Decks"
        description="We design McLean deck replacement and outdoor living projects around structure, permits, materials, drainage, privacy, and long-term value before the final scope is priced."
        listItems={[
          "Trex, TimberTech and AZEK material planning",
          "Early screening for Fairfax County RPA environmental constraints",
          "Custom multi-level & luxury estate designs",
          "Screened porches, outdoor kitchens & cable railings",
          "Written scope and lead qualification before project commitment"
        ]}
        image1="/images/img64.jpeg"
        image2="/images/img21.jpeg"
      />
      <CityLeadFormSection
        city="McLean"
        county="Fairfax County"
        service="premium deck replacement or composite deck"
        formLocation="local_city_mclean_deck_builder"
      />
      <PlanningUpdate
        market="McLean decks in 2026"
        notes={[
          "McLean planning should screen for Fairfax County jurisdiction, HOA review, slope, and possible RPA constraints before premium materials are selected.",
          "Large estate decks often need early decisions on glass, cable, aluminum railing, drainage, lighting, and screened porch integration.",
          "For older McLean decks, the first budget question is whether the framing can be reused or whether a code-reset replacement is safer."
        ]}
        links={[
          { href: "/deck-permit-fairfax-county-virginia", label: "Fairfax permit guide" },
          { href: "/mclean-great-falls-premium-deck-budget", label: "McLean budget guide" },
          { href: "/trex-vs-timbertech-vs-azek", label: "Premium material comparison" }
        ]}
      />
      <GeoAnswerBlock
        question="Who plans premium composite decks in McLean, VA?"
        answer="McLean deck projects usually need premium material planning, Fairfax County permit review, slope and drainage checks, privacy planning, and early decisions on railings, lighting, screened porches, or outdoor kitchens. Loudoun Decks plans composite deck replacement and outdoor living scopes for McLean homeowners while keeping manufacturer, project, and neighborhood proof claims gated until verified evidence is available."
        facts={[
          'Primary buyer intent: premium composite decks, estate outdoor living, screened porches, and code-reset replacement.',
          'Conversion path: premium budget guide, material comparison, and written estimate.'
        ]}
        links={[
          { href: '/mclean-great-falls-premium-deck-budget', label: 'McLean budget guide' },
          { href: '/trex-vs-timbertech-vs-azek', label: 'Material comparison' },
          { href: '/get-estimate', label: 'Get a McLean estimate' }
        ]}
      />
      <PremiumCityLeadQualifier
        city="McLean"
        county="Fairfax County"
        intro="McLean leads are most valuable when the first conversation separates a basic repair from a full composite replacement, screened porch, covered deck, or estate outdoor living scope. The estimate should account for slope, privacy, RPA exposure, access, railings, lighting, drainage, and whether the existing frame can safely support resurfacing."
        projectTypes={[
          'Estate composite deck replacement with Trex, TimberTech, or AZEK planning',
          'Deck plus screened porch, covered structure, or outdoor kitchen scope',
          'Multi-level decks for sloped or privacy-sensitive McLean yards',
          'Code-reset replacement where old framing, ledger, stairs, or footings need review',
        ]}
        planningSignals={[
          'Photos of the current deck, rear elevation, stairs, and access path',
          'HOA, architectural review, or RPA concerns if known',
          'Preferred material tier, railing style, lighting, and drainage needs',
          'Whether the goal is replacement, resurfacing, screened porch, or full outdoor living',
        ]}
        links={[
          { href: '/get-estimate', label: 'Request McLean estimate', primary: true },
          { href: '/mclean-great-falls-premium-deck-budget', label: 'Premium budget guide' },
          { href: '/trex-vs-timbertech-vs-azek', label: 'Compare premium materials' },
        ]}
      />
      <ServiceContentExpansion sections={expansionSections} />
      
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
          <Image
            src="/images/img17.jpeg"
            alt="Premium deck planning example for McLean, Virginia homeowners"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>McLean Project Planning: Premium Deck + Outdoor Living</h2>
        <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>
          Typical McLean scopes include 450 to 700 sqft multi-level composite decks, TimberTech AZEK or Trex Transcend boards,
          glass or cable railing, lighting, screened porch tie-ins, and slope-aware access planning.
          The right McLean scope should be confirmed after a site visit, permit-path review, slope and drainage check, material selection, and any HOA or RPA screening.
        </p>
      </div>

      <section style={{ backgroundColor: '#f8fafc', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.75rem' }}>McLean Premium Project Scenarios</h2>
          <p style={{ maxWidth: 760, lineHeight: 1.7, marginBottom: '1.5rem' }}>
            These are planning scenarios, not final quotes. A McLean estimate should be confirmed after site access, framing condition,
            Fairfax County permit path, HOA requirements, drainage, and material selections are reviewed.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {projectScenarios.map((scenario) => (
              <article key={scenario.title} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8, padding: '1.25rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>{scenario.title}</h3>
                <p style={{ color: '#d14817', fontWeight: 700, marginBottom: '0.6rem' }}>{scenario.range}</p>
                <p style={{ lineHeight: 1.65, margin: 0 }}>{scenario.details}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>McLean Permit, HOA, Slope, and RPA Readiness</h2>
          <p style={{ lineHeight: 1.7, marginBottom: '1rem' }}>
            McLean projects often need more than a simple deck drawing. Before the design is treated as final, the scope should be screened
            for Fairfax County zoning and building permits, Resource Protection Area exposure near streams or the Potomac, HOA or architectural
            review, access constraints, privacy from neighboring homes, and drainage below the deck.
          </p>
          <p style={{ lineHeight: 1.7, marginBottom: '1.25rem' }}>
            This is especially important in areas such as Langley Forest, Chesterbrook, Salona Village, and larger estate lots where slope,
            setbacks, tree coverage, and exterior design expectations can change the best construction path.
          </p>
          <p style={{ margin: 0 }}>
            Start with the <Link href="/deck-permit-fairfax-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Fairfax County deck permit guide</Link>,
            compare premium material budgets in the <Link href="/mclean-great-falls-premium-deck-budget" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>McLean and Great Falls budget guide</Link>,
            or request a <Link href="/get-estimate" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>written McLean estimate</Link>.
          </p>
        </div>
      </section>

      <ServiceInclusions
        title="Why McLean Chooses Loudoun Decks"
        description="Local knowledge, premium materials, and a process built for McLean properties."
        items={inclusions}
      />
      <ProcessSteps />
      <ServicesFAQ canonicalUrl="https://ldndecks.com/deck-builder-mclean-va" withSchema={false}
        title="Deck Builder McLean VA - FAQs"
        faqs={mcleanFAQs}
      />
      <ServiceAreasGrid />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            ['/composite-deck-builder-loudoun', 'Composite Deck Builder in Loudoun County'],
            ['/mclean-great-falls-premium-deck-budget', 'McLean &amp; Great Falls Premium Deck Budget Guide'],
            ['/screened-porch-builder-northern-virginia', 'Screened Porch Builder Northern Virginia'],
            ['/deck-permit-fairfax-county-virginia', 'Fairfax County Deck Permit Guide'],
            ['/composite-deck-cost-northern-virginia', 'How Much Does a Deck Cost in Northern Virginia?'],
            ['/timbertech-azek-deck-cost-northern-virginia', 'TimberTech &amp; AZEK Premium Deck Cost'],
            ['/trex-vs-timbertech-vs-azek', 'Trex vs TimberTech vs AZEK Comparison'],
            ['/premium-composite-deck-replacement-arlington-alexandria-mclean-va', 'Premium Composite Replacement for Arlington, Alexandria & McLean'],
          ].map(([href, text]) => (
            <li key={href} style={{ marginBottom: '0.5rem' }}>
              <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link>
            </li>
          ))}
        
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (Google reviews) →</Link></li>
            <li key="/bbb" style={{ marginBottom: '0.5rem' }}><Link href="/bbb-accredited-deck-builder-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>BBB Accredited Deck Builder →</Link></li>
            <li key="/before-after" style={{ marginBottom: '0.5rem' }}><Link href="/before-and-after" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Before & After Premium Projects →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
            <li key="/deck-payment-estimator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-payment-estimator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck Payment Estimator →</Link></li>
            <li key="/get-estimate" style={{ marginBottom: '0.5rem' }}><Link href="/get-estimate" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Request a Written McLean Estimate →</Link></li>
            <li key="/deck-builder-northern-virginia" style={{ marginBottom: '0.5rem' }}><Link href="/deck-builder-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Northern Virginia Deck Builder Guide →</Link></li>
            <li key="/services/new-decks" style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building Services →</Link></li>
          </ul>
      </section>
      <section style={{ padding: '2rem 1.5rem' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><GoogleMapEmbed city="McLean" /></div></section>
      <SimpleCTA title="Build Your Luxury Deck in McLean" buttonText="Get Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath="/deck-builder-mclean-va" />
      <NamedAuthor context="McLean and Northern Virginia" lastUpdated="2026-07-06" />
      <ContactHome />
    </main>
  );
}
