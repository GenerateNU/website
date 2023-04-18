import React, { useState, useEffect } from 'react';
import './style.css';

const TeamCard = ({color = 'black', name='Team', image = null}) => {
    return (
        <a href={"/teams-expanded#" + name.toLowerCase()} className='link-wrapper'>
            <div className='card-container-flex' style={{backgroundColor: color}}>
                <img className='card-img' src={image} />
                <div className='title-bkgnd'>
                    <div className='title-text' style={{color: color}}>
                        {name}
                    </div>
                </div>
            </div>
        </a>
    );
};

export default TeamCard;