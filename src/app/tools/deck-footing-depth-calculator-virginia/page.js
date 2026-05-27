import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import WebPageSchema from '@/components/WebPageSchema';
import RelatedGuides from '@/components/RelatedGuides';
import NamedAuthor from '@/components/NamedAuthor';
import CallLink from '@/components/CallLink';
import DeckFootingDepthCalculator from '@/components/DeckFootingDepthCalculator';
import { buildMetadata } from '@/lib/seo';
import { BUSINESS, ORG_ID, WEBSITE_ID } from '@/lib/business';
import styles from './deck-footing-depth-calculator.module.css';

const path = '/tools/deck-footing-depth-calculator-virginia';
const pageUrl = `${BUSINESS.url}${path}`;
const pageTitle = 'Deck Footing Depth Calculator Virginia';
const pageDescription =
  'Estimate deck footing depth, footing diameter, frost-depth guidance and inspection notes for Northern Virginia deck planning.';

export const metadata = buildMetadata({
  path,
  title: 'Deck Footing Depth Calculator Virginia | LDN Decks',
  description: pageDescription,
  image: '/social/deck-footing-depth-calculator-virginia-social.png',
});

const faqs = [
  {
    q: 'How deep should deck footings be in Northern Virginia?',
    a: 'Deck footings must reach suitable bearing soil and be protected from frost. Loudoun County publishes a minimum footing depth of 24 inches for typical deck details, while other Northern Virginia jurisdictions may use 24 to 30 inches or require deeper holes based on site conditions. Always verify the exact requirement with your local building department.',
  },
  {
    q: 'What size should deck footings be?',
    a: 'Footing diameter depends on deck size, tributary load, post spacing, soil bearing capacity and whether the deck carries heavy features like a roof, pergola, outdoor kitchen or hot tub. A 12-inch diameter footing may work for some small standard decks, but larger or heavier decks often need larger footings.',
  },
  {
    q: 'Do deck footings need inspection before concrete?',
    a: 'Yes. On permitted deck projects, the footing inspection normally happens after holes are dug and before concrete is poured. The inspector checks depth, diameter, soil conditions and layout against the approved plan or typical deck detail.',
  },
  {
    q: 'Can I use deck blocks instead of concrete footings?',
    a: 'Deck blocks are not appropriate for many attached, elevated or permitted deck projects in Northern Virginia. Permanent structural decks usually need footings that bear on suitable soil and meet frost, load and inspection requirements.',
  },
  {
    q: 'Do attached and freestanding decks need different footings?',
    a: 'They can. Attached decks rely on both footings and a ledger connection to the house, while freestanding decks rely entirely on independent posts, beams, bracing and footings. The footing layout and lateral stability plan should match the structural design.',
  },
  {
    q: 'When does a deck footing need engineering review?',
    a: 'Engineering review is commonly needed for hot tubs, swim spas, roofs, screened porches, outdoor kitchens, tall decks, steep slopes, poor soil, retaining walls, unusual spans or projects outside the local typical deck detail.',
  },
  {
    q: 'Is this calculator a substitute for permit approval?',
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
    href: '/deck-footing-code-northern-virginia',
    title: 'Virginia Deck Footing Code Guide',
    desc: 'Footing depth, frost protection, ledger attachment, inspections and structural deck code basics.',
  },
  {
    href: '/education/soil-bearing-capacity-deck-footings-va',
    title: 'Soil Bearing and Deck Footings',
    desc: 'Why clay, fill, drainage and bearing soil affect footing size and inspection outcomes.',
  },
  {
    href: '/tools/deck-beam-span-calculator-virginia',
    title: 'Deck Beam Span Calculator',
    desc: 'Estimate beam span, post spacing, tributary width and framing review warnings.',
  },
  {
    href: '/tools/deck-load-calculator-virginia',
    title: 'Deck Load Calculator',
    desc: 'Estimate distributed deck load, beam line load, post load and heavy-upgrade warnings.',
  },
  {
    href: '/tools/deck-joist-span-calculator-virginia',
    title: 'Deck Joist Span Calculator',
    desc: 'Estimate joist span, spacing, cantilever and composite decking support warnings.',
  },
  {
    href: '/tools/deck-stair-calculator',
    title: 'Virginia Deck Stair Calculator',
    desc: 'Estimate rise, run, step count and stair angle after footing and landing planning.',
  },
  {
    href: '/deck-permit-loudoun-county-virginia',
    title: 'Loudoun County Deck Permit Guide',
    desc: 'Permit requirements, inspections and county process for Loudoun homeowners.',
  },
  {
    href: '/services/deck-inspection',
    title: 'Deck Inspection Service',
    desc: 'Professional inspection support for existing footings, framing, stairs and safety concerns.',
  },
];

export default function DeckFootingDepthCalculatorPage() {
  return (
    <main className={styles.page}>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webApplicationSchema} />
      <WebPageSchema url={pageUrl} name={pageTitle} description={pageDescription} speakable />

      <section className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>Free deck planning tool</p>
          <h1>Deck Footing Depth Calculator Virginia</h1>
          <p>
            Estimate deck footing depth, footing diameter, frost-depth guidance, warning conditions
            and inspection notes before you request a permit-ready deck plan or structural review.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="#calculator">
              Use Calculator
            </Link>
            <Link className={styles.secondaryButton} href="/contact">
              Request Footing Review
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.quickAnswer} data-speakable="true">
        <div className={styles.container}>
          <p>
            <strong>Quick answer:</strong> Northern Virginia deck footings must bear on suitable
            soil and be protected from frost. Many typical deck details use planning depths around
            24 to 30 inches, but height, load, soil, attachment, slopes and county review can require
            a different footing depth or diameter.
          </p>
        </div>
      </section>

      <section id="calculator" className={styles.calculatorSection}>
        <div className={styles.container}>
          <DeckFootingDepthCalculator styles={styles} />
        </div>
      </section>

      <article className={styles.content}>
        <div className={`${styles.container} ${styles.contentGrid}`}>
          <div>
            <h2>How Deck Footing Depth Works in Virginia</h2>
            <p>
              Deck footings carry the structural load down into the ground. A footing has to be deep
              enough to resist frost movement, wide enough to distribute the load, and set on firm,
              undisturbed soil. If any of those details are wrong, the deck can settle, heave, rack,
              pull on the ledger, or fail inspection.
            </p>
            <p>
              The Virginia Residential Code includes deck footing provisions under the deck section,
              and local counties enforce those details through the permit and inspection process.
              Loudoun County&apos;s public deck guidance states that typical footing details include a
              minimum footing depth of 24 inches and bearing on solid soil. Fairfax, Prince William,
              Arlington, Alexandria and nearby jurisdictions can review footing details differently
              based on site conditions and approved drawings.
            </p>

            <h2>Frost Depth, Clay Soil and Northern Virginia Conditions</h2>
            <p>
              Northern Virginia soil is often clay-heavy, with seasonal moisture swings and freeze-thaw
              movement. On flat, firm, undisturbed soil, a standard deck footing may be relatively
              straightforward. On sloped lots, wet yards, new subdivisions with fill, retaining-wall
              conditions or tall walkout-basement decks, the footing detail deserves closer review.
            </p>
            <p>
              Footing depth is not only about frost. The bottom of the hole must reach competent soil.
              A deeper hole that still bears on disturbed fill is not automatically safer than a
              properly sized footing on firm native soil.
            </p>

            <h2>Common Deck Footing Planning Mistakes</h2>
            <ul>
              <li>Assuming every deck can use the same 12-inch diameter footing.</li>
              <li>Pouring concrete before the footing inspection.</li>
              <li>Setting posts on patio slabs, pavers, deck blocks or disturbed backfill.</li>
              <li>Ignoring clay soil, drainage, slope or fill conditions.</li>
              <li>Planning a roof, pergola, screened porch, kitchen or hot tub on standard deck footings.</li>
              <li>Forgetting that stair landings and stair stringers also transfer load to the ground.</li>
              <li>Focusing on depth while missing the ledger, beam, post base and lateral-load path.</li>
            </ul>

            <h2>When Footings Need Professional Review</h2>
            <ul>
              <li>The deck is elevated, second-story, multi-level or built on a steep grade.</li>
              <li>The project includes a hot tub, swim spa, roof, screened porch, pergola or outdoor kitchen.</li>
              <li>Footings are close to a house foundation, retaining wall, drainage swale or easement.</li>
              <li>The soil is soft, wet, recently filled, disturbed or visibly unstable.</li>
              <li>The existing deck has settled posts, cracked piers, tilted columns or movement at the ledger.</li>
              <li>The project falls outside your county&apos;s typical deck detail.</li>
            </ul>

            <h2>Repair vs Rebuild Footing Decisions</h2>
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
                    <td>Minor post-base corrosion</td>
                    <td>The concrete pier is sound and the connection can be replaced.</td>
                    <td>The post, pier and beam connection all show movement or decay.</td>
                  </tr>
                  <tr>
                    <td>Settled footing</td>
                    <td>Movement is isolated and the cause can be corrected.</td>
                    <td>Multiple posts have settled, soil is poor, or the frame is distorted.</td>
                  </tr>
                  <tr>
                    <td>Cracked concrete pier</td>
                    <td>The crack is cosmetic and the pier remains stable.</td>
                    <td>The pier is split, leaning, undersized or no longer bearing correctly.</td>
                  </tr>
                  <tr>
                    <td>Heavy future feature</td>
                    <td>The original footing plan was engineered for the added load.</td>
                    <td>The deck was not designed for a roof, kitchen, pergola, hot tub or spa.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Permit and Inspection Reminders</h2>
            <p>
              A permitted deck usually has a footing inspection before concrete, a framing inspection
              before decking hides the structure, and a final inspection for rails, stairs and the
              completed build. Footing holes should be visible, clean, dry enough for inspection and
              dug to the approved plan before concrete is ordered.
            </p>
            <p>
              If you are early in planning, review the <Link href="/deck-permit-loudoun-county-virginia">Loudoun County deck permit guide</Link>,{' '}
              <Link href="/deck-permit-fairfax-county-virginia">Fairfax County deck permit guide</Link>,{' '}
              and <Link href="/deck-permit-prince-william-county-virginia">Prince William County deck permit guide</Link>.
              For the house-attachment side of the structure, see the{' '}
              <Link href="/education/ledger-board-flashing-deck-attachment-virginia">ledger board flashing guide</Link>.
              Once footing locations are roughly understood, use the{' '}
              <Link href="/tools/deck-load-calculator-virginia">deck load calculator</Link>,{' '}
              <Link href="/tools/deck-beam-span-calculator-virginia">deck beam span calculator</Link>{' '}
              and <Link href="/tools/deck-joist-span-calculator-virginia">deck joist span calculator</Link>{' '}
              to review framing span, spacing and load assumptions.
            </p>

            <h2>Sources and Local Code Notes</h2>
            <ul className={styles.sourceList}>
              <li>
                Loudoun County deck guidance notes that typical footing details include a 24-inch
                minimum footing depth and solid soil bearing.
              </li>
              <li>
                The 2021 Virginia Residential Code includes deck footing provisions in R507 and
                sizes concrete footings by tributary area and soil bearing assumptions.
              </li>
              <li>
                This page intentionally uses planning guidance. Final requirements depend on current
                local code, approved drawings, soil, load and field inspection.
              </li>
            </ul>

            <h2>Disclaimer</h2>
            <p>
              This calculator is for general homeowner education only. It is not a substitute for a
              professional inspection, engineering review, permit approval, manufacturer installation
              instructions or the decision of your local code authority.
            </p>
          </div>

          <aside className={styles.sidePanel} aria-label="Footing planning next steps">
            <h2>Need footing help?</h2>
            <p>
              Loudoun Decks can review footing conditions, permit needs, repair options and rebuild
              planning for Northern Virginia decks.
            </p>
            <CallLink>Call (571) 655-7207</CallLink>
            <Link href="/contact">Request an estimate</Link>
            <Link href="/services/deck-inspection">Book a deck inspection</Link>
            <Link href="/deck-footing-code-northern-virginia">Read the footing code guide</Link>
          </aside>
        </div>
      </article>

      <section className={styles.related}>
        <div className={styles.container}>
          <h2>Related Footing, Permit and Safety Resources</h2>
          <p>
            Use this calculator with the rest of the structural planning cluster before making footing,
            framing, stair, repair or permit decisions.
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
          <h2>Deck Footing Calculator FAQs</h2>
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.ctaBand}>
        <h2>Need inspection-ready deck footings?</h2>
        <p>
          Loudoun Decks designs and builds footings, framing, stairs and rail systems with permits,
          inspections and long-term durability in mind.
        </p>
        <div className={styles.ctaButtons}>
          <Link className={styles.primaryButton} href="/contact">
            Request a Deck Estimate
          </Link>
          <Link className={styles.secondaryButton} href="/services/deck-repair-and-structural-maintenance">
            Review Repair Options
          </Link>
        </div>
      </section>

      <NamedAuthor context="Northern Virginia deck footing planning" lastUpdated="2026-05-26" />
      
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
