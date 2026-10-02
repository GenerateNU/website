import React from 'react';
import type { ReactNode } from 'react';

import './style.css';
import { constants } from '@/assets/constants';

type ShadowedButtonProps = {
  text: ReactNode;
  onClick?: () => void;
  lnk?: string;
  fillColor?: string;
  textColor?: string;
  xPad?: string;
  yPad?: string;
  fontSize?: string;
  right?: boolean;
  className?: string;
};

const isConstantKey = (key: string): key is keyof typeof constants => Object.hasOwn(constants, key);

export default function ShadowedButton(props: ShadowedButtonProps) {
  const ButtonStyle = {
    backgroundColor: props.fillColor,
    padding: `${props.yPad || '1rem'} ${props.xPad}`,
    fontSize: props.fontSize || '1.5vw',
  };

  const handleOnClick = () => {
    const positionKey = `Position_${(props.lnk ?? '').replace(' ', '_')}`;

    if (isConstantKey(positionKey)) {
      window.location.assign(constants[positionKey]);
    }
  };

  return (
    <button
      className={`${
        props.right ? 'button-style-right' : 'button-style'
      } fit-content me-5 text-nowrap ${props.className} hoverButton`}
      style={ButtonStyle}
      onClick={props.onClick ? props.onClick : handleOnClick}
    >
      <div style={{ color: props.textColor }}>{props.text}</div>
    </button>
  );
}
