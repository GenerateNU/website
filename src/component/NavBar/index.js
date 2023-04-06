import React from 'react';
import {useState} from 'react';
import GenerateLogo from "../../assets/images/landingpage/affiliateorgintros/Generate Logo_Nav.png";
import MenuIcon from '@material-ui/icons/Menu'; 
import './style.css';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Menu } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    const navigateHome = () => {navigate("/");};
    const navigateApply = () => {navigate("/apply");};

    return (
        <div className="bg-light p-2 mb-5 d-flex bar-size justify-content-around align-items-center border border-dark h-10 w-10">
            {/* Todo : change the logo */}
            <img style={{width: 'min(3.5vmin, 40px)', height: 'auto'}} src={GenerateLogo} onClick={navigateHome}/>
            <span className='font-size bg-transparent shadow-none text-black border-0 text-decoration-none text-uppercase cursor-pointer menu-hover align-item-center' onClick={navigateApply}>Apply</span>
            <span className='d-flex align-items-center' onClick={() => setShowMenu(true)}>
                <a className='font-size bg-transparent shadow-none text-black border-0 text-decoration-none text-uppercase cursor-pointer menu-hover align-items-center'>
                    Menu                     
                </a>
                <MenuIcon style={{height: 'min(2.5vmax, 35px)', width: 'auto'}}/>
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
                                    href="/"
                                >
                                    Generate
                                </a>
                            </Row>
                            <Row className='m-0 p-0'>
                                <a className='header-font-style fit-content text-decoration-none text-black'
                                    href="/about"
                                >
                                    About
                                </a>
                            </Row>
                            <Row className='m-0 p-0'>
                                <a className='header-font-style fit-content text-decoration-none text-black'
                                    href="/culture"
                                >
                                    Culture
                                </a>
                            </Row>
                        </Col>
                        <Col xs={5} className='m-0 p-0 text-uppercase'>
                            <Row className='m-0 p-0'>
                            <a className='header-font-style fit-content text-decoration-none text-black'
                                    href="/teams"
                                >
                                    Teams
                                </a>
                            </Row>
                            <Row className='m-0 p-0'>
                                <a className='header-font-style fit-content text-decoration-none text-black'
                                    href="/apply"
                                >
                                    Apply
                                </a>
                            </Row>
                            <Row className='m-0 p-0'>
                                <div className='disabled-font-style fit-content text-decoration-none text-black'
                                    
                                >
                                    Projects
                                </div>
                            </Row>
                        </Col>
                        {/* <Col xs={2} className='m-0 p-0 pt-2'>
                            <a className='list-font-style text-decoration-none text-black'
                                href="/about"
                            >
                                our mission
                            </a>
                            <br/>
                            <a className='list-font-style text-decoration-none text-black'
                                href="/about"
                            >
                                our values
                            </a>
                            <br/>
                            <a className='list-font-style text-decoration-none text-black'
                                href="/about"
                            >
                                leadership
                            </a>
                            <br/>
                            <a className='list-font-style text-decoration-none text-black'
                                href="/about"
                            >
                                history
                            </a>
                            <br/>
                            <a className='list-font-style text-decoration-none text-black'
                                href="/about"
                            >
                                why Generate
                            </a>
                        </Col> */}
                    </Row>
                    <Col><div className="v1"></div></Col>
                    <hr
                        style={{
                        background: 'black',
                        color: 'black',
                        borderColor: 'black',
                        height: '2px',
                        marginRight: '15px',
                        width: 'px'
                        }}
                    />
                    {/* <Row className='m-0 p-0 w-100 vh-15 footer-font-style ps-5'>
                        <Col xs={6} className='m-0 p-0 ps-3 pe-5 text-decoration-underline'>
                            generate@northeastern.edu
                        </Col>
                        <Col xs={6} className='m-0 p-0 ps-5 gen-float-end'>
                            008C Hayden Hall
                        </Col>
                    </Row> */}
                  <div class="flexbox">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>

        <div class="flexbox2">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
           <div class="item"></div>
        </div>

        </div>

      
                    <div className="rectangleLogo"></div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default NavBar;