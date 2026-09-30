import Clients from './clients';
import Engagement from './engagement';
import Hardware from './hardware';
import Operations from './operations';
import Software from './software';
import type { Position } from './types';

type ApplicationsByTeams = {
  clients: Position[];
  hardware: Position[];
  software: Position[];
  operations: Position[];
  management: Position[];
  engagement: Position[];
};

const applicationsByTeams: ApplicationsByTeams = {
  clients: Clients,
  hardware: Hardware,
  software: Software,
  operations: Operations,
  management: [],
  engagement: Engagement,
};

export default applicationsByTeams;
