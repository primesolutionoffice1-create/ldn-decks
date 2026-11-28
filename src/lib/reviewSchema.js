// Single source for Review and AggregateRating JSON-LD.
//
// Aggregate numbers below were checked on 2026-11-27 via Google Places for the
// Google Business Profile "Loudoun Decks", 13704 Winding Oak Cir, Centreville VA
// 20121: rating 5.0 from 53 ratings. Refresh ratingValue and reviewCount when
// that public count changes. sourceUrl is the Google Maps place URL already
// used in BUSINESS.sameAs and Testimonials.
//
// reviews stays empty until a quote, reviewer name, and source URL are copied
// from that profile. No Review nodes are emitted while it is empty.
// withReviewSchema() adds aggregateRating only when this config validates.

export const REVIEW_SCHEMA_CONFIG = {
  // Google Places, checked 2026-11-27. Refresh with the live Google rating.
  ratingValue: 5,
  reviewCount: 53,
  bestRating: 5,
  worstRating: 1,
  sourceName: 'Google',
  sourceUrl: 'https://www.google.com/maps/place/Loudoun+Decks/',
  reviews: [
    // {
    //   author: 'Name as published on the source',
    //   datePublished: 'YYYY-MM-DD',
    //   reviewBody: 'Exact published quote',
    //   ratingValue: 5,
    //   sourceUrl: 'https://...',
    // },
  ],
};

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

function isFiniteNumber(value) {
  return typeof value === 'number' && Number.isFinite(value);
}

function isHttpUrl(value) {
  return typeof value === 'string' && /^https:\/\/\S+$/.test(value);
}

export function reviewSchemaErrors(config = REVIEW_SCHEMA_CONFIG) {
  const errors = [];
  const { ratingValue, reviewCount, bestRating, worstRating, sourceName, sourceUrl, reviews } = config;
  const aggregateRequested = ratingValue != null || reviewCount != null || sourceName != null || sourceUrl != null;

  if (!isFiniteNumber(bestRating) || !isFiniteNumber(worstRating) || worstRating >= bestRating) {
    errors.push('bestRating and worstRating must be numbers with worstRating < bestRating');
  }

  if (aggregateRequested) {
    if (!isFiniteNumber(ratingValue)) errors.push('ratingValue must be a number');
    if (!Number.isInteger(reviewCount) || reviewCount < 1) errors.push('reviewCount must be a positive integer');
    if (isFiniteNumber(ratingValue) && isFiniteNumber(bestRating) && isFiniteNumber(worstRating)) {
      if (ratingValue < worstRating || ratingValue > bestRating) {
        errors.push('ratingValue must be between worstRating and bestRating');
      }
    }
    if (typeof sourceName !== 'string' || !sourceName.trim()) {
      errors.push('sourceName is required when an aggregate rating is set');
    }
    if (!isHttpUrl(sourceUrl)) {
      errors.push('sourceUrl must be an https URL when an aggregate rating is set');
    }
  }

  if (!Array.isArray(reviews)) {
    errors.push('reviews must be an array');
    return errors;
  }

  reviews.forEach((review, index) => {
    const label = `reviews[${index}]`;
    if (!review || typeof review !== 'object') {
      errors.push(`${label} must be an object`);
      return;
    }
    if (typeof review.author !== 'string' || !review.author.trim()) {
      errors.push(`${label}.author must be a non-empty name`);
    }
    if (typeof review.reviewBody !== 'string' || !review.reviewBody.trim()) {
      errors.push(`${label}.reviewBody must be a non-empty quote`);
    }
    if (!isFiniteNumber(review.ratingValue)) {
      errors.push(`${label}.ratingValue must be a number`);
    } else if (isFiniteNumber(bestRating) && isFiniteNumber(worstRating)) {
      if (review.ratingValue < worstRating || review.ratingValue > bestRating) {
        errors.push(`${label}.ratingValue must be between worstRating and bestRating`);
      }
    }
    if (review.datePublished != null && (typeof review.datePublished !== 'string' || !ISO_DATE.test(review.datePublished))) {
      errors.push(`${label}.datePublished must be YYYY-MM-DD when provided`);
    }
    if (review.sourceUrl != null && !isHttpUrl(review.sourceUrl)) {
      errors.push(`${label}.sourceUrl must be an https URL when provided`);
    }
  });

  return errors;
}

export function buildAggregateRating(config = REVIEW_SCHEMA_CONFIG) {
  if (reviewSchemaErrors(config).length) return null;
  if (config.ratingValue == null || config.reviewCount == null) return null;
  return {
    '@type': 'AggregateRating',
    ratingValue: config.ratingValue,
    reviewCount: config.reviewCount,
    bestRating: config.bestRating,
    worstRating: config.worstRating,
  };
}

export function buildReviewNodes(config = REVIEW_SCHEMA_CONFIG) {
  if (reviewSchemaErrors(config).length) return [];
  return config.reviews.map((review) => {
    const node = {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author.trim(),
      },
      reviewBody: review.reviewBody.trim(),
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.ratingValue,
        bestRating: config.bestRating,
        worstRating: config.worstRating,
      },
    };
    if (review.datePublished) node.datePublished = review.datePublished;
    if (review.sourceUrl) node.url = review.sourceUrl;
    return node;
  });
}

// Attaches aggregateRating and review only when the config validates and has data.
// An empty config returns the same object, so existing schema output stays unchanged.
export function withReviewSchema(node, config = REVIEW_SCHEMA_CONFIG) {
  const aggregateRating = buildAggregateRating(config);
  const review = buildReviewNodes(config);
  if (!aggregateRating && review.length === 0) return node;
  return {
    ...node,
    ...(aggregateRating ? { aggregateRating } : {}),
    ...(review.length ? { review } : {}),
  };
}
