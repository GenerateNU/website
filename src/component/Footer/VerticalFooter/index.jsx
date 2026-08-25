import React from 'react'
import '../style.css'
import GenerateLogo from '../../../assets/images/landingpage-v2/footerlogo.svg'
import { useNavigate } from 'react-router-dom'
import { SocialIcon, socialIcons } from '../../SocialIcon'
import { pages, FooterLink } from '../index'
import ShadowedButton from '../../ShadowedButton'

function VerticalFooter() {
  const currentPageUrl = window.location.href
  const navigate = useNavigate()
  const handleOnClick = () => {
    window.scrollTo(0, 0)
    navigate('/')
  }

  return (
    <div className='vert-top-level-contaner'>
      <div
        className='vert-sherm-placement'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <ShadowedButton
          fillColor='white'
          yPad={'0px'}
          xPad={'5px'}
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
      <div className='links-container'>
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
        <div className='social-icons-align'>
          {socialIcons.map((si, index) => (
            <div className='social-icon-row'>
              {si.map((s) => (
                <SocialIcon key={index} href={s.href} imgSrc={s.imgSrc} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VerticalFooter
