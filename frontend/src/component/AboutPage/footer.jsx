import React from 'react'
import './footer.css'
import Logo from "./GenerateLogo.png";

function footer() {
  return (
    <div className="App">
      <div className="Footer-body">
        <div className="Social-links">
          <div className="logo-bg">
            <div className="logo">
              <img src={Logo} alt="" height="100%" width="100%" />
            </div>
          </div>
          <div className="text-links">
            <a href="#">Generate</a>
            <a href="#">About</a>
            <a href="#">Culture</a>
            <a href="#">Teams</a>
            <a href="#">Apply</a>
            <a href="#">Projects</a>
          </div>
          <div className="links">
            <div className="link1">
              <a href="#">
                <img></img>
              </a>
            </div>
            <div className="link2">
              <a href="#">
                <img></img>
              </a>
              <a href="#">
                <img></img>
              </a>
            </div>
            <div className="link3">
              <a href="#">
                <img></img>
              </a>
            </div>
            <div className="link4">
              <a href="#">
                <img></img>
              </a>
            </div>
            <div className="link5">
              <a href="#">
                <img></img>
              </a>
            </div>
            <div className="link6">
              <a href="#">
                <img></img>
              </a>
            </div>
            <div className="link7">
              <a href="#">
                <img></img>
              </a>
            </div>
          </div>
        </div>

        <div className="Apply-link">
          <div className="border">
            <div className="apply-btn">
              <a href="www.google.com">APPLY</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer
