import './responsive-style.css'
import React from 'react'
import leftcarrot from '../../LandingPageV2/Interested/chevron.png'
import ShadowedButton from '../../ShadowedButton'
import useWebsite from '../../../shared/useWebsite'

const Interested = (...props) => {
  const isWebsite = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  const mobile = !isBigScreen || !isWebsite
  return (
    <div className='bg-white interestedcontainer'>
      <div className='interestedText'>Interested</div>
      <div className='interestedflexbox'>
        <div className='hoverButton'>
          <ShadowedButton
            fillColor='#187dff'
            className='interestedJoinNowBox'
            xPad={mobile ? '15vw' : '5vw'}
            yPad={mobile ? '6vw' : '2vw'}
            fontSize={mobile ? '6vw' : '1vw'}
            textColor='white'
            text='join us'
            onClick={() => (window.location.href = `/apply`)}
          />
        </div>
        <div className='questionMarkContainer'>
          <img style={{ width: '3vh' }} src={leftcarrot} />
          <div className='sentenceText'>
            Join a community that shares the same goal - turning ideas into
            reality
          </div>
        </div>
      </div>
    </div>
  )
}

export default Interested
