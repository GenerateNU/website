import React from 'react'
// import { ReactComponent as Lines } from '../../../assets/images/landingpage-v3/LandingLines2.svg'
import './style.css'

function WhatIsGenerate(props, ref) {
  return (
    <div ref={ref} className='grid-bg'>
      <div className='blue-left-container padded-container'>
        <div className='white-header-text'>What is Generate?</div>
        <div className='white-p-text'>
          Generate is Northeastern’s premiere student-led product development
          studio. Our team of dedicated engineers and designers work and empower
          real startups with our innovative products.
        </div>
        <br />
        <div className='white-p-text'>
          Each semester, Generate works with Hardware and Software founders to
          build their product and support them on their entrepreneurial journey.
        </div>
        <br />
        <div className='white-p-text'>
          We develop our members to be strong innovators, entrepreneurs, and
          leaders in product design & development. Together, we cultivate a
          community where tech-minded builders thrive!
        </div>
      </div>
      <div className='right-landing-container'>
        {/* <Lines /> */}
      </div>
    </div>
  )
}

export default React.forwardRef(WhatIsGenerate)
