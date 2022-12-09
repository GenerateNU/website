import React from 'react'
import './style.css';
import firstimg from '../Collage/website-8.jpg'
import secondimg from '../Collage/website-9.jpg'
import thirdimg from '../Collage/website-12.jpg'
import fourimg from '../Collage/website-14.jpg'
import fiveimg from '../Collage/website-15.jpg'
import siximg from '../Collage/website-16.jpg'
import sevenimg from '../Collage/website-21.jpg'
import eightimg from '../Collage/website-23.jpg'
import nineimg from '../Collage/website-24.jpg'
import tenimg from '../Collage/website-25.jpg'
import elevenimg from '../Collage/website-26.JPG'

export default function collage() {
  return (
    <div className='nospacing'>
      <div className="flex-parent">
        <div className="flex-child">
          <img className="img1" style={{ width: "100%", height: "100%" }} src={firstimg} alt="">
          </img>
        </div>
        <div class="flex-child">
          <img style={{ width: "100%", height: "100%" }} src={secondimg}>
          </img>
        </div>
        <div class="flex-child">
          <img style={{ width: "100%", height: "100%" }} src={thirdimg}>
          </img>
        </div>
        <div class="flex-child">
          <img style={{ width: "100%", height: "100%" }} src={tenimg}>
          </img>
        </div>
      </div>
      <div class="flex-parent">
        <div class="flex-child"> </div>
        <div class="flex-child"><img className="img2" style={{ width: "100%", height: "100%" }} src={fourimg}>
        </img></div>
        <div class="flex-child"><img style={{ width: "100%", height: "100%" }} src={fiveimg}>
        </img></div>
        <div class="flex-child"><img style={{ width: "100%", height: "100%" }} src={siximg}>
        </img></div>
      </div>
      <div class="flex-parent">
        <div class="flex-child"> </div>
        <div class="flex-child"><img className="img3" style={{ width: "100%", height: "100%" }} src={eightimg}>
        </img></div>
        <div class="flex-child"><img style={{ width: "100%", height: "100%" }} src={nineimg}>
        </img></div>
      </div>


    </div>
  )
}


