import React from "react";
import ValueCard from "./valueCard";
import valueData from "../../../data/valueData";
import './style.css';

const WeAreSection = () => {
    return (
        <>
            <div className="vh-100 mt-5 py-4 px-5 position-relative">
                <div className="fit-content">
                    <h5 className="mb-0 our-mission-our-values we-are-values w-auto h-auto text-end">
                        our values
                    </h5>
                    <h1 className="our-mission-we-are text-no-fill text-uppercase fit-content">
                        <div class="sticky-element">
                        We are
                        </div>
                    </h1>
                </div>
                <div className="we-are-header-space"></div>
                <div className="d-flex align-items-center">
                    {
                        valueData.map(value => <ValueCard value={value} />)
                    }
                </div>
            </div>
            <div className="cards-space"></div>
        </>
    );
};

export default WeAreSection;