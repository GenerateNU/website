import React, { useState, useEffect } from 'react'
import './style.css'
import teamDataWheel from '../../../data/teamDataWheel'
import ShadowedButton from '../../ShadowedButton'
import useWebsite from '../../../shared/useWebsite'

export default function Management() {
  const [selected, setSelected] = useState({})
  const isWebsite = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  const mobile = !isBigScreen || !isWebsite

  useEffect(() => {
    setSelected(teamDataWheel.find((value) => value.team === 'MANAGEMENT'))
  }, [])

  const handlePress = (teamData) => {
    setSelected(teamData)
  }

  return (
    <>
      <div className='management-wheel'>
        <div id='skills'>
          {teamDataWheel.map((data, index) => {
            return (
              <button
                id={`part${index}`}
                class='circle animate'
                onClick={() => handlePress(data)}
              >
                <img class={`image${index}`} alt={data.team} src={data.image} />
              </button>
            )
          })}
          <div className='center' />
        </div>
      </div>
      <div className='management-spacer' />
      <div className='management-text'>
        {
          <>
            <div id='title'> {selected.team} </div>
            <div id='description'> {selected.text} </div>
            <div
              className='view-pp-fp-project-div'
              style={{ paddingTop: '5vw' }}
            >
              <ShadowedButton
                fillColor='white'
                xPad={mobile ? '12vw' : '60px'}
                yPad={mobile ? '3vw' : '20px'}
                fontSize={mobile ? '6vw' : '20px'}
                textColor='black'
                text='join'
                onClick={() =>
                  (window.location.href = `/apply/${selected.team?.toLowerCase()}`)
                }
              />
            </div>
          </>
        }
      </div>
    </>
  )
}
