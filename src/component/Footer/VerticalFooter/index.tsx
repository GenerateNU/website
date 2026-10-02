import React from 'react';

import '@/component/Footer/style.css';
import { useNavigate } from 'react-router-dom';

import GenerateLogo from '@/assets/images/landingpage-v2/footerlogo.svg';
import FooterLink from '@/component/Footer/FooterLink';
import { pages } from '@/component/Footer/pages';
import ShadowedButton from '@/component/ShadowedButton';
import { SocialIcon } from '@/component/SocialIcon';
import { socialIcons } from '@/component/socialIcons';

function VerticalFooter() {
  const currentPageUrl = window.location.href;
  const navigate = useNavigate();

  const handleOnClick = () => {
    window.scrollTo(0, 0);
    void navigate('/');
  };

  return (
    <div className="vert-top-level-contaner">
      <div
        className="vert-sherm-placement"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ShadowedButton
          fillColor="white"
          yPad={'0px'}
          xPad={'5px'}
          right={true}
          text={<img style={{ marginTop: '10px' }} width={'90px'} src={GenerateLogo} alt="matt was here" />}
          onClick={handleOnClick}
        />
      </div>
      <div className="links-container">
        <div className="pages-align">
          {pages.map((page, index) => (
            <FooterLink
              key={index}
              page={page}
              currentPage={currentPageUrl.substring(currentPageUrl.lastIndexOf('/'))}
            />
          ))}
        </div>
        <div className="social-icons-align">
          {socialIcons.map((si, index) => (
            <div key={index} className="social-icon-row">
              {si.map(s => (
                <SocialIcon key={s.href} href={s.href} imgSrc={s.imgSrc} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VerticalFooter;
