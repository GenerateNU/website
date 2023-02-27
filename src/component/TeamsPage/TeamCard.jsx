import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/esm/Image';
import Row from 'react-bootstrap/esm/Row';
import ShadowedButton from '../../ShadowedButton';
import './style.css';

const TeamCard = (props) => {
    <div className='card-container-flex' style={"color: " + props.color}>
        <img className='card-img' src={props.image} />
        <div className='title-bkgnd'>
            <div className='title-text' style={"color: " + props.color}>
                {props.title}
            </div>
        </div>
    </div>
}