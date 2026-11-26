import type { ProjectTeam } from '@/data/projectData';

type FilterBarProps = {
  team: ProjectTeam | null;
  countFor: (team: ProjectTeam | null) => number;
  onChange: (team: ProjectTeam | null) => void;
};

const options: { label: string; team: ProjectTeam | null }[] = [
  { label: 'All', team: null },
  { label: 'Software', team: 'software' },
  { label: 'Hardware', team: 'hardware' },
];

// A segmented control: which disciplines the grid shows, with how many projects each has.
export default function FilterBar({ team, countFor, onChange }: FilterBarProps) {
  return (
    <fieldset className="pp21-filter">
      <legend className="pp21-sr-only">Show projects by discipline</legend>
      {options.map(option => (
        <button
          key={option.label}
          type="button"
          className="pp21-filter-option"
          aria-pressed={team === option.team}
          onClick={() => onChange(option.team)}
        >
          {option.team && <span className={`pp21-swatch pp21-swatch--${option.team}`} aria-hidden="true" />}
          {option.label} <span className="pp21-filter-count">{countFor(option.team)}</span>
        </button>
      ))}
    </fieldset>
  );
}
