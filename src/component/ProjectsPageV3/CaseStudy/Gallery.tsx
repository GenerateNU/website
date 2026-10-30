import type { Project, ProjectMediaItem } from '@/data/projectData';
import { getProjectMedia } from '@/data/projectData';

import Video from './Video';
import YouTubeFacade from './YouTubeFacade';

type GalleryProps = {
  project: Project;
};

type GalleryItemProps = {
  item: ProjectMediaItem;
  imageKind: Project['imageKind'];
};

function GalleryItem({ item, imageKind }: GalleryItemProps) {
  switch (item.kind) {
    case 'image':
      return (
        <figure className="pp3-gallery-item">
          <div className={`pp3-frame pp3-frame--${imageKind}`}>
            <img src={item.src} alt={item.alt} loading="lazy" />
          </div>
          {item.caption ? <figcaption>{item.caption}</figcaption> : null}
        </figure>
      );
    case 'video':
      return (
        <figure className="pp3-gallery-item">
          <div className="pp3-frame">
            <Video src={item.src} poster={item.poster} label={item.alt} />
          </div>
          {item.caption ? <figcaption>{item.caption}</figcaption> : null}
        </figure>
      );
    case 'youtube':
      return (
        <figure className="pp3-gallery-item">
          <div className="pp3-frame">
            <YouTubeFacade id={item.id} title={item.title} poster={item.poster} />
          </div>
        </figure>
      );
  }
}

export default function Gallery({ project }: GalleryProps) {
  const items = getProjectMedia(project);

  return (
    <section className="pp3-section" aria-labelledby="pp3-gallery-heading">
      <h2 id="pp3-gallery-heading" className="pp3-section-title">
        Gallery
      </h2>
      <div className="pp3-gallery">
        {items.map((item, index) => (
          <GalleryItem key={`${item.kind}-${index}`} item={item} imageKind={project.imageKind} />
        ))}
      </div>
    </section>
  );
}
