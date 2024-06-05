import React from 'react'
import ValueCard from './valueCard'
import './style.css'
import { urlFor } from '../../../client'
import {useSanity} from '../../../services/useSanity'

const WeAreSection = () => {
  const query = `*[_type == "value"]`

  const values = useSanity(query, {}, (data) => data ? data.map((value) => ({
    ...value,
    color: value.color.hex,
    image: urlFor(value.image),
  })) : []);
  
  return (
    <div className='we-are-our-values-container'>
      <div className='weare-header'>
        <h5 className='mb-0 our-mission-our-values text-nowrap'>our values</h5>
        <h1 className='our-mission-we-are text-no-fill text-uppercase text-nowrap '>
          We are
        </h1>
      </div>
      <div className='outside-card-container'>
        {values.map((value, index) => (
          <div className='card-container' key={index}>
            <ValueCard value={value} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default WeAreSection
