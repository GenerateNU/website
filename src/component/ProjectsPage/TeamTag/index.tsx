import './style.css';
import type { ProjectTeam } from '@/data/projectData';

type TeamTagProps = {
  team: ProjectTeam;
};

export default function TeamTag({ team }: TeamTagProps) {
  return (
    <span className="pp-tag">
      <span className={`pp-team-swatch pp-team-swatch--${team}`} aria-hidden="true" />
      {team}
    </span>
  );
}
