import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import './style.css';

/**
 * Hero section containing a looping video background.
 */
 export default function WeAre() {
        return (
               <div>
                <div className="shermancenter"></div>
                <p>WE ARE</p>
                <p className="generatetext">GENERATE</p>
                 <div className="whitebox" ></div>
                 <div className="scrollarrow" ></div>
                 <p className="scrolltext">scroll</p>
                 <div className="bluerectangle" />
                 <div className="purplerectangle" />
                 <p className="whowearetext">WHO we are</p>
                 <p className="whoweareparagraph">Generate is a student-led product development studio, providing 
                  professional product design experience, leadership training and more to Northeastern students.
                 Generate offers a unique and supportive learning experience for all through professional product 
                 design opportunities. With dedicated teams from engineering and design to community and 
                 operations, we support ventures from all backgrounds to turn visions into reality.</p>
                 <div className="greenrectangle" />
                 <p className="somesaytext">some say</p>
                 <p className="somesayparagraphone">we are</p>
                 <p className="somesayparagraphtwo">{"northeastern's best product development studio :)"}</p>
                 <div className="yellowrectangle"></div>
                 <div className="generatelogowhiteone" ></div>
                 <div className="generatelogowhitetwo" ></div>
                 <div className="generatelogowhitethree" ></div>
                </div>
        );
    };


