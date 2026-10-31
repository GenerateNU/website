import PopupAd from '@/component/LandingPage/PopupAd';
import type { FeaturedProject } from '@/data/featuredProjectData';

import { teamImages } from '../Project/teamImages';
import './style.css';

type ProjectPopupProps = {
  project: FeaturedProject;
  onClose: () => void;
};

export default function ProjectPopup({ project, onClose }: ProjectPopupProps) {
  return (
    <PopupAd className="project-popup" onClose={onClose}>
      <div className="project-popup-body">
        <img
          className={`project-popup-image${project.rounded ? ' project-popup-image-rounded' : ''}`}
          src={project.image}
          alt={`${project.name} mockup`}
        />
        <div className="project-popup-info">
          <div className="project-popup-tags">
            {project.teams.map(team => (
              <img key={team} className="project-popup-tag" src={teamImages[team]} alt={team} />
            ))}
          </div>
          <h2 className="project-popup-name">{project.name}</h2>
          <p className="project-popup-desc">{project.description}</p>
        </div>
      </div>
    </PopupAd>
  );
}
