import React from 'react'
import OurMissionSection from './OurMissionSection'
import WeAreSection from './WeAreSection'
import Leadership from './Leadership'
import History from './History'
import Timeline from './Timeline'
import Stats from './Stats'
import WhyGenerateCarousel from './WhyGenerateCarousel'
import GrowthMantra from './GrowthMantra'
import Interested from '../LandingPageV2/Interested'
import Footer from '../Footer'
import NextPage from '../NextPage'
import './style.css'
import useWebsite from '../../shared/useWebsite'
import HorizontalDesktopContainer from '../DesktopMobileHandler/HorizontalDesktopContainer'
import NewMobileContainer from '../DesktopMobileHandler/NewMobileContainer'

export default function AboutPage() {
  const isWebsite = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  const mobile = !isBigScreen || !isWebsite

  const children = [
    <OurMissionSection />,
    <WeAreSection />,
    <Leadership />,
    <History />,
    // <Timeline />,
    // <Stats />,
    // <WhyGenerateCarousel />,
    // <GrowthMantra />,
    // <Interested page='About' />,
    <Footer />,
    <NextPage pageName='culture' url='/culture' />
  ]

  return !mobile ? (
    <HorizontalDesktopContainer desktopBGColor={'black'}>
      {children}
    </HorizontalDesktopContainer>
  ) : (
    <NewMobileContainer mobileBGColor={'black'}>{children}</NewMobileContainer>
  )
}
