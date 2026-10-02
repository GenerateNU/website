import React from 'react';
import type { ReactNode } from 'react';

import '@/pages/TeamsPage/style.css';

import Row from 'react-bootstrap/esm/Row';

import Footer from '@/component/Footer';
import NavBar from '@/component/NavBar';
import NextPage from '@/component/NextPage';

type WebTeamContainerProps = {
  children: ReactNode;
};

export default function WebTeamContainer({ children }: WebTeamContainerProps) {
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child);
    }

    return child;
  });

  return (
    <div className="vh-100 bg-white container-fluid" tab-index="0">
      <Row className="flex-nowrap">
        <div className="intro-navbar">
          <NavBar />
        </div>
        {childrenWithProps}
        <Footer />
        <NextPage pageName="Projects" url="/projects" />
      </Row>
    </div>
  );
}
