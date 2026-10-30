import './style.css';
import '../TeamTag/style.css';
import { projectTeams } from '@/data/projectData';
import type { ProjectTeam } from '@/data/projectData';

type ProjectFiltersProps = {
  activeTeam: ProjectTeam | null;
  teamCounts: Record<ProjectTeam, number>;
  totalCount: number;
  onTeamChange: (team: ProjectTeam | null) => void;
};

type FilterChipProps = {
  label: string;
  count: number;
  active: boolean;
  team?: ProjectTeam;
  onClick: () => void;
};

function FilterChip({ label, count, active, team, onClick }: FilterChipProps) {
  return (
    <button type="button" className={`pp2-chip ${active ? 'is-active' : ''}`} aria-pressed={active} onClick={onClick}>
      {team && <span className={`pp2-team-swatch pp2-team-swatch--${team}`} aria-hidden="true" />}
      {label}
      <span className="pp2-chip-count">{count}</span>
    </button>
  );
}

export default function ProjectFilters({ activeTeam, teamCounts, totalCount, onTeamChange }: ProjectFiltersProps) {
  return (
    <div className="pp2-toolbar">
      <fieldset className="pp2-chips">
        <legend className="visually-hidden">Filter projects by team</legend>
        <FilterChip label="All" count={totalCount} active={activeTeam === null} onClick={() => onTeamChange(null)} />
        {projectTeams.map(team => (
          <FilterChip
            key={team}
            label={team}
            team={team}
            count={teamCounts[team]}
            active={activeTeam === team}
            onClick={() => onTeamChange(team)}
          />
        ))}
      </fieldset>
    </div>
  );
}
