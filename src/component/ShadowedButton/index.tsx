import React from 'react';
import type { JSX, ReactNode } from 'react';

import './style.css';
import { constants } from '../../assets/constants';

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

export default function ShadowedButton(props: ShadowedButtonProps): JSX.Element {
  const ButtonStyle = {
    backgroundColor: props.fillColor,
    padding: `${props.yPad || '1rem'} ${props.xPad}`,
    fontSize: `${props.fontSize || '1.5vw'}`,
  };

  const handleOnClick = (): void => {
    // SAFETY: only runs when onClick is missing, and every caller passes onClick
    const name = props.lnk as string;
    const key = name.replace(' ', '_');
    const POSITIONS_URL = 'Position_' + key;
    // SAFETY: same unused fallback path as above
    window.location.assign(constants[POSITIONS_URL as keyof typeof constants]);
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
