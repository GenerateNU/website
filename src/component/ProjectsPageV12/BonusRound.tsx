import { Link } from 'react-router-dom';

import { useExperience } from './experience/experience';

// The end of the page: the arcade's bonus round, which here is joining Generate.
export default function BonusRound() {
  const { sfx } = useExperience();

  return (
    <section className="pp9-continue" aria-labelledby="pp12-bonus-heading">
      <p className="pp9-label pp9-label--yellow">Bonus round</p>
      <h2 id="pp12-bonus-heading" className="pp9-continue-heading pp12-type">
        Want to build the next one?
      </h2>
      <Link to="/apply" className="pp9-start" onClick={() => sfx('start')}>
        <span aria-hidden="true">▶</span> Apply
      </Link>
    </section>
  );
}
