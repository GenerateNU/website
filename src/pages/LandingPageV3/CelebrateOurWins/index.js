import React, { useState, useEffect } from 'react'
import celebrate from '../../../assets/images/aboutpage/spirited.jpg'
import { ReactComponent as LeftArrow } from '../../../assets/images/landingpage-v3/LeftTriangleArrow.svg'
import { ReactComponent as RightArrow } from '../../../assets/images/landingpage-v3/RightTriangleArrow.svg'
import { ReactComponent as LargeStars } from '../../../assets/images/landingpage-v3/LargeShowcaseStars.svg'
import { ReactComponent as SmallStars } from '../../../assets/images/landingpage-v3/SmallShowcaseStars.svg'
import { ReactComponent as PrevArrow } from '../../../assets/icons/arrows/prevArrowLeft.svg'
import { ReactComponent as NextArrow } from '../../../assets/icons/arrows/nextArrowRight.svg'
import { useSanity } from '../../../services/useSanity'
import { urlFor } from '../../../client'

export default function CelebrateOurWins() {
  const copyQuery = `*[_type == "copy" && key == "celebrate-our-wins"]{header, content}`
  const copy = useSanity(copyQuery)
  const showcaseQuery = `*[_type == "showcase"] {year, image, semester} | order(year asc, semester asc)`
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
        <SmallStars id='showcase-small-stars-top' />
        <div className='white-header-text' id='showcase-header'>
          {copy && copy[0] && copy[0].header}
        </div>
        <div id='showcase-top-content'>
          <img
            src={celebrate}
            className='showcase-img image-shadow'
            alt='Placeholder'
          />
          <div id='showcase-right-col'>
            <div className='white-p-text'>
              {copy && copy[0] && copy[0].content[0]}
            </div>
            <SmallStars id='showcase-small-stars-bottom' />
          </div>
        </div>
        {showcases &&
          showcases.map((showcase) => (
            <link
              key={showcase.image}
              rel="preload"
              href={showcase.image}
              as="image"
            />
          ))}
        <div id='showcase-carousel'>
          <button
            className='big-carousel-button'
            onClick={handleLeftButtonClick}
          >
            <LeftArrow />
          </button>
          <div id='carousel-inner-content'>
            <div id='showcase-carousel-label' className='showcase-year'>
              {selectedShowcase.semester && selectedShowcase.year && (
                <>
                  <div id='showcase-semester-label'>
                    <div
                      id='showcase-semester-highlight'
                      className='showcase-semester-text'
                    >
                      {selectedShowcase.semester.toUpperCase()}
                    </div>
                    <div className='showcase-semester-text'>SHOWCASE</div>
                  </div>

                  <div id='showcase-year-br'>
                    {selectedShowcase.year[0]}
                    {selectedShowcase.year[1]}
                    <br />
                    {selectedShowcase.year[2]}
                    {selectedShowcase.year[3]}
                  </div>
                  <div id='showcase-year-nobr'>{selectedShowcase.year}</div>
                </>
              )}
            </div>
            <img
              className='image-shadow showcase-carousel-img'
              src={selectedShowcase.image}
              alt={selectedShowcase.year}
            />
            <div id='small-carousel-nav'>
              <button
                className='sm-carousel-button'
                onClick={handleRightButtonClick}
              >
                <PrevArrow />
              </button>
              <button
                className='sm-carousel-button'
                onClick={handleRightButtonClick}
              >
                <NextArrow />
              </button>
            </div>
          </div>
          <button
            className='big-carousel-button'
            onClick={handleRightButtonClick}
          >
            <RightArrow />
          </button>
        </div>
      </div>
    </div>
  )
}
