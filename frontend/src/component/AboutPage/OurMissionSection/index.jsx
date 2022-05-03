import React from "react";
import './style.css';

const OurMissionSection = () => {
    return (
        <div className="position-relative vw-100 vh-100 py-4 px-5">
            <div className="bg-light p-3 mb-5 d-flex fit-content">
                <span>gen logo</span>
                ahhhh it's a nav bar help
            </div>
            <div className="w-75 pe-5 d-flex">
                <div className="our-mission-quotation-mark me-2">&#8220;</div>
                <div className="our-mission-quote">
                    To strengthen an inclusive and compassionate learning community by giving students the opportunity to grow through hands-on, professional experiences.
                </div>
                <div className="our-mission-quotation-mark pt-5">&#8221;</div>
            </div>
            <h1 className="our-mission-header text-no-fill text-uppercase position-absolute start-0 bottom-0 ps-5 pb-4">
                Our Mission
            </h1>
        </div>
    );
};

export default OurMissionSection;