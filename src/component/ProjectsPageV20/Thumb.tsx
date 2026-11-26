import type { Project } from '@/data/projectData';

type ThumbProps = {
  project: Project;
  className?: string;
};

// The project picture as phrasing content, so it can sit inside a button. Mockups are transparent PNGs
// and get a panel behind them; logos are full-bleed artwork.
export default function Thumb({ project, className = '' }: ThumbProps) {
  return (
    <span className={`pp20-thumb pp20-thumb--${project.imageKind} ${className}`}>
      {/* The project name is always next to the picture, so the picture itself is decorative. */}
      <img src={project.image} alt="" loading="lazy" draggable={false} />
    </span>
  );
}
