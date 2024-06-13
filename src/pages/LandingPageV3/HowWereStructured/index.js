import React, { useEffect, useState } from 'react'
import teamDataWheel from '../../../data/teamDataWheel'
import './style.css'

export default function HowWereStrctured() {
  // TODO: use Sanity to fetch team data
  const [selected, setSelected] = useState({})

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * teamDataWheel.length)
    setSelected(teamDataWheel[randomIndex])
  }, [])

  const handlePress = (teamData) => {
    setSelected(teamData)
  }
  const handleHover = (teamData) => {
    setSelected(teamData)
  }

  return (
    <div className='grid-bg padded-container'>
      <div className='white-header-text'>How We're Structured</div>
      <div className='white-p-text'>
        We organize around our functions of expertise, to ensure each member
        dedicates time and attention to what they do best, and how they want to
        grow!
      </div>
      <div className='wheel-content'>
        <div className='management-wheel'>
          <div id='skills'>
            {teamDataWheel.map((data, index) => {
              return (
                <button
                  key={`part${index}`}
                  id={`part${index}`}
                  className='circle animate'
                  onClick={() => handlePress(data)}
                  onMouseEnter={() => handleHover(data)}
                >
                  <img
                    className={`image${index}`}
                    alt={data.team}
                    src={data.image}
                  />
                </button>
              )
            })}
            <div className='center' />
          </div>
        </div>
        <div className='management-text'>
          {
            <>
              <div className='white-h2-text'> {selected.team} </div>
              <div className='white-p-text'> {selected.text} </div>
              <div
                className='view-pp-fp-project-div'
                style={{ paddingTop: '5vw' }}
              ></div>
            </>
          }
        </div>
      </div>
    </div>
  )
}
