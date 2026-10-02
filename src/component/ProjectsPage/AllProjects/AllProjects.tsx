import './style.css';
import { useState } from 'react';

import Alia from '@/assets/images/projectspage/alia.svg';
import Arctic from '@/assets/images/projectspage/arctic.svg';
import AutoPasser from '@/assets/images/projectspage/autopasser.svg';
import HotDate from '@/assets/images/projectspage/hotdate.svg';
import Jurni from '@/assets/images/projectspage/jurni.svg';
import ShowNxt from '@/assets/images/projectspage/shownxt.svg';
import toPairs from '@/shared/toPairs';

import Project from './Project/Project';
import type { ProjectTeam } from './Project/Project';

type SearchBarProps = {
  setSearchQuery: (query: string) => void;
};

type ProjectSummary = {
  name: string;
  image: string;
  teams: ProjectTeam[];
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

const filterData = (query: string, data: string[]): string[] => {
  if (!query) {
    return data;
  } else {
    return data.filter(d => d.toLowerCase().includes(query));
  }
};

const projects: ProjectSummary[] = [
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
];

export default function AllProjects() {
  const [searchQuery, setSearchQuery] = useState('');

  const dataFiltered = filterData(
    searchQuery,
    projects.map(p => p.name)
  );

  const generateGrid = () => {
    const filteredProjects = projects.filter(p => dataFiltered.includes(p.name));

    return toPairs(filteredProjects).map(([first, second]) => (
      <div key={first.name} className="project-col">
        <Project name={first.name} image={first.image} teams={first.teams} />
        {second ? <Project name={second.name} image={second.image} teams={second.teams} /> : <div></div>}
      </div>
    ));
  };

  return (
    <div className="all-projects-container" style={{ width: Math.ceil(projects.length / 2) * 500 + 200 }}>
      <div className="all-projects-header">
        <h1 className="projects-title">All Projects</h1>
      </div>
      <div className="search-bar">
        <SearchBar setSearchQuery={setSearchQuery} />
      </div>
      <div className="all-projects">{generateGrid()}</div>
    </div>
  );
}
