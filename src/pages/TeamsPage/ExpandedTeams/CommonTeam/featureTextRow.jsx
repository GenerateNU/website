import { React } from 'react'
import { Link } from 'react-router-dom'
import useWebsite from '../../../../shared/useWebsite'
import buttonIMG from './exploredeeper.png'
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
        <div className='feature-link'>
          <Link exact to={button}>
            <img src={buttonIMG} className='feature-button ' alt=''></img>
          </Link>
        </div>
      </div>
      {!reverse && !mobile && (
        <img src={picture} className='feature-info-pic' alt=''></img>
      )}
    </div>
  )
}
