import React from 'react'
import GenerateLogo from '../../../assets/images/landingpage-v2/footerlogo.svg' //"../../assets/images/landingpage-v2/footerlogo.svg";
import { FooterLink } from '.'
import { pages } from '.'
import ShadowedButton from '../../../component/ShadowedButton'
import { ReactComponent as Instagram } from '../../../assets/icons/socials/Instagram.svg'
import { ReactComponent as Email } from '../../../assets/icons/socials/Email.svg'
import { ReactComponent as LinkedIn } from '../../../assets/icons/socials/LinkedIn.svg'
import UpArrow from '../../../assets/icons/arrows/upArrow.svg'

function WebFooter() {
  const currentPageUrl = window.location.href
  const handleOnClick = () => {
    window.scrollTo(0, 0)
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
    <div className='footer-container-new '>
      <ShadowedButton
        fillColor='white'
        yPad={'0.9vh'}
        xPad={'0.5vw'}
        fontSize = {'1vw'}
        right={false}
        text={
          <img
            style={{ marginLeft: '0.2vh',  marginTop: '1.2vh', marginBottom: '1.2vh'}}
            width={'90vw'}
            src={GenerateLogo}
            alt='matt was here'
          />
        }
        onClick={handleOnClick}
      />
      <div className='links-containerr'>
        <div className='link-new'>
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
      </div>
      <div className='icon-container-new'>
        {icons.map((si, index) => (
          <a
            key={index}
            className='social-link'
            href={si.href}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={si.title}
          >
            {si.symbol}
          </a>
        ))}
        <div className='shadow-arrow-container-2'>
          <ShadowedButton
            fillColor='white'
            yPad={'0.5vh'}
            xPad={'0.5vw'}
            right={false}
            textColor = {'black'}
            text={
              <img
                style={{ marginTop: '2vh', marginBottom: '2vh'}}
                width={'90vw'}
                src={UpArrow}
                alt='matt was here'
              />
            }
            onClick={handleOnClick}
          />
        </div>
      </div>
    </div>
  )
}

export default WebFooter
