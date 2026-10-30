import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { useState } from 'react';

import './style.css';
import { getProjectMedia } from '@/data/projectData';
import type { Project } from '@/data/projectData';

import MediaGallery from './MediaGallery';
import ProjectDetails from './ProjectDetails';

type ProjectSheetProps = {
  project: Project | undefined;
  onClose: () => void;
};

export default function ProjectSheet({ project, onClose }: ProjectSheetProps) {
  // Holds the last project so its content stays rendered while the leave transition plays.
  const [shown, setShown] = useState(project);

  if (project && project !== shown) {
    setShown(project);
  }

  return (
    <Dialog open={project !== undefined} onClose={onClose} className="pp2-sheet">
      <DialogBackdrop transition className="pp2-sheet-backdrop" />
      <div className="pp2-sheet-viewport">
        <DialogPanel transition className="pp2-sheet-panel">
          <div className="pp2-sheet-handle" aria-hidden="true" />
          <button type="button" className="pp2-sheet-close" onClick={onClose}>
            close <span aria-hidden="true">×</span>
          </button>
          <div className="pp2-sheet-scroll">
            {shown && (
              <div className="pp2-sheet-layout">
                <MediaGallery key={shown.slug} items={getProjectMedia(shown)} />
                <ProjectDetails project={shown} />
              </div>
            )}
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
