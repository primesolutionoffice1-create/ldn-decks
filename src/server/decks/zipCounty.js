// Virginia county → zip mapping for LDN Decks service area.
// Used by:
//   - GHL forwarder (server/ghl.js) for inferring county from zip on form submits
//   - Vapi lookup-zip function for in-call validation
//   - Lead scoring rules (HOT requires county in service area)
//
// Sourced from USPS data; pruned to the 5 counties LDN Decks actually serves.
// Updated when service area expands.

export const LOUDOUN_ZIPS = new Set([
  '20105', '20117', '20129', '20132', '20134', '20135', '20141', '20142',
  '20146', '20147', '20148', '20152', '20158', '20159', '20160', '20163',
  '20164', '20165', '20166', '20167', '20175', '20176', '20177', '20178',
  '20180', '20184', '20189', '20197', '22713',
]);

export const FAIRFAX_ZIPS = new Set([
  '20120', '20121', '20122', '20124', '20151', '20153', '20170', '20171',
  '20172', '20190', '20191', '20192', '20194', '20195', '20196', '22003',
  '22009', '22015', '22027', '22030', '22031', '22032', '22033', '22034',
  '22035', '22036', '22037', '22038', '22039', '22041', '22042', '22043',
  '22044', '22046', '22060', '22066', '22067', '22079', '22081', '22082',
  '22095', '22096', '22101', '22102', '22103', '22106', '22107', '22108',
  '22109', '22116', '22118', '22119', '22120', '22121', '22122', '22124',
  '22150', '22151', '22152', '22153', '22156', '22158', '22160', '22161',
  '22180', '22181', '22182', '22183', '22184', '22185', '22189', '22199',
]);

export const PRINCE_WILLIAM_ZIPS = new Set([
  '20109', '20110', '20111', '20112', '20113', '20136', '20137', '20138',
  '20139', '20140', '20143', '20155', '20156', '20168', '20169', '20181',
  '20182', '20187', '20188', '22025', '22026', '22125', '22134', '22172',
  '22191', '22192', '22193', '22194', '22195',
]);

export const ARLINGTON_ZIPS = new Set([
  '22201', '22202', '22203', '22204', '22205', '22206', '22207', '22209',
  '22210', '22211', '22212', '22213', '22214', '22215', '22216', '22217',
  '22218', '22219', '22222', '22223', '22225', '22226', '22227', '22229',
  '22230', '22234', '22240', '22241', '22242', '22243', '22244', '22245',
  '22246',
]);

export const FAUQUIER_ZIPS = new Set([
  '20106', '20115', '20116', '20119', '20128', '20130', '20131', '20138',
  '20144', '20184', '20185', '20186', '20187', '20188', '20198',
]);

export const SERVICE_COUNTIES = ['Loudoun', 'Fairfax', 'Prince William', 'Arlington', 'Fauquier'];

export function lookupCounty(zip) {
  if (!zip) return 'Other';
  const z = String(zip).slice(0, 5);
  if (LOUDOUN_ZIPS.has(z)) return 'Loudoun';
  if (FAIRFAX_ZIPS.has(z)) return 'Fairfax';
  if (PRINCE_WILLIAM_ZIPS.has(z)) return 'Prince William';
  if (ARLINGTON_ZIPS.has(z)) return 'Arlington';
  if (FAUQUIER_ZIPS.has(z)) return 'Fauquier';
  return 'Other';
}

export function inServiceArea(zip) {
  return SERVICE_COUNTIES.includes(lookupCounty(zip));
}
