import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import GenerateLogo from "../../assets/images/landingpage/affiliateorgintros/Generate Logo_Nav.png";
import InstaIcon from "../../assets/images/socialMediaIcons/Instagram-Logo.wine.png";
import LinkedInIcon from "../../assets/images/socialMediaIcons/Linkedin-image.png";
import FbIcon from "../../assets/images/socialMediaIcons/logo-facebook-512.webp";
import YoutubeIcon from "../../assets/images/socialMediaIcons/youtube-512.webp";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function VerticalFooterTeams() {
  return (
    <Container fluid className="footerTeams-container">
        <div className="rectangleTwo">
            <div className="rectangle"> 
                <div className="arrow">
                    <ArrowForwardIcon />
                </div>
                <h1 className="teamText">Teams</h1>
                <div className="arrowTwo">
                    <ArrowForwardIcon />
                </div>
            </div>
        </div>
    </Container>

  );
}

export default VerticalFooterTeams;
