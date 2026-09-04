import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import JsonLd from '@/components/JsonLd';
import ServiceSchema from '@/components/ServiceSchema';
import SimpleCTA from '@/components/SimpleCTA';
import AboveFoldCTA from '@/components/AboveFoldCTA';
import ServicesCallToAction from '@/components/ServicesCallToAction';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';

import NamedAuthor from '@/components/NamedAuthor';
import PlanningUpdate from '@/components/PlanningUpdate';
import GeoAnswerBlock from '@/components/GeoAnswerBlock';
import DecisionSupportSection from '@/components/DecisionSupportSection';
import ArticleSchema from '@/components/ArticleSchema';
export const metadata = buildMetadata({
  path: "/services/deck-replacement",
  title: "Professional Deck Replacement Northern Virginia | Rebuild & Remodel",
  description: "Full deck replacement in Northern Virginia. Projects from $15k+, permits and HOA handled, 2-4 week typical build timeline, composite rebuilds.",
  image: "/social/deck-replacement-service-social.png",
});

const replacementSections = [
  {
    title: "Why Replace Instead of Repair?",
    paragraphs: [
      "Often, an aging deck has underlying structural issues or wood rot that makes simple repairs unsafe or cost-ineffective. Our replacement service provides a fresh start with modern materials."
    ],
    listItems: [
      { label: "1. Safety First", text: "We identify and fix hidden structural failures in old ledger boards or joists." },
      { label: "2. Value Planning", text: "A new composite deck can be the stronger long-term choice when repairs would leave old structural risk in place." },
      { label: "3. Lower Maintenance", text: "Trade regular staining and sanding for a lower-maintenance composite or PVC surface selected for your project goals." },
      { label: "4. Modern Aesthetics", text: "Update your home's look with current colors, hidden fasteners, and sleek railing systems." }
    ]
  },
  {
    title: "Our Specialized Rebuild Process",
    paragraphs: [
      "We don't just 'slap new boards' on top of old wood. Our meticulous process ensures your new deck is built to last a lifetime."
    ],
    listItems: [
      { label: "Structural Audit", text: "We perform a deep-dive inspection of your existing framing to see what can be safely salvaged." },
      { label: "Clean Tear-Down", text: "Eco-friendly removal and disposal of your old, rotted, or infested deck materials." },
      { label: "Framing Reinforcement", text: "We reinforce existing joists or pour new footings to meet modern building codes." },
      { label: "Composite Transformation", text: "Installation of Trex, AZEK, or TimberTech boards with product-specific manufacturer warranty terms reviewed during material selection." }
    ]
  }
];

const replacementBenefits = [
  { title: "Code Compliance", desc: "We plan rebuilds around current Northern Virginia permit and inspection requirements." },
  { title: "Composite Deck Planning", desc: "Trex, TimberTech, and AZEK/PVC options are matched to budget, exposure, railing plan, and maintenance goals." },
  { title: "Clean Jobsite", desc: "No debris left behind; we respect your lawn and landscaping." },
  { title: "Permits & HOA Handled", desc: "We coordinate county permit requirements and HOA architectural review details." },
  { title: "Typical Timeline: 2-4 Weeks", desc: "Most full replacement builds take 2-4 weeks once permits and material selections are complete." },
  { title: "Before & After Results", desc: "See completed deck transformations so you can compare old wood decks with finished composite rebuilds." },
  { title: "Written Proposal", desc: "Detailed, itemized scope and pricing after inspection, material selection, and permit path review." }
];

const replacementFaq = [
  {
    question: "When should I replace a deck instead of repairing it?",
    answer: "Replacement usually deserves serious consideration when the ledger connection, footings, posts, joists, stairs, or railings have widespread deterioration, when the framing cannot safely support new boards, or when repair costs are approaching the cost of a rebuild. A structural evaluation should happen before that decision is made.",
  },
  {
    question: "Can Loudoun Decks reuse my existing deck frame?",
    answer: "Sometimes. Reuse depends on framing condition, age, spans, fasteners, flashing, footing depth, permit history, and whether the frame is suitable for the new decking and railing system. If the frame is not sound, replacement is safer than covering old problems with new boards.",
  },
  {
    question: "Do full deck replacements require permits in Northern Virginia?",
    answer: "Most full deck replacements in Loudoun, Fairfax, and Prince William counties require permit review, especially when framing, footings, ledger attachment, stairs, or guardrails are involved. HOA approval may also apply in communities such as Ashburn, Leesburg, Brambleton, South Riding, Reston, Vienna, and Gainesville.",
  },
  {
    question: "Is composite decking worth it during a replacement?",
    answer: "Composite or PVC decking often makes sense during a full replacement because the structure is already being reset. Homeowners commonly compare pressure-treated wood, Trex, TimberTech, and AZEK based on upfront cost, maintenance, heat, color, railing options, and long-term ownership goals.",
  },
  {
    question: "How do I budget for a deck replacement?",
    answer: "Start with size, height, stairs, railing, material tier, demolition, structural upgrades, permit/HOA needs, and site access. The deck cost calculator can help with planning ranges, but the final estimate should come from a site-specific scope review.",
  },
];

const replacementDecisionColumns = [
  {
    title: "Replacement is the right conversation when",
    items: [
      "Ledger attachment, posts, footings, joists, stairs, or railings show system-wide deterioration or unsafe movement.",
      "The owner wants to reset layout, structure, permits, railings, stairs, lighting, and low-maintenance decking in one scope.",
      "Repair or resurfacing would leave old structural risk underneath a new surface.",
    ],
  },
  {
    title: "Do not overbuy replacement when",
    items: [
      "The issue is a localized failed inspection item, isolated rot, a loose railing, or one stair section on an otherwise sound deck.",
      "The existing frame passes inspection and the main goal is new composite boards, railings, fascia, and lighting.",
      "Budget planning has not separated repair, resurfacing, and full rebuild assumptions.",
    ],
  },
  {
    title: "Best next step",
    items: [
      "Run the repair/resurface/replacement comparison before treating every aging deck as a teardown.",
      "Use the cost calculator and permit guides to model the rebuild path by county and project size.",
      "Request a written replacement scope only after the inspection confirms the old structure should not be kept.",
    ],
  },
];

const replacementGeoAnswers = [
  {
    id: 'deck-replacement-cost-answer',
    q: 'How much does deck replacement cost?',
    a: 'Deck replacement cost depends on size, framing scope, demolition, stair layout, railing, decking material, permits, HOA requirements, and whether hidden structural damage is found. Composite replacement usually costs more than basic wood replacement, but it can reduce future maintenance and improve long-term usability.',
  },
  {
    id: 'reuse-old-deck-framing',
    q: 'Can old deck framing be reused?',
    a: 'Old framing can sometimes be reused, but only if it is structurally sound, code-compliant, properly flashed, and compatible with the new decking system. Many replacement projects reveal ledger, joist, stair, or footing issues that should be corrected before new boards and railings are installed.',
  },
  {
    id: 'deck-replacement-timeline',
    q: 'How long does deck replacement take?',
    a: 'Deck replacement timing depends on design, permits, HOA approval, demolition, material availability, weather, and inspection schedules. A straightforward replacement may be faster than a full redesign, while elevated decks, stairs, covered areas, lighting, or structural corrections usually require more planning and build time.',
  },
  {
    id: 'deck-replacement-permits',
    q: 'Do deck replacements need permits?',
    a: 'Many deck replacements in Northern Virginia require permits when structural components, footings, ledgers, stairs, railings, or layout dimensions change. Permit requirements vary by county and project scope. Homeowners should confirm requirements before construction so inspections, code details, and HOA documentation are handled correctly.',
  },
  {
    id: 'composite-deck-replacement-value',
    q: 'Is composite worth it for deck replacement?',
    a: 'Composite is often worth considering for replacement when the homeowner wants lower maintenance, better long-term appearance, and fewer staining or sealing cycles. The value depends on project budget, expected ownership period, sun exposure, design goals, and whether the existing frame needs significant structural work.',
  },
];

export default function DeckReplacementPage() {
  return (
    <main>
      <WebPageSchema dateModified="2026-09-04" url="https://ldndecks.com/services/deck-replacement" name="Professional Deck Replacement Northern Virginia | Rebuild &amp; Remodel" description="Full deck replacement in Northern Virginia. Projects from $15k+, permits and HOA handled, 2-4 week typical build timeline, composite rebuilds." speakable />
      <ArticleSchema
        title="Deck Replacement in Northern Virginia"
        description="Deck replacement planning guide for Northern Virginia homeowners comparing repair, resurfacing, full rebuilds, structural code resets, local permit paths, composite materials, and written estimate routing."
        path="/services/deck-replacement"
        image="/social/deck-replacement-service-social.png"
        datePublished="2026-05-26"
        dateModified="2026-09-04"
        speakable={[
          '#deck-replacement-answer',
          '#deck-replacement-decision-support',
          '#deck-replacement-code-reset',
          '#deck-replacement-local-markets',
          '#deck-replacement-cost-guides',
          '#deck-replacement-estimate-routing',
        ]}
        citableParts={[
          {
            id: 'deck-replacement-answer',
            name: 'Deck Replacement Quick Answer',
            text: 'Deck replacement is usually the right path when ledger attachment, footings, posts, joists, stairs, or railings show widespread deterioration or when repair costs approach a full rebuild.',
          },
          ...replacementGeoAnswers.map((item) => ({
            id: item.id,
            name: item.q,
            text: item.a,
          })),
          {
            id: 'deck-replacement-decision-support',
            name: 'Deck Replacement Decision Support',
            text: 'Homeowners should compare repair, resurfacing, and full replacement before treating every aging deck as a teardown, with frame condition deciding the correct path.',
          },
          {
            id: 'deck-replacement-code-reset',
            name: 'Deck Replacement Code Reset',
            text: 'A full deck replacement can reset footings, joist sizing, ledger connections, square layout, permit history, stairs, railings, and low-maintenance decking in one scope.',
          },
          {
            id: 'deck-replacement-local-markets',
            name: 'Deck Replacement Local Market Routing',
            text: 'Deck replacement planning should route by Northern Virginia market because county permits, HOA rules, access, and existing framing conditions change the written scope.',
          },
          {
            id: 'deck-replacement-cost-guides',
            name: 'Deck Replacement Cost and Decision Guides',
            text: 'Deck replacement budget planning should compare resurfacing versus replacement, repair-first issues, composite costs, material comparisons, payment estimates, before-and-after proof, and written estimate requests.',
          },
          {
            id: 'deck-replacement-estimate-routing',
            name: 'Deck Replacement Estimate Routing',
            text: 'A written deck replacement estimate should follow a structural evaluation, material choice, permit path, local-market review, and repair/resurface/replacement decision.',
          },
        ]}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          '@id': 'https://ldndecks.com/services/deck-replacement#faq',
          mainEntity: replacementFaq.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }}
      />
      <ServiceSchema
        name="Deck Replacement and Rebuilding"
        description="Professional deck replacement services including structural assessment, old deck removal, and composite or PVC rebuild planning using Trex, TimberTech, and AZEK options."
        url="https://ldndecks.com/services/deck-replacement"
        category="Deck Construction"
        lowPrice="15000"
        highPrice="65000"
        relatedServices={['https://ldndecks.com/services/new-decks', 'https://ldndecks.com/services/deck-resurfacing', 'https://ldndecks.com/services/deck-repair']}
      />
      <ServicesHeader
        subtext="Projects from $15,000+"
        title="Professional Deck Replacement in Northern Virginia"
        description="Don't let an aging, splintering deck hold you back. We inspect old structures, separate repair from replacement, and build low-maintenance outdoor retreats with permit and HOA planning included in the written scope."
        estimateHref="#deck-replacement-estimate"
      />

      <div id="deck-replacement-estimate" style={{ scrollMarginTop: '24px' }}>
        <AboveFoldCTA
          headline="Aging deck in Northern Virginia? Get a free structural evaluation and replacement estimate today."
          showQuickForm
          quickFormService="Deck Replacement"
          quickFormLocation="paid_search_replacement_above_fold"
          quickFormHeading="Need a deck replacement quote? Send the basics and we will call back."
        />
      </div>

      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
        <NamedAuthor context="Loudoun, Fairfax, and Prince William counties" lastUpdated="2026-09-04" />
      </section>

      <PlanningUpdate
        market="Northern Virginia deck replacement in 2026"
        notes={[
          "Replacement is often the safer path when the ledger, footings, stairs, or railing system no longer match current code expectations.",
          "A full rebuild can reset structural details for Loudoun, Fairfax, and Prince William County review instead of hiding old framing beneath new boards.",
          "Homeowners comparing resurfacing and replacement should inspect the frame first, then price materials, railings, stairs, and permit scope."
        ]}
        links={[
          { href: "/deck-resurfacing-vs-replacement", label: "Resurface vs replace" },
          { href: "/deck-safety-inspection-checklist", label: "Safety inspection checklist" },
          { href: "/deck-cost-calculator", label: "Deck cost calculator" }
        ]}
      />

      <section id="deck-replacement-answer" data-speakable="deck-replacement-answer">
        <GeoAnswerBlock
          question="When should a Northern Virginia homeowner replace a deck instead of repairing it?"
          answer="A deck should usually be replaced when the ledger connection, footings, posts, joists, stairs, or railings show widespread deterioration, when the frame cannot safely accept new composite boards, or when repairs approach the cost of a rebuild. Replacement also resets structural details for current permit review, HOA documentation, modern railing systems, and low-maintenance composite or PVC decking."
          facts={[
            'Replacement path: unsafe structure, failing frame, major layout change, or full code reset',
            'Repair path: isolated post, stair, railing, ledger, or board issues on an otherwise sound deck',
            'Proof status: before/after claims require verified project evidence before public case-study use',
          ]}
          links={[
            { href: '/deck-resurfacing-vs-replacement', label: 'Resurface vs replace' },
            { href: '/services/deck-repair', label: 'Deck repair' },
            { href: '/composite-deck-cost-northern-virginia', label: 'Replacement cost planning' },
          ]}
        />
      </section>

      <section style={{ padding: '2.5rem 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {replacementGeoAnswers.map((item) => (
              <section key={item.id} id={item.id} data-speakable={item.id} style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: '1rem', background: '#fbfdff' }}>
                <h2 style={{ fontSize: '1.08rem', fontWeight: 800, marginBottom: '0.55rem' }}>{item.q}</h2>
                <p style={{ margin: 0, lineHeight: 1.65, color: '#334155' }}>{item.a}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section id="deck-replacement-decision-support" data-speakable="deck-replacement-decision-support">
        <DecisionSupportSection
          eyebrow="Replacement triage"
          title="Replace when the structure needs a reset"
          intro="Full replacement is a high-value path when it solves safety, code, layout, and long-term material goals together. It should not be the default answer for isolated repair items or a frame that still qualifies for resurfacing."
          columns={replacementDecisionColumns}
          links={[
            { href: '/deck-resurfacing-vs-replacement', label: 'Compare all three paths' },
            { href: '/services/deck-repair', label: 'Review repair-first issues' },
            { href: '/deck-cost-calculator', label: 'Model rebuild cost' },
            { href: '/deck-permit-fairfax-county-virginia', label: 'Check permit planning' },
          ]}
        />
      </section>

      {/* Pricing Anchor - Conversion Filtering */}
      <section style={{ backgroundColor: '#fff5f2', padding: '24px 20px', borderBottom: '1px solid #ffdbd1' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: '#d14817', margin: 0, fontWeight: '500' }}>
            <strong style={{ color: '#111', fontSize: '18px' }}>Full deck replacement projects from $15,000+</strong>
            <br />
            On this page we focus on <strong style={{ color: '#111' }}>full tear-down and rebuild projects</strong>. Looking for board replacement, railing or structural fixes on an otherwise sound deck? See our <a href="/services/deck-repair" style={{ color: '#d14817', textDecoration: 'underline', fontWeight: 600 }}>deck repair service</a>.
          </p>
          <p style={{ fontSize: '15px', color: '#555', margin: '12px 0 0' }}>
            Planning a full rebuild across Loudoun, Fairfax, or Prince William? Start with the <Link href="/deck-builder-northern-virginia" style={{ color: '#d14817', textDecoration: 'underline', fontWeight: 600 }}>Northern Virginia deck builder guide</Link> for materials, permits, and project paths.
          </p>
          <p style={{ fontSize: '15px', color: '#555', margin: '12px 0 0' }}>
            In Arlington, Alexandria, or McLean? Use the <Link href="/premium-composite-deck-replacement-arlington-alexandria-mclean-va" style={{ color: '#d14817', textDecoration: 'underline', fontWeight: 600 }}>premium composite replacement corridor guide</Link> for higher-value project planning, materials, permits, railings, lighting, and estimate prep.
          </p>
        </div>
      </section>

      {/* Pricing Anchor */}
      <section style={{ backgroundColor: '#f9f9f9', padding: '24px 20px', borderBottom: '1px solid #eee' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: '#555', margin: 0 }}>
            <strong style={{ color: '#222' }}>Full deck replacement projects typically range from $20,000-$50,000</strong>
            {' '}— deck size, structural condition, materials, and railing upgrades affect final pricing.{' '}
            <strong>Structural evaluation, permit guidance, and HOA coordination are confirmed in the written project scope.</strong>
          </p>
        </div>
      </section>

      <ServiceMain
        subtitle="Northern Virginia's Rebuild Experts"
        title="Is it Time to Replace Your Deck?"
        description="If your deck is over 15 years old, shows signs of wood rot, or requires constant sanding and staining, replacement may be the safer long-term investment. We help Northern Virginia homeowners compare repair, resurfacing, wood replacement, and composite or PVC rebuild options."
        listItems={[
          "Full removal of existing structural debris",
          "Verification of framing and footing integrity",
          "High-end composite and PVC board options",
          "Modern railing and lighting upgrades",
          "Comprehensive HOA and permit coordination",
          "Typical build timeline: 2-4 weeks",
          "Before & after transformation planning"
        ]}
        image1="/images/img05.jpeg"
        image2="/images/img06.jpeg"
      />
      <ServiceContentExpansion sections={replacementSections} />
      <section id="deck-replacement-code-reset" data-speakable="deck-replacement-code-reset" style={{ padding: '20px 20px 40px', maxWidth: '900px', margin: '0 auto', lineHeight: 1.7 }}>
        <h2 style={{ fontSize: '30px', marginBottom: '16px', fontWeight: 800 }}>Replacement Is Also a Code Reset</h2>
        <p style={{ fontSize: '17px', color: '#555', marginBottom: 0 }}>
          A full replacement lets us correct the problems that make older decks fail: shallow footings, undersized joists,
          racked framing, weak ledger connections, and unpermitted work that creates resale issues. Before construction, we confirm
          <Link href="/tools/deck-footing-depth-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}> footing depth</Link>,
          {' '}<Link href="/blog/2x8-vs-2x10-deck-joists" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>joist sizing</Link>,
          {' '}<Link href="/blog/3-4-5-rule-decking" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>square layout</Link>, and
          {' '}<Link href="/blog/deck-without-permit-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>permit history</Link> so the rebuild is clean from day one.
        </p>
      </section>
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '20px', fontWeight: '800' }}>Common Signs Your Deck Needs Replacement</h2>
        <p style={{ fontSize: '18px', color: '#555', maxWidth: '800px', margin: '0 auto 50px', lineHeight: '1.6' }}>
          If your deck exhibits any of the following issues, a full replacement is often the safest and most cost-effective solution.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
          <div style={{ position: 'relative', height: '300px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
            <Image src="/torndeck.webp" alt="Severe board rot and splintering on an aged Northern Virginia wood deck — full replacement needed" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'relative', height: '300px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
            <Image src="/torndeck1.webp" alt="Weathered and graying structural wood on a 20-year Loudoun County deck — replacement candidate" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'relative', height: '300px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
            <Image src="/torndeck2.webp" alt="Failing fasteners and corroded hardware on a Northern Virginia deck — replacement triggered" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'relative', height: '300px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
            <Image src="/torndeck3.jpg" alt="Unsafe railing and structural decay on an aging Northern Virginia deck — Loudoun Decks replacement" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '15px', fontWeight: 800 }}>Seamless Transitions</h2>
        <p style={{ marginBottom: '40px', fontSize: '18px', color: '#555' }}>We handle everything from the first drill to the final cleanup.</p>
        <div style={{ position: 'relative', height: '500px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
          <Image src="/images/img97.jpeg" alt="Composite Trex deck replacement transformation in Northern Virginia by Loudoun Decks" fill sizes="100vw" style={{ objectFit: 'cover' }} />
        </div>
      </section>
      <ServiceInclusions
        title="The LDN Difference in Replacements"
        description="Why trust us with your rebuild project?"
        items={replacementBenefits}
      />
      <ServiceAreasGrid />
      <ServicesCallToAction />

      <section id="deck-replacement-local-markets" data-speakable="deck-replacement-local-markets" style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Deck Replacement by Local Market</h2>
        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
          Replacement projects often depend on county permit review, HOA rules, access, and existing framing conditions. Use the local planning page closest to the property before requesting a written replacement estimate.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', marginBottom: '1rem' }}>
          {[
            ['/deck-builder-ashburn-va', 'Ashburn deck replacement'],
            ['/deck-builder-leesburg-va', 'Leesburg deck replacement'],
            ['/deck-builder-fairfax-va', 'Fairfax deck replacement'],
            ['/deck-builder-reston-va', 'Reston deck replacement'],
            ['/deck-builder-mclean-va', 'McLean deck replacement'],
            ['/deck-builder-arlington-va', 'Arlington deck replacement'],
            ['/deck-builder-alexandria-va', 'Alexandria deck replacement'],
            ['/deck-builder-manassas-va', 'Manassas deck replacement'],
          ].map(([href, text]) => (
            <Link key={href} href={href} style={{ display: 'block', padding: '0.85rem', background: '#fff', border: '1px solid #e5e5e5', borderRadius: 8, color: 'var(--site-color)', fontWeight: 700, textDecoration: 'none' }}>{text} →</Link>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
          {[
            ['/near-you/loudoun-county', 'Loudoun County planning hub'],
            ['/near-you/fairfax-county', 'Fairfax County planning hub'],
            ['/near-you/prince-william-county', 'Prince William County planning hub'],
            ['/near-you/arlington-county', 'Arlington County planning hub'],
          ].map(([href, text]) => (
            <Link key={href} href={href} style={{ display: 'block', padding: '0.85rem', background: '#f9f9f9', border: '1px solid #e5e5e5', borderRadius: 8, color: '#222', fontWeight: 700, textDecoration: 'none' }}>{text} →</Link>
          ))}
        </div>
      </section>

      <section id="deck-replacement-cost-guides" data-speakable="deck-replacement-cost-guides" style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Replacement Cost &amp; Decision Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/deck-resurfacing-vs-replacement" style={{ color: 'var(--site-color)', fontWeight: 600 }}>Resurfacing vs Full Replacement →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/services/deck-repair" style={{ color: 'var(--site-color)', fontWeight: 600 }}>Deck Repair Service →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/resurface-or-replace-deck-financing" style={{ color: 'var(--site-color)', fontWeight: 600 }}>Resurface or Replace Before Financing? (cost math) →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--site-color)', fontWeight: 600 }}>Composite Deck Cost in Northern Virginia →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/composite-decks" style={{ color: 'var(--site-color)', fontWeight: 600 }}>Composite Deck Replacement Options →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/premium-composite-deck-replacement-arlington-alexandria-mclean-va" style={{ color: 'var(--site-color)', fontWeight: 600 }}>Premium Composite Replacement in Arlington, Alexandria &amp; McLean →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/trex-vs-timbertech-vs-azek" style={{ color: 'var(--site-color)', fontWeight: 600 }}>Trex vs TimberTech vs AZEK Comparison →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--site-color)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/deck-builder-northern-virginia" style={{ color: 'var(--site-color)', fontWeight: 600 }}>Northern Virginia Deck Builder Guide →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/deck-payment-estimator" style={{ color: 'var(--site-color)', fontWeight: 600 }}>Deck Payment Estimator →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/before-and-after" style={{ color: 'var(--site-color)', fontWeight: 600 }}>Before & After Replacement Projects →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--site-color)', fontWeight: 600 }}>Customer Reviews →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/bbb-accredited-deck-builder-virginia" style={{ color: 'var(--site-color)', fontWeight: 600 }}>BBB Accredited Deck Builder →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/get-estimate" style={{ color: 'var(--site-color)', fontWeight: 600 }}>Request a Written Replacement Estimate →</Link></li>
        </ul>
      </section>

      <section style={{ padding: '3rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.7rem', fontWeight: 800, marginBottom: '1rem' }}>Deck Replacement FAQ</h2>
        <div style={{ display: 'grid', gap: '0.9rem' }}>
          {replacementFaq.map((faq) => (
            <details key={faq.question} style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: '1rem 1.1rem', background: '#fff' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 800, color: 'var(--color-dark)' }}>{faq.question}</summary>
              <p style={{ color: '#475569', lineHeight: 1.7, margin: '0.8rem 0 0' }}>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <RelatedGuides currentPath="/services/deck-replacement" category="ai-retrieval" />
      <section id="deck-replacement-estimate-routing" data-speakable="deck-replacement-estimate-routing">
        <SimpleCTA title="Ready for a New Deck?" buttonText="Get Free Estimate" link="/get-estimate" />
      </section>
      <ContactHome />
    </main>
  );
}
