import React from 'react';

import Featured from '../CommonTeam/Featured';
import Members from '../CommonTeam/Members';
import OurRoles from '../CommonTeam/OurRoles';
import Roles from '../CommonTeam/Roles';
import './style.css';
import { WhatYouLearnContainer } from '../CommonTeam/WhatYouLearnContainer';

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
