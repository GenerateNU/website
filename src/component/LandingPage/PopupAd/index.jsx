import React, { useState } from 'react'
import CloseButton from './CloseButton'
import './style.css'

/**
 * A generalized popup ad wrapper that composes over arbitrary content.
 */
export function PopupAd({
  children,
  showOverlay = true,
  closeOnOverlayClick = true,
  showCloseButton = true,
  onClose,
  className = '',
  style
}) {
  const [isOpen, setIsOpen] = useState(true)

  const closePopup = () => {
    setIsOpen(false)
    if (onClose) onClose()
  }

  if (!isOpen) return null

  const handleOverlayClick = () => {
    if (closeOnOverlayClick) closePopup()
  }

  return (
    <div
      className={`popup-ad-overlay${showOverlay ? '' : ' popup-ad-overlay--transparent'}`}
      onClick={handleOverlayClick}
    >
      <div
        className={`popup-ad-content ${className}`.trim()}
        style={style}
        onClick={(e) => e.stopPropagation()}
      >
        {showCloseButton && <CloseButton onClick={closePopup} />}
        {children}
      </div>
    </div>
  )
}

export default PopupAd
