import React from 'react';
import type { ReactNode } from 'react';

import '../style.css';

import Row from 'react-bootstrap/esm/Row';

import Footer from '../../../component/Footer/HorizontalFooter';
import NavBar from '../../../component/NavBar';
import NextPage from '../../../component/NextPage';

type MobileTeamContainerProps = {
  children: ReactNode;
};

export default function MobileTeamContainer({ children }: MobileTeamContainerProps) {
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child);
    }

    return child;
  });

  return (
    <div className="d-flex flex-row" tab-index="0">
      <Row className="flex-nowrap">
        <div className="intro-navbar">
          <NavBar />
        </div>
        <div className="d-flex flex-column">
          {childrenWithProps}
          <Footer />
          <NextPage pageName="Projects" url="/projects" />
        </div>
      </Row>
    </div>
  );
}
