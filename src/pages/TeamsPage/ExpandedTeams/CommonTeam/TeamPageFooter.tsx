import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import GenerateLogo from '@/assets/images/landingpage-v2/footerlogo.svg';

import './footerStyle.css';
import Arrow from '@/assets/images/projectspage/arrowbutton.svg';
import ShadowedButton from '@/component/ShadowedButton';
import useWebsite from '@/shared/useWebsite';

import SocialIcons from './SocialIcons';

type FooterPage = {
  name: string;
  link: string;
  disabled?: boolean;
};

type FooterLinkProps = {
  page: FooterPage;
};

type TitleCardProps = {
  title: string;
  color: string;
  mobile: boolean;
};

type TeamPageFooterProps = {
  color: string;
  page?: string;
};

const pages: FooterPage[] = [
  { name: 'Generate', link: '/' },
  { name: 'Apply', link: '/apply' },
  { name: 'About', link: '/about' },
  { name: 'Culture', link: '/culture' },
  { name: 'Teams', link: '/teams' },
  // { name: "People", link: "/", disabled: true },
  { name: 'Projects', link: '/projects' },
];

const leftColumnPages: FooterPage[] = [
  { name: 'Generate', link: '/' },
  { name: 'Apply', link: '/apply' },
  { name: 'About', link: '/about' },
];

const rightColumnPages: FooterPage[] = [
  { name: 'Culture', link: '/culture' },
  { name: 'Teams', link: '/teams' },
  // { name: "People", link: "/", disabled: true },
  { name: 'Projects', link: '/projects' },
];

const FooterLink = ({ page }: FooterLinkProps) => {
  const { name, link, disabled } = page;
  const currentURI = window.location.pathname.split('/').at(1);
  var isCurrentPage = `/${currentURI}`.includes(link) && link !== '/';

  if (currentURI === 'case-study' && link === '/projects') {
    isCurrentPage = true;
  }

  return (
    <div>
      {disabled ? (
        <a className="footer-link-text disabled-footer-text" href={link}>
          {name}
        </a>
      ) : isCurrentPage ? (
        <b>
          <a href={link} className="footer-link-bold">
            {name} {'<'}
          </a>
        </b>
      ) : (
        <a className="footer-link-text" href={link}>
          {name}
        </a>
      )}
    </div>
  );
};

function FooterLinks() {
  const isWebsite = useWebsite();
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches;
  const mobile = !isBigScreen || !isWebsite;

  return mobile ? (
    <span className="footer-pages">
      {pages.map((page, index) => (
        <FooterLink key={index} page={page} />
      ))}
    </span>
  ) : (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <span className="footer-pages">
        {leftColumnPages.map((page, index) => (
          <FooterLink key={index} page={page} />
        ))}
      </span>
      <span className="footer-pages">
        {rightColumnPages.map((page, index) => (
          <FooterLink key={index} page={page} />
        ))}
      </span>
    </div>
  );
}

function TitleCard({ title, color, mobile }: TitleCardProps) {
  return (
    <div style={{ marginTop: '6vw' }} className={mobile ? 'spacing' : ''}>
      <div className="title">
        <div style={{ marginTop: '-10%', marginBottom: '-10%', color: color }}>{title}</div>
      </div>
    </div>
  );
}

type FooterStartProps = {
  mobile: boolean;
  isBigScreen: boolean;
  onLogoClick: () => void;
};

type FooterEndProps = {
  mobile: boolean;
};

const handleScrollClick = () => {
  window.scrollTo(0, 0);
};

function FooterStart({ mobile, isBigScreen, onLogoClick }: FooterStartProps) {
  return (
    <div className={mobile ? 'top-bar-mobile' : 'left-bar'}>
      <div
        className={
          mobile ? 'd-flex flex-column flex-direction-start' : 'w-100 d-flex flex-column justify-content-between'
        }
      >
        <div className="sherm">
          <ShadowedButton
            fillColor="white"
            right={true}
            text={
              <img
                style={{ marginTop: '10px' }}
                width={!isBigScreen ? '200vw' : '100vw'}
                src={GenerateLogo}
                alt="matt was here"
              />
            }
            onClick={onLogoClick}
          />
        </div>
      </div>
      {mobile ? (
        <ShadowedButton
          className="up-icon-mobile"
          xPad="3vw"
          yPad="2vw"
          textColor="white"
          text={<img width={'40vh'} src={Arrow} alt="arrow up" />}
          onClick={handleScrollClick}
        />
      ) : (
        <span className="footer-links">
          <FooterLinks />
        </span>
      )}
    </div>
  );
}

function FooterEnd({ mobile }: FooterEndProps) {
  return (
    <div className={mobile ? 'bot-box-mobile' : 'right-box'}>
      {mobile ? (
        <span className="footer-links">
          <FooterLinks />
        </span>
      ) : (
        <SocialIcons mobile={mobile} />
      )}
      {mobile ? (
        <SocialIcons mobile={mobile} />
      ) : (
        <ShadowedButton
          className="up-icon"
          xPad="2vw"
          yPad="2vw"
          textColor="white"
          text={<img width={'40vh'} src={Arrow} alt="arrow-up" />}
          onClick={handleScrollClick}
        />
      )}
    </div>
  );
}

function TeamPageFooter({ color, page }: TeamPageFooterProps) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    window.scrollTo(0, 0);
    void navigate('/');
  };

  const isWebsite = useWebsite();
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches;
  const mobile = !isBigScreen || !isWebsite;

  return (
    <Container className="footer-container" style={{ backgroundColor: color }}>
      <div className={mobile ? 'divider-col' : 'divider-row'}>
        <FooterStart mobile={mobile} isBigScreen={isBigScreen} onLogoClick={handleOnClick} />
        <FooterEnd mobile={mobile} />
      </div>
      {page && <TitleCard color={color} title={page} mobile={mobile} />}
    </Container>
  );
}

export default TeamPageFooter;
