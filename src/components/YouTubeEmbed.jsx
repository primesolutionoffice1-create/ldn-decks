import JsonLd from './JsonLd';
import YouTubeFacade from './YouTubeFacade';
import { buildYouTubeVideoSchema, videoForBlogSlug, videoForPage } from '@/lib/youtubeVideos';
import styles from './YouTubeEmbed.module.css';

export default function YouTubeEmbed({ pagePath, blogSlug }) {
  const video = blogSlug ? videoForBlogSlug(blogSlug) : videoForPage(pagePath);
  if (!video) {
    throw new Error(`No YouTube video mapped for ${blogSlug || pagePath}`);
  }
  const headingId = `youtube-${video.id}-title`;

  return (
    <section className={styles.section} aria-labelledby={headingId}>
      <JsonLd data={buildYouTubeVideoSchema(video, pagePath)} />
      <div className={styles.inner}>
        <p className={styles.kicker}>Loudoun Decks on YouTube</p>
        <h2 id={headingId} className={styles.title}>{video.name}</h2>
        <YouTubeFacade video={video} />
        <p className={styles.description}>{video.description}</p>
      </div>
    </section>
  );
}
