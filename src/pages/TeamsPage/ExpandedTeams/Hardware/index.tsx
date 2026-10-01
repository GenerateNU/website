import React from 'react';

import { Featured } from '..';
import { Members, OurRoles, Roles } from '../CommonTeam/OurRoles';
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
