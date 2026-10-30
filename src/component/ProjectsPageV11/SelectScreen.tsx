import { useState } from 'react';

import ModeSelect from '@/component/ProjectsPageV9/ModeSelect';
import projects from '@/data/projectData';
import type { Project, ProjectTeam } from '@/data/projectData';

import ProjectGrid from './ProjectGrid';

type SelectScreenProps = {
  basePath: string;
};

// Every project, featured ones first, so the full roster is always one scroll away from the attract screen.
const roster: Project[] = [
  ...projects.filter(project => project.featured === true),
  ...projects.filter(project => project.featured !== true),
];

const matchesTeam = (project: Project, team: ProjectTeam | null): boolean =>
  team === null || project.teams.includes(team);

export default function SelectScreen({ basePath }: SelectScreenProps) {
  const [team, setTeam] = useState<ProjectTeam | null>(null);
  const [cursor, setCursor] = useState(0);
  const visibleProjects = roster.filter(project => matchesTeam(project, team));

  const changeTeam = (next: ProjectTeam | null): void => {
    setTeam(next);
    setCursor(0);
  };

  return (
    <section className="pp9-select pp11-select" aria-labelledby="pp11-select-heading">
      <div className="pp9-select-head">
        <h2 id="pp11-select-heading" className="pp9-label">
          Select a project
        </h2>
        <ModeSelect
          team={team}
          countFor={option => roster.filter(project => matchesTeam(project, option)).length}
          onChange={changeTeam}
        />
      </div>
      <ProjectGrid projects={visibleProjects} cursor={cursor} basePath={basePath} onCursorChange={setCursor} />
    </section>
  );
}
