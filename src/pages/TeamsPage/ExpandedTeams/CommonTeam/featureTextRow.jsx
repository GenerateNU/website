import { React } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useWebsite from '../../../../shared/useWebsite'
import buttonIMG from './exploredeeper.png'
import ShadowedButton from '../../../../component/ShadowedButton'
import './style.css'
export default function FeatureTextRow({
  description,
  picture,
  reverse,
  button
}) {
  const isWebsite = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  const mobile = !isBigScreen || !isWebsite
  const navigate = useNavigate()

  const handleOnClick = (link) => {
    navigate(link)
  }

  return (
    <div className={`${mobile ? 'text-row-mobile-feature' : 'text-row'}`}>
      {(reverse || mobile) && (
        <img src={picture} className='feature-info-pic' alt=''></img>
      )}
      <div className={`${mobile ? 'info-section-mobile' : 'info-section'}`}>
        <div
          className={` ${mobile ? 'paragraph-text-mobile' : 'paragraph-text'}`}
        >
          {description}
        </div>

        <div className={`feature-link`}>
          <ShadowedButton
            className={`feature-button ${reverse ? 'ml-5 me-0' : ''}`}
            xPad={mobile ? '4vw' : '5vw'}
            yPad={mobile ? '3vw' : '2vw'}
            fontSize={mobile ? '3vw' : '2vw'}
            fillColor='white'
            right={false}
            text={'explore deeper'}
            onClick={() => handleOnClick(button)}
          ></ShadowedButton>
        </div>
      </div>
      {!reverse && !mobile && (
        <img src={picture} className='feature-info-pic' alt=''></img>
      )}
    </div>
  )
}
