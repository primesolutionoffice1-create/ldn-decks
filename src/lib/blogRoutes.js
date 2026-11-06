// City pages that used to live under /blog/ and now live at the site root.
// Must stay in sync with the /blog/deck-builder-*-va redirects in next.config.mjs
// (scripts/verify-blog-routes.mjs checks this in CI).
export const ROOT_CITY_BLOG_SLUGS = new Set([
  'deck-builder-aldie-va',
  'deck-builder-alexandria-va',
  'deck-builder-ashburn-va',
  'deck-builder-brambleton-va',
  'deck-builder-bristow-va',
  'deck-builder-broadlands-va',
  'deck-builder-burke-va',
  'deck-builder-cascades-va',
  'deck-builder-centreville-va',
  'deck-builder-chantilly-va',
  'deck-builder-fairfax-va',
  'deck-builder-falls-church-va',
  'deck-builder-gainesville-va',
  'deck-builder-great-falls-va',
  'deck-builder-haymarket-va',
  'deck-builder-herndon-va',
  'deck-builder-lansdowne-va',
  'deck-builder-leesburg-va',
  'deck-builder-lorton-va',
  'deck-builder-manassas-va',
  'deck-builder-mclean-va',
  'deck-builder-oakton-va',
  'deck-builder-purcellville-va',
  'deck-builder-reston-va',
  'deck-builder-south-riding-va',
  'deck-builder-springfield-va',
  'deck-builder-sterling-va',
  'deck-builder-vienna-va',
  'deck-builder-woodbridge-va',
]);

/**
 * Final public path for a blog post: its canonicalPath if set, the root city
 * page if the post was moved out of /blog/, otherwise /blog/<slug>.
 * Use this for every internal link and sitemap entry so nothing points at a redirect.
 */
export function getBlogPostPath(post) {
  if (post.canonicalPath) return post.canonicalPath;
  if (ROOT_CITY_BLOG_SLUGS.has(post.slug)) return `/${post.slug}`;
  return `/blog/${post.slug}`;
}

/** True when /blog/<slug> is only a redirect and must stay out of the sitemap. */
export function isRedirectedBlogPost(post) {
  return Boolean(post.canonicalPath) || ROOT_CITY_BLOG_SLUGS.has(post.slug);
}
