import React from 'react';

import './style.css';
//import DesktopMobileScrollAndBackgroundHandler from "@/component/DesktopMobileHandler";
import HorizontalDesktopContainer from '@/component/DesktopMobileHandler/HorizontalDesktopContainer';
import NewMobileContainer from '@/component/DesktopMobileHandler/NewMobileContainer';
import teamPageDetails from '@/data/teamPageDetails';
import useWebsite from '@/shared/useWebsite';

import TeamCard from './TeamCard';
import MobileTeamContainer from './TeamPageAssets/MobileTeamContainer';
import WebTeamContainer from './TeamPageAssets/WebTeamContainer';

export default function TeamsPage() {
  const isWebsite = useWebsite();
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches;
  const mobile = !isBigScreen || !isWebsite;

  const teamCards = teamPageDetails.map(team => (
    <TeamCard key={team.name} color={team.color} name={team.name} image={team.largePic} />
  ));
  // todo; possibly rename component

  return !mobile ? (
    <HorizontalDesktopContainer desktopBGColor={'white'}>
      <WebTeamContainer>{teamCards}</WebTeamContainer>
    </HorizontalDesktopContainer>
  ) : (
    <NewMobileContainer mobileBGColor={'black'}>
      <MobileTeamContainer>{teamCards}</MobileTeamContainer>
    </NewMobileContainer>
  );
}
