import type { Project } from '@/data/projectData';

type FanAnnouncementProps = {
  project: Project | undefined;
  position: number;
  total: number;
  flipped: boolean;
};

// Tells screen-reader users which card is now in front, and which side it shows.
export default function FanAnnouncement({ project, position, total, flipped }: FanAnnouncementProps) {
  return (
    <p className="pp19-sr-only" aria-live="polite">
      Card {position} of {total}: {project?.name}
      {flipped ? ', back side' : ''}
    </p>
  );
}
