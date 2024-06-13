import { ReactComponent as GenerateLogo } from '../../../assets/images/landingpage-v3/GenerateLogo.svg'
import { ReactComponent as DownArrow } from '../../../assets/images/landingpage-v3/DownArrow.svg'
import './style.css'

export default function Navigation({ scrollToWhatIsGenerate }) {
  return (
    <div className='bg-row' id="ll1-row">
      <div className='half-container blue-bg'>
        <a href={'/'} className='landing-header'>
          <GenerateLogo id="generate-logo" />
          GENERATE
        </a>
        <div className='landing-links'>
          <a href={'/projects'} className='landing-nav-link'>
            PROJECTS
          </a>
          <a href={'/apply'} className='landing-nav-link'>
            APPLY
          </a>
          {/* <a href={'/'} className='landing-nav-link'>
            CLIENTS
          </a> */}
          <button
            onClick={scrollToWhatIsGenerate}
            className='landing-nav-link button-link'
          >
            ABOUT <DownArrow id="about-down-arrow" />
          </button>
        </div>
      </div>
      <div className='ll-container'>
        <div id="landing-lines-1" className='landing-lines' />
      </div>
    </div>
  )
}
