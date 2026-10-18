import { SERVICE_AREA_FAQ_ANSWER } from './serviceArea';

export const publicFaqCategories = [
  {
    category: 'About Loudoun Decks',
    items: [
      {
        q: 'What type of company is Loudoun Decks?',
        a: 'Loudoun Decks is a local outdoor living company specializing in deck construction and related outdoor projects for residential properties.',
      },
      {
        q: 'Where is Loudoun Decks located?',
        a: 'The business is based in Centreville, Virginia. That is the published business location. Community names elsewhere on the site describe places we serve, not additional offices.',
      },
      {
        q: 'What areas do you serve?',
        a: SERVICE_AREA_FAQ_ANSWER,
      },
    ],
  },
  {
    category: 'Deck and Outdoor Living Services',
    items: [
      {
        q: 'What services do you offer?',
        a: 'We provide custom deck construction, deck resurfacing, patios, porches, and pergolas or gazebos.',
      },
      {
        q: 'Do you only work on residential properties?',
        a: 'Yes. Loudoun Decks focuses on residential outdoor living projects.',
      },
      {
        q: 'Can you help with updating an existing deck?',
        a: 'Yes. We offer deck resurfacing for homeowners looking to update or improve an existing deck.',
      },
      {
        q: 'What decking materials do you install?',
        a: 'We install Trex, TimberTech, AZEK, and Fiberon products, and we also build with pressure-treated wood and cedar. Product lines and current manufacturer programs should be confirmed for the specific project. A written estimate names the product that will be used.',
      },
    ],
  },
  {
    category: 'Our Process',
    items: [
      {
        q: 'How do I get started with a project?',
        a: 'You can start by contacting us to request a free consultation.',
      },
      {
        q: 'Do you offer free consultations?',
        a: 'Yes. We offer free consultations to discuss your outdoor living project and answer questions.',
      },
      {
        q: 'What happens during the consultation?',
        a: 'We discuss your ideas, review your outdoor space, and talk through potential next steps.',
      },
    ],
  },
  {
    category: 'Project Planning Questions',
    items: [
      {
        q: 'Do you visit the property before starting a project?',
        a: 'Yes. An on-site visit allows us to better understand the space and project requirements.',
      },
      {
        q: 'How do you help homeowners plan their projects?',
        a: 'We focus on clear communication and planning so homeowners understand the scope of work before construction begins.',
      },
      {
        q: 'Do you help with building permits?',
        a: 'We prepare permit paperwork for the jurisdiction that applies to the property. Alexandria, Falls Church, the City of Fairfax, Manassas, and Manassas Park each have their own offices. A mailing city or ZIP does not decide which office reviews the plans.',
      },
      {
        q: 'How long does a deck project take?',
        a: 'The schedule depends on the scope, the permit office, and the weather. The written estimate gives the timeline for that project. We do not publish a single construction time for every deck.',
      },
    ],
  },
  {
    category: 'Service Area Questions',
    items: [
      {
        q: 'Do you work throughout Northern Virginia?',
        a: SERVICE_AREA_FAQ_ANSWER,
      },
      {
        q: 'Do you serve cities like Ashburn or Leesburg?',
        a: 'Yes. Published city pages include Ashburn, Leesburg, Sterling, Centreville, Reston, Woodbridge, and Manassas. Manassas is an independent city, not part of Prince William County.',
      },
    ],
  },
  {
    category: 'Estimates and Contact',
    items: [
      {
        q: 'How can I contact Loudoun Decks?',
        a: 'You can contact us by phone, email, or through the contact form on our website.',
      },
      {
        q: 'How much does a composite deck cost?',
        a: 'The price depends on the property, the size, the structure, and the material. Request a written estimate for the project. This site does not publish one price that applies to every deck.',
      },
      {
        q: 'Do you provide free estimates?',
        a: 'Yes. We provide free consultations and estimates for homeowners in our service area.',
      },
      {
        q: 'Is there an obligation to move forward after contacting you?',
        a: 'No. Contacting us is simply a way to get information and discuss your project.',
      },
    ],
  },
];

export function buildFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: publicFaqCategories.flatMap((category) => category.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    }))),
  };
}

export const faqSchemaData = buildFAQSchema();
