import {
  MINIMUM_JOB_USD,
  SERVICE_CITIES,
  SERVICE_COMMUNITIES,
  SERVICE_COUNTIES,
} from './config.mjs';

export const SERVICE_TYPE_OPTIONS = Object.freeze({
  new_deck: 'A new deck or a full deck replacement, including composite, Trex, or wood.',
  repair_resurface: 'Repair, board replacement, or resurfacing of a deck that already exists.',
  screened_porch: 'A screened porch, screen enclosure, or porch that will be enclosed.',
  under_deck_ceiling: 'An under-deck ceiling, dry space, or finishing the area beneath a deck.',
  other: 'Something else, or not enough detail to pick one of the services above.',
});

export const PERMIT_WORK_OPTIONS = Object.freeze({
  new: 'A new deck or porch, or a county-typical new deck permit.',
  replacement: 'Replacement, enclosure, repair, or resurfacing of a deck or porch that already exists.',
  unknown: 'The permit does not say whether the work is new or a replacement.',
});

export const URGENCY_SCALE = Object.freeze([
  'No timeline, or just exploring',
  'Planning later this year',
  'Hoping to start in a few months',
  'Wants to start within a month',
  'Safety problem or wants to start immediately',
]);

export const SERVICE_LABELS = Object.freeze({
  new_deck: 'New deck',
  repair_resurface: 'Repair / resurface',
  screened_porch: 'Screened porch / enclosure',
  under_deck_ceiling: 'Under-deck ceiling',
  other: 'Other',
  new: 'New',
  replacement: 'Replacement',
  unknown: 'Unknown',
});

export const WEBSITE_QUESTION_IDS = Object.freeze([
  'service_type',
  'job_over_minimum',
  'in_service_area',
  'urgency',
  'spam',
]);

export const PERMIT_QUESTION_IDS = Object.freeze([
  'residential_deck_or_porch',
  'new_vs_replacement',
]);

const cityList = SERVICE_CITIES.join(', ');
const communityList = SERVICE_COMMUNITIES.join(', ');
const countyList = SERVICE_COUNTIES.join('; ');

export function websiteQuestions() {
  return {
    service_type: {
      type: 'choice',
      instructions: 'Which Loudoun Decks service is this website lead asking for? Use the service field, message, and material together.',
      criteria: SERVICE_TYPE_OPTIONS,
    },
    job_over_minimum: {
      type: 'noul',
      instructions: `Is the likely job at least $${MINIMUM_JOB_USD}? A full deck, porch, resurface, or under-deck ceiling in Northern Virginia almost always clears that. A single board, a few dollars, or an explicit budget under $${MINIMUM_JOB_USD} does not.`,
      criteria: {
        true: `The described work is a real deck, porch, resurface, or under-deck project, or the stated budget is at least $${MINIMUM_JOB_USD}.`,
        false: `The homeowner describes a tiny repair or states a budget under $${MINIMUM_JOB_USD}.`,
      },
    },
    in_service_area: {
      type: 'noul',
      instructions: `Is the project inside the service area? Primary cities: ${cityList}. Also in area: neighborhoods in ${countyList}, including ${communityList}. Maryland, Washington DC, and Richmond are outside. Arlington and Alexandria alone are adjacent — only answer yes if the note also places the job in the counties above.`,
      criteria: {
        true: 'The city, county, or neighborhood is in Loudoun, Fairfax, or Prince William County, Virginia.',
        false: 'The project is clearly outside those three counties.',
      },
    },
    urgency: {
      type: 'score',
      instructions: 'How soon does the homeowner want the work to start? Use the timeline field and any safety language in the message.',
      criteria: [...URGENCY_SCALE],
    },
    spam: {
      type: 'noul',
      instructions: 'Is this spam or not a real deck-project lead? Marketing solicitations, SEO offers, gibberish, and empty submissions are spam. A named person asking about a deck, porch, or repair is not spam.',
      criteria: {
        true: 'The submission is spam, a solicitation, or not a request for deck work.',
        false: 'A person is asking about a deck, porch, repair, or related outdoor project.',
      },
    },
  };
}

export function permitQuestions() {
  return {
    residential_deck_or_porch: {
      type: 'noul',
      instructions: 'Is this a residential deck or porch permit, including screened porches and porch enclosures? Commercial work, signs, and unrelated tenant buildouts are not.',
      criteria: {
        true: 'The record is a house, townhouse, or other residence and the work is a deck, porch, or screen enclosure.',
        false: 'The record is commercial, or it is not deck or porch work.',
      },
    },
    new_vs_replacement: {
      type: 'choice',
      instructions: 'Is the permitted work a new deck or porch, or a replacement / enclosure / repair of one that already exists?',
      criteria: PERMIT_WORK_OPTIONS,
    },
  };
}

export function questionIdsFor(record) {
  return record?.source === 'website' ? WEBSITE_QUESTION_IDS : PERMIT_QUESTION_IDS;
}

export function jobLabel(choice) {
  return SERVICE_LABELS[choice] || 'Deck project';
}
