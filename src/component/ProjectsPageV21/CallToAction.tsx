import { Link } from 'react-router-dom';

// The closing band: the page's one yellow action, pointed at the application.
export default function CallToAction() {
  return (
    <section className="pp21-cta" aria-labelledby="pp21-cta-heading">
      <div className="pp21-cta-inner">
        <p className="pp21-label">Join a team</p>
        <h2 id="pp21-cta-heading" className="pp21-cta-heading">
          Want to build the next one?
        </h2>
        <Link to="/apply" className="pp21-primary">
          Apply <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
