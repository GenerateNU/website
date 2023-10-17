import { Members, OurRoles, Roles } from '../ExpandedTeams/CommonTeam/OurRoles'
import './style.css'

export default function EngagementContainer() {
  return (
    <OurRoles team='engagement'>
      <Roles team='engagement'>
        <Members team='engagement' />
      </Roles>
    </OurRoles>
  )
}
