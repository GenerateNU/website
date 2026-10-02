import React from 'react';

import Featured from '@/pages/TeamsPage/ExpandedTeams/CommonTeam/Featured';
import Members from '@/pages/TeamsPage/ExpandedTeams/CommonTeam/Members';
import OurRoles from '@/pages/TeamsPage/ExpandedTeams/CommonTeam/OurRoles';
import Roles from '@/pages/TeamsPage/ExpandedTeams/CommonTeam/Roles';

import './style.css';
import { WhatYouLearnContainer } from '@/pages/TeamsPage/ExpandedTeams/CommonTeam/WhatYouLearnContainer';

export default function HardwareContainer() {
  return (
    <>
      <WhatYouLearnContainer team="hardware" />
      <OurRoles>
        <Roles team="hardware">
          <Members team="hardware" />
        </Roles>
      </OurRoles>
      <Featured team="hardware"></Featured>
    </>
  );
}
