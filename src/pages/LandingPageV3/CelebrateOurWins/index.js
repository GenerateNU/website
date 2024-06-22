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
  const showcaseQuery = `*[_type == "showcase"] {year, image, semester} | order(year asc)`
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
      (showcase) =>
        showcase.year === selectedShowcase.year &&
        showcase.semester === selectedShowcase.semester
    )
    if (currentIndex > 0) {
      setSelectedShowcase(showcases[currentIndex - 1])
    } else {
      setSelectedShowcase(showcases.at(-1))
    }
  }

  const handleRightButtonClick = () => {
    const currentIndex = showcases.findIndex(
      (showcase) =>
        showcase.year === selectedShowcase.year &&
        showcase.semester === selectedShowcase.semester
    )
    if (currentIndex < showcases.length - 1) {
      setSelectedShowcase(showcases[currentIndex + 1])
    } else {
      setSelectedShowcase(showcases.at(0))
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
          <img
            src={Placeholder}
            className='showcase-img image-shadow'
            alt='Placeholder'
          />
          <div id='showcase-right-col'>
            <div className='white-p-text'>
              {copy && copy[0] && copy[0].content[0]}
            </div>
            <SmallStars id='showcase-small-stars' />
          </div>
        </div>

        <div id='showcase-carousel'>
          <button className='button-link' onClick={handleLeftButtonClick}>
            <LeftArrow className='showcase-carousel-button' />
          </button>
          <div id='carousel-inner-content'>
            <div id='showcase-carousel-label'>
              <div id='showcase-year-title' className='white-h2-text'>
                {selectedShowcase.semester && selectedShowcase.year && (
                  <>
                    <span className='showcase-year' id='showcase-year-br'>
                      <span id='showcase-year-label'>
                        {selectedShowcase.semester.toUpperCase()}
                      </span>
                      <br />
                      {selectedShowcase.year[0]}
                      {selectedShowcase.year[1]}
                      <br />
                      {selectedShowcase.year[2]}
                      {selectedShowcase.year[3]}
                    </span>
                    <span id='showcase-year-nobr'>
                      SHOWCASE {selectedShowcase.year}
                    </span>
                  </>
                )}
              </div>
            </div>
            <img
              className='image-shadow why-gen-img'
              src={selectedShowcase.image}
              alt={selectedShowcase.year}
            />
          </div>
          <button className='button-link' onClick={handleRightButtonClick}>
            <RightArrow className='showcase-carousel-button' />
          </button>
        </div>
      </div>
    </div>
  )
}
