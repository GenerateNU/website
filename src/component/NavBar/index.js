import React from 'react'
import GenerateLogo from '../../assets/images/landingpage/affiliateorgintros/Generate Logo_Nav.png'
import './style.css'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()
  const currentUrl = window.location.href.split('/').at(-1)

  return (
    <div id='nav-all'>
      <div
      id="nav-contents"
        className={`bg-light px-4 p-2 mb-5 d-flex bar-size justify-content-around align-items-center w-100 gap-4 items-center`}
      >
        <img
        id="gen-nav-logo"
          style={{ width: 'min(3.5vmin, 40px)', height: 'auto' }}
          src={GenerateLogo}
          onClick={() => navigate('/')}
          alt='Generate Logo'
        />
        {currentUrl !== 'home' && (
          <span
            className='font-size bg-transparent shadow-none border-0 text-decoration-none text-uppercase cursor-pointer menu-hover align-item-center'
            onClick={() => navigate('/')}
          >
            About
          </span>
        )}
        {currentUrl !== 'apply' && (
          <span
            className='font-size bg-transparent shadow-none border-0 text-decoration-none text-uppercase cursor-pointer menu-hover align-item-center'
            onClick={() => navigate('/apply')}
          >
            Apply
          </span>
        )}
        {currentUrl !== 'projects' && (
          <span
            className='font-size bg-transparent shadow-none border-0 text-decoration-none text-uppercase cursor-pointer menu-hover align-item-center'
            onClick={() => navigate('/projects')}
          >
            Projects
          </span>
        )}
      </div>
    </div>
  )
}

export default NavBar
