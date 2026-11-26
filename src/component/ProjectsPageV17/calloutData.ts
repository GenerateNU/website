import { formatSemester } from '@/data/projectData';
import type { Project, ProjectTeam } from '@/data/projectData';

export type Callout = { id: string; label: string } & (
  | { kind: 'teams'; teams: ProjectTeam[] }
  | { kind: 'text'; text: string }
  | { kind: 'quote'; text: string }
);

type CalloutSide = 'left' | 'right';

// Where a callout sits beside the frame: its side, its row (1 top to 3 bottom) and which way its leader slopes.
export type CalloutPlacement = {
  side: CalloutSide;
  row: 1 | 2 | 3;
  slope: 'down' | 'up';
};

// Keeps acronyms such as "UI/UX" as written and lowercases the rest, so roles read inside a sentence.
const formatRole = (role: string, count: number): string => {
  const name = role
    .split(' ')
    .map(word => (word === word.toUpperCase() ? word : word.toLowerCase()))
    .join(' ');

  return count > 1 ? `${count} ${name}s` : name;
};

const capitalize = (text: string): string => text.charAt(0).toUpperCase() + text.slice(1);

// Groups the members' roles in the order they first appear, e.g. "project lead, 2 software engineers".
const describeRoles = (project: Project): string => {
  const counts = new Map<string, number>();

  for (const { role } of project.members) {
    counts.set(role, (counts.get(role) ?? 0) + 1);
  }

  return [...counts].map(([role, count]) => formatRole(role, count)).join(', ');
};

const describeTeamSize = (project: Project): string =>
  `${project.members.length} ${project.members.length === 1 ? 'person' : 'people'}`;

// Only facts the project record holds. Without a client the team gets two callouts (size, roles);
// with one, they share a line so the client and their quote fit beside the frame.
export const getCallouts = (project: Project): Callout[] => {
  const shared: Callout[] = [
    { id: 'discipline', label: 'Discipline', kind: 'teams', teams: project.teams },
    { id: 'semester', label: 'Semester', kind: 'text', text: formatSemester(project.semester) },
  ];

  if (project.client === undefined) {
    return [
      ...shared,
      { id: 'team', label: 'Team', kind: 'text', text: describeTeamSize(project) },
      { id: 'roles', label: 'Roles', kind: 'text', text: capitalize(describeRoles(project)) },
    ];
  }

  return [
    ...shared,
    {
      id: 'built-by',
      label: 'Built by',
      kind: 'text',
      text: `${describeTeamSize(project)}: ${describeRoles(project)}`,
    },
    { id: 'client', label: 'Client', kind: 'text', text: `${project.client.name}, ${project.client.school}` },
    { id: 'quote', label: 'In their words', kind: 'quote', text: project.client.quote },
  ];
};

const rowsForCount = (count: number): CalloutPlacement['row'][] => {
  if (count === 1) {
    return [2];
  }

  return count === 2 ? [1, 3] : [1, 2, 3];
};

// The first half of the callouts go left of the frame, the rest right. Top-row leaders slope down
// and lower ones slope up, so every anchor dot lands on the frame's edge rather than above or below it.
export const placeCallout = (index: number, total: number): CalloutPlacement => {
  const leftCount = Math.ceil(total / 2);
  const side: CalloutSide = index < leftCount ? 'left' : 'right';
  const sideIndex = side === 'left' ? index : index - leftCount;
  const row = rowsForCount(side === 'left' ? leftCount : total - leftCount)[sideIndex] ?? 2;

  return { side, row, slope: row === 1 ? 'down' : 'up' };
};
