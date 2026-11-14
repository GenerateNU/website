import { useSuspenseQuery } from '@tanstack/react-query';
import React from 'react';

import NavBar from '@/component/NavBar';
import SectionBoundary from '@/component/SectionBoundary';
import Footer from '@/pages/LandingPageV3/Footer';
import { applyTeamsOptions } from '@/sanity/queries/teamsQuery';
import useWebsite from '@/shared/useWebsite';

import TeamApplicationCard from './TeamApplicationCard';
import './style.css';

const header = 'join generate';

const quote =
  "We're always looking for passionate individuals who are ready to learn and grow. We have opportunities that run across interests and experience levels. If the position you're hoping for isn't available right now, we re-open applications prior to each semester so check back soon!";

type TeamColumnsProps = {
  mobile: boolean;
};

function TeamColumns({ mobile }: TeamColumnsProps) {
  const { data: teams } = useSuspenseQuery(applyTeamsOptions());

  if (mobile) {
    return (
      <div className="mobile-column">
        {teams.map(team => (
          <TeamApplicationCard team={team} key={team.team} />
        ))}
      </div>
    );
  }

  const halfLength = Math.ceil(teams.length / 2);

  return (
    <div className="column-container">
      <div className="left-column">
        {teams.slice(0, halfLength).map(team => (
          <TeamApplicationCard team={team} key={team.team} />
        ))}
      </div>
      <div className="right-column">
        {teams.slice(halfLength).map(team => (
          <TeamApplicationCard team={team} key={team.team} />
        ))}
      </div>
    </div>
  );
}

export default function ApplyPage() {
  const isWebsite = useWebsite();
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches;
  const mobile = !isBigScreen || !isWebsite;

  return (
    <>
      <div className={mobile ? 'ap_mobile' : 'ap_container'}>
        <div className="ap_img" />
        <div className="navbar-style">
          <NavBar />
        </div>
        <h2 className="join-header">{header}</h2>
        {mobile ? <div className="join-text">{quote}</div> : <p className="join-text">{quote}</p>}
        {/* The header and nav render immediately; only the team list waits on (or fails with) Sanity. */}
        <SectionBoundary>
          <TeamColumns mobile={mobile} />
        </SectionBoundary>
      </div>
      <Footer />
    </>
  );
}
