// The button legend under an arcade screen, worded for whatever the visitor is holding.
export default function ControlsHint() {
  return (
    <div className="pp9-controls">
      <p className="pp9-controls-line pp9-controls-line--pointer">
        <span className="pp9-controls-group">
          <kbd>←</kbd>
          <kbd>↑</kbd>
          <kbd>↓</kbd>
          <kbd>→</kbd> Move
        </span>
        <span className="pp9-controls-group">
          <kbd>Enter</kbd> Start
        </span>
        <span className="pp9-controls-group">Or point and click</span>
      </p>
      <p className="pp9-controls-line pp9-controls-line--touch">Tap a project to start</p>
    </div>
  );
}
