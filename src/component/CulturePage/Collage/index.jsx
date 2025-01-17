import React from 'react'
import './style.css'
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

const desktopContent = (
  <div className='nospacing'>
    <div className='flex-parent'>
      <div className='flex-child'>
        <img
          className='img1'
          style={{ width: '100%', height: '100%' }}
          src={firstimg}
          alt=''
        ></img>
      </div>
      <div class='flex-child'>
        <img
          style={{ width: '100%', height: '100%' }}
          src={secondimg}
          alt=''
        ></img>
      </div>
      <div class='flex-child'>
        <img
          style={{ width: '100%', height: '100%' }}
          src={thirdimg}
          alt=''
        ></img>
      </div>
      <div class='flex-child'>
        <img
          style={{ width: '100%', height: '100%' }}
          src={tenimg}
          alt=''
        ></img>
      </div>
    </div>
    <div class='flex-parent'>
      <div class='flex-child'> </div>
      <div class='flex-child'>
        <img
          className='img2'
          style={{ width: '100%', height: '100%' }}
          src={fourimg}
          alt=''
        ></img>
      </div>
      <div class='flex-child'>
        <img
          style={{ width: '100%', height: '100%' }}
          src={fiveimg}
          alt=''
        ></img>
      </div>
      <div class='flex-child'>
        <img
          style={{ width: '100%', height: '100%' }}
          src={siximg}
          alt=''
        ></img>
      </div>
    </div>
    <div class='flex-parent'>
      <div class='flex-child'> </div>
      <div class='flex-child'>
        <img
          className='img3'
          style={{ width: '100%', height: '100%' }}
          src={eightimg}
          alt=''
        ></img>
      </div>
      <div class='flex-child'>
        <img
          style={{ width: '100%', height: '100%' }}
          src={nineimg}
          alt=''
        ></img>
      </div>
    </div>
  </div>
)

const mobileContent = (
  <div className='collage-container'>
    <div className='collage-col-1-container'>
      <img className='img-gradient' src={firstimg} alt='' />
      <img className='img-no-gradient-long' src={thirdimg} alt='' />
      <img className='img-no-gradient' src={fiveimg} alt='' />
      <img className='img-no-gradient-long' src={sevenimg} alt='' />
      <img className='img-no-gradient' src={nineimg} alt='' />
    </div>
    <div className='collage-col-2-container'>
      <img className='img-gradient-long' src={secondimg} alt='' />
      <img className='img-no-gradient' src={fourimg} alt='' />
      <img className='img-no-gradient-long' src={siximg} alt='' />
      <img className='img-no-gradient' src={eightimg} alt='' />
      <img className='img-no-gradient' src={tenimg} alt='' />
    </div>
  </div>
)

export default function CollageSection(props) {
  return props.disp ? mobileContent : desktopContent
}
