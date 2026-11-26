import type { Project } from '@/data/projectData';

export type SortKey = 'mission' | 'launched' | 'crew';

export type SortDirection = 'ascending' | 'descending';

export type SortOrder = { key: SortKey; direction: SortDirection };

const seasonOrder = { Spring: 0, Summer: 1, Fall: 2 } as const;

// Year first, then season within the year, so Spring 2022 comes before Fall 2022.
const launchedValue = (project: Project): number => project.semester.year * 10 + seasonOrder[project.semester.season];

const compareBy: Record<SortKey, (a: Project, b: Project) => number> = {
  mission: (a, b) => a.name.localeCompare(b.name),
  launched: (a, b) => launchedValue(a) - launchedValue(b),
  crew: (a, b) => a.members.length - b.members.length,
};

// The direction a column takes on its first click: names read A to Z, dates and crews biggest first.
export const firstDirection: Record<SortKey, SortDirection> = {
  mission: 'ascending',
  launched: 'descending',
  crew: 'descending',
};

// A sorted copy; ties keep the list's own order (featured first), since Array.prototype.sort is stable.
export const sortMissions = (list: Project[], order: SortOrder | undefined): Project[] => {
  if (order === undefined) {
    return list;
  }

  const sign = order.direction === 'ascending' ? 1 : -1;
  const sorted = [...list];

  // The tsconfig lib predates `toSorted`; this sorts a fresh copy, so nothing shared is mutated.
  // oxlint-disable-next-line unicorn/no-array-sort
  sorted.sort((a, b) => sign * compareBy[order.key](a, b));

  return sorted;
};
