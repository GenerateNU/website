import React from 'react';
import './style.css';

export default function Management() {
  function Color() {
    document.getElementById('title').innerHTML= 'MANAGEMENT'
    document.getElementById('description').innerHTML= 
    'The Management Team ensures alignment across our organization. The team drives our teams to excel through collaboration and innovative thinking - ensuring Generate is functioning at its peak. Our management team is responsible for directing Generate’s yearly focus.'
  }
  function Color2() {
    document.getElementById('title').innerHTML = 'OPERATIONS'
    document.getElementById('description').innerHTML= 
    'Operations optimizes our business functions: ensuring short and long term efficiency. We  works together to adopt principles of organization, communication, and process improvement across Generate to produce tangible benefit for all present and future members across our organization.'
  }
  function Color3() {
    document.getElementById('title').innerHTML = 'SOFTWARE'
    document.getElementById('description').innerHTML= 
    'Our Software Build Studio develops industry-leading software for client’s and Generate’s internal projects. Our  teams work directly with clients to define a scope of work, guiding the creation and iteration of solution prototypes before handing off a refined product to our clients.'
  }
  function Color4() {
    document.getElementById('title').innerHTML = 'HARDWARE'
    document.getElementById('description').innerHTML= 
    'From mechanical systems to electrical development, we help entrepreneurs by overcoming technical hurdles in development. All while providing an educational experience for the engineers and designers of Generate. Our teams navigate the development cycle to iterate innovative solutions.'
  }
  function Color5() {
    document.getElementById('title').innerHTML = 'ENGAGEMENT'
    document.getElementById('description').innerHTML= 
    'The Generate Community engages and builds morale within Generate members and alumni through events. The team enables current and future Generate leaders to grow and ensures that Generate continues to be a more diverse and equitable organization.'
  }

 

   

    return (
       <div>
       <div id="skills">
       <div class="center"></div>
       <button id="part1" class="circle animate" onClick={Color}> </button>
       <button id="part2" class="circle animate" onClick={Color2}> </button>
       <button id="part3" class="circle animate" onClick={Color3}> </button>
       <button id="part4" class="circle animate" onClick={Color4}> </button>
       <button id="part5" class="circle animate" onClick={Color5}> </button>
       </div>
       
       <div id="title">
        <div>MANAGEMENT</div>
        </div>

        <div id="description">
        The Management Team ensures alignment across our organization. 
        The team drives our teams to excel through collaboration and innovative thinking - 
        ensuring Generate is functioning at its peak. Our management team is responsible 
        for directing Generate’s yearly focus. </div>
        </div>
    );
}