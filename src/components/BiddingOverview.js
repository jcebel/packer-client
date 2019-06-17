import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '95%',
    height: '95%',
};

const rowstyle = {
    height: '350px',
};

class BiddingOverview extends Component{

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Row style= {rowstyle} >
                    <Col sm={8}>
                        <Map
                            google={this.props.google}
                            zoom={15}
                            style={mapStyles}
                            initialCenter={{ lat: 48.262235, lng: 11.670273}}
                        />
                    </Col>
                    <Col>
                        <h2>Route Details</h2>
                        <Container>
                            <Row>
                                <Col>Length</Col>
                                <Col>4.3 km</Col>
                            </Row>
                            <Row>
                                <Col>Number of packages</Col>
                                <Col>3</Col>
                            </Row>
                        </Container>
                        <h2>Package List</h2>
                        <Container>
                            <Row>
                                <Col>Item</Col>
                                <Col>Size</Col>
                                <Col>Weight</Col>
                            </Row>
                            <Row>
                                <Col>Dish Set</Col>
                                <Col>Smartphone</Col>
                                <Col>Wine Bottle</Col>
                            </Row>
                            <Row>
                                <Col>Medium</Col>
                                <Col>Small</Col>
                                <Col>Small</Col>
                            </Row>
                            <Row>
                                <Col>Heavy</Col>
                                <Col>Light</Col>
                                <Col>Medium</Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8}>
                        <h2>
                            Bidding Information
                        </h2>
                        <Container>
                            <Row>
                                <Col>Vehicle Type</Col>
                                <Col><Button variant="light">Car</Button>
                                    <Button variant="secondary">Van</Button>
                                    <Button variant="light">Bike</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>Current Bid:</Col>
                                <Col>50 €</Col>
                                <Col>Number of Bids:</Col>
                                <Col>50</Col>
                            </Row>
                            <Row>
                                <Col>Your bid: </Col>
                                <Col><input type="text"/></Col>
                                <Col><Button variant="success">Submit</Button></Col>
                            </Row>

                        </Container>

                    </Col>
                </Row>
            </Container>

        );
    }

}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAf7aIGVns1ktVf5sw__NGaygucuRsqCiw'
})(BiddingOverview);