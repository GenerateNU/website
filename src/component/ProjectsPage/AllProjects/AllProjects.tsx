import './style.css';
import { useState } from 'react';

import placeholderData from '@/assets/images/projectspage/archive/baked/placeholderData.svg';
import placeholderHardware from '@/assets/images/projectspage/archive/baked/placeholderHardware.svg';
import placeholderSoftware from '@/assets/images/projectspage/archive/baked/placeholderSoftware.svg';
import featuredProjects, { popupOnlyProjects } from '@/data/featuredProjectData';
import type { FeaturedProject } from '@/data/featuredProjectData';
import { type ProjectData, useProjects } from '@/services/projects';

import Project from './Project/Project';
import type { ProjectTeam } from './Project/Project';
import ProjectPopup from './ProjectPopup';

type SearchBarProps = {
  setSearchQuery: (query: string) => void;
};

type ProjectSummary = {
  name: string;
  // The project's logo, or the branch placeholder when it has none.
  image: string;
  hasLogo: boolean;
  teams: ProjectTeam[];
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

// Newest first. Projects without a semester go under PREVIOUS.
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

// Each project goes under one branch in its semester: Software, then Hardware, then Data, then Games.
// A project tagged with both Software and Hardware is grouped under Software.
const BRANCH_ORDER: ProjectTeam[] = ['software', 'hardware', 'data', 'games'];

const branchOf = (teams: ProjectTeam[]): ProjectTeam =>
  BRANCH_ORDER.find(branch => teams.includes(branch)) ?? 'software';

const placeholderFor: Record<ProjectTeam, string> = {
  software: placeholderSoftware,
  hardware: placeholderHardware,
  data: placeholderData,
  games: placeholderSoftware,
};

const toSummary = (project: ProjectData): ProjectSummary => {
  const teams: ProjectTeam[] = project.teams.length > 0 ? project.teams : ['software'];

  return {
    name: project.name,
    image: project.image ?? placeholderFor[branchOf(teams)],
    hasLogo: project.image !== undefined,
    teams,
  };
};

const buildSections = (projects: ProjectData[]): ProjectSection[] => {
  const byLabel = new Map<string, ProjectSummary[]>();

  for (const project of projects) {
    const label = project.semester && LABEL_ORDER.includes(project.semester) ? project.semester : 'PREVIOUS';
    byLabel.set(label, [...(byLabel.get(label) ?? []), toSummary(project)]);
  }

  return LABEL_ORDER.flatMap(label => {
    const summaries = byLabel.get(label);

    return summaries ? [{ label, projects: summaries }] : [];
  });
};

const featuredByName = new Map([...featuredProjects, ...popupOnlyProjects].map(project => [project.name, project]));

const renderProject = (project: ProjectSummary, onSelect: (featured: FeaturedProject) => void) => {
  const featured = featuredByName.get(project.name);

  return (
    <Project
      key={project.name}
      name={project.name}
      image={project.image}
      teams={project.teams}
      padding={0}
      onSelect={featured && (() => onSelect(featured))}
    />
  );
};

// Filter chips. Hardware and Software match the team SVG colours in the repo.
// Games and Data colours are provisional, and no project is tagged with them yet.
const BRANCH_CHIPS: { key: ProjectTeam; label: string }[] = [
  { key: 'hardware', label: 'Hardware' },
  { key: 'software', label: 'Software' },
  { key: 'games', label: 'Games' },
  { key: 'data', label: 'Data' },
];

type BranchChipKey = (typeof BRANCH_CHIPS)[number]['key'];

export default function AllProjects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeBranches, setActiveBranches] = useState<BranchChipKey[]>([]);
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);
  const allSections = buildSections(useProjects());

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
              const withLogo = inBranch.filter(project => project.hasLogo);
              const withPlaceholder = inBranch.filter(project => !project.hasLogo);

              return [...withLogo, ...withPlaceholder].map(project => renderProject(project, setSelectedProject));
            })}
          </div>
        </div>
      ))}
      {selectedProject && <ProjectPopup project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
}
