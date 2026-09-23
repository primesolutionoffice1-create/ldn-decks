import React from 'react';
import Link from 'next/link';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { getSoroArticles } from '@/lib/soro';
import { ORG_ID, WEBSITE_ID } from '@/lib/business';
import WebPageSchema from '@/components/WebPageSchema';
import JsonLd from '@/components/JsonLd';
import RelatedGuides from '@/components/RelatedGuides';
import headerStyles from '@/components/BlogHeader.module.css';
import listStyles from '@/components/BlogList.module.css';
import styles from './Insights.module.css';

// Articles come from the Soro RSS feed (src/lib/soro.js). ISR every hour so
// new items appear without a redeploy; the feed being disabled or empty
// simply renders the empty state.
export const revalidate = 3600;

const PAGE_PATH = '/insights';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE = 'Deck Building Insights | Loudoun Decks';
const PAGE_DESCRIPTION =
  'Deck building insights for Northern Virginia homeowners: materials, maintenance, planning and outdoor living articles from Loudoun Decks.';

export const metadata = buildMetadata({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  image: '/social/blog-social.png',
});

function buildCollectionSchema(articles) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${PAGE_URL}#collection`,
    url: PAGE_URL,
    name: 'Deck Building Insights',
    description: PAGE_DESCRIPTION,
    isPartOf: { '@id': WEBSITE_ID },
    publisher: { '@id': ORG_ID },
    mainEntity: {
      '@type': 'ItemList',
      '@id': `${PAGE_URL}#articles`,
      itemListElement: articles.map((article, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${PAGE_URL}/${article.slug}`,
        name: article.title,
      })),
    },
  };
}

export default async function InsightsPage() {
  const articles = await getSoroArticles();
  const newest = articles.find((article) => article.date);

  return (
    <main>
      <WebPageSchema
        url={PAGE_URL}
        name={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        dateModified={newest ? newest.date.split('T')[0] : undefined}
        speakable
      />
      <JsonLd data={buildCollectionSchema(articles)} />

      <section className={headerStyles.headerSection}>
        <div className={headerStyles.container}>
          <div className={headerStyles.subtextWrapper}>
            <span className={headerStyles.subtext}>Insights</span>
            <span className={headerStyles.line}></span>
          </div>
          <h1 className={headerStyles.title}>Deck Building Insights</h1>
          <p className={headerStyles.description} data-speakable>
            Articles on deck materials, maintenance, planning and outdoor living for Northern Virginia homeowners.
          </p>
        </div>
      </section>

      <section className={listStyles.blogSection}>
        <div className={listStyles.container}>
          {articles.length === 0 ? (
            <p className={styles.emptyState}>
              No insights yet. Check back soon, or browse the <Link href="/blog">Loudoun Decks blog</Link> in the meantime.
            </p>
          ) : (
            <div className={listStyles.grid}>
              {articles.map((article) => {
                const href = `${PAGE_PATH}/${article.slug}`;
                return (
                  <article key={article.slug} className={listStyles.blogCard}>
                    {article.image && (
                      <Link href={href} className={listStyles.imgLink}>
                        <div className={listStyles.imgWrapper}>
                          {/* Feed images live on Soro's CDN, which is not in
                              next.config remotePatterns; a plain <img> avoids
                              a config change per upstream host. */}
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={article.image}
                            alt={article.title}
                            className={styles.cardImage}
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </Link>
                    )}

                    <div className={listStyles.cardContent}>
                      <div className={listStyles.meta}>
                        {article.dateDisplay && (
                          <time className={listStyles.date} dateTime={article.date}>{article.dateDisplay}</time>
                        )}
                        {article.dateDisplay && <span className={listStyles.metaDivider}>|</span>}
                        <span className={listStyles.author}>Loudoun Decks</span>
                      </div>

                      {article.categories.length > 0 && (
                        <ul className={styles.categoryList} aria-label="Topics">
                          {article.categories.slice(0, 3).map((category) => (
                            <li key={category} className={styles.categoryBadge}>{category}</li>
                          ))}
                        </ul>
                      )}

                      <Link href={href} className={listStyles.titleLink}>
                        <h2 className={listStyles.title}>{article.title}</h2>
                      </Link>

                      <p className={listStyles.excerpt}>{article.excerpt}</p>

                      <div className={listStyles.cardFooter}>
                        <Link href={href} className={listStyles.readMoreBtn}>
                          Read Article
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <RelatedGuides currentPath={PAGE_PATH} />
    </main>
  );
}
