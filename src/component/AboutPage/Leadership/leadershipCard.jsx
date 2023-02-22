import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/esm/Image';
import Row from 'react-bootstrap/esm/Row';
import ShadowedButton from '../../ShadowedButton';
import './style.css';

export default function LeadershipCard({
    director = {
        'title': '',
        'team': '',
        'color': '',
        'activeIcon': null,
        'inactiveIcon': null,

        'name': '',
        'image': null,
        'bio': '',
        'emailUsername': '',
    },
}) {
    const [flipped, setFlipped] = useState(false);
    const boldHeaderStyle = {
        fontFamily: 'Space Mono 700'
    };

    useEffect(() => {
        console.log(`flipped changed values: ${flipped}`);
    }, [flipped]);

    const Card = props => {
        const detailsRowJustify = props.directorTitle ? 'between' : 'end';

        return (
            <div className='card card-back rounded-0'
                 style={{backgroundColor: director.color}}>
                <Row className='py-4 ps-5 pe-2 h-100 w-100'>
                    <Col xs={2} className='p-0 position-relative' style={{"margin-left": "1.5vw"}}>
                        <h1 className='m-0 gen-card-header position-absolute top-0 end-50'
                            style={props.boldHeader && boldHeaderStyle}>
                            {director.team}
                        </h1>
                    </Col>
                    <Col xs={10} className='p-0 h-100' style={{"margin-left": "4.42vw"}}>
                        <Row className='m-0 gen-card-body'>
                            {props.body}
                        </Row>
                        <Row className={`m-0 h-15 w-100 pt-2 flex-nowrap justify-content-${detailsRowJustify}`}>
                            {
                                props.directorTitle &&
                                <div className='p-0 position-details w-auto h-100'>
                                    <strong>{director.name}</strong>
                                    <br />
                                    {director.title}
                                </div>
                            }
                            <div className='p-0 w-auto h-100'>
                                <ShadowedButton fillColor='white' 
                                                yPad='0rem'
                                                xPad='.5rem'
                                                fontSize='1.2vw'
                                                text={props.buttonText}
                                                onClick={() => setFlipped((prev) => !prev)}
                                                className='no-right-margin' />
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    };

    return (
        <ReactCardFlip isFlipped={flipped} 
                    flipDirection='vertical'>
            <Card body={<Image src={director.image} className='fit-image p-0' />}
                buttonText='read bio'
                boldHeader directorTitle />
            <Card body={director.bio}
                buttonText='back' />
        </ReactCardFlip>
    );
}