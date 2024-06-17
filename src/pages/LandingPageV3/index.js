import React, { useRef } from 'react'
import Navigation from './Navigation'
import WhatIsGenerate from './WhatIsGenerate'
import WeAre from './WeAre'
import WhyGenerate from './WhyGenerate'
import HowWereStrctured from './HowWereStructured'
import ChooseYourCharacter from './ChooseYourCharacter'
import CelebrateOurWins from './CelebrateOurWins'
import WebFooter from './Footer/WebFooter'
import MobileFooter from './Footer/MobileFooter'
import Footer from './Footer'
import './style.css'

export default function LandingPageV3() {
  const whatIsGenerateRef = useRef(null)

  return (
    <div id='page-bg'>
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
      <Footer />
      {/* <Footer /> */}
    </div>
  )
}
