import React from 'react'
import WhatWeOffer from './WhatWeOffer'
import Interested from './Interested'
import FeaturedProjects from './FeaturedProjects'
import FP1 from './FP1'
import PreviousProjects from './PreviousProjects'
import FP2 from './FP2'
import ProductDevelopment from './ProductDevLifecycle/ProductDevelopment'
import Ideation from './ProductDevLifecycle/Ideation'
import Prototype from './ProductDevLifecycle/Prototype'
import Production from './ProductDevLifecycle/Production'
import Intro from './Introduction'
import WhoWeAre from './WhoWeAre'
import WhoWeAreResponse from './WhoWeAreResponse'
import './style.css'
import Management from './Management'
import Footer from '../Footer'
import NextPage from '../NextPage'
import DesktopMobileScrollAndBackgroundHandler from '../DesktopMobileHandler'
import useWebsite from '../../shared/useWebsite'
import NewDesktopContainer from '../../component/DesktopMobileHandler/NewWebContainer'
import NewMobileContainer from '../DesktopMobileHandler/NewMobileContainer'

export default function LandingPageV2() {
  const isWebsite = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  const mobile = !isBigScreen || !isWebsite

  const children = [
    <Intro />,
    <WhoWeAre />,
    <WhoWeAreResponse />,
    <WhatWeOffer />,
    <ProductDevelopment />,
    <Ideation />,
    <Prototype />,
    <Production />,
    <Management />,
    <FeaturedProjects />,
    <FP1 />,
    <FP2 />,
    <PreviousProjects />,
    <Interested page='Landing' />,
    <Footer />,
    <NextPage pageName='about' url='/about' />
  ]

  return !mobile ? (
    <NewDesktopContainer desktopBGColor={'white'}>
      {children}
    </NewDesktopContainer>
  ) : (
    <NewMobileContainer mobileBGColor={'black'}>{children}</NewMobileContainer>
  )
}
