import Image from 'next/image';
import Link from 'next/link';
import CallLink from '@/components/CallLink';
import ContactForm from '@/components/ContactForm';
import ServiceSchema from '@/components/ServiceSchema';
import WebPageSchema from '@/components/WebPageSchema';
import { buildMetadata } from '@/lib/seo';
import styles from './page.module.css';

const path = '/services/deck-post-replacement';
const media = '/images/deck-post-replacement';
const description = 'Deck support post replacement in Northern Virginia. See real project work, pricing for one to five eligible posts, and request a site-specific written estimate.';
export const metadata = buildMetadata({
  path,
  title: 'Deck Post Replacement in Northern VA | Loudoun Decks',
  description,
  image: `${media}/completed.webp`,
});
const pricing = [
  { posts: 1, rate: '$2,500', total: '$2,500' },
  { posts: 2, rate: '$2,250', total: '$4,500' },
  { posts: 3, rate: '$1,900', total: '$5,700' },
  { posts: 4, rate: '$1,700', total: '$6,800' },
  { posts: 5, rate: '$1,500', total: '$7,500' },
];
const gallery = [
  ['work-support', 'Supporting the work area', 'Support members beneath an existing deck during the work.'],
  ['work-opening', 'Opening the work area', 'Opening the existing surface to access the post location.'],
  ['work-excavation', 'Preparing the post location', 'An excavated location before forming and concrete work.'],
  ['forming', 'Forming the footing', 'A tubular form positioned during a Loudoun Decks repair.'],
  ['concrete', 'Concrete work', 'Concrete placement at a documented project stage.'],
  ['connection', 'Post connection detail', 'The upper connection shown in our project documentation.'],
];

export default function DeckPostReplacementPage() {
  return (
    <main className={styles.page}>
      <WebPageSchema url={`https://ldndecks.com${path}`} name="Deck Post Replacement in Northern Virginia" description={description} datePublished="2026-11-09" dateModified="2026-11-09" />
      <ServiceSchema name="Deck Support Post Replacement" serviceType="Deck post replacement" description={description} url={`https://ldndecks.com${path}`} />
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/services/deck-repair">Deck repair</Link><span aria-hidden="true"> / </span><span>Post replacement</span></nav>
          <p className={styles.eyebrow}>Loudoun Decks · Northern Virginia</p>
          <h1>Deck support post replacement.</h1>
          <p className={styles.intro}>A deteriorated deck post deserves more than a surface fix. Start with an assessment, understand the repair, and get a clear written scope.</p>
          <div className={styles.offer}><strong>$2,500</strong><span>for one eligible post location</span></div>
          <p className={styles.qualifier}>Project eligibility and the included work are confirmed after assessment. Rates for two to five posts are shown below.</p>
          <div className={styles.actions}><a className={styles.primary} href="#request-assessment">Request an assessment</a><CallLink className={styles.phone}>Call (571) 655-7207</CallLink></div>
          <a className={styles.textLink} href="#pricing">See the per-post pricing →</a>
        </div>
        <figure className={styles.heroImage}><Image src={`${media}/completed.webp`} alt="Loudoun Decks replacement wood post with metal base on a concrete support" width={675} height={1200} priority sizes="(max-width: 760px) 100vw, 45vw" /><figcaption>Actual Loudoun Decks project · completed post and base detail</figcaption></figure>
      </section>
      <section id="pricing" className={styles.section} aria-labelledby="pricing-title">
        <p className={styles.eyebrow}>A clear starting point</p><h2 id="pricing-title">One project. Pricing by post count.</h2>
        <p className={styles.lede}>These rates apply to eligible post-replacement projects after the site assessment and written scope are confirmed.</p>
        <div className={styles.tableWrap}><table className={styles.pricing}><caption>Deck post replacement package pricing</caption><thead><tr><th scope="col">Eligible posts</th><th scope="col">Price per post</th><th scope="col">Project total</th></tr></thead><tbody>{pricing.map(row => <tr key={row.posts}><th scope="row">{row.posts} {row.posts === 1 ? 'post' : 'posts'}</th><td>{row.rate}</td><td><strong>{row.total}</strong></td></tr>)}</tbody></table></div>
        <p className={styles.qualifier}>Footing requirements, access, permits or engineering, additional damage and surface restoration are reviewed before the written quote is confirmed. Ask for a separate quote for six or more posts.</p>
      </section>
      <section className={`${styles.section} ${styles.scope}`} aria-labelledby="scope-title">
        <div><p className={styles.eyebrow}>More than a piece of lumber</p><h2 id="scope-title">The work beneath the post matters.</h2></div>
        <div><p>The proposed repair scope covers supporting the work area, removing the affected post, excavation, a tubular form and concrete footing, and installation of the replacement post with a galvanized base and anchor.</p><p>The assessment determines whether this approach is suitable for your deck and identifies the required dimensions, connections and any additional work. The final written estimate confirms the materials, included work and exclusions for your project.</p><p>No single footing depth or connection detail is right for every deck. Existing framing, loads, ground conditions and applicable permit or design requirements must be considered.</p></div>
      </section>
      <section className={styles.section} aria-labelledby="gallery-title"><p className={styles.eyebrow}>Real project documentation</p><h2 id="gallery-title">See the work, stage by stage.</h2><p className={styles.lede}>Original Loudoun Decks photographs show access, preparation, concrete work and connection details. They illustrate our work; the assessment establishes what your own deck needs.</p><div className={styles.gallery}>{gallery.map(([file, title, alt]) => <figure key={file}><div className={styles.galleryImage}><Image src={`${media}/${file}.webp`} alt={alt} fill sizes="(max-width: 600px) 90vw, (max-width: 900px) 45vw, 30vw" /></div><figcaption>{title}</figcaption></figure>)}</div></section>
      <section className={styles.section} aria-labelledby="video-title"><p className={styles.eyebrow}>A closer look</p><h2 id="video-title">Actual project footage.</h2><p className={styles.lede}>Two short, silent clips show the replacement post, base and upper connection. Use the player controls to view each detail.</p><div className={styles.videos}>{[1, 2].map(number => <figure key={number}><video controls muted playsInline preload="metadata" poster={`${media}/${number === 1 ? 'completed' : 'connection'}.webp`} aria-label={`Loudoun Decks completed post detail, silent clip ${number}`}><source src={`/videos/deck-post-replacement/completed-post-${number}-web.mp4`} type="video/mp4" />Your browser does not support embedded video. <a href={`/videos/deck-post-replacement/completed-post-${number}-web.mp4`}>Open the MP4 clip</a>.</video><figcaption>Real project detail · Clip {number} · No audio</figcaption></figure>)}</div></section>
      <section className={`${styles.section} ${styles.scope}`} aria-labelledby="mobilization-title"><div><p className={styles.eyebrow}>Understanding the price</p><h2 id="mobilization-title">Why does a single post cost $2,500?</h2></div><div><p>A single-post repair still requires mobilizing the crew and equipment for separate work stages. The first visit involves opening the work area, excavation and preparing the new concrete footing as specified.</p><p>The crew returns for the remaining installation and finishing work after the required concrete curing and any applicable inspections. The price reflects work at an eligible post location and the return visit—not just the piece of lumber.</p><p>Actual timing depends on the agreed scope, site conditions, concrete requirements and inspection scheduling. The pricing table shows the per-post rates for projects with two to five eligible locations.</p></div></section>
      <section id="request-assessment" className={styles.section} aria-labelledby="assessment-title"><p className={styles.eyebrow}>Tell us about your deck</p><h2 id="assessment-title">Request a deck post assessment.</h2><p className={styles.lede}>Include your project city, approximate deck height, number of posts and the condition you have noticed in the project description. We will review the request and discuss the next step with you.</p><div className={styles.form}><ContactForm hideInfoCol noPadding defaultService="Deck Post Replacement" /></div><p className={styles.qualifier}>If the deck appears unstable, keep people off it and arrange an assessment. Do not cut, push or remove a suspect post to test it.</p><p className={styles.related}>Need a broader repair plan? <Link href="/services/deck-repair">Explore structural deck repair</Link> or <Link href="/services/deck-replacement">review full deck replacement</Link>.</p></section>
    </main>
  );
}
