import React, { useEffect, useState } from 'react'
import { useSanity } from '../../../sanity/useSanity'
import { urlFor } from '../../../sanity/client'
import './style.css'

const ARC_STEPS = 16
const OUTER_RADIUS = 50
const INNER_RADIUS = 20
const IMAGE_RADIAL_DISTANCE = (OUTER_RADIUS + INNER_RADIUS) / 2
const IMAGE_SIZE = 15
const SELECTED_SHIFT = 7

/**
 * Dynamically generates a circular "slice" shaped path (an annular sector /
 * donut segment) based on the index of the element and the total number of
 * elements that will be present in the circle. The inner edge follows a
 * smaller arc so the center of the wheel reads as a true cutout.
 */
function sliceClipPath(index, total) {
  const sliceAngle = 360 / total
  // Rotate the path by the index
  const startAngle = (index - 0.5) * sliceAngle
  const endAngle = (index + 0.5) * sliceAngle

  const pointAt = (angle, radius) => {
    const rad = (angle * Math.PI) / 180
    const x = 50 + radius * Math.sin(rad)
    const y = 50 - radius * Math.cos(rad)
    return `${x.toFixed(3)}% ${y.toFixed(3)}%`
  }

  const points = []
  // Outer arc: sweep from the start angle to the end angle.
  for (let s = 0; s <= ARC_STEPS; s++) {
    const angle = startAngle + (endAngle - startAngle) * (s / ARC_STEPS)
    points.push(pointAt(angle, OUTER_RADIUS))
  }
  // Inner arc: sweep back from the end angle to the start angle to close the
  // shape around the center cutout.
  for (let s = ARC_STEPS; s >= 0; s--) {
    const angle = startAngle + (endAngle - startAngle) * (s / ARC_STEPS)
    points.push(pointAt(angle, INNER_RADIUS))
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

  // Offset by half the logo's size so (cx, cy) lands at the logo's center
  // rather than its top-left corner.
  return {
    left: `${(cx - IMAGE_SIZE / 2).toFixed(3)}%`,
    top: `${(cy - IMAGE_SIZE / 2).toFixed(3)}%`
  }
}

/**
 * Computes the radial "slide out" offset (as a CSS translate string) for the
 * selected slice, pushing it away from the wheel center along its own angle.
 */
function sliceOffset(index, total) {
  const angle = index * (360 / total)
  const rad = (angle * Math.PI) / 180
  const x = (SELECTED_SHIFT * Math.sin(rad)).toFixed(3)
  const y = (-SELECTED_SHIFT * Math.cos(rad)).toFixed(3)
  return `translate(${x}%, ${y}%)`
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
                teams.map((team, index) => (
                  <div
                    key={`silhouette${index}`}
                    className='circle slice-silhouette'
                    style={{
                      clipPath: sliceClipPath(index, teams.length),
                      visibility:
                        selected.team === team.team ? 'visible' : 'hidden'
                    }}
                  />
                ))}
              {teams &&
                teams[0] &&
                teams.map((team, index) => {
                  const isSelected = selected.team === team.team
                  return (
                    <button
                      key={`slice${index}`}
                      className={
                        'circle animate ' + (isSelected ? 'selected' : '')
                      }
                      style={{
                        clipPath: sliceClipPath(index, teams.length),
                        backgroundColor: team.color.hex,
                        transform: isSelected
                          ? sliceOffset(index, teams.length)
                          : 'translate(0, 0)',
                        zIndex: isSelected ? 100 : 1
                      }}
                      onMouseEnter={() => handleSelect(team)}
                    >
                      <img
                        alt={team.team}
                        src={team.image}
                        style={{
                          position: 'absolute',
                          width: `${IMAGE_SIZE}%`,
                          height: `${IMAGE_SIZE}%`,
                          ...imagePosition(index, teams.length)
                        }}
                      />
                    </button>
                  )
                })}
            </div>
          </div>
          <div className='wheel-text'>
            <div className='white-h2-text'> {selected.team} </div>
            <div className='white-p-text'>{selected.teamDescription}</div>
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
