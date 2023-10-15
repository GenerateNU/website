import React from 'react'
import './style.css'

const desktopContent = () => (
  <div className='container'>
    <div className='vertical-div'>
      <span className='outline'>Y</span>
      <span style={{ color: '#6FCF97' }} className='outline'>
        DIVERSITY
      </span>
      <span className='outline'>DIVERSITY</span>
    </div>

    <div className='text-div-diversity'>
      <h2 className='culture-outline'>1.0</h2>
      <div className='culture-text-box'>
        <p className='culture-text'>
          Generate strives to create, maintain, and promote a diverse community
          to increase innovation, develop deeper relationships within our
          community, and to better serve the Northeastern community.
        </p>
      </div>
    </div>
  </div>
)

const mobileContent = () => (
  <div className='diversity-container'>
    <h2 className='culture-outline'> 1.0 </h2>
    <div className='culture-div'>
      <span className='diversity-outline'>SITY</span>
      <span style={{ color: '#6FCF97' }} className='diversity-outline'>
        DIVERSITY
      </span>
      <span className='diversity-outline'>DIVERSITY</span>
    </div>
    <p className='culture-text'>
      Generate strives to create, maintain, and promote a diverse community to
      increase innovation, develop deeper relationships within our community,
      and to better serve the Northeastern community.
    </p>
  </div>
)

export default function Diversity(props) {
  return props.disp ? mobileContent() : desktopContent()
}
