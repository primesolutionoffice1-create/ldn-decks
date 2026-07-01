"use client";

import { useState } from 'react';
import { useLeadSubmit } from '@/hooks/useLeadSubmit';
import CallLink, { BUSINESS_PHONE_DISPLAY } from '@/components/CallLink';
import styles from './PaidSearchLeadForm.module.css';

export default function PaidSearchLeadForm({
  service = 'Composite Decks',
  formLocation = 'paid_search_above_fold',
  heading = 'Same-week estimate openings are available',
  pageContext,
  leadSource = 'Google Search',
}) {
  const [status, setStatus] = useState(null);
  const submit = useLeadSubmit({ formType: 'paid_search', pageContext });

  async function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent?.stopImmediatePropagation?.();

    setStatus('submitting');
    const result = await submit(event.currentTarget);
    if (!result.success) {
      setStatus('error');
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      data-form-location={formLocation}
      aria-label="Quick paid search estimate form"
    >
      <input
        type="text"
        name="ldn_extra_field"
        tabIndex={-1}
        autoComplete="new-password"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
      />
      <input type="hidden" name="state" value="VA" />
      <input type="hidden" name="service" value={service} />
      <input type="hidden" name="leadSource" value={leadSource} />
      <input type="hidden" name="page_type" value={pageContext?.pageType || 'paid_search_landing_page'} />
      <input type="hidden" name="page_city" value={pageContext?.city || ''} />
      <input type="hidden" name="page_county" value={pageContext?.county || ''} />
      <input type="hidden" name="message" value={`Paid search quick estimate request for ${service}.`} />

      <div className={styles.header}>
        <p className={styles.eyebrow}>Fastest response today</p>
        <p className={styles.heading}>{heading}</p>
        <p className={styles.subheading}>
          We will prioritize homeowners ready for a deck replacement or composite deck estimate.
        </p>
      </div>
      {status === 'error' && (
        <p className={styles.error}>The form did not send. Please call us or try again.</p>
      )}
      <CallLink className={styles.callButton}>
        Call {BUSINESS_PHONE_DISPLAY}
      </CallLink>
      <div className={styles.grid}>
        <input className={styles.field} name="name" required placeholder="Name" autoComplete="name" />
        <input className={styles.field} name="phone" required type="tel" placeholder="Phone" autoComplete="tel" />
        <input className={styles.field} name="city" required placeholder="City" autoComplete="address-level2" />
        <input className={styles.field} name="email" type="email" placeholder="Email (optional)" autoComplete="email" />
        <select className={styles.select} name="timeline" required defaultValue="" aria-label="Project timeline">
          <option value="" disabled>How soon?</option>
          <option value="Immediately">Ready now</option>
          <option value="Same-week estimate">Same-week estimate</option>
          <option value="1-3 Months">1-3 months</option>
          <option value="3-6 Months">3-6 months</option>
          <option value="Just Exploring">Just exploring</option>
        </select>
        <select className={styles.select} name="budgetRange" defaultValue="" aria-label="Approximate budget">
          <option value="">Budget range (optional)</option>
          <option value="$15K-$25K">$15K-$25K</option>
          <option value="$25K-$50K">$25K-$50K</option>
          <option value="$50K-$100K">$50K-$100K</option>
          <option value="$100K+">$100K+</option>
          <option value="Not sure, full project">Not sure, full project</option>
        </select>
        <select className={styles.select} name="homeownerStatus" defaultValue="" aria-label="Homeowner status">
          <option value="">Decision maker? (optional)</option>
          <option value="Homeowner decision maker">Homeowner / decision maker</option>
          <option value="Homeowner researching with partner">Homeowner researching with partner</option>
          <option value="Property manager or authorized representative">Authorized representative</option>
          <option value="Not the homeowner">Not the homeowner</option>
        </select>
        <select className={styles.select} name="materialInterest" defaultValue="" aria-label="Material interest">
          <option value="">Material (optional)</option>
          <option value="Trex">Trex</option>
          <option value="TimberTech/AZEK">TimberTech/AZEK</option>
          <option value="Composite">Composite</option>
          <option value="Not Sure">Not sure</option>
        </select>
        <button className={`${styles.submit} ${styles.full}`} type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending...' : 'Request Same-Week Estimate'}
        </button>
      </div>
      <p className={styles.note}>
        Calls are the quickest path today. The short form still preserves paid-ad attribution for follow-up.
      </p>
    </form>
  );
}
