import './style.css';
import NavBar from '@/component/NavBar';
import Footer from '@/pages/LandingPageV3/Footer';

import ContinueScreen from './ContinueScreen';
import SelectScreen from './SelectScreen';

const basePath = '/projects-v9';

// The projects as an arcade cabinet's select screen: move the cursor over a project, watch it on the
// monitor, press start to open it.
export default function ProjectsPageV9() {
  return (
    <div className="pp9-page">
      <title>Projects · Generate</title>
      {/* The pixel font only appears on this page, so the rest of the site doesn't load it. */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        precedence="default"
      />
      <div className="pp9-arcade">
        <NavBar />
        <SelectScreen basePath={basePath} />
      </div>
      <ContinueScreen />
      <Footer />
    </div>
  );
}
