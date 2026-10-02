import React from 'react';

import './style.css';
import type { Team } from '@/data/teams';

import { WhatYouLearnJSON } from './JSONFiles/WhatYouLearnJSON';
import WhatYouLearn from './WhatYouLearn';

type WhatYouLearnProps = {
  team: Team;
};

export function WhatYouLearnContainer({ team }: WhatYouLearnProps) {
  return (
    <div className="roles-section">
      <div className="roles-title paragraph-title">WHAT YOU'LL LEARN</div>
      <WhatYouWillLearn team={team} />
    </div>
  );
}

function WhatYouWillLearn({ team }: WhatYouLearnProps) {
  const teamTopSection = WhatYouLearnJSON[team];

  if (!teamTopSection) {
    return null;
  }

  return (
    <>
      {teamTopSection.about.map((section, index) => (
        <WhatYouLearn
          key={index}
          title={section.header}
          description={section.body}
          picture={section.image}
          reverse={section.invert}
        />
      ))}
    </>
  );
}
