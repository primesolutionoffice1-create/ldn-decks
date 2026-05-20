import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/questions-to-ask-before-building-a-deck',
  title: '20 Questions Before Building a Deck (2026)',
  description: '20 questions every homeowner should answer before building a deck: budget, materials, permits, HOA, timeline. From a 5-star NoVA builder.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the first thing to consider before building a deck?", acceptedAnswer: { "@type": "Answer", text: "Budget. Know your realistic range before talking to contractors. In Northern Virginia, composite decks cost $15,000-$45,000 for 300-500 sqft. This sets the scope for everything else: size, materials, and features." } },
    { "@type": "Question", name: "Do I need a permit to build a deck?", acceptedAnswer: { "@type": "Answer", text: "Almost always yes in Northern Virginia. Any deck attached to your house or over 30 inches above grade requires a building permit from your county (Loudoun, Fairfax, Prince William). Plus HOA approval if applicable." } },
    { "@type": "Question", name: "How do I know if my yard is suitable for a deck?", acceptedAnswer: { "@type": "Answer", text: "Almost any yard can accommodate a deck. Key factors: slope (multi-level designs work on hills), setback distances from property lines (varies by county), underground utilities (call 811 before digging), and drainage patterns. A contractor evaluates all of this during the free consultation." } },
  ],
};

const questions = [
  {
    category: 'Budget & Planning', items: [
      { q: 'What is my realistic budget?', a: 'Composite decks in NoVA: $15k-$45k for 300-500 sqft. Include railings, stairs, lighting, permits in your number not just the deck surface.', link: '/how-much-does-a-deck-cost-northern-virginia' },
      { q: 'Should I finance or pay cash?', a: 'Financing at $0 down with 12-60 month terms lets you build now and enjoy immediately while paying over time. Material costs rise 5-8% annually waiting rarely saves money.', link: '/deck-financing-northern-virginia' },
      { q: 'What size deck do I need?', a: 'Couples: 150-200 sqft. Families: 300-400 sqft. Entertainers: 500+. Don\'t exceed 20-25% of your backyard.', link: '/what-size-deck-should-i-build' },
      { q: 'When is the best time to build?', a: 'Feb-Apr for best pricing. May-Aug is peak with 4-6 week waits. Start 2-3 months before desired completion.', link: '/best-time-to-build-a-deck-northern-virginia' },
    ]
  },
  {
    category: 'Materials', items: [
      { q: 'Composite or wood?', a: 'Composite costs more upfront but less over 15 years. Zero maintenance, 25-50 year lifespan, better resale ROI. Wood only makes sense for tight budgets under $10k.', link: '/composite-deck-vs-wood-deck-virginia' },
      { q: 'Which composite brand?', a: 'Trex Transcend = best overall. TimberTech AZEK = premium. Trex Enhance = budget. All are excellent for Virginia climate.', link: '/trex-vs-timbertech-vs-azek' },
      { q: 'What railing should I choose?', a: 'Composite ($40-$70/ft) = most popular. Aluminum ($35-$60/ft) = modern clean. Cable ($60-$100/ft) = best view. Check HOA before choosing.', link: '/deck-railing-options-northern-virginia' },
      { q: 'Do I need lighting?', a: 'Strongly recommended. Post caps + stair risers ($500-$1,200) are essential for safety and ambiance. Include in initial build 30-50% cheaper than retrofitting.', link: '/deck-lighting-ideas-northern-virginia' },
    ]
  },
  {
    category: 'Permits & HOA', items: [
      { q: 'Do I need a building permit?', a: 'Yes any deck attached to your house or 30"+ above grade. Your builder should handle this. If they suggest skipping: walk away.', link: '/deck-permit-fairfax-county-virginia' },
      { q: 'Do I need HOA approval?', a: '80%+ of NoVA homes are in HOAs that require architectural review. Submit: site plan, materials, colors, railings. 2-4 week process.', link: '/hoa-deck-rules-northern-virginia' },
      { q: 'What happens if I build without permits?', a: 'Stop-work orders, fines, required demolition or retrofitting, title issues at sale, insurance won\'t cover. Never skip permits.' },
      { q: 'How long do permits take?', a: 'Loudoun: 10-15 business days. Fairfax: 3-6 weeks. Prince William: 2-4 weeks. Start early.', link: '/how-long-to-build-a-deck-northern-virginia' },
    ]
  },
  {
    category: 'Contractor Selection', items: [
      { q: 'How do I choose a deck builder?', a: 'Verify VA license at dpor.virginia.gov. Check insurance. Ask for 3-5 recent local references. Get itemized written estimate. Confirm warranty in writing.', link: '/how-to-choose-a-deck-builder-northern-virginia' },
      { q: 'How many quotes should I get?', a: '2-3 from licensed contractors. Compare scope and materials, not just price. Cheapest quote usually means cheapest materials or no permits.' },
      { q: 'What red flags should I watch for?', a: 'No VA license, cash-only demands, no written warranty, suggests skipping permits, can\'t show recent local work, pressure to sign immediately.' },
      { q: 'What should the estimate include?', a: 'Itemized materials (brand, model, color), labor, permits, dumpster, cleanup, timeline, warranty terms all in writing. Lump-sum quotes hide problems.' },
    ]
  },
  {
    category: 'Design & Features', items: [
      { q: 'Should I add a screened porch?', a: 'If bugs or weather limit your outdoor time: yes. Extends season from 5 months to 9-10. ROI: 70-85% at resale. Many combine open deck + screened section.', link: '/screened-porch-cost-northern-virginia' },
      { q: 'Will my deck add home value?', a: 'Yes. Composite: 65-80% ROI. Screened porch: 70-85%. In NoVA\'s competitive market, outdoor living space sells homes faster.', link: '/does-a-deck-add-value-to-your-home' },
      { q: 'Do I need stairs?', a: 'If deck is above grade: yes (code requirement for egress). Wider stairs (4 ft) feel more generous. Include lighting on every staircase.' },
      { q: 'What about the space under an elevated deck?', a: 'Add an under-deck ceiling/drainage system ($3k-$15k) to create a dry patio, storage, or hot tub area below. Doubles your outdoor space.', link: '/under-deck-ceiling-ideas' },
    ]
  },
];

export default function QuestionsPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img10.jpeg"
              alt="Consulting with a professional deck builder in Northern Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>20 Questions to Ask Before Building a Deck</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>The complete homeowner checklist answer these before calling any contractor</p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          {questions.map((section) => (
            <div key={section.category} style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.5rem', borderBottom: '2px solid var(--color-primary)', paddingBottom: '0.5rem' }}>{section.category}</h2>
              {section.items.map((item, i) => (
                <div key={i} style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{i + 1 + questions.slice(0, questions.indexOf(section)).reduce((sum, s) => sum + s.items.length, 0)}. {item.q}</h3>
                  <p style={{ lineHeight: 1.7, color: '#555' }}>{item.a}</p>
                  {item.link && <Link href={item.link} style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9rem' }}>Read more →</Link>}
                </div>
              ))}
            </div>
          ))}
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1rem', marginTop: '2rem' }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/northern-virginia-deck-building-guide', 'The Complete Deck Building Guide'],
              ['/how-to-choose-a-deck-builder-northern-virginia', 'How to Choose a Deck Builder'],
              ['/how-much-does-a-deck-cost-northern-virginia', 'Deck Cost Guide'],
              ['/about/certifications-and-licenses', 'Our Credentials'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Ready? We'll Answer Every Question on the Phone" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </>
  );
}
