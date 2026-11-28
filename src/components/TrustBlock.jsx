import { BUSINESS } from '@/lib/business';
import { TRUST, visibleGoogleRating } from '@/lib/trust';
import styles from './TrustBlock.module.css';

export default function TrustBlock() {
  const rating = visibleGoogleRating();

  return (
    <section className={styles.block} aria-label="Company credentials" data-trust-block>
      <h2 className={styles.heading}>Credentials</h2>
      <ul className={styles.list}>
        {TRUST.programs.map((program) => (
          <li key={program.id} className={styles.badge}>
            <strong>{program.label}</strong>
            <span>Confirmed by the owner on October 31, 2026. Not a TrexPro labor-warranty tier.</span>
          </li>
        ))}
        <li className={styles.badge}>
          <strong>Virginia Class A</strong>
          <span>{BUSINESS.founder.hasCredential}</span>
        </li>
        {rating ? (
          <li className={styles.badge}>
            <strong>Google {rating.ratingValue.toFixed(1)}</strong>
            <span>
              {rating.reviewCount} reviews, as of <time dateTime={rating.asOf}>{rating.asOfLabel}</time>
            </span>
            <a href={rating.profileUrl}>Open public profile</a>
            {rating.writeReviewUrl ? <a href={rating.writeReviewUrl}>Leave a review</a> : null}
          </li>
        ) : null}
      </ul>
    </section>
  );
}
