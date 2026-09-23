// Soro RSS → native /insights articles.
//
// Soro (app.trysoro.com) publishes SEO articles to an RSS 2.0 feed. This
// module fetches that feed, parses it without any XML dependency, sanitizes
// the article HTML to a strict allowlist, and exposes plain objects the
// /insights routes and the sitemap can render.
//
// Failure policy: the feed is currently disabled upstream (HTTP 403 "Feed is
// disabled") and may legitimately contain zero items once enabled. Every
// public function here degrades to an empty list — nothing throws at render
// or build time.
//
// Kept free of `@/` alias imports so scripts/verify-soro-feed.mjs can load it
// directly under plain Node.

export const DEFAULT_SORO_RSS_URL =
  'https://app.trysoro.com/api/rss/18ae6d31-ecfe-4299-bbcc-d4788ec51274';

export const SORO_REVALIDATE_SECONDS = 3600;

const FETCH_TIMEOUT_MS = 10000;
const EXCERPT_MAX_CHARS = 200;
const SLUG_MAX_CHARS = 90;
const SITE_HOSTS = new Set(['ldndecks.com', 'www.ldndecks.com']);

export function getSoroFeedUrl() {
  const configured = typeof process !== 'undefined' ? process.env.SORO_RSS_URL : '';
  const trimmed = (configured || '').trim();
  return /^https?:\/\//i.test(trimmed) ? trimmed : DEFAULT_SORO_RSS_URL;
}

// ---------------------------------------------------------------------------
// Text helpers
// ---------------------------------------------------------------------------

const NAMED_ENTITIES = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
};

export function decodeEntities(value) {
  if (!value) return '';
  return String(value).replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, entity) => {
    const lower = entity.toLowerCase();
    if (lower.startsWith('#x')) {
      const code = parseInt(lower.slice(2), 16);
      return Number.isFinite(code) ? safeFromCodePoint(code, match) : match;
    }
    if (lower.startsWith('#')) {
      const code = parseInt(lower.slice(1), 10);
      return Number.isFinite(code) ? safeFromCodePoint(code, match) : match;
    }
    return Object.prototype.hasOwnProperty.call(NAMED_ENTITIES, lower)
      ? NAMED_ENTITIES[lower]
      : match;
  });
}

function safeFromCodePoint(code, fallback) {
  try {
    return String.fromCodePoint(code);
  } catch {
    return fallback;
  }
}

export function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeText(value) {
  // Normalize text nodes: decode whatever the source encoded, then re-escape
  // so raw "&" / "<" from sloppy upstream HTML never reach the DOM unescaped.
  return escapeHtml(decodeEntities(value));
}

export function stripTags(html) {
  return decodeEntities(
    String(html || '')
      .replace(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi, ' ')
      .replace(/<style\b[^>]*>[\s\S]*?<\/style\s*>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
  )
    .replace(/\s+/g, ' ')
    .trim();
}

export function truncateText(text, max = EXCERPT_MAX_CHARS) {
  const clean = String(text || '').replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const window = clean.slice(0, max + 1);
  const lastSpace = window.lastIndexOf(' ');
  const cut = lastSpace > Math.floor(max * 0.6) ? window.slice(0, lastSpace) : window.slice(0, max);
  return `${cut.replace(/[\s,;:\-–—]+$/g, '')}…`;
}

export function slugify(value) {
  return String(value || '')
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-')
    .slice(0, SLUG_MAX_CHARS)
    .replace(/-+$/g, '');
}

// ---------------------------------------------------------------------------
// RSS 2.0 parsing (regex based, CDATA aware)
// ---------------------------------------------------------------------------

function readCdataOrText(raw) {
  if (raw == null) return '';
  const source = String(raw);
  if (source.includes('<![CDATA[')) {
    const parts = [];
    const re = /<!\[CDATA\[([\s\S]*?)\]\]>/g;
    let match;
    while ((match = re.exec(source)) !== null) parts.push(match[1]);
    return parts.join('');
  }
  return decodeEntities(source);
}

function escapeTagName(name) {
  return name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function tagContent(block, tagName) {
  const name = escapeTagName(tagName);
  const re = new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}\\s*>`, 'i');
  const match = block.match(re);
  return match ? readCdataOrText(match[1]).trim() : '';
}

function allTagContents(block, tagName) {
  const name = escapeTagName(tagName);
  const re = new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}\\s*>`, 'gi');
  const out = [];
  let match;
  while ((match = re.exec(block)) !== null) {
    const text = readCdataOrText(match[1]).trim();
    if (text) out.push(text);
  }
  return out;
}

function tagAttributes(block, tagName) {
  const name = escapeTagName(tagName);
  const re = new RegExp(`<${name}\\b([^>]*)\\/?>`, 'i');
  const match = block.match(re);
  if (!match) return null;
  return parseAttributes(match[1]);
}

function parseAttributes(raw) {
  const attrs = {};
  const re = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+))/g;
  let match;
  while ((match = re.exec(raw || '')) !== null) {
    const key = match[1].toLowerCase();
    const value = match[2] ?? match[3] ?? match[4] ?? '';
    attrs[key] = decodeEntities(value);
  }
  return attrs;
}

function isImageUrl(url, type) {
  if (type && /^image\//i.test(type)) return true;
  return /\.(png|jpe?g|webp|gif|avif|svg)(\?|#|$)/i.test(url || '');
}

function firstImageFromHtml(html) {
  const match = String(html || '').match(/<img\b[^>]*\bsrc\s*=\s*(?:"([^"]*)"|'([^']*)')/i);
  return match ? decodeEntities(match[1] ?? match[2] ?? '') : '';
}

function pickImage(block, contentHtml) {
  const enclosure = tagAttributes(block, 'enclosure');
  if (enclosure?.url && isImageUrl(enclosure.url, enclosure.type)) return enclosure.url;

  const mediaContent = tagAttributes(block, 'media:content');
  if (mediaContent?.url && isImageUrl(mediaContent.url, mediaContent.type || mediaContent.medium)) {
    return mediaContent.url;
  }

  const mediaThumb = tagAttributes(block, 'media:thumbnail');
  if (mediaThumb?.url) return mediaThumb.url;

  return firstImageFromHtml(contentHtml);
}

function parseDate(value) {
  if (!value) return null;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function formatDisplayDate(date) {
  if (!date) return '';
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function parseRssItems(xml) {
  const source = String(xml || '');
  if (!/<rss\b|<channel\b|<item\b/i.test(source)) return [];

  const items = [];
  const re = /<item(?:\s[^>]*)?>([\s\S]*?)<\/item\s*>/gi;
  let match;
  while ((match = re.exec(source)) !== null) {
    const block = match[1];
    const contentEncoded = tagContent(block, 'content:encoded');
    const description = tagContent(block, 'description');
    const guidAttrs = tagAttributes(block, 'guid') || {};

    items.push({
      title: stripTags(tagContent(block, 'title')),
      link: tagContent(block, 'link'),
      guid: tagContent(block, 'guid'),
      guidIsPermaLink: String(guidAttrs.ispermalink || '').toLowerCase() !== 'false',
      pubDate: tagContent(block, 'pubDate') || tagContent(block, 'dc:date'),
      description,
      contentEncoded,
      image: pickImage(block, contentEncoded || description),
      categories: allTagContents(block, 'category').map(stripTags).filter(Boolean),
      slug: tagContent(block, 'slug') || tagContent(block, 'soro:slug'),
    });
  }
  return items;
}

// ---------------------------------------------------------------------------
// HTML sanitizer (allowlist)
// ---------------------------------------------------------------------------

const ALLOWED_TAGS = new Set([
  'p', 'h2', 'h3', 'h4', 'ul', 'ol', 'li', 'strong', 'em', 'a', 'img',
  'blockquote', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'br',
  'figure', 'figcaption',
]);

// Tags that are re-mapped rather than dropped so the body keeps its meaning.
const TAG_ALIASES = {
  b: 'strong',
  i: 'em',
  h1: 'h2',
  h5: 'h4',
  h6: 'h4',
};

const VOID_TAGS = new Set(['br', 'img']);

// Elements whose entire subtree must be removed, not just the tag.
const DROP_WITH_CONTENT = [
  'script', 'style', 'iframe', 'noscript', 'object', 'embed', 'svg', 'math',
  'form', 'template', 'video', 'audio', 'canvas', 'head', 'title',
];

function removeDangerousBlocks(html) {
  let out = String(html || '').replace(/<!--[\s\S]*?-->/g, '');
  for (const tag of DROP_WITH_CONTENT) {
    const paired = new RegExp(`<${tag}\\b[^>]*>[\\s\\S]*?<\\/${tag}\\s*>`, 'gi');
    out = out.replace(paired, '');
    // Unterminated opener: drop everything to the end of the string.
    const dangling = new RegExp(`<${tag}\\b[^>]*>[\\s\\S]*$`, 'i');
    out = out.replace(dangling, '');
  }
  return out;
}

function normalizeHref(href) {
  const raw = decodeEntities(String(href || '')).trim();
  if (!raw) return null;
  if (/^[\s]*(javascript|data|vbscript):/i.test(raw)) return null;

  // Relative site links are fine as-is.
  if (raw.startsWith('/') && !raw.startsWith('//')) return { href: raw, external: false };
  if (raw.startsWith('#')) return { href: raw, external: false };

  let url;
  try {
    url = new URL(raw);
  } catch {
    return null;
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return null;

  if (SITE_HOSTS.has(url.hostname.toLowerCase())) {
    const relative = `${url.pathname || '/'}${url.search || ''}${url.hash || ''}`;
    return { href: relative, external: false };
  }
  return { href: url.href, external: true };
}

function normalizeImageSrc(src) {
  const raw = decodeEntities(String(src || '')).trim();
  if (!raw) return null;
  if (raw.startsWith('/') && !raw.startsWith('//')) return raw;
  let url;
  try {
    url = new URL(raw);
  } catch {
    return null;
  }
  if (url.protocol !== 'https:') return null;
  return url.href;
}

function buildOpenTag(tag, attrs) {
  const parts = [tag];
  switch (tag) {
    case 'a': {
      const link = normalizeHref(attrs.href);
      if (!link) return null;
      parts.push(`href="${escapeHtml(link.href)}"`);
      if (link.external) {
        parts.push('rel="nofollow noopener"', 'target="_blank"');
      }
      break;
    }
    case 'img': {
      const src = normalizeImageSrc(attrs.src);
      if (!src) return null;
      parts.push(`src="${escapeHtml(src)}"`);
      parts.push(`alt="${escapeHtml(attrs.alt || '')}"`);
      parts.push('loading="lazy"', 'decoding="async"');
      if (/^\d{1,5}$/.test(attrs.width || '')) parts.push(`width="${attrs.width}"`);
      if (/^\d{1,5}$/.test(attrs.height || '')) parts.push(`height="${attrs.height}"`);
      break;
    }
    case 'th':
    case 'td': {
      if (/^\d{1,3}$/.test(attrs.colspan || '')) parts.push(`colspan="${attrs.colspan}"`);
      if (/^\d{1,3}$/.test(attrs.rowspan || '')) parts.push(`rowspan="${attrs.rowspan}"`);
      break;
    }
    default:
      break;
  }
  return `<${parts.join(' ')}${VOID_TAGS.has(tag) ? ' /' : ''}>`;
}

export function sanitizeArticleHtml(html) {
  const source = removeDangerousBlocks(html);
  const tokenRe = /<\/?([a-zA-Z][a-zA-Z0-9:-]*)\b([^>]*)>/g;
  const out = [];
  const stack = [];
  let cursor = 0;
  let match;

  const DROPPED_PREFIX = '__dropped:';
  const emitClose = (entry) => {
    if (!entry.startsWith(DROPPED_PREFIX)) out.push(`</${entry}>`);
  };
  const closeUntil = (tag) => {
    const idx = stack.lastIndexOf(tag);
    if (idx === -1) return;
    while (stack.length > idx) {
      emitClose(stack.pop());
    }
  };

  while ((match = tokenRe.exec(source)) !== null) {
    if (match.index > cursor) {
      out.push(escapeText(source.slice(cursor, match.index)));
    }
    cursor = match.index + match[0].length;

    const isClosing = match[0].startsWith('</');
    const rawName = match[1].toLowerCase();
    const tag = TAG_ALIASES[rawName] || rawName;

    if (!ALLOWED_TAGS.has(tag)) {
      // Unknown or disallowed tag: drop the tag, keep its inner text.
      continue;
    }

    if (isClosing) {
      if (!VOID_TAGS.has(tag)) closeUntil(tag);
      continue;
    }

    const attrs = parseAttributes(match[2]);
    const openTag = buildOpenTag(tag, attrs);
    if (!openTag) {
      // Tag was allowed but its required attribute was unsafe (bad href/src):
      // drop the element wrapper, keep any inner text. Mark it so the matching
      // close tag is ignored rather than mis-closing a parent.
      // closeUntil() searches for the real tag name, so this marker is only
      // popped (silently) when an ancestor closes — never mis-closing a parent.
      if (!VOID_TAGS.has(tag)) stack.push(`${DROPPED_PREFIX}${tag}`);
      continue;
    }

    out.push(openTag);
    if (!VOID_TAGS.has(tag) && !/\/\s*>$/.test(match[0])) {
      stack.push(tag);
    }
  }

  if (cursor < source.length) {
    out.push(escapeText(source.slice(cursor)));
  }

  while (stack.length) {
    emitClose(stack.pop());
  }

  return out
    .join('')
    .replace(/<p>\s*<\/p>/gi, '')
    .trim();
}

// ---------------------------------------------------------------------------
// Article normalization
// ---------------------------------------------------------------------------

function uniqueSlug(base, taken) {
  let candidate = base;
  let n = 2;
  while (taken.has(candidate)) {
    candidate = `${base}-${n++}`;
  }
  taken.add(candidate);
  return candidate;
}

export function normalizeArticles(items) {
  const taken = new Set();
  const articles = [];

  for (const item of items || []) {
    const title = (item.title || '').trim();
    if (!title) continue;

    const rawHtml = item.contentEncoded || item.description || '';
    const contentHtml = sanitizeArticleHtml(rawHtml);
    const contentText = stripTags(contentHtml);
    if (!contentText) continue;

    const descriptionText = stripTags(item.description || '');
    const excerpt = truncateText(descriptionText || contentText);

    const providedSlug = slugify(item.slug || '');
    const derivedSlug = slugify(title);
    const fallbackSlug = slugify(item.guid || item.link || '') || 'insight';
    const slug = uniqueSlug(providedSlug || derivedSlug || fallbackSlug, taken);

    const date = parseDate(item.pubDate);
    const image = normalizeImageSrc(item.image) || '';

    articles.push({
      slug,
      title,
      link: item.link || '',
      guid: item.guid || item.link || slug,
      date: date ? date.toISOString() : null,
      dateDisplay: formatDisplayDate(date),
      excerpt,
      contentHtml,
      image,
      categories: Array.from(new Set(item.categories || [])),
      wordCount: contentText ? contentText.split(/\s+/).length : 0,
    });
  }

  articles.sort((a, b) => {
    const ta = a.date ? Date.parse(a.date) : 0;
    const tb = b.date ? Date.parse(b.date) : 0;
    return tb - ta;
  });

  return articles;
}

export function parseSoroFeed(xml) {
  try {
    return normalizeArticles(parseRssItems(xml));
  } catch {
    return [];
  }
}

// ---------------------------------------------------------------------------
// Fetching
// ---------------------------------------------------------------------------

/**
 * Fetches and parses the Soro feed. Never throws: any non-2xx status
 * (including the current 403 "Feed is disabled"), network error, timeout or
 * malformed body resolves to [].
 *
 * @param {{ revalidate?: number | false }} [options] - Next.js fetch cache
 *   window. Defaults to one hour; the sitemap passes `false` so it stays a
 *   fully static build artifact.
 */
export async function getSoroArticles(options = {}) {
  const revalidate = options.revalidate === undefined ? SORO_REVALIDATE_SECONDS : options.revalidate;
  const url = getSoroFeedUrl();

  try {
    const response = await fetch(url, {
      next: { revalidate },
      headers: {
        accept: 'application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.5',
        'user-agent': 'LDNDecksInsights/1.0 (+https://ldndecks.com)',
      },
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
    if (!response.ok) return [];
    const xml = await response.text();
    return parseSoroFeed(xml);
  } catch {
    return [];
  }
}

export async function getSoroArticleBySlug(slug, options) {
  if (!slug) return null;
  const articles = await getSoroArticles(options);
  return articles.find((article) => article.slug === slug) || null;
}
