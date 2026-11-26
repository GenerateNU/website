import './style.css';
import './select.css';
import './detail.css';
import NavBar from '@/component/NavBar';
import Footer from '@/pages/LandingPageV3/Footer';

import CallToAction from './CallToAction';
import Console from './Console';
import PageHeader from './PageHeader';

// The projects as a calm, dark product console: point at a project to preview it on the monitor,
// open it and the layout rearranges in place around the full project.
export default function ProjectsPageV20() {
  return (
    <div className="pp20-page">
      <title>Projects · Generate</title>
      <div className="pp20-top">
        <NavBar />
        <main className="pp20-inner">
          <PageHeader />
          <Console />
        </main>
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
}
