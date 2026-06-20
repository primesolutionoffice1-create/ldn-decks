import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import WebPageSchema from '@/components/WebPageSchema';
import RelatedGuides from '@/components/RelatedGuides';
import NamedAuthor from '@/components/NamedAuthor';
import CallLink from '@/components/CallLink';
import DeckStairCalculator from '@/components/DeckStairCalculator';
import { buildMetadata } from '@/lib/seo';
import { BUSINESS, ORG_ID, WEBSITE_ID } from '@/lib/business';
import styles from './deck-stair-calculator.module.css';

const path = '/tools/deck-stair-calculator';
const pageUrl = `${BUSINESS.url}${path}`;
const pageTitle = 'Virginia Deck Stair Calculator';
const pageDescription = 'Calculate deck stair rise, run, number of steps, tread depth and stair angle for Northern Virginia deck planning. Includes safety warnings and code review guidance.';

export const metadata = buildMetadata({
  path,
  title: 'Virginia Deck Stair Calculator | Rise Run Planner | LDN Decks',
  description: pageDescription,
  image: '/social/deck-stair-calculator-social.png',
});

const faqs = [
  {
    q: 'How do I calculate deck stair riser height?',
    a: 'Measure the total vertical rise from the finished deck surface to the finished landing surface, then divide by the number of risers. The calculator rounds up to the number of risers needed based on your maximum riser height and shows the exact riser height for the layout.',
  },
  {
    q: 'What is a comfortable deck stair riser height?',
    a: 'Many residential deck stairs feel comfortable with risers around 6.5 to 7.25 inches. Taller risers near common code maximums can still work, but they require careful layout and consistent cutting so every step feels the same.',
  },
  {
    q: 'How deep should deck stair treads be?',
    a: 'Virginia residential stair geometry uses a 9-inch minimum tread depth. Many homeowners still prefer 10 to 12 inches because it feels more stable underfoot, especially outdoors or when carrying items.',
  },
  {
    q: 'Do deck stairs in Virginia need a permit?',
    a: 'Many deck projects in Virginia require permits, especially attached decks, elevated decks and structural stair work. Requirements vary by county, city, deck size and height, so homeowners should verify with the local building department before construction.',
  },
  {
    q: 'Can uneven deck stairs fail inspection?',
    a: 'Yes. Uneven riser heights are one of the most common deck stair inspection failures because inconsistent steps increase fall risk. Inspectors often measure stair uniformity during final review.',
  },
  {
    q: 'When should I replace deck stairs instead of repairing them?',
    a: 'Replacement is often safer when stringers are rotted, the stair is pulling away from the deck, the landing is failing, multiple risers are inconsistent, or railings and posts are structurally weak. Small tread or handrail issues may be repairable if the structure is sound.',
  },
  {
    q: 'Is this calculator a substitute for code approval?',
    a: 'No. This calculator is an educational planning tool only. It is not a substitute for permit approval, local code review, engineering judgment, a professional inspection or the decision of the authority having jurisdiction.',
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
  audience: {
    '@type': 'Audience',
    audienceType: 'Northern Virginia homeowners planning deck stairs, deck permits, deck repairs or structural deck upgrades',
  },
  featureList: [
    'Deck stair riser count estimate',
    'Deck stair tread and total run estimate',
    'Stair angle and comfort warning',
    'Permit and inspection planning guidance',
  ],
  about: [
    { '@type': 'Thing', name: 'Virginia deck stair code' },
    { '@type': 'Thing', name: 'Deck stair construction' },
    { '@type': 'Thing', name: 'Deck permit planning' },
    { '@type': 'Thing', name: 'Deck repair and inspection' },
  ],
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
    desc: 'Estimate deck load and post load before planning stair landings or heavy deck upgrades.',
  },
  {
    href: '/tools/deck-joist-span-calculator-virginia',
    title: 'Deck Joist Span Calculator',
    desc: 'Estimate joist span, spacing and cantilever assumptions before stair openings or landing framing.',
  },
  {
    href: '/education/deck-stair-safety-inspection-checklist',
    title: 'Deck Stair Safety Checklist',
    desc: 'Printable homeowner checklist for treads, risers, rails, stringers, landings and warning signs.',
  },
  {
    href: '/education/common-deck-stair-inspection-failures-virginia',
    title: 'Common Stair Inspection Failures',
    desc: 'Why uneven risers, weak rails, rotten stringers and poor landings fail inspection.',
  },
  {
    href: '/education/deck-stair-code-rise-run-virginia',
    title: 'Deck Stair Code Guide',
    desc: 'Rise, run, handrail, guard, landing and lighting basics for Virginia homeowners.',
  },
  {
    href: '/education/deck-stair-construction-diagram',
    title: 'Deck Stair Construction Diagram',
    desc: 'Understand stringers, treads, risers, blocking, landing pads and structural stair hardware.',
  },
  {
    href: '/education/ledger-board-flashing-deck-attachment-virginia',
    title: 'Ledger Board Flashing Guide',
    desc: 'See how the house attachment, flashing, rim joist and lateral load path affect attached deck safety.',
  },
  {
    href: '/services/deck-stair-lighting',
    title: 'Deck Stair Lighting Service',
    desc: 'Plan low-voltage stair and riser lighting while the stair framing, railings and wiring path are still open.',
  },
  {
    href: '/deck-lighting-railings-stairs-addon-cost',
    title: 'Lighting, Railings and Stairs Cost',
    desc: 'Compare stair, railing and lighting add-on ranges before deciding whether to repair, rebuild or upgrade.',
  },
  {
    href: '/deck-footing-code-northern-virginia',
    title: 'Deck Footing and Code Guide',
    desc: 'Connect stair planning to footings, ledger attachment, spans, guardrails and inspection sequencing.',
  },
  {
    href: '/deck-permit-loudoun-county-virginia',
    title: 'Loudoun County Deck Permit Guide',
    desc: 'Plan stair geometry, drawings, LandMARC submission details and inspection checkpoints in Loudoun County.',
  },
  {
    href: '/deck-permit-fairfax-county-virginia',
    title: 'Fairfax County Deck Permit Guide',
    desc: 'Understand Fairfax County plan review, FIDO permit planning, inspections and stair documentation needs.',
  },
  {
    href: '/services/deck-inspection',
    title: 'Deck Inspection Service',
    desc: 'Professional deck and stair safety inspections for Northern Virginia homes.',
  },
  {
    href: '/services/deck-repair',
    title: 'Deck Stair Repair',
    desc: 'Structural repair for rotted stringers, loose stairs, weak railings and failed inspections.',
  },
];

export default function DeckStairCalculatorPage() {
  return (
    <main className={styles.page}>
      <JsonLd data={faqSchema} />
      <JsonLd data={webApplicationSchema} />
      <WebPageSchema dateModified="2026-06-18" url={pageUrl} name={pageTitle} description={pageDescription} speakable />

      <section className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>Free tool for Northern Virginia homeowners</p>
          <h1>Virginia Deck Stair Calculator</h1>
          <p>
            Estimate deck stair rise, run, number of steps, tread depth and stair angle before you
            request a professional inspection, repair or stair rebuild estimate.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="#calculator">
              Use Calculator
            </Link>
            <Link className={styles.secondaryButton} href="/get-estimate">
              Request Stair Review
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.quickAnswer} data-speakable="true">
        <div className={styles.container}>
          <p>
            <strong>Quick answer:</strong> Deck stair layout starts with total rise. Divide that height
            into equal risers, choose a safe tread depth, confirm the total run fits your yard, and
            verify the design against local code, permit and inspection requirements. This calculator
            gives a planning estimate, not final approval.
          </p>
        </div>
      </section>

      <section id="calculator" className={styles.calculatorSection}>
        <div className={styles.container}>
          <DeckStairCalculator styles={styles} />
        </div>
      </section>

      <article className={styles.content}>
        <div className={`${styles.container} ${styles.contentGrid}`}>
          <div>
            <h2>How Deck Stair Rise and Run Work</h2>
            <p>
              Deck stairs are a geometry problem before they are a carpentry problem. The total rise is
              the vertical distance from the finished deck surface down to the finished landing surface.
              Once that number is known, the stair layout divides the rise into equal steps so every
              riser feels the same underfoot.
            </p>
            <p>
              The run is the horizontal space the stairs need from the deck to the landing. Total run is
              driven by tread depth and the number of installed tread surfaces. A deeper tread often
              feels safer and more comfortable, but it also requires more yard space and may affect
              setbacks, landings, walkways and HOA plans.
            </p>

            <h2>Common Deck Stair Calculation Mistakes</h2>
            <ul>
              <li>Measuring to bare soil instead of the finished landing height.</li>
              <li>Forgetting that the landing may change the final rise after concrete or pavers are installed.</li>
              <li>Trying to hide an awkward height difference in the first or last step.</li>
              <li>Using a tread depth that technically fits the yard but feels too steep or shallow.</li>
              <li>Ignoring stringer spacing, composite tread support and railing post attachment.</li>
              <li>Assuming stair math alone solves handrail, guard, lighting, footing and permit requirements.</li>
            </ul>

            <h2>Virginia and Northern Virginia Stair Safety Considerations</h2>
            <p>
              Northern Virginia deck stairs face moisture, freeze-thaw movement, sloped yards, strict
              permit review and frequent HOA scrutiny. Loudoun County, Fairfax County, Prince William
              County, Arlington, Alexandria, Leesburg, Ashburn, Sterling, Herndon, Reston, Vienna,
              McLean and nearby jurisdictions may review stair details differently depending on the
              project scope and site conditions.
            </p>
            <p>
              Treat this calculator as early planning. Before building, verify riser height, tread depth,
              handrails, guards, landings, lighting, footings, setbacks and permit requirements with the
              local authority or a qualified professional.
            </p>

            <h2>How Stair Math Connects to Permits and Structural Details</h2>
            <p>
              Stair calculations are only one part of a permit-ready deck plan. County reviewers also
              look at the landing support, guard and handrail details, footing locations, ledger
              attachment, drainage, and whether the stair run changes setbacks or HOA-visible layout.
              If the stairs attach to an elevated or attached deck, review the{' '}
              <Link href="/education/ledger-board-flashing-deck-attachment-virginia">
                ledger board flashing guide
              </Link>{' '}
              and the{' '}
              <Link href="/deck-footing-code-northern-virginia">
                Northern Virginia deck footing and code guide
              </Link>{' '}
              before assuming the stair can be repaired in isolation.
            </p>
            <p>
              Loudoun County, Fairfax County, Prince William County and Arlington can each review deck
              stairs through a different permit workflow. For county-specific planning, compare the{' '}
              <Link href="/deck-permit-loudoun-county-virginia">Loudoun County deck permit guide</Link>,{' '}
              <Link href="/deck-permit-fairfax-county-virginia">Fairfax County deck permit guide</Link>,{' '}
              <Link href="/deck-permit-prince-william-county-virginia">
                Prince William County deck permit guide
              </Link>{' '}
              and <Link href="/deck-permit-arlington-county-virginia">Arlington County deck permit guide</Link>.
              Those pages explain drawings, review timing, footing inspection, framing inspection and
              final inspection requirements.
            </p>

            <h2>When a Stair Layout Needs Professional Review</h2>
            <ul>
              <li>The deck is elevated, second-story or attached to the house.</li>
              <li>The stairs feel loose, bouncy, uneven, steep or slippery.</li>
              <li>The landing is cracked, tilted, undersized or set on unstable soil.</li>
              <li>Stringers show rot, splits, over-notching or weak bearing at the bottom.</li>
              <li>Railings or posts move when pushed.</li>
              <li>The project failed inspection or was built without clear permit documentation.</li>
              <li>The stair run may affect easements, setbacks, HOA approvals or drainage.</li>
            </ul>

            <h2>Repair vs Rebuild Planning</h2>
            <div className={styles.tableWrap}>
              <table>
                <thead>
                  <tr>
                    <th>Issue</th>
                    <th>Repair may work when</th>
                    <th>Rebuild may be safer when</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Loose tread board</td>
                    <td>Framing underneath is solid and fasteners are the issue.</td>
                    <td>Multiple treads flex because stringers are weak or spaced too far apart.</td>
                  </tr>
                  <tr>
                    <td>Uneven risers</td>
                    <td>The landing can be corrected and the variation is minor.</td>
                    <td>The stringers were cut incorrectly or several risers are inconsistent.</td>
                  </tr>
                  <tr>
                    <td>Weak handrail</td>
                    <td>The posts and stair framing are sound enough to reinforce.</td>
                    <td>Posts, guards and stair framing all move together.</td>
                  </tr>
                  <tr>
                    <td>Rot at stringers</td>
                    <td>Damage is isolated and structural bearing remains sound.</td>
                    <td>Stringer ends are soft, split, over-notched or pulling away.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Disclaimer</h2>
            <p>
              This calculator is for general homeowner education only. It is not a substitute for
              a professional inspection, engineering review, permit approval, manufacturer installation
              instructions or the decision of your local code authority. Requirements may vary by
              jurisdiction and by the specific deck condition.
            </p>
          </div>

          <aside className={styles.sidePanel} aria-label="Stair planning next steps">
            <h2>Need a real stair review?</h2>
            <p>
              If the numbers look tight or your existing stairs feel unsafe, Loudoun Decks can inspect,
              repair or rebuild deck stairs across Northern Virginia.
            </p>
            <CallLink>Call (571) 655-7207</CallLink>
            <Link href="/get-estimate">Request an estimate</Link>
            <Link href="/services/deck-inspection">Book a deck inspection</Link>
            <Link href="/deck-permit-loudoun-county-virginia">Plan a Loudoun permit</Link>
            <Link href="/deck-permit-fairfax-county-virginia">Plan a Fairfax permit</Link>
          </aside>
        </div>
      </article>

      <section className={styles.related}>
        <div className={styles.container}>
          <h2>Related Stair Safety Resources</h2>
          <p>
            Use the calculator with the rest of the stair safety cluster before deciding whether to
            repair, rebuild or request a permit-ready stair plan. For the framing around stair
            openings and landings, also check the{' '}
            <Link href="/tools/deck-load-calculator-virginia">deck load calculator</Link>{' '}
            and <Link href="/tools/deck-joist-span-calculator-virginia">deck joist span calculator</Link>.
            If the project includes nighttime access or premium finish work, price the safety upgrade
            against the{' '}
            <Link href="/services/deck-stair-lighting">deck stair lighting service</Link>{' '}
            and the{' '}
            <Link href="/deck-lighting-railings-stairs-addon-cost">
              lighting, railings and stairs cost guide
            </Link>.
            If the stairs connect to an attached deck, also check the{' '}
            <Link href="/education/ledger-board-flashing-deck-attachment-virginia">
              ledger flashing guide
            </Link>{' '}
            before approving repair scope.
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
          <h2>Deck Stair Calculator FAQs</h2>
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.ctaBand}>
        <h2>Need safe, inspection-ready deck stairs?</h2>
        <p>
          Loudoun Decks can inspect existing stairs, correct failed inspection items, or rebuild stairs
          with safety, permitting, railings, lighting and long-term durability in mind.
        </p>
        <div className={styles.ctaButtons}>
          <Link className={styles.primaryButton} href="/get-estimate">
            Request a Stair Estimate
          </Link>
          <Link className={styles.secondaryButton} href="/services/deck-repair">
            Review Repair Options
          </Link>
        </div>
      </section>

      <NamedAuthor context="Northern Virginia deck stair planning" lastUpdated="2026-06-18" />
      
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
