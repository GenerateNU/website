import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Arrow from '../../../../assets/images/projectspage/arrowbutton.svg'
import ShadowedButton from '../../../../component/ShadowedButton'
import './footerStyle.css'
import GenerateLogo from '../../../../assets/images/landingpage-v2/footerlogo.svg'
import { useNavigate } from 'react-router-dom'
import useWebsite from '../../../../shared/useWebsite'
import SocialIcons from './SocialIcons'

const pages = [
  { name: 'Generate', link: '/' },
  { name: 'Apply', link: '/apply' },
  { name: 'About', link: '/about' },
  { name: 'Culture', link: '/culture' },
  { name: 'Teams', link: '/teams' },
  // { name: "People", link: "/", disabled: true },
  { name: 'Projects', link: '/projects' }
]
const pagesSplit = [
  [
    { name: 'Generate', link: '/' },
    { name: 'Apply', link: '/apply' },
    { name: 'About', link: '/about' }
  ],
  [
    { name: 'Culture', link: '/culture' },
    { name: 'Teams', link: '/teams' },
    // { name: "People", link: "/", disabled: true },
    { name: 'Projects', link: '/projects' }
  ]
]

const FooterLink = ({ page, currentPage }) => {
  const { name, link, disabled } = page
  const currentURI = window.location.pathname.split('/').at(1)
  var isCurrentPage = `/${currentURI}`.includes(link) && link != '/'

  if (currentURI == 'case-study' && link == '/projects') {
    isCurrentPage = true
  }

  return (
    <div>
      {disabled ? (
        <a className='footer-link-text disabled-footer-text' href={link}>
          {name}
        </a>
      ) : isCurrentPage ? (
        <b>
          <a href={link} className='footer-link-bold'>
            {name} {'<'}
          </a>
        </b>
      ) : (
        <a className='footer-link-text' href={link}>
          {name}
        </a>
      )}
    </div>
  )
}

function FooterLinks() {
  const currentPageUrl = window.location.href
  const isWebsite = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  const mobile = !isBigScreen || !isWebsite
  return mobile ? (
    <span className='footer-pages'>
      {pages.map((page, index) => (
        <FooterLink
          key={index}
          page={page}
          currentPage={currentPageUrl.substring(currentPageUrl.indexOf('/'))}
        />
      ))}
    </span>
  ) : (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <span className='footer-pages'>
        {pagesSplit[0].map((page, index) => (
          <FooterLink
            key={index}
            page={page}
            currentPage={currentPageUrl.substring(
              currentPageUrl.lastIndexOf('/')
            )}
          />
        ))}
      </span>
      <span className='footer-pages'>
        {pagesSplit[1].map((page, index) => (
          <FooterLink
            key={index}
            page={page}
            currentPage={currentPageUrl.substring(
              currentPageUrl.lastIndexOf('/')
            )}
          />
        ))}
      </span>
    </div>
  )
}

function TitleCard({ title, color, mobile }) {
  return (
    <div style={{ marginTop: '6vw' }} className={`${mobile ? 'spacing' : ''}`}>
      <div className='title'>
        <div style={{ marginTop: '-10%', marginBottom: '-10%', color: color }}>
          {title}
        </div>
      </div>
    </div>
  )
}

function TeamPageFooter({ color, page }) {
  const navigate = useNavigate()
  const handleOnClick = () => {
    window.scrollTo(0, 0)
    navigate('/')
  }

  const handleScrollClick = () => {
    window.scrollTo(0, 0)
  }

  const isWebsite = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  const mobile = !isBigScreen || !isWebsite

  return (
    <Container className='footer-container' style={{ backgroundColor: color }}>
      <div className={`${mobile ? 'divider-col' : 'divider-row'}`}>
        <div className={`${mobile ? 'top-bar-mobile' : 'left-bar'}`}>
          <div
            className={`${
              mobile
                ? 'd-flex flex-column flex-direction-start'
                : 'w-100 d-flex flex-column justify-content-between'
            }`}
          >
            <div className='sherm'>
              <ShadowedButton
                fillColor='white'
                right={true}
                text={
                  <img
                    style={{ marginTop: '10px' }}
                    width={!isBigScreen ? '200vw' : '100vw'}
                    src={GenerateLogo}
                    alt='matt was here'
                  />
                }
                onClick={handleOnClick}
              />
            </div>
          </div>
          {mobile ? (
            <ShadowedButton
              className='up-icon-mobile'
              xPad={mobile ? '3vw' : '2vw'}
              yPad={mobile ? '2vw' : '2vw'}
              textColor='white'
              text={<img width={'40vh'} src={Arrow} />}
              onClick={handleScrollClick}
            />
          ) : (
            <span className='footer-links'>
              <FooterLinks />
            </span>
          )}
        </div>
        <div className={`${mobile ? 'bot-box-mobile' : 'right-box'}`}>
          {mobile ? (
            <span className='footer-links'>
              <FooterLinks />
            </span>
          ) : (
            <SocialIcons mobile={mobile} />
          )}
          {mobile ? (
            <SocialIcons mobile={mobile} />
          ) : (
            <ShadowedButton
              className='up-icon'
              xPad={mobile ? '15vw' : '2vw'}
              yPad={mobile ? '6vw' : '2vw'}
              textColor='white'
              text={<img width={'40vh'} src={Arrow} />}
              onClick={handleScrollClick}
            />
          )}
        </div>
      </div>
      {page && <TitleCard color={color} title={page} mobile={mobile} />}
    </Container>
  )
}

export default TeamPageFooter
