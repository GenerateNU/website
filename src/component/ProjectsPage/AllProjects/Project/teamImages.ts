import Data from '@/assets/images/projectspage/data.svg';
import Games from '@/assets/images/projectspage/games.svg';
import Hardware from '@/assets/images/projectspage/hardware.svg';
import Software from '@/assets/images/projectspage/software.svg';

import type { ProjectTeam } from './Project';

export const teamImages: Record<ProjectTeam, string> = {
  hardware: Hardware,
  software: Software,
  data: Data,
  games: Games,
};
