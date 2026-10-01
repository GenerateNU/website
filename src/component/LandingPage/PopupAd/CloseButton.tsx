import React from 'react';
import type { CSSProperties, JSX } from 'react';

import './CloseButton.css';

type CloseButtonProps = {
  onClick: () => void;
  className?: string;
  style?: CSSProperties;
};

/**
 * Close button styled in Generate's design language
 *
 * By default it floats centered just above the popup content
 */
function CloseButton({ onClick, className = '', style }: CloseButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className={`popup-ad-close ${className}`.trim()}
      style={style}
      onClick={onClick}
      aria-label="Close popup"
    >
      close x
    </button>
  );
}

export default CloseButton;
