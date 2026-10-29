import InsideAthleticsMockup from '@/assets/images/projectspage/insideathletics-mockup.png';
import SelfServeMockup from '@/assets/images/projectspage/selfserve-mockup.png';
import SkillSparkMockup from '@/assets/images/projectspage/skillspark-mockup.png';
import ToggoMockup from '@/assets/images/projectspage/toggo-mockup.png';

export type FeaturedProject = {
  name: string;
  type: string;
  description: string;
  image: string;
};

const projects: FeaturedProject[] = [
  {
    name: 'SkillSpark',
    type: 'software',
    description:
      "SkillSpark is a unified platform that lets parents book flexible, credit-based sessions for their kids across local classes and services. By making it easy to explore, try, and review activities by category and location, SkillSpark supports students' evolving interests in one centralized place.",
    image: SkillSparkMockup,
  },
  {
    name: 'Toggo',
    type: 'software',
    description:
      'Toggo is a collaborative travel-planning, chat-based mobile application aimed to help the "trip make it out of the group chat." Its main focus is to simplify the planning part of a trip so it encourages everyone to participate and engage during the planning phases of this trip!',
    image: ToggoMockup,
  },
  {
    name: 'SelfServe',
    type: 'software',
    description:
      'SelfServe is a digital front desk and operations platform that turns guest requests into real-time, trackable tasks, helping hotels replace outdated systems with a smoother, data-driven operational daily experience.',
    image: SelfServeMockup,
  },
  {
    name: 'Inside Athletics',
    type: 'software',
    description:
      'Inside Athletics connects prospective college athletes and families with verified college athletes for honest, trusted insight—offering a credible alternative to unreliable forums and expensive advising.',
    image: InsideAthleticsMockup,
  },
];

export default projects;
