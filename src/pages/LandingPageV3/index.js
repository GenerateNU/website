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
import { useState, useEffect } from 'react'

import './style.css'

export default function LandingPageV3() {
  const whatIsGenerateRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, []) 

  return (
    <div id='page-bg'>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className='dialog'>
        <button onClick={() => setIsOpen(false)} id='close'>
          close x
        </button>

        <iframe
          id='luma'
          title='luma'
          src='https://luma.com/embed/event/evt-qcaL1sDb6Cg68Am/simple'
          width='100%'
          height='100%'
          frameBorder='0'
          style={{ border: 'none' }}
          allow='fullscreen; payment'
          aria-hidden='false'
          tabIndex='0'
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
