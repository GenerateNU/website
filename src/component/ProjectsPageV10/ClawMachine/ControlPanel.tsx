type ControlPanelProps = {
  targetName: string;
  disabled: boolean;
  onLeft: () => void;
  onRight: () => void;
  onDrop: () => void;
};

export default function ControlPanel({ targetName, disabled, onLeft, onRight, onDrop }: ControlPanelProps) {
  return (
    <div className="pp10-panel">
      <div className="pp10-stick">
        <button
          type="button"
          className="pp10-nudge"
          aria-label="Move the claw left"
          disabled={disabled}
          onClick={onLeft}
        >
          <span aria-hidden="true">◀</span>
        </button>
        <span className="pp10-joystick" aria-hidden="true" />
        <button
          type="button"
          className="pp10-nudge"
          aria-label="Move the claw right"
          disabled={disabled}
          onClick={onRight}
        >
          <span aria-hidden="true">▶</span>
        </button>
      </div>
      <p className="pp10-coin" aria-hidden="true">
        <span className="pp10-coin-slot" />
        Free play
      </p>
      <button
        type="button"
        className="pp10-drop"
        aria-label={`Drop the claw on ${targetName}`}
        disabled={disabled}
        onClick={onDrop}
      >
        Drop
      </button>
    </div>
  );
}
