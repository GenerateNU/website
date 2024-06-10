import React from 'react'
import WhatWeOffer from '../../component/LandingPageV2/WhatWeOffer'
import Interested from '../../component/LandingPageV2/Interested'
import ProductDevelopment from '../../component/LandingPageV2/ProductDevLifecycle/ProductDevelopment'
import Ideation from '../../component/LandingPageV2/ProductDevLifecycle/Ideation'
import Prototype from '../../component/LandingPageV2/ProductDevLifecycle/Prototype'
import Production from '../../component/LandingPageV2/ProductDevLifecycle/Production'
import Intro from '../../component/LandingPageV2/Introduction'
import WhoWeAre from '../../component/LandingPageV2/WhoWeAre'
import WhoWeAreResponse from '../../component/LandingPageV2/WhoWeAreResponse'
import Management from '../../component/LandingPageV2/Management'
import Footer from '../../component/Footer'
import NextPage from '../../component/NextPage'
import useWebsite from '../../shared/useWebsite'
import VerticalDesktopContainer from '../../component/DesktopMobileHandler/VerticalDesktopContainer'
import NewMobileContainer from '../../component/DesktopMobileHandler/NewMobileContainer'

export default function LandingPageV3() {
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
    <Interested page='Landing' />,
    <Footer />,
    <NextPage pageName='about' url='/about' />
  ]

  const isWebsite = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  const mobile = !isBigScreen || !isWebsite

  return !mobile ? (
    <VerticalDesktopContainer children={children} desktopBGColor={'white'} />
  ) : (
    <NewMobileContainer children={children} mobileBGColor={'white'} />
  )
}
