import React, { Component, useState } from 'react';
// Components
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import CarouselItem from 'react-bootstrap/esm/CarouselItem';
import Button from 'react-bootstrap/esm/Button';
import GenerateButton from '../../../Buttons';
import Client from './client';
import Arrow from '../../../assets/images/Client_Arrow.png';
import GenerateCarousel from '../carousel';
// Slide background images
import RootedLiving from '../../../assets/images/Client_RootedLiving.jpg';
import Phoenix from '../../../assets/images/Client_Phoenix.jpg';
import Clickitz from '../../../assets/images/Client_Clickitz.jpg';
import HapticPack from '../../../assets/images/Client_HapticPack.jpg';
import Solon from '../../../assets/images/Client_Solon.jpg';
import ShowNXT from '../../../assets/images/Client_ShowNXT.jpg';
import ShortFall from '../../../assets/images/Client_ShortFall.jpg';
// Styling
import '../carousel.css';
import './style.css';

// TODO: Figure out how to isolate this into a .json file or .js file (had issues importing images trying to do this)
const clientData = [
    {
        'name': 'Rooted Living',
        'image': RootedLiving,
        'text': 'Eco-friendly, plant-based snacks that allow you to shop, snack, and support your values.',
    },
    {
        'name': 'Phoenix',
        'image': Phoenix,
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim morbi et egestas purus urna eget.',
    },
    {
        'name': 'Clickitz',
        'image': Clickitz,
        'text': 'Fostering children’s passion for making through modular playhouse toys.',
    },
    {
        'name': 'Haptic Pack',
        'image': HapticPack,
        'text': 'Bringing VR gaming experiences closer to reality through haptic feedback.',
    },
    {
        'name': 'Solon',
        'image': Solon,
        'text': 'Physical Cryptocurrency wallets for communities with unstable currencies.',
    },
    {
        'name': 'Show NXT',
        'image': ShowNXT,
        'text': 'Collegiate sport recruiting social media app turning passion into opportunity.',
    },
    {
        'name': 'Short Fall',
        'image': ShortFall,
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim morbi et egestas purus urna eget.',
    },
]

// TODO: Figure out how to add slide autoplay
export default class ClientsCarousel extends Component {
    // const [index, setIndex] = useState(0);

    // const changeSlide = e => {
    //     const numSlides = clientData.length;
    //     let index_ = index;

    //     if (e.target.value === 'next') {
    //         index_ = (index + 1) % (numSlides - 1);
    //     } else if (e.target.value === 'prev') {
    //         index_ = (index - 1);
    //     }
    //     if (index_ < 0) {
    //         index_ += numSlides;
    //     }

    //     setIndex(index_);
    // };

    render() {
        return (
            <GenerateCarousel slideComponent={Client} slideData={clientData} bgColor='#FFF9EB' buttonColor='#FFC539' buttonText='Become A Client' />
            // <Container fluid className='bg-color vh-100 px-5'>
            //     <Row className='m-0 h-100 align-items-center'>
            //         <Col xs={1} className='p-0 h-auto'>
            //             <h1 className='m-0 carousel-header'>CLIENTS</h1>
            //         </Col>
            //         <Col xs={11} className='h-75 ps-5 pe-0'>
            //             <Carousel controls={false} indicators={false}
            //                       className='position-relative w-100 h-100'
            //                       activeIndex={index}>
            //                 {clientData.map(data => (
            //                     <CarouselItem>
            //                         <Client data={data}
            //                         />
            //                     </CarouselItem>
            //                 ))}
                            
            //                 <Row className='m-0 h-100 position-relative'>
            //                     <Col xs={9}>
            //                     </Col>
            //                     <Col xs={3} className='position-relative p-0 h-100 d-flex align-items-center justify-content-center'>
            //                         <div className='position-relative h-60'>
            //                             {/* TODO: replace arrow images with div components */}
            //                             <Button value='prev' onClick={changeSlide} className='p-0 border-0 rounded-0 shadow-none'>
            //                                 <Image className="arrow-style" src={Arrow} />
            //                             </Button>
            //                             <Button value='next' onClick={changeSlide} className='p-0 border-0 rounded-0 shadow-none position-absolute bottom-0 end-0'>
            //                                 <Image className="arrow-style arrow-down" src={Arrow} />
            //                             </Button>
            //                         </div>
            //                         <GenerateButton textColor='#111111' bgColor='#FFC539' text='Become a Client' cutOff cutOffBgColor='#FFF9EB' className='position-absolute start-0 bottom-0' />  
            //                     </Col>
            //                 </Row>
            //             </Carousel>
            //         </Col>
            //     </Row>
            // </Container>
        );
    }
}