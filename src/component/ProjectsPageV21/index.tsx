import './style.css';
import './grid.css';
import './panel.css';
import NavBar from '@/component/NavBar';
import Footer from '@/pages/LandingPageV3/Footer';

import Browser from './Browser';
import CallToAction from './CallToAction';
import PageHeader from './PageHeader';

// The projects as one grid that opens in place: rest on a tile to preview it, press it to open its
// details right under its row. Nothing else on the page moves.
export default function ProjectsPageV21() {
  return (
    <div className="pp21-page">
      <title>Projects · Generate</title>
      <div className="pp21-top">
        <NavBar />
        <main className="pp21-inner">
          <PageHeader />
          <Browser />
        </main>
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
}
