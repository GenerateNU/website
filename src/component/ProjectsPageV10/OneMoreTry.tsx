import { Link } from 'react-router-dom';

export default function OneMoreTry() {
  return (
    <section className="pp10-again" aria-labelledby="pp10-again-heading">
      <h2 id="pp10-again-heading" className="pp10-again-heading">
        Want to build the next prize?
      </h2>
      <Link to="/apply" className="pp10-again-link">
        Apply <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}
