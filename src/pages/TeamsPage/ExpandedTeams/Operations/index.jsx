import { Members, OurRoles, Roles } from '../CommonTeam/OurRoles'
import './style.css'

export default function OperationsContainer() {
  return (
    <OurRoles team='operations'>
      <Roles team='operations'>
        <Members team='operations' />
      </Roles>
    </OurRoles>
  )
}
