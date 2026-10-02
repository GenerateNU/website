import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import GenerateLogo from '@/assets/images/landingpage/affiliateorgintros/Generate Logo_Nav.png';

const NavBar = () => {
  const currentUrl = window.location.href.split('/').at(-1);

  return (
    <div id="nav-all">
      <div
        id="nav-contents"
        className={`bg-light px-4 p-2 mb-5 d-flex bar-size justify-content-around align-items-center w-100 gap-4 items-center`}
      >
        <Link to="/" className="d-flex">
          <img
            id="gen-nav-logo"
            style={{ width: 'min(3.5vmin, 40px)', height: 'auto' }}
            src={GenerateLogo}
            alt="Generate Logo"
          />
        </Link>
        {currentUrl !== 'home' && (
          <Link to="/" className="text-decoration-none">
            <span className="font-size bg-transparent shadow-none border-0 text-decoration-none text-uppercase cursor-pointer menu-hover align-item-center">
              About
            </span>
          </Link>
        )}
        {currentUrl !== 'apply' && (
          <Link to="/apply" className="text-decoration-none">
            <span className="font-size bg-transparent shadow-none border-0 text-decoration-none text-uppercase cursor-pointer menu-hover align-item-center">
              Apply
            </span>
          </Link>
        )}
        {currentUrl !== 'projects' && (
          <Link to="/projects" className="text-decoration-none">
            <span className="font-size bg-transparent shadow-none border-0 text-decoration-none text-uppercase cursor-pointer menu-hover align-item-center">
              Projects
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
