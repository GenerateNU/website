import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import './style.css';
import CollageSection from "../CulturePage/Collage"

export default class CulturePage extends React.Component {
    render() {
        return (

            <Container fluid className='vh-100 horizontal-scroll'>
                <Row className='flex-nowrap'>
                <CollageSection />
         {/* Add components of culture page here  */}
                </Row>
            </Container>
        );
    }
}
