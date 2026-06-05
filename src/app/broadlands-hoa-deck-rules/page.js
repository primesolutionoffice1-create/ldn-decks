import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ArticleSchema from '@/components/ArticleSchema';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/broadlands-hoa-deck-rules',
  title: 'Broadlands HOA Deck Rules & Approval Guide',
  description: 'Building a deck in Broadlands, Ashburn? Learn how the Broadlands HOA architectural review works, how it pairs with the Loudoun County permit, and how to get approved.',
});

const PATH = '/broadlands-hoa-deck-rules';

const faqs = [
  {
    q: "Do I need HOA approval to build a deck in Broadlands?",
    a: "Yes. Broadlands is a covenant-controlled community, so any deck, porch, or exterior structure must be approved through the Broadlands Association's design review process before construction. This approval is separate from the Loudoun County building permit.",
  },
  {
    q: "Do wooded or sloped lots in Broadlands affect deck approval?",
    a: "They affect the design more than the approval itself. Many Broadlands lots back to trees or have grade changes, which often calls for elevated or multi-level decks. The HOA reviews material, color, and style, while the Loudoun County permit covers deeper footings, framing, and stair details.",
  },
  {
    q: "How long does Broadlands HOA deck approval take?",
    a: "Most Northern Virginia HOA design committees review complete applications within roughly 30 to 45 days. A complete packet with the application, scaled site plan, drawings, and material and color samples submitted early alongside the county permit is the best way to stay on schedule.",
  },
  {
    q: "Does a Broadlands deck also need a Loudoun County permit?",
    a: "Usually yes. Elevated, sloped-lot, and multi-level decks commonly involve footing, beam, joist, ledger, railing, and stair details that Loudoun County reviews separately from the HOA's appearance review.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `https://ldndecks.com${PATH}#faq`,
  url: `https://ldndecks.com${PATH}`,
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 } };

export default function BroadlandsHoaDeckRulesPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ArticleSchema
        title="Broadlands HOA Deck Rules & Approval Guide"
        description="Broadlands deck approval guide covering HOA design review, Loudoun County permits, sloped lots, elevated framing, stairs, ledger attachment, and project timing."
        path={PATH}
        image="/images/img03.jpeg"
        datePublished="2026-05-26"
        dateModified="2026-06-02"
      />
      <WebPageSchema url={`https://ldndecks.com${PATH}`} name="Broadlands HOA Deck Rules &amp; Approval Guide" description="Building a deck in Broadlands, Ashburn? Learn how the Broadlands HOA architectural review works, how it pairs with the Loudoun County permit, and how to get approved." speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image src="/images/img03.jpeg" alt="Elevated composite deck on a wooded Broadlands lot in Ashburn, Virginia" fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 900px" quality={70} priority />
          </div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>Broadlands HOA Deck Rules &amp; Approval Guide</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Deck and porch architectural approval for Broadlands, Ashburn &mdash; Loudoun County, VA</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Design Consultation</Link>
          </div>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <h2 style={S.h2}>Building a Deck in Broadlands</h2>
          <p style={S.p}>Broadlands is a well-established planned community in the Ashburn area of Loudoun County, known for its mature tree canopy, green spaces, and naturalistic landscaping. Many Broadlands homes back to woods, conservation areas, or gently sloped lots &mdash; which makes for beautiful backyards, and for decks that often need a little more engineering.</p>
          <p style={S.p}>Elevated decks and <Link href="/multi-level-deck-builder-northern-virginia" style={{ color: 'var(--color-primary)' }}>multi-level designs</Link> are common here, taking advantage of grade changes and tree-canopy views. Whatever the design, the approval path is the same: community design review, then a Loudoun County building permit.</p>

          <h2 style={S.h2}>How Broadlands Architectural Review Works</h2>
          <p style={S.p}>Broadlands is governed by the Broadlands Association. Any deck, porch, pergola, or exterior structure must be approved through the association&apos;s design review process <strong>before</strong> construction begins. A deck review generally considers:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Decking material and color, and coordination with your home</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Railing style &mdash; including open cable or metal railings often chosen to preserve wooded views</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>The size, height, and placement of the structure, especially on elevated or sloped lots</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Under-deck treatment and how the deck relates to adjacent open space</li>
          </ul>
          <p style={S.p}>Standards are updated over time, so confirm the current design guidelines directly with the Broadlands Association. For the broader picture, see our <Link href="/loudoun-county-hoa-deck-rules" style={{ color: 'var(--color-primary)' }}>Loudoun County HOA deck rules guide</Link> and our <Link href="/education/hoa-deck-approval-guidelines-nova" style={{ color: 'var(--color-primary)' }}>HOA approval walkthrough</Link>.</p>

          <h2 style={S.h2}>Two Approvals You Need</h2>
          <p style={S.p}>A Broadlands deck project requires <strong>two separate approvals</strong>. The <strong>HOA design review</strong> controls appearance &mdash; material, color, and style. The <strong>Loudoun County building permit</strong> controls structure and safety &mdash; footings, framing, ledger attachment, and railings. On Broadlands&apos; sloped and elevated lots the county side matters: deeper footings and taller support posts are common, and inspections verify them. Both approvals can run in parallel; see our <Link href="/deck-permit-loudoun-county-virginia" style={{ color: 'var(--color-primary)' }}>Loudoun County deck permit guide</Link>.</p>
          <p style={S.p}>Because Broadlands projects often sit above grade or back to wooded slopes, the permit reviewer will focus on the structural details behind the view: <Link href="/education/ledger-board-flashing-deck-attachment-virginia" style={{ color: 'var(--color-primary)' }}>ledger flashing and attachment</Link>, <Link href="/tools/deck-joist-span-calculator-virginia" style={{ color: 'var(--color-primary)' }}>joist spans</Link>, <Link href="/tools/deck-beam-span-calculator-virginia" style={{ color: 'var(--color-primary)' }}>beam spans</Link>, footing layout, guardrails, and stair geometry. If the stairs are changing, review the <Link href="/education/deck-stair-code-rise-run-virginia" style={{ color: 'var(--color-primary)' }}>Virginia deck stair code guide</Link> and <Link href="/education/deck-stair-construction-diagram" style={{ color: 'var(--color-primary)' }}>deck stair construction diagram</Link> before the HOA packet is finalized.</p>

          <h2 style={S.h2}>How Loudoun Decks Handles Broadlands Approvals</h2>
          <p style={S.p}>We design and build decks throughout Broadlands &mdash; including the elevated and multi-level designs its lots often call for &mdash; and we manage both approvals for you. We prepare the full HOA design-review packet, submit the Loudoun County permit, and coordinate every inspection. See more on our <Link href="/near-you/loudoun-county" style={{ color: 'var(--color-primary)' }}>Loudoun County page</Link> and <Link href="/deck-builder-ashburn-va" style={{ color: 'var(--color-primary)' }}>Ashburn deck builder page</Link>.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {faqs.map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/loudoun-county-hoa-deck-rules', 'Loudoun County HOA Deck Rules'],
              ['/deck-permit-loudoun-county-virginia', 'Loudoun County Deck Permit Guide'],
              ['/deck-permit-hoa-cost-loudoun-county', 'Loudoun Permit + HOA Cost Breakdown'],
              ['/education/ledger-board-flashing-deck-attachment-virginia', 'Ledger Flashing & Attachment Guide'],
              ['/tools/deck-joist-span-calculator-virginia', 'Deck Joist Span Calculator'],
              ['/tools/deck-beam-span-calculator-virginia', 'Deck Beam Span Calculator'],
              ['/education/deck-stair-code-rise-run-virginia', 'Virginia Deck Stair Code Guide'],
              ['/education/deck-stair-construction-diagram', 'Deck Stair Construction Diagram'],
              ['/multi-level-deck-builder-northern-virginia', 'Multi-Level Deck Builder'],
              ['/deck-builder-ashburn-va', 'Deck Builder in Ashburn'],
              ['/ashburn-composite-deck-cost-financing', 'Ashburn Composite Deck Cost &amp; Financing'],
              ['/cable-railing-for-decks-northern-virginia', 'Cable Railing for Decks'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} &rarr;</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Planning a Deck in Broadlands?" buttonText="Get Free Design Consultation" link="/contact" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <RelatedGuides currentPath="/broadlands-hoa-deck-rules" />

      <ContactHome />
    </>
  );
}
