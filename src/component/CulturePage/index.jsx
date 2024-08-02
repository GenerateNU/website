import React from 'react'
import CollageSection from './Collage'
import Events from './Events'
import Events2 from './Events2'
import Events3 from './Events3'
import IntroSection from './IntroSection'
import IntroImages from './IntroImages'
import BelongHere from './BelongHere'
import Inclusion from './Inclusion'
import Equity from './Equity'
import Diversity from './Diversity'
import Footer from '../Footer'
import Showcase from './Showcase'
import './style.css'
import NextPage from '../NextPage'
import useWebsite from '../../shared/useWebsite'
import HorizontalDesktopContainer from '../DesktopMobileHandler/HorizontalDesktopContainer'
import NewMobileContainer from '../DesktopMobileHandler/NewMobileContainer'

export default function CulturePage() {
  const isWebsite = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  const mobile = !isBigScreen || !isWebsite

  const children = [
    <IntroSection disp={mobile} />,
    <IntroImages disp={mobile} />,
    <BelongHere disp={mobile} />,
    <Diversity disp={mobile} />,
    <Equity disp={mobile} />,
    <Inclusion disp={mobile} />,
    <Events disp={mobile} />,
    <Events2 disp={mobile} />,
    mobile ? undefined : <Events3 />,
    mobile ? undefined : <Showcase />,
    <CollageSection disp={mobile} />,
    <Footer />,
    <NextPage pageName='teams' url='/teams' />
  ]

  return !mobile ? (
    <HorizontalDesktopContainer desktopBGColor={'white'}>
      {children}
    </HorizontalDesktopContainer>
  ) : (
    <NewMobileContainer mobileBGColor={'white'}>{children}</NewMobileContainer>
  )
}
