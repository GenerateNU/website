import './style.css';
import type { Project } from '@/data/projectData';
import useMediaQuery from '@/shared/useMediaQuery';

import FeaturedTile from './FeaturedTile';
import type { FeaturedVariant } from './FeaturedTile';

type FeaturedBentoProps = {
  projects: Project[];
  basePath: string;
};

// The first project leads full width; the rest pair up, and an unpaired last one also spans the row.
const getVariant = (index: number, count: number): FeaturedVariant => {
  if (index === 0) {
    return 'hero';
  }

  const isUnpaired = index === count - 1 && (count - 1) % 2 === 1;

  return isUnpaired ? 'wide' : 'standard';
};

export default function FeaturedBento({ projects, basePath }: FeaturedBentoProps) {
  // Hover previews only where a mouse can hover and motion is welcome; everyone else sees the still image.
  const canPreview = useMediaQuery('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');

  return (
    <ul className="pp5-bento">
      {projects.map((project, index) => (
        <FeaturedTile
          key={project.slug}
          project={project}
          variant={getVariant(index, projects.length)}
          canPreview={canPreview}
          basePath={basePath}
        />
      ))}
    </ul>
  );
}
