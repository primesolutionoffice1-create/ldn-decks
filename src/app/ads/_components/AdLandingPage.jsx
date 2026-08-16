import Image from 'next/image';
import Link from 'next/link';
import CallLink, { BUSINESS_PHONE_DISPLAY } from '@/components/CallLink';
import PaidSearchLeadForm from '@/components/PaidSearchLeadForm';
import JsonLd from '@/components/JsonLd';
import { BUSINESS, ORG_ID } from '@/lib/business';
import styles from './AdLandingPage.module.css';

const counties = ['Loudoun County', 'Fairfax County', 'Prince William County'];

export default function AdLandingPage({
  page,
}) {
  const pageUrl = `${BUSINESS.url}${page.path}`;
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: page.schemaName,
    description: page.description,
    provider: { '@id': ORG_ID },
    areaServed: counties.map((name) => ({
      '@type': 'AdministrativeArea',
      name: `${name}, VA`,
    })),
    serviceType: page.schemaName,
    url: pageUrl,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>{page.eyebrow}</p>
              <h1>{page.h1}</h1>
              <p className={styles.lede}>{page.lede}</p>

              {page.priceQualifier ? (
                <div className={styles.priceAnchor}>
                  <strong>{page.priceQualifier.label}</strong>
                  <span>{page.priceQualifier.text}</span>
                </div>
              ) : null}

              <div className={styles.ctaRow}>
                <CallLink
                  className={styles.primaryCta}
                  ctaLocation={`${page.slug}_hero_call`}
                  pageContext={{ pageType: 'paid_search_landing_page', service: page.formService }}
                >
                  Call {BUSINESS_PHONE_DISPLAY}
                </CallLink>
                <Link className={styles.secondaryCta} href="#estimate-form">
                  Get Free Estimate
                </Link>
              </div>

              <div className={styles.trustStrip} aria-label="Service area and project focus">
                {page.trustItems.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className={styles.formCard} id="estimate-form">
              <PaidSearchLeadForm
                service={page.formService}
                heading={page.formHeading}
                formLocation={`${page.slug}_above_fold`}
                pageContext={{
                  pageType: 'paid_search_landing_page',
                  city: 'Northern Virginia',
                  county: 'Loudoun, Fairfax, Prince William',
                  service: page.formService,
                }}
              />
            </div>
          </div>
        </section>

        <section className={styles.photoBand} aria-label={`${page.schemaName} project photo`}>
          <Image
            src={page.image.src}
            alt={page.image.alt}
            fill
            priority
            sizes="100vw"
            className={styles.photo}
          />
          <div className={styles.photoOverlay}>
            <p>{page.imageCaption}</p>
          </div>
        </section>

        {page.proofItems?.length ? (
          <section className={styles.proofSection}>
            <div className={styles.proofIntro}>
              <p className={styles.kicker}>Trust before the form</p>
              <h2>{page.proofTitle}</h2>
              <p>{page.proofText}</p>
            </div>
            <div className={styles.proofGrid}>
              {page.proofItems.map((item) => (
                <article className={styles.proofItem} key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  {item.href ? (
                    <Link className={styles.proofLink} href={item.href}>
                      Verify
                    </Link>
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>Why homeowners click</p>
            <h2>{page.benefitsTitle}</h2>
          </div>
          <div className={styles.cards}>
            {page.benefits.map((benefit) => (
              <article className={styles.card} key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.darkSection}>
          <div className={styles.darkInner}>
            <div>
              <p className={styles.kicker}>Built for Northern Virginia</p>
              <h2>{page.localTitle}</h2>
              <p>{page.localText}</p>
            </div>
            <div className={styles.countyGrid}>
              {counties.map((county) => (
                <div key={county}>
                  <strong>{county}</strong>
                  <span>{page.countyNotes[county]}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.split}>
            <div>
              <p className={styles.kicker}>What happens next</p>
              <h2>{page.processTitle}</h2>
              <div className={styles.steps}>
                {page.steps.map((step, index) => (
                  <div className={styles.step} key={step.title}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <aside className={styles.quoteBox}>
              <h2>Ready for a real estimate?</h2>
              <p>{page.quoteText}</p>
              <CallLink
                className={styles.primaryCta}
                ctaLocation={`${page.slug}_midpage_call`}
                pageContext={{ pageType: 'paid_search_landing_page', service: page.formService }}
              >
                Call {BUSINESS_PHONE_DISPLAY}
              </CallLink>
              <Link className={styles.textLink} href="#estimate-form">
                Or send the short form
              </Link>
            </aside>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>Quick questions</p>
            <h2>{page.faqTitle}</h2>
          </div>
          <div className={styles.faqGrid}>
            {page.faqs.map((faq) => (
              <details key={faq.q} className={styles.faq}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
