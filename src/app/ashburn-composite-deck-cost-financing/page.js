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

export const metadata = buildMetadata({
  path: '/ashburn-composite-deck-cost-financing',
  title: 'Ashburn Composite Deck Cost and Financing Guide (2026)',
  description: 'Ashburn VA composite deck cost — typical project pricing for Ashburn Village, Brambleton, Belmont, and Broadlands. HOA-aware planning + monthly payment.',
  image: '/showcase/img12.jpeg',
});

const PATH = '/ashburn-composite-deck-cost-financing';

const neighborhoods = [
  { name: 'Ashburn Village', deck: '$22,000–$36,000', notes: 'Active architectural review committee; composite + aluminum railings common' },
  { name: 'Brambleton', deck: '$24,000–$42,000', notes: 'Larger lot averages; covered decks and pergolas frequent' },
  { name: 'Broadlands', deck: '$22,000–$38,000', notes: 'Mature trees affect joist span and lighting planning' },
  { name: 'Belmont Country Club', deck: '$30,000–$60,000+', notes: 'Premium tier preferred; AZEK Vintage common' },
  { name: 'One Loudoun', deck: '$26,000–$48,000', notes: 'Modern aesthetic — cable railings and dark composite popular' },
  { name: 'Stone Ridge', deck: '$22,000–$38,000', notes: 'Newer construction; HOA submission via Inspirica portal' },
];

const faqs = [
  {
    q: 'How much does a composite deck cost in Ashburn VA?',
    a: 'A typical 300–400 sqft composite deck in Ashburn runs $22,000–$42,000 depending on tier and neighborhood. Premium projects in Belmont Country Club or larger Brambleton lots go higher ($45,000–$60,000+). Resurfacing on an existing frame runs $16,000–$28,000.',
  },
  {
    q: 'Which HOA communities in Ashburn have strict deck rules?',
    a: 'Ashburn Village, Brambleton, Belmont Country Club, Broadlands, One Loudoun, and Stone Ridge all have architectural review processes for new deck projects. Material, color, railing style, and setbacks are typically the most restricted elements. We submit HOA packages weekly to all of these.',
  },
  {
    q: 'What is the monthly payment on a $30,000 Ashburn deck?',
    a: 'At a sample 8.99% APR, a $30,000 Ashburn composite deck financed over 10 years is roughly $380/month and roughly $304/month over 15 years. Pre-qualification through a soft credit pull returns your real number without affecting your credit score.',
  },
  {
    q: 'How long does HOA approval take in Ashburn Village or Brambleton?',
    a: 'Ashburn Village ARC: 2–4 weeks from complete submission. Brambleton: typically 3–4 weeks. Belmont Country Club: 4–6 weeks because the committee meets less frequently. We handle the full HOA submission process for every project.',
  },
  {
    q: 'Do I need a permit for a deck in Ashburn?',
    a: 'Yes. Ashburn is in Loudoun County — any deck attached to the house or higher than 30 inches above grade requires a county permit. Most Ashburn HOAs also require architectural review before permit submission. Permit + HOA typically adds $500–$1,500 to project amount.',
  },
  {
    q: 'Can you build a covered deck in Ashburn?',
    a: 'Yes. Covered decks are popular in Ashburn — particularly in Brambleton, Belmont, and One Loudoun where lot sizes accommodate the structure. HOA approval typically takes a bit longer for covered decks. Pricing runs $35,000–$75,000+ depending on roof type and finish.',
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
  th: { padding: '0.85rem', textAlign: 'left', borderBottom: '2px solid #ddd', fontSize: '0.92rem', background: '#f5f5f5' },
  td: { padding: '0.85rem', borderBottom: '1px solid #eee', fontSize: '0.92rem' },
  container: { maxWidth: 960, margin: '0 auto', padding: '0 1.5rem' },
};

export default function AshburnCompositeDeckCostPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ArticleSchema
        title="Ashburn Composite Deck Cost and Financing Guide (2026)"
        description="Ashburn VA composite deck cost — typical project pricing for Ashburn Village, Brambleton, Belmont, and Broadlands."
        path={PATH}
        image="/showcase/img12.jpeg"
        datePublished="2026-05-27"
        dateModified="2026-05-27"
      />
      <WebPageSchema url={`https://ldndecks.com${PATH}`} name="Ashburn Composite Deck Cost and Financing Guide (2026)" description="Ashburn VA composite deck cost — typical project pricing for Ashburn Village, Brambleton, Belmont, and Broadlands. HOA-aware planning + monthly payment." speakable />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={S.container}>
          <p style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Local Guide &middot; Ashburn VA
          </p>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.15 }}>
            Ashburn Composite Deck Cost and Financing Guide
          </h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Project pricing for Ashburn Village, Brambleton, Belmont, Broadlands, One Loudoun, and Stone Ridge — plus
            monthly payment ranges and HOA-aware planning notes.
          </p>
        </div>
      </section>

      <TrustBanner />

      <AboveFoldCTA
        headline="Plan your Ashburn deck monthly payment with the deck payment estimator."
        estimateHref="/deck-payment-estimator"
        estimateLabel="Estimate an Ashburn Deck"
      />

      <section style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }} className="quick-answer">
        <div style={S.container}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p data-speakable>
            A typical 300–400 sqft <strong>composite deck in Ashburn VA</strong> runs <strong>$22,000–$42,000</strong>{' '}
            depending on tier and neighborhood. At 8.99% APR over 10 years that&apos;s roughly <strong>$278–$532
            /month</strong>. Belmont Country Club and larger Brambleton lots run $30,000–$60,000+. HOA-aware planning
            adds $500–$1,500 in fees.
          </p>
        </div>
      </section>

      <section style={{ background: '#f6f9fc', borderLeft: '4px solid #2b6cb0', padding: '1.5rem 0' }}>
        <div style={S.container}>
          <p style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#2b6cb0', fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            What We See on Ashburn HOA &amp; Project Reviews
          </p>
          <p data-speakable style={{ marginBottom: 0, lineHeight: 1.7 }}>
            Ashburn HOA architectural review timelines typically run <strong>2–4 weeks</strong> from a complete
            submission. <strong>Ashburn Village ARC and Brambleton ARC</strong> are usually on the faster end (~2–3 weeks);
            <strong> Belmont Country Club ARC</strong> runs longer (3–5 weeks) because the committee meets less frequently.
            The most common resubmission triggers we see are <strong>railing color</strong> (community-approved palette is
            stricter than expected) and <strong>setback measurements</strong>. We submit packages with material samples,
            site plan, and elevation drawings together to minimize back-and-forth.
          </p>
        </div>
      </section>

      <article style={{ padding: '3.5rem 0' }}>
        <div style={S.container}>
          <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/showcase/img12.jpeg"
              alt="Composite deck project in Ashburn Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 960px) 100vw, 960px"
              quality={70}
              priority
            />
          </div>

          <h2 style={{ ...S.h2, marginTop: 0 }}>Ashburn Deck Cost by Neighborhood</h2>
          <p style={S.p}>
            Pricing in Ashburn varies more by HOA and lot size than by exact street address. Below are typical 2026
            project ranges for a 300–400 sqft composite deck in the most common Ashburn HOA communities.
          </p>
          {neighborhoods.map((n) => (
            <div key={n.name} style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderRadius: 12, padding: '1.25rem', marginBottom: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <h3 style={{ ...S.h3, margin: 0 }}>{n.name}</h3>
                <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>{n.deck}</span>
              </div>
              <p style={{ ...S.p, color: '#666', fontSize: '0.9rem', marginBottom: 0 }}>{n.notes}</p>
            </div>
          ))}

          <h2 style={S.h2}>HOA Approval is the Critical Path</h2>
          <p style={S.p}>
            In Ashburn, HOA architectural review usually takes longer than the county permit review. Plan to submit the
            HOA package first — it&apos;s required for permit application in most communities. We bundle HOA submission
            with the design and project management.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/ashburn-village-hoa-deck-rules" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Ashburn Village HOA Deck Rules →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/brambleton-hoa-deck-rules" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Brambleton HOA Deck Rules →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/broadlands-hoa-deck-rules" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Broadlands HOA Deck Rules →
              </Link>
            </li>
          </ul>

          <h2 style={S.h2}>Financing an Ashburn Composite Deck</h2>
          <p style={S.p}>
            Ashburn homeowners typically have strong credit profiles, which translates to APR offers in the 7–10% range
            for home-improvement financing. Soft-pull pre-qualification through Enhancify returns multiple lender
            offers in roughly 60 seconds without affecting credit score. Full process on the{' '}
            <Link href="/deck-financing" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
              deck financing page
            </Link>.
          </p>

          <h2 style={S.h2}>Typical Ashburn Project Examples</h2>
          {[
            { price: '$26,500', loc: 'Ashburn Village', detail: '320 sqft Trex Transcend Tiki Torch with composite railings and stair lights. ARC approved in 3 weeks. 1.5-week build.' },
            { price: '$34,000', loc: 'Brambleton', detail: '420 sqft Trex Signature Whidbey with cable railings on the view side. Pergola add-on. HOA approved. 2.5-week build.' },
            { price: '$48,000', loc: 'Belmont Country Club', detail: '480 sqft TimberTech AZEK Vintage English Walnut, full aluminum railings, recessed stair lighting. ARC approved. 3-week build.' },
            { price: '$22,500', loc: 'Stone Ridge', detail: '300 sqft Trex Enhance Naturals with composite railings — budget tier with strong long-term warranty. 1-week build.' },
          ].map((p, i) => (
            <div key={i} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '1rem', borderLeft: '4px solid var(--color-primary)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>{p.loc}</span>
                <span style={{ fontWeight: 600 }}>{p.price}</span>
              </div>
              <p style={{ lineHeight: 1.7, fontSize: '0.95rem' }}>{p.detail}</p>
            </div>
          ))}

          <h2 style={S.h2}>Related Ashburn Pages</h2>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/deck-builder-ashburn-va" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Deck Builder in Ashburn VA (service page) →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Composite Deck Cost in Northern Virginia →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/deck-payment-estimator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Deck Payment Estimator →
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/deck-permit-hoa-cost-loudoun-county" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Loudoun County Permit & HOA Costs →
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

      <SimpleCTA title="Estimate an Ashburn Deck" buttonText="Get Free Estimate" link="/contact" />
      <NamedAuthor context="Ashburn, Virginia" lastUpdated="2026-05-27" />
      <RelatedGuides currentPath={PATH} />
      <ContactHome />
    </>
  );
}
