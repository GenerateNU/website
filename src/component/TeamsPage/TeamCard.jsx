import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/esm/Image';
import Row from 'react-bootstrap/esm/Row';
import ShadowedButton from '../../ShadowedButton';
import './style.css';

const TeamCard = (props) => {
    <div className='card-container-flex'>
        <img className='card-img' src={props.image} />
        <div className='title-bkgnd'>
        {props.title}
        </div>
    </div>
}