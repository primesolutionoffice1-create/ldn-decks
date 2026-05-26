import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/ashburn-village-hoa-deck-rules',
  title: 'Ashburn Village HOA Deck Rules & Approval Guide',
  description: 'Replacing or building a deck in Ashburn Village? Learn how the Ashburn Village HOA review works, how it pairs with the Loudoun County permit, and how to get approved.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do I need HOA approval to replace a deck in Ashburn Village?", acceptedAnswer: { "@type": "Answer", text: "Yes. Even when you are replacing an existing deck, Ashburn Village requires approval through the community association's design review before work begins, because the new material, color, and railing style are an exterior change. This is separate from the Loudoun County building permit." } },
    { "@type": "Question", name: "Does replacing an old wood deck with composite need approval?", acceptedAnswer: { "@type": "Answer", text: "Yes. Switching from wood to composite changes the deck's color, texture, and railing — all things community design review covers. Submit the new material and color samples for approval, and confirm current design guidelines with the Ashburn Village association." } },
    { "@type": "Question", name: "How long does Ashburn Village deck approval take?", acceptedAnswer: { "@type": "Answer", text: "Most Northern Virginia HOA design committees review applications within roughly 30 to 45 days. Submitting a complete packet — application, scaled plan, drawings, and material samples — early and alongside the county permit is the best way to keep a replacement project moving." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 } };

export default function AshburnVillageHoaDeckRulesPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema url="https://ldndecks.com/ashburn-village-hoa-deck-rules" name="Ashburn Village HOA Deck Rules &amp; Approval Guide" description="Replacing or building a deck in Ashburn Village? Learn how the Ashburn Village HOA review works, how it pairs with the Loudoun County permit, and how to get approved." speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image src="/images/img17.jpeg" alt="Replacement composite deck on an established Ashburn Village home in Virginia" fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 900px" quality={70} priority />
          </div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>Ashburn Village HOA Deck Rules &amp; Approval Guide</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Deck replacement and approval for Ashburn Village &mdash; Loudoun County, VA</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Design Consultation</Link>
          </div>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <h2 style={S.h2}>Building or Replacing a Deck in Ashburn Village</h2>
          <p style={S.p}>Ashburn Village is one of the most established planned communities in Loudoun County. Because many of its homes have been lived in for decades, the most common deck project here is not a new build &mdash; it is a <strong>deck replacement</strong>. The original pressure-treated wood decks that came with these homes are now well past their service life, with splintering boards, graying surfaces, and aging railings.</p>
          <p style={S.p}>That makes Ashburn Village a natural fit for <Link href="/deck-resurfacing-vs-replacement" style={{ color: 'var(--color-primary)' }}>resurfacing or full replacement</Link> with low-maintenance composite. Whichever route fits your structure, the approval path is the same: community design review, then a Loudoun County building permit.</p>

          <h2 style={S.h2}>How Ashburn Village Architectural Review Works</h2>
          <p style={S.p}>Ashburn Village is governed by the Ashburn Village Community Association. Any deck, porch, or exterior structure &mdash; including a replacement &mdash; must be approved through the association&apos;s design review process <strong>before</strong> work begins. A deck review generally considers:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Decking material and color, especially a wood-to-composite change</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Railing style and how it compares to the original</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Any change in deck size, height, or footprint</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Stairs and how the deck coordinates with the home</li>
          </ul>
          <p style={S.p}>A common misconception is that swapping an old deck does not need approval. It does &mdash; new material and color are an exterior change. Confirm current standards with the Ashburn Village association, and see our <Link href="/loudoun-county-hoa-deck-rules" style={{ color: 'var(--color-primary)' }}>Loudoun County HOA deck rules guide</Link> for the wider context.</p>

          <h2 style={S.h2}>Two Approvals You Need</h2>
          <p style={S.p}>An Ashburn Village deck project requires <strong>two separate approvals</strong>. The <strong>HOA design review</strong> controls appearance &mdash; material, color, and style. The <strong>Loudoun County building permit</strong> controls structure and safety &mdash; footings, framing, ledger attachment, and railings. Replacing a deck almost always requires a permit, because guardrails, stairs, and decking are structural. Both can be pursued together; see our <Link href="/deck-permit-loudoun-county-virginia" style={{ color: 'var(--color-primary)' }}>Loudoun County deck permit guide</Link>.</p>

          <h2 style={S.h2}>How Loudoun Decks Handles Ashburn Village Approvals</h2>
          <p style={S.p}>We replace and rebuild decks throughout Ashburn Village, and we manage both approvals for you. We prepare the HOA design-review packet with the new material and color samples, submit the Loudoun County permit, and coordinate every inspection &mdash; including the structural checks that a replacement triggers. See more on our <Link href="/near-you/loudoun-county" style={{ color: 'var(--color-primary)' }}>Loudoun County page</Link> and <Link href="/deck-builder-ashburn-va" style={{ color: 'var(--color-primary)' }}>Ashburn deck builder page</Link>.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "Do I need approval to replace an existing deck?", a: "Yes. A replacement changes material, color, and railing style, so Ashburn Village design review is required before work begins — separate from the county permit." },
            { q: "Does a wood-to-composite swap need approval?", a: "Yes. The new color and texture are an exterior change. Submit material and color samples, and confirm current guidelines with the association." },
            { q: "Can Loudoun Decks handle the HOA paperwork?", a: "Yes. We prepare the full design-review packet and county permit application and coordinate inspections. Call 571-655-7207 to start." },
          ].map((faq, i) => (
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
              ['/deck-resurfacing-vs-replacement', 'Deck Resurfacing vs Replacement'],
              ['/deck-builder-ashburn-va', 'Deck Builder in Ashburn'],
              ['/services/deck-replacement', 'Deck Replacement Service'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} &rarr;</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Planning a Deck in Ashburn Village?" buttonText="Get Free Design Consultation" link="/contact" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <ContactHome />
    </>
  );
}
