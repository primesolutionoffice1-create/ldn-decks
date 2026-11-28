// Highest-click guides from Google Search Console, web, final data,
// 2026-08-25 through 2026-11-24. These are the five guide/blog URLs
// with the most clicks. The homepage is excluded because it is not a guide.
export const GUIDE_COMMERCIAL_LINKS = {
  'blog/2x8-vs-2x10-deck-joists': {
    clicks: 306,
    text: 'Joist size is one decision inside a permitted deck scope. A deck builder in Northern Virginia writes that scope for the county, the span, and the decking product before the first board is installed.',
    links: [
      { href: '/deck-builder-northern-virginia', label: 'Deck builder in Northern Virginia' },
      { href: '/services/new-decks', label: 'New deck construction' },
      { href: '/services/deck-repair', label: 'Deck repair' },
    ],
  },
  'education/ledger-board-flashing-deck-attachment-virginia': {
    clicks: 294,
    text: 'Ledger attachment and flashing are structural details a deck builder has to include in the written scope. Loudoun Decks builds that work across Fairfax, Loudoun, and Prince William counties.',
    links: [
      { href: '/deck-builder-northern-virginia', label: 'Deck builder in Northern Virginia' },
      { href: '/services/new-decks', label: 'New deck construction' },
      { href: '/services/deck-repair', label: 'Deck repair' },
    ],
  },
  'education/understanding-deck-cantilevers-virginia': {
    clicks: 226,
    text: 'A cantilever limit belongs in the structural plan, not in a rule of thumb. The deck builder page is the service page for that plan across Fairfax, Loudoun, and Prince William.',
    links: [
      { href: '/deck-builder-northern-virginia', label: 'Deck builder in Northern Virginia' },
      { href: '/services/new-decks', label: 'New deck construction' },
      { href: '/services/deck-replacement', label: 'Deck replacement' },
    ],
  },
  'education/deck-stair-code-rise-run-virginia': {
    clicks: 186,
    text: 'Stair rise, run, and guards are part of the permitted build. Use the deck builder page when the next step is a written scope for a Northern Virginia house, then see how a new deck is planned.',
    links: [
      { href: '/deck-builder-northern-virginia', label: 'Deck builder in Northern Virginia' },
      { href: '/services/new-decks', label: 'New deck construction' },
      { href: '/services/deck-repair', label: 'Deck repair' },
    ],
  },
  'blog/how-to-restore-faded-composite-decking': {
    clicks: 175,
    text: 'Surface cleaning is maintenance. When the boards themselves are worn out, compare a composite deck with a full replacement, and start with a deck builder in Northern Virginia for the structural check.',
    links: [
      { href: '/deck-builder-northern-virginia', label: 'Deck builder in Northern Virginia' },
      { href: '/composite-decks', label: 'Composite decks' },
      { href: '/services/deck-replacement', label: 'Deck replacement' },
    ],
  },
};

export function guideCommercialLinksFor(path) {
  return GUIDE_COMMERCIAL_LINKS[path] || null;
}
