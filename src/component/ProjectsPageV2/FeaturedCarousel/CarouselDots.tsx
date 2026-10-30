import type { Project } from '@/data/projectData';

type CarouselDotsProps = {
  projects: Project[];
  activeIndex: number;
  rotating: boolean;
  onSelect: (index: number) => void;
};

// The active dot fills up over the rotation interval; when the fill finishes, the carousel advances.
// The CSS animation is the timer, so hovering or focusing the carousel pauses it with no JS timers.
export default function CarouselDots({ projects, activeIndex, rotating, onSelect }: CarouselDotsProps) {
  return (
    <div className="pp2-dots">
      {projects.map((project, index) => (
        <button
          key={project.slug}
          type="button"
          className={`pp2-dot ${index === activeIndex ? 'is-active' : ''}`}
          aria-label={`Show ${project.name}`}
          aria-current={index === activeIndex}
          onClick={() => onSelect(index)}
        >
          {rotating && index === activeIndex && (
            <span className="pp2-dot-progress" aria-hidden="true" onAnimationEnd={() => onSelect(index + 1)} />
          )}
        </button>
      ))}
    </div>
  );
}
