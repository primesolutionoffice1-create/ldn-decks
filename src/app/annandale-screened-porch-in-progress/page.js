import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CallLink from '@/components/CallLink';
import WebPageSchema from '@/components/WebPageSchema';
import JsonLd from '@/components/JsonLd';
import { BUSINESS, ORG_ID } from '@/lib/business';
import { buildMetadata } from '@/lib/seo';

const PATH = '/annandale-screened-porch-in-progress';
const TITLE = 'Annandale Porch in Progress | Loudoun Decks';
const DESCRIPTION = 'Follow real construction progress on a Loudoun Decks screened porch in Annandale, VA, from framing to wood ceiling details. Plan your own porch with a written estimate.';
const ASSETS = '/images/projects/annandale-screened-porch';
const S = {
  section: { maxWidth: 1040, margin: '0 auto', padding: '2.5rem 1.5rem' },
  p: { lineHeight: 1.8, marginBottom: '1rem', maxWidth: 820 },
  h2: { fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: 1.25, marginBottom: '1rem' },
  image: { width: '100%', height: 'auto', display: 'block', borderRadius: 12 },
  caption: { fontSize: '0.95rem', lineHeight: 1.7, color: '#555', marginTop: '0.75rem' },
  link: { color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'underline' },
  button: { display: 'inline-block', padding: '0.9rem 1.3rem', borderRadius: 7, fontWeight: 700, background: 'var(--color-primary)', color: '#fff', textDecoration: 'none' },
};

export const metadata = buildMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  image: `${ASSETS}/exterior-in-progress.png`,
});

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  '@id': `${BUSINESS.url}${PATH}#progress-video`,
  name: 'Annandale Screened Porch: Construction Progress | Loudoun Decks',
  description: 'A captioned, 20-second update showing the real Loudoun Decks crew, framing and wood ceiling details on a screened porch under construction in Annandale, Virginia. Project in progress, not a completed porch reveal.',
  thumbnailUrl: `${BUSINESS.url}${ASSETS}/exterior-in-progress.png`,
  contentUrl: `${BUSINESS.url}/videos/projects/annandale-screened-porch-progress.mp4`,
  uploadDate: '2026-11-09',
  duration: 'PT20S',
  publisher: { '@id': ORG_ID },
  inLanguage: 'en-US',
  isFamilyFriendly: true,
};

export default function AnnandalePorchProgressPage() {
  return (
    <main>
      <JsonLd data={videoSchema} />
      <WebPageSchema url={`https://ldndecks.com${PATH}`} name={TITLE} description={DESCRIPTION} datePublished="2026-11-09" dateModified="2026-11-09" />
      <header style={{ background: '#0b202c', color: '#fff' }}>
        <div style={S.section}>
          <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', color: '#f4b58f' }}>Annandale, Virginia · Construction update</p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)', maxWidth: 850, lineHeight: 1.12, margin: '1rem 0' }}>A screened porch taking shape in Annandale</h1>
          <p style={S.p}>See the real Loudoun Decks crew and construction stages behind this porch project, from framing to wood ceiling details.</p>
          <p style={{ ...S.p, fontWeight: 700 }}>Project in progress as of November 9, 2026. These are construction photos, not a finished-porch reveal.</p>
          <Link href="/get-estimate" style={S.button}>Request a written porch estimate</Link>
          <p style={{ marginTop: '1rem' }}>Prefer to talk through your project? <CallLink style={{ color: '#fff', textDecoration: 'underline' }} /></p>
        </div>
      </header>

      <section style={S.section} aria-labelledby="annandale-progress">
        <h2 id="annandale-progress" style={S.h2}>A closer look at the work in progress</h2>
        <p style={S.p}>This Annandale project shows how a porch takes shape in stages. Earlier images show the exposed framing. Later images show the wood ceiling installed while other parts of the project remain unfinished. The photographs record progress; they do not represent a completed screened enclosure.</p>
        <figure style={{ margin: 0 }}>
          <Image src={`${ASSETS}/wood-ceiling-in-progress.png`} alt="Wood ceiling and exposed posts on a Loudoun Decks porch under construction in Annandale" width={1024} height={768} sizes="(max-width: 1040px) 100vw, 992px" priority style={S.image} />
          <figcaption style={S.caption}>Wood ceiling details during construction. Other porch work remains in progress.</figcaption>
        </figure>
      </section>

      <section style={{ ...S.section, paddingTop: 0 }} aria-labelledby="annandale-video">
        <h2 id="annandale-video" style={S.h2}>Watch the 20-second progress update</h2>
        <p style={S.p}>A short, captioned look at the same project and crew. The earlier framing stage is labeled in the video. No sound is needed to follow the update.</p>
        <video controls playsInline preload="none" poster={`${ASSETS}/exterior-in-progress.png`} aria-label="Annandale screened porch construction progress, captioned video" style={{ width: '100%', maxWidth: 440, maxHeight: '75vh', display: 'block', background: '#0b202c', borderRadius: 12 }}>
          <source src="/videos/projects/annandale-screened-porch-progress.mp4" type="video/mp4" />
          <p><a href="/videos/projects/annandale-screened-porch-progress.mp4">Watch the Annandale porch progress video</a>.</p>
        </video>
      </section>

      <section style={{ ...S.section, paddingTop: 0 }} aria-labelledby="annandale-crew">
        <h2 id="annandale-crew" style={S.h2}>The people and the project behind the photos</h2>
        <p style={S.p}>These images show our Loudoun Decks crew at this Annandale job, rather than a stock-photo project. Materials, tools and unfinished areas remain visible because construction is still underway.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
          <figure style={{ margin: 0 }}>
            <Image src={`${ASSETS}/crew-at-work.png`} alt="A Loudoun Decks crew member on the porch platform during construction in Annandale" width={768} height={1024} sizes="(max-width: 650px) 100vw, 480px" style={S.image} />
            <figcaption style={S.caption}>A crew member at the project during construction.</figcaption>
          </figure>
          <figure style={{ margin: 0 }}>
            <Image src={`${ASSETS}/exterior-in-progress.png`} alt="Exterior view of the Annandale porch framing and ceiling in progress" width={1024} height={768} sizes="(max-width: 650px) 100vw, 480px" style={S.image} />
            <figcaption style={S.caption}>An exterior view of the unfinished porch and wood ceiling.</figcaption>
          </figure>
        </div>
      </section>

      <section style={{ background: '#f5f5f1' }} aria-labelledby="annandale-planning">
        <div style={S.section}>
          <h2 id="annandale-planning" style={S.h2}>Thinking about a screened porch for your home?</h2>
          <p style={S.p}>Use this project as a conversation starter, not a fixed design or price for your property. How you want to use the porch, the existing structure, access and the proposed layout all belong in the estimate discussion.</p>
          <ul style={{ paddingLeft: '1.4rem', lineHeight: 1.8, maxWidth: 820 }}>
            <li>Bring a few photos of the house and the area where you are considering a porch.</li>
            <li>Share approximate dimensions and whether the work involves a new structure or an existing deck.</li>
            <li>Describe your priorities: dining, relaxing, shade, airflow, stairs or access to the yard.</li>
            <li>Bring any current HOA requirements and questions about the approvals your project may need.</li>
            <li>Ask the written estimate to identify materials, structural work, screens, doors, electrical work, exclusions and approval responsibilities.</li>
          </ul>
          <p style={S.p}>Explore our <Link href="/screened-porch-builder-northern-virginia" style={S.link}>screened porch services in Northern Virginia</Link> or read the <Link href="/screened-porch-cost-northern-virginia" style={S.link}>screened porch cost and scope guide</Link> before comparing proposals.</p>
          <Link href="/get-estimate" style={S.button}>Request a written screened-porch estimate</Link>
          <p style={{ ...S.p, marginTop: '1rem' }}>Tell us your project city and what you have in mind. <CallLink style={S.link} /></p>
        </div>
      </section>
    </main>
  );
}
