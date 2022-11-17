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
<div class="flex-parent">
  <div class="flex-child">
  <img class="img1" src={firstimg}>
</img>
  </div>
  <div class="flex-child">
  <img src={secondimg}>
</img>
  </div>
  <div class="flex-child">
  <img src={thirdimg}>
</img>
  </div>
  <div class="flex-child">
  <img src={tenimg}>
</img>
  </div>
  <div class="flex-child">
  <img src={elevenimg}>
</img>
  </div>
</div>
<div class="flex-parent">
  <div class="flex-child"> <img class="img2" src={fourimg}>
</img></div>
  <div class="flex-child"><img src={fiveimg}>
</img></div>
  <div class="flex-child"><img src={siximg}>
</img></div>
</div>
<div class="flex-parent">
  <div class="flex-child"> <img class="img3" src={sevenimg}>
</img></div>
  <div class="flex-child"><img src={eightimg}>
</img></div>
  <div class="flex-child"><img src={nineimg}>
</img></div>
</div>


    </div>
  )
}


