import './style.css';
import './sheet.css';
import NavBar from '@/component/NavBar';
import { featuredProjects } from '@/data/projectData';
import Footer from '@/pages/LandingPageV3/Footer';

import Board from './Board';
import SheetNote from './SheetNote';
import SheetStack from './SheetStack';

const basePath = '/projects-v17';

// The page as a drafting table: the featured projects are a stack of engineering drawing sheets on the
// first screen, and every project is pinned to the board below.
export default function ProjectsPageV17() {
  return (
    <div className="pp17-page">
      <title>Projects · Generate</title>
      <header className="pp17-hero">
        <NavBar />
        <SheetStack projects={featuredProjects} basePath={basePath} />
      </header>
      <main className="pp17-main">
        <Board basePath={basePath} />
        <SheetNote />
      </main>
      <Footer />
    </div>
  );
}
