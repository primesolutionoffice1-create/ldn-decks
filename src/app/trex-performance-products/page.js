import React from 'react';
import Link from 'next/link';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import JsonLd from '@/components/JsonLd';
import styles from './TrexPerformance.module.css';

export async function generateMetadata() {
  return buildMetadata({
    path: '/trex-performance-products',
    title: 'Trex Performance Outdoor Living Products | Loudoun Decks',
    description: 'Explore the full range of Trex performance-engineered outdoor living products. From high-durability composite decking to elegant railing systems, discover the Trex difference with Loudoun Decks.',
    image: '/social/trex-performance-products-social.png',
});
}

const decisionFactors = [
  {
    title: 'Decking boards',
    why: 'Board line, color, heat exposure, scratch resistance, fastener style, and fascia details affect both the final look and the long-term maintenance plan.',
    links: [
      { href: '/trex-decks', label: 'Trex deck builder services' },
      { href: '/composite-decks', label: 'Composite deck options' },
    ],
  },
  {
    title: 'Railing package',
    why: 'Rail height, post style, infill, black aluminum, drink rail options, and stair rail transitions change the budget and the inspection details.',
    links: [
      { href: '/deck-railing-options-northern-virginia', label: 'Deck railing options' },
      { href: '/cable-railing-for-decks-northern-virginia', label: 'Cable railing planning' },
    ],
  },
  {
    title: 'Framing and structure',
    why: 'Trex surface boards only perform well when the joists, beams, footings, ledger, flashing, and drainage details are correct underneath.',
    links: [
      { href: '/tools/deck-joist-span-calculator-virginia', label: 'Joist span calculator' },
      { href: '/tools/deck-beam-span-calculator-virginia', label: 'Beam span calculator' },
    ],
  },
  {
    title: 'Lighting and finish details',
    why: 'Stair lights, post caps, fascia, risers, lattice, and under-deck details should be priced before construction so the final proposal is not vague.',
    links: [
      { href: '/deck-lighting-railings-stairs-addon-cost', label: 'Lighting, railing and stair add-on cost' },
      { href: '/deck-cost-calculator', label: 'Deck cost calculator' },
    ],
  },
];

const planningSteps = [
  'Step 1: Inspect the existing deck or build area, including ledger condition, framing layout, footing locations, stairs, railings, and drainage.',
  'Step 2: Choose the Trex board direction by balancing color, sun exposure, maintenance expectations, budget, and the look of the house.',
  'Step 3: Confirm the railing, stair, fascia, lighting, and under-deck finish package before the written proposal is finalized.',
  'Step 4: Review permit, HOA, setback, stair, guardrail, and inspection requirements for the Northern Virginia jurisdiction.',
  'Step 5: Separate required structural work from optional finish upgrades so the homeowner can compare scope clearly.',
];

const faqItems = [
  {
    q: 'What are Trex performance outdoor living products?',
    a: 'For LDN Decks planning, Trex performance outdoor living products means the Trex decking, railing, fascia, lighting, and accessory choices that shape the appearance, maintenance profile, and written scope of a Northern Virginia deck project.',
  },
  {
    q: 'Can Trex boards be installed over an old deck frame?',
    a: 'Sometimes, but only after the existing frame, ledger, joists, beams, posts, footings, stairs, and railings are reviewed. Resurfacing is not appropriate when the structure underneath is unsafe or not inspection-ready.',
  },
  {
    q: 'What should homeowners decide before choosing a Trex package?',
    a: 'Homeowners should decide the target budget, color direction, railing style, sun exposure, stair layout, lighting needs, HOA restrictions, and whether the project is new construction, resurfacing, or replacement.',
  },
  {
    q: 'Does Trex replace the need for code-compliant framing?',
    a: 'No. Composite decking is a surface material. The deck still needs proper footings, framing, ledger attachment, flashing, stairs, guards, hardware, and inspections where required.',
  },
];

export default function TrexPerformancePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://ldndecks.com/trex-performance-products#faq',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  const productGuideSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    '@id': 'https://ldndecks.com/trex-performance-products#trex-product-planning-guide',
    name: 'Trex Product Planning Guide for Northern Virginia Decks',
    url: 'https://ldndecks.com/trex-performance-products',
    applicationCategory: 'HomeImprovementApplication',
    operatingSystem: 'Web',
    description: 'A homeowner planning guide for choosing Trex decking, railing, framing, lighting, and finish details for Northern Virginia deck projects.',
    provider: { '@id': 'https://ldndecks.com/#organization' },
  };

  return (
    <main className={styles.main}>
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/trex-performance-products" name="Trex Performance Outdoor Living Products | Loudoun Decks" description="Explore the full range of Trex performance-engineered outdoor living products. From high-durability composite decking to elegant railing systems, discover the Trex difference with Loudoun Decks." speakable />
      <JsonLd data={faqSchema} />
      <JsonLd data={productGuideSchema} />
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Trex Performance-Engineered™ <br /><span>Outdoor Living Products</span></h1>
          <p className={styles.subtitle}>
            Explore Trex decking technology, product lines, and material options for Northern Virginia projects.
            Loudoun Decks helps homeowners turn product choices into a clear scope, inspection-ready structure,
            and a premium outdoor living plan.
          </p>
        </div>
      </section>

      <section className={styles.guideSection} aria-labelledby="trex-planning-guide">
        <div className={styles.container}>
          <p className={styles.kicker}>Trex product planning guide</p>
          <h2 id="trex-planning-guide">What Trex performance products mean for a Northern Virginia deck</h2>
          <p className={styles.lead} data-speakable>
            Trex performance outdoor living products are the decking, railing, fascia, lighting, and accessory
            selections that shape how a composite deck looks, drains, ages, and fits the home. For Northern Virginia
            homeowners, the product decision should be tied to the frame condition, permit path, HOA requirements,
            sun exposure, stair layout, and the written scope before construction begins.
          </p>
          <p className={styles.lead}>
            The most expensive mistake is treating Trex as a single product choice. A premium deck package is really
            a system: surface boards, stair treads, trim, rail posts, infill, fasteners, blocking, lighting, drainage,
            and under-deck finishing all have to work together. In Loudoun County, Fairfax County, Arlington,
            Alexandria, McLean, Reston, Vienna, and Great Falls, those decisions also interact with HOA standards,
            county inspections, grade changes, privacy expectations, and how the deck connects to the back of the
            house.
          </p>
          <p className={styles.lead}>
            LDN Decks uses this page to help homeowners prepare better questions before an estimate. The goal is not
            to pick the most expensive option. The goal is to select the right Trex package for the home, then confirm
            whether the frame, stairs, railings, ledger, and footings can support that finish safely and cleanly.
          </p>
          <div className={styles.factGrid}>
            <article>
              <strong>5 planning steps</strong>
              <span>5 steps connect product selection with structure, permit, HOA, and estimate clarity.</span>
            </article>
            <article>
              <strong>4 decision groups</strong>
              <span>4 groups - decking, railings, structure, and finish details - should be priced together.</span>
            </article>
            <article>
              <strong>1 written scope</strong>
              <span>1 scope should separate required structural work from optional premium upgrades before approval.</span>
            </article>
            <article>
              <strong>6 estimate inputs</strong>
              <span>6 inputs - photos, dimensions, exposure, material tier, railing direction, and approval notes - make the proposal more accurate.</span>
            </article>
            <article>
              <strong>3 approval paths</strong>
              <span>3 paths - county permit, HOA review, and manufacturer documentation - should be understood before final selections.</span>
            </article>
            <article>
              <strong>2 budget layers</strong>
              <span>2 layers should be shown separately: required structural work and optional finish upgrades.</span>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.compareSection} aria-labelledby="trex-decision-table">
        <div className={styles.container}>
          <h2 id="trex-decision-table">Trex decking vs railing vs framing decisions that affect the final deck scope</h2>
          <p className={styles.lead}>
            This comparison helps homeowners see why a Trex deck estimate should not price boards alone. The right
            proposal compares surface boards, railing systems, structural readiness, and finish upgrades together.
          </p>
          <div className={styles.decisionTable}>
            {decisionFactors.map((item) => (
              <article key={item.title} className={styles.decisionRow}>
                <h3>{item.title}</h3>
                <p>{item.why}</p>
                <div className={styles.linkRow}>
                  {item.links.map((link) => (
                    <Link key={link.href} href={link.href}>{link.label}</Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.stepsSection} aria-labelledby="trex-planning-steps">
        <div className={styles.container}>
          <h2 id="trex-planning-steps">How LDN Decks turns Trex choices into a buildable plan</h2>
          <ol className={styles.stepsList}>
            {planningSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className={styles.boundaryNote}>
            Product names, warranty details, and technical performance claims should always be verified against
            current Trex manufacturer documentation. LDN Decks uses this page as a homeowner planning guide, not as
            a substitute for the signed proposal, permit documents, or manufacturer warranty terms.
          </p>
          <div className={styles.contextBlock}>
            <h2>Where Trex planning affects project cost</h2>
            <p>
              Trex cost is influenced by more than square footage. Stair count, railing length, fascia coverage,
              picture-frame borders, hidden fastener layout, lighting, demolition, framing repair, and access all
              change the final number. A simple low deck with one stair run is a very different project from a
              second-story deck with long rail sections, upgraded lighting, privacy screening, and under-deck
              drainage.
            </p>
            <p>
              For premium homes in Arlington, Alexandria, McLean, Great Falls, Vienna, Reston, Ashburn, and Leesburg,
              LDN Decks recommends reviewing design intent and construction risk together. A beautiful board choice
              cannot compensate for weak joists, poor drainage, an unsafe ledger, or a railing package that does not
              match the stair geometry.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.iframeSection}>
        <div className={styles.container}>
          <div className={styles.catalogIntro}>
            <h2>Browse the Trex catalog, then confirm the build details with LDN Decks</h2>
            <p>
              The embedded Trex catalog can help you explore product families, but the final deck scope should still
              be reviewed around your home, grade, structure, exposure, stairs, railings, and local approval path.
            </p>
          </div>
          <div className={styles.iframeWrapper}>
            <iframe 
              id="dealer-frame" 
              src="https://dealer.trex.com/?utm_id=001RN00000MDR90YAH&max_width=1200" 
              className={styles.iframe}
              title="Trex Performance Products"
            ></iframe>
          </div>
        </div>
      </section>

      <section className={styles.faqSection} aria-labelledby="trex-faq">
        <div className={styles.container}>
          <h2 id="trex-faq">Trex planning FAQs</h2>
          <div className={styles.faqGrid}>
            {faqItems.map((item) => (
              <details key={item.q} className={styles.faqItem}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.ctaBanner}>
        <div className={styles.container}>
          <h2>Ready to price a Trex deck the right way?</h2>
          <p>Get a written estimate that connects material choices, structure, permit planning, and finish details.</p>
          <a href="/get-estimate" className={styles.ctaButton}>Get My Free Quote</a>
        </div>
      </div>

      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />


      <RelatedGuides currentPath="/trex-performance-products" />


      <ContactHome />
    </main>
  );
}
