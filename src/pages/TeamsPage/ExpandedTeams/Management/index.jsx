import React from 'react'
import './style.css'
import { Teams } from '../CommonTeam/JSONFiles/RolesJSON'
import { OurRoles, Roles } from '../CommonTeam/OurRoles'

export default function ManagementContainer() {
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
