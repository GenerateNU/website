import '@/component/ProjectsPageV5/style.css';
import ApplyBanner from '@/component/ProjectsPageV5/ApplyBanner';
import MoreProjects from '@/component/ProjectsPageV5/MoreProjects';
import { featuredProjects } from '@/data/projectData';
import Footer from '@/pages/LandingPageV3/Footer';

import FeaturedBanner from './FeaturedBanner';

const basePath = '/projects-v8';

// The featured projects are the page's banner: the first screen is the work itself, not a title.
export default function ProjectsPageV8() {
  return (
    <div className="pp5-page">
      <title>Projects · Generate</title>
      <FeaturedBanner projects={featuredProjects} basePath={basePath} />
      <main className="pp5-main">
        <MoreProjects basePath={basePath} />
      </main>
      <ApplyBanner />
      <Footer />
    </div>
  );
}
