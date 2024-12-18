import { ReactComponent as ShermLogo } from '../../../assets/images/landingpage-v3/ShermanLogo.svg'
import { ReactComponent as MosaicLogo } from '../../../assets/images/landingpage-v3/MosaicLogo.svg'

export default function ParentOrgs() {
  return (
    <div className='bg-row' id='ll8-row'>
      <div id='parent-orgs-container'>
        <div className='white-header-text' id='parent-orgs-header'>
          Parent Orgs
        </div>
        <div id='parent-orgs-content'>
          <div className='parent-org'>
            <a
              href='https://sherman.center.northeastern.edu/'
              target='_blank'
              rel='noopener noreferrer'
              className='landing-nav-link'
            >
              Sherman Center
            </a>
            <ShermLogo
              style={{ cursor: 'pointer' }}
              onClick={() =>
                window
                  .open('https://sherman.center.northeastern.edu/', '_blank')
                  .focus()
              }
            />
          </div>
          <div className='parent-org'>
            <a
              href='https://mosaic.entrepreneurship.northeastern.edu/'
              target='_blank'
              rel='noopener noreferrer'
              className='landing-nav-link'
            >
              Mosaic
            </a>
            <MosaicLogo
              style={{ cursor: 'pointer' }}
              onClick={() => {
                window
                  .open(
                    'https://mosaic.entrepreneurship.northeastern.edu/',
                    '_blank'
                  )
                  .focus()
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
