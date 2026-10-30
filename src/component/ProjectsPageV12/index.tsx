import '@/component/ProjectsPageV9/style.css';
import './style.css';
import NavBar from '@/component/NavBar';
import ControlsHint from '@/component/ProjectsPageV9/ControlsHint';
import { featuredProjects } from '@/data/projectData';
import Footer from '@/pages/LandingPageV3/Footer';

import AttractMode from './AttractMode';
import BonusRound from './BonusRound';
import { useExperience } from './experience/experience';
import ExperienceProvider from './experience/ExperienceProvider';
import Sparks from './experience/Sparks';
import SelectScreen from './SelectScreen';

const basePath = '/projects-v12';

function Cabinet() {
  const { booting } = useExperience();

  return (
    <div className={`pp9-page pp12-page${booting ? ' pp12-booting' : ''}`}>
      <title>Projects · Generate</title>
      {/* The pixel font only appears on this page, so the rest of the site doesn't load it. */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        precedence="default"
      />
      <div className="pp9-arcade">
        {/* Two layers of stars drifting at different speeds as the page scrolls. */}
        <div className="pp12-stars" aria-hidden="true" />
        <NavBar />
        <main className="pp9-screen">
          <AttractMode projects={featuredProjects} basePath={basePath} />
          <SelectScreen basePath={basePath} />
          <ControlsHint />
        </main>
      </div>
      <BonusRound />
      <Footer />
      <Sparks />
    </div>
  );
}

// V11's cabinet, brought to life: it powers on when you arrive, the starfield and tiles respond as you
// scroll, presses spark (and blip, if sound is on), opening a project changes the channel, and when
// nobody touches anything for a while the cabinet starts playing by itself. Every one of these is extra:
// the page reads and works the same without them, and "reduce motion" or the Pause button turns them off.
export default function ProjectsPageV12() {
  return (
    <ExperienceProvider>
      <Cabinet />
    </ExperienceProvider>
  );
}
