import type {
  AllCopyQueryResult,
  BranchesQueryResult,
  DirectorsQueryResult,
  ShowcasesQueryResult,
  StructuredTeamsQueryResult,
} from './types.gen';

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
