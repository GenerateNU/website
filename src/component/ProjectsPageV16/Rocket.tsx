import type { ProjectTeam } from '@/data/projectData';

type RocketProps = {
  // The band round the rocket is the project's team colour: blue for software, red for hardware.
  team: ProjectTeam;
};

// The one rocket shape every pad uses. The flame is drawn first so the body covers its top, and stays
// invisible until the rocket lifts off.
export default function Rocket({ team }: RocketProps) {
  return (
    <svg className="pp16-rocket" viewBox="0 0 48 120" aria-hidden="true" focusable="false">
      <path className="pp16-flame" d="M16 94 Q24 140 32 94 Z" />
      <path className="pp16-flame-core" d="M19.5 94 Q24 118 28.5 94 Z" />
      <path d="M14 64 L3 90 L14 86 Z" fill="#111" />
      <path d="M34 64 L45 90 L34 86 Z" fill="#111" />
      <path d="M24 3 C35 15 35 30 35 40 V88 H13 V40 C13 30 13 15 24 3 Z" fill="#fff" stroke="#111" strokeWidth="2" />
      <path d="M24 3 C30 9 32.5 15 33.8 21 H14.2 C15.5 15 18 9 24 3 Z" fill="#ffbf3c" stroke="#111" strokeWidth="2" />
      <rect className={`pp16-rocket-band pp16-rocket-band--${team}`} x="13" y="70" width="22" height="7" />
      <circle cx="24" cy="40" r="6" fill="#cfe5ff" stroke="#111" strokeWidth="2" />
      <path d="M17 88 H31 L33 95 H15 Z" fill="#111" />
    </svg>
  );
}
