import React from 'react'
import './style.css'
import useWebsite from '../../../../shared/useWebsite'
import { Teams } from '../CommonTeam/JSONFiles/RolesJSON'
import { OurRoles, Roles } from '../CommonTeam/OurRoles'

export default function ManagementContainer() {
  const isWebsite = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  const mobile = !isBigScreen || !isWebsite
  return (
    <div>
      <OurRoles>
        {Teams.map((team) => (
          <Roles team={team} />
        ))}
      </OurRoles>
    </div>
  )
}
