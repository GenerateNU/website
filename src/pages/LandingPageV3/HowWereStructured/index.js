import React, { useEffect, useState } from 'react'
import { useSanity } from '../../../services/useSanity'
import { urlFor } from '../../../client'
import './style.css'

export default function HowWereStrctured() {
  const copyQuery = `*[_type == "copy" && key == "how-were-structured"]{header, content}`
  const copy = useSanity(copyQuery)

  const teamQuery = `*[_type == "team" && team != "Clients"] {team, image, teamDescription, zIndex} | order(zIndex)`
  const teams = useSanity(teamQuery, {}, (data) =>
    data
      ? data.map((value) => ({
          ...value,
          image: urlFor(value.image)
        }))
      : []
  )

  const [hovered, setHovered] = useState(null)
  const [selected, setSelected] = useState({})
  const displayedTeam = hovered || selected

  useEffect(() => {
    if (teams.length > 0) {
      const randomIndex = Math.floor(Math.random() * teams.length)
      setSelected(teams[randomIndex])
    }
  }, [teams])

  const handleClick = (teamData) => {
    setSelected(teamData)
  }
  const handleMouseEnter = (teamData) => {
    setHovered(teamData)
  }
  const handleMouseLeave = () => {
    setHovered(null)
  }

  return (
    <div className='grid-bg' id='ll5-row'>
      <div id='how-structured'>
        <div className='white-header-text'>
          {copy && copy[0] && copy[0].header}
        </div>
        <div className='white-p-text'>
          {copy && copy[0] && copy[0].content[0]}
        </div>
        <div className='wheel-content'>
          <div>
            <div id='skills'>
              {teams &&
                teams[0] &&
                teams.map((team, index) => {
                  return (
                    <button
                      key={`slice${index}`}
                      id={`slice${index}`}
                      className={
                        'circle animate ' +
                        (selected.team === team.team ? 'selected' : '')
                      }
                      onClick={() => handleClick(team)}
                      onMouseEnter={() => handleMouseEnter(team)}
                      onMouseLeave={() => handleMouseLeave()}
                    >
                      <img
                        className={`image${index}`}
                        alt={team.team}
                        src={team.image}
                      />
                    </button>
                  )
                })}
              <div id='wheel-overlay'>
                <div id='wheel-overlay-fill'></div>
              </div>
            </div>
          </div>
          <div className='wheel-text'>
            <div className='white-h2-text'> {displayedTeam.team} </div>
            <div className='white-p-text'>{displayedTeam.teamDescription}</div>
            <div
              className='view-pp-fp-project-div'
              style={{ paddingTop: '5vw' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
