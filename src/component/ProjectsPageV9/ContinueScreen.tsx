import { Link } from 'react-router-dom';

export default function ContinueScreen() {
  return (
    <section className="pp9-continue" aria-labelledby="pp9-continue-heading">
      <p className="pp9-label pp9-label--yellow">Player 2, ready?</p>
      <h2 id="pp9-continue-heading" className="pp9-continue-heading">
        Want to build the next one?
      </h2>
      <Link to="/apply" className="pp9-start">
        <span aria-hidden="true">▶</span> Apply
      </Link>
    </section>
  );
}
