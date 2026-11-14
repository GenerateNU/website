import type { SanityImageSource } from '@sanity/image-url';
import { queryOptions, useQuery } from '@tanstack/react-query';

import type { ApplicationRole, ApplyTeam } from '@/pages/ApplyPageV2/types';

import { client, urlFor } from './client';
import {
  allCopyQuery,
  applyTeamsQuery,
  branchesQuery,
  directorsQuery,
  generateLinksQuery,
  showcasesQuery,
  structuredTeamsQuery,
  valuesQuery,
} from './queries';
import type {
  AllCopyQueryResult,
  ApplyTeamsQueryResult,
  BranchesQueryResult,
  DirectorsQueryResult,
  ShowcasesQueryResult,
  StructuredTeamsQueryResult,
} from './types.gen';

// Rendered widths (2x the largest displayed size) for each image use.
// Arcade screen is ~321 svg units wide.
const DIRECTOR_IMAGE_WIDTH = 650;

// Carousel image is 50vw.
const SHOWCASE_IMAGE_WIDTH = 1200;

// Wheel icon is 15% of a <=600px wheel.
const TEAM_ICON_WIDTH = 200;

export type Copy = AllCopyQueryResult[number];

export type Director = Omit<DirectorsQueryResult[number], 'color' | 'image'> & {
  color: string;
  image: string;
};

export type Branch = Omit<BranchesQueryResult[number], 'color'> & {
  color: string;
};

export type Showcase = Omit<ShowcasesQueryResult[number], 'image'> & {
  image: string;
};

export type StructuredTeam = Omit<StructuredTeamsQueryResult[number], 'color' | 'image'> & {
  color: string;
  image: string;
};

const EMPTY_COPY: Copy = { key: '', header: '', content: [] };

const imageUrl = (source: SanityImageSource, width: number) => urlFor(source).width(width).url();

const compareShowcases = (a: Showcase, b: Showcase) => {
  if (a.year === b.year) {
    return a.semester === 'SPRING' ? -1 : 1;
  }

  return Number(a.year) - Number(b.year);
};

const selectShowcases = (showcases: ShowcasesQueryResult): Showcase[] => {
  const sorted = showcases.map(showcase => ({
    ...showcase,
    semester: showcase.semester.toUpperCase(),
    image: imageUrl(showcase.image, SHOWCASE_IMAGE_WIDTH),
  }));

  sorted.sort(compareShowcases);

  return sorted;
};

const selectDirectors = (directors: DirectorsQueryResult): Director[] =>
  directors.map(director => ({
    ...director,
    color: director.color?.hex ?? '',
    image: imageUrl(director.image, DIRECTOR_IMAGE_WIDTH),
  }));

const selectBranches = (branches: BranchesQueryResult): Branch[] =>
  branches.map(({ color, ...branch }) => ({
    ...branch,
    team: branch.team.toUpperCase(),
    teamAbbreviation: branch.teamAbbreviation.toUpperCase(),
    color: color?.hex ?? '',
  }));

const selectStructuredTeams = (teams: StructuredTeamsQueryResult): StructuredTeam[] =>
  teams.flatMap(({ image, color, ...team }) =>
    image ? [{ ...team, color: color?.hex ?? '', image: imageUrl(image, TEAM_ICON_WIDTH) }] : []
  );

const selectRoles = (
  roles: NonNullable<ApplyTeamsQueryResult[number]['contributorRoles']> | null
): ApplicationRole[] | undefined =>
  roles?.map(role => ({
    role: role.role,
    applicationLink: role.applicationLink ?? undefined,
    activeApplication: role.activeApplication ?? undefined,
  }));

const selectApplyTeams = (teams: ApplyTeamsQueryResult): ApplyTeam[] =>
  teams.map(team => ({
    team: team.team,
    color: team.color?.hex ?? '',
    tags: team.tags ?? undefined,
    teamDescription: team.teamDescription ?? undefined,
    contributorDescription: team.contributorDescription ?? undefined,
    leadDescription: team.leadDescription ?? undefined,
    chiefDescription: team.chiefDescription ?? undefined,
    contributorRoles: selectRoles(team.contributorRoles),
    leadRoles: selectRoles(team.leadRoles),
    chiefRoles: selectRoles(team.chiefRoles),
    externalLink: team.externalLink ?? undefined,
  }));

export const generateLinksOptions = () =>
  queryOptions({
    queryKey: ['generateLinks'],
    queryFn: () => client.fetch(generateLinksQuery),
  });

const allCopyOptions = () =>
  queryOptions({
    queryKey: ['copy'],
    queryFn: () => client.fetch(allCopyQuery),
  });

export const showcasesOptions = () =>
  queryOptions({
    queryKey: ['showcases'],
    queryFn: () => client.fetch(showcasesQuery),
    select: selectShowcases,
  });

export const directorsOptions = () =>
  queryOptions({
    queryKey: ['directors'],
    queryFn: () => client.fetch(directorsQuery),
    select: selectDirectors,
  });

export const branchesOptions = () =>
  queryOptions({
    queryKey: ['branches'],
    queryFn: () => client.fetch(branchesQuery),
    select: selectBranches,
  });

export const structuredTeamsOptions = () =>
  queryOptions({
    queryKey: ['structuredTeams'],
    queryFn: () => client.fetch(structuredTeamsQuery),
    select: selectStructuredTeams,
  });

export const valuesOptions = () =>
  queryOptions({
    queryKey: ['values'],
    queryFn: () => client.fetch(valuesQuery),
  });

export const applyTeamsOptions = () =>
  queryOptions({
    queryKey: ['applyTeams'],
    queryFn: () => client.fetch(applyTeamsQuery),
    select: selectApplyTeams,
  });

/** Reads one copy doc out of the shared all-copy query. Empty copy while loading or if the key is missing. */
export function useCopy(key: string): Copy {
  const { data } = useQuery({
    ...allCopyOptions(),
    select: copies => copies.find(copy => copy.key === key) ?? EMPTY_COPY,
  });

  return data ?? EMPTY_COPY;
}
