import React from 'react'
import ValueCard from './valueCard'
import valueData from '../../../data/valueData'
import './style.css'

const WeAreSection = () => {
  return (
    <div className='we-are-our-values-container'>
      <div className='weare-header'>
        <h5 className='mb-0 our-mission-our-values we-are-values d-flex flex-row justify-content-end h-auto text-nowrap'>
          our values
        </h5>
        <h1 className='our-mission-we-are text-no-fill text-uppercase text-nowrap'>
          We are
        </h1>
      </div>
      <div className='outside-card-container'>
        {valueData.map((value) => (
          <div className='card-container'>
            <ValueCard value={value} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default WeAreSection
