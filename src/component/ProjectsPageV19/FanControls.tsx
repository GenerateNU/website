type FanControlsProps = {
  position: number;
  total: number;
  frontName: string;
  onPrevious: () => void;
  onNext: () => void;
  onOpen: () => void;
};

// The fan's buttons, in plain words, for anyone who would rather not drag. "Open project" is here too,
// so opening the front card never needs a flip first.
export default function FanControls({ position, total, frontName, onPrevious, onNext, onOpen }: FanControlsProps) {
  return (
    <div className="pp19-controls">
      <div className="pp19-controls-group">
        <button type="button" className="pp19-control" onClick={onPrevious}>
          <span aria-hidden="true">←</span> Previous
        </button>
        <p className="pp19-count">
          Card {position} of {total}
        </p>
        <button type="button" className="pp19-control" onClick={onNext}>
          Next <span aria-hidden="true">→</span>
        </button>
      </div>
      <button type="button" className="pp19-control pp19-control--main" onClick={onOpen}>
        Open project<span className="pp19-sr-only">: {frontName}</span>
      </button>
    </div>
  );
}
