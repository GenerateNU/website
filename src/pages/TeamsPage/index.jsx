import React from 'react'
import './style.css'
import teamPageDetails from '../../data/teamPageDetails'
import TeamCard from './TeamCard'
//import DesktopMobileScrollAndBackgroundHandler from "../../component/DesktopMobileHandler";
import NewDesktopContainer from '../../component/DesktopMobileHandler/NewWebContainer'
import useWebsite from '../../shared/useWebsite'
import NewMobileContainer from '../../component/DesktopMobileHandler/NewMobileContainer'
import WebTeamContainer from './TeamPageAssets/WebTeamContainer'
import MobileTeamContainer from './TeamPageAssets/MobileTeamContainer'
import ScrollToTop from '../../component/ScrollToTop'

export default function TeamsPage() {
  const isWebsite = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  const mobile = !isBigScreen || !isWebsite

  const children = [
    teamPageDetails.map((team) => {
      return (
        <TeamCard
          {...{ color: team.color, name: team.name, image: team.largePic }}
        />
      )
    })
  ]
  // todo; possibly rename component
  return !mobile ? (
    <>
      <NewDesktopContainer
        children={[<WebTeamContainer>{children}</WebTeamContainer>]}
        desktopBGColor={'white'}
      />
    </>
  ) : (
    <>
      <NewMobileContainer
        children={[<MobileTeamContainer>{[children]}</MobileTeamContainer>]}
        mobileBGColor={'black'}
      />
    </>
  )
}
