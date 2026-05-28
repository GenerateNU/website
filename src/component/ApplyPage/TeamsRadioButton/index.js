import React, { useEffect, useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import {useSanity} from '../../../services/useSanity'


export const TeamsRadioButton = ({ team, isSelected, onClick }) => {
  const query = `*[_type == "application" && lower(team) == lower("${team}")]`

  const rawApplications = useSanity(query, {}, (data) =>
    data ? data.map((application) => ({
      ...application,
      startDate: new Date(application.startDate),
      endDate: new Date(application.endDate),
    })) : []
  )

  const navigate = useNavigate()

  const handlePositionClick = (id, isActive) => {
    if (isActive) {
      console.log(`Navigating to position ID: ${id} for team: ${team}`)
      navigate(`/positions/${team}/${id}`)
    }
  }

  console.log('rawApplications', rawApplications)

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
          {rawApplications.length === 0 ? (
            <div className='no-positions-text'>No Positions Available</div>
          ) : (
            rawApplications.map((position) => {
              console.log('Rendering position:', position)
              return (
                <div
                  key={position._id}
                  className={
                    position.active ? 'position-text' : 'position-text-disabled'
                  }
                  onClick={() => handlePositionClick(position._id, position.active)}
                >
                  {position.title}
                </div>
              )
            })
          )}
        </div>
      )}
    </div>
  )
}

export default TeamsRadioButton