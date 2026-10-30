import { useExperience } from '../experience/experience';

type CabinetControlsProps = {
  // Only offered when something on the page would otherwise move on its own.
  showPause: boolean;
};

// Plain words on both buttons, so nobody has to decode an icon to find them.
export default function CabinetControls({ showPause }: CabinetControlsProps) {
  const { paused, setPaused, sound, setSound } = useExperience();

  return (
    <div className="pp12-controls-row">
      <button type="button" className="pp12-cabinet-button" data-spark onClick={() => setSound(!sound)}>
        <span aria-hidden="true">♪</span> Sound: {sound ? 'on' : 'off'}
      </button>
      {showPause && (
        <button type="button" className="pp12-cabinet-button" data-spark onClick={() => setPaused(!paused)}>
          <span aria-hidden="true">{paused ? '▶' : '❚❚'}</span> {paused ? 'Play' : 'Pause'}
        </button>
      )}
    </div>
  );
}
