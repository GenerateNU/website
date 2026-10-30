import Alia from '@/assets/images/projectspage/alia.svg';
import Arctic from '@/assets/images/projectspage/arctic.svg';
import AutoPasser from '@/assets/images/projectspage/autopasser.svg';
import EarnzMockUp from '@/assets/images/projectspage/earnz-mockup.png';
import HotDate from '@/assets/images/projectspage/hotdate.svg';
import InsideAthleticsMockup from '@/assets/images/projectspage/insideathletics-mockup.png';
import Jurni from '@/assets/images/projectspage/jurni.svg';
import SelfServeMockup from '@/assets/images/projectspage/selfserve-mockup.png';
import ShowNxt from '@/assets/images/projectspage/shownxt.svg';
import SkillSparkMockup from '@/assets/images/projectspage/skillspark-mockup.png';
import SmartyPillMockup from '@/assets/images/projectspage/smartypill-mockup.png';
import ToggoMockup from '@/assets/images/projectspage/toggo-mockup.png';
import EarnzPreview from '@/assets/videos/projectspage/earnz-preview.webm';
import SmartyPillPreview from '@/assets/videos/projectspage/smartypill-preview.webm';

export type ProjectTeam = 'software' | 'hardware';

type Semester = {
  season: 'Spring' | 'Summer' | 'Fall';
  year: number;
};

type ProjectMember = {
  name: string;
  role: string;
};

type ProjectClient = {
  name: string;
  school: string;
  quote: string;
};

export type ProjectLink = {
  kind: 'github' | 'website' | 'app-store' | 'demo';
  label: string;
  url: string;
};

export type ProjectMediaItem =
  | { kind: 'image'; src: string; alt: string; caption?: string }
  | {
      kind: 'video';
      src: string;
      poster: string;
      alt: string;
      caption?: string;
      // A project can have several videos. 'primary' is the short preview the project lists play;
      // 'hero' is the one that leads its own page. Without either, the first video does both jobs.
      role?: 'primary' | 'hero';
    }
  | { kind: 'youtube'; id: string; title: string; poster?: string };

export type ProjectVideo = Extract<ProjectMediaItem, { kind: 'video' }>;

export type Project = {
  slug: string;
  name: string;
  teams: ProjectTeam[];
  image: string;
  // Logos are full-bleed artwork; mockups are transparent renders shown on a backdrop.
  imageKind: 'logo' | 'mockup';
  semester: Semester;
  members: ProjectMember[];
  githubUrl: string;
  featured?: boolean;
  description?: string;
  client?: ProjectClient;
  links?: ProjectLink[];
  media?: ProjectMediaItem[];
};

export type AdjacentProjects = {
  previous: Project;
  next: Project;
};

export type ProjectYearGroup = {
  year: number;
  projects: Project[];
};

export const projectTeams: ProjectTeam[] = ['software', 'hardware'];

// TODO: semesters, members and GitHub links are placeholder data; replace with the real project records.
const projects: Project[] = [
  {
    slug: 'skillspark',
    name: 'SkillSpark',
    teams: ['software'],
    image: SkillSparkMockup,
    imageKind: 'mockup',
    semester: { season: 'Spring', year: 2026 },
    members: [
      { name: 'Rohan Desai', role: 'Project Lead' },
      { name: 'Claire Dubois', role: 'Technical Lead' },
      { name: 'Mateo Silva', role: 'Software Engineer' },
      { name: 'Yuna Park', role: 'Software Engineer' },
      { name: 'Imani Brooks', role: 'UI/UX Designer' },
    ],
    githubUrl: 'https://github.com/GenerateNU/skillspark',
    featured: true,
    description:
      "SkillSpark is a unified platform that lets parents book flexible, credit-based sessions for their kids across local classes and services. By making it easy to explore, try, and review activities by category and location, SkillSpark supports students' evolving interests in one centralized place.",
  },
  {
    slug: 'toggo',
    name: 'Toggo',
    teams: ['software'],
    image: ToggoMockup,
    imageKind: 'mockup',
    semester: { season: 'Spring', year: 2026 },
    members: [
      { name: 'Nina Kowalski', role: 'Project Lead' },
      { name: 'Diego Herrera', role: 'Technical Lead' },
      { name: 'Sara Lindqvist', role: 'Software Engineer' },
      { name: 'Femi Adeyemi', role: 'Software Engineer' },
      { name: 'June Ito', role: 'UI/UX Designer' },
    ],
    githubUrl: 'https://github.com/GenerateNU/toggo',
    featured: true,
    description:
      'Toggo is a collaborative travel-planning, chat-based mobile application aimed to help the "trip make it out of the group chat." Its main focus is to simplify the planning part of a trip so it encourages everyone to participate and engage during the planning phases of this trip!',
  },
  {
    slug: 'selfserve',
    name: 'SelfServe',
    teams: ['software'],
    image: SelfServeMockup,
    imageKind: 'mockup',
    semester: { season: 'Spring', year: 2026 },
    members: [
      { name: 'Aaron Feld', role: 'Project Lead' },
      { name: 'Priyanka Shah', role: 'Technical Lead' },
      { name: 'Liam Gallagher', role: 'Software Engineer' },
      { name: 'Rosa Jimenez', role: 'Software Engineer' },
      { name: 'Kai Nakamura', role: 'UI/UX Designer' },
    ],
    githubUrl: 'https://github.com/GenerateNU/selfserve',
    featured: true,
    description:
      'SelfServe is a digital front desk and operations platform that turns guest requests into real-time, trackable tasks, helping hotels replace outdated systems with a smoother, data-driven operational daily experience.',
  },
  {
    slug: 'inside-athletics',
    name: 'Inside Athletics',
    teams: ['software'],
    image: InsideAthleticsMockup,
    imageKind: 'mockup',
    semester: { season: 'Spring', year: 2026 },
    members: [
      { name: 'Jordan Ellis', role: 'Project Lead' },
      { name: 'Hiba Mansour', role: 'Technical Lead' },
      { name: 'Owen Pierce', role: 'Software Engineer' },
      { name: 'Talia Gold', role: 'Software Engineer' },
      { name: 'Malik Johnson', role: 'UI/UX Designer' },
    ],
    githubUrl: 'https://github.com/GenerateNU/inside-athletics',
    featured: true,
    description:
      'Inside Athletics connects prospective college athletes and families with verified college athletes for honest, trusted insight—offering a credible alternative to unreliable forums and expensive advising.',
  },
  {
    slug: 'earnz',
    name: 'Earnz',
    teams: ['software'],
    image: EarnzMockUp,
    imageKind: 'mockup',
    semester: { season: 'Spring', year: 2020 },
    members: [
      { name: 'Priya Raman', role: 'Project Lead' },
      { name: 'Marcus Bell', role: 'Technical Lead' },
      { name: 'Sofia Alvarez', role: 'Software Engineer' },
      { name: 'Kenji Watanabe', role: 'Software Engineer' },
      { name: 'Hannah Okafor', role: 'UI/UX Designer' },
    ],
    githubUrl: 'https://github.com/GenerateNU/earnz',
    featured: true,
    // TODO: placeholder clip, replace with real demo footage
    media: [
      { kind: 'image', src: EarnzMockUp, alt: 'Earnz app mockup' },
      {
        kind: 'video',
        src: EarnzPreview,
        poster: EarnzMockUp,
        alt: 'Earnz mockup slowly panning and zooming',
        caption: 'Placeholder preview of the Earnz app.',
      },
    ],
    description:
      'A unique, two-sided promotional and loyalty platform built to level the playing field for independent bars and restaurants by allowing them to utilize an app to acquire and retain customers as easily and cost effectively as currently only chains can.',
    client: {
      name: 'Max Thalheimer',
      school: 'Northeastern Alumnus ‘20',
      quote:
        'Generate was great as a learning experience for me, as someone who hadn’t built a tech company before. The team of experienced Generate engineers knew what it takes to build a product like earnz, how to package it all together, and ultimately how to come together as a team.',
    },
  },
  {
    slug: 'smartypill',
    name: 'SmartyPill',
    teams: ['software', 'hardware'],
    image: SmartyPillMockup,
    imageKind: 'mockup',
    semester: { season: 'Fall', year: 2019 },
    members: [
      { name: 'Daniel Kim', role: 'Project Lead' },
      { name: 'Amara Nwosu', role: 'Technical Lead' },
      { name: 'Ethan Brooks', role: 'Software Engineer' },
      { name: 'Lucia Romano', role: 'Hardware Engineer' },
      { name: 'Omar Haddad', role: 'Lead Mechanical Engineer' },
      { name: 'Grace Liu', role: 'Industrial Designer' },
    ],
    githubUrl: 'https://github.com/GenerateNU/smartypill',
    featured: true,
    // TODO: placeholder clip, replace with real demo footage
    media: [
      { kind: 'image', src: SmartyPillMockup, alt: 'SmartyPill app mockup' },
      {
        kind: 'video',
        src: SmartyPillPreview,
        poster: SmartyPillMockup,
        alt: 'SmartyPill mockup slowly panning and zooming',
        caption: 'Placeholder preview of the SmartyPill dispenser.',
      },
    ],
    description:
      'SmartyPill is an automatic pill and water dispenser that ensures you’re taking the right pills at the right time. With customizable alerts and a connected app, SmartyPill is the perfect in-home companion for any medication adherent lifestyle.',
    client: {
      name: 'Matthew Swenson',
      school: 'Northeastern Alumnus ‘20',
      quote:
        'The biggest benefit that Generate provided for me was just the amount of work that was put into SmartyPill, and the knowledge gained from prototyping and writing software for it.',
    },
  },
  {
    slug: 'jurni',
    name: 'Jurni',
    teams: ['software'],
    image: Jurni,
    imageKind: 'logo',
    semester: { season: 'Spring', year: 2024 },
    members: [
      { name: 'Maya Patel', role: 'Project Lead' },
      { name: 'Tyler Nguyen', role: 'Technical Lead' },
      { name: 'Chloe Martin', role: 'Software Engineer' },
      { name: 'Isaac Mensah', role: 'Software Engineer' },
      { name: 'Ava Thompson', role: 'UI/UX Designer' },
    ],
    githubUrl: 'https://github.com/GenerateNU/jurni',
  },
  {
    slug: 'alia',
    name: 'Alia',
    teams: ['software'],
    image: Alia,
    imageKind: 'logo',
    semester: { season: 'Fall', year: 2023 },
    members: [
      { name: 'Noah Fischer', role: 'Project Lead' },
      { name: 'Leila Haddad', role: 'Technical Lead' },
      { name: 'Ryan O’Connor', role: 'Software Engineer' },
      { name: 'Mei Tanaka', role: 'Software Engineer' },
      { name: 'Zoe Carter', role: 'UI/UX Designer' },
    ],
    githubUrl: 'https://github.com/GenerateNU/alia',
  },
  {
    slug: 'arctic-vision',
    name: 'Arctic Vision',
    teams: ['software', 'hardware'],
    image: Arctic,
    imageKind: 'logo',
    semester: { season: 'Spring', year: 2023 },
    members: [
      { name: 'Julian Reyes', role: 'Project Lead' },
      { name: 'Nadia Petrova', role: 'Technical Lead' },
      { name: 'Sam Whitfield', role: 'Software Engineer' },
      { name: 'Aisha Bello', role: 'Lead Electrical Engineer' },
      { name: 'Lucas Moreau', role: 'Hardware Engineer' },
      { name: 'Emily Zhang', role: 'UI/UX Designer' },
    ],
    githubUrl: 'https://github.com/GenerateNU/arctic-vision',
  },
  {
    slug: 'shownxt',
    name: 'ShowNxt',
    teams: ['software'],
    image: ShowNxt,
    imageKind: 'logo',
    semester: { season: 'Fall', year: 2022 },
    members: [
      { name: 'Olivia Grant', role: 'Project Lead' },
      { name: 'Arjun Mehta', role: 'Technical Lead' },
      { name: 'Ben Larsen', role: 'Software Engineer' },
      { name: 'Fatima Zahra', role: 'Software Engineer' },
      { name: 'Riley Evans', role: 'UI/UX Designer' },
    ],
    githubUrl: 'https://github.com/GenerateNU/shownxt',
  },
  {
    slug: 'hot-date',
    name: 'Hot Date',
    teams: ['hardware'],
    image: HotDate,
    imageKind: 'logo',
    semester: { season: 'Spring', year: 2022 },
    members: [
      { name: 'Carlos Mendes', role: 'Project Lead' },
      { name: 'Ingrid Svensson', role: 'Lead Mechanical Engineer' },
      { name: 'Jamal Wright', role: 'Lead Electrical Engineer' },
      { name: 'Hana Cho', role: 'Hardware Engineer' },
      { name: 'Theo Dubois', role: 'Industrial Designer' },
    ],
    githubUrl: 'https://github.com/GenerateNU/hot-date',
  },
  {
    slug: 'autopasser',
    name: 'Autopasser',
    teams: ['hardware'],
    image: AutoPasser,
    imageKind: 'logo',
    semester: { season: 'Fall', year: 2021 },
    members: [
      { name: 'Elena Popescu', role: 'Project Lead' },
      { name: 'Kofi Asante', role: 'Lead Mechanical Engineer' },
      { name: 'Nora Lindqvist', role: 'Lead Electrical Engineer' },
      { name: 'Diego Herrera', role: 'Hardware Engineer' },
      { name: 'Sarah Goldberg', role: 'Industrial Designer' },
    ],
    githubUrl: 'https://github.com/GenerateNU/autopasser',
  },
];

export const formatSemester = ({ season, year }: Semester): string => `${season} ${year}`;

export const featuredProjects: Project[] = projects.filter(project => project.featured === true);

export const getProjectBySlug = (slug: string | null | undefined): Project | undefined =>
  projects.find(project => project.slug === slug);

export const getProjectLinks = (project: Project): ProjectLink[] => [
  { kind: 'github', label: 'GitHub', url: project.githubUrl },
  ...(project.links ?? []),
];

export const getProjectMedia = (project: Project): ProjectMediaItem[] =>
  project.media !== undefined && project.media.length > 0
    ? project.media
    : [{ kind: 'image', src: project.image, alt: `${project.name} artwork` }];

const getVideos = (project: Project): ProjectVideo[] =>
  getProjectMedia(project).filter((item): item is ProjectVideo => item.kind === 'video');

export const getPreviewVideo = (project: Project): ProjectVideo | undefined => {
  const videos = getVideos(project);

  return videos.find(video => video.role === 'primary') ?? videos[0];
};

export const getHeroVideo = (project: Project): ProjectVideo | undefined =>
  getVideos(project).find(video => video.role === 'hero') ?? getPreviewVideo(project);

export const getAdjacentProjects = (project: Project): AdjacentProjects => {
  const index = projects.indexOf(project);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return { previous: previous ?? project, next: next ?? project };
};

export const groupProjectsByYear = (list: Project[]): ProjectYearGroup[] => {
  const groups = new Map<number, Project[]>();

  for (const project of list) {
    const year = project.semester.year;
    groups.set(year, [...(groups.get(year) ?? []), project]);
  }

  // The tsconfig lib predates `toSorted`; this sorts a fresh copy, so nothing shared is mutated.
  const entries = [...groups.entries()];

  // oxlint-disable-next-line unicorn/no-array-sort
  entries.sort(([a], [b]) => b - a);

  return entries.map(([year, yearProjects]) => ({ year, projects: yearProjects }));
};

export default projects;
