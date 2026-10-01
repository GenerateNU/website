import EarnzMockUp from '../assets/images/landingpage-v2/Earnz_Mock_Up.png';
import SmartyPillMockup from '../assets/images/landingpage-v2/SmartyPill Mock Up.png';

export type FeaturedProject = {
  name: string;
  type: string;
  clientName: string;
  clientSchool: string;
  clientQuote: string;
  description: string;
  image: string;
};

const projects: FeaturedProject[] = [
  {
    name: 'Earnz',
    type: 'software',
    clientName: 'Max Thalheimer',
    clientSchool: 'Northeastern Alumnus ‘20',
    clientQuote:
      'Generate was great as a learning experience for me, as someone who hadn’t built a tech company before. The team of experienced Generate engineers knew what it takes to build a product like earnz, how to package it all together, and ultimately how to come together as a team.',
    description:
      'A unique, two-sided promotional and loyalty platform built to level the playing field for independent bars and restaurants by allowing them to utilize an app to acquire and retain customers as easily and cost effectively as currently only chains can.',
    image: EarnzMockUp,
  },
  {
    name: 'SmartyPill',
    type: 'software + hardware',
    clientName: 'Matthew Swenson',
    clientSchool: 'Northeastern Alumnus ‘20',
    clientQuote:
      'The biggest benefit that Generate provided for me was just the amount of work that was put into SmartyPill, and the knowledge gained from prototyping and writing software for it.',
    description:
      'SmartyPill is an automatic pill and water dispenser that ensures you’re taking the right pills at the right time. With customizable alerts and a connected app, SmartyPill is the perfect in-home companion for any medication adherent lifestyle.',
    image: SmartyPillMockup,
  },
];

export default projects;
