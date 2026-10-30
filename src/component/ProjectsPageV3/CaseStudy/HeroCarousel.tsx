import { useState } from 'react';

import { getHeroVideo, getProjectMedia } from '@/data/projectData';
import type { Project, ProjectMediaItem } from '@/data/projectData';
import useMediaQuery from '@/shared/useMediaQuery';

import Video from './Video';
import YouTubeFacade from './YouTubeFacade';

type HeroCarouselProps = {
  project: Project;
};

type StageProps = {
  item: ProjectMediaItem;
  imageKind: Project['imageKind'];
  autoPlay: boolean;
};

type ThumbnailProps = {
  item: ProjectMediaItem;
  imageKind: Project['imageKind'];
  position: number;
  selected: boolean;
  onSelect: () => void;
};

const getLabel = (item: ProjectMediaItem): string => (item.kind === 'youtube' ? item.title : item.alt);

const getThumbSource = (item: ProjectMediaItem): string | undefined => (item.kind === 'image' ? item.src : item.poster);

// The hero video leads; everything else follows in the order the project lists it.
const getCarouselItems = (project: Project): ProjectMediaItem[] => {
  const heroVideo = getHeroVideo(project);
  const rest = getProjectMedia(project).filter(item => item !== heroVideo);

  return heroVideo ? [heroVideo, ...rest] : rest;
};

function Stage({ item, imageKind, autoPlay }: StageProps) {
  switch (item.kind) {
    case 'image':
      return (
        <div className={`pp3-hero-media pp3-stage pp3-stage--${imageKind}`}>
          <img src={item.src} alt={item.alt} draggable={false} />
        </div>
      );
    case 'video':
      return (
        <div className="pp3-hero-media">
          <Video src={item.src} poster={item.poster} label={item.alt} autoPlay={autoPlay} />
        </div>
      );
    case 'youtube':
      return (
        <div className="pp3-hero-media">
          <YouTubeFacade id={item.id} title={item.title} poster={item.poster} />
        </div>
      );
  }
}

function Thumbnail({ item, imageKind, position, selected, onSelect }: ThumbnailProps) {
  const source = getThumbSource(item);

  return (
    <button
      type="button"
      className={`pp3-thumb pp3-thumb--${imageKind}`}
      aria-pressed={selected}
      aria-label={`Show media ${position}: ${getLabel(item)}`}
      onClick={onSelect}
    >
      {source && <img src={source} alt="" draggable={false} />}
      {item.kind !== 'image' && (
        <span className="pp3-thumb-play" aria-hidden="true">
          ▶
        </span>
      )}
    </button>
  );
}

// The big picture at the top of the page, opening on the project's hero video. A strip of
// thumbnails right under it swaps in any of the project's other pictures and videos.
export default function HeroCarousel({ project }: HeroCarouselProps) {
  const motionAllowed = useMediaQuery('(prefers-reduced-motion: no-preference)');
  const [selected, setSelected] = useState(0);
  const items = getCarouselItems(project);
  const item = items[selected] ?? items[0];

  if (item === undefined) {
    return null;
  }

  const caption = item.kind === 'youtube' ? undefined : item.caption;

  return (
    <div>
      {/* Keyed so a newly picked video starts from the beginning instead of reusing the last one's player. */}
      <Stage key={selected} item={item} imageKind={project.imageKind} autoPlay={motionAllowed} />
      {caption && <p className="pp3-stage-caption">{caption}</p>}
      {items.length > 1 && (
        <div className="pp3-thumbs">
          {items.map((entry, index) => (
            <Thumbnail
              key={`${entry.kind}-${getLabel(entry)}`}
              item={entry}
              imageKind={project.imageKind}
              position={index + 1}
              selected={index === selected}
              onSelect={() => setSelected(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
