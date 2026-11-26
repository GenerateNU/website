type StackControlsProps = {
  showPause: boolean;
  paused: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onTogglePause: () => void;
};

// Plain-worded buttons for everyone who would rather not drag: previous, next, and one Pause for
// everything that moves on its own.
export default function StackControls({ showPause, paused, onPrevious, onNext, onTogglePause }: StackControlsProps) {
  return (
    <div className="pp17-controls">
      <button type="button" className="pp17-button" onClick={onPrevious}>
        <span aria-hidden="true">←</span> Previous sheet
      </button>
      <button type="button" className="pp17-button" onClick={onNext}>
        Next sheet <span aria-hidden="true">→</span>
      </button>
      {showPause && (
        <button type="button" className="pp17-button" onClick={onTogglePause}>
          <span aria-hidden="true">{paused ? '▶' : '❚❚'}</span> {paused ? 'Play' : 'Pause'}
        </button>
      )}
    </div>
  );
}
