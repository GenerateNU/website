import React, { useState, useEffect } from 'react'
import Placeholder from '../../../assets/images/aboutpage/Community.jpg'
import { ReactComponent as LeftArrow } from '../../../assets/images/landingpage-v3/LeftTriangleArrow.svg'
import { ReactComponent as RightArrow } from '../../../assets/images/landingpage-v3/RightTriangleArrow.svg'
import { ReactComponent as LargeStars } from '../../../assets/images/landingpage-v3/LargeShowcaseStars.svg'
import { ReactComponent as SmallStars } from '../../../assets/images/landingpage-v3/SmallShowcaseStars.svg'
import { useSanity } from '../../../services/useSanity'
import { urlFor } from '../../../client'

export default function CelebrateOurWins() {
  const copyQuery = `*[_type == "copy" && key == "celebrate-our-wins"]{header, content}`
  const copy = useSanity(copyQuery)
  const showcaseQuery = `*[_type == "showcase"] {year, image} | order(year asc)`
  const showcases = useSanity(showcaseQuery, {}, (data) =>
    data
      ? data.map((showcase) => ({
          ...showcase,
          image: urlFor(showcase.image)
        }))
      : []
  )

  const [selectedShowcase, setSelectedShowcase] = useState(
    showcases && showcases.length !== 0 ? showcases[showcases.length - 1] : {}
  )

  useEffect(() => {
    setSelectedShowcase(
      showcases && showcases.length !== 0 ? showcases[showcases.length - 1] : {}
    )
  }, [showcases])

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
    <div className='bg-row' id='ll7-row'>
      <div id='showcase-content'>
        <LargeStars id='showcase-large-stars' />
        <div className='white-header-text' id='showcase-header'>
          {copy && copy[0] && copy[0].header}
        </div>
        <div id='showcase-top-content'>
          <img src={Placeholder} className='showcase-img' alt='Placeholder' />
          <div id='showcase-right-col'>
            <div className='white-p-text'>
              {copy && copy[0] && copy[0].content[0]}
            </div>
            <SmallStars id='showcase-small-stars' />
          </div>
        </div>

        <div id='showcase-carousel'>
          <button className='button-link' onClick={handleLeftButtonClick}>
            <LeftArrow />
          </button>
          <div id='carousel-inner-content'>
            <div id='showcase-carousel-label'>
              <div className='white-h2-text'>Showcase</div>
              <div id='showcase-year'>{selectedShowcase.year}</div>
            </div>
            <img
              className='showcase-img'
              src={selectedShowcase.image}
              alt={selectedShowcase.year}
            />
          </div>
          <button className='button-link' onClick={handleRightButtonClick}>
            <RightArrow />
          </button>
        </div>
      </div>
    </div>
  )
}