import React, { useState, useEffect } from 'react';
import './style.css';
import button from '../Management/images/button.png'
import teamDataWheel from '../../../data/teamDataWheel';

export default function Management() {
  const [selected, setSelected] = useState({});

  useEffect(() => {
    setSelected(teamDataWheel.find((value) => value.team === "MANAGEMENT"));
  }, [])

  const handlePress = (teamData) => {
    setSelected(teamData);
  }

  return (
    <>
      <div className="management-wheel">
        <div id="skills">
          {
            teamDataWheel.map((data, index) => {
              return (
                <button id={`part${index}`} class="circle animate" onClick={() => handlePress(data)}>
                  <img class={`image${index}`} alt={data.team} src={data.image} />
                </button>
              )
            })
          }
          <div className="center"/>
        </div>
      </div>
      <div className='management-spacer'/>
      <div className="management-text">
        {
          <>
            <div id="title"> {selected.team} </div>
            <div id="description"> {selected.text} </div>
            <a id="join" href={`/apply/${selected.team?.toLowerCase()}`}> 
              <img class="button" alt="button" src={button} />  
            </a>
          </>
        }
      </div>
    </>
  );
}