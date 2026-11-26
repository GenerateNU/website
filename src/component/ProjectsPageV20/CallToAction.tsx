import { Link } from 'react-router-dom';

// The closing panel: the console's one yellow action, pointed at the application.
export default function CallToAction() {
  return (
    <section className="pp20-cta" aria-labelledby="pp20-cta-heading">
      <div className="pp20-cta-inner">
        <p className="pp20-label">Join a team</p>
        <h2 id="pp20-cta-heading" className="pp20-cta-heading">
          Want to build the next one?
        </h2>
        <Link to="/apply" className="pp20-primary">
          Apply <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
