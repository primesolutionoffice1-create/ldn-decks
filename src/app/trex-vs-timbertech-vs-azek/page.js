import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import CallLink from '@/components/CallLink';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import AboveFoldCTA from '@/components/AboveFoldCTA';
import ArticleSchema from '@/components/ArticleSchema';

const pageTitle = 'Trex vs TimberTech vs AZEK: Northern Virginia Buyer Guide';
const pageDescription = 'Compare Trex, TimberTech Composite and Advanced PVC (AZEK) by product, site conditions, warranty documents and written installed scope.';
const modifiedDate = '2026-09-13';
const pageImage = '/images/img05.jpeg';

export const metadata = buildMetadata({
  path: '/trex-vs-timbertech-vs-azek',
  title: pageTitle,
  description: pageDescription,
  image: pageImage,
});

const sources = {
  trexProducts: { href: 'https://www.trex.com/products/decking/', label: 'Trex decking collections' },
  trexHeat: { href: 'https://www.trex.com/products/decking/lineage/', label: 'Trex Transcend Lineage product notes' },
  trexWarranty: { href: 'https://www.trex.com/customer-support/trex-owners/warranty/', label: 'Trex warranty documents' },
  trexInstallation: { href: 'https://www.trex.com/customer-support/trex-owners/downloads/', label: 'Trex installation and care resources' },
  timbertechComposite: { href: 'https://www.timbertech.com/products/decking-overview/composite/', label: 'TimberTech Composite decking' },
  timbertechPvc: { href: 'https://www.timbertech.com/products/decking-overview/pvc/', label: 'TimberTech Advanced PVC decking' },
  timbertechLandmark: { href: 'https://www.timbertech.com/product/azek-landmark-collection/', label: 'TimberTech Advanced PVC Landmark specifications' },
  timbertechWarranty: { href: 'https://www.timbertech.com/about-warranties/', label: 'TimberTech warranty documents' },
  timbertechInstallation: { href: 'https://www.timbertech.com/resources/technical-resources/', label: 'TimberTech installation and technical resources' },
  fiberon: { href: 'https://www.fiberondecking.com/products/concordia-decking', label: 'Fiberon Concordia specifications' },
  fiberonWarranty: { href: 'https://www.fiberondecking.com/pages/warranty', label: 'Fiberon warranty documents' },
};

const materialFaqs = [
  {
    id: 'best-composite-deck-brand-answer',
    q: 'Is Trex, TimberTech or AZEK best for Northern Virginia?',
    a: 'There is no single best choice for every deck. Compare the exact collection, color, installation requirements and written scope. In decking comparisons, AZEK refers to TimberTech Advanced PVC, not a separate competing decking brand. TimberTech also offers Composite decking, so a quote that only says TimberTech is incomplete.',
    sources: ['timbertechComposite', 'timbertechPvc'],
  },
  {
    id: 'azek-pvc-best-fit',
    q: 'What is the difference between TimberTech Composite and AZEK decking?',
    a: 'TimberTech Composite combines wood fibers and polymers. TimberTech Advanced PVC, also known as AZEK decking, uses a polymer formulation without wood fibers. That distinction identifies the material, not a guarantee of comfort, appearance or suitability for every site. Ask for the exact collection and its installation guide.',
    sources: ['timbertechComposite', 'timbertechLandmark'],
  },
  {
    id: 'decking-heat-comparison',
    q: 'Which decking stays coolest in the sun?',
    a: 'A brand name alone cannot answer that. Trex and TimberTech publish heat-related claims for particular products or colors, with qualifications. Both warn that decking can get hot in direct sun. Compare the exact samples, exposure and product notes, and consider shade; do not assume any board will stay comfortable for bare feet.',
    sources: ['trexHeat', 'timbertechLandmark'],
  },
  {
    id: 'decking-warranty-decision',
    q: 'Does a longer warranty make one decking option better?',
    a: 'Not by itself. Read the documents for the selected collection and purchase date. Separate product coverage, fade and stain coverage, replacement labor and the contractor\'s workmanship terms. Ask about exclusions, claim requirements and transfer conditions before treating a warranty headline as complete protection for the installed deck.',
    sources: ['trexWarranty', 'timbertechWarranty', 'fiberonWarranty'],
  },
  {
    id: 'decking-brand-cost-comparison',
    q: 'Is Trex cheaper than TimberTech or AZEK?',
    a: 'Do not assume a fixed price order from brand names. Ask for the same deck layout, railing, stairs and structural scope with each named board option. Separate the material substitution from any added framing or finishing work. Compare the complete installed totals before reviewing financing terms.',
    sources: [],
  },
  {
    id: 'decking-scratch-comparison',
    q: 'How should I compare scratch resistance?',
    a: 'Ask for evidence for the exact product rather than a generic good, better or best rating. Review the care guide and warranty exclusions for furniture, cleaning and surface damage. Discuss how individual boards could be replaced. This guide does not assign scratch ratings because it contains no controlled product testing.',
    sources: ['trexInstallation', 'timbertechInstallation'],
  },
  {
    id: 'mixing-deck-components',
    q: 'Can I combine decking and railing from different brands?',
    a: 'Ask the contractor to verify the proposed combination against the applicable installation instructions and local requirements. The proposal should identify the boards, fasteners, railing and supporting connections. A compatible color does not establish that parts can be interchanged or that one warranty covers the whole assembly.',
    sources: ['trexInstallation', 'timbertechInstallation'],
  },
  {
    id: 'fiberon-comparison',
    q: 'Where does Fiberon fit in this comparison?',
    a: 'Fiberon Concordia is another wood-plastic composite option. Compare its exact collection and profile with the other quoted products, then review samples, installation details and current warranty documents. Its inclusion here is not a price ranking or a promise that a particular color is locally stocked.',
    sources: ['fiberon', 'fiberonWarranty'],
  },
];

// Use the same questions and answers in the page and its existing FAQ schema.
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: materialFaqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const S = {
  h2: { fontSize: '1.8rem', fontWeight: 700, margin: '2.5rem 0 1rem' },
  h3: { fontSize: '1.2rem', fontWeight: 600, margin: '1.5rem 0 0.5rem' },
  p: { marginBottom: '1rem', lineHeight: 1.7 },
  th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd', verticalAlign: 'top' },
  td: { padding: '0.75rem', borderBottom: '1px solid #eee', verticalAlign: 'top', lineHeight: 1.6 },
  link: { color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'underline' },
};

function SourceLink({ source }) {
  return <a href={source.href} target="_blank" rel="noopener noreferrer" style={S.link}>{source.label}</a>;
}

export default function TrexVsTimberTechPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema dateModified={modifiedDate} url="https://ldndecks.com/trex-vs-timbertech-vs-azek" name={pageTitle} description={pageDescription} speakable />
      <ArticleSchema
        title={pageTitle}
        description={pageDescription}
        path="/trex-vs-timbertech-vs-azek"
        image={pageImage}
        imageWidth={1200}
        imageHeight={1600}
        datePublished="2026-05-01"
        dateModified={modifiedDate}
        speakable={['[data-speakable]', '#material-side-by-side-comparison', '#material-recommendation-northern-virginia', '#material-related-estimate-guides']}
      />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', overflowWrap: 'anywhere' }}>Trex vs TimberTech vs AZEK</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>A Northern Virginia buying guide to Trex composite, TimberTech Composite and TimberTech Advanced PVC (AZEK), with Fiberon as another option to compare.</p>
        </div>
      </section>

      <AboveFoldCTA
        headline="Choosing decking? Compare the exact materials and request a written installed estimate."
        estimateLabel="Compare Materials & Get Estimate"
      />

      <section data-speakable="true" style={{ background: '#f7fbff', padding: '1.5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Compare product lines, not brand rankings</h2>
          <p style={S.p}><strong>AZEK decking is the TimberTech Advanced PVC family, not a separate competitor to TimberTech.</strong> Start with the exact collection and color. Then compare the installation requirements, warranty documents and full project scope. There is no universal winner for every Northern Virginia deck.</p>
          <p style={S.p}>Manufacturer references: <SourceLink source={sources.timbertechComposite} /> and <SourceLink source={sources.timbertechPvc} />.</p>
          <CallLink style={S.link}>Discuss material options</CallLink>
        </div>
      </section>

      <article style={{ padding: '2.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ color: '#555', lineHeight: 1.7 }}>
            By <Link href="/team" style={S.link}>Nick (Nicolae Zugrav), Loudoun Decks</Link>. Published <time dateTime="2026-05-01">May 1, 2026</time>. Updated <time dateTime={modifiedDate}>September 13, 2026</time>.
          </p>
          <p style={S.p}>This is a contractor's document-based buying guide, not a laboratory comparison or a record of product tests. Manufacturer links were checked on September 13, 2026. Written estimates establish project pricing; this page does not assign installed prices or performance scores to brands.</p>

          <h2 id="material-side-by-side-comparison" style={S.h2}>What Are You Actually Comparing?</h2>
          <div role="region" aria-label="Decking product families" tabIndex={0} style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <caption style={{ textAlign: 'left', paddingBottom: '0.75rem' }}>Product identity and the information to request with each quote</caption>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  {['Option', 'Material distinction', 'Ask the contractor to specify'].map((heading) => <th key={heading} scope="col" style={S.th}>{heading}</th>)}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" style={S.td}><SourceLink source={sources.trexProducts} /></th>
                  <td style={S.td}>Trex composite boards combine reclaimed wood and plastic.</td>
                  <td style={S.td}>Collection, color and profile. Do not apply a Transcend Lineage feature to a different Trex collection without its own documentation.</td>
                </tr>
                <tr>
                  <th scope="row" style={S.td}><SourceLink source={sources.timbertechComposite} /></th>
                  <td style={S.td}>Wood fibers and polymers with a protective cap.</td>
                  <td style={S.td}>The current collection name, not just a broad TimberTech or older PRO/EDGE label.</td>
                </tr>
                <tr>
                  <th scope="row" style={S.td}><SourceLink source={sources.timbertechPvc} /> (AZEK)</th>
                  <td style={S.td}>Capped polymer decking. The <SourceLink source={sources.timbertechLandmark} /> describe a formulation without wood fibers.</td>
                  <td style={S.td}>The Advanced PVC collection and compatible fastening system, not a generic PVC description.</td>
                </tr>
                <tr>
                  <th scope="row" style={S.td}><SourceLink source={sources.fiberon} /></th>
                  <td style={S.td}>A wood-plastic composite core with protective capping.</td>
                  <td style={S.td}>Collection, profile, color and availability, priced against the same project scope.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={S.p}>A product family identifies the material, but not every detail of the finished deck. Ask to see the exact board alongside the proposed railing and trim. Confirm the product name on the sample matches the written estimate, including whether the board has a grooved or square edge.</p>

          <SimpleCTA title="Ready to Compare Installed Options for Your Deck?" buttonText="Get a Material & Installation Estimate" link="/get-estimate" />

          <h2 style={S.h2}>How Should Sun, Moisture and Daily Use Affect the Choice?</h2>
          <h3 id="trex-best-fit" style={S.h3}>Sun exposure: read the product-specific qualification</h3>
          <p style={S.p}>Trex describes heat-mitigating technology for Transcend Lineage and warns that decking can still get hot in direct sun. TimberTech's Landmark notes carry a similar hot-surface warning. Neither source establishes a universal head-to-head winner for your deck. See <SourceLink source={sources.trexHeat} /> and <SourceLink source={sources.timbertechLandmark} />.</p>
          <p style={S.p}>Compare samples where the deck will be used, including afternoon exposure. That helps with color and finish selection but is not a controlled heat test. Discuss shade and footwear instead of relying on a promise of barefoot comfort. If a quote advertises a temperature reduction, ask which colors, baseline product and test conditions support it.</p>

          <h3 id="timbertech-best-fit" style={S.h3}>Moisture and maintenance: review the complete assembly</h3>
          <p style={S.p}>TimberTech distinguishes Composite from Advanced PVC by their material composition. That does not remove the need to review drainage, supporting structure and installation details. Do not treat a moisture-resistant board as proof that water cannot affect the framing below it.</p>
          <p style={S.p}>Ask which care guide applies to the proposed collection, including cleaning products, furniture protection and treatment of spills. Low maintenance does not mean no maintenance. Keep the relevant <SourceLink source={sources.trexInstallation} /> or <SourceLink source={sources.timbertechInstallation} /> with the project documents.</p>

          <h2 style={S.h2}>What Should the Contractor Check Before Installing New Boards?</h2>
          <figure style={{ margin: '0 0 1.5rem' }}>
            <Image
              src={pageImage}
              alt="Exposed deck framing with narrow timber strips laid across the joists beside a house"
              width={1200}
              height={1600}
              style={{ display: 'block', width: '100%', maxWidth: 540, height: 'auto', margin: '0 auto' }}
              sizes="(max-width: 600px) 100vw, 540px"
              quality={70}
            />
            <figcaption style={{ marginTop: '0.75rem', color: '#555', lineHeight: 1.6 }}>Exposed framing during construction. This image does not identify a decking brand or demonstrate product performance.</figcaption>
          </figure>
          <p style={S.p}>On a resurfacing project, ask the contractor to record which parts of the frame can remain and which need further inspection. The written scope should address support spacing, board direction, stairs, fastening and any preparation required for the selected product. Use the manufacturer's current instructions, not one spacing rule assumed to fit every board.</p>
          <p style={S.p}>Request a clear approval point for concealed damage found after removal. New decking is not a substitute for structural repairs. Our <Link href="/deck-resurfacing-vs-replacement" style={S.link}>resurfacing versus replacement guide</Link> explains the decision to review before committing to a surface upgrade.</p>

          <h2 style={S.h2}>Compare Warranty Documents, Not Headline Years</h2>
          <p style={S.p}>Ask for the documents that apply to the named collection and purchase date. Treat manufacturer product coverage, fade and stain coverage, replacement labor and contractor workmanship as separate questions. A long product warranty is not a promise that every part of your installed deck will be replaced at no cost.</p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: 1.7 }}>
            <li>Which document covers the exact boards being supplied?</li>
            <li>What exclusions, cleaning obligations and claim evidence apply?</li>
            <li>Is replacement labor included for this installation, and on what conditions?</li>
            <li>What changes if the home is sold or a claim is made later in the coverage period?</li>
            <li>What does the contractor's separate workmanship agreement cover?</li>
          </ul>
          <p style={S.p}>Read the <SourceLink source={sources.trexWarranty} />, <SourceLink source={sources.timbertechWarranty} /> and, when quoted, <SourceLink source={sources.fiberonWarranty} />. Do not infer installer eligibility or labor coverage from a logo on an estimate.</p>

          <h2 id="material-recommendation-northern-virginia" style={S.h2}>Our Recommendation: Compare a Complete Written Scope</h2>
          <p style={S.p}>Shortlist products by the look you want, site conditions and documented installation requirements. Then ask for alternatives on the same project. Changing the railing, stairs or framing at the same time as the board selection makes it harder to see what the material upgrade actually changes.</p>
          <ol style={{ paddingLeft: '1.25rem', lineHeight: 1.7 }}>
            <li><strong>Name the product.</strong> Record collection, color, profile, board direction, fasteners and trim.</li>
            <li><strong>Hold the project constant.</strong> Use the same footprint, railing, stairs and demolition scope for each alternative.</li>
            <li><strong>Separate structural work.</strong> Identify retained framing, corrections and any conditions still awaiting inspection.</li>
            <li><strong>Expose uncertainty.</strong> List allowances and exclusions, plus who approves changes in price or scope.</li>
            <li><strong>Compare the total before the payment.</strong> Review financing against the same installed scope, not different projects with similar monthly payments.</li>
          </ol>
          <p style={S.p}>Use the <Link href="/composite-deck-cost-northern-virginia" style={S.link}>composite deck cost guide</Link> to organize the estimate conversation. For payment planning, keep the <Link href="/deck-payment-estimator" style={S.link}>deck payment estimator</Link> separate from the written construction proposal. Bring the competing scopes, approximate dimensions and photos when you <Link href="/get-estimate" style={S.link}>request an estimate</Link>.</p>

          <h2 style={S.h2}>Frequently Asked Questions</h2>
          {materialFaqs.map((faq) => (
            <details key={faq.id} id={faq.id} style={{ borderBottom: '1px solid #ddd', padding: '1.25rem 0' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
              {faq.sources.length > 0 && (
                <p style={{ lineHeight: 1.7, fontSize: '0.9rem' }}>
                  Manufacturer references:{' '}
                  {faq.sources.map((key, index) => (
                    <React.Fragment key={key}>
                      {index > 0 && '; '}
                      <SourceLink source={sources[key]} />
                    </React.Fragment>
                  ))}
                </p>
              )}
            </details>
          ))}

          <h2 id="material-related-estimate-guides" style={S.h2}>Related Guides and Estimate Planning</h2>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: 1.7 }}>
            {[
              ['/composite-deck-cost-northern-virginia', 'Composite deck cost and scope planning'],
              ['/trex-deck-cost-monthly-payment', 'Trex deck cost and monthly payment planning'],
              ['/timbertech-azek-deck-cost-northern-virginia', 'TimberTech and Advanced PVC cost planning'],
              ['/timbertech-decks', 'TimberTech deck planning'],
              ['/trex-decks', 'Trex deck planning'],
              ['/deck-materials-comparison-virginia', 'Deck materials comparison for Virginia homes'],
              ['/deck-payment-estimator', 'Deck payment estimator'],
              ['/get-estimate', 'Request a written composite deck estimate'],
              ['/composite-decks', 'Composite deck installation'],
              ['/composite-deck-vs-wood-deck-virginia', 'Composite versus wood decking'],
              ['/replace-wood-deck-with-composite-northern-virginia', 'Replace a wood deck with composite'],
              ['/wood-vs-composite-deck-long-term-cost', 'Wood and composite long-term cost considerations'],
              ['/does-a-deck-add-value-to-your-home', 'Deck projects and home value'],
              ['/blog/trex-vs-timbertech-fade-resistance-comparison', 'Trex and TimberTech fade-resistance considerations'],
              ['/blog/best-composite-deck-colors-full-sun-northern-virginia', 'Deck color selection for full sun'],
              ['/blog/why-composite-trex-decking-fades-sun-solutions', 'Composite decking and sun exposure'],
            ].map(([href, label]) => <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={S.link}>{label}</Link></li>)}
          </ul>
        </div>
      </article>

      <SimpleCTA title="Compare Materials for Your Deck" buttonText="Request a Material Consultation" link="/get-estimate" />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Brand Pages &amp; Services</h2>
        <ul style={{ paddingLeft: '1.25rem', lineHeight: 1.7 }}>
          <li><Link href="/trex-decks" style={S.link}>Trex decking options</Link></li>
          <li><Link href="/timbertech-decks" style={S.link}>TimberTech Composite and Advanced PVC decks</Link></li>
          <li><Link href="/composite-decks" style={S.link}>Composite deck installation</Link></li>
          <li><Link href="/composite-deck-cost-northern-virginia" style={S.link}>Composite deck cost guide</Link></li>
          <li><Link href="/services/new-decks" style={S.link}>Custom deck building services</Link></li>
          <li><Link href="/about" style={S.link}>About Loudoun Decks</Link></li>
        </ul>
      </section>
      <RelatedGuides currentPath="/trex-vs-timbertech-vs-azek" category="ai-retrieval" />
      <ContactHome />
    </>
  );
}
