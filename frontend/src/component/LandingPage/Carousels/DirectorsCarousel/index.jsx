import React, { useState } from 'react';
// Components
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import CarouselItem from 'react-bootstrap/CarouselItem';
import Director from './director';
import DirectorIcon from './directorIcon';
// Slides data
import { directorData } from '../../../../data/directorData';
// Styling
import '../carousel.css';
import './style.css';

export default function DirectorsCarousel() {
    const directorToIndex = {};
    directorData.map((data, index) => (directorToIndex[data.title] = index));
    const [index, setIndex] = useState(0);

    const changeSlide = e => {
        let index_ = directorToIndex[e.currentTarget.value];
        setIndex(index_);
    };

    const thirdLength = directorData.length / 3;
    const firstThird = directorData.slice(0, thirdLength);
    const secondThird = directorData.slice(thirdLength, thirdLength * 2);
    const lastThird = directorData.slice(thirdLength * 2, directorData.length);
    const rows = [firstThird, secondThird, lastThird];
    const iconsRow = (rowData) => {
        return (
            <Row className={`w-100 h-33 m-0 ps-3 align-items-center justify-content-between`}>
                {rowData.map(data => <DirectorIcon title={data.title} 
                                                   inactiveIcon={data.inactiveIcon} 
                                                   activeIcon={data.activeIcon}
                                                   changeSlide={changeSlide} />)}
            </Row>
        );
    }

    return (
        <Container fluid className='vh-100 px-5'
                         style={{backgroundColor: '#E5F6FD'}}>
            <Row className='m-0 h-100 align-items-center'>
                <Col xs={1} className='p-0 h-auto'>
                    <h1 className='m-0 text-uppercase carousel-header'>Directors</h1>
                </Col>
                <Col xs={9} className='h-75 ps-5 pe-0'>
                    <Carousel controls={false} indicators={false}
                              className='position-relative w-100 h-100'
                              activeIndex={index}>
                        {
                            directorData.map(data => {
                                return (
                                    <CarouselItem key={data.title}>
                                        <Director data={data} />
                                    </CarouselItem>
                                );
                            })
                        }
                    </Carousel>
                </Col>

                <Col xs={2} className='p-0 h-40 d-flex justify-content-end align-items-center'>
                    <div className='h-100 w-80'>
                        {rows.map(row => iconsRow(row))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}