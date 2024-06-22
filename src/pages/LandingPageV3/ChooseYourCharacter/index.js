import React, { useState } from 'react'
import { ReactComponent as MngmntMascot } from '../../../assets/icons/mascots/management.svg'
import { ReactComponent as EngmntMascot } from '../../../assets/icons/mascots/engagement.svg'
import { ReactComponent as HrdwreMascot } from '../../../assets/icons/mascots/hardware.svg'
import { ReactComponent as OpratnMascot } from '../../../assets/icons/mascots/operations.svg'
import { ReactComponent as SftwreMascot } from '../../../assets/icons/mascots/software.svg'
import ArcadeText from '../../../assets/images/landingpage-v3/DynamicArcadeText.js'
import ArcadeMachine from '../../../assets/images/landingpage-v3/DynamicArcadeMachine.js'
import { urlFor } from '../../../client'
import { useSanity } from '../../../services/useSanity'

const mascots = [
  MngmntMascot,
  EngmntMascot,
  SftwreMascot,
  HrdwreMascot,
  OpratnMascot
]
const abbrvs = ['MNGMNT', 'ENGMNT', 'SFTWRE', 'HRDWRE', 'OPRATN']

const MascotRadioButton = ({
  index,
  isDisplayed,
  onPress,
  onMouseEnter,
  onMouseLeave
}) => {
  const Mascot = mascots[index]

  return (
    <div
      className={`mascot-button mascot-button-${index}`}
      onClick={() => onPress(index)}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={onMouseLeave}
    >
      <Mascot
      className='colored-mascot'
        style={{
          opacity: isDisplayed ? 1 : 0.3
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
  const coloredIndex = hovered || selected

  const handlePress = (index) => {
    setSelected(index)
  }
  const handleMouseEnter = (index) => {
    setHovered(index)
  }
  const handleMouseLeave = () => {
    setHovered(null)
  }

  return (
    <div className='bg-row'>
      <div className='choose-character-row'>
        <div className='choose-character-col'>
          <div className='choose-character-container'>
            <div className='white-h2-text' id='choose-text'>
              Choose Your Character
            </div>
            <div className='mascot-row'>
              {directors &&
                directors.map((_, index) => (
                  <MascotRadioButton
                    key={index}
                    index={index}
                    isDisplayed={index === coloredIndex}
                    onPress={handlePress}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                ))}
            </div>
            {directors && directors[coloredIndex] && (
              <ArcadeText
                color={directors[coloredIndex].color}
                director={directors[coloredIndex]}
              />
            )}
          </div>
          <div id='rainbow-trim' />
        </div>
        {directors && directors[coloredIndex] && (
          <ArcadeMachine
            id='arcade-machine'
            color={directors[coloredIndex].color}
            text={abbrvs[coloredIndex]}
            imgUrl={directors[coloredIndex].image}
          />
        )}
      </div>
    </div>
  )
}
