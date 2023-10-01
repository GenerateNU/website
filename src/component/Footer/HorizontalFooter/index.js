import React from 'react'
import '../style.css'
import GenerateLogo from '../../../assets/images/landingpage-v2/footerlogo.svg' //"../../assets/images/landingpage-v2/footerlogo.svg";
import { FooterLink } from '..'
import { useNavigate } from 'react-router-dom'
import { SocialIcon, socialIcons } from '../../SocialIcon'
import { pages } from '..'

function HorizontalFooter() {
  const navigate = useNavigate()
  const currentPageUrl = window.location.href
  const handleOnClick = () => {
    window.scrollTo(0, 0)
    navigate('/')
  }

  return (
    <div className='footer-container-mobile w-100'>
      <div className='sherm'>
        <img
          className='logo-placement'
          src={GenerateLogo}
          onClick={handleOnClick}
          alt='matt was here'
        />
      </div>
      <div className='mobile-links-container'>
        <div className='pages-align'>
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
        <div className='mobile-social-icons-align'>
          {socialIcons.map((si, index) => (
            <div key={index} className='mobile-social-icon-row'>
              {si.map((s) => (
                <div className='mobile-social-icon-col'>
                  <SocialIcon key={index} href={s.href} imgSrc={s.imgSrc} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HorizontalFooter
