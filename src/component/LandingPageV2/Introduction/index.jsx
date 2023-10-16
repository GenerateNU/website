import React from 'react'
import './style.css'
import NavBar from '../../NavBar'

/**
 * Added "MOBILE PAGE COMING SOON" element to display on mobile
 * Line 20-21
 * @returns
 */
/*
export default function Introduction() {
  return (
    <div className="introductionContainer">
        <div className="shermancenter">
          <div className="intro-navbar"><NavBar /> </div>
          <div className="text-container desktop">
            <p className="wearetext">WE ARE</p>
            <p className="generatetext">GENERATE</p>
          </div>
          <div class="comingsoontext">
            <p className="comingsoontext">MOBILE PAGE COMING SOON!</p>
          </div>
        </div>
      </div>
  );
}
*/

/**
 * Added "MOBILE PAGE COMING SOON" element to display on mobile
 * Line 20-21
 */

export default function Introduction() {
  return (
    <div className='introductionContainer'>
      <div className='shermancenter'>
        <div className='intro-navbar'>
          <NavBar />{' '}
        </div>
        <div class='text-container desktop'>
          <p className='wearetext'>WE ARE</p>
          <p className='generatetext'>GENERATE</p>
        </div>
        <div class='mobilePageContainer'>
          <p className='wearetextmobile'>WE ARE</p>
          <p className='generatetextmobile'>GENERATE</p>
          {
            <div className='text-container-mobile'>
              <p className='northeasternbest'>Northeastern's best</p>
              <p className='productdevelopment'>product development</p>
              <p className='studio'>studio</p>
            </div>
          }
        </div>
      </div>
    </div>
  )
}
