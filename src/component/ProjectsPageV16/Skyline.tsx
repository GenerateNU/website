// The launch complex on the horizon behind the pads: a setting sun, low hills and two far gantries.
// Pure scenery, so it is hidden from assistive technology.
export default function Skyline() {
  return (
    <svg
      className="pp16-skyline"
      viewBox="0 0 1440 140"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="1040" cy="140" r="78" fill="#ffd77a" />
      <path d="M0 140 V96 Q180 60 360 92 T760 84 T1120 94 T1440 80 V140 Z" fill="#8a5a8c" />
      <path d="M0 140 V114 Q240 92 520 112 T1040 108 T1440 102 V140 Z" fill="#5c4372" />
      <g fill="none" stroke="#3f2f57" strokeWidth="3">
        <path d="M228 140 V40 M252 140 V40 M228 40 H252 M228 140 L252 110 L228 80 L252 50" />
        <path d="M252 56 H286 M282 56 V70" />
        <path d="M1220 140 V58 M1240 140 V58 M1220 58 H1240 M1220 140 L1240 115 L1220 90 L1240 66" />
        <path d="M1240 72 H1268" />
      </g>
      <rect x="1176" y="98" width="10" height="42" fill="#3f2f57" />
      <ellipse cx="1181" cy="94" rx="16" ry="10" fill="#3f2f57" />
    </svg>
  );
}
