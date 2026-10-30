import { formatSemester, getPreviewVideo } from '@/data/projectData';
import type { Project } from '@/data/projectData';

import ProjectMedia from '../ProjectMedia';
import TeamTag from '../TeamTag';

type CarouselSlideProps = {
  project: Project;
  position: number;
  total: number;
  active: boolean;
  playVideo: boolean;
  onOpen: (slug: string) => void;
};

type SlideMediaProps = {
  project: Project;
  playVideo: boolean;
};

function SlideMedia({ project, playVideo }: SlideMediaProps) {
  const previewVideo = getPreviewVideo(project);

  if (previewVideo === undefined) {
    return <ProjectMedia project={project} className="pp2-slide-media" />;
  }

  return (
    <div className={`pp2-media pp2-media--${project.imageKind} pp2-slide-media`}>
      {playVideo ? (
        <video
          className="pp2-slide-video"
          src={previewVideo.src}
          poster={previewVideo.poster}
          aria-label={previewVideo.alt}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <img src={previewVideo.poster} alt={previewVideo.alt} draggable={false} />
      )}
    </div>
  );
}

export default function CarouselSlide({ project, position, total, active, playVideo, onOpen }: CarouselSlideProps) {
  return (
    <section
      className={`pp2-slide ${active ? 'is-active' : ''}`}
      // oxlint-disable-next-line jsx-a11y/prefer-tag-over-role -- the WAI-ARIA carousel pattern requires role=group on each slide.
      role="group"
      aria-roledescription="slide"
      aria-label={`${position} of ${total}`}
    >
      <SlideMedia project={project} playVideo={playVideo} />
      <div className="pp2-slide-body">
        <p className="pp2-slide-semester">{formatSemester(project.semester)}</p>
        <h3 className="pp2-slide-title">{project.name}</h3>
        <div className="pp2-slide-tags">
          {project.teams.map(team => (
            <TeamTag key={team} team={team} />
          ))}
        </div>
        {project.description && <p className="pp2-slide-description">{project.description}</p>}
        <button type="button" className="pp2-button pp2-slide-cta" onClick={() => onOpen(project.slug)}>
          View project <span aria-hidden="true">→</span>
          <span className="visually-hidden">: {project.name}</span>
        </button>
      </div>
    </section>
  );
}
