import React from 'react'
import { Row, Col } from 'react-bootstrap'
import '../style.css'
import GenerateLogo from '../../../assets/images/landingpage-v2/footerlogo.svg'
import { useNavigate } from 'react-router-dom'
import { SocialIcon, socialIcons } from '../../SocialIcon'
import { pages, FooterLink } from '../index'

function VerticalFooter() {
  const currentPageUrl = window.location.href
  const navigate = useNavigate()
  const handleOnClick = () => {
    window.scrollTo(0, 0)
    navigate('/')
  }

  return (
    <Col fluid className='vert-top-level-contaner'>
      <div className='vert-sherm-placement'>
        <img
          className='vert-logo-placement'
          src={GenerateLogo}
          onClick={handleOnClick}
          alt='Logo description' // Add alt text to the image for accessibility
        />
      </div>
      <div className='vert-footer-links-general'>
        <div className='vert-footer-pages'>
          {pages.map((page, index) => (
            <div className='p-2'>
              <FooterLink
                key={index}
                page={page}
                currentPage={currentPageUrl.substring(
                  currentPageUrl.lastIndexOf('/')
                )}
              />
            </div>
          ))}
        </div>
        <div className='vert-social-icons'>
          {socialIcons.map((row, index) => (
            <Row key={index}>
              {row.map((icon, index) => (
                <>
                  <SocialIcon
                    key={index}
                    href={icon.href}
                    imgSrc={icon.imgSrc}
                    className='vert-icon'
                  />
                  {icon.href.includes('instagram') && (
                    <Col className='vert-icon'>
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
    </Col>
  )
}

export default VerticalFooter
