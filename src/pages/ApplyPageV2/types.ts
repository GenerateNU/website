export type ApplicationRole = {
  role: string;
  applicationLink?: string;
  activeApplication?: boolean;
};

export type SanityApplyTeam = {
  team: string;
  color: { hex: string };
  tags?: string[];
  teamDescription?: string;
  contributorDescription?: string;
  leadDescription?: string;
  chiefDescription?: string;
  contributorRoles?: ApplicationRole[] | null;
  leadRoles?: ApplicationRole[] | null;
  chiefRoles?: ApplicationRole[] | null;
  externalLink?: string;
};

export type ApplyTeam = Omit<SanityApplyTeam, 'color'> & {
  color: string;
};
