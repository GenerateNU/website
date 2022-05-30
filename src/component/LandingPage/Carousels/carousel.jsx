import React, { useState } from 'react';
// Components
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import CarouselItem from 'react-bootstrap/CarouselItem';
import Button from 'react-bootstrap/Button';
import GenerateButton from '../../Buttons';
import Arrow from '../../../assets/images/Client_Arrow.png';
// Styling
import './carousel.css';

// TODO: Figure out how to add slide autoplay
/**
 * 
 * @param {*} props expects header, slideComponent, slideData, bgColor, buttonColor, and buttonText
 * @returns 
 */
export default function GenerateCarousel(props) {
    const [index, setIndex] = useState(0);
    const slideData = props.slideData;

    const changeSlide = e => {
        console.log(`index=${index}`);
        const numSlides = slideData.length;
        let index_ = index;

        if (e.target.value === 'next') {
            console.log('here 1');
            index_ = (index + 1) % (numSlides - 1);
        } else if (e.target.value === 'prev') {
            console.log('here 2');
            index_ = (index - 1);
        }
        if (index_ < 0) {
            console.log('here 3');
            index_ += numSlides;
        }
        console.log(`e.target.value=${e.target.value}`);

        console.log(`new index=${index_}`);

        setIndex(index_);
    };

    return (
        <Container fluid className='vh-100 px-5'
                         style={{backgroundColor: props.bgColor}}>
            <Row className='m-0 h-100 align-items-center'>
                <Col xs={1} className='p-0 h-auto'>
                    <h1 className='m-0 text-uppercase carousel-header'>{props.header}</h1>
                </Col>
                <Col xs={11} className='h-75 ps-5 pe-0'>
                    <Carousel controls={false} indicators={false}
                              className='position-relative w-100 h-100'
                              activeIndex={index}>
                        {slideData.map(data => {
                            const SlideComponent = props.slideComponent;

                            return (
                                <CarouselItem>
                                    <SlideComponent data={data} />
                                </CarouselItem>
                            );
                        })}
                            
                        <Row className='m-0 h-100 position-relative'>
                            <Col xs={9}>
                            </Col>
                            <Col xs={3} className='position-relative p-0 h-100 d-flex align-items-center justify-content-center'>


                                <div className='position-relative h-60'>
                                    {/* TODO: replace arrow images with div components */}
                                    <Button value='prev' onClick={changeSlide} className='p-0 border-0 rounded-0 shadow-none'>
                                        <Image className="arrow-style" src={Arrow} />
                                    </Button>
                                    <Button value='next' onClick={changeSlide} className='p-0 border-0 rounded-0 shadow-none position-absolute bottom-0 end-0'>
                                        <Image className="arrow-style arrow-down" src={Arrow} />
                                    </Button>
                                </div>

                                
                                <GenerateButton textColor='#111111' bgColor={props.buttonColor} text={props.buttonText} cutOff cutOffBgColor={props.bgColor} className='position-absolute start-0 bottom-0' />  
                            </Col>
                        </Row>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}