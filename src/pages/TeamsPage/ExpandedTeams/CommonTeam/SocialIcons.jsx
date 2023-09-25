import React from 'react'

import { Col, Row } from 'react-bootstrap'
import './footerStyle.css'

import { SocialIcon, socialIcons } from '../../../../component/SocialIcon'

export default function SocialIcons({ mobile }) {
  return !mobile ? (
    <div className='social-icons-website'>
      {socialIcons.map((row, index) => (
        <Col key={index} className='website-col'>
          {row.map((icon, index) => (
            <>
              <SocialIcon
                key={index}
                href={icon.href}
                imgSrc={icon.imgSrc}
                className={'website-col'}
              />
            </>
          ))}
        </Col>
      ))}
    </div>
  ) : (
    <div className='social-icons-mobile'>
      {socialIcons.map((row, index) => (
        <Row key={index}>
          {row.map((icon, index) => (
            <>
              <SocialIcon
                className={
                  icon.href.includes('instagram')
                    ? 'teams-insta-icon'
                    : 'teams-icon'
                }
                key={index}
                href={icon.href}
                imgSrc={icon.imgSrc}
              />
              {icon.href.includes('instagram') ? (
                <Col className='icon'>
                  <a>
                    <div className='social-media' />
                  </a>
                </Col>
              ) : null}
            </>
          ))}
        </Row>
      ))}
    </div>
  )
}
