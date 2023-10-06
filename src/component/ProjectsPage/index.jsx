import React from 'react'
import FeaturedProjects from './FeaturedProjects/FeaturedProjects'
import AllProjects from './AllProjects/AllProjects'
import Footer from '../Footer'
import NextPage from '../NextPage'
import NewDesktopContainer from '../../component/DesktopMobileHandler/NewWebContainer'
import useWebsite from '../../shared/useWebsite'
import NewMobileContainer from '../../component/DesktopMobileHandler/NewMobileContainer'

export default function ProjectsPage() {
  const isWebsite = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  const mobile = !isBigScreen || !isWebsite

  const children = [
    <FeaturedProjects />,
    <AllProjects />,
    <Footer />,
    <NextPage pageName='Apply' url='/apply' />
  ]

  return !mobile ? (
    <NewDesktopContainer children={children} desktopBGColor={'white'} />
  ) : (
    <NewMobileContainer children={children} mobileBGColor={'white'} />
  )
}
