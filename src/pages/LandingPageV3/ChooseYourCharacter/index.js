import React, { useEffect, useState } from 'react'
import ArcadeText from '../../../assets/images/landingpage-v3/DynamicArcadeText.js'
import ArcadeMachine from '../../../assets/images/landingpage-v3/DynamicArcadeMachine.js'
import { urlFor } from '../../../client'
import { useSanity } from '../../../services/useSanity'
import Mascot from './Mascot.jsx'

const MascotRadioButton = ({
  color,
  index,
  isFullOpacity,
  handleMouseEnter,
}) => {
  return (
    <div
      className={`mascot-button mascot-button-${index}`}
      onMouseEnter={() => handleMouseEnter(index)}
    >
      <Mascot 
        color={color}
        className='colored-mascot'
        style={{
          opacity: isFullOpacity ? 1 : 0.3
        }}/>
    </div>
  )
}

export default function ChooseYourCharacter() {
  const directorsQuery = `*[_type == "director"] | order(zIndex)`
  const branchQuery = `*[_type == "team"] {team,team_abbreviation,zIndex} | order(zIndex)`

  const directors = useSanity(directorsQuery, {}, (data) =>
    data
      ? data.map((director) => ({
          ...director,
          color: director.color.hex,
          image: urlFor(director.image)
        }))
      : []
  )

  const branches = useSanity(branchQuery, {}, (data) =>
    data
      ? data.map((branch) => ({
          ...branch,
          team: branch.team.toUpperCase(),
          teamAbbreviation: (branch.team_abbreviation || "").toUpperCase(),
        }))
      : []
  )

  useEffect(() => {
    if (branches.length === 0 || directors.length === 0 )
    {
      return
    } else {
      setDirectorToAbbrev(new Map(directors.map((director) => {
        const branch = branches.find((branch) => branch.team.toUpperCase() === director.team.toUpperCase())
        return [director.name, branch.teamAbbreviation]
      })))
    }
  }, [branches, directors])

  const [coloredIndex, setSelected] = useState(0)
  let [directorToAbbrev, setDirectorToAbbrev] = useState(new Map());


  const handleSelect = (index) => {
    setSelected(index)
  }

  return (
    <div className='bg-row' id='directors'>
      <div id='choose-container'>
        <h2 className='white-header-text' id='choose-text'>
          Choose Your Character
        </h2>
        <div id='choose-grid'>
          <div id='choose-flex-wrapper'>
            <div id='text-mascots'>
              <div className='mascot-row'>
                {directors &&
                  directors.map((director, index) => (
                    <MascotRadioButton
                      key={director.team}
                      index={index}
                      color={director.color}
                      isFullOpacity={index === coloredIndex}
                      handleMouseEnter={handleSelect}
                    />
                  ))}
              </div>
              {directors && directors[coloredIndex] && (
                <ArcadeText
                  id='text-arcade'
                  color={directors[coloredIndex].color}
                  director={directors[coloredIndex]}
                />
              )}
            </div>
            {directors && directorToAbbrev && directors[coloredIndex] && (
              <ArcadeMachine
                color={directors[coloredIndex].color}
                text={directorToAbbrev.get(directors[coloredIndex].name)}
                imgUrl={directors[coloredIndex].image}
              />
            )}
          </div>
        </div>
        <div id='rainbow-trim' />
      </div>
    </div>
  )
}
