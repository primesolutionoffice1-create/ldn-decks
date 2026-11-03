import videos from './youtubeVideos.json';
import { BUSINESS, ORG_ID } from './business';

// Public videos from https://www.youtube.com/@LDNDecks
// (channel UCcBtXSQQIHSrcGIpMS8KSPA). Titles, descriptions, upload dates,
// and content URLs come from the channel Atom feed. Thumbnail URLs are the
// oEmbed thumbnail for each video. embedUrl is YouTube's privacy-enhanced
// player for that same video id. Nothing here is paraphrased or filled in.

const REQUIRED_FIELDS = ['id', 'name', 'description', 'thumbnailUrl', 'uploadDate', 'contentUrl', 'embedUrl'];

export function getYouTubeVideo(videoId) {
  const video = videos[videoId];
  if (!video) {
    throw new Error(`Unknown YouTube video ${videoId}`);
  }
  for (const field of REQUIRED_FIELDS) {
    if (typeof video[field] !== 'string' || !video[field].trim()) {
      throw new Error(`YouTube video ${videoId} is missing ${field}`);
    }
  }
  if (video.embedUrl !== `https://www.youtube-nocookie.com/embed/${video.id}`) {
    throw new Error(`YouTube video ${videoId} embedUrl must be the nocookie player`);
  }
  if (!video.contentUrl.startsWith('https://www.youtube.com/')) {
    throw new Error(`YouTube video ${videoId} contentUrl is not a YouTube URL`);
  }
  if (video.thumbnailUrl !== `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`) {
    throw new Error(`YouTube video ${videoId} thumbnailUrl is not the oEmbed thumbnail`);
  }
  return video;
}

export function youtubeObjectId(pagePath, videoId) {
  return `${BUSINESS.url}${pagePath}#youtube-${videoId}`;
}

export function buildYouTubeVideoSchema(video, pagePath) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': youtubeObjectId(pagePath, video.id),
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    embedUrl: video.embedUrl,
    contentUrl: video.contentUrl,
    publisher: { '@id': ORG_ID },
  };
}

// One video per page. The homepage already shows the local intro MP4.
export const PAGE_VIDEOS = {
  '/services/new-decks': 'SPznKk1KYk4',
  '/timbertech-decks': 'OP579YN1Lr8',
  '/timbertech-azek-deck-cost-northern-virginia': 'OP579YN1Lr8',
  '/trex-vs-timbertech-vs-azek': 'OP579YN1Lr8',
  '/deck-builder-mclean-va': 'OP579YN1Lr8',
  '/premium-composite-deck-replacement-arlington-alexandria-mclean-va': 'OP579YN1Lr8',
  '/showcase': 'Ez_jykSTC3c',
  '/deck-builder-lorton-va': 'KWKGyORptkE',
  '/deck-builder-manassas-va': 'm3thPatQkkQ',
  '/outdoor-kitchen-builder-northern-virginia': 'Gx-U6_XGUb0',
};

export const BLOG_VIDEOS = {
  'custom-deck-building-journey-northern-virginia': 'SPznKk1KYk4',
  'timbertech-vs-trex-northern-virginia-2026': 'OP579YN1Lr8',
  'timbertech-vs-trex-which-composite-northern-virginia': 'OP579YN1Lr8',
  'outdoor-living-design-trends-2026': 'Ez_jykSTC3c',
  'outdoor-kitchen-on-deck-northern-virginia': 'Gx-U6_XGUb0',
};

for (const videoId of [...Object.values(PAGE_VIDEOS), ...Object.values(BLOG_VIDEOS)]) {
  getYouTubeVideo(videoId);
}

export function videoForPage(pagePath) {
  const videoId = PAGE_VIDEOS[pagePath];
  if (!videoId) {
    throw new Error(`No YouTube video mapped for ${pagePath}`);
  }
  return getYouTubeVideo(videoId);
}

export function videoForBlogSlug(slug) {
  const videoId = BLOG_VIDEOS[slug];
  return videoId ? getYouTubeVideo(videoId) : null;
}
