import React, { useRef } from 'react'
import Navigation from './Navigation'
import Footer from '../../component/Footer/HorizontalFooter'
import WhatIsGenerate from './WhatIsGenerate'
import WeAre from './WeAre'
import WhyGenerate from './WhyGenerate'
import HowWereStrctured from './HowWereStructured'
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
      <Footer />
    </div>
  )
}