import React, { useState } from 'react'
import { ReactComponent as MgmtColorMascot } from '../../../assets/icons/mascots/colored/mgmtMascot.svg'
import { ReactComponent as EngColorMascot } from '../../../assets/icons/mascots/colored/engMascot.svg'
import { ReactComponent as HwColorMascot } from '../../../assets/icons/mascots/colored/hwMascot.svg'
import { ReactComponent as OpsColorMascot } from '../../../assets/icons/mascots/colored/opsMascot.svg'
import { ReactComponent as SwColorMascot } from '../../../assets/icons/mascots/colored/swMascot.svg'
import { ReactComponent as MgmtGrayMascot } from '../../../assets/icons/mascots/gray/mgmtMascot.svg'
import { ReactComponent as EngGrayMascot } from '../../../assets/icons/mascots/gray/engMascot.svg'
import { ReactComponent as HwGrayMascot } from '../../../assets/icons/mascots/gray/hwMascot.svg'
import { ReactComponent as OpsGrayMascot } from '../../../assets/icons/mascots/gray/opsMascot.svg'
import { ReactComponent as SwGrayMascot } from '../../../assets/icons/mascots/gray/swMascot.svg'
import ArcadeText from '../../../assets/images/landingpage-v3/DynamicArcadeText.js'
import ArcadeMachine from '../../../assets/images/landingpage-v3/DynamicArcadeMachine.js'
import { ReactComponent as RainbowTrim } from '../../../assets/images/landingpage-v3/RainbowTrim.svg'
import { urlFor } from '../../../client'
import { useSanity } from '../../../services/useSanity'

const mascotsGray = [
  MgmtGrayMascot,
  EngGrayMascot,
  SwGrayMascot,
  HwGrayMascot,
  OpsGrayMascot
]
const mascotsColor = [
  MgmtColorMascot,
  EngColorMascot,
  SwColorMascot,
  HwColorMascot,
  OpsColorMascot
]
const teamAbbreviations = ['MNGMNT', 'ENGMNT', 'SFTWRE', 'HRDWRE', 'OPRATN']

const MascotRadioButton = ({
  index,
  isSelected,
  isHovered,
  onClick,
  onMouseEnter,
  onMouseLeave
}) => {
  const GrayMascot = mascotsGray[index]
  const ColoredMascot = mascotsColor[index]

  return (
    <div
      className={`mascot-button mascot-button-${index}`}
      onClick={() => onClick(index)}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={onMouseLeave}
    >
      {isSelected || isHovered ? (
        <ColoredMascot id='generate-mascot' />
      ) : (
        <GrayMascot id='generate-mascot' />
      )}
    </div>
  )
}

export default function ChooseYourCharacter() {
  const query = `*[_type == "director"] | order(zIndex desc)`
  const directors = useSanity(query, {}, (data) =>
    data
      ? data.map((director) => ({
          ...director,
          color: director.color.hex,
          image: urlFor(director.image)
        }))
      : []
  )
  // const [selectedDirector, setSelectedDirector] = useState(directors[0])

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const handleMouseEnter = (index) => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  const handleClick = (index) => {
    setSelectedIndex(index)
  }

  return (
    <div className='bg-row'>
      <div className='choose-character-row'>
        <div className='choose-character-col'>
          <div className='choose-character-container'>
            <div className='white-h2-text'>Choose Your Character</div>
            <div className='mascot-row'>
              {directors &&
                directors.map((_type, index) => (
                  <MascotRadioButton
                    key={index}
                    index={index}
                    isSelected={index === selectedIndex}
                    isHovered={index === hoveredIndex}
                    onClick={handleClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                ))}
            </div>
            {directors && directors[selectedIndex] && (
              <ArcadeText
                id='arcade-text'
                color={directors[selectedIndex].color}
                director={directors[selectedIndex]}
              />
            )}
          </div>
          <RainbowTrim id='rainbow-trim' />
        </div>
        {directors && directors[selectedIndex] && (
          <ArcadeMachine
            id='arcade-machine'
            color={directors[selectedIndex].color}
            text={teamAbbreviations[selectedIndex]}
            imgUrl={directors[selectedIndex].image}
          />
        )}
      </div>
    </div>
  )
}
