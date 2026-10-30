import type { ProjectTeam } from '@/data/projectData';

type TeamFilterProps = {
  activeTeam: ProjectTeam | null;
  countTeam: (team: ProjectTeam | null) => number;
  onChange: (team: ProjectTeam | null) => void;
};

const options: { label: string; team: ProjectTeam | null }[] = [
  { label: 'All', team: null },
  { label: 'Software', team: 'software' },
  { label: 'Hardware', team: 'hardware' },
];

export default function TeamFilter({ activeTeam, countTeam, onChange }: TeamFilterProps) {
  return (
    <fieldset className="pp3-filter">
      <legend className="pp3-sr-only">Filter projects by discipline</legend>
      {options.map(option => (
        <button
          key={option.label}
          type="button"
          className="pp3-chip"
          aria-pressed={activeTeam === option.team}
          onClick={() => onChange(option.team)}
        >
          {option.label} <span className="pp3-chip-count">{countTeam(option.team)}</span>
        </button>
      ))}
    </fieldset>
  );
}
