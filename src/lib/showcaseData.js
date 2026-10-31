export function showcaseImageAlt(project) {
  const city = String(project.location || '').split(',')[0].trim() || 'Northern Virginia';
  const place = /,\s*DC\b/i.test(project.location || '') ? `${city}, DC` : `${city}, Virginia`;
  const title = String(project.title || '').toLowerCase();
  let subject = 'Deck project';
  if (title.includes('rooftop')) subject = 'Rooftop deck';
  else if (title.includes('composite')) subject = 'New composite deck';
  else if (title.includes('wood fence')) subject = 'Custom wood fence';
  else if (title.includes('fence') && title.includes('gate')) subject = 'Custom fence and gate';
  else if (title.includes('metal fence') || title.includes('fence')) subject = 'Metal fence installation';
  else if (title.includes('resurfacing')) subject = 'Deck and balcony resurfacing';
  else if (title.includes('balcony reconstruction')) subject = 'Balcony reconstruction';
  else if (title.includes('multi') && title.includes('wood')) subject = 'Wood multi-level deck';
  else if (title.includes('multi')) subject = 'Multi-level deck and balcony';
  else if (title.includes('installing')) subject = 'Custom deck installation';
  else if (title.includes('construction')) subject = 'Deck construction';
  else if (title.includes('building')) subject = 'New deck build';
  return `${subject} in ${place}`;
}

export const showcaseProjects = [
  {
    id: 1,
    slug: "custom-deck-reston",
    title: "CUSTOM DECK INSTALLING",
    location: "Reston, February 2025",
    image: "/images/img01.jpeg"
  },
  {
    id: 2,
    slug: "metal-fence-centreville",
    title: "INSTALLING NEW METAL FENCE",
    location: "Centreville, February 2025",
    image: "/fence.webp"
  },
  {
    id: 3,
    slug: "deck-construction-manassas",
    title: "DECK CONSTRUCTION",
    location: "Manassas, February 2025",
    image: "/images/img03.jpeg"
  },
  {
    id: 4,
    slug: "deck-resurfacing-sterling",
    title: "DECK/BALCONY RESURFACING",
    location: "Sterling, December 2024",
    image: "/images/img04.jpeg"
  },
  {
    id: 5,
    slug: "balcony-reconstruction-chantilly",
    title: "BALCONY RECONSTRUCTION",
    location: "Chantilly, November 2024",
    image: "/images/img05.jpeg"
  },
  {
    id: 6,
    slug: "fence-gate-falls-church",
    title: "CUSTOM FENCE AND GATE",
    location: "Falls Church, November 2024",
    image: "/fence2.avif"
  },
  {
    id: 7,
    slug: "new-deck-manassas",
    title: "BUILDING A NEW DECK",
    location: "Manassas, November 2024",
    image: "/images/img07.jpeg"
  },
  {
    id: 8,
    slug: "custom-wood-fence-ashburn",
    title: "NEW CUSTOM WOOD FENCE",
    location: "Ashburn, October 2024",
    image: "/fence2.avif"
  },
  {
    id: 10,
    slug: "wood-multi-level-deck-chantilly",
    title: "WOOD MULTI LEVEL DECK",
    location: "Chantilly, November 2024",
    image: "/images/img11.jpeg"
  },
  {
    id: 11,
    slug: "new-composite-deck-ashburn",
    title: "BUILD NEW COMPOSITE DECK",
    location: "Ashburn, October 2024",
    image: "/images/img13.jpeg"
  },
  {
    id: 13,
    slug: "multi-level-deck-alexandria",
    title: "MULTI LEVEL DECK BALCONY",
    location: "Alexandria, July 2024",
    image: "/images/img19.jpeg"
  },
  {
    id: 14,
    slug: "rooftop-deck-washington-dc",
    title: "ROOFTOP DECK CONSTRUCTION",
    location: "Washington, DC, March 2025",
    image: "/showcase/img07.jpeg"
  }
];
