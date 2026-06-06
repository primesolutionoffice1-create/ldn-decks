import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import WebPageSchema from '@/components/WebPageSchema';
import RelatedGuides from '@/components/RelatedGuides';
import NamedAuthor from '@/components/NamedAuthor';
import CallLink from '@/components/CallLink';
import DeckLoadCalculator from '@/components/DeckLoadCalculator';
import { buildMetadata } from '@/lib/seo';
import { BUSINESS, ORG_ID, WEBSITE_ID } from '@/lib/business';
import styles from './deck-load-calculator.module.css';

const path = '/tools/deck-load-calculator-virginia';
const pageUrl = `${BUSINESS.url}${path}`;
const pageTitle = 'Deck Load Calculator Virginia';
const pageDescription =
  'Estimate deck load, beam line load, post load and heavy-upgrade warnings for Northern Virginia deck planning.';

export const metadata = buildMetadata({
  path,
  title: 'Deck Load Calculator Virginia | LDN Decks',
  description: pageDescription,
  image: '/social/deck-load-calculator-virginia-social.png',
});

const faqs = [
  {
    q: 'What load does a residential deck need to support?',
    a: 'Residential deck loading depends on adopted code, plans, materials, snow exposure and use. Many open residential decks are planned around ordinary walking loads plus dead load, but roofs, hot tubs, kitchens and masonry surfaces require deeper structural review.',
  },
  {
    q: 'What is deck tributary width?',
    a: 'Tributary width is the portion of deck floor load carried by a beam, joist or footing line. It is often half the distance to adjacent supports, not necessarily the full deck depth.',
  },
  {
    q: 'Do hot tubs or outdoor kitchens need special deck framing?',
    a: 'Yes. Hot tubs, spas, masonry kitchens, stone finishes and heavy planters create concentrated loads that ordinary residential deck framing may not support safely without engineering or a specific structural review.',
  },
  {
    q: 'How does deck load affect footings?',
    a: 'Loads move from decking to joists, beams, posts and footings. If the estimated post load is high, footing diameter, depth, soil bearing, post base hardware and beam sizing should all be reviewed together.',
  },
  {
    q: 'Is this deck load calculator a substitute for engineering?',
    a: 'No. This calculator is an educational planning tool only. It does not replace code review, engineering, permit approval, manufacturer instructions or local field inspection.',
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
    href: '/education/understanding-deck-load-paths',
    title: 'Deck Load Path Guide',
    desc: 'Understand how load moves through boards, joists, beams, posts, footings and ledger connections.',
  },
  {
    href: '/tools/deck-joist-span-calculator-virginia',
    title: 'Deck Joist Span Calculator',
    desc: 'Estimate joist span, spacing, cantilever and composite decking support warnings.',
  },
  {
    href: '/tools/deck-beam-span-calculator-virginia',
    title: 'Deck Beam Span Calculator',
    desc: 'Estimate beam span, post spacing and tributary width after load assumptions are known.',
  },
  {
    href: '/tools/deck-footing-depth-calculator-virginia',
    title: 'Deck Footing Depth Calculator',
    desc: 'Plan footing depth and diameter for posts that carry deck loads to soil.',
  },
  {
    href: '/education/deck-understructure-guide',
    title: 'Deck Understructure Guide',
    desc: 'Review beams, joists, posts, ledgers, footings and support basics.',
  },
  {
    href: '/services/deck-inspection',
    title: 'Deck Inspection Service',
    desc: 'Review structure before resurfacing, heavy upgrades or deck replacement.',
  },
];

export default function DeckLoadCalculatorPage() {
  return (
    <main className={styles.page}>
      <JsonLd data={faqSchema} />
      <JsonLd data={webApplicationSchema} />
      <WebPageSchema dateModified="2026-06-01" url={pageUrl} name={pageTitle} description={pageDescription} speakable />

      <section className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>Free deck structure tool</p>
          <h1>Deck Load Calculator Virginia</h1>
          <p>
            Estimate deck load, beam line load, load per post and heavy-upgrade warnings before
            planning joists, beams, footings, covered decks, hot tubs or outdoor kitchens.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="#calculator">
              Use Calculator
            </Link>
            <Link className={styles.secondaryButton} href="/get-estimate">
              Request Structural Review
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.quickAnswer} data-speakable="true">
        <div className={styles.container}>
          <p>
            <strong>Quick answer:</strong> Deck load planning starts with deck area, dead load,
            live load and tributary width. The safest Northern Virginia planning path is to connect
            load assumptions to joist span, beam span, post spacing, footing size, ledger attachment
            and local permit review before construction or heavy upgrades.
          </p>
        </div>
      </section>

      <section id="calculator" className={styles.calculatorSection}>
        <div className={styles.container}>
          <DeckLoadCalculator styles={styles} />
        </div>
      </section>

      <article className={styles.content}>
        <div className={`${styles.container} ${styles.contentGrid}`}>
          <div>
            <h2>How Deck Load Planning Works</h2>
            <p>
              A deck is a load path. Weight from people, furniture, boards, rails, roofs, kitchens
              or spas moves through deck boards into joists, then beams, posts, footings and soil.
              If one part of that path is undersized, corroded, rotted or poorly connected, the
              whole structure needs review.
            </p>
            <p>
              This tool helps Northern Virginia homeowners frame the right questions before a
              consultation. It does not design the structure; it shows how load assumptions affect
              beam line load, post load and the need for professional review.
            </p>

            <h2>When Deck Loads Need Extra Review</h2>
            <ul>
              <li>Hot tubs, spas, stone kitchens, tile-like finishes or masonry fire features.</li>
              <li>Covered decks, screened porches, pergola roofs or snow-collecting roof planes.</li>
              <li>Second-story decks with tall posts, bracing needs or complex stairs.</li>
              <li>Older decks being resurfaced with composite boards over existing framing.</li>
              <li>Decks with visible bounce, sagging beams, cracked posts or undersized footings.</li>
            </ul>

            <h2>Load, Joists, Beams and Footings Work Together</h2>
            <p>
              Load calculations are most useful when they feed the full framing cluster. Use this
              deck load calculator with the{' '}
              <Link href="/tools/deck-joist-span-calculator-virginia">deck joist span calculator</Link>,{' '}
              <Link href="/tools/deck-beam-span-calculator-virginia">deck beam span calculator</Link>,{' '}
              <Link href="/tools/deck-footing-depth-calculator-virginia">deck footing calculator</Link>{' '}
              and <Link href="/education/understanding-deck-load-paths">deck load path guide</Link>.
            </p>

            <h2>Common Planning Mistakes</h2>
            <div className={styles.tableWrap}>
              <table>
                <thead>
                  <tr>
                    <th>Mistake</th>
                    <th>Why it matters</th>
                    <th>Safer next step</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Using total deck size for every beam</td>
                    <td>Each beam carries a tributary area, not always the full deck.</td>
                    <td>Map supports and calculate tributary width before sizing beams.</td>
                  </tr>
                  <tr>
                    <td>Adding a hot tub to ordinary framing</td>
                    <td>Water weight creates a concentrated load far above normal use.</td>
                    <td>Get engineering or specific structural review before installation.</td>
                  </tr>
                  <tr>
                    <td>Ignoring post-to-footing transfer</td>
                    <td>A strong beam still fails if posts, connectors or footings are weak.</td>
                    <td>Review beam span, post spacing, footing diameter and soil together.</td>
                  </tr>
                  <tr>
                    <td>Resurfacing without framing inspection</td>
                    <td>New composite boards can hide old rot, weak hangers or bad ledger details.</td>
                    <td>Inspect joists, ledgers, beams and fasteners before new boards go on.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Virginia Permit and Code Notes</h2>
            <p>
              Virginia deck projects are reviewed under the adopted Virginia Residential Code and
              local permit requirements. Load assumptions, spans, ledger attachment, bearing,
              footings and connectors should be checked against approved plans and the authority
              having jurisdiction in Loudoun County, Fairfax County, Prince William County,
              Arlington or Alexandria.
            </p>

            <h2>Sources and Code Notes</h2>
            <ul className={styles.sourceList}>
              <li>
                The Virginia Residential Code includes residential deck provisions for joists,
                beams, ledgers, footings, bearing and connections.
              </li>
              <li>
                Manufacturer installation instructions can affect framing requirements for
                composite boards, picture frames, stairs, guard posts and heavy surface details.
              </li>
              <li>
                This calculator uses simplified distributed-load planning logic and is not a
                substitute for permit review, engineering, manufacturer instructions or inspection.
              </li>
            </ul>

            <h2>Disclaimer</h2>
            <p>
              This calculator is for general homeowner education only. It is not structural design,
              an engineering opinion, permit approval, manufacturer approval or a final inspection.
            </p>
          </div>

          <aside className={styles.sidePanel} aria-label="Deck load planning next steps">
            <h2>Need load-path help?</h2>
            <p>
              Loudoun Decks can review joists, beams, posts, footings, ledgers, heavy upgrade
              plans, resurfacing readiness and structural repair options.
            </p>
            <CallLink>Call (571) 655-7207</CallLink>
            <Link href="/get-estimate">Request an estimate</Link>
            <Link href="/services/deck-inspection">Book a deck inspection</Link>
            <Link href="/services/deck-repair">Review structural repair</Link>
          </aside>
        </div>
      </article>

      <section className={styles.related}>
        <div className={styles.container}>
          <h2>Related Load Path, Beam and Footing Resources</h2>
          <p>
            Use this tool with the full structural planning cluster before joist, beam, footing,
            ledger, stair, covered deck or resurfacing decisions.
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
          <h2>Deck Load Calculator FAQs</h2>
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.ctaBand}>
        <h2>Need a deck structure reviewed?</h2>
        <p>
          Loudoun Decks plans and repairs joists, beams, ledgers, posts, footings and composite
          decking systems with permits, inspections and long-term safety in mind.
        </p>
        <div className={styles.ctaButtons}>
          <Link className={styles.primaryButton} href="/get-estimate">
            Request a Deck Estimate
          </Link>
          <Link className={styles.secondaryButton} href="/services/deck-inspection">
            Schedule Inspection Help
          </Link>
        </div>
      </section>

      <NamedAuthor context="Northern Virginia deck load and structural planning" lastUpdated="2026-05-27" />
      
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Next Steps</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building Services →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Customer Reviews (Google reviews) →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/about" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>About Loudoun Decks →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/get-estimate" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Get a Free Estimate →</Link></li>
        </ul>
      </section>
      <RelatedGuides currentPath={path} category="deck-core" />
    </main>
  );
}
