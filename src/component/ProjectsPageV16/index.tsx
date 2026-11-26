import './style.css';
import './pads.css';
import projects, { featuredProjects } from '@/data/projectData';
import Footer from '@/pages/LandingPageV3/Footer';

import FlightLog from './FlightLog';
import LaunchComplex from './LaunchComplex';
import NextLaunch from './NextLaunch';

const basePath = '/projects-v16';

// The projects as a launch complex at dusk: featured projects count down and lift off one by one,
// each deploying onto the stage, with every project listed below in a sortable flight log.
export default function ProjectsPageV16() {
  return (
    <div className="pp16-page">
      <title>Projects · Generate</title>
      <LaunchComplex projects={featuredProjects} basePath={basePath} />
      <main>
        <FlightLog projects={projects} basePath={basePath} />
        <NextLaunch />
      </main>
      <Footer />
    </div>
  );
}
