import { queryOptions } from '@tanstack/react-query';
import { defineQuery } from 'groq';

import type { ApplicationRole, ApplyTeam } from '@/pages/ApplyPageV2/types';

import { client } from '../client';
import { urlFor } from '../image';
import type { ApplyTeamsQueryResult, BranchesQueryResult, StructuredTeamsQueryResult } from '../types.gen';

const branchesQuery = defineQuery(`*[_type == "team"]{
  "team": coalesce(team, ""),
  "teamAbbreviation": coalesce(team_abbreviation, ""),
  color{hex},
  "zIndex": coalesce(zIndex, 0)
} | order(zIndex)`);

const structuredTeamsQuery = defineQuery(`*[_type == "team" && team != "Clients" && defined(image.asset)]{
  "team": coalesce(team, ""),
  image,
  "teamDescription": coalesce(teamDescription, ""),
  "zIndex": coalesce(zIndex, 0),
  color{hex}
} | order(zIndex)`);

const applyTeamsQuery = defineQuery(`*[_type == "team"]{
  "team": coalesce(team, ""),
  color{hex},
  tags,
  teamDescription,
  contributorDescription,
  leadDescription,
  chiefDescription,
  externalLink,
  "contributorRoles": contributorRoles[]->{"role": coalesce(role, ""), applicationLink, activeApplication},
  "leadRoles": leadRoles[]->{"role": coalesce(role, ""), applicationLink, activeApplication},
  "chiefRoles": chiefRoles[]->{"role": coalesce(role, ""), applicationLink, activeApplication}
} | order(zIndex desc)`);

export type Branch = Omit<BranchesQueryResult[number], 'color'> & {
  color: string;
};

export type StructuredTeam = Omit<StructuredTeamsQueryResult[number], 'color' | 'image'> & {
  color: string;
  image: string;
};

const selectBranches = (branches: BranchesQueryResult): Branch[] =>
  branches.map(({ color, ...branch }) => ({
    ...branch,
    team: branch.team.toUpperCase(),
    teamAbbreviation: branch.teamAbbreviation.toUpperCase(),
    color: color?.hex ?? '',
  }));

const selectStructuredTeams = (teams: StructuredTeamsQueryResult): StructuredTeam[] =>
  teams.flatMap(({ image, color, ...team }) =>
    image ? [{ ...team, color: color?.hex ?? '', image: urlFor(image).url() }] : []
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

export const applyTeamsOptions = () =>
  queryOptions({
    queryKey: ['applyTeams'],
    queryFn: () => client.fetch(applyTeamsQuery),
    select: selectApplyTeams,
  });
