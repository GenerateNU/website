import { useState } from 'react';

import projects from '@/data/projectData';
import type { Project, ProjectTeam } from '@/data/projectData';

import ControlsHint from './ControlsHint';
import Hud from './Hud';
import ModeSelect from './ModeSelect';
import PreviewScreen from './PreviewScreen';
import ProjectGrid from './ProjectGrid';

type SelectScreenProps = {
  basePath: string;
};

// Featured projects come first, so the cursor starts on one with something to watch.
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
  const selected = visibleProjects[cursor] ?? visibleProjects[0];

  const changeTeam = (next: ProjectTeam | null): void => {
    setTeam(next);
    setCursor(0);
  };

  return (
    <main className="pp9-screen">
      <Hud projectCount={roster.length} />
      <div className="pp9-stage">
        {selected && <PreviewScreen project={selected} basePath={basePath} />}
        <section className="pp9-select" aria-labelledby="pp9-select-heading">
          <div className="pp9-select-head">
            <h2 id="pp9-select-heading" className="pp9-label">
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
      </div>
      <ControlsHint />
    </main>
  );
}
