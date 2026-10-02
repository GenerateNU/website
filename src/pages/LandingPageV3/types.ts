import type { SanityImageSource } from '@sanity/image-url';

type SanityColor = {
  hex: string;
};

export type Copy = {
  header: string;
  content: string[];
};

export type Value = {
  value: string;
  index: number;
};

export type SanityShowcase = {
  year: string;
  semester: string;
  image: SanityImageSource;
};

export type Showcase = Omit<SanityShowcase, 'image'> & {
  image: string;
};

export type SanityDirector = {
  team: string;
  title: string;
  name: string;
  email: string;
  color: SanityColor;
  image: SanityImageSource;
  zIndex: number;
};

export type Director = Omit<SanityDirector, 'color' | 'image'> & {
  color: string;
  image: string;
};

export type SanityBranch = {
  team: string;
  team_abbreviation?: string;
  color: SanityColor;
  zIndex: number;
};

export type Branch = SanityBranch & {
  teamAbbreviation: string;
};

export type SanityStructuredTeam = {
  team: string;
  image: SanityImageSource;
  teamDescription: string;
  zIndex: number;
  color: SanityColor;
};

export type StructuredTeam = Omit<SanityStructuredTeam, 'image'> & {
  image: string;
};
