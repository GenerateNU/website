import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import ProductDevelopment from "./ProductDevelopment";
import './style.css';

export default class LandingPageV2 extends React.Component {
    render() {
        return (
            <Container fluid className='vh-100 horizontal-scroll bg-black'>
                <Row className='flex-nowrap'>
                   <ProductDevelopment />
                </Row>
            </Container>
        );
    }
}
