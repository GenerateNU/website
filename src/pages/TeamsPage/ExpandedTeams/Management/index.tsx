import React from 'react';

import './style.css';
import { TEAMS } from '@/data/teams';
import OurRoles from '@/pages/TeamsPage/ExpandedTeams/CommonTeam/OurRoles';
import Roles from '@/pages/TeamsPage/ExpandedTeams/CommonTeam/Roles';

export default function ManagementContainer() {
  return (
    <div>
      <OurRoles>
        {TEAMS.map(team => (
          <Roles key={team} team={team} />
        ))}
      </OurRoles>
    </div>
  );
}
