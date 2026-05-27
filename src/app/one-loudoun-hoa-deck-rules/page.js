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
  path: '/one-loudoun-hoa-deck-rules',
  title: 'One Loudoun HOA Deck Rules & Approval Guide | Loudoun Decks',
  description: 'Building a deck in One Loudoun, Ashburn? Architectural review for townhomes + estates, modern design vocabulary, FirstService Residential management, and how it pairs with the Loudoun County permit.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do I need HOA approval for a deck in One Loudoun?", acceptedAnswer: { "@type": "Answer", text: "Yes. Every deck, balcony rebuild, rooftop terrace, pergola, and exterior structure in One Loudoun requires approval through the community's architectural review process before construction begins. One Loudoun is mixed-use (townhomes + detached homes + condos near the Metro corridor) and the design review intensity varies by sub-section — but the requirement is universal." } },
    { "@type": "Question", name: "How long does One Loudoun ARC review take?", acceptedAnswer: { "@type": "Answer", text: "One Loudoun's review typically clears in 18-28 days when the submission packet is complete on first submission. The townhome sub-sections often run on the faster end (18-21 days) given more standardized rules. The detached estate sub-sections take longer (21-28 days) because they support a wider design vocabulary." } },
    { "@type": "Question", name: "Who manages the One Loudoun ARC?", acceptedAnswer: { "@type": "Answer", text: "One Loudoun is managed by FirstService Residential, one of the largest residential community management firms in Northern Virginia. Our submissions go through their established process — material samples, color specs, structural drawings, and homeowner authorization. We carry the current FirstService submission template and our packets clear first-round review." } },
    { "@type": "Question", name: "What's the One Loudoun design aesthetic?", acceptedAnswer: { "@type": "Answer", text: "One Loudoun leans contemporary — Metro-corridor mixed-use architecture, walkable urban planning, modern home styles. Approved deck materials skew toward darker composite tones (Trex Transcend Lava Rock, Dark Hickory, Vintage Lantern; TimberTech AZEK Vintage Mahogany or Coastline). Black aluminum or cable railings are common. Integrated low-voltage lighting is nearly universal. Traditional balustrade railings are also approved but less popular than the modern systems." } },
    { "@type": "Question", name: "Do townhome rear decks need full ARC review?", acceptedAnswer: { "@type": "Answer", text: "Yes — even compact 180-280 sqft townhome rear decks need the same architectural review process as larger detached-home decks. The good news: townhome submissions tend to clear faster because the rules are more standardized and the design vocabulary is narrower. We've completed many One Loudoun townhome rear-deck builds and the typical timeline is 18-21 days from submission to approval." } },
    { "@type": "Question", name: "What does a One Loudoun deck cost?", acceptedAnswer: { "@type": "Answer", text: "Townhome rear decks (180-280 sqft): $22,000-$38,000. Detached single-family decks (400-600 sqft): $38,000-$65,000. Rooftop terrace builds on Metro-corridor townhomes: $28,000-$58,000 (see our dedicated rooftop deck builder page for the structural + approval details). Premium estate-tier projects with outdoor kitchens and multi-level designs: $65,000-$120,000+." } },
    { "@type": "Question", name: "Can Loudoun Decks handle the One Loudoun ARC paperwork?", acceptedAnswer: { "@type": "Answer", text: "Yes. We maintain the current FirstService Residential submission template for One Loudoun, prepare the full ARC packet with material samples + color specs + structural drawings, file the Loudoun County building permit in parallel, and coordinate every inspection. Homeowners never deal with the portal or the committee directly. Call 571-655-7207." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 } };

export default function OneLoudoutHoaDeckRulesPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema url="https://ldndecks.com/one-loudoun-hoa-deck-rules" name="One Loudoun HOA Deck Rules &amp; Approval Guide" description="Building a deck in One Loudoun, Ashburn? Architectural review for townhomes + estates, FirstService Residential management, modern design vocabulary, county permit coordination." speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image src="/images/img17.jpeg" alt="Modern composite deck in One Loudoun, Ashburn, Virginia" fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 900px" quality={70} priority />
          </div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>One Loudoun HOA Deck Rules &amp; Approval Guide</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Architectural review + Loudoun County permit for One Loudoun &mdash; Ashburn, VA</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Design Consultation</Link>
          </div>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <h2 style={S.h2}>Building a Deck in One Loudoun</h2>
          <p style={S.p}>One Loudoun is the mixed-use Metro-corridor development at the heart of Ashburn — a walkable urban planning concept that blends townhomes, detached single-family homes, condos, retail, restaurants, and the One Loudoun Plaza commercial core. Deck projects here split into three distinct categories: compact rear decks on the townhomes, full-size rear decks on the detached estate-section homes, and rooftop terrace builds on the Metro-corridor townhomes designed with rooftop access.</p>
          <p style={S.p}>Whichever category your home falls into, the approval path goes through the One Loudoun community ARC + the Loudoun County building permit. We file both in parallel from contract day. See our broader <Link href="/deck-builder-ashburn-va" style={{ color: 'var(--color-primary)' }}>Ashburn deck builder page</Link> for context, and <Link href="/rooftop-deck-builder-northern-virginia" style={{ color: 'var(--color-primary)' }}>rooftop deck builder page</Link> if your project is elevated.</p>

          <h2 style={S.h2}>How One Loudoun Architectural Review Works</h2>
          <p style={S.p}>One Loudoun is managed by <strong>FirstService Residential</strong>, one of the largest residential community management firms in Northern Virginia. The ARC review follows FirstService&apos;s standardized process:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Application form (FirstService submission template)</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Material samples (physical or photo-verified for accepted manufacturer codes)</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Color specifications with manufacturer codes</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Structural drawings showing footings, framing, ledger, railings</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Site plan with setbacks verified against the lot&apos;s certified plat</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Homeowner authorization signed for the contractor to file</li>
          </ul>
          <p style={S.p}>Townhome sub-sections (compact rear decks): typical review <strong>18-21 days</strong>. Detached estate sub-sections: <strong>21-28 days</strong> due to wider design vocabulary.</p>

          <h2 style={S.h2}>One Loudoun&apos;s Modern Design Aesthetic</h2>
          <p style={S.p}>One Loudoun leans contemporary. The Metro-corridor architecture sets the design vocabulary, and approved deck specifications consistently skew modern:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>Composite tones:</strong> Trex Transcend Lava Rock, Dark Hickory, Vintage Lantern; TimberTech AZEK Vintage Mahogany or Coastline (the cool counterpoint)</li>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>Railings:</strong> black aluminum cable, black aluminum horizontal, or glass railings (preserves Metro-corridor views from upper-level decks)</li>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>Lighting:</strong> integrated low-voltage LED is nearly universal — recessed step lights, post-cap lights, and under-rail strip lighting</li>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>Picture-frame borders:</strong> contrasting darker borders around lighter field boards (or vice versa) are popular and approved</li>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>Traditional balustrade railings:</strong> also approved but less common in One Loudoun than the modern systems</li>
          </ul>

          <h2 style={S.h2}>Two Approvals You Need</h2>
          <p style={S.p}>A One Loudoun deck project requires <strong>two separate approvals in parallel</strong>. The <strong>FirstService ARC review</strong> controls appearance. The <strong>Loudoun County building permit</strong> controls structure and safety. We file both packages from the day you sign — never serially. Full county process: <Link href="/deck-permit-loudoun-county-virginia" style={{ color: 'var(--color-primary)' }}>Loudoun County deck permit guide</Link>.</p>

          <h2 style={S.h2}>Typical One Loudoun Deck Projects + Pricing</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Townhome rear deck</strong> (180-280 sqft): $22,000-$38,000</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Detached single-family rear deck</strong> (400-600 sqft): $38,000-$65,000</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Rooftop terrace</strong> (Metro-corridor townhomes): $28,000-$58,000 — see <Link href="/rooftop-deck-builder-northern-virginia" style={{ color: 'var(--color-primary)' }}>rooftop deck builder</Link></li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Multi-level estate-section deck</strong> (600-800 sqft): $58,000-$95,000</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Full outdoor-living package</strong> (deck + screened porch + outdoor kitchen): $85,000-$140,000+</li>
          </ul>

          <h2 style={S.h2}>How Loudoun Decks Handles One Loudoun Approvals</h2>
          <p style={S.p}>We carry the current FirstService Residential submission template, prepare the full ARC packet with material samples and renderings, file the Loudoun County permit in parallel, and coordinate every inspection. We&apos;ve completed multiple One Loudoun projects across both the townhome and estate sub-sections. See more on our <Link href="/deck-builder-ashburn-va" style={{ color: 'var(--color-primary)' }}>Ashburn deck builder page</Link>.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ — One Loudoun HOA deck approval</h2>
          {faqSchema.mainEntity.map((q, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{q.name}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{q.acceptedAnswer.text}</p>
            </details>
          ))}

          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '2.5rem 0 1rem' }}>Related guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.8 }}>
            <li>→ <Link href="/deck-builder-ashburn-va" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Ashburn deck builder</Link></li>
            <li>→ <Link href="/rooftop-deck-builder-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Rooftop deck builder NoVA</Link></li>
            <li>→ <Link href="/loudoun-county-hoa-deck-rules" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun County HOA deck rules</Link></li>
            <li>→ <Link href="/deck-permit-loudoun-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun County permit guide</Link></li>
            <li>→ <Link href="/cable-railing-for-decks-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Cable railing for decks</Link></li>
          </ul>
        </div>
      </article>
      <SimpleCTA title="One Loudoun deck project? We file every approval in parallel." buttonText="Get Free Estimate" link="/contact" />
      <NamedAuthor context="One Loudoun (Ashburn) and Loudoun County" lastUpdated="2026-05-27" />
      <ContactHome />
    </>
  );
}
