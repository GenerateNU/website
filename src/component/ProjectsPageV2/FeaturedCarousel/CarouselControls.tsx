type CarouselControlsProps = {
  activeIndex: number;
  total: number;
  rotating: boolean;
  canRotate: boolean;
  onToggleRotation: () => void;
  onGoTo: (index: number) => void;
};

export default function CarouselControls({
  activeIndex,
  total,
  rotating,
  canRotate,
  onToggleRotation,
  onGoTo,
}: CarouselControlsProps) {
  return (
    <div className="pp2-carousel-controls">
      {/* WCAG 2.2.2: anything that moves on its own needs a visible way to stop it. Labelled in words, not just an icon. */}
      {canRotate && (
        <button type="button" className="pp2-arrow pp2-carousel-toggle" onClick={onToggleRotation}>
          <span aria-hidden="true">{rotating ? '❚❚' : '▶'}</span>
          {rotating ? 'Pause' : 'Play'}
          <span className="visually-hidden"> slideshow</span>
        </button>
      )}
      <span className="pp2-carousel-counter">
        {activeIndex + 1} / {total}
      </span>
      <button type="button" className="pp2-arrow" aria-label="Previous project" onClick={() => onGoTo(activeIndex - 1)}>
        <span aria-hidden="true">←</span>
      </button>
      <button type="button" className="pp2-arrow" aria-label="Next project" onClick={() => onGoTo(activeIndex + 1)}>
        <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}
