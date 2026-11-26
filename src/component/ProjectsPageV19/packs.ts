import { formatSemester } from '@/data/projectData';
import type { Project } from '@/data/projectData';

export type CardPack = {
  id: string;
  name: string;
  // Newest first.
  projects: Project[];
  // The project whose picture shows through the wrapper's window.
  lead: Project;
};

// Older projects are bundled into packs spanning this many years, counted up from the oldest.
const YEARS_PER_PACK = 3;

const seasons = ['Spring', 'Summer', 'Fall'];

const semesterRank = (project: Project): number =>
  project.semester.year * seasons.length + seasons.indexOf(project.semester.season);

const newestFirst = (list: Project[]): Project[] => {
  const sorted = [...list];

  // The tsconfig lib predates `toSorted`; this sorts a fresh copy, so nothing shared is mutated.
  // oxlint-disable-next-line unicorn/no-array-sort
  sorted.sort((a, b) => semesterRank(b) - semesterRank(a));

  return sorted;
};

// One semester names its pack after itself ("Spring 2026"); a spread of years after its first and last.
const namePack = (list: Project[]): string => {
  const semesters = new Set(list.map(project => formatSemester(project.semester)));
  const years = list.map(project => project.semester.year);
  const first = Math.min(...years);
  const last = Math.max(...years);

  if (semesters.size === 1) {
    return [...semesters][0] ?? String(first);
  }

  return first === last ? String(first) : `${first}–${last}`;
};

const makePack = (list: Project[]): CardPack | undefined => {
  const sorted = newestFirst(list);
  const lead = sorted.find(project => project.featured === true) ?? sorted[0];

  if (lead === undefined) {
    return undefined;
  }

  const name = namePack(sorted);

  return { id: name.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-'), name, projects: sorted, lead };
};

// The newest year is a pack of its own; everything older is bundled by span of years, newest pack first.
export const buildPacks = (list: Project[]): CardPack[] => {
  const sorted = newestFirst(list);
  const newestYear = sorted[0]?.semester.year;
  const older = sorted.filter(project => project.semester.year !== newestYear);
  const oldestYear = Math.min(...older.map(project => project.semester.year));
  const spans = new Map<number, Project[]>();

  for (const project of older) {
    const span = Math.floor((project.semester.year - oldestYear) / YEARS_PER_PACK);
    spans.set(span, [...(spans.get(span) ?? []), project]);
  }

  // Map keeps insertion order, and `older` is newest first, so the spans already come out newest first.
  const groups = [sorted.filter(project => project.semester.year === newestYear), ...spans.values()];

  return groups.flatMap(group => {
    const pack = makePack(group);

    return pack ? [pack] : [];
  });
};
