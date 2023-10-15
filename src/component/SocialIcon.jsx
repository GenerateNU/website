import { Col } from 'react-bootstrap'
import InstaIcon from '../assets/images/socialMediaIcons/Insta.svg'
import LinkedInIcon from '../assets/images/socialMediaIcons/Linkedin.svg'
import FbIcon from '../assets/images/socialMediaIcons/Facebook.svg'
import YoutubeIcon from '../assets/images/socialMediaIcons/Youtube.svg'
import MosaicIcon from '../assets/images/socialMediaIcons/Mosaic.svg'
import NortheasternIcon from '../assets/images/socialMediaIcons/Northeaster.svg'
import Sherm from '../assets/images/socialMediaIcons/Sherm.svg'

export const socialIcons = [
  [
    {
      href: 'https://www.instagram.com/generatenu/',
      imgSrc: InstaIcon
    }
  ],
  [
    {
      href: 'https://www.youtube.com/channel/UC2Y_rgZiPKPH0lSU1FyQJFw/featured',
      imgSrc: YoutubeIcon
    },
    {
      href: 'https://coe.northeastern.edu/orgs/generate/',
      imgSrc: NortheasternIcon
    }
  ],
  [
    {
      href: 'https://www.linkedin.com/company/generate-product-development/mycompany/',
      imgSrc: LinkedInIcon
    },
    {
      href: 'https://entrepreneurship.northeastern.edu/mosaic/',
      imgSrc: MosaicIcon
    }
  ],
  [
    {
      href: 'https://www.facebook.com/GenerateNU/',
      imgSrc: FbIcon
    },
    {
      href: 'https://sherman.center.northeastern.edu/',
      imgSrc: Sherm
    }
  ]
]

export function SocialIcon({ href, imgSrc, className }) {
  return (
    <Col className={className}>
      <a href={href}>
        <img className='social-media' src={imgSrc} alt='' />
      </a>
    </Col>
  )
}
