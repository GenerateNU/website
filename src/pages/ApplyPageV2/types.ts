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
