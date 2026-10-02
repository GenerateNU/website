import React, { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';

import './footerStyle.css';
import { SocialIcon } from '@/component/SocialIcon';
import { socialIcons } from '@/component/socialIcons';

type SocialIconsProps = {
  mobile: boolean;
};

export default function SocialIcons({ mobile }: SocialIconsProps) {
  return !mobile ? (
    <div className="social-icons-website">
      {socialIcons.map((row, index) => (
        <Col key={index} className="website-col">
          {row.map(icon => (
            <SocialIcon key={icon.href} href={icon.href} imgSrc={icon.imgSrc} className={'website-col'} />
          ))}
        </Col>
      ))}
    </div>
  ) : (
    <div className="social-icons-mobile">
      {socialIcons.map((row, index) => (
        <Row key={index}>
          {row.map(icon => (
            <Fragment key={icon.href}>
              <SocialIcon
                className={icon.href.includes('instagram') ? 'teams-insta-icon' : 'teams-icon'}
                href={icon.href}
                imgSrc={icon.imgSrc}
              />
              {icon.href.includes('instagram') ? (
                <Col className="icon">
                  {/* <a>
                    <div className='social-media' />
                  </a> */}
                </Col>
              ) : null}
            </Fragment>
          ))}
        </Row>
      ))}
    </div>
  );
}
