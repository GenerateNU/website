import React, { useState, useEffect } from 'react';
import './style.css';

const TeamCard = ({color = 'black', name='Team', image = null}) => {
    //const [cardPicture, setCardPicture] = useState(props.defaultImage);
    return (
        <div className='card-container-flex' style={{backgroundColor: color}}>
            <img className='card-img' src={image} />
            <div className='title-bkgnd'>
                <div className='title-text' style={{color: color}}>
                    {name}
                </div>
            </div>
        </div>
    );
};

export default TeamCard;