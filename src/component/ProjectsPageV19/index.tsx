import { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import NavBar from '@/component/NavBar';
import ProjectSheet from '@/component/ProjectsPageV2/ProjectSheet';
import projects from '@/data/projectData';
import Footer from '@/pages/LandingPageV3/Footer';
import useMediaQuery from '@/shared/useMediaQuery';
import useProjectOverlay from '@/shared/useProjectOverlay';

import Binder from './Binder';
import OpenedPack from './OpenedPack';
import { buildPacks } from './packs';
import Shelf from './Shelf';

const packs = buildPacks(projects);

// The last pocket on the table is empty, waiting for the next team's card.
function CallToAction() {
  return (
    <section className="pp19-cta" aria-labelledby="pp19-cta-heading">
      <div className="pp19-cta-card" aria-hidden="true">
        <p>Your card here</p>
      </div>
      <div className="pp19-cta-text">
        <h2 id="pp19-cta-heading" className="pp19-cta-heading">
          Want to build the next one?
        </h2>
        <Link to="/apply" className="pp19-cta-link">
          Apply <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

// A tabletop of collectible cards. The first screen is a shelf of sealed packs, one per stretch of years;
// opening one deals its cards into a fan. Every project is also in the binder below from the start.
// Projects open in a sheet over the page (?project=<slug>), so the visitor never leaves it.
export default function ProjectsPageV19() {
  const { project, openProject, closeProject } = useProjectOverlay();
  const wide = useMediaQuery('(min-width: 48rem)');
  const [openPackId, setOpenPackId] = useState<string | null>(null);
  const [openedIds, setOpenedIds] = useState<string[]>([]);

  const openPack = packs.find(pack => pack.id === openPackId);
  const newSlugs = packs.filter(pack => openedIds.includes(pack.id)).flatMap(pack => pack.projects.map(p => p.slug));

  const handleOpenPack = (id: string): void => {
    setOpenPackId(id);
    setOpenedIds(openedIds.includes(id) ? openedIds : [...openedIds, id]);
  };

  // Back on the shelf, keyboard focus returns to the pack the visitor came from. Clicks render before
  // the next frame, so by then the shelf is back.
  const handleBack = (): void => {
    const id = openPackId;

    setOpenPackId(null);
    requestAnimationFrame(() => document.querySelector<HTMLElement>(`[data-pack-id="${id}"]`)?.focus());
  };

  return (
    <div className="pp19-page">
      <title>Projects · Generate</title>
      <div className="pp19-table">
        <NavBar />
        <main className="pp19-main">
          <div className="pp19-intro">
            <h1 className="pp19-title">Projects</h1>
            <p className="pp19-lede">
              Products built by Generate, Northeastern&rsquo;s student-run product studio, sorted into packs by year.
              Open a pack to deal its cards.
            </p>
          </div>
          {openPack ? (
            <OpenedPack pack={openPack} wide={wide} onOpenProject={openProject} onBack={handleBack} />
          ) : (
            <Shelf packs={packs} openedIds={openedIds} onOpenPack={handleOpenPack} />
          )}
          <Binder newSlugs={newSlugs} onOpen={openProject} />
          <CallToAction />
        </main>
      </div>
      <Footer />
      <ProjectSheet project={project} onClose={closeProject} />
    </div>
  );
}
