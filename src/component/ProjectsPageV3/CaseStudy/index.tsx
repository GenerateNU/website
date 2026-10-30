import { Link, useParams } from 'react-router-dom';

import './style.css';
import NavBar from '@/component/NavBar';
import { getProjectBySlug } from '@/data/projectData';
import Footer from '@/pages/LandingPageV3/Footer';

import ApplyBanner from '../ApplyBanner';
import '../style.css';
import AdjacentNav from './AdjacentNav';
import Gallery from './Gallery';
import Hero from './Hero';
import Overview from './Overview';
import TeamAndLinks from './TeamAndLinks';

type CaseStudyProps = {
  // The project list this page belongs to; later prototypes reuse this page under their own path.
  basePath?: string;
  // Puts all the project's media in a carousel at the top, opening on its hero video, instead of a gallery below.
  mediaCarousel?: boolean;
  // Extra classes on the page, so a prototype can restyle it in its own theme.
  className?: string;
};

function NotFound({ basePath, className }: Required<Pick<CaseStudyProps, 'basePath' | 'className'>>) {
  return (
    <div className={`pp3-page ${className}`}>
      <title>Project not found · Generate</title>
      <header className="pp3-hero">
        <NavBar />
        <div className="pp3-hero-inner">
          <p className="pp3-eyebrow">404</p>
          <h1 className="pp3-title pp3-case-title">Project not found</h1>
          <p className="pp3-intro">We couldn’t find a project at that address.</p>
          <Link to={basePath} className="pp3-back">
            <span aria-hidden="true">←</span> All projects
          </Link>
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default function ProjectsCaseStudyV3({
  basePath = '/projects-v3',
  mediaCarousel = false,
  className = '',
}: CaseStudyProps) {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <NotFound basePath={basePath} className={className} />;
  }

  return (
    <div className={`pp3-page ${className}`}>
      <title>{`${project.name} · Generate`}</title>
      <article>
        <Hero project={project} basePath={basePath} mediaCarousel={mediaCarousel} />
        <div className="pp3-main">
          <Overview project={project} />
          {!mediaCarousel && <Gallery project={project} />}
          <TeamAndLinks project={project} />
        </div>
      </article>
      <AdjacentNav project={project} basePath={basePath} />
      <ApplyBanner />
      <Footer />
    </div>
  );
}
