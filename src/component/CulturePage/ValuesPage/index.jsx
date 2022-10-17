import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import './style.css';
import Diversity from "./Diversity";
import Inclusion from "./Inclusion";
import Equity from "./Equity";

export default class ValuesPage extends React.Component {
    render() {
        return (
            <Container fluid className='vh-100 horizontal-scroll bg-white'>
                
                    <Diversity />
                    {/* <Inclusion /> */}
                    {/* <Equity /> */}
                
            </Container>
        );
    }
}