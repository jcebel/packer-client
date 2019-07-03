import React, { Component } from 'react';

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Page from "./Page";


class MonitorList extends Component {
    render() {
        return (
            <Page>
                <Container>
                    <p/>
                    <div className="list-group">{/*https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-list-groups.php*/}
                        <a href="#" className="list-group-item list-group-item-action">
                            <div className="d-flex justify-content-between text-secondary">
                                    <div><b>Date:</b> 13.06.2019</div>
                                    <div><b>Price:</b> 7,00 €</div>
                                <div><b>Delivery No.:</b> PA-1906130087</div>
                            </div>
                            <p/>
                            <Row>
                                <Col className="align-self-center text-center h3">
                                    <p className="h3 font-weight-bold">
                                        Chair
                                    </p>
                                        <Badge variant="warning">Waiting for Routing</Badge>
                                </Col>
                                <Col>
                                    <div className="font-weight-bold">Sender</div>
                                    <p>
                                        Jon Doe<br/>
                                        Mainstreet 2<br/>
                                        0000 Musterstadt<br/>
                                    </p>
                                    <div className="font-weight-bold">Recipient</div>
                                    <p>
                                        Jon Doe<br/>
                                        Mainstreet 2<br/>
                                        0000 Musterstadt<br/>
                                    </p>
                                </Col>
                                <Col className="align-self-center text-center">
                                    <p>
                                        <Button href="#" variant="secondary" size="xs">More Info</Button>
                                    </p>
                                    <p>
                                        <Button href="#" variant="danger" size="xs">Delete</Button>
                                    </p>
                                </Col>
                            </Row>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                            <div className="d-flex justify-content-between text-secondary">
                                <div><b>Date:</b> 13.06.2019</div>
                                <div><b>Price:</b> 20,00 €</div>
                                <div><b>Delivery No.:</b> PA-1906130084</div>
                            </div>
                            <p/>
                            <Row>
                                <Col className="align-self-center text-center h3">
                                    <p className="h3 font-weight-bold">
                                        Dish Set
                                    </p>
                                    <Badge variant="info">In Delivery</Badge>
                                </Col>
                                <Col>
                                    <div className="font-weight-bold">Sender</div>
                                    <p>
                                        Jon Doe<br/>
                                        Mainstreet 2<br/>
                                        0000 Musterstadt<br/>
                                    </p>
                                    <div className="font-weight-bold">Recipient</div>
                                    <p>
                                        Jon Doe<br/>
                                        Mainstreet 2<br/>
                                        0000 Musterstadt<br/>
                                    </p>
                                </Col>
                                <Col className="align-self-center text-center">
                                    <p>
                                        <Button variant="secondary">More Info</Button>
                                    </p>
                                </Col>
                            </Row>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                            <div className="d-flex justify-content-between text-secondary">
                                <div><b>Date:</b> 11.06.2019</div>
                                <div><b>Price:</b> 3,00 €</div>
                                <div><b>Delivery No.:</b> PA-1906110022</div>
                            </div>
                            <p/>
                            <Row>
                                <Col className="align-self-center text-center h3">
                                    <p className="h3 font-weight-bold">
                                        Documents
                                    </p>
                                    <Badge variant="success">Delivered</Badge>
                                </Col>
                                <Col>
                                    <div className="font-weight-bold">Sender</div>
                                    <p>
                                        Jon Doe<br/>
                                        Mainstreet 2<br/>
                                        0000 Musterstadt<br/>
                                    </p>
                                    <div className="font-weight-bold">Recipient</div>
                                    <p>
                                        Jon Doe<br/>
                                        Mainstreet 2<br/>
                                        0000 Musterstadt<br/>
                                    </p>
                                </Col>
                                <Col className="align-self-center text-center">
                                    <p>
                                        <Button variant="secondary">More Info</Button>
                                    </p>
                                </Col>
                            </Row>
                        </a>
                    </div>
                </Container>
            </Page>
        );
    }
}
export default MonitorList;