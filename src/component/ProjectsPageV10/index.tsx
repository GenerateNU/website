import './style.css';
import NavBar from '@/component/NavBar';
import Footer from '@/pages/LandingPageV3/Footer';

import Arcade from './Arcade';
import OneMoreTry from './OneMoreTry';

const basePath = '/projects-v10';

// The projects as prizes in a claw machine: point at one to look at it, grab it to open it.
export default function ProjectsPageV10() {
  return (
    <div className="pp10-page">
      <title>Projects · Generate</title>
      {/* The sign-painter font only appears on this page, so the rest of the site doesn't load it. */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bungee&display=swap" precedence="default" />
      <header className="pp10-hero">
        <NavBar />
        <div className="pp10-hero-inner">
          <p className="pp10-eyebrow">Generate arcade</p>
          <h1 className="pp10-title">Projects</h1>
          <p className="pp10-intro">
            Point at a prize to take a look. Click it, or press Drop, and the claw grabs it and opens the project.
          </p>
        </div>
      </header>
      <main className="pp10-main">
        <Arcade basePath={basePath} />
      </main>
      <OneMoreTry />
      <Footer />
    </div>
  );
}
