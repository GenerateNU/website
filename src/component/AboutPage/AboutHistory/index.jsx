import React from 'react'
import ShermImg from './NU_ShermanCenter.png' 
import MosaicImg from './MosaicLogo.png'

export default function abouthistory() {
  return (
    <div>
      <div className="left_panel">
        <div className="leftPanel_container">
          <div className="dir">
            <p>PARENT</p>
            <p>ORGS</p>
          </div>

          <div className="Orgs">
            <div className="Sherm">
              <p>The Sherm</p>
              <img src={ShermImg} alt="" className="logo"/>
            </div>
            <div className="Mosaic">
              <p>Mosaic</p>
              <img src={MosaicImg} alt="" className="logo" />
            </div>
            <p></p>
          </div>
        </div>
      </div>
      <div className="right_panel">
        <div className="rightPanel_container">
          <div className="rightPanel_Head">
            <p>OUR</p>
            <p>HISTORY</p>
          </div>

          <div className="rightPanel_text">
            <p>
              There was a hole in Northeastern University’s entrepreneurial
              ecosystem, and a lack of opportunities for student ventures to
              elicit support from product builders. To fix that, Generate was
              created to bridge the gap for students, and our journey began.
            </p>

            <h1>&gt;</h1>
          </div>
        </div>
      </div>
    </div>
  )
}


