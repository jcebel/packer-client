import React from 'react';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export class DeliveryDetails extends React.Component {

    capFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        return (
            <div>
                <Card>
                    <p/>
                    <Card.Img variant="top" src="/Images/driver.svg" width="110px" height="50x" alt="Driver Details"/>
                    <Card.Body>
                        <Card.Title className="font-weight-bold">
                            Driver Details:<br/>
                        </Card.Title>
                        {this.props.deliveryState === "Cancelled" ? <Row><Col className="text-center">No driver was found for this item.
                                <br/>It will not be delivered.<br/>Please submit a new Delivery Request.</Col></Row> :
                            <>
                                <Row>
                                    <Col>Driver Name:</Col>
                                    <Col>{this.props.noDriver ?
                                        <i>Coming soon...</i> : this.props.data.driverName}</Col>
                                </Row>
                                <Row>
                                    <Col>Vehicle Type: </Col>
                                    <Col>{this.props.noDriver ?
                                        <i>Coming soon...</i> : this.capFirst(this.props.data.vehicleType)}</Col>
                                </Row>
                            </>
                        }
                    </Card.Body>
                </Card>
                <Card>
                    <p/>
                    <Card.Img variant="top" src="/Images/packageIcon.svg" width="110px" height="50x"
                              alt="Driver Details"/>
                    <Card.Body>
                        <Card.Title className="font-weight-bold">
                            Delivery Details:
                        </Card.Title>
                        <Row>
                            <Col>Size:</Col>
                            <Col>{this.capFirst(this.props.data.deliverygood.size)}</Col>
                        </Row>
                        <Row>
                            <Col>Weight:</Col>
                            <Col>{this.capFirst(this.props.data.deliverygood.weight)}</Col>
                        </Row>
                        <Row>
                            <Col>Distance:</Col>
                            <Col>{(this.props.data.deliverygood.distance).toFixed(1)} km</Col>
                        </Row>
                        <Row>
                            <Col>Price:</Col>
                            <Col>{this.props.data.deliverygood.price} €</Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}