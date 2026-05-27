import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import WebPageSchema from '@/components/WebPageSchema';
import RelatedGuides from '@/components/RelatedGuides';
import NamedAuthor from '@/components/NamedAuthor';
import CallLink from '@/components/CallLink';
import DeckJoistSpanCalculator from '@/components/DeckJoistSpanCalculator';
import { buildMetadata } from '@/lib/seo';
import { BUSINESS, ORG_ID, WEBSITE_ID } from '@/lib/business';
import styles from './deck-joist-span-calculator.module.css';

const path = '/tools/deck-joist-span-calculator-virginia';
const pageUrl = `${BUSINESS.url}${path}`;
const pageTitle = 'Deck Joist Span Calculator Virginia';
const pageDescription =
  'Estimate deck joist span, joist spacing, cantilever limits and composite decking support warnings for Northern Virginia deck planning.';

export const metadata = buildMetadata({
  path,
  title: 'Deck Joist Span Calculator Virginia | LDN Decks',
  description: pageDescription,
  image: '/social/deck-joist-span-calculator-virginia-social.png',
});

const faqs = [
  {
    q: 'How far can deck joists span in Virginia?',
    a: 'Deck joist span depends on joist size, spacing, species, grade, load, cantilever and the adopted residential code. A 2x10 joist can span farther than a 2x8, but the final layout must be checked against local code, approved plans and inspection requirements.',
  },
  {
    q: 'What joist spacing is best for composite decking?',
    a: 'Many composite deck installations use 16 inches on-center for standard perpendicular boards and 12 inches on-center for diagonal patterns, picture-frame details, heavy traffic areas or manufacturer-specific requirements.',
  },
  {
    q: 'Can deck joists cantilever past the beam?',
    a: 'Deck joists can sometimes cantilever beyond a beam, but cantilever length is limited by joist size, backspan, load and code details. Large cantilevers, heavy surfaces and tall decks need professional review.',
  },
  {
    q: 'Do deck joists need blocking?',
    a: 'Blocking can help keep joists aligned, reduce twisting, support seams and improve the feel of the deck floor. Blocking is especially important around picture frames, breaker boards, stairs, rail posts and composite decking details.',
  },
  {
    q: 'Is this joist calculator a substitute for engineering?',
    a: 'No. This calculator is an educational planning tool only. It does not replace engineering, permit review, manufacturer instructions, field inspection or the authority having jurisdiction.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${pageUrl}#faq`,
  url: pageUrl,
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: a,
    },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${pageUrl}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.url },
    { '@type': 'ListItem', position: 2, name: 'Tools', item: `${BUSINESS.url}/tools` },
    { '@type': 'ListItem', position: 3, name: pageTitle, item: pageUrl },
  ],
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  '@id': `${pageUrl}#webapplication`,
  name: pageTitle,
  url: pageUrl,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  browserRequirements: 'Requires JavaScript in a modern web browser',
  description: pageDescription,
  isAccessibleForFree: true,
  inLanguage: 'en-US',
  publisher: { '@id': ORG_ID },
  provider: { '@id': ORG_ID },
  isPartOf: { '@id': WEBSITE_ID },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

const relatedResources = [
  {
    href: '/tools/deck-load-calculator-virginia',
    title: 'Deck Load Calculator',
    desc: 'Estimate distributed deck load, beam line load and post load before final joist planning.',
  },
  {
    href: '/tools/deck-beam-span-calculator-virginia',
    title: 'Deck Beam Span Calculator',
    desc: 'Estimate beam span, post spacing, tributary width and cantilever warnings after joist layout is known.',
  },
  {
    href: '/tools/deck-footing-depth-calculator-virginia',
    title: 'Deck Footing Depth Calculator',
    desc: 'Plan footing depth and diameter for the loads carried by posts and beams.',
  },
  {
    href: '/education/deck-understructure-guide',
    title: 'Deck Understructure Guide',
    desc: 'Understand beams, joists, posts, ledgers, footings and support basics.',
  },
  {
    href: '/education/understanding-deck-load-paths',
    title: 'Deck Load Path Guide',
    desc: 'See how deck loads move from boards to joists, beams, posts and footings.',
  },
  {
    href: '/services/deck-resurfacing',
    title: 'Deck Resurfacing',
    desc: 'Check whether existing joists can support new composite decking.',
  },
  {
    href: '/services/deck-inspection',
    title: 'Deck Inspection Service',
    desc: 'Review joist spacing, rot, bounce, hangers, ledger details and framing safety.',
  },
];

export default function DeckJoistSpanCalculatorPage() {
  return (
    <main className={styles.page}>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webApplicationSchema} />
      <WebPageSchema url={pageUrl} name={pageTitle} description={pageDescription} speakable />

      <section className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>Free deck framing tool</p>
          <h1>Deck Joist Span Calculator Virginia</h1>
          <p>
            Estimate joist span, spacing, cantilever limits and composite decking support warnings
            before resurfacing, rebuilding or submitting deck plans in Northern Virginia.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="#calculator">
              Use Calculator
            </Link>
            <Link className={styles.secondaryButton} href="/contact">
              Request Framing Review
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.quickAnswer} data-speakable="true">
        <div className={styles.container}>
          <p>
            <strong>Quick answer:</strong> Deck joist span depends on joist depth, species, grade,
            spacing, load, cantilever and decking manufacturer requirements. In Northern Virginia,
            final joist spacing should be checked against the adopted residential code, approved
            plans, composite decking instructions and the local inspector.
          </p>
        </div>
      </section>

      <section id="calculator" className={styles.calculatorSection}>
        <div className={styles.container}>
          <DeckJoistSpanCalculator styles={styles} />
        </div>
      </section>

      <article className={styles.content}>
        <div className={`${styles.container} ${styles.contentGrid}`}>
          <div>
            <h2>How Deck Joist Span Works</h2>
            <p>
              Deck joists are the repeated framing members that support the deck boards. They span
              between a ledger, drop beam, flush beam or another bearing point. If joists are too
              shallow, too widely spaced or damaged by rot, the deck can feel bouncy, sag at seams
              or fail inspection.
            </p>
            <p>
              Joist span should be planned with the full structure. A joist layout that looks fine
              on paper may still be unsafe if the ledger, hangers, beams, posts, footings, blocking
              or lateral bracing are weak.
            </p>

            <h2>Composite Decking and Joist Spacing</h2>
            <p>
              Composite decking is popular in Ashburn, Leesburg, Reston, McLean and Fairfax because
              it lowers maintenance, but it still depends on correct framing. Trex, TimberTech and
              AZEK boards each have installation instructions for joist spacing, board orientation,
              stair treads, picture frames and heat-related movement.
            </p>
            <ul>
              <li>Standard perpendicular composite boards often use 16 inches on-center.</li>
              <li>Diagonal patterns and picture-frame details often need 12 inches on-center.</li>
              <li>Board seams need blocking or a planned breaker-board layout.</li>
              <li>Deck resurfacing should include a joist inspection before new boards are installed.</li>
            </ul>

            <h2>Common Joist Planning Mistakes</h2>
            <ul>
              <li>Measuring total deck depth instead of the clear span between supports.</li>
              <li>Keeping old 24-inch spacing under new composite decking.</li>
              <li>Skipping blocking under picture-frame boards, breaker boards or stair landings.</li>
              <li>Ignoring joist crown, rot at hangers, split ends or corrosion at fasteners.</li>
              <li>Adding a hot tub, roof, kitchen or tile-like finish to ordinary deck framing.</li>
            </ul>

            <h2>Virginia Code and Permit Notes</h2>
            <p>
              Virginia deck projects are reviewed under the adopted Virginia Residential Code and
              local permit requirements. Deck provisions in R507 include framing concepts for joists,
              beams, ledgers, footings, bearing and connections. Local plan review can vary by
              Loudoun County, Fairfax County, Prince William County, Arlington and Alexandria.
            </p>

            <h2>Joist Repair vs Replacement Decisions</h2>
            <div className={styles.tableWrap}>
              <table>
                <thead>
                  <tr>
                    <th>Condition</th>
                    <th>Repair may work when</th>
                    <th>Replacement may be safer when</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Minor surface checking</td>
                    <td>The joist is dry, straight and still has full bearing.</td>
                    <td>Splits run through fasteners, hangers or bearing ends.</td>
                  </tr>
                  <tr>
                    <td>Bouncy floor</td>
                    <td>Blocking, shorter spans or added support can correct the issue.</td>
                    <td>Joists are undersized, over-spanned, rotted or poorly connected.</td>
                  </tr>
                  <tr>
                    <td>Composite resurfacing</td>
                    <td>Joists are sound, properly spaced and can accept new fasteners.</td>
                    <td>Spacing is too wide, tops are rotted or framing is out of plane.</td>
                  </tr>
                  <tr>
                    <td>Heavy upgrade</td>
                    <td>The original structure was designed for the added load.</td>
                    <td>The deck was built only for ordinary residential walking loads.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Use Joist Span With the Full Framing Cluster</h2>
            <p>
              Start with joist spacing, then confirm the supporting structure with the{' '}
              <Link href="/tools/deck-load-calculator-virginia">deck load calculator</Link>,{' '}
              <Link href="/tools/deck-beam-span-calculator-virginia">deck beam span calculator</Link>,{' '}
              <Link href="/tools/deck-footing-depth-calculator-virginia">deck footing calculator</Link>,{' '}
              and <Link href="/education/understanding-deck-load-paths">deck load path guide</Link>.
              For resurfacing, pair this with a professional joist and ledger inspection.
            </p>

            <h2>Sources and Code Notes</h2>
            <ul className={styles.sourceList}>
              <li>
                The 2021 Virginia Residential Code includes deck provisions in R507 for joists,
                beams, ledgers, footings, bearing and connections.
              </li>
              <li>
                Composite decking manufacturers publish joist spacing and installation requirements
                for perpendicular boards, diagonal boards, stairs and picture-frame details.
              </li>
              <li>
                This calculator uses conservative planning logic and is not a substitute for local
                permit review, manufacturer instructions, engineering or field inspection.
              </li>
            </ul>

            <h2>Disclaimer</h2>
            <p>
              This calculator is for general homeowner education only. It is not structural design,
              an engineering opinion, permit approval, manufacturer approval or a final inspection.
            </p>
          </div>

          <aside className={styles.sidePanel} aria-label="Joist span planning next steps">
            <h2>Need joist help?</h2>
            <p>
              Loudoun Decks can review joist spacing, bounce, rot, hangers, composite resurfacing
              readiness and structural repair options.
            </p>
            <CallLink>Call (571) 655-7207</CallLink>
            <Link href="/contact">Request an estimate</Link>
            <Link href="/services/deck-inspection">Book a deck inspection</Link>
            <Link href="/services/deck-resurfacing">Plan resurfacing</Link>
          </aside>
        </div>
      </article>

      <section className={styles.related}>
        <div className={styles.container}>
          <h2>Related Framing, Beam and Resurfacing Resources</h2>
          <p>
            Use this tool with the full structural planning cluster before joist, beam, footing,
            ledger, stair or resurfacing decisions.
          </p>
          <div className={styles.relatedGrid}>
            {relatedResources.map((item) => (
              <Link href={item.href} key={item.href}>
                <strong>{item.title}</strong>
                <span>{item.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.faq}>
        <div className={styles.container}>
          <h2>Deck Joist Span Calculator FAQs</h2>
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.ctaBand}>
        <h2>Need a safer deck floor frame?</h2>
        <p>
          Loudoun Decks designs and repairs joists, beams, ledgers, footings and composite decking
          systems with permits, inspections and long-term durability in mind.
        </p>
        <div className={styles.ctaButtons}>
          <Link className={styles.primaryButton} href="/contact">
            Request a Deck Estimate
          </Link>
          <Link className={styles.secondaryButton} href="/services/deck-inspection">
            Schedule Inspection Help
          </Link>
        </div>
      </section>

      <NamedAuthor context="Northern Virginia deck joist span planning" lastUpdated="2026-05-27" />
      <RelatedGuides currentPath={path} category="deck-core" />
    </main>
  );
}
