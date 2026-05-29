import React, { useEffect, useState } from 'react'
import { useSanity } from '../../../services/useSanity'
import { urlFor } from '../../../client'
import './style.css'

const ARC_STEPS = 16
const IMAGE_RADIAL_DISTANCE = 32

/** 
 * Dynamically generates a circular "slice" shaped path based on the index of the element
 * and the total number of elements that will be present in the circle
 */ 
function sliceClipPath(index, total) {
  const sliceAngle = 360 / total
  // Rotate the path by the index
  const startAngle = (index - 0.5) * sliceAngle
  const endAngle = (index + 0.5) * sliceAngle

  const points = ['50% 50%']
  for (let s = 0; s <= ARC_STEPS; s++) {
    const angle = startAngle + (endAngle - startAngle) * (s / ARC_STEPS)
    const rad = (angle * Math.PI) / 180
    const x = 50 + 50 * Math.sin(rad)
    const y = 50 - 50 * Math.cos(rad)
    points.push(`${x.toFixed(3)}% ${y.toFixed(3)}%`)
  }

  return `polygon(${points.join(', ')})`
}

/**
 * Computes the center of a sliceClipPath based on the index of the element
 * and the number of slices in the circle`
 */
function imagePosition(index, total) {
  const sliceAngle = 360 / total
  const angle = index * sliceAngle
  const rad = (angle * Math.PI) / 180
  const cx = 50 + IMAGE_RADIAL_DISTANCE * Math.sin(rad)
  const cy = 50 - IMAGE_RADIAL_DISTANCE * Math.cos(rad)

  return {
    left: `${(cx - 10).toFixed(3)}%`,
    top: `${(cy - 10).toFixed(3)}%`
  }
}

export default function HowWereStrctured() {
  const copyQuery = `*[_type == "copy" && key == "how-were-structured"]{header, content}`
  const copy = useSanity(copyQuery)

  const teamQuery = `*[_type == "team" && team != "Clients"] {team, image, teamDescription, zIndex, color} | order(zIndex)`
  const teams = useSanity(teamQuery, {}, (data) =>
    data
      ? data.map((value) => ({
          ...value,
          image: urlFor(value.image)
        }))
      : []
  )

  const [selected, setSelected] = useState({})
  const displayedTeam =  selected

  useEffect(() => {
    if (teams.length > 0) {
      const randomIndex = Math.floor(Math.random() * teams.length)
      setSelected(teams[randomIndex])
    }
  }, [teams])

  const handleSelect = (teamData) => {
    setSelected(teamData)
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
                      className={
                        'circle animate ' +
                        (selected.team === team.team ? 'selected' : '')
                      }
                      style={{
                        clipPath: sliceClipPath(index, teams.length),
                        backgroundColor: team.color.hex
                      }}
                      onMouseEnter={() => handleSelect(team)}
                    >
                      <img
                        alt={team.team}
                        src={team.image}
                        style={{
                          position: 'absolute',
                          width: '20%',
                          height: '20%',
                          ...imagePosition(index, teams.length)
                        }}
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
