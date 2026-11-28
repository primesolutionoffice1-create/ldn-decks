// Published case studies only. Each record must be traceable to a showcase
// entry already in the repo. Do not add a project until Nicu supplies the
// photos and the facts that belong on the page.
//
// This example uses showcaseProjects "new-composite-deck-ashburn":
// title BUILD NEW COMPOSITE DECK, location "Ashburn, October 2024",
// image /images/img13.jpeg. Ashburn is listed under Loudoun County in
// src/data/cityData.js. There is no client quote and no before photo in
// that record, so those slots stay empty.

export const projectCaseStudies = [
  {
    slug: 'new-composite-deck-ashburn',
    published: true,
    title: 'BUILD NEW COMPOSITE DECK',
    city: 'Ashburn',
    county: 'Loudoun County',
    state: 'VA',
    completedLabel: 'October 2024',
    materials: ['Composite decking'],
    scope: 'New composite deck',
    photos: [
      {
        src: '/images/img13.jpeg',
        alt: 'New composite deck in Ashburn, Virginia, October 2024',
        role: 'gallery',
      },
    ],
    quote: null,
    sourceShowcaseSlug: 'new-composite-deck-ashburn',
  },
];

export function publishedProjectCaseStudies() {
  return projectCaseStudies.filter((project) => project.published === true && project.slug && project.title);
}

export function getProjectCaseStudy(slug) {
  return publishedProjectCaseStudies().find((project) => project.slug === slug) || null;
}
