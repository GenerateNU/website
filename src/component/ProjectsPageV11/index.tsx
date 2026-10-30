import '@/component/ProjectsPageV9/style.css';
import './style.css';
import NavBar from '@/component/NavBar';
import ContinueScreen from '@/component/ProjectsPageV9/ContinueScreen';
import ControlsHint from '@/component/ProjectsPageV9/ControlsHint';
import { featuredProjects } from '@/data/projectData';
import Footer from '@/pages/LandingPageV3/Footer';

import AttractMode from './AttractMode';
import SelectScreen from './SelectScreen';

const basePath = '/projects-v11';

// V9's arcade cabinet with V8's billboard built in: the first screen plays the featured projects like a
// cabinet's attract mode, and the select screen below holds every project.
export default function ProjectsPageV11() {
  return (
    <div className="pp9-page pp11-page">
      <title>Projects · Generate</title>
      {/* The pixel font only appears on this page, so the rest of the site doesn't load it. */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        precedence="default"
      />
      <div className="pp9-arcade">
        <NavBar />
        <main className="pp9-screen">
          <AttractMode projects={featuredProjects} basePath={basePath} />
          <SelectScreen basePath={basePath} />
          <ControlsHint />
        </main>
      </div>
      <ContinueScreen />
      <Footer />
    </div>
  );
}
