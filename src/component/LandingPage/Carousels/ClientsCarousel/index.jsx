import React, { useState } from 'react';
// Components
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import CarouselItem from 'react-bootstrap/CarouselItem';
import Button from 'react-bootstrap/Button';
import GenerateButton from '../../../Buttons';
import Arrow from '../../../../assets/images/landingpage/clientscarousel/Nav_Arrow.png';
import Client from './client';
// Slides data
import clientData from '../../../../data/clientData';
// Styling
import '../carousel.css';
import './style.css';

export default function ClientsCarousel() {
    const [index, setIndex] = useState(0);

    const changeSlide = direction => {
        const numSlides = clientData.length;
        let index_ = index;

        if (direction === 'down') {
            index_ = (index + 1) % (numSlides - 1);
        } else if (direction === 'up') {
            index_ = (index - 1);
        }
        if (index_ < 0) {
            index_ += numSlides;
        }

        setIndex(index_);
    };

    return (
        <Container fluid className='vh-100 px-5'
                         style={{backgroundColor: '#FFF9EB'}}>
            <Row className='m-0 h-100 align-items-center'>
                <Col xs={1} className='p-0 h-auto'>
                    <h1 className='m-0 text-uppercase carousel-header'>Clients</h1>
                </Col>
                <Col xs={11} className='h-75 ps-5 pe-0'>
                    <Carousel controls={false} indicators={false}
                              className='position-relative w-100 h-100'
                              activeIndex={index}>
                        {clientData.map(data => {
                            return (
                                <CarouselItem key={data.name}>
                                    <Client data={data} />
                                </CarouselItem>
                            );
                        })}
                            
                        <Row className='m-0 h-100 position-relative'>
                            <Col xs={9}>
                            </Col>
                            <Col xs={3} className='position-relative p-0 h-100 d-flex align-items-center justify-content-center'>


                                <div className='position-relative h-60'>
                                    {/* TODO: replace arrow images with div components */}
                                    <Button 
                                        onMouseEnter={() => changeSlide('up')} 
                                        onClick={() => changeSlide('up')} 
                                        className='bg-transparent p-0 border-0 rounded-0 shadow-none'>
                                        <Image className="arrow-style" src={Arrow} />
                                    </Button>
                                    <Button 
                                        onMouseEnter={() => changeSlide('down')} 
                                        onClick={() => changeSlide('down')} 
                                        className='bg-transparent p-0 border-0 rounded-0 shadow-none position-absolute bottom-0 end-0'>
                                        <Image className="arrow-style arrow-down" src={Arrow} />
                                    </Button>
                                </div>

                                
                                <GenerateButton textColor='#111111' bgColor='#FFC539' text='Become a Client' cutOff cutOffBgColor='#FFF9EB' className='position-absolute start-0 bottom-0' />  
                            </Col>
                        </Row>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}