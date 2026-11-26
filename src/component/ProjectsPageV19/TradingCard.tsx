import './card.css';
import ProjectMedia from '@/component/ProjectsPageV5/ProjectMedia';
import { formatSemester } from '@/data/projectData';
import type { Project } from '@/data/projectData';

import { getDiscipline, getDisciplineLabel, summarizeRoles } from './cardFacts';
import useCardPeek from './useCardPeek';

type CardFaceProps = {
  project: Project;
  hidden: boolean;
};

type TradingCardProps = {
  project: Project;
  // What a click on the card does: 'flip' turns it over (the fan, the phone row); 'open' opens the project
  // (the binder). Either way the back, with its "Open project" button, also shows on hover and keyboard focus.
  action: 'flip' | 'open';
  flipped?: boolean;
  onFlip?: (next: boolean) => void;
  onOpen: () => void;
  // Cards resting at the sides of the fan are shown but not operated; the fan puts its own button over them.
  interactive?: boolean;
};

type CardButtonProps = {
  project: Project;
  action: 'flip' | 'open';
  showingBack: boolean;
  onFlip: () => void;
  onOpen: () => void;
};

// The picture side, kept calm: the work itself, big, with only its name and semester under it.
// The card stock's colour is the only sign of its branch, so screen readers get the branch in words.
function CardFront({ project, hidden }: CardFaceProps) {
  return (
    <div className="pp19-face pp19-front" aria-hidden={hidden} inert={hidden}>
      <ProjectMedia project={project} className="pp19-art" />
      <div className="pp19-label">
        <h3 className="pp19-name">
          {project.name}
          <span className="pp19-sr-only">
            , {getDisciplineLabel(project)}
            {project.featured === true && ', featured'}
          </span>
        </h3>
        <p className="pp19-semester">{formatSemester(project.semester)}</p>
      </div>
    </div>
  );
}

// The stat side, like the back of a trading card, but only with facts the project record really holds.
function CardBack({ project, hidden }: CardFaceProps) {
  return (
    <div className="pp19-face pp19-back" aria-hidden={hidden} inert={hidden}>
      <div className={`pp19-back-panel${project.client ? ' has-client' : ''}`}>
        <h3 className="pp19-back-name">{project.name}</h3>
        <dl className="pp19-stats">
          <div>
            <dt>Crew</dt>
            <dd>{project.members.length} people</dd>
          </div>
          <div>
            <dt>Discipline</dt>
            <dd>{getDisciplineLabel(project)}</dd>
          </div>
          <div>
            <dt>Semester</dt>
            <dd>{formatSemester(project.semester)}</dd>
          </div>
          {project.client && (
            <div>
              <dt>Client</dt>
              <dd>
                {project.client.name}, {project.client.school}
              </dd>
            </div>
          )}
        </dl>
        {/* Projects without a write-up list their crew's roles instead, so the back is never left blank. */}
        <p className="pp19-blurb">{project.description ?? `Roles: ${summarizeRoles(project).join(', ')}.`}</p>
      </div>
    </div>
  );
}

// The card's one button, stretched over all of it, so a click anywhere does the card's job.
function CardButton({ project, action, showingBack, onFlip, onOpen }: CardButtonProps) {
  if (action === 'open') {
    return (
      <button type="button" className="pp19-stretch" onClick={onOpen}>
        <span className="pp19-sr-only">Open {project.name}</span>
      </button>
    );
  }

  return (
    <button type="button" className="pp19-stretch" aria-pressed={showingBack} onClick={onFlip}>
      <span className="pp19-sr-only">Flip {project.name} card</span>
    </button>
  );
}

// One collectible card. Every card shares the same black frame; its stock is coloured by branch (blue
// software, red hardware, split for both), and a featured project gets a small star, nothing more.
// "Open project" sits outside the turning faces, so it stays put on the back.
export default function TradingCard({
  project,
  action,
  flipped = false,
  onFlip,
  onOpen,
  interactive = true,
}: TradingCardProps) {
  const peek = useCardPeek(interactive);
  const showingBack = flipped || peek.peeking;

  // A click turns over whatever side is showing, and holds it there until the next hover or focus.
  const flip = (): void => {
    peek.clear();
    onFlip?.(!showingBack);
  };

  return (
    <article
      className={`pp19-card pp19-card--${getDiscipline(project)}${showingBack ? ' is-flipped' : ''}`}
      aria-hidden={!interactive}
      inert={!interactive}
      {...peek.handlers}
    >
      <div className="pp19-card-inner">
        <CardFront project={project} hidden={showingBack} />
        <CardBack project={project} hidden={!showingBack} />
      </div>
      {project.featured === true && (
        <span className="pp19-star" aria-hidden="true">
          ★
        </span>
      )}
      <CardButton project={project} action={action} showingBack={showingBack} onFlip={flip} onOpen={onOpen} />
      {showingBack && (
        <div className="pp19-card-actions">
          <button type="button" className="pp19-open" onClick={onOpen}>
            Open project<span className="pp19-sr-only">: {project.name}</span>
          </button>
        </div>
      )}
    </article>
  );
}
