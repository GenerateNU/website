import React from "react";
import ValueCard from "./valueCard";
import valueData from "../../../data/valueData";
import './style.css';

const WeAreSection = () => {
    return (
        <> 
             <div className='mission-header-space'></div>
                <div className="weare-header">
                    <h5 className="mb-0 our-mission-our-values we-are-values w-auto h-auto text-end p-4">
                        our values
                    </h5>
                    <h1 className="our-mission-we-are text-no-fill text-uppercase text-nowrap fit-content">
                        We are
                    </h1>
                </div>
            {
                valueData.map(value => <div className="desktop-card-container"><ValueCard value={value}/></div>)
            }
         
           
        </>
    );
};

export default WeAreSection;