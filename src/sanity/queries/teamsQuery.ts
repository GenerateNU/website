import { queryOptions } from '@tanstack/react-query';
import { defineQuery } from 'groq';

import { client } from '../client';
import { urlFor } from '../image';
import type { ApplyTeamsQueryResult, LandingTeamsQueryResult } from '../types.gen';

const landingTeamsQuery = defineQuery(`*[_type == "team"] | order(zIndex) {
  "team": coalesce(team, ""),
  "teamAbbreviation": coalesce(team_abbreviation, ""),
  "teamDescription": coalesce(teamDescription, ""),
  image,
  color{hex}
}`);

const applyTeamsQuery = defineQuery(`*[_type == "team"] | order(zIndex desc) {
  "team": coalesce(team, ""),
  color{hex},
  tags,
  teamDescription,
  contributorDescription,
  leadDescription,
  chiefDescription,
  externalLink,
  "contributorRoles": contributorRoles[defined(@->_id)]->{"role": coalesce(role, ""), applicationLink, activeApplication},
  "leadRoles": leadRoles[defined(@->_id)]->{"role": coalesce(role, ""), applicationLink, activeApplication},
  "chiefRoles": chiefRoles[defined(@->_id)]->{"role": coalesce(role, ""), applicationLink, activeApplication}
}`);

type LandingTeam = LandingTeamsQueryResult[number];

export type ApplicationRole = {
  role: string;
  applicationLink?: string;
  activeApplication?: boolean;
};

export type ApplyTeam = {
  team: string;
  color: string;
  tags?: string[];
  teamDescription?: string;
  contributorDescription?: string;
  leadDescription?: string;
  chiefDescription?: string;
  contributorRoles?: ApplicationRole[];
  leadRoles?: ApplicationRole[];
  chiefRoles?: ApplicationRole[];
  externalLink?: string;
};

export type Branch = Pick<LandingTeam, 'team' | 'teamAbbreviation'> & {
  color: string;
};

export type StructuredTeam = Pick<LandingTeam, 'team' | 'teamDescription'> & {
  color: string;
  image: string;
};

const selectBranches = (teams: LandingTeamsQueryResult): Branch[] =>
  teams.map(({ team, teamAbbreviation, color }) => ({
    team: team.toUpperCase(),
    teamAbbreviation: teamAbbreviation.toUpperCase(),
    color: color?.hex ?? '',
  }));

const selectStructuredTeams = (teams: LandingTeamsQueryResult): StructuredTeam[] =>
  teams.flatMap(({ team, teamDescription, color, image }) =>
    team !== 'Clients' && image?.asset
      ? [{ team, teamDescription, color: color?.hex ?? '', image: urlFor(image).url() }]
      : []
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
    queryKey: ['landingTeams'],
    queryFn: () => client.fetch(landingTeamsQuery),
    select: selectBranches,
  });

export const structuredTeamsOptions = () =>
  queryOptions({
    queryKey: ['landingTeams'],
    queryFn: () => client.fetch(landingTeamsQuery),
    select: selectStructuredTeams,
  });

export const applyTeamsOptions = () =>
  queryOptions({
    queryKey: ['applyTeams'],
    queryFn: () => client.fetch(applyTeamsQuery),
    select: selectApplyTeams,
  });
