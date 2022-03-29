import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ShadowedButton from '../ShadowedButton';
import './style.css';

export default function Position() {

    return (
        <Container fluid className='p-0'>
            <Row className='vh-100 m-0'>
                {/* Left */}
                <Col xs={6} className='left-color h-100 p-0 pt-5 px-5'>
                    <Row className='m-0 h-75'>
                        <Col>
                            <h1 className='position-title'>Executive Director</h1>
                            <h1 className='position-title position-type'>Management</h1>
                        </Col>
                    </Row>
                    <Row className='m-0 h-25 align-items-center justify-content-center'>
                        <Row className='m-0'>
                            {/* TODO: If position is closed, then first button is white "notify me" */}
                            <ShadowedButton fillColor='#FFBF3C' text='apply now' xPad='4rem'
                                            className='me-5' />
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
                        The Executive Director is responsible for creating and executing
                        their vision of Generate. This role is responsible for leading
                        Generate’s management team and the organization as a whole. The
                        Executive Director facilitates day-to-day Generate operations
                        while determining the overarching big-picture goals of the
                        organization.
                    </p>

                    {/* Position requirements */}
                    <h3 className='py-3 fw-500'>What you’ll do</h3>
                    <ul className='pb-0 mb-0'>
                        <li className='mb-4'>
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
                        </li>
                    </ul>

                    {/* Position qualifications */}
                    <h3 className='py-3'>Who you are</h3>
                    <ul>
                        <li>Understanding of their own personal leadership style.</li>
                        <li>Ability to lead and inspire others.</li>
                        <li>Capable of strategically identifying and solving problems.</li>
                        <li>Clear and concise communication skills.</li>
                        <li>Passionate about others’ growth.</li>
                        <li>Preferred experience in Generate.</li>
                    </ul>

                    {/* Position timeline */}
                    <Row className='py-4'>
                        <Col className='date'>
                            <h4>Duration</h4>
                            <h3>May 2022 - May 2023</h3>
                        </Col>
                        <Col className='hours'>
                            <h4>Weekly commitment</h4>
                            <h3>Up to 20 hours</h3>
                        </Col>
                    </Row>
                    <h3 className='pt-4 pb-5'>
                        This position begins and ends with the Northeastern academic
                        semester. The last day to apply is January 17th.
                    </h3>

                    {/* Link to information about position type */}
                    <a className='text-decoration-none' href='#'>
                        {/* TODO: extract management, keyword probably diff. per position type */}
                        <u> learn more about the management team</u> -- &gt;
                    </a>
                </Col>
            </Row>
        </Container>
    );
}