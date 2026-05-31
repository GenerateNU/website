import React, { useState } from 'react'
import { ReactComponent as MngmntMascot } from '../../../assets/icons/mascots/management.svg'
import { ReactComponent as EngmntMascot } from '../../../assets/icons/mascots/engagement.svg'
import { ReactComponent as HrdwreMascot } from '../../../assets/icons/mascots/hardware.svg'
import { ReactComponent as OpratnMascot } from '../../../assets/icons/mascots/operations.svg'
import { ReactComponent as SftwreMascot } from '../../../assets/icons/mascots/software.svg'
import { ReactComponent as OptStratMascot } from '../../../assets/icons/mascots/opt-strat.svg'
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
  OptStratMascot
]
const abbrvs = [
  'MNGMNT',
  'DATA',
  'SFTWRE',
  'HRDWRE',
  'GAMES', 
  'ORG.STRAT'
]

const MascotRadioButton = ({
  index,
  isFullOpacity,
  handleMouseEnter,
}) => {
  const Mascot = mascots[index]

  return (
    <div
      className={`mascot-button mascot-button-${index}`}
      onMouseEnter={() => handleMouseEnter(index)}
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

  const [selected, setSelected] = useState(0)
  const coloredIndex = selected

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
                  directors.map((_, index) => (
                    <MascotRadioButton
                      key={index}
                      index={index}
                      isFullOpacity={index === selected}
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
