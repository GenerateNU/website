
import React from 'react'
import './style.css'
import useWebsite from '../../../../shared/useWebsite'
import { WhatYouLearnJSON } from './JSONFiles/WhatYouLearnJSON'
import WhatYouLearn from './WhatYouLearn'
 

export function WhatYouLearnContainer() {
  const isWebsite = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  const mobile = !isBigScreen || !isWebsite
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
