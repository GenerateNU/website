import { useState } from 'react';

import './row.css';
import type { Project } from '@/data/projectData';

import TradingCard from './TradingCard';

type CardRowProps = {
  projects: Project[];
  onOpen: (slug: string) => void;
};

type RowCardProps = {
  project: Project;
  position: number;
  onOpen: (slug: string) => void;
};

// One card in the phone row; each keeps its own side up.
function RowCard({ project, position, onOpen }: RowCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <li className="pp19-row-item" style={{ animationDelay: `${position * 90}ms` }}>
      <TradingCard
        project={project}
        action="flip"
        flipped={flipped}
        onFlip={setFlipped}
        onOpen={() => onOpen(project.slug)}
      />
    </li>
  );
}

// On phones an opened pack's cards lie in a row to swipe through, the next one peeking in from the edge.
export default function CardRow({ projects, onOpen }: CardRowProps) {
  return (
    <>
      <ul className="pp19-row">
        {projects.map((project, index) => (
          <RowCard key={project.slug} project={project} position={index} onOpen={onOpen} />
        ))}
      </ul>
      <p className="pp19-row-hint">Swipe sideways for more cards. Tap a card to flip it.</p>
    </>
  );
}
