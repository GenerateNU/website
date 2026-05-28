import React from 'react'
import { Members, OurRoles, Roles } from '../CommonTeam/OurRoles'
import { Featured } from '..'
import './style.css'
import { WhatYouLearnContainer } from '../CommonTeam/WhatYouLearnContainer'

export default function SoftwareContainer() {
  return (
    <>
      <WhatYouLearnContainer team='software'> </WhatYouLearnContainer>
      <OurRoles team='software'>
        <Roles team='software'>
          <Members team='software' />
        </Roles>
      </OurRoles>
      <Featured team='software'></Featured>
    </>
  )
}
