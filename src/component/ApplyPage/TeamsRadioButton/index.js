import React, { useMemo } from 'react'
import './style.css'
import { findPositionsByCategory } from '../../../services/positionService'
import { useNavigate } from 'react-router-dom'
import {useSanity} from '../../../services/useSanity'

export const TeamsRadioButton = ({ team, isSelected, onClick }) => {

  const query = `*[_type == "application" && team == ${team}] | order(zIndex desc)`

  const applications = useSanity(query, {}, (data) => data ? data.map((application) => ({
      ...application,
      startDate: new Date(application.startDate),
      endDate: new Date(application.endDate),
    })) : []
  );

  const navigate = useNavigate()

  const positionsData = useMemo(() => findPositionsByCategory(team), [team])

  const handlePositionClick = (id, isActive) => {
    if (isActive) {
      navigate(`/positions/${team}/${id}`)
    }
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
            applications.map((position, index) => {
              return (
                <div
                  key={position.positionTitle}
                  className={
                    position.active ? 'position-text' : 'position-text-disabled'
                  }
                  onClick={() => handlePositionClick(index, position.active)}
                  d
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
