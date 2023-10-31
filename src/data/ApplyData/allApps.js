import Clients from './clients'
import Engagement from './engagement'
import Hardware from './hardware'
import Operations from './operations'
import Software from './software'

const applicationsByTeams = {
  clients: Clients,
  hardware: Hardware,
  software: Software,
  operations: Operations,
  management: [],
  engagement: Engagement,
}

export default applicationsByTeams
