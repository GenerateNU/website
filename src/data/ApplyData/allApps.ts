import Clients from './clients';
import Engagement from './engagement';
import Hardware from './hardware';
import Operations from './operations';
import Software from './software';
import type { Position } from './types';

type Team = 'clients' | 'hardware' | 'software' | 'operations' | 'management' | 'engagement';

const applicationsByTeams: Record<Team, Position[]> = {
  clients: Clients,
  hardware: Hardware,
  software: Software,
  operations: Operations,
  management: [],
  engagement: Engagement,
};

export default applicationsByTeams;
