import React, { useState } from 'react';
// Components
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import CarouselItem from 'react-bootstrap/CarouselItem';
import GenerateButton from '../../../Buttons';
import Team from './team';
// Slide background images
import Community from '../../../assets/images/Teams_Community.jpg';
import Hardware from '../../../assets/images/Teams_Hardware.jpg';
import Management from '../../../assets/images/Teams_Management.jpg';
import Operations from '../../../assets/images/Teams_Operations.jpg';
import Outreach from '../../../assets/images/Teams_Outreach.jpg';
import Software from '../../../assets/images/Teams_Software.jpg';
// Styling
import '../carousel.css';
import './style.css';

const teamData = [
    {
        'team': 'Management',
        'image': Management,
        'text': 'The Management Team ensures alignment across our organization. The team drives our teams to excel through collaboration and innovative thinking - ensuring Generate is functioning at its peak. Our management team is responsible for directing Generate’s yearly focus.',
    },
    {
        'team': 'Outreach',
        'image': Outreach,
        'text': "The Outreach Team is the face of Generate - promoting our members' clients through facilitating all media and branding content. The Outreach Team is responsible for recruiting both members and clients, guiding the direction of the organization.",
    },
    {
        'team': 'Operations',
        'image': Operations,
        'text': 'Operations optimizes our business functions: ensuring short and long term efficiency. We  works together to adopt principles of organization, communication, and process improvement across Generate to produce tangible benefit for all present and future members across our organization.',
    },
    {
        'team': 'Software',
        'image': Software,
        'text': 'Our Software Build Studio develops industry-leading software for client’s and Generate’s internal projects. Our  teams work directly with clients to define a scope of work, guiding the creation and iteration of solution prototypes before handing off a refined product to clients.',
    },
    {
        'team': 'Hardware',
        'image': Hardware,
        'text': 'From mechanical systems to electrical development, our Build Studio helps entrepreneurs by overcoming technical hurdles in development to accelerate their ventures; all while providing an educational experience for the engineers and designers of Generate. Our teams navigate the development cycle to iterate innovative solutions.',
    },
    {
        'team': 'Community',
        'image': Community,
        'text': 'From mechanical systems to electrical development, our Build Studio helps entrepreneurs by overcoming technical hurdles in development to accelerate their ventures; all while providing an educational experience for the engineers and designers of Generate. Our teams navigate the development cycle to iterate innovative solutions.',
    },
];

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