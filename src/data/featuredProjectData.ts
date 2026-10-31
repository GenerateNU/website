import CineCircleMockup from '@/assets/images/projectspage/cinecircle-mockup.png';
import EarnzMockup from '@/assets/images/projectspage/earnz-mockup.png';
import InsideAthleticsMockup from '@/assets/images/projectspage/insideathletics-mockup.png';
import KarpMockup from '@/assets/images/projectspage/karp-mockup.png';
import PrisereMockup from '@/assets/images/projectspage/prisere-mockup.png';
import SelfServeMockup from '@/assets/images/projectspage/selfserve-mockup.png';
import SkillSparkMockup from '@/assets/images/projectspage/skillspark-mockup.png';
import SmartyPillMockup from '@/assets/images/projectspage/smartypill-mockup.png';
import SpecialStandardMockup from '@/assets/images/projectspage/specialstandard-mockup.png';
import ToggoMockup from '@/assets/images/projectspage/toggo-mockup.png';
import type { ProjectTeam } from '@/component/ProjectsPage/AllProjects/Project/Project';

export type FeaturedProject = {
  name: string;
  teams: ProjectTeam[];
  description: string;
  image: string;
  rounded?: boolean;
};

const projects: FeaturedProject[] = [
  {
    name: 'SkillSpark',
    teams: ['software'],
    description:
      "SkillSpark is a unified platform that lets parents book flexible, credit-based sessions for their kids across local classes and services. By making it easy to explore, try, and review activities by category and location, SkillSpark supports students' evolving interests in one centralized place.",
    image: SkillSparkMockup,
  },
  {
    name: 'Toggo',
    teams: ['software'],
    description:
      'Toggo is a collaborative travel-planning, chat-based mobile application aimed to help the "trip make it out of the group chat." Its main focus is to simplify the planning part of a trip so it encourages everyone to participate and engage during the planning phases of this trip!',
    image: ToggoMockup,
  },
  {
    name: 'SelfServe',
    teams: ['software'],
    description:
      'SelfServe is a digital front desk and operations platform that turns guest requests into real-time, trackable tasks, helping hotels replace outdated systems with a smoother, data-driven operational daily experience.',
    image: SelfServeMockup,
  },
  {
    name: 'Inside Athletics',
    teams: ['software'],
    description:
      'Inside Athletics connects prospective college athletes and families with verified college athletes for honest, trusted insight—offering a credible alternative to unreliable forums and expensive advising.',
    image: InsideAthleticsMockup,
  },
  {
    name: 'Earnz',
    teams: ['software'],
    description:
      'A unique, two-sided promotional and loyalty platform built to level the playing field for independent bars and restaurants by allowing them to utilize an app to acquire and retain customers as easily and cost effectively as currently only chains can.',
    image: EarnzMockup,
  },
  {
    name: 'SmartyPill',
    teams: ['software', 'hardware'],
    description:
      'SmartyPill is an automatic pill and water dispenser that ensures you’re taking the right pills at the right time. With customizable alerts and a connected app, SmartyPill is the perfect in-home companion for any medication adherent lifestyle.',
    image: SmartyPillMockup,
  },
];

// Clickable in All Projects but left out of the featured carousel
export const popupOnlyProjects: FeaturedProject[] = [
  {
    name: 'Prisere',
    teams: ['software'],
    description:
      'Prisere helps small businesses get through disasters by tracking expenses, organizing claim reports, and walking owners through the next steps of recovery.',
    image: PrisereMockup,
    rounded: true,
  },
  {
    name: 'The Special Standard',
    teams: ['software'],
    description:
      'The Special Standard gives educators one place to manage students, schedule sessions, and track progress toward learning goals through interactive curriculum games.',
    image: SpecialStandardMockup,
    rounded: true,
  },
  {
    name: 'CineCircle',
    teams: ['software'],
    description:
      'CineCircle is a social app for movie lovers to share their takes, review films with friends, and see what their circle is watching.',
    image: CineCircleMockup,
    rounded: true,
  },
  {
    name: 'Karp',
    teams: ['software'],
    description:
      'Karp rewards students for showing up to campus events, with leaderboards, prizes, and a virtual fish tank that grows as they attend.',
    image: KarpMockup,
    rounded: true,
  },
];

export default projects;
