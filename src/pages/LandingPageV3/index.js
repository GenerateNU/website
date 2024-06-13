import React, { useRef } from 'react'
import Navigation from './Navigation'
import Footer from '../../component/Footer/HorizontalFooter'
import useWebsite from '../../shared/useWebsite'
import VerticalDesktopContainer from '../../component/DesktopMobileHandler/VerticalDesktopContainer'
import NewMobileContainer from '../../component/DesktopMobileHandler/NewMobileContainer'
import WhatIsGenerate from './WhatIsGenerate'
import WeAre from './WeAre'
import WhyGenerate from './WhyGenerate'
import HowWereStrctured from './HowWereStructured'
import './style.css'

export default function LandingPageV3() {
  const whatIsGenerateRef = useRef(null)
  const children = [
    <Navigation
      scrollToWhatIsGenerate={() =>
        whatIsGenerateRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    />,
    <WhatIsGenerate ref={whatIsGenerateRef} />,
    <WeAre />,
    <WhyGenerate />,
    <HowWereStrctured />,
    <Footer />
  ]

  const isWebsite = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  const mobile = !isBigScreen || !isWebsite

  return !mobile ? (
    <VerticalDesktopContainer children={children} desktopBGColor={'black'} />
  ) : (
    <NewMobileContainer children={children} mobileBGColor={'black'} />
  )
}
