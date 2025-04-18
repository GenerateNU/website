import React from 'react'
import '../style.css'
import GenerateLogo from '../../../assets/images/landingpage-v2/footerlogo.svg' //"../../assets/images/landingpage-v2/footerlogo.svg";
import { FooterLink } from '..'
import { useNavigate } from 'react-router-dom'
import { SocialIcon, socialIcons } from '../../SocialIcon'
import { pages } from '..'
import ShadowedButton from '../../ShadowedButton'

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
        <ShadowedButton
          fillColor='white'
          yPad={'0.5px'}
          xPad={'0.5px'}
          right={true}
          text={
            <img
              style={{ marginTop: '10px' }}
              width={'90px'}
              src={GenerateLogo}
              alt='matt was here'
            />
          }
          onClick={handleOnClick}
        />
      </div>
      <div className='mobile-links-container'>
        <div className='pages-align'>
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
        <div className='mobile-social-icons-align'>
          {socialIcons.map((si, index) => (
            <div key={`social-icon-row-${index}`} className='mobile-social-icon-row'>
              {si.map((s, subIndex) => (
                <div key={`social-icon-col-${subIndex}`} className='mobile-social-icon-col'>
                  <SocialIcon key={`social-icon-${subIndex}`} href={s.href} imgSrc={s.imgSrc} />
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
