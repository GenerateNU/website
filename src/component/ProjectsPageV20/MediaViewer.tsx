import { useState } from 'react';

import YouTubeFacade from '@/component/ProjectsPageV3/CaseStudy/YouTubeFacade';
import { getHeroVideo, getProjectMedia } from '@/data/projectData';
import type { Project, ProjectMediaItem } from '@/data/projectData';
import useMediaQuery from '@/shared/useMediaQuery';

import PanelVideo from './PanelVideo';
import PauseButton from './PauseButton';

type MediaViewerProps = {
  project: Project;
  paused: boolean;
  onTogglePause: () => void;
};

type StageProps = {
  item: ProjectMediaItem;
  imageKind: Project['imageKind'];
  playing: boolean;
};

const getLabel = (item: ProjectMediaItem): string => (item.kind === 'youtube' ? item.title : item.alt);

const getThumbSource = (item: ProjectMediaItem): string | undefined => (item.kind === 'image' ? item.src : item.poster);

// The project's hero video leads, then everything else in the order the project lists it.
const getItems = (project: Project): ProjectMediaItem[] => {
  const heroVideo = getHeroVideo(project);
  const rest = getProjectMedia(project).filter(item => item !== heroVideo);

  return heroVideo ? [heroVideo, ...rest] : rest;
};

function Stage({ item, imageKind, playing }: StageProps) {
  switch (item.kind) {
    case 'image':
      return (
        <div className={`pp20-viewer-stage pp20-thumb--${imageKind}`}>
          <img src={item.src} alt={item.alt} draggable={false} />
        </div>
      );
    case 'video':
      return (
        <div className="pp20-viewer-stage pp20-viewer-stage--video">
          <PanelVideo src={item.src} poster={item.poster} label={item.alt} playing={playing} />
        </div>
      );
    case 'youtube':
      return (
        <div className="pp20-viewer-stage pp20-viewer-stage--video">
          <YouTubeFacade id={item.id} title={item.title} poster={item.poster} />
        </div>
      );
  }
}

// Every picture and video the project has, one at a time, with arrows and thumbnails to move between them.
export default function MediaViewer({ project, paused, onTogglePause }: MediaViewerProps) {
  const motionAllowed = useMediaQuery('(prefers-reduced-motion: no-preference)');
  const [index, setIndex] = useState(0);
  const items = getItems(project);
  const item = items[index] ?? items[0];

  if (item === undefined) {
    return null;
  }

  const step = (by: number): void => setIndex((index + by + items.length) % items.length);
  const caption = item.kind === 'youtube' ? undefined : item.caption;

  return (
    <div className="pp20-viewer">
      {/* Keyed so a newly picked video starts from the beginning instead of reusing the last player. */}
      <div className="pp20-viewer-screen">
        <Stage key={index} item={item} imageKind={project.imageKind} playing={motionAllowed && !paused} />
        {/* The only thing on the page that moves on its own, so it gets its own stop button. */}
        {motionAllowed && item.kind === 'video' && <PauseButton paused={paused} onToggle={onTogglePause} />}
      </div>
      {caption && <p className="pp20-viewer-caption">{caption}</p>}
      {items.length > 1 && (
        <div className="pp20-viewer-controls">
          <button type="button" className="pp20-arrow" aria-label="Previous picture" onClick={() => step(-1)}>
            <span aria-hidden="true">←</span>
          </button>
          <p className="pp20-viewer-count" aria-live="polite">
            {index + 1} of {items.length}
          </p>
          <button type="button" className="pp20-arrow" aria-label="Next picture" onClick={() => step(1)}>
            <span aria-hidden="true">→</span>
          </button>
          <div className="pp20-viewer-thumbs">
            {items.map((entry, position) => {
              const source = getThumbSource(entry);

              return (
                <button
                  key={`${entry.kind}-${getLabel(entry)}`}
                  type="button"
                  className="pp20-viewer-thumb"
                  aria-pressed={position === index}
                  aria-label={`Show ${position + 1} of ${items.length}: ${getLabel(entry)}`}
                  onClick={() => setIndex(position)}
                >
                  {source && <img src={source} alt="" draggable={false} />}
                  {entry.kind !== 'image' && (
                    <span className="pp20-viewer-play" aria-hidden="true">
                      ▶
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
