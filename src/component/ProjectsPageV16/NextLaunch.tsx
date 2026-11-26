import { Link } from 'react-router-dom';

import Rocket from './Rocket';

// The closing call to action: an empty pad with a rocket waiting for the next team.
export default function NextLaunch() {
  return (
    <section className="pp16-next" aria-labelledby="pp16-next-heading">
      <div className="pp16-next-inner">
        <span className="pp16-next-rocket" aria-hidden="true">
          <Rocket team="software" />
        </span>
        <div className="pp16-next-copy">
          <p className="pp16-eyebrow">Next launch</p>
          <h2 id="pp16-next-heading" className="pp16-next-heading">
            Want to build the next one?
          </h2>
          <p className="pp16-next-text">
            Generate is Northeastern&rsquo;s student-run product studio. Your team could be on the next pad.
          </p>
        </div>
        <Link to="/apply" className="pp16-button">
          Apply <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
