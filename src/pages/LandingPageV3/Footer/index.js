import React from 'react'
import WebFooter from './WebFooter'
import useWebsite from '../../../shared/useWebsite'
import MobileFooter from './MobileFooter'

export const pages = [
  { name: 'Projects', link: '/projects' },
  { name: 'Clients', link: '/about' },
  { name: 'Apply', link: '/apply' },
  { name: 'Apply', link: '/culture' },

]

export const FooterLink = ({ page, currentPage }) => {
  const { name, link, disabled } = page
  const isCurrentPage = currentPage === link

  return (
    <div className='footer-padding'>
      {disabled ? (
        <a className='footer-link-text disabled-footer-text' href={link}>
          {name}
        </a>
      ) : isCurrentPage ? (
        <b>
          <a href={link} className='footer-link-bold'>
            {name} {''}
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

function Footer() {
  const website = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches

  return isBigScreen && website ? <WebFooter /> : <MobileFooter />
}

export default Footer
