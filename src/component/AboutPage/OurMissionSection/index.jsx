import React from "react";
import Image from 'react-bootstrap/Image';
import ShermLogo from '../../../assets/images/landingpage/affiliateorgintros/Sherman_Center_Logo.png';
import NavBar from "../../NavBar";
import './style.css';

const OurMissionSection = () => {
    return (
        <div className="vw-100 vh-100 py-4 px-5">
            <NavBar/>
            <div className="w-75 pe-5 d-flex">
                <div className="our-mission-quotation-mark me-2">&#8220;</div>
                <div className="our-mission-quote">
                    To strengthen an inclusive and compassionate learning community by giving students the opportunity to grow through hands-on, professional experiences.
                </div>
                <div className="our-mission-quotation-mark pt-5">&#8221;</div>
            </div>
            <h1 className="our-mission-header text-no-fill text-uppercase position-relative start-0 bottom-0 ps-5 pb-4">
                Our Mission
            </h1>
        </div>
    );
};

export default OurMissionSection;