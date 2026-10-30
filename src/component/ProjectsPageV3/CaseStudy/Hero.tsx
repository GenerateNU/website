import type { MouseEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import NavBar from '@/component/NavBar';
import { formatSemester, getProjectMedia } from '@/data/projectData';
import type { Project } from '@/data/projectData';
import useCameFromProjectList from '@/shared/useCameFromProjectList';

import ProjectMedia from '../ProjectMedia';
import TeamTag from '../TeamTag';
import HeroCarousel from './HeroCarousel';
import Video from './Video';

type HeroProps = {
  project: Project;
  basePath: string;
  // Swaps the single picture for a browsable carousel of all the project's media.
  mediaCarousel?: boolean;
};

function HeroMedia({ project }: Pick<HeroProps, 'project'>) {
  const [first] = getProjectMedia(project);

  if (first?.kind === 'video') {
    return (
      <div className="pp3-hero-media">
        <Video src={first.src} poster={first.poster} label={first.alt} />
      </div>
    );
  }

  return <ProjectMedia project={project} className="pp3-hero-media" />;
}

export default function Hero({ project, basePath, mediaCarousel = false }: HeroProps) {
  const navigate = useNavigate();
  const cameFromList = useCameFromProjectList();

  // Stepping back restores the list where the visitor left it; a fresh visit just links to the list.
  const backToList = (event: MouseEvent<HTMLAnchorElement>): void => {
    if (cameFromList) {
      event.preventDefault();
      void navigate(-1);
    }
  };

  return (
    <>
      <header className="pp3-hero">
        <NavBar />
        <div className="pp3-hero-inner">
          <Link to={basePath} className="pp3-back" onClick={backToList}>
            <span aria-hidden="true">←</span> All projects
          </Link>
          <div className="pp3-meta">
            {project.teams.map(team => (
              <TeamTag key={team} team={team} />
            ))}
            <span className="pp3-meta-semester">{formatSemester(project.semester)}</span>
          </div>
          <h1 className="pp3-title pp3-case-title">{project.name}</h1>
          {project.description ? <p className="pp3-lede">{project.description}</p> : null}
        </div>
      </header>
      <div className="pp3-hero-media-wrap">
        {mediaCarousel ? <HeroCarousel project={project} /> : <HeroMedia project={project} />}
      </div>
    </>
  );
}
