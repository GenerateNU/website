import React from 'react';

import './style.css';
import { TEAMS } from '../../../../data/teams';
import { OurRoles, Roles } from '../CommonTeam/OurRoles';

export default function ManagementContainer() {
  return (
    <div>
      <OurRoles>
        {TEAMS.map(team => (
          <Roles team={team} />
        ))}
      </OurRoles>
    </div>
  );
}
