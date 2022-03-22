import React, { useState } from 'react';
// Components
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/esm/Image';
import CarouselItem from 'react-bootstrap/CarouselItem';
import Director from './director';
import DirectorIcon from './directorIcon';
// Slide background images
import KathrynMinor from '../../../assets/images/Director_KathrynMinor.jpg';
import AvitalBrodski from '../../../assets/images/Director_AvitalBrodski.jpg';
import AndrewCataldo from '../../../assets/images/Director_AndrewCataldo.jpg';
import ThomasKeith from '../../../assets/images/Director_ThomasKeith.jpg';
import JoshBatra from '../../../assets/images/Director_JoshBatra.jpg';
import KyleJanko from '../../../assets/images/Director_JoshBatra.jpg';
// Team icons
import ManagementActiveIcon from '../../../assets/images/Management_Icon.png';
import OutreachActiveIcon from '../../../assets/images/Outreach_Icon.png';
import OperationsActiveIcon from '../../../assets/images/Operations_Icon.png';
import SoftwareActiveIcon from '../../../assets/images/Software_Icon.png';
import HardwareActiveIcon from '../../../assets/images/Hardware_Icon.png';
import CommunityActiveIcon from '../../../assets/images/Community_Icon.png';
import ManagementInactiveIcon from '../../../assets/images/Management_Grey.png';
import OutreachInactiveIcon from '../../../assets/images/Outreach_Grey.png';
import OperationsInactiveIcon from '../../../assets/images/Operations_Grey.png';
import SoftwareInactiveIcon from '../../../assets/images/Software_Grey.png';
import HardwareInactiveIcon from '../../../assets/images/Hardware_Grey.png';
import CommunityInactiveIcon from '../../../assets/images/Community_Grey.png';
// Styling
import '../carousel.css';
import './style.css';

const directorData = [
    {
        'title': 'Executive Director',
        'activeIcon': ManagementActiveIcon,
        'inactiveIcon': ManagementInactiveIcon,

        'name': 'Kathryn Minor',
        'image': KathrynMinor,
        'emailUsername': 'minor.k',
    },
    {
        'title': 'Outreach Director',
        'activeIcon': OutreachActiveIcon,
        'inactiveIcon': OutreachInactiveIcon,

        'name': 'Avital Brodski',
        'image': AvitalBrodski,
        'emailUsername': '???',
    },
    {
        'title': 'Operations Director',
        'activeIcon': OperationsActiveIcon,
        'inactiveIcon': OperationsInactiveIcon,

        'name': 'Andrew Cataldo',
        'image': AndrewCataldo,
        'emailUsername': ':)',
    },
    {
        'title': 'Software Director',
        'activeIcon': SoftwareActiveIcon,
        'inactiveIcon': SoftwareInactiveIcon,

        'name': 'Thomas Keith',
        'image': ThomasKeith,
        'emailUsername': ':|',
    },
    {
        'title': 'Hardware Director',
        'activeIcon': HardwareActiveIcon,
        'inactiveIcon': HardwareInactiveIcon,

        'name': 'Josh Batra',
        'image': JoshBatra,
        'emailUsername': ':(',
    },
    {
        'title': 'Community Director',
        'activeIcon': CommunityActiveIcon,
        'inactiveIcon': CommunityInactiveIcon,

        'name': 'Kyle Janko',
        'image': KyleJanko,
        'emailUsername': ':((',
    },
];

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
        let marginInBetween = 'mb-3 ';
        if (rows.indexOf(rowData) === rows.length - 1) {
            marginInBetween = '';
        }

        return (
            <Row className={`w-100 h-33 m-0 ${marginInBetween}align-items-center justify-space-between`}>
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

                <Col xs={2} className='p-0 h-35 d-flex justify-content-center align-items-center'>
                    <div className='fit-content'>
                        {rows.map(row => iconsRow(row))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}