import React, { useState } from 'react';

import NextArrow from '../../../assets/icons/arrows/nextArrowRight.svg?react';
import PrevArrow from '../../../assets/icons/arrows/prevArrowLeft.svg?react';
import celebrate from '../../../assets/images/aboutpage/spirited.jpg';
import LargeStars from '../../../assets/images/landingpage-v3/LargeShowcaseStars.svg?react';
import LeftArrow from '../../../assets/images/landingpage-v3/LeftTriangleArrow.svg?react';
import RightArrow from '../../../assets/images/landingpage-v3/RightTriangleArrow.svg?react';
import SmallStars from '../../../assets/images/landingpage-v3/SmallShowcaseStars.svg?react';
import { urlFor } from '../../../client';
import { useSanity } from '../../../services/useSanity';
import type { Copy, SanityShowcase, Showcase } from '../types';

export default function CelebrateOurWins() {
  const copyQuery = `*[_type == "copy" && key == "celebrate-our-wins"]{header, content}`;
  const copy = useSanity<Copy>(copyQuery);
  const showcaseQuery = `*[_type == "showcase"] {year, image, semester} | order(year asc)`;

  const showcases = useSanity<SanityShowcase, Showcase>(showcaseQuery, {}, data =>
    data
      .map(showcase => ({
        ...showcase,
        semester: showcase.semester.toUpperCase(),
        image: urlFor(showcase.image).url(),
      }))
      .sort((a, b) => {
        if (a.year === b.year) {
          return a.semester === 'SPRING' ? -1 : 1;
        }

        return Number(a.year) - Number(b.year);
      })
  );

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const currentIndex = selectedIndex ?? showcases.length - 1;
  const selectedShowcase = showcases[currentIndex];

  const handleLeftButtonClick = () => {
    setSelectedIndex(currentIndex > 0 ? currentIndex - 1 : showcases.length - 1);
  };

  const handleRightButtonClick = () => {
    setSelectedIndex(currentIndex < showcases.length - 1 ? currentIndex + 1 : 0);
  };

  return (
    <div className="bg-row" id="ll7-row">
      <div id="showcase-content">
        <LargeStars id="showcase-large-stars" />
        <SmallStars id="showcase-small-stars-top" />
        <div className="white-header-text" id="showcase-header">
          {copy[0]?.header}
        </div>
        <div id="showcase-top-content">
          <img src={celebrate} className="showcase-img image-shadow" alt="Placeholder" />
          <div id="showcase-right-col">
            <div className="white-p-text">{copy[0]?.content[0]}</div>
            <SmallStars id="showcase-small-stars-bottom" />
          </div>
        </div>

        <div id="showcase-carousel">
          <button className="big-carousel-button" onClick={handleLeftButtonClick}>
            <LeftArrow />
          </button>
          <div id="carousel-inner-content">
            <div id="showcase-carousel-label" className="showcase-year">
              {selectedShowcase && (
                <>
                  <div id="showcase-semester-label">
                    <div id="showcase-semester-highlight" className="showcase-semester-text">
                      {selectedShowcase.semester.toUpperCase()}
                    </div>
                    <div className="showcase-semester-text">SHOWCASE</div>
                  </div>

                  <div id="showcase-year-br">
                    {selectedShowcase.year[0]}
                    {selectedShowcase.year[1]}
                    <br />
                    {selectedShowcase.year[2]}
                    {selectedShowcase.year[3]}
                  </div>
                  <div id="showcase-year-nobr">{selectedShowcase.year}</div>
                </>
              )}
            </div>
            <img
              className="image-shadow showcase-carousel-img"
              src={selectedShowcase?.image}
              alt={selectedShowcase?.year}
            />
            <div id="small-carousel-nav">
              <button className="sm-carousel-button" onClick={handleLeftButtonClick}>
                <PrevArrow />
              </button>
              <button className="sm-carousel-button" onClick={handleRightButtonClick}>
                <NextArrow />
              </button>
            </div>
          </div>
          <button className="big-carousel-button" onClick={handleRightButtonClick}>
            <RightArrow />
          </button>
        </div>
      </div>
    </div>
  );
}
