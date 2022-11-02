import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import './style.css';

/**
 * Hero section containing a looping video background.
 */
export class WeAre extends Component {
    render() {
        return (
        <Container fluid className="vh-100 h-100 w-100 d-flex align-items-center text-center">
                <div className="shermancenter" />
                <p className="wearetext">WE ARE</p>
                <p className="generatetext">GENERATE</p>
                <div className="whitebox" />
                <div className="scrollarrow" />
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
                <div className="yellowrectangle" />
                <div className="generatelogowhiteone" />
                <div className="generatelogowhitetwo" />
                <div className="generatelogowhitethree" />
        </Container>
        );
    }
} 

export default WeAre;