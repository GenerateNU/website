import React, { useState, useEffect } from 'react';
import ShermLogo from '../../assets/images/landingpage/affiliateorgintros/Sherman_Center_Logo.png';
import MenuIcon from '@material-ui/icons/Menu'; 
import './style.css';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="bg-light p-3 mb-5 d-flex fit-content">
            {/* Todo : change the logo */}
            <img src={ShermLogo} height="50vh" width="50vw"/>
            <span className='p-3'>Apply</span>
            <span className='p-3' onClick={() => setShowMenu(true)}>
                <a className='bg-transparent shadow-none text-black border-0 text-decoration-none cursor-pointer menu-hover'>
                    Menu <MenuIcon/>
                </a>
            </span>

            <Modal 
                show={showMenu} 
                onHide={() => setShowMenu(false)}
                fullscreen={true}
            >
                <Modal.Header closeButton className='m-0'></Modal.Header>
                <Modal.Body className='m-0 px-5 overflow-hidden text-black'>
                    <Row className='m-0 p-0 menu-font-style ps-5 vh-45 text-uppercase'>
                        Menu
                    </Row>
                    <Row className='m-0 p-0 vh-40 ps-5'>
                        <Col xs={5} className='m-0 p-0 text-uppercase'>
                            <Row className='m-0 p-0'>
                                <a className='header-font-style fit-content text-decoration-none text-black'
                                    href=""
                                >
                                    Generate
                                </a>
                            </Row>
                            <Row className='m-0 p-0'>
                                <a className='header-font-style fit-content text-decoration-none text-black'
                                    href=""
                                >
                                    About
                                </a>
                            </Row>
                            <Row className='m-0 p-0'>
                                <a className='header-font-style fit-content text-decoration-none text-black'
                                    href=""
                                >
                                    Culture
                                </a>
                            </Row>
                        </Col>
                        <Col xs={5} className='m-0 p-0 text-uppercase'>
                            <Row className='m-0 p-0'>
                                <a className='header-font-style fit-content text-decoration-none text-black'
                                    href=""
                                >
                                    Teams
                                </a>
                            </Row>
                            <Row className='m-0 p-0'>
                                <a className='header-font-style fit-content text-decoration-none text-black'
                                    href=""
                                >
                                    Apply
                                </a>
                            </Row>
                            <Row className='m-0 p-0'>
                                <a className='header-font-style fit-content text-decoration-none text-black'
                                    href=""
                                >
                                    Projects
                                </a>
                            </Row>
                        </Col>
                        <Col xs={2} className='m-0 p-0 pt-2'>
                            <a className='list-font-style text-decoration-none text-black'
                                href=""
                            >
                                our mission
                            </a>
                            <br/>
                            <a className='list-font-style text-decoration-none text-black'
                                href=""
                            >
                                our values
                            </a>
                            <br/>
                            <a className='list-font-style text-decoration-none text-black'
                                href=""
                            >
                                leadership
                            </a>
                            <br/>
                            <a className='list-font-style text-decoration-none text-black'
                                href=""
                            >
                                history
                            </a>
                            <br/>
                            <a className='list-font-style text-decoration-none text-black'
                                href=""
                            >
                                why Generate
                            </a>
                        </Col>
                    </Row>
                    <Row className='m-0 p-0 w-100 vh-15 footer-font-style ps-5'>
                        <Col xs={6} className='m-0 p-0 ps-3 pe-5 text-decoration-underline'>
                            generate@northeastern.edu
                        </Col>
                        <Col xs={6} className='m-0 p-0 ps-5 gen-float-end'>
                            008C Hayden Hall
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default NavBar;