import React, { Component } from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class BiddingInformation extends Component{

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h4>
                    Bidding Information
                </h4>
                <Container>
                    <Row>
                        <Col>
                            <div className="font-weight-bold">Current Bid</div>
                            <p>
                                50 €
                            </p>
                        </Col>

                        <Col>
                            <div className="font-weight-bold">Number of Bids</div>
                            <p>
                                8
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="font-weight-bold">Vehicle Type</div>
                            <p>
                                <Button variant="light">Car</Button>
                                <Button variant="secondary">Van</Button>
                                <Button variant="light">Bike</Button>
                            </p>
                        </Col>

                        <Col>
                            <div className="font-weight-bold">Your bid</div>
                            <p>
                                <input type="text"/>
                                <Button variant="success">Submit</Button>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default BiddingInformation;