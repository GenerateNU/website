import './style.css';
import { useState } from 'react';

import Alia from '@/assets/images/projectspage/alia.svg';
import Arctic from '@/assets/images/projectspage/arctic.svg';
import AutoPasser from '@/assets/images/projectspage/autopasser.svg';
import Earnz from '@/assets/images/projectspage/earnz.svg';
import HotDate from '@/assets/images/projectspage/hotdate.svg';
import InsideAthletics from '@/assets/images/projectspage/insideathletics.png';
import Jurni from '@/assets/images/projectspage/jurni.svg';
import SelfServe from '@/assets/images/projectspage/selfserve.png';
import ShowNxt from '@/assets/images/projectspage/shownxt.svg';
import SkillSpark from '@/assets/images/projectspage/skillspark.png';
import SmartyPill from '@/assets/images/projectspage/smartypill.svg';
import Toggo from '@/assets/images/projectspage/toggo.svg';
import featuredProjects from '@/data/featuredProjectData';
import type { FeaturedProject } from '@/data/featuredProjectData';
import toPairs from '@/shared/toPairs';

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
    label: '',
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
      {
        name: 'Jurni',
        image: Jurni,
        teams: ['software'],
      },
      {
        name: 'Alia',
        image: Alia,
        teams: ['software'],
      },
      {
        name: 'Arctic Vision',
        image: Arctic,
        teams: ['software', 'hardware'],
      },
      {
        name: 'ShowNxt',
        image: ShowNxt,
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
];

const featuredByName = new Map(featuredProjects.map(project => [project.name, project]));

const renderProject = (project: ProjectSummary, onSelect: (featured: FeaturedProject) => void) => {
  const featured = featuredByName.get(project.name);

  return (
    <Project
      name={project.name}
      image={project.image}
      teams={project.teams}
      onSelect={featured && (() => onSelect(featured))}
    />
  );
};

const generateGrid = (projects: ProjectSummary[], onSelect: (featured: FeaturedProject) => void) =>
  toPairs(projects).map(([first, second]) => (
    <div key={first.name} className="project-col">
      {renderProject(first, onSelect)}
      {second ? renderProject(second, onSelect) : <div></div>}
    </div>
  ));

export default function AllProjects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);

  const matchesSearch = (project: ProjectSummary) => project.name.toLowerCase().includes(searchQuery.toLowerCase());

  const visibleSections = sections.flatMap(section => {
    const projects = section.projects.filter(matchesSearch);

    return projects.length > 0 ? [{ ...section, projects }] : [];
  });

  return (
    <div className="all-projects-container">
      <div className="all-projects-header">
        <h1 className="projects-title">All Projects</h1>
      </div>
      <div className="search-bar">
        <SearchBar setSearchQuery={setSearchQuery} />
      </div>
      {visibleSections.map(section => (
        <div key={section.label} className="projects-section">
          <p className="projects-section-label">{section.label}</p>
          <div className="all-projects">{generateGrid(section.projects, setSelectedProject)}</div>
        </div>
      ))}
      {selectedProject && <ProjectPopup project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
}
