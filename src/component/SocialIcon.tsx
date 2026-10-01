import type { FunctionComponent, JSX, SVGProps } from 'react';
import { Col } from 'react-bootstrap';

import FbIcon from '../assets/images/socialMediaIcons/Facebook.svg?react';
import InstaIcon from '../assets/images/socialMediaIcons/Insta.svg?react';
import LinkedInIcon from '../assets/images/socialMediaIcons/Linkedin.svg?react';
import MosaicIcon from '../assets/images/socialMediaIcons/Mosaic.svg?react';
import NortheasternIcon from '../assets/images/socialMediaIcons/Northeaster.svg?react';
import Sherm from '../assets/images/socialMediaIcons/Sherm.svg?react';
import YoutubeIcon from '../assets/images/socialMediaIcons/Youtube.svg?react';

type SocialIconProps = {
  href: string;
  imgSrc: FunctionComponent<SVGProps<SVGSVGElement>>;
  className?: string;
};

export const socialIcons = [
  [
    {
      href: 'https://www.instagram.com/generatenu/',
      imgSrc: InstaIcon,
    },
  ],
  [
    {
      href: 'https://www.youtube.com/channel/UC2Y_rgZiPKPH0lSU1FyQJFw/featured',
      imgSrc: YoutubeIcon,
    },
    {
      href: 'https://coe.northeastern.edu/orgs/generate/',
      imgSrc: NortheasternIcon,
    },
  ],
  [
    {
      href: 'https://www.linkedin.com/company/generate-product-development/mycompany/',
      imgSrc: LinkedInIcon,
    },
    {
      href: 'https://entrepreneurship.northeastern.edu/mosaic/',
      imgSrc: MosaicIcon,
    },
  ],
  [
    {
      href: 'https://www.facebook.com/GenerateNU/',
      imgSrc: FbIcon,
    },
    {
      href: 'https://sherman.center.northeastern.edu/',
      imgSrc: Sherm,
    },
  ],
];

export function SocialIcon({ href, imgSrc, className }: SocialIconProps): JSX.Element {
  // const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  // const mobile = !isBigScreen
  return (
    <Col className={className}>
      <a href={href}>
        {/* <SvgIcon
          inheritViewBox
          sx={{
            fontSize: mobile ? '32px' : '32px',
            '&:hover': { color: 'black' }
          }}
          component={imgSrc}
        /> */}
      </a>
    </Col>
  );
}
