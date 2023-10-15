import React from 'react'
import HorizontalFooter from './HorizontalFooter'
import useWebsite from '../../shared/useWebsite'
import VerticalFooter from './VerticalFooter'

export const pages = [
  { name: 'Generate', link: '/' },
  { name: 'Apply', link: '/apply' },
  { name: 'About', link: '/about' },
  { name: 'Culture', link: '/culture' },
  { name: 'Teams', link: '/teams' },
  // { name: "People", link: "/", disabled: true },
  { name: 'Projects', link: '/projects' }
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

function Footer() {
  const website = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches

  return isBigScreen && website ? <VerticalFooter /> : <HorizontalFooter />
}

export default Footer
