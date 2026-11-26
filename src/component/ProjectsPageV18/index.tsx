import './style.css';
import NavBar from '@/component/NavBar';
import Footer from '@/pages/LandingPageV3/Footer';

import Catalogue from './Catalogue';
import Journey from './Journey';
import MissionCta from './MissionCta';

const basePath = '/projects-v18';

// The projects as a deep-space mission: scroll to fly a ship past one planet per project, newest
// to oldest, watched from a mission-control console. The plain catalogue below lists them all.
export default function ProjectsPageV18() {
  return (
    <div className="pp18-page">
      <title>Projects · Generate</title>
      <header className="pp18-head">
        <NavBar />
      </header>
      <main>
        <Journey basePath={basePath} />
        <div className="pp18-main">
          <Catalogue basePath={basePath} />
          <MissionCta />
        </div>
      </main>
      <Footer />
    </div>
  );
}
