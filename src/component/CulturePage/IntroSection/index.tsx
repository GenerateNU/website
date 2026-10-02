import React from 'react';

import NavBar from '../../NavBar';
import logo from '../IntroSection/GeneratePeaceLogo.png';
import type { SectionProps } from '../types';
import './style.css';

const desktopContent = () => (
  <div className="position-relative intro-container">
    <div className="intro-navbar">
      <NavBar />
    </div>

    <div className="d-flex">
      <div className="generateMascotContainer">
        <img className="generateMascot" src={logo} alt="Generate Mascot" />
      </div>
      <div className="our-culture-quote-positioning p-3">
        <div className="our-culture-quote">We make wicked projects &amp; plan wicked events</div>
      </div>
      <div className="our-culture-big-positioning">
        <div className="our-culture-big text-no-fill text-uppercase position-relative start-0 bottom-0-culture p-5">
          Our Culture
        </div>
      </div>
    </div>
  </div>
);

const mobileContent = () => (
  <>
    <div className="intro-navbar">
      <NavBar />
    </div>
    <div className="intro-container-mobile">
      <span className="our-culture-big text-no-fill"> Our Culture </span>
      <span className="our-culture-quote">We make wicked projects &amp; plan wicked events</span>
      <img className="generateMascot" src={logo} alt="Generate Mascot" />
    </div>
  </>
);

export default function IntroSection(props: SectionProps) {
  return props.disp ? mobileContent() : desktopContent();
}
