import '@/component/ProjectsPageV9/style.css';
import '@/component/ProjectsPageV9/CaseStudy.css';
import ProjectsCaseStudyV3 from '@/component/ProjectsPageV3/CaseStudy';

// The project page is V9's arcade screen as-is; only the way back points to this version.
export default function ProjectsCaseStudyV12() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        precedence="default"
      />
      <ProjectsCaseStudyV3 basePath="/projects-v12" mediaCarousel className="pp9-page pp9-case" />
    </>
  );
}
