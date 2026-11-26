type PauseButtonProps = {
  paused: boolean;
  onToggle: () => void;
};

// Stops the preview video, the only thing on the page that moves on its own.
export default function PauseButton({ paused, onToggle }: PauseButtonProps) {
  return (
    <button type="button" className="pp20-pause" onClick={onToggle}>
      <span aria-hidden="true">{paused ? '▶' : '❚❚'}</span> {paused ? 'Play video' : 'Pause video'}
    </button>
  );
}
