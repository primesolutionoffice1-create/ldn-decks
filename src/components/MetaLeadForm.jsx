"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useLeadSubmit } from "@/hooks/useLeadSubmit";
import styles from "./MetaLeadForm.module.css";

const pageContext = {
  pageType: "paid_social_landing_page",
  service: "Deck Project",
};

export default function MetaLeadForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState(null);
  const [submittedAt] = useState(() => Date.now());
  const formRef = useRef(null);
  const submit = useLeadSubmit({ formType: "paid_social", pageContext });

  function continueToContact() {
    const requiredFields = formRef.current?.querySelectorAll('[data-step="1"] [required]') || [];
    const firstInvalid = Array.from(requiredFields).find((field) => !field.checkValidity());

    if (firstInvalid) {
      firstInvalid.reportValidity();
      return;
    }

    setStep(2);
    window.requestAnimationFrame(() => document.getElementById("metaLeadName")?.focus());
  }

  async function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent?.stopImmediatePropagation?.();
    setStatus("submitting");

    const result = await submit(event.currentTarget);
    if (!result.success) {
      setStatus("error");
    }
  }

  return (
    <form
      ref={formRef}
      className={styles.form}
      onSubmit={handleSubmit}
      data-form-location="paid_social_deck_project_estimate"
      aria-label="Northern Virginia deck project request"
    >
      <input
        type="text"
        name="ldn_extra_field"
        tabIndex={-1}
        autoComplete="new-password"
        aria-hidden="true"
        className={styles.honeypot}
      />
      <input type="hidden" name="submittedAt" value={submittedAt} />
      <input type="hidden" name="state" value="VA" />
      <input type="hidden" name="leadSource" value="Meta Paid Social" />
      <input type="hidden" name="page_type" value="paid_social_landing_page" />

      <div className={styles.formHeader}>
        <div>
          <p className={styles.eyebrow}>Project fit review</p>
          <h2>Tell us what you are planning</h2>
        </div>
        <p className={styles.stepLabel}>Step {step} of 2</p>
      </div>

      <div className={styles.progress} aria-hidden="true">
        <span className={step === 2 ? styles.progressComplete : ""} />
      </div>

      <fieldset data-step="1" hidden={step !== 1} className={styles.fieldset}>
        <legend className={styles.srOnly}>Project fit</legend>

        <label className={styles.fieldGroup}>
          <span>Project type</span>
          <select name="service" required defaultValue="">
            <option value="" disabled>Select your project</option>
            <option value="New Decks">New deck</option>
            <option value="Deck Replacement">Deck replacement</option>
            <option value="Composite Decks">Composite or PVC upgrade</option>
            <option value="Screened Porches">Screened or covered deck</option>
            <option value="Structural Deck Repair">Structural deck repair</option>
            <option value="Other Outdoor Project">Other outdoor project</option>
          </select>
        </label>

        <label className={styles.fieldGroup}>
          <span>City or ZIP code</span>
          <input name="city" required placeholder="e.g. Ashburn or 20148" autoComplete="address-level2" />
        </label>

        <label className={styles.fieldGroup}>
          <span>Your role</span>
          <select name="homeownerStatus" required defaultValue="">
            <option value="" disabled>Select one</option>
            <option value="Homeowner decision maker">Homeowner / decision maker</option>
            <option value="Homeowner researching with partner">Homeowner researching with partner</option>
            <option value="Property manager or authorized representative">Authorized representative</option>
            <option value="Not the homeowner">Not the homeowner</option>
          </select>
        </label>

        <label className={styles.fieldGroup}>
          <span>Preferred timing</span>
          <select name="timeline" required defaultValue="">
            <option value="" disabled>Select a timeframe</option>
            <option value="Immediately">Ready now</option>
            <option value="1-3 Months">1-3 months</option>
            <option value="3-6 Months">3-6 months</option>
            <option value="Just Exploring">Planning ahead</option>
          </select>
        </label>

        <button className={styles.primaryButton} type="button" onClick={continueToContact}>
          Continue to contact details
        </button>
      </fieldset>

      <fieldset data-step="2" hidden={step !== 2} className={styles.fieldset}>
        <legend className={styles.srOnly}>Contact details</legend>

        <div className={styles.twoColumns}>
          <label className={styles.fieldGroup}>
            <span>Name</span>
            <input id="metaLeadName" name="name" required placeholder="Full name" autoComplete="name" />
          </label>
          <label className={styles.fieldGroup}>
            <span>Phone</span>
            <input name="phone" required type="tel" placeholder="Phone number" autoComplete="tel" />
          </label>
        </div>

        <label className={styles.fieldGroup}>
          <span>Email</span>
          <input name="email" required type="email" placeholder="name@email.com" autoComplete="email" />
        </label>

        <label className={styles.fieldGroup}>
          <span>Approximate project budget</span>
          <select name="budgetRange" required defaultValue="">
            <option value="" disabled>Select a range</option>
            <option value="Under $15K">Under $15K</option>
            <option value="$15K-$25K">$15K-$25K</option>
            <option value="$25K-$50K">$25K-$50K</option>
            <option value="$50K-$100K">$50K-$100K</option>
            <option value="$100K+">$100K+</option>
            <option value="Not sure, full project">Not sure, planning a full project</option>
          </select>
        </label>

        <label className={styles.fieldGroup}>
          <span>Material interest <small>Optional</small></span>
          <select name="materialInterest" defaultValue="">
            <option value="">Not sure yet</option>
            <option value="Trex">Trex</option>
            <option value="TimberTech/AZEK">TimberTech / AZEK</option>
            <option value="Composite">Composite</option>
            <option value="Pressure-Treated Wood">Pressure-treated wood</option>
          </select>
        </label>

        <label className={styles.fieldGroup}>
          <span>Project notes <small>Optional</small></span>
          <textarea name="message" rows="3" placeholder="Size, existing deck condition, stairs, railing, porch, HOA, or other details" />
        </label>

        {status === "error" && (
          <p className={styles.error} role="alert">The request did not send. Please try again or call us.</p>
        )}

        <div className={styles.actions}>
          <button className={styles.backButton} type="button" onClick={() => setStep(1)}>
            Back
          </button>
          <button className={styles.primaryButton} type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending..." : "Request my consultation"}
          </button>
        </div>
      </fieldset>

      <p className={styles.privacy}>
        We use your details to review and respond to this request. See our{" "}
        <Link href="/privacy-policy">privacy policy</Link>.
      </p>
    </form>
  );
}
