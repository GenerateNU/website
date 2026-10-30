import './style.css';
import './CaseStudy.css';
import ProjectsCaseStudyV3 from '@/component/ProjectsPageV3/CaseStudy';

// The shared project page, dressed in the claw machine's candy colors, like a prize just won.
export default function ProjectsCaseStudyV10() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bungee&display=swap" precedence="default" />
      <ProjectsCaseStudyV3 basePath="/projects-v10" mediaCarousel className="pp10-page pp10-case" />
    </>
  );
}
