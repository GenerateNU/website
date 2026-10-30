import { Link } from 'react-router-dom';

export default function ApplyBanner() {
  return (
    <section className="pp5-apply" aria-labelledby="pp5-apply-heading">
      <div className="pp5-apply-inner">
        <h2 id="pp5-apply-heading" className="pp5-apply-heading">
          Want to build the next one?
        </h2>
        <Link to="/apply" className="pp5-apply-link">
          Apply <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
