import React from 'react'
import { Members, OurRoles, Roles } from '../CommonTeam/OurRoles'
import { Featured } from '..'
import './style.css'
import useWebsite from '../../../../shared/useWebsite'
import { WhatYouLearnContainer } from '../CommonTeam/WhatYouLearnContainer'

export default function HardwareContainer() {
  const isWebsite = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  const mobile = !isBigScreen || !isWebsite
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
