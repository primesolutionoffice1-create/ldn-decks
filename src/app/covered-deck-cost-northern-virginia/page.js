import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ArticleSchema from '@/components/ArticleSchema';
import WebPageSchema from '@/components/WebPageSchema';
import SimpleCTA from '@/components/SimpleCTA';
import TrustBanner from '@/components/TrustBanner';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import NamedAuthor from '@/components/NamedAuthor';
import AboveFoldCTA from '@/components/AboveFoldCTA';
import { buildMetadata } from '@/lib/seo';
import QuotedPricesBlock from '@/components/QuotedPricesBlock';
import { OPEN_DECK_QUOTED, PORCH_QUOTED, QUOTE_SOURCE, REVIEWED_ISO } from '@/lib/quotedPrices';

const PATH = '/covered-deck-cost-northern-virginia';
const PAGE_TITLE = 'Covered Deck Cost in Northern Virginia';
const UPDATED = REVIEWED_ISO;
const DESCRIPTION = 'Loudoun Decks 2026 quoted prices: a roofed or screened porch with an attached open deck about $77,000–$112,500, and a roof-only 10×12 shed roof at $17,013. External benchmarks are labeled below.';

const deckBenchmark = 'For a simple, low-height composite deck with standard railing and without complex stairs or elevation, external 2026 benchmarks put installed cost at $35–$80 per square foot (RemodelCalculators, reviewed October 11, 2026, https://remodelcalculators.com/deck-cost ; Angi lists $30–$60 per square foot for deck construction, updated September 24, 2026, https://www.angi.com/articles/how-much-does-it-cost-build-deck.htm). For 300 sq ft that is about $10,500–$24,000 for the deck only. These are national planning estimates, not Loudoun Decks prices or quotes. The range excludes a roof, a pergola, screens, permits, demolition, and elevation.';

const pergolaBenchmark = 'Angi\'s pergola guide says pergola costs average $30–$60 per square foot, and that a typical pergola is around 100 square feet, with most homeowners paying $3,000–$6,000 (Angi, updated September 23, 2026, https://www.angi.com/articles/how-much-does-it-cost-build-pergola.htm). That is a national benchmark for the pergola itself, not a Loudoun Decks price, not a figure to add to the deck range above, and not a hip roof, gable roof, or screened porch price.';

const screenBenchmark = 'Screening an existing structure that already has a sound roof is about $5–$20 per square foot in HomeAdvisor\'s screened-porch guide (updated June 17, 2026, https://www.homeadvisor.com/cost/outdoor-living/screened-in-porch/), or about $2,000–$4,000 total on that page. The range assumes the roof and structure already exist and are sound. A new roof is outside that range. These are external benchmarks, not Loudoun Decks prices.';

const permitBenchmark = 'Loudoun County requires a building permit and a zoning permit for all decks. The county\'s typical deck permit for decks under 1,000 sq ft outside incorporated towns is $265 (Loudoun County, https://www.loudoun.gov/1166/Decks, accessed October 21, 2026). Decks may not use that Typical Deck detail if they are built with a roof, a screened porch, a hot tub, a gazebo, or detached from the house. Decks built to plan specifications, under 1,000 sq ft and outside an incorporated town, are listed at $395, which includes the building permit, plan review fee, and county zoning permit. All fees are calculated from the application. These county fees are not a Loudoun Decks price. This page does not publish an engineering-drawing price.';

const paymentNote = 'This page does not publish a monthly payment. Enter the amount from your written estimate in the deck payment estimator. The result is planning math, not a lender quote.';

const quickAnswer = [QUOTE_SOURCE, PORCH_QUOTED, OPEN_DECK_QUOTED, 'External benchmarks:', deckBenchmark, pergolaBenchmark, screenBenchmark, permitBenchmark, paymentNote].join(' ');

const roofTypes = [
  {
    name: 'Open pergola',
    desc: 'A slatted roof adds shade and an overhead frame. Rain still passes through the openings.',
    notes: 'The Angi pergola benchmark in the table below applies to the pergola itself. It is not a solid roof and it is not added to the deck range.',
  },
  {
    name: 'Solid or louvered roof',
    desc: 'A fixed shingle roof sheds rain. Adjustable louvers can open for light and close for cover.',
    notes: 'This is a different structure from the open pergola in the Angi benchmark. This quote set does not include a louvered roof price. A roof-only 10×12 shed roof was $17,013.',
  },
  {
    name: 'Hip or gable roof',
    desc: 'A pitched roof tied to the house gives full overhead weather cover.',
    notes: 'Loudoun County\'s Typical Deck detail cannot be used for a roof. A 14×12 or 14×14 gable roof plus a 120 sq ft open deck was quoted at $76,737–$84,253. This quote set does not include a hip-roof-only price.',
  },
  {
    name: 'Screened porch',
    desc: 'Screens around a roofed structure keep insects out. A window package such as EZE-Breeze is a separate option.',
    notes: 'Recent roofed or screened porch quotes with an attached open deck were about $77,000–$112,500. The HomeAdvisor figure below applies only when a sound roof and structure already exist. A new roof is outside that external range.',
  },
];

const benchmarkRows = [
  [
    'Open composite deck',
    '$35–$80 per sq ft. About $10,500–$24,000 for 300 sq ft.',
    'Simple, low-height composite deck with standard railing and without complex stairs or elevation. Deck only. Excludes a roof, pergola, screens, permits, demolition, and elevation.',
    'RemodelCalculators, reviewed October 11, 2026, https://remodelcalculators.com/deck-cost',
  ],
  [
    'Deck construction, second source',
    '$30–$60 per sq ft.',
    'Angi\'s rate for deck construction. This page does not multiply it into a second project total. It is not a covered-deck price.',
    'Angi, Cost to Build a Deck, updated September 24, 2026, https://www.angi.com/articles/how-much-does-it-cost-build-deck.htm',
  ],
  [
    'Open pergola',
    '$30–$60 per sq ft. $3,000–$6,000 for a typical pergola of about 100 sq ft.',
    'The pergola itself. Do not add this row to the deck rows. Not a hip roof, gable roof, or screened porch.',
    'Angi, pergola cost, updated September 23, 2026, https://www.angi.com/articles/how-much-does-it-cost-build-pergola.htm',
  ],
  [
    'Screen an existing sound roof',
    '$5–$20 per sq ft. About $2,000–$4,000 total on the source page.',
    'The roof and structure already exist and are sound. A new roof is outside this range.',
    'HomeAdvisor, screened-in porch, updated June 17, 2026, https://www.homeadvisor.com/cost/outdoor-living/screened-in-porch/',
  ],
  [
    'Loudoun Typical Deck permit',
    '$265',
    'Decks under 1,000 sq ft outside incorporated towns that meet the Typical Deck detail. A roof or screened porch may not use that detail.',
    'Loudoun County, accessed October 21, 2026, https://www.loudoun.gov/1166/Decks',
  ],
  [
    'Loudoun plan-specification permit',
    '$395',
    'Decks built to plan specifications, under 1,000 sq ft, outside an incorporated town. Includes the building permit, plan review fee, and county zoning permit. Fees are calculated from the application.',
    'Loudoun County, accessed October 21, 2026, https://www.loudoun.gov/1166/Decks',
  ],
];

const costAnswer = `${QUOTE_SOURCE} ${PORCH_QUOTED} External benchmarks: ${deckBenchmark}`;

const faqs = [
  {
    q: 'How much does a covered deck cost in Northern Virginia?',
    a: costAnswer,
  },
  {
    q: 'What is the monthly payment on a covered deck?',
    a: paymentNote,
  },
  {
    q: 'What is the difference between a pergola, a covered deck, and a screened porch?',
    a: 'A pergola adds shade and an overhead frame, and rain still passes through an open slatted roof. A covered deck adds a solid, louvered, hip, or gable roof for overhead weather cover. A screened porch adds screens around a roofed structure to keep insects out. A new roof is priced in the written estimate.',
  },
  {
    q: 'Does a covered deck need a different permit?',
    a: permitBenchmark,
  },
  {
    q: 'Does a covered deck add more home value than an open deck?',
    a: 'Resale value depends on the home, the lot, and the local market. This page does not publish a resale percentage, and it does not claim that a covered deck returns more value than an open deck.',
  },
  {
    q: 'Can I add a cover to my existing deck?',
    a: 'Often yes, if the existing posts and footings can support the added load. An on-site visit checks the frame, the headroom under the new roof, and the house attachment. If the frame cannot carry the roof, the written estimate can include upgraded posts or new footings.',
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
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export const metadata = buildMetadata({
  path: PATH,
  title: PAGE_TITLE,
  description: DESCRIPTION,
  image: '/social/covered-deck-cost-northern-virginia-social.png',
});

const S = {
  h2: { fontSize: '1.85rem', fontWeight: 800, marginBottom: '1.1rem', marginTop: '2.5rem', lineHeight: 1.2 },
  h3: { fontSize: '1.2rem', fontWeight: 700, margin: '1.5rem 0 0.6rem' },
  p: { marginBottom: '1rem', lineHeight: 1.75, fontSize: '1rem', overflowWrap: 'anywhere' },
  th: { padding: '0.85rem', textAlign: 'left', borderBottom: '2px solid #ddd', fontSize: '0.92rem', background: '#f5f5f5', verticalAlign: 'top' },
  td: { padding: '0.85rem', borderBottom: '1px solid #eee', fontSize: '0.92rem', verticalAlign: 'top', overflowWrap: 'anywhere' },
  container: { maxWidth: 960, margin: '0 auto', padding: '0 1.5rem' },
  link: { color: 'var(--color-primary)', fontWeight: 600, overflowWrap: 'anywhere' },
};

function LinkedText({ text }) {
  const urlRe = /https:\/\/[^\s),]+/g;
  const nodes = [];
  let last = 0;
  let match;
  let i = 0;
  while ((match = urlRe.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const url = match[0];
    nodes.push(
      <a key={`${i}-${url}`} href={url} target="_blank" rel="noopener noreferrer" style={S.link}>
        {url}
      </a>
    );
    last = match.index + url.length;
    i += 1;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export default function CoveredDeckCostPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ArticleSchema
        title={PAGE_TITLE}
        description={DESCRIPTION}
        path={PATH}
        image="/showcase/img16.jpeg"
        datePublished="2026-05-27"
        dateModified={UPDATED}
      />
      <WebPageSchema
        dateModified={UPDATED}
        url={`https://ldndecks.com${PATH}`}
        name={PAGE_TITLE}
        description={DESCRIPTION}
        speakable
      />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={S.container}>
          <p style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Covered Decks &middot; Northern Virginia
          </p>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.15 }}>
            {PAGE_TITLE}
          </h1>
        </div>
      </section>

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }} className="quick-answer">
        <div style={S.container}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p data-speakable style={S.p}>
            <LinkedText text={quickAnswer} />
          </p>
          <p style={S.p}>
            <Link href="/deck-payment-estimator" style={S.link}>
              Open the deck payment estimator
            </Link>
            {' '}
            after you have a written estimate.
          </p>
        </div>
      </section>

      <TrustBanner />

      <AboveFoldCTA
        headline="Start with a written estimate, then model the payment."
        estimateHref="/deck-payment-estimator"
        estimateLabel="Open Deck Payment Estimator"
      />

      <article style={{ padding: '3.5rem 0' }}>
        <div style={S.container}>
          <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/showcase/img16.jpeg"
              alt="Covered deck construction in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 960px) 100vw, 960px"
              quality={70}
              priority
            />
          </div>

          <QuotedPricesBlock paragraphs={[PORCH_QUOTED, OPEN_DECK_QUOTED]} />
          <h2 style={{ ...S.h2, marginTop: 0 }}>What each roof type provides</h2>
          <p style={S.p}>
            The roof changes weather protection, the structure, and the permit drawings. The quoted prices are in the block above. These descriptions are not a 2026 add-on price list.
          </p>
          {roofTypes.map((r) => (
            <div key={r.name} style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem' }}>
              <h3 style={{ ...S.h3, margin: '0 0 0.5rem' }}>{r.name}</h3>
              <p style={{ ...S.p, color: '#444', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{r.desc}</p>
              <p style={{ ...S.p, fontSize: '0.9rem', color: '#555', marginBottom: 0 }}>{r.notes}</p>
            </div>
          ))}

          <h2 style={S.h2}>External benchmarks</h2>
          <p style={S.p}>
            Each row is a different scope. Do not add the rows together. None of them is a Loudoun Decks covered-deck price. The same deck figures are cited on the{' '}
            <Link href="/composite-deck-cost-northern-virginia" style={S.link}>composite deck cost</Link>
            {' '}page, and the screening figure is cited on the{' '}
            <Link href="/screened-porch-cost-northern-virginia" style={S.link}>screened porch cost</Link>
            {' '}page.
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <caption style={{ textAlign: 'left', padding: '0 0 0.75rem', fontWeight: 600 }}>
                External planning benchmarks and Loudoun County permit fees. Not Loudoun Decks prices.
              </caption>
              <thead>
                <tr>
                  <th style={S.th} scope="col">Benchmark</th>
                  <th style={S.th} scope="col">Figure</th>
                  <th style={S.th} scope="col">What it covers</th>
                  <th style={S.th} scope="col">Source</th>
                </tr>
              </thead>
              <tbody>
                {benchmarkRows.map((row, i) => (
                  <tr key={row[0]} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <th style={{ ...S.td, fontWeight: 700 }} scope="row">{row[0]}</th>
                    <td style={S.td}>{row[1]}</td>
                    <td style={S.td}>{row[2]}</td>
                    <td style={S.td}><LinkedText text={row[3]} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={S.p}>
            The 300 sq ft deck total is 300 times the RemodelCalculators bounds of $35 and $80 per square foot. The $3,000–$6,000 pergola total is the figure Angi states for a typical pergola of about 100 square feet. The $2,000–$4,000 screening total is the total stated on the HomeAdvisor page, not a new calculation.
          </p>

          <h2 style={S.h2}>Permits for a covered deck in Loudoun County</h2>
          <p style={S.p}><LinkedText text={permitBenchmark} /></p>
          <p style={S.p}>
            Fairfax County and Prince William County set their own permit fees. This page does not publish those fees. Loudoun Decks prepares the permit submission for the covered decks it builds.
          </p>

          <h2 style={S.h2}>Adding a cover to an existing deck</h2>
          <p style={S.p}>
            A roof can sometimes be added to a deck that is already built. Three checks come first: whether the posts and footings can carry the added load, whether the deck height leaves enough headroom under the new roof, and whether the house attachment is still sound. An on-site visit answers those questions. If the frame cannot carry the roof, the written estimate can include upgraded posts or new footings.
          </p>

          <h2 style={S.h2}>Financing a covered deck</h2>
          <p style={S.p}>
            Financing may be available for an eligible project, subject to lender approval and the provider&apos;s terms. {paymentNote}{' '}
            <Link href="/deck-financing" style={S.link}>Deck financing</Link>
            {' '}explains the application path.
          </p>

          <h2 style={S.h2}>Related services and cost pages</h2>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/covered-deck-builder-northern-virginia" style={S.link}>
                Covered deck builder in Northern Virginia
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/screened-porch-cost-northern-virginia" style={S.link}>
                Screened porch cost guide
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/services/gazebo-pergola" style={S.link}>
                Gazebo and pergola service
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/composite-deck-cost-northern-virginia" style={S.link}>
                Composite deck cost in Northern Virginia
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/louvered-pergola-northern-virginia" style={S.link}>
                Louvered pergola in Northern Virginia
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/three-season-room-northern-virginia" style={S.link}>
                Three-season room builder
              </Link>
            </li>
          </ul>

          <h2 style={S.h2}>FAQ</h2>
          {faqs.map((faq) => (
            <details key={faq.q} style={{ border: '1px solid #e5e5e5', borderRadius: 10, padding: '1.25rem', marginBottom: '0.75rem', background: '#fff' }}>
              <summary style={{ fontWeight: 700, cursor: 'pointer', fontSize: '1rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.75, color: '#555', fontSize: '0.95rem', overflowWrap: 'anywhere' }}>
                <LinkedText text={faq.a} />
              </p>
            </details>
          ))}
        </div>
      </article>

      <SimpleCTA title="Plan a Covered Deck Budget" buttonText="Get Free Written Estimate" link="/get-estimate" />
      <NamedAuthor context="Northern Virginia" lastUpdated={UPDATED} />
      <RelatedGuides currentPath={PATH} />
      <ContactHome />
    </>
  );
}
