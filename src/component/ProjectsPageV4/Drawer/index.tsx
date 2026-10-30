import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';

import './style.css';
import { getAdjacentProjects } from '@/data/projectData';
import type { Project } from '@/data/projectData';

import DrawerContent from './DrawerContent';
import DrawerHeader from './DrawerHeader';

type ProjectDrawerProps = {
  project: Project | undefined;
  onClose: () => void;
  onSwitch: (slug: string) => void;
};

const isTypingTarget = (target: EventTarget): boolean =>
  target instanceof HTMLVideoElement ||
  target instanceof HTMLInputElement ||
  target instanceof HTMLTextAreaElement ||
  target instanceof HTMLIFrameElement;

export default function ProjectDrawer({ project, onClose, onSwitch }: ProjectDrawerProps) {
  const [shown, setShown] = useState<Project | undefined>(project);
  const bodyRef = useRef<HTMLDivElement>(null);

  // Keep the last project mounted so the drawer keeps its content while it slides out.
  if (project && project !== shown) {
    setShown(project);
  }

  const switchTo = (slug: string): void => {
    onSwitch(slug);
    bodyRef.current?.scrollTo({ top: 0 });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>): void => {
    if (!shown || isTypingTarget(event.target)) {
      return;
    }

    if (event.key === 'ArrowLeft') {
      switchTo(getAdjacentProjects(shown).previous.slug);
    } else if (event.key === 'ArrowRight') {
      switchTo(getAdjacentProjects(shown).next.slug);
    }
  };

  return (
    <Dialog open={project !== undefined} onClose={onClose} className="pp4-drawer">
      <DialogBackdrop transition className="pp4-drawer-backdrop" />
      <DialogPanel transition className="pp4-drawer-panel" onKeyDown={handleKeyDown}>
        {shown && (
          <>
            <DrawerHeader project={shown} onClose={onClose} onSwitch={switchTo} />
            <div ref={bodyRef} className="pp4-drawer-body">
              <DrawerContent project={shown} />
            </div>
          </>
        )}
      </DialogPanel>
    </Dialog>
  );
}
