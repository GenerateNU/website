export type TeamSection = {
  header: string;
  body: string;
  image: string;
  invert?: boolean;
};

export type FeaturedItem = {
  description: string;
  image: string;
  invert: boolean;
  button: string;
};

export type ExpandedTeam = {
  abbv: string;
  color: string;
  about: TeamSection[];
  featured?: {
    header: string;
    items: FeaturedItem[];
  };
};

export type MemberRole = {
  subheader: string;
  desc: string;
};

export type RoleGroup = {
  header: string;
  lead?: MemberRole;
  members: MemberRole[];
};

export type TeamRoles = {
  Director: {
    header: string;
    desc: string;
  };
  Roles?: RoleGroup[];
};

export type WhatYouLearnTeam = {
  about: TeamSection[];
};
