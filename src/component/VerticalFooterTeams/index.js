import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Arrowhead from "./arrow.png";


function VerticalFooterTeams() {
  return (
    <Container fluid className="footerTeams-container">
        <div className="rectangleTwo">
            <a href='/culture'>
            <div className="rectangle"> 
                <div>
                   <img className="arrow" src={Arrowhead} alt="" />
                </div>
                <a href="/culture"><h1 className="teamText">Culture</h1> </a>
                <div>
                   <img className="arrow2" src={Arrowhead} alt="" />
                </div>
            </div>
            </a>
        </div>
    </Container>

  );
}

export default VerticalFooterTeams;
