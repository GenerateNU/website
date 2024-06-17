import React from 'react'
import '../style.css'
import GenerateLogo from '../../../assets/images/landingpage-v2/footerlogo.svg' //"../../assets/images/landingpage-v2/footerlogo.svg";
import { FooterLink } from '.'
import { useNavigate } from 'react-router-dom'
import { pages } from '.'
import ShadowedButton from '../../../component/ShadowedButton'
import { ReactComponent as Instagram } from '../../../assets/icons/socials/Instagram.svg'
import { ReactComponent as Email } from '../../../assets/icons/socials/Email.svg'
import { ReactComponent as LinkedIn } from '../../../assets/icons/socials/LinkedIn.svg'
import UpArrowMobile from '../../../assets/icons/arrows/upArrowMobile.svg'

function MobileFooter() {
  const navigate = useNavigate()
  const currentPageUrl = window.location.href
  const handleOnClick = () => {
    window.scrollTo(0, 0)
    navigate('/')
  }

  const icons = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/generatenu/',
      symbol: <Instagram className='social-icon' />
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/generate-product-development/mycompany/',
      symbol: <LinkedIn className='social-icon' />
    },
    {
      name: 'Email',
      href: 'mailto:generate@northeastern.edu',
      symbol: <Email className='social-icon' />
    }
  ]

  return (
    <div className='footer-container-new-mobile '>
      <div className='links-containerr-mobile'>
        <div className='link-new-mobile'>
          {pages.map((page, index) => (
            <FooterLink
              key={`footer-link-${index}`}
              page={page}
              currentPage={currentPageUrl.substring(
                currentPageUrl.lastIndexOf('/')
              )}
            />
          ))}
        </div>
      <div className='shadow-arrow-container-2-mobile'>
        <ShadowedButton
          fillColor='white'
          yPad={'15px'}
          xPad={'0px'}
          right={false}
          text={
            <img
              style={{ marginTop: '3px' }}
              width={'70px'}
              src={UpArrowMobile}
              alt='matt was here'
            />
          }
          onClick={handleOnClick}
        />
                </div>

    </div>

      <div className='icon-container-new-mobile'>
        {icons.map((si, index) => (
          <a
            key={index}
            className='social-link-mobile'
            href={si.href}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={si.title}
          >
            {si.symbol}
          </a>
        ))}
      </div>
    </div>
  )
}

export default MobileFooter
