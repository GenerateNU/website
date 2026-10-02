import React from 'react';

import useWebsite from '../../shared/useWebsite';
import HorizontalFooter from './HorizontalFooter';
import VerticalFooter from './VerticalFooter';

function Footer() {
  const website = useWebsite();
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches;

  return isBigScreen && website ? <VerticalFooter /> : <HorizontalFooter />;
}

export default Footer;
