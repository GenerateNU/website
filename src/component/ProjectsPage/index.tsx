import React from 'react';

import HorizontalDesktopContainer from '@/component/DesktopMobileHandler/HorizontalDesktopContainer';
import NewMobileContainer from '@/component/DesktopMobileHandler/NewMobileContainer';
import Footer from '@/component/Footer';
import NextPage from '@/component/NextPage';
import useWebsite from '@/shared/useWebsite';

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
