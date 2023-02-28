import React, { useState, useEffect } from 'react';
import './style.css';

const TeamCard = ({color = 'black', name='Team', ManagementActiveIcon = null}) => {
    //const [cardPicture, setCardPicture] = useState(props.defaultImage);
    return (
        <div className='card-container-flex' style={{color: color}}>
            <img className='card-img' src={ManagementActiveIcon} />
            <div className='title-bkgnd'>
                <div className='title-text' style={{color: color}}>
                    {name}
                </div>
            </div>
        </div>
    );
};

export default TeamCard;