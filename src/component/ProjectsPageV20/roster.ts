import projects from '@/data/projectData';
import type { Project, ProjectTeam } from '@/data/projectData';

type RoleCount = {
  role: string;
  count: number;
};

// Featured projects come first, so the monitor opens on one with a description (and maybe a video).
export const roster: Project[] = [
  ...projects.filter(project => project.featured === true),
  ...projects.filter(project => project.featured !== true),
];

// The flat colour band under a project's picture: blue for software, red for hardware, both halves for both.
export const getBand = (project: Project): string =>
  project.teams.length > 1 ? 'both' : (project.teams[0] ?? 'software');

export const matchesTeam = (project: Project, team: ProjectTeam | null): boolean =>
  team === null || project.teams.includes(team);

// The project on either side of `project` in `list`, wrapping around at the ends.
export const getNeighbour = (list: Project[], project: Project, step: 1 | -1): Project => {
  const index = list.indexOf(project);

  return list[(index + step + list.length) % list.length] ?? project;
};

// Member names are placeholders, so the team is shown as its roles: "Software Engineer × 2".
export const countRoles = (project: Project): RoleCount[] => {
  const counts = new Map<string, number>();

  for (const member of project.members) {
    counts.set(member.role, (counts.get(member.role) ?? 0) + 1);
  }

  return [...counts].map(([role, count]) => ({ role, count }));
};

// The projects to walk while one is open. One reached through Back/Forward may sit outside the current
// filter; then the list shows them all.
export const getOpenList = (visible: Project[], project: Project | undefined): Project[] =>
  project === undefined || visible.includes(project) ? visible : roster;

// Chooses a project. `viaKeyboard` says the visitor pressed Enter or Space, so focus should follow.
export type SelectProject = (slug: string, viaKeyboard: boolean) => void;
