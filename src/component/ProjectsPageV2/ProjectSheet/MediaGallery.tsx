import { useState } from 'react';

import type { ProjectMediaItem } from '@/data/projectData';

import YouTubeFacade from './YouTubeFacade';

type MediaGalleryProps = {
  items: ProjectMediaItem[];
};

type MediaViewerProps = {
  item: ProjectMediaItem;
};

type ThumbnailProps = {
  item: ProjectMediaItem;
  position: number;
  active: boolean;
  onSelect: () => void;
};

const getItemLabel = (item: ProjectMediaItem): string => (item.kind === 'youtube' ? item.title : item.alt);

const getThumbSource = (item: ProjectMediaItem): string | undefined => {
  switch (item.kind) {
    case 'image':
      return item.src;
    case 'video':
      return item.poster;
    case 'youtube':
      return item.poster;
  }
};

function MediaViewer({ item }: MediaViewerProps) {
  switch (item.kind) {
    case 'image':
      return <img className="pp2-sheet-image" src={item.src} alt={item.alt} draggable={false} />;
    case 'video':
      return (
        // oxlint-disable-next-line jsx-a11y/media-has-caption -- project clips are silent screen recordings with no audio track.
        <video
          className="pp2-sheet-video"
          src={item.src}
          poster={item.poster}
          aria-label={item.alt}
          controls
          playsInline
          preload="metadata"
        />
      );
    case 'youtube':
      return <YouTubeFacade id={item.id} title={item.title} poster={item.poster} />;
  }
}

function Thumbnail({ item, position, active, onSelect }: ThumbnailProps) {
  const source = getThumbSource(item);

  return (
    <button
      type="button"
      className={`pp2-sheet-thumb ${active ? 'is-active' : ''}`}
      aria-pressed={active}
      aria-label={`Show media ${position}: ${getItemLabel(item)}`}
      onClick={onSelect}
    >
      {source && <img src={source} alt="" draggable={false} />}
      {item.kind !== 'image' && (
        <span className="pp2-sheet-thumb-play" aria-hidden="true">
          ▶
        </span>
      )}
    </button>
  );
}

export default function MediaGallery({ items }: MediaGalleryProps) {
  const [selected, setSelected] = useState(0);
  const item = items[selected] ?? items[0];

  if (item === undefined) {
    return null;
  }

  const caption = item.kind === 'youtube' ? undefined : item.caption;

  return (
    <div className="pp2-sheet-gallery">
      <div className="pp2-sheet-viewer">
        <MediaViewer key={selected} item={item} />
      </div>
      {caption && <p className="pp2-sheet-caption">{caption}</p>}
      {items.length > 1 && (
        <div className="pp2-sheet-thumbs">
          {items.map((entry, index) => (
            <Thumbnail
              key={getItemLabel(entry)}
              item={entry}
              position={index + 1}
              active={index === selected}
              onSelect={() => setSelected(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
