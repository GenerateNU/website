import { useState } from 'react';

import type { Project } from '@/data/projectData';

type Announced = {
  project: Project | undefined;
  text: string;
};

// What the polite live region says when the open project changes: "Opened Earnz", "Closed Earnz".
// Derived while rendering, so Back and Forward are announced as well as clicks.
export default function useAnnouncement(project: Project | undefined): string {
  const [announced, setAnnounced] = useState<Announced>({ project, text: '' });

  if (announced.project !== project) {
    const closed = announced.project;

    setAnnounced({ project, text: project ? `Opened ${project.name}` : `Closed ${closed?.name ?? 'the project'}` });
  }

  return announced.text;
}
