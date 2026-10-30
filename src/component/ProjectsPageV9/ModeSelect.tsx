import type { ProjectTeam } from '@/data/projectData';

type ModeSelectProps = {
  team: ProjectTeam | null;
  countFor: (team: ProjectTeam | null) => number;
  onChange: (team: ProjectTeam | null) => void;
};

const modes: { label: string; team: ProjectTeam | null }[] = [
  { label: 'All', team: null },
  { label: 'Software', team: 'software' },
  { label: 'Hardware', team: 'hardware' },
];

export default function ModeSelect({ team, countFor, onChange }: ModeSelectProps) {
  return (
    <fieldset className="pp9-modes">
      <legend className="pp9-sr-only">Show projects by discipline</legend>
      {modes.map(mode => (
        <button
          key={mode.label}
          type="button"
          className="pp9-mode"
          aria-pressed={team === mode.team}
          onClick={() => onChange(mode.team)}
        >
          {mode.label} <span className="pp9-mode-count">{countFor(mode.team)}</span>
        </button>
      ))}
    </fieldset>
  );
}
