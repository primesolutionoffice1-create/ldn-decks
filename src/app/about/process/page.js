import React from 'react';
import ProcessHeader from '@/components/ProcessHeader';
import ProcessSteps from '@/components/ProcessSteps';
import ProcessMatters from '@/components/ProcessMatters';
import ProcessFAQ from '@/components/ProcessFAQ';
import ServicesFooterInfo from '@/components/ServicesFooterInfo';
import ServicesCallToAction from '@/components/ServicesCallToAction';
import SimpleCTA from '@/components/SimpleCTA';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';

export const metadata = buildMetadata({
  path: "/about/process",
  title: "Our Deck Building Process | 6 Steps to Your Dream Deck",
  description: "From free consultation to final walkthrough — our 6-step deck building process in Northern Virginia. Design, permits, HOA, construction, and warranty.",
  image: "/social/deck-building-process-social.png",
});

export default function ProcessPage() {
  return (
    <main>
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/about/process" name="Our Deck Building Process | 6 Steps to Your Dream Deck" description="From free consultation to final walkthrough — our 6-step deck building process in Northern Virginia. Design, permits, HOA, construction, and warranty." speakable />
      <ProcessHeader />
      <ProcessSteps />

      <section aria-labelledby="process-by-numbers" style={{ maxWidth: 1000, margin: '0 auto', padding: '48px 20px 0' }}>
        <h2 id="process-by-numbers" style={{ fontSize: '1.7rem', fontWeight: 800, marginBottom: 14 }}>
          The process, by the numbers
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 14 }}>
          {[
            'End-to-end timeline: typically 6–10 weeks from signed contract to final inspection — 2–4 weeks of permitting, then 1–2 weeks of construction for a standard deck.',
            'Permit review windows: Loudoun County ~2–4 weeks (LOLA), Fairfax County ~3–5 weeks (FIDO), Prince William in a similar window.',
            'Footings are poured to Virginia\u2019s 30-inch frost depth on undisturbed soil — the detail that keeps frames from heaving in January.',
            'Joists are sized to the decking manufacturer\u2019s deflection tables — composite boards often need tighter spacing than the generic wood chart.',
            'HOA-governed communities (Brambleton, Broadlands, Ashburn Village, South Riding and more): the ARC package can run concurrently with the county permit.',
            'Every project closes with a walkthrough, care guidance and written labor warranty terms — Virginia DPOR Class A License #2705191673.',
          ].map((fact) => (
            <article key={fact} style={{ border: '1px solid #e5e7eb', borderRadius: 8, background: '#fafafa', padding: 18 }}>
              <p style={{ margin: 0, color: '#444', lineHeight: 1.6 }}>{fact}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="process-inspections" style={{ maxWidth: 1000, margin: '0 auto', padding: '40px 20px 8px' }}>
        <h2 id="process-inspections" style={{ fontSize: '1.7rem', fontWeight: 800, marginBottom: 14 }}>
          What the county inspects, in order
        </h2>
        <ol style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14, listStyle: 'none', padding: 0, margin: 0 }}>
          {[
            'Step 1: Layout and footing inspection — hole depth and bearing soil verified before any concrete is poured.',
            'Step 2: Framing inspection — ledger attachment, joist sizing and hardware checked against the approved plan.',
            'Step 3: Railing and guard inspection — heights, baluster spacing and stair geometry to IRC residential code.',
            'Step 4: Final review — the completed structure signed off; we hand over documentation and warranty terms.',
          ].map((step) => (
            <li key={step} style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #B58E3B', borderRadius: 8, padding: 18, background: '#fff', color: '#444', lineHeight: 1.6 }}>
              {step}
            </li>
          ))}
        </ol>
      </section>

      <ServicesFooterInfo />
      <ServicesCallToAction />
      <ProcessMatters />
      <ProcessFAQ />
      <SimpleCTA title="Start your project" buttonText="Request a Written Estimate" link="/get-estimate" />
    </main>
  );
}
