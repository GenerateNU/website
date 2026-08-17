import React from 'react'
import FeaturedProjects from './FeaturedProjects/FeaturedProjects'
import AllProjects from './AllProjects/AllProjects'
import Footer from '../Footer'
import NextPage from '../NextPage'
import VerticalDesktopContainer from '../DesktopMobileHandler/VerticalDesktopContainer'
import useWebsite from '../../shared/useWebsite'
import NewMobileContainer from '../../component/DesktopMobileHandler/NewMobileContainer'

export default function ProjectsPage() {
  const isWebsite = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  const mobile = !isBigScreen || !isWebsite

  const children = [<FeaturedProjects />, 
  // <AllProjects />, <Footer />

  ]

  return !mobile ? (
    <VerticalDesktopContainer
      children={children}
      id='page-bg'
      className='page-bg--lr-vignette'
    />
  ) : (
    <NewMobileContainer
      children={children}
      id='page-bg'
      className='page-bg--lr-vignette'
    />
  )
}
