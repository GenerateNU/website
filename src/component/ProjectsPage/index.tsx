import React from 'react';

import NewMobileContainer from '../../component/DesktopMobileHandler/NewMobileContainer';
import useWebsite from '../../shared/useWebsite';
import HorizontalDesktopContainer from '../DesktopMobileHandler/HorizontalDesktopContainer';
import Footer from '../Footer';
import NextPage from '../NextPage';
import AllProjects from './AllProjects/AllProjects';
import FeaturedProjects from './FeaturedProjects/FeaturedProjects';

export default function ProjectsPage() {
  const isWebsite = useWebsite();
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches;
  const mobile = !isBigScreen || !isWebsite;

  const children = (
    <>
      <FeaturedProjects />
      <AllProjects />
      <Footer />
      <NextPage pageName="Apply" url="/apply" />
    </>
  );

  return !mobile ? (
    <HorizontalDesktopContainer desktopBGColor={'white'}>{children}</HorizontalDesktopContainer>
  ) : (
    <NewMobileContainer mobileBGColor={'white'}>{children}</NewMobileContainer>
  );
}
