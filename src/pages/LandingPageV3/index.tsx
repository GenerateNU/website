import { Dialog } from '@headlessui/react';
import React, { useRef } from 'react';
import { useState } from 'react';

import ApplyTodayPopup from '../../component/LandingPage/MemberInfoSession';
import CelebrateOurWins from './CelebrateOurWins';
import ChooseYourCharacter from './ChooseYourCharacter';
import Footer from './Footer';
import HowWereStrctured from './HowWereStructured';
import Navigation from './Navigation';
import ParentOrgs from './ParentOrgs';
import Sponsors from './Sponsors';
import WeAre from './WeAre';
import WhatIsGenerate from './WhatIsGenerate';
import './style.css';
import WhyGenerate from './WhyGenerate';

export default function LandingPageV3() {
  const whatIsGenerateRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false); // <-- Set to true to enable the popup and change the link below

  return (
    <div id="page-bg">
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="dialog">
        <button onClick={() => setIsOpen(false)} id="close">
          close x
        </button>

        <iframe
          id="luma"
          title="luma"
          src="https://luma.com/embed/event/..../simple" // <-- Luma embedded link
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          allow="fullscreen; payment"
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </Dialog>
      {isOpen && <div id="background" />}
      <Navigation scrollToWhatIsGenerate={() => whatIsGenerateRef.current?.scrollIntoView({ behavior: 'smooth' })} />
      <WhatIsGenerate ref={whatIsGenerateRef} />
      <WeAre />
      <WhyGenerate />
      <HowWereStrctured />
      <ChooseYourCharacter />
      <CelebrateOurWins />
      <Sponsors />
      <ParentOrgs />
      <Footer />
    </div>
  );
}
