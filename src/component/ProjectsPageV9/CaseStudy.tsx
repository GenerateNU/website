import './style.css';
import './CaseStudy.css';
import ProjectsCaseStudyV3 from '@/component/ProjectsPageV3/CaseStudy';

// The shared project page, dressed as the arcade screen the project was picked from.
export default function ProjectsCaseStudyV9() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        precedence="default"
      />
      <ProjectsCaseStudyV3 basePath="/projects-v9" mediaCarousel className="pp9-page pp9-case" />
    </>
  );
}
