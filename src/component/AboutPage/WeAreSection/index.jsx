import React from "react";
import ValueCard from "./valueCard";
import valueData from "../../../data/valueData";
import './style.css';

const WeAreSection = () => {
    return (
        <> 
                <div className="weare-header">
                    <h5 className="mb-0 our-mission-our-values we-are-values d-flex flex-row justify-content-end h-auto text-nowrap">
                        our values
                    </h5>
                    <h1 className="our-mission-we-are text-no-fill text-uppercase text-nowrap">
                        We are
                    </h1>
                </div>
            {
                valueData.map(value => <div className="card-container"><ValueCard value={value}/></div>)
            }
         
           
        </>
    );
};

export default WeAreSection;