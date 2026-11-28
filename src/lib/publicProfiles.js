import { getVerifiedReviewSourceSnippets } from '@/lib/verifiedProof';
import { TRUST } from '@/lib/trust';

const HTTP_URL = /^https?:\/\/\S+$/i;

export function publicProfileHref(source) {
  if (!source || typeof source !== 'object') return '';
  if (source.source_id === 'google-business-profile' && HTTP_URL.test(TRUST.google.profileUrl || '')) {
    return TRUST.google.profileUrl;
  }
  const raw = typeof source.url === 'string' ? source.url.trim() : '';
  return HTTP_URL.test(raw) ? raw : '';
}

export function publicProfileLinks() {
  return getVerifiedReviewSourceSnippets()
    .map((source) => {
      const href = publicProfileHref(source);
      if (!href) return null;
      const label = typeof source.source_name === 'string' ? source.source_name.trim() : '';
      if (!label) return null;
      return {
        id: source.source_id || href,
        label,
        href,
      };
    })
    .filter(Boolean);
}
