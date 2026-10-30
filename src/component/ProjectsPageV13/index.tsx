import '@/component/ProjectsPageV9/style.css';
import '@/component/ProjectsPageV12/style.css';
import './style.css';
import NavBar from '@/component/NavBar';
import ControlsHint from '@/component/ProjectsPageV9/ControlsHint';
import AttractHeading from '@/component/ProjectsPageV12/AttractMode/AttractHeading';
import CabinetControls from '@/component/ProjectsPageV12/AttractMode/CabinetControls';
import BonusRound from '@/component/ProjectsPageV12/BonusRound';
import { useExperience } from '@/component/ProjectsPageV12/experience/experience';
import ExperienceProvider from '@/component/ProjectsPageV12/experience/ExperienceProvider';
import Sparks from '@/component/ProjectsPageV12/experience/Sparks';
import SelectScreen from '@/component/ProjectsPageV12/SelectScreen';
import { featuredProjects } from '@/data/projectData';
import Footer from '@/pages/LandingPageV3/Footer';

import FlightPath from './FlightPath';
import LevelCard from './LevelCard';
import Story from './Story';

const basePath = '/projects-v13';

function Cabinet() {
  const { booting, motionAllowed } = useExperience();

  return (
    <div className={`pp9-page pp12-page pp13-page${booting ? ' pp12-booting' : ''}`}>
      <title>Projects · Generate</title>
      {/* The pixel font only appears on this page, so the rest of the site doesn't load it. */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        precedence="default"
      />
      <FlightPath />
      <div className="pp9-arcade">
        <div className="pp12-stars" aria-hidden="true" />
        <NavBar />
        <main className="pp9-screen">
          <header className="pp12-attract-head">
            <AttractHeading />
            {/* Videos and the idle demo are the only things that move on their own here. */}
            <CabinetControls showPause={motionAllowed} />
          </header>
          <Story projects={featuredProjects} basePath={basePath} />
          <LevelCard />
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

// V12's living cabinet, told as a scroll story: the featured projects are scenes, with a monitor that holds
// still and changes channel as each story scrolls past. Scrolling is never taken over: the page scrolls
// exactly as any other, the stories are plain content, and numbered buttons jump straight to any of them.
export default function ProjectsPageV13() {
  return (
    <ExperienceProvider bootKey="pp13-booted">
      <Cabinet />
    </ExperienceProvider>
  );
}
