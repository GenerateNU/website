import './style.css';
import type { ProjectTeam } from '@/data/projectData';

type TeamTagProps = {
  team: ProjectTeam;
};

export default function TeamTag({ team }: TeamTagProps) {
  return (
    <span className="pp2-tag">
      <span className={`pp2-team-swatch pp2-team-swatch--${team}`} aria-hidden="true" />
      {team}
    </span>
  );
}
