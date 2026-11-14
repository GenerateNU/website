import './style.css';
import { useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';

import { teamImages } from './teamImages';

export type ProjectTeam = 'hardware' | 'software' | 'data' | 'games';

type ProjectProps = {
  name: string;
  image: string;
  teams: ProjectTeam[];
  padding?: number;
  background?: string;
  fit?: 'cover';
  onSelect?: () => void;
};

const SCROLL_SPEED_PX_PER_SEC = 40;

const PAUSE_MS = 1200;

/**
 * If the name is wider than its column, slide it back and forth on its own.
 * Does nothing when the name fits or when the user prefers reduced motion.
 */
function useOverflowMarquee(ref: React.RefObject<HTMLHeadingElement | null>) {
  useEffect(() => {
    const el = ref.current;

    if (!el) {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Measure on every frame: the font can load after mount, which changes the overflow.
    const start = performance.now();
    const loop = { id: 0 };

    const step = (now: number) => {
      const max = el.scrollWidth - el.clientWidth;

      if (max <= 0) {
        el.scrollLeft = 0;
      } else {
        const travelMs = (max / SCROLL_SPEED_PX_PER_SEC) * 1000;
        const cycleMs = 2 * (PAUSE_MS + travelMs);
        const p = (now - start) % cycleMs;

        let x: number;

        if (p < PAUSE_MS) {
          x = 0;
        } else if (p < PAUSE_MS + travelMs) {
          x = max * ((p - PAUSE_MS) / travelMs);
        } else if (p < 2 * PAUSE_MS + travelMs) {
          x = max;
        } else {
          x = max * (1 - (p - (2 * PAUSE_MS + travelMs)) / travelMs);
        }

        el.scrollLeft = x;
      }

      loop.id = requestAnimationFrame(step);
    };

    loop.id = requestAnimationFrame(step);

    return () => cancelAnimationFrame(loop.id);
  }, [ref]);
}

const framedImageStyle = (padding: number, fit?: 'cover'): CSSProperties => {
  const style: CSSProperties = {
    top: `${padding}px`,
    left: `${padding}px`,
    width: `calc(100% - ${padding * 2}px)`,
    height: `calc(100% - ${padding * 2}px)`,
  };

  if (fit === 'cover') {
    style.objectFit = 'cover';
  }

  return style;
};

export default function Project({ name, image, teams, padding, background, fit, onSelect }: ProjectProps) {
  const nameRef = useRef<HTMLHeadingElement>(null);

  useOverflowMarquee(nameRef);

  return (
    <div className="project-card">
      <h2 className="project-name" ref={nameRef}>
        {name}
      </h2>
      <div className="project-images">
        <button
          type="button"
          className={`project-link${padding === undefined ? '' : ' is-framed'}`}
          style={background === undefined ? undefined : { backgroundColor: background }}
          disabled={!onSelect}
          onClick={onSelect}
        >
          {padding === undefined ? (
            <img alt={name} src={image}></img>
          ) : (
            <img alt={name} src={image} style={framedImageStyle(padding, fit)}></img>
          )}
        </button>
        <div className="project-teams">
          {teams.map(team => {
            return <img key={team} alt={team} src={teamImages[team]}></img>;
          })}
        </div>
      </div>
    </div>
  );
}
