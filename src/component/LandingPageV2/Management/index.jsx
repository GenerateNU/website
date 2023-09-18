import React, { useState } from 'react';
import './style.css';
import button from '../Management/images/button.png'
import teamDataWheel from '../../../data/teamDataWheel';

export default function Management() {
  const [selected, setSelected] = useState({});

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
          !selected.team &&
          <>
            <div id="title">
              MANAGEMENT
            </div>
            <div id="description">
              The Management Team ensures alignment across our organization.
              The team drives our teams to excel through collaboration and innovative thinking -
              ensuring Generate is functioning at its peak. Our management team is responsible
              for directing Generate's yearly focus.
            </div>
            <a id="join" href="/apply"> <img class="button" alt='button' src={button} />  </a>
          </>
        }
        {
          selected.team &&
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