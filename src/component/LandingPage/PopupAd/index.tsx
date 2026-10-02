import React, { useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';

import CloseButton from './CloseButton';
import './style.css';

type PopupAdProps = {
  children: ReactNode;
  showOverlay?: boolean;
  closeOnOverlayClick?: boolean;
  showCloseButton?: boolean;
  onClose?: () => void;
  className?: string;
  style?: CSSProperties;
};

/**
 * A generalized popup ad wrapper that composes over arbitrary content.
 */
function PopupAd({
  children,
  showOverlay = true,
  closeOnOverlayClick = true,
  showCloseButton = true,
  onClose,
  className = '',
  style,
}: PopupAdProps) {
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);

    if (onClose) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = () => {
    if (closeOnOverlayClick) {
      closePopup();
    }
  };

  return (
    <div
      className={`popup-ad-overlay${showOverlay ? '' : ' popup-ad-overlay--transparent'}`}
      role="presentation"
      onClick={handleOverlayClick}
    >
      <div
        className={`popup-ad-content ${className}`.trim()}
        style={style}
        role="presentation"
        onClick={e => e.stopPropagation()}
      >
        {showCloseButton && <CloseButton onClick={closePopup} />}
        {children}
      </div>
    </div>
  );
}

export default PopupAd;
