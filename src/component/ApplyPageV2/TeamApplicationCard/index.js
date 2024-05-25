import React, { useState } from 'react'
import Tag from '../Tag'
import { ReactComponent as DownArrow } from '../../../assets/images/applypage-v2/DownArrow.svg'
import './style.css'

export default function TeamApplicationCard(props) {
  const [expanded, setExpanded] = useState(false)

  const boxStyle = {
    boxShadow: `-1rem 1rem ${props.color}`
  }

  const viewRoles = 'View Roles'
  const partnerWithGenerate = 'Partner with Generate'

  return (
    <div className='card-container' style={boxStyle}>
      <div className='header-container'>
        <div className='header-text-style' style={{ color: props.color }}>
          {props.team}
        </div>
        <div className='pill-container'>
          {props.tags.map((tag) => (
            <Tag title={tag}></Tag>
          ))}
        </div>
        {expanded && (
          <div className='desc-text-style'>
            <p>
              We are looking for passionate individuals who are ready to learn
              and grow. We have opportunities that run broad and deep. If you
              don’t see anything right now drop an email and we’ll let you know
              when positions open up again.
            </p>
          </div>
        )}
      </div>
      {props.expand ? (
        <div>
          <button
            className='interactive-container'
            onClick={() => setExpanded(!expanded)}
          >
            <DownArrow />
            <div className='interactive-text-style'>{viewRoles}</div>
          </button>
          {expanded && (
            <div className='expanded-container'>
              <p>Example</p>
            </div>
          )}
        </div>
      ) : (
        <div className='interactive-container'>
          <div className='interactive-text-style'>{partnerWithGenerate}</div>
        </div>
      )}
    </div>
  )
}
