import './style.css';
import { useState } from 'react';

import Alia from '@/assets/images/projectspage/alia.svg';
import Arctic from '@/assets/images/projectspage/arctic.svg';
import AutoPasser from '@/assets/images/projectspage/autopasser.svg';
import CineCircle from '@/assets/images/projectspage/cinecircle.png';
import Earnz from '@/assets/images/projectspage/earnz.svg';
import HotDate from '@/assets/images/projectspage/hotdate.svg';
import InsideAthletics from '@/assets/images/projectspage/insideathletics.png';
import Jurni from '@/assets/images/projectspage/jurni.svg';
import Karp from '@/assets/images/projectspage/karp.png';
import Prisere from '@/assets/images/projectspage/prisere.png';
import SelfServe from '@/assets/images/projectspage/selfserve.png';
import ShowNxt from '@/assets/images/projectspage/shownxt.svg';
import SkillSpark from '@/assets/images/projectspage/skillspark.png';
import SmartyPill from '@/assets/images/projectspage/smartypill.svg';
import SpecialStandard from '@/assets/images/projectspage/specialstandard.png';
import Toggo from '@/assets/images/projectspage/toggo.svg';
import featuredProjects, { popupOnlyProjects } from '@/data/featuredProjectData';
import type { FeaturedProject } from '@/data/featuredProjectData';

import { archiveSections, placeholderImages } from './archiveSections';
import Project from './Project/Project';
import type { ProjectTeam } from './Project/Project';
import ProjectPopup from './ProjectPopup';

type SearchBarProps = {
  setSearchQuery: (query: string) => void;
};

type ProjectSummary = {
  name: string;
  image: string;
  teams: ProjectTeam[];
  padding?: number;
  background?: string;
  fit?: 'cover';
};

type ProjectSection = {
  label: string;
  projects: ProjectSummary[];
};

const SearchBar = ({ setSearchQuery }: SearchBarProps) => (
  <input
    className="search-bar search-icon"
    placeholder="Search..."
    style={{
      border: '1px #D9D9D9 solid',
    }}
    onChange={e => setSearchQuery(e.target.value)}
  />
);

const sections: ProjectSection[] = [
  {
    label: 'Spring 2026',
    projects: [
      {
        name: 'SkillSpark',
        image: SkillSpark,
        teams: ['software'],
      },
      {
        name: 'Toggo',
        image: Toggo,
        teams: ['software'],
      },
      {
        name: 'SelfServe',
        image: SelfServe,
        teams: ['software'],
      },
      {
        name: 'Inside Athletics',
        image: InsideAthletics,
        teams: ['software'],
      },
    ],
  },
  {
    label: 'Fall 2025',
    projects: [
      {
        name: 'Prisere',
        image: Prisere,
        teams: ['software'],
      },
      {
        name: 'The Special Standard',
        image: SpecialStandard,
        teams: ['software'],
      },
      {
        name: 'CineCircle',
        image: CineCircle,
        teams: ['software'],
      },
      {
        name: 'Karp',
        image: Karp,
        teams: ['software'],
      },
    ],
  },
  {
    label: 'Spring 2022',
    projects: [
      {
        name: 'ShowNxt',
        image: ShowNxt,
        teams: ['software'],
      },
      {
        name: 'Arctic Vision',
        image: Arctic,
        teams: ['software', 'hardware'],
      },
    ],
  },
  {
    label: 'Fall 2022',
    projects: [
      {
        name: 'Alia',
        image: Alia,
        teams: ['software'],
      },
      {
        name: 'Jurni',
        image: Jurni,
        teams: ['software'],
      },
      {
        name: 'Hot Date',
        image: HotDate,
        teams: ['hardware'],
      },
      {
        name: 'Autopasser',
        image: AutoPasser,
        teams: ['hardware'],
      },
    ],
  },
  {
    label: 'PREVIOUS',
    projects: [
      {
        name: 'Earnz',
        image: Earnz,
        teams: ['software'],
      },
      {
        name: 'SmartyPill',
        image: SmartyPill,
        teams: ['software', 'hardware'],
      },
    ],
  },
];

// Merge sections with the same label, keeping the first-seen order.
const mergeSections = (list: ProjectSection[]): ProjectSection[] => {
  const byLabel = new Map<string, ProjectSection>();

  for (const section of list) {
    const existing = byLabel.get(section.label);

    if (existing) {
      existing.projects = [...existing.projects, ...section.projects];
    } else {
      byLabel.set(section.label, { label: section.label, projects: [...section.projects] });
    }
  }

  return [...byLabel.values()];
};

// Newest first. PREVIOUS is for projects without a confirmed semester.
const LABEL_ORDER = [
  'Spring 2026',
  'Fall 2025',
  'Spring 2025',
  'Fall 2024',
  'Spring 2024',
  'Fall 2023',
  'Spring 2023',
  'Spring 2022',
  'Fall 2022',
  'PREVIOUS',
];

const mergedSections = mergeSections([
  ...sections.filter(section => section.label !== ''),
  ...archiveSections,
  ...sections.filter(section => section.label === ''),
]);

const allSections = LABEL_ORDER.flatMap(label => mergedSections.filter(section => section.label === label));

// Each project goes under one branch in its semester: Software, then Hardware, then Data.
// A project tagged with both Software and Hardware is grouped under Software.
const BRANCH_ORDER: ProjectTeam[] = ['software', 'hardware', 'data', 'games'];

const branchOf = (teams: ProjectTeam[]): ProjectTeam =>
  BRANCH_ORDER.find(branch => teams.includes(branch)) ?? 'software';

const featuredByName = new Map([...featuredProjects, ...popupOnlyProjects].map(project => [project.name, project]));

const renderProject = (project: ProjectSummary, onSelect: (featured: FeaturedProject) => void) => {
  const featured = featuredByName.get(project.name);

  return (
    <Project
      key={project.name}
      name={project.name}
      image={project.image}
      teams={project.teams}
      padding={project.padding}
      background={project.background}
      fit={project.fit}
      onSelect={featured && (() => onSelect(featured))}
    />
  );
};

// Filter chips. Hardware and Software match the team SVG colours in the repo.
// Games and Data colours are provisional, and no project is tagged with them yet.
const BRANCH_CHIPS: { key: ProjectTeam | 'games' | 'data'; label: string; color: string; on: string }[] = [
  { key: 'hardware', label: 'Hardware', color: '#FF6660', on: '#FFFFFF' },
  { key: 'software', label: 'Software', color: '#187DFF', on: '#FFFFFF' },
  { key: 'games', label: 'Games', color: '#FFBF3C', on: '#111111' },
  { key: 'data', label: 'Data', color: '#6FCF97', on: '#111111' },
];

type BranchChipKey = (typeof BRANCH_CHIPS)[number]['key'];

export default function AllProjects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeBranches, setActiveBranches] = useState<BranchChipKey[]>([]);
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);

  const toggleBranch = (key: BranchChipKey) =>
    setActiveBranches(current => (current.includes(key) ? current.filter(k => k !== key) : [...current, key]));

  const matchesSearch = (project: ProjectSummary) => project.name.toLowerCase().includes(searchQuery.toLowerCase());

  const matchesBranch = (project: ProjectSummary) =>
    activeBranches.length === 0 || project.teams.some(team => activeBranches.includes(team));

  const visibleSections = allSections.flatMap(section => {
    const projects = section.projects.filter(p => matchesSearch(p) && matchesBranch(p));

    return projects.length > 0 ? [{ ...section, projects }] : [];
  });

  return (
    <div className="all-projects-container">
      <div className="all-projects-header">
        <h1 className="projects-title">All Projects</h1>
      </div>
      <div className="search-row">
        <div className="search-bar">
          <SearchBar setSearchQuery={setSearchQuery} />
        </div>
        <div className="filter-chips">
          {BRANCH_CHIPS.map(chip => {
            const active = activeBranches.includes(chip.key);

            return (
              <button
                key={chip.key}
                type="button"
                className={`filter-chip filter-chip-${chip.key}${active ? ' is-active' : ''}`}
                aria-pressed={active}
                onClick={() => toggleBranch(chip.key)}
              >
                {chip.label}
              </button>
            );
          })}
        </div>
      </div>
      {visibleSections.map(section => (
        <div key={section.label} className="projects-section">
          <p className="projects-section-label">{section.label}</p>
          <div className="all-projects">
            {BRANCH_ORDER.flatMap(branch => {
              const inBranch = section.projects.filter(project => branchOf(project.teams) === branch);
              const withLogo = inBranch.filter(project => !placeholderImages.includes(project.image));
              const withPlaceholder = inBranch.filter(project => placeholderImages.includes(project.image));

              return [...withLogo, ...withPlaceholder].map(project => renderProject(project, setSelectedProject));
            })}
          </div>
        </div>
      ))}
      {selectedProject && <ProjectPopup project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
}
