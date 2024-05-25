import React from 'react'
import Tag from '../Tag'
import DownArrow from '../../../assets/images/applypage-v2/downArrow.png'
import './style.css'

export default function MemberApplicationDropdown(props) {
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
      </div>
      <div className='interactive-container'>
        {props.expand ? (
          <div className='interactive-text-style'>
            {viewRoles}
          </div>
        ) : (
          <div className='interactive-text-style'>{partnerWithGenerate}</div>
        )}
      </div>
    </div>
  )
}
