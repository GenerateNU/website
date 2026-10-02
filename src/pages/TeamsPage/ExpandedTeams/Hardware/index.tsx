import React from 'react';

import Featured from '../CommonTeam/Featured';
import Members from '../CommonTeam/Members';
import OurRoles from '../CommonTeam/OurRoles';
import Roles from '../CommonTeam/Roles';
import './style.css';
import { WhatYouLearnContainer } from '../CommonTeam/WhatYouLearnContainer';

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
