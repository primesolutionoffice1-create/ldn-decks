"use client";

import { useRef, useState } from 'react';
import { useLeadSubmit } from '@/hooks/useLeadSubmit';
import { createSubmissionGate } from '@/lib/submissionGate';
import CallLink, { BUSINESS_PHONE_DISPLAY } from '@/components/CallLink';
import styles from './PaidSearchLeadForm.module.css';

export default function PaidSearchLeadForm({
  formId,
  service = 'Composite Decks',
  formLocation = 'paid_search_above_fold',
  heading = 'Request a written deck estimate',
  pageContext,
  leadSource = '',
}) {
  const [status, setStatus] = useState(null);
  const submissionGateRef = useRef(createSubmissionGate());
  const submit = useLeadSubmit({ formType: 'paid_search', pageContext });

  async function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent?.stopImmediatePropagation?.();
    if (status === 'success') return;

    setStatus('submitting');
    try {
      const attempt = await submissionGateRef.current.run(() => submit(event.currentTarget));
      if (attempt.skipped) return;
      const result = attempt.result;
      if (result.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Paid search form submission failed:', error?.message || error);
      setStatus('error');
    }
  }

  return (
    <form
      id={formId}
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
      <input type="hidden" name="message" value={`Paid search written estimate request for ${service}.`} />

      <div className={styles.header}>
        <p className={styles.eyebrow}>Priority homeowner review</p>
        <p className={styles.heading}>{heading}</p>
        <p className={styles.subheading}>
          We prioritize homeowners ready to discuss scope, budget, and the right deck solution.
        </p>
      </div>
      {status === 'error' && (
        <p className={styles.error} role="alert">The form did not send. Please call us or try again.</p>
      )}
      {status === 'success' && (
        <p className={styles.success} role="status">Message received. We will review your project details and follow up shortly.</p>
      )}
      <CallLink className={styles.callButton}>
        Call {BUSINESS_PHONE_DISPLAY}
      </CallLink>
      <div className={styles.grid}>
        <label className={styles.visuallyHidden} htmlFor={`${formLocation}-name`}>Name</label>
        <input id={`${formLocation}-name`} className={styles.field} name="name" required placeholder="Name" autoComplete="name" />
        <label className={styles.visuallyHidden} htmlFor={`${formLocation}-phone`}>Phone</label>
        <input id={`${formLocation}-phone`} className={styles.field} name="phone" required type="tel" placeholder="Phone" autoComplete="tel" />
        <label className={styles.visuallyHidden} htmlFor={`${formLocation}-city`}>Project city</label>
        <input id={`${formLocation}-city`} className={styles.field} name="city" required placeholder="City" autoComplete="address-level2" />
        <label className={styles.visuallyHidden} htmlFor={`${formLocation}-email`}>Email (optional)</label>
        <input id={`${formLocation}-email`} className={styles.field} name="email" type="email" placeholder="Email (optional)" autoComplete="email" />
        <select className={styles.select} name="timeline" required defaultValue="" aria-label="Project timeline">
          <option value="" disabled>How soon?</option>
          <option value="Immediately">Ready now</option>
          <option value="Written estimate this week">Written estimate this week</option>
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
          <option value="Fiberon">Fiberon</option>
          <option value="Composite">Composite</option>
          <option value="Not Sure">Not sure</option>
        </select>
        <button className={`${styles.submit} ${styles.full}`} type="submit" disabled={status === 'submitting' || status === 'success'}>
          {status === 'success' ? 'Message Received' : status === 'submitting' ? 'Sending...' : 'Request Written Estimate'}
        </button>
        <p className={`${styles.note} ${styles.full}`}>
          By submitting, you ask us to contact you about this project. See our{' '}
          <a href="/privacy-policy">Privacy Policy</a>. Optional advertising consent is managed separately.
        </p>
      </div>
      <p className={styles.note}>
        Calls are the quickest path today. The short form helps us route your project details before follow-up.
      </p>
    </form>
  );
}
