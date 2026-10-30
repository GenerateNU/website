import type { ProjectTeam } from '@/data/projectData';

import { useExperience } from './experience/experience';

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

// V9's discipline filter, with a spark and a blip on each press.
export default function ModeSelect({ team, countFor, onChange }: ModeSelectProps) {
  const { sfx } = useExperience();

  return (
    <fieldset className="pp9-modes">
      <legend className="pp9-sr-only">Show projects by discipline</legend>
      {modes.map(mode => (
        <button
          key={mode.label}
          type="button"
          className="pp9-mode"
          aria-pressed={team === mode.team}
          data-spark
          onClick={() => {
            sfx('select');
            onChange(mode.team);
          }}
        >
          {mode.label} <span className="pp9-mode-count">{countFor(mode.team)}</span>
        </button>
      ))}
    </fieldset>
  );
}
