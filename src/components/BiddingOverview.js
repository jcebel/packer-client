import React, { Component } from 'react';
import { Container, Row, Col, Button, Card, Table } from 'react-bootstrap';
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
                        <h4>Route Details</h4>
                            <div className="font-weight-bold">Length</div>
                            <p>
                                4.3 km<br/>
                            </p>
                            <div className="font-weight-bold">Number of packages</div>
                            <p>
                                3<br/>
                            </p>
                        <h4>Package List</h4>
                            <Table striped bordered hover size="sm">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Item</th>
                                    <th>Size</th>
                                    <th>Weight</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Dish Set</td>
                                    <td>Medium</td>
                                    <td>Heavy</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Smartphone</td>
                                    <td>Small</td>
                                    <td>Light</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Wine Bottle</td>
                                    <td>Medium</td>
                                    <td>Light</td>
                                </tr>
                                </tbody>
                            </Table>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8}>
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
                    </Col>
                </Row>
            </Container>

        );
    }

}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAf7aIGVns1ktVf5sw__NGaygucuRsqCiw'
})(BiddingOverview);