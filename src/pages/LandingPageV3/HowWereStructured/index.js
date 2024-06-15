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

  const [selected, setSelected] = useState({})

  useEffect(() => {
    if (teams.length > 0) {
      const randomIndex = Math.floor(Math.random() * teams.length)
      setSelected(teams[randomIndex])
    }
  }, [teams])

  const handlePress = (teamData) => {
    setSelected(teamData)
  }

  const handleHover = (teamData) => {
    setSelected(teamData)
  }

  return (
    <div className='grid-bg' id='ll5-row'>
      <div className='white-header-text'>
        {copy && copy[0] && copy[0].header}
      </div>
      <div className='white-p-text'>
        {copy && copy[0] && copy[0].content[0]}
      </div>
      <div className='wheel-content'>
        <div className='management-wheel'>
          <div id='skills'>
            {teams &&
              teams[0] &&
              teams.map((team, index) => {
                return (
                  <button
                    key={`slice${index}`}
                    id={`slice${index}`}
                    className='circle animate'
                    onPress={() => handlePress(team)}
                    onMouseEnter={() => handleHover(team)}
                  >
                    <img
                      className={`image${index}`}
                      alt={team.team}
                      src={team.image}
                    />
                  </button>
                )
              })}
            <div className='center' />
          </div>
        </div>
        <div className='management-text'>
          <div className='white-h2-text'> {selected.team} </div>
          <div className='white-p-text'> {selected.teamDescription} </div>
          <div
            className='view-pp-fp-project-div'
            style={{ paddingTop: '5vw' }}
          ></div>
        </div>
      </div>
    </div>
  )
}
