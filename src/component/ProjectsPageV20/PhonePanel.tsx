import { Dialog, DialogPanel } from '@headlessui/react';
import { useState } from 'react';
import type { RefObject } from 'react';

import type { Project } from '@/data/projectData';

import ProjectDetail from './ProjectDetail';
import type { SelectProject } from './roster';

type PhonePanelProps = {
  project: Project | undefined;
  list: Project[];
  sheetRef: RefObject<HTMLDivElement | null>;
  headingRef: RefObject<HTMLHeadingElement | null>;
  mainRef: RefObject<HTMLDivElement | null>;
  paused: boolean;
  onTogglePause: () => void;
  onSelect: SelectProject;
  onClose: () => void;
};

// On phones the project slides up over the grid as a full-height panel; Back, Esc or the
// "Back to all projects" button slides it away again.
export default function PhonePanel(props: PhonePanelProps) {
  const { project, sheetRef, onClose, ...detail } = props;
  // Holds the last project so its content stays rendered while the panel slides away.
  const [shown, setShown] = useState(project);

  if (project && project !== shown) {
    setShown(project);
  }

  return (
    // On touch screens the dialog focuses itself rather than the heading (so no keyboard pops up); the
    // label still announces the project's name.
    <Dialog
      open={project !== undefined}
      onClose={onClose}
      initialFocus={detail.headingRef}
      aria-label={shown?.name}
      className="pp20-sheet"
    >
      <DialogPanel ref={sheetRef} transition className="pp20-sheet-panel">
        {shown && (
          <ProjectDetail
            project={shown}
            withStrip={false}
            closeLabel="Back to all projects"
            onClose={onClose}
            {...detail}
          />
        )}
      </DialogPanel>
    </Dialog>
  );
}
