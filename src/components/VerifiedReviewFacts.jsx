import { REVIEW_SCHEMA_CONFIG, buildAggregateRating, buildReviewNodes } from '@/lib/reviewSchema';

// Visible counterpart of the review JSON-LD. Renders nothing until
// REVIEW_SCHEMA_CONFIG contains a verified aggregate rating or review quotes,
// so the markup and the page stay in sync.
export default function VerifiedReviewFacts() {
  const aggregate = buildAggregateRating();
  const reviews = buildReviewNodes();
  if (!aggregate && reviews.length === 0) return null;

  const sourceUrl = REVIEW_SCHEMA_CONFIG.sourceUrl;
  const sourceName = REVIEW_SCHEMA_CONFIG.sourceName;

  return (
    <section
      aria-label="Verified reviews"
      data-review-facts="true"
      style={{
        maxWidth: 900,
        margin: '0 auto',
        padding: '1rem 1.5rem 0',
      }}
    >
      {aggregate ? (
        <p style={{ margin: '0 0 0.75rem', lineHeight: 1.6 }}>
          {sourceName}: {aggregate.ratingValue} out of {aggregate.bestRating}, based on {aggregate.reviewCount} ratings.
          {sourceUrl ? (
            <>
              {' '}
              <a href={sourceUrl} target="_blank" rel="noopener noreferrer">View the source profile</a>
            </>
          ) : null}
        </p>
      ) : null}
      {reviews.map((review) => (
        <blockquote
          key={`${review.author.name}-${review.datePublished || ''}-${review.reviewBody.slice(0, 24)}`}
          style={{
            margin: '0 0 0.75rem',
            padding: '0.75rem 1rem',
            borderLeft: '4px solid var(--color-primary)',
            background: '#f9f9f9',
          }}
        >
          <p style={{ margin: '0 0 0.5rem', lineHeight: 1.6 }}>{review.reviewBody}</p>
          <footer style={{ fontSize: '0.9rem', color: '#555' }}>
            {review.author.name}
            {review.reviewRating ? ` · ${review.reviewRating.ratingValue} out of ${review.reviewRating.bestRating}` : ''}
            {review.datePublished ? ` · ${review.datePublished}` : ''}
            {review.url ? (
              <>
                {' · '}
                <a href={review.url} target="_blank" rel="noopener noreferrer">Source</a>
              </>
            ) : null}
          </footer>
        </blockquote>
      ))}
    </section>
  );
}
