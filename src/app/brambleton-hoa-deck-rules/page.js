import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/brambleton-hoa-deck-rules',
  title: 'Brambleton HOA Deck Rules & Approval Guide',
  description: 'Building a deck in Brambleton, VA? Learn how Brambleton HOA architectural review works, how it pairs with the Loudoun County permit, and how to get approved fast.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do I need HOA approval to build a deck in Brambleton?", acceptedAnswer: { "@type": "Answer", text: "Yes. Brambleton is a covenant-controlled community, so any deck, porch, or exterior structure must be approved by the Brambleton Community Association's design review process before construction begins. This approval is separate from — and in addition to — the Loudoun County building permit." } },
    { "@type": "Question", name: "How long does Brambleton HOA deck approval take?", acceptedAnswer: { "@type": "Answer", text: "Most Northern Virginia HOA design committees review applications within roughly 30 to 45 days. A complete submission — application form, scaled site plan, construction drawings, and material and color samples — is the single best way to avoid a second review cycle. Submitting early, alongside the county permit application, keeps the project on schedule." } },
    { "@type": "Question", name: "What does the Brambleton HOA review for a deck?", acceptedAnswer: { "@type": "Answer", text: "Community design review for a deck typically covers the decking material and color, railing style, the size and placement of the structure, and how it relates to your home and the lot. Always confirm the current design guidelines with the Brambleton Community Association, since standards are updated over time." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 } };

export default function BrambletonHoaDeckRulesPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image src="/images/img32.jpeg" alt="Custom composite deck on a Brambleton home in Ashburn, Virginia" fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 900px" quality={70} priority />
          </div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>Brambleton HOA Deck Rules &amp; Approval Guide</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Deck and porch architectural approval for Brambleton, Ashburn &mdash; Loudoun County, VA</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Design Consultation</Link>
          </div>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <h2 style={S.h2}>Building a Deck in Brambleton</h2>
          <p style={S.p}>Brambleton is one of the largest master-planned communities in Loudoun County &mdash; a tightly designed, amenity-rich community in the Ashburn area that is still growing. Because Brambleton was developed with a cohesive architectural identity, the community is covenant-controlled, and exterior projects like decks are reviewed to keep that consistency.</p>
          <p style={S.p}>Most Brambleton homes are new enough that homeowners are either adding their <strong>first deck</strong> or moving early on a <Link href="/composite-decks" style={{ color: 'var(--color-primary)' }}>composite upgrade</Link> before a builder-grade wood deck ages out. Either way, the path is the same: design review approval from the community, then a Loudoun County building permit.</p>

          <h2 style={S.h2}>How Brambleton Architectural Review Works</h2>
          <p style={S.p}>Brambleton is governed by the Brambleton Community Association. Any deck, porch, pergola, or exterior structure must be approved through the association&apos;s design review process <strong>before</strong> construction begins. A community design review for a deck generally looks at:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Decking material and color, and how they coordinate with your home</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Railing style, baluster type, and post detailing</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>The size, height, and placement of the structure on the lot</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Stairs, screening, and any under-deck treatment</li>
          </ul>
          <p style={S.p}>Exact standards change over time, so always confirm the current design guidelines directly with the Brambleton Community Association. For the broader picture of how Loudoun communities review decks, see our <Link href="/loudoun-county-hoa-deck-rules" style={{ color: 'var(--color-primary)' }}>Loudoun County HOA deck rules guide</Link> and our <Link href="/education/hoa-deck-approval-guidelines-nova" style={{ color: 'var(--color-primary)' }}>HOA approval walkthrough</Link>.</p>

          <h2 style={S.h2}>Two Approvals You Need</h2>
          <p style={S.p}>A Brambleton deck project requires <strong>two separate approvals</strong>, and they are easy to confuse:</p>
          <p style={S.p}><strong>1. HOA design review</strong> &mdash; the Brambleton Community Association controls appearance: material, color, and style. <strong>2. Loudoun County building permit</strong> &mdash; the county controls structure and safety: footings, framing, ledger attachment, and railings. You need both, and they can be pursued at the same time. See our <Link href="/deck-permit-loudoun-county-virginia" style={{ color: 'var(--color-primary)' }}>Loudoun County deck permit guide</Link> for the county side.</p>

          <h2 style={S.h2}>How Loudoun Decks Handles Brambleton Approvals</h2>
          <p style={S.p}>As a licensed Loudoun County deck builder that works regularly in Brambleton, we manage both approvals for you. We prepare the full HOA design-review packet &mdash; scaled site plan, construction drawings, and material and color samples &mdash; submit the Loudoun County permit application, and schedule every inspection. You approve the design; we handle the paperwork. Explore our work across the area on our <Link href="/near-you/loudoun-county" style={{ color: 'var(--color-primary)' }}>Loudoun County page</Link> and <Link href="/deck-builder-brambleton-va" style={{ color: 'var(--color-primary)' }}>Brambleton deck builder page</Link>.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ</h2>
          {[
            { q: "Do I need HOA approval to build a deck in Brambleton?", a: "Yes. Any deck or exterior structure must be approved through the Brambleton Community Association's design review before construction — separate from the Loudoun County building permit." },
            { q: "How long does approval take?", a: "Most NoVA HOA committees review within 30-45 days. A complete packet submitted early, alongside the county permit, is the best way to stay on schedule." },
            { q: "Can Loudoun Decks handle the HOA paperwork?", a: "Yes. We prepare the full design-review packet and the county permit application, and coordinate all inspections. Call 571-655-7207 to start." },
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
              ['/education/hoa-deck-approval-guidelines-nova', 'HOA Approval Walkthrough'],
              ['/deck-builder-brambleton-va', 'Deck Builder in Brambleton'],
              ['/composite-decks', 'Composite Decking Options'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} &rarr;</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <SimpleCTA title="Planning a Deck in Brambleton?" buttonText="Get Free Design Consultation" link="/contact" />
      <ContactHome />
    </>
  );
}
