'use client';
import React from 'react';
import Link from 'next/link';
import styles from './ServicesHeader.module.css';
import CallLink from '@/components/CallLink';
import PaidSearchLeadForm from '@/components/PaidSearchLeadForm';

export default function ServicesHeader({
  subtext = "What We DO",
  title = "Deck & Outdoor Living Services",
  description = "Loudoun Decks provides residential deck and outdoor living services for homeowners in Loudoun County, Fairfax County, and Prince William County. Our focus is on planning and building outdoor spaces that fit each home and lifestyle.",
  estimateHref = "/get-estimate",
  showQuickForm = false,
  quickFormService = 'Composite Decks',
  quickFormLocation = 'paid_search_hero',
  quickFormHeading = 'Request a written estimate',
  pageContext,
  leadSource,
}) {
  const quickFormId = `${quickFormLocation}-form`;

  return (
    <section className={`${styles.headerSection} ${showQuickForm ? styles.withQuickForm : ''}`}>
      <div className={`${styles.container} ${showQuickForm ? styles.heroGrid : ''}`}>
        <div className={styles.heroCopy}>
          <div className={styles.subtextWrapper}>
            <span className={styles.subtext}>{subtext}</span>
            <span className={styles.line}></span>
          </div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          <div className={styles.ctaWrapper}>
            <Link
              href={showQuickForm ? `#${quickFormId}` : estimateHref}
              className={styles.ctaPrimary}
              aria-label="Get a free estimate"
            >
              Get a Free Estimate
            </Link>
            <CallLink
              className={styles.ctaSecondary}
              aria-label="Call Loudoun Decks"
            >
              Call (571) 655-7207
            </CallLink>
          </div>
          <p className={styles.trustText}>Free estimate &bull; No obligation &bull; Permit-ready planning</p>
        </div>
        {showQuickForm && (
          <PaidSearchLeadForm
            formId={quickFormId}
            service={quickFormService}
            formLocation={quickFormLocation}
            heading={quickFormHeading}
            pageContext={pageContext}
            leadSource={leadSource}
          />
        )}
      </div>
    </section>
  );
}
