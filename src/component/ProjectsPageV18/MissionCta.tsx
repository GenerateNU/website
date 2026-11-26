import { Link } from 'react-router-dom';

// The page's last word: an empty orbit waiting for the next waypoint, and the way to join.
export default function MissionCta() {
  return (
    <section className="pp18-cta" aria-labelledby="pp18-cta-heading">
      <svg className="pp18-cta-rings" viewBox="0 0 120 120" aria-hidden="true" focusable="false">
        <circle cx="60" cy="60" r="56" />
        <circle cx="60" cy="60" r="38" />
        <circle cx="60" cy="60" r="20" />
        <circle className="pp18-cta-empty" cx="98" cy="60" r="7" />
      </svg>
      <div className="pp18-cta-copy">
        <h2 id="pp18-cta-heading" className="pp18-cta-title">
          Want to build the next one?
        </h2>
        <p className="pp18-cta-text">Join a Generate team and put the next waypoint on the route.</p>
      </div>
      <Link to="/apply" className="pp18-cta-link">
        Apply <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}
