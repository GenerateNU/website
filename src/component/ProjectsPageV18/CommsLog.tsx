type CommsLogProps = {
  lines: string[];
};

// The last few lines of the ship's log, for atmosphere only, so screen readers skip it.
export default function CommsLog({ lines }: CommsLogProps) {
  return (
    <div className="pp18-comms" aria-hidden="true">
      <p className="pp18-panel-label">Comms</p>
      <ol className="pp18-comms-lines">
        {lines.map((line, index) => (
          // Lines repeat (docking at the same place twice), so position is part of the key.
          <li key={`${index}-${line}`}>{line}</li>
        ))}
      </ol>
    </div>
  );
}
