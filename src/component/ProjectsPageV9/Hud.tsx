type HudProps = {
  projectCount: number;
};

const pad = (value: number): string => String(value).padStart(2, '0');

// The strip across the top of an arcade screen: who's playing, the score, the credits.
export default function Hud({ projectCount }: HudProps) {
  return (
    <header className="pp9-hud">
      <div className="pp9-hud-row">
        <p className="pp9-hud-item">
          <span className="pp9-hud-key pp9-hud-key--red">1UP</span> Generate
        </p>
        <p className="pp9-hud-item">
          <span className="pp9-hud-key">Projects</span> {pad(projectCount)}
        </p>
        <p className="pp9-hud-item pp9-hud-item--end">
          <span className="pp9-hud-key">Credits</span> Free play
        </p>
      </div>
      <p className="pp9-eyebrow">Generate presents</p>
      <h1 className="pp9-title">Projects</h1>
    </header>
  );
}
