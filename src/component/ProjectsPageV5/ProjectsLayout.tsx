import type { ReactNode } from 'react';

import './style.css';
import NavBar from '@/component/NavBar';
import Footer from '@/pages/LandingPageV3/Footer';

import ApplyBanner from './ApplyBanner';
import MoreProjects from './MoreProjects';

type ProjectsLayoutProps = {
  // Where this list lives; each project opens at `${basePath}/${slug}`.
  basePath: string;
  // Each prototype only differs in how it presents the featured projects.
  featured: ReactNode;
};

// Shared by the V15 prototype (V5-V7, which also used it, were cut): hero, featured slot and the filterable grid.
export default function ProjectsLayout({ basePath, featured }: ProjectsLayoutProps) {
  return (
    <div className="pp5-page">
      <title>Projects · Generate</title>
      <header className="pp5-hero">
        <NavBar />
        <div className="pp5-hero-inner">
          <p className="pp5-eyebrow">Built at Generate</p>
          <h1 className="pp5-title">Projects</h1>
          <p className="pp5-intro">
            Products our student teams designed and built for real clients. Choose one to see the full story.
          </p>
        </div>
      </header>
      <main className="pp5-main">
        <section className="pp5-section" aria-labelledby="pp5-featured-heading">
          <div className="pp5-section-header">
            <h2 id="pp5-featured-heading" className="pp5-section-heading">
              Featured
            </h2>
            <p className="pp5-section-intro">Standout products from recent semesters.</p>
          </div>
          {featured}
        </section>
        <MoreProjects basePath={basePath} />
      </main>
      <ApplyBanner />
      <Footer />
    </div>
  );
}
