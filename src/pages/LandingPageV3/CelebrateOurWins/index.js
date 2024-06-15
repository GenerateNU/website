import React, { useState } from 'react'
import Placeholder from '../../../assets/images/landingpage/weare/landing.jpg'
import { ReactComponent as LeftArrow } from '../../../assets/icons/arrows/carouselArrowLeft.svg'
import { ReactComponent as RightArrow } from '../../../assets/icons/arrows/carouselArrowRight.svg'
import { useSanity } from '../../../services/useSanity'

export default function CelebrateOurWins() {
  const copyQuery = `*[_type == "copy" && key == "celebrate-our-wins"]{header, content}`
  const copy = useSanity(copyQuery)
  const showcaseQuery = `*[_type == "showcase"] {year, description, image} | order(year asc)`
  const showcases = useSanity(showcaseQuery)

  const [selectedShowcase, setSelectedShowcase] = useState(
    showcases[showcases.length - 1] || {}
  )

  const handleLeftButtonClick = () => {
    const currentIndex = showcases.findIndex(
      (showcase) => showcase.year === selectedShowcase.year
    )
    if (currentIndex > 0) {
      setSelectedShowcase(showcases[currentIndex - 1])
    }
  }

  const handleRightButtonClick = () => {
    const currentIndex = showcases.findIndex(
      (showcase) => showcase.year === selectedShowcase.year
    )
    if (currentIndex < showcases.length - 1) {
      setSelectedShowcase(showcases[currentIndex + 1])
    }
  }

  return (
    <div className='bg-row'>
      <div className='white-header-text'>
        {copy && copy[0] && copy[0].header}
      </div>
      <div className=''>
        {/* <img className='we-are-image' src={Placeholder} alt='Placeholder' /> */}
        <div className='white-p-text'>
          {copy && copy[0] && copy[0].content[0]}
        </div>
      </div>
      <div className='showcase-carousel'>
        <button className="button-link" onClick={handleLeftButtonClick}>
          <LeftArrow />
        </button>
        {showcases.map((showcase, index) => (
          <div key={index} className='showcase-item'>
            <div className='showcase-label'>Showcase</div>
            <div className='showcase-year'>{showcase.year}</div>
            <div className='showcase-description'>{showcase.description}</div>
            <img
              className='showcase-image'
              src={showcase.image}
              alt={showcase.year}
            />
          </div>
        ))}
        <button className="button-link" onClick={handleRightButtonClick}>
          <RightArrow />
        </button>
      </div>
    </div>
  )
}
