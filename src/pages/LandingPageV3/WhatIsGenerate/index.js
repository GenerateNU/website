import React from 'react'
import './style.css'

function WhatIsGenerate(props, ref) {
  return (
    <div ref={ref} className='grid-bg bg-row' id="ll2-row">
      <div className='half-container blue-bg' id="what-is-generate">
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
      <div className='ll-container'>
        <div id="landing-lines-2" className='landing-lines' />
      </div>
    </div>
  )
}

export default React.forwardRef(WhatIsGenerate)
