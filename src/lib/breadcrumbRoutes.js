const canonicalBreadcrumbHrefs = {
  service: '/services',
  'outdoor-living': '/outdoor-living-northern-virginia',
  patios: '/services/patios',
  pergolas: '/services/gazebo-pergola',
  'screened-porches': '/screened-porch-builder-northern-virginia',
  'deck-repair': '/services/deck-repair',
};

export function getCanonicalBreadcrumbHref(segment, generatedHref) {
  return canonicalBreadcrumbHrefs[segment] || generatedHref;
}
