import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ArticleSchema from '@/components/ArticleSchema';
import SimpleCTA from '@/components/SimpleCTA';
import TrustBanner from '@/components/TrustBanner';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import NamedAuthor from '@/components/NamedAuthor';
import AboveFoldCTA from '@/components/AboveFoldCTA';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/mclean-great-falls-premium-deck-budget',
  title: 'McLean & Great Falls Premium Deck Budget Guide (2026)',
  description: 'Premium deck cost in McLean and Great Falls VA — typical $40k–$120k+ projects with AZEK Vintage, cable railings, integrated lighting, and covered structures.',
  image: '/showcase/img09.jpeg',
});

const PATH = '/mclean-great-falls-premium-deck-budget';

const tiers = [
  {
    name: 'Premium Open Deck',
    range: '$40,000–$70,000',
    desc: '500–700 sqft AZEK Vintage or Trex Signature with aluminum or cable railings and full lighting package',
    monthly: '$506–$886 /mo (10y)',
  },
  {
    name: 'Premium with Pergola',
    range: '$55,000–$90,000',
    desc: 'Premium deck with louvered or cedar pergola, integrated lighting, picture-frame border, and high-end railings',
    monthly: '$696–$1,139 /mo (10y)',
  },
  {
    name: 'Covered Premium Deck',
    range: '$75,000–$120,000+',
    desc: 'Full hip or gable roof matching the house, AZEK Vintage or wide-plank PVC, integrated audio/lighting/heating',
    monthly: '$949–$1,519 /mo (10y)',
  },
];

const faqs = [
  {
    q: 'How much does a premium deck cost in McLean or Great Falls?',
    a: 'Premium decks in McLean and Great Falls typically run $40,000–$120,000+ depending on size, roof type, and finish level. Most projects in these markets specify Trex Signature or TimberTech AZEK Vintage with aluminum or cable railings, full lighting packages, and frequently a pergola or full roof structure.',
  },
  {
    q: 'What is the monthly payment on a $75,000 premium deck?',
    a: 'At a sample 8.99% APR, a $75,000 deck financed over 10 years is roughly $949/month and roughly $761/month over 15 years. Premium deck projects often use longer terms (12–15 years) to keep monthly payment comfortable while preserving cash for landscaping and interior work.',
  },
  {
    q: 'Why are decks more expensive in McLean and Great Falls than other NoVA areas?',
    a: 'Three factors: larger average project size (most jobs are 500–800 sqft vs 300–500 sqft elsewhere), premium material preference (AZEK Vintage, cable railings, integrated lighting are baseline rather than upgrades), and frequent covered structures or pergolas that add $15,000–$55,000.',
  },
  {
    q: 'Do you build covered decks in Great Falls and McLean?',
    a: 'Yes. Covered decks are increasingly common in both markets — usually with full hip or gable roofs designed to match the house exterior. Pricing runs $75,000–$120,000+ depending on roof complexity and finish.',
  },
  {
    q: 'How long do premium deck projects take?',
    a: 'On-site build for a 500–800 sqft premium deck is typically 2–4 weeks. Covered decks add 1–2 weeks. Fairfax County permit review for premium/covered decks usually runs 3–6 weeks. Total project timeline from contract to finished deck is typically 8–14 weeks.',
  },
  {
    q: 'Do McLean and Great Falls homes generally have HOAs?',
    a: 'Many do, but coverage varies more than in Loudoun. Significant portions of Great Falls and parts of McLean are non-HOA. Where HOAs exist, architectural review is generally less restrictive on materials and more focused on setbacks and visual fit with neighborhood character.',
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

const S = {
  h2: { fontSize: '1.85rem', fontWeight: 800, marginBottom: '1.1rem', marginTop: '2.5rem', lineHeight: 1.2 },
  h3: { fontSize: '1.2rem', fontWeight: 700, margin: '1.5rem 0 0.6rem' },
  p: { marginBottom: '1rem', lineHeight: 1.75, fontSize: '1rem' },
  container: { maxWidth: 960, margin: '0 auto', padding: '0 1.5rem' },
};

export default function MclenGreatFallsPremiumPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ArticleSchema
        title="McLean & Great Falls Premium Deck Budget Guide (2026)"
        description="Premium deck cost in McLean and Great Falls VA — typical $40k–$120k+ projects with AZEK Vintage, cable railings, integrated lighting, and covered structures."
        path={PATH}
        image="/showcase/img09.jpeg"
        datePublished="2026-05-27"
        dateModified="2026-05-27"
      />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={S.container}>
          <p style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Premium Markets &middot; McLean &amp; Great Falls
          </p>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.15 }}>
            McLean and Great Falls Premium Deck Budget Guide
          </h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Premium-tier decks in McLean and Great Falls typically run $40,000–$120,000+ with AZEK Vintage, cable
            railings, integrated lighting, and full roof structures. Here&apos;s how to plan one.
          </p>
        </div>
      </section>

      <TrustBanner />

      <AboveFoldCTA
        headline="Plan a high-end deck project monthly payment with the deck payment estimator."
        estimateHref="/deck-payment-estimator"
        estimateLabel="Plan a High-End Project"
      />

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }} className="quick-answer">
        <div style={S.container}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p data-speakable>
            Premium decks in <strong>McLean and Great Falls</strong> typically run <strong>$40,000–$120,000+</strong>{' '}
            depending on size, roof type, and finish. Premium open deck: $40k–$70k. With pergola: $55k–$90k. Covered
            deck: $75k–$120k+. At 8.99% APR over 10 years, that&apos;s roughly <strong>$506–$1,519/month</strong>.
          </p>
        </div>
      </section>

      <article style={{ padding: '3.5rem 0' }}>
        <div style={S.container}>
          <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/showcase/img09.jpeg"
              alt="Premium deck project in McLean or Great Falls Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 960px) 100vw, 960px"
              quality={70}
              priority
            />
          </div>

          <h2 style={{ ...S.h2, marginTop: 0 }}>Premium Deck Tiers in McLean &amp; Great Falls</h2>
          <p style={S.p}>
            McLean and Great Falls projects typically start where most other Northern Virginia markets end. Below are
            the three most common project profiles we build in these markets — pricing reflects 500–800 sqft scale,
            premium materials, and high-end finish work.
          </p>
          {tiers.map((t, i) => (
            <div key={t.name} style={{ background: i === 2 ? '#fff8f1' : '#f9f9f9', border: `1px solid ${i === 2 ? '#f4d2bd' : '#e5e5e5'}`, borderRadius: 12, padding: '1.5rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <h3 style={{ ...S.h3, margin: 0 }}>{t.name}</h3>
                <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>{t.range}</span>
              </div>
              <p style={{ ...S.p, color: '#666', fontSize: '0.95rem', marginBottom: '0.5rem' }}>{t.desc}</p>
              <p style={{ ...S.p, fontSize: '0.9rem', fontWeight: 600, marginBottom: 0 }}>{t.monthly}</p>
            </div>
          ))}

          <h2 style={S.h2}>What Drives Premium Pricing in These Markets</h2>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', lineHeight: 1.85 }}>
            <li><strong>Material:</strong> AZEK Vintage or Trex Signature ($60–$85/sqft installed) rather than entry composite</li>
            <li><strong>Railings:</strong> Aluminum or cable rather than composite — adds $40–$60/linear ft</li>
            <li><strong>Lighting:</strong> Recessed deck lights, smart-controlled stair lights, integrated post lighting</li>
            <li><strong>Structure:</strong> Often a pergola or covered roof rather than open deck</li>
            <li><strong>Finish details:</strong> Picture-frame borders, multi-color inlays, built-in seating, planter benches</li>
            <li><strong>Site complexity:</strong> Sloped lots, mature tree clearance, steel framing for long spans</li>
            <li><strong>Audio/heating add-ons:</strong> Outdoor speakers, radiant heaters, ceiling fans on covered decks</li>
          </ul>

          <h2 style={S.h2}>Financing Premium Deck Projects</h2>
          <p style={S.p}>
            McLean and Great Falls homeowners often have flexibility on payment structure. Three common approaches:
            (1) cash-finance the framing and structure portion, then finance only the visible material upgrade,
            (2) finance the entire project on a 12–15 year term to keep monthly payment well below comfort threshold,
            (3) HELOC against home equity for the lowest APR (rates typically 1–3 points below unsecured
            home-improvement financing). Soft-pull pre-qualification through Enhancify takes ~60 seconds with no credit
            impact. Full options on the{' '}
            <Link href="/deck-financing" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
              deck financing page
            </Link>.
          </p>

          <h2 style={S.h2}>Permit and Timeline Notes</h2>
          <p style={S.p}>
            Fairfax County permit review for premium and covered decks runs 3–6 weeks. Premium projects almost always
            require engineering drawings ($500–$1,500), particularly for covered structures, steel framing, or sloped
            sites. We coordinate the structural review and handle the full permit submission. HOA review, where
            applicable, runs in parallel.
          </p>

          <h2 style={S.h2}>Related Local Pages</h2>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/deck-builder-mclean-va" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Deck Builder in McLean VA →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/deck-builder-great-falls-va" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Deck Builder in Great Falls VA →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/covered-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Covered Deck Cost Guide →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/timbertech-azek-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                TimberTech / AZEK Deck Cost →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/deck-payment-estimator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Deck Payment Estimator →
              </Link>
            </li>
          </ul>

          <h2 style={S.h2}>FAQ</h2>
          {faqs.map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 10, padding: '1.25rem', marginBottom: '0.75rem', background: '#fff' }}>
              <summary style={{ fontWeight: 700, cursor: 'pointer', fontSize: '1rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.75, color: '#555', fontSize: '0.95rem' }}>{faq.a}</p>
            </details>
          ))}
        </div>
      </article>

      <SimpleCTA title="Plan a Premium Deck Project" buttonText="Get Free Written Estimate" link="/contact" />
      <NamedAuthor context="McLean &amp; Great Falls, Virginia" lastUpdated="2026-05-27" />
      <RelatedGuides currentPath={PATH} />
      <ContactHome />
    </>
  );
}
