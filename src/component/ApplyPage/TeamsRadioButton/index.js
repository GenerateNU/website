import React, { useMemo } from 'react'
import './style.css'
import { findPositionsByCategory } from '../../../services/positionService'
import { useNavigate } from 'react-router-dom'

export const TeamsRadioButton = ({ team, isSelected, onClick }) => {
  const navigate = useNavigate()

  const positionsData = useMemo(() => findPositionsByCategory(team), [team])

  const handlePositionClick = (id) => {
    navigate(`/positions/${team}/${id}`)
  }
  return (
    <div className='teams-button-container'>
      <div
        className={isSelected ? 'teams-button-selected' : 'teams-button'}
        onClick={onClick}
      >
        {team}
      </div>
      {isSelected && (
        <div className='positions-container'>
          {positionsData.length === 0 ? (
            <div className='no-positions-text'>No Positions Available</div>
          ) : (
            positionsData.map((position, index) => {
              return (
                <div
                  key={position.positionTitle}
                  className={
                    position.active ? 'position-text' : 'position-text-disabled'
                  }
                  onClick={() => handlePositionClick(index)}
                >
                  {position.positionTitle}
                </div>
              )
            })
          )}
        </div>
      )}
    </div>
  )
}
