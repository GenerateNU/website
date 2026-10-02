import type { FunctionComponent, SVGProps } from 'react';
import { Col } from 'react-bootstrap';

type SocialIconProps = {
  href: string;
  imgSrc: FunctionComponent<SVGProps<SVGSVGElement>>;
  className?: string;
};

export function SocialIcon({ href, className }: SocialIconProps) {
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
