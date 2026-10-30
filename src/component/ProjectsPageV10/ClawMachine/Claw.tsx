import ProjectMedia from '@/component/ProjectsPageV5/ProjectMedia';
import type { Project } from '@/data/projectData';

type ClawProps = {
  // The prize the claw is holding, once it has closed on one.
  carrying?: Project;
};

// Purely decorative: the prizes themselves are the controls.
export default function Claw({ carrying }: ClawProps) {
  return (
    <div className="pp10-claw" aria-hidden="true">
      <span className="pp10-carriage" />
      <span className="pp10-rope" />
      <svg className="pp10-claw-head" viewBox="0 0 80 72">
        <path className="pp10-prong pp10-prong--left" d="M32 18 L12 42 L22 66" />
        <path className="pp10-prong pp10-prong--right" d="M48 18 L68 42 L58 66" />
        <rect x="24" y="2" width="32" height="20" rx="6" className="pp10-claw-hub" />
      </svg>
      {carrying && <ProjectMedia project={carrying} className="pp10-carried" />}
    </div>
  );
}
