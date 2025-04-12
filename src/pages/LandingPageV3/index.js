import React, { useRef } from 'react'
import Navigation from './Navigation'
import WhatIsGenerate from './WhatIsGenerate'
import WeAre from './WeAre'
import WhyGenerate from './WhyGenerate'
import HowWereStrctured from './HowWereStructured'
import ChooseYourCharacter from './ChooseYourCharacter'
import CelebrateOurWins from './CelebrateOurWins'
import ParentOrgs from './ParentOrgs'
import Footer from './Footer'
import Sponsors from './Sponsors'
import { Dialog } from '@headlessui/react'
import { useState } from 'react'

import './style.css'

export default function LandingPageV3() {
  const whatIsGenerateRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false) // <-- set this to true to show the popup. 

  return (
    <div id='page-bg'>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className='dialog'>
        <button onClick={() => setIsOpen(false)} id='close'>
          close x
        </button>
        <iframe
          id='luma'
          title='luma'
          src='https://lu.ma/embed/event/evt-UaQFBOS5OeEEHwW/simple' {/* <-- edit this link to change the embedded page */}
          width='100%'
          height='434px'
          frameborder='0'
          allowfullscreen=''
          aria-hidden='false'
          tabindex='0'
        ></iframe>
      </Dialog>
      {isOpen && <div id='background' />}
      <Navigation
        scrollToWhatIsGenerate={() =>
          whatIsGenerateRef.current.scrollIntoView({ behavior: 'smooth' })
        }
      />
      <WhatIsGenerate ref={whatIsGenerateRef} />
      <WeAre />
      <WhyGenerate />
      <HowWereStrctured />
      <ChooseYourCharacter />
      <CelebrateOurWins />
      <Sponsors />
      <ParentOrgs />
      <Footer />
    </div>
  )
}
