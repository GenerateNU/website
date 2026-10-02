import React from 'react';

import useWebsite from '../../shared/useWebsite';
import HorizontalDesktopContainer from '../DesktopMobileHandler/HorizontalDesktopContainer';
import NewMobileContainer from '../DesktopMobileHandler/NewMobileContainer';
import Footer from '../Footer';
import NextPage from '../NextPage';
import BelongHere from './BelongHere';
import CollageSection from './Collage';
import Diversity from './Diversity';
import Equity from './Equity';
import Events from './Events';
import Events2 from './Events2';
import Events3 from './Events3';
import './style.css';
import Inclusion from './Inclusion';
import IntroImages from './IntroImages';
import IntroSection from './IntroSection';
import Showcase from './Showcase';

export default function CulturePage() {
  const isWebsite = useWebsite();
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches;
  const mobile = !isBigScreen || !isWebsite;

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
    <NextPage pageName="teams" url="/teams" />,
  ];

  return !mobile ? (
    <HorizontalDesktopContainer desktopBGColor={'white'}>{children}</HorizontalDesktopContainer>
  ) : (
    <NewMobileContainer mobileBGColor={'white'}>{children}</NewMobileContainer>
  );
}
