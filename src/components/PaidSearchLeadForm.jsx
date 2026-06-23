"use client";

import { useState } from 'react';
import { useLeadSubmit } from '@/hooks/useLeadSubmit';
import styles from './PaidSearchLeadForm.module.css';

export default function PaidSearchLeadForm({
  service = 'Composite Decks',
  formLocation = 'paid_search_above_fold',
  heading = 'Get a written estimate path today',
}) {
  const [status, setStatus] = useState(null);
  const submit = useLeadSubmit({ formType: 'paid_search' });

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
      <input type="hidden" name="message" value={`Paid search quick estimate request for ${service}.`} />

      <p className={styles.heading}>{heading}</p>
      {status === 'error' && (
        <p className={styles.error}>The form did not send. Please call us or try again.</p>
      )}
      <div className={styles.grid}>
        <input className={styles.field} name="name" required placeholder="Name" autoComplete="name" />
        <input className={styles.field} name="phone" required type="tel" placeholder="Phone" autoComplete="tel" />
        <input className={styles.field} name="email" required type="email" placeholder="Email" autoComplete="email" />
        <input className={styles.field} name="city" placeholder="City" autoComplete="address-level2" />
        <select className={styles.select} name="budgetRange" defaultValue="" aria-label="Approximate budget">
          <option value="" disabled>Budget range</option>
          <option value="$15K-$25K">$15K-$25K</option>
          <option value="$25K-$50K">$25K-$50K</option>
          <option value="$50K-$100K">$50K-$100K</option>
          <option value="$100K+">$100K+</option>
          <option value="Not sure, full project">Not sure, full project</option>
        </select>
        <select className={styles.select} name="materialInterest" defaultValue="" aria-label="Material interest">
          <option value="" disabled>Material</option>
          <option value="Trex">Trex</option>
          <option value="TimberTech/AZEK">TimberTech/AZEK</option>
          <option value="Composite">Composite</option>
          <option value="Not Sure">Not sure</option>
        </select>
        <button className={`${styles.submit} ${styles.full}`} type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending...' : 'Request My Estimate'}
        </button>
      </div>
      <p className={styles.note}>
        Fast response for Northern Virginia homeowners. Calls are still the quickest path for same-week scheduling.
      </p>
    </form>
  );
}
