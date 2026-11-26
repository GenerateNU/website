import projects from '@/data/projectData';
import type { Project, ProjectTeam } from '@/data/projectData';

type RoleCount = {
  role: string;
  count: number;
};

// Featured projects come first.
export const roster: Project[] = [
  ...projects.filter(project => project.featured === true),
  ...projects.filter(project => project.featured !== true),
];

// The flat colour band behind a project's name: blue for software, red for hardware, both halves for both.
export const getBand = (project: Project): string =>
  project.teams.length > 1 ? 'both' : (project.teams[0] ?? 'software');

export const matchesTeam = (project: Project, team: ProjectTeam | null): boolean =>
  team === null || project.teams.includes(team);

// Member names are placeholders, so the team is shown as its roles: "Software Engineer × 2".
export const countRoles = (project: Project): RoleCount[] => {
  const counts = new Map<string, number>();

  for (const member of project.members) {
    counts.set(member.role, (counts.get(member.role) ?? 0) + 1);
  }

  return [...counts].map(([role, count]) => ({ role, count }));
};

// The index of the last tile in the row that tile `index` sits in; the open panel goes right after it.
export const getRowEnd = (index: number, columns: number, count: number): number =>
  Math.min((Math.floor(index / columns) + 1) * columns, count) - 1;
