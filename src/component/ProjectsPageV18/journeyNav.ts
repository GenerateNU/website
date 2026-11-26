import { formatSemester } from '@/data/projectData';

import { lastWaypoint, waypoints } from './route';

// Within this far of a waypoint (in waypoints), the ship counts as docked there.
const DOCK_RADIUS = 0.2;

const LOG_LINES = 3;

export type Nav = {
  // The nearest waypoint, which the telemetry describes.
  waypoint: number;
  docked: boolean;
  // Where the ship is headed while in transit.
  next: number;
  log: string[];
};

type Reading = Omit<Nav, 'log'>;

export const clamp = (value: number, min: number, max: number): number => Math.min(Math.max(value, min), max);

const nameAt = (index: number): string => waypoints[index]?.name ?? '';

const dockedLine = (index: number): string => {
  const project = waypoints[index];

  return project === undefined ? '' : `Docked at ${project.name} · ${formatSemester(project.semester)}`;
};

export const initialNav: Nav = {
  waypoint: 0,
  docked: true,
  next: 0,
  log: [`Route loaded: ${waypoints.length} waypoints`, dockedLine(0)],
};

// What the instruments say at a position along the route, heading forwards or back.
export const readPosition = (position: number, forward: boolean): Reading => {
  const waypoint = clamp(Math.round(position), 0, lastWaypoint);
  const docked = Math.abs(position - waypoint) < DOCK_RADIUS;
  const next = clamp(forward ? Math.ceil(position) : Math.floor(position), 0, lastWaypoint);

  return { waypoint, docked, next: docked ? waypoint : next };
};

const append = (log: string[], line: string): string[] => [...log, line].slice(-LOG_LINES);

// The next state, or the same object when nothing changed (so React skips the render). A line goes into
// the comms log on docking and on setting course for a new waypoint.
export const advanceNav = (previous: Nav, reading: Reading): Nav => {
  const { waypoint, docked, next } = reading;

  if (waypoint === previous.waypoint && docked === previous.docked && next === previous.next) {
    return previous;
  }

  const changedCourse = docked ? previous.waypoint !== waypoint || !previous.docked : previous.next !== next;
  const line = docked ? dockedLine(waypoint) : `Course set for ${nameAt(next)}`;

  return { ...reading, log: changedCourse ? append(previous.log, line) : previous.log };
};

// The waypoint one step away. Mid-transit, "next" is the one ahead and "previous" the one just left.
export const stepFrom = (position: number, direction: 1 | -1): number =>
  direction === 1
    ? clamp(Math.floor(position + DOCK_RADIUS) + 1, 0, lastWaypoint)
    : clamp(Math.ceil(position - DOCK_RADIUS) - 1, 0, lastWaypoint);
