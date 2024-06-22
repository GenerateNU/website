
import React from 'react'
import './style.css'
import { WhatYouLearnJSON } from './JSONFiles/WhatYouLearnJSON'
import WhatYouLearn from './WhatYouLearn'
 

export function WhatYouLearnContainer() {
  const team = window.location.pathname.split('/').pop()
  return (
    <div className='roles-section'>
      <div className='roles-title paragraph-title'>WHAT YOU'LL LEARN</div>
       <WhatYouWillLearn team={team} />
       </div>
  )
}

function WhatYouWillLearn({ team }) {
  const teamTopSection = WhatYouLearnJSON[team]
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
  )
}
