import Clients from './clients'
import Software from './software'
import Hardware from './hardware'

const applicationsByTeams = {
  clients: Clients,
  hardware: Hardware,
  software: Software,
  operations: [],
  management: [],
  engagement: []
}

export default applicationsByTeams
