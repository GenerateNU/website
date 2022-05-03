import React, { useState } from 'react';
// Components
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import CarouselItem from 'react-bootstrap/CarouselItem';
import GenerateButton from '../../../Buttons';
import Team from './team';
// Slides data
import teamData from '../../../../data/teamData';
// Styling
import '../carousel.css';
import './style.css';

export default function TeamsCarousel() {
    const teamToIndex = {};
    teamData.map((data, index) => (teamToIndex[data.team] = index));
    const [index, setIndex] = useState(0);

    const changeSlide = e => {
        let index_ = teamToIndex[e.target.text];
        setIndex(index_);
    };

    return (
        <Container fluid className='vh-100 px-5'
                         style={{backgroundColor: '#E5F6FD'}}>
            <Row className='m-0 h-100 align-items-center'>
                <Col xs={1} className='p-0 h-auto'>
                    <h1 className='m-0 text-uppercase carousel-header'>Teams</h1>
                </Col>
                <Col xs={11} className='h-75 ps-5 pe-0'>
                    <Carousel controls={false} indicators={false}
                              className='position-relative w-100 h-100'
                              activeIndex={index}>
                        {
                            teamData.map(data => {
                                return (
                                    <CarouselItem key={data.team}>
                                        <Team data={data} />
                                    </CarouselItem>
                                );
                            })
                        }
                            
                        <Row className='m-0 h-100 position-relative'>
                            <Col xs={9}>
                            </Col>
                            <Col xs={3} className='position-relative p-0 h-100 d-flex align-items-center justify-content-center'>
                                <div className='team-nav-links position-relative h-60'>
                                    {
                                        teamData.map(data => {
                                            return (
                                                <>
                                                    <a className='team-nav-link text-decoration-none'
                                                        
                                                       onClick={changeSlide}>
                                                        {data.team}
                                                    </a>
                                                    <br/>
                                                </>
                                            );
                                        })
                                    }
                                </div>                                
                                <GenerateButton textColor='#FFFFFF' bgColor='#00A7E1' text='Join the Team' cutOff cutOffBgColor='#E5F6FD' className='position-absolute start-0 bottom-0' />  
                            </Col>
                        </Row>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}