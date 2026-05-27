import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import WebPageSchema from '@/components/WebPageSchema';
import RelatedGuides from '@/components/RelatedGuides';
import NamedAuthor from '@/components/NamedAuthor';
import CallLink from '@/components/CallLink';
import DeckBeamSpanCalculator from '@/components/DeckBeamSpanCalculator';
import { buildMetadata } from '@/lib/seo';
import { BUSINESS, ORG_ID, WEBSITE_ID } from '@/lib/business';
import styles from './deck-beam-span-calculator.module.css';

const path = '/tools/deck-beam-span-calculator-virginia';
const pageUrl = `${BUSINESS.url}${path}`;
const pageTitle = 'Deck Beam Span Calculator Virginia';
const pageDescription =
  'Estimate deck beam span, post spacing, tributary width and framing review warnings for Northern Virginia deck planning.';

export const metadata = buildMetadata({
  path,
  title: 'Deck Beam Span Calculator Virginia | LDN Decks',
  description: pageDescription,
  image: '/social/deck-beam-span-calculator-virginia-social.png',
});

const faqs = [
  {
    q: 'How do I calculate deck beam span?',
    a: 'Deck beam span depends on the distance between posts or bearing points, the joist span carried by the beam, beam size, number of plies, wood species, load and cantilever. The effective joist span or tributary width is one of the most important inputs in Virginia Residential Code deck beam tables.',
  },
  {
    q: 'What is tributary width for a deck beam?',
    a: 'Tributary width is the portion of deck load carried by the beam. On a typical ledger-supported deck with one outside beam, a simple planning estimate often starts with about half the joist span. Freestanding decks or center beams may carry load from both sides and need closer review.',
  },
  {
    q: 'How far apart can deck posts be under a beam?',
    a: 'Post spacing depends on the selected beam size, joist span, lumber species, load and approved design. Smaller beams or heavier loads usually require closer posts. Larger multi-ply beams may allow wider spacing, but final spacing must be verified through the permit or inspection process.',
  },
  {
    q: 'Can a deck beam cantilever past the outside post?',
    a: 'Deck beams can sometimes cantilever beyond a bearing point, but common prescriptive checks limit cantilever length to a fraction of the adjacent span. Cantilevers should be reviewed carefully when decks are tall, freestanding, roofed or supporting heavy features.',
  },
  {
    q: 'Do covered decks need larger beams?',
    a: 'Often, yes. Covered decks, screened porches, pergolas and outdoor kitchens can add roof, wind, bracing and concentrated-load considerations that are not the same as a standard open walking deck.',
  },
  {
    q: 'Is this calculator a substitute for structural design?',
    a: 'No. This calculator is an educational planning tool only. It is not a substitute for local code review, engineering, permit approval, manufacturer instructions, a professional inspection or the decision of the authority having jurisdiction.',
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
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: BUSINESS.url,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Tools',
      item: `${BUSINESS.url}/tools`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: pageTitle,
      item: pageUrl,
    },
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
    desc: 'Estimate distributed deck load, beam line load and post load before beam span planning.',
  },
  {
    href: '/tools/deck-joist-span-calculator-virginia',
    title: 'Deck Joist Span Calculator',
    desc: 'Estimate joist span, spacing, cantilever and composite decking support before beam sizing.',
  },
  {
    href: '/tools/deck-footing-depth-calculator-virginia',
    title: 'Deck Footing Depth Calculator',
    desc: 'Estimate footing depth, diameter, frost guidance and inspection notes before beam and post planning.',
  },
  {
    href: '/education/understanding-deck-load-paths',
    title: 'Deck Load Path Guide',
    desc: 'How loads move from boards to joists, beams, posts, footings and soil.',
  },
  {
    href: '/education/deck-understructure-guide',
    title: 'Deck Understructure Guide',
    desc: 'Beams, joists, posts, ledgers and support basics for homeowners.',
  },
  {
    href: '/deck-footing-code-northern-virginia',
    title: 'Virginia Deck Footing Code Guide',
    desc: 'Footings, posts, ledger attachment, inspections and structural deck code basics.',
  },
  {
    href: '/services/deck-inspection',
    title: 'Deck Inspection Service',
    desc: 'Professional inspection support for framing, posts, footings, stairs and safety concerns.',
  },
  {
    href: '/services/deck-repair-and-structural-maintenance',
    title: 'Deck Repair and Structural Maintenance',
    desc: 'Repair and rebuild options for unsafe framing, rotted posts, beam movement and failed inspections.',
  },
];

export default function DeckBeamSpanCalculatorPage() {
  return (
    <main className={styles.page}>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webApplicationSchema} />
      <WebPageSchema url={pageUrl} name={pageTitle} description={pageDescription} speakable />

      <section className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>Free deck framing tool</p>
          <h1>Deck Beam Span Calculator Virginia</h1>
          <p>
            Estimate deck beam span, post spacing, tributary width, cantilever checks and framing
            warnings before you request permit-ready drawings, repair work or a structural review.
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
            <strong>Quick answer:</strong> Deck beam span is controlled by beam size, number of
            plies, wood species, joist span carried by the beam, post spacing, cantilever and load.
            In Virginia, final beam sizing should be checked against the adopted residential code,
            approved plans and the local authority having jurisdiction.
          </p>
        </div>
      </section>

      <section id="calculator" className={styles.calculatorSection}>
        <div className={styles.container}>
          <DeckBeamSpanCalculator styles={styles} />
        </div>
      </section>

      <article className={styles.content}>
        <div className={`${styles.container} ${styles.contentGrid}`}>
          <div>
            <h2>How Deck Beam Span Works</h2>
            <p>
              A deck beam collects load from joists and transfers that load into posts and footings.
              The span is the distance between supporting posts or bearing points. If the beam is
              undersized or posts are too far apart, the deck can sag, bounce, rack, pull at the
              ledger or fail framing inspection.
            </p>
            <p>
              The beam does not work alone. Beam sizing should be reviewed with the joist layout,
              ledger attachment, post height, post-to-beam connection, footing size, lateral bracing,
              stair loads and any roof or outdoor-living features.
            </p>

            <h2>What This Calculator Estimates</h2>
            <ul>
              <li>Planning maximum span for common multi-ply deck beams.</li>
              <li>Whether a desired post spacing is inside a conservative planning range.</li>
              <li>Approximate tributary width carried by the beam.</li>
              <li>Rough post count along the beam for early planning.</li>
              <li>Common warnings for freestanding decks, covered decks, hot tubs and cantilevers.</li>
            </ul>

            <h2>Common Deck Beam Planning Mistakes</h2>
            <ul>
              <li>Measuring beam span as total deck length instead of post-to-post distance.</li>
              <li>Choosing post spacing for appearance before checking beam capacity.</li>
              <li>Using a standard beam under a roof, screened porch, outdoor kitchen or hot tub.</li>
              <li>Letting each ply of a built-up beam miss full bearing at the post.</li>
              <li>Ignoring joist cantilevers, beam cantilevers, lateral loads and post height.</li>
              <li>Assuming a freestanding deck carries load the same way as a ledger-supported deck.</li>
            </ul>

            <h2>Virginia and Northern Virginia Framing Notes</h2>
            <p>
              Virginia deck projects are reviewed under the adopted Virginia Residential Code and
              the local jurisdiction&apos;s permit process. The 2021 Virginia Residential Code includes
              deck provisions in Section R507, including deck beam tables, effective joist span
              concepts, bearing requirements and limits on beam cantilevers.
            </p>
            <p>
              Loudoun County, Fairfax County, Prince William County, Arlington, Alexandria and other
              nearby jurisdictions may review details differently based on drawings, site conditions,
              soil, grade, snow exposure, load, inspection findings and whether the project stays
              inside typical deck details.
            </p>

            <h2>When Beam Layouts Need Professional Review</h2>
            <ul>
              <li>The deck is elevated, second-story, multi-level or freestanding.</li>
              <li>The deck supports a roof, screened porch, pergola, outdoor kitchen, hot tub or spa.</li>
              <li>Posts are tall, braced poorly, leaning, rotted, settling or missing proper bases.</li>
              <li>The beam is spliced between posts or individual plies do not bear correctly.</li>
              <li>The deck has bounce, sag, ledger movement, cracked footings or failed inspection notes.</li>
              <li>The layout falls outside your county&apos;s typical deck detail.</li>
            </ul>

            <h2>Beam Repair vs Rebuild Decisions</h2>
            <div className={styles.tableWrap}>
              <table>
                <thead>
                  <tr>
                    <th>Condition</th>
                    <th>Repair may work when</th>
                    <th>Rebuild or engineering may be needed when</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Minor connector corrosion</td>
                    <td>The beam, post and footing are stable and hardware can be replaced.</td>
                    <td>Corrosion is widespread or the connection has movement.</td>
                  </tr>
                  <tr>
                    <td>Beam sag</td>
                    <td>The cause is isolated and posts/footings can be added safely.</td>
                    <td>The beam is undersized, spliced poorly or supporting unexpected loads.</td>
                  </tr>
                  <tr>
                    <td>Rotted beam end</td>
                    <td>Damage is limited and bearing can be restored correctly.</td>
                    <td>Rot affects multiple plies, posts, joists or the ledger area.</td>
                  </tr>
                  <tr>
                    <td>Future roof or hot tub</td>
                    <td>The original structure was designed for the added load.</td>
                    <td>The existing beam and footings were sized only for an open walking deck.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Use Beam Span With the Full Load Path</h2>
            <p>
              A stronger beam does not fix weak footings, poor post bases, a failing ledger or
              undersized joists. For early planning, use this calculator with the{' '}
              <Link href="/tools/deck-load-calculator-virginia">deck load calculator</Link>,{' '}
              <Link href="/tools/deck-joist-span-calculator-virginia">deck joist span calculator</Link>,{' '}
              <Link href="/tools/deck-footing-depth-calculator-virginia">deck footing depth calculator</Link>,{' '}
              <Link href="/education/understanding-deck-load-paths">deck load path guide</Link>,{' '}
              and <Link href="/education/deck-understructure-guide">deck understructure guide</Link>.
            </p>

            <h2>Sources and Code Notes</h2>
            <ul className={styles.sourceList}>
              <li>
                The 2021 Virginia Residential Code includes deck beam provisions in R507, including
                maximum beam spans, effective deck joist span concepts and bearing requirements.
              </li>
              <li>
                Loudoun County deck guidance directs homeowners to typical deck details, permit
                review and inspections for deck structure.
              </li>
              <li>
                This page uses conservative planning logic. Final beam size and post spacing depend
                on current local code, approved drawings, lumber grade, species, loads, connections
                and field inspection.
              </li>
            </ul>

            <h2>Disclaimer</h2>
            <p>
              This calculator is for general homeowner education only. It is not a substitute for a
              professional inspection, engineering review, permit approval, manufacturer installation
              instructions or the decision of your local code authority.
            </p>
          </div>

          <aside className={styles.sidePanel} aria-label="Beam span planning next steps">
            <h2>Need framing help?</h2>
            <p>
              Loudoun Decks can review beam spans, post spacing, footings, ledger details and repair
              options for Northern Virginia decks.
            </p>
            <CallLink>Call (571) 655-7207</CallLink>
            <Link href="/contact">Request an estimate</Link>
            <Link href="/services/deck-inspection">Book a deck inspection</Link>
            <Link href="/services/deck-repair-and-structural-maintenance">Review repair options</Link>
          </aside>
        </div>
      </article>

      <section className={styles.related}>
        <div className={styles.container}>
          <h2>Related Framing, Footing and Safety Resources</h2>
          <p>
            Use this tool as part of the full structural planning cluster, especially before beam,
            post, footing, ledger, stair or repair decisions.
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
          <h2>Deck Beam Span Calculator FAQs</h2>
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.ctaBand}>
        <h2>Need a safer deck framing plan?</h2>
        <p>
          Loudoun Decks designs and repairs deck beams, posts, footings, stairs and rail systems
          with permits, inspections and long-term durability in mind.
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

      <NamedAuthor context="Northern Virginia deck beam span planning" lastUpdated="2026-05-26" />
      
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Next Steps</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building Services →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Customer Reviews (5.0★ Google) →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/about" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>About Loudoun Decks →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/contact" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Get a Free Estimate →</Link></li>
        </ul>
      </section>
      <RelatedGuides currentPath={path} category="deck-core" />
    </main>
  );
}
