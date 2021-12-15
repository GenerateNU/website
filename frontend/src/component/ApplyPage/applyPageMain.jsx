import React, { Component } from 'react'
import useFetch from 'react-fetch-hook'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'


export class applyPageMain extends Component {

    displayJobCards() {
        return <h1>hi</h1>
    }

    render() {
        return (
            <div className="applyPage">
                <Container fluid>
                    <Row className="et_pb_row_0">
                        <Col md="auto">
                            <div className="applyPageButtonContainer">
                                <button className="applyPageButtons" onClick={this.displayJobCards()}>All Teams</button>
                                <button className="applyPageButtons">Management</button>
                                <button className="applyPageButtons">Outreach</button>
                                <button className="applyPageButtons">Operations</button>
                                <button className="applyPageButtons">Software</button>
                                <button className="applyPageButtons">Hardware</button>
                                <button className="applyPageButtons">Community</button>

                            </div>
                        </Col>
                        <Col>
                            <div>
                                {/* {this.displayJobCards()} */}
                                <div className="cardContainer">
                                    <div class="cards">
                                        <div class="container">
                                            <h4><b>John Doe</b></h4>
                                            <p>Architect & Engineer</p>
                                        </div>
                                        <div class="cardDescriptionLayer">
                                            <p class="cardDescription">
                                                Strengthening an inclusive and compassionate learning community for developing team-members,
                                                leaders, and entrepreneurs through hands-on technical
                                                and professional experiences.</p>
                                        </div>
                                    </div>
                                    <div class="cards">
                                        <div class="container">
                                            <h4><b>John Doe</b></h4>
                                            <p>Architect & Engineer</p>
                                        </div>
                                    </div>
                                    <div class="cards">
                                        <div class="container">
                                            <h4><b>John Doe</b></h4>
                                            <p>Architect & Engineer</p>
                                        </div>
                                    </div>
                                    <div class="cards">
                                        <div class="container">
                                            <h4><b>John Doe</b></h4>
                                            <p>Architect & Engineer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        );
    }
}

export default applyPageMain