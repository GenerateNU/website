import type { RefObject } from 'react';

type ShipProps = {
  shipRef: RefObject<HTMLDivElement | null>;
};

// A clean little survey craft, nose to the right. The journey banks it with scroll speed and lights
// its engine while the visitor scrolls; at rest the engine dims to a glow.
export default function Ship({ shipRef }: ShipProps) {
  return (
    <div className="pp18-ship-mount" aria-hidden="true">
      <div ref={shipRef} className="pp18-ship">
        <svg viewBox="0 0 160 80" focusable="false">
          <defs>
            <linearGradient id="pp18-flame" x1="1" x2="0" y1="0" y2="0">
              <stop offset="0" stopColor="#fff6d8" />
              <stop offset="0.35" stopColor="#ffbf3c" />
              <stop offset="1" stopColor="#ff6660" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path className="pp18-ship-flame" d="M34 31 C18 33 6 37 0 40 C6 43 18 47 34 49 Z" fill="url(#pp18-flame)" />
          <rect x="28" y="31" width="14" height="18" rx="3" fill="#4d5568" />
          <path d="M60 28 L74 7 L90 7 L84 28 Z" fill="#c4ccd8" />
          <path d="M60 52 L74 73 L90 73 L84 52 Z" fill="#c4ccd8" />
          <circle cx="82" cy="10" r="2.2" fill="#ffbf3c" />
          <circle cx="82" cy="70" r="2.2" fill="#ff6660" />
          <path
            d="M40 27 L112 23 Q150 29 157 40 Q150 51 112 57 L40 53 Z"
            fill="#eef1f6"
            stroke="#8d97a8"
            strokeWidth="1.5"
          />
          <rect x="50" y="38" width="72" height="4" rx="2" fill="#187dff" />
          <path d="M64 27 L64 53 M92 25 L92 55" stroke="#b5bdca" strokeWidth="1" />
          <path d="M118 33 Q134 33 142 40 Q134 40 118 40 Z" fill="#14254d" />
          <path d="M122 34.5 Q131 34.5 136 37.5" stroke="#8fb8ff" strokeWidth="1.2" fill="none" />
        </svg>
      </div>
    </div>
  );
}
