import React from 'react';
import './style.css';

export default function Management() {
  function Color() {
    document.getElementById('title').innerHTML= 'MANAGEMENT'

  }
  function Color2() {
    document.getElementById('title').innerHTML = 'OPERATIONS'
  }
  function Color3() {
    document.getElementById('title').innerHTML = 'SOFTWARE'
  }
  function Color4() {
    document.getElementById('title').innerHTML = 'HARDWARE'
  }
  function Color5() {
    document.getElementById('title').innerHTML = 'ENGAGEMENT'
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
        </div>
    );
}