import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function VerticalFooterTeams() {
  return (
    <Container fluid className="footerTeams-container">
        <div className="rectangleTwo">
            <a href='/culture'>
            <div className="rectangle"> 
                <div className="arrow">
                    <ArrowForwardIcon />
                </div>
                <h1 className="teamText">Culture</h1>
                <div className="arrowTwo">
                    <ArrowForwardIcon/>
                </div>
            </div>
            </a>
        </div>
    </Container>

  );
}

export default VerticalFooterTeams;
