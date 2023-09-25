import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'
import GenerateLogo from '../../../assets/images/landingpage-v2/footerlogo.svg' //"../../assets/images/landingpage-v2/footerlogo.svg";
import { FooterLink } from '..'
import { useNavigate } from 'react-router-dom'
import { SocialIcon, socialIcons } from '../../SocialIcon'

const pages = [
  { name: 'Generate', link: '/' },
  { name: 'Apply', link: '/apply' },
  { name: 'About', link: '/about' },
  { name: 'Culture', link: '/culture' },
  { name: 'Teams', link: '/teams' },
  // { name: "People", link: "/", disabled: true },
  { name: 'Projects', link: '/projects' }
]

function HorizontalFooter() {
  const navigate = useNavigate()
  const currentPageUrl = window.location.href
  const handleOnClick = () => {
    window.scrollTo(0, 0)
    navigate('/')
  }

  return (
    <Container className='footer-container-mobile w-100'>
      <div className='d-flex flex-row justify-content-between w-100'>
        <div className='left-bar-item'>
          <div className='w-100 d-flex flex-column justify-content-between align-items-flex-start'>
            <div className='sherm'>
              <img
                className='logo-placement'
                src={GenerateLogo}
                onClick={handleOnClick}
                alt='Logo description'
              />
            </div>
          </div>
          <div className='hor-footer-links'>
            <div className='hor-footer-pages'>
              {pages.map((page, index) => (
                <FooterLink
                  key={index}
                  page={page}
                  currentPage={currentPageUrl.substring(
                    currentPageUrl.lastIndexOf('/')
                  )}
                />
              ))}
            </div>
          </div>
        </div>
        <div className='hor-social-icons'>
          {socialIcons.map((row, index) => (
            <Row key={index}>
              {row.map((icon, index) => (
                <>
                  <SocialIcon
                    key={index}
                    href={icon.href}
                    imgSrc={icon.imgSrc}
                    className={
                      icon.href.includes('instagram')
                        ? 'insta-icon'
                        : 'hor-icon'
                    }
                  />
                  {icon.href.includes('instagram') && (
                    <Col className='icon'>
                      <a>
                        <div className='social-media' alt='' />
                      </a>
                    </Col>
                  )}
                </>
              ))}
            </Row>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default HorizontalFooter
