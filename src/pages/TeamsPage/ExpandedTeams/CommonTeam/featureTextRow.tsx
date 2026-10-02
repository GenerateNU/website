import { useNavigate } from 'react-router-dom';

import ShadowedButton from '@/component/ShadowedButton';
import useWebsite from '@/shared/useWebsite';

import './style.css';

type FeatureTextRowProps = {
  description: string;
  picture: string;
  reverse: boolean;
  button: string;
};

const desktopLayout = {
  rowClassName: 'text-row',
  sectionClassName: 'info-section',
  textClassName: ' paragraph-text',
  xPad: '5vw',
  yPad: '2vw',
  fontSize: '2vw',
};

const mobileLayout = {
  rowClassName: 'text-row-mobile-feature',
  sectionClassName: 'info-section-mobile',
  textClassName: ' paragraph-text-mobile',
  xPad: '4vw',
  yPad: '3vw',
  fontSize: '3vw',
};

export default function FeatureTextRow({ description, picture, reverse, button }: FeatureTextRowProps) {
  const isWebsite = useWebsite();
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches;
  const mobile = !isBigScreen || !isWebsite;
  const navigate = useNavigate();
  const layout = mobile ? mobileLayout : desktopLayout;

  const handleOnClick = (link: string) => {
    void navigate(link);
  };

  return (
    <div className={layout.rowClassName}>
      {(reverse || mobile) && <img src={picture} className="feature-info-pic" alt=""></img>}
      <div className={layout.sectionClassName}>
        <div className={layout.textClassName}>{description}</div>

        <div className={`feature-link`}>
          <ShadowedButton
            className={`feature-button ${reverse ? 'ml-5 me-0' : ''}`}
            xPad={layout.xPad}
            yPad={layout.yPad}
            fontSize={layout.fontSize}
            fillColor="white"
            right={false}
            text={'explore deeper'}
            onClick={() => handleOnClick(button)}
          ></ShadowedButton>
        </div>
      </div>
      {!reverse && !mobile && <img src={picture} className="feature-info-pic" alt=""></img>}
    </div>
  );
}
