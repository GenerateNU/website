import TeamTag from '@/component/ProjectsPageV5/TeamTag';

import { placeCallout } from './calloutData';
import type { Callout, CalloutPlacement } from './calloutData';

// The leader runs from the anchor dot on the frame edge (x 56) up or down to an elbow, then level into
// the label. Drawn for the left side; the right side mirrors it in CSS.
const leaderPaths: Record<CalloutPlacement['slope'], { path: string; anchorY: number }> = {
  down: { path: 'M56 58 L18 32 H0', anchorY: 58 },
  up: { path: 'M56 6 L18 32 H0', anchorY: 6 },
};

type LeaderProps = {
  slope: CalloutPlacement['slope'];
};

// One leader line. Its path length is normalised to 1 so CSS can draw it in with stroke-dashoffset.
function Leader({ slope }: LeaderProps) {
  const { path, anchorY } = leaderPaths[slope];

  return (
    <svg className="pp17-leader" viewBox="0 0 56 64" aria-hidden="true" focusable="false">
      <path className="pp17-leader-line" d={path} pathLength={1} />
      <circle className="pp17-leader-dot" cx={56} cy={anchorY} r={3.5} />
    </svg>
  );
}

type CalloutBodyProps = {
  callout: Callout;
};

function CalloutBody({ callout }: CalloutBodyProps) {
  if (callout.kind === 'teams') {
    return (
      <span className="pp17-callout-tags">
        {callout.teams.map(team => (
          <TeamTag key={team} team={team} />
        ))}
      </span>
    );
  }

  if (callout.kind === 'quote') {
    return <q className="pp17-callout-quote">{callout.text}</q>;
  }

  return <span className="pp17-callout-text">{callout.text}</span>;
}

type CalloutsProps = {
  callouts: Callout[];
};

// The callouts around the drawing. Wide screens place each beside the frame with a leader line to its
// edge; phones show the same list, numbered, under the picture (see sheet.css).
export default function Callouts({ callouts }: CalloutsProps) {
  return (
    <ol className="pp17-callouts">
      {callouts.map((callout, index) => {
        const { side, row, slope } = placeCallout(index, callouts.length);

        return (
          <li
            key={callout.id}
            className={`pp17-callout pp17-callout--${side} pp17-callout--row${row} pp17-callout--${callout.kind}`}
            // Staggers the draw-in so the leaders arrive one after another.
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            <Leader slope={slope} />
            <span className="pp17-callout-box">
              <span className="pp17-callout-label">
                <span className="pp17-callout-number" aria-hidden="true">
                  {index + 1}
                </span>
                {callout.label}
              </span>
              <CalloutBody callout={callout} />
            </span>
          </li>
        );
      })}
    </ol>
  );
}

type FrameMarkersProps = {
  count: number;
};

// Phones only: small numbered markers on the frame edge stand in for the hidden leader lines.
export function FrameMarkers({ count }: FrameMarkersProps) {
  return (
    <span className="pp17-markers" aria-hidden="true">
      {Array.from({ length: count }, (_, index) => {
        const { side, row } = placeCallout(index, count);

        return (
          <span key={index} className={`pp17-marker pp17-marker--${side} pp17-marker--row${row}`}>
            {index + 1}
          </span>
        );
      })}
    </span>
  );
}
