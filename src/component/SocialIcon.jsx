import { Col } from 'react-bootstrap'
import { ReactComponent as InstaIcon } from '../assets/images/socialMediaIcons/Insta.svg'
import { ReactComponent as LinkedInIcon } from '../assets/images/socialMediaIcons/Linkedin.svg'
import { ReactComponent as FbIcon } from '../assets/images/socialMediaIcons/Facebook.svg'
import { ReactComponent as YoutubeIcon } from '../assets/images/socialMediaIcons/Youtube.svg'
import { ReactComponent as MosaicIcon } from '../assets/images/socialMediaIcons/Mosaic.svg'
import { ReactComponent as NortheasternIcon } from '../assets/images/socialMediaIcons/Northeaster.svg'
import { ReactComponent as Sherm } from '../assets/images/socialMediaIcons/Sherm.svg'
import { SvgIcon } from '@mui/material'

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
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  const mobile = !isBigScreen
  return (
    <Col className={className}>
      <a href={href}>
        <SvgIcon
          inheritViewBox
          sx={{
            fontSize: mobile ? '64px' : '32px',
            '&:hover': { color: 'black' }
          }}
          component={imgSrc}
        />
      </a>
    </Col>
  )
}
