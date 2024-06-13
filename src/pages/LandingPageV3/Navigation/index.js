import { ReactComponent as GenerateLogo } from '../../../assets/images/landingpage-v3/GenerateLogo.svg'
import { ReactComponent as DownArrow } from '../../../assets/images/landingpage-v3/DownArrow.svg'
import './style.css'
import { ReactComponent as Instagram } from '../../../assets/icons/socials/Instagram.svg'
import { ReactComponent as Email } from '../../../assets/icons/socials/Email.svg'
import { ReactComponent as LinkedIn } from '../../../assets/icons/socials/LinkedIn.svg'

export default function Navigation({ scrollToWhatIsGenerate }) {
  const icons = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/generatenu/',
      symbol: <Instagram className='social-icon' />
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/generate-product-development/mycompany/',
      symbol: <LinkedIn className='social-icon' />
    },
    {
      name: 'Email',
      href: 'mailto:generate@northeastern.edu',
      symbol: <Email className='social-icon' />
    }
  ]

  return (
    <div className='bg-row' id='ll1-row'>
      <div className='half-container blue-bg'>
        <a href={'/'} className='landing-header'>
          <GenerateLogo id='generate-logo' />
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
            ABOUT <DownArrow id='about-down-arrow' />
          </button>

          <div id='socials'>
            {icons.map((si, index) => (
              <a
                key={index}
                className='social-link'
                href={si.href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={si.title}
              >
                {si.symbol}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className='ll-container'>
        <div id='landing-lines-1' className='landing-lines' />
      </div>
    </div>
  )
}
