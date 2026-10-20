import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';

const PAGE_PATH = '/porch-vs-deck-which-should-you-build';
const PAGE_TITLE = 'Porch vs Deck: Which Should You Build? (NoVA Cost & Use)';
const PAGE_DESCRIPTION = 'Compare an open deck and a screened porch in Northern Virginia using external cost benchmarks, weather and bug use, maintenance, and resale. We build both.';
const PAGE_URL = 'https://ldndecks.com/porch-vs-deck-which-should-you-build';
const REVIEWED = '2026-10-20';

const deckBenchmark = 'For a simple, low-height composite deck with standard railing and without complex stairs or elevation, external 2026 benchmarks put installed cost at $35–$80 per square foot (RemodelCalculators, reviewed October 11, 2026, https://remodelcalculators.com/deck-cost ; Angi lists $30–$60 per square foot for deck construction, updated September 24, 2026, https://www.angi.com/articles/how-much-does-it-cost-build-deck.htm). For 300 sq ft that is about $10,500–$24,000. These are national planning estimates, not Loudoun Decks prices or quotes.';

const porchBenchmark = 'Screening an existing structure that already has a sound roof is about $5–$20 per square foot in HomeAdvisor\'s screened-porch guide (updated June 17, 2026, https://www.homeadvisor.com/cost/outdoor-living/screened-in-porch/). The range assumes the roof and structure already exist and are sound. A new screened porch with a new roof, footings and structure is not given a planning total here; a written estimate is the only project price. These are external benchmarks, not Loudoun Decks prices.';

const permitBenchmark = 'Loudoun County requires building and zoning permits for all decks; the county\'s typical deck permit for decks under 1,000 sq ft outside incorporated towns is $265 (Loudoun County, https://www.loudoun.gov/1166/Decks, accessed October 18, 2026). That county fee is not a Loudoun Decks price. Loudoun\'s Typical Deck detail cannot be used for a screened porch, which needs a full plan set, so we do not publish a flat screened-porch permit fee.';

const investmentAnswer = 'Resale value depends on the home, lot and local market; we do not publish an ROI percentage (the Cost vs Value report does not include a screened porch category). A roof and screens allow use in the rain and during bug and pollen season. An open deck is weather-exposed.';

const costAnswer = `We do not publish a fixed difference between a new screened porch and a deck. ${deckBenchmark} ${porchBenchmark} ${permitBenchmark}`;

const conversionAnswer = 'Often yes, if the existing framing and footings can support the added roof and wall weight. We inspect the structure before quoting. HomeAdvisor\'s $5–$20 per square foot screening range (updated June 17, 2026) applies only when a sound roof and structure already exist; adding a new roof is covered in your written estimate. Planning for a future porch during deck design can let the footings and framing be sized for that added weight.';

const faqs = [
  { q: 'Is a porch or deck a better investment?', a: investmentAnswer },
  { q: 'How much more does a porch cost than a deck?', a: costAnswer },
  { q: 'Can I convert a deck into a screened porch?', a: conversionAnswer },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export const metadata = buildMetadata({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  image: '/social/porch-vs-deck-social.png',
});

const S = {
  h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' },
  p: { marginBottom: '1rem', lineHeight: 1.7 },
  th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' },
  td: { padding: '0.75rem', borderBottom: '1px solid #eee', verticalAlign: 'top' },
  link: { color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3 },
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

const comparisonRows = [
  ['Cost (300 sqft)', 'About $10,500–$24,000 (external 2026 benchmark of $35–$80/sq ft; not a Loudoun Decks price)', 'New roofed porch: no published range — priced in your written estimate'],
  ['Weather use', 'Weather-exposed', 'A roof and screens allow use in rain and during bug and pollen season'],
  ['Bug protection', 'None', 'Full'],
  ['Rain use', 'No', 'Yes (roof + screens)'],
  ['Pollen season', 'Exposed', 'Protected'],
  ['Grilling', 'Yes, ideal', 'No (fire risk in an enclosed space)'],
  ['Sunbathing', 'Yes', 'Filtered through the screen'],
  ['Resale value', 'Depends on the home, lot, and local market', 'We do not publish an ROI percentage. The Cost vs Value report does not include a screened porch category.'],
  ['Maintenance', 'Occasional wash', 'Occasional wash and screen repair'],
  ['Permit', 'Loudoun County building and zoning permits', 'Full plan set; no flat screened-porch permit fee published'],
  ['Construction time', 'Timeline is set in the written estimate after design, HOA and permit review', 'Timeline is set in the written estimate after design, HOA and permit review'],
  ['Best for', 'Grilling, sun, open air', 'Dining, entertaining, relaxing'],
];

export default function PorchVsDeckPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema
        dateModified={REVIEWED}
        url={PAGE_URL}
        name={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        speakable
      />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Porch vs Deck: Which Should You Build?</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Northern Virginia cost and use guide: weather, maintenance, and external cost benchmarks</p>
        </div>
      </section>
      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p><strong>Build a deck</strong> if you want sun and a place to grill. <strong>Build a screened porch</strong> if you want a roof and screens so you can use the space in the rain and during bug and pollen season. Resale value depends on the home, lot and local market; we do not publish an ROI percentage. Many homeowners connect both.</p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img64.jpeg"
              alt="Comparing a screened porch with an open deck in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>
          <h2 style={S.h2}>The Major Differences: Porch vs. Deck</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  {['Factor', 'Open Deck', 'Screened Porch'].map((h) => <th key={h} style={S.th}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row[0]} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <td style={{ ...S.td, fontWeight: 600 }}>{row[0]}</td>
                    <td style={S.td}>{row[1]}</td>
                    <td style={{ ...S.td, fontWeight: 600, color: 'var(--color-primary)' }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>When to Build a Deck</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>You love grilling outdoors.</strong> Open-flame cooking is not safe in an enclosed porch.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>You want full sun.</strong> An open deck suits tanning, gardening, and an open-air feeling.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>The yard changes level.</strong> Decks handle slopes better than a roofed porch.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>You want an open platform.</strong> The scope does not include a roof, screens, or a porch ceiling. The price is in your written estimate.</li>
          </ul>

          <h2 style={S.h2}>When to Build a Screened Porch</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Bugs are a dealbreaker.</strong> Screens keep mosquitoes, stink bugs, and gnats out.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Pollen is a problem.</strong> Screens reduce pollen exposure in spring.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>You entertain often.</strong> Dining and sitting out can continue when rain would stop an open deck.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>You want cover from weather.</strong> A roof and screens allow use in the rain and during bug and pollen season. An open deck is weather-exposed.</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Resale is part of the decision.</strong> {investmentAnswer}</li>
          </ul>

          <h2 style={S.h2}>External Benchmarks, Not Loudoun Decks Prices</h2>
          <p style={S.p}><LinkedText text={deckBenchmark} /></p>
          <p style={S.p}><LinkedText text={porchBenchmark} /></p>
          <p style={S.p}><LinkedText text={permitBenchmark} /></p>

          <h2 style={S.h2}>A Deck Connected to a Screened Porch</h2>
          <p style={S.p}>A deck can connect to a screened porch. The deck is the grill and sun zone. The screened porch is the dining and relaxing zone. The price for the combined project is in your written estimate.</p>

          <h2 style={S.h2}>Can You Convert a Deck into a Porch Later?</h2>
          <p style={S.p}><LinkedText text={conversionAnswer} /></p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
          {faqs.map((faq) => (
            <details key={faq.q} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}><LinkedText text={faq.a} /></p>
            </details>
          ))}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/screened-porch-cost-northern-virginia', 'Screened Porch Cost Guide'],
              ['/composite-deck-cost-northern-virginia', 'Deck Cost Guide'],
              ['/deck-vs-patio-which-is-right', 'Deck vs Patio'],
              ['/services/porches', 'Our Porch Building Services'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (Google reviews) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
          </ul>
        </div>
      </article>
      <SimpleCTA title="Not Sure? We Build Both Free Consultation" buttonText="Get Free Estimate" link="/get-estimate" />
      <NamedAuthor context="Northern Virginia" lastUpdated={REVIEWED} />
      <RelatedGuides currentPath={PAGE_PATH} />
      <ContactHome />
    </>
  );
}
