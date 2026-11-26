import { Link } from 'react-router-dom';

// The closing call to action, written up as a numbered note in the margin of the drawing.
export default function SheetNote() {
  return (
    <section className="pp17-note" aria-labelledby="pp17-note-heading">
      <p className="pp17-note-label">
        <span className="pp17-callout-number" aria-hidden="true">
          !
        </span>
        Note
      </p>
      <h2 id="pp17-note-heading" className="pp17-note-title">
        Want to build the <mark className="pp17-highlight">next one</mark>?
      </h2>
      <p className="pp17-note-text">Generate is Northeastern’s student-run product studio.</p>
      <Link to="/apply" className="pp17-button pp17-button--primary">
        Apply <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}
