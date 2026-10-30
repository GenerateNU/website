import './style.css';
import '../TeamTag/style.css';
import { projectTeams } from '@/data/projectData';
import type { ProjectTeam } from '@/data/projectData';

type ProjectFiltersProps = {
  activeTeam: ProjectTeam | null;
  teamCounts: Record<ProjectTeam, number>;
  totalCount: number;
  query: string;
  onTeamChange: (team: ProjectTeam | null) => void;
  onQueryChange: (query: string) => void;
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
    <button type="button" className={`pp-chip ${active ? 'is-active' : ''}`} aria-pressed={active} onClick={onClick}>
      {team && <span className={`pp-team-swatch pp-team-swatch--${team}`} aria-hidden="true" />}
      {label}
      <span className="pp-chip-count">{count}</span>
    </button>
  );
}

export default function ProjectFilters({
  activeTeam,
  teamCounts,
  totalCount,
  query,
  onTeamChange,
  onQueryChange,
}: ProjectFiltersProps) {
  return (
    <div className="pp-toolbar">
      <fieldset className="pp-chips">
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
      <label className="pp-search">
        <span className="visually-hidden">Search projects</span>
        <svg className="pp-search-icon" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m15.5 15.5 5 5" />
        </svg>
        <input
          type="search"
          placeholder="Search projects"
          value={query}
          onChange={event => onQueryChange(event.target.value)}
        />
      </label>
    </div>
  );
}
