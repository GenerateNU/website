export type FlightPoint = {
  x: number;
  y: number;
  // Distance along the path from its start.
  length: number;
};

export type FlightLayout = {
  width: number;
  height: number;
  points: FlightPoint[];
  path: string;
  total: number;
  // Where the long run down the margin ends and the turn toward Apply begins.
  turnIndex: number;
  // How far each waypoint (a project, the level card, the grid) is along the path.
  waypoints: FlightPoint[];
  // Size of one rocket pixel: smaller where the margin is narrow.
  pixel: number;
  // Page scroll positions where the rocket reaches the turn, and where it lands.
  turnScroll: number;
  landScroll: number;
};

export type RocketPose = {
  x: number;
  y: number;
  // Direction of travel along the path, in degrees (0 is right, 90 is down).
  heading: number;
};

const STEP = 8;

const TURN_RADIUS = 48;

const WAVELENGTH = 560;

// While flying down, the rocket drifts toward this height on screen (a share of the viewport).
const CRUISE_HEIGHT = 0.45;

// How much scrolling (in viewport heights) the turn and the run to Apply take.
const LANDING_SCROLL = 0.5;

const clamp = (value: number, min: number, max: number): number => Math.min(Math.max(value, min), max);

const pointAt = (points: FlightPoint[], index: number): FlightPoint =>
  points[clamp(index, 0, points.length - 1)] ?? { x: 0, y: 0, length: 0 };

// Binary search for the first point at or past `value`. Both fields only ever grow along the path: it never
// climbs back up the page, and the run across to Apply keeps a constant height.
const findIndex = (points: FlightPoint[], value: number, field: 'y' | 'length'): number => {
  let low = 0;
  let high = points.length - 1;

  while (low < high) {
    const middle = Math.floor((low + high) / 2);

    if (pointAt(points, middle)[field] < value) {
      low = middle + 1;
    } else {
      high = middle;
    }
  }

  return low;
};

// Distance along the path where it first reaches a given height.
const lengthAtY = (points: FlightPoint[], y: number): number => {
  const index = findIndex(points, y, 'y');
  const after = pointAt(points, index);
  const before = pointAt(points, index - 1);
  const span = after.y - before.y;

  return span > 0 ? before.length + ((y - before.y) / span) * (after.length - before.length) : after.length;
};

type Anchors = {
  gutter: number;
  startY: number;
  landX: number;
  landY: number;
};

// Down the margin with a gentle wave that fades in at the top and out before the turn, a quarter circle,
// then straight across to the Apply button.
const buildPoints = ({ gutter, startY, landX, landY }: Anchors): FlightPoint[] => {
  const x0 = Math.max(8, gutter / 2);
  const amplitude = clamp(x0 - 14, 0, 24);
  const turnY = landY - TURN_RADIUS;
  const raw: { x: number; y: number }[] = [];

  for (let y = startY; y < turnY; y += STEP) {
    const fade = Math.min(1, (turnY - y) / 300, (y - startY) / 200);

    raw.push({ x: x0 + amplitude * fade * Math.sin(((y - startY) / WAVELENGTH) * 2 * Math.PI), y });
  }

  for (let step = 0; step <= 12; step += 1) {
    const angle = (step / 12) * (Math.PI / 2);

    raw.push({ x: x0 + TURN_RADIUS - TURN_RADIUS * Math.cos(angle), y: turnY + TURN_RADIUS * Math.sin(angle) });
  }

  for (let x = x0 + TURN_RADIUS + 16; x < landX; x += 16) {
    raw.push({ x, y: landY });
  }

  raw.push({ x: Math.max(landX, x0 + TURN_RADIUS), y: landY });

  let length = 0;

  return raw.map((point, index) => {
    const previous = raw[index - 1];

    if (previous) {
      length += Math.hypot(point.x - previous.x, point.y - previous.y);
    }

    return { ...point, length };
  });
};

// Where the rocket is, and which way it's flying, at a distance along the path.
export const poseAt = (points: FlightPoint[], length: number): RocketPose => {
  const index = Math.max(1, findIndex(points, length, 'length'));
  const after = pointAt(points, index);
  const before = pointAt(points, index - 1);
  const span = after.length - before.length;
  const share = span > 0 ? clamp((length - before.length) / span, 0, 1) : 0;

  return {
    x: before.x + share * (after.x - before.x),
    y: before.y + share * (after.y - before.y),
    heading: (Math.atan2(after.y - before.y, after.x - before.x) * 180) / Math.PI,
  };
};

// Lays the path out against the page as it is right now. Null until the parts it connects are on the page.
export const measureFlight = (page: HTMLElement): FlightLayout | null => {
  const origin = page.getBoundingClientRect();
  const screen = page.querySelector('.pp9-screen');
  const firstScene = page.querySelector('.pp13-scene');
  const landing = page.querySelector('.pp9-continue .pp9-start');

  if (!screen || !firstScene || !landing) {
    return null;
  }

  const gutter = screen.getBoundingClientRect().left - origin.left;
  const pixel = gutter >= 60 ? 3 : 2;
  const pad = landing.getBoundingClientRect();
  const landY = pad.top - origin.top + pad.height / 2;
  // Leaves room for the rocket's nose (half its 11-pixel length) and a small gap before the button.
  const landX = pad.left - origin.left - pixel * 6 - 12;
  const startY = firstScene.getBoundingClientRect().top - origin.top;
  const points = buildPoints({ gutter, startY, landX, landY });
  const turnIndex = points.findIndex(point => point.y >= landY - TURN_RADIUS);
  const total = pointAt(points, points.length - 1).length;

  const waypoints = [...page.querySelectorAll('.pp13-scene, .pp13-level, .pp12-select')].map(element => {
    const y = clamp(element.getBoundingClientRect().top - origin.top + 28, startY, landY - TURN_RADIUS);
    const length = lengthAtY(points, y);

    return { ...poseAt(points, length), length };
  });

  const viewport = window.innerHeight;
  const maxScroll = document.documentElement.scrollHeight - viewport;
  const pageTop = origin.top + window.scrollY;
  const turnScroll = clamp(pageTop + landY - TURN_RADIUS - CRUISE_HEIGHT * viewport, 1, Math.max(1, maxScroll - 1));
  const landScroll = Math.max(turnScroll + 1, Math.min(maxScroll, turnScroll + LANDING_SCROLL * viewport));

  return {
    width: origin.width,
    height: origin.height,
    points,
    path: points
      .map((point, index) => `${index === 0 ? 'M' : 'L'}${point.x.toFixed(1)} ${point.y.toFixed(1)}`)
      .join(''),
    total,
    turnIndex,
    waypoints,
    pixel,
    turnScroll,
    landScroll,
  };
};

// How far along the path the rocket is for a scroll position. Down the margin it keeps pace with the page;
// the turn and the run to Apply happen over the last stretch of scrolling.
export const flightLengthAt = (layout: FlightLayout, scroll: number): number => {
  const { points, turnIndex, turnScroll, landScroll, total } = layout;
  const turnLength = pointAt(points, turnIndex).length;

  if (scroll <= turnScroll) {
    const startY = pointAt(points, 0).y;
    const turnY = pointAt(points, turnIndex).y;

    return lengthAtY(points, startY + (clamp(scroll, 0, turnScroll) / turnScroll) * (turnY - startY));
  }

  return turnLength + clamp((scroll - turnScroll) / (landScroll - turnScroll), 0, 1) * (total - turnLength);
};
