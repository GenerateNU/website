import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import useFetch from '../../useFetch';
import ShadowedButton from '../ShadowedButton';
import './style.css';
import { useParams } from 'react-router-dom';

export default function Position() {
    const { id } = useParams();
    // const id = 1;
    const data = useFetch(`http://localhost:1337/api/positions/${id}`);

    if (data === null) {
        return <div>Error fetching data from server</div>
    }

    const position = data.data.attributes;

    return (
        <Container fluid className='p-0'>
            <Row className='vh-100 m-0'>
                {/* Left */}
                <Col xs={6} className='left-color h-100 p-0 pt-5 px-5'>
                    <Row className='m-0 h-75'>
                        <Col>
                            <h1 className='position-title'>{position.positionTitle}</h1>
                            <h1 className='position-title position-type'>{position.categoryType}</h1>
                        </Col>
                    </Row>
                    <Row className='m-0 h-25 align-items-center justify-content-center'>
                        <Row className='m-0'>
                            {
                                (position.open &&
                                    <ShadowedButton fillColor='#FFBF3C' text='apply now' xPad='4rem'
                                            className='me-5' />) ||
                                (!position.open &&
                                    <ShadowedButton fillColor='white' text='notify me' xPad='4rem'
                                            className='me-5' />)
                            }
                            <ShadowedButton fillColor='white' text='share' xPad='1.5rem'
                                            className='ms-5' />
                        </Row>
                    </Row>
                </Col>

                {/* Right */}
                <Col xs={6} className='h-100 p-0 py-5 px-5 overflow-auto position-info'>
                    {/* Link back to list of positions */}
                    <a className='text-decoration-none' href='#'>
                        &lt; -- <u> positions</u>
                    </a>

                    {/* Position summary */}
                    <p className='position-summary my-5'>
                        {position.description}
                    </p>

                    {/* Position responsibilities */}
                    <h3 className='py-3 fw-500'>What you’ll do</h3>
                    <ul className='pb-0 mb-0'>
                        {/* NOTE: I expect the responsibilities to be a list of long strings */}
                        <li>{position.responsibilities}</li>
                        {/* {
                            position.responsibilities.map((info, index) => 
                                <li key={index} className='mb-4'>{info}</li>
                            )
                        } */}

                        {/* <li className='mb-4'>
                            Generate’s Executive Director is responsible for determining,
                            appointing, and developing all Management team positions. This
                            role is also responsible for representing Generate, building
                            relationships with other student-led organizations and
                            University professionals, and will be expected to speak on
                            behalf of Generate at all internal and external events.
                        </li>
                        <li className='mb-4'>
                            The Fall 2022-Spring 2023 Executive Director will be expected to
                            create both long-term and short-term organizational and personal
                            goals and deliver on these promises. These goals should promote
                            Generate’s mission and the vision created by this role at the
                            start of their term.
                        </li> */}
                    </ul>

                    {/* Position qualifications */}
                    <h3 className='py-3'>Who you are</h3>
                    <ul>
                        {/* NOTE: I expect the requirements to be a list of long strings */}
                        <li>{position.requirements}</li>
                        {/* {
                            position.requirements.map((info, index) => 
                                <li key={index}>{info}</li>
                            )
                        } */}
                        {/* <li>Understanding of their own personal leadership style.</li>
                        <li>Ability to lead and inspire others.</li>
                        <li>Capable of strategically identifying and solving problems.</li>
                        <li>Clear and concise communication skills.</li>
                        <li>Passionate about others’ growth.</li>
                        <li>Preferred experience in Generate.</li> */}
                    </ul>

                    {/* Position timeline */}
                    <Row className='py-4'>
                        <Col className='date'>
                            <h5>Duration</h5>
                            {/* NOTE: I think this should be separated into start and end months fields */}
                            <h4>{position.startDate} - {position.endDate}</h4>
                        </Col>
                        <Col className='hours'>
                            <h5>Weekly commitment</h5>
                            {/* NOTE: Field does not yet exist */}
                            <h4>Up to {position.weeklyCommitment} hours</h4>
                        </Col>
                    </Row>
                    <h4 className='pt-4 pb-5'>
                        {/* NOTE: Field does not yet exist */}
                        This position begins and ends with the Northeastern academic
                        semester. The last day to apply is {position.applicationDeadline}.
                    </h4>

                    {/* Link to information about position type */}
                    <a className='text-decoration-none' href='#'>
                        {/* TODO: extract management, keyword probably diff. per position type */}
                        <u> learn more about the <span className='text-lowercase'>{position.categoryType}</span> team</u> -- &gt;
                    </a>
                </Col>
            </Row>
        </Container>
    );
}