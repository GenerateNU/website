import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import buttonImage from "../AboutPage/leadership_bio.png";
import buttonImage2 from "../AboutPage/leadership_back.png";

// npm install react-responsive-carousel --save
export default function leadership() {

  
    document.addEventListener('DOMContentLoaded', function(event) {

        function cardfunc(cardback, cardfront, flipcard, doflip) {
            document.getElementById(cardback).style.visibility = 'visible';
            document.getElementById(cardfront).style.visibility = 'visible';
          
            document.getElementById(cardback).onclick = function() {
            document.getElementById(flipcard).classList.toggle(doflip);
            };
          
            document.getElementById(cardfront).onclick = function() {
            document.getElementById(flipcard).classList.toggle(doflip);
        }
    }

        cardfunc('flip-card-btn-turn-to-back', 'flip-card-btn-turn-to-front', 'flip-card', 'do-flip');
        cardfunc('flip-card-btn-turn-to-back2', 'flip-card-btn-turn-to-front2', 'flip-card2', 'do-flip2');
        cardfunc('flip-card-btn-turn-to-back3', 'flip-card-btn-turn-to-front3', 'flip-card3', 'do-flip3');
        cardfunc('flip-card-btn-turn-to-back4', 'flip-card-btn-turn-to-front4', 'flip-card4', 'do-flip4');
        cardfunc('flip-card-btn-turn-to-back5', 'flip-card-btn-turn-to-front5', 'flip-card5', 'do-flip5');
        cardfunc('flip-card-btn-turn-to-back6', 'flip-card-btn-turn-to-front6', 'flip-card6', 'do-flip6');
       
    
     
      });

      
   


     
      
    return (
        <div>
        
{/* first card */}
<div id="flip-card">
	<div class="flip-card-front">
    <div class="management">MANAGEMENT</div>
    <img class="leadership_image" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Black_photo.jpg"></img>
    <img id="flip-card-btn-turn-to-back" src={buttonImage}></img>
    <div class="name">Kat Minor</div>
    <div class="role">Executive Director</div>
   </div>


	<div class="flip-card-back">
    <div class="management">MANAGEMENT</div>
    <div class="leadership_text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
    aliquip ex ea commodo consequat. 
    </div>
    <img id="flip-card-btn-turn-to-front" src={buttonImage2}></img>
    </div>
</div>


{/* second card */}
<div id="flip-card2">
	<div class="flip-card-front2">
    <div class="management">OPERATIONS</div>
    <img class="leadership_image" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Black_photo.jpg"></img>
    <img id="flip-card-btn-turn-to-back2" src={buttonImage}></img>
    <div class="name">Andrew Cataldo</div>
    <div class="role">Operations Director</div>
   </div>


	<div class="flip-card-back2">
    <div class="management">OPERATIONS</div>
    <div class="leadership_text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
    aliquip ex ea commodo consequat. 
    </div>
    <img id="flip-card-btn-turn-to-front2" src={buttonImage2}></img>
    </div>
</div>



{/* third card */}
<div id="flip-card3">
	<div class="flip-card-front3">
    <div class="management">SOFTWARE</div>
    <img class="leadership_image" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Black_photo.jpg"></img>
    <img id="flip-card-btn-turn-to-back3" src={buttonImage}></img>
    <div class="name">Thomas Keith</div>
    <div class="role">Software Director</div>
   </div>


	<div class="flip-card-back3">
    <div class="management">SOFTWARE</div>
    <div class="leadership_text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
    aliquip ex ea commodo consequat. 
    </div>
    <img id="flip-card-btn-turn-to-front3" src={buttonImage2}></img>
    </div>
</div>





{/* fourth card */}
<div id="flip-card4">
	<div class="flip-card-front4">
    <div class="management">HARDWARE</div>
    <img class="leadership_image" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Black_photo.jpg"></img>
    <img id="flip-card-btn-turn-to-back4" src={buttonImage}></img>
    <div class="name">Josh Batra</div>
    <div class="role">Hardware Director</div>
   </div>


	<div class="flip-card-back4">
    <div class="management">HARDWARE</div>
    <div class="leadership_text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
    aliquip ex ea commodo consequat. 
    </div>
    <img id="flip-card-btn-turn-to-front4" src={buttonImage2}></img>
    </div>
</div>




{/* fifth card */}
<div id="flip-card5">
	<div class="flip-card-front5">
    <div class="management">ENGAGEMENT</div>
    <img class="leadership_image" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Black_photo.jpg"></img>
    <img id="flip-card-btn-turn-to-back5" src={buttonImage}></img>
    <div class="name">Kyle Janko</div>
    <div class="role">Community Director</div>
   </div>


	<div class="flip-card-back5">
    <div class="management">ENGAGEMENT</div>
    <div class="leadership_text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
    aliquip ex ea commodo consequat. 
    </div>
    <img id="flip-card-btn-turn-to-front5" src={buttonImage2}></img>
    </div>
</div>



{/* sixth card */}
<div id="flip-card6">
	<div class="flip-card-front6">
    <div class="management">OUTREACH</div>
    <img class="leadership_image" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Black_photo.jpg"></img>
    <img id="flip-card-btn-turn-to-back6" src={buttonImage}></img>
    <div class="name">Avital Brodski</div>
    <div class="role">Outreach Director</div>
   </div>


	<div class="flip-card-back6">
    <div class="management">OUTREACH</div>
    <div class="leadership_text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
    aliquip ex ea commodo consequat. 
    </div>
    <img id="flip-card-btn-turn-to-front6" src={buttonImage2}></img>
    </div>
</div>


</div>

        
    );
    
}