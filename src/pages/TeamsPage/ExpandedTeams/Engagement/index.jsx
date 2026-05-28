import { Members, OurRoles, Roles } from '../CommonTeam/OurRoles'
import { Featured } from '..'

import './style.css'

export default function EngagementContainer() {
  return (
    <>
      <OurRoles team='engagement'>
        <Roles team='engagement'>
          <Members team='engagement' />
        </Roles>
      </OurRoles>
      <Featured team='engagement'></Featured>
    </>
  )
}
