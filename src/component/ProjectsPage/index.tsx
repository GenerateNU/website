import './vertical.css';
import React from 'react';

import NewMobileContainer from '@/component/DesktopMobileHandler/NewMobileContainer';
import HorizontalFooter from '@/component/Footer/HorizontalFooter';
import NextPage from '@/component/NextPage';

import AllProjects from './AllProjects/AllProjects';
import FeaturedProjects from './FeaturedProjects/FeaturedProjects';

export default function ProjectsPage() {
  return (
    <NewMobileContainer mobileBGColor={'white'} containerClassName="projects-vertical">
      <FeaturedProjects />
      <AllProjects />
      <HorizontalFooter />
      <NextPage pageName="Apply" url="/apply" />
    </NewMobileContainer>
  );
}
