import { useState } from 'react';

import projects from '@/data/projectData';
import type { Project } from '@/data/projectData';

import ClawMachine from './ClawMachine';
import PrizeTag from './PrizeTag';

type ArcadeProps = {
  basePath: string;
};

// Featured projects come first, so the claw starts over one with a video to watch.
const prizes: Project[] = [
  ...projects.filter(project => project.featured === true),
  ...projects.filter(project => project.featured !== true),
];

export default function Arcade({ basePath }: ArcadeProps) {
  const [cursor, setCursor] = useState(0);
  const selected = prizes[cursor] ?? prizes[0];

  return (
    <div className="pp10-arcade">
      <ClawMachine projects={prizes} cursor={cursor} basePath={basePath} onCursorChange={setCursor} />
      {selected && <PrizeTag project={selected} position={cursor + 1} total={prizes.length} basePath={basePath} />}
    </div>
  );
}
