import './style.css';
import type { ProjectTeam } from '@/data/projectData';

type TeamTagProps = {
  team: ProjectTeam;
};

export default function TeamTag({ team }: TeamTagProps) {
  return (
    <span className="pp3-tag">
      <span className={`pp3-team-swatch pp3-team-swatch--${team}`} aria-hidden="true" />
      {team}
    </span>
  );
}
