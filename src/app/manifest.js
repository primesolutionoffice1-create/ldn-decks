// Next.js Metadata File convention. Auto-generates /manifest.webmanifest.
// Resolves the audit-finding that /manifest.json and /site.webmanifest returned
// 404 across the site. Theme/background colors match the brand palette.
export default function manifest() {
  return {
    name: 'Loudoun Decks',
    short_name: 'Loudoun Decks',
    description:
      'Trex product-line planning custom deck builder serving Loudoun, Fairfax, Prince William and Arlington counties in Northern Virginia.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#d14817',
    icons: [
      { src: '/icon.png', sizes: '32x32', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  };
}
