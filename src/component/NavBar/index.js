import React from 'react'
import { useState } from 'react'
import GenerateLogo from '../../assets/images/landingpage/affiliateorgintros/Generate Logo_Nav.png'
import MenuIcon from '@material-ui/icons/Menu'
import './style.css'
import Modal from 'react-bootstrap/Modal'
import { useNavigate } from 'react-router-dom'
import useWebsite from '../../shared/useWebsite'
import {
  mobileModalContents,
  desktopModalContents
} from './NavBarParts/MenuModal'

const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const navigate = useNavigate()

  const isWebsite = useWebsite()
  const mobile = !isBigScreen || !isWebsite
  const navigateHome = () => {
    navigate('/')
  }
  const navigateApply = () => {
    navigate('/apply')
  }

  const nav = !mobile ? (
    <>
      <img
        style={{ width: 'min(3.5vmin, 40px)', height: 'auto' }}
        src={GenerateLogo}
        onClick={navigateHome}
        alt='Generate Logo'
      />
      <span
        className='font-size bg-transparent shadow-none border-0 text-decoration-none text-uppercase cursor-pointer menu-hover align-item-center'
        onClick={navigateApply}
      >
        Apply{' '}
      </span>{' '}
      <span
        className='d-flex align-items-center group'
        onClick={() => setShowMenu(true)}
      >
        <div className='font-size bg-transparent shadow-none border-0 text-decoration-none text-uppercase cursor-pointer menu-hover align-items-center m-1'>
          Menu{' '}
        </div>{' '}
        <MenuIcon style={{ height: '3.5vh', width: 'auto' }} />{' '}
      </span>{' '}
    </>
  ) : (
    <>
      <div
        className={`bg-transparent shadow-none text-black border-0 text-decoration-none cursor-pointer`}
        onClick={() => setShowMenu(true)}
      >
        <MenuIcon className='hamburger-mobile' />
      </div>{' '}
    </>
  )

  return (
    <div
      className={`bg-light p-2 mb-5 d-flex bar-size justify-content-around align-items-center border border-dark h-10 w-10 ${
        mobile && 'menu-navbar'
      }`}
    >
      {' '}
      {nav}{' '}
      <Modal
        style={{ overflow: 'hidden' }}
        show={showMenu}
        onHide={() => setShowMenu(false)}
        fullscreen={true}
      >
        {!mobile ? desktopModalContents : mobileModalContents}{' '}
      </Modal>{' '}
    </div>
  )
}

export default NavBar
