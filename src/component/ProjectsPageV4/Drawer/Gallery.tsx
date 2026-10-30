import { useState } from 'react';

import type { ProjectMediaItem } from '@/data/projectData';

type GalleryProps = {
  items: ProjectMediaItem[];
};

type MediaViewProps = {
  item: ProjectMediaItem;
};

const getThumbSrc = (item: ProjectMediaItem): string => {
  switch (item.kind) {
    case 'image':
      return item.src;
    case 'video':
      return item.poster;
    case 'youtube':
      return item.poster ?? '';
  }
};

const getLabel = (item: ProjectMediaItem): string => {
  switch (item.kind) {
    case 'image':
    case 'video':
      return item.alt;
    case 'youtube':
      return item.title;
  }
};

function YouTubeFacade({ item }: { item: Extract<ProjectMediaItem, { kind: 'youtube' }> }) {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    return (
      // YouTube embeds break when sandboxed without allow-scripts and allow-same-origin.
      // oxlint-disable-next-line react/iframe-missing-sandbox
      <iframe
        className="pp4-gallery-embed"
        src={`https://www.youtube-nocookie.com/embed/${item.id}?autoplay=1`}
        title={item.title}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button type="button" className="pp4-gallery-facade" onClick={() => setIsLoaded(true)}>
      {item.poster && <img src={item.poster} alt="" draggable={false} />}
      <span className="pp4-gallery-play" aria-hidden="true">
        ▶
      </span>
      <span className="pp4-visually-hidden">Play video: {item.title}</span>
    </button>
  );
}

function MediaView({ item }: MediaViewProps) {
  switch (item.kind) {
    case 'image':
      return <img className="pp4-gallery-img" src={item.src} alt={item.alt} draggable={false} />;
    case 'video':
      return (
        // Project clips have no caption tracks yet.
        // oxlint-disable-next-line jsx-a11y/media-has-caption
        <video
          className="pp4-gallery-video"
          src={item.src}
          poster={item.poster}
          aria-label={item.alt}
          controls
          playsInline
          preload="metadata"
        />
      );
    case 'youtube':
      return <YouTubeFacade key={item.id} item={item} />;
  }
}

export default function Gallery({ items }: GalleryProps) {
  const [selected, setSelected] = useState(0);
  const current = items[selected] ?? items[0];

  if (!current) {
    return null;
  }

  const caption = current.kind === 'youtube' ? undefined : current.caption;

  return (
    <div className="pp4-gallery">
      <div className="pp4-gallery-stage">
        <MediaView key={selected} item={current} />
      </div>
      {caption && <p className="pp4-gallery-caption">{caption}</p>}
      {items.length > 1 && (
        <ul className="pp4-gallery-thumbs">
          {items.map((item, index) => (
            <li key={`${item.kind}-${getThumbSrc(item)}-${getLabel(item)}`}>
              <button
                type="button"
                className="pp4-gallery-thumb"
                aria-pressed={index === selected}
                aria-label={`Show ${item.kind}: ${getLabel(item)}`}
                onClick={() => setSelected(index)}
              >
                {getThumbSrc(item) ? <img src={getThumbSrc(item)} alt="" draggable={false} /> : item.kind}
                {item.kind !== 'image' && (
                  <span className="pp4-gallery-thumb-badge" aria-hidden="true">
                    ▶
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
