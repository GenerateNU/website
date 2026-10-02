import type { Team } from '@/data/teams';

export type ApplicationGroup = Team | 'clients';

type Category = Capitalize<ApplicationGroup>;

export type Position = {
  positionTitle: string;
  categoryType: Category;
  description: string;
  responsibilities: string;
  requirements: string;
  startDate: string;
  endDate: string;
  workCommitment: number;
  active: boolean;
  remarks: string;
  applicationLink: string;
};
