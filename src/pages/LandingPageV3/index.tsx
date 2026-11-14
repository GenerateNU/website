import { Dialog } from '@headlessui/react';
import React, { useRef } from 'react';
import { useState } from 'react';

import SectionBoundary from '@/component/SectionBoundary';

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
          sandbox="allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
          aria-hidden="false"
        ></iframe>
      </Dialog>
      {isOpen && <div id="background" />}
      <Navigation scrollToWhatIsGenerate={() => whatIsGenerateRef.current?.scrollIntoView({ behavior: 'smooth' })} />
      <SectionBoundary>
        <WhatIsGenerate ref={whatIsGenerateRef} />
      </SectionBoundary>
      <SectionBoundary>
        <WeAre />
      </SectionBoundary>
      <SectionBoundary>
        <WhyGenerate />
      </SectionBoundary>
      <SectionBoundary>
        <HowWereStrctured />
      </SectionBoundary>
      <SectionBoundary>
        <ChooseYourCharacter />
      </SectionBoundary>
      <SectionBoundary>
        <CelebrateOurWins />
      </SectionBoundary>
      <Sponsors />
      <ParentOrgs />
      <Footer />
    </div>
  );
}
