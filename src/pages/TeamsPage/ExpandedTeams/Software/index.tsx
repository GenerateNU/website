import React from 'react';

import Featured from '@/pages/TeamsPage/ExpandedTeams/CommonTeam/Featured';
import Members from '@/pages/TeamsPage/ExpandedTeams/CommonTeam/Members';
import OurRoles from '@/pages/TeamsPage/ExpandedTeams/CommonTeam/OurRoles';
import Roles from '@/pages/TeamsPage/ExpandedTeams/CommonTeam/Roles';

import './style.css';
import { WhatYouLearnContainer } from '@/pages/TeamsPage/ExpandedTeams/CommonTeam/WhatYouLearnContainer';

export default function SoftwareContainer() {
  return (
    <>
      <WhatYouLearnContainer team="software" />
      <OurRoles>
        <Roles team="software">
          <Members team="software" />
        </Roles>
      </OurRoles>
      <Featured team="software"></Featured>
    </>
  );
}
