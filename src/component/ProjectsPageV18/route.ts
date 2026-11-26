import projects, { groupProjectsByYear } from '@/data/projectData';
import type { Project } from '@/data/projectData';

const years = groupProjectsByYear(projects);

// The route, newest first: flying further out goes further back in time.
export const waypoints: Project[] = years.flatMap(group => group.projects);

export const lastWaypoint = waypoints.length - 1;

export const firstYear = years.at(-1)?.year;

export const lastYear = years[0]?.year;

// Where each year begins along the route, for the year markers the ship flies past.
export const yearStarts = years.map(({ year }) => ({
  year,
  index: waypoints.findIndex(project => project.semester.year === year),
}));

export const disciplineOf = (project: Project): string =>
  project.teams.map(team => (team === 'software' ? 'Software' : 'Hardware')).join(' + ');

// Software worlds are blue and hardware worlds red, as everywhere on the site; both is violet.
// Neighbours on the same team get different shades, so the route doesn't look like one planet repeating.
const tones = {
  software: [
    ['#a8d0ff', '#2f6fd6', '#0b1d45'],
    ['#9fe6f2', '#2789a8', '#08263a'],
    ['#c2c4ff', '#4d55c4', '#141844'],
  ],
  hardware: [
    ['#ffbcb0', '#cf4f3f', '#3f0f0a'],
    ['#ffd2a6', '#c2682c', '#3a1705'],
  ],
  both: [['#e4c2ff', '#8650cc', '#251046']],
};

const tonesFor = (project: Project): string[][] => {
  if (project.teams.length > 1) {
    return tones.both;
  }

  return project.teams[0] === 'hardware' ? tones.hardware : tones.software;
};

// A lit sphere: highlight up and to the left, falling into shadow on the far side.
export const planetSurface = (project: Project, index: number): string => {
  const options = tonesFor(project);
  const [light, base, dark] = options[index % options.length] ?? [];

  return `radial-gradient(circle at 32% 30%, ${light} 0%, ${base} 42%, ${dark} 88%)`;
};

export type MapPoint = {
  x: number;
  y: number;
};

// The route map: one ring per year, newest innermost, in fractions of the map's width.
const MAP_INNER = 0.15;

const MAP_OUTER = 0.44;

export const mapRings = years.map(({ year }, index) => ({
  year,
  radius: years.length > 1 ? MAP_INNER + ((MAP_OUTER - MAP_INNER) * index) / (years.length - 1) : MAP_INNER,
}));

const radiusOf = (year: number): number => mapRings.find(ring => ring.year === year)?.radius ?? MAP_OUTER;

// Each waypoint sits on its year's ring a fixed turn further round than the one before, so the route
// reads as one outward spiral from the newest project to the oldest.
const MAP_TURN = 330 / Math.max(1, waypoints.length);

export const mapPoints: MapPoint[] = waypoints.map((project, index) => {
  const angle = ((-90 + index * MAP_TURN) * Math.PI) / 180;
  const radius = radiusOf(project.semester.year);

  return { x: 0.5 + radius * Math.cos(angle), y: 0.5 + radius * Math.sin(angle) };
});

// Where the ship is on the map for a position along the route (in waypoints, may be fractional).
export const mapPointAt = (position: number): MapPoint => {
  const index = Math.min(Math.floor(position), lastWaypoint - 1);
  const from = mapPoints[Math.max(index, 0)] ?? { x: 0.5, y: 0.5 };
  const to = mapPoints[index + 1] ?? from;
  const share = position - Math.max(index, 0);

  return { x: from.x + (to.x - from.x) * share, y: from.y + (to.y - from.y) * share };
};

// How far along the drawn route each waypoint is, in map widths, so the travelled part can be lit.
const mapLengths: number[] = mapPoints.map((_, index) =>
  mapPoints.slice(1, index + 1).reduce((total, point, step) => {
    const previous = mapPoints[step] ?? point;

    return total + Math.hypot(point.x - previous.x, point.y - previous.y);
  }, 0)
);

export const mapRouteLength = mapLengths.at(-1) ?? 0;

export const mapLengthAt = (position: number): number => {
  const index = Math.min(Math.floor(position), lastWaypoint - 1);
  const from = mapLengths[Math.max(index, 0)] ?? 0;
  const to = mapLengths[index + 1] ?? from;

  return from + (to - from) * (position - Math.max(index, 0));
};
