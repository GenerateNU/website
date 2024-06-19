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
  isDisplayed,
  onPress,
  onMouseEnter,
  onMouseLeave
}) => {
  const ColoredMascot = mascotsColor[index]

  return (
    <div
      className={`mascot-button mascot-button-${index}`}
      onClick={() => onPress(index)}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={onMouseLeave}
    >
      <ColoredMascot
        style={{
          opacity: isDisplayed ? 1 : 0.3,
          // filter: isDisplayed ? '' : 'grayscale(100%)'
        }}
      />
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

  const [hovered, setHovered] = useState(null)
  const [selected, setSelected] = useState(0)
  const displayedIndex = hovered || selected

  const handlePress = (index) => {
    setSelected(index)
    console.log('press', selected)
  }
  const handleMouseEnter = (index) => {
    setHovered(index)
    console.log('hovered', index)
  }
  const handleMouseLeave = () => {
    setHovered(null)
  }

  return (
    <div className='bg-row'>
      <div className='choose-character-row'>
        <div className='choose-character-col'>
          <div className='choose-character-container'>
            <div className='white-h2-text' id="choose-text">Choose Your Character</div>
            <div className='mascot-row'>
              {directors &&
                directors.map((_, index) => (
                  <MascotRadioButton
                    key={index}
                    index={index}
                    isDisplayed={index === displayedIndex}
                    onPress={handlePress}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                ))}
            </div>
            {directors && directors[displayedIndex] && (
              <ArcadeText
                color={directors[displayedIndex].color}
                director={directors[displayedIndex]}
              />
            )}
          </div>
          <div id='rainbow-trim' />
        </div>
        {directors && directors[displayedIndex] && (
          <ArcadeMachine
            id='arcade-machine'
            color={directors[displayedIndex].color}
            text={teamAbbreviations[displayedIndex]}
            imgUrl={directors[displayedIndex].image}
          />
        )}
      </div>
    </div>
  )
}
