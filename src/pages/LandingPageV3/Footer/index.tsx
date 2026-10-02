import React from 'react';

import useWebsite from '../../../shared/useWebsite';
import MobileFooter from './MobileFooter';
import WebFooter from './WebFooter';

function Footer() {
  const website = useWebsite();
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches;

  return isBigScreen && website ? <WebFooter /> : <MobileFooter />;
}

export default Footer;
