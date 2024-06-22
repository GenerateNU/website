import React from 'react'
import { Members, OurRoles, Roles } from '../CommonTeam/OurRoles'
import { Featured } from '..'
import './style.css'
import { WhatYouLearnContainer } from '../CommonTeam/WhatYouLearnContainer'

export default function HardwareContainer() {
  return (
    <>
      <WhatYouLearnContainer team='hardware'> </WhatYouLearnContainer>
      <OurRoles team='hardware'>
        <Roles team='hardware'>
          <Members team='hardware' />
        </Roles>
      </OurRoles>
      <Featured team='hardware'></Featured>
    </>
  )
}
