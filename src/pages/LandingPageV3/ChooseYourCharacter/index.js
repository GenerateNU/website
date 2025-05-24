import React, { useState } from 'react'
import { ReactComponent as MngmntMascot } from '../../../assets/icons/mascots/management.svg'
import { ReactComponent as EngmntMascot } from '../../../assets/icons/mascots/engagement.svg'
import { ReactComponent as HrdwreMascot } from '../../../assets/icons/mascots/hardware.svg'
import { ReactComponent as OpratnMascot } from '../../../assets/icons/mascots/operations.svg'
import { ReactComponent as SftwreMascot } from '../../../assets/icons/mascots/software.svg'
import { ReactComponent as FinanceMascot } from '../../../assets/icons/mascots/finance.svg'
import { ReactComponent as MarketingMascot } from '../../../assets/icons/mascots/marketing.svg'
import ArcadeText from '../../../assets/images/landingpage-v3/DynamicArcadeText.js'
import ArcadeMachine from '../../../assets/images/landingpage-v3/DynamicArcadeMachine.js'
import { urlFor } from '../../../client'
import { useSanity } from '../../../services/useSanity'

const mascots = [
  MngmntMascot,
  OpratnMascot,
  SftwreMascot,
  HrdwreMascot,
  EngmntMascot,
  FinanceMascot,
  MarketingMascot
]
const abbrvs = [
  'MNGMNT',
  'OPRATN',
  'SFTWRE',
  'HRDWRE',
  'ENGMNT',
  'FNANCE',
  'MRKTNG'
]

const MascotRadioButton = ({
  index,
  isFullOpacity,
  handleClick,
  handleMouseEnter,
  handleMouseLeave
}) => {
  const Mascot = mascots[index]

  return (
    <div
      className={`mascot-button mascot-button-${index}`}
      onClick={() => handleClick(index)}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
    >
      <Mascot
        className='colored-mascot'
        style={{
          opacity: isFullOpacity ? 1 : 0.3
        }}
      />
    </div>
  )
}

export default function ChooseYourCharacter() {
  const query = `*[_type == "director"] | order(zIndex)`
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
  const coloredIndex = hovered !== null ? hovered : selected

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
                  directors.map((_, index) => (
                    <MascotRadioButton
                      key={index}
                      index={index}
                      isFullOpacity={index === hovered || index === selected}
                      handleClick={handlePress}
                      handleMouseEnter={handleMouseEnter}
                      handleMouseLeave={handleMouseLeave}
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
            {directors && directors[coloredIndex] && (
              <ArcadeMachine
                color={directors[coloredIndex].color}
                text={abbrvs[coloredIndex]}
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
