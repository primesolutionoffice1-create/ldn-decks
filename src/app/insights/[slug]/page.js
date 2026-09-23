import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';
import { getSoroArticles, getSoroArticleBySlug, stripTags } from '@/lib/soro';
import { BUSINESS, ORG_ID, WEBSITE_ID } from '@/lib/business';
import JsonLd from '@/components/JsonLd';
import RelatedGuides from '@/components/RelatedGuides';
import ServicesHome from '@/components/ServicesHome';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import CallLink from '@/components/CallLink';
import MidArticleCta from '@/components/MidArticleCta';
import blogStyles from '@/app/blog/[slug]/BlogContent.module.css';
import styles from '../Insights.module.css';

// Articles are imported from the Soro RSS feed (src/lib/soro.js). Slugs known
// at build time are pre-rendered; anything published later is rendered on
// first request (dynamicParams) and both revalidate hourly. When the feed is
// disabled or empty, generateStaticParams yields nothing and unknown slugs
// resolve to the site 404.
export const revalidate = 3600;
export const dynamicParams = true;

const SECTION_PATH = '/insights';
const FALLBACK_OG_IMAGE = '/social/blog-social.png';
const MID_CTA_MIN_WORDS = 600;

export async function generateStaticParams() {
  const articles = await getSoroArticles();
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = await getSoroArticleBySlug(slug);
  if (!article) return { title: 'Insight Not Found', robots: { index: false, follow: false } };

  const base = buildMetadata({
    path: `${SECTION_PATH}/${article.slug}`,
    title: `${article.title} | Loudoun Decks`,
    description: article.excerpt,
    image: article.image || FALLBACK_OG_IMAGE,
  });

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: 'article',
      ...(article.date ? { publishedTime: article.date, modifiedTime: article.date } : {}),
    },
  };
}

function buildInsightArticleSchema(article) {
  const articleUrl = `${BUSINESS.url}${SECTION_PATH}/${article.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${articleUrl}#article`,
    isPartOf: { '@id': WEBSITE_ID },
    headline: article.title,
    description: article.excerpt,
    ...(article.image ? { image: [article.image] } : {}),
    ...(article.date ? { datePublished: article.date, dateModified: article.date } : {}),
    author: [
      {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: BUSINESS.name,
        url: BUSINESS.url,
      },
    ],
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
      url: articleUrl,
    },
    about: [
      ...article.categories.map((name) => ({ '@type': 'DefinedTerm', name })),
      { '@type': 'Thing', name: 'Northern Virginia deck construction' },
    ],
    keywords: article.categories,
    wordCount: article.wordCount,
    isAccessibleForFree: true,
    inLanguage: 'en-US',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['[data-speakable]', 'h1', 'h2'],
    },
  };
}

// Splits sanitized body HTML at the top-level <h2> nearest the midpoint so the
// mid-article CTA lands between sections (same intent as the blog renderer).
// Only splits where a block element just closed, which keeps the two halves
// well-formed. Short articles get no mid CTA.
function splitForMidCta(html, wordCount) {
  if (!html || wordCount < MID_CTA_MIN_WORDS) return [html, null];

  const boundaries = [];
  const re = /<\/(p|ul|ol|table|figure|blockquote|h2|h3|h4)>\s*<h2>/gi;
  let match;
  while ((match = re.exec(html)) !== null) {
    boundaries.push(match.index + match[0].length - '<h2>'.length);
  }
  if (!boundaries.length) return [html, null];

  const middle = html.length / 2;
  const best = boundaries.reduce(
    (acc, idx) => (Math.abs(idx - middle) < Math.abs(acc - middle) ? idx : acc),
    boundaries[0],
  );
  if (best < html.length * 0.2 || best > html.length * 0.8) return [html, null];

  return [html.slice(0, best), html.slice(best)];
}

export default async function InsightArticlePage({ params }) {
  const { slug } = await params;
  const article = await getSoroArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const articleSchema = buildInsightArticleSchema(article);
  const bodyText = stripTags(article.contentHtml);
  const leadText = article.excerpt.replace(/…$/, '');
  const showLead = Boolean(leadText) && !bodyText.startsWith(leadText);
  const showHeroImage = Boolean(article.image) && !article.contentHtml.includes(article.image);
  const [bodyStart, bodyRest] = splitForMidCta(article.contentHtml, article.wordCount);

  return (
    <article className={blogStyles.articlePage}>
      <JsonLd data={articleSchema} />

      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link href={SECTION_PATH} className={styles.backLink}>&larr; Back to Insights</Link>
          {article.categories.length > 0 && (
            <ul className={styles.categoryList} aria-label="Topics">
              {article.categories.slice(0, 3).map((category) => (
                <li key={category} className={styles.categoryBadge}>{category}</li>
              ))}
            </ul>
          )}
          <h1 className={styles.title}>{article.title}</h1>
          <div className={styles.meta}>
            <span>By {BUSINESS.name}</span>
            {article.dateDisplay && (
              <>
                <span className={styles.metaDivider}>•</span>
                <time dateTime={article.date}>{article.dateDisplay}</time>
              </>
            )}
          </div>
        </div>
      </header>

      <div className={blogStyles.contentSection}>
        <div className={blogStyles.containerNarrow}>
          <div className={blogStyles.contentBody}>
            {showLead && (
              <p className={blogStyles.leadParagraph} data-speakable>{leadText}</p>
            )}

            {showHeroImage && (
              <figure className={styles.heroFigure}>
                {/* Feed images live on Soro's CDN, which is not in next.config
                    remotePatterns; a plain <img> avoids a config change per
                    upstream host. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={article.image} alt={article.title} decoding="async" />
              </figure>
            )}

            {/* Body HTML is sanitized to a strict allowlist in src/lib/soro.js
                (no scripts, styles, iframes, event handlers or inline styles;
                external links are nofollow noopener). */}
            <div className={styles.articleBody} dangerouslySetInnerHTML={{ __html: bodyStart }} />
            {bodyRest && (
              <>
                <MidArticleCta />
                <div className={styles.articleBody} dangerouslySetInnerHTML={{ __html: bodyRest }} />
              </>
            )}

            <div className={blogStyles.conclusionBox}>
              <h3>Plan Your Northern Virginia Deck Project With Loudoun Decks</h3>
              <p>
                Get a free, no-pressure consultation from a licensed Northern Virginia deck builder. Call{' '}
                <CallLink style={{ color: 'var(--button-color)', fontWeight: 700 }} />{' '}
                or visit <Link href="/get-estimate" style={{ color: 'var(--button-color)', fontWeight: 700 }}>ldndecks.com/get-estimate</Link>.
              </p>
              <Link href="/get-estimate" className={blogStyles.ctaBtn}>Get a Free Estimate</Link>
            </div>
          </div>
        </div>
      </div>

      <ServicesHome />
      <ServiceAreasGrid />
      <RelatedGuides currentPath={`${SECTION_PATH}/${article.slug}`} category="blog-commercial" />
    </article>
  );
}
