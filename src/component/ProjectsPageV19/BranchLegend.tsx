// The key to the card colours, always on show beside the cards it explains.
export default function BranchLegend() {
  return (
    <ul className="pp19-legend" aria-label="Card colours">
      <li>
        <span className="pp19-swatch pp19-swatch--software" aria-hidden="true" />
        Software
      </li>
      <li>
        <span className="pp19-swatch pp19-swatch--hardware" aria-hidden="true" />
        Hardware
      </li>
      <li>
        <span className="pp19-swatch pp19-swatch--both" aria-hidden="true" />
        Both
      </li>
    </ul>
  );
}
