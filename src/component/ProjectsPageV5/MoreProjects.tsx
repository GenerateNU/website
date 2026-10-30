import { useState } from 'react';

import projects from '@/data/projectData';
import type { Project, ProjectTeam } from '@/data/projectData';

import ProjectGrid from './ProjectGrid';

const moreProjects = projects.filter(project => project.featured !== true);

const matchesTeam = (project: Project, team: ProjectTeam | null): boolean =>
  team === null || project.teams.includes(team);

const countTeam = (team: ProjectTeam | null): number =>
  moreProjects.filter(project => matchesTeam(project, team)).length;

const filterOptions: { label: string; team: ProjectTeam | null }[] = [
  { label: 'All', team: null },
  { label: 'Software', team: 'software' },
  { label: 'Hardware', team: 'hardware' },
];

type TeamFilterProps = {
  activeTeam: ProjectTeam | null;
  onChange: (team: ProjectTeam | null) => void;
};

function TeamFilter({ activeTeam, onChange }: TeamFilterProps) {
  return (
    <fieldset className="pp5-filter">
      <legend className="pp5-sr-only">Filter projects by discipline</legend>
      {filterOptions.map(option => (
        <button
          key={option.label}
          type="button"
          className="pp5-chip"
          aria-pressed={activeTeam === option.team}
          onClick={() => onChange(option.team)}
        >
          {option.label} <span className="pp5-chip-count">{countTeam(option.team)}</span>
        </button>
      ))}
    </fieldset>
  );
}

type MoreProjectsProps = {
  basePath: string;
};

// Every project that isn't featured, in large tiles with a discipline filter.
export default function MoreProjects({ basePath }: MoreProjectsProps) {
  const [activeTeam, setActiveTeam] = useState<ProjectTeam | null>(null);
  const visibleProjects = moreProjects.filter(entry => matchesTeam(entry, activeTeam));

  return (
    <section className="pp5-section" aria-labelledby="pp5-more-heading">
      <div className="pp5-section-header">
        <h2 id="pp5-more-heading" className="pp5-section-heading">
          More projects
        </h2>
      </div>
      <TeamFilter activeTeam={activeTeam} onChange={setActiveTeam} />
      <ProjectGrid projects={visibleProjects} basePath={basePath} />
    </section>
  );
}
