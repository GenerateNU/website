const title = 'Projects';

// The page title shares a row with the cabinet's buttons, so nothing else stacks above the featured
// projects. Its letters are separate so they can drop in one by one when the cabinet powers on.
export default function AttractHeading() {
  return (
    <>
      <h1 className="pp9-title pp12-title">
        <span className="pp9-sr-only">{title}</span>
        <span aria-hidden="true">
          {/* The title is plain ASCII, so splitting by character is safe. */}
          {title.split('').map((letter, index) => (
            // The title never changes, so each letter's position is a stable key.
            // oxlint-disable-next-line react/no-array-index-key
            <span key={index} className="pp12-title-letter" style={{ animationDelay: `${index * 70 + 300}ms` }}>
              {letter}
            </span>
          ))}
        </span>
      </h1>
      <h2 id="pp12-attract-heading" className="pp9-sr-only">
        Featured projects
      </h2>
    </>
  );
}
