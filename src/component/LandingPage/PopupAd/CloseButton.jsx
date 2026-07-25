import React from 'react'
import './CloseButton.css'

/**
 * Close button styled in Generate's design language
 *
 * By default it floats centered just above the popup content
 */
export function CloseButton({ onClick, className = '', style }) {
  return (
    <button
      type='button'
      className={`popup-ad-close ${className}`.trim()}
      style={style}
      onClick={onClick}
      aria-label='Close popup'
    >
      close x
    </button>
  )
}

export default CloseButton
