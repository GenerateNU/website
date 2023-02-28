import React from 'react';
import './style.css';
import image1 from '../Management/images/wheel_image1.png'
import image2 from '../Management/images/wheel_image2.png'
import image3 from '../Management/images/wheel_image3.png'
import image4 from '../Management/images/wheel_image4.png'
import image5 from '../Management/images/wheel_image5.png'
import button from '../Management/images/button.png'

export default function Management() {
  function Color() {
    document.getElementById('title').innerHTML = 'MANAGEMENT'
    document.getElementById('description').innerHTML =
      'Setting the yearly vision and ensuring alignment across our organization, we ensure Generate is functioning at its peak. We drive our teams to excel through innovative thinking and build collaborations with other student organizations. Moreover, we work with Sherman Center and Mosaic leadership to position Generate for the future and align each of our goals.'
  }
  function Color2() {
    document.getElementById('title').innerHTML = 'OPERATIONS'
    document.getElementById('description').innerHTML =
      'By adopting new principles of organization, communication, and process improvement, we work to produce tangible benefits for past, present, and future members of our organization. Our team optimizes Generate’s business functions, ensuring short and long-term efficiency in purchasing, space interaction, and professional development.'
  }
  function Color3() {
    document.getElementById('title').innerHTML = 'SOFTWARE'
    document.getElementById('description').innerHTML =
      'We develop scalable, market-ready software products for industry clients and Northeastern founders. The teams work directly with their clients to define a scope of work, guiding the creation and iteration of solution prototypes before handing off a refined product. '
  }
  function Color4() {
    document.getElementById('title').innerHTML = 'HARDWARE'
    document.getElementById('description').innerHTML =
      'From mechanical design to electromechanical systems, we help entrepreneurs by overcoming technical hurdles in development. Our teams work closely with clients to define a project charter outlining important details such as scope and deliverables, executing high quality work week to week to complete iterations within the product development cycle. Hardware teams work hard to achieve a fantastic final product and successful project handoff.'
  }
  function Color5() {
    document.getElementById('title').innerHTML = 'ENGAGEMENT'
    document.getElementById('description').innerHTML =
      'Creating a publicly facing voice and developing a brand and persona for the organization, we excite and connect Generate members. Through hosting events, creating and improving our branding, and building interpersonal relationships, we ensure that Generate shows its true colors, and that everyone is excited to be a part of it.'
  }

  return (
    <>
      <div className="management-wheel">
        <div id="skills">
          <div className="center"></div>
          <button id="part1" class="circle animate" onClick={Color}>
            <img class="image1" alt='image1' src={image1} />
          </button>
          <button id="part2" class="circle animate" onClick={Color2}>
            <img class="image2" alt='image2' src={image2} /> </button>
          <button id="part3" class="circle animate" onClick={Color3}>
            <img class="image3" alt='image3' src={image3} /> </button>
          <button id="part4" class="circle animate" onClick={Color4}>
            <img class="image4" alt='image4' src={image4} /> </button>
          <button id="part5" class="circle animate" onClick={Color5}>
            <img class="image5" alt='image5' src={image5} /> </button>
        </div>
      </div>
      <div className='management-spacer'/>
      <div className="management-text">
        <div id="title">
          <div>MANAGEMENT</div>
        </div>
        <div className="management-text">
          <div id="title">
            <div>MANAGEMENT</div>
          </div>
        </div>
        <div id="description">
          The Management Team ensures alignment across our organization.
          The team drives our teams to excel through collaboration and innovative thinking -
          ensuring Generate is functioning at its peak. Our management team is responsible
          for directing Generate’s yearly focus. </div>
        <a href="/apply"> <img class="button" alt='button' src={button} />  </a>
      </div>
    </>
  );
}