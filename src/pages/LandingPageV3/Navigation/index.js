import { ReactComponent as GenerateLogo } from '../../../assets/images/landingpage-v3/GenerateLogo.svg'
import { ReactComponent as DownArrow } from '../../../assets/images/landingpage-v3/DownArrow.svg'
import { ReactComponent as Lines } from '../../../assets/images/landingpage-v3/LandingLines1.svg'
import './style.css'

export default function Navigation({ scrollToWhatIsGenerate }) {
  return (
    <div className='grid-bg bg-row'>
      <div className='blue-left-container'>
        <a href={'/'} className='landing-header'>
          <GenerateLogo />
          GENERATE
        </a>
        <div className='landing-link-group padded-container'>
          <a href={'/projects'} className='landing-nav-link'>
            PROJECTS
          </a>
          <a href={'/apply'} className='landing-nav-link'>
            APPLY
          </a>
          <a href={'/'} className='landing-nav-link'>
            CLIENTS
          </a>
          <button
            onClick={scrollToWhatIsGenerate}
            className='landing-nav-link button-link'
          >
            ABOUT <DownArrow />
          </button>
        </div>
      </div>
      <div className='right-landing-container'>
        <Lines />
      </div>
    </div>
  )
}
