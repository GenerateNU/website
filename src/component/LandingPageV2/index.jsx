import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import './style.css';
import Management from "./Management"

export default class AboutPage extends React.Component {
    render() {
        return (
            <Container fluid className='vh-100 horizontal-scroll'>
                <Row className='flex-nowrap'>
                    
                    <Management />
                  
                   
                </Row>
            </Container>
        );
    }
}
