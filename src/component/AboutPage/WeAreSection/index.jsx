import React from "react";
import ValueCard from "./valueCard";
import valueData from "../../../data/valueData";
import './style.css';

const WeAreSection = () => {
    return (
        <> 
             <div >
             <div className='mission-header-space'></div>
                <div className="weare-header fit-content">
                    <h5 className="mb-0 our-mission-our-values we-are-values w-auto h-auto text-end p-4">
                        our values
                    </h5>
                    <h1 className="our-mission-we-are text-no-fill text-uppercase fit-content">
                        We are
                    </h1>
                </div>
                <div className="we-are-header-space"></div>
                <div className="card-container d-flex align-items-center">
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