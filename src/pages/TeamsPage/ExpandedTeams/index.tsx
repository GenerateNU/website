import React from 'react';
import type { ComponentType } from 'react';

import './style.css';
import { useParams } from 'react-router';

import NavBar from '@/component/NavBar';
import { isTeam } from '@/data/teams';
import type { Team } from '@/data/teams';
import useWebsite from '@/shared/useWebsite';

import { ExpandedTeamsJSON } from './CommonTeam/JSONFiles/ExpandedTeamsJSON';
import TeamPageFooter from './CommonTeam/TeamPageFooter';
import TextRow from './CommonTeam/textRow';
import EngagementContainer from './Engagement';
import HardwareContainer from './Hardware';
import ManagementContainer from './Management';
import OperationsContainer from './Operations';
import SoftwareContainer from './Software';

type TeamProps = {
  team: Team;
};

const teamContainers: Record<Team, ComponentType> = {
  management: ManagementContainer,
  operations: OperationsContainer,
  software: SoftwareContainer,
  hardware: HardwareContainer,
  engagement: EngagementContainer,
};

export default function ExpandedTeamsPage() {
  const isWebsite = useWebsite();
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches;
  const mobile = !isBigScreen || !isWebsite;
  const { team } = useParams();

  if (!isTeam(team)) {
    return null;
  }

  const Container = teamContainers[team];

  return (
    <div className="expanded-wrapper">
      <div className="intro-navbar">
        <NavBar />
      </div>
      <div>
        {!mobile ? <ExpandedTeamsHeader team={team} /> : <ExpandedTeamsMobileHeader team={team} />}
        <div className="expanded-team-page-margins">
          <WhatWeDoHowWeWork team={team} />
          <Container />
        </div>
        <TeamPageFooter color={ExpandedTeamsJSON[team].color} page={ExpandedTeamsJSON[team].abbv} />
      </div>
    </div>
  );
}

function WhatWeDoHowWeWork({ team }: TeamProps) {
  const teamTopSection = ExpandedTeamsJSON[team];

  return (
    <>
      {teamTopSection.about.map((section, index) => (
        <TextRow
          key={index}
          title={section.header}
          description={section.body}
          picture={section.image}
          reverse={section.invert}
        />
      ))}
    </>
  );
}

function ExpandedTeamsHeader({ team }: TeamProps) {
  const teamTopSection = ExpandedTeamsJSON[team];

  return (
    <div className="header-wrapper">
      <div className="management-header" style={{ backgroundColor: teamTopSection.color }}>
        <div className="header-title">
          <div className="header-text" style={{ color: teamTopSection.color }}>
            <div style={{ marginTop: '-10%', marginBottom: '-10%' }}>{teamTopSection.abbv}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExpandedTeamsMobileHeader({ team }: TeamProps) {
  const teamTopSection = ExpandedTeamsJSON[team];

  return (
    <div className="mobile-header-wrapper">
      <div className="mobile-management-header" style={{ backgroundColor: teamTopSection.color }}>
        <div className="mobile-header-title">
          <div className="mobile-header-text" style={{ color: teamTopSection.color }}>
            <div style={{ marginTop: '-10%', marginBottom: '-10%' }}>{teamTopSection.abbv}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
