// Public trust facts the site is allowed to show.
// Google rating is one config object so the next refresh is a single edit.
// Do not copy this rating into JSON-LD. Self-serving review
// markup on the business's own pages is not eligible for review stars.

export const TRUST = {
  programs: [
    {
      id: 'trex-platinum-partner',
      label: 'Trex Platinum Partner',
      confirmedOn: '2026-10-31',
    },
    {
      id: 'timbertech-certified',
      label: 'TimberTech Certified',
      confirmedOn: '2026-10-31',
    },
  ],
  google: {
    // Turn this off to hide the rating slot without removing the config.
    show: true,
    ratingValue: 5.0,
    reviewCount: 53,
    asOf: '2026-11-27',
    asOfLabel: 'Nov 27, 2026',
    profileUrl: 'https://www.google.com/maps?cid=10508603141052545545',
    placeId: 'ChIJPemJZw5FtokRCbr9O-EO1pE',
    writeReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJPemJZw5FtokRCbr9O-EO1pE',
  },
};

const HTTP_URL = /^https?:\/\/\S+$/i;

export function visibleGoogleRating(google = TRUST.google) {
  if (!google || google.show !== true) return null;
  const ratingValue = Number(google.ratingValue);
  const reviewCount = Number(google.reviewCount);
  if (!Number.isFinite(ratingValue) || ratingValue <= 0) return null;
  if (!Number.isFinite(reviewCount) || reviewCount <= 0) return null;
  if (!HTTP_URL.test(google.profileUrl || '')) return null;
  if (typeof google.asOfLabel !== 'string' || !google.asOfLabel.trim()) return null;
  return {
    ratingValue,
    reviewCount,
    asOf: google.asOf,
    asOfLabel: google.asOfLabel.trim(),
    profileUrl: google.profileUrl,
    writeReviewUrl: HTTP_URL.test(google.writeReviewUrl || '') ? google.writeReviewUrl : '',
  };
}
