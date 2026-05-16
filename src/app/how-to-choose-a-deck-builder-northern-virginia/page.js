import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import TrustBanner from '@/components/TrustBanner';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/how-to-choose-a-deck-builder-northern-virginia',
  title: 'How to Choose a Deck Builder in Northern Virginia (10 Questions + Red Flags)',
  description: '10 questions to ask before hiring a deck builder, 5 red flags to avoid, and how to verify a Virginia contractor license. From a 5-star rated NoVA deck builder.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How do I verify a deck builder's license in Virginia?", acceptedAnswer: { "@type": "Answer", text: "Visit the Virginia DPOR License Lookup at https://dfrnet.dpor.virginia.gov/. Search by company name or license number. Every contractor doing work over $1,000 in Virginia must have a Class A, B, or C contractor license." } },
    { "@type": "Question", name: "What should I look for in a deck builder's estimate?", acceptedAnswer: { "@type": "Answer", text: "An itemized materials list (brand, model, color), separate labor cost, permit fees, dumpster/cleanup, project timeline, warranty terms in writing, and the contractor's Virginia license number." } },
    { "@type": "Question", name: "Should I get multiple deck quotes?", acceptedAnswer: { "@type": "Answer", text: "Yes get 2-3 quotes from licensed contractors. Compare not just price, but scope, materials, warranty, timeline, and permit handling. The cheapest quote often excludes permits, cleanup, or uses inferior materials." } },
    { "@type": "Question", name: "What are red flags when hiring a deck builder?", acceptedAnswer: { "@type": "Answer", text: "No Virginia contractor license, cash-only payment demands, no written warranty, no permit mentioned, can't provide recent local references, pressure to sign immediately, price significantly below all other quotes." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, h3: { fontSize: '1.2rem', fontWeight: 600, margin: '1.5rem 0 0.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 } };

export default function ChooseDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>How to Choose a Deck Builder in Northern Virginia</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>10 questions to ask, 5 red flags to avoid, and how to verify credentials</p>
        </div>
      </section>
      <TrustBanner />

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img25.jpeg"
              alt="Professional deck construction detail showing quality craftsmanship"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>

          <h2 style={S.h2}>10 Questions to Ask Before You Hire</h2>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            {[
              { q: 'Are you licensed in Virginia?', detail: 'Virginia requires a DPOR contractor license for any work over $1,000. Ask for their license number and verify it at dpor.virginia.gov.' },
              { q: 'Do you carry liability insurance and workers\' comp?', detail: 'Without it, you\'re personally liable if a worker is injured on your property. Ask for a certificate of insurance.' },
              { q: 'Will you pull the building permit?', detail: 'A quality builder handles permits and inspections. If they suggest skipping the permit, walk away.' },
              { q: 'Do you handle HOA submissions?', detail: 'In Northern Virginia, most homes need HOA approval. Your builder should prepare and submit the ARC package.' },
              { q: 'What brands/materials do you install?', detail: 'Look for Trex Pro, TimberTech, or AZEK certifications. Avoid builders who are vague about materials.' },
              { q: 'Can I see recent local projects?', detail: 'Ask for 3-5 completed projects in your area, ideally within the last 12 months. Visit one if possible.' },
              { q: 'What\'s your written warranty?', detail: 'Get the warranty in writing before signing. It should cover workmanship (2 years) separately from manufacturer material warranties.' },
              { q: 'What\'s included in the estimate?', detail: 'Materials, labor, permits, dumpster, cleanup, and timeline should all be itemized. Lump-sum quotes hide problems.' },
              { q: 'What\'s your projected timeline?', detail: 'Get a start date and estimated completion in writing. Ask what happens if weather or supply delays occur.' },
              { q: 'How do you handle change orders?', detail: 'Changes happen. A professional builder documents changes in writing with cost impact before proceeding.' },
            ].map((item, i) => (
              <li key={i} style={{ marginBottom: '1.25rem', lineHeight: 1.7 }}>
                <strong>{item.q}</strong>
                <br /><span style={{ color: '#555' }}>{item.detail}</span>
              </li>
            ))}
          </ol>

          <h2 style={S.h2}>5 Red Flags Walk Away If You See These</h2>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            {[
              { flag: 'No Virginia contractor license', why: 'Illegal for work over $1,000. Zero recourse if something goes wrong.' },
              { flag: 'Cash-only or large upfront payment', why: 'Standard is 10-30% deposit, progress payments, and final on completion. 50%+ upfront is a red flag.' },
              { flag: 'No written warranty', why: 'Verbal promises are worthless. If they won\'t put it in writing, they won\'t honor it.' },
              { flag: 'Suggests skipping the permit', why: 'Unpermitted decks create legal liability, insurance issues, and kill home sales.' },
              { flag: 'Price significantly below all other quotes', why: 'Usually means cheaper materials, no permits, no insurance, or they\'ll ask for change orders mid-build.' },
            ].map((item, i) => (
              <li key={i} style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
                <strong style={{ color: '#c53030' }}>{item.flag}</strong>
                <br /><span style={{ color: '#555' }}>{item.why}</span>
              </li>
            ))}
          </ol>

          <h2 style={S.h2}>How to Verify a Virginia Contractor License</h2>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Visit <strong>dpor.virginia.gov</strong> → License Lookup</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Search by company name or license number</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Verify the license is <strong>active</strong> (not expired or revoked)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>Check the classification: <strong>Class A</strong> (unlimited), <strong>Class B</strong> (up to $120k), or <strong>Class C</strong> (up to $10k)</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}>For deck projects over $10k (most composite decks), you need a Class A or B contractor</li>
          </ol>

          <h2 style={S.h2}>Our Credentials (Transparent Answer to Every Question Above)</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                ['Licensed', 'Virginia Class A Contractor DPOR verified'],
                ['Insured', 'Full liability + workers\' comp certificate on request'],
                ['Permits', 'We pull all permits and coordinate every inspection 100% approval rate'],
                ['HOA', 'We prepare and submit ARC packages 100% approval rate across 50+ communities'],
                ['Materials', 'Trex Pro certified installer + TimberTech + AZEK'],
                ['Warranty', '2-year workmanship warranty in writing, on top of manufacturer warranties'],
                ['Reviews', '5.0★ on Google with 41 reviews'],
                ['References', 'Happy to share recent project contacts in your neighborhood'],
              ].map(([label, detail]) => (
                <li key={label} style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}>
                  <strong>{label}:</strong> {detail}
                </li>
              ))}
            </ul>
          </div>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
          {[
            { q: "How do I verify a contractor's license?", a: "Visit dpor.virginia.gov → License Lookup. Search by name or number. Must be active, Class A or B for projects over $10k." },
            { q: "What should be in the estimate?", a: "Itemized materials (brand/model/color), labor, permits, dumpster, cleanup, timeline, and warranty all in writing." },
            { q: "Should I get multiple quotes?", a: "Yes 2-3 quotes from licensed contractors. Compare scope, materials, and warranty, not just price." },
            { q: "What are the biggest red flags?", a: "No license, cash-only demands, no written warranty, suggesting to skip permits, and prices far below other quotes." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/how-much-does-a-deck-cost-northern-virginia', 'How Much Does a Deck Cost?'],
              ['/hoa-deck-rules-northern-virginia', 'HOA Deck Rules in NoVA'],
              ['/best-time-to-build-a-deck-northern-virginia', 'Best Time to Build a Deck'],
              ['/about', 'About Loudoun Decks'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>

      <SimpleCTA title="We'll Answer All 10 Questions on the Phone" buttonText="Call (571) 655-7207" link="phone" />
      <ContactHome />
    </>
  );
}
