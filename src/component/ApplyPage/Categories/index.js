import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { TeamsRadioButton } from '../TeamsRadioButton'
import './style.css'

const CATEGORIES = [
  'management',
  'clients',
  'software',
  'hardware',
  'operations',
  'engagement'
]

export default function Categories() {
  const { team } = useParams()
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState(team)

  const handleClick = (selectedTeam) => {
    if (selectedCategory !== selectedTeam) {
      navigate(`/apply/${selectedTeam}`)
    }
    setSelectedCategory(selectedTeam)
  }

  return (
    <div className='categories-container'>
      {CATEGORIES.map((team) => {
        return (
          <TeamsRadioButton
            key={team}
            team={team}
            isSelected={selectedCategory === team}
            onClick={() => handleClick(team)}
          />
        )
      })}
    </div>
  )
}
