import './style.css';
import type { ProjectTeam } from '@/data/projectData';

type TeamTagProps = {
  team: ProjectTeam;
};

export default function TeamTag({ team }: TeamTagProps) {
  return (
    <span className="pp4-tag">
      <span className={`pp4-team-swatch pp4-team-swatch--${team}`} aria-hidden="true" />
      {team}
    </span>
  );
}
