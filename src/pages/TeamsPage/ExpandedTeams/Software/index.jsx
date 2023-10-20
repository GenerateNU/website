import { Members, OurRoles, Roles } from '../CommonTeam/OurRoles'
import { Featured } from '..'
import './style.css'

export default function SoftwareContainer() {
  return (
    <>
      <OurRoles team='software'>
        <Roles team='software'>
          <Members team='software' />
        </Roles>
      </OurRoles>
      <Featured team='software'></Featured>
    </>
  )
}
