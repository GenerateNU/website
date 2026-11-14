import { useQuery } from '@tanstack/react-query';
import React from 'react';

import NavBar from '@/component/NavBar';
import Footer from '@/pages/LandingPageV3/Footer';
import { applyTeamsOptions } from '@/sanity/queries/teamsQuery';
import type { ApplyTeam } from '@/sanity/queries/teamsQuery';
import useWebsite from '@/shared/useWebsite';

import TeamApplicationCard from './TeamApplicationCard';
import './style.css';

const header = 'join generate';

const quote =
  "We're always looking for passionate individuals who are ready to learn and grow. We have opportunities that run across interests and experience levels. If the position you're hoping for isn't available right now, we re-open applications prior to each semester so check back soon!";

const desktopContent = (firstColumn: ApplyTeam[], secondColumn: ApplyTeam[]) => {
  return (
    <>
      <div className="ap_container">
        <div className="ap_img" />
        <div className="navbar-style">
          <NavBar />
        </div>
        <h2 className="join-header">{header}</h2>
        <p className="join-text">{quote}</p>
        <div className="column-container">
          <div className="left-column">
            {firstColumn.map(team => (
              <TeamApplicationCard team={team} key={team.team} />
            ))}
          </div>
          <div className="right-column">
            {secondColumn.map(team => (
              <TeamApplicationCard team={team} key={team.team} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const mobileContent = (teams: ApplyTeam[]) => {
  return (
    <>
      <div className="ap_mobile">
        <div className="ap_img" />
        <div className="navbar-style">
          <NavBar />
        </div>
        <h2 className="join-header">{header}</h2>
        <div className="join-text">{quote}</div>
        <div className="mobile-column">
          {teams.map(team => (
            <TeamApplicationCard team={team} key={team.team} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default function ApplyPage() {
  const { data: teams = [] } = useQuery(applyTeamsOptions());

  const halfLength = Math.ceil(teams.length / 2);
  const leftCol = teams.slice(0, halfLength);
  const rightCol = teams.slice(halfLength);

  const isWebsite = useWebsite();
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches;
  const mobile = !isBigScreen || !isWebsite;

  return !mobile ? desktopContent(leftCol, rightCol) : mobileContent(teams);
}
