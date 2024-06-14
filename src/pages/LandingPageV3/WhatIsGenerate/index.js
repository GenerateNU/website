import React from 'react'
import { useSanity } from '../../../services/useSanity'
import './style.css'

function WhatIsGenerate(props, ref) {
  const query = `*[_type == "copy" && key == "what-is-generate-landing"]{header, content}`
  const headerCopy = useSanity(query)
  // console.log(headerCopy[0].copy)

  return (
    <div ref={ref} className='grid-bg bg-row' id='ll2-row'>
      <div className='half-container blue-bg' id='what-is-generate'>
        <div className='white-header-text'>
          {headerCopy && headerCopy[0] && headerCopy[0].header}
        </div>
        {headerCopy &&
          headerCopy[0] &&
          headerCopy[0].content.map((item, index) => (
            <>
              <div key={index} className='white-p-text'>
                {item}
              </div>
              <br />
            </>
          ))}
      </div>
      <div className='ll-container'>
        <div id='landing-lines-2' className='landing-lines' />
      </div>
    </div>
  )
}

export default React.forwardRef(WhatIsGenerate)
