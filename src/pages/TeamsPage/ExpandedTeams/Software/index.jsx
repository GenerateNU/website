import React from 'react'
import { Members, OurRoles, Roles } from '../CommonTeam/OurRoles'
import { Featured } from '..'
import './style.css'
import useWebsite from '../../../../shared/useWebsite'
import { Teams } from '../CommonTeam/JSONFiles/RolesJSON'
import { OurRoles, Roles } from '../CommonTeam/OurRoles'
import { WhatYouLearnContainer } from '../CommonTeam/WhatYouLearnContainer'

export default function SoftwareContainer() {
  const isWebsite = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  const mobile = !isBigScreen || !isWebsite
  return (
    <>
      <WhatYouLearnContainer>
        {Teams.map((team) => (
          <Roles team={team} />
        ))}
      </WhatYouLearnContainer>
      <OurRoles team='software'>
        <Roles team='software'>
          <Members team='software' />
        </Roles>
      </OurRoles>
      <Featured team='software'></Featured>
    </>
  )
}
