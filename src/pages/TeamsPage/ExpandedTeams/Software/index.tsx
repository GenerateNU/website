import React from 'react';

import { Featured } from '..';
import { Members, OurRoles, Roles } from '../CommonTeam/OurRoles';
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
